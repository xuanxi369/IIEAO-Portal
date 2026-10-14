/**
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
  'dashboard': {
    width: 2878,
    height: 1720,
    src: '/product/dashboard-800.webp',
    srcSet: [
      '/product/dashboard-800.webp 800w',
      '/product/dashboard-1600.webp 1600w',
      '/product/dashboard-2400.webp 2400w',
    ].join(', '),
    blurDataURL:
      'data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAAAwAQCdASoQAAoAA4BaJZwAA3AA/vQN6dJhgUkLJhvmzo8E+2gkAAAA',
  },
  'files': {
    width: 2504,
    height: 1524,
    src: '/product/files-800.webp',
    srcSet: [
      '/product/files-800.webp 800w',
      '/product/files-1600.webp 1600w',
      '/product/files-2400.webp 2400w',
    ].join(', '),
    blurDataURL:
      'data:image/webp;base64,UklGRioAAABXRUJQVlA4IB4AAAAwAQCdASoQAAoAA4BaJaQAA3AA/vPLi25r55CAAAA=',
  },
  'send-receive': {
    width: 2495,
    height: 1717,
    src: '/product/send-receive-800.webp',
    srcSet: [
      '/product/send-receive-800.webp 800w',
      '/product/send-receive-1600.webp 1600w',
      '/product/send-receive-2400.webp 2400w',
    ].join(', '),
    blurDataURL:
      'data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoQAAsAA4BaJZwAD4Qu0DShgAD+9hjVE/p3ssIOYY36tWCd30W+OEjqJhtpc10UZdz2pusAAAA=',
  },
  'swarm': {
    width: 2485,
    height: 1723,
    src: '/product/swarm-800.webp',
    srcSet: [
      '/product/swarm-800.webp 800w',
      '/product/swarm-1600.webp 1600w',
      '/product/swarm-2400.webp 2400w',
    ].join(', '),
    blurDataURL:
      'data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAAAwAQCdASoQAAsAA4BaJaQAA3AA/vONJKtCp2/wJrKrn9tKfPCAAA==',
  },
  'storage-governance': {
    width: 2488,
    height: 1491,
    src: '/product/storage-governance-800.webp',
    srcSet: [
      '/product/storage-governance-800.webp 800w',
      '/product/storage-governance-1600.webp 1600w',
      '/product/storage-governance-2400.webp 2400w',
    ].join(', '),
    blurDataURL:
      'data:image/webp;base64,UklGRjAAAABXRUJQVlA4ICQAAACQAQCdASoQAAoAA4BaJZwAAtz5JUAA/vYkcOu95jFloAFkAAA=',
  },
  'local-transfer': {
    width: 2490,
    height: 1720,
    src: '/product/local-transfer-800.webp',
    srcSet: [
      '/product/local-transfer-800.webp 800w',
      '/product/local-transfer-1600.webp 1600w',
      '/product/local-transfer-2400.webp 2400w',
    ].join(', '),
    blurDataURL:
      'data:image/webp;base64,UklGRiwAAABXRUJQVlA4ICAAAAAwAQCdASoQAAsAA4BaJaQAA3AA/vQ9Vu7fp53QhCAAAA==',
  },
} as const satisfies Record<string, ProductImage>;

export type ProductImageKey = keyof typeof PRODUCT_IMAGES;
