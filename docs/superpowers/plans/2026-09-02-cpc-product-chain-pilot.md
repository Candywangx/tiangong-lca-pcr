# CPC Product-Chain Pilot Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a validated three-chain CPC 3.0 planning artifact that distinguishes executable PCR dependencies from review-only candidates and deterministically renders a concise human report.

**Architecture:** A hand-reviewed YAML file under `builder/planning/` is the only authored pilot source. A focused core module validates repository-derived node state, typed evidence locators, readiness rules, and DAG waves; a thin script atomically renders/checks Markdown. Existing `pcr-core` classification resolution and PCR readiness logic remain authoritative for coverage, mapping, and projection integrity.

**Tech Stack:** Node.js ESM, AJV 8, repository `yaml-lite`, `pcr-core` resolvers, `node:test`, Markdown and Mermaid.

**Design:** `docs/superpowers/specs/2026-09-02-cpc-product-chain-pilot-design.md`

---

## File Map

- Create `builder/schemas/cpc-product-chain.schema.json`: authored YAML contract only.
- Modify `builder/lib/schema-contracts.mjs`: register and export the new builder contract.
- Modify `builder/lib/schema-contracts.test.mjs`: prove valid and invalid planning documents use the registry.
- Create `builder/lib/cpc-product-chain.mjs`: derive node state, validate evidence, calculate scheduling status/waves, and render deterministic Markdown.
- Create `builder/lib/cpc-product-chain.test.mjs`: pure unit tests with injected node/evidence resolvers.
- Create `builder/scripts/render-cpc-product-chain.mjs`: repository adapter, safe YAML read, atomic report write, and `--check` CLI.
- Create `builder/scripts/render-cpc-product-chain.test.mjs`: build/check and repository-adapter tests.
- Modify `packages/pcr-core/src/index.mjs`: expose one verified projection snapshot so readiness and evidence bytes are checked atomically.
- Modify `packages/pcr-core/index.test.mjs`: prove the verified snapshot rejects stale or substituted projection bytes.
- Create `builder/planning/cpc-product-chain-pilot.yaml`: reviewed three-chain source.
- Generate `builder/planning/cpc-product-chain-pilot.md`: deterministic report.
- Modify `package.json`: add `cpc-chains:build`, `cpc-chains:check`, and the check to `lint`.
- Modify `builder/docs/index.md`: point maintainers to the pilot planning artifact and commands.
- Modify `builder/README.md`: document command purpose, inputs, outputs, and non-authoritative planning status.

## Chunk 1: Contracts and Analysis Core

### Task 1: Add the authored YAML Schema contract

**Files:**
- Create: `builder/schemas/cpc-product-chain.schema.json`
- Modify: `builder/lib/schema-contracts.mjs`
- Modify: `builder/lib/schema-contracts.test.mjs`

- [ ] **Step 1: Write failing contract tests**

Add imports for `assertCpcProductChain` and `validateCpcProductChain`. Add a minimal valid document containing one chain, two nodes, one `primary_feedstock` edge, one typed PCR projection locator, and no official sources. Assert it validates. Add failures for an unknown evidence state, unsupported field/inventory locators, cross-shape official source records without an exact locator, and every class of prohibited derived property: `scheduling_status`, `coverage_status`, `mapping`, `pcr_id`, `pcr_path`, `readiness`, `projection_status`, `blockers`, `waves`, and `counts`.

- [ ] **Step 2: Run the focused tests and confirm failure**

Run: `node --test builder/lib/schema-contracts.test.mjs`

Expected: FAIL because the new exports and Schema do not exist.

- [ ] **Step 3: Create the Schema**

Define Draft 2020-12 `$id` `https://tiangong-lca.org/schemas/pcr/v1/cpc-product-chain.schema.json` with `additionalProperties: false` throughout. Require:

