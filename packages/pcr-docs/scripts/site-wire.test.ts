import assert from 'node:assert/strict';
import test from 'node:test';
import { INLINE_MARKDOWN_LIMIT, decodeInlineDownloadUrl } from './raw-download.ts';

type Codec = { serializeSiteMetadata(value: unknown): string; decodeSiteMetadata(value: unknown): unknown };
async function codec(): Promise<Codec> {
  const url = new URL('../lib/site-wire.ts', import.meta.url).href;
  const module: unknown = await import(url).catch(() => ({}));
  assert.ok(module && typeof module === 'object');
  assert.equal(typeof Reflect.get(module, 'serializeSiteMetadata'), 'function', 'lossless site metadata serializer must exist');
  assert.equal(typeof Reflect.get(module, 'decodeSiteMetadata'), 'function', 'lossless site metadata decoder must exist');
  return module as Codec;
}
const inline = (text: string) => 'data:application/octet-stream;base64,' + Buffer.from(text).toString('base64');

test('site transport restores full nested current and historical metadata and exact original bytes', async () => {
  const { serializeSiteMetadata, decodeSiteMetadata } = await codec();
  const original = '\ufeff# 原文🙂\r\n\r\nExact bytes.\r\n';
  const url = inline(original), other = inline('Other original');
  const value = { sourceCommit: 'commit', records: [{ downloads: [{ name: 'pcr.zh-CN.md', url, bytes: Buffer.byteLength(original) }],
    pages: [{ url: '/zh/current/', downloads: [{ name: 'pcr.zh-CN.md', url }] }],
    versions: [{ version: '1.0.0', pages: [{ url: '/zh/history/', downloads: [{ url: '/generated/raw/release.md' }] }] }] }],
    downloads: [{ url }, { url: other }], prose: url, arbitrary: { $inlineDownload: 7 }, nested: { url: { ordinary: true } } };
  const before = JSON.stringify(value), encoded = serializeSiteMetadata(value);
  const parsed: unknown = JSON.parse(encoded);
  assert.deepEqual(decodeSiteMetadata(parsed), value);
  assert.equal(JSON.stringify(value), before, 'serialization does not mutate input');
  assert.equal(serializeSiteMetadata(value), encoded, 'encounter order is deterministic');
  const restored = decodeSiteMetadata(parsed) as typeof value;
  assert.deepEqual(decodeInlineDownloadUrl(restored.downloads[0]!.url), Buffer.from(original));
  assert.deepEqual(Object.keys(restored), Object.keys(value));
});

test('repeated native downloads use a single dictionary copy with linear small-reference growth', async () => {
  const { serializeSiteMetadata, decodeSiteMetadata } = await codec();
  const bytes = Buffer.alloc(INLINE_MARKDOWN_LIMIT, 32), url = 'data:application/octet-stream;base64,' + bytes.toString('base64');
  const copies = 6000;
  assert.ok(copies * url.length > 512 * 1024 * 1024, 'expanded repeated URLs exceed the Node string limit');
  const value = { sourceCommit: 'commit', pages: Array.from({ length: copies }, (_, n) => ({ n, downloads: [{ url }] })) };
  const encoded = serializeSiteMetadata(value);
  assert.ok(encoded.length < url.length + copies * 100, 'one large URL plus bounded reference records');
  const wire = JSON.parse(encoded) as { downloadTransport: { schemaVersion: number; urls: string[] } };
  assert.deepEqual(wire.downloadTransport, { schemaVersion: 1, urls: [url] });
  assert.equal(Object.keys(wire).at(-1), 'downloadTransport');
  assert.deepEqual(decodeSiteMetadata(wire), value);
});

test('legacy metadata remains unchanged without granting references', async () => {
  const { decodeSiteMetadata } = await codec();
  const legacy = { sourceCommit: 'old', url: { $inlineDownload: 0 }, downloads: [{ url: inline('old') }] };
  assert.equal(decodeSiteMetadata(legacy), legacy);
  for (const primitive of [null, 7, 'legacy', []]) assert.equal(decodeSiteMetadata(primitive), primitive);
});

test('serializer rejects its root namespace, ambiguous references and invalid inline byte encodings', async () => {
  const { serializeSiteMetadata } = await codec();
  for (const value of [null, [], 1, 'string', { downloadTransport: undefined }, { downloadTransport: {} },
    { url: { $inlineDownload: 0 } }, { nested: { url: { $inlineDownload: 0, extra: true } } }])
    assert.throws(() => serializeSiteMetadata(value), /site metadata/i);
  for (const encoded of ['', 'YQ', '!!!!', 'YQ==\n', 'YR=='])
    assert.throws(() => serializeSiteMetadata({ url: 'data:application/octet-stream;base64,' + encoded }), /site metadata/i);
});

test('decoder rejects malformed headers, duplicate or noncanonical dictionary entries', async () => {
  const { decodeSiteMetadata } = await codec();
  const url = inline('valid');
  for (const header of [null, [], {}, { schemaVersion: 2, urls: [url] }, { schemaVersion: '1', urls: [url] },
    { schemaVersion: 1, urls: 'not-array' }, { schemaVersion: 1, urls: [1] }, { schemaVersion: 1, urls: [url, url] },
    { schemaVersion: 1, urls: [url], extra: true }, { schemaVersion: 1, urls: ['data:text/plain;base64,YQ=='] },
    { schemaVersion: 1, urls: ['data:application/octet-stream;base64,YR=='] }])
    assert.throws(() => decodeSiteMetadata({ downloadTransport: header }), /site metadata/i);
});

test('decoder rejects malformed url references but preserves non-url marker objects', async () => {
  const { decodeSiteMetadata } = await codec();
  const downloadTransport = { schemaVersion: 1, urls: [inline('valid')] };
  for (const reference of [-1, 1, 0.5, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1, '0', null, {}])
    assert.throws(() => decodeSiteMetadata({ nested: [{ url: { $inlineDownload: reference } }], downloadTransport }), /site metadata/i);
  assert.throws(() => decodeSiteMetadata({ url: { $inlineDownload: 0, extra: true }, downloadTransport }), /site metadata/i);
  assert.deepEqual(decodeSiteMetadata({ ordinary: { $inlineDownload: 100 }, downloadTransport }), { ordinary: { $inlineDownload: 100 } });
  assert.deepEqual(decodeSiteMetadata({ downloadTransport: { schemaVersion: 1, urls: [] } }), {});
});

test('transport preserves own prototype-looking keys without modifying object prototypes', async () => {
  const { serializeSiteMetadata, decodeSiteMetadata } = await codec();
  const value: unknown = JSON.parse('{"sourceCommit":"commit","__proto__":{"url":' + JSON.stringify(inline('proto')) + '},"constructor":{"url":' + JSON.stringify(inline('constructor')) + '},"nested":{"prototype":"same"}}');
  const restored = decodeSiteMetadata(JSON.parse(serializeSiteMetadata(value)));
  assert.deepEqual(restored, value);
  assert.equal(Object.getPrototypeOf(restored), Object.prototype);
  assert.equal(Object.hasOwn(restored as object, '__proto__'), true);
  assert.equal(Reflect.get({}, 'polluted'), undefined);
});
