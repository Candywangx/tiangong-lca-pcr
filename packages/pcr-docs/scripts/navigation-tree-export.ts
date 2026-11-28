import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash,randomBytes} from 'node:crypto';
import {NAVIGATION_BINDING_FILE,NAVIGATION_PACK_LIMIT,NAVIGATION_ROWS_LIMIT,NAVIGATION_MANIFEST_LIMIT,PREFETCH_BUCKETS,PREFETCH_LIMIT,PREFETCH_NAME,navigationBucket,prefetchKey,prefetchRequestPath,treeRequestPath,readNavigationBinding,readNavigationManifest,readNavigationPack,verifyNavigationRow,type NavigationBinding,type NavigationManifest,type NavigationRow,type DecodedNavigationRow} from '../lib/navigation-trees.ts';
const providerFile='generated/provider-runtime.json';
const hash=(bytes:string|Uint8Array)=>createHash('sha256').update(bytes).digest('hex');
const json=(value:unknown)=>Buffer.from(JSON.stringify(value)+'\n');
const route=(relative:string)=>'/'+relative.split('/').map(encodeURIComponent).join('/');
const navigationIndex=(relative:string)=>!['generated','_next'].includes(relative.split('/')[0]!)&&path.posix.basename(relative)==='index.txt';
export interface NavigationInventoryFile {path:string;bytes:number;sha256?:string}
export interface NavigationProbe {path:string;bytes:number;sha256:string}
export interface NavigationWebProof {binding:NavigationProbe;manifest:NavigationProbe;packs:NavigationProbe[];samples:NavigationProbe[]}
export const NAVIGATION_SAMPLE_PATHS=['/__next._tree.txt','/en/docs/pcr/__next._tree.txt','/zh/docs/pcr/__next._tree.txt'] as const;
const prefetchLocales=['/en/docs/','/zh/docs/'] as const;
export interface NavigationPlan {added:{path:string;body:Buffer}[];removed:string[];provider:Buffer;binding:NavigationBinding;baseline:{path:string;identity:string;sha256:string}[]}
const identity=(stat:fs.Stats)=>[stat.dev,stat.ino,stat.size,stat.mode,stat.mtimeMs,stat.ctimeMs,stat.nlink].join(':');
function read(root:string,name:string,limit:number):Buffer{
 assert(name&&!path.isAbsolute(name)&&!name.split('/').some(part=>!part||part==='.'||part==='..')&&!/[\\\0]/.test(name));
 const canonical=fs.realpathSync(root),file=path.join(canonical,name);let cursor=canonical;
 for(const part of name.split('/')){cursor=path.join(cursor,part);assert(!fs.lstatSync(cursor).isSymbolicLink(),'Navigation transport refuses symlinks');}
 assert.equal(fs.realpathSync(file),file);const stat=fs.lstatSync(file);assert(stat.isFile()&&stat.size<=limit,'Unbounded navigation artifact');
 const fd=fs.openSync(file,fs.constants.O_RDONLY|fs.constants.O_NOFOLLOW);try{const body=fs.readFileSync(fd),after=fs.fstatSync(fd);assert.equal(identity(after),identity(stat),'Navigation file changed during read');assert.equal(identity(fs.lstatSync(file)),identity(stat),'Navigation path changed during read');assert.equal(fs.realpathSync(file),file);assert.equal(body.length,stat.size);return body;}finally{fs.closeSync(fd);}
}
export function navigationFiles(root:string):NavigationInventoryFile[]{
 const files:NavigationInventoryFile[]=[];let entries=0;const visit=(relative:string)=>{for(const name of fs.readdirSync(path.join(root,relative)).sort()){assert(++entries<=100000);const file=relative?relative+'/'+name:name,stat=fs.lstatSync(path.join(root,file));assert(!stat.isSymbolicLink());if(stat.isDirectory())visit(file);else{assert(stat.isFile()&&stat.size<25000000&&files.length<40000);files.push({path:file,bytes:stat.size});}}};visit('');return files;
}
function expectedTrees(files:readonly NavigationInventoryFile[]):string[]{return files.filter(file=>navigationIndex(file.path)).map(file=>path.posix.join(path.posix.dirname(file.path),'__next._tree.txt')).sort();}
function expectedPrefetch(files:readonly NavigationInventoryFile[]):string[]{
 return files.filter(file=>navigationIndex(file.path)&&prefetchLocales.some(prefix=>('/'+file.path).startsWith(prefix)))
  .map(file=>path.posix.join(path.posix.dirname(file.path),PREFETCH_NAME)).sort();
}
function physicalPrefetch(files:readonly NavigationInventoryFile[]):NavigationInventoryFile[]{
 return files.filter(file=>path.posix.basename(file.path)===PREFETCH_NAME&&prefetchRequestPath(route(file.path)));
}
function packBody(sourceCommit:string,bucket:string,rows:NavigationRow[]):Buffer{
 return json({schemaVersion:bucket.startsWith('p')?2:1,sourceCommit,bucket,rows});
}
/** Only original primary-language Next page prefetches can enter the optional transport. */
function selectPrefetch(files:readonly NavigationInventoryFile[],sourceCommit:string):NavigationInventoryFile[]{
 const candidates=physicalPrefetch(files);
 assert.deepEqual(candidates.map(file=>file.path).sort(),expectedPrefetch(files),'Unexpected Next page prefetch inventory');
 const ordered=candidates.map(file=>({file,url:route(file.path)}));
 ordered.sort((a,b)=>a.file.bytes-b.file.bytes||(a.url<b.url?-1:1));
 const buckets=new Map<string,{bytes:number;rows:number}>();
 const selected:NavigationInventoryFile[]=[];
 for(const {file,url} of ordered){
  const bucket=navigationBucket(url,hash(url));
  const current=buckets.get(bucket)??{bytes:packBody(sourceCommit,bucket,[]).length,rows:0};
  const size=json({path:url,bytes:file.bytes,sha256:'0'.repeat(64),data:''}).length-1+4*Math.ceil(file.bytes/3);
  const nextBytes=current.bytes+size+Number(current.rows>0);
  if(nextBytes>NAVIGATION_PACK_LIMIT||current.rows===NAVIGATION_ROWS_LIMIT)continue;
  buckets.set(bucket,{bytes:nextBytes,rows:current.rows+1});selected.push(file);
  if(selected.length===PREFETCH_LIMIT)break;
 }
 assert(prefetchLocales.every(prefix=>selected.some(file=>('/'+file.path).startsWith(prefix))),'Missing bounded page-prefetch representatives');
 return selected;
}
export function planNavigationTrees(root:string,sourceCommit:string,files:readonly NavigationInventoryFile[],packPrefetch=false):NavigationPlan|undefined{
 if(!files.some(file=>file.path===providerFile))return;
 const providerBody=read(root,providerFile,1000000),provider:Record<string,unknown>=JSON.parse(providerBody.toString());if(provider.schemaVersion!==2&&provider.schemaVersion!==3)return;if(provider.schemaVersion===2&&Object.hasOwn(provider,'identityMoves')&&!Object.hasOwn(provider,'navigationBinding'))return;
 const baseline:NavigationPlan['baseline']=[{path:providerFile,identity:identity(fs.lstatSync(path.join(root,providerFile))),sha256:hash(providerBody)}];
 assert.equal(provider.sourceCommit,sourceCommit);assert.equal(provider.navigationBinding,null,'Navigation preparation requires a fresh unbound profile');
 assert(!files.some(file=>file.path===NAVIGATION_BINDING_FILE||file.path.startsWith('generated/navigation/')),'Refusing existing navigation transport');
 const trees=expectedTrees(files),actual=files.filter(file=>path.posix.basename(file.path)==='__next._tree.txt').map(file=>file.path).sort();assert.deepEqual(actual,trees,'Every route must have exactly one original tree payload');assert(trees.length>0);
 const prefetch=packPrefetch?selectPrefetch(files,sourceCommit):[];
 const prefetchKeys=[...new Set(prefetch.map(file=>prefetchKey(hash(route(file.path)))))].sort().join('');
 const removed=[...trees,...prefetch.map(file=>file.path)];
 const buckets=new Map<string,NavigationRow[]>();
 for(const file of removed){const body=read(root,file,NAVIGATION_PACK_LIMIT),url=route(file),bucket=navigationBucket(url,hash(url)),rows=buckets.get(bucket)??[],sha256=hash(body);baseline.push({path:file,identity:identity(fs.lstatSync(path.join(root,file))),sha256});rows.push({path:url,bytes:body.length,sha256,data:body.toString('base64')});buckets.set(bucket,rows);}
 const added:NavigationPlan['added']=[],packs:NavigationManifest['packs']=[];
 for(const [bucket,rows] of [...buckets].sort(([a],[b])=>a<b?-1:1)){
  rows.sort((a,b)=>a.path<b.path?-1:1);assert(rows.length<=NAVIGATION_ROWS_LIMIT,'Navigation bucket exceeds its row bound');const body=packBody(sourceCommit,bucket,rows);assert(body.length<=NAVIGATION_PACK_LIMIT,'Navigation bucket exceeds its byte bound');
  const sha256=hash(body),url='/generated/navigation/pack-'+sha256+'.json';packs.push({bucket,url,bytes:body.length,sha256,rows:rows.length});added.push({path:url.slice(1),body});
 }
 const schemaVersion=packPrefetch?2:1;
 const manifest=json({schemaVersion,sourceCommit,packs}),manifestHash=hash(manifest),manifestUrl='/generated/navigation/manifest-'+manifestHash+'.json';
 const binding=readNavigationBinding({schemaVersion,sourceCommit,manifest:{url:manifestUrl,bytes:manifest.length,sha256:manifestHash},...(packPrefetch?{prefetchKeys}:{})}),bindingBody=json(binding);
 added.push({path:manifestUrl.slice(1),body:manifest},{path:NAVIGATION_BINDING_FILE,body:bindingBody});
 // Exact original byte comparison precedes every mutation of the owned export.
 const removedPaths=new Set(removed),contents=new Map(added.map(file=>[file.path,file.body]));
 const decoded=verifyNavigationInventory(contents,sourceCommit,[...files.filter(file=>!removedPaths.has(file.path)),...added.map(file=>({path:file.path,bytes:file.body.length,sha256:hash(file.body)}))]);
 for(const row of decoded.rows.values())assert(read(root,decodeURIComponent(row.path.slice(1)),NAVIGATION_PACK_LIMIT).equals(Buffer.from(row.body)),'Original navigation payload changed');
 provider.navigationBinding={path:NAVIGATION_BINDING_FILE,bytes:bindingBody.length,sha256:'sha256:'+hash(bindingBody)};
 return{added,removed,provider:json(provider),binding,baseline};
}
export function applyNavigationPlan(root:string,plan:NavigationPlan):void{
 root=fs.realpathSync(root);
 const unchanged=(row:NavigationPlan['baseline'][number])=>{assert.equal(identity(fs.lstatSync(path.join(root,row.path))),row.identity,'Navigation original changed after planning');assert.equal(hash(read(root,row.path,NAVIGATION_PACK_LIMIT)),row.sha256,'Navigation original changed after planning');};
 plan.baseline.forEach(unchanged);
 const directory=(name:string)=>{let current=root;for(const part of name.split('/')){current=path.join(current,part);if(!fs.existsSync(current))fs.mkdirSync(current);const stat=fs.lstatSync(current);assert(stat.isDirectory()&&!stat.isSymbolicLink()&&fs.realpathSync(current)===current,'Navigation output parent changed');}};
 for(const file of plan.added){directory(path.posix.dirname(file.path));fs.writeFileSync(path.join(root,file.path),file.body,{flag:'wx'});}
 const temporary=path.join(root,'generated','.navigation-provider-'+randomBytes(8).toString('hex')+'.tmp');
 try{
  directory('generated');fs.writeFileSync(temporary,plan.provider,{flag:'wx'});plan.baseline.forEach(unchanged);fs.renameSync(temporary,path.join(root,providerFile));
  const original=new Map(plan.baseline.map(row=>[row.path,row]));
  for(const file of plan.removed){unchanged(original.get(file)!);fs.unlinkSync(path.join(root,file));}
 }finally{fs.rmSync(temporary,{force:true});}
}
export function verifyNavigationInventory(contents:ReadonlyMap<string,Buffer>,sourceCommit:string,files:readonly NavigationInventoryFile[]):{binding:NavigationBinding;bindingFile:NavigationProbe;manifest:NavigationManifest;rows:Map<string,DecodedNavigationRow>}{
 const bytes=contents.get(NAVIGATION_BINDING_FILE);assert(bytes&&bytes.length<=4096,'Missing or unbounded compiled navigation binding');const binding=readNavigationBinding(JSON.parse(bytes.toString('utf8')));assert.equal(binding.sourceCommit,sourceCommit);
 const manifestBytes=contents.get(binding.manifest.url.slice(1));assert(manifestBytes,'Missing navigation manifest');const manifest=readNavigationManifest(manifestBytes,binding,hash(manifestBytes));const rows=new Map<string,DecodedNavigationRow>();
 const required=new Set([NAVIGATION_BINDING_FILE,binding.manifest.url.slice(1),...manifest.packs.map(pack=>pack.url.slice(1))]);
 for(const descriptor of manifest.packs){const pack=contents.get(descriptor.url.slice(1));assert(pack,'Missing navigation pack');for(const row of readNavigationPack(pack,descriptor,sourceCommit,hash(pack))){verifyNavigationRow(row,hash(row.body),hash(row.path),descriptor.bucket);assert(!rows.has(row.path),'Duplicate navigation route');rows.set(row.path,row);}}
 const paths=[...rows.keys()];
 assert.deepEqual(paths.filter(treeRequestPath).sort(),expectedTrees(files).map(route).sort(),'Navigation route inventory differs from physical route indexes');
 assert(!files.some(file=>path.posix.basename(file.path)==='__next._tree.txt'),'Packed tree has a conflicting physical original');
 if(binding.schemaVersion===2){
  const packed=paths.filter(prefetchRequestPath);
  const physical=physicalPrefetch(files).map(file=>route(file.path));
  assert.deepEqual([...packed,...physical].sort(),expectedPrefetch(files).map(route).sort(),'Page prefetch inventory differs from physical route indexes');
  const keys=[...new Set(packed.map(url=>prefetchKey(hash(url))))].sort().join('');
  assert.equal(keys,binding.prefetchKeys,'Page prefetch membership differs from the compiled binding');
 }
 const actual=files.filter(file=>file.path===NAVIGATION_BINDING_FILE||file.path.startsWith('generated/navigation/'));assert.deepEqual(actual.map(file=>file.path).sort(),[...required].sort(),'Navigation artifact set differs');
 for(const file of actual){const body=contents.get(file.path);assert(body&&body.length===file.bytes);if(file.sha256)assert.equal(file.sha256.replace(/^sha256:/,''),hash(body));}
 return{binding,bindingFile:{path:'/'+NAVIGATION_BINDING_FILE,bytes:bytes.length,sha256:'sha256:'+hash(bytes)},manifest,rows};
}
/** The bounded list is declared before archive streaming; no trust in archive member order. */
export function navigationProbeFiles(value:unknown):string[]{
 if(value===undefined)return[];
 assert(value&&typeof value==='object'&&!Array.isArray(value),'Invalid navigation web proof');const proof=value as Record<string,unknown>;assert.deepEqual(Object.keys(proof).sort(),['binding','manifest','packs','samples']);
 function probe(value:unknown,expected:string|undefined,maximum:number):NavigationProbe{assert(value&&typeof value==='object'&&!Array.isArray(value));const p=value as Record<string,unknown>;assert.deepEqual(Object.keys(p).sort(),['bytes','path','sha256']);assert(typeof p.path==='string'&&typeof p.sha256==='string'&&/^sha256:[a-f0-9]{64}$/.test(p.sha256)&&typeof p.bytes==='number'&&Number.isSafeInteger(p.bytes)&&p.bytes>0&&p.bytes<=maximum);if(expected)assert.equal(p.path,expected);return{path:p.path,bytes:p.bytes,sha256:p.sha256};}
 const binding=probe(proof.binding,'/'+NAVIGATION_BINDING_FILE,4096),manifest=probe(proof.manifest,undefined,NAVIGATION_MANIFEST_LIMIT);assert.equal(manifest.path,'/generated/navigation/manifest-'+manifest.sha256.slice(7)+'.json');
 assert(Array.isArray(proof.samples));
 const hasPrefetch=proof.samples.length===NAVIGATION_SAMPLE_PATHS.length+prefetchLocales.length;
 assert(Array.isArray(proof.packs)&&proof.packs.length>0&&proof.packs.length<=16+(hasPrefetch?PREFETCH_BUCKETS:0));
 const packs=proof.packs.map(value=>{const p=probe(value,undefined,NAVIGATION_PACK_LIMIT);assert.equal(p.path,'/generated/navigation/pack-'+p.sha256.slice(7)+'.json');return p;});assert.equal(new Set(packs.map(p=>p.path)).size,packs.length);
 assert(hasPrefetch||proof.samples.length===NAVIGATION_SAMPLE_PATHS.length);
 proof.samples.forEach((p,i)=>{
  const sample=probe(p,NAVIGATION_SAMPLE_PATHS[i],NAVIGATION_PACK_LIMIT);
  const locale=prefetchLocales[i-NAVIGATION_SAMPLE_PATHS.length];
  if(locale)assert(sample.path.startsWith(locale)&&prefetchRequestPath(sample.path)===sample.path,'Invalid page prefetch representative');
 });
 return[binding.path,manifest.path,...packs.map(p=>p.path)].map(p=>p.slice(1));
}
export function navigationWebProof(verified:ReturnType<typeof verifyNavigationInventory>):NavigationWebProof{
 const descriptor=(ref:{url:string;bytes:number;sha256:string}):NavigationProbe=>({path:ref.url,bytes:ref.bytes,sha256:'sha256:'+ref.sha256});
 const samples:string[]=[...NAVIGATION_SAMPLE_PATHS];
 if(verified.binding.schemaVersion===2){
  const urls=[...verified.rows.keys()].filter(prefetchRequestPath).sort();
  for(const locale of prefetchLocales){
   const sample=urls.find(url=>url.startsWith(locale));assert(sample,'Missing page prefetch representative');samples.push(sample);
  }
 }
 const proof={binding:verified.bindingFile,manifest:descriptor(verified.binding.manifest),packs:verified.manifest.packs.map(descriptor),samples:samples.map(path=>{const row=verified.rows.get(path);assert(row,'Missing navigation representative');return{path,bytes:row.bytes,sha256:'sha256:'+row.sha256};})};navigationProbeFiles(proof);return proof;
}
export function verifyNavigationTrees(root:string,sourceCommit:string,required=false):ReturnType<typeof verifyNavigationInventory>|undefined{
 if(!fs.existsSync(path.join(root,NAVIGATION_BINDING_FILE))){assert(!required,'Missing compiled navigation binding');return;}
 const files=navigationFiles(root),contents=new Map<string,Buffer>();for(const file of files)if(file.path===NAVIGATION_BINDING_FILE||file.path.startsWith('generated/navigation/'))contents.set(file.path,read(root,file.path,NAVIGATION_PACK_LIMIT));
 return verifyNavigationInventory(contents,sourceCommit,files);
}
