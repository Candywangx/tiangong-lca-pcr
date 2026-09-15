import {
  closeSync,
  constants as fsConstants,
  existsSync,
  fstatSync,
  lstatSync,
  openSync,
  readFileSync,
  readdirSync,
} from "node:fs";
import path from "node:path";
import { isDeepStrictEqual } from "node:util";

import { inspectProjectionIntegrity } from "../../packages/pcr-core/src/projection-integrity.mjs";
import { materialProjectionCompletenessIssues } from "../../packages/pcr-core/src/projection-completeness.mjs";
import {
  REQUIRED_PCR_LANGUAGES,
  declaredPcrLanguages,
} from "../../packages/pcr-core/src/languages.mjs";
import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import {
  byteSha256,
  releaseArtifactHashes,
  manifestReleaseArtifacts,
} from "./artifact-hashes.mjs";
import {
  compareSemver,
  isValidSemver,
  isValidUtcTimestamp,
  manifestLifecycleProblems,
} from "./lifecycle-policy.mjs";
import {
  resolvePcrLanguageFiles,
  pcrLanguageFromMarkdownFile,
} from "./pcr-language-files.mjs";
import {
  validateManifest,
  validateRelease,
  validateReleaseHistory,
  validateRevision,
  validateStructured,
} from "./schema-contracts.mjs";

export { byteSha256, releaseArtifactHashes, manifestReleaseArtifacts };

export const RELEASE_FILES = Object.freeze([
  "manifest.snapshot.yaml",
  "pcr.en-US.md",
  "pcr.zh-CN.md",
  "release.yaml",
  "structured.yaml",
]);

export const REVISION_FILES = Object.freeze([
  "manifest.next.yaml",
  "pcr.en-US.md",
  "pcr.zh-CN.md",
  "revision.yaml",
  "structured.yaml",
]);

const UTF8_DECODER = new TextDecoder("utf-8", { fatal: true });

export function buildReleaseRecord({
  pcrId,
  version,
  publishedAtUtc,
  predecessorVersion,
  manifestText,
  englishText,
  chineseText,
  structuredText,
  languages,
  languageFiles,
}) {
  const release = {
    schema_version: languages ? 2 : 1,
    pcr_id: pcrId,
    version,
    published_at_utc: publishedAtUtc,
    predecessor_version: predecessorVersion,
    artifacts: languages
      ? releaseArtifactHashes({
          manifestText,
          markdownSha256ByLanguage: Object.fromEntries(
            languages.map((language) => {
              const file = languageFiles.get(language);
              return [language, file.bytes ?? file.text];
            }),
          ),
          structuredText,
        })
      : releaseArtifactHashes({
          manifestText,
          englishText,
          chineseText,
          structuredText,
        }),
  };
  const releaseText = renderYaml(release);
  return {
    release,
    releaseText,
    historyEntry: {
      version,
      published_at_utc: publishedAtUtc,
      predecessor_version: predecessorVersion,
      path: `releases/${version}`,
      release_sha256: byteSha256(releaseText),
    },
  };
}

