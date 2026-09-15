---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.spark-ignition-reciprocating-internal-combustion-piston-engines-of-a-cylinder-capacity-89c81679
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Spark-ignition reciprocating internal combustion piston engines, of a cylinder capacity not exceeding 1000 cc

## 1. Scope and Applicability

This PCR governs foreground factory-gate data packages for complete spark-ignition reciprocating internal combustion piston engines of a kind used for motor vehicles, with total cylinder capacity not exceeding 1000 cc. It covers material and component receipt, on-site machining and cleaning where performed, engine assembly, finishing, and production-line engine testing where performed.

It excludes rotary engines, compression-ignition engines, engines exceeding 1000 cc, aircraft engines, complete vehicles, transmissions, traction batteries, vehicle integration, distribution, use, maintenance, remanufacturing, and end-of-life. Transport packaging is excluded unless it is part of the declared saleable engine supply contract; any included packaging must be reported as separate atomic flows.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.spark-ignition-reciprocating-internal-combustion-piston-engines-of-a-cylinder-capacity-89c81679 |
| classification_refs | CPC 3.0: 43121 (exact contextual reference; acceptance is governed outside this PCR) |
| covered_products | Complete, saleable spark-ignition reciprocating piston engines of a kind used for motor vehicles, with total cylinder capacity <= 1000 cm3 |
| excluded_products | Rotary, compression-ignition, aircraft, incomplete engine-part, engine exceeding 1000 cm3, and complete-vehicle products |
| representative_product | Multi-cylinder gasoline-fuelled reciprocating piston engine supplied as a standalone motor-vehicle engine |
| production_route | Purchased bulk materials, near-net parts, and components; on-site machining/cleaning as applicable; assembly and optional production-line hot testing |
| market_state | Complete factory-gate engine in the declared dry or fluid-filled shipping state, excluding transport packaging unless explicitly declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Factory-gate provision of a complete CPC 43121 engine meeting the declared product specification and production acceptance criteria |
| How much | 1 kg net mass of the complete saleable engine |
| How well | Spark ignition; reciprocating piston design; motor-vehicle type; total cylinder capacity <= 1000 cm3; declared engine family and acceptance status |
| How long or cycle | One production lot at the reporting plant; service life is outside this cradle-to-gate functional unit |
| reference_flow_link | The single reference product flow defined below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Spark-ignition reciprocating internal combustion piston engines, of a cylinder capacity not exceeding 1000 cc `68b3d069-e54c-4940-bf73-0ecce68d5cef` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | engine family and model; exact total cylinder capacity in cm3; cylinder count; two-stroke or four-stroke; aspiration; fuel-metering system; emission-control configuration; rated power; net dry or fluid-filled shipping mass; included fluids; tested production fraction; plant geography; production period; packaging inclusion |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and material/waste mass rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or derive traceable net engine mass in the declared shipping state; exclude transport packaging unless packaging inclusion is declared. Normalize all inventory to 1 kg of this net engine mass. |
| `electricity_energy` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve metered electricity and its conversion to MJ; disclose the original meter unit, conversion factor, voltage level, grid geography, and losses included. |
| `gas_volume` | gaseous natural gas | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Report metered gas volume with temperature, pressure, standard/actual condition, composition or supplier billing basis, and conversion method. |
| `test_allocation` | production-line engine testing | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record the tested fraction and allocate only actual test-cell inputs and direct emissions to saleable production using the declared physical production-lot rule. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased bulk materials, near-net parts, finished components, utilities, and chemicals at the reporting engine-manufacturing factory gate |
| starting_condition_role | Foreground manufacturing start; upstream production of every purchased input is represented by a separate valid dataset |
| product_classification_scope | Complete CPC 43121 motor-vehicle-type spark-ignition reciprocating piston engines with total cylinder capacity <= 1000 cm3 |
| recursive_input_rule | A complete engine from the same category entering as an input must be recorded as a distinct purchased or internally transferred product with origin and prior burden; it must not be silently merged with the reference output |
| upstream_dataset_requirement | Use geographically, technologically, temporally, and product-state representative upstream datasets for all purchased materials, components, energy, water, fuel, and treatment services |
| disclosure | Declare in-house versus purchased component scope, included machining/cleaning/finishing, test fraction and test type, shipping-fluid state, packaging inclusion, cut-offs, data gaps, and treatment destinations |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground manufacturing | Include all on-site material/component receipt, machining, cleaning, assembly, finishing, and supporting utility use that produces the declared saleable engine. | `us-doe-vto-analysis-2020` |
| `boundary_rule_2` | production-line test | Include actual test-engine fuel, electricity, engine throughput, and direct exhaust emissions when production, compliance, or performance testing occurs at the reporting plant. | `us-epa-engine-test-cells`, `us-ecfr-40-cfr-1065-15` |
| `boundary_rule_3` | exclusions | Exclude vehicle integration, vehicle operation, maintenance, remanufacturing, and end-of-life; disclose any capital-goods or employee-activity exclusion separately. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `engine_manufacturing` | Engine component manufacture, cleaning, assembly, and finishing | `required` | Always; record only activities and exchanges inside the declared plant boundary | Foreground production | 1 kg net saleable engine output |
| `production_line_test` | Production-line engine hot test | `conditional` | Include when complete engines are operated at the plant for production, compliance, or performance acceptance | Foreground quality testing | Tested-engine mass and tested fraction per production lot |

