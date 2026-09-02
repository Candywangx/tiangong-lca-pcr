---
title: Accept food production batch 006 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing food PCR production batch 006
  - when resolving CPC 22120, 22130, 22212, 23540, 23620, or 23660
  - when regenerating aliases, coverage, or the material catalog after this batch
whenToUpdate:
  - when one of the accepted semantic mappings or PCR identities changes
checkPaths:
  - docs/adr/0022-accept-food-production-batch-006-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
  - library/pcrs/food-products-beverages-and-tobacco-textiles-apparel-and-leather-products/**
lastReviewedAt: 2026-08-10
lastReviewedCommit: null
---

# Accept Food Production Batch 006 CPC 3.0 Mappings

## Decision

Accept the six CPC 3.0-to-PCR edges below after repository-owner approval of the six-Worktree production workflow and scheduler review of each completed visible Codex project task. Each target is a bilingual, four-file, `candidate` / `authored_methodology` PCR with reviewed identity, category scope, source evidence, Tiangong reference flow, structured projection, and target validation findings.

## Accepted Edges

| CPC 3.0 | Product | Relation | Canonical PCR id | Tiangong product flow UUID |
| --- | --- | --- | --- | --- |
| 22120 | Cream, fresh | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.cream-fresh` | `e58b11a6-5d86-40a3-bed6-e365a95d0981` |
| 22130 | Whey | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.whey` | `7ee9083e-5a51-476e-b96f-1501752e169a` |
| 22212 | Skim milk and whey powder | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.dairy-products-and-egg-products.skim-milk-and-whey-powder` | `bf850eca-76f2-400d-9cfa-b62c10d64c0a` |
| 23540 | Molasses | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.molasses` | `dcc60867-03df-4ea1-be73-6d88987911bd` |
| 23620 | Cocoa butter, fat and oil | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cocoa-butter-fat-and-oil` | `402dbf23-610a-4be9-a34f-333ec03580a9` |
| 23660 | Chocolate and other food preparations containing cocoa, other than in bulk forms | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.chocolate-and-other-food-preparations-containing-cocoa-except-sweetened-cocoa-powder-ot-3fe2fc05` | `4c4a6e1b-a4a8-4d16-ac36-1e5492e752a3` |

## Review Notes

- All six reference flows are public `state_code=100` product flows with the recorded CPC identity and Mass as their quantitative reference property; the support chain resolves to Units of mass and kg.
- The CPC 22212 reference flow is specifically skim milk powder. The PCR covers the combined CPC category and requires the declared powder form and route; the reference UUID must not be reused for whey powder without a form-specific verified flow.
- Official Codex, EU, EPA, FAO, ICCO, GHG Protocol, and JRC evidence is used according to its stated scope. Search snippets are not evidence, and the web-search/llm-context HTTP 402 quota condition was handled by opening official source text directly.
- Where transferable numeric evidence was unavailable, values are either left for foreground collection or explicitly marked as replaceable `reasoned_estimate` QA guardrails.
- These accepted mappings do not publish the candidate PCRs; methodology review and lifecycle publication remain separate controls.

## Consequences

- The CPC 3.0 mapping contains 131 accepted positive edges after this batch.
- Deterministic alias regeneration removes the six accepted targets' former terminal aliases and leaves 2,746 aliases.
- CPC 3.0 coverage becomes 131 mapped, 2,746 unmapped, and 0 unknown leaves.
- The material catalog contains 133 PCRs.