export function inspectPublishedRevisionState({ root, pcrDir }) {
  const problems = [];
  const warnings = [];
  const directory = path.resolve(pcrDir);
  const manifestPath = path.join(directory, "manifest.yaml");
  if (!existsSync(manifestPath)) {
    return { problems, warnings, history: null, revision: null, releases: [] };
  }

  const manifestArtifact = readArtifact(manifestPath, root, problems);
  const manifestText = manifestArtifact?.text ?? null;
  const manifest = parseDocument(manifestText, manifestPath, root, problems);
  if (!manifest) {
    return { problems, warnings, history: null, revision: null, releases: [] };
  }

  rejectNestedCanonicalManifests(directory, root, problems);

  const historyPath = path.join(directory, "release-history.yaml");
  const releasesDir = path.join(directory, "releases");
  const revisionDir = path.join(directory, "revision");
  const hasHistory = existsSync(historyPath);
  const hasReleases = existsSync(releasesDir);
  const hasRevision = existsSync(revisionDir);
  const hasManagedState = hasHistory || hasReleases || hasRevision;

  if (!hasManagedState) {
    if (["published", "deprecated"].includes(manifest.status)) {
      problems.push(
        `${relative(root, directory)}: ${manifest.status} PCR has no release-history.yaml; ` +
          "run the explicit legacy adoption workflow before revision",
      );
    }
    return { problems, warnings, history: null, revision: null, releases: [] };
  }

  if (!hasHistory || !hasReleases) {
    problems.push(
      `${relative(root, directory)}: managed release state requires both release-history.yaml and releases/`,
    );
    return { problems, warnings, history: null, revision: null, releases: [] };
  }
  if (!isRealDirectory(releasesDir, root, problems)) {
    return { problems, warnings, history: null, revision: null, releases: [] };
  }

  const historyArtifact = readArtifact(historyPath, root, problems);
  const historyText = historyArtifact?.text ?? null;
  const history = parseAuditDocument(historyText, historyPath, root, problems);
  if (!history) {
    return { problems, warnings, history: null, revision: null, releases: [] };
  }
  const historyValidation = validateReleaseHistory(history);
  addSchemaProblems(
    historyValidation,
    historyPath,
    root,
    "release history",
    problems,
  );
  const historyEntriesInspectable =
    Array.isArray(history.releases) &&
    history.releases.every(
      (entry) => entry !== null && typeof entry === "object" && !Array.isArray(entry),
    );
  if (!historyValidation.valid && !historyEntriesInspectable) {
    return { problems, warnings, history, revision: null, releases: [] };
  }
  if (history.pcr_id !== manifest.id) {
    problems.push(`${relative(root, historyPath)}: pcr_id must match manifest id ${manifest.id}`);
  }
  if (!isValidSemver(history.current_version)) {
    problems.push(`${relative(root, historyPath)}: current_version must be a valid SemVer identity`);
  }

  const releaseDirectories = readdirSync(releasesDir, { withFileTypes: true })
    .map((entry) => entry.name)
    .sort();
  const expectedDirectories = new Set(
    (history.releases ?? [])
      .map((entry) => String(entry.version))
      .filter(isValidSemver),
  );
  for (const name of releaseDirectories) {
    const releasePath = path.join(releasesDir, name);
    const stats = lstatSync(releasePath);
    if (stats.isSymbolicLink()) {
      problems.push(`${relative(root, releasePath)}: release directories must not be symbolic links`);
    } else if (!stats.isDirectory()) {
      problems.push(`${relative(root, releasePath)}: releases/ may contain only version directories`);
    } else if (!expectedDirectories.has(name)) {
      problems.push(`${relative(root, releasePath)}: release directory is not declared in release history`);
    }
  }

  const releases = [];
  let previousEntry = null;
  const seenVersions = new Set();
  const seenPaths = new Set();
  for (const entry of history.releases ?? []) {
    const entryContext = `${relative(root, historyPath)}: release ${entry.version}`;
    if (seenVersions.has(entry.version)) {
      problems.push(`${entryContext} repeats version`);
    }
    if (seenPaths.has(entry.path)) {
      problems.push(`${entryContext} repeats path ${entry.path}`);
    }
    seenVersions.add(entry.version);
    seenPaths.add(entry.path);

    if (!isValidSemver(entry.version)) {
      problems.push(`${entryContext} is not a valid SemVer directory identity`);
      previousEntry = entry;
      continue;
    }
    const entryTimestampValid = isValidUtcTimestamp(entry.published_at_utc);
    if (!entryTimestampValid) {
      problems.push(`${entryContext} published_at_utc is not a real canonical UTC timestamp`);
    }

    const expectedPath = `releases/${entry.version}`;
    if (entry.path !== expectedPath) {
      problems.push(`${entryContext} path must be ${expectedPath}`);
    }
    const expectedPredecessor = previousEntry?.version ?? null;
    if (entry.predecessor_version !== expectedPredecessor) {
      problems.push(
        `${entryContext} predecessor_version must be ${expectedPredecessor ?? "null"}`,
      );
    }
    if (
      previousEntry &&
      isValidSemver(entry.version) &&
      isValidSemver(previousEntry.version) &&
      compareSemver(entry.version, previousEntry.version) <= 0
    ) {
      problems.push(`${entryContext} version must be greater than ${previousEntry.version}`);
    }
    if (
      previousEntry &&
      entryTimestampValid &&
      isValidUtcTimestamp(previousEntry.published_at_utc) &&
      Date.parse(entry.published_at_utc) < Date.parse(previousEntry.published_at_utc)
    ) {
      problems.push(`${entryContext} published_at_utc must not precede the prior release`);
    }

    const releaseDir = path.join(directory, expectedPath);
    const release = inspectReleaseDirectory({
      root,
      releaseDir,
      historyEntry: entry,
      pcrId: manifest.id,
      problems,
    });
    if (release) {
      releases.push(release);
    }
    previousEntry = entry;
  }

  for (const name of releaseDirectories) {
    if (!seenVersions.has(name)) {
      problems.push(`${relative(root, path.join(releasesDir, name))}: orphan release directory`);
    }
  }

  const latestEntry = history.releases?.at(-1) ?? null;
  if (latestEntry && history.current_version !== latestEntry.version) {
    problems.push(
      `${relative(root, historyPath)}: current_version must equal latest release ${latestEntry.version}`,
    );
  }
  if (latestEntry && manifest.version !== latestEntry.version) {
    problems.push(
      `${relative(root, manifestPath)}: version must equal release history current_version ${latestEntry.version}`,
    );
  }

  const latest = releases.find((release) => release.version === history.current_version) ?? null;
  if (latest) {
    validateCurrentAgainstLatest({
      root,
      pcrDir: directory,
      manifest,
      manifestBytes: manifestArtifact.bytes,
      latest,
      problems,
    });
  }

  let revision = null;
  if (hasRevision) {
    revision = inspectRevisionDirectory({
      root,
      pcrDir: directory,
      revisionDir,
      manifest,
      history,
      seenVersions,
      problems,
    });
  }

  return { problems, warnings, history, revision, releases };
}

