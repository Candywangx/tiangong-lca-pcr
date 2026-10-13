/** The pinned FlexSearch index uses nine scoring slots; wire v3/v4 retain every slot and ID. */
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
function restorePosting(value: unknown): unknown {
  if (!Array.isArray(value) || !value.every(id => typeof id === 'number')) return value;
  let previous = 0;
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
function restoreMasks(value: unknown[]): unknown[] {
  const nested = value.map(term => {
    if (!Array.isArray(term) || term.length < 2 || typeof term[0] !== 'string'
      || !Number.isInteger(term[1]) || term[1] < 0 || term[1] > SEARCH_SCORE_SLOTS * 512 + 511) throw invalid();
    const length = Math.floor(term[1] / 512), mask = term[1] % 512;
    if (mask >= 2 ** length) throw invalid();
    const slots: unknown[] = [];
    let offset = 2;
    for (let position = 0; position < length; position++) if (mask & 2 ** position) {
      if (offset >= term.length) throw invalid();
      slots.push([position, restorePosting(term[offset++])]);
    }
    if (offset !== term.length) throw invalid();
    return [term[0], length, slots];
  });
  return restoreMap(nested, 3);
}
function restoreMap(value: unknown[], version: 3 | 4): unknown[] {
  if (version === 4) value = value.map(term => {
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
  const sparseMaps: string[] = [];
  for (const [key, value] of Object.entries(entries)) {
    if (!Array.isArray(value)) throw invalid();
    const nested = mapKey(key) ? sparseMap(value) : undefined;
    const sparse = nested && (version === 4 ? maskMap(nested) : nested);
    if (sparse && new TextEncoder().encode(JSON.stringify(sparse)).length
      < new TextEncoder().encode(JSON.stringify(value)).length) {
      if (JSON.stringify(version === 4 ? restoreMasks(sparse) : restoreMap(sparse, version)) !== JSON.stringify(value)) throw invalid();
      result[key] = sparse; sparseMaps.push(key);
    } else result[key] = value;
  }
  return version === 4 ? { entries: result, sparseMaps, scoreMasks: true, postingDeltas: true } : { entries: result, sparseMaps };
}
/** Decode the declared bounded v3/v4 format before engine import; unmarked arrays remain native. */
export function decodeSearchEntries(entries: unknown, sparseMaps: unknown, version: 3 | 4 = 3, scoreMasks?: unknown, postingDeltas?: unknown): Record<string, unknown[]> {
  if ((scoreMasks !== undefined || postingDeltas !== undefined)
    && (version !== 4 || scoreMasks !== true || postingDeltas !== true)) throw invalid();
  if (!object(entries) || !Array.isArray(sparseMaps)
    || !sparseMaps.every(key => typeof key === 'string' && mapKey(key) && Object.hasOwn(entries, key))
    || new Set(sparseMaps).size !== sparseMaps.length) throw invalid();
  const selected = new Set(sparseMaps as string[]);
  const result: Record<string, unknown[]> = Object.create(null) as Record<string, unknown[]>;
  for (const [key, value] of Object.entries(entries)) {
    if (!Array.isArray(value)) throw invalid();
    result[key] = selected.has(key) ? (scoreMasks === true ? restoreMasks(value) : restoreMap(value, version)) : value;
  }
  return result;
}
