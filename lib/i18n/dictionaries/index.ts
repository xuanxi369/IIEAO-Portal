import type { Locale } from '../config';
import de from './de';
import en from './en';
import es from './es';
import fr from './fr';
import ru from './ru';
import type { Dictionary } from './types';
import zh from './zh';

export type { Dictionary };

/** 全部语种的字典，键与 LOCALES 一一对应（缺一个 TS 会报错） */
export const DICTIONARIES: Record<Locale, Dictionary> = {
  zh,
  en,
  es,
  de,
  fr,
  ru,
};

/** 取某语种的字典，未知语种回落到中文 */
export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? DICTIONARIES.zh;
}