function inspectReleaseDirectory({ root, releaseDir, historyEntry, pcrId, problems }) {
  if (!existsSync(releaseDir) || !isRealDirectory(releaseDir, root, problems)) {
    problems.push(`${relative(root, releaseDir)}: release directory is missing`);
    return null;
  }
  const auditDocuments = ["manifest.snapshot.yaml", "release.yaml", "structured.yaml"];
  const releasePath = path.join(releaseDir, "release.yaml");
  const snapshotManifestPath = path.join(releaseDir, "manifest.snapshot.yaml");
  const snapshotText = readArtifactText(snapshotManifestPath, root, problems);
  const snapshotManifest = parseAuditDocument(snapshotText, snapshotManifestPath, root, problems);
  const inspectionProblems = [...problems];
  const languageInspection = snapshotManifest
    ? inspectLanguageArtifacts({
        root,
        directory: releaseDir,
        manifest: snapshotManifest,
        kind: "release",
        problems: inspectionProblems,
      })
    : null;
  requireExactFiles(
    releaseDir,
    [...(languageInspection?.expectedFiles ?? []), ...auditDocuments],
    root,
    "release",
    problems,
  );
  const fileNames = [...(languageInspection?.presentFiles ?? []), ...auditDocuments];
  const paths = Object.fromEntries(fileNames.map((name) => [name, path.join(releaseDir, name)]));
  const artifacts = Object.fromEntries(
    fileNames.map((name) => [name, readArtifact(paths[name], root, problems)]),
  );
  if (!snapshotManifest || Object.values(artifacts).some((value) => value === null)) {
    problems.push(...inspectionProblems.filter((problem) => !problems.includes(problem)));
    return null;
  }
  problems.push(...inspectionProblems.filter((problem) => !problems.includes(problem)));
  const texts = Object.fromEntries(
    Object.entries(artifacts).map(([name, artifact]) => [name, artifact.text]),
  );
  const release = parseAuditDocument(
    texts["release.yaml"],
    paths["release.yaml"],
    root,
    problems,
  );
  const structured = parseDocument(
    texts["structured.yaml"],
    paths["structured.yaml"],
    root,
    problems,
  );
  if (!release || !structured) {
    return null;
  }
  if (languageInspection.undeclaredFiles.length > 0) {
    return null;
  }

  addSchemaProblems(
    validateRelease(release),
    paths["release.yaml"],
    root,
    "release metadata",
    problems,
  );
  addSchemaProblems(
    validateManifest(snapshotManifest),
    paths["manifest.snapshot.yaml"],
    root,
    "release manifest snapshot",
    problems,
  );
  addSchemaProblems(
    validateStructured(structured),
    paths["structured.yaml"],
    root,
    "release structured projection",
    problems,
  );
  for (const problem of manifestLifecycleProblems(snapshotManifest)) {
    problems.push(`${relative(root, paths["manifest.snapshot.yaml"])}: ${problem}`);
  }

  for (const [field, actual, expected] of [
    ["pcr_id", release.pcr_id, pcrId],
    ["version", release.version, historyEntry.version],
    ["published_at_utc", release.published_at_utc, historyEntry.published_at_utc],
    ["predecessor_version", release.predecessor_version, historyEntry.predecessor_version],
    ["snapshot manifest id", snapshotManifest.id, pcrId],
    ["snapshot manifest version", snapshotManifest.version, historyEntry.version],
    ["snapshot publication timestamp", snapshotManifest.published_at_utc, historyEntry.published_at_utc],
  ]) {
    if (actual !== expected) {
      problems.push(
        `${relative(root, releaseDir)}: ${field} must be ${expected ?? "null"}; found ${actual ?? "null"}`,
      );
    }
  }
  if (snapshotManifest.status !== "published" || snapshotManifest.content_maturity !== "published_methodology") {
    problems.push(`${relative(root, paths["manifest.snapshot.yaml"])}: snapshot must be published/published_methodology`);
  }
  if (!isValidUtcTimestamp(release.published_at_utc)) {
    problems.push(`${relative(root, paths["release.yaml"])}: published_at_utc is not a real canonical UTC timestamp`);
  }
  if (!isValidUtcTimestamp(snapshotManifest.published_at_utc)) {
    problems.push(`${relative(root, paths["manifest.snapshot.yaml"])}: published_at_utc is not a real canonical UTC timestamp`);
  }
  if (!isValidUtcTimestamp(snapshotManifest.updated_at_utc)) {
    problems.push(`${relative(root, paths["manifest.snapshot.yaml"])}: updated_at_utc is not a real canonical UTC timestamp`);
  }

  const languageManifest = expectedReleaseArtifactsForRelease({ release, snapshotManifest });
  if (!releaseArtifactsMatchDeclaredLanguages({ artifacts: release.artifacts, manifest: languageManifest, problems })) {
    return null;
  }
  const expectedHashes = releaseArtifactHashes({
    manifestBytes: artifacts["manifest.snapshot.yaml"].bytes,
    ...(languageManifest ? {
      markdownSha256ByLanguage: Object.fromEntries(
        languageInspection.presentFiles.map((name) => [
          pcrLanguageFromMarkdownFile(name),
          artifacts[name].bytes,
        ]),
      ),
    } : {
      englishBytes: artifacts["pcr.en-US.md"].bytes,
      chineseBytes: artifacts["pcr.zh-CN.md"].bytes,
    }),
    structuredBytes: artifacts["structured.yaml"].bytes,
  });
  for (const [field, expected] of Object.entries(expectedHashes)) {
    if (!isDeepStrictEqual(release.artifacts?.[field], expected)) {
      problems.push(`${relative(root, paths["release.yaml"])}: artifacts.${field} does not match snapshot bytes`);
    }
  }
  const expectedManifestArtifacts = {
    ...expectedHashes,
  };
  delete expectedManifestArtifacts.manifest_snapshot_sha256;
  if (!isDeepStrictEqual(snapshotManifest.release_artifacts, expectedManifestArtifacts)) {
    problems.push(
      `${relative(root, paths["manifest.snapshot.yaml"])}: release_artifacts do not match snapshot artifact bytes`,
    );
  }
  const releaseManifestArtifacts = release.artifacts
    ? (() => {
        const {
          manifest_snapshot_sha256: _manifestSnapshot,
          ...currentArtifacts
        } = release.artifacts;
        return currentArtifacts;
      })()
    : null;
  if (!isDeepStrictEqual(releaseManifestArtifacts, snapshotManifest.release_artifacts)) {
    problems.push(
      `${relative(root, paths["release.yaml"])}: artifact hashes must match manifest.snapshot.yaml release_artifacts`,
    );
  }
  if (historyEntry.release_sha256 !== byteSha256(artifacts["release.yaml"].bytes)) {
    problems.push(`${relative(root, paths["release.yaml"])}: release_sha256 does not match release.yaml bytes`);
  }

  const integrity = inspectProjectionIntegrity({
    sourceMarkdown: texts["pcr.en-US.md"],
    structuredText: texts["structured.yaml"],
    metadata: structured.projection_metadata,
  });
  if (integrity.status !== "current") {
    for (const issue of integrity.issues) {
      problems.push(`${relative(root, paths["structured.yaml"])}: ${issue.message}`);
    }
  }
  for (const issue of materialProjectionCompletenessIssues(structured, { expectedPcrId: pcrId })) {
    problems.push(`${relative(root, paths["structured.yaml"])}: ${issue.message}`);
  }

  return {
    version: historyEntry.version,
    manifest: snapshotManifest,
    manifestBytes: artifacts["manifest.snapshot.yaml"].bytes,
    manifestText: texts["manifest.snapshot.yaml"],
    englishBytes: artifacts["pcr.en-US.md"].bytes,
    englishText: texts["pcr.en-US.md"],
    chineseBytes: artifacts["pcr.zh-CN.md"].bytes,
    chineseText: texts["pcr.zh-CN.md"],
    structuredBytes: artifacts["structured.yaml"].bytes,
    structuredText: texts["structured.yaml"],
    languages: languageInspection.languages,
    languageArtifacts: Object.fromEntries(
      languageInspection.presentFiles.map((name) => [
        pcrLanguageFromMarkdownFile(name),
        { bytes: artifacts[name].bytes, text: artifacts[name].text },
      ]),
    ),
    historyEntry,
    release,
  };
}

