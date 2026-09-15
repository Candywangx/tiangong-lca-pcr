---
title: Accept Goal textile rolling batch 034 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 034
  - when resolving CPC 26422, 26440, 26450, 26461, 26462, or 26510
whenToUpdate:
  - when one of the accepted semantic mappings or PCR identities changes
checkPaths:
  - docs/adr/0029-accept-goal-textile-rolling-batch-034-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-12
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 034 CPC 3.0 Mappings

## Decision

Accept six exact CPC 3.0-to-PCR edges produced through independent desktop-visible Codex Worktrees. The scheduler reviewed each four-file target, re-synchronized its deterministic structured projection in the main repository, and applied the `atomic_flows: v1` gate. Inventory exchanges are concrete and atomic; unresolved identities remain explicit rather than being replaced by collection or route selectors.

The reference products and adopted inventory UUIDs were accepted only after hybrid discovery and direct Tiangong readback for public state, flow type, semantic identity, reference property, and unit. CPC 26430 was excluded from this acceptance batch because its only CPC-labelled result was the semi-finished product “Semi-finished down feather”, not the required fabric product.

## Accepted Edges

| CPC 3.0 | Product | Relation | Canonical PCR id | Tiangong product flow UUID |
| --- | --- | --- | --- | --- |
| 26422 | Man-made filament yarn (other than sewing thread), put up for retail sale | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.man-made-filament-yarn-other-than-sewing-thread-put-up-for-retail-sale` | `561c51b1-b4f9-4eea-b081-e096bf93820b` |
| 26440 | Yarn (other than sewing thread) of synthetic staple fibres, containing less than 85% by weight of such fibres | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-synthetic-staple-fibres-containing-less-than-85-by-wei-6a02e796` | `914fcc34-ead6-4938-af63-b4ffa94e0a99` |
| 26450 | Yarn (other than sewing thread) of artificial staple fibres, containing 85% or more by weight, not put up for retail sale | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-artificial-staple-fibres-containing-85-or-more-by-weig-8014c608` | `b2fccf4f-e4c4-4723-9e9b-ef0956abd0fc` |
| 26461 | Yarn (other than sewing thread) of artificial staple fibres, containing less than 85% by weight, not put up for retail sale | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-artificial-staple-fibres-containing-less-than-85-by-we-91af20fd` | `2fde586f-9999-4f3e-8022-fe0d8a19e270` |
| 26462 | Yarn (other than sewing thread) of artificial staple fibres, put up for retail sale | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-artificial-staple-fibres-put-up-for-retail-sale` | `9cb2deeb-5eb3-4128-a175-ccbf63b8a2cc` |
| 26510 | Woven fabrics of silk or of silk waste | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-silk-or-of-silk-waste` | `f7cf0661-025b-47cc-b5e2-d44b43e07e6b` |

## Consequences

- The CPC 3.0 mapping contains 291 accepted positive edges.
- Deterministic alias regeneration removes six accepted targets and leaves 2,586 aliases.
- CPC 3.0 coverage becomes 291 mapped, 2,586 unmapped, and 0 unknown leaves.
- The material catalog contains 293 PCRs; two existing material PCRs remain without accepted CPC mappings.