```json
{
  "schema_version": 1,
  "artifact_kind": "cpc_product_chain_pilot",
  "status": "draft",
  "classification_system": "CPC",
  "classification_version": "3.0",
  "official_sources": [],
  "chains": []
}
```

Each chain requires `id`, `title`, `description`, `nodes`, and `edges`. Nodes require `id`, `code`, `label`, `stage`, and `role`; stage and role are non-empty planning labels rather than controlled lifecycle tokens. Edges require `id`, `from`, `to`, `relationship_type: primary_feedstock`, `evidence_status`, `boundary_assessment`, `interface`, `route_conditions`, `evidence`, and `review_notes`. `interface` requires the three non-empty strings `upstream_output_condition`, `downstream_starting_condition`, and `fit_summary`. `route_conditions` and `review_notes` are arrays of non-empty strings, and `evidence` is a non-empty array. The evidence alternatives are:

```json
{
  "kind": "pcr_projection",
  "pcr_id": "pcr...",
  "locator": {
    "kind": "field",
    "field_path": "boundary_abstraction.declared_starting_condition"
  },
  "supports": "..."
}
```

or:

```json
{
  "kind": "pcr_projection",
  "pcr_id": "pcr...",
  "locator": {
    "kind": "inventory_row",
    "process_id": "...",
    "direction": "inputs",
    "flow_type": "product",
    "row_id": "...",
    "field": "name"
  },
  "supports": "..."
}
```

or `{ "kind": "official_source", "source_id": "...", "supports": "..." }`.

Use the exhaustive field allowlists from the design. Official sources require `id`, `title`, `publisher`, `url`, `locator`, `supports`, and `accessed_at`; text values are non-empty strings, `url` uses URI format, and `accessed_at` uses the strict calendar-date pattern `^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$` rather than an AJV format keyword. `publication_id` and `publication_date` are optional non-empty strings. Add contract tests for missing and malformed `accessed_at`. `evidence_status` is exactly `supported_by_pcr`, `supported_by_official_source`, or `semantic_candidate`; `boundary_assessment` is exactly `aligned`, `gap`, `overlap`, or `needs_review`. All authored objects use `additionalProperties: false`, so coverage, mapping, PCR identity/path, readiness, projection state, scheduling, blockers, waves, and counts cannot be authored.

- [ ] **Step 4: Register the contract and exports**

Add `cpc-product-chain.schema.json` to `BUILDER_SCHEMA_FILES` and export:

```js
export const validateCpcProductChain = (value) =>
  validateBuilderContract("cpc-product-chain.schema.json", value);
export const assertCpcProductChain = (value, options = {}) =>
  assertBuilderContract("cpc-product-chain.schema.json", value, options);
```

- [ ] **Step 5: Run focused tests**

Run: `node --test builder/lib/schema-contracts.test.mjs`

Expected: PASS.

- [ ] **Step 6: Commit the contract**

```bash
git add builder/schemas/cpc-product-chain.schema.json builder/lib/schema-contracts.mjs builder/lib/schema-contracts.test.mjs
git commit -m "feat(builder): define CPC product-chain contract"
```

### Task 2: Implement dependency analysis and report rendering

**Files:**
- Create: `builder/lib/cpc-product-chain.mjs`
- Create: `builder/lib/cpc-product-chain.test.mjs`

- [ ] **Step 1: Write failing pure-analysis tests**

Use injected `resolveNode(node)` and `resolvePcrEvidence(evidence, downstreamResolution)` functions. Cover:

