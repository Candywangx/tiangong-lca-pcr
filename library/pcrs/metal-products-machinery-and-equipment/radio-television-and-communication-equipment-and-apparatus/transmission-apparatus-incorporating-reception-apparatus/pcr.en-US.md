---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.transmission-apparatus-incorporating-reception-apparatus
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Transmission apparatus incorporating reception apparatus

## 1. Scope and Applicability

This PCR covers factory-gate production of complete transmission apparatus that incorporates a reception function and is placed on the market as one configured item of equipment. It applies across the category only when the declared product identity is consistent with CPC 3.0 code 47211; product-family examples include professional broadcast transmitter-receivers, bidirectional radio-link or wireless-infrastructure transmission equipment, and a base-station or radio-unit configuration only where that marketed equipment is actually classified in this category.

The dataset shall be stratified by equipment family, transmission standard and frequency band, rated throughput or port configuration, power-state profile, chassis/board/RF-module configuration, delivered software functions, and factory-gate delivery boundary. A mobile phone, router, one base-station model, pure receiver, transmitter without reception, camera, or component-only module shall not be used as a proxy for the whole category. Family-specific evidence such as RAN measurement guidance applies only to that family.

The default foreground boundary covers received parts and subassemblies, in-house assembly and configuration, functional and RF/network testing, packaging, and the finished apparatus at the factory gate. Upstream parts production, transport, use, installation, site-support equipment, and end-of-life remain linked background or downstream modules unless the dataset explicitly includes them. A dataset claiming cradle-to-grave coverage shall add those stages consistently with `etsi-es-203199-2025`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.transmission-apparatus-incorporating-reception-apparatus |
| classification_refs | CPC 3.0: 47211, Transmission apparatus incorporating reception apparatus (exact classification context; mapping acceptance is governed separately) |
| covered_products | Complete configured transmission apparatus with an incorporated reception function, including eligible broadcast transmitter-receivers, bidirectional radio links, and eligible wireless-infrastructure transmitter-receiver equipment |
| excluded_products | Mobile phones and other user equipment; routers or switches classified as other network apparatus; pure reception apparatus; transmission apparatus without reception; television, digital or video cameras; separately supplied antennas, RF modules, boards, power units or other parts; site buildings, towers and support systems unless explicitly included |
| representative_product | A finished, configured, functionally tested transmitter-receiver apparatus at the factory gate, represented by a declared equipment-family and performance stratum rather than by one model |
| production_route | Purchased or in-house electronic, RF, power and mechanical subassemblies; assembly and software configuration; calibration and functional/RF/network test; packaging and factory-gate release |
| market_state | Finished equipment, production mix at plant; packaging and included accessories declared separately from the 1 kg equipment mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished transmission apparatus incorporating reception apparatus, in the declared delivered configuration |
| How much | 1 kg net equipment mass, excluding transport packaging unless the delivery boundary explicitly states otherwise |
| How well | Meets the declared transmission/reception functions, standard, band, capacity or port configuration, software feature set, test status, and delivery boundary |
| How long or cycle | One manufacturing campaign and factory-gate release; any operating lifetime and power-state duty cycle are separate declared downstream scenarios |
| reference_flow_link | The functional unit is linked to the single verified Tiangong product flow and normalized by its Mass reference property |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Transmission apparatus incorporating reception apparatus `facdf572-bd31-4e3e-a4d2-eb16f9595202` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | equipment_family; classification_justification; transmission_standard_or_air_interface; frequency_band_and_channel_bandwidth; duplex_and_radio_configuration_if_applicable; rated_throughput_capacity_or_port_configuration; chassis_and_slot_configuration; board_and_rf_module_configuration; power_supply_and_cooling_configuration; measured_power_states_and_load_profile; firmware_software_feature_set_and_version; included_accessories; packaging_inclusion; factory_gate_delivery_boundary; production_geography; production_period; operating_lifetime_if_use_is_modelled |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product description, or an equivalent data-package field. Missing qualifiers make the reference flow incomplete. Comparisons shall not cross equipment families, technologies, bands, capacity or port configurations, or software-enabled performance unless functional equivalence is demonstrated.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh accepted finished equipment without transport packaging; separately report included accessories and any packaging mass. |
| `configuration_stratification` | production aggregation | Mass and declared performance configuration | kg per declared stratum | Do not average mobile phones, routers, pure receivers, non-receiving transmitters, or dissimilar equipment families into this reference flow; separate records when family, standard/band, capacity/ports, chassis/boards/RF configuration, software function, or delivery boundary materially differs. |
| `power_state_measurement` | power profile | Active power and energy | W and kWh | Record measurement boundary, input voltage, enabled modules/ports/carriers, traffic or load state, throughput or RF output where applicable, state duration, software version, and ambient/test conditions; use family-specific methods and never extrapolate a RAN profile to non-RAN equipment. |
| `normalization` | all foreground inventory | Row-specific property | row unit per kg | Divide campaign totals by accepted net reference-product mass from the same configuration stratum and period; preserve raw totals and conversion factors. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received and inspected electronic boards, RF/transceiver and power-amplifier modules, power/cooling assemblies, chassis/mechanical parts, cables/connectors, software/firmware release package, packaging materials and utilities at the manufacturing site |
| starting_condition_role | Foreground production starts at receipt of the declared parts and materials; their upstream production and inbound transport require linked datasets unless explicitly brought into the foreground |
| product_classification_scope | Complete transmission apparatus incorporating reception apparatus; device-family eligibility and CPC 47211 classification justification shall be disclosed |
| recursive_input_rule | A complete same-category apparatus entering as a tested module, returned unit, or remanufacturing input is recorded as an upstream product input and is not recursively decomposed unless a separately bounded refurbishment process is modelled |
| upstream_dataset_requirement | Supplier-specific datasets are preferred for PCBAs, RF/power modules, chassis, power supplies, cooling, cables and packaging; otherwise use technology-, geography- and time-representative background datasets and disclose gaps |
| disclosure | Declare equipment family, configuration stratum, net mass boundary, in-house versus purchased processes, site support allocation, packaging/accessory inclusion, software delivery, excluded life-cycle stages, cut-offs and data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_lifecycle_scope` | dataset boundary | Include received-part records, in-house assembly/configuration, testing, packaging and factory-gate output in the default foreground; identify linked upstream datasets and separately declare any installation, operation, maintenance, refurbishment or end-of-life modules. | etsi-es-203199-2025 |
| `sb_hardware_software` | equipment building blocks | Include applicable electronic, mechanical, cooling, cable, PCBA, transceiver, power-amplifier, power-supply and delivered software/firmware building blocks; document exclusions rather than substituting one device model for the category. | etsi-es-203199-2025 |
| `sb_delivery_boundary` | reference product and accessories | Keep net equipment, accessories, transport packaging, antenna/feeders, batteries, external power equipment and site-support goods distinct; include each only when the declared factory-gate delivery boundary contains it. | etsi-es-203199-2025 |
| `sb_cutoff` | all unit processes and flows | Avoid cut-offs where practicable; apply mass, energy and environmental-significance criteria cumulatively, document every exclusion and test material alternatives in sensitivity analysis. | etsi-es-203199-2025 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_supply` | Component, module and chassis supply | required | Always; distinguish purchased from in-house parts | Establish configuration-specific BOM and accepted component kit | kg accepted component kit per kg reference product |
| `assembly_configuration` | Equipment assembly and software configuration | required | Always | Assemble chassis, boards, RF/power modules, cooling and cables; load declared firmware/software | kg assembled equipment per kg reference product |
| `test_calibration` | Functional, RF/network test and calibration | required | Always; family-specific protocol | Verify transmission and reception functions and collect test and power-state records | kg accepted tested equipment per kg reference product |
| `packaging_release` | Packaging and factory-gate release | required | Always; packaging inclusion declared | Package, label and release the finished apparatus | 1 kg net finished apparatus at factory gate |
| `use_profile_module` | Operational power-profile module | conditional | Only when the dataset includes use or supplies a downstream use module | Calculate configuration- and load-specific electricity over a declared duty cycle and operating lifetime | kWh per kg reference product per declared scenario |

