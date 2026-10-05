import assert from 'node:assert/strict';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { structuredProjectionYaml,parsePcrMarkdownToStructured } from '../../builder/lib/markdown-projection.ts';
import { validateChangedContent } from './ci-content.ts';
import type { CiPlan } from './ci-plan.ts';
const directory='library/pcrs/metal-products-machinery-and-equipment/special-purpose-machinery/stand-alone-photocopiers-printers-and-facsimile-machines';
function fixture(t:import('node:test').TestContext){
 const root=mkdtempSync(path.join(tmpdir(),'pcr-ci-content-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 mkdirSync(path.join(root,directory),{recursive:true});
 for(const file of ['manifest.yaml','pcr.en-US.md','pcr.zh-CN.md','structured.yaml'])cpSync(path.join(process.cwd(),directory,file),path.join(root,directory,file));
 return {root};
}
const plan:CiPlan={schema:1,base:null,head:'a'.repeat(40),event:'pull_request',reusable:false,mode:'data',reason:'data',changedPaths:[directory+'/pcr.en-US.md'],changedPcrs:[directory]};
test('actual selected bilingual record is checked and deterministic projection retained',t=>{
 const f=fixture(t);const result=validateChangedContent(f.root,plan);
 assert.equal(result.records.length,1);assert.equal(result.records[0]?.status,'verified');assert.ok((result.records[0]?.measurementChecks??0)>0);assert.equal(result.methodologyApproval,false);
 const file=path.join(f.root,directory,'structured.yaml');writeFileSync(file,readFileSync(file,'utf8')+'\n');
 assert.throws(()=>validateChangedContent(f.root,plan),/projection|Target PCR/);
});
test('selected source drift, partial deletion and unsafe selection cannot pass',t=>{
 const f=fixture(t);const file=path.join(f.root,directory,'pcr.en-US.md');
 writeFileSync(file,readFileSync(file,'utf8')+'\nNew uncaptured condition.\n');assert.throws(()=>validateChangedContent(f.root,plan));
 for(const selected of ['../outside',directory+'/..',directory+'/revision'])assert.throws(()=>validateChangedContent(f.root,{...plan,changedPcrs:[selected]}),/Invalid selected/);
 assert.throws(()=>validateChangedContent(f.root,{...plan,changedPcrs:[directory,directory]}));
 rmSync(path.join(f.root,directory,'manifest.yaml'));assert.throws(()=>validateChangedContent(f.root,plan));
 rmSync(path.join(f.root,directory),{recursive:true});assert.equal(validateChangedContent(f.root,plan).records[0]?.status,'removed');
 writeFileSync(path.join(f.root,directory),'not a directory');assert.throws(()=>validateChangedContent(f.root,plan),/regular/);
});
test('a rewritten English projection cannot conceal a stale Chinese source relationship',t=>{
 const f=fixture(t);const en=path.join(f.root,directory,'pcr.en-US.md');
 const source=readFileSync(en,'utf8').replace('## 9. Validation Rules','## 9. Validation Rules\n\n| rule_id | applies_to | rule | source_ids |\n| --- | --- | --- | --- |\n| new_unaligned_rule | all | Reject unsupported scope. | |\n');
 assert.notEqual(source,readFileSync(en,'utf8'));writeFileSync(en,source);
 writeFileSync(path.join(f.root,directory,'structured.yaml'),structuredProjectionYaml(parsePcrMarkdownToStructured(source),{sourceMarkdown:source}));
 assert.throws(()=>validateChangedContent(f.root,plan),/complete pass/);
});
test('linked selected PCR root is rejected without following another record',t=>{
 const f=fixture(t);const selected='library/pcrs/agriculture/crops/linked';mkdirSync(path.dirname(path.join(f.root,selected)),{recursive:true});
 symlinkSync(path.join(f.root,directory),path.join(f.root,selected),process.platform==='win32'?'junction':'dir');
 assert.throws(()=>validateChangedContent(f.root,{...plan,changedPcrs:[selected]}),/regular/);
});
