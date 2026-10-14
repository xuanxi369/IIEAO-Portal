import type { Metadata } from 'next';
import { I18nProvider } from '@/components/i18n-provider';
import './globals.css';

/**
 * 服务端输出的 metadata 固定为默认语种（简体中文），保证爬虫与无 JS 环境看到完整内容；
 * 客户端切换语言后，由 I18nProvider 同步 <html lang>、标题与分享描述。
 */
export const metadata: Metadata = {
  title: 'IIEAO — 去中心化个人内容节点',
  description: 'IIEAO 是一个安全保存、发送、验证和恢复个人文件的本地内容节点，同时兼容 IPFS。',
  icons: { icon: '/iieao-icon.png' },
  openGraph: {
    title: 'IIEAO — 去中心化个人内容节点',
    description: '你的内容，你的节点，去中心化的个人存储实现。',
    images: ['/iieao-social-card.jpg'],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IIEAO — 去中心化个人内容节点',
    description: '去中心化的个人存储实现。',
    images: ['/iieao-social-card.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
