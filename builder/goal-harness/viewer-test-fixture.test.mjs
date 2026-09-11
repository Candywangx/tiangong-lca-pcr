import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import * as fixtures from "./viewer-test-fixture.mjs";

test("real publisher fixture has exactly one PCR and no full-library clone", t => {
  assert.equal(typeof fixtures.createPublisherFixture, "function");
  const parent = mkdtempSync(path.join(tmpdir(), "goal-publisher-fixture-test-"));
  t.after(() => rmSync(parent, { recursive: true, force: true }));
  const root = path.join(parent, "repo");
  fixtures.createPublisherFixture({ root, source: path.resolve(import.meta.dirname, "../..") });
  const tracked = execFileSync("git", ["ls-files"], { cwd: root, encoding: "utf8" }).trim().split("\n");
  assert.equal(tracked.filter(f => f.startsWith("library/pcrs/") && f.endsWith("manifest.yaml")).length, 1);
  assert.equal(tracked.filter(f => f.startsWith("library/pcrs/")).length, 4);
  assert.ok(tracked.length < 150);
  assert.equal(execFileSync("git", ["status", "--porcelain"], { cwd: root, encoding: "utf8" }), "");
});
