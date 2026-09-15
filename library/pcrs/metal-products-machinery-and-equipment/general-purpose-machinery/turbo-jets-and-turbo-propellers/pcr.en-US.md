---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.turbo-jets-and-turbo-propellers
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Turbo-jets and turbo-propellers

## 1. Scope and Applicability

This PCR supports cradle-to-gate foreground data packages for manufacture and factory release of complete turbo-jet and turbo-propeller aircraft engines. It applies to civil or military products when the engine model, configuration, production site, reporting period, and release state are declared.

The category includes complete turbo-jets whose principal useful output is jet thrust and complete turbo-propellers whose gas turbine delivers shaft power to a propeller system. It excludes turbo-fan engines unless the classification mapping is separately reviewed, reciprocating aircraft engines, reaction engines other than turbo-jets, gas turbines for other applications, separately sold engine parts, aircraft installation, distribution, use, maintenance, overhaul, and end-of-life. Development and certification campaigns outside routine manufacture are excluded unless the study goal explicitly includes and allocates them.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.turbo-jets-and-turbo-propellers |
| classification_refs | CPC 3.0: 43132, exact classification context |
| covered_products | Complete turbo-jet engines and complete turbo-propeller engines released as saleable propulsion units |
| excluded_products | Turbo-fans without reviewed mapping; reciprocating aircraft engines; other reaction engines; non-aircraft gas turbines; separately sold parts; repaired or overhauled engines |
| representative_product | A complete, accepted turbo-jet or turbo-propeller engine in the declared delivery configuration |
| production_route | Receipt of specified stock and components; in-house component fabrication and heat treatment where applicable; surface treatment and cleaning where applicable; final assembly, inspection, and production testing |
| market_state | Finished engine at manufacturer factory gate, with dry/wet delivery state, installed accessories, preservation materials, and packaging boundary declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and release of a complete turbo-jet capable of the declared rated thrust, or a complete turbo-propeller capable of the declared rated shaft power |
| How much | 1 kg net mass of finished engine at the factory gate |
| How well | Conforms to the declared engine model or type design, configuration, quality-acceptance status, rated thrust or shaft power, and delivery state |
| How long or cycle | One production and release event; service life and flight operation are outside this cradle-to-gate functional unit |
| reference_flow_link | 1 kg of the reference product flow |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Turbo-jets and turbo-propellers `fb78e875-8bc6-484d-b2c4-ede9c1726721` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | engine type: turbo-jet or turbo-propeller; manufacturer and model; rated thrust or shaft power and rating basis; delivered configuration and installed accessories; dry or wet mass state and included fluids; production site and geography; reporting period; new-build versus overhaul state; acceptance and certification context; packaging and transport-stand boundary |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, reference-flow comments, product description, or an equivalent field. A missing qualifier makes the reference flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_engine_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure or obtain from controlled release records the net mass of the delivered engine configuration. Exclude reusable rigs and transport stands; declare whether operating fluids, preservation media, accessories, and one-way packaging are included. |
| `gas_volume_conditions` | natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State the temperature, pressure, and dry/wet basis for metered gas volumes. Convert all records to one declared reference condition before normalization. |
| `electricity_energy_basis` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electrical energy and convert kWh to MJ with 1 kWh = 3.6 MJ; do not treat the mass-property UUID text associated with legacy records as a mass measurement. |
| `inventory_mass_normalization` | mass-based inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report gross inputs, returned material, segregated scrap, wastes, and direct emissions separately, then normalize allocated quantities by released reference-engine mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_factory_gate` | foreground_system_boundary | Include operations controlled by the reporting manufacturer from receipt of materials and components through component fabrication, heat treatment, surface treatment, cleaning, assembly, inspection, routine production testing, preservation, and factory release when those operations occur for the declared product. | `us-epa-aerospace-sector-notebook-1998` |
| `sb_upstream_inputs` | product_and_energy_inputs | Link every purchased material, component, chemical, fuel, electricity supply, water supply, and waste-treatment service crossing the foreground boundary to an upstream dataset with compatible product state, geography, technology, and delivery boundary. | `eu-pef-method-2021` |
| `sb_complete_inventory` | foreground_inventory | Retain all environmentally relevant material and energy flows, products, wastes, and direct emissions. Add product-specific BOM and process exchanges beyond the typical cards below as separate atomic rows. | `eu-pef-method-2021` |
| `sb_test_boundary` | production_testing | Include routine production and acceptance tests attributable to released engines. Exclude development, prototype, and type-certification campaigns unless the goal explicitly includes them and their allocation is documented. Record test-cell fuel and measured exhaust exchanges separately. | `us-epa-aerospace-sector-notebook-1998`; `icao-aircraft-engine-emissions-standards` |
| `sb_excluded_life_cycle` | downstream_life_cycle | Exclude aircraft integration, distribution beyond the factory gate, flight operation, maintenance, repair, overhaul, and end-of-life from the default boundary. | `un-cpc-3-0-structure-2025` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased material stock and components received at the engine-manufacturing boundary, with supplier, grade or part identity, mass, delivery state, and upstream-dataset coverage declared |
| starting_condition_role | Cradle-to-gate foreground starting point; upstream production and inbound delivery remain linked background processes |
| product_classification_scope | Complete turbo-jets and turbo-propellers; CPC 3.0 subclass 43132 is classification context and does not include separately sold parts |
| recursive_input_rule | A complete engine received and incorporated as an input remains a separately recorded product flow with its own upstream dataset and is not relabelled as foreground production; separately purchased parts are recorded individually by their actual product identities |
| upstream_dataset_requirement | Use supplier-specific data when available; otherwise use a geographically, technologically, temporally, and product-state compatible background dataset and disclose proxies |
| disclosure | Declare make-or-buy boundary, in-house process set, alloy grades and product forms, engine configuration, test schedule, direct-emission measurement method, scrap destinations, wastewater treatment, allocation choices, and all omitted or proxied exchanges |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | Component fabrication and heat treatment | conditional | Include each fabrication, machining, joining, and heat-treatment operation performed under foreground control; otherwise represent purchased parts with their own upstream datasets. | foreground production | mass of accepted components transferred to assembly |
| `surface_treatment` | Surface treatment and cleaning | conditional | Include when chemical milling, cleaning, anodizing, plating, coating, passivation, or related finishing is performed under foreground control. | foreground conditioning | mass of treated components transferred to assembly |
| `final_assembly_testing` | Final assembly, inspection, and production testing | required | Include complete-engine assembly and inspection; include test-cell operation when performed for the released engine or allocated production lot. | foreground production and release | net kg of accepted finished engine |

### Process: Component fabrication and heat treatment (`component_fabrication`)

#### Inputs

##### Product flows

###### Nickel-based superalloy stock (`nickel_alloy_stock`)

Record the specific nickel-based superalloy grade and received form consumed in foreground component manufacture.

- Selected flow: Nickel-based superalloy stock
- Flow property / unit: Mass / kg
- Amount rule: supplier receipts plus opening inventory minus closing inventory and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_materials`
- Sources: `us-epa-aerospace-sector-notebook-1998`

