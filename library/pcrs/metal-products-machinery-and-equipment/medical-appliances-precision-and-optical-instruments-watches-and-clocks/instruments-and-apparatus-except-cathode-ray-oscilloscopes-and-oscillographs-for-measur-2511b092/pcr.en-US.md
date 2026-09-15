---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-except-cathode-ray-oscilloscopes-and-oscillographs-for-measur-2511b092
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Instruments and apparatus (except cathode-ray oscilloscopes and oscillographs) for measuring or checking voltage, current, resistance or power, without a recording device (except electricity production or supply meters)

## 1. Scope and Applicability

This PCR applies to the foreground manufacture of finished instruments and apparatus whose principal function is measuring or checking voltage, current, electrical resistance, or electrical power and that do not contain a recording device. Typical covered products include non-recording digital or analogue multimeters, voltmeters, ammeters, ohmmeters, and wattmeters when their declared product identity remains within this boundary.

The PCR excludes cathode-ray oscilloscopes and oscillographs; instruments whose defining function includes recording measured values; electricity production or supply meters; instruments for measuring or checking other electrical quantities not covered by the four named quantities; telecommunications test instruments classified outside this category; and accessories, replacement parts, calibration services, or software supplied independently of the finished instrument. A multifunction product is covered only when its declared principal product identity meets this scope and any recording function is absent.