### Process: Engine component manufacture, cleaning, assembly, and finishing (`engine_manufacturing`)

#### Inputs

##### Product flows

###### Aluminium alloy input (`aluminium_alloy`)

Record the mass of aluminium alloy crossing the plant boundary for engine castings or other aluminium components; alloy grade and purchased product state remain foreground qualifiers.

- Selected flow: Aluminium alloy
- Flow property / unit: Mass / kg
- Amount rule: purchased mass minus documented returns, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_receipts`
- Sources: `us-doe-vto-analysis-2020`

###### Grey cast iron input (`grey_cast_iron`)

Record grey cast iron used for the declared engine only when it crosses the plant boundary; do not substitute pig iron.

- Selected flow: Grey cast iron
- Flow property / unit: Mass / kg
- Amount rule: purchased mass minus documented returns, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_receipts`
- Sources: `us-doe-vto-analysis-2020`

###### Alloy steel input (`alloy_steel`)

Record alloy steel used in crankshaft, connecting-rod, valve-train, gear, or other engine parts according to the actual bill of materials.

- Selected flow: Alloy steel
- Flow property / unit: Mass / kg
- Amount rule: purchased mass minus documented returns, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_receipts`
- Sources: `us-doe-vto-analysis-2020`

###### Copper wire input (`copper_wire`)

Record copper wire installed in the engine electrical and ignition systems; exclude vehicle-side wiring outside the supplied engine.

- Selected flow: Copper wire
- Flow property / unit: Mass / kg
- Amount rule: bill-of-material mass entering the supplied engine, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_receipts`
- Sources: `us-doe-vto-analysis-2020`

###### Nylon 6 resin input (`nylon_6_resin`)

Record Nylon 6 resin only for Nylon 6 parts manufactured on site or supplied as quantified Nylon 6 content; do not combine it with other polymers.

- Selected flow: Nylon 6 resin
- Flow property / unit: Mass / kg
- Amount rule: bill-of-material or moulding issue mass, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_receipts`
- Sources: `us-doe-vto-analysis-2020`

###### EPDM rubber input (`epdm_rubber`)

Record EPDM rubber installed as declared seals or hoses; other elastomers require their own atomic rows in the concrete data package.

- Selected flow: Ethylene propylene diene monomer rubber
- Flow property / unit: Mass / kg
- Amount rule: bill-of-material mass entering the supplied engine, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_receipts`
- Sources: `us-doe-vto-analysis-2020`

