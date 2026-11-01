import { middleware } from '../../../middleware.ts';
import test from 'node:test';
import assert from 'node:assert/strict';
import { CHAPTER_ALIASES, aliasesForTarget, compatibilityDestination, rewriteChapterRequest } from '../lib/chapter-compatibility.ts';

test('published chapter routes restore exact query and fragment in both languages', () => {
  assert.equal(CHAPTER_ALIASES.length,342);
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
  assert.equal(new Set(CHAPTER_ALIASES.map(row=>row.from)).size,342);
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
