import { middleware } from '../../../middleware.ts';
import test from 'node:test';
import assert from 'node:assert/strict';
import published from '../compatibility/published-chapters.json' with {type:'json'};
import fs from 'node:fs';
import path from 'node:path';
import { CHAPTER_ALIASES, PUBLISHED_CHAPTER_ALIASES, readingTarget, aliasesForTarget, compatibilityDestination, rewriteChapterRequest } from '../lib/chapter-compatibility.ts';
import {renderMarkdown,sha256} from './markdown.ts';
import packedAnchors from '../compatibility/packed-chapter-anchors.json' with {type:'json'};
import {canonicalReadingParts} from './reading-routes.ts';
import {providerRuntimeSourceRoot,createProviderRuntime} from './provider-runtime.ts';
import {readPcrCatalogPage} from '../../pcr-core/src/index.ts';

test('all retained packed documents preserve current logical chapter owners and historical anchors',()=>{
 const root=providerRuntimeSourceRoot(import.meta.url);
 const aliases=new Map(CHAPTER_ALIASES.map(row=>[row.from,row]));
 let documents=0,retained=0;
 for(const document of packedAnchors.documents){
  const locale=document.sourcePath.endsWith('en-US.md')?'en':'zh';
  const base='/'+locale+'/docs/pcr/'+document.sourcePath.split('/').slice(2,-1).join('/')+'/';
  documents++;
  const source=fs.readFileSync(path.join(root,document.sourcePath));
  assert.equal(document.sourceSha256,sha256(source));
  const chapter=(slug:string)=>base+'chapters/'+encodeURIComponent(slug)+'/';
  const rendered=renderMarkdown(source.toString('utf8'),document.sourcePath,{packAdjacent:true});
  const parts=canonicalReadingParts(rendered.parts,chapter,aliases);
  const urls=parts.map((part,index)=>index?chapter(part.slug):base);
  const owners=new Map(parts.flatMap((part,index)=>part.anchors.map(anchor=>[anchor,urls[index]!] as const)));
  for(const entry of document.entries){assert(entry.anchors.every(anchor=>owners.get(anchor)===entry.to),entry.from+': historical anchor ownership changed');}
  for(const [index,part] of rendered.logicalParts.entries()){
   const from=index?chapter(part.slug):base;
   if(urls.includes(from))continue;
   const route=aliases.get(from);assert(route,document.sourcePath+': missing current route '+from);
   assert(part.anchors.every(anchor=>owners.get(anchor)===route.to));
   assert(document.entries.some(entry=>entry.from===from&&entry.anchors.every(anchor=>owners.get(anchor)===route.to)));
   retained++;
  }
 }
 assert.equal(documents,packedAnchors.documents.length);assert(retained>=31);
});

test('published chapter routes restore exact query and fragment in both languages', () => {
  assert.equal(PUBLISHED_CHAPTER_ALIASES.length,648);assert.equal(CHAPTER_ALIASES.length,879);
  for (const language of ['en','zh']) {
    const entry=CHAPTER_ALIASES.find(row=>row.from.startsWith('/'+language+'/'))!;
    const query='?q=%E7%AB%A0%E8%8A%82&q=a+b&raw=%2f&empty=';
    for (const hash of ['', '#pcr-7-%E5%88%86%E9%85%8D', '#bad%escape']) {
      const input='https://pcr.tiangong.earth'+entry.from+query+hash;
      const wanted=entry.to+query+(hash||'#'+encodeURIComponent(entry.anchor));
      assert.equal(compatibilityDestination(input,aliasesForTarget(entry.to)),wanted);
      assert.equal(compatibilityDestination('https://pcr.tiangong.earth'+wanted,aliasesForTarget(entry.to)),undefined);
      assert.equal(rewriteChapterRequest(new Request(input)), 'https://pcr.tiangong.earth'+entry.to+query);
    }
    assert.equal(rewriteChapterRequest(new Request('https://pcr.tiangong.earth'+entry.from.slice(0,-1))), 'https://pcr.tiangong.earth'+entry.to);
    assert.equal(rewriteChapterRequest(new Request('https://pcr.tiangong.earth'+entry.from,{method:'HEAD'})), 'https://pcr.tiangong.earth'+entry.to);
    assert.equal(rewriteChapterRequest(new Request('https://pcr.tiangong.earth'+entry.from,{method:'POST'})),undefined);
  }
});
test('only exact old document paths can rewrite, without source mutation or open redirects',()=>{
  const entry=CHAPTER_ALIASES[0]!;
  for(const pathname of ['/','/en/','/unknown/','/generated/raw/a','/_next/static/a.js',entry.from+'index.txt',entry.from+'__next._full.txt',entry.from.replace('/chapters/','/%2fchapters/'),entry.to])
    assert.equal(rewriteChapterRequest(new Request('https://example.org'+pathname)),undefined);
  assert.equal(compatibilityDestination('https://example.org'+entry.from,[]),undefined);
  assert.equal(new Set(CHAPTER_ALIASES.map(row=>row.from)).size,879);
  assert.equal(published.identityMoves.length,306);
  for(const row of CHAPTER_ALIASES){const move=published.identityMoves.find(item=>row.from===item.from||row.from.startsWith(item.from+'chapters/'));assert.ok(row.to.startsWith(move?.to??row.from.split('/chapters/')[0]!+'/'));assert.ok(row.anchor);assert.ok(!CHAPTER_ALIASES.some(other=>other.from===row.to));}
});

