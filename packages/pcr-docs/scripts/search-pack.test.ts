import test from "node:test";
import assert from "node:assert/strict";
import {createHash} from "node:crypto";
import {gzipSync} from "node:zlib";
import {packSearchShards,unpackSearchFile,readSearchManifest,searchUtf8,type SearchManifest,type SearchPhysicalFile} from "../lib/search-pack.ts";
const digest=(bytes:Uint8Array)=>"sha256:"+createHash("sha256").update(bytes).digest("hex");
const commit="a".repeat(40),language="zh-CN";
function wire(terms:string[]){return JSON.stringify({entries:{"1.map":[terms,[1,1],[[0],[0]]],native:[["__proto__",null]]},sparseMaps:["1.map"],scoreMasks:true,postingDeltas:true,columnarMaps:["1.map"],records:[{id:"0",type:"page",url:"/same",content:"标题",description:"",breadcrumbs:[],extra:{keep:true}}]});}
function fixture(wires:string[],version:5|6|7=5){
 const bytes=searchUtf8(packSearchShards(wires,commit,language,0,version));
 const file:SearchPhysicalFile={url:"/generated/search/zh-CN/pack-000.json",bytes:bytes.length,gzipBytes:gzipSync(bytes,{level:9}).length,sha256:digest(bytes),firstLogicalShard:0,logicalShardCount:wires.length,records:wires.length,logicalShards:wires.map(wire=>({wireBytes:searchUtf8(wire).length,wireSha256:digest(searchUtf8(wire)),records:1}))};
 const manifest:SearchManifest={schemaVersion:version,sourceCommit:commit,language,logicalShardCount:wires.length,files:[file]};return{bytes,file,manifest};
}
test("transport restores exact wires, key order, native fallback and complete duplicate records at 16 members",async()=>{
 const wires=Array.from({length:16},(_,i)=>wire(i%2?["constructor","中文😀"]:["中文😀","__proto__"]));const{bytes,file,manifest}=fixture(wires);
 assert.deepEqual((await unpackSearchFile(readSearchManifest(manifest,language),file,bytes,digest)).map(value=>JSON.stringify(value)),wires);
 assert.throws(()=>packSearchShards([...wires,wires[0]!],commit,language,0),/Invalid search transport/);
});
test("manifest rejects holes, reused assets, wrong source/count and excessive declared expansion",()=>{
 for(const mutate of [(m:SearchManifest)=>{m.files[0]!.firstLogicalShard=1;},(m:SearchManifest)=>{m.files.push(m.files[0]!);},(m:SearchManifest)=>{m.sourceCommit="bad";},(m:SearchManifest)=>{m.logicalShardCount=2;},(m:SearchManifest)=>{m.files[0]!.logicalShards[0]!.wireBytes=20_000_001;}]){const{manifest}=fixture([wire(["a","b"])]);mutate(manifest);assert.throws(()=>readSearchManifest(manifest,language),/Invalid search transport/);}
});
test("actual physical identity, late logical identity, bounds and dictionary deltas fail closed",async()=>{
 for(const mutate of [(v:Record<string,unknown>)=>{v.sourceCommit="b".repeat(40);},(v:Record<string,unknown>)=>{v.dictionary=["a","a"];},(v:Record<string,unknown>)=>{const shards=v.shards as {entries:Record<string,unknown[][]>}[];shards[1]!.entries['1.map']![0]=[1e30,0];},(v:Record<string,unknown>)=>{const shards=v.shards as {records:unknown[]}[];shards[1]!.records=[];}]){
 const{manifest,file,bytes}=fixture([wire(["a","b"]),wire(["b","a"])]);const v=JSON.parse(new TextDecoder().decode(bytes)) as Record<string,unknown>;mutate(v);const changed=searchUtf8(JSON.stringify(v));file.bytes=changed.length;file.sha256=digest(changed);await assert.rejects(unpackSearchFile(manifest,file,changed,digest),/Invalid search transport/);
 }
 const{manifest,file,bytes}=fixture([wire(["a","b"])]);await assert.rejects(unpackSearchFile(manifest,file,bytes.slice(1),digest));file.logicalShards[0]!.wireSha256="sha256:"+"0".repeat(64);await assert.rejects(unpackSearchFile(manifest,file,bytes,digest));
});

