import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {mkdtempSync,mkdirSync,readFileSync,writeFileSync,rmSync,realpathSync,symlinkSync,readdirSync} from 'node:fs';
import path from 'node:path';
import {tmpdir} from 'node:os';
import {pathToFileURL} from 'node:url';
import test, {type TestContext} from 'node:test';
import {stripTypeScriptTypes} from 'node:module';
import {collect,report,readConfig,thresholdFailures,measurementPath} from './coverage.ts';
import {inventory} from './coverage-inventory.ts';
import {emissionProofs,emit} from './coverage-emission.ts';
import {retainMapSources} from './coverage-capture.ts';
import {mergeExternalCaptures} from './coverage-external.ts';
import {proveMapping,excludedCapture} from './coverage-mapping.ts';
import {config,object,parse,executionRoute,type Capture} from './coverage-types.ts';
import istanbul from 'istanbul-lib-coverage';
const put=(root:string,file:string,content:string)=>{mkdirSync(path.dirname(path.join(root,file)),{recursive:true});writeFileSync(path.join(root,file),content);};
const fixture=(t:TestContext)=>{
 const base=realpathSync(mkdtempSync(path.join(tmpdir(),'pcr-coverage-contract-')));t.after(()=>rmSync(base,{recursive:true,force:true}));const root=path.join(base,'repo');mkdirSync(root);
 const git=(...args:string[])=>execFileSync('git',args,{cwd:root,stdio:'pipe'});
 git('init','-q');git('config','user.name','coverage fixture');git('config','user.email','coverage@example.invalid');
 put(root,'package.json','{"type":"module"}');
 put(root,'config/coverage.json',JSON.stringify({schemaVersion:1,roots:['src'],pendingPrefixes:['src/browser/'],exclusions:[],thresholds:{lines:0,functions:0,branches:0},critical:[]}));
 put(root,'src/a.ts','export const choose = (value: boolean): number => value ? 1 : 2;\nexport interface Shape { field: string }\n');
 put(root,'src/unused.ts','export function unused(value: boolean) { return value ? 1 : 0; }\n');
 put(root,'src/types.ts','// retained domain description\nexport interface Value { id: string }\nexport type Name = string;\n');
 put(root,'src/browser/widget.ts','export const view = 1;\n');git('add','.');git('commit','-qm','coverage fixture');return {base,root};
};
const nativeCapture=(root:string):Capture=>{const url=pathToFileURL(path.join(root,'src/a.ts')).href;const fileSource=readFileSync(path.join(root,'src/a.ts'),'utf8');return {schemaVersion:1,pid:1,threadId:0,scriptId:'1',url,fileSource,source:stripTypeScriptTypes(fileSource,{sourceUrl:url}),sourceMap:null,error:null};};

