import type {FileCoverageData} from 'istanbul-lib-coverage';
import {execFileSync} from 'node:child_process';
import {readFileSync,lstatSync,realpathSync,mkdtempSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {stripTypeScriptTypes} from 'node:module';
import {API} from 'typescript/unstable/sync';
import {createVirtualFileSystem} from 'typescript/unstable/fs';
import {SyntaxKind,getLeadingCommentRanges,getTrailingCommentRanges,isTypeNode,isImportDeclaration,isImportSpecifier,isExportDeclaration,isExportSpecifier} from 'typescript/unstable/ast';
import type {Node} from 'typescript/unstable/ast';
import {TraceMap,eachMapping} from '@jridgewell/trace-mapping';
import {emit} from './coverage-emission.ts';
import {hash,object,parse,text,strings,type CoverageConfig} from './coverage-types.ts';
export interface SourceEntry {path:string;sha256:string;lane:'node'|'pending'|'excluded';reason:string|null;runtimeLines:number[];functions:{start:number;end:number;name:string}[]}
function runtimeErased(node:Node):boolean{
 if(isTypeNode(node)||node.kind===SyntaxKind.InterfaceDeclaration||node.kind===SyntaxKind.TypeAliasDeclaration||node.kind===SyntaxKind.TypeParameter)return true;
 if(isImportDeclaration(node)&&node.importClause?.phaseModifier===SyntaxKind.TypeKeyword)return true;
 if((isImportSpecifier(node)||isExportDeclaration(node)||isExportSpecifier(node))&&node.isTypeOnly)return true;
 if('modifiers'in node&&Array.isArray(node.modifiers)&&node.modifiers.some((value:unknown)=>value!==null&&typeof value==='object'&&'kind'in value&&value.kind===SyntaxKind.DeclareKeyword))return true;
 return false;
}
/** Complete authored-source census. Unobserved browser/Next code stays in the denominator. */
export function inventory(root:string,config:CoverageConfig):SourceEntry[]{
 const paths=[...new Set(execFileSync('git',['ls-files','--cached','--others','--exclude-standard','-z','--','*.ts','*.tsx','*.mts','*.cts'],{cwd:root,encoding:'utf8',maxBuffer:32*1024*1024}).split('\0').filter(file=>/\.(?:[cm]?ts|tsx)$/u.test(file)))].sort();
 for(const file of paths)if(/\.[cm]ts$/u.test(file))throw new Error(`Coverage requires an explicit compiler/mapping contract for ${file}; it cannot omit authored TypeScript.`);
 const entries:SourceEntry[]=[],excluded=new Map(config.exclusions.map(row=>[row.path,row.reason]));if(excluded.size!==config.exclusions.length)throw new Error('Duplicate coverage exclusions.');
 const virtualRoot=path.join(root,'__coverage_parser__').replaceAll(path.sep,'/'),configPath=`${virtualRoot}/tsconfig.json`,contents:Record<string,string>={},originals=new Map<string,string>();
 for(const file of paths){
  if(!config.roots.some(prefix=>file===prefix||file.startsWith(prefix+'/')))throw new Error(`Authored TypeScript is outside coverage roots: ${file}`);
  const absolute=path.join(root,file),stat=lstatSync(absolute);if(!stat.isFile()||stat.isSymbolicLink()||realpathSync(absolute)!==absolute)throw new Error(`Unsafe coverage source: ${file}`);
  const bytes=readFileSync(absolute),source=bytes.toString('utf8');let reason=excluded.get(file)??null;if(/(?:\.test\.tsx?$|\.d\.ts$)/u.test(file))reason=reason??'Exact test/declaration filename classification.';
  const lane=reason?'excluded':config.pendingPrefixes.some(prefix=>file.startsWith(prefix))||file.endsWith('.tsx')?'pending':'node';entries.push({path:file,sha256:hash(bytes),lane,reason,runtimeLines:[],functions:[]});
  if(lane!=='excluded'){originals.set(file,source);contents[`${virtualRoot}/${file}`]=source;}
 }
 for(const row of config.exclusions)if(!paths.includes(row.path))throw new Error(`Stale coverage exclusion: ${row.path}`);
 contents[configPath]=JSON.stringify({compilerOptions:{noLib:true,noResolve:true,jsx:'preserve'},files:[...originals.keys()].map(file=>`./${file}`)});
 const jsx=entries.filter(entry=>entry.lane!=='excluded'&&entry.path.endsWith('.tsx')),temporary=jsx.length?mkdtempSync(path.join(tmpdir(),'pcr-coverage-jsx-census-')):null;
 const api=new API({cwd:root,fs:createVirtualFileSystem(contents)});
 try{
  if(temporary)emit(root,temporary,jsx.map(entry=>entry.path));
  const snapshot=api.updateSnapshot({openProject:configPath}),project=snapshot.getProject(configPath);if(!project)throw new Error('Coverage parser is unavailable.');
  for(const entry of entries){
   if(entry.lane==='excluded')continue;const source=project.program.getSourceFile(`${virtualRoot}/${entry.path}`),code=originals.get(entry.path);if(!source||code===undefined)throw new Error('Coverage parser omitted source.');if(project.program.getSyntacticDiagnostics(source.fileName).length)throw new Error(`Invalid coverage source: ${entry.path}`);
   const comments=new Map<number,number>();const visitComments=(node:Node):void=>{for(const range of [...getLeadingCommentRanges(code,node.pos)??[],...getTrailingCommentRanges(code,node.end)??[]])comments.set(range.pos,range.end);node.forEachChild(visitComments);};visitComments(source);
   const characters=(entry.path.endsWith('.tsx')?code:stripTypeScriptTypes(code)).split('');const erase=(start:number,end:number)=>{for(let i=start;i<end;i++)if(characters[i]!=='\n'&&characters[i]!=='\r')characters[i]=' ';};
   const visit=(node:Node):void=>{
    if(runtimeErased(node)){erase(node.getStart(),node.end);return;}
    if([SyntaxKind.FunctionDeclaration,SyntaxKind.FunctionExpression,SyntaxKind.ArrowFunction,SyntaxKind.MethodDeclaration,SyntaxKind.GetAccessor,SyntaxKind.SetAccessor,SyntaxKind.Constructor].includes(node.kind)){
     if('body'in node&&node.body)entry.functions.push({start:node.getStart(),end:node.end,name:`unexecuted-${node.getStart()}`});else{erase(node.getStart(),node.end);return;}
    }
    node.forEachChild(visit);
   };visit(source);
   for(const [start,end]of comments){if(/\b(?:c8|istanbul|v8)\s+ignore\b/u.test(code.slice(start,end)))throw new Error(`Coverage ignore directive: ${entry.path}`);erase(start,end);}
   let runtimeLines=characters.join('').split('\n').flatMap((line,index)=>line.trim()?[index+1]:[]);
   if(entry.path.endsWith('.tsx')){
    if(!temporary)throw new Error('Missing JSX census emission.');const map=object(parse(readFileSync(path.join(temporary,entry.path.replace(/\.tsx$/u,'.js.map')),'utf8')));
    const original=strings(map.sourcesContent);if(original.length!==1||hash(original[0]??'')!==entry.sha256)throw new Error('JSX census emission differs from original source.');
    const trace=new TraceMap({version:3,mappings:text(map.mappings),names:strings(map.names),sources:strings(map.sources),sourcesContent:original}),mappedLines=new Set<number>();eachMapping(trace,mapping=>{if(mapping.originalLine!==null)mappedLines.add(mapping.originalLine);});runtimeLines=runtimeLines.filter(line=>mappedLines.has(line));
   }
   entry.runtimeLines=runtimeLines;if(!runtimeLines.length){entry.lane='excluded';entry.reason='Parser/emission-proven type-only/comment-only module; no runtime statements.';}
  }
  snapshot.dispose();
 }finally{api.close();if(temporary)rmSync(temporary,{recursive:true,force:true});}
 return entries;
}
export function trimCoverage(data:FileCoverageData,source:SourceEntry):void{
 const lines=new Set(source.runtimeLines);for(const [key,span]of Object.entries(data.statementMap))if(!lines.has(span.start.line)){delete data.statementMap[key];delete data.s[key];}
 for(const [key,span]of Object.entries(data.fnMap))if(!source.runtimeLines.some(line=>line>=span.loc.start.line&&line<=span.loc.end.line)){delete data.fnMap[key];delete data.f[key];}
 for(const [key,span]of Object.entries(data.branchMap))if(!source.runtimeLines.some(line=>line>=span.loc.start.line&&line<=span.loc.end.line)){delete data.branchMap[key];delete data.b[key];}
}
export function zeroCoverage(root:string,source:SourceEntry):FileCoverageData{
 const lines=readFileSync(path.join(root,source.path),'utf8').split('\n');
 const start={line:1,column:0},end={line:lines.length,column:lines.at(-1)?.length??0};const data:FileCoverageData={path:path.join(root,source.path),statementMap:{},s:{},fnMap:{},f:{},branchMap:{'0':{loc:{start,end},type:'unobserved-v8-root-placeholder',locations:[{start,end}],line:1}},b:{'0':[0]}};
 for(const line of source.runtimeLines){const key=String(line);data.statementMap[key]={start:{line,column:0},end:{line,column:lines[line-1]?.length??0}};data.s[key]=0;}
 data.fnMap={'0':{name:'(empty-report)',decl:{start,end:start},loc:{start,end},line:1}};data.f={'0':0};return data;
}
