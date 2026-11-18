---
title: CPC 63, 64 and 65 structure and inventory cleanup
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when updating the 72 retained CPC 63, 64 and 65 PCRs
whenToUpdate:
  - when the user-directed dependency or atomic inventory policy changes
checkPaths:
  - AGENTS.md
  - docs/cpc-63-64-65-structure-cleanup.md
  - library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/accommodation-food-and-beverage-services/**
  - library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/passenger-transport-services/**
  - library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/freight-transport-services/**
lastReviewedAt: 2026-11-17
lastReviewedCommit: null
lastReviewedNote: "User explicitly selected all 72 CPC 63/64/65 PCRs for module-free, Flow-Set-free and non-aggregate inventory repair."
---

# CPC 63, 64 and 65 structure and inventory cleanup

On 2026-11-17 the user requested repair of every CPC 64 PCR's structure and clarified that the no-modules,
no-Flow-Sets and no-aggregate-flows requirement applies to all 72 CPC 63/64/65 records. This is a scoped override
of the general module selection workflow. It does not remove shared modules or alter unrelated PCRs.

- Keep original scaffold PCR ids, semantic directories and the accepted classification edges.
- Restore the 99 missing unresolved-flow registrations, 11 truncated reasons and lost review fields of the 11
  affected CPC 64 manifests from commit `ab5e7d97375975bc0d3076ebae65ed0eb45d4363`. Use a full YAML parser for
  recovery, serialize in the builder's supported single-line format and require semantic round-trip equality
  before synchronization. This local repair does not claim to fix every limitation of `yaml-lite` globally.
- Keep all module reference lists empty in manifests and generated projections. Do not reintroduce module ids
  through automatic authoring plans. The PCR's own methodological obligations remain in its bilingual content.
- Do not use Flow Set bindings or references in these PCRs.
- Keep one concrete material, physical assembly, independently defined service, genuine receiving mixture or
  identified environmental substance/compartment per inventory card. A complete bus or an actual collected
  wastewater mixture is not an artificial aggregate merely because it contains multiple constituents.
- Remove multi-identity requirement cards from inventory. Retain each original stable identifier as a
  `requirement_id` in an explicit collection protocol and `unresolved_atomic_expansion_requirements` entry.
  Preserve original measurement rules, evidence needs, node ownership, stock/failure/rework/lifecycle burdens,
  all-user allocation and source references. The requirement cannot carry an aggregate exchange quantity or UUID.
- Every actual occurrence must resolve to its concrete identity, native quantity, unit and verification evidence.
  Reconcile existing concrete branches once; missing evidence is not absence or zero. Internal handoffs require
  matching event/identity/quantity pairs. Do not delete a duty merely because its identity is not known yet.
- Retain existing verified concrete UUIDs and their evidence. Unresolved concrete flow identities remain registered
  by actual row id. Support blockers for converted requirements follow the requirement rather than a nonexistent row.
- Rebuild projections through the builder, compare both languages and repeat synchronization to prove stability.
  Retain candidate scientific-review and unresolved-identity limits; structural completion is not publication.

The record-level repair plan, source recovery comparison, atomic-card decisions, invariant checks and validation
results are recorded in `builder/research-sessions/cpc-63-64-65-structure-repair-20261117/`.