### Process: Component, module and chassis supply (`component_supply`)

#### Inputs

##### Product flows

###### Electronic boards and RF subassemblies (`electronic_rf_inputs`)

Record the accepted mass of PCBAs, semiconductors, memory, transceiver modules, power amplifiers, filters, connectors and family-specific radio or transmission modules in the BOM.

- Selected flow: Configuration-specific electronic boards and RF subassemblies; Tiangong UUID selected during dataset implementation
- Flow property / unit: Mass / kg
- Amount rule: accepted mass from BOM, receiving and issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted reference product in the same configuration stratum
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_mass`
- Sources: etsi-es-203199-2025
- Range: Provisional electronic/RF mass screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 2.0
  - Unit: kg/kg reference product
  - Basis: accepted electronic and RF inputs per kg net finished equipment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Chassis, power, cooling and cable components (`mechanical_power_inputs`)

Record enclosure or rack chassis, shelves, fasteners, power supplies, fans or cooling parts, cables and connectors; keep antenna/feeders, batteries and site support separate unless delivered with the equipment.

- Selected flow: Configuration-specific mechanical, power, cooling and cable components; Tiangong UUID selected during dataset implementation
- Flow property / unit: Mass / kg
- Amount rule: accepted mass from BOM, receiving and issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted reference product in the same configuration stratum
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_mass`
- Sources: etsi-es-203199-2025
- Range: Provisional mechanical and power-component mass screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 2.0
  - Unit: kg/kg reference product
  - Basis: accepted mechanical, power, cooling and cable inputs per kg net finished equipment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted configuration-specific component kit (`accepted_component_kit`)

