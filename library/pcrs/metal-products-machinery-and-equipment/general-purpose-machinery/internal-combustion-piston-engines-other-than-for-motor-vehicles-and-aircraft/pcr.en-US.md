---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.internal-combustion-piston-engines-other-than-for-motor-vehicles-and-aircraft
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Internal combustion piston engines, other than for motor vehicles and aircraft

## 1. Scope and Applicability

This PCR applies to the cradle-to-factory-gate production of complete reciprocating or rotary internal-combustion piston engines that are not made for motor vehicles or aircraft. Covered applications include stationary equipment, generating sets, marine or rail equipment, portable equipment, and non-road machinery where the engine itself is the reference product. Both compression-ignition and spark-ignition configurations are covered.

The foreground boundary begins with specification-conforming purchased metals, castings, components, consumables, and energy at the manufacturing site and includes component machining, aqueous cleaning when used, assembly, filling, final inspection, factory testing, and direct site wastes and emissions. Upstream production of purchased inputs must be represented by linked datasets. Distribution, installation, operation, maintenance, remanufacture, and end-of-life of the engine are excluded. Engines made for motor vehicles or aircraft, gas turbines, complete generating sets, and engine parts sold without a complete engine are excluded.

The category is deliberately broader than any single fuel, power band, cylinder arrangement, cooling system, or application. A data package shall declare those attributes and shall not use a narrower Tiangong engine flow as if it were the unresolved generic reference-product identity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.internal-combustion-piston-engines-other-than-for-motor-vehicles-and-aircraft |
| classification_refs | CPC 3.0: 43110, exact classification context |
| covered_products | Complete compression-ignition or spark-ignition piston engines for stationary, marine, rail, portable, agricultural, construction, and other non-road applications, when not motor-vehicle or aircraft engines |
| excluded_products | Motor-vehicle engines; aircraft engines; gas turbines; complete generating sets; propulsion systems whose engine is not separately quantified; spare parts and subassemblies sold without a complete engine |
| representative_product | A complete factory-tested internal-combustion piston engine delivered at the manufacturing gate, with declared application, ignition principle, fuel, rated power, displacement, after-treatment, cooling arrangement, and supply state |
| production_route | Purchased material and component receipt; machining; cleaning and assembly; filling; final inspection and factory testing; factory-gate release |
| market_state | Complete new engine, as shipped from the engine factory, excluding transport packaging mass from the reference amount |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A complete internal-combustion piston engine that converts fuel chemical energy to shaft mechanical energy and is not intended for a motor vehicle or aircraft |
| How much | 1,000 kg net mass of complete engine product at the factory gate |
| How well | Conforming to the declared engine family or model specification, rated net power, ignition principle, fuel, emissions configuration, after-treatment, and factory acceptance criteria |
| How long or cycle | One factory-gate delivery; operating life and delivered lifetime mechanical work are outside this cradle-to-gate functional unit |
| reference_flow_link | `reference_engine_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Internal combustion piston engine, other than for motor vehicles and aircraft |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | engine application; ignition principle; fuel specification; rated net power in kW; displacement; cylinder count and arrangement; speed class; cooling system; emissions stage or declared non-regulated status; after-treatment supplied with the engine; accessories included; net mass; factory-test route; production geography; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product and all mass-normalized exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine calibrated net mass of complete engines as shipped, including fluids and accessories supplied with the engine but excluding transport packaging, reusable test fixtures, and separately sold equipment; normalize all inventory to 1,000 kg. |
| `component_mass_basis` | purchased materials and internal transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record dry or as-received mass consistently, declare coatings or entrained fluids when material, and reconcile issued mass with product, chip, fluid, and stock movements. |
| `electricity_energy_basis` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Retain meter readings in kWh and convert to MJ using 1 kWh = 3.6 MJ; disclose voltage level, grid geography, on-site generation, imported electricity, and separately measured exported or recovered test power. |
| `gas_volume_basis` | gaseous natural gas test fuel | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Record metered volume and declare temperature, pressure, moisture basis, composition, and reference conditions; do not convert to mass without a documented density or composition record. |
| `test_emission_basis` | factory-test exhaust emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Integrate each measured or calculated constituent over the actual test interval and normalize to 1,000 kg of accepted engine output; do not substitute regulatory g/kWh limits for measured factory-test inventory. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Specification-conforming purchased metals, castings, bought-in parts, process consumables, fuels, water, and electricity delivered to the engine manufacturing site |
| starting_condition_role | Foreground entry condition for machining, assembly, filling, inspection, and testing; upstream production remains required through linked supplier or background datasets |
| product_classification_scope | Complete internal-combustion piston engines within the reviewed semantic boundary; classification references provide mapping context but do not narrow or expand the canonical PCR |
| recursive_input_rule | A complete engine of the same category received for remanufacture or incorporation is not modelled as a raw material in this new-engine PCR; disclose it and use a separately governed remanufacturing or assembly model instead of recursively applying this PCR |
| upstream_dataset_requirement | Link each purchased material, component, consumable, fuel, water, and electricity input to a geographically and technologically representative upstream dataset; disclose unresolved supplier-specific inputs |
| disclosure | Declare purchased-versus-in-house component scope, included accessories and after-treatment, machining and cleaning routes, test coverage, fuel and test cycle, site utilities, waste destinations, allocation basis, production geography, and reference period |

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate` | all foreground processes | Include manufacturing-site machining, cleaning, assembly, filling, inspection, testing, direct emissions, and wastes through release of the complete engine at the factory gate; exclude distribution, use, maintenance, and end-of-life. | `un-cpc-3-0-structure-2025` |
| `boundary_purchased_inputs` | purchased materials and components | Do not omit the upstream production of bought-in castings, metals, components, consumables, energy, or fuels merely because their manufacture occurs outside the engine plant; represent them with linked upstream datasets. |  |
| `boundary_route_condition` | conditional rows | Include each conditional material, cleaner, fuel, waste, or emission only when records show that the route occurred; record a documented zero or not-applicable finding rather than substituting another exchange. |  |
| `boundary_test_scope` | final inspection and testing | Include test-cell fuel, imported electricity, direct exhaust, rejected units, and treatment flows for tests performed before factory release; identify the tested engine family and actual duty cycle. | `eu-regulation-2016-1628`; `us-epa-40-cfr-1065-15` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_machining` | Component preparation and machining | required | Always include site-controlled cutting, boring, drilling, turning, grinding, honing, washing, and associated internal transfers that occur for the declared engine model. | foreground production | kg of machined engine parts transferred to assembly |
| `assembly_finishing` | Cleaning, assembly, filling, and finishing | required | Always include engine assembly and filling; include aqueous cleaning and sodium hydroxide only when used at the site. | foreground production | kg of assembled untested engine transferred to final inspection and testing |
| `final_inspection_testing` | Final inspection, testing, and factory-gate release | required | Always include final inspection and release; fuel and exhaust rows apply only when a hot test or fuelled acceptance test is performed. | foreground testing and reference-product release | 1,000 kg accepted complete engine output |

### Process: Component preparation and machining (`component_machining`)

#### Inputs

##### Product flows

###### Alloy-steel engine material (`alloy_steel_input`)

Record the mass of alloy steel entering site-controlled manufacture for shafts, gears, fasteners, valves, or other declared engine parts. Grade, product form, recycled content claim, supplier geography, and upstream route remain required qualifiers.

- Selected flow: Alloy steel `4f2d85d4-e6ed-4f74-8063-492513b93cde`
- Flow property / unit: Mass / kg
- Amount rule: net alloy-steel input issued to the declared engine production during the reference period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### Gray-cast-iron engine material (`gray_cast_iron_input`)

Record gray cast iron entering site-controlled manufacture for blocks, heads, liners, housings, or other declared parts. The Tiangong UUID remains unresolved; do not substitute pig iron.

- Selected flow: Gray cast iron
- Flow property / unit: Mass / kg
- Amount rule: net gray-cast-iron input issued to the declared engine production during the reference period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### Aluminium-alloy engine material (`aluminium_alloy_input`)

Record aluminium alloy when the declared engine uses aluminium blocks, heads, pistons, housings, or other site-controlled parts. Alloy designation, product form, supplier geography, and upstream route remain required qualifiers.

- Selected flow: Aluminium alloy `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- Flow property / unit: Mass / kg
- Amount rule: net aluminium-alloy input issued to the declared engine production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources:

