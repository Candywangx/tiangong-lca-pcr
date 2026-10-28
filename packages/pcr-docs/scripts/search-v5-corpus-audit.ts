// Run after docs:build; an explicit generated-assets root also permits search-only auditing.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { gzipSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import { Index } from 'flexsearch';
import { isUnknownRecord } from '../../pcr-core/src/types.ts';
import { searchTerms } from '../lib/search-terms.ts';
import { readSearchManifest, unpackSearchFile, packSearchShards } from '../lib/search-pack.ts';
import { encodeSearchEntries, decodeSearchEntries, readSearchTermDictionary, SEARCH_SCORE_SLOTS } from '../lib/search-wire.ts';
import type { SearchWireEntries } from '../lib/search-wire.ts';
type AuditRecord = Record<string, unknown> & {content: string};
type RebuiltIndex = SearchWireEntries & {records: AuditRecord[]};
interface PhysicalPack {bytes: Buffer; data: Record<string, unknown>; rebuilt: (RebuiltIndex | undefined)[]; gzipBytes: number}
interface CorpusReport {
  language: string; logical_shards: number; physical_packs: number; dictionary_terms: number;
  records: number; export_keys: number; v4: {rawBytes: number; gzipBytes: number}; current: {rawBytes: number; gzipBytes: number}; transport_version: number; baseline_v5?: {rawBytes: number; gzipBytes: number};
  gzip_saved_bytes: number; gzip_reduction_percent: number; exact_roundtrip: true;
  matching_query_comparisons: number; native_export_hashes_sha256: string; full_record_hashes_sha256: string;
}
function logicalIndex(pack: Record<string, unknown>, entry: unknown): Record<string, unknown> {
  if (entry === undefined) return pack;
  assert.ok(typeof entry === 'number' && Number.isSafeInteger(entry) && entry >= 0);
  assert.ok(Array.isArray(pack.indexes));
  const data: unknown = pack.indexes[entry];
  assert.ok(isUnknownRecord(data));
  return data;
}
if(process.argv.length>3)throw new Error('Usage: search-v5-corpus-audit.ts [assets-root]');
const exportRoot = process.argv[2] ?? 'packages/pcr-docs/out';
const hash = (bytes: string | Uint8Array) => createHash('sha256').update(bytes).digest('hex');
const report: CorpusReport[] = [];
for (const language of ['en-US', 'zh-CN']) {
  const manifestBytes = fs.readFileSync(path.join(exportRoot,'generated/search',language,'manifest.json'));
  const manifest: unknown = JSON.parse(manifestBytes.toString('utf8'));
  assert.ok(isUnknownRecord(manifest));
  assert.ok(manifest.schemaVersion===5||manifest.schemaVersion===6);
  let baselineV5: {rawBytes:number;gzipBytes:number}|undefined;
  const dictionary = manifest.termDictionary === undefined ? undefined : readSearchTermDictionary(manifest.termDictionary);
  const physical = new Map<string, PhysicalPack>();
  const logical: {data: Record<string, unknown>; descriptor: Record<string, unknown>; pack: PhysicalPack; version: 4 | 5}[] = [];
  let dictionaryTerms = dictionary?.length ?? 0;
  if (Object.hasOwn(manifest, 'files')) {
    assert.ok(!Object.hasOwn(manifest, 'shards') && !Object.hasOwn(manifest, 'termDictionary'));
    const parsed = readSearchManifest(manifest, language);
    const baselineFiles=[];let baselineRaw=0,baselineGzip=0;
    for (const file of parsed.files) {
      const bytes = fs.readFileSync(path.join(exportRoot, file.url));
      const members = await unpackSearchFile(parsed, file, bytes, bytes => 'sha256:' + hash(bytes));
      const data: unknown = JSON.parse(bytes.toString('utf8'));
      assert.ok(isUnknownRecord(data) && Array.isArray(data.dictionary));
      dictionaryTerms += data.dictionary.length;
      assert.equal(packSearchShards(members.map(member=>JSON.stringify(member)),parsed.sourceCommit,language,file.firstLogicalShard,parsed.schemaVersion),bytes.toString("utf8"));
      const baseline=Buffer.from(packSearchShards(members.map(member=>JSON.stringify(member)),parsed.sourceCommit,language,file.firstLogicalShard,5));
      const oldFile={...file,bytes:baseline.length,gzipBytes:gzipSync(baseline,{level:9}).length,sha256:"sha256:"+hash(baseline)};
      assert.deepEqual(await unpackSearchFile({...parsed,schemaVersion:5},oldFile,baseline,bytes=>"sha256:"+hash(bytes)),members);
      baselineFiles.push(oldFile);baselineRaw+=oldFile.bytes;baselineGzip+=oldFile.gzipBytes;
      const pack: PhysicalPack = {bytes, data, rebuilt: [], gzipBytes: gzipSync(bytes, {level:9}).length};
      assert.equal(pack.gzipBytes, file.gzipBytes);
      physical.set(file.url, pack);
      members.forEach((data, index) => logical.push({data, descriptor: {records:file.logicalShards[index]!.records}, pack, version:4}));
    }
    const baselineManifest=JSON.stringify({...parsed,schemaVersion:5,files:baselineFiles});
    baselineV5={rawBytes:baselineRaw+Buffer.byteLength(baselineManifest),gzipBytes:baselineGzip+gzipSync(baselineManifest,{level:9}).length};
  } else {
    assert.equal(manifest.schemaVersion,5);
    assert.ok(Array.isArray(manifest.shards));
    for (const descriptor of manifest.shards) {
      assert.ok(isUnknownRecord(descriptor) && typeof descriptor.url === 'string');
      let pack = physical.get(descriptor.url);
      if (!pack) {
        const bytes = fs.readFileSync(path.join(exportRoot, descriptor.url));
        const data: unknown = JSON.parse(bytes.toString('utf8'));
        assert.ok(isUnknownRecord(data));
        pack = {bytes, data, rebuilt:[], gzipBytes:gzipSync(bytes,{level:9}).length};
        physical.set(descriptor.url, pack);
      }
      assert.equal('sha256:'+hash(pack.bytes),descriptor.sha256);
      assert.equal(pack.bytes.length,descriptor.bytes);
      assert.equal(pack.gzipBytes,descriptor.gzipBytes);
      logical.push({data:logicalIndex(pack.data,descriptor.entry),descriptor,pack,version:5});
    }
  }
  let raw4=0, gzip4=0, raw5=0, gzip5=0, keys=0, records=0, queries=0;
  const exportHashes: string[] = [], recordHashes: string[] = [];
  for (const pack of physical.values()) {raw5+=pack.bytes.length;gzip5+=pack.gzipBytes;}
  for (const {data, descriptor:shard, pack, version} of logical) {
    assert.ok(Array.isArray(data.records) && data.records.every((record: unknown): record is AuditRecord => isUnknownRecord(record) && typeof record.content === 'string'));
    assert.equal(data.records.length,shard.records);
    const native=decodeSearchEntries(data.entries,data.sparseMaps,version,data.scoreMasks,data.postingDeltas,data.columnarMaps,data.joinedTerms,dictionary,data.dictionaryTerms);
    if (shard.nativeSha256) assert.equal('sha256:'+hash(JSON.stringify(native)),shard.nativeSha256);
    if (shard.recordsSha256) assert.equal('sha256:'+hash(JSON.stringify(data.records)),shard.recordsSha256);
    const v4=encodeSearchEntries(native,4);
    const native4=decodeSearchEntries(v4.entries,v4.sparseMaps,4,v4.scoreMasks,v4.postingDeltas,v4.columnarMaps);
    assert.equal(JSON.stringify(native4),JSON.stringify(native));
    const rebuilt={...encodeSearchEntries(native,version,dictionary),records:data.records};
    assert.equal(JSON.stringify(rebuilt),JSON.stringify(data));
    if (version === 5 && shard.entry===undefined) assert.equal(JSON.stringify(rebuilt),pack.bytes.toString('utf8'));
    else if (version === 5) {assert.ok(typeof shard.entry === 'number');assert.equal(pack.rebuilt[shard.entry],undefined);pack.rebuilt[shard.entry]=rebuilt;}
    const baseline=JSON.stringify({...v4,records:data.records});
    raw4+=Buffer.byteLength(baseline);gzip4+=gzipSync(baseline,{level:9}).length;
    keys+=Object.keys(native).length;records+=data.records.length;
    exportHashes.push(hash(JSON.stringify(native)));recordHashes.push(hash(JSON.stringify(data.records)));
    const options={tokenize:'strict' as const,resolution:SEARCH_SCORE_SLOTS,encode:(value: unknown)=>searchTerms(value,language)};
    const a=new Index(options),b=new Index(options);
    for(const key of Object.keys(native)){a.import(key,JSON.stringify(native[key]));b.import(key,JSON.stringify(native4[key]));}
    for(const query of ['wheat','construction','electricity','abalone','改造','水泥','废物',...data.records.slice(0,3).map(record=>record.content)]){
      assert.deepEqual(a.search(query,{limit:30}),b.search(query,{limit:30}));queries++;
    }
  }
  for(const pack of physical.values())if(Array.isArray(pack.data.indexes)){
    assert.equal(pack.rebuilt.length,pack.data.indexes.length);
    assert.equal(JSON.stringify({schemaVersion:5,indexes:pack.rebuilt}),pack.bytes.toString('utf8'));
  }
  // Every manifest is real transport, charged once in full to the language budget.
  raw5+=manifestBytes.length;gzip5+=gzipSync(manifestBytes,{level:9}).length;
  assert.ok(raw5<=20_000_000&&gzip5<=4_000_000,language+' budget');
  report.push({language,logical_shards:logical.length,physical_packs:physical.size,dictionary_terms:dictionaryTerms,records,export_keys:keys,v4:{rawBytes:raw4,gzipBytes:gzip4},current:{rawBytes:raw5,gzipBytes:gzip5},transport_version:manifest.schemaVersion,...(baselineV5?{baseline_v5:baselineV5}:{}),gzip_saved_bytes:gzip4-gzip5,gzip_reduction_percent:(gzip4-gzip5)/gzip4*100,exact_roundtrip:true,matching_query_comparisons:queries,native_export_hashes_sha256:hash(JSON.stringify(exportHashes)),full_record_hashes_sha256:hash(JSON.stringify(recordHashes))});
}
fs.mkdirSync('.reports',{recursive:true});
fs.writeFileSync('.reports/search-v5-corpus.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
