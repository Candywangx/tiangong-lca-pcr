import assert from 'node:assert/strict';
import test from 'node:test';
import { CI_JOBS, verifyCiGate } from './ci-gate.ts';
import type { CiPlan } from './ci-plan.ts';
const plan:CiPlan={schema:1,base:'a'.repeat(40),head:'b'.repeat(40),event:'pull_request',reusable:false,mode:'full',reason:'code',changedPaths:['code'],changedPcrs:[]};
const full=()=>Object.fromEntries(CI_JOBS.map(name=>[name,{result:'success'}]));
const data=()=>Object.fromEntries(CI_JOBS.map(name=>[name,{result:['test-shards','offline-distribution','provider-importer','source-coverage'].includes(name)?'skipped':'success'}]));
const prCode=()=>Object.fromEntries(CI_JOBS.map(name=>[name,{result:['plan','contracts','test-shards'].includes(name)?'success':'skipped'}]));
const docsOnly=()=>Object.fromEntries(CI_JOBS.map(name=>[name,{result:['plan','contracts'].includes(name)?'success':'skipped'}]));
test('full, data, pr-code and docs-only gates state honest coverage dispositions',()=>{
 assert.equal(verifyCiGate(plan,full()).coverage,'fresh-source-bound-measurement-required-and-passed');
 const result=verifyCiGate({...plan,mode:'data'},data());assert.equal(result.coverage,'not-measured-data-only-lane');assert.equal(result.methodologyApproval,false);
 assert.equal(verifyCiGate({...plan,mode:'pr-code'},prCode()).coverage,'not-measured-pr-code-lane');
 assert.equal(verifyCiGate({...plan,mode:'docs-only'},docsOnly()).coverage,'not-measured-docs-only-lane');
});
test('every full lane job must pass; missing, failed, cancelled or skipped cannot pass',()=>{
 for(const name of CI_JOBS)for(const result of ['failure','cancelled','skipped','unknown',null]){
  const jobs=full();jobs[name]={result:result as string};assert.throws(()=>verifyCiGate(plan,jobs),/expected success/);
 }
 for(const value of [null,[],1,{}, {...full(),unexpected:{result:'success'}}])assert.throws(()=>verifyCiGate(plan,value));
 const missing=full();delete missing.plan;assert.throws(()=>verifyCiGate(plan,missing),/membership/);
 const invalid=full() as Record<string,unknown>;invalid.plan=null;assert.throws(()=>verifyCiGate(plan,invalid),/Missing CI/);
});
test('data lane cannot skip content, sealed or browser gates or misreport code coverage',()=>{
 for(const name of ['plan','contracts','web-build','documentation','sealed-distribution','sealed-web']){
  const jobs=data();jobs[name]={result:'skipped'};assert.throws(()=>verifyCiGate({...plan,mode:'data'},jobs),/expected success/);
 }
 for(const name of ['test-shards','offline-distribution','provider-importer','source-coverage']){
  const jobs=data();jobs[name]={result:'success'};assert.throws(()=>verifyCiGate({...plan,mode:'data'},jobs),/expected skipped/);
 }
 for(const name of ['plan','contracts','test-shards']){
  const jobs=prCode();jobs[name]={result:'skipped'};assert.throws(()=>verifyCiGate({...plan,mode:'pr-code'},jobs),/expected success/);
 }
 for(const name of ['plan','contracts']){
  const jobs=docsOnly();jobs[name]={result:'skipped'};assert.throws(()=>verifyCiGate({...plan,mode:'docs-only'},jobs),/expected success/);
 }
 {
  const jobs=docsOnly();jobs['test-shards']={result:'success'};assert.throws(()=>verifyCiGate({...plan,mode:'docs-only'},jobs),/expected skipped/);
 }
 assert.throws(()=>verifyCiGate({...plan,mode:'unknown' as CiPlan['mode']},full()),/Unknown/);
});
