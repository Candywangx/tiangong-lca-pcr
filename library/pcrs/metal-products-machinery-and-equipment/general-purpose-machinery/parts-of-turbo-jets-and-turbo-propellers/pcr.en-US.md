---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-turbo-jets-and-turbo-propellers
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts of turbo-jets and turbo-propellers

## 1. Scope and Applicability

This PCR covers gate-to-gate manufacture of new turbo-jet and turbo-propeller engine parts from a purchased near-net-shape preform through precision machining and the applicable thermal, surface, joining, cleaning, and inspection operations to one unpackaged finished conforming part at the manufacturer's factory gate. It applies to blades, vanes, discs, shafts, casings, combustor parts, and other identifiable engine parts sold separately. It excludes complete engines, auxiliary power units, non-engine aircraft parts, tooling, repair and overhaul, engine assembly or installation, use, maintenance, post-gate transport, packaging, and end-of-life. The declared part number, drawing revision, alloy grade, criticality category, manufacturing route, production site, and acceptance status are mandatory foreground descriptors.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.parts-of-turbo-jets-and-turbo-propellers |
| classification_refs | CPC 3.0: 43155, Parts of turbo-jets and turbo-propellers |
| covered_products | New, separately supplied finished parts designed for turbo-jet or turbo-propeller engines, including blades, vanes, discs, shafts, casings, and combustor parts |
| excluded_products | Complete engines; auxiliary power units; other reaction engines; non-engine aircraft parts; tooling; repaired or overhauled parts; packaging |
| representative_product | One unpackaged finished conforming turbine-engine part identified by part number and drawing revision |
| production_route | Purchased near-net-shape preform followed by precision machining, with heat treatment, joining, chemical milling, coating, cleaning, and non-destructive inspection included only when performed for the declared part |
| market_state | New, clean, unpackaged, accepted part at the manufacturer's factory gate, not installed in an engine |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A new turbo-jet or turbo-propeller engine part conforming to its approved design data |
| How much | 1 kg net mass of accepted finished part |
| How well | Conforms to the declared part number, drawing revision, material specification, process route, and acceptance criteria |
| How long or cycle | One completed manufacturing and acceptance cycle; no use-life service is credited |
| reference_flow_link | `rf_finished_engine_part` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Parts of turbo-jets and turbo-propellers `4dfe38dc-4e31-4840-b627-49ca65a2accd` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part number; drawing revision; engine model or approved applicability; alloy and material specification; criticality category; manufacturing route; production site and geography; production period; new-part state; acceptance and inspection status; net-mass measurement basis; unpackaged factory-gate state |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, or an equivalent field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | accepted reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net mass after final cleaning and acceptance; exclude removable protective caps, fixtures, transport packaging, and rejected parts. |
| `electricity_energy` | purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Record metered delivered electricity in MJ; when records are in kWh, multiply by exactly 3.6 MJ/kWh and retain the original reading. |
| `gas_volume` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | State temperature, pressure, and whether the meter reports actual or standardized volume; do not combine gas with electricity. |
| `material_mass` | preform, chemicals, scrap, wastewater, and direct CO2 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass crossing the process boundary; state solution concentration for sodium hydroxide and whether wastewater is wet mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground system | Begin when the purchased preform enters the manufacturing site and end when the unpackaged part passes final acceptance at the factory gate; include machining and every declared on-site conditional operation, utilities, direct emissions, rejects, and wastes. | `us-epa-aerospace-ctg-1997`; `nasa-cr-159464-1979` |
| `boundary_upstream_inputs` | purchased inputs | Represent production of the preform, electricity, gas, water, and chemicals with separate upstream datasets; do not reproduce their upstream production inside this foreground dataset. |  |
| `boundary_exclusions` | excluded stages | Exclude capital equipment, tooling production, worker travel, packaging, post-gate transport, engine assembly, installation, use, maintenance, repair, overhaul, and end-of-life unless the study explicitly expands the boundary and reports them separately. |  |
| `boundary_route_disclosure` | conditional operations | Include heat treatment, chemical milling, coating, joining, and their cleaning or waste treatment only when actually performed for the declared part; disclose every included and not-applicable route. | `us-epa-aerospace-ctg-1997` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased near-net-shape engine or turbine part preform received at the manufacturing-site gate |
| starting_condition_role | Upstream supplied intermediate and starting product for foreground finishing |
| product_classification_scope | Finished parts of turbo-jets and turbo-propellers; the starting preform may lie in a broader engine-and-turbine-parts class |
| recursive_input_rule | Record the received preform once as an input. If it is supplied by another facility and would otherwise invoke this PCR recursively, stop tracing at the declared received-preform condition and link a separate upstream preform dataset. |
| upstream_dataset_requirement | The upstream dataset must identify alloy grade, preform route, product state, supplier geography, delivery condition, and mass delivered. |
| disclosure | Disclose the preform identity, alloy specification, forming or casting route, supplier boundary, included finishing steps, and any same-category recursion cut. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `preform_receipt` | Preform receipt and preparation | required | Always; use the actual purchased preform entering the site | foreground starting condition | kg preform received per kg accepted part |
| `precision_machining` | Precision machining and mechanical finishing | required | Always; record actual machining and cleaning operations | foreground production | kg accepted machined part output |
| `thermal_processing` | Heat treatment | conditional | Include when furnaces or thermal cycles are operated for the declared part | foreground conditioning | kg thermally processed part output |
| `surface_processing` | Chemical milling, coating, and surface cleaning | conditional | Include each operation actually performed for the declared part | foreground surface conditioning | kg surface-processed part output |
| `final_inspection` | Final inspection and acceptance | required | Always | foreground quality acceptance | kg accepted finished part |