###### Titanium-alloy stock (`titanium_alloy_stock`)

Record the specific titanium-alloy grade and received form consumed in foreground component manufacture.

- Selected flow: Titanium-alloy stock
- Flow property / unit: Mass / kg
- Amount rule: supplier receipts plus opening inventory minus closing inventory and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_materials`
- Sources: `us-epa-aerospace-sector-notebook-1998`

###### Aluminium-alloy stock (`aluminium_alloy_stock`)

Record the specific aluminium-alloy grade and received form consumed in foreground component manufacture.

- Selected flow: Aluminium-alloy stock
- Flow property / unit: Mass / kg
- Amount rule: supplier receipts plus opening inventory minus closing inventory and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_materials`
- Sources: `us-epa-aerospace-sector-notebook-1998`

###### Stainless-steel stock (`stainless_steel_stock`)

Record the specific stainless-steel grade and received form consumed in foreground component manufacture.

- Selected flow: Stainless-steel stock
- Flow property / unit: Mass / kg
- Amount rule: supplier receipts plus opening inventory minus closing inventory and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_materials`
- Sources: `us-epa-aerospace-sector-notebook-1998`

###### Purchased electricity for fabrication (`component_electricity`)

Record metered electricity used by machining, forming, joining, heat treatment, ventilation, and directly attributable support equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: process-submeter energy or allocated facility meter energy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_utilities`

