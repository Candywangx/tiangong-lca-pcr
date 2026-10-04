import {spawnSync,execFileSync} from 'node:child_process';
import {existsSync,readFileSync,realpathSync} from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

export const NODE_PROJECTS = ['tsconfig.json','tsconfig.core.json','tsconfig.semantic.json','tsconfig.consumer.json','tsconfig.builder.json','tsconfig.browser-tests.json','tsconfig.release.json','tsconfig.viewer-browser.json'] as const;
export const WEB_PROJECTS = ['tsconfig.web-tools.json','tsconfig.docs-worker.json'] as const;
const STRICT_FLAGS = ['--alwaysStrict','--noImplicitAny','--noImplicitThis','--strictBindCallApply','--strictBuiltinIteratorReturn','--strictFunctionTypes','--strictNullChecks','--strictPropertyInitialization','--useUnknownInCatchVariables'];
function object(value:unknown):value is Record<string,unknown>{return value!==null&&typeof value==='object'&&!Array.isArray(value);}
function compiler(root:string):string{
 const filename=path.join(root,'node_modules/typescript/package.json');const installed:unknown=JSON.parse(readFileSync(filename,'utf8'));
 const manifest:unknown=JSON.parse(readFileSync(path.join(root,'package.json'),'utf8'));
 if(!object(installed)||!object(manifest)||!object(manifest.devDependencies)||installed.version!==manifest.devDependencies.typescript)throw new Error('Strict checking requires the exact pinned TypeScript compiler.');
 return path.join(path.dirname(filename),'bin/tsc');
}
/** Returns files from successful real compiler checks, never a caller-authored approval list. */
export function checkProjects(root:string,projects:readonly string[]):Set<string>{
 root=realpathSync(root);const tsc=compiler(root),checked=new Set<string>();
 for(const project of projects){
  const result=spawnSync(process.execPath,[tsc,'-p',path.resolve(root,project),'--noEmit','--strict',...STRICT_FLAGS,'--noCheck','false','--allowJs','false','--listFiles','--pretty','false'],{cwd:root,encoding:'utf8',maxBuffer:32*1024*1024});
  if(result.error||result.status!==0)throw new Error(`Type checking failed for ${project}:\n${result.error?.message??result.stdout+result.stderr}`);
  for(const line of result.stdout.split(/\r?\n/u)){const file=line.trim();if(path.isAbsolute(file)&&existsSync(file))checked.add(realpathSync(file));}
 }
 return checked;
}
export function assertSourceInventory(root:string,checked:ReadonlySet<string>):number{
 root=realpathSync(root);
 const sources=[...new Set(execFileSync('git',['ls-files','--cached','--others','--exclude-standard','-z','--','*.ts','*.tsx','*.mts','*.cts'],{cwd:root,encoding:'utf8',maxBuffer:32*1024*1024}).split('\0').filter(Boolean))];
 const missing=sources.filter(file=>!checked.has(realpathSync(path.join(root,file))));
 if(missing.length)throw new Error(`Authored TypeScript files are absent from successful strict projects:\n${missing.join('\n')}`);
 return sources.length;
}
export function runTypechecks(mode:string,root=process.cwd()){
 if(!['--node','--web','--all'].includes(mode))throw new Error('Usage: typecheck.ts --node | --web | --all');
 root=realpathSync(root);
 if(mode==='--all'){
  const docs=path.join(root,'packages/pcr-docs');const next=path.join(docs,'node_modules/next/dist/bin/next');
  const generated=spawnSync(process.execPath,[next,'typegen'],{cwd:docs,encoding:'utf8',maxBuffer:8*1024*1024});
  if(generated.error||generated.status!==0)throw new Error(`Next route type generation failed: ${generated.error?.message??generated.stdout+generated.stderr}`);
 }
 const projects=mode==='--node'?[...NODE_PROJECTS]:mode==='--web'?[...WEB_PROJECTS]:[...NODE_PROJECTS,...WEB_PROJECTS,'packages/pcr-docs/tsconfig.json'];
 const checked=checkProjects(root,projects);const authoredFiles=mode==='--all'?assertSourceInventory(root,checked):null;
 return {passed:true,projects,authoredFiles,scope:mode==='--all'?'complete-authored-source':'selected-projects'};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
 try{if(process.argv.length!==3)throw new Error('Usage: typecheck.ts --node | --web | --all');console.log(JSON.stringify(runTypechecks(process.argv[2]??'')));}
 catch(error){console.error(error instanceof Error?error.message:String(error));process.exitCode=1;}
}
