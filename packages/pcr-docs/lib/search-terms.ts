const segmenters = new Map<string, Intl.Segmenter>();
export type SearchSegment = Readonly<{segment:string;isWordLike?:boolean}>;

/** Firefox can report Han word segments as non-word; punctuation stays excluded. */
export function searchTermsFromSegments(normalized:string,segments:Iterable<SearchSegment>) {
  const tokens = new Set<string>();
  for (const item of segments) {
    const term = item.segment;
    if (!item.isWordLike && !/^\p{Script=Han}+$/u.test(term)) continue;
    tokens.add(term);
    if (/\p{Script=Han}/u.test(term)) {
      const chars = [...term];
      for (let index = 0; index < chars.length; index++) {
        tokens.add(chars[index]!);
        if (index + 1 < chars.length)
          tokens.add(chars[index]! + chars[index + 1]!);
      }
    }
  }
  // Segmenters split UUIDs and machine rule identifiers; preserve them whole.
  for (const id of normalized.matchAll(/[a-z0-9]+(?:[_-][a-z0-9]+)+/gu))
    tokens.add(id[0]);
  return [...tokens];
}

/** Identical build/browser tokenization, retaining CJK words, units and exact IDs. */
export function searchTerms(text: unknown, language = "en") {
  const normalized = String(text).normalize("NFKC").toLowerCase();
  let segmenter = segmenters.get(language);
  if (!segmenter) {
    segmenter = new Intl.Segmenter(language, { granularity: "word" });
    segmenters.set(language, segmenter);
  }
  return searchTermsFromSegments(normalized,segmenter.segment(normalized));
}
