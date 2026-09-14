import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { auditReportedUuids, mergeVerifiedCommonUuids, verifySourceLocators } from "./evidence-audit.mjs";
import { GoalHarnessError } from "./errors.mjs";

test("legacy hybrid_search booleans never enter the verified common UUID cache", () => {
  const legacy = { uuid: "11111111-1111-4111-8111-111111111111", base_name_en: "Alternating current", hybrid_search: true };
  const receiptBacked = { ...legacy, uuid: "22222222-2222-4222-8222-222222222222", hybrid_search_receipt_id: "receipt-2" };
  assert.deepEqual(mergeVerifiedCommonUuids([legacy], [receiptBacked]), [receiptBacked]);
});

test("UUID audit compares public direct-read identity to the author report", () => {
  const uuid = "11111111-1111-4111-8111-111111111111";
  const report = { uuid_audits: [{
    uuid, hybrid_search_receipt_id: "receipt-1", state_code: 100, base_name_en: "Pig iron", base_name_zh: "生铁",
    flow_type: "product", classification: "CPC 41111", property: "Mass", unit_group: "Units of mass", semantic_review: "exact",
  }] };
  const direct = {
    state_code: 100,
    flow: { flowDataSet: {
      flowInformation: { dataSetInformation: {
        "common:UUID": uuid,
        name: { baseName: [{ "@xml:lang": "en", "#text": "Pig iron" }, { "@xml:lang": "zh", "#text": "生铁" }] },
        classificationInformation: { "common:classification": { "common:class": [{ "@classId": "41111", "#text": "Pig iron" }] } },
      } },
      modellingAndValidation: { LCIMethod: { typeOfDataSet: "Product flow" } },
      flowProperties: { flowProperty: [{ referenceToFlowPropertyDataSet: { "@refObjectId": "93a60a56-a3c8-11da-a746-0800200b9a66", "common:shortDescription": [{ "@xml:lang": "en", "#text": "Mass" }] } }] },
    } },
  };
  const supportRunner = () => ({
    flow_property: { id: "93a60a56-a3c8-11da-a746-0800200b9a66", version: "03.00.003", state_code: 100, name_en: "Mass" },
    unit_group: { id: "93a60a57-a4c8-11da-a746-0800200c9a66", version: "03.00.003", state_code: 100, name_en: "Units of mass", name_zh: "质量", reference_unit: "kg" },
  });
  const result = auditReportedUuids({ report, tiangongCliRoot: "/unused", runner: () => direct, supportRunner });
  assert.equal(result.length, 1);
  assert.equal(result[0].state_code, 100);
  assert.equal(result[0].base_name_zh, "生铁");
  assert.equal(result[0].property, "Mass");
  assert.equal(result[0].flow_property_uuid, "93a60a56-a3c8-11da-a746-0800200b9a66");
  assert.equal(result[0].unit_group_uuid, "93a60a57-a4c8-11da-a746-0800200c9a66");
  assert.equal(result[0].unit_group_name_en, "Units of mass");
  assert.equal(result[0].reference_unit, "kg");
  assert.match(result[0].response_sha256, /^sha256:/u);
  const bad = structuredClone(report);
  bad.uuid_audits[0].base_name_zh = "错误名称";
  assert.throws(
    () => auditReportedUuids({ report: bad, tiangongCliRoot: "/unused", runner: () => direct, supportRunner }),
    (error) => error.code === "GOAL_UUID_DIRECT_AUDIT_MISMATCH"
      && error.details.findings[0].expected.base_name_zh === "生铁"
      && error.details.findings[0].claimed.base_name_zh === "错误名称"
      && /direct-read identity/u.test(error.details.findings[0].remediation),
  );
  const wrongUnitGroup = structuredClone(report);
  wrongUnitGroup.uuid_audits[0].unit_group = "Units of volume";
  assert.throws(
    () => auditReportedUuids({ report: wrongUnitGroup, tiangongCliRoot: "/unused", runner: () => direct, supportRunner }),
    (error) => error.code === "GOAL_UUID_DIRECT_AUDIT_MISMATCH" && error.details.mismatches.includes("unit_group"),
  );
});

