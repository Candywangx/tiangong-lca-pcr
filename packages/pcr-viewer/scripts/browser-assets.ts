import {createRequire} from "node:module";
import {spawnSync} from "node:child_process";
import {readFileSync,lstatSync,mkdirSync,mkdtempSync,realpathSync,rmSync,writeFileSync} from "node:fs";
import {tmpdir} from "node:os";
import path from "node:path";
import {fileURLToPath} from "node:url";
import {unknownField} from "../../pcr-core/src/types.ts";
const repositoryRoot=path.resolve(fileURLToPath(new URL("../../..",import.meta.url)));
/** Emit browser code from owned TypeScript; source files are never browser assets. */
export function compileViewerBrowserAssets({root=repositoryRoot,outputRoot}:{root?:string;outputRoot:string}) {
 let compiler:string,installed:unknown;
 // Detached pinned worktrees resolve their coordinator-owned dependencies by
 // Node's normal source-relative lookup. The captured source still owns the pin.
 try {const compilerPackage=createRequire(path.join(root,"package.json")).resolve("typescript/package.json");compiler=path.join(path.dirname(compilerPackage),"bin/tsc");installed=JSON.parse(readFileSync(compilerPackage,"utf8"));if(!lstatSync(compiler).isFile())throw new Error("compiler is not a regular file");}
 catch(error){throw Object.assign(new Error("The pinned TypeScript compiler is required to generate browser assets.",{cause:error}),{code:"BROWSER_COMPILER_UNAVAILABLE"});}
 const manifest:unknown=JSON.parse(readFileSync(path.join(root,"package.json"),"utf8"));
 const expected=unknownField(unknownField(manifest,"devDependencies"),"typescript");
 if(typeof expected!=="string"||unknownField(installed,"version")!==expected)throw Object.assign(new Error("The browser compiler does not match the repository's pinned TypeScript version."),{code:"BROWSER_COMPILER_UNAVAILABLE"});
 const temporary=mkdtempSync(path.join(realpathSync(tmpdir()),"pcr-browser-assets-"));
 try {
  const compiled=spawnSync(process.execPath,[compiler,"-p",path.join(root,"tsconfig.viewer-browser.json"),"--outDir",temporary],{cwd:root,encoding:"utf8",maxBuffer:8*1024*1024});
  if(compiled.error||compiled.status!==0)throw new Error("Browser TypeScript compilation failed: "+(compiled.error?.message??compiled.stdout+compiled.stderr));
  const outputs=new Map<string,Buffer>();
  for(const name of ["app.js", "viewer-core.js"]){const source=path.join(temporary,name);const stat=lstatSync(source);if(!stat.isFile()||stat.isSymbolicLink())throw new Error("Compiled browser asset is not a regular file: "+name);outputs.set(name,readFileSync(source));}
  mkdirSync(outputRoot,{recursive:true});
  for(const [name,bytes]of outputs)writeFileSync(path.join(outputRoot,name),bytes);
  return {compilerVersion:expected,files:["app.js", "viewer-core.js"]};
 }finally{rmSync(temporary,{recursive:true,force:true});}
}
