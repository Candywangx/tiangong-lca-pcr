import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { LanguageSwitchText, LanguageSwitchTrigger } from '@/components/language-switch';
import { SiteBrand } from '@/components/site-brand';

/**
 * Production origins of the sibling TianGong public sites, taken from their own workspace
 * configuration (`docs/lib/metadata.ts`, `tidas/lib/metadata.ts`, the Portal site origin, and the
 * LCDN node runbook). Only already-published public domains belong here; the Portal entry route
 * is the public databases page that collects the published-data catalogues.
 */
const family = {
  docs: 'https://docs.tiangong.earth/',
  tidas: 'https://tidas.tiangong.earth/',
  lcdn: 'https://lcdn.tiangong.earth/',
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
    familyPortal: string;
    familyPortalNote: string;
    familyLcdn: string;
    familyLcdnNote: string;
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
    familyPortal: '天工 LCA 公开数据库',
    familyPortalNote: '免登录查找公开发布的 LCA 数据集',
    familyLcdn: 'ILCD 数据节点',
    familyLcdnNote: '以 ILCD 格式提供数据库数据',
  },
  en: {
    library: 'Browse the PCR library',
    coverage: 'Classification coverage',
    family: 'Related sites',
    familyDocs: 'TianGong LCA Documentation',
    familyDocsNote: 'Platform, modelling and data guides',
    familyTidas: 'TIDAS Data System',
    familyTidasNote: 'Data specification and JSON schemas',
    familyPortal: 'TianGong LCA public databases',
    familyPortalNote: 'Find published LCA datasets without an account',
    familyLcdn: 'ILCD data node',
    familyLcdnNote: 'Database data in ILCD format',
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
  // The Chinese route opens the sibling sites' default homes; every other route opens the
  // English surfaces, matching this site's own zh/en route model and label fallback.
  const localizedFamily = (origin: string) => (route === 'zh' ? origin : `${origin}en/`);
  return {
    nav: {
      title: <SiteBrand locale={route} />,
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
            url: localizedFamily(family.docs),
            external: true,
          },
          {
            type: 'main',
            text: text.familyTidas,
            description: text.familyTidasNote,
            url: localizedFamily(family.tidas),
            external: true,
          },
          {
            type: 'main',
            text: text.familyPortal,
            description: text.familyPortalNote,
            url:
              route === 'zh'
                ? 'https://www.tiangong.earth/zh-CN/lca-database'
                : 'https://www.tiangong.earth/en/lca-database',
            external: true,
          },
          {
            type: 'main',
            text: text.familyLcdn,
            description: text.familyLcdnNote,
            url: family.lcdn,
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
