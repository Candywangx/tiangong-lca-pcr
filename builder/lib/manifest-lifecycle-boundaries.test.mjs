import assert from "node:assert/strict";
import {
  mkdirSync,
  mkdtempSync,
  readFileSync,
  readdirSync,
  realpathSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { init } from "./builder-operations.mjs";
import { bump, lifecycle, syncStructured } from "./manifest-lifecycle.mjs";

const relativePcr = "library/pcrs/domain/subdomain/example";

function createFixture(t) {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-lifecycle-boundary-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  init({ root, "sample-pcr": "domain/subdomain/example" });
  return {
    root,
    pcrDir: path.join(root, relativePcr),
    manifestPath: path.join(root, relativePcr, "manifest.yaml"),
  };
}

test("bump refuses malformed managed release state before changing the manifest", (t) => {
  const fixture = createFixture(t);
  const before = readFileSync(fixture.manifestPath);
  mkdirSync(path.join(fixture.pcrDir, "releases"));
  writeFileSync(
    path.join(fixture.pcrDir, "release-history.yaml"),
    "schema_version: 1\npcr_id: wrong\ncurrent_version: nope\nreleases:\n  []\n",
  );

  assert.throws(
    () => bump({ root: fixture.root, pcr: relativePcr, level: "patch" }),
    /PCR bump managed-state preflight failed/u,
  );
  assert.deepEqual(readFileSync(fixture.manifestPath), before);
});

test("init rejects a traversal-shaped sample PCR path before scaffold mutation", (t) => {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-init-boundary-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));

  assert.throws(
    () => init({ root, "sample-pcr": "../outside/example" }),
    /must be a safe <domain>\/<subdomain>\/<pcr-slug> path/u,
  );
  assert.deepEqual(readdirSync(root), []);
});

test("lifecycle translation rejects undeclared and canonical languages without mutation", (t) => {
  const fixture = createFixture(t);
  const before = readFileSync(fixture.manifestPath);

  assert.throws(
    () => lifecycle({ root: fixture.root, pcr: relativePcr, translation: "fr-FR=aligned" }),
    /fr-FR is not declared in manifest\.languages\.available/u,
  );
  assert.throws(
    () => lifecycle({ root: fixture.root, pcr: relativePcr, translation: "en-US=reviewed" }),
    /cannot target canonical language en-US/u,
  );
  assert.deepEqual(readFileSync(fixture.manifestPath), before);
});

test("sync accepts an existing PCR expressed through the filesystem realpath alias", (t) => {
  const fixture = createFixture(t);
  const realRoot = realpathSync(fixture.root);
  if (realRoot === fixture.root) {
    t.skip("temporary directory has no distinct lexical/realpath alias on this filesystem");
    return;
  }

  const messages = syncStructured({
    root: fixture.root,
    pcr: realpathSync(fixture.pcrDir),
  });

  assert.match(messages.join("\n"), /Synced structured PCR/u);
});

test("sync refuses malformed UTF-8 in any managed leaf input without replacing current files", (t) => {
  const fixture = createFixture(t);
  const chinesePath = path.join(fixture.pcrDir, "pcr.zh-CN.md");
  const structuredPath = path.join(fixture.pcrDir, "structured.yaml");
  const malformedChinese = Buffer.from([0xff, 0xfe]);
  const beforeStructured = readFileSync(structuredPath);
  writeFileSync(chinesePath, malformedChinese);

  assert.throws(
    () => syncStructured({ root: fixture.root, pcr: relativePcr }),
    /managed-input validation failed/u,
  );
  assert.deepEqual(readFileSync(chinesePath), malformedChinese);
  assert.deepEqual(readFileSync(structuredPath), beforeStructured);
});
