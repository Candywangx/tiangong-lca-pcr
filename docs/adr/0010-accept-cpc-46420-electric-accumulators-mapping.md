---
title: Accept CPC 3.0 46420 mapping to electric accumulators PCR
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-07-30
---

# Accept CPC 3.0 46420 Mapping to Electric Accumulators PCR

## Decision

Accept an `exact` CPC 3.0 mapping from code `46420`, "Electric accumulators", to:

`pcr.metal-products-machinery-and-equipment.electrical-machinery-and-apparatus.electric-accumulators`

The accepted edge is recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`. This decision promotes the retained
leaf-derived empty scaffold in place as a canonical, classification-independent material PCR. CPC remains mapping
context and does not own the PCR identity.

## Semantic Scope Check

The PCR covers finished rechargeable electrochemical cells, batteries, modules, and packs placed on the market as
electric accumulators. The foreground boundary ends at the manufacturing plant gate after formation, ageing,
inspection, testing, and any module or pack assembly that belongs to the declared product.

It excludes non-rechargeable primary cells and batteries; cells, electrodes, separators, electrolytes, and battery
management systems sold separately; waste batteries and recycling services; complete stationary energy-storage
systems; chargers and inverters sold separately; and installation or electricity-storage services. These are
different products, components, wastes, or services and require their own applicable methodology.

This boundary is scope-equivalent to the normalized CPC 3.0 leaf `46420`. The canonical directory and id use a
semantic product slug and contain no classification code.

## Methodology Need

Electric-accumulator production requires category-specific rules that classification alone does not provide:

- a mass-based reference flow for production inventory, with chemistry, form factor, configuration, rated capacity,
  nominal voltage, energy content, and included pack components declared as mandatory qualifiers;
- a foreground process map that distinguishes component or electrode preparation, cell assembly and sealing,
  formation and ageing, testing, and module or pack assembly;
- explicit inventory requirements for active materials, current collectors, electrolyte, separator, cell and pack
  hardware, electronics, utilities, solvents, water, yields, rejects, emissions, and waste routes;
- rules preventing a mass-based production flow from being used as a functional-equivalence claim between products
  with different energy, power, lifetime, or cycling performance;
- allocation, recovery, recycling, and cut-off disclosures that preserve gross inputs and outputs instead of silently
  netting recycled content, recovered material, or exported energy;
- validation of bill-of-materials reconciliation, stage yields, formation-energy accounting, dry-room and thermal
  utility coverage, geography and technology representativeness, and the distinction between measured,
  supplier-specific, secondary, and estimated data.

These rules establish a material methodology need independent of CPC coverage.

## Evidence and Identity Status

The official United Nations CPC Version 3.0 structure identifies code `46420` as "Electric accumulators." Regulation
(EU) 2023/1542 establishes battery-specific lifecycle stages and product information relevant to rechargeable
batteries. Commission Recommendation (EU) 2021/2279 supplies the general Product Environmental Footprint rules for
product flows, unit processes, allocation, cut-off disclosure, and data quality.

The European Commission Joint Research Centre carbon-footprint rules for electric-vehicle batteries provide
battery-specific process and inventory evidence for the electric-vehicle subset, including electrode production,
cell assembly, formation, module or pack assembly, and a service-based functional unit for comparative use. Those
rules are not generalized as an all-chemistry functional unit. Argonne National Laboratory reports provide
multi-chemistry lifecycle and lithium-ion component, assembly, utility, and recycling evidence. Porzio and Scown
provide peer-reviewed evidence for the electrode-manufacturing, cell-assembly, and cell-finishing sequence and for
the importance of dry-room and solvent-recovery inventories.

Tiangong CLI lookup confirms the representative CPC-matched `3C Lithium Battery` flow
`000abc1e-59e3-4336-bfd6-66575a4b0bda`, Mass flow property
`93a60a56-a3c8-11da-a746-0800200b9a66`, and Units of mass unit group
`93a60a57-a4c8-11da-a746-0800200c9a66`. It also confirms route-relevant N-methyl-2-pyrrolidone, electrolyte, and
deionised-water flows, plus electrode-manufacturing and cell-assembly process records. The representative product
flow does not assert universal chemistry coverage; a dataset for another accumulator chemistry must select and
verify a more specific product flow when available.

This accepted classification edge does not claim active methodology status, publication readiness, or comparative
performance equivalence.

## Consequences

- Deterministic alias regeneration omits the old terminal alias for this PCR id.
- CPC 3.0 coverage resolves `46420` to this material PCR while runtime readiness continues to expose its
  `candidate / authored_methodology` lifecycle state.
- The physical PCR directory count is unchanged because the retained scaffold is promoted in place.
- The material catalog and accepted CPC mapping each gain one entry.
- The PCR retains an aligned Chinese rendering and a deterministic structured projection; separate methodology review
  is still required before an `active` lifecycle transition or publication.
