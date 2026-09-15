---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.time-of-day-recording-apparatus-apparatus-for-measuring-recording-or-otherwise-indicati-f5f469e3
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Time of day recording apparatus, apparatus for measuring, recording or otherwise indicating intervals of time, and time switches, with clock or watch movement or with synchronous motor

## 1. Scope and Applicability

This PCR applies to factory-gate foreground data packages for finished apparatus whose primary function is to record a time of day, measure, record, or otherwise indicate a time interval, or switch a circuit according to time, and whose timing mechanism is a clock or watch movement or a synchronous motor. Covered examples include attendance or time-recording apparatus, interval indicators, and qualifying time switches.

The PCR covers receipt of purchased timing, control, enclosure, and packaging components; final assembly; functional testing; and sales packaging when performed within the reporting facility. Purchased-component production remains upstream and requires separate supplier-specific or representative datasets. It excludes clocks and watches whose primary function is ordinary time display, clock or watch movements sold separately, stopwatches, process-control instruments whose timing element does not define the product, and generic electronic timers that do not use a clock/watch movement or synchronous motor.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.time-of-day-recording-apparatus-apparatus-for-measuring-recording-or-otherwise-indicati-f5f469e3 |
| classification_refs | CPC 3.0: 48430 (exact classification context) |
| covered_products | Finished time-of-day recording apparatus; finished interval measuring, recording, or indicating apparatus; finished time switches using a clock/watch movement or synchronous motor |
| excluded_products | Ordinary clocks and watches; movements sold as products; stopwatches; non-timing process-control instruments; timers outside the stated mechanism boundary; spare parts sold separately |
| representative_product | A market-ready time-recording or time-switch apparatus assembled from a declared timing mechanism, control components where used, enclosure, and sales packaging where supplied |
| production_route | Receipt and verification of purchased components, final mechanical/electrical assembly, functional test, and conditional sales packaging |
| market_state | Conforming finished apparatus at the factory gate, with model, function, timing mechanism, accuracy or switching rating, enclosure configuration, and packaged state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a finished apparatus that records a time of day, measures/records/indicates a time interval, or performs automatic time switching within the covered mechanism boundary |
| How much | 1 kg of conforming finished apparatus |
| How well | The declared model has passed the manufacturer's applicable functional and safety release tests and meets the declared accuracy, interval, recording, or switching specification |
| How long or cycle | Factory-gate product output only; operating lifetime or number of switching/recording cycles is not represented and must be defined by any downstream use-stage study |
| reference_flow_link | `finished_apparatus_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Time of day recording apparatus, apparatus for measuring, recording or otherwise indicating intervals of time, and time switches, with clock or watch movement or with synchronous motor `0b4b9302-c3cd-4165-aca2-febe111a9207` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | apparatus function and model; clock/watch movement or synchronous-motor mechanism; mechanical/electromechanical/electronic control configuration; declared accuracy, interval, recording, or switching rating; rated voltage and frequency where applicable; enclosure material and ingress-protection claim where applicable; included accessories; packaged or unpackaged output state; manufacturing site and geography; reporting period; item count and average product mass |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_basis` | Reference product and all mass-normalized component and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass of conforming apparatus at the declared factory-gate state. Exclude separately reported sales packaging from reference-product mass and disclose included accessories. |
| `item_to_mass_conversion` | Records available as item counts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to mass with model- and reporting-period-specific sampled or verified unit masses; retain sample size, scale resolution, and weighting method. |
| `electricity_energy_conversion` | Assembly, test, and packaging electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered kWh and convert to MJ using 1 kWh = 3.6 MJ; do not mix purchased electricity with on-site generation without separate records and disclosure. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased clock/watch movement or synchronous motor, control-board assembly where used, finished enclosure components, and packaging components received at the reporting facility gate |
| starting_condition_role | These are product inputs to final assembly; their production is upstream rather than silently embedded in the foreground assembly operation |
| product_classification_scope | Finished CPC 48430 apparatus only; component flows retain their own product identities and are not reclassified as the reference product |
| recursive_input_rule | If a purchased input is itself a finished CPC 48430 apparatus, record it as a separately quantified same-category input with an upstream dataset and explain its integration role; do not relabel it as a movement, motor, or enclosure |
| upstream_dataset_requirement | Every purchased product input requires a supplier-specific or representative upstream production dataset consistent with its material state, technology, geography, and delivery boundary |
| disclosure | Declare product model mix, timing mechanism, control configuration, included/excluded operations, packaged state, component sourcing, allocation, data gaps, proxies, and any same-category input |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | Foreground final assembly and test | Include all material, energy, product, and waste exchanges crossing the reporting-facility boundary for component receipt, assembly, functional testing, rework that produces conforming output, and conditional sales packaging. | `eu-pef-2021-2279` |
| `boundary_upstream_components` | Purchased components and packaging | Link each purchased product flow to an upstream dataset; do not duplicate its upstream manufacturing burdens inside the foreground assembly process. | `eu-pef-2021-2279` |
| `boundary_capital_goods` | Production equipment and infrastructure | Exclude capital goods from this gate-to-gate unit process unless the study goal explicitly includes them; disclose any inclusion and prevent double counting with background datasets. |  |
| `boundary_use_end_of_life` | Downstream life-cycle stages | Exclude distribution, installation, use-phase electricity, maintenance, replacement, and end-of-life from this factory-gate dataset; downstream studies may add them as separately modelled stages. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `final_assembly_test_packaging` | Final assembly, functional testing, and conditional sales packaging | `required` | Always include final assembly and release testing; include each packaging exchange only when that packaging crosses the factory-gate boundary with the reference product | Foreground production and release | 1 kg conforming finished apparatus at the declared packaged or unpackaged factory-gate state |