The default foreground boundary begins with purchased materials, components, subassemblies, packaging, and energy received at the manufacturing site and ends with a conforming finished product at the factory gate. Upstream production of purchased inputs is represented by linked upstream datasets. Distribution, use, maintenance, and end-of-life are outside the default foreground package unless a study explicitly extends the boundary and reports those added stages separately.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-except-cathode-ray-oscilloscopes-and-oscillographs-for-measur-2511b092 |
| classification_refs | CPC 3.0: 48243 (exact classification reference; the classification mapping remains governed outside this PCR) |
| covered_products | Finished non-recording instruments and apparatus for measuring or checking voltage, current, resistance, or power |
| excluded_products | Cathode-ray oscilloscopes and oscillographs; recording instruments; electricity production or supply meters; other-electrical-quantity instruments; separately supplied parts, accessories, software, and services |
| representative_product | A finished non-recording electrical measuring instrument, such as a handheld or bench multimeter, supplied at the factory gate |
| production_route | Purchased electronic and mechanical inputs, optional in-house component manufacture, final electromechanical assembly, calibration and functional/safety/EMC verification as applicable, and packaging |
| market_state | Finished product, manufactured; production mix, at plant |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished instrument capable of the declared voltage, current, resistance, or power measurement/checking function without a recording device |
| How much | 1 kg of finished instrument at the factory gate |
| How well | Meets the declared measurement functions, ranges, accuracy specification, safety category, and applicable conformity requirements for the represented model or product family |
| How long or cycle | One production reporting period; service life is not represented by this cradle-to-gate reference flow and must be declared separately for use-stage comparisons |
| reference_flow_link | One kilogram of the Tiangong reference product flow defined below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Instruments and apparatus (except cathode-ray oscilloscopes and oscillographs) for measuring or checking voltage, current, resistance or power, without a recording device (except electricity production or supply meters) `7ecc1c5a-4a45-4d93-8648-9a86405e3d20` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | instrument type and model or product family; measured quantities; measurement ranges; accuracy specification or class; safety measurement category and rated voltage where applicable; analogue or digital indication; explicit absence of a recording device; power-supply and included-battery state; included leads, probes, accessories, manuals, and packaging; production route; manufacturing geography; reporting period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent package field. Missing qualifiers make the category identity or reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product and all mass-normalized inventory results | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the foreground package to exactly 1 kg of conforming finished reference product. Report whether included batteries, test leads, probes, manuals, accessories, and sales packaging are inside that mass. |
| `count_to_mass_conversion` | Source records available only as instruments, assemblies, or packages by count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts to mass only with measured net or gross mass for the represented model and lot; retain the count, measured mass, sample size, and packaging convention. |
| `energy_normalization` | Electricity and other energy used by in-house manufacturing, assembly, calibration, testing, and packaging | Energy | kWh or MJ | Preserve the metered unit and conversion factor, separate energy carriers, and divide attributable energy by conforming finished-product mass from the same reporting period. |
| `measurement_quality_identity` | Product conformance records | Declared measurement result and uncertainty or tolerance | Declared engineering unit | Retain the tested quantity, range, set point, observed result, tolerance or uncertainty, equipment identifier, calibration status, and pass/fail decision; do not convert a product performance result into an inventory mass or energy amount. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, electronic and electromechanical components, housings, subassemblies, packaging, and energy received at the manufacturing site |
| starting_condition_role | Foreground manufacturing gate; upstream burdens of purchased inputs are supplied by linked secondary or background datasets |
| product_classification_scope | Finished non-recording instruments for measuring or checking voltage, current, resistance, or power within the semantic product boundary represented by CPC 3.0 code 48243 |
| recursive_input_rule | If an input is itself a product in this same category, record it as a visible product input and link an upstream dataset; do not recursively reproduce its manufacture inside the receiving process |
| upstream_dataset_requirement | Every material, component, subassembly, packaging, energy, transport, and treatment input crossing the foreground boundary requires a named upstream dataset or a disclosed unresolved data gap |
| disclosure | Declare manufacturing sites and routes; included product contents and packaging; in-house versus purchased subassemblies; allocation and cut-off decisions; testing scope; data period; geography; and all excluded life-cycle stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_manufacturing` | foreground_system_boundary | Include all directly controlled and attributable in-house component manufacture, electromechanical assembly, firmware loading when part of manufacture, calibration, functional verification, applicable safety and EMC tests, quality control, rework, cleaning, and packaging through the finished-product factory gate. | `iec-63366-2025`; `eu-pef-2021-2279` |
| `sb_purchased_inputs` | purchased_input_boundary | Record the full product-specific bill of materials and packaging, purchased subassemblies, energy, auxiliaries, intra-site handling, and waste/treatment outputs; connect each purchased input to an upstream dataset rather than omitting it from the foreground package. | `eu-pef-2021-2279` |
| `sb_compliance_evidence` | product_conformance_boundary | Include the activity data for tests actually performed for the represented product route and retain product safety, EMC, calibration, and restricted-substance documentation; a cited standard does not substitute for the product's test or supplier records. | `iec-61010-1-2010-amd1-2016`; `iec-61326-1-2020`; `iec-63000-2016-amd1-2022` |
| `sb_no_silent_cutoff` | foreground_cutoff | Do not silently omit known production inputs, outputs, or process stages. Any exclusion must identify the omitted flow or stage, the reason and materiality basis, the governing study method, and the expected effect on completeness. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `sb_extended_stages` | downstream_extension | Keep distribution, use, maintenance, and end-of-life outside the default foreground package; if added for a specific study, model and disclose them as an explicit boundary extension without changing the canonical cradle-to-gate reference-flow identity. | `iec-63366-2025`; `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `inhouse_component_manufacture` | In-house component and subassembly manufacture | conditional | Include when the reporting facility manufactures or materially transforms circuit assemblies, sensors, shunts, housings, terminals, wiring assemblies, or other product components | Foreground component manufacture | 1 kg of accepted in-house component or subassembly output |
| `final_instrument_assembly` | Final instrument assembly and configuration | required | Always include for a manufactured finished instrument | Foreground electromechanical assembly | 1 kg of assembled instrument before final calibration and release |
| `calibration_test_packaging` | Calibration, verification, release, and packaging | required | Always include; record only the tests and packaging activities applicable to the represented route | Foreground calibration, conformance verification, quality release, and packaging | 1 kg of conforming finished reference product |

### Process: In-house component and subassembly manufacture (`inhouse_component_manufacture`)

#### Inputs

##### Product flows

