import test from "node:test";
import assert from "node:assert/strict";
import { renderMarkdown } from "./markdown.mjs";
import {
  SUMMARY_LIMIT,
  catalogSummary,
  clampSummary,
  contextFrom,
  contextParagraph,
  documentSummary,
} from "./summaries.mjs";

const node = (id, type, text) => ({ id, type, text });
const paragraph = (id, text) => node(id, "paragraph", text);

test("clampSummary bounds by code points and never splits a surrogate pair", () => {
  const emoji = "🐟";
  const text = emoji.repeat(SUMMARY_LIMIT + 40);
  const bounded = clampSummary(text);
  assert.equal([...bounded].length <= SUMMARY_LIMIT, true);
  assert.equal(/\p{Surrogate}/u.test(bounded), false, "no lone surrogate survives");
  assert.equal(bounded.endsWith("…"), true);
  assert.equal(
    [...bounded].every((character) => character === emoji || character === "…"),
    true,
  );
});

test("clampSummary keeps short text exact and prefers a source boundary", () => {
  assert.equal(clampSummary("  A short summary.  "), "A short summary.");
  const sentence = "第一句说明边界。" + "第二句补充范围。".repeat(40);
  const bounded = clampSummary(sentence);
  assert.equal([...bounded].length <= SUMMARY_LIMIT, true);
  // The cut lands on the source's own sentence boundary: the sentence terminator is replaced by the
  // truncation mark instead of stacking two terminators.
  assert.equal(bounded.endsWith("范围…"), true);
  assert.equal(bounded.includes("。…"), false);
  const words = "boundary ".repeat(60);
  assert.equal(clampSummary(words).endsWith("boundary…"), true);
});

test("contextParagraph rejects fragments that cannot carry reader context", () => {
  assert.equal(contextParagraph("5.2"), "");
  assert.equal(contextParagraph(""), "");
  assert.equal(contextParagraph("————————"), "");
  assert.equal(contextParagraph("   "), "");
  assert.equal(contextParagraph("Record the total mass of the product."), "Record the total mass of the product.");
  assert.equal(contextParagraph("记录产品总质量，并保留来源数据。"), "记录产品总质量，并保留来源数据。");
});

test("contextFrom takes at most two useful paragraphs of the given scope, in order", () => {
  const nodes = [
    node("h", "heading", "2. Scope"),
    paragraph("p1", "First source paragraph of this scope."),
    node("t", "table", "flow value unit"),
    paragraph("p2", "Second source paragraph of this scope."),
    paragraph("p3", "Third source paragraph that must not be used."),
    paragraph("p4", "1.1"),
  ];
  assert.equal(
    contextFrom(nodes),
    "First source paragraph of this scope. Second source paragraph of this scope.",
  );
  assert.equal(contextFrom([node("h", "heading", "2. Scope")]), "");
});

test("a chapter describes itself and never borrows the document opening", () => {
  const document = [
    paragraph("opening", "This document opens with a general introduction paragraph."),
    paragraph("c1", "Chapter one states the system boundary of the analysed product."),
    paragraph("c2", "Chapter two lists the process inventory requirements."),
  ];
  const record = documentSummary({
    title: "Synthetic wheat seed",
    nodes: document.filter((item) => item.id === "opening"),
    fallbackNodes: document,
    language: "en-US",
  });
  const chapters = [
    documentSummary({ title: "Synthetic wheat seed · 1. Boundary", nodes: [document[1]], language: "en-US" }),
    documentSummary({ title: "Synthetic wheat seed · 2. Inventory", nodes: [document[2]], language: "en-US" }),
  ];
  assert.match(record.text, /^Synthetic wheat seed: This document opens/);
  assert.match(chapters[0].text, /^Synthetic wheat seed · 1\. Boundary: Chapter one states/);
  assert.match(chapters[1].text, /^Synthetic wheat seed · 2\. Inventory: Chapter two lists/);
  assert.equal(new Set([record.text, ...chapters.map((item) => item.text)]).size, 3);
  assert.equal(new Set([record.text, ...chapters.map((item) => item.text)]).size, 3);
});

test("a record page may fall back to its own document opening when it has no paragraph", () => {
  const document = [
    node("h", "heading", "1. Scope"),
    paragraph("intro", "The document starts with a chapter heading and then this paragraph."),
  ];
  const record = documentSummary({
    title: "Synthetic wheat seed",
    nodes: [document[0]],
    fallbackNodes: document,
    language: "en-US",
  });
  assert.equal(record.titleOnly, false);
  assert.match(record.text, /: The document starts with a chapter heading/);
});

