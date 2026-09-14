import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { GoalEventStore } from "./event-store.mjs";
import { GoalHarnessError } from "./errors.mjs";
import { prepareAuthorReport, resolvePreparedReport } from "./report-preparation.mjs";
import { resolveAuthorSubmission } from "./author-submission.mjs";
import { harvestGoalAuthors } from "./orchestrator.mjs";
import { findUuidEnrichmentCandidates } from "./uuid-enrichment-audit.mjs";
import { recordAuthorTurnContract } from "./author-contract.mjs";
import { passingReview } from "./fixtures/review-results.mjs";
import { runHybridSearchWithReceipt, recordHybridCandidateDirectRead, finalizeHybridSearchReceipt } from "./uuid-search-receipts.mjs";

const git = (cwd, args) => execFileSync("git", args, {cwd,encoding:"utf8",stdio:["ignore","pipe","pipe"]}).trim();
const modern = {authoring_contract_version:2,author_draft_schema_version:2,author_report_schema_version:1};
function fixture(t, { historical = false } = {}) {
  const root=mkdtempSync(path.join(tmpdir(),"phase2-prepared-")); t.after(()=>rmSync(root,{recursive:true,force:true}));
  git(root,["init","-q"]);git(root,["config","user.name","Fixture"]);git(root,["config","user.email","fixture@example.invalid"]);
  writeFileSync(path.join(root,".gitignore"),"library/.pcr-builder-state/\n");git(root,["add","."]);git(root,["commit","-qm","baseline"]);
  const baseline=git(root,["rev-parse","HEAD"]), pcr="library/pcrs/test/baler";
  mkdirSync(path.join(root,pcr),{recursive:true});
  const files=["manifest.yaml","pcr.en-US.md","pcr.zh-CN.md","structured.yaml"].map(name=>`${pcr}/${name}`);
  for(const file of files) writeFileSync(path.join(root,file),`transport fixture ${file}\n`);
  git(root,["add",...files]);git(root,["commit","-qm","author four files"]);const commit=git(root,["rev-parse","HEAD"]);
  let task={id:"cpc:3.0:44125",cpc_code:"44125",pcr_path:pcr,queue_action:"create_new",state:"authoring",attempt:1,repair_count:0,
    thread_id:"thread",turn_id:"turn",worktree_path:root,allowed_files:files,author_base_commit:baseline,
    ...(historical?{authoring_contract_version:2}:modern)};
  if(!historical) task=recordAuthorTurnContract(task,task.turn_id);
  const stateDir=path.join(root,"library/.pcr-builder-state/goals/phase2"),store=new GoalEventStore({stateDir});
  store.initialize({goal_id:"phase2",baseline:{commit:baseline},tasks:[task],snapshots:[],stopped:false,verified_common_uuids:[]});
  const read={uuid:"11111111-1111-4111-8111-111111111111",state_code:100,base_name_en:"Alternating current",base_name_zh:"",flow_type:"product",
    classifications:[{id:"17100",label:"Electrical energy"}],property:"Energy",flow_property_uuid:"22222222-2222-4222-8222-222222222222",
    flow_property_name_en:"Energy",flow_property_state_code:100,unit_group_uuid:"33333333-3333-4333-8333-333333333333",
    unit_group_name_en:"Units of energy",unit_group_name_zh:"能量单位",unit_group_state_code:100,reference_unit:"kWh",general_comment:"Purchased electricity.",response_sha256:`sha256:${"a".repeat(64)}`};
  runHybridSearchWithReceipt({stateDir,taskId:task.id,cwd:root,query:"purchased alternating current",randomId:()=>"adopted-receipt",
    toolConfig:{flow_hybrid_search_root:"/unused-local-test-tool"},runner:()=>({status:0,stdout:JSON.stringify({data:[{id:read.uuid}]})})});
  recordHybridCandidateDirectRead({stateDir,taskId:task.id,cwd:root,receiptId:"adopted-receipt",uuid:read.uuid,tiangongCliRoot:"/unused-local-test-tool",reader:()=>({...read})});
  const decisionsPath=path.join(stateDir,"decisions.json");writeFileSync(decisionsPath,JSON.stringify([{uuid:read.uuid,decision:"adopted",reason_code:null,reason:"Matches purchased alternating-current inventory input.",general_comment_review:"Purchased electricity scope verified."}]));
  finalizeHybridSearchReceipt({stateDir,taskId:task.id,cwd:root,receiptId:"adopted-receipt",decisionsPath});
  const claim={uuid:read.uuid,hybrid_search_receipt_id:"adopted-receipt",semantic_review:"Purchased alternating-current inventory input."};
  if(historical) Object.assign(claim,{state_code:100,base_name_en:read.base_name_en,base_name_zh:"",flow_type:"product",classification:"17100",property:"Energy",unit_group:"kWh"});
  const draft={schema_version:historical?1:2,cpc_code:"44125",product_name_en:"Baler",product_name_zh:"打捆机",pcr_path:pcr,queue_action:"create_new",files,sources:[],uuid_audits:[claim],
    inventory:{total_rows:1,matched_rows:1,unresolved_rows:0,unresolved:[]},reference_product_uuid_confirmed:false,ranges:[],
    bilingual:{aligned:true,en_inventory_rows:1,zh_inventory_rows:1},structured_sync:{first_run_ok:true,second_run_clean:true,schema_valid:true},
    validate:{ok:true,exit_code:0,known_shared_artifact_only:false,summary:null},complexity_justification:null,cartesian_expansion_review:null,methodology_necessity_approved:null,commit_sha:commit,unresolved_issues:[]};
  const draftPath=path.join(stateDir,"draft.json");writeFileSync(draftPath,JSON.stringify(draft));
  const config={goal_id:"phase2",project_root:root,tools:{tiangong_cli_root:"/unused-local-test-tool"},retry_policy:{max_attempts:3,max_repairs:2}};
  // Only content and external transport are injected. Task/commit/artifact seals,
  // receipt lifecycle, required-check assessment and submission resolution are real.
  const options={config,stateDir,taskId:task.id,draftPath,cwd:root,reviewFn:passingReview,auditUuidsFn:()=>[{...read,hybrid_search_receipt_id:"adopted-receipt"}]};
  return {root,stateDir,store,task,read,draft,draftPath,config,options};
}

