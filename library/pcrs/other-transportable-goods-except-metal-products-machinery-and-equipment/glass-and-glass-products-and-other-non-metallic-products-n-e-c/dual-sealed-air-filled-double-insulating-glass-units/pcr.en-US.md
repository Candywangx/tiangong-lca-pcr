---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.dual-sealed-air-filled-double-insulating-glass-units
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
translation_status: canonical
---

# Dual-sealed air-filled double insulating glass units with hot-melt butyl secondary seal

## 1. Scope and Applicability

This rule covers actual manufacture of one specific unframed insulating-glass assembly from supplied prepared glass panes through first required quality release. The two-piece composite sealing/desiccation route differs materially from float-sheet production, edge polishing, thermal toughening and whole-window assembly. It covers a narrower part of CPC 3.0:37116, not the combined mirror/IGU classification as one product. No accepted classification mapping or publication is asserted.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.glass-and-glass-products-and-other-non-metallic-products-n-e-c.dual-sealed-air-filled-double-insulating-glass-units |
| classification_refs | CPC 3.0:37116 Glass mirrors; multiple walled insulating units of glass; narrower dual-seal air-filled two-pane subset |
| covered_products | Unframed two-pane uncoated annealed soda-lime IGU with aluminium spacer and 3A beads; PIB primary and one-component hot-melt butyl secondary |
| excluded_products | This category excludes mirrors, glass melting/float forming as foreground, coated/laminated/toughened-pane manufacture, inert-gas enrichment, vacuum glazing, triple units, TPS or flexible spacers, reactive two-component sealants, single-seal units, structural silicone glazing, exposed organic-seal edges, frames and installation/use/end-of-life. Upstream prepared-pane manufacture remains fully burdened. An actual on-site extra operation requires its full specific submodel and applicability review; do not silently extend this narrower route. No insulation-performance equivalence to low-E argon glazing is claimed. |
| representative_product | First quality-released dry-air double IGU with protected organic-sealed edges |
| production_route | Begin with fully burdened purchased prepared panes and supplied profile, beads and sealant formulations. Include receiving and damage; washing and blower drying; profile sawing/bending/jointing; desiccant filling; heated PIB application; alignment and pressing around ambient-derived air; hot-melt secondary filling and corner correction; cooling; actual inspection/testing and first release. This is a transparent synthesis of compatible primary operations, not one contemporary SKU/factory. No purchased finished-IGU repacking substitute. |
| market_state | Complete unframed sealed unit at first required quality release; later packing/dispatch is a separately attributed service |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of the declared double insulating glass unit |
| How much | 1 m2 |
| How well | Actual specified two-pane air-filled construction with documented tests and protected edges; no assumed U-value or life equivalence |
| How long or cycle | One reporting period and uniquely first-released cohort; no reference service-life claim |
| reference_flow_link | first_release |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Insulating glass unit `12053592-e6c4-4c56-ad15-a36a267c500a` |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | site and reporting period; first quality-release gate and unique cohort IDs; two uncoated annealed soda-lime panes and suppliers; pane dimensions thickness edge preparation and full supplier burden; single-face projected whole-unit area including sealed edge; aluminium spacer alloy geometry joint composition and desiccant filling; 3A bead grade size supplied moisture and exposure; whole PIB primary formulation and hot-melt secondary formulation; nozzle temperature wetting corner continuity seal depth cooling and release tests; air cavity gas composition humidity temperature pressure and retained mass; protected edge application and excluded structural exposed-edge use; opening closing WIP FG equipment fluids and per-exchange inherited vectors; gross packaging movements composition moisture repair and stocks; actual electricity voltage geography mix and water supply/treatment boundary; independent species balances uncertainty and receiving destinations; attributional allocation applicability causal drivers and residual market evidence |

Required qualifiers must be declared in dataset metadata, product/reference-flow comments or equivalent complete context. The physical native-identity limitations on first_release are part of this reference definition and remain applicable with all ancestor conditions.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_area` | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Use the measured actual one-face projected area A_k of each whole first-released sealed unit, including its sealed edge; Q is the sum of A_k for unique new release events. Length × width in metres is valid only for an independently verified rectangular outline. For another actual shape retain calibrated configuration/drawing-specific dimensions and a traceable geometric or planimetric area determination, not its rectangular bounding box. Never sum both pane faces. Collect cp_release and retain configuration-specific independently measured net kg; neither area nor a native coefficient supplies a mass conversion. |
| `single_denominator` | all inventory rows | actual row property | row unit per m2 | Collect raw quantities without dividing. Convert and attribute each raw numerator with actual stocks/history/allocation, then execute normalize_exchange once. All cards and protocol aggregation refer to that result; Q=0 retains burden with no unit result. |
| `physical_states` | raw materials and species | Mass | kg | Record full formulation supply once; measure constituent assays, adsorbed/free/structural water and actual gas species independently. Integrated volumes do not gain an extra time factor; no assumed mass per item or cross-substance density. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared cut-to-size uncoated annealed soda-lime glass panes; fabricated aluminium profiles; whole purchased bead/sealant supplies |
| starting_condition_role | Burden-bearing raw assembly inputs; not finished insulating units |
| product_classification_scope | Narrower part of CPC3.0:37116; no mirror coverage |
| recursive_input_rule | Same-category purchased finished units are separate burden-bearing resale/service articles outside new Q; matched internal release transfers cancel |
| upstream_dataset_requirement | Match full supplied pane manufacture through its preparation and each actual profile/formulation/utility provider; no free raw inputs or duplicated supplier-included packaging burden |
| disclosure | Declare start/release/service gates; actual configuration and tests; every stock/history vector; gas/water control volumes; packaging gross balances; native restrictions and uncertainty |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | manufacture | Begin with fully burdened purchased prepared panes and supplied profile, beads and sealant formulations. Include receiving and damage; washing and blower drying; profile sawing/bending/jointing; desiccant filling; heated PIB application; alignment and pressing around ambient-derived air; hot-melt secondary filling and corner correction; cooling; actual inspection/testing and first release. This is a transparent synthesis of compatible primary operations, not one contemporary SKU/factory. No purchased finished-IGU repacking substitute. | `guardian-glasstime-2022`; `lisec-vhw-f-washing`; `lisec-bsv-spacer-forming`; `bostik-igu-hotmelt`; `fenzi-molver-2021` |
| `boundary_release` | manufacture and handling | Q is the sum of one-face overall projected areas of unique units at their first required quality release in the reporting cohort. Opening already-released FG, reinspection, delivery and external returns never create Q. Destructive specimens and pre-release rejects are excluded. Newly released closing FG is already in Q; do not add it as another production output. Keep packing/storage/lifting/dispatch in the handling service account; cancel matched first_release/released_in internal handover on consolidation. | `guardian-glasstime-2022`; `bostik-5000-application` |
| `boundary_stocks` | all physical stocks | Keep physical quantities and a separate historical upstream/foreground exchange vector for every raw stock, WIP cohort, released FG cohort, equipment oil/tank liquid and recoverable sealant hold-up. Opening WIP carries actual inherited burdens; closing WIP carries actual unfinished burdens forward. Allocate all current activity including zero-output failures, warmup, idle, start/stop, cleanup, tests and rework before normalization. Correct raw stock changes once only. Equipment charges are not WIP. Include actual tooling and every other included non-WIP stock with independently measured physical quantity and each inherited vector; do not infer stock from allocated burden or treat a service share as a reduced physical article. If durable-equipment service is inside the declared capital boundary, retain its actual physical units/mass, additions/handovers/retirements and independent service-vector attribution without guessed kg/item or lifetime; actual specific exchanges need their own cards. | `ilcd-attributional-2010`; `lisec-vhw-f-washing`; `bostik-igu-hotmelt` |
| `boundary_complete` | actual exchanges | Every real input/export must have an individual physically or chemically named row with real quantity, unit, state and destination. Add any actual chemical, maintenance part, fuel, heat, water treatment flow, cleaning article, airborne species or leak absent from these conditional cards; neither other nor a zero can hide it. Supplier formulation ingredients already included are subaccounts, not duplicate purchases. For actual external heat/steam add separate supply and Product condensate/heat-transfer-water return with actual mass, phase, pressure, temperature, enthalpy and supplier water/energy convention; the electric route presumes no boiler. Where external steam really occurs, add a separate thermal-energy supply row and a physical steam-water mass input row plus each actual condensate/return/waste/vapour direction. Identify one upstream steam provider/burden owner; the linked mass and heat views must not buy the same supply twice or use MJ as a water-mass balance. Quantities/conversions require actual phase/state/enthalpy and supplier inclusion evidence, never an assumed steam system. | `lisec-vhw-f-washing`; `bostik-igu-hotmelt`; `ilcd-attributional-2010` |
| `boundary_exclusions` | applicability | This category excludes mirrors, glass melting/float forming as foreground, coated/laminated/toughened-pane manufacture, inert-gas enrichment, vacuum glazing, triple units, TPS or flexible spacers, reactive two-component sealants, single-seal units, structural silicone glazing, exposed organic-seal edges, frames and installation/use/end-of-life. Upstream prepared-pane manufacture remains fully burdened. An actual on-site extra operation requires its full specific submodel and applicability review; do not silently extend this narrower route. No insulation-performance equivalence to low-E argon glazing is claimed. | `guardian-glasstime-2022`; `fenzi-hotver-2000`; `lisec-bsv-spacer-forming` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| manufacture | Prepared panes to dual-sealed first-released IGU | required | declared narrow route | foreground_process | first_release |
| handling | FG storage packing returns and dispatch services | required | all actual post-release services and packaging | foreground_process | serviced release cohort; no new production Q |

All cards are per reference flow and use only the result of normalize_exchange. Their complete descriptions, source evidence and ancestor scope conditions apply together. Conditional rows need real presence/absence evidence; they are not assumed consumption. The handling service retains its original release-cohort denominator. Add actual further exchanges as individual rows.

### Process: Manufacturing (`manufacture`)

#### Inputs

##### Product flows

###### outer_pane (`outer_pane`)

One supplied cut-to-size uncoated annealed soda-lime float outer pane; edges already prepared to the order. The generic manufactured-sheet record does not certify composition or edges. Match supplier production through annealing and cutting/edge preparation; record full actual pane mass and damage. No melting is repeated inside this assembly boundary.

- Selected flow: Float glass and surface ground or polished glass, in sheets `1b43024e-16ea-42d2-830d-329c4a2abc3d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `guardian-glasstime-2022`

