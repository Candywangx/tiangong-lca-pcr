---
title: Accept food production batch 002 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing food PCR production batch 002
  - when resolving CPC 21113, 21611, 22211, 23490, or 24310
  - when regenerating aliases, coverage, or the material catalog after this batch
whenToUpdate:
  - when one of the accepted semantic mappings or PCR identities changes
checkPaths:
  - docs/adr/0018-accept-food-production-batch-002-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
  - library/pcrs/food-products-beverages-and-tobacco-textiles-apparel-and-leather-products/**
lastReviewedAt: 2026-08-10
lastReviewedCommit: null
---

# Accept Food Production Batch 002 CPC 3.0 Mappings

## Decision

Accept the five CPC 3.0-to-PCR edges below after repository-owner approval of the six-Worktree food production workflow and scheduler review of each completed author task. Each accepted target is a bilingual, four-file, `candidate` / `authored_methodology` PCR whose canonical identity, CPC scope, source evidence, Tiangong reference flow, structured projection, and target validation findings were reviewed.

The accepted edges are recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`. This ADR is their durable acceptance reference.

## Accepted Edges

| CPC 3.0 | Product | Relation | Canonical PCR id |
| --- | --- | --- | --- |
| 21113 | Meat of pigs, fresh or chilled | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-pigs-fresh-or-chilled` |
| 21611 | Soya bean oil, crude | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.soya-bean-oil-crude` |
| 22211 | Whole milk powder | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.whole-milk-powder` |
| 23490 | Bread and other bakers' wares | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.bread-and-other-bakers-wares` |
| 24310 | Beer made from malt | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.beer-made-from-malt` |

## Explicit Exclusion

CPC 21651, Palm oil, crude, remains unmapped and its retained legacy scaffold remains unchanged. The only exact-code Tiangong product flow found in this batch was described as fresh, unprocessed produce at farm gate, which conflicts with crude palm oil extraction at the mill. The item therefore remains `blocked`; neither that flow nor the inconsistent process candidates were used.

## Consequences

- The CPC 3.0 mapping contains 110 accepted positive edges after this batch.
- Deterministic alias regeneration removes the five accepted targets' former terminal aliases and leaves 2,767 aliases.
- CPC 3.0 coverage becomes 110 mapped, 2,767 unmapped, and 0 unknown leaves.
- The material catalog contains 112 PCRs.
- Mapping acceptance does not publish these candidate PCRs; methodology review and lifecycle publication remain separate controls.
