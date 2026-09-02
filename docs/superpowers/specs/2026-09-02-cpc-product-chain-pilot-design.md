---
title: CPC Product-Chain Pilot Design
docType: design
scope: builder
status: draft
authoritative: false
owner: tiangong-lca-pcr
language: en
---

# CPC Product-Chain Pilot Design

## Goal

Produce a small, reviewable pilot that identifies primary-product upstream/downstream relationships across three CPC 3.0 value chains and turns them into safe PCR-production ordering guidance. The pilot covers:

1. agriculture to grain milling to bakery products;
2. agriculture to fibre preparation to yarn to woven fabric;
3. forestry to wood pulp to paper.

The result must include a human-readable relationship report and a machine-readable YAML source. It must help a production agent avoid overlapping or disconnected PCR foreground boundaries without pretending that CPC itself is a process graph.

## Repository Boundary

The pilot is a builder planning artifact. It is not:

- a change to the official CPC hierarchy;
- an accepted classification-to-PCR mapping;
- canonical PCR methodology;
- permission to create a PCR from every classification leaf;
- an automatic publication or unattended-generation queue.

The reviewed source lives under `builder/planning/`. Generated documentation stays beside it so users do not confuse the artifact with `classifications/mappings/**` or `library/pcrs/**` truth.

## Deliverables

- `builder/planning/cpc-product-chain-pilot.yaml`: reviewed single source of truth for the pilot.
- `builder/schemas/cpc-product-chain.schema.json`: structural contract.
- `builder/scripts/render-cpc-product-chain.mjs`: source validation, repository cross-checking, DAG analysis, and deterministic Markdown rendering.
- `builder/scripts/render-cpc-product-chain.test.mjs`: focused tests.
- `builder/planning/cpc-product-chain-pilot.md`: generated report with Mermaid graphs, edge table, generation waves, blockers, and manual-review list.
- package scripts for build and check mode; repository validation checks that the generated report is current.

## Evidence Model

Every relationship edge separates two independent questions:

1. `evidence_status`: why the relationship is plausible.
2. derived `scheduling_status`: whether it is safe to use as a PCR-production dependency now.

Allowed evidence states:

- `supported_by_pcr`: an existing material downstream PCR explicitly names the upstream material in its scope, declared starting condition, boundary rules, or an inventory input row.
- `supported_by_official_source`: an authoritative primary source directly describes the transformation, while local PCR evidence is incomplete.
- `semantic_candidate`: CPC product semantics suggest the relationship, but local or official process-interface evidence is insufficient.

Allowed derived scheduling states:

- `ready`: the complete execution matrix below is satisfied, including `usable_for_guidance === true` for both resolved PCRs.
- `blocked`: one or both nodes are unmapped, non-material, missing, or the boundary interface requires review.

The complete execution rule is:

| Condition | Required for `ready` |
| --- | --- |
| relationship type | `primary_feedstock` |
| evidence status | `supported_by_pcr` |
| boundary assessment | `aligned` |
| endpoint state | both codes resolve through the current, fingerprint-valid coverage index to accepted mappings, and `getPcrReadiness(...).usable_for_guidance === true` for both targets; `readiness.status: review_required` is allowed when this predicate is true |
| PCR evidence | at least one valid downstream-PCR evidence locator tied to a current, Schema-valid structured projection |
| blockers | no derived blocker |

Every other combination derives `blocked`. In particular, `supported_by_official_source` and `semantic_candidate`
remain blocked until a material downstream PCR supplies a verified interface, non-primary relationships never enter
the executable graph, and no candidate edge may create an executable dependency.

## Relationship Scope

Only `primary_feedstock` edges participate in topological ordering. A primary feedstock materially defines the downstream product identity or main conversion route. Electricity, fuels, water, packaging, cleaning materials, generic utilities, and downstream waste treatment are excluded from the main product chain even when they are required PCR inputs. This prevents auxiliary cross-links from turning the pilot into an unusable whole-economy graph.

Each authored edge records:

- upstream and downstream node ids;
- relationship type;
- evidence state;
- local artifact evidence and/or official source ids;
- an explicit interface statement describing the upstream output and downstream starting condition;
- a boundary assessment (`aligned`, `gap`, `overlap`, or `needs_review`);
- reviewer notes.

The renderer derives scheduling state and blockers from the matrix above. They are never copied back into YAML.

## Node Model

Each authored CPC node records only the exact CPC 3.0 code and an asserted label, plus its intended stage and role in
the pilot. Coverage status, accepted PCR id/path, material readiness, and projection state are derived values. The
renderer obtains them through the repository's existing classification resolver and readiness logic, which validates
the coverage Schema, source fingerprints, accepted-only canonical mapping projection, material target state, and
structured projection integrity. The planning artifact can assert a label but cannot supply, override, or substitute
a mapping or PCR identity.

## Authored and Derived Fields

The YAML authors only:

