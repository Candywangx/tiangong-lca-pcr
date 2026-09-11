import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, symlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import { parseYaml, renderYaml } from "../../packages/pcr-core/src/yaml-lite.mjs";

// Real pinned generator, worker and schemas; one canonical four-file PCR, zero unrelated content.
export function createPublisherFixture({ root, source }) {
  if (existsSync(root)) throw new Error("Publisher fixture requires a new directory");
  mkdirSync(root, { recursive: true });
  const copy = file => { mkdirSync(path.dirname(path.join(root, file)), { recursive: true }); cpSync(path.join(source, file), path.join(root, file), { recursive: true }); };
  for (const file of ["package.json", "package-lock.json", "builder/vocab", "builder/schemas/pcr-material-index.schema.json", "packages/pcr-core/src", "packages/pcr-core/schemas", "packages/pcr-viewer/scripts", "packages/pcr-viewer/static", "packages/pcr-viewer/schemas"]) copy(file);
  for (const file of readdirSync(path.join(source, "builder/goal-harness")).filter(f => f.endsWith(".mjs") && !f.endsWith(".test.mjs"))) copy(`builder/goal-harness/${file}`);
  const pcrPath = "library/pcrs/agriculture-forestry-and-fishery-products/products-of-agriculture-horticulture-and-market-gardening/wheat-seed";
  for (const file of ["manifest.yaml", "pcr.en-US.md", "pcr.zh-CN.md", "structured.yaml"]) copy(`${pcrPath}/${file}`);
  const manifest = parseYaml(readFileSync(path.join(root, pcrPath, "manifest.yaml"), "utf8"));
  const put = (file, value) => { mkdirSync(path.dirname(path.join(root, file)), { recursive: true }); writeFileSync(path.join(root, file), value); };
  const registryPath = "classifications/aliases/pcr-id-aliases.yaml";
  const registry = renderYaml({ schema_version: 1, registry_kind: "legacy-pcr-id-aliases", status: "current", aliases: [] });
  put(registryPath, registry);
  const leavesPath = "classifications/systems/cpc/3.0/normalized/leaves.json";
  const mappingPath = "classifications/mappings/cpc-3.0-to-pcr.yaml";
  const coveragePath = "classifications/indexes/cpc-3.0-coverage.json";
  const acceptance = { status: "accepted", decided_by: "viewer-fixture", decided_at_utc: "2026-09-10T00:00:00Z", decision_ref: "docs/adr/viewer-fixture.md" };
  const entry = { code: "01111", label: "Wheat seed", path_codes: ["01111"], path_titles: ["Wheat seed"], coverage_status: "mapped",
    mapping: { pcr_id: manifest.id, mapping_type: "exact", confidence: "reviewed", acceptance }, legacy_reference: null };
  const leaves = JSON.stringify({ schema_version: 1, classification_system: "CPC", classification_version: "3.0", leaves: [{ code: entry.code, title: entry.label, path_codes: entry.path_codes, path_titles: entry.path_titles }] });
  const mapping = renderYaml({ schema_version: 2, classification_system: "CPC", classification_version: "3.0", status: "current", mappings: [{ code: entry.code, label: entry.label, ...entry.mapping }] });
  const sha = value => `sha256:${createHash("sha256").update(value).digest("hex")}`;
  put(leavesPath, leaves); put(mappingPath, mapping); put(acceptance.decision_ref, "# Viewer fixture mapping\n");
  put(coveragePath, JSON.stringify({ schema_version: 1, index_kind: "classification-pcr-coverage", classification_system: "CPC", classification_version: "3.0",
    source: { contract_version: "2", generator: "builder/scripts/build-catalog.mjs", generator_version: "2",
      normalized_leaves: { path: leavesPath, hash_mode: "exact_bytes", sha256: sha(leaves) }, mapping: { path: mappingPath, hash_mode: "exact_bytes", sha256: sha(mapping) } },
    summary: { total: 1, mapped: 1, unmapped: 0, candidate_suggestion: 0, manual_review: 0, unknown: 0 }, entries: [entry] }));
  put("library/catalog.yaml", renderYaml({ schema_version: 1, catalog_status: "current", pcr_index: "library/indexes/pcr-index.yaml",
    pcr_id_aliases: { path: registryPath, hash_mode: "exact_bytes", sha256: `sha256:${createHash("sha256").update(registry).digest("hex")}`, entry_count: 0 },
    classification_mappings: [mappingPath], classification_coverage_indexes: [coveragePath], notes: ["One-PCR publisher recovery fixture"] }));
  put("library/indexes/pcr-index.yaml", renderYaml({ schema_version: 1, index_kind: "tiangong-pcr-material-catalog", status: "current", summary: { total: 1 },
    pcrs: [{ id: manifest.id, path: pcrPath, title: manifest.title, status: manifest.status, content_maturity: manifest.content_maturity }] }));
  put(".gitignore", "node_modules/\n.worktrees/\nlibrary/.pcr-builder-state/\n");
  symlinkSync(path.join(source, "node_modules"), path.join(root, "node_modules"), "dir");
  const git = args => execFileSync("git", args, { cwd: root, stdio: "ignore" });
  git(["init", "-q"]); git(["config", "user.name", "Viewer Fixture"]); git(["config", "user.email", "viewer-fixture@localhost"]);
  git(["add", "."]); git(["commit", "-qm", "one-PCR pinned publisher fixture"]);
  return root;
}
