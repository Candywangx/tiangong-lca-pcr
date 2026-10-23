import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import {tmpdir} from "node:os";
import {createHash} from "node:crypto";
import {gzipSync} from "node:zlib";
import {packSearchShards,type SearchManifestV5,type SearchPhysicalFile} from "../lib/search-pack.ts";
import {verifySearchAssets} from "./search-assets.ts";
import type {GenerationReport} from "./generation-report.ts";
const sha256=(bytes:string|Uint8Array)=>"sha256:"+createHash("sha256").update(bytes).digest("hex");
function fixture(){
 const out=fs.mkdtempSync(path.join(tmpdir(),"pcr-search-verify-")),source="a".repeat(40),language="en-US",url="/generated/search/en-US/pack-000.json";
 const wire=JSON.stringify({entries:{"1.reg":[0],"1.map":[["wheat",[[0]]]]},sparseMaps:[],scoreMasks:true,postingDeltas:true,records:[{id:"0",type:"page",url:"/wheat",content:"Wheat",description:"",extra:"retained"}]}),payload=packSearchShards([wire],source,language,0);
 const file:SearchPhysicalFile={url,bytes:Buffer.byteLength(payload),gzipBytes:gzipSync(payload,{level:9}).length,sha256:sha256(payload),firstLogicalShard:0,logicalShardCount:1,records:1,logicalShards:[{wireBytes:Buffer.byteLength(wire),wireSha256:sha256(wire),records:1}]};
 const manifest:SearchManifestV5={schemaVersion:5,sourceCommit:source,language,logicalShardCount:1,files:[file]},text=JSON.stringify(manifest);
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
