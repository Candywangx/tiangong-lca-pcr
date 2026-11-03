import {createHash} from 'node:crypto';
import {pathToFileURL} from 'node:url';
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { htmlAnchors, verifyPublishedChapterAnchors, PACKED_CHAPTERS_PATH, providerRuntimeSourceRoot, createProviderRuntime, verifyProviderRuntimeSource, verifyProviderRuntimeExport, PROVIDER_RUNTIME_FILE, PROVIDER_RUNTIME_PATHS } from './provider-runtime.ts';
const source='a'.repeat(40);
function fixture(){const root=fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(),'pcr-provider-proof-')));const out=path.join(root,'out');fs.mkdirSync(out);return{root,out,cleanup:()=>fs.rmSync(root,{recursive:true,force:true})};}
function write(root:string,file:string,value:string){const target=path.join(root,file);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,value);}
function install(root:string){for(const file of PROVIDER_RUNTIME_PATHS)write(root,file,file.endsWith('.json')?JSON.stringify({schemaVersion:1,entries:[{from:'/en/docs/pcr/a/b/c/chapters/old/',to:'/en/docs/pcr/a/b/c/',anchor:'section'}]}):'export {};\n');}
test('provider source absence is explicit, complete exact closure is required and tampering fails',()=>{const f=fixture();try{
 assert.equal(createProviderRuntime(f.root,source),undefined);install(f.root);const proof=createProviderRuntime(f.root,source)!;
 assert.equal(proof.routes.length,1);verifyProviderRuntimeSource(f.root,proof,source);
 write(f.root,'middleware.ts','// substituted\n');assert.throws(()=>verifyProviderRuntimeSource(f.root,proof,source));
 fs.unlinkSync(path.join(f.root,'middleware.ts'));assert.throws(()=>createProviderRuntime(f.root,source));
}finally{f.cleanup();}});
test('sealed compatibility proof checks source, safe routes, physical target and actual default anchors',()=>{const f=fixture();try{
 install(f.root);const proof=createProviderRuntime(f.root,source)!;write(f.out,PROVIDER_RUNTIME_FILE,JSON.stringify(proof));write(f.out,'en/docs/pcr/a/b/c/index.html','<main><h2 id="section">body</h2></main>');
 assert.deepEqual(verifyProviderRuntimeExport(f.out,source,proof),proof);
 assert.throws(()=>verifyProviderRuntimeExport(f.out,'b'.repeat(40),proof));
 write(f.out,'en/docs/pcr/a/b/c/index.html','<h2 id="other">body</h2>');assert.throws(()=>verifyProviderRuntimeExport(f.out,source,proof));
 const changed=structuredClone(proof);changed.routes[0]!.to='https://example.com/';write(f.out,PROVIDER_RUNTIME_FILE,JSON.stringify(changed));assert.throws(()=>verifyProviderRuntimeExport(f.out,source));
 fs.unlinkSync(path.join(f.out,PROVIDER_RUNTIME_FILE));assert.throws(()=>verifyProviderRuntimeExport(f.out,source,proof));
}finally{f.cleanup();}});

test('published anchor verification cannot mistake a data-id attribute for a real HTML id',()=>{const f=fixture();try{
 install(f.root);const proof=createProviderRuntime(f.root,source)!;write(f.out,PROVIDER_RUNTIME_FILE,JSON.stringify(proof));write(f.out,'en/docs/pcr/a/b/c/index.html','<main><h2 data-id="section">wrong anchor</h2></main>');
 assert.throws(()=>verifyProviderRuntimeExport(f.out,source,proof));
}finally{f.cleanup();}});

test('generated anchor scanner counts real first id attributes and decodes emitted references exactly once',()=>{
 const html='<!DOCTYPE html><html><head><title>Title</title></head><body><main id="main"><h2 title="a > b" ID="section" id="ignored">Body</h2><span id=unquoted></span><p id="pcr-中文😀&amp;&quot;&apos;&lt;&gt;&#65;&#x1F600;&#X10FFFF;">Text</p><a id="&amp;#65;">Literal</a><template id="template-owner"><h2 id="inert"></h2></template></main></body></html>';
 assert.deepEqual([...htmlAnchors(html)],['main','section','unquoted','pcr-中文😀&"\'<>A😀'+String.fromCodePoint(0x10ffff),'&#65;','template-owner']);
});

