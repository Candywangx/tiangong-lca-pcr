import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, mkdtempSync, readFileSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import type { TestContext } from 'node:test';
import { createPcrIdAliasRegistry } from '../../../builder/scripts/build-pcr-id-aliases.ts';
import { createCatalogArtifacts } from '../../../builder/scripts/build-catalog.ts';
import { parseYaml, renderYaml } from '../src/yaml-lite.ts';
import { isUnknownRecord } from '../src/types.ts';

const repositoryRoot = path.resolve('.');
const cropRoot = 'library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening';
const legacyPath = 'library/pcrs/community-social-and-personal-services/education-services/primary-education-services';
function document(value: unknown): Record<string, unknown> { assert.ok(isUnknownRecord(value)); return value; }
function entries(value: unknown): Record<string, unknown>[] { assert.ok(Array.isArray(value)); return value.map(document); }

/** A bounded source tree, passed through the production catalog and SQLite builders.
 * Canonical PCR/module bytes are copied unchanged; only classification membership
 * is reduced. The fixture never claims to qualify the complete repository corpus. */
export function createOfflineDistributionFixture(t: TestContext): { root: string; sourceCommit: string } {
  const root = realpathSync(mkdtempSync(path.join(tmpdir(), 'pcr-offline-source-')));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const put = (relative: string, content: string): void => {
    const target = path.join(root, relative); mkdirSync(path.dirname(target), { recursive: true }); writeFileSync(target, content);
  };
  const copy = (relative: string): void => {
    const target = path.join(root, relative); mkdirSync(path.dirname(target), { recursive: true }); cpSync(path.join(repositoryRoot, relative), target, { recursive: true });
  };
  for (const directory of [`${cropRoot}/wheat-seed`, `${cropRoot}/wheat-other`, legacyPath]) {
    for (const filename of ['manifest.yaml', 'pcr.en-US.md', 'pcr.zh-CN.md', 'structured.yaml']) copy(`${directory}/${filename}`);
  }
  for (const name of ['allocation', 'data-quality', 'inventory-flow-taxonomy', 'pcr-minimum-content', 'reference-flow', 'system-boundary', 'unit-of-analysis', 'validation-rules']) copy(`library/modules/core/${name}.md`);
  copy('LICENSE');
  for (const folder of ['tiangong-pcr-library', 'tiangong-pcr-cli']) {
    copy(`packages/${folder}/package.json`); copy(`packages/${folder}/README.md`);
  }
  const mappingPath = 'classifications/mappings/cpc-3.0-to-pcr.yaml';
  const mapping = document(parseYaml(readFileSync(path.join(repositoryRoot, mappingPath), 'utf8')));
  mapping.mappings = entries(mapping.mappings).filter(edge => ['01111', '01112'].includes(String(edge.code)));
  assert.equal(entries(mapping.mappings).length, 2);
  for (const edge of entries(mapping.mappings)) copy(String(document(edge.acceptance).decision_ref).split('#')[0]!);
  put(mappingPath, renderYaml(mapping));
  put('classifications/mappings/cpc-2.1-to-pcr.yaml', renderYaml({ schema_version: 2, classification_system: 'CPC', classification_version: '2.1', status: 'current', mappings: [] }));
  const leavesPath = 'classifications/systems/cpc/3.0/normalized/leaves.json';
  const leaves = document(JSON.parse(readFileSync(path.join(repositoryRoot, leavesPath), 'utf8')) as unknown);
  leaves.leaves = entries(leaves.leaves).filter(leaf => ['01111', '01112', '99000'].includes(String(leaf.code)));
  assert.equal(entries(leaves.leaves).length, 3);
  put(leavesPath, JSON.stringify(leaves, null, 2) + '\n');
  const registryPath = 'classifications/aliases/pcr-id-aliases.yaml';
  const slugsPath = 'classifications/systems/cpc/3.0/normalized/leaf-slugs.json';
  const slugs = document(JSON.parse(readFileSync(path.join(repositoryRoot, slugsPath), 'utf8')) as unknown);
  slugs.leaves = entries(slugs.leaves).filter(leaf => ['01111', '01112', '99000'].includes(String(leaf.code)));
  put(slugsPath, JSON.stringify(slugs, null, 2) + '\n');
  const registry = createPcrIdAliasRegistry({ leafSlugs: slugs, mapping });
  assert.equal(registry.aliases.length, 1);
  for (const alias of registry.aliases) copy(String(alias.decision_ref).split('#')[0]!);
  put(registryPath, renderYaml(registry));
  const generated = createCatalogArtifacts(root);
  assert.deepEqual(generated.issues, [], 'Compact source must satisfy the production catalog invariants.');
  for (const artifact of generated.artifacts) put(artifact.path, artifact.content);
  const git = (...args: string[]): string => execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
  git('init', '-q'); git('config', 'user.name', 'Offline Fixture'); git('config', 'user.email', 'offline@example.invalid');
  git('add', '.'); git('-c', 'commit.gpgsign=false', 'commit', '-qm', 'bounded real offline source');
  return { root, sourceCommit: git('rev-parse', 'HEAD') };
}