- labels and endpoint ids are validated;
- edge endpoints must exist inside the same chain; a node id in another chain fails;
- a supported, aligned, evidence-valid edge whose endpoints both have `usable_for_guidance: true` derives `ready`;
- `review_required` readiness is accepted when `usable_for_guidance` is true;
- table-driven negatives cover upstream false, downstream false, each of `gap`, `overlap`, and `needs_review`, no downstream-bound PCR locator, non-primary evidence state, and unmapped endpoints;
- semantic and official-only edges derive `blocked`;
- an unmapped endpoint blocks an otherwise PCR-supported edge;
- PCR evidence naming a PCR other than the accepted downstream target fails;
- missing source ids, unresolved typed locators, and a `supported_by_pcr` edge without a valid locator for the resolved downstream PCR fail rather than silently downgrading;
- duplicate ids and unknown endpoints fail;
- only nodes incident to ready edges enter executable waves;
- blocked isolated nodes are review-only;
- adding blocked edges before, after, or between ready nodes does not change ready waves;
- a cycle among ready edges fails;
- exact rendered-report fixture is byte-stable and asserts the generated-file banner, CPC-not-process-graph caveat, ready `-->` and blocked `-.->` Mermaid arrows, all edge-table columns, executable waves, manual-review queue, and official-source list.

- [ ] **Step 2: Run the focused tests and confirm failure**

Run: `node --test builder/lib/cpc-product-chain.test.mjs`

Expected: FAIL because the module does not exist.

- [ ] **Step 3: Implement focused exports**

Create these public functions:

```js
export function analyzeCpcProductChain(document, { resolveNode, resolvePcrEvidence }) {}
export function renderCpcProductChainReport(analysis) {}
```

The injected interfaces are exact:

```js
resolveNode({ chainId, node }) => ({
  code,
  label,
  coverage_status,
  pcr: null || {
    id,
    path,
    readiness: { status, usable_for_guidance, projection_fingerprint }
  }
})

resolvePcrEvidence({ chainId, edge, evidence, downstream }) => ({
  pcr_id,
  source_path,
  locator,
  value
})
```

The production adapter owns repository resolution; the core never reads an authored mapping or readiness value. The returned analysis has this stable shape:

```js
{
  artifact: { schema_version, artifact_kind, status, classification_system, classification_version },
  official_sources,
  chains: [{
    id, title, description,
    nodes: [{ ...authoredNode, resolved }],
    edges: [{ ...authoredEdge, scheduling_status, blockers, resolved_evidence }],
    executable_waves: [[nodeId]],
    review_only_node_ids: [nodeId]
  }],
  summary: { chain_count, node_count, edge_count, ready_edge_count, blocked_edge_count }
}
```

`analyzeCpcProductChain` must:

1. enforce unique ids and valid endpoints;
2. derive node state through `resolveNode` without trusting authored mapping/readiness fields and require returned code/label to match the authored CPC assertion;
3. verify every official-source reference resolves locally;
4. call `resolvePcrEvidence` for every typed PCR locator; unresolved locators are fatal, and every `supported_by_pcr` edge must contain at least one valid locator whose `pcr_id` equals the downstream node's resolved accepted PCR;
5. derive `ready` only from the exact execution matrix in the design;
6. derive blockers only for legitimate planning state with stable codes `upstream_not_material`, `downstream_not_material`, `evidence_not_pcr`, and `boundary_not_aligned`; malformed/missing evidence is a document error, never a blocker downgrade;
7. build topological waves over nodes incident to ready edges only;
8. fail on cycles and sort node ids within each topological wave by their order in the authored chain, giving deterministic tie-breaking.

`renderCpcProductChainReport` must output, in stable source order:

- generated-file banner and source/build command;
- executive summary and caveat that CPC is not a process graph;
- one Mermaid graph per chain (`-->` ready; `-.->` blocked);
- edge table with evidence/boundary/scheduling/blockers;
- executable generation waves;
- manual-review queue;
- official source list.

- [ ] **Step 4: Run focused tests**

Run: `node --test builder/lib/cpc-product-chain.test.mjs`

Expected: PASS.

- [ ] **Step 5: Commit the analysis core**

```bash
git add builder/lib/cpc-product-chain.mjs builder/lib/cpc-product-chain.test.mjs
git commit -m "feat(builder): analyze CPC product-chain dependencies"
```