test("UUID audit reads one shared public flow-property and unit-group identity only once", () => {
  const firstUuid = "11111111-1111-4111-8111-111111111111";
  const secondUuid = "22222222-2222-4222-8222-222222222222";
  const report = { uuid_audits: [firstUuid, secondUuid].map((uuid) => ({
    uuid, hybrid_search_receipt_id: `receipt-${uuid[0]}`, state_code: 100,
    base_name_en: "Electricity", base_name_zh: "电力", flow_type: "product",
    classification: "CPC 17100", property: "Mass", unit_group: "Units of mass",
    semantic_review: "Exact public product flow.",
  })) };
  const direct = (uuid) => ({
    state_code: 100,
    flow: { flowDataSet: {
      flowInformation: { dataSetInformation: {
        "common:UUID": uuid,
        name: { baseName: [{ "@xml:lang": "en", "#text": "Electricity" }, { "@xml:lang": "zh", "#text": "电力" }] },
        classificationInformation: { "common:classification": { "common:class": [{ "@classId": "17100", "#text": "Electricity" }] } },
      } },
      modellingAndValidation: { LCIMethod: { typeOfDataSet: "Product flow" } },
      flowProperties: { flowProperty: [{ referenceToFlowPropertyDataSet: {
        "@refObjectId": "93a60a56-a3c8-11da-a746-0800200b9a66",
        "@version": "03.00.003",
        "common:shortDescription": [{ "@xml:lang": "en", "#text": "Mass" }],
      } }] },
    } },
  });
  let supportReads = 0;
  const result = auditReportedUuids({
    report,
    tiangongCliRoot: "/unused",
    runner: ({ uuid }) => direct(uuid),
    supportRunner: () => {
      supportReads += 1;
      return {
        flow_property: { id: "93a60a56-a3c8-11da-a746-0800200b9a66", state_code: 100, name_en: "Mass" },
        unit_group: { id: "93a60a57-a4c8-11da-a746-0800200c9a66", state_code: 100, name_en: "Units of mass", name_zh: "质量", reference_unit: "kg" },
      };
    },
  });
  assert.equal(result.length, 2);
  assert.equal(supportReads, 1);
});

test("UUID audit retries a transient public flow read with bounded linear backoff", () => {
  const uuid = "11111111-1111-4111-8111-111111111111";
  const report = { uuid_audits: [{
    uuid, hybrid_search_receipt_id: "receipt-1", state_code: 100,
    base_name_en: "Pig iron", base_name_zh: "生铁", flow_type: "product",
    classification: "CPC 41111", property: "Mass", unit_group: "Units of mass", semantic_review: "exact",
  }] };
  const direct = {
    state_code: 100,
    flow: { flowDataSet: {
      flowInformation: { dataSetInformation: {
        "common:UUID": uuid,
        name: { baseName: [{ "@xml:lang": "en", "#text": "Pig iron" }, { "@xml:lang": "zh", "#text": "生铁" }] },
        classificationInformation: { "common:classification": { "common:class": [{ "@classId": "41111", "#text": "Pig iron" }] } },
      } },
      modellingAndValidation: { LCIMethod: { typeOfDataSet: "Product flow" } },
      flowProperties: { flowProperty: [{ referenceToFlowPropertyDataSet: { "@refObjectId": "93a60a56-a3c8-11da-a746-0800200b9a66", "common:shortDescription": [{ "@xml:lang": "en", "#text": "Mass" }] } }] },
    } },
  };
  let attempts = 0;
  const waits = [];
  const result = auditReportedUuids({
    report,
    tiangongCliRoot: "/unused",
    retryAttempts: 3,
    retryDelayMs: 7,
    sleeper: (milliseconds) => waits.push(milliseconds),
    runner: () => {
      attempts += 1;
      if (attempts < 3) throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", "transient read failure", {origin:"tool_transport", failure_kind:"network", retryable:true});
      return direct;
    },
    supportRunner: () => ({
      flow_property: { id: "93a60a56-a3c8-11da-a746-0800200b9a66", state_code: 100, name_en: "Mass" },
      unit_group: { id: "93a60a57-a4c8-11da-a746-0800200c9a66", state_code: 100, name_en: "Units of mass", name_zh: "质量", reference_unit: "kg" },
    }),
  });
  assert.equal(result.length, 1);
  assert.equal(attempts, 3);
  assert.deepEqual(waits, [7, 14]);
});

