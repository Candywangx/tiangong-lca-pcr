import type { ReactNode } from 'react';
import { DocumentShell } from '@/components/document-shell';
import { Provider } from '@/components/provider';
import { getSiteManifest } from '@/lib/generated';
import { DEFAULT_ROUTE } from '@/lib/i18n';
import { coveragePage, libraryUrl } from '@/lib/source';
import { providerTranslations } from '@/lib/translations';

export function generateViewport() {
  return { width: 'device-width', initialScale: 1 };
}

/** The default-language tree: `/` is the complete Chinese home, not a language-choice wall. */
export default function EntryLayout({ children }: { children: ReactNode }) {
  const manifest = getSiteManifest();
  const i18n = providerTranslations(manifest.languages, DEFAULT_ROUTE, DEFAULT_ROUTE);

  return (
    <DocumentShell locale={DEFAULT_ROUTE} languages={manifest.languages}>
      <Provider
        locale={i18n.locale}
        defaultLanguage={i18n.defaultLanguage}
        translations={i18n.translations}
        locales={i18n.locales}
        languageCodes={Object.fromEntries(
          manifest.languages.map((language) => [language.route, language.code]),
        )}
        libraryUrl={libraryUrl(DEFAULT_ROUTE)}
        coverageUrl={coveragePage(DEFAULT_ROUTE)?.url}
      >
        {children}
      </Provider>
    </DocumentShell>
  );
}
