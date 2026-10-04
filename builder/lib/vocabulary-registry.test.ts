import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import {isUnknownRecord,unknownField,errorMessage} from "../../packages/pcr-core/src/types.ts";

import {
  CONTENT_MATURITY_VALUES,
  PCR_STATUS_VALUES,
  TRANSLATION_STATUS_VALUES,
  formatOneOf,
} from "./lifecycle-vocab.ts";
import {
  DEFAULT_VOCABULARY_REGISTRY,
  DEFAULT_VOCABULARY_DIRECTORY,
  VocabularyRegistryError,
  loadVocabularyRegistry,
} from "./vocabulary-registry.ts";
import { CONTROLLED_VOCABULARY } from "../../packages/pcr-core/src/generated/controlled-vocabulary.ts";
import { buildControlledVocabularyArtifacts } from "../scripts/generate-controlled-vocabulary.ts";
import { parseYaml } from "../../packages/pcr-core/src/yaml-lite.ts";

function withVocabularyDirectory<T>(files: Record<string,string>, callback:(directory:string)=>T):T {
  const directory = mkdtempSync(path.join(os.tmpdir(), "pcr-vocab-"));
  try {
    for (const [fileName, content] of Object.entries(files)) {
      writeFileSync(path.join(directory, fileName), content);
    }
    return callback(directory);
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
}

function valueVocabulary(vocab: string, values: readonly string[]) {
  return [
    "schema_version: 1",
    `vocab: ${vocab}`,
    "values:",
    ...values.flatMap((value) => [
      `  ${value}:`,
      `    description: Description for ${value}.`,
    ]),
    "",
  ].join("\n");
}

test("canonical vocabulary registry loads every YAML file deterministically", () => {
  const expectedIds = readdirSync(DEFAULT_VOCABULARY_DIRECTORY)
    .filter((fileName) => fileName.endsWith(".yaml"))
    .map((fileName) => fileName.replace(/\.yaml$/u, "").replaceAll("-", "_"))
    .sort();
  assert.deepEqual(DEFAULT_VOCABULARY_REGISTRY.ids, expectedIds);
  assert.equal(DEFAULT_VOCABULARY_REGISTRY.sourceFile("pcr_status"), "pcr-status.yaml");
  assert.deepEqual(DEFAULT_VOCABULARY_REGISTRY.values("flow_type"), [
    "product",
    "waste",
    "elementary",
  ]);
  assert.ok(Object.isFrozen(DEFAULT_VOCABULARY_REGISTRY.get("pcr_status")));
  assert.throws(() => DEFAULT_VOCABULARY_REGISTRY.get("missing"), /Unknown vocabulary: missing/u);
});

test("lifecycle vocabulary exports are projections of the canonical registry", () => {
  assert.deepEqual(PCR_STATUS_VALUES, DEFAULT_VOCABULARY_REGISTRY.values("pcr_status"));
  assert.deepEqual(
    CONTENT_MATURITY_VALUES,
    DEFAULT_VOCABULARY_REGISTRY.values("content_maturity"),
  );
  assert.deepEqual(
    TRANSLATION_STATUS_VALUES,
    DEFAULT_VOCABULARY_REGISTRY.values("translation_status"),
  );
  assert.equal(
    formatOneOf(PCR_STATUS_VALUES),
    "scaffold, candidate, active, published, or deprecated",
  );
});

test("generated module and JSON Schema project the canonical vocabulary exactly", () => {
  const artifacts = buildControlledVocabularyArtifacts();
  const schemaPath = Object.keys(artifacts).find((filePath) =>
    filePath.endsWith("controlled-vocabulary.schema.json"),
  );
  assert.ok(schemaPath);
  const content=artifacts[schemaPath];assert.ok(content);
  const schema:unknown = JSON.parse(content);
  const definitions=unknownField(schema,"$defs");assert.ok(isUnknownRecord(definitions));
  const controlledVocabulary: Readonly<Record<string,readonly string[]>>=CONTROLLED_VOCABULARY;

  assert.deepEqual(Object.keys(CONTROLLED_VOCABULARY), DEFAULT_VOCABULARY_REGISTRY.ids);
  for (const vocab of DEFAULT_VOCABULARY_REGISTRY.ids) {
    const expected = DEFAULT_VOCABULARY_REGISTRY.values(vocab);
    assert.deepEqual(controlledVocabulary[vocab], expected);
    assert.deepEqual(unknownField(definitions[vocab],"enum"), expected);
  }
});

test("GitHub feedback dropdowns remain explicit projections of canonical vocabularies", () => {
  const template = parseYaml(
    readFileSync(new URL("../../.github/ISSUE_TEMPLATE/pcr-feedback.yml", import.meta.url), "utf8"),
  );
  const body=unknownField(template,"body");assert.ok(Array.isArray(body));
  const optionsFor = (id: string) => {
    const field = body.find((field:unknown)=>unknownField(field,"id")===id);
    return unknownField(unknownField(field,"attributes"),"options") ?? [];
  };

  assert.deepEqual(
    optionsFor("feedback_type"),
    DEFAULT_VOCABULARY_REGISTRY.values("feedback_type").filter(
      (value) => value !== "missing_pcr",
    ),
  );
  assert.deepEqual(
    optionsFor("confidence"),
    DEFAULT_VOCABULARY_REGISTRY.values("feedback_confidence"),
  );
});

test("custom registries sort files while preserving declared value order", () => {
  withVocabularyDirectory(
    {
      "zeta.yaml": valueVocabulary("zeta", ["second", "first"]),
      "alpha.yaml": valueVocabulary("alpha", ["one", "two"]),
    },
    (directory) => {
      const registry = loadVocabularyRegistry({ directory });
      assert.deepEqual(registry.ids, ["alpha", "zeta"]);
      assert.deepEqual(registry.values("zeta"), ["second", "first"]);
    },
  );
});

test("registry rejects invalid document shape with stable diagnostics", () => {
  withVocabularyDirectory(
    {
      "bad.yaml": [
        "schema_version: \"1\"",
        "vocab: bad",
        "unknown: field",
        "values:",
        "  invalid-value:",
        "    description: \"\"",
        "",
      ].join("\n"),
    },
    (directory) => {
      assert.throws(
        () => loadVocabularyRegistry({ directory }),
        (error) => {
          assert.ok(error instanceof VocabularyRegistryError);
          assert.match(error.message, /bad\.yaml: unsupported top-level field unknown/u);
          assert.match(error.message, /bad\.yaml: schema_version must be integer 1/u);
          assert.match(error.message, /values\.invalid-value must use a lower_snake_case token/u);
          assert.match(error.message, /values\.invalid-value\.description must be a non-empty string/u);
          return true;
        },
      );
    },
  );
});

test("registry rejects duplicate mapping keys", () => {
  withVocabularyDirectory(
    {
      "duplicate.yaml": [
        "schema_version: 1",
        "vocab: duplicate",
        "values:",
        "  repeated:",
        "    description: First definition.",
        "  repeated:",
        "    description: Second definition.",
        "",
      ].join("\n"),
    },
    (directory) => {
      assert.throws(
        () => loadVocabularyRegistry({ directory }),
        (error) => {
          assert.match(errorMessage(error), /duplicate\.yaml: line 6 repeats mapping key values\.repeated/u);
          return true;
        },
      );
    },
  );
});

test("registry rejects duplicate vocabulary ids across files", () => {
  withVocabularyDirectory(
    {
      "alpha.yaml": valueVocabulary("alpha", ["one"]),
      "beta.yaml": valueVocabulary("alpha", ["two"]),
    },
    (directory) => {
      assert.throws(
        () => loadVocabularyRegistry({ directory }),
        /beta\.yaml: vocab alpha is already defined by alpha\.yaml/u,
      );
    },
  );
});
