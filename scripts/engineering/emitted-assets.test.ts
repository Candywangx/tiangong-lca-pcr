import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test, { type TestContext } from 'node:test';
import { stageTestRuntimeAssets, TEST_RUNTIME_SCHEMAS, TEST_BUILDER_SCHEMAS } from './emitted-assets.ts';
function fixture(t: TestContext) {
  const root = mkdtempSync(path.join(tmpdir(), 'pcr-test-assets-contract-')); t.after(() => rmSync(root, { recursive: true, force: true }));
  const source = path.join(root, 'packages/pcr-core/schemas'), emitted = path.join(root, 'dist/test-engineering');
  mkdirSync(source, { recursive: true }); mkdirSync(path.join(emitted, 'scripts/engineering'), { recursive: true });
  writeFileSync(path.join(emitted, 'scripts/engineering/runtime.js'), 'export const compiled = true;\n');
  for (const name of TEST_RUNTIME_SCHEMAS) writeFileSync(path.join(source, name), JSON.stringify({ id: name }));
  return { root, source, emitted, target: path.join(emitted, 'packages/pcr-core/schemas') };
}
test('compiled test assets preserve exact fs-loaded schema bytes and update only owned output', t => {
  const f = fixture(t); writeFileSync(path.join(f.emitted, 'keep.js'), 'unrelated compiler output');
  const receipt = stageTestRuntimeAssets(f.root); assert.equal(receipt.files, 13);
  for (const name of TEST_RUNTIME_SCHEMAS) assert.deepEqual(readFileSync(path.join(receipt.output, name)), readFileSync(path.join(f.source, name)));
  writeFileSync(path.join(f.source, TEST_RUNTIME_SCHEMAS[0]), '{"new":true}'); stageTestRuntimeAssets(f.root);
  assert.equal(readFileSync(path.join(receipt.output, TEST_RUNTIME_SCHEMAS[0]), 'utf8'), '{"new":true}');
  assert.equal(readFileSync(path.join(f.emitted, 'keep.js'), 'utf8'), 'unrelated compiler output');
});
test('missing source or compiler output fails before creating a schema output', t => {
  const f = fixture(t); rmSync(path.join(f.source, TEST_RUNTIME_SCHEMAS[0]));
  assert.throws(() => stageTestRuntimeAssets(f.root)); assert.equal(existsSync(f.target), false);
  writeFileSync(path.join(f.source, TEST_RUNTIME_SCHEMAS[0]), '{}'); rmSync(path.join(f.emitted, 'scripts/engineering/runtime.js'));
  assert.throws(() => stageTestRuntimeAssets(f.root)); assert.equal(existsSync(f.target), false);
});
test('exact compiler-emitted subsets are completed and renewed compiler bytes coexist with prior owned assets', t => {
  const f = fixture(t); mkdirSync(f.target, { recursive: true });
  const [first, second] = TEST_RUNTIME_SCHEMAS;
  writeFileSync(path.join(f.target, first), JSON.stringify(JSON.parse(readFileSync(path.join(f.source, first), 'utf8')) as unknown, null, 4) + '\n');
  stageTestRuntimeAssets(f.root);
  writeFileSync(path.join(f.source, first), '{"newCompilerBytes":true}');
  writeFileSync(path.join(f.target, first), JSON.stringify(JSON.parse(readFileSync(path.join(f.source, first), 'utf8')) as unknown, null, 4) + '\n');
  writeFileSync(path.join(f.source, second), '{"newFsLoadedBytes":true}');
  stageTestRuntimeAssets(f.root);
  assert.deepEqual(readFileSync(path.join(f.target, first)), readFileSync(path.join(f.source, first)));
  assert.deepEqual(readFileSync(path.join(f.target, second)), readFileSync(path.join(f.source, second)));
  rmSync(f.target, { recursive: true }); mkdirSync(f.target); writeFileSync(path.join(f.target, first), 'unowned different bytes');
  assert.throws(() => stageTestRuntimeAssets(f.root), /modified/u);
  assert.equal(readFileSync(path.join(f.target, first), 'utf8'), 'unowned different bytes');
});
test('pre-existing unowned, additional or modified output is retained and rejected', t => {
  const f = fixture(t); mkdirSync(f.target, { recursive: true }); writeFileSync(path.join(f.target, 'keep.json'), 'operator bytes');
  assert.throws(() => stageTestRuntimeAssets(f.root)); assert.equal(readFileSync(path.join(f.target, 'keep.json'), 'utf8'), 'operator bytes');
  rmSync(f.target, { recursive: true }); stageTestRuntimeAssets(f.root);
  writeFileSync(path.join(f.target, 'unexpected'), 'keep'); assert.throws(() => stageTestRuntimeAssets(f.root), /unowned/u);
  rmSync(path.join(f.target, 'unexpected')); writeFileSync(path.join(f.target, TEST_RUNTIME_SCHEMAS[0]), 'modified bytes');
  assert.throws(() => stageTestRuntimeAssets(f.root), /modified/u); assert.equal(readFileSync(path.join(f.target, TEST_RUNTIME_SCHEMAS[0]), 'utf8'), 'modified bytes');
});
test('source and destination aliases cannot redirect schema staging', t => {
  const f = fixture(t); const elsewhere = path.join(f.root, 'elsewhere'); mkdirSync(elsewhere);
  rmSync(path.join(f.source, TEST_RUNTIME_SCHEMAS[0])); writeFileSync(path.join(elsewhere, 'source.json'), '{}');
  symlinkSync(path.join(elsewhere, 'source.json'), path.join(f.source, TEST_RUNTIME_SCHEMAS[0]), 'file');
  assert.throws(() => stageTestRuntimeAssets(f.root), /regular/u); assert.equal(existsSync(f.target), false);
  rmSync(path.join(f.source, TEST_RUNTIME_SCHEMAS[0])); writeFileSync(path.join(f.source, TEST_RUNTIME_SCHEMAS[0]), '{}');
  mkdirSync(path.dirname(f.target), { recursive: true }); symlinkSync(elsewhere, f.target, 'dir');
  assert.throws(() => stageTestRuntimeAssets(f.root), /aliases/u); assert.equal(existsSync(path.join(elsewhere, TEST_RUNTIME_SCHEMAS[0])), false);
});

test('compiled content checks receive the exact Builder schema closure in its own owned directory', t => {
  const f=fixture(t),source=path.join(f.root,'builder/schemas');mkdirSync(source,{recursive:true});
  for(const name of TEST_BUILDER_SCHEMAS)writeFileSync(path.join(source,name),JSON.stringify({id:name}));
  const core=stageTestRuntimeAssets(f.root),builder=stageTestRuntimeAssets(f.root,'builder');
  assert.equal(builder.files,8);assert.notEqual(core.output,builder.output);
  for(const name of TEST_BUILDER_SCHEMAS)assert.deepEqual(readFileSync(path.join(builder.output,name)),readFileSync(path.join(source,name)));
  writeFileSync(path.join(builder.output,TEST_BUILDER_SCHEMAS[0]),'foreign');
  assert.throws(()=>stageTestRuntimeAssets(f.root,'builder'),/modified/u);
  assert.throws(()=>stageTestRuntimeAssets(f.root,'unknown' as 'core'),/Unknown/u);
});
