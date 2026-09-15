---
title: Accept food production batch 005 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing food PCR production batch 005
  - when resolving CPC 21621, 21622, 21681, 21682, 21700, or 21910
  - when regenerating aliases, coverage, or the material catalog after this batch
whenToUpdate:
  - when one of the accepted semantic mappings, blocked findings, or PCR identities changes
checkPaths:
  - docs/adr/0021-accept-food-production-batch-005-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
  - library/pcrs/food-products-beverages-and-tobacco-textiles-apparel-and-leather-products/**
lastReviewedAt: 2026-08-10
lastReviewedCommit: null
---

# Accept Food Production Batch 005 CPC 3.0 Mappings

## Decision

Accept four of the six CPC 3.0-to-PCR edges reviewed in food production batch 005. Each accepted target is a bilingual, four-file, `candidate` / `authored_methodology` PCR whose canonical identity, CPC scope, source evidence, Tiangong reference flow, structured projection, and target validation findings were reviewed.

CPC 21681 and 21700 remain unmapped and their legacy scaffolds remain unchanged because no semantically correct Tiangong reference flow could be verified. Candidate discovery included both Tiangong CLI enumeration and the repository-local `flow-hybrid-search` workflow; ranked search output was never treated as evidence, and each candidate was read back through Tiangong CLI before disposition.

## Accepted Edges

| CPC 3.0 | Product | Relation | Canonical PCR id | Tiangong product flow UUID |
| --- | --- | --- | --- | --- |
| 21621 | Groundnut oil, crude | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.groundnut-oil-crude` | `4becfdba-2a4c-4c6f-a503-75db987fdc16` |
| 21622 | Groundnut oil, refined | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.groundnut-oil-refined` | `f3a626d9-6e6e-42c2-9542-4824ab538765` |
| 21682 | Cottonseed oil, refined | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cottonseed-oil-refined` | `5c448d72-c368-4fd2-a3d0-e1cc73572241` |
| 21910 | Oil-cake and other solid residues, of vegetable fats or oils | `exact` | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.oil-cake-and-other-solid-residues-of-vegetable-fats-or-oils` | `1fb23bcc-f166-4b96-b451-56264a8af86a` |

## Blocked or Excluded Targets

- **CPC 21681, cottonseed oil, crude:** no true crude-cottonseed-oil product flow was verified. `a5d3b1ef-9fde-4393-af7b-5ec33451551d` is cottonseed meal despite its CPC metadata, `a60671ff-7325-4636-9fba-bcc5f6afaeeb` is cottonseed seed, and `5c448d72-c368-4fd2-a3d0-e1cc73572241` is refined cottonseed oil. Process `371704b8-e852-4590-9518-832bc4f08199` was excluded because its quantitative reference points to cottonseed and its inventory contains placeholder or dimensionally invalid values.
- **CPC 21700, margarine and similar preparations:** six hybrid queries and Tiangong CLI read-back produced no exact product flow. The only CPC 21700-labelled candidate, `405855e4-6e87-4e81-942e-b9315f925c72`, is semantically soy sauce and was rejected.

These are `blocked` queue outcomes, not accepted mapping edges and not permission to invent or repurpose a UUID.

## Review Notes

- The four accepted flows are public `state_code=100` product flows with the recorded CPC identity and Mass as the quantitative reference property.
- The CPC 21910 flow is a representative exact-category mustard-oil press-cake flow. The PCR requires a different category-compatible product flow when the declared solid residue is not mustard mechanical press cake.
- Numeric values without sufficiently strong category-specific evidence remain explicit, replaceable `reasoned_estimate` QA ranges or are left as required primary-data gaps.
- The accepted mappings do not publish these candidate PCRs; methodology review and lifecycle publication remain separate controls.

## Consequences

- The CPC 3.0 mapping contains 125 accepted positive edges after this batch.
- Deterministic alias regeneration removes the four accepted targets' former terminal aliases and leaves 2,752 aliases.
- CPC 3.0 coverage becomes 125 mapped, 2,752 unmapped, and 0 unknown leaves.
- The material catalog contains 127 PCRs.
