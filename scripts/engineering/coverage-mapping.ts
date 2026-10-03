import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { stripTypeScriptTypes } from 'node:module';
import { object, strings, hash, type Capture } from './coverage-types.ts';
import {codeIdentity,type EmissionIndex} from './coverage-emission.ts';
import type { SourceEntry } from './coverage-inventory.ts';
export interface ProvenSourceMap {version:3;names:string[];sources:string[];sourcesContent:string[];mappings:string;sourceRoot:string}
export type ProvenMapping = {kind:'native';path:string;source:string} | {kind:'emitted';paths:string[];source:string;sourceMap:ProvenSourceMap;originalSource:string};
export function proveMapping(root:string,capture:Capture,inventory:readonly SourceEntry[],emissions?:EmissionIndex,allowPending=false):ProvenMapping {
 if(capture.error)throw new Error(`Capture failed: ${capture.error}`);
 const byPath=new Map(inventory.map(entry=>[entry.path,entry]));
 const current=(relative:string,source:string)=>{const entry=byPath.get(relative);if(!entry||entry.lane==='excluded')throw new Error('Map targets excluded or uninventoried source.');if(hash(source)!==entry.sha256||readFileSync(path.join(root,relative),'utf8')!==source)throw new Error('Source content/hash differs from production.');return entry;};
 if(capture.sourceMap===null){
  if(!capture.url.startsWith('file:')||!capture.url.endsWith('.ts')||capture.fileSource===null)throw new Error('Executed code has no authenticated source map.');
  let relative=path.relative(root,fileURLToPath(capture.url)).split(path.sep).join('/');
  if(!byPath.has(relative)){const candidates=inventory.filter(entry=>entry.sha256===hash(capture.fileSource??''));if(candidates.length!==1)throw new Error('Temporary source copy has no unique production identity.');relative=candidates[0]?.path??'';}
  const entry=current(relative,capture.fileSource);if(entry.lane!=='node')throw new Error('Native coverage targets a pending browser/Next surface.');
  if(stripTypeScriptTypes(capture.fileSource,{sourceUrl:capture.url})!==capture.source)throw new Error('Native executed code/UTF-16 offsets differ from type stripping.');
  return {kind:'native',path:path.join(root,relative),source:capture.fileSource};
 }
 const map=object(capture.sourceMap);if(map.version!==3||typeof map.mappings!=='string')throw new Error('Unsupported source map.');
 const sources=strings(map.sources),contents=strings(map.sourcesContent),names=strings(map.names);if(!sources.length||sources.length!==contents.length)throw new Error('Source map needs every original sourceContent.');
 if(capture.fileSource===null||capture.source!==capture.fileSource)throw new Error('Emitted executed code differs from retained file bytes.');
 const paths=sources.map((source,index)=>{
  let relative:string;
  if(source.startsWith('pcr://source/'))relative=decodeURIComponent(source.slice('pcr://source/'.length));
  else{const url=new URL(source,new URL(typeof map.sourceRoot==='string'?map.sourceRoot:'',capture.url));if(url.protocol!=='file:')throw new Error('Unrecognized source map root.');relative=path.relative(root,fileURLToPath(url)).split(path.sep).join('/');}
  const sourceContent=contents[index];if(sourceContent===undefined)throw new Error('Missing source content.');const entry=current(relative,sourceContent);if(entry.lane!=='node'&&!allowPending)throw new Error('Emitted coverage targets pending browser/Next source.');return path.join(root,relative);
 });
 if(new Set(paths).size!==paths.length)throw new Error('Duplicate source map targets.');
 if(paths.length!==1)throw new Error('Multi-source bundle requires a browser/Next build proof; remains pending.');
 const target=paths[0];if(!target)throw new Error('Missing emitted target.');const relative=path.relative(root,target).split(path.sep).join('/');const expected=emissions?.get(relative);
 if(!expected || expected.code!==codeIdentity(capture.source) || expected.mappings!==map.mappings || JSON.stringify(expected.names)!==JSON.stringify(names))throw new Error('Executed JS/map differs from pinned compiler emission.');
 const normalized:ProvenSourceMap={version:3,names,sources:paths,sourcesContent:contents,mappings:map.mappings,sourceRoot:''};
 return {kind:'emitted',paths,source:capture.source,sourceMap:normalized,originalSource:contents[0]??''};
}
/** Hash-exact excluded test/declaration copies remain excluded after relocation or compilation. */
export function excludedCapture(value:Capture,inventory:readonly SourceEntry[]):boolean{
 const hashes=new Set(inventory.filter(entry=>entry.lane==='excluded').map(entry=>entry.sha256));
 if(value.fileSource!==null&&hashes.has(hash(value.fileSource)))return true;
 if(!value.sourceMap||typeof value.sourceMap!=='object'||Array.isArray(value.sourceMap))return false;
 const map=object(value.sourceMap);if(!Array.isArray(map.sourcesContent)||!Array.isArray(map.sources)||!map.sources.length||map.sourcesContent.length!==map.sources.length)return false;
 return map.sourcesContent.every((source:unknown)=>typeof source==='string'&&hashes.has(hash(source)));
}
