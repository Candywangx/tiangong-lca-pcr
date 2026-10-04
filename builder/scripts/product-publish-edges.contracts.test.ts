import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {cpSync,readFileSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import {sealedProductFixture} from '../../scripts/engineering/fixtures/sealed-product-fixture.ts';
import {coordinateProductPublication,PublisherError} from './product-publish.ts';
import {verifyProductArtifacts} from './product-release.ts';
import {record} from './release-types.ts';
import type {BuildProof,PublicationContext,PublisherIO,ReleaseRecord} from './publisher-types.ts';

const hash=(data:Uint8Array)=>createHash('sha256').update(data).digest('hex');
const encoded=(value:unknown)=>Buffer.from(JSON.stringify(value));
const marker=(value:unknown)=>`Preparing release. <!--pcr-product-build-proof:${encoded(value).toString('base64')}-->`;
const failure=(expected:string)=>(error:unknown)=>error instanceof PublisherError&&error.code===expected;

test('preparing-release proof and recovery errors cannot authorize package, deployment or channel writes',async t=>{
 const sealed=await sealedProductFixture(t,false),manifest=sealed.manifest,identity=sealed.identity;
 const proof:BuildProof={schema:1,identity,manifestSha256:hash(readFileSync(path.join(sealed.root,'release.json'))),artifactId:'99',runId:'10'};
 const context:PublicationContext={identity,toolchain:manifest.toolchain,runId:'10',attempt:'1',eventName:'workflow_dispatch',projectId:'makers-knownproject'};
 function fixture(){
  let release:ReleaseRecord|null={id:7,tag_name:identity.tag,draft:false,prerelease:true,body:marker(proof)};
  const assets=new Map<string,Buffer>(),mutations:string[]=[],local:unknown[]=[];let cleanup=0;
  const forbidden=async(name:string):Promise<never>=>{mutations.push(name);throw new Error('A rejected preparing release must not mutate external state.');};
  const io:PublisherIO={
   getTag:async()=>({type:'commit',sha:identity.sourceCommit}),registry:async()=>({state:'missing'}),getDeploymentRef:async()=>({sha:identity.sourceCommit,version:identity.version}),getLiveIdentity:async()=>({state:'product',identity}),isAncestor:async()=>true,getLatestRelease:async()=>null,
   getRelease:async()=>release,createRelease:async body=>{mutations.push('create');release={...body,id:7};return release;},
   listAssets:async()=>[...assets].map(([name,bytes],i)=>({id:i+1,name,size:bytes.length,digest:'sha256:'+hash(bytes)})),readAsset:async asset=>{const bytes=assets.get(asset.name);assert.ok(bytes);return bytes;},putAsset:async()=>forbidden('asset'),
   assertActionsArtifact:async()=>({verified:true}),manifestHash:async root=>hash(readFileSync(path.join(root,'release.json'))),verifyBundle:async(root,bound)=>verifyProductArtifacts(root,{expectedIdentity:bound}),
   restoreReleaseAssets:async()=>sealed.root,restoreActionsArtifact:async()=>sealed.root,fileDescriptor:async()=>forbidden('descriptor'),pause:async()=>assert.fail('Rejected evidence must not enter visibility polling.'),
   publishNpm:async()=>forbidden('npm-publish'),promoteLatest:async()=>forbidden('npm-latest'),verifyTarball:async()=>forbidden('registry-tarball'),verifyOfflinePair:async()=>forbidden('installation'),advanceDeploymentRef:async()=>forbidden('deployment-ref'),triggerHook:async()=>forbidden('web-hook'),verifyWeb:async()=>forbidden('web-verification'),completeRelease:async()=>forbidden('release-complete'),
   saveAttemptReceipt:async(_root,receipt)=>{local.push(receipt);},cleanup:async()=>{cleanup++;},
  };
  return {io,assets,mutations,local,get release(){return release;},set release(value:ReleaseRecord|null){release=value;},get cleanup(){return cleanup;},publish:(overrides:Partial<Parameters<typeof coordinateProductPublication>[0]>={})=>coordinateProductPublication({bundleDir:sealed.root,manifest,buildProof:proof,context,io,...overrides})};
 }
 type Fixture=ReturnType<typeof fixture>;
 const check=async(name:string,alter:(f:Fixture)=>void,expected:string,{creation=false}={})=>t.test(name,async()=>{const f=fixture();alter(f);await assert.rejects(f.publish(),failure(expected));assert.deepEqual(f.mutations,creation?['create']:[]);assert.equal(f.cleanup,1);});
 for(const body of [null,'No immutable source proof is recorded.',marker(null),`<!--pcr-product-build-proof:${Buffer.from('not JSON').toString('base64')}-->`])await check('absent-or-malformed-recoverable-proof',f=>{assert.ok(f.release);f.release.body=body;},'PCR_PRODUCT_PROOF_CONFLICT');
 for(const [key,value]of [['schema',2],['artifactId','0'],['artifactId','99x'],['runId','0'],['manifestSha256','invalid'],['identity',{...identity,sourceCommit:'a'.repeat(40)}]] satisfies readonly [string,unknown][])await check('embedded-proof-'+key,f=>{assert.ok(f.release);f.release.body=marker({...proof,[key]:value});},'PCR_PRODUCT_PROOF_CONFLICT');
 await check('release-draft-state',f=>{assert.ok(f.release);f.release.draft=true;},'PCR_PRODUCT_RELEASE_CONFLICT');
 await check('release-tag-state',f=>{assert.ok(f.release);f.release.tag_name='v99.0.0';},'PCR_PRODUCT_RELEASE_CONFLICT');
 await check('created-release-invalid-id',f=>{f.release=null;f.io.createRelease=async body=>{f.mutations.push('create');return {...body,id:0};};},'PCR_PRODUCT_RELEASE_UNCERTAIN',{creation:true});
 await check('created-release-wrong-tag',f=>{f.release=null;f.io.createRelease=async body=>{f.mutations.push('create');return {...body,id:7,tag_name:'v99.0.0'};};},'PCR_PRODUCT_RELEASE_UNCERTAIN',{creation:true});
 await check('sealed-manifest-hash-disagrees-with-proof',f=>{f.assets.set('release.json',encoded({...manifest,toolchain:{node:'99.0.0',npm:'99.0.0'}}));},'PCR_PRODUCT_SEAL_CONFLICT');
 const receipt={schema:1,identity,manifestSha256:proof.manifestSha256,runId:'9',attempt:'1',sequence:1,target:'npm-tool',operation:'publish',state:'intent',details:{}};
 for(const [key,value]of [['schema',2],['identity',{...identity,sourceFingerprint:'sha256:'+'a'.repeat(64)}],['manifestSha256','a'.repeat(64)],['runId','0'],['attempt','0'],['sequence',0],['sequence',1.5],['sequence',-1],['target',null],['operation',null],['state',null],['details',[]]] satisfies readonly [string,unknown][])await check('historical-receipt-'+key,f=>{f.assets.set('receipt-9-1-0001.json',encoded({...receipt,[key]:value}));},'PCR_PRODUCT_RECEIPT_CONFLICT');
 await check('historical-receipt-filename-binding',f=>{f.assets.set('receipt-9-1-0002.json',encoded(receipt));},'PCR_PRODUCT_RECEIPT_CONFLICT');
 await check('unattributed-source-transport-error',f=>{f.io.getTag=async()=>{throw new Error('private transport response must not become a public code');};},'PCR_PRODUCT_OPERATION_UNCERTAIN');
 await check('invalid-current-channel-version',f=>{f.io.registry=async()=>({state:'present',metadata:{version:'not-semver'}});},'PCR_PRODUCT_REGISTRY_UNCERTAIN');
 await check('deployment-ref-not-ancestor',f=>{f.io.getDeploymentRef=async()=>({sha:'a'.repeat(40),version:null});f.io.isAncestor=async()=>false;},'PCR_PRODUCT_DEPLOYMENT_REF_CONFLICT');
 await check('malformed-live-product-identity',f=>{f.io.getLiveIdentity=async()=>({state:'product',identity:{version:identity.version}});},'PCR_PRODUCT_LIVE_UNCERTAIN');
 await check('previous-product-not-ancestor',f=>{f.io.getLiveIdentity=async()=>({state:'product',identity:{...identity,version:'0.2.0',tag:'v0.2.0',sourceCommit:'a'.repeat(40)}});f.io.isAncestor=async()=>false;},'PCR_PRODUCT_LIVE_CONFLICT');
 await check('invalid-latest-product-release-tag',f=>{f.io.getLatestRelease=async()=>({id:88,tag_name:'vbad',draft:false,prerelease:false});},'PCR_PRODUCT_RELEASE_UNCERTAIN');
 await check('newer-stable-release',f=>{f.io.getLatestRelease=async()=>({id:88,tag_name:'v99.0.0',draft:false,prerelease:false});},'PCR_PRODUCT_DOWNGRADE');
 const damaged=path.join(sealed.base,'damaged-manifest');cpSync(sealed.root,damaged,{recursive:true});const altered=record(JSON.parse(readFileSync(path.join(damaged,'release.json'),'utf8')) as unknown);altered.kind='different';writeFileSync(path.join(damaged,'release.json'),JSON.stringify(altered));
 await t.test('restored-manifest-must-retain-original-proof',async()=>{const f=fixture();let restores=0;f.io.restoreActionsArtifact=async()=>{restores++;return damaged;};await assert.rejects(f.publish({bundleDir:damaged}),failure('PCR_PRODUCT_ORIGINAL_ARTIFACT_REQUIRED'));assert.equal(restores,1);assert.deepEqual(f.mutations,[]);assert.equal(f.cleanup,1);});
});
