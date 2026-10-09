import test from "node:test";
import assert from "node:assert/strict";
import { Index } from "flexsearch";
import { searchTerms } from "../lib/search-terms.ts";
import { packSearchMap, unpackSearchMap, encodeSearchEntry, decodeSearchEntry } from "../lib/search-format.ts";

test("pooled sparse ranks preserve exact term order, nulls, empty slots and ID order", () => {
  const source = [["quoted \"term\"\\珊瑚", [null, [9, 2, 9], null, [], null]], ["other", [[9, 2, 9]]], ["empty", []], ["nulls", [null, null]]];
  const before = JSON.stringify(source), packed = packSearchMap(source);
  assert.deepEqual(packed.postings, [[9, 2, 9], []]);
  assert.deepEqual(packed.terms[0], ["quoted \"term\"\\珊瑚", 5, [1, 0, 3, 1]]);
  assert.equal(JSON.stringify(unpackSearchMap(JSON.parse(JSON.stringify(packed)))), before);
  assert.equal(JSON.stringify(source), before, "Encoding never mutates engine exports");
  assert.deepEqual(packSearchMap(source), packed, "Encoding is deterministic");
});

test("repeated postings and absent rank slots shrink without dropping a single ID", () => {
  const source = Array.from({ length: 100 }, (_, i) => ["term-" + i, [null, null, null, Array.from({ length: 40 }, (_, id) => id), null, null]]);
  const packed = packSearchMap(source);
  assert.ok(JSON.stringify(packed).length < JSON.stringify(source).length / 2);
  assert.equal(JSON.stringify(unpackSearchMap(packed)), JSON.stringify(source));
});

test("real pinned English and Chinese engine exports roundtrip byte-for-byte and retain all query results", async () => {
  for (const language of ["en-US", "zh-CN"]) {
    const source = new Index({ tokenize: "strict", encode: (value: unknown) => searchTerms(value, language) });
    const restored = new Index({ tokenize: "strict", encode: (value: unknown) => searchTerms(value, language) });
    for (const [id, text] of ["Wheat seed 珊瑚", "Organic wheat 珊瑚材料", "Protocol wheat pcr_rule 550e8400-e29b-41d4-a716-446655440000"].entries()) source.add(id, text);
    await source.export((key, original) => {
      const encoded = encodeSearchEntry(key, original);
      const decoded = decodeSearchEntry(key, JSON.parse(JSON.stringify(encoded)), 3);
      assert.equal(decoded, original);
      restored.import(key, decoded);
    });
    for (const query of ["wheat", "seed", "珊瑚", "瑚", "pcr_rule", "550e8400-e29b-41d4-a716-446655440000", "absent"])
      assert.deepEqual(restored.search(query, { limit: 30 }), source.search(query, { limit: 30 }));
  }
});

test("legacy strings and arrays remain exact while mixed wire versions fail closed", () => {
  const original = '[["seed",[null,[4,1]]]]';
  assert.equal(decodeSearchEntry("1.map", original, 1), original);
  assert.equal(decodeSearchEntry("1.map", JSON.parse(original), 2), original);
  assert.equal(decodeSearchEntry("1.map", encodeSearchEntry("1.map", original), 3), original);
  assert.equal(decodeSearchEntry("1.reg", encodeSearchEntry("1.reg", "[4,1]"), 3), "[4,1]");
  for (const run of [() => decodeSearchEntry("1.map", [], 1), () => decodeSearchEntry("1.map", original, 2), () => decodeSearchEntry("1.map", JSON.parse(original), 3), () => decodeSearchEntry("1.reg", {}, 3), () => encodeSearchEntry("1.map", "{}"), () => encodeSearchEntry("1.reg", "[ 1 ]")])
    assert.throws(run, /Invalid serialized search data/);
});

test("invalid engine term, rank or ID shapes cannot be silently compressed", () => {
  for (const value of [null, {}, [null], [[1, []]], [["x"]], [["x", {}]], [["x", [undefined]]], [["x", [[-1]]]], [["x", [[1.5]]]], [["x", [[Infinity]]]], [["x", [["1"]]]]])
    assert.throws(() => packSearchMap(value), /Invalid serialized search data/);
});

test("malformed compact maps, unsafe lengths, duplicate ranks and dangling pool references fail closed", () => {
  const invalid = [null, [], {}, { postings: [], terms: [], extra: true }, { postings: [null], terms: [] }, { postings: [[-1]], terms: [] }, { postings: [[1.5]], terms: [] }, { postings: [], terms: [null] }, { postings: [], terms: [[1, 0, []]] }, { postings: [], terms: [["x", -1, []]] }, { postings: [], terms: [["x", 1.5, []]] }, { postings: [], terms: [["x", 257, []]] }, { postings: [], terms: [["x", 1, [0]]] }, { postings: [[1]], terms: [["x", 1, [0, 1]]] }, { postings: [[1]], terms: [["x", 1, [1, 0]]] }, { postings: [[1]], terms: [["x", 2, [1, 0, 0, 0]]] }, { postings: [[1]], terms: [["x", 1, [0, 0, 0, 0]]] }, { postings: [[1]], terms: [["x", 1, [0, -1]]] }, { postings: [[1]], terms: [["x", 1, [0, "0"]]] }];
  for (const value of invalid) assert.throws(() => unpackSearchMap(value), /Invalid serialized search data/);
});

test("restored posting lists do not alias one another or the wire payload", () => {
  const packed = packSearchMap([["a", [[1, 2]]], ["b", [[1, 2]]]]);
  const restored = unpackSearchMap(packed);
  restored[0]![1][0]!.push(9);
  assert.deepEqual(restored[1]![1][0], [1, 2]);
  assert.deepEqual(packed.postings, [[1, 2]]);
});
