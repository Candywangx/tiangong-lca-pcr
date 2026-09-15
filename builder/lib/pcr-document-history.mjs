/**
 * Read-only historical document bundle for one PCR.
 *
 * This module exposes the complete, byte-exact document history of a PCR
 * directory for consumers that need to render or archive every released
 * version. It performs no lifecycle, schema, or lineage validation of its own:
 * `inspectPublishedRevisionState` owns those checks, and any finding it reports
 * fails the read. Every returned artifact is then re-read from disk and re-hashed
 * against the fingerprint the inspector already validated, so a file replaced
 * between inspection and read is reported instead of silently producing a torn
 * snapshot. The read is retried a bounded number of times while the workspace
 * changes underneath it.
 *
 * Only regular, contained files inside the inspected PCR directory are read;
 * symbolic links, non-regular files, and escaping paths fail closed. Exact
 * original bytes are preserved and decoding is strict UTF-8.
 */

import {
  closeSync,
  constants as fsConstants,
  fstatSync,
  lstatSync,
  openSync,
  readFileSync,
} from "node:fs";
import path from "node:path";
import { isDeepStrictEqual } from "node:util";
import { validateManifest } from "./schema-contracts.mjs";
import { manifestLifecycleProblems } from "./lifecycle-policy.mjs";

import {
  declaredPcrLanguages,
  pcrMarkdownFile,
} from "../../packages/pcr-core/src/languages.mjs";
import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import { byteSha256 } from "./artifact-hashes.mjs";
import { inspectPublishedRevisionState } from "./published-revision-state.mjs";

const UTF8_DECODER = new TextDecoder("utf-8", { fatal: true });
const READ_ATTEMPTS = 3;
const AUDIT_RELEASE_FILES = ["manifest.snapshot.yaml", "release.yaml", "structured.yaml"];

export class PcrDocumentHistoryError extends Error {
  constructor({ code, message, problems = [], pcrDir = null }) {
    super([message, ...[...new Set(problems)].map((problem) => `- ${problem}`)].join("\n"));
    this.name = "PcrDocumentHistoryError";
    this.code = code;
    this.problems = [...problems];
    this.pcr_dir = pcrDir;
  }
}

/**
 * Reads the complete historical document bundle of one PCR.
 *
 * Returns `{ history, artifacts, releases, revisionAvailable }`:
 * - `history` is the parsed `release-history.yaml`, or null before the first
 *   managed publication;
 * - `artifacts` holds the current consumer-facing files: `manifest.yaml`,
 *   `structured.yaml`, one `pcr.<language>.md` per declared language, and
 *   `release-history.yaml` whenever a managed history exists;
 * - `releases` holds every released version in history order, each with its own
 *   copy of `manifest.snapshot.yaml`, `release.yaml`, `structured.yaml`, and the
 *   language Markdown of that version;
 * - `revisionAvailable` reports whether an open revision workspace exists.
 *
 * An open revision's bodies are never exposed. A genuinely unmanaged but valid
 * candidate returns `history: null` with `releases: []`. Any inspector finding,
 * a historical artifact that no longer matches its validated fingerprint, or a
 * workspace that keeps changing during the read throws `PcrDocumentHistoryError`.
 */
export function readPcrDocumentHistory({ root, pcrDir }) {
  const resolvedRoot = path.resolve(String(root));
  const resolvedPcrDir = path.resolve(String(pcrDir));
  let problems = [];
  for (let attempt = 1; attempt <= READ_ATTEMPTS; attempt += 1) {
    const state = inspectPublishedRevisionState({ root: resolvedRoot, pcrDir: resolvedPcrDir });
    if (state.problems.length > 0) {
      problems = state.problems;
      break;
    }
    const bundle = tryReadBundle({ root: resolvedRoot, pcrDir: resolvedPcrDir, state });
    if (bundle.ok) {
      return bundle.value;
    }
    problems = bundle.problems;
  }
  throw new PcrDocumentHistoryError({
    code: "PCR_DOCUMENT_HISTORY_UNREADABLE",
    message:
      `PCR document history could not be read for ${toRepoRelative(resolvedRoot, resolvedPcrDir)}; ` +
      "resolve every finding, or retry once the workspace stops changing.",
    problems,
    pcrDir: resolvedPcrDir,
  });
}