test("draft v2 prepares sealed full report v1 and reference submission v2 harvests exactly once",async t=>{
  const f=fixture(t),before=readFileSync(f.draftPath),reference=prepareAuthorReport(f.options);
  const wire={schema_version:2,prepared_report:reference,boundary_review_report:null,failure:null};
  const resolved=resolveAuthorSubmission({stateDir:f.stateDir,task:f.task,wire});
  assert.equal(resolved.report.schema_version,1);assert.equal(resolved.report.uuid_audits[0].unit_group,f.read.unit_group_uuid);
  for(const [key,value] of Object.entries(modern)) assert.equal(resolved.manifest.binding[key],value);
  assert.deepEqual(readFileSync(f.draftPath),before);
  assert.deepEqual(prepareAuthorReport(f.options),reference);
  const result=await harvestGoalAuthors({config:f.config,stateDir:f.stateDir,
    adapter:{async readThread(){return {thread:{turns:[{id:f.task.turn_id,status:"completed",items:[{type:"agentMessage",text:JSON.stringify(wire)}]}]}};}},
    reviewFn:passingReview,auditUuidsFn:f.options.auditUuidsFn,verifySourcesFn:async()=>[]});
  assert.equal(result.valid_results.length,1);assert.equal(result.state.tasks[0].state,"valid_result");
  assert.deepEqual(result.state.verified_common_uuids.map(entry=>entry.uuid),[f.read.uuid]);
  const again=await harvestGoalAuthors({config:f.config,stateDir:f.stateDir,adapter:{}});
  assert.equal(again.valid_results.length,0);assert.equal(again.state.last_event_sequence,result.state.last_event_sequence);
});

test("prepared version binding rejects changing current draft contract or source turn",t=>{
  const f=fixture(t),reference=prepareAuthorReport(f.options);
  for(const patch of [{author_draft_schema_version:1},{turn_id:"later-turn"}]) {
    const changed={...f.task,...patch};
    f.store.append({event_id:`change-${Object.keys(patch)[0]}`,type:"task_replaced",payload:{task:changed}});
    assert.throws(()=>resolvePreparedReport({stateDir:f.stateDir,task:changed,submission:reference}));
  }
});

test("historical contract2 draft1 prepared artifacts remain unchanged during reference review",t=>{
  const f=fixture(t,{historical:true}),reference=prepareAuthorReport(f.options);
  const resolved=resolvePreparedReport({stateDir:f.stateDir,task:f.task,submission:reference});
  const dir=path.dirname(resolved.report_path),names=["manifest.json","draft.json","report.json"],before=names.map(name=>readFileSync(path.join(dir,name)));
  const again=resolvePreparedReport({stateDir:f.stateDir,task:f.task,submission:reference});
  assert.equal(again.report.schema_version,1);assert.equal(again.report.uuid_audits[0].unit_group,"kWh");
  assert.deepEqual(names.map(name=>readFileSync(path.join(dir,name))),before);
  assert.equal(f.store.rebuild().tasks[0].author_draft_schema_version,undefined);
});