test('coverage inventory retains unexecuted runtime sources and separately audits exact type/test/pending exclusions',t=>{
 const {root}=fixture(t);put(root,'src/a.test.ts','export const assertion = 1;\n');const sources=inventory(root,readConfig(root));
 assert.equal(sources.find(entry=>entry.path==='src/unused.ts')?.lane,'node');assert.equal(sources.find(entry=>entry.path==='src/unused.ts')?.functions.length,1);
 assert.equal(sources.find(entry=>entry.path==='src/types.ts')?.lane,'excluded');assert.match(sources.find(entry=>entry.path==='src/types.ts')?.reason??'',/type-only/u);
 assert.deepEqual(sources.find(entry=>entry.path==='src/a.ts')?.runtimeLines,[1]);assert.equal(sources.find(entry=>entry.path==='src/browser/widget.ts')?.lane,'pending');assert.equal(sources.find(entry=>entry.path==='src/a.test.ts')?.lane,'excluded');
});
test('native TS identity requires exact executed stripping and production bytes, including temporary copy proof',t=>{
 const {root,base}=fixture(t),sources=inventory(root,readConfig(root)),value=nativeCapture(root);assert.equal(proveMapping(root,value,sources).kind,'native');
 assert.throws(()=>proveMapping(root,{...value,source:value.source+'\nreturn 1;'},sources),/executed code/u);
 assert.throws(()=>proveMapping(root,{...value,fileSource:value.fileSource+'\n'},sources),/hash differs/u);
 const url=pathToFileURL(path.join(base,'copy.ts')).href;const copy={...value,url,source:stripTypeScriptTypes(value.fileSource??'',{sourceUrl:url})};assert.equal(proveMapping(root,copy,sources).kind,'native');
});
test('captured native imports retain query identity while resolving the real TypeScript file',t=>{
 const {root}=fixture(t),sources=inventory(root,readConfig(root)),value=nativeCapture(root);
 const url=value.url+'?harness-pinned=owned-replay';
 const queried={...value,url,source:stripTypeScriptTypes(value.fileSource??'',{sourceUrl:url})};
 assert.equal(proveMapping(root,queried,sources).kind,'native');
 assert.throws(()=>proveMapping(root,{...queried,source:value.source},sources),/executed code/u);
});
test('emitted proof rejects forged JS/mappings even with genuine production sourcesContent',t=>{
 const {root,base}=fixture(t),sources=inventory(root,readConfig(root)),native=nativeCapture(root),emissions=emissionProofs(root,sources);const expected=emissions.get('src/a.ts');assert.ok(expected);
 const source=expected.code;const value={...native,url:pathToFileURL(path.join(base,'output.js')).href,source,fileSource:source,sourceMap:{version:3,sources:['pcr://source/src/a.ts'],sourcesContent:[native.fileSource],names:expected.names,mappings:expected.mappings}};
 assert.equal(proveMapping(root,value,sources,emissions).kind,'emitted');
 const installedMap={...value.sourceMap,sourceRoot:'pcr://source/',sources:['src/a.ts']};
 assert.equal(proveMapping(root,{...value,sourceMap:installedMap},sources,emissions).kind,'emitted');
 assert.throws(()=>proveMapping(root,{...value,sourceMap:{...installedMap,sourceRoot:'pcr://foreign/'}},sources,emissions),/Unrecognized source map root/u);
 assert.throws(()=>proveMapping(root,{...value,sourceMap:{...value.sourceMap,sourcesContent:['export const choose = () => 1;']}},sources,emissions),/hash differs/u);
 assert.throws(()=>proveMapping(root,{...value,sourceMap:{...value.sourceMap,sourcesContent:[]}},sources,emissions),/every original/u);
 assert.throws(()=>proveMapping(root,{...value,sourceMap:{...value.sourceMap,sources:['pcr://source/src/unknown.ts']}},sources,emissions),/uninventoried/u);
 assert.throws(()=>proveMapping(root,{...value,source:'export const choose = () => 1;',fileSource:'export const choose = () => 1;'},sources,emissions),/pinned compiler emission/u);
 assert.throws(()=>proveMapping(root,{...value,sourceMap:{...value.sourceMap,mappings:'AAAA'}},sources,emissions),/pinned compiler emission/u);
});
test('coverage configuration refuses broad exclusions, stale entries and runtime coverage-ignore comments',t=>{
 const {root}=fixture(t);const settings=readConfig(root);assert.throws(()=>config({...settings,exclusions:[{path:'src/**',reason:'hide source'}]}),/exact paths/u);
 assert.throws(()=>inventory(root,{...settings,exclusions:[{path:'src/missing.ts',reason:'stale'}]}),/Stale/u);
 put(root,'src/a.ts','/* c8 ignore next */\nexport const hidden = 1;');assert.throws(()=>inventory(root,settings),/ignore directive/u);
});
test('coverage thresholds independently enforce each measured runtime metric',()=>{
 const summary=istanbul.createCoverageSummary().toJSON();summary.lines={total:10,covered:8,skipped:0,pct:80};summary.functions={total:10,covered:9,skipped:0,pct:90};summary.branches={total:20,covered:16,skipped:0,pct:80};
 assert.deepEqual(thresholdFailures(summary,{lines:90,functions:90,branches:85}),['lines: 80 < 90','branches: 80 < 85']);
});
test('collector retains executed installed-style JS and its map before real cleanup, and reporter includes unloaded source',async t=>{
 const {root,base}=fixture(t);const original=readFileSync(path.join(root,'src/a.ts'),'utf8');
 const emitted=path.join(base,'emitted');emit(root,emitted,['src/a.ts']);const file=path.join(emitted,'src/a.js');const code=readFileSync(file,'utf8'),mapCode=readFileSync(file+'.map','utf8');rmSync(emitted,{recursive:true});
 const run=path.join(base,'run'),output=path.join(base,'report');
 const program=`import {mkdirSync,writeFileSync,rmSync} from 'node:fs';mkdirSync(${JSON.stringify(path.dirname(file))},{recursive:true});writeFileSync(${JSON.stringify(file)},${JSON.stringify(code)});writeFileSync(${JSON.stringify(file+'.map')},${JSON.stringify(mapCode)});const m=await import(${JSON.stringify(pathToFileURL(file).href)});if(m.choose(true)!==1)throw new Error('wrong execution');rmSync(${JSON.stringify(emitted)},{recursive:true});`;
 assert.equal(await collect(root,run,[process.execPath,'--no-strip-types','--input-type=module','-e',program]),0);
 const result=await report(root,output,[run],false);assert.ok(result.scripts>=1);assert.ok(result.pending.includes('src/browser/widget.ts'));
 const coverage=object(parse(readFileSync(path.join(output,'coverage-final.json'),'utf8')));const unused=object(coverage[path.join(root,'src/unused.ts')]);assert.deepEqual(Object.values(object(unused.f)),[0]);
 assert.equal(result.wholeProjectComplete,false);
 writeFileSync(path.join(root,'src/a.ts'),original+'\n');await assert.rejects(()=>report(root,path.join(base,'changed'),[run],false),/different source/u);
});
test('failed collected commands remain failed qualification input',async t=>{
 const {root,base}=fixture(t),run=path.join(base,'failed');assert.equal(await collect(root,run,[process.execPath,'-e','process.exit(2)']),2);await assert.rejects(()=>report(root,path.join(base,'report'),[run],false),/failed/u);
});

