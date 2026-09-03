import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'IIEAO — 让每一份文件，都有一条回家的路',
  description: 'IIEAO 是一个安全保存、发送、验证和恢复个人文件的本地内容节点，同时兼容 IPFS。',
  icons: { icon: '/iieao-icon.png' },
  openGraph: {
    title: 'IIEAO — 让每一份文件，都有一条回家的路',
    description: '你的内容，你的节点，你选择的路。',
    images: ['/iieao-social-card.png'],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IIEAO — 让每一份文件，都有一条回家的路',
    description: '你的内容，你的节点，你选择的路。',
    images: ['/iieao-social-card.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
