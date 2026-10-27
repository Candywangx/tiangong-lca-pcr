/** Lossless physical transport for existing, independently queried v4 logical indexes. */
export const SEARCH_PACK_MEMBERS = 16;
export const SEARCH_RAW_LIMIT = 20_000_000;
export const SEARCH_GZIP_LIMIT = 4_000_000;
const encoding = "v4-columnar-term-dictionary-delta";
const numericEncoding = "v4-columnar-term-dictionary-vlq";
const digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const integerLimit = 0x3fffffff;
const utf8 = new TextEncoder();
const object = (value: unknown): value is Record<string, unknown> => value !== null && typeof value === "object" && !Array.isArray(value);
const natural = (value: unknown): value is number => typeof value === "number" && Number.isSafeInteger(value) && value >= 0;
const hash = (value: unknown): value is string => typeof value === "string" && /^sha256:[a-f0-9]{64}$/.test(value);
const commit = (value: unknown): value is string => typeof value === "string" && /^[a-f0-9]{40}$/.test(value);
const fail = (): never => { throw new Error("Invalid search transport."); };
export interface SearchLogicalIdentity { wireBytes: number; wireSha256: string; records: number }
export interface SearchPhysicalFile { url: string; bytes: number; gzipBytes: number; sha256: string; firstLogicalShard: number; logicalShardCount: number; records: number; logicalShards: SearchLogicalIdentity[] }
export interface SearchManifestV5 { schemaVersion: 5; sourceCommit: string; language: string; logicalShardCount: number; files: SearchPhysicalFile[] }
export interface SearchManifestV6 extends Omit<SearchManifestV5, "schemaVersion"> { schemaVersion: 6 }
export type SearchManifest = SearchManifestV5 | SearchManifestV6;
export type SearchDigest = (bytes: Uint8Array) => string | Promise<string>;
export function searchUtf8(text: string): Uint8Array { return utf8.encode(text); }
export function readSearchManifest(value: unknown, language: string): SearchManifest {
 if (!object(value) || Object.hasOwn(value, "shards") || Object.hasOwn(value, "termDictionary") || (value.schemaVersion !== 5 && value.schemaVersion !== 6) || value.language !== language || !commit(value.sourceCommit) || !natural(value.logicalShardCount) || !Array.isArray(value.files)) return fail();
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
 return value as unknown as SearchManifest;
}
function unsigned(value: number): string {
 let result = "";
 do { const digit = value % 32; value = Math.floor(value / 32); result += digits[digit + (value ? 32 : 0)]!; } while (value);
 return result;
}
function sequence(values: readonly number[], signed: boolean): string {
 return unsigned(values.length) + values.map(value => unsigned(signed ? (value < 0 ? -value * 2 - 1 : value * 2) : value)).join("");
}
function numericColumns(columns: unknown[], budget: {remaining: number}): unknown[] {
 if (columns.length !== 3 || !Array.isArray(columns[0]) || !Array.isArray(columns[1]) || !Array.isArray(columns[2])) return columns;
 const numbers = (value: unknown): value is number[] => Array.isArray(value) && value.every(n => typeof n === "number" && Number.isSafeInteger(n) && Math.abs(n) <= integerLimit);
 const [terms, headers, postings] = columns;
 if (!numbers(terms) || !numbers(headers) || headers.some(n => n < 0) || !postings.every(numbers)) return columns;
 const packed = [sequence(terms, true), sequence(headers, false), unsigned(postings.length) + postings.map(posting => sequence(posting, true)).join("")];
 const nativeBytes = JSON.stringify(columns).length, expandedBytes = nativeBytes - 4;
 if (JSON.stringify(packed).length >= nativeBytes || expandedBytes > budget.remaining) return columns;
 budget.remaining -= expandedBytes;
 return packed;
}
/** Counts and shortest-form unsigned VLQs are checked before expanding bounded integer arrays. */
function restoreNumericColumns(columns: unknown[], budget: {remaining: number}): unknown[] {
 if (columns.length !== 3 || !columns.every(value => typeof value === "string")) return fail();
 function reader(text: string) {
  let offset = 0;
  function read(): number {
   let value = 0, factor = 1;
   for (let count = 0; count < 7; count++) {
    if (offset >= text.length) return fail();
    const digit = digits.indexOf(text[offset++]!);
    if (digit < 0) return fail();
    value += (digit % 32) * factor;
    if (!Number.isSafeInteger(value) || value > 0x7fffffff) return fail();
    if (digit < 32) { if (count && digit === 0) return fail(); return value; }
    factor *= 32;
   }
   return fail();
  }
  function charge(bytes: number) { budget.remaining -= bytes; if (budget.remaining < 0) return fail(); }
  function length(): number { const count = read(); if (count > text.length - offset) return fail(); charge(2 + Math.max(0, count - 1)); return count; }
  function values(signed: boolean): number[] {
   const count = length(), result: number[] = [];
   for (let i = 0; i < count; i++) {
    const value = read(), n = signed ? (value % 2 ? -(value + 1) / 2 : value / 2) : value;
    if (Math.abs(n) > integerLimit) return fail();
    charge(String(n).length); result.push(n);
   }
   return result;
  }
  function end() { if (offset !== text.length) return fail(); }
  return {values, length, end};
 }
 const terms = reader(columns[0] as string), headers = reader(columns[1] as string), postings = reader(columns[2] as string);
 const termValues = terms.values(true), headerValues = headers.values(false), count = postings.length(), postingValues: number[][] = [];
 terms.end(); headers.end();
 for (let i = 0; i < count; i++) postingValues.push(postings.values(true));
 postings.end();
 return [termValues, headerValues, postingValues];
}
function columnMaps(shard: unknown): { shard: Record<string, unknown>; entries: Record<string, unknown>; keys: string[] } {
 if (!object(shard) || !object(shard.entries) || !Array.isArray(shard.records)) return fail();
 const keys = shard.columnarMaps ?? [];
 if (!Array.isArray(keys) || !keys.every((key: unknown): key is string => typeof key === "string") || new Set(keys).size !== keys.length) return fail();
 for (const key of keys) if (!Object.hasOwn(shard.entries, key) || !Array.isArray(shard.entries[key]) || !Array.isArray(shard.entries[key][0])) return fail();
 return { shard, entries: shard.entries, keys };
}
/** Copies through JSON so neither transport compression nor restoration mutates its input. */
export function packSearchShards(wires: readonly string[], sourceCommit: string, language: string, firstLogicalShard: number, version: 5 | 6 = 5): string {
 if (!wires.length || wires.length > SEARCH_PACK_MEMBERS || !commit(sourceCommit) || !natural(firstLogicalShard) || (version !== 5 && version !== 6)) return fail();
 const dictionary: string[] = [], ids = new Map<string, number>(), numericBudget = {remaining: SEARCH_RAW_LIMIT};
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
   if (version === 6) entries[key] = numericColumns(columns, numericBudget);
  }
  return shard;
 });
 return JSON.stringify({ schemaVersion: version === 6 ? 2 : 1, encoding: version === 6 ? numericEncoding : encoding, sourceCommit, language, firstLogicalShard, dictionary, shards });
}
/** Validates actual physical bytes and each restored logical wire before a caller imports indexes. */
export async function unpackSearchFile(manifest: SearchManifest, file: SearchPhysicalFile, bytes: Uint8Array, digest: SearchDigest): Promise<Record<string, unknown>[]> {
 if (bytes.byteLength !== file.bytes || bytes.byteLength > SEARCH_RAW_LIMIT || await digest(bytes) !== file.sha256) return fail();
 let value: unknown;
 try { value = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes)); } catch { return fail(); }
 if (!object(value) || value.schemaVersion !== (manifest.schemaVersion === 6 ? 2 : 1) || value.encoding !== (manifest.schemaVersion === 6 ? numericEncoding : encoding) || value.sourceCommit !== manifest.sourceCommit || value.language !== manifest.language || value.firstLogicalShard !== file.firstLogicalShard || !Array.isArray(value.dictionary) || value.dictionary.length > 1_000_000 || !value.dictionary.every((term: unknown): term is string => typeof term === "string") || new Set(value.dictionary).size !== value.dictionary.length || !Array.isArray(value.shards) || value.shards.length !== file.logicalShardCount || value.shards.length > SEARCH_PACK_MEMBERS) return fail();
 const dictionary: string[] = value.dictionary;
 const termBytes = dictionary.map(term => utf8.encode(JSON.stringify(term)).byteLength);
 const restored: Record<string, unknown>[] = [];
 const numericBudget = {remaining: SEARCH_RAW_LIMIT};
 for (const [offset, packed] of value.shards.entries()) {
  const identity = file.logicalShards[offset];
  if (!identity) return fail();
  if (manifest.schemaVersion === 6 && object(packed) && object(packed.entries) && Array.isArray(packed.columnarMaps)) {
   for (const key of packed.columnarMaps) {
    if (typeof key !== "string" || !Object.hasOwn(packed.entries, key)) return fail();
    const columns: unknown = packed.entries[key];
    if (!Array.isArray(columns)) return fail();
    if (typeof columns[0] === "string") packed.entries[key] = restoreNumericColumns(columns, numericBudget);
   }
  }
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
