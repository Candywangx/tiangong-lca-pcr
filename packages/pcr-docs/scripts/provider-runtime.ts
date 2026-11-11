import {fileURLToPath} from 'node:url';
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import {NAVIGATION_BINDING_FILE} from '../lib/navigation-trees.ts';
import {verifyNavigationTrees} from './navigation-tree-export.ts';
export const PROVIDER_RUNTIME_FILE='generated/provider-runtime.json';
export const PROVIDER_RUNTIME_PATHS=['middleware.ts','packages/pcr-docs/lib/chapter-compatibility.ts','packages/pcr-docs/compatibility/published-chapters.json'] as const;
export const NAVIGATION_RUNTIME_PATHS=['packages/pcr-docs/lib/navigation-trees.ts','packages/pcr-docs/lib/navigation-binding.d.ts'] as const;
export interface ProviderRuntime {schemaVersion:1|2;sourceCommit:string;files:{path:string;bytes:number;sha256:string}[];routes:{from:string;to:string;anchor:string}[];navigationBinding?:{path:string;bytes:number;sha256:string}|null}
function record(value:unknown):Record<string,unknown>{assert(value&&typeof value==='object'&&!Array.isArray(value),'Invalid provider runtime object');return value as Record<string,unknown>;}
function exact(value:Record<string,unknown>,keys:string[]){assert.deepEqual(Object.keys(value).sort(),keys.sort(),'Invalid provider runtime fields');}
const hash=(bytes:Buffer)=>'sha256:'+createHash('sha256').update(bytes).digest('hex');
function regular(root:string,relative:string,limit=Number.MAX_SAFE_INTEGER):Buffer{
 const base=fs.realpathSync(root),file=path.join(base,relative);assert(file.startsWith(base+path.sep)&&fs.realpathSync(file)===file,'Unsafe provider runtime source path');
 const before=fs.lstatSync(file);assert(before.isFile()&&!before.isSymbolicLink()&&before.size<=limit,'Provider runtime must be a bounded regular file');
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
 assert(/^[a-f0-9]{40}$/u.test(sourceCommit));const proof=record(value);assert(proof.schemaVersion===1||proof.schemaVersion===2);exact(proof,['schemaVersion','sourceCommit','files','routes',...(proof.schemaVersion===2?['navigationBinding']:[])]);assert.equal(proof.sourceCommit,sourceCommit);assert(Array.isArray(proof.files));const extra=proof.schemaVersion===2?NAVIGATION_RUNTIME_PATHS.length:0;assert.equal(proof.files.length,PROVIDER_RUNTIME_PATHS.length+extra);
 const expectedPaths:readonly string[]=[...PROVIDER_RUNTIME_PATHS,...(proof.schemaVersion===2?NAVIGATION_RUNTIME_PATHS:[])];
 const files=proof.files.map((raw,index)=>{const file=record(raw);exact(file,['path','bytes','sha256']);assert.equal(file.path,expectedPaths[index]);assert(typeof file.bytes==='number'&&Number.isSafeInteger(file.bytes)&&file.bytes>0&&file.bytes<1_000_000);assert(typeof file.sha256==='string'&&/^sha256:[a-f0-9]{64}$/u.test(file.sha256));return{path:expectedPaths[index]!,bytes:file.bytes,sha256:file.sha256};});
 let navigationBinding:ProviderRuntime['navigationBinding'];if(proof.schemaVersion===2){if(proof.navigationBinding===null)navigationBinding=null;else{const binding=record(proof.navigationBinding);exact(binding,['path','bytes','sha256']);assert.equal(binding.path,NAVIGATION_BINDING_FILE);assert(typeof binding.bytes==='number'&&Number.isSafeInteger(binding.bytes)&&binding.bytes>0&&binding.bytes<=4096&&typeof binding.sha256==='string'&&/^sha256:[a-f0-9]{64}$/.test(binding.sha256));navigationBinding={path:NAVIGATION_BINDING_FILE,bytes:binding.bytes,sha256:binding.sha256};}}
 return{schemaVersion:proof.schemaVersion,sourceCommit,files,routes:routeRows(proof.routes),...(proof.schemaVersion===2?{navigationBinding:navigationBinding??null}:{})};
}
export function createProviderRuntime(root:string,sourceCommit:string):ProviderRuntime|undefined{
 const present=PROVIDER_RUNTIME_PATHS.map(file=>fs.existsSync(path.join(root,file)));if(!present.some(Boolean))return undefined;assert(present.every(Boolean),'Incomplete provider runtime closure');
 const navigation=NAVIGATION_RUNTIME_PATHS.map(file=>fs.existsSync(path.join(root,file)));assert(navigation.every(Boolean)||navigation.every(present=>!present),'Incomplete navigation runtime closure');
 const sourcePaths:readonly string[]=[...PROVIDER_RUNTIME_PATHS,...(navigation.every(Boolean)?NAVIGATION_RUNTIME_PATHS:[])];
 const files=sourcePaths.map(file=>{const bytes=regular(root,file);return{path:file,bytes:bytes.length,sha256:hash(bytes)};});
 const mapping=record(JSON.parse(regular(root,PROVIDER_RUNTIME_PATHS[2]).toString('utf8')) as unknown);exact(mapping,['schemaVersion','entries']);assert.equal(mapping.schemaVersion,1);
 const routes=[...routeRows(mapping.entries)];
 routes.sort((a,b)=>a.from<b.from?-1:a.from>b.from?1:0);
 return parseProviderRuntime({schemaVersion:navigation.every(Boolean)?2:1,sourceCommit,files,routes,...(navigation.every(Boolean)?{navigationBinding:null}:{})},sourceCommit);
}
export function verifyProviderRuntimeSource(root:string,proof:ProviderRuntime|undefined,sourceCommit:string):void{assert.deepEqual(createProviderRuntime(root,sourceCommit),proof?.schemaVersion===2?{...proof,navigationBinding:null}:proof,'Provider runtime differs from sealed source proof');}
export function verifyProviderRuntimeExport(out:string,sourceCommit:string,expected?:ProviderRuntime):ProviderRuntime|undefined{
 const file=path.join(out,PROVIDER_RUNTIME_FILE);if(!fs.existsSync(file)){assert.equal(expected,undefined,'Missing provider runtime proof');return undefined;}
 const proof=parseProviderRuntime(JSON.parse(regular(out,PROVIDER_RUNTIME_FILE).toString('utf8')) as unknown,sourceCommit);if(expected)assert.deepEqual(proof.schemaVersion===2?{...proof,navigationBinding:null}:proof,expected.schemaVersion===2?{...expected,navigationBinding:null}:expected,'Export provider runtime differs from source');
 if(proof.schemaVersion===2){assert(proof.navigationBinding,'Unbound navigation runtime');const binding=regular(out,NAVIGATION_BINDING_FILE,4096);assert.equal(binding.length,proof.navigationBinding.bytes);assert.equal(hash(binding),proof.navigationBinding.sha256);verifyNavigationTrees(out,sourceCommit,true);}
 const targets=new Map<string,Set<string>>();
 for(const route of proof.routes){assert(!fs.existsSync(path.join(out,decodeURIComponent(route.from.slice(1)),'index.html')),'Old compatibility URL must not shadow a current page');let anchors=targets.get(route.to);if(!anchors){const html=regular(out,decodeURIComponent(route.to.slice(1))+'index.html');anchors=htmlAnchors(html.toString('utf8'));targets.set(route.to,anchors);}assert(anchors.has(route.anchor),'Published default chapter anchor missing: '+route.from);}
 return proof;
}

