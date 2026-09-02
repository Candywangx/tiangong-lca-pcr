import assert from "node:assert/strict";
import { execFileSync, spawn, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  cpSync,
  existsSync,
  readFileSync,
  mkdirSync,
  mkdtempSync,
  renameSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

import { buildGuidance } from "../pcr-core/src/index.mjs";
import {
  buildViewer,
  buildViewerData,
  validateViewerScope,
  VIEWER_BUILD_MARKER,
} from "./scripts/build-viewer-data.mjs";
import { serveViewer } from "./scripts/serve-viewer.mjs";
import {
  assertViewerDataContract,
  describeReadiness,
  filterPcrs,
  formatCoverageSummary,
  renderMarkdown,
  summarizeGuidance,
} from "./static/viewer-core.js";

const repoRoot = path.resolve(".");
const cpcCoverageIndex = JSON.parse(
  readFileSync(
    path.join(repoRoot, "classifications/indexes/cpc-3.0-coverage.json"),
    "utf8",
  ),
);
const abalonePcrId =
  "pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-abalone-live-fresh-or-chilled";
const wheatPcrId =
  "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";
const wheatPcrPath =
  "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed";

test("buildViewer writes viewer data and static assets", () => {
  const outDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-"));
  try {
    const data = buildViewer({ root: repoRoot, outDir });
    const dataPath = path.join(outDir, "data", "pcr-viewer-data.json");

    assert.equal(data.schema_version, 3);
    assert.equal(data.viewer_kind, "tiangong-pcr-static-viewer-data");
    assert.equal(data.catalog_scope, "material");
    assert.ok(data.pcr_count > 0);
    assert.equal(data.pcr_count, data.pcrs.length);
    assert.ok(existsSync(dataPath));
    assert.ok(existsSync(path.join(outDir, "index.html")));
    assert.ok(existsSync(path.join(outDir, "styles.css")));
    assert.ok(existsSync(path.join(outDir, "app.js")));
    assert.ok(existsSync(path.join(outDir, "viewer-core.js")));
    assert.ok(existsSync(path.join(outDir, VIEWER_BUILD_MARKER)));

    const parsed = JSON.parse(readFileSync(dataPath, "utf8"));
    const abalone = parsed.pcrs.find((entry) => entry.id === abalonePcrId);
    const scaffold = parsed.pcrs.find((entry) => entry.content_maturity === "empty_scaffold");

    assert.ok(abalone);
    assert.equal(scaffold, undefined);
    assert.equal(parsed.pcrs.every((entry) => entry.record_kind === "methodology"), true);
    assert.equal(parsed.catalog_scope, "material");
    assert.equal(parsed.classification_coverage_summaries.length, 1);
    const [cpcCoverage] = parsed.classification_coverage_summaries;
    assert.deepEqual(cpcCoverage.coordinate, { system: "cpc", version: "3.0" });
    assert.equal(cpcCoverage.index_kind, "classification-pcr-coverage");
    assert.equal(
      cpcCoverage.index_path,
      "classifications/indexes/cpc-3.0-coverage.json",
    );
    assert.equal(cpcCoverage.entries_inlined, false);
    assert.deepEqual(cpcCoverage.summary, cpcCoverageIndex.summary);
    assert.equal(Object.hasOwn(cpcCoverage, "entries"), false);
    assert.equal(Object.hasOwn(parsed, "classification_coverage"), false);
    assert.ok(
      readFileSync(dataPath).byteLength < data.pcr_count * 300_000,
      "Expected material viewer data below 300 KB per PCR",
    );
    assert.equal(abalone.title["en-US"], "Farmed abalone, live, fresh or chilled");
    assert.equal(abalone.markdown["en-US"].includes("# Farmed abalone"), true);
    assert.equal(abalone.markdown["zh-CN"].includes("# 养殖鲍鱼"), true);
    assert.deepEqual(abalone.guidance, buildGuidance({ root: repoRoot, pcrId: abalonePcrId }));
    assert.equal(abalone.guidance.reference_flow.reference_unit, "kg");
    assert.ok(abalone.guidance.data_sources.length > 0);
    assert.match(abalone.search_text, /abalone/i);
    assert.match(abalone.search_text, /04412/);
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
});

test("buildViewer scope all preserves catalog compatibility without inlining empty scaffolds", () => {
  const outDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-all-"));
  try {
    const materialData = buildViewerData({ root: repoRoot });
    const data = buildViewer({ root: repoRoot, outDir, scope: "all" });
    const scaffolds = data.pcrs.filter(
      (entry) => entry.record_kind === "legacy_scaffold_reference",
    );

    assert.equal(data.catalog_scope, "all");
    assert.ok(data.pcr_count > materialData.pcr_count);
    assert.ok(
      JSON.stringify(materialData).length < JSON.stringify(data).length,
      "Expected default material data to remain smaller than all-scope data",
    );
    assert.ok(scaffolds.length > 0);
    for (const scaffold of scaffolds) {
      assert.equal(Object.hasOwn(scaffold, "markdown"), false);
      assert.equal(Object.hasOwn(scaffold, "guidance"), false);
      assert.doesNotMatch(JSON.stringify(scaffold), /guidance_error/u);
    }
    assert.ok(existsSync(path.join(outDir, VIEWER_BUILD_MARKER)));
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
});

test("viewer build CLI validates its material, all, and legacy scopes", () => {
  assert.equal(validateViewerScope("material"), "material");
  assert.equal(validateViewerScope("all"), "all");
  assert.equal(validateViewerScope("legacy"), "legacy");
  assert.throws(() => validateViewerScope("everything"), /Invalid viewer scope: everything/u);

  const scriptPath = path.join(repoRoot, "packages/pcr-viewer/scripts/build-viewer-data.mjs");
  const result = spawnSync(process.execPath, [scriptPath, "--scope", "everything"], {
    encoding: "utf8",
  });
  assert.equal(result.status, 1);
  assert.equal(result.stdout, "");
  assert.match(result.stderr, /Invalid viewer scope: everything/u);
});

test("viewer coverage counts classification leaves independently from PCR catalog size", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-many-to-one-"));
  try {
    copyFixturePcr({ root, relativePath: wheatPcrPath });
    const coverageIndex = writeFixtureCoverageIndex({
      root,
      system: "cpc",
      version: "3.0",
      mappedPcrIds: [wheatPcrId, wheatPcrId, wheatPcrId, wheatPcrId],
    });
    writeFixtureCatalog({ root, coverageIndexes: [coverageIndex] });

    const data = buildViewerData({ root });
    const [coverage] = data.classification_coverage_summaries;

    assert.equal(data.pcr_count, 1);
    assert.equal(coverage.summary.mapped, 4);
    assert.ok(coverage.summary.mapped > data.pcr_count);
    assert.equal(Object.hasOwn(coverage, "entries"), false);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("viewer discovers and presents every catalog-declared coverage coordinate", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-multi-coverage-"));
  try {
    copyFixturePcr({ root, relativePath: wheatPcrPath });
    const cpcIndex = writeFixtureCoverageIndex({
      root,
      system: "cpc",
      version: "3.0",
      mappedPcrIds: [wheatPcrId, wheatPcrId],
    });
    const hsIndex = writeFixtureCoverageIndex({
      root,
      system: "hs",
      version: "2022",
      mappedPcrIds: [wheatPcrId],
      unmappedCount: 2,
    });
    writeFixtureCatalog({ root, coverageIndexes: [cpcIndex, hsIndex] });

    const data = buildViewerData({ root });
    assert.equal(assertViewerDataContract(data), data);
    assert.deepEqual(
      data.classification_coverage_summaries.map((coverage) => coverage.coordinate),
      [
        { system: "cpc", version: "3.0" },
        { system: "hs", version: "2022" },
      ],
    );
    assert.deepEqual(
      data.classification_coverage_summaries.map(formatCoverageSummary),
      [
        "CPC 3.0 · 2/2 classification leaves mapped",
        "HS 2022 · 1/3 classification leaves mapped",
      ],
    );
    assert.equal(
      data.classification_coverage_summaries.every(
        (coverage) => coverage.entries_inlined === false && !Object.hasOwn(coverage, "entries"),
      ),
      true,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("viewer fails closed when catalog coverage declarations are missing or invalid", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-invalid-coverage-"));
  try {
    mkdirSync(path.join(root, "library/pcrs"), { recursive: true });
    assert.throws(() => buildViewerData({ root }), /Missing PCR catalog/u);

    writeFileSync(
      path.join(root, "library/catalog.yaml"),
      "schema_version: 1\ncatalog_status: current\nclassification_coverage_indexes: []\n",
    );
    assert.throws(
      () => buildViewerData({ root }),
      /classification_coverage_indexes must be a non-empty array/u,
    );

    writeFixtureCatalog({ root, coverageIndexes: ["../outside-coverage.json"] });
    assert.throws(
      () => buildViewerData({ root }),
      /Invalid PCR catalog coverage declaration/u,
    );

    writeFixtureCatalog({
      root,
      coverageIndexes: ["classifications/indexes/missing-1.0-coverage.json"],
    });
    assert.throws(
      () => buildViewerData({ root }),
      /Missing classification coverage index/u,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("viewer managed inputs reject symbolic links, FIFOs, and invalid UTF-8", async (t) => {
  await t.test("catalog symbolic link", () => {
    const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-catalog-link-"));
    try {
      mkdirSync(path.join(root, "library/pcrs"), { recursive: true });
      writeFixtureCatalog({
        root,
        coverageIndexes: ["classifications/indexes/cpc-3.0-coverage.json"],
      });
      const catalogPath = path.join(root, "library/catalog.yaml");
      const sourcePath = `${catalogPath}.source`;
      renameSync(catalogPath, sourcePath);
      symlinkSync(path.basename(sourcePath), catalogPath);

      assert.throws(
        () => buildViewerData({ root }),
        /PCR catalog path contains a symbolic link/u,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("catalog FIFO", (subtest) => {
    const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-catalog-fifo-"));
    try {
      mkdirSync(path.join(root, "library/pcrs"), { recursive: true });
      const catalogPath = path.join(root, "library/catalog.yaml");
      const result = spawnSync("mkfifo", [catalogPath], { encoding: "utf8" });
      if (result.error?.code === "ENOENT") {
        subtest.skip("mkfifo is unavailable on this platform");
        return;
      }
      assert.equal(result.status, 0, result.stderr);
      assert.throws(
        () => buildViewerData({ root }),
        /PCR catalog must be a regular file/u,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  await t.test("declared coverage index invalid UTF-8", () => {
    const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-coverage-utf8-"));
    try {
      mkdirSync(path.join(root, "library/pcrs"), { recursive: true });
      const indexPath = "classifications/indexes/cpc-3.0-coverage.json";
      writeFixtureCatalog({ root, coverageIndexes: [indexPath] });
      writeFixtureFile({ root, relativePath: indexPath, contents: Buffer.from([0xff]) });

      assert.throws(
        () => buildViewerData({ root }),
        /classification coverage index .* must contain valid UTF-8/u,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});

test("buildViewer refuses protected and unowned output directories", () => {
  assert.throws(
    () => buildViewer({ root: repoRoot, outDir: repoRoot, scope: "all" }),
    /Refusing to build the PCR viewer into protected path/u,
  );

  const parentDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-unsafe-"));
  const outDir = path.join(parentDir, "existing-output");
  const sentinelPath = path.join(outDir, "keep.txt");
  try {
    mkdirSync(outDir);
    writeFileSync(sentinelPath, "must survive\n");

    assert.throws(
      () => buildViewer({ root: repoRoot, outDir }),
      new RegExp(`without ${VIEWER_BUILD_MARKER}`, "u"),
    );
    assert.equal(readFileSync(sentinelPath, "utf8"), "must survive\n");
  } finally {
    rmSync(parentDir, { recursive: true, force: true });
  }
});

test("buildViewer resolves parent symlinks before checking protected paths", () => {
  const parentDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-symlink-"));
  const repoParentAlias = path.join(parentDir, "repo-parent-alias");
  const packageAlias = path.join(parentDir, "package-alias");
  const repoPathThroughAlias = path.join(repoParentAlias, path.basename(repoRoot));
  const testChildName = `generated-viewer-${path.basename(parentDir)}`;
  const staticChildThroughAlias = path.join(packageAlias, "static", testChildName);
  const staticChild = path.join(repoRoot, "packages", "pcr-viewer", "static", testChildName);

  assert.equal(existsSync(staticChild), false);
  try {
    symlinkSync(path.dirname(repoRoot), repoParentAlias, "dir");
    symlinkSync(path.join(repoRoot, "packages", "pcr-viewer"), packageAlias, "dir");

    assert.throws(
      () => buildViewer({ root: repoRoot, outDir: repoPathThroughAlias }),
      /Refusing to build the PCR viewer into protected path/u,
    );
    assert.throws(
      () => buildViewer({ root: repoRoot, outDir: staticChildThroughAlias }),
      /Refusing to build the PCR viewer inside its static source directory/u,
    );
    assert.equal(existsSync(staticChild), false);
  } finally {
    rmSync(staticChild, { recursive: true, force: true });
    rmSync(parentDir, { recursive: true, force: true });
  }
});

test("buildViewer allows a safe new path through a parent symlink and can replace its marked build", () => {
  const parentDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-repeat-"));
  const realParentDir = path.join(parentDir, "real-parent");
  const parentAlias = path.join(parentDir, "parent-alias");
  const outDir = path.join(parentAlias, "new-output");
  try {
    mkdirSync(realParentDir);
    symlinkSync(realParentDir, parentAlias, "dir");
    buildViewer({ root: repoRoot, outDir });
    writeFileSync(path.join(outDir, "stale-generated-file.txt"), "stale\n");

    buildViewer({ root: repoRoot, outDir });

    assert.equal(existsSync(path.join(outDir, "stale-generated-file.txt")), false);
    assert.equal(existsSync(path.join(outDir, VIEWER_BUILD_MARKER)), true);
  } finally {
    rmSync(parentDir, { recursive: true, force: true });
  }
});

test("buildViewer does not replace an existing build with an empty catalog", () => {
  const parentDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-empty-root-"));
  const emptyRoot = path.join(parentDir, "empty-repository");
  const outDir = path.join(parentDir, "existing-build");
  const sentinelPath = path.join(outDir, "keep.txt");
  try {
    mkdirSync(path.join(emptyRoot, "library/pcrs"), { recursive: true });
    writeFixtureCoverageIndex({ root: emptyRoot, system: "cpc", version: "3.0" });
    writeFixtureCatalog({
      root: emptyRoot,
      coverageIndexes: ["classifications/indexes/cpc-3.0-coverage.json"],
    });
    mkdirSync(outDir);
    writeFileSync(path.join(outDir, VIEWER_BUILD_MARKER), "owned viewer build\n");
    writeFileSync(sentinelPath, "last usable output\n");

    assert.throws(
      () => buildViewer({ root: emptyRoot, outDir }),
      /Refusing to replace viewer output with an empty PCR catalog/u,
    );
    assert.equal(readFileSync(sentinelPath, "utf8"), "last usable output\n");
  } finally {
    rmSync(parentDir, { recursive: true, force: true });
  }
});

test("viewer-core filters PCRs and renders safe Markdown", () => {
  const records = [
    {
      id: "pcr.example.wheat",
      path: "library/pcrs/example/wheat",
      status: "candidate",
      content_maturity: "authored_methodology",
      title: { "en-US": "Wheat seed", "zh-CN": "小麦种子" },
      search_text: "pcr.example.wheat wheat seed cpc 01111",
    },
    {
      id: "pcr.example.abalone",
      path: "library/pcrs/example/abalone",
      status: "scaffold",
      content_maturity: "empty_scaffold",
      title: { "en-US": "Farmed abalone" },
      search_text: "pcr.example.abalone farmed abalone cpc 04412",
    },
  ];

  assert.deepEqual(filterPcrs(records, { query: "04412", status: "", maturity: "" }).map((pcr) => pcr.id), [
    "pcr.example.abalone",
  ]);
  assert.deepEqual(filterPcrs(records, { query: "", status: "candidate", maturity: "" }).map((pcr) => pcr.id), [
    "pcr.example.wheat",
  ]);
  assert.deepEqual(
    filterPcrs(records, { query: "seed", status: "candidate", maturity: "authored_methodology" }).map(
      (pcr) => pcr.id,
    ),
    ["pcr.example.wheat"],
  );

  const html = renderMarkdown("# Title\n\n- <unsafe>\n\n| Field | Value |\n| --- | --- |\n| A | B |");
  assert.match(html, /<h1>Title<\/h1>/);
  assert.match(html, /&lt;unsafe&gt;/);
  assert.match(html, /<table>/);
});

test("viewer-core rejects stale or incomplete viewer data contracts", () => {
  const data = {
    schema_version: 3,
    viewer_kind: "tiangong-pcr-static-viewer-data",
    catalog_scope: "material",
    classification_coverage_summaries: [viewerCoverageSummary()],
    pcr_count: 0,
    pcrs: [],
  };

  assert.equal(assertViewerDataContract(data), data);
  assert.throws(
    () => assertViewerDataContract({ ...data, schema_version: 2 }),
    /Unsupported PCR viewer data schema version: 2/u,
  );
  assert.throws(
    () => assertViewerDataContract({ ...data, classification_coverage_summaries: null }),
    /classification_coverage_summaries must be a non-empty array/u,
  );
  assert.throws(
    () =>
      assertViewerDataContract({
        ...data,
        classification_coverage_summaries: [
          { ...viewerCoverageSummary(), entries: [], entries_inlined: true },
        ],
      }),
    /must not inline entries/u,
  );
  assert.throws(
    () => assertViewerDataContract({ ...data, pcr_count: 1 }),
    /pcr_count must match/u,
  );
});

test("viewer labels classification matching as a literal filter, not a resolver", () => {
  const appSource = readFileSync(path.join(repoRoot, "packages/pcr-viewer/static/app.js"), "utf8");

  assert.match(appSource, /Literal metadata filter/u);
  assert.match(appSource, /Substring filter only/u);
  assert.match(appSource, /tiangong-pcr resolve/u);
  assert.match(appSource, /classification_coverage_summaries/u);
  assert.match(appSource, /coverageSummaries\.map/u);
});

test("viewer-core renders deep headings, inline code, and indented lists", () => {
  const html = renderMarkdown(
    [
      "###### 产品流",
      "",
      "####### 繁殖用来源种批 (`source_seed_lot_used_for_multiplication`)",
      "",
      "  - 范围角色：默认估算 (`default_estimate`)",
      "  - 证据类型：采集记录 (`collected_record`)",
      "",
      "普通段落含有 `inline_code` 和 <unsafe>。",
    ].join("\n"),
  );

  assert.match(html, /<h6>产品流<\/h6>/);
  assert.match(
    html,
    /<h6>繁殖用来源种批 \(<code>source_seed_lot_used_for_multiplication<\/code>\)<\/h6>/,
  );
  assert.match(html, /<ul><li>范围角色：默认估算 \(<code>default_estimate<\/code>\)<\/li>/);
  assert.match(html, /<li>证据类型：采集记录 \(<code>collected_record<\/code>\)<\/li><\/ul>/);
  assert.match(html, /<p>普通段落含有 <code>inline_code<\/code> 和 &lt;unsafe&gt;。<\/p>/);
});

test("viewer-core summarizes guidance counts", () => {
  const summary = summarizeGuidance({
    reference_flow: { reference_unit: "kg", required_qualifiers: ["species", "gate"] },
    process_map: [{ id: "growout" }],
    process_inventory: [{ id: "growout" }, { id: "packout" }],
    production_guidance: {
      collection_protocols: [{ protocol_id: "cp_feed" }],
      calculation_rules: [{ id: "normalize" }],
      data_quality_requirements: [{ id: "scope" }],
    },
    data_sources: [{ id: "source-1" }, { id: "source-2" }],
  });

  assert.deepEqual(summary, {
    reference_unit: "kg",
    required_qualifier_count: 2,
    process_count: 1,
    inventory_process_count: 2,
    collection_protocol_count: 1,
    calculation_rule_count: 1,
    data_quality_requirement_count: 1,
    data_source_count: 2,
  });
});

test("viewer-core presents PCR readiness with an explicit status and tone", () => {
  assert.deepEqual(describeReadiness({ status: "ready" }), { status: "ready", tone: "ready" });
  assert.deepEqual(describeReadiness({ status: "review_required" }), {
    status: "review_required",
    tone: "review",
  });
  assert.deepEqual(describeReadiness({ status: "unavailable" }), {
    status: "unavailable",
    tone: "unavailable",
  });
  assert.deepEqual(describeReadiness(), { status: "unknown", tone: "unknown" });
});

test("viewer scripts are safe to import when the process entry path does not exist", () => {
  const buildUrl = pathToFileURL(path.join(repoRoot, "packages/pcr-viewer/scripts/build-viewer-data.mjs")).href;
  const serveUrl = pathToFileURL(path.join(repoRoot, "packages/pcr-viewer/scripts/serve-viewer.mjs")).href;
  const output = execFileSync(process.execPath, ["--input-type=module", "-"], {
    encoding: "utf8",
    input: `await import(${JSON.stringify(buildUrl)});\nawait import(${JSON.stringify(serveUrl)});\nconsole.log("imported");\n`,
  });

  assert.equal(output, "imported\n");
});

test("serveViewer refuses to serve a symlink that escapes the build root", async () => {
  const parentDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-serve-root-"));
  const root = path.join(parentDir, "viewer");
  let server;
  try {
    mkdirSync(root);
    writeFileSync(path.join(root, "index.html"), "viewer\n");
    writeFileSync(path.join(parentDir, "secret.txt"), "must not be served\n");
    symlinkSync(path.join(parentDir, "secret.txt"), path.join(root, "leak.txt"));

    server = serveViewer({ root, port: 0 });
    if (!server.listening) {
      await new Promise((resolve) => server.once("listening", resolve));
    }
    const response = await fetch(`http://127.0.0.1:${server.address().port}/leak.txt`);

    assert.equal(response.status, 403);
    assert.equal(await response.text(), "Forbidden");
  } finally {
    if (server?.listening) {
      await new Promise((resolve) => server.close(resolve));
    }
    rmSync(parentDir, { recursive: true, force: true });
  }
});

test("viewer scripts can run from paths containing spaces and non-ASCII characters", async () => {
  const tempRoot = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-cli-"));
  const fixtureRoot = path.join(tempRoot, "工作 空间");
  const fixtureViewerRoot = path.join(fixtureRoot, "packages", "pcr-viewer");
  const fixtureCoreRoot = path.join(fixtureRoot, "packages", "pcr-core");
  const outDir = path.join(tempRoot, "构建 输出");
  try {
    mkdirSync(fixtureViewerRoot, { recursive: true });
    mkdirSync(fixtureCoreRoot, { recursive: true });
    cpSync(path.join(repoRoot, "packages", "pcr-viewer", "scripts"), path.join(fixtureViewerRoot, "scripts"), {
      recursive: true,
    });
    cpSync(path.join(repoRoot, "packages", "pcr-viewer", "static"), path.join(fixtureViewerRoot, "static"), {
      recursive: true,
    });
    cpSync(path.join(repoRoot, "packages", "pcr-core", "src"), path.join(fixtureCoreRoot, "src"), {
      recursive: true,
    });
    cpSync(
      path.join(repoRoot, "packages", "pcr-core", "schemas"),
      path.join(fixtureCoreRoot, "schemas"),
      { recursive: true },
    );
    symlinkSync(
      path.join(repoRoot, "node_modules"),
      path.join(fixtureRoot, "node_modules"),
      process.platform === "win32" ? "junction" : "dir",
    );

    const buildOutput = execFileSync(process.execPath, [
      path.join(fixtureViewerRoot, "scripts", "build-viewer-data.mjs"),
      "--root",
      repoRoot,
      "--out-dir",
      outDir,
      "--scope",
      "material",
    ], {
      cwd: repoRoot,
      encoding: "utf8",
    });

    assert.match(buildOutput, /Built PCR viewer data for \d+ PCR records/);
    assert.match(buildOutput, /scope: material/u);

    const server = spawn(process.execPath, [
      path.join(fixtureViewerRoot, "scripts", "serve-viewer.mjs"),
      "--root",
      outDir,
      "--port",
      "0",
    ], {
      cwd: repoRoot,
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stderr = "";
    server.stderr.on("data", (chunk) => {
      stderr += chunk.toString("utf8");
    });

    try {
      const ready = await readUntil(server, server.stdout, /PCR viewer available at http:\/\/127\.0\.0\.1:\d+/u, {
        getStderr: () => stderr,
      });
      assert.match(ready, /PCR viewer available/);
      const port = ready.match(/http:\/\/127\.0\.0\.1:(\d+)/u)?.[1];
      assert.ok(port);
      const baseUrl = `http://127.0.0.1:${port}`;

      await assertResponse(baseUrl, "/", 200, /^text\/html/u);
      await assertResponse(baseUrl, "/data/pcr-viewer-data.json", 200, /^application\/json/u);
      await assertResponse(baseUrl, "/%2e%2e%2fpackage.json", 403);
      await assertResponse(baseUrl, "/%E0%A4%A", 400);
      await assertResponse(baseUrl, "/", 200, /^text\/html/u);
    } finally {
      server.kill("SIGTERM");
    }
  } finally {
    rmSync(tempRoot, { recursive: true, force: true });
  }
});

function viewerCoverageSummary({ system = "cpc", version = "3.0" } = {}) {
  return {
    coordinate: { system, version },
    schema_version: 1,
    index_kind: "classification-pcr-coverage",
    classification_system: system.toUpperCase(),
    classification_version: version,
    source: {},
    summary: {
      total: 0,
      mapped: 0,
      unmapped: 0,
      candidate_suggestion: 0,
      manual_review: 0,
      unknown: 0,
    },
    index_path: `classifications/indexes/${system}-${version}-coverage.json`,
    entries_inlined: false,
  };
}

function copyFixturePcr({ root, relativePath }) {
  const target = path.join(root, relativePath);
  mkdirSync(path.dirname(target), { recursive: true });
  cpSync(path.join(repoRoot, relativePath), target, { recursive: true });
}

function writeFixtureCatalog({ root, coverageIndexes }) {
  const aliasRegistry = [
    "schema_version: 1",
    "registry_kind: legacy-pcr-id-aliases",
    "status: current",
    "aliases: []",
    "",
  ].join("\n");
  const aliasPath = path.join(root, "classifications/aliases/pcr-id-aliases.yaml");
  mkdirSync(path.dirname(aliasPath), { recursive: true });
  writeFileSync(aliasPath, aliasRegistry, "utf8");
  const aliasSha256 = `sha256:${createHash("sha256").update(aliasRegistry).digest("hex")}`;
  const catalogPath = path.join(root, "library/catalog.yaml");
  mkdirSync(path.dirname(catalogPath), { recursive: true });
  writeFileSync(
    catalogPath,
    [
      "schema_version: 1",
      "catalog_status: current",
      'pcr_index: "library/indexes/pcr-index.yaml"',
      "pcr_id_aliases:",
      '  path: "classifications/aliases/pcr-id-aliases.yaml"',
      '  hash_mode: "exact_bytes"',
      `  sha256: ${JSON.stringify(aliasSha256)}`,
      "  entry_count: 0",
      "classification_mappings: []",
      "classification_coverage_indexes:",
      ...coverageIndexes.map((indexPath) => `  - ${JSON.stringify(indexPath)}`),
      "notes:",
      '  - "Viewer test fixture."',
      "",
    ].join("\n"),
  );
}

function writeFixtureCoverageIndex({
  root,
  system,
  version,
  mappedPcrIds = [],
  unmappedCount = 0,
}) {
  const normalizedLeavesPath =
    `classifications/systems/${system}/${version}/normalized/leaves.json`;
  const mappingPath = `classifications/mappings/${system}-${version}-to-pcr.yaml`;
  const indexPath = `classifications/indexes/${system}-${version}-coverage.json`;
  const mappedEntries = mappedPcrIds.map((pcrId, index) =>
    fixtureCoverageEntry({ system, index, pcrId }),
  );
  const unmappedEntries = Array.from({ length: unmappedCount }, (_, offset) =>
    fixtureCoverageEntry({
      system,
      index: mappedEntries.length + offset,
      pcrId: null,
    }),
  );
  const entries = [...mappedEntries, ...unmappedEntries];
  const normalizedLeavesText = `${JSON.stringify(
    {
      schema_version: 1,
      classification_system: system.toUpperCase(),
      classification_version: version,
      leaves: entries.map((entry) => ({
        code: entry.code,
        title: entry.label,
        path_codes: entry.path_codes,
        path_titles: entry.path_titles,
      })),
    },
    null,
    2,
  )}\n`;
  const mappingText = [
    "schema_version: 2",
    `classification_system: ${JSON.stringify(system.toUpperCase())}`,
    `classification_version: ${JSON.stringify(version)}`,
    "status: current",
    ...(mappedEntries.length === 0
      ? ["mappings: []"]
      : [
          "mappings:",
          ...mappedEntries.flatMap((entry) => [
            `  - code: ${JSON.stringify(entry.code)}`,
            `    label: ${JSON.stringify(entry.label)}`,
            `    pcr_id: ${JSON.stringify(entry.mapping.pcr_id)}`,
            `    mapping_type: ${entry.mapping.mapping_type}`,
            `    confidence: ${entry.mapping.confidence}`,
            "    acceptance:",
            `      status: ${entry.mapping.acceptance.status}`,
            `      decided_by: ${entry.mapping.acceptance.decided_by}`,
            `      decided_at_utc: ${JSON.stringify(entry.mapping.acceptance.decided_at_utc)}`,
            `      decision_ref: ${entry.mapping.acceptance.decision_ref}`,
          ]),
        ]),
    "",
  ].join("\n");
  writeFixtureFile({ root, relativePath: normalizedLeavesPath, contents: normalizedLeavesText });
  writeFixtureFile({ root, relativePath: mappingPath, contents: mappingText });
  const document = {
    schema_version: 1,
    index_kind: "classification-pcr-coverage",
    classification_system: system.toUpperCase(),
    classification_version: version,
    source: {
      contract_version: "2",
      generator: "builder/scripts/build-catalog.mjs",
      generator_version: "2",
      normalized_leaves: {
        path: normalizedLeavesPath,
        hash_mode: "exact_bytes",
        sha256: sha256(normalizedLeavesText),
      },
      mapping: {
        path: mappingPath,
        hash_mode: "exact_bytes",
        sha256: sha256(mappingText),
      },
    },
    summary: {
      total: entries.length,
      mapped: mappedEntries.length,
      unmapped: unmappedEntries.length,
      candidate_suggestion: 0,
      manual_review: 0,
      unknown: 0,
    },
    entries,
  };
  writeFixtureFile({
    root,
    relativePath: indexPath,
    contents: `${JSON.stringify(document, null, 2)}\n`,
  });
  return indexPath;
}

function fixtureCoverageEntry({ system, index, pcrId }) {
  const code = `${system.toUpperCase()}-${String(index + 1).padStart(3, "0")}`;
  return {
    code,
    label: `Fixture leaf ${index + 1}`,
    path_codes: [code],
    path_titles: [`Fixture leaf ${index + 1}`],
    coverage_status: pcrId ? "mapped" : "unmapped",
    mapping: pcrId
      ? {
          pcr_id: pcrId,
          mapping_type: "exact",
          confidence: "fixture",
          acceptance: {
            status: "accepted",
            decided_by: "viewer-test",
            decided_at_utc: "2026-07-14T00:00:00Z",
            decision_ref: "docs/adr/viewer-fixture.md",
          },
        }
      : null,
    legacy_reference: null,
  };
}

function writeFixtureFile({ root, relativePath, contents }) {
  const filePath = path.join(root, ...relativePath.split("/"));
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, contents);
}

function sha256(contents) {
  return `sha256:${createHash("sha256").update(contents).digest("hex")}`;
}

async function assertResponse(baseUrl, route, status, contentTypePattern) {
  const response = await fetch(`${baseUrl}${route}`);
  assert.equal(response.status, status);
  if (contentTypePattern) {
    assert.match(response.headers.get("content-type") ?? "", contentTypePattern);
  }
}

function readUntil(child, stream, pattern, { getStderr = () => "", timeoutMs = 3000 } = {}) {
  return new Promise((resolve, reject) => {
    let text = "";
    let settled = false;
    const cleanup = () => {
      clearTimeout(timer);
      child.off("exit", onExit);
      stream.off("data", onData);
      stream.off("error", onError);
    };
    const fail = (error) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      reject(error);
    };
    const timer = setTimeout(() => {
      fail(new Error(`Timed out waiting for ${pattern}.\nstdout:\n${text}\nstderr:\n${getStderr()}`));
    }, timeoutMs);
    const onExit = (code, signal) => {
      fail(
        new Error(
          `Server exited before ready (code ${code ?? "none"}, signal ${signal ?? "none"}).\nstdout:\n${text}\nstderr:\n${getStderr()}`,
        ),
      );
    };
    const onData = (chunk) => {
      text += chunk.toString("utf8");
      if (pattern.test(text)) {
        settled = true;
        cleanup();
        resolve(text);
      }
    };
    const onError = (error) => {
      fail(new Error(`Error reading server output: ${error.message}.\nstdout:\n${text}\nstderr:\n${getStderr()}`));
    };
    child.once("exit", onExit);
    stream.on("data", onData);
    stream.on("error", onError);
  });
}
