/** Future browser/Next merge seam. No unproved bundler output receives credit. */
import path from 'node:path';
import v8ToIstanbul from 'v8-to-istanbul';
import type {CoverageMap} from 'istanbul-lib-coverage';
import {proveMapping} from './coverage-mapping.ts';
import {capture,functions,object,hash} from './coverage-types.ts';
import {trimCoverage,type SourceEntry} from './coverage-inventory.ts';
import type {EmissionIndex} from './coverage-emission.ts';
export interface ExternalCoverageResult {mapped:string[];pending:{url:string;reason:string}[]}
/** Inputs are actual CDP script sources/ranges; callers cannot submit precomputed percentages. */
export async function mergeExternalCaptures(root:string,map:CoverageMap,sources:readonly SourceEntry[],emissions:EmissionIndex,input:unknown):Promise<ExternalCoverageResult>{
 if(!Array.isArray(input))throw new Error('External coverage needs a captured-script array.');
 const result:ExternalCoverageResult={mapped:[],pending:[]};
 for(const item of input){const value=object(item);if(value.surface!=='browser'&&value.surface!=='next')throw new Error('Unknown external coverage surface.');const source=capture(value.capture);
  let proof;try{proof=proveMapping(root,source,sources,emissions,true);}catch(error){result.pending.push({url:source.url,reason:error instanceof Error?error.message:String(error)});continue;}
  if(proof.kind!=='emitted')throw new Error('Browser/Next coverage requires authenticated emitted code.');
  const converter=v8ToIstanbul(path.join(root,'__coverage_virtual__',hash(proof.source)+'.js'),0,{source:proof.source,sourceMap:{sourcemap:proof.sourceMap},originalSource:proof.originalSource});
  await converter.load();const ranges=functions(value.functions);if(ranges.some(fn=>fn.ranges.some(range=>range.endOffset>source.source.length)))throw new Error('External V8 range exceeds authenticated executed source.');converter.applyCoverage(ranges);const converted=converter.toIstanbul();
  for(const [file,data] of Object.entries(converted)){if(!proof.paths.includes(file)||!sources.some(entry=>path.join(root,entry.path)===file&&entry.lane!=='excluded'))throw new Error('External converter escaped authenticated inventory.');const entry=sources.find(entry=>path.join(root,entry.path)===file);if(!entry)throw new Error('Missing external source.');if(!entry.runtimeLines.length){result.pending.push({url:source.url,reason:'TSX runtime-line inventory awaits browser/Next mapping qualification.'});continue;}const coverage='data' in data?data.data:data;trimCoverage(coverage,entry);map.addFileCoverage(coverage);result.mapped.push(file);}
 }
 return result;
}
