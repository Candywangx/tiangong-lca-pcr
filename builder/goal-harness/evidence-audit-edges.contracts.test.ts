import assert from 'node:assert/strict';
import fs from 'node:fs';
import {syncBuiltinESMExports} from 'node:module';
import {tmpdir} from 'node:os';
import path from 'node:path';
import test,{type TestContext} from 'node:test';
import {GoalHarnessError} from './errors.ts';
import {record} from './domain.ts';
import {nested} from './evidence-types.ts';
import {listGoalCacheReceipts} from './goal-cache.ts';
import {auditReportedUuids,readPublicUuidAudit,verifySourceLocators,mergeVerifiedCommonUuids,collectEvidenceItems,evidenceFailureFindings} from './evidence-audit.ts';

const uuid='11111111-1111-4111-8111-111111111111',propertyId='93a60a56-a3c8-11da-a746-0800200b9a66',unitId='93a60a57-a4c8-11da-a746-0800200c9a66';
const support=()=>({flow_property:{id:propertyId,state_code:100,name_en:'Mass'},unit_group:{id:unitId,state_code:100,name_en:'Units of mass',name_zh:'质量',reference_unit:'kg'}});
const flow=()=>({state_code:100,flow:{flowDataSet:{flowInformation:{dataSetInformation:{'common:UUID':uuid,name:{baseName:[{'@xml:lang':'en','#text':'Pig iron'},{'@xml:lang':'zh','#text':'生铁'}]},classificationInformation:{'common:classification':{'common:class':[{'@classId':'41111','#text':'Pig iron'}]}}},quantitativeReference:{referenceToReferenceFlowProperty:'reference'}},modellingAndValidation:{LCIMethod:{typeOfDataSet:'Product flow'}},flowProperties:{flowProperty:[{'@dataSetInternalID':'reference',referenceToFlowPropertyDataSet:{'@refObjectId':propertyId,'@version':'03.00.003','common:shortDescription':[{'@xml:lang':'en','#text':'Mass'}]}}]}}}});
const claim=()=>({uuid,hybrid_search_receipt_id:'receipt',state_code:100,base_name_en:'Pig iron',base_name_zh:'生铁',flow_type:'product',classification:'CPC 41111',property:'Mass',unit_group:'Units of mass',semantic_review:'Exact product identity and reference property checked.'});
const original='<article><h1>Sampling Standard</h1><h2>Scope</h2><p>The scope covers representative sampling of manufactured products at the factory gate. Samples include normal production batches and documented variations. The analyst records exclusions and verifies the product boundary before collecting measurements.</p><h2>Methods</h2><p>The method requires calibrated instruments, a documented sampling plan, traceable batch identifiers and independent checks of measurement units. Data are collected across representative production periods, reviewed for missing values, and recorded with uncertainty and source evidence.</p></article>';
const source=()=>({source_id:'sampling',name:'Sampling Standard',locator:'https://standards.example/sampling',original_text_verified:true});
function response(body:string|Uint8Array=original){let consumed=false;return {ok:true,status:200,headers:new Map([['content-type','text/html']]),body:{getReader:()=>({read:async()=>consumed?{done:true}:(consumed=true,{done:false,value:typeof body==='string'?Buffer.from(body):body}),cancel:async()=>{}})}};}
function directory(t:TestContext){const root=fs.realpathSync(fs.mkdtempSync(path.join(tmpdir(),'pcr-evidence-edges-')));t.after(()=>fs.rmSync(root,{recursive:true,force:true}));return root;}
const code=(expected:string)=>(error:unknown)=>error instanceof GoalHarnessError&&error.code===expected;

