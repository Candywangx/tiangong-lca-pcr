import { createHash } from "node:crypto";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import GithubSlugger from "github-slugger";
import { parseHTML } from "linkedom";
import { parseYaml } from "../../pcr-core/src/yaml-lite.mjs";

const parser = unified().use(remarkParse).use(remarkGfm);
const sanitizer = {
  ...defaultSchema,
  clobber: [],
  attributes: {
    ...defaultSchema.attributes,
    "*": [...(defaultSchema.attributes["*"] ?? []), "dataSourceNode"],
  },
};
const converter = unified()
  .use(remarkRehype, { allowDangerousHtml: true, clobberPrefix: "pcr-note-" })
  .use(rehypeRaw)
  .use(rehypeSanitize, sanitizer);
const serializer = unified().use(rehypeStringify);
const blockTags = new Set([
  "p",
  "div",
  "li",
  "ul",
  "ol",
  "table",
  "tr",
  "th",
  "td",
  "blockquote",
  "pre",
  "section",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "br",
]);
const inlineHtml =
  /^<\/?(?:br|sup|sub|em|strong|code|kbd|s|del|mark|small)\s*\/?>$/iu;

export function sha256(value) {
  return "sha256:" + createHash("sha256").update(value).digest("hex");
}

export function normalizeText(value) {
  return String(value).replace(/\s+/gu, " ").trim();
}

export function envelope(source) {
  const normalized = String(source).replace(/^\uFEFF/u, "");
  const match = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/u.exec(normalized);
  if (!match)
    throw new Error("Markdown requires a complete YAML frontmatter envelope.");
  return {
    frontmatter: parseYaml(match[1]),
    body: normalized.slice(match[0].length),
    offset: match[0].length + (String(source).startsWith("\uFEFF") ? 1 : 0),
  };
}

function sourceText(node) {
  if (node.type === "html")
    return inlineHtml.test(node.value.trim())
      ? /^<br/iu.test(node.value)
        ? "\n"
        : ""
      : node.value;
  if (node.type === "image" || node.type === "imageReference")
    return node.alt ?? "";
  if (node.type === "footnoteReference" || node.type === "definition")
    return "";
  if (node.type === "break") return "\n";
  if (typeof node.value === "string") return node.value;
  const separate = [
    "root",
    "list",
    "listItem",
    "table",
    "tableRow",
    "blockquote",
    "footnoteDefinition",
  ].includes(node.type);
  return (node.children ?? []).map(sourceText).join(separate ? "\n" : "");
}

export function visibleText(node) {
  if (node.nodeType === 3) return node.textContent;
  if (node.nodeType !== 1) return "";
  if (
    node.hasAttribute("data-footnote-ref") ||
    node.hasAttribute("data-footnote-backref")
  )
    return "";
  if (node.localName === "img") return node.getAttribute("alt") ?? "";
  const value = [...node.childNodes].map(visibleText).join("");
  return blockTags.has(node.localName) ? "\n" + value + "\n" : value;
}

function visit(node, action) {
  action(node);
  for (const child of node.children ?? []) visit(child, action);
}

function nodeId(fileKey, node) {
  return (
    "s-" +
    createHash("sha256")
      .update(fileKey + ":" + (node.position?.start.offset ?? "generated"))
      .digest("hex")
      .slice(0, 20)
  );
}

function safeUrl(value) {
  const trimmed = String(value ?? "").trim();
  if (
    /[\u0000-\u001f\\]/u.test(trimmed) ||
    /^(?:javascript|vbscript|data|file):/iu.test(trimmed)
  ) {
    throw new Error("Unsupported source URL: " + trimmed.slice(0, 100));
  }
  return trimmed;
}

function literalHtml(node, topLevel) {
  if (node.type !== "html") return;
  const value = node.value;
  if (inlineHtml.test(value.trim())) return;
  // Non-semantic/unsupported raw tags stay visible as literal source, never executable.
  if (topLevel) {
    node.type = "paragraph";
    node.children = [{ type: "text", value }];
    delete node.value;
  } else {
    node.type = "text";
  }
}

function html(nodes) {
  return String(serializer.stringify({ type: "root", children: nodes }));
}

function sourceMarkers(node) {
  const result = [];
  visit(node, (current) => {
    const id = current.properties?.dataSourceNode;
    if (id) result.push(String(id));
  });
  return result;
}

