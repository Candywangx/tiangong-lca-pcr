import { middleware } from '../../../middleware.ts';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { CHAPTER_ALIASES, PUBLISHED_CHAPTER_ALIASES, readingTarget, aliasesForTarget, compatibilityDestination, rewriteChapterRequest } from '../lib/chapter-compatibility.ts';
import {renderMarkdown,sha256} from './markdown.ts';
import {canonicalReadingParts} from './reading-routes.ts';
import {providerRuntimeSourceRoot} from './provider-runtime.ts';

test('published chapter routes restore exact query and fragment in both languages', () => {
  assert.equal(PUBLISHED_CHAPTER_ALIASES.length,342);assert.equal(CHAPTER_ALIASES.length,527);
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
  assert.equal(new Set(CHAPTER_ALIASES.map(row=>row.from)).size,527);
  for(const row of CHAPTER_ALIASES){assert.ok(row.to.startsWith(row.from.split('/chapters/')[0]!+'/'));assert.ok(row.anchor);assert.ok(!CHAPTER_ALIASES.some(other=>other.from===row.to));}
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
 const receipt=JSON.parse(fs.readFileSync(path.join(root,'docs/reviews/cpc54-pr35-reading-routes/current-content.json'),'utf8')) as {
  documents:{sourcePath:string;sourceSha256:string}[];
 };
 assert.equal(receipt.documents.length,126);
 assert.equal(new Set(receipt.documents.map(row=>path.dirname(row.sourcePath))).size,63);
 const aliases=new Map(CHAPTER_ALIASES.map(row=>[row.from,row]));
 let retained=0,affected=0;
 for(const {sourcePath,sourceSha256} of receipt.documents){
  assert.match(sourcePath,/^library\/pcrs\/constructions-and-construction-services\/construction-services\/[a-z0-9-]+\/pcr\.(en-US|zh-CN)\.md$/);
  const source=fs.readFileSync(path.join(root,sourcePath));assert.equal(sha256(source),sourceSha256);
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
