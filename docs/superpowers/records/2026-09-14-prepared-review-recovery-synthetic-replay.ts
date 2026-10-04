// Synthetic runtime comparison only. Run from the repository root; no production state is read.
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, symlinkSync, realpathSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import {field, record, text, goalState, goalTasks, type GoalTask, type UnknownRecord} from '../../../builder/goal-harness/domain.ts';
import {passingReview} from '../../../builder/goal-harness/fixtures/review-results.ts';
const current=process.cwd();
const fingerprintFiles=[
 'builder/goal-harness/orchestrator.ts',
 'builder/goal-harness/errors.ts',
 'builder/goal-harness/event-store.ts',
 'builder/goal-harness/report-preparation.ts',
 'builder/goal-harness/report-assembler.ts',
 'builder/goal-harness/author-contract.ts',
 'builder/goal-harness/author-submission.ts',
 'builder/goal-harness/prompt-compiler.ts',
 'builder/schemas/goal-author-draft.schema.json',
 'builder/goal-harness/review-assessment.ts',
 'builder/goal-harness/author-review.ts',
 'builder/goal-harness/author-gates.ts',
 'builder/goal-harness/evidence-audit.ts',
 'builder/goal-harness/uuid-search-receipts.ts',
 'builder/goal-harness/fixtures/review-results.ts',
 'builder/goal-harness/prepared-intake.test.ts',
 'builder/goal-harness/orchestrator.test.ts',
 'builder/cli/goal-prepare-report.ts',
 'builder/cli/goal-prepare-report.test.ts',
];
const fingerprint=()=>Object.fromEntries(fingerprintFiles.map(file=>[file,createHash('sha256').update(readFileSync(file)).digest('hex')]));
const testedFingerprints=fingerprint();
const baselineCommit='61d8fc44002ed9bb4baaa149e5d074af1a93e96c';
const baseline=mkdtempSync(path.join(tmpdir(),'goal-replay-baseline-'));
process.on('exit',()=>rmSync(baseline,{recursive:true,force:true}));
const archive=execFileSync('git',['archive',baselineCommit,'builder','packages/pcr-core','package.json'],{cwd:current,maxBuffer:64*1024*1024});
execFileSync('tar',['-x','-C',baseline],{input:archive});
symlinkSync(realpathSync(path.join(current,'node_modules')),path.join(baseline,'node_modules'),'dir');
const git=(cwd:string,args:string[])=>execFileSync('git',args,{cwd,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
// Archived baseline modules remain an explicit untrusted data boundary. Only
// checked method results enter the current comparison; no declaration pretends
// that the historical implementation was TypeScript.
async function load(root:string) {
 const extension=root===baseline?'mjs':'ts';
 const module=async(name:string):Promise<UnknownRecord>=>record(await import(pathToFileURL(path.join(root,`builder/goal-harness/${name}.${extension}`)).href) as unknown);
 const orchestrator=await module('orchestrator'),events=await module('event-store'),errors=await module('errors');
 const invoke=(target:unknown,name:string,args:unknown[]):unknown=>{const fn=field(target,name);if(typeof fn!=='function')throw new TypeError(`Missing replay method ${name}`);return Reflect.apply(fn,target,args) as unknown;};
 const construct=(target:unknown,name:string,args:unknown[]):unknown=>{const fn=field(target,name);if(typeof fn!=='function')throw new TypeError(`Missing replay constructor ${name}`);return Reflect.construct(fn,args) as unknown;};
 return {
  store(options:{stateDir:string}){const instance=construct(events,'GoalEventStore',[options]);return {initialize(value:unknown){return invoke(instance,'initialize',[value]);},rebuild(){return goalState(invoke(instance,'rebuild',[]));}};},
  error(code:string,message:string,details?:UnknownRecord){const value=construct(errors,'GoalHarnessError',[code,message,details]);if(!(value instanceof Error))throw new TypeError('Invalid replay error');return value;},
  async dispatchGoalAuthors(options:UnknownRecord){const result=record(await invoke(orchestrator,'dispatchGoalAuthors',[options]));return {...result,dispatched:goalTasks(result.dispatched),state:goalState(result.state)};},
  async harvestGoalAuthors(options:UnknownRecord){return await invoke(orchestrator,'harvestGoalAuthors',[options]);},
  isSavedEvidenceRecheckTask(task:unknown){return typeof orchestrator.isSavedEvidenceRecheckTask==='function' ? Boolean(invoke(orchestrator,'isSavedEvidenceRecheckTask',[task])) : false;},
 };
}
type ReplayRuntime=Awaited<ReturnType<typeof load>>;
function requiredTask(task:GoalTask|undefined):GoalTask {assert.ok(task);return task;}

function fixture(runtime:ReplayRuntime) {
 const root=mkdtempSync(path.join(tmpdir(),'goal-synthetic-replay-'));
 git(root,['init','-q']); git(root,['config','user.name','Synthetic Replay']);git(root,['config','user.email','synthetic@example.invalid']);
 const pcr='library/pcrs/synthetic/example';mkdirSync(path.join(root,pcr),{recursive:true});
 for(const name of ['manifest.yaml','pcr.en-US.md','pcr.zh-CN.md','structured.yaml'])writeFileSync(path.join(root,pcr,name),name+'\n');
 writeFileSync(path.join(root,'.gitignore'),'library/.pcr-builder-state/\n.worktrees/\n');writeFileSync(path.join(root,'policy.txt'),'Synthetic transport fixture only.\n');
 git(root,['add','.']);git(root,['commit','-qm','synthetic baseline']);
 const commit=git(root,['rev-parse','HEAD']),stateDir=path.join(root,'library/.pcr-builder-state/goals/synthetic');
 const store=runtime.store({stateDir});
 store.initialize({schema_version:1,goal_id:'synthetic',baseline:{commit},tasks:[{id:'synthetic-task',cpc_code:'00000',product_name_en:'Synthetic product',product_name_zh:'合成产品',pcr_path:pcr,queue_action:'promote_legacy',state:'queued',queue_order:1,authoring_contract_version:1}],snapshots:[],stopped:false,verified_common_uuids:[]});
 const config:{goal_id:string;project_root:string;policy_prompt_path:string;author_slots:number;tools:UnknownRecord;codex:UnknownRecord;retry_policy:UnknownRecord;author_timeout_seconds?:number}={goal_id:'synthetic',project_root:root,policy_prompt_path:path.join(root,'policy.txt'),author_slots:1,tools:{},codex:{sandbox:'danger-full-access',approval_policy:'never'},retry_policy:{max_attempts:3,max_repairs:2,backoff_seconds:0}};
 return {root,config,stateDir,store,commit};
}
const summary=(task:GoalTask)=>({state:task.state,failure_code:task.failure_code??null,recovery_action:task.recovery_action??null,attempt:task.attempt??0,repair_count:task.repair_count??0,infrastructure_resume_count:task.infrastructure_resume_count??0,evidence_recheck_count:task.evidence_recheck_count??0,execution_continue_count:task.execution_continue_count??0,execution_recheck_count:task.execution_recheck_count??0,coordinator_hold:Boolean(task.coordinator_hold)});
function report(task:GoalTask,commit:string) {return {schema_version:1,cpc_code:task.cpc_code,product_name_en:'Synthetic product',product_name_zh:'合成产品',pcr_path:task.pcr_path,queue_action:task.queue_action,files:task.allowed_files,sources:[],hybrid_search_receipt_ids:[],uuid_audits:[],rejected_uuid_candidates:[],inventory:{total_rows:0,matched_rows:0,unresolved_rows:0,unresolved:[]},reference_product_uuid_confirmed:false,ranges:[],bilingual:{aligned:true,en_inventory_rows:0,zh_inventory_rows:0},structured_sync:{first_run_ok:true,second_run_clean:true,schema_valid:true},validate:{ok:true,exit_code:0,known_shared_artifact_only:false,summary:null},complexity_justification:null,cartesian_expansion_review:null,methodology_necessity_approved:null,commit_sha:commit,unresolved_issues:[],boundary_review:null};}
async function scenario(runtime:ReplayRuntime,kind:string) {
 const f=fixture(runtime);let resumes=0,creates=0;
 const adapter:UnknownRecord={async createAuthorTask(){creates++;return {thread_id:'synthetic-thread',turn_id:'synthetic-source-turn'};},async startRepairTurn(){resumes++;return {thread_id:'synthetic-thread',turn_id:'synthetic-continuation'};},async interruptTurn(){}};
 try {
  const first=requiredTask((await runtime.dispatchGoalAuthors({...f,slots:1,adapter})).dispatched[0]);
  const good={validateReportFn:()=>({valid:true,errors:[]}),auditUuidsFn:()=>[],auditHybridSearchFn:()=>[],verifySourcesFn:async()=>[],reviewFn:passingReview};
  if(kind==='author_execution_window') {
   f.config.author_timeout_seconds=1;
   adapter.readThread=async()=>({thread:{turns:[{id:first.turn_id,status:'inProgress',items:[]}]}});
   await runtime.harvestGoalAuthors({...f,adapter,now:()=>new Date(Date.parse(text(first.dispatched_at))+2000)});
  } else {
   adapter.readThread=async()=>({thread:{turns:[{id:first.turn_id,status:'completed',items:[{type:'agentMessage',text:JSON.stringify(report(first,f.commit))}]}]}});
   const failure=kind==='source_network'
    ? runtime.error('GOAL_SOURCE_LOCATOR_UNREADABLE','Synthetic HTTP transport failure.',{phase:'harvest',origin:'source_http',failure_kind:'network',retryable:true})
    :kind==='content'
     ?runtime.error('GOAL_AUTHOR_PCR_INVALID','Synthetic content conflict.',{phase:'harvest',origin:'harness_review',failure_kind:'author_claim',retryable:false})
     :kind==='integrity'
      ?runtime.error('GOAL_RECEIPT_INTEGRITY_MISMATCH','Synthetic binding conflict.',{phase:'harvest',origin:'receipt_verifier',failure_kind:'receipt_integrity',retryable:false})
      :runtime.error('UNATTRIBUTED_FAILURE','network timeout repair');
   await runtime.harvestGoalAuthors({...f,adapter,...good,...(kind==='source_network'?{verifySourcesFn:async()=>{throw failure;}}:{reviewFn:()=>{throw failure;}})});
  }
  const failed=requiredTask(f.store.rebuild().tasks[0]);
  await runtime.dispatchGoalAuthors({...f,slots:1,adapter,resumeStopped:true});
  if(kind==='source_network'&&runtime.isSavedEvidenceRecheckTask?.(requiredTask(f.store.rebuild().tasks[0]))) await runtime.harvestGoalAuthors({...f,adapter:{},...good});
  return {after_failure:summary(failed),after_recovery:summary(requiredTask(f.store.rebuild().tasks[0])),visible_author_creations:creates,continuation_calls:resumes};
 }finally{rmSync(f.root,{recursive:true,force:true});}
}
const runtimes={before:await load(baseline),after:await load(current)},rows=[];
for(const kind of ['source_network','author_execution_window','content','integrity','unknown']) {
 const row={scenario:kind,before:await scenario(runtimes.before,kind),after:await scenario(runtimes.after,kind)};rows.push(row);
}
const network=rows.find(r=>r.scenario==='source_network'),window=rows.find(r=>r.scenario==='author_execution_window');
assert.ok(network && window);
assert.equal(network.before.after_recovery.repair_count,1);assert.equal(network.after.after_recovery.repair_count,0);assert.equal(network.after.after_recovery.evidence_recheck_count,1);
assert.equal(window.before.after_recovery.repair_count,1);assert.equal(window.after.after_recovery.repair_count,0);assert.equal(window.after.after_recovery.infrastructure_resume_count,0);assert.equal(window.after.after_recovery.execution_continue_count,1);
assert.equal(rows.find(r=>r.scenario==='content')?.after.after_recovery.repair_count,1);
for(const kind of ['integrity','unknown'])assert.equal(rows.find(r=>r.scenario===kind)?.after.after_recovery.coordinator_hold,true);
const stableFixture=fixture(runtimes.after);
let stableStart;
try {
 const ids:string[]=[];
 const adapter={async createAuthorTask(input:UnknownRecord){ids.push(text(input.clientUserMessageId));return {thread_id:'synthetic-visible-thread',turn_id:'synthetic-visible-turn'};}};
 await assert.rejects(runtimes.after.dispatchGoalAuthors({...stableFixture,slots:1,adapter,faultInjector(point:string){if(point==='after_start_observed')throw new Error('Synthetic crash after observed start.');}}));
 const stored=record(requiredTask(stableFixture.store.rebuild().tasks[0]).author_start_intent);
 const resumed=await runtimes.after.dispatchGoalAuthors({...stableFixture,slots:1,adapter,resumeStopped:true});
 const task=requiredTask(resumed.state.tasks[0]);
 assert.ok(task.author_start_intent);
 assert.equal(ids.length,1);assert.equal(stored.client_user_message_id,task.author_start_intent.client_user_message_id);assert.equal(task.attempt,1);
 stableStart={injected_crash_point:'after_start_observed',client_user_message_id:ids[0],persisted_before_recovery:stored.client_user_message_id,persisted_after_recovery:task.author_start_intent.client_user_message_id,adapter_create_calls:ids.length,attempt:task.attempt};
}finally{rmSync(stableFixture.root,{recursive:true,force:true});}
const testPattern='partial sealed receipt success|harvest uses independently bound preparation failure|a completed report interrupted by the review window|phase1a dispatch crash after observed start|phase1a independent enrichment generations|phase1a infrastructure resumes when content attempt';
const testArgs=['--test','--test-reporter=tap',`--test-name-pattern=${testPattern}`,'builder/goal-harness/prepared-intake.test.ts','builder/goal-harness/orchestrator.test.ts'];
const tap=execFileSync(process.execPath,testArgs,{cwd:current,encoding:'utf8',maxBuffer:8*1024*1024});
const tests=[...tap.matchAll(/^ok \d+ - (.+)$/gm)].map(match=>({name:match[1],passed:true}));
assert.equal(tests.length,6);assert.match(tap,/# fail 0\b/u);
assert.deepEqual(fingerprint(),testedFingerprints,'Runtime changed during replay; rerun after edits finish.');
const result={schema_version:1,generated_at:new Date().toISOString(),synthetic_only:true,baseline_commit:baselineCommit,current_runtime_head:git(current,['rev-parse','HEAD']),current_runtime_includes_uncommitted_implementation:git(current,['status','--porcelain','--',...fingerprintFiles]).length>0,production_replay_executed:false,network_access_used:false,
 limitations:['Five before/after cases use legacy-compatible synthetic transport reports and injected review/evidence callbacks; they do not validate real PCR methodology or external-service behavior.','Prepared contract 2 failure proof and completed-review-window paths are verified separately by six named regression tests.','Visible tasks are adapter stubs; no real author, app-server, production Goal or private task log is accessed.','Runtime fingerprints bind this run to file bytes; rerun after subsequent implementation changes.'],
 runtime_sha256:testedFingerprints,rows,stable_start:stableStart,regression_evidence:{command:['node',...testArgs],exit_code:0,passed:tests.length,failed:0,tests}};
// Preserve the retained historical receipt; a new run gets an owned report path.
const output=path.join(current,'.reports/prepared-review-recovery-synthetic-replay.json');
mkdirSync(path.dirname(output),{recursive:true});
writeFileSync(output,JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({artifact:path.relative(current,output),before_after_cases:rows.length,stable_start:stableStart.adapter_create_calls,regression_passed:tests.length,production_replay_executed:false}));