test("UUID audit retries a transient public property read without retrying semantic mismatches", () => {
  const uuid = "11111111-1111-4111-8111-111111111111";
  const report = { uuid_audits: [{
    uuid, hybrid_search_receipt_id: "receipt-1", state_code: 100,
    base_name_en: "Pig iron", base_name_zh: "生铁", flow_type: "product",
    classification: "CPC 41111", property: "Mass", unit_group: "Units of mass", semantic_review: "exact",
  }] };
  const direct = {
    state_code: 100,
    flow: { flowDataSet: {
      flowInformation: { dataSetInformation: {
        "common:UUID": uuid,
        name: { baseName: [{ "@xml:lang": "en", "#text": "Pig iron" }, { "@xml:lang": "zh", "#text": "生铁" }] },
        classificationInformation: { "common:classification": { "common:class": [{ "@classId": "41111", "#text": "Pig iron" }] } },
      } },
      modellingAndValidation: { LCIMethod: { typeOfDataSet: "Product flow" } },
      flowProperties: { flowProperty: [{ referenceToFlowPropertyDataSet: { "@refObjectId": "93a60a56-a3c8-11da-a746-0800200b9a66", "common:shortDescription": [{ "@xml:lang": "en", "#text": "Mass" }] } }] },
    } },
  };
  let supportAttempts = 0;
  const result = auditReportedUuids({
    report,
    tiangongCliRoot: "/unused",
    retryDelayMs: 0,
    sleeper: () => {},
    runner: () => direct,
    supportRunner: () => {
      supportAttempts += 1;
      if (supportAttempts === 1) throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", "transient support failure", {origin:"tool_transport", failure_kind:"network", retryable:true});
      return {
        flow_property: { id: "93a60a56-a3c8-11da-a746-0800200b9a66", state_code: 100, name_en: "Mass" },
        unit_group: { id: "93a60a57-a4c8-11da-a746-0800200c9a66", state_code: 100, name_en: "Units of mass", name_zh: "质量", reference_unit: "kg" },
      };
    },
  });
  assert.equal(result.length, 1);
  assert.equal(supportAttempts, 2);

  let directAttempts = 0;
  const bad = structuredClone(report);
  bad.uuid_audits[0].base_name_zh = "错误名称";
  assert.throws(
    () => auditReportedUuids({
      report: bad,
      tiangongCliRoot: "/unused",
      retryDelayMs: 0,
      sleeper: () => {},
      runner: () => (directAttempts += 1, direct),
      supportRunner: () => ({
        flow_property: { id: "93a60a56-a3c8-11da-a746-0800200b9a66", state_code: 100, name_en: "Mass" },
        unit_group: { id: "93a60a57-a4c8-11da-a746-0800200c9a66", state_code: 100, name_en: "Units of mass", name_zh: "质量", reference_unit: "kg" },
      }),
    }),
    (error) => error.code === "GOAL_UUID_DIRECT_AUDIT_MISMATCH",
  );
  assert.equal(directAttempts, 1);
});

test("UUID audit fails closed with the stable infrastructure code after bounded retries are exhausted", () => {
  const uuid = "11111111-1111-4111-8111-111111111111";
  const report = { uuid_audits: [{
    uuid, hybrid_search_receipt_id: "receipt-1", state_code: 100,
    base_name_en: "Pig iron", base_name_zh: "生铁", flow_type: "product",
    classification: "CPC 41111", property: "Mass", unit_group: "Units of mass", semantic_review: "exact",
  }] };
  let attempts = 0;
  assert.throws(
    () => auditReportedUuids({
      report,
      tiangongCliRoot: "/unused",
      retryAttempts: 3,
      retryDelayMs: 0,
      sleeper: () => {},
      runner: () => {
        attempts += 1;
        throw new GoalHarnessError("GOAL_UUID_DIRECT_READ_FAILED", "upstream unavailable", { credentials_redacted: true, origin:"tool_transport", failure_kind:"network", retryable:true });
      },
      supportRunner: () => assert.fail("support must not run without a flow response"),
    }),
    (error) => error.code === "GOAL_UUID_DIRECT_READ_FAILED" && error.details.attempts === 3,
  );
  assert.equal(attempts, 3);
});

