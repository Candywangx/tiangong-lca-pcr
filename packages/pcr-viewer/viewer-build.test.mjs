import assert from "node:assert/strict";
import { execFileSync, spawn } from "node:child_process";
import {
  cpSync,
  existsSync,
  readFileSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";

import { buildGuidance } from "../pcr-core/src/index.mjs";
import { buildViewer, VIEWER_BUILD_MARKER } from "./scripts/build-viewer-data.mjs";
import { serveViewer } from "./scripts/serve-viewer.mjs";
import {
  describeReadiness,
  filterPcrs,
  renderMarkdown,
  summarizeGuidance,
} from "./static/viewer-core.js";

const repoRoot = path.resolve(".");
const abalonePcrId =
  "pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-abalone-live-fresh-or-chilled";

test("buildViewer writes viewer data and static assets", () => {
  const outDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-"));
  try {
    const data = buildViewer({ root: repoRoot, outDir });
    const dataPath = path.join(outDir, "data", "pcr-viewer-data.json");

    assert.equal(data.schema_version, 1);
    assert.equal(data.viewer_kind, "tiangong-pcr-static-viewer-data");
    assert.ok(data.pcr_count > 0);
    assert.ok(existsSync(dataPath));
    assert.ok(existsSync(path.join(outDir, "index.html")));
    assert.ok(existsSync(path.join(outDir, "styles.css")));
    assert.ok(existsSync(path.join(outDir, "app.js")));
    assert.ok(existsSync(path.join(outDir, "viewer-core.js")));
    assert.ok(existsSync(path.join(outDir, VIEWER_BUILD_MARKER)));

    const parsed = JSON.parse(readFileSync(dataPath, "utf8"));
    const abalone = parsed.pcrs.find((entry) => entry.id === abalonePcrId);
    const scaffold = parsed.pcrs.find((entry) => entry.content_maturity === "empty_scaffold");

    assert.ok(abalone);
    assert.ok(scaffold);
    assert.equal(scaffold.readiness.status, "unavailable");
    assert.equal(abalone.title["en-US"], "Farmed abalone, live, fresh or chilled");
    assert.equal(abalone.markdown["en-US"].includes("# Farmed abalone"), true);
    assert.equal(abalone.markdown["zh-CN"].includes("# 养殖鲍鱼"), true);
    assert.deepEqual(abalone.guidance, buildGuidance({ root: repoRoot, pcrId: abalonePcrId }));
    assert.equal(abalone.guidance.reference_flow.reference_unit, "kg");
    assert.ok(abalone.guidance.data_sources.length > 0);
    assert.match(abalone.search_text, /abalone/i);
    assert.match(abalone.search_text, /04412/);
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
});

test("buildViewer refuses protected and unowned output directories", () => {
  assert.throws(
    () => buildViewer({ root: repoRoot, outDir: repoRoot }),
    /Refusing to build the PCR viewer into protected path/u,
  );

  const parentDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-unsafe-"));
  const outDir = path.join(parentDir, "existing-output");
  const sentinelPath = path.join(outDir, "keep.txt");
  try {
    mkdirSync(outDir);
    writeFileSync(sentinelPath, "must survive\n");

    assert.throws(
      () => buildViewer({ root: repoRoot, outDir }),
      new RegExp(`without ${VIEWER_BUILD_MARKER}`, "u"),
    );
    assert.equal(readFileSync(sentinelPath, "utf8"), "must survive\n");
  } finally {
    rmSync(parentDir, { recursive: true, force: true });
  }
});

test("buildViewer resolves parent symlinks before checking protected paths", () => {
  const parentDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-symlink-"));
  const repoParentAlias = path.join(parentDir, "repo-parent-alias");
  const packageAlias = path.join(parentDir, "package-alias");
  const repoPathThroughAlias = path.join(repoParentAlias, path.basename(repoRoot));
  const testChildName = `generated-viewer-${path.basename(parentDir)}`;
  const staticChildThroughAlias = path.join(packageAlias, "static", testChildName);
  const staticChild = path.join(repoRoot, "packages", "pcr-viewer", "static", testChildName);

  assert.equal(existsSync(staticChild), false);
  try {
    symlinkSync(path.dirname(repoRoot), repoParentAlias, "dir");
    symlinkSync(path.join(repoRoot, "packages", "pcr-viewer"), packageAlias, "dir");

    assert.throws(
      () => buildViewer({ root: repoRoot, outDir: repoPathThroughAlias }),
      /Refusing to build the PCR viewer into protected path/u,
    );
    assert.throws(
      () => buildViewer({ root: repoRoot, outDir: staticChildThroughAlias }),
      /Refusing to build the PCR viewer inside its static source directory/u,
    );
    assert.equal(existsSync(staticChild), false);
  } finally {
    rmSync(staticChild, { recursive: true, force: true });
    rmSync(parentDir, { recursive: true, force: true });
  }
});

test("buildViewer allows a safe new path through a parent symlink and can replace its marked build", () => {
  const parentDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-repeat-"));
  const realParentDir = path.join(parentDir, "real-parent");
  const parentAlias = path.join(parentDir, "parent-alias");
  const outDir = path.join(parentAlias, "new-output");
  try {
    mkdirSync(realParentDir);
    symlinkSync(realParentDir, parentAlias, "dir");
    buildViewer({ root: repoRoot, outDir });
    writeFileSync(path.join(outDir, "stale-generated-file.txt"), "stale\n");

    buildViewer({ root: repoRoot, outDir });

    assert.equal(existsSync(path.join(outDir, "stale-generated-file.txt")), false);
    assert.equal(existsSync(path.join(outDir, VIEWER_BUILD_MARKER)), true);
  } finally {
    rmSync(parentDir, { recursive: true, force: true });
  }
});

test("buildViewer does not replace an existing build with an empty catalog", () => {
  const parentDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-empty-root-"));
  const emptyRoot = path.join(parentDir, "empty-repository");
  const outDir = path.join(parentDir, "existing-build");
  const sentinelPath = path.join(outDir, "keep.txt");
  try {
    mkdirSync(path.join(emptyRoot, "library/pcrs"), { recursive: true });
    mkdirSync(outDir);
    writeFileSync(path.join(outDir, VIEWER_BUILD_MARKER), "owned viewer build\n");
    writeFileSync(sentinelPath, "last usable output\n");

    assert.throws(
      () => buildViewer({ root: emptyRoot, outDir }),
      /Refusing to replace viewer output with an empty PCR catalog/u,
    );
    assert.equal(readFileSync(sentinelPath, "utf8"), "last usable output\n");
  } finally {
    rmSync(parentDir, { recursive: true, force: true });
  }
});

test("viewer-core filters PCRs and renders safe Markdown", () => {
  const records = [
    {
      id: "pcr.example.wheat",
      path: "library/pcrs/example/wheat",
      status: "candidate",
      content_maturity: "authored_methodology",
      title: { "en-US": "Wheat seed", "zh-CN": "小麦种子" },
      search_text: "pcr.example.wheat wheat seed cpc 01111",
    },
    {
      id: "pcr.example.abalone",
      path: "library/pcrs/example/abalone",
      status: "scaffold",
      content_maturity: "empty_scaffold",
      title: { "en-US": "Farmed abalone" },
      search_text: "pcr.example.abalone farmed abalone cpc 04412",
    },
  ];

  assert.deepEqual(filterPcrs(records, { query: "04412", status: "", maturity: "" }).map((pcr) => pcr.id), [
    "pcr.example.abalone",
  ]);
  assert.deepEqual(filterPcrs(records, { query: "", status: "candidate", maturity: "" }).map((pcr) => pcr.id), [
    "pcr.example.wheat",
  ]);
  assert.deepEqual(
    filterPcrs(records, { query: "seed", status: "candidate", maturity: "authored_methodology" }).map(
      (pcr) => pcr.id,
    ),
    ["pcr.example.wheat"],
  );

  const html = renderMarkdown("# Title\n\n- <unsafe>\n\n| Field | Value |\n| --- | --- |\n| A | B |");
  assert.match(html, /<h1>Title<\/h1>/);
  assert.match(html, /&lt;unsafe&gt;/);
  assert.match(html, /<table>/);
});

test("viewer-core renders deep headings, inline code, and indented lists", () => {
  const html = renderMarkdown(
    [
      "###### 产品流",
      "",
      "####### 繁殖用来源种批 (`source_seed_lot_used_for_multiplication`)",
      "",
      "  - 范围角色：默认估算 (`default_estimate`)",
      "  - 证据类型：采集记录 (`collected_record`)",
      "",
      "普通段落含有 `inline_code` 和 <unsafe>。",
    ].join("\n"),
  );

  assert.match(html, /<h6>产品流<\/h6>/);
  assert.match(
    html,
    /<h6>繁殖用来源种批 \(<code>source_seed_lot_used_for_multiplication<\/code>\)<\/h6>/,
  );
  assert.match(html, /<ul><li>范围角色：默认估算 \(<code>default_estimate<\/code>\)<\/li>/);
  assert.match(html, /<li>证据类型：采集记录 \(<code>collected_record<\/code>\)<\/li><\/ul>/);
  assert.match(html, /<p>普通段落含有 <code>inline_code<\/code> 和 &lt;unsafe&gt;。<\/p>/);
});

test("viewer-core summarizes guidance counts", () => {
  const summary = summarizeGuidance({
    reference_flow: { reference_unit: "kg", required_qualifiers: ["species", "gate"] },
    process_map: [{ id: "growout" }],
    process_inventory: [{ id: "growout" }, { id: "packout" }],
    production_guidance: {
      collection_protocols: [{ protocol_id: "cp_feed" }],
      calculation_rules: [{ id: "normalize" }],
      data_quality_requirements: [{ id: "scope" }],
    },
    data_sources: [{ id: "source-1" }, { id: "source-2" }],
  });

  assert.deepEqual(summary, {
    reference_unit: "kg",
    required_qualifier_count: 2,
    process_count: 1,
    inventory_process_count: 2,
    collection_protocol_count: 1,
    calculation_rule_count: 1,
    data_quality_requirement_count: 1,
    data_source_count: 2,
  });
});

test("viewer-core presents PCR readiness with an explicit status and tone", () => {
  assert.deepEqual(describeReadiness({ status: "ready" }), { status: "ready", tone: "ready" });
  assert.deepEqual(describeReadiness({ status: "review_required" }), {
    status: "review_required",
    tone: "review",
  });
  assert.deepEqual(describeReadiness({ status: "unavailable" }), {
    status: "unavailable",
    tone: "unavailable",
  });
  assert.deepEqual(describeReadiness(), { status: "unknown", tone: "unknown" });
});

test("viewer scripts are safe to import when the process entry path does not exist", () => {
  const buildUrl = pathToFileURL(path.join(repoRoot, "packages/pcr-viewer/scripts/build-viewer-data.mjs")).href;
  const serveUrl = pathToFileURL(path.join(repoRoot, "packages/pcr-viewer/scripts/serve-viewer.mjs")).href;
  const output = execFileSync(process.execPath, ["--input-type=module", "-"], {
    encoding: "utf8",
    input: `await import(${JSON.stringify(buildUrl)});\nawait import(${JSON.stringify(serveUrl)});\nconsole.log("imported");\n`,
  });

  assert.equal(output, "imported\n");
});

test("serveViewer refuses to serve a symlink that escapes the build root", async () => {
  const parentDir = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-serve-root-"));
  const root = path.join(parentDir, "viewer");
  let server;
  try {
    mkdirSync(root);
    writeFileSync(path.join(root, "index.html"), "viewer\n");
    writeFileSync(path.join(parentDir, "secret.txt"), "must not be served\n");
    symlinkSync(path.join(parentDir, "secret.txt"), path.join(root, "leak.txt"));

    server = serveViewer({ root, port: 0 });
    if (!server.listening) {
      await new Promise((resolve) => server.once("listening", resolve));
    }
    const response = await fetch(`http://127.0.0.1:${server.address().port}/leak.txt`);

    assert.equal(response.status, 403);
    assert.equal(await response.text(), "Forbidden");
  } finally {
    if (server?.listening) {
      await new Promise((resolve) => server.close(resolve));
    }
    rmSync(parentDir, { recursive: true, force: true });
  }
});

test("viewer scripts can run from paths containing spaces and non-ASCII characters", async () => {
  const tempRoot = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-viewer-cli-"));
  const fixtureRoot = path.join(tempRoot, "工作 空间");
  const fixtureViewerRoot = path.join(fixtureRoot, "packages", "pcr-viewer");
  const fixtureCoreRoot = path.join(fixtureRoot, "packages", "pcr-core");
  const outDir = path.join(tempRoot, "构建 输出");
  try {
    mkdirSync(fixtureViewerRoot, { recursive: true });
    mkdirSync(fixtureCoreRoot, { recursive: true });
    cpSync(path.join(repoRoot, "packages", "pcr-viewer", "scripts"), path.join(fixtureViewerRoot, "scripts"), {
      recursive: true,
    });
    cpSync(path.join(repoRoot, "packages", "pcr-viewer", "static"), path.join(fixtureViewerRoot, "static"), {
      recursive: true,
    });
    cpSync(path.join(repoRoot, "packages", "pcr-core", "src"), path.join(fixtureCoreRoot, "src"), {
      recursive: true,
    });

    const buildOutput = execFileSync(process.execPath, [
      path.join(fixtureViewerRoot, "scripts", "build-viewer-data.mjs"),
      "--root",
      repoRoot,
      "--out-dir",
      outDir,
    ], {
      cwd: repoRoot,
      encoding: "utf8",
    });

    assert.match(buildOutput, /Built PCR viewer data for \d+ PCR records/);

    const server = spawn(process.execPath, [
      path.join(fixtureViewerRoot, "scripts", "serve-viewer.mjs"),
      "--root",
      outDir,
      "--port",
      "0",
    ], {
      cwd: repoRoot,
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stderr = "";
    server.stderr.on("data", (chunk) => {
      stderr += chunk.toString("utf8");
    });

    try {
      const ready = await readUntil(server, server.stdout, /PCR viewer available at http:\/\/127\.0\.0\.1:\d+/u, {
        getStderr: () => stderr,
      });
      assert.match(ready, /PCR viewer available/);
      const port = ready.match(/http:\/\/127\.0\.0\.1:(\d+)/u)?.[1];
      assert.ok(port);
      const baseUrl = `http://127.0.0.1:${port}`;

      await assertResponse(baseUrl, "/", 200, /^text\/html/u);
      await assertResponse(baseUrl, "/data/pcr-viewer-data.json", 200, /^application\/json/u);
      await assertResponse(baseUrl, "/%2e%2e%2fpackage.json", 403);
      await assertResponse(baseUrl, "/%E0%A4%A", 400);
      await assertResponse(baseUrl, "/", 200, /^text\/html/u);
    } finally {
      server.kill("SIGTERM");
    }
  } finally {
    rmSync(tempRoot, { recursive: true, force: true });
  }
});

async function assertResponse(baseUrl, route, status, contentTypePattern) {
  const response = await fetch(`${baseUrl}${route}`);
  assert.equal(response.status, status);
  if (contentTypePattern) {
    assert.match(response.headers.get("content-type") ?? "", contentTypePattern);
  }
}

function readUntil(child, stream, pattern, { getStderr = () => "", timeoutMs = 3000 } = {}) {
  return new Promise((resolve, reject) => {
    let text = "";
    let settled = false;
    const cleanup = () => {
      clearTimeout(timer);
      child.off("exit", onExit);
      stream.off("data", onData);
      stream.off("error", onError);
    };
    const fail = (error) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      reject(error);
    };
    const timer = setTimeout(() => {
      fail(new Error(`Timed out waiting for ${pattern}.\nstdout:\n${text}\nstderr:\n${getStderr()}`));
    }, timeoutMs);
    const onExit = (code, signal) => {
      fail(
        new Error(
          `Server exited before ready (code ${code ?? "none"}, signal ${signal ?? "none"}).\nstdout:\n${text}\nstderr:\n${getStderr()}`,
        ),
      );
    };
    const onData = (chunk) => {
      text += chunk.toString("utf8");
      if (pattern.test(text)) {
        settled = true;
        cleanup();
        resolve(text);
      }
    };
    const onError = (error) => {
      fail(new Error(`Error reading server output: ${error.message}.\nstdout:\n${text}\nstderr:\n${getStderr()}`));
    };
    child.once("exit", onExit);
    stream.on("data", onData);
    stream.on("error", onError);
  });
}
