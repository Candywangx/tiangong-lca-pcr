import assert from "node:assert/strict";
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test, { type TestContext } from "node:test";
import { fileURLToPath } from "node:url";

import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.ts";
import type { YamlObject, YamlValue } from "../../packages/pcr-core/src/yaml-lite.ts";

// Validate the exact API and observed result fields of the untyped module.
const stateModule: unknown = await import(new URL("./published-revision-state.mjs", import.meta.url).href);
interface Fixture { root: string; pcrDir: string; manifest: YamlObject; }
interface Inspection {
  problems: string[]; warnings: string[];
  history: Record<string, unknown> | null;
  revision: { revision: Record<string, unknown>; nextManifest: Record<string, unknown> } | null;
  releases: { version: string }[];
}
interface ReleaseInput {
  pcrId: string; version: string; publishedAtUtc: string; predecessorVersion: string | null;
  manifestText: string; englishText: string; chineseText: string; structuredText: string;
}
function record(value: unknown): Record<string, unknown> {
  assert.ok(value !== null && typeof value === "object" && !Array.isArray(value));
  return value as Record<string, unknown>;
}
function strings(value: unknown): string[] {
  assert.ok(Array.isArray(value) && value.every((entry: unknown) => typeof entry === "string"));
  return value as string[];
}
function string(value: unknown): string {
  assert.equal(typeof value, "string");
  return value as string;
}
function callable(value: unknown): value is (...args: unknown[]) => unknown { return typeof value === "function"; }
type LegacyExport = "buildReleaseRecord" | "byteSha256" | "manifestReleaseArtifacts" | "inspectPublishedRevisionState";
function call(name: LegacyExport, ...args: unknown[]): unknown {
  const fn = record(stateModule)[name];
  assert.ok(callable(fn), `legacy export ${name} must be callable`);
  return fn(...args);
}
function yamlObject(value: YamlValue | undefined): YamlObject {
  assert.ok(value !== null && value !== undefined && typeof value === "object" && !Array.isArray(value));
  return value;
}
function yamlArray(value: YamlValue | undefined): YamlValue[] { assert.ok(Array.isArray(value)); return value; }
function buildReleaseRecord(input: ReleaseInput): { releaseText: string; historyEntry: YamlObject } {
  const result = record(call("buildReleaseRecord", input));
  const releaseText = string(result["releaseText"]);
  const history = record(result["historyEntry"]);
  const predecessor = history["predecessor_version"];
  assert.ok(predecessor === null || typeof predecessor === "string");
  const historyEntry: YamlObject = {
    version: string(history["version"]),
    published_at_utc: string(history["published_at_utc"]),
    predecessor_version: predecessor,
    path: string(history["path"]),
    release_sha256: string(history["release_sha256"]),
  };
  return { releaseText, historyEntry };
}
function byteSha256(input: string | Uint8Array): string { return string(call("byteSha256", input)); }
function manifestReleaseArtifacts(input: { englishText: string; chineseText: string; structuredText: string }): YamlObject {
  const result = record(call("manifestReleaseArtifacts", input));
  return {
    pcr_en_us_sha256: string(result["pcr_en_us_sha256"]),
    pcr_zh_cn_sha256: string(result["pcr_zh_cn_sha256"]),
    structured_sha256: string(result["structured_sha256"]),
  };
}
function assertAuditRejected(result: Inspection, fixture: Fixture, filename: string, code: string): void {
  const relative = path.relative(fixture.root, filename).replaceAll(path.sep, "/");
  assert.ok(result.problems.some(problem =>
    problem.startsWith(`${relative}: invalid YAML (${code}:`) && /\(\d+:\d+\)\)$/u.test(problem)),
    result.problems.join("\n"));
}

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
  assert.equal(result.history?.current_version, "1.0.0");
  assert.equal(result.releases.length, 1);
  assert.equal(result.releases[0]?.version, "1.0.0");
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

