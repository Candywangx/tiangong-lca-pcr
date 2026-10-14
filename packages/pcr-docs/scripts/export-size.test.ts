import test from "node:test";
import assert from "node:assert/strict";
import { summarizeExportFiles } from "./export-size.ts";
import { inlineManifestUrl, decodeInlineManifestUrl } from "./raw-download.ts";

test("bounded candidate manifest downloads preserve exact bytes and physical release artifacts", () => {
  const source = "library/pcrs/domain/category/product/manifest.yaml";
  const bytes = Buffer.from("\ufeffstatus: candidate\r\ncontent_maturity: authored_methodology\r\ntitle: 测试\r\n");
  const url = inlineManifestUrl(source, bytes, false);
  assert.ok(url);
  assert.deepEqual(decodeInlineManifestUrl(url), bytes);
  const exact = Buffer.concat([bytes, Buffer.alloc(8192 - bytes.length, 32)]);
  assert.ok(inlineManifestUrl(source, exact, false));
  for (const [file, content, history] of [
    [source, Buffer.concat([exact, Buffer.from(" ")]), false],
    [source, bytes, true],
    [source.replace("manifest.yaml", "structured.yaml"), bytes, false],
    [source.replace("manifest.yaml", "releases/1.0.0/manifest.snapshot.yaml"), bytes, false],
    [source.replace("manifest.yaml", "revision/manifest.next.yaml"), bytes, false],
    [source.replace("pcrs", "modules"), bytes, false],
    [source, Buffer.from("status: active\ncontent_maturity: reviewed_methodology\n"), false],
    [source, Buffer.from("status: deprecated\ncontent_maturity: deprecated_methodology\n"), false],
    [source, Buffer.from("status: candidate\ncontent_maturity: empty_scaffold\n"), false],
  ] as const) assert.equal(inlineManifestUrl(file, content, history), undefined);
  assert.equal(decodeInlineManifestUrl("/generated/raw/manifest.yaml"), undefined);
  for (const malformed of ["data:text/html;base64,PGgxPng8L2gxPg==", "data:application/octet-stream;base64,!!!!", "data:application/octet-stream;base64,YQ", "data:application/octet-stream;base64," + Buffer.alloc(8193).toString("base64")]) {
    assert.throws(() => decodeInlineManifestUrl(malformed), /inline manifest/iu);
  }
});

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
