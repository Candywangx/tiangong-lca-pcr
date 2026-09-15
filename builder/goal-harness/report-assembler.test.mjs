import assert from "node:assert/strict";
import test from "node:test";
import { assembleAuthorReport } from "./report-assembler.mjs";
import { validateAuthorReport } from "./author-gates.mjs";

const uuid = "11111111-1111-4111-8111-111111111111";
function fixture() {
  const read = { uuid, state_code: 100, base_name_en: "Alternating current", base_name_zh: "", flow_type: "product",
    classifications: [{ id: "17100", label: "Electrical energy" }], property: "Energy",
    flow_property_uuid: "22222222-2222-4222-8222-222222222222", flow_property_name_en: "Energy", flow_property_state_code: 100,
    unit_group_uuid: "33333333-3333-4333-8333-333333333333", unit_group_name_en: "Units of energy", unit_group_name_zh: "能量单位",
    unit_group_state_code: 100, reference_unit: "kWh", response_sha256: `sha256:${"a".repeat(64)}` };
  const claim = { uuid, hybrid_search_receipt_id: "receipt", semantic_review: "Purchased electricity input; verified applicable to the inventory row." };
  const receiptAudits = [{ receipt_id: "receipt", authenticated: true, result_sha256: `sha256:${"b".repeat(64)}`,
    candidate_uuids: [uuid], candidate_decisions: [{ uuid, decision: "adopted", direct_read: read }] }];
  const draft = { schema_version: 2, cpc_code: "44125", product_name_en: "Baler", product_name_zh: "打捆机",
    pcr_path: "library/pcrs/test/baler", queue_action: "create_new", files: ["a", "b", "c", "d"], sources: [], uuid_audits: [claim],
    inventory: { total_rows: 1, matched_rows: 1, unresolved_rows: 0, unresolved: [] }, reference_product_uuid_confirmed: false,
    ranges: [], bilingual: { aligned: true, en_inventory_rows: 1, zh_inventory_rows: 1 },
    structured_sync: { first_run_ok: true, second_run_clean: true, schema_valid: true },
    validate: { ok: true, exit_code: 0, known_shared_artifact_only: false, summary: null },
    complexity_justification: null, cartesian_expansion_review: null, methodology_necessity_approved: null,
    commit_sha: "a".repeat(40), unresolved_issues: [], receipt_ids: ["receipt"] };
  return { read, claim, draft, receiptAudits };
}

test("draft v2 derives a full report v1 only from adopted verified direct-read identities without mutating inputs", () => {
  const f = fixture(), before = structuredClone(f);
  const report = assembleAuthorReport(f);
  assert.equal(report.schema_version, 1);
  assert.deepEqual(report.uuid_audits, [{ ...f.claim, state_code: 100, base_name_en: "Alternating current", base_name_zh: "",
    flow_type: "product", classification: "17100", property: "Energy", unit_group: f.read.unit_group_uuid }]);
  assert.deepEqual(report.hybrid_search_receipt_ids, ["receipt"]);
  assert.deepEqual(report.rejected_uuid_candidates, []);
  assert.equal(validateAuthorReport(report).valid, true);
  assert.deepEqual(f, before);
});

for (const [field, wrong] of Object.entries({state_code:101,base_name_en:"invented",base_name_zh:"invented",flow_type:"waste",classification:"99999",property:"Mass",unit_group:"kg"})) {
  test(`draft v2 rejects an explicit conflicting ${field} without overwriting it`, () => {
    const f = fixture(); f.claim[field] = wrong;
    assert.throws(() => assembleAuthorReport(f), error => error.code === "GOAL_REPORT_DECISION_CONFLICT"
      && error.details.failure_kind === "author_claim" && error.details.subject_id === uuid);
    assert.equal(f.claim[field], wrong);
  });
}

test("explicit verified alternate identity labels are retained and empty Chinese name remains empty", () => {
  const f = fixture(); Object.assign(f.claim, { classification: "Electrical energy", unit_group: "Units of energy", base_name_zh: "" });
  const report = assembleAuthorReport(f);
  assert.equal(report.uuid_audits[0].classification, "Electrical energy");
  assert.equal(report.uuid_audits[0].unit_group, "Units of energy");
  assert.equal(report.uuid_audits[0].base_name_zh, "");
  assert.equal(validateAuthorReport(report).valid, true);
});

test("projection uses deterministic existing classification ids and never invents absent product classification", () => {
  const f = fixture(); f.read.classifications.push({ id: "00100", label: "First category" });
  assert.equal(assembleAuthorReport(f).uuid_audits[0].classification, "00100");
  f.read.classifications.reverse();
  assert.equal(assembleAuthorReport(f).uuid_audits[0].classification, "00100");
  f.read.classifications = [];
  assert.throws(() => assembleAuthorReport(f), { code: "GOAL_REPORT_RECEIPT_IDENTITY_INVALID" });
  f.read.flow_type = "elementary";
  assert.equal(assembleAuthorReport(f).uuid_audits[0].classification, "");
});

for (const mutation of [f=>{f.receiptAudits[0].authenticated=false;},f=>{delete f.read.unit_group_uuid;},f=>{f.read.flow_property_state_code=0;},f=>{f.read.unit_group_state_code=0;},f=>{delete f.read.response_sha256;},f=>{f.read.uuid="44444444-4444-4444-8444-444444444444";}]) {
  test("sparse identity derivation refuses incomplete or unverified receipt facts", () => {
    const f = fixture(); mutation(f);
    assert.throws(() => assembleAuthorReport(f), error => error.code === "GOAL_REPORT_RECEIPT_IDENTITY_INVALID" && error.details.failure_kind === "receipt_integrity");
  });
}

test("duplicate adoption claims, receipt ids or decisions cannot be silently selected by map order", () => {
  for (const mutate of [f=>f.draft.uuid_audits.push({...f.claim}),f=>f.receiptAudits.push({...f.receiptAudits[0]}),f=>f.receiptAudits[0].candidate_decisions.push({...f.receiptAudits[0].candidate_decisions[0]})]) {
    const f = fixture(); mutate(f);
    assert.throws(() => assembleAuthorReport(f));
  }
});

test("historical draft v1 retains the old full identity copy and rejected-candidate generation", () => {
  const f = fixture(); f.draft.schema_version = 1;
  Object.assign(f.claim, {state_code:100,base_name_en:"Alternating current",base_name_zh:"",flow_type:"product",classification:"Electrical energy",property:"Energy",unit_group:"kWh"});
  const before = structuredClone(f.draft);
  const report = assembleAuthorReport(f);
  assert.deepEqual(report.uuid_audits, before.uuid_audits);
  assert.equal(report.schema_version, 1);
  assert.equal(validateAuthorReport(report).valid, true);
  assert.deepEqual(f.draft, before);
});
