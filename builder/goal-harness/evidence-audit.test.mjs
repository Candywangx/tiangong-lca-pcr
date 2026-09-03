import assert from "node:assert/strict";
import test from "node:test";

import { auditReportedUuids, verifySourceLocators } from "./evidence-audit.mjs";

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
    (error) => error.code === "GOAL_UUID_DIRECT_AUDIT_MISMATCH",
  );
  const wrongUnitGroup = structuredClone(report);
  wrongUnitGroup.uuid_audits[0].unit_group = "Units of volume";
  assert.throws(
    () => auditReportedUuids({ report: wrongUnitGroup, tiangongCliRoot: "/unused", runner: () => direct, supportRunner }),
    (error) => error.code === "GOAL_UUID_DIRECT_AUDIT_MISMATCH" && error.details.mismatches.includes("unit_group"),
  );
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
      body: { getReader: () => ({ read: async () => consumed ? { done: true } : (consumed = true, { done: false, value: new TextEncoder().encode("original text") }), cancel: async () => {} }) },
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
