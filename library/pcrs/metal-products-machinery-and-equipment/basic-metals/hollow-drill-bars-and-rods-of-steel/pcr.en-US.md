---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.hollow-drill-bars-and-rods-of-steel
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Hollow drill bars and rods, of steel

## 1. Scope and Applicability

This PCR covers gate-to-gate production of steel hollow drill bars and rods supplied as straight mill products suitable for rock-drilling or similar drill applications. The product may be alloy or non-alloy steel and may have a round, hexagonal, or other declared cross-section. The foreground boundary begins when declared solid steel feedstock and purchased utilities enter the hollow-drill-steel manufacturing plant and ends with one kilogram of conforming, unpackaged hollow drill bar or rod at the plant gate.

For classification control, a product claimed to meet the Chapter 72 hollow-drill-bar definition must be suitable for drills, have a greatest external cross-sectional dimension greater than 15 mm and not greater than 52 mm, and have a greatest internal dimension not greater than one half of the greatest external dimension. Products outside that geometry are not silently included.

Excluded are seamless or welded tubes and hollow profiles not meeting the hollow-drill-bar definition; oil- or gas-well casing, tubing, and drill pipe; finished drill assemblies, bits, couplings, shanks, and anchors; solid drill rods; upstream steelmaking; downstream use, maintenance, and end-of-life; and transport or packaging after the declared plant gate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.hollow-drill-bars-and-rods-of-steel |
| classification_refs | CPC 3.0: 41273, exact classification context |
| covered_products | Straight hollow drill bars and rods of alloy or non-alloy steel, in the declared cross-section, dimensions, grade, heat-treatment state, length, and surface condition |
| excluded_products | Tubes and hollow profiles outside the Chapter 72 hollow-drill-bar definition; oil- and gas-well drill pipe, casing, or tubing; solid rods; assembled drill tools and anchoring systems |
| representative_product | Unpackaged steel hollow drill bar or rod conforming to the purchaser's declared dimensional and metallurgical specification |
| production_route | Received steel feedstock; reheating where used; hollow forming by the declared hot-working, extrusion, rolling, or drawing route; heat treatment where used; straightening, cutting, surface finishing, inspection, and release |
| market_state | Straight mill-length or cut-length bar/rod, unpackaged at the manufacturing plant gate; geometry, steel grade, heat treatment, length, surface condition, and inspection class declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a conforming hollow steel bar or rod suitable for the declared drill application |
| How much | 1 kg net mass of unpackaged conforming product at the manufacturing plant gate |
| How well | Meets the declared steel grade, cross-section, external and internal dimensions, heat-treatment state, straightness, length, surface condition, and inspection requirements |
| How long or cycle | One production lot through release at the plant gate; no use-life service is included |
| reference_flow_link | `reference_hollow_drill_steel` in process `hollow_drill_steel_manufacturing` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Hollow drill bars and rods, of steel `f809f600-17ff-48b3-85da-01f93dbede3c` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | steel grade and alloy status; semi-finished feedstock form; forming route; cross-section shape; greatest external dimension; greatest internal dimension; finished length; heat-treatment state; surface condition or coating; inspection or conformity specification; plant geography; production period; packaging exclusion |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product and all mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to measured net mass of accepted hollow drill steel, excluding packaging, removable dunnage, mill scale, offcuts, and rejected product. |
| `geometry_declaration` | reference product identity | Length | mm | Record cross-section shape and greatest external and internal dimensions. When the Chapter 72 hollow-drill-bar definition is claimed, verify external dimension > 15 mm and <= 52 mm and internal dimension <= one half of the external dimension. |
| `energy_conversion` | purchased electricity | Energy | MJ | Preserve the metered unit in raw data and convert kWh to MJ only by multiplying by 3.6; disclose voltage level, supply geography, and grid or contractual electricity identity. |
| `gas_reference_conditions` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record meter reference temperature, pressure, gas purity or composition, and whether the volume is standard, normal, or actual; do not compare or aggregate volumes at different reference conditions without conversion. |
| `wastewater_mass_conversion` | wastewater sent to treatment | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | When wastewater is metered by volume, calculate mass only from the measured volume and a recorded measured or technically justified density for the same stream and period. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased solid alloy-steel or non-alloy-steel primary/semi-finished feedstock at the first controlled manufacturing gate, with grade, form, mass, supplier, and upstream dataset declared |
| starting_condition_role | External product input to gate-to-gate hollow-drill-steel manufacture; upstream steelmaking is represented by linked supplier or secondary datasets, not recreated in this foreground process |
| product_classification_scope | Steel hollow drill bars and rods conforming to the declared CPC 41273 product boundary; Chapter 72 geometry is applied when that classification claim is used |
| recursive_input_rule | If a purchased input is already a hollow drill bar or rod of this category, record it as the same reference product flow, stop category recursion at that exchange, and disclose its quantity, state, supplier, and upstream dataset |
| upstream_dataset_requirement | Use geographically, technologically, temporally, and product-state representative datasets for steel feedstock, electricity, natural gas, industrial oxygen, process water, and any external waste treatment or recovery |
| disclosure | Declare plant geography and period; alloy status and grade; feedstock form; forming and heating route; heat treatment; cross-section and dimensions; yield and reject disposition; water-loop boundary; electricity identity; fuel and oxygen reference conditions; abatement systems; wastewater destination; and whether packaging or transport has been excluded |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | all foreground modelling | Include all controlled operations from receipt of declared steel feedstock through heating, hollow forming, heat treatment where used, straightening, cutting, finishing, inspection, and release of conforming unpackaged product. | `eu-ferrous-metals-bat-2022` |
| `boundary_utility_and_emissions` | energy, water, residues, wastewater, and direct emissions | Include purchased energy and water, direct fuel and oxygen use, metallic scrap, mill scale, wastewater crossing the gate, and measured or calculated direct air emissions attributable to the included operations. | `eu-ferrous-metals-bat-2022` |
| `boundary_exclusions` | upstream and downstream stages | Represent upstream steelmaking and purchased supplies with linked datasets; exclude downstream distribution, packaging outside the declared product, use, maintenance, and end-of-life. | `un-cpc-3-0-structure-2025`; `eu-cn-2020-1577-ch72-note-1p` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `hollow_drill_steel_manufacturing` | Hollow drill steel forming and finishing | required | Always include the controlled gate-to-gate operations actually used; mark conditionally absent atomic exchanges as not applicable only with evidence | Foreground manufacturing from declared steel feedstock through released hollow drill bar or rod | 1 kg net conforming unpackaged product at plant gate |

