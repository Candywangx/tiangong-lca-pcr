import assert from "node:assert/strict";
import test from "node:test";

import {
  buildProjectionMetadata,
  inspectProjectionIntegrity,
  normalizeFingerprintText,
  sha256Fingerprint,
  splitProjectionDocument,
} from "./src/projection-integrity.mjs";

function documentFor(sourceMarkdown, generatedContent = "schema_version: 1\n") {
  const metadata = buildProjectionMetadata({ sourceMarkdown, generatedContent });
  const structuredText = `${generatedContent}projection_metadata:\n` +
    `  contract_version: "${metadata.contract_version}"\n` +
    `  generator: "${metadata.generator}"\n` +
    "  canonical_markdown:\n" +
    `    path: "${metadata.canonical_markdown.path}"\n` +
    `    normalization: "${metadata.canonical_markdown.normalization}"\n` +
    `    hash_algorithm: "${metadata.canonical_markdown.hash_algorithm}"\n` +
    `    sha256: "${metadata.canonical_markdown.sha256}"\n` +
    `  generated_content_sha256: "${metadata.generated_content_sha256}"\n`;
  return { metadata, structuredText };
}

test("projection fingerprints normalize BOM and line endings without trimming content", () => {
  assert.equal(sha256Fingerprint("\uFEFFa\r\nb\rc\n"), sha256Fingerprint("a\nb\nc\n"));
  assert.notEqual(sha256Fingerprint("a\n"), sha256Fingerprint("a"));
  assert.equal(normalizeFingerprintText("\uFEFFa\r\n"), "a\n");
});

test("projection integrity accepts current deterministic metadata", () => {
  const sourceMarkdown = "# Example\n";
  const { metadata, structuredText } = documentFor(sourceMarkdown);
  const result = inspectProjectionIntegrity({ sourceMarkdown, structuredText, metadata });

  assert.equal(result.status, "current");
  assert.equal(result.source_hash_valid, true);
  assert.equal(result.content_hash_valid, true);
  assert.deepEqual(result.issues, []);
});

test("projection integrity distinguishes source and generated-content drift", () => {
  const sourceMarkdown = "# Example\n";
  const { metadata, structuredText } = documentFor(sourceMarkdown);

  const staleSource = inspectProjectionIntegrity({
    sourceMarkdown: "# Changed\n",
    structuredText,
    metadata,
  });
  assert.equal(staleSource.status, "source_mismatch");
  assert.ok(staleSource.issues.some((entry) => entry.code === "projection_source_mismatch"));

  const modifiedContent = inspectProjectionIntegrity({
    sourceMarkdown,
    structuredText: structuredText.replace("schema_version: 1", "schema_version: 2"),
    metadata,
  });
  assert.equal(modifiedContent.status, "content_mismatch");
  assert.ok(modifiedContent.issues.some((entry) => entry.code === "projection_content_mismatch"));
});

test("projection metadata must be one final top-level block", () => {
  assert.equal(splitProjectionDocument("schema_version: 1\n").valid, false);
  assert.equal(
    splitProjectionDocument(
      "schema_version: 1\nprojection_metadata:\n  contract_version: \"1\"\nextra: true\n",
    ).valid,
    false,
  );
});

test("projection metadata rejects implicit normalization or hash contracts", () => {
  const sourceMarkdown = "# Example\n";
  const { metadata, structuredText } = documentFor(sourceMarkdown);
  delete metadata.canonical_markdown.normalization;

  const result = inspectProjectionIntegrity({ sourceMarkdown, structuredText, metadata });

  assert.equal(result.status, "invalid");
  assert.ok(result.issues.some((entry) => entry.code === "projection_fingerprint_invalid"));
});
