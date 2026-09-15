/** Shared language identities. Website route aliases never become PCR identities. */
export const CANONICAL_PCR_LANGUAGE = "en-US";
export const REQUIRED_PCR_LANGUAGES = Object.freeze(["en-US", "zh-CN"]);
export const LEGACY_PCR_ARTIFACT_HASH_FIELDS = Object.freeze({
  pcr_en_us_sha256: "pcr.en-US.md",
  pcr_zh_cn_sha256: "pcr.zh-CN.md",
  structured_sha256: "structured.yaml",
});

export function assertPcrLanguageCode(language) {
  if (typeof language !== "string" || !/^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/u.test(language)) {
    throw new Error(`Invalid PCR language code: ${String(language)}`);
  }
  let canonical;
  try {
    canonical = Intl.getCanonicalLocales(language)[0];
  } catch {
    throw new Error(`Invalid PCR language code: ${language}`);
  }
  if (canonical !== language || language === "und") {
    throw new Error(`PCR language code must use its canonical BCP 47 spelling: ${language}`);
  }
  return language;
}

export function pcrMarkdownFile(language) {
  return `pcr.${assertPcrLanguageCode(language)}.md`;
}

export function declaredPcrLanguages(manifest, { strict = true } = {}) {
  const available = manifest?.languages?.available;
  // Preserve the legacy reader's fixed-file inspection of incomplete metadata.
  // Authoring and documentation export always use the strict contract.
  if (!strict && available === undefined) return [...REQUIRED_PCR_LANGUAGES];
  if (!Array.isArray(available) || available.length === 0) {
    throw new Error("PCR manifest requires languages.available.");
  }
  const languages = available.map(assertPcrLanguageCode);
  if (new Set(languages).size !== languages.length) {
    throw new Error("PCR manifest languages.available must be unique.");
  }
  if (strict) {
    if (manifest.languages.canonical !== CANONICAL_PCR_LANGUAGE) {
      throw new Error(`PCR canonical language must be ${CANONICAL_PCR_LANGUAGE}.`);
    }
    for (const required of REQUIRED_PCR_LANGUAGES) {
      if (!languages.includes(required)) throw new Error(`PCR requires language ${required}.`);
    }
  }
  return languages;
}

export function pcrArtifactFiles(manifest, options = {}) {
  return [...declaredPcrLanguages(manifest, options).map(pcrMarkdownFile), "structured.yaml"];
}

/** Current release artifacts, with v1 fixed hashes and v2 per-language hashes. */
export function expectedPcrArtifactHashes(manifest) {
  const artifacts = manifest?.release_artifacts;
  if (!artifacts || typeof artifacts !== "object" || Array.isArray(artifacts)) {
    throw new Error("Managed PCR requires release_artifacts.");
  }
  const languages = declaredPcrLanguages(manifest);
  if (manifest.schema_version === 2) {
    const hashes = artifacts.markdown_sha256;
    if (!hashes || typeof hashes !== "object" || Array.isArray(hashes)) {
      throw new Error("PCR schema v2 requires release_artifacts.markdown_sha256.");
    }
    if (Object.keys(hashes).sort().join("\n") !== [...languages].sort().join("\n")) {
      throw new Error("Release Markdown hashes must match the declared languages exactly.");
    }
    return {
      ...Object.fromEntries(languages.map((language) => [pcrMarkdownFile(language), hashes[language]])),
      "structured.yaml": artifacts.structured_sha256,
    };
  }
  if (manifest.schema_version !== undefined && manifest.schema_version !== 1) {
    throw new Error(`Unsupported PCR manifest schema version: ${manifest.schema_version}`);
  }
  if (languages.some((language) => !REQUIRED_PCR_LANGUAGES.includes(language))) {
    throw new Error("A released PCR with optional languages requires schema v2 artifact hashes.");
  }
  return Object.fromEntries(
    Object.entries(LEGACY_PCR_ARTIFACT_HASH_FIELDS).map(([field, file]) => [file, artifacts[field]]),
  );
}
