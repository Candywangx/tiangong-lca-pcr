---
title: Accept Goal textile rolling batch 048 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 048
  - when resolving CPC 27911
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0043-accept-goal-textile-rolling-batch-048-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 048 CPC 3.0 Mapping

## Decision

Accept one exact CPC 3.0-to-PCR edge generated in an independent desktop-visible Worktree and synchronized by the rolling scheduler. The target is a bilingual `candidate` / `authored_methodology` material PCR with a deterministic projection and an `atomic_flows: v1` inventory.

## Accepted Edge

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 27911 | Narrow woven fabrics and related labels, braids and trimmings | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.textile-articles-other-than-apparel.narrow-woven-fabrics-narrow-fabrics-of-warp-without-weft-assembled-by-adhesive-bolducs-88199475` | `706a70f1-432b-41bc-b000-ddf409e94f3f` |

## Consequences

- CPC 3.0 has 315 accepted mappings and 2,562 unmapped leaves.
- The alias registry has 2,562 entries.
- The material catalog has 317 PCRs and 2,561 legacy scaffolds.