### Process: Preform receipt and preparation (`preform_receipt`)

#### Inputs

##### Product flows

###### Purchased near-net-shape preform (`purchased_preform`)

Record the actual delivered preform mass and retain its alloy grade, forming route, supplier, and delivery state.

- Selected flow: Near-net-shape engine and turbine part preforms `3789e1b9-f247-49c1-97ad-6036de9b6976`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured accepted preform mass issued to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

### Process: Precision machining and mechanical finishing (`precision_machining`)

#### Inputs

##### Product flows

###### Machining electricity (`machining_electricity`)

Record delivered electricity consumed by the machining cell for the production order.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: metered machining-cell electricity allocated from machine time when direct submetering is unavailable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Machining process water (`machining_process_water`)

Record process water crossing the machining boundary as make-up or cleaning water.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured make-up and cleaning water attributable to the production order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Cutting-fluid concentrate (`cutting_fluid_concentrate`)

Record only fresh cutting-fluid concentrate consumed by the included machining operations.

- Selected flow: Metalworking cutting fluid concentrate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured concentrate make-up consumed, excluding recirculated working fluid retained in the system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

#### Outputs

##### Waste flows

###### Nickel-based superalloy machining scrap (`nickel_superalloy_scrap`)

Record segregated nickel-based superalloy chips, swarf, and rejected material leaving the process as waste.

- Selected flow: Nickel-based superalloy machining scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured segregated chips, swarf, and rejected material; not applicable when the part contains no nickel-based superalloy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Titanium-alloy machining scrap (`titanium_alloy_scrap`)

Record segregated titanium-alloy chips, swarf, and rejected material leaving the process as waste.

- Selected flow: Titanium-alloy machining scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured segregated chips, swarf, and rejected material; not applicable when the part contains no titanium alloy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Stainless-steel machining scrap (`stainless_steel_scrap`)

Record segregated stainless-steel chips, swarf, and rejected material leaving the process as waste.

- Selected flow: Stainless-steel machining scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured segregated chips, swarf, and rejected material; not applicable when the part contains no stainless steel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

###### Aluminium-alloy machining scrap (`aluminium_alloy_scrap`)

Record segregated aluminium-alloy chips, swarf, and rejected material leaving the process as waste.

- Selected flow: Aluminium-alloy machining scrap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured segregated chips, swarf, and rejected material; not applicable when the part contains no aluminium alloy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources:

### Process: Heat treatment (`thermal_processing`)

#### Inputs

##### Product flows

###### Furnace natural gas (`thermal_natural_gas`)

Record gaseous natural gas delivered to included fuel-fired heat-treatment equipment.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3 `93a60a57-a3c8-12da-a746-0800200c9a66`
- Amount rule: metered gas consumed by included heat-treatment cycles; not applicable for all-electric furnaces
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources:

###### Heat-treatment electricity (`thermal_electricity`)

Record delivered electricity consumed by included furnaces and their auxiliaries.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: metered electricity for included furnace cycles and auxiliaries
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources:

#### Outputs

##### Elementary flows

###### Direct fossil carbon dioxide (`thermal_fossil_co2`)

Record fossil carbon dioxide emitted directly from on-site fuel combustion in heat treatment.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured stack emission or calculated direct fossil CO2 from metered furnace fuel and documented fuel carbon content; exclude upstream electricity emissions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources:

### Process: Chemical milling, coating, and surface cleaning (`surface_processing`)

#### Inputs

##### Product flows

###### Surface-process water (`surface_process_water`)

Record process water delivered to included chemical-milling, coating, and cleaning operations.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured make-up and rinse water for included surface operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `us-epa-aerospace-ctg-1997`

###### Sodium hydroxide (`surface_sodium_hydroxide`)