###### Cutting fluid (`cutting_fluid_input`)

Record net cutting-fluid concentrate or ready-to-use fluid crossing the site boundary for machining. Declare formulation class, dilution basis, make-up, recovery, and closing stock.

- Selected flow: Cutting Fluid `576d250f-4f36-4385-939d-0f03b8f95a10`
- Flow property / unit: Mass / kg
- Amount rule: purchased and opening-stock cutting fluid plus make-up, less recovered closing stock and off-site returned fluid
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_machining_consumables`
- Sources: `niosh-metalworking-fluids-2013`

###### Machining process water (`machining_process_water`)

Record process water added to water-miscible cutting fluids, parts washing, or machining systems within this process. Cooling-tower make-up outside the allocated machining system is not included here.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: submetered or tank-balance process-water input allocated to component machining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_consumables`
- Sources:

###### Machining electricity (`machining_electricity`)

Record imported electricity for machine tools, pumps, mist collection, washing, and process-local auxiliaries assigned to machining.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered machining electricity, or documented machine-time allocation of site electricity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources:

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed; add a specific elementary resource row only when it crosses the measured foreground boundary.

#### Outputs

##### Product flows

###### Machined engine parts transferred to assembly (`machined_engine_parts_output`)

Record the measured mass of conforming machined parts transferred to assembly as a foreground internal intermediate. Create a dataset-local internal flow paired with `machined_engine_parts_input`.

