import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {NAVIGATION_BINDING_FILE} from '../lib/navigation-trees.ts';
/** Next also compiles the provider entry, before it creates any tree payloads.
 * Its static export never executes that middleware and removes its compile slot.
 * Only the subsequent verified, non-null binding is eligible for provider import. */
export async function withNavigationCompilationBinding<T>(app:string,run:()=>Promise<T>):Promise<T>{
 const source=path.resolve(app,'../..');if(!fs.existsSync(path.join(source,'packages/pcr-docs/lib/navigation-trees.ts'))||!fs.existsSync(path.join(source,'middleware.ts')))return run();
 const file=path.join(app,'out',NAVIGATION_BINDING_FILE),createdDirectories:string[]=[];
 let cursor=fs.realpathSync(app);for(const part of ['out','generated']){cursor=path.join(cursor,part);if(!fs.existsSync(cursor)){fs.mkdirSync(cursor);createdDirectories.push(cursor);}const stat=fs.lstatSync(cursor);assert(stat.isDirectory()&&!stat.isSymbolicLink()&&fs.realpathSync(cursor)===cursor,'Unsafe provider compilation directory');}
 const existing=fs.lstatSync(file,{throwIfNoEntry:false});if(existing){assert(existing.isFile()&&!existing.isSymbolicLink()&&existing.size<=4096,'Unsafe existing provider binding');return run();}
 fs.writeFileSync(file,'null\n',{flag:'wx'});const owned=fs.lstatSync(file);
 try{return await run();}finally{
  const current=fs.lstatSync(file,{throwIfNoEntry:false});
  if(current&&current.isFile()&&!current.isSymbolicLink()&&current.dev===owned.dev&&current.ino===owned.ino&&current.mtimeMs===owned.mtimeMs&&current.size===5&&fs.realpathSync(file)===file&&fs.readFileSync(file,'utf8')==='null\n')fs.unlinkSync(file);
  for(const directory of createdDirectories.reverse())if(fs.existsSync(directory)&&!fs.lstatSync(directory).isSymbolicLink()&&fs.readdirSync(directory).length===0)fs.rmdirSync(directory);
 }
}
