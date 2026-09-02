---
title: Accept food production batch 003 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing food PCR production batch 003
  - when resolving CPC 21642, 22230, 22241, 22251, or 24423
  - when regenerating aliases, coverage, or the material catalog after this batch
whenToUpdate:
  - when one of the accepted semantic mappings or PCR identities changes
checkPaths:
  - docs/adr/0019-accept-food-production-batch-003-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
  - library/pcrs/food-products-beverages-and-tobacco-textiles-apparel-and-leather-products/**
lastReviewedAt: 2026-08-10
lastReviewedCommit: null
---

# Accept Food Production Batch 003 CPC 3.0 Mappings

## Decision

Accept the five CPC 3.0-to-PCR edges below after repository-owner approval of the six-Worktree food production workflow and scheduler review of each completed author task. Each accepted target is a bilingual, four-file, `candidate` / `authored_methodology` PCR whose canonical identity, CPC scope, source evidence, Tiangong reference flow, structured projection, and target validation findings were reviewed.

The accepted edges are recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`. This ADR is their durable acceptance reference.

## Accepted Edges

| CPC 3.0 | Product | Relation | Canonical PCR id |
| --- | --- | --- | --- |
| 21642 | Rape, colza and mustard oil, refined | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.rape-colza-and-mustard-oil-refined` |
| 22230 | Yoghurt and other fermented or acidified milk and cream | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.yoghurt-and-other-fermented-or-acidified-milk-and-cream` |
| 22241 | Butter and other fats and oils derived from milk of cattle | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.butter-and-other-fats-and-oils-derived-from-milk-of-cattle` |
| 22251 | Cheese from milk of cattle, fresh or processed | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cheese-from-milk-of-cattle-fresh-or-processed` |
| 24423 | Soy milk | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.soy-milk` |

## Explicit Exclusion

CPC 23911, Coffee, decaffeinated or roasted, remains unmapped and its retained legacy scaffold remains unchanged. The only state-code-100 Tiangong product flow carrying CPC 23911 was a water-extracted roasted coffee concentrate, while other candidates represented instant coffee or green-coffee processing. Those semantic conflicts make the critical product flow UUID unusable for roasted or decaffeinated coffee, so the item remains `blocked`.

## Product-Form Constraint for CPC 22241

The accepted CPC 22241 PCR uses the state-code-100 Anhydrous milk fat flow as its verified representative product. Its rules explicitly prohibit applying that UUID to ordinary butter or another covered form without resolving and disclosing a form-specific product flow identity. This mapping accepts the category methodology; it does not declare the anhydrous-milkfat UUID equivalent to every product form in the CPC leaf.

## Consequences

- The CPC 3.0 mapping contains 115 accepted positive edges after this batch.
- Deterministic alias regeneration removes the five accepted targets' former terminal aliases and leaves 2,762 aliases.
- CPC 3.0 coverage becomes 115 mapped, 2,762 unmapped, and 0 unknown leaves.
- The material catalog contains 117 PCRs.
- Mapping acceptance does not publish these candidate PCRs; methodology review and lifecycle publication remain separate controls.
