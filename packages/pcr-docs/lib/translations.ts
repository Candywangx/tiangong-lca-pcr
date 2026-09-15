import { languageLabel } from './i18n';
import type { Language } from './types';

export type ProviderTranslations = {
  locale: string;
  defaultLanguage: string;
  translations: Record<string, string>;
  locales: Array<{ locale: string; name: string }>;
};

/**
 * Only strings this product's shell actually renders are overridden; everything else falls back
 * to the English defaults Fumadocs ships. Locale names are endonyms, as the shared design system
 * requires. These codes are URL aliases, never PCR language identities.
 */
const shellUi: Record<string, Record<string, string>> = {
  zh: {
    'Search(search trigger)': '搜索',
    'Search(search dialog)': '搜索',
    'Open Search(search trigger)(aria-label)': '打开搜索',
    'Close Search(search dialog)(aria-label)': '关闭搜索',
    'No results found(search dialog)': '没有匹配结果',
    'Choose a language(language switcher)': '选择语言',
    'Choose a language(language switcher)(aria-label)': '选择语言',
    'Table of Contents(inline table of contents)': '目录',
    'On this page(table of contents)': '本页内容',
    'No Headings(table of contents)': '本页没有标题',
    'Next Page(pagination)': '下一页',
    'Previous Page(pagination)': '上一页',
    'Toggle Theme(theme switcher)(aria-label)': '切换主题',
    'Light(theme switcher)(aria-label)': '浅色',
    'Dark(theme switcher)(aria-label)': '深色',
    'System(theme switcher)(aria-label)': '跟随系统',
    'Open Sidebar(sidebar)(aria-label)': '打开侧栏',
    'Close Sidebar(sidebar)(aria-label)': '关闭侧栏',
    'Collapse Sidebar(sidebar)(aria-label)': '收起侧栏',
    'Show Sidebar(sidebar)': '显示侧栏',
    'Hide Sidebar(sidebar)': '隐藏侧栏',
    'Toggle Menu(mobile menu)(aria-label)': '切换菜单',
    'Page Not Found(404 page)': '页面不存在',
    'Back to Home(404 page)': '返回首页',
    'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.(404 page)':
      '该页面可能已被移除、更名，或暂时无法访问。',
  },
  en: {
    'Search(search trigger)': 'Search',
    'Search(search dialog)': 'Search',
    'Open Search(search trigger)(aria-label)': 'Open search',
    'Close Search(search dialog)(aria-label)': 'Close search',
    'No results found(search dialog)': 'No matching results',
    'Choose a language(language switcher)': 'Choose a language',
    'Choose a language(language switcher)(aria-label)': 'Choose a language',
    'Table of Contents(inline table of contents)': 'Contents',
    'On this page(table of contents)': 'On this page',
    'No Headings(table of contents)': 'No headings on this page',
    'Next Page(pagination)': 'Next page',
    'Previous Page(pagination)': 'Previous page',
    'Toggle Theme(theme switcher)(aria-label)': 'Toggle theme',
    'Light(theme switcher)(aria-label)': 'Light',
    'Dark(theme switcher)(aria-label)': 'Dark',
    'System(theme switcher)(aria-label)': 'System',
    'Open Sidebar(sidebar)(aria-label)': 'Open sidebar',
    'Close Sidebar(sidebar)(aria-label)': 'Close sidebar',
    'Collapse Sidebar(sidebar)(aria-label)': 'Collapse sidebar',
    'Show Sidebar(sidebar)': 'Show sidebar',
    'Hide Sidebar(sidebar)': 'Hide sidebar',
    'Page Not Found(404 page)': 'Page not found',
    'Back to Home(404 page)': 'Back to home',
  },
};

export function providerTranslations(
  languages: readonly Language[],
  route: string,
  defaultRoute: string,
): ProviderTranslations {
  return {
    locale: route,
    defaultLanguage: defaultRoute,
    translations: shellUi[route] ?? shellUi.en,
    locales: languages.map((language) => ({
      locale: language.route,
      name: languageLabel(language.code),
    })),
  };
}