test('authenticated browser merge seam credits proven emission and keeps unknown bundler mappings pending',async t=>{
 const {root,base}=fixture(t),sources=inventory(root,readConfig(root)),emissions=emissionProofs(root,sources,true),proof=emissions.get('src/browser/widget.ts');assert.ok(proof);
 const source=readFileSync(path.join(root,'src/browser/widget.ts'),'utf8');const value:Capture={schemaVersion:1,pid:0,threadId:0,scriptId:'browser-1',url:'https://example.invalid/widget.js',source:proof.code,fileSource:proof.code,error:null,sourceMap:{version:3,sources:['pcr://source/src/browser/widget.ts'],sourcesContent:[source],mappings:proof.mappings,names:proof.names}};
 const map=istanbul.createCoverageMap();const ranges=[{functionName:'',isBlockCoverage:true,ranges:[{startOffset:0,endOffset:proof.code.length,count:1}]}];
 const result=await mergeExternalCaptures(root,map,sources,emissions,[{surface:'browser',capture:value,functions:ranges}]);assert.deepEqual(result.mapped,[path.join(root,'src/browser/widget.ts')]);assert.equal(result.pending.length,0);
 const rejected=await mergeExternalCaptures(root,map,sources,emissions,[{surface:'next',capture:{...value,source:'const fake = 1;',fileSource:'const fake = 1;'},functions:ranges}]);assert.equal(rejected.mapped.length,0);assert.match(rejected.pending[0]?.reason??'',/pinned compiler/u);assert.equal(map.files().length,1);assert.ok(base);
});