###### Purchased electricity (`electricity_manufacturing`)

Record electrical energy delivered to machining, washing, assembly, finishing, compressed-air, and allocated supporting systems.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered or physically allocated electricity normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_water`
- Sources:

###### Process water (`process_water`)

Record process water entering aqueous cleaning, rinsing, coolant make-up, or other engine-manufacturing operations; cooling water in a closed loop is not double-counted.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered net process-water input normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_water`
- Sources:

###### Sodium hydroxide for aqueous cleaning (`sodium_hydroxide`)

Record sodium hydroxide active mass when an alkaline aqueous-cleaning route is used; solution concentration and purchased state must be retained.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: active sodium-hydroxide mass issued to the cleaning system, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_chemicals`
- Sources:

###### Gaseous natural gas for on-site process heat (`natural_gas`)

Record gaseous natural gas only when consumed on site for process heat allocated to the engine line; supplier and volume reference conditions remain foreground qualifiers.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: metered gas volume physically allocated to engine manufacturing and normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_and_water`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Complete saleable engine (`reference_engine_output`)

Record net output mass after final acceptance in the declared dry or fluid-filled shipping state.

- Selected flow: Spark-ignition reciprocating internal combustion piston engines, of a cylinder capacity not exceeding 1000 cc `68b3d069-e54c-4940-bf73-0ecce68d5cef`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted output mass normalized to exactly 1 kg reference product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_and_waste`
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Aluminium scrap sent to treatment (`aluminium_scrap`)

Record aluminium turnings, offcuts, and rejected aluminium parts leaving the foreground boundary as one aluminium-scrap waste flow.

- Selected flow: Aluminium scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed net aluminium scrap leaving the plant, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_and_waste`
- Sources:

###### Ferrous metal scrap sent to treatment (`ferrous_scrap`)

Record iron and steel turnings, offcuts, and rejected parts leaving the foreground boundary; keep stainless or hazardous-contaminated fractions separate when present.

- Selected flow: Iron and steel scrap
- Flow property / unit: Mass / kg
- Amount rule: weighed net ferrous scrap leaving the plant, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_and_waste`
- Sources:

###### Alkaline wastewater sent to treatment (`alkaline_wastewater`)

Record spent aqueous alkaline cleaning liquid crossing to on-site or off-site wastewater treatment; do not combine it with unrelated sanitary water.

- Selected flow: Alkaline wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered or weighed net alkaline wastewater sent to treatment, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_and_waste`
- Sources:

##### Elementary flows

###### Direct fossil carbon dioxide from on-site natural-gas combustion (`carbon_dioxide_manufacturing`)

Record only direct fossil CO2 emitted inside the foreground boundary; upstream electricity and fuel-supply emissions remain in upstream datasets.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated direct stack CO2 attributable to engine manufacturing, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `us-ecfr-40-cfr-1065-15`

### Process: Production-line engine hot test (`production_line_test`)

#### Inputs

##### Product flows

###### Engine entering the test cell (`reference_engine_test_input`)

Record the mass of complete engines actually operated in the test cell and the tested share of the production lot.

- Selected flow: Spark-ignition reciprocating internal combustion piston engines, of a cylinder capacity not exceeding 1000 cc `68b3d069-e54c-4940-bf73-0ecce68d5cef`
- Flow property / unit: Mass / kg
- Amount rule: total mass of engines actually tested, normalized to 1 kg net saleable engine output; report the resulting tested fraction separately
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_production_test`
- Sources: `us-epa-engine-test-cells`, `us-ecfr-40-cfr-1065-15`

###### Motor gasoline consumed in testing (`motor_gasoline`)

Record only motor gasoline burned by production test engines; grade, biofuel blend, supplier, and fuel-carbon origin must be declared.

- Selected flow: Motor gasoline
- Flow property / unit: Mass / kg
- Amount rule: total measured gasoline consumed by production tests, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_production_test`
- Sources: `us-epa-engine-test-cells`, `us-ecfr-40-cfr-1065-15`

