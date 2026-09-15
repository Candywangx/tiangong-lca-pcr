'use client';

import SearchDialog from '@/components/search-dialog';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { DefaultSearchDialogProps } from 'fumadocs-ui/components/dialog/search-default';
import { usePathname, useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { alternateTarget } from '@/lib/locale-link';
import { currentAlternates } from '@/lib/alternates-client';

type Locales = Array<{ locale: string; name: string }>;

/**
 * Locale navigation is owned here. A document publishes its verified counterparts keyed by source
 * language code, so a switch prefers that exact counterpart path and only falls back to swapping
 * the URL alias when the manifest declared no counterpart for the requested locale.
 */
export function Provider({
  children,
  locale,
  defaultLanguage,
  translations,
  locales,
  languageCodes,
  libraryUrl,
  coverageUrl,
}: {
  children: ReactNode;
  locale: string;
  defaultLanguage: string;
  translations: Record<string, string>;
  locales: Locales;
  /** URL alias (`en`) to source language code (`en-US`), used to read the alternates map. */
  languageCodes: Record<string, string>;
  libraryUrl: string;
  coverageUrl?: string;
}) {
  const router = useRouter();
  const pathname = usePathname() ?? '/';

  return (
    <RootProvider
      i18n={{
        locale,
        defaultLanguage,
        hideLocale: 'never',
        translations,
        locales,
        onLocaleChange: (next) => {
          const declared = alternateTarget(currentAlternates(), languageCodes[next] ?? next);
          const target = declared ?? `/${next}/`;
          if (target !== pathname) router.push(target);
        },
      }}
      search={{
        SearchDialog,
        // Fumadocs types dialog options as the default dialog's props; the extra route targets are
        // consumed by our own dialog, which declares them as optional.
        options: {
          libraryUrl,
          coverageUrl,
          locale,
          languageCodes,
        } as Partial<DefaultSearchDialogProps> & Record<string, unknown>,
      }}
      theme={{ enabled: true }}
    >
      {children}
    </RootProvider>
  );
}
