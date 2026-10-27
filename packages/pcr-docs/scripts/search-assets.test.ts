import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import {tmpdir} from "node:os";
import {spawnSync} from "node:child_process";
import {fileURLToPath} from "node:url";
import {encodeSearchEntries,createSearchTermDictionary} from "../lib/search-wire.ts";
import {createHash} from "node:crypto";
import {gzipSync} from "node:zlib";
import {packSearchShards,type SearchManifest,type SearchPhysicalFile} from "../lib/search-pack.ts";
import {verifySearchAssets} from "./search-assets.ts";
import type {GenerationReport} from "./generation-report.ts";
const sha256=(bytes:string|Uint8Array)=>"sha256:"+createHash("sha256").update(bytes).digest("hex");
function fixture(innerFields:Record<string,unknown>={}){
 const out=fs.mkdtempSync(path.join(tmpdir(),"pcr-search-verify-")),source="a".repeat(40),language="en-US",url="/generated/search/en-US/pack-000.json";
 const wire=JSON.stringify({entries:{"1.reg":[0],"1.map":[["wheat",[[0]]]]},sparseMaps:[],scoreMasks:true,postingDeltas:true,records:[{id:"0",type:"page",url:"/wheat",content:"Wheat",description:"",extra:"retained"}],...innerFields}),payload=packSearchShards([wire],source,language,0,6);
 const file:SearchPhysicalFile={url,bytes:Buffer.byteLength(payload),gzipBytes:gzipSync(payload,{level:9}).length,sha256:sha256(payload),firstLogicalShard:0,logicalShardCount:1,records:1,logicalShards:[{wireBytes:Buffer.byteLength(wire),wireSha256:sha256(wire),records:1}]};
 const manifest:SearchManifest={schemaVersion:6,sourceCommit:source,language,logicalShardCount:1,files:[file]},text=JSON.stringify(manifest);
 const asset={url:"/generated/search/en-US/manifest.json",bytes:Buffer.byteLength(text),gzipBytes:gzipSync(text,{level:9}).length,records:0,sha256:sha256(text)};
 const report:GenerationReport["search"][number]={language,records:1,rawBytes:file.bytes+asset.bytes,gzipBytes:file.gzipBytes+asset.gzipBytes,shards:[file],manifest:asset,logicalShardCount:1};
 fs.mkdirSync(path.join(out,"generated/search/en-US"),{recursive:true});fs.writeFileSync(path.join(out,url),payload);fs.writeFileSync(path.join(out,asset.url),text);return{out,source,file,report,payload};
}
test("export verification counts each physical asset and manifest once and imports the restored index",async()=>{const f=fixture();try{await verifySearchAssets(f.out,f.source,[f.report]);}finally{fs.rmSync(f.out,{recursive:true,force:true});}});
for(const scenario of ["source","raw-total","gzip-total","physical-bytes","missing-asset","report-manifest"])test("export verification rejects "+scenario,async()=>{
 const f=fixture();try{
  if(scenario==="source")f.source="b".repeat(40);
  if(scenario==="raw-total")f.report.rawBytes+=1;
  if(scenario==="gzip-total")f.report.gzipBytes+=1;
  if(scenario==="physical-bytes")fs.writeFileSync(path.join(f.out,f.file.url),f.payload+" ");
  if(scenario==="missing-asset")fs.unlinkSync(path.join(f.out,f.file.url));
  if(scenario==="report-manifest")f.report.manifest!.sha256="sha256:"+"0".repeat(64);
  await assert.rejects(verifySearchAssets(f.out,f.source,[f.report]));
 }finally{fs.rmSync(f.out,{recursive:true,force:true});}
});

