import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import test from "node:test";

import {
  buildGuidance,
  createFeedbackDraft,
  getPcrReadiness,
  validateDatasetAgainstGuidance,
} from "./src/index.mjs";
import {
  assertReadiness,
  assertStructured,
  CORE_SCHEMA_IDS,
  validateDatasetInput,
  validateFeedbackDraft,
  validateFeedbackIntake,
  validateGuidance,
  validateModelInput,
  validateReadiness,
  validateStructured,
  validateValidationReport,
} from "./src/contracts.mjs";
import { createSchemaRegistry } from "./src/schema-validation.mjs";
import { parseYaml } from "./src/yaml-lite.mjs";

const repoRoot = path.resolve(".");
const wheatSeedPcrId =
  "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";
const wheatSeedStructured = path.join(
  repoRoot,
  "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed/structured.yaml",
);

test("all pcr-core JSON Schemas compile together in strict Ajv 2020 mode", () => {
  const schemaDirectory = path.join(repoRoot, "packages/pcr-core/schemas");
  const schemas = readdirSync(schemaDirectory)
    .filter((fileName) => fileName.endsWith(".schema.json"))
    .map((fileName) => JSON.parse(readFileSync(path.join(schemaDirectory, fileName), "utf8")));

  assert.doesNotThrow(() => createSchemaRegistry(schemas));
});

test("material structured contract rejects an empty object with stable sorted errors", () => {
  const first = validateStructured({});
  const second = validateStructured({});

  assert.equal(first.valid, false);
  assert.deepEqual(first, second);
  assert.equal(first.code, "PCR_SCHEMA_INVALID");
  assert.equal(first.entity_kind, "structured_projection");
  assert.equal(first.schema_id, CORE_SCHEMA_IDS.structured);
  assert.deepEqual(first.errors[0], {
    code: "schema.required",
    instance_path: "/allocation_rules",
    schema_path: "#/required",
    keyword: "required",
    message: "must have required property 'allocation_rules'",
    params: { missingProperty: "allocation_rules" },
  });
  assert.deepEqual(
    first.errors.map((error) => error.instance_path),
    [...first.errors.map((error) => error.instance_path)].sort(),
  );
});

test("material structured contract accepts a minimal valid F3 projection", () => {
  assert.equal(validateStructured(minimalStructuredProjection()).valid, true);
});

test("material structured contract accepts a generated repository projection", () => {
  const structured = parseYaml(readFileSync(wheatSeedStructured, "utf8"));
  const result = validateStructured(structured);

  assert.deepEqual(result.errors, []);
  assert.equal(result.valid, true);
});

test("contract validation never coerces or mutates input", () => {
  const value = minimalStructuredProjection();
  value.schema_version = "1";
  const before = structuredClone(value);

  assert.equal(validateStructured(value).valid, false);
  assert.deepEqual(value, before);
});

test("assert contract exposes a stable machine-readable error envelope", () => {
  assert.throws(
    () => assertStructured({}, { source: "fixture/structured.yaml" }),
    (error) => {
      assert.equal(error.code, "PCR_SCHEMA_INVALID");
      assert.equal(error.entity_kind, "structured_projection");
      assert.equal(error.source, "fixture/structured.yaml");
      assert.deepEqual(error.toJSON().errors, error.errors);
      return true;
    },
  );
});

test("core output and flexible input contract functions validate real values", () => {
  const readiness = getPcrReadiness({ root: repoRoot, pcrId: wheatSeedPcrId, refresh: true });
  const guidance = buildGuidance({ root: repoRoot, pcrId: wheatSeedPcrId });
  const report = validateDatasetAgainstGuidance({
    root: repoRoot,
    pcrId: wheatSeedPcrId,
    dataset: {},
  });
  const feedbackDraft = createFeedbackDraft({
    root: repoRoot,
    pcrId: wheatSeedPcrId,
    type: "validation_rule_issue",
    summary: "Clarify one validation rule.",
  });

  assert.equal(validateReadiness(readiness).valid, true);
  assert.equal(validateGuidance(guidance).valid, true);
  assert.equal(validateValidationReport(report).valid, true);
  assert.equal(validateFeedbackDraft(feedbackDraft).valid, true);
  assert.equal(validateFeedbackIntake({
    feedback_type: "validation_rule_issue",
    summary: "Clarify one validation rule.",
  }).valid, true);
  assert.equal(validateFeedbackIntake({
    feedback_type: "validation_rule_issue",
    summary: "",
  }).valid, false);
  assert.equal(validateModelInput("model draft").valid, true);
  assert.equal(validateModelInput({ entity: "process" }).valid, true);
  assert.equal(validateModelInput([]).valid, false);
  assert.equal(validateDatasetInput({ collection_records: [] }).valid, true);
  assert.equal(validateDatasetInput([]).valid, false);
});

