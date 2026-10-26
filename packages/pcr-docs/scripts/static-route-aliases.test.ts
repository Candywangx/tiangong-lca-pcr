import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { MAX_STATIC_ROUTE_ALIASES_BYTES, STATIC_ROUTE_ALIASES_FILE, STATIC_ROUTE_REWRITES,
  prepareStaticRouteAliases, rscAliasTarget, verifyStaticRouteAliasInventory, verifyStaticRouteAliases,
  type StaticRouteAliasFile, type StaticRouteAliases } from './static-route-aliases.ts';

const commit = 'a'.repeat(40);
function put(filename: string, bytes: string | Uint8Array): void { fs.mkdirSync(path.dirname(filename), { recursive: true }); fs.writeFileSync(filename, bytes); }
function fixture(t: test.TestContext): string {
  const out = fs.mkdtempSync(path.join(fs.realpathSync(os.tmpdir()), 'pcr-static-aliases-'));
  t.after(() => fs.rmSync(out, { recursive: true, force: true }));
  put(path.join(out, 'index.html'), '<html>original</html>');
  for (const parent of ['', 'en/docs/pcr', 'zh/docs/pcr/章节']) {
    const bytes = `0:T${parent}\nExact RSC bytes\n`;
    for (const name of ['__next._full.txt', 'index.txt']) put(path.join(out, parent, name), bytes);
  }
  return out;
}
function load(out: string): StaticRouteAliases { return JSON.parse(fs.readFileSync(path.join(out, STATIC_ROUTE_ALIASES_FILE), 'utf8')) as StaticRouteAliases; }
function writeManifest(out: string, manifest: unknown): void { put(path.join(out, STATIC_ROUTE_ALIASES_FILE), JSON.stringify(manifest) + '\n'); }
function inventory(out: string): StaticRouteAliasFile[] {
  const files: StaticRouteAliasFile[] = [];
  const walk = (directory: string): void => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(filename);
      else { const bytes = fs.readFileSync(filename); files.push({ path: path.relative(out, filename).split(path.sep).join('/'), bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex') }); }
    }
  };
  walk(out); return files;
}

test('every exact pair becomes a source-bound ordinary-file alias, including root and encoded nested URLs', t => {
  const out = fixture(t), original = fs.readFileSync(path.join(out, 'index.html'));
  const prepared = prepareStaticRouteAliases(out, commit);
  assert.equal(prepared.pairs.length, 3);
  assert.deepEqual(prepared.pairs.map(pair => pair.source), ['/__next._full.txt', '/en/docs/pcr/__next._full.txt', '/zh/docs/pcr/%E7%AB%A0%E8%8A%82/__next._full.txt']);
  for (const pair of prepared.pairs) {
    assert.equal(rscAliasTarget(pair.source), pair.target);
    assert.equal(fs.existsSync(path.join(out, decodeURIComponent(pair.source))), false);
    const target = path.join(out, decodeURIComponent(pair.target)), bytes = fs.readFileSync(target);
    assert.ok(fs.lstatSync(target).isFile()); assert.equal(bytes.length, pair.bytes);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), pair.sha256);
  }
  assert.deepEqual(fs.readFileSync(path.join(out, 'index.html')), original);
  assert.deepEqual(verifyStaticRouteAliases(out, commit), prepared);
  assert.deepEqual(verifyStaticRouteAliasInventory(prepared, commit, inventory(out)), prepared);
  assert.deepEqual(STATIC_ROUTE_REWRITES, [{ source: '/__next._full.txt', destination: '/index.txt' }, { source: '/*/__next._full.txt', destination: '/:splat/index.txt' }]);
  assert.throws(() => prepareStaticRouteAliases(out, commit), /existing.*metadata/u);
});

test('all pairs are verified before removal: missing, unequal-size and same-size unequal bytes retain earlier valid pairs', t => {
  for (const mutation of ['missing', 'size', 'bytes', 'orphan'] as const) {
    const out = fixture(t), later = path.join(out, 'zh/docs/pcr/章节/index.txt');
    if (mutation === 'missing') fs.unlinkSync(later);
    else if (mutation === 'size') put(later, 'different length');
    else if (mutation === 'bytes') { const value = fs.readFileSync(later); value[0] = 88; put(later, value); }
    else put(path.join(out, 'orphan/index.txt'), 'unpaired');
    assert.throws(() => prepareStaticRouteAliases(out, commit), /missing|differs|unpaired/u);
    assert.ok(fs.existsSync(path.join(out, '__next._full.txt')), 'earlier valid pair must remain');
    assert.ok(fs.existsSync(path.join(out, 'en/docs/pcr/__next._full.txt')));
    assert.equal(fs.existsSync(path.join(out, STATIC_ROUTE_ALIASES_FILE)), false);
  }
});

