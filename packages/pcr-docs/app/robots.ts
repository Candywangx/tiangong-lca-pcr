import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { getSiteManifest } from '@/lib/generated';

/**
 * Crawlers are explicitly allowed everywhere, including `/generated/`. Raw downloads and machine
 * indexes are kept out of search results by `X-Robots-Tag: noindex` response headers supplied by
 * the host configuration, not by a blanket `Disallow` — a disallowed path can never be seen, so
 * its noindex header would never be read either.
 */
export default function robots(): MetadataRoute.Robots {
  const manifest = getSiteManifest();
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${manifest.origin}/sitemap.xml`,
  };
}
