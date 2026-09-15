---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.fire-extinguishers-spray-guns-and-similar-appliances-steam-or-sand-blasting-machines-an-c73ef8b9
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fire extinguishers; spray guns and similar appliances; steam or sand blasting machines and similar jet projecting machines; mechanical appliances for projecting, dispersing or spraying liquids or powders, except agricultural or horticultural appliances

## 1. Scope and Applicability

This PCR applies to factory manufacture of complete fire extinguishers, spray guns and similar appliances, steam- or sand-blasting machines and similar jet-projecting machines, and other mechanical appliances that project, disperse, or spray liquids or powders. It covers the finished appliance in its declared market-ready configuration at the factory gate, including an extinguishing or process-medium charge only when that charge is supplied with the product.

Agricultural and horticultural spraying appliances, separately supplied parts, fire-extinguishing chemical preparations sold without an appliance, distribution, installation, use, maintenance, refill, and end-of-life are excluded. The data producer shall select and declare one product model or a production-weighted product family; the broad classification title shall not be used to average functionally dissimilar appliances without disclosing the product mix.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.fire-extinguishers-spray-guns-and-similar-appliances-steam-or-sand-blasting-machines-an-c73ef8b9 |
| classification_refs | CPC 3.0: 43923 (`un-cpc-3-0-structure-2025`) |
| covered_products | Complete fire extinguishers; spray guns and similar appliances; steam- or sand-blasting machines and similar jet-projecting machines; other non-agricultural and non-horticultural mechanical appliances for projecting, dispersing, or spraying liquids or powders |
| excluded_products | Agricultural or horticultural spraying appliances; separately supplied parts; extinguishing preparations without an appliance; distribution, use, refill, maintenance, and end-of-life services |
| representative_product | One declared finished appliance model or a disclosed production-weighted family within the covered boundary |
| production_route | Receipt of purchased materials and components; route-applicable fabrication and joining; route-applicable aqueous cleaning; assembly, optional charging, functional or pressure testing, and sales packaging |
| market_state | Finished, acceptance-tested, market-ready appliance at the manufacturing-site gate, with supplied charge, accessories, and sales packaging status declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished appliance that performs its declared projecting, dispersing, spraying, extinguishing, steam-blasting, or sand-blasting function |
| How much | 1 kg of finished market-ready appliance |
| How well | Conforms to the declared product specification and passes the manufacturer's applicable acceptance tests in the supplied configuration |
| How long or cycle | One factory-gate delivery; service life and use cycles are outside this mass-normalized manufacturing reference and shall be declared separately for downstream functional comparisons |
| reference_flow_link | The reference flow is exactly 1 kg of the finished CPC 43923 appliance output recorded in `finished_appliance_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Fire extinguishers, spray guns and similar appliances, steam or sand blasting machines and similar jet projecting machines, mechanical appliances for projecting, dispersing or spraying liquids or powders, except agricultural or horticultural appliances `3efb484d-b04a-455f-97df-130b2ed8724f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product type and model; intended projected medium; rated capacity or throughput; working pressure where applicable; governing product specification; acceptance-test method and result; supplied charge and accessories; packaging included or excluded; production geography; manufacturing technology; reporting period; product-family weighting method if applicable |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Finished reference appliance | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net finished-product mass consistently with the declared supplied configuration. Include charge, accessories, and sales packaging only when declared included; do not mix included and excluded configurations in one denominator. |
| `energy_conversion` | Electricity inventory | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve meter units in raw records; convert kWh to MJ with 1 kWh = 3.6 MJ only during calculation and retain the original reading and conversion. |
| `gas_volume_basis` | Natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report the metered reference conditions or supplier billing basis. Do not combine volumes measured at materially different temperature or pressure conditions without conversion and disclosure. |
| `water_mass_basis` | Process water and cleaning wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use measured mass or convert measured volume with a documented density and reference condition; retain the raw volume when conversion is used. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, gases, chemicals, water, electricity, and packaging cross the manufacturing-site gate in their supplier-delivered states |
| starting_condition_role | Upstream product inputs to the foreground appliance-manufacturing system |
| product_classification_scope | Complete appliances within the reviewed CPC 3.0 code 43923 semantic boundary |
| recursive_input_rule | A purchased complete CPC 43923 appliance incorporated into the declared product shall be recorded once as an upstream product input with its own dataset; do not recursively recreate its manufacture inside this foreground system |
| upstream_dataset_requirement | Use geographically and technologically representative upstream datasets for every purchased input; supplier-specific data take precedence when quality and boundary are documented |
| disclosure | Declare the product model or weighted product family, supplied configuration, manufacturing sites, included route-conditional processes, treatment ownership, packaging status, cut-offs, and any excluded production stage |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground_system | Include receipt-to-factory-gate fabrication, cleaning when used, assembly, charging when supplied, acceptance testing, and sales packaging when supplied; exclude distribution, installation, use, refill, maintenance, and end-of-life. | `un-cpc-3-0-structure-2025` |
| `boundary_route_condition` | route_specific_processes | Include each conditional process and atomic exchange only when production records show that it occurs for the declared product model or weighted family; record a demonstrable absence as not applicable rather than zero consumption. |  |
| `boundary_capital_goods` | capital_goods | Exclude capital equipment and buildings from the foreground inventory unless the study goal explicitly includes them; disclose any inclusion and its allocation basis. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `parts_fabrication` | Parts fabrication and joining | required | Always include site-controlled cutting, forming, machining, welding, and joining operations that occur for the declared product; record purchased finished components only at the point they cross the site boundary | foreground production | Per 1 kg finished reference appliance |
| `aqueous_cleaning` | Aqueous component cleaning | conditional | Include when water-based cleaning, degreasing, or rinsing occurs under site control | foreground conditioning | Per 1 kg finished reference appliance |
| `assembly_test_pack` | Assembly, charging, testing, and packaging | required | Always include assembly and acceptance testing; include charge and sales packaging rows only when supplied with the declared product | foreground final production | 1 kg finished market-ready reference appliance |