Transfer accepted components to assembly with the BOM revision and configuration identifier preserved.

- Selected flow: Accepted component kit; Tiangong UUID selected during dataset implementation
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_mass`

##### Waste flows

###### Rejected incoming components (`incoming_rejects`)

Record rejected components by material or treatment route without netting supplier returns from accepted inputs.

- Selected flow: Rejected electronic or mechanical components; Tiangong UUID selected during dataset implementation
- Flow property / unit: Mass / kg
- Amount rule: scale or receiving-reject mass by treatment or return route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Range: Provisional incoming-reject screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: rejected incoming components per kg net finished equipment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Equipment assembly and software configuration (`assembly_configuration`)

#### Inputs

##### Product flows

###### Accepted component kit input (`component_kit_input`)

Record the component kit transferred from receiving or upstream in-house part production.

- Selected flow: Accepted configuration-specific component kit; Tiangong UUID selected during dataset implementation
- Flow property / unit: Mass / kg
- Amount rule: measured mass issued to the assembly order
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_mass`

###### Assembly and configuration electricity (`assembly_electricity`)

Meter electricity for assembly, firmware/software loading and directly attributable line support; allocate shared line electricity under section 7.

- Selected flow: Electricity supply appropriate to site and period; Tiangong UUID selected during dataset implementation
- Flow property / unit: Energy / kWh
- Amount rule: metered or sub-metered electricity divided by accepted output mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_manufacturing_energy`
- Sources: etsi-es-203199-2025
- Range: Provisional assembly-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 100
  - Unit: kWh/kg reference product
  - Basis: assembly and configuration electricity per kg net finished equipment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled and configured equipment (`assembled_configured_equipment`)

Transfer equipment to test with serial number, hardware configuration, firmware/software version and rework status.

- Selected flow: Assembled transmission apparatus incorporating reception; Tiangong UUID selected during dataset implementation
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_yield`

