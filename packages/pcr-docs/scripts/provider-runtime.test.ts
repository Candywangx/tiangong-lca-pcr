import {pathToFileURL} from 'node:url';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { providerRuntimeSourceRoot, createProviderRuntime, verifyProviderRuntimeSource, verifyProviderRuntimeExport, PROVIDER_RUNTIME_FILE, PROVIDER_RUNTIME_PATHS } from './provider-runtime.ts';
const source='a'.repeat(40);
function fixture(){const root=fs.mkdtempSync(path.join(os.tmpdir(),'pcr-provider-proof-'));const out=path.join(root,'out');fs.mkdirSync(out);return{root,out,cleanup:()=>fs.rmSync(root,{recursive:true,force:true})};}
function write(root:string,file:string,value:string){const target=path.join(root,file);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,value);}
function install(root:string){for(const file of PROVIDER_RUNTIME_PATHS)write(root,file,file.endsWith('.json')?JSON.stringify({schemaVersion:1,entries:[{from:'/en/docs/pcr/a/b/c/chapters/old/',to:'/en/docs/pcr/a/b/c/',anchor:'section'}]}):'export {};\n');}
test('provider source absence is explicit, complete exact closure is required and tampering fails',()=>{const f=fixture();try{
 assert.equal(createProviderRuntime(f.root,source),undefined);install(f.root);const proof=createProviderRuntime(f.root,source)!;
 assert.equal(proof.routes.length,1);verifyProviderRuntimeSource(f.root,proof,source);
 write(f.root,'middleware.ts','// substituted\n');assert.throws(()=>verifyProviderRuntimeSource(f.root,proof,source));
 fs.unlinkSync(path.join(f.root,'middleware.ts'));assert.throws(()=>createProviderRuntime(f.root,source));
}finally{f.cleanup();}});
test('sealed compatibility proof checks source, safe routes, physical target and actual default anchors',()=>{const f=fixture();try{
 install(f.root);const proof=createProviderRuntime(f.root,source)!;write(f.out,PROVIDER_RUNTIME_FILE,JSON.stringify(proof));write(f.out,'en/docs/pcr/a/b/c/index.html','<main><h2 id="section">body</h2></main>');
 assert.deepEqual(verifyProviderRuntimeExport(f.out,source,proof),proof);
 assert.throws(()=>verifyProviderRuntimeExport(f.out,'b'.repeat(40),proof));
 write(f.out,'en/docs/pcr/a/b/c/index.html','<h2 id="other">body</h2>');assert.throws(()=>verifyProviderRuntimeExport(f.out,source,proof));
 const changed=structuredClone(proof);changed.routes[0]!.to='https://example.com/';write(f.out,PROVIDER_RUNTIME_FILE,JSON.stringify(changed));assert.throws(()=>verifyProviderRuntimeExport(f.out,source));
 fs.unlinkSync(path.join(f.out,PROVIDER_RUNTIME_FILE));assert.throws(()=>verifyProviderRuntimeExport(f.out,source,proof));
}finally{f.cleanup();}});

test('published anchor verification cannot mistake a data-id attribute for a real HTML id',()=>{const f=fixture();try{
 install(f.root);const proof=createProviderRuntime(f.root,source)!;write(f.out,PROVIDER_RUNTIME_FILE,JSON.stringify(proof));write(f.out,'en/docs/pcr/a/b/c/index.html','<main><h2 data-id="section">wrong anchor</h2></main>');
 assert.throws(()=>verifyProviderRuntimeExport(f.out,source,proof));
}finally{f.cleanup();}});

test('source lookup handles emitted paths and stops at the nearest checkout boundary',()=>{const f=fixture();try{
 write(f.root,'.git','gitdir: fixture-marker\n');const emitted='dist/test-engineering/scripts/engineering/space name.js';write(f.root,emitted,'export {};\n');
 assert.equal(providerRuntimeSourceRoot(pathToFileURL(path.join(f.root,emitted))),f.root);
 const nested=path.join(f.root,'nested');write(nested,'.git','gitdir: nested-fixture\n');write(nested,emitted,'export {};\n');assert.equal(providerRuntimeSourceRoot(pathToFileURL(path.join(nested,emitted))),nested);
 fs.unlinkSync(path.join(f.root,'.git'));assert.throws(()=>providerRuntimeSourceRoot(pathToFileURL(path.join(f.root,emitted))),/Cannot locate authored provider source repository/);
}finally{f.cleanup();}});
