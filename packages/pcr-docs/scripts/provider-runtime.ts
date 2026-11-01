import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
export const PROVIDER_RUNTIME_FILE='generated/provider-runtime.json';
export const PROVIDER_RUNTIME_PATHS=['middleware.ts','packages/pcr-docs/lib/chapter-compatibility.ts','packages/pcr-docs/compatibility/published-chapters.json'] as const;
export interface ProviderRuntime {schemaVersion:1;sourceCommit:string;files:{path:string;bytes:number;sha256:string}[];routes:{from:string;to:string;anchor:string}[]}
function record(value:unknown):Record<string,unknown>{assert(value&&typeof value==='object'&&!Array.isArray(value),'Invalid provider runtime object');return value as Record<string,unknown>;}
function exact(value:Record<string,unknown>,keys:string[]){assert.deepEqual(Object.keys(value).sort(),keys.sort(),'Invalid provider runtime fields');}
const hash=(bytes:Buffer)=>'sha256:'+createHash('sha256').update(bytes).digest('hex');
function regular(root:string,relative:string):Buffer{
 const base=fs.realpathSync(root),file=path.join(base,relative);assert(file.startsWith(base+path.sep)&&fs.realpathSync(file)===file,'Unsafe provider runtime source path');
 const before=fs.lstatSync(file);assert(before.isFile()&&!before.isSymbolicLink(),'Provider runtime must be regular');
 const fd=fs.openSync(file,fs.constants.O_RDONLY|(fs.constants.O_NOFOLLOW??0));try{const bytes=fs.readFileSync(fd),after=fs.fstatSync(fd);assert.equal(after.ino,before.ino);assert.equal(after.dev,before.dev);assert.equal(after.size,before.size);assert.equal(after.mtimeMs,before.mtimeMs);return bytes;}finally{fs.closeSync(fd);}
}
function routeRows(value:unknown):ProviderRuntime['routes']{
 assert(Array.isArray(value)&&value.length>0&&value.length<2000,'Invalid compatibility route count');
 const rows=value.map(raw=>{const row=record(raw);exact(row,['from','to','anchor']);assert(typeof row.from==='string'&&typeof row.to==='string'&&typeof row.anchor==='string');
  for(const url of [row.from,row.to]){assert(/^\/(?:en|zh)\/docs\/pcr\//u.test(url)&&url.endsWith('/')&&!/[?#\\\u0000-\u001f]/u.test(url));const parsed=new URL(url,'https://pcr.tiangong.earth');assert.equal(parsed.pathname,url);const decoded=decodeURIComponent(url);assert(!/%(?:2f|5c)/iu.test(url)&&!decoded.split('/').some(segment=>segment==='.'||segment==='..'));}
  const owner=row.from.split('/chapters/');assert.equal(owner.length,2);assert(owner[1]&&owner[1].split('/').length===2);assert(row.to===owner[0]+'/'||row.to.startsWith(owner[0]+'/chapters/'));assert(row.anchor.length>0&&row.anchor.length<2000&&!/[\u0000-\u001f]/u.test(row.anchor));return{from:row.from,to:row.to,anchor:row.anchor};});
 const sources=new Set(rows.map(row=>row.from));assert.equal(sources.size,rows.length);assert(rows.every(row=>!sources.has(row.to)),'Compatibility routes cannot cycle');assert.deepEqual(rows.map(row=>row.from),rows.map(row=>row.from).sort());return rows;
}
export function parseProviderRuntime(value:unknown,sourceCommit:string):ProviderRuntime{
 assert(/^[a-f0-9]{40}$/u.test(sourceCommit));const proof=record(value);exact(proof,['schemaVersion','sourceCommit','files','routes']);assert.equal(proof.schemaVersion,1);assert.equal(proof.sourceCommit,sourceCommit);assert(Array.isArray(proof.files));assert.equal(proof.files.length,PROVIDER_RUNTIME_PATHS.length);
 const files=proof.files.map((raw,index)=>{const file=record(raw);exact(file,['path','bytes','sha256']);assert.equal(file.path,PROVIDER_RUNTIME_PATHS[index]);assert(typeof file.bytes==='number'&&Number.isSafeInteger(file.bytes)&&file.bytes>0&&file.bytes<1_000_000);assert(typeof file.sha256==='string'&&/^sha256:[a-f0-9]{64}$/u.test(file.sha256));return{path:PROVIDER_RUNTIME_PATHS[index]!,bytes:file.bytes,sha256:file.sha256};});
 return{schemaVersion:1,sourceCommit,files,routes:routeRows(proof.routes)};
}
export function createProviderRuntime(root:string,sourceCommit:string):ProviderRuntime|undefined{
 const present=PROVIDER_RUNTIME_PATHS.map(file=>fs.existsSync(path.join(root,file)));if(!present.some(Boolean))return undefined;assert(present.every(Boolean),'Incomplete provider runtime closure');
 const files=PROVIDER_RUNTIME_PATHS.map(file=>{const bytes=regular(root,file);return{path:file,bytes:bytes.length,sha256:hash(bytes)};});
 const mapping=record(JSON.parse(regular(root,PROVIDER_RUNTIME_PATHS[2]).toString('utf8')) as unknown);exact(mapping,['schemaVersion','entries']);assert.equal(mapping.schemaVersion,1);
 return parseProviderRuntime({schemaVersion:1,sourceCommit,files,routes:mapping.entries},sourceCommit);
}
export function verifyProviderRuntimeSource(root:string,proof:ProviderRuntime|undefined,sourceCommit:string):void{assert.deepEqual(createProviderRuntime(root,sourceCommit),proof,'Provider runtime differs from sealed source proof');}
export function verifyProviderRuntimeExport(out:string,sourceCommit:string,expected?:ProviderRuntime):ProviderRuntime|undefined{
 const file=path.join(out,PROVIDER_RUNTIME_FILE);if(!fs.existsSync(file)){assert.equal(expected,undefined,'Missing provider runtime proof');return undefined;}
 const proof=parseProviderRuntime(JSON.parse(regular(out,PROVIDER_RUNTIME_FILE).toString('utf8')) as unknown,sourceCommit);if(expected)assert.deepEqual(proof,expected,'Export provider runtime differs from source');
 const targets=new Map<string,Set<string>>();
 for(const route of proof.routes){assert(!fs.existsSync(path.join(out,decodeURIComponent(route.from.slice(1)),'index.html')),'Old compatibility URL must not shadow a current page');let anchors=targets.get(route.to);if(!anchors){const html=regular(out,decodeURIComponent(route.to.slice(1))+'index.html');anchors=htmlAnchors(html.toString('utf8'));targets.set(route.to,anchors);}assert(anchors.has(route.anchor),'Published default chapter anchor missing: '+route.from);}
 return proof;
}

export function htmlAnchors(html:string):Set<string>{
 const named:Record<string,string>={amp:'&',quot:'"',apos:"'",lt:'<',gt:'>'};
 return new Set([...html.matchAll(/\bid=(["'])(.*?)\1/gu)].map(match=>match[2]!.replace(/&(#x[0-9a-f]+|#[0-9]+|amp|quot|apos|lt|gt);/giu,(_whole:string,entity:string)=>entity.startsWith('#')?String.fromCodePoint(Number.parseInt(entity.slice(entity[1]==='x'?2:1),entity[1]==='x'?16:10)):named[entity]!)));
}
export function verifyProviderRuntimeInventory(value:unknown,sourceCommit:string,files:readonly {path:string;bytes:number;sha256?:string}[]):ProviderRuntime{
 const proof=parseProviderRuntime(value,sourceCommit),paths=new Set(files.map(file=>file.path));
 for(const row of proof.routes){assert(paths.has(decodeURIComponent(row.to.slice(1))+'index.html'),'Missing archived compatibility target');assert(!paths.has(decodeURIComponent(row.from.slice(1))+'index.html'),'Archived old route shadows current page');}
 return proof;
}

/** The published anchor ledger is source evidence, not runtime routing data. */
export function verifyPublishedChapterAnchors(root:string,out:string,proof:ProviderRuntime|undefined):void {
 if(!proof)return;
 const raw=record(JSON.parse(regular(root,'packages/pcr-docs/compatibility/published-chapter-anchors.json').toString('utf8')) as unknown);exact(raw,['schemaVersion','baseline','requirements']);assert.equal(raw.schemaVersion,1);assert(typeof raw.baseline==='string'&&Array.isArray(raw.requirements));assert.equal(raw.requirements.length,proof.routes.length);
 const routes=new Map(proof.routes.map(row=>[row.from,row])),seen=new Set<string>(),targets=new Map<string,Set<string>>();
 for(const item of raw.requirements){const row=record(item);exact(row,['from','anchors']);assert(typeof row.from==='string'&&!seen.has(row.from)&&Array.isArray(row.anchors)&&row.anchors.length>0);seen.add(row.from);const route=routes.get(row.from);assert(route,'Published anchor route lacks compatibility');let anchors=targets.get(route.to);if(!anchors){anchors=htmlAnchors(regular(out,decodeURIComponent(route.to.slice(1))+'index.html').toString('utf8'));targets.set(route.to,anchors);}for(const anchor of row.anchors)assert(typeof anchor==='string'&&anchors.has(anchor),'Published chapter anchor missing: '+row.from+'#'+String(anchor));}
}
