import assert from 'node:assert/strict';
import test from 'node:test';
import { Index } from 'flexsearch';
import { searchTerms } from '../lib/search-terms.ts';
import { encodeSearchEntries, decodeSearchEntries } from '../lib/search-wire.ts';

test('sparse score slots restore exact real engine exports, order, IDs and multilingual matches', async () => {
  const index = new Index({ tokenize: 'strict', encode: (value: unknown) => searchTerms(value, 'en-US') });
  const texts = ['wheat "seed" café 珊瑚 pcr_rule_boundary', 'prefix scope and lots of applicable conditions wheat', 'different scope for water'];
  texts.forEach((text, id) => index.add(id * 10, text));
  const original: Record<string, unknown[]> = {};
  await index.export((key, value) => { const parsed: unknown = JSON.parse(value); assert.ok(Array.isArray(parsed)); original[key] = parsed; });
  const wire = JSON.parse(JSON.stringify(encodeSearchEntries(original))) as { entries: unknown; sparseMaps: unknown };
  const restored = decodeSearchEntries(wire.entries, wire.sparseMaps);
  assert.deepEqual(Object.keys(restored), Object.keys(original));
  for (const key of Object.keys(original)) assert.equal(JSON.stringify(restored[key]), JSON.stringify(original[key]));
  const loaded = new Index({ tokenize: 'strict', encode: (value: unknown) => searchTerms(value, 'en-US') });
  for (const [key, value] of Object.entries(restored)) loaded.import(key, JSON.stringify(value));
  for (const query of ['wheat', 'café', '珊瑚', 'pcr_rule_boundary', 'water', 'missing'])
    assert.deepEqual(loaded.search(query, { limit: 30 }), index.search(query, { limit: 30 }));
});

test('large sparse maps shrink without losing null positions, empty postings, long IDs or hostile-looking strings', () => {
  const map = Array.from({ length: 4000 }, (_, id) => [id === 0 ? '__proto__' : id === 1 ? 'constructor' : `term-${id}`, [null, null, null, null, null, null, null, [], [id, 'constructor', '__proto__', '文献\\"\n']]]);
  const original = { '1.reg': [0, 'constructor'], '1.map': map };
  const wire = encodeSearchEntries(original); assert.deepEqual(wire.sparseMaps, ['1.map']);
  assert.ok(Buffer.byteLength(JSON.stringify(wire)) < Buffer.byteLength(JSON.stringify({ entries: original })) * 0.85);
  assert.equal(JSON.stringify(decodeSearchEntries(wire.entries, wire.sparseMaps)), JSON.stringify(original));
  assert.equal(JSON.stringify(original['1.map'][0]), JSON.stringify(map[0]), 'Encoder must not mutate input');
});

test('dense and unknown map shapes stay native and empty exports stay empty', () => {
  for (const entry of [[], [['term', [[1]]]], [['term', Array.from({ length: 10 }, () => null)]], [[7, []]], [['term', [true]]], [['term', [[{}]]]], [['term', [[-1]]]], [['term', [undefined]]]]) {
    const original = { '1.map': entry, 'other': [] };
    const wire = encodeSearchEntries(original); assert.deepEqual(wire.sparseMaps, []);
    assert.equal(wire.entries['1.map'], entry); assert.deepEqual(Object.keys(wire.entries), ['1.map', 'other']);
  }
  assert.throws(() => encodeSearchEntries({ '1.map': null as unknown as unknown[] }), /Invalid serialized/);
  const slots = [['term', [null, null, null, null, null, null, null, null, [1]]]];
  for (const key of ['0.map', '00.map', '01.map', 'foreign.map'])
    assert.deepEqual(encodeSearchEntries({ [key]: slots }).sparseMaps, []);
});

test('v3 rejects malformed metadata and bounded score-slot tuples before allocation', () => {
  const valid = ['term', 9, [[8, [1, 'string-id']]]];
  const entries = { '1.map': [valid], '1.reg': [1] };
  for (const metadata of [undefined, null, {}, [1], ['missing.map'], ['1.reg'], ['__proto__'], ['1.map', '1.map']])
    assert.throws(() => decodeSearchEntries(entries, metadata), /Invalid serialized/);
  const invalidTerms = [null, [], ['term', 9], [7, 9, []], ['term', -1, []], ['term', 10, []], ['term', 1e9, []], ['term', 1.5, []], ['term', 9, {}], ['term', 9, [[-1, [1]]]], ['term', 9, [[9, [1]]]], ['term', 9, [[1.5, [1]]]], ['term', 9, [[8, [1]], [8, [2]]]], ['term', 9, [[8, [1]], [7, [2]]]], ['term', 9, [null]], ['term', 9, [[8]]], ['term', 9, [[8, [null]]]], ['term', 9, [[8, [{}]]]], ['term', 9, [[8, [1.5]]]]];
  for (const term of invalidTerms) assert.throws(() => decodeSearchEntries({ '1.map': [term] }, ['1.map']), /Invalid serialized/);
  assert.throws(() => decodeSearchEntries({ '1.map': [['term', 9, [[8, [-1]]]]] }, ['1.map']), /Invalid serialized/);
  for (const key of ['0.map', '00.map', '01.map', 'foreign.map'])
    assert.throws(() => decodeSearchEntries({ [key]: [valid] }, [key]), /Invalid serialized/);
  for (const value of [null, [], { '1.map': 7 }]) assert.throws(() => decodeSearchEntries(value, []), /Invalid serialized/);
  assert.deepEqual(decodeSearchEntries({ '1.map': [['empty', 0, []]] }, ['1.map'])['1.map'], [['empty', []]]);
  assert.deepEqual(decodeSearchEntries(entries, ['1.map'])['1.reg'], [1]);
});

