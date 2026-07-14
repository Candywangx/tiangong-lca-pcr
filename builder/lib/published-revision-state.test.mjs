import assert from "node:assert/strict";
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import {
  buildReleaseRecord,
  inspectPublishedRevisionState,
  manifestReleaseArtifacts,
} from "./published-revision-state.mjs";

const PCR_ID =
  "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";
const MATERIAL_FIXTURE_DIR = fileURLToPath(
  new URL(
    "../../library/pcrs/agriculture-forestry-and-fishery-products/" +
      "products-of-agriculture-horticulture-and-market-gardening/wheat-seed/",
    import.meta.url,
  ),
);
const MATERIAL_FILES = Object.freeze({
  englishText: readFileSync(path.join(MATERIAL_FIXTURE_DIR, "pcr.en-US.md"), "utf8"),
  chineseText: readFileSync(path.join(MATERIAL_FIXTURE_DIR, "pcr.zh-CN.md"), "utf8"),
  structuredText: readFileSync(path.join(MATERIAL_FIXTURE_DIR, "structured.yaml"), "utf8"),
});

test("accepts an immutable first release whose current files match the snapshot", (t) => {
  const fixture = createPublishedFixture(t);

  const result = inspect(fixture);

  assert.deepEqual(result.problems, []);
  assert.equal(result.history.current_version, "1.0.0");
  assert.equal(result.releases.length, 1);
  assert.equal(result.releases[0].version, "1.0.0");
  assert.equal(result.revision, null);
});

test("detects a one-byte release artifact tamper through its exact byte hash", (t) => {
  const fixture = createPublishedFixture(t);
  const chinesePath = path.join(fixture.pcrDir, "releases", "1.0.0", "pcr.zh-CN.md");
  writeFileSync(chinesePath, `${readFileSync(chinesePath, "utf8")}x`);

  const result = inspect(fixture);

  assert.ok(
    result.problems.some((problem) =>
      problem.includes("artifacts.pcr_zh_cn_sha256 does not match snapshot bytes"),
    ),
    result.problems.join("\n"),
  );
});

test("detects a current release_artifacts hash mismatch", (t) => {
  const fixture = createPublishedFixture(t);
  const manifestPath = path.join(fixture.pcrDir, "manifest.yaml");
  const manifest = readYaml(manifestPath);
  manifest.release_artifacts.structured_sha256 = `sha256:${"0".repeat(64)}`;
  writeFileSync(manifestPath, renderYaml(manifest));

  const result = inspect(fixture);

  assert.ok(
    result.problems.some((problem) =>
      problem.includes("release_artifacts do not match current bytes"),
    ),
    result.problems.join("\n"),
  );
});

test("enforces release-history predecessor links", (t) => {
  const fixture = createPublishedFixture(t, { versions: ["1.0.0", "1.1.0"] });
  const historyPath = path.join(fixture.pcrDir, "release-history.yaml");
  const history = readYaml(historyPath);
  history.releases[1].predecessor_version = null;
  writeFileSync(historyPath, renderYaml(history));

  const result = inspect(fixture);

  assert.ok(
    result.problems.some((problem) =>
      problem.includes("release 1.1.0 predecessor_version must be 1.0.0"),
    ),
    result.problems.join("\n"),
  );
});

test("enforces strictly increasing release-history version order", (t) => {
  const fixture = createPublishedFixture(t, { versions: ["1.1.0", "1.0.0"] });

  const result = inspect(fixture);

  assert.ok(
    result.problems.some((problem) =>
      problem.includes("release 1.0.0 version must be greater than 1.1.0"),
    ),
    result.problems.join("\n"),
  );
});

test("reports malformed release versions without resolving paths outside releases", (t) => {
  const fixture = createPublishedFixture(t);
  const historyPath = path.join(fixture.pcrDir, "release-history.yaml");
  const history = readYaml(historyPath);
  history.current_version = "../../outside";
  history.releases[0].version = "../../outside";
  history.releases[0].path = "releases/../../outside";
  writeFileSync(historyPath, renderYaml(history));

  const result = inspect(fixture);

  assert.ok(
    result.problems.some((problem) =>
      problem.includes("is not a valid SemVer directory identity"),
    ),
    result.problems.join("\n"),
  );
});