###### Electricity consumed by the test cell (`electricity_test`)

Record electrical energy delivered to the dynamometer, ventilation, cooling, controls, and emission measurement allocated to production testing.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: total metered electricity consumed by production tests, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_production_test`
- Sources: `us-ecfr-40-cfr-1065-15`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Engine leaving the test cell (`reference_engine_test_output`)

Record the same tested-engine mass after testing; rejected engines are not included in accepted reference output until reworked and accepted.

- Selected flow: Spark-ignition reciprocating internal combustion piston engines, of a cylinder capacity not exceeding 1000 cc `68b3d069-e54c-4940-bf73-0ecce68d5cef`
- Flow property / unit: Mass / kg
- Amount rule: total accepted mass of engines leaving production testing, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_production_test`
- Sources: `us-ecfr-40-cfr-1065-15`

##### Waste flows

##### Elementary flows

###### Direct fossil carbon dioxide from testing (`carbon_dioxide_test`)

Record direct fossil CO2 in test-engine exhaust using measured exhaust mass or a documented fuel-carbon balance.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: total measured or calculated CO2 from production tests, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_production_test`
- Sources: `us-ecfr-40-cfr-1065-15`

###### Carbon monoxide from testing (`carbon_monoxide_test`)

Record carbon monoxide emitted to air during production-line engine operation when measured or required by the applicable test protocol.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: total measured carbon monoxide from production tests, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_production_test`
- Sources: `us-ecfr-40-cfr-1065-15`

###### Nitrogen oxides from testing (`nitrogen_oxides_test`)

