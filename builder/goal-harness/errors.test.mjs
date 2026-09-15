import test from 'node:test';
import assert from 'node:assert/strict';
import * as errors from './errors.mjs';
const finding = (origin, failure_kind, code = 'GOAL_HYBRID_SEARCH_RECEIPT_MISMATCH') => ({code, message:'irrelevant network timeout', details:{phase:'review', origin, failure_kind, retryable:true, subject_id:'row-1'}});
test('same code separates verified author claim conflict from receipt integrity', () => {
  assert.equal(typeof errors.classifyFinding, 'function');
  assert.equal(errors.classifyFinding(finding('harness_review','author_claim')).category, 'content');
  assert.equal(errors.classifyFinding(finding('receipt_verifier','task_binding')).category, 'integrity');
  assert.equal(errors.classifyFinding(finding('author_reported','network')).category, 'unknown');
  assert.equal(errors.classifyFinding({code:'NEW',message:'timeout retry network'}).category,'unknown');
  assert.equal(errors.classifyFinding(finding('harness_review','author_claim')).details.subject_id,'row-1');
});
test('whole-set recovery is order independent and respects hard findings', () => {
  assert.equal(typeof errors.selectRecovery, 'function');
  const content=finding('harness_review','author_claim');
  const infra=finding('tool_transport','network','GOAL_UUID_DIRECT_READ_FAILED');
  const integrity=finding('receipt_verifier','hash_mismatch');
  for (const findings of [[content,infra],[infra,content]]) assert.equal(errors.selectRecovery(findings,{completeReport:true}).action,'repair');
  for (const findings of [[content,integrity],[integrity,content]]) assert.equal(errors.selectRecovery(findings).action,'hold');
  assert.equal(errors.selectRecovery([infra],{completeReport:false}).action,'resume');
  assert.equal(errors.selectRecovery([{...infra,details:{...infra.details,retryable:false}}]).action,'hold');
  assert.equal(errors.selectRecovery([finding('harness','execution_window','GOAL_AUTHOR_TIMEOUT')]).action,'defer');
  assert.equal(errors.selectRecovery([{code:'GOAL_MEASUREMENT_REVIEW_REQUIRED'}]).action,'manual_review');
});

test('author boolean claims are untrusted and content precedes execution-window deferral',()=>{
  assert.equal(errors.classifyFinding({code:'GOAL_CODEX_USAGE_LIMIT_EXCEEDED',author_reported:true}).category,'unknown');
  assert.equal(errors.selectRecovery([finding('harness_review','author_claim'),finding('harness','execution_window')]).action,'repair');
});

test('prepared report and sealed receipt binding failures are integrity holds',()=>{
  for(const code of ['GOAL_RECEIPT_INTEGRITY_MISMATCH','GOAL_REPORT_BINDING_MISMATCH']) {
    const result=errors.selectRecovery({code,message:'payload was modified'});
    assert.equal(result.category,'integrity');assert.equal(result.action,'hold');
  }
});
