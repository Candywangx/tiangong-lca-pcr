import type { Metadata } from 'next';
import { AlternateLinks } from '@/components/alternate-links';
import { SiteJsonLd } from '@/components/breadcrumb-jsonld';
import { HomeContent } from '@/components/home-content';
import { HomeShell } from '@/components/home-shell';
import { getSiteManifest } from '@/lib/generated';
import { DEFAULT_ROUTE } from '@/lib/i18n';
import { homeMetadata } from '@/lib/metadata';
import { coveragePage, libraryUrl } from '@/lib/source';

/**
 * `/` is the complete Chinese home, not a language-choice wall. `/zh/` renders the same document;
 * its canonical URL consolidates onto `/`, which is the x-default entry.
 */
export function generateMetadata(): Metadata {
  return homeMetadata(DEFAULT_ROUTE, getSiteManifest(), '/');
}

export default function RootHome() {
  const manifest = getSiteManifest();
  return (
    <>
      <AlternateLinks
        origin={manifest.origin}
        alternates={Object.fromEntries(
          manifest.languages.map((language) => [
            language.code,
            language.route === manifest.defaultLocale ? `${manifest.origin}/` : `${manifest.origin}/${language.route}/`,
          ]),
        )}
      />
      <SiteJsonLd locale={DEFAULT_ROUTE} />
      <HomeShell
        locale={DEFAULT_ROUTE}
        library={libraryUrl(DEFAULT_ROUTE)}
        coverage={coveragePage(DEFAULT_ROUTE)?.url}
        // The entry links to itself rather than to its localized duplicate.
        home="/"
      >
        <HomeContent manifest={manifest} locale={DEFAULT_ROUTE} />
      </HomeShell>
    </>
  );
}