test('actual EdgeOne entry point delegates exact aliases and leaves other requests untouched', async()=>{
 const alias=CHAPTER_ALIASES[0]!;const origin='https://example.org';
 for(const [url,method] of [[alias.from+'?q=1','GET'],[alias.from,'HEAD'],['/_next/static/a.js','GET'],[alias.from,'POST']] as const){
  let rewritten:string|undefined;let passed=false;
  const response=await middleware({request:new Request(origin+url,{method}),rewrite(target){rewritten=target;return new Response('rewritten');},next(){passed=true;return new Response('original');}});
  assert.equal(await response.text(),passed?'original':'rewritten');
  assert.equal(rewritten,rewriteChapterRequest(new Request(origin+url,{method})));
 }
});

test('equivalent percent encodings retain published Unicode chapter access without decoding separators',()=>{
 const row=CHAPTER_ALIASES.find(item=>/%[A-F0-9]{2}/u.test(item.from))!;assert.ok(row);
 const lower=row.from.replace(/%[A-F0-9]{2}/gu,part=>part.toLowerCase());
 assert.equal(rewriteChapterRequest(new Request('https://example.org'+lower+'?q=%2f')), 'https://example.org'+row.to+'?q=%2f');
 assert.equal(compatibilityDestination('https://example.org'+lower,aliasesForTarget(row.to)),row.to+'#'+encodeURIComponent(row.anchor));
 assert.equal(rewriteChapterRequest(new Request('https://example.org'+row.from.replace('/chapters/','/%2Fchapters/'))),undefined);
});

test('logical search hits preserve identity/ranking data while client navigation uses an existing reading target',()=>{
 const row=CHAPTER_ALIASES.find(item=>!PUBLISHED_CHAPTER_ALIASES.some(p=>p.from===item.from))!;
 assert(row);assert.equal(readingTarget(row.from+'?q=a+b&x=%2f'),row.to+'?q=a+b&x=%2f#'+encodeURIComponent(row.anchor));
 assert.equal(readingTarget(row.from+'?q=1#explicit'),row.to+'?q=1#explicit');
 assert.equal(readingTarget('/unknown/?q=1#explicit'),'/unknown/?q=1#explicit');
 assert.equal(readingTarget('https://elsewhere.example'+row.from),'https://elsewhere.example'+row.from);
 assert.equal(readingTarget('//elsewhere.example'+row.from),'//elsewhere.example'+row.from);
});

test('all CPC 54 source chapters retain their actual reading owners after adjacent packing',()=>{
 const root=providerRuntimeSourceRoot(import.meta.url);
 const {items:records,totalCount}=readPcrCatalogPage({root,scope:'material',pathPrefix:'constructions-and-construction-services/construction-services',limit:100});
 assert.equal(totalCount,63);
 assert.equal(records.length,63);
 assert.equal(new Set(records.map(record=>record.id)).size,63);
 // Source-owned route registries still enforce exact current Markdown hashes.
 assert(createProviderRuntime(root,'0'.repeat(40)));
 const sourcePaths=records.flatMap(record=>{
  return ['en-US','zh-CN'].map(language=>record.path+'/pcr.'+language+'.md');
 });
 assert.equal(sourcePaths.length,126);
 const aliases=new Map(CHAPTER_ALIASES.map(row=>[row.from,row]));
 let retained=0,affected=0;
 for(const sourcePath of sourcePaths){
  assert.match(sourcePath,/^library\/pcrs\/constructions-and-construction-services\/construction-services\/[a-z0-9-]+\/pcr\.(en-US|zh-CN)\.md$/);
  const source=fs.readFileSync(path.join(root,sourcePath));
  const locale=sourcePath.endsWith('en-US.md')?'en':'zh';
  const base='/'+locale+'/docs/pcr/'+sourcePath.split('/').slice(2,-1).join('/')+'/';
  const chapter=(slug:string)=>base+'chapters/'+encodeURIComponent(slug)+'/';
  const rendered=renderMarkdown(source.toString('utf8'),sourcePath,{packAdjacent:true});
  const parts=canonicalReadingParts(rendered.parts,chapter,aliases);
  const urls=parts.map((part,index)=>index?chapter(part.slug):base);
  const owners=new Map(parts.flatMap((part,index)=>part.anchors.map(anchor=>[anchor,urls[index]!] as const)));
  let count=0;
  for(const [index,part] of rendered.logicalParts.entries()){
   const from=index?chapter(part.slug):base;
   if(urls.includes(from))continue;
   const route=aliases.get(from);assert(route,sourcePath+': missing route '+from);
   assert(urls.includes(route.to));assert(part.anchors.includes(route.anchor));
   assert(part.anchors.every(anchor=>owners.get(anchor)===route.to),sourcePath+': split or missing anchor owner');
   assert.equal(readingTarget(from),route.to+'#'+encodeURIComponent(route.anchor));count++;
  }
  retained+=count;if(count)affected++;
 }
 assert.equal(affected,21);assert.equal(retained,23);
});

