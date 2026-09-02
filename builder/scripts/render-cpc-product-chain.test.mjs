import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import {
  cpSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readlinkSync,
  readdirSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import http from "node:http";
import https from "node:https";
import net from "node:net";
import { tmpdir } from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";

import { renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";
import {
  DEFAULT_REPORT_PATH,
  DEFAULT_SOURCE_PATH,
  buildOrCheckCpcProductChain,
} from "./render-cpc-product-chain.mjs";

const repoRoot = path.resolve(".");
const wheatSeedPcrId =
  "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";
const abalonePcrId =
  "pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-abalone-live-fresh-or-chilled";
const wheatSeedPath =
  "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed";
const abalonePath =
  "library/pcrs/agriculture-forestry-and-fishery-products/fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products/farmed-abalone-live-fresh-or-chilled";
const temporaryReportPath = "builder/planning/.cpc-product-chain-pilot.md.tmp";

function planningDocument(locator = {
  kind: "field",
  field_path: "boundary_abstraction.upstream_dataset_requirement",
}) {
  return {
    schema_version: 1,
    artifact_kind: "cpc_product_chain_pilot",
    status: "draft",
    classification_system: "CPC",
    classification_version: "3.0",
    official_sources: [],
    chains: [{
      id: "wheat-seed-chain",
      title: "Wheat product chain",
      description: "A self-contained adapter fixture using real CPC and PCR records.",
      nodes: [
        {
          id: "source-seed-lot",
          code: "01111",
          label: "Wheat, seed",
          stage: "source seed production",
          role: "upstream source seed lot",
        },
        {
          id: "wheat-seed",
          code: "01111",
          label: "Wheat, seed",
          stage: "seed production",
          role: "downstream product",
        },
      ],
      edges: [{
        id: "grain-to-seed",
        from: "source-seed-lot",
        to: "wheat-seed",
        relationship_type: "primary_feedstock",
        evidence_status: "supported_by_pcr",
        boundary_assessment: "aligned",
        interface: {
          upstream_output_condition: "source wheat seed lot",
          downstream_starting_condition: "source seed lot",
          fit_summary: "Fixture interface for exercising the verified adapter.",
        },
        route_conditions: ["Fixture route only."],
        evidence: [{
          kind: "pcr_projection",
          pcr_id: wheatSeedPcrId,
          supports: "Verified downstream PCR evidence.",
          locator,
        }],
        review_notes: [],
      }],
    }],
  };
}

function createRealRepositoryFixture(prefix = "tiangong-cpc-chain-adapter-") {
  const root = mkdtempSync(path.join(tmpdir(), prefix));
  const files = [
    "classifications/systems/cpc/3.0/normalized/hierarchy.json",
    "classifications/systems/cpc/3.0/normalized/leaves.json",
    "classifications/systems/cpc/3.0/normalized/paths.json",
    "classifications/systems/cpc/3.0/normalized/leaf-slugs.json",
    "classifications/indexes/cpc-3.0-coverage.json",
    "classifications/mappings/cpc-3.0-to-pcr.yaml",
    "classifications/aliases/pcr-id-aliases.yaml",
    "library/catalog.yaml",
    "docs/adr/0003-retire-cpc-leaf-derived-pcr-identities.md",
  ];
  for (const relativePath of files) {
    const target = path.join(root, relativePath);
    mkdirSync(path.dirname(target), { recursive: true });
    cpSync(path.join(repoRoot, relativePath), target);
  }
  for (const relativePath of [wheatSeedPath, abalonePath]) {
    const target = path.join(root, relativePath);
    mkdirSync(path.dirname(target), { recursive: true });
    cpSync(path.join(repoRoot, relativePath), target, { recursive: true });
  }
  mkdirSync(path.join(root, "builder/planning"), { recursive: true });
  writePlanning(root);
  return root;
}

function writePlanning(root, document = planningDocument()) {
  writeFileSync(path.join(root, DEFAULT_SOURCE_PATH), renderYaml(document));
}

function protectedDigest(root) {
  const hash = createHash("sha256");
  for (const relativeRoot of ["classifications", "library/pcrs"]) {
    hashTree(hash, path.join(root, relativeRoot), relativeRoot);
  }
  return hash.digest("hex");
}

function hashTree(hash, absoluteRoot, relativeRoot) {
  for (const entry of readdirSync(absoluteRoot, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name))) {
    const absolutePath = path.join(absoluteRoot, entry.name);
    const relativePath = path.posix.join(relativeRoot, entry.name);
    if (entry.isDirectory()) {
      hash.update(`D\0${relativePath}\0`);
      hashTree(hash, absolutePath, relativePath);
    } else if (entry.isSymbolicLink()) {
      hash.update(`L\0${relativePath}\0${readlinkSync(absolutePath)}\0`);
    } else if (entry.isFile()) {
      hash.update(`F\0${relativePath}\0`);
      hash.update(readFileSync(absolutePath));
      hash.update("\0");
    } else {
      hash.update(`O\0${relativePath}\0`);
    }
  }
}

function assertNoTemporaryReport(root) {
  assert.throws(
    () => lstatSync(path.join(root, temporaryReportPath)),
    (error) => error.code === "ENOENT",
  );
}

function withNetworkTraps(callback) {
  const originalFetch = globalThis.fetch;
  const originalHttpRequest = http.request;
  const originalHttpsRequest = https.request;
  const originalNetConnect = net.connect;
  const rejectNetwork = () => {
    throw new Error("network access is forbidden in CPC product-chain rendering");
  };
  globalThis.fetch = rejectNetwork;
  http.request = rejectNetwork;
  https.request = rejectNetwork;
  net.connect = rejectNetwork;
  try {
    return callback();
  } finally {
    globalThis.fetch = originalFetch;
    http.request = originalHttpRequest;
    https.request = originalHttpsRequest;
    net.connect = originalNetConnect;
  }
}

test("exports stable default paths and builds/checks an exact report offline", () => {
  assert.equal(DEFAULT_SOURCE_PATH, "builder/planning/cpc-product-chain-pilot.yaml");
  assert.equal(DEFAULT_REPORT_PATH, "builder/planning/cpc-product-chain-pilot.md");
  const root = createRealRepositoryFixture();
  try {
    const before = protectedDigest(root);
    const built = withNetworkTraps(() => buildOrCheckCpcProductChain(root));
    assert.equal(protectedDigest(root), before);
    assert.equal(built.check_only, false);
    assert.equal(built.analysis.summary.ready_edge_count, 1);
    assert.equal(built.analysis.chains[0].nodes[1].resolved.coverage_status, "mapped");
    assert.equal(
      built.analysis.chains[0].nodes[1].resolved.pcr.readiness.usable_for_guidance,
      true,
    );
    const report = readFileSync(path.join(root, DEFAULT_REPORT_PATH), "utf8");
    assert.equal(report, built.report);
    assert.match(report, /1 ready, 0 blocked/u);
    assertNoTemporaryReport(root);

    const checked = withNetworkTraps(() =>
      buildOrCheckCpcProductChain(root, { checkOnly: true }));
    assert.equal(checked.check_only, true);
    assert.equal(checked.report, report);
    assert.equal(readFileSync(path.join(root, DEFAULT_REPORT_PATH), "utf8"), report);
    assert.equal(protectedDigest(root), before);
    assertNoTemporaryReport(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("resolves every allowed field locator and both inventory fields from verified bytes", () => {
  const root = createRealRepositoryFixture();
  const cases = [
    [
      { kind: "field", field_path: "product_category_identity.covered_products" },
      /cleaned wheat seed intended for sowing/u,
    ],
    [
      { kind: "field", field_path: "product_category_identity.production_route" },
      /seed multiplication field/u,
    ],
    [
      { kind: "field", field_path: "boundary_abstraction.declared_starting_condition" },
      /^source_seed_lot$/u,
    ],
    [
      { kind: "field", field_path: "boundary_abstraction.upstream_dataset_requirement" },
      /source seed lot disclosure/u,
    ],
    [
      {
        kind: "inventory_row",
        process_id: "field_seed_multiplication",
        direction: "inputs",
        flow_type: "product",
        row_id: "source_seed_lot_used_for_multiplication",
        field: "name",
      },
      /^Wheat$/u,
    ],
    [
      {
        kind: "inventory_row",
        process_id: "field_seed_multiplication",
        direction: "inputs",
        flow_type: "product",
        row_id: "source_seed_lot_used_for_multiplication",
        field: "description",
      },
      /recorded as an input product flow/u,
    ],
  ];
  try {
    const protectedBefore = protectedDigest(root);
    for (const [locator, expected] of cases) {
      writePlanning(root, planningDocument(locator));
      const result = buildOrCheckCpcProductChain(root);
      const evidence = result.analysis.chains[0].edges[0].resolved_evidence[0];
      assert.deepEqual(evidence.locator, locator);
      assert.equal(evidence.pcr_id, wheatSeedPcrId);
      assert.equal(evidence.source_path, `${wheatSeedPath}/structured.yaml`);
      assert.match(evidence.value, expected);
      assert.equal(protectedDigest(root), protectedBefore);
      assertNoTemporaryReport(root);
    }
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("locator failures are path-aware and preserve an existing report", () => {
  const scenarios = [
    {
      name: "missing process",
      locator: {
        kind: "inventory_row",
        process_id: "missing_process",
        direction: "inputs",
        flow_type: "product",
        row_id: "source_seed_lot_used_for_multiplication",
        field: "name",
      },
      expected: /process_inventory.*missing_process/u,
    },
    {
      name: "missing row",
      locator: {
        kind: "inventory_row",
        process_id: "field_seed_multiplication",
        direction: "inputs",
        flow_type: "product",
        row_id: "missing_row",
        field: "name",
      },
      expected: /process_inventory.*field_seed_multiplication.*inputs.*product.*missing_row/u,
    },
    {
      name: "missing locator field",
      locator: {
        kind: "inventory_row",
        process_id: "field_seed_multiplication",
        direction: "inputs",
        flow_type: "product",
        row_id: "source_seed_lot_used_for_multiplication",
      },
      expected: /chains\/0\/edges\/0\/evidence\/0\/locator/u,
    },
    {
      name: "downstream PCR mismatch",
      mutate(document) {
        document.chains[0].edges[0].evidence[0].pcr_id = abalonePcrId;
      },
      expected: /names PCR .*farmed-abalone.*downstream node wheat-seed resolves to .*wheat-seed/u,
    },
  ];
  for (const scenario of scenarios) {
    const root = createRealRepositoryFixture();
    try {
      const sentinel = `sentinel:${scenario.name}\n`;
      writeFileSync(path.join(root, DEFAULT_REPORT_PATH), sentinel);
      const document = planningDocument(scenario.locator);
      scenario.mutate?.(document);
      writePlanning(root, document);
      const protectedBefore = protectedDigest(root);

      assert.throws(() => buildOrCheckCpcProductChain(root), scenario.expected, scenario.name);
      assert.equal(readFileSync(path.join(root, DEFAULT_REPORT_PATH), "utf8"), sentinel);
      assert.equal(protectedDigest(root), protectedBefore);
      assertNoTemporaryReport(root);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  }
});

test("stale coverage errors propagate without report or protected-source mutation", () => {
  const root = createRealRepositoryFixture();
  try {
    const reportPath = path.join(root, DEFAULT_REPORT_PATH);
    writeFileSync(reportPath, "sentinel\n");
    const leavesPath = path.join(root, "classifications/systems/cpc/3.0/normalized/leaves.json");
    writeFileSync(leavesPath, `${readFileSync(leavesPath, "utf8")} `);
    const protectedBefore = protectedDigest(root);

    assert.throws(
      () => buildOrCheckCpcProductChain(root),
      /source normalized_leaves exact-byte SHA-256 mismatch/u,
    );
    assert.equal(readFileSync(reportPath, "utf8"), "sentinel\n");
    assert.equal(protectedDigest(root), protectedBefore);
    assertNoTemporaryReport(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("render failures leave the report byte-identical and create no temporary file", () => {
  const root = createRealRepositoryFixture();
  const originalToWellFormed = String.prototype.toWellFormed;
  try {
    const document = planningDocument();
    document.official_sources.push({
      id: "official-fixture",
      title: "Official fixture",
      publisher: "Fixture publisher",
      url: "https://example.test/source",
      locator: "fixture locator",
      supports: "render failure coverage",
      accessed_at: "2026-09-02",
    });
    writePlanning(root, document);
    const reportPath = path.join(root, DEFAULT_REPORT_PATH);
    writeFileSync(reportPath, "sentinel render bytes\n");
    const protectedBefore = protectedDigest(root);
    String.prototype.toWellFormed = () => {
      throw new Error("injected render failure");
    };

    assert.throws(() => buildOrCheckCpcProductChain(root), /injected render failure/u);
    assert.equal(readFileSync(reportPath, "utf8"), "sentinel render bytes\n");
    assert.equal(protectedDigest(root), protectedBefore);
    assertNoTemporaryReport(root);
  } finally {
    String.prototype.toWellFormed = originalToWellFormed;
    rmSync(root, { recursive: true, force: true });
  }
});

test("check mode never writes and rejects missing or stale output", () => {
  const root = createRealRepositoryFixture();
  try {
    const protectedBefore = protectedDigest(root);
    assert.throws(
      () => buildOrCheckCpcProductChain(root, { checkOnly: true }),
      /report is missing/u,
    );
    assert.equal(protectedDigest(root), protectedBefore);
    assertNoTemporaryReport(root);

    const reportPath = path.join(root, DEFAULT_REPORT_PATH);
    writeFileSync(reportPath, "stale report\n");
    assert.throws(
      () => buildOrCheckCpcProductChain(root, { checkOnly: true }),
      /report is stale/u,
    );
    assert.equal(readFileSync(reportPath, "utf8"), "stale report\n");
    assert.equal(protectedDigest(root), protectedBefore);
    assertNoTemporaryReport(root);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("rejects symlink and non-regular managed paths without mutation", () => {
  const scenarios = [
    {
      name: "source symlink",
      arrange(root, outsideRoot) {
        const sourcePath = path.join(root, DEFAULT_SOURCE_PATH);
        const outsidePath = path.join(outsideRoot, "source.yaml");
        cpSync(sourcePath, outsidePath);
        rmSync(sourcePath);
        symlinkSync(outsidePath, sourcePath);
      },
      expected: /source.*symbolic link/u,
    },
    {
      name: "source directory",
      arrange(root) {
        const sourcePath = path.join(root, DEFAULT_SOURCE_PATH);
        rmSync(sourcePath);
        mkdirSync(sourcePath);
      },
      expected: /source.*regular file/u,
    },
    {
      name: "structured symlink",
      arrange(root, outsideRoot) {
        const structuredPath = path.join(root, wheatSeedPath, "structured.yaml");
        const outsidePath = path.join(outsideRoot, "structured.yaml");
        cpSync(structuredPath, outsidePath);
        rmSync(structuredPath);
        symlinkSync(outsidePath, structuredPath);
      },
      expected: /symbolic link.*structured\.yaml/u,
    },
    {
      name: "temporary symlink",
      arrange(root, outsideRoot) {
        symlinkSync(path.join(outsideRoot, "temp"), path.join(root, temporaryReportPath));
      },
      expected: /temporary.*symbolic link/u,
      leavesTemporary: true,
    },
    {
      name: "temporary directory",
      arrange(root) {
        mkdirSync(path.join(root, temporaryReportPath));
      },
      expected: /temporary.*regular file/u,
      leavesTemporary: true,
    },
    {
      name: "report symlink",
      arrange(root, outsideRoot) {
        const outsidePath = path.join(outsideRoot, "report.md");
        writeFileSync(outsidePath, "outside\n");
        symlinkSync(outsidePath, path.join(root, DEFAULT_REPORT_PATH));
      },
      expected: /report.*symbolic link/u,
    },
    {
      name: "report directory",
      arrange(root) {
        mkdirSync(path.join(root, DEFAULT_REPORT_PATH));
      },
      expected: /report.*regular file/u,
    },
  ];
  for (const scenario of scenarios) {
    const root = createRealRepositoryFixture();
    const outsideRoot = mkdtempSync(path.join(tmpdir(), "tiangong-cpc-chain-outside-"));
    try {
      scenario.arrange(root, outsideRoot);
      const protectedBefore = protectedDigest(root);
      assert.throws(() => buildOrCheckCpcProductChain(root), scenario.expected, scenario.name);
      assert.equal(protectedDigest(root), protectedBefore);
      if (!scenario.leavesTemporary) assertNoTemporaryReport(root);
    } finally {
      rmSync(root, { recursive: true, force: true });
      rmSync(outsideRoot, { recursive: true, force: true });
    }
  }
});

test("CLI rejects every argument vector except no args and exactly --check", () => {
  for (const args of [["unexpected"], ["--check", "--check"], ["--check", "unexpected"]]) {
    const result = spawnSync(
      process.execPath,
      [path.join(repoRoot, "builder/scripts/render-cpc-product-chain.mjs"), ...args],
      { cwd: repoRoot, encoding: "utf8" },
    );
    assert.notEqual(result.status, 0, args.join(" "));
    assert.match(result.stderr, /Unexpected CPC product-chain argument/u);
    assert.equal(result.stdout, "");
  }
});
