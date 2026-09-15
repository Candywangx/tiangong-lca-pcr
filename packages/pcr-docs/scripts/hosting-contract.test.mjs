import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { matchesPath, verifyHostingContract } from "./hosting-contract.mjs";
const config = JSON.parse(
  fs.readFileSync(new URL("../../../edgeone.json", import.meta.url), "utf8"),
);
const downloads = [
  { url: "/generated/raw/library/pcrs/domain/category/item/pcr.zh-CN.md" },
  {
    url: "/generated/raw/library/pcrs/a/b/c/releases/1.0.0/manifest.snapshot.yaml",
  },
];
test("production headers cover nested raw sources and executable Worker modules", () => {
  assert.equal(
    matchesPath("/generated/*.mjs", "/generated/search-worker.mjs"),
    true,
  );
  assert.equal(matchesPath("/generated/raw/*", downloads[1].url), true);
  assert.doesNotThrow(() => verifyHostingContract(config, downloads));
});
test("moved download rules, missing module MIME and redirect drift fail the gate", () => {
  for (const mutation of ["raw", "mime", "redirect", "output"]) {
    const broken = structuredClone(config);
    if (mutation === "raw") broken.headers[0].source = "/downloads/*";
    if (mutation === "mime")
      broken.headers[1].headers = broken.headers[1].headers.filter(
        (header) => header.key !== "Content-Type",
      );
    if (mutation === "redirect") broken.redirects = [];
    if (mutation === "output") broken.outputDirectory = "out";
    assert.throws(
      () => verifyHostingContract(broken, downloads),
      undefined,
      mutation,
    );
  }
});
