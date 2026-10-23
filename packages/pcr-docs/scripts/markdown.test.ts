import assert from "node:assert/strict";
import test from "node:test";
import { parseHTML } from "linkedom";
import {
  renderMarkdown,
  finalizePart,
  verifyRenderedBlocks,
  inventoryMarkdown,
} from "./markdown.ts";
const source = `---
language: en-US
---

# Example

A **bold** word, x<sup>2</sup>, [link](https://example.org/a "Title") and a note[^one].

- first
  - nested
- second

| Column | Value |
| --- | --- |
| a | 1 |

\`\`\`text
  whitespace  stays
    here
\`\`\`

## Next

[Back](#example) and [reference][external].

<div onclick="evil()">Literal unsafe HTML</div>

[^one]: Footnote body.

[external]: https://example.org/reference
`;
function rendered(result: ReturnType<typeof renderMarkdown>) {
  const destinations = new Map(
    result.parts.flatMap((part, i) =>
      part.anchors.map((id) => [id, `/part-${i}/#${id}`] as const),
    ),
  );
  return result.parts.map((part) => {
    let html = finalizePart(part, {
      hrefForAnchor: (id) => destinations.get(result.anchorAliases[id] ?? id)!,
    });
    if (part.sourceHeadingId)
      html =
        `<h1 data-source-node="${part.sourceHeadingId}">${result.title}</h1>` +
        html;
    return parseHTML("<html><body>" + html + "</body></html>").document;
  });
}
test("source inventory survives splitting, nested structures, footnotes and exact code whitespace", () => {
  const inventory = inventoryMarkdown(source, "fixture");
  const result = renderMarkdown(source, "fixture", { maxHtmlBytes: 280 });
  assert.deepEqual(result.inventory, inventory.nodes);
  assert.ok(result.parts.length > 1);
  const documents = rendered(result);
  documents.forEach((document, i) =>
    verifyRenderedBlocks(
      document,
      result.inventory,
      result.parts[i]!.sourceNodeIds,
    ),
  );
  assert.equal(result.inventory[0]!.sourceLine, 5);
  assert.ok(documents.some((doc) => doc.querySelector("ul ul")));
  assert.ok(documents.some((doc) => doc.querySelector("table th")));
  assert.ok(
    documents.some((doc) =>
      doc.querySelector('a[href="https://example.org/a"][title="Title"]'),
    ),
  );
  assert.ok(
    documents.some((doc) =>
      doc.querySelector('a[href="/part-0/#pcr-example"]'),
    ),
  );
  assert.ok(documents.every((doc) => !doc.querySelector("[onclick]")));
});
test("public inventories expose only source values and remain isolated between calls", () => {
  const first = inventoryMarkdown(source, "fixture");
  const expected = structuredClone(first);
  assert.deepEqual(Object.keys(first).sort(), ["body", "frontmatter", "nodes"]);
  assert.ok(first.frontmatter && typeof first.frontmatter === "object" && !Array.isArray(first.frontmatter));
  first.frontmatter.language = "changed";
  first.nodes[0]!.text = "changed";
  first.nodes.find((node) => node.links.length)!.links[0]!.url = "https://changed.example";
  first.nodes.find((node) => node.tables.length)!.tables[0]![0]![0] = "changed";
  first.nodes.find((node) => node.lists.length)!.lists[0]!.items = 99;
  assert.deepEqual(inventoryMarkdown(source, "fixture"), expected);
  const result = renderMarkdown(source, "fixture", { maxHtmlBytes: 280 });
  assert.deepEqual(result.frontmatter, expected.frontmatter);
  assert.deepEqual(result.inventory, expected.nodes);
  rendered(result).forEach((document, i) =>
    verifyRenderedBlocks(document, result.inventory, result.parts[i]!.sourceNodeIds),
  );
  assert.deepEqual(inventoryMarkdown(source, "fixture"), expected);
});
test("coverage validator detects dropped source blocks and altered text", () => {
  const result = renderMarkdown(source, "fixture");
  const [document] = rendered(result);
  assert.ok(document);
  assert.ok(document);
  const target = document.querySelector("table");
  assert.ok(target);
  target.querySelector("td")!.textContent = "changed";
  assert.throws(
    () =>
      verifyRenderedBlocks(
        document,
        result.inventory,
        result.parts[0]!.sourceNodeIds,
      ),
    /differs/,
  );
  target.remove();
  assert.throws(
    () =>
      verifyRenderedBlocks(
        document,
        result.inventory,
        result.parts[0]!.sourceNodeIds,
      ),
    /exactly once/,
  );
});
test("unsafe source links fail before a sanitizer can silently discard them", () => {
  assert.throws(
    () =>
      inventoryMarkdown(
        "---\nlanguage: en-US\n---\n# Title\n\n[x](javascript:alert)\n",
        "bad",
      ),
    /Unsupported source URL/,
  );
});
test("ragged GFM rows keep source cells beyond the declared header width", () => {
  const source = "---\nlanguage: en-US\n---\n# Table\n\n| a | b |\n| --- | --- |\n| one | two | undefined |\n";
  const inventory = inventoryMarkdown(source, "ragged");
  const result = renderMarkdown(
    source,
    "ragged",
  );
  assert.deepEqual(result.inventory, inventory.nodes);
  const [document] = rendered(result);
  assert.ok(document);
  verifyRenderedBlocks(
    document,
    result.inventory,
    result.parts[0]!.sourceNodeIds,
  );
  assert.equal(document.querySelectorAll("tbody td").length, 3);
  assert.equal(document.querySelectorAll("thead th").length, 3);
  assert.equal(
    document.querySelector("tbody td:last-child")!.textContent,
    "undefined",
  );
});
test("Unicode source fragments survive URI encoding and BOM locations map to original text", () => {
  const source = "\uFEFF---\nlanguage: zh-CN\n---\n\n# 标题\n\n[回到](#标题)\n";
  const result = renderMarkdown(source, "unicode");
  const docs = rendered(result);
  assert.ok(docs[0]!.querySelector('a[href="/part-0/#pcr-标题"]'));
  assert.equal(
    source.slice(
      result.inventory[0]!.sourceStart,
      result.inventory[0]!.sourceEnd,
    ),
    "# 标题",
  );
});