test('asset-root index.txt downloads remain original and unlisted; asset-root full payloads fail before removal', t => {
  const out = fixture(t), raw = path.join(out, 'generated/raw/library/source/index.txt'), asset = path.join(out, '_next/static/index.txt');
  put(raw, 'exact raw source download\n'); put(asset, 'ordinary original asset\n');
  const manifest = prepareStaticRouteAliases(out, commit);
  assert.equal(manifest.pairs.length, 3);
  assert.equal(fs.readFileSync(raw, 'utf8'), 'exact raw source download\n');
  assert.equal(fs.readFileSync(asset, 'utf8'), 'ordinary original asset\n');
  assert.ok(!manifest.pairs.some(pair => pair.target.startsWith('/generated/') || pair.target.startsWith('/_next/')));
  verifyStaticRouteAliases(out, commit);
  for (const parent of ['generated/raw/source', '_next/static']) {
    const rejected = fixture(t); put(path.join(rejected, parent, '__next._full.txt'), 'raw original'); put(path.join(rejected, parent, 'index.txt'), 'raw original');
    assert.throws(() => prepareStaticRouteAliases(rejected, commit), /asset-root full/u);
    assert.ok(fs.existsSync(path.join(rejected, '__next._full.txt')));
    assert.equal(fs.readFileSync(path.join(rejected, parent, '__next._full.txt'), 'utf8'), 'raw original');
    assert.equal(fs.existsSync(path.join(rejected, STATIC_ROUTE_ALIASES_FILE)), false);
  }
});

test('symlink files, directories, roots and existing metadata fail without touching the fresh export', t => {
  const out = fixture(t), external = path.join(path.dirname(out), path.basename(out) + '-external');
  fs.mkdirSync(external); t.after(() => fs.rmSync(external, { recursive: true, force: true }));
  put(path.join(external, 'index.txt'), 'external sentinel');
  const unsafe = path.join(out, 'unsafe'); fs.symlinkSync(external, unsafe, 'dir');
  assert.throws(() => prepareStaticRouteAliases(out, commit), /symlinks/u); fs.unlinkSync(unsafe);
  fs.symlinkSync(path.join(external, 'index.txt'), unsafe);
  assert.throws(() => prepareStaticRouteAliases(out, commit), /symlinks/u); fs.unlinkSync(unsafe);
  const alias = path.join(external, 'root'); fs.symlinkSync(out, alias, 'dir');
  assert.throws(() => prepareStaticRouteAliases(alias, commit), /canonical/u);
  put(path.join(out, STATIC_ROUTE_ALIASES_FILE), 'unowned sentinel');
  assert.throws(() => prepareStaticRouteAliases(out, commit), /existing.*metadata/u);
  assert.equal(fs.readFileSync(path.join(out, STATIC_ROUTE_ALIASES_FILE), 'utf8'), 'unowned sentinel');
  assert.equal(fs.readFileSync(path.join(external, 'index.txt'), 'utf8'), 'external sentinel');
  assert.ok(fs.existsSync(path.join(out, '__next._full.txt')));
  const blocked = fixture(t); fs.mkdirSync(path.join(blocked, STATIC_ROUTE_ALIASES_FILE), { recursive: true });
  assert.throws(() => prepareStaticRouteAliases(blocked, commit), /existing.*metadata/u);
  assert.ok(fs.existsSync(path.join(blocked, '__next._full.txt')), 'an existing metadata directory must be refused before removals');
});

