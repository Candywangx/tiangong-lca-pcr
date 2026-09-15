---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.clocks
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Clocks

## 1. Scope and Applicability

This PCR applies to complete, non-wearable clocks whose principal function is to indicate time of day. It covers analog or digital alarm, wall, table, mantel, instrument-panel, and other complete clocks, whether electrically operated or not, when the foreground dataset declares the mechanism, display, accuracy specification, power interface, supplied battery state, and manufacturing route.

It excludes wearable watches; time-recording, interval-measuring, time-switching, or similar apparatus whose principal function is not ordinary time-of-day indication; watch or clock movements sold separately; other clock parts sold separately; and multifunction products whose principal product identity is a radio, telephone, computer, appliance, vehicle, or other non-clock product. Distribution, consumer use, maintenance, replacement batteries, and end-of-life are outside the default factory-gate boundary.

The representative route is assembly and calibration of an analog quartz table clock from a purchased clock movement, complete clock case, analog clock dial, and a button-cell battery supplied with the clock. Other covered clock technologies remain eligible only when their concrete component exchanges and required qualifiers are declared without substituting collection labels for atomic flows.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.clocks |
| classification_refs | CPC 3.0: 48420, Clocks (`exact`) |
| covered_products | Complete non-wearable clocks principally indicating time of day, including alarm, wall, table, mantel, instrument-panel, analog, digital, electrically operated, and non-electrically operated clocks |
| excluded_products | Watches; time-recording, interval-measuring, and time-switching apparatus; separately sold watch or clock movements; separately sold clock parts; products whose principal identity is not a clock |
| representative_product | Analog quartz table clock with one supplied button-cell battery |
| production_route | Receipt of purchased clock movement, complete clock case, analog clock dial, and included battery; assembly; calibration; functional testing; release of conforming clock at the factory gate before sales packaging |
| market_state | Complete, tested, unpackaged clock at the manufacturing factory gate; mechanism, display, accuracy specification, power interface, and included-battery state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A complete non-wearable clock providing ordinary time-of-day indication |
| How much | 1 kg of conforming clocks at the declared factory-gate state |
| How well | Meets the producer's declared timekeeping accuracy, display readability, functional-test acceptance criteria, and power-interface specification |
| How long or cycle | Declared design service life under the stated duty pattern; service life is a required qualifier and is not embedded in the 1 kg manufacturing reference amount |
| reference_flow_link | The mass of conforming complete clocks released by `final_clock_assembly` and normalized to 1 kg |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Clocks `24759480-c6f3-43e9-90be-61582a11d717` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | clock type and intended installation; mechanism and time base; analog or digital display; declared accuracy and test method; power interface; supplied battery chemistry, format, count, and inclusion state; complete-clock net mass excluding sales packaging; factory-gate state; manufacturing geography and technology; data period; declared design service life and duty pattern |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_clock_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net mass of conforming complete clocks after calibration and testing and before sales packaging; exclude pallets, reusable transport items, and sales packaging from the reference-product mass. |
| `component_mass_normalization` | clock movement, clock case, analog clock dial, and included battery | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg | Record each received component separately by mass and divide the accepted batch quantity by the conforming complete-clock mass from the same batch. |
| `electricity_energy_conversion` | assembly electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve metered kWh in raw records and convert to MJ using 1 kWh = 3.6 MJ before normalization; do not add upstream grid emissions as foreground elementary flows. |
| `defect_mass_consistency` | defective complete clock waste | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/kg | Weigh rejected complete clocks before dismantling or rework; do not combine component scrap, packaging waste, or mixed manufacturing waste with this row. |

## 5. System Boundary