function tryReadBundle({ root, pcrDir, state }) {
  const problems = [];
  const manifestPath = path.join(pcrDir, "manifest.yaml");
  const manifestArtifact = readContainedArtifact({ root, pcrDir, filePath: manifestPath, problems });
  if (!manifestArtifact) {
    return { ok: false, problems };
  }
  const manifest = parseDocument(manifestArtifact.text, manifestPath, root, problems);
  if (manifest === null) {
    return { ok: false, problems };
  }
  const manifestValidation = validateManifest(manifest);
  problems.push(...manifestValidation.errors.map(error => `manifest ${error.instance_path}: ${error.message}`), ...manifestLifecycleProblems(manifest));
  if (problems.length) return { ok:false, problems };
  let declaredLanguages;
  try {
    declaredLanguages = declaredPcrLanguages(manifest);
  } catch (error) {
    problems.push(`${toRepoRelative(root, manifestPath)}: ${error.message}`);
    return { ok: false, problems };
  }

  const artifacts = { "manifest.yaml": describeArtifact(manifestArtifact) };
  for (const fileName of [
    ...declaredLanguages.map((language) => pcrMarkdownFile(language)),
    "structured.yaml",
    // The append-only chain index travels with the current documents so a
    // consumer can download the release chain metadata itself, not only the
    // documents it points at.
    ...(state.history !== null ? ["release-history.yaml"] : []),
  ]) {
    const artifact = readContainedArtifact({
      root,
      pcrDir,
      filePath: path.join(pcrDir, fileName),
      problems,
    });
    if (!artifact) {
      return { ok: false, problems };
    }
    artifacts[fileName] = describeArtifact(artifact);
  }

  const releases = [];
  for (const release of state.releases ?? []) {
    const releaseDir = path.join(pcrDir, "releases", release.version);
    const expected = releaseFingerprints(release);
    const entries = {};
    for (const fileName of [...Object.keys(expected), ...AUDIT_RELEASE_FILES]) {
      const artifact = readContainedArtifact({
        root,
        pcrDir,
        filePath: path.join(releaseDir, fileName),
        problems,
      });
      if (!artifact) {
        return { ok: false, problems };
      }
      const expectedSha256 = expected[fileName];
      if (expectedSha256 !== undefined && artifact.sha256 !== expectedSha256) {
        problems.push(
          `${toRepoRelative(root, path.join(releaseDir, fileName))}: release artifact changed after validation ` +
            `(expected ${expectedSha256}; found ${artifact.sha256})`,
        );
        return { ok: false, problems };
      }
      entries[fileName] = describeArtifact(artifact);
    }
    if (!identityStillMatches({ root, pcrDir, release, entries, manifest, problems })) {
      return { ok: false, problems };
    }
    const manifestModel = parseVerifiedCopy(entries["manifest.snapshot.yaml"], "manifest.snapshot.yaml", root, problems);
    const structuredModel = parseVerifiedCopy(entries["structured.yaml"], "structured.yaml", root, problems);
    if (manifestModel === null || structuredModel === null) {
      return { ok: false, problems };
    }
    releases.push({
      version: release.version,
      manifest: manifestModel,
      structured: structuredModel,
      languages: [...release.languages],
      artifacts: entries,
    });
  }

  // The identities tying the bundle together must still hold after every
  // artifact was read, otherwise the caller would receive a torn view.
  if (state.history !== null && state.history.pcr_id !== manifest.id) {
    problems.push(
      `${toRepoRelative(root, pcrDir)}: release history identity changed while its documents were read`,
    );
    return { ok: false, problems };
  }
  if (!identityDocumentsAreStable({ root, pcrDir, manifestArtifact, artifacts, state, problems })) {
    return { ok: false, problems };
  }

  return {
    ok: true,
    value: {
      history: state.history ?? null,
      artifacts,
      releases,
      revisionAvailable: state.revision !== null,
    },
  };
}

/**
 * The exact-byte fingerprints the inspector already verified for one release.
 * `release.yaml` itself is bound through the history entry's `release_sha256`,
 * which is the inspector's own check for that file, so every artifact the bundle
 * returns is pinned to a hash the inspector verified rather than merely re-read.
 */
export function releaseFingerprints(release) {
  const artifacts = release.release?.artifacts ?? {};
  const fingerprints = {};
  if (typeof release.historyEntry?.release_sha256 === "string") {
    fingerprints["release.yaml"] = release.historyEntry.release_sha256;
  }
  if (typeof artifacts.manifest_snapshot_sha256 === "string") {
    fingerprints["manifest.snapshot.yaml"] = artifacts.manifest_snapshot_sha256;
  }
  if (typeof artifacts.structured_sha256 === "string") {
    fingerprints["structured.yaml"] = artifacts.structured_sha256;
  }
  if (artifacts.markdown_sha256 && typeof artifacts.markdown_sha256 === "object") {
    for (const [language, sha256] of Object.entries(artifacts.markdown_sha256)) {
      fingerprints[pcrMarkdownFile(language)] = sha256;
    }
    return fingerprints;
  }
  if (typeof artifacts.pcr_en_us_sha256 === "string") {
    fingerprints["pcr.en-US.md"] = artifacts.pcr_en_us_sha256;
  }
  if (typeof artifacts.pcr_zh_cn_sha256 === "string") {
    fingerprints["pcr.zh-CN.md"] = artifacts.pcr_zh_cn_sha256;
  }
  return fingerprints;
}

/**
 * Confirms the re-read snapshot still identifies the release and the PCR the
 * inspector validated, so a replacement cannot smuggle another version's
 * documents into the bundle.
 */
