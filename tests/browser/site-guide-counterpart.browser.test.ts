import assert from 'node:assert/strict';
import {test} from 'node:test';
import {createServer} from 'node:http';
import {mkdirSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {webkit} from 'playwright';
import type {Request,Browser,BrowserContext} from 'playwright';
import {checkGuideCounterpart,assertSiteBrowserErrors,captureCancelledSiteRequest} from '../../scripts/engineering/site-browser.ts';
const english='/en/docs/getting-started/',chinese='/zh/docs/getting-started/',chunk='/_next/static/chunks/late-guide.js';
function deferred(){let resolve:()=>void=()=>{};const promise=new Promise<void>(done=>{resolve=done;});return {promise,resolve};}
async function guideProbe(failAsset:boolean){
 const started=deferred(),release=deferred(),featureChecked=deferred(),scriptCancelled=deferred();let executed=false;
 const server=createServer(async(request,response)=>{
  const pathname=new URL(request.url??'/','http://localhost').pathname;
  if(pathname===chunk){started.resolve();await release.promise;response.writeHead(failAsset?503:200,{'content-type':'text/javascript'});response.end('document.documentElement.dataset.lateGuideChunk="executed";fetch("/late-script-executed");');return;}
  if(pathname==='/late-script-executed'){executed=true;response.writeHead(204);response.end();return;}
  if(pathname==='/favicon.ico'){response.writeHead(204);response.end();return;}
  if(pathname!==english&&pathname!==chinese){response.writeHead(404);response.end('missing');return;}
  const zh=pathname===chinese;
  response.writeHead(200,{'content-type':'text/html; charset=utf-8'});
  response.end(`<!doctype html><html lang="${zh?'zh-CN':'en-US'}"><body><h1>${zh?'开始使用':'Getting started'}</h1><button data-pcr-language-trigger onclick="document.getElementById('switch').hidden=false">Language</button><button id="switch" hidden onclick="location.assign('${zh?english:chinese}'+location.search)">${zh?'English':'中文'}</button><button id="copy"${zh?' hidden':''}>${zh?'复制 Agent 提示词':'Copy Agent prompt'}</button><div id="getting-started-content"><pre><code>${zh?'/getting-started.zh-CN.md':'/getting-started.md'}</code></pre></div></body></html>`);
 });
 await new Promise<void>((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve);});const address=server.address();assert.ok(address&&typeof address==='object');const origin=`http://127.0.0.1:${address.port}`;
 let browser:Browser|undefined,context:BrowserContext|undefined;
 try {
 browser=await webkit.launch({headless:true});context=await browser.newContext({viewport:{width:1440,height:1000},locale:'zh-CN'});const page=await context.newPage();
 const evidence:Parameters<typeof checkGuideCounterpart>[3]={engine:'webkit',engineVersion:browser.version(),viewport:'desktop',route:{kind:'guide',locale:'en',path:english},assertions:[],errors:[],ignoredPrefetchAborts:[],requestFailures:[],prefetchUrls:[],screenshot:'fixture'};
 const events:{event:string;phase:string;at:number;url?:string;executed?:boolean}[]=[],starts=new WeakMap<Request,{at:number;phase:string}>(),statuses=new WeakMap<Request,number>(),consoleErrors:{text:string;url:string}[]=[];let phase='initial',controller:Promise<void>|undefined,operation:Promise<void>|undefined;
 const push=evidence.assertions.push.bind(evidence.assertions);evidence.assertions.push=(...items)=>{const count=push(...items);if(items.some(item=>item.includes('authored guide counterpart')))featureChecked.resolve();return count;};
 page.on('request',request=>{starts.set(request,{at:Date.now(),phase});if(new URL(request.url()).pathname===chunk)events.push({event:'request',phase,at:Date.now(),url:request.url()});});
 page.on('requestfinished',request=>{if(new URL(request.url()).pathname===chunk)events.push({event:'finished',phase,at:Date.now(),url:request.url()});});
 page.on('requestfailed',request=>{const start=starts.get(request);evidence.requestFailures.push(captureCancelledSiteRequest(request,{engine:'webkit',viewport:'desktop',startedAtMs:start?.at??null,failedAtMs:Date.now(),startPhase:start?.phase??null,failurePhase:phase,actualUrl:page.url()},statuses.get(request)));events.push({event:'failed',phase,at:Date.now(),url:request.url()});if(new URL(request.url()).pathname===chunk)scriptCancelled.resolve();});
 page.on('response',response=>{statuses.set(response.request(),response.status());if(response.status()>=400)evidence.errors.push(`HTTP ${response.status()}: ${response.url()}`);});
 page.on('pageerror',error=>evidence.errors.push('pageerror: '+error.message));page.on('console',message=>{if(message.type()==='error')consoleErrors.push({text:message.text(),url:message.location().url});});
 page.on('domcontentloaded',()=>{if(new URL(page.url()).pathname!==chinese)return;controller=(async()=>{
  // This is real work begun after the document's one-shot lifecycle idle. Reveal
  // the feature control only once that post-idle script request is initiated.
  await page.waitForLoadState('networkidle');events.push({event:'lifecycle-idle',phase,at:Date.now(),url:page.url()});
  await page.evaluate(asset=>{const script=document.createElement('script');script.src=asset;document.head.append(script);document.getElementById('copy')!.hidden=false;},chunk);
 })();});
 let phaseBeforeRelease='';
 try {
  await page.goto(origin+english,{waitUntil:'networkidle'});
  operation=checkGuideCounterpart(page,origin,evidence.route,evidence,next=>{phase=next;events.push({event:'phase',phase,at:Date.now(),url:page.url(),executed});});
  const unexpectedCompletion=operation.then(()=>{throw new Error('Guide check completed before controlled late-script evidence');});
  await Promise.race([started.promise,unexpectedCompletion]);await Promise.race([featureChecked.promise,unexpectedCompletion]);phaseBeforeRelease=phase;
  // On the unfixed path, leave the real script held through document replacement
  // so the original cancellation is observed rather than racing its response.
  if(phaseBeforeRelease==='guide-counterpart-return')await Promise.race([scriptCancelled.promise,operation]);
  release.resolve();await operation;await controller;
  const script=evidence.requestFailures.find(request=>new URL(request.url).pathname===chunk);
  const result={evidence,consoleErrors,events,phaseBeforeRelease,executed,script};
  return result;
 } finally {
  release.resolve();if(operation)await operation.catch(()=>{});if(controller)await controller.catch(()=>{});
  const directory=path.join(process.cwd(),'.reports/browser');mkdirSync(directory,{recursive:true});writeFileSync(path.join(directory,`site-guide-counterpart-webkit-${failAsset?'http-error':'late-success'}.json`),JSON.stringify({purpose:'Real HTTP/DOM regression; not sealed-product qualification',failAsset,phaseBeforeRelease,executed,evidence,events},null,2)+'\n');
 }
 } finally {
  release.resolve();
  try{await context?.close();}finally{try{await browser?.close();}finally{server.closeAllConnections();if(server.listening)await new Promise<void>((resolve,reject)=>server.close(error=>error?reject(error):resolve()));}}
 }
}
test('WebKit guide return waits for a real enabled script begun after lifecycle idle',{timeout:60_000},async()=>{
 const result=await guideProbe(false);
 assert.equal(result.phaseBeforeRelease,'guide-counterpart-select','The harness must not start its intentional return while the late script is still held');
 assert.equal(result.executed,true);assert.equal(result.script,undefined);
 const finished=result.events.findIndex(event=>event.event==='finished'),returned=result.events.findIndex(event=>event.event==='phase'&&event.phase==='guide-counterpart-return');assert.ok(finished>=0&&returned>finished,'The actual script must finish before the intentional return');
 assert.equal(result.events[returned]!.executed,true,'The delayed script must execute before leaving the counterpart');
 assertSiteBrowserErrors(result.evidence,result.consoleErrors);
});
test('WebKit real late-script HTTP failure remains fatal after the guide barrier',{timeout:60_000},async()=>{
 const result=await guideProbe(true);assert.equal(result.phaseBeforeRelease,'guide-counterpart-select');
 assert.equal(result.executed,false);assert.ok(result.evidence.errors.some(error=>error.includes('HTTP 503')));
 assert.throws(()=>assertSiteBrowserErrors(result.evidence,result.consoleErrors),/Browser reported errors/);
});