test("reports a schema-invalid release history without throwing during semantic inspection", (t) => {
  const fixture = createPublishedFixture(t);
  const historyPath = path.join(fixture.pcrDir, "release-history.yaml");
  const history = readYaml(historyPath);
  history.releases = { invalid: "not-an-array" };
  writeFileSync(historyPath, renderYaml(history));

  let result;
  assert.doesNotThrow(() => {
    result = inspect(fixture);
  });
  assert.equal(result.releases.length, 0);
  assert.ok(
    result.problems.some((problem) =>
      problem.includes("release history schema /releases must be array"),
    ),
    result.problems.join("\n"),
  );
});

test("rejects manifest.yaml inside a reserved managed-state subtree", (t) => {
  const fixture = createPublishedFixture(t);
  writeFileSync(
    path.join(fixture.pcrDir, "releases", "1.0.0", "manifest.yaml"),
    "id: pcr.shadow\n",
  );

  const result = inspect(fixture);

  assert.ok(
    result.problems.some((problem) =>
      problem.includes("reserved subtrees must not contain manifest.yaml"),
    ),
    result.problems.join("\n"),
  );
});

test("accepts a revision whose base, target, identity, and exact file set are valid", (t) => {
  const fixture = createPublishedFixture(t);
  createRevision(fixture);

  const result = inspect(fixture);

  assert.deepEqual(result.problems, []);
  assert.equal(result.revision.revision.base_version, "1.0.0");
  assert.equal(result.revision.revision.target_version, "1.1.0");
  assert.equal(result.revision.nextManifest.status, "candidate");
});

test("rejects revision base and target versions that break release lineage", async (t) => {
  await t.test("base must equal current release", (subtest) => {
    const fixture = createPublishedFixture(subtest);
    createRevision(fixture, { revision: { base_version: "0.9.0" } });

    const result = inspect(fixture);

    assert.ok(
      result.problems.some((problem) =>
        problem.includes("revision base_version must be 1.0.0; found 0.9.0"),
      ),
      result.problems.join("\n"),
    );
  });

  await t.test("target must be greater than base", (subtest) => {
    const fixture = createPublishedFixture(subtest);
    createRevision(fixture, {
      revision: { target_version: "1.0.0" },
      nextManifest: { version: "1.0.0" },
    });

    const result = inspect(fixture);

    assert.ok(
      result.problems.some((problem) =>
        problem.includes("target_version must be greater than base_version"),
      ),
      result.problems.join("\n"),
    );
    assert.ok(
      result.problems.some((problem) => problem.includes("target_version already exists")),
      result.problems.join("\n"),
    );
  });
});

test("rejects extra files in the revision workspace", (t) => {
  const fixture = createPublishedFixture(t);
  const revisionDir = createRevision(fixture);
  writeFileSync(path.join(revisionDir, "review-notes.md"), "not part of the revision contract\n");

  const result = inspect(fixture);

  assert.ok(
    result.problems.some((problem) =>
      problem.includes("revision directory must contain exactly"),
    ),
    result.problems.join("\n"),
  );
});

test("rejects reopening a revision from deprecated current state", (t) => {
  const fixture = createPublishedFixture(t);
  createRevision(fixture);
  const manifestPath = path.join(fixture.pcrDir, "manifest.yaml");
  const manifest = readYaml(manifestPath);
  manifest.status = "deprecated";
  manifest.content_maturity = "deprecated_methodology";
  writeFileSync(manifestPath, renderYaml(manifest));

  const result = inspect(fixture);

  assert.ok(
    result.problems.some((problem) =>
      problem.includes("an open revision requires published current state"),
    ),
    result.problems.join("\n"),
  );
});

