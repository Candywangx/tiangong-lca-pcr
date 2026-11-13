import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";
import { decodeRecordData, encodeRecordDataPack, type RecordDataEntry } from "../lib/record-data.ts";
import { writeRecordDataPacks, RECORD_DATA_PACK_BYTES } from "./record-data-packs.ts";
import type { PcrRecord } from "../lib/types.ts";
function fixtureRecord(options: Partial<PcrRecord>): PcrRecord {
  return {id: "test", slug: [], title: {}, status: "candidate", maturity: "authored_methodology", version: null,
    updatedAt: null, sourcePath: "test", translationStatus: {}, readiness: {status: "ready", blockers: [], warnings: []},
    urls: {}, pages: {}, downloads: [], dataPath: "data/test.json", dataUrl: "/generated/data/test.json", classificationRefs: [], modules: {}, ...options};
}

test("inspector transport restores all fields, scalar types, order and historical identities", () => {
  const original = JSON.parse('{"manifest":{"id":"测试","empty":"","flag":false,"nil":null,"__proto__":{"untouched":true}},"structured":{"rows":[[],{},0,"0",true],"text":"<script> & 中文\\n"}}');
  const historical = {manifest: {id: "测试", version: "1.0.0"}, structured: {rows: []}};
  const entries: RecordDataEntry[] = [["current", original.manifest, original.structured], ["history", historical.manifest, historical.structured]];
  const wire: unknown = JSON.parse(JSON.stringify(encodeRecordDataPack(entries)));
  assert.equal(JSON.stringify(decodeRecordData(wire, "current")), JSON.stringify(original));
  assert.equal(JSON.stringify(decodeRecordData(wire, "history")), JSON.stringify(historical));
  assert.equal(JSON.stringify(decodeRecordData(original)), JSON.stringify(original), "Legacy unkeyed files remain readable");
  assert.equal(Object.hasOwn({}, "untouched"), false);
});

test("malformed, duplicate, missing and unknown-version payloads fail without selecting another record", () => {
  for (const payload of [null, [], {}, {schemaVersion: 2, records: []}, {schemaVersion: 1, records: []},
    {schemaVersion: 1, records: [["k", {}, {}], ["k", {}, {}]]},
    {schemaVersion: 1, records: [["k", null, {}]]}, {schemaVersion: 1, records: [["k", {}, {} , 0]]},
    {schemaVersion: 1, records: Array.from({length: 33}, (_, id) => [String(id), {}, {}])},
    {schemaVersion: 1, records: [["k", {invalid: Infinity}, {}]]}]) assert.throws(() => decodeRecordData(payload, "k"));
  const packed = encodeRecordDataPack([["right", {}, {}]]);
  assert.throws(() => decodeRecordData(packed, "wrong"), /absent/u);
  assert.throws(() => decodeRecordData(packed), /Invalid/u);
  for (const legacy of [null, {}, {manifest: {}, structured: []}]) assert.throws(() => decodeRecordData(legacy));
});

test("dictionary packs preserve types, key order and own properties with actual UTF8 savings", () => {
  const original = JSON.parse('{"manifest":{"id":"中文","__proto__":{"safe":true},"constructor":"own","prototype":[],"toString":"own","":""},"structured":{"ordered":{"2":"two","1":"one","z":0,"a":"0"},"values":[null,false,true,[],{},-1,1.25,"0"],"text":"重复文本\\n\\t\\\"\\\\😀"}}');
  const text = "重复文本\n\t\"\\😀".repeat(1000);
  const entries: RecordDataEntry[] = Array.from({length: 16}, (_, i) => [String(i), original.manifest, {...original.structured, text}]);
  const encoded = encodeRecordDataPack(entries);
  assert.equal(encoded.schemaVersion, 2);
  assert.ok(Buffer.byteLength(JSON.stringify(encoded)) < Buffer.byteLength(JSON.stringify({schemaVersion: 1, records: entries})));
  const wire: unknown = JSON.parse(JSON.stringify(encoded));
  for (const [key, manifest, structured] of entries) assert.equal(JSON.stringify(decodeRecordData(wire, key)), JSON.stringify({manifest, structured}));
  assert.equal(Object.hasOwn({}, "safe"), false);
  assert.deepEqual(encodeRecordDataPack(entries), encoded, "First-appearance dictionary and literal selection are deterministic");
  assert.deepEqual(encodeRecordDataPack([["small", {}, {}]]), {schemaVersion: 1, records: [["small", {}, {}]]}, "Nonbeneficial encoding retains exact v1 shape");
});

