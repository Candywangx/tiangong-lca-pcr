import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { classifyQualification, createCiPlan, isReusableContext, verifyCiPlan } from './ci-plan.ts';
const pcr = 'library/pcrs/machinery/general/machine/pcr.en-US.md';
const decision = (paths: readonly string[], options: Partial<{event:string;reusable:boolean;verifiedDiff:boolean}> = {}) => classifyQualification({event:'pull_request',reusable:false,verifiedDiff:true,paths,...options});

test('only bounded canonical data and associated derived data use the data lane', () => {
  const value = decision([pcr,pcr,pcr.replace('en-US','zh-CN'),'library/catalog.yaml','library/indexes/pcr-index.yaml',
    'classifications/mappings/cpc-3.0-to-pcr.yaml','classifications/indexes/cpc-3.0-coverage.json','classifications/aliases/pcr-id-aliases.yaml','docs/adr/0300-accept-machine-mapping.md']);
  assert.equal(value.mode,'data');assert.equal(value.changedPaths.length,8);
  assert.deepEqual(value.changedPcrs,['library/pcrs/machinery/general/machine']);
  assert.equal(decision([pcr.replace('pcr.en-US.md','manifest.yaml')],{event:'push'}).mode,'data');
});

test('unknown, mixed, shared, executable, history and optional-language changes select full', () => {
  for (const name of ['package.json','package-lock.json','.github/workflows/validate.yml','scripts/engineering/ci-plan.ts',
    'builder/lib/markdown-projection.ts','library/modules/core/allocation.md','classifications/systems/cpc/3.0/source.csv',
    pcr.replace('en-US','de-DE'),pcr.replace('pcr.en-US.md','revision/pcr.en-US.md'),
    pcr.replace('pcr.en-US.md','release-history.yaml'),'docs/authoring-guide.md','README.md','unknown']) {
    assert.equal(decision([pcr,name]).mode,'full',name);
  }
  assert.equal(decision(['library/catalog.yaml']).reason,'no-selected-canonical-record');
  assert.equal(decision(['docs/adr/0300-accept-mapping.md']).mode,'full');
  assert.equal(decision([]).reason,'empty-diff');
  assert.equal(decision([pcr],{verifiedDiff:false}).reason,'diff-not-proven');
});

test('invalid and platform-dependent paths cannot enter a reduced plan', () => {
  for(const name of ['/absolute','../outside','./relative','double//path','back\\slash','space path','control\npath','nul\0path','tab\tpath','delete\u007f'])
    assert.equal(decision([pcr,name]).reason,'unrecognized-path',JSON.stringify(name));
});

test('all reusable invocations including an empty legacy tag select full', () => {
  for(const inputs of ['{"product_tag":""}','{"product_tag":"v0.4.2"}','{"force_full":false}','[]','true','nullish','null '])
    assert.equal(isReusableContext(inputs),true,inputs);
  for(const inputs of [undefined,'','null','{}'])assert.equal(isReusableContext(inputs),false);
  assert.equal(decision([pcr],{reusable:true}).reason,'reusable-release-qualification');
  assert.equal(decision([pcr],{event:'workflow_call'}).mode,'full');
  for(const event of ['workflow_dispatch','pull_request_target','schedule','unknown',''])assert.equal(decision([pcr],{event}).mode,'full');
});

function repository(t: import('node:test').TestContext) {
  const root=mkdtempSync(path.join(tmpdir(),'pcr-ci-plan-'));
  t.after(()=>rmSync(root,{recursive:true,force:true}));
  const git=(...args:string[])=>execFileSync('git',args,{cwd:root,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
  git('init','-q');git('config','user.name','Qualification test');git('config','user.email','qualification@example.invalid');
  writeFileSync(path.join(root,'README.md'),'base\n');git('add','.');git('commit','-qm','base');const base=git('rev-parse','HEAD');
  mkdirSync(path.dirname(path.join(root,pcr)),{recursive:true});writeFileSync(path.join(root,pcr),'source\n');
  git('add','.');git('commit','-qm','data');const head=git('rev-parse','HEAD');
  return {root,base,head,git,context:{event:'pull_request',reusable:false,base,head}};
}

test('actual Git diff binds added/deleted records and refuses head/source drift', t => {
  const f=repository(t);const plan=createCiPlan(f.root,f.context);assert.equal(plan.mode,'data');
  assert.deepEqual(verifyCiPlan(f.root,plan,f.context),plan);
  assert.throws(()=>verifyCiPlan(f.root,{...plan,mode:'full'},f.context),/changed/);
  assert.throws(()=>verifyCiPlan(f.root,{...plan,extra:true},f.context),/changed/);
  assert.throws(()=>verifyCiPlan(f.root,plan,{...f.context,reusable:true}),/changed/);
  for(const value of [null,[],1,{head:1},{head:f.head,event:'push',reusable:false,base:1}])assert.throws(()=>verifyCiPlan(f.root,value,f.context),/Invalid/);
  assert.throws(()=>createCiPlan(f.root,{...f.context,head:'--help'}),/exact checked-out/);
  assert.throws(()=>createCiPlan(f.root,{...f.context,head:f.base}),/exact checked-out/);
  writeFileSync(path.join(f.root,pcr),'drift\n');assert.throws(()=>createCiPlan(f.root,f.context));
  f.git('checkout','--',pcr);f.git('rm',pcr);f.git('commit','-qm','delete');
  const deleted=createCiPlan(f.root,{...f.context,base:f.head,head:f.git('rev-parse','HEAD')});
  assert.equal(deleted.mode,'data');assert.deepEqual(deleted.changedPaths,[pcr]);
});

test('missing history, new branch and nonancestor bases fail back to full', t => {
  const f=repository(t);
  for(const base of [undefined,'','0'.repeat(40),'f'.repeat(40),'--help'])
    assert.equal(createCiPlan(f.root,{event:'push',reusable:false,head:f.head,...(base===undefined?{}:{base})}).mode,'full');
  f.git('checkout','--orphan','other');f.git('rm','-rf','.');writeFileSync(path.join(f.root,'other'),'other');
  f.git('add','.');f.git('commit','-qm','other');const other=f.git('rev-parse','HEAD');f.git('checkout','--detach',f.head);
  assert.equal(createCiPlan(f.root,{...f.context,base:other}).reason,'diff-not-proven');
});

test('command creates once and verifies against fresh workflow context', t => {
  const f=repository(t);const script=fileURLToPath(new URL(import.meta.url.endsWith('.js')?'./ci-plan.js':'./ci-plan.ts',import.meta.url));const output=path.join(f.root,'plan.json');
  const env={...process.env,CI_EVENT_NAME:'pull_request',CI_WORKFLOW_INPUTS:'{}',CI_BASE_SHA:f.base,CI_HEAD_SHA:f.head};
  const run=(...args:string[])=>spawnSync(process.execPath,[script,...args],{cwd:f.root,env,encoding:'utf8'});
  assert.equal(run('plan',output).status,0);assert.equal(run('verify',output).status,0);
  assert.equal(run('plan',output).status,1);assert.equal(run('unknown',output).status,1);assert.equal(run('plan').status,1);
  const plan:unknown=JSON.parse(readFileSync(output,'utf8'));assert.ok(plan);
  const forced=spawnSync(process.execPath,[script,'verify',output],{cwd:f.root,env:{...env,CI_WORKFLOW_INPUTS:'{"product_tag":""}'},encoding:'utf8'});
  assert.equal(forced.status,1);assert.match(forced.stderr,/changed/);
});
