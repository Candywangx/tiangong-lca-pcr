/** Compare transports over exact captured logical wires, including over-budget baseline diagnostics. */
import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import {createHash} from "node:crypto";
import {gzipSync} from "node:zlib";
import {packSearchShards,unpackSearchFile,readSearchManifest,SEARCH_RAW_LIMIT,SEARCH_GZIP_LIMIT,type SearchManifest,type SearchPhysicalFile} from "../lib/search-pack.ts";
import {decodeSearchEntries} from "../lib/search-wire.ts";
import {isUnknownRecord} from "../../pcr-core/src/types.ts";
import {escapeSearchDictionary} from "./search-layout.ts";
const [input,output]=process.argv.slice(2);
if(!input||!output||process.argv.length!==4)throw new Error("Usage: search-capacity-audit.ts <search-root> <separate-output-root>");
const source=fs.realpathSync(input),destination=path.resolve(output);
if(destination===source||destination.startsWith(source+path.sep)||fs.existsSync(destination))throw new Error("Audit output must be a new, separate directory.");
const hash=(bytes:string|Uint8Array)=>"sha256:"+createHash("sha256").update(bytes).digest("hex");
const gzip=(bytes:string|Uint8Array)=>gzipSync(bytes,{level:9}).length;
const reports=[];
for(const language of ["en-US","zh-CN"]){
 const manifestBytes=fs.readFileSync(path.join(source,language,"manifest.json"));
 const raw:unknown=JSON.parse(new TextDecoder("utf-8",{fatal:true}).decode(manifestBytes));
 assert.ok(isUnknownRecord(raw)&&(raw.schemaVersion===5||raw.schemaVersion===6||raw.schemaVersion===7||raw.schemaVersion===8));
 assert.equal(raw.language,language);assert.ok(typeof raw.sourceCommit==="string"&&/^[0-9a-f]{40}$/.test(raw.sourceCommit));
 assert.ok(!Object.hasOwn(raw,"shards")&&!Object.hasOwn(raw,"termDictionary")&&Array.isArray(raw.files));
 // Baseline budgets intentionally may fail. Each actual physical/logical identity is still verified below.
 const manifest=raw as unknown as SearchManifest;
 let next=0,records=0,baselineRaw=manifestBytes.length,baselineGzip=gzip(manifestBytes),candidateRaw=0,candidateGzip=0;
 const files:SearchPhysicalFile[]=[],wires:string[]=[],nativeHashes:string[]=[],recordHashes:string[]=[],physical=[];
 const urls=new Set<string>();
 for(const file of manifest.files){
  assert.equal(file.firstLogicalShard,next);assert.ok(file.logicalShardCount>0&&file.logicalShardCount<=16&&file.logicalShards.length===file.logicalShardCount);
  assert.ok(new RegExp(`^/generated/search/${language}/[A-Za-z0-9-]+\\.json$`).test(file.url)&&!urls.has(file.url));urls.add(file.url);
  const original=fs.readFileSync(path.join(source,language,path.basename(file.url)));
  assert.equal(file.gzipBytes,gzip(original));
  const restored=await unpackSearchFile(manifest,file,original,hash),logical=restored.map(value=>JSON.stringify(value));
  for(const shard of restored){
   const native=decodeSearchEntries(shard.entries,shard.sparseMaps,4,shard.scoreMasks,shard.postingDeltas,shard.columnarMaps,shard.joinedTerms,undefined,shard.dictionaryTerms);
   nativeHashes.push(hash(JSON.stringify(native)));recordHashes.push(hash(JSON.stringify(shard.records)));
  }
  const canonical=packSearchShards(logical,manifest.sourceCommit,language,next,8),escaped=escapeSearchDictionary(canonical);
  const candidate=Buffer.from(Buffer.byteLength(escaped)<=SEARCH_RAW_LIMIT&&gzip(escaped)<gzip(canonical)?escaped:canonical);
  const descriptor={...file,bytes:candidate.length,gzipBytes:gzip(candidate),sha256:hash(candidate)};
  assert.deepEqual((await unpackSearchFile({...manifest,schemaVersion:8},descriptor,candidate,hash)).map(value=>JSON.stringify(value)),logical);
  const directory=path.join(destination,"generated/search",language);fs.mkdirSync(directory,{recursive:true});
  fs.writeFileSync(path.join(directory,path.basename(file.url)),candidate);
  physical.push({url:file.url,baseline:{bytes:original.length,gzipBytes:file.gzipBytes,sha256:hash(original)},candidate:{bytes:candidate.length,gzipBytes:descriptor.gzipBytes,sha256:descriptor.sha256},logicalShards:file.logicalShards});
  wires.push(...logical);files.push(descriptor);next+=file.logicalShardCount;records+=file.records;
  baselineRaw+=original.length;baselineGzip+=file.gzipBytes;candidateRaw+=candidate.length;candidateGzip+=descriptor.gzipBytes;
 }
 assert.equal(next,manifest.logicalShardCount);
 const candidateManifest={...manifest,schemaVersion:8,files};
 const text=JSON.stringify(candidateManifest);candidateRaw+=Buffer.byteLength(text);candidateGzip+=gzip(text);
 const withinBudget=candidateRaw<=SEARCH_RAW_LIMIT&&candidateGzip<=SEARCH_GZIP_LIMIT;
 if(withinBudget)readSearchManifest(candidateManifest,language);
 fs.writeFileSync(path.join(destination,"generated/search",language,"manifest.json"),text);
 reports.push({language,sourceCommit:manifest.sourceCommit,logicalShards:next,physicalFiles:files.length,records,baseline:{schemaVersion:manifest.schemaVersion,rawBytes:baselineRaw,gzipBytes:baselineGzip,manifestSha256:hash(manifestBytes),withinBudget:baselineRaw<=SEARCH_RAW_LIMIT&&baselineGzip<=SEARCH_GZIP_LIMIT},candidate:{schemaVersion:8,rawBytes:candidateRaw,gzipBytes:candidateGzip,manifestSha256:hash(text),withinBudget},limits:{rawBytes:SEARCH_RAW_LIMIT,gzipBytes:SEARCH_GZIP_LIMIT},exactLogicalWireEquality:true,logicalWireHashesSha256:hash(JSON.stringify(wires.map(hash))),nativeExportHashesSha256:hash(JSON.stringify(nativeHashes)),completeRecordHashesSha256:hash(JSON.stringify(recordHashes)),physical});
}
fs.writeFileSync(path.join(destination,"comparison.json"),JSON.stringify({purpose:"Captured-wire lossless transport comparison; not full product qualification",reports},null,2)+"\n");
console.log(JSON.stringify(reports.map(({physical,...report})=>report),null,2));
if(reports.some(report=>!report.candidate.withinBudget))process.exitCode=1;