const apparentAnchors=[
 `<h2 title=" id='section'">Body</h2>`,
 `<h2 title=' id="section"'>Body</h2>`,
 '<h2 data-id="section" aria-label="id=section">Body</h2>',
 '<!-- <h2 id="section">Comment</h2> -->',
 '<script>self.__next_f.push([1,\'<h2 id="section">Serialized body</h2>\']);</script>',
 '<style>.example::after { content: \'<h2 id="section">\'; }</style>',
 '<title><h2 id="section">Title text</title>',
 '<textarea><h2 id="section">Textarea text</textarea>',
 '<noscript><h2 id="section">Scripting-dependent body</h2></noscript>',
 '<template><h2 id="section">Inert</h2><template><h3 id="nested"></h3></template></template>',
 '<template><script>"</template><h2 id=section>"</script></template>',
 '<svg><foreignObject><h2 id="section">Foreign content excluded</h2></foreignObject></svg>',
 '<h2 id="first" ID="section">Duplicate attribute</h2>',
];
for(const [index,html] of apparentAnchors.entries())test('apparent anchor '+index+' cannot satisfy export or published-source ledger verification',()=>{const f=fixture();try{
 assert(!htmlAnchors(html).has('section'));
 install(f.root);const proof=createProviderRuntime(f.root,source)!;write(f.out,PROVIDER_RUNTIME_FILE,JSON.stringify(proof));write(f.out,'en/docs/pcr/a/b/c/index.html',html);
 assert.throws(()=>verifyProviderRuntimeExport(f.out,source,proof),/Published default chapter anchor missing/);
 write(f.root,'packages/pcr-docs/compatibility/published-chapter-anchors.json',JSON.stringify({schemaVersion:1,baseline:'fixture',requirements:[{from:proof.routes[0]!.from,anchors:['section']}]}));
 assert.throws(()=>verifyPublishedChapterAnchors(f.root,f.out,proof),/Published chapter anchor missing/);
}finally{f.cleanup();}});

test('realistic Next serialized payloads and SVG icons cannot create or hide ordinary chapter anchors',()=>{
 const payload=JSON.stringify([1,'1:["$","h2",null,{"id":"serialized-only","children":"Chapter"}]\n2:<h2 id="also-serialized">Text</h2>']).replaceAll('<','\\u003c');
 const html='<!DOCTYPE html><html><head><style>.icon{content:"<h2 id=css-only>"}</style></head><body><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M 1 1"/><title>Icon</title></svg><h2 id="section">Real chapter</h2><script>self.__next_f.push('+payload+')</script><h3 id="after-script">More</h3></body></html>';
 assert.deepEqual([...htmlAnchors(html)],['section','after-script']);
 assert.deepEqual([...htmlAnchors('<script>"</script-not-a-tag><h2 id=not-real>"</script><h2 id="real"></h2>')],['real']);
 assert.deepEqual([...htmlAnchors('<p>İ source text</p><H2 ID="pcr-İ">Real</H2><SCRIPT>"İ <h2 id=not-real>"</SCRIPT><h3 id="after"></h3>')],['pcr-İ','after']);
});

test('unsupported malformed markup and ambiguous numeric references fail closed',()=>{
 for(const html of ['<h2 id="section>','<h2 id="section"','<!-- <h2 id="section">','<h2 id="section"></h3>','<h2 id="section"id="other"></h2>','<h2 id="section"></h2><script>unterminated','<script><!--<script></script><h2 id="section"></h2></script>','<table><td id="section"></td></table>','<select><h2 id="section"></h2></select>','<body><head id="section"></head></body>','<![CDATA[<h2 id="section">]]>'])assert.throws(()=>htmlAnchors(html),/generated|Generated|Unsupported|Unterminated|Unbalanced|Unclosed|Malformed|Missing/u,html);
 for(const entity of ['&#0;','&#xD800;','&#1114112;','&#x80;','&#13;','&#x;','&#12oops;','&#65','&copy;','&AMP','&madeup;'])assert.throws(()=>htmlAnchors('<h2 id="'+entity+'"></h2>'),/anchor character reference/,entity);
 assert.throws(()=>htmlAnchors('<div>'.repeat(1001)+'</div>'.repeat(1001)),/nesting exceeds/);
 assert.throws(()=>htmlAnchors('x'.repeat(25_000_000)),/Invalid generated anchor HTML/);
});