###### Natural gas for heat treatment (`heat_treatment_natural_gas`)

Record natural gas burned in controlled heat-treatment equipment when this route is used.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered gas at the declared reference condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_utilities`

###### Industrial oxygen for thermal processing (`thermal_process_oxygen`)

Record supplied oxygen used by an applicable thermal cutting, joining, or controlled-atmosphere operation.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: supplier or process-meter volume at the declared reference condition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_utilities`

###### Cutting fluid for machining (`cutting_fluid`)

Record the mass of cutting fluid make-up crossing into machining systems; keep recovered internal recirculation outside gross purchase.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: purchased make-up plus opening inventory minus closing inventory and off-site returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_materials`
- Sources: `us-epa-aerospace-sector-notebook-1998`

#### Outputs

##### Waste flows

###### Nickel-alloy fabrication scrap (`nickel_alloy_scrap`)

Record segregated nickel-alloy turnings, offcuts, and rejected stock leaving foreground control.

- Selected flow: Nickel-alloy fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed shipment or container mass by alloy family, net of tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_wastes`
- Sources: `us-epa-aerospace-sector-notebook-1998`

###### Titanium-alloy fabrication scrap (`titanium_alloy_scrap`)

Record segregated titanium-alloy turnings, offcuts, and rejected stock leaving foreground control.

- Selected flow: Titanium-alloy fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed shipment or container mass by alloy family, net of tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_wastes`
- Sources: `us-epa-aerospace-sector-notebook-1998`

###### Aluminium fabrication scrap (`aluminium_alloy_scrap`)

Record segregated aluminium-alloy turnings, offcuts, and rejected stock leaving foreground control.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: weighed shipment or container mass, net of tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_wastes`
- Sources: `us-epa-aerospace-sector-notebook-1998`

###### Stainless-steel fabrication scrap (`stainless_steel_scrap`)

Record segregated stainless-steel turnings, offcuts, and rejected stock leaving foreground control.

- Selected flow: Stainless-steel fabrication scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed shipment or container mass by stainless grade family, net of tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_wastes`
- Sources: `us-epa-aerospace-sector-notebook-1998`

###### Spent machining coolant (`spent_coolant`)

Record spent machining coolant transferred for treatment, excluding coolant still recirculating internally.

- Selected flow: Spent coolant `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- Flow property / unit: Mass / kg
- Amount rule: weighed or volume-derived mass at off-site transfer, with water content disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_wastes`
- Sources: `us-epa-aerospace-sector-notebook-1998`

##### Elementary flows

###### Fossil carbon dioxide from component-process combustion (`component_fossil_carbon_dioxide_to_air`)

Record only direct fossil carbon dioxide released from fuel burned inside the foreground component-process boundary.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or calculation from measured fuel carbon content and oxidation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_emissions`

###### Fossil carbon monoxide from component-process combustion (`component_fossil_carbon_monoxide_to_air`)

Record direct fossil carbon monoxide emitted to air from foreground combustion equipment.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or calculation using a disclosed equipment-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_emissions`

###### Nitrogen oxides from component-process combustion (`component_nitrogen_oxides_to_air`)

Record direct nitrogen oxides emitted to air, with the reporting basis such as NO2-equivalent declared.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or calculation using a disclosed equipment-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_component_emissions`

### Process: Surface treatment and cleaning (`surface_treatment`)

#### Inputs

##### Product flows

###### Process water for surface treatment (`surface_process_water`)

