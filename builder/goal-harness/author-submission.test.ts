import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { compileAuthorPrompt } from "./prompt-compiler.ts";
import { readAuthorReportSchema } from "./prompt-compiler.ts";
import * as api from "./author-submission.ts";
import { field, record, errorCode } from "./domain.ts";
function objectAt(value:unknown,...keys:string[]){let current=value;for(const key of keys)current=field(current,key);return record(current);}
test("new author prompt pins preparation and reference transport while legacy prompt stays compatible", (t) => {
  const root = mkdtempSync(path.join(tmpdir(), "pcr-author-prompt-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const policy = path.join(root, "policy.md");
  writeFileSync(policy, "PCR policy.");
  const task = {
    id: "task",
    cpc_code: "44125",
    product_name_en: "Baler",
    pcr_path: "library/pcrs/a/b/c",
  };
  const verifiedCommonUuids = [{uuid:"legacy-uuid",hybrid_search_receipt_id:"legacy-unsealed-marker"}];
  const legacy = compileAuthorPrompt({ task, policyPromptPath: policy, verifiedCommonUuids });
  assert.match(legacy.prompt, /legacy-unsealed-marker/);
  assert.equal(objectAt(legacy.output_schema,"properties","schema_version").const, 1);
  const current = compileAuthorPrompt({
    task: { ...task, authoring_contract_version: 2 },
    policyPromptPath: policy,
    verifiedCommonUuids,
  });
  assert.equal(objectAt(current.output_schema,"properties","schema_version").const, 2);
  assert.doesNotMatch(current.prompt, /legacy-unsealed-marker/);
  assert.match(current.prompt, /pcr:check/);
  assert.match(current.prompt, /goal-prepare-report/);
  assert.doesNotMatch(
    current.prompt,
    /Return only the JSON object required by the supplied output schema/,
  );
});
test("contract 2 does not accept a full legacy report as a completed result", () => {
  assert.throws(
    () =>
      api.resolveAuthorSubmission({
        task: { authoring_contract_version: 2 },
        wire: { schema_version: 1 },
      }),
    (e) => errorCode(e) === "GOAL_REPORT_REFERENCE_INVALID",
  );
});
test("submission schema preserves explicit boundary referrals and structured failure outputs", () => {
  const schema = api.readAuthorSubmissionSchema();
  assert.equal(objectAt(schema,"properties","schema_version").const, 2);
  assert.ok(objectAt(schema,"properties").boundary_review_report);
  assert.ok(objectAt(schema,"properties").failure);
  assert.throws(
    () =>
      api.resolveAuthorSubmission({
        task: { authoring_contract_version: 2 },
        wire: {
          schema_version: 2,
          prepared_report: null,
          boundary_review_report: null,
          failure: {
            code: "GOAL_MEASUREMENT_REVIEW_REQUIRED",
            message: "Unsupported conversion requires review.",
          },
        },
      }),
    (e) => errorCode(e) === "GOAL_MEASUREMENT_REVIEW_REQUIRED",
  );
  assert.equal(objectAt(readAuthorReportSchema(),"properties","schema_version").const, 1);
});
