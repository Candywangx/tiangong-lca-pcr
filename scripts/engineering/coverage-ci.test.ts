import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdirSync,mkdtempSync,readFileSync,rmSync,writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { qualifiedMeasurements } from './coverage-ci.ts';
import { SHARD_NAMES,writeQualificationPlan } from './qualification-plan.ts';
function fixture(t:import('node:test').TestContext){
 const temp=mkdtempSync(path.join(tmpdir(),'pcr-coverage-ci-'));t.after(()=>rmSync(temp,{recursive:true,force:true}));
 const root=path.join(temp,'source');mkdirSync(root);
 const git=(...args:string[])=>execFileSync('git',args,{cwd:root,encoding:'utf8',stdio:['ignore','pipe','pipe']});
 git('init','-q');git('config','user.name','Coverage test');git('config','user.email','coverage@example.invalid');writeFileSync(path.join(root,'README.md'),'source');git('add','.');git('-c','commit.gpgsign=false','commit','-qm','source');
 const planFile=path.join(temp,'qualification.json'),plan=writeQualificationPlan(root,planFile);
 const receipts=path.join(temp,'receipts'),measurements=path.join(temp,'measurements'),docs=path.join(temp,'docs');
 for(const dir of [receipts,measurements,docs])mkdirSync(dir);
 for(const shard of SHARD_NAMES){
  writeFileSync(path.join(receipts,`${shard}.json`),JSON.stringify({schemaVersion:1,qualificationId:plan.qualificationId,planHash:plan.planHash,
   sourceHead:plan.plan.sourceHead,sourceHash:plan.plan.sourceHash,configurationHash:plan.plan.configurationHash,
   shard,tests:[],instrumentation:shard==='corpus'?'none':'v8-requested',execution:'empty-shard',startedAt:'2026-10-05T00:00:00.000Z',completedAt:'2026-10-05T00:00:00.000Z',result:{exitCode:0,signal:null}}));
  if(shard==='corpus')continue;
  const dir=path.join(measurements,`pcr-coverage-${shard}-123-1`);mkdirSync(dir);
  writeFileSync(path.join(dir,'run.json'),JSON.stringify({commit:plan.plan.sourceHead,qualification:{qualificationId:plan.qualificationId,planHash:plan.planHash,selection:shard},command:['node','scripts/engineering/qualification-plan.ts','run',planFile,shard,path.join(receipts,`${shard}.json`)]}));
 }
 writeFileSync(path.join(docs,'run.json'),JSON.stringify({commit:plan.plan.sourceHead,qualification:{qualificationId:plan.qualificationId,planHash:plan.planHash,selection:'documentation'},command:['npm','--prefix','packages/pcr-docs','run','build']}));
 const check=()=>qualifiedMeasurements(root,planFile,receipts,measurements,docs,'123','1');
 return {root,planFile,plan,receipts,measurements,docs,check};
}
test('selects exactly seven isolated measurements plus complete documentation after all eight receipts',t=>{
 const f=fixture(t);const result=f.check();assert.equal(result.runs.length,8);assert.deepEqual(result.uninstrumented,['corpus']);assert.equal(result.proof.shards.length,8);
 assert.throws(()=>qualifiedMeasurements(f.root,f.planFile,f.receipts,f.measurements,f.docs,'0','1'),/Invalid CI/);
 rmSync(path.join(f.receipts,'corpus.json'));assert.throws(f.check,/Missing qualification/);
});
test('missing or extra raw shard cannot be hidden by otherwise complete receipts',t=>{
 const f=fixture(t);mkdirSync(path.join(f.measurements,'foreign'));assert.throws(f.check,/Missing or extra/);rmSync(path.join(f.measurements,'foreign'),{recursive:true});
 rmSync(path.join(f.measurements,'pcr-coverage-core-123-1'),{recursive:true});assert.throws(f.check,/Missing or extra/);
});
test('same-source raw data from an older qualification invocation is rejected',t=>{
 const f=fixture(t),file=path.join(f.measurements,'pcr-coverage-core-123-1','run.json');const raw=readFileSync(file,'utf8');
 const metadata=JSON.parse(raw) as Record<string,unknown>;metadata.qualification={qualificationId:'old',planHash:f.plan.planHash,selection:'core'};writeFileSync(file,JSON.stringify(metadata));assert.throws(f.check,/qualification/i);
 writeFileSync(file,raw);const doc=path.join(f.docs,'run.json');const value=JSON.parse(readFileSync(doc,'utf8')) as Record<string,unknown>;value.command=['npm','run','partial-build'];writeFileSync(doc,JSON.stringify(value));assert.throws(f.check,/complete documentation/);
});
test('foreign selection, command, source and instrumentation cannot qualify',t=>{
 const f=fixture(t),file=path.join(f.measurements,'pcr-coverage-core-123-1','run.json'),original=readFileSync(file,'utf8');
 for(const command of [[],['node','scripts/engineering/suites.ts','run','core'],['node','scripts/engineering/qualification-plan.ts','run',f.planFile,'builder','core.json']]){
  const v=JSON.parse(original) as Record<string,unknown>;v.command=command;writeFileSync(file,JSON.stringify(v));assert.throws(f.check,/planned shard/);
 }
 const source=JSON.parse(original) as Record<string,unknown>;source.commit='0'.repeat(40);writeFileSync(file,JSON.stringify(source));assert.throws(f.check,/planned shard/);
 writeFileSync(file,original);const receipt=path.join(f.receipts,'core.json');const r=JSON.parse(readFileSync(receipt,'utf8')) as Record<string,unknown>;r.instrumentation='none';writeFileSync(receipt,JSON.stringify(r));assert.throws(f.check,/measurement disposition/);
});
