import type {TestContext} from "node:test";
import type {UnknownRecord} from "./domain.ts";
import {item,object,string} from "./fixtures/assertions.ts";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, realpathSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { GoalEventStore } from "./event-store.ts";
import { dispatchGoalAuthors } from "./orchestrator.ts";
import { resolveAuthorContract } from "./author-contract.ts";

const git=(cwd:string,args:string[])=>execFileSync("git",args,{cwd,encoding:"utf8",stdio:["ignore","pipe","pipe"]}).trim();
function fixture(t:TestContext, contract:UnknownRecord) {
  const root=realpathSync(mkdtempSync(path.join(tmpdir(),"phase2-dispatch-")));t.after(()=>rmSync(root,{recursive:true,force:true}));
  git(root,["init","-q"]);git(root,["config","user.name","Fixture"]);git(root,["config","user.email","fixture@example.invalid"]);
  const pcr="library/pcrs/category/item";mkdirSync(path.join(root,pcr),{recursive:true});
  writeFileSync(path.join(root,".gitignore"),"library/.pcr-builder-state/\n.worktrees/\n");writeFileSync(path.join(root,"policy.txt"),"Policy fixture\n");
  for(const file of ["manifest.yaml","pcr.en-US.md","pcr.zh-CN.md","structured.yaml"])writeFileSync(path.join(root,pcr,file),`${file}\n`);
  git(root,["add","."]);git(root,["commit","-qm","base"]);
  const stateDir=path.join(root,"library/.pcr-builder-state/goals/fixture"),store=new GoalEventStore({stateDir});
  store.initialize({schema_version:1,goal_id:"fixture",baseline:{commit:git(root,["rev-parse","HEAD"])},
    tasks:[{id:"cpc:3.0:41111",cpc_code:"41111",product_name_en:"Pig iron",product_name_zh:"生铁",pcr_path:pcr,queue_action:"promote_legacy",state:"queued",queue_order:1,...contract}],snapshots:[],stopped:false,verified_common_uuids:[]});
  const config={goal_id:"fixture",project_root:root,policy_prompt_path:path.join(root,"policy.txt"),author_slots:1,tools:{},
    retry_policy:{max_attempts:3,max_repairs:2},codex:{sandbox:"danger-full-access",approval_policy:"never",model:"gpt-5.6-terra",reasoning_effort:"high"}};
  return {root,stateDir,store,config};
}
const modern={authoring_contract_version:2,author_draft_schema_version:2,author_report_schema_version:1};
for(const [label,initial,expected] of ([
  ["fresh first task",{},modern],
  ["historical contract2",{authoring_contract_version:2},{...modern,author_draft_schema_version:1}],
  ["legacy contract1",{authoring_contract_version:1},{authoring_contract_version:1,author_draft_schema_version:1,author_report_schema_version:1}],
] satisfies [string,UnknownRecord,typeof modern][])) test(`${label} pins its initial contract and preserves every repair and infrastructure turn snapshot`,async t=>{
  const f=fixture(t,initial),calls:UnknownRecord[]=[];
  const adapter={async createAuthorTask(input:unknown){calls.push(object(input));return {thread_id:"same-thread",turn_id:"initial"};},
    async startRepairTurn(input:unknown){calls.push(object(input));return {thread_id:"same-thread",turn_id:`continued-${calls.length}`};}};
  const first=item((await dispatchGoalAuthors({...f,slots:1,adapter})).dispatched[0]);
  assert.deepEqual(resolveAuthorContract(first),expected);
  assert.deepEqual(first.author_turn_contracts,[{thread_id:"same-thread",turn_id:"initial",...expected}]);
  const initialSnapshot=structuredClone(item(item(first.author_turn_contracts)[0]));
  f.store.append({event_id:"content-finding",type:"task_replaced",payload:{task:{...first,state:"repair_requested",pending_gate_findings:[{code:"GOAL_AUTHOR_PCR_INVALID"}]}}});
  const repair=item((await dispatchGoalAuthors({...f,slots:1,adapter})).dispatched[0]);
  assert.deepEqual(resolveAuthorContract(repair),expected);assert.deepEqual(item(item(repair.author_turn_contracts)[0]),initialSnapshot);
  assert.deepEqual(item(item(repair.author_turn_contracts)[1]),{thread_id:"same-thread",turn_id:repair.turn_id,...expected});
  f.store.append({event_id:"observed-quota",type:"task_replaced",payload:{task:{...repair,state:"retryable_failure",failure_code:"GOAL_CODEX_USAGE_LIMIT_EXCEEDED",failure_details:{origin:"app_server",failure_kind:"usage_limit",retryable:true}}}});
  const resumed=item((await dispatchGoalAuthors({...f,slots:1,adapter,resumeStopped:true})).dispatched[0]);
  assert.deepEqual(resolveAuthorContract(resumed),expected);assert.deepEqual(item(resumed.author_turn_contracts).slice(0,2),repair.author_turn_contracts);
  assert.deepEqual(item(item(resumed.author_turn_contracts)[2]),{thread_id:"same-thread",turn_id:resumed.turn_id,...expected});
  assert.equal(resumed.repair_count,repair.repair_count);assert.equal(resumed.worktree_path,first.worktree_path);
  for(const input of calls){assert.equal(input.model,"gpt-5.6-terra");assert.equal(input.reasoningEffort,"high");}
  if(expected.authoring_contract_version===2){for(const input of calls){assert.match(string(input.prompt),new RegExp(`draft schema_version: ${expected.author_draft_schema_version}`));assert.equal(object(object(object(input.outputSchema).properties).schema_version).const,2);}}
  else for(const input of calls)assert.equal(object(object(object(input.outputSchema).properties).schema_version).const,1);
});