function createPublishedFixture(t, { versions = ["1.0.0"] } = {}) {
  const root = mkdtempSync(path.join(tmpdir(), "pcr-published-state-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const pcrDir = path.join(root, "library", "pcrs", "example", "product", "wheat-seed");
  mkdirSync(pcrDir, { recursive: true });
  mkdirSync(path.join(pcrDir, "releases"));

  const baseManifest = readYaml(path.join(MATERIAL_FIXTURE_DIR, "manifest.yaml"));
  const releases = [];
  let latestManifest = null;
  let latestManifestText = null;
  for (const [index, version] of versions.entries()) {
    const publishedAtUtc = `2026-07-${String(index + 1).padStart(2, "0")}T00:00:00Z`;
    const manifest = {
      ...baseManifest,
      version,
      updated_at_utc: publishedAtUtc,
      published_at_utc: publishedAtUtc,
      status: "published",
      content_maturity: "published_methodology",
      translation_status: { ...baseManifest.translation_status, "zh-CN": "reviewed" },
      release_artifacts: manifestReleaseArtifacts(MATERIAL_FILES),
    };
    const manifestText = renderYaml(manifest);
    const predecessorVersion = versions[index - 1] ?? null;
    const releaseRecord = buildReleaseRecord({
      pcrId: PCR_ID,
      version,
      publishedAtUtc,
      predecessorVersion,
      manifestText,
      ...MATERIAL_FILES,
    });
    const releaseDir = path.join(pcrDir, "releases", version);
    mkdirSync(releaseDir);
    writeFileSync(path.join(releaseDir, "manifest.snapshot.yaml"), manifestText);
    writeFileSync(path.join(releaseDir, "pcr.en-US.md"), MATERIAL_FILES.englishText);
    writeFileSync(path.join(releaseDir, "pcr.zh-CN.md"), MATERIAL_FILES.chineseText);
    writeFileSync(path.join(releaseDir, "structured.yaml"), MATERIAL_FILES.structuredText);
    writeFileSync(path.join(releaseDir, "release.yaml"), releaseRecord.releaseText);
    releases.push(releaseRecord.historyEntry);
    latestManifest = manifest;
    latestManifestText = manifestText;
  }

  writeFileSync(path.join(pcrDir, "manifest.yaml"), latestManifestText);
  writeFileSync(path.join(pcrDir, "pcr.en-US.md"), MATERIAL_FILES.englishText);
  writeFileSync(path.join(pcrDir, "pcr.zh-CN.md"), MATERIAL_FILES.chineseText);
  writeFileSync(path.join(pcrDir, "structured.yaml"), MATERIAL_FILES.structuredText);
  writeFileSync(
    path.join(pcrDir, "release-history.yaml"),
    renderYaml({
      schema_version: 1,
      pcr_id: PCR_ID,
      current_version: versions.at(-1),
      releases,
    }),
  );

  return { root, pcrDir, manifest: latestManifest };
}

function createRevision(
  fixture,
  { revision: revisionOverrides = {}, nextManifest: nextManifestOverrides = {} } = {},
) {
  const revisionDir = path.join(fixture.pcrDir, "revision");
  mkdirSync(revisionDir);
  const revision = {
    schema_version: 1,
    pcr_id: PCR_ID,
    base_version: fixture.manifest.version,
    target_version: "1.1.0",
    opened_at_utc: "2026-07-14T12:34:56Z",
    ...revisionOverrides,
  };
  const nextManifest = {
    ...fixture.manifest,
    version: revision.target_version,
    updated_at_utc: revision.opened_at_utc,
    status: "candidate",
    content_maturity: "authored_methodology",
    translation_status: { ...fixture.manifest.translation_status, "zh-CN": "out_of_sync" },
    ...nextManifestOverrides,
  };
  delete nextManifest.published_at_utc;
  delete nextManifest.release_artifacts;

  writeFileSync(path.join(revisionDir, "revision.yaml"), renderYaml(revision));
  writeFileSync(path.join(revisionDir, "manifest.next.yaml"), renderYaml(nextManifest));
  writeFileSync(path.join(revisionDir, "pcr.en-US.md"), MATERIAL_FILES.englishText);
  writeFileSync(path.join(revisionDir, "pcr.zh-CN.md"), MATERIAL_FILES.chineseText);
  writeFileSync(path.join(revisionDir, "structured.yaml"), MATERIAL_FILES.structuredText);
  return revisionDir;
}

function inspect(fixture) {
  return inspectPublishedRevisionState({ root: fixture.root, pcrDir: fixture.pcrDir });
}

function readYaml(filePath) {
  return parseYaml(readFileSync(filePath, "utf8"));
}
