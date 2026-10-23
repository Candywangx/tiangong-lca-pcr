import test,{after} from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import {tmpdir} from "node:os";
import {fileURLToPath} from "node:url";
import {spawnSync} from "node:child_process";
import {compileDocsBrowserAssets} from "./browser-assets.ts";
const output=fs.mkdtempSync(path.join(tmpdir(),"pcr-emitted-search-"));
compileDocsBrowserAssets({outputRoot:output});
fs.copyFileSync(fileURLToPath(import.meta.resolve("flexsearch")),path.join(output,"search-engine.mjs"));
after(()=>fs.rmSync(output,{recursive:true,force:true}));
for(const scenario of ["cutoff","duplicates","late-retry","late-import-retry","lazy","identity","legacy-1","legacy-2","legacy-3","legacy-4","legacy-5","mixed-format"])test("emitted Worker: "+scenario,()=>{
 const result=spawnSync(process.execPath,[fileURLToPath(new URL("./fixtures/search-pack-worker.ts",import.meta.url)),output,scenario],{encoding:"utf8",timeout:30_000});
 assert.equal(result.status,0,result.stdout+result.stderr);assert.equal(result.signal,null);
});
