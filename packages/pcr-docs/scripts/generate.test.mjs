import test from "node:test";
import {
  recordPages,
  recordNavigationNode,
} from "../lib/record-navigation.mjs";
import { publicHomeLanguages } from "../lib/home-policy.mjs";
import { createDocumentSource } from "../lib/content-source.mjs";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";
import { execFileSync, spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { createAuthoringPcr } from "../../../builder/lib/pcr-authoring-fixture.mjs";
import {
  lifecycle,
  publish,
  revise,
  syncStructured,
} from "../../../builder/lib/manifest-lifecycle.mjs";
import { parseYaml, renderYaml } from "../../pcr-core/src/yaml-lite.mjs";
const script = fileURLToPath(new URL("./generate.mjs", import.meta.url));
const hash = (bytes) =>
  "sha256:" + createHash("sha256").update(bytes).digest("hex");
test("real generator preserves multilingual released snapshots and excludes open revision bodies", () => {
  const temporary = fs.mkdtempSync(path.join(tmpdir(), "pcr-site-history-")),
    root = path.join(temporary, "source"),
    output = path.join(temporary, "output");
  fs.mkdirSync(root);
  const git = (...args) =>
    execFileSync("git", args, { cwd: root, stdio: "pipe" });
  try {
    const fixture = createAuthoringPcr(root, {
      schemaVersion: 2,
      languages: ["en-US", "zh-CN", "de-DE"],
      titles: {
        "en-US": "Synthetic wheat seed",
        "zh-CN": "合成测试小麦种子",
        "de-DE": "Synthetische Testdaten",
      },
      optionalTranslations: { "de-DE": "reviewed" },
    });
    lifecycle({
      root,
      pcr: fixture.libraryPath,
      status: "active",
      "content-maturity": "reviewed_methodology",
      translation: "zh-CN=reviewed",
    });
    publish({ root, pcr: fixture.libraryPath, version: "1.0.0" });
    revise({ root, pcr: fixture.libraryPath, version: "1.1.0" });
    fs.appendFileSync(
      path.join(fixture.pcrDir, "revision/pcr.en-US.md"),
      "\nPUBLISHED_SECOND_VERSION\n",
    );
    syncStructured({ root, pcr: fixture.libraryPath, workspace: "revision" });
    lifecycle({
      root,
      pcr: fixture.libraryPath,
      workspace: "revision",
      translation: "de-DE=aligned",
    });
    lifecycle({
      root,
      pcr: fixture.libraryPath,
      workspace: "revision",
      status: "active",
      "content-maturity": "reviewed_methodology",
      translation: "zh-CN=reviewed",
    });
    lifecycle({
      root,
      pcr: fixture.libraryPath,
      workspace: "revision",
      translation: "de-DE=reviewed",
    });
    const revisionManifest = path.join(
      fixture.pcrDir,
      "revision/manifest.next.yaml",
    );
    const nextManifest = parseYaml(fs.readFileSync(revisionManifest, "utf8"));
    nextManifest.languages.available = ["en-US", "zh-CN"];
    delete nextManifest.title["de-DE"];
    delete nextManifest.translation_status["de-DE"];
    fs.writeFileSync(revisionManifest, renderYaml(nextManifest));
    fs.rmSync(path.join(fixture.pcrDir, "revision/pcr.de-DE.md"));
    publish({ root, pcr: fixture.libraryPath, workspace: "revision" });
    revise({ root, pcr: fixture.libraryPath, version: "1.2.0" });
    fs.appendFileSync(
      path.join(fixture.pcrDir, "revision/pcr.en-US.md"),
      "\nUNPUBLISHED_TEST_MARKER\n",
    );
    // Restore revision projection consistency while retaining its private marker.
    syncStructured({ root, pcr: fixture.libraryPath, workspace: "revision" });
    const registryPath = "classifications/aliases/pcr-id-aliases.yaml";
    const registry = renderYaml({
      schema_version: 1,
      registry_kind: "legacy-pcr-id-aliases",
      status: "current",
      aliases: [],
    });
    fs.mkdirSync(path.dirname(path.join(root, registryPath)), {
      recursive: true,
    });
    fs.writeFileSync(path.join(root, registryPath), registry);
    fs.writeFileSync(
      path.join(root, "library/catalog.yaml"),
      renderYaml({
        schema_version: 1,
        catalog_status: "current",
        pcr_index: "library/indexes/pcr-index.yaml",
        classification_mappings: [],
        pcr_id_aliases: {
          path: registryPath,
          hash_mode: "exact_bytes",
          sha256: hash(registry),
          entry_count: 0,
        },
      }),
    );
    fs.mkdirSync(path.join(root, "library/indexes"));
    fs.writeFileSync(
      path.join(root, "library/indexes/pcr-index.yaml"),
      renderYaml({
        schema_version: 1,
        index_kind: "tiangong-pcr-material-catalog",
        status: "current",
        summary: { total: 1 },
        pcrs: [
          { id: "pcr.agriculture.crops.wheat-seed", path: fixture.libraryPath },
        ],
      }),
    );
    git("init", "-q", "-b", "main");
    git("add", "-A");
    git(
      "-c",
      "user.name=PCR Test",
      "-c",
      "user.email=pcr-test@example.invalid",
      "commit",
      "-qm",
      "Synthetic document history",
    );
    const run = () =>
      spawnSync(
        process.execPath,
        [script, "--source-root", root, "--output-root", output],
        { encoding: "utf8", maxBuffer: 4 * 1024 * 1024 },
      );
    let result = run();
    assert.equal(result.status, 0, result.stderr);
    const site = JSON.parse(
      fs.readFileSync(path.join(output, ".generated/site.json")),
    );
    assert.equal(site.records.length, 1);
    assert.equal(site.historicalRecords.length, 2);
    assert.equal(site.historicalRecords[0].version, "1.0.0");
    assert.equal(
      site.historicalRecords[0].title["de-DE"],
      "Synthetische Testdaten",
    );
    assert.ok(
      site.pages.some(
        (page) => page.language === "de-DE" && page.recordVersion === "1.0.0",
      ),
    );
    assert.ok(site.records[0].versions[0].urls["de-DE"]);
    for (const record of [site.records[0], ...site.historicalRecords])
      assert.deepEqual(
        record.versions.map((item) => item.version),
        ["1.0.0", "1.1.0"],
      );
    const source = createDocumentSource(site);
    assert.deepEqual(
      publicHomeLanguages(site).map((language) => language.code),
      ["zh-CN", "en-US"],
    );
    for (const language of ["en-US", "zh-CN", "de-DE"]) {
      const currentPages = recordPages(site, site.records[0], language);
      assert.equal(currentPages.length, language === "de-DE" ? 0 : 1);
      assert.ok(currentPages.every((page) => page.recordVersion === undefined));
      for (const historical of site.historicalRecords) {
        const pages = recordPages(site, historical, language);
        assert.equal(
          pages.length,
          language === "de-DE" && historical.version === "1.1.0" ? 0 : 1,
        );
        for (const page of pages) {
          assert.equal(page.recordVersion, historical.version);
          assert.equal(
            source.getPage(page.slugs, page.locale)?.data.doc.key,
            page.key,
          );
        }
        if (pages.length) {
          const sidebar = recordNavigationNode(site, historical, language, {
            title: historical.title[language],
            url: historical.urls[language],
          });
          const urls =
            sidebar.type === "page"
              ? [sidebar.url]
              : sidebar.children.map((page) => page.url);
          assert.deepEqual(
            urls,
            pages.map((page) => page.url),
            "the rendered sidebar must use only this historical version",
          );
        }
      }
    }
    assert.equal(
      source.getPage(["pcr", "agriculture", "crops", "wheat-seed"], "de-de"),
      undefined,
      "no fake current German fallback",
    );
    const germanHistory = site.pages.find(
      (page) => page.language === "de-DE" && page.recordVersion === "1.0.0",
    );
    assert.equal(germanHistory.currentLanguage, "en-US");
    assert.equal(germanHistory.currentUrl, site.records[0].urls["en-US"]);
    assert.ok(
      site.pages
        .filter((page) => page.kind === "catalog" && page.language === "de-DE")
        .every((page) => !page.indexable),
    );
    const report = JSON.parse(
      fs.readFileSync(path.join(output, ".generated/report.json")),
    );
    assert.ok(
      report.downloads.some((file) => file.name === "release-history.yaml"),
    );
    for (const file of report.downloads) {
      assert.ok(!file.sourcePath.includes("/revision/"));
      assert.deepEqual(
        fs.readFileSync(path.join(output, "public", file.url)),
        fs.readFileSync(path.join(root, file.sourcePath)),
      );
    }
    for (const page of site.pages)
      assert.ok(
        !fs
          .readFileSync(path.join(output, ".generated", page.htmlPath), "utf8")
          .includes("UNPUBLISHED_TEST_MARKER"),
      );
    const digest = () => {
      const files = {};
      const walk = (directory) => {
        for (const entry of fs.readdirSync(directory, {
          withFileTypes: true,
        })) {
          const file = path.join(directory, entry.name);
          if (entry.isDirectory()) walk(file);
          else if (path.basename(file) !== "report.json")
            files[path.relative(output, file)] = hash(fs.readFileSync(file));
        }
      };
      walk(output);
      return files;
    };
    const before = digest();
    result = run();
    assert.equal(result.status, 0, result.stderr);
    assert.deepEqual(
      digest(),
      before,
      "same pinned source generates byte-identical content and indexes",
    );
    assert.equal(
      git("status", "--porcelain").toString().trim(),
      "",
      "generator must not modify source",
    );
    const committedSite = fs.readFileSync(
      path.join(output, ".generated/site.json"),
    );
    fs.rmSync(path.join(fixture.pcrDir, "pcr.zh-CN.md"));
    git("add", "-A");
    git(
      "-c",
      "user.name=PCR Test",
      "-c",
      "user.email=pcr-test@example.invalid",
      "commit",
      "-qm",
      "Missing required language negative fixture",
    );
    result = run();
    assert.notEqual(result.status, 0);
    assert.deepEqual(
      fs.readFileSync(path.join(output, ".generated/site.json")),
      committedSite,
      "failed generation preserves last verified output",
    );
  } finally {
    fs.rmSync(temporary, { recursive: true, force: true });
  }
});
