---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.air-or-vacuum-pumps-air-or-other-gas-compressors
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Air or vacuum pumps; air or other gas compressors

## 1. Scope and Applicability

This PCR applies to cradle-to-gate foreground data packages for the manufacture of finished air pumps, vacuum pumps, air compressors, and compressors for other gases. It covers product-specific material and component preparation, in-house machining and parts cleaning when performed, thermal joining or surface operations when performed, assembly, factory performance testing, filling of factory-installed lubricants, and packaging up to the manufacturer's gate.

The PCR excludes pumps for liquids, liquid elevators, fans, blowers sold as such, hydraulic or pneumatic power engines, valves, parts sold separately, compressed-air or vacuum service supplied as a utility, installation, distribution after the manufacturer gate, use, maintenance, and end-of-life. A study extending beyond the manufacturer gate shall model those stages separately and shall not mix their flows into this foreground manufacturing package.

The category contains substantially different technologies. The data package shall therefore identify the product as an air pump, vacuum pump, air compressor, or other-gas compressor and shall declare its operating principle and performance conditions. The professional Chinese category title used by the aligned rendering is “空气泵或真空泵；空气或其他气体压缩机”.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.air-or-vacuum-pumps-air-or-other-gas-compressors |
| classification_refs | CPC 3.0: 43230 “Air or vacuum pumps; air or other gas compressors” (`un-cpc-3-0-2025`) |
| covered_products | Finished air pumps; vacuum pumps; positive-displacement or dynamic air compressors; compressors for refrigerants, process gases, and other gases |
| excluded_products | Liquid pumps and liquid elevators; fans and blowers sold separately; hydraulic or pneumatic power engines; valves; parts-only products; compressed-air or vacuum utility service |
| representative_product | Hermetic refrigeration compressor, used only as the declared UUID-bearing representative within the broader covered category |
| production_route | Product-specific material/component receipt and preparation; conditional in-house machining and cleaning; conditional thermal joining or surface operations; assembly, factory testing, and packaging |
| market_state | New, finished, quality-released equipment at the manufacturer gate; net product mass and packaging mass reported separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture of a finished air pump, vacuum pump, air compressor, or other-gas compressor that meets the declared performance specification |
| How much | 1 kg net mass of quality-released finished equipment, excluding transport packaging |
| How well | Product type, operating principle, working gas, lubrication state, rated flow or pumping speed, inlet and discharge or base pressure, input power, and applicable factory test method are declared |
| How long or cycle | One completed manufacturing and factory-release event; no use-life service is included |
| reference_flow_link | `rf_finished_pump_or_compressor` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished equipment at the manufacturer gate |
| Reference product flow | Hermetic refrigeration compressor `a2a3427c-5d93-494b-a1fd-bcab42fea432` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | covered product type; model/family; operating principle; working gas or service; lubricant-injected or lubricant-free state; drive and control configuration; rated flow, capacity, or pumping speed; inlet and discharge pressure or base pressure; test gas and test conditions; rated input power; included accessories; net dry mass; factory-installed fluid mass; packaging state; manufacturing geography; production period |