test("a page without any usable paragraph reports a title-only residual", () => {
  const structural = [node("h", "heading", "8. Foreground Data Collection"), node("t", "table", "protocol_id process_id")];
  const summary = documentSummary({
    title: "Synthetic wheat seed · 8. Foreground Data Collection",
    nodes: structural,
    language: "en-US",
  });
  assert.equal(summary.titleOnly, true);
  assert.equal(summary.text, "Synthetic wheat seed · 8. Foreground Data Collection");
  assert.equal(summary.clipped, false);
  const chinese = documentSummary({
    title: "合成测试小麦种子 · 8. 前景数据采集",
    nodes: structural,
    language: "zh-CN",
  });
  assert.equal(chinese.titleOnly, true);
  assert.equal(chinese.text, "合成测试小麦种子 · 8. 前景数据采集");
});

test("Chinese summaries join title and context with the language separator", () => {
  const summary = documentSummary({
    title: "合成测试小麦种子 · 系统边界",
    nodes: [paragraph("p", "本章说明系统边界与分配原则。")],
    language: "zh-CN",
  });
  assert.equal(summary.text, "合成测试小麦种子 · 系统边界：本章说明系统边界与分配原则。");
  assert.equal(summary.titleOnly, false);
});

test("a title that consumes the bound is reported as a title-only residual, not as coverage", () => {
  const summary = documentSummary({
    title: "T".repeat(SUMMARY_LIMIT),
    nodes: [paragraph("p", "A paragraph that cannot fit after the title.")],
    language: "en-US",
  });
  assert.equal(summary.titleOnly, true);
  assert.equal([...summary.text].length <= SUMMARY_LIMIT, true);
});

test("accounting reports the retained output when the boundary cut discards the context", () => {
  // Regression: the title left room for five context characters, so the previous flags claimed
  // visible context, while the boundary cut had already reduced the summary to the title alone.
  const title = "A".repeat(163);
  const summary = documentSummary({
    title,
    nodes: [paragraph("p", "Useful contextual prose that is longer than twelve characters.")],
    language: "en",
  });
  assert.equal(summary.text, title + "…");
  assert.equal(summary.titleOnly, true, "the reader sees the title alone");
  assert.equal(summary.contextDropped, true, "a usable paragraph existed but did not survive");
  assert.equal(summary.clipped, true, "the summary is shorter than the text it projects");
});

test("a title clipped before composition still reports a clipped summary", () => {
  const summary = documentSummary({
    title: "B".repeat(SUMMARY_LIMIT + 40),
    nodes: [],
    language: "en-US",
  });
  assert.equal(summary.titleOnly, true);
  assert.equal(summary.contextDropped, false, "no paragraph was ever available");
  assert.equal(summary.clipped, true, "the title alone was cut to fit");
  assert.equal([...summary.text].length <= SUMMARY_LIMIT, true);
  assert.equal(summary.text.endsWith("…"), true);
});

test("an exact fit is neither clipped nor title-only, and one character over is clipped", () => {
  const context = "Measured context for the exact-fit boundary case.";
  const separator = ": ";
  const titleLength = SUMMARY_LIMIT - [...separator].length - [...context].length;
  const fitted = documentSummary({
    title: "F".repeat(titleLength),
    nodes: [paragraph("p", context)],
    language: "en-US",
  });
  assert.equal(fitted.text, "F".repeat(titleLength) + separator + context);
  assert.equal(fitted.titleOnly, false);
  assert.equal(fitted.clipped, false);
  assert.equal(fitted.contextDropped, false);

  const over = documentSummary({
    title: "F".repeat(titleLength + 1),
    nodes: [paragraph("p", context)],
    language: "en-US",
  });
  assert.equal(over.titleOnly, false, "context is still visible one character over the bound");
  assert.equal(over.clipped, true);
  assert.equal([...over.text].length <= SUMMARY_LIMIT, true);
});

