import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import Ajv2020 from "ajv/dist/2020.js";
const api = await import("./author-contract.mjs").catch(() => ({}));
const legacy = { authoring_contract_version: 1, author_draft_schema_version: 1, author_report_schema_version: 1 };
const modern = { authoring_contract_version: 2, author_draft_schema_version: 2, author_report_schema_version: 1 };

test("contract resolution keeps historical version defaults without mutating the task", () => {
  assert.equal(typeof api.resolveAuthorContract, "function");
  const task = { state: "authoring", turn_id: "historical" };
  assert.deepEqual(api.resolveAuthorContract(task), legacy);
  assert.deepEqual(task, { state: "authoring", turn_id: "historical" });
  assert.deepEqual(api.resolveAuthorContract({ authoring_contract_version: 2 }), { ...legacy, authoring_contract_version: 2 });
  assert.deepEqual(api.resolveAuthorContract(modern), modern);
});

test("first author pinning only updates a truly fresh task with no explicit contract", () => {
  assert.equal(typeof api.pinFirstAuthorContract, "function");
  const fresh = { state: "queued", attempt: 0 };
  assert.deepEqual(api.pinFirstAuthorContract(fresh), { ...fresh, ...modern });
  assert.deepEqual(fresh, { state: "queued", attempt: 0 });
  for (const history of [{attempt:1},{thread_id:"old"},{worktree_path:"old"},{author_commit:"old"},{last_author_commit:"old"},{repair_count:1},{repair_history:[{}]},{previous_thread_ids:["old"]},{repair_resume_count:1},{infrastructure_resume_count:1},{execution_continue_count:1},{author_start_intent:{client_user_message_id:"started"}},{report_path:"saved-report"},{state:"repair_requested"}]) {
    const task = {...fresh,...history}; assert.equal(api.pinFirstAuthorContract(task), task);
  }
  for (const contract of [legacy,modern,{authoring_contract_version:2}]) {
    const task = {...fresh,...contract}; assert.equal(api.pinFirstAuthorContract(task),task);
  }
});

test("unsupported version combinations fail before prompts or task mutation", () => {
  assert.equal(typeof api.resolveAuthorContract, "function");
  for (const task of [{authoring_contract_version:1,author_draft_schema_version:2},{authoring_contract_version:3},{author_report_schema_version:2},{author_draft_schema_version:0},{authoring_contract_version:null}]) {
    assert.throws(()=>api.resolveAuthorContract(task),error=>error.code === "GOAL_AUTHOR_CONTRACT_INVALID" && error.details.failure_kind === "configuration");
  }
});

test("turn contract snapshots are immutable and new continuations retain historical versions", () => {
  assert.equal(typeof api.recordAuthorTurnContract,"function");
  const task={state:"authoring",thread_id:"thread",turn_id:"turn",authoring_contract_version:2};
  const recorded=api.recordAuthorTurnContract(task,"turn");
  assert.deepEqual(recorded.author_turn_contracts,[{thread_id:"thread",turn_id:"turn",...legacy,authoring_contract_version:2}]);
  assert.equal(task.author_turn_contracts,undefined);
  assert.equal(api.recordAuthorTurnContract(recorded,"turn"),recorded);
  const next=api.recordAuthorTurnContract({...recorded,turn_id:"continue"},"continue");
  assert.equal(next.author_turn_contracts[1].author_draft_schema_version,1);
  assert.throws(()=>api.recordAuthorTurnContract({...recorded,author_draft_schema_version:2},"turn"),error=>error.code === "GOAL_AUTHOR_CONTRACT_BINDING_MISMATCH");
});