test("preparation cannot silently upgrade a historical task when handed draft v2",t=>{
  const f=fixture(t,{historical:true}); f.draft.schema_version=2;writeFileSync(f.draftPath,JSON.stringify(f.draft));
  assert.throws(()=>prepareAuthorReport(f.options),error=>error.code==="GOAL_AUTHOR_CONTRACT_BINDING_MISMATCH");
  assert.equal(f.store.readEvents().some(event=>event.type==="author_report_prepared"),false);
  assert.equal(f.store.rebuild().tasks[0].author_draft_schema_version,undefined);
});


test("saved sparse-draft prepared report rechecks after observed UUID outage without a new author or version upgrade",async t=>{
  const f=fixture(t),reference=prepareAuthorReport(f.options);
  const wire={schema_version:2,prepared_report:reference,boundary_review_report:null,failure:null};
  const failed=await harvestGoalAuthors({config:f.config,stateDir:f.stateDir,
    adapter:{async readThread(){return {thread:{turns:[{id:f.task.turn_id,status:"completed",items:[{type:"agentMessage",text:JSON.stringify(wire)}]}]}};}},
    reviewFn:passingReview,verifySourcesFn:async()=>[],auditUuidsFn:()=>{throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED","Observed public API network outage",{
      phase:"harvest",origin:"tool_transport",failure_kind:"network",retryable:true,subject_id:f.read.uuid});}});
  assert.equal(failed.valid_results.length,0);assert.equal(failed.snapshot,null);assert.deepEqual(failed.state.verified_common_uuids,[]);
  assert.equal(failed.state.tasks[0].state,"retryable_failure");assert.equal(failed.state.tasks[0].report_complete,true);
  const bytes=readFileSync(failed.state.tasks[0].report_path);
  const recovered=await harvestGoalAuthors({config:f.config,stateDir:f.stateDir,
    adapter:{async readThread(){assert.fail("saved prepared report recheck must not inspect or replace the author");}},
    reviewFn:passingReview,auditUuidsFn:f.options.auditUuidsFn,verifySourcesFn:async()=>[]});
  const task=recovered.state.tasks[0];
  assert.equal(recovered.valid_results.length,1);assert.equal(task.evidence_recheck_count,1);assert.equal(task.thread_id,f.task.thread_id);assert.equal(task.turn_id,f.task.turn_id);
  assert.equal(task.repair_count,0);assert.deepEqual(task.author_turn_contracts,f.task.author_turn_contracts);
  assert.deepEqual(readFileSync(task.report_path),bytes);
});


test("explicit historical draft1/report1 task defaults still resolve old manifests with absent version fields",t=>{
  const f=fixture(t,{historical:true}),reference=prepareAuthorReport(f.options);
  const first=resolvePreparedReport({stateDir:f.stateDir,task:f.task,submission:reference});
  assert.equal(first.manifest.binding.author_draft_schema_version,undefined);
  assert.equal(first.manifest.binding.author_report_schema_version,undefined);
  const manifestPath=path.join(path.dirname(first.report_path),"manifest.json"),before=readFileSync(manifestPath);
  const explicit={...f.task,author_draft_schema_version:1,author_report_schema_version:1};
  f.store.append({event_id:"explicit-historical-defaults",type:"task_replaced",payload:{task:explicit}});
  const loaded=resolvePreparedReport({stateDir:f.stateDir,task:explicit,submission:reference});
  assert.deepEqual(loaded.report,first.report);assert.deepEqual(readFileSync(manifestPath),before);
});

test("full report v1 generated from sparse draft remains directly consumable by UUID enrichment audit",t=>{
  const f=fixture(t),reference=prepareAuthorReport(f.options);
  const resolved=resolvePreparedReport({stateDir:f.stateDir,task:f.task,submission:reference});
  const before=readFileSync(resolved.report_path);
  const task={...f.task,state:"valid_result",report_path:resolved.report_path};
  assert.deepEqual(findUuidEnrichmentCandidates({tasks:[task]},{stateDir:f.stateDir}),[]);
  assert.deepEqual(readFileSync(resolved.report_path),before);
});
