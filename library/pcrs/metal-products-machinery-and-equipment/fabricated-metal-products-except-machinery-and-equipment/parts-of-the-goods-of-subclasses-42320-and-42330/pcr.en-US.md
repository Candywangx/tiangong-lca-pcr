---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.parts-of-the-goods-of-subclasses-42320-and-42330
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts of the goods of subclasses 42320 and 42330

## 1. Scope and Applicability

This PCR covers factory-gate production of finished parts specifically designed for steam or other vapour generating boilers, super-heated water boilers, boiler auxiliary plant, or condensers for steam or other vapour power units. It applies to replaceable parts and integrally fabricated part assemblies supplied separately from the complete equipment.

It excludes complete boilers, complete auxiliary plant, complete condensers, nuclear-reactor parts, parts of central-heating boilers, generic pipes, valves, fasteners, and structures not demonstrated to be dedicated parts of the covered equipment. Installation, use, maintenance, and end-of-life are outside the default foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.parts-of-the-goods-of-subclasses-42320-and-42330 |
| classification_refs | CPC 3.0: 42342, exact classification identity (`un-cpc-3-0-structure-2025`) |
| covered_products | Finished boiler pressure-part components, boiler-auxiliary-plant parts, condenser parts, and dedicated fabricated part assemblies for goods of CPC 42320 or 42330 |
| excluded_products | Complete CPC 42320 or 42330 equipment; CPC 42341 nuclear-reactor parts; central-heating-boiler parts; non-dedicated commodity pipe, valves, fasteners, structural sections, and installation services |
| representative_product | A finished, inspected, separately supplied boiler or steam-power-condenser part |
| production_route | Cutting, forming, machining, welding, and assembly of purchased metal stock, with heat treatment, cleaning, coating, and hydrostatic testing included only when performed for the declared part |
| market_state | Finished part at the manufacturing-site gate; coating state, pressure-retaining function, material grade, dimensions, and inspection status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished part that is dimensionally and functionally suitable for incorporation into covered boiler, boiler-auxiliary-plant, or steam/vapour-power-condenser equipment |
| How much | 1 kg net mass of conforming finished part |
| How well | Conforms to the purchaser-approved drawing, material specification, welding or joining specification, surface-state requirement, and inspection or test acceptance criteria |
| How long or cycle | One manufacturing lot released at the factory gate; no service-life claim is included |
| reference_flow_link | The reference flow is the net conforming output mass of `finished_boiler_condenser_part` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Finished boiler or condenser part |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Parent-equipment type (CPC 42320 or 42330); part name and drawing or part number; pressure-retaining function; principal material and grade; net mass; dimensions; coating or surface state; joining route; heat-treatment state; hydrotest status; manufacturing site and geography; reporting period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. A missing qualifier makes the reference-flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-normalized material, waste, and emission rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass of conforming finished parts as the denominator. Exclude removable transport fixtures and separately reported packaging from reference-product mass. |
| `gas_volume_basis` | Industrial oxygen and gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered volume and declare temperature, absolute pressure, moisture basis, and any conversion to the supplier or meter reference condition; do not combine gases. |
| `electricity_energy` | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the electricity meter basis and convert kWh to MJ using 1 kWh = 3.6 MJ. Declare voltage level, grid geography, losses, and whether on-site generation is netted. |
| `solution_mass_basis` | Process water and sodium-hydroxide solution | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record delivered or metered mass. For sodium-hydroxide solution, declare concentration and report solution mass; any conversion to dry NaOH must be separately calculated and disclosed. |

## 5. System Boundary

The foreground boundary begins when purchased metal stock, welding consumables, process chemicals, and utilities cross the manufacturing-site boundary. It includes on-site cutting, forming, machining, welding or joining, assembly, applicable heat treatment, applicable cleaning or surface preparation, hydrostatic testing when performed, inspection, rework, and factory release. Upstream production is represented by linked supplier or background datasets. Default exclusions are capital equipment, building construction, employee commuting, downstream installation, use, maintenance, and end-of-life.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metal stock, consumables, process chemicals, and utilities as received at the manufacturing-site gate |
| starting_condition_role | Foreground manufacturing input boundary |
| product_classification_scope | Dedicated finished parts for equipment in CPC 42320 or CPC 42330; classification does not extend to complete equipment or generic multi-use metal goods |
| recursive_input_rule | A purchased unfinished or previously fabricated item that itself falls in this product category is recorded as a distinct same-category product input with its supplied state, mass, and upstream dataset; its upstream manufacture is not recreated inside the receiving process |
| upstream_dataset_requirement | Each purchased material, consumable, fuel, electricity supply, water supply, and same-category input requires a geographically and technologically representative upstream dataset or an explicit data gap |
| disclosure | Declare starting stock form and grade, purchased-versus-in-house operations, route steps performed, coating and heat-treatment state, rejected or reworked mass, utility delivery conditions, and all default-boundary exclusions used |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground_operations | Include every on-site operation that changes the covered part or is required to release it as conforming, including measured rework and testing. |  |
| `boundary_rule_2` | purchased_inputs | Link upstream production for every purchased input; do not substitute zero burden for recycled-content metal, recovered scrap, or a same-category unfinished part. |  |
| `boundary_rule_3` | route_exclusions | A conditionally absent heat-treatment, surface-treatment, hydrotest, diesel, gas, oxygen, water, or sodium-hydroxide row may be omitted only when the route declaration and production records demonstrate non-use. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `integrated_part_manufacturing` | Integrated fabrication, treatment, testing, and factory release | `required` | Always; route-conditional exchanges are recorded only when used for the declared part | Foreground production | 1 kg net mass of conforming finished part |

