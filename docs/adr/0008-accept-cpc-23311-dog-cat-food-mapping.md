---
title: Accept CPC 3.0 23311 mapping to dog or cat food put up for retail sale PCR
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-07-26
---

# Accept CPC 3.0 23311 Mapping to Dog or Cat Food Put Up for Retail Sale PCR

## Decision

Accept an `exact` CPC 3.0 mapping from code `23311`, "Dog or cat food, put up for retail sale", to:

`pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.dog-or-cat-food-put-up-for-retail-sale`

The accepted edge is recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`. This decision promotes the retained
leaf-derived scaffold in place as a canonical, classification-independent material PCR. CPC remains mapping context
and does not own the PCR identity.

## Semantic Scope Check

The PCR covers retail-packaged complete or complementary prepared food intended for dogs or cats in dry, wet, or
semi-moist form, including treats when they are marketed as complementary pet food. It excludes feed for other
species, veterinary medicinal products, unpackaged or bulk feed not put up for retail sale, home-prepared food,
feeding equipment, and standalone packaging products.

This boundary is scope-equivalent to the normalized CPC 3.0 leaf `23311`. The canonical directory and id use a
semantic product slug and contain no classification code. The mapping does not make CPC the methodology owner.

## Methodology Need

Retail dog and cat food manufacture needs category-specific rules that are not supplied by classification alone:

- a foreground manufacturing reference output of 1 kg conforming net pet-food content with packaging recorded
  separately;
- mandatory declarations for species, complete or complementary feeding purpose, life stage, moisture class,
  metabolizable-energy density, recipe or product family, manufacturing route, packaging, site, geography, and
  reporting period;
- separate dry or semi-moist and wet route process maps, including the applicable extrusion, drying, coating,
  filling, sealing, sterilisation, and cooling operations;
- foreground collection protocols for formulation materials, water, energy carriers, packaging, product quality and
  yield, losses and rework, sanitation, waste and wastewater, and direct emissions;
- allocation rules that prefer subdivision and direct metering, use production mass for shared manufacturing
  utilities when direct assignment is unavailable, and require a justified fallback when physical causality is not
  defensible;
- a clear boundary between this manufacturing dataset and the full cradle-to-grave PEF system, including a
  product-specific daily-ration conversion for downstream comparison of complete meals.

These rules establish a material methodology need independent of CPC coverage.

## Evidence and Identity Status

The methodology uses the FEDIAF Product Environmental Footprint Category Rules for prepared pet food for cats and
dogs for product subcategories, life-cycle stages, company-specific manufacturing data, downstream daily-ration
context, allocation, and data-quality rules. Regulation (EC) No 767/2009 supports complete and complementary feed,
labelling, packaging, and net-quantity identity. Commission Recommendation (EU) 2021/2279 supports the general PEF
and foreground-data rules. FEDIAF nutritional and processing guidance supports product qualifiers and wet/dry
process decomposition. FAO LEAP feed guidelines support the allocation hierarchy.

Tiangong CLI lookup confirms the exact CPC `23311` product flow
`a044700b-9c04-49d8-8842-c967c80099d4`, its Mass flow property
`93a60a56-a3c8-11da-a746-0800200b9a66`, and the Units of mass unit group
`93a60a57-a4c8-11da-a746-0800200c9a66`. A name-matched dry-pet-food manufacturing process was also found, but it is
a draft remote record and is not adopted as methodology evidence or as a canonical process link. Product-specific
inventory-flow UUIDs and reviewed representative process links remain a publication blocker in `manifest.yaml`.
This accepted classification edge does not claim active methodology status or publication readiness.

## Consequences

- Deterministic alias regeneration omits the old terminal alias for this PCR id.
- CPC 3.0 coverage resolves `23311` to this material PCR while runtime readiness continues to expose its candidate
  and unresolved inventory-UUID state.
- The physical PCR directory count is unchanged because the retained scaffold is promoted in place.
- The current worktree's material catalog and accepted CPC mapping each gain one entry.
- CPC 3.0 coverage becomes 8 mapped, 2,869 unmapped, and 0 unknown across 2,877 leaves.
- The legacy alias registry becomes 2,869 terminal locators.
- The PCR remains `candidate / authored_methodology` with an aligned Chinese rendering until separate methodology
  and remaining inventory/process UUID review authorize later lifecycle transitions.
