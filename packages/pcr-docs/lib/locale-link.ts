/**
 * Locale switching is a pure path rewrite: the URL alias is the only thing that changes, so a
 * deep document keeps its identity when a counterpart exists. Targets are always
 * route-relative paths that the export actually emits (trailing slash).
 */
export function swapLocale(pathname: string, next: string): string {
  const trailingSlash = pathname.endsWith('/') || !pathname.includes('.');
  const segments = pathname.split('/').filter((segment) => segment.length > 0);
  const [first, ...rest] = segments;
  // A route alias in the first segment is replaced; anything else is a prefix-less path.
  const aliased = first && /^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/u.test(first);
  const tail = aliased ? rest : segments;
  const url = `/${[next, ...tail].join('/')}`;
  return trailingSlash && !url.endsWith('/') ? `${url}/` : url;
}

/** A document's own counterpart for the requested locale, when the manifest declares one. */
export function alternateTarget(
  alternates: Record<string, string> | undefined,
  next: string,
): string | undefined {
  const target = alternates?.[next];
  return typeof target === 'string' && target.startsWith('/') ? target : undefined;
}