### Process: Integrated fabrication, treatment, testing, and factory release (`integrated_part_manufacturing`)

#### Inputs

##### Product flows

###### Carbon-steel plate (`carbon_steel_plate`)

Record carbon-steel plate when it crosses the site boundary for the declared part. Keep plate grade, condition, dimensions, recycled-content claim, supplier, and origin with the bill-of-material record.

- Selected flow: Carbon-steel plate
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass assigned from lot-specific issue and return records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources:

###### Stainless-steel plate (`stainless_steel_plate`)

Record stainless-steel plate only for parts whose approved material specification requires it. Keep grade, condition, dimensions, supplier, and origin with the bill-of-material record.

- Selected flow: Stainless-steel plate
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass assigned from lot-specific issue and return records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources:

###### Copper tubing (`copper_tubing`)

Record copper tubing only for a condenser-part route that consumes copper tube. Declare alloy, temper, dimensions, supplier, and origin.

- Selected flow: Copper tubing `0d80f4b8-8f26-4eee-8b81-df499c4c9dff`
- Flow property / unit: Mass / kg
- Amount rule: Measured received mass assigned from lot-specific issue and return records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources:

###### Flux-cored welding wire (`flux_cored_wire`)

Record flux-cored wire when the approved welding procedure uses this consumable. Declare wire classification, diameter, batch, supplier, and applicable weld procedure.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Opening stock plus receipts minus closing stock and documented returns for the production lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_bom`
- Sources:

###### Industrial oxygen (`industrial_oxygen`)

Record industrial oxygen when it is consumed in cutting, brazing, welding, or another declared fabrication operation. Purity, supply pressure, meter reference condition, supplier, and site geography are required qualifiers.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Metered or supplier-delivered volume assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Electricity (`electricity`)

Record purchased electrical energy crossing the site boundary for fabrication, treatment, testing, inspection, and directly attributable support equipment. Declare grid mix, voltage, geography, loss boundary, and allocation method for shared meters.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered purchased electricity assigned to the production lot and converted to MJ
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Gaseous natural gas (`natural_gas`)

Record gaseous natural gas only when it is consumed on site for heat treatment, drying, or another declared production operation. Supply composition, reference conditions, technology, and delivery boundary must be declared.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered delivered volume assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Diesel fuel (`diesel_fuel`)

Record diesel only when in-boundary emergency generation or factory acceptance testing consumes it. Grade, supplier, biogenic fraction, equipment, and test-use boundary must be declared.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Tank issue or test log mass assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Process water (`process_water`)

Record process water only when supplied for washing, cooling, hydrostatic testing, or another declared operation and consumed or discharged across the boundary. Declare source, quality, delivery boundary, and any density conversion.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-recorded water mass assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources:

###### Sodium hydroxide (`sodium_hydroxide`)

Record sodium hydroxide only when an alkaline cleaning or surface-treatment route consumes it. Declare solution concentration, delivered state, supplier, and whether the reported mass is solution or dry NaOH.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Batch issue mass assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_bom`
- Sources:

##### Waste flows

No waste input is prescribed. A returned waste input may be added only as one specific waste flow with documented origin and treatment role.

##### Elementary flows

No elementary input is prescribed. Site-specific elementary resource inputs must be added as separate flows when they cross the environment boundary.

#### Outputs

##### Product flows

###### Finished boiler or condenser part (`finished_boiler_condenser_part`)

Record only conforming finished output released for incorporation into equipment covered by CPC 42320 or CPC 42330. The product UUID remains unresolved; do not substitute the narrower uncoated boiler-part-subassembly flow.

