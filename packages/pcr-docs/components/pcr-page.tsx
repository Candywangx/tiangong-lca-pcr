import { DocsBody, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
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
  // The source keeps every heading and anchor. Continuation pages can begin at H3 with no H2.
  const sections = page.toc.filter((heading) => heading.depth === 2);
  const processes = page.toc
    .filter((heading) => heading.depth === 3)
    .map((heading) => ({
      ...heading,
      title: /^(?:Process:|过程：)/u.test(heading.title)
        ? heading.title.replace(/\s+\([a-z][a-z0-9_]*\)$/u, '')
        : heading.title,
    }));
  const toc = page.kind === 'pcr'
    ? sections.length > 0
      ? sections
      : processes
    : page.toc;

  return (
    <DocsPage toc={toc} footer={{ enabled: false }} breadcrumb={{ enabled: false }}>
      <DocsTitle {...headingProps} className={page.title.length > 180 ? 'pcr-title--long' : undefined}>
        {page.title}
      </DocsTitle>
      {/* The generated description is SEO metadata that already begins with this title. */}
      <DocsBody {...bodyProps}>{children}</DocsBody>
    </DocsPage>
  );
}
