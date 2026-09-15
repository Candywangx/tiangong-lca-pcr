import { Index } from "./search-engine.mjs";
import { searchTerms } from "./search-terms.mjs";
let loaded;
async function load(language) {
  const response = await fetch(
    `/generated/search/${encodeURIComponent(language)}/manifest.json`,
  );
  if (!response.ok) throw new Error("Search index is unavailable.");
  const manifest = await response.json();
  if (manifest.schemaVersion !== 1 || manifest.language !== language)
    throw new Error("Invalid search manifest.");
  const shards = [];
  for (const item of manifest.shards) {
    if (!item.url.startsWith("/generated/search/"))
      throw new Error("Invalid search shard.");
    const response = await fetch(item.url);
    if (!response.ok) throw new Error("Search shard is unavailable.");
    const data = await response.json();
    const index = new Index({
      tokenize: "strict",
      encode: (value) => searchTerms(value, language),
    });
    for (const [key, payload] of Object.entries(data.entries)) {
      if (typeof payload !== "string")
        throw new Error("Invalid serialized search data.");
      index.import(key, payload);
    }
    shards.push({
      index,
      records: new Map(data.records.map((record) => [record.id, record])),
    });
  }
  return shards;
}
self.onmessage = async ({ data: { id, query, language } }) => {
  try {
    loaded ??= load(language);
    const shards = await loaded;
    const results = [],
      seen = new Set();
    for (const shard of shards)
      for (const hit of shard.index.search(query, { limit: 30 })) {
        const record = shard.records.get(String(hit));
        if (record && !seen.has(record.url)) {
          seen.add(record.url);
          results.push(record);
        }
      }
    const normalized = query.trim().toLowerCase();
    const rank = (title) => {
      const value = title.toLowerCase();
      return (
        (value === normalized
          ? 100
          : value.startsWith(normalized)
            ? 50
            : value.includes(normalized)
              ? 20
              : 0) -
        value.length / 10000
      );
    };
    results.sort(
      (a, b) =>
        rank(b.content) - rank(a.content) ||
        a.content.localeCompare(b.content, language),
    );
    self.postMessage({ id, results: results.slice(0, 30) });
  } catch (error) {
    loaded = undefined;
    self.postMessage({
      id,
      error: error instanceof Error ? error.message : "Search failed.",
    });
  }
};