###### inner_pane (`inner_pane`)

One separately supplied inner pane with the same uncoated annealed soda-lime route; record its own supplier, thickness, dimensions, net mass and burdens. It is a second physical pane, not a duplicate charge for the outer pane; unequal thickness is not averaged away.

- Selected flow: Float glass and surface ground or polished glass, in sheets `1b43024e-16ea-42d2-830d-329c4a2abc3d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `guardian-glasstime-2022`

###### spacer_profile (`spacer_profile`)

Record the whole purchased profile with actual alloy, finish, perforation and geometry. Include receipt, sawing, bending, joints, offcuts and failed frames; do not substitute ingot or solid strip for a fabricated hollow profile.

- Selected flow: Hollow perforated aluminium-alloy insulating-glass spacer profile
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `fenzi-aluminium-spacer`; `lisec-bsv-spacer-forming`

###### spacer_connector (`spacer_connector`)

Use only where the actual bent aluminium frame has this separately purchased metal joint. Record alloy and whole connector mass. Pre-inserted joints already included in the purchased profile are component subaccounts rather than another purchase; a polymer connector needs a separate actual polymer article row.

- Selected flow: Aluminium straight insulating-glass spacer connector
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `fenzi-aluminium-spacer`; `lisec-bsv-spacer-forming`

###### desiccant (`desiccant`)

Record whole supplied beads once with grade, bead size, original moisture and lot exposure history. Weigh dispensing and losses; filling geometry follows the qualified actual spacer system. Residual/structural water and later adsorbed water are independent subaccounts, not extra purchased beads or assumed reaction water. Do not adopt a generic 4A powder identity.

- Selected flow: 3A zeolite molecular-sieve beads for insulating glass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `fenzi-molver-2021`; `guardian-glasstime-2022`

###### primary_sealant (`primary_sealant`)

Buy the whole externally compounded PIB formulation once; retain lot SDS/TDS, full supplied mass, carrier/filler subaccounts, thermal application and bead continuity on both spacer flanks. Pure butyl rubber is not this formulation, and the native butadiene/styrene route candidate is incompatible.

- Selected flow: Compounded polyisobutylene primary insulating-glass sealant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `guardian-glasstime-2022`; `bostik-igu-hotmelt`; `bostik-5000-application`

###### secondary_sealant (`secondary_sealant`)

Record one whole purchased formulated secondary sealant separately from PIB primary; retain brand/grade/lot and compatible system. Meter heated dispensing, corners, seal depth, cooling, rejected portions and real reheating. This thermoplastic sets by cooling; do not add a fictitious curing agent, solvent, stoichiometric gas or reaction water. Supplier temperature and zero-waste claims are not universal defaults. Native Product identity is generic solid thermoplastic Hot melt adhesive with Mass/kg, no fixed polymer/CAS/grade/geography or numerical temperature. Qualify this as the actual single formulated butyl secondary sealant; provider suitability is still required. Native vulcanized-rubber taxonomy conflicts with the coherent temperature-reversible, unchanged-chemistry name/comment and is disclosed as an isolated classification defect. Broad non-toxic/pollution-free comments are not adopted toxicological or zero-emission claims.

- Selected flow: Hot melt adhesive `3ec33f9f-92dd-487a-a0d9-b177c926b8f0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `bostik-igu-hotmelt`; `bostik-5000-application`; `fenzi-hotver-2000`

###### electricity (`electricity`)

Conditional CN user-side grid-average 1–35 kV AC identity; use only at that actual supply boundary and mix. Include washing heaters/blowers, profile machines, sealant heating, pressing, inspection, idle, warmup and cleanup. Meter kWh and convert to MJ using 3.6; Net calorific value is the native energy property and does not mean burning electricity. Other voltage/geography/mix requires another verified identity/provider.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `lisec-vhw-f-washing`; `lisec-bsv-spacer-forming`; `bostik-igu-hotmelt`

###### wash_water (`wash_water`)

Deionised water at plant only. Record supplier or actual on-site treatment burdens and makeup, tank stocks, recirculation, dragout, evaporation and wastewater separately. On-site raw water, treatment chemicals, rejects and energy require their own actual atomic rows; do not count both purchased deionised water and its internal manufacture.

- Selected flow: Water `84f17134-bde4-4f48-8d8c-7cabf6ea8c63`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `lisec-vhw-f-washing`

###### wash_concentrate (`wash_concentrate`)

Conditional one supplied detergent formulation, only if actually used and compatible with the seal system. Record whole concentrate mass once and separately added dilution water; assay and carrier water remain subaccounts. A water-only wash has documented absence, not an invented detergent consumption.

- Selected flow: Aqueous nonionic glass-washing concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `lisec-vhw-f-washing`; `bostik-5000-application`

