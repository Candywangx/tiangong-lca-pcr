import {execFileSync} from 'node:child_process';
import {readFileSync,mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {createRequire} from 'node:module';
import {object,text,strings,parse,hash} from './coverage-types.ts';
import type {SourceEntry} from './coverage-inventory.ts';
export interface EmissionProof {code:string;mappings:string;names:string[];sourceSha256:string}
export type EmissionIndex=ReadonlyMap<string,EmissionProof>;
const require=createRequire(import.meta.url);
const compiler=path.join(path.dirname(require.resolve('typescript/package.json')),'bin/tsc');
export const codeIdentity=(code:string)=>code.replace(/\n\/\/# sourceMappingURL=[^\r\n]*(?:\r?\n)?$/u,'\n');
/** Isolated measurement emission, not a replacement for required strict checks. */
export function emit(root:string,output:string,sources:readonly string[]):void{
 const version=object(parse(readFileSync(path.join(path.dirname(compiler),'../package.json'),'utf8'))).version;if(version!=='7.0.2')throw new Error('Coverage emission requires pinned TypeScript 7.0.2.');
 execFileSync(process.execPath,[compiler,'--ignoreConfig','--target','ES2023','--module','NodeNext','--moduleResolution','NodeNext','--rewriteRelativeImportExtensions','--strict','--verbatimModuleSyntax','--erasableSyntaxOnly','--resolveJsonModule','--sourceMap','--inlineSources','--jsx','react-jsx','--noCheck','--rootDir',root,'--outDir',output,...sources.map(source=>path.join(root,source))],{cwd:root,stdio:'pipe',maxBuffer:16*1024*1024});
}
export function emissionProofs(root:string,sources:readonly SourceEntry[],includePending=false,includeExcluded=false):EmissionIndex{
 const directory=mkdtempSync(path.join(tmpdir(),'pcr-coverage-emission-'));
 try{const eligible=sources.filter(source=>source.lane==='node'||(includePending&&source.lane==='pending')||(includeExcluded&&source.lane==='excluded'&&!source.path.endsWith('.d.ts')));emit(root,directory,eligible.map(source=>source.path));const result=new Map<string,EmissionProof>();
  for(const source of eligible){const filename=path.join(directory,source.path.replace(/\.tsx?$/u,'.js'));const map=object(parse(readFileSync(filename+'.map','utf8')));if(map.version!==3||strings(map.sourcesContent).length!==1||hash(strings(map.sourcesContent)[0]??'')!==source.sha256)throw new Error('Compiler emission did not bind original source.');result.set(source.path,{code:codeIdentity(readFileSync(filename,'utf8')),mappings:text(map.mappings),names:strings(map.names),sourceSha256:source.sha256});}return result;
 }finally{rmSync(directory,{recursive:true,force:true});}
}
