import assert from "node:assert/strict";
import test from "node:test";

import { compareSemver } from "./lifecycle-policy.mjs";

test("compareSemver implements SemVer precedence including prerelease identifiers", () => {
  const ascending = [
    "1.0.0-alpha",
    "1.0.0-alpha.1",
    "1.0.0-alpha.beta",
    "1.0.0-beta",
    "1.0.0-beta.2",
    "1.0.0-beta.11",
    "1.0.0-rc.1",
    "1.0.0",
    "1.0.1",
    "1.1.0",
    "2.0.0",
  ];

  for (let index = 1; index < ascending.length; index += 1) {
    assert.equal(compareSemver(ascending[index - 1], ascending[index]), -1);
    assert.equal(compareSemver(ascending[index], ascending[index - 1]), 1);
  }
});

test("compareSemver ignores build metadata and compares large numeric identifiers exactly", () => {
  assert.equal(compareSemver("1.0.0+build.1", "1.0.0+build.999"), 0);
  assert.equal(
    compareSemver("999999999999999999999999.0.0", "1000000000000000000000000.0.0"),
    -1,
  );
  assert.equal(
    compareSemver("1.0.0-alpha.999999999999999999999999", "1.0.0-alpha.1000000000000000000000000"),
    -1,
  );
});

test("compareSemver rejects malformed versions", () => {
  assert.throws(() => compareSemver("1.0", "1.0.0"), /invalid semver value "1\.0"/u);
  assert.throws(() => compareSemver("1.0.0", "1.0.0-01"), /invalid semver value "1\.0\.0-01"/u);
});
