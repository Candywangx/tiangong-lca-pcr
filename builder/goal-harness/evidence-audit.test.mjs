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
      body: { getReader: () => ({ read: async () => consumed ? { done: true } : (consumed = true, { done: false, value: new TextEncoder().encode("%PDF-1.7 Standard A original text") }), cancel: async () => {} }) },
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
    body: { getReader: () => ({ read: async () => consumed ? { done: true } : (consumed = true, { done: false, value: new TextEncoder().encode("%PDF-1.7 Standard A original text") }), cancel: async () => {} }) },
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
        body: { getReader: () => ({ read: async () => changedConsumed ? { done: true } : (changedConsumed = true, { done: false, value: new TextEncoder().encode("%PDF-1.7 Standard A changed original text") }), cancel: async () => {} }) },
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

test("PDF format alone cannot verify the source identity, while a matching title can", async () => {
  const source = { source_id: "standard-a", name: "Standard A", locator: "https://standards.example/a.pdf", original_text_verified: true };
  const stateDir = mkdtempSync(path.join(tmpdir(), "source-pdf-identity-"));
  const { listGoalCacheReceipts } = await import("./goal-cache.mjs");
  try {
    await assert.rejects(
      verifySourceLocators({ report: { sources: [source] }, stateDir,
        fetchImpl: async () => new Response("%PDF-1.7 Unrelated document", { headers: { "content-type": "application/pdf" } }) }),
      error => error.code === "GOAL_SOURCE_ORIGINAL_IDENTITY_UNVERIFIED"
        && error.details.failure_kind === "unknown" && error.details.retryable === false,
    );
    assert.equal(listGoalCacheReceipts({ stateDir, namespace: "source_original_text_receipts" }).length, 0);
    const [verified] = await verifySourceLocators({ report: { sources: [source] }, stateDir,
      fetchImpl: async () => new Response("%PDF-1.7 Standard A original text", { headers: { "content-type": "application/pdf" } }) });
    assert.equal(verified.original_identity_verified, true);
  } finally { rmSync(stateDir, { recursive: true, force: true }); }
});

