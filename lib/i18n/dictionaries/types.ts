import type zh from './zh';

/**
 * 字典类型以简体中文字典为基准。
 * 其它语种用 `satisfies Dictionary` 声明，缺键或结构不符时 TypeScript 会直接报错。
 */
export type Dictionary = typeof zh;