## Chunk 2: Repository Adapter and Pilot Artifact

Before Task 3 begins, after this implementation plan is committed, record the exact implementation base as a durable Git ref:

```bash
test -z "$(git rev-parse --verify --quiet refs/codex/cpc-chain-implementation-base)"
git update-ref refs/codex/cpc-chain-implementation-base HEAD ""
git rev-parse refs/codex/cpc-chain-implementation-base
```

All final diff checks use this task-owned ref, so the boundary survives separate shell sessions and covers every implementation commit. Retain it through verification, then delete it after recording the literal base SHA in the final handoff with `git update-ref -d refs/codex/cpc-chain-implementation-base`.

### Task 3: Add the repository build/check adapter

**Files:**
- Create: `builder/scripts/render-cpc-product-chain.mjs`
- Create: `builder/scripts/render-cpc-product-chain.test.mjs`
- Modify: `packages/pcr-core/src/index.mjs`
- Modify: `packages/pcr-core/index.test.mjs`

- [ ] **Step 1: Write failing adapter tests**

Build one coherent temporary repository fixture by copying the real normalized CPC hierarchy/leaves, current coverage index, accepted mapping, bound catalog/alias registry, two material PCR directories, and their manifests/canonical Markdown/fingerprint-valid `structured.yaml`. Programmatically write a self-contained minimal planning source into the fixture; do not depend on the checked-in pilot that Task 4 has not authored yet. Do not mock `resolveClassification`, readiness, or projection inspection. Cover production adapters and file behavior:

- source YAML is Schema-validated before analysis;
- `resolveClassification` supplies coverage/mapping/PCR identity and stale coverage-source errors propagate;
- a new `getVerifiedPcrProjection({ root, pcrId })` snapshot API performs the existing current-snapshot inspection once and returns `{ pcr, readiness, source_structured, structured }` from the exact verified bytes; it rejects unusable, stale, Schema-invalid, source-substituted, or content-substituted projections;
- typed evidence locators read only that verified snapshot, so no independent post-read can create a time-of-check/time-of-use gap;
- allowed field and inventory-row locators resolve; missing process/row/field fails with a path-aware error;
- build mode writes the exact report through a same-directory temp file and atomic rename;
- check mode makes no writes and reports missing or stale output;
- when validation, resolution, or rendering fails, an existing report remains byte-identical and same-directory temporary files are removed;
- symlink or non-regular source, structured projection, temporary, and report paths fail closed;
- trap `fetch`, `http.request`, `https.request`, and `net.connect` so any network access fails the test;
- hash the protected trees (`library/pcrs/**`, `classifications/**`, and mapping files) before and after successful build, check, stale-check, and failure paths and assert they remain byte-identical.

In `packages/pcr-core/index.test.mjs`, add focused API tests proving the returned projection/readiness originate from one verified snapshot, returned values are defensive clones, and stale/source-substituted/content-substituted projections are rejected.

- [ ] **Step 2: Run tests and confirm failure**

Run: `node --test packages/pcr-core/index.test.mjs builder/scripts/render-cpc-product-chain.test.mjs`

Expected: FAIL because the script does not exist.

- [ ] **Step 3: Implement the adapter**

Export:

```js
export const DEFAULT_SOURCE_PATH = "builder/planning/cpc-product-chain-pilot.yaml";
export const DEFAULT_REPORT_PATH = "builder/planning/cpc-product-chain-pilot.md";
export function buildOrCheckCpcProductChain(root, { checkOnly = false } = {}) {}
```

First add `getVerifiedPcrProjection({ root, pcrId })` beside `buildGuidance` in `pcr-core`, using the same private `getCurrentPcrSnapshot` result for readiness and structured bytes and returning clones only after `assertPcrUsable({ pcr, operation: "guidance" })`. Read YAML with the repository parser, call `assertCpcProductChain`, resolve nodes with `resolveClassification`, and resolve evidence exclusively through this verified snapshot. Keep network access out of this path. Follow the repository's no-follow regular-file and atomic-write patterns, including exclusive same-directory temporary creation, cleanup in `finally`, lstat/no-follow checks, and rename only after the complete report is rendered; check mode compares exact bytes without mutation.

