import test from "node:test";
import assert from "node:assert/strict";
import { assertPcrLanguageCode, declaredPcrLanguages, expectedPcrArtifactHashes, pcrArtifactFiles } from "./src/languages.mjs";

const manifest = (available = ["en-US", "zh-CN"]) => ({ schema_version: 1, languages: { canonical: "en-US", available } });

test("PCR languages require English and Chinese and allow canonical optional languages", () => {
  assert.deepEqual(pcrArtifactFiles(manifest(["en-US", "zh-CN", "de-DE"])), ["pcr.en-US.md", "pcr.zh-CN.md", "pcr.de-DE.md", "structured.yaml"]);
  assert.throws(() => declaredPcrLanguages(manifest(["en-US"])), /requires language zh-CN/u);
  assert.throws(() => declaredPcrLanguages(manifest(["en-US", "zh-CN", "zh-CN"])), /unique/u);
  for (const code of ["../en", "en-US.md", "EN-us", "zh-cn", "und", "en\\US", "en/US"]) {
    assert.throws(() => assertPcrLanguageCode(code), /language code/u);
  }
});

test("legacy release hashes remain unchanged and optional releases require complete v2 binding", () => {
  const v1 = { ...manifest(), release_artifacts: { pcr_en_us_sha256: "en", pcr_zh_cn_sha256: "zh", structured_sha256: "data" } };
  assert.deepEqual(expectedPcrArtifactHashes(v1), { "pcr.en-US.md": "en", "pcr.zh-CN.md": "zh", "structured.yaml": "data" });
  assert.throws(() => expectedPcrArtifactHashes({ ...v1, languages: manifest(["en-US", "zh-CN", "de-DE"]).languages }), /requires schema v2/u);
  const v2 = { ...manifest(["en-US", "zh-CN", "de-DE"]), schema_version: 2, release_artifacts: { markdown_sha256: { "en-US": "en", "zh-CN": "zh", "de-DE": "de" }, structured_sha256: "data" } };
  assert.equal(expectedPcrArtifactHashes(v2)["pcr.de-DE.md"], "de");
  delete v2.release_artifacts.markdown_sha256["de-DE"];
  assert.throws(() => expectedPcrArtifactHashes(v2), /exactly/u);
});