function draft(version,audit) {
  return {schema_version:version,cpc_code:"44125",product_name_en:"Baler",product_name_zh:"打捆机",pcr_path:"library/pcrs/test/pcr",queue_action:"create_new",files:["a","b","c","d"],sources:[],uuid_audits:[audit],inventory:{total_rows:0,matched_rows:0,unresolved_rows:0,unresolved:[]},reference_product_uuid_confirmed:false,ranges:[],bilingual:{aligned:true,en_inventory_rows:0,zh_inventory_rows:0},structured_sync:{first_run_ok:true,second_run_clean:true,schema_valid:true},validate:{ok:true,exit_code:0,known_shared_artifact_only:false,summary:null},complexity_justification:null,cartesian_expansion_review:null,methodology_necessity_approved:null,commit_sha:"a".repeat(40),unresolved_issues:[]};
}
test("draft v2 permits minimal adopted UUID judgments while v1 still requires full identity",()=>{
  const ajv = new Ajv2020({allErrors:true,strict:true});
  ajv.addFormat("uuid",/^[a-f0-9]{8}-[a-f0-9]{4}-[1-8][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i);
  const validate=ajv.compile(JSON.parse(readFileSync(new URL("../schemas/goal-author-draft.schema.json",import.meta.url))));
  const minimal={uuid:"11111111-1111-4111-8111-111111111111",hybrid_search_receipt_id:"receipt-1",semantic_review:"Verified applicability to the reference product."};
  assert.equal(validate(draft(2,minimal)),true,JSON.stringify(validate.errors));
  assert.equal(validate(draft(1,minimal)),false);
  const full={...minimal,state_code:100,base_name_en:"Baler",base_name_zh:"打捆机",flow_type:"product",classification:"44125",property:"Mass",unit_group:"kg"};
  assert.equal(validate(draft(1,full)),true,JSON.stringify(validate.errors));
  assert.equal(validate(draft(2,full)),true,JSON.stringify(validate.errors));
  for (const field of Object.keys(minimal)) {const incomplete={...minimal};delete incomplete[field];assert.equal(validate(draft(2,incomplete)),false);}
  assert.equal(validate(draft(2,{...minimal,state_code:101})),false);
  assert.equal(validate(draft(3,minimal)),false);
});

test("a current turn cannot resolve or compile a different valid contract than its saved snapshot", () => {
  const recorded=api.recordAuthorTurnContract({state:"authoring",thread_id:"thread",turn_id:"turn",authoring_contract_version:2},"turn");
  assert.throws(()=>api.resolveAuthorContract({...recorded,author_draft_schema_version:2}),error=>error.code === "GOAL_AUTHOR_CONTRACT_BINDING_MISMATCH");
});

test("artifact versions bind sparse drafts and full reports to the fixed task and prepared manifest", () => {
  assert.equal(typeof api.assertAuthorArtifactVersions, "function");
  assert.deepEqual(api.assertAuthorArtifactVersions({task:modern,draftVersion:2,reportVersion:1,manifestBinding:modern}), modern);
  for (const mismatch of [{draftVersion:1},{reportVersion:2},{manifestBinding:{authoring_contract_version:2}}]) {
    assert.throws(()=>api.assertAuthorArtifactVersions({task:modern,draftVersion:2,reportVersion:1,manifestBinding:modern,...mismatch}), error=>error.code === "GOAL_AUTHOR_CONTRACT_BINDING_MISMATCH");
  }
});

test("historical prepared manifest missing version fields resolves read-only as draft1/report1", () => {
  assert.equal(typeof api.assertAuthorArtifactVersions, "function");
  const manifestBinding = {task_id:"old",authoring_contract_version:2}, before=JSON.stringify(manifestBinding);
  const task={authoring_contract_version:2};
  assert.deepEqual(api.assertAuthorArtifactVersions({task,draftVersion:1,reportVersion:1,manifestBinding}),{...legacy,authoring_contract_version:2});
  assert.equal(JSON.stringify(manifestBinding),before);
  assert.deepEqual(task,{authoring_contract_version:2});
  assert.throws(()=>api.assertAuthorArtifactVersions({task,draftVersion:2,reportVersion:1,manifestBinding}), error=>error.code === "GOAL_AUTHOR_CONTRACT_BINDING_MISMATCH");
});

test("a queued task with an existing turn id is historical even if other runtime fields were lost", () => {
  const task={state:"queued",attempt:0,turn_id:"preserved-old-turn"};
  assert.equal(api.pinFirstAuthorContract(task),task);
});

test("contract resolution rejects duplicate, incomplete or malformed saved turn snapshots before dispatch", () => {
  const snapshot={thread_id:"thread",turn_id:"turn",...modern};
  for(const snapshots of [[snapshot,{...snapshot}],[{thread_id:"thread",turn_id:"turn",authoring_contract_version:2}],{}]) {
    assert.throws(()=>api.resolveAuthorContract({...modern,thread_id:"thread",turn_id:"turn",author_turn_contracts:snapshots}),error=>error.code==="GOAL_AUTHOR_CONTRACT_BINDING_MISMATCH");
  }
});

test("a missing current snapshot cannot conceal drift from the same task's earlier fixed turn contract", () => {
  const previous={thread_id:"thread",turn_id:"earlier-turn",...legacy,authoring_contract_version:2};
  const task={...modern,thread_id:"thread",turn_id:"new-turn",author_turn_contracts:[previous]};
  assert.throws(()=>api.resolveAuthorContract(task),error=>error.code==="GOAL_AUTHOR_CONTRACT_BINDING_MISMATCH");
  assert.throws(()=>api.recordAuthorTurnContract(task,"new-turn"),error=>error.code==="GOAL_AUTHOR_CONTRACT_BINDING_MISMATCH");
});