test("hashes raw artifact bytes and rejects malformed UTF-8 instead of replacing it", (t) => {
  assert.notEqual(
    byteSha256(Buffer.from([0xff])),
    byteSha256(Buffer.from("\uFFFD", "utf8")),
    "raw 0xff must not hash as the UTF-8 replacement character",
  );

  const fixture = createPublishedFixture(t);
  const chinesePath = path.join(fixture.pcrDir, "releases", "1.0.0", "pcr.zh-CN.md");
  writeFileSync(
    chinesePath,
    Buffer.concat([readFileSync(chinesePath), Buffer.from([0xff])]),
  );

  const result = inspect(fixture);

  assert.ok(
    result.problems.some((problem) =>
      problem.includes("pcr.zh-CN.md: required artifact is not valid UTF-8"),
    ),
    result.problems.join("\n"),
  );
});

test("binds snapshot manifest release_artifacts to the same exact bytes as release.yaml", (t) => {
  const fixture = createPublishedFixture(t);
  const snapshotPath = path.join(
    fixture.pcrDir,
    "releases",
    "1.0.0",
    "manifest.snapshot.yaml",
  );
  const snapshot = readYaml(snapshotPath);
  yamlObject(snapshot.release_artifacts).pcr_en_us_sha256 = `sha256:${"0".repeat(64)}`;
  writeFileSync(snapshotPath, renderYaml(snapshot));

  const result = inspect(fixture);

  assert.ok(
    result.problems.some((problem) =>
      problem.includes("manifest.snapshot.yaml: release_artifacts do not match snapshot artifact bytes"),
    ),
    result.problems.join("\n"),
  );
  assert.ok(
    result.problems.some((problem) =>
      problem.includes("release.yaml: artifact hashes must match manifest.snapshot.yaml release_artifacts"),
    ),
    result.problems.join("\n"),
  );
});

test("detects a current release_artifacts hash mismatch", (t) => {
  const fixture = createPublishedFixture(t);
  const manifestPath = path.join(fixture.pcrDir, "manifest.yaml");
  const manifest = readYaml(manifestPath);
  yamlObject(manifest.release_artifacts).structured_sha256 = `sha256:${"0".repeat(64)}`;
  writeFileSync(manifestPath, renderYaml(manifest));

  const result = inspect(fixture);

  assert.ok(
    result.problems.some((problem) =>
      problem.includes("release_artifacts do not match current bytes"),
    ),
    result.problems.join("\n"),
  );
});

test("deprecated current manifests must retain canonical builder rendering", (t) => {
  const fixture = createPublishedFixture(t);
  const manifestPath = path.join(fixture.pcrDir, "manifest.yaml");
  const manifest = readYaml(manifestPath);
  manifest.status = "deprecated";
  manifest.content_maturity = "deprecated_methodology";
  manifest.updated_at_utc = "2026-07-14T12:34:56Z";
  writeFileSync(manifestPath, renderYaml(manifest));
  assert.deepEqual(inspect(fixture).problems, []);

  writeFileSync(manifestPath, `# manual formatting change\n${renderYaml(manifest)}`);
  const result = inspect(fixture);

  assert.ok(
    result.problems.some((problem) =>
      problem.includes("deprecated manifest bytes must equal the canonical lifecycle overlay"),
    ),
    result.problems.join("\n"),
  );
});