- artifact identity and classification coordinate;
- chain ids, titles, descriptions, node codes, asserted node labels, stages, and roles;
- edge ids, endpoints, `primary_feedstock` type, evidence status, boundary assessment, evidence records, interface
  descriptions, route conditions, and reviewer notes;
- official source records with stable ids, titles, publisher, URL, publication identifier/date where available,
  exact locator, and a concise statement of what the source supports.

The renderer derives only:

- current coverage status, accepted mapping, canonical PCR id/path, PCR readiness, and projection status;
- scheduling status and blocker list for every edge;
- the executable-node set, topological waves, blocked review queue, graph labels, counts, and generated-at-free
  deterministic report text.

Derived values never appear in the authored YAML. The generated Markdown is never parsed as input or edited as an
authoring surface.

## Evidence Locators

PCR evidence uses a typed locator rather than an unstable free-form pointer:

- `field`: `pcr_id`, `field_path`, and `supports`. The exhaustive pilot allowlist is
  `product_category_identity.covered_products`, `product_category_identity.production_route`,
  `boundary_abstraction.declared_starting_condition`, and `boundary_abstraction.upstream_dataset_requirement`.
- `inventory_row`: `pcr_id`, `process_id`, `direction`, `flow_type`, `row_id`, `field`, and `supports`. The exhaustive
  pilot values for `field` are `name` and `description`.

The renderer resolves `pcr_id` through the catalog, requires the current consumer-facing workspace to be usable,
requires its `structured.yaml` to satisfy the projection Schema and current canonical-Markdown/content fingerprints,
and then resolves the typed locator in that parsed projection. This makes the locator machine-checkable while the
projection fingerprint ties the evidence back to canonical `pcr.en-US.md`; `structured.yaml` does not become an
independent truth source. Every PCR locator on a `ready` edge must name the currently accepted PCR resolved for the
edge's downstream node; evidence from another PCR cannot make the edge executable. Revisions and immutable release
snapshots are outside this pilot.

Official source records are reviewer assertions stored locally in YAML. The renderer verifies source-id references,
required metadata, and locators but never accesses the network. Source discovery and human verification happen before
authoring. A mutable URL or publication identifier alone is insufficient: each record must include a document title,
publisher, URL, an optional publication identifier/date, and a required exact section, page, or CPC-code locator that
identifies the supporting passage. Official-only support cannot make an edge ready.

## Pilot Chains

### Grain and bakery

`01112 Wheat, other` → `23110 Wheat and meslin flour` → `23490 Bread and other bakers' wares`

- Wheat to flour is supported by the flour PCR starting condition and `received_milling_grain` inventory input.
- Flour to bakers' wares is supported by the bakery PCR scope and its ingredient-record instructions, which explicitly include flour or meal.
- All three nodes currently resolve to material PCRs, so both dependencies can be `ready` if interface checks remain aligned.

### Cotton textile

`01921 Cotton, whether or not ginned` → `26160 Cotton, carded or combed` → `26360 Cotton yarn ... at least 85% cotton` → `26620 Woven cotton fabrics ... more than 200 g/m²`

- The first edge is supported by the cotton-preparation PCR's declared feedstock and inventory rows, but CPC 01921 is currently unmapped; the edge is therefore blocked.
- The current cotton-yarn PCR starts from baled fibre and includes opening, cleaning, carding, drawing, and optional combing inside its foreground fibre-preparation process. Directly chaining the CPC 26160 prepared-cotton product would therefore overlap and double-count those operations, so the carded/combed-cotton-to-yarn edge is blocked even though its PCR evidence resolves.
- A future cotton-yarn PCR revision may make that edge align only by explicitly supporting purchased carded or combed cotton as its starting condition and conditionally excluding the duplicated preparation operations.
- Only cotton yarn to woven fabric is ready now. Raw cotton and carded/combed cotton are review-only nodes.

This is a quality-review correction to the initial four-ready-edge pilot expectation. The evidence-backed boundary
assessment is `overlap`; it must not be changed to `aligned` merely to preserve four ready edges.

### Forestry, pulp, and paper

Route A: `03112 Coniferous pulpwood` → `32113 Mechanical/semi-chemical wood pulp` → `32121 Newsprint`.

Route B: `03122 Non-coniferous pulpwood` → `32112 Chemical wood pulp, other than dissolving grades` → `32129 Other uncoated graphic paper and paperboard, wood free`.

The CPC nodes are currently unmapped and their retained directories are not usable material methodology. Official UNSD explanatory notes and the European Commission pulp-and-paper BREF support the physical route concepts, but all forestry edges remain blocked until semantic scope, material PCR identity, and foreground interfaces are reviewed.

Route specificity is mandatory: newsprint can contain mechanical pulp and/or recovered paper, while wood-free graphic paper is defined by a predominantly chemical-pulp furnish. The graph must not claim that every mill or paper grade uses only the displayed feedstock.

## Generation Ordering