###### hydraulic_oil (`hydraulic_oil`)

Conditional actual installed machine fluid, not glass WIP. Identify real formulation and quantity at opening/closing, additions, drainage, leaks and inherited exchange vectors; if a corrected consumption ledger already accounts for stock change do not apply it again. A PAO total-synthesis candidate is not automatically mineral hydraulic oil.

- Selected flow: Mineral hydraulic oil ISO VG 46
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `lisec-bsv-spacer-forming`

###### saw_blade (`saw_blade`)

Conditional replacement tooling for actual profile sawing. Identify composition, coatings and new versus repaired parts independently; record original tool quantity, attributable wear/service history and spent blade. Another blade material needs its own row.

- Selected flow: High-speed-steel spacer-profile saw blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `lisec-bsv-spacer-forming`

##### Elementary flows

###### ambient_n2 (`ambient_n2`)

Record this individual species in the defined cavity/air-handling physical control volume with measured gas composition, integrated volume, pressure, temperature and humidity. Air-filled means ambient-derived air dried by the installed desiccant, not vacuum or an assumed inert-gas fill. Paired unchanged throughput cancels in the environmental inventory; retained cavity species and water adsorbed by beads remain in product/WIP mass. Do not assume standard fractions or use an emission-to-air UUID as an air resource. Native identity: Elementary flow; renewable element resource from air; CAS 7727-37-9; reference Mass/kg. Native isotope/liquid synonyms do not change the selected ordinary gaseous atmospheric species; no fixed geography or industrial separation route is supplied.

- Selected flow: dinitrogen `08a91e70-3ddc-11dd-96e4-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gases`
- Sources: `guardian-glasstime-2022`; `fenzi-molver-2021`

###### ambient_o2 (`ambient_o2`)

Record this individual species in the defined cavity/air-handling physical control volume with measured gas composition, integrated volume, pressure, temperature and humidity. Air-filled means ambient-derived air dried by the installed desiccant, not vacuum or an assumed inert-gas fill. Paired unchanged throughput cancels in the environmental inventory; retained cavity species and water adsorbed by beads remain in product/WIP mass. Do not assume standard fractions or use an emission-to-air UUID as an air resource. Native identity: Elementary flow; renewable element resource from air; CAS 7782-44-7; reference Mass/kg. Native isotope/liquid synonyms do not change the selected ordinary gaseous atmospheric species; no fixed geography or industrial separation route is supplied.

- Selected flow: oxygen `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gases`
- Sources: `guardian-glasstime-2022`; `fenzi-molver-2021`

###### ambient_ar (`ambient_ar`)

Record this individual species in the defined cavity/air-handling physical control volume with measured gas composition, integrated volume, pressure, temperature and humidity. Air-filled means ambient-derived air dried by the installed desiccant, not vacuum or an assumed inert-gas fill. Paired unchanged throughput cancels in the environmental inventory; retained cavity species and water adsorbed by beads remain in product/WIP mass. Do not assume standard fractions or use an emission-to-air UUID as an air resource. Native identity: Elementary flow; renewable element resource from air; CAS 7440-37-1; reference Mass/kg. Native isotope/liquid synonyms do not change the selected ordinary gaseous atmospheric species; no fixed geography or industrial separation route is supplied.

- Selected flow: argon `fe0acd60-3ddc-11dd-a354-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gases`
- Sources: `guardian-glasstime-2022`; `fenzi-molver-2021`

###### ambient_co2 (`ambient_co2`)

Record this individual species in the defined cavity/air-handling physical control volume with measured gas composition, integrated volume, pressure, temperature and humidity. Air-filled means ambient-derived air dried by the installed desiccant, not vacuum or an assumed inert-gas fill. Paired unchanged throughput cancels in the environmental inventory; retained cavity species and water adsorbed by beads remain in product/WIP mass. Do not assume standard fractions or use an emission-to-air UUID as an air resource.

- Selected flow: Carbon dioxide from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gases`
- Sources: `guardian-glasstime-2022`; `fenzi-molver-2021`

###### ambient_h2o (`ambient_h2o`)

Record this individual species in the defined cavity/air-handling physical control volume with measured gas composition, integrated volume, pressure, temperature and humidity. Air-filled means ambient-derived air dried by the installed desiccant, not vacuum or an assumed inert-gas fill. Paired unchanged throughput cancels in the environmental inventory; retained cavity species and water adsorbed by beads remain in product/WIP mass. Do not assume standard fractions or use an emission-to-air UUID as an air resource.

- Selected flow: Water vapour from ambient air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gases`
- Sources: `guardian-glasstime-2022`; `fenzi-molver-2021`

#### Outputs

##### Product flows

###### first_release (`first_release`)

Unique newly manufactured two-pane uncoated annealed soda-lime IGU with aluminium-alloy desiccant spacer, PIB primary and one-component hot-melt butyl secondary, air-filled and intended for protected edges. Record first required quality-release ID only. Native identity has an isolated CPC 37117 taxonomy defect; names, route, synonyms and comment identify a two/three-pane adhesive-bonded aluminium/desiccant insulating unit. This narrower two-pane route uses no native performance, density, life or certification default. Not a mirror, foam brick, vacuum glazing, safety-glass proof, window frame or installation.

- Selected flow: Insulating glass unit `12053592-e6c4-4c56-ad15-a36a267c500a`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: 1 m2
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release`
- Sources: `guardian-glasstime-2022`; `bostik-igu-hotmelt`; `bostik-5000-application`; `fenzi-hotver-2000`

##### Waste flows

###### glass_breakage (`glass_breakage`)

Separate pre-seal clean broken panes by actual composition and destination. Sealed composites are not clean cullet; no feed-grade cullet identity or automatic sold-product credit.

- Selected flow: Broken uncoated annealed soda-lime glass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `guardian-glasstime-2022`

###### aluminium_offcut (`aluminium_offcut`)

Weigh profile saw kerf and rejected clean frames separately from seal-contaminated composites; preserve alloy and receiving facility. No cast-scrap assumption.

- Selected flow: Aluminium-alloy spacer offcut
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `lisec-bsv-spacer-forming`

###### primary_waste (`primary_waste`)

Record actual primary sealant rejected, scraped or unrecoverably drained with formulation and wet state; internal recovered primary remains an internal transfer.

- Selected flow: Discarded compounded PIB primary sealant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `bostik-igu-hotmelt`

###### secondary_waste (`secondary_waste`)

Weigh actual spoiled or discarded secondary sealant. Reheated internal surplus cancels but real heating and losses remain; supplier no-purge claim does not establish zero waste.

- Selected flow: Discarded butyl hot-melt secondary sealant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `bostik-igu-hotmelt`; `fenzi-hotver-2000`

###### sieve_waste (`sieve_waste`)

Keep actual bead grade and independently measured as-discarded moisture. A copper-strip-factory sieve record does not establish this origin/grade. No assumed adsorption yield.

- Selected flow: Discarded 3A zeolite molecular-sieve beads
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `fenzi-molver-2021`

###### wash_effluent (`wash_effluent`)

Record whole actual aqueous effluent with water and independently sampled dissolved/suspended species subaccounts. It is a waste to a named treatment facility, not a bulk elementary discharge-to-water surrogate. COD is an indicator and cannot be converted to a named chemical mass.

- Selected flow: Glass-washing aqueous effluent to external treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `lisec-vhw-f-washing`

###### wash_sludge (`wash_sludge`)

Record separately collected sludge with actual dry glass solids and independently measured free water. Never allocate the same solids both to effluent and sludge or solve moisture and evaporation from one residual.

- Selected flow: Wet glass-washing solids sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `lisec-vhw-f-washing`

###### rejected_unit (`rejected_unit`)

A whole unreleased failed composite includes panes, spacer, beads, seals and retained gas/moisture; weigh and retain component subaccounts. Do not also export its embedded components unless actually separated, with separation burdens and verified separate outputs.

- Selected flow: Rejected dual-sealed insulating-glass unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `guardian-glasstime-2022`; `bostik-5000-application`

###### spent_hydraulic_oil (`spent_hydraulic_oil`)

Conditional actual drain and oil-contaminated phase only; distinguish recovered oil and independently measured water/solids. Keep equipment-charge opening/closing vectors; separately name any actual solvent, wipe or leak species.

- Selected flow: Spent mineral hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `lisec-bsv-spacer-forming`

###### spent_blade (`spent_blade`)

Conditional worn blade as a whole specific article; distinguish repaired retained tooling from exported waste and record actual alloy/coating and receiving treatment.

- Selected flow: Spent high-speed-steel saw blade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacture`
- Sources: `lisec-bsv-spacer-forming`

