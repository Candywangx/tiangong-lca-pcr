import assert from "node:assert/strict";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  renameSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

import {
  CPC_3_COVERAGE_PATH,
  CPC_3_MAPPING_PATH,
  COVERAGE_SOURCE_DESCRIPTORS,
  buildCatalog,
  buildCoverageIndex,
  buildMaterialIndex,
  buildOrCheckCatalog,
  createCatalogArtifacts,
  staleArtifactIssues,
  writeCatalogArtifacts,
} from "./build-catalog.mjs";
import { readClassificationCoverage } from "../../packages/pcr-core/src/classification-coverage.mjs";
import { renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

test("catalog generator emits the current three-PCR material index and complete CPC coverage", () => {
  const result = createCatalogArtifacts(repositoryRoot);
  const byPath = new Map(result.artifacts.map((artifact) => [artifact.path, artifact.value]));
  const materialIndex = byPath.get("library/indexes/pcr-index.yaml");
  const coverage = byPath.get(CPC_3_COVERAGE_PATH);

  assert.deepEqual(result.issues, []);
  assert.equal(materialIndex.index_kind, "tiangong-pcr-material-catalog");
  assert.equal(materialIndex.summary.total, 3);
  assert.equal(materialIndex.pcrs.length, 3);
  assert.ok(materialIndex.pcrs.every((entry) => entry.status !== "scaffold"));
  assert.ok(materialIndex.pcrs.every((entry) => entry.content_maturity !== "empty_scaffold"));

  assert.deepEqual(coverage.summary, {
    total: 2877,
    mapped: 3,
    unmapped: 2874,
    candidate_suggestion: 0,
    manual_review: 0,
    unknown: 0,
  });
  assert.equal(new Set(coverage.entries.map((entry) => entry.code)).size, 2877);
  assert.equal(coverage.source.contract_version, "1");
  assert.equal(coverage.source.generator, "builder/scripts/build-catalog.mjs");
  assert.equal(coverage.source.generator_version, "1");
  assert.equal(coverage.source.normalized_leaves.hash_mode, "exact_bytes");
  assert.match(coverage.source.normalized_leaves.sha256, /^sha256:[0-9a-f]{64}$/u);
  assert.equal(coverage.source.mapping.hash_mode, "exact_bytes");
  assert.match(coverage.source.mapping.sha256, /^sha256:[0-9a-f]{64}$/u);

  const wheatSeed = coverage.entries.find((entry) => entry.code === "01111");
  assert.equal(wheatSeed.coverage_status, "mapped");
  assert.equal(wheatSeed.mapping.mapping_type, "exact");
  assert.equal(wheatSeed.legacy_reference, null);

  const wheatOther = coverage.entries.find((entry) => entry.code === "01112");
  assert.equal(wheatOther.coverage_status, "unmapped");
  assert.equal(wheatOther.mapping, null);
  assert.equal(wheatOther.legacy_reference.kind, "legacy_scaffold_reference");
});

test("coverage semantics preserve review evidence and surface dangling or conflicting edges", () => {
  const leaf = (code) => ({
    code,
    title: `Leaf ${code}`,
    path_codes: ["0", code],
    path_titles: ["Root", `Leaf ${code}`],
  });
  const mapping = (code, pcrId, mappingType = "exact") => ({
    code,
    label: `Leaf ${code}`,
    pcr_id: pcrId,
    mapping_type: mappingType,
    confidence: "high",
  });
  const result = buildCoverageIndex({
    leavesDocument: {
      classification_system: "CPC",
      classification_version: "3.0",
      leaves: [leaf("1"), leaf("2"), leaf("3"), leaf("4"), leaf("5"), leaf("6")],
    },
    mappingDocument: {
      classification_system: "CPC",
      classification_version: "3.0",
      mappings: [
        mapping("1", "pcr.material"),
        mapping("2", "pcr.scaffold"),
        mapping("3", "pcr.material", "manual_review"),
        mapping("4", "pcr.missing"),
        mapping("5", "pcr.material"),
        mapping("5", "pcr.scaffold"),
        mapping("6", "pcr.invalid"),
      ],
    },
    manifests: [
      {
        path: "library/pcrs/example/material",
        manifest: {
          id: "pcr.material",
          status: "candidate",
          content_maturity: "authored_methodology",
        },
      },
      {
        path: "library/pcrs/example/scaffold",
        manifest: {
          id: "pcr.scaffold",
          status: "scaffold",
          content_maturity: "empty_scaffold",
        },
      },
      {
        path: "library/pcrs/example/invalid",
        manifest: {
          id: "pcr.invalid",
          status: "scaffold",
          content_maturity: "authored_methodology",
        },
      },
    ],
  });
  const byCode = new Map(result.index.entries.map((entry) => [entry.code, entry]));

  assert.equal(byCode.get("1").coverage_status, "mapped");
  assert.equal(byCode.get("2").coverage_status, "unmapped");
  assert.equal(byCode.get("2").legacy_reference.pcr_id, "pcr.scaffold");
  assert.equal(byCode.get("3").coverage_status, "manual_review");
  assert.equal(byCode.get("3").mapping.mapping_type, "manual_review");
  assert.equal(byCode.get("4").coverage_status, "unknown");
  assert.equal(byCode.get("5").coverage_status, "unknown");
  assert.equal(byCode.get("6").coverage_status, "unknown");
  assert.equal(byCode.get("6").mapping.pcr_id, "pcr.invalid");
  assert.ok(result.issues.some((issue) => issue.includes("missing PCR pcr.missing")));
  assert.ok(result.issues.some((issue) => issue.includes("conflicting code 5")));
  assert.ok(
    result.issues.some((issue) =>
      issue.includes("mapping for 6 points to invalid PCR lifecycle pair pcr.invalid"),
    ),
  );
});

test("catalog build refuses dangling mappings before writing any artifact", () => {
  const root = makeCatalogFixture({
    leaves: [fixtureLeaf("1")],
    mappings: [fixtureMapping("1", "pcr.missing")],
  });
  try {
    assert.throws(
      () => buildOrCheckCatalog(root),
      /classification mapping for 1 points to missing PCR pcr\.missing/u,
    );
    assert.equal(existsSync(path.join(root, "library/catalog.yaml")), false);
    assert.equal(existsSync(path.join(root, "library/indexes/pcr-index.yaml")), false);
    assert.equal(existsSync(path.join(root, CPC_3_COVERAGE_PATH)), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("manifest discovery excludes wrong-level records and reports the contract violation", () => {
  const root = makeCatalogFixture({
    manifests: [
      {
        relativeDirectory: "domain/subdomain/canonical",
        manifest: fixtureManifest("pcr.canonical"),
      },
      {
        relativeDirectory: "domain/wrong-level",
        manifest: fixtureManifest("pcr.wrong-level"),
      },
    ],
  });
  try {
    const result = createCatalogArtifacts(root);
    const materialIndex = result.artifacts.find(
      (artifact) => artifact.path === "library/indexes/pcr-index.yaml",
    ).value;

    assert.deepEqual(materialIndex.pcrs.map((entry) => entry.id), ["pcr.canonical"]);
    assert.ok(
      result.issues.some(
        (issue) =>
          issue ===
          "PCR manifest must use library/pcrs/<domain>/<subdomain>/<slug>/manifest.yaml: library/pcrs/domain/wrong-level/manifest.yaml",
      ),
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("material index uses fail-closed methodology, legacy, and invalid lifecycle states", () => {
  const index = buildMaterialIndex([
    {
      path: "library/pcrs/domain/subdomain/status-scaffold",
      manifest: fixtureManifest("pcr.status-scaffold", {
        status: "scaffold",
        content_maturity: "authored_methodology",
      }),
    },
    {
      path: "library/pcrs/domain/subdomain/maturity-empty",
      manifest: fixtureManifest("pcr.maturity-empty", {
        status: "candidate",
        content_maturity: "empty_scaffold",
      }),
    },
    {
      path: "library/pcrs/domain/subdomain/legacy",
      manifest: fixtureManifest("pcr.legacy", {
        status: "scaffold",
        content_maturity: "empty_scaffold",
      }),
    },
  ]);

  assert.deepEqual(index.pcrs.map((entry) => entry.id), []);
  assert.equal(index.summary.total, 0);
});

test("many classification leaves may map to one material PCR without collapsing coverage", () => {
  const methodology = {
    path: "library/pcrs/domain/subdomain/methodology",
    manifest: fixtureManifest("pcr.methodology"),
  };
  const coverage = buildCoverageIndex({
    leavesDocument: {
      classification_system: "CPC",
      classification_version: "3.0",
      leaves: [fixtureLeaf("1"), fixtureLeaf("2")],
    },
    mappingDocument: {
      classification_system: "CPC",
      classification_version: "3.0",
      mappings: [
        fixtureMapping("1", "pcr.methodology"),
        fixtureMapping("2", "pcr.methodology", "broader"),
      ],
    },
    manifests: [methodology],
  });

  assert.equal(buildMaterialIndex([methodology]).summary.total, 1);
  assert.equal(coverage.index.summary.mapped, 2);
  assert.equal(coverage.index.entries.length, 2);
  assert.deepEqual(coverage.issues, []);
});

test("coverage descriptors drive generated artifacts and catalog references", () => {
  const root = makeCatalogFixture();
  const secondDescriptor = {
    classificationSystem: "example",
    classificationVersion: "1.0",
    normalizedLeavesPath: "classifications/systems/example/1.0/normalized/leaves.json",
    mappingPath: "classifications/mappings/example-1.0-to-pcr.yaml",
    coveragePath: "classifications/indexes/example-1.0-coverage.json",
  };
  try {
    writeCoverageSourceFixture(root, secondDescriptor, {
      system: "EXAMPLE",
      version: "1.0",
      leaves: [],
      mappings: [],
    });
    const result = createCatalogArtifacts(root, {
      coverageSources: [...COVERAGE_SOURCE_DESCRIPTORS, secondDescriptor],
    });
    const catalog = result.artifacts.find((artifact) => artifact.path === "library/catalog.yaml").value;

    assert.deepEqual(result.issues, []);
    assert.ok(result.artifacts.some((artifact) => artifact.path === secondDescriptor.coveragePath));
    assert.deepEqual(catalog.classification_coverage_indexes, [
      CPC_3_COVERAGE_PATH,
      secondDescriptor.coveragePath,
    ]);
    assert.deepEqual(catalog.classification_mappings, [
      CPC_3_MAPPING_PATH,
      secondDescriptor.mappingPath,
      "classifications/mappings/cpc-2.1-to-pcr.yaml",
    ]);
    assert.deepEqual(
      buildCatalog([secondDescriptor]).classification_coverage_indexes,
      [secondDescriptor.coveragePath],
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("source byte mutation invalidates runtime reads and deterministic catalog checks", () => {
  const root = makeCatalogFixture({ leaves: [fixtureLeaf("1")] });
  try {
    buildOrCheckCatalog(root);
    assert.equal(
      readClassificationCoverage({ root, system: "cpc", version: "3.0" }).summary.total,
      1,
    );

    const mappingPath = path.join(root, CPC_3_MAPPING_PATH);
    writeFileSync(mappingPath, `${readFileSync(mappingPath, "utf8")}\n`, "utf8");

    assert.throws(
      () => readClassificationCoverage({ root, system: "cpc", version: "3.0" }),
      (error) => {
        assert.equal(error.code, "PCR_INVALID_CLASSIFICATION_COVERAGE");
        assert.ok(
          error.details.issues.some((issue) =>
            issue.includes("source mapping exact-byte SHA-256 mismatch"),
          ),
        );
        return true;
      },
    );
    assert.throws(
      () => buildOrCheckCatalog(root, { checkOnly: true }),
      /classifications\/indexes\/cpc-3\.0-coverage\.json is stale/u,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("runtime coverage reads reject source traversal and symbolic links", () => {
  const traversalRoot = makeCatalogFixture();
  try {
    buildOrCheckCatalog(traversalRoot);
    const coveragePath = path.join(traversalRoot, CPC_3_COVERAGE_PATH);
    const coverage = JSON.parse(readFileSync(coveragePath, "utf8"));
    coverage.source.mapping.path = "../outside-mapping.yaml";
    writeFileSync(coveragePath, `${JSON.stringify(coverage, null, 2)}\n`, "utf8");

    assert.throws(
      () => readClassificationCoverage({ root: traversalRoot, system: "cpc", version: "3.0" }),
      (error) => {
        assert.equal(error.code, "PCR_INVALID_CLASSIFICATION_COVERAGE");
        assert.ok(error.details.issues.some((issue) => issue.includes("escapes the repository root")));
        return true;
      },
    );
  } finally {
    rmSync(traversalRoot, { recursive: true, force: true });
  }

  const symlinkRoot = makeCatalogFixture();
  try {
    buildOrCheckCatalog(symlinkRoot);
    const mappingPath = path.join(symlinkRoot, CPC_3_MAPPING_PATH);
    const realMappingPath = `${mappingPath}.source`;
    renameSync(mappingPath, realMappingPath);
    symlinkSync(path.basename(realMappingPath), mappingPath);

    assert.throws(
      () => readClassificationCoverage({ root: symlinkRoot, system: "cpc", version: "3.0" }),
      (error) => {
        assert.equal(error.code, "PCR_INVALID_CLASSIFICATION_COVERAGE");
        assert.ok(error.details.issues.some((issue) => issue.includes("symbolic link")));
        return true;
      },
    );
  } finally {
    rmSync(symlinkRoot, { recursive: true, force: true });
  }
});

test("catalog check compares deterministic generated bytes", () => {
  const root = mkdtempSync(path.join(os.tmpdir(), "tiangong-catalog-check-"));
  const artifacts = [
    {
      path: "library/index.yaml",
      content: "schema_version: 1\n",
    },
  ];
  try {
    writeCatalogArtifacts(root, artifacts);
    assert.deepEqual(staleArtifactIssues(root, artifacts), []);
    assert.equal(readFileSync(path.join(root, "library/index.yaml"), "utf8"), artifacts[0].content);

    writeFileSync(path.join(root, "library/index.yaml"), "stale: true\n", "utf8");
    assert.deepEqual(staleArtifactIssues(root, artifacts), [
      "library/index.yaml is stale; run npm run catalog:build",
    ]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

function makeCatalogFixture({ leaves = [], mappings = [], manifests = [] } = {}) {
  const root = mkdtempSync(path.join(os.tmpdir(), "tiangong-catalog-fixture-"));
  mkdirSync(path.join(root, "library/pcrs"), { recursive: true });
  writeCoverageSourceFixture(root, COVERAGE_SOURCE_DESCRIPTORS[0], {
    system: "CPC",
    version: "3.0",
    leaves,
    mappings,
  });
  for (const record of manifests) {
    const directory = path.join(root, "library/pcrs", record.relativeDirectory);
    mkdirSync(directory, { recursive: true });
    writeFileSync(path.join(directory, "manifest.yaml"), renderYaml(record.manifest), "utf8");
  }
  return root;
}

function writeCoverageSourceFixture(
  root,
  descriptor,
  { system, version, leaves, mappings },
) {
  const leavesPath = path.join(root, descriptor.normalizedLeavesPath);
  const mappingPath = path.join(root, descriptor.mappingPath);
  mkdirSync(path.dirname(leavesPath), { recursive: true });
  mkdirSync(path.dirname(mappingPath), { recursive: true });
  writeFileSync(
    leavesPath,
    `${JSON.stringify(
      {
        schema_version: 1,
        classification_system: system,
        classification_version: version,
        leaves,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );
  writeFileSync(
    mappingPath,
    renderYaml({
      schema_version: 1,
      classification_system: system,
      classification_version: version,
      status: "scaffold",
      mappings,
    }),
    "utf8",
  );
}

function fixtureLeaf(code) {
  return {
    code,
    title: `Leaf ${code}`,
    path_codes: ["0", code],
    path_titles: ["Root", `Leaf ${code}`],
  };
}

function fixtureMapping(code, pcrId, mappingType = "exact") {
  return {
    code,
    label: `Leaf ${code}`,
    pcr_id: pcrId,
    mapping_type: mappingType,
    confidence: "high",
  };
}

function fixtureManifest(id, overrides = {}) {
  return {
    schema_version: 1,
    id,
    title: { "en-US": `English ${id}`, "zh-CN": `Chinese ${id}` },
    status: "candidate",
    content_maturity: "authored_methodology",
    ...overrides,
  };
}
