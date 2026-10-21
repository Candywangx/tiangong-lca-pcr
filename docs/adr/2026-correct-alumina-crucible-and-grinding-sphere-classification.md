---
title: Correct alumina crucible and grinding-sphere classification
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: "2026-10-21"
---

# Correct alumina crucible and grinding-sphere classification

The user-directed review accepts the following coordinated corrections, superseding only the classification associations in [ADR 0450](0450-accept-pressed-alumina-chemical-crucible-bodies.md) and [ADR 0452](0452-accept-binder-free-alumina-grinding-spheres.md):

| Canonical PCR | Previous association | Current accepted association | Relation |
| --- | --- | --- | --- |
| `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.pressed-sintered-alumina-chemical-crucible-bodies` | CPC 3.0 37291 | CPC 3.0 37340 | narrower |
| `pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.binder-free-rolled-sintered-alumina-grinding-spheres` | CPC 3.0 37299 | CPC 3.0 37291 | narrower |

The canonical IDs above are the unchanged manifest identities. Each keeps exactly one accepted CPC association. The coordinated replacement leaves one edge per code: 37340 selects the crucible PCR; 37291 selects the grinding-sphere PCR; 37299 has no accepted edge and is known-unmapped. No fallback, duplicate 37291 edge or substitute methodology for 37299 is accepted.

## Evidence and interpretation

[UNSD CPC 3.0 explanatory notes, 30 June 2025](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf), printed/PDF pp. 182–183, distinguish laboratory/chemical/technical wares (37291), residual non-structural ceramic articles (37299), and unfired refractory products/other refractory ceramic goods (37340). These entries provide category descriptions, not a product-specific CPC 3.0–HS concordance.

The crucible PCR already expressly covers complete fired, pressed and sintered nominal 95% alumina refractory chemical-crucible bodies, including actual minor phases. [Morgan Sintox FA, complete one-page sheet](https://www.morgantechnicalceramics.com/media/y14by1i3/sintox-fa.pdf) identifies the refractory-quality material, chemical/metallurgical use, special crucibles and pressed-component capability. This positive whole-product evidence supports the fired other-refractory-ceramic-goods arm of 37340; neither the unfired arm nor a chemical-use name alone determines the category. The [WCO HS 2022 Chapter 69 original](https://www.wcoomd.org/-/media/wco/public/global/pdf/topics/nomenclature/instruments-and-tools/hs-nomenclature-2022/2022/1369_2022e.pdf?la=en), note 1(a), gives headings 6901–6903 precedence over 6904–6914, and heading 6903 expressly includes refractory crucibles.

The sphere PCR covers complete solid sintered alumina grinding media for an explicit technical use, excluding refractory packing/support balls, raw abrasive powders, fused grains and bonded wheels. Its existing Union Process product evidence and binder-free rolling route remain applicable. The positive technical-use category 37291 is appropriate before residual 37299. WCO heading 6909 independently describes technical-use ceramic wares; manufacture by sintering or alumina content alone does not establish a refractory end use. No particular HS hardness subheading, test-piece property, universal recipe, performance or service life is assigned. These are scope-supported classification judgments; no current CPC 3.0–HS itemized correspondence table is claimed.

The [Federal Circuit original opinion in Schlumberger Technology Corp. v. United States, No. 2015-2076, decided 9 January 2017](https://www.cafc.uscourts.gov/opinions-orders/15-2076.opinion.1-6-2017.1.pdf), printed/PDF p. 12, expressly records the EN6909 example of grinding apparatus and balls for grinding mills. It is used only as a published historical witness to that technical-use example. The case concerns bauxite proppants lacking the requisite definite form and does not decide the classification of this PCR, furnish a current CPC3.0–HS concordance, or establish an automatic hardness subheading.

## Preserved contracts

Canonical PCR IDs, whole-product boundaries, forming/firing routes and all reference UUIDs remain unchanged. Native UUID identity and accepted PCR classification are separate decisions. Candidate/authored maturity, Chinese aligned-not-reviewed status, independent scientific/translation review, auxiliary UUID/provider/site limitations and unpublished status are preserved. This classification acceptance neither covers either complete CPC leaf nor approves methodology, empirical quantities, translation, publication or deployment.

Decision-maker: `codex-user-directed-classification-correction`. UTC decision time: `2026-10-21T11:30:02Z`. The explicit user request authorizes these accepted replacements; official category descriptions and actual product evidence were independently checked. Normal bilingual projection synchronization, alias/catalog/coverage rebuilding, runtime resolution and exact-source validation are required. Earlier-head receipts do not qualify the corrected head.
