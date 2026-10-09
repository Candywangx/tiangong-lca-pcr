/** Lossless wire encoding for the pinned FlexSearch export; never retokenizes content. */
type Posting = number[];
type EngineTerm = [string, (Posting | null)[]];
type PackedTerm = [string, number, number[]];
export interface PackedSearchMap { postings: Posting[]; terms: PackedTerm[] }

const record = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === "object" && !Array.isArray(value);
const natural = (value: unknown): value is number =>
  typeof value === "number" && Number.isSafeInteger(value) && value >= 0;
const posting = (value: unknown): value is Posting =>
  Array.isArray(value) && value.every(natural);
function invalid(): never { throw new Error("Invalid serialized search data."); }

/** Intern identical posting lists and omit null rank slots, retaining their exact length. */
export function packSearchMap(value: unknown): PackedSearchMap {
  if (!Array.isArray(value)) return invalid();
  const postings: Posting[] = [], terms: PackedTerm[] = [], identities = new Map<string, number>();
  for (const term of value) {
    if (!Array.isArray(term) || term.length !== 2 || typeof term[0] !== "string" || !Array.isArray(term[1])) return invalid();
    const ranks: number[] = [];
    for (const [rank, list] of term[1].entries()) {
      if (list === null) continue;
      if (!posting(list)) return invalid();
      const key = JSON.stringify(list);
      let id = identities.get(key);
      if (id === undefined) { id = postings.length; identities.set(key, id); postings.push([...list]); }
      ranks.push(rank, id);
    }
    terms.push([term[0], term[1].length, ranks]);
  }
  return { postings, terms };
}

/** Restore every rank, null slot, ID and term in original engine order. */
export function unpackSearchMap(value: unknown): EngineTerm[] {
  if (!record(value) || Object.keys(value).length !== 2 || !Array.isArray(value.postings) ||
      !value.postings.every(posting) || !Array.isArray(value.terms)) return invalid();
  const postings = value.postings, terms: EngineTerm[] = [];
  for (const term of value.terms) {
    if (!Array.isArray(term) || term.length !== 3 || typeof term[0] !== "string" ||
        !natural(term[1]) || !Array.isArray(term[2]) || term[2].length % 2 !== 0) return invalid();
    const length = term[1], pairs: unknown[] = term[2];
    // The pinned engine has nine rank slots; bound hostile wire lengths before allocation.
    if (length > 256) return invalid();
    const ranks: (Posting | null)[] = Array.from({ length }, () => null);
    let previous = -1;
    for (let i = 0; i < pairs.length; i += 2) {
      const rank = pairs[i], id = pairs[i + 1];
      if (!natural(rank) || rank <= previous || rank >= length || !natural(id) || id >= postings.length) return invalid();
      const list = postings[id]; if (!list) return invalid();
      ranks[rank] = [...list]; previous = rank;
    }
    terms.push([term[0], ranks]);
  }
  return terms;
}

export function encodeSearchEntry(key: string, serialized: string): unknown[] | PackedSearchMap {
  const parsed: unknown = JSON.parse(serialized);
  if (!Array.isArray(parsed) || JSON.stringify(parsed) !== serialized) return invalid();
  const packed = key.endsWith(".map") ? packSearchMap(parsed) : parsed;
  if (decodeSearchEntry(key, packed, 3) !== serialized) return invalid();
  return packed;
}

/** Versions 1/2 remain readable; only version 3 maps use pooled sparse ranks. */
export function decodeSearchEntry(key: string, value: unknown, version: 1 | 2 | 3): string {
  if (version === 1) { if (typeof value !== "string") return invalid(); return value; }
  if (version === 3 && key.endsWith(".map")) return JSON.stringify(unpackSearchMap(value));
  if (!Array.isArray(value)) return invalid();
  return JSON.stringify(value);
}
