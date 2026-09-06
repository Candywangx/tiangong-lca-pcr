import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { assertAuthorQuality, validateAuthorReport } from "./author-gates.mjs";

test("author report response schema avoids keywords rejected by Codex Structured Outputs", async () => {
  const schemaUrl = new URL("../schemas/goal-author-report.schema.json", import.meta.url);
  const schema = JSON.parse(await readFile(schemaUrl, "utf8"));
  const visit = (value, path = "$") => {
    if (!value || typeof value !== "object") return;
    for (const keyword of ["not", "uniqueItems"]) {
      assert.equal(Object.hasOwn(value, keyword), false, `${path} must not use unsupported keyword '${keyword}'`);
    }
    if (typeof value.pattern === "string") {
      assert.equal(value.pattern.includes("(?"), false, `${path}.pattern must not use unsupported regex lookaround`);
    }
    if (value.type === "object" && value.properties) {
      assert.deepEqual(
        [...(value.required ?? [])].sort(),
        Object.keys(value.properties).sort(),
        `${path}.required must include every property for Codex Structured Outputs compatibility`,
      );
    }
    for (const [key, child] of Object.entries(value)) visit(child, `${path}.${key}`);
  };
  visit(schema);
});

const pcrPath = "library/pcrs/metal-products-machinery-and-equipment/basic-metals/pig-iron";
const files = ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"].map((file) => `${pcrPath}/${file}`);

function report(overrides = {}) {
  return {
    schema_version: 1,
    cpc_code: "41111",
    product_name_en: "Pig iron",
    product_name_zh: "生铁",
    pcr_path: pcrPath,
    queue_action: "promote_legacy",
    files,
    sources: [{ source_id: "unsd-cpc-3", name: "UNSD CPC 3.0", locator: "https://example.invalid/cpc.pdf", original_text_verified: true, supports: ["product identity"], independence_key: "unsd", discovery_only: false }],
    hybrid_search_receipt_ids: ["receipt-1"],
    uuid_audits: [{
      uuid: "11111111-1111-4111-8111-111111111111",
      hybrid_search_receipt_id: "receipt-1",
      state_code: 100,
      base_name_en: "Pig iron",
      base_name_zh: "生铁",
      flow_type: "product",
      classification: "CPC 41111",
      property: "Mass",
      unit_group: "Units of mass",
      semantic_review: "Exact product, state, geography, technology, property, and unit are suitable.",
    }],
    rejected_uuid_candidates: [],
    inventory: {
      total_rows: 2,
      matched_rows: 1,
      unresolved_rows: 1,
      unresolved: [{ row_id: "input_coke", reason_code: "no_exact_candidate", explanation: "No public exact candidate after direct reads.", hybrid_search_receipt_ids: ["receipt-1"] }],
    },
    reference_product_uuid_confirmed: true,
    ranges: [],
    bilingual: { aligned: true, en_inventory_rows: 2, zh_inventory_rows: 2 },
    structured_sync: { first_run_ok: true, second_run_clean: true, schema_valid: true },
    validate: { ok: true, exit_code: 0, known_shared_artifact_only: false, summary: null },
    complexity_justification: null,
    cartesian_expansion_review: null,
    methodology_necessity_approved: null,
    commit_sha: "a".repeat(40),
    unresolved_issues: [],
    ...overrides,
  };
}

function rows() {
  return {
    en: [
      { row_id: "output_pig_iron", name: "Pig iron", uuid: "11111111-1111-4111-8111-111111111111", flow_type: "product", amount: { ranges: [] } },
      { row_id: "input_coke", name: "Metallurgical coke", uuid: "", flow_type: "product", amount: { ranges: [] } },
    ],
    zh: [
      { row_id: "output_pig_iron", name: "生铁", uuid: "11111111-1111-4111-8111-111111111111", flow_type: "product", amount: { ranges: [] } },
      { row_id: "input_coke", name: "冶金焦炭", uuid: "", flow_type: "product", amount: { ranges: [] } },
    ],
  };
}

