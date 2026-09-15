import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import type { ReactNode } from 'react';
import type { DocPage } from '@/lib/types';

/**
 * A page's own metadata, then its normative source HTML.
 *
 * When the generator lifts the original H1 out of the HTML it records the id it assigned to that
 * heading (`sourceHeadingAnchor`) so cross-page fragment links still resolve, and the source
 * coverage marker for the same node (`sourceHeadingId`). Both are rendered on the visible title.
 */
export function PcrPage({
  page,
  children,
}: {
  page: DocPage & { sourceHeadingAnchor?: string };
  children: ReactNode;
}) {
  const headingProps: Record<string, string> = {};
  if (page.sourceHeadingAnchor) headingProps.id = page.sourceHeadingAnchor;
  if (page.sourceHeadingId) headingProps['data-source-node'] = page.sourceHeadingId;
  const bodyProps = page.sourcePath ? { 'data-source-document': page.sourcePath } : {};

  return (
    <DocsPage toc={page.toc}>
      <DocsTitle {...headingProps}>{page.title}</DocsTitle>
      {page.description ? <DocsDescription>{page.description}</DocsDescription> : null}
      <DocsBody {...bodyProps}>{children}</DocsBody>
    </DocsPage>
  );
}