test("UUID audit accepts explicit no-product-classification and annotated property evidence for elementary flows", () => {
  const uuid = "22222222-2222-4222-8222-222222222222";
  const report = { uuid_audits: [{
    uuid,
    hybrid_search_receipt_id: "receipt-1",
    state_code: 100,
    base_name_en: "carbon dioxide (fossil)",
    base_name_zh: "二氧化碳（化石源）",
    flow_type: "elementary",
    classification: "Emissions to air / unspecified",
    property: "Mass; flow property UUID 93a60a56-a3c8-11da-a746-0800200b9a66",
    unit_group: "Units of mass; reference unit kg",
    semantic_review: "Exact elementary flow and compartment audited.",
  }] };
  const direct = {
    state_code: 100,
    flow: { flowDataSet: {
      flowInformation: {
        dataSetInformation: {
          "common:UUID": uuid,
          name: { baseName: [{ "@xml:lang": "en", "#text": "carbon dioxide (fossil)" }, { "@xml:lang": "zh", "#text": "二氧化碳（化石源）" }] },
          classificationInformation: { "common:elementaryFlowCategorization": { "common:category": [
            { "@catId": "1", "#text": "Emissions" },
            { "@catId": "1.3", "#text": "Emissions to air" },
            { "@catId": "1.3.4", "#text": "Emissions to air, unspecified" },
          ] } },
        },
        quantitativeReference: { referenceToReferenceFlowProperty: "0" },
      },
      modellingAndValidation: { LCIMethod: { typeOfDataSet: "Elementary flow" } },
      flowProperties: { flowProperty: [{
        "@dataSetInternalID": "0",
        referenceToFlowPropertyDataSet: {
          "@refObjectId": "93a60a56-a3c8-11da-a746-0800200b9a66",
          "common:shortDescription": [{ "@xml:lang": "en", "#text": "Mass" }],
        },
      }] },
    } },
  };
  const supportRunner = () => ({
    flow_property: { id: "93a60a56-a3c8-11da-a746-0800200b9a66", state_code: 100, name_en: "Mass" },
    unit_group: { id: "93a60a57-a4c8-11da-a746-0800200c9a66", state_code: 100, name_en: "Units of mass", name_zh: "质量", reference_unit: "kg" },
  });
  assert.doesNotThrow(() => auditReportedUuids({ report, tiangongCliRoot: "/unused", runner: () => direct, supportRunner }));
});

test("source audit performs original locator reads and rejects discovery pages as final evidence", async () => {
  const fetchImpl = async (url) => {
    let consumed = false;
    return {
      ok: true, status: 200, url, headers: new Map([["content-type", "application/pdf"]]),
      body: { getReader: () => ({ read: async () => consumed ? { done: true } : (consumed = true, { done: false, value: new TextEncoder().encode("%PDF-1.7 original text") }), cancel: async () => {} }) },
    };
  };
  const result = await verifySourceLocators({
    report: { sources: [{ source_id: "standard-a", name: "Standard A", locator: "https://standards.example/a.pdf", original_text_verified: true, supports: ["boundary"] }] },
    fetchImpl,
  });
  assert.equal(result[0].http_status, 200);
  assert.match(result[0].content_sha256, /^sha256:/u);
  await assert.rejects(
    () => verifySourceLocators({ report: { sources: [{ source_id: "openalex", name: "OpenAlex", locator: "https://openalex.org/W1", original_text_verified: true, supports: ["range"] }] }, fetchImpl }),
    (error) => error.code === "GOAL_SOURCE_DISCOVERY_ONLY",
  );
});

