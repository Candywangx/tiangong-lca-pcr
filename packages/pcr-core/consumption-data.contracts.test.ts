import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { ConsumptionError, atPointer, entriesAt, object, paginate, pointerToken, preview,
  readJsonDocument, sha256, strictNumber } from './src/consumption-data.ts';

test('ConsumptionError and own-property object narrowing preserve the public shape', () => {
  const error = new ConsumptionError('PCR_EXAMPLE', 'Example', { field: 'value' });
  assert.ok(error instanceof Error);
  assert.equal(error.name, 'ConsumptionError');
  assert.equal(error.message, 'Example');
  assert.equal(error.code, 'PCR_EXAMPLE');
  assert.deepEqual(error.details, { field: 'value' });
  assert.deepEqual(new ConsumptionError('code', 'message').details, {});
  assert.equal(object({}), true);
  for (const value of [null, undefined, [], 'text', 12, true]) assert.equal(object(value), false);
});

test('RFC 6901 tokens retain escapes, empty properties and Unicode', () => {
  const data: unknown = { 'a/b': { '~key': [null, { '': '🧪' }] }, '~1': 'literal' };
  assert.equal(pointerToken('a~/b'), 'a~0~1b');
  assert.equal(pointerToken(12), '12');
  assert.equal(atPointer(data, ''), data);
  assert.equal(atPointer(data, '/a~1b/~0key/1/'), '🧪');
  assert.equal(atPointer(data, '/~01'), 'literal');
  for (const pointer of [null, 12, 'a', ' /a', '/~', '/~2', '/~10~x']) {
    assert.throws(() => atPointer(data, pointer), { code: 'PCR_POINTER_INVALID' });
  }
});

test('pointers reject inherited/prototype properties but allow explicit JSON data keys', () => {
  const own: unknown = JSON.parse('{"__proto__":{"safe":true},"constructor":"literal","prototype":4}');
  assert.equal(atPointer(own, '/__proto__/safe'), true);
  assert.equal(atPointer(own, '/constructor'), 'literal');
  assert.equal(atPointer(own, '/prototype'), 4);
  for (const [value, pointer] of [[{}, '/__proto__'], [{}, '/constructor'], [Object.create({ inherited: 1 }), '/inherited'],
    [{ nested: null }, '/nested/field'], ['text', '/0']] as const) {
    assert.throws(() => atPointer(value, pointer), { code: 'PCR_POINTER_NOT_FOUND', details: { pointer } });
  }
});

test('array pointer indices must be canonical own keys, never length, signs, decimals or leading zeroes', () => {
  const values = ['first', 'second'];
  assert.equal(atPointer(values, '/0'), 'first');
  assert.equal(atPointer(values, '/1'), 'second');
  for (const pointer of ['/2', '/01', '/-1', '/+1', '/1.0', '/1e0', '/-', '/length', '/9007199254740993']) {
    assert.throws(() => atPointer(values, pointer), { code: 'PCR_POINTER_NOT_FOUND' });
  }
  assert.equal(atPointer({ '01': 'ordinary object key' }, '/01'), 'ordinary object key');
});

test('entriesAt preserves every scalar/object/array value without coercion or truncation', () => {
  assert.deepEqual(entriesAt(null, '/x'), []);
  assert.deepEqual(entriesAt(undefined, '/x'), []);
  for (const value of [0, false, '', { source: 'original' }]) assert.deepEqual(entriesAt(value, '/x'), [{ pointer: '/x', value }]);
  assert.deepEqual(entriesAt([null, 3, { original: true }], '/x'), [
    { pointer: '/x/0', value: null }, { pointer: '/x/1', value: 3 }, { pointer: '/x/2', value: { original: true } },
  ]);
});

test('generic pagination preserves typed items and exact pagination output without mutation', () => {
  const input: readonly { id: number }[] = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const result = paginate(input, 1, 2);
  const inferred: { id: number } | undefined = result.items[0];
  assert.equal(inferred?.id, 1);
  assert.deepEqual(result, { items: [{ id: 1 }, { id: 2 }], pagination: { page: 1, page_size: 2, total: 3, total_pages: 2, has_more: true } });
  assert.deepEqual(paginate(input, 2, 2), { items: [{ id: 3 }], pagination: { page: 2, page_size: 2, total: 3, total_pages: 2, has_more: false } });
  assert.deepEqual(paginate([]), { items: [], pagination: { page: 1, page_size: 10, total: 0, total_pages: 1, has_more: false } });
  assert.equal(input.length, 3);
  for (const [page, size] of [[0, 10], [1.5, 10], [Infinity, 10], ['1', 10], [1, 0], [1, 101], [1, NaN], [1, '10'], [Number.MAX_SAFE_INTEGER + 1, 10]]) {
    assert.throws(() => paginate(input, page, size), { code: 'PCR_PAGE_INVALID' });
  }
  assert.throws(() => paginate(input, 3, 2), { code: 'PCR_PAGE_RANGE', message: 'Page 3 exceeds 2; use --page 2.' });
  assert.throws(() => paginate([], 2), { code: 'PCR_PAGE_RANGE' });
});

