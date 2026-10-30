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
        `<h1 id="${result.sourceHeadingAnchor}" data-source-node="${part.sourceHeadingId}">${result.title}</h1>` +
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

test("underfilled final chapters coalesce into the first page with every original source block", () => {
  const source = "---\nlanguage: en-US\n---\n# Whole title\n\n## Main\n\n" + "a".repeat(800) + "\n\n### Short tail\n\nLast paragraph [back](#whole-title).\n";
  const result = renderMarkdown(source, "short-tail", {maxHtmlBytes: 1_000});
  assert.equal(result.parts.length, 1);
  assert.deepEqual(result.inventory, inventoryMarkdown(source, "short-tail").nodes);
  assert.deepEqual(result.parts.flatMap(part => part.sourceNodeIds), result.inventory.map(node => node.id));
  const documents = rendered(result);
  verifyRenderedBlocks(documents[0]!, result.inventory, result.parts[0]!.sourceNodeIds);
  assert.ok(documents[0]!.querySelector('a[href="/part-0/#pcr-whole-title"]'));
  assert.equal(documents[0]!.querySelectorAll("h1").length, 1);
  assert.ok(documents[0]!.querySelector("#pcr-whole-title"));
  assert.ok(result.parts[0]!.anchors.includes("pcr-short-tail"));
});

test("final-tail merging preserves remaining chapter context, cross-part anchors and footnotes", () => {
  const source = "---\nlanguage: en-US\n---\n# Complete\n\n## Alpha\n\n" + "a".repeat(900) + " [tail](#trailing) and a note[^one].\n\n## Bravo\n\n" + "b".repeat(900) + " [first](#alpha) and [title](#complete).\n\n### Trailing\n\nTrailing text.\n\n[^one]: Exact footnote content.\n";
  const result = renderMarkdown(source, "cross-tail", {maxHtmlBytes: 1_000});
  assert.equal(result.parts.length, 2);
  assert.deepEqual(result.parts[1]!.context, [{depth: 2, label: "Alpha", anchor: "pcr-alpha"}]);
  const ids = result.parts.flatMap(part => part.sourceNodeIds);
  assert.equal(new Set(ids).size, result.inventory.length);
  assert.deepEqual(ids, result.inventory.map(node => node.id));
  const documents = rendered(result);
  documents.forEach((document, index) => verifyRenderedBlocks(document, result.inventory, result.parts[index]!.sourceNodeIds));
  assert.ok(documents[0]!.querySelector('a[href="/part-1/#pcr-trailing"]'));
  assert.ok(documents[1]!.querySelector('a[href="/part-0/#pcr-alpha"]'));
  assert.ok(documents[1]!.querySelector('a[href="/part-0/#pcr-complete"]'));
  assert.ok(documents[0]!.querySelector('a[href="/part-1/#pcr-note-fn-one"]'));
  assert.ok(documents[1]!.querySelector('a[href="/part-0/#pcr-note-fnref-one"]'));
  assert.equal(documents.flatMap(document => [...document.querySelectorAll("h1")]).length, 1);
});

test("tail coalescing keeps the existing ceiling and indivisible oversized tables", () => {
  const source = "---\nlanguage: en-US\n---\n# Atomic\n\n## Table\n\n| key | value |\n| --- | --- |\n| x | " + "中".repeat(1_100) + " |\n\n### Tail\n\nLast.\n";
  const result = renderMarkdown(source, "atomic-tail", {maxHtmlBytes: 1_000});
  assert.equal(result.parts.length, 2, "an indivisible unit above the existing 3x bound cannot absorb a tail");
  const documents = rendered(result);
  documents.forEach((document, index) => verifyRenderedBlocks(document, result.inventory, result.parts[index]!.sourceNodeIds));
  assert.equal(documents[0]!.querySelectorAll("table").length, 1);
  assert.equal(documents[0]!.querySelector("tbody td:last-child")!.textContent, "中".repeat(1_100));
  assert.equal(documents[1]!.querySelectorAll("table").length, 0);
});

test("coalescing charges UTF-8 bytes and retains the exact existing 3x ceiling", () => {
  const header = "---\nlanguage: zh-CN\n---\n# Title\n\n## Main\n\n" + "a".repeat(800) + "\n\n### Tail\n\n";
  for (const [length, expected] of [[100, 1], [200, 2]] as const) {
    const source = header + "中".repeat(length) + "\n";
    const result = renderMarkdown(source, "utf8-tail", {maxHtmlBytes: 1_000});
    assert.equal(result.parts.length, expected);
    rendered(result).forEach((document, index) => verifyRenderedBlocks(document, result.inventory, result.parts[index]!.sourceNodeIds));
  }
  const sourceFor = (length: number) => "---\nlanguage: en-US\n---\n# Bound\n\n## Main\n\n" + "a".repeat(length) + "\n\n### Tail\n\nEnd.\n";
  const probe = renderMarkdown(sourceFor(1), "ceiling-tail", {maxHtmlBytes: 1_000_000});
  const overhead = Buffer.byteLength(finalizePart(probe.parts[0]!, {hrefForAnchor: id => id})) - 1;
  for (const [extra, expected] of [[0, 1], [1, 2]] as const) {
    const result = renderMarkdown(sourceFor(3_000 - overhead + extra), "ceiling-tail", {maxHtmlBytes: 1_000});
    assert.equal(result.parts.length, expected);
    rendered(result).forEach((document, index) => verifyRenderedBlocks(document, result.inventory, result.parts[index]!.sourceNodeIds));
  }
});
