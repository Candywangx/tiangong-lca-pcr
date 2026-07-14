import assert from "node:assert/strict";
import {
  mkdirSync,
  mkdtempSync,
  rmSync,
  symlinkSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { init } from "./builder-operations.mjs";
import { lint } from "./lint-rules.mjs";

function fixture(t) {
  const root = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-lint-path-"));
  const outside = mkdtempSync(path.join(tmpdir(), "tiangong-pcr-lint-outside-"));
  t.after(() => {
    rmSync(root, { recursive: true, force: true });
    rmSync(outside, { recursive: true, force: true });
  });
  init({ root });
  return { root, outside };
}

test("lint does not follow a symlinked catalog contract file", (t) => {
  const { root, outside } = fixture(t);
  const catalogPath = path.join(root, "library/catalog.yaml");
  const outsidePath = path.join(outside, "catalog.yaml");
  unlinkSync(catalogPath);
  writeFileSync(outsidePath, "OUTSIDE_CATALOG_SECRET: one\n");
  symlinkSync(outsidePath, catalogPath);

  const failure = () => {
    try {
      lint({ root });
      assert.fail("lint unexpectedly accepted a symlinked catalog");
    } catch (error) {
      return error.message;
    }
  };
  const first = failure();
  writeFileSync(outsidePath, "OUTSIDE_CATALOG_SECRET: two different bytes\n");
  const second = failure();

  assert.equal(second, first);
  assert.match(first, /library\/catalog\.yaml: managed input must be a canonical regular file/u);
  assert.doesNotMatch(first, /OUTSIDE_CATALOG_SECRET/u);
});

test("lint does not follow a symlinked classification mapping", (t) => {
  const { root, outside } = fixture(t);
  const mappingPath = path.join(root, "classifications/mappings/cpc-3.0-to-pcr.yaml");
  const outsidePath = path.join(outside, "mapping.yaml");
  mkdirSync(path.dirname(mappingPath), { recursive: true });
  writeFileSync(outsidePath, "OUTSIDE_MAPPING_SECRET: one\n");
  symlinkSync(outsidePath, mappingPath);

  assert.throws(
    () => lint({ root }),
    (error) => {
      assert.match(
        error.message,
        /classifications\/mappings\/cpc-3\.0-to-pcr\.yaml: managed input must be a canonical regular file/u,
      );
      assert.doesNotMatch(error.message, /OUTSIDE_MAPPING_SECRET/u);
      return true;
    },
  );
});