test("readiness contract rejects cross-field usability contradictions", () => {
  const readiness = getPcrReadiness({ root: repoRoot, pcrId: wheatSeedPcrId, refresh: true });
  readiness.blockers.push({ code: "fixture_blocker", message: "Fixture blocker." });

  const result = validateReadiness(readiness);

  assert.equal(result.valid, false);
  assert.equal(result.code, "PCR_SEMANTIC_CONTRACT_INVALID");
  assert.ok(result.errors.some((error) => error.code === "semantic.readiness.blocked_status"));
  assert.ok(result.errors.some((error) => error.code === "semantic.readiness.blocked_usability"));
  assert.throws(
    () => assertReadiness(readiness, { source: "fixture/readiness.json" }),
    (error) => {
      assert.equal(error.name, "CoreContractSemanticError");
      assert.equal(error.code, "PCR_SEMANTIC_CONTRACT_INVALID");
      assert.equal(error.source, "fixture/readiness.json");
      assert.deepEqual(error.toJSON().errors, error.errors);
      return true;
    },
  );
});

test("validation report contract rejects cross-field count and status contradictions", () => {
  const report = validateDatasetAgainstGuidance({
    root: repoRoot,
    pcrId: wheatSeedPcrId,
    dataset: {},
  });
  report.finding_count = 99;
  report.finding_summary.error = 0;
  report.check_coverage.total_requirement_count = 0;
  report.completeness = "complete";
  report.validation_status = "passed";

  const result = validateValidationReport(report);

  assert.equal(result.valid, false);
  assert.equal(result.code, "PCR_SEMANTIC_CONTRACT_INVALID");
  for (const code of [
    "semantic.validation.completeness",
    "semantic.validation.finding_count",
    "semantic.validation.finding_summary.error",
    "semantic.validation.status",
    "semantic.validation.total_requirement_count",
  ]) {
    assert.ok(result.errors.some((error) => error.code === code), code);
  }
  assert.deepEqual(
    result.errors.map((error) => error.instance_path),
    [...result.errors.map((error) => error.instance_path)].sort(),
  );
});

function minimalStructuredProjection() {
  const hash = `sha256:${"a".repeat(64)}`;
  const rule = {
    rule_id: "rule_1",
    applies_to: "foreground_dataset",
    rule: "Apply the declared rule.",
    source_ids: [],
  };
  const emptyGroups = { product: [], waste: [], elementary: [] };

  return {
    schema_version: 1,
    generated_from: "markdown",
    source_markdown: "pcr.en-US.md",
    product_category_identity: { canonical_pcr_id: "pcr.example" },
    functional_unit: {
      what: "Example product",
      how_much: "1 kg",
      how_well: "Declared quality",
      how_long_or_cycle: "One batch",
      reference_flow_link: "reference_product_flow",
    },
    system_boundary: { rules: [rule] },
    boundary_abstraction: { declared_starting_condition: "declared input" },
    reference_flow_definition: {
      reference_amount: "1 kg",
      product_flow_ref: { name: "Example product", uuid: "example-flow" },
      flow_property_ref: { uuid: "mass-property" },
      unit_group_ref: { uuid: "mass-units" },
      reference_unit: "kg",
      required_qualifiers: [],
    },
    reference_flows: [],
    measurement_rules: [
      {
        id: "reference_mass",
        applies_to: "reference product",
        required_property_ref: { name: "Mass", uuid: "mass-property" },
        required_unit: "kg",
        rule: "Use measured mass.",
      },
    ],
    process_map: [
      {
        id: "production",
        name: "Production",
        inclusion: "required",
        inclusion_condition: "Always",
        role: "Produce the reference product",
        quantitative_reference: "Reference product output",
      },
    ],
    process_inventory: [
      {
        id: "production",
        label: "Production",
        inputs: structuredClone(emptyGroups),
        outputs: structuredClone(emptyGroups),
      },
    ],
    allocation_rules: [rule],
    dataset_production: {
      collection_protocols: [],
      calculation_rules: [],
      data_quality_requirements: [],
    },
    validation_rules: [rule],
    published_dataset_profile: { dataset_role: "unit_process" },
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
}
