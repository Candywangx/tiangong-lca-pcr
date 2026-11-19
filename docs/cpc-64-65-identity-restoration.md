---
title: CPC 64 and 65 original PCR identity restoration
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when authoring or resolving CPC 64 and 65 PCRs
  - when reviewing original scaffold identities and replacement records
whenToUpdate:
  - when the user-directed identity correction changes
  - when migration verification results change
checkPaths:
  - AGENTS.md
  - docs/cpc-64-65-identity-restoration.md
  - docs/adr/cpc-64*.md
  - docs/adr/cpc-65*.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/passenger-transport-services/**
  - library/pcrs/distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a/freight-transport-services/**
lastReviewedAt: 2026-11-17
lastReviewedCommit: null
lastReviewedNote: "Restore original CPC 64 and 65 scaffold identities while preserving authored methodology and semantic acceptance."
---

# CPC 64 and 65 original PCR identity restoration

On 2026-11-17 the user explicitly requested: “64和65全部修改为在原id的基础上升级”. All 28 CPC 64 and
28 CPC 65 candidate methodologies therefore upgrade their original scaffold ids and directories, as recorded in
`classifications/systems/cpc/3.0/normalized/leaf-slugs.json`. The inventory locates existing identities; it does not
define new methodology or alter the actual product boundary.

## Installed correction

- Copy each complete authored candidate into its corresponding original scaffold directory. Restore its original
  manifest id and every bilingual canonical identity reference. Preserve the authored product titles, boundaries,
  reference flows, inventories, UUIDs, quantities, modules, translation states and candidate maturity.
- Retarget the 56 existing accepted mapping edges and their individual code-named ADRs. Preserve each relation,
  original semantic reviewer and acceptance time. This decision authorizes the identity correction, not a new
  semantic acceptance or publication.
- Regenerate every restored `structured.yaml` through the builder and verify repeat-sync determinism. The old
  generated files are not hand-edited to claim freshness.
- Remove the 56 unpublished replacement directories from the canonical library. Do not retain parallel material
  records or create aliases for those replacement ids.
- Rebuild the legacy-id registry and catalog/coverage artifacts with the official commands. The 56 original ids
  now resolve directly to material PCRs and are no longer legacy aliases.

One pre-existing escaped opening quote in the CPC 64131 unresolved-coal reason was normalized to prevent repeated
manifest serialization from multiplying backslashes. The reason's words and unresolved status are preserved.

The earlier CPC 64 one-code/one-PCR decision remains applicable to its 28 distinct records. Its former directory
arrangement and prohibition on upgrading the old scaffolds are superseded by this explicit correction. CPC 63
already uses all 16 original scaffold identities and is unchanged. CPC 62 remains unmapped with empty scaffolds.

Historical `docs/evidence/`, research-session reports and earlier sections of ADRs retain their original ids,
paths and hashes as dated evidence. They are not current catalog entries or installation instructions. The earlier
`cpc-6-migration-20261117` report records the state before this correction.

## Verification

The subsequent eight-dimension review found that synchronization had truncated review metadata in 11 CPC 64
manifests, losing 99 unresolved-flow registrations and shortening 11 retained reasons. The earlier preservation
comparison did not detect this source-to-parser loss. These fields are restored from the original source commit by
the later [CPC 63/64/65 structure cleanup](cpc-63-64-65-structure-cleanup.md), which also supersedes module
preservation for the user's explicitly selected 72 PCRs. The original identity correction remains in force.

All 56 source candidates passed `pcr:check` before migration. The final identity inventory, methodology-preservation
comparison, repeated-sync results, runtime resolution/guidance readback and repository validation are recorded in
`builder/research-sessions/cpc-64-65-identity-restoration-20261117/`. Candidates retain their existing unresolved
identity and quantity evidence; automated checks do not establish publication readiness.
