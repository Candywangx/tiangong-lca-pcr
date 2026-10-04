import {createHash} from 'node:crypto';
import {closeSync,constants,createReadStream,existsSync,fstatSync,lstatSync,mkdirSync,mkdtempSync,openSync,readFileSync,realpathSync,rmSync,writeFileSync,writeSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {readProductArchive,validateProductManifest,verifyProductArtifacts,verifyProductWebTree} from '../../builder/scripts/product-release.ts';
import type {ProductIdentity} from '../../builder/scripts/product-identity.ts';
import type {ArtifactProof,ProductManifest} from '../../builder/scripts/release-types.ts';
import {prepareSiteBrowserReport,qualifySiteBrowser} from './site-browser.ts';

export class SealedWebError extends Error {
  readonly code:string;
  constructor(code:string,message:string,options?:ErrorOptions){super(message,options);this.name='SealedWebError';this.code=code;}
}
export interface SealedWebInput {root:string;expectedSource:string;expectedIdentity?:ProductIdentity}
export interface SealedWebOptions extends SealedWebInput {report:string}
export interface BundleFileBinding extends ArtifactProof {statIdentity:string}
export interface ExtractedSealedWeb {
  directory:string;
  manifest:ProductManifest;
  inputFiles:readonly BundleFileBinding[];
  tree:Awaited<ReturnType<typeof verifyProductWebTree>>;
}
function fail(code:string,message:string):never{throw new SealedWebError(code,message);}
function errorMessage(error:unknown){return error instanceof Error?error.message:String(error);}
function expectedSource(value:unknown):asserts value is string{
  if(typeof value!=='string'||!/^[a-f0-9]{40}$/u.test(value)||/^0+$/u.test(value))fail('SEALED_WEB_ARGUMENT','Expected a full nonzero 40-character source commit.');
}
function bundleRoot(input:string){const root=path.resolve(input),stat=lstatSync(root,{throwIfNoEntry:false});if(!stat?.isDirectory()||stat.isSymbolicLink())fail('SEALED_WEB_INPUT','Expected an existing regular sealed bundle directory.');return realpathSync(root);}
function statIdentity(stat:ReturnType<typeof fstatSync>){return `${stat.dev}:${stat.ino}:${stat.size}:${stat.mtimeMs}:${stat.ctimeMs}`;}
function regularFile(root:string,name:string){
  if(!/^[A-Za-z0-9][A-Za-z0-9._-]*$/u.test(name))fail('SEALED_WEB_INPUT','Invalid sealed bundle member filename.');
  const file=path.join(root,name),stat=lstatSync(file,{throwIfNoEntry:false});if(!stat?.isFile()||stat.isSymbolicLink())fail('SEALED_WEB_INPUT','Bundle member must be a regular file: '+name);return file;
}
async function bindFile(root:string,name:string,onChunk?:(chunk:Buffer)=>void):Promise<BundleFileBinding>{
  const file=regularFile(root,name),before=lstatSync(file),fd=openSync(file,constants.O_RDONLY|(constants.O_NOFOLLOW??0)|(constants.O_NONBLOCK??0));
  try{
    if(!fstatSync(fd).isFile()||statIdentity(fstatSync(fd))!==statIdentity(before))fail('SEALED_WEB_INPUT_CHANGED','Bundle member changed while opening: '+name);
    const hash=createHash('sha256');let bytes=0;
    for await(const value of createReadStream(file,{fd,autoClose:false})){const chunk:unknown=value;if(!Buffer.isBuffer(chunk))fail('SEALED_WEB_INPUT','Bundle stream must yield bytes.');hash.update(chunk);bytes+=chunk.length;onChunk?.(chunk);}
    const after=lstatSync(file);if(after.isSymbolicLink()||!after.isFile()||bytes!==before.size||statIdentity(fstatSync(fd))!==statIdentity(before)||statIdentity(after)!==statIdentity(before))fail('SEALED_WEB_INPUT_CHANGED','Bundle member changed while reading: '+name);
    return {filename:name,bytes,sha256:hash.digest('hex'),statIdentity:statIdentity(before)};
  }finally{closeSync(fd);}
}
async function bindBundle(root:string,manifest:ProductManifest){
  const result:BundleFileBinding[]=[];for(const name of [...manifest.artifacts.map(artifact=>artifact.filename),'release.json','SHA256SUMS'].sort())result.push(await bindFile(root,name));return result;
}
function writeAll(fd:number,bytes:Uint8Array){let offset=0;while(offset<bytes.length){const written=writeSync(fd,bytes,offset,bytes.length-offset);if(written<=0)fail('SEALED_WEB_EXTRACT','Cannot write complete archive bytes.');offset+=written;}}
function sameBindings(before:readonly BundleFileBinding[],after:readonly BundleFileBinding[]){return JSON.stringify(before)===JSON.stringify(after);}
function readManifest(root:string,options:SealedWebInput){
  expectedSource(options.expectedSource);
  let raw:unknown;try{raw=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(readFileSync(regularFile(root,'release.json'))));}catch(error){throw new SealedWebError('SEALED_WEB_INPUT','Cannot read the sealed release manifest.',{cause:error});}
  const manifest=validateProductManifest(raw,options.expectedIdentity?{identity:options.expectedIdentity}:{});
  if(manifest.identity.sourceCommit!==options.expectedSource)fail('SEALED_WEB_SOURCE_MISMATCH','Sealed product source differs from --expected-source.');return manifest;
}

