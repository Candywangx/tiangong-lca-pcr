const inlinePrefix = 'data:application/octet-stream;base64,';
const transportKey = 'downloadTransport';
const referenceKey = '$inlineDownload';
const invalid = () => new Error('Invalid site metadata download transport.');
const record = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === 'object' && !Array.isArray(value);

/** Validate byte encoding here; the existing native-download reader owns artifact size limits. */
function canonicalInlineUrl(value: unknown): value is string {
  if (typeof value !== 'string' || !value.startsWith(inlinePrefix)) return false;
  const encoded = value.slice(inlinePrefix.length);
  if (!encoded.length || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/u.test(encoded)) return false;
  try { return btoa(atob(encoded)) === encoded; } catch { return false; }
}

/** Intern only native-download URL fields before JSON builds a repeated expanded string. */
export function serializeSiteMetadata(value: unknown): string {
  if (!record(value) || Object.hasOwn(value, transportKey)) throw invalid();
  const urls: string[] = [], indices = new Map<string, number>();
  // The table must be visited last: preceding fields populate it during the same stringify traversal.
  const root = Object.fromEntries([...Object.entries(value), [transportKey, { schemaVersion: 1, urls }]]);
  return JSON.stringify(root, (key: string, item: unknown): unknown => {
    if (key !== 'url') return item;
    if (record(item) && Object.hasOwn(item, referenceKey)) throw invalid();
    if (typeof item !== 'string' || !item.startsWith(inlinePrefix)) return item;
    let index = indices.get(item);
    if (index === undefined) {
      if (!canonicalInlineUrl(item)) throw invalid();
      index = urls.length;
      indices.set(item, index);
      urls.push(item);
    }
    return { [referenceKey]: index };
  });
}

/** Restore only explicitly marked URL fields; legacy objects receive no reference interpretation. */
export function decodeSiteMetadata(value: unknown): unknown {
  if (!record(value) || !Object.hasOwn(value, transportKey)) return value;
  const transport = value[transportKey];
  if (!record(transport) || Object.keys(transport).length !== 2
    || !Object.hasOwn(transport, 'schemaVersion') || transport.schemaVersion !== 1
    || !Object.hasOwn(transport, 'urls') || !Array.isArray(transport.urls)
    || ![...transport.urls].every(canonicalInlineUrl)
    || new Set(transport.urls).size !== transport.urls.length) throw invalid();
  const urls = transport.urls as string[];
  function restore(item: unknown, key: string): unknown {
    if (key === 'url' && record(item) && Object.hasOwn(item, referenceKey)) {
      const index = item[referenceKey];
      if (Object.keys(item).length !== 1 || typeof index !== 'number'
        || !Number.isSafeInteger(index) || index < 0 || index >= urls.length) throw invalid();
      return urls[index];
    }
    if (Array.isArray(item)) return item.map(child => restore(child, ''));
    if (record(item)) return Object.fromEntries(Object.entries(item).map(([name, child]) => [name, restore(child, name)]));
    return item;
  }
  return Object.fromEntries(Object.entries(value).filter(([key]) => key !== transportKey)
    .map(([key, item]) => [key, restore(item, key)]));
}