The default boundary begins when purchased clock components and supplied batteries enter the reporting facility and ends when conforming, tested clocks are released at the factory gate before sales packaging. It includes component receipt and internal handling, assembly, calibration, functional testing, electricity used by those operations, and management of defective complete clocks. Upstream production of purchased components and electricity is represented by linked upstream datasets rather than repeated as foreground exchanges.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased clock movement, complete clock case, analog clock dial, and any battery supplied with the clock at the reporting facility receiving point |
| starting_condition_role | Auditable gate-to-gate starting condition for the declared clock-assembly route |
| product_classification_scope | Complete clocks within CPC 3.0 subclass 48420; watches, time-recording apparatus, separately sold movements, and separately sold parts are outside the canonical product boundary |
| recursive_input_rule | A purchased complete clock used as an input must be represented by a separately identified upstream clock dataset and must not be silently decomposed or counted again inside the current assembly process |
| upstream_dataset_requirement | Link geographically and technologically representative upstream datasets for every purchased component, battery, and electricity input; disclose any proxy and its effect on completeness |
| disclosure | Declare the starting condition, component make-or-buy boundary, clock mechanism, display, supplied battery state, included operations, excluded operations, reference-product mass convention, geography, technology, and data period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_clock_identity` | product scope | Apply this PCR only when the reference product is a complete clock whose principal identity is ordinary time-of-day indication within CPC 3.0 subclass 48420. | `un-cpc-3-0-structure-2025` |
| `boundary_factory_gate` | foreground operations | Include receipt, internal handling, assembly, calibration, functional testing, electricity used by those operations, and defective complete-clock handling through release at the factory gate before sales packaging. |  |
| `boundary_upstream_links` | purchased inputs | Represent production of purchased movements, cases, dials, supplied batteries, and electricity with linked upstream datasets and do not duplicate their upstream exchanges in the foreground inventory. |  |
| `boundary_default_exclusions` | excluded life-cycle stages | Exclude sales packaging, distribution, consumer use, maintenance, replacement batteries, and end-of-life unless a study explicitly extends the boundary and reports those stages separately. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `final_clock_assembly` | Final clock assembly, calibration, and testing | required | Applies to every dataset using this factory-gate PCR | Foreground manufacturing process that converts purchased components into conforming complete clocks | 1 kg conforming complete clocks before sales packaging |

### Process: Final clock assembly, calibration, and testing (`final_clock_assembly`)

#### Inputs

##### Product flows

###### Purchased timekeeping movement (`clock_movement`)

The complete purchased movement crosses the receiving boundary and provides the time base and drive function for the representative clock. Record only the movement delivered to assembly, not its internal gears or electronic parts again.

- Selected flow: Watch or clock movements `3dcf3381-920e-4477-a31c-aa2594aa8c59`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted movement mass issued to the assembly batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming complete-clock output before sales packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_receipts`
- Sources:

###### Complete clock case (`clock_case`)

The complete case that houses and supports the representative clock crosses the receiving boundary as one product input. Material, finish, dimensions, supplier, and fit must be declared; its exact Tiangong flow UUID remains unresolved.

- Selected flow: Clock case
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted clock-case mass issued to the assembly batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming complete-clock output before sales packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_receipts`
- Sources:

###### Analog clock dial (`analog_clock_dial`)

The finished analog dial or face crosses the receiving boundary and provides the visible time scale for the representative product. Record it separately from the case and movement; its exact Tiangong flow UUID remains unresolved.

- Selected flow: Analog clock dial
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted dial mass issued to the assembly batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming complete-clock output before sales packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_receipts`
- Sources:

###### Battery supplied with the clock (`included_button_cell_battery`)

Record one new button-cell battery only when it is physically supplied with the representative clock at the declared factory-gate state. Battery-free products must document that this exchange is absent rather than substituting use-phase replacement batteries; the exact Tiangong flow UUID remains unresolved.

- Selected flow: Button-cell battery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass of new button-cell batteries installed in or supplied with the conforming batch; absent only when the dataset declares that no battery is supplied
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming complete-clock output before sales packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_receipts`
- Sources:

###### Electricity used for assembly and testing (`assembly_electricity`)

Electricity crosses the foreground boundary through assembly-line, calibration-bench, test-rig, and directly attributable support loads. Grid mix, voltage, geography, losses, and meter allocation must be declared.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` / MJ
- Amount rule: metered electricity attributable to the assembly batch, converted from kWh to MJ and normalized to conforming output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming complete-clock output before sales packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming complete clock (`clock_output`)

Conforming complete clocks leave assembly after calibration and functional testing. Their net mass establishes the reference output and excludes sales packaging.

- Selected flow: Clocks `24759480-c6f3-43e9-90be-61582a11d717`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg after normalization from measured conforming batch output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming complete-clock reference flow before sales packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_clock_output`
- Sources:

##### Waste flows

###### Defective complete clocks (`defective_complete_clock`)

Complete clocks rejected after assembly or functional testing cross the process boundary as a distinct waste stream when they are not reworked in the same batch. Do not combine them with component scrap or mixed manufacturing waste; the exact Tiangong waste-flow UUID remains unresolved.

- Selected flow: Defective complete clock
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass of rejected complete clocks leaving the process for treatment, excluding units fully reworked into conforming output in the same batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming complete-clock output before sales packaging
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_defective_clock_waste`
- Sources:

##### Elementary flows

No direct elementary exchange is prescribed for the representative assembly route. Any measured direct release from a site-specific added operation must be represented as its own chemically specific elementary-flow row rather than as an umbrella emission category.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared assembly, calibration, and testing operations | Avoid allocation by separately metering or otherwise subdividing product-line electricity, component issues, conforming output, and defective-clock waste wherever practicable. |  |
| `allocation_physical_mass` | inseparable shared operations producing more than one clock model | When subdivision is not practicable, allocate shared burdens among clock models by measured conforming product mass; disclose the affected operations, models, allocation denominator, and sensitivity to an item-count alternative. |  |
| `allocation_no_defect_credit` | defective complete clocks | Assign burdens incurred before rejection to the production batch and report the defective-clock waste output without an avoided-product credit; model any recycling or treatment in the linked downstream waste dataset. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_receipts` | `final_clock_assembly` | purchased component input | receiving and issue records plus verified mass measurement | supplier; SKU; component description; movement mechanism; case material and finish; dial type; battery chemistry and format; accepted count; rejected count; tare mass; net mass; batch_id | Reconcile receiving and line-issue records; verify representative unit or lot mass with a calibrated balance; retain component identity by row_id | kg | Each received lot and assembly batch | Same reporting period as clock output, normally at least 12 consecutive months | All component lots used by the reporting facility for the declared clock product | Sum accepted net mass issued to the batch by atomic component row and divide by conforming clock output mass | Purchase/issue reconciliation, supplier specification, balance calibration record, and sampled weighing record |
| `cp_assembly_electricity` | `final_clock_assembly` | assembly electricity input | submeter or documented meter allocation | meter_id; opening_kWh; closing_kWh; timestamps; production-line operating hours; shared-load allocation basis; batch_id | Read dedicated submeters where available; otherwise allocate a documented parent-meter difference using measured operating hours or equipment load-hours | kWh and MJ | At least monthly and for each production campaign when campaign data exist | Same reporting period as clock output, normally at least 12 consecutive months | Assembly, calibration, testing, and directly attributable support equipment at the reporting facility | Subtract verified non-production loads, convert kWh to MJ, sum the reporting period, and divide by conforming clock output mass | Meter identification, calibration or utility reconciliation, reading log, and allocation worksheet |
| `cp_clock_output` | `final_clock_assembly` | conforming clock product output | production release and mass records | model; mechanism; display; accuracy specification; power interface; supplied battery state; accepted_count; net_unit_mass; total_conforming_mass; release_date; batch_id | Reconcile quality-release counts with calibrated net-mass measurements after testing and before sales packaging | kg | Each released batch | Same period as all input and waste records, normally at least 12 consecutive months | All conforming clock output from the declared line and product system | Sum conforming net clock mass; use it as the denominator and scale all exchanges to exactly 1 kg | Quality-release record, test acceptance record, balance calibration, and batch reconciliation |
| `cp_defective_clock_waste` | `final_clock_assembly` | defective complete-clock waste output | rejection, rework, weighing, and dispatch records | rejected_count; defect_code; gross_mass; tare_mass; net_mass; rework_status; destination; dispatch_reference; batch_id | Weigh complete rejected clocks before dismantling or dispatch and reconcile units reworked into conforming output | kg | Each batch and each waste dispatch | Same reporting period as clock output, normally at least 12 consecutive months | All complete-clock rejects generated by the declared process | Sum net mass dispatched as waste; exclude successfully reworked clocks and normalize by conforming clock output mass | Rejection log, rework reconciliation, calibrated weighing record, and waste transfer evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | all mass-based input and waste rows | normalized amount (kg/kg) = batch atomic-flow net mass (kg) / conforming complete-clock net mass (kg) | batch row mass; conforming clock output mass; matched batch_id and period | kg exchange per kg conforming complete clocks |  |
| `calc_electricity_mj` | `assembly_electricity` | normalized electricity (MJ/kg) = attributable electricity (kWh) × 3.6 / conforming complete-clock net mass (kg) | verified meter difference; excluded load; allocation factor; conforming output mass | MJ electricity per kg conforming complete clocks |  |
| `calc_clock_output_reference` | `clock_output` | Divide measured conforming complete-clock mass by itself after confirming a positive denominator; the normalized reference output equals exactly 1 kg | measured conforming complete-clock mass | 1 kg reference product |  |
| `calc_clock_mass_balance` | final clock assembly mass balance | Compare atomic component inputs with conforming clock output, defective complete-clock waste, documented in-process inventory change, and separately recorded atomic component scrap; investigate unexplained mass rather than forcing closure | atomic component masses; output mass; defective-clock waste; in-process inventory change; separately identified scrap | disclosed mass-balance difference and reconciliation status |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Retain model, mechanism, display, accuracy specification, power interface, supplied battery state, net mass convention, and factory-gate state sufficient to demonstrate that the output is a complete clock rather than a watch, movement, part, or time-recording apparatus. | Product specification, bill of materials, product photograph or drawing, and quality-release record |
| `dq_flow_identity` | every inventory row | Preserve one concrete exchange identity per row, the selected Tiangong UUID when confirmed, property and unit, supplier or meter context, and any unresolved UUID status; do not aggregate unlike components, wastes, or emissions. | Row-level reconciliation and UUID review record |
| `dq_temporal_alignment` | all foreground data | Use the same representative period for input, output, electricity, and waste records; disclose shutdowns, launches, abnormal campaigns, and any period shorter than 12 consecutive months. | Dated source records and reporting-period reconciliation |
| `dq_measurement` | mass and electricity records | Use calibrated or verified balances and meters, retain tare corrections and conversion worksheets, and document shared-meter allocation assumptions. | Calibration certificates or checks, raw readings, invoices, and calculation workbook |
| `dq_completeness` | foreground inventory | Reconcile purchased component issues, conforming output, defective-clock waste, rework, in-process inventory change, and electricity coverage; quantify any excluded or estimated share. | Mass-balance statement, energy reconciliation, and completeness checklist |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_clock_identity` | product identity | Confirm that the reference product is a complete non-wearable clock in CPC 3.0 subclass 48420 and not a watch, time-recording apparatus, separately sold movement, separately sold part, or multifunction product with another principal identity. | `un-cpc-3-0-structure-2025` |
| `validate_reference_flow` | reference flow | Require a positive conforming complete-clock mass and a normalized `clock_output` of exactly 1 kg using the declared net-mass convention. |  |
| `validate_required_qualifiers` | dataset metadata | Reject an incomplete reference-flow definition when any required qualifier in section 3 is missing or when the supplied battery state is inconsistent with `included_button_cell_battery`. |  |
| `validate_atomic_inventory` | process inventory | Require every material, battery, electricity, waste, and any added direct-emission exchange to use its own row, property, unit, amount rule, protocol, and identity status. |  |
| `validate_period_reconciliation` | foreground records | Confirm that component, electricity, conforming output, reject, rework, and in-process inventory records cover the same declared period and facility scope. |  |
| `validate_mass_balance` | assembly mass balance | Report the mass-balance difference from `calc_clock_mass_balance`; investigate and disclose component scrap, stock change, moisture, and measurement uncertainty rather than hiding an unexplained difference. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground clock-manufacturing data package and product-category-specific process dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review, geographic and technological representativeness review, and resolution or explicit acceptance of open identity and range-evidence needs |
| allowed_use | Comparative or attributional modelling of complete clocks that match the declared mechanism, display, accuracy, power interface, supplied battery state, factory-gate state, geography, technology, and data period |
| excluded_use | Watches, separately sold movements or parts, time-recording apparatus, packaged-clock claims, distribution, use-phase energy or batteries, maintenance, and end-of-life without explicit additional modelling |
| required_metadata | PCR id and version; product model and clock type; mechanism and time base; display; accuracy specification and test method; power interface; battery chemistry, format, count, and supplied state; net mass convention; facility geography and technology; make-or-buy boundary; data period; allocation; upstream dataset identities; unresolved UUIDs; exclusions |
| required_quality_disclosure | Primary-data share; meter and balance coverage; calibration status; temporal coverage; shared-load allocation; component and output reconciliation; defect and rework treatment; mass-balance difference; proxy datasets; unresolved UUIDs and range-evidence needs |
| update_trigger | Change in mechanism, display, case or dial design, supplied battery, assembly technology, facility, electricity supply, make-or-buy boundary, allocation, net-mass convention, or data period; resolution of an identity or range-evidence need; or a material change in normalized inputs, electricity, output, or waste |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, structure dated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-07) | Official CPC 48420 identity and separation from watches, time-recording apparatus, movements, and other parts |
| `un-cpc-1-1-chinese-2002` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 1.1, Chinese edition, https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf (retrieved 2026-09-07) | Verified professional Chinese category term “钟” and distinction from “表”, “钟表机心”, and other parts |