###### Raw materials, parts, and process materials for in-house manufacture (`inhouse_material_inputs`)

Record product-specific materials and parts entering each in-house component or subassembly operation from purchasing, stores, or another site.

- Selected flow: Supplier-specific material, part, or process material; resolve each concrete flow during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Measured receipts and stock-adjusted consumption attributable to accepted component or subassembly output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg of accepted in-house component or subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inhouse_materials`
- Sources: `eu-pef-2021-2279`; `iec-63000-2016-amd1-2022`

###### Energy supplied to in-house manufacture (`inhouse_energy`)

Record electricity and other energy carriers consumed by the included in-house operations, separated by carrier and supply dataset.

- Selected flow: Site- and carrier-specific energy supply; resolve during dataset construction
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Submetered consumption, or documented allocation from a complete site meter when submetering is unavailable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg of accepted in-house component or subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inhouse_energy`
- Sources: `eu-pef-2021-2279`

##### Waste flows

No waste input is prescribed. Record a waste input only when an actual recovered or waste-derived material crosses into the process, with its treatment status and upstream burden convention disclosed.

##### Elementary flows

Record direct resource inputs only when they cross from the environment into the in-house process and are not already represented by a product-flow supply dataset.

#### Outputs

##### Product flows

###### Accepted in-house components and subassemblies (`inhouse_component_output`)

Record the accepted component or subassembly mass transferred to final instrument assembly.

- Selected flow: Product-specific component or subassembly; resolve during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg of accepted in-house component or subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inhouse_outputs`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### In-house manufacturing scrap, rejects, and treatment residues (`inhouse_waste_outputs`)

Record each material-specific scrap, rejected component, wastewater, spent bath, and other waste output with destination and recovery or disposal route.

- Selected flow: Material- and treatment-specific waste flow; resolve during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Measured waste shipment, treatment, or internal transfer mass by waste type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg of accepted in-house component or subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_inhouse_outputs`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

###### Direct emissions from in-house component manufacture (`inhouse_direct_emissions`)

Record measured or legally reported releases to air, water, or soil from included in-house operations without duplicating emissions already represented in upstream energy or material datasets.

- Selected flow: Substance- and compartment-specific elementary flow; resolve during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculation from measured concentration and discharge volume using the declared monitoring method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg of accepted in-house component or subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_inhouse_outputs`
- Sources: `eu-pef-2021-2279`

### Process: Final instrument assembly and configuration (`final_instrument_assembly`)

#### Inputs

##### Product flows

###### Electronic, sensing, and electromechanical bill-of-material inputs (`assembly_electronic_inputs`)

Record populated or bare circuit assemblies, sensors, shunts, displays, switches, terminals, connectors, wiring, power modules, batteries when included, and other electronic or electromechanical items by supplier and part identity.

- Selected flow: Supplier- and part-specific product flow; resolve during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Product-specific bill-of-material quantity reconciled to measured issue, return, and stock-change records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg of assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `eu-pef-2021-2279`; `iec-63000-2016-amd1-2022`

###### Housings, mechanical parts, fasteners, and labels (`assembly_mechanical_inputs`)

Record housings, frames, shields, knobs, buttons, fasteners, labels, and other mechanical items by material and part identity.

- Selected flow: Supplier- and part-specific product flow; resolve during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Product-specific bill-of-material quantity reconciled to measured issue, return, and stock-change records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg of assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_bom`
- Sources: `eu-pef-2021-2279`; `iec-63000-2016-amd1-2022`

###### Assembly energy and directly consumed auxiliaries (`assembly_energy_auxiliaries`)

Record electricity, compressed air, solder or joining materials, adhesives, cleaning agents, lubricants, and other directly attributable assembly inputs separately.