test("dictionary grammar validates the entire pack before selecting a record", () => {
  const valid = {schemaVersion: 2, dictionary: ["k", "__proto__"], records: [["wanted", [2], [2, "literal", [1, 0, [0, 1], true, null]]]]};
  assert.equal(JSON.stringify(decodeRecordData(valid, "wanted")), '{"manifest":{},"structured":{"literal":["k",1,true,null]}}');
  const invalidValues: unknown[] = [0.5, -1, 2, NaN, Infinity, {}, [], [0], [0, 1, 2], [0, NaN], [0, Infinity], [3], [2, 0], [2, true, null], [2, [0, 0], null], [2, 0, true, "k", false], [2, 1, true, "__proto__", false]];
  for (const invalid of invalidValues) assert.throws(() => decodeRecordData({...valid, records: [...valid.records, ["later", [2], invalid]]}, "wanted"));
  for (const payload of [
    {...valid, dictionary: ["k", "k"]}, {...valid, dictionary: [1]},
    {schemaVersion: 2, dictionary: Array(1), records: [["wanted", [2], [2]]]},
    {...valid, records: [...valid.records, valid.records[0]]}, {...valid, extra: true},
    {...valid, records: [["wanted", [1], [2]]]}, {...valid, records: [["wanted", [2], [0, 1]]]},
    {...valid, records: Array.from({length: 33}, (_, i) => [String(i), [2], [2]])},
  ]) assert.throws(() => decodeRecordData(payload, "wanted"));
  assert.throws(() => decodeRecordData(valid, "missing"), /absent/u);
});

test("dictionary references charge every restored JSON occurrence before materialization", () => {
  const repeated = "x".repeat(900_000);
  const encoded = {schemaVersion: 2, dictionary: ["text", repeated], records: Array.from({length: 32}, (_, i) => [String(i), [2], [2, 0, 1]])};
  assert.ok(Buffer.byteLength(JSON.stringify(encoded)) < RECORD_DATA_PACK_BYTES);
  assert.throws(() => decodeRecordData(encoded, "0"), /restored|expansion|byte limit/i);
  const rows: RecordDataEntry[] = Array.from({length: 32}, (_, i) => [String(i), {}, {text: repeated}]);
  assert.throws(() => encodeRecordDataPack(rows), /restored|expansion|byte limit/i);
  const empty = {schemaVersion: 1, records: [["wanted", {}, {}], ["other", {}, {text: ""}]]};
  const overhead = Buffer.byteLength(JSON.stringify(empty));
  const boundary = (length: number) => ({schemaVersion: 2, dictionary: ["text", "x".repeat(length)], records: [["wanted", [2], [2]], ["other", [2], [2, 0, 1]]]});
  assert.deepEqual(decodeRecordData(boundary(25_000_000 - overhead - 1), "wanted"), {manifest: {}, structured: {}});
  assert.throws(() => decodeRecordData(boundary(25_000_000 - overhead), "wanted"), /restored|expansion|byte limit/i);
  const escaped = {schemaVersion: 2, dictionary: ["text", "中文\n\"\\".repeat(1000)], records: [["wanted", [2], [2, 0, 1]]]};
  assert.equal(JSON.stringify(decodeRecordData(escaped, "wanted")), JSON.stringify({manifest: {}, structured: {text: escaped.dictionary[1]}}));
  const escapeHeavy = "中文\n\"\\\u0000".repeat(10_000);
  const copies = Math.ceil(25_000_000 / Buffer.byteLength(JSON.stringify(escapeHeavy)));
  const hostile = {schemaVersion: 2, dictionary: ["rows", escapeHeavy], records: [["wanted", [2], [2, 0, [1, ...Array(copies).fill(1)]]]]};
  assert.ok(Buffer.byteLength(JSON.stringify(hostile)) < RECORD_DATA_PACK_BYTES);
  assert.throws(() => decodeRecordData(hostile, "wanted"), /restored|expansion|byte limit/i, "UTF8 bytes include every JSON escape, not only string characters");
});

