import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { parseYaml, readYamlFile, renderYaml, YamlBoundaryError } from "./src/yaml-lite.ts";
import type { YamlObject, YamlValue } from "./src/yaml-lite.ts";

function object(value: YamlValue): YamlObject {
  assert.ok(value !== null && typeof value === "object" && !Array.isArray(value));
  return value;
}

function expectFailure(source: string, code: string, line?: number, column?: number): void {
  assert.throws(() => parseYaml(source), (error: unknown) => {
    assert.ok(error instanceof YamlBoundaryError);
    assert.equal(error.code, code);
    assert.ok(error.line >= 1 && error.column >= 1);
    if (line !== undefined) assert.equal(error.line, line);
    if (column !== undefined) assert.equal(error.column, column);
    return true;
  });
}

test("PCR #31 author receipt keeps all six rows and the complete folded explanation", () => {
  const source = `author_report:
  uuid_receipts:
    - uuid: "first-uuid"
      explanation: >-
        Selected after checking product identity and collection scope.
        The second line explains the conversion and its limitation.
      role: product
    - uuid: "second-uuid"
      explanation: "Second result"
      role: input
    - uuid: "third-uuid"
      explanation: "Third result"
      role: input
    - uuid: "fourth-uuid"
      explanation: "Fourth result"
      role: output
    - uuid: "fifth-uuid"
      explanation: "Fifth result"
      role: waste
    - uuid: "sixth-uuid"
      explanation: "Sixth result"
      role: elementary
  acceptance: "review_required"
later_entry:
  preserved: true
`;
  const parsed = object(parseYaml(source));
  const report = object(parsed["author_report"] ?? null);
  const rows = report["uuid_receipts"];
  assert.ok(Array.isArray(rows));
  assert.equal(rows.length, 6);
  assert.deepEqual(rows.map((row) => object(row)["uuid"]), [
    "first-uuid", "second-uuid", "third-uuid", "fourth-uuid", "fifth-uuid", "sixth-uuid",
  ]);
  assert.equal(object(rows[0] ?? null)["explanation"], "Selected after checking product identity and collection scope. The second line explains the conversion and its limitation.");
  assert.equal(report["acceptance"], "review_required");
  assert.deepEqual(parsed["later_entry"], { preserved: true });
});

test("quoted strings decode escapes, control characters and Unicode", () => {
  const text = 'quote " slash \\ newline\n tab\t nul\0 emoji 😀 中文';
  assert.equal(parseYaml(JSON.stringify(text)), text);
  assert.deepEqual(parseYaml("single: 'it''s # intact'\nescaped: \"\\x41\\u0042\\U0001F600\"\n"), {
    single: "it's # intact", escaped: "AB😀",
  });
});

test("block scalars, comments, nested sequences and flow collections are complete", () => {
  assert.deepEqual(parseYaml(`literal: |+
  first
  second

folded: >-
  alpha
  beta

  gamma
matrix: [[1, 2], [3, {nested: [true, null, "a: b # c"]}]] # comment
tail: intact
`), {
    literal: "first\nsecond\n\n", folded: "alpha beta\ngamma",
    matrix: [[1, 2], [3, { nested: [true, null, "a: b # c"] }]], tail: "intact",
  });
});

test("YAML 1.2 core ordinary scalars and lexical mapping keys", () => {
  assert.deepEqual(parseYaml("01111: yes\nnull: null\ntrue: TRUE\nfloat: 1.25e2\nhex: 0x10\nnegative: -3\n"), {
    "01111": "yes", null: null, true: true, float: 125, hex: 16, negative: -3,
  });
  assert.deepEqual(parseYaml("1: first\n01: second\n"), { "1": "first", "01": "second" });
  assert.deepEqual(parseYaml("empty: []\nmap: {}\n"), { empty: [], map: {} });
  assert.deepEqual(parseYaml("\uFEFF# empty\r\n"), {});
  assert.deepEqual(parseYaml("---\n# empty\n"), {});
  assert.equal(parseYaml("null"), null);
  assert.equal(parseYaml("!!null"), null);
});

test("duplicate keys and malformed syntax fail with stable source positions", () => {
  expectFailure("first: 1\nfirst: 2\n", "YAML_DUPLICATE_KEY", 2, 1);
  expectFailure('first: 1\n"first": 2\n', "YAML_DUPLICATE_KEY", 2, 1);
  expectFailure("a: [1, 2\n", "YAML_BAD_INDENT", 2, 1);
  expectFailure('a: "bad\\q"\n', "YAML_BAD_DQ_ESCAPE", 1, 8);
  expectFailure("a: true\n\tb: false\n", "YAML_TAB_AS_INDENT", 2, 1);
});

test("multiple documents never return the first document as a successful parse", () => {
  expectFailure("first: 1\n---\nsecond: 2\n", "YAML_MULTIPLE_DOCS", 2, 1);
  expectFailure("---\na: 1\n...\n---\nb: 2\n", "YAML_MULTIPLE_DOCS", 4, 1);
});