test("every summary reports flags derived from its retained output", () => {
  const context = "A source paragraph that is comfortably longer than the minimum useful length.";
  const structural = [node("h", "heading", "2. Scope"), node("t", "table", "flow unit")];
  for (const titleLength of [1, 12, 60, 140, 160, 162, 163, 164, 168, 169, 170, 171, 200]) {
    for (const [label, nodes] of [
      ["paragraph", [paragraph("p", context)]],
      ["structural", structural],
      ["empty", []],
    ]) {
      const title = "T".repeat(titleLength);
      const summary = documentSummary({ title, nodes, language: "en-US" });
      const context_text = nodes.length === 1 ? context : "";
      // A summary may only claim visible context when the retained output really carries some.
      if (!summary.titleOnly)
        assert.ok(
          [...summary.text].length > [...summary.label].length + 2,
          `visible context claimed but absent (${label}, ${titleLength}): ${JSON.stringify(summary.text)}`,
        );
      // Unclipped means nothing was lost: the summary is the whole projection.
      if (!summary.clipped)
        assert.equal(
          summary.text,
          title + (context_text ? ": " + context_text : ""),
          `unclipped summary must equal the projection (${label}, ${titleLength})`,
        );
      // Only a page whose summary is the title alone can be a residual, and only a real paragraph
      // can be dropped.
      if (summary.contextDropped) assert.equal(summary.titleOnly, true);
      if (context_text === "") assert.equal(summary.contextDropped, false);
      assert.equal([...summary.text].length <= SUMMARY_LIMIT, true);
      assert.equal(
        [...summary.text].some((character) => {
          const point = character.codePointAt(0);
          return point >= 0xd800 && point <= 0xdfff;
        }),
        false,
      );
    }
  }
});

test("catalog summaries name the actual category, its position and the real count", () => {
  const domain = catalogSummary({
    language: "en-US",
    title: "Beverages",
    count: 4,
    subcategories: 2,
  });
  const single = catalogSummary({
    language: "en-US",
    title: "Cider",
    parent: "Beverages",
    count: 1,
  });
  const chinese = catalogSummary({
    language: "zh-CN",
    title: "饮料",
    count: 4,
    subcategories: 2,
  });
  assert.equal(domain.text, "Beverages: 4 PCR documents in this domain, across 2 categories.");
  assert.equal(single.text, "Cider (Beverages): 1 PCR document in this category.");
  assert.equal(chinese.text, "饮料：本分类共 4 个 PCR 文档，分为 2 个子分类。");
  assert.notEqual(domain.text, single.text);
  assert.notEqual(domain.text, chinese.text);
});

test("two sibling subdomains never publish the same sentence", () => {
  const first = catalogSummary({ language: "en-US", title: "Cider", parent: "Beverages", count: 2 });
  const second = catalogSummary({ language: "en-US", title: "Wine", parent: "Beverages", count: 2 });
  assert.notEqual(first.text, second.text);
  const sameTitle = catalogSummary({ language: "zh-CN", title: "饮料", parent: "食品", count: 2 });
  const otherParent = catalogSummary({ language: "zh-CN", title: "饮料", parent: "农业", count: 2 });
  assert.notEqual(sameTitle.text, otherParent.text);
});

test("the real renderer's chapter scopes produce one distinct summary per part", () => {
  const source = `---
language: en-US
---

# Synthetic chapters

## 1. Scope

The first chapter states the scope of the synthetic product system.

## 2. Boundary

The second chapter states the boundary of the synthetic product system.

## 3. Inventory

| flow | unit |
| --- | --- |
| seed | kg |
`;
  // A small split budget forces the real renderer to emit one page per chapter.
  const rendered = renderMarkdown(source, "library/pcrs/test/synthetic/pcr.en-US.md", {
    maxHtmlBytes: 220,
  });
  assert.ok(rendered.parts.length >= 3, "expected one part per chapter");
  const summaries = rendered.parts.map((part, index) => {
    const ids = new Set(part.sourceNodeIds);
    return documentSummary({
      title: part.title,
      nodes: rendered.inventory.filter((node) => ids.has(node.id)),
      fallbackNodes: index === 0 ? rendered.inventory : [],
      language: "en-US",
    });
  });
  assert.match(summaries[0].text, /scope of the synthetic product system/u);
  assert.match(summaries[1].text, /boundary of the synthetic product system/u);
  assert.equal(
    summaries[1].text.includes("first chapter"),
    false,
    "a chapter never borrows another chapter's paragraph",
  );
  assert.equal(summaries[2].titleOnly, true, "a table-only chapter reports a title-only residual");
  assert.equal(summaries[2].text, rendered.parts[2].title);
  assert.equal(new Set(summaries.map((summary) => summary.text)).size, summaries.length);
});