function readArtifactText(filePath, root, problems) {
  return readArtifact(filePath, root, problems)?.text ?? null;
}

/**
 * Cross-checks a managed directory against the languages its own manifest
 * declares: every declared language must be materialized, and no other
 * language Markdown file may appear.
 */
function inspectLanguageArtifacts({ root, directory, manifest, kind, problems }) {
  const resolved = resolvePcrLanguageFiles({ manifest, directory, displayRoot: root });
  problems.push(...resolved.problems);
  if (kind === "release" && resolved.absent.length > 0) {
    problems.push(
      `${relative(root, directory)}: release directory must contain ` +
        `${resolved.absent.map((language) => `pcr.${language}.md`).join(", ")} for its declared languages`,
    );
  }
  return {
    languages: resolved.present,
    expectedFiles: resolved.present.map((language) => `pcr.${language}.md`),
    presentFiles: resolved.present.map((language) => `pcr.${language}.md`),
    undeclaredFiles: resolved.undeclaredFiles,
  };
}

/** The manifest that governs one release's language set: v2 release metadata, otherwise the snapshot. */
function expectedReleaseArtifactsForRelease({ release, snapshotManifest }) {
  if (release.schema_version === 2) {
    return Object.hasOwn(release.artifacts ?? {}, "markdown_sha256") ? snapshotManifest : null;
  }
  return null;
}