test("acyclic scalar, map and list aliases become independent JSON copies", () => {
  const parsed = object(parseYaml(`scalar: &scalar "exact"
scalar_copy: *scalar
map: &map {nested: {value: 1}, __proto__: {safe: true}}
map_copy: *map
list: &list [{value: 2}, *map]
list_copy: *list
`));
  assert.equal(parsed["scalar_copy"], "exact");
  assert.deepEqual(parsed["map_copy"], parsed["map"]);
  assert.notEqual(parsed["map_copy"], parsed["map"]);
  object(object(parsed["map_copy"] ?? null)["nested"] ?? null)["value"] = 99;
  assert.equal(object(object(parsed["map"] ?? null)["nested"] ?? null)["value"], 1);
  const list = parsed["list"], listCopy = parsed["list_copy"];
  assert.ok(Array.isArray(list) && Array.isArray(listCopy));
  assert.notEqual(listCopy, list);
  object(listCopy[0] ?? null)["value"] = 98;
  assert.equal(object(list[0] ?? null)["value"], 2);
  object(object(listCopy[1] ?? null)["nested"] ?? null)["value"] = 97;
  assert.equal(object(object(list[1] ?? null)["nested"] ?? null)["value"], 1);
  assert.deepEqual(parseYaml(renderYaml(parsed)), parsed);
  assert.equal(Object.hasOwn(Object.prototype, "safe"), false);
});

test("cycles, unresolved aliases and alias amplification fail at alias locations", () => {
  expectFailure("a: &a [*a]\n", "YAML_ALIAS_CYCLE", 1, 8);
  expectFailure("a: &a {b: &b {a: *a}}\n", "YAML_ALIAS_CYCLE", 1, 18);
  expectFailure("a: *missing\n", "YAML_ALIAS_UNRESOLVED", 1, 4);
  expectFailure("a: *later\nb: &later 1\n", "YAML_ALIAS_UNRESOLVED", 1, 4);
  const ordinaryAliases = `a: &a 1\nb: [${Array.from({ length: 100 }, () => "*a").join(", ")}]\n`;
  assert.ok(Array.isArray(object(parseYaml(ordinaryAliases))["b"]));
  expectFailure(ordinaryAliases.replace("]", ", *a]"), "YAML_ALIAS_LIMIT", 2, 405);
  // Few source aliases can expand exponentially. Expanded visits count aliases
  // inside copied targets and reject this before creating the complete output.
  let bomb = "a: &a [1]\n";
  for (let index = 1; index <= 10; index += 1) {
    const previous = index === 1 ? "a" : `a${index - 1}`;
    bomb += `a${index}: &a${index} [*${previous}, *${previous}]\n`;
  }
  expectFailure(bomb, "YAML_ALIAS_LIMIT");
});

test("collection nesting is bounded with a node position before conversion stack exhaustion", () => {
  const atLimit = `${"[".repeat(100)}0${"]".repeat(100)}`;
  assert.deepEqual(parseYaml(renderYaml(parseYaml(atLimit))), parseYaml(atLimit));
  expectFailure(`${"[".repeat(101)}0${"]".repeat(101)}`, "YAML_NESTING_LIMIT", 1, 101);
  let nested: unknown = 0;
  for (let depth = 0; depth < 101; depth += 1) nested = [nested];
  assert.throws(() => renderYaml(nested), { code: "YAML_RENDER_NESTING_LIMIT" });
});

test("existing anchored garment manifests parse completely without canonical byte changes", () => {
  const base = "library/pcrs/food-products-beverages-and-tobacco-textiles-apparel-and-leather-products/knitted-or-crocheted-fabrics-wearing-apparel/";
  const cases = [
    { slug: "garments-made-up-of-felt-or-nonwovens-garments-made-up-of-textile-fabrics-impregnated-o-38230521", source: "cut_garment_panels_output", alias: "cut_garment_panels_input" },
    { slug: "women-s-or-girls-suits-coats-jackets-dresses-skirts-trousers-shorts-and-the-like-of-tex-3ce0e778", source: "cutting_electricity_input", alias: "sewing_electricity_input" },
  ];
  for (const fixture of cases) {
    const path = fileURLToPath(new URL(`../../${base}${fixture.slug}/manifest.yaml`, import.meta.url));
    const before = readFileSync(path);
    const manifest = object(readYamlFile(path));
    const candidates = object(object(manifest["review_metadata"] ?? null)["unresolved_uuid_candidates"] ?? null);
    const original = object(candidates[fixture.source] ?? null);
    const copy = object(candidates[fixture.alias] ?? null);
    assert.deepEqual(copy, original);
    assert.notEqual(copy, original);
    assert.ok(typeof original["candidate_flow"] === "string");
    assert.ok(typeof copy["rejection_reason"] === "string");
    assert.ok(Object.hasOwn(candidates, "packaging_electricity_input"));
    assert.deepEqual(parseYaml(renderYaml(manifest)), manifest);
    assert.deepEqual(readFileSync(path), before);
  }
});

