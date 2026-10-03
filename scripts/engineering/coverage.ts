import { execFileSync, spawn } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync, readdirSync, realpathSync, lstatSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { stripTypeScriptTypes } from 'node:module';
import v8ToIstanbul from 'v8-to-istanbul';
import istanbul from 'istanbul-lib-coverage';
import type { CoverageSummaryData } from 'istanbul-lib-coverage';
const {createCoverageMap}=istanbul;
import { inventory, trimCoverage } from './coverage-inventory.ts';
import {emit,emissionProofs} from './coverage-emission.ts';
import { proveMapping, excludedCapture } from './coverage-mapping.ts';
import { config, hash, object, text, capture, functions, parse, type CoverageConfig } from './coverage-types.ts';
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
export function thresholdFailures(summary:CoverageSummaryData,gates:CoverageConfig['thresholds']):string[]{return (['lines','functions','branches'] as const).flatMap(metric=>summary[metric].pct<gates[metric]?[`${metric}: ${summary[metric].pct} < ${gates[metric]}`]:[]);}
export async function report(root:string,output:string,runs:readonly string[],enforce=true){
 root=realpathSync(root);output=measurementPath(root,output);const settings=readConfig(root),sources=inventory(root,settings),commit=revision(root);if(!sources.some(source=>source.lane==='node'))throw new Error('Coverage has no authored Node runtime sources.');const map=createCoverageMap();const emissions=emissionProofs(root,sources);const mapped=new Set<string>();const unmapped:{url:string;reason:string}[]=[];let scripts=0;const excludedExecution:string[]=[];
 if(!runs.length)throw new Error('Coverage report needs at least one collected run.');
 for(const run of runs){
  const metadata=object(parse(readFileSync(path.join(run,'run.json'),'utf8')));if(metadata.schemaVersion!==1||metadata.configSha256!==configurationHash(root)||metadata.commit!==commit||metadata.status!==0||metadata.unchanged!==true||metadata.node!==process.version||JSON.stringify(metadata.sources)!==JSON.stringify(sources))throw new Error('Coverage run is failed, incomplete, or belongs to different source/runtime.');
  const captures=new Map<string,ReturnType<typeof capture>>();for(const file of readdirSync(path.join(run,'captures')).sort()){const value=capture(parse(readFileSync(path.join(run,'captures',file),'utf8')));const key=`${value.pid}:${value.threadId}:${value.scriptId}:${value.url}`;if(captures.has(key))throw new Error('Ambiguous captured script identity.');captures.set(key,value);}
  for(const file of readdirSync(path.join(run,'raw')).sort()){
   const match=/^coverage-(\d+)-\d+-(\d+)\.json$/u.exec(file);if(!match)throw new Error('Unrecognized V8 coverage filename.');const raw=object(parse(readFileSync(path.join(run,'raw',file),'utf8')));if(!Array.isArray(raw.result))throw new Error('Invalid V8 report.');
   for(const value of raw.result){const script=object(value),url=text(script.url);if(!url.startsWith('file:')&&!url.startsWith('pcr://source/'))continue;if(url.includes('/node_modules/')&&!url.includes('/node_modules/@tiangong-lca/pcr/'))continue;
    const captured=captures.get(`${match[1]}:${match[2]}:${text(script.scriptId)}:${url}`);if(!captured){unmapped.push({url,reason:'Executed source was not retained before cleanup.'});continue;}
    // Excluded assertions/fixtures never enter the numerator or denominator.
    if(excludedCapture(captured,sources)){excludedExecution.push(url);continue;}
    let proven;try{proven=proveMapping(root,captured,sources,emissions);}catch(error){unmapped.push({url,reason:error instanceof Error?error.message:String(error)});continue;}
    const converter=proven.kind==='native'?v8ToIstanbul(proven.path,0,{source:proven.source}):v8ToIstanbul(fileURLToPath(url),0,{source:proven.source,sourceMap:{sourcemap:proven.sourceMap},originalSource:proven.originalSource});
    await converter.load();const ranges=functions(script.functions);if(ranges.some(fn=>fn.ranges.some(range=>range.endOffset>captured.source.length)))throw new Error('V8 range exceeds authenticated executed source.');converter.applyCoverage(ranges);const converted=converter.toIstanbul();
    for(const [filename,value] of Object.entries(converted)){const entry=sources.find(entry=>path.join(root,entry.path)===filename);if(!entry||entry.lane!=='node')throw new Error('Converter escaped authenticated source inventory.');const data='data' in value?value.data:value;trimCoverage(data,entry);map.addFileCoverage(data);mapped.add(filename);}scripts++;
   }
  }
 }
 for(const source of sources.filter(entry=>entry.lane==='node')){
  const filename=path.join(root,source.path);if(mapped.has(filename))continue;
  const original=readFileSync(filename,'utf8'),converter=v8ToIstanbul(filename,0,{source:original});await converter.load();converter.applyCoverage([{functionName:'',isBlockCoverage:true,ranges:[{startOffset:0,endOffset:original.length,count:0}]}]);
  const value=converter.toIstanbul()[filename];if(!value)throw new Error('Converter omitted never-executed source.');const data='data' in value?value.data:value;trimCoverage(data,source);
  // An unloaded module must not masquerade as one synthetic function. Count actual parsed runtime functions at zero.
  const lines=stripTypeScriptTypes(original).split('\n');const position=(offset:number)=>{let line=1;for(const text of lines){if(offset<=text.length)return {line,column:offset};offset-=text.length+1;line++;}return {line,column:0};};
  data.fnMap={};data.f={};source.functions.forEach((fn,index)=>{const start=position(fn.start),end=position(fn.end);data.fnMap[String(index)]={name:fn.name,decl:{start,end:start},loc:{start,end},line:start.line};data.f[String(index)]=0;});map.addFileCoverage(data);
 }
 const summary=map.getCoverageSummary().toJSON();const failures=thresholdFailures(summary,settings.thresholds);for(const critical of settings.critical){const files=sources.filter(entry=>entry.lane==='node'&&(entry.path===critical.prefix||entry.path.startsWith(critical.prefix)));if(!files.length)throw new Error(`Critical coverage scope is empty: ${critical.prefix}`);for(const entry of files){const branches=map.fileCoverageFor(path.join(root,entry.path)).toSummary().branches;if(branches.pct<critical.branches)failures.push(`${entry.path}: branches ${branches.pct} < ${critical.branches}`);}}
 const pending=sources.filter(entry=>entry.lane==='pending').map(entry=>entry.path);const result={schemaVersion:1,commit,node:process.version,scope:'node-authored-typescript',wholeProjectComplete:false,scripts,summary,failures,pending,unmapped,excludedExecution,sources,branchModel:'V8 runtime ranges; never-executed modules retain a zero-hit root-range placeholder. Static type/comment lines are removed; unexecuted runtime functions are parsed individually.'};
 mkdirSync(output,{recursive:true});write(path.join(output,'coverage-final.json'),map.toJSON());write(path.join(output,'report.json'),result);
 if(enforce&&(failures.length||unmapped.length))throw new Error(`Coverage gates failed: ${failures.length} threshold failures; ${unmapped.length} unmapped scripts.`);return result;
}
async function main(){const [action,output,...args]=process.argv.slice(2);if(!output)throw new Error('Usage: coverage.ts collect <new-output> -- <command...> | report <output> <run...> | inspect <output> <run...>');if(action==='collect'){if(args.shift()!=='--')throw new Error('Coverage command requires --.');process.exitCode=await collect(process.cwd(),path.resolve(output),args);}else if(action==='report'||action==='inspect'){console.log(JSON.stringify(await report(process.cwd(),path.resolve(output),args.map(value=>path.resolve(value)),action==='report')));}else throw new Error('Unknown coverage command.');}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href)main().catch(error=>{console.error(error instanceof Error?error.message:String(error));process.exitCode=1;});