test('native ranges merge across independent runs without granting type-line or unexecuted-function credit',async t=>{
 const {root,base}=fixture(t);const url=pathToFileURL(path.join(root,'src/a.ts')).href;
 const a=path.join(base,'true-run'),b=path.join(base,'false-run');
 assert.equal(await collect(root,a,[process.execPath,'--input-type=module','-e',`const m=await import(${JSON.stringify(url)});if(m.choose(true)!==1)throw new Error('bad');`]),0);
 assert.equal(await collect(root,b,[process.execPath,'--input-type=module','-e',`const m=await import(${JSON.stringify(url)});if(m.choose(false)!==2)throw new Error('bad');`]),0);
 const result=await report(root,path.join(base,'merged'),[a,b],false);assert.ok(result.scripts>=2);
 const coverage=object(parse(readFileSync(path.join(base,'merged','coverage-final.json'),'utf8')));const chosen=object(coverage[path.join(root,'src/a.ts')]);
 assert.ok(Object.values(object(chosen.f)).some(count=>typeof count==='number'&&count>=2));assert.deepEqual(Object.values(object(chosen.statementMap)).map(value=>object(object(value).start).line),[1]);
 const original=readConfig(root);writeFileSync(path.join(root,'config/coverage.json'),JSON.stringify({...original,thresholds:{lines:1,functions:0,branches:0}}));await assert.rejects(()=>report(root,path.join(base,'retargeted'),[a,b],false),/different source/u);
});

test('collector refuses reused directories and protected source output before executing commands',async t=>{
 const {root,base}=fixture(t);await assert.rejects(()=>collect(root,path.join(root,'src','measurement'),[process.execPath,'-e','throw new Error("must not run")']),/artifacts must use/u);
 const existing=path.join(base,'existing');mkdirSync(existing);await assert.rejects(()=>collect(root,existing,[process.execPath,'-e','throw new Error("must not run")']),/EEXIST/u);
});

test('nested measured test subprocesses initialize one preload and retain collision-free captures',async t=>{
 const {root,base}=fixture(t);const inner=path.join(base,'inner'),outer=path.join(base,'outer');
 const program=`const {collect}=await import(${JSON.stringify(import.meta.url.replace(/coverage\.test\.(ts|js)$/u,'coverage.$1'))});const status=await collect(${JSON.stringify(root)},${JSON.stringify(inner)},[process.execPath,'--no-strip-types','-e','console.log("nested capture")']);if(status!==0)process.exit(status);`;
 assert.equal(await collect(root,outer,[process.execPath,'--input-type=module','-e',program]),0);
 const metadata=object(parse(readFileSync(path.join(inner,'run.json'),'utf8')));assert.equal(metadata.status,0);assert.equal(metadata.unchanged,true);
});

test('excluded mappings require code proof and cannot erase a production-URL defect',t=>{
 const {root,base}=fixture(t);put(root,'src/a.test.ts','export const fixture = 1;');const sources=inventory(root,readConfig(root)),value=nativeCapture(root),fixtureCode=readFileSync(path.join(root,'src/a.test.ts'),'utf8'),emissions=emissionProofs(root,sources,true,true);
 const url=pathToFileURL(path.join(base,'copy-test.ts')).href;const copied={...value,url,fileSource:fixtureCode,source:stripTypeScriptTypes(fixtureCode,{sourceUrl:url})};assert.equal(excludedCapture(copied,sources,root,emissions),true);
 const proof=emissions.get('src/a.test.ts');assert.ok(proof);const compiled={...value,url:pathToFileURL(path.join(base,'test.js')).href,fileSource:proof.code,source:proof.code,sourceMap:{version:3,sources:['pcr://source/src/a.test.ts'],sourcesContent:[fixtureCode],mappings:proof.mappings,names:proof.names}};assert.equal(excludedCapture(compiled,sources,root,emissions),true);
 assert.equal(excludedCapture({...compiled,source:'fake JS',fileSource:'fake JS'},sources,root,emissions),false);
 assert.equal(excludedCapture({...compiled,url:value.url},sources,root,emissions),false);
});
test('artifact path checks resolve symlink ancestors before refusing source-directory writes',t=>{
 const {root,base}=fixture(t);symlinkSync(path.join(root,'src'),path.join(root,'.reports'),'junction');assert.throws(()=>measurementPath(root,path.join(root,'.reports','run')),/artifacts must use/u);
 assert.equal(measurementPath(root,path.join(base,'safe','new')),path.join(base,'safe','new'));
});