test("dictionary nesting is bounded and legacy deeply nested data remains readable", () => {
  let within: import("../lib/record-data.ts").Json = "leaf";
  for (let i = 0; i < 127; i++) within = [within];
  const repeated = "shared".repeat(1000), exact = {manifest: {repeated}, structured: {repeated, within}};
  const atLimit = encodeRecordDataPack([["at-limit", exact.manifest, exact.structured]]);
  assert.equal(atLimit.schemaVersion, 2);
  assert.equal(JSON.stringify(decodeRecordData(atLimit, "at-limit")), JSON.stringify(exact));
  const pastLimit = encodeRecordDataPack([["past-limit", exact.manifest, {...exact.structured, within: [within]}]]);
  assert.equal(pastLimit.schemaVersion, 1, "An older valid deeply nested record retains v1 transport");
  let encoded: unknown = "leaf";
  for (let i = 0; i < 129; i++) encoded = [1, encoded];
  assert.throws(() => decodeRecordData({schemaVersion: 2, dictionary: [], records: [["deep", [2], [2, "value", encoded]]]}, "deep"), /depth|nest/i);
  let legacy: import("../lib/record-data.ts").Json = "leaf";
  for (let i = 0; i < 200; i++) legacy = {value: legacy};
  const data = {manifest: {}, structured: {deep: legacy}};
  const pack = encodeRecordDataPack([["deep", data.manifest, data.structured]]);
  assert.equal(pack.schemaVersion, 1);
  assert.equal(JSON.stringify(decodeRecordData(pack, "deep")), JSON.stringify(data));
});

test("writer flushes the restored-byte limit before encoding a highly shared candidate", () => {
  const stage = fs.mkdtempSync(path.join(tmpdir(), "pcr-shared-record-packs-"));
  try {
    fs.mkdirSync(path.join(stage, "data"));
    const records = Array.from({length: 32}, (_, i) => {
      const dataPath = `data/shared-${i}.json`;
      fs.writeFileSync(path.join(stage, dataPath), JSON.stringify({manifest: {}, structured: {text: "x".repeat(900_000)}}));
      return fixtureRecord({id: String(i), dataPath});
    });
    const stats = writeRecordDataPacks(stage, records);
    assert.equal(stats.files, 2);
    assert.ok(stats.largestBytes <= RECORD_DATA_PACK_BYTES);
    for (const record of records) {
      const wire: unknown = JSON.parse(fs.readFileSync(path.join(stage, "public", record.dataUrl.slice("/generated/".length)), "utf8"));
      assert.equal(JSON.stringify(decodeRecordData(wire, record.dataKey)), fs.readFileSync(path.join(stage, record.dataPath), "utf8"));
    }
  } finally {fs.rmSync(stage, {recursive: true, force: true});}
});

test("bounded packs reduce file count and restore every original current/history record", () => {
  const stage = fs.mkdtempSync(path.join(tmpdir(), "pcr-record-packs-"));
  try {
    fs.mkdirSync(path.join(stage, "data"));
    const records: PcrRecord[] = Array.from({length: 70}, (_, id) => {
      const dataPath = "data/" + id + ".json";
      fs.writeFileSync(path.join(stage, dataPath), JSON.stringify({manifest: {id, version: id % 2 ? "1.0.0" : null}, structured: {rule: "Full content 中文 ".repeat(1000)}}));
      return fixtureRecord({id: String(id), dataPath});
    });
    const stats = writeRecordDataPacks(stage, records);
    assert.ok(stats.files < records.length / 2);
    assert.ok(stats.largestBytes <= RECORD_DATA_PACK_BYTES);
    assert.equal(stats.records, records.length);
    assert.equal(fs.readdirSync(path.join(stage, "public/data")).length, stats.files);
    for (const record of records) {
      const packed: unknown = JSON.parse(fs.readFileSync(path.join(stage, "public", record.dataUrl.slice("/generated/".length)), "utf8"));
      assert.equal(JSON.stringify(decodeRecordData(packed, record.dataKey)), fs.readFileSync(path.join(stage, record.dataPath), "utf8"));
    }
    const large = fixtureRecord({dataPath: "data/large.json"});
    fs.writeFileSync(path.join(stage, large.dataPath), JSON.stringify({manifest: {}, structured: {text: "x".repeat(RECORD_DATA_PACK_BYTES)}}));
    const one = writeRecordDataPacks(stage, [large]);
    assert.equal(one.files, 1, "One large record stays whole under the existing per-file limit");
    assert.ok(one.largestBytes > RECORD_DATA_PACK_BYTES);
    assert.throws(() => writeRecordDataPacks(stage, [large, large]), /Duplicate/u);
  } finally {fs.rmSync(stage, {recursive: true, force: true});}
});