When constructing a foreground data package, all `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Compressor performance declarations shall identify test conditions compatible with ISO 1217 where applicable; vacuum-pump declarations shall identify the ISO 21360-1 performance quantity and method where applicable. A qualifier outside either standard's scope shall state the manufacturer test method.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure quality-released product mass net of transport packaging. Report factory-installed lubricant or other fluid included in that mass and report packaging separately. |
| `material_mass_basis` | Material, chemical, packaging, waste, and direct-emission rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record actual wet or as-supplied mass and declare grade, concentration, moisture, or coating state when it changes interpretation. |
| `electricity_energy_basis` | Electricity inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered kWh and convert to MJ using 1 kWh = 3.6 MJ; disclose voltage, grid/supplier, geography, and loss boundary. |
| `gas_volume_basis` | Natural gas and industrial oxygen | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State meter reference temperature and pressure, gas composition or purity, and whether the volume is normal, standard, or actual. Do not mix volume bases. |
| `performance_test_basis` | Product release test | Declared product performance | product-specific | For displacement compressors record volume flow and power with operating/test conditions; for vacuum pumps record the applicable volume-flow, base-pressure, compression-ratio, or critical-backing-pressure method and test gas. (`us-doe-10-cfr-431-app-a-2024`; `din-iso-21360-1-2025`) |

## 5. System Boundary

The foreground boundary begins when purchased materials and components are received at the manufacturing site and ends when the tested, quality-released product and its transport packaging are ready to leave the manufacturer gate. Product-specific bills of material and company-specific manufacturing activity are mandatory. Known product inputs, wastes, and direct elementary outputs shall be represented without replacing measured foreground records with category averages. (`eu-pef-method-2021`)

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and components received at the manufacturing site, with supplier state, grade, and included upstream dataset boundary declared |
| starting_condition_role | Cradle-to-gate foreground manufacturing entry condition |
| product_classification_scope | Finished equipment within CPC 3.0 code 43230; separate parts and supplied compressed-air or vacuum services are outside scope |
| recursive_input_rule | A same-category pump or compressor purchased as an input is recorded once as a specific upstream product dataset and is not recursively disassembled into this foreground manufacturing inventory; disclose its role and avoid double counting its bill of materials |
| upstream_dataset_requirement | Every purchased product input requires a geographically and technologically representative upstream dataset or a documented proxy decision; no UUID alone supplies upstream burden data |
| disclosure | Declare manufacturing sites, production period, make-or-buy boundary, processes performed in-house, shared utilities, product-specific BoM, net product mass, packaging, factory test conditions, and any excluded or unmetered operation |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `system_boundary_rule_1` | foreground_manufacturing | Include product-specific material and component inputs, in-house energy and water, processing aids, factory testing, packaging, wastes, and direct emissions from receipt through manufacturer-gate release. | `eu-pef-method-2021` |
| `system_boundary_rule_2` | conditional_processes | Include machining, cleaning, thermal joining, coating, or other surface operations only when performed inside the declared foreground boundary; otherwise represent the purchased component with an upstream dataset and do not duplicate its production. | `jrc-fabricated-metal-products-2020` |
| `system_boundary_rule_3` | completeness | Add every additional product-specific BoM material, process chemical, packaging component, waste stream, and direct elementary flow as its own atomic exchange when known; the listed inventory is a minimum category pattern, not permission to aggregate or omit flows. | `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `material_component_preparation` | Material and component preparation | `required` | Always; record the product-specific BoM and make-or-buy boundary | Product-specific purchased-material and component basis | kg input per kg net finished equipment |
| `machining_parts_cleaning` | In-house machining and parts cleaning | `conditional` | Include when metal removal, compressor-oil washing, or aqueous alkaline parts cleaning occurs on site | Foreground shaping and cleaning | measured inputs and wastes per kg net finished equipment |
| `thermal_joining_surface_operations` | Thermal joining and surface operations | `conditional` | Include when natural-gas heating, oxygen-assisted joining/cutting, or another thermal surface operation occurs on site | Foreground thermal processing | measured gas inputs and direct emissions per kg net finished equipment |
| `assembly_testing_packaging` | Assembly, factory testing, and packaging | `required` | Always; include the actual factory-release test and shipment packaging configuration | Final manufacture and reference-product release | 1 kg net finished equipment plus separately measured packaging |

### Process: Material and component preparation (`material_component_preparation`)

#### Inputs

##### Product flows

###### Cast-iron material (`in_cast_iron`)

Record cast iron entering the product-specific BoM when the equipment contains cast-iron housings or other cast components. The Tiangong UUID remains unresolved because the exact-name candidate has an incompatible classification.

- Selected flow: Cast iron
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied cast-iron mass attributable to the declared product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_procurement`
- Sources: `eu-pef-method-2021`

###### Carbon-steel material (`in_carbon_steel`)

Record carbon steel entering shafts, frames, vessels, fasteners, or other declared product components.

- Selected flow: Carbon Steel `b3b18433-8fd1-4298-98f5-8af11eb64762`
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied carbon-steel mass attributable to the declared product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_procurement`
- Sources: `eu-pef-method-2021`

###### Aluminium-alloy material (`in_aluminium_alloy`)

Record aluminium alloy entering housings, rotors, heat-transfer components, or other declared product components.

