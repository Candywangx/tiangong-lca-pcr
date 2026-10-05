import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { globSync, mkdtempSync, readFileSync, realpathSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { performance } from 'node:perf_hooks';
import test from 'node:test';
import { buildOfflineLibrary } from '../../builder/scripts/build-offline-library.ts';
import { OfflineLibrary, hashFile, sha256 } from './src/offline-library.ts';
import { isUnknownRecord } from './src/types.ts';
import { parseYaml } from './src/yaml-lite.ts';

/** Deliberately separate from compact reader/packing contracts. Full qualification
 * must select this test explicitly; both outputs are new independent builds of
 * the complete current corpus, never copies or a reusable cached SQLite. */
test('complete corpus preserves every source artifact and reproduces identical SQLite bytes', { timeout: 3600000 }, t => {
  const root = realpathSync(path.resolve('.'));
  const sourceCommit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
  const temp = realpathSync(mkdtempSync(path.join(tmpdir(), 'pcr-offline-corpus-')));
  t.after(() => rmSync(temp, { recursive: true, force: true }));
  const version = '0.1.0';
  const firstStart = performance.now();
  const firstOutput = path.join(temp, 'first');
  const first = buildOfflineLibrary({ root, output: firstOutput, version, sourceCommit });
  const firstMilliseconds = performance.now() - firstStart;
  const secondStart = performance.now();
  const secondOutput = path.join(temp, 'second');
  const second = buildOfflineLibrary({ root, output: secondOutput, version, sourceCommit });
  const secondMilliseconds = performance.now() - secondStart;
  assert.deepEqual(second, first);
  for (const filename of ['library.sqlite', 'library.sqlite.json']) {
    assert.equal(hashFile(path.join(firstOutput, filename)), hashFile(path.join(secondOutput, filename)), `${filename} must reproduce exact bytes.`);
  }
  assert.throws(() => buildOfflineLibrary({ root, output: firstOutput, version, sourceCommit }), /already exists/u);
  const library = new OfflineLibrary(path.join(firstOutput, 'library.sqlite'), { verify: true, expectedSha256: first.sha256 });
  try {
    assert.ok(library.db);
    const records = library.listPcrs('all');
    const canonical = globSync('library/pcrs/*/*/*/manifest.yaml', { cwd: root }).sort();
    const expected = canonical.map(filename => {
      const manifest = parseYaml(readFileSync(path.join(root, filename), 'utf8'));
      assert.ok(isUnknownRecord(manifest) && typeof manifest.id === 'string');
      return { id: manifest.id, path: path.posix.dirname(filename.split(path.sep).join('/')) };
    }).sort((a, b) => a.id.localeCompare(b.id));
    assert.deepEqual(records.map(record => ({ id: record.id, path: record.path })).sort((a, b) => a.id.localeCompare(b.id)), expected, 'No canonical current record may disappear from the full distribution.');
    assert.equal(records.length, first.snapshot.records);
    assert.equal(library.listPcrs('material').length, first.snapshot.material_records);
    assert.ok(first.snapshot.material_records > 0);
    assert.ok(records.length > 3, 'Full qualification cannot accidentally consume the compact fixture.');
    assert.deepEqual(first.snapshot.available_languages, ['en-US']);
    assert.equal(first.snapshot.source_commit, sourceCommit);
    const files = library.db.prepare('SELECT key FROM files ORDER BY key').all().map(row => { assert.ok(typeof row.key === 'string'); return row.key as string; });
    const membership = new Set(files);
    // Module membership is checked independently of what the builder stored.
    // Every source module manifest/projection and English rendering is required.
    for (const filename of globSync('library/modules/**/*', { cwd: root, withFileTypes: true })) {
      if (!filename.isFile() || !/\.(?:md|yaml)$/u.test(filename.name) || /^module\.(?!en-US\.)[^/]+\.md$/u.test(filename.name)) continue;
      const relative = path.relative(root, path.join(filename.parentPath, filename.name)).split(path.sep).join('/');
      assert.ok(membership.has(relative), `Missing source module artifact: ${relative}`);
    }
    const catalog = parseYaml(readFileSync(path.join(root, 'library/catalog.yaml'), 'utf8'));
    assert.ok(isUnknownRecord(catalog) && typeof catalog.pcr_index === 'string');
    assert.ok(membership.has('library/catalog.yaml'));
    assert.ok(membership.has(catalog.pcr_index));
    assert.ok(isUnknownRecord(catalog.pcr_id_aliases) && typeof catalog.pcr_id_aliases.path === 'string');
    assert.ok(membership.has(catalog.pcr_id_aliases.path));
    const aliasSource = parseYaml(readFileSync(path.join(root, catalog.pcr_id_aliases.path), 'utf8'));
    assert.ok(isUnknownRecord(aliasSource) && Array.isArray(aliasSource.aliases));
    assert.equal(aliasSource.aliases.length, first.snapshot.aliases);
    for (const alias of aliasSource.aliases) { assert.ok(isUnknownRecord(alias) && typeof alias.source_pcr_id === 'string'); assert.deepEqual(library.findAlias(alias.source_pcr_id), alias); }
    assert.ok(Array.isArray(catalog.classification_mappings) && Array.isArray(catalog.classification_coverage_indexes));
    for (const filename of [...catalog.classification_mappings, ...catalog.classification_coverage_indexes]) { assert.ok(typeof filename === 'string'); assert.ok(membership.has(filename), `Missing distribution classification artifact: ${filename}`); }
    for (const record of records) {
      assert.ok(library.row('records', record.id));
      for (const name of ['manifest.yaml', 'pcr.en-US.md', 'structured.yaml']) assert.ok(membership.has(`${record.path}/${name}`), `Missing current artifact for ${record.id}: ${name}`);
    }
    const sourceHash = createHash('sha256');
    let originalBytes = 0;
    for (const key of files) {
      assert.ok(!/\/(?:pcr|module)\.(?!en-US\.md)[^.]+\.md$/u.test(key), `Unexpected distribution language: ${key}`);
      const bytes = library.readFile(key);
      assert.deepEqual(bytes, readFileSync(path.join(root, key)), `Distribution artifact differs from canonical source: ${key}`);
      originalBytes += bytes.length;
      sourceHash.update(`${key}\0${sha256(bytes)}\n`);
    }
    assert.equal(originalBytes, first.snapshot.original_bytes);
    assert.equal(`sha256:${sourceHash.digest('hex')}`, first.snapshot.source_sha256);
    assert.equal(library.db.prepare('SELECT COUNT(*) AS count FROM aliases').get()?.count, first.snapshot.aliases);
    for (const row of library.db.prepare('SELECT key FROM aliases ORDER BY key').all()) { assert.ok(typeof row.key === 'string'); assert.ok(library.findAlias(row.key)); }
    for (const row of library.db.prepare('SELECT key FROM coverage ORDER BY key').all()) { assert.ok(typeof row.key === 'string'); assert.ok(library.row('coverage', row.key)); }
    t.diagnostic(JSON.stringify({ operation: 'complete-corpus-independent-reproducibility', sourceCommit, node: process.version, records: records.length, materialRecords: first.snapshot.material_records, aliases: first.snapshot.aliases, files: files.length, bytes: first.bytes, sqliteSha256: first.sha256, sourceSha256: first.snapshot.source_sha256, firstMilliseconds, secondMilliseconds, independentBuilds: 2, exactBytesReproduced: true, allStoredArtifactsMatchSource: true }));
  } finally { library.close(); }
  assert.equal(execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim(), sourceCommit, 'Source revision must remain frozen during qualification.');
});
