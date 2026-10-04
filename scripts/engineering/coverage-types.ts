import type { Profiler } from 'node:inspector';
import { createHash } from 'node:crypto';
export type ObjectValue = Record<string, unknown>;
export function object(value: unknown): ObjectValue { if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Coverage input must be an object.'); return value as ObjectValue; }
export function text(value: unknown): string { if (typeof value !== 'string') throw new Error('Coverage input must be a string.'); return value; }
export function integer(value: unknown): number { if (typeof value !== 'number' || !Number.isSafeInteger(value) || value < 0) throw new Error('Coverage input must be a non-negative integer.'); return value; }
export function strings(value: unknown): string[] { if (!Array.isArray(value)) throw new Error('Coverage input must be an array.'); return value.map(text); }
export function hash(value: string | Uint8Array): string { return createHash('sha256').update(value).digest('hex'); }
export function parse(value: string): unknown { const result: unknown = JSON.parse(value); return result; }
export interface Capture { schemaVersion: 1; pid: number; threadId: number; scriptId: string; url: string; source: string; fileSource: string | null; sourceMap: unknown; error: string | null }
export function capture(value: unknown): Capture { const data=object(value); if(data.schemaVersion!==1)throw new Error('Unknown coverage capture version.');return {schemaVersion:1,pid:integer(data.pid),threadId:integer(data.threadId),scriptId:text(data.scriptId),url:text(data.url),source:text(data.source),fileSource:data.fileSource===null?null:text(data.fileSource),sourceMap:data.sourceMap,error:data.error===null?null:text(data.error)}; }
export function functions(value: unknown): Profiler.FunctionCoverage[] {
 if(!Array.isArray(value))throw new Error('Missing V8 functions.');
 return value.map(value=>{const data=object(value);if(typeof data.isBlockCoverage!=='boolean'||!Array.isArray(data.ranges))throw new Error('Invalid V8 coverage.');return {functionName:text(data.functionName),isBlockCoverage:data.isBlockCoverage,ranges:data.ranges.map(value=>{const range=object(value);const startOffset=integer(range.startOffset),endOffset=integer(range.endOffset);if(endOffset<startOffset)throw new Error('Invalid V8 range.');return {startOffset,endOffset,count:integer(range.count)};})};});
}
export interface CoverageConfig { schemaVersion:1; roots:string[]; pendingPrefixes:string[]; exclusions:{path:string;reason:string}[];thresholds:{lines:number;functions:number;branches:number};critical:{prefix:string;branches:number}[] }
export function config(value: unknown): CoverageConfig {
 const data=object(value);if(data.schemaVersion!==1||!Array.isArray(data.exclusions)||!Array.isArray(data.critical))throw new Error('Invalid coverage config.');
 const percent=(value:unknown)=>{const result=integer(value);if(result>100)throw new Error('Invalid coverage threshold.');return result;};const gates=object(data.thresholds);
 const path=(value:unknown)=>{const result=text(value);if(!result||result.startsWith('/')||result.includes('\\')||result.split('/').includes('..')||/[?*]/u.test(result))throw new Error('Coverage configuration requires exact paths or directory prefixes.');return result;};
 return {schemaVersion:1,roots:strings(data.roots).map(path),pendingPrefixes:strings(data.pendingPrefixes).map(path),exclusions:data.exclusions.map(value=>{const row=object(value);const reason=text(row.reason);if(!reason.trim())throw new Error('Coverage exclusions require reasons.');return {path:path(row.path),reason};}),thresholds:{lines:percent(gates.lines),functions:percent(gates.functions),branches:percent(gates.branches)},critical:data.critical.map(value=>{const row=object(value);return {prefix:path(row.prefix),branches:percent(row.branches)};})};
}
/** Route by the innermost package boundary, so bundled dependencies stay external. */
export function executionRoute(url:string):'candidate'|'dependency'|'other'{
 let parsed:URL;try{parsed=new URL(url);}catch{return 'other';}if(parsed.protocol!=='file:'&&parsed.protocol!=='pcr:')return 'other';
 const parts=decodeURIComponent(parsed.pathname).split('/'),index=parts.lastIndexOf('node_modules');if(index<0)return 'candidate';
 return parts[index+1]==='@tiangong-lca'&&parts[index+2]==='pcr'?'candidate':'dependency';
}