Record sodium hydroxide consumed in an included surface-treatment bath as pure-chemical mass.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured solution make-up converted to sodium-hydroxide mass using recorded concentration; not applicable when sodium hydroxide is not used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_surface_records`
- Sources: `us-epa-aerospace-ctg-1997`

###### Surface-process electricity (`surface_electricity`)

Record electricity consumed by included baths, ventilation, coating, and cleaning equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: metered electricity attributable to included baths, ventilation, coating, and cleaning equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `us-epa-aerospace-ctg-1997`

#### Outputs

##### Waste flows

###### Metal-finishing process wastewater (`metal_finishing_wastewater`)

Record the specific aqueous waste stream leaving included metal-finishing operations for treatment.

- Selected flow: Metal-finishing process wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: measured wet mass discharged to on-site treatment or transferred off site; identify treatment destination and major regulated constituents
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_surface_records`
- Sources: `us-epa-aerospace-ctg-1997`

### Process: Final inspection and acceptance (`final_inspection`)

#### Inputs

##### Product flows

###### Inspection electricity (`inspection_electricity`)

Record electricity consumed by final dimensional, non-destructive, and acceptance inspection equipment.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: metered electricity for dimensional and non-destructive inspection and acceptance equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted finished part
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `faa-ac-33-8-2009`

#### Outputs

##### Product flows

###### Accepted finished engine part (`finished_engine_part`)

Record the unpackaged finished conforming part that passes final acceptance and realizes the reference flow.

