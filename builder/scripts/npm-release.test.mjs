import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import { assertBootstrap, assertChannelAdvance, assertIdentity, checkPublished, detectReleases, packages, registryState, releaseContext, releaseSpec, tagAndDispatch } from "./npm-release.mjs";

const identity = { GITHUB_REPOSITORY: "tiangong-lca/pcr", GITHUB_REPOSITORY_ID: "1277836444", GITHUB_REPOSITORY_OWNER_ID: "327771381" };
function fixture(t) {
  const root = mkdtempSync(path.join(tmpdir(), "pcr-release-test-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const git = (...args) => execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  git("init", "-b", "main"); git("config", "user.email", "test@example.invalid"); git("config", "user.name", "PCR Test");
  const set = (kind, version, name = packages[kind].name) => {
    const file = path.join(root, packages[kind].manifest);
    mkdirSync(path.dirname(file), { recursive: true });
    writeFileSync(file, JSON.stringify({ name, version, private: true }));
  };
  const commit = () => { git("add", "."); git("commit", "--no-gpg-sign", "-m", "fixture"); return git("rev-parse", "HEAD"); };
  set("tool", "0.1.0"); set("library", "0.1.0");
  return { root, git, set, commit };
}

test("release tags select independent packages and prerelease channel", () => {
  assert.equal(releaseSpec("pcr-v1.2.3").name, "@tiangong-lca/pcr");
  assert.equal(releaseSpec("library-v4.5.6-rc.1").dist_tag, "next");
  for (const tag of ["v1.0.0", "pcr-v01.0.0", "pcr-v1.0.0-01", "pcr-v1.0.0+build", "pcr-v1.0.0\nINJECT=true", "library-v../main"]) assert.throws(() => releaseSpec(tag));
  assert.doesNotThrow(() => assertIdentity(identity));
  for (const key of Object.keys(identity)) assert.throws(() => assertIdentity({ ...identity, [key]: "wrong" }), /canonical/u);
});

test("version detection ignores content-only changes and releases only the bumped package", (t) => {
  const f = fixture(t); const base = f.commit();
  writeFileSync(path.join(f.root, "content.md"), "content update"); const content = f.commit();
  assert.deepEqual(detectReleases(f.root, base, content), []);
  f.set("library", "0.2.0"); const bumped = f.commit();
  assert.deepEqual(detectReleases(f.root, base, bumped).map((item) => item.tag), ["library-v0.2.0"]);
  f.set("tool", "0.2.0-beta.1"); const both = f.commit();
  assert.equal(detectReleases(f.root, base, both).length, 2);
  f.set("tool", "0.0.9"); const downgrade = f.commit();
  assert.throws(() => detectReleases(f.root, base, downgrade), /must increase/u);
  assert.throws(() => detectReleases(f.root, "0".repeat(40), both), /existing/u);
});

test("initial version sources and legacy package rename do not trigger publication", (t) => {
  const f = fixture(t);
  rmSync(path.join(f.root, packages.library.manifest));
  f.set("tool", "0.0.0", "@tiangong-lca/tiangong-pcr-cli"); const base = f.commit();
  f.set("tool", "0.1.0"); f.set("library", "0.1.0"); const head = f.commit();
  assert.deepEqual(detectReleases(f.root, base, head), []);
});

test("moving both unscoped packages to the organization requires explicit bootstrap", (t) => {
  const f = fixture(t);
  f.set("tool", "0.1.1", "tiangong-pcr");
  f.set("library", "0.1.1", "tiangong-pcr-library");
  const base = f.commit();
  f.set("tool", "0.1.2"); f.set("library", "0.1.2");
  const scoped = f.commit();
  assert.deepEqual(detectReleases(f.root, base, scoped), []);
  f.set("library", "0.1.3");
  assert.deepEqual(detectReleases(f.root, scoped, f.commit()).map(({ name, tag }) => ({ name, tag })),
    [{ name: "@tiangong-lca/pcr-library", tag: "library-v0.1.3" }]);
});

test("scoped registry lookups encode the complete package name", async () => {
  for (const tag of ["pcr-v0.1.2", "library-v0.1.2"]) {
    const spec = releaseSpec(tag); const urls = [];
    const fetcher = async (url) => { urls.push(url); return { status: 404 }; };
    assert.equal(await registryState(spec, fetcher), "missing");
    await assertBootstrap(tag, { ...identity, GITHUB_EVENT_NAME: "workflow_dispatch", GITHUB_REF: `refs/tags/${tag}` }, fetcher);
    await assertChannelAdvance(tag, fetcher);
    const name = spec.kind === "tool" ? "%40tiangong-lca%2Fpcr" : "%40tiangong-lca%2Fpcr-library";
    assert.deepEqual(urls, [`https://registry.npmjs.org/${name}/0.1.2`, `https://registry.npmjs.org/${name}`, `https://registry.npmjs.org/${name}/latest`]);
  }
});

test("release context binds event, workflow, checkout, tag version and main ancestry", (t) => {
  const f = fixture(t); const head = f.commit();
  f.git("update-ref", "refs/remotes/origin/main", head); f.git("tag", "pcr-v0.1.0");
  const env = { ...identity, GITHUB_EVENT_NAME: "workflow_dispatch", GITHUB_REF: "refs/tags/pcr-v0.1.0", GITHUB_SHA: head, GITHUB_WORKFLOW_SHA: head };
  assert.equal(releaseContext(f.root, "pcr-v0.1.0", env).source_commit, head);
  for (const key of ["GITHUB_REF", "GITHUB_SHA", "GITHUB_WORKFLOW_SHA", "GITHUB_EVENT_NAME"]) assert.throws(() => releaseContext(f.root, "pcr-v0.1.0", { ...env, [key]: "wrong" }));
  f.git("tag", "pcr-v0.2.0");
  assert.throws(() => releaseContext(f.root, "pcr-v0.2.0", { ...env, GITHUB_REF: "refs/tags/pcr-v0.2.0" }), /version/u);
  f.set("tool", "0.2.0"); const branchHead = f.commit(); f.git("tag", "pcr-v0.2.1");
  assert.throws(() => releaseContext(f.root, "pcr-v0.1.0", env), /SHAs/u);
  assert.throws(() => releaseContext(f.root, "pcr-v0.2.1", { ...env, GITHUB_REF: "refs/tags/pcr-v0.2.1", GITHUB_SHA: branchHead, GITHUB_WORKFLOW_SHA: branchHead }));
});

test("registry retry requires exact package integrity and source; only 404 means unpublished", async () => {
  const receipt = { ...releaseSpec("pcr-v0.1.0"), integrity: "sha512-example", source_commit: "a".repeat(40) };
  const metadata = { name: receipt.name, version: receipt.version, dist: { integrity: receipt.integrity }, gitHead: receipt.source_commit };
  assert.doesNotThrow(() => checkPublished(metadata, receipt));
  for (const key of ["name", "version", "gitHead", "dist"]) assert.throws(() => checkPublished({ ...metadata, [key]: "wrong" }, receipt));
  assert.equal(await registryState(receipt, async () => ({ status: 404 })), "missing");
  assert.equal(await registryState(receipt, async () => ({ status: 200, ok: true, json: async () => metadata })), "identical");
  for (const status of [401, 403, 429, 500]) await assert.rejects(registryState(receipt, async () => ({ status, ok: false })), /registry check failed/u);
});

test("tag retry dispatches an identical immutable tag and refuses conflicts or uncertain reads", async () => {
  const spec = releaseSpec("library-v0.1.0"); const head = "b".repeat(40);
  for (const exists of [true, false]) {
    const calls = [];
    await tagAndDispatch(spec, head, async (endpoint, method, body) => {
      calls.push({ endpoint, method, body });
      if (method === "GET") return exists ? { status: 200, body: { object: { type: "commit", sha: head } } } : { status: 404 };
      return { status: endpoint.endsWith("dispatches") ? 204 : 201 };
    });
    assert.equal(calls.length, exists ? 2 : 3);
    assert.equal(calls[0].endpoint, `/repos/tiangong-lca/pcr/git/ref/tags/${spec.tag}`);
    assert.deepEqual(calls.at(-1).body, { ref: spec.tag, inputs: { tag_name: spec.tag } });
  }
  for (const response of [{ status: 403 }, { status: 500 }, { status: 200, body: { object: { type: "commit", sha: "wrong" } } }]) {
    let writes = 0;
    await assert.rejects(tagAndDispatch(spec, head, async (_endpoint, method) => { if (method !== "GET") writes++; return response; }));
    assert.equal(writes, 0);
  }
  await assert.rejects(tagAndDispatch(spec, head, async (endpoint) => endpoint.endsWith("dispatches") ? { status: 503 } : { status: 200, body: { object: { type: "commit", sha: head } } }), /retry/u);
});

test("bootstrap requires explicit tag dispatch and an unregistered name, never a registry error", async () => {
  const env = { ...identity, GITHUB_EVENT_NAME: "workflow_dispatch", GITHUB_REF: "refs/tags/pcr-v0.1.0" };
  await assertBootstrap("pcr-v0.1.0", env, async () => ({ status: 404 }));
  for (const status of [200, 401, 403, 429, 500]) await assert.rejects(assertBootstrap("pcr-v0.1.0", env, async () => ({ status })), /unregistered/u);
  await assert.rejects(assertBootstrap("pcr-v0.1.0", { ...env, GITHUB_EVENT_NAME: "push" }), /explicit/u);
});

test("delayed publication cannot move latest or next backwards", async () => {
  const fetchVersion = (version) => async () => ({ status: 200, ok: true, json: async () => ({ name: "@tiangong-lca/pcr", version }) });
  await assertChannelAdvance("pcr-v0.2.0", fetchVersion("0.1.0"));
  await assertChannelAdvance("pcr-v0.1.0", async () => ({ status: 404 }));
  for (const version of ["0.2.0", "0.3.0"]) await assert.rejects(assertChannelAdvance("pcr-v0.2.0", fetchVersion(version)), /backwards/u);
  await assert.rejects(assertChannelAdvance("pcr-v0.2.0-rc.1", fetchVersion("0.2.0-rc.2")), /backwards/u);
  await assert.rejects(assertChannelAdvance("pcr-v0.2.0", async () => ({ status: 500 })), /channel/u);
});