function collectTables(node) {
  const tables = [];
  visit(node, (current) => {
    if (current.type === "table")
      tables.push(
        current.children.map((row) =>
          row.children.map((cell) => normalizeText(sourceText(cell))),
        ),
      );
  });
  return tables;
}
function collectLists(node) {
  const lists = [];
  const scan = (current, depth = 0) => {
    if (current.type === "list") {
      lists.push({
        depth,
        ordered: current.ordered,
        start: current.ordered ? (current.start ?? 1) : null,
        items: current.children.length,
      });
      depth++;
    }
    for (const child of current.children ?? []) scan(child, depth);
  };
  scan(node);
  return lists;
}

/** Independently inventory original source blocks before any rendering/splitting. */
export function inventoryMarkdown(source, fileKey) {
  const parsed = envelope(source);
  const tree = parser.parse(parsed.body);
  const definitions = Object.fromEntries(
    tree.children
      .filter((node) => node.type === "definition")
      .map((node) => [node.identifier.toLowerCase(), node]),
  );
  const nodes = [];
  for (const node of tree.children) {
    if (node.type === "definition") continue;
    const blocks = node.type === "footnoteDefinition" ? node.children : [node];
    for (const block of blocks) {
      const links = [];
      visit(block, (child) => {
        const definition = child.identifier
          ? definitions[child.identifier.toLowerCase()]
          : null;
        if (
          ["link", "image", "linkReference", "imageReference"].includes(
            child.type,
          )
        ) {
          const url = child.url ?? definition?.url;
          if (url)
            links.push({
              kind: child.type.startsWith("image") ? "image" : "link",
              url: safeUrl(url),
              title: child.title ?? definition?.title ?? null,
            });
        }
      });
      nodes.push({
        id: nodeId(fileKey, block),
        type: block.type,
        isFootnote: node.type === "footnoteDefinition",
        text: normalizeText(sourceText(block)),
        code: block.type === "code" ? block.value : null,
        sourceStart: parsed.offset + block.position.start.offset,
        sourceEnd: parsed.offset + block.position.end.offset,
        sourceLine:
          block.position.start.line +
          String(source).slice(0, parsed.offset).split("\n").length -
          1,
        links,
        tables: collectTables(block),
        lists: collectLists(block),
      });
    }
  }
  if (new Set(nodes.map((node) => node.id)).size !== nodes.length)
    throw new Error("Duplicate source node identity.");
  return { frontmatter: parsed.frontmatter, nodes, body: parsed.body };
}