function releaseArtifactsMatchDeclaredLanguages({ artifacts, manifest, problems }) {
  if (!manifest) {
    return artifacts !== null && typeof artifacts === "object" && !Array.isArray(artifacts);
  }
  let languages;
  try {
    languages = declaredPcrLanguages(manifest);
  } catch (error) {
    problems.push(`release manifest languages could not be resolved: ${error.message}`);
    return false;
  }
  const markdownHashes = artifacts?.markdown_sha256;
  if (!markdownHashes || typeof markdownHashes !== "object" || Array.isArray(markdownHashes)) {
    problems.push("release artifacts must declare markdown_sha256 for a schema v2 release");
    return false;
  }
  const declared = [...languages].sort().join("\n");
  const hashed = Object.keys(markdownHashes).sort().join("\n");
  if (declared !== hashed) {
    problems.push(
      "release markdown_sha256 keys must match the snapshot manifest languages.available exactly",
    );
    return false;
  }
  return true;
}

function validateCurrentAgainstLatest({
  root,
  pcrDir,
  manifest,
  manifestBytes,
  latest,
  problems,
}) {
  const structuredArtifact = readArtifact(path.join(pcrDir, "structured.yaml"), root, problems);
  for (const [name, actual, expected] of [
    ["structured.yaml", structuredArtifact?.bytes, latest.structuredBytes],
  ]) {
    if (actual && !actual.equals(expected)) {
      problems.push(`${relative(root, path.join(pcrDir, name))}: current file differs from latest release snapshot`);
    }
  }

  let currentLanguages = [];
  try {
    currentLanguages = declaredPcrLanguages(manifest);
  } catch {
    currentLanguages = [];
  }
  for (const language of latest.languages) {
    if (!currentLanguages.includes(language)) {
      problems.push(
        `${relative(root, path.join(pcrDir, "manifest.yaml"))}: current manifest must declare released language ${language}`,
      );
    }
  }
  const currentLanguageFiles = new Map();
  for (const language of currentLanguages) {
    const fileName = `pcr.${language}.md`;
    const artifact = readArtifact(path.join(pcrDir, fileName), root, problems);
    if (artifact) {
      currentLanguageFiles.set(language, artifact);
    }
    const expected = latest.languageArtifacts[language]?.bytes;
    if (artifact && expected && !artifact.bytes.equals(expected)) {
      problems.push(`${relative(root, path.join(pcrDir, fileName))}: current file differs from latest release snapshot`);
    }
  }

  const latestIsV2 = latest.release.schema_version === 2;
  const usesLegacyFields = Object.hasOwn(manifest.release_artifacts ?? {}, "pcr_en_us_sha256");
  if (latestIsV2 === usesLegacyFields) {
    problems.push(
      `${relative(root, path.join(pcrDir, "manifest.yaml"))}: release_artifacts shape must match the latest release ` +
        `(schema v${latest.release.schema_version})`,
    );
  }

  const expectedArtifacts = currentLanguageFiles.size === currentLanguages.length
    && currentLanguages.length > 0
    && structuredArtifact
    ? manifestReleaseArtifacts(
        latestIsV2
          ? {
              markdownSha256ByLanguage: Object.fromEntries(
                currentLanguages.map((language) => [language, currentLanguageFiles.get(language).bytes]),
              ),
              structuredBytes: structuredArtifact.bytes,
            }
          : {
              englishBytes: currentLanguageFiles.get("en-US").bytes,
              chineseBytes: currentLanguageFiles.get("zh-CN").bytes,
              structuredBytes: structuredArtifact.bytes,
            },
      )
    : null;
  if (expectedArtifacts && !isDeepStrictEqual(manifest.release_artifacts, expectedArtifacts)) {
    problems.push(`${relative(root, path.join(pcrDir, "manifest.yaml"))}: release_artifacts do not match current bytes`);
  }

  if (manifest.status === "published") {
    if (!manifestBytes.equals(latest.manifestBytes)) {
      problems.push(`${relative(root, path.join(pcrDir, "manifest.yaml"))}: current manifest differs from latest release snapshot`);
    }
    return;
  }
  if (manifest.status !== "deprecated") {
    problems.push(`${relative(root, path.join(pcrDir, "manifest.yaml"))}: managed current release must be published or deprecated`);
    return;
  }

  const expectedDeprecatedManifest = {
    ...latest.manifest,
    status: "deprecated",
    content_maturity: "deprecated_methodology",
    updated_at_utc: manifest.updated_at_utc,
  };
  if (!isDeepStrictEqual(manifest, expectedDeprecatedManifest)) {
    problems.push(
      `${relative(root, path.join(pcrDir, "manifest.yaml"))}: deprecated manifest changed fields outside the lifecycle overlay`,
    );
  }
  if (!manifestBytes.equals(Buffer.from(renderYaml(expectedDeprecatedManifest)))) {
    problems.push(
      `${relative(root, path.join(pcrDir, "manifest.yaml"))}: deprecated manifest bytes must equal the canonical lifecycle overlay`,
    );
  }
}

