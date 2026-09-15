---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.furnace-burners-for-liquid-fuel-for-pulverized-solid-fuel-or-for-gas-mechanical-stokers-79477d75
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Furnace burners for liquid fuel, for pulverized solid fuel or for gas; mechanical stokers, mechanical grates, mechanical ash dischargers and similar appliances

## 1. Scope and Applicability

This PCR covers factory-gate production of completed furnace burners for liquid fuel, pulverized solid fuel, or gas, together with completed mechanical stokers, mechanical grates, mechanical ash dischargers, and appliances with the same primary firing, fuel-feeding, grate, or ash-removal function. It applies to a declared product model and configuration, including fitted controls, drives, fans, housings, and other components that form part of the delivered appliance.

The PCR excludes complete ovens and furnaces, non-electric bakery ovens, separately supplied spare parts, generic fuel-handling plant that does not perform the covered functions, installation and commissioning at the customer site, use-phase fuel combustion, maintenance, and end-of-life. Manufacturing services on materials owned by another party are a service boundary and are not the reference product of this PCR. The foreground package is cradle-to-factory-gate only when every purchased material, component, energy carrier, and waste treatment crossing that boundary is linked to an appropriate upstream or downstream dataset.

Because products within this category differ materially in fuel, rated thermal input, feed or ash-handling capacity, materials, and control configuration, results per kilogram shall not be used for comparative assertions unless those functional and technical qualifiers are equivalent.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.furnace-burners-for-liquid-fuel-for-pulverized-solid-fuel-or-for-gas-mechanical-stokers-79477d75 |
| classification_refs | CPC 3.0: 43410 |
| covered_products | Completed furnace burners for liquid fuel, pulverized solid fuel, or gas; completed mechanical stokers, mechanical grates, mechanical ash dischargers; similar completed appliances whose primary function is furnace firing, solid-fuel feeding, grate movement, or mechanical ash discharge |
| excluded_products | Complete ovens or furnaces; separately supplied parts and spare parts; generic conveyors or fuel-handling equipment without the covered furnace function; installation, commissioning, repair, and contract manufacturing services |
| representative_product | A completed and factory-accepted covered appliance in its declared sales configuration at the manufacturing-facility gate |
| production_route | Product-specific bill of materials; metal forming and machining; joining and assembly; route-conditional aqueous surface treatment; route-conditional factory hot testing; final inspection |
| market_state | New, completed appliance at factory gate, excluding external transport packaging unless the declared sales configuration makes that packaging inseparable |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision at factory gate of a completed covered appliance that performs the declared furnace-firing, fuel-feeding, grate-moving, or ash-discharging function |
| How much | 1 kg of finished appliance in the declared sales configuration |
| How well | Conforms to the declared model specification and has passed the manufacturer's documented final inspection or factory acceptance test applicable to that model |
| How long or cycle | Factory-gate production only; service life, operating duty, installation, and use are declared qualifiers and are outside the reference quantity |
| reference_flow_link | `covered_appliance_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Furnace burners for liquid fuel, for pulverized solid fuel or for gas, mechanical stokers, mechanical grates, mechanical ash dischargers and similar appliances `25b61b3f-31a8-4618-9025-db11814c43e2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product subtype; model and configuration; intended fuel or handled material; rated thermal input or rated feed, grate, or ash-discharge capacity; control and drive configuration; principal material grades; finished product mass convention; manufacturing site and geography; reporting period; factory-test route and test fuel; external packaging inclusion; upstream dataset choices |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and `covered_appliance_output` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net finished-appliance mass for the declared sales configuration after final inspection. Include fitted components and integral fluids; exclude loose spares, commissioning fuel, and external transport packaging unless explicitly included in the declared configuration. Normalize all inventory to 1 kg of this mass. |
| `electricity_conversion` | `fabrication_electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered electricity record and convert kWh to MJ using 1 kWh = 3.6 MJ; do not treat the electricity flow-property label as evidence of fuel combustion. |
| `gas_volume_basis` | `natural_gas_test` and `industrial_oxygen` | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State temperature, absolute pressure, moisture basis, and meter correction used for each reported gas volume. Convert between actual and reference volumes only from documented conditions. |
| `material_mass_basis` | bill-of-material inputs and solid wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use issued or consumed mass net of returned stock. Keep alloy grade, product form, recycled-content claim, and supplier geography as qualifiers; do not combine different materials into one inventory row. |
| `waste_state_basis` | `metal_treatment_wastewater` and `metal_treatment_sludge` | Mass | kg | Report wastewater as mass at the transfer point and sludge as as-dispatched mass; disclose density conversions, dry-solids or moisture content, hazardous classification, and treatment destination. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased raw materials, fabricated components, chemicals, fuels, electricity, and water as received at the manufacturing-site gate, each with declared supplier, product state, geography, and upstream dataset |
| starting_condition_role | Upstream dataset hand-off to product-specific foreground manufacturing |
| product_classification_scope | Completed products within the semantic boundary of CPC 3.0 code 43410; the classification reference is a locator and does not broaden the PCR to ovens, furnaces, parts, or services |
| recursive_input_rule | A purchased covered appliance used as a component is recorded once as a product input with its supplier dataset and declared function; do not recursively reconstruct it under this PCR inside the same foreground package |
| upstream_dataset_requirement | Link each purchased material, component, chemical, fuel, electricity supply, and water supply to a geographically and technologically representative upstream dataset; document substitutions and data-quality limitations |
| disclosure | Declare included manufacturing sites and processes, outsourced operations, product-specific bill of materials, allocation, test route and fuel, emission-estimation method, waste destinations, cut-offs, external packaging treatment, and all excluded stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing | Include product-specific material receipt and issue, metal forming and machining, joining and assembly, onsite finishing, final inspection, and every applicable factory test through transfer of the completed appliance at the manufacturing-site gate. | `ifc-metal-products-ehs-2007`; `eu-pef-2021-2279` |
| `boundary_direct_exchanges` | foreground inventory | Record all environmentally relevant material and energy inputs, products, wastes, and direct elementary emissions crossing the declared foreground boundary. Add any actual product-specific bill-of-material item, test fuel, finishing chemical, or emission not represented by a card below as its own atomic exchange. | `eu-pef-2021-2279` |
| `boundary_outsourced_operations` | outsourced forming, coating, heat treatment, or testing | Record the outsourced operation as an upstream product/service dataset together with transport where in scope; do not also record its internal exchanges as onsite foreground exchanges. | `eu-pef-2021-2279` |
| `boundary_exclusions` | capital goods and downstream stages | Exclude manufacturing capital goods, research and development, sales, employee commuting, installation, customer-site commissioning, use, maintenance, and end-of-life from this factory-gate package unless the study explicitly expands the boundary and reports those additions separately. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fabrication_assembly` | Product-specific fabrication, assembly, and final inspection | required | Always; includes all onsite fabrication and assembly for the declared product model | Foreground manufacture | 1 kg finished covered appliance |
| `aqueous_surface_treatment` | Aqueous cleaning and surface treatment | conditional | Include only when alkaline cleaning, rinsing, conversion treatment, or another aqueous metal-treatment operation occurs onsite for the declared product | Foreground finishing | 1 kg finished covered appliance |
| `gas_hot_test` | Natural-gas-fired factory hot test | conditional | Include only when gaseous natural gas is combusted onsite during factory acceptance or functional testing of the declared product | Foreground testing | 1 kg finished covered appliance |
| `diesel_hot_test` | Diesel-fired factory hot test | conditional | Include only when diesel fuel is combusted onsite during factory acceptance or functional testing of the declared product | Foreground testing | 1 kg finished covered appliance |

