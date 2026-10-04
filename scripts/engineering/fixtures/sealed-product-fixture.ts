import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, mkdtempSync, realpathSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import type { TestContext } from 'node:test';
import { buildProductRelease } from '../../../builder/scripts/product-release.ts';
import { PRODUCT_MIRRORS, readProductIdentity } from '../../../builder/scripts/product-identity.ts';
import { buildOfflineTool } from '../../../builder/scripts/build-offline-packages.ts';
import { buildOfflineLibrary } from '../../../builder/scripts/build-offline-library.ts';
import { createReadSessionFixture } from '../../../packages/pcr-core/fixtures/read-session-fixture.ts';
import { resolveNpmCli } from '../sealed-artifact.ts';
import { parseNpmPackOutput } from '../../../builder/scripts/npm-release.ts';

function put(root: string, relative: string, content: string): void { const target = path.join(root, relative); mkdirSync(path.dirname(target), { recursive: true }); writeFileSync(target, content); }

/** Tests build controlled seals; the production qualifier receives only existing artifacts. */
export async function sealedProductFixture(t: TestContext, usableTool: boolean) {
  const base = mkdtempSync(path.join(realpathSync(tmpdir()), 'sealed-consumer-contract-')); t.after(() => rmSync(base, { recursive: true, force: true }));
  const source = path.join(base, 'source'); mkdirSync(source);
  const npmCli = resolveNpmCli(); const npm = execFileSync(process.execPath, [npmCli, '--version'], { encoding: 'utf8' }).trim();
  const version = '0.3.0';
  put(source, 'product-release.json', JSON.stringify({ schema: 1, version, node: process.versions.node, npm, web: { origin: 'https://pcr.tiangong.earth', site: 'global' } }));
  for (const [file, name] of PRODUCT_MIRRORS) put(source, file, JSON.stringify({ name, version, private: true }));
  put(source, 'library/pcrs/fixture/pcr.en-US.md', 'Controlled transport identity fixture.\n');
  put(source, 'classifications/fixture.yaml', 'mappings: []\n');
  put(source, 'edgeone.json', '{"outputDirectory":"packages/pcr-docs/out","buildCommand":"fixture source build","headers":[],"redirects":[]}\n');
  const git = (...args: string[]) => execFileSync('git', args, { cwd: source, stdio: 'ignore' });
  git('init', '-q'); git('config', 'user.name', 'Sealed Test'); git('config', 'user.email', 'sealed@example.invalid'); git('add', '.'); git('commit', '-qm', 'controlled seal identity');
  const identity = readProductIdentity(source); const web = path.join(base, 'web');
  put(web, 'index.html', 'Controlled home.');
  put(web, 'zh/docs/pcr/index.html', 'Controlled Chinese directory.'); put(web, 'en/docs/pcr/index.html', 'Controlled English directory.');
  put(web, 'generated/product-release.json', JSON.stringify(identity));
  put(web, 'generated/version.json', JSON.stringify({ sourceCommit: identity.sourceCommit, releaseVersion: identity.version, releaseTag: identity.tag, sourceFingerprint: identity.sourceFingerprint, counts: { pcrs: 1, pages: 2, languages: 2, sourceBytes: 20 } }));
  put(web, 'generated/raw/classifications/indexes/cpc-3.0-coverage.json', '{"fixture":true}\n');
  const librarySource = createReadSessionFixture(t).root;
  for (const file of ['README.md']) {
    mkdirSync(path.join(librarySource, 'packages/tiangong-pcr-library'), { recursive: true });
    cpSync(path.resolve('packages/tiangong-pcr-library', file), path.join(librarySource, 'packages/tiangong-pcr-library', file));
  }
  cpSync(path.resolve('LICENSE'), path.join(librarySource, 'LICENSE'));
  const root = path.join(base, 'sealed');
  const manifest = await buildProductRelease(source, identity.tag, root, { webDir: web, getNpmVersion: () => npm,
    pack: ({ stage, output, spec }) => parseNpmPackOutput(execFileSync(process.execPath, [npmCli, 'pack', stage, '--json', '--ignore-scripts', '--offline', '--pack-destination', output, '--cache', path.join(base, 'pack-cache')], { cwd: source, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }), spec.name), builders: {
    tool({ output, version }) {
      if (usableTool) return buildOfflineTool({ root: process.cwd(), output, version });
      // Deliberately installable but not a usable consumer; it cannot pass the qualifier.
      mkdirSync(output, { recursive: true }); put(output, 'package.json', JSON.stringify({ name: '@tiangong-lca/pcr', version, files: ['README.md'], dependencies: { ajv: '8.0.0' }, bundleDependencies: ['ajv'] }));
      put(output, 'README.md', 'Controlled malformed-consumer fixture.\n');
      put(output, 'node_modules/ajv/package.json', '{"name":"ajv","version":"8.0.0","main":"index.js"}');
      put(output, 'node_modules/ajv/index.js', 'module.exports = {};\n');
    },
    library({ output, version, sourceCommit }) {
      const snapshot = buildOfflineLibrary({ root: librarySource, output, version, sourceCommit });
      put(output, 'package.json', JSON.stringify({ name: '@tiangong-lca/pcr-library', version, files: ['library.sqlite', 'library.sqlite.json', 'README.md'], license: 'MIT' }));
      put(output, 'README.md', 'One real PCR / real SQLite contract fixture.\n'); return snapshot;
    },
  } });
  return { base, root, identity, manifest, npmCli };
}
