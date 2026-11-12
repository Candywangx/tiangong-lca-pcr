'use client';
import { useEffect } from 'react';
import { compatibilityDestination, type ChapterAlias } from '../lib/chapter-compatibility';

/** A provider rewrite already delivered the complete target body; normalize its location locally. */
export function ChapterLocation({ aliases }: { aliases: readonly ChapterAlias[] }) {
  useEffect(() => {
    const destination = compatibilityDestination(window.location.href, aliases);
    if (!destination) return;
    // Supported native-history integration: Next copies its router state and restores pathname/search.
    let anchor: string;
    try { anchor = decodeURIComponent(new URL(destination, window.location.origin).hash.slice(1)); }
    catch { anchor = ''; } // Preserve a malformed external fragment without throwing or choosing another anchor.
    const frame = requestAnimationFrame(() => {
      window.history.replaceState(null, '', destination);
      if (anchor) document.getElementById(anchor)?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [aliases]);
  return null;
}