for(const version of [5,6] as const)test("v"+version+" restores numeric columns, signed deltas and native string/large-ID fallback",async()=>{
 const wires=Array.from({length:16},(_,i)=>JSON.stringify({entries:{
  map:[Array.from({length:100},(_,j)=>"term "+((j+i)%100)),Array(100).fill(513),Array.from({length:100},()=>[12345,-1234,123456,0])],
  strings:[["native"],[513],[["string-id"]]],large:[["large"],[513],[[Number.MAX_SAFE_INTEGER]]]},columnarMaps:["map","strings","large"],records:[{content:"Complete 中文😀",extra:{intact:true}}]}));
 const f=fixture(wires,version),packed=JSON.parse(new TextDecoder().decode(f.bytes)) as {shards:{entries:Record<string,unknown[]>}[]};
 assert.equal(typeof packed.shards[0]!.entries.map![0],version===6?"string":"object");
 assert.ok(Array.isArray(packed.shards[0]!.entries.strings![0]));assert.ok(Array.isArray(packed.shards[0]!.entries.large![0]));
 assert.deepEqual((await unpackSearchFile(readSearchManifest(f.manifest,language),f.file,f.bytes,digest)).map(value=>JSON.stringify(value)),wires);
});
for(const bad of ["","!","gA","gggggggA","///////","CA","BAA","BB!","BBgA","BBggggggC","BBgggggggA"])
 test("v6 rejects malformed, oversized, noncanonical or trailing VLQ "+JSON.stringify(bad),async()=>{
  const f=fixture([wire(["a","b"])],6),packed=JSON.parse(new TextDecoder().decode(f.bytes)) as {shards:{entries:Record<string,unknown[]>}[]};
  const columns=packed.shards[0]!.entries['1.map']!;assert.equal(typeof columns[0],"string");columns[0]=bad;
  const bytes=searchUtf8(JSON.stringify(packed));f.file.bytes=bytes.length;f.file.sha256=digest(bytes);
  await assert.rejects(unpackSearchFile(f.manifest,f.file,bytes,digest),/Invalid search transport/);
 });
test("v6 rejects mixed column types and mismatched envelope versions with authenticated physical bytes",async()=>{
 for(const mutate of [(v:Record<string,unknown>)=>{v.schemaVersion=1;},(v:Record<string,unknown>)=>{v.encoding="v4-columnar-term-dictionary-delta";},(v:Record<string,unknown>)=>{const shards=v.shards as {entries:Record<string,unknown[]>}[];shards[0]!.entries['1.map']=["AA",[],"AA"];}]){
  const f=fixture([wire(["a","b"])],6),packed=JSON.parse(new TextDecoder().decode(f.bytes)) as Record<string,unknown>;mutate(packed);
  const bytes=searchUtf8(JSON.stringify(packed));f.file.bytes=bytes.length;f.file.sha256=digest(bytes);await assert.rejects(unpackSearchFile(f.manifest,f.file,bytes,digest));
 }
});

for(const column of [1,2])for(const bad of ["","!","gA","gggggggA","///////","CA","BAA"])
 test("v6 validates numeric column "+column+" framing "+JSON.stringify(bad),async()=>{
  const f=fixture([wire(["a","b"])],6),packed=JSON.parse(new TextDecoder().decode(f.bytes)) as {shards:{entries:Record<string,unknown[]>}[]};
  packed.shards[0]!.entries['1.map']![column]=bad;
  const bytes=searchUtf8(JSON.stringify(packed));f.file.bytes=bytes.length;f.file.sha256=digest(bytes);
  await assert.rejects(unpackSearchFile(f.manifest,f.file,bytes,digest),/Invalid search transport/);
 });
test("v6 preserves signed integer boundary values and tiny-column native fallback",async()=>{
 const source=JSON.stringify({entries:{map:[["a","b"],[513,513],[[1073741823,-1073741823],[0]]],tiny:[[],[],[]]},columnarMaps:["map","tiny"],records:[{}]});
 const f=fixture([source],6),packed=JSON.parse(new TextDecoder().decode(f.bytes)) as {shards:{entries:Record<string,unknown[]>}[]};
 assert.equal(typeof packed.shards[0]!.entries.map![0],"string");assert.ok(Array.isArray(packed.shards[0]!.entries.tiny![0]));
 assert.equal(JSON.stringify((await unpackSearchFile(f.manifest,f.file,f.bytes,digest))[0]),source);
});

