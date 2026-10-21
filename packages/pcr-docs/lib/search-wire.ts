/** The pinned FlexSearch index uses nine scoring slots; wire v3-v5 retain every slot and ID. */
export const SEARCH_SCORE_SLOTS = 9;
const invalid = () => new Error('Invalid serialized search data.');
const mapKey = (key: string) => /^[1-9][0-9]*\.map$/u.test(key);
const object = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === 'object' && !Array.isArray(value);
const ids = (value: unknown): value is (string | number)[] => Array.isArray(value)
  && value.every(id => typeof id === 'string' || typeof id === 'number' && Number.isSafeInteger(id) && id >= 0);
type SparseTerm = [string, number, [number, (string | number)[]][]];
export interface SearchWireEntries {
  entries: Record<string, unknown[]>;
  sparseMaps: string[];
  scoreMasks?: true;
  postingDeltas?: true;
  columnarMaps?: string[];
  termReferences?: true;
  postingBases?: Record<string, number>;
}
function sparseMap(value: unknown[]): SparseTerm[] | undefined {
  const result: SparseTerm[] = [];
  for (const term of value) {
    if (!Array.isArray(term) || term.length !== 2 || typeof term[0] !== 'string'
      || !Array.isArray(term[1]) || term[1].length > SEARCH_SCORE_SLOTS) return;
    const slots: [number, (string | number)[]][] = [];
    for (const [position, posting] of term[1].entries()) {
      if (posting === null) continue;
      if (!ids(posting)) return;
      slots.push([position, posting]);
    }
    result.push([term[0], term[1].length, slots]);
  }
  return result;
}
function deltaPosting(value: (string | number)[]): (string | number)[] {
  return value.every(id => typeof id === 'number')
    ? value.map((id, index) => Number(id) - Number(value[index - 1] ?? 0)) : value;
}
function restorePosting(value: unknown, base = 0): unknown {
  if (!Array.isArray(value) || !value.every(id => typeof id === 'number')) return value;
  let previous = base;
  return value.map(delta => {
    if (!Number.isSafeInteger(delta) || !Number.isSafeInteger(previous + delta) || previous + delta < 0) throw invalid();
    previous += delta;
    return previous;
  });
}
/** A bounded header stores vector length and occupied slots; numeric postings use reversible deltas. */
function maskMap(value: SparseTerm[]): unknown[][] {
  return value.map(([term, length, slots]) => [term,
    length * 512 + slots.reduce((mask, [position]) => mask + 2 ** position, 0),
    ...slots.map(([, posting]) => deltaPosting(posting))]);
}
/** Keep the exact term order and score headers while removing per-term JSON tuple framing. */
function columnarMap(value: unknown[][]): unknown[] {
  const terms: string[] = [], headers: number[] = [], postings: unknown[] = [];
  for (const term of value) {
    terms.push(term[0] as string);
    headers.push(term[1] as number);
    postings.push(...term.slice(2));
  }
  return [terms, headers, postings];
}
function restoreColumnar(value: unknown[]): unknown[] {
  if (value.length !== 3 || !Array.isArray(value[0]) || !Array.isArray(value[1])
    || !Array.isArray(value[2]) || value[0].length !== value[1].length
    || value[2].length > value[0].length * SEARCH_SCORE_SLOTS) throw invalid();
  const terms = value[0] as unknown[], headers = value[1] as unknown[], postings = value[2] as unknown[];
  const result: unknown[] = [];
  let offset = 0;
  for (let index = 0; index < terms.length; index++) {
    const header = headers[index];
    if (typeof terms[index] !== 'string' || typeof header !== 'number' || !Number.isInteger(header)
      || header < 0 || header > SEARCH_SCORE_SLOTS * 512 + 511) throw invalid();
    const length = Math.floor(header / 512), mask = header % 512;
    if (mask >= 2 ** length) throw invalid();
    let count = 0;
    for (let position = 0; position < length; position++) if (mask & 2 ** position) count++;
    if (offset + count > postings.length) throw invalid();
    result.push([terms[index], header, ...postings.slice(offset, offset + count)]);
    offset += count;
  }
  if (offset !== postings.length) throw invalid();
  return result;
}
function restoreMasks(value: unknown[], base = 0): unknown[] {
  const nested = value.map(term => {
    if (!Array.isArray(term) || term.length < 2 || typeof term[0] !== 'string'
      || !Number.isInteger(term[1]) || term[1] < 0 || term[1] > SEARCH_SCORE_SLOTS * 512 + 511) throw invalid();
    const length = Math.floor(term[1] / 512), mask = term[1] % 512;
    if (mask >= 2 ** length) throw invalid();
    const slots: unknown[] = [];
    let offset = 2;
    for (let position = 0; position < length; position++) if (mask & 2 ** position) {
      if (offset >= term.length) throw invalid();
      slots.push([position, restorePosting(term[offset++], base)]);
    }
    if (offset !== term.length) throw invalid();
    return [term[0], length, slots];
  });
  return restoreMap(nested, 3);
}
function restoreMap(value: unknown[], version: 3 | 4 | 5): unknown[] {
  if (version !== 3) value = value.map(term => {
    if (!Array.isArray(term) || term.length < 2 || term.length % 2 !== 0) throw invalid();
    const slots: unknown[] = [];
    for (let offset = 2; offset < term.length; offset += 2) slots.push([term[offset], term[offset + 1]]);
    return [term[0], term[1], slots];
  });
  return value.map(term => {
    if (!Array.isArray(term) || term.length !== 3 || typeof term[0] !== 'string'
      || !Number.isInteger(term[1]) || term[1] < 0 || term[1] > SEARCH_SCORE_SLOTS
      || !Array.isArray(term[2])) throw invalid();
    const slots: (null | (string | number)[])[] = Array.from({ length: term[1] }, () => null);
    let previous = -1;
    for (const posting of term[2]) {
      if (!Array.isArray(posting) || posting.length !== 2 || !Number.isInteger(posting[0])
        || posting[0] <= previous || posting[0] >= slots.length || !ids(posting[1])) throw invalid();
      slots[posting[0]] = posting[1]; previous = posting[0];
    }
    return [term[0], slots];
  });
}
/** Compress only supported map shapes when smaller; every export key/value remains recoverable. */
export function encodeSearchEntries(entries: Record<string, unknown[]>, version: 3 | 4 = 3): SearchWireEntries {
  const result: Record<string, unknown[]> = Object.create(null) as Record<string, unknown[]>;
  const sparseMaps: string[] = [], columnarMaps: string[] = [];
  for (const [key, value] of Object.entries(entries)) {
    if (!Array.isArray(value)) throw invalid();
    const nested = mapKey(key) ? sparseMap(value) : undefined;
    const sparse = nested && (version === 4 ? maskMap(nested) : nested);
    const columns = version === 4 && sparse ? columnarMap(sparse as unknown[][]) : undefined;
    const encoded = columns && new TextEncoder().encode(JSON.stringify(columns)).length
      < new TextEncoder().encode(JSON.stringify(sparse)).length ? columns : sparse;
    if (encoded && new TextEncoder().encode(JSON.stringify(encoded)).length
      < new TextEncoder().encode(JSON.stringify(value)).length) {
      if (JSON.stringify(version === 4 ? restoreMasks(encoded === columns ? restoreColumnar(encoded) : encoded) : restoreMap(encoded, version)) !== JSON.stringify(value)) throw invalid();
      result[key] = encoded; sparseMaps.push(key);
      if (encoded === columns) columnarMaps.push(key);
    } else result[key] = value;
  }
  return version === 4 ? { entries: result, sparseMaps, scoreMasks: true, postingDeltas: true,
    ...(columnarMaps.length ? { columnarMaps } : {}) } : { entries: result, sparseMaps };
}
/** One exact language dictionary is shared by v5 shards; dictionary order has no search meaning. */
function dictionary(value: unknown): string[] {
  if (!Array.isArray(value) || ![...value].every(term => typeof term === 'string')
    || new Set(value).size !== value.length) throw invalid();
  return value as string[];
}
function referenceTerms(value: unknown[], columnar: boolean, lookup: (term: unknown) => unknown): unknown[] {
  if (columnar) {
    if (value.length !== 3 || !Array.isArray(value[0])) throw invalid();
    return [value[0].map(lookup), value[1], value[2]];
  }
  return value.map(term => {
    if (!Array.isArray(term) || term.length < 2) throw invalid();
    return [lookup(term[0]), ...term.slice(1)];
  });
}
/** Numeric-only postings already carry signed deltas; only their first ID is offset by the map base. */
function offsetPostings(value: unknown[], columnar: boolean, base: number): unknown[] {
  const offset = (posting: unknown): unknown => {
    if (!Array.isArray(posting) || posting.length === 0 || !posting.every(id => typeof id === 'number')) return posting;
    const first = posting[0] as number;
    return [first - base, ...posting.slice(1)];
  };
  if (columnar) {
    if (!Array.isArray(value[2])) throw invalid();
    return [value[0], value[1], value[2].map(offset)];
  }
  return value.map(term => {
    if (!Array.isArray(term)) throw invalid();
    return [term[0], term[1], ...term.slice(2).map(offset)];
  });
}
/** Add v5 references only to supported v4 maps, preserving unmarked/native exports byte for byte. */
export function encodeSearchTermReferences(wire: SearchWireEntries, terms: readonly string[]): SearchWireEntries {
  const values = dictionary(terms), lookup = new Map(values.map((term, index) => [term, index]));
  if (wire.termReferences !== undefined || wire.postingBases !== undefined
    || wire.scoreMasks !== true || wire.postingDeltas !== true) throw invalid();
  decodeSearchEntries(wire.entries, wire.sparseMaps, 4, wire.scoreMasks, wire.postingDeltas, wire.columnarMaps);
  const selected = new Set(wire.sparseMaps), columns = new Set(wire.columnarMaps ?? []);
  const entries: Record<string, unknown[]> = Object.create(null) as Record<string, unknown[]>;
  const postingBases: Record<string, number> = Object.create(null) as Record<string, number>;
  for (const [key, value] of Object.entries(wire.entries)) {
    if (!selected.has(key)) { entries[key] = value; continue; }
    const columnar = columns.has(key);
    const postingLists = columnar ? value[2] : value.flatMap(term => (term as unknown[]).slice(2));
    if (!Array.isArray(postingLists)) throw invalid();
    let base: number | undefined;
    for (const posting of postingLists) if (Array.isArray(posting) && posting.length
      && posting.every(id => typeof id === 'number')) {
      const first = posting[0] as number;
      base = base === undefined ? first : Math.min(base, first);
    }
    const referenced = referenceTerms(value, columnar, term => {
      if (typeof term !== 'string') throw invalid();
      const index = lookup.get(term);
      if (index === undefined) throw invalid();
      return index;
    });
    entries[key] = base !== undefined && base > 0 ? offsetPostings(referenced, columnar, base) : referenced;
    if (base !== undefined && base > 0) postingBases[key] = base;
  }
  return {...wire, entries, termReferences: true,
    ...(Object.keys(postingBases).length ? {postingBases} : {})};
}
/** Decode bounded v3-v5 data before engine import; unmarked arrays remain native. */
export function decodeSearchEntries(entries: unknown, sparseMaps: unknown, version: 3 | 4 | 5 = 3,
  scoreMasks?: unknown, postingDeltas?: unknown, columnarMaps?: unknown,
  termReferences?: unknown, terms?: unknown, postingBases?: unknown): Record<string, unknown[]> {
  if (version !== 3 && version !== 4 && version !== 5) throw invalid();
  if ((scoreMasks !== undefined || postingDeltas !== undefined)
    && (version === 3 || scoreMasks !== true || postingDeltas !== true)) throw invalid();
  if (!object(entries) || !Array.isArray(sparseMaps)
    || ![...sparseMaps].every(key => typeof key === 'string' && mapKey(key) && Object.hasOwn(entries, key))
    || new Set(sparseMaps).size !== sparseMaps.length) throw invalid();
  const selected = new Set(sparseMaps as string[]);
  if (columnarMaps !== undefined && (version === 3 || scoreMasks !== true || postingDeltas !== true
    || !Array.isArray(columnarMaps) || ![...columnarMaps].every(key => typeof key === 'string' && selected.has(key))
    || new Set(columnarMaps).size !== columnarMaps.length)) throw invalid();
  const columnar = new Set((columnarMaps ?? []) as string[]);
  let values: string[] | undefined;
  if (termReferences !== undefined || terms !== undefined) {
    if (version !== 5 || termReferences !== true || scoreMasks !== true || postingDeltas !== true) throw invalid();
    values = dictionary(terms);
  }
  if (postingBases !== undefined && (version !== 5 || scoreMasks !== true || postingDeltas !== true
    || !object(postingBases) || !Object.entries(postingBases).every(([key, base]) => selected.has(key)
      && typeof base === 'number' && Number.isSafeInteger(base) && base >= 0))) throw invalid();
  const bases = (postingBases ?? {}) as Record<string, number>;
  const result: Record<string, unknown[]> = Object.create(null) as Record<string, unknown[]>;
  for (const [key, value] of Object.entries(entries)) {
    if (!Array.isArray(value)) throw invalid();
    let restored = value;
    if (selected.has(key)) {
      if (values) restored = referenceTerms(value, columnar.has(key), index => {
        if (typeof index !== 'number' || !Number.isSafeInteger(index) || index < 0 || index >= values.length) throw invalid();
        return values[index];
      });
      restored = scoreMasks === true
        ? restoreMasks(columnar.has(key) ? restoreColumnar(restored) : restored, Object.hasOwn(bases, key) ? bases[key] : 0)
        : restoreMap(restored, version);
    }
    result[key] = restored;
  }
  return result;
}
