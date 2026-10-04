import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { selectGuidance } from "./src/consumption-guidance.ts";
import { checkReview, prepareReview, type AgentReviewFinding } from "./src/consumption-review.ts";
import { inspectTidas } from "./src/tidas-inspection.ts";
import { isUnknownRecord } from "./src/types.ts";

const root = path.resolve(".");
const pcrId = "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-other";
const fixtureDir = path.join(root, "packages/pcr-core/fixtures/agentic-review");
const input = path.join(fixtureDir, "sowing.process.json");
const args = { root, pcrId, input };
function object(value: unknown): Record<string, unknown> { assert.ok(isUnknownRecord(value)); return value; }
function string(value: unknown): string { assert.equal(typeof value, "string"); return value as string; }
function pcrReference(value: unknown): AgentReviewFinding["pcr_refs"][number] {
  const fields = object(value);
  const version = fields.version;
  assert.ok(version === null || typeof version === "string");
  return { pcr_id: string(fields.pcr_id), version, projection_sha256: string(fields.projection_sha256),
    markdown_sha256: string(fields.markdown_sha256), methodology_status: string(fields.methodology_status), pointer: string(fields.pointer) };
}

test("selected PCR guidance binds original rules and applicability to reproducible projection citations", () => {
  const result = selectGuidance({ root, pcrId, topic: "boundary", pageSize: 1 });
  assert.ok("items" in result && result.pagination);
  const first = result.items[0]; assert.ok(first);
  assert.equal(result.pagination.has_more, true);
  assert.equal(first.rule_id, "boundary_crop_cycle");
  assert.equal(object(first.value).applies_to, "foreground_system_boundary");
  assert.match(result.pcr.projection_sha256, /^sha256:/u);
  assert.equal(result.readiness.status, "review_required");
  const full = selectGuidance({ root, pcrId, pointer: first.source.pointer });
  assert.ok("value" in full);
  assert.deepEqual(full.value, first.value);
  assert.deepEqual(full.source, first.source);
  assert.throws(() => selectGuidance({ root, pcrId, topic: "__proto__" }), { code: "PCR_GUIDANCE_TOPIC" });
});

test("review preparation stays unreviewed; shape validity never approves the methodology", () => {
  const report = prepareReview(args);
  assert.equal(report.status, "draft"); assert.equal(report.findings.length, 0);
  assert.ok(report.coverage.every(entry => entry.status === "not_reviewed"));
  const check = checkReview({ ...args, report });
  assert.deepEqual(check.issues, []); assert.equal(check.envelope_valid, true);
  assert.equal(check.methodology_approval, false);
  assert.ok(check.not_checked.includes("truth of observations or conclusions"));
});
function reviewedReport() {
  const report = prepareReview(args); report.status = "reviewed";
  report.coverage[0] = { topic: "scope_and_applicability", status: "reviewed", rationale: "The supplied process covers sowing only. The whole crop cycle cannot be assessed here." };
  const selected = selectGuidance({ root, pcrId, topic: "boundary" });
  assert.ok("items" in selected); const rule = selected.items[4]; assert.ok(rule);
  report.findings.push({ id: "missing-seed-quantity", kind: "evidence_gap", severity: "warning",
    observation: "The seed input has null meanAmount.", rationale: "No measured seed quantity is provided; null does not establish zero consumption.",
    input_refs: [inspectTidas({ input, pointer: "/processDataSet/exchanges/exchange/1/meanAmount" }).source],
    pcr_refs: [pcrReference(rule.source)], suggested_action: "Collect the seed use for the declared sowing area.",
    questions: ["What measured seed quantity belongs to this operation?"] });
  return report;
}

test("Agent findings bind existing input/PCR pointers and fail on stale or fabricated evidence", () => {
  const report = reviewedReport(); assert.equal(checkReview({ ...args, report }).envelope_valid, true);
  const finding = report.findings[0]; assert.ok(finding);
  const inputRef = finding.input_refs[0]; assert.ok(inputRef); inputRef.pointer = "/processDataSet/nonexistent";
  assert.ok(checkReview({ ...args, report }).issues.some(issue => issue.code === "input_pointer"));
  const pcrRef = finding.pcr_refs[0]; assert.ok(pcrRef); pcrRef.projection_sha256 = `sha256:${"0".repeat(64)}`;
  assert.ok(checkReview({ ...args, report }).issues.some(issue => issue.code === "pcr_reference_changed"));
  const identity = report.inputs[0]; assert.ok(identity);
  report.inputs[0] = { ...identity, sha256: `sha256:${"0".repeat(64)}` };
  assert.ok(checkReview({ ...args, report }).issues.some(issue => issue.code === "inputs_changed"));
});

test("report shape, duplicate findings, omitted context and unreviewed coverage are independently diagnosed", () => {
  assert.equal(checkReview({ ...args, report: {} }).envelope_valid, false);
  const report = reviewedReport(); const first = report.findings[0]; assert.ok(first);
  report.findings.push(structuredClone(first)); report.coverage.forEach(entry => { entry.status = "not_reviewed"; });
  const result = checkReview({ ...args, report, related: fixtureDir });
  assert.ok(result.issues.some(issue => issue.code === "duplicate_finding"));
  assert.ok(result.issues.some(issue => issue.code === "review_empty"));
  assert.ok(result.issues.some(issue => issue.code === "inputs_changed"));
});