test("unsupported tags and complex keys fail; supported core tags remain data", () => {
  expectFailure("a: !executable command\n", "YAML_TAG_RESOLVE_FAILED", 1, 4);
  expectFailure("a: !!timestamp 2026-01-01\n", "YAML_TAG_RESOLVE_FAILED", 1, 4);
  expectFailure("? [a, b]\n: value\n", "YAML_NON_STRING_KEY", 1, 3);
  expectFailure("%YAML 1.1\n---\na: yes\n", "YAML_UNSUPPORTED_VERSION", 1, 1);
  expectFailure("%FOO ignored\n---\na: 1\n", "YAML_BAD_DIRECTIVE", 1, 1);
  assert.deepEqual(parseYaml("a: !!str 2\nb: !!int 2\n"), { a: "2", b: 2 });
});

test("nonfinite values fail rather than becoming strings or JSON null", () => {
  for (const scalar of [".inf", "-.Inf", ".NaN", "1e9999"]) {
    expectFailure(`value: ${scalar}\n`, "YAML_NON_JSON_VALUE", 1, 8);
  }
});

test("prototype-related keys remain safe own data properties", () => {
  const parsed = object(parseYaml("__proto__: {polluted: true}\nconstructor: value\nprototype: intact\n"));
  assert.equal(Object.getPrototypeOf(parsed), Object.prototype);
  assert.ok(Object.hasOwn(parsed, "__proto__"));
  assert.deepEqual(parsed["__proto__"], { polluted: true });
  assert.equal(Object.hasOwn(Object.prototype, "polluted"), false);
  assert.deepEqual(parseYaml(renderYaml(parsed)), parsed);
});

test("renderer preserves legacy deterministic ordinary bytes", () => {
  assert.equal(renderYaml({
    title: "A quoted title", flag: true, count: 2, absent: null, empty: [], metadata: {},
    rows: [{ id: "one", role: "input" }, { id: "two", tags: ["x", "y"] }],
  }), `title: "A quoted title"
flag: true
count: 2
absent: null
empty: []
metadata: {}
rows:
  - id: "one"
    role: "input"
  - id: "two"
    tags:
      - "x"
      - "y"
`);
});

test("renderer roundtrips nested empty collections, escaped text and unusual keys", () => {
  const input = {
    "": "empty key", "a: b # c": "punctuation", "中文": "中文😀",
    "multiline\nkey": "line\none\t\0 \\ \"", "*alias": "plain", "-": "dash",
    rows: [[], [[]], {}, { nested: [], tail: {} }, [{ nested: { text: "some\ntext" } }]],
  };
  assert.deepEqual(parseYaml(renderYaml(input)), input);
  assert.deepEqual(parseYaml(renderYaml([])), []);
  assert.deepEqual(parseYaml(renderYaml({})), {});
  assert.equal(parseYaml(renderYaml("root\ntext")), "root\ntext");
});

test("renderer explicitly retains undefined-to-null compatibility", () => {
  assert.equal(renderYaml(undefined), "null\n");
  assert.deepEqual(parseYaml(renderYaml({ missing: undefined, list: [undefined] })), { missing: null, list: [null] });
});

test("renderer rejects unsupported values, cycles, sparse arrays and getters", () => {
  const cycle: { self?: unknown } = {};
  cycle.self = cycle;
  assert.throws(() => renderYaml(cycle), { code: "YAML_RENDER_CYCLE" });
  const sparse = new Array<unknown>(2);
  let getterCalled = false;
  const accessor = Object.defineProperty({}, "value", { enumerable: true, get() { getterCalled = true; return 1; } });
  const arrayWithHiddenProperty = Object.defineProperty([1], "hidden", { value: 2 });
  for (const value of [Infinity, NaN, 1n, () => 1, Symbol("x"), new Date(), new Map(), sparse, accessor, arrayWithHiddenProperty, { [Symbol("key")]: 1 }]) {
    assert.throws(() => renderYaml(value), { code: "YAML_RENDER_NON_JSON_VALUE" });
  }
  assert.equal(getterCalled, false);
  const shared = { value: 1 };
  assert.deepEqual(parseYaml(renderYaml([shared, shared])), [shared, shared]);
});

test("readYamlFile reads strict UTF-8 and reports path with parser diagnostics", () => {
  const directory = mkdtempSync(join(tmpdir(), "pcr-yaml-contract-"));
  try {
    const path = join(directory, "fixture.yaml");
    writeFileSync(path, "\uFEFFname: 中文\n");
    assert.deepEqual(readYamlFile(path), { name: "中文" });
    writeFileSync(path, "a: 1\na: 2\n");
    assert.throws(() => readYamlFile(path), { code: "YAML_DUPLICATE_KEY", sourcePath: path, line: 2, column: 1 });
    writeFileSync(path, Buffer.from([0xc3, 0x28]));
    assert.throws(() => readYamlFile(path), { code: "YAML_INVALID_UTF8", sourcePath: path });
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});