function inspectRevisionDirectory({
  root,
  pcrDir,
  revisionDir,
  manifest,
  history,
  seenVersions,
  problems,
}) {
  if (!isRealDirectory(revisionDir, root, problems)) {
    return null;
  }
  const revisionPath = path.join(revisionDir, "revision.yaml");
  const nextManifestPath = path.join(revisionDir, "manifest.next.yaml");
  const revisionArtifact = readArtifact(revisionPath, root, problems);
  const nextManifestArtifact = readArtifact(nextManifestPath, root, problems);
  const revisionText = revisionArtifact?.text ?? null;
  const nextManifestText = nextManifestArtifact?.text ?? null;
  const revision = parseAuditDocument(revisionText, revisionPath, root, problems);
  const nextManifest = parseAuditDocument(nextManifestText, nextManifestPath, root, problems);
  if (!revision || !nextManifest) {
    return null;
  }
  const languageInspection = inspectLanguageArtifacts({
    root,
    directory: revisionDir,
    manifest: nextManifest,
    kind: "revision",
    problems,
  });
  requireExactFiles(
    revisionDir,
    [...languageInspection.expectedFiles, "manifest.next.yaml", "revision.yaml", "structured.yaml"],
    root,
    "revision",
    problems,
  );

  addSchemaProblems(
    validateRevision(revision),
    revisionPath,
    root,
    "revision metadata",
    problems,
  );
  addSchemaProblems(
    validateManifest(nextManifest),
    nextManifestPath,
    root,
    "revision manifest",
    problems,
  );
  for (const problem of manifestLifecycleProblems(nextManifest)) {
    problems.push(`${relative(root, nextManifestPath)}: ${problem}`);
  }

  if (manifest.status !== "published") {
    problems.push(`${relative(root, revisionDir)}: an open revision requires published current state`);
  }
  for (const [field, value] of [
    ["base_version", revision.base_version],
    ["target_version", revision.target_version],
  ]) {
    if (!isValidSemver(value)) {
      problems.push(`${relative(root, revisionPath)}: ${field} is not a valid SemVer identity`);
    }
  }
  if (!isValidUtcTimestamp(revision.opened_at_utc)) {
    problems.push(`${relative(root, revisionPath)}: opened_at_utc is not a real canonical UTC timestamp`);
  }
  if (!isValidUtcTimestamp(nextManifest.updated_at_utc)) {
    problems.push(`${relative(root, nextManifestPath)}: updated_at_utc is not a real canonical UTC timestamp`);
  }
  for (const [field, actual, expected] of [
    ["revision pcr_id", revision.pcr_id, manifest.id],
    ["revision base_version", revision.base_version, history.current_version],
    ["revision target_version", revision.target_version, nextManifest.version],
    ["next manifest id", nextManifest.id, manifest.id],
  ]) {
    if (actual !== expected) {
      problems.push(`${relative(root, revisionDir)}: ${field} must be ${expected}; found ${actual}`);
    }
  }
  if (
    isValidSemver(revision.target_version) &&
    isValidSemver(revision.base_version) &&
    compareSemver(revision.target_version, revision.base_version) <= 0
  ) {
    problems.push(`${relative(root, revisionPath)}: target_version must be greater than base_version`);
  }
  if (seenVersions.has(revision.target_version)) {
    problems.push(`${relative(root, revisionPath)}: target_version already exists in release history`);
  }
  if (nextManifest.published_at_utc !== undefined) {
    problems.push(`${relative(root, nextManifestPath)}: revision manifest must not contain published_at_utc`);
  }
  if (!["candidate", "active"].includes(nextManifest.status)) {
    problems.push(`${relative(root, nextManifestPath)}: revision status must be candidate or active`);
  }
  if (nextManifest.release_artifacts !== undefined) {
    problems.push(`${relative(root, nextManifestPath)}: revision manifest must not contain release_artifacts`);
  }

  return { revisionDir, revision, nextManifest, nextManifestText };
}