test('all CPC 68/69 chapters retain exact reading owners, source hashes and anchor evidence',()=>{
 const root=providerRuntimeSourceRoot(import.meta.url);
 const domain='distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a';
 const records=[['postal-and-courier-services',8],['electricity-gas-and-water-distribution-on-own-account',6]] as const;
 const aliases=new Map(CHAPTER_ALIASES.map(row=>[row.from,row]));
 const evidence=new Map(packedAnchors.documents.map(document=>[document.sourcePath,document]));
 assert(createProviderRuntime(root,'0'.repeat(40)));
 let documents=0,retained=0;
 for(const [subdomain,count] of records){
  const page=readPcrCatalogPage({root,scope:'material',pathPrefix:domain+'/'+subdomain,limit:100});
  assert.equal(page.totalCount,count);assert.equal(page.items.length,count);
  assert.equal(new Set(page.items.map(record=>record.id)).size,count);
  for(const record of page.items)for(const [language,locale] of [['en-US','en'],['zh-CN','zh']] as const){
   documents++;
   const sourcePath=record.path+'/pcr.'+language+'.md';
   const source=fs.readFileSync(path.join(root,sourcePath));
   const base='/'+locale+'/docs/pcr/'+sourcePath.split('/').slice(2,-1).join('/')+'/';
   const chapter=(slug:string)=>base+'chapters/'+encodeURIComponent(slug)+'/';
   const rendered=renderMarkdown(source.toString('utf8'),sourcePath,{packAdjacent:true});
   const parts=canonicalReadingParts(rendered.parts,chapter,aliases);
   const urls=parts.map((part,index)=>index?chapter(part.slug):base);
   const owners=new Map(parts.flatMap((part,index)=>part.anchors.map(anchor=>[anchor,urls[index]!] as const)));
   const document=evidence.get(sourcePath);
   const expected=[];
   for(const [index,part] of rendered.logicalParts.entries()){
    const from=index?chapter(part.slug):base;
    if(urls.includes(from))continue;
    const route=aliases.get(from);assert(route,sourcePath+': missing route '+from);
    assert(urls.includes(route.to));assert(part.anchors.includes(route.anchor));
    assert(part.anchors.every(anchor=>owners.get(anchor)===route.to),sourcePath+': split or missing anchor owner');
    expected.push({...route,anchors:part.anchors});retained++;
    const query='?q=%E7%AB%A0%E8%8A%82&raw=%2f';
    assert.equal(readingTarget(from+query),route.to+query+'#'+encodeURIComponent(route.anchor));
    assert.equal(rewriteChapterRequest(new Request('https://example.org'+from+query)), 'https://example.org'+route.to+query);
    for(const anchor of part.anchors){
     const fragment='#'+encodeURIComponent(anchor);
     assert.equal(compatibilityDestination('https://example.org'+from+query+fragment,aliasesForTarget(route.to)),route.to+query+fragment);
    }
   }
   expected.sort((a,b)=>a.from<b.from?-1:a.from>b.from?1:0);
   assert.deepEqual(document?.entries??[],expected,sourcePath+': incomplete anchor ledger');
   if(document)assert.equal(document.sourceSha256,sha256(source));
   assert.equal([...aliases.keys()].filter(from=>from.startsWith(base)).length,expected.length,sourcePath+': stale route');
  }
 }
 assert.equal(documents,28);
 assert.equal(retained,14);
});
