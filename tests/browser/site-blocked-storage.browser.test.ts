import assert from 'node:assert/strict';
import {test} from 'node:test';
import {createServer} from 'node:http';
import {chromium,firefox,webkit} from 'playwright';
import type {Browser} from 'playwright';
import {checkBlockedStorageLanguage} from '../../scripts/engineering/site-browser.ts';

// A real HTTP fetch begins when the selector opens, after initial lifecycle idle.
// Hold it across the old harness's click; the fixed harness must finish it first.
async function probe(engine:'chromium'|'firefox'|'webkit',failResponse:boolean,signal:AbortSignal) {
 let release:()=>void=()=>{},started:()=>void=()=>{};
 const held=new Promise<void>(resolve=>{release=resolve;});
 const requested=new Promise<void>(resolve=>{started=resolve;});
 let finished=false,selectedBeforeFinish=false,selectionCount=0;
 const server=createServer(async(request,response)=>{
  const pathname=new URL(request.url??'/','http://localhost').pathname;
  if(pathname==='/held-prefetch'){
   started();await held;response.writeHead(failResponse?503:200,{'content-type':'text/plain'});response.end('prefetch');return;
  }
  if(pathname==='/finished'){finished=true;response.writeHead(204);response.end();return;}
  if(pathname==='/zh/'){selectionCount++;selectedBeforeFinish||=!finished;}
  if(pathname==='/favicon.ico'){response.writeHead(204);response.end();return;}
  if(!['/','/en/','/zh/'].includes(pathname)){response.writeHead(404);response.end();return;}
  const zh=pathname==='/zh/';
  response.writeHead(200,{'content-type':'text/html; charset=utf-8'});
  response.end(`<!doctype html><html lang="${zh?'zh-CN':'en-US'}"><body><h1>Language fixture</h1>
   <button data-pcr-language-trigger onclick="openSelector()">Language</button>
   <button id="select" hidden onclick="location.assign('/zh/')">中文</button>
   <script>
    if(location.pathname==='/')history.replaceState(null,'','/en/');
    function openSelector(){
     try{localStorage.getItem('probe');throw Error('Storage should be blocked');}
     catch(error){if(error.message!=='Storage blocked for qualification')throw error;}
     document.getElementById('select').hidden=false;
     fetch('/held-prefetch',{headers:{'next-router-prefetch':'1'}}).then(async response=>{
      if(!response.ok)throw Error('Actual HTTP '+response.status+' in selector request');
      await response.text();await fetch('/finished');
     });
    }
   </script></body></html>`);
 });
 await new Promise<void>(resolve=>server.listen(0,'127.0.0.1',resolve));
 const address=server.address();assert.ok(address&&typeof address==='object');
 let browser:Browser|undefined;
 try {
  browser=await {chromium,firefox,webkit}[engine].launch({headless:true});
  const ownedBrowser=browser;
  signal.addEventListener('abort',()=>{release();void ownedBrowser.close();},{once:true});
  const evidence:Parameters<typeof checkBlockedStorageLanguage>[4]={engine,viewport:'desktop',checks:[],ignoredPrefetchAborts:[],requestFailures:[],prefetchUrls:[]};
  const operation=checkBlockedStorageLanguage(browser,`http://127.0.0.1:${address.port}`,{width:1440,height:1000},{en:'en-US',zh:'zh-CN'},evidence);
  const outcome=operation.then(()=>({error:null}),(error:unknown)=>({error}));
  await Promise.race([requested,outcome.then(()=>{throw Error('Probe ended before the held request started');})]);
  // The response is deliberately later than both Playwright's click and the
  // previous lifecycle idle; this is fixture latency, not a production sleep.
  await new Promise<void>(resolve=>setTimeout(resolve,750));release();
  if(selectedBeforeFinish&&!failResponse){
   await browser.close();
   return {result:{error:new Error('Document replaced before response completion')},evidence,selectedBeforeFinish,selectionCount,finished};
  }
  const result=await outcome;
  return {result,evidence,selectedBeforeFinish,selectionCount,finished};
 }finally{
  release();await browser?.close();server.closeAllConnections();
  await new Promise<void>((resolve,reject)=>server.close(error=>error?reject(error):resolve()));
 }
}

for(const engine of ['chromium','firefox','webkit'] as const){
test(engine+' denied-storage switch waits for selector-started requests before document replacement',{timeout:30_000},async(t)=>{
 const value=await probe(engine,false,t.signal);
 assert.equal(value.selectedBeforeFinish,false,'The language switch must not cancel work begun by opening its selector');
 assert.equal(value.result.error,null);assert.equal(value.finished,true);
 assert.equal(value.selectionCount,2,'Both language selection and explicit reload are still exercised');
 assert.deepEqual(value.evidence.requestFailures,[]);
 assert.equal(value.evidence.checks.length,1);
});

test(engine+' denied-storage switch retains a genuine selector request error',{timeout:30_000},async(t)=>{
 const value=await probe(engine,true,t.signal);
 assert.ok(value.result.error instanceof Error);
 assert.match(value.result.error.message,/Actual HTTP 503 in selector request/);
 assert.equal(value.evidence.checks.length,0);
});
}