/** Render once, then partition the HAST. Definitions/footnotes retain their global identities. */
export function renderMarkdown(
  source,
  fileKey,
  { maxHtmlBytes = 180_000 } = {},
) {
  const original = inventoryMarkdown(source, fileKey);
  const tree = parser.parse(original.body);
  const inventory = new Map(original.nodes.map((node) => [node.id, node]));
  const slugger = new GithubSlugger();
  const anchorAliases = {};
  let title = "";
  let sourceHeadingId;
  let sourceHeadingAnchor;
  const firstTitle = tree.children.find(
    (node) => node.type === "heading" && node.depth === 1,
  );
  for (const node of tree.children) {
    const blocks = node.type === "footnoteDefinition" ? node.children : [node];
    for (const block of blocks) {
      if (block.type === "definition") continue;
      const id = nodeId(fileKey, block);
      block.data = {
        ...block.data,
        hProperties: { ...block.data?.hProperties, "data-source-node": id },
      };
      literalHtml(block, true);
    }
  }
  visit(tree, (node) => {
    if (node.type === "table") {
      // GFM normally truncates cells beyond the header width. Keep authored overflow
      // cells by padding the header and short rows, without inventing field values.
      const width = Math.max(
        ...node.children.map((row) => row.children.length),
      );
      node.align = Array.from(
        { length: width },
        (_, i) => node.align?.[i] ?? null,
      );
      for (const row of node.children)
        while (row.children.length < width)
          row.children.push({ type: "tableCell", children: [] });
    }
    if (node.type === "heading") {
      const originalSlug = slugger.slug(sourceText(node));
      const id = "pcr-" + originalSlug;
      anchorAliases[originalSlug] = id;
      node.data = {
        ...node.data,
        hProperties: { ...node.data?.hProperties, id },
      };
    }
    if (node.url) safeUrl(node.url);
    if (node.type === "html") literalHtml(node, false);
  });
  if (firstTitle) {
    title = sourceText(firstTitle);
    sourceHeadingId = nodeId(fileKey, firstTitle);
    sourceHeadingAnchor = firstTitle.data.hProperties.id;
    tree.children = tree.children.filter((node) => node !== firstTitle);
  }
  if (!title.trim())
    throw new Error(fileKey + ": source requires an H1 title.");
  const hast = converter.runSync(tree);
  const groups = [];
  let current = [];
  let bytes = 0;
  let previousHeading = false;
  let context = [];
  let startContext = [];
  const flush = () => {
    if (current.length && current.some((node) => node.type === "element")) {
      groups.push({ nodes: current, context: [...startContext] });
    }
    current = [];
    bytes = 0;
    startContext = [...context];
  };
  for (const node of hast.children) {
    const isHeading = node.type === "element" && /^h[1-6]$/u.test(node.tagName);
    const size = Buffer.byteLength(html([node]));
    const chapterBoundary = isHeading && Number(node.tagName.slice(1)) <= 3;
    if (
      bytes > 0 &&
      !previousHeading &&
      ((chapterBoundary && bytes >= maxHtmlBytes * 0.65) ||
        bytes + size > maxHtmlBytes * 3)
    )
      flush();
    current.push(node);
    bytes += size;
    if (isHeading) {
      const depth = Number(node.tagName.slice(1));
      const label = normalizeText(
        (node.children ?? []).map((child) => child.value ?? "").join(""),
      );
      context = context.filter((item) => item.depth < depth);
      context.push({ depth, label, anchor: String(node.properties.id) });
    }
    if (node.type === "element") previousHeading = isHeading;
  }
  flush();
  if (!groups.length) throw new Error(fileKey + ": source body is empty.");
  const parts = groups.map((group, index) => {
    const toc = [];
    const anchors = [];
    visit({ children: group.nodes }, (node) => {
      if (node.properties?.id) anchors.push(String(node.properties.id));
      if (node.type === "element" && /^h[2-6]$/u.test(node.tagName)) {
        const parsed = parseHTML("<div>" + html([node]) + "</div>");
        toc.push({
          title: normalizeText(
            visibleText(parsed.document.querySelector("div")),
          ),
          url: "#" + node.properties.id,
          depth: Number(node.tagName.slice(1)),
        });
      }
    });
    const ids = sourceMarkers({ children: group.nodes });
    if (index === 0 && sourceHeadingId) {
      ids.unshift(sourceHeadingId);
      anchors.push(sourceHeadingAnchor);
    }
    const firstBlock = group.nodes.find((node) => node.type === "element");
    const startsAtHeading =
      firstBlock?.tagName && /^h[1-6]$/u.test(firstBlock.tagName);
    const semanticAnchor = startsAtHeading
      ? String(firstBlock.properties.id)
      : (group.context.at(-1)?.anchor ?? "continuation");
    const suffix = startsAtHeading
      ? ""
      : "-continued-" +
        sha256(
          inventory.get(sourceMarkers(firstBlock)[0])?.text ??
            html([firstBlock]),
        ).slice(7, 15);
    const slug =
      [...semanticAnchor].slice(0, 40).join("") +
      "-" +
      sha256(semanticAnchor).slice(7, 13) +
      suffix;
    return {
      ...group,
      slug,
      title:
        index === 0
          ? title
          : title +
            " · " +
            (toc[0]?.title || group.context.at(-1)?.label || String(index + 1)),
      label: toc[0]?.title || group.context.at(-1)?.label || title,
      toc,
      anchors,
      sourceNodeIds: ids,
      sourceHeadingId: index === 0 ? sourceHeadingId : undefined,
    };
  });
  const renderedIds = parts.flatMap((part) => part.sourceNodeIds);
  const missing = [...inventory.keys()].filter(
    (id) => !renderedIds.includes(id),
  );
  const duplicates = renderedIds.filter(
    (id, index) => renderedIds.indexOf(id) !== index,
  );
  if (missing.length || duplicates.length)
    throw new Error(
      fileKey +
        ": incomplete source mapping: " +
        JSON.stringify({ missing, duplicates }),
    );
  return {
    title,
    frontmatter: original.frontmatter,
    inventory: original.nodes,
    anchorAliases,
    sourceHeadingAnchor,
    parts,
  };
}