- Selected flow: Machined engine parts, internal intermediate
- Flow property / unit: Mass / kg
- Amount rule: accepted transfer mass recorded at machining release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_transfers`
- Sources:

##### Waste flows

###### Steel machining chips (`steel_machining_chips`)

Record segregated steel chips and swarf leaving machining for recycling, treatment, or disposal; declare entrained-fluid treatment and destination.

- Selected flow: Steel scrap, machining chips `c978e4fc-350b-4fb6-8021-90eb5a6ed034`
- Flow property / unit: Mass / kg
- Amount rule: calibrated outgoing mass plus closing stock less opening stock for the reference period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_outputs`
- Sources: `niosh-metalworking-fluids-2013`

###### Aluminium machining chips (`aluminium_machining_chips`)

Record aluminium-alloy chips and swarf separately when aluminium machining occurs. The UUID remains unresolved because the candidates did not provide the required material-specific mass identity.

- Selected flow: Aluminium-alloy machining chips
- Flow property / unit: Mass / kg
- Amount rule: calibrated outgoing mass plus closing stock less opening stock for the reference period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_outputs`
- Sources: `niosh-metalworking-fluids-2013`

###### Spent metalworking fluid (`spent_metalworking_fluid`)

Record spent metalworking fluid leaving the site, excluding separately weighed free metal chips. Declare whether the waste is oil-based or water-miscible and its off-site destination.

- Selected flow: Spent metalworking fluid
- Flow property / unit: Mass / kg
- Amount rule: consignment mass or tank balance for spent metalworking fluid sent off site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `niosh-metalworking-fluids-2013`

##### Elementary flows

No default elementary output is prescribed; measured machining aerosols must be added as their concrete chemical or particle-size flow when material to the declared boundary.

### Process: Cleaning, assembly, filling, and finishing (`assembly_finishing`)

#### Inputs

##### Product flows

###### Machined engine parts received from machining (`machined_engine_parts_input`)

Record the receiving side of the foreground internal transfer from `machined_engine_parts_output` using the same dataset-local flow and amount.

- Selected flow: Machined engine parts, internal intermediate
- Flow property / unit: Mass / kg
- Amount rule: accepted transfer mass received by assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_transfers`
- Sources:

###### Initial lubricating-oil fill (`lubricating_oil_fill`)

Record lubricating oil filled into and shipped with the engine. Do not include test oil that is recovered and remains in the test system unless net consumption crosses the process boundary.