test('map capture retains exact original TS bytes when a standard emitted map omits inline source content',t=>{
 const {root,base}=fixture(t);const url=pathToFileURL(path.join(base,'run.js.map'));const original=readFileSync(path.join(root,'src/a.ts'),'utf8');
 const mapped=object(retainMapSources({version:3,sources:['repo/src/a.ts'],names:[],mappings:'AAAA'},url,root));assert.deepEqual(mapped.sourcesContent,[original]);
 const retained=object(retainMapSources({version:3,sources:['repo/src/a.ts'],sourcesContent:['tampered original'],names:[],mappings:'AAAA'},url,root));assert.deepEqual(retained.sourcesContent,['tampered original']);
 assert.throws(()=>retainMapSources({version:3,sources:['../escape.ts'],sourceRoot:'pcr://source/',names:[],mappings:'AAAA'},url,root),/escapes/u);
});

test('an entirely type-only Node inventory cannot claim a passing empty-business coverage scope',async t=>{
 const {root,base}=fixture(t);put(root,'src/browser/widget.ts','export type Widget = string;');put(root,'src/a.ts','export interface A { id: string }');put(root,'src/unused.ts','export type Empty = string;');const run=path.join(base,'empty-run');
 assert.equal(await collect(root,run,[process.execPath,'-e','']),0);await assert.rejects(()=>report(root,path.join(base,'empty-report'),[run],false),/no authored runtime sources/u);
});

test('nested installed dependencies stay external while actual emitted PCR runtime is collected',()=>{
 const prefix='file:///tmp/tool/node_modules/@tiangong-lca/pcr/';assert.equal(executionRoute(prefix+'packages/pcr-core/src/index.js'),'candidate');assert.equal(executionRoute(prefix+'packages/tiangong-pcr-cli/bin/tiangong-pcr.js'),'candidate');
 assert.equal(executionRoute(prefix+'node_modules/ajv/dist/ajv.js'),'dependency');assert.equal(executionRoute(prefix+'node_modules/ajv/node_modules/fast-uri/index.js'),'dependency');assert.equal(executionRoute('file:///repo/node_modules/playwright/index.mjs'),'dependency');
});
test('external ranges cannot exceed authenticated executed source length',async t=>{
 const {root}=fixture(t),sources=inventory(root,readConfig(root)),emissions=emissionProofs(root,sources,true),proof=emissions.get('src/browser/widget.ts');assert.ok(proof);const original=readFileSync(path.join(root,'src/browser/widget.ts'),'utf8');
 const value:Capture={schemaVersion:1,pid:0,threadId:0,scriptId:'browser-1',url:'https://example.invalid/widget.js',source:proof.code,fileSource:proof.code,error:null,sourceMap:{version:3,sources:['pcr://source/src/browser/widget.ts'],sourcesContent:[original],mappings:proof.mappings,names:proof.names}};
 await assert.rejects(()=>mergeExternalCaptures(root,istanbul.createCoverageMap(),sources,emissions,[{surface:'browser',capture:value,functions:[{functionName:'',isBlockCoverage:true,ranges:[{startOffset:0,endOffset:proof.code.length+1,count:1}]}]}]),/exceeds authenticated/u);
});
test('unmeasured TSX has parser/emission-proven zero runtime lines/functions and stays in full denominator',async t=>{
 const {root,base}=fixture(t);put(root,'src/browser/view.tsx','export interface Props {label: string}\nexport function View({label}: Props) {return <div>{label}</div>;}\n');const sources=inventory(root,readConfig(root)),view=sources.find(entry=>entry.path==='src/browser/view.tsx');assert.ok(view);assert.equal(view.lane,'pending');assert.deepEqual(view.runtimeLines,[2]);assert.equal(view.functions.length,1);
 const run=path.join(base,'run');assert.equal(await collect(root,run,[process.execPath,'-e','']),0);const result=await report(root,path.join(base,'report'),[run],false);assert.equal(result.denominatorComplete,true);assert.ok(result.unexecuted.includes('src/browser/view.tsx'));
 const data=object(parse(readFileSync(path.join(base,'report','coverage-final.json'),'utf8'))),coverage=object(data[path.join(root,'src/browser/view.tsx')]);assert.deepEqual(Object.values(object(coverage.s)),[0]);assert.deepEqual(Object.values(object(coverage.f)),[0]);assert.deepEqual(Object.values(object(coverage.b)),[[0]]);
});

