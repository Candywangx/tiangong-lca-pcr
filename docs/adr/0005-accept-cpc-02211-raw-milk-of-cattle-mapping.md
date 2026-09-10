---
title: Accept CPC 3.0 02211 mapping to raw milk of cattle PCR
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-07-24
---

# Accept CPC 3.0 02211 Mapping to Raw Milk of Cattle PCR

## Decision

Accept an `exact` CPC 3.0 mapping from code `02211`, “Raw milk of cattle”, to:

`pcr.agriculture-forestry-and-fishery-products.live-animals-and-animal-products-excluding-meat.raw-milk-of-cattle`

The accepted edge is recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`. This decision promotes the retained
leaf-derived scaffold in place as a canonical, classification-independent material PCR; CPC remains mapping context
and does not own the PCR identity.

## Semantic Scope Check

The PCR covers unprocessed whole cattle milk at the farm gate, normally chilled, before dairy processing. It excludes
milk from other animal species and milk that has been separated, standardized, heat treated, homogenized,
concentrated, dried, fermented, flavoured, or otherwise processed. That boundary is scope-equivalent to the
normalized CPC 3.0 leaf `02211`.

The canonical slug is semantic and contains no classification code. The record contains the four required files,
an authored English methodology, an aligned Chinese rendering, a deterministic structured projection, and the
confirmed TianGong reference product-flow identity.

## Methodology Need

Raw cattle milk needs category-specific rules that are not supplied by classification alone:

- a farm-gate functional unit expressed as 1 kg fat-and-protein-corrected milk;
- whole-herd, feed, enteric-emission, manure, milking, cooling, and storage boundaries;
- biophysical net-energy allocation between milk and live cattle;
- treatment of exported manure as residue, co-product, or waste;
- foreground milk-composition, herd, feed, resource, manure, land, and direct-emission records;
- IPCC-aligned enteric and manure-emission calculations; and
- explicit data-quality, normalization, internal-flow, and publication validation rules.

These rules establish a material methodology need independent of CPC coverage.

## Evidence and Identity

The reference product flow was selected and confirmed through the sibling TianGong CLI as `Raw milk of cattle`,
UUID `aa8aebbb-724a-417b-8372-2dccd499ce71`, with Mass flow property UUID
`93a60a56-a3c8-11da-a746-0800200b9a66`. The PCR cites IDF Bulletin 520/2022, FAO LEAP large-ruminant/feed/nutrient
guidance, the IPCC 2019 Refinement, and the ILCD reference unit group for its method and identity constraints.

## Consequences

- The old terminal alias for the same PCR id is omitted by deterministic alias regeneration.
- CPC 3.0 coverage resolves `02211` to this material PCR.
- The physical PCR directory count is unchanged because the retained scaffold is promoted in place.
- The material catalog and accepted CPC mapping each gain one entry.
- CPC 3.0 coverage becomes 5 mapped, 2,872 unmapped, and 0 unknown across 2,877 leaves.
- The legacy alias registry becomes 2,872 terminal locators.
- The PCR remains `candidate / authored_methodology` with an aligned Chinese rendering until a separate methodology
  review authorizes `active / reviewed_methodology`.
