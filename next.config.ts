import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // 允许默认质量与高清质量；产品截图直接使用原始 PNG。
    qualities: [75, 95],

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
