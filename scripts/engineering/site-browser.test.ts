import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync,realpathSync,existsSync,symlinkSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {inspectSiteExport,parseSiteBrowserArguments,prepareSiteBrowserReport,withSiteExportServer,isCancelledSitePrefetch,captureCancelledSiteRequest,emittedLanguageCodes,browserLanguageScenarios,findInlineDownload,findNativeDownloads,isNativeDownloadCancellation,qualifySiteBrowser} from './site-browser.ts';
import type {CancelledRequest,SiteBrowserEngine} from './site-browser.ts';
import {prepareStaticRouteAliases} from '../../packages/pcr-docs/scripts/static-route-aliases.ts';
import {preferredRoute} from '../../packages/pcr-docs/lib/language-preference.ts';
function fixture(){const parent=mkdtempSync(path.join(realpathSync(tmpdir()),'site-browser-contract-')),root=path.join(parent,'export');mkdirSync(root);const put=(key:string,text:string)=>{mkdirSync(path.dirname(path.join(root,key)),{recursive:true});writeFileSync(path.join(root,key),text);};
 const identity={sourceCommit:'a'.repeat(40),sourceFingerprint:'sha256:'+'b'.repeat(64)};
 for(const key of ['index.html','en/index.html','zh/index.html','en/docs/pcr/index.html','zh/docs/pcr/index.html','en/docs/pcr/a/b/c/index.html','zh/docs/pcr/a/b/c/index.html','en/docs/modules/core/unit/index.html','en/docs/getting-started/index.html','zh/docs/getting-started/index.html'])put(key,`<html lang="${key.startsWith('en/')?'en-US':'zh-CN'}"><h1>Fixture</h1></html>`);
 put('generated/static-route-aliases.json',JSON.stringify({schemaVersion:1,sourceCommit:identity.sourceCommit,pairs:[]})+'\n');put('generated/version.json',JSON.stringify(identity));put('generated/product-release.json',JSON.stringify(identity));put('generated/search-worker.mjs','export {};');
 return {parent,root,put,close(){rmSync(parent,{recursive:true,force:true});}};
}
test('sealed browser selects a real bounded inline download and rejects a missing filename', () => {
 const f=fixture();try {
  assert.equal(findInlineDownload(inspectSiteExport(f.root)),undefined);
  const bytes=Buffer.from('\ufeffstatus: candidate\r\ncontent_maturity: authored_methodology\r\ntitle: 中文\r\n');
  const url='data:application/octet-stream;base64,'+bytes.toString('base64');
  f.put('en/docs/pcr/a/b/c/index.html',`<html lang="en-US"><h1>Fixture</h1><a download="manifest.yaml" href="${url}" class="pcr-download-name">manifest.yaml</a></html>`);
  const selected=findInlineDownload(inspectSiteExport(f.root));assert.ok(selected);
  assert.equal(selected.route,'/en/docs/pcr/a/b/c/');assert.equal(selected.url,url);assert.equal(selected.bytes,bytes.length);
  for(const name of ['pcr.en-US.md','pcr.zh-CN.md']) {
   f.put('en/docs/pcr/a/b/c/index.html',`<html lang="en-US"><h1>Fixture</h1><a download="${name}" href="${url}" class="pcr-download-name">${name}</a></html>`);
   const markdown=findInlineDownload(inspectSiteExport(f.root),name);assert.ok(markdown);assert.equal(markdown.name,name);assert.equal(markdown.bytes,bytes.length);
  }

  const larger=Buffer.alloc(40960,65),largerUrl='data:application/octet-stream;base64,'+larger.toString('base64');
  f.put('en/docs/pcr/a/b/c/index.html',`<html lang="en-US"><h1>Fixture</h1><a download="pcr.en-US.md" href="${url}" class="pcr-download-name">pcr.en-US.md</a></html>`);
  f.put('en/docs/pcr/a/b/larger/index.html',`<html lang="en-US"><h1>Fixture</h1><a download="pcr.en-US.md" href="${largerUrl}" class="pcr-download-name">pcr.en-US.md</a></html>`);
  const largest=findInlineDownload(inspectSiteExport(f.root),'pcr.en-US.md');assert.ok(largest);assert.equal(largest.bytes,40960);assert.equal(largest.route,'/en/docs/pcr/a/b/larger/');
  f.put('en/docs/pcr/a/b/c/index.html',`<html lang="en-US"><h1>Fixture</h1><a href="${url}" class="pcr-download-name">manifest.yaml</a></html>`);
  assert.throws(()=>findInlineDownload(inspectSiteExport(f.root)),/manifest.yaml/u);
 }finally{f.close();}
});
test('site browser requires explicit single root/report arguments without silent skip',()=>{assert.equal(parseSiteBrowserArguments(['--help']),'help');for(const args of [[],['--root','x'],['--report','x'],['--root','x','--report','y','--report','z'],['--root','--report','x'],['--unknown','x']])assert.throws(()=>parseSiteBrowserArguments(args),{code:'SITE_BROWSER_ARGUMENT'});assert.deepEqual(parseSiteBrowserArguments(['--root','x','--report','y']),{root:path.resolve('x'),report:path.resolve('y')});});
test('site export validates identity, required routes and deterministic full-tree binding',()=>{const f=fixture();try{const before=inspectSiteExport(f.root);assert.equal(before.routes.length,10);assert.ok(before.availability.some(item=>item.kind==='history'&&!item.present));assert.equal(inspectSiteExport(f.root).treeSha256,before.treeSha256);f.put('en/docs/pcr/a/b/c/index.html','<h1>Changed</h1>');assert.notEqual(inspectSiteExport(f.root).treeSha256,before.treeSha256);f.put('generated/product-release.json','{}');assert.throws(()=>inspectSiteExport(f.root),{code:'SITE_EXPORT_IDENTITY'});}finally{f.close();}});
test('emitted optional French stays supported and cannot be chosen as an unsupported browser probe',()=>{
 const f=fixture();try{
  f.put('fr-fr/index.html','<html dir="ltr" lang="fr-FR"><h1>Français</h1></html>');
  f.put('en-gb/index.html',"<html lang='en-GB'><h1>English (UK)</h1></html>");
  const codes=emittedLanguageCodes(inspectSiteExport(f.root));
  assert.equal(codes['fr-fr'],'fr-FR');assert.equal(preferredRoute(codes,['ja-JP','fr-FR'],null),'fr-fr');
  const scenarios=browserLanguageScenarios(codes),fallback=scenarios.find(scenario=>scenario.name==='unsupported language fallback');assert.ok(fallback);
  assert.ok(!fallback.languages.includes('fr-FR'));assert.equal(preferredRoute(codes,fallback.languages,null),'en');assert.equal(fallback.htmlLanguage,'en-US');
  const regional=scenarios.find(scenario=>scenario.name==='regional English');assert.equal(regional?.expected,'/en-gb/');assert.equal(regional?.htmlLanguage,'en-GB');
 }finally{f.close();}
});
test('bounded probe exhaustion tests absent browser language information instead of mislabeling optional languages',()=>{
 const codes={en:'en-US',zh:'zh-CN',fr:'fr-FR',ja:'ja-JP',ko:'ko-KR',ru:'ru-RU',ar:'ar-SA',hi:'hi-IN',sw:'sw-KE',eo:'eo'};
 const fallback=browserLanguageScenarios(codes).find(scenario=>scenario.name==='missing browser language fallback');assert.ok(fallback);
 assert.deepEqual(fallback.languages,[]);assert.equal(fallback.expected,'/en/');assert.equal(fallback.htmlLanguage,'en-US');
});
test('site export rejects missing input and symbolic links rather than launching browsers',()=>{const f=fixture();try{assert.throws(()=>inspectSiteExport(path.join(f.parent,'missing')),{code:'SITE_EXPORT_INPUT'});rmSync(path.join(f.root,'generated/search-worker.mjs'));assert.throws(()=>inspectSiteExport(f.root),{code:'SITE_EXPORT_INPUT'});f.put('generated/search-worker.mjs','export {};');symlinkSync(path.join(f.root,'index.html'),path.join(f.root,'alias.html'));assert.throws(()=>inspectSiteExport(f.root),{code:'SITE_EXPORT_PATH'});}finally{f.close();}});
test('raw TypeScript and malformed/nonfinite identity bytes fail before browser resources open',()=>{const f=fixture();try{f.put('generated/search-worker.ts','export {};');assert.throws(()=>inspectSiteExport(f.root),{code:'SITE_EXPORT_INPUT'});rmSync(path.join(f.root,'generated/search-worker.ts'));writeFileSync(path.join(f.root,'generated/version.json'),Buffer.from([0xff,0xfe]));assert.throws(()=>inspectSiteExport(f.root),{code:'SITE_EXPORT_IDENTITY'});f.put('generated/version.json','{"sourceCommit":"'+ 'a'.repeat(40)+'","sourceFingerprint":"sha256:'+ 'b'.repeat(64)+'","bad":1e999}');assert.throws(()=>inspectSiteExport(f.root),{code:'SITE_EXPORT_IDENTITY'});}finally{f.close();}});
test('report output must be new and outside the export including parent symlink aliases',()=>{const f=fixture();try{assert.throws(()=>prepareSiteBrowserReport(path.join(f.root,'evidence'),f.root),{code:'SITE_BROWSER_REPORT'});assert.throws(()=>prepareSiteBrowserReport(f.parent,f.root),{code:'SITE_BROWSER_REPORT'});const alias=path.join(f.parent,'alias');symlinkSync(f.root,alias,'dir');assert.throws(()=>prepareSiteBrowserReport(path.join(alias,'evidence'),f.root),{code:'SITE_BROWSER_REPORT'});const report=prepareSiteBrowserReport(path.join(f.parent,'report'),f.root);assert.ok(existsSync(report));assert.throws(()=>prepareSiteBrowserReport(report,f.root),{code:'SITE_BROWSER_REPORT'});}finally{f.close();}});
test('owned ephemeral export server serves emitted modules and closes after callback success',async()=>{const f=fixture();let origin='';try{await withSiteExportServer(f.root,async url=>{origin=url;const home=await fetch(url+'/');assert.equal(home.status,200);assert.match(await home.text(),/Fixture/u);const worker=await fetch(url+'/generated/search-worker.mjs');assert.equal(worker.status,200);assert.match(worker.headers.get('content-type')??'',/javascript/u);assert.equal((await fetch(url+'/missing.js')).status,404);assert.equal((await fetch(url+'/%2e%2e%2findex.html')).status,403);});await assert.rejects(fetch(origin));}finally{f.close();}});
test('owned server closes after callback failure and never serves symlink substitutions',async()=>{const f=fixture();let origin='';try{await assert.rejects(withSiteExportServer(f.root,async url=>{origin=url;symlinkSync(path.join(f.root,'index.html'),path.join(f.root,'alias.html'));assert.equal((await fetch(url+'/alias.html')).status,403);throw new Error('callback failure');}),/callback failure/u);await assert.rejects(fetch(origin));}finally{f.close();}});
const cancellations = [['chromium','net::ERR_ABORTED'],['firefox','NS_BINDING_ABORTED'],['webkit','cancelled'],['webkit','Load request cancelled']] as const;
function prefetched(engine:SiteBrowserEngine,reason:string):CancelledRequest {
 return {engine,reason,url:'http://127.0.0.1:1/zh/docs/getting-started/__next._tree.txt?_rsc=probe',method:'GET',headers:{rsc:'1','next-router-prefetch':'1'},resourceType:'fetch',isNavigationRequest:false};
}
test('pinned browser cancellations require explicit non-navigation prefetch evidence',()=>{
 for(const [engine,reason] of cancellations){
  const request=prefetched(engine,reason);
  assert.equal(isCancelledSitePrefetch(request,[]),true);
  assert.equal(isCancelledSitePrefetch({...request,headers:{purpose:'prefetch'}},[]),true);
  assert.equal(isCancelledSitePrefetch({...request,headers:{'sec-purpose':'prefetch; anonymous-client-ip'}},[]),true);
  assert.equal(isCancelledSitePrefetch({...request,headers:{rsc:'1'}},[]),false,'RSC is not prefetch evidence');
  assert.equal(isCancelledSitePrefetch({...request,headers:{'sec-purpose':'not-prefetch'}},[]),false);
 }
});
test('marked real navigation, failed HTTP and ordinary resources never become ignored cancellations',()=>{
 for(const [engine,reason] of cancellations){
  const request=prefetched(engine,reason);
  for(const change of [{isNavigationRequest:true},{resourceType:'document'},{resourceType:'script'},{resourceType:'image'},{method:'POST'},{status:404},{status:500},{status:302}])assert.equal(isCancelledSitePrefetch({...request,...change},[]),false);
  assert.equal(isCancelledSitePrefetch({...request,status:200},[]),true);
  const missingNavigation={...request};Reflect.deleteProperty(missingNavigation,'isNavigationRequest');assert.equal(isCancelledSitePrefetch(missingNavigation,[]),false);
  const missingType={...request};Reflect.deleteProperty(missingType,'resourceType');assert.equal(isCancelledSitePrefetch(missingType,[]),false);
 }
 assert.equal(isCancelledSitePrefetch(prefetched('webkit','NS_BINDING_ABORTED'),[]),false,'Cancellation must match its browser');
 for(const reason of ['net::ERR_FAILED','net::ERR_CONNECTION_REFUSED','cancelled by server','unknown'])assert.equal(isCancelledSitePrefetch(prefetched('chromium',reason),[]),false);
});
test('successful HEAD companion probes require exact same-origin page-scoped prefetch evidence',()=>{
 for(const [engine,reason] of cancellations){
  const probe={...prefetched(engine,reason),url:'http://127.0.0.1:1/en/',method:'HEAD',headers:{},status:200};
  const companion=['http://127.0.0.1:1/en/__next._tree.txt?_rsc=x'];
  assert.equal(isCancelledSitePrefetch(probe,companion),true);
  assert.equal(isCancelledSitePrefetch(probe,[]),false);
  assert.equal(isCancelledSitePrefetch({...probe,status:404},companion),false);
  assert.equal(isCancelledSitePrefetch({...probe,status:undefined},companion),false);
  assert.equal(isCancelledSitePrefetch({...probe,method:'GET'},companion),false);
  assert.equal(isCancelledSitePrefetch(probe,['http://other.example/en/__next._tree.txt']),false);
  assert.equal(isCancelledSitePrefetch(probe,['http://127.0.0.1:1/zh/__next._tree.txt']),false);
  assert.equal(isCancelledSitePrefetch(probe,['not-a-url']),false);
 }
});
test('request diagnostics preserve observed context and omit unrelated header values',()=>{
 const request={url:()=> 'http://127.0.0.1:1/en/segment',failure:()=>({errorText:'Load request cancelled'}),method:()=> 'GET',headers:()=>({'next-router-prefetch':'1',rsc:'1',authorization:'test-secret',cookie:'private-cookie'}),resourceType:()=> 'fetch' as const,isNavigationRequest:()=>false};
 const context={engine:'webkit' as const,viewport:'mobile',startedAtMs:100,failedAtMs:105,startPhase:'guide-counterpart-return',failurePhase:'guide-counterpart-return',actualUrl:'http://127.0.0.1:1/zh/docs/getting-started/'};
 const failures:CancelledRequest[]=[];
 const cyclicContext={...context,requestFailures:failures,cookie:'private-context'};
 const captured=captureCancelledSiteRequest(request,cyclicContext,200);failures.push(captured);
 const serialized=JSON.stringify({languagePreferences:[cyclicContext]});
 assert.equal(JSON.parse(serialized).languagePreferences[0].requestFailures[0].failurePhase,context.failurePhase);
 assert.equal(Object.hasOwn(captured,'requestFailures'),false);assert.equal(Object.hasOwn(captured,'cookie'),false);
 assert.equal(captured.reason,'Load request cancelled');assert.equal(captured.method,'GET');assert.equal(captured.resourceType,'fetch');assert.equal(captured.isNavigationRequest,false);assert.equal(captured.status,200);
 assert.deepEqual(captured.headers,{'next-router-prefetch':'1',rsc:'1'});assert.equal(captured.startPhase,context.startPhase);assert.equal(captured.failurePhase,context.failurePhase);assert.equal(captured.actualUrl,context.actualUrl);assert.equal(captured.startedAtMs,100);assert.equal(captured.failedAtMs,105);
 assert.equal(isCancelledSitePrefetch(captured,[]),true);
 const unknown=captureCancelledSiteRequest({...request,failure:()=>null},{...context,startedAtMs:null,startPhase:null});assert.equal(unknown.reason,'unknown');assert.equal(unknown.status,undefined);assert.equal(unknown.startPhase,null);assert.equal(isCancelledSitePrefetch(unknown,[]),false);
});

