import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {createServer} from 'node:http';
import {gzipSync} from 'node:zlib';
import {prepareStaticRouteAliases} from './static-route-aliases.ts';
import {verifyNavigationTrees,planNavigationTrees,applyNavigationPlan,navigationFiles,navigationWebProof,navigationProbeFiles} from './navigation-tree-export.ts';
import {createNavigationHandler,readNavigationBinding,readNavigationManifest,readNavigationPack,verifyNavigationRow,treeRequestPath} from '../lib/navigation-trees.ts';
const hash=(bytes:string|Uint8Array)=>createHash('sha256').update(bytes).digest('hex');
const source='a'.repeat(40),url='/en/docs/pcr/a/b/c/__next._tree.txt',body=Buffer.from('0:{"tree":"完整😀"}\n');
function fixture(){
 const bucket=hash(url)[0]!,pack=Buffer.from(JSON.stringify({schemaVersion:1,sourceCommit:source,bucket,rows:[{path:url,bytes:body.length,sha256:hash(body),data:body.toString('base64')}]}));
 const descriptor={bucket,url:'/generated/navigation/pack-'+hash(pack)+'.json',bytes:pack.length,sha256:hash(pack),rows:1};
 const manifest=Buffer.from(JSON.stringify({schemaVersion:1,sourceCommit:source,packs:[descriptor]}));
 const binding={schemaVersion:1,sourceCommit:source,manifest:{url:'/generated/navigation/manifest-'+hash(manifest)+'.json',bytes:manifest.length,sha256:hash(manifest)}};
 const assets=new Map([[descriptor.url,pack],[binding.manifest.url,manifest]]);const calls:string[]=[];
 const loader:typeof fetch=async(input)=>{const path=new URL(String(input)).pathname;calls.push(path);const bytes=assets.get(path);return bytes?new Response(bytes,{headers:{'content-type':'application/json'}}):new Response(null,{status:404});};
 return{bucket,pack,descriptor,manifest,binding,assets,calls,loader};
}
test('compiled binding restores original GET/HEAD/query bytes and leaves unknown routes alone',async()=>{
 const f=fixture(),handler=createNavigationHandler(f.binding,f.loader);
 for(const suffix of ['', '?_rsc=abc&q=a+b&q=%2F']){const response=await handler(new Request('https://example.test'+url+suffix));assert.ok(response);assert.equal(response.status,200);assert.deepEqual(Buffer.from(await response.arrayBuffer()),body);assert.equal(response.headers.get('content-type'),'text/plain; charset=utf-8');assert.equal(response.headers.get('x-content-type-options'),'nosniff');assert.equal(response.headers.get('cache-control'),'public, max-age=0, must-revalidate');}
 const head=await handler(new Request('https://example.test'+url,{method:'HEAD'}));assert.ok(head);assert.equal((await head.arrayBuffer()).byteLength,0);assert.equal(head.headers.get('content-length'),String(body.length));
 assert.equal(await handler(new Request('https://example.test/missing/__next._tree.txt')),undefined);
 assert.equal(await handler(new Request('https://example.test'+url,{method:'POST'})),undefined);
 assert.deepEqual(f.calls,[f.binding.manifest.url,f.descriptor.url]);
});
test('physical hashes are checked before JSON and a failed fetch can retry',async()=>{
 const f=fixture(),handler=createNavigationHandler(f.binding,f.loader);f.assets.set(f.descriptor.url,Buffer.from('corrupt'));
 assert.equal((await handler(new Request('https://example.test'+url)))?.status,503);
 f.assets.set(f.descriptor.url,f.pack);assert.equal((await handler(new Request('https://example.test'+url)))?.status,200);
});
test('binding and request paths reject foreign URLs, noncanonical paths and unbounded descriptors',()=>{
 const f=fixture();for(const change of [{sourceCommit:'bad'},{manifest:{...f.binding.manifest,url:'https://foreign.test/pack.json'}},{manifest:{...f.binding.manifest,bytes:1000000}},{extra:true}])assert.throws(()=>readNavigationBinding({...f.binding,...change}));
 for(const value of ['/generated/raw/__next._tree.txt','/_next/__next._tree.txt','/a%2fb/__next._tree.txt','/a/../__next._tree.txt','//__next._tree.txt','/__next._tree.txt?x=1','/__next._full.txt'])assert.equal(treeRequestPath(value),undefined);
});
test('preparation restores every original tree and independently checks physical route coverage',()=>{
 const out=fs.mkdtempSync(path.join(os.tmpdir(),'navigation-export-'));
 const put=(name:string,body:string|Buffer)=>{const file=path.join(out,name);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,body);};
 try{
  put('generated/provider-runtime.json',JSON.stringify({schemaVersion:2,sourceCommit:source,navigationBinding:null}));
  for(const route of ['', 'en/docs/pcr', 'zh/docs/pcr']){const prefix=route?route+'/':'';put(prefix+'index.txt','complete '+route);put(prefix+'__next._full.txt','complete '+route);put(prefix+'__next._tree.txt',body);put(prefix+'index.html','<h1>Unchanged</h1>');}
  prepareStaticRouteAliases(out,source);const verified=verifyNavigationTrees(out,source,true)!;assert.equal(verified.rows.size,3);assert.deepEqual(Buffer.from(verified.rows.get('/en/docs/pcr/__next._tree.txt')!.body),body);assert.equal(fs.existsSync(path.join(out,'en/docs/pcr/__next._tree.txt')),false);
  put('extra/index.txt','unaccounted');assert.throws(()=>verifyNavigationTrees(out,source,true),/route inventory/);
 }finally{fs.rmSync(out,{recursive:true,force:true});}
});
test('real gzip fetch retains compressed Content-Length while restoring bounded decoded JSON',async()=>{
 const f=fixture(),server=createServer((request,response)=>{const body=f.assets.get(request.url??'');if(!body){response.writeHead(404);response.end();return;}const gzip=gzipSync(body);response.writeHead(200,{'content-type':'application/json','content-encoding':'gzip','content-length':gzip.length});response.end(gzip);});
 await new Promise<void>(resolve=>server.listen(0,'127.0.0.1',resolve));
 try{const address=server.address();assert.ok(address&&typeof address==='object');const response=await createNavigationHandler(f.binding)(new Request(`http://127.0.0.1:${address.port}`+url));assert.equal(response?.status,200);assert.deepEqual(Buffer.from(await response!.arrayBuffer()),body);}finally{server.closeAllConnections();await new Promise<void>(resolve=>server.close(()=>resolve()));}
});
test('a changed original cannot be removed or rebound after planning',()=>{
 const out=fs.mkdtempSync(path.join(os.tmpdir(),'navigation-cas-'));fs.mkdirSync(path.join(out,'generated'));
 try{fs.writeFileSync(path.join(out,'generated/provider-runtime.json'),JSON.stringify({schemaVersion:2,sourceCommit:source,navigationBinding:null}));fs.writeFileSync(path.join(out,'index.txt'),'index');fs.writeFileSync(path.join(out,'__next._tree.txt'),'ORIGINAL');
  const plan=planNavigationTrees(out,source,navigationFiles(out))!;fs.writeFileSync(path.join(out,'__next._tree.txt'),'MODIFIED');
  assert.throws(()=>applyNavigationPlan(out,plan),/changed/);assert.equal(fs.readFileSync(path.join(out,'__next._tree.txt'),'utf8'),'MODIFIED');assert.equal(fs.existsSync(path.join(out,'generated/navigation-binding.json')),false);
 }finally{fs.rmSync(out,{recursive:true,force:true});}
});

