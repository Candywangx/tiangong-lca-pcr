import assert from "node:assert/strict";
import test from "node:test";

import { materialProjectionCompletenessIssues } from "../../packages/pcr-core/src/projection-completeness.mjs";
import { manifestIdentityProblems } from "./lifecycle-policy.mjs";
import { validateManifest, validateStructured } from "./schema-contracts.mjs";

test("manifest Schema validates shape while active identity completeness stays semantic", () => {
  const manifest = {
    schema_version: 1,
    id: "pcr.example",
    title: { "en-US": "Example", "zh-CN": "示例" },
    status: "active",
    pcr_kind: "product_category_rule",
    content_maturity: "reviewed_methodology",
  };

  assert.equal(validateManifest(manifest).valid, true);
  assert.deepEqual(manifestIdentityProblems(manifest), [
    "manifest requires non-empty target_entities array",
    "manifest requires non-empty languages.canonical",
    "manifest requires non-empty languages.available array",
  ]);
});

test("structured Schema permits empty sections whose material completeness is checked semantically", () => {
  const hash = `sha256:${"a".repeat(64)}`;
  const projection = {
    schema_version: 1,
    generated_from: "markdown",
    source_markdown: "pcr.en-US.md",
    product_category_identity: {},
    functional_unit: {},
    system_boundary: { rules: [] },
    boundary_abstraction: {},
    reference_flow_definition: {},
    reference_flows: [],
    measurement_rules: [],
    process_map: [],
    process_inventory: [],
    allocation_rules: [],
    dataset_production: {
      collection_protocols: [],
      calculation_rules: [],
      data_quality_requirements: [],
    },
    validation_rules: [],
    published_dataset_profile: {},
    data_sources: [],
    projection_metadata: {
      contract_version: "1",
      generator: "tiangong-pcr-builder/markdown-projection",
      canonical_markdown: {
        path: "pcr.en-US.md",
        normalization: "utf8-lf-v1",
        hash_algorithm: "sha256",
        sha256: hash,
      },
      generated_content_sha256: hash,
    },
  };
  const result = validateStructured(projection);
  const completenessIssues = materialProjectionCompletenessIssues(projection, {
    expectedPcrId: "pcr.example",
  });

  assert.deepEqual(result.errors, []);
  assert.equal(result.valid, true);
  assert.ok(
    completenessIssues.some(
      (issue) => issue.code === "material_projection.functional_unit.what",
    ),
  );
  assert.ok(
    completenessIssues.some(
      (issue) => issue.code === "material_projection.process_inventory.flow_rows",
    ),
  );
});