test("source audit reuses an exact hash-verified original-text receipt after a transient fetch failure", async () => {
  const stateDir = mkdtempSync(path.join(tmpdir(), "goal-source-cache-reuse-"));
  const source = { source_id: "standard-a", name: "Standard A", locator: "https://standards.example/a.pdf", original_text_verified: true, supports: ["boundary"] };
  let consumed = false;
  const successfulFetch = async (url) => ({
    ok: true, status: 200, url, headers: new Map([["content-type", "application/pdf"]]),
    body: { getReader: () => ({ read: async () => consumed ? { done: true } : (consumed = true, { done: false, value: new TextEncoder().encode("%PDF-1.7 original text") }), cancel: async () => {} }) },
  });
  try {
    const first = await verifySourceLocators({ report: { sources: [source] }, stateDir, fetchImpl: successfulFetch });
    const second = await verifySourceLocators({
      report: { sources: [source] },
      stateDir,
      fetchImpl: async () => { throw new Error("temporary network failure"); },
    });
    assert.equal(second[0].cache_hit, true);
    assert.match(second[0].cache_receipt_id, /.+/u);
    assert.equal(second[0].content_sha256, first[0].content_sha256);
    let changedConsumed = false;
    const changed = await verifySourceLocators({
      report: { sources: [source] },
      stateDir,
      fetchImpl: async (url) => ({
        ok: true, status: 200, url, headers: new Map([["content-type", "application/pdf"]]),
        body: { getReader: () => ({ read: async () => changedConsumed ? { done: true } : (changedConsumed = true, { done: false, value: new TextEncoder().encode("%PDF-1.7 changed original text") }), cancel: async () => {} }) },
      }),
    });
    assert.equal(changed[0].cache_hit, undefined);
    assert.notEqual(changed[0].content_sha256, first[0].content_sha256);
  } finally {
    rmSync(stateDir, { recursive: true, force: true });
  }
});

test('403 cache fallback requires a verified same-source real blob independently of retryability', async () => {
  const { listGoalCacheReceipts } = await import('./goal-cache.mjs');
  const { writeFileSync } = await import('node:fs');
  const stateDir = mkdtempSync(path.join(tmpdir(),'source-403-'));
  const source = { source_id:'standard-a', name:'Standard A', locator:'https://standards.example/a.pdf', original_text_verified:true };
  const denied = async () => new Response('', {status:403});
  try {
    await assert.rejects(verifySourceLocators({report:{sources:[source]},stateDir,fetchImpl:denied}),e => e.details.retryable === false && e.details.origin === 'source_http');
    await verifySourceLocators({report:{sources:[source]},stateDir,fetchImpl:async()=>new Response('%PDF-1.7 Standard A original text',{headers:{'content-type':'application/pdf'}})});
    const cached=await verifySourceLocators({report:{sources:[source]},stateDir,fetchImpl:denied});
    assert.equal(cached[0].cache_hit,true);
    const receipt=listGoalCacheReceipts({stateDir,namespace:'source_original_text_receipts'})[0];
    writeFileSync(receipt.blob_path,'corrupted');
    await assert.rejects(verifySourceLocators({report:{sources:[source]},stateDir,fetchImpl:denied}),e=>e.details.retryable === false);
  } finally { rmSync(stateDir,{recursive:true,force:true}); }
});

test('HTTP 200 login or captcha and unidentified originals are held, not cached as original text', async () => {
  const source={source_id:'standard-a',name:'Standard A',locator:'https://standards.example/a',original_text_verified:true};
  for (const text of ['<html><title>Sign in</title><input type="password"></html>', '<html>Verify you are human captcha</html>', '<html><title>Unrelated page</title>Unknown identity</html>']) {
    await assert.rejects(verifySourceLocators({report:{sources:[source]},fetchImpl:async()=>new Response(text,{headers:{'content-type':'text/html'}})}),e=>e.code === 'GOAL_SOURCE_ORIGINAL_IDENTITY_UNVERIFIED' && e.details.retryable === false);
  }
});

test('source 429 retains Retry-After machine evidence', async () => {
  await assert.rejects(verifySourceLocators({report:{sources:[{source_id:'s',locator:'https://example.test/s'}]},fetchImpl:async()=>new Response('',{status:429,headers:{'retry-after':'120'}})}),e=>e.details.retry_after_seconds === 120 && e.details.retryable === true);
});

test('unattributed direct-read failures do not retry and retain structured nonretryable failures', async () => {
  const { readPublicUuidAudit }=await import('./evidence-audit.mjs');
  let calls=0;
  assert.throws(()=>readPublicUuidAudit({uuid:'u',runner:()=>{calls++;throw new GoalHarnessError('GOAL_UUID_DIRECT_READ_FAILED','network timeout');},sleeper:()=>{}}));
  assert.equal(calls,1);
  calls=0;
  assert.throws(()=>readPublicUuidAudit({uuid:'u',runner:()=>{calls++;throw new GoalHarnessError('GOAL_UUID_DIRECT_READ_FAILED','no retry',{origin:'tool_transport',failure_kind:'network',retryable:false,subject_id:'u'});},sleeper:()=>{}}),e=>e.details.subject_id==='u');
  assert.equal(calls,1);
});