- Selected flow: lubricating oil `aec6f1a5-7b09-4704-870d-434d3ada0edd`
- Flow property / unit: Mass / kg
- Amount rule: calibrated fill mass shipped with accepted engines plus unrecovered test-system losses assigned to the product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_consumables`
- Sources:

###### Sodium-hydroxide cleaner (`sodium_hydroxide_cleaner`)

Record sodium hydroxide only when it is added to an aqueous parts-cleaning bath. Declare product concentration and report the active-product mass consistently.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: purchased sodium-hydroxide product added to cleaning baths, adjusted for concentration when records are solution mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_consumables`
- Sources: `eu-jrc-surface-treatment-metals-plastics-2006`

###### Assembly process water (`assembly_process_water`)

Record process water used in aqueous cleaning, rinsing, leak testing, or product filling within assembly; declare any water shipped inside the engine separately in the flow comment.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: submetered or tank-balance process-water input allocated to assembly and cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_consumables`
- Sources: `eu-jrc-surface-treatment-metals-plastics-2006`

###### Assembly electricity (`assembly_electricity`)

Record imported electricity for cleaning, assembly tools, filling, ventilation, and process-local auxiliaries assigned to this process.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered assembly electricity, or documented production-time allocation of site electricity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_energy`
- Sources:

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed for this process.

#### Outputs

##### Product flows

###### Assembled untested engine transferred to final inspection (`untested_engine_output`)

Record the measured mass of the assembled engine transferred to final inspection and testing as a foreground internal intermediate. Create a dataset-local flow paired with `untested_engine_input`.

- Selected flow: Assembled untested internal-combustion piston engine, internal intermediate
- Flow property / unit: Mass / kg
- Amount rule: accepted transfer mass recorded at assembly release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_transfers`
- Sources:

##### Waste flows

###### Cleaning wastewater (`cleaning_wastewater`)

Record wastewater crossing the assembly-process boundary to sewer or treatment when aqueous cleaning, rinsing, or leak testing occurs. Declare destination and whether mass includes entrained oil or cleaner.

- Selected flow: Wastewater `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- Flow property / unit: Mass / kg
- Amount rule: discharge-meter reading or tank balance for wastewater sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `eu-jrc-surface-treatment-metals-plastics-2006`

##### Elementary flows

No direct discharge to the environment is assumed. If wastewater bypasses treatment, add each measured elementary release separately rather than using this waste flow as an environmental emission.

### Process: Final inspection, testing, and factory-gate release (`final_inspection_testing`)

#### Inputs

##### Product flows

###### Assembled untested engine received for final inspection (`untested_engine_input`)

Record the receiving side of the foreground internal transfer from `untested_engine_output` using the same dataset-local flow and amount.

- Selected flow: Assembled untested internal-combustion piston engine, internal intermediate
- Flow property / unit: Mass / kg
- Amount rule: accepted transfer mass received by final inspection and testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_internal_transfers`
- Sources:

###### Diesel test fuel (`diesel_test_fuel`)

Record diesel fuel consumed only for compression-ignition engine hot tests or fuel-system acceptance tests. Grade, biofuel fraction, supplier, and test route remain required qualifiers.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: opening stock plus receipts less closing stock, returns, and separately measured fuel used outside the declared tests
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_fuels`
- Sources: `us-epa-40-cfr-1065-15`

###### Gaseous natural-gas test fuel (`natural_gas_test_fuel`)

Record gaseous natural gas only for engines tested on that fuel. Declare composition, supply pressure, and volume reference conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: test-cell meter volume at declared reference conditions less non-test consumption
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_fuels`
- Sources: `us-epa-40-cfr-1065-15`

###### Gasoline test fuel (`gasoline_test_fuel`)

Record gasoline only for spark-ignition engine hot tests or fuel-system acceptance tests. Grade, oxygenate and biofuel content, supplier, and test route remain required qualifiers.

- Selected flow: Gasoline `e6677cd5-b574-4e00-a3bd-c373ac796135`
- Flow property / unit: Mass / kg
- Amount rule: opening stock plus receipts less closing stock, returns, and separately measured non-test consumption
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_fuels`
- Sources: `us-epa-40-cfr-1065-15`