### Process: Final assembly, functional testing, and conditional sales packaging (`final_assembly_test_packaging`)

#### Inputs

##### Product flows

###### Purchased clock or watch movement (`clock_movement_input`)

Record complete purchased movements incorporated in conforming products when the declared apparatus uses this timing route. Do not include movement parts separately when they are already included in the movement upstream dataset.

- Selected flow: Watch or clock movements `3dcf3381-920e-4477-a31c-aa2594aa8c59`
- Flow property / unit: Mass / kg
- Amount rule: Mass of complete movements issued less unused returns, normalized to conforming output mass; use `not_applicable` only for a declared synchronous-motor-only route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clock_movement_input`
- Sources:

###### Purchased synchronous motor (`synchronous_motor_input`)

Record one synchronous-motor product input when it provides the declared timing mechanism. The Tiangong UUID remains unresolved and must not be replaced by a complete apparatus or generic clock-part flow.

- Selected flow: Synchronous motor for time-switch or time-recording apparatus
- Flow property / unit: Mass / kg
- Amount rule: Mass of synchronous motors issued less unused returns, normalized to conforming output mass; use `not_applicable` only for a declared clock/watch-movement-only route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_synchronous_motor_input`
- Sources:

###### Populated electronic control-board assembly (`populated_control_board_input`)

Record one populated control-board assembly when installed. Do not substitute a bare printed wire board, display module, or combined unspecified electronic-components flow.

- Selected flow: Populated electronic control-board assembly
- Flow property / unit: Mass / kg
- Amount rule: Mass of populated control-board assemblies incorporated, normalized to conforming output mass; use `not_applicable` for a verified route without such an assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_populated_control_board_input`
- Sources:

###### Fabricated steel enclosure (`fabricated_steel_enclosure_input`)

Record the received fabricated steel enclosure incorporated in the apparatus when the declared route uses steel. This row is the finished enclosure component, not raw steel or a complete control cabinet.

- Selected flow: Fabricated steel enclosure for time-recording apparatus
- Flow property / unit: Mass / kg
- Amount rule: Mass of fabricated steel enclosures incorporated, normalized to conforming output mass; use `not_applicable` when the declared model uses no steel enclosure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabricated_steel_enclosure_input`
- Sources:

###### Moulded ABS enclosure (`moulded_abs_enclosure_input`)

Record the received moulded ABS enclosure incorporated in the apparatus when the declared route uses ABS. Do not substitute ABS granulate, which has a different product state and upstream boundary.

