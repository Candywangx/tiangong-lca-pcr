import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test, { type TestContext } from 'node:test';
import {
  assertPcrReadContextFresh, createPcrReadContext, getPcrReadContextCatalog,
  isPcrReadContext, pcrReadContextAliasInputFingerprint, withPcrReadContextSession,
} from './src/read-context.ts';
import { renderYaml } from './src/yaml-lite.ts';

const indexPath = 'library/indexes/pcr-index.yaml';
const mappingPath = 'classifications/mappings/example-1-to-pcr.yaml';
const registryPath = 'classifications/aliases/pcr-id-aliases.yaml';
function fixture(t: TestContext): string {
  const root = mkdtempSync(path.join(realpathSync(tmpdir()), 'pcr-read-context-ts-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const registry = renderYaml({ schema_version: 1, registry_kind: 'legacy-pcr-id-aliases', status: 'current', aliases: [] });
  write(root, registryPath, registry);
  write(root, indexPath, 'pcrs: []\n');
  write(root, mappingPath, 'mappings: []\n');
  write(root, 'library/catalog.yaml', renderYaml({
    schema_version: 1, pcr_index: indexPath,
    pcr_id_aliases: { path: registryPath, hash_mode: 'exact_bytes', sha256: digest(registry), entry_count: 0 },
    classification_mappings: [mappingPath], classification_coverage_indexes: [],
  }));
  return root;
}
function write(root: string, relativePath: string, bytes: string | Buffer): void {
  const target = path.join(root, relativePath); mkdirSync(path.dirname(target), { recursive: true }); writeFileSync(target, bytes);
}
function digest(bytes: string | Buffer): string { return `sha256:${createHash('sha256').update(bytes).digest('hex')}`; }

test('read contexts are opaque, root isolated, and defensively preserve their alias snapshot', t => {
  const root = fixture(t); const otherRoot = fixture(t); const context = createPcrReadContext({ root });
  assert.equal(isPcrReadContext(context), true);
  assert.equal(isPcrReadContext({ ...context, _pcrReadContext: true }), false);
  assert.equal(isPcrReadContext({ root, aliases: [], _pcrReadContext: true }), false);
  assert.equal(Object.isFrozen(context), true); assert.equal(Object.isFrozen(context.aliases), true);
  assert.equal(context.findPcrIdAlias('pcr.example.absent'), null);
  assert.throws(() => context.findPcrIdAlias('pcr.example.absent', { root: otherRoot }), { code: 'PCR_READ_CONTEXT_STALE' });
  assert.throws(() => assertPcrReadContextFresh({ context: { ...context }, root }), TypeError);
});

test('catalog reuse stays in one context and freshness checks surround synchronous sessions', t => {
  const root = fixture(t); let loads = 0; let checks = 0;
  const context = createPcrReadContext({ root, onBindingCheck() { checks += 1; } });
  const load = () => { loads += 1; return [{ id: 'example', path: 'library/pcrs/example/products/example', manifestPath: 'library/pcrs/example/products/example/manifest.yaml' }]; };
  const result = withPcrReadContextSession({ context, read() {
    const first = getPcrReadContextCatalog({ context, readCatalog: load });
    assert.strictEqual(first, getPcrReadContextCatalog({ context, readCatalog: load }));
    assert.equal(withPcrReadContextSession({ context, read: () => 'nested' }), 'nested');
    return first.get('example');
  } });
  assert.equal(result?.id, 'example'); assert.equal(loads, 1); assert.equal(checks, 2);
  const other = createPcrReadContext({ root });
  getPcrReadContextCatalog({ context: other, readCatalog: load }); assert.equal(loads, 2);
});

test('mutations before and during sessions cannot return accepted stale reads', t => {
  const root = fixture(t); const context = createPcrReadContext({ root });
  const original = readFileSync(path.join(root, mappingPath));
  write(root, mappingPath, 'mappings: [changed]\n');
  assert.throws(() => withPcrReadContextSession({ context, read: () => 'stale' }), { code: 'PCR_READ_CONTEXT_STALE' });
  write(root, mappingPath, original); assert.strictEqual(assertPcrReadContextFresh({ context }), context);
  assert.throws(() => withPcrReadContextSession({ context, read() { write(root, indexPath, 'changed: true\n'); return 'stale'; } }), { code: 'PCR_READ_CONTEXT_STALE' });
  assert.throws(() => context.findPcrIdAlias('pcr.example.absent'), { code: 'PCR_READ_CONTEXT_STALE' });
});

test('creation detects input mutations around alias validation', t => {
  const root = fixture(t);
  assert.throws(() => createPcrReadContext({ root, beforeAliasValidation() { write(root, indexPath, 'changed: true\n'); } }), { code: 'PCR_READ_CONTEXT_STALE' });
});

test('Promise and function-thenable callbacks are rejected and do not leak active sessions', t => {
  const root = fixture(t); let checks = 0; const context = createPcrReadContext({ root, onBindingCheck() { checks += 1; } });
  assert.throws(() => withPcrReadContextSession({ context, read: async () => 'async' }), /synchronous callback/u);
  const thenable = Object.assign(() => 'value', { then() {} });
  assert.throws(() => withPcrReadContextSession({ context, read: () => thenable }), /synchronous callback/u);
  assert.strictEqual(assertPcrReadContextFresh({ context }), context); assert.equal(checks, 5);
});

test('opening a substituted bound file never follows a symbolic link', t => {
  const root = fixture(t); const outside = fixture(t);
  const target = path.join(root, mappingPath);
  assert.throws(() => createPcrReadContext({ root, beforeBoundSourceOpen({ relativePath }) {
    if (relativePath === mappingPath) { rmSync(target); symlinkSync(path.join(outside, mappingPath), target); }
  } }), /ELOOP|symbolic link/u);
});

test('alias reuse remains fingerprint-bound and rechecks dependencies after construction', t => {
  const root = fixture(t); const fingerprint = pcrReadContextAliasInputFingerprint({ root });
  let validations = 0;
  const context = createPcrReadContext({ root, validatedAliasReuse: { aliases: [], fingerprint }, onAliasValidation() { validations += 1; } });
  assert.equal(validations, 1, 'a matching persisted receipt cannot establish semantic validity');
  assert.strictEqual(assertPcrReadContextFresh({ context }), context);
  createPcrReadContext({ root, validatedAliasReuse: { aliases: [], fingerprint: digest('unrelated') }, onAliasValidation() { validations += 1; } });
  assert.equal(validations, 2, 'untrusted freshness metadata never suppresses cold validation');
  write(root, registryPath, renderYaml({ schema_version: 1, registry_kind: 'legacy-pcr-id-aliases', status: 'current', aliases: [] }) + '\n');
  assert.throws(() => assertPcrReadContextFresh({ context }), { code: 'PCR_READ_CONTEXT_STALE' });
});

test('caller-authored alias receipts cannot bypass terminal-target semantic validation', t => {
  const root = fixture(t);
  const aliases = [{source_pcr_id:'pcr.legacy.products.example',source_pcr_path:'library/pcrs/legacy/products/example',target:{kind:'canonical_pcr',pcr_id:'pcr.missing.products.example'},reason:'canonical_pcr_replacement',decision_ref:'docs/adr/alias.md'}];
  const registry=renderYaml({schema_version:1,registry_kind:'legacy-pcr-id-aliases',status:'current',aliases});
  write(root,registryPath,registry);write(root,'docs/adr/alias.md','# Alias fixture decision\n');
  write(root,'library/catalog.yaml',renderYaml({schema_version:1,pcr_index:indexPath,pcr_id_aliases:{path:registryPath,hash_mode:'exact_bytes',sha256:digest(registry),entry_count:1},classification_mappings:[mappingPath],classification_coverage_indexes:[]}));
  const fingerprint=pcrReadContextAliasInputFingerprint({root});let calls=0;
  assert.throws(()=>createPcrReadContext({root,validatedAliasReuse:{fingerprint,aliases},beforeAliasValidation(){calls+=1;}}),{code:'PCR_INVALID_PCR_ID_ALIASES'});
  assert.equal(calls,1);
});

 test('one context validates aliases once while repeated owned session reads reuse the result', t => {
  const root=fixture(t);let validations=0;
  const context=createPcrReadContext({root,validatedAliasReuse:JSON.parse('{"aliases":[],"fingerprint":"forged"}') as unknown,onAliasValidation(){validations+=1;}});
  withPcrReadContextSession({context,read(){for(let index=0;index<10;index+=1)assert.equal(context.findPcrIdAlias('pcr.missing.products.example'),null);}});
  assert.equal(validations,1);
});
