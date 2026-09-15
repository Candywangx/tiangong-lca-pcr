import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

/**
 * Landing shell for the two home routes. It uses Fumadocs' own `HomeLayout`, so the brand lockup,
 * persistent search, theme and language controls, the main links and the related-site menu are the
 * same components the documentation family renders — not a hand-built header. `HomeLayout` owns
 * the `<main>` element, so the page content below it must not render another one.
 */
export function HomeShell({
  locale,
  library,
  coverage,
  home,
  children,
}: {
  locale: string;
  library: string;
  coverage?: string;
  /** Brand target; `/` for the x-default home so the entry links to itself. */
  home?: string;
  children: ReactNode;
}) {
  return (
    <HomeLayout {...baseOptions(locale, library, coverage, home)}>{children}</HomeLayout>
  );
}
