import type { Language } from './types';

/**
 * URL aliases are a routing concern only. `zh`/`en` are what the address bar shows;
 * `zh-CN`/`en-US` stay the canonical PCR language identities carried by the manifest.
 */
export const DEFAULT_ROUTE = 'zh';

export function isRouteLocale(value: string, languages: readonly Language[]): boolean {
  return languages.some((language) => language.route === value);
}

/** Route alias of a manifest language, falling back to the declaration order. */
export function routeForLocale(locales: readonly Language[], locale: string): string | undefined {
  return locales.find((language) => language.code === locale)?.route;
}

/** Manifest language of a route alias. */
export function localeForRoute(locales: readonly Language[], route: string): Language | undefined {
  return locales.find((language) => language.route === route);
}

/**
 * Locale names are always written in their own language (中文, English), as the shared design
 * system requires. `Intl.DisplayNames` with the locale itself as the display language gives the
 * endonym; its region-qualified form ("中文（中国）") would be wrong on a language switcher.
 */
export function languageLabel(locale: string): string {
  const base = locale.split('-')[0] ?? locale;
  try {
    const name = new Intl.DisplayNames([base], { type: 'language' }).of(base);
    if (name && name.length <= 24) return name;
  } catch {
    // fall through to the raw code
  }
  return locale;
}

/** `zh-CN` renders as `zh-CN`; anything unknown degrades to the input. */
export function toHtmlLang(locale: string): string {
  return /^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/u.test(locale) ? locale : 'en';
}

export function dirFor(locale: string): 'ltr' | 'rtl' {
  return /^(?:ar|he|fa|ur)\b/iu.test(locale) ? 'rtl' : 'ltr';
}
