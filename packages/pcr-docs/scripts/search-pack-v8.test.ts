import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {gzipSync} from 'node:zlib';
import {packSearchShards,unpackSearchFile,readSearchManifest,type SearchManifest,type SearchPhysicalFile} from '../lib/search-pack.ts';
const commit='a'.repeat(40),language='zh-CN';
const hash=(value:string|Uint8Array)=>'sha256:'+createHash('sha256').update(value).digest('hex');
function wires():string[]{
  return Array.from({length:16},(_,i)=>{
    const terms=Array.from({length:300},(_,j)=>['shared-'+j,`new-${i}-${j}`]).flat();
    return JSON.stringify({entries:{map:[terms,terms.map(()=>1027),terms.flatMap((_,j)=>[[j%30,1,2],[20-j%20,0]])],native:[['constructor',null],['__proto__','😀\ud800']]},columnarMaps:['map'],records:[{id:'0',url:'/same',content:'完整中文😀'+i,extra:{retain:[null,{i}]}}]});
  });
}
function fixture(input:string[]){
  const payload=packSearchShards(input,commit,language,0,8),bytes=Buffer.from(payload);
  const file:SearchPhysicalFile={url:'/generated/search/zh-CN/pack-000.json',bytes:bytes.length,gzipBytes:gzipSync(bytes,{level:9}).length,sha256:hash(bytes),firstLogicalShard:0,logicalShardCount:input.length,records:input.length,logicalShards:input.map(wire=>({wireBytes:Buffer.byteLength(wire),wireSha256:hash(wire),records:1}))};
  const manifest:SearchManifest={schemaVersion:8,sourceCommit:commit,language,logicalShardCount:input.length,files:[file]};
  return {payload,bytes,file,manifest};
}
test('v8 reduces interleaved new/reused terms while preserving every ordered logical byte',async()=>{
  const input=wires(),before=[...input],f=fixture(input),packed=JSON.parse(f.payload) as {numericColumns:string[][]};
  assert.equal(packed.numericColumns.length,5);
  assert.equal(packed.numericColumns[0]!.length,16,'the real compact path must be exercised');
  assert.ok(f.file.gzipBytes<gzipSync(packSearchShards(input,commit,language,0,7),{level:9}).length);
  assert.deepEqual((await unpackSearchFile(readSearchManifest(f.manifest,language),f.file,f.bytes,hash)).map(v=>JSON.stringify(v)),input);
  assert.deepEqual(input,before);
});
test('v8 new-term state crosses native fallback maps and shards without changing IDs or duplicate records',async()=>{
  const repeated=JSON.parse(wires()[0]!) as {entries:Record<string,unknown>;columnarMaps:string[];records:unknown[]};
  repeated.entries={before:[['first','中文'],[513,513],[['string-id'],['second']]],...repeated.entries,negative:[['late','shared-1'],[513,513],[[8,-2],[3]]]};
  repeated.columnarMaps=['before','map','negative'];
  const input=[JSON.stringify(repeated),wires()[1]!],f=fixture(input);
  const packed=JSON.parse(f.payload) as {shards:{entries:Record<string,unknown[]>}[]};
  assert.equal(packed.shards[0]!.entries.before!.length,3);
  assert.equal(packed.shards[0]!.entries.negative!.length,3,'negative remainder stays native');
  assert.equal(packed.shards[0]!.entries.map!.length,1);
  assert.deepEqual((await unpackSearchFile(f.manifest,f.file,f.bytes,hash)).map(v=>JSON.stringify(v)),input);
});
test('v5-v7 writer bytes remain identical to the pre-v8 source',()=>{
  const input=[JSON.stringify({entries:{map:[['z','中文','__proto__'],[513,1027,513],[[5],[9,2],[3],[0]]],native:[['constructor',null]]},columnarMaps:['map'],records:[{id:'0',url:'/same',content:'完整😀',extra:{retain:true}}]})];
  const expected=['93fbb72751f0ee34f4029df8877581b9da9d90a8d5bae67309bbdf6b599b762e','071f364a0690a4ea194775336449d590713f2146f8948582e8487f0ddc940fdf','f87e338b9eea28d8cd9567bc0218e5d17b75f173be4872a36dd6cf47105cf6fb'];
  for(const [i,version] of ([5,6,7] as const).entries())assert.equal(hash(packSearchShards(input,commit,language,0,version)),'sha256:'+expected[i]);
});
type Packed={schemaVersion:number;encoding:string;dictionary:string[];numericColumns:string[][];shards:{entries:Record<string,unknown[]>;columnarMaps?:string[]}[]};
const alphabet='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function unsigned(value:number):string{let text='';do{const digit=value%32;value=Math.floor(value/32);text+=alphabet[digit+(value?32:0)];}while(value);return text;}
const sequence=(values:number[],signed=false)=>unsigned(values.length)+values.map(n=>unsigned(signed?(n<0?-n*2-1:n*2):n)).join('');
async function rejectsMutation(mutate:(value:Packed)=>void,beforeLogical=false){
  const f=fixture(wires().slice(0,2)),packed=JSON.parse(f.payload) as Packed;mutate(packed);
  const bytes=Buffer.from(JSON.stringify(packed));f.file.bytes=bytes.length;f.file.sha256=hash(bytes);
  let digests=0;
  await assert.rejects(unpackSearchFile(f.manifest,f.file,bytes,value=>{digests++;return hash(value);}),/Invalid search transport/);
  if(beforeLogical)assert.equal(digests,1,'reject before a logical digest or any import');
}
for(const column of [0,1,2,3,4])for(const invalid of ['', '!', 'gA', 'gggggggA', '///////', 'CA', 'BAA'])test(`v8 rejects malformed channel ${column} ${JSON.stringify(invalid)}`,async()=>{
  await rejectsMutation(p=>{p.numericColumns[column]![0]=invalid;},true);
});
test('v8 rejects invalid first-appearance commands, ranks, list shapes and arithmetic',async()=>{
  for(const mutate of [
    (p:Packed)=>{p.numericColumns[0]![0]=sequence(Array(600).fill(1));},
    (p:Packed)=>{p.numericColumns[0]![0]=sequence([0,...Array(599).fill(20001)]);},
    (p:Packed)=>{p.dictionary.pop();p.numericColumns[0]![0]=sequence(Array(600).fill(0));},
    (p:Packed)=>{p.numericColumns[1]![0]=sequence(Array(600).fill(1023));},
    (p:Packed)=>{p.numericColumns[2]![0]=sequence(Array(1200).fill(0));},
    (p:Packed)=>{p.numericColumns[2]![0]=sequence(Array(1200).fill(1073741823));},
    (p:Packed)=>{p.numericColumns[3]![0]=sequence(Array(1200).fill(1073741823),true);},
    (p:Packed)=>{p.numericColumns[4]![0]=sequence([2147483647]);},
    (p:Packed)=>{p.schemaVersion=3;},
    (p:Packed)=>{p.encoding='v4-columnar-channels-score-posting-vlq';}
  ])await rejectsMutation(mutate);
});
test('v8 authenticates unique complete channel ownership and the complete first-appearance dictionary',async()=>{
  for(const mutate of [
    (p:Packed)=>{p.shards[1]!.entries.map=[0];},
    (p:Packed)=>{p.shards[1]!.entries.map=[2];},
    (p:Packed)=>{p.shards[1]!.entries.map=[0.5];},
    (p:Packed)=>{p.numericColumns[4]!.pop();},
    (p:Packed)=>{p.numericColumns.forEach(c=>c.push(c[0]!));},
    (p:Packed)=>{p.shards[0]!.columnarMaps=['map','map'];}
  ])await rejectsMutation(mutate,true);
  await rejectsMutation(p=>{p.dictionary.push('never-introduced');});
});
test('v8 shares its expansion budget across maps and cannot evade it by reusing an encoded row',async()=>{
  const terms=Array.from({length:100},(_,i)=>'term'+i);
  const source=JSON.stringify({entries:{map:[terms,terms.map(()=>513),terms.map(()=>Array(6000).fill(1073741823))]},columnarMaps:['map'],records:[{}]});
  const input=[source,source,source],f=fixture(input),packed=JSON.parse(f.payload) as Packed;
  assert.equal(packed.numericColumns[0]!.length,2,'third map exceeds the shared budget and must remain native');
  assert.equal(packed.shards[2]!.entries.map!.length,3);
  assert.deepEqual((await unpackSearchFile(readSearchManifest(f.manifest,language),f.file,f.bytes,hash)).map(v=>JSON.stringify(v)),input);
  packed.numericColumns.forEach(c=>c.push(c[1]!));packed.shards[2]!.entries.map=[2];
  const bytes=Buffer.from(JSON.stringify(packed));f.file.bytes=bytes.length;f.file.sha256=hash(bytes);
  let digests=0;
  await assert.rejects(unpackSearchFile(f.manifest,f.file,bytes,value=>{digests++;return hash(value);}),/Invalid search transport/);
  assert.equal(digests,3,'the third otherwise identical logical wire must fail before its digest');
});