function identityStillMatches({ root, pcrDir, release, entries, manifest, problems }) {
  const snapshotPath = path.join(pcrDir, "releases", release.version, "manifest.snapshot.yaml");
  const snapshot = parseDocument(entries["manifest.snapshot.yaml"].text, snapshotPath, root, problems);
  if (snapshot === null) {
    return false;
  }
  for (const [field, actual, expected] of [
    ["snapshot manifest id", snapshot.id, manifest.id],
    ["snapshot manifest version", snapshot.version, release.version],
    ["snapshot manifest id", snapshot.id, release.manifest.id],
  ]) {
    if (actual !== expected) {
      problems.push(
        `${toRepoRelative(root, snapshotPath)}: ${field} must be ${expected}; found ${actual ?? "null"}`,
      );
      return false;
    }
  }
  return true;
}

/**
 * Re-reads the two workspace documents that are not bound to a stored hash — the
 * current `manifest.yaml` and `release-history.yaml` — and requires their exact
 * bytes to still hash to what this pass already returned. Every other artifact in
 * the bundle is pinned to a hash the inspector verified, so this closes the
 * remaining window in which a concurrent writer could produce a mixed view,
 * including for the returned `release-history.yaml` bytes.
 */
function identityDocumentsAreStable({ root, pcrDir, manifestArtifact, artifacts, state, problems }) {
  const pairs = [["manifest.yaml", manifestArtifact.sha256]];
  if (state.history !== null) {
    pairs.push(["release-history.yaml", artifacts["release-history.yaml"]?.sha256 ?? null]);
  }
  for (const [fileName, expectedSha256] of pairs) {
    const rechecked = readContainedArtifact({
      root,
      pcrDir,
      filePath: path.join(pcrDir, fileName),
      problems,
    });
    if (!rechecked) {
      return false;
    }
    if (expectedSha256 === null || rechecked.sha256 !== expectedSha256) {
      problems.push(
        `${toRepoRelative(root, path.join(pcrDir, fileName))}: document changed while the bundle was being read`,
      );
      return false;
    }
  }
  if (state.history !== null) {
    const historyPath = path.join(pcrDir, "release-history.yaml");
    const historyModel = parseDocument(artifacts["release-history.yaml"].text, historyPath, root, problems);
    if (historyModel === null) {
      return false;
    }
    if (!isDeepStrictEqual(historyModel, state.history)) {
      problems.push(
        `${toRepoRelative(root, historyPath)}: release history identity changed while its documents were read`,
      );
      return false;
    }
  }
  return true;
}

/** Parses the already-verified bytes of one bundle artifact into an owned model. */
function parseVerifiedCopy(artifact, label, root, problems) {
  const model = parseDocument(artifact.text, artifact.path, root, problems);
  if (model === null) {
    problems.push(`${toRepoRelative(root, artifact.path)}: released ${label} could not be parsed`);
    return null;
  }
  return structuredClone(model);
}

function describeArtifact(artifact) {
  return {
    path: artifact.path,
    bytes: artifact.bytes,
    text: artifact.text,
    sha256: artifact.sha256,
  };
}

function parseDocument(text, filePath, root, problems) {
  try {
    return parseYaml(text);
  } catch (error) {
    problems.push(`${toRepoRelative(root, filePath)}: invalid YAML (${error.message})`);
    return null;
  }
}

/**
 * Reads one bundle artifact with every guarantee the bundle promises: a regular,
 * non-symlink file inside the PCR directory, decoded as strict UTF-8 with its
 * exact bytes preserved.
 */
function readContainedArtifact({ root, pcrDir, filePath, problems }) {
  const relativePath = path.relative(pcrDir, filePath);
  const displayPath = toRepoRelative(root, filePath);
  if (relativePath === "" || relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    problems.push(`${displayPath}: document history reads are confined to the PCR directory`);
    return null;
  }
  let stats;
  try {
    stats = lstatSync(filePath);
  } catch (error) {
    problems.push(`${displayPath}: document could not be inspected (${error.code ?? error.message})`);
    return null;
  }
  if (stats.isSymbolicLink() || !stats.isFile()) {
    problems.push(`${displayPath}: document must be a regular file and must not be a symbolic link`);
    return null;
  }
  let descriptor;
  try {
    descriptor = openSync(filePath, fsConstants.O_RDONLY | (fsConstants.O_NOFOLLOW ?? 0));
    if (!fstatSync(descriptor).isFile()) {
      problems.push(`${displayPath}: document must be a regular file`);
      return null;
    }
    const bytes = readFileSync(descriptor);
    let text;
    try {
      text = UTF8_DECODER.decode(bytes);
    } catch {
      problems.push(`${displayPath}: document must contain valid UTF-8`);
      return null;
    }
    return { path: filePath, bytes, text, sha256: byteSha256(bytes) };
  } catch (error) {
    problems.push(`${displayPath}: document could not be read (${error.code ?? error.message})`);
    return null;
  } finally {
    if (descriptor !== undefined) {
      closeSync(descriptor);
    }
  }
}

function toRepoRelative(root, value) {
  return path.relative(root, value).replaceAll(path.sep, "/");
}
