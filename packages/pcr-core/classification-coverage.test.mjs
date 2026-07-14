import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { readClassificationCoverage } from "./src/classification-coverage.mjs";

const normalizedLeavesPath = "classifications/systems/cpc/3.0/normalized/leaves.json";
const mappingPath = "classifications/mappings/cpc-3.0-to-pcr.yaml";
const coveragePath = "classifications/indexes/cpc-3.0-coverage.json";

test("coverage sources are bound to canonical paths derived from the classification coordinate", () => {
  const root = createCoverageFixture();
  try {
    const alternateLeavesPath = "classifications/systems/cpc/3.0/alternate/leaves.json";
    const alternateMappingPath = "classifications/alternate/cpc-3.0-to-pcr.yaml";
    writeRepositoryFile(root, alternateLeavesPath, readFileSync(path.join(root, normalizedLeavesPath)));
    writeRepositoryFile(root, alternateMappingPath, readFileSync(path.join(root, mappingPath)));
    rewriteCoverage(root, (coverage) => {
      coverage.source.normalized_leaves = sourceArtifact(root, alternateLeavesPath);
      coverage.source.mapping = sourceArtifact(root, alternateMappingPath);
    });

    assert.throws(
      () => readCoverage(root),
      (error) => {
        assert.equal(error.code, "PCR_INVALID_CLASSIFICATION_COVERAGE");
        assert.ok(
          error.details.issues.some(
            (issue) => issue.includes("source normalized_leaves path")
              && issue.includes(`canonical path ${normalizedLeavesPath}`),
          ),
        );
        assert.ok(
          error.details.issues.some(
            (issue) => issue.includes("source mapping path")
              && issue.includes(`canonical path ${mappingPath}`),
          ),
        );
        return true;
      },
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("coverage source reads reject canonical-path symbolic links", () => {
  const root = createCoverageFixture();
  const outsideRoot = mkdtempSync(path.join(tmpdir(), "tiangong-coverage-outside-"));
  try {
    const canonicalMapping = path.join(root, mappingPath);
    const outsideMapping = path.join(outsideRoot, "mapping.yaml");
    writeFileSync(outsideMapping, readFileSync(canonicalMapping));
    rmSync(canonicalMapping);
    symlinkSync(outsideMapping, canonicalMapping);

    assert.throws(
      () => readCoverage(root),
      (error) => error.code === "PCR_INVALID_CLASSIFICATION_COVERAGE"
        && error.details.issues.some((issue) => issue.includes("contains a symbolic link")),
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
    rmSync(outsideRoot, { recursive: true, force: true });
  }
});

test("coverage source reads preserve exact-byte hash validation", () => {
  const root = createCoverageFixture();
  try {
    writeFileSync(path.join(root, mappingPath), "changed: true\n");

    assert.throws(
      () => readCoverage(root),
      (error) => error.code === "PCR_INVALID_CLASSIFICATION_COVERAGE"
        && error.details.issues.some((issue) => issue.includes("exact-byte SHA-256 mismatch")),
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("coverage source reads reject invalid UTF-8 even when the exact-byte hash matches", () => {
  const root = createCoverageFixture();
  try {
    writeFileSync(path.join(root, mappingPath), Buffer.from([0xff, 0xfe, 0xfd]));
    rewriteCoverage(root, (coverage) => {
      coverage.source.mapping = sourceArtifact(root, mappingPath);
    });

    assert.throws(
      () => readCoverage(root),
      (error) => error.code === "PCR_INVALID_CLASSIFICATION_COVERAGE"
        && error.details.issues.some((issue) => issue.includes("is not valid UTF-8")),
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("coverage source reads reject FIFOs without waiting for a writer", (t) => {
  const root = createCoverageFixture();
  try {
    const canonicalMapping = path.join(root, mappingPath);
    rmSync(canonicalMapping);
    const created = spawnSync("mkfifo", [canonicalMapping], { encoding: "utf8" });
    if (created.status !== 0) {
      t.skip(`mkfifo is unavailable: ${created.stderr || created.error?.message || "unknown error"}`);
      return;
    }

    const startedAt = Date.now();
    assert.throws(
      () => readCoverage(root),
      (error) => error.code === "PCR_INVALID_CLASSIFICATION_COVERAGE"
        && error.details.issues.some((issue) => issue.includes("is not a regular file")),
    );
    assert.ok(Date.now() - startedAt < 1_000);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("coverage projection cannot erase a canonical mapped edge as unmapped", () => {
  const root = createMappedCoverageFixture();
  try {
    rewriteCoverage(root, (coverage) => {
      coverage.entries[0].coverage_status = "unmapped";
      coverage.entries[0].mapping = null;
      coverage.summary.mapped = 0;
      coverage.summary.unmapped = 1;
    });

    assertProjectionFailure(root, "does not represent its canonical mapping edge");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("coverage projection cannot downgrade a retained canonical mapping to unknown", () => {
  const root = createMappedCoverageFixture();
  try {
    rewriteCoverage(root, (coverage) => {
      coverage.entries[0].coverage_status = "unknown";
      coverage.summary.mapped = 0;
      coverage.summary.unknown = 1;
    });

    assertProjectionFailure(
      root,
      "coverage_status unknown does not match canonical mapping projection mapped",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("coverage projection cannot drift canonical mapping relation or PCR identity", () => {
  for (const [field, replacement] of [
    ["mapping_type", "broader"],
    ["pcr_id", "pcr.example.other-target"],
  ]) {
    const root = createMappedCoverageFixture();
    try {
      rewriteCoverage(root, (coverage) => {
        coverage.entries[0].mapping[field] = replacement;
      });

      assertProjectionFailure(root, `mapping.${field} does not match canonical mapping`);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  }
});

test("coverage projection inventory cannot remove or invent leaves while source hashes remain valid", () => {
  const removedRoot = createMappedCoverageFixture();
  try {
    rewriteCoverage(removedRoot, (coverage) => {
      coverage.entries = [];
      coverage.summary.total = 0;
      coverage.summary.mapped = 0;
    });
    assertProjectionFailure(removedRoot, "missing normalized leaf 01111");
  } finally {
    rmSync(removedRoot, { recursive: true, force: true });
  }

  const addedRoot = createMappedCoverageFixture();
  try {
    rewriteCoverage(addedRoot, (coverage) => {
      coverage.entries.push({
        code: "99999",
        label: "Invented leaf",
        path_codes: ["9", "99999"],
        path_titles: ["Invented", "Invented leaf"],
        coverage_status: "unmapped",
        mapping: null,
        legacy_reference: null,
      });
      coverage.summary.total = 2;
      coverage.summary.unmapped = 1;
    });
    assertProjectionFailure(addedRoot, "code 99999 absent from normalized leaves");
  } finally {
    rmSync(addedRoot, { recursive: true, force: true });
  }
});

test("coverage leaf labels and paths are projections of canonical normalized leaves", () => {
  const root = createMappedCoverageFixture();
  try {
    rewriteCoverage(root, (coverage) => {
      coverage.entries[0].label = "Substituted label";
      coverage.entries[0].path_codes = ["x", "xx", "xxx", "xxxx", "01111"];
    });

    assertProjectionFailure(root, "label does not match normalized leaf title");
    assertProjectionFailure(root, "path_codes do not match normalized leaf path_codes");
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

function createCoverageFixture() {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-coverage-source-"));
  writeRepositoryFile(
    root,
    normalizedLeavesPath,
    `${JSON.stringify({
      classification_system: "CPC",
      classification_version: "3.0",
      leaves: [],
    }, null, 2)}\n`,
  );
  writeRepositoryFile(
    root,
    mappingPath,
    `schema_version: 1
classification_system: CPC
classification_version: "3.0"
mappings: []
`,
  );
  const coverage = {
    schema_version: 1,
    index_kind: "classification-pcr-coverage",
    classification_system: "CPC",
    classification_version: "3.0",
    source: {
      contract_version: "1",
      generator: "builder/scripts/build-catalog.mjs",
      generator_version: "1",
      normalized_leaves: sourceArtifact(root, normalizedLeavesPath),
      mapping: sourceArtifact(root, mappingPath),
    },
    summary: {
      total: 0,
      mapped: 0,
      unmapped: 0,
      candidate_suggestion: 0,
      manual_review: 0,
      unknown: 0,
    },
    entries: [],
  };
  writeRepositoryFile(root, coveragePath, `${JSON.stringify(coverage, null, 2)}\n`);
  return root;
}

function createMappedCoverageFixture() {
  const root = createCoverageFixture();
  writeRepositoryFile(
    root,
    normalizedLeavesPath,
    `${JSON.stringify({
      classification_system: "CPC",
      classification_version: "3.0",
      leaves: [
        {
          code: "01111",
          title: "Wheat, seed",
          path_codes: ["0", "01", "011", "0111", "01111"],
          path_titles: ["Agriculture", "Crops", "Cereals", "Wheat", "Wheat, seed"],
        },
      ],
    }, null, 2)}\n`,
  );
  writeRepositoryFile(
    root,
    mappingPath,
    `schema_version: 1
classification_system: CPC
classification_version: "3.0"
mappings:
  - code: "01111"
    label: "Wheat, seed"
    pcr_id: "pcr.example.wheat-seed"
    mapping_type: exact
    confidence: high
`,
  );
  rewriteCoverage(root, (coverage) => {
    coverage.source.normalized_leaves = sourceArtifact(root, normalizedLeavesPath);
    coverage.source.mapping = sourceArtifact(root, mappingPath);
    coverage.summary = {
      total: 1,
      mapped: 1,
      unmapped: 0,
      candidate_suggestion: 0,
      manual_review: 0,
      unknown: 0,
    };
    coverage.entries = [
      {
        code: "01111",
        label: "Wheat, seed",
        path_codes: ["0", "01", "011", "0111", "01111"],
        path_titles: ["Agriculture", "Crops", "Cereals", "Wheat", "Wheat, seed"],
        coverage_status: "mapped",
        mapping: {
          pcr_id: "pcr.example.wheat-seed",
          mapping_type: "exact",
          confidence: "high",
        },
        legacy_reference: null,
      },
    ];
  });
  return root;
}

function readCoverage(root) {
  return readClassificationCoverage({ root, system: "cpc", version: "3.0" });
}

function rewriteCoverage(root, mutate) {
  const absolutePath = path.join(root, coveragePath);
  const coverage = JSON.parse(readFileSync(absolutePath, "utf8"));
  mutate(coverage);
  writeFileSync(absolutePath, `${JSON.stringify(coverage, null, 2)}\n`);
}

function assertProjectionFailure(root, issueFragment) {
  assert.throws(
    () => readCoverage(root),
    (error) => error.code === "PCR_INVALID_CLASSIFICATION_COVERAGE"
      && error.details.issues.some((issue) => issue.includes(issueFragment)),
  );
}

function sourceArtifact(root, relativePath) {
  return {
    path: relativePath,
    hash_mode: "exact_bytes",
    sha256: exactFileSha256(path.join(root, relativePath)),
  };
}

function writeRepositoryFile(root, relativePath, content) {
  const absolutePath = path.join(root, relativePath);
  mkdirSync(path.dirname(absolutePath), { recursive: true });
  writeFileSync(absolutePath, content);
}

function exactFileSha256(filePath) {
  return `sha256:${createHash("sha256").update(readFileSync(filePath)).digest("hex")}`;
}