/** Verified extraction lifecycle only. This operation does not certify browser
 * acceptance; the CLI below always invokes the real three-engine qualifier. */
export async function withSealedWebExtraction<T>(options:SealedWebInput,read:(web:ExtractedSealedWeb)=>Promise<T>):Promise<T>{return extractSealedWeb(options,read);}
async function extractSealedWeb<T>(options:SealedWebInput,read:(web:ExtractedSealedWeb)=>Promise<T>,observer:{directory?:(directory:string)=>void;inputUnchanged?:()=>void}={}):Promise<T>{
  const root=bundleRoot(options.root),declared=readManifest(root,options);
  const before=await bindBundle(root,declared);
  const manifest=await verifyProductArtifacts(root,{expectedIdentity:declared.identity});
  if(!sameBindings(before,await bindBundle(root,manifest)))fail('SEALED_WEB_INPUT_CHANGED','Sealed product changed during artifact verification.');
  const scratch=mkdtempSync(path.join(realpathSync(tmpdir()),'pcr-sealed-web-')),directory=path.join(scratch,'web'),archivePath=path.join(scratch,'verified-web.tar.gz');
  let active:number|undefined;
  try{
    mkdirSync(directory);observer.directory?.(directory);
    const archiveFd=openSync(archivePath,constants.O_WRONLY|constants.O_CREAT|constants.O_EXCL,0o600);
    let copied:BundleFileBinding;
    try{copied=await bindFile(root,manifest.web.filename,chunk=>writeAll(archiveFd,chunk));}finally{closeSync(archiveFd);}
    if(copied.sha256!==manifest.web.sha256||copied.bytes!==manifest.web.bytes)fail('SEALED_WEB_INPUT_CHANGED','Copied archive differs from its sealed proof.');
    const archive=await readProductArchive(archivePath,{
      onFileStart(entry){const destination=path.join(directory,...entry.path.split('/'));const relative=path.relative(directory,destination);if(!relative||relative.startsWith('..'+path.sep)||path.isAbsolute(relative))fail('SEALED_WEB_EXTRACT','Archive member escapes owned extraction.');mkdirSync(path.dirname(destination),{recursive:true});active=openSync(destination,constants.O_WRONLY|constants.O_CREAT|constants.O_EXCL|(constants.O_NOFOLLOW??0),0o600);if(!fstatSync(active).isFile())fail('SEALED_WEB_EXTRACT','Extracted member must be a regular file.');},
      onFileChunk(_entry,chunk){if(active===undefined)fail('SEALED_WEB_EXTRACT','Archive body lacks its owned file.');writeAll(active,chunk);},
      onFileEnd(entry){if(active===undefined)fail('SEALED_WEB_EXTRACT','Archive file was not opened.');if(fstatSync(active).size!==entry.bytes)fail('SEALED_WEB_EXTRACT','Extracted file length differs.');closeSync(active);active=undefined;},
    });
    if(archive.treeSha256!==manifest.web.treeSha256||archive.files.length!==manifest.web.files||archive.files.reduce((sum,file)=>sum+file.bytes,0)!==manifest.web.uncompressedBytes)fail('SEALED_WEB_EXTRACT','Extracted archive differs from sealed web identity.');
    const tree=await verifyProductWebTree(directory,manifest);
    let operation:{ok:true;value:T}|{ok:false;error:unknown};
    try{operation={ok:true,value:await read({directory,manifest:structuredClone(manifest),inputFiles:structuredClone(before),tree})};}catch(error){operation={ok:false,error};}
    const after=await bindBundle(root,manifest);
    if(!sameBindings(before,after))fail('SEALED_WEB_INPUT_CHANGED','Sealed input changed during qualification.');
    observer.inputUnchanged?.();if(!operation.ok)throw operation.error;return operation.value;
  }finally{try{if(active!==undefined)closeSync(active);}finally{rmSync(scratch,{recursive:true,force:true});}}
}