test('declarative shadow templates cannot provide an ordinary document anchor',()=>{const f=fixture();try{
 install(f.root);const proof=createProviderRuntime(f.root,source)!;write(f.out,PROVIDER_RUNTIME_FILE,JSON.stringify(proof));
 write(f.root,'packages/pcr-docs/compatibility/published-chapter-anchors.json',JSON.stringify({schemaVersion:1,baseline:'fixture',requirements:[{from:proof.routes[0]!.from,anchors:['section']}]}));
 for(const attribute of ['shadowrootmode="open"','shadowrootmode="closed"','SHADOWROOTMODE="OPEN"','shadowrootmode="unsupported"']){
  const html='<div><template '+attribute+' id="section"><h2 id="shadow-content">Shadow</h2></template></div>';
  assert.throws(()=>htmlAnchors(html),/Unsupported generated declarative shadow root/);
  write(f.out,'en/docs/pcr/a/b/c/index.html',html);
  assert.throws(()=>verifyProviderRuntimeExport(f.out,source,proof),/Unsupported generated declarative shadow root/);
  assert.throws(()=>verifyPublishedChapterAnchors(f.root,f.out,proof),/Unsupported generated declarative shadow root/);
 }
}finally{f.cleanup();}});

test('source lookup handles emitted paths and stops at the nearest checkout boundary',()=>{const f=fixture();try{
 write(f.root,'.git','gitdir: fixture-marker\n');const emitted='dist/test-engineering/scripts/engineering/space name.js';write(f.root,emitted,'export {};\n');
 assert.equal(providerRuntimeSourceRoot(pathToFileURL(path.join(f.root,emitted))),f.root);
 const nested=path.join(f.root,'nested');write(nested,'.git','gitdir: nested-fixture\n');write(nested,emitted,'export {};\n');assert.equal(providerRuntimeSourceRoot(pathToFileURL(path.join(nested,emitted))),nested);
 fs.unlinkSync(path.join(f.root,'.git'));assert.throws(()=>providerRuntimeSourceRoot(pathToFileURL(path.join(f.root,emitted))),/Cannot locate authored provider source repository/);
}finally{f.cleanup();}});

test('only real document anchors qualify; raw, inert, foreign and consumed shadow targets fail',()=>{
 const real='<h2 id="section">Body</h2>';
 assert(htmlAnchors(real).has('section'));
 for(const html of ['<!-- '+real+' -->','<script>'+JSON.stringify(real)+'</script>',"<div title='"+real+"'></div>",'<template>'+real+'</template>','<svg><foreignObject>'+real+'</foreignObject></svg>'])assert(!htmlAnchors(html).has('section'));
 for(const mode of ['open','closed','unsupported'])assert.throws(()=>htmlAnchors('<div><template shadowrootmode="'+mode+'" id="section">'+real+'</template></div>'),/declarative shadow root/);
 assert.deepEqual([...htmlAnchors('<h2 id="first" ID="second">Text</h2>')],['first']);
 assert.throws(()=>htmlAnchors('<h2 id="section"></h3>'));
});

test('retained reading routes bind exact source bytes and all anchors without changing publication evidence',()=>{const f=fixture();try{
 install(f.root);
 const sourcePath='library/pcrs/a/b/c/pcr.en-US.md';write(f.root,sourcePath,'# Original\n');
 const sourceSha256='sha256:'+createHash('sha256').update('# Original\n').digest('hex');
 const entry={from:'/en/docs/pcr/a/b/c/chapters/packed/',to:'/en/docs/pcr/a/b/c/',anchor:'section'};
 const document={sourcePath,sourceSha256,entries:[entry]};
 const mapping={schemaVersion:1,baselineCommit:source,documents:[document]};write(f.root,PACKED_CHAPTERS_PATH,JSON.stringify(mapping));
 write(f.root,'packages/pcr-docs/compatibility/packed-chapter-anchors.json',JSON.stringify({...mapping,documents:[{...document,entries:[{...entry,anchors:['section','second']}]}]}));
 write(f.root,'packages/pcr-docs/compatibility/published-chapter-anchors.json',JSON.stringify({schemaVersion:1,baseline:'published fixture',requirements:[{from:'/en/docs/pcr/a/b/c/chapters/old/',anchors:['section']}]}));
 const proof=createProviderRuntime(f.root,source)!;assert.equal(proof.files.length,4);assert.equal(proof.routes.length,2);
 write(f.out,PROVIDER_RUNTIME_FILE,JSON.stringify(proof));write(f.out,'en/docs/pcr/a/b/c/index.html','<main><h2 id="section">Body</h2><p id="second">Second</p></main>');
 verifyProviderRuntimeExport(f.out,source,proof);verifyPublishedChapterAnchors(f.root,f.out,proof);
 write(f.out,'en/docs/pcr/a/b/c/index.html','<h2 id="section">Body</h2><!-- <p id="second"></p> -->');
 assert.throws(()=>verifyPublishedChapterAnchors(f.root,f.out,proof),/Retained reading anchor missing/);
 write(f.root,sourcePath,'# Changed\n');assert.throws(()=>createProviderRuntime(f.root,source),/Packed chapter source changed/);
}finally{f.cleanup();}});
