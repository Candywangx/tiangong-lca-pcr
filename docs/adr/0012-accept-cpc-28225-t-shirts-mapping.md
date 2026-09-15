---
title: Accept CPC 3.0 28225 mapping to knitted T-shirts PCR
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-07-30
---

# Accept CPC 3.0 28225 Mapping to Knitted T-shirts PCR

## Decision

Accept an `exact` CPC 3.0 mapping from code `28225`, "T-shirts, singlets and other vests, knitted or crocheted", to:

`pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.t-shirts-singlets-and-other-vests-knitted-or-crocheted`

The accepted edge is recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`. This decision promotes the retained
leaf-derived empty scaffold in place as a canonical, classification-independent material PCR. CPC remains mapping
context and does not own the PCR identity.

## Semantic Scope Check

The PCR covers finished knitted or crocheted T-shirts, singlets, undershirts, tank tops, and comparable vests at the
garment-manufacturing gate. It accepts any declared fibre composition, size range, colour, and finish, while requiring
those attributes and the route to remain explicit dataset qualifiers.

It excludes fabric sold as fabric, woven tops, hosiery, sweaters and pullovers, babies' garments, other knitted
garments, leather or fur apparel, and non-textile garments. Distribution, retail, consumer care, reuse, and
end-of-life are downstream lifecycle stages rather than part of the foreground garment-manufacturing dataset.

This product boundary is scope-equivalent to the normalized CPC 3.0 leaf `28225`. The canonical directory and id use
a semantic product slug and contain no classification code.

## Methodology Need

Production of this apparel category requires category-specific rules that classification alone does not provide:

- a net finished-garment mass reference flow with mandatory composition, construction, size, unit-mass, colour,
  finishing, moisture, route, site, reporting-period, and packaging qualifiers;
- distinct receipt and preparation, cutting, assembly, conditional garment wet finishing, quality and packaging,
  and conditional on-site wastewater-treatment processes;
- separate accounting for delivered fabric and components, utilities, wet-processing inputs, packaging, cutting
  scrap, rejects, wastewater, treatment residues, and direct emissions;
- mass-balance, item-to-mass conversion, utility allocation, pollutant-load calculation, and packaging-separation
  rules tied to declared collection protocols;
- completeness, allocation, waste-route, upstream-link, measurement, and data-quality validation rules; and
- an explicit separation between a manufacturing mass reference flow and use-based comparative functional units.

These rules establish a material methodology need independent of CPC coverage.

## Evidence and Identity Status

International EPD System PCR 2024:03, *Apparel, except fur and leather apparel*, version 1.0.0, covers UN CPC 282
apparel and supplies the product-stage structure, process coverage, packaging and waste treatment, 99% completeness,
allocation hierarchy, and specific-data requirements applied by this PCR. European Commission Recommendation
(EU) 2021/2279 Annex I supplies the general Product Environmental Footprint rules used for lifecycle boundary,
inventory, reproducibility, and verification. ISO 14044 and ISO/TS 14048 supply general LCA and data-documentation
requirements.

Tiangong CLI lookup confirms the exact public product flow `T-shirts, singlets and other vests, knitted or crocheted`
`4de987ca-f5f5-4001-a465-07f12ef9775f`, Mass flow property
`93a60a56-a3c8-11da-a746-0800200b9a66`, and Units of mass unit group
`93a60a57-a4c8-11da-a746-0800200c9a66`. The exact category process
`f75753ae-7b93-42cc-8e40-b8acb8b3332a` resolves only as a private `state_code=0` draft and is therefore not adopted as
a consumer-facing process identity.

Material-, geography-, technology-, treatment-route-, and compartment-specific input, waste, utility, and elementary
flow UUIDs remain dataset-level selections rather than invented generic identities. No cross-technology default
quantity range is accepted by this decision. The candidate PCR carries deliberately broad `reasoned_estimate`
screening ranges only as replaceable first-dataset and QA aids; they are not publication-critical allowed ranges.

This accepted classification edge does not claim active methodology status, publication readiness, comparative
functional equivalence, or completion of independent methodology review.

## Consequences

- Deterministic alias regeneration omits the old terminal alias for this PCR id.
- CPC 3.0 coverage resolves `28225` to this material PCR while runtime readiness exposes its
  `candidate / authored_methodology` lifecycle state.
- The physical PCR directory count is unchanged because the retained scaffold is promoted in place.
- The material catalog and accepted CPC mapping each gain one entry.
- The PCR retains an aligned Chinese rendering and a deterministic structured projection; independent methodology
  review remains required before an `active` lifecycle transition or publication.
