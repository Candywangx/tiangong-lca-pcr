import assert from 'node:assert/strict';
import {before, after, test} from 'node:test';
import {createServer} from 'node:http';
import {createHash} from 'node:crypto';
import {mkdtempSync, mkdirSync, readFileSync, realpathSync, rmSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {chromium, firefox, webkit} from 'playwright';
import type {BrowserType, Page} from 'playwright';
import {compileViewerBrowserAssets} from '../../packages/pcr-viewer/scripts/browser-assets.ts';

const root=process.cwd();
let assets:string;
before(()=>{assets=mkdtempSync(path.join(realpathSync(tmpdir()),'pcr-viewer-browser-'));compileViewerBrowserAssets({root,outputRoot:assets});});
after(()=>{if(assets)rmSync(assets,{recursive:true,force:true});});
const ref=(label:string)=>`sha256:${createHash('sha256').update(label).digest('hex')}`;
const manifestRef=ref('browser snapshot'),uiRef=ref('browser UI');
const route={routing_schema_version:1,kind:'viewer-snapshot-route',snapshot_id:'browser-snapshot',manifest_ref:manifestRef,manifest_schema_version:1,ui_bundle_ref:uiRef,ui_bundle_id:uiRef,ui_bundle_url:`ui/${uiRef.slice(7)}/`};
const catalog=[
 {id:'pcr.fixture.wheat',path:'library/pcrs/fixture/wheat',status:'candidate',content_maturity:'authored_methodology',version:'0.1.0',title:{'en-US':'Wheat seed','zh-CN':'小麦种子'},search_text:'wheat seed 小麦种子 01111',readiness:{status:'review_required'},classification_refs:[{system:'CPC',version:'3.0',code:'01111'}]},
 {id:'pcr.fixture.fish',path:'library/pcrs/fixture/fish',status:'candidate',content_maturity:'authored_methodology',version:'0.1.0',title:{'en-US':'Farmed fish','zh-CN':'养殖鱼'},search_text:'farmed fish 04412',readiness:{status:'review_required'},classification_refs:[]},
];
async function fixture() {
 const requests:string[]=[];
 const data=new Map<string,unknown>();
 const add=(url:string,value:unknown)=>data.set('/'+url,value);
 const object=(id:string,kind:string,entry:unknown)=>add(`objects/${ref(id).slice(7)}.json`,{schema_version:1,object_kind:kind,entry});
 const manifest={schema_version:1,kind:'viewer-snapshot-manifest',snapshot_id:'browser-snapshot',sequence:1,catalog_scope:'material',counts:{pcr:2},capture:{validation_state:'validated',ui_bundle_ref:uiRef},refs:{catalog_root:ref('catalog root'),pcr_entries:Object.fromEntries(catalog.map(p=>[p.id,ref(p.id+' detail')]))}};
 add('active.json',{schema_version:1,kind:'viewer-active',snapshot_id:manifest.snapshot_id,sequence:1,manifest_ref:manifestRef,ui_bundle_ref:uiRef,snapshot_url:`routes/${manifestRef.slice(7)}.json`});
 add(`manifests/${manifestRef.slice(7)}.json`,manifest);
 add(`routes/${manifestRef.slice(7)}.json`,route);
 add('history-head.json',{kind:'viewer-history-head',latest_sequence:1,page_ref:ref('history')});
 object('history','history_page',{entries:[{sequence:1,manifest_ref:manifestRef}],previous_page_ref:null});
 add('provenance/browser-snapshot.json',{landing_state:'landed',landed_at:'2026-10-04T00:00:00Z'});
 object('catalog root','catalog_root',{shards:{aa:ref('catalog shard')}});
 object('catalog shard','catalog_shard',{prefix:'aa',entries:catalog.map(p=>({id:p.id,object_ref:ref(p.id+' catalog')}))});
 for(const p of catalog){
  object(p.id+' catalog','catalog_entry',p);
  object(p.id+' detail','pcr_detail',{...p,markdown:{'en-US':`# ${p.title['en-US']}\n\n- <script>window.__unsafe = true</script>\n\n| Field | Value |\n| --- | --- |\n| Unit | kg |`,'zh-CN':`# ${p.title['zh-CN']}\n\n中文方法学正文。`},guidance:{reference_flow:{reference_unit:'kg',required_qualifiers:['kind']},process_map:[{id:'production'}],data_sources:[{id:'source-1',type:'official',used_for:'Scope boundary',reference:'Fixture evidence'}]}});
 }
 let releaseSlow:()=>void=()=>{};let slow=false;
 const slowGate=new Promise<void>(resolve=>{releaseSlow=resolve;});
 const server=createServer(async(req,res)=>{
  const url=new URL(req.url??'/', 'http://localhost');requests.push(url.pathname);
  if(slow && url.pathname===`/objects/${ref('pcr.fixture.wheat detail').slice(7)}.json`)await slowGate;
  const asset=url.pathname.split('/').at(-1)||'index.html';
  if(['index.html','app.js','viewer-core.js','styles.css'].includes(asset)){
   const content=readFileSync(path.join(asset.endsWith('.js')?assets:path.join(root,'packages/pcr-viewer/static'),asset));
   res.writeHead(200,{'content-type':asset.endsWith('.js')?'text/javascript; charset=utf-8':asset.endsWith('.css')?'text/css':'text/html; charset=utf-8'});res.end(content);return;
  }
  if(!data.has(url.pathname)){res.writeHead(404);res.end('not found');return;}
  res.writeHead(200,{'content-type':'application/json'});res.end(JSON.stringify(data.get(url.pathname)));
 });
 await new Promise<void>((resolve,reject)=>{server.once('error',reject);server.listen(0,'127.0.0.1',resolve);});
 const address=server.address();assert.ok(address && typeof address==='object');
 return {origin:`http://127.0.0.1:${address.port}`,requests,slowWheat(){slow=true;},releaseSlow,async close(){releaseSlow();server.closeAllConnections();await new Promise<void>((resolve,reject)=>server.close(error=>error?reject(error):resolve()));}};
}
async function selected(page:Page,title:string){await page.locator('.viewer-header h2').filter({hasText:title}).waitFor();}

for(const [name,engine] of [['chromium',chromium],['firefox',firefox],['webkit',webkit]] as const satisfies readonly (readonly [string,BrowserType])[]){
 test(`compiled Viewer works in ${name}: lazy detail, language, keyboard tabs and stable snapshots`,{timeout:60_000},async t=>{
  const service=await fixture();t.after(()=>service.close());
  const browser=await engine.launch({headless:true});t.after(()=>browser.close());
  const context=await browser.newContext({viewport:{width:1280,height:900}});const page=await context.newPage();
  const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
  try {
  await page.goto(service.origin);await page.waitForLoadState('networkidle');
  assert.equal(await page.getByRole('button',{name:/Wheat seed/}).count(),1);
  assert.ok(service.requests.every(url=>!url.includes(ref('pcr.fixture.wheat detail').slice(7))));
  await page.getByLabel('Literal metadata filter').fill('01111');
  assert.equal(await page.getByRole('button',{name:/Farmed fish/}).count(),0);
  await page.getByRole('button',{name:/Wheat seed/}).click();await selected(page,'Wheat seed');
  assert.equal(await page.evaluate(()=>Reflect.get(window,'__unsafe')),undefined);
  assert.match(await page.locator('.markdown-body').innerText(),/<script>/u);
  await page.getByLabel('PCR language').selectOption('zh-CN');await selected(page,'小麦种子');
  assert.match(await page.locator('.markdown-body').innerText(),/中文方法学正文/u);
  await page.getByRole('tab',{name:'Markdown',exact:true}).focus();await page.keyboard.press('ArrowRight');
  assert.equal(await page.getByRole('tab',{name:'Guidance',exact:true}).getAttribute('aria-selected'),'true');
  assert.match(await page.getByRole('tabpanel').innerText(),/reference_unit/u);
  await page.keyboard.press('End');assert.equal(await page.getByRole('tab',{name:'Sources',exact:true}).getAttribute('aria-selected'),'true');
  assert.match(await page.getByRole('tabpanel').innerText(),/Fixture evidence/u);
  await page.getByRole('button',{name:'View snapshot history'}).click();await page.locator('#snapshot-history option').waitFor({state:'attached'});
  assert.equal(await page.locator('#snapshot-history option').count(),1);
  await page.getByRole('link',{name:'Permanent snapshot link'}).click();await page.waitForLoadState('networkidle');
  assert.equal(new URL(page.url()).searchParams.get('manifest'),manifestRef);
  await page.getByRole('button',{name:/Wheat seed/}).click();await selected(page,'Wheat seed');
  await page.setViewportSize({width:390,height:844});
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1));
  assert.deepEqual(errors,[]);
  } finally {
   const evidence=path.join(root,'.reports/browser');mkdirSync(evidence,{recursive:true});
   await page.screenshot({path:path.join(evidence,`viewer-${name}.png`),fullPage:true});
   writeFileSync(path.join(evidence,`viewer-${name}.json`),JSON.stringify({browser:name,url:page.url(),errors,requests:service.requests},null,2)+'\n');
  }
 });
}

test('compiled Viewer ignores a late detail response after the selection changes',{timeout:45_000},async t=>{
 const service=await fixture();service.slowWheat();t.after(()=>service.close());
 const browser=await chromium.launch({headless:true});t.after(()=>browser.close());const page=await browser.newPage();
 await page.goto(service.origin);await page.waitForLoadState('networkidle');
 await page.getByRole('button',{name:/Wheat seed/}).click();
 await page.getByRole('button',{name:/Farmed fish/}).click();await selected(page,'Farmed fish');
 service.releaseSlow();await page.waitForLoadState('networkidle');
 assert.equal(await page.locator('.viewer-header h2').innerText(),'Farmed fish');
});
