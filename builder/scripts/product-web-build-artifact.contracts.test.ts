import assert from 'node:assert/strict';
import test, {type TestContext} from 'node:test';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {appendFileSync, copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, symlinkSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {gzipSync, gunzipSync} from 'node:zlib';
import {pathToFileURL} from 'node:url';
import {createCiPlan} from '../../scripts/engineering/ci-plan.ts';
import {writeQualificationPlan} from '../../scripts/engineering/qualification-plan.ts';
import {readProductIdentity, PRODUCT_MIRRORS} from './product-identity.ts';
import {productTreeSha256} from './product-release.ts';

type Options = {root:string;planDirectory:string;env:NodeJS.ProcessEnv};
type Api = {
  createWebBuildArtifact:(options:Options & {webDirectory:string;buildLog:string;output:string})=>Promise<unknown>;
  materializeWebBuildArtifact:(options:Options & {input:string;output:string})=>Promise<unknown>;
  acceptWebBuildArtifact:(options:Options & {input:string;webDirectory:string;seoReport:string;output:string})=>Promise<unknown>;
};
async function api():Promise<Api> {
  const module:unknown=await import(pathToFileURL(path.resolve(import.meta.dirname,'product-web-build-artifact.ts')).href).catch(()=>null);
  assert.ok(module && typeof module==='object' && 'createWebBuildArtifact' in module, 'A verified cross-job web handoff must exist before product sealing.');
  return module as Api;
}
const put=(filename:string,value:string|Uint8Array)=>{mkdirSync(path.dirname(filename),{recursive:true});writeFileSync(filename,value);};
const json=(filename:string):Record<string,unknown>=>JSON.parse(readFileSync(filename,'utf8')) as Record<string,unknown>;
const save=(filename:string,value:unknown)=>put(filename,JSON.stringify(value)+'\n');
function inventory(root:string) {
  const files:{path:string;bytes:number;sha256:string}[]=[];
  const walk=(directory:string)=>{for(const entry of readdirSync(directory,{withFileTypes:true})){const file=path.join(directory,entry.name);if(entry.isDirectory())walk(file);else {const bytes=readFileSync(file);files.push({path:path.relative(root,file).split(path.sep).join('/'),bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')});}}};
  walk(root);return {files,bytes:files.reduce((n,f)=>n+f.bytes,0),treeSha256:productTreeSha256(files)};
}
function fixture(t:TestContext,mode:'full'|'data'='full') {
  const parent=mkdtempSync(path.join(tmpdir(),'pcr-web-handoff-')),root=path.join(parent,'source'),webDirectory=path.join(parent,'web'),planDirectory=path.join(parent,'plan');mkdirSync(root);mkdirSync(planDirectory);
  t.after(()=>rmSync(parent,{recursive:true,force:true}));
  const git=(...args:string[])=>execFileSync('git',args,{cwd:root,encoding:'utf8',stdio:'pipe'}).trim();
  git('init','-q','-b','main');git('config','user.name','PCR handoff fixture');git('config','user.email','fixture@example.invalid');
  const npm=execFileSync('npm',['--version'],{encoding:'utf8'}).trim();
  save(path.join(root,'product-release.json'),{schema:1,version:'0.4.7',node:process.versions.node,npm,web:{site:'global',origin:'https://pcr.tiangong.earth'}});
  for(const [filename,name]of PRODUCT_MIRRORS)save(path.join(root,filename),{name,version:'0.4.7',private:true});
  put(path.join(root,'.gitignore'),'.reports/\ndist/\n');
  put(path.join(root,'library/pcrs/domain/category/item/manifest.yaml'),'status: candidate\n');put(path.join(root,'classifications/mapping.yaml'),'mappings: []\n');
  put(path.join(root,'scripts/engineering/probe.test.ts'),"import test from 'node:test'; test('synthetic handoff source',()=>{});\n");
  save(path.join(root,'edgeone.json'),{headers:[],redirects:[],buildCommand:'must not travel'});
  const checker = `import argparse,json,os,pathlib,sys
p=argparse.ArgumentParser();p.add_argument('--root');p.add_argument('--origin');p.add_argument('--output');a=p.parse_args()
assert pathlib.Path(a.root,'.well-known/complete.bin').is_file()
failed=os.environ.get('PCR_FIXTURE_SEO_ERROR')=='1'
r={'schema':1,'origin':a.origin,'mode':'artifact','complete':True,'counts':{'error':1} if failed else {},'findings':[{'severity':'error'}] if failed else []}
with open(a.output,'x') as f:json.dump(r,f)
sys.exit(1 if failed else 0)
`;
  put(path.join(root,'scripts/vendor/workspace-seo/check.py'),checker);save(path.join(root,'scripts/vendor/workspace-seo/manifest.json'),{schema:1,generated:true,source_repository:'tiangong-lca/workspace',source_path:'scripts/seo/check.py',source_commit:'a'.repeat(40),sha256:createHash('sha256').update(checker).digest('hex')});
  git('add','.');git('commit','--no-gpg-sign','-qm','synthetic source');const base=git('rev-parse','HEAD');
  if(mode==='data'){appendFileSync(path.join(root,'library/pcrs/domain/category/item/manifest.yaml'),'# changed canonical fixture\n');git('add','.');git('commit','--no-gpg-sign','-qm','canonical data fixture');}
  const head=git('rev-parse','HEAD'),env={GITHUB_SHA:head,CI_HEAD_SHA:head,CI_EVENT_NAME:mode==='full'?'workflow_call':'pull_request',CI_WORKFLOW_INPUTS:mode==='full'?JSON.stringify({product_tag:''}):'{}',...(mode==='data'?{CI_BASE_SHA:base}:{}),GITHUB_RUN_ID:'101',GITHUB_RUN_ATTEMPT:'2'};
  save(path.join(planDirectory,'ci.json'),createCiPlan(root,{event:env.CI_EVENT_NAME,reusable:mode==='full',head,...(mode==='data'?{base}:{})}));
  if(mode==='full')writeQualificationPlan(root,path.join(planDirectory,'qualification.json'));
  const identity=readProductIdentity(root),counts={pcrs:1,pages:2,languages:2,sourceBytes:100};
  for(const p of ['index.html','zh/index.html','en/index.html','zh/docs/pcr/index.html','en/docs/pcr/index.html'])put(path.join(webDirectory,p),'<html>Complete source 原文🙂</html>');
  save(path.join(webDirectory,'generated/product-release.json'),identity);save(path.join(webDirectory,'generated/version.json'),{sourceCommit:head,releaseVersion:identity.version,releaseTag:identity.tag,sourceFingerprint:identity.sourceFingerprint,counts});
  for(const p of ['index.txt','__next._tree.txt','__next._full.txt','en/docs/pcr/very-long-'+ 'a'.repeat(130)+'/__next.__PAGE__.txt','generated/search/shard.json','generated/data/records.json','generated/search-worker.mjs','generated/raw/classifications/indexes/cpc-3.0-coverage.json','.well-known/complete.bin'])put(path.join(webDirectory,p),Buffer.from([0,1,2,255,23]));
  const before=inventory(webDirectory),buildLog=path.join(parent,'build.log');
  const verification={pcrs:1,pages:2,sourceDocuments:2,sourceDownloads:4,sourceCommit:head,files:before.files.length,bytes:before.bytes,treeSha256:before.treeSha256};
  const metrics={buildMs:123,peakResidentBytes:1024,memoryMeasurement:'process-tree-rss',stages:['scripts/generate.ts','node_modules/next/dist/bin/next build','scripts/verify.ts'].map(command=>({command,durationMs:1})),relocation:{sourceCommit:head}};
  put(buildLog,'Synthetic successful build evidence, not full corpus qualification\n'+JSON.stringify(verification)+'\n'+JSON.stringify(metrics)+'\n');
  const output=path.join(parent,'artifact'),materialized=path.join(parent,'materialized'),seoReport=path.join(parent,'seo.json');
  return {parent,root,webDirectory,planDirectory,env,buildLog,output,materialized,seoReport,git,before};
}

test('full and data handoffs preserve every web byte across independent checkouts and bind SEO acceptance',async t=>{
  const m=await api();
  for(const mode of ['full','data']as const)await t.test(mode,async t=>{
    const f=fixture(t,mode);await m.createWebBuildArtifact({...f,output:f.output});
    const consumer=path.join(f.parent,'consumer');execFileSync('git',['clone','--quiet',f.root,consumer]);
    await m.materializeWebBuildArtifact({...f,root:consumer,input:f.output,output:f.materialized});
    for(const file of f.before.files)assert.deepEqual(readFileSync(path.join(f.materialized,file.path)),readFileSync(path.join(f.webDirectory,file.path)),file.path);
    assert.deepEqual(json(path.join(f.materialized,'edgeone.json')),{headers:[],redirects:[]});
    const receipt=path.join(f.parent,'accepted.json');await m.acceptWebBuildArtifact({...f,root:consumer,input:f.output,webDirectory:f.materialized,output:receipt});
    const accepted=json(receipt);assert.equal(accepted.status,'accepted');assert.deepEqual(accepted.binding,json(path.join(f.output,'handoff.json')).binding);
    assert.equal((accepted.seo as {sha256:string}).sha256,createHash('sha256').update(readFileSync(f.seoReport)).digest('hex'));assert.equal(f.git('status','--porcelain'),'');
  });
});

test('source, merge SHA, run, attempt and qualification-plan substitutions fail closed before extraction',async t=>{
  const m=await api(),f=fixture(t);await m.createWebBuildArtifact(f);
  for(const [key,value]of [['GITHUB_SHA','a'.repeat(40)],['CI_HEAD_SHA','b'.repeat(40)],['GITHUB_RUN_ID','102'],['GITHUB_RUN_ATTEMPT','1']]as const)await t.test(key,async()=>{
    await assert.rejects(m.materializeWebBuildArtifact({...f,env:{...f.env,[key]:value},input:f.output,output:f.materialized}));assert.equal(existsSync(f.materialized),false);
  });
  const planFile=path.join(f.planDirectory,'qualification.json'),old=readFileSync(planFile);const altered=json(planFile);altered.qualificationId='00000000-0000-4000-8000-000000000000';save(planFile,altered);
  await assert.rejects(m.materializeWebBuildArtifact({...f,input:f.output,output:f.materialized}),/binding|qualification|invocation/i);writeFileSync(planFile,old);
  assert.equal(existsSync(f.materialized),false);
});

test('build evidence must attest the complete successful source and resource gates before freezing output',async t=>{
  const m=await api();
  for(const kind of ['missing-proof','memory','source','modified-web','symlink']as const)await t.test(kind,async t=>{
    const f=fixture(t);
    if(kind==='missing-proof')put(f.buildLog,'no verification evidence\n');
    if(kind==='memory')put(f.buildLog,readFileSync(f.buildLog,'utf8').replace('"peakResidentBytes":1024','"peakResidentBytes":6000000001'));
    if(kind==='source')put(f.buildLog,readFileSync(f.buildLog,'utf8').replaceAll(f.env.GITHUB_SHA,'c'.repeat(40)));
    if(kind==='modified-web')put(path.join(f.webDirectory,'index.txt'),Buffer.from([5,4,3,2,1]));
    if(kind==='symlink')symlinkSync(f.buildLog,path.join(f.webDirectory,'foreign-link'));
    await assert.rejects(m.createWebBuildArtifact(f));assert.equal(existsSync(f.output),false);
  });
});

test('archive, report and inventory tampering cannot replace an existing consumer output',async t=>{
  const m=await api();
  for(const kind of ['archive','build-log','missing','extra','manifest','archive-field']as const)await t.test(kind,async t=>{
    const f=fixture(t);await m.createWebBuildArtifact(f);
    if(kind==='archive')appendFileSync(path.join(f.output,'web.tar.gz'),'foreign');
    if(kind==='build-log')appendFileSync(path.join(f.output,'build.log'),'foreign');
    if(kind==='missing')rmSync(path.join(f.output,'build.log'));
    if(kind==='extra')put(path.join(f.output,'extra.json'),'{}');
    if(kind==='archive-field'){const file=path.join(f.output,'handoff.json'),v=json(file);v.archive={...v.archive as object,scientificApproval:true};save(file,v);}
    if(kind==='manifest'){const file=path.join(f.output,'handoff.json'),v=json(file);v.binding={};save(file,v);}
    await assert.rejects(m.materializeWebBuildArtifact({...f,input:f.output,output:f.materialized}));assert.equal(existsSync(f.materialized),false);
    const original=path.join(f.materialized,'prior.txt');put(original,'previous owned result');
    await assert.rejects(m.materializeWebBuildArtifact({...f,input:f.output,output:f.materialized}));assert.equal(readFileSync(original,'utf8'),'previous owned result');
  });
});

test('SEO acceptance binds the exact materialized tree and preserves failing evidence',async t=>{
  const m=await api(),f=fixture(t);await m.createWebBuildArtifact(f);await m.materializeWebBuildArtifact({...f,input:f.output,output:f.materialized});
  const receipt=path.join(f.parent,'acceptance.json');
  await assert.rejects(m.acceptWebBuildArtifact({...f,env:{...f.env,PCR_FIXTURE_SEO_ERROR:'1'},input:f.output,webDirectory:f.materialized,output:receipt}),/SEO/);assert.equal(existsSync(receipt),false);
  assert.ok(existsSync(f.seoReport),'failed actual checker evidence is retained');rmSync(f.seoReport);
  put(path.join(f.materialized,'index.txt'),'post-extraction change');await assert.rejects(m.acceptWebBuildArtifact({...f,input:f.output,webDirectory:f.materialized,output:receipt}),/tree|hash|inventory/i);assert.equal(existsSync(receipt),false);
});

test('a recomputed transport proof cannot hide changed, missing or extra verified bytes',async t=>{
 const m=await api();
 for(const mutation of ['changed','missing','extra']as const)await t.test(mutation,async t=>{
  const f=fixture(t);await m.createWebBuildArtifact(f);
  if(mutation==='changed')put(path.join(f.webDirectory,'index.txt'),Buffer.from([9,8,7,6,5]));
  if(mutation==='missing')rmSync(path.join(f.webDirectory,'__next._tree.txt'));
  if(mutation==='extra')put(path.join(f.webDirectory,'unverified.txt'),'extra');
  const archive=path.join(f.output,'web.tar.gz');rmSync(archive);
  const {writeProductWebArchive}=await import('./product-release.ts');const tree=await writeProductWebArchive(f.webDirectory,archive),bytes=readFileSync(archive),file=path.join(f.output,'handoff.json'),v=json(file);
  v.archive={filename:'web.tar.gz',bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex'),...tree};save(file,v);
  await assert.rejects(m.materializeWebBuildArtifact({...f,input:f.output,output:f.materialized}),/after complete verification/);assert.equal(existsSync(f.materialized),false);
 });
});

test('public product audit preserves the exact web archive and complete build/SEO evidence',async t=>{
  const m=await api();const bind=(m as Api & {bindProductWebBuild?: (options:Options & {input:string;acceptance:string;seoReport:string;productDirectory:string})=>Promise<unknown>}).bindProductWebBuild;
  assert.equal(typeof bind,'function','The sealed product must bind the verified web handoff and SEO evidence.');
  const f=fixture(t);await m.createWebBuildArtifact(f);await m.materializeWebBuildArtifact({...f,input:f.output,output:f.materialized});
  const acceptance=path.join(f.parent,'acceptance.json');await m.acceptWebBuildArtifact({...f,input:f.output,webDirectory:f.materialized,output:acceptance});
  const productDirectory=path.join(f.parent,'product'),h=json(path.join(f.output,'handoff.json'));
  mkdirSync(productDirectory);copyFileSync(path.join(f.output,'web.tar.gz'),path.join(productDirectory,'pcr-web-0.4.7.tar.gz'));
  save(path.join(productDirectory,'release.json'),{identity:readProductIdentity(f.root),web:{...h.archive as object,filename:'pcr-web-0.4.7.tar.gz'}});
  await bind!({...f,input:f.output,acceptance,productDirectory});
  for(const filename of ['web-build-handoff.json','web-build.log','web-seo.json','web-build-acceptance.json'])assert.ok(existsSync(path.join(productDirectory,filename)));
  const final=json(path.join(productDirectory,'web-build-acceptance.json'));
  for(const field of ['handoff','buildLog','seo','archive','productManifest','productWeb']){const proof=final[field]as {filename:string;sha256:string};const file=path.join(productDirectory,proof.filename);assert.ok(existsSync(file),'public audit points to an actual bundled '+field);assert.equal(createHash('sha256').update(readFileSync(file)).digest('hex'),proof.sha256);}
  const wrong=path.join(f.parent,'wrong-product');save(path.join(wrong,'release.json'),{identity:readProductIdentity(f.root),web:{...h.archive as object,sha256:'a'.repeat(64)}});
  await assert.rejects(bind!({...f,input:f.output,acceptance,productDirectory:wrong}),/sealed web|archive/i);assert.equal(existsSync(path.join(wrong,'web-build-acceptance.json')),false);
});

test('the actual CI CLI creates, materializes, checks SEO and binds a product without a rebuild',t=>{
 const f=fixture(t),script=path.resolve(import.meta.dirname,'product-web-build-artifact.ts');
 const call=(...args:string[])=>execFileSync(process.execPath,[script,...args],{cwd:f.root,env:{...process.env,...f.env},encoding:'utf8',stdio:'pipe'});
 call('create',f.planDirectory,f.webDirectory,f.buildLog,f.output);
 call('materialize',f.planDirectory,f.output,f.materialized);
 const acceptance=path.join(f.parent,'acceptance.json');call('accept',f.planDirectory,f.output,f.materialized,f.seoReport,acceptance);
 const product=path.join(f.parent,'product'),h=json(path.join(f.output,'handoff.json'));mkdirSync(product);copyFileSync(path.join(f.output,'web.tar.gz'),path.join(product,'pcr-web-0.4.7.tar.gz'));
 save(path.join(product,'release.json'),{identity:readProductIdentity(f.root),web:{...h.archive as object,filename:'pcr-web-0.4.7.tar.gz'}});
 call('bind-product',f.planDirectory,f.output,acceptance,f.seoReport,product);assert.equal(json(path.join(product,'web-build-acceptance.json')).status,'accepted');
 assert.throws(()=>call('unknown'),/Usage/);
});

test('an ignored output alias cannot redirect handoff writes into protected source',async t=>{
 const m=await api(),f=fixture(t),alias=path.join(f.root,'.reports','alias');mkdirSync(path.dirname(alias),{recursive:true});symlinkSync(path.join(f.root,'library'),alias,'dir');
 const output=path.join(alias,'foreign-output');await assert.rejects(m.createWebBuildArtifact({...f,output}),/protected source/);
 assert.equal(existsSync(path.join(f.root,'library','foreign-output')),false);assert.equal(f.git('status','--porcelain'),'');
});

test('fresh SEO evidence cannot be redirected into protected source',async t=>{
 const m=await api(),f=fixture(t);await m.createWebBuildArtifact(f);await m.materializeWebBuildArtifact({...f,input:f.output,output:f.materialized});
 const alias=path.join(f.root,'.reports','alias');mkdirSync(path.dirname(alias),{recursive:true});symlinkSync(path.join(f.root,'library'),alias,'dir');
 await assert.rejects(m.acceptWebBuildArtifact({...f,input:f.output,webDirectory:f.materialized,seoReport:path.join(alias,'seo.json'),output:path.join(f.parent,'receipt.json')}),/protected source/);
 assert.equal(existsSync(path.join(f.root,'library','seo.json')),false);assert.equal(f.git('status','--porcelain'),'');
});

test('archive inventory limits reject an oversized declared member before reading its body',async t=>{
 const m=await api(),f=fixture(t);await m.createWebBuildArtifact(f);
 const header=Buffer.alloc(512);header.write('oversized');header.write('0000644\0',100);header.write((25_000_000).toString(8).padStart(11,'0')+'\0',124);header.fill(32,148,156);header.write('0',156);header.write('ustar\0',257);header.write(header.reduce((sum,b)=>sum+b,0).toString(8).padStart(6,'0')+'\0 ',148);
 const bytes=gzipSync(Buffer.concat([header,Buffer.alloc(1024)])),archive=path.join(f.output,'web.tar.gz');writeFileSync(archive,bytes);
 const file=path.join(f.output,'handoff.json'),v=json(file);v.archive={...v.archive as object,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')};save(file,v);
 await assert.rejects(m.materializeWebBuildArtifact({...f,input:f.output,output:f.materialized}),/inventory|oversized/i);assert.equal(existsSync(f.materialized),false);
});

function fixtureHeader(name:string,type='0') {
 const h=Buffer.alloc(512);h.write(name);h.write('0000644\0',100);h.write('00000000000\0',124);h.fill(32,148,156);h.write(type,156);h.write('ustar\0',257);h.write(h.reduce((sum,b)=>sum+b,0).toString(8).padStart(6,'0')+'\0 ',148);return h;
}

test('unsafe and duplicate archive entries are rejected by the shared parser',async t=>{
 const m=await api();
 for(const [name,body,pattern]of [
  ['traversal',Buffer.concat([fixtureHeader('../outside'),Buffer.alloc(1024)]),/Unsafe archive path/],
  ['symlink',Buffer.concat([fixtureHeader('link','2'),Buffer.alloc(1024)]),/nonregular/],
  ['duplicate',Buffer.concat([fixtureHeader('same'),fixtureHeader('same'),Buffer.alloc(1024)]),/Duplicate/],
 ]as const)await t.test(name,async t=>{
  const f=fixture(t);await m.createWebBuildArtifact(f);const bytes=gzipSync(body),file=path.join(f.output,'handoff.json'),v=json(file);writeFileSync(path.join(f.output,'web.tar.gz'),bytes);v.archive={...v.archive as object,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')};save(file,v);
  await assert.rejects(m.materializeWebBuildArtifact({...f,input:f.output,output:f.materialized}),pattern);assert.equal(existsSync(f.materialized),false);
 });
});

test('a partial extraction failure removes only its owned stage and never publishes output',async t=>{
 const m=await api(),f=fixture(t);await m.createWebBuildArtifact(f);
 const archive=path.join(f.output,'web.tar.gz'),raw=gunzipSync(readFileSync(archive)),bytes=gzipSync(Buffer.concat([raw.subarray(0,-1024),fixtureHeader('clash'),fixtureHeader('clash/child'),Buffer.alloc(1024)]));writeFileSync(archive,bytes);
 const list=[...inventory(f.webDirectory).files,...['clash','clash/child'].map(path=>({path,bytes:0,sha256:createHash('sha256').digest('hex')}))];
 const original=list.filter(f=>f.path!=='edgeone.json');const log=readFileSync(path.join(f.output,'build.log'),'utf8').split('\n').map(line=>{if(!line.startsWith('{'))return line;const value=JSON.parse(line)as Record<string,unknown>;return Object.hasOwn(value,'sourceDocuments')?JSON.stringify({...value,files:original.length,treeSha256:productTreeSha256(original)}):line;}).join('\n');put(path.join(f.output,'build.log'),log);
 const file=path.join(f.output,'handoff.json'),v=json(file);v.archive={filename:'web.tar.gz',bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex'),files:list.length,uncompressedBytes:list.reduce((n,f)=>n+f.bytes,0),treeSha256:productTreeSha256(list)};v.buildLog={filename:'build.log',bytes:Buffer.byteLength(log),sha256:createHash('sha256').update(log).digest('hex')};save(file,v);
 await assert.rejects(m.materializeWebBuildArtifact({...f,input:f.output,output:f.materialized}),/EEXIST|ENOTDIR/);assert.equal(existsSync(f.materialized),false);assert.equal(readdirSync(f.parent).some(name=>name.startsWith('materialized.stage-')),false);
});

test('product binding rejects modified SEO receipt fields and a newly failing SEO report',async t=>{
 const m=await api();const bind=(m as Api & {bindProductWebBuild: (options:Options & {input:string;acceptance:string;seoReport:string;productDirectory:string})=>Promise<unknown>}).bindProductWebBuild;
 for(const mutation of ['checker','extra-field','seo-errors']as const)await t.test(mutation,async t=>{
  const f=fixture(t);await m.createWebBuildArtifact(f);await m.materializeWebBuildArtifact({...f,input:f.output,output:f.materialized});const acceptance=path.join(f.parent,'acceptance.json');await m.acceptWebBuildArtifact({...f,input:f.output,webDirectory:f.materialized,output:acceptance});
  const productDirectory=path.join(f.parent,'product'),h=json(path.join(f.output,'handoff.json'));mkdirSync(productDirectory);copyFileSync(path.join(f.output,'web.tar.gz'),path.join(productDirectory,'pcr-web-0.4.7.tar.gz'));save(path.join(productDirectory,'release.json'),{identity:readProductIdentity(f.root),web:{...h.archive as object,filename:'pcr-web-0.4.7.tar.gz'}});
  const a=json(acceptance);if(mutation==='checker')a.checker={...a.checker as object,sha256:'a'.repeat(64)};if(mutation==='extra-field')a.scientificApproval=true;
  if(mutation==='seo-errors'){save(f.seoReport,{schema:1,origin:'https://pcr.tiangong.earth',mode:'artifact',complete:true,counts:{error:1},findings:[{severity:'error'}]});const bytes=readFileSync(f.seoReport);a.seo={filename:path.basename(f.seoReport),bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')};}
  save(acceptance,a);await assert.rejects(bind({...f,input:f.output,acceptance,productDirectory}),/SEO|acceptance/i);assert.equal(existsSync(path.join(productDirectory,'web-build-acceptance.json')),false);
 });
});
