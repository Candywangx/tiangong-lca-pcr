import assert from "node:assert/strict";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { loadVocabularyRegistry, VocabularyRegistryError } from "./vocabulary-registry.ts";

function withVocabularyDirectory(files: Record<string, string>, callback: (directory: string) => void): void {
  const directory = mkdtempSync(path.join(os.tmpdir(), "pcr-vocab-contract-"));
  try {
    for (const [fileName, content] of Object.entries(files)) {
      writeFileSync(path.join(directory, fileName), content);
    }
    callback(directory);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
}

test("registry aggregates duplicate audits and strict parse errors without returning a partial registry", () => {
  withVocabularyDirectory({
    "duplicate.yaml": [
      "schema_version: 1", "vocab: duplicate", "values:",
      "  repeated:", "    description: First definition.",
      "  repeated:", "    description: Second definition.",
    ].join("\n"),
    "malformed.yaml": "schema_version: 1\nvocab: malformed\nvalues: [\n",
    "valid.yaml": "schema_version: 1\nvocab: valid\nvalues:\n  one:\n    description: One.\n",
  }, (directory) => {
    assert.throws(() => loadVocabularyRegistry({ directory }), (error: unknown) => {
      assert.ok(error instanceof VocabularyRegistryError);
      assert.equal(error.directory, directory);
      assert.ok(Object.isFrozen(error.problems));
      assert.equal(error.problems.length, 2);
      assert.equal(error.problems[0], "duplicate.yaml: line 6 repeats mapping key values.repeated");
      assert.match(error.problems[1] ?? "", /^malformed\.yaml: YAML_BAD_INDENT:.*\(4:1\)$/u);
      return true;
    });
  });
});

test("strict parser catches duplicate spellings not recognized by the richer source audit", () => {
  withVocabularyDirectory({
    "quoted.yaml": [
      "schema_version: 1", "vocab: quoted", "values:",
      "  repeated:", "    description: First definition.",
      "  'repeated':", "    description: Second definition.",
    ].join("\n"),
  }, (directory) => {
    assert.throws(() => loadVocabularyRegistry({ directory }), (error: unknown) => {
      assert.ok(error instanceof VocabularyRegistryError);
      assert.match(error.message, /quoted\.yaml: YAML_DUPLICATE_KEY:.*\(6:3\)/u);
      return true;
    });
  });
});

test("prototype names never act as inherited registry entries", () => {
  withVocabularyDirectory({
    "constructor.yaml": [
      "schema_version: 1", "vocab: constructor", "values:",
      "  constructor:", "    description: A legitimate constructor token.",
      "    details:", "      labels: [first, second]",
    ].join("\n"),
  }, (directory) => {
    const registry = loadVocabularyRegistry({ directory });
    assert.deepEqual(registry.ids, ["constructor"]);
    assert.deepEqual(registry.values("constructor"), ["constructor"]);
    assert.equal(registry.sourceFile("constructor"), "constructor.yaml");
    const token: string = "constructor";
    const definition = registry.get("constructor").values[token];
    assert.equal(definition?.description, "A legitimate constructor token.");
    assert.ok(Object.isFrozen(registry));
    assert.ok(Object.isFrozen(registry.ids));
    assert.ok(Object.isFrozen(registry.get("constructor")));
    assert.ok(Object.isFrozen(registry.get("constructor").values));
    assert.ok(Object.isFrozen(definition));
    const details = definition?.details;
    assert.deepEqual(details, { labels: ["first", "second"] });
    assert.ok(Object.isFrozen(details));
    if (details !== null && typeof details === "object" && !Array.isArray(details)) {
      assert.ok(Object.isFrozen(details.labels));
    }
    for (const absent of ["__proto__", "toString", "hasOwnProperty"]) {
      assert.throws(() => registry.get(absent), new RegExp(`Unknown vocabulary: ${absent}`, "u"));
      assert.throws(() => registry.sourceFile(absent), new RegExp(`Unknown vocabulary: ${absent}`, "u"));
      assert.throws(() => registry.values(absent), new RegExp(`Unknown vocabulary: ${absent}`, "u"));
    }
  });
});

test("typed registry construction still rejects all unvalidated schema and definition fields", () => {
  withVocabularyDirectory({
    "invalid.yaml": [
      "schema_version: \"1\"", "vocab: invalid", "unknown: field", "values:",
      "  empty:", "    description: \"\"",
      "  scalar: text", "  __proto__:", "    description: Invalid token.",
    ].join("\n"),
  }, (directory) => {
    assert.throws(() => loadVocabularyRegistry({ directory }), (error: unknown) => {
      assert.ok(error instanceof VocabularyRegistryError);
      assert.match(error.message, /unsupported top-level field unknown/u);
      assert.match(error.message, /schema_version must be integer 1/u);
      assert.match(error.message, /values\.empty\.description must be a non-empty string/u);
      assert.match(error.message, /values\.scalar must be a mapping/u);
      assert.match(error.message, /values\.__proto__ must use a lower_snake_case token/u);
      return true;
    });
  });
});
