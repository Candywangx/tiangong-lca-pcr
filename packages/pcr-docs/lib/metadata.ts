import type { Metadata } from 'next';
import type { DocPage, SiteManifest } from '@/lib/types';
import { languageFor } from '@/lib/source';

export type PageStrings = {
  catalog: string;
  coverage: string;
  browse: string;
  domains: string;
  subdomains: string;
  records: string;
  empty: string;
  allDomains: string;
  classificationTitle: string;
  classificationNote: string;
  coverageSeparate: string;
  coverageDownload: string;
  classificationSystem: string;
  classificationSummary: string;
  moduleTitle: string;
  moduleNote: string;
  moduleDownloads: string;
  moduleDownloadsNote: string;
};

const zh: PageStrings = {
  catalog: 'PCR 目录',
  coverage: '分类覆盖',
  browse: '浏览',
  domains: '行业领域',
  subdomains: '子领域',
  records: '记录',
  empty: '该领域当前没有记录。',
  allDomains: '全部行业领域',
  classificationTitle: '外部分类体系覆盖',
  classificationNote:
    '分类覆盖是派生读数：它把外部分类的叶子节点映射到已接受的 PCR。它与方法学记录分开维护，覆盖计数不代表该 PCR 已完成评审。',
  coverageSeparate: '覆盖表与 PCR 记录是两套数据，请勿相互替代。',
  coverageDownload: '下载覆盖索引',
  classificationSystem: '分类体系',
  classificationSummary: '覆盖摘要',
  moduleTitle: '方法学模块（脚手架）',
  moduleNote:
    '该模块目前是脚手架占位，内容尚未迁移为正式模块目录。它不构成可用方法学，也不会被搜索引擎收录。',
  moduleDownloads: '模块源文件',
  moduleDownloadsNote: '下载该模块的原始 Markdown 文件，与仓库内容逐字节一致。',
};

const en: PageStrings = {
  catalog: 'PCR catalog',
  coverage: 'Classification coverage',
  browse: 'Browse',
  domains: 'Domains',
  subdomains: 'Subdomains',
  records: 'records',
  empty: 'This domain has no records yet.',
  allDomains: 'All domains',
  classificationTitle: 'External classification coverage',
  classificationNote:
    'Coverage is a derived read model: it maps external classification leaves onto accepted PCRs. It is maintained separately from methodology records, and a coverage count is not evidence that a PCR has been reviewed.',
  coverageSeparate: 'Coverage and PCR records are two different datasets; neither substitutes for the other.',
  coverageDownload: 'Download the coverage index',
  classificationSystem: 'Classification',
  classificationSummary: 'Coverage summary',
  moduleTitle: 'Methodology module (scaffold)',
  moduleNote:
    'This module is still a scaffold placeholder; its content has not been migrated into a module directory. It is not usable methodology and is kept out of search indexes.',
  moduleDownloads: 'Module source files',
  moduleDownloadsNote:
    'Download this module’s original Markdown file; it is byte-identical to the repository content.',
};

export function pageStrings(locale: string): PageStrings {
  return locale === 'zh' ? zh : en;
}

export function routeName(locale: string): string {
  if (locale === 'zh') return '产品类别规则';
  return 'Product category rules';
}

/**
 * The generator already resolved canonical URLs and verified counterparts: `canonical` is
 * absolute and `alternates` maps source BCP 47 codes to absolute URLs of pages that exist at the
 * same version. Both are used verbatim; nothing is concatenated and no counterpart is invented.
 */
export function pageMetadata(page: DocPage, manifest: SiteManifest): Metadata {
  const code = languageFor(manifest, page)?.code ?? manifest.defaultLocale;
  const alternates = page.alternates ?? {};
  const languages: Record<string, string> = {};
  for (const [source, url] of Object.entries(alternates)) {
    if (typeof url === 'string' && /^https?:\/\//u.test(url)) languages[source] = url;
  }
  const defaultCode = manifest.languages.find(language => language.route === manifest.defaultLocale)?.code;
  const xDefault = (defaultCode ? languages[defaultCode] : undefined) ?? languages[code];
  if (xDefault) languages['x-default'] = xDefault;

  return {
    title: page.title,
    description: page.description || undefined,
    alternates: {
      canonical: page.canonical,
      ...(Object.keys(languages).length > 0 ? { languages } : {}),
    },
    robots: page.indexable ? undefined : { index: false, follow: true },
    openGraph: {
      type: 'article',
      siteName: 'TianGong PCR',
      title: page.title,
      description: page.description || undefined,
      url: page.canonical,
    },
  };
}

export function homeMetadata(
  locale: string,
  manifest: SiteManifest,
  canonicalOverride?: string,
): Metadata {
  // Homes are route files, not generated pages, so their counterparts are the sibling homes.
  const languages: Record<string, string> = {};
  for (const language of manifest.languages) languages[language.code] = `${manifest.origin}/${language.route}/`;
  languages['x-default'] = `${manifest.origin}/`;
  const title = `${routeName(locale)} | TianGong PCR`;
  const canonical = canonicalOverride === '/' ? `${manifest.origin}/` : canonicalOverride ?? `${manifest.origin}/${locale}/`;

  return {
    title,
    description:
      locale === 'zh'
        ? '天工 LCA 产品类别规则（PCR）库：中英双语记录、分类覆盖与逐字节可校验源文件。'
        : 'The TianGong LCA product category rules library: bilingual records, classification coverage and byte-verifiable sources.',
    alternates: { canonical, languages },
    openGraph: {
      type: 'website',
      siteName: 'TianGong PCR',
      title,
      url: canonical,
    },
  };
}
