import assert from "node:assert/strict";
import {
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import { byteSha256 } from "./artifact-hashes.mjs";
import { lifecycle, publish, revise } from "./manifest-lifecycle.mjs";
import { PcrDocumentHistoryError, readPcrDocumentHistory, releaseFingerprints } from "./pcr-document-history.mjs";
import { inspectPublishedRevisionState } from "./published-revision-state.mjs";
import { createAuthoringPcr } from "./pcr-authoring-fixture.mjs";

const DE_LANGUAGES = ["en-US", "zh-CN", "de-DE"];
const DE_TITLES = {
  "en-US": "Wheat seed production",
  "zh-CN": "小麦种子生产",
  "de-DE": "Weizen-Saatgutproduktion",
};
const REGIONAL_LANGUAGES = ["en-US", "zh-CN", "en-GB", "zh-TW"];
const REGIONAL_TITLES = {
  "en-US": "Wheat seed production",
  "zh-CN": "小麦种子生产",
  "en-GB": "Wheat seed production (UK)",
  "zh-TW": "小麥種子生產",
};

function createRoot(t) {
  const root = mkdtempSync(path.join(tmpdir(), "pcr-document-history-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  return root;
}

function activate({ root, libraryPath }, optionalLanguages = []) {
  for (const language of optionalLanguages) {
    lifecycle({ root, pcr: libraryPath, translation: `${language}=aligned` });
  }
  lifecycle({
    root,
    pcr: libraryPath,
    status: "active",
    "content-maturity": "reviewed_methodology",
    translation: "zh-CN=reviewed",
  });
  for (const language of optionalLanguages) {
    lifecycle({ root, pcr: libraryPath, translation: `${language}=reviewed` });
  }
}

/** A publication-ready v1 two-language PCR workspace. */
function createV1Workspace(t) {
  const root = createRoot(t);
  const fixture = createAuthoringPcr(root, {});
  activate(fixture);
  return { ...fixture, root };
}

/** A v2 workspace that declares the optional German translation. */
function createV2Workspace(t) {
  const root = createRoot(t);
  const fixture = createAuthoringPcr(root, {
    languages: DE_LANGUAGES,
    schemaVersion: 2,
    titles: DE_TITLES,
    optionalTranslations: { "de-DE": "out_of_sync" },
  });
  activate(fixture, ["de-DE"]);
  return { ...fixture, root };
}

/** A v2 workspace whose optional languages are en-GB and zh-TW, the regional siblings of the required codes. */
function createRegionalWorkspace(t) {
  const root = createRoot(t);
  const fixture = createAuthoringPcr(root, {
    languages: REGIONAL_LANGUAGES,
    schemaVersion: 2,
    titles: REGIONAL_TITLES,
    optionalTranslations: { "en-GB": "out_of_sync", "zh-TW": "out_of_sync" },
  });
  activate(fixture, ["en-GB", "zh-TW"]);
  return { ...fixture, root };
}

function readBundle({ root, pcrDir }) {
  return readPcrDocumentHistory({ root, pcrDir });
}

test("a valid unpublished candidate yields empty history with its current documents", (t) => {
  const root = createRoot(t);
  const { pcrDir } = createAuthoringPcr(root, {});

  const bundle = readBundle({ root, pcrDir });

  assert.equal(bundle.history, null);
  assert.deepEqual(bundle.releases, []);
  assert.equal(bundle.revisionAvailable, false);
  assert.deepEqual(Object.keys(bundle.artifacts), [
    "manifest.yaml",
    "pcr.en-US.md",
    "pcr.zh-CN.md",
    "structured.yaml",
  ]);
  for (const [fileName, artifact] of Object.entries(bundle.artifacts)) {
    assert.equal(artifact.path, path.join(pcrDir, fileName));
    assert.ok(Buffer.isBuffer(artifact.bytes));
    assert.equal(artifact.bytes.toString("utf8"), artifact.text);
    assert.equal(artifact.sha256, byteSha256(artifact.bytes));
  }
});

test("a v1 release exposes current and historical documents with exact bytes", (t) => {
  const { root, libraryPath, pcrDir } = createV1Workspace(t);
  publish({ root, pcr: libraryPath, version: "1.0.0" });

  const bundle = readBundle({ root, pcrDir });

  assert.equal(bundle.history.schema_version, 1);
  assert.equal(bundle.history.current_version, "1.0.0");
  assert.equal(bundle.releases.length, 1);
  const [release] = bundle.releases;
  assert.equal(release.version, "1.0.0");
  assert.deepEqual(release.languages, ["en-US", "zh-CN"]);
  assert.deepEqual(Object.keys(release.artifacts).sort(), [
    "manifest.snapshot.yaml",
    "pcr.en-US.md",
    "pcr.zh-CN.md",
    "release.yaml",
    "structured.yaml",
  ]);
  assert.equal(
    release.artifacts["structured.yaml"].bytes.toString("utf8"),
    readFileSync(path.join(pcrDir, "releases", "1.0.0", "structured.yaml"), "utf8"),
  );
  assert.equal(
    release.artifacts["manifest.snapshot.yaml"].sha256,
    byteSha256(readFileSync(path.join(pcrDir, "releases", "1.0.0", "manifest.snapshot.yaml"))),
  );
});

test("release manifest and structured models are parsed copies of the validated bytes", (t) => {
  const { root, libraryPath, pcrDir } = createV1Workspace(t);
  publish({ root, pcr: libraryPath, version: "1.0.0" });

  const bundle = readBundle({ root, pcrDir });
  const [release] = bundle.releases;
  const releaseDir = path.join(pcrDir, "releases", "1.0.0");

  // The models deep-equal the parsed original bytes, not a re-serialization.
  assert.deepEqual(
    release.manifest,
    parseYaml(readFileSync(path.join(releaseDir, "manifest.snapshot.yaml"), "utf8")),
  );
  assert.deepEqual(
    release.structured,
    parseYaml(readFileSync(path.join(releaseDir, "structured.yaml"), "utf8")),
  );
  // The generator-facing lifecycle fields are present on the model.
  assert.equal(release.manifest.id, "pcr.agriculture.crops.wheat-seed");
  assert.equal(release.manifest.status, "published");
  assert.equal(release.manifest.version, "1.0.0");
  assert.equal(release.manifest.content_maturity, "published_methodology");
  assert.deepEqual(release.manifest.languages.available, ["en-US", "zh-CN"]);
  assert.equal(typeof release.structured.system_boundary, "object");

  // Mutating the returned models never reaches the artifact bytes, the files on
  // disk, or a later read.
  release.manifest.status = "candidate";
  release.manifest.languages.available.push("fr-FR");
  release.structured.process_inventory = ["mutated"];
  release.languages.push("fr-FR");

  assert.match(release.artifacts["manifest.snapshot.yaml"].text, /status: "published"/u);
  assert.equal(parseYaml(readFileSync(path.join(releaseDir, "manifest.snapshot.yaml"), "utf8")).status, "published");
  release.manifest.release_artifacts.markdown_sha256 = { "en-US": "sha256:deadbeef" };
  assert.match(
    release.artifacts["manifest.snapshot.yaml"].text,
    /pcr_en_us_sha256: "sha256:1d8/u,
    "the artifact text keeps the original bytes",
  );

  // A later read is unaffected by the consumer's mutations.
  const again = readBundle({ root, pcrDir });
  assert.equal(again.releases[0].manifest.status, "published");
  assert.deepEqual(again.releases[0].manifest.languages.available, ["en-US", "zh-CN"]);
  assert.match(again.releases[0].manifest.release_artifacts.pcr_en_us_sha256, /^sha256:[0-9a-f]{64}$/u);
  assert.deepEqual(again.releases[0].languages, ["en-US", "zh-CN"]);
  assert.notDeepEqual(again.releases[0].structured.process_inventory, ["mutated"]);
  assert.deepEqual(
    again.releases[0].manifest,
    parseYaml(readFileSync(path.join(releaseDir, "manifest.snapshot.yaml"), "utf8")),
  );
});

test("a published successor chain preserves both versions and their document copies", (t) => {
  const { root, libraryPath, pcrDir } = createV1Workspace(t);
  publish({ root, pcr: libraryPath, version: "1.0.0" });
  const firstBundle = readBundle({ root, pcrDir });

  revise({ root, pcr: libraryPath, version: "1.1.0" });
  lifecycle({
    root,
    pcr: libraryPath,
    workspace: "revision",
    status: "active",
    "content-maturity": "reviewed_methodology",
    translation: "zh-CN=reviewed",
  });
  publish({ root, pcr: libraryPath, workspace: "revision" });

  const bundle = readBundle({ root, pcrDir });

  assert.deepEqual(
    bundle.releases.map((release) => release.version),
    ["1.0.0", "1.1.0"],
  );
  assert.equal(bundle.history.current_version, "1.1.0");
  assert.equal(bundle.revisionAvailable, false);
  // The earlier bundle is unaffected by the later publication, and the two
  // releases keep independent copies of their documents.
  assert.deepEqual(
    firstBundle.releases[0].artifacts["pcr.zh-CN.md"].bytes,
    bundle.releases[0].artifacts["pcr.zh-CN.md"].bytes,
  );
  assert.notEqual(
    bundle.releases[0].artifacts["release.yaml"].bytes,
    bundle.releases[1].artifacts["release.yaml"].bytes,
  );
  for (const release of bundle.releases) {
    for (const artifact of Object.values(release.artifacts)) {
      assert.equal(artifact.sha256, byteSha256(artifact.bytes));
    }
  }
});

test("a v2 release binds one Markdown artifact per declared language", (t) => {
  const { root, libraryPath, pcrDir } = createV2Workspace(t);
  publish({ root, pcr: libraryPath, version: "2.0.0" });

  const bundle = readBundle({ root, pcrDir });

  assert.deepEqual(Object.keys(bundle.artifacts), [
    "manifest.yaml",
    "pcr.en-US.md",
    "pcr.zh-CN.md",
    "pcr.de-DE.md",
    "structured.yaml",
    "release-history.yaml",
  ]);
  const [release] = bundle.releases;
  assert.deepEqual(release.languages, DE_LANGUAGES);
  assert.deepEqual(Object.keys(release.artifacts).sort(), [
    "manifest.snapshot.yaml",
    "pcr.de-DE.md",
    "pcr.en-US.md",
    "pcr.zh-CN.md",
    "release.yaml",
    "structured.yaml",
  ]);
  const releaseYaml = release.artifacts["release.yaml"].text;
  assert.match(releaseYaml, /schema_version: 2/u);
  assert.equal(
    release.artifacts["pcr.de-DE.md"].sha256,
    byteSha256(readFileSync(path.join(pcrDir, "releases", "2.0.0", "pcr.de-DE.md"))),
  );
});

test("regional sibling languages are carried through history as first-class documents", (t) => {
  const { root, libraryPath, pcrDir } = createRegionalWorkspace(t);
  publish({ root, pcr: libraryPath, version: "1.0.0" });

  const bundle = readBundle({ root, pcrDir });

  assert.deepEqual(Object.keys(bundle.artifacts), [
    "manifest.yaml",
    "pcr.en-US.md",
    "pcr.zh-CN.md",
    "pcr.en-GB.md",
    "pcr.zh-TW.md",
    "structured.yaml",
    "release-history.yaml",
  ]);
  const [release] = bundle.releases;
  assert.deepEqual(release.languages, REGIONAL_LANGUAGES);
  assert.deepEqual(Object.keys(release.artifacts).sort(), [
    "manifest.snapshot.yaml",
    "pcr.en-GB.md",
    "pcr.en-US.md",
    "pcr.zh-CN.md",
    "pcr.zh-TW.md",
    "release.yaml",
    "structured.yaml",
  ]);
  assert.equal(
    release.artifacts["pcr.zh-TW.md"].sha256,
    byteSha256(readFileSync(path.join(pcrDir, "releases", "1.0.0", "pcr.zh-TW.md"))),
  );
  assert.equal(
    release.artifacts["pcr.en-GB.md"].text,
    readFileSync(path.join(pcrDir, "releases", "1.0.0", "pcr.en-GB.md"), "utf8"),
  );
});

test("the release chain index travels with the bundle and stays byte-exact", (t) => {
  const { root, libraryPath, pcrDir } = createV1Workspace(t);
  publish({ root, pcr: libraryPath, version: "1.0.0" });

  const bundle = readBundle({ root, pcrDir });
  const historyPath = path.join(pcrDir, "release-history.yaml");
  const historyArtifact = bundle.artifacts["release-history.yaml"];

  assert.equal(historyArtifact.path, historyPath);
  assert.equal(historyArtifact.bytes.toString("utf8"), readFileSync(historyPath, "utf8"));
  assert.equal(historyArtifact.sha256, byteSha256(readFileSync(historyPath)));
  assert.deepEqual(parseYaml(historyArtifact.text), bundle.history);
  assert.deepEqual(Object.keys(historyArtifact).sort(), ["bytes", "path", "sha256", "text"]);

  // A history edit is caught, so the returned chain metadata is never mixed.
  writeFileSync(historyPath, `${readFileSync(historyPath, "utf8")}
# appended after publication
`);
  assert.throws(
    () => readBundle({ root, pcrDir }),
    (error) => {
      assert.ok(error instanceof PcrDocumentHistoryError);
      assert.ok(
        error.problems.some((problem) => problem.includes("release-history.yaml")),
        error.problems.join("\n"),
      );
      return true;
    },
  );
});

test("an open revision is reported without exposing its bodies", (t) => {
  const { root, libraryPath, pcrDir } = createV1Workspace(t);
  publish({ root, pcr: libraryPath, version: "1.0.0" });
  revise({ root, pcr: libraryPath, version: "1.1.0" });

  const bundle = readBundle({ root, pcrDir });

  assert.equal(bundle.revisionAvailable, true);
  assert.deepEqual(Object.keys(bundle.artifacts), [
    "manifest.yaml",
    "pcr.en-US.md",
    "pcr.zh-CN.md",
    "structured.yaml",
    "release-history.yaml",
  ]);
  assert.deepEqual(Object.keys(bundle.releases[0].artifacts).sort(), [
    "manifest.snapshot.yaml",
    "pcr.en-US.md",
    "pcr.zh-CN.md",
    "release.yaml",
    "structured.yaml",
  ]);
  for (const artifact of Object.values(bundle.artifacts)) {
    assert.ok(!artifact.path.includes(`${path.sep}revision${path.sep}`));
  }
});

test("a tampered historical artifact fails the read instead of returning mixed bytes", (t) => {
  const { root, libraryPath, pcrDir } = createV1Workspace(t);
  publish({ root, pcr: libraryPath, version: "1.0.0" });
  const chinesePath = path.join(pcrDir, "releases", "1.0.0", "pcr.zh-CN.md");
  writeFileSync(chinesePath, `${readFileSync(chinesePath, "utf8")}tamper\n`);

  assert.throws(
    () => readBundle({ root, pcrDir }),
    (error) => {
      assert.ok(error instanceof PcrDocumentHistoryError);
      assert.equal(error.code, "PCR_DOCUMENT_HISTORY_UNREADABLE");
      assert.ok(
        error.problems.some((problem) =>
          /artifacts\.pcr_zh_cn_sha256 does not match snapshot bytes|pcr\.zh-CN\.md: current file differs/u.test(
            problem,
          ),
        ),
        error.problems.join("\n"),
      );
      return true;
    },
  );
});

test("a release.yaml rewrite is caught by its history fingerprint, not just by identity", (t) => {
  const { root, libraryPath, pcrDir } = createV1Workspace(t);
  publish({ root, pcr: libraryPath, version: "1.0.0" });
  // Rewrite release.yaml with a self-consistent document that keeps every
  // identity field intact, so only the recorded release hash can catch it.
  const releasePath = path.join(pcrDir, "releases", "1.0.0", "release.yaml");
  const release = parseYaml(readFileSync(releasePath, "utf8"));
  writeFileSync(
    releasePath,
    renderYaml({ ...release, predecessor_version: null, publisher_note: "rewritten after inspection" }),
  );

  assert.throws(
    () => readBundle({ root, pcrDir }),
    (error) => {
      assert.ok(error instanceof PcrDocumentHistoryError);
      assert.ok(
        error.problems.some((problem) =>
          /release\.yaml/u.test(problem) && /release_sha256|does not match/u.test(problem),
        ),
        error.problems.join("\n"),
      );
      return true;
    },
  );
});

test("the reader binds every returned release artifact to a recorded fingerprint", (t) => {
  const { root, libraryPath, pcrDir } = createV1Workspace(t);
  publish({ root, pcr: libraryPath, version: "1.0.0" });

  const state = inspectPublishedRevisionState({ root, pcrDir });
  const [release] = state.releases;
  const releaseDir = path.join(pcrDir, "releases", "1.0.0");

  // Each returned file is pinned to a hash the inspector verified: release.yaml
  // through its history entry (the only fingerprint for that file, which the
  // inspector checks against the bytes), and the rest through release.artifacts.
  const fingerprints = releaseFingerprints(release);
  assert.deepEqual(Object.keys(fingerprints).sort(), [
    "manifest.snapshot.yaml",
    "pcr.en-US.md",
    "pcr.zh-CN.md",
    "release.yaml",
    "structured.yaml",
  ]);
  assert.equal(
    fingerprints["release.yaml"],
    parseYaml(readFileSync(path.join(pcrDir, "release-history.yaml"), "utf8")).releases[0].release_sha256,
  );
  for (const [fileName, sha256] of Object.entries(fingerprints)) {
    assert.equal(
      sha256,
      byteSha256(readFileSync(path.join(releaseDir, fileName))),
      `${fileName} must be bound to its recorded hash`,
    );
  }

  // The returned bytes hash to the returned fingerprint, and the returned
  // models parse from exactly those bytes.
  const bundle = readBundle({ root, pcrDir });
  const [returned] = bundle.releases;
  for (const [fileName, sha256] of Object.entries(fingerprints)) {
    assert.equal(returned.artifacts[fileName].sha256, sha256, `${fileName} returned hash`);
    assert.equal(returned.artifacts[fileName].sha256, byteSha256(returned.artifacts[fileName].bytes));
  }
  assert.deepEqual(returned.manifest, parseYaml(returned.artifacts["manifest.snapshot.yaml"].text));
  assert.deepEqual(returned.structured, parseYaml(returned.artifacts["structured.yaml"].text));
});

test("a missing historical artifact fails the read", (t) => {
  const { root, libraryPath, pcrDir } = createV1Workspace(t);
  publish({ root, pcr: libraryPath, version: "1.0.0" });
  rmSync(path.join(pcrDir, "releases", "1.0.0", "structured.yaml"));

  assert.throws(
    () => readBundle({ root, pcrDir }),
    (error) => {
      assert.ok(error instanceof PcrDocumentHistoryError);
      assert.ok(
        error.problems.some((problem) => problem.includes("structured.yaml")),
        error.problems.join("\n"),
      );
      return true;
    },
  );
});

test("a current workspace that no longer matches its release fails the read", (t) => {
  const { root, libraryPath, pcrDir } = createV1Workspace(t);
  publish({ root, pcr: libraryPath, version: "1.0.0" });
  // The current manifest now names a version its immutable release does not own.
  const manifestPath = path.join(pcrDir, "manifest.yaml");
  writeFileSync(
    manifestPath,
    readFileSync(manifestPath, "utf8").replace('version: "1.0.0"', 'version: "9.9.9"'),
  );

  assert.throws(
    () => readBundle({ root, pcrDir }),
    (error) => {
      assert.ok(error instanceof PcrDocumentHistoryError);
      assert.equal(error.code, "PCR_DOCUMENT_HISTORY_UNREADABLE");
      assert.ok(
        error.problems.some((problem) => /version must equal release history current_version/u.test(problem)),
        error.problems.join("\n"),
      );
      return true;
    },
  );
});

test("historical copies are isolated from later current-workspace edits", (t) => {
  const { root, libraryPath, pcrDir } = createV1Workspace(t);
  publish({ root, pcr: libraryPath, version: "1.0.0" });
  const bundle = readBundle({ root, pcrDir });
  const historical = bundle.releases[0].artifacts["pcr.en-US.md"];

  const currentPath = path.join(pcrDir, "pcr.en-US.md");
  writeFileSync(currentPath, `${readFileSync(currentPath, "utf8")}\nEdited after the release.\n`);

  assert.equal(historical.sha256, byteSha256(historical.bytes));
  assert.notEqual(historical.sha256, byteSha256(readFileSync(currentPath)));
  assert.equal(
    bundle.releases[0].artifacts["pcr.en-US.md"].bytes.toString("utf8"),
    historical.bytes.toString("utf8"),
  );
});
