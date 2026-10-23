import test from "node:test";
import assert from "node:assert/strict";
import {createHash} from "node:crypto";
import {gzipSync} from "node:zlib";
import {packSearchShards,unpackSearchFile,readSearchManifest,searchUtf8,type SearchManifestV5,type SearchPhysicalFile} from "../lib/search-pack.ts";
const digest=(bytes:Uint8Array)=>"sha256:"+createHash("sha256").update(bytes).digest("hex");
const commit="a".repeat(40),language="zh-CN";
function wire(terms:string[]){return JSON.stringify({entries:{"1.map":[terms,[1,1],[[0],[0]]],native:[["__proto__",null]]},sparseMaps:["1.map"],scoreMasks:true,postingDeltas:true,columnarMaps:["1.map"],records:[{id:"0",type:"page",url:"/same",content:"标题",description:"",breadcrumbs:[],extra:{keep:true}}]});}
function fixture(wires:string[]){
 const bytes=searchUtf8(packSearchShards(wires,commit,language,0));
 const file:SearchPhysicalFile={url:"/generated/search/zh-CN/pack-000.json",bytes:bytes.length,gzipBytes:gzipSync(bytes,{level:9}).length,sha256:digest(bytes),firstLogicalShard:0,logicalShardCount:wires.length,records:wires.length,logicalShards:wires.map(wire=>({wireBytes:searchUtf8(wire).length,wireSha256:digest(searchUtf8(wire)),records:1}))};
 const manifest:SearchManifestV5={schemaVersion:5,sourceCommit:commit,language,logicalShardCount:wires.length,files:[file]};return{bytes,file,manifest};
}
test("transport restores exact wires, key order, native fallback and complete duplicate records at 16 members",async()=>{
 const wires=Array.from({length:16},(_,i)=>wire(i%2?["constructor","中文😀"]:["中文😀","__proto__"]));const{bytes,file,manifest}=fixture(wires);
 assert.deepEqual((await unpackSearchFile(readSearchManifest(manifest,language),file,bytes,digest)).map(value=>JSON.stringify(value)),wires);
 assert.throws(()=>packSearchShards([...wires,wires[0]!],commit,language,0),/Invalid search transport/);
});
test("manifest rejects holes, reused assets, wrong source/count and excessive declared expansion",()=>{
 for(const mutate of [(m:SearchManifestV5)=>{m.files[0]!.firstLogicalShard=1;},(m:SearchManifestV5)=>{m.files.push(m.files[0]!);},(m:SearchManifestV5)=>{m.sourceCommit="bad";},(m:SearchManifestV5)=>{m.logicalShardCount=2;},(m:SearchManifestV5)=>{m.files[0]!.logicalShards[0]!.wireBytes=20_000_001;}]){const{manifest}=fixture([wire(["a","b"])]);mutate(manifest);assert.throws(()=>readSearchManifest(manifest,language),/Invalid search transport/);}
});
test("actual physical identity, late logical identity, bounds and dictionary deltas fail closed",async()=>{
 for(const mutate of [(v:Record<string,unknown>)=>{v.sourceCommit="b".repeat(40);},(v:Record<string,unknown>)=>{v.dictionary=["a","a"];},(v:Record<string,unknown>)=>{const shards=v.shards as {entries:Record<string,unknown[][]>}[];shards[1]!.entries['1.map']![0]=[1e30,0];},(v:Record<string,unknown>)=>{const shards=v.shards as {records:unknown[]}[];shards[1]!.records=[];}]){
 const{manifest,file,bytes}=fixture([wire(["a","b"]),wire(["b","a"])]);const v=JSON.parse(new TextDecoder().decode(bytes)) as Record<string,unknown>;mutate(v);const changed=searchUtf8(JSON.stringify(v));file.bytes=changed.length;file.sha256=digest(changed);await assert.rejects(unpackSearchFile(manifest,file,changed,digest),/Invalid search transport/);
 }
 const{manifest,file,bytes}=fixture([wire(["a","b"])]);await assert.rejects(unpackSearchFile(manifest,file,bytes.slice(1),digest));file.logicalShards[0]!.wireSha256="sha256:"+"0".repeat(64);await assert.rejects(unpackSearchFile(manifest,file,bytes,digest));
});