for(const key of ['uuid','state_code','base_name_en','flow_type','classification','property','unit_group','hybrid_search_receipt_id'] as const){
 test(`public UUID audit rejects a substituted ${key} claim and retains the mismatched identity`,()=>{
  const claimed:Record<string,unknown>=claim();claimed[key]=key==='state_code'?99:key==='hybrid_search_receipt_id'?null:key==='uuid'?'22222222-2222-4222-8222-222222222222':'substituted';
  assert.throws(()=>auditReportedUuids({report:{uuid_audits:[claimed]},runner:()=>flow(),supportRunner:support}),error=>{
   assert.ok(error instanceof GoalHarnessError);assert.equal(error.code,'GOAL_UUID_DIRECT_AUDIT_MISMATCH');assert.ok(Array.isArray(error.details.mismatches)&&error.details.mismatches.includes(key));assert.ok(Array.isArray(error.details.findings)&&error.details.findings.length===1);return true;
  });
 });
}
for(const field of ['property-state','property-identity','property-name','unit-state','unit-identity'] as const){
 test(`a correct author claim cannot authorize nonpublic or mismatched ${field} support`,()=>{
  const actual=support();if(field==='property-state')actual.flow_property.state_code=99;if(field==='property-identity')actual.flow_property.id=unitId;if(field==='property-name')actual.flow_property.name_en='Volume';if(field==='unit-state')actual.unit_group.state_code=99;if(field==='unit-identity')actual.unit_group.id='';
  assert.throws(()=>auditReportedUuids({report:{uuid_audits:[claim()]},runner:()=>flow(),supportRunner:()=>actual}),code('GOAL_UUID_DIRECT_AUDIT_MISMATCH'));
 });
}
for(const property of ['Mass; reference property checked','Mass, reference property checked','Mass (reference property checked)','reference property Mass','reference property: Mass']){
 test(`explicit property identity annotation remains compatible: ${property}`,()=>assert.equal(auditReportedUuids({report:{uuid_audits:[{...claim(),property}]},runner:()=>flow(),supportRunner:support}).length,1));
}
test('unit UUID and classification labels identify the same verified public product',()=>{
 assert.equal(auditReportedUuids({report:{uuid_audits:[{...claim(),unit_group:unitId,classification:'Pig iron'}]},runner:()=>flow(),supportRunner:support}).length,1);
});
for(const bad of [{valid:false},{ok:false},{}])test('failed or absent public flow records do not trigger support reads or manufacture identities',()=>{
 let reads=0;assert.throws(()=>readPublicUuidAudit({uuid,runner:()=>bad,supportRunner:()=>{reads++;return support();}}),code('GOAL_UUID_DIRECT_READ_FAILED'));assert.equal(reads,0);
});
for(const bad of [{valid:false,...support()},{ok:false,...support()},{unit_group:support().unit_group},{flow_property:support().flow_property}])test('incomplete or explicitly failed public reference support is held',()=>{
 assert.throws(()=>readPublicUuidAudit({uuid,runner:()=>flow(),supportRunner:()=>bad}),code('GOAL_UUID_DIRECT_READ_FAILED'));
});
test('regional language aliases and a singleton reference property retain actual public identity',()=>{
 const direct=flow();const info=record(nested(direct,'flow','flowDataSet','flowInformation','dataSetInformation'));info.name={baseName:[{'@xml:lang':'en-US','#text':'Pig iron'},{'@xml:lang':'zh-CN','#text':'生铁'}]};
 const properties=record(nested(direct,'flow','flowDataSet','flowProperties'));const first=direct.flow.flowDataSet.flowProperties.flowProperty[0];assert.ok(first);properties.flowProperty=first;
 const result=readPublicUuidAudit({uuid,runner:()=>direct,supportRunner:support});assert.equal(result.base_name_en,'Pig iron');assert.equal(result.base_name_zh,'生铁');assert.equal(result.flow_property_uuid,propertyId);
});
test('missing optional public text stays empty instead of borrowing an unrelated language or unit',()=>{
 const direct=flow();const info=record(nested(direct,'flow','flowDataSet','flowInformation','dataSetInformation'));info.name={baseName:{'@xml:lang':'fr','#text':'Fonte'}};info.classificationInformation={};
 const properties=record(nested(direct,'flow','flowDataSet','flowProperties'));properties.flowProperty=[];
 const result=readPublicUuidAudit({uuid,runner:()=>direct,supportRunner:()=>({flow_property:{},unit_group:{}})});assert.equal(result.base_name_en,'');assert.equal(result.base_name_zh,'');assert.equal(result.flow_property_uuid,'');assert.equal(result.property,'');assert.equal(result.unit_group_uuid,'');assert.equal(result.reference_unit,'');assert.deepEqual(result.classifications,[]);
});
test('an absent declared property cannot launch an unbound support query',()=>{
 const direct=flow();record(nested(direct,'flow','flowDataSet','flowProperties')).flowProperty=[];
 assert.throws(()=>readPublicUuidAudit({uuid,runner:()=>direct,tiangongCliRoot:'/unused-no-query'}),code('GOAL_UUID_DIRECT_READ_FAILED'));
});
test('a mismatched quantitative-reference identifier falls back to the actual available property without inventing a new one',()=>{
 const direct=flow();direct.flow.flowDataSet.flowInformation.quantitativeReference.referenceToReferenceFlowProperty='unavailable';
 assert.equal(readPublicUuidAudit({uuid,runner:()=>direct,supportRunner:support}).flow_property_uuid,propertyId);
});
test('invalid retry configuration stays bounded and honors a nonretryable machine failure',()=>{
 let attempts=0;const waits:number[]=[];
 assert.throws(()=>readPublicUuidAudit({uuid,retryAttempts:0,retryDelayMs:Number.NaN,sleeper:value=>waits.push(value),runner:()=>{attempts++;throw new GoalHarnessError('GOAL_UUID_DIRECT_READ_FAILED','transport unavailable',{origin:'tool_transport',failure_kind:'network',retryable:true});}}),code('GOAL_UUID_DIRECT_READ_FAILED'));
 assert.equal(attempts,3);assert.deepEqual(waits,[1000,2000]);
 const rootFailure=Object.assign(new Error('invalid public transport'),{details:{origin:'tool_transport',failure_kind:'network',retryable:false}});
 assert.throws(()=>readPublicUuidAudit({uuid,runner:()=>{throw rootFailure;},retryAttempts:0,retryDelayMs:-1,sleeper:()=>assert.fail('Unattributed errors must not retry.')}),error=>error===rootFailure);
});
test('common UUID cache requires receipt evidence and an eligible reusable identity',()=>{
 const data=mergeVerifiedCommonUuids([], [{uuid,base_name_en:'Electricity'},{uuid,hybrid_search_receipt_id:'receipt',base_name_en:'Unreviewed niche product'},{uuid,hybrid_search_receipt_id:'receipt'}]);assert.deepEqual(data,[]);
});