test('v4 flat score slots shrink v3 while restoring exact engine exports and multilingual results', async () => {
  for (const language of ['en-US', 'zh-CN']) {
    const options = {tokenize: 'strict' as const, encode: (value: unknown) => searchTerms(value, language)};
    const index = new Index(options), loaded = new Index(options);
    const documents = Array.from({length: 100}, (_, id) => `Wheat seed 小麦种子 pcr_rule_boundary ${Array.from({length: 30}, (_, token) => `term_${id}_${token}`).join(' ')}`);
    documents.forEach((text, id) => index.add(id, text));
    const original: Record<string, unknown[]> = {};
    await index.export((key, value) => { const parsed: unknown = JSON.parse(value); assert.ok(Array.isArray(parsed)); original[key] = parsed; });
    const v3 = encodeSearchEntries(original, 3), v4 = encodeSearchEntries(original, 4);
    const wire: unknown = JSON.parse(JSON.stringify(v4));
    assert.ok(wire !== null && typeof wire === 'object' && 'entries' in wire && 'sparseMaps' in wire);
    const restored = decodeSearchEntries(wire.entries, wire.sparseMaps, 4);
    assert.deepEqual(Object.keys(restored), Object.keys(original));
    for (const [key, value] of Object.entries(restored)) {
      assert.equal(JSON.stringify(value), JSON.stringify(original[key]), 'Every engine import string must round-trip exactly');
      loaded.import(key, JSON.stringify(value));
    }
    for (const query of [...new Set(documents.flatMap(text => searchTerms(text, language))), 'wheat seed', '小麦种子', 'unmatched'])
      assert.deepEqual(loaded.search(query, {limit: 30}), index.search(query, {limit: 30}), query);
    assert.ok(Buffer.byteLength(JSON.stringify(v4)) < Buffer.byteLength(JSON.stringify(v3)), 'Flat v4 must improve the existing nested v3');
    assert.throws(() => decodeSearchEntries(v4.entries, v4.sparseMaps, 3), /Invalid serialized/);
    assert.throws(() => decodeSearchEntries(v3.entries, v3.sparseMaps, 4), /Invalid serialized/);
  }
});

test('v4 preserves empty and trailing score slots, posting order, string IDs and native fallback', () => {
  const original = {'1.map': [['__proto__', [null, [], null, null, null, null, null, null, ['constructor', 0, '文献']]], ['empty', []]], '1.reg': [0, 'constructor'], 'foreign.map': [null]};
  const wire = encodeSearchEntries(original, 4);
  assert.deepEqual(wire.sparseMaps, ['1.map']);
  assert.equal(JSON.stringify(decodeSearchEntries(wire.entries, wire.sparseMaps, 4)), JSON.stringify(original));
  assert.equal(JSON.stringify(original['1.map'][0]), '["__proto__",[null,[],null,null,null,null,null,null,["constructor",0,"文献"]]]', 'Encoding must not mutate input');
  assert.deepEqual(decodeSearchEntries({'1.map': [['empty', 0]]}, ['1.map'], 4)['1.map'], [['empty', []]]);
});

test('v4 rejects malformed flat tuples and sparse metadata without arbitrary score allocation', () => {
  const invalidTerms = [null, [], ['term'], ['term', 9, []], [7, 9], ['term', -1], ['term', 10], ['term', 1e9], ['term', 1.5], ['term', 9, -1, [1]], ['term', 9, 9, [1]], ['term', 9, 1.5, [1]], ['term', 9, 8, [1], 8, [2]], ['term', 9, 8, [1], 7, [2]], ['term', 9, 8, null], ['term', 9, 8, [null]], ['term', 9, 8, [-1]], ['term', 9, 8, [1.5]]];
  for (const term of invalidTerms) assert.throws(() => decodeSearchEntries({'1.map': [term]}, ['1.map'], 4), /Invalid serialized/);
  for (const metadata of [undefined, null, {}, [1], ['missing.map'], ['1.reg'], ['__proto__'], ['1.map', '1.map']])
    assert.throws(() => decodeSearchEntries({'1.map': [['term', 9, 8, [1]]], '1.reg': [1]}, metadata, 4), /Invalid serialized/);
});
