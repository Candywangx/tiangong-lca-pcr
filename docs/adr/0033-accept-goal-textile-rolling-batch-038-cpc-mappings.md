---
title: Accept Goal textile rolling batch 038 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 038
  - when resolving CPC 26830 or 26850
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0033-accept-goal-textile-rolling-batch-038-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-12
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 038 CPC 3.0 Mappings

## Decision

Accept two exact CPC 3.0-to-PCR edges generated in independent desktop-visible Worktrees and landed by the rolling scheduler. Each target is a complete bilingual `candidate` / `authored_methodology` material PCR with deterministic projection and `atomic_flows: v1` cards.

The product flows were hybrid-discovered and directly read in Tiangong public state 100 as Product flows with exact CPC semantics and Mass/kg identity. Unresolved inventory identities remain concrete row-specific exchanges without fabricated UUIDs or AI amount ranges. These mappings are accepted immediately because the deterministic legacy-id registry fails closed when a material PCR still has its old known-unmapped alias.

## Accepted Edges

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 26830 | Other woven pile fabrics and chenille fabrics | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-woven-pile-fabrics-and-chenille-fabrics-other-than-terry-towelling-and-narrow-fabrics` | `91e48617-c5a4-423e-870d-696c311f7b05` |
| 26850 | Other terry towelling and similar woven terry fabrics | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.other-terry-towelling-and-similar-woven-terry-fabrics-other-than-narrow-fabrics` | `93944c2a-106d-4c2d-9785-58ec3fc17a42` |

## Consequences

- CPC 3.0 has 303 accepted mappings and 2,574 unmapped leaves.
- The alias registry has 2,574 entries.
- The material catalog has 305 PCRs and 2,573 legacy scaffolds.
