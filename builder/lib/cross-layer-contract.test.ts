import assert from "node:assert/strict";
import {
  cpSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { isUnknownRecord, type StructuredProjection } from "../../packages/pcr-core/src/types.ts";

import {
  assertClassificationMapping,
  assertManifest,
  assertMarkdownFrontmatter,
  assertStructured as assertBuilderStructured,
} from "./schema-contracts.ts";
import { parsePcrMarkdownToStructured } from "./markdown-projection.ts";
import { structuredProjectionYaml } from "./structured-yaml-projection.ts";
import { inspectPcrDirectory } from "./lint-rules.ts";
import {
  buildGuidance,
  getPcrReadiness,
  resolveClassification,
  validateDatasetAgainstGuidance,
} from "../../packages/pcr-core/src/index.ts";
import {
  assertGuidance,
  assertReadiness,
  assertStructured as assertCoreStructured,
  assertValidationReport,
} from "../../packages/pcr-core/src/contracts.ts";
import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.ts";

const repoRoot = path.resolve(".");
const pcrId =
  "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";
const pcrDirectory = path.join(
  repoRoot,
  "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed",
);

test("one material PCR remains consistent from builder source contracts through core validation", () => {
  const manifest = readYaml(path.join(pcrDirectory, "manifest.yaml"));
  const markdown = readFileSync(path.join(pcrDirectory, "pcr.en-US.md"), "utf8");
  const frontmatter = parseFrontmatter(markdown);
  const mappingDocument = readYaml(
    path.join(repoRoot, "classifications/mappings/cpc-3.0-to-pcr.yaml"),
  );
  const structuredText = readFileSync(path.join(pcrDirectory, "structured.yaml"), "utf8");
  const rawStructured: unknown = parseYaml(structuredText);
  assertCoreStructured(rawStructured);
  const structured = rawStructured as StructuredProjection;

  assert.doesNotThrow(() => assertManifest(manifest));
  assert.doesNotThrow(() => assertMarkdownFrontmatter(frontmatter));
  assert.doesNotThrow(() => assertClassificationMapping(mappingDocument));
  assert.doesNotThrow(() => assertBuilderStructured(structured));
  assert.doesNotThrow(() => assertCoreStructured(structured));

  const markdownProjection = parsePcrMarkdownToStructured(markdown);
  const renderedStructured = structuredProjectionYaml(markdownProjection, {
    sourceMarkdown: markdown,
  });
  assert.equal(renderedStructured, structuredText);

  assert.ok(Array.isArray(mappingDocument.mappings));
  const mapping = mappingDocument.mappings.find((entry: unknown) => isUnknownRecord(entry) && entry.code === "01111");
  const resolution = resolveClassification({
    root: repoRoot,
    system: "cpc",
    version: "3.0",
    code: "01111",
  });
  const readiness = getPcrReadiness({ root: repoRoot, pcrId, refresh: true });
  const guidance = buildGuidance({ root: repoRoot, pcrId });
  const dataset = {
    collection_records: guidance.production_guidance.collection_protocols.map((protocol) => ({
      protocol_id: protocol.protocol_id,
    })),
  };
  const validationReport = validateDatasetAgainstGuidance({
    root: repoRoot,
    pcrId,
    dataset,
  });

  assert.doesNotThrow(() => assertReadiness(readiness));
  assert.doesNotThrow(() => assertGuidance(guidance));
  assert.doesNotThrow(() => assertValidationReport(validationReport));

  assert.ok(isUnknownRecord(mapping));
  assert.ok(markdownProjection.productCategoryIdentity);
  assert.ok(resolution.mapping);
  assert.ok(resolution.pcr);
  assert.deepEqual(
    new Set([
      manifest.id,
      frontmatter.pcr_id,
      mapping.pcr_id,
      markdownProjection.productCategoryIdentity.canonical_pcr_id,
      structured.product_category_identity.canonical_pcr_id,
      resolution.mapping.pcr_id,
      resolution.pcr.id,
      guidance.pcr.id,
      validationReport.pcr.id,
    ]),
    new Set([pcrId]),
  );

  assert.equal(readiness.projection_fingerprint.status, "current");
  assert.equal(readiness.projection_fingerprint.schema_valid, true);
  assert.equal(readiness.usable_for_guidance, true);
  assert.equal(readiness.usable_for_validation, true);
  assert.deepEqual(guidance.readiness, readiness);
  assert.deepEqual(validationReport.readiness, readiness);

  assert.deepEqual(guidance.system_boundary, structured.system_boundary);
  assert.deepEqual(guidance.reference_flow, structured.reference_flow_definition);
  assert.deepEqual(guidance.process_map, structured.process_map);
  assert.deepEqual(guidance.process_inventory, structured.process_inventory);
  assert.deepEqual(guidance.allocation_rules, structured.allocation_rules);
  assert.deepEqual(guidance.validation_rules, structured.validation_rules);
  assert.deepEqual(
    guidance.production_guidance.collection_protocols,
    structured.dataset_production.collection_protocols,
  );

  assert.equal(validationReport.validation_status, "passed");
  assert.equal(validationReport.finding_count, 0);
  assert.equal(
    validationReport.check_coverage.checks_performed[0]!.requirement_count,
    guidance.production_guidance.collection_protocols.length,
  );
});

test("builder semantic preflight rejects a schema-valid incomplete material projection", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-cross-layer-"));
  const relativePcrDirectory = "library/pcrs/agriculture/crops/wheat-seed";
  const copiedPcrDirectory = path.join(root, relativePcrDirectory);
  try {
    mkdirSync(path.dirname(copiedPcrDirectory), { recursive: true });
    cpSync(pcrDirectory, copiedPcrDirectory, { recursive: true });

    const markdownPath = path.join(copiedPcrDirectory, "pcr.en-US.md");
    const markdown = readFileSync(markdownPath, "utf8").replace(/^\| What \|.*\n/mu, "");
    const projection = parsePcrMarkdownToStructured(markdown);
    writeFileSync(markdownPath, markdown);
    writeFileSync(
      path.join(copiedPcrDirectory, "structured.yaml"),
      structuredProjectionYaml(projection, { sourceMarkdown: markdown }),
    );

    const result = inspectPcrDirectory({ root, pcrDir: copiedPcrDirectory });
    assert.ok(
      result.problems.some((problem) =>
        problem.includes("Functional Unit is missing what"),
      ),
    );
    assert.equal(
      result.problems.some((problem) => problem.includes("stale structured projection")),
      false,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

function readYaml(filePath: string) {
  const value=parseYaml(readFileSync(filePath, "utf8"));
  assert.ok(isUnknownRecord(value));return value;
}

function parseFrontmatter(markdown: string) {
  const lines = String(markdown).replace(/^\uFEFF/u, "").split(/\r?\n/u);
  assert.equal(lines[0]?.trim(), "---", "fixture Markdown must start with frontmatter");
  const closingIndex = lines.findIndex((line, index) => index > 0 && line.trim() === "---");
  assert.ok(closingIndex > 0, "fixture Markdown frontmatter must be closed");
  const value=parseYaml(lines.slice(1, closingIndex).join("\n"));
  assert.ok(isUnknownRecord(value));return value;
}
