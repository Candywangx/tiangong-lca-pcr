/** Lossless inspector transport. Raw PCR downloads and server-side data stay unchanged. */
import {decodeDictionaryRecordData,encodeDictionaryRecordData,measureRecordDataPack,MAX_RESTORED_RECORD_DATA_BYTES,MAX_RECORD_DATA_DICTIONARY_DEPTH} from './record-data-dictionary.ts';
export {measureRecordDataPack,MAX_RESTORED_RECORD_DATA_BYTES} from './record-data-dictionary.ts';
export type Json = null | boolean | number | string | Json[] | { [key: string]: Json };
export type RecordData = { manifest: { [key: string]: Json }; structured: { [key: string]: Json } };
export type RecordDataEntry = readonly [key: string, manifest: RecordData["manifest"], structured: RecordData["structured"]];
export const MAX_RECORDS_PER_PACK = 32;
function object(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function json(value: unknown): value is Json {
  return value === null || typeof value === "string" || typeof value === "boolean"
    || typeof value === "number" && Number.isFinite(value)
    || Array.isArray(value) && value.every(json)
    || object(value) && Object.values(value).every(json);
}
export function parseRecordData(value: unknown): RecordData {
  if (!object(value) || !object(value.manifest) || !json(value.manifest)
    || !object(value.structured) || !json(value.structured)) throw new TypeError("Invalid generated PCR record data.");
  return { manifest: value.manifest, structured: value.structured };
}
function entries(value: unknown): RecordDataEntry[] {
  if (!Array.isArray(value) || value.length === 0 || value.length > MAX_RECORDS_PER_PACK)
    throw new TypeError("Invalid PCR record data pack.");
  const keys = new Set<string>();
  return value.map((entry: unknown) => {
    if (!Array.isArray(entry) || entry.length !== 3 || typeof entry[0] !== "string" || !entry[0] || keys.has(entry[0]))
      throw new TypeError("Invalid PCR record data pack.");
    keys.add(entry[0]);
    const data = parseRecordData({manifest: entry[1], structured: entry[2]});
    return [entry[0], data.manifest, data.structured];
  });
}
export function encodeRecordDataPack(value: readonly RecordDataEntry[]) {
  const records = entries(value), measurement = measureRecordDataPack(records);
  if (measurement.bytes >= MAX_RESTORED_RECORD_DATA_BYTES) throw new TypeError('PCR record data restored byte limit exceeded.');
  const legacy = {schemaVersion: 1 as const, records};
  if (measurement.depth > MAX_RECORD_DATA_DICTIONARY_DEPTH) return legacy;
  const dictionary = encodeDictionaryRecordData(records), utf8 = new TextEncoder();
  if (dictionary.dictionary.length > 1_000_000) return legacy;
  return utf8.encode(JSON.stringify(dictionary)).length < utf8.encode(JSON.stringify(legacy)).length ? dictionary : legacy;
}
/** Legacy single-record payloads require no key. Packed payloads always require an exact key. */
export function decodeRecordData(value: unknown, key?: string): RecordData {
  if (key === undefined) return parseRecordData(value);
  if (!object(value)) throw new TypeError("Unsupported PCR record data pack.");
  if (value.schemaVersion === 2) return parseRecordData(decodeDictionaryRecordData(value,key));
  if (value.schemaVersion !== 1) throw new TypeError("Unsupported PCR record data pack.");
  const entry = entries(value.records).find(entry => entry[0] === key);
  if (!entry) throw new TypeError("PCR record is absent from its data pack.");
  return {manifest: entry[1], structured: entry[2]};
}