test("enforces release-history predecessor links", (t) => {
  const fixture = createPublishedFixture(t, { versions: ["1.0.0", "1.1.0"] });
  const historyPath = path.join(fixture.pcrDir, "release-history.yaml");
  const history = readYaml(historyPath);
  yamlObject(yamlArray(history.releases)[1]).predecessor_version = null;
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

test("rejects calendar-normalized audit timestamps such as February 31", (t) => {
  const fixture = createPublishedFixture(t);
  const historyPath = path.join(fixture.pcrDir, "release-history.yaml");
  const history = readYaml(historyPath);
  yamlObject(yamlArray(history.releases)[0]).published_at_utc = "2026-02-31T00:00:00Z";
  writeFileSync(historyPath, renderYaml(history));

  const result = inspect(fixture);

  assert.ok(
    result.problems.some((problem) =>
      problem.includes("published_at_utc is not a real canonical UTC timestamp"),
    ),
    result.problems.join("\n"),
  );
});

test("reports malformed release versions without resolving paths outside releases", (t) => {
  const fixture = createPublishedFixture(t);
  const historyPath = path.join(fixture.pcrDir, "release-history.yaml");
  const history = readYaml(historyPath);
  history.current_version = "../../outside";
  yamlObject(yamlArray(history.releases)[0]).version = "../../outside";
  yamlObject(yamlArray(history.releases)[0]).path = "releases/../../outside";
  writeFileSync(historyPath, renderYaml(history));

  const result = inspect(fixture);

  assert.ok(
    result.problems.some((problem) =>
      problem.includes("is not a valid SemVer directory identity"),
    ),
    result.problems.join("\n"),
  );
});

test("rejects invalid numeric SemVer prerelease tokens in revision metadata", (t) => {
  const fixture = createPublishedFixture(t);
  createRevision(fixture, {
    revision: { target_version: "1.1.0-01" },
    nextManifest: { version: "1.1.0-01" },
  });

  const result = inspect(fixture);

  assert.ok(
    result.problems.some((problem) =>
      problem.includes("target_version is not a valid SemVer identity"),
    ),
    result.problems.join("\n"),
  );
});

test("rejects non-canonical audit YAML so duplicate keys and trailing content fail closed", async (t) => {
  await t.test("release metadata duplicate key", (subtest) => {
    const fixture = createPublishedFixture(subtest);
    const releasePath = path.join(fixture.pcrDir, "releases", "1.0.0", "release.yaml");
    writeFileSync(releasePath, `${readFileSync(releasePath, "utf8")}version: "1.0.0"\n`);

    const result = inspect(fixture);

    assertAuditRejected(result, fixture, releasePath, "YAML_DUPLICATE_KEY");
    assert.equal(result.releases.length, 0);
  });

  await t.test("release history trailing content", (subtest) => {
    const fixture = createPublishedFixture(subtest);
    const historyPath = path.join(fixture.pcrDir, "release-history.yaml");
    writeFileSync(historyPath, `${readFileSync(historyPath, "utf8")}not valid audit yaml\n`);

    const result = inspect(fixture);

    assertAuditRejected(result, fixture, historyPath, "YAML_MISSING_CHAR");
    assert.equal(result.history, null);
  });

  await t.test("snapshot manifest duplicate key", (subtest) => {
    const fixture = createPublishedFixture(subtest);
    const snapshotPath = path.join(
      fixture.pcrDir,
      "releases",
      "1.0.0",
      "manifest.snapshot.yaml",
    );
    writeFileSync(snapshotPath, `${readFileSync(snapshotPath, "utf8")}version: "1.0.0"\n`);

    const result = inspect(fixture);

    assertAuditRejected(result, fixture, snapshotPath, "YAML_DUPLICATE_KEY");
    assert.equal(result.releases.length, 0);
  });

  await t.test("revision metadata duplicate key", (subtest) => {
    const fixture = createPublishedFixture(subtest);
    const revisionDir = createRevision(fixture);
    const revisionPath = path.join(revisionDir, "revision.yaml");
    writeFileSync(
      revisionPath,
      `${readFileSync(revisionPath, "utf8")}target_version: "1.1.0"\n`,
    );

    const result = inspect(fixture);

    assertAuditRejected(result, fixture, revisionPath, "YAML_DUPLICATE_KEY");
    assert.equal(result.revision, null);
  });

  await t.test("next manifest trailing content", (subtest) => {
    const fixture = createPublishedFixture(subtest);
    const revisionDir = createRevision(fixture);
    const nextManifestPath = path.join(revisionDir, "manifest.next.yaml");
    writeFileSync(
      nextManifestPath,
      `${readFileSync(nextManifestPath, "utf8")}not valid audit yaml\n`,
    );

    const result = inspect(fixture);

    assertAuditRejected(result, fixture, nextManifestPath, "YAML_MISSING_CHAR");
    assert.equal(result.revision, null);
  });
});

test("reports a schema-invalid release history without throwing during semantic inspection", (t) => {
  const fixture = createPublishedFixture(t);
  const historyPath = path.join(fixture.pcrDir, "release-history.yaml");
  const history = readYaml(historyPath);
  history.releases = { invalid: "not-an-array" };
  writeFileSync(historyPath, renderYaml(history));

  const observed: { result: Inspection | null } = { result: null };
  assert.doesNotThrow(() => {
    observed.result = inspect(fixture);
  });
  const result = observed.result;
  assert.ok(result, "semantic inspection must return its fail-closed report");
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
  assert.equal(result.revision?.revision.base_version, "1.0.0");
  assert.equal(result.revision?.revision.target_version, "1.1.0");
  assert.equal(result.revision?.nextManifest.status, "candidate");
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

function createPublishedFixture(t: TestContext, { versions = ["1.0.0"] }: { versions?: string[] } = {}): Fixture {
  assert.ok(versions.length > 0, "published fixture requires a release");
  const root = realpathSync(mkdtempSync(path.join(tmpdir(), "pcr-published-state-")));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const pcrDir = path.join(root, "library", "pcrs", "example", "product", "wheat-seed");
  mkdirSync(pcrDir, { recursive: true });
  mkdirSync(path.join(pcrDir, "releases"));

  const baseManifest = readYaml(path.join(MATERIAL_FIXTURE_DIR, "manifest.yaml"));
  const releases: YamlObject[] = [];
  let latestManifest: YamlObject | null = null;
  let latestManifestText: string | null = null;
  for (const [index, version] of versions.entries()) {
    const publishedAtUtc = `2026-07-${String(index + 1).padStart(2, "0")}T00:00:00Z`;
    const manifest: YamlObject = {
      ...baseManifest,
      version,
      updated_at_utc: publishedAtUtc,
      published_at_utc: publishedAtUtc,
      status: "published",
      content_maturity: "published_methodology",
      translation_status: { ...yamlObject(baseManifest.translation_status), "zh-CN": "reviewed" },
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

  assert.ok(latestManifest && latestManifestText !== null);
  writeFileSync(path.join(pcrDir, "manifest.yaml"), latestManifestText);
  writeFileSync(path.join(pcrDir, "pcr.en-US.md"), MATERIAL_FILES.englishText);
  writeFileSync(path.join(pcrDir, "pcr.zh-CN.md"), MATERIAL_FILES.chineseText);
  writeFileSync(path.join(pcrDir, "structured.yaml"), MATERIAL_FILES.structuredText);
  writeFileSync(
    path.join(pcrDir, "release-history.yaml"),
    renderYaml({
      schema_version: 1,
      pcr_id: PCR_ID,
      current_version: versions.at(-1) ?? "",
      releases,
    }),
  );

  return { root, pcrDir, manifest: latestManifest };
}

function createRevision(
  fixture: Fixture,
  { revision: revisionOverrides = {}, nextManifest: nextManifestOverrides = {} }: { revision?: YamlObject; nextManifest?: YamlObject } = {},
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
  const nextManifest: YamlObject = {
    ...fixture.manifest,
    version: revision.target_version,
    updated_at_utc: revision.opened_at_utc,
    status: "candidate",
    content_maturity: "authored_methodology",
    translation_status: { ...yamlObject(fixture.manifest.translation_status), "zh-CN": "out_of_sync" },
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

function inspect(fixture: Fixture): Inspection {
  const result = record(call("inspectPublishedRevisionState", { root: fixture.root, pcrDir: fixture.pcrDir }));
  const rawRevision = result["revision"];
  const revision = rawRevision === null ? null : record(rawRevision);
  const rawHistory = result["history"];
  const releases = result["releases"];
  assert.ok(Array.isArray(releases));
  return {
    problems: strings(result["problems"]), warnings: strings(result["warnings"]),
    history: rawHistory === null ? null : record(rawHistory),
    revision: revision === null ? null : { revision: record(revision["revision"]), nextManifest: record(revision["nextManifest"]) },
    releases: releases.map((entry: unknown) => ({ version: string(record(entry)["version"]) })),
  };
}

function readYaml(filePath: string): YamlObject {
  return yamlObject(parseYaml(readFileSync(filePath, "utf8")));
}
