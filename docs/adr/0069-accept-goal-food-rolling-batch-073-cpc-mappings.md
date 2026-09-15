---
title: Accept Goal food rolling batch 073 CPC 3.0 mappings
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
whenToUse:
  - when auditing Goal food rolling production batch 073
  - when resolving CPC 21185, 21189, 21529, 21931, or 21932
whenToUpdate:
  - when an accepted semantic mapping or PCR identity changes
checkPaths:
  - docs/adr/0069-accept-goal-food-rolling-batch-073-cpc-mappings.md
  - classifications/mappings/cpc-3.0-to-pcr.yaml
  - classifications/aliases/pcr-id-aliases.yaml
  - classifications/indexes/cpc-3.0-coverage.json
  - library/catalog.yaml
  - library/indexes/pcr-index.yaml
lastReviewedAt: 2026-08-13
lastReviewedCommit: null
---

# Accept Goal Food Rolling Batch 073 CPC 3.0 Mappings

## Decision

Accept five exact CPC-to-PCR edges authored in independent desktop-visible Worktrees, repaired where necessary, and synchronized by the rolling scheduler. Each target is a bilingual candidate material PCR with a deterministic projection and atomic-flows-v1 inventory.

## Accepted Edges

| CPC | Product | Canonical PCR id | Atomic cards | Product flow UUID |
| --- | --- | --- | ---: | --- |
| 21185 | Extracts and juices of meat, fish, crustaceans, molluscs or other aquatic invertebrates | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.extracts-and-juices-of-meat-fish-crustaceans-molluscs-or-other-aquatic-invertebrates | 103 | 0238a5c5-5b90-4881-8277-cd862a581eb8 |
| 21189 | Other prepared or preserved meat, meat offal or blood | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-prepared-or-preserved-meat-meat-offal-or-blood | 530 | 61b39162-1ed6-4d66-b54b-9c0889bd9fc4 |
| 21529 | Other animal fats, rendered | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-animal-fats-rendered | 149 | 42e4d7de-ef5e-4dd5-96f9-8680da80c5db |
| 21931 | Vegetable waxes (other than triglycerides), whether or not refined or coloured | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.vegetable-waxes-other-than-triglycerides-whether-or-not-refined-or-coloured | 251 | 1933406f-ca56-4672-9678-ae3925128a03 |
| 21932 | Degras; residues resulting from the treatment of fatty substances or animal or vegetable waxes | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.degras-residues-resulting-from-the-treatment-of-fatty-substances-or-animal-or-vegetable-waxes | 148 | 98984fb7-e8b6-4d33-b6c7-130f38acbf15 |

## Evidence and Verification

- Retained UN CPC 3.0 source bytes define all product boundaries.
- Tiangong flow-hybrid-search plus public state-code-100 direct reads confirmed every reference flow as Product/Mass with exact base name and CPC.
- The CPC 21189 flow comment contains erroneous exclusion cross-references and the CPC 21932 flow comment contains an unrelated dairy heading; each defect is explicitly recorded while the exact base name and classification establish identity.
- Official UN, JRC, EU PEF, Codex, FAO, EPA, and applicable regulatory sources support the authored process and inventory structures.
- Central structured synchronization passed for all five targets.

## Consequences

- CPC 3.0 has 382 accepted mappings and 2,495 unmapped leaves.
- The alias registry has 2,495 entries.
- The material catalog has 384 PCRs and 2,494 legacy scaffolds.