test('native samples require every filename and bind physical original bytes without inline substitution',()=>{
 const f=fixture();try{
  assert.throws(()=>findNativeDownloads(inspectSiteExport(f.root)),/Missing native/u);
  const names=['manifest.yaml','pcr.en-US.md','pcr.zh-CN.md'];
  const anchors=names.map(name=>{const url='/generated/raw/library/pcrs/a/b/c/'+name;f.put(url.slice(1),'\ufefforiginal '+name+' 中文\r\n');return `<a class="pcr-download-name" download="${name}" href="${url}">${name}</a>`;}).join('');
  f.put('en/docs/pcr/a/b/c/index.html',anchors);
  const samples=findNativeDownloads(inspectSiteExport(f.root));assert.equal(samples.length,3);assert.deepEqual(samples.map(item=>item.transport),['physical','physical','physical']);
  assert.equal(findInlineDownload(inspectSiteExport(f.root)),undefined,'Physical downloads never masquerade as legacy inline evidence');
  for(const item of samples){const bytes=readFileSync(path.join(f.root,item.url.slice(1)));assert.equal(item.bytes,bytes.length);assert.equal(item.name,path.basename(item.url));}
  const exported=inspectSiteExport(f.root);f.put(samples[0]!.url.slice(1),'changed after inventory');assert.throws(()=>findNativeDownloads(exported));
  for(const bad of ['https://foreign.test/manifest.yaml','/generated/raw/library/pcrs/a/b/c/%2e%2e/manifest.yaml','/generated/raw/library/pcrs/a/b/c/manifest.yaml?x=1','/generated/raw/library/pcrs/a/b/c/pcr.en-US.md','/generated/raw/library/pcrs/a/b/missing/manifest.yaml']){
   f.put('en/docs/pcr/a/b/c/index.html',anchors.replace('/generated/raw/library/pcrs/a/b/c/manifest.yaml',bad));assert.throws(()=>findNativeDownloads(inspectSiteExport(f.root)),bad);
  }
 }finally{f.close();}
});
test('native selection retains exact legacy inline decoding while failing missing required native samples',()=>{
 const f=fixture();try{
  const url='data:application/octet-stream;base64,'+Buffer.from('original\r\n').toString('base64');
  f.put('en/docs/pcr/a/b/c/index.html',['manifest.yaml','pcr.en-US.md','pcr.zh-CN.md'].map(name=>`<a class="pcr-download-name" download="${name}" href="${url}">${name}</a>`).join(''));
  assert.deepEqual(findNativeDownloads(inspectSiteExport(f.root)).map(item=>item.transport),['inline','inline','inline']);
  f.put('en/docs/pcr/a/b/c/index.html',`<a class="pcr-download-name" download="manifest.yaml" href="data:text/plain;base64,YQ==">manifest.yaml</a>`);assert.throws(()=>findNativeDownloads(inspectSiteExport(f.root)),/MIME/u);
 }finally{f.close();}
});
test('native navigation cancellations require completed exact native download evidence and never alter prefetch rules',()=>{
 const origin='http://127.0.0.1:1',expected={route:'/en/docs/pcr/a/b/c/',url:'/generated/raw/library/pcrs/a/b/c/manifest.yaml',name:'manifest.yaml',bytes:12,sha256:'a'.repeat(64),transport:'physical' as const};
 const success={url:origin+expected.url,filename:expected.name,bytes:expected.bytes,sha256:expected.sha256,failure:null};
 for(const [engine,reason]of cancellations){
  const request:CancelledRequest={engine,reason,url:success.url,method:'GET',headers:{},resourceType:'document',isNavigationRequest:true};
  assert.equal(isNativeDownloadCancellation(request,expected,success,origin),true);assert.equal(isCancelledSitePrefetch(request,[]),false);
  for(const change of [{reason:'unknown'},{reason:'net::ERR_CONNECTION_REFUSED'},{url:success.url+'?changed=1'},{method:'HEAD'},{method:'POST'},{resourceType:'fetch'},{isNavigationRequest:false},{status:404},{status:302}])assert.equal(isNativeDownloadCancellation({...request,...change},expected,success,origin),false);
  for(const change of [{url:success.url+'?changed=1'},{filename:'other.yaml'},{bytes:13},{sha256:'b'.repeat(64)}])assert.equal(isNativeDownloadCancellation(request,expected,{...success,...change},origin),false);
  assert.equal(isNativeDownloadCancellation(request,{...expected,transport:'inline'},success,origin),false);
  assert.equal(isNativeDownloadCancellation(request,expected,success,'http://foreign.test'),false);
 }
});
test('new exports require declared aliases but explicit archived product identities retain physical-route compatibility',async()=>{
 const f=fixture();try{
  rmSync(path.join(f.root,'generated/static-route-aliases.json'));
  assert.throws(()=>inspectSiteExport(f.root),{code:'SITE_EXPORT_ALIASES'});
  await assert.rejects(withSiteExportServer(f.root,async()=>assert.fail('Cannot open an undeclared new export')),{code:'SITE_EXPORT_ALIASES'});
  f.put('generated/product-release.json',JSON.stringify({version:'0.4.8',sourceCommit:'a'.repeat(40),sourceFingerprint:'sha256:'+'b'.repeat(64)}));
  assert.equal(inspectSiteExport(f.root).staticRouteAliases,undefined);
  f.put('__next._full.txt','legacy physical RSC');await withSiteExportServer(f.root,async origin=>assert.equal(await(await fetch(origin+'/__next._full.txt')).text(),'legacy physical RSC'));
 }finally{f.close();}
});