Record water supplied to cleaning, chemical milling, rinsing, quenching, or aqueous finishing within the declared route.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered supplied mass or metered volume converted with measured or documented density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_records`
- Sources: `us-epa-aerospace-sector-notebook-1998`

###### Purchased electricity for surface treatment (`surface_electricity`)

Record electricity used by baths, pumps, extraction, ovens, coating equipment, and wastewater handling attributable to surface treatment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: process-submeter energy or allocated facility meter energy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_records`

###### Sodium hydroxide for aluminium chemical milling (`sodium_hydroxide`)

Record pure sodium-hydroxide equivalent entering an applicable aluminium chemical-milling bath; separately record other etchants actually used.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: solution mass multiplied by verified sodium-hydroxide mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_records`
- Sources: `us-epa-aerospace-sector-notebook-1998`

#### Outputs

##### Waste flows

###### Metal-finishing wastewater (`metal_finishing_wastewater`)

Record the aqueous waste stream leaving surface treatment before off-site or on-site treatment; disclose pH, metals, oils, and relevant process chemicals.

- Selected flow: Metal-finishing process wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered discharge mass or volume converted with measured density, before treatment allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_records`
- Sources: `us-epa-aerospace-sector-notebook-1998`

### Process: Final assembly, inspection, and production testing (`final_assembly_testing`)

#### Inputs

##### Product flows

###### Purchased electricity for assembly and inspection (`assembly_electricity`)

Record electricity used by assembly tools, controlled environments, inspection, instrumentation, and directly attributable support equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: process-submeter energy or allocated facility meter energy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_records`

###### Process water for final cleaning and testing (`final_cleaning_process_water`)

Record water supplied to final cleaning, leak testing, or other aqueous inspection when those operations occur.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered supplied mass or metered volume converted with measured or documented density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_records`
- Sources: `us-epa-aerospace-sector-notebook-1998`

###### Kerosene-type jet fuel for test-cell operation (`test_kerosene_jet_fuel`)

Record the actual kerosene-type aviation turbine fuel burned during production or acceptance tests attributable to the released engine or production lot.

- Selected flow: Kerosene-type jet fuel `e1ede47a-b840-45e6-b711-98cb547902cf`
- Flow property / unit: Mass / kg
- Amount rule: calibrated test-cell fuel-meter mass, corrected for returns and retained fuel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_cell_records`
- Sources: `icao-aircraft-engine-emissions-standards`

#### Outputs

##### Product flows

###### Accepted finished engine (`finished_engine`)

Record net mass of the complete accepted engine in the declared factory-gate delivery state.

- Selected flow: Turbo-jets and turbo-propellers `fb78e875-8bc6-484d-b2c4-ede9c1726721`
- Flow property / unit: Mass / kg
- Amount rule: controlled release mass for accepted engines only
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_engine_mass`

##### Elementary flows

###### Fossil carbon dioxide from test-cell fuel combustion (`test_fossil_carbon_dioxide_to_air`)

Record direct fossil carbon dioxide from test-cell fuel burned within the foreground production boundary.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured exhaust mass or calculation from measured test fuel and verified carbon content
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_cell_records`
- Sources: `icao-aircraft-engine-emissions-standards`

###### Fossil carbon monoxide from test-cell fuel combustion (`test_fossil_carbon_monoxide_to_air`)

Record direct fossil carbon monoxide emitted from the test cell.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured emission concentration and exhaust flow integrated over attributable test time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_cell_records`
- Sources: `icao-aircraft-engine-emissions-standards`

###### Nitrogen oxides from test-cell fuel combustion (`test_nitrogen_oxides_to_air`)

