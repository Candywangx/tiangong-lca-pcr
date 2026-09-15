import type { ReactNode } from 'react';

const SCRIPT_ID = 'pcr-alternates';

/**
 * A page publishes its verified locales once, in the document, and the client provider reads the
 * current document's map when the reader switches locale. Targets are made same-origin so the
 * switch is an in-app navigation rather than a cross-origin jump.
 */
export function AlternateLinks({
  alternates,
  origin,
}: {
  alternates: Record<string, string>;
  origin: string;
}): ReactNode {
  const safe: Record<string, string> = {};
  for (const [code, url] of Object.entries(alternates)) {
    if (typeof url !== 'string') continue;
    const path = url.startsWith(origin) ? url.slice(origin.length) : url;
    if (path.startsWith('/') && !path.startsWith('//')) safe[code] = path;
  }
  return (
    <script
      id={SCRIPT_ID}
      type="application/json"
      // Values are route-absolute paths validated above; JSON.stringify escapes the rest.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(safe).replace(/</gu, '\\u003c') }}
    />
  );
}

export const ALTERNATE_SCRIPT_ID = SCRIPT_ID;
