/**
 * IIEAO 桌面客户端下载配置
 *
 * 安装包存放在 Cloudflare R2 存储桶中，通过绑定的自定义域名直链分发。
 * 调整下载源或新增版本时，只需修改这里的常量与清单。
 *
 * 平台名（Windows / macOS）与技术信息（文件名、体积）不随界面语言变化；
 * 面向用户的标题与说明放在 `lib/i18n/dictionaries` 里，通过 `id` 关联。
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

/** 文案键：对应字典里的 downloads.targets.* */
export type DownloadTargetId = 'windows-setup' | 'windows-msi' | 'macos-dmg';

export interface DownloadTarget {
  /** 文案键，用于在各语言字典中查找标题与说明 */
  id: DownloadTargetId;
  /** 安装包文件名 */
  file: string;
  /** 文件体积，用于下载前预估 */
  size: string;
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
        id: 'windows-setup',
        file: 'IIEAO_0.6.2_x64-setup.exe',
        size: '49.5 MB',
        recommended: true,
      },
      {
        id: 'windows-msi',
        file: 'IIEAO_0.6.2_x64_en-US.msi',
        size: '62.7 MB',
      },
    ],
  },
  {
    platform: 'macOS',
    targets: [
      {
        id: 'macos-dmg',
        file: 'IIEAO_0.6.2_x64.dmg',
        size: '66.3 MB',
      },
    ],
  },
];

/** 由文件名拼出 R2 直链地址 */
export function downloadUrl(file: string): string {
  return `${DOWNLOAD_BASE_URL}/${encodeURIComponent(DOWNLOAD_BUCKET_DIR)}/${encodeURIComponent(file)}`;
}
