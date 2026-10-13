'use client';

import { Dialog } from '@base-ui/react/dialog';
import { Download, ExternalLink, Laptop, Monitor, ShieldCheck, X } from 'lucide-react';

import {
  DOWNLOAD_GROUPS,
  DOWNLOAD_VERSION,
  REPOSITORY_URL,
  downloadUrl,
  type DownloadPlatform,
} from '@/lib/downloads';

const PLATFORM_ICONS: Record<DownloadPlatform, typeof Monitor> = {
  Windows: Monitor,
  macOS: Laptop,
};

interface DownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/** 全局下载面板：列出 R2 上最新的 IIEAO 桌面客户端安装包 */
export function DownloadDialog({ open, onOpenChange }: DownloadDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="download-backdrop" />
        <Dialog.Popup className="download-panel">
          <header className="download-head">
            <span className="download-mark" aria-hidden="true">
              <Download size={17} />
            </span>
            <div className="download-head-copy">
              <Dialog.Title className="download-title">下载 IIEAO 桌面客户端</Dialog.Title>
              <Dialog.Description className="download-desc">
                选择你的系统，获取最新版本 v{DOWNLOAD_VERSION}。安装包由 Cloudflare R2 直链分发。
              </Dialog.Description>
            </div>
            <Dialog.Close className="download-close" aria-label="关闭下载面板">
              <X size={18} />
            </Dialog.Close>
          </header>

          <div className="download-body">
            {DOWNLOAD_GROUPS.map((group) => {
              const PlatformIcon = PLATFORM_ICONS[group.platform];
              return (
                <section className="download-group" key={group.platform}>
                  <div className="download-group-head">
                    <PlatformIcon size={15} />
                    <b>{group.platform}</b>
                    <span>{group.targets.length} 个安装包</span>
                  </div>
                  <div className="download-list">
                    {group.targets.map((target) => (
                      <article className="download-item" key={target.file}>
                        <div className="download-item-copy">
                          <p className="download-item-title">
                            {target.title}
                            {target.recommended ? <em>推荐</em> : null}
                          </p>
                          <p className="download-item-note">{target.note}</p>
                          <p className="download-item-file">
                            <code>{target.file}</code>
                            <span>{target.size}</span>
                          </p>
                        </div>
                        <a className="download-cta" href={downloadUrl(target.file)} rel="noreferrer">
                          <Download size={15} /> 下载
                        </a>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="download-foot">
            <span>
              <ShieldCheck size={14} /> 直链下载不经过第三方中转
            </span>
            <a href={REPOSITORY_URL} target="_blank" rel="noreferrer">
              查看开源代码 <ExternalLink size={13} />
            </a>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
