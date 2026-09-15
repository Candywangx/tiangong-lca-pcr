---
title: Accept Goal food rolling CPC 21152 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when resolving CPC 21152
  - when auditing the rolling scheduler material-to-mapping gate
whenToUpdate:
  - when this accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0067-accept-goal-food-rolling-cpc-21152-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Food Rolling CPC 21152 Mapping

## Decision

Accept the exact CPC 21152 edge to the material PCR for edible offal of buffalo, fresh, chilled or frozen. The rolling author task completed after batch 071 had closed, so this accepted edge is recorded immediately to prevent the retired legacy locator from colliding with the newly material canonical identity.

## Evidence and Verification

- UN CPC 3.0 defines CPC 21152 and excludes cattle offal classified in CPC 21151.
- Tiangong hybrid search plus a public state-code-100 direct read confirmed Product flow ed9e2fcf-3bf3-4b09-a893-dc5250a65f5c with exact CPC 21152 semantics, Mass, and kg.
- The bilingual candidate PCR has nine processes, 352 atomic exchange cards, mutually exclusive fresh/chilled/frozen branches, and a deterministic central structured projection.
- Central lint found no target-specific error; only the repository-owner-excluded CPC 01961 and CPC 01962 baseline remains.

## Consequences

- CPC 3.0 has 371 accepted mappings and 2,506 unmapped leaves.
- The alias registry has 2,506 entries.
- The material catalog has 373 PCRs and 2,505 legacy scaffolds.
