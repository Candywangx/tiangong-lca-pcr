import test from "node:test";
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
import { renderYaml } from "../../pcr-core/src/yaml-lite.mjs";
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
    assert.equal(site.historicalRecords.length, 1);
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
          else if (!file.endsWith("/report.json"))
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
