'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import {
  DEFAULT_LOCALE,
  LOCALE_META,
  resolveInitialLocale,
  storeLocale,
  type Locale,
} from '@/lib/i18n/config';
import { getDictionary, type Dictionary } from '@/lib/i18n/dictionaries';

interface I18nContextValue {
  /** 当前界面语种 */
  locale: Locale;
  /** 切换语种并记住选择 */
  setLocale: (locale: Locale) => void;
  /** 当前语种的文案字典 */
  t: Dictionary;
}

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * 服务端渲染时只能用 useEffect（useLayoutEffect 会告警），
 * 客户端 hydration 后用 useLayoutEffect，在首次绘制前就应用已记住的语言，
 * 避免先闪现中文再切换。
 */
const useIsomorphicLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

export function I18nProvider({ children }: { children: ReactNode }) {
  // 首帧与 SSR 保持一致（中文），挂载后立即按本地记录 / 浏览器语言校正
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useIsomorphicLayoutEffect(() => {
    setLocaleState(resolveInitialLocale());
  }, []);

  const t = useMemo(() => getDictionary(locale), [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    storeLocale(next);
  }, []);

  // 让文档级信息跟随语种：<html lang>、标题与分享卡片描述
  useEffect(() => {
    const meta = LOCALE_META[locale];
    document.documentElement.lang = meta.htmlLang;
    document.title = t.meta.title;

    const setMetaContent = (selector: string, content: string) => {
      document.querySelector(selector)?.setAttribute('content', content);
    };
    setMetaContent('meta[name="description"]', t.meta.description);
    setMetaContent('meta[property="og:title"]', t.meta.title);
    setMetaContent('meta[property="og:description"]', t.meta.ogDescription);
    setMetaContent('meta[property="og:locale"]', meta.ogLocale);
    setMetaContent('meta[name="twitter:title"]', t.meta.title);
    setMetaContent('meta[name="twitter:description"]', t.meta.twitterDescription);
  }, [locale, t]);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/** 读取当前语种与文案；必须在 <I18nProvider> 内使用 */
export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n 必须在 <I18nProvider> 内使用');
  }
  return context;
}
