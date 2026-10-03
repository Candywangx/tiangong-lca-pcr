import test from "node:test";
import assert from "node:assert/strict";
import { summarizeExportFiles } from "./export-size.ts";

test("export accounting separates navigation, documents and shared artifacts", () => {
  const report = summarizeExportFiles([
    { path: "en/docs/pcr/index.html", bytes: 30 },
    { path: "en/docs/pcr/index.txt", bytes: 20 },
    { path: "en/docs/pcr/__next._full.txt", bytes: 20 },
    { path: "en/docs/pcr/__next._tree.txt", bytes: 2 },
    { path: "generated/raw/library/pcrs/a/pcr.en-US.md", bytes: 10 },
    { path: "generated/data/a.json", bytes: 8 },
    { path: "generated\\search\\en-US\\shard-000.json", bytes: 5 },
    { path: "_next/static/chunks/a.js", bytes: 4 },
    { path: "_next/static/chunks/a.css", bytes: 3 },
    { path: "_next/static/media/font.woff2", bytes: 7 },
    { path: "_next/static/media/icon.svg", bytes: 1 },
    { path: "robots.txt", bytes: 1 },
  ]);
  assert.equal(report.files, 12);
  assert.equal(report.bytes, 111);
  assert.deepEqual(report.maxFile, { path: "en/docs/pcr/index.html", bytes: 30 });
  assert.deepEqual(report.categories, {
    rscText: { files: 3, bytes: 42 },
    html: { files: 1, bytes: 30 },
    rawDownloads: { files: 1, bytes: 10 },
    recordJson: { files: 1, bytes: 8 },
    search: { files: 1, bytes: 5 },
    jsCss: { files: 2, bytes: 7 },
    other: { files: 3, bytes: 9 },
  });
  assert.equal(Object.values(report.categories).reduce((n, category) => n + category.bytes, 0), report.bytes);
});

test("accounting reports growth above 1.5 GB without inventing an aggregate cap", () => {
  const files = Array.from({ length: 64 }, (_, index) => ({
    path: `generated/data/${index}.json`, bytes: 24_000_000,
  }));
  const report = summarizeExportFiles(files);
  assert.equal(report.bytes, 1_536_000_000);
  assert.deepEqual(report.categories.recordJson, { files: 64, bytes: 1_536_000_000 });
  assert.equal(report.maxFile!.bytes, 24_000_000);
});
