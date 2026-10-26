import fs from "node:fs";
import path from "node:path";
import {gzipSync} from "node:zlib";
import {Index} from "flexsearch";
import {readSearchManifest, unpackSearchFile, SEARCH_RAW_LIMIT, SEARCH_GZIP_LIMIT} from "../lib/search-pack.ts";
import {decodeSearchEntries, SEARCH_SCORE_SLOTS} from "../lib/search-wire.ts";
import {searchTerms} from "../lib/search-terms.ts";
import {isUnknownRecord} from "../../pcr-core/src/types.ts";
import {sha256} from "./markdown.ts";
import type {GenerationReport} from "./generation-report.ts";
/** Verify exported bytes, source binding, accounting and independent logical engine imports. */
export async function verifySearchAssets(out:string, sourceCommit:string, reports:GenerationReport["search"]):Promise<void> {
 for(const report of reports){
  const manifestBytes=fs.readFileSync(path.join(out,`generated/search/${report.language}/manifest.json`));
  const manifest=readSearchManifest(JSON.parse(manifestBytes.toString("utf8")),report.language);
  if(manifest.sourceCommit!==sourceCommit||manifest.logicalShardCount!==report.logicalShardCount||JSON.stringify(manifest.files)!==JSON.stringify(report.shards))throw new Error("Search source/report identity mismatch");
  const expected={url:`/generated/search/${report.language}/manifest.json`,bytes:manifestBytes.length,gzipBytes:gzipSync(manifestBytes,{level:9}).length,records:0,sha256:sha256(manifestBytes)};
  if(JSON.stringify(report.manifest)!==JSON.stringify(expected))throw new Error("Search manifest identity mismatch");
  let raw=manifestBytes.length,gzip=expected.gzipBytes,records=0;
  for(const file of manifest.files){
   const bytes=fs.readFileSync(path.join(out,file.url));
   if(gzipSync(bytes,{level:9}).length!==file.gzipBytes)throw new Error("Search physical gzip identity mismatch");
   const shards=await unpackSearchFile(manifest,file,bytes,sha256);
   for(const shard of shards){
    if(!Array.isArray(shard.records)||!shard.records.every(value=>isUnknownRecord(value)&&typeof value.id==="string"&&value.type==="page"&&typeof value.url==="string"&&typeof value.content==="string"&&typeof value.description==="string"&&(value.breadcrumbs===undefined||Array.isArray(value.breadcrumbs)&&value.breadcrumbs.every((item:unknown)=>typeof item==="string"))))throw new Error("Invalid search records");
    const entries=decodeSearchEntries(shard.entries,shard.sparseMaps,4,shard.scoreMasks,shard.postingDeltas,shard.columnarMaps,shard.joinedTerms,undefined,shard.dictionaryTerms);
    const index=new Index({tokenize:"strict",resolution:SEARCH_SCORE_SLOTS,encode:(value:unknown)=>searchTerms(value,report.language)});
    for(const [key,value]of Object.entries(entries))index.import(key,JSON.stringify(value));
    records+=shard.records.length;
   }
   raw+=bytes.length;gzip+=file.gzipBytes;
  }
  if(raw!==report.rawBytes||gzip!==report.gzipBytes||records!==report.records||raw>SEARCH_RAW_LIMIT||gzip>SEARCH_GZIP_LIMIT)throw new Error("Search physical accounting mismatch or budget exceeded");
 }
}
