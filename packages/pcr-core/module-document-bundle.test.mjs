import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,symlinkSync,rmSync} from 'node:fs';
import path from 'node:path';
import {tmpdir} from 'node:os';
import {readPcrModuleDocumentBundle} from './src/index.mjs';
test('module bundle retains original bytes and rejects identity and path escapes',()=>{
 const root=mkdtempSync(path.join(tmpdir(),'pcr-module-doc-'));const dir=path.join(root,'library/modules/core');mkdirSync(dir,{recursive:true});
 const original=readFileSync('library/modules/core/allocation.md');writeFileSync(path.join(dir,'allocation.md'),original);
 try {const bundle=readPcrModuleDocumentBundle({root,group:'core',moduleId:'allocation'});assert.equal(bundle.frontmatter.status,'scaffold');assert.deepEqual(bundle.artifact.bytes,original);assert.equal(bundle.language,'en-US');
 assert.throws(()=>readPcrModuleDocumentBundle({root,group:'../core',moduleId:'allocation'}),/Invalid/);
 writeFileSync(path.join(dir,'fake.md'),original);assert.throws(()=>readPcrModuleDocumentBundle({root,group:'core',moduleId:'fake'}),/identity/);
 symlinkSync(path.join(dir,'allocation.md'),path.join(dir,'linked.md'));assert.throws(()=>readPcrModuleDocumentBundle({root,group:'core',moduleId:'linked'}),/symbolic/);
 }finally{rmSync(root,{recursive:true,force:true});}
});
