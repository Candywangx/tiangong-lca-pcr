/** Lossless physical transport for existing, independently queried v4 logical indexes. */
export const SEARCH_PACK_MEMBERS = 16;
export const SEARCH_RAW_LIMIT = 20_000_000;
export const SEARCH_GZIP_LIMIT = 4_000_000;
const encoding = "v4-columnar-term-dictionary-delta";
const utf8 = new TextEncoder();
const object = (value: unknown): value is Record<string, unknown> => value !== null && typeof value === "object" && !Array.isArray(value);
const natural = (value: unknown): value is number => typeof value === "number" && Number.isSafeInteger(value) && value >= 0;
const hash = (value: unknown): value is string => typeof value === "string" && /^sha256:[a-f0-9]{64}$/.test(value);
const commit = (value: unknown): value is string => typeof value === "string" && /^[a-f0-9]{40}$/.test(value);
const fail = (): never => { throw new Error("Invalid search transport."); };
export interface SearchLogicalIdentity { wireBytes: number; wireSha256: string; records: number }
export interface SearchPhysicalFile { url: string; bytes: number; gzipBytes: number; sha256: string; firstLogicalShard: number; logicalShardCount: number; records: number; logicalShards: SearchLogicalIdentity[] }
export interface SearchManifestV5 { schemaVersion: 5; sourceCommit: string; language: string; logicalShardCount: number; files: SearchPhysicalFile[] }
export type SearchDigest = (bytes: Uint8Array) => string | Promise<string>;
export function searchUtf8(text: string): Uint8Array { return utf8.encode(text); }
export function readSearchManifest(value: unknown, language: string): SearchManifestV5 {
 if (!object(value) || Object.hasOwn(value, "shards") || Object.hasOwn(value, "termDictionary") || value.schemaVersion !== 5 || value.language !== language || !commit(value.sourceCommit) || !natural(value.logicalShardCount) || !Array.isArray(value.files)) return fail();
 let next = 0, raw = 0, gzip = 0;
 const urls = new Set<string>();
 for (const file of value.files) {
  if (!object(file) || typeof file.url !== "string" || !file.url.startsWith(`/generated/search/${encodeURIComponent(language)}/`) || !/^\/generated\/search\/[A-Za-z0-9-]+\/[A-Za-z0-9-]+\.json$/.test(file.url) || urls.has(file.url) || !natural(file.bytes) || file.bytes > SEARCH_RAW_LIMIT || !natural(file.gzipBytes) || !hash(file.sha256) || file.firstLogicalShard !== next || !natural(file.logicalShardCount) || file.logicalShardCount < 1 || file.logicalShardCount > SEARCH_PACK_MEMBERS || !Array.isArray(file.logicalShards) || file.logicalShards.length !== file.logicalShardCount || !natural(file.records)) return fail();
  let records = 0, restoredBytes = 0;
  for (const logical of file.logicalShards) {
   if (!object(logical) || !natural(logical.wireBytes) || logical.wireBytes > SEARCH_RAW_LIMIT || !hash(logical.wireSha256) || !natural(logical.records)) return fail();
   records += logical.records; restoredBytes += logical.wireBytes;
  }
  if (records !== file.records || restoredBytes > SEARCH_RAW_LIMIT) return fail();
  next += file.logicalShardCount; raw += file.bytes; gzip += file.gzipBytes; urls.add(file.url);
 }
 if (next !== value.logicalShardCount || raw > SEARCH_RAW_LIMIT || gzip > SEARCH_GZIP_LIMIT) return fail();
 return value as unknown as SearchManifestV5;
}
function columnMaps(shard: unknown): { shard: Record<string, unknown>; entries: Record<string, unknown>; keys: string[] } {
 if (!object(shard) || !object(shard.entries) || !Array.isArray(shard.records)) return fail();
 const keys = shard.columnarMaps ?? [];
 if (!Array.isArray(keys) || !keys.every((key: unknown): key is string => typeof key === "string") || new Set(keys).size !== keys.length) return fail();
 for (const key of keys) if (!Object.hasOwn(shard.entries, key) || !Array.isArray(shard.entries[key]) || !Array.isArray(shard.entries[key][0])) return fail();
 return { shard, entries: shard.entries, keys };
}
/** Copies through JSON so neither transport compression nor restoration mutates its input. */
export function packSearchShards(wires: readonly string[], sourceCommit: string, language: string, firstLogicalShard: number): string {
 if (!wires.length || wires.length > SEARCH_PACK_MEMBERS || !commit(sourceCommit) || !natural(firstLogicalShard)) return fail();
 const dictionary: string[] = [], ids = new Map<string, number>();
 const shards: unknown[] = wires.map(wire => {
  const value: unknown = JSON.parse(wire), { shard, entries, keys } = columnMaps(value);
  for (const key of keys) {
   const columns = entries[key] as unknown[], terms = columns[0] as unknown[];
   let previous = 0;
   columns[0] = terms.map(term => {
    if (typeof term !== "string") return fail();
    let id = ids.get(term);
    if (id === undefined) { id = dictionary.length; ids.set(term, id); dictionary.push(term); }
    const delta = id - previous; previous = id; return delta;
   });
  }
  return shard;
 });
 return JSON.stringify({ schemaVersion: 1, encoding, sourceCommit, language, firstLogicalShard, dictionary, shards });
}
/** Validates actual physical bytes and each restored logical wire before a caller imports indexes. */
export async function unpackSearchFile(manifest: SearchManifestV5, file: SearchPhysicalFile, bytes: Uint8Array, digest: SearchDigest): Promise<Record<string, unknown>[]> {
 if (bytes.byteLength !== file.bytes || bytes.byteLength > SEARCH_RAW_LIMIT || await digest(bytes) !== file.sha256) return fail();
 let value: unknown;
 try { value = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes)); } catch { return fail(); }
 if (!object(value) || value.schemaVersion !== 1 || value.encoding !== encoding || value.sourceCommit !== manifest.sourceCommit || value.language !== manifest.language || value.firstLogicalShard !== file.firstLogicalShard || !Array.isArray(value.dictionary) || value.dictionary.length > 1_000_000 || !value.dictionary.every((term: unknown): term is string => typeof term === "string") || new Set(value.dictionary).size !== value.dictionary.length || !Array.isArray(value.shards) || value.shards.length !== file.logicalShardCount || value.shards.length > SEARCH_PACK_MEMBERS) return fail();
 const dictionary: string[] = value.dictionary;
 const termBytes = dictionary.map(term => utf8.encode(JSON.stringify(term)).byteLength);
 const restored: Record<string, unknown>[] = [];
 for (const [offset, packed] of value.shards.entries()) {
  const identity = file.logicalShards[offset];
  if (!identity) return fail();
  const { shard, entries, keys } = columnMaps(packed);
  if ((shard.records as unknown[]).length !== identity.records) return fail();
  let size = utf8.encode(JSON.stringify(shard)).byteLength;
  // Bound expanded strings before allocating a restored wire. References stay local to each map.
  for (const key of keys) {
   const columns = entries[key] as unknown[], deltas = columns[0] as unknown[];
   let previous = 0;
   for (const delta of deltas) {
    if (typeof delta !== "number" || !Number.isSafeInteger(delta)) return fail();
    const id = previous + delta;
    if (!natural(id) || id >= dictionary.length) return fail();
    size += termBytes[id]! - String(delta).length; previous = id;
    if (!Number.isSafeInteger(size) || size > SEARCH_RAW_LIMIT) return fail();
   }
  }
  if (size !== identity.wireBytes) return fail();
  for (const key of keys) {
   const columns = entries[key] as unknown[];
   let previous = 0;
   columns[0] = (columns[0] as number[]).map(delta => { previous += delta; return dictionary[previous]!; });
  }
  const wire = utf8.encode(JSON.stringify(shard));
  if (wire.byteLength !== identity.wireBytes || await digest(wire) !== identity.wireSha256) return fail();
  restored.push(shard);
 }
 return restored;
}