### Process: Product-specific fabrication, assembly, and final inspection (`fabrication_assembly`)

#### Inputs

##### Product flows

###### Alloy-steel sheet (`alloy_steel_sheet`)

Record further-worked alloy-steel sheet actually issued to the covered product. This card does not represent stainless steel, cast iron, bars, tubes, or purchased fabricated components.

- Selected flow: Steel Sheet `13082a6a-e820-45ec-89f5-3c2c3650495b`
- Flow property / unit: Mass / kg
- Amount rule: Product-specific issued mass minus documented unused material returned to stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished covered appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-2021-2279`

###### Stainless-steel sheet (`stainless_steel_sheet`)

Record stainless-steel sheet only when it is present in the product-specific bill of materials. Its Tiangong UUID remains unresolved because the audited candidates had conflicting classifications or bilingual identities.

- Selected flow: Stainless-steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Product-specific issued mass minus documented unused material returned to stock; zero only when the declared model contains no stainless-steel sheet
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished covered appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-2021-2279`

###### Cast iron (`cast_iron`)

Record cast-iron material embodied in purchased or onsite-produced cast components only when present in the declared product. Do not substitute pig iron, iron ore, cast-iron pipe, or cast-iron grinding media.

- Selected flow: Cast iron
- Flow property / unit: Mass / kg
- Amount rule: Product-specific cast-iron component mass entering assembly; avoid double counting material already represented by a purchased component dataset
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished covered appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-2021-2279`

###### Purchased electricity (`fabrication_electricity`)

Record electricity delivered to fabrication, machining, welding, assembly, ventilation, and final inspection after applying documented submetering or allocation.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered electricity attributable to the declared product and reporting period, converted under `electricity_conversion`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished covered appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-pef-2021-2279`

