---
title: PCR Classification Policy
docType: policy
scope: repo
status: draft
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when importing classification sources
  - when mapping external classification codes to canonical PCR ids
  - when adding a new classification system
whenToUpdate:
  - when source retention rules change
  - when classification import or legacy compatibility mode changes
  - when mapping relation types change
  - when classification systems are added or removed
checkPaths:
  - docs/classification-policy.md
  - AGENTS.md
  - .docpact/config.yaml
  - builder/**
  - classifications/**
lastReviewedAt: 2026-07-14
lastReviewedCommit: c248880a854c1687567f3e4ea6c24e0dd78115ab
---

# Classification Policy

Classification systems are maintained as external indexing layers. A classification leaf is coverage input, not
canonical PCR identity, and must not automatically create a PCR record. A canonical PCR is created only when a
semantic product boundary and material methodology require a reviewed record that can be mapped from one or more
classification leaves.

Supported mapping relation types should include:

- `exact`
- `broader`
- `narrower`
- `proxy`
- `manual_review`

## Source Handling

Classification imports should keep the official source artifact under `classifications/systems/<system>/<version>/raw/`
with source metadata and checksum. Normalized files under the same system/version directory may be regenerated from
the raw source. `import-cpc` is the canonical CPC entry point and requires an explicit `--source` every time. Its
default classification-only mode writes raw/metadata/normalized artifacts, creates zero PCR records, creates a
zero-edge mapping scaffold when the mapping is absent, and validates then preserves the exact bytes of an existing
mapping. A non-3.0 version must have a coverage descriptor registered before import.

A retained raw filename is evidence identity, not a replaceable cache key. If an import supplies different bytes under
that name, it fails closed; use a distinct source artifact name and review the regenerated source metadata instead.

One CPC import owns the system/version coordinate lock. Managed sources and baselines are read without following
symlinks, the baseline is compared again before installation, and each file replacement or complete legacy directory
is staged before installation. Mapping is the last committed artifact, so a failed or concurrent import cannot leave
a dangling new edge; classification-only projections installed earlier remain deterministic regeneration outputs.

The `scaffold-cpc` name is a fail-fast compatibility alias and requires explicit `--legacy-scaffolds`. That
migration/test-only mode is forbidden for new imports. It may append leaf identity and a legacy mapping edge only for
a currently unmapped leaf. It may create a complete four-file PCR scaffold only if the target is absent; an existing
target must already be complete and match the expected deterministic legacy template byte-for-byte. Partial or
divergent targets fail closed. The mode must not overwrite an accepted edge or PCR content.

Mappings under `classifications/mappings/` are the maintained edge input from external codes to canonical PCR ids.
The target contract requires positive edges to carry explicit acceptance and point to material PCRs. During the
Phase 1 migration, the source still contains legacy scaffold entries and does not yet encode per-edge acceptance;
therefore material-target resolution is a compatibility rule, not proof of completed acceptance governance. Adding
another classification system always adds source and coverage inputs; add mapping edges only for reviewed semantic
matches, never by copying a PCR tree or manufacturing one edge per leaf.

External classification codes must not become PCR directory names. If two classification leaves resolve to the same semantic PCR, map both leaves to that PCR id. If two different PCRs would otherwise share the same semantic slug, disambiguate with a short stable hash or a clearer semantic qualifier, not with the classification code.

## Coverage Read Model

Classification coverage and the PCR catalog answer different questions:

- the material PCR catalog lists canonical methodology records;
- a classification coverage index accounts for every normalized leaf and records its current mapping/readiness state.

Coverage indexes under `classifications/indexes/` are deterministic derived read models. They combine normalized
classification leaves, mapping input, PCR lifecycle state, and explicit migration/assessment state for consumption by
`pcr-core`, the public CLI, and the viewer. Their source descriptors bind the generator contract and the exact bytes of
both inputs. They do not replace the normalized source or mapping files as authoring truth and must be regenerated when
those inputs change.

Each known leaf has one coverage status: `mapped`, `unmapped`, `candidate_suggestion`, `manual_review`, or `unknown`.
Only `mapped` selects a canonical PCR. In the current migration read model, that means a valid non-manual-review edge
whose target is a material lifecycle pair; explicit per-edge acceptance is a Phase 2 governance change. Candidate
suggestions and manual-review targets are evidence, not accepted identity edges, and must never be selected automatically.

Use the public CLI to inspect coverage without loading the methodology catalog:

```bash
npm --silent run tiangong-pcr -- coverage summary --classification cpc:3.0 --format json
npm --silent run tiangong-pcr -- coverage list --classification cpc:3.0 --page 1 --page-size 10 --format json
```

`coverage list` is paginated. `resolve --classification <system>:<version>:<code>` remains an exact lookup. A known
leaf with no accepted mapping is a successful result with `mapping: null` and `pcr: null`; an unknown coordinate or
an inconsistent index is an error.

## Material-First Migration

Catalog `list` and `tree`, and the local viewer, default to material PCRs. Their explicit compatibility scopes are
`--scope material|legacy|all`. Legacy empty scaffolds are not methodology, even when a retained mapping entry points
to them. Resolution may expose such a record only as `legacy_scaffold_compatibility`, and guidance and validation must
reject it.

The current migration still retains legacy scaffold directories and old mapping entries so existing ids and exact
classification lookups remain deterministic. Only Phase 2 step 1, the importer cutover, is complete: ordinary CPC
imports create zero PCR records, while legacy generation is explicit, template-checked, and append-only. Explicit
edge acceptance and positive material mapping contraction, the legacy alias registry, old-id coverage redirects, and
physical scaffold migration remain unimplemented. Do not describe those steps as complete until each has been
implemented and validated.