CLI behavior:

```text
node builder/scripts/render-cpc-product-chain.mjs          # build
node builder/scripts/render-cpc-product-chain.mjs --check  # validate without mutation
```

- [ ] **Step 4: Run adapter tests**

Run: `node --test packages/pcr-core/index.test.mjs builder/scripts/render-cpc-product-chain.test.mjs`

Expected: PASS.

- [ ] **Step 5: Commit the adapter**

```bash
git add builder/scripts/render-cpc-product-chain.mjs builder/scripts/render-cpc-product-chain.test.mjs packages/pcr-core/src/index.mjs packages/pcr-core/index.test.mjs
git commit -m "feat(builder): render CPC product-chain plans"
```

### Task 4: Author the three-chain pilot source

**Files:**
- Create: `builder/planning/cpc-product-chain-pilot.yaml`
- Modify: `builder/scripts/render-cpc-product-chain.test.mjs`

- [ ] **Step 1: Verify and record the exact evidence locators**

Before authoring YAML, inspect the local, fingerprint-valid downstream PCR projections for exact boundary and inventory locators. Perform a separate network-assisted author review of the official primary sources in a browser, record the access date and exact locator in the authored source, and keep that evidence-acquisition step outside the offline renderer. Record a verifiable locator rather than a publication-level URL:

- UNSD CPC detail: classification code and explanatory-note subsection (for example `CPC 3.0 code 32113, Explanatory note, Includes`);
- EC JRC Pulp, Paper and Board BREF: exact numbered section plus PDF page printed in the source;
- EC JRC Textiles BREF: exact numbered section plus PDF page printed in the source;
- US EPA AP-42: exact chapter/section and page/table identifier.

If a publication does not directly support a planned edge at an exact locator, omit that citation and leave the edge `semantic_candidate`; do not access the network from the renderer and do not invent a locator. The author-review notes must identify which exact source location was inspected so another reviewer can reproduce the decision.

- [ ] **Step 2: Write a failing pilot acceptance test**

Extend the adapter test to require the authored pilot to derive exactly 3 chains, 13 nodes, 9 edges, 4 ready edges, and 5 blocked edges. Assert exact executable waves:

- grain: `[["wheat-grain"], ["wheat-flour"], ["bread-and-bakers-wares"]]`;
- cotton/textile: `[["carded-or-combed-cotton"], ["cotton-yarn"], ["woven-cotton-fabric"]]`;
- forestry: `[]`.

Assert `raw-cotton` plus all six forestry nodes are review-only and that no forestry node appears in a wave. Run the test and confirm it fails because the pilot source does not exist.

- [ ] **Step 3: Author the source records**

Add the three selected chain families:

1. Grain: `01112 → 23110 → 23490`.
2. Cotton: `01921 → 26160 → 26360 → 26620`.
3. Forestry route A: `03112 → 32113 → 32121`; route B: `03122 → 32112 → 32129`.

Use local PCR evidence for the mapped food and textile downstream nodes. Use official source records for forestry:

- UNSD CPC 3.0 explanatory notes and code 32113 detail;
- European Commission JRC Pulp, Paper and Board BREF, exact glossary/process sections;
- European Commission JRC Textiles BREF where it directly supports the cotton route;
- US EPA AP-42 Chapter 9 for wheat milling and bread baking where useful.

Set `boundary_assessment: aligned` only where the local downstream PCR explicitly starts from the upstream product condition. Use `needs_review` for all official-only forestry edges. Include route conditions: mechanical pulp/newsprint may include recovered fibre; wood-free paper requires predominantly chemical pulp and must not be generalized to all paper.