###### Testing electricity (`testing_electricity`)

Record imported electricity for dynamometers, pumps, controls, ventilation, and test-cell auxiliaries. Record exported or recovered dynamometer power separately and do not net it without disclosure.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered imported test-cell electricity; exported or recovered electricity is not deducted from this input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `us-epa-40-cfr-1065-15`

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No default elementary input is prescribed. Intake air need not be added unless the study requires a complete elemental mass balance and an exact flow identity is available.

#### Outputs

##### Product flows

###### Accepted complete engine at factory gate (`reference_engine_output`)

This is the reference product. The generic Tiangong product-flow UUID remains unresolved; excluded aircraft flows and narrower diesel or small-gasoline identities shall not be substituted.

- Selected flow: Internal combustion piston engine, other than for motor vehicles and aircraft
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg normalized accepted complete-engine output, based on calibrated net product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_product`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

No generic rejected-engine waste row is prescribed. If a rejected unit leaves the product system as waste, record its actual concrete waste identity and mass; reworked units remain within the process inventory.

##### Elementary flows

###### Fossil carbon dioxide from factory testing (`carbon_dioxide_fossil_to_air`)

Record fossil carbon dioxide released during fuelled factory tests, excluding upstream electricity emissions and downstream use-phase emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: integrated measured exhaust mass or fuel-carbon-balance result for tests performed during the reference period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_emissions`
- Sources: `us-epa-40-cfr-1065-15`

###### Fossil carbon monoxide from factory testing (`carbon_monoxide_fossil_to_air`)

Record fossil carbon monoxide released during fuelled factory tests to air, unspecified.

- Selected flow: carbon monoxide (fossil) `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: exhaust concentration multiplied by exhaust flow and integrated over each applicable test interval
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_emissions`
- Sources: `us-epa-40-cfr-1065-15`

###### Nitrogen oxides from factory testing (`nitrogen_oxides_to_air`)

Record nitrogen oxides released during fuelled factory tests, using the reporting convention declared by the applicable test method. Do not substitute nitrous oxide for this unresolved flow.

- Selected flow: Nitrogen oxides to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: exhaust concentration multiplied by exhaust flow and integrated over each applicable test interval
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_emissions`
- Sources: `eu-regulation-2016-1628`; `us-epa-40-cfr-1065-15`

###### Particulate matter from factory testing (`particulate_matter_to_air`)

Record particle-size-unspecified particulate matter released during fuelled factory tests when the applicable test method measures PM. Preserve a measured size fraction as an additional distinct flow rather than replacing this identity without disclosure.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: total particulate mass calculated from filter or instrument results and exhaust flow over applicable test intervals
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_emissions`
- Sources: `eu-regulation-2016-1628`; `us-epa-40-cfr-1065-15`

###### Methane from factory testing (`methane_to_air`)

Record methane released during a fuelled factory test when it is measured or required by the declared test method. The exact Tiangong elementary-flow UUID remains unresolved.

