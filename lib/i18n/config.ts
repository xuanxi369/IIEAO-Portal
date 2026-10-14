/**
 * 站点支持的语种与语言匹配逻辑。
 *
 * 语种切换完全在客户端完成：用户的选择写入 localStorage，
 * 首次访问则按浏览器的 Accept-Language 偏好自动匹配。
 */

/** 支持的语种代码，顺序即切换面板/语言列表的展示顺序 */
export const LOCALES = ['zh', 'en', 'es', 'de', 'fr', 'ru'] as const;

export type Locale = (typeof LOCALES)[number];

/** 兜底语言：中文（站点默认与 SEO 默认语言） */
export const DEFAULT_LOCALE: Locale = 'zh';

/** 用户选择的持久化键名 */
export const LOCALE_STORAGE_KEY = 'iieao-locale';

interface LocaleMeta {
  /** 该语言自身的写法，用于语言列表 */
  nativeName: string;
  /** 英文名，便于跨语言识别 */
  englishName: string;
  /** 语言代码，如中文界面用 zh-Hans 场景较少，这里给出常用的短码 */
  shortLabel: string;
  /** 写入 <html lang> 的取值 */
  htmlLang: string;
  /** Open Graph 的 og:locale 取值 */
  ogLocale: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  zh: {
    nativeName: '简体中文',
    englishName: 'Chinese',
    shortLabel: '中',
    htmlLang: 'zh-CN',
    ogLocale: 'zh_CN',
  },
  en: {
    nativeName: 'English',
    englishName: 'English',
    shortLabel: 'EN',
    htmlLang: 'en',
    ogLocale: 'en_US',
  },
  es: {
    nativeName: 'Español',
    englishName: 'Spanish',
    shortLabel: 'ES',
    htmlLang: 'es',
    ogLocale: 'es_ES',
  },
  de: {
    nativeName: 'Deutsch',
    englishName: 'German',
    shortLabel: 'DE',
    htmlLang: 'de',
    ogLocale: 'de_DE',
  },
  fr: {
    nativeName: 'Français',
    englishName: 'French',
    shortLabel: 'FR',
    htmlLang: 'fr',
    ogLocale: 'fr_FR',
  },
  ru: {
    nativeName: 'Русский',
    englishName: 'Russian',
    shortLabel: 'RU',
    htmlLang: 'ru',
    ogLocale: 'ru_RU',
  },
};

/** 判断任意字符串是否为受支持的语种 */
export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}

/**
 * 把一条 BCP 47 语言标签（如 `es-MX`、`zh-Hant-TW`）归一为受支持的语种。
 * 中文（含 zh-Hans / zh-TW 等）统一落到简体中文。
 */
function normalizeTag(tag: string): Locale | null {
  const primary = tag.trim().toLowerCase().split('-')[0];
  if (!primary) return null;
  if (primary === 'zh') return 'zh';
  return LOCALES.find((locale) => locale === primary) ?? null;
}

/**
 * 按用户的语言偏好列表挑选最合适的语种，全部不匹配时回落到默认语种。
 * 传入的通常是 `navigator.languages`（已按优先级排序）。
 */
export function matchLocale(preferred: readonly string[]): Locale {
  for (const tag of preferred) {
    const matched = normalizeTag(tag);
    if (matched) return matched;
  }
  return DEFAULT_LOCALE;
}

/** 读取浏览器语言偏好（不支持 navigator 的环境回落到默认语种） */
export function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE;
  const preferred =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];
  return matchLocale(preferred);
}

/** 读取本地已保存的语种选择 */
export function readStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(stored) ? stored : null;
  } catch {
    return null;
  }
}

/** 保存语种选择，失败时静默忽略（隐私模式等） */
export function storeLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* 存储不可用时不影响本次会话的切换 */
  }
}

/** 首次访问时的语种：优先用本地记录，否则按浏览器语言匹配 */
export function resolveInitialLocale(): Locale {
  return readStoredLocale() ?? detectBrowserLocale();
}