### Process: Parts fabrication and joining (`parts_fabrication`)

#### Inputs

##### Product flows

###### Steel sheet input (`steel_sheet_input`)

Record purchased steel sheet used in site-controlled appliance bodies, frames, vessels, guards, or housings when it crosses the foreground boundary.

- Selected flow: Steel Sheet `13082a6a-e820-45ec-89f5-3c2c3650495b`
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass minus documented unopened returns for the declared production output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg finished reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Aluminium sheet input (`aluminium_sheet_input`)

Record purchased aluminium sheet only for product models in which it is fabricated under site control.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass minus documented unopened returns for the declared production output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg finished reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass`
- Sources:

###### Fabrication electricity (`fabrication_electricity`)

Record purchased electrical energy consumed by site-controlled cutting, forming, machining, welding, and joining equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered electricity or allocated facility meter consumption for the fabrication production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg finished reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Natural gas for thermal fabrication (`natural_gas_input`)

Record gaseous natural gas only when it is consumed in site-controlled heating, cutting, brazing, or other thermal fabrication equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered or invoice-reconciled natural-gas volume attributable to applicable fabrication equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg finished reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_records`
- Sources:

###### Industrial oxygen for cutting or joining (`industrial_oxygen_input`)

Record industrial oxygen only when consumed in site-controlled oxy-fuel cutting, brazing, or joining.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Supplier delivery or manifold-meter volume attributable to applicable fabrication operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg finished reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel scrap from fabrication (`steel_scrap_output`)

Record segregated ferrous offcuts, chips, and rejected steel parts that leave the foreground process as steel scrap.

