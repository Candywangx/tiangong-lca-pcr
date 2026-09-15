import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { DocumentShell } from '@/components/document-shell';
import { Provider } from '@/components/provider';
import { getSiteManifest } from '@/lib/generated';
import { DEFAULT_ROUTE } from '@/lib/i18n';
import { coveragePage, libraryUrl } from '@/lib/source';
import { providerTranslations } from '@/lib/translations';

type Params = { lang: string };

export function generateStaticParams() {
  return getSiteManifest().languages.map((language) => ({ lang: language.route }));
}

export function generateViewport() {
  return { width: 'device-width', initialScale: 1 };
}

/** One localized tree; the shell sets the canonical language identity for this route. */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<Params>;
}) {
  const { lang } = await params;
  const manifest = getSiteManifest();
  if (!manifest.languages.some((language) => language.route === lang)) notFound();

  const i18n = providerTranslations(manifest.languages, lang, DEFAULT_ROUTE);

  return (
    <DocumentShell locale={lang} languages={manifest.languages}>
      <Provider
        locale={i18n.locale}
        defaultLanguage={i18n.defaultLanguage}
        translations={i18n.translations}
        locales={i18n.locales}
        languageCodes={Object.fromEntries(
          manifest.languages.map((language) => [language.route, language.code]),
        )}
        libraryUrl={libraryUrl(lang)}
        coverageUrl={coveragePage(lang)?.url}
      >
        {children}
      </Provider>
    </DocumentShell>
  );
}
