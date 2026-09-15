---
title: Accept Goal textile batch 031 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal textile PCR production batch 031
  - when resolving CPC 26110, 26130, 26150, 26160, 26210, or 26220
whenToUpdate:
  - when one of the accepted semantic mappings or PCR identities changes
checkPaths:
  - docs/adr/0027-accept-goal-textile-batch-031-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
  - library/pcrs/food-products-beverages-and-tobacco-textiles-apparel-and-leather-products/yarn-and-thread-woven-and-tufted-textile-fabrics/**
lastReviewedAt: 2026-08-12
lastReviewedCommit: null
---

# Accept Goal Textile Batch 031 CPC 3.0 Mappings

## Decision

Accept six exact CPC 3.0-to-PCR edges after repository-owner approval of the continuing six-Worktree Goal workflow and scheduler review of six independent desktop-visible Codex tasks. Each target is an in-place promotion of a retained leaf scaffold to one bilingual, four-file, `candidate` / `authored_methodology` PCR.

Before acceptance, the scheduler re-ran structured sync in the main repository and applied the `atomic_flows: v1` gate. Every English and Chinese process inventory contains one card per atomic exchange, has aligned process, direction, flow type, row id, order and UUID identity, and has no target-specific builder lint problem. Flow UUIDs were accepted only after hybrid discovery and direct Tiangong readback of state, flow type, semantic identity, reference property and unit.

## Accepted Edges

| CPC 3.0 | Product | Relation | Canonical PCR id | Tiangong product flow UUID |
| --- | --- | --- | --- | --- |
| 26110 | Raw silk (not thrown) | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.raw-silk-not-thrown` | `343df125-d682-4ffa-8829-5fbc785bdbc9` |
| 26130 | Wool, degreased or carbonized, not carded or combed | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.wool-degreased-or-carbonized-not-carded-or-combed` | `1f286780-8831-47b4-88dd-582d6b7f8947` |
| 26150 | Wool and fine or coarse animal hair, carded or combed | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.wool-and-fine-or-coarse-animal-hair-carded-or-combed` | `7919afd2-a0eb-41f6-a192-705e27597637` |
| 26160 | Cotton, carded or combed | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.cotton-carded-or-combed` | `93976740-418a-40e3-8901-dbc34f0acdc6` |
| 26210 | Synthetic staple fibres, carded, combed or otherwise processed for spinning | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.synthetic-staple-fibres-carded-combed-or-otherwise-processed-for-spinning` | `95a493a4-1e51-4eb5-9b7c-e06bf912e993` |
| 26220 | Artificial staple fibres, carded, combed or otherwise processed for spinning | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.artificial-staple-fibres-carded-combed-or-otherwise-processed-for-spinning` | `4f65996d-819a-4b51-8c1a-e3c3ecaa96b2` |

## Review Notes

- CPC scope, product identity and Mass reference property were confirmed by direct Tiangong readback. CPC 26210 retains an explicit warning that its platform flow name, “Synthetic Fiber Cloth”, is misleading and must not broaden the PCR into fabric manufacture.
- Product-category mapping acceptance does not imply that every inventory exchange has a platform UUID. Unresolved atomic exchanges remain explicit, carry lookup or candidate-rejection notes, and cannot be replaced by collection labels.
- Provisional `reasoned_estimate` ranges remain candidate-stage QA screens and require foreground or reviewed replacement evidence before methodology review or publication.
- This decision accepts classification identity; it does not publish the PCRs or promote their methodology lifecycle.

## Consequences

- The CPC 3.0 mapping contains 279 accepted positive edges after this integration.
- Deterministic alias regeneration removes the six accepted targets' terminal aliases and leaves 2,598 aliases.
- CPC 3.0 coverage becomes 279 mapped, 2,598 unmapped, and 0 unknown leaves.
- The material catalog contains 281 PCRs; two existing material PCRs still lack accepted CPC mappings.