##### Waste flows

###### Assembly scrap and unrecoverable rejects (`assembly_scrap`)

Record metals, plastics, PCB/electronic scrap, cable offcuts and unrecoverable units separately by treatment route.

- Selected flow: Configuration-specific manufacturing waste; Tiangong UUID selected during dataset implementation
- Flow property / unit: Mass / kg
- Amount rule: measured waste dispatched, adjusted for opening and closing stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Range: Provisional assembly-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: assembly scrap per kg net finished equipment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Functional, RF/network test and calibration (`test_calibration`)

#### Inputs

##### Product flows

###### Test electricity (`test_electricity`)

Meter equipment-under-test, RF loads, chambers and directly attributable test rigs separately where practicable; preserve the test configuration and load state.

- Selected flow: Electricity supply appropriate to site and period; Tiangong UUID selected during dataset implementation
- Flow property / unit: Energy / kWh
- Amount rule: metered test energy divided by accepted tested output mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_and_power_profile`
- Sources: itu-l1310-2024; etsi-en-303472-2018
- Range: Provisional test-electricity screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 100
  - Unit: kWh/kg reference product
  - Basis: functional and RF/network test electricity per kg net finished equipment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted tested equipment (`accepted_tested_equipment`)

Record accepted units only after transmission and reception functions, declared ports/capacity, RF parameters where applicable, power states and software feature set pass the family-specific release protocol.

- Selected flow: Tested transmission apparatus incorporating reception; Tiangong UUID selected during dataset implementation
- Flow property / unit: Mass / kg
- Amount rule: accepted tested mass from serialised release records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_and_power_profile`
- Sources: itu-l1310-2024; etsi-en-303472-2018

##### Waste flows

##### Elementary flows

### Process: Packaging and factory-gate release (`packaging_release`)

#### Inputs

##### Product flows

###### Packaging materials (`packaging_materials`)

Record cardboard, wood, polymer foams/films, pallets, documentation and reusable transport fixtures separately; do not add their mass to the 1 kg net equipment reference.

- Selected flow: Configuration-specific packaging materials; Tiangong UUID selected during dataset implementation
- Flow property / unit: Mass / kg
- Amount rule: packaging issue records or verified pack BOM
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_release`
- Range: Provisional packaging-mass screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 1.0
  - Unit: kg/kg reference product
  - Basis: one-way packaging supplied per kg net finished equipment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished apparatus at factory gate (`reference_product_output`)

The reference output is the accepted, configured and tested apparatus. Its 1 kg mass excludes separately inventoried transport packaging and excludes site infrastructure unless the delivery declaration explicitly includes it.

- Selected flow: Transmission apparatus incorporating reception apparatus `facdf572-bd31-4e3e-a4d2-eb16f9595202`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net accepted finished equipment
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packaging offcuts and release rejects (`packaging_release_waste`)

Record packaging offcuts, damaged packaging and final-release rejects separately by treatment or rework route.

- Selected flow: Packaging and release waste; Tiangong UUID selected during dataset implementation
- Flow property / unit: Mass / kg
- Amount rule: measured waste and reject mass less documented rework returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_records`
- Range: Provisional packaging/release-waste screening estimate
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg reference product
  - Basis: packaging and release waste per kg net finished equipment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Operational power-profile module (`use_profile_module`)

#### Inputs

##### Product flows

###### Operational electricity by declared power state (`operational_electricity`)

When a use module is included, calculate electricity from measured power and a declared time/load profile. RAN-specific capacity, coverage and site parameters apply only to eligible RAN equipment; other families use their applicable same-class test method.

