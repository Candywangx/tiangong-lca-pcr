import type { ReactNode } from 'react';

/**
 * A layout only receives the params of its own segment, so this one can never know which record
 * is open. The documentation shell therefore lives in the catch-all page, which is the only place
 * that can scope the sidebar to the reader's current position.
 */
export default function DocsSegmentLayout({ children }: { children: ReactNode }) {
  return children;
}