##### Elementary flows

###### exhaust_n2 (`exhaust_n2`)

Keep gross species outflow in the same defined physical gas control volume and pair unchanged ambient throughput with its intake. Use only independently established net production/loss to the actual receiving medium in the environmental model; do not invent combustion, cure gas, air fractions or heat-driven chemical reactions. For water distinguish incoming humidity, free-water evaporation, bead adsorption, condensate and structural water; ordinary unspecified air water-vapour identity is not an air-resource or liquid-water identity. Add any actual further species as its own atomic row. Native Elementary identity: CAS 7727-37-9; ordinary unspecified air emission; reference Mass/kg; no fixed geography. Do not substitute an air-resource, long-term, urban-ground or high-stack compartment, nor a different oxidation/isotope state.

- Selected flow: dinitrogen `fe0acd60-3ddc-11dd-aad2-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gases`
- Sources: `guardian-glasstime-2022`; `fenzi-molver-2021`; `bostik-igu-hotmelt`

###### exhaust_o2 (`exhaust_o2`)

Keep gross species outflow in the same defined physical gas control volume and pair unchanged ambient throughput with its intake. Use only independently established net production/loss to the actual receiving medium in the environmental model; do not invent combustion, cure gas, air fractions or heat-driven chemical reactions. For water distinguish incoming humidity, free-water evaporation, bead adsorption, condensate and structural water; ordinary unspecified air water-vapour identity is not an air-resource or liquid-water identity. Add any actual further species as its own atomic row. Native Elementary identity: CAS 7782-44-7; ordinary unspecified air emission; reference Mass/kg; no fixed geography. Do not substitute an air-resource, long-term, urban-ground or high-stack compartment, nor a different oxidation/isotope state.

- Selected flow: oxygen `08a91e70-3ddc-11dd-9745-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gases`
- Sources: `guardian-glasstime-2022`; `fenzi-molver-2021`; `bostik-igu-hotmelt`

###### exhaust_ar (`exhaust_ar`)

Keep gross species outflow in the same defined physical gas control volume and pair unchanged ambient throughput with its intake. Use only independently established net production/loss to the actual receiving medium in the environmental model; do not invent combustion, cure gas, air fractions or heat-driven chemical reactions. For water distinguish incoming humidity, free-water evaporation, bead adsorption, condensate and structural water; ordinary unspecified air water-vapour identity is not an air-resource or liquid-water identity. Add any actual further species as its own atomic row. Native Elementary identity: CAS 7440-37-1; ordinary unspecified air emission; reference Mass/kg; no fixed geography. Do not substitute an air-resource, long-term, urban-ground or high-stack compartment, nor a different oxidation/isotope state.

- Selected flow: argon `fe0acd60-3ddc-11dd-a350-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gases`
- Sources: `guardian-glasstime-2022`; `fenzi-molver-2021`; `bostik-igu-hotmelt`

###### exhaust_co2 (`exhaust_co2`)

Keep gross species outflow in the same defined physical gas control volume and pair unchanged ambient throughput with its intake. Use only independently established net production/loss to the actual receiving medium in the environmental model; do not invent combustion, cure gas, air fractions or heat-driven chemical reactions. For water distinguish incoming humidity, free-water evaporation, bead adsorption, condensate and structural water; ordinary unspecified air water-vapour identity is not an air-resource or liquid-water identity. Add any actual further species as its own atomic row.

- Selected flow: Carbon dioxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gases`
- Sources: `guardian-glasstime-2022`; `fenzi-molver-2021`; `bostik-igu-hotmelt`

###### water_evaporation (`water_evaporation`)

Keep gross species outflow in the same defined physical gas control volume and pair unchanged ambient throughput with its intake. Use only independently established net production/loss to the actual receiving medium in the environmental model; do not invent combustion, cure gas, air fractions or heat-driven chemical reactions. For water distinguish incoming humidity, free-water evaporation, bead adsorption, condensate and structural water; ordinary unspecified air water-vapour identity is not an air-resource or liquid-water identity. Add any actual further species as its own atomic row. Native CAS 7732-18-5 with reference Mass/kg; broad isotope/heavy-water synonyms are not selected isotope identity or applicable release state.

- Selected flow: water vapour `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gases`
- Sources: `guardian-glasstime-2022`; `fenzi-molver-2021`; `bostik-igu-hotmelt`

### Process: Finished-goods services (`handling`)

#### Inputs

##### Product flows

###### rack_purchase (`rack_purchase`)

New separately purchased article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Reusable steel glass-transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-5000-application`

###### rack_supplier_included (`rack_supplier_included`)

Supplier-included arriving article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Reusable steel glass-transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-5000-application`

###### rack_return_received (`rack_return_received`)

External return received. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Reusable steel glass-transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-5000-application`

###### cork_purchase (`cork_purchase`)

New separately purchased article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Cork glass-separation pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-5000-application`

###### cork_supplier_included (`cork_supplier_included`)

Supplier-included arriving article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Cork glass-separation pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-5000-application`

###### cork_return_received (`cork_return_received`)

External return received. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Cork glass-separation pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-5000-application`

###### film_purchase (`film_purchase`)

New separately purchased article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### film_supplier_included (`film_supplier_included`)

Supplier-included arriving article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### film_return_received (`film_return_received`)

External return received. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### strap_purchase (`strap_purchase`)

New separately purchased article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Polypropylene packing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### strap_supplier_included (`strap_supplier_included`)

Supplier-included arriving article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Polypropylene packing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### strap_return_received (`strap_return_received`)

External return received. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Polypropylene packing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### carton_purchase (`carton_purchase`)

New separately purchased article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Corrugated cardboard supply carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fenzi-aluminium-spacer`; `fenzi-molver-2021`

###### carton_supplier_included (`carton_supplier_included`)

Supplier-included arriving article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Corrugated cardboard supply carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fenzi-aluminium-spacer`; `fenzi-molver-2021`

###### carton_return_received (`carton_return_received`)

External return received. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Corrugated cardboard supply carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fenzi-aluminium-spacer`; `fenzi-molver-2021`

###### steel_drum_purchase (`steel_drum_purchase`)

New separately purchased article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Steel sealant supply drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### steel_drum_supplier_included (`steel_drum_supplier_included`)

Supplier-included arriving article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Steel sealant supply drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### steel_drum_return_received (`steel_drum_return_received`)

External return received. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Steel sealant supply drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### fibre_drum_purchase (`fibre_drum_purchase`)

New separately purchased article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Fibreboard sealant supply drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### fibre_drum_supplier_included (`fibre_drum_supplier_included`)

