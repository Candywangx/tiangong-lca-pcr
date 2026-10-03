import type {FileCoverageData} from 'istanbul-lib-coverage';
import { execFileSync } from 'node:child_process';
import { readFileSync, lstatSync, realpathSync } from 'node:fs';
import path from 'node:path';
import { stripTypeScriptTypes } from 'node:module';
import { API } from 'typescript/unstable/sync';
import { createVirtualFileSystem } from 'typescript/unstable/fs';
import { SyntaxKind, getLeadingCommentRanges, getTrailingCommentRanges } from 'typescript/unstable/ast';
import type { Node } from 'typescript/unstable/ast';
import { hash, type CoverageConfig } from './coverage-types.ts';
export interface SourceEntry { path:string;sha256:string;lane:'node'|'pending'|'excluded';reason:string|null;runtimeLines:number[];functions:{start:number;end:number;name:string}[] }
export function inventory(root:string,config:CoverageConfig):SourceEntry[]{
 const paths=[...new Set(execFileSync('git',['ls-files','--cached','--others','--exclude-standard','-z','--','*.ts','*.tsx'],{cwd:root,encoding:'utf8',maxBuffer:32*1024*1024}).split('\0').filter(file=>/\.(?:ts|tsx)$/u.test(file)))].sort();
 const entries:SourceEntry[]=[];
 const excluded=new Map(config.exclusions.map(row=>[row.path,row.reason]));
 if(excluded.size!==config.exclusions.length)throw new Error('Duplicate coverage exclusions.');
 const virtualRoot=path.join(root,'__coverage_parser__').replaceAll(path.sep,'/');const configPath=`${virtualRoot}/tsconfig.json`;const contents:Record<string,string>={};const stripped=new Map<string,string>();
 for(const file of paths){
  if(!config.roots.some(prefix=>file===prefix||file.startsWith(prefix+'/')))throw new Error(`Authored TypeScript is outside coverage roots: ${file}`);
  const absolute=path.join(root,file);const stat=lstatSync(absolute);if(!stat.isFile()||stat.isSymbolicLink()||realpathSync(absolute)!==absolute)throw new Error(`Unsafe coverage source: ${file}`);
  const bytes=readFileSync(absolute),source=bytes.toString('utf8');let reason=excluded.get(file)??null;
  if(/(?:\.test\.tsx?$|\.d\.ts$)/u.test(file))reason=reason??'Exact test/declaration filename classification.';
  const lane=reason?'excluded':config.pendingPrefixes.some(prefix=>file.startsWith(prefix))||file.endsWith('.tsx')?'pending':'node';
  entries.push({path:file,sha256:hash(bytes),lane,reason,runtimeLines:[],functions:[]});
  if(lane!=='excluded'&&!file.endsWith('.tsx')){const code=stripTypeScriptTypes(source);stripped.set(file,code);contents[`${virtualRoot}/${file}`]=code;}
 }
 for(const row of config.exclusions)if(!paths.includes(row.path))throw new Error(`Stale coverage exclusion: ${row.path}`);
 contents[configPath]=JSON.stringify({compilerOptions:{noLib:true,noResolve:true,allowJs:true},files:[...stripped.keys()].map(file=>`./${file}`)});
 const api=new API({cwd:root,fs:createVirtualFileSystem(contents)});
 try{
  const snapshot=api.updateSnapshot({openProject:configPath});const project=snapshot.getProject(configPath);if(!project)throw new Error('Coverage parser is unavailable.');
  for(const entry of entries){if(entry.lane==='excluded'||entry.path.endsWith('.tsx'))continue;const source=project.program.getSourceFile(`${virtualRoot}/${entry.path}`),code=stripped.get(entry.path);if(!source||code===undefined)throw new Error('Coverage parser omitted source.');
   if(project.program.getSyntacticDiagnostics(source.fileName).length)throw new Error(`Invalid coverage source: ${entry.path}`);
   const characters=code.split('');const comments=new Map<number,number>();
   const visit=(node:Node):void=>{
    for(const range of [...getLeadingCommentRanges(code,node.pos)??[],...getTrailingCommentRanges(code,node.end)??[]])comments.set(range.pos,range.end);
    if([SyntaxKind.FunctionDeclaration,SyntaxKind.FunctionExpression,SyntaxKind.ArrowFunction,SyntaxKind.MethodDeclaration,SyntaxKind.GetAccessor,SyntaxKind.SetAccessor,SyntaxKind.Constructor].includes(node.kind))entry.functions.push({start:node.getStart(),end:node.end,name:`unexecuted-${node.getStart()}`});
    node.forEachChild(visit);
   };visit(source);
   for(const [start,end] of comments){const comment=code.slice(start,end);if(/\b(?:c8|istanbul|v8)\s+ignore\b/u.test(comment))throw new Error(`Coverage ignore directive: ${entry.path}`);for(let i=start;i<end;i++)if(characters[i]!=='\n'&&characters[i]!=='\r')characters[i]=' ';}
   entry.runtimeLines=characters.join('').split('\n').flatMap((line,index)=>line.trim()?[index+1]:[]);
   if(!entry.runtimeLines.length){entry.lane='excluded';entry.reason='Parser-proven type-only/comment-only module; no emitted runtime statements.';}
  }
  snapshot.dispose();
 }finally{api.close();}
 return entries;
}

export function trimCoverage(data:FileCoverageData,source:SourceEntry):void{
 const lines=new Set(source.runtimeLines);for(const [key,span] of Object.entries(data.statementMap))if(!lines.has(span.start.line)){delete data.statementMap[key];delete data.s[key];}
 for(const [key,span] of Object.entries(data.fnMap))if(!source.runtimeLines.some(line=>line>=span.loc.start.line&&line<=span.loc.end.line)){delete data.fnMap[key];delete data.f[key];}
 for(const [key,span] of Object.entries(data.branchMap))if(!source.runtimeLines.some(line=>line>=span.loc.start.line&&line<=span.loc.end.line)){delete data.branchMap[key];delete data.b[key];}
}
