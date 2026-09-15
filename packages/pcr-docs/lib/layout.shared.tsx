import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { LanguageSwitchText, LanguageSwitchTrigger } from '@/components/language-switch';
import { SiteBrand } from '@/components/site-brand';

/**
 * Production origins of the sibling TianGong documentation sites, taken from their own workspace
 * configuration (`docs/lib/metadata.ts`, `tidas/lib/metadata.ts`). Only already-published public
 * domains belong here.
 */
const family = {
  docs: 'https://docs.tiangong.earth/',
  tidas: 'https://tidas.tiangong.earth/',
};

const label: Record<
  string,
  {
    library: string;
    coverage: string;
    family: string;
    familyDocs: string;
    familyDocsNote: string;
    familyTidas: string;
    familyTidasNote: string;
  }
> = {
  zh: {
    library: '浏览 PCR 库',
    coverage: '分类覆盖',
    family: '相关文档',
    familyDocs: 'TianGong LCA 文档',
    familyDocsNote: '平台使用、建模与数据指南',
    familyTidas: 'TIDAS 数据系统',
    familyTidasNote: '数据规范与 JSON Schema',
  },
  en: {
    library: 'Browse the PCR library',
    coverage: 'Classification coverage',
    family: 'Related sites',
    familyDocs: 'TianGong LCA Documentation',
    familyDocsNote: 'Platform, modelling and data guides',
    familyTidas: 'TIDAS Data System',
    familyTidasNote: 'Data specification and JSON schemas',
  },
};

function strings(route: string) {
  return label[route] ?? label.en;
}

/**
 * Shell options shared by the landing layout and the documentation layout. The library entry
 * point is the generator's own top-level catalog route, which every locale emits; `home` overrides
 * the brand target so `/` links to itself rather than to its localized duplicate.
 */
export function baseOptions(
  route: string,
  library: string,
  coverage?: string,
  home?: string,
): BaseLayoutProps {
  const text = strings(route);
  return {
    nav: {
      title: <SiteBrand />,
      url: home ?? `/${route}/`,
      transparentMode: 'top',
    },
    searchToggle: { enabled: true },
    themeSwitch: { enabled: true },
    slots: {
      languageSelect: {
        root: LanguageSwitchTrigger,
        text: LanguageSwitchText,
      },
    },
    links: [
      { type: 'main', text: text.library, url: library },
      ...(coverage ? [{ type: 'main' as const, text: text.coverage, url: coverage }] : []),
      {
        type: 'menu',
        text: text.family,
        items: [
          {
            type: 'main',
            text: text.familyDocs,
            description: text.familyDocsNote,
            url: family.docs,
            external: true,
          },
          {
            type: 'main',
            text: text.familyTidas,
            description: text.familyTidasNote,
            url: family.tidas,
            external: true,
          },
        ],
      },
    ],
  };
}

/** Documentation shell adds the canonical repository next to the library entry point. */
export function docsOptions(route: string, library: string, coverage?: string): BaseLayoutProps {
  return {
    ...baseOptions(route, library, coverage),
    githubUrl: 'https://github.com/tiangong-lca/pcr',
  };
}
