import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AlternateLinks } from '@/components/alternate-links';
import { SiteJsonLd } from '@/components/breadcrumb-jsonld';
import { HomeContent } from '@/components/home-content';
import { HomeShell } from '@/components/home-shell';
import { getSiteManifest } from '@/lib/generated';
import { DEFAULT_ROUTE } from '@/lib/i18n';
import { homeMetadata } from '@/lib/metadata';
import { coveragePage, libraryUrl } from '@/lib/source';

type Params = { lang: string };

export function generateStaticParams() {
  return getSiteManifest().languages.map((language) => ({ lang: language.route }));
}

export default async function LocaleHome({ params }: { params: Promise<Params> }) {
  const { lang } = await params;
  const manifest = getSiteManifest();
  if (!manifest.languages.some((language) => language.route === lang)) notFound();

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
      <SiteJsonLd locale={lang} />
      <HomeShell
        locale={lang}
        library={libraryUrl(lang)}
        coverage={coveragePage(lang)?.url}
      >
        <HomeContent manifest={manifest} locale={lang} />
      </HomeShell>
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { lang } = await params;
  const manifest = getSiteManifest();
  if (!manifest.languages.some((language) => language.route === lang)) return {};
  // The default-language home duplicates `/`; its canonical consolidates onto the x-default entry.
  return homeMetadata(lang, manifest, lang === DEFAULT_ROUTE ? '/' : undefined);
}