test('verification rejects source substitution, missing inventory pairs, malformed paths and changed target bytes', t => {
  const out = fixture(t); prepareStaticRouteAliases(out, commit); const original = load(out);
  assert.throws(() => verifyStaticRouteAliases(out, 'b'.repeat(40)), /identity/u);
  assert.throws(() => verifyStaticRouteAliases(out, 'branch-name'), /exact source/u);
  const mutations: ((value: StaticRouteAliases) => void)[] = [
    value => { value.pairs.pop(); }, value => { value.pairs.push(value.pairs[0]!); },
    value => { value.pairs[0]!.source = '/../__next._full.txt'; },
    value => { value.pairs[0]!.target = '/outside.txt'; },
    value => { value.pairs[0]!.source = '/%2f__next._full.txt'; },
    value => { value.pairs[0]!.source += '?query'; },
    value => { value.pairs[0]!.sha256 = '0'.repeat(64); },
    value => { value.pairs[0]!.bytes += 1; },
  ];
  for (const mutate of mutations) { const value = structuredClone(original); mutate(value); writeManifest(out, value); assert.throws(() => verifyStaticRouteAliases(out, commit)); }
  writeManifest(out, original);
  const target = path.join(out, 'index.txt'), bytes = fs.readFileSync(target); bytes[0] = 88; put(target, bytes);
  assert.throws(() => verifyStaticRouteAliases(out, commit), /hash differ/u);
});

test('pure sealed-inventory verification binds canonical metadata and rejects leftover full files or missing target hashes', t => {
  const out = fixture(t), manifest = prepareStaticRouteAliases(out, commit), files = inventory(out);
  assert.throws(() => verifyStaticRouteAliasInventory({ ...manifest, extra: true }, commit, files), /fields/u);
  assert.throws(() => verifyStaticRouteAliasInventory(manifest, commit, [...files, files[0]!]), /duplicated/u);
  const missingHash = files.map(file => file.path === 'index.txt' ? { path: file.path, bytes: file.bytes } : file);
  assert.throws(() => verifyStaticRouteAliasInventory(manifest, commit, missingHash), /hash differ/u);
  assert.throws(() => verifyStaticRouteAliasInventory(manifest, commit, [...files, { path: '__next._full.txt', bytes: 0 }]), /physical full/u);
  const metadata = files.map(file => file.path === STATIC_ROUTE_ALIASES_FILE ? { ...file, sha256: '0'.repeat(64) } : file);
  assert.throws(() => verifyStaticRouteAliasInventory(manifest, commit, metadata), /manifest bytes/u);
  put(path.join(out, '__next._full.txt'), 'stale'); assert.throws(() => verifyStaticRouteAliases(out, commit), /physical full/u);
});

test('metadata remains bounded, canonical and mandatory; pathname resolver rejects unsupported spellings', t => {
  const out = fixture(t); prepareStaticRouteAliases(out, commit);
  const manifest = path.join(out, STATIC_ROUTE_ALIASES_FILE), original = fs.readFileSync(manifest);
  put(manifest, Buffer.alloc(MAX_STATIC_ROUTE_ALIASES_BYTES + 1, 32));
  assert.throws(() => verifyStaticRouteAliases(out, commit), /unbounded/u);
  put(manifest, original.toString().trimEnd()); assert.throws(() => verifyStaticRouteAliases(out, commit), /canonical/u);
  fs.unlinkSync(manifest); assert.throws(() => verifyStaticRouteAliases(out, commit), /Missing/u);
  for (const value of ['/index.txt', '//__next._full.txt', '/a/../__next._full.txt', '/a%2Fb/__next._full.txt', '/a\\b/__next._full.txt', '/__next._full.txt?x=1', '/%ZZ/__next._full.txt', '/generated/raw/__next._full.txt', '/_next/static/__next._full.txt']) assert.equal(rscAliasTarget(value), undefined, value);
});

test('the post-alias inventory keeps the strict below-20,000 limit', t => {
  const out = fixture(t), manifest = prepareStaticRouteAliases(out, commit), files = inventory(out);
  while (files.length < 19_999) files.push({ path: `other/${files.length}.bin`, bytes: 0 });
  assert.deepEqual(verifyStaticRouteAliasInventory(manifest, commit, files), manifest);
  assert.throws(() => verifyStaticRouteAliasInventory(manifest, commit, [...files, { path: 'too-many.bin', bytes: 0 }]), /file limit/u);
});

test('CLI prepares and verifies an explicit new export and refuses malformed arguments', t => {
  const out = fixture(t), script = fileURLToPath(new URL('./static-route-aliases' + path.extname(fileURLToPath(import.meta.url)), import.meta.url));
  const invoke = (...args: string[]) => spawnSync(process.execPath, [script, ...args], { encoding: 'utf8' });
  for (const action of ['prepare', 'verify']) { const result = invoke(action, out, commit); assert.equal(result.status, 0, result.stderr); assert.match(result.stdout, /"pairs":3/u); }
  const invalid = invoke('prepare'); assert.equal(invalid.status, 1); assert.match(invalid.stderr, /Usage:/u);
});
