import published from '../compatibility/published-chapters.json' with { type: 'json' };

export interface ChapterAlias { readonly from: string; readonly to: string; readonly anchor: string }
export const CHAPTER_ALIASES: readonly ChapterAlias[] = Object.freeze(published.entries.map(row => Object.freeze(row)));
const bySource = new Map(CHAPTER_ALIASES.map(row => [row.from, row]));
const byTarget = new Map<string, readonly ChapterAlias[]>();
for (const row of CHAPTER_ALIASES) byTarget.set(row.to, Object.freeze([...(byTarget.get(row.to) ?? []), row]));
export function aliasesForTarget(target: string): readonly ChapterAlias[] { return byTarget.get(target) ?? []; }
function documentPath(path: string): string { return path.endsWith('/') ? path : path + '/'; }
/** EdgeOne receives no browser fragment. Exact matches retain the original origin and query. */
export function rewriteChapterRequest(request: Request): string | undefined {
  if (request.method !== 'GET' && request.method !== 'HEAD') return undefined;
  const url = new URL(request.url), alias = bySource.get(documentPath(url.pathname));
  if (!alias) return undefined;
  return url.origin + alias.to + url.search;
}
/** Normalize only aliases belonging to the already-rendered target page, without another fetch. */
export function compatibilityDestination(href: string, aliases: readonly ChapterAlias[]): string | undefined {
  const url = new URL(href), alias = aliases.find(row => row.from === documentPath(url.pathname));
  return alias ? alias.to + url.search + (url.hash || '#' + encodeURIComponent(alias.anchor)) : undefined;
}
