---
title: Accept food production batch 001 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing food PCR production batch 001
  - when resolving CPC 21121, 21612, 22110, 23110, or 23520
  - when regenerating aliases, coverage, or the material catalog after this batch
whenToUpdate:
  - when one of the accepted semantic mappings or PCR identities changes
checkPaths:
  - docs/adr/0017-accept-food-production-batch-001-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
  - library/pcrs/food-products-beverages-and-tobacco-textiles-apparel-and-leather-products/**
lastReviewedAt: 2026-08-10
lastReviewedCommit: null
---

# Accept Food Production Batch 001 CPC 3.0 Mappings

## Decision

Accept the five CPC 3.0-to-PCR edges below after repository-owner approval of the six-Worktree food production workflow and scheduler review of each completed author task. Each accepted target is a bilingual, four-file, `candidate` / `authored_methodology` PCR whose canonical identity, CPC scope, source evidence, Tiangong reference flow, structured projection, and target validation findings were reviewed.

The accepted edges are recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`. This ADR is their durable acceptance reference.

## Accepted Edges

| CPC 3.0 | Product | Relation | Canonical PCR id |
| --- | --- | --- | --- |
| 21121 | Meat of chickens, fresh or chilled | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-chickens-fresh-or-chilled` |
| 21612 | Soya bean oil, refined | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.soya-bean-oil-refined` |
| 22110 | Processed liquid milk | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.processed-liquid-milk` |
| 23110 | Wheat and meslin flour | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.wheat-and-meslin-flour` |
| 23520 | Refined sugar | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.refined-sugar` |

## Explicit Exclusion

CPC 23161, Rice, semi- or wholly milled, remains unmapped and its retained legacy scaffold remains unchanged. The only exact-code Tiangong product flow found in this batch was described as harvested, unprocessed grain at farm gate. That semantic conflict makes the critical product flow UUID unusable for a milled-rice PCR, so the item remains `blocked` rather than receiving a fabricated or misleading reference.

## Consequences

- The CPC 3.0 mapping contains 105 accepted positive edges after this batch.
- Deterministic alias regeneration removes the five accepted targets' former terminal aliases and leaves 2,772 aliases.
- CPC 3.0 coverage becomes 105 mapped, 2,772 unmapped, and 0 unknown leaves.
- The material catalog contains 107 PCRs.
- Mapping acceptance does not publish these candidate PCRs; methodology review and lifecycle publication remain separate controls.
