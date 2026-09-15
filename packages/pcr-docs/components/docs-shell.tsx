import type { ReactNode } from 'react';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { docsOptions } from '@/lib/layout.shared';
import { getSiteManifest } from '@/lib/generated';
import { coveragePage, libraryUrl, navigationTree, type NavContext } from '@/lib/source';

/**
 * Documentation shell. It is rendered by the catch-all page rather than by a layout, because a
 * layout never receives the params of a deeper dynamic segment and so could not scope the sidebar
 * to the reader's current domain, subdomain and open record.
 */
export function DocsShell({ context, children }: { context: NavContext; children: ReactNode }) {
  const manifest = getSiteManifest();
  return (
    <DocsLayout
      {...docsOptions(context.locale, libraryUrl(context.locale), coveragePage(context.locale)?.url)}
      tree={navigationTree(context)}
    >
      {children}
    </DocsLayout>
  );
}