Supplier-included arriving article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Fibreboard sealant supply drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### fibre_drum_return_received (`fibre_drum_return_received`)

External return received. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Fibreboard sealant supply drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### liner_purchase (`liner_purchase`)

New separately purchased article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fenzi-molver-2021`

###### liner_supplier_included (`liner_supplier_included`)

Supplier-included arriving article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fenzi-molver-2021`

###### liner_return_received (`liner_return_received`)

External return received. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fenzi-molver-2021`

###### released_in (`released_in`)

Matched internal receipt of newly first-released units carrying their exact per-exchange manufacture burden vector; old already-released FG and external returns retain their original cohort separately. Cancel this internal receipt against first_release in the combined dataset, not against external supplier production.

- Selected flow: Insulating glass unit `12053592-e6c4-4c56-ad15-a36a267c500a`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `guardian-glasstime-2022`

###### returned_unit (`returned_unit`)

Actual external physical IGU return with independently measured current area, component mass, gas/water and condition, linked to original release/delivery references. Retain original accepted-delivery quantity and per-exchange burden reversal separately; do not infer it from changed physical return mass/contents. Keep original release-area Q/history fixed, and attribute only real permitted additions/removals and incremental service/tests to that cohort under cp_handling. A return or retest is not new Q or proof of repairability; failed/broken units require actual disposition and compatibility/acceptance evidence.

- Selected flow: Insulating glass unit `12053592-e6c4-4c56-ad15-a36a267c500a`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `guardian-glasstime-2022`

###### handling_electricity (`handling_electricity`)

Actual storage, lifting, packing, reinspection and dispatch service electricity by serviced release cohort. Same conditional CN grid-average 1–35 kV user-side restriction as electricity; another supply needs its own verified row. Keep services for old FG and returned units separate from new manufacturing.

- Selected flow: Alternating current `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-5000-application`

#### Outputs

##### Product flows

###### rack_gross_out (`rack_gross_out`)

Gross physical shipment outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Reusable steel glass-transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-5000-application`

###### rack_return_sent (`rack_return_sent`)

Separate external return outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Reusable steel glass-transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-5000-application`

###### cork_gross_out (`cork_gross_out`)

Gross physical shipment outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Cork glass-separation pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-5000-application`

###### cork_return_sent (`cork_return_sent`)

Separate external return outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Cork glass-separation pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-5000-application`

###### film_gross_out (`film_gross_out`)

Gross physical shipment outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### film_return_sent (`film_return_sent`)

Separate external return outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### strap_gross_out (`strap_gross_out`)

Gross physical shipment outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Polypropylene packing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### strap_return_sent (`strap_return_sent`)

Separate external return outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Polypropylene packing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### carton_gross_out (`carton_gross_out`)

Gross physical shipment outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Corrugated cardboard supply carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fenzi-aluminium-spacer`; `fenzi-molver-2021`

###### carton_return_sent (`carton_return_sent`)

Separate external return outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Corrugated cardboard supply carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fenzi-aluminium-spacer`; `fenzi-molver-2021`

###### steel_drum_gross_out (`steel_drum_gross_out`)

Gross physical shipment outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Steel sealant supply drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### steel_drum_return_sent (`steel_drum_return_sent`)

Separate external return outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Steel sealant supply drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### fibre_drum_gross_out (`fibre_drum_gross_out`)

Gross physical shipment outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Fibreboard sealant supply drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### fibre_drum_return_sent (`fibre_drum_return_sent`)

Separate external return outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Fibreboard sealant supply drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### liner_gross_out (`liner_gross_out`)

Gross physical shipment outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fenzi-molver-2021`

###### liner_return_sent (`liner_return_sent`)

Separate external return outward. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Polyethylene bag `10647902-9822-4b06-bc95-f1f30f10c261`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fenzi-molver-2021`

###### gross_unit_dispatch (`gross_unit_dispatch`)

Gross physical IGU dispatch with original release/delivery ID, actual area, full component mass and moisture/gas condition. This service output is not net Q and does not create a second manufacturing release. Keep returned deliveries, replacement parts and repair changes by original cohort; retained closing FG is a stock, not another newly manufactured output.

- Selected flow: Insulating glass unit `12053592-e6c4-4c56-ad15-a36a267c500a`
- Flow property / unit: Area `93a60a56-a3c8-19da-a746-0800200c9a66` / m2
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `guardian-glasstime-2022`; `bostik-5000-application`

##### Waste flows

###### rack_waste (`rack_waste`)

Discarded article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Discarded reusable steel glass-transport rack
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-5000-application`

###### cork_waste (`cork_waste`)

Discarded article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Discarded cork glass-separation pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-5000-application`

###### film_waste (`film_waste`)

Discarded article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Discarded polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### strap_waste (`strap_waste`)

Discarded article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Discarded polypropylene packing strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### carton_waste (`carton_waste`)

Discarded article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Discarded corrugated cardboard supply carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fenzi-aluminium-spacer`; `fenzi-molver-2021`

###### steel_drum_waste (`steel_drum_waste`)

Discarded article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Discarded steel sealant supply drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### fibre_drum_waste (`fibre_drum_waste`)

Discarded article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Discarded fibreboard sealant supply drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `bostik-igu-hotmelt`

###### liner_waste (`liner_waste`)

Discarded article. Conditional on this exact actual article and movement; count/measure article-only mass and composition. Keep separate opening/closing empty, attached-WIP, attached-FG and reusable stocks with no overlap. Separate new purchases, supplier-included physical receipts, external returns received, gross physical outgoing, separate returns sent and waste. Internal reuse cancels and never becomes another purchase, Q or automatic coproduct. Supplier-included packaging has a physical receipt even when its upstream burden is already in the supplier dataset; flag that burden boundary and do not charge twice. Preserve each cohort’s historical vector. Cork/wood moisture and repairs need independent actual water/material quantities; no cork, wood, liner or composite construction is presumed. PE native film has an isolated luggage taxonomy defect, but CAS 9002-88-4, names, synonyms and film comment agree; PET is a competing polymer, not selected. PE bag identity applies only to a discrete PE bag, not the whole drum or a multilayer liner.

- Selected flow: Discarded polyethylene bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `fenzi-molver-2021`

###### fg_damage (`fg_damage`)

Actual damage after first release retains original manufacture burden and cohort; full composite mass includes actual glass/seals/spacer/beads/gas/moisture. It is not a reversal of historical physical production or clean cullet. Real dismantling creates new specific outputs only with retained treatment burden.

