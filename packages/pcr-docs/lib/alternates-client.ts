'use client';

import { ALTERNATE_SCRIPT_ID } from '@/components/alternate-links';

/**
 * Reads the current document's verified locale targets. A locale is only offered when the server
 * declared a counterpart for it, so a switch can never land on a page the export does not emit.
 */
export function currentAlternates(): Record<string, string> {
  if (typeof document === 'undefined') return {};
  const node = document.getElementById(ALTERNATE_SCRIPT_ID);
  if (!node?.textContent) return {};
  try {
    const parsed: unknown = JSON.parse(node.textContent);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
    const out: Record<string, string> = {};
    for (const [route, url] of Object.entries(parsed as Record<string, unknown>)) {
      if (typeof url === 'string' && url.startsWith('/') && !url.startsWith('//')) out[route] = url;
    }
    return out;
  } catch {
    return {};
  }
}