- Selected flow: Site- and material-specific product flow; resolve during dataset construction
- Flow property / unit: Energy / kWh or MJ for energy; Mass / kg for materials
- Amount rule: Metered energy and stock-adjusted auxiliary consumption attributable to the assembly process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg of assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy_auxiliaries`
- Sources: `eu-pef-2021-2279`

##### Waste flows

No waste input is prescribed. Reused or recovered assembly inputs must remain visible product or waste-derived inputs according to their actual supply status.

##### Elementary flows

Record direct elementary inputs only when measured at the assembly process and not represented by a supplied product flow.

#### Outputs

##### Product flows

###### Assembled instrument awaiting calibration and release (`assembled_instrument_output`)

Record the measured mass transferred to final calibration, verification, and product release.

- Selected flow: Product-specific uncalibrated assembled instrument; no category-generic UUID is prescribed
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg of assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_outputs`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Assembly scrap, rejects, and replaced parts (`assembly_waste_outputs`)

Record assembly scrap, rejected assemblies, removed parts, spent consumables, and their actual destinations without netting them against material inputs.

- Selected flow: Material- and treatment-specific waste flow; resolve during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Measured waste, reject, and return mass by type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg of assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_outputs`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

Record direct releases from cleaning, joining, or other assembly activities only when they occur and are supported by site measurement or a documented calculation from collected records.

### Process: Calibration, verification, release, and packaging (`calibration_test_packaging`)

#### Inputs

##### Product flows

###### Assembled instrument input (`test_assembled_input`)

Record the mass of assembled instruments entering calibration and verification, including returned rework loops without double counting repeated throughput as new product input.

- Selected flow: Product-specific uncalibrated assembled instrument; no category-generic UUID is prescribed
- Flow property / unit: Mass / kg
- Amount rule: Measured unique input mass plus separately disclosed rework passes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg of conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_inputs`
- Sources: `eu-pef-2021-2279`

###### Test, calibration, and packaging energy and consumables (`test_energy_consumables`)

Record energy used by calibration and test equipment, conditioning, firmware programming, burn-in when performed, and packaging, together with directly consumed calibration and cleaning materials.

- Selected flow: Site- and carrier-specific energy or material flow; resolve during dataset construction
- Flow property / unit: Energy / kWh or MJ for energy; Mass / kg for materials
- Amount rule: Metered consumption or documented allocation to tested and released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg of conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_energy_consumables`
- Sources: `eu-pef-2021-2279`; `iec-61010-1-2010-amd1-2016`; `iec-61326-1-2020`

###### Sales packaging and included accessories (`packaging_accessory_inputs`)

Record primary and secondary sales packaging and all leads, probes, adapters, batteries, manuals, and accessories included with the declared reference product; clearly distinguish included product mass from packaging mass.

- Selected flow: Material- and supplier-specific packaging or accessory flow; resolve during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Product-specific packaging and accessory bill of materials reconciled to issue and stock-change records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg of conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_inputs`
- Sources: `eu-pef-2021-2279`

##### Waste flows

No waste input is prescribed. Returned instruments entering remanufacture or refurbishment are outside this virgin-manufacture route unless a separately declared route is modelled.

##### Elementary flows

Record direct elementary inputs only when an actual calibration, conditioning, or test operation draws a resource directly from the environment.

#### Outputs

##### Product flows

###### Conforming finished non-recording electrical measuring instrument (`reference_product_output`)

Record the released finished-product mass using the exact Tiangong reference product flow and retain the model, function, accuracy, test, accessory, battery, and packaging qualifiers.

- Selected flow: Instruments and apparatus (except cathode-ray oscilloscopes and oscillographs) for measuring or checking voltage, current, resistance or power, without a recording device (except electricity production or supply meters) `7ecc1c5a-4a45-4d93-8648-9a86405e3d20`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg of conforming released reference product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Failed units, replaced parts, and test rejects (`test_reject_outputs`)

Record failed units and parts leaving the rework loop, including their measured mass, disposition, recovery, or treatment route.