test("author report schema and semantic accounting accept a complete report", () => {
  assert.equal(validateAuthorReport(report()).valid, true);
  const result = assertAuthorQuality({ report: report(), authorizedFiles: files, changedFiles: files, inventoryRows: rows() });
  assert.equal(result.valid, true);
  assert.equal(result.counts.total, 2);
});

test("an unavailable TianGong Chinese baseName is recorded exactly and uses the canonical fallback name", () => {
  const candidate = report();
  candidate.uuid_audits[0].base_name_zh = "";
  candidate.uuid_audits[0].semantic_review = "TianGong Chinese baseName is unavailable; the canonical English baseName is retained.";
  const inventoryRows = rows();
  inventoryRows.zh[0].name = "Pig iron";

  assert.equal(validateAuthorReport(candidate).valid, true);
  assert.equal(assertAuthorQuality({ report: candidate, authorizedFiles: files, changedFiles: files, inventoryRows }).valid, true);
});

test("an unavailable TianGong Chinese baseName rejects an invented official name", () => {
  const candidate = report();
  candidate.uuid_audits[0].base_name_zh = "";
  candidate.uuid_audits[0].semantic_review = "TianGong Chinese baseName is unavailable; the canonical English baseName is retained.";

  assert.throws(
    () => assertAuthorQuality({ report: candidate, authorizedFiles: files, changedFiles: files, inventoryRows: rows() }),
    (error) => error.details.findings.some((finding) => finding.code === "ZH_FLOW_NAME_CANONICAL_FALLBACK_REQUIRED"),
  );
});

test("an unavailable TianGong Chinese baseName requires an explicit audit explanation", () => {
  const candidate = report();
  candidate.uuid_audits[0].base_name_zh = "";
  candidate.uuid_audits[0].semantic_review = "Exact public flow identity checked.";
  const inventoryRows = rows();
  inventoryRows.zh[0].name = "Pig iron";

  assert.throws(
    () => assertAuthorQuality({ report: candidate, authorizedFiles: files, changedFiles: files, inventoryRows }),
    (error) => error.details.findings.some((finding) => finding.code === "ZH_FLOW_NAME_UNAVAILABLE_EXPLANATION_MISSING"),
  );
});

test("author report schema rejects malformed receipt ids in every reference location", () => {
  const malformed = "receipt-1 后续使用这个值";
  const cases = [
    (candidate) => { candidate.hybrid_search_receipt_ids[0] = malformed; },
    (candidate) => { candidate.uuid_audits[0].hybrid_search_receipt_id = malformed; },
    (candidate) => {
      candidate.rejected_uuid_candidates = [{
        uuid: "22222222-2222-4222-8222-222222222222",
        receipt_id: malformed,
        reason_code: "not_exact_candidate",
        reason: "The candidate is not an exact semantic match.",
      }];
    },
    (candidate) => { candidate.inventory.unresolved[0].hybrid_search_receipt_ids[0] = malformed; },
  ];

  for (const mutate of cases) {
    const candidate = structuredClone(report());
    mutate(candidate);
    assert.equal(validateAuthorReport(candidate).valid, false);
  }
});

test("report rejects total rows that do not equal matched plus unresolved", () => {
  const invalid = report({ inventory: { total_rows: 3, matched_rows: 1, unresolved_rows: 1, unresolved: [{ row_id: "input_coke", reason_code: "no_exact_candidate", explanation: "none", hybrid_search_receipt_ids: ["receipt-1"] }] } });
  assert.throws(
    () => assertAuthorQuality({ report: invalid, authorizedFiles: files, changedFiles: files, inventoryRows: rows() }),
    (error) => error.code === "GOAL_AUTHOR_RESULT_INVALID" && error.details.findings.some((finding) => finding.code === "INVENTORY_ACCOUNTING_MISMATCH"),
  );
});

