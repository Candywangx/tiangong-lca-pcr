import assert from 'node:assert/strict';
import {test} from 'node:test';
import {createServer} from 'node:http';
import {mkdirSync,writeFileSync,readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {webkit} from 'playwright';
import type {Browser,BrowserContext} from 'playwright';
import {checkBlockedStorageLanguagePreference} from '../../scripts/engineering/site-browser.ts';

function deferred(){let resolve:()=>void=()=>{};const promise=new Promise<void>(done=>{resolve=done;});return{promise,resolve};}
async function blockedStorageProbe(failTree:boolean){
 const treeStarted=deferred(),releaseTree=deferred(),menuReady=deferred(),navigationStarted=deferred();
 const events:{event:string;phase:string;url?:string;at:number}[]=[];let phase='initial';
 const record=(event:string,url?:string)=>events.push({event,phase,...(url===undefined?{}:{url}),at:Date.now()});
 const server=createServer(async(request,response)=>{
  const url=new URL(request.url??'/','http://localhost'),pathname=url.pathname;
  if(pathname==='/en/__next._tree.txt'){record('tree-start',pathname);treeStarted.resolve();await releaseTree.promise;response.writeHead(failTree?503:200,{'content-type':'text/plain'});response.end('tree');record('tree-response',pathname);return;}
  if(pathname==='/en/__next.fixture.__PAGE__.txt'){record('page-segment-response',pathname);response.writeHead(200,{'content-type':'text/plain'});response.end('page');return;}
  if(pathname==='/favicon.ico'){response.writeHead(204);response.end();return;}
  if(pathname!=='/'&&pathname!=='/en/'&&pathname!=='/zh/'){response.writeHead(404);response.end();return;}
  const zh=pathname!=='/en/';if(pathname==='/zh/'){record('chinese-document',pathname);navigationStarted.resolve();}
  response.writeHead(200,{'content-type':'text/html; charset=utf-8'});
  response.end(`<!doctype html><html lang="${zh?'zh-CN':'en-US'}"><body><h1>${zh?'中文首页':'English home'}</h1>
<button data-pcr-language-trigger onclick="document.getElementById('choices').hidden=false;startLateWork()">Language</button>
<div id="choices" hidden><button onclick="location.assign('/zh/')">中文</button></div>
<script>let started=false;function startLateWork(){if(started)return;started=true;
fetch('/en/__next._tree.txt',{headers:{'next-router-prefetch':'1','next-router-segment-prefetch':'/_tree',rsc:'1'}})
.then(response=>{if(!response.ok)throw new Error('Actual late tree HTTP '+response.status);return response.text()})
.then(()=>fetch('/en/__next.fixture.__PAGE__.txt',{headers:{'next-router-prefetch':'1',rsc:'1'}}))
.then(response=>{if(!response.ok)throw new Error('Actual late page HTTP '+response.status);return response.text()})
.then(()=>{document.documentElement.dataset.lateSegment='complete'});}</script></body></html>`);
 });
 await new Promise<void>((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve);});const address=server.address();assert.ok(address&&typeof address==='object');const origin=`http://127.0.0.1:${address.port}`;
 let browser:Browser|undefined,context:BrowserContext|undefined,operation:Promise<void>|undefined,controller:Promise<void>|undefined,phaseBeforeRelease='',failure:unknown;
 const evidence:Parameters<typeof checkBlockedStorageLanguagePreference>[4]={engine:'webkit',viewport:'desktop',checks:[],ignoredPrefetchAborts:[],requestFailures:[],prefetchUrls:[]};
 try{
  browser=await webkit.launch({headless:true});const newContext=browser.newContext.bind(browser);
  browser.newContext=async options=>{context=await newContext(options);context.on('page',page=>{page.on('load',()=>{if(new URL(page.url()).pathname!=='/')return;controller=(async()=>{await page.waitForLoadState('networkidle');record('initial-lifecycle-idle');await page.evaluate(()=>{history.replaceState(history.state,'','/en/');document.documentElement.lang='en-US';document.querySelector('h1')!.textContent='English home';});})();});page.on('requestfinished',request=>{if(request.url().includes('__next.'))record('browser-request-finished',request.url());});page.on('pageerror',error=>record('pageerror',error.message));});return context;};
  operation=checkBlockedStorageLanguagePreference(browser,origin,{width:1440,height:1000},{en:'en-US',zh:'zh-CN'},evidence,value=>{phase=value;record('phase');if(value==='blocked-storage-menu-ready')menuReady.resolve();});
  const unexpected=operation.then(()=>{throw new Error('Qualification completed before controlled late work');});
  await Promise.race([treeStarted.promise,unexpected]);await Promise.race([menuReady.promise,unexpected]);phaseBeforeRelease=phase;
  // On the pre-fix path, retain the real pending response until the premature
  // native navigation is observed. The fixed path stays at menu-ready.
  if(phaseBeforeRelease==='blocked-storage-navigate')await Promise.race([navigationStarted.promise,operation]);
  releaseTree.resolve();try{await operation;await controller;}catch(error){failure=error;}
  return{phaseBeforeRelease,evidence,events,failure};
 }finally{
  releaseTree.resolve();if(operation)await operation.catch(()=>{});if(controller)await controller.catch(()=>{});await context?.close();await browser?.close();server.closeAllConnections();await new Promise<void>(resolve=>server.close(()=>resolve()));
  const report=path.join(process.cwd(),'.reports/browser');mkdirSync(report,{recursive:true});writeFileSync(path.join(report,`blocked-storage-webkit-${failTree?'http-error':'late-success'}.json`),JSON.stringify({purpose:'Controlled real HTTP/DOM regression, not sealed-product qualification',source:{gitHead:execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),toolSha256:createHash('sha256').update(readFileSync(path.resolve('scripts/engineering/site-browser.ts'))).digest('hex'),testSha256:createHash('sha256').update(readFileSync(fileURLToPath(import.meta.url))).digest('hex'),runId:process.env.GITHUB_RUN_ID??null,attempt:process.env.GITHUB_RUN_ATTEMPT??null,sealedProduct:null},failTree,phaseBeforeRelease,evidence,events,failure:failure instanceof Error?{message:failure.message,stack:failure.stack}:failure},null,2)+'\n');
 }
}
test('WebKit blocked storage waits for late tree and PAGE work before intentional locale navigation',{timeout:60_000},async()=>{
 const result=await blockedStorageProbe(false);assert.equal(result.phaseBeforeRelease,'blocked-storage-menu-ready','The qualifier must wait before choosing a language while menu-triggered work is pending');assert.equal(result.failure,undefined);assert.equal(result.evidence.checks.length,1);
 const initialIdle=result.events.findIndex(e=>e.event==='initial-lifecycle-idle'),started=result.events.findIndex(e=>e.event==='tree-start');assert.ok(initialIdle>=0&&started>initialIdle,'Real delayed work begins after the original document lifecycle idle');
 const finished=result.events.findIndex(e=>e.event==='browser-request-finished'&&e.url?.includes('__next.fixture.__PAGE__.txt')),navigate=result.events.findIndex(e=>e.event==='phase'&&e.phase==='blocked-storage-navigate');assert.ok(finished>=0&&navigate>finished,'The dependent PAGE response must complete before native navigation');assert.deepEqual(result.evidence.requestFailures,[]);
});
test('WebKit blocked storage retains a real late HTTP error as fatal',{timeout:60_000},async()=>{
 const result=await blockedStorageProbe(true);assert.equal(result.phaseBeforeRelease,'blocked-storage-menu-ready');assert.ok(result.failure instanceof Error);assert.match(result.failure.message,/Actual late tree HTTP 503/);assert.equal(result.evidence.checks.length,0);
});