- Selected flow: Broken dual-sealed finished insulating-glass unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Single unit result q_j for this exchange; raw records and calculation are defined in section 8; no further division
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_handling`
- Sources: `guardian-glasstime-2022`; `bostik-5000-application`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocate_direct` | all exchanges | Apply only in attributional cases requiring allocation. First use dedicated measurements and actual/virtual subdivision, assigning embodied articles and directly attributable tests, failures and service to the relevant release cohort. Keep gross physical outputs independent from burden shares. | `ilcd-attributional-2010` |
| `allocate_causal` | remaining shared exchanges | For each remaining exchange demonstrate the determining physical causal relationship specific to that exchange and function. Metered heater time/load, washing cycles or actual heated sealant demand may be investigated, but neither mass nor area nor energy nor a convenient shared fraction is automatically causal. Retain evidence and sensitivity separately for each exchange. | `ilcd-attributional-2010` |
| `allocate_residual` | genuine unassignable residual | Only for genuinely remaining inseparable multifunctional burdens use documented contemporaneous market values for actual coproducts in their actual state at the same common process gate. Separate quantity, actual price, currency/date, moisture/quality and gate, then disclose shares and sensitivity. No arbitrary physical/economic choice, fixed percentage, universal price or default avoided-burden credit. A waste sale, internal reuse or return does not automatically create a coproduct. | `ilcd-attributional-2010` |
| `allocate_returns` | FG and packaging | Retain original release and delivery IDs. Reverse the original delivery/burden assignment before a returned unit is redelivered; retain actual material removals/additions, moisture/gas changes and incremental repair/test/service burden on its original cohort. Historical manufacture is not recharged to unrelated current Q. Record damaged units and stock loss rather than silently deleting them. Packaging gross physical balance does not depend on allocated life shares. | `ilcd-attributional-2010`; `bostik-5000-application` |
| asset_manufacture_conservation | existing capital/reusable manufacture attribution | Within the applicable allocation decision context, original manufacture burden attributed across uses of actual capital equipment or reusable articles already included in foreground production, packaging or observed services uses one persistent same-asset ledger across all crops, products, cohorts, manufacturing/postrelease services, owners and observation periods. D is its supported whole installed service: all realized historical service plus supported remaining service in the same units as actual beneficiary use u; D must be finite and positive. Period capacity, remaining-only capacity, the physical asset/article mass alone, or current-period product Q alone is not D; supported whole-service throughput in mass units may be used when it demonstrates the causal service and matches u. This does not amortize the manufactured reference product over downstream life or change its declared reference gate/Q. The fractions u/D and all previously assigned manufacture shares together must never exceed 1. Changes of window, custody, provider or repair never restart the original manufacture balance. Replacements have distinct identities and only their real new manufacture vectors; actual repair and treatment increments remain separately accounted. Revised capacity evidence requires transparent reconciliation of prior shares and sensitivity, not a fresh ledger. Keep full physical mass and stock movements independent of burden shares. Unknown D, prior shares or beneficiary coverage requires review and no final manufacture-attributed amount; no assumed lifetime, utilization, zero or arbitrary division is permitted. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