- Selected flow: Steel scrap `8658611f-0588-4eb7-9490-46bcd02b3c2f`
- Flow property / unit: Mass / kg
- Amount rule: Measured outbound scrap mass plus inventory change, excluding internally reworked material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg finished reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_mass`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from on-site natural-gas combustion (`fossil_co2_emission`)

Record only direct fossil carbon dioxide crossing to air from natural-gas combustion in equipment included in this process; do not add upstream electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Calculate from measured natural-gas consumption and the reviewed fuel-carbon or emission factor used by the foreground study
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg finished reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

### Process: Aqueous component cleaning (`aqueous_cleaning`)

#### Inputs

##### Product flows

###### Process water for cleaning (`cleaning_process_water`)

Record process water entering aqueous cleaning, degreasing, or rinsing when this route is used.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered makeup water plus measured batch additions minus documented recovered water returned across the same process boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg finished reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources:

###### Sodium hydroxide for cleaning (`sodium_hydroxide_input`)

Record sodium hydroxide product mass only when it is added to an included alkaline cleaning bath; report solution concentration in supporting records.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Net issued sodium-hydroxide product mass attributable to the declared production output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg finished reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources:

###### Cleaning electricity (`cleaning_electricity`)

Record purchased electrical energy used by included cleaning, pumping, heating, ventilation, and drying equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered or allocated electricity for the included cleaning route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg finished reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Cleaning wastewater (`cleaning_wastewater_output`)

Record wastewater transferred from included aqueous cleaning to on-site or off-site treatment, before treatment outside the declared process boundary.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge mass or volume converted to mass, adjusted for tank inventory change and documented internal reuse
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg finished reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources:

##### Elementary flows

### Process: Assembly, charging, testing, and packaging (`assembly_test_pack`)

#### Inputs

##### Product flows

###### Assembly and test electricity (`assembly_electricity`)

Record purchased electrical energy used for assembly tools, compressors, charging equipment, acceptance-test rigs, and packaging equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Submetered or allocated electricity for assembly, charging, testing, and packaging during the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg finished reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Carbon dioxide supplied as product charge (`carbon_dioxide_charge`)

Record carbon dioxide product mass only when it is filled into and supplied with the finished appliance; do not report it as an elementary emission unless a measured release occurs.

- Selected flow: Carbon dioxide `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- Flow property / unit: Mass / kg
- Amount rule: Filled mass confirmed by charging records and finished-product mass checks, net of captured and returned gas
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg finished reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_charge_records`
- Sources:

###### Process water for hydrostatic testing (`hydrotest_process_water`)

Record process water makeup only when hydrostatic or water-based acceptance testing is performed under site control.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measured test-loop makeup plus batch additions minus recovered water returned across the same boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg finished reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources:

###### Corrugated board boxes (`corrugated_box_input`)

Record corrugated-board box mass only when this sales packaging is supplied with the reference appliance.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Net issued mass of corrugated-board boxes attributable to the declared finished output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg finished reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished market-ready appliance (`finished_appliance_output`)

Record the acceptance-tested finished appliance in the declared supplied configuration at the manufacturing-site gate.

- Selected flow: Fire extinguishers, spray guns and similar appliances, steam or sand blasting machines and similar jet projecting machines, mechanical appliances for projecting, dispersing or spraying liquids or powders, except agricultural or horticultural appliances `3efb484d-b04a-455f-97df-130b2ed8724f`
- Flow property / unit: Mass / kg
- Amount rule: Fixed reference output of 1 kg; scale measured production totals to this denominator
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg finished market-ready reference appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared_operations | Prefer process subdivision and direct metering or material issue records for product families and route-specific operations. |  |
| `allocation_physical` | residual_shared_inputs | If subdivision is impracticable, allocate residual shared energy and consumables using a documented physical driver that reflects use, such as machine time, measured energy, processed mass, or test cycles; do not default to revenue without justification. |  |
| `allocation_scrap` | recyclable_scrap | Report steel scrap at the point it leaves the foreground boundary. Do not apply an avoided-primary-material credit inside this PCR unless the study explicitly applies a disclosed system-expansion method consistently to all compared products. |  |
| `allocation_mass_balance` | material_balance | Reconcile input materials to finished product, measured waste, emissions where mass-relevant, and inventory change; investigate unexplained imbalance before publication. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | `parts_fabrication` | steel and aluminium sheet inputs | purchase receipt, warehouse issue, return, and inventory record | material identity; grade; opening stock; receipts; issued mass; returned mass; closing stock; product model | Reconcile controlled warehouse records to production orders | kg | Each issue and monthly reconciliation | Representative continuous 12-month period or complete shorter campaign | All sites performing included fabrication | Net consumed mass divided by accepted finished-product mass | Signed stock reconciliation; calibrated scale record; material specification; production order |
| `cp_energy_records` | all applicable processes | electricity input | utility meter, submeter, invoice, equipment log, and production record | opening reading; closing reading; meter multiplier; allocated shared use; downtime; accepted output | Prefer submeters; otherwise reconcile facility meter and allocate with documented physical driver | kWh retained raw; MJ reported | At least monthly and by campaign where available | Same reporting period as production output | All manufacturing sites in scope | Net electricity converted at 3.6 MJ/kWh and divided by accepted output mass | Meter calibration or utility invoice; allocation worksheet; production log |
| `cp_gas_records` | `parts_fabrication` | natural gas and industrial oxygen inputs | meter, cylinder or bulk delivery, inventory, and equipment log | gas identity; opening stock; deliveries; returns; closing stock; meter conditions; operation | Reconcile deliveries and inventories; use equipment meters where available | m3 at declared conditions | Each delivery and monthly reconciliation | Same reporting period as applicable operation | All sites using the gas | Net consumed volume at one declared reference condition divided by accepted output mass | Supplier statement; meter record; cylinder reconciliation; reference-condition record |
| `cp_waste_mass` | `parts_fabrication` | steel scrap output | scrap scale ticket, container log, inventory, and production record | waste identity; gross mass; tare; destination; opening and closing inventory; rework return | Reconcile weighed outbound scrap and inventory change | kg | Each shipment and monthly reconciliation | Same reporting period as production output | All sites producing steel scrap | Outbound net mass plus closing less opening waste inventory, divided by accepted output mass | Scale calibration; waste transfer record; reconciliation worksheet |
| `cp_direct_emissions` | `parts_fabrication` | direct fossil carbon dioxide | fuel record and reviewed factor record | fuel quantity; composition or net calorific value; factor; factor unit; oxidation assumption | Calculate only direct site emissions from included fuel combustion | kg | Each reporting-period calculation | Same reporting period as fuel use | All included combustion sources | Sum source-level emissions and divide by accepted output mass | Fuel record; factor citation in dataset; calculation worksheet; reviewer sign-off |
| `cp_water_records` | aqueous cleaning and `assembly_test_pack` | process water inputs | meter, batch sheet, tank log, and production record | opening reading; closing reading; batch additions; recovered return; density if converted | Reconcile dedicated meter or batch makeup and recovery | kg or m3 retained raw | Each batch or at least monthly | Same reporting period as applicable process | All sites using process water | Net water crossing each process boundary divided by accepted output mass | Meter calibration; batch log; density source; recovery reconciliation |
| `cp_chemical_records` | `aqueous_cleaning` | sodium hydroxide input | chemical issue, purchase, bath makeup, concentration, and inventory record | product identity; concentration; opening stock; additions; returns; closing stock | Reconcile product-mass additions and inventory; retain concentration separately | kg product | Each addition and monthly reconciliation | Same reporting period as cleaning | All included cleaning lines | Net product mass consumed divided by accepted output mass | Supplier specification; issue record; concentration test; stock reconciliation |
| `cp_wastewater_records` | `aqueous_cleaning` | cleaning wastewater output | discharge meter, tank transfer, treatment record, and inventory log | volume or mass; density; source process; pH; destination; opening and closing inventory; internal reuse | Reconcile discharge, tank inventory change, and reuse before external treatment | kg or m3 retained raw | Each discharge and monthly reconciliation | Same reporting period as cleaning | All included cleaning lines and treatment transfer points | Net wastewater leaving cleaning boundary divided by accepted output mass | Meter or scale calibration; transfer record; treatment record; mass-balance check |
| `cp_charge_records` | `assembly_test_pack` | carbon dioxide product charge | filling batch, cylinder, recovery, and finished-product record | gas identity; filled mass; recovered mass; returned mass; rejected units; accepted units | Reconcile net filled mass to accepted charged products | kg | Each filling batch | Same reporting period as charged products | All included filling lines | Net supplied charge in accepted products divided by accepted output mass | Calibrated filling scale; batch record; leak or recovery log; product specification |
| `cp_packaging_mass` | `assembly_test_pack` | corrugated-board box input | packaging bill of materials, issue, return, and production record | box identity; unit mass; issued count; returned count; rejected count; accepted output | Verify unit mass and reconcile net issued count | kg | Each production order and monthly reconciliation | Same reporting period as packaged products | All included packaging lines | Net box mass divided by accepted output mass | Packaging specification; calibrated unit-mass check; issue record; reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | all inventory rows | Normalized amount = reporting-period amount attributable to accepted products / accepted finished-product mass in the declared configuration | Attributable flow amount; accepted finished-product mass | Flow amount per 1 kg reference appliance |  |
| `calc_electricity_mj` | electricity rows | Reported MJ = metered kWh × 3.6; retain raw kWh and do not apply an upstream emission factor in the foreground amount | Metered kWh | MJ electricity |  |
| `calc_inventory_change` | materials and wastes | Consumption or output = receipts or transfers adjusted for opening stock, closing stock, documented returns, and internal reuse within the same boundary | Receipt, issue, return, reuse, opening-stock, and closing-stock records | Net boundary-crossing mass or volume |  |
| `calc_direct_co2` | `fossil_co2_emission` | Direct fossil CO2 = measured natural-gas quantity × reviewed factor on a compatible volume, mass, or energy basis; store the factor citation and basis in the produced dataset | Natural-gas record; reviewed factor; reference-condition or energy conversion | kg fossil CO2 |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and inputs | Product model, material grade, gas or chemical identity, waste identity, and supplied configuration shall be traceable to specifications and production records. | Product specification; bill of materials; supplier record; waste transfer record |
| `dq_temporal` | all foreground records | Use one common representative reporting period; disclose shutdowns, start-up, abnormal production, and any shorter campaign. | Dated meter, inventory, and production records |
| `dq_completeness` | all mapped processes | Reconcile production orders to accepted output and document every applicable process, excluded process, zero, and not-applicable determination. | Process map sign-off; production reconciliation; exception log |
| `dq_measurement` | measured quantities | Use calibrated or utility-controlled meters and scales where available; document estimation, allocation, density conversion, and reference conditions. | Calibration certificates; invoices; calculation worksheets |
| `dq_product_mix` | product-family datasets | Weight models by accepted production mass and disclose model shares; do not combine product families with materially different functions without a stated downstream limitation. | Model-level output records; weighting worksheet; dataset metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference_flow | Confirm UUID, Mass property, kg unit, product model or family, supplied charge, accessories, packaging state, and factory-gate market state. |  |
| `validate_process_coverage` | process_map | Confirm all site-controlled fabrication and final assembly or testing are included, and every conditional cleaning, gas, charge, and packaging row is supported by occurrence or not-applicable evidence. |  |
| `validate_atomic_flows` | process_inventory | Confirm every row represents one physical, chemical, waste, or energy exchange and that electricity, each gas, water, chemical, packaging component, waste, and emission remain separate. |  |
| `validate_mass_balance` | material_balance | Reconcile input material and supplied charge to finished product, waste, direct mass emissions where relevant, and inventory change; document and review unexplained imbalance. |  |
| `validate_energy` | electricity_rows | Reconcile meter totals and allocations, verify 3.6 MJ/kWh conversion, and ensure upstream electricity emissions are not duplicated as direct elementary flows. |  |
| `validate_bilingual` | localized_inventory | Confirm English and Chinese files preserve row ids, UUIDs, controlled values, rule-id order, process order, and the exact public TianGong Chinese baseName for each UUID-bearing flow. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; may serve as `background_dataset` only for the declared appliance model or disclosed product mix and geography |
| downstream_use | Manufacturing-stage process datasets and lifecyclemodel projections that require a mass-normalized factory-gate appliance input |
| allowed_use | Product-specific or transparently production-weighted manufacturing inventories within the declared technology, geography, time period, and supplied configuration |
| excluded_use | Functional comparison of unlike appliance types without service-performance normalization; agricultural or horticultural sprayers; distribution, use, refill, maintenance, or end-of-life modelling without additional rules |
| required_metadata | Product model or family shares; intended medium; capacity or throughput; working pressure where applicable; governing specification; acceptance test; charge, accessories, and packaging state; sites; geography; technology; period; upstream dataset choices; allocations; cut-offs |
| required_quality_disclosure | Primary-data coverage; meter and scale quality; allocation shares; mass-balance result; data gaps; estimates; route-specific exclusions; unresolved range evidence; representativeness limits |
| update_trigger | Change in product design, bill of materials, charge, process route, site, energy supply, allocation driver, packaging, acceptance testing, or reporting period that materially changes the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, official CSV: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retrieved 2026-09-06; SHA-256 `5cd2c1c4890dd6be16af48e9bb940fed48efff9865f39ff15edaa921da25fb7c` | Original-text-verified CPC 43923 classification identity, included appliance types, and agricultural or horticultural exclusion |
