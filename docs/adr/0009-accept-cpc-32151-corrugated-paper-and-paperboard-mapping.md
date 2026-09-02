---
title: Accept CPC 3.0 32151 mapping to corrugated paper and paperboard PCR
docType: decision
scope: repo
status: accepted
authoritative: true
owner: tiangong-lca-pcr
language: en
lastReviewedAt: 2026-07-27
---

# Accept CPC 3.0 32151 Mapping to Corrugated Paper and Paperboard PCR

## Decision

Accept an `exact` CPC 3.0 mapping from code `32151`, "Corrugated paper and paperboard", to:

`pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.corrugated-paper-and-paperboard`

The accepted edge is recorded in `classifications/mappings/cpc-3.0-to-pcr.yaml`. This decision promotes the retained
leaf-derived empty scaffold in place as a canonical, classification-independent material PCR. CPC remains mapping
context and does not own the PCR identity.

## Semantic Scope Check

The PCR covers corrugated paper and paperboard made by assembling liner papers and fluting medium on a corrugator,
including single-face, single-wall, double-wall, and triple-wall board sold in reels or sheets. The scope ends while
the product remains corrugated board at the corrugator plant gate.

It excludes pulp and corrugated base-paper production as foreground operations and requires upstream datasets for
those inputs. It also excludes sacks, bags, cartons, boxes, cases, displays, and other converted containers, including
their printing, slotting, die-cutting, folding, stitching, and box-gluing operations. Those products are separate
classification leaves and require downstream processes.

This boundary is scope-equivalent to the normalized CPC 3.0 leaf `32151`. The canonical directory and id use a
semantic product slug and contain no classification code.

## Methodology Need

Corrugated paperboard conversion requires category-specific rules that classification alone does not provide:

- a 1,000 kg net saleable mass reference flow at the corrugator plant gate;
- mandatory declarations for liner and fluting grades, wall construction, flute profile, grammage, thickness,
  moisture, recycled-fibre status, and surface treatment;
- a foreground boundary covering conditioning, fluting, starch application, liner joining, setting or drying,
  slitting, cutting or reeling, stacking, and associated site utilities;
- explicit exclusion of upstream pulp and base-paper production and downstream box conversion;
- separate collection protocols for base-paper receipts, adhesive batches, utilities, saleable output, and shavings;
- mass-balance, moisture-basis, energy-conversion, subdivision, allocation, and recycling-disclosure rules;
- validation that rejects silent netting, unexplained mass-balance residuals, and unsupported use of industry averages
  as site-specific data.

These rules establish a material methodology need independent of CPC coverage.

## Evidence and Identity Status

EPD International PCR 2010:14 version 4.0.0 explicitly includes UN CPC 32151. FEFCO's official European Database for
Corrugated Board Life Cycle Studies supports the corrugator process decomposition, gate-to-gate boundary, net saleable
mass basis, base-paper and shavings inventory priors, moisture disclosure, data-collection design, and closed-loop
recycling treatment. ISO 536:2019, ISO 287:2017, and ISO 3034:2011 support grammage, moisture, and thickness
measurement. Commission Recommendation (EU) 2021/2279 supports company-specific activity data, allocation hierarchy,
cut-off disclosure, and data-quality dimensions.

Tiangong CLI lookup confirms the CPC-matched Corrugated cardboard product flow
`8bde297e-98df-463f-bcb4-0db52bf6e0b5`, Mass flow property
`93a60a56-a3c8-11da-a746-0800200b9a66`, and route-relevant base-paper, adhesive, water, electricity, heat, and
cardboard-waste flows. The ILCD reference endpoint confirms Units of mass unit group
`93a60a57-a4c8-11da-a746-0800200c9a66` with `kg` as its reference unit.

Three name-matched Tiangong process rows were reviewed but not selected. Two represent recycled-paper or corrugated
base-paper manufacture, and one represents downstream corrugated-carton conversion; none matches the PCR's
liner-and-fluting corrugator conversion boundary. This accepted classification edge does not claim active methodology
status or publication readiness.

## Consequences

- Deterministic alias regeneration omits the old terminal alias for this PCR id.
- CPC 3.0 coverage resolves `32151` to this material PCR while runtime readiness continues to expose its
  `candidate / authored_methodology` lifecycle state.
- The physical PCR directory count is unchanged because the retained scaffold is promoted in place.
- The material catalog and accepted CPC mapping each gain one entry.
- The PCR retains an aligned Chinese rendering and a deterministic structured projection; separate methodology review
  is still required before an `active` lifecycle transition or publication.
