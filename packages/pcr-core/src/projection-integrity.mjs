import { createHash } from "node:crypto";

export const PROJECTION_CONTRACT_VERSION = "1";
export const PROJECTION_GENERATOR = "tiangong-pcr-builder/markdown-projection";
export const PROJECTION_SOURCE_PATH = "pcr.en-US.md";
export const PROJECTION_SOURCE_NORMALIZATION = "utf8-lf-v1";
export const PROJECTION_HASH_ALGORITHM = "sha256";

const SHA256_PATTERN = /^sha256:[0-9a-f]{64}$/u;
const METADATA_MARKER = "projection_metadata:";

export function normalizeFingerprintText(value) {
  return String(value ?? "")
    .replace(/^\uFEFF/u, "")
    .replace(/\r\n?/gu, "\n");
}

export function sha256Fingerprint(value) {
  return `sha256:${createHash("sha256").update(normalizeFingerprintText(value), "utf8").digest("hex")}`;
}

export function buildProjectionMetadata({ sourceMarkdown, generatedContent }) {
  return {
    contract_version: PROJECTION_CONTRACT_VERSION,
    generator: PROJECTION_GENERATOR,
    canonical_markdown: {
      path: PROJECTION_SOURCE_PATH,
      normalization: PROJECTION_SOURCE_NORMALIZATION,
      hash_algorithm: PROJECTION_HASH_ALGORITHM,
      sha256: sha256Fingerprint(sourceMarkdown),
    },
    generated_content_sha256: sha256Fingerprint(generatedContent),
  };
}

export function splitProjectionDocument(structuredText) {
  const normalized = normalizeFingerprintText(structuredText);
  const lines = normalized.split("\n");
  const markerIndexes = [];
  let offset = 0;

  for (const [index, line] of lines.entries()) {
    if (line === METADATA_MARKER) {
      markerIndexes.push({ index, offset });
    }
    offset += line.length + 1;
  }

  if (markerIndexes.length !== 1) {
    return {
      valid: false,
      generatedContent: null,
      error: markerIndexes.length === 0
        ? "projection_metadata must be present as the final top-level block"
        : "projection_metadata must appear exactly once",
    };
  }

  const marker = markerIndexes[0];
  for (const line of lines.slice(marker.index + 1)) {
    if (line.trim() && !/^ {2,}\S/u.test(line)) {
      return {
        valid: false,
        generatedContent: null,
        error: "projection_metadata must be the final top-level block",
      };
    }
  }

  const generatedContent = normalized.slice(0, marker.offset);
  if (!generatedContent.endsWith("\n")) {
    return {
      valid: false,
      generatedContent: null,
      error: "generated projection content must end with a newline before projection_metadata",
    };
  }

  return { valid: true, generatedContent, error: null };
}

export function inspectProjectionIntegrity({ sourceMarkdown, structuredText, metadata }) {
  const issues = [];
  const contractVersion = scalarOrNull(metadata?.contract_version);
  const sourceHash = scalarOrNull(metadata?.canonical_markdown?.sha256);
  const generatedContentHash = scalarOrNull(metadata?.generated_content_sha256);

  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) {
    issues.push(issue(
      "projection_fingerprint_missing",
      "structured.yaml is missing projection_metadata.",
    ));
  }
  if (contractVersion !== PROJECTION_CONTRACT_VERSION) {
    issues.push(issue(
      "projection_contract_unsupported",
      `Projection contract must be ${PROJECTION_CONTRACT_VERSION}; found ${contractVersion ?? "(missing)"}.`,
    ));
  }
  if (metadata?.generator !== PROJECTION_GENERATOR) {
    issues.push(issue(
      "projection_fingerprint_invalid",
      `Projection generator must be ${PROJECTION_GENERATOR}.`,
    ));
  }
  if (metadata?.canonical_markdown?.path !== PROJECTION_SOURCE_PATH) {
    issues.push(issue(
      "projection_fingerprint_invalid",
      `Canonical Markdown path must be ${PROJECTION_SOURCE_PATH}.`,
    ));
  }
  if (metadata?.canonical_markdown?.normalization !== PROJECTION_SOURCE_NORMALIZATION) {
    issues.push(issue(
      "projection_fingerprint_invalid",
      `Canonical Markdown normalization must be ${PROJECTION_SOURCE_NORMALIZATION}.`,
    ));
  }
  if (metadata?.canonical_markdown?.hash_algorithm !== PROJECTION_HASH_ALGORITHM) {
    issues.push(issue(
      "projection_fingerprint_invalid",
      `Canonical Markdown hash algorithm must be ${PROJECTION_HASH_ALGORITHM}.`,
    ));
  }
  if (!SHA256_PATTERN.test(sourceHash ?? "") || !SHA256_PATTERN.test(generatedContentHash ?? "")) {
    issues.push(issue(
      "projection_fingerprint_invalid",
      "Projection SHA-256 values must use sha256:<64 lowercase hex>.",
    ));
  }

  const sourceHashValid = SHA256_PATTERN.test(sourceHash ?? "")
    ? sourceHash === sha256Fingerprint(sourceMarkdown)
    : null;
  if (sourceHashValid === false) {
    issues.push(issue(
      "projection_source_mismatch",
      "Canonical Markdown SHA-256 does not match projection metadata; regenerate structured.yaml.",
    ));
  }

  const split = splitProjectionDocument(structuredText);
  let contentHashValid = null;
  if (!split.valid) {
    issues.push(issue("projection_fingerprint_invalid", split.error));
  } else if (SHA256_PATTERN.test(generatedContentHash ?? "")) {
    contentHashValid = generatedContentHash === sha256Fingerprint(split.generatedContent);
    if (!contentHashValid) {
      issues.push(issue(
        "projection_content_mismatch",
        "Generated structured projection content SHA-256 does not match projection metadata.",
      ));
    }
  }

  return {
    required: true,
    status: integrityStatus(issues),
    contract_version: contractVersion,
    source_sha256: sourceHash,
    generated_content_sha256: generatedContentHash,
    source_hash_valid: sourceHashValid,
    content_hash_valid: contentHashValid,
    issues: deduplicateIssues(issues),
  };
}

export function projectionNotRequiredState() {
  return {
    required: false,
    status: "not_required",
    contract_version: null,
    source_sha256: null,
    generated_content_sha256: null,
    source_hash_valid: null,
    content_hash_valid: null,
    issues: [],
  };
}

function scalarOrNull(value) {
  return value === undefined || value === null || typeof value === "object"
    ? null
    : String(value);
}

function issue(code, message) {
  return { code, message };
}

function deduplicateIssues(issues) {
  return [...new Map(issues.map((entry) => [`${entry.code}\0${entry.message}`, entry])).values()];
}

function integrityStatus(issues) {
  const codes = new Set(issues.map((entry) => entry.code));
  for (const [code, status] of [
    ["projection_fingerprint_missing", "missing"],
    ["projection_contract_unsupported", "unsupported_contract"],
    ["projection_source_mismatch", "source_mismatch"],
    ["projection_content_mismatch", "content_mismatch"],
    ["projection_fingerprint_invalid", "invalid"],
  ]) {
    if (codes.has(code)) {
      return status;
    }
  }
  return "current";
}
