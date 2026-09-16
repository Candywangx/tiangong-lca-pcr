/**
 * Presentation-only metadata summaries.
 *
 * A summary is a bounded projection of text that already exists in the rendered source: the page's
 * own title plus, when the page owns one, the opening paragraph of that page's own source nodes. It
 * never invents methodology, authority or keyword material, and it changes no canonical byte, no
 * rendered block order and no download hash.
 *
 * The scope matters. The previous projection read the first paragraphs of the whole document for
 * every part of it, so a record and each of its chapters published the same description; catalog
 * pages published one sentence shared by every domain and every subdomain. Both are visible as
 * duplicate metadata leads in the shared content report.
 */
import { normalizeText } from "./markdown.mjs";

/** Upper bound, in Unicode code points, for one summary. */
export const SUMMARY_LIMIT = 170;

/**
 * A paragraph shorter than this, or one without a letter, cannot carry reader context: a bare
 * number, a stray reference or a "see 5.2" fragment is not a summary. Such a page falls back to its
 * title only, which is reported rather than padded with filler.
 */
const MIN_CONTEXT_CHARACTERS = 12;

const BOUNDARY_CHARACTERS = [" ", "。", "，", "、", "；", "：", ".", ",", ";", ":"];
const TRAILING_PUNCTUATION = /[\s。，、；：.,;:]+$/u;

/** A projection shows at most this many source paragraphs, exactly as the previous one did. */
const CONTEXT_PARAGRAPHS = 2;

export function separatorFor(language) {
  return language === "zh-CN" ? "：" : ": ";
}

/** Join source text into one line. Exported so tests can assert the exact normalization. */
export function plainText(value) {
  return normalizeText(value);
}

/**
 * Bound text to `limit` Unicode code points and never split a surrogate pair. A cut inside the
 * source's own sentence or word boundary is preferred; the fallback is a code-point slice.
 */
export function clampSummary(value, limit = SUMMARY_LIMIT) {
  const text = plainText(value);
  const characters = [...text];
  if (characters.length <= limit) return text;
  const clipped = characters.slice(0, Math.max(1, limit - 1)).join("");
  const boundary = Math.max(
    ...BOUNDARY_CHARACTERS.map((character) => clipped.lastIndexOf(character)),
  );
  const body =
    boundary >= Math.floor(limit * 0.6) ? clipped.slice(0, boundary) : clipped;
  return body.replace(TRAILING_PUNCTUATION, "") + "…";
}

/** The part of a rendered source block that is worth showing as context, or an empty string. */
export function contextParagraph(value) {
  const text = plainText(value);
  return [...text].length >= MIN_CONTEXT_CHARACTERS && /\p{L}/u.test(text)
    ? text
    : "";
}

/** Up to `count` useful paragraphs of one source scope, joined in source order. */
export function contextFrom(nodes, count = CONTEXT_PARAGRAPHS) {
  const parts = [];
  for (const node of nodes) {
    if (node.type !== "paragraph") continue;
    const text = contextParagraph(node.text);
    if (!text) continue;
    parts.push(text);
    if (parts.length >= count) break;
  }
  return plainText(parts.join(" "));
}

/**
 * Summary for one page of a rendered document.
 *
 * `nodes` are that page's own source nodes, so a chapter describes itself. `fallbackNodes` is only
 * passed for the first page of a document, whose own scope can legitimately be empty when the
 * source opens directly with a chapter heading; the document's opening prose is then its own
 * context rather than another page's.
 */
export function documentSummary({
  title,
  nodes = [],
  fallbackNodes = [],
  language,
  limit = SUMMARY_LIMIT,
}) {
  const label = clampSummary(title, limit);
  const context =
    contextFrom(nodes) || (fallbackNodes.length ? contextFrom(fallbackNodes) : "");
  const separator = separatorFor(language);
  const room = limit - [...label].length - [...separator].length;
  const kept = room > 0 ? [...context].slice(0, room).join("") : "";
  const joined = kept ? label + separator + context : label;
  const text = clampSummary(joined, limit);
  const unbounded = plainText(title) + (context ? separator + context : "");
  // Both flags describe the retained output, never the intent. The reader sees the title and the
  // separator first, so anything left after them is visible context; a boundary cut can land inside
  // the title (or exactly on the separator) and leave the reader with the title alone even though a
  // paragraph existed, and a title clipped before composition is still a clipped summary.
  const head = label + separator;
  const visible = text.startsWith(head) ? text.slice(head.length).replace(/…$/u, "") : "";
  return {
    text,
    titleOnly: visible === "",
    contextDropped: visible === "" && Boolean(context),
    clipped: text !== unbounded,
    label,
  };
}

/**
 * Summary for a generated catalog page. It names the page's own category title, its position
 * (domain or subdomain of a named parent) and the real record count, so two catalog pages cannot
 * publish the same sentence.
 */
export function catalogSummary({
  language,
  title,
  count,
  subcategories = 0,
  parent = "",
  limit = SUMMARY_LIMIT,
}) {
  const zh = language === "zh-CN";
  const documents = zh
    ? count + " 个 PCR 文档"
    : count + " PCR document" + (count === 1 ? "" : "s");
  const categories = zh
    ? subcategories + " 个子分类"
    : subcategories + " categor" + (subcategories === 1 ? "y" : "ies");
  const sentences = parent
    ? zh
      ? title + "（" + parent + "）：本子分类共 " + documents + "。"
      : title + " (" + parent + "): " + documents + " in this category."
    : zh
      ? title + "：本分类共 " + documents + "，分为 " + categories + "。"
      : title + ": " + documents + " in this domain, across " + categories + ".";
  const text = clampSummary(sentences, limit);
  return {
    text,
    titleOnly: false,
    contextDropped: false,
    clipped: text !== plainText(sentences),
    label: plainText(title),
  };
}
