import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { NormativeProjectionError } from "../../packages/pcr-core/src/compiler/normative-projection.ts";
import { parsePcrMarkdownToStructured } from "./markdown-projection.ts";
import { normalizeHeader, parseTable, tableCell } from "./markdown-table.ts";

test("typed Markdown table preserves row order, alias lookup and empty-row filtering", () => {
  const { table, nextIndex } = parseTable([
    "| Flow role | `Tiangong UUID` |",
    "| --- | --- |",
    "| output | first |",
    "|  |  |",
    "| input | second |",
    "next block",
  ], 0);
  assert.ok(table);
  assert.equal(nextIndex, 5);
  assert.deepEqual(table.rows, [["output", "first"], ["input", "second"]]);
  const headers = new Map(table.headers.map((header, index) => [normalizeHeader(header), index]));
  assert.equal(tableCell(table.rows[0] ?? [], headers, ["uuid", "tiangong_uuid"]), "first");
  assert.equal(tableCell(table.rows[1] ?? [], headers, ["missing"]), "");
});

test("typed parser retains unresolved Chinese reference identity and measurement fields", () => {
  const source = readFileSync(new URL("../fixtures/measurement-44125/pcr.zh-CN.md", import.meta.url), "utf8");
  const projection = parsePcrMarkdownToStructured(source);
  const definition = projection.referenceFlowDefinition;
  assert.ok(definition);
  assert.equal(definition.reference_amount, "1");
  assert.equal(definition.product_flow.name, "成品秸秆或饲料打捆机（UUID 未解决）");
  assert.equal(definition.product_flow.uuid, "");
  assert.equal(definition.flow_property_uuid, "93a60a56-a3c8-11da-a746-0800200b9a66");
  assert.equal(definition.unit_group_uuid, "93a60a57-a4c8-11da-a746-0800200c9a66");
  assert.equal(definition.reference_unit, "kg");
  assert.ok(projection.measurementRules.length > 0);
  assert.ok(projection.collectionProtocols.length > 0);
  assert.ok(projection.processInventory.length > 0);
});

test("full parser exposes complete normative H2 context while retaining non-rule boundary fields", () => {
  const source = [
    "## System Boundary",
    "",
    "For a product crossing this boundary:",
    "",
    "- retain its upstream dataset;",
    "  - disclose the starting condition.",
    "",
    "### Boundary Abstraction",
    "",
    "| Field | Value |",
    "| --- | --- |",
    "| declared_starting_condition | source_material_received |",
    "",
    "## Allocation",
    "",
    "| rule_id | Rule | source_ids |",
    "| --- | --- | --- |",
    "| `explicit_allocation` | Separate the processes. | `method-source` |",
    "",
    "## Validation Rules",
    "",
    "- Disclose the measurement basis.",
    "",
  ].join("\n");
  const projection = parsePcrMarkdownToStructured(source);
  assert.deepEqual(projection.boundaryAbstraction, { declared_starting_condition: "source_material_received" });
  const boundary = projection.normativeContext.units.find(unit => unit.family === "system_boundary");
  assert.ok(boundary);
  assert.equal(boundary.markdown, source.slice(0, source.indexOf("## Allocation")));
  assert.match(boundary.markdown, /For a product crossing this boundary:/u);
  assert.match(projection.systemBoundary.rules[0]?.rule ?? "", /retain its upstream dataset; disclose the starting condition\./u);
  assert.equal(projection.allocationRules[0]?.rule_id, "explicit_allocation");
  assert.deepEqual(projection.allocationRules[0]?.source_ids, ["method-source"]);
  assert.equal(projection.normativeContext.bindings.find(binding => binding.rule_id === "explicit_allocation")?.identity_kind, "explicit");
  assert.equal(projection.normativeContext.bindings.length,
    projection.systemBoundary.rules.length + projection.allocationRules.length + projection.validationRules.length);
  assert.ok(projection.normativeContext.diagnostics.some(diagnostic => diagnostic.code === "NON_RULE_TABLE"));
});

test("full parser rejects duplicate authored normative identities with both source positions", () => {
  assert.throws(() => parsePcrMarkdownToStructured([
    "## Allocation",
    "",
    "| rule_id | Rule |",
    "| --- | --- |",
    "| `same_rule` | First rule. |",
    "| `same_rule` | Second rule. |",
  ].join("\n")), (error: unknown) => {
    assert.ok(error instanceof NormativeProjectionError);
    assert.equal(error.code, "DUPLICATE_NORMATIVE_RULE_ID");
    assert.equal(error.family, "allocation");
    assert.deepEqual(error.source_spans.map(span => span.start.line), [5, 6]);
    return true;
  });
});
