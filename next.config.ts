import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // 注意：images.quality 不是合法的 Next 配置项（会导致 TS2353），
    // 需要更高画质请在具体 <Image> 上传 quality={95}。
    
    // 为高DPI屏幕生成2倍图
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // 图片格式优化
    formats: ['image/webp', 'image/avif'],
    
    // 禁用图片优化（如果CDN已处理）
    // unoptimized: true,
  },
};

export default nextConfig;