test("tiangong_cli_unavailable is an infrastructure retryable failure, never valid unresolved coverage", () => {
  const invalid = report({
    inventory: {
      total_rows: 2,
      matched_rows: 1,
      unresolved_rows: 1,
      unresolved: [{ row_id: "input_coke", reason_code: "tiangong_cli_unavailable", explanation: "CLI could not start.", hybrid_search_receipt_ids: [] }],
    },
  });
  assert.throws(
    () => assertAuthorQuality({ report: invalid, authorizedFiles: files, changedFiles: files, inventoryRows: rows() }),
    (error) => error.code === "GOAL_UUID_INFRASTRUCTURE_UNAVAILABLE",
  );
});

test("commit-tree gate rejects any file outside the exact four-file allowlist", () => {
  assert.throws(
    () => assertAuthorQuality({ report: report(), authorizedFiles: files, changedFiles: [...files, "classifications/mappings/cpc-3.0-to-pcr.yaml"], inventoryRows: rows() }),
    (error) => error.details.findings.some((finding) => finding.code === "UNAUTHORIZED_COMMIT_PATH"),
  );
});

test("atomic-flow gate rejects set-like selected flows", () => {
  const inventoryRows = rows();
  inventoryRows.en[1].name = "Electricity, steam or fuel";
  inventoryRows.zh[1].name = "电力、蒸汽或燃料";
  assert.throws(
    () => assertAuthorQuality({ report: report(), authorizedFiles: files, changedFiles: files, inventoryRows }),
    (error) => error.details.findings.some((finding) => finding.code === "INVENTORY_FLOW_NOT_ATOMIC"),
  );
});

test("bilingual gate rejects row order, UUID, and official Chinese name mismatches", () => {
  const inventoryRows = rows();
  inventoryRows.zh.reverse();
  assert.throws(
    () => assertAuthorQuality({ report: report(), authorizedFiles: files, changedFiles: files, inventoryRows }),
    (error) => error.details.findings.some((finding) => finding.code === "BILINGUAL_ROW_ALIGNMENT_MISMATCH"),
  );
  const wrongName = rows();
  wrongName.zh[0].name = "Pig iron";
  assert.throws(
    () => assertAuthorQuality({ report: report(), authorizedFiles: files, changedFiles: files, inventoryRows: wrongName }),
    (error) => error.details.findings.some((finding) => finding.code === "ZH_FLOW_NAME_NOT_OFFICIAL"),
  );
});

test("bilingual gate rejects English localizable inventory text in the Chinese rendering", () => {
  const inventoryRows = rows();
  inventoryRows.zh[1].role = "Metallurgical coke input";
  inventoryRows.zh[1].description = "Record the measured mass.";
  inventoryRows.zh[1].amount = { expression: "Measured mass per reference flow", ranges: [] };
  assert.throws(
    () => assertAuthorQuality({ report: report(), authorizedFiles: files, changedFiles: files, inventoryRows }),
    (error) => error.details.findings.some((finding) => finding.code === "ZH_INVENTORY_TEXT_NOT_LOCALIZED"),
  );
});

test("common UUID-empty flows require an auditable hybrid/direct-read query explanation", () => {
  const inventoryRows = rows();
  inventoryRows.en[1].name = "Electricity";
  inventoryRows.zh[1].name = "电力";
  const invalid = report({
    inventory: {
      total_rows: 2,
      matched_rows: 1,
      unresolved_rows: 1,
      unresolved: [{ row_id: "input_coke", reason_code: "manual_review_required", explanation: "Needs later manual review.", hybrid_search_receipt_ids: [] }],
    },
  });
  assert.throws(
    () => assertAuthorQuality({ report: invalid, authorizedFiles: files, changedFiles: files, inventoryRows }),
    (error) => error.details.findings.some((finding) => finding.code === "COMMON_FLOW_UUID_AUDIT_MISSING"),
  );
});