- Selected flow: Finished boiler or condenser part
- Flow property / unit: Mass / kg
- Amount rule: Net conforming output mass calculated from calibrated weighing records; normalized to exactly 1 kg reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Exactly 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_records`
- Sources:

##### Waste flows

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Record segregated ferrous offcuts, chips, and rejected steel pieces leaving the foreground process for recovery or treatment. Declare alloy family, contamination, receiver, and destination route.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Calibrated container mass or dispatch-ticket mass assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide to air (`carbon_dioxide_fossil`)

Record direct fossil carbon dioxide released to air from in-boundary natural-gas or diesel combustion. Do not include upstream electricity emissions or biogenic carbon dioxide in this row.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Stack-measured mass or calculated fossil CO2 from collected fuel use, documented fuel carbon content, and documented oxidation basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net mass of conforming finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_records`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | shared_operations | Avoid allocation by sub-metering, lot tracking, machine-hour records, and separate mass records for the declared part wherever practicable. |  |
| `allocation_rule_2` | unavoidable_shared_burdens | When subdivision is not practicable, allocate shared material and utility burdens using the most causally representative measured driver; use net product mass only when no better physical driver is available, and disclose the choice and sensitivity. |  |
| `allocation_rule_3` | steel_scrap | Record post-industrial steel scrap as a waste output with its measured mass and destination. Do not apply avoided-burden or substitution credit inside this foreground process unless the downstream study explicitly models and discloses that convention. |  |
| `allocation_rule_4` | rework_and_rejects | Attribute internal rework inputs and unrecovered rejects to the conforming output of the same lot; separately record scrap or other outputs that cross the site boundary. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_bom` | `integrated_part_manufacturing` | Plate, tubing, welding wire, and cleaning chemical inputs | Purchase, warehouse issue, return, and bill-of-material records | material identity; grade; lot; opening stock; receipts; issues; returns; closing stock; mass; supplier; origin | Reconcile lot-specific warehouse and production records to the released output lot | kg | Each production lot | Same reporting period as output | All in-boundary production areas at the declared site | Sum net issues after documented returns; exclude material assigned to other products | Calibrated scales; traceable material certificates; stock reconciliation; approved bill of materials |
| `cp_utility_records` | `integrated_part_manufacturing` | Electricity, natural gas, diesel, oxygen, and process-water inputs | Meters, invoices, delivery tickets, tank issues, and test logs | meter start and end; delivered quantity; unit; reference conditions; equipment; operating hours; allocation driver | Read dedicated meters or reconcile shared meters and delivery records to lot activity | MJ; m3; kg | Meter interval and each lot | Representative continuous period covering the production lots | Declared manufacturing site | Subtract verified non-production and other-product use, then allocate remaining shared use by documented causal driver | Meter calibration; invoice reconciliation; reference-condition record; allocation worksheet |
| `cp_output_records` | `integrated_part_manufacturing` | Conforming finished output | Release, weighing, drawing, material, inspection, and test records | part number; parent equipment; net mass; quantity; material; coating state; heat-treatment state; inspection status; release date | Link calibrated weighing records to accepted production-lot release records | kg | Each production lot | Full reporting period | Declared manufacturing site | Sum accepted net mass; exclude rejected, reworked-not-released, packaging, and fixtures | Scale calibration; inspection release; approved drawing; material traceability; test acceptance record |
| `cp_waste_records` | `integrated_part_manufacturing` | Post-industrial steel scrap output | Scrap-container weights and dispatch records | waste identity; alloy family; gross and tare mass; contamination; receiver; destination; date | Weigh each dispatch or container and assign by lot-specific collection or documented production allocation | kg | Each dispatch and production lot | Same reporting period as output | All in-boundary production areas | Sum net dispatch mass by waste identity and destination without subtracting recycling credit | Calibrated scale; tare record; dispatch ticket; receiver documentation |
| `cp_emission_records` | `integrated_part_manufacturing` | Direct fossil carbon dioxide to air | Stack measurements or fuel-carbon calculation records | fuel mass or volume; reference conditions; fossil carbon content; oxidation basis; measured CO2; operating period; equipment | Use calibrated stack data where available; otherwise calculate from collected fuel use and documented site-specific carbon and oxidation inputs | kg | Each monitored event or reporting interval | Same representative period as fuel and output | In-boundary combustion equipment | Sum direct fossil CO2 and normalize by conforming output; keep electricity-chain emissions outside this row | Monitor calibration or fuel certificate; calculation sheet; reconciliation to fuel records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | Material and consumable rows | Net input = opening stock + receipts - closing stock - documented returns - quantities assigned to other products | Lot-specific stock and issue records | kg input per kg conforming finished output |  |
| `calc_electricity_mj` | Electricity row | Electricity (MJ) = purchased electricity (kWh) × 3.6, after documented subtraction and allocation | Metered kWh; allocation records; conforming output mass | MJ per kg conforming finished output |  |
| `calc_gas_volume` | Natural-gas and oxygen rows | Convert measured volume only when needed to the declared reference temperature, absolute pressure, and moisture basis; retain the raw reading and conversion inputs | Meter volume; temperature; pressure; moisture basis; compressibility method when used | m3 at declared reference condition per kg conforming finished output |  |
| `calc_fossil_co2` | Fossil carbon dioxide row | Use direct stack-measured fossil CO2, or calculate CO2 from collected fuel use × documented fossil-carbon content × documented oxidation basis × 44/12 | Fuel record; carbon content; oxidation basis; conforming output mass | kg fossil CO2 per kg conforming finished output |  |
| `calc_reference_output` | Reference product | Normalized amount = accepted net finished-part mass / accepted net finished-part mass | Accepted net mass from release records | Exactly 1 kg reference product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and material rows | Preserve part number, parent-equipment type, drawing revision, material grade, heat-treatment state, coating state, and inspection status; do not aggregate materially different products without a disclosed production-weighted composition. | Drawing, material certificate, route card, inspection release, aggregation worksheet |
| `dq_temporal` | All foreground rows | Use one representative period covering normal production and all reported output; disclose shutdowns, start-ups, abnormal rework, and incomplete meter intervals. | Production calendar, meter coverage log, exception register |
| `dq_completeness` | All foreground exchanges | Reconcile material input, conforming output, rework, scrap, utility, and direct-emission records; explicitly document each conditionally absent row and every additional specific exchange added for the actual route. | Mass reconciliation, meter reconciliation, waste dispatch log, route declaration |
| `dq_measurement` | Measured quantities | Use calibrated or verified measuring equipment and retain raw readings, units, reference conditions, conversion factors, and allocation calculations. | Calibration certificates, raw logs, invoices, calculation sheets |
| `dq_geography_technology` | Upstream links | Match material grade and production route, utility geography and voltage or pressure, fuel supply state, and waste destination as closely as available; disclose proxies. | Supplier datasets, contracts, technology description, proxy justification |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | product_identity | Confirm that the output is a separately supplied finished part dedicated to equipment in CPC 42320 or 42330 and is not complete equipment, a central-heating-boiler part, a nuclear-reactor part, or a generic commodity metal good. | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | reference_flow | Confirm exactly 1 kg net conforming output and all required qualifiers; reject a dataset that includes packaging or removable fixture mass in the reference amount. |  |
| `validation_rule_3` | inventory_completeness | Confirm every actual material, consumable, utility, waste, and direct elementary exchange is represented by one atomic row and every conditionally absent row is supported by route records. |  |
| `validation_rule_4` | mass_reconciliation | Check that issued metals and consumables reconcile with conforming output, retained work in progress, documented returns, scrap, and other specific outputs over the reporting period; investigate and disclose residual imbalance. |  |
| `validation_rule_5` | uuid_and_units | Confirm each UUID-bearing row retains its exact Tiangong flow type, property, unit group, and official Chinese display name; keep unresolved category, carbon-steel-plate, and stainless-steel-plate UUIDs blank until exact public state-100 identities are verified. |  |
| `validation_rule_6` | direct_emissions | Confirm the fossil-carbon-dioxide row contains only direct in-boundary fossil combustion emissions and does not duplicate electricity-chain emissions or biogenic carbon dioxide. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after methodology and dataset review |
| downstream_use | Foreground process datasets and downstream `process` or `lifecyclemodel` projections for finished boiler, boiler-auxiliary-plant, and condenser parts |
| allowed_use | Product-specific factory-gate modelling when the declared parent equipment, part identity, material composition, route, site, period, and data-quality evidence are compatible |
| excluded_use | Complete-equipment production; central-heating-boiler or nuclear-reactor parts; generic metal goods; installation, use, maintenance, or end-of-life without added processes; undisclosed substitution across materially different alloys or routes |
| required_metadata | PCR id and version; part and drawing number; parent-equipment type; net mass; material grades and shares; route steps; heat-treatment and coating state; inspection status; site geography; reporting period; allocation method; upstream dataset choices |
| required_quality_disclosure | Meter and mass coverage; calibration; material and output reconciliation; conditional-row decisions; proxy datasets; unresolved UUIDs; excluded operations; uncertainty and data gaps |
| update_trigger | Drawing, material, mass, route, welding procedure, coating, heat treatment, supplier, utility mix, site, allocation method, or reporting period changes that materially alter the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (verified SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c`) | Official CPC 42342 classification identity and its distinction from CPC 42320, 42330, and 42341 |