- Selected flow: Moulded ABS enclosure for time-recording apparatus
- Flow property / unit: Mass / kg
- Amount rule: Mass of moulded ABS enclosures incorporated, normalized to conforming output mass; use `not_applicable` when the declared model uses no ABS enclosure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_moulded_abs_enclosure_input`
- Sources:

###### Purchased electricity (`electricity_input`)

Record purchased electricity used by assembly tools, joining equipment, functional-test benches, rework, and packaging equipment within the boundary. Allocate shared metered electricity only under section 7.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered or calculated purchased electricity attributable to the reporting period, converted to MJ and normalized to conforming output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_input`
- Sources: `eu-pef-2021-2279`

###### Corrugated-board shipping box (`corrugated_box_input`)

Record corrugated-board boxes that leave the factory with the reference product. Use `not_applicable` only when the declared output has no corrugated-board box.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Mass of boxes consumed for shipped conforming output, net of unused returns and separately recorded packaging rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_corrugated_box_input`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming finished apparatus (`finished_apparatus_output`)

Record net mass of conforming released apparatus. Sales packaging is excluded from product mass and recorded separately when it crosses the factory gate with the product.

- Selected flow: Time of day recording apparatus, apparatus for measuring, recording or otherwise indicating intervals of time, and time switches, with clock or watch movement or with synchronous motor `0b4b9302-c3cd-4165-aca2-febe111a9207`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg reference product, derived from verified conforming output mass for the reporting period
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg conforming finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-0-structure-2025`

##### Waste flows

###### Rejected finished apparatus (`rejected_finished_apparatus_output`)

Record assembled units that fail release and leave the foreground system for treatment without re-entering as conforming product. Do not use a generic rejects or mixed-scrap UUID.