test("common-flow audit does not misclassify nitrogen oxides, wastewater, or oxygen-furnace products", () => {
  const inventoryRows = rows();
  inventoryRows.en[1].name = "Nitrogen monoxide to air";
  inventoryRows.zh[1].name = "一氧化氮排入空气";
  const emissionReport = report({
    inventory: {
      total_rows: 2,
      matched_rows: 1,
      unresolved_rows: 1,
      unresolved: [{ row_id: "input_coke", reason_code: "manual_review_required", explanation: "Specific elementary-flow identity requires manual review.", hybrid_search_receipt_ids: ["receipt-1"] }],
    },
  });
  assert.doesNotThrow(
    () => assertAuthorQuality({ report: emissionReport, authorizedFiles: files, changedFiles: files, inventoryRows }),
  );

  inventoryRows.en[1].name = "Gas-scrubbing wastewater";
  inventoryRows.zh[1].name = "煤气洗涤废水";
  assert.doesNotThrow(
    () => assertAuthorQuality({ report: emissionReport, authorizedFiles: files, changedFiles: files, inventoryRows }),
  );

  inventoryRows.en[1].name = "Basic oxygen furnace slag";
  inventoryRows.zh[1].name = "碱性氧气转炉渣";
  assert.doesNotThrow(
    () => assertAuthorQuality({ report: emissionReport, authorizedFiles: files, changedFiles: files, inventoryRows }),
  );
});

test("range gate rejects one-source external ranges and lower equals upper", () => {
  const oneSource = report({ ranges: [{ range_id: "coke_rate", evidence_kind: "external_source", source_ids: ["paper-a"], original_text_verified: true, independent_source_count: 1, provisional: false, lower: 1, upper: 2, synthesis: "Compared compatible values." }] });
  assert.throws(
    () => assertAuthorQuality({ report: oneSource, authorizedFiles: files, changedFiles: files, inventoryRows: rows() }),
    (error) => error.details.findings.some((finding) => finding.code === "RANGE_INDEPENDENT_SOURCES_INSUFFICIENT"),
  );
  const equal = report({ ranges: [{ range_id: "coke_rate", evidence_kind: "reasoned_estimate", source_ids: [], original_text_verified: false, independent_source_count: 0, provisional: true, lower: 1, upper: 1, synthesis: "Provisional estimate." }] });
  assert.throws(
    () => assertAuthorQuality({ report: equal, authorizedFiles: files, changedFiles: files, inventoryRows: rows() }),
    (error) => error.details.findings.some((finding) => finding.code === "RANGE_BOUNDS_INVALID"),
  );
});

test("row thresholds require auditable complexity and reject severe expansion", () => {
  const manyRows = { en: [], zh: [] };
  for (let index = 0; index < 181; index += 1) {
    manyRows.en.push({ row_id: `row_${index}`, name: `Material ${index}`, uuid: "", flow_type: "product", amount: { ranges: [] } });
    manyRows.zh.push({ row_id: `row_${index}`, name: `材料 ${index}`, uuid: "", flow_type: "product", amount: { ranges: [] } });
  }
  const unresolved = manyRows.en.map((row) => ({ row_id: row.row_id, reason_code: "no_exact_candidate", explanation: "No exact public flow.", hybrid_search_receipt_ids: ["receipt-1"] }));
  const largeReport = report({ inventory: { total_rows: 181, matched_rows: 0, unresolved_rows: 181, unresolved }, uuid_audits: [], bilingual: { aligned: true, en_inventory_rows: 181, zh_inventory_rows: 181 } });
  assert.throws(
    () => assertAuthorQuality({ report: largeReport, authorizedFiles: files, changedFiles: files, inventoryRows: manyRows }),
    (error) => error.details.findings.some((finding) => finding.code === "INVENTORY_REDESIGN_REQUIRED"),
  );
});