export function parseSealedWebArguments(args:readonly string[]):SealedWebOptions|'help'{
  if(args.length===1&&args[0]==='--help')return 'help';
  const fields:Record<string,string>={};
  for(let index=0;index<args.length;index+=2){const key=args[index],value=args[index+1];if(!key||!['--bundle','--report','--expected-source'].includes(key)||!value||value.startsWith('--')||fields[key]!==undefined)fail('SEALED_WEB_ARGUMENT','Require exactly --bundle, --report and --expected-source.');fields[key]=value;}
  if(!fields['--bundle']||!fields['--report']||!fields['--expected-source'])fail('SEALED_WEB_ARGUMENT','All sealed web arguments are required.');expectedSource(fields['--expected-source']);return {root:path.resolve(fields['--bundle']),report:path.resolve(fields['--report']),expectedSource:fields['--expected-source']};
}
export async function qualifySealedWeb(options:SealedWebOptions){
  expectedSource(options.expectedSource);const root=bundleRoot(options.root),report=prepareSiteBrowserReport(options.report,root);
  const receipt:{schemaVersion:number;operation:string;expectedSource:string;bundle:string;startedAt:string;completedAt:string;status:string;identity?:ProductIdentity;archive?:ProductManifest['web'];inputFiles?:readonly BundleFileBinding[];tree?:ExtractedSealedWeb['tree'];browserReport?:string;browserCases?:number;extractionDirectory?:string;extractionRemoved:boolean;immutableInputVerified:boolean;failure?:string}={schemaVersion:1,operation:'sealed-product-web-browser-qualification',expectedSource:options.expectedSource,bundle:root,startedAt:new Date().toISOString(),completedAt:'',status:'running',extractionRemoved:true,immutableInputVerified:false};
  try{
    await extractSealedWeb(options,async web=>{receipt.identity=web.manifest.identity;receipt.archive=web.manifest.web;receipt.inputFiles=web.inputFiles;receipt.tree=web.tree;const browser=await qualifySiteBrowser({root:web.directory,report:path.join(report,'browser')});receipt.browserCases=browser.results.length;},{directory(directory){receipt.extractionDirectory=directory;receipt.extractionRemoved=false;},inputUnchanged(){receipt.immutableInputVerified=true;}});
    receipt.status='passed';return receipt;
  }catch(error){receipt.status='failed';receipt.failure=errorMessage(error);throw error;}
  finally{if(existsSync(path.join(report,'browser/report.json')))receipt.browserReport='browser/report.json';receipt.extractionRemoved=receipt.extractionDirectory===undefined||!existsSync(path.dirname(receipt.extractionDirectory));receipt.completedAt=new Date().toISOString();writeFileSync(path.join(report,'qualification.json'),JSON.stringify(receipt,null,2)+'\n');}
}
export async function sealedWebMain(args:readonly string[]){const options=parseSealedWebArguments(args);if(options==='help'){process.stdout.write('Usage: node scripts/engineering/sealed-web.ts --bundle <sealed product bundle> --report <NEW external evidence directory> --expected-source <full commit SHA>\n');return;}const receipt=await qualifySealedWeb(options);process.stdout.write(JSON.stringify({status:receipt.status,sourceCommit:receipt.identity?.sourceCommit,report:path.join(options.report,'qualification.json'),cases:receipt.browserCases})+'\n');}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))sealedWebMain(process.argv.slice(2)).catch((error:unknown)=>{process.stderr.write(JSON.stringify({code:error instanceof SealedWebError?error.code:'SEALED_WEB_FAILED',message:errorMessage(error)})+'\n');process.exitCode=1;});