- Selected flow: Aluminium alloy `28b47d6d-68b4-4810-b764-01a1fc1352dc`
- Flow property / unit: Mass / kg
- Amount rule: measured as-supplied aluminium-alloy mass attributable to the declared product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_procurement`
- Sources: `eu-pef-method-2021`

###### Insulated winding wire (`in_magnet_wire`)

Record insulated winding wire incorporated into an in-house motor or electromagnetic assembly; exclude it when the complete motor is purchased and represented upstream.

- Selected flow: Magnet wire `2bf8a4db-b29e-404a-ae6c-402adbb77af4`
- Flow property / unit: Mass / kg
- Amount rule: measured winding-wire mass incorporated into the declared product output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_procurement`
- Sources: `eu-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: In-house machining and parts cleaning (`machining_parts_cleaning`)

#### Inputs

##### Product flows

###### Machining and cleaning electricity (`in_machining_electricity`)

Record metered electricity used by machining, coolant circulation, parts washing, and associated in-process equipment when this process is in scope.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity attributable to in-scope machining and parts cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_cleaning_records`
- Sources: `eu-pef-method-2021`; `jrc-fabricated-metal-products-2020`

###### Aqueous parts-cleaning water (`in_process_water`)

Record process water fed to on-site aqueous parts cleaning; do not combine it with cooling-water or sanitary-water records.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: measured process-water mass supplied to parts cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_cleaning_records`
- Sources: `eu-pef-method-2021`

###### Compressor washing oil (`in_compressor_washing_oil`)

Record compressor washing oil used to remove machining residues or clean internal compressor parts when that oil-based route is used.

- Selected flow: Compressor washing oil `a7a72288-977a-4d7e-a200-ed85f83ad84e`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh compressor-washing-oil input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_cleaning_records`
- Sources: `jrc-fabricated-metal-products-2020`

###### Sodium-hydroxide cleaning agent (`in_sodium_hydroxide`)

Record sodium hydroxide on a pure-substance-equivalent basis when an alkaline aqueous cleaning bath contains it; disclose solution concentration and bath-management boundary.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: measured sodium-hydroxide product mass, with concentration recorded for solution products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_cleaning_records`
- Sources: `eu-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap (`out_post_industrial_steel_scrap`)

Record segregated steel chips, turnings, offcuts, and rejected steel parts leaving the foreground process as one post-industrial steel-scrap waste flow.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass sent to the declared waste-management route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_cleaning_records`
- Sources: `eu-pef-method-2021`; `jrc-fabricated-metal-products-2020`

###### Waste lubricating oil (`out_waste_lubricating_oil`)

Record spent compressor washing oil separately from aqueous wastewater and declare recovery or disposal destination.

- Selected flow: Waste lubricating oil `9c1267ee-ba26-4c53-9643-89ae0c5764c4`
- Flow property / unit: Mass / kg
- Amount rule: measured spent oil mass leaving the foreground boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_cleaning_records`
- Sources: `eu-pef-method-2021`; `jrc-fabricated-metal-products-2020`

###### Cleaning wastewater (`out_cleaning_wastewater`)

Record the aqueous waste stream from parts cleaning at the point it leaves the foreground process for on-site or off-site treatment; retain composition and treatment-route evidence.

- Selected flow: Wastewater from cleaning `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass / kg
- Amount rule: measured cleaning-wastewater mass leaving the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_machining_cleaning_records`
- Sources: `eu-pef-method-2021`; `jrc-fabricated-metal-products-2020`

##### Elementary flows

### Process: Thermal joining and surface operations (`thermal_joining_surface_operations`)

#### Inputs

##### Product flows

###### Natural gas for on-site thermal operations (`in_natural_gas`)

Record gaseous natural gas supplied to an in-scope furnace, burner, or thermal surface operation; exclude it when the operation is embodied in a purchased component dataset.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered natural-gas volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_operations_records`
- Sources: `eu-pef-method-2021`; `jrc-fabricated-metal-products-2020`

###### Industrial oxygen for joining or cutting (`in_industrial_oxygen`)

Record industrial oxygen used in an oxygen-assisted joining or cutting operation when that route is performed in-house; disclose purity and reference conditions.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- Flow property / unit: Volume / m3
- Amount rule: metered industrial-oxygen volume at declared reference conditions
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_operations_records`
- Sources: `eu-pef-method-2021`; `jrc-fabricated-metal-products-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from on-site natural-gas combustion (`out_fossil_carbon_dioxide`)

Record fossil carbon dioxide emitted directly from the in-scope natural-gas combustion source. Upstream fuel-supply emissions remain in the upstream natural-gas dataset.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or site-specific calculation reconciled to metered natural gas and documented fuel composition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-pef-method-2021`

### Process: Assembly, factory testing, and packaging (`assembly_testing_packaging`)

#### Inputs

##### Product flows

###### Assembly and factory-test electricity (`in_assembly_electricity`)