function rejectNestedCanonicalManifests(pcrDir, root, problems) {
  for (const reserved of ["revision", "releases"]) {
    const reservedPath = path.join(pcrDir, reserved);
    if (!existsSync(reservedPath)) {
      continue;
    }
    const stack = [reservedPath];
    while (stack.length > 0) {
      const current = stack.pop();
      const stats = lstatSync(current);
      if (stats.isSymbolicLink()) {
        problems.push(`${relative(root, current)}: symbolic links are not allowed in managed state`);
        continue;
      }
      if (!stats.isDirectory()) {
        continue;
      }
      for (const entry of readdirSync(current, { withFileTypes: true })) {
        const child = path.join(current, entry.name);
        if (entry.name === "manifest.yaml") {
          problems.push(`${relative(root, child)}: reserved subtrees must not contain manifest.yaml`);
        }
        if (entry.isDirectory() || entry.isSymbolicLink()) {
          stack.push(child);
        }
      }
    }
  }
}

function requireExactFiles(directory, expectedFiles, root, kind, problems) {
  const actual = readdirSync(directory).sort();
  const expected = [...expectedFiles].sort();
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    problems.push(
      `${relative(root, directory)}: ${kind} directory must contain exactly ${expected.join(", ")}; ` +
        `found ${actual.join(", ") || "(empty)"}`,
    );
  }
  for (const fileName of expected) {
    const filePath = path.join(directory, fileName);
    if (!existsSync(filePath)) {
      continue;
    }
    const stats = lstatSync(filePath);
    if (stats.isSymbolicLink() || !stats.isFile()) {
      problems.push(`${relative(root, filePath)}: ${kind} artifacts must be regular files`);
    }
  }
}

