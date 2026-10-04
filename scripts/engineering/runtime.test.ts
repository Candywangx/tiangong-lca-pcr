import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { readToolchainPins, verifyRuntime } from "./runtime.ts";

test("nvm and product pins agree exactly, rejecting drift and floating major aliases", (t) => {
  const root = mkdtempSync(path.join(os.tmpdir(), "pcr-toolchain-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  writeFileSync(path.join(root, "product-release.json"), JSON.stringify({ node: "24.19.0", npm: "12.2.0" }));
  writeFileSync(path.join(root, ".nvmrc"), "24.19.0\n");
  assert.deepEqual(readToolchainPins(root), { node: "24.19.0", npm: "12.2.0" });
  writeFileSync(path.join(root, ".nvmrc"), "24.20.0\n");
  assert.throws(() => readToolchainPins(root), /PCR_TOOLCHAIN_PIN_MISMATCH/u);
  writeFileSync(path.join(root, ".nvmrc"), "24\n");
  assert.throws(() => readToolchainPins(root), /PCR_NODE_PIN_INVALID/u);
});

test("development uses exact Node while release additionally verifies npm", () => {
  const pins = { node: "24.19.0", npm: "12.2.0" };
  const runtime = { node: "24.19.0", npm: "11.17.0", platform: "linux", arch: "x64" };
  assert.doesNotThrow(() => verifyRuntime(pins, runtime));
  assert.throws(() => verifyRuntime(pins, runtime, true), /PCR_NPM_VERSION_MISMATCH/u);
  assert.doesNotThrow(() => verifyRuntime(pins, { ...runtime, npm: "12.2.0" }, true));
  assert.throws(() => verifyRuntime(pins, { ...runtime, node: "25.0.0" }), /PCR_NODE_VERSION_MISMATCH/u);
});

test("platform policy retains both Linux architectures and Windows x64 but rejects macOS Intel", () => {
  const pins = { node: "24.19.0", npm: "12.2.0" };
  for (const [platform, arch] of [["linux", "x64"], ["linux", "arm64"], ["darwin", "arm64"], ["win32", "x64"]] as const) {
    assert.doesNotThrow(() => verifyRuntime(pins, { node: pins.node, platform, arch }));
  }
  for (const [platform, arch] of [["darwin", "x64"], ["win32", "arm64"], ["aix", "ppc64"]] as const) {
    assert.throws(() => verifyRuntime(pins, { node: pins.node, platform, arch }), /PCR_PLATFORM_UNSUPPORTED/u);
  }
});

test("runtime CLI validates the invoking release npm and emits failures on stderr", (t) => {
  const root = mkdtempSync(path.join(os.tmpdir(), "pcr-runtime-cli-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  writeFileSync(path.join(root, ".nvmrc"), `${process.versions.node}\n`);
  writeFileSync(path.join(root, "product-release.json"), JSON.stringify({ node: process.versions.node, npm: "12.2.0" }));
  const extension = import.meta.url.endsWith(".ts") ? "ts" : "js";
  const entry = fileURLToPath(new URL(`./runtime.${extension}`, import.meta.url));
  const run = (args: string[], npm: string, expectedArchitecture = process.arch) => spawnSync(process.execPath, [entry, ...args], {
    cwd: root, encoding: "utf8", env: { ...process.env, npm_config_user_agent: `npm/${npm} node/${process.versions.node}`, PCR_EXPECTED_ARCH: expectedArchitecture },
  });
  const development = run([], "11.17.0");
  assert.equal(development.status, 0, development.stderr);
  assert.equal(JSON.parse(development.stdout).npmChecked, false);
  const release = run(["--release"], "12.2.0");
  assert.equal(release.status, 0, release.stderr);
  assert.equal(JSON.parse(release.stdout).npmChecked, true);
  const mismatch = run(["--release"], "11.17.0");
  assert.equal(mismatch.status, 1);
  assert.equal(mismatch.stdout, "");
  assert.match(mismatch.stderr, /PCR_NPM_VERSION_MISMATCH/u);
  const wrongArchitecture = run(["--release"], "12.2.0", process.arch === "arm64" ? "x64" : "arm64");
  assert.equal(wrongArchitecture.status, 1); assert.equal(wrongArchitecture.stdout, "");
  assert.match(wrongArchitecture.stderr, /PCR_RUNNER_ARCH_MISMATCH/u);
  const usage = run(["--unknown"], "12.2.0");
  assert.equal(usage.status, 1);
  assert.equal(usage.stdout, "");
  assert.match(usage.stderr, /Usage:/u);
});
