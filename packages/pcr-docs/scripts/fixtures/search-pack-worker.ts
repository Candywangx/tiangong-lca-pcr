import assert from "node:assert/strict";
import path from "node:path";
import {pathToFileURL} from "node:url";
import {createHash} from "node:crypto";
import {gzipSync} from "node:zlib";
import {Index} from "flexsearch";
import {searchTerms} from "../../lib/search-terms.ts";
import {encodeSearchEntries} from "../../lib/search-wire.ts";
import {packSearchShards,unpackSearchFile,searchUtf8,type SearchPhysicalFile,type SearchManifestV5} from "../../lib/search-pack.ts";
import type {SearchResult} from "../../lib/types.ts";
const output=process.argv[2],scenario=process.argv[3];assert.ok(output&&scenario);
const root="/generated/search/en-US/",sourceCommit="a".repeat(40);
const digest=(bytes:Uint8Array)=>"sha256:"+createHash("sha256").update(bytes).digest("hex");
const responses=new Map<string,string>(),requests:string[]=[],imported:[string,string][]=[];
type Reply={id?:number;results?:SearchResult[];error?:string};
const replies:Reply[]=[];
const scope:{onmessage?:(event:MessageEvent<unknown>)=>Promise<void>;postMessage:(reply:Reply)=>void}={postMessage:reply=>{replies.push(reply);}};
Reflect.set(globalThis,"self",scope);
let release:(()=>void)|undefined,gate:Promise<void>|undefined;
Reflect.set(globalThis,"fetch",async(url:string)=>{requests.push(url);if(gate&&url.endsWith("manifest.json"))await gate;const body=responses.get(url);return new Response(body??"",{status:body===undefined?404:200});});
const engine:unknown=await import(pathToFileURL(path.join(output,"search-engine.mjs")).href);
assert.ok(engine&&typeof engine==="object"&&"Index"in engine&&typeof engine.Index==="function");
const prototype=engine.Index.prototype as {import:(key:string,payload:string)=>void},original=prototype.import;
prototype.import=function(key,payload){imported.push([key,payload]);return original.call(this,key,payload);};
const doc=(id:number,content:string,url="/fixture/"+id,description="scope"):SearchResult=>({id:String(id),type:"page",url,content,description,breadcrumbs:[]});
const nativeEntries:[string,string][]=[];
async function wire(records:SearchResult[]):Promise<string>{
 const index=new Index({tokenize:"strict",resolution:9,encode:(value:unknown)=>searchTerms(value,"en-US")});
 for(const record of records)index.add(Number(record.id),"wheat");
 const entries:Record<string,unknown[]>={};await index.export((key,payload)=>{nativeEntries.push([key,payload]);entries[key]=JSON.parse(payload) as unknown[];});
 return JSON.stringify({...encodeSearchEntries(entries,4),records});
}
async function install(groups:SearchResult[][]){
 nativeEntries.length=0;const wires=await Promise.all(groups.map(wire));
 const payload=packSearchShards(wires,sourceCommit,"en-US",0),bytes=searchUtf8(payload);
 const file:SearchPhysicalFile={url:root+"pack-000.json",bytes:bytes.length,gzipBytes:gzipSync(bytes,{level:9}).length,sha256:digest(bytes),firstLogicalShard:0,logicalShardCount:wires.length,records:groups.reduce((sum,records)=>sum+records.length,0),logicalShards:wires.map((wire,i)=>({wireBytes:searchUtf8(wire).length,wireSha256:digest(searchUtf8(wire)),records:groups[i]!.length}))};
 const manifest:SearchManifestV5={schemaVersion:5,sourceCommit,language:"en-US",logicalShardCount:wires.length,files:[file]};responses.set(file.url,payload);responses.set(root+"manifest.json",JSON.stringify(manifest));return{payload,manifest};
}
if(scenario==="cutoff")await install([Array.from({length:30},(_,i)=>doc(i,"Wheat product "+i)),[doc(0,"Wheat","/exact")]]);
else if(scenario==="duplicates")await install([[doc(0,"Wheat earlier","/same","first full record"),doc(1,"Wheat local","/first")],[doc(0,"Wheat","/same","later exact must not replace"),doc(1,"Wheat second","/second")]]);
else if(scenario.startsWith("legacy-")){
 const version=Number(scenario.slice(-1)),records=[doc(0,"Wheat")];
 // Historical wire literals deliberately do not call the current encoder.
 const literals=[String.raw`{"entries":{"1.reg":"[0]","1.map":"[[\"wheat\",[[0]]]]"}}`,String.raw`{"entries":{"1.reg":[0],"1.map":[["wheat",[[0]]]]}}`,String.raw`{"entries":{"1.reg":[0],"1.map":[["wheat",1,[[0,[0]]]]]},"sparseMaps":["1.map"]}`,String.raw`{"entries":{"1.reg":[0],"1.map":[["wheat",513,[0]]]},"sparseMaps":["1.map"],"scoreMasks":true,"postingDeltas":true}`];
 const payload=JSON.parse(literals[version-1]!) as Record<string,unknown>;payload.records=records;
 responses.set(root+"old.json",JSON.stringify(payload));responses.set(root+"manifest.json",JSON.stringify({schemaVersion:version,language:"en-US",shards:[{url:root+"old.json"}]}));
}else await install([[doc(0,"Wheat first")],[doc(0,"Wheat second","/second")]]);
await import(pathToFileURL(path.join(output,"search-worker.mjs")).href);
assert.equal(requests.length,0);
let sequence=0;
async function query():Promise<Reply>{assert.ok(scope.onmessage);await scope.onmessage(new MessageEvent("message",{data:{id:++sequence,query:"wheat",language:"en-US"}}));return replies.at(-1)!;}
function valid(reply:Reply){assert.equal(reply.error,undefined);assert.ok(reply.results);return reply.results;}
if(scenario==="cutoff"){const result=valid(await query());assert.equal(result.length,30);assert.equal(result[0]!.url,"/exact");assert.deepEqual(imported,nativeEntries);}
else if(scenario==="duplicates"){const result=valid(await query());assert.equal(result.length,3);assert.equal(result.find(record=>record.url==="/same")!.description,"first full record");assert.ok(result.some(record=>record.url==="/first"));assert.ok(result.some(record=>record.url==="/second"));assert.deepEqual(imported,nativeEntries);}
else if(scenario==="late-retry"||scenario==="late-import-retry"||scenario==="identity"){
 const manifest=JSON.parse(responses.get(root+"manifest.json")!) as SearchManifestV5;const originalManifest=JSON.stringify(manifest),payload=responses.get(root+"pack-000.json")!;
 if(scenario==="late-retry")manifest.files[0]!.logicalShards[1]!.wireSha256="sha256:"+"0".repeat(64);
 else if(scenario==="late-import-retry"){
  const restored=await unpackSearchFile(manifest,manifest.files[0]!,searchUtf8(payload),digest);
  const late=restored[1]!;late.entries={"1.map":[null]};late.sparseMaps=[];delete late.columnarMaps;
  const wires=restored.map(value=>JSON.stringify(value)),changed=packSearchShards(wires,sourceCommit,"en-US",0),file=manifest.files[0]!;
  file.bytes=searchUtf8(changed).length;file.sha256=digest(searchUtf8(changed));file.gzipBytes=gzipSync(changed,{level:9}).length;
  file.logicalShards=wires.map((wire,i)=>({wireBytes:searchUtf8(wire).length,wireSha256:digest(searchUtf8(wire)),records:(restored[i]!.records as unknown[]).length}));responses.set(root+"pack-000.json",changed);
 }else responses.set(root+"pack-000.json",payload+" ");
 responses.set(root+"manifest.json",JSON.stringify(manifest));const failed=await query();assert.ok(failed.error);assert.equal(failed.results,undefined);
 responses.set(root+"manifest.json",originalManifest);responses.set(root+"pack-000.json",payload);assert.equal(valid(await query()).length,2);assert.equal(requests.filter(url=>url.endsWith("pack-000.json")).length,2);
}else if(scenario==="lazy"){
 gate=new Promise<void>(resolve=>{release=resolve;});const first=query(),second=query();assert.equal(requests.length,1);assert.ok(release);release();await Promise.all([first,second]);assert.ok(replies.every(reply=>!reply.error));assert.equal(requests.filter(url=>url.endsWith("pack-000.json")).length,1);assert.deepEqual(imported,nativeEntries);
}else assert.equal(valid(await query())[0]!.content,"Wheat");
process.stdout.write("PASS "+scenario+"\n");
