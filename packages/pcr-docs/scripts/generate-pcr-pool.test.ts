import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { execFileSync, spawnSync } from "node:child_process";
import { EventEmitter } from "node:events";
import fs from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { createAuthoringPcr } from "../../../builder/lib/pcr-authoring-fixture.ts";
import { lifecycle, publish, syncStructured } from "../../../builder/lib/manifest-lifecycle.ts";
import { renderYaml } from "../../pcr-core/src/yaml-lite.ts";
import { generatePcrEntries, parseGenerateWorkers, runGeneratePcrPool, type GeneratePcrPoolContext } from "./generate-pcr-pool.ts";
import { listPcrs } from "../../pcr-core/src/index.ts";
import { renderMarkdown } from "./markdown.ts";
import { canonicalReadingParts } from "./reading-routes.ts";
import { PROVIDER_RUNTIME_PATHS, type ProviderRuntime } from "./provider-runtime.ts";
import type { PcrEntryResult } from "./generate-pcr-entry.ts";

const generateScript = fileURLToPath(new URL("./generate.ts", import.meta.url));
const sha = (bytes: string | Uint8Array) => "sha256:" + createHash("sha256").update(bytes).digest("hex");

function collectFiles(rootDir: string, base = ""): Map<string, Buffer> {
  const result = new Map<string, Buffer>();
  for (const entry of fs.readdirSync(path.join(rootDir, base), { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const rel = base ? base + "/" + entry.name : entry.name;
    if (entry.isDirectory()) {
      for (const [k, v] of collectFiles(rootDir, rel)) result.set(k, v);
    } else if (entry.isFile()) {
      result.set(rel, fs.readFileSync(path.join(rootDir, rel)));
    }
  }
  return result;
}

function normalizeReport(bytes: Buffer): string {
  const parsed = JSON.parse(bytes.toString("utf8")) as { metrics?: { generationMs?: number } };
  if (parsed.metrics && typeof parsed.metrics.generationMs === "number") parsed.metrics.generationMs = 0;
  return JSON.stringify(parsed);
}

function buildMultiPcrFixture(largeReadingPages = false): { temporary: string; root: string; pcrs: Array<{ id: string; path: string }> } {
  const temporary = fs.mkdtempSync(path.join(tmpdir(), "pcr-gen-pool-"));
  const root = path.join(temporary, "source");
  fs.mkdirSync(root, { recursive: true });
  const items = [
    { id: "pcr.agriculture.crops.wheat-a", libraryPath: "library/pcrs/agriculture/crops/wheat-a", en: "Synthetic wheat A", zh: "合成小麦 A", publishHistory: true },
    { id: "pcr.agriculture.crops.wheat-b", libraryPath: "library/pcrs/agriculture/crops/wheat-b", en: "Synthetic wheat B", zh: "合成小麦 B", publishHistory: false },
    { id: "pcr.energy.power.solar-c", libraryPath: "library/pcrs/energy/power/solar-c", en: "Synthetic solar C", zh: "合成光伏 C", publishHistory: false },
  ];
  const pcrs: Array<{ id: string; path: string }> = [];
  for (const item of items) {
    const fixture = createAuthoringPcr(root, {
      schemaVersion: 2,
      libraryPath: item.libraryPath,
      languages: ["en-US", "zh-CN"],
      titles: { "en-US": item.en, "zh-CN": item.zh },
    });
    for (const file of ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md"]) {
      const target = path.join(fixture.pcrDir, file);
      fs.writeFileSync(target, fs.readFileSync(target, "utf8").replaceAll("pcr.agriculture.crops.wheat-seed", item.id));
      if (largeReadingPages && item.id.endsWith("wheat-b") && file === "pcr.en-US.md") {
        fs.appendFileSync(target, "\n\n## Reading section Alpha\n\n" + "Stable source content. ".repeat(6000) +
          "\n\n## Reading section Beta\n\n" + "Complete method context. ".repeat(6000) + "\n");
      }
    }
    syncStructured({ root, pcr: fixture.libraryPath });
    if (item.publishHistory) {
      lifecycle({ root, pcr: fixture.libraryPath, status: "active", "content-maturity": "reviewed_methodology", translation: "zh-CN=reviewed" });
      publish({ root, pcr: fixture.libraryPath, version: "1.0.0" });
    }
    pcrs.push({ id: item.id, path: fixture.libraryPath });
  }
  const registryPath = "classifications/aliases/pcr-id-aliases.yaml";
  const registry = renderYaml({ schema_version: 1, registry_kind: "legacy-pcr-id-aliases", status: "current", aliases: [] });
  fs.mkdirSync(path.dirname(path.join(root, registryPath)), { recursive: true });
  fs.writeFileSync(path.join(root, registryPath), registry);
  fs.writeFileSync(
    path.join(root, "library/catalog.yaml"),
    renderYaml({
      schema_version: 1,
      catalog_status: "current",
      pcr_index: "library/indexes/pcr-index.yaml",
      classification_mappings: [],
      pcr_id_aliases: { path: registryPath, hash_mode: "exact_bytes", sha256: sha(registry), entry_count: 0 },
    }),
  );
  fs.mkdirSync(path.join(root, "library/indexes"), { recursive: true });
  fs.writeFileSync(
    path.join(root, "library/indexes/pcr-index.yaml"),
    renderYaml({
      schema_version: 1,
      index_kind: "tiangong-pcr-material-catalog",
      status: "current",
      summary: { total: pcrs.length },
      pcrs,
    }),
  );
  const guidePath = "packages/pcr-docs/public/getting-started.md";
  fs.mkdirSync(path.dirname(path.join(root, guidePath)), { recursive: true });
  fs.copyFileSync(new URL("../public/getting-started.md", import.meta.url), path.join(root, guidePath));
  fs.copyFileSync(new URL("../public/getting-started.zh-CN.md", import.meta.url), path.join(root, "packages/pcr-docs/public/getting-started.zh-CN.md"));
  const git = (...args: string[]) => execFileSync("git", args, { cwd: root, stdio: "pipe" });
  git("init", "-q", "-b", "main");
  git("add", "-A");
  git("-c", "user.name=PCR Test", "-c", "user.email=pcr-test@example.invalid", "commit", "-qm", "Multi-PCR pool fixture");
  return { temporary, root, pcrs };
}

test("parseGenerateWorkers accepts 1 or 2 and rejects invalid values", () => {
  assert.equal(parseGenerateWorkers(undefined), 1);
  assert.equal(parseGenerateWorkers("1"), 1);
  assert.equal(parseGenerateWorkers("2"), 2);
  for (const invalid of ["", "0", "3", "two"]) {
    assert.throws(() => parseGenerateWorkers(invalid), /PCR_DOCS_GENERATE_WORKERS/u);
  }
});

test("parallel 2-worker generation produces byte-for-byte identical outputs to serial generation", () => {
  const { temporary, root } = buildMultiPcrFixture();
  try {
    const out1 = path.join(temporary, "out-1");
    const out2 = path.join(temporary, "out-2");
    const run = (output: string, workers: string) =>
      spawnSync(process.execPath, [generateScript, "--source-root", root, "--output-root", output], {
        encoding: "utf8",
        env: { ...process.env, PCR_DOCS_GENERATE_WORKERS: workers },
        maxBuffer: 8 * 1024 * 1024,
      });
    const r1 = run(out1, "1");
    assert.equal(r1.status, 0, r1.stderr);
    const r2 = run(out2, "2");
    assert.equal(r2.status, 0, r2.stderr);
    assert.match(r2.stdout, /"event":"pcr-document-generation"/u);

    const files1 = collectFiles(out1);
    const files2 = collectFiles(out2);
    assert.deepEqual([...files1.keys()], [...files2.keys()]);
    for (const [rel, bytes1] of files1) {
      const bytes2 = files2.get(rel)!;
      if (rel === ".generated/report.json") {
        assert.equal(normalizeReport(bytes1), normalizeReport(bytes2), rel);
      } else {
        assert.ok(bytes1.equals(bytes2), "Output differed for " + rel);
      }
    }
  } finally {
    fs.rmSync(temporary, { recursive: true, force: true });
  }
});

test("serial and parallel generation preserve packed reading routes and logical search units", async () => {
  const { temporary, root: sourceRoot, pcrs } = buildMultiPcrFixture(true);
  const root = fs.realpathSync(sourceRoot);
  try {
    const git = (...args: string[]) => execFileSync("git", args, { cwd: root, encoding: "utf8" });
    const tracked = new Map(git("ls-tree", "-r", "HEAD").trim().split("\n").map(line => {
      const [metadata, file] = line.split("\t");
      return [file!, metadata!.split(" ")[2]!] as const;
    }));
    const routes: ProviderRuntime["routes"] = [];
    let logicalCount = 0, physicalCount = 0;
    for (const pcr of pcrs) for (const [language, locale] of [["en-US", "en"], ["zh-CN", "zh"]] as const) {
      const file = pcr.path + "/pcr." + language + ".md";
      const rendered = renderMarkdown(fs.readFileSync(path.join(root, file), "utf8"), file, { packAdjacent: true });
      const base = "/" + locale + "/docs/pcr/" + pcr.path.slice("library/pcrs/".length) + "/";
      const chapter = (slug: string) => base + "chapters/" + slug + "/";
      const reserved = new Set(rendered.logicalParts.slice(1).map(part => chapter(part.slug)));
      const physical = canonicalReadingParts(rendered.parts, chapter, reserved);
      logicalCount += rendered.logicalParts.length;
      physicalCount += physical.length;
      for (const part of rendered.logicalParts.slice(1)) {
        const owner = physical.findIndex(candidate => part.anchors.every(anchor => candidate.anchors.includes(anchor)));
        assert.ok(owner >= 0);
        routes.push({ from: chapter(part.slug), to: owner === 0 ? base : chapter(physical[owner]!.slug), anchor: part.anchors[0]! });
      }
    }
    assert.ok(physicalCount < logicalCount, "The fixture must exercise actual reading-page packing");
    const providerRuntime: ProviderRuntime = { schemaVersion: 1, sourceCommit: git("rev-parse", "HEAD").trim(),
      files: PROVIDER_RUNTIME_PATHS.map(file => ({ path: file, bytes: 1, sha256: sha("fixture") })),
      routes: routes.sort((a, b) => a.from < b.from ? -1 : a.from > b.from ? 1 : 0) };
    const results: PcrEntryResult[][] = [];
    for (const workers of [1, 2] as const) {
      const entries: PcrEntryResult[] = [], stage = path.join(temporary, "packed-" + workers);
      await generatePcrEntries({ root, stage, origin: "https://pcr.tiangong.earth", sourceDate: "2026-01-01T00:00:00Z",
        modified: new Map(), tracked, providerRuntime, pcrs: listPcrs({ root, scope: "material" }),
        onEntry(index, entry) { assert.equal(index, entries.length); entries.push(entry); } }, workers);
      const current = (file: string) => !file.includes("/releases/");
      assert.equal(entries.flatMap(entry => entry.documents).filter(doc => current(doc.sourcePath)).reduce((sum, doc) => sum + doc.pages, 0), physicalCount);
      assert.equal(entries.flatMap(entry => entry.searches).filter(item => !item.page.recordVersion).length, logicalCount);
      results.push(entries);
    }
    assert.deepEqual(results[0], results[1]);
    assert.deepEqual(collectFiles(path.join(temporary, "packed-1")), collectFiles(path.join(temporary, "packed-2")));
  } finally { fs.rmSync(temporary, { recursive: true, force: true }); }
});

test("generate pool rejects invalid pool size, worker faults, and propagates task failures deterministically", async () => {
  const baseContext: GeneratePcrPoolContext = {
    root: "/tmp",
    stage: "/tmp",
    origin: "https://pcr.tiangong.earth",
    sourceDate: "2026-01-01T00:00:00Z",
    modified: new Map(),
    tracked: new Map(),
    pcrs: [
      { id: "pcr.a", path: "library/pcrs/a/b/c", readiness: { status: "ready", missing: [] } as never },
      { id: "pcr.b", path: "library/pcrs/a/b/d", readiness: { status: "ready", missing: [] } as never },
    ],
    onEntry() {},
  };
  await assert.rejects(runGeneratePcrPool(baseContext, { workers: 3 as never }), /Invalid PCR generation pool size/u);
  await runGeneratePcrPool({ ...baseContext, pcrs: [] }, { workers: 2 });

  // Fake child that reports failure for pcr.a
  let pidCounter = 1000;
  const makeFakeChild = (behavior: "fail-first" | "bad-ready" | "early-close") =>
    (() => {
      const emitter = new EventEmitter() as EventEmitter & {
        pid: number;
        connected: boolean;
        send: (msg: Record<string, unknown>, cb?: (err: Error | null) => void) => boolean;
        kill: () => boolean;
      };
      emitter.pid = ++pidCounter;
      emitter.connected = true;
      emitter.kill = () => {
        emitter.connected = false;
        setImmediate(() => emitter.emit("close", 0));
        return true;
      };
      emitter.send = (msg, cb) => {
        cb?.(null);
        if (msg.type === "initialize") {
          setImmediate(() => {
            if (behavior === "bad-ready") emitter.emit("message", { type: "ready", pid: -1, heapLimitBytes: 1024 });
            else if (behavior === "early-close") emitter.emit("close", 1);
            else emitter.emit("message", { type: "ready", pid: emitter.pid, heapLimitBytes: 1024 * 1024 });
          });
        } else if (msg.type === "batch" && behavior === "fail-first") {
          const first = (msg.items as Array<{ index: number; pcr: { id: string } }>)[0]!;
          setImmediate(() =>
            emitter.emit("message", {
              type: "failure",
              index: first.index,
              pcrId: first.pcr.id,
              error: { name: "Error", message: "boom:" + first.pcr.id },
            }),
          );
        } else if (msg.type === "stop") {
          setImmediate(() => emitter.emit("close", 0));
        }
        return true;
      };
      return emitter;
    }) as never;

  await assert.rejects(runGeneratePcrPool(baseContext, { workers: 2, createChild: makeFakeChild("fail-first") }), /boom:pcr\.a/u);
  await assert.rejects(runGeneratePcrPool(baseContext, { workers: 1, createChild: makeFakeChild("bad-ready") }), /Invalid PCR generation child identity/u);
  await assert.rejects(runGeneratePcrPool(baseContext, { workers: 1, createChild: makeFakeChild("early-close") }), /closed before completion/u);
});
