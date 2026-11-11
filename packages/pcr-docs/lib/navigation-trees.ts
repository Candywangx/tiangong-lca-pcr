/** Immutable, bounded transport for byte-exact Next tree responses. No Node APIs. */
export const NAVIGATION_BINDING_FILE='generated/navigation-binding.json';
export const NAVIGATION_PACK_LIMIT=1_000_000;
export const NAVIGATION_MANIFEST_LIMIT=16_384;
export const NAVIGATION_ROWS_LIMIT=512;
export interface NavigationFile {url:string;bytes:number;sha256:string}
export interface NavigationBinding {schemaVersion:1;sourceCommit:string;manifest:NavigationFile}
export interface NavigationPackRef extends NavigationFile {bucket:string;rows:number}
export interface NavigationManifest {schemaVersion:1;sourceCommit:string;packs:NavigationPackRef[]}
export interface NavigationRow {path:string;bytes:number;sha256:string;data:string}
export interface DecodedNavigationRow extends NavigationRow {body:Uint8Array}
const encoder=new TextEncoder(),digestPattern=/^[a-f0-9]{64}$/;
function requireThat(value:unknown):asserts value {if(!value)throw new Error('Invalid navigation transport.');}
function object(value:unknown):Record<string,unknown>{requireThat(value!==null&&typeof value==='object'&&!Array.isArray(value));return value as Record<string,unknown>;}
function fields(value:Record<string,unknown>,keys:string[]){requireThat(Object.keys(value).sort().join(',')===keys.sort().join(','));}
const integer=(value:unknown):value is number=>typeof value==='number'&&Number.isSafeInteger(value)&&value>=0;
const source=(value:unknown):value is string=>typeof value==='string'&&/^[a-f0-9]{40}$/.test(value);
export function treeRequestPath(value:string):string|undefined{
 try{
  if(!value.startsWith('/')||/[?#\\\u0000-\u001f\u007f]/.test(value)||/%(?:2f|5c)/i.test(value))return;
  const parts=value.slice(1).split('/'),decoded=parts.map(part=>decodeURIComponent(part));
  if(decoded.some(part=>!part||part==='.'||part==='..'||/[\\/\u0000-\u001f\u007f]/.test(part))||['generated','_next'].includes(decoded[0]!))return;
  if('/'+decoded.map(part=>encodeURIComponent(part)).join('/')!==value||decoded.at(-1)!=='__next._tree.txt')return;
  return value;
 }catch{return;}
}
function reference(value:unknown,kind:'manifest'|'pack'):NavigationFile{
 const file=object(value);requireThat(typeof file.url==='string'&&typeof file.sha256==='string'&&digestPattern.test(file.sha256)&&integer(file.bytes)&&file.bytes>0&&file.bytes<=(kind==='pack'?NAVIGATION_PACK_LIMIT:NAVIGATION_MANIFEST_LIMIT));
 requireThat(file.url===`/generated/navigation/${kind}-${file.sha256}.json`);
 return{url:file.url,bytes:file.bytes,sha256:file.sha256};
}
export function readNavigationBinding(value:unknown):NavigationBinding{
 const binding=object(value);fields(binding,['schemaVersion','sourceCommit','manifest']);requireThat(binding.schemaVersion===1&&source(binding.sourceCommit));fields(object(binding.manifest),['url','bytes','sha256']);
 return{schemaVersion:1,sourceCommit:binding.sourceCommit,manifest:reference(binding.manifest,'manifest')};
}
/** Callers supply the digest of actual bytes, before parsing any authenticated JSON. */
export function readNavigationManifest(bytes:Uint8Array,binding:NavigationBinding,actualDigest:string):NavigationManifest{
 requireThat(bytes.byteLength===binding.manifest.bytes&&bytes.byteLength<=NAVIGATION_MANIFEST_LIMIT&&actualDigest===binding.manifest.sha256);
 const value=object(JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(bytes)));fields(value,['schemaVersion','sourceCommit','packs']);requireThat(value.schemaVersion===1&&value.sourceCommit===binding.sourceCommit&&Array.isArray(value.packs)&&value.packs.length>0&&value.packs.length<=16);
 let previous='';const packs=value.packs.map(raw=>{const row=object(raw);fields(row,['bucket','url','bytes','sha256','rows']);requireThat(typeof row.bucket==='string'&&/^[a-f0-9]$/.test(row.bucket)&&row.bucket>previous&&integer(row.rows)&&row.rows>0&&row.rows<=NAVIGATION_ROWS_LIMIT);previous=row.bucket;return{...reference(row,'pack'),bucket:row.bucket,rows:row.rows};});
 return{schemaVersion:1,sourceCommit:binding.sourceCommit,packs};
}
export function readNavigationPack(bytes:Uint8Array,descriptor:NavigationPackRef,sourceCommit:string,actualDigest:string):DecodedNavigationRow[]{
 requireThat(bytes.byteLength===descriptor.bytes&&bytes.byteLength<=NAVIGATION_PACK_LIMIT&&actualDigest===descriptor.sha256);
 const value=object(JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(bytes)));fields(value,['schemaVersion','sourceCommit','bucket','rows']);requireThat(value.schemaVersion===1&&value.sourceCommit===sourceCommit&&value.bucket===descriptor.bucket&&Array.isArray(value.rows)&&value.rows.length===descriptor.rows);
 let previous='',expanded=0;
 return value.rows.map(raw=>{
  const row=object(raw);fields(row,['path','bytes','sha256','data']);requireThat(typeof row.path==='string'&&treeRequestPath(row.path)===row.path&&row.path>previous&&integer(row.bytes)&&typeof row.sha256==='string'&&digestPattern.test(row.sha256)&&typeof row.data==='string');previous=row.path;
  expanded+=row.bytes;requireThat(expanded<=NAVIGATION_PACK_LIMIT&&row.data.length===4*Math.ceil(row.bytes/3)&&/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(row.data));
  const decoded=atob(row.data);requireThat(decoded.length===row.bytes&&btoa(decoded)===row.data);
  const body=Uint8Array.from(decoded,character=>character.charCodeAt(0));return{path:row.path,bytes:row.bytes,sha256:row.sha256,data:row.data,body};
 });
}
export function verifyNavigationRow(row:DecodedNavigationRow,bodyDigest:string,pathDigest:string,bucket:string):void{requireThat(bodyDigest===row.sha256&&pathDigest[0]===bucket);}
export async function navigationDigest(bytes:Uint8Array):Promise<string>{const result=await crypto.subtle.digest('SHA-256',new Uint8Array(bytes));return Array.from(new Uint8Array(result),n=>n.toString(16).padStart(2,'0')).join('');}
async function fetchBounded(origin:string,file:NavigationFile,fetcher:typeof fetch):Promise<Uint8Array>{
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),10_000);let response:Response|undefined;
 try{
  response=await fetcher(new URL(file.url,origin),{method:'GET',redirect:'error',credentials:'omit',signal:controller.signal});
  requireThat(response.status===200&&(!response.url||new URL(response.url).href===new URL(file.url,origin).href)&&/^application\/json(?:\s*;|$)/i.test(response.headers.get('content-type')??'')&&response.body);
  const declared=response.headers.get('content-length'),encoding=response.headers.get('content-encoding');if(declared!==null&&(!encoding||encoding==='identity'))requireThat(/^\d+$/.test(declared)&&Number(declared)===file.bytes);
  const reader=response.body.getReader(),chunks:Uint8Array[]=[];let total=0;
  try{for(;;){const {done,value}=await reader.read();if(done)break;total+=value.byteLength;requireThat(total<=file.bytes);chunks.push(value);}}finally{await reader.cancel().catch(()=>{});}
  requireThat(total===file.bytes);const bytes=new Uint8Array(total);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}return bytes;
 }finally{clearTimeout(timer);controller.abort();if(response?.body&&!response.body.locked)await response.body.cancel().catch(()=>{});}
}
const responseHeaders=(row:DecodedNavigationRow)=>({'content-type':'text/plain; charset=utf-8','content-length':String(row.bytes),'cache-control':'public, max-age=0, must-revalidate','x-content-type-options':'nosniff','etag':'"'+row.sha256+'"'});
/** The binding is compiled into the provider entry, never fetched from a mutable latest URL. */
export function createNavigationHandler(value:unknown,fetcher:typeof fetch=fetch):(request:Request)=>Promise<Response|undefined>{
 const binding=readNavigationBinding(value);
 interface Session {manifest?:Promise<NavigationManifest>;pending:Map<string,Promise<Map<string,DecodedNavigationRow>>>;cache:Map<string,Map<string,DecodedNavigationRow>>}
 const origins=new Map<string,Session>();
 return async request=>{
  const target=new URL(request.url),pathname=treeRequestPath(target.pathname);
  if(!pathname||!['GET','HEAD'].includes(request.method)||!['https:','http:'].includes(target.protocol))return;
  try{
   let session=origins.get(target.origin);if(!session){if(origins.size>=2)origins.delete(origins.keys().next().value!);session={pending:new Map(),cache:new Map()};origins.set(target.origin,session);}const current=session;
   current.manifest??=fetchBounded(target.origin,binding.manifest,fetcher).then(async bytes=>readNavigationManifest(bytes,binding,await navigationDigest(bytes))).catch(error=>{delete current.manifest;throw error;});
   const manifest=await current.manifest,bucket=(await navigationDigest(encoder.encode(pathname)))[0]!,descriptor=manifest.packs.find(pack=>pack.bucket===bucket);if(!descriptor)return;
   let rows=current.cache.get(descriptor.url);
   if(!rows){
    let pending=current.pending.get(descriptor.url);
    if(!pending){pending=(async()=>{
     const bytes=await fetchBounded(target.origin,descriptor,fetcher),decoded=readNavigationPack(bytes,descriptor,binding.sourceCommit,await navigationDigest(bytes));
     for(const row of decoded)verifyNavigationRow(row,await navigationDigest(row.body),await navigationDigest(encoder.encode(row.path)),bucket);
     const result=new Map(decoded.map(row=>[row.path,row]));if(current.cache.size>=2)current.cache.delete(current.cache.keys().next().value!);current.cache.set(descriptor.url,result);return result;
    })().finally(()=>current.pending.delete(descriptor.url));current.pending.set(descriptor.url,pending);}rows=await pending;
   }
   const row=rows.get(pathname);if(!row)return;const headers=responseHeaders(row);
   if(request.headers.get('if-none-match')===headers.etag){const {['content-length']:_length,...revalidated}=headers;return new Response(null,{status:304,headers:revalidated});}
   return new Response(request.method==='HEAD'?null:new Uint8Array(row.body),{status:200,headers});
  }catch{return new Response('Navigation data unavailable',{status:503,headers:{'content-type':'text/plain; charset=utf-8','cache-control':'no-store','x-content-type-options':'nosniff'}});}
 };
}
