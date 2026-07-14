import assert from "node:assert/strict";
import test from "node:test";

import { materialProjectionCompletenessIssues } from "../../packages/pcr-core/src/projection-completeness.mjs";
import { manifestIdentityProblems } from "./lifecycle-policy.mjs";
import {
  validateClassificationMapping,
  validateManifest,
  validateMarkdownFrontmatter,
  validateStructured,
} from "./schema-contracts.mjs";

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

test("builder contracts bind stable lifecycle and mapping tokens to shared vocabularies", () => {
  const manifest = {
    schema_version: 1,
    id: "pcr.example",
    title: { "en-US": "Example", "zh-CN": "示例" },
    status: "active",
    pcr_kind: "product_category_rule",
    content_maturity: "reviewed_methodology",
    target_entities: ["process"],
    translation_status: { "zh-CN": "reviewed" },
    classification_refs: [
      {
        system: "cpc",
        version: "3.0",
        code: "01234",
        title: "Example",
        mapping_type: "exact",
      },
    ],
  };
  const frontmatter = {
    schema_version: 1,
    pcr_id: "pcr.example",
    language: "en-US",
    status: "active",
    content_maturity: "reviewed_methodology",
    translation_status: "canonical",
    sync_with: "pcr.zh-CN.md",
  };
  const mapping = {
    schema_version: 1,
    classification_system: "cpc",
    classification_version: "3.0",
    status: "draft",
    mappings: [
      {
        code: "01234",
        label: "Example",
        pcr_id: "pcr.example",
        mapping_type: "exact",
        confidence: "high",
      },
    ],
  };

  assert.equal(validateManifest(manifest).valid, true);
  assert.equal(validateMarkdownFrontmatter(frontmatter).valid, true);
  assert.equal(
    validateMarkdownFrontmatter({ ...frontmatter, translation_status: "reviewed" }).valid,
    true,
  );
  assert.equal(validateClassificationMapping(mapping).valid, true);

  assert.equal(validateManifest({ ...manifest, status: "approved" }).valid, false);
  assert.equal(
    validateManifest({ ...manifest, content_maturity: "finished_methodology" }).valid,
    false,
  );
  assert.equal(validateManifest({ ...manifest, target_entities: ["report"] }).valid, false);
  assert.equal(
    validateManifest({ ...manifest, translation_status: { "zh-CN": "canonical" } }).valid,
    false,
  );
  assert.equal(
    validateMarkdownFrontmatter({ ...frontmatter, translation_status: "approved" }).valid,
    false,
  );
  assert.equal(
    validateManifest({
      ...manifest,
      classification_refs: [{ ...manifest.classification_refs[0], mapping_type: "approximate" }],
    }).valid,
    false,
  );
  mapping.mappings[0].mapping_type = "approximate";
  assert.equal(validateClassificationMapping(mapping).valid, false);
});
