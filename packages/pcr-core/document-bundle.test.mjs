import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { readPcrDocumentBundle, readPcrMarkdown } from "./src/index.mjs";
import { parseYaml, renderYaml } from "./src/yaml-lite.mjs";

const relative = "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed";
const id = "pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed";
const hash = (bytes) => `sha256:${createHash("sha256").update(bytes).digest("hex")}`;

function fixture() {
  const root = mkdtempSync(path.join(tmpdir(), "pcr-document-bundle-"));
  const directory = path.join(root, relative);
  mkdirSync(path.dirname(directory), { recursive: true });
  cpSync(path.resolve(relative), directory, { recursive: true });
  const registryPath = "classifications/aliases/pcr-id-aliases.yaml";
  const registry = renderYaml({ schema_version: 1, registry_kind: "legacy-pcr-id-aliases", status: "current", aliases: [] });
  mkdirSync(path.dirname(path.join(root, registryPath)), { recursive: true });
  writeFileSync(path.join(root, registryPath), registry);
  writeFileSync(path.join(root, "library/catalog.yaml"), renderYaml({
    schema_version: 1,
    catalog_status: "current",
    pcr_id_aliases: { path: registryPath, hash_mode: "exact_bytes", sha256: hash(registry), entry_count: 0 },
  }));
  return { root, directory, dispose: () => rmSync(root, { recursive: true, force: true }) };
}

test("document export preserves complete manifest and exact original bytes", () => {
  const f = fixture();
  try {
    const file = path.join(f.directory, "manifest.yaml");
    const original = `# An original comment must survive the download.\r\n${readFileSync(file, "utf8")}`;
    writeFileSync(file, original);
    const result = readPcrDocumentBundle({ root: f.root, pcrId: id });
    assert.deepEqual(result.manifest, parseYaml(original));
    assert.ok(result.manifest.modules.core.includes("allocation"));
    assert.ok(result.manifest.target_entities.includes("process"));
    for (const [name, artifact] of Object.entries(result.artifacts)) {
      const bytes = readFileSync(path.join(f.directory, name));
      assert.deepEqual(artifact.bytes, bytes);
      assert.equal(artifact.sha256, hash(bytes));
      assert.equal(artifact.path, `${relative}/${name}`);
    }
    result.artifacts["manifest.yaml"].bytes.fill(0);
    result.manifest.title["en-US"] = "mutated consumer copy";
    const again = readPcrDocumentBundle({ root: f.root, pcrId: id });
    assert.equal(again.artifacts["manifest.yaml"].text, original);
    assert.notEqual(again.manifest.title["en-US"], "mutated consumer copy");
  } finally { f.dispose(); }
});

test("declared optional language is exported and checked against its v2 release hash", () => {
  const f = fixture();
  try {
    const file = path.join(f.directory, "manifest.yaml");
    const manifest = parseYaml(readFileSync(file, "utf8"));
    manifest.schema_version = 2;
    manifest.languages.available.push("de-DE");
    manifest.title["de-DE"] = "Synthetische Sprachtestdatei";
    manifest.translation_status["de-DE"] = "aligned";
    const german = "---\npcr_id: " + id + "\nlanguage: de-DE\nstatus: candidate\nsync_with: pcr.en-US.md\n---\n\n# Synthetische Sprachtestdatei\n\nNur Testdaten.\n";
    writeFileSync(path.join(f.directory, "pcr.de-DE.md"), german);
    manifest.release_artifacts = {
      markdown_sha256: Object.fromEntries(manifest.languages.available.map((language) => [language, hash(readFileSync(path.join(f.directory, `pcr.${language}.md`)))])),
      structured_sha256: hash(readFileSync(path.join(f.directory, "structured.yaml"))),
    };
    writeFileSync(file, renderYaml(manifest));
    assert.equal(readPcrMarkdown({ root: f.root, pcrId: id, language: "de-DE" }), german);
    assert.deepEqual(readPcrDocumentBundle({ root: f.root, pcrId: id }).languages, ["en-US", "zh-CN", "de-DE"]);
    writeFileSync(path.join(f.directory, "pcr.de-DE.md"), `${german}changed\n`);
    assert.throws(() => readPcrDocumentBundle({ root: f.root, pcrId: id }), /snapshot|consistent|hash/iu);
  } finally { f.dispose(); }
});

test("required/declared language failures and stale projections cannot become empty success", () => {
  for (const mutation of ["missing-zh", "missing-optional", "stale-structured", "invalid-utf8"]) {
    const f = fixture();
    try {
      if (mutation === "missing-zh") rmSync(path.join(f.directory, "pcr.zh-CN.md"));
      if (mutation === "missing-optional") {
        const file = path.join(f.directory, "manifest.yaml");
        const manifest = parseYaml(readFileSync(file, "utf8"));
        manifest.schema_version = 2;
        manifest.languages.available.push("de-DE");
        writeFileSync(file, renderYaml(manifest));
      }
      if (mutation === "stale-structured") {
        const file = path.join(f.directory, "pcr.en-US.md");
        writeFileSync(file, `${readFileSync(file, "utf8")}\nChanged canonical source.\n`);
      }
      if (mutation === "invalid-utf8") writeFileSync(path.join(f.directory, "pcr.zh-CN.md"), Buffer.from([0xff, 0xfe]));
      assert.throws(() => readPcrDocumentBundle({ root: f.root, pcrId: id }), undefined, mutation);
    } finally { f.dispose(); }
  }
});
