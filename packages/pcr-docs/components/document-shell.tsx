import type { ReactNode } from 'react';
import { getSiteManifest } from '@/lib/generated';
import { dirFor, toHtmlLang } from '@/lib/i18n';
import type { Language } from '@/lib/types';
import '@/app/global.css';

/**
 * One HTML shell for every route tree. `lang` is the canonical PCR language identity; the URL
 * alias (`zh`) only ever appears in links. The client provider sits outside this component so
 * server-rendered layout components resolve the framework context.
 */
export function DocumentShell({
  locale,
  languages,
  children,
}: {
  locale: string;
  languages?: readonly Language[];
  children: ReactNode;
}) {
  const manifest = getSiteManifest();
  const declared = languages ?? manifest.languages;
  const code = declared.find((language) => language.route === locale)?.code ?? locale;

  return (
    <html lang={toHtmlLang(code)} dir={dirFor(code)} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