/** Decode the character references emitted in generated id attributes, once only. */
function generatedAnchor(value:string):string {
 const named:Record<string,string>={amp:'&',AMP:'&',quot:'"',QUOT:'"',apos:"'",lt:'<',LT:'<',gt:'>',GT:'>'};
 return value.replace(/&[^;\s]*;?|\r\n?/gu,reference=>{
  if(reference[0]==='\r')return '\n';
  const entity=reference.slice(1,-1);assert(reference.endsWith(';'),'Unsupported generated anchor character reference');
  if(Object.hasOwn(named,entity))return named[entity]!;
  assert(/^#(?:[0-9]+|[xX][0-9a-fA-F]+)$/u.test(entity),'Unsupported generated anchor character reference');
  const numeric=/^#[xX]/u.test(entity),point=Number.parseInt(entity.slice(numeric?2:1),numeric?16:10);
  // HTML replaces invalid scalars and remaps some controls. They are not generated chapter ids.
  assert(Number.isSafeInteger(point)&&point>=0x20&&point<=0x10ffff&&!(point>=0x7f&&point<=0x9f)&&!(point>=0xd800&&point<=0xdfff),'Invalid generated anchor character reference');
  return String.fromCodePoint(point);
 });
}

/**
 * Dependency-free scanner for the well-nested HTML emitted by this exporter, not a browser parser.
 * Reject unsupported malformed structure/references instead of guessing browser error recovery.
 * Only ordinary document-tree ids count: template content and foreign SVG/MathML descendants
 * are outside the chapter-anchor contract. One forward token scan is bounded by the file gate.
 */
export function htmlAnchors(html:string):Set<string>{
 assert(Buffer.byteLength(html)<25_000_000&&!html.includes('\0'),'Invalid generated anchor HTML');
 const anchors=new Set<string>(),stack:string[]=[],documentTags=new Set<string>();
 // Fall back to ASCII folding when Unicode lowercase would change token offsets (e.g. U+0130).
 const folded=html.toLowerCase(),lower=folded.length===html.length?folded:html.replace(/[A-Z]/gu,character=>character.toLowerCase());
 const space=(character:string|undefined)=>character!==undefined&&/[\t\n\f\r ]/u.test(character);
 const voidTags=new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
 const rawTags=new Set(['script','style','title','textarea','xmp','iframe','noembed','noframes','noscript']);
 const tableParents:Record<string,readonly string[]>={caption:['table'],colgroup:['table'],col:['colgroup'],thead:['table'],tbody:['table'],tfoot:['table'],tr:['table','thead','tbody','tfoot'],td:['tr'],th:['tr']};
 let offset=0,templateDepth=0,foreignDepth=0,selectDepth=0,formDepth=0;
 while(offset<html.length){
  const opening=html.indexOf('<',offset);if(opening<0)break;offset=opening;
  if(html.startsWith('<!--',offset)){
   const end=html.indexOf('-->',offset+4);assert(end>=0,'Unterminated generated HTML comment');
   const body=html.slice(offset+4,end);assert(!body.includes('<!--')&&!body.includes('--!>'),'Unsupported generated HTML comment');offset=end+3;continue;
  }
  if(html.startsWith('<![CDATA[',offset)&&foreignDepth){const end=html.indexOf(']]>',offset+9);assert(end>=0,'Unterminated generated foreign CDATA');offset=end+3;continue;}
  if(/^<!doctype\s+html\s*>/iu.test(html.slice(offset,offset+32))){const end=html.indexOf('>',offset);assert(!stack.length&&!documentTags.has('doctype'),'Misplaced generated doctype');documentTags.add('doctype');offset=end+1;continue;}
  assert(!html.startsWith('<!',offset)&&!html.startsWith('<?',offset),'Unsupported generated HTML declaration');
  let cursor=offset+1;const closing=html[cursor]==='/';if(closing)cursor++;
  if(!/[A-Za-z]/u.test(html[cursor]??'')){assert(!closing,'Malformed generated end tag');offset++;continue;}
  const start=cursor;while(/[A-Za-z0-9:-]/u.test(html[cursor]??''))cursor++;
  const tag=lower.slice(start,cursor);assert(space(html[cursor])||html[cursor]==='/'||html[cursor]==='>','Malformed generated tag name');
  let id:string|undefined,selfClosing=false;const attributes=new Set<string>();
  while(cursor<html.length){
   while(space(html[cursor]))cursor++;
   if(html[cursor]==='>'){cursor++;break;}
   if(html[cursor]==='/'&&html[cursor+1]==='>'){selfClosing=true;cursor+=2;break;}
   assert(!closing,'Attributes on generated end tag');
   const attributeStart=cursor;while(cursor<html.length&&!space(html[cursor])&&!['=','/','>'].includes(html[cursor]!)){assert(!/["'<`]/u.test(html[cursor]!), 'Malformed generated attribute name');cursor++;}
   assert(cursor>attributeStart,'Malformed generated attribute');const name=lower.slice(attributeStart,cursor);
   while(space(html[cursor]))cursor++;
   let value='';
   if(html[cursor]==='='){
    cursor++;while(space(html[cursor]))cursor++;
    const quote=html[cursor];
    if(quote==='"'||quote==="'"){const end=html.indexOf(quote,cursor+1);assert(end>=0,'Unterminated generated attribute');value=html.slice(cursor+1,end);cursor=end+1;assert(space(html[cursor])||html[cursor]==='/'||html[cursor]==='>','Missing generated attribute separator');}
    else{const valueStart=cursor;while(cursor<html.length&&!space(html[cursor])&&html[cursor]!=='>'){assert(!/["'<`=]/u.test(html[cursor]!), 'Malformed unquoted generated attribute');cursor++;}assert(cursor>valueStart,'Missing generated attribute value');value=html.slice(valueStart,cursor);}
   }
   // HTML keeps the first duplicate attribute, including case-insensitive ID spellings.
   if(name==='id'&&!attributes.has(name))id=generatedAnchor(value);attributes.add(name);
  }
  assert(cursor<=html.length&&html[cursor-1]==='>','Unterminated generated tag');offset=cursor;
  if(closing){
   assert(!selfClosing&&stack.pop()===tag,'Unbalanced generated HTML');
   if(tag==='template')templateDepth--;if(tag==='svg'||tag==='math')foreignDepth--;if(tag==='select')selectDepth--;if(tag==='form')formDepth--;
   continue;
  }
  // Declarative shadow roots consume their template owner; its id is not a document anchor.
  if(tag==='template')assert(!attributes.has('shadowrootmode'),'Unsupported generated declarative shadow root');
  assert(tag!=='plaintext'&&tag!=='frameset'&&tag!=='frame','Unsupported generated HTML container');
  const parent=stack.at(-1);
  if(!templateDepth&&!foreignDepth){
   if(['html','head','body'].includes(tag)){assert(!documentTags.has(tag),'Duplicate generated document container');assert(tag==='html'?parent===undefined:parent==='html'&&(tag!=='head'||!documentTags.has('body')),'Misplaced generated document container');documentTags.add(tag);}
   if(tag==='form')assert(!formDepth,'Nested generated form');
   if(selectDepth)assert(['option','optgroup','hr','script','template'].includes(tag),'Unsupported generated select child');
   if(Object.hasOwn(tableParents,tag))assert(parent!==undefined&&tableParents[tag]!.includes(parent),'Unsupported generated table structure');
   if(id!==undefined)anchors.add(id);
  }
  if(voidTags.has(tag))continue;
  // HTML ignores a self-closing slash on ordinary non-void tags; foreign elements honor it.
  if(selfClosing&&(foreignDepth||tag==='svg'||tag==='math'))continue;
  assert(stack.length<1000,'Generated HTML nesting exceeds anchor scanner bound');stack.push(tag);
  if(tag==='template')templateDepth++;if(tag==='svg'||tag==='math')foreignDepth++;if(tag==='select')selectDepth++;if(tag==='form')formDepth++;
  if(rawTags.has(tag)){
   let end=lower.indexOf('</'+tag,offset);
   while(end>=0&&!space(html[end+tag.length+2])&&html[end+tag.length+2]!=='>'&&html[end+tag.length+2]!=='/')end=lower.indexOf('</'+tag,end+2);
   assert(end>=0,'Unterminated generated raw-text element');
   // Script escaped/double-escaped states require browser tokenization; Next emits escaped JSON.
   if(tag==='script')assert(!/<!--|<script[\t\n\f\r />]/iu.test(html.slice(offset,end)),'Unsupported generated script escape state');
   offset=end;
  }
 }
 assert(stack.length===0,'Unclosed generated HTML element');return anchors;
}
export function verifyProviderRuntimeInventory(value:unknown,sourceCommit:string,files:readonly {path:string;bytes:number;sha256?:string}[]):ProviderRuntime{
 const proof=parseProviderRuntime(value,sourceCommit),paths=new Set(files.map(file=>file.path));
 if(proof.schemaVersion===2){assert(proof.navigationBinding,'Unbound archived navigation runtime');const file=files.find(file=>file.path===NAVIGATION_BINDING_FILE);assert(file&&file.bytes===proof.navigationBinding.bytes&&'sha256:'+file.sha256?.replace(/^sha256:/,'')===proof.navigationBinding.sha256,'Archived navigation binding differs');}
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

/** Resolve the authored checkout from either source modules or repository-owned compiled tests. */
export function providerRuntimeSourceRoot(moduleUrl:string|URL):string {
 let directory=path.dirname(fileURLToPath(moduleUrl));
 while(true){
  const marker=fs.lstatSync(path.join(directory,'.git'),{throwIfNoEntry:false});
  if(marker){assert(!marker.isSymbolicLink()&&(marker.isFile()||marker.isDirectory()),'Unsafe source repository marker');return fs.realpathSync(directory);}
  const parent=path.dirname(directory);if(parent===directory)throw new Error('Cannot locate authored provider source repository');directory=parent;
 }
}
