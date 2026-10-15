import { parseYaml } from '../../pcr-core/src/yaml-lite.ts';
import { isUnknownRecord } from '../../pcr-core/src/types.ts';

export const INLINE_MANIFEST_LIMIT = 16384;
const prefix = 'data:application/octet-stream;base64,';
const currentManifest = /^library\/pcrs\/[^/.][^/]*\/[^/.][^/]*\/[^/.][^/]*\/manifest\.yaml$/u;

/** Small, unpublished metadata stays an exact native download without a separate HTTP file. */
export function inlineManifestUrl(sourcePath: string, bytes: Uint8Array, hasReleaseHistory: boolean): string | undefined {
  if (!currentManifest.test(sourcePath) || bytes.length > INLINE_MANIFEST_LIMIT || hasReleaseHistory) return undefined;
  const manifest = parseYaml(new TextDecoder('utf-8', { fatal: true }).decode(bytes));
  if (!isUnknownRecord(manifest) || manifest.status !== 'candidate' || manifest.content_maturity !== 'authored_methodology') return undefined;
  return prefix + Buffer.from(bytes).toString('base64');
}

/** Reject arbitrary data URLs, noncanonical base64 and oversized inline artifacts. */
export function decodeInlineManifestUrl(url: string): Buffer | undefined {
  if (!url.startsWith('data:')) return undefined;
  if (!url.startsWith(prefix)) throw new Error('Invalid inline manifest MIME type');
  const encoded = url.slice(prefix.length);
  if (encoded.length === 0 || encoded.length > 4 * Math.ceil(INLINE_MANIFEST_LIMIT / 3)
      || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/u.test(encoded))
    throw new Error('Invalid inline manifest base64');
  const bytes = Buffer.from(encoded, 'base64');
  if (bytes.length > INLINE_MANIFEST_LIMIT || bytes.toString('base64') !== encoded)
    throw new Error('Invalid inline manifest size or encoding');
  return bytes;
}
