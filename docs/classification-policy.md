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

Classification imports should keep the official source artifact under `classifications/systems/<system>/<version>/raw/` with source metadata and checksum. Normalized files under the same system/version directory may be regenerated from the raw source.

Mappings under `classifications/mappings/` are the maintained accepted edges from external codes to canonical material
PCR ids. Adding another classification system should normally add a new mapping layer, not a duplicate PCR tree.

External classification codes must not become PCR directory names. If two classification leaves resolve to the same semantic PCR, map both leaves to that PCR id. If two different PCRs would otherwise share the same semantic slug, disambiguate with a short stable hash or a clearer semantic qualifier, not with the classification code.

## Coverage Read Model

Classification coverage and the PCR catalog answer different questions:

- the material PCR catalog lists canonical methodology records;
- a classification coverage index accounts for every normalized leaf and records whether it has an accepted mapping.

Coverage indexes under `classifications/indexes/` are deterministic derived read models. They combine normalized
classification leaves, accepted mapping edges, and explicit migration/assessment state for consumption by
`pcr-core`, the public CLI, and the viewer. They do not replace the normalized source or mapping files as authoring
truth and must be regenerated when those inputs change.

Each known leaf has one coverage status: `mapped`, `unmapped`, `candidate_suggestion`, `manual_review`, or `unknown`.
Only `mapped` selects a canonical PCR. Candidate suggestions and manual-review targets are evidence, not accepted
identity edges, and must never be selected automatically.

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
classification lookups remain deterministic. Phase 2 will remove the CPC importer's per-leaf PCR generation behavior,
separate positive material mappings from legacy aliases, and only then prepare physical scaffold migration. Do not
describe physical deletion, mapping contraction, or alias cutover as complete until that phase has been implemented
and validated.
