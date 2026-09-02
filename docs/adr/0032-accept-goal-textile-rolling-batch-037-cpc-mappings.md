---
title: Accept Goal textile rolling batch 037 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 037
  - when resolving CPC 26810, 26820, or 26840
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0032-accept-goal-textile-rolling-batch-037-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-12
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 037 CPC 3.0 Mappings

## Decision

Accept three exact CPC 3.0-to-PCR edges generated in independent desktop-visible Worktrees and landed by the rolling scheduler. Each target is a complete bilingual `candidate` / `authored_methodology` material PCR with deterministic projection and `atomic_flows: v1` cards.

The product flows were hybrid-discovered and directly read in Tiangong public state 100 as Product flows with exact CPC semantics and Mass/kg identity. Unresolved inventory identities remain concrete row-specific exchanges without fabricated UUIDs or AI amount ranges. These mappings are accepted immediately because the deterministic legacy-id registry fails closed when a material PCR still has its old known-unmapped alias.

## Accepted Edges

| CPC | Product | Canonical PCR id | Product flow UUID |
| --- | --- | --- | --- |
| 26810 | Cotton woven pile and chenille fabrics | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-pile-fabrics-and-chenille-fabrics-other-than-terry-towelling-and-narrow-fabrics-of-cotton` | `4dba0da8-c16f-4b12-8563-bc1ff5fee1c2` |
| 26820 | Man-made-fibre woven pile and chenille fabrics | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-pile-fabrics-and-chenille-fabrics-other-than-terry-towelling-and-narrow-fabrics-o-b5487362` | `cb5fb579-ee14-4546-9d47-0a088d4dda76` |
| 26840 | Cotton terry towelling and similar woven terry fabrics | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.terry-towelling-and-similar-woven-terry-fabrics-other-than-narrow-fabrics-of-cotton` | `61be29ff-288e-4570-8335-4e03760c9255` |

## Consequences

- CPC 3.0 has 301 accepted mappings and 2,576 unmapped leaves.
- The alias registry has 2,576 entries.
- The material catalog has 303 PCRs and 2,575 legacy scaffolds.
