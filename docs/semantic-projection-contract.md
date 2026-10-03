---
title: Source-faithful normative projection and guidance
docType: contract
scope: repo
status: active
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when compiling normative Markdown or consuming selected PCR guidance
  - when interpreting projection identities, source positions or legacy context provenance
whenToUpdate:
  - when normative projection, integrity, selection or compatibility contracts change
checkPaths:
  - packages/pcr-core/src/compiler/**
  - packages/pcr-core/src/projection-integrity.ts
  - packages/pcr-core/src/consumption-guidance.ts
  - packages/pcr-core/schemas/structured-projection.schema.json
  - packages/pcr-core/schemas/guidance-output.schema.json
  - builder/lib/markdown-projection.ts
  - builder/lib/structured-yaml-projection.ts
lastReviewedAt: 2026-10-03
lastReviewedCommit: f12cdada3362cc1c845aa7baf876c29a2476676a
related:
  - agentic-consumption.md
  - authoring-guide.md
  - typescript-engineering.md
---

# Source-faithful normative projection and guidance

English Markdown remains canonical. Contract 2 preserves the source context of
system-boundary, allocation and validation rules. It does not translate prose
into executable scientific predicates or decide applicability, methodology
approval, translation review or lifecycle state.

## Projection contract

New generated `structured.yaml` uses `schema_version: 2` and
`projection_metadata.contract_version: "2"`. Its `normative_context` is part of the
fingerprinted generated content, before the final metadata block. Existing schema registry `$id` URIs remain stable for reference compatibility; `schema_version` selects the stored format. The remaining
structured fields retain their existing meanings. The three flat rule arrays
remain convenient displays; a flat `rule` or generic `applies_to` alone is not a
complete methodological requirement.

Every actual matching H2 section produces a complete source unit with its family,
exact Markdown, normalized source span and heading ancestry. `ancestor_context`
retains exact document-level and enclosing-H1 preambles in outer-to-inner order.
Units therefore preserve conditions written above the selected chapter without
replicating the entire document. Complete H2 bodies preserve nested headings,
introductions, lists, tables, exceptions and following notes. Each rule binding
carries its JSON Pointer, rule ID, identity kind, unit ID and exact source span.
Unsupported blocks remain in source units with diagnostics; they are not silently
converted into invented facts. Ambiguous attachment is reported as structural
uncertainty, with the full source retained for the Agent.

Normalize one initial BOM away and CRLF/lone CR to LF. Source hashes are SHA-256
of that normalized text encoded as UTF-8. Source offsets are **zero-based UTF-16
code-unit offsets**, not byte offsets; starts are inclusive and ends exclusive.
Lines and columns are one-based. They address normalized source, so consumers
must apply the declared normalization before slicing.

Compilation explicitly rejects sources beyond 8 million code units, 250,000 AST
nodes or depth 256; YAML has its separate alias/depth guards. These bound parser
work and never truncate a successful result. They are not aggregate site-size
budgets.

## Identity and integrity

Explicit normalized authored IDs are reserved before anonymous fallbacks. A true
duplicate explicit ID fails with both source positions. Anonymous ordinal IDs are
snapshot-local: an insertion can change them. If a fallback would collide with an
authored ID, the fallback receives a deterministic `_snapshot` suffix and a
diagnostic. Never silently rename an authored ID to make a projection pass.

Pointers and source offsets identify one snapshot. Stable authored IDs, stored
projection hashes and context hashes have separate roles. Preserve all of them
when citing evidence. Candidate records may have `version: null`; do not invent
a version when a hash-bound candidate has not declared one.

Schema validation proves shape. Source/content hash checks prove transport
consistency. Contract 2 additionally recompiles canonical normative source and
compares all units, ancestor segments, bindings, diagnostics and ordered rule
arrays. Rehashing a projection after dropping a condition cannot make it current.
These checks establish source fidelity, not scientific validity.

## Legacy snapshots and guidance

Contract 1 remains readable without rewriting historical artifacts. Guidance is
emitted as schema 2, deriving context from the already captured and verified
canonical source bytes. Legacy rule text, applicability and source IDs must agree
with compilation at every pointer. Stored rule IDs remain the citation IDs;
legacy renamed IDs are explicitly snapshot-local. A mismatch fails with
`PCR_NORMATIVE_CONTEXT_INVALID` instead of attaching misleading context.

`normative_context_provenance` distinguishes `stored_projection` from
`derived_legacy_source`. It records the compiler contract, original projection
schema/hash, canonical source hash and separate context hash. Derived context
never masquerades as bytes covered by an old stored projection digest. Full
source verification belongs to the core snapshot reader; selection subsequently
checks envelope digest/provenance agreement and complete rule binding coverage.

`guidance --topic` paginates complete values by item count. It does not cut rules
at a character limit. `guidance --pointer` retains the full selected value,
including when the pointer addresses an inner rule field. Both include complete
relevant units and ancestor context. Source-only unsupported units remain visible
in the selected family even when there is no flattened rule. Partial selections
label their `parent_context_sha256`; they do not claim that the selected subset
has the full context digest. The existing stdout budget still requests explicit
`--output` for large results; it never silently truncates output.

## Migration and qualification

Regenerate only explicitly selected unpublished candidates through the normal
Builder `sync-structured` transaction. Repeat sync to prove deterministic bytes;
verify manifests, English, Chinese, lifecycle and translation declarations remain
unchanged. Published/deprecated current content and immutable releases must not
be rewritten. Future revisions adopt the current generator through the ordinary
revision/publication workflow and its existing scientific review gates.

Independent source fixtures cover the real reject/return validation introduction
and both lobster allocation conditions. Metamorphic and tamper tests distinguish
conditional/unconditional rules, nested structures, ancestor preambles, identity
collisions, dropped/rehashed context and corrupted citations. Actual historical
npm SQLite artifacts are also qualified; reproducible legacy output alone is not
a semantic correctness oracle. Full refactor and formal production publication
remain separate acceptance under PCR #69.
