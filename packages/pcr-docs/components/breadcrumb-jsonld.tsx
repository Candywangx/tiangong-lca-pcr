import { getSiteManifest } from '@/lib/generated';
import { DEFAULT_ROUTE } from '@/lib/i18n';

type Trail = { name: string; url: string };

/**
 * Breadcrumb structured data for a non-record page. Record pages carry their own richer graph
 * (BreadcrumbList plus TechArticle) in `pcr-record.tsx`. Values are emitted as JSON with `<`
 * escaped, so nothing in a title can close the script element.
 */
export function BreadcrumbJsonLd({ trail }: { trail: Trail[] }) {
  const manifest = getSiteManifest();
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((step, position) => ({
      '@type': 'ListItem',
      position: position + 1,
      name: step.name,
      item: `${manifest.origin}${step.url}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</gu, '\\u003c') }}
    />
  );
}

/**
 * The site entry: a WebSite node with its name, canonical home and search action. No
 * Organization or contact node is emitted, because this site publishes neither.
 */
export function SiteJsonLd({ locale }: { locale: string }) {
  const manifest = getSiteManifest();
  const graph = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TianGong PCR',
    alternateName: locale === DEFAULT_ROUTE ? '天工产品类别规则' : 'TianGong Product Category Rules',
    url: `${manifest.origin}/`,
    inLanguage: manifest.languages.map((language) => language.code),
    publisher: { '@type': 'Organization', name: 'TianGong LCA', url: 'https://tiangong.earth/' },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</gu, '\\u003c') }}
    />
  );
}

/** Home, then the page itself: the shortest true trail for a hub or module page. */
export function pageTrail(locale: string, url: string, name: string): Trail[] {
  return [
    { name: locale === DEFAULT_ROUTE ? '首页' : 'Home', url: `/${locale}/` },
    { name, url },
  ];
}
