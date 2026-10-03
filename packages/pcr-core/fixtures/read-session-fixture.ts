import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { deflateRawSync } from 'node:zlib';
import type { TestContext } from 'node:test';
import { readPcrDistributionSnapshot } from '../src/index.ts';
import { hashFile, metadataDigest, sha256, sqliteDatabase } from '../src/offline-library.ts';
import { renderYaml } from '../src/yaml-lite.ts';
import type { CurrentPcrSnapshot, OfflineManifest, OfflineSnapshot } from '../src/types.ts';
import { parsePcrMarkdownToStructured } from '../../../builder/lib/markdown-projection.ts';
import { structuredProjectionYaml } from '../../../builder/lib/structured-yaml-projection.ts';

const originalRoot = path.resolve('.');
export const SESSION_PCR_PATH = 'library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed';
export const SESSION_PCR_ID = 'pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed';
const relative = SESSION_PCR_PATH;
const id = SESSION_PCR_ID;
const registryPath = 'classifications/aliases/pcr-id-aliases.yaml';
const indexPath = 'library/indexes/pcr-index.yaml';
export function writeSessionFixtureFile(root: string, name: string, value: string | Buffer): void {
  const target = path.join(root, name); mkdirSync(path.dirname(target), { recursive: true }); writeFileSync(target, value);
}
export function sessionTemporaryRoot(t: TestContext): string {
  const root = mkdtempSync(path.join(realpathSync(tmpdir()), 'pcr-read-session-'));
  t.after(() => rmSync(root, { recursive: true, force: true })); return root;
}
export function installSessionFixtureCatalog(root: string, entries: readonly { id: string; path: string }[]): void {
  const registry = renderYaml({ schema_version: 1, registry_kind: 'legacy-pcr-id-aliases', status: 'current', aliases: [] });
  writeSessionFixtureFile(root, registryPath, registry); writeSessionFixtureFile(root, indexPath, renderYaml({ pcrs: [...entries] }));
  writeSessionFixtureFile(root, 'library/catalog.yaml', renderYaml({ schema_version: 1, pcr_index: indexPath,
    pcr_id_aliases: { path: registryPath, hash_mode: 'exact_bytes', sha256: sha256(registry), entry_count: 0 },
    classification_mappings: [], classification_coverage_indexes: [] }));
}
export function createReadSessionFixture(t: TestContext, { includeSecond = false }: { includeSecond?: boolean } = {}) {
  const root = sessionTemporaryRoot(t);
  for (const name of ['manifest.yaml', 'pcr.en-US.md', 'pcr.zh-CN.md', 'structured.yaml']) {
    writeSessionFixtureFile(root, `${relative}/${name}`, readFileSync(path.join(originalRoot, relative, name)));
  }
  const entries = [{ id, path: relative }];
  const secondId = 'pcr.session.crops.wheat-seed-two', secondRelative = 'library/pcrs/session/crops/wheat-seed-two';
  if (includeSecond) {
    const manifest = readFileSync(path.join(root, relative, 'manifest.yaml'), 'utf8').replaceAll(id, secondId);
    const source = readFileSync(path.join(root, relative, 'pcr.en-US.md'), 'utf8').replaceAll(id, secondId);
    writeSessionFixtureFile(root, `${secondRelative}/manifest.yaml`, manifest);
    writeSessionFixtureFile(root, `${secondRelative}/pcr.en-US.md`, source);
    writeSessionFixtureFile(root, `${secondRelative}/pcr.zh-CN.md`, readFileSync(path.join(root, relative, 'pcr.zh-CN.md'), 'utf8').replaceAll(id, secondId));
    writeSessionFixtureFile(root, `${secondRelative}/structured.yaml`, structuredProjectionYaml(parsePcrMarkdownToStructured(source), { sourceMarkdown: source }));
    entries.push({ id: secondId, path: secondRelative });
  }
  installSessionFixtureCatalog(root, entries);
  return { root, id, relative, secondId, secondRelative };
}
export function sealTinyLibrary(root: string, name: string, snapshot: CurrentPcrSnapshot | readonly CurrentPcrSnapshot[], version: string): { filename: string; manifest: OfflineManifest } {
  const filename = path.join(root, name); const Database = sqliteDatabase(); const db = new Database(filename);
  const snapshots: readonly CurrentPcrSnapshot[] = Array.isArray(snapshot) ? snapshot : [snapshot as CurrentPcrSnapshot];
  const files: [string, Buffer][] = [];
  for (const captured of snapshots) {
    files.push([`${captured.pcr.path}/manifest.yaml`, captured.manifestBytes]);
    for (const name of ['pcr.en-US.md', 'structured.yaml']) {
      const bytes = captured.artifacts[name]?.bytes; assert.ok(bytes); files.push([`${captured.pcr.path}/${name}`, bytes]);
    }
  }
  const identity: OfflineSnapshot = { available_languages: ['en-US'], content_version: version,
    source_commit: (version === '0.1.0' ? 'a' : 'b').repeat(40),
    source_sha256: sha256(files.map(([name, bytes]) => `${name}\0${sha256(bytes)}\n`).join('')),
    records: snapshots.length, material_records: snapshots.filter(value => value.pcr.record_kind === 'methodology').length,
    aliases: 0, original_bytes: files.reduce((total, [, bytes]) => total + bytes.length, 0) };
  try {
    db.exec(`PRAGMA user_version = 1; CREATE TABLE metadata(key TEXT PRIMARY KEY,value TEXT NOT NULL) STRICT;
      CREATE TABLE records(key TEXT PRIMARY KEY,kind TEXT NOT NULL,position INTEGER NOT NULL,value TEXT NOT NULL,sha256 TEXT NOT NULL) STRICT;
      CREATE TABLE aliases(key TEXT PRIMARY KEY,value TEXT NOT NULL,sha256 TEXT NOT NULL) STRICT;
      CREATE TABLE coverage(key TEXT PRIMARY KEY,value TEXT NOT NULL,sha256 TEXT NOT NULL) STRICT;
      CREATE TABLE files(key TEXT PRIMARY KEY,size INTEGER NOT NULL,sha256 TEXT NOT NULL,data BLOB NOT NULL) STRICT;`);
    db.prepare("INSERT INTO metadata VALUES ('snapshot', ?)").run(JSON.stringify(identity));
    for (const [position, captured] of snapshots.entries()) {
      const record = JSON.stringify(captured.pcr);
      db.prepare('INSERT INTO records VALUES (?, ?, ?, ?, ?)').run(captured.pcr.id, captured.pcr.record_kind, position, record, sha256(record));
    }
    for (const [key, bytes] of files) db.prepare('INSERT INTO files VALUES (?, ?, ?, ?)').run(key, bytes.length, sha256(bytes), deflateRawSync(bytes));
    const index_sha256 = { records: metadataDigest(db, 'records'), aliases: metadataDigest(db, 'aliases'),
      coverage: metadataDigest(db, 'coverage'), files: metadataDigest(db, 'files') };
    db.close();
    const manifest: OfflineManifest = { kind: 'tiangong-pcr-library', format_version: 1, snapshot: identity,
      bytes: readFileSync(filename).length, sha256: hashFile(filename), index_sha256 };
    writeFileSync(`${filename}.json`, JSON.stringify(manifest)); return { filename, manifest };
  } finally { if (db.isOpen) db.close(); }
}
export function createReadSessionLibraries(t: TestContext) {
  const { root } = createReadSessionFixture(t);
  const a = sealTinyLibrary(root, 'library-a.sqlite', readPcrDistributionSnapshot({ root, pcrId: id }), '0.1.0');
  const alternate = createReadSessionFixture(t).root, sourcePath = path.join(alternate, relative, 'pcr.en-US.md');
  const source = readFileSync(sourcePath, 'utf8') + '\n<!-- Session fixture B retains a different source snapshot. -->\n';
  writeFileSync(sourcePath, source);
  writeSessionFixtureFile(alternate, `${relative}/structured.yaml`, structuredProjectionYaml(parsePcrMarkdownToStructured(source), { sourceMarkdown: source }));
  const b = sealTinyLibrary(root, 'library-b.sqlite', readPcrDistributionSnapshot({ root: alternate, pcrId: id }), '0.2.0');
  return { root, a, b };
}
