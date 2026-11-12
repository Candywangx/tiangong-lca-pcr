import test from 'node:test';
import assert from 'node:assert/strict';
import {realpathSync,mkdtempSync,mkdirSync,writeFileSync,readFileSync,symlinkSync,rmSync} from 'node:fs';
import path from 'node:path';
import {tmpdir} from 'node:os';
import {readPcrModuleDocumentBundle} from './src/index.ts';
test('module bundle retains original bytes and rejects identity and path escapes',()=>{
 const root=mkdtempSync(path.join(realpathSync(tmpdir()),'pcr-module-doc-'));const dir=path.join(root,'library/modules/core');mkdirSync(dir,{recursive:true});
 const original=readFileSync('library/modules/core/allocation.md');writeFileSync(path.join(dir,'allocation.md'),original);
 try {const bundle=readPcrModuleDocumentBundle({root,group:'core',moduleId:'allocation'});assert.equal(bundle.frontmatter.status,'scaffold');assert.deepEqual(bundle.artifact.bytes,original);assert.equal(bundle.language,'en-US');
 assert.throws(()=>readPcrModuleDocumentBundle({root,group:'../core',moduleId:'allocation'}),/Invalid/);
 writeFileSync(path.join(dir,'fake.md'),original);assert.throws(()=>readPcrModuleDocumentBundle({root,group:'core',moduleId:'fake'}),/identity/);
 symlinkSync(path.join(dir,'allocation.md'),path.join(dir,'linked.md'));assert.throws(()=>readPcrModuleDocumentBundle({root,group:'core',moduleId:'linked'}),/symbolic/);
 }finally{rmSync(root,{recursive:true,force:true});}
});

test('advisory module references resolve exact YAML without approving or rewriting it',()=>{
 const root=mkdtempSync(path.join(realpathSync(tmpdir()),'pcr-advisory-doc-'));
 try {
  for(const [group,folder,kind,slug] of [['activities','activities','activity','assembly-integration-node'],['system_conditions','system-conditions','system-condition','multi-period-attribution']] as const){
   const relative=`library/modules/${folder}/${slug}.yaml`,file=path.join(root,relative),bytes=readFileSync(relative);
   mkdirSync(path.dirname(file),{recursive:true});writeFileSync(file,bytes);
   const moduleId=`module.${kind}.${slug}`,bundle=readPcrModuleDocumentBundle({root,group,moduleId});
   assert.equal(bundle.format,'advisory-yaml');assert.equal(bundle.frontmatter.id,moduleId);assert.equal(bundle.frontmatter.status,'candidate');
   assert.equal(bundle.artifact.path,relative);assert.deepEqual(bundle.artifact.bytes,bytes);assert.equal(bundle.language,'en-US');
   assert.throws(()=>readPcrModuleDocumentBundle({root,group:'core',moduleId}),/Invalid PCR module identity/);
   assert.throws(()=>readPcrModuleDocumentBundle({root,group,moduleId:`module.${kind}.../escape`}),/Invalid PCR module identity/);
   for(const mutated of [bytes.toString().replace(moduleId,moduleId+'-wrong'),bytes.toString().replace('status: candidate','status: active'),bytes.toString().replace('schema_version: 0','schema_version: 1')]){
    writeFileSync(file,mutated);assert.throws(()=>readPcrModuleDocumentBundle({root,group,moduleId}),/identity or candidate metadata mismatch/);
   }
   writeFileSync(file,Buffer.from([0xff]));assert.throws(()=>readPcrModuleDocumentBundle({root,group,moduleId}),/encoding|encoded data/);
   rmSync(file);const original=path.join(root,`${slug}.yaml`);writeFileSync(original,bytes);symlinkSync(original,file);
   assert.throws(()=>readPcrModuleDocumentBundle({root,group,moduleId}),/symbolic/);
  }
 }finally{rmSync(root,{recursive:true,force:true});}
});
