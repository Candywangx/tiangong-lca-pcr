---
title: Accept food production batch 009 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing food PCR production batch 009
  - when resolving CPC 21186, 21270, 21280, 21433, 23140, or 23722
  - when regenerating aliases, coverage, or the material catalog after this batch
whenToUpdate:
  - when one of the accepted semantic mappings or PCR identities changes
checkPaths:
  - docs/adr/0025-accept-food-production-batch-009-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
  - library/pcrs/food-products-beverages-and-tobacco-textiles-apparel-and-leather-products/**
lastReviewedAt: 2026-08-10
lastReviewedCommit: null
---

# Accept Food Production Batch 009 CPC 3.0 Mappings

## Decision

Accept the six CPC 3.0-to-PCR edges below after repository-owner approval of the six-Worktree production workflow and scheduler review of each completed visible Codex project task. Each target is a bilingual, four-file, `candidate` / `authored_methodology` PCR with reviewed identity, category scope, source evidence, Tiangong reference flow, structured projection, and target validation findings.

## Accepted Edges

| CPC 3.0 | Product | Relation | Canonical PCR id | Tiangong product flow UUID |
| --- | --- | --- | --- | --- |
| 21186 | Prepared dishes and meals based on meat | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.prepared-dishes-and-meals-based-on-meat` | `61b586fc-1d4a-4abe-981d-19c27f9a33b0` |
| 21270 | Crustaceans, otherwise prepared or preserved | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.crustaceans-otherwise-prepared-or-preserved` | `d844fbf5-2247-4c2d-8071-7dab57ad8c77` |
| 21280 | Molluscs and other aquatic invertebrates, otherwise prepared or preserved | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.molluscs-and-other-aquatic-invertebrates-otherwise-prepared-or-preserved` | `5102ffa5-d24d-4e8c-b18d-d22f74677182` |
| 21433 | Pineapple juice | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.pineapple-juice` | `3d2b95ad-8673-4718-a728-e1e7d17b4271` |
| 23140 | Other cereal grain products (including corn flakes) | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-cereal-grain-products-including-corn-flakes` | `53e35f86-383d-45f6-87ef-13a25f1f10e6` |
| 23722 | Prepared dishes containing stuffed pasta; prepared couscous dishes | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.prepared-dishes-containing-stuffed-pasta-prepared-couscous-dishes` | `6ff6840a-8860-4e91-be9a-40d993df7105` |

## Review Notes

- All six reference flows are public `state_code=100` product flows with the recorded CPC identity and Mass as the quantitative reference property; the support chain resolves to Units of mass and kg.
- The CPC 21186 reference flow is the real category member `Sauce braised products`, not a fabricated generic flow. The PCR preserves that representative identity and requires a more specific verified flow when the modeled meat-based prepared dish is not represented by sauce-braised products.
- The other five flow names and terminal CPC labels align directly. Route, preservation state, recipe, concentration, packaging, net/drained mass, and cold-chain qualifiers remain foreground declarations where relevant.
- Official UNSD, Codex, FAO, EU/JRC, ISO, EPA, EPD International, and other authoritative sources are used only for their stated scope. Search snippets are not evidence; HTTP 402 responses from web-search and llm-context were handled by opening official source text or extracting official PDFs.
- No unsupported quantitative range or default was introduced. Values without transferable evidence remain foreground measurements, documented calculations, or explicit `reasoned_estimate` QA guardrails that must be replaced or confirmed before activation.
- These accepted mappings do not publish the candidate PCRs; methodology review and lifecycle publication remain separate controls.

## Consequences

- The CPC 3.0 mapping contains 149 accepted positive edges after this batch.
- Deterministic alias regeneration removes the six accepted targets' former terminal aliases and leaves 2,728 aliases.
- CPC 3.0 coverage becomes 149 mapped, 2,728 unmapped, and 0 unknown leaves.
- The material catalog contains 151 PCRs.
