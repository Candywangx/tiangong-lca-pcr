import test from 'node:test';
import assert from 'node:assert/strict';
import {createServer, type ServerResponse} from 'node:http';
import {mkdtempSync,rmSync} from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {webkit} from 'playwright';
import {CHAPTER_ALIASES} from '../../packages/pcr-docs/lib/chapter-compatibility.ts';
import {checkPublishedChapters} from '../../scripts/engineering/site-browser.ts';

test('published chapter qualifier waits for an in-flight catalog request before history navigation',async()=>{
 const rows=['en','zh'].map(language=>CHAPTER_ALIASES.find(row=>row.from.startsWith('/'+language+'/'))!);
 let held:ServerResponse|undefined,used=false,arrive:()=>void=()=>{};const arrived=new Promise<void>(resolve=>{arrive=resolve;});
 const server=createServer((request,response)=>{
  const url=new URL(request.url??'/','http://localhost');
  if(url.pathname==='/held-resource'){if(!used){used=true;held=response;arrive();return;}response.end('done');return;}
  const language=url.pathname.startsWith('/zh/')?'zh':'en';const row=rows.find(value=>value.from.startsWith('/'+language+'/'))!;
  response.setHeader('content-type','text/html; charset=utf-8');
  if(url.pathname==='/'+language+'/docs/pcr/'){response.end('<html lang="'+(language==='zh'?'zh-CN':'en-US')+'"><h1>Catalog</h1><script>fetch("/held-resource").then(response=>response.text())</script></html>');return;}
  const source=url.pathname===row.from;const normalize=source?'<script>history.replaceState(null,"",'+JSON.stringify(row.to)+'+location.search+(location.hash||'+JSON.stringify('#'+encodeURIComponent(row.anchor))+'))</script>':'';
  response.end('<html lang="'+(language==='zh'?'zh-CN':'en-US')+'"><a href="/'+language+'/docs/pcr/">Catalog</a><h2 id="'+row.anchor+'">Published chapter</h2>'+normalize+'</html>');
 });
 const report=mkdtempSync(path.join(os.tmpdir(),'pcr-chapter-wait-'));let browser:Awaited<ReturnType<typeof webkit.launch>>|undefined;
 try{
  await new Promise<void>(resolve=>server.listen(0,'127.0.0.1',resolve));const address=server.address();assert(address&&typeof address==='object');const origin='http://127.0.0.1:'+address.port;
  browser=await webkit.launch();let failure:unknown;const operation=checkPublishedChapters(browser,'webkit',origin,{schemaVersion:1,sourceCommit:'a'.repeat(40),files:[],routes:rows},report).catch(error=>{failure=error;});
  await Promise.race([arrived,new Promise<never>((_,reject)=>setTimeout(()=>reject(new Error('Controlled resource did not start')),15_000))]);
  await new Promise(resolve=>setTimeout(resolve,750));
  const stayed=browser.contexts().some(context=>context.pages().some(page=>page.url()===origin+'/en/docs/pcr/'));
  held!.end('released');await operation;
  assert.ok(stayed,'The actual qualifier must remain on the catalog while its request is held');assert.ifError(failure);
 }finally{held?.end();await browser?.close();server.closeAllConnections();await new Promise<void>(resolve=>server.close(()=>resolve()));rmSync(report,{recursive:true,force:true});}
});
