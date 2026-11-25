import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {brotliCompressSync,gzipSync} from 'node:zlib';
import {packSearchShards,unpackSearchFile,readSearchManifest,type SearchManifestV13,type SearchPhysicalFile} from '../lib/search-pack.ts';
import {encodeBrotliSearchPack,decodeBrotliSearchPack} from './search-brotli.ts';
const hash=(bytes:string|Uint8Array)=>'sha256:'+createHash('sha256').update(bytes).digest('hex');
const commit='a'.repeat(40),language='zh-CN';
function wire(records=57,overlap=false):string {
 const delta=(ids:number[])=>ids.map((id,index)=>index?id-ids[index-1]!:id+200);
 const terms=Array.from({length:240},(_,i)=>'完整 term '+i),headers:number[]=[],postings:number[][]=[];
 for(let i=0;i<terms.length;i++) {
  if(i%3===0){headers.push(513);postings.push(delta([0,...Array.from({length:28},(_,j)=>j+29)]));}
  else if(i%3===1){headers.push(1027);postings.push(delta([0,2,4,6,8,10]),delta([overlap?0:1,3,5,7,9,11]));}
  else{headers.push(513);postings.push(delta(Array.from({length:records},(_,j)=>j)));}
 }
 return JSON.stringify({entries:{map:[terms,headers,postings],native:{keep:['__proto__',null]}},columnarMaps:['map'],records:Array.from({length:records},(_,i)=>({id:String(i+200),url:'/record/'+i,content:'完整正文😀 '+i,extra:{keep:[i,null]}}))});
}
function fixture(wires=[wire()]) {
 const inner=packSearchShards(wires,commit,language,0,8,true),payload=encodeBrotliSearchPack(inner,8,true,true,true),bytes=Buffer.from(payload);
 const file:SearchPhysicalFile={url:'/generated/search/zh-CN/pack-000.json',bytes:bytes.length,gzipBytes:gzipSync(bytes,{level:9}).length,sha256:hash(bytes),firstLogicalShard:0,logicalShardCount:wires.length,records:wires.reduce((sum,w)=>sum+(JSON.parse(w) as {records:unknown[]}).records.length,0),logicalShards:wires.map(w=>({wireBytes:Buffer.byteLength(w),wireSha256:hash(w),records:(JSON.parse(w) as {records:unknown[]}).records.length}))};
 const manifest:SearchManifestV13={schemaVersion:13,sourceCommit:commit,language,logicalShardCount:wires.length,files:[file]};
 return {wires,inner,bytes,file,manifest};
}
async function read(f:ReturnType<typeof fixture>,bytes:Uint8Array=f.bytes) {
 return (await unpackSearchFile(f.manifest,{...f.file,bytes:bytes.length,sha256:hash(bytes)},bytes,hash,decodeBrotliSearchPack)).map(member=>JSON.stringify(member));
}
interface Tail {length:number;bits:number;data:string}
interface Coded {numericColumns:[unknown,unknown,unknown,unknown,(string|Tail)[]];shards:{records:{id:string}[]}[]}
function coded(f:ReturnType<typeof fixture>):{envelope:Record<string,unknown>;pack:Coded} {
 const envelope=JSON.parse(f.bytes.toString()) as Record<string,unknown>;
 return {envelope,pack:JSON.parse(Buffer.from(decodeBrotliSearchPack(Buffer.from(String(envelope.data),'base64'),Number(envelope.codedBytes))).toString()) as Coded};
}
function replace(f:ReturnType<typeof fixture>,mutate:(pack:Coded)=>void):Buffer {
 const {envelope,pack}=coded(f);mutate(pack);const bytes=Buffer.from(JSON.stringify(pack));
 return Buffer.from(JSON.stringify({...envelope,codedBytes:bytes.length,data:brotliCompressSync(bytes).toString('base64')}));
}
test('v13 restores exact wires with disjoint score lists, zero-bit tails and 53-bit ranks',async()=>{
 const f=fixture();assert.deepEqual(await read(f),f.wires);
 const {pack}=coded(f),tail=pack.numericColumns[4][0];assert.equal(typeof tail,'object');
 assert.ok(typeof tail!=='string'&&tail!==undefined&&tail.bits>53);
 const full=JSON.parse(wire()) as {entries:{map:[string[],number[],number[][]]}};
 full.entries.map[1]=Array(240).fill(513);full.entries.map[2]=Array.from({length:240},()=>[200,...Array(56).fill(1)]);
 const zero=fixture([JSON.stringify(full)]),zeroTail=coded(zero).pack.numericColumns[4][0];
 assert.ok(typeof zeroTail!=='string'&&zeroTail!==undefined);assert.equal(zeroTail.bits,0);assert.equal(zeroTail.data,'');assert.deepEqual(await read(zero),zero.wires);
});
test('v13 keeps literal fallback for overlapping lists, noncanonical IDs and larger record sets',async()=>{
 const unsorted=JSON.parse(wire()) as {records:unknown[]};unsorted.records.reverse();
 const f=fixture([wire(),wire(57,true),JSON.stringify(unsorted),wire(58)]),tails=coded(f).pack.numericColumns[4];
 assert.equal(typeof tails[0],'object');for(const value of tails.slice(1))assert.equal(typeof value,'string');
 assert.deepEqual(await read(f),f.wires);
});
test('v13 rejects malformed ranks, lengths, padding, ownership and record identities',async()=>{
 const f=fixture();
 const mutations:((pack:Coded)=>void)[]=[
  p=>{(p.numericColumns[4][0] as Tail).length++;},
  p=>{(p.numericColumns[4][0] as Tail).length=20_000_001;},
  p=>{(p.numericColumns[4][0] as Tail).bits=0;},
  p=>{(p.numericColumns[4][0] as Tail).bits=160_000_001;},
  p=>{const t=p.numericColumns[4][0] as Tail;t.data+='AA==';},
  p=>{const t=p.numericColumns[4][0] as Tail;const b=Buffer.from(t.data,'base64');b[b.length-1]=b[b.length-1]!|1;t.data=b.toString('base64');},
  p=>{(p.numericColumns[4][0] as Tail).data='!';},
  p=>{Object.assign(p.numericColumns[4][0] as Tail,{extra:true});},
  p=>{p.numericColumns[4].pop();},
  p=>{p.shards[0]!.records[1]!.id=p.shards[0]!.records[0]!.id;},
  p=>{p.shards[0]!.records[1]!.id='0201';},
 ];
 for(const mutate of mutations)await assert.rejects(read(f,replace(f,mutate)));
 await assert.rejects(unpackSearchFile({...f.manifest,schemaVersion:12},f.file,f.bytes,hash,decodeBrotliSearchPack));
 assert.throws(()=>readSearchManifest({...f.manifest,files:[{...f.file,logicalShardCount:57}]},language));
});
test('v13 fails before decompression on a physical identity mismatch',async()=>{
 const f=fixture();let decoded=false;
 await assert.rejects(unpackSearchFile(f.manifest,{...f.file,sha256:'sha256:'+'0'.repeat(64)},f.bytes,hash,()=>{decoded=true;return new Uint8Array();}));assert.equal(decoded,false);
});

test('v13 preserves varied score partitions and noncontiguous numeric record identities',async()=>{
 let state=1729;
 const random=(max:number)=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state%max;};
 const wires:string[]=[];
 for(const count of [9,17,28,41,57]){
  const ids=Array.from({length:count},(_,i)=>100000+i*3),headers:number[]=[],postings:number[][]=[],terms:string[]=[];
  for(let i=0;i<200;i++){
   const lists=Array.from({length:9},()=>[] as number[]);
   for(const id of ids){const score=random(11);if(score<9)lists[score]!.push(id);}
   let mask=0;
   for(let score=0;score<9;score++)if(lists[score]!.length||random(4)===0){mask+=2**score;const list=lists[score]!;postings.push(list.map((id,j)=>j?id-list[j-1]!:id));}
   terms.push('partition-'+i);headers.push(9*512+mask);
  }
  wires.push(JSON.stringify({entries:{map:[terms,headers,postings]},columnarMaps:['map'],records:ids.map(id=>({id:String(id),url:'/p/'+id,content:'完整数据 '+id}))}));
 }
 const f=fixture(wires);assert.deepEqual(await read(f),wires);
});
