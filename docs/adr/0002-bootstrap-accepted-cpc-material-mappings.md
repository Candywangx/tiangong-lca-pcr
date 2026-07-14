---
title: Bootstrap Accepted CPC 3.0 Material Mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when validating the initial accepted CPC 3.0 positive mappings
  - when reviewing or replacing one of the three bootstrap mapping edges
whenToUpdate:
  - when a bootstrap edge is superseded, rejected, or remapped
  - when its CPC source label or target PCR semantic boundary changes
checkPaths:
  - docs/adr/0002-bootstrap-accepted-cpc-material-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/systems/cpc/3.0/normalized/leaves.json
  - library/pcrs/agriculture-forestry-and-fishery-products/**
lastReviewedAt: 2026-07-14
lastReviewedCommit: 41e00bafd03530af7871e4620e59862dd779473e
---

# ADR 0002: Bootstrap Accepted CPC 3.0 Material Mappings

## Decision

The repository maintainers accept exactly three CPC 3.0 positive mapping edges as the Phase 2 bootstrap baseline:

| CPC code | CPC label | Accepted PCR id |
| --- | --- | --- |
| `01111` | Wheat, seed | `pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.wheat-seed` |
| `04412` | Farmed abalone, live, fresh or chilled | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.farmed-abalone-live-fresh-or-chilled` |
| `04911` | Coral and similar products, shells of molluscs, crustaceans or echinoderms and cuttle-bone | `pcr.agriculture-forestry-and-fishery-products.fish-crustaceans-molluscs-and-other-aquatic-invertebrates-products.coral-and-similar-products-shells-of-molluscs-crustaceans-or-echinoderms-and-cuttle-bone` |

Each edge is an exact match between one normalized CPC leaf and one existing canonical material PCR whose semantic
slug, title, classification reference, and authored methodology describe that same product boundary. The accepted
mapping record must identify this ADR as its `decision_ref` and record the decision time
`2026-07-14T14:44:36Z` and authority `tiangong-lca-pcr-maintainers`.

This is a repository-governance acceptance decision for deterministic PCR selection. It is not a claim that CPC,
UNSD, or another external authority certified the PCR methodology, and it does not bypass PCR readiness checks.

## Evidence boundary

The decision is supported by the normalized CPC leaf identity, the target PCR manifest and reciprocal
`classification_refs`, and the target's material lifecycle pair. Consumer readiness remains independently derived
from the current Markdown, structured projection Schema, projection fingerprints, and lifecycle state.

If the classification source label, mapping relation, target PCR identity, or target semantic boundary changes, the
edge must receive a new explicit decision instead of inheriting this bootstrap acceptance.

## Rejected alternative

In the legacy v1 baseline, the other 2,874 CPC 3.0 entries pointed to `scaffold / empty_scaffold` records. They are
not accepted positive mappings and therefore do not appear in mapping v2. Their classification leaves remain fully
represented in coverage, while their old PCR ids move to the legacy alias registry for compatibility routing.

## Consequences

- Mapping v2 contains accepted positive edges only.
- Only the three listed edges may produce `coverage_status: mapped` at bootstrap.
- A valid-looking edge without an accepted decision must fail closed and cannot be selected automatically.
- Mapping acceptance does not imply `usable_for_guidance`; consumers must still inspect PCR readiness.