test("403 fallback rechecks historical PDF blobs against the current source identity without changing receipts", async () => {
  const { appendGoalCacheReceipt } = await import("./goal-cache.mjs");
  const { createHash } = await import("node:crypto");
  const { readFileSync } = await import("node:fs");
  const source = { source_id: "standard-a", name: "Standard A", locator: "https://standards.example/a.pdf", original_text_verified: true };
  for (const [text, requestedSource] of [
    ["%PDF-1.7 Unrelated original document", source],
    ["%PDF-1.7 Standard A original text", { ...source, name: "Standard B" }],
    ["%PDF-1.7 Standard A original text", { ...source, locator: "https://standards.example/b.pdf" }],
    ["%PDF-1.7 Standard A <title>Sign in</title><input type=\"password\">", source],
  ]) {
    const stateDir = mkdtempSync(path.join(tmpdir(), "source-pdf-old-cache-"));
    try {
      const blob = Buffer.from(text);
      const hash = `sha256:${createHash("sha256").update(blob).digest("hex")}`;
      const receipt = appendGoalCacheReceipt({ stateDir, namespace: "source_original_text_receipts",
        keyInput: { source_id: source.source_id, locator: source.locator },
        tool: { name: "http-original-text-fetch", version: "1" }, sourceFingerprint: hash, blob,
        value: { source_id: source.source_id, locator: source.locator, original_identity_verified: true,
          content_sha256: hash, content_byte_length: blob.length, http_status: 200 } });
      const receiptBytes = readFileSync(receipt.receipt_path);
      await assert.rejects(verifySourceLocators({ report: { sources: [requestedSource] }, stateDir,
        fetchImpl: async () => new Response("", { status: 403 }) }),
      error => error.code === "GOAL_SOURCE_LOCATOR_UNREADABLE" && error.details.status === 403);
      assert.deepEqual(readFileSync(receipt.receipt_path), receiptBytes);
      assert.deepEqual(readFileSync(receipt.blob_path), blob);
    } finally { rmSync(stateDir, { recursive: true, force: true }); }
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

test('collected source checks retain failures and later successes independently', async () => {
  const report = { sources: ['broken', 'good'].map(source_id => ({ source_id, name:source_id, locator:`https://example.test/${source_id}`, original_text_verified:true })) };
  const result = await verifySourceLocators({ report, collect:true, phase:'preparation', fetchImpl:async url => url.endsWith('broken') ? new Response('', {status:503}) : new Response('good original text') });
  assert.equal(result.valid,false);
  assert.deepEqual(result.checks.map(c => [c.phase,c.check_id,c.subject_id,c.status]), [['preparation','source_original','broken','failed'],['preparation','source_original','good','passed']]);
  assert.deepEqual(result.results.map(r=>r.source_id),['good']);
  assert.equal(result.findings[0].details.failure_kind,'service_unavailable');
});

test('source execution window preserves progress and resumes with the next source', async () => {
  const report={sources:['first','second','third'].map(source_id=>({source_id,locator:`https://example.test/${source_id}`}))};
  let tick=0; const visited=[];
  const first=await verifySourceLocators({report,collect:true,deadline:50,now:()=>tick,fetchImpl:async url=>{visited.push(url);tick=100;return new Response('content');}});
  assert.equal(first.valid,false);
  assert.equal(first.findings[0].details.failure_kind,'execution_window');
  assert.equal(first.findings[0].details.origin,'harness_deadline');
  assert.equal(first.progress.next_subject,'second');
  tick=0;
  const next=await verifySourceLocators({report,collect:true,deadline:50,now:()=>tick,startAfter:first.progress.start_after,fetchImpl:async url=>{visited.push(url);tick=100;return new Response('content');}});
  assert.ok(visited[1].endsWith('/second'));
  assert.equal(next.progress.next_subject,'third');
});

test('collected UUID checks continue after a failed read and clamp retry waiting to the execution window', () => {
  let tick=0; const waits=[]; const seen=[];
  const report={uuid_audits:[{uuid:'a'},{uuid:'b'}]};
  const result=auditReportedUuids({report,collect:true,deadline:50,now:()=>tick,retryDelayMs:1000,sleeper:ms=>{waits.push(ms);tick+=ms;},runner:({uuid,timeoutMs})=>{seen.push({uuid,timeoutMs});throw new GoalHarnessError('GOAL_UUID_DIRECT_READ_FAILED','offline',{origin:'tool_transport',failure_kind:'network',retryable:true});}});
  assert.equal(result.valid,false);
  assert.equal(result.checks.length,2);
  assert.equal(result.checks[1].status,'skipped');
  assert.deepEqual(waits,[50]);
  assert.equal(seen[0].timeoutMs,50);
  assert.equal(result.findings[0].details.failure_kind,'execution_window');
  assert.equal(result.progress.next_subject,'b');
});

test('an exhausted UUID collection makes no external reads and never reports empty success', () => {
  const result=auditReportedUuids({report:{uuid_audits:[{uuid:'a'},{uuid:'b'}]},collect:true,deadline:0,now:()=>1,runner:()=>assert.fail('no I/O after deadline')});
  assert.equal(result.valid,false);
  assert.deepEqual(result.results,[]);
  assert.deepEqual(result.checks.map(c=>c.status),['skipped','skipped']);
});

test('source response stream is bounded by the actual item timer and does not hide later sources', async()=>{
  let cancelled=0;
  const result=await verifySourceLocators({report:{sources:[{source_id:'stuck',locator:'https://example.test/stuck'},{source_id:'later',locator:'https://example.test/later'}]},collect:true,timeoutMs:15,
    fetchImpl:async url=>url.endsWith('stuck')?{ok:true,status:200,headers:new Map(),body:{getReader:()=>({read:()=>new Promise(()=>{}),cancel:()=>{cancelled++;}})}}:new Response('later source')});
  assert.equal(result.valid,false);assert.equal(result.checks[0].status,'failed');
  assert.equal(result.findings[0].details.origin,'source_http');assert.equal(result.findings[0].details.retryable,true);
  assert.equal(result.results[0].source_id,'later');assert.equal(cancelled,1);
});

test('actual UUID child process is killed at the remaining review deadline', async t=>{
  const {mkdirSync,writeFileSync}=await import('node:fs');
  const root=mkdtempSync(path.join(tmpdir(),'uuid-deadline-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
  mkdirSync(path.join(root,'bin'));writeFileSync(path.join(root,'bin','tiangong-lca.js'),'setTimeout(()=>process.stdout.write("{}"),5000);');
  const started=Date.now();
  const result=auditReportedUuids({report:{uuid_audits:[{uuid:'a'}]},tiangongCliRoot:root,collect:true,deadline:started+40});
  assert.ok(Date.now()-started<1500,'child must not survive its review window');
  assert.equal(result.valid,false);assert.equal(result.findings[0].details.failure_kind,'execution_window');
});

test('completed source results survive a later exhausted execution window', async()=>{
  let tick=0;
  const result=await verifySourceLocators({report:{sources:['done','slow','remaining'].map(source_id=>({source_id,locator:`https://example.test/${source_id}`}))},collect:true,deadline:50,now:()=>tick,
    fetchImpl:async url=>{if(url.endsWith('slow'))tick=100;return new Response('source text');}});
  assert.equal(result.valid,false);assert.deepEqual(result.results.map(r=>r.source_id),['done']);
  assert.deepEqual(result.checks.map(c=>c.status),['passed','skipped','skipped']);
  assert.equal(result.progress.next_subject,'remaining');
});

test('a failed UUID does not discard an independent successful public identity', ()=>{
  const first='11111111-1111-4111-8111-111111111111',second='22222222-2222-4222-8222-222222222222';
  const property='33333333-3333-4333-8333-333333333333';
  const result=auditReportedUuids({collect:true,phase:'preparation',report:{uuid_audits:[first,second].map(uuid=>({uuid,state_code:100,base_name_en:'Electricity',base_name_zh:'电力',flow_type:'product',classification:'17100',property:'Mass',unit_group:'Units of mass',hybrid_search_receipt_id:`r-${uuid}`}))},
    runner:({uuid})=>{
      if(uuid===first)throw new GoalHarnessError('GOAL_UUID_DIRECT_READ_FAILED','Unavailable',{origin:'tool_transport',failure_kind:'network',retryable:false});
      return {state_code:100,flow:{flowDataSet:{flowInformation:{dataSetInformation:{'common:UUID':uuid,name:{baseName:[{'@xml:lang':'en','#text':'Electricity'},{'@xml:lang':'zh','#text':'电力'}]},classificationInformation:{'common:classification':{'common:class':[{'@classId':'17100','#text':'Electricity'}]}}}},modellingAndValidation:{LCIMethod:{typeOfDataSet:'Product flow'}},flowProperties:{flowProperty:[{referenceToFlowPropertyDataSet:{'@refObjectId':property,'common:shortDescription':[{'@xml:lang':'en','#text':'Mass'}]}}]}}}};
    },supportRunner:()=>({flow_property:{id:property,state_code:100,name_en:'Mass'},unit_group:{id:property,state_code:100,name_en:'Units of mass',name_zh:'质量',reference_unit:'kg'}})});
  assert.equal(result.valid,false);assert.deepEqual(result.results.map(r=>r.uuid),[second]);
  assert.deepEqual(result.checks.map(c=>c.status),['failed','passed']);
});

for (const [status,kind,retryable] of [[503,'service_unavailable',true],[401,'authentication',false],[403,'authorization',false]]) {
  test(`actual support child preserves safe structured ${status} provenance`,async t=>{
    const {mkdirSync,writeFileSync}=await import('node:fs');
    const {readPublicUuidAudit}=await import('./evidence-audit.mjs');
    const root=mkdtempSync(path.join(tmpdir(),'uuid-support-protocol-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
    const directory=path.join(root,'dist','src','lib');mkdirSync(directory,{recursive:true});
    writeFileSync(path.join(root,'package.json'),JSON.stringify({type:'module'}));
    writeFileSync(path.join(root,'.env'),'');
    writeFileSync(path.join(directory,'supabase-session.js'),'export function createSupabaseDataRuntime(){return {}}');
    writeFileSync(path.join(directory,'supabase-client.js'),`export function requireSupabaseRestRuntime(){return {}};export function createSupabaseDataClient(){const query={select(){return this},eq(){return this},order(){return this},limit(){return this},then(resolve){resolve({data:null,error:{code:'UPSTREAM_TEST',message:'secret-must-not-leak'},status:${status}})}};return {client:{from(){return query}}}}`);
    assert.throws(()=>readPublicUuidAudit({uuid:'u',tiangongCliRoot:root,retryAttempts:1,runner:()=>({state_code:100,flow:{flowDataSet:{flowInformation:{dataSetInformation:{'common:UUID':'u'}},flowProperties:{flowProperty:[{referenceToFlowPropertyDataSet:{'@refObjectId':'property-id'}}]}}}})}),error=>{
      assert.equal(error.details.failure_kind,kind);assert.equal(error.details.retryable,retryable);assert.equal(error.details.origin,'tool_transport');assert.equal(error.details.http_status,status);assert.equal(error.details.subject_id,'property-id');assert.equal(JSON.stringify(error).includes('secret-must-not-leak'),false);return true;
    });
  });
}

test('collector rejects empty or explicitly failed success records', async()=>{
  const {collectEvidenceItems}=await import('./evidence-audit.mjs');
  for(const value of [{},{valid:false,uuid:'u'},{uuid:'u',state_code:100}]){
    const result=collectEvidenceItems({items:['u'],subject:item=>item,checkId:'uuid_public_read',phase:'harvest',deadline:Infinity,now:Date.now,run:()=>[value]});
    assert.equal(result.valid,false);assert.deepEqual(result.results,[]);assert.equal(result.findings[0].code,'GOAL_EVIDENCE_RESULT_INVALID');
  }
});
