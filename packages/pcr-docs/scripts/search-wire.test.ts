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

test('v4 score masks shrink v3 while restoring exact engine exports and multilingual results', async () => {
  for (const language of ['en-US', 'zh-CN']) {
    const options = {tokenize: 'strict' as const, encode: (value: unknown) => searchTerms(value, language)};
    const index = new Index(options), loaded = new Index(options);
    const documents = Array.from({length: 100}, (_, id) => `Wheat seed 小麦种子 pcr_rule_boundary ${Array.from({length: 30}, (_, token) => `term_${id}_${token}`).join(' ')}`);
    documents.forEach((text, id) => index.add(id, text));
    const original: Record<string, unknown[]> = {};
    await index.export((key, value) => { const parsed: unknown = JSON.parse(value); assert.ok(Array.isArray(parsed)); original[key] = parsed; });
    const v3 = encodeSearchEntries(original, 3), v4 = encodeSearchEntries(original, 4);
    const wire: unknown = JSON.parse(JSON.stringify(v4));
    assert.ok(wire !== null && typeof wire === 'object' && 'entries' in wire && 'sparseMaps' in wire && 'scoreMasks' in wire && 'postingDeltas' in wire && 'columnarMaps' in wire);
    const restored = decodeSearchEntries(wire.entries, wire.sparseMaps, 4, wire.scoreMasks, wire.postingDeltas, wire.columnarMaps);
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
  assert.equal(JSON.stringify(decodeSearchEntries(wire.entries, wire.sparseMaps, 4, wire.scoreMasks, wire.postingDeltas, wire.columnarMaps)), JSON.stringify(original));
  assert.equal(JSON.stringify(original['1.map'][0]), '["__proto__",[null,[],null,null,null,null,null,null,["constructor",0,"文献"]]]', 'Encoding must not mutate input');
  assert.deepEqual(decodeSearchEntries({'1.map': [['empty', 0]]}, ['1.map'], 4)['1.map'], [['empty', []]]);
});

test('v4 rejects malformed flat tuples and sparse metadata without arbitrary score allocation', () => {
  const invalidTerms = [null, [], ['term'], ['term', 9, []], [7, 9], ['term', -1], ['term', 10], ['term', 1e9], ['term', 1.5], ['term', 9, -1, [1]], ['term', 9, 9, [1]], ['term', 9, 1.5, [1]], ['term', 9, 8, [1], 8, [2]], ['term', 9, 8, [1], 7, [2]], ['term', 9, 8, null], ['term', 9, 8, [null]], ['term', 9, 8, [-1]], ['term', 9, 8, [1.5]]];
  for (const term of invalidTerms) assert.throws(() => decodeSearchEntries({'1.map': [term]}, ['1.map'], 4), /Invalid serialized/);
  for (const metadata of [undefined, null, {}, [1], ['missing.map'], ['1.reg'], ['__proto__'], ['1.map', '1.map']])
    assert.throws(() => decodeSearchEntries({'1.map': [['term', 9, 8, [1]]], '1.reg': [1]}, metadata, 4), /Invalid serialized/);
});

test('v4 masks and signed deltas retain out-of-order IDs, repeats, mixed strings and maximum safe IDs', () => {
  const original = {'1.map': [['empty', []], ['term', [null, null, null, null, null, null, [], null, [100, 2, 2, 0, Number.MAX_SAFE_INTEGER, 3]]], ['mixed', [null, null, null, null, null, null, null, null, ['id', 12, 0]]]]};
  const wire = encodeSearchEntries(original, 4);
  assert.deepEqual(wire.sparseMaps, ['1.map']);
  assert.equal(wire.scoreMasks, true); assert.equal(wire.postingDeltas, true);
  assert.equal(JSON.stringify(decodeSearchEntries(wire.entries, wire.sparseMaps, 4, true, true, wire.columnarMaps)), JSON.stringify(original));
  const flat = {'1.map': [['legacy', 9, 8, [100, 2, 2]]]};
  assert.deepEqual(decodeSearchEntries(flat, ['1.map'], 4)['1.map'], [['legacy', [null, null, null, null, null, null, null, null, [100, 2, 2]]]]);
  assert.throws(() => decodeSearchEntries({'1.map': [['mask', 4864, [100, 2]]]}, ['1.map'], 4, true), /Invalid serialized/);
});

test('v4 rejects malformed mask headers, posting counts, delta overflow and foreign encoding flags', () => {
  for (const term of [null, [], ['x'], ['x', -1], ['x', 5120], ['x', 1e9], ['x', 1.5], ['x', 1], ['x', 514], ['x', 4864], ['x', 4864, [1], [2]], ['x', 4864, null], ['x', 4864, [1.5]], ['x', 4864, [-1]], ['x', 4864, [Number.MAX_SAFE_INTEGER, 1]], ['x', 4864, ['id', -1]]])
    assert.throws(() => decodeSearchEntries({'1.map': [term]}, ['1.map'], 4, true, true), /Invalid serialized/);
  for (const flag of [false, null, 1, 'true', {}]) {
    assert.throws(() => decodeSearchEntries({}, [], 4, flag), /Invalid serialized/);
    assert.throws(() => decodeSearchEntries({}, [], 4, true, flag), /Invalid serialized/);
  }
  assert.throws(() => decodeSearchEntries({}, [], 3, true), /Invalid serialized/);
  assert.throws(() => decodeSearchEntries({}, [], 4, undefined, true), /Invalid serialized/);
});

test('v4 columnar maps restore exact term order and reject malformed column lengths or postings', () => {
  const map = Array.from({length: 1000}, (_, id) => [`term-${id}`, [null, null, null, null, null, null, null, null, [id]]]);
  const original = {'1.reg': [0, 1], '1.map': map};
  const wire = encodeSearchEntries(original, 4);
  assert.deepEqual(wire.columnarMaps, ['1.map']);
  assert.equal(JSON.stringify(decodeSearchEntries(wire.entries, wire.sparseMaps, 4, true, true, wire.columnarMaps)), JSON.stringify(original));
  const columns = wire.entries['1.map']!;
  for (const invalid of [
    [columns[0], (columns[1] as unknown[]).slice(1), columns[2]],
    [columns[0], columns[1], (columns[2] as unknown[]).slice(1)],
    [columns[0], columns[1], [...columns[2] as unknown[], [1]]],
    [[...columns[0] as unknown[], 7], [...columns[1] as unknown[], 4864], [...columns[2] as unknown[], [1]]],
    [columns[0], [(columns[1] as unknown[])[0], -1, ...(columns[1] as unknown[]).slice(2)], columns[2]],
  ]) assert.throws(() => decodeSearchEntries({'1.map': invalid}, ['1.map'], 4, true, true, ['1.map']), /Invalid serialized/);
  for (const metadata of [['1.reg'], ['1.map', '1.map'], null, true])
    assert.throws(() => decodeSearchEntries(wire.entries, wire.sparseMaps, 4, true, true, metadata), /Invalid serialized/);
  assert.throws(() => decodeSearchEntries(wire.entries, wire.sparseMaps, 3, true, true, wire.columnarMaps), /Invalid serialized/);
  assert.deepEqual(decodeSearchEntries({'1.map': [['old', 4864, [2]]]}, ['1.map'], 4, true, true)['1.map'],
    [['old', [null, null, null, null, null, null, null, null, [2]]]], 'previous v4 wire remains readable');
});

async function termReferenceEncoder() {
  const module = await import('../lib/search-wire.ts');
  const encode: unknown = Reflect.get(module, 'encodeSearchTermReferences');
  assert.equal(typeof encode, 'function', 'v5 shared dictionary encoder must be available');
  return encode as (wire: ReturnType<typeof encodeSearchEntries>, terms: readonly string[]) => ReturnType<typeof encodeSearchEntries> & {termReferences: true; postingBases?: Record<string, number>};
}
interface DecoderWire {entries: unknown; sparseMaps: unknown; scoreMasks?: unknown; postingDeltas?: unknown; columnarMaps?: unknown; termReferences?: unknown; postingBases?: unknown}
const decodeV5 = (wire: DecoderWire, terms: unknown, version = 5) =>
  Reflect.apply(decodeSearchEntries, undefined, [wire.entries, wire.sparseMaps, version, wire.scoreMasks, wire.postingDeltas, wire.columnarMaps, wire.termReferences, terms, wire.postingBases]) as Record<string, unknown[]>;

test('v5 dictionary references and numeric posting bases preserve exact real exports and multilingual query results', async () => {
  const encode = await termReferenceEncoder();
  for (const language of ['en-US', 'zh-CN']) {
    const options = {tokenize: 'strict' as const, resolution: 9, encode: (value: unknown) => searchTerms(value, language)};
    const index = new Index(options), loaded = new Index(options);
    const texts = Array.from({length: 50}, (_, n) => `Wheat café 小麦种子 玻璃 安全 pcr_rule_boundary term_${n}`);
    texts.forEach((text, id) => index.add(id + 10000, text));
    const original: Record<string, unknown[]> = {};
    await index.export((key, value) => {const parsed: unknown = JSON.parse(value); assert.ok(Array.isArray(parsed)); original[key] = parsed;});
    const v4 = encodeSearchEntries(original, 4);
    const terms = [...new Set(Object.entries(original).filter(([key]) => v4.sparseMaps.includes(key)).flatMap(([, rows]) => rows.map(row => (row as [string])[0])))].reverse();
    const wire = encode(v4, terms), restored = decodeV5(JSON.parse(JSON.stringify(wire)) as typeof wire, terms);
    assert.equal(wire.termReferences, true); assert.ok(wire.postingBases && Object.values(wire.postingBases).every(base => base >= 10000));
    assert.equal(JSON.stringify(restored), JSON.stringify(original));
    for (const [key, value] of Object.entries(restored)) loaded.import(key, JSON.stringify(value));
    for (const query of [...new Set(texts.flatMap(text => searchTerms(text, language))), 'wheat seed', '小麦种子', 'notpresent'])
      assert.deepEqual(loaded.search(query, {limit: 30}), index.search(query, {limit: 30}), query);
    assert.equal(JSON.stringify(decodeSearchEntries(v4.entries, v4.sparseMaps, 4, true, true, v4.columnarMaps)), JSON.stringify(original), 'v5 encoding must not mutate v4 input');
  }
});

test('v5 handles sparse rows, columnar maps, empty dictionaries, hostile terms, mixed and maximum safe IDs', async () => {
  const encode = await termReferenceEncoder();
  const max = Number.MAX_SAFE_INTEGER;
  const entries = {'1.map': [['__proto__', 4864, [100, -98, 0, 1]], ['constructor', 4864, ['id', 2]], ['文献\n"', 4864, []], ['', 0]], '1.reg': [100, 'id'], 'foreign.map': [['native', []]]};
  const v4 = {entries, sparseMaps: ['1.map'], scoreMasks: true as const, postingDeltas: true as const};
  const terms = ['', 'constructor', '__proto__', '文献\n"'];
  const wire = encode(v4, terms); assert.equal(wire.postingBases?.['1.map'], 100);
  assert.deepEqual(wire.entries['foreign.map'], entries['foreign.map']);
  assert.deepEqual(decodeV5(wire, terms), decodeSearchEntries(entries, ['1.map'], 4, true, true));
  const extreme = encode({entries: {'1.map': [['x', 4864, [max, -max, max, -max]]]}, sparseMaps: ['1.map'], scoreMasks: true, postingDeltas: true}, ['x']);
  assert.equal(extreme.postingBases?.['1.map'], max);
  assert.deepEqual(decodeV5(extreme, ['x'])['1.map'], [['x', [null, null, null, null, null, null, null, null, [max, 0, max, 0]]]]);
  const mixedOnly = encode({entries: {'1.map': [['x', 4864, ['str', 1]]]}, sparseMaps: ['1.map'], scoreMasks: true, postingDeltas: true}, ['x']);
  assert.equal(mixedOnly.postingBases, undefined);
  const empty = encode(encodeSearchEntries({}, 4), []); assert.deepEqual(Object.keys(decodeV5(empty, [])), []);
});

test('v5 rejects missing or malformed dictionary metadata, invalid indices and unsafe posting bases', async () => {
  const encode = await termReferenceEncoder();
  const wire = encode({entries: {'1.map': [['x', 4864, [10]]], '1.reg': [10]}, sparseMaps: ['1.map'], scoreMasks: true, postingDeltas: true}, ['x']);
  for (const dictionary of [undefined, null, {}, ['x', 'x'], [1], [null], []]) assert.throws(() => decodeV5(wire, dictionary), /Invalid serialized/);
  for (const flag of [false, null, 1, 'true', {}]) assert.throws(() => decodeV5({...wire, termReferences: flag}, ['x']), /Invalid serialized/);
  for (const version of [3, 4, 6]) assert.throws(() => decodeV5(wire, ['x'], version), /Invalid serialized/);
  for (const index of [-1, 0.5, 1, Number.MAX_SAFE_INTEGER, '0', null, {}])
    assert.throws(() => decodeV5({...wire, entries: {'1.map': [[index, 4864, [0]]]}}, ['x']), /Invalid serialized/);
  for (const postingBases of [null, [], true, {'1.reg': 1}, {'missing.map': 1}, {'1.map': -1}, {'1.map': 1.5}, {'1.map': Number.MAX_SAFE_INTEGER + 1}, {'1.map': '1'}])
    assert.throws(() => decodeV5({...wire, postingBases}, ['x']), /Invalid serialized/);
  assert.throws(() => decodeV5({...wire, entries: {'1.map': [[0, 4864, [Number.MAX_SAFE_INTEGER]]]}}, ['x']), /Invalid serialized/);
  assert.throws(() => decodeV5({...wire, entries: {'1.map': [[0, 4864, [-11]]]}}, ['x']), /Invalid serialized/);
  assert.throws(() => decodeV5({...wire, scoreMasks: undefined}, ['x']), /Invalid serialized/);
  assert.throws(() => decodeV5({...wire, termReferences: undefined}, ['x']), /Invalid serialized/);
  assert.throws(() => encode(encodeSearchEntries({'1.map': [['x', [null, null, null, null, null, null, null, null, [1]]]]}, 4), []), /Invalid serialized/);
  assert.throws(() => encode(encodeSearchEntries({}, 4), ['x', 'x']), /Invalid serialized/);
});
