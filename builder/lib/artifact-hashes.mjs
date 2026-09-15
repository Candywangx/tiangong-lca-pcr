import { createHash } from "node:crypto";

export function byteSha256(value) {
  return `sha256:${createHash("sha256").update(asBytes(value)).digest("hex")}`;
}

/**
 * Exact-byte release fingerprints.
 *
 * With `markdownSha256ByLanguage`, the Markdown hashes are keyed by language and
 * the legacy v1 fields are omitted (schema v2). Without it, the legacy
 * two-language v1 fields are emitted unchanged.
 */
export function releaseArtifactHashes({
  manifestBytes,
  englishBytes,
  chineseBytes,
  structuredBytes,
  manifestText,
  englishText,
  chineseText,
  structuredText,
  markdownSha256ByLanguage,
}) {
  const structured = byteSha256(structuredBytes ?? structuredText);
  const manifestSnapshot = byteSha256(manifestBytes ?? manifestText);
  if (markdownSha256ByLanguage) {
    return {
      manifest_snapshot_sha256: manifestSnapshot,
      markdown_sha256: Object.fromEntries(
        Object.entries(markdownSha256ByLanguage).map(([language, bytes]) => [language, byteSha256(bytes)]),
      ),
      structured_sha256: structured,
    };
  }
  return {
    manifest_snapshot_sha256: manifestSnapshot,
    pcr_en_us_sha256: byteSha256(englishBytes ?? englishText),
    pcr_zh_cn_sha256: byteSha256(chineseBytes ?? chineseText),
    structured_sha256: structured,
  };
}

/**
 * Current-workspace fingerprints recorded in `manifest.release_artifacts`.
 * The snapshot manifest hash is release metadata and is deliberately absent.
 */
export function manifestReleaseArtifacts({
  englishBytes,
  chineseBytes,
  structuredBytes,
  englishText,
  chineseText,
  structuredText,
  markdownSha256ByLanguage,
}) {
  const structured_sha256 = byteSha256(structuredBytes ?? structuredText);
  if (markdownSha256ByLanguage) {
    return {
      markdown_sha256: Object.fromEntries(
        Object.entries(markdownSha256ByLanguage).map(([language, bytes]) => [language, byteSha256(bytes)]),
      ),
      structured_sha256,
    };
  }
  return {
    pcr_en_us_sha256: byteSha256(englishBytes ?? englishText),
    pcr_zh_cn_sha256: byteSha256(chineseBytes ?? chineseText),
    structured_sha256,
  };
}

function asBytes(value) {
  if (Buffer.isBuffer(value)) {
    return value;
  }
  if (value instanceof Uint8Array) {
    return Buffer.from(value.buffer, value.byteOffset, value.byteLength);
  }
  if (typeof value === "string") {
    return Buffer.from(value, "utf8");
  }
  throw new TypeError(`SHA-256 input must be a Buffer, Uint8Array, or string; received ${typeof value}`);
}
