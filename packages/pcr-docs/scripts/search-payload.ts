import { decodeSearchEntries, encodeSearchTermReferences, type SearchWireEntries } from '../lib/search-wire.ts';

/** One exact vocabulary for the existing language's unchanged shard inventory. */
export function encodeLanguageSearchShards(shards: readonly SearchWireEntries[]): {terms:string[];shards:SearchWireEntries[]} {
  const frequency = new Map<string,number>();
  for (const shard of shards) for (const key of shard.sparseMaps) {
    const value = shard.entries[key]!;
    const terms = shard.columnarMaps?.includes(key) ? value[0] as string[] : value.map(term => (term as unknown[])[0] as string);
    for (const term of terms) frequency.set(term, (frequency.get(term) ?? 0) + 1);
  }
  // Stable sorting retains first encounter order for frequency ties.
  const terms = [...frequency.keys()].sort((a,b) => frequency.get(b)! - frequency.get(a)!);
  const encoded = shards.map(shard => {
    const wire = encodeSearchTermReferences(shard,terms);
    const original = decodeSearchEntries(shard.entries,shard.sparseMaps,4,shard.scoreMasks,shard.postingDeltas,shard.columnarMaps);
    const restored = decodeSearchEntries(wire.entries,wire.sparseMaps,5,wire.scoreMasks,wire.postingDeltas,wire.columnarMaps,wire.termReferences,terms,wire.postingBases);
    if (JSON.stringify(restored) !== JSON.stringify(original)) throw new Error('Language search serialization did not restore the exact engine exports.');
    return wire;
  });
  return {terms,shards:encoded};
}