function channelWire() {
 return JSON.stringify({entries:{map:[Array.from({length:90},(_,i)=>"word "+i),Array(90).fill(1027),Array.from({length:180},(_,i)=>i%5?[(i%9)*100,2,-1]:[])]},columnarMaps:["map"],records:[{content:"Complete 中文😀",id:"0",url:"/intact",extra:{keep:[null,{}]}}]});
}
test("v7 restores exact logical bytes across channels, score-slot predictors and empty lists",async()=>{
 const wires=Array.from({length:16},()=>channelWire()),f=fixture(wires,7);
 const packed=JSON.parse(new TextDecoder().decode(f.bytes)) as {numericColumns:unknown[][];shards:{entries:{map:unknown[]}}[]};
 assert.equal(packed.numericColumns.length,4);assert.equal(packed.numericColumns[0]!.length,16);
 assert.deepEqual(packed.shards.map(shard=>shard.entries.map),Array.from({length:16},(_,i)=>[i]));
 assert.deepEqual((await unpackSearchFile(readSearchManifest(f.manifest,language),f.file,f.bytes,digest)).map(value=>JSON.stringify(value)),wires);
});
test("v7 keeps unsupported string IDs, large deltas, malformed header shapes and tiny columns native",async()=>{
 for(const source of [
  JSON.stringify({entries:{map:[["a"],[513],[["id"]]]},columnarMaps:["map"],records:[{}]}),
  JSON.stringify({entries:{map:[["a","b"],[513,513],[[1073741823],[-1073741823]]]},columnarMaps:["map"],records:[{}]}),
  JSON.stringify({entries:{map:[["a"],[512],[[1]]]},columnarMaps:["map"],records:[{}]}),
  JSON.stringify({entries:{map:[[],[],[]]},columnarMaps:["map"],records:[{}]})
 ]){const f=fixture([source],7);
  const packed=JSON.parse(new TextDecoder().decode(f.bytes)) as {numericColumns:unknown[][];shards:{entries:{map:unknown[]}}[]};
  assert.deepEqual(packed.numericColumns,[[],[],[],[]]);assert.equal(packed.shards[0]!.entries.map.length,3);
  assert.equal(JSON.stringify((await unpackSearchFile(f.manifest,f.file,f.bytes,digest))[0]),source);
 }
});
for(const column of [0,1,2,3])for(const bad of ["","!","gA","gggggggA","///////","CA","BAA"])
 test("v7 validates channel "+column+" framing "+JSON.stringify(bad),async()=>{
  const f=fixture([channelWire()],7),packed=JSON.parse(new TextDecoder().decode(f.bytes)) as {numericColumns:string[][]};
  packed.numericColumns[column]![0]=bad;
  const bytes=searchUtf8(JSON.stringify(packed));f.file.bytes=bytes.length;f.file.sha256=digest(bytes);
  let digests=0;await assert.rejects(unpackSearchFile(f.manifest,f.file,bytes,value=>{digests++;return digest(value);}),/Invalid search transport/);
  assert.equal(digests,1,"malformed channel must fail before the logical SHA check");
 });
test("v7 rejects duplicate, missing, foreign and mixed channel references before import",async()=>{
 for(const mutate of [
  (v:Record<string,unknown>)=>{const shards=v.shards as {entries:{map:unknown[]}}[];shards[1]!.entries.map=[0];},
  (v:Record<string,unknown>)=>{const shards=v.shards as {entries:{map:unknown[]}}[];shards[1]!.entries.map=[2];},
  (v:Record<string,unknown>)=>{const shards=v.shards as {entries:{map:unknown[]}}[];shards[1]!.entries.map=[0.5];},
  (v:Record<string,unknown>)=>{(v.numericColumns as unknown[][])[3]!.pop();},
  (v:Record<string,unknown>)=>{(v.numericColumns as unknown[][]).forEach(column=>column.push(column[0]));},
  (v:Record<string,unknown>)=>{v.schemaVersion=2;},
  (v:Record<string,unknown>)=>{v.encoding="v4-columnar-term-dictionary-vlq";}
 ]){const f=fixture([channelWire(),channelWire()],7),packed=JSON.parse(new TextDecoder().decode(f.bytes)) as Record<string,unknown>;mutate(packed);const bytes=searchUtf8(JSON.stringify(packed));f.file.bytes=bytes.length;f.file.sha256=digest(bytes);let digests=0;await assert.rejects(unpackSearchFile(f.manifest,f.file,bytes,value=>{digests++;return digest(value);}),/Invalid search transport/);assert.equal(digests,1);}
});

test("v7 rejects impossible lengths, masks and predictor overflow before logical digests",async()=>{
 const digit="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
 const unsigned=(n:number)=>{let text="";do{const d=n%32;n=Math.floor(n/32);text+=digit[d+(n?32:0)];}while(n);return text;};
 const sequence=(values:number[],signed=false)=>unsigned(values.length)+values.map(n=>unsigned(signed?(n<0?-n*2-1:n*2):n)).join("");
 for(const mutate of [
  (channels:string[][])=>{channels[2]![0]=unsigned(100_000_000);},
  (channels:string[][])=>{channels[2]![0]=sequence(Array(180).fill(100_000_000));},
  (channels:string[][])=>{channels[1]![0]=sequence(Array(90).fill(1028));},
  (channels:string[][])=>{channels[1]![0]=sequence(Array(90).fill(513));},
  (channels:string[][])=>{channels[3]![0]=sequence(Array(432).fill(1073741823),true);}
 ]){
  const f=fixture([channelWire()],7),packed=JSON.parse(new TextDecoder().decode(f.bytes)) as {numericColumns:string[][]};mutate(packed.numericColumns);
  const bytes=searchUtf8(JSON.stringify(packed));f.file.bytes=bytes.length;f.file.sha256=digest(bytes);let digests=0;
  await assert.rejects(unpackSearchFile(f.manifest,f.file,bytes,value=>{digests++;return digest(value);}),/Invalid search transport/);
  assert.equal(digests,1,"reject before logical hash comparison");
 }
});