### Process: Hollow drill steel forming and finishing (`hollow_drill_steel_manufacturing`)

#### Inputs

##### Product flows

###### Alloy-steel feedstock (`alloy_steel_feedstock`)

Record this exchange only for the alloy-steel route. It is the measured mass of the declared alloy-steel primary or semi-finished form entering the controlled process.

- Selected flow: Alloy steel `4f2d85d4-e6ed-4f74-8063-492513b93cde`
- Flow property / unit: Mass / kg
- Amount rule: Sum accepted alloy-steel feedstock mass charged to the production lot and divide by net accepted hollow-drill-steel mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-ferrous-metals-bat-2022`

###### Non-alloy-steel feedstock (`non_alloy_steel_feedstock`)

Record this exchange only for the non-alloy-steel route. It is one concrete solid feedstock exchange whose grade and semi-finished form must be declared; its exact Tiangong UUID remains unresolved.

- Selected flow: Non-alloy steel semi-finished feedstock
- Flow property / unit: Mass / kg
- Amount rule: Sum accepted non-alloy-steel feedstock mass charged to the production lot and divide by net accepted hollow-drill-steel mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-ferrous-metals-bat-2022`

###### Purchased electricity (`purchased_electricity`)

Record the purchased alternating-current electricity crossing the plant boundary for drives, forming, heat treatment, finishing, water systems, and abatement. Select the exact voltage, geography, and supply technology in the foreground dataset before publication.