Record direct nitrogen oxides emitted from the test cell and declare the reporting basis, such as NO2-equivalent.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission concentration and exhaust flow integrated over attributable test time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished engine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_cell_records`
- Sources: `icao-aircraft-engine-emissions-standards`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | multi_product_processes | First avoid allocation by submetering, batch tracing, process subdivision, or system expansion where technically justified. | `eu-pef-method-2021` |
| `allocation_physical_driver` | shared_facility_inputs_and_outputs | When subdivision is not practicable, allocate shared electricity, fuels, water, chemicals, wastes, and direct emissions using a documented causal physical driver such as machine time, bath loading, test-cell time, or measured mass throughput. | `eu-pef-method-2021` |
| `allocation_engine_variants` | shared_engine_family_production | Do not allocate solely by unit count when engine variants differ materially in mass or processing. Use engine-specific records or a justified mass-, machine-time-, or test-time-based driver and disclose the sensitivity. | `eu-pef-method-2021` |
| `allocation_scrap` | recyclable_scrap | Record gross material input and segregated scrap mass before applying the study's declared recycling method. Do not subtract scrap from input or claim a recycling credit twice; disclose destination, quality, and allocation convention. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_materials` | `component_fabrication` | material inputs | ERP receipts and issues; BOM; inventory ledger | material identity; grade; form; supplier; received mass; issued mass; returned mass; opening and closing inventory; batch; engine model | reconcile purchasing, stores, and work-order records | kg | each receipt and issue; monthly reconciliation | representative continuous 12-month period or complete production campaign | all foreground component operations | net consumed mass allocated by work order or documented physical driver | calibrated scales; supplier certificates; inventory reconciliation; exception log |
| `cp_component_utilities` | `component_fabrication` | electricity and process gases | submeter and fuel/gas invoices | meter id; start and end readings; energy or volume; reference conditions; equipment; operating time; batch | calibrated submeter preferred; otherwise reconcile facility meter and allocate causally | MJ; m3 | continuous or per batch; monthly reconciliation | same reporting period as product output | all attributable fabrication and heat-treatment equipment | sum corrected readings, subtract non-production use, allocate by measured equipment time or throughput | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_component_wastes` | `component_fabrication` | segregated scrap and spent coolant | scale tickets and waste manifests | waste identity; alloy family; gross and tare mass; water content where relevant; destination; date; batch | weigh each shipment or validated container mass | kg | each shipment | same reporting period as product output | all foreground component operations | sum net mass by waste identity and allocate by traced work order or causal driver | scale calibration; manifest; recycler or treatment receipt |
| `cp_component_emissions` | `component_fabrication` | direct combustion emissions | stack measurements and fuel records | equipment; fuel amount; fuel carbon; concentration; exhaust flow; operating time; factor source; pollutant basis | direct measurement preferred; otherwise calculation from measured activity and documented factor | kg | each measurement campaign and monthly activity record | same reporting period as product output | foreground combustion sources only | integrate measured mass rate or multiply measured activity by documented factor | calibration records; laboratory report; calculation workbook |
| `cp_surface_records` | `surface_treatment` | water, electricity, chemicals, and wastewater | bath make-up logs; meters; chemical certificates; wastewater records | bath id; chemical solution mass; concentration; water and energy readings; treated mass; wastewater volume or mass; density; destination | reconcile batch logs, meters, purchasing, and discharge records | kg; MJ | per batch or continuous; monthly reconciliation | same reporting period as treated components | all foreground surface-treatment lines | calculate pure-chemical input; sum utilities and waste; allocate by bath load or treated mass | meter calibration; concentration assay; discharge record; mass-balance check |
| `cp_assembly_records` | `final_assembly_testing` | assembly electricity and process water | submeter; work order; cleaning and inspection log | engine serial or lot; meter readings; operation; water amount; elapsed time; accepted or rejected status | collect by serial/lot and reconcile to facility meters | MJ; kg | per engine or lot; monthly reconciliation | same reporting period as released engines | final assembly and inspection area | allocate only to accepted and rejected production according to documented causal treatment | meter calibration; work-order closure; inspection record |
| `cp_test_cell_records` | `final_assembly_testing` | test fuel and direct exhaust emissions | test-cell run file and calibrated instrumentation | engine serial; fuel identity; fuel mass; thrust or shaft-power setting; run time; pollutant concentration; exhaust flow; aborted runs; test purpose | integrate calibrated fuel and emissions measurements over attributable production tests | kg | every test run | complete reporting period | all production test cells serving declared engines | sum production and acceptance runs; allocate lot tests to represented engines; separately disclose development tests | instrument calibration; signed test report; run-to-engine traceability |
| `cp_finished_engine_mass` | `final_assembly_testing` | accepted reference product | release certificate and controlled weighing record | engine serial; model; configuration; dry/wet state; included accessories and fluids; gross and excluded support mass; acceptance date | calibrated final weighing or controlled configuration mass statement | kg | every released engine | complete reporting period | all declared production sites | sum net accepted engine mass; rejected or reworked units remain separate | scale calibration; configuration record; release certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_consumption` | material input rows | Net consumed mass = receipts + opening inventory - closing inventory - documented returns; reconcile unexplained variance before normalization. | receipt mass; opening inventory; closing inventory; return mass | net material input by atomic material identity | `us-epa-aerospace-sector-notebook-1998` |
| `calc_reference_normalization` | all inventory rows | Normalized amount = allocated reporting-period exchange divided by total net mass of accepted finished engines for the same period and scope. | allocated exchange; accepted engine mass | exchange per 1 kg reference product | `eu-pef-method-2021` |
| `calc_solution_active_mass` | sodium hydroxide | Pure sodium-hydroxide mass = solution mass multiplied by measured or certified mass fraction; keep carrier water in the water balance where material. | solution mass; sodium-hydroxide mass fraction | kg sodium hydroxide | `us-epa-aerospace-sector-notebook-1998` |
| `calc_gas_reference_volume` | natural gas and industrial oxygen | Convert measured volume to the declared reference temperature and pressure using the metering standard or recorded compressibility method; do not mix unconverted conditions. | measured volume; temperature; pressure; reference conditions; compressibility basis | m3 at declared reference conditions |  |
| `calc_measured_emission_mass` | direct exhaust emissions | Integrate pollutant concentration multiplied by corrected exhaust-flow rate over attributable operating time; document dry/wet and reference-oxygen corrections. | concentration; exhaust flow; operating time; correction basis | kg pollutant | `icao-aircraft-engine-emissions-standards` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Trace every released mass record to engine serial or production lot, engine type, model, configuration, output rating, acceptance status, and dry/wet delivery state. | release certificate; configuration record; controlled mass record |
| `dq_temporal_alignment` | all foreground exchanges | Use one common reporting period; document inventory carry-over, work in progress, abnormal shutdowns, and production-volume changes. | reporting-period reconciliation and exception log |
| `dq_meter_quality` | measured utilities and emissions | Retain meter identity, calibration status, reading interval, missing-data treatment, and any conversion to reference conditions. | calibration certificate; raw meter export; calculation record |
| `dq_completeness` | BOM and process inventory | Reconcile material input, accepted product, scrap, waste, and inventory change; explain all material residuals and any omitted flow. | mass-balance worksheet; BOM reconciliation; omission register |
| `dq_background_match` | upstream datasets | Check product state, alloy or chemical grade, geography, technology, time, property, unit, and delivery boundary; disclose every proxy. | dataset-selection log and proxy justification |
| `dq_test_traceability` | production testing | Distinguish production, acceptance, certification, development, aborted, and rework tests and trace included fuel and emissions to engines or represented lots. | test-cell run register and allocation worksheet |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | foreground_dataset_conformance | Confirm that the reference product is a complete turbo-jet or turbo-propeller engine, not a part, other reaction engine, other gas turbine, aircraft, or overhaul service, and that all required qualifiers are present. | `un-cpc-3-0-structure-2025`; `sastind-turbojet-2013`; `sastind-turboprop-2013` |
| `val_reference_mass` | foreground_dataset_conformance | Confirm that every inventory amount uses the same net accepted-engine mass denominator and declared dry/wet, accessory, fluid, packaging, and transport-stand boundary. |  |
| `val_atomic_inventory` | foreground_dataset_conformance | Confirm that each inventory row is one product, waste, or elementary exchange; add all product-specific BOM materials, chemicals, fuels, wastes, and direct emissions as separate rows and reject umbrella labels. | `eu-pef-method-2021` |
| `val_uuid_semantics` | foreground_dataset_conformance | Confirm every UUID by public state-100 identity, bilingual name, flow type, classification, property, unit group, product state, geography, technology, and general comment; leave unresolved identities blank. |  |
| `val_boundary_and_allocation` | foreground_dataset_conformance | Confirm that make-or-buy boundaries, excluded development and downstream stages, test attribution, shared-resource allocation, scrap treatment, and proxy datasets are declared and consistently applied. | `eu-pef-method-2021` |
| `val_mass_and_energy_reconciliation` | foreground_dataset_conformance | Check material and energy reconciliation, meter/invoice totals, accepted and rejected production, work in progress, and unexplained residuals before release. | `eu-pef-method-2021` |
| `val_direct_emissions` | foreground_dataset_conformance | Confirm that direct combustion and test-cell emissions include only foreground releases and do not duplicate upstream electricity or fuel-supply emissions. | `icao-aircraft-engine-emissions-standards` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Cradle-to-gate foreground production dataset for a declared complete turbo-jet or turbo-propeller engine configuration |
| downstream_use | May be used as a secondary_dataset or background_dataset for aircraft, propulsion-system, capital-goods, and supply-chain life-cycle models when scope and qualifiers match |
| allowed_use | Product carbon footprinting, life-cycle inventory construction, supplier comparison, design studies, and background modelling with compatible engine type, configuration, technology, geography, time, and factory-gate boundary |
| excluded_use | Flight-operation or mission fuel-burn modelling; maintenance or overhaul modelling; certification-emissions compliance claims; comparison of unlike thrust or shaft-power classes without functional adjustment; representation of turbo-fans or separately sold parts without reviewed mapping |
| required_metadata | PCR id and version state; engine type and model; manufacturer; production site and geography; reporting period; rated thrust or shaft power and rating basis; dry/wet mass state; delivered accessories and fluids; make-or-buy boundary; process route; test allocation; background datasets; allocation method |
| required_quality_disclosure | Primary-data share; meter and scale quality; BOM and mass-balance closure; temporal representativeness; production volume; rejected/reworked units; test coverage; proxy use; unresolved flow identities; missing range evidence; uncertainty and limitations |
| update_trigger | Material change in engine model or configuration, alloy or supplier route, production technology, site energy system, surface-treatment route, test schedule, allocation method, environmental controls, reporting period, or background-dataset representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 43132 classification identity and adjacent-scope exclusions |
| `sastind-turbojet-2013` | official_guidance | State Administration of Science, Technology and Industry for National Defense, “涡轮喷气发动机”, 2013-09-29, https://www.sastind.gov.cn/n10086205/n10086408/n10104260/c10104725/content.html (retrieved 2026-09-05) | Professional Chinese terminology and turbo-jet product boundary |
| `sastind-turboprop-2013` | official_guidance | State Administration of Science, Technology and Industry for National Defense, “涡轮螺旋桨发动机”, 2013-09-29, https://www.sastind.gov.cn/n10086205/n10086408/n10104260/c10104735/content.html (retrieved 2026-09-05) | Professional Chinese terminology and turbo-propeller product boundary |
| `us-epa-aerospace-sector-notebook-1998` | official_guidance | U.S. Environmental Protection Agency, Profile of the Aerospace Industry, Sector Notebook Project, November 1998, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=50000HO7.TXT (retrieved 2026-09-05) | Aircraft-engine manufacturing process decomposition, common material families, machining, heat treatment, finishing, testing, wastewater, scrap, and emissions |
| `eu-pef-method-2021` | method_factor | European Commission Recommendation (EU) 2021/2279, Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-09-05) | Functional-unit and reference-flow framing, completeness, foreground/background inventory, allocation hierarchy, data quality, and transparency |
| `icao-aircraft-engine-emissions-standards` | official_guidance | International Civil Aviation Organization, Local Air Quality Technology Standards, https://www.icao.int/environmental-protection/LAQ/technology-standards (retrieved 2026-09-05) | Applicable jet-engine test-bed fuel-flow and exhaust-emission measurement context; not used as a numeric manufacturing range |
