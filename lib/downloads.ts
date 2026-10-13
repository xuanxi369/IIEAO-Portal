/**
 * IIEAO 桌面客户端下载配置
 *
 * 安装包存放在 Cloudflare R2 存储桶中，通过绑定的自定义域名直链分发。
 * 调整下载源或新增版本时，只需修改这里的常量与清单。
 */

/** R2 绑定的下载域名（末尾不带斜杠） */
export const DOWNLOAD_BASE_URL = 'https://download.iieao.com';

/** R2 中存放安装包的目录（对应下载站里的「系统」分组名） */
export const DOWNLOAD_BUCKET_DIR = 'IIEAO';

/** 当前发布的版本号 */
export const DOWNLOAD_VERSION = '0.6.2';

/** 开源代码库地址 */
export const REPOSITORY_URL = 'https://github.com/xuanxi369/IPFS-Desktop-Rust';

export type DownloadPlatform = 'Windows' | 'macOS';

export interface DownloadTarget {
  /** 卡片标题，例如「Windows 安装程序」 */
  title: string;
  /** 安装包文件名 */
  file: string;
  /** 文件体积，用于下载前预估 */
  size: string;
  /** 面向用户的补充说明 */
  note: string;
  /** 是否为主推安装方式 */
  recommended?: boolean;
}

export interface DownloadGroup {
  platform: DownloadPlatform;
  /** 该平台下可选的安装包 */
  targets: DownloadTarget[];
}

/** 按平台的下载清单，顺序即展示顺序 */
export const DOWNLOAD_GROUPS: DownloadGroup[] = [
  {
    platform: 'Windows',
    targets: [
      {
        title: 'Windows 安装程序',
        file: 'IIEAO_0.6.2_x64-setup.exe',
        size: '49.5 MB',
        note: 'x64 系统 · 引导式安装，自动创建快捷方式',
        recommended: true,
      },
      {
        title: 'Windows 安装包',
        file: 'IIEAO_0.6.2_x64_en-US.msi',
        size: '62.7 MB',
        note: 'x64 系统 · 适合批量部署与静默安装',
      },
    ],
  },
  {
    platform: 'macOS',
    targets: [
      {
        title: 'macOS 磁盘映像',
        file: 'IIEAO_0.6.2_x64.dmg',
        size: '66.3 MB',
        note: 'Intel 芯片 · 拖入「应用程序」即可安装',
      },
    ],
  },
];

/** 由文件名拼出 R2 直链地址 */
export function downloadUrl(file: string): string {
  return `${DOWNLOAD_BASE_URL}/${encodeURIComponent(DOWNLOAD_BUCKET_DIR)}/${encodeURIComponent(file)}`;
}
