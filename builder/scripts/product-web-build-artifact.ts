/** Same-run transport of one completely verified website; never rebuilds content. */
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {constants, closeSync, copyFileSync, createReadStream, fstatSync, lstatSync, mkdirSync, mkdtempSync, openSync, readFileSync, readdirSync, realpathSync, renameSync, rmSync, writeFileSync, writeSync} from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {verifyCiPlan, isReusableContext} from '../../scripts/engineering/ci-plan.ts';
import {readCurrentQualificationPlan} from '../../scripts/engineering/qualification-plan.ts';
import {assertBuildResources} from '../../packages/pcr-docs/scripts/resource-budget.ts';
import {assertProductIdentity, readProductIdentity, readProductVersion, productSha256} from './product-identity.ts';
import type {ProductIdentity} from './product-identity.ts';
import {createWebProbes, writePrebuiltConfig} from './product-web.ts';
import {readProductArchive, writeProductWebArchive, productTreeSha256} from './product-release.ts';
import {record, type ArtifactProof, type ArchiveFile} from './release-types.ts';

interface Options {root:string;planDirectory:string;env?:NodeJS.ProcessEnv}
interface Binding {identity:ProductIdentity;runId:string;attempt:string;mode:'full'|'data';ciPlanSha256:string;qualification:{qualificationId:string;planHash:string}|null;toolchain:{node:string;npm:string}}
interface TreeProof {files:number;uncompressedBytes:number;treeSha256:string}
interface Handoff {schema:1;kind:'pcr-verified-web-build';binding:Binding;archive:ArtifactProof & TreeProof;buildLog:ArtifactProof}
const names=['build.log','handoff.json','web.tar.gz'];
const same=(a:unknown,b:unknown)=>JSON.stringify(a)===JSON.stringify(b);
const positive=(v:unknown):v is number=>typeof v==='number'&&Number.isSafeInteger(v)&&v>0;
const statKey=(s:ReturnType<typeof fstatSync>)=>`${s.dev}:${s.ino}:${s.size}:${s.mtimeMs}:${s.ctimeMs}`;
function regular(filename:string) {const s=lstatSync(filename);if(!s.isFile()||s.isSymbolicLink())throw new Error('Handoff input must be a regular file.');return s;}
function smallJson(filename:string):unknown {if(regular(filename).size>1024*1024)throw new Error('Handoff identity metadata exceeds its bound.');return JSON.parse(readFileSync(filename,'utf8')) as unknown;}
async function proof(filename:string):Promise<ArtifactProof> {
  const before=regular(filename),fd=openSync(filename,constants.O_RDONLY|constants.O_NOFOLLOW|constants.O_NONBLOCK),hash=createHash('sha256');let bytes=0;
  try {if(statKey(before)!==statKey(fstatSync(fd)))throw new Error('Handoff input changed during open.');for await(const chunk of createReadStream(filename,{fd,autoClose:false})){hash.update(chunk);bytes+=chunk.length;}
    if(bytes!==before.size||statKey(before)!==statKey(fstatSync(fd))||statKey(before)!==statKey(regular(filename)))throw new Error('Handoff input changed during hashing.');
  }finally{closeSync(fd);}
  return {filename:path.basename(filename),bytes,sha256:hash.digest('hex')};
}
function directory(value:string) {const s=lstatSync(value);if(!s.isDirectory()||s.isSymbolicLink())throw new Error('Handoff requires regular directories.');return realpathSync(value);}
function outputPath(root:string,requested:string) {
  let ancestor=path.resolve(requested);const suffix:string[]=[];
  while(!lstatSync(ancestor,{throwIfNoEntry:false})){suffix.unshift(path.basename(ancestor));ancestor=path.dirname(ancestor);}
  const absolute=path.join(realpathSync(ancestor),...suffix),relative=path.relative(realpathSync(root),absolute).split(path.sep).join('/');
  if(!relative||(!relative.startsWith('../')&&!path.isAbsolute(relative)&&!relative.startsWith('.reports/')&&!relative.startsWith('dist/')))throw new Error('Handoff output cannot replace protected source.');
  if(lstatSync(absolute,{throwIfNoEntry:false}))throw new Error('Handoff output already exists; refusing replacement.');
  mkdirSync(path.dirname(absolute),{recursive:true});return absolute;
}
function binding(options:Options):Binding {
  const env=options.env??process.env,root=realpathSync(options.root),identity=readProductIdentity(root),runId=env.GITHUB_RUN_ID??'',attempt=env.GITHUB_RUN_ATTEMPT??'';
  if(!/^[1-9][0-9]*$/u.test(runId)||!/^[1-9][0-9]*$/u.test(attempt)||env.GITHUB_SHA!==identity.sourceCommit||env.CI_HEAD_SHA!==identity.sourceCommit)throw new Error('Handoff source or CI invocation differs from the checkout.');
  const planFile=path.join(options.planDirectory,'ci.json');regular(planFile);
  const plan=verifyCiPlan(root,JSON.parse(readFileSync(planFile,'utf8')) as unknown,{event:env.CI_EVENT_NAME??'',reusable:isReusableContext(env.CI_WORKFLOW_INPUTS),head:identity.sourceCommit,...(env.CI_BASE_SHA?{base:env.CI_BASE_SHA}:{})});
  const q=plan.mode==='full'?readCurrentQualificationPlan(root,path.join(options.planDirectory,'qualification.json')):null;
  const config=readProductVersion(root),toolchain={node:process.versions.node,npm:execFileSync('npm',['--version'],{encoding:'utf8'}).trim()};
  if(toolchain.node!==config.node||toolchain.npm!==config.npm)throw new Error('Handoff toolchain differs from source pins.');
  return {identity,runId,attempt,mode:plan.mode,ciPlanSha256:productSha256(readFileSync(planFile)),qualification:q?{qualificationId:q.qualificationId,planHash:q.planHash}:null,toolchain};
}
function buildEvidence(filename:string,expected:Binding) {
  if(regular(filename).size>25_000_000)throw new Error('Build evidence log exceeds its bounded input size.');
  const values:Record<string,unknown>[]=[];
  for(const line of readFileSync(filename,'utf8').split('\n')){if(!line.startsWith('{'))continue;try{values.push(record(JSON.parse(line) as unknown));}catch{/* Other console lines are not success evidence. */}}
  const verifications=values.filter(v=>Object.hasOwn(v,'sourceDocuments')&&Object.hasOwn(v,'sourceDownloads')&&Object.hasOwn(v,'treeSha256'));
  const metrics=values.filter(v=>Object.hasOwn(v,'buildMs')&&Object.hasOwn(v,'stages'));
  if(verifications.length!==1||metrics.length!==1)throw new Error('Missing or ambiguous complete successful build evidence.');
  const v=verifications[0]!,m=metrics[0]!,relocation=record(m.relocation,'build relocation');
  if(v.sourceCommit!==expected.identity.sourceCommit||relocation.sourceCommit!==expected.identity.sourceCommit||!positive(v.pcrs)||!positive(v.pages)||!positive(v.files)||v.files>=20000||!positive(v.bytes)||typeof v.treeSha256!=='string'||!/^sha256:[a-f0-9]{64}$/u.test(v.treeSha256))throw new Error('Build verification source, inventory or tree hash differs.');
  if(typeof m.peakResidentBytes!=='number'||typeof m.memoryMeasurement!=='string')throw new Error('Missing measured build resources.');
  assertBuildResources({peakResidentBytes:m.peakResidentBytes,memoryMeasurement:m.memoryMeasurement});
  if(!positive(m.buildMs)||!Array.isArray(m.stages)||m.stages.length!==3)throw new Error('Incomplete successful build stages.');
  const commands=['scripts/generate.ts','node_modules/next/dist/bin/next build','scripts/verify.ts'];
  for(const [i,value]of m.stages.entries()){const s=record(value,'build stage');if(s.command!==commands[i]||!positive(s.durationMs))throw new Error('Complete web build stages differ.');}
  return {verification:v,metrics:m};
}
function checkFiles(files:readonly ArchiveFile[],expected:TreeProof) {
  if(files.length!==expected.files||files.length>=20000||files.some(f=>!Number.isSafeInteger(f.bytes)||f.bytes<0||f.bytes>=25_000_000)||files.reduce((n,f)=>n+f.bytes,0)!==expected.uncompressedBytes||productTreeSha256(files)!==expected.treeSha256)throw new Error('Handoff web tree hash or inventory differs.');
}
function checkVerifiedTree(files:readonly ArchiveFile[],verification:Record<string,unknown>) {
  const matches=(list:readonly ArchiveFile[])=>list.length===verification.files&&list.reduce((n,f)=>n+f.bytes,0)===verification.bytes&&productTreeSha256(list)===verification.treeSha256;
  if(!matches(files)&&!matches(files.filter(f=>f.path!=='edgeone.json')))throw new Error('Web tree changed after complete verification.');
}
async function tree(directoryName:string):Promise<ArchiveFile[]> {
  const root=directory(directoryName),files:ArchiveFile[]=[];
  async function walk(folder:string):Promise<void>{for(const name of readdirSync(folder).sort()){const filename=path.join(folder,name),s=lstatSync(filename);if(s.isSymbolicLink())throw new Error('Web tree refuses symlinks.');if(s.isDirectory())await walk(filename);else {const p=await proof(filename);files.push({path:path.relative(root,filename).split(path.sep).join('/'),bytes:p.bytes,sha256:p.sha256});}}}
  await walk(root);return files;
}
async function verifiedInput(options:Options & {input:string}) {
  const current=binding(options),input=directory(options.input);
  if(!same(readdirSync(input).sort(),names))throw new Error('Handoff artifact contains missing or extra files.');
  const raw=record(smallJson(path.join(input,'handoff.json')),'handoff');
  if(!same(Object.keys(raw).sort(),['archive','binding','buildLog','kind','schema'])||raw.schema!==1||raw.kind!=='pcr-verified-web-build'||!same(raw.binding,current))throw new Error('Handoff source, qualification or invocation binding differs.');
  const archive=record(raw.archive,'archive proof'),log=record(raw.buildLog,'log proof');
  if(!same(Object.keys(archive).sort(),['bytes','filename','files','sha256','treeSha256','uncompressedBytes'])||!same(Object.keys(log).sort(),['bytes','filename','sha256'])||archive.filename!=='web.tar.gz'||log.filename!=='build.log'||!positive(archive.files)||archive.files>=20000||!positive(archive.uncompressedBytes)||typeof archive.treeSha256!=='string'||!/^sha256:[a-f0-9]{64}$/u.test(archive.treeSha256))throw new Error('Invalid handoff archive proof.');
  for(const [name,value]of [['web.tar.gz',archive],['build.log',log]]as const){const actual=await proof(path.join(input,name));if(value.bytes!==actual.bytes||value.sha256!==actual.sha256)throw new Error('Handoff archive or build log checksum differs.');}
  const manifest=raw as unknown as Handoff,evidence=buildEvidence(path.join(input,'build.log'),current);let count=0,bytes=0;
  const archived=await readProductArchive(path.join(input,'web.tar.gz'),{collect:['generated/product-release.json','generated/version.json','edgeone.json'],onFileStart(entry){count++;bytes+=entry.bytes;if(count>manifest.archive.files||count>=20000||entry.bytes>=25_000_000||bytes>manifest.archive.uncompressedBytes)throw new Error('Handoff archive exceeds its bounded inventory or has an oversized member.');}});
  checkFiles(archived.files,manifest.archive);checkVerifiedTree(archived.files,evidence.verification);
  const archivedIdentity=assertProductIdentity(JSON.parse(archived.contents.get('generated/product-release.json')?.toString('utf8')??'null') as unknown);
  if(!same(archivedIdentity,current.identity))throw new Error('Archived product identity differs.');
  if(!same(binding(options),current))throw new Error('Handoff source changed during verification.');
  return {manifest,current,input};
}
export async function createWebBuildArtifact(options:Options & {webDirectory:string;buildLog:string;output:string}) {
  const expected=binding(options),evidence=buildEvidence(options.buildLog,expected),web=directory(options.webDirectory),output=outputPath(options.root,options.output);
  const relativeWeb=path.relative(realpathSync(options.root),web).split(path.sep).join('/');
  if(!relativeWeb||(!relativeWeb.startsWith('../')&&!path.isAbsolute(relativeWeb)&&!['.reports/','dist/','packages/pcr-docs/out/'].some(prefix=>relativeWeb.startsWith(prefix))&&relativeWeb!=='packages/pcr-docs/out'))throw new Error('Web preparation cannot write protected source.');
  if(output===web||output.startsWith(web+path.sep))throw new Error('Handoff transport must be outside the web input.');
  writePrebuiltConfig({root:options.root,webDir:web});
  const probes=createWebProbes({webDir:web});if(!same(probes.identity,expected.identity)||probes.counts.pcrs!==evidence.verification.pcrs||probes.counts.pages!==evidence.verification.pages)throw new Error('Web product or counts differ from build evidence.');
  const stage=mkdtempSync(output+'.stage-');
  try {
    const archiveTree=await writeProductWebArchive(web,path.join(stage,'web.tar.gz')),readback=await readProductArchive(path.join(stage,'web.tar.gz'));
    checkFiles(readback.files,archiveTree);checkVerifiedTree(readback.files,evidence.verification);
    copyFileSync(options.buildLog,path.join(stage,'build.log'));const buildLog=await proof(path.join(stage,'build.log'));
    if(buildLog.sha256!==(await proof(options.buildLog)).sha256)throw new Error('Build evidence changed during handoff.');
    const manifest:Handoff={schema:1,kind:'pcr-verified-web-build',binding:expected,archive:{...await proof(path.join(stage,'web.tar.gz')),...archiveTree},buildLog};
    writeFileSync(path.join(stage,'handoff.json'),JSON.stringify(manifest,null,2)+'\n',{flag:'wx'});
    await verifiedInput({...options,input:stage});renameSync(stage,output);return manifest;
  }finally{rmSync(stage,{recursive:true,force:true});}
}
export async function materializeWebBuildArtifact(options:Options & {input:string;output:string}) {
  const checked=await verifiedInput(options),output=outputPath(options.root,options.output);
  if(output===checked.input||output.startsWith(checked.input+path.sep))throw new Error('Materialized web cannot alter its artifact input.');
  const stage=mkdtempSync(output+'.stage-');let fd:number|null=null;let count=0,bytes=0;
  try {
    const extracted=await readProductArchive(path.join(checked.input,'web.tar.gz'),{
      onFileStart(entry){count++;bytes+=entry.bytes;if(count>checked.manifest.archive.files||count>=20000||entry.bytes>=25_000_000||bytes>checked.manifest.archive.uncompressedBytes)throw new Error('Extracted web exceeds its exact inventory.');const filename=path.resolve(stage,entry.path);if(!filename.startsWith(stage+path.sep))throw new Error('Unsafe web extraction path.');mkdirSync(path.dirname(filename),{recursive:true});fd=openSync(filename,constants.O_WRONLY|constants.O_CREAT|constants.O_EXCL|constants.O_NOFOLLOW,0o644);},
      onFileChunk(_entry,chunk){if(fd===null)throw new Error('No owned extraction file.');for(let offset=0;offset<chunk.length;){const n=writeSync(fd,chunk,offset,chunk.length-offset);if(n<=0)throw new Error('Extraction made no progress.');offset+=n;}},
      onFileEnd(){if(fd===null)throw new Error('Missing extraction file.');closeSync(fd);fd=null;},
    });
    checkFiles(extracted.files,checked.manifest.archive);checkFiles(await tree(stage),checked.manifest.archive);writePrebuiltConfig({root:options.root,webDir:stage});
    if(!same(createWebProbes({webDir:stage}).identity,checked.current.identity)||!same(binding(options),checked.current))throw new Error('Materialized source identity changed.');
    await verifiedInput(options);renameSync(stage,output);return checked.manifest;
  }finally{if(fd!==null)closeSync(fd);rmSync(stage,{recursive:true,force:true});}
}
function assertSuccessfulSeo(filename:string) {
  regular(filename);const seo=record(JSON.parse(readFileSync(filename,'utf8')) as unknown,'SEO report'),counts=record(seo.counts,'SEO counts');
  if(seo.schema!==1||seo.origin!=='https://pcr.tiangong.earth'||seo.mode!=='artifact'||seo.complete!==true||(counts.error??0)!==0||!Array.isArray(seo.findings)||seo.findings.some(v=>record(v,'SEO finding').severity==='error'))throw new Error('SEO report does not establish successful complete verification.');
}
export async function acceptWebBuildArtifact(options:Options & {input:string;webDirectory:string;seoReport:string;output:string}) {
  const checked=await verifiedInput(options),web=directory(options.webDirectory),output=outputPath(options.root,options.output);
  checkFiles(await tree(web),checked.manifest.archive);
  if(lstatSync(options.seoReport,{throwIfNoEntry:false}))throw new Error('SEO evidence already exists; refusing stale acceptance.');
  const seoReport=outputPath(options.root,options.seoReport);
  const checker=path.join(options.root,'scripts/vendor/workspace-seo/check.py'),snapshot=record(smallJson(path.join(options.root,'scripts/vendor/workspace-seo/manifest.json')),'SEO snapshot');
  if(snapshot.schema!==1||snapshot.generated!==true||snapshot.source_repository!=='tiangong-lca/workspace'||snapshot.source_path!=='scripts/seo/check.py'||typeof snapshot.source_commit!=='string'||!/^[a-f0-9]{40}$/u.test(snapshot.source_commit)||snapshot.sha256!==(await proof(checker)).sha256)throw new Error('SEO checker differs from its source manifest.');
  try{execFileSync('python3',[checker,'--root',web,'--origin','https://pcr.tiangong.earth','--output',seoReport],{cwd:options.root,env:{...process.env,...options.env},stdio:'inherit'});}catch{throw new Error('SEO verification failed; original report is retained.');}
  assertSuccessfulSeo(seoReport);
  checkFiles(await tree(web),checked.manifest.archive);if(!same(binding(options),checked.current))throw new Error('Source changed during SEO acceptance.');
  const receipt={schema:1,kind:'pcr-web-build-acceptance',status:'accepted',binding:checked.current,handoff:await proof(path.join(checked.input,'handoff.json')),archive:checked.manifest.archive,buildLog:checked.manifest.buildLog,seo:await proof(seoReport),checker:{path:'scripts/vendor/workspace-seo/check.py',...await proof(checker)}};
  writeFileSync(output,JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});return receipt;
}
export async function bindProductWebBuild(options:Options & {input:string;acceptance:string;seoReport:string;productDirectory:string}) {
  const checked=await verifiedInput(options),accepted=record(smallJson(options.acceptance),'web acceptance'),product=directory(options.productDirectory);
  const checker={path:'scripts/vendor/workspace-seo/check.py',...await proof(path.join(options.root,'scripts/vendor/workspace-seo/check.py'))};
  assertSuccessfulSeo(options.seoReport);
  if(!same(Object.keys(accepted).sort(),['archive','binding','buildLog','checker','handoff','kind','schema','seo','status'])||!same(accepted.checker,checker)||accepted.schema!==1||accepted.kind!=='pcr-web-build-acceptance'||accepted.status!=='accepted'||!same(accepted.binding,checked.current)||!same(accepted.archive,checked.manifest.archive)||!same(accepted.buildLog,checked.manifest.buildLog)||!same(accepted.handoff,await proof(path.join(checked.input,'handoff.json')))||!same(accepted.seo,await proof(options.seoReport)))throw new Error('SEO acceptance differs from the current web handoff.');
  const manifestFile=path.join(product,'release.json'),manifest=record(smallJson(manifestFile),'sealed product'),web=record(manifest.web,'sealed web');
  if(!same(assertProductIdentity(manifest.identity),checked.current.identity)||web.filename!==`pcr-web-${checked.current.identity.version}.tar.gz`||['bytes','sha256','files','uncompressedBytes','treeSha256'].some(key=>web[key]!==checked.manifest.archive[key as keyof Handoff['archive']]))throw new Error('Sealed web archive differs from the qualified handoff.');
  const actual=await proof(path.join(product,web.filename));if(actual.bytes!==web.bytes||actual.sha256!==web.sha256)throw new Error('Sealed web archive checksum differs.');
  const final={...accepted,handoff:{...record(accepted.handoff),filename:'web-build-handoff.json'},buildLog:{...record(accepted.buildLog),filename:'web-build.log'},seo:{...record(accepted.seo),filename:'web-seo.json'},archive:{...checked.manifest.archive,filename:actual.filename},productManifest:await proof(manifestFile),productWeb:actual};
  const copies=[['web-build-handoff.json',path.join(checked.input,'handoff.json')],['web-build.log',path.join(checked.input,'build.log')],['web-seo.json',options.seoReport]]as const;
  for(const [name]of copies)outputPath(options.root,path.join(product,name));const target=outputPath(options.root,path.join(product,'web-build-acceptance.json'));
  if(!same(binding(options),checked.current))throw new Error('Source changed before product audit binding.');
  for(const [name,source]of copies){copyFileSync(source,path.join(product,name),constants.COPYFILE_EXCL);if((await proof(source)).sha256!==(await proof(path.join(product,name))).sha256)throw new Error('Product audit evidence changed during copy.');}
  writeFileSync(target,JSON.stringify(final,null,2)+'\n',{flag:'wx'});return final;
}
async function main(){
  const [command,planDirectory,input,arg,output]=process.argv.slice(2),root=process.cwd();
  if(command==='create'&&planDirectory&&input&&arg&&output&&process.argv.length===7)console.log(JSON.stringify(await createWebBuildArtifact({root,planDirectory,webDirectory:input,buildLog:arg,output})));
  else if(command==='materialize'&&planDirectory&&input&&arg&&!output&&process.argv.length===6)console.log(JSON.stringify(await materializeWebBuildArtifact({root,planDirectory,input,output:arg})));
  else if(command==='accept'&&planDirectory&&input&&arg&&output&&process.argv.length===8){const receipt=process.argv[7];if(!receipt)throw new Error('Missing acceptance output.');console.log(JSON.stringify(await acceptWebBuildArtifact({root,planDirectory,input,webDirectory:arg,seoReport:output,output:receipt})));}
  else if(command==='bind-product'&&planDirectory&&input&&arg&&output&&process.argv.length===8){const productDirectory=process.argv[7];if(!productDirectory)throw new Error('Missing product directory.');console.log(JSON.stringify(await bindProductWebBuild({root,planDirectory,input,acceptance:arg,seoReport:output,productDirectory})));}
  else throw new Error('Usage: product-web-build-artifact.ts create <plan-dir> <verified-web> <build-log> <new-artifact-dir> | materialize <plan-dir> <artifact-dir> <new-web-dir> | accept <plan-dir> <artifact-dir> <web-dir> <new-seo-report> <new-acceptance> | bind-product <plan-dir> <artifact-dir> <acceptance> <seo-report> <product-dir>');
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href)main().catch(error=>{console.error(error instanceof Error?error.message:String(error));process.exitCode=1;});