Record total measured nitrogen oxides emitted to air during production-line engine operation.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: total measured nitrogen oxides from production tests, normalized to 1 kg net saleable engine output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable engine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_production_test`
- Sources: `us-ecfr-40-cfr-1065-15`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | engine-family foreground operations | Avoid allocation by separately metering or recording engine-family material issues, machine energy, cleaning campaigns, assembly lines, test cells, rejects, and wastes. |  |
| `allocation_rule_2` | shared utilities and support operations | When subdivision is impracticable, allocate shared burdens using a documented causal physical driver such as machine-hours, metered energy, cleaning-bath throughput, tested-engine hours, or accepted engine mass; economic allocation requires explicit justification. |  |
| `allocation_rule_3` | scrap and rejected engines | Report scrap and treatment flows at the foreground boundary without an avoided-burden credit; model recycling or recovery consistently in the downstream treatment dataset and disclose any recycled-content convention. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `engine_manufacturing` | material inputs | purchase, issue, return, and bill-of-material records | material identity; grade; purchased state; supplier; gross issue; return; engine family; accepted output mass | reconcile procurement and line-issue records to the declared engine bill of materials | kg | each receipt/issue; periodic reconciliation | complete representative reporting period or full production campaign | all facilities inside the declared plant boundary | net issues divided by accepted net engine mass | invoices; material certificates; BOM revision; scale calibration; reconciliation |
| `cp_energy_and_water` | `engine_manufacturing` | electricity, water, and natural gas | utility meter and allocation records | meter id; start/end; unit; temperature/pressure for gas; allocation driver; production mass | direct submetering preferred; otherwise documented causal allocation | MJ, kg, m3 | continuous or billing interval | same reporting period as production | included production and support meters | net consumption divided by accepted net engine mass | meter calibration; bills; allocation worksheet |
| `cp_cleaning_chemicals` | `engine_manufacturing` | sodium hydroxide | chemical issue and bath-management records | product mass; concentration; active fraction; bath additions; disposal; engine-family throughput | weigh or meter additions and calculate active ingredient mass | kg active NaOH | each addition; monthly reconciliation | same reporting period as production | all included cleaning systems | active ingredient mass divided by accepted net engine mass | supplier certificate; concentration test; issue log |
| `cp_output_and_waste` | `engine_manufacturing` | accepted engine and wastes | production, weighbridge, manifest, and treatment records | accepted engine mass; dry/wet state; reject mass; scrap material; wastewater mass; destination | calibrated scales or traceable volume-density conversion | kg | each lot or shipment | same reporting period as inputs | all included engine lines and waste destinations | segregate material-specific waste, then divide by accepted net engine mass | scale calibration; waste manifest; acceptance record; mass reconciliation |
| `cp_direct_emissions` | `engine_manufacturing` | direct combustion emissions | stack measurement or fuel-carbon calculation | fuel amount; carbon content; oxidation basis; measured concentration; flow; operating time | approved measurement or documented carbon balance | kg | each monitored interval or fuel batch | same reporting period as production | all direct on-site sources allocated to the engine line | sum direct emissions and divide by accepted net engine mass | calibration; laboratory result; fuel certificate; calculation audit |
| `cp_production_test` | `production_line_test` | tested engines, gasoline, electricity, and exhaust | test-cell log, fuel meter, electricity meter, and emission measurement | engine id; engine mass; tested fraction; duration; duty cycle; fuel mass; electricity; exhaust flow; constituent concentration; pass/reject | link synchronized test-cell and production-lot records; determine emitted mass over each test interval | kg, MJ, h | each test | same reporting period as production | every included production test cell | sum all measured production-test exchanges and divide once by accepted net engine mass; do not reapply the tested fraction to aggregated measurements | instrument calibration; test worksheet; lot traceability; pass/reject record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass` | all foreground exchanges | normalized amount = net exchange amount / accepted net engine output mass | net exchange amount; accepted net engine output mass | exchange per 1 kg reference product |  |
| `calc_material_net_issue` | material inputs | net material input = receipts or line issues - documented returns not consumed by the engine line | receipt/issue mass; return mass | net material mass |  |
| `calc_gas_reference_volume` | natural gas | convert actual or billed gas volume to the declared reference condition without mixing volume bases | metered volume; temperature; pressure; compressibility or billing basis | m3 at declared condition |  |
| `calc_emitted_mass` | measured test emissions | emitted mass = integral of constituent mass flow over the test interval; use the applicable continuous or batch sampling calculation | constituent concentration; exhaust flow; test interval | kg emitted constituent | `us-ecfr-40-cfr-1065-15` |
| `calc_test_fraction` | production-line test | When only a per-tested-engine mean is available, multiply it once by the tested-engine count before normalizing to accepted output; when the meter already totals all production tests, normalize that total directly and do not reapply the tested fraction. | measured test exchange; tested engines; accepted engine output mass | test exchange attributable to saleable output | `us-epa-engine-test-cells`, `us-ecfr-40-cfr-1065-15` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Demonstrate spark ignition, reciprocating piston design, motor-vehicle use, and total cylinder capacity <= 1000 cm3 for the declared engine family. | nameplate/specification; homologation or certificate record; BOM and model-family control |
| `dq_mass_balance` | manufacturing inventory | Reconcile material inputs with engine output, process losses, inventory change, returns, scrap, wastewater solids where material, and documented exclusions. | signed mass-balance worksheet; stock records; waste manifests |
| `dq_temporal` | all foreground records | Use a complete representative reporting period or a complete campaign; explain start-up, shutdown, abnormal, prototype, and low-volume conditions. | production calendar; meter coverage; exception log |
| `dq_completeness` | all processes | Reconcile the full accepted engine mass and report every separately hazardous, regulated, or decision-relevant exchange regardless of mass share; quantify and disclose any residual gap. | BOM coverage; completeness calculation; gap register |
| `dq_test_traceability` | production-line test | Prevent double counting between certification/development and production tests and retain the tested production fraction, duty cycle, fuel specification, and constituent method. | test plan; engine/test identifiers; calibration and result files |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | product identity | Reject a data package unless the engine is spark-ignition, reciprocating piston, of a kind used for motor vehicles, and its declared total cylinder capacity is not greater than 1000 cm3. | `un-cpc-3-0-structure-2025` |
| `validation_rule_2` | reference flow | Require the exact reference-flow UUID, Mass property, kg unit, and every required qualifier; verify that net engine mass excludes undeclared transport packaging. | `un-cpc-3-0-structure-2025` |
| `validation_rule_3` | inventory accounting | Require each exchange to be atomic, tied to a process and direction, normalized to 1 kg accepted engine output, and reconciled against production, stock, return, and waste records. |  |
| `validation_rule_4` | production-line test | If testing occurs, require tested-engine input/output identity, tested fraction, fuel and electricity records, and separately reported direct exhaust constituents without double counting aggregate and speciated hydrocarbons. | `us-epa-engine-test-cells`, `us-ecfr-40-cfr-1065-15` |
| `validation_rule_5` | upstream representativeness | Require supplier/product state, geography, technology, time, and allocation disclosures for upstream datasets; unresolved UUID or range evidence remains an explicit review finding. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` after independent review |
| downstream_use | Foreground engine-manufacturing inventories and downstream motor-vehicle process or lifecyclemodel projections |
| allowed_use | Cradle-to-gate comparison of CPC 43121 engines with equivalent reference-flow qualifiers and compatible boundary, geography, technology, and production period |
| excluded_use | Complete-vehicle, use-phase, remanufacturing, end-of-life, aircraft-engine, rotary-engine, compression-ignition, or >1000 cm3 claims without added models |
| required_metadata | PCR id/version; engine family/model; displacement; cylinder count; cycle; aspiration; fuel system; emission control; rated power; shipping-fluid state; tested fraction; plant geography; period; upstream dataset identities; allocation; cut-offs; unresolved findings |
| required_quality_disclosure | primary-data share; meter and BOM coverage; mass-balance closure; temporal representativeness; allocation drivers; test protocol; data gaps; uncertainty; review status |
| update_trigger | engine-family or BOM redesign; displacement/category change; material plant/process/energy change; test-policy change; new exact UUIDs; new two-source compatible range evidence; or loss of temporal representativeness |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Ver. 3.0 Structure, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-05) | English category identity, parent motor-vehicle-engine boundary, and capacity threshold |
| `un-cpc-1-1-chinese` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, Series M No. 77 Ver. 1.1, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-05) | Professional Chinese title and Chinese parent-category terminology for the same code |
| `us-doe-vto-analysis-2020` | `official_guidance` | U.S. Department of Energy, Vehicle Technologies Office, Analysis Program 2020 Annual Progress Report, section I.3, Update of Vehicle Manufacturing Cycle for Light Duty Vehicles, https://www.energy.gov/sites/default/files/2021-07/VTO_2020_APR_ANALYSIS_COMBINED_REPORT_compliant_.pdf (retrieved 2026-09-05) | Powertrain-system material composition and steel, aluminium, plastics, copper wiring, rubber, and cast-iron inventory coverage |
| `us-epa-engine-test-cells` | `official_guidance` | U.S. EPA, Engine Test Cells/Stands: National Emission Standards for Hazardous Air Pollutants, https://www.epa.gov/stationary-sources-air-pollution/engine-test-cellsstands-national-emission-standards-hazardous-air (retrieved 2026-09-05) | Conditional engine-test-cell process and direct exhaust-air exchange requirement |
| `us-ecfr-40-cfr-1065-15` | `standard` | Electronic Code of Federal Regulations, 40 CFR 1065.15, Overview of procedures for laboratory and field testing, https://www.ecfr.gov/current/title-40/chapter-I/subchapter-U/part-1065/subpart-A/section-1065.15 (retrieved 2026-09-05) | Test fuel/work records, exhaust constituent list, emitted-mass measurement, and dynamometer test context |