The renderer first defines the executable-node set as nodes incident to at least one `ready` primary-feedstock edge.
It then computes deterministic topological waves over that induced subgraph only:

- nodes with no ready predecessors enter the earliest wave;
- nodes in the same wave may be worked in parallel;
- a downstream node enters a later wave only after all ready predecessors;
- isolated nodes and nodes incident only to blocked/candidate edges are review-only and never appear in executable waves;
- blocked/candidate edges are reported separately and do not delay unrelated ready work;
- cycles are a validation error because the artifact represents production dependencies, not recycling loops.

For the pilot, the expected ready ordering is:

- Grain wave 1: wheat; wave 2: flour; wave 3: bakers' wares.
- Textile ready subgraph wave 1: cotton yarn; wave 2: woven cotton fabric. Raw cotton and carded/combed cotton remain review-only because the first node is unmapped and the current yarn boundary overlaps fibre preparation.
- Forestry: no executable waves; all nodes appear in the blocked review queue.

## Deterministic Rendering and Validation

The renderer performs these checks before producing output:

1. validate YAML against the JSON Schema;
2. require unique chain, node, edge, and source ids;
3. require every edge endpoint to exist in its chain;
4. verify CPC code and asserted label against `classifications/systems/cpc/3.0/normalized/leaves.json`;
5. use the existing classification resolution path to validate the coverage index, its exact-byte source fingerprints,
   accepted canonical mapping projection, and resolved material target;
6. use existing PCR readiness/projection-integrity logic and the typed locator contract to verify PCR evidence;
7. validate official source ids and local metadata without network access;
8. derive scheduling status using the complete execution matrix;
9. enforce that only ready primary-feedstock edges influence ordering and isolated blocked nodes are excluded;
10. reject cycles in the ready graph;
11. render stable Markdown and fail `--check` if the checked-in report differs.

The script must not edit PCR content, mappings, coverage indexes, or classification sources.

## Error Handling

Failures use concise, path-aware messages and a non-zero exit code. Check mode never rewrites the report. Build mode
writes only the generated Markdown target after all checks pass, using a same-directory temporary regular file and
atomic rename. Missing or stale source artifacts fail closed rather than downgrading an edge silently. The renderer
and tests perform no network access.

The command names are:

- `npm run cpc-chains:build` to validate and atomically render the report;
- `npm run cpc-chains:check` to validate and compare exact report bytes without mutation.

`npm run lint` includes `npm run cpc-chains:check`, so `npm run validate` fails when the source, repository-derived
state, or checked-in report is stale.

## Test Strategy

Focused tests cover:

- valid three-chain source renders deterministically;
- duplicate ids and unknown endpoints fail;
- stale authored CPC labels or stale repository resolver sources fail;
- a semantic candidate deterministically derives `blocked` and never enters an executable wave;
- a ready cycle fails;
- blocked edges do not constrain ready topological waves;
- `--check` detects a stale generated report.
- stale coverage source fingerprints fail through the reused coverage reader;
- a planning PCR locator that disagrees with current accepted resolution fails;
- invalid evidence/boundary combinations derive blocked or fail where structurally illegal;
- missing evidence source ids and invalid typed locators fail;
- isolated blocked nodes do not enter executable waves.

The generated Markdown begins with a generated-file banner naming `npm run cpc-chains:build` and warning against
direct edits.

Repository handoff runs the focused test, build/check commands, and `npm run validate`.

## Primary Sources

- United Nations Statistics Division, CPC resources and Version 3.0 explanatory notes: https://unstats.un.org/unsd/classifications/econ
- UNSD CPC 3.0 detail for mechanical/semi-chemical wood pulp, code 32113: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/32113
- European Commission JRC, Best Available Techniques Reference Document for the Production of Pulp, Paper and Board: https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf
- European Commission JRC, Best Available Techniques Reference Document for the Textiles Industry: https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf
- US EPA, AP-42 Chapter 9, including grain milling and bread baking process references: https://www.epa.gov/air-emissions-factors-and-quantification/ap-42-fifth-edition-volume-i-chapter-9-food-and-0

## Acceptance Criteria

- Three cross-industry chains are present and visually readable.
- The exact pilot result is 13 nodes and 9 edges: 3 ready, 6 blocked, and 8 review-only nodes across the three chains.
- Exact waves are grain `[["wheat-grain"], ["wheat-flour"], ["bread-and-bakers-wares"]]`, textile `[["cotton-yarn"], ["woven-cotton-fabric"]]`, and forestry `[]`.
- YAML is the only hand-maintained pilot truth; the Markdown report is deterministic output.
- Every edge exposes evidence status, scheduling status, boundary assessment, and review notes.
- Supported and semantic-candidate relationships are never conflated.
- The report gives executable ordering only for ready edges and a separate manual-review queue for blocked edges.
- Joined review notes normalize intermediate terminal punctuation before the `; ` separator without bypassing Markdown escaping.
- Existing PCRs, mappings, and CPC sources remain unchanged.
