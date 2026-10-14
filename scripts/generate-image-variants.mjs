/**
 * 把 public/product 下的设计稿截图转换为多档 WebP，并生成 lib/product-images.ts 清单。
 *
 * 背景：生产环境（Cloudflare Workers）上的 /_next/image 没有绑定图像优化器，
 * 只会把原始 PNG 原样返回；1.8MB 的 PNG 在首次访问（新设备 / 无痕）时逐张下载，
 * 视觉上就是“从空白到突然出现”。这里预先生成静态 WebP，体积通常只有 PNG 的 20%~30%，
 * 且由静态资源直接发布，不依赖运行时的图像转换。
 *
 * 用法：
 *   node scripts/generate-image-variants.mjs
 *
 * 依赖 sharp（项目 node_modules 中已存在；若缺失先执行 `npm i -D sharp`）。
 * 更换截图后重跑本脚本即可，它会同时刷新 public/product/*.webp 与 lib/product-images.ts。
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(projectRoot, 'public', 'product');
const manifestPath = path.join(projectRoot, 'lib', 'product-images.ts');

/** 截图的文件名（不含扩展名），与 public/product 中的源 PNG 对应 */
const SHOTS = [
  'dashboard',
  'files',
  'send-receive',
  'swarm',
  'storage-governance',
  'local-transfer',
];

/** 生成的宽度档位：手机 / 常规桌面 / 高 DPI 大屏 */
const WIDTHS = [800, 1600, 2400];

/** WebP 质量：80 在 UI 截图上几乎看不出差别，体积却明显更小 */
const QUALITY = 80;

/** 模糊占位图的宽度（LQIP），会内联为 data URL */
const BLUR_WIDTH = 16;
const BLUR_QUALITY = 40;

async function buildShot(name) {
  const input = path.join(sourceDir, `${name}.png`);
  const meta = await sharp(input).metadata();
  if (!meta.width || !meta.height) {
    throw new Error(`无法读取图片尺寸：${input}`);
  }

  const variants = [];
  for (const width of WIDTHS) {
    // 不放大：源图较窄时保持原始宽度
    const targetWidth = Math.min(width, meta.width);
    const file = `${name}-${width}.webp`;
    const { size } = await sharp(input)
      .resize({ width: targetWidth })
      .webp({ quality: QUALITY, effort: 5 })
      .toFile(path.join(sourceDir, file));

    variants.push({ width: targetWidth, url: `/product/${file}`, bytes: size });
  }

  const blur = await sharp(input)
    .resize({ width: BLUR_WIDTH })
    .webp({ quality: BLUR_QUALITY })
    .toBuffer();

  return {
    name,
    width: meta.width,
    height: meta.height,
    variants,
    blurDataURL: `data:image/webp;base64,${blur.toString('base64')}`,
  };
}

function renderManifest(shots) {
  const blocks = shots.map((shot) => {
    const srcSet = shot.variants
      .map((variant) => `      '${variant.url} ${variant.width}w',`)
      .join('\n');
    const fallback = shot.variants[0];
    return `  '${shot.name}': {
    width: ${shot.width},
    height: ${shot.height},
    src: '${fallback.url}',
    srcSet: [
${srcSet}
    ].join(', '),
    blurDataURL:
      '${shot.blurDataURL}',
  },`;
  });

  return `/**
 * 由 scripts/generate-image-variants.mjs 生成，请勿手工修改。
 * 数据来源：public/product/*.png（原始设计稿）
 */
export interface ProductImage {
  /** 原始设计稿宽度，用于计算宽高比 */
  width: number;
  /** 原始设计稿高度 */
  height: number;
  /** 默认加载的低档位文件 */
  src: string;
  /** 多档位 srcSet，交给浏览器按屏宽与 DPR 选择 */
  srcSet: string;
  /** 极小的模糊占位（LQIP），内联为 data URL */
  blurDataURL: string;
}

export const PRODUCT_IMAGES = {
${blocks.join('\n')}
} as const satisfies Record<string, ProductImage>;

export type ProductImageKey = keyof typeof PRODUCT_IMAGES;
`;
}

const shots = [];
for (const name of SHOTS) {
  shots.push(await buildShot(name));
}

await mkdir(path.dirname(manifestPath), { recursive: true });
await writeFile(manifestPath, renderManifest(shots), 'utf8');

let webpTotal = 0;
for (const shot of shots) {
  console.log(
    `${shot.name.padEnd(20)} ${shot.variants
      .map((v) => `${v.width}w=${(v.bytes / 1024).toFixed(0)}KB`)
      .join('  ')}`,
  );
  webpTotal += shot.variants.reduce((sum, v) => sum + v.bytes, 0);
}

console.log(`\n生成 ${shots.length * WIDTHS.length} 个 WebP，合计 ${(webpTotal / 1024).toFixed(0)}KB`);
console.log(`清单写入 ${path.relative(projectRoot, manifestPath)}`);
