import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {verifySourceDocument} from './verify-source-document.ts';
import {sourceFixture} from './fixtures/source-verification.ts';

test('source verification preserves all original Markdown nodes, order and parent DOM lifetime', t => {
  const fixture = sourceFixture();
  t.after(() => fixture.close());
  const context = fixture.context();
  const cached = context.readPage('/document-0/');
  assert.equal(context.parsed.get('/document-0/'), cached);
  for (const source of fixture.documents) verifySourceDocument(source, context);
  assert.equal(context.parsed.size, 0);
  for (let index = 0; index < fixture.documents.length; index++) {
    assert.match(fixture.html(index), new RegExp(`A bounded paragraph for ${index}`));
  }
});

test('source verification rejects altered text, missing markers and wrong document boundaries', t => {
  const fixture = sourceFixture(1);
  t.after(() => fixture.close());
  const original = fixture.html(0);
  const source = fixture.documents[0]!;
  for (const changed of [
    original.replace('A bounded paragraph for 0.', 'Changed public paragraph.'),
    original.replace(/ data-source-node="[^"]+"/u, ''),
    original.replace('data-source-document="sources/document-0.md"', 'data-source-document="another.md"'),
  ]) {
    fixture.writeHtml(0, changed);
    assert.throws(() => verifySourceDocument(source, fixture.context()));
  }
});

test('source verification refuses incomplete or reordered source scope and malformed anchor mappings', t => {
  const fixture = sourceFixture(1);
  t.after(() => fixture.close());
  const source = fixture.documents[0]!;
  const context = fixture.context();
  const page = context.manifest.pages[0]!;
  assert.throws(() => verifySourceDocument(source, {...context, manifest: {pages: [{...page, sourceNodeIds: page.sourceNodeIds.slice(1)}]}}), /Source coverage mismatch/u);
  const original = fixture.html(0);
  fixture.writeHtml(0, original.replace(/(<p[^>]+data-source-node="[^"]+"[^>]*>[\s\S]*?<\/p>)([\s\S]*?<ul[\s\S]*?<\/ul>)/u, '$2$1'));
  assert.throws(() => verifySourceDocument(source, fixture.context()), /order|block|marker/iu);
  fixture.writeHtml(0, original);
  fs.writeFileSync(path.join(fixture.app, '.generated', source.inventoryPath), JSON.stringify({anchorTargets: {invalid: 42}}));
  assert.throws(() => verifySourceDocument(source, fixture.context()), /Invalid source anchor mapping/u);
});
