---
title: Accept Goal textile rolling batch 036 CPC 3.0 mapping
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile rolling production batch 036
  - when resolving CPC 26770
whenToUpdate:
  - when the accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0031-accept-goal-textile-rolling-batch-036-cpc-mapping.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-12
lastReviewedCommit: null
---

# Accept Goal Textile Rolling Batch 036 CPC 3.0 Mapping

## Decision

Accept one new exact CPC 3.0-to-PCR edge from the six-result rolling integration group. CPC 26630, 26720, 26740, 26750, and 26790 already had accepted edges under ADR 0026; this group atomized their existing material methodology and therefore does not duplicate or replace those accepted decisions.

CPC 26770 is a complete bilingual `candidate` / `authored_methodology` PCR with deterministic structured projection and `atomic_flows: v1` inventory cards. Its reference product was hybrid-discovered and directly read from Tiangong in public state 100 as an exact CPC 26770 Product flow with Mass/kg identity. Unresolved inventory identities remain concrete single exchanges with row-specific rejection reasons and no fabricated UUID or AI amount range.

## Accepted Edge

| CPC 3.0 | Product | Relation | Canonical PCR id | Tiangong product flow UUID |
| --- | --- | --- | --- | --- |
| 26770 | Woven fabrics of man-made staple fibres, less than 85%, mixed mainly or solely with wool or fine animal hair | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-man-made-staple-fibres-containing-less-than-85-of-such-fibres-mixed-ma-a8e6f329` | `dad59cf0-4b5e-4f0a-ae44-00f1b0587dfb` |

## Consequences

- The CPC 3.0 mapping contains 298 accepted positive edges.
- Deterministic alias regeneration leaves 2,579 aliases.
- CPC 3.0 coverage becomes 298 mapped, 2,579 unmapped, and 0 unknown leaves.
- The material catalog contains 300 PCRs at this integration point; two material PCRs have no accepted CPC mapping.
