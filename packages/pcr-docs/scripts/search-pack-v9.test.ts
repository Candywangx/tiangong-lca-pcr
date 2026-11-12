import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {gzipSync} from 'node:zlib';
import {packSearchShards,unpackSearchFile,readSearchManifest,type SearchManifest,type SearchPhysicalFile} from '../lib/search-pack.ts';
import type {ArithmeticChannel} from '../lib/search-arithmetic.ts';
const commit='a'.repeat(40),language='zh-CN';
const hash=(value:string|Uint8Array)=>'sha256:'+createHash('sha256').update(value).digest('hex');
const wires=Array.from({length:2},(_,i)=>JSON.stringify({entries:{map:[Array.from({length:600},(_,j)=>'term'+j),Array(600).fill(513),Array.from({length:600},(_,j)=>[j%30,i,2])],native:[['__proto__',null]]},columnarMaps:['map'],records:[{id:'0',url:'/same',content:'完整中文😀',extra:{preserve:[i,null]}}]}));
function fixture(input=wires){
 const payload=packSearchShards(input,commit,language,0,9),bytes=Buffer.from(payload);
 const file:SearchPhysicalFile={url:'/generated/search/zh-CN/pack-000.json',bytes:bytes.length,gzipBytes:gzipSync(bytes,{level:9}).length,sha256:hash(bytes),firstLogicalShard:0,logicalShardCount:input.length,records:input.length,logicalShards:input.map(wire=>({wireBytes:Buffer.byteLength(wire),wireSha256:hash(wire),records:1}))};
 const manifest:SearchManifest={schemaVersion:9,sourceCommit:commit,language,logicalShardCount:input.length,files:[file]};
 return {payload,bytes,file,manifest};
}
test('v9 retains exact v4 bytes, duplicate records, original order and native fallback maps',async()=>{
 const native=JSON.stringify({entries:{map:[['late','中文'],[513,513],[['string-id'],[8,-2]]]},columnarMaps:['map'],records:[{id:'0',url:'/same',content:'native'}]});
 const input=[wires[0]!,native,wires[1]!],f=fixture(input);
 assert.deepEqual((await unpackSearchFile(readSearchManifest(f.manifest,language),f.file,f.bytes,hash)).map(value=>JSON.stringify(value)),input);
 const old=packSearchShards(input,commit,language,0,8),v8=JSON.parse(old) as {numericColumns:string[][]};
 assert.equal(v8.numericColumns[0]!.length,2);
 assert.equal(packSearchShards(input,commit,language,0,8),old);
});
type Packed={schemaVersion:number;encoding:string;sourceCommit:string;language:string;dictionary:string[];numericColumns:ArithmeticChannel[];shards:{entries:Record<string,unknown[]>;columnarMaps:string[]}[]};
test('v9 rejects damaged channels and metadata before any logical import',async()=>{
 const mutations:((packed:Packed)=>void)[]=[
  p=>{p.schemaVersion=4;},p=>{p.encoding='wrong';},p=>{p.sourceCommit='b'.repeat(40);},p=>{p.language='en-US';},
  p=>{p.numericColumns.pop();},p=>{p.numericColumns[0]!.lengths.pop();},p=>{p.numericColumns[0]!.lengths[0]=20_000_001;},
  p=>{p.numericColumns[0]!.bits++;},p=>{p.numericColumns[0]!.data='!';},p=>{p.shards[1]!.entries.map=[0];},
  p=>{p.shards[0]!.columnarMaps=['map','map'];},p=>{p.dictionary.pop();},
 ];
 for(const mutate of mutations){const f=fixture(),packed=JSON.parse(f.payload) as Packed;mutate(packed);const bytes=Buffer.from(JSON.stringify(packed));f.file.bytes=bytes.length;f.file.sha256=hash(bytes);await assert.rejects(unpackSearchFile(f.manifest,f.file,bytes,hash),/Invalid/);}
});
test('v9 authenticates complete ownership before channel expansion and logical hashes afterwards',async()=>{
 const f=fixture(),packed=JSON.parse(f.payload) as Packed;
 packed.shards[1]!.entries.map=[0];packed.numericColumns[0]!.data='!';
 const bytes=Buffer.from(JSON.stringify(packed));
 await assert.rejects(unpackSearchFile(f.manifest,{...f.file,bytes:bytes.length,sha256:hash(bytes)},bytes,hash),/Invalid search transport/);
 f.file.logicalShards[0]!.wireSha256='sha256:'+'0'.repeat(64);
 await assert.rejects(unpackSearchFile(f.manifest,f.file,f.bytes,hash),/Invalid search transport/);
});
