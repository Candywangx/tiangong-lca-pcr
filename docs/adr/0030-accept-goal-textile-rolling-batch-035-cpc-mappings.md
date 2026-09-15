---
title: Accept Goal textile rolling batch 035 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 035
  - when resolving CPC 26520, 26540, 26550, 26560, 26570, or 26590
whenToUpdate:
  - when one of the accepted semantic mappings or PCR identities changes
checkPaths:
  - docs/adr/0030-accept-goal-textile-rolling-batch-035-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-12
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 035 CPC 3.0 Mappings

## Decision

Accept six exact CPC 3.0-to-PCR edges generated through independent desktop-visible Codex Worktrees and landed through the rolling scheduler. Each target is a complete bilingual `candidate` / `authored_methodology` PCR with deterministic structured projection and `atomic_flows: v1` inventory cards.

Reference product UUIDs were hybrid-discovered and directly read from Tiangong in public state 100 for product type, exact CPC semantics, Mass property, and kg unit. Adopted inventory UUIDs were batch-read again by the scheduler; unresolved identities remain concrete single exchanges with row-specific rejection reasons and no fabricated UUID or AI amount range.

## Accepted Edges

| CPC 3.0 | Product | Relation | Canonical PCR id | Tiangong product flow UUID |
| --- | --- | --- | --- | --- |
| 26520 | Woven fabrics of carded wool or carded fine animal hair, at least 85% by weight | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-carded-wool-or-of-carded-fine-animal-hair-containing-85-or-more-by-wei-f89379c7` | `d5a61944-e4b9-4a9c-9b26-b2f2b413d7d0` |
| 26540 | Woven fabrics of wool or fine animal hair, less than 85% by weight | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-wool-or-fine-animal-hair-containing-less-than-85-by-weight-of-wool-or-56d3e175` | `89be6289-db50-45f3-9a41-389357845e7f` |
| 26550 | Woven fabrics of coarse animal hair or horsehair | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-coarse-animal-hair-or-of-horsehair` | `1c5ad852-86e2-4185-a68b-cdb7e3e5eb9c` |
| 26560 | Woven fabrics of flax | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-flax` | `be3ea0c2-7e29-449a-97fc-8bf2ac32b999` |
| 26570 | Woven fabrics of jute and other textile bast fibres | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-jute-and-other-textile-bast-fibres-except-flax-true-hemp-and-ramie` | `97e92077-1caf-4f27-9d87-9b49e9d6a4e2` |
| 26590 | Woven fabrics of other vegetable textile fibres; woven fabrics of paper yarn | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-other-vegetable-textile-fibres-woven-fabrics-of-paper-yarn` | `60d1ccca-cd64-48de-83c4-4ceec6af40a6` |

## Blocked Candidate

CPC 26610 was not accepted: its sole CPC-labelled state-100 candidate directly read back as `Cotton Yarn`, not the required cotton woven fabric.

## Consequences

- The CPC 3.0 mapping contains 297 accepted positive edges.
- Deterministic alias regeneration leaves 2,580 aliases.
- CPC 3.0 coverage becomes 297 mapped, 2,580 unmapped, and 0 unknown leaves.
- The material catalog contains 299 PCRs; two existing material PCRs remain without accepted CPC mappings.