- Selected flow: Electricity supply for the declared geography and period; Tiangong UUID selected during dataset implementation
- Flow property / unit: Energy / kWh
- Amount rule: sum of measured state power multiplied by state duration over the declared operating lifetime
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg reference product over the declared operating scenario
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_and_power_profile`
- Sources: itu-l1310-2024; etsi-en-303472-2018; etsi-es-203199-2025

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide` | shared assembly, test and packaging lines | Avoid allocation by sub-metering, work-order tracking or subdividing processes by configuration stratum. | etsi-es-203199-2025 |
| `alloc_physical` | unavoidable shared utilities and facility burdens | Use a documented physical driver that reflects causality, such as board area for PCB work, accepted mass for general components, machine or test-bench time, occupied rack/line time, or metered energy. | etsi-es-203199-2025 |
| `alloc_economic_fallback` | shared burdens without defensible physical relation | Use economic allocation only when subdivision and physical causality are infeasible; disclose values and perform sensitivity analysis. | etsi-es-203199-2025 |
| `alloc_scrap_rework` | scrap, supplier returns, rework and recycling | Keep rework loops and returned components visible; do not credit recovered material unless the recycling allocation method and substituted product are explicitly declared. | etsi-es-203199-2025 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_mass` | `component_supply` | BOM inputs, accepted kits and net product mass | BOM revision, purchase/issue record and calibrated weighing | model/configuration_id; serial_or_batch; component_family; part_number; board_area_if_available; rf_module_type; quantity; measured_mass_kg; supplier; acceptance_status; included_accessory_flag | Reconcile engineering BOM, receiving, stores issue and scale records by production order | kg and item | Each production order and BOM revision | Same period as reference output | Each manufacturing site and configuration stratum | Sum accepted input masses; divide by accepted net reference-product mass; report coverage by BOM mass | BOM approval, calibration record, receiving reconciliation and unexplained-mass review |
| `cp_manufacturing_energy` | `assembly_configuration` | assembly/configuration electricity | Sub-meter, equipment meter or allocated facility meter | meter_id; timestamp; opening_kWh; closing_kWh; process_area; configuration_id; accepted_output_kg; allocation_driver | Prefer sub-metering; otherwise reconcile facility meter and documented physical allocation driver | kWh | Continuous or per production order | Representative production period, normally at least one complete campaign | Each site and line | Net kWh divided by accepted output kg in the same stratum | Meter calibration, downtime log, allocation reconciliation and energy coverage |
| `cp_test_and_power_profile` | `test_calibration` | test energy, release results and power states | Test-system log and calibrated power measurement | equipment_family; standard; band; bandwidth; ports_or_carriers; throughput_or_rf_output; enabled_modules; software_version; input_voltage; ambient_conditions; state_id; load_level; power_W; duration_h; test_energy_kWh; pass_fail | Apply the applicable same-family method; retain raw readings and configuration; RAN-specific fields only for eligible RAN equipment | W, kWh, bit/s or declared RF/capacity unit | Each released configuration and software version; power profile at least once per stable configuration and after relevant change | Full test cycle and declared duty-cycle evidence | Each test boundary and configuration | Test kWh per accepted kg; use energy = sum(power_W × duration_h)/1000, then normalize by reference mass | Instrument calibration, immutable test logs, state coverage, load generator/counter records and release approval |
| `cp_packaging_and_release` | `packaging_release` | packaging inputs and accepted output | Pack BOM, stores issue, shipment and final weighing | configuration_id; packaging_material; quantity; mass_kg; reusable_flag; accessory_mass_kg; net_equipment_mass_kg; gross_shipment_mass_kg; release_status | Reconcile pack BOM and shipment weights; preserve net, accessory and packaging masses separately | kg and item | Each packaging specification and production order | Same period as reference output | Each packing site | Sum one-way packaging mass and accepted net equipment mass separately; normalize packaging by net equipment mass | Approved packaging specification, scale calibration and shipment reconciliation |
| `cp_production_yield` | `assembly_configuration` | assembled/tested yield and rework | Manufacturing execution and quality records | configuration_id; started_units; accepted_units; reworked_units; scrapped_units; masses_kg; rework_route; disposition | Reconcile serialized order and quality-disposition records | kg and item | Each production order | Same campaign as inventory | Each line and site | Report gross starts, accepted output, rework loop and scrap without netting | Serial traceability and mass-balance reconciliation |
| `cp_waste_records` | all production processes | rejects, scrap and packaging waste | Scale ticket, waste manifest, supplier return and stock record | waste_type; material_family; mass_kg; treatment_route; supplier_return; opening_stock; closing_stock; date | Reconcile generated, stored, returned and dispatched waste | kg | Each dispatch with monthly reconciliation | Same period as production inventory | Each site | generated waste = dispatch + closing stock - opening stock + supplier returns, separated by route | Scale calibration, waste manifest and reconciliation variance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | all mass rows | normalized amount = configuration-stratum row mass / accepted net reference-product mass | kg row total; kg accepted net equipment | kg/kg reference product | etsi-es-203199-2025 |
| `calc_energy_normalization` | assembly and test electricity | normalized electricity = attributable net meter kWh / accepted net reference-product mass | opening/closing kWh; exclusions; allocation driver; accepted kg | kWh/kg reference product | etsi-es-203199-2025 |
| `calc_power_profile_energy` | optional use module | scenario electricity = sum over states(power_W × duration_h) / 1000; report throughput, ports, RF output or coverage/load context with the result | state power; duration; configuration; service/load quantities; operating lifetime | kWh per kg reference product per declared scenario | itu-l1310-2024; etsi-en-303472-2018 |
| `calc_configuration_mix` | multi-model production mix | Aggregate only within a declared equivalent stratum; weight by accepted net mass and report each member and share. If qualifiers are not equivalent, publish separate datasets. | stratum outputs and qualifiers | disclosed production mix | itu-l1310-2024; etsi-es-203199-2025 |
| `calc_mass_balance` | each production campaign | Compare accepted output + waste + closing WIP against accepted material input + opening WIP; investigate and disclose unexplained imbalance rather than forcing closure. | BOM input, outputs, waste, WIP | mass-balance residual and completeness flag | etsi-es-203199-2025 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference flow | Verify exact CPC 47211 product identity and preserve the selected Tiangong flow, Mass property, Units of mass and kg reference; reject CPC 47212, CPC 47223, user equipment, pure receivers and component-only candidates. | un-cpc-v3-2025 and Tiangong UUID readback |
| `dq_stratification` | all records | Report equipment family, technology/band, capacity/ports, chassis/board/RF configuration, power profile, software version and delivery boundary; do not hide material heterogeneity in an undisclosed average. | Configuration/BOM/test records and itu-l1310-2024 |
| `dq_temporal_technology` | primary and secondary data | Use data representative of the production period, geography and technology; disclose age, supplier coverage, software revision, proxies and cut-offs. | etsi-es-203199-2025 |
| `dq_power_profile` | power and use data | Use calibrated measurements with documented boundary, load states, duty cycle and performance; apply RAN-specific methods only to eligible RAN configurations. | Calibration and test evidence; itu-l1310-2024; etsi-en-303472-2018 |
| `dq_estimates` | all reasoned ranges | Treat `reasoned_estimate` ranges only as broad, replaceable QA screens; they shall not become fixed defaults or publication-critical allowed ranges without reviewed evidence. | Range labels, review record and replacement evidence |
| `dq_completeness` | foreground inventory | Reconcile BOM mass, energy meters, output, rework and waste; quantify primary-data coverage and document every excluded process or flow. | Mass/energy reconciliation and etsi-es-203199-2025 |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | Fail if the reference product UUID, Mass property UUID, Units of mass UUID, kg unit or CPC 47211 identity does not match the verified record. | un-cpc-v3-2025 |
| `val_required_qualifiers` | dataset metadata | Fail if equipment family, standard/band, capacity or ports, chassis/board/RF configuration, power profile, software feature/version or delivery boundary is missing. | itu-l1310-2024; etsi-es-203199-2025 |
| `val_scope_exclusions` | product scope | Fail if a phone, router/switch, pure receiver, non-receiving transmitter, camera, part-only module or one narrow model is represented as the complete category without an explicit eligible stratum and classification justification. | un-cpc-v3-2025; etsi-es-203199-2025 |
| `val_inventory_reconciliation` | foreground inventory | Fail if inputs, accepted output, rework, waste, energy period or normalization denominator cannot be reconciled for the same site, period and configuration stratum. | etsi-es-203199-2025 |
| `val_power_comparability` | test and use results | Fail cross-product comparison unless technology, configuration, performance function, measurement boundary, load profile and software state are equivalent or differences are normalized and disclosed. | itu-l1310-2024; etsi-en-303472-2018 |
| `val_reasoned_estimates` | provisional ranges | Warn and mark review-required while any reasoned estimate is used as a dataset value; fail publication-critical use if it has not been replaced or explicitly accepted by review. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production data package and eligible `secondary_dataset` or `background_dataset` after review |
| downstream_use | Production inventory for `process` and `lifecyclemodel` projections; optional configuration-specific use module when power-state scenario data are supplied |
| allowed_use | Modelling the declared equipment-family/configuration stratum and disclosed production mix; comparisons only between functionally equivalent configurations |
| excluded_use | Generic representation of phones, routers, pure receivers, transmitters without reception, cameras or all base stations; undisclosed cross-family averaging; use-phase claims without measured power/load/lifetime context |
| required_metadata | All Required qualifiers; site and period; net/accessory/packaging mass boundary; BOM coverage; in-house/purchased route; meter and allocation methods; source and proxy coverage; software and test revision |
| required_quality_disclosure | Primary-data coverage, mass and energy reconciliation, cut-offs, proxies, reasoned estimates, uncertainty, supplier coverage, rejected/reworked units, allocation and family-specific evidence limitations |
| update_trigger | Material change in equipment family, standard/band, ports/capacity, chassis/board/RF or power configuration, firmware/software function affecting performance or energy, supplier/BOM, production site, delivery boundary, test method, operating profile or source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | Dataset (`dataset`) | United Nations Statistics Division, *Central Product Classification Version 3.0 Structure*, 30 June 2025, code 47211. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-09) | Official classification identity and exclusion of neighbouring CPC product categories |
| `etsi-es-203199-2025` | Standard (`standard`) | ETSI ES 203 199 V1.4.1 (2025-01), *Methodology for environmental Life Cycle Assessment (LCA) of Information and Communication Technology (ICT) goods, networks and services*. https://www.etsi.org/deliver/etsi_es/203100_203199/203199/01.04.01_60/es_203199v010401p.pdf (retrieved 2026-08-09) | ICT life-cycle boundary, functional performance, hardware/software and part/module decomposition, production processes, cut-off, allocation, data collection and quality |
| `itu-l1310-2024` | Official guidance (`official_guidance`) | ITU-T Recommendation L.1310 (09/2024), *Energy efficiency metrics and measurement methods for telecommunication equipment*. https://www.itu.int/epublications/publication/itu-t-l-1310-2024-09-energy-efficiency-metrics-and-measurement-methods-for-telecommunication-equipment (retrieved 2026-08-09) | Same-class comparability, modular configuration, throughput/port and load-proportional power-state measurement |
| `etsi-en-303472-2018` | Standard (`standard`) | ETSI EN 303 472 V1.1.1 (2018-10), *Energy Efficiency measurement methodology and metrics for RAN equipment*. https://www.etsi.org/deliver/etsi_en/303400_303499/303472/01.01.01_60/en_303472v010101p.pdf (retrieved 2026-08-09) | RAN/base-station-family-only equipment/site configuration, traffic, capacity/coverage and energy measurement; not evidence for other families |
