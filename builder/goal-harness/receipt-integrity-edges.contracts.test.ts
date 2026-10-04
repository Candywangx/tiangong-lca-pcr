import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,readFileSync,writeFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import test,{type TestContext} from 'node:test';
import {GoalEventStore} from './event-store.ts';
import {GoalHarnessError} from './errors.ts';
import {artifactSha256} from './artifact-io.ts';
import {jsonRecord} from './domain.ts';
import {receiptDocument,sealReceipt,verifyReceiptSeal,type ReceiptTask} from './receipt-integrity.ts';
import {runHybridSearchWithReceipt,recordHybridCandidateDirectRead} from './uuid-search-receipts.ts';

const uuid='aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
const secureTest=(name:string,run:(t:TestContext)=>void)=>test(name,{skip:process.platform==='linux'?false:'Requires Linux descriptor traversal for Goal receipt artifacts.'},run);
const integrityCode=(code:string)=>(error:unknown)=>error instanceof GoalHarnessError&&error.code===`GOAL_RECEIPT_INTEGRITY_${code}`;
function fixture(t:TestContext,rows:unknown={data:[{id:uuid}]}){
 const root=mkdtempSync(path.join(tmpdir(),'pcr-receipt-boundaries-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const stateDir=path.join(root,'state'),cwd=path.join(root,'author');mkdirSync(cwd);
 const task={id:'receipt-task',state:'authoring',cpc_code:'44125',attempt:1,turn_id:'turn-1',worktree_path:cwd,authoring_contract_version:2};
 const store=new GoalEventStore({stateDir});store.initialize({goal_id:'receipt-goal',tasks:[task],snapshots:[]});
 const receiptId='boundary-receipt';const captured=runHybridSearchWithReceipt({stateDir,taskId:task.id,cwd,query:'finished baler',randomId:()=>receiptId,runner:()=>({status:0,stdout:JSON.stringify(rows)}),toolConfig:{flow_hybrid_search_root:'/unused-owned-fixture'}});
 const directory=path.dirname(captured.receipt.result_path);
 const candidates=captured.receipt.candidate_uuids;
 const direct=candidates.includes(uuid)?recordHybridCandidateDirectRead({stateDir,taskId:task.id,cwd,receiptId,uuid,tiangongCliRoot:'/unused-owned-fixture',reader:()=>({uuid,state_code:100,response_sha256:`sha256:${'a'.repeat(64)}`})}):undefined;
 const decision={uuid,decision:'rejected',reason_code:'semantic_mismatch',reason:'Unfinished subassembly has a different product boundary.',general_comment_review:'Factory-gate product boundary checked.'};
 const requested=direct?[decision]:[];
 const document=receiptDocument({schema_version:1,receipt_id:receiptId,goal_id:'receipt-goal',task_id:task.id,candidate_decisions:direct?[{...decision,direct_read:direct}]:[]});
 const paths={directory,search:path.join(directory,`${receiptId}.search.json`),result:captured.receipt.result_path,decisions:path.join(directory,`${receiptId}.decisions.json`)};
 const options={stateDir,task,receiptId,paths,document,requested};
 const rewriteSearch=(change:(value:Record<string,unknown>)=>void)=>{const value=jsonRecord(readFileSync(paths.search,'utf8'));change(value);writeFileSync(paths.search,JSON.stringify(value));};
 return {root,stateDir,cwd,store,task,receiptId,paths,document,requested,options,rewriteSearch};
}

test('receipt document preserves legitimate absence of direct-read extensions',()=>{
 const document=receiptDocument({receipt_id:'historical',candidate_decisions:[{uuid,decision:'rejected',operator_note:'reviewed'}]});
 assert.equal(document.candidate_decisions[0]?.direct_read,undefined);assert.equal(document.candidate_decisions[0]?.operator_note,'reviewed');
});
for(const binding of ['missing-task','attempt','turn','contract'] as const){
 secureTest(`sealing refuses a task whose ${binding} binding changed before the lock`,t=>{
  const f=fixture(t);let request:ReceiptTask=f.task;
  if(binding==='missing-task')request={...f.task,id:'unregistered-task'};
  else f.store.append({event_id:`changed-${binding}`,type:'task_replaced',payload:{task:{...f.task,...(binding==='attempt'?{attempt:2}:binding==='turn'?{turn_id:'turn-2'}:{authoring_contract_version:1})}}});
  assert.throws(()=>sealReceipt({...f.options,task:request}),integrityCode('MISMATCH'));
  assert.equal(f.store.getEventsByType('uuid_receipt_finalized').length,0);
 });
}
for(const shape of ['array','empty-valid-array'] as const){
 secureTest(`sealing authenticates ${shape} provider results without inventing candidate UUIDs`,t=>{
  const rows=shape==='array'?[{uuid:uuid.toUpperCase()}]:[{id:'not-a-uuid'},{name:'No exact match'}];
  const f=fixture(t,rows);const sealed=sealReceipt(f.options);assert.equal(sealed.candidate_decisions.length,shape==='array'?1:0);
  assert.equal(f.store.getEventsByType('uuid_receipt_finalized').length,1);
  assert.ok(verifyReceiptSeal({...f.options}).files);
 });
}
secureTest('matching raw hash cannot hide a substituted recorded byte length',t=>{
 const f=fixture(t);f.rewriteSearch(value=>{assert.equal(typeof value.result_byte_length,'number');value.result_byte_length=Number(value.result_byte_length)+1;});
 assert.throws(()=>sealReceipt(f.options),integrityCode('MISMATCH'));assert.equal(f.store.getEventsByType('uuid_receipt_finalized').length,0);
});
secureTest('candidate UUID projection must agree with the original provider bytes',t=>{
 const f=fixture(t);f.rewriteSearch(value=>{value.candidate_uuids=[];});
 assert.throws(()=>sealReceipt(f.options),integrityCode('MISMATCH'));assert.equal(f.store.getEventsByType('uuid_receipt_finalized').length,0);
});
for(const field of ['receipt_id','goal_id','task_id','candidate_decisions'] as const){
 secureTest(`sealing rejects substituted finalized document ${field}`,t=>{
  const f=fixture(t);const document=receiptDocument({...f.document,[field]:field==='candidate_decisions'?[]:'substituted'});
  assert.throws(()=>sealReceipt({...f.options,document}),integrityCode('MISMATCH'));assert.equal(f.store.getEventsByType('uuid_receipt_finalized').length,0);
 });
}
for(const field of ['receipt_id','task_id','operator_note'] as const){
 secureTest(`sealing refuses a changed direct-read ${field} binding`,t=>{
  const f=fixture(t);const direct=path.join(f.paths.directory,`${f.receiptId}.${uuid}.direct.json`);const data=jsonRecord(readFileSync(direct,'utf8'));data[field]='substituted';writeFileSync(direct,JSON.stringify(data));
  assert.throws(()=>sealReceipt(f.options),integrityCode('MISMATCH'));assert.equal(f.store.getEventsByType('uuid_receipt_finalized').length,0);
 });
}
secureTest('a verified receipt index from another Goal cannot authorize this Goal evidence',t=>{
 const f=fixture(t);sealReceipt(f.options);const other=new GoalEventStore({stateDir:path.join(f.root,'another-state')});other.initialize({goal_id:'other',tasks:[],snapshots:[]});
 assert.throws(()=>verifyReceiptSeal({...f.options,eventStore:other}),integrityCode('MISMATCH'));
});
secureTest('receipt verification requires one unique append-only finalization record',t=>{
 const f=fixture(t);assert.throws(()=>verifyReceiptSeal(f.options),integrityCode('MISSING'));sealReceipt(f.options);
 const attestation=f.store.getEventsByType('uuid_receipt_finalized')[0];assert.ok(attestation);
 f.store.append({event_id:'duplicate-finalization',type:'uuid_receipt_finalized',payload:attestation.payload});
 assert.throws(()=>verifyReceiptSeal(f.options),integrityCode('MISSING'));
});
secureTest('receipt locators cannot redirect a valid seal to another directory or another artifact role',t=>{
 const f=fixture(t);sealReceipt(f.options);
 assert.throws(()=>verifyReceiptSeal({...f.options,paths:{...f.paths,directory:path.join(f.root,'other-directory')}}),integrityCode('MISMATCH'));
 assert.throws(()=>verifyReceiptSeal({...f.options,paths:{...f.paths,search:f.paths.decisions}}),integrityCode('MISMATCH'));
 assert.throws(()=>verifyReceiptSeal({...f.options,paths:{...f.paths,search:path.join(f.paths.directory,'unattested.search.json')}}),integrityCode('MISMATCH'));
});
secureTest('an append-only event does not make unsafe attested filenames valid evidence',t=>{
 const f=fixture(t);
 f.store.append({event_id:'unsafe-attestation',type:'uuid_receipt_finalized',payload:{schema_version:1,goal_id:'receipt-goal',task_id:f.task.id,receipt_id:f.receiptId,directory:path.relative(f.stateDir,f.paths.directory),files:{'../outside.result.json':artifactSha256('untrusted bytes')},decisions_text:JSON.stringify(f.document)}});
 assert.throws(()=>verifyReceiptSeal(f.options),integrityCode('MISMATCH'));
});
secureTest('Goal-cache reuse verifies the original task seal while ordinary cross-task lookup rejects it',t=>{
 const f=fixture(t);sealReceipt(f.options);const another={...f.task,id:'second-task'};
 assert.throws(()=>verifyReceiptSeal({...f.options,task:another}),integrityCode('MISMATCH'));
 const seal=verifyReceiptSeal({...f.options,task:another,paths:{...f.paths,allowGoalCacheReuse:true}});assert.ok(seal.event_hash);
});