###### Industrial oxygen (`industrial_oxygen`)

Record purchased industrial oxygen consumed in oxy-fuel cutting or another documented fabrication operation. Exclude oxygen used outside the foreground boundary.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: Supplier-delivery or flow-meter volume consumed by applicable onsite fabrication under declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished covered appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_and_fuel_records`
- Sources: `ifc-metal-products-ehs-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Completed covered appliance (`covered_appliance_output`)

Record the net finished mass of the completed and accepted appliance in the declared sales configuration.

- Selected flow: Furnace burners for liquid fuel, for pulverized solid fuel or for gas, mechanical stokers, mechanical grates, mechanical ash dischargers and similar appliances `25b61b3f-31a8-4618-9025-db11814c43e2`
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg after normalization from measured finished-product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg finished covered appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-2025`

##### Waste flows

###### Segregated post-industrial steel scrap (`steel_scrap`)

Record steel offcuts, chips, and rejected steel parts leaving fabrication as segregated post-industrial scrap. Keep other metal or contaminated waste in separate atomic rows.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Weighed outbound scrap attributable to the declared product, or product-specific metal mass balance where direct weighing is unavailable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished covered appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Sources: `ifc-metal-products-ehs-2007`

##### Elementary flows

###### Unspecified-size particulate matter to air (`fabrication_particulate`)

Record direct particulate matter released to unspecified air from cutting, grinding, blasting, or other onsite fabrication after abatement. Do not include particulate emissions embedded in upstream electricity or material datasets.

- Selected flow: Particulate matter, particle size unspecified `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- Flow property / unit: Mass / kg
- Amount rule: Representative measured release or documented site calculation for the reporting period, allocated to the declared product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished covered appliance
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `ifc-metal-products-ehs-2007`

### Process: Aqueous cleaning and surface treatment (`aqueous_surface_treatment`)

#### Inputs

##### Product flows

###### Process water (`process_water`)