export function finalizePart(
  part,
  { hrefForAnchor, resolveSourceUrl = (url) => url },
) {
  const copied = structuredClone(part.nodes);
  visit({ children: copied }, (node) => {
    const props = node.properties;
    if (!props) return;
    for (const key of ["href", "src"]) {
      if (typeof props[key] !== "string") continue;
      props[key] = props[key].startsWith("#")
        ? hrefForAnchor(decodeURIComponent(props[key].slice(1)))
        : resolveSourceUrl(props[key]);
    }
  });
  return html(copied);
}

export function verifyRenderedBlocks(
  document,
  inventory,
  expectedIds,
  { resolveLink = (url) => url, verifyLinks = false } = {},
) {
  const expected = new Map(inventory.map((node) => [node.id, node]));
  const markers = new Map();
  for (const node of document.querySelectorAll("[data-source-node]")) {
    const id = node.getAttribute("data-source-node");
    const matches = markers.get(id) ?? [];
    matches.push(node);
    markers.set(id, matches);
  }
  for (const id of expectedIds) {
    const matches = markers.get(id) ?? [];
    if (matches.length !== 1)
      throw new Error("Source node must render exactly once: " + id);
    const source = expected.get(id);
    if (!source) throw new Error("Unknown rendered source node: " + id);
    const actual = normalizeText(visibleText(matches[0]));
    if (actual !== source.text) {
      const at = [...source.text].findIndex((c, i) => c !== actual[i]);
      throw new Error(
        "Rendered text differs at " +
          id +
          " source line " +
          source.sourceLine +
          ": " +
          JSON.stringify({
            at,
            expected: source.text.slice(Math.max(0, at - 60), at + 160),
            actual: actual.slice(Math.max(0, at - 60), at + 160),
          }),
      );
    }
    const block = matches[0];
    const tables = [
      ...(block.localName === "table" ? [block] : []),
      ...block.querySelectorAll("table"),
    ];
    if (tables.length !== source.tables.length)
      throw new Error("Table structure changed at " + id);
    source.tables.forEach((rows, index) => {
      const actualRows = [...tables[index].querySelectorAll("tr")];
      if (actualRows.length !== rows.length)
        throw new Error("Table row count changed at " + id);
      rows.forEach((cells, rowIndex) => {
        const actualCells = [...actualRows[rowIndex].children].filter((cell) =>
          ["td", "th"].includes(cell.localName),
        );
        if (
          actualCells.length < cells.length ||
          cells.some(
            (value, cellIndex) =>
              normalizeText(visibleText(actualCells[cellIndex])) !== value,
          )
        )
          throw new Error("Table cell changed at " + id);
      });
    });
    const actualLists = [];
    const scanLists = (node, depth = 0) => {
      if (["ul", "ol"].includes(node.localName)) {
        actualLists.push({
          depth,
          ordered: node.localName === "ol",
          start:
            node.localName === "ol"
              ? Number(node.getAttribute("start") ?? 1)
              : null,
          items: [...node.children].filter((child) => child.localName === "li")
            .length,
        });
        depth++;
      }
      for (const child of node.children ?? []) scanLists(child, depth);
    };
    scanLists(block);
    if (JSON.stringify(actualLists) !== JSON.stringify(source.lists))
      throw new Error("List hierarchy changed at " + id);
    if (verifyLinks) {
      const actualLinks = [
        ...block.querySelectorAll("a[href],img[src]"),
      ].filter(
        (node) =>
          !node.hasAttribute("data-footnote-ref") &&
          !node.hasAttribute("data-footnote-backref"),
      );
      if (actualLinks.length !== source.links.length)
        throw new Error("Link count changed at " + id);
      source.links.forEach((link, i) => {
        const node = actualLinks[i],
          attribute = link.kind === "image" ? "src" : "href";
        if (
          decodeURI(node.getAttribute(attribute) ?? "") !==
            decodeURI(resolveLink(link.url)) ||
          node.getAttribute("title") !== link.title
        )
          throw new Error("Link destination/title changed at " + id);
      });
    }
    if (source.code !== null) {
      const code =
        matches[0].localName === "code"
          ? matches[0]
          : matches[0].querySelector("code");
      if (!code || code.textContent.replace(/\n$/u, "") !== source.code)
        throw new Error("Code whitespace changed at " + id);
    }
  }
}