test('authenticated manifest rejects malformed fields, ordering, bounds and source substitution',()=>{
 const f=fixture();
 const invalid=[{sourceCommit:'b'.repeat(40)},{schemaVersion:2},{packs:[]},{packs:Array(17).fill(f.descriptor)},{packs:[f.descriptor,f.descriptor]},{packs:[{...f.descriptor,rows:513}]},{packs:[{...f.descriptor,bytes:1_000_001}]},{packs:[{...f.descriptor,url:'/foreign.json'}]},{extra:true}];
 for(const change of invalid){const bytes=Buffer.from(JSON.stringify({...JSON.parse(f.manifest.toString()),...change}));const binding=readNavigationBinding({...f.binding,manifest:{url:'/generated/navigation/manifest-'+hash(bytes)+'.json',bytes:bytes.length,sha256:hash(bytes)}});assert.throws(()=>readNavigationManifest(bytes,binding,hash(bytes)));}
 assert.throws(()=>readNavigationManifest(f.manifest,readNavigationBinding(f.binding),'0'.repeat(64)));
});
test('authenticated packs reject malformed rows, canonical encodings and wrong identities',()=>{
 const f=fixture(),original=JSON.parse(f.pack.toString()),row=original.rows[0];
 for(const change of [{path:'/a/../__next._tree.txt'},{bytes:body.length+1},{data:row.data+'='},{sha256:'bad'},{extra:true}]){const bytes=Buffer.from(JSON.stringify({...original,rows:[{...row,...change}]}));assert.throws(()=>readNavigationPack(bytes,{...f.descriptor,bytes:bytes.length,sha256:hash(bytes)},source,hash(bytes)));}
 for(const change of [{sourceCommit:'b'.repeat(40)},{bucket:'z'},{rows:[row,row]},{extra:true}]){const bytes=Buffer.from(JSON.stringify({...original,...change}));assert.throws(()=>readNavigationPack(bytes,{...f.descriptor,bytes:bytes.length,sha256:hash(bytes)},source,hash(bytes)));}
 const decoded=readNavigationPack(f.pack,f.descriptor,source,hash(f.pack))[0]!;
 assert.throws(()=>verifyNavigationRow(decoded,'0'.repeat(64),hash(url),f.bucket));assert.throws(()=>verifyNavigationRow(decoded,hash(body),hash(url),'z'));
});
test('parallel requests share authenticated fetches, isolate origins and support ETag revalidation',async()=>{
 const f=fixture(),calls:string[]=[],loader:typeof fetch=async(input,init)=>{calls.push(new URL(String(input)).origin);await new Promise(resolve=>setTimeout(resolve,5));return f.loader(input,init);},handler=createNavigationHandler(f.binding,loader);
 const results=await Promise.all(Array.from({length:20},()=>handler(new Request('https://one.test'+url))));assert(results.every(result=>result?.status===200));assert.equal(calls.length,2);
 const etag=results[0]!.headers.get('etag')!;const revalidated=await handler(new Request('https://one.test'+url,{headers:{'if-none-match':etag}}));assert.equal(revalidated?.status,304);assert.equal(revalidated?.headers.has('content-length'),false);
 for(const origin of ['https://two.test','https://three.test','https://one.test'])assert.equal((await handler(new Request(origin+url)))?.status,200);
 assert.equal(calls.length,8);
});
test('failed manifest and hostile network responses fail closed and permit retry',async()=>{
 for(const mode of ['status','mime','length','oversize','truncated','redirect'] as const){const f=fixture();let invalid=true;const loader:typeof fetch=async(input,init)=>{if(!invalid)return f.loader(input,init);if(mode==='redirect')throw new Error('redirect refused');return new Response(mode==='oversize'?Buffer.concat([f.manifest,Buffer.from('x')]):mode==='truncated'?f.manifest.subarray(1):f.manifest,{status:mode==='status'?500:200,headers:{'content-type':mode==='mime'?'text/html':'application/json',...(mode==='length'?{'content-length':'1'}:{})}});};const handler=createNavigationHandler(f.binding,loader);const failed=await handler(new Request('https://example.test'+url));assert.equal(failed?.status,503);assert.equal(failed?.headers.get('cache-control'),'no-store');invalid=false;assert.equal((await handler(new Request('https://example.test'+url)))?.status,200);}
});
test('complete namespace and bounded product proofs reject missing, extra and substituted artifacts',()=>{
 const out=fs.mkdtempSync(path.join(os.tmpdir(),'navigation-proof-'));const put=(name:string,value:string)=>{const file=path.join(out,name);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,value);};
 try{put('generated/provider-runtime.json',JSON.stringify({schemaVersion:2,sourceCommit:source,navigationBinding:null}));for(const prefix of ['','en/docs/pcr/','zh/docs/pcr/']){put(prefix+'index.txt','full');put(prefix+'__next._full.txt','full');put(prefix+'__next._tree.txt','tree');}
  prepareStaticRouteAliases(out,source);const verified=verifyNavigationTrees(out,source,true)!,proof=navigationWebProof(verified);assert.equal(navigationProbeFiles(proof).length,verified.manifest.packs.length+2);
  assert.throws(()=>navigationProbeFiles({...proof,binding:{...proof.binding,path:'/foreign'}}));assert.throws(()=>navigationProbeFiles({...proof,packs:Array(17).fill(proof.packs[0])}));assert.throws(()=>navigationProbeFiles({...proof,samples:[]}));assert.throws(()=>verifyNavigationTrees(out,'b'.repeat(40),true));
  put('generated/navigation/extra.json','{}');assert.throws(()=>verifyNavigationTrees(out,source,true));fs.unlinkSync(path.join(out,'generated/navigation/extra.json'));
  put('__next._tree.txt','shadow');assert.throws(()=>verifyNavigationTrees(out,source,true));fs.unlinkSync(path.join(out,'__next._tree.txt'));
  const pack=path.join(out,verified.manifest.packs[0]!.url.slice(1));fs.unlinkSync(pack);assert.throws(()=>verifyNavigationTrees(out,source,true));
 }finally{fs.rmSync(out,{recursive:true,force:true});}
});

test('early rejected HTTP responses release their bodies and abort fetch signals',async()=>{
 for(const mode of ['status','mime','length'] as const){const f=fixture();let cancelled=false,signal:AbortSignal|null|undefined;const loader:typeof fetch=async(_input,init)=>{signal=init?.signal;return new Response(new ReadableStream({cancel(){cancelled=true;}}),{status:mode==='status'?500:200,headers:{'content-type':mode==='mime'?'text/html':'application/json',...(mode==='length'?{'content-length':'1'}:{})}});};
 assert.equal((await createNavigationHandler(f.binding,loader)(new Request('https://example.test'+url)))?.status,503);assert.equal(cancelled,true);assert.equal(signal?.aborted,true);}
});