Record electricity used for assembly, leak testing, run-in, performance testing, controls programming, and packaging equipment.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered electricity attributable to assembly, factory testing, and packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_test_energy`
- Sources: `eu-pef-method-2021`; `us-doe-compressed-air-sourcebook-2003`

###### Corrugated-cardboard packaging (`in_corrugated_cardboard`)

Record the mass of corrugated cardboard installed as the shipment carton, sleeve, divider, or protective board.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: measured corrugated-cardboard mass installed per shipped product configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-method-2021`

###### EURO wooden pallet (`in_wooden_pallet_euro`)

Record allocated pallet mass only when the shipped product uses a EURO wooden pallet; declare reuse count and allocation without replacing the physical pallet input.

- Selected flow: Wooden pallet (EURO) `96b2b9ac-cfb6-46bf-8ad1-c056e338950a`
- Flow property / unit: Mass / kg
- Amount rule: measured pallet mass divided by the documented number of products and, for reusable pallets, documented uses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-method-2021`

###### Polyethylene packaging film (`in_polyethylene_film`)

Record polyethylene film used for wrapping or moisture protection. The UUID remains unresolved because no candidate passed both semantic and classification review.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured polyethylene-film mass installed per shipped product configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished equipment
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Quality-released representative product (`out_reference_product`)

Record the net mass of finished equipment that passed the declared factory release test. The Tiangong identity is the exact mass-based representative hermetic refrigeration compressor, while other covered equipment types retain their declared type qualifiers.

- Selected flow: Hermetic refrigeration compressor `a2a3427c-5d93-494b-a1fd-bcab42fea432`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net quality-released finished equipment
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: reference flow output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-2025`; `us-doe-10-cfr-431-app-a-2024`; `din-iso-21360-1-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | product_specific_manufacturing | Prefer product-specific metering, batch records, or physical subdivision. Do not allocate a complete factory total when a process- or product-family record is available. | `eu-pef-method-2021` |
| `allocation_rule_2` | shared_processes | If subdivision is not feasible, allocate shared electricity, water, consumables, and wastes using the causal driver that best reflects the operation, such as machine time, test time, processed mass, or measured throughput; document the driver and reconcile allocated totals to the site record. | `eu-pef-method-2021` |
| `allocation_rule_3` | scrap_and_recovered_material | Report physical scrap and waste outputs without an avoided-production credit inside the foreground manufacturing process. Any recycling substitution or end-of-life credit belongs to a separately declared system model. | `eu-pef-method-2021` |
| `allocation_rule_4` | pallet_reuse | Allocate a reusable pallet's measured mass over documented uses and products per use; disclose losses, repair, and return boundary. If evidence is absent, model the pallet as single-use rather than assuming a reuse count. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_procurement` | `material_component_preparation` | product-specific BoM inputs | released BoM, purchase receipt, stock issue | material name; grade; supplier state; gross issue; returned material; incorporated mass; product model; batch output | Reconcile released BoM and weighed issues/returns to production batch | kg | each batch or production order | representative production period, normally at least 12 months or all available production for a newer model | every manufacturing site in scope | sum net incorporated and attributable issue mass, then normalize by net conforming output | approved BoM revision; scale calibration; purchase and stock reconciliation |
| `cp_machining_cleaning_records` | `machining_parts_cleaning` | machining energy, cleaning inputs, and process wastes | submeter, batch log, chemical issue, water meter, waste transfer record | electricity; water; washing oil; sodium-hydroxide product and concentration; batch id; machine hours; steel scrap; spent oil; wastewater; treatment route | Read meters and reconcile consumable issues and waste manifests by batch or causal operating time | kg; MJ | each batch, shift, or meter interval | same period as product output | each site performing the operation | subtract documented non-production use, allocate by causal machine time or throughput, and normalize by net conforming output | meter calibration; bath log; waste manifest; mass-balance review |
| `cp_thermal_operations_records` | `thermal_joining_surface_operations` | gaseous thermal inputs | gas meter, cylinder issue, production log | natural-gas volume; oxygen volume; reference conditions; purity; operation hours; batch output | Reconcile gas meters or cylinder changes to production orders | m3 | each batch or meter interval | same period as product output | each site performing the operation | convert to one declared volume basis, allocate by causal operation time or throughput, and normalize by net conforming output | meter certificate; supplier certificate; production log |
| `cp_direct_air_emissions` | `thermal_joining_surface_operations` | direct fossil carbon dioxide | stack measurement or site emission record | CO2 mass or concentration and flow; natural-gas volume; fuel composition; operating hours; batch output | Use direct measurement where available; otherwise retain the separate source-backed calculation record used by the site | kg | each monitored period | same period as thermal inputs | each direct-emission source in scope | reconcile to fuel record and normalize by net conforming output | monitoring report; instrument calibration; fuel certificate; calculation worksheet |
| `cp_assembly_test_energy` | `assembly_testing_packaging` | assembly and release-test electricity | submeter, test stand log, production counter | electricity; product model; test duration; test gas; inlet/discharge/base pressure; rated flow or pumping speed; conforming output | Link test-stand and assembly energy to released serial numbers or production batches | MJ | each batch or test sequence | same period as product output | every assembly and test site | exclude failed-test energy only if failed products and their treatment are separately recorded; normalize by net conforming output | calibrated meter; test report; serial-number traceability |
| `cp_packaging_records` | `assembly_testing_packaging` | installed shipment packaging | packaging specification, issue record, scale record, pallet ledger | cardboard mass; pallet standard and mass; film polymer and mass; products per pallet; documented pallet uses; losses | Weigh the approved package configuration and reconcile packaging issues to shipped units | kg | each package design and when changed | current packaging configuration during study period | every dispatch configuration in scope | allocate shared and reusable packaging using recorded products and uses, then normalize by net product mass | approved packaging specification; scale calibration; pallet tracking record |
| `cp_finished_output` | `assembly_testing_packaging` | quality-released product output | calibrated scale and release record | product model; serial or batch; net dry mass; installed fluid mass; accessories; packaging mass; pass/fail result; test method | Weigh quality-released product net of transport packaging and link to factory test result | kg | each unit or statistically controlled batch | same period as all foreground inputs | every final assembly site | sum net conforming output only and preserve rejected-product treatment records | scale calibration; release certificate; factory test report |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_mass` | all inventory rows | attributable row amount ÷ net mass of quality-released output | row amount; `cp_finished_output` net conforming output | amount per 1 kg net finished equipment | `eu-pef-method-2021` |
| `calc_electricity_mj` | electricity rows | metered kWh × 3.6 | metered kWh | MJ electricity | `eu-pef-method-2021` |
| `calc_solution_active_mass` | sodium-hydroxide cleaning agent | as-supplied solution mass × measured or supplier-certified mass fraction | solution mass; NaOH mass fraction | kg sodium hydroxide equivalent, with solution mass retained in supporting record | `eu-pef-method-2021` |
| `calc_reusable_pallet_share` | EURO wooden pallet | measured pallet mass ÷ documented lifetime uses ÷ documented products per use | pallet mass; uses; products per use | kg pallet attributable to reference product | `eu-pef-method-2021` |
| `calc_shared_process_allocation` | shared manufacturing records | total measured amount × documented product causal share; sum of product shares shall equal the total | measured total; machine/test time or throughput by product | product-attributable amount | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve product type, model, operating principle, working gas, lubrication state, rated performance, pressures, power, accessories, test method, and net mass. | released specification; nameplate; BoM; factory test report |
| `dq_bom_completeness` | material and packaging inputs | Reconcile the released product-specific BoM and packaging specification to actual issues and returns; add unlisted materials as atomic rows rather than aggregating them. | BoM reconciliation signed by production or engineering |
| `dq_foreground_completeness` | all processes | Account for all known energy, water, materials, wastes, and direct emissions within the declared site boundary and explain exclusions. | completeness checklist tied to process map and site records |
| `dq_temporal_geographic` | all foreground records | Use one consistent production period and identify every site; explain shutdowns, ramp-up, outsourcing changes, or non-representative campaigns. | production calendar; site list; variance review |
| `dq_measurement_traceability` | measured flows | Retain meter/scale identity, calibration status, reading period, raw unit, conversion, allocation driver, and reconciliation result. | calibration certificates; raw exports; signed calculation workbook |
| `dq_waste_and_emissions` | waste and elementary outputs | Preserve composition, hazardous classification where applicable, treatment destination, and whether direct emissions were measured or calculated. | waste manifest; laboratory result; monitoring report |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | identity_and_reference_flow | Reject a package that omits any required product qualifier, mixes net product and packaging mass, or lacks a traceable factory test compatible with the declared product type. | `us-doe-10-cfr-431-app-a-2024`; `din-iso-21360-1-2025`; `us-doe-compressed-air-sourcebook-2003` |
| `validation_rule_2` | inventory_balance | Confirm that product-specific BoM inputs, separately measured packaging, finished output, scrap, wastes, and retained factory-installed fluids are reconcilable on a documented mass basis; investigate rather than force-close unexplained differences. | `eu-pef-method-2021` |
| `validation_rule_3` | conditional_routes | A conditional process marked not applicable shall have evidence that it is outsourced, absent, or embodied in purchased components; otherwise collect its atomic exchanges. | `jrc-fabricated-metal-products-2020` |
| `validation_rule_4` | energy_and_gases | Reconcile electricity to meter totals after allocation; preserve kWh before MJ conversion; confirm gas reference conditions and purity before aggregating volumes. | `eu-pef-method-2021` |
| `validation_rule_5` | uuid_and_localization | Confirm every UUID-bearing English and Chinese row has the same UUID and uses the public state-100 English and Chinese base names; keep `in_cast_iron` and `in_polyethylene_film` UUID-empty until classification-compatible exact candidates are verified. |  |
| `validation_rule_6` | evidence_and_ranges | Do not infer an external empirical range without at least two independent, original-text-verified and boundary-compatible sources. Until then require foreground records and preserve the manifest range-evidence needs. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific cradle-to-gate foreground manufacturing dataset |
| downstream_use | `secondary_dataset`; `background_dataset` when product identity, geography, technology, time, and make-or-buy boundary are compatible |
| allowed_use | Manufacturing-footprint modelling, supplier comparison within compatible specifications, component or system LCAs, and later life-cycle model projection with separately modelled downstream stages |
| excluded_use | Direct comparison of unlike pump/compressor technologies or performance duties; representation of compressed-air or vacuum utility service; use-stage energy modelling without a declared duty profile; parts-only products; liquid pumps |
| required_metadata | PCR id/version; product type/model; working gas; operating principle; lubrication state; rated performance and pressures; test method/conditions; input power; net mass; installed fluids; accessories; BoM revision; packaging; sites; geography; production period; make-or-buy boundary; allocation drivers; upstream dataset choices |
| required_quality_disclosure | Foreground coverage; meter and scale calibration; BoM reconciliation; shared-process allocation; conditional-process applicability; waste and emission measurement; unresolved UUIDs; absence of external empirical ranges |
| update_trigger | Product design or BoM revision; supplier/material change; manufacturing-site or make-or-buy change; test method or performance rating change; packaging change; process/energy mix change; new exact Tiangong identity; new independent compatible range evidence; or material data-quality finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Ver. 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 43230 identity and scope anchor |
| `eu-pef-method-2021` | Official guidance (`official_guidance`) | European Commission, Commission Recommendation (EU) 2021/2279, consolidated English PDF, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230 (retrieved 2026-09-05) | Product-specific BoM, company-specific manufacturing records, input/output completeness, allocation, data quality, and reporting |
| `jrc-fabricated-metal-products-2020` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Environmental Management Practice in the Fabricated Metal Products sector, 2020, https://publications.jrc.ec.europa.eu/repository/bitstream/JRC119281/jrc119281_jrc_bemp_fabricated_metal_product_manufacturing_report.pdf (retrieved 2026-09-05) | Machining, metalworking fluids, cleaning, surface operations, assembly, utilities, and fabricated-metal process decomposition |
| `us-doe-compressed-air-sourcebook-2003` | Official guidance (`official_guidance`) | U.S. Department of Energy, Improving Compressed Air System Performance: A Sourcebook for Industry, 2003, https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf (retrieved 2026-09-05) | Compressor technology, lubricant state, air quality, capacity, pressure, and performance qualifiers |
| `us-doe-10-cfr-431-app-a-2024` | Standard (`standard`) | U.S. Department of Energy, 10 CFR part 431, subpart T, appendix A, Uniform Test Method for Certain Air Compressors, 2024 annual edition, https://www.govinfo.gov/content/pkg/CFR-2024-title10-vol3/pdf/CFR-2024-title10-vol3-part431-subpartT-appA.pdf (retrieved 2026-09-05) | Official measurement requirements for compressor volume flow, inlet and discharge pressure, temperature, condensate, and packaged compressor power input; incorporates the applicable ISO 1217:2009 provisions by reference |
| `din-iso-21360-1-2025` | Standard (`standard`) | DIN ISO 21360-1:2025-04, Vacuum technology — Standard methods for measuring vacuum-pump performance — Part 1: General description (ISO 21360-1:2020), https://www.dinmedia.de/de/norm/din-iso-21360-1/389352087 (retrieved 2026-09-05) | Official standards-body description of methods for vacuum-pump volume flow, base pressure, compression ratio, and critical backing pressure |