Record water crossing the site boundary for applicable aqueous cleaning, rinsing, bath make-up, or direct process use. Do not include non-contact cooling water in this row.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-recorded water supplied to included onsite aqueous surface-treatment operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished covered appliance receiving this treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_chemical_records`
- Sources: `ifc-metal-products-ehs-2007`

###### Sodium hydroxide (`sodium_hydroxide`)

Record sodium hydroxide consumed in an onsite alkaline cleaning or treatment bath. State solution concentration and report pure sodium-hydroxide-equivalent mass separately from carrier water.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Pure sodium hydroxide mass calculated from dosed solution mass and verified concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished covered appliance receiving this treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_chemical_records`
- Sources: `ifc-metal-products-ehs-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Metal-treatment wastewater (`metal_treatment_wastewater`)

Record the aqueous waste stream leaving onsite cleaning, rinsing, or surface treatment before offsite treatment or at the declared site-treatment hand-off. Keep non-contact cooling water and sanitary sewage separate.

- Selected flow: Wastewater from metal surface treatment
- Flow property / unit: Mass / kg
- Amount rule: Discharge-flow or tank-transfer record converted to mass using documented density, with destination and composition declared
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished covered appliance receiving this treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_and_sludge_records`
- Sources: `ifc-metal-products-ehs-2007`

###### Metal-bearing surface-treatment sludge (`metal_treatment_sludge`)

Record dewatered sludge leaving onsite treatment of metal-finishing wastewater. This row excludes municipal sewage sludge, oil sludge, and sludge-dryer exhaust.

- Selected flow: Metal-bearing sludge from surface treatment
- Flow property / unit: Mass / kg
- Amount rule: As-dispatched weighed mass, with moisture or dry-solids content and destination declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished covered appliance receiving this treatment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_and_sludge_records`
- Sources: `ifc-metal-products-ehs-2007`

##### Elementary flows

### Process: Natural-gas-fired factory hot test (`gas_hot_test`)

#### Inputs

##### Product flows

###### Natural gas consumed in hot testing (`natural_gas_test`)

Record gaseous natural gas combusted onsite only for the included product's documented factory hot test.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Corrected test-meter volume attributed to the declared product under `gas_volume_basis`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished covered appliance subjected to this test
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_gas_and_fuel_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from natural-gas hot testing (`gas_test_co2`)

Record direct fossil carbon dioxide released by the included onsite natural-gas test. Exclude upstream gas-supply and electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or natural-gas consumption multiplied by a documented site-appropriate fossil carbon dioxide factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished covered appliance subjected to this test
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-pef-2021-2279`

###### Nitrogen oxides from natural-gas hot testing (`gas_test_nox`)

Record aggregated direct nitrogen oxides released to unspecified air from the included test, expressed on the site's declared measurement basis. The exact Tiangong UUID remains unresolved.

- Selected flow: Nitrogen oxides to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: Representative measured release or documented site calculation attributed to the declared product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished covered appliance subjected to this test
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `ifc-metal-products-ehs-2007`

### Process: Diesel-fired factory hot test (`diesel_hot_test`)

#### Inputs

##### Product flows

###### Diesel consumed in hot testing (`diesel_test_fuel`)

Record diesel fuel combusted onsite only for the included product's documented factory hot test. Do not use this row for other liquid fuels.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Test-tank mass balance or metered volume converted with documented density and attributed to the declared product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished covered appliance subjected to this test
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_gas_and_fuel_records`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from diesel hot testing (`diesel_test_co2`)

Record direct fossil carbon dioxide released by the included onsite diesel test. Exclude upstream diesel-supply and electricity emissions.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or diesel consumption multiplied by a documented site-appropriate fossil carbon dioxide factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg finished covered appliance subjected to this test
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-pef-2021-2279`

###### Nitrogen oxides from diesel hot testing (`diesel_test_nox`)

Record aggregated direct nitrogen oxides released to unspecified air from the included test, expressed on the site's declared measurement basis. The exact Tiangong UUID remains unresolved.

