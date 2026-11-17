import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {gzipSync} from 'node:zlib';
import {packSearchShards,unpackSearchFile,readSearchManifest,type SearchManifest,type SearchPhysicalFile} from '../lib/search-pack.ts';
import {encodeBrotliSearchPack,decodeBrotliSearchPack} from './search-brotli.ts';
const hash=(bytes:string|Uint8Array)=>'sha256:'+createHash('sha256').update(bytes).digest('hex');
const commit='a'.repeat(40),language='zh-CN';
const wires=Array.from({length:3},(_,i)=>JSON.stringify({entries:{map:[Array.from({length:600},(_,j)=>'term'+j),Array(600).fill(513),Array.from({length:600},(_,j)=>[j%30,i,2])],native:[['__proto__',null]]},columnarMaps:['map'],records:[{id:'0',url:'/same',content:'完整中文😀',extra:{preserve:[i,null]}}]}));
function fixture(version:7|8|9=9){
 const inner=packSearchShards(wires,commit,language,0,version),payload=encodeBrotliSearchPack(inner,version),bytes=Buffer.from(payload);
 const file:SearchPhysicalFile={url:'/generated/search/zh-CN/pack-000.json',bytes:bytes.length,gzipBytes:gzipSync(bytes,{level:9}).length,sha256:hash(bytes),firstLogicalShard:0,logicalShardCount:wires.length,records:wires.length,logicalShards:wires.map(wire=>({wireBytes:Buffer.byteLength(wire),wireSha256:hash(wire),records:1}))};
 const manifest:SearchManifest={schemaVersion:10,sourceCommit:commit,language,logicalShardCount:wires.length,files:[file]};return {inner,payload,bytes,file,manifest};
}
for(const version of [7,8,9] as const)test('v10 restores every logical byte through inner v'+version,async()=>{
 const f=fixture(version);assert.equal(encodeBrotliSearchPack(f.inner,version),f.payload);
 assert.deepEqual((await unpackSearchFile(readSearchManifest(f.manifest,language),f.file,f.bytes,hash,decodeBrotliSearchPack)).map(x=>JSON.stringify(x)),wires);
});
test('v10 rejects forged envelopes, expansion bounds, truncation, trailing bytes and stale inner hashes',async()=>{
 const mutations:((p:Record<string,unknown>)=>void)[]=[
 p=>{p.innerVersion=10;},p=>{p.innerBytes=20_000_001;},p=>{p.innerBytes=1;},p=>{p.innerBytes=Number(p.innerBytes)+1;},p=>{p.innerSha256='sha256:'+'0'.repeat(64);},p=>{p.data='!';},p=>{p.data=String(p.data).slice(0,-4);},p=>{p.data=Buffer.concat([Buffer.from(String(p.data),'base64'),Buffer.from([0])]).toString('base64');},p=>{p.sourceCommit='b'.repeat(40);},p=>{p.extra=true;},p=>{p.language='en-US';},p=>{p.firstLogicalShard=1;}
 ];
 for(const mutate of mutations){const f=fixture(),p=JSON.parse(f.payload) as Record<string,unknown>;mutate(p);const bytes=Buffer.from(JSON.stringify(p));await assert.rejects(unpackSearchFile(f.manifest,{...f.file,bytes:bytes.length,sha256:hash(bytes)},bytes,hash,decodeBrotliSearchPack));}
});
test('v10 authenticates physical bytes before decoding and retains logical receipt checks',async()=>{
 const f=fixture();let decoded=false;
 await assert.rejects(unpackSearchFile(f.manifest,{...f.file,sha256:'sha256:'+'0'.repeat(64)},f.bytes,hash,()=>{decoded=true;return new Uint8Array();}));assert.equal(decoded,false);
 await assert.rejects(unpackSearchFile(f.manifest,f.file,f.bytes,hash));
 f.file.logicalShards[1]!.wireSha256='sha256:'+'0'.repeat(64);
 await assert.rejects(unpackSearchFile(f.manifest,f.file,f.bytes,hash,decodeBrotliSearchPack));
});
