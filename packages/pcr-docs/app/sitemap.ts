import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { getSiteManifest } from '@/lib/generated';
import { pageLastModified } from '@/lib/source';

/**
 * Indexable surfaces only: the entry home, the localized homes, and the document pages the
 * manifest marks indexable. Page URLs are already absolute and canonical, so they are used
 * verbatim; scaffolds, unavailable translations, raw downloads and search shards never get here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const manifest = getSiteManifest();
  const seen = new Set<string>();
  const entries: MetadataRoute.Sitemap = [];

  const push = (url: string, priority: number, modified: string = manifest.sourceDate) => {
    if (seen.has(url)) return;
    seen.add(url);
    entries.push({ url, lastModified: new Date(modified), priority });
  };

  push(`${manifest.origin}/`, 1);
  for (const language of manifest.languages) if (language.route !== manifest.defaultLocale) push(`${manifest.origin}/${language.route}/`, 0.8);

  for (const page of manifest.pages) {
    if (!page.indexable) continue;
    push(page.canonical, page.kind === 'pcr' ? 0.7 : 0.5, pageLastModified(page, manifest.sourceDate));
  }

  return entries;
}
