import { execFileSync, spawn } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, readdirSync, realpathSync, lstatSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import v8ToIstanbul from 'v8-to-istanbul';
import istanbul from 'istanbul-lib-coverage';
import type { CoverageSummaryData } from 'istanbul-lib-coverage';
const {createCoverageMap}=istanbul;
import { inventory, trimCoverage, zeroCoverage } from './coverage-inventory.ts';
import {emit,emissionProofs,codeIdentity} from './coverage-emission.ts';
import { proveMapping, excludedCapture, type ProvenMapping } from './coverage-mapping.ts';
import { config, hash, executionRoute, object, text, capture, functions, parse, type CoverageConfig } from './coverage-types.ts';
export function measurementPath(root:string,requested:string):string{
 let ancestor=path.resolve(requested);const suffix:string[]=[];
 while(!lstatSync(ancestor,{throwIfNoEntry:false})){suffix.unshift(path.basename(ancestor));ancestor=path.dirname(ancestor);}
 const output=path.join(realpathSync(ancestor),...suffix),relative=path.relative(root,output).split(path.sep).join('/');
 if(!relative||(!path.isAbsolute(relative)&&!relative.startsWith('../')&&relative!=='.reports'&&!relative.startsWith('.reports/')))throw new Error('Coverage artifacts must use .reports or an external measurement directory.');
 return output;
}
const write=(filename:string,value:unknown)=>writeFileSync(filename,JSON.stringify(value,null,2)+'\n');
export function readConfig(root:string):CoverageConfig{return config(parse(readFileSync(path.join(root,'config/coverage.json'),'utf8')));}
function configurationHash(root:string):string{return hash(readFileSync(path.join(root,'config/coverage.json')));}
function revision(root:string):string{return execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim();}
/** Source hashes are recorded before and after execution; no fixture is retained by changing its cleanup. */
export async function collect(root:string,output:string,command:readonly string[]):Promise<number>{
 root=realpathSync(root);output=measurementPath(root,output);if(!command.length)throw new Error('Coverage collect requires a command.');mkdirSync(path.dirname(output),{recursive:true});mkdirSync(output);const sources=inventory(root,readConfig(root)),commit=revision(root),configSha256=configurationHash(root);
 const raw=path.join(output,'raw'),captures=path.join(output,'captures');mkdirSync(raw);mkdirSync(captures);
 const toolRoot=execFileSync('git',['rev-parse','--show-toplevel'],{cwd:path.dirname(fileURLToPath(import.meta.url)),encoding:'utf8'}).trim();
 const preload=path.join(output,'preload');emit(toolRoot,preload,['scripts/engineering/coverage-capture.ts']);
 const hook=pathToFileURL(path.join(preload,'scripts/engineering/coverage-capture.js')).href;
 const executable=command[0];if(!executable)throw new Error('Missing coverage command.');
 const env={...process.env,NODE_V8_COVERAGE:raw,PCR_COVERAGE_CAPTURE:captures,PCR_COVERAGE_ROOT:root,NODE_OPTIONS:`${process.env.NODE_OPTIONS??''} --import ${JSON.stringify(hook)}`};
 write(path.join(output,'run.json'),{schemaVersion:1,commit,configSha256,node:process.version,sources,command,status:null});
 const child=spawn(executable,command.slice(1),{cwd:root,env,stdio:'inherit'});const status=await new Promise<number>((resolve,reject)=>{child.once('error',reject);child.once('close',code=>resolve(code??1));});
 const after=inventory(root,readConfig(root));const unchanged=configSha256===configurationHash(root)&&commit===revision(root)&&JSON.stringify(sources)===JSON.stringify(after);
 write(path.join(output,'run.json'),{schemaVersion:1,commit,configSha256,node:process.version,sources,command,status,unchanged});if(!unchanged)throw new Error('Coverage source changed during collection.');return status;
}
interface MeasuredScript {scriptId:string;url:string;functions:ReturnType<typeof functions>}
interface MeasurementGroup {proof:ProvenMapping;filename:string;url:string;length:number;scripts:MeasuredScript[]}
function mergeMeasuredScripts(scripts:MeasuredScript[]):ReturnType<typeof functions>{
 // The pinned c8 merger preserves zero function/range counts across processes.
 // Merging converted Istanbul objects instead grants nested branches their
 // positive enclosing module's count in import-only processes.
 const dependency:unknown=createRequire(import.meta.url)('@bcoe/v8-coverage');
 const merge=object(dependency).mergeScriptCovs;if(typeof merge!=='function')throw new Error('Pinned V8 coverage merger is unavailable.');
 const merged:unknown=merge(scripts);return functions(object(merged).functions);
}
export function thresholdFailures(summary:CoverageSummaryData,gates:CoverageConfig['thresholds']):string[]{return (['lines','functions','branches'] as const).flatMap(metric=>summary[metric].pct<gates[metric]?[`${metric}: ${summary[metric].pct} < ${gates[metric]}`]:[]);}
export async function report(root:string,output:string,runs:readonly string[],enforce=true){
 root=realpathSync(root);output=measurementPath(root,output);const settings=readConfig(root),sources=inventory(root,settings),commit=revision(root);if(!sources.some(source=>source.lane!=='excluded'))throw new Error('Coverage has no authored runtime sources.');const map=createCoverageMap();const emissions=emissionProofs(root,sources,true,true);const mapped=new Set<string>();const unmapped:{url:string;reason:string}[]=[],rejectedExecutions:{url:string;reason:string;credit:0}[]=[];const reject=(url:string,reason:string)=>{let canonical=false;try{const relative=url.startsWith('pcr://source/')?decodeURIComponent(url.slice('pcr://source/'.length)):path.relative(root,fileURLToPath(url)).split(path.sep).join('/');canonical=sources.some(entry=>entry.path===relative&&entry.lane!=='excluded');}catch{/* Invalid/unknown URL receives no source credit. */}if(canonical)unmapped.push({url,reason});else rejectedExecutions.push({url,reason,credit:0});};let scripts=0;const excludedExecution:string[]=[];const groups=new Map<string,MeasurementGroup>();const omittedMeasurementLanes:{path:string;kind:string;reason:string;scripts:number}[]=[];
 if(!runs.length)throw new Error('Coverage report needs at least one collected run.');
 for(const run of runs){
  const metadata=object(parse(readFileSync(path.join(run,'run.json'),'utf8')));if(metadata.schemaVersion!==1||metadata.configSha256!==configurationHash(root)||metadata.commit!==commit||metadata.status!==0||metadata.unchanged!==true||metadata.node!==process.version||JSON.stringify(metadata.sources)!==JSON.stringify(sources))throw new Error('Coverage run is failed, incomplete, or belongs to different source/runtime.');
  const captures=new Map<string,ReturnType<typeof capture>>();for(const file of readdirSync(path.join(run,'captures')).sort()){const value=capture(parse(readFileSync(path.join(run,'captures',file),'utf8')));const key=`${value.pid}:${value.threadId}:${value.scriptId}:${value.url}`;if(captures.has(key))throw new Error('Ambiguous captured script identity.');captures.set(key,value);}
  for(const file of readdirSync(path.join(run,'raw')).sort()){
   const match=/^coverage-(\d+)-\d+-(\d+)\.json$/u.exec(file);if(!match)throw new Error('Unrecognized V8 coverage filename.');const raw=object(parse(readFileSync(path.join(run,'raw',file),'utf8')));if(!Array.isArray(raw.result))throw new Error('Invalid V8 report.');
   for(const value of raw.result){const script=object(value),url=text(script.url);if(executionRoute(url)!=='candidate')continue;
    const captured=captures.get(`${match[1]}:${match[2]}:${text(script.scriptId)}:${url}`);if(!captured){reject(url,'Executed source was not retained before cleanup.');continue;}
    // Excluded assertions/fixtures never enter the numerator or denominator.
    if(excludedCapture(captured,sources,root,emissions)){excludedExecution.push(url);continue;}
    let proven;try{proven=proveMapping(root,captured,sources,emissions,true);}catch(error){reject(url,error instanceof Error?error.message:String(error));continue;}
    const ranges=functions(script.functions);if(ranges.some(fn=>fn.ranges.some(range=>range.endOffset>captured.source.length)))throw new Error('V8 range exceeds authenticated executed source.');
    const filename=proven.kind==='native'?proven.path:proven.paths[0];if(!filename)throw new Error('Authenticated coverage has no source target.');
    // Every member was independently code/map proven before grouping. Native
    // sourceURL and emitted sourceMappingURL suffixes contain no authored code;
    // clamp only those authenticated trailing locator bytes to canonical length.
    const length=proven.kind==='native'?proven.source.length:codeIdentity(proven.source).length;
    if(ranges.some(fn=>fn.ranges.some(range=>range.startOffset>length)))throw new Error('V8 range begins outside authenticated authored code.');
    const normalized=ranges.map(fn=>({...fn,ranges:fn.ranges.map(range=>({...range,endOffset:Math.min(range.endOffset,length)}))}));
    const key=`${proven.kind}:${filename}`;let group=groups.get(key);
    if(!group){group={proof:proven,filename,url,length,scripts:[]};groups.set(key,group);}
    if(group.length!==length)throw new Error('Authenticated execution group has inconsistent offsets.');
    group.scripts.push({scriptId:'0',url:filename,functions:normalized});scripts++;
   }
  }
 }
 for(const group of groups.values()){
  const proven=group.proof;
  // A canonical file receives one measurement surface. Native offsets are
  // preferred when available; installed emitted executions remain audited
  // functional evidence without allowing a second Istanbul merge to inflate
  // nested branch counts through enclosing ranges.
  if(proven.kind==='emitted'&&groups.has(`native:${group.filename}`)){
   omittedMeasurementLanes.push({path:path.relative(root,group.filename).split(path.sep).join('/'),kind:'emitted',reason:'Authenticated native measurement selected; cross-surface Istanbul merge is not trusted.',scripts:group.scripts.length});continue;
  }
  const converter=proven.kind==='native'?v8ToIstanbul(proven.path,0,{source:proven.source}):v8ToIstanbul(fileURLToPath(group.url),0,{source:codeIdentity(proven.source),sourceMap:{sourcemap:proven.sourceMap},originalSource:proven.originalSource});
  await converter.load();converter.applyCoverage(mergeMeasuredScripts(group.scripts));
  for(const [filename,value] of Object.entries(converter.toIstanbul())){
   const entry=sources.find(entry=>path.join(root,entry.path)===filename);if(!entry||entry.lane==='excluded')throw new Error('Converter escaped authenticated source inventory.');if(mapped.has(filename))throw new Error('Multiple coverage surfaces cannot merge into one canonical file.');
   const data='data' in value?value.data:value;trimCoverage(data,entry);map.addFileCoverage(data);mapped.add(filename);
  }
 }
 for(const source of sources.filter(entry=>entry.lane!=='excluded')){
  const filename=path.join(root,source.path);if(!mapped.has(filename))map.addFileCoverage(zeroCoverage(root,source));
 }
 const summary=map.getCoverageSummary().toJSON();const failures=thresholdFailures(summary,settings.thresholds);for(const critical of settings.critical){const files=sources.filter(entry=>entry.lane!=='excluded'&&(entry.path===critical.prefix||entry.path.startsWith(critical.prefix)));if(!files.length)throw new Error(`Critical coverage scope is empty: ${critical.prefix}`);for(const entry of files){const branches=map.fileCoverageFor(path.join(root,entry.path)).toSummary().branches;if(branches.pct<critical.branches)failures.push(`${entry.path}: branches ${branches.pct} < ${critical.branches}`);}}
 const pending=sources.filter(entry=>entry.lane==='pending'&&!mapped.has(path.join(root,entry.path))).map(entry=>entry.path);const unexecuted=sources.filter(entry=>entry.lane!=='excluded'&&!mapped.has(path.join(root,entry.path))).map(entry=>entry.path);const result={schemaVersion:1,commit,node:process.version,scope:'complete-authored-typescript-denominator',denominatorComplete:true,allModulesExecuted:unexecuted.length===0,wholeProjectComplete:false,coverageGatePassed:failures.length===0&&unmapped.length===0,branchCensusComplete:false,scripts,summary,failures,pending,unexecuted,unmapped,rejectedExecutions,excludedExecution,omittedMeasurementLanes,measurementMerge:'Authenticated V8 ranges merged before conversion; one canonical surface per file, native preferred.',sources,metricDefinition:'Pinned c8/v8-to-istanbul/Istanbul named-function and runtime-range metrics; unobserved files use one zero-hit (empty-report) function/root branch. Audited type/comment-only lines are filtered; AST function census is diagnostic, not the function gate denominator.',astRuntimeFunctions:sources.filter(entry=>entry.lane!=='excluded').reduce((sum,entry)=>sum+entry.functions.length,0),branchModel:'V8 runtime ranges; unobserved modules have one zero-hit root-range placeholder. This is not a static complete branch census.'};
 mkdirSync(output,{recursive:true});write(path.join(output,'coverage-final.json'),map.toJSON());write(path.join(output,'report.json'),result);
 if(enforce&&(failures.length||unmapped.length))throw new Error(`Coverage gates failed: ${failures.length} threshold failures; ${unmapped.length} unmapped scripts.`);return result;
}
async function main(){const [action,output,...args]=process.argv.slice(2);if(!output)throw new Error('Usage: coverage.ts collect <new-output> -- <command...> | report <output> <run...> | inspect <output> <run...>');if(action==='collect'){if(args.shift()!=='--')throw new Error('Coverage command requires --.');process.exitCode=await collect(process.cwd(),path.resolve(output),args);}else if(action==='report'||action==='inspect'){console.log(JSON.stringify(await report(process.cwd(),path.resolve(output),args.map(value=>path.resolve(value)),action==='report')));}else throw new Error('Unknown coverage command.');}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href)main().catch(error=>{console.error(error instanceof Error?error.message:String(error));process.exitCode=1;});
