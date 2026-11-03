import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {gzipSync} from 'node:zlib';
import {packSearchShards,unpackSearchFile,readSearchManifest,type SearchManifest,type SearchPhysicalFile} from '../lib/search-pack.ts';
type Layout={manifest:SearchManifest;manifestText:string;files:{descriptor:SearchPhysicalFile;payload:string}[];rawBytes:number;gzipBytes:number};
type Planner=(wires:readonly string[],commit:string,language:string)=>Layout;
const commit='a'.repeat(40),language='zh-CN';
const hash=(value:string|Uint8Array)=>'sha256:'+createHash('sha256').update(value).digest('hex');
async function planner():Promise<Planner>{
  const module:unknown=await import(new URL('./search-layout.ts',import.meta.url).href).catch((error:unknown)=>{
    if(error&&typeof error==='object'&&Reflect.get(error,'code')==='ERR_MODULE_NOT_FOUND')return {};
    throw error;
  });
  const value=module&&typeof module==='object'?Reflect.get(module,'planSearchPacks'):undefined;
  assert.equal(typeof value,'function','lossless bounded search layout planner must be available');
  return value as Planner;
}
function wire(i:number,terms=Array.from({length:120},(_,j)=>'条目'+String.fromCharCode(0x4e00+(j*37)%2000)+String.fromCharCode(0x4e00+(j*71)%2000))):string{
  return JSON.stringify({entries:{map:[terms,terms.map(()=>513),terms.map((_,j)=>[i*10+j])],native:[['constructor',null],['__proto__','😀\ud800']]},columnarMaps:['map'],records:[{id:'0',url:'/same',content:'完整中文😀'+i,description:'',breadcrumbs:[],extra:{preserve:[null,{i}]}}]});
}
function greedy(wires:readonly string[]):Layout{
  const files:Layout['files']=[];
  for(let start=0;start<wires.length;start+=16){
    const group=wires.slice(start,start+16),payload=packSearchShards(group,commit,language,start,7);
    const logicalShards=group.map(text=>({wireBytes:Buffer.byteLength(text),wireSha256:hash(text),records:1}));
    const descriptor:SearchPhysicalFile={url:`/generated/search/${language}/pack-${String(files.length).padStart(3,'0')}.json`,bytes:Buffer.byteLength(payload),gzipBytes:gzipSync(payload,{level:9}).length,sha256:hash(payload),firstLogicalShard:start,logicalShardCount:group.length,records:group.length,logicalShards};
    files.push({payload,descriptor});
  }
  const manifest:SearchManifest={schemaVersion:7,sourceCommit:commit,language,logicalShardCount:wires.length,files:files.map(f=>f.descriptor)},manifestText=JSON.stringify(manifest);
  return {manifest,manifestText,files,rawBytes:Buffer.byteLength(manifestText)+files.reduce((n,f)=>n+f.descriptor.bytes,0),gzipBytes:gzipSync(manifestText,{level:9}).length+files.reduce((n,f)=>n+f.descriptor.gzipBytes,0)};
}
test('layout retains exact ordered logical bytes, native entries and complete duplicate records',async()=>{
  const plan=await planner(),wires=Array.from({length:35},(_,i)=>wire(i)),before=[...wires],layout=plan(wires,commit,language);
  const manifest=readSearchManifest(layout.manifest,language),restored:string[]=[];
  for(const f of layout.files){assert.ok(f.descriptor.logicalShardCount>0&&f.descriptor.logicalShardCount<=16);restored.push(...(await unpackSearchFile(manifest,f.descriptor,Buffer.from(f.payload),hash)).map(v=>JSON.stringify(v)));}
  assert.deepEqual(restored,wires);assert.deepEqual(wires,before);
  assert.equal(layout.rawBytes,Buffer.byteLength(layout.manifestText)+layout.files.reduce((n,f)=>n+Buffer.byteLength(f.payload),0));
  assert.equal(layout.gzipBytes,gzipSync(layout.manifestText,{level:9}).length+layout.files.reduce((n,f)=>n+gzipSync(f.payload,{level:9}).length,0));
});
test('layout reduces duplicated adjacent topic dictionaries without discarding records',async()=>{
  const dictionaries=Array.from({length:3},(_,group)=>Array.from({length:600},(_,j)=>String.fromCharCode(0x4e00+group*2000+j)+String.fromCharCode(0x4e00+group*2000+(j*71)%1000)));
  const plan=await planner(),wires=Array.from({length:35},(_,i)=>wire(i,dictionaries[Math.floor(i/12)]!)),baseline=greedy(wires),layout=plan(wires,commit,language);
  assert.ok(layout.gzipBytes<baseline.gzipBytes,`${layout.gzipBytes} must improve on ${baseline.gzipBytes}`);
  assert.equal(layout.manifest.logicalShardCount,35);assert.equal(layout.files.reduce((n,f)=>n+f.descriptor.records,0),35);
});
test('the original physical layout remains a candidate and larger inputs stay contiguous and bounded',async()=>{
  const plan=await planner(),wires=Array.from({length:79},(_,i)=>wire(i,['alpha','beta'])),layout=plan(wires,commit,language);
  assert.ok(layout.gzipBytes<=greedy(wires).gzipBytes);
  let next=0;for(const file of layout.files){assert.equal(file.descriptor.firstLogicalShard,next);assert.ok(file.descriptor.logicalShardCount<=16);next+=file.descriptor.logicalShardCount;}
  assert.equal(next,wires.length);
  const empty=plan([],commit,language);assert.equal(readSearchManifest(empty.manifest,language).logicalShardCount,0);
});
test('layout preserves the restored-wire limit even when a smaller physical pack would exceed it',async()=>{
  const term='中'.repeat(340000),topics=[0,1].map(group=>Array.from({length:125},(_,i)=>createHash('sha256').update(`topic${group}:${i}`).digest('hex')).join(''));
  const wires=Array.from({length:17},(_,i)=>{
    const keys=Array.from({length:i===16?19:1},(_,j)=>`map${j}`);
    return JSON.stringify({entries:Object.fromEntries(keys.map(key=>[key,[[term],[513],[[i]]]])),columnarMaps:keys,records:[{id:'0',url:'/same',content:topics[i<8?0:1]}]});
  });
  assert.doesNotThrow(()=>readSearchManifest(greedy(wires).manifest,language),'the original layout is accepted');
  const layout=(await planner())(wires,commit,language);
  assert.doesNotThrow(()=>readSearchManifest(layout.manifest,language),'compression must preserve every original expansion guard');
});