- Selected flow: Rejected finished time-recording apparatus
- Flow property / unit: Mass / kg
- Amount rule: Verified mass of rejected assembled apparatus sent to a declared treatment route, normalized to conforming output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rejected_finished_apparatus_output`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Shared assembly, test, rework, and packaging operations | First avoid allocation by submetering or subdividing operations by model, line, batch, test programme, or packaging configuration. | `eu-pef-2021-2279` |
| `allocation_physical_driver` | Unavoidable shared resource use | When subdivision is not feasible, allocate shared burdens using a documented physical driver that reflects causal use, such as equipment runtime, test duration, or processed mass; do not default to revenue. | `eu-pef-2021-2279` |
| `allocation_rework_and_rejects` | Rework and rejected apparatus | Assign rework burdens to conforming output when rework is part of producing that output; assign treatment of rejected apparatus to the reporting batch and do not credit internal recovery unless an exported secondary product is measured. |  |
| `allocation_disclosure` | All allocated exchanges | Report the shared total, allocation driver, numerator, denominator, resulting fraction, affected rows, and sensitivity when allocation materially affects results. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_clock_movement_input` | `final_assembly_test_packaging` | `clock_movement_input` | Receiving, issue, return, and supplier records | model; supplier; movement technology; quantity issued; quantity returned unused; verified unit mass | Reconcile issues and unused returns; verify representative unit masses when only counts exist | kg and item | Per batch, aggregated monthly | Same reporting period as output | Reporting facility and declared product lines | Sum net issued mass by model and divide by conforming output mass | Purchase documents; lot traceability; scale calibration; unit-mass sample record |
| `cp_synchronous_motor_input` | `final_assembly_test_packaging` | `synchronous_motor_input` | Receiving, issue, return, and supplier records | motor model; rated voltage; frequency; speed; supplier; quantity issued; quantity returned; verified unit mass | Reconcile net motor issues and verify model-specific unit mass | kg and item | Per batch, aggregated monthly | Same reporting period as output | Reporting facility and synchronous-motor routes | Sum net issued mass and divide by conforming output mass | Purchase documents; lot traceability; scale calibration |
| `cp_populated_control_board_input` | `final_assembly_test_packaging` | `populated_control_board_input` | Bill of materials, receiving, and issue records | assembly part number; revision; supplier; quantity installed; verified unit mass | Reconcile installed assemblies to released models; weigh a representative sample if needed | kg and item | Per batch or revision | Same reporting period as output | Reporting facility and electronic-control routes | Sum installed assembly mass and divide by conforming output mass | Approved bill of materials; supplier declaration; scale calibration; revision history |
| `cp_fabricated_steel_enclosure_input` | `final_assembly_test_packaging` | `fabricated_steel_enclosure_input` | Bill of materials, receiving, and issue records | enclosure part number; steel grade if declared; coating; supplier; quantity installed; verified unit mass | Reconcile installed fabricated enclosures and verify unit mass | kg and item | Per batch or model | Same reporting period as output | Reporting facility and steel-enclosure routes | Sum installed enclosure mass and divide by conforming output mass | Approved bill of materials; supplier declaration; scale calibration |
| `cp_moulded_abs_enclosure_input` | `final_assembly_test_packaging` | `moulded_abs_enclosure_input` | Bill of materials, receiving, and issue records | enclosure part number; polymer declaration; supplier; quantity installed; verified unit mass | Reconcile installed moulded enclosures and verify unit mass; retain supplier composition declaration | kg and item | Per batch or model | Same reporting period as output | Reporting facility and ABS-enclosure routes | Sum installed enclosure mass and divide by conforming output mass | Approved bill of materials; supplier declaration; scale calibration; `iec-62474-2018` |
| `cp_electricity_input` | `final_assembly_test_packaging` | `electricity_input` | Electricity meter, submeter, or equipment-runtime record | meter start; meter end; multiplier; rated power; runtime; model/batch assignment; on-site generation import/export | Prefer calibrated submeter readings; otherwise calculate from validated power and runtime and reconcile with facility meter | kWh and MJ | Per shift or batch, aggregated monthly | Representative production period reconciled to annual totals | Reporting facility and included lines | Allocate shared use under section 7, convert kWh to MJ, divide by conforming output mass | Meter identifier and calibration; invoices; runtime logs; reconciliation record |
| `cp_corrugated_box_input` | `final_assembly_test_packaging` | `corrugated_box_input` | Packaging bill of materials and issue records | box specification; supplier; recycled content if known; boxes consumed; boxes rejected; verified unit mass | Reconcile boxes issued to shipped output and verify unit mass | kg and item | Per batch or shipment | Same reporting period as output | Reporting facility and packaged routes | Sum boxes consumed net of unused returns and divide by conforming product mass | Packaging specification; purchase documents; scale calibration |
| `cp_finished_apparatus_output` | `final_assembly_test_packaging` | `finished_apparatus_output` | Release, production, and mass records | product model; released count; sampled or measured unit mass; included accessories; packaging exclusion; release-test status | Reconcile released counts to tested conforming units and determine net product mass by calibrated measurement | kg and item | Per batch, aggregated monthly | Full reporting period | Reporting facility and all covered lines | Sum conforming net apparatus mass by model; use as normalization denominator | Release records; test status; scale calibration; mass sample plan |
| `cp_rejected_finished_apparatus_output` | `final_assembly_test_packaging` | `rejected_finished_apparatus_output` | Quality disposition, mass, and treatment records | model; rejected count; unit mass; failure disposition; recovery/rework status; treatment route | Reconcile final rejects after rework to waste shipment or treatment records | kg and item | Per batch, aggregated monthly | Same reporting period as output | Reporting facility and all covered lines | Sum mass leaving as rejected apparatus and divide by conforming output mass | Nonconformance report; scale calibration; waste transfer or treatment record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_mass_rows` | All mass input and waste rows | normalized amount = net reporting-period row mass / conforming net apparatus output mass | Net row mass; conforming output mass | kg per kg reference product |  |
| `calc_count_to_mass` | Count-only component and product records | mass = sum for each declared model of item count multiplied by verified average net unit mass | Item count by model; verified average unit mass by model | kg |  |
| `calc_electricity_mj` | `electricity_input` | purchased electricity in MJ = allocated purchased electricity in kWh multiplied by 3.6 | Metered or calculated kWh; allocation fraction | MJ per kg reference product |  |
| `calc_component_mass_balance_screen` | Component, product, and reject records | Compare incorporated component mass with conforming product mass plus rejected-product mass after accounting for returns and exclusions; investigate rather than force-close differences | Component masses; output mass; rejected mass; returned components; exclusions | Documented variance and corrective action | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Reference product and purchased components | Retain model/part-number, revision, supplier, timing mechanism, and lot or batch links sufficient to distinguish complete movements, motors, populated boards, enclosures, and finished apparatus. | Approved bill of materials; receiving and release records; supplier declarations; UUID audit record |
| `dq_measurement` | Mass and electricity records | Use calibrated or verified instruments, preserve raw units and conversion factors, and document sampling when counts are converted to mass. | Calibration certificates; meter identifiers; scale logs; sampling records |
| `dq_temporal_coverage` | All foreground exchanges | Cover the full reporting period or a documented representative period reconciled to annual production; explain shutdowns, model changes, and atypical test or rework campaigns. | Production calendar; reconciliation worksheet; exception log |
| `dq_completeness` | Process inventory | Reconcile bills of materials, energy records, output mass, rejects, and exported wastes; disclose any excluded or proxy flow and its expected influence. | Completeness checklist; mass-balance screen; data-gap register; `eu-pef-2021-2279` |
| `dq_technology_geography` | Upstream datasets | Match component technology, product state, supplier geography, electricity market, and delivery boundary as closely as available and document proxies. | Supplier metadata; dataset metadata; proxy justification; `eu-pef-2021-2279` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Confirm the output is a finished covered apparatus, uses a clock/watch movement or synchronous motor, and carries the exact reference-product UUID, mass property, unit-group UUID, and kg unit. | `un-cpc-3-0-structure-2025` |
| `validate_route_conditions` | Conditional component rows | Require exactly the rows applicable to the declared configuration; `not_applicable` must be justified by the bill of materials and must not conceal an alternate component under the same label. |  |
| `validate_atomic_flows` | All inventory rows | Reject combined or umbrella exchanges; each selected flow must identify one physical product, waste, or energy exchange with a compatible flow type, property, and unit. |  |
| `validate_normalization` | All normalized amounts | Recalculate the output denominator, count-to-mass conversions, kWh-to-MJ conversion, and every per-kilogram amount from retained raw records. |  |
| `validate_allocation` | Shared operations | Confirm subdivision was attempted first and any physical allocation driver, totals, fractions, affected rows, and sensitivity are disclosed. | `eu-pef-2021-2279` |
| `validate_completeness_and_gaps` | Dataset as a whole | Confirm purchased components have upstream datasets, exchanges reconcile to production and quality records, and unresolved UUID/range needs and proxies remain disclosed. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground unit-process dataset for final assembly, functional testing, and conditional sales packaging of covered apparatus |
| downstream_use | `secondary_dataset`; `background_dataset` after independent review and linkage of purchased product inputs to compatible upstream datasets |
| allowed_use | Factory-gate modelling for the declared apparatus model or production-weighted model mix; downstream lifecycle models that add distribution, installation, use, maintenance, and end-of-life separately |
| excluded_use | Standalone representation of movement, motor, printed-board, or enclosure production; full cradle-to-grave performance; or an undeclared apparatus configuration |
| required_metadata | PCR id and version; product model and function; timing mechanism; control and enclosure configuration; factory and geography; reporting period; packaged state; net product mass; item count; accessories; upstream dataset links; allocation method; UUID status; source and proxy list |
| required_quality_disclosure | Measurement and sampling methods; temporal coverage; meter and scale status; model-mix weighting; mass-balance variance; allocation fractions; supplier-data quality; representativeness; unresolved UUIDs and range-evidence needs |
| update_trigger | Change in timing mechanism, control architecture, enclosure route, packaging design, facility or electricity supply, supplier technology/geography, allocation driver, model mix, or a materially changed foreground amount |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, official CSV, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official CPC 48430 classification identity and product-boundary wording |
| `china-new-zealand-fta-annex-5` | `official_guidance` | Ministry of Commerce of the People's Republic of China, China–New Zealand Free Trade Agreement, Annex 5: Product Specific Rules of Origin, Chinese text, https://fta.mofcom.gov.cn/upload/agreementFiles/newzealand/doc/fujian/fujian_5_cn.pdf (retrieved 2026-09-07) | Professional Chinese terminology for the corresponding apparatus family, verified from the HS 9106 and HS 9107 entries |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Annex I, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-09-07) | LCI completeness, boundary and modelling-choice disclosure, primary data collection, allocation, data quality, and validation |
| `iec-62474-2018` | `standard` | IEC 62474:2018, Material declaration for products of and for the electrotechnical industry, https://webstore.iec.ch/en/publication/29857 (retrieved 2026-09-07) | Supplier material-declaration evidence for electrotechnical components; not evidence for process chemicals, packaging, or use-phase emissions |