- Selected flow: Material- and treatment-specific waste flow; resolve during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Measured reject and replaced-part mass leaving the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg of conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_outputs`
- Sources: `eu-pef-2021-2279`

###### Packaging-process waste (`packaging_waste_outputs`)

Record offcuts, damaged packaging, liners, reels, and other packaging waste generated before the finished product leaves the factory gate.

- Selected flow: Material- and treatment-specific packaging waste flow; resolve during dataset construction
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging waste mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg of conforming finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_outputs`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

Record direct releases from testing, conditioning, cleaning, or packaging only when they occur and are supported by measurement or a documented calculation from collected records.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_avoid` | shared_manufacturing_processes | Avoid allocation by separate metering, batch or line subdivision, or another defensible separation of processes and records directly attributable to the represented product. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `alloc_physical` | inseparable_shared_burdens | When allocation cannot be avoided, use a documented causal physical relationship that reflects the driver of the shared input or output, such as machine time, test time, energy demand, or mass where mass is causally relevant. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `alloc_other_relationship` | no_defensible_physical_relationship | If no relevant physical relationship can be demonstrated, use economic allocation or another justified relationship, disclose the data period and calculation, and report a sensitivity result for a materially different defensible method. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `alloc_scrap_and_recycling` | scrap_recycling_and_recovery | Report scrap and recovered material as visible output flows and state the upstream and end-of-life convention. Do not apply an avoided-burden credit inside this cradle-to-gate foreground package unless the declared governing methodology explicitly requires it. | `iec-63366-2025`; `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_inhouse_materials` | `inhouse_component_manufacture` | raw materials, parts, and process materials | purchase, issue, return, stock, and composition records | part_id; supplier; material; opening_stock; receipts; issues; returns; closing_stock; measured_mass; lot_id | Reconcile ERP or stores movements to production lots and verify mass by scales or supplier records | kg | per lot with monthly reconciliation | representative continuous reporting period, normally at least 12 months, or justified shorter campaign | every included manufacturing site and in-house operation | net attributable consumption divided by accepted component output mass | BOM revision, supplier declaration, scale calibration, stock reconciliation, and restricted-substance documentation where applicable |
| `cp_inhouse_energy` | `inhouse_component_manufacture` | in-house manufacturing energy | meter and production records | meter_id; carrier; opening_reading; closing_reading; submeter_scope; operating_time; allocation_driver; accepted_output_mass | Read dedicated submeters; if unavailable, reconcile complete site meters and apply the declared allocation rule | kWh or MJ | meter interval aggregated monthly | same period as production output | every included site and energy carrier | attributable consumption divided by accepted component output mass | meter calibration or utility invoice, meter coverage map, and allocation evidence |
| `cp_inhouse_outputs` | `inhouse_component_manufacture` | accepted output, wastes, and direct emissions | production, weighbridge, waste, discharge, and emissions records | output_mass; reject_mass; waste_type; destination; recovery_status; concentration; discharge_volume; emission_period | Measure accepted output and each waste; calculate direct emissions only from measured activity and concentration data | kg; m3; measured concentration unit | per lot or shipment; emissions at monitoring frequency | same period as production output | every included in-house operation | sum by flow and destination, then normalize to accepted output mass | calibrated scales, waste manifests, laboratory reports, permits, and mass-balance reconciliation |
| `cp_assembly_bom` | `final_instrument_assembly` | electronic and mechanical BOM inputs | product BOM and material issue records | product_model; BOM_revision; part_id; supplier; quantity_per_unit; issued_quantity; returned_quantity; stock_change; unit_mass; included_battery_flag | Reconcile the product-specific BOM to actual issues, returns, substitutions, and stock changes; verify part mass | kg and item count | per production lot with monthly reconciliation | same period as assembled output | every final assembly site | net attributable part mass divided by assembled output mass | approved BOM, change notices, supplier declarations, measured part mass, and stock reconciliation |
| `cp_assembly_energy_auxiliaries` | `final_instrument_assembly` | assembly energy and auxiliaries | meters, purchase, issue, and stock records | meter_id; carrier; reading; auxiliary_id; opening_stock; receipts; issues; closing_stock; allocation_driver | Submeter assembly energy and reconcile auxiliary consumption to production records | kWh or MJ; kg | meter interval and per lot, aggregated monthly | same period as assembled output | every final assembly site | attributable energy or auxiliary quantity divided by assembled output mass | meter evidence, invoices, calibrated scales, and allocation worksheet |
| `cp_assembly_outputs` | `final_instrument_assembly` | assembled output, scrap, rejects, and rework | production and waste records | assembled_output_mass; reject_mass; scrap_type; rework_entry; rework_exit; destination | Measure unique accepted output and wastes; track rework loops without double counting output | kg | per lot | same period as assembly inputs | every final assembly line | accepted mass and waste mass by type normalized to accepted assembled output | calibrated scales, lot genealogy, nonconformance records, and waste manifests |
| `cp_test_inputs` | `calibration_test_packaging` | assembled input, accessories, and packaging | test intake, packaging BOM, and issue records | serial_or_lot; assembled_mass; rework_passes; accessory_id; packaging_material; quantity; unit_mass; included_in_reference_mass | Link unique instruments to test intake and reconcile included accessories and packaging to product-specific issue records | kg and item count | per lot or serial batch | same period as released product | every calibration, test, and packaging site | unique input and included-material mass divided by conforming released product mass | traceability record, packaging BOM, calibrated scale, and stock reconciliation |
| `cp_test_energy_consumables` | `calibration_test_packaging` | calibration, verification, and packaging energy and consumables | equipment meter, runtime, and consumable records | test_station_id; test_type; meter_reading; runtime; conditioning_time; consumable_id; issued_quantity; allocation_driver | Use dedicated test-station or area meters where available; otherwise use documented complete-meter allocation | kWh or MJ; kg | per test batch with monthly reconciliation | same period as released product | every included test and packaging operation | attributable energy and consumables divided by conforming released product mass | meter calibration, equipment log, utility invoice, and allocation worksheet |
| `cp_final_output_quality` | `calibration_test_packaging` | conforming finished product and conformance status | release, calibration, safety, EMC, and quality records | model; serial_or_lot; measured_quantities; ranges; set_points; observed_results; accuracy_or_tolerance; uncertainty_if_reported; test_standard; equipment_id; equipment_calibration_status; pass_fail; released_mass | Link product release to the tests actually required and performed for the represented route | kg and declared engineering units | each serial unit or statistically justified lot, according to the applicable test plan | same period as released product | every release site and represented product family | sum conforming released mass; retain unaggregated conformance evidence | approved test plan, calibrated equipment records, test results, nonconformance disposition, and release authorization |
| `cp_test_outputs` | `calibration_test_packaging` | test rejects and packaging-process waste | nonconformance and waste records | reject_id; part_or_unit; measured_mass; cause; rework_status; final_disposition; waste_material; destination | Track rejects through rework or final waste disposition and measure waste by material | kg | per lot and waste shipment | same period as released product | every test and packaging site | final waste leaving the rework loop divided by conforming released product mass | nonconformance report, calibrated scale, waste manifest, and rework genealogy |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground inventory rows | normalized amount = attributable amount during the reporting period / conforming finished-product mass during the same period; convert the denominator to kg and scale to 1 kg | attributable flow amount; conforming finished-product mass; unit conversion factor | amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_stock_adjusted_consumption` | materials, components, packaging, and consumables | net consumption = opening stock + receipts - closing stock - documented returns or transfers out; reconcile the result to lot issues and substitutions | opening stock; receipts; closing stock; returns; transfers; issue records | stock-adjusted foreground consumption | `eu-pef-2021-2279` |
| `calc_shared_meter_allocation` | energy or auxiliaries without dedicated submetering | allocate the complete measured total using the first defensible allocation rule in Section 7 and document numerator, denominator, coverage, and reconciliation to the complete meter total | total meter consumption; selected physical or other allocation driver; represented output | attributable energy or auxiliary amount | `iso-14044-2006`; `eu-pef-2021-2279` |
| `calc_direct_emission` | measured direct releases | released mass = measured concentration × measured discharge volume, with dimensional conversion and sampling-period coverage explicitly retained | concentration; discharge volume; unit conversion; monitoring coverage | substance mass released | `eu-pef-2021-2279` |
| `calc_reject_rate` | assembly and test rejects | reject rate = final reject mass leaving the rework loop / gross unique input mass; repeated rework passes do not increase gross unique input | final reject mass; gross unique input mass; rework genealogy | disclosed reject fraction and waste mass per kg reference product | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Demonstrate that the represented models measure or check one or more of voltage, current, resistance, or power, lack a recording device, and are not electricity production or supply meters or excluded oscilloscopes/oscillographs. | Product specification, approved BOM, user documentation, nameplate, and classification review against `unsd-cpc-3-0` |
| `dq_temporal_consistency` | all foreground records | Inputs, outputs, meters, stock movements, and released-product mass must cover the same representative period; justify campaigns shorter than 12 months and disclose seasonality or production-ramp effects. | Dated production, stock, meter, and shipment records |
| `dq_technological_geographical_representativeness` | processes and upstream datasets | Match technology, component state, electricity supply, treatment route, geography, and production period to the represented route; disclose proxies and materially different sites or product families. | Dataset metadata, supplier/site mapping, and representativeness assessment following `eu-pef-2021-2279` |
| `dq_bom_and_mass_reconciliation` | product and packaging materials | Reconcile the current product-specific BOM, substitutions, stock-adjusted consumption, accepted output, rejects, wastes, and included packaging/accessory convention; explain unreconciled mass. | BOM revision, stock reconciliation, scale records, output records, and mass-balance worksheet |
| `dq_measurement_traceability` | product calibration and conformance tests | Retain test method, equipment identifier, calibration status, set points, results, tolerance or uncertainty, and pass/fail status for tests actually performed; identify applicable safety and EMC standards without claiming unperformed tests. | Test plan and results, equipment calibration records, and applicable `iec-61010-1-2010-amd1-2016` and `iec-61326-1-2020` evidence |
| `dq_substance_documentation` | materials and components | Retain supplier and manufacturer documentation used to assess restricted substances and clearly distinguish declarations, analytical results, and unresolved evidence gaps. | Supplier declarations and technical documentation structured according to `iec-63000-2016-amd1-2022` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity_scope` | reference_product_identity | Reject the package if the product includes a recording device, is an electricity production or supply meter, is a cathode-ray oscilloscope or oscillograph, or otherwise falls outside the declared product boundary. | `unsd-cpc-3-0` |
| `val_reference_flow` | reference_flow_consistency | Require the exact reference product flow UUID, Mass flow-property UUID, Units of mass unit-group UUID, kg reference unit, exactly 1 kg normalized output, and all required qualifiers. |  |
| `val_process_coverage` | foreground_process_completeness | Require final assembly and calibration/verification/release/packaging records, and require in-house component manufacture whenever the declared site performs it; every included process must have inputs, outputs, waste disposition, and a linked collection protocol. | `iec-63366-2025`; `eu-pef-2021-2279` |
| `val_bom_energy_waste` | inventory_completeness | Require a product-specific BOM and packaging/accessory convention, energy and auxiliary records for each included process, final product output, rejects and wastes, and direct emissions when they occur; unresolved upstream datasets must be disclosed as data gaps. | `eu-pef-2021-2279` |
| `val_quality_release` | product_conformance | Require release evidence for the declared measurement functions and applicable calibration, safety, and EMC test plan; standards cited in metadata do not count as evidence that a test was performed. | `iec-61010-1-2010-amd1-2016`; `iec-61326-1-2020` |
| `val_allocation_disclosure` | shared_burdens | Require every shared burden to identify the allocation decision, driver, numerator, denominator, data period, source records, reconciliation to the complete total, and justification for not applying an earlier hierarchy step. | `iso-14044-2006`; `eu-pef-2021-2279` |
| `val_no_unsupported_values` | quantitative_evidence | Reject invented category-default quantities, undocumented proxy UUIDs, or values copied from a different product/process. Values must arise from the declared collection/calculation protocol or cited non-default evidence. | `iso-14044-2006`; `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific cradle-to-gate foreground manufacturing dataset normalized to 1 kg of conforming finished non-recording electrical measuring instrument |
| downstream_use | Secondary dataset and background dataset for process or lifecyclemodel construction when product identity, route, geography, period, and included-product convention match |
| allowed_use | Modelling the manufacture of covered instruments; supplier or site comparisons with harmonized scope and qualifiers; incorporation into broader product systems with transparent upstream and downstream extensions |
| excluded_use | A category-average claim without representative sampling; use-stage service comparison without declared lifetime and performance; modelling excluded recording instruments, supply meters, oscilloscopes, oscillographs, standalone parts, or services; regulatory conformity claims based solely on this LCA dataset |
| required_metadata | canonical PCR id; product model or family; measured quantities, ranges, and accuracy; recording-device absence; safety category and rated voltage where applicable; geography; technology and in-house/purchased route; reporting period; product, accessories, battery, manual, and packaging mass convention; upstream datasets; allocation and cut-off decisions; test-plan coverage |
| required_quality_disclosure | Foreground share and primary-data coverage; temporal, geographical, and technological representativeness; BOM and mass reconciliation; meter and allocation coverage; test and calibration evidence; proxy and upstream data gaps; reject/rework treatment; exclusions and uncertainty limitations |
| update_trigger | Product or BOM revision; added recording functionality; changed principal measured quantity or accuracy/safety category; changed site, technology, supply mix, packaging, included accessories or batteries; material supplier substitution; changed test plan or applicable standard; reporting data older than the declared validity period; material unresolved data gap closed |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | Dataset (`dataset`) | United Nations Statistics Division, Central Product Classification Version 3.0, structure and explanatory-note resources, including subclass 48243, https://unstats.un.org/unsd/classifications/econ (retrieved 2026-08-09) | Product-category inclusion and exclusion boundary |
| `iec-63366-2025` | Standard (`standard`) | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691 (retrieved 2026-08-09) | Electrical/electronic-product PCR framework, recorded complementary specifications, system-boundary and reporting context |
| `iso-14044-2006` | Standard (`standard`) | ISO 14044:2006 with Amendments 1:2017 and 2:2020, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html (retrieved 2026-08-09) | LCI completeness, allocation hierarchy, reporting, interpretation, and limitations |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 and corrigendum, Product Environmental Footprint Method, http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-09) | Functional-unit/reference-flow structure, company-specific BOM and manufacturing data, process inputs and outputs, data quality, allocation, calculation, and cut-off disclosure |
| `iec-61010-1-2010-amd1-2016` | Standard (`standard`) | IEC 61010-1:2010+AMD1:2016, Safety requirements for electrical equipment for measurement, control, and laboratory use — Part 1: General requirements, https://webstore.iec.ch/en/publication/4279 (retrieved 2026-08-09) | Applicability of safety requirements and product-specific safety-test evidence for electrical test and measurement equipment |
| `iec-61326-1-2020` | Standard (`standard`) | IEC 61326-1:2020, Electrical equipment for measurement, control and laboratory use — EMC requirements — Part 1: General requirements, https://webstore.iec.ch/en/publication/62793 (retrieved 2026-08-09) | Applicability of emissions and immunity verification and retention of route-specific EMC test evidence |
| `iec-63000-2016-amd1-2022` | Standard (`standard`) | IEC 63000:2016+AMD1:2022, Technical documentation for the assessment of electrical and electronic products with respect to the restriction of hazardous substances, https://webstore.iec.ch/en/publication/25985 (retrieved 2026-08-09) | Supplier and manufacturer restricted-substance technical-documentation evidence |