- Selected flow: Nitrogen oxides to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: Representative measured release or documented site calculation attributed to the declared product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg finished covered appliance subjected to this test
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `ifc-metal-products-ehs-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multi-product facilities and shared operations | First avoid allocation through product-specific bills of materials, submetering, test logs, waste records, and subdivision of independently measurable processes. | `eu-pef-2021-2279` |
| `allocation_physical` | residual shared foreground inputs and outputs | Where subdivision is not feasible, use a documented causal physical relationship: machine time for fabrication energy, measured material throughput for material-handling burdens, test duration or measured fuel for test-cell burdens, and treated flow or pollutant load for wastewater treatment. | `eu-pef-2021-2279` |
| `allocation_other` | shared burdens without a defensible physical relationship | Use another allocation basis, including economic allocation, only after documenting why subdivision and a causal physical basis are infeasible; disclose the basis, period, products, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_scrap` | steel scrap and treatment residuals | Report scrap and residuals as waste outputs at the foreground hand-off. Do not apply an avoided-burden credit inside this factory-gate inventory unless the downstream modelling framework explicitly requires it and the corresponding allocation method is disclosed without double counting. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_mass` | `fabrication_assembly` | finished reference product | final inspection and dispatch record | model; serial or batch; accepted quantity; net finished mass; included components; packaging convention; timestamp | calibrated scale or controlled engineering mass record reconciled to dispatch | kg | each accepted unit or homogeneous batch | same reporting period as inventory | all manufacturing sites in scope | sum accepted net mass; normalize inventory to 1 kg | calibration record; acceptance record; reconciliation to dispatch |
| `cp_bom_materials` | `fabrication_assembly` | material inputs | product-specific bill of materials and stock issue | model; material identity; grade; form; supplier; issued mass; returned mass; purchased-component dataset; batch | reconcile controlled BOM, purchase receipt, and stock issue/return records | kg | each production order | representative annual period or declared campaign | all included fabrication and assembly sites | issued minus returned mass by atomic material and product order | approved BOM revision; supplier specification; stock reconciliation |
| `cp_energy_records` | `fabrication_assembly` | electricity input | meter and production record | meter id; opening and closing readings; unit; loss boundary; product output; machine time; allocation driver; grid supplier | read calibrated submeters where available; otherwise reconcile invoice totals and documented allocation | kWh and MJ | monthly or each campaign | at least 12 consecutive months unless campaign production is justified | all included sites and shared utilities | subtract excluded loads; allocate under Section 7; convert kWh to MJ | meter calibration; invoices; allocation worksheet; production reconciliation |
| `cp_gas_and_fuel_records` | `fabrication_assembly`; `gas_hot_test`; `diesel_hot_test` | industrial oxygen and test fuels | supplier delivery, meter, tank, and test log | product model; test id; gas or fuel identity; opening and closing readings; delivered quantity; returns; temperature; pressure; moisture; density; test duration | reconcile corrected meters or tank/cylinder mass balance to individual test logs | m3 or kg | each delivery and test | all tests in reporting period | included cutting equipment and test cells | net consumption by atomic gas or fuel; allocate only documented shared losses | meter calibration; supplier ticket; tank reconciliation; signed test log |
| `cp_water_and_chemical_records` | `aqueous_surface_treatment` | process water and sodium hydroxide | meter, batch sheet, and chemical issue | bath id; water reading; solution mass; concentration; make-up; disposal; treated product mass; timestamp | reconcile water meter and batch dosing records to treated production | kg | each bath make-up and monthly meter close | all applicable treatment batches in reporting period | included onsite aqueous treatment lines | convert solution to pure chemical plus carrier water; allocate by treated mass or measured load | meter calibration; certificate of analysis; batch record; inventory reconciliation |
| `cp_waste_records` | `fabrication_assembly` | post-industrial steel scrap | segregated weigh ticket and waste manifest | material; gross and tare mass; contamination; destination; date; product order or allocation driver | weigh segregated containers or perform reconciled product-specific mass balance | kg | each shipment; allocate monthly | same reporting period as production | all included fabrication sites | sum net mass by waste identity; allocate under Section 7 | calibrated scale; manifest; recycler receipt; mass-balance check |
| `cp_wastewater_and_sludge_records` | `aqueous_surface_treatment` | wastewater and sludge | discharge meter, tank transfer, laboratory, and manifest | flow or volume; density; pH; relevant metals; treatment point; sludge gross/tare; moisture or dry solids; destination | measure discharge/transfer and weigh sludge; retain representative composition and moisture tests | kg | continuous or each batch/dispatch | all applicable treatment operation in reporting period | included treatment lines and onsite wastewater treatment | convert volume to mass using documented density; aggregate separately by waste state | meter calibration; laboratory report; manifest; tank or mass reconciliation |
| `cp_direct_emissions` | `fabrication_assembly`; `gas_hot_test`; `diesel_hot_test` | direct air emissions | stack/fugitive monitoring and calculation file | source; pollutant; concentration or factor; flow; operating time; fuel use; abatement; test id; compartment; method | representative measurement where available or documented calculation from collected activity data and approved factor | kg | monitoring schedule adequate for representative data; calculations each reporting period | same period and operating conditions as activity data | every included onsite source | calculate released mass after abatement; allocate causally and normalize to product mass | accredited or documented method; calibration; raw results; factor provenance; uncertainty review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | every variable inventory row | normalized amount = attributable reporting-period amount / accepted net finished-product mass | atomic flow amount; accepted product mass from `cp_product_mass` | flow amount per 1 kg finished covered appliance | `eu-pef-2021-2279` |
| `calc_bom_net_use` | material inputs | net material use = issued mass - unused returned mass; separately model purchased-component datasets and prevent double counting their embodied materials | BOM; stock issue; returns; component dataset boundary | atomic material input per reference flow | `eu-pef-2021-2279` |
| `calc_electricity` | `fabrication_electricity` | attributable MJ = attributable metered kWh × 3.6 | meter readings; excluded loads; allocation driver | MJ electricity per reference flow | `eu-pef-2021-2279` |
| `calc_gas_volume` | `natural_gas_test`; `industrial_oxygen` | convert actual volume to the declared reference condition using documented temperature, absolute pressure, compressibility, and moisture correction; do not apply an undocumented default | actual volume; temperature; pressure; moisture; correction method | m3 at declared conditions per reference flow | |
| `calc_solution_mass` | `sodium_hydroxide` | pure NaOH mass = solution mass × verified mass fraction; record carrier water in `process_water` where it crosses the boundary | solution mass; certificate or batch concentration | kg sodium hydroxide per reference flow | `ifc-metal-products-ehs-2007` |
| `calc_direct_emissions` | `gas_test_co2`; `diesel_test_co2`; `gas_test_nox`; `diesel_test_nox`; `fabrication_particulate` | released mass = representative measured mass or collected activity data × documented factor, adjusted only for measured abatement and allocated under Section 7 | monitored release or activity record; factor provenance; abatement; allocation driver | kg direct elementary emission per reference flow | `eu-pef-2021-2279`; `ifc-metal-products-ehs-2007` |
| `calc_mass_balance` | material inputs, product, and solid wastes | reconcile input material mass to finished-product mass, returned stock, recorded wastes, and documented changes in work in progress; investigate material-specific gaps | BOM net use; product mass; returns; waste; work in progress | material-specific reconciliation and completeness finding | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain model, product subtype, intended fuel or handled material, rated capacity, configuration, and approved specification for every represented product. | specification; nameplate; final acceptance record |
| `dq_product_specificity` | bill of materials and manufacturing activity | Use the actual product-specific BOM and company-specific manufacturing activity; averaging across models requires a mass-weighted representative mix and disclosure of every included model. | controlled BOM; production mix; allocation worksheet |
| `dq_temporal` | all foreground records | Use one common representative reporting period, normally 12 consecutive months; justify campaign data, shutdowns, abnormal tests, and extrapolation. | dated records; operating calendar; representativeness review |
| `dq_geography_technology` | upstream datasets | Match supplier geography, material grade, production technology, electricity supply, fuel state, and waste-treatment route where material; document proxies. | supplier data; dataset metadata; proxy log |
| `dq_completeness` | inventory | Reconcile product mass, material issues, energy invoices/meters, test logs, and waste manifests; add every omitted product-specific material, test fuel, finishing chemical, waste, and direct emission as a separate atomic flow. | mass and energy reconciliation; omission register; signed review |
| `dq_emissions` | direct emissions | Use monitoring frequency and conditions sufficient to represent included operation, retain factor provenance and abatement status, and do not import upstream emissions into foreground direct-emission rows. | raw monitoring; method; calibration; calculation file; boundary check |
| `dq_uncertainty` | calculated and allocated values | Document measurement uncertainty, factor uncertainty, allocation sensitivity, and the effect of unresolved UUIDs and missing empirical ranges. | uncertainty register; sensitivity calculation; review sign-off |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | Fail validation when product subtype, model/configuration, intended fuel or handled material, rated capacity, product mass convention, manufacturing site, or factory-test route is missing. | `un-cpc-3-0-2025` |
| `validate_reference_mass` | normalization | Require `covered_appliance_output` to equal exactly 1 kg after normalization and reconcile the denominator to accepted finished-product mass records. | `eu-pef-2021-2279` |
| `validate_process_routes` | conditional processes | Require every applicable onsite surface-treatment and hot-test route to be included; require inapplicable routes to be explicitly declared rather than represented with invented zero values. | `ifc-metal-products-ehs-2007` |
| `validate_atomic_inventory` | inventory rows | Reject combined material, fuel, utility, waste, wastewater-and-residue, or emission-group rows. Require each actual unlisted BOM material, fuel, chemical, waste, and direct emission to be added as one atomic exchange. | `eu-pef-2021-2279` |
| `validate_balance` | material and energy records | Require product-specific BOM reconciliation, electricity reconciliation, test-fuel reconciliation, and documented explanations for material mass-balance gaps. | `eu-pef-2021-2279` |
| `validate_emission_boundary` | direct elementary emissions | Reject upstream electricity, material, fuel-supply, or waste-treatment emissions in foreground direct-emission rows; require source, method, compartment, abatement, and allocation evidence for each direct release. | `ifc-metal-products-ehs-2007`; `eu-pef-2021-2279` |
| `validate_unresolved` | UUID and range review | Report unresolved UUID rows and unresolved empirical range needs as incomplete review items; do not substitute proxy UUIDs or invented ranges. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific factory-gate foreground manufacturing dataset |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Cradle-to-gate studies of the declared covered appliance; upstream input to expanded installation, use, maintenance, or end-of-life models when those later stages are modelled separately |
| excluded_use | Comparative assertions between products with different function, rated capacity, duty, service life, fuel compatibility, or configuration; representation of complete ovens/furnaces, spare parts, services, customer-site commissioning, use-phase combustion, or end-of-life |
| required_metadata | PCR id and version; product subtype; model/configuration; intended fuel or handled material; rated thermal or handling capacity; net product mass convention; production route; sites and geography; reporting period; product mix; test route and test fuel; allocation; upstream datasets; waste destinations; external packaging treatment; unresolved identities; cut-offs |
| required_quality_disclosure | Primary-data share; BOM and activity representativeness; meter and scale quality; mass/energy reconciliation; allocation and sensitivity; emission method and factor provenance; upstream proxy use; uncertainty; unresolved UUIDs; missing empirical ranges |
| update_trigger | Material change in product design, principal material grade, supplier or upstream dataset, production technology, site, electricity supply, surface-treatment route, test route or fuel, waste treatment, allocation, or reporting period; or resolution of a listed UUID/range evidence gap |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 43410 product identity and classification boundary |
| `ifc-metal-products-ehs-2007` | official_guidance | International Finance Corporation, Environmental, Health, and Safety Guidelines for Metal, Plastic, and Rubber Products Manufacturing, 30 April 2007, https://www.ifc.org/content/dam/ifc/doc/2000/2007-metal-plastic-rubber-products-ehs-guidelines-en.pdf (retrieved 2026-09-05) | Forming/finishing process decomposition; fabrication dust; aqueous surface-treatment wastewater, sludge, and monitoring requirements |
| `eu-pef-2021-2279` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, corrected text, https://eur-lex.europa.eu/eli/reco/2021/2279/corrigendum/2022-05-23/oj/eng (retrieved 2026-09-05) | Functional unit and system boundary; product-specific BOM and company-specific manufacturing data; allocation hierarchy; data quality, reporting, and validation |