- Selected flow: Purchased alternating-current electricity
- Flow property / unit: Energy / MJ
- Amount rule: Sum allocated meter readings for the included operations, convert to MJ where required, and divide by net accepted hollow-drill-steel mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_gas_balance`
- Sources: `eu-ferrous-metals-bat-2022`

###### Natural gas for feedstock heating (`natural_gas_for_heating`)

Record gaseous natural gas only when it is purchased and consumed in included reheating, intermediate-heating, or heat-treatment equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Sum corrected meter volume attributable to the lot and divide by net accepted hollow-drill-steel mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_gas_balance`
- Sources: `eu-ferrous-metals-bat-2022`

###### Industrial oxygen for oxy-fuel combustion (`industrial_oxygen_for_oxyfuel`)

Record purchased industrial oxygen only when oxy-fuel or oxygen-enriched combustion is used in included furnaces.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Sum corrected purchased oxygen meter volume attributable to the lot and divide by net accepted hollow-drill-steel mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_gas_balance`
- Sources: `eu-ferrous-metals-bat-2022`

###### Process water (`process_water`)

Record make-up process water crossing the product boundary for descaling, cooling, quenching, finishing, or abatement. Do not count internally recycled water again.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Sum make-up process-water mass entering the included system, exclude internal recirculation, and divide by net accepted hollow-drill-steel mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-ferrous-metals-bat-2022`

##### Waste flows

No waste input is required. If a site uses a specific recovered waste as a material input, add one separately identified exchange rather than merging it with steel feedstock.

##### Elementary flows

No elementary input is prescribed. Water and oxygen supplied as purchased products are recorded above, not as resource withdrawals.

#### Outputs

##### Product flows

###### Reference hollow drill steel (`reference_hollow_drill_steel`)

This is the accepted unpackaged output that carries the reference flow. Rejected pieces remain in the scrap row and are not included in reference-product mass.

- Selected flow: Hollow drill bars and rods, of steel `f809f600-17ff-48b3-85da-01f93dbede3c`
- Flow property / unit: Mass / kg
- Amount rule: Set the normalized accepted product output to 1 kg after reconciling measured lot mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `un-cpc-3-0-structure-2025`; `eu-cn-2020-1577-ch72-note-1p`

##### Waste flows

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Record offcuts, cropped ends, and rejected steel pieces leaving the foreground process for recovery or disposal. Declare alloy status, contamination, and destination.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Sum measured outgoing post-industrial steel-scrap mass and divide by net accepted hollow-drill-steel mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-ferrous-metals-bat-2022`

###### Mill scale (`mill_scale`)

Record oxide scale collected from reheating, descaling, hot forming, cooling-water treatment, or finishing as a separate waste exchange. Declare moisture and oil content and recovery destination.

- Selected flow: Mill scale `aad763e2-78ab-4fcb-8a3b-8d8525c9e6ca`
- Flow property / unit: Mass / kg
- Amount rule: Sum measured as-received mill-scale mass leaving the foreground boundary and divide by net accepted hollow-drill-steel mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-ferrous-metals-bat-2022`

###### Wastewater sent to treatment (`wastewater_to_treatment`)

Record the steel-processing wastewater crossing the foreground boundary to onsite or offsite treatment after subtracting internal recirculation and evaporation. Declare composition, treatment state, and destination.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from measured discharge mass or same-period volume and recorded density, then divide by net accepted hollow-drill-steel mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-ferrous-metals-bat-2022`

##### Elementary flows

###### Direct fossil carbon dioxide (`direct_fossil_carbon_dioxide`)

Record only fossil carbon dioxide emitted directly from included fuel combustion or process carbon at the foreground site. Do not add upstream electricity emissions here.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Sum measured stack mass or calculate from reconciled fossil-fuel carbon and oxidation records, then divide by net accepted hollow-drill-steel mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-ferrous-metals-bat-2022`

