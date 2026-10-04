import fs from 'node:fs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { readProductIdentity, readProductVersion } from '../../../builder/scripts/product-identity.ts';
import { validateProductManifest, writeProductWebArchive } from '../../../builder/scripts/product-release.ts';

/** Test-only actual producer: seal bytes with the declared build runtime before a
 * separate runtime imports them. This never publishes or substitutes an importer. */
export async function produceProviderImportFixture({
  root, webDir, archiveFile, draftManifestFile, outputManifestFile,
}: { root: string; webDir: string; archiveFile: string; draftManifestFile: string; outputManifestFile: string }) {
  const version = readProductVersion(root);
  if (process.versions.node !== version.node) {
    throw new Error(`Fixture producer requires Node ${version.node}; actually executing ${process.versions.node}.`);
  }
  const identity = readProductIdentity(root), toolchain = { node: version.node, npm: version.npm };
  const input: unknown = JSON.parse(fs.readFileSync(draftManifestFile, 'utf8'));
  const draft = validateProductManifest(input, { identity, toolchain });
  const tree = await writeProductWebArchive(webDir, archiveFile);
  const archive = fs.readFileSync(archiveFile);
  const web = { ...draft.web, ...tree, bytes: archive.length,
    sha256: createHash('sha256').update(archive).digest('hex') };
  const result = validateProductManifest({ ...draft, web,
    artifacts: draft.artifacts.map(artifact => artifact.filename === web.filename
      ? { ...artifact, bytes: web.bytes, sha256: web.sha256 } : artifact),
  }, { identity, toolchain });
  fs.writeFileSync(outputManifestFile, JSON.stringify(result), { flag: 'wx' });
  return { actualNode: process.versions.node, declaredNode: result.toolchain.node,
    sourceCommit: result.identity.sourceCommit, identity: result.identity,
    archiveSha256: web.sha256, archiveBytes: web.bytes, treeSha256: web.treeSha256 };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const [root, webDir, archiveFile, draftManifestFile, outputManifestFile] = process.argv.slice(2);
  if (process.argv.length !== 7 || !root || !webDir || !archiveFile || !draftManifestFile || !outputManifestFile) {
    throw new Error('Expected owned source, web tree, new archive, draft manifest and new output manifest paths.');
  }
  const result = await produceProviderImportFixture({ root: path.resolve(root), webDir: path.resolve(webDir),
    archiveFile: path.resolve(archiveFile), draftManifestFile: path.resolve(draftManifestFile), outputManifestFile: path.resolve(outputManifestFile) });
  process.stdout.write(JSON.stringify(result) + '\n');
}
