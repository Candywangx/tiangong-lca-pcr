import assert from 'node:assert/strict';
import {execFileSync,spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {appendFileSync,cpSync,mkdirSync,mkdtempSync,readFileSync,realpathSync,rmSync,writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import test,{type TestContext} from 'node:test';
import {gzipSync} from 'node:zlib';
import {sealedProductFixture} from '../../scripts/engineering/fixtures/sealed-product-fixture.ts';
import {record,type ProductManifest} from './release-types.ts';
import {detectProductRelease,productReleaseSpec,tagAndDispatchProduct,readProductArchive,validateProductManifest,verifyProductArtifacts,writeProductWebArchive,productTreeSha256} from './product-release.ts';

const put=(file:string,value:string|Uint8Array)=>{mkdirSync(path.dirname(file),{recursive:true});writeFileSync(file,value);};
const json=(file:string):Record<string,unknown>=>record(JSON.parse(readFileSync(file,'utf8')) as unknown);
const writeJson=(file:string,value:unknown)=>put(file,JSON.stringify(value)+'\n');
function set(value:unknown,keys:readonly string[],replacement:unknown){let target=record(value);for(const key of keys.slice(0,-1))target=record(target[key]);const last=keys.at(-1);assert.ok(last);target[last]=replacement;}
function temp(t:TestContext){const root=realpathSync(mkdtempSync(path.join(tmpdir(),'pcr-release-edges-')));t.after(()=>rmSync(root,{recursive:true,force:true}));return root;}
function persistManifest(root:string,manifest:ProductManifest){writeJson(path.join(root,'release.json'),manifest);const names=[...manifest.artifacts.map(a=>a.filename),'release.json'].sort();put(path.join(root,'SHA256SUMS'),names.map(name=>`${createHash('sha256').update(readFileSync(path.join(root,name))).digest('hex')}  ${name}\n`).join(''));}
function updateProof(root:string,manifest:ProductManifest,name:string){const bytes=readFileSync(path.join(root,name)),sha256=createHash('sha256').update(bytes).digest('hex');const proof=manifest.artifacts.find(x=>x.filename===name);assert.ok(proof);Object.assign(proof,{bytes:bytes.length,sha256});for(const kind of ['tool','library'] as const)if(manifest.packages[kind].filename===name)Object.assign(manifest.packages[kind],{bytes:bytes.length,sha256,integrity:`sha512-${createHash('sha512').update(bytes).digest('base64')}`});if(manifest.web.filename===name)Object.assign(manifest.web,{bytes:bytes.length,sha256});}
async function rewriteArchive(root:string,manifest:ProductManifest,kind:'tool'|'library'|'web',mutate:(tree:string)=>void){
 const name=kind==='web'?manifest.web.filename:manifest.packages[kind].filename,tree=path.join(root,'archive-input-'+kind);mkdirSync(tree);
 await readProductArchive(path.join(root,name),{allowDirectories:kind!=='web',onFileStart(entry){put(path.join(tree,entry.path),'');},onFileChunk(entry,chunk){appendFileSync(path.join(tree,entry.path),chunk);}});
 mutate(tree);const rewritten=path.join(root,'replacement.tar.gz'),proof=await writeProductWebArchive(tree,rewritten);cpSync(rewritten,path.join(root,name));rmSync(rewritten);rmSync(tree,{recursive:true});updateProof(root,manifest,name);if(kind==='web')Object.assign(manifest.web,proof);persistManifest(root,manifest);
}

test('manifest gates retain exact transport, source and toolchain bindings for malformed public inputs',async t=>{
 const f=await sealedProductFixture(t,false);
 const cases:readonly [string,readonly string[],unknown][]=[
 ['compatibility-null',['compatibility'],null],['compatibility-undefined',['compatibility'],undefined],['compatibility-extra-key',['compatibility'],{schema:1,libraryFormat:1,projectionContracts:['1','2'],minimumReaderVersion:'0.4.1',commandProtocol:1,extra:true}],['compatibility-duplicates',['compatibility','projectionContracts'],['1','1']],['unknown-schema',['schema'],2],['wrong-kind',['kind'],'unrelated'],['pins-absent',['toolchain'],null],['bad-node',['toolchain','node'],'24'],['bad-npm',['toolchain','npm'],null],
 ['packages-absent',['packages'],null],['unsafe-tool-filename',['packages','tool','filename'],'../tool.tgz'],['empty-artifact-set',['artifacts'],[]],
 ['web-zero-bytes',['web','bytes'],0],['web-zero-files',['web','files'],0],['web-fraction-files',['web','files'],1.5],['web-zero-total',['web','uncompressedBytes'],0],['web-bad-tree-hash',['web','treeSha256'],'sha256:invalid'],['web-foreign-origin',['web','origin'],'https://other.example'],
 ['probes-absent',['web','probes'],null],['counts-absent',['web','probes','counts'],null],['counts-negative',['web','probes','counts','pcrs'],-1],['counts-missing',['web','probes','counts'],{pcrs:1,pages:2,languages:2}],
 ['routes-absent',['web','probes','routes'],null],['routes-empty',['web','probes','routes'],[]],['raw-absent',['web','probes','rawDownload'],null],['raw-wrong-url',['web','probes','rawDownload','path'],'/other.json'],['raw-zero-size',['web','probes','rawDownload','bytes'],0],['raw-boundary-size',['web','probes','rawDownload','bytes'],25_000_000],['raw-malformed-hash',['web','probes','rawDownload','sha256'],'unbound'],
 ['tool-name',['packages','tool','name'],'@other/package'],['tool-version',['packages','tool','version'],'99.0.0'],['tool-tag',['packages','tool','tag'],'v99.0.0'],['tool-source',['packages','tool','sourceCommit'],'a'.repeat(40)],['tool-integrity',['packages','tool','integrity'],'invalid'],
 ['library-name',['packages','library','name'],'@other/library'],['library-version',['packages','library','version'],'99.0.0'],['library-tag',['packages','library','tag'],'v99.0.0'],['library-source',['packages','library','sourceCommit'],'a'.repeat(40)],['library-integrity',['packages','library','integrity'],'invalid'],
 ];
 for(const [name,keys,value]of cases)await t.test(name,()=>{const changed=structuredClone(f.manifest);set(changed,keys,value);assert.throws(()=>validateProductManifest(changed));});
 for(const name of ['node','npm'] as const)await t.test('wrong-source-'+name+'-pin',()=>assert.throws(()=>validateProductManifest(f.manifest,{toolchain:{...f.manifest.toolchain,[name]:'99.0.0'}}),/toolchain differs/u));
 for(const [name,mutate]of [
  ['duplicated-artifacts',(m:ProductManifest)=>{m.artifacts[1]=structuredClone(m.artifacts[0]!);}],
  ['artifact-bad-bytes',(m:ProductManifest)=>{assert.ok(m.artifacts[0]);m.artifacts[0].bytes=-1;}],
  ['artifact-bad-sha',(m:ProductManifest)=>{assert.ok(m.artifacts[0]);m.artifacts[0].sha256='0';}],
  ['route-swapped',(m:ProductManifest)=>m.web.probes.routes.reverse()],
  ['route-wrong-size',(m:ProductManifest)=>{assert.ok(m.web.probes.routes[0]);m.web.probes.routes[0].bytes=0;}],
  ['web-filename-binding',(m:ProductManifest)=>{const proof=m.artifacts.find(p=>p.filename===m.web.filename);assert.ok(proof);proof.filename='different-web.tar.gz';m.web.filename=proof.filename;}],
 ] satisfies readonly [string,(m:ProductManifest)=>void][])await t.test(name,()=>{const changed=structuredClone(f.manifest);mutate(changed);assert.throws(()=>validateProductManifest(changed));});
});

test('resealed real tarballs cannot disguise mismatched inner source, package, web or SQLite identities',async t=>{
 const f=await sealedProductFixture(t,false);let sequence=0;
 const run=async(name:string,change:(root:string,manifest:ProductManifest)=>Promise<void>|void,match:RegExp)=>t.test(name,async()=>{const root=path.join(f.base,'altered-'+sequence++);cpSync(f.root,root,{recursive:true});const manifest=structuredClone(f.manifest);await change(root,manifest);await assert.rejects(verifyProductArtifacts(root),match);});
 await run('checksum-list-reordered',root=>put(path.join(root,'SHA256SUMS'),readFileSync(path.join(root,'SHA256SUMS'),'utf8').trim().split('\n').reverse().join('\n')+'\n'),/checksum manifest differs/u);
 await run('valid-looking-wrong-npm-integrity',(root,m)=>{m.packages.tool.integrity='sha512-'+'A'.repeat(86)+'==';persistManifest(root,m);},/npm integrity differs/u);
 for(const key of ['name','version','gitHead'])await run('packed-'+key,(root,m)=>rewriteArchive(root,m,'tool',tree=>{const file=path.join(tree,'package/package.json'),data=json(file);data[key]=key==='gitHead'?'a'.repeat(40):'unrelated';writeJson(file,data);}),/Packed npm metadata differs/u);
 await run('packed-product-source',(root,m)=>rewriteArchive(root,m,'tool',tree=>{const file=path.join(tree,'package/product-release.json'),data=json(file);data.sourceCommit='a'.repeat(40);writeJson(file,data);}),/identities differ/u);
 await run('missing-packed-product-proof',(root,m)=>rewriteArchive(root,m,'tool',tree=>rmSync(path.join(tree,'package/product-release.json'))),/product identity|identities differ/iu);
 await run('missing-reader-capabilities',(root,m)=>rewriteArchive(root,m,'tool',tree=>rmSync(path.join(tree,'package/reader-capabilities.json'))),/reader capabilities/u);
 await run('false-reader-capabilities',(root,m)=>rewriteArchive(root,m,'tool',tree=>{const file=path.join(tree,'package/reader-capabilities.json'),data=json(file);data.libraryFormats=[1,2];writeJson(file,data);}),/implemented PCR reader/u);
 await run('malformed-reader-capabilities',(root,m)=>rewriteArchive(root,m,'tool',tree=>put(path.join(tree,'package/reader-capabilities.json'),'null')),/reader capabilities/u);
 await run('unsupported-required-contract',(root,m)=>{assert.ok(m.compatibility);m.compatibility.projectionContracts=['3'];persistManifest(root,m);},/do not satisfy/u);
 await run('minimum-reader-too-new',(root,m)=>{assert.ok(m.compatibility);m.compatibility.minimumReaderVersion='0.4.2';persistManifest(root,m);},/minimumReaderVersion/u);
 await run('consistent-wrong-sqlite-format',async(root,m)=>{const file=path.join(root,'library.sqlite.json'),data=json(file);data.format_version=2;writeJson(file,data);updateProof(root,m,'library.sqlite.json');await rewriteArchive(root,m,'library',tree=>writeJson(path.join(tree,'package/library.sqlite.json'),data));},/sidecar format/u);
 await run('foreign-npm-tree-entry',(root,m)=>rewriteArchive(root,m,'tool',tree=>put(path.join(tree,'outside.txt'),'not part of the npm package')),/non-package file/u);
 await run('archive-only-sqlite-replaced',(root,m)=>rewriteArchive(root,m,'library',tree=>put(path.join(tree,'package/library.sqlite'),'replacement database bytes')),/Portable SQLite assets differ/u);
 for(const key of ['source_commit','content_version'])await run('consistent-wrong-sqlite-'+key,async(root,m)=>{const sidecar=path.join(root,'library.sqlite.json'),data=json(sidecar);set(data,['snapshot',key],key==='source_commit'?'a'.repeat(40):'99.0.0');writeJson(sidecar,data);updateProof(root,m,'library.sqlite.json');await rewriteArchive(root,m,'library',tree=>writeJson(path.join(tree,'package/library.sqlite.json'),data));},/SQLite snapshot source\/version differs/u);
 await run('consistent-false-sqlite-hash',async(root,m)=>{const sidecar=path.join(root,'library.sqlite.json'),data=json(sidecar);data.sha256='sha256:'+'a'.repeat(64);writeJson(sidecar,data);updateProof(root,m,'library.sqlite.json');await rewriteArchive(root,m,'library',tree=>writeJson(path.join(tree,'package/library.sqlite.json'),data));},/SQLite file differs/u);
 for(const key of ['sourceCommit','releaseVersion','releaseTag','sourceFingerprint','counts'])await run('archived-web-'+key,(root,m)=>rewriteArchive(root,m,'web',tree=>{const file=path.join(tree,'generated/version.json'),data=json(file);data[key]=key==='counts'?{pcrs:900,pages:999,languages:2,sourceBytes:20}:'unrelated';writeJson(file,data);}),/Archived web version|Archived web counts/u);
 await run('archived-hosting-build-settings',(root,m)=>rewriteArchive(root,m,'web',tree=>writeJson(path.join(tree,'edgeone.json'),{buildCommand:'replace verified bytes',headers:[]})),/routing-only/u);
 await run('changed-web-probe-with-recomputed-tree',(root,m)=>rewriteArchive(root,m,'web',tree=>put(path.join(tree,'zh/docs/pcr/index.html'),'modified directory HTML')),/Archived web probe differs/u);
 await run('regular-artifact-required',root=>{rmSync(path.join(root,'library.sqlite'));mkdirSync(path.join(root,'library.sqlite'));},/regular files/u);
});

function checksum(tar:Buffer){tar.fill(32,148,156);tar.write(tar.subarray(0,512).reduce((n,v)=>n+v,0).toString(8).padStart(6,'0')+'\0 ',148,8,'ascii');}
function header(name:string,size:number,type='0'){const h=Buffer.alloc(512);h.write(name,0,100);h.write('0000644\0',100,8);h.write('0000000\0',108,8);h.write('0000000\0',116,8);h.write(size.toString(8).padStart(11,'0')+'\0',124,12);h.write('00000000000\0',136,12);h.write(type,156,1);checksum(h);return h;}
function entry(name:string,body:Buffer,type='0'){return Buffer.concat([header(name,body.length,type),body,Buffer.alloc((512-body.length%512)%512)]);}
function pax(value:string){const suffix=' '+value+'\n';let n=Buffer.byteLength(suffix)+1;for(;;){const actual=String(n).length+Buffer.byteLength(suffix);if(n===actual)return Buffer.from(String(n)+suffix);n=actual;}}
test('actual gzip/tar streams reject malformed bounds, duplicate paths and metadata mutations before accepting file evidence',async t=>{
 const root=temp(t),valid=Buffer.concat([entry('file',Buffer.from('DATA')),Buffer.alloc(1024)]);let n=0;
 const reject=async(name:string,bytes:Buffer,match:RegExp)=>t.test(name,async()=>{const file=path.join(root,'bad-'+n+++'.tar.gz');put(file,gzipSync(bytes));await assert.rejects(readProductArchive(file),match);});
 await reject('truncated-header',valid.subarray(0,100),/Truncated/u);
 await reject('truncated-body',Buffer.concat([header('file',500),Buffer.from('short')]),/Truncated/u);
 const numeric=Buffer.from(valid);numeric.write('not-octal',124);checksum(numeric);await reject('invalid-numeric',numeric,/numeric field/u);
 const oneEnd=valid.subarray(0,1536);await reject('one-end-marker',oneEnd,/Truncated/u);
 const invalidEnd=Buffer.from(valid);invalidEnd[1536]=1;await reject('nonzero-second-end',invalidEnd,/end marker/u);
 await reject('duplicate-name',Buffer.concat([entry('same',Buffer.from('one')),entry('same',Buffer.from('two')),Buffer.alloc(1024)]),/Duplicate/u);
 await reject('trailing-nonzero-buffer',Buffer.concat([valid,Buffer.from('unexpected')]),/after end/u);
 await reject('pax-invalid-length',Buffer.concat([entry('pax',Buffer.from('0 path=file\n'),'x'),valid]),/PAX record length/u);
 await reject('pax-no-newline',Buffer.concat([entry('pax',Buffer.from('13 path=file!'),'x'),valid]),/PAX record/u);
 await reject('pax-duplicate-path',Buffer.concat([entry('pax',Buffer.concat([pax('path=file'),pax('path=other')]),'x'),valid]),/Duplicate PAX/u);
 await reject('pax-metadata-mutation',Buffer.concat([entry('pax',pax('mtime=10'),'x'),valid]),/Unsupported PAX/u);
 await reject('pax-end-without-file',Buffer.concat([entry('pax',pax('path=file'),'x'),Buffer.alloc(1024)]),/end marker/u);
 await reject('pax-stacked',Buffer.concat([entry('pax',pax('path=file'),'x'),entry('pax2',pax('path=other'),'x'),valid]),/stacked PAX/u);
 for(const type of ['1','2','3','4','6'])await reject('nonregular-'+type,Buffer.concat([entry('file',Buffer.alloc(0),type),Buffer.alloc(1024)]),/nonregular/u);
 const archive=path.join(root,'directory.tar.gz');put(archive,gzipSync(Buffer.concat([entry('folder/',Buffer.alloc(0),'5'),entry('folder/file',Buffer.from('DATA')),Buffer.alloc(1024)])));
 const directories=await readProductArchive(archive,{allowDirectories:true,collect:['folder/file']});assert.equal(directories.files.length,1);assert.equal(directories.contents.get('folder/file')?.toString(),'DATA');
 const bodyDirectory=path.join(root,'directory-body.tar.gz');put(bodyDirectory,gzipSync(Buffer.concat([entry('folder/',Buffer.from('invalid'),'5'),Buffer.alloc(1024)])));await assert.rejects(readProductArchive(bodyDirectory,{allowDirectories:true}),/Directory archive entry has a body/u);
 const metadataOnly=path.join(root,'pax-only-times.tar.gz');put(metadataOnly,gzipSync(Buffer.concat([entry('pax',pax('mtime=10'),'x'),entry('file',Buffer.from('DATA')),Buffer.alloc(1024)])));assert.equal((await readProductArchive(metadataOnly,{allowDirectories:true})).files.length,1);
 const collected=path.join(root,'large-identity.tar.gz');put(collected,gzipSync(Buffer.concat([entry('metadata.json',Buffer.alloc(1024*1024+1)),Buffer.alloc(1024)])));await assert.rejects(readProductArchive(collected,{collect:['metadata.json']}),/identity metadata exceeds/u);
 assert.equal(productTreeSha256([{path:'b',bytes:1,sha256:'b'},{path:'a',bytes:1,sha256:'a'}]),productTreeSha256([{path:'a',bytes:1,sha256:'a'},{path:'b',bytes:1,sha256:'b'}]));
});

test('public release detection and CLI argument errors remain local and cannot dispatch publication',async t=>{
 const root=temp(t),git=(...args:string[])=>execFileSync('git',args,{cwd:root,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();git('init','-q');git('config','user.email','release-edges@example.invalid');git('config','user.name','Release Edges');put(path.join(root,'baseline.txt'),'base');git('add','.');git('commit','-qm','baseline');const before=git('rev-parse','HEAD');put(path.join(root,'later.txt'),'later');git('add','.');git('commit','-qm','later');const head=git('rev-parse','HEAD');assert.equal(detectProductRelease(root,before,head),null);
 for(const invalid of ['', 'a'.repeat(39),'0'.repeat(40)])assert.throws(()=>detectProductRelease(root,invalid,head),/full base\/head/u);
 const f=await sealedProductFixture(t,false),source=path.join(f.base,'source');execFileSync('git',['rm','product-release.json'],{cwd:source,stdio:'ignore'});execFileSync('git',['commit','-qm','retire authority'],{cwd:source});const removed=execFileSync('git',['rev-parse','HEAD'],{cwd:source,encoding:'utf8'}).trim();assert.throws(()=>detectProductRelease(source,f.identity.sourceCommit,removed),/cannot be removed/u);
 const script=path.resolve(import.meta.dirname,'product-release.ts');for(const args of [[],['unknown'],['detect','extra'],['identity','extra'],['context'],['verify'],['build','v0.3.0'],['tag','one','two']]){const result=spawnSync(process.execPath,[script,...args],{cwd:root,encoding:'utf8'});assert.equal(result.status,1);assert.match(result.stderr,/Usage:/u);assert.equal(result.stdout,'');}
 const env={...process.env,BASE_REF:before,HEAD_REF:head,GITHUB_OUTPUT:path.join(root,'outputs')};const detected=spawnSync(process.execPath,[script,'detect'],{cwd:root,encoding:'utf8',env});assert.equal(detected.status,0,detected.stderr);assert.deepEqual(JSON.parse(detected.stdout) as unknown,{any_changed:false,release:null});assert.match(readFileSync(path.join(root,'outputs'),'utf8'),/any_changed=false\nrelease=null/u);
 for(const status of [500,403]){let writes=0;await assert.rejects(tagAndDispatchProduct(productReleaseSpec('v0.3.0'),'a'.repeat(40),async(_url,method)=>{if(method!=='GET')writes++;return {status};}),/conflict|uncertain/u);assert.equal(writes,0);}
 await assert.rejects(tagAndDispatchProduct(productReleaseSpec('v0.3.0'),'not-a-sha',async()=>assert.fail('Invalid commit must not reach even the stub transport.')),/full product source/u);
 await assert.rejects(tagAndDispatchProduct(productReleaseSpec('v0.3.0'),'a'.repeat(40),async(_url,method)=>method==='GET'?{status:404}:{status:500}),/Cannot create/u);
 await assert.rejects(tagAndDispatchProduct(productReleaseSpec('v0.3.0'),'a'.repeat(40),async(url,method)=>method==='GET'?{status:200,body:{object:{type:'commit',sha:'a'.repeat(40)}}}:{status:url.endsWith('dispatches')?500:201}),/dispatch failed/u);
});


test('historical compatibility-absent release manifests and tarballs remain unchanged and verifiable',async t=>{
 const f=await sealedProductFixture(t,false),legacy=structuredClone(f.manifest);
 delete legacy.compatibility;
 await rewriteArchive(f.root,legacy,'tool',tree=>rmSync(path.join(tree,'package/reader-capabilities.json')));
 const before=readFileSync(path.join(f.root,'release.json'));
 assert.equal(Object.hasOwn(validateProductManifest(legacy),'compatibility'),false);
 const verified=await verifyProductArtifacts(f.root);
 assert.equal(Object.hasOwn(verified,'compatibility'),false);
 assert.deepEqual(readFileSync(path.join(f.root,'release.json')),before);
 await rewriteArchive(f.root,legacy,'tool',tree=>put(path.join(tree,'package/reader-capabilities.json'),'null'));
 await assert.rejects(verifyProductArtifacts(f.root),/reader capabilities/u);
 for(const malformed of [null,undefined,{},[],{schema:2}])assert.throws(()=>validateProductManifest({...legacy,compatibility:malformed}));
});
