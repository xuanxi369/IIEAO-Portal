import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // 提升图片质量（默认75，最高100）
    quality: 95,
    
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
