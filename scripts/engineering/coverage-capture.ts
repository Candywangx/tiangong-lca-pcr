/** Measurement-only preload: preserve actual executed bytes before fixture cleanup. */
import { Session } from 'node:inspector';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { threadId } from 'node:worker_threads';
import { hash, parse, object, strings, executionRoute, type Capture } from './coverage-types.ts';
export function retainMapSources(value:unknown,mapUrl:URL,root:string|undefined):unknown{
 const map=object(value),sources=strings(map.sources),originals=map.sourcesContent;
 if(originals!==undefined&&originals!==null&&(!Array.isArray(originals)||originals.length!==sources.length||originals.some(value=>value!==null&&typeof value!=='string')))throw new Error('Invalid inline source-content inventory.');
 if(Array.isArray(originals)&&originals.every(value=>typeof value==='string'))return map;
 const base=typeof map.sourceRoot==='string'?new URL(map.sourceRoot,mapUrl):mapUrl;
 const sourcesContent=sources.map((source,index)=>{const existing:unknown=Array.isArray(originals)?originals[index]:null;if(typeof existing==='string')return existing;if(base.protocol==='pcr:'&&decodeURIComponent(source).split('/').includes('..'))throw new Error('Source map escapes measurement root.');const url=new URL(source,base);let filename:string;if(url.protocol==='pcr:'&&url.hostname==='source'&&root){const relative=decodeURIComponent(url.pathname).slice(1);filename=path.resolve(root,relative);if(!filename.startsWith(path.resolve(root)+path.sep))throw new Error('Source map escapes measurement root.');}else filename=fileURLToPath(url);return readFileSync(filename,'utf8');});
 return {...map,sourcesContent};
}
const directory=process.env.PCR_COVERAGE_CAPTURE;
const marker=Symbol.for('tiangong.pcr.coverage.capture.v1');
const initialized:unknown=Reflect.get(globalThis,marker);
if(directory&&initialized!==true){
 Reflect.set(globalThis,marker,true);
 mkdirSync(directory,{recursive:true});const session=new Session();session.connect();
 session.on('Debugger.scriptParsed',({params})=>{
  if(executionRoute(params.url)!=='candidate')return;
  session.post('Debugger.getScriptSource',{scriptId:params.scriptId},(error,result)=>{
   let fileSource:string|null=null,sourceMap:unknown=null,failure:string|null=error?.message??null;
   try{
    fileSource=readFileSync(fileURLToPath(params.url),'utf8');
    if(params.sourceMapURL){const url=new URL(params.sourceMapURL,params.url);const raw=url.protocol==='data:'?parse(Buffer.from(url.href.slice(url.href.indexOf(',')+1),'base64').toString('utf8')):parse(readFileSync(fileURLToPath(url),'utf8'));sourceMap=retainMapSources(raw,url.protocol==='data:'?new URL(params.url):url,process.env.PCR_COVERAGE_ROOT);}
   }catch(error){failure=error instanceof Error?error.message:String(error);}
   const value:Capture={schemaVersion:1,pid:process.pid,threadId,scriptId:params.scriptId,url:params.url,source:result?.scriptSource??'',fileSource,sourceMap,error:failure};
   const filename=`${process.pid}-${threadId}-${params.scriptId}-${hash(value.source)}.json`;
   writeFileSync(path.join(directory,filename),JSON.stringify(value),{flag:'wx'});
  });
 });
 // Keep the local inspector session alive until process teardown. Disconnecting
 // in an exit listener downgrades Node's later native coverage flush to
 // function-only ranges and loses untaken branches (pinned Node 24 regression).
 session.post('Debugger.enable');
}