test('actual public CLI invalid JSON is a stable decode failure rather than empty successful evidence',t=>{
 const root=directory(t);fs.mkdirSync(path.join(root,'bin'));fs.writeFileSync(path.join(root,'package.json'),'{"type":"module"}');fs.writeFileSync(path.join(root,'bin/tiangong-lca.js'),'process.stdout.write("not-json");');
 assert.throws(()=>readPublicUuidAudit({uuid,tiangongCliRoot:root,supportRunner:support}),error=>{assert.ok(error instanceof GoalHarnessError);assert.equal(error.code,'GOAL_UUID_DIRECT_READ_FAILED');assert.equal(error.details.phase,'tool_decode');assert.equal(error.details.retryable,false);return true;});
});
for(const locator of ['file:///tmp/private-document','ftp://standards.example/document','not a locator',''])test(`non-HTTP evidence locator is rejected before I/O: ${locator||'empty'}`,async()=>{
 await assert.rejects(verifySourceLocators({report:{sources:[{...source(),locator}]},fetchImpl:()=>assert.fail('Invalid locator must not be fetched.')}),code('GOAL_SOURCE_LOCATOR_INVALID'));
});
test('bare DOI is resolved to the original HTTPS locator and discovery-only reports make no request',async()=>{
 let seen='';const result=await verifySourceLocators({report:{sources:[{...source(),locator:'10.1234/sampling'}]},fetchImpl:locator=>{seen=locator;return response();}});assert.equal(seen,'https://doi.org/10.1234/sampling');assert.equal(result[0]?.locator,seen);
 assert.deepEqual(await verifySourceLocators({report:{sources:[{...source(),discovery_only:true} ]},fetchImpl:()=>assert.fail('Discovery claims cannot become final source evidence.')}),[]);
});
for(const bad of [{ok:'true',status:200,headers:new Map()},{ok:true,status:'200',headers:new Map()},{ok:true,status:200,headers:{}},{ok:true,status:200,headers:new Map(),body:{}},{ok:true,status:200,headers:new Map(),body:{getReader:()=>({})}}])test('malformed transport response cannot be promoted to source evidence',async()=>{
 await assert.rejects(verifySourceLocators({report:{sources:[source()]},fetchImpl:()=>bad}),error=>{assert.ok(error instanceof GoalHarnessError);assert.equal(error.code,'GOAL_SOURCE_LOCATOR_UNREADABLE');assert.equal(error.details.retryable,false);return true;});
});
for(const item of [{done:'yes'},{done:false,value:'text instead of bytes'}])test('malformed stream items are rejected and the owned reader is cancelled',async()=>{
 let cancelled=false;await assert.rejects(verifySourceLocators({report:{sources:[source()]},fetchImpl:()=>({ok:true,status:200,headers:new Map(),body:{getReader:()=>({read:async()=>item,cancel:async()=>{cancelled=true;}})}})}),code('GOAL_SOURCE_LOCATOR_UNREADABLE'));assert.equal(cancelled,true);
});
test('a reader without optional cancel still retains complete valid original bytes',async()=>{
 let consumed=false;const result=await verifySourceLocators({report:{sources:[source()]},fetchImpl:()=>({ok:true,status:200,headers:new Map(),body:{getReader:()=>({read:async()=>consumed?{done:true}:(consumed=true,{done:false,value:Buffer.from(original)})})}})});assert.equal(result[0]?.original_identity_verified,true);
});
test('a real oversized source stream retains partial diagnostics and never persists successful evidence',async()=>{
 let cancelled=false;const bytes=new Uint8Array(64*1024*1024+1);
 await assert.rejects(verifySourceLocators({report:{sources:[source()]},fetchImpl:()=>({ok:true,status:200,headers:new Map(),body:{getReader:()=>({read:async()=>({done:false,value:bytes}),cancel:async()=>{cancelled=true;}})}})}),error=>{assert.ok(error instanceof GoalHarnessError);assert.equal(error.code,'GOAL_SOURCE_ORIGINAL_TEXT_TOO_LARGE');assert.equal(nested(error.details,'source_fetch_diagnostics','bytes_read'),bytes.length);assert.equal(nested(error.details,'source_fetch_diagnostics','response_sha256_scope'),'partial');return true;});assert.equal(cancelled,true);
});
for(const retryAfter of [new Date(Date.now()+60000).toUTCString(),'not a date'])test('HTTP rejection records date or invalid retry advice without reading a body',async()=>{
 await assert.rejects(verifySourceLocators({report:{sources:[source()]},fetchImpl:()=>({ok:false,status:404,headers:new Map([['retry-after',retryAfter]]),body:null})}),error=>{assert.ok(error instanceof GoalHarnessError);assert.equal(error.details.failure_kind,'unknown');assert.equal(error.details.retryable,false);if(retryAfter==='not a date')assert.equal(error.details.retry_after_seconds,null);else assert.ok(typeof error.details.retry_after_seconds==='number'&&error.details.retry_after_seconds>=0&&error.details.retry_after_seconds<=60);return true;});
});
for(const mutation of ['size','hash','missing','symlink','directory','io-failure'] as const)test(`cached original substituted after receipt verification is held: ${mutation}`,{concurrency:false,skip:process.platform==='win32'?'Requires POSIX no-follow descriptors.':false},async t=>{
 const stateDir=directory(t);await verifySourceLocators({stateDir,report:{sources:[source()]},fetchImpl:()=>response()});const receipt=listGoalCacheReceipts({stateDir,namespace:'source_original_text_receipts'})[0];assert.ok(receipt&&typeof receipt.blob_path==='string');const blob=receipt.blob_path;const originalBytes=fs.readFileSync(blob);let injected=false;const savedOpen=fs.openSync;
 t.mock.method(fs,'openSync',(file:fs.PathLike,flags:fs.OpenMode,mode?:fs.Mode)=>{
  if(file===blob&&!injected&&typeof flags==='number'&&(flags&fs.constants.O_NOFOLLOW)!==0&&(flags&fs.constants.O_NONBLOCK)!==0){injected=true;if(mutation==='size')fs.writeFileSync(blob,'short');if(mutation==='hash'){const changed=Buffer.from(originalBytes);changed[changed.length-1]=32;fs.writeFileSync(blob,changed);}if(mutation==='missing')fs.unlinkSync(blob);if(mutation==='directory'){fs.unlinkSync(blob);fs.mkdirSync(blob);}if(mutation==='symlink'){const target=path.join(stateDir,'substituted-original');fs.writeFileSync(target,originalBytes);fs.unlinkSync(blob);fs.symlinkSync(target,blob);}if(mutation==='io-failure')throw Object.assign(new Error('isolated descriptor I/O fault'),{code:'EIO'});}
  return savedOpen(file,flags,mode);
 });syncBuiltinESMExports();
 try {await assert.rejects(verifySourceLocators({stateDir,report:{sources:[source()]},fetchImpl:()=>({ok:false,status:403,headers:new Map(),body:null})}),code(mutation==='io-failure'?'GOAL_SOURCE_AUDIT_FINALIZATION_FAILED':'GOAL_SOURCE_LOCATOR_UNREADABLE'));assert.equal(injected,true);}
 finally {t.mock.restoreAll();syncBuiltinESMExports();}
});
test('collection retains failed reuse findings and unsupported proof kinds without invoking external reads',()=>{
 const result=collectEvidenceItems({items:['receipt'],subject:item=>item,checkId:'receipt_integrity',phase:'harvest',deadline:Infinity,now:Date.now,reuse:()=>{throw new GoalHarnessError('GOAL_RECEIPT_INTEGRITY_MISMATCH','Cached receipt changed.');},run:()=>assert.fail('Failed reusable proof must not be retried as a fresh claim.')});assert.equal(result.valid,false);assert.equal(result.checks[0]?.status,'failed');
 const unsupported=collectEvidenceItems({items:['claim'],subject:item=>item,checkId:'unsupported_proof',phase:'harvest',deadline:Infinity,now:Date.now,run:()=>[{valid:true}]});assert.equal(unsupported.valid,false);assert.equal(unsupported.findings[0]?.code,'GOAL_EVIDENCE_RESULT_INVALID');
 const missing=evidenceFailureFindings(new Error('Plain failure'),{phase:'harvest',subjectId:'source'});assert.equal(missing[0]?.code,'GOAL_EVIDENCE_CHECK_FAILED');assert.equal(missing[0]?.message,'Plain failure');
});