test('canonical production execution cannot disappear under forged excluded-source metadata',async t=>{
 const {root,base}=fixture(t);put(root,'src/a.test.ts','export const assertion = 1;');const url=pathToFileURL(path.join(root,'src/a.ts')).href,run=path.join(base,'canonical-run');assert.equal(await collect(root,run,[process.execPath,'--input-type=module','-e',`const m=await import(${JSON.stringify(url)});m.choose(true);`]),0);
 const sources=inventory(root,readConfig(root)),proof=emissionProofs(root,sources,true,true).get('src/a.test.ts');assert.ok(proof);let changed=false;
 for(const name of readdirSync(path.join(run,'captures'))){const filename=path.join(run,'captures',name),entry=object(parse(readFileSync(filename,'utf8')));if(entry.url!==url)continue;entry.source=proof.code;entry.fileSource=proof.code;entry.sourceMap={version:3,sources:['pcr://source/src/a.test.ts'],sourcesContent:[readFileSync(path.join(root,'src/a.test.ts'),'utf8')],mappings:proof.mappings,names:proof.names};writeFileSync(filename,JSON.stringify(entry));changed=true;}
 assert.equal(changed,true);const inspected=await report(root,path.join(base,'inspect'),[run],false);assert.ok(inspected.unmapped.some(entry=>entry.url===url));assert.equal(inspected.excludedExecution.includes(url),false);await assert.rejects(()=>report(root,path.join(base,'gate'),[run],true),/unmapped scripts/u);
});
test('unproved relocated execution is audited with zero credit while production stays in complete denominator',async t=>{
 const {root,base}=fixture(t),file=path.join(base,'unproved.mjs'),url=pathToFileURL(file).href,run=path.join(base,'unknown-run');writeFileSync(file,'export const unrelated = 1;');assert.equal(await collect(root,run,[process.execPath,'--input-type=module','-e',`await import(${JSON.stringify(url)});`]),0);
 const result=await report(root,path.join(base,'report'),[run],true);assert.ok(result.rejectedExecutions.some(entry=>entry.url===url&&entry.credit===0));assert.ok(result.unexecuted.includes('src/a.ts'));assert.equal(result.denominatorComplete,true);assert.equal(result.allModulesExecuted,false);
 const coverage=object(parse(readFileSync(path.join(base,'report','coverage-final.json'),'utf8')));assert.ok(Object.values(object(object(coverage[path.join(root,'src/a.ts')]).s)).every(count=>count===0));
});


test('unsupported TypeScript module extensions cannot disappear from the source denominator', t=>{
 const {root}=fixture(t);
 for(const extension of ['mts','cts']){
  const file=`src/unaccounted.${extension}`;put(root,file,'export const value: number = 1;\n');
  assert.throws(()=>inventory(root,readConfig(root)),/cannot omit authored TypeScript/u);
  rmSync(path.join(root,file));
 }
});


