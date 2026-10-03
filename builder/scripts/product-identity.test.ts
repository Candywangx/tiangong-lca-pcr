import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, realpathSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test, { type TestContext } from "node:test";
import { PRODUCT_MIRRORS, assertProductIdentity, readProductIdentity, readProductVersion } from "./product-identity.ts";

function fixture(t: TestContext) {
  const root = realpathSync(mkdtempSync(path.join(tmpdir(), "pcr-product-identity-")));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const git = (...args: string[]) => execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  git("init", "-b", "main"); git("config", "user.email", "test@example.invalid"); git("config", "user.name", "PCR Test");
  const write = (relative: string, value: string | Uint8Array) => { mkdirSync(path.dirname(path.join(root, relative)), { recursive: true }); writeFileSync(path.join(root, relative), value); };
  write("product-release.json", JSON.stringify({ schema: 1, version: "0.3.0", node: "24.19.0", npm: "12.2.0", web: { origin: "https://pcr.tiangong.earth", site: "global" } }));
  for (const [relative, name] of PRODUCT_MIRRORS) write(relative, JSON.stringify({ name, private: true, version: "0.3.0" }));
  write("library/pcrs/a/pcr.en-US.md", "English method\n"); write("library/pcrs/a/pcr.zh-CN.md", "中文方法\n");
  write("classifications/mapping.yaml", "mappings: []\n");
  const commit = () => { git("add", "."); git("commit", "--no-gpg-sign", "-qm", "fixture"); return git("rev-parse", "HEAD"); };
  commit();
  return { root, git, write, commit };
}

test("one version source verifies all private package mirrors and ignores root package version", t => {
  const f = fixture(t);
  f.write("package.json", JSON.stringify({ private: true, version: "0.0.0" })); f.commit();
  assert.equal(readProductVersion(f.root).version, "0.3.0");
  const first = readProductIdentity(f.root);
  assert.deepEqual(readProductIdentity(f.root), first);
  assert.equal(first.tag, "v0.3.0"); assert.equal(first.sourceCommit, f.git("rev-parse", "HEAD"));
  for (const [relative] of PRODUCT_MIRRORS) {
    const original = readFileSync(path.join(f.root, relative));
    f.write(relative, JSON.stringify({ ...JSON.parse(original.toString("utf8")), version: "0.4.0" }));
    assert.throws(() => readProductVersion(f.root), /mirror differs/u);
    f.write(relative, original);
  }
});

test("common raw-content fingerprint changes for either language and classification, not unrelated runtime code", t => {
  const f = fixture(t), first = readProductIdentity(f.root);
  f.write("runtime.mjs", "export const runtime = 1;\n"); f.commit();
  const code = readProductIdentity(f.root);
  assert.equal(code.sourceFingerprint, first.sourceFingerprint); assert.notEqual(code.sourceCommit, first.sourceCommit);
  for (const relative of ["library/pcrs/a/pcr.en-US.md", "library/pcrs/a/pcr.zh-CN.md", "classifications/mapping.yaml"]) {
    const prior = readProductIdentity(f.root);
    f.write(relative, `${readFileSync(path.join(f.root, relative), "utf8")}changed bytes\r\n`); f.commit();
    assert.notEqual(readProductIdentity(f.root).sourceFingerprint, prior.sourceFingerprint, relative);
  }
});

test("dirty development identity is explicit; production cannot bind dirty bytes to a qualified commit", t => {
  const f = fixture(t), first = readProductIdentity(f.root);
  f.write("library/pcrs/a/pcr.zh-CN.md", "uncommitted Chinese update\n");
  assert.throws(() => readProductIdentity(f.root), /clean source/u);
  const draft = readProductIdentity(f.root, { requireClean: false });
  assert.equal(draft.sourceCommit, first.sourceCommit); assert.notEqual(draft.sourceFingerprint, first.sourceFingerprint);
});

test("product pins and identity fail closed without changing legacy tag grammar", t => {
  const f = fixture(t), original = JSON.parse(readFileSync(path.join(f.root, "product-release.json"), "utf8"));
  for (const changed of [{ node: "24" }, { npm: "11.17.0-beta.1" }, { version: "0.3.0-rc.1" }, { version: "0.3.0+build" }, { web: { origin: "https://other.test", site: "global" } }]) {
    f.write("product-release.json", JSON.stringify({ ...original, ...changed }));
    assert.throws(() => readProductVersion(f.root));
  }
  const identity = { schema: 1, version: "0.3.0", tag: "v0.3.0", sourceCommit: "a".repeat(40), sourceFingerprint: `sha256:${"b".repeat(64)}` };
  assert.doesNotThrow(() => assertProductIdentity(identity));
  for (const changed of [{ sourceCommit: "wrong" }, { sourceFingerprint: "wrong" }, { tag: "pcr-v0.3.0" }, { extra: true }]) assert.throws(() => assertProductIdentity({ ...identity, ...changed }));
});

test("tracked content symlinks cannot masquerade as source bytes", { skip: process.platform === "win32" }, t => {
  const f = fixture(t);
  symlinkSync("pcr.en-US.md", path.join(f.root, "library/pcrs/a/link.md")); f.commit();
  assert.throws(() => readProductIdentity(f.root), /regular tracked files/u);
});
