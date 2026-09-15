import test from "node:test";
import assert from "node:assert/strict";
import { routeFor, publicLanguage } from "./language-policy.mjs";
test("canonical languages and regional/variant optional languages have distinct routes", () => {
  const codes = [
    "en-US",
    "zh-CN",
    "en",
    "zh",
    "en-GB",
    "zh-TW",
    "de-1996",
    "es-419",
  ];
  assert.equal(new Set(codes.map(routeFor)).size, codes.length);
  assert.equal(routeFor("en-US"), "en");
  assert.equal(routeFor("zh-CN"), "zh");
  assert.throws(() => routeFor("en-us"));
  assert.throws(() => routeFor("../de-DE"));
});
test("required pending Chinese remains readable; stale optional language is unavailable", () => {
  const manifest = {
    translation_status: {
      "zh-CN": "scaffold_pending_translation",
      "de-DE": "out_of_sync",
      "fr-FR": "aligned",
    },
  };
  assert.equal(publicLanguage(manifest, "zh-CN"), true);
  assert.equal(publicLanguage(manifest, "de-DE"), false);
  assert.equal(publicLanguage(manifest, "fr-FR"), true);
  assert.equal(publicLanguage(manifest, "ja-JP"), false);
});
