import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { LIBRARY_FORMAT_VERSION } from "../../packages/pcr-core/src/offline-library.ts";
import { buildProjectionMetadata, inspectProjectionIntegrity } from "../../packages/pcr-core/src/projection-integrity.ts";
import { PRODUCT_COMPATIBILITY, READER_CAPABILITIES, assertImplementedReaderCapabilities, assertReaderCompatibility, validateProductCompatibility, validateReaderCapabilities } from "./reader-compatibility.ts";

test("reviewed capabilities agree with implemented SQLite and projection readers", () => {
  assert.deepEqual(READER_CAPABILITIES.libraryFormats, [LIBRARY_FORMAT_VERSION]);
  const schema = JSON.parse(readFileSync(new URL("../../packages/pcr-core/schemas/structured-projection.schema.json", import.meta.url), "utf8")) as { $defs: { projectionMetadata: { properties: { contract_version: { enum: string[] } } } } };
  assert.deepEqual(READER_CAPABILITIES.projectionContracts, schema.$defs.projectionMetadata.properties.contract_version.enum);
  for (const contractVersion of ["1", "2"] as const) {
    const metadata = buildProjectionMetadata({ sourceMarkdown: "source\n", generatedContent: "rules: []\n", contractVersion });
    const integrity = inspectProjectionIntegrity({ sourceMarkdown: "source\n", structuredText: "rules: []\nprojection_metadata:\n", metadata });
    assert.equal(integrity.contract_version, contractVersion);
    assert.ok(!integrity.issues.some(issue => issue.code === "projection_contract_unsupported"));
    assert.ok(READER_CAPABILITIES.projectionContracts.includes(contractVersion));
  }
  assert.deepEqual(validateProductCompatibility(PRODUCT_COMPATIBILITY), PRODUCT_COMPATIBILITY);
  assert.deepEqual(assertImplementedReaderCapabilities(READER_CAPABILITIES), READER_CAPABILITIES);
});

test("reader compatibility uses capability inclusion and a minimum, independently of content version", () => {
  for (const reader of ["0.4.1", "0.4.2", "0.10.0", "1.0.0", "99999999999999999999.0.0"]) assert.doesNotThrow(() => assertReaderCompatibility(PRODUCT_COMPATIBILITY, READER_CAPABILITIES, reader));
  for (const reader of ["0.4.0", "0.3.999", "0.0.0"]) assert.throws(() => assertReaderCompatibility(PRODUCT_COMPATIBILITY, READER_CAPABILITIES, reader), /minimumReaderVersion/u);
  for (const reader of ["0.4.1-rc.1", "v0.4.1", "0.04.1", "0.4.1+build"]) assert.throws(() => assertReaderCompatibility(PRODUCT_COMPATIBILITY, READER_CAPABILITIES, reader), /stable reader version/u);
  for (const capabilities of [
    { ...READER_CAPABILITIES, libraryFormats: [2] }, { ...READER_CAPABILITIES, projectionContracts: ["1"] }, { ...READER_CAPABILITIES, commandProtocol: 2 },
  ]) assert.throws(() => assertReaderCompatibility(PRODUCT_COMPATIBILITY, capabilities, "1.0.0"), /do not satisfy/u);
  assert.doesNotThrow(() => assertReaderCompatibility(PRODUCT_COMPATIBILITY, { ...READER_CAPABILITIES, libraryFormats: [1, 2], projectionContracts: ["1", "2", "3"] }, "1.0.0"));
});

test("malformed and unknown compatibility fields never become legacy or implicit capabilities", () => {
  assert.throws(() => validateReaderCapabilities({ ...READER_CAPABILITIES, libraryFormats: Array(2) as unknown[] }));
  for (const value of [null, undefined, [], "legacy", 1]) {
    assert.throws(() => validateProductCompatibility(value));
    assert.throws(() => validateReaderCapabilities(value));
  }
  const compatibilityCases: Record<string, unknown[]> = {
    schema: [2, "1", null], libraryFormat: [0, -1, 1.5, "1", null], projectionContracts: [[], ["1", "1"], [1], ["01"], "1", null],
    minimumReaderVersion: [null, "", "0.04.1", "0.4.1-rc.1", 1], commandProtocol: [0, 1.5, "1", null],
  };
  for (const [key, values] of Object.entries(compatibilityCases)) for (const value of values) assert.throws(() => validateProductCompatibility({ ...PRODUCT_COMPATIBILITY, [key]: value }));
  for (const key of Object.keys(PRODUCT_COMPATIBILITY)) { const missing: Record<string, unknown> = { ...PRODUCT_COMPATIBILITY }; delete missing[key]; assert.throws(() => validateProductCompatibility(missing), /keys/u); }
  assert.throws(() => validateProductCompatibility({ ...PRODUCT_COMPATIBILITY, future: true }), /keys/u);
  const capabilityCases: Record<string, unknown[]> = {
    schema: [2, "1", null], kind: ["other", null], libraryFormats: [[], [1, 1], [0], [1.5], ["1"], null],
    projectionContracts: [[], ["2", "2"], [1], [""], null], commandProtocol: [0, "1", null],
  };
  for (const [key, values] of Object.entries(capabilityCases)) for (const value of values) assert.throws(() => validateReaderCapabilities({ ...READER_CAPABILITIES, [key]: value }));
  for (const key of Object.keys(READER_CAPABILITIES)) { const missing: Record<string, unknown> = { ...READER_CAPABILITIES }; delete missing[key]; assert.throws(() => validateReaderCapabilities(missing), /keys/u); }
  assert.throws(() => validateReaderCapabilities({ ...READER_CAPABILITIES, future: true }), /keys/u);
  for (const capabilities of [{ ...READER_CAPABILITIES, libraryFormats: [1, 2] }, { ...READER_CAPABILITIES, projectionContracts: ["1"] }, { ...READER_CAPABILITIES, commandProtocol: 2 }]) assert.throws(() => assertImplementedReaderCapabilities(capabilities), /implemented PCR reader/u);
});