- Selected flow: Parts of turbo-jets and turbo-propellers `4dfe38dc-4e31-4840-b627-49ca65a2accd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: exactly 1 kg net accepted part output by reference-flow definition
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-structure-2025`; `faa-ac-33-8-2009`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared manufacturing equipment | Prefer submetering or subdivision by production order, machine time, furnace load, bath throughput, or inspection time before allocation. |  |
| `allocation_shared_resources` | residual shared utilities | Allocate residual shared utilities using a physical driver causally linked to consumption; report the driver and sensitivity when shared burdens are material. |  |
| `allocation_scrap` | segregated metal scrap | Treat machining scrap as a waste output at the factory gate. Do not subtract recycling credit from the reference product unless an explicitly declared consequential scenario is reported separately. |  |
| `allocation_rejects` | rejected parts | Include the burdens of rejected parts produced during the reporting period in accepted output; disclose rejection mass and any rework loop. | `faa-ac-33-8-2009` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `preform_receipt`; `precision_machining` | preform, water, cutting fluid, and segregated scrap | receiving record; issue ticket; scale record; waste manifest | part number; lot; alloy; gross and tare mass; quantity issued; quantity returned; scrap stream | calibrated scales and reconciled production-order records | kg | each lot and production order | representative continuous 12 months or full campaign | all included production lines | sum inputs and outputs, subtract returns, divide by accepted net product mass | calibration, lot traceability, mass-balance reconciliation |
| `cp_energy_records` | `precision_machining`; `thermal_processing`; `surface_processing`; `final_inspection` | electricity and natural gas | submeter; utility meter; equipment runtime log | meter start/end; fuel volume; reference conditions; equipment runtime; load; production order | direct submetering preferred; otherwise allocate metered area energy using equipment runtime and load | MJ; m3 | each batch or monthly with order-level driver | representative continuous 12 months or full campaign | all included equipment and shared services | subtract non-production loads, allocate by documented physical driver, normalize to accepted kg | meter calibration, invoice reconciliation, allocation check |
| `cp_surface_records` | `surface_processing` | water, sodium hydroxide, and wastewater | bath make-up log; concentration test; water meter; discharge record | solution mass; NaOH concentration; make-up and rinse water; wastewater wet mass; treatment destination | calibrated meter or scale plus laboratory concentration record | kg | each bath make-up and discharge event | representative continuous 12 months or full campaign | every included surface line | calculate pure NaOH mass; sum water and wastewater; normalize to accepted kg | concentration certificate, meter calibration, discharge manifest |
| `cp_direct_emissions` | `thermal_processing` | direct fossil CO2 | stack measurement or fuel-carbon calculation record | fuel volume; reference conditions; carbon content; oxidation basis; measured CO2 | validated stack method or documented carbon-balance calculation | kg | each test campaign or reporting period | same period as fuel records | all included fuel-fired equipment | subtract biogenic carbon, prevent overlap with upstream datasets, normalize to accepted kg | method record, fuel certificate, calculation review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | all inventory rows | amount per reference flow = attributable amount / accepted finished-part net mass | attributable amount; accepted net mass | amount per 1 kg accepted part |  |
| `calc_electricity` | electricity rows | MJ = recorded kWh × 3.6; allocate only when direct order-level metering is unavailable | kWh; runtime/load driver; accepted mass | attributable electricity in MJ/kg |  |
| `calc_naoh_mass` | sodium hydroxide | pure NaOH mass = solution mass × measured mass fraction | solution mass; concentration | kg NaOH/kg accepted part | `us-epa-aerospace-ctg-1997` |
| `calc_direct_co2` | direct fossil CO2 | use validated measured CO2 or fuel carbon balance; count on-site combustion only once | gas consumption; carbon content; oxidation basis or measured stack result | kg fossil CO2/kg accepted part |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and preform | Preserve part number, drawing revision, engine applicability, alloy specification, lot, route, supplier state, and acceptance disposition. | approved design/production records and lot traceability; `faa-ac-33-8-2009` |
| `dq_measurement` | meters, scales, and tests | Use calibrated instruments and retain raw readings, conversion factors, allocation drivers, and uncertainty or detection-limit treatment. | calibration and inspection records |
| `dq_temporal` | foreground dataset | Cover a representative continuous 12-month period or the full production campaign; disclose shutdowns, low-volume prototypes, and atypical batches. | dated production and utility records |
| `dq_completeness` | included operations | Reconcile preform, accepted output, rejects, segregated scrap, water, fuel, electricity, chemicals, wastewater, and direct emissions for every applicable process. | mass/energy reconciliation and route checklist |
| `dq_route` | conditional processes | State which heat-treatment, surface, coating, joining, cleaning, and inspection operations were performed and which were not applicable. | traveler, router, or batch record; `us-epa-aerospace-ctg-1997` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference flow | Fail when CPC identity, part number, drawing revision, engine applicability, alloy, route, new-part state, acceptance status, or unpackaged factory-gate state is missing. | `un-cpc-3-0-structure-2025`; `faa-ac-33-8-2009` |
| `validate_reference_mass` | reference output | Require exactly 1 kg net accepted output and exclude rejects, fixtures, protective caps, and packaging from that mass. |  |
| `validate_route_inventory` | process inventory | Require every performed operation in the route record to have corresponding inputs, outputs, utilities, wastes, and direct emissions; require conditional rows to be explicitly not applicable when absent. | `us-epa-aerospace-ctg-1997`; `nasa-cr-159464-1979` |
| `validate_no_double_count` | emissions and upstream datasets | Fail when upstream electricity or fuel-supply emissions are repeated as direct foreground emissions, or when recirculated cutting fluid is counted again as fresh concentrate. |  |
| `validate_mass_balance` | material flows | Investigate unreconciled preform-to-product-plus-scrap mass differences and disclose retained work in progress, evaporation, sampling, or measurement uncertainty. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-manufacturing dataset for an unpackaged accepted turbine-engine part at factory gate |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product-footprint, aircraft-engine supply-chain, procurement, process-improvement, and comparative studies when product identity, route, geography, period, and allocation are compatible |
| excluded_use | Complete-engine manufacture or operation; generic aircraft parts; repair or overhaul; unqualified substitution across alloys, part criticality, routes, or acceptance states |
| required_metadata | PCR id and version; part number; drawing revision; engine applicability; alloy and material specification; criticality category; preform identity; route; site and geography; period; accepted mass; rejection rate; included operations; meter and allocation methods; upstream datasets |
| required_quality_disclosure | data coverage; calibration; supplier-data quality; mass and energy reconciliation; route applicability; allocation; unresolved UUIDs; missing range evidence; uncertainty and limitations |
| update_trigger | Change in part design, alloy, preform route, heat treatment, surface process, supplier, site, energy supply, acceptance criteria, allocation method, or a material shift in rejection or resource intensity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | Official CPC 43155 product identity and classification title |
| `us-epa-aerospace-ctg-1997` | `official_guidance` | U.S. EPA, *Control of Volatile Organic Compound Emissions from Coating Operations at Aerospace Manufacturing and Rework Operations*, EPA-453/R-97-004, December 1997, https://www3.epa.gov/airquality/ctg_act/199712_voc_epa453_r-97-004_aerospace_rework.pdf (retrieved 2026-09-05) | Aerospace component process decomposition; conditional coating, chemical milling, heat treating, cleaning, finishing, and testing; surface-process records |
| `faa-ac-33-8-2009` | `official_guidance` | U.S. Federal Aviation Administration, *Guidance for Parts Manufacturer Approval of Turbine Engine and Auxiliary Power Unit Parts under Test and Computation*, AC 33-8, 19 August 2009, https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_33-8.pdf (retrieved 2026-09-05) | Turbine-engine part identity, criticality, design substantiation, testing, acceptance, and traceability requirements |
| `nasa-cr-159464-1979` | `literature` | L. W. Sink, G. S. Hoppin III, and M. Fujii, *Materials for Advanced Turbine Engines, Project Completion Report, Project 1—Low-Cost Directionally-Solidified Turbine Blades, Volume I*, NASA CR-159464, January 1979, https://ntrs.nasa.gov/api/citations/19790015950/downloads/19790015950.pdf (retrieved 2026-09-05) | Turbine-blade route evidence for casting followed by heat treatment, machining, coating, and inspection/testing |