test('real native exit preserves untaken blocks and rejects a false critical coverage pass',async t=>{
 const {root,base}=fixture(t);
 put(root,'src/a.ts','export function choose(value: boolean): number {\n  if (value) {\n    return 1;\n  }\n  throw new Error("untaken false branch");\n}\n');
 rmSync(path.join(root,'src/unused.ts'));rmSync(path.join(root,'src/browser/widget.ts'));
 const settings=readConfig(root);put(root,'config/coverage.json',JSON.stringify({...settings,thresholds:{lines:90,functions:90,branches:85},critical:[{prefix:'src/a.ts',branches:95}]}));
 execFileSync('git',['add','-A'],{cwd:root});execFileSync('git',['commit','-qm','real branch precision fixture'],{cwd:root});
 const run=path.join(base,'precise-run'),output=path.join(base,'precise-report'),url=pathToFileURL(path.join(root,'src/a.ts')).href;
 const program=`import {choose} from ${JSON.stringify(url)}; if(choose(true)!==1)throw new Error('wrong chosen branch');`;
 assert.equal(await collect(root,run,[process.execPath,'--input-type=module','--eval',program]),0);
 const scripts=readdirSync(path.join(run,'raw')).flatMap(file=>{const data=object(parse(readFileSync(path.join(run,'raw',file),'utf8')));assert.ok(Array.isArray(data.result));return data.result.map(object);});
 const script=scripts.find(entry=>entry.url===url);assert.ok(script);assert.ok(Array.isArray(script.functions));
 const chosen=script.functions.map(object).find(entry=>entry.functionName==='choose');assert.ok(chosen);assert.equal(chosen.isBlockCoverage,true);
 assert.ok(Array.isArray(chosen.ranges));assert.ok(chosen.ranges.map(object).some(range=>range.count===0),'Actual untaken branch must remain a zero range.');
 await assert.rejects(report(root,output,[run]),/Coverage gates failed/u);
 const receipt=object(parse(readFileSync(path.join(output,'report.json'),'utf8')));assert.equal(receipt.coverageGatePassed,false);
 const coverage=object(object(parse(readFileSync(path.join(output,'coverage-final.json'),'utf8')))[path.join(root,'src/a.ts')]);
 const statements=object(coverage.statementMap),hits=object(coverage.s);
 assert.ok(Object.entries(statements).some(([key,span])=>object(object(span).start).line===5&&hits[key]===0),'The never executed throw line must not receive coverage.');
});


test('declared critical scopes enforce every included file even when unobserved TSX is globally small',async t=>{
 const {root,base}=fixture(t);
 put(root,'src/critical/logic.ts',Array.from({length:100},(_,index)=>`export function choose${index}(value: boolean) { return value ? 1 : 0; }`).join('\n')+'\n');
 put(root,'src/critical/widget.tsx','export function Widget() { return <span>Unobserved critical view</span>; }\n');
 const settings={...readConfig(root),thresholds:{lines:90,functions:90,branches:85},critical:[{prefix:'src/critical/',branches:95}]};
 put(root,'config/coverage.json',JSON.stringify(settings));execFileSync('git',['add','-A'],{cwd:root});execFileSync('git',['commit','-qm','critical external source fixture'],{cwd:root});
 const url=pathToFileURL(path.join(root,'src/critical/logic.ts')).href,run=path.join(base,'critical-run'),output=path.join(base,'critical-report');
 const program=`import * as routines from ${JSON.stringify(url)}; for(const call of Object.values(routines)) { call(true); call(false); }`;
 assert.equal(await collect(root,run,[process.execPath,'--input-type=module','--eval',program]),0);
 const observed=await report(root,output,[run],false);
 assert.deepEqual(thresholdFailures(observed.summary,settings.thresholds),[],'Ordinary aggregate targets must pass in this reproduction.');
 assert.ok(observed.failures.some(failure=>failure.startsWith('src/critical/widget.tsx: branches 0')));
 assert.equal(observed.coverageGatePassed,false);
 await assert.rejects(report(root,path.join(base,'enforced-critical'),[run]),/Coverage gates failed/u);
});

