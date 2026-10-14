'use client';

import { Dialog } from '@base-ui/react/dialog';
import { Download, ExternalLink, Laptop, Monitor, ShieldCheck, X } from 'lucide-react';

import { useI18n } from '@/components/i18n-provider';
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
  const { t } = useI18n();

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
              <Dialog.Title className="download-title">{t.downloads.title}</Dialog.Title>
              <Dialog.Description className="download-desc">
                {t.downloads.desc(DOWNLOAD_VERSION)}
              </Dialog.Description>
            </div>
            <Dialog.Close className="download-close" aria-label={t.downloads.close}>
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
                    <span>{t.downloads.groupCount(group.targets.length)}</span>
                  </div>
                  <div className="download-list">
                    {group.targets.map((target) => {
                      const copy = t.downloads.targets[target.id];
                      return (
                        <article className="download-item" key={target.file}>
                          <div className="download-item-copy">
                            <p className="download-item-title">
                              {copy.title}
                              {target.recommended ? <em>{t.downloads.recommended}</em> : null}
                            </p>
                            <p className="download-item-note">{copy.note}</p>
                            <p className="download-item-file">
                              <code>{target.file}</code>
                              <span>{target.size}</span>
                            </p>
                          </div>
                          <a className="download-cta" href={downloadUrl(target.file)} rel="noreferrer">
                            <Download size={15} /> {t.downloads.action}
                          </a>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="download-foot">
            <span>
              <ShieldCheck size={14} /> {t.downloads.footNote}
            </span>
            <a href={REPOSITORY_URL} target="_blank" rel="noreferrer">
              {t.downloads.repoLink} <ExternalLink size={13} />
            </a>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