test('missing native samples retain a failed browser receipt before any engine launch',async()=>{
 const f=fixture();try{const report=path.join(f.parent,'missing-native-report');await assert.rejects(qualifySiteBrowser({root:f.root,report}),/Missing native/u);const receipt=JSON.parse(readFileSync(path.join(report,'report.json'),'utf8'));assert.equal(receipt.status,'failed');assert.match(receipt.failure,/Missing native/u);assert.deepEqual(receipt.nativeDownloads,[]);assert.deepEqual(receipt.results,[]);}finally{f.close();}
});
test('HTTP 200 RSC aliases use verified encoded routes with queries and exact target bytes',async()=>{
 const f=fixture();try{
  rmSync(path.join(f.root,'generated/static-route-aliases.json'));
  for(const route of ['', 'en/docs/中文 space/']){f.put(route+'index.txt','exact RSC '+route+'\r\n');f.put(route+'__next._full.txt','exact RSC '+route+'\r\n');}
  const manifest=prepareStaticRouteAliases(f.root,'a'.repeat(40));assert.equal(manifest.pairs.length,2);assert.equal(inspectSiteExport(f.root).staticRouteAliases?.pairs.length,2);
  await withSiteExportServer(f.root,async origin=>{
   for(const pair of manifest.pairs){const response=await fetch(origin+pair.source+'?_rsc=probe');assert.equal(response.status,200);assert.equal(response.headers.get('location'),null);assert.deepEqual(Buffer.from(await response.arrayBuffer()),readFileSync(path.join(f.root,decodeURIComponent(pair.target).slice(1))));assert.equal((await fetch(origin+pair.source,{method:'HEAD'})).status,200);}
   assert.equal((await fetch(origin+'/en/docs/unknown/__next._full.txt')).status,404);
   for(const unsafe of ['/%2e%2e%2f__next._full.txt','/en%2fdocs/__next._full.txt','/en%5cdocs/__next._full.txt'])assert.equal((await fetch(origin+unsafe)).status,403);
   f.put('index.txt','tampered');assert.equal((await fetch(origin+'/__next._full.txt')).status,403);
  });
  await assert.rejects(withSiteExportServer(f.root,async()=>assert.fail('Tampered target must fail before listening')));
 }finally{f.close();}
});