test('legacy preview retains its exact output shape and character accounting', () => {
  const value = { original: 'text' };
  assert.deepEqual(preview(value), { value, truncated: false });
  assert.deepEqual(preview(value, 5), { excerpt: JSON.stringify(value).slice(0, 5), truncated: true, total_characters: JSON.stringify(value).length });
  assert.deepEqual(preview('🧪', 3), { excerpt: JSON.stringify('🧪').slice(0, 3), truncated: true, total_characters: 4 });
  assert.throws(() => preview(undefined), TypeError);
});

test('strictNumber accepts only finite decimal values and enforces explicitly positive values', () => {
  for (const [input, expected] of [['1', 1], ['+1.', 1], ['-.5', -0.5], ['2e3', 2000], ['1E-2', 0.01], [0, 0], [-2, -2]] as const) {
    assert.equal(strictNumber(input, 'amount'), expected);
  }
  for (const input of [null, undefined, '', ' ', ' 1', '1 ', '0x10', 'Infinity', 'NaN', '1e999', Infinity, -Infinity, NaN, true, {}, [], '1/2', '1_000']) {
    assert.throws(() => strictNumber(input, 'amount'), { code: 'PCR_NUMBER_INVALID', details: { field: 'amount' } });
  }
  for (const input of [0, -0, -1, '-1']) assert.throws(() => strictNumber(input, 'amount', { positive: true }), { code: 'PCR_NUMBER_INVALID' });
  assert.equal(strictNumber('.1', 'amount', { positive: true }), 0.1);
});

test('readJsonDocument preserves original byte hash, BOM handling, unknown root and size/read failures', t => {
  const directory = mkdtempSync(path.join(tmpdir(), 'pcr-consumption-data-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  const filename = path.join(directory, 'input.json');
  const bytes = Buffer.from('\uFEFF{"source":"🧪","array":[0,null]}\r\n');
  writeFileSync(filename, bytes);
  assert.deepEqual(readJsonDocument(filename), { file: filename, bytes: bytes.length,
    sha256: `sha256:${createHash('sha256').update(bytes).digest('hex')}`, value: { source: '🧪', array: [0, null] } });
  assert.equal(sha256(bytes), `sha256:${createHash('sha256').update(bytes).digest('hex')}`);
  assert.throws(() => readJsonDocument(filename, 1), { code: 'PCR_INPUT_SIZE' });
  assert.throws(() => readJsonDocument(directory), { code: 'PCR_INPUT_SIZE' });
  assert.throws(() => readJsonDocument(path.join(directory, 'missing')), { code: 'PCR_INPUT_READ' });
  writeFileSync(filename, 'null');
  assert.equal(readJsonDocument(filename).value, null);
});

test('malformed UTF-8 and JSON fail explicitly rather than replacing invalid bytes', t => {
  const directory = mkdtempSync(path.join(tmpdir(), 'pcr-consumption-utf8-'));
  t.after(() => rmSync(directory, { recursive: true, force: true }));
  const filename = path.join(directory, 'input.json');
  for (const body of [Buffer.from([0x22, 0xc0, 0xaf, 0x22]), Buffer.from([0x22, 0xed, 0xa0, 0x80, 0x22]),
    Buffer.from([0x22, 0xe2, 0x82]), Buffer.from('{'), Buffer.from('NaN'), Buffer.from('Infinity'), Buffer.from('\uFEFF\uFEFF{}')]) {
    writeFileSync(filename, body);
    assert.throws(() => readJsonDocument(filename), { code: 'PCR_INPUT_JSON', details: { file: filename } });
  }
  writeFileSync(filename, '"\ufffd"');
  assert.equal(readJsonDocument(filename).value, '\ufffd', 'Valid authored replacement character remains valid UTF-8.');
  writeFileSync(filename, '1e999');
  assert.throws(() => strictNumber(readJsonDocument(filename).value, 'amount'), { code: 'PCR_NUMBER_INVALID' });
});