for(const format of ["files-v5","files-v6","shards"] as const)test("corpus audit authenticates "+format+" exports and rejects corrupt bytes",()=>{
 const root=fs.mkdtempSync(path.join(tmpdir(),"pcr-search-audit-"));
 try{
  const output=path.join(root,"packages/pcr-docs/out"),sourceCommit="a".repeat(40);
  const native={"1.reg":[0],"1.map":[["wheat",[[0]]]]};
  const records=[{id:"0",type:"page",url:"/wheat",content:"Wheat",description:"Complete context"}];
  for(const language of ["en-US","zh-CN"]){
   const directory=path.join(output,"generated/search",language),url=`/generated/search/${language}/pack-000.json`;
   fs.mkdirSync(directory,{recursive:true});
   let payload:string,manifest:unknown;
   if(format!=="shards"){
    const version=format==="files-v6"?6:5;
    const wire=JSON.stringify({...encodeSearchEntries(native,4),records});
    payload=packSearchShards([wire],sourceCommit,language,0,version);
    const file:SearchPhysicalFile={url,bytes:Buffer.byteLength(payload),gzipBytes:gzipSync(payload,{level:9}).length,sha256:sha256(payload),firstLogicalShard:0,logicalShardCount:1,records:1,logicalShards:[{wireBytes:Buffer.byteLength(wire),wireSha256:sha256(wire),records:1}]};
    manifest={schemaVersion:version,sourceCommit,language,logicalShardCount:1,files:[file]};
   }else{
    const termDictionary=createSearchTermDictionary([native]);
    payload=JSON.stringify({schemaVersion:5,indexes:[{...encodeSearchEntries(native,5,termDictionary),records}]});
    manifest={schemaVersion:5,language,termDictionary,shards:[{url,entry:0,records:1,bytes:Buffer.byteLength(payload),gzipBytes:gzipSync(payload,{level:9}).length,sha256:sha256(payload)}]};
   }
   fs.writeFileSync(path.join(directory,"pack-000.json"),payload);fs.writeFileSync(path.join(directory,"manifest.json"),JSON.stringify(manifest));
  }
  const audit=fileURLToPath(new URL("./search-v5-corpus-audit.ts",import.meta.url));
  const run=()=>spawnSync(process.execPath,[audit],{cwd:root,encoding:"utf8",timeout:30_000});
  const success=run();assert.equal(success.status,0,success.stdout+success.stderr);
  const explicitRoot=spawnSync(process.execPath,[audit,output],{cwd:root,encoding:"utf8",timeout:30_000});
  assert.equal(explicitRoot.status,0,explicitRoot.stdout+explicitRoot.stderr);
  const report:unknown=JSON.parse(fs.readFileSync(path.join(root,".reports/search-v5-corpus.json"),"utf8"));
  assert.ok(Array.isArray(report)&&report.length===2);
  fs.appendFileSync(path.join(output,"generated/search/en-US/pack-000.json")," ");
  const failure=run();assert.notEqual(failure.status,0);assert.match(failure.stderr,/Invalid search transport|AssertionError/);
 }finally{fs.rmSync(root,{recursive:true,force:true});}
});

for(const field of ["shards","termDictionary"])test("export verification rejects mixed physical manifest "+field+" even with matching byte evidence",async()=>{
 const f=fixture();try{
  const filename=path.join(f.out,"generated/search/en-US/manifest.json");
  const manifest:unknown=JSON.parse(fs.readFileSync(filename,"utf8"));
  assert.ok(manifest&&typeof manifest==="object"&&!Array.isArray(manifest));
  const text=JSON.stringify({...manifest,[field]:[]});
  fs.writeFileSync(filename,text);
  const asset={url:"/generated/search/en-US/manifest.json",bytes:Buffer.byteLength(text),gzipBytes:gzipSync(text,{level:9}).length,records:0,sha256:sha256(text)};
  f.report.manifest=asset;f.report.rawBytes=f.file.bytes+asset.bytes;f.report.gzipBytes=f.file.gzipBytes+asset.gzipBytes;
  await assert.rejects(verifySearchAssets(f.out,f.source,[f.report]),/Invalid search transport/);
 }finally{fs.rmSync(f.out,{recursive:true,force:true});}
});

for(const field of ["joinedTerms","dictionaryTerms"])test("export verification rejects inner v4 "+field+" despite authenticated recomputed receipts",async()=>{
 const f=fixture({[field]:true});try{
  await assert.rejects(verifySearchAssets(f.out,f.source,[f.report]),/Invalid serialized search data/);
 }finally{fs.rmSync(f.out,{recursive:true,force:true});}
});