###### Direct nitrogen oxides (`direct_nitrogen_oxides`)

Record nitrogen monoxide and nitrogen dioxide from included combustion as one reported NOx mass expressed as NO2. Do not substitute nitrous oxide; the exact Tiangong UUID remains unresolved.

- Selected flow: Nitrogen oxides emitted to air, expressed as NO2
- Flow property / unit: Mass / kg
- Amount rule: Sum compliant stack measurements or validated equipment-specific calculations for NOx expressed as NO2 and divide by net accepted hollow-drill-steel mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-ferrous-metals-bat-2022`

###### Direct particulate matter (`direct_particulate_matter`)

Record total particulate matter emitted to air from included heating, descaling, grinding, rolling, finishing, or abatement when particle size is not separately measured.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Sum measured particulate mass from included sources after abatement and divide by net accepted hollow-drill-steel mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-ferrous-metals-bat-2022`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared meters, furnaces, finishing lines, water systems, and abatement | Prefer subdivision by lot, line, equipment, or metering period. Allocate only the residual shared quantity that cannot be directly assigned. | `eu-ferrous-metals-bat-2022` |
| `allocation_residual_mass` | residual shared manufacturing inputs and emissions | Allocate residual shared quantities by net accepted product mass only when the same equipment and operating regime serve materially equivalent steel products; otherwise use a documented causal driver such as furnace time, metered energy, or processed feedstock mass. | `eu-ferrous-metals-bat-2022` |
| `allocation_scrap_no_credit` | post-industrial steel scrap and mill scale | Report gross outgoing residue mass and destination without avoided-burden credit inside the foreground inventory. Any recycling credit or burden is applied consistently in the downstream system model and disclosed separately. | `eu-ferrous-metals-bat-2022` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `hollow_drill_steel_manufacturing` | steel feedstock, accepted product, steel scrap, and mill scale | weighbridge tickets, batch scales, production and quality records, residue dispatch records | lot id; steel grade; feedstock form; input mass; accepted product mass; rejected mass; scrap mass; scale mass; moisture/oil basis; destination | Calibrated mass measurement reconciled to lot or homogeneous campaign | kg | each lot or shift, aggregated monthly | at least 12 consecutive representative months or the full campaign when shorter | all included forming and finishing operations at the declared plant | Reconcile input, accepted output, residues, stock change, and documented losses; normalize each exchange by accepted product mass | calibration certificates; lot traceability; mass-balance reconciliation; disposition records; explanation of gaps |
| `cp_energy_and_gas_balance` | `hollow_drill_steel_manufacturing` | purchased electricity, natural gas, and industrial oxygen | meters, invoices, furnace logs, production schedules | meter id; opening/closing reading; unit; reference conditions; fuel composition; oxygen purity; equipment; operating hours; lot or campaign | Calibrated direct metering preferred; invoice allocation only with documented causal driver | kWh, MJ, or m3 as metered | continuous or each shift, aggregated monthly | at least 12 consecutive representative months or the full campaign when shorter | all included production and environmental-control equipment | Subtract exports and excluded uses; convert units under Section 4; allocate residual shared use under Section 7; normalize by accepted product mass | meter calibration; invoice reconciliation; energy balance; furnace and production logs |
| `cp_water_balance` | `hollow_drill_steel_manufacturing` | make-up process water and wastewater | supply and discharge meters, tank records, laboratory reports, water-loop diagram | inlet volume/mass; recycled volume; discharge volume/mass; density; evaporation estimate; stream identity; treatment state; destination | Separate make-up and discharge metering with a documented water balance | kg or m3 as measured | continuous or daily, aggregated monthly | at least 12 consecutive representative months or the full campaign when shorter | all included descaling, cooling, quenching, finishing, and abatement water circuits | Exclude internal recirculation; reconcile inlet, discharge, evaporation, carryover, and stock change; normalize crossing-gate mass by accepted product mass | meter calibration; annual water balance; stream map; density basis; treatment and laboratory records |
| `cp_direct_air_emissions` | `hollow_drill_steel_manufacturing` | direct fossil CO2, NOx, and particulate matter | stack monitoring, fuel analysis, meter data, test reports, abatement logs | source id; pollutant; concentration; flow; duration; oxygen reference; fuel carbon; oxidation basis; abatement status; operating state; product mass | Use compliant direct measurements where available; otherwise use a transparent equipment-specific calculation from reconciled records | kg pollutant and supporting measurement units | continuous where installed or each compliant test campaign; aggregate to production period | same representative period as production data, including documented abnormal operation | every included furnace and relevant mechanical or abatement emission point | Convert concentration and gas flow to mass where required; calculate fossil CO2 from fossil carbon only; sum included sources and normalize by accepted product mass | monitoring standard and calibration; laboratory reports; calculation workbook; source inventory; abnormal-operation record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = same-period exchange quantity / net accepted reference-product mass | exchange quantity; accepted hollow-drill-steel mass | amount per 1 kg reference product |  |
| `calc_material_reconciliation` | feedstock, product, scrap, and mill scale | reconcile measured inputs with accepted product, residues, stock change, and separately documented losses; investigate rather than force-closing material gaps | input mass; product mass; residue mass; stock change; documented losses | reconciled material balance and data-gap finding | `eu-ferrous-metals-bat-2022` |
| `calc_energy_conversion` | purchased electricity | MJ = metered kWh × 3.6; retain original meter value and conversion | kWh | MJ |  |
| `calc_wastewater_mass` | wastewater | wastewater mass = measured volume × same-stream density; do not apply a generic density when composition or temperature makes it unsuitable | volume; density; temperature; stream id | kg wastewater | `eu-ferrous-metals-bat-2022` |
| `calc_nox_as_no2` | direct nitrogen oxides | aggregate measured NO and NO2 under the monitoring method and report total NOx as NO2; never substitute N2O | NO; NO2; exhaust flow; operating time | kg NOx as NO2 | `eu-ferrous-metals-bat-2022` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Lot records must identify steel grade, alloy status, cross-section, external and internal dimensions, length, heat treatment, surface state, conformity specification, and accepted mass. | mill certificate; dimensional inspection; heat-treatment and release records |
| `dq_time_alignment` | all exchanges | Input, output, waste, and emission data must cover the same representative production period; disclose shutdowns, abnormal operation, and excluded campaigns. | timestamped meter and production records; coverage reconciliation |
| `dq_meter_and_balance` | material, energy, gas, and water | Retain calibration status and reconcile meters or invoices to the declared site and process boundary at least annually. | calibration certificates; invoices; annual material, energy, and water balances |
| `dq_uuid_qualifiers` | UUID-bearing flows | Verify that each selected Tiangong identity still matches flow type, classification, property, unit group, product state, and required foreground qualifiers before dataset publication. | state-100 identity review record and dataset metadata |
| `dq_unresolved_identity` | non-alloy steel, electricity, and NOx rows | Do not publish a proxy UUID. Resolve the exact identity or preserve the explicit unresolved finding in the data package. | candidate audit and reviewer disposition |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm the reference UUID, Mass property, kg unit, accepted net mass, and every required product qualifier; reject solid rods, tubes, oil/gas drill pipe, or finished assemblies. | `un-cpc-3-0-structure-2025`; `eu-cn-2020-1577-ch72-note-1p` |
| `validate_geometry` | products claiming the Chapter 72 hollow-drill-bar definition | Verify suitability for drills, greatest external dimension > 15 mm and <= 52 mm, and greatest internal dimension <= one half of the external dimension. | `eu-cn-2020-1577-ch72-note-1p` |
| `validate_atomic_inventory` | process inventory | Confirm every row is one product, waste, or elementary exchange; conditional routes must not be represented by combined utility, fuel, material, waste, or emission labels. |  |
| `validate_mass_and_water_balance` | foreground records | Confirm same-period material and water balances, investigate unexplained gaps, exclude internal water recirculation from crossing-gate totals, and keep rejected steel out of accepted product mass. | `eu-ferrous-metals-bat-2022` |
| `validate_direct_emissions` | fossil CO2, NOx, and particulate matter | Verify source coverage, measurement or calculation method, abatement state, receiving compartment, fossil-only CO2 accounting, and NOx reporting as NO2; reject N2O as an NOx substitute. | `eu-ferrous-metals-bat-2022` |
| `validate_range_status` | every important flow | Treat absent external ranges as explicit evidence needs; do not convert BAT-AELs, single observations, or scenarios from one publication into empirical product-normalized ranges. | `eu-ferrous-metals-bat-2022` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset eligible for later use as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Product-system modelling of declared hollow drill bars and rods at the manufacturing plant gate; aggregation into process or lifecyclemodel datasets with matching geography, period, grade, route, and product state |
| allowed_use | Studies whose functional unit and system boundary can use 1 kg of unpackaged conforming hollow drill steel and whose required qualifiers match or are transparently adapted |
| excluded_use | Direct substitution for oil/gas drill pipe, tubes, solid drill rods, assembled drill tools, self-drilling anchor systems, upstream steelmaking, product use, or end-of-life without additional modelling |
| required_metadata | PCR id and version; reference UUID; CPC context; plant geography and period; grade and alloy status; feedstock form and upstream datasets; cross-section and dimensions; forming and heating route; heat treatment; surface and inspection state; allocation; water-loop boundary; electricity, fuel, and oxygen qualifiers; residue destinations; abatement and emission methods; unresolved identities |
| required_quality_disclosure | Temporal and site coverage; meter and scale calibration; material, energy, and water reconciliation; direct-versus-calculated data share; data gaps and substitutions; abnormal operation; mass allocation; UUID audit status; absence of empirical ranges |
| update_trigger | New grade, cross-section family, feedstock form, forming or heat-treatment route, plant or grid geography, fuel or oxygen technology, water-loop boundary, abatement system, residue destination, allocation method, exact UUID resolution, or evidence-backed range synthesis |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, official CSV: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-04) | Official CPC 41273 product identity and separation from CPC 4128 tubes, pipes, hollow profiles, and oil/gas drill pipe |
| `eu-cn-2020-1577-ch72-note-1p` | Standard (`standard`) | Commission Implementing Regulation (EU) 2020/1577, Combined Nomenclature, Chapter 72 Note 1(p), Official Journal L 361, 30 October 2020: https://eur-lex.europa.eu/eli/reg_impl/2020/1577/oj/eng/pdf (retrieved 2026-09-04) | Legal hollow-drill-bar geometry and exclusion to heading 7304 when the definition is not met |
| `eu-ferrous-metals-bat-2022` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2022/2110, BAT conclusions for the ferrous metals processing industry: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2110 (retrieved 2026-09-04) | Hot-working process decomposition; feedstock heating; oxygen-enriched combustion; water, energy, materials, wastewater, residues, dust and NOx monitoring; mill-scale and scrap management |
| `china-2024-serbia-tariff-72288000` | Official guidance (`official_guidance`) | Ministry of Finance of the People's Republic of China, 2024 agreement tariff schedule for Serbia, tariff line 72288000: https://gss.mof.gov.cn/gzdt/zhengcefabu/202406/P020240625320768010766.pdf (retrieved 2026-09-04) | Verified professional Chinese term “空心钻钢” used in the manifest title and category rendering |