function addSchemaProblems(result, sourcePath, root, entityKind, problems) {
  for (const error of result.errors ?? []) {
    problems.push(
      `${relative(root, sourcePath)}: ${entityKind} schema ${error.instance_path} ${error.message}`,
    );
  }
}

function parseDocument(text, filePath, root, problems) {
  if (text === null) {
    return null;
  }
  try {
    return parseYaml(text);
  } catch (error) {
    problems.push(`${relative(root, filePath)}: invalid YAML (${error.message})`);
    return null;
  }
}

function parseAuditDocument(text, filePath, root, problems) {
  const value = parseDocument(text, filePath, root, problems);
  if (!value) {
    return null;
  }
  if (renderYaml(value) !== text) {
    problems.push(
      `${relative(root, filePath)}: audit YAML must use canonical builder rendering; ` +
        "duplicate keys, trailing content, comments, and alternate formatting are not allowed",
    );
    return null;
  }
  return value;
}

function readArtifact(filePath, root, problems) {
  if (!existsSync(filePath)) {
    problems.push(`${relative(root, filePath)}: required file is missing`);
    return null;
  }
  const stats = lstatSync(filePath);
  if (stats.isSymbolicLink() || !stats.isFile()) {
    problems.push(`${relative(root, filePath)}: required artifact must be a regular file`);
    return null;
  }
  let descriptor;
  try {
    descriptor = openSync(filePath, fsConstants.O_RDONLY | (fsConstants.O_NOFOLLOW ?? 0));
    if (!fstatSync(descriptor).isFile()) {
      problems.push(`${relative(root, filePath)}: required artifact must be a regular file`);
      return null;
    }
    const bytes = readFileSync(descriptor);
    try {
      return { bytes, text: UTF8_DECODER.decode(bytes) };
    } catch {
      problems.push(`${relative(root, filePath)}: required artifact is not valid UTF-8`);
      return null;
    }
  } catch (error) {
    problems.push(
      `${relative(root, filePath)}: required artifact could not be read (${error.code ?? error.message})`,
    );
    return null;
  } finally {
    if (descriptor !== undefined) {
      closeSync(descriptor);
    }
  }
}

function isRealDirectory(directory, root, problems) {
  if (!existsSync(directory)) {
    return false;
  }
  const stats = lstatSync(directory);
  if (stats.isSymbolicLink() || !stats.isDirectory()) {
    problems.push(`${relative(root, directory)}: expected a real directory, not a symlink or file`);
    return false;
  }
  return true;
}

function relative(root, value) {
  return path.relative(root, value).replaceAll(path.sep, "/");
}
