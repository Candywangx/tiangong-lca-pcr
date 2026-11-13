import {encodeSearchChannel, decodeSearchChannel, SearchChannelCapacityError} from "./search-arithmetic.ts";
/** Lossless physical transport for existing, independently queried v4 logical indexes. */
export const SEARCH_PACK_MEMBERS = 16;
export const SEARCH_RAW_LIMIT = 20_000_000;
export const SEARCH_GZIP_LIMIT = 4_000_000;
const encoding = "v4-columnar-term-dictionary-delta";
const numericEncoding = "v4-columnar-term-dictionary-vlq";
const channelEncoding = "v4-columnar-channels-score-posting-vlq";
const arithmeticEncoding = "v4-columnar-arithmetic-channels";
const compactEncoding = "v4-columnar-new-reuse-ranked-split-vlq";
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
export interface SearchManifestV7 extends Omit<SearchManifestV5, "schemaVersion"> { schemaVersion: 7 }
export interface SearchManifestV8 extends Omit<SearchManifestV5, "schemaVersion"> { schemaVersion: 8 }
export interface SearchManifestV9 extends Omit<SearchManifestV5, "schemaVersion"> { schemaVersion: 9 }
export type SearchManifest = SearchManifestV5 | SearchManifestV6 | SearchManifestV7 | SearchManifestV8 | SearchManifestV9;
export type SearchDigest = (bytes: Uint8Array) => string | Promise<string>;
export function searchUtf8(text: string): Uint8Array { return utf8.encode(text); }
export function readSearchManifest(value: unknown, language: string): SearchManifest {
 if (!object(value) || Object.hasOwn(value, "shards") || Object.hasOwn(value, "termDictionary") || (value.schemaVersion !== 5 && value.schemaVersion !== 6 && value.schemaVersion !== 7 && value.schemaVersion !== 8 && value.schemaVersion !== 9) || value.language !== language || !commit(value.sourceCommit) || !natural(value.logicalShardCount) || !Array.isArray(value.files)) return fail();
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
function numericReader(text: string, budget: {remaining: number}) {
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
function restoreNumericColumns(columns: unknown[], budget: {remaining: number}): unknown[] {
 if (columns.length !== 3 || !columns.every(value => typeof value === "string")) return fail();
 const terms = numericReader(columns[0] as string, budget), headers = numericReader(columns[1] as string, budget), postings = numericReader(columns[2] as string, budget);
 const termValues = terms.values(true), headerValues = headers.values(false), count = postings.length(), postingValues: number[][] = [];
 terms.end(); headers.end();
 for (let i = 0; i < count; i++) postingValues.push(postings.values(true));
 postings.end();
 return [termValues, headerValues, postingValues];
}
/** Score slots provide independent, reversible first-posting predictors. */
function postingSlots(headers: readonly number[], maximum: number): number[] | undefined {
 const slots: number[] = [];
 for (const header of headers) {
  if (!natural(header) || header > 9 * 512 + 511) return;
  const length = Math.floor(header / 512), mask = header % 512;
  if (mask >= 2 ** length) return;
  for (let position = 0; position < length; position++) if (mask & 2 ** position) {
   if (slots.length >= maximum) return;
   slots.push(position);
  }
 }
 return slots;
}
function channelColumns(columns: unknown[], budget: {remaining: number}): string[] | undefined {
 if (columns.length !== 3 || !columns.every(Array.isArray)) return;
 const numbers = (value: unknown): value is number[] => Array.isArray(value) && value.every(n => typeof n === "number" && Number.isSafeInteger(n) && Math.abs(n) <= integerLimit);
 const [terms, headers, postings] = columns;
 if (!numbers(terms) || !numbers(headers) || terms.length !== headers.length || !Array.isArray(postings) || !postings.every(numbers)) return;
 const slots = postingSlots(headers, postings.length);
 if (!slots || slots.length !== postings.length) return;
 const previous = Array<number>(9).fill(0), values: number[] = [];
 for (const [index, posting] of postings.entries()) {
  const slot = slots[index]!;
  for (const [offset, n] of posting.entries()) {
   const value = offset ? n : n - previous[slot]!;
   if (Math.abs(value) > integerLimit) return;
   values.push(value);
  }
  if (posting.length) previous[slot] = posting[0]!;
 }
 const packed = [sequence(terms, true), sequence(headers, false), sequence(postings.map(posting => posting.length), false), sequence(values, true)];
 const nativeBytes = JSON.stringify(columns).length;
 let expandedBytes = [terms, headers, postings.map(posting => posting.length), values].reduce((sum, column) => sum + JSON.stringify(column).length, 0);
 let valueOffset = 0;
 for (const posting of postings) {
  expandedBytes += 2 + Math.max(0, posting.length - 1);
  if (posting.length) expandedBytes += Math.max(0, String(posting[0]).length - String(values[valueOffset]).length);
  valueOffset += posting.length;
 }
 if (JSON.stringify(packed).length >= nativeBytes || expandedBytes > budget.remaining) return;
 budget.remaining -= expandedBytes;
 return packed;
}
function restoreChannelColumns(columns: unknown[], budget: {remaining: number}): unknown[] {
 if (columns.length !== 4 || !columns.every((value): value is string => typeof value === "string")) return fail();
 const readers = columns.map(text => numericReader(text, budget));
 const terms = readers[0]!.values(true), headers = readers[1]!.values(false), lengths = readers[2]!.values(false), values = readers[3]!.values(true);
 readers.forEach(reader => reader.end());
 if (terms.length !== headers.length) return fail();
 const slots = postingSlots(headers, lengths.length);
 if (!slots || slots.length !== lengths.length || lengths.reduce((sum, length) => sum + length, 0) !== values.length) return fail();
 const previous = Array<number>(9).fill(0), postings: number[][] = [];
 let offset = 0;
 for (const [index, length] of lengths.entries()) {
  // The values and length arrays have already been charged; charge each restored nested array.
  budget.remaining -= 2 + Math.max(0, length - 1);
  if (budget.remaining < 0) return fail();
  const posting = values.slice(offset, offset + length), slot = slots[index]!;
  if (length) {
   posting[0] = posting[0]! + previous[slot]!;
   if (!Number.isSafeInteger(posting[0]) || Math.abs(posting[0]) > integerLimit) return fail();
   budget.remaining -= Math.max(0, String(posting[0]).length - String(values[offset]).length);
   if (budget.remaining < 0) return fail();
   previous[slot] = posting[0];
  }
  postings.push(posting); offset += length;
 }
 return [terms, headers, postings];
}
// All 1,023 legal length/mask pairs, independent of the corpus and host locale.
const bitLength = (mask: number): number => mask ? Math.floor(Math.log2(mask)) + 1 : 0;
function bitCount(mask: number): number { let count = 0; for (; mask; mask &= mask - 1) count++; return count; }
const rankedHeaders = Array.from({length: 10}, (_, length) => Array.from({length: 2 ** length}, (_, mask) => length * 512 + mask)).flat().sort((a, b) =>
 Number(Math.floor(a / 512) !== bitLength(a % 512)) - Number(Math.floor(b / 512) !== bitLength(b % 512)) || bitCount(a % 512) - bitCount(b % 512) || a - b);
const headerRanks = new Map(rankedHeaders.map((header, rank) => [header, rank]));
const arraySyntax = (length: number): number => 2 + Math.max(0, length - 1);
function charge(budget: {remaining: number}, bytes: number): void { budget.remaining -= bytes; if (budget.remaining < 0) fail(); }
/** V8 keeps the v7 score predictor, splitting first values from nonnegative remainders. */
function compactColumns(columns: unknown[], commands: number[], budget: {remaining: number}): string[] | undefined {
 if (columns.length !== 3 || !columns.every(Array.isArray)) return;
 const numbers = (value: unknown): value is number[] => Array.isArray(value) && value.every(n => typeof n === 'number' && Number.isSafeInteger(n) && Math.abs(n) <= integerLimit);
 const [terms, headers, postings] = columns;
 if (!numbers(terms) || !numbers(headers) || terms.length !== headers.length || !Array.isArray(postings) || !postings.every(numbers)) return;
 const slots = postingSlots(headers, postings.length);
 if (!slots || slots.length !== postings.length || postings.some(posting => posting.slice(1).some(n => n < 0))) return;
 const ranks = headers.map(header => headerRanks.get(header)!);
 const previous = Array<number>(9).fill(0), first: number[] = [], rest: number[] = [];
 for (const [index, posting] of postings.entries()) {
  if (posting.length) {
   const value = posting[0]! - previous[slots[index]!]!;
   if (Math.abs(value) > integerLimit) return;
   first.push(value); previous[slots[index]!] = posting[0]!;
   for (let i = 1; i < posting.length; i++) rest.push(posting[i]!);
  }
 }
 const lengths = postings.map(posting => posting.length);
 const packed = [sequence(commands, false), sequence(ranks, false), sequence(lengths, false), sequence(first, true), sequence(rest, false)];
 let expanded = [commands, ranks, lengths, first, rest, slots].reduce((sum, values) => sum + JSON.stringify(values).length, 0) + arraySyntax(postings.length);
 for (let i = 0; i < terms.length; i++) expanded += Math.max(0, String(terms[i]).length - String(commands[i]).length) + Math.max(0, String(headers[i]).length - String(ranks[i]).length);
 let firstIndex = 0;
 for (const posting of postings) {
  expanded += arraySyntax(posting.length);
  if (posting.length) expanded += Math.max(0, String(posting[0]).length - String(first[firstIndex++]).length);
 }
 if (JSON.stringify(packed).length >= JSON.stringify(columns).length || expanded > budget.remaining) return;
 budget.remaining -= expanded;
 return packed;
}
function restoreCompactColumns(columns: unknown[], budget: {remaining: number}, termsState: {next: number}, dictionaryLength: number): unknown[] {
 if (columns.length !== 5 || !columns.every((value): value is string => typeof value === 'string')) return fail();
 const readers = columns.map(text => numericReader(text, budget));
 const terms = readers[0]!.values(false), headers = readers[1]!.values(false), lengths = readers[2]!.values(false), first = readers[3]!.values(true), rest = readers[4]!.values(false);
 readers.forEach(reader => reader.end());
 if (terms.length !== headers.length) return fail();
 let actualPrevious = 0, reusedPrevious = 0;
 for (let i = 0; i < terms.length; i++) {
  const command = terms[i]!;
  let id: number;
  if (command === 0) { if (termsState.next >= dictionaryLength) return fail(); id = termsState.next++; }
  else {
   const code = command - 1, delta = code % 2 ? -(code + 1) / 2 : code / 2;
   id = reusedPrevious + delta;
   if (!natural(id) || id >= termsState.next) return fail();
   reusedPrevious = id;
  }
  const delta = id - actualPrevious;
  charge(budget, Math.max(0, String(delta).length - String(command).length));
  terms[i] = delta; actualPrevious = id;
  const rank = headers[i]!, header = rankedHeaders[rank];
  if (header === undefined) return fail();
  charge(budget, Math.max(0, String(header).length - String(rank).length)); headers[i] = header;
 }
 // Charge the slot vector and outer posting array before allocating them.
 charge(budget, arraySyntax(lengths.length) + lengths.length + arraySyntax(lengths.length));
 const slots = postingSlots(headers, lengths.length);
 if (!slots || slots.length !== lengths.length) return fail();
 let total = 0, nonempty = 0;
 for (const length of lengths) { total += length; if (length) nonempty++; if (!Number.isSafeInteger(total) || total > first.length + rest.length) return fail(); }
 if (nonempty !== first.length || total - nonempty !== rest.length) return fail();
 const previous = Array<number>(9).fill(0), postings: number[][] = [];
 let firstOffset = 0, restOffset = 0;
 for (const [index, length] of lengths.entries()) {
  charge(budget, arraySyntax(length));
  const posting: number[] = [], slot = slots[index]!;
  if (length) {
   const prediction = first[firstOffset++]!, value = prediction + previous[slot]!;
   if (!Number.isSafeInteger(value) || Math.abs(value) > integerLimit) return fail();
   charge(budget, Math.max(0, String(value).length - String(prediction).length));
   posting.push(value); previous[slot] = value;
   for (let i = 1; i < length; i++) posting.push(rest[restOffset++]!);
  }
  postings.push(posting);
 }
 return [terms, headers, postings];
}
/** Native fallback also participates in the v8 first-appearance dictionary order. */
function advanceNativeTerms(deltas: unknown[], state: {next: number}, dictionaryLength: number): void {
 let id = 0;
 for (const delta of deltas) {
  if (typeof delta !== 'number' || !Number.isSafeInteger(delta)) return fail();
  id += delta;
  if (!natural(id) || id >= dictionaryLength || id > state.next) return fail();
  if (id === state.next) state.next++;
 }
}
function columnMaps(shard: unknown): { shard: Record<string, unknown>; entries: Record<string, unknown>; keys: string[] } {
 if (!object(shard) || !object(shard.entries) || !Array.isArray(shard.records)) return fail();
 const keys = shard.columnarMaps ?? [];
 if (!Array.isArray(keys) || !keys.every((key: unknown): key is string => typeof key === "string") || new Set(keys).size !== keys.length) return fail();
 for (const key of keys) if (!Object.hasOwn(shard.entries, key) || !Array.isArray(shard.entries[key]) || !Array.isArray(shard.entries[key][0])) return fail();
 return { shard, entries: shard.entries, keys };
}
/** Copies through JSON so neither transport compression nor restoration mutates its input. */
export function packSearchShards(wires: readonly string[], sourceCommit: string, language: string, firstLogicalShard: number, version: 5 | 6 | 7 | 8 | 9 = 5): string {
 if (version === 9) {
  const packed: unknown = JSON.parse(packSearchShards(wires, sourceCommit, language, firstLogicalShard, 8));
  if (!object(packed) || !Array.isArray(packed.numericColumns)) return fail();
  const columns = packed.numericColumns as string[][];
  if (columns.reduce((size, column) => size + column.length + column.reduce((n, text) => n + text.length, 0), 0) > SEARCH_RAW_LIMIT) throw new SearchChannelCapacityError();
  return JSON.stringify({...packed, schemaVersion: 5, encoding: arithmeticEncoding, numericColumns: columns.map(encodeSearchChannel)});
 }
 if (!wires.length || wires.length > SEARCH_PACK_MEMBERS || !commit(sourceCommit) || !natural(firstLogicalShard) || (version !== 5 && version !== 6 && version !== 7 && version !== 8)) return fail();
 const dictionary: string[] = [], ids = new Map<string, number>(), numericBudget = {remaining: SEARCH_RAW_LIMIT};
 const channels: string[][] = Array.from({length: version === 8 ? 5 : 4}, () => []);
 const shards: unknown[] = wires.map(wire => {
  const value: unknown = JSON.parse(wire), { shard, entries, keys } = columnMaps(value);
  for (const key of keys) {
   const columns = entries[key] as unknown[], terms = columns[0] as unknown[];
   let previous = 0, reusedPrevious = 0;
   const commands: number[] = [];
   columns[0] = terms.map(term => {
    if (typeof term !== "string") return fail();
    let id = ids.get(term);
    if (id === undefined) { id = dictionary.length; ids.set(term, id); dictionary.push(term); if (version === 8) commands.push(0); }
    else if (version === 8) { const delta = id - reusedPrevious; commands.push((delta < 0 ? -delta * 2 - 1 : delta * 2) + 1); reusedPrevious = id; }
    const delta = id - previous; previous = id; return delta;
   });
   if (version === 6) entries[key] = numericColumns(columns, numericBudget);
   if (version === 7 || version === 8) {
    const packed = version === 8 ? compactColumns(columns, commands, numericBudget) : channelColumns(columns, numericBudget);
    if (packed) {
     entries[key] = [channels[0]!.length];
     packed.forEach((text, column) => channels[column]!.push(text));
    }
   }
  }
  return shard;
 });
 return JSON.stringify({ schemaVersion: version === 8 ? 4 : version === 7 ? 3 : version === 6 ? 2 : 1, encoding: version === 8 ? compactEncoding : version === 7 ? channelEncoding : version === 6 ? numericEncoding : encoding, sourceCommit, language, firstLogicalShard, dictionary, shards, ...(version === 7 || version === 8 ? {numericColumns: channels} : {}) });
}
function verifyChannelOwnership(shards: unknown[], count: number): void {
 const usedChannels = new Set<number>();
  // Validate complete ownership before numeric expansion or any logical digest/import.
  for (const packed of shards) {
   if (!object(packed) || !object(packed.entries) || !Array.isArray(packed.columnarMaps ?? [])) return fail();
   const keys = (packed.columnarMaps ?? []) as unknown[];
   if (new Set(keys).size !== keys.length) return fail();
   for (const key of keys) {
    if (typeof key !== "string" || !Object.hasOwn(packed.entries, key)) return fail();
    const columns: unknown = packed.entries[key];
    if (!Array.isArray(columns)) return fail();
    if (columns.length === 1) {
     const id: unknown = columns[0];
     if (!natural(id) || id >= count || usedChannels.has(id)) return fail();
     usedChannels.add(id);
    }
   }
  }
  if (usedChannels.size !== count) return fail();
}
/** Validates actual physical bytes and each restored logical wire before a caller imports indexes. */
export async function unpackSearchFile(manifest: SearchManifest, file: SearchPhysicalFile, bytes: Uint8Array, digest: SearchDigest): Promise<Record<string, unknown>[]> {
 if (bytes.byteLength !== file.bytes || bytes.byteLength > SEARCH_RAW_LIMIT || await digest(bytes) !== file.sha256) return fail();
 let value: unknown;
 try { value = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes)); } catch { return fail(); }
 if (!object(value) || value.schemaVersion !== (manifest.schemaVersion === 9 ? 5 : manifest.schemaVersion === 8 ? 4 : manifest.schemaVersion === 7 ? 3 : manifest.schemaVersion === 6 ? 2 : 1) || value.encoding !== (manifest.schemaVersion === 9 ? arithmeticEncoding : manifest.schemaVersion === 8 ? compactEncoding : manifest.schemaVersion === 7 ? channelEncoding : manifest.schemaVersion === 6 ? numericEncoding : encoding) || value.sourceCommit !== manifest.sourceCommit || value.language !== manifest.language || value.firstLogicalShard !== file.firstLogicalShard || !Array.isArray(value.dictionary) || value.dictionary.length > 1_000_000 || !value.dictionary.every((term: unknown): term is string => typeof term === "string") || new Set(value.dictionary).size !== value.dictionary.length || !Array.isArray(value.shards) || value.shards.length !== file.logicalShardCount || value.shards.length > SEARCH_PACK_MEMBERS) return fail();
 const version = manifest.schemaVersion === 9 ? 8 : manifest.schemaVersion;
 if (manifest.schemaVersion === 9) {
  if (!Array.isArray(value.numericColumns) || value.numericColumns.length !== 5) return fail();
  const counts = value.numericColumns.map(column => {
   if (!object(column) || !Array.isArray(column.lengths)) return fail();
   return column.lengths.length;
  });
  if (!counts.every(count => count === counts[0])) return fail();
  verifyChannelOwnership(value.shards, counts[0]!);
  const budget = {remaining: SEARCH_RAW_LIMIT};
  value.numericColumns = value.numericColumns.map(column => decodeSearchChannel(column, budget));
 }
 const channels: unknown = value.numericColumns;
 if (version === 7 || version === 8 ? !Array.isArray(channels) || channels.length !== (version === 8 ? 5 : 4) || !channels.every(column => Array.isArray(column) && column.every(text => typeof text === "string")) || !channels.every(column => column.length === channels[0]!.length) : Object.hasOwn(value, "numericColumns")) return fail();
 if ((version === 7 || version === 8) && Array.isArray(channels)) verifyChannelOwnership(value.shards, channels[0]!.length);
 const dictionary: string[] = value.dictionary;
 const termBytes = dictionary.map(term => utf8.encode(JSON.stringify(term)).byteLength);
 const restored: Record<string, unknown>[] = [];
 const numericBudget = {remaining: SEARCH_RAW_LIMIT};
 const termsState = {next: 0};
 for (const [offset, packed] of value.shards.entries()) {
  const identity = file.logicalShards[offset];
  if (!identity) return fail();
  if (version === 8 && object(packed) && object(packed.entries) && Array.isArray(packed.columnarMaps)) {
   for (const key of packed.columnarMaps) {
    if (typeof key !== 'string' || !Object.hasOwn(packed.entries, key)) return fail();
    const columns: unknown = packed.entries[key];
    if (!Array.isArray(columns)) return fail();
    if (columns.length === 1) {
     const id: unknown = columns[0];
     if (!natural(id) || !Array.isArray(channels) || id >= channels[0]!.length) return fail();
     packed.entries[key] = restoreCompactColumns(channels.map(column => column[id]), numericBudget, termsState, dictionary.length);
    } else {
     if (columns.length !== 3 || !Array.isArray(columns[0])) return fail();
     advanceNativeTerms(columns[0], termsState, dictionary.length);
    }
   }
  }
  if (version === 7 && object(packed) && object(packed.entries) && Array.isArray(packed.columnarMaps)) {
   for (const key of packed.columnarMaps) {
    if (typeof key !== "string" || !Object.hasOwn(packed.entries, key)) return fail();
    const columns: unknown = packed.entries[key];
    if (!Array.isArray(columns)) return fail();
    if (columns.length === 1) {
     const id: unknown = columns[0];
     if (!natural(id) || !Array.isArray(channels) || id >= channels[0]!.length) return fail();
     packed.entries[key] = restoreChannelColumns(channels.map(column => column[id]), numericBudget);
    }
   }
  }
  if (version === 6 && object(packed) && object(packed.entries) && Array.isArray(packed.columnarMaps)) {
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
 if (version === 8 && termsState.next !== dictionary.length) return fail();
 return restored;
}
