'use client';

import { Check, ChevronDown, Languages } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { useI18n } from '@/components/i18n-provider';
import { LOCALES, LOCALE_META, type Locale } from '@/lib/i18n/config';

/**
 * 桌面端（≥1050px 的头部）语言切换器：按钮 + 下拉列表。
 * 窄屏下头部空间有限，改用 <LanguageChips> 呈现。
 */
export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const choose = (next: Locale) => {
    setLocale(next);
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className="lang-switch" ref={rootRef}>
      <button
        type="button"
        ref={triggerRef}
        className="lang-trigger"
        aria-label={t.a11y.languageSwitch}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <Languages size={16} aria-hidden="true" />
        <span>{LOCALE_META[locale].shortLabel}</span>
        <ChevronDown size={14} aria-hidden="true" data-chevron="true" />
      </button>

      {open ? (
        <ul className="lang-menu" aria-label={t.a11y.languageMenuLabel}>
          {LOCALES.map((code) => {
            const meta = LOCALE_META[code];
            const selected = code === locale;
            return (
              <li key={code}>
                <button
                  type="button"
                  aria-pressed={selected}
                  className="lang-option"
                  lang={meta.htmlLang}
                  onClick={() => choose(code)}
                >
                  <span>{meta.nativeName}</span>
                  <small>{selected ? <Check size={13} aria-hidden="true" /> : meta.englishName}</small>
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

/** 移动端导航里的语言选择（胶囊按钮组，无需下拉交互） */
export function LanguageChips() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className="mobile-langs">
      <span>{t.a11y.languageMenuLabel}</span>
      <ul className="lang-chips">
        {LOCALES.map((code) => {
          const meta = LOCALE_META[code];
          return (
            <li key={code}>
              <button
                type="button"
                className="lang-chip"
                aria-pressed={code === locale}
                lang={meta.htmlLang}
                onClick={() => setLocale(code)}
              >
                {meta.nativeName}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