test('actual import-only subprocess cannot erase untaken branches when merging measured runs',async t=>{
 const {root,base}=fixture(t);
 put(root,'src/a.ts','export function choose(value: boolean): number {\n  if (value) {\n    return 1;\n  }\n  return 2;\n}\n');
 rmSync(path.join(root,'src/unused.ts'));rmSync(path.join(root,'src/browser/widget.ts'));
 const settings=readConfig(root);put(root,'config/coverage.json',JSON.stringify({...settings,critical:[{prefix:'src/a.ts',branches:95}]}));
 execFileSync('git',['add','-A'],{cwd:root});execFileSync('git',['commit','-qm','independent process branch fixture'],{cwd:root});
 const url=pathToFileURL(path.join(root,'src/a.ts')).href,importRun=path.join(base,'import-only'),partialRun=path.join(base,'partial');
 assert.equal(await collect(root,importRun,[process.execPath,'--input-type=module','--eval',`await import(${JSON.stringify(url)});`]),0);
 assert.equal(await collect(root,partialRun,[process.execPath,'--input-type=module','--eval',`const m=await import(${JSON.stringify(url)});if(m.choose(true)!==1)throw new Error('wrong chosen branch');`]),0);
 const output=path.join(base,'merged');const result=await report(root,output,[importRun,partialRun],false);
 assert.ok(result.failures.some(failure=>failure.startsWith('src/a.ts: branches ')),'Importing the module must not execute its untaken branch.');
 const coverage=object(object(parse(readFileSync(path.join(output,'coverage-final.json'),'utf8')))[path.join(root,'src/a.ts')]);
 assert.ok(Object.values(object(coverage.b)).some(value=>Array.isArray(value)&&value.some(count=>count===0)));
 const reverse=await report(root,path.join(base,'reverse'),[partialRun,importRun],false);assert.deepEqual(reverse.summary,result.summary);
 await assert.rejects(report(root,path.join(base,'gate'),[importRun,partialRun]),/Coverage gates failed/u);
 // A separately executed installed-style compiler surface has different
 // offsets. It is functional evidence, not permission to merge enclosing
 // Istanbul branches into the selected native measurement surface.
 const emitted=path.join(base,'emitted');emit(root,emitted,['src/a.ts']);
 const emittedRun=path.join(base,'emitted-run'),emittedUrl=pathToFileURL(path.join(emitted,'src/a.js')).href;
 assert.equal(await collect(root,emittedRun,[process.execPath,'--no-strip-types','--input-type=module','--eval',`const m=await import(${JSON.stringify(emittedUrl)});if(m.choose(false)!==2)throw new Error('wrong emitted branch');`]),0);
 const mixed=await report(root,path.join(base,'mixed'),[importRun,partialRun,emittedRun],false);
 assert.deepEqual(mixed.summary,result.summary);assert.equal(mixed.omittedMeasurementLanes.length,1);assert.equal(mixed.omittedMeasurementLanes[0]?.kind,'emitted');
 assert.equal(mixed.coverageGatePassed,false);
});


test('actual Node-executed TSX receives credit only through exact compiler emission proof',async t=>{
 const {root,base}=fixture(t);rmSync(path.join(root,'src/browser/widget.ts'));const code='export function Widget(value: boolean) { return value ? "present" : "absent"; }\n';
 put(root,'src/browser/widget.tsx',code);execFileSync('git',['add','-A'],{cwd:root});execFileSync('git',['commit','-qm','actual JSX runtime fixture'],{cwd:root});
 const emitted=path.join(base,'emitted');emit(root,emitted,['src/browser/widget.tsx']);
 put(emitted,'package.json','{"type":"module"}');
 const url=pathToFileURL(path.join(emitted,'src/browser/widget.js')).href,run=path.join(base,'jsx-run'),output=path.join(base,'jsx-report');
 assert.equal(await collect(root,run,[process.execPath,'--no-strip-types','--input-type=module','--eval',`import {Widget} from ${JSON.stringify(url)}; if(Widget(true)!=="present")throw new Error("render mismatch");`]),0);
 const result=await report(root,output,[run],false);assert.ok(!result.pending.includes('src/browser/widget.tsx'));
 const full=object(parse(readFileSync(path.join(output,'coverage-final.json'),'utf8')));const measured=object(full[path.join(root,'src/browser/widget.tsx')]);
 assert.ok(Object.values(object(measured.s)).some(value=>typeof value==='number'&&value>0));
 assert.ok(Object.values(object(measured.b)).some(value=>Array.isArray(value)&&value.includes(0)),'Unselected JSX branch must retain zero credit.');
});