- Selected flow: Methane to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: exhaust concentration multiplied by exhaust flow and integrated over each applicable test interval
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg accepted complete engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_emissions`
- Sources: `us-epa-40-cfr-1065-15`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all foreground processes | Prefer subdivision, submetering, engine-family production records, and direct mass tracking so that allocation is avoided. |  |
| `allocation_shared_operations` | shared machining, assembly, and utilities | If direct measurement is unavailable, allocate shared machine electricity by recorded machine time and rated or metered load, cleaning by bath throughput or treated mass, and assembly utilities by production time; disclose the selected driver and sensitivity. |  |
| `allocation_scrap` | metal chips and other wastes | Report waste output at the point it leaves the foreground system. Do not subtract scrap sale revenue or avoided primary-material burdens from the foreground inventory; any recycling credit belongs to a separately declared downstream modelling convention. |  |
| `allocation_test_power` | dynamometer energy | Keep imported electricity, recovered shaft energy, and exported electricity as separate exchanges. Do not silently net recovered or exported energy against test-cell imports. | `us-epa-40-cfr-1065-15` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `component_machining` | purchased metal inputs | approved BOM, goods receipts, issue and stock records | engine_model; material_grade; product_form; supplier; received_mass; issued_mass; opening_stock; closing_stock; rejects | reconcile purchasing and stores records to the approved engine-family BOM | kg | each receipt and monthly reconciliation | at least 12 consecutive representative months or complete shorter production campaign | all supplying stores and machining areas in the declared site | sum net issued mass by material identity and divide by accepted reference-product mass | calibrated scales; supplier certificates; BOM revision; stock reconciliation |
| `cp_machining_consumables` | `component_machining` | cutting fluid and process water | purchase, make-up, recovery, tank-level, and submeter records | fluid_product; concentration; opening_stock; receipts; make_up; recovered_return; closing_stock; water_meter | material balance for cutting fluid and direct meter or tank balance for water | kg | each addition; monthly balance | same reference period as production | all in-scope machining systems | calculate net input, allocate only shared systems with documented machine time or treated mass, and normalize by accepted output | tank calibration; purchase invoices; meter checks; concentration tests |
| `cp_process_energy` | all processes | imported electricity | revenue meter, process submeter, machine runtime, and production records | meter_start; meter_end; process_id; runtime; rated_or_metered_load; imported_kWh; exported_kWh; accepted_output_mass | prefer process submeters; otherwise allocate site electricity using documented runtime and load | kWh and MJ | continuous or shift; monthly reconciliation | same reference period as production | all in-scope production and test areas | imported kWh × 3.6 MJ/kWh; keep exported or recovered power separate; normalize by accepted output | meter calibration; interval data; allocation worksheet; grid contract |
| `cp_internal_transfers` | `component_machining`; `assembly_finishing`; `final_inspection_testing` | internal product transfers | transfer ticket, production execution record, and calibrated scale | source_process; destination_process; engine_model; quantity; net_mass; timestamp; acceptance_status | weigh or derive from unit count and verified model mass at each transfer gate | kg | each batch or shift | complete reference period | all in-scope internal transfer points | pair each output and input; investigate non-zero transfer imbalance before aggregation | scale calibration; matched transfer IDs; rejection and rework log |
| `cp_assembly_consumables` | `assembly_finishing` | oil, cleaner, and process water | fill specification, issue record, bath log, concentration test, water meter, and stock record | engine_model; oil_fill_mass; cleaner_product_mass; concentration; bath_make_up; water_input; opening_stock; closing_stock | direct fill measurement and product or bath material balances | kg | each batch or shift; monthly reconciliation | same reference period as production | all cleaning, filling, and assembly lines in scope | sum net consumed product by concrete flow and normalize by accepted output | calibrated dispensers; concentration tests; meter checks; approved fill specification |
| `cp_waste_outputs` | `component_machining`; `assembly_finishing` | chips, spent fluid, and wastewater | weighbridge ticket, waste consignment, bin or tank level, discharge meter, and stock record | waste_identity; origin_process; opening_stock; generated_or_shipped_mass; closing_stock; destination; treatment_route | segregated calibrated weighing or tank/discharge balance | kg | each shipment and monthly reconciliation | same reference period as production | all in-scope waste storage and discharge points | outgoing mass plus closing stock less opening stock; avoid double counting entrained fluid and free chips | scale or meter calibration; consignment note; destination acceptance; stock reconciliation |
| `cp_test_fuels` | `final_inspection_testing` | fuelled factory-test inputs | test-cell fuel meter, batch certificate, stock record, and test log | engine_family; engine_id; fuel_grade; biofraction; density; gas_composition; reference_conditions; opening_stock; receipts; closing_stock; non_test_use; test_cycle | direct test-cell metering preferred; otherwise fuel-stock balance reconciled to test logs | kg or m3 | each test; daily or monthly balance | complete reference period | all in-scope test cells | sum each concrete fuel separately, subtract documented non-test use, and normalize by accepted output | meter calibration; fuel certificate; matched engine and test IDs; stock reconciliation |
| `cp_test_emissions` | `final_inspection_testing` | direct exhaust constituents | analyser, exhaust-flow, filter, fuel-carbon, duty-cycle, and test-acceptance records | engine_id; test_interval; constituent; concentration; exhaust_flow; sample_flow; filter_mass; fuel_carbon; work; result_status | apply the declared laboratory or acceptance-test method to each actual test interval | kg | each fuelled test | complete reference period or statistically documented sampling plan | all in-scope hot-test cells and represented engine families | integrate constituent mass over each interval, sum accepted and failed test burdens assigned to production, and normalize by accepted output | analyser calibration; zero/span checks; flow calibration; filter handling log; test-method identifier |
| `cp_final_product` | `final_inspection_testing` | accepted reference product | calibrated final mass, serial release, and production records | engine_id; model; net_mass; included_fluids; included_accessories; packaging_mass; release_status; release_date | weigh complete product or use verified model-specific mass with periodic scale confirmation | kg | each unit or homogeneous batch | complete reference period | all factory-gate releases in scope | sum accepted net mass excluding transport packaging and normalize inventory to exactly 1,000 kg | scale calibration; serial release log; model specification; packaging tare check |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = period exchange amount ÷ accepted net engine mass × 1,000 kg | concrete exchange amount; accepted net engine mass | exchange per 1,000 kg accepted engine |  |
| `calc_material_balance` | materials, fluids, and wastes | net consumed or generated amount = opening stock + receipts or generation − returns − closing stock, with transfers and double-counted entrained material reconciled | stock, receipt, return, transfer, and shipment records | net foreground exchange |  |
| `calc_electricity` | electricity rows | imported electricity (MJ) = imported meter kWh × 3.6; exported or recovered energy remains a separate output | imported kWh; exported kWh; process allocation driver | imported electricity in MJ and separately disclosed export |  |
| `calc_test_emission_mass` | direct test emissions | constituent mass = integral of constituent concentration × corresponding raw or dilute exhaust flow over the test interval, with units and dilution corrections required by the declared method | concentration; exhaust flow; interval duration; dilution and humidity corrections | kg of each constituent per test and per reference flow | `us-epa-40-cfr-1065-15` |
| `calc_fossil_co2_balance` | fossil carbon dioxide when not directly measured | fossil CO2 = oxidized fossil carbon in consumed test fuel × 44/12, after accounting for measured carbon in other exhaust species and retained fuel | fuel mass or volume; composition; fossil carbon fraction; measured carbon species | kg fossil carbon dioxide | `us-epa-40-cfr-1065-15` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and purchased inputs | Preserve engine model/family, application, ignition principle, fuel, rated power, displacement, included accessories, material grade, supplier, and product form needed to distinguish the modelled product and inputs. | approved specifications, BOM, supplier certificates, and product release record |
| `dq_temporal` | all foreground records | Use one common reference period, normally at least 12 consecutive representative months; disclose shorter campaigns, shutdowns, abnormal tests, and changes in engine mix. | dated meter, production, purchase, stock, waste, and test records |
| `dq_measurement` | mass, energy, volume, and exhaust records | Use calibrated instruments with units and reference conditions preserved; retain conversion formulas, allocation drivers, and zero/span or meter checks. | calibration certificates, raw files, and calculation workbook |
| `dq_completeness` | all processes | Reconcile BOM inputs, internal transfers, accepted and rejected output, waste, fuels, and test records; explain every missing conditional row and every residual material imbalance. | signed reconciliation and applicability matrix |
| `dq_representativeness` | upstream datasets | Match supplier geography, material route, electricity grid, fuel grade, and technology as closely as available; disclose proxies and their contribution. | supplier declarations, contracts, dataset metadata, and proxy log |

## 9. Validation Rules

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_product_identity` | reference flow | Fail the data package if the product is a motor-vehicle engine, aircraft engine, gas turbine, complete generating set, or parts-only output, or if required engine qualifiers are absent. | `un-cpc-3-0-structure-2025` |
| `validation_reference_amount` | reference product | Confirm that accepted complete-engine net mass equals exactly 1,000 kg after normalization and excludes transport packaging. |  |
| `validation_internal_transfers` | internal intermediates | Require paired internal output and input amounts to agree for each transfer identity after documented rejection, rework, and stock adjustments. |  |
| `validation_material_reconciliation` | material and waste rows | Reconcile major metal inputs with product, chips, rejected parts, and stock changes; investigate and disclose residual imbalance rather than forcing closure. |  |
| `validation_test_applicability` | test fuels and emissions | For every hot-tested engine family, require its concrete fuel row, duty-cycle/test identifier, test burden, and each constituent required or measured by the declared method; for no-hot-test routes, require documented not-applicable evidence. | `eu-regulation-2016-1628`; `us-epa-40-cfr-1065-15` |
| `validation_uuid_semantics` | UUID-bearing rows | Confirm public state-100 flow identity, flow type, classification, property, unit group, product state, geography, technology, and general comment before publication; unresolved generic and internal flows remain explicit blockers to publication, not permission to use a proxy. |  |
| `validation_ranges` | important flows | Treat missing external ranges as declared evidence needs and use collected foreground values; do not create a numeric range from one case, snippets, or incompatible source boundaries. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after review and publication of the completed foreground data package |
| downstream_use | Cradle-to-gate engine-production modelling and upstream supply to equipment, vessel, rail, stationary-power, agricultural, construction, or other non-road product systems |
| allowed_use | Use for the declared engine family, manufacturing route, production geography, period, fuel and test configuration, and included accessories or after-treatment; aggregation across models is allowed only with production-mass weighting and disclosed mix |
| excluded_use | Motor-vehicle or aircraft engines; engine operation or lifetime performance; remanufactured engines; complete generating sets; parts-only products; a geography, technology, or engine family not represented without explicit proxy assessment |
| required_metadata | PCR id and version; engine application and family/model; ignition principle; fuel; rated net power; displacement; speed and cooling class; emissions stage or non-regulated status; after-treatment and accessories; net mass; factory-test route and duty cycle; purchased-versus-in-house component scope; geography; reference period; allocation; upstream dataset list; unresolved-flow log |
| required_quality_disclosure | foreground coverage; temporal coverage; primary-data share; meter and scale calibration; BOM and mass-balance reconciliation; test sampling coverage; fuel and exhaust method; conditional-row applicability; proxy datasets; uncertainty and unresolved range evidence |
| update_trigger | Change in engine family or product mix, material or supplier route, machining technology, cleaning chemistry, assembly scope, test method or duration, test fuel, after-treatment, emissions stage, site electricity mix, geography, allocation driver, or more than three years since the representative reference period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, *CPC Version 3.0 Structure*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 43110 classification identity and exclusion wording |
| `niosh-metalworking-fluids-2013` | `official_guidance` | U.S. National Institute for Occupational Safety and Health, *Metalworking Fluids*, last reviewed 16 August 2013, https://archive.cdc.gov/www_cdc_gov/niosh/topics/metalworking/default.html (retrieved 2026-09-05) | Machining and grinding process decomposition; cutting-fluid use; metal particles and contaminated spent-fluid inventory |
| `eu-jrc-surface-treatment-metals-plastics-2006` | `official_guidance` | European Commission Joint Research Centre, *Surface Treatment of Metals and Plastics BREF*, adopted August 2006, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/surface-treatment-metals-and-plastics (retrieved 2026-09-05) | Conditional aqueous chemical cleaning and associated process-water and wastewater boundary |
| `eu-regulation-2016-1628` | `standard` | Regulation (EU) 2016/1628 of the European Parliament and of the Council, ELI http://data.europa.eu/eli/reg/2016/1628/oj (retrieved 2026-09-05) | Non-road engine type/family disclosure and gaseous and particulate pollutant coverage for applicable engines |
| `us-epa-40-cfr-1065-15` | `standard` | U.S. Environmental Protection Agency, 40 CFR 1065.15, *Overview of procedures for laboratory and field testing*, https://www.ecfr.gov/current/title-40/chapter-I/subchapter-U/part-1065/subpart-A/section-1065.15 (retrieved 2026-09-05) | Factory-test fuel/work records and exhaust-constituent mass measurement or calculation method |