for(const id of ['', '   '])test('label-only classification cannot authorize an unrelated author claim through an empty identifier',()=>{
 const direct=flow();record(nested(direct,'flow','flowDataSet','flowInformation','dataSetInformation')).classificationInformation={'common:classification':{'common:class':{'@classId':id,'#text':'Pig iron'}}};
 assert.throws(()=>auditReportedUuids({report:{uuid_audits:[{...claim(),classification:'CPC   99999 unrelated'}]},runner:()=>direct,supportRunner:support}),code('GOAL_UUID_DIRECT_AUDIT_MISMATCH'));
 assert.equal(auditReportedUuids({report:{uuid_audits:[{...claim(),classification:'Pig iron'}]},runner:()=>direct,supportRunner:support}).length,1);
});

for(const label of ['   ','---'])test('empty normalized classification labels cannot authorize unrelated claims while the actual ID remains valid',()=>{
 const direct=flow();record(nested(direct,'flow','flowDataSet','flowInformation','dataSetInformation')).classificationInformation={'common:classification':{'common:class':{'@classId':'41111','#text':label}}};
 assert.throws(()=>auditReportedUuids({report:{uuid_audits:[{...claim(),classification:'CPC 99999'}]},runner:()=>direct,supportRunner:support}),code('GOAL_UUID_DIRECT_AUDIT_MISMATCH'));
 assert.equal(auditReportedUuids({report:{uuid_audits:[{...claim(),classification:'CPC 41111'}]},runner:()=>direct,supportRunner:support}).length,1);
});
test('verified classification labels preserve established accent and punctuation normalization',()=>{
 const direct=flow();record(nested(direct,'flow','flowDataSet','flowInformation','dataSetInformation')).classificationInformation={'common:classification':{'common:class':{'#text':'Píg-iron'}}};
 assert.equal(auditReportedUuids({report:{uuid_audits:[{...claim(),classification:'Píg iron'}]},runner:()=>direct,supportRunner:support}).length,1);
 assert.throws(()=>auditReportedUuids({report:{uuid_audits:[{...claim(),classification:'Pig iron'}]},runner:()=>direct,supportRunner:support}),code('GOAL_UUID_DIRECT_AUDIT_MISMATCH'));
});
