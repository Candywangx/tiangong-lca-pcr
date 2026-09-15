const segmenters = new Map();

/** Identical build/browser tokenization, retaining CJK words, units and exact IDs. */
export function searchTerms(text, language = "en") {
  const normalized = String(text).normalize("NFKC").toLowerCase();
  let segmenter = segmenters.get(language);
  if (!segmenter) {
    segmenter = new Intl.Segmenter(language, { granularity: "word" });
    segmenters.set(language, segmenter);
  }
  const tokens = new Set();
  for (const item of segmenter.segment(normalized)) {
    if (!item.isWordLike) continue;
    const term = item.segment;
    tokens.add(term);
    if (/\p{Script=Han}/u.test(term)) {
      const chars = [...term];
      for (let index = 0; index < chars.length; index++) {
        tokens.add(chars[index]);
        if (index + 1 < chars.length)
          tokens.add(chars[index] + chars[index + 1]);
      }
    }
  }
  // Segmenters split UUIDs and machine rule identifiers; also preserve them whole.
  for (const id of normalized.matchAll(/[a-z0-9]+(?:[_-][a-z0-9]+)+/gu))
    tokens.add(id[0]);
  return [...tokens];
}