- [ ] **Step 4: Build and inspect the report**

Run: `node builder/scripts/render-cpc-product-chain.mjs`

Expected: creates `builder/planning/cpc-product-chain-pilot.md` with two ready grain edges, two ready downstream textile edges, a blocked raw-cotton edge, and all forestry edges blocked.

- [ ] **Step 5: Run check mode and the acceptance test**

Run: `node builder/scripts/render-cpc-product-chain.mjs --check`

Expected: PASS and report current.

Run: `node --test builder/scripts/render-cpc-product-chain.test.mjs`

Expected: PASS with exact counts, waves, and review-only nodes.

- [ ] **Step 6: Commit source and generated report**

```bash
git add builder/planning/cpc-product-chain-pilot.yaml builder/planning/cpc-product-chain-pilot.md
git commit -m "feat(builder): add cross-industry CPC chain pilot"
```

### Task 5: Integrate commands and maintainer guidance

**Files:**
- Modify: `package.json`
- Modify: `builder/docs/index.md`
- Modify: `builder/README.md`

- [ ] **Step 1: Add failing package-command expectations**

Extend the adapter test to read `package.json` and require:

```json
{
  "cpc-chains:build": "node builder/scripts/render-cpc-product-chain.mjs",
  "cpc-chains:check": "node builder/scripts/render-cpc-product-chain.mjs --check"
}
```

Also require `lint` to invoke `npm run cpc-chains:check` before the builder CLI lint.

- [ ] **Step 2: Run the adapter test and confirm failure**

Run: `node --test builder/scripts/render-cpc-product-chain.test.mjs`

Expected: FAIL because package commands are absent.

- [ ] **Step 3: Add scripts and documentation**

Add the two scripts, integrate check mode into `lint`, and add a short `Planning Artifacts` routing section to `builder/docs/index.md`. Add the authoritative command usage and meanings to `builder/README.md`, including purpose, default paths, build/check behavior, output, and the fact that the YAML/Markdown are planning artifacts rather than classification mapping or PCR truth.

- [ ] **Step 4: Run focused checks**

Run:

```bash
npm run cpc-chains:build
npm run cpc-chains:check
node --test builder/lib/schema-contracts.test.mjs builder/lib/cpc-product-chain.test.mjs builder/scripts/render-cpc-product-chain.test.mjs
```

Expected: all commands PASS.

- [ ] **Step 5: Commit integration**

```bash
git add package.json builder/docs/index.md builder/README.md builder/planning/cpc-product-chain-pilot.md
git commit -m "chore(builder): validate CPC chain planning artifacts"
```

### Task 6: Full verification and handoff

**Files:**
- Verify all files above.

- [ ] **Step 1: Confirm the durable implementation base and run generated-artifact check**

Run: `git rev-parse refs/codex/cpc-chain-implementation-base`

Expected: resolves to the committed implementation plan that immediately precedes Task 3.

Run: `npm run cpc-chains:check`

Expected: PASS.

- [ ] **Step 2: Run repository validation**

Run: `npm run validate`

Expected: PASS. If unrelated pre-existing worktree changes cause failure, isolate and report the exact command, failure, and evidence; do not overwrite user changes.

- [ ] **Step 3: Review the final diff and status**

Run:

```bash
git diff --check refs/codex/cpc-chain-implementation-base..HEAD
git diff --stat refs/codex/cpc-chain-implementation-base..HEAD
git status --short
```

Expected: no whitespace errors across every implementation commit; the stat covers the complete base-to-HEAD implementation; only unrelated user work remains uncommitted.

- [ ] **Step 4: Present one finished handoff**

Report the artifact paths, the three chain results, ready generation waves, blocked review items, exact verification commands, and commits. Explicitly report the network-trap and protected-tree immutability checks, and state that candidate/official-only edges do not change accepted mappings or trigger PCR generation.
