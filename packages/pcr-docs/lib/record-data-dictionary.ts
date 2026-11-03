/** Versioned inspector transport only. Canonical records and legacy readers remain separate. */
import type {Json,RecordData,RecordDataEntry} from './record-data.ts';
export const MAX_RESTORED_RECORD_DATA_BYTES = 25_000_000;
export const MAX_RECORD_DATA_DICTIONARY_DEPTH = 128;
const utf8 = new TextEncoder();
const wrapperBytes = JSON.stringify({schemaVersion: 1, records: []}).length;
type Token = null | boolean | string | number | Token[];
function fail(message = 'Invalid PCR record data dictionary pack.'): never { throw new TypeError(message); }
function stringSizer() {
  const cache = new Map<string,number>();
  return (text:string):number => {
    let size = cache.get(text);
    if (size === undefined) { size = utf8.encode(JSON.stringify(text)).length; cache.set(text,size); }
    return size;
  };
}
/** Exact below the limit, saturating at the limit; never constructs an expanded JSON string. */
export function measureRecordDataPack(rows:readonly RecordDataEntry[]) {
  const stringBytes = stringSizer();
  let bytes = wrapperBytes + Math.max(0,rows.length - 1), depth = 0;
  const charge = (size:number) => { bytes = size >= MAX_RESTORED_RECORD_DATA_BYTES - bytes ? MAX_RESTORED_RECORD_DATA_BYTES : bytes + size; };
  const pending:{value:Json;depth:number}[] = [];
  for (const [key,manifest,structured] of rows) {
    charge(4 + stringBytes(key));
    pending.push({value:manifest,depth:0},{value:structured,depth:0});
  }
  while (pending.length && bytes < MAX_RESTORED_RECORD_DATA_BYTES) {
    const item = pending.pop()!; depth = Math.max(depth,item.depth);
    const value = item.value;
    if (typeof value === 'string') charge(stringBytes(value));
    else if (value === null || typeof value === 'boolean' || typeof value === 'number') charge(JSON.stringify(value).length);
    else if (Array.isArray(value)) {
      charge(2 + Math.max(0,value.length - 1));
      for (const child of value) pending.push({value:child,depth:item.depth + 1});
    } else {
      const entries = Object.entries(value); charge(2 + Math.max(0,entries.length - 1));
      for (const [key,child] of entries) { charge(stringBytes(key) + 1); pending.push({value:child,depth:item.depth + 1}); }
    }
  }
  return {bytes,depth};
}
/** Called after the public encoder's legacy, byte and depth preflight. */
export function encodeDictionaryRecordData(rows:readonly RecordDataEntry[]) {
  const counts = new Map<string,number>(), stringBytes = stringSizer();
  function count(text:string) { counts.set(text,(counts.get(text) ?? 0) + 1); }
  function visit(value:Json):void {
    if (typeof value === 'string') count(value);
    else if (Array.isArray(value)) value.forEach(visit);
    else if (value && typeof value === 'object') for (const [key,child] of Object.entries(value)) { count(key); visit(child); }
  }
  for (const [,manifest,structured] of rows) { visit(manifest); visit(structured); }
  let dictionary = [...counts].filter(([,count]) => count > 1).map(([text]) => text);
  // Deterministic bounded pruning; final complete-wire comparison owns the selection.
  for (let round = 0; round < 2; round++) dictionary = dictionary.filter((text,id) => {
    const count = counts.get(text)!, size = stringBytes(text);
    return count * size > size + 1 + count * String(id).length;
  });
  const ids = new Map(dictionary.map((text,id) => [text,id]));
  const string = (text:string) => ids.get(text) ?? text;
  function encode(value:Json):Token {
    if (typeof value === 'string') return string(value);
    if (typeof value === 'number') return [0,value];
    if (value === null || typeof value === 'boolean') return value;
    if (Array.isArray(value)) return [1,...value.map(encode)];
    return [2,...Object.entries(value).flatMap(([key,child]) => [string(key),encode(child)])];
  }
  return {schemaVersion:2 as const,dictionary,records:rows.map(([key,manifest,structured]) => [key,encode(manifest),encode(structured)])};
}
/** Validate/charge every record before constructing even the selected decoded object. */
export function decodeDictionaryRecordData(value:Record<string,unknown>,key:string):RecordData {
  if (JSON.stringify(Object.keys(value).sort()) !== JSON.stringify(['dictionary','records','schemaVersion'])
    || !Array.isArray(value.dictionary) || value.dictionary.length > 1_000_000
    || !value.dictionary.every((text:unknown):text is string => typeof text === 'string')
    || new Set(value.dictionary).size !== value.dictionary.length
    || !Array.isArray(value.records) || !value.records.length || value.records.length > 32) fail();
  const dictionary = value.dictionary, stringBytes = stringSizer(), keys = new Set<string>();
  // Array#every skips holes; for-of must also reject unreferenced missing slots.
  for (const text of dictionary) if (typeof text !== 'string') fail();
  let bytes = wrapperBytes + Math.max(0,value.records.length - 1);
  const charge = (size:number) => {
    if (size >= MAX_RESTORED_RECORD_DATA_BYTES - bytes) fail('PCR record data restored byte limit exceeded.');
    bytes += size;
  };
  function string(token:unknown):string {
    if (typeof token === 'string') return token;
    if (typeof token !== 'number' || !Number.isSafeInteger(token) || token < 0 || Object.is(token,-0) || token >= dictionary.length) fail();
    return dictionary[token]!;
  }
  function inspect(token:unknown,depth:number):void {
    if (depth > MAX_RECORD_DATA_DICTIONARY_DEPTH) fail('PCR record data dictionary nesting depth exceeded.');
    if (typeof token === 'string' || typeof token === 'number') { charge(stringBytes(string(token))); return; }
    if (token === null || typeof token === 'boolean') { charge(JSON.stringify(token).length); return; }
    if (!Array.isArray(token) || !token.length) fail();
    if (token[0] === 0) {
      if (token.length !== 2 || typeof token[1] !== 'number' || !Number.isFinite(token[1])) fail();
      charge(JSON.stringify(token[1]).length); return;
    }
    if (token[0] === 1) {
      charge(2 + Math.max(0,token.length - 2));
      for (let i = 1; i < token.length; i++) inspect(token[i],depth + 1);
      return;
    }
    if (token[0] !== 2 || token.length % 2 !== 1) fail();
    const objectKeys = new Set<string>(), pairs = (token.length - 1) / 2;
    charge(2 + Math.max(0,pairs - 1));
    for (let i = 1; i < token.length; i += 2) {
      const name = string(token[i]); if (objectKeys.has(name)) fail(); objectKeys.add(name);
      charge(stringBytes(name) + 1); inspect(token[i + 1],depth + 1);
    }
  }
  let selected:unknown[]|undefined;
  for (const row of value.records) {
    if (!Array.isArray(row) || row.length !== 3 || typeof row[0] !== 'string' || !row[0] || keys.has(row[0])) fail();
    keys.add(row[0]); charge(4 + stringBytes(row[0]));
    if (!Array.isArray(row[1]) || row[1][0] !== 2 || !Array.isArray(row[2]) || row[2][0] !== 2) fail();
    inspect(row[1],0); inspect(row[2],0);
    if (row[0] === key) selected = row;
  }
  if (!selected) fail('PCR record is absent from its data pack.');
  function restore(token:unknown):Json {
    if (typeof token === 'string' || typeof token === 'number') return string(token);
    if (token === null || typeof token === 'boolean') return token;
    const items = token as unknown[];
    if (items[0] === 0) return items[1] as number;
    if (items[0] === 1) return items.slice(1).map(restore);
    const pairs:[string,Json][] = [];
    for (let i = 1; i < items.length; i += 2) pairs.push([string(items[i]),restore(items[i + 1])]);
    return Object.fromEntries(pairs);
  }
  return {manifest:restore(selected[1]) as RecordData['manifest'],structured:restore(selected[2]) as RecordData['structured']};
}
