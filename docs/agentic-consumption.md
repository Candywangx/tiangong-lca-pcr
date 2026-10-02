---
lastReviewedAt: 2026-10-01
lastReviewedCommit: 02f5b58ca242035dcbce41845c4ea92dc8c63d25
title: Agent-led PCR consumption and review
docType: contract
scope: repo
status: active
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when authoring LCA data or reviewing TIDAS inputs with the PCR consumer
whenToUpdate:
  - when consumption commands, review evidence or Skill responsibilities change
checkPaths:
  - packages/pcr-core/src/consumption-*.mjs
  - packages/pcr-core/src/tidas-inspection.mjs
  - packages/pcr-core/schemas/agent-review.schema.json
  - packages/tiangong-pcr-cli/**
  - skills/tiangong-pcr/**
related:
  - docs/offline-distribution.md
  - docs/architecture.md
---

# Agent-led PCR consumption

PCR supports general LCA data authoring, optional TIDAS process authoring, and
review of existing TIDAS process/model data. A foreground collection package is
an optional working artifact, not a universal input format. The consuming Agent
selects applicable methodology, investigates evidence, considers alternative
explanations and writes a review. CLI operations expose facts, source locations
and arithmetic; they do not run an LLM or approve methodology.

## Representation decision

- Entities: source-addressable input/guidance views (F3 boundary) and an Agent
  review (F2 projection with a versioned envelope and free semantic content).
- Consumers: the invoking Agent, the user, and optional report tooling.
- Maturity/truth: input views are observed facts; review conclusions are attributed
  interpretations, not publication or compliance decisions.
- Evidence: exact input bytes, verified PCR projection identity, JSON Pointers,
  applicability explanations, limitations and reproducible calculations.
- Mutation: source inputs remain unchanged; the Agent may revise its report as
  evidence changes. Report checking requires the same explicitly selected inputs.
- Evolution: promote additional fields only after consumer evaluations demonstrate
  stable need; remove constraints that force unsupported or misleading conclusions.
- Validation loop: meaningful negative fixtures, offline package smoke tests and
  simple-prompt Agent trials; schema validity never certifies semantic correctness.

The Skill metadata names all three tasks. Its body carries scope/evidence judgment;
optional references carry TIDAS mapping and review examples. PCR methodology stays
in the selected library. Local facts and tooling failures must remain distinguishable
from issues inferred by the Agent.

## Responsibilities and compatibility

TIDAS owns its format. PCR's read-only adapter uses the public process, lifecycle
model, flow, flow-property and unit-group field paths. The inspected contract is
the toolkit's pinned public-spec candidate 0.2.3 at
`f118660dbcbfbf736be74837cce0bf26cd177245` (toolkit source
`6ede550618b274b8b3044ba8124bc6e9beab3e8e`). This records the field-contract basis,
not a claim that the candidate is a formal specification release. No TIDAS schemas
or executable validation policies are copied into PCR.

For structural validation use the separately provisioned offline `tidas` toolkit:
`tidas validate <package-dir> --issues <issues.jsonl> --format json`; record its
version and actual report. Use its command help for the installed version. PCR
inspection remains useful for incomplete drafts and explicitly does not assert
schema validity. TIDAS SDK creation/validation is optional for the TIDAS authoring
route; general LCA authoring has no SDK/toolkit prerequisite.

Existing `validate-model` checks qualifier text presence and `validate-dataset`
checks collection protocol ID presence. Their report/exit contracts remain
compatible. Their results cover only reported performed checks. Neither command
performs TIDAS structural or agentic methodology review.

## Review scope and evidence

| Command | Contract |
| --- | --- |
| `guidance --topic <topic>` | Paged projection values with hashes, existing rule IDs and applicability; legacy unfiltered guidance is unchanged |
| `guidance --pointer <pointer>` | Complete value at a verified projection location |
| `inspect --input <file> [--related <directory>]` | Native TIDAS summary, exchanges/instances, local references or original pointer values; no schema-validity claim |
| `calculate --input <request.json>` | Explicit-basis normalization, conversion or balance arithmetic with the source request hash |
| `review prepare --pcr <id> --input <file>` | An unreviewed report with input/PCR bindings and open coverage |
| `review check --pcr <id> --input <file> --report <review.json>` | Shape, binding and source-pointer checks with `methodology_approval: false` |

New read views default to bounded previews/pages with explicit truncation and
continuations. Exact pointer reads preserve original values; use `--output` when
the complete result exceeds the stdout budget. Output files are created exclusively.
Reference resolution uses dataset kind, UUID and the requested version. A unique
match without a requested version is labeled unspecified; duplicates and mismatched
versions never silently choose a file. Only supplied local files are examined.

First establish the intended product, reference basis, declared gate and whether
the input describes one operation, an aggregated process, or a connected model.
A whole-lifecycle PCR requirement need not be fulfilled inside every individual
process. Resolve supplied related process data before deciding a model stage is
missing. Unavailable references mean unavailable evidence, not proof of absence.

Guidance selection preserves rule text, applicability, source IDs and the
projection pointer. Existing explicit rule IDs remain stable; pointer-only
locations are snapshot-bound and must not be treated as cross-version identities.
Candidate PCR readiness remains visible in views and reports.

Review findings carry confirmed_issue, suspected_anomaly or evidence_gap separately
from severity. They retain observations, rationale, input/PCR references, remaining
questions and suggested action. The report records reviewed, not-applicable and
unreviewed topics in prose with reasons. No count-based compliance percentage or
overall pass/fail is inferred from Agent coverage.

## Validation packet

Use synthetic, explicitly labeled TIDAS-shaped fixtures with real field names:
a partial sowing process, its surrounding model, repeated process instances,
missing/ambiguous/version-mismatched references, and a stated reference-basis error.
Also exercise singleton/array representations, zero versus missing quantities,
pointer escaping, page bounds, stale source hashes and maliciously shaped reports.
These drafts exercise inspection, not full TIDAS schema compliance.

Consumer prompts remain simple: “Create LCA data for 1 kg of wheat”, “Create a
TIDAS process draft for 1 kg of wheat”, and “Review this TIDAS process/model”.
Evaluate supported findings, false lifecycle-gap claims, uncertainty handling,
traceable evidence and repair/review behavior. A single Agent trial is smoke
evidence rather than a statistical accuracy claim.

Package ownership is unchanged: the tool contains CLI/Skill/adapter/report support;
the library contains English methodology. Both operate without network access.
Fully offline semantic review additionally requires an offline-capable Agent/model
provided by the caller.
