import assert from "node:assert/strict";
import test from "node:test";

import {
  compareSemver,
  isValidSemver,
  isValidUtcTimestamp,
} from "./lifecycle-policy.mjs";

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

test("SemVer validation rejects leading-zero and empty identifiers", () => {
  for (const value of ["01.0.0", "1.0.0-01", "1.0.0-alpha..1", "1.0.0+"]) {
    assert.equal(isValidSemver(value), false, value);
  }
  assert.equal(isValidSemver("1.0.0-alpha.1+build.7"), true);
});

test("UTC timestamp validation rejects normalized calendar dates and loose ISO forms", () => {
  for (const value of [
    "2026-02-31T00:00:00Z",
    "2025-02-29T00:00:00Z",
    "2026-01-01T24:00:00Z",
    "2026-01-01T00:00Z",
    "2026-01-01T00:00:00+00:00",
  ]) {
    assert.equal(isValidUtcTimestamp(value), false, value);
  }
  assert.equal(isValidUtcTimestamp("2024-02-29T23:59:59.123Z"), true);
});