For each existing collection protocol that attributes manufacture of included production, packaging or observed-service assets across uses in this route (excluding amortization of the manufactured reference product itself), additionally retain a durable asset identity, its measured full physical mass and acquisition/installation/retirement stock history, original manufacture burden vector, all historical and current beneficiaries, matched-unit service readings, the evidenced whole installed-service denominator D, supported remaining-service basis and uncertainty, prior assigned shares and remaining original manufacture balance. Carry the ledger across reporting windows and custody/provider changes. Collect actual repair, replacement, recovery and treatment separately; these records do not normalize physical movements or create an additional asset purchase. These are added fields and conservation obligations for the existing applicable protocols, not a new assumed capital inventory.

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_manufacture | manufacture | all manufacture materials utilities and waste | raw_activity_records | supplier lot and state; outer/inner pane mass and dimensions; profile alloy and length; joint material; bead size and moisture; full formulation masses; input and waste weights; raw water and energy meter readings with units; equipment fluid opening/closing and inherited vectors; raw/WIP/hold-up opening/closing quantities and per-exchange vectors; failure idle startstop cleanup and rework; destination; uncertainty | Retain original invoices, calibrated scales/meters, stocktakes, SDS/TDS and all successful/failed job records. Collect raw unnormalized quantities; independently sample water/solids and material identities. Link every reading to a process interval and cohort; retain corrected-consumption flag. Actual non-WIP fluid/tooling/other included stock quantities and per-exchange vectors are independent of WIP. For included capital assets additionally retain actual physical acquisition/closing/retirement quantities separately from service vectors; add each actually needed specific flow, with no default asset weight/life. | native units retained with actual conversions | each lot job interval and stocktake | full reporting period including shutdown | selected manufacturer and linked actual suppliers | per reference flow | calibration; invoices; SDS; waste tickets; stock and history ledger |
| cp_gases | manufacture | each cavity/air-handling gas species and water | raw_gas_and_moisture_records | control volume; each species identity; integrated volume or true rate; time for true rate only; temperature; absolute pressure; humidity; measured composition; independent substance density; cavity retained mass; bead water before/after; wash evaporation; actual condensate origin; gas/water outflow and destination; uncertainty | Collect original paired gross inlet/outlet observations at one defined boundary with independent moisture/gas measurements. Preserve gross quantities, independently evidenced unchanged passthrough, actual retained cavity/bead stock and real net changes as separate linked records. Raw physical closure uses both gross directions. Only a separately documented matched-species/phase/state/boundary passthrough may be removed from BOTH corresponding gross inlet and outlet to derive the net environmental view; never remove it from only one side or add net and gross views together. Resource-from-air and emitted-vapour/species identities remain distinct; no automatic LCIA cancellation or substitution across unmatched chemical/phase/compartment identities. Condensate/adsorption/evaporation and actual atmospheric water entry require independent source/exit evidence. Never infer air composition, cross-substance density, two unknown sinks or reaction yield from a residual. | native volume/rate units and measured kg | each run and paired measurement interval | same full reporting period and stock boundaries | selected cavity/air-handling physical boundary | per reference flow | gas/humidity instrument calibration; paired samples; independent water/species evidence |
| cp_release | manufacture | first_release | first_quality_release_records | unit ID; both panes and sealed configuration; actual outline/shape and drawing revision; independently measured dimensions; verified rectangular flag or traceable geometry/planimetry and uncertainty; actual one-face projected A_k including sealed edge; calibrated net unit mass; seal/nozzle/corner/cooling inspections; applicable current specification and actual tests; sample/reject disposition; first release time; reporting cohort; raw Q; uncertainty | Measure each actual configuration and link test/release evidence to a unique unit. Determine actual one-face projected A_k from calibrated dimensions/drawing-specific geometry or traceable planimetry. Length × width is only a verified rectangular case; do not substitute a bounding box for a shaped unit. Sum actual A_k of unique first releases as Q; keep net unit/component mass independently measured for physical balances. No guessed kg per unit, fixed kg/m2, density from a secondary property, doubled pane area, service life or manufacturer certification. | m2 and independently measured kg | each unit and first release | full declared release cohort | selected production gate after all required tests | per reference flow | dimension/scale calibration; actual tests; unique release log |
| cp_handling | handling | FG services and each individual packaging movement | raw_stock_and_dispatch_records | original release/delivery/cohort IDs; opening/closing FG and each exchange vector; gross dispatch and external unit return; reverse original assignment; material additions/removals and gas/water changes; repair/testing/service raw readings; each packaging article composition and mass; mutually exclusive empty attached-WIP attached-FG reusable opening/closing quantities; new purchased; supplier-included receipt; externalreturnreceived; grossout; externalreturnsent; waste; internalreuse; repair and water changes; uncertainty | Scan/count and independently weigh/tare actual units and each packaging direction; stocktake mutually exclusive states and retain supplier-inclusion flags, original cohort history and original-delivery reversal separately from changed physical-return mass/state. Source permission to rewarm surplus sealant or correct molten corners is not permission to repair a failed/broken IGU. Rework/replacement/cleaning is included only when actual manufacturer/system compatibility instructions and acceptance/testing permit it; otherwise retain actual reject/discard and the gap, not an assumed successful repair. Record each actual new/removed pane, profile/joint, bead, sealant, cleaning or gas/water direction and independently measured old/new masses/state with its own specific atomic card before complete data is claimed; no equal-weight, reusable-old-glass/seal/desiccant, repairability or life-extension assumption. Keep original first-release area Q/history fixed and actual incremental service on that cohort. Released custody includes permitted work-in-progress once: either within explicit released-FG substates or as disjoint repair-WIP opening/closing quantities, never both. Materially changed/new route needs renewed applicability. | native counts mass area and energy units | each movement and periodic stocktake | reporting period with full historical cohort links | actual storage/packing/dispatch service gate | per reference flow | dispatch/return tickets; stocktakes; composition; moisture/repair evidence; original burden reversal |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `convert_raw` | all inventory rows | Convert original raw units before attribution: measured kWh × 3.6 = MJ; kg from calibrated net weighing; actual one-face whole-unit projected m2 from cp_release. Use measured length × width only for a verified rectangular unit; other actual shapes require their own traceable measured-outline area determination, not a bounding box. An integrated liquid/gas volume is already a quantity and is not multiplied by time again; integrate only true rates. Volume-to-mass needs independently measured density of that actual substance at its declared state, not water density, a fixed kg/m2 or a secondary flow-property factor. | raw readings; calibration; actual state; cp_release | converted raw quantities | `lisec-qualitypass-2024`; `ilcd-attributional-2010` |
| `attribute_raw` | all inventory rows | Reconcile raw physical movements and every inherited exchange vector before normalization, retaining original undivided records. A_j is the exchange in the declared reporting view attributed to the same release cohort after conversions and evidenced assignment/stock carry/allocation. Gross physical Product/waste/package/return directions retain measured real quantities with their own burden vectors; burden shares, reuse or a corrected-consumption ledger cannot shrink an actual gross movement. Gas/species environmental A_j is separately derived from the paired gross records under cp_gases and balance_water_gas, with the same evidenced passthrough removed on both corresponding sides; retain raw physical quantities and never add both views. Manufacturing vectors include all new first-released output even when closing FG, without subtracting that assigned production again; prior released FG is not new current manufacture. Retain failures/Q=0, all disjoint raw/WIP/hold-up/non-WIP histories and true incremental handling service. Old/returned FG services keep original release-area Q, service horizon and history, not unrelated new-period Q. Separately evidence unused transfers versus spent/waste/leaked charge/tool quantities and their remaining/consumed vectors. If capital-equipment service is included, its actual physical stocks/acquisitions/retirements stay separate from the per-exchange service burden. Correct measured consumption OR its proved equivalent stock/vector account once, not both. | converted raw quantities; cohort vectors; allocation evidence | A_j | `ilcd-attributional-2010` |
| `normalize_exchange` | all inventory rows | q_j = A_j / Q for Q > 0. Execute this division once after convert_raw and attribute_raw; q_j is the exchange per 1 m2 reference flow. For Q = 0 keep A_j and all physical/history records with no unit result. Cards and protocol aggregation reference this same result and never divide again. | A_j; Q; convert_raw; attribute_raw; cp_release | q_j per 1 m2 reference flow | `ilcd-attributional-2010` |
| `balance_manufacture` | manufacture | For each same material/element and declared physical gate close opening disjoint raw/WIP/recoverable hold-up and included non-WIP stocks + all actual gross external physical inputs = corresponding closing disjoint stocks + newly first-released whole-unit mass + every actual gross external Product/waste/species outflow. Link the separately recorded equipment-fluid/tooling stocks of boundary_stocks; cancel only matched internal transfers with real losses and energy retained. Gross atmospheric intake and gross gas/water outflow are used together here: never retain gross intake while replacing its outlet by a net environmental amount. A separately derived paired net environmental view must reduce both matched unchanged inlet and outlet by the same evidenced passthrough; raw gross and net views are linked alternatives, never additive. Retained cavity species and actual adsorbed water are already included once in full released/WIP masses. Newly released mass includes both panes, frame/joints, beads with actual water, both seals and cavity gas. Area Q is not mass, and closing already-released FG is not a further manufacturing output. Do not fit two unknowns with one residual or double-count embedded components. | physical masses; species assays; stock quantities; cp_manufacture; cp_gases; cp_release | independent material and element residuals | `guardian-glasstime-2022`; `fenzi-molver-2021` |
| `balance_fg` | handling | For each FG cohort opening physical FG + internal newly released receipt + actual external returned units + actual added parts/species/water = closing physical FG + gross physical unit shipments + discarded FG + actually removed material/species/water. Maintain original burden vector separately; no second production output for closing FG. Cancel internal first-release handover in the combined manufacturing/FG gate. If already-released repair-held units are separately identified as repair WIP, include their disjoint opening and closing physical component/state terms once; otherwise explicitly include them within released-FG custody stock. Never assume original delivery mass/contents equal a changed physical return. Repair remains conditional on the actual instruction/compatibility/acceptance gate of cp_handling; broken/failed glass is not restored by bookkeeping. | FG physical stocks; gross dispatch; returns; additions; removals; cp_handling | cohort FG mass and area reconciliation | `ilcd-attributional-2010`; `guardian-glasstime-2022` |
| `balance_packaging` | handling | For each packaging article separately: opening empty + opening attached-WIP + opening attached-FG + opening reusable + new separately purchased + supplier-included arriving + externalreturnreceived = closing empty + closing attached-WIP + closing attached-FG + closing reusable + gross physically shipped outward + externalreturnsent + waste. Stock buckets are mutually exclusive; internal reuse cancels. Measure actual cork/wood water change and repair new/removed components separately if present, with their own atomic flows; track quality/history vectors. No net-shipment shortcut or automatic repurchase/credit. | each article movement; stocktakes; moisture; repair; cp_handling | per-article gross physical reconciliation | `bostik-igu-hotmelt`; `fenzi-aluminium-spacer`; `fenzi-molver-2021` |
| `balance_water_gas` | manufacture and handling | Keep free wash water, supplied formulation water, bead residual/structural water, adsorbed moisture, humid-air intake/outflow and actual condensate as different physical accounts at the same control volume. Independently measure water and species transfers; retained/desorbed moisture is not fictitious reaction water. Thermoplastic cooling creates no assumed gas stoichiometry. Gross N2/O2/Ar/CO2/H2O passthrough is paired before identifying actual net species changes; COD/VOC/total-element indicators are not species masses. | independent water/species observations; actual gas state; cp_gases; cp_manufacture | water and individual-species balances | `guardian-glasstime-2022`; `fenzi-molver-2021`; `bostik-igu-hotmelt` |
| asset_manufacture_share | existing capital/reusable manufacture attribution | For each included original asset manufacture vector B, f_current = u_current / D only after the persistent ledger verifies the supported whole installed-service denominator, all beneficiaries and prior assigned shares. Attribute f_current * B once to the actual beneficiary before the existing single reference normalization. Check prior_shares + all current/new beneficiary shares <= 1; carry the remaining original balance. Capacity revisions reconcile the historical ledger. Full physical asset/packaging mass and actual gross stocks/returns never receive f_current. Unknown D or history leaves the final attributed result unavailable, without suppressing actual repair/replacement/service burdens. | asset_id; original_B; u_current; D; historical_beneficiaries; prior_shares; capacity_evidence | conserved attributed manufacture vector |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all rows | Match actual type, composition, formulation, CAS, particle/form, route, geography, voltage, medium and reference property; UUID is identity rather than provider approval. Preserve all stated native restrictions on each row. Unbound auxiliary identity cannot become an unspecified collection. | direct native records; supplier SDS/TDS; test and provider documents |
| dq_complete | raw inventory and stocks | Cover the full period including failure/zero output, all stock layers and equipment charges. Maintain per-exchange inherited vectors and original cohort/service attribution. Unknown, absent, measured zero and below detection are different; report unresolved physical residuals honestly. | raw stock/meter records; balance residuals and uncertainty |
| dq_sources | all constrained rules | Retain primary scope and alternatives. This synthesis does not assert a common plant/SKU or transfer supplier numbers across products. Industrial sources do not support allocation. Standards mentioned by manufacturers require the actual applicable version and real test evidence; product claims alone are not conformity. | primary originals and full context; actual specification and test records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | dataset applicability | Verify two annealed uncoated panes, aluminium/desiccant frame, separate PIB primary and thermoplastic hot-melt secondary, air fill and protected edge terminal. Reject mirror, single-seal, TPS, inert-gas, reactive-seal or structural/exposed-edge substitution under this route. | `guardian-glasstime-2022`; `bostik-igu-hotmelt`; `fenzi-hotver-2000` |
| `validate_gate` | Q and first_release | Require unique first-release/test evidence and one-face whole-unit area; verify the explicitly linked Product output equals 1 m2 and no new Q from retest/returns. Separate both pane masses and cavity contents. No manufacture output for closing FG in addition to Q. | `guardian-glasstime-2022`; `bostik-5000-application` |
| `validate_accounting` | all inventories | Check complete manufacturing/FG/combined mass gates, each relevant element and species, raw-to-converted-to-attributed quantities, complete historical vectors, packaging gross equation and exactly one normalize_exchange operation. Q=0 has real raw burden and no unit result. Do not close two unknowns with one residual or characterize whole wastewater as a chemical. | `ilcd-attributional-2010`; `fenzi-molver-2021`; `guardian-glasstime-2022` |
| `validate_release` | quality and usability | Retain actual applicable product/system specification, geometric/edge-seal checks, primary continuity, secondary wetting/depth/corners, desiccant condition, cooling/handling support and actual test results before first release. A handling-time brochure figure, UUID or projection pass proves neither quality conformity nor scientific approval. Missing terminal tests or core route evidence prevents a ready dataset; future site-specific quantities and auxiliary UUIDs remain required without invented defaults. | `guardian-glasstime-2022`; `bostik-5000-application`; `lisec-qualitypass-2024`; `fenzi-molver-2021` |
| validate_asset_manufacture_conservation | existing capital/reusable manufacture attribution | For every included capital/reusable manufacture attribution verify same-asset continuity, whole installed service in matched units, all historical/current beneficiaries, prior assigned manufacture shares and cumulative share <= 1. Reject a reset by period, cohort, provider, owner or repair. Check distinct real replacement and incremental repair/treatment vectors separately and preserve gross physical mass. A missing denominator, unexplained previous allocation or incomplete beneficiary ledger requires explicit review and an unavailable final attributed amount; structural inspection cannot claim empirical completeness. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | Declared unframed insulating-glass input to compatible downstream window/building models |
| allowed_use | Same specified air-filled two-pane dual-seal route with actual measured configuration and full burdens |
| excluded_use | Mirror or all-CPC coverage; thermal equivalence; certification; complete window; unsupported route or default factory inventory |
| required_metadata | site and reporting period; first quality-release gate and unique cohort IDs; two uncoated annealed soda-lime panes and suppliers; pane dimensions thickness edge preparation and full supplier burden; single-face projected whole-unit area including sealed edge; aluminium spacer alloy geometry joint composition and desiccant filling; 3A bead grade size supplied moisture and exposure; whole PIB primary formulation and hot-melt secondary formulation; nozzle temperature wetting corner continuity seal depth cooling and release tests; air cavity gas composition humidity temperature pressure and retained mass; protected edge application and excluded structural exposed-edge use; opening closing WIP FG equipment fluids and per-exchange inherited vectors; gross packaging movements composition moisture repair and stocks; actual electricity voltage geography mix and water supply/treatment boundary; independent species balances uncertainty and receiving destinations; attributional allocation applicability causal drivers and residual market evidence |
| required_quality_disclosure | Actual quality/test coverage; source limits; supply identity restrictions; unbound rows; measured residuals; uncertainty; allocation and stock/cohort history; no invented quantities |
| update_trigger | Change in terminal, pane treatment/coating, gas, spacer, seal chemistry, supply state, specification, allocation evidence or physical stock method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| guardian-glasstime-2022 | handbook | Guardian GlassTime, August 2022, §§2.1–2.4 and 9.2.5; https://www.guardianglass.com/content/dam/guardianindustriesholdings/technical/europe/GlassTimeHandbook_EN_0822.pdf | Unit architecture; dry-air drawing; dual barriers; UV exclusions; dimensional inspection context. No default performance or inert-gas recipe. |
| bostik-igu-hotmelt | handbook | Bostik, Smart Seal Good Feel, 2018 brochure, pp.3–6; https://www.bostik.com/files/live/sites/shared_bostik/files/import-uk/bostik-insulating-glass.pdf | Compounded PIB primary and one-part butyl hot-melt secondary supply; heated application and cooling; drum/block alternatives and final limitations. Marketing waste/timing figures are not inventory defaults. |
| bostik-5000-application | handbook | BOSTIK 5000 product overview and Applications & Features, snapshot 2026-10-20; https://www.bostik.com/uk/en_GB/catalog/product/f/bostik_dg_butyl_ig_emea/p/bostik-5000/ | Heated dispenser; nozzle-temperature checks; wetting and corner/seal-depth checks; support under both panes. Page announces a new version; historical route support only. |
| fenzi-hotver-2000 | handbook | Fenzi Hotver 2000 product/application/storage text, snapshot 2026-10-20; https://www.fenzigroup.com/en/products/igu/sealants/hotver/hotver-2000 | Independent one-part thermoplastic secondary-seal example; clean dry substrate; rewarming surplus; single-seal counterexample excluded. Brand-specific temperatures and certification claims are not transferred. |
| lisec-vhw-f-washing | handbook | LiSEC VHW-F full product page, snapshot 2026-10-20; https://www.lisec.com/solutions/individual-machines/detail/wash/vhw-f | Washing zones; treated water; blower drying; heating and cleaning; optional circulation. This is component-level evidence rather than one complete factory. |
| lisec-bsv-spacer-forming | handbook | LiSEC BSV-45ANK full product page, snapshot 2026-10-20; https://www.lisec.com/solutions/individual-machines/detail/frame-processing/bsv-45ank | Profile sawing; connection; bending geometry; aluminium subset. Plastic hot bending is an excluded alternative. |
| lisec-qualitypass-2024 | handbook | LiSEC, lis.qualitypass – Traceable quality in insulating glass production, 23 April 2024; retained full page snapshot 2026-10-20; https://blog.lisec.com/qualitypass | Linking pressure/temperature/time and structure to automatic and manual quality records. Software deployment and its version requirements are not PCR requirements. |
| fenzi-molver-2021 | handbook | Fenzi MOLVER MGM 01 Technical Data Sheet, Revision 08 October 2021, complete one-page original hosted by Tecglass; https://tecglass.es/wp-content/uploads/2021/11/MOLVER-MGM-01_Technical-Data-Sheet_20211019.pdf | 3A granular desiccant compatible with hot-melt second barriers; water adsorption and residual-water distinction; supply packaging. No dose or adsorption yield default. |
| fenzi-aluminium-spacer | handbook | Fenzi Aluminum Spacer H65, snapshot 2026-10-20; https://www.fenzigroup.com/en/products/igu/spacers/conventional/aluminum-h65 | Supplied aluminium-alloy spacer profile and optional connectors; cardboard/steel supply containers. No assumed connector composition or universal profile dimension. |
| ilcd-attributional-2010 | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA, Detailed guidance, first edition March 2010, §7.9.3 pp.257–258; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | Attributional allocation cases only: subdivision; determining exchange-specific physical causality; residual actual-state common-gate market value. No recipe, emission factor, stock formula or automatic credit. |
