import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import {
  buildGuidance,
  createFeedbackDraft,
  getPcrReadiness,
  listPcrs,
  resolveClassification,
  validateDatasetAgainstGuidance,
  validateModelAgainstGuidance,
} from "./src/index.mjs";
import { parseYaml, renderYaml } from "./src/yaml-lite.mjs";

const repoRoot = path.resolve(".");
const wheatSeedPcrId =
  "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";
const scaffoldPcrId =
  "pcr.community-social-and-personal-services.education-services.primary-education-services";

test("listPcrs exposes canonical PCR records without relying on search", () => {
  const pcrs = listPcrs({ root: repoRoot });
  const wheatSeed = pcrs.find((entry) => entry.id === wheatSeedPcrId);

  assert.ok(wheatSeed);
  assert.equal(wheatSeed.title["en-US"], "Wheat seed for sowing");
  assert.equal(wheatSeed.title["zh-CN"], "小麦播种种子");
  assert.equal(wheatSeed.status, "candidate");
  assert.equal(wheatSeed.path.includes("/01111"), false);
  assert.equal(wheatSeed.readiness.status, "review_required");
  assert.equal(wheatSeed.readiness.usable_for_guidance, true);
});

test("listPcrs rejects a missing repository catalog instead of returning an empty success", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-missing-catalog-"));
  try {
    assert.throws(
      () => listPcrs({ root, refresh: true }),
      /PCR catalog root not found: library\/pcrs/u,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("PCR readiness distinguishes authored guidance from empty scaffolds", () => {
  const authored = getPcrReadiness({ root: repoRoot, pcrId: wheatSeedPcrId });
  const scaffold = getPcrReadiness({ root: repoRoot, pcrId: scaffoldPcrId });

  assert.equal(authored.methodology_status, "authored_methodology");
  assert.equal(authored.usable_for_guidance, true);
  assert.equal(authored.usable_for_validation, true);
  assert.equal(scaffold.status, "unavailable");
  assert.equal(scaffold.methodology_status, "empty_scaffold");
  assert.equal(scaffold.usable_for_guidance, false);
  assert.ok(scaffold.blockers.some((blocker) => blocker.code === "methodology_not_authored"));
});

test("PCR readiness rejects incompatible lifecycle and maturity combinations", () => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-readiness-state-"));
  const pcrDir = path.join(root, "library/pcrs/example");
  try {
    mkdirSync(pcrDir, { recursive: true });
    writeFileSync(
      path.join(pcrDir, "manifest.yaml"),
      `schema_version: 1
id: pcr.example
title:
  en-US: Example
status: active
content_maturity: authored_methodology
`,
    );
    writeFileSync(path.join(pcrDir, "structured.yaml"), "schema_version: 1\n");

    const readiness = getPcrReadiness({ root, pcrId: "pcr.example", refresh: true });

    assert.equal(readiness.status, "unavailable");
    assert.equal(readiness.usable_for_guidance, false);
    assert.ok(
      readiness.blockers.some((blocker) => blocker.code === "incompatible_lifecycle_state"),
    );

    writeFileSync(
      path.join(pcrDir, "manifest.yaml"),
      `schema_version: 1
id: pcr.example
title:
  en-US: Example
status: active
content_maturity: reviewed_methodology
translation_status:
  zh-CN: draft_translation
`,
    );
    const translationReadiness = getPcrReadiness({
      root,
      pcrId: "pcr.example",
      refresh: true,
    });
    assert.equal(translationReadiness.status, "unavailable");
    assert.ok(
      translationReadiness.blockers.some(
        (blocker) => blocker.code === "translation_not_aligned",
      ),
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("resolveClassification uses deterministic mapping files", () => {
  const result = resolveClassification({
    root: repoRoot,
    system: "cpc",
    version: "3.0",
    code: "01111",
  });

  assert.equal(result.mapping.pcr_id, wheatSeedPcrId);
  assert.equal(result.mapping.mapping_type, "exact");
  assert.equal(result.pcr.title["en-US"], "Wheat seed for sowing");
});

test("buildGuidance returns structured rules for Agent data package construction", () => {
  const guidance = buildGuidance({ root: repoRoot, pcrId: wheatSeedPcrId });

  assert.equal(guidance.pcr.id, wheatSeedPcrId);
  assert.equal(guidance.reference_flow.reference_unit, "kg");
  assert.equal(guidance.reference_flow.product_flow_ref.uuid, "12da5e7d-9b93-4404-8c7d-08f98bec6238");
  assert.ok(guidance.system_boundary.rules.some((entry) => entry.rule_id === "system_boundary_rule_1"));
  assert.equal(guidance.boundary_abstraction.declared_starting_condition, "source_seed_lot");
  assert.ok(guidance.process_map.some((entry) => entry.id === "field_seed_multiplication"));
  assert.ok(guidance.production_guidance.collection_protocols.length > 0);
  assert.equal(guidance.published_dataset_profile.dataset_role, "unit_process");
  assert.ok(guidance.allocation_rules.some((entry) => entry.rule_id === "allocation_rule_1"));
  assert.ok(guidance.validation_rules.some((entry) => entry.rule_id === "validation_rule_1"));
  assert.ok(guidance.validation_notes.some((note) => note.includes("validate-dataset")));
  assert.equal(guidance.readiness.usable_for_guidance, true);
});

test("buildGuidance rejects empty scaffolds instead of presenting them as usable", () => {
  assert.throws(
    () => buildGuidance({ root: repoRoot, pcrId: scaffoldPcrId }),
    (error) => {
      assert.equal(error.code, "PCR_NOT_USABLE_FOR_GUIDANCE");
      assert.equal(error.readiness.usable_for_guidance, false);
      assert.match(error.message, /empty_scaffold/);
      return true;
    },
  );
});

test("validation rejects empty scaffolds instead of returning zero findings", () => {
  assert.throws(
    () => validateDatasetAgainstGuidance({ root: repoRoot, pcrId: scaffoldPcrId, dataset: {} }),
    (error) => {
      assert.equal(error.code, "PCR_NOT_USABLE_FOR_VALIDATION");
      assert.equal(error.readiness.usable_for_validation, false);
      return true;
    },
  );
});

test("createFeedbackDraft produces issue-ready PCR feedback content", () => {
  const draft = createFeedbackDraft({
    root: repoRoot,
    pcrId: wheatSeedPcrId,
    type: "range_evidence_update",
    affectedSection: "Process Inventory",
    processId: "field_seed_multiplication",
    summary: "Observed a narrower seeding-rate range for a regional dataset.",
  });

  assert.match(draft.title, /PCR feedback: range_evidence_update/);
  assert.match(draft.body, new RegExp(wheatSeedPcrId));
  assert.match(draft.body, /field_seed_multiplication/);
  assert.match(draft.body, /Observed a narrower seeding-rate range/);
});

test("validateDatasetAgainstGuidance reports missing collection protocol records", () => {
  const result = validateDatasetAgainstGuidance({
    root: repoRoot,
    pcrId: wheatSeedPcrId,
    dataset: { collection_records: [{ protocol_id: "cp_source_seed_lot_mass" }] },
  });

  assert.equal(result.validation_status, "failed");
  assert.equal(result.completeness, "partial");
  assert.equal(result.input.accepted, true);
  assert.equal(result.input.collection_record_count, 1);
  assert.equal(result.readiness.usable_for_validation, true);
  assert.ok(result.check_coverage.checks_performed.some((check) => check.check_id === "collection_protocol_presence"));
  assert.ok(result.check_coverage.checks_skipped.length > 0);
  assert.ok(result.check_coverage.checks_skipped.some((check) => check.check_id === "process_map"));
  assert.ok(
    result.check_coverage.checks_skipped.some(
      (check) => check.check_id === "published_dataset_profile",
    ),
  );
  assert.ok(result.findings.some((finding) => finding.code === "missing_collection_protocol_record"));
  assert.ok(result.findings.some((finding) => finding.message.includes("cp_harvested_seed_mass")));
});

test("dataset validation reports invalid JSON-compatible input shapes without false coverage", () => {
  const result = validateDatasetAgainstGuidance({
    root: repoRoot,
    pcrId: wheatSeedPcrId,
    dataset: ["not", "an", "object"],
  });

  assert.equal(result.validation_status, "failed");
  assert.equal(result.completeness, "none");
  assert.equal(result.input.accepted, false);
  assert.equal(result.check_coverage.checked_requirement_count, 0);
  assert.ok(result.findings.some((finding) => finding.code === "invalid_dataset_input"));
});

test("model validation uses the same explicit readiness and coverage report contract", () => {
  const result = validateModelAgainstGuidance({
    root: repoRoot,
    pcrId: wheatSeedPcrId,
    model: "wheat seed model",
  });

  assert.equal(result.validation_kind, "tiangong-pcr-model-validation");
  assert.equal(result.input.accepted, true);
  assert.equal(result.readiness.usable_for_validation, true);
  assert.equal(result.completeness, "partial");
  assert.ok(result.check_coverage.checks_performed.some((check) => check.check_id === "required_qualifier_presence"));
  assert.ok(
    result.check_coverage.checks_skipped.some(
      (check) => check.check_id === "reference_flow_definition",
    ),
  );
  assert.ok(result.check_coverage.checks_skipped.some((check) => check.check_id === "process_map"));
});

test("yaml-lite renders parseable structured YAML", () => {
  const source = {
    schema_version: "1",
    id: "pcr.example",
    title: {
      "en-US": "Example PCR",
      "zh-CN": null,
    },
    status: "published",
    target_entities: ["flow", "process", "dataset"],
    classification_refs: [
      {
        system: "CPC",
        version: "3.0",
        code: "01111",
      },
    ],
  };

  assert.deepEqual(parseYaml(renderYaml(source)), source);
});
