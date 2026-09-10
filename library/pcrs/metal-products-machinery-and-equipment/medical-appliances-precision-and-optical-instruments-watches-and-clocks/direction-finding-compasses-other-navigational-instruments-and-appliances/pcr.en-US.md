---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.direction-finding-compasses-other-navigational-instruments-and-appliances
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Direction finding compasses; other navigational instruments and appliances

## 1. Scope and Applicability

This PCR applies to foreground data packages for the manufacture of finished direction-finding compasses and other navigational instruments and appliances covered by CPC 3.0 subclass 48211. It covers mechanical, liquid-filled magnetic, gyroscopic, electromechanical, and electronic instruments when the finished product performs a direction-finding, heading, steering, or other navigation function and is delivered at the manufacturing gate.

The producer shall declare the instrument technology, navigation function, intended platform or application, applicable performance or test specification, delivered configuration, included accessories, software or firmware status when relevant, manufacturing geography, and reporting period. A mixed production dataset is allowed only when the product mix and allocation basis are disclosed.

Rangefinders, theodolites, tachymeters, levels, surveying or geophysical instruments, radar and radio-navigation apparatus, and parts or accessories sold separately are outside this PCR unless they are integral to the declared finished CPC 48211 instrument. Use-stage operation, installation on a vessel or other platform, maintenance, and end-of-life treatment are outside the default foreground manufacturing boundary; they may be connected as downstream stages in a lifecycle model when the study goal requires them.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.direction-finding-compasses-other-navigational-instruments-and-appliances |
| classification_refs | CPC 3.0: 48211, exact |
| covered_products | Finished direction-finding compasses and other navigational instruments and appliances, including applicable magnetic, gyroscopic, electromechanical, and electronic configurations |
| excluded_products | Rangefinders, theodolites, tachymeters, levels; surveying, hydrographic, oceanographic, hydrological, meteorological, or geophysical instruments; radar, radio-navigation-aid, or radio-remote-control apparatus; separately supplied parts and accessories; services |
| representative_product | One declared finished navigation instrument production mix, at plant, with its technology, function, performance/test basis, configuration, accessories, and software or firmware status identified |
| production_route | Receipt and preparation of product-specific materials and components; in-house component fabrication when applicable; instrument assembly; software or firmware loading when applicable; calibration and functional testing; finishing, marking, and packaging |
| market_state | Finished product, manufactured, at plant |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Deliver a finished direction-finding compass or other navigational instrument that performs the declared navigation function |
| How much | 1 kg of conforming packaged product output at the manufacturing gate |
| How well | Meets the declared manufacturer specification and any applicable construction, performance, calibration, and test requirements for the identified instrument type |
| How long or cycle | One reporting-period production output; service life and use profile shall be declared separately when downstream lifecycle stages are modelled |
| reference_flow_link | The mass of conforming packaged product output that fulfils the declared instrument function and configuration |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Direction finding compasses, other navigational instruments and appliances `186ab31c-d8f5-48e2-86d2-e415b035e0a3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | instrument technology; navigation function; intended platform or application; applicable performance or test specification; delivered configuration and included accessories; software or firmware status when relevant; packaged or unpackaged mass convention; manufacturing geography; reporting period; production mix |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the foreground inventory to 1 kg of conforming packaged output. State whether reusable transport packaging is excluded and whether single-use sales packaging is included. |
| `production_output_mass` | Conforming and nonconforming instrument outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine mass from calibrated scales or a reconciled production count multiplied by product-specific measured unit mass; do not use nominal catalogue mass without reconciliation. |
| `component_mass_basis` | Materials, components, consumables, rejects, scrap, and packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve product-specific mass records and convert other mass units to kg using the declared Units of mass conversion. |
| `energy_preservation` | Electricity, fuels, compressed air, and thermal services | Energy property declared by the selected flow | kWh, MJ, or the selected flow reference unit | Preserve metered units and conversion factors in raw records; normalize only after assigning the activity to the relevant process and reporting period. |
| `test_result_traceability` | Calibration and functional testing | Test-specific property | Declared test unit | Retain measured test values, acceptance limits, calibration status, test method or specification, and pass/rework/reject disposition; do not convert performance results into mass. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_manufacturing` | Foreground manufacturing dataset | Include all producer-controlled activities from receipt and preparation of materials and components through assembly, configuration, calibration, functional testing, rework, finishing, marking, and packaging. Record products, co-products, wastes, and direct emissions that cross the foreground boundary. | eu-pef-2021-2279 |
| `boundary_upstream_links` | Purchased materials, components, energy, consumables, packaging, and services | Connect each material upstream input to an appropriate upstream dataset with geography, technology, and temporal fit. Do not recursively reproduce the same CPC 48211 manufacturing stage inside its own foreground inventory. | eu-pef-2021-2279 |
| `boundary_exclusions` | Excluded or unavailable processes and flows | Avoid cut-offs. Any exclusion shall be identified, justified, and disclosed with its expected material, energy, and environmental significance; an unavailable background dataset shall be reported as a data gap rather than silently omitted. | eu-pef-2021-2279 |
| `boundary_downstream_extension` | Distribution, installation, use, maintenance, and end of life | These stages are outside the default foreground manufacturing dataset. When a lifecycle study includes them, declare scenario assumptions and connect separate downstream datasets; for electrical or electronic configurations, retain component, material, and hazardous-substance information needed for appropriate treatment modelling. | eu-pef-2021-2279; eu-weee-2012-19 |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Product-specific purchased materials, components, subassemblies, energy carriers, consumables, and packaging arrive at the foreground manufacturing gate with declared identities, quantities, and upstream dataset references |
| starting_condition_role | Starting condition for producer-controlled manufacturing of the finished instrument |
| product_classification_scope | CPC 3.0 subclass 48211 only; adjacent surveying, geophysical, radar/radio-navigation, and separately supplied parts categories are not implicitly included |
| recursive_input_rule | If a purchased input is itself a finished CPC 48211 instrument, record it as a disclosed purchased product input with its own upstream dataset and do not reopen its internal manufacturing inventory in this foreground package |
| upstream_dataset_requirement | Use traceable upstream datasets for purchased materials, components, energy, consumables, packaging, and treatment services; record provider, geography, technology, temporal reference, and any proxy limitation |
| disclosure | Declare instrument technology and configuration, controlled process coverage, outsourced operations, mass convention, reporting period, site coverage, allocation, rework treatment, exclusions, data gaps, and downstream stages included or excluded |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `materials_components_preparation` | Materials and components receipt and preparation | required | Always included | Foreground receipt, incoming inspection, kitting, cleaning, and preparation | kg of prepared materials and components transferred to assembly |
| `in_house_component_fabrication` | In-house component fabrication | conditional | Include when the reporting site machines, forms, coats, prints, solders, or otherwise fabricates components | Foreground component production | kg of accepted components transferred to instrument assembly |
| `instrument_assembly` | Instrument manufacturing and assembly | required | Always included | Foreground mechanical, fluid, electrical, and electronic assembly as applicable | kg of assembled instrument output |
| `firmware_configuration` | Software or firmware loading and configuration | conditional | Include for programmable, digital, or electronically configured instruments | Foreground configuration | kg of configured instrument output |
| `calibration_testing` | Calibration and functional testing | required | Always included; test content depends on declared instrument type and specification | Foreground calibration, environmental or functional test, and disposition | kg of conforming tested instrument output |
| `finishing_packaging` | Finishing, marking, documentation, and packaging | required | Always included | Foreground final preparation and factory-gate output | kg of conforming packaged reference product |

### Process: Materials and components receipt and preparation (`materials_components_preparation`)

#### Inputs

##### Product flows

###### Product-specific materials, components, and subassemblies (`purchased_materials_components`)

Record all purchased mechanical, magnetic, fluid-containing, optical-display, electrical, electronic, enclosure, fastener, cable, seal, and other items that enter the declared product configuration. The bill of materials shall remain product-specific.

- Selected flow: Product-specific purchased material, component, or subassembly flow selected by the data producer
- Flow property / unit: Mass / kg
- Amount rule: Measured receipt or stock-reconciled consumption assigned to the product configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`
- Sources: `eu-pef-2021-2279`

###### Incoming preparation consumables (`incoming_preparation_consumables`)

Record cleaning agents, protective materials, temporary fixtures, and other consumables used to prepare inputs when they cross the foreground boundary.

- Selected flow: Site-selected preparation consumable flow
- Flow property / unit: Mass or volume / selected flow reference unit
- Amount rule: Issued, metered, or stock-reconciled quantity used for the product batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`

##### Waste flows

No waste input is prescribed category-wide. Record returned or reprocessed material as an input only when it crosses the process boundary and its prior burden treatment is disclosed.

##### Elementary flows

No elementary input is prescribed category-wide; measured withdrawals shall be recorded when they cross the environment boundary.

#### Outputs

##### Product flows

###### Prepared and kitted materials and components (`prepared_materials_components`)

Record the mass transferred to assembly after incoming inspection and preparation.

- Selected flow: Internal prepared-material and component transfer
- Flow property / unit: Mass / kg
- Amount rule: Calculated from accepted receipts, stock changes, and preparation losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of prepared materials and components transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_materials`

##### Waste flows

###### Incoming rejects and preparation losses (`incoming_rejects_losses`)

Record rejected components, damaged materials, removed protective items, and preparation residues by material or waste route.

- Selected flow: Site-selected waste flow by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed or stock-reconciled rejected and discarded quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_rejects`

##### Elementary flows

###### Direct preparation emissions (`preparation_direct_emissions`)

Record measured or permit-calculated releases from cleaning or preparation only when they cross the environment boundary.

- Selected flow: Substance- and compartment-specific elementary flow selected by the data producer
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or calculation from collected activity data and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`

### Process: In-house component fabrication (`in_house_component_fabrication`)

#### Inputs

##### Product flows

###### Fabrication materials and prepared components (`fabrication_material_inputs`)

Record only materials and components consumed in producer-controlled machining, forming, coating, printing, joining, or electronic assembly.

- Selected flow: Product-specific material or component flow selected by the data producer
- Flow property / unit: Mass / kg
- Amount rule: Metered, issued, or stock-reconciled consumption by fabrication route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of accepted fabricated components
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`

###### Fabrication energy (`fabrication_energy`)

Record electricity, fuels, compressed air, and thermal services used by included fabrication equipment and allocated support systems.

- Selected flow: Geography- and technology-specific energy carrier selected by the data producer
- Flow property / unit: Energy / kWh, MJ, or selected flow reference unit
- Amount rule: Metered consumption or documented equipment-level allocation for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of accepted fabricated components
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-pef-2021-2279`

##### Waste flows

No waste input is prescribed category-wide.

##### Elementary flows

No elementary input is prescribed category-wide; record direct resource withdrawals when present.

#### Outputs

##### Product flows

###### Accepted fabricated components (`accepted_fabricated_components`)

Record accepted components transferred to instrument assembly.

- Selected flow: Internal fabricated-component transfer
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted component mass or reconciled accepted count multiplied by measured unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of accepted fabricated components
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_production_output`

##### Waste flows

###### Fabrication scrap and treatment outputs (`fabrication_scrap`)

Separate recyclable metal or polymer scrap, electronic scrap, hazardous residues, and other treatment routes where material.

- Selected flow: Site-selected waste flow by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed or stock-reconciled waste transferred to each route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of accepted fabricated components
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_rejects`

##### Elementary flows

###### Direct fabrication emissions (`fabrication_direct_emissions`)

Record substance- and compartment-specific emissions from producer-controlled fabrication, coating, soldering, cleaning, or combustion.

- Selected flow: Substance- and compartment-specific elementary flow selected by the data producer
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or calculation from collected activity data and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of accepted fabricated components
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`

### Process: Instrument manufacturing and assembly (`instrument_assembly`)

#### Inputs

##### Product flows

###### Prepared components and subassemblies (`assembly_components`)

Record accepted purchased and in-house fabricated components entering the declared assembly route.

- Selected flow: Product-specific component or internal transfer flow selected by the data producer
- Flow property / unit: Mass / kg
- Amount rule: Issued mass or reconciled component count multiplied by measured unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_materials`

###### Assembly consumables and filling media (`assembly_consumables`)

Record adhesives, solder, flux, lubricants, sealing materials, compass liquid or other filling media, process gases, and cleaning agents actually consumed by the selected technology.

- Selected flow: Product- and technology-specific consumable flow selected by the data producer
- Flow property / unit: Mass or volume / selected flow reference unit
- Amount rule: Issued, metered, or stock-reconciled consumption by production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables`

###### Assembly energy (`assembly_energy`)

Record electricity, fuels, compressed air, and thermal services used by assembly lines and allocated support equipment.

- Selected flow: Geography- and technology-specific energy carrier selected by the data producer
- Flow property / unit: Energy / kWh, MJ, or selected flow reference unit
- Amount rule: Metered consumption or documented equipment-level allocation for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-pef-2021-2279`

##### Waste flows

No waste input is prescribed category-wide.

##### Elementary flows

No elementary input is prescribed category-wide; record direct resource withdrawals when present.

#### Outputs

##### Product flows

###### Assembled instrument awaiting configuration or test (`assembled_instrument`)

Record the assembled instrument transferred to configuration or calibration and testing.

- Selected flow: Internal assembled-instrument transfer
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or reconciled accepted count multiplied by measured unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_production_output`

##### Waste flows

###### Assembly rejects, scrap, and hazardous waste (`assembly_waste`)

Record rejected parts, spills, residues, contaminated wipes, electronic scrap, and other waste by material and treatment route.

- Selected flow: Site-selected waste flow by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed or stock-reconciled waste transferred to each route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_rejects`

##### Elementary flows

###### Direct assembly emissions (`assembly_direct_emissions`)

Record substance- and compartment-specific emissions from soldering, coating, sealing, filling, cleaning, or on-site combustion.

- Selected flow: Substance- and compartment-specific elementary flow selected by the data producer
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or calculation from collected activity data and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`

### Process: Software or firmware loading and configuration (`firmware_configuration`)

#### Inputs

##### Product flows

###### Programmable assembled instruments (`programmable_instruments`)

Record only instruments that require software, firmware, map, parameter, or configuration loading before test.

- Selected flow: Internal assembled-instrument transfer
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or reconciled unit count multiplied by measured unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of configured instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output`

###### Configuration energy (`configuration_energy`)

Record electricity used by programming stations and directly attributable support equipment.

- Selected flow: Geography-specific electricity flow selected by the data producer
- Flow property / unit: Energy / kWh
- Amount rule: Metered consumption or documented equipment-time allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of configured instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`

##### Waste flows

No waste input is prescribed category-wide.

##### Elementary flows

No elementary input is prescribed category-wide.

#### Outputs

##### Product flows

###### Configured instrument (`configured_instrument`)

Record configured instruments and preserve the software or firmware identifier and configuration status.

- Selected flow: Internal configured-instrument transfer
- Flow property / unit: Mass / kg
- Amount rule: Reconciled configured unit count multiplied by measured product-specific unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of configured instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_configuration_records`

##### Waste flows

###### Configuration rejects and rework (`configuration_rejects`)

Record units sent to reconfiguration, rework, or disposal without double-counting their original material burden.

- Selected flow: Internal rework transfer or site-selected waste flow
- Flow property / unit: Mass / kg
- Amount rule: Disposition count multiplied by measured unit mass, separated by rework and disposal route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of configured instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_configuration_records`

##### Elementary flows

No direct elementary output is prescribed category-wide.

### Process: Calibration and functional testing (`calibration_testing`)

#### Inputs

##### Product flows

###### Assembled or configured instruments for test (`instruments_for_test`)

Record instruments entering calibration and testing, distinguished by technology and declared test route.

- Selected flow: Internal assembled- or configured-instrument transfer
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or reconciled unit count multiplied by measured unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of conforming tested instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_calibration`

###### Test energy and consumables (`test_energy_consumables`)

Record electricity, fuels, chamber services, calibration media, test gases, and replaceable test consumables used by the declared route.

- Selected flow: Site-selected energy carrier or consumable flow
- Flow property / unit: Energy, mass, or volume / selected flow reference unit
- Amount rule: Metered, issued, or equipment-time-allocated consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg of conforming tested instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_calibration`
- Sources: `iso-25862-2019`; `iso-8728-2024`; `iec-60945-2002`

##### Waste flows

No waste input is prescribed category-wide.

##### Elementary flows

No elementary input is prescribed category-wide; record direct resource withdrawals used by test chambers or other equipment when present.

#### Outputs

##### Product flows

###### Conforming calibrated and tested instrument (`tested_conforming_instrument`)

Record only instruments that pass the declared manufacturer and applicable external requirements.

- Selected flow: Internal conforming tested-instrument transfer
- Flow property / unit: Mass / kg
- Amount rule: Passed unit count multiplied by measured product-specific unit mass and reconciled to transfer mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of conforming tested instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_calibration`
- Sources: `iso-25862-2019`; `iso-8728-2024`; `iec-60945-2002`

##### Waste flows

###### Test failures, rework, and consumed test items (`test_failures_waste`)

Separate rework loops, recoverable failed instruments, discarded units, and consumed test items by disposition route.

- Selected flow: Internal rework transfer or site-selected waste flow
- Flow property / unit: Mass / kg
- Amount rule: Weighed quantity or disposition count multiplied by measured unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of conforming tested instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_calibration`

##### Elementary flows

###### Direct test emissions (`test_direct_emissions`)

Record releases from environmental chambers, test gases, fuels, or other test operations when they cross the environment boundary.

- Selected flow: Substance- and compartment-specific elementary flow selected by the data producer
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or calculation from collected activity data and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg of conforming tested instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`

### Process: Finishing, marking, documentation, and packaging (`finishing_packaging`)

#### Inputs

##### Product flows

###### Conforming tested instruments (`conforming_instruments_for_finishing`)

Record conforming instruments entering final cleaning, marking, documentation, and packaging.

- Selected flow: Internal conforming tested-instrument transfer
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or reconciled unit count multiplied by measured unit mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output`

###### Sales packaging and documentation materials (`sales_packaging_materials`)

Record product-specific primary and secondary sales packaging, manuals, labels, protective inserts, and included accessories according to the declared mass convention.

- Selected flow: Material-specific packaging or documentation flow selected by the data producer
- Flow property / unit: Mass / kg
- Amount rule: BOM quantity or issued quantity reconciled to packaged production output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_output`
- Sources: `eu-pef-2021-2279`

###### Finishing and packaging energy (`finishing_packaging_energy`)

Record energy used by cleaning, marking, printing, and packaging equipment.

- Selected flow: Geography-specific energy carrier selected by the data producer
- Flow property / unit: Energy / kWh, MJ, or selected flow reference unit
- Amount rule: Metered consumption or documented equipment-time allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`

##### Waste flows

No waste input is prescribed category-wide.

##### Elementary flows

No elementary input is prescribed category-wide; record direct resource withdrawals when present.

#### Outputs

##### Product flows

###### Finished direction-finding compass or other navigational instrument (`reference_product`)

This is the conforming packaged factory-gate reference product with all required qualifiers declared.

- Selected flow: Direction finding compasses, other navigational instruments and appliances `186ab31c-d8f5-48e2-86d2-e415b035e0a3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg after normalization from measured conforming packaged output mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_output`

##### Waste flows

###### Finishing and packaging waste (`finishing_packaging_waste`)

Record cleaning residues, label and print waste, offcuts, damaged packaging, and rejected final units by treatment route.

- Selected flow: Site-selected waste flow by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed or stock-reconciled waste transferred to each route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_rejects`

##### Elementary flows

###### Direct finishing emissions (`finishing_direct_emissions`)

Record releases from cleaning, marking, printing, or packaging operations when they cross the environment boundary.

- Selected flow: Substance- and compartment-specific elementary flow selected by the data producer
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or calculation from collected activity data and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Shared production, utilities, buildings, test equipment, and waste systems | First avoid allocation by submetering, separate batch records, equipment-time records, or subdivision of independently measured processes. | eu-pef-2021-2279 |
| `allocation_physical` | Shared processes that cannot be subdivided | Use a causal physical driver such as machine time, test-chamber time, energy metering, occupied area-time, or mass throughput when it represents resource use. Document the driver, period, denominator, and products sharing the process. | eu-pef-2021-2279 |
| `allocation_economic_fallback` | Shared processes without a defensible physical relationship | Economic allocation may be used only as a documented fallback. Record prices, currency, price period, product quantities, and sensitivity to the allocation choice. | eu-pef-2021-2279 |
| `allocation_rework` | Rework and repeated test loops | Keep the original material burden with the instrument batch and add only the incremental energy, consumables, emissions, and waste from each rework or repeated-test loop. Do not count the same instrument mass as a new purchased input. |  |
| `allocation_scrap` | Scrap and waste leaving the foreground system | Record gross scrap and waste quantities and treatment routes. Do not subtract avoided burdens or recycled-content credits inside the foreground manufacturing inventory unless the downstream study applies and documents a separate consistent recycling method. | eu-pef-2021-2279 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | materials_components_preparation | Purchased and internally fabricated materials, components, and subassemblies | BOM, purchase receipt, issue record, stock ledger | part_id; material_or_component_name; supplier; quantity; unit; measured_unit_mass; batch; product_configuration; opening_stock; closing_stock; returns | Product-specific BOM reconciled with receipts, issues, returns, and stock change | kg and original record unit | Each batch; monthly reconciliation | Same representative reporting period as output | Every included manufacturing site and outsourced controlled operation | Sum net consumption by item and configuration; convert to kg; assign to product using direct records before allocation | Approved BOM revision; scale calibration; stock reconciliation; supplier traceability; variance explanation |
| `cp_consumables` | instrument_assembly | Preparation, fabrication, assembly, cleaning, filling, and finishing consumables | Issue log, meter, purchase and stock record | consumable_id; function; batch; issued_quantity; returned_quantity; opening_stock; closing_stock; unit; density_if_volume_to_mass; process_id | Metered or stock-reconciled consumption linked to process and batch | selected flow reference unit | Each batch or monthly | Same representative reporting period as output | Every included manufacturing site | Net consumption equals issues plus opening stock minus returns and closing stock; allocate only documented shared remainder | Meter calibration; stock reconciliation; SDS or product identity; allocation record |
| `cp_process_energy` | instrument_assembly | Electricity, fuels, compressed air, and thermal services | Meter, invoice, equipment log | energy_carrier; meter_id; start_reading; end_reading; unit; process_id; equipment_time; reporting_period; allocation_driver | Submetering preferred; otherwise reconcile site energy and allocate with a causal driver | kWh, MJ, or selected flow reference unit | Continuous or monthly | At least one representative production year, or justified shorter campaign | Every included manufacturing site | Net metered consumption minus excluded loads; assign by process and product with documented causal driver; normalize to reference output | Meter calibration; invoice reconciliation; excluded-load list; allocation worksheet |
| `cp_production_output` | finishing_packaging | Internal transfers, conforming output, nonconforming output, and production mix | Production and transfer log; scale record | product_id; configuration; quantity; gross_mass; packaging_mass; net_mass; pass_status; batch; process_id; timestamp | Calibrated weighing or reconciled count multiplied by measured product-specific unit mass | kg | Each batch | Same representative reporting period as inputs | Every included manufacturing site | Sum conforming output using the declared packaging convention; preserve nonconforming and rework dispositions separately | Scale calibration; count-mass reconciliation; batch release record; packaging convention |
| `cp_waste_rejects` | instrument_assembly | Rejects, scrap, residues, packaging waste, and treatment transfers | Waste scale ticket, reject log, transporter receipt | waste_id; material; hazardous_status; source_process; mass; unit; disposition; treatment_provider; batch; date | Weigh by waste stream and reconcile with reject and shipment records | kg | Each shipment and batch; monthly reconciliation | Same representative reporting period as output | Every included manufacturing site | Sum by source process, material, hazardous status, and treatment route; exclude internal rework transfers from final waste until discarded | Scale ticket; licensed treatment receipt where applicable; hazardous classification; mass-balance reconciliation |
| `cp_direct_emissions` | instrument_assembly | Direct emissions to air, water, and soil | Continuous monitor, stack or wastewater test, permit calculation | substance; compartment; concentration; flow_rate; operating_time; activity_amount; factor; factor_source; control_efficiency; process_id | Direct measurement preferred; otherwise calculate from collected activity and a documented factor | kg of substance and original measurement unit | As required by monitoring method; aggregate monthly | Same representative reporting period as output | Every included emitting source | Convert measured concentration and flow or activity times factor to mass; subtract only measured control removal; assign to process | Instrument calibration; laboratory report; permit method; factor reference; uncertainty record |
| `cp_configuration_records` | firmware_configuration | Software or firmware loading, configuration, and disposition | Configuration station log | product_id; hardware_revision; software_or_firmware_id; configuration_id; start_time; end_time; pass_status; rework_count; energy_assignment | Export controlled configuration records and reconcile to production batches | unit count, kg, and kWh when allocated | Each configured unit or batch | Same representative reporting period as output | Each included configuration station | Count unique units by final status; record repeat operations as rework; normalize assigned energy to configured output | Configuration checksum or revision; station log; batch reconciliation; disposition record |
| `cp_test_calibration` | calibration_testing | Calibration, functional or environmental testing, pass/rework/reject disposition, energy, and consumables | Test-system export, calibration certificate, chamber log | product_id; technology; test_method; specification_revision; measured_value; unit; acceptance_limit; equipment_id; calibration_status; start_time; end_time; pass_status; rework_count; energy; consumables | Export test results and reconcile to released and rejected production units | test-specific unit, unit count, kg, kWh, and consumable reference unit | Each tested unit or statistically justified batch | Same representative reporting period as output | Every included test route and outsourced controlled test | Preserve raw test values; count each unit once in final disposition; add repeated-test activity without duplicating instrument mass | Equipment calibration; method revision; acceptance record; traceable disposition; ISO/IEC or manufacturer specification when applicable |
| `cp_packaging_output` | finishing_packaging | Sales packaging, documentation, included accessories, and final packaged output | Packaging BOM, issue record, final scale record | package_id; material; item_count; unit_mass; included_accessory; document_mass; product_id; gross_packaged_mass; reusable_transport_packaging_mass | Product-specific packaging BOM reconciled with issues and final weighing | kg | Each packaging configuration and batch | Same representative reporting period as output | Every included finishing and packaging site | Sum single-use packaging and declared included items; exclude reusable transport packaging only when separately tracked and disclosed | Packaging BOM revision; scale calibration; issue reconciliation; mass convention approval |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every foreground inventory amount | normalized amount = reporting-period amount / conforming packaged output mass | Collected or calculated reporting-period amount; conforming packaged output mass from `cp_production_output` and `cp_packaging_output` | Amount per 1 kg reference product | eu-pef-2021-2279 |
| `calc_count_to_mass` | Component, instrument, reject, or packaging records reported by count | mass = item count × product-specific measured mean unit mass; retain sampling plan and variability | Item count; calibrated measured unit masses; configuration identity | kg by configuration and disposition |  |
| `calc_stock_reconciliation` | Materials and consumables without direct metering | consumption = opening stock + receipts - closing stock - documented returns - documented transfers outside scope | Stock ledger; receipts; returns; transfers; reporting period | Net foreground consumption | eu-pef-2021-2279 |
| `calc_direct_emission` | Factor-based direct emissions | emission mass = collected activity × documented emission factor × (1 - measured control efficiency); preserve original units and conversions | Activity record; factor; control efficiency; unit conversion | kg substance by compartment | eu-pef-2021-2279 |
| `calc_mass_balance` | Each process and reporting-period foreground package | Compare mass inputs with product, waste, measured direct-emission, stock-change, and documented evaporation outputs; investigate and disclose residual rather than forcing closure | Material and product inputs; outputs; wastes; direct emissions; stock change | Mass-balance residual and reconciliation statement |  |
| `calc_shared_resource_allocation` | Shared energy, utilities, buildings, and test equipment | allocated amount = shared amount × declared causal driver for the product / sum of the same driver for all products sharing the resource | Shared total; product driver; total driver; period; product list | Allocated foreground activity | eu-pef-2021-2279 |
| `calc_rework_increment` | Rework and repeated tests | Add only incremental rework energy, consumables, emissions, and waste to the original batch; instrument mass remains one continuous internal transfer | Rework log; repeated-test log; incremental resource records; final disposition | Rework-adjusted process inventory without duplicate product mass |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and product mix | Match the Tiangong UUID and CPC 48211 scope; declare all required qualifiers and exclude adjacent product classes. | Dataset metadata; product specification; classification review; reference-flow comment |
| `dq_completeness` | Foreground process inventory | Cover all known material, energy, water, product, co-product, waste, and direct-emission flows for included processes; list exclusions and data gaps explicitly. | Process map; reconciled ledgers; meter list; waste register; emission register; exclusion log |
| `dq_temporal` | Inputs, outputs, and allocation drivers | Use the same representative reporting period, normally at least 12 consecutive months or a justified complete production campaign; disclose abnormal shutdowns or start-up conditions. | Timestamped records; production calendar; period justification |
| `dq_technology` | Instrument route and test route | Data shall represent the declared magnetic, gyroscopic, electromechanical, or electronic technology and delivered configuration; mixed routes require disclosed shares. | BOM revision; route sheet; equipment list; configuration and test records |
| `dq_geography` | Manufacturing and upstream links | Identify every included site and outsourced controlled operation; upstream datasets shall disclose geography and proxy limitations. | Site list; supplier records; dataset metadata; proxy register |
| `dq_precision` | Measurements and calculated quantities | Retain instrument calibration, sampling, count-to-mass variability, factor uncertainty, and reconciliation residuals sufficient to review each material quantity. | Calibration certificates; sampling plan; raw measurements; uncertainty and reconciliation records |
| `dq_allocation` | Shared resources and multi-output processes | Record the hierarchy applied, driver, denominator, product population, period, and sensitivity when allocation is material. | Submeter records; allocation worksheet; price or physical-driver evidence; sensitivity result |
| `dq_traceability` | Product-specific BOM, configuration, test, waste, and output | Maintain a batch or reporting-period chain from purchased inputs through configuration and test disposition to final output and waste treatment. | BOM and batch records; configuration checksum; test export; waste tickets; release record |
| `dq_review` | Dataset release | An independent reviewer shall be able to reproduce normalization, mass balance, allocation, reference-flow identity, and all declared limitations from retained evidence. | Review checklist; calculation workbook; source register; versioned foreground package |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | Reference flow | Confirm product flow UUID `186ab31c-d8f5-48e2-86d2-e415b035e0a3`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg; reject a package with a different or missing identity. |  |
| `validation_scope_qualifiers` | Product identity | Confirm CPC 48211 scope and every required qualifier, including technology, navigation function, application, performance/test basis, configuration, software or firmware status, mass convention, geography, period, and product mix. | unsd-cpc-3-0; iso-25862-2019; iso-8728-2024; iec-60945-2002 |
| `validation_process_coverage` | Process map and inventory | Confirm all required processes are present, every applicable conditional process is included, outsourced controlled operations are disclosed, and all detailed process IDs match the process map. | eu-pef-2021-2279 |
| `validation_bom_output_reconciliation` | Materials, components, packaging, and output | Confirm product-specific BOM and packaging records reconcile to conforming output, rejects, wastes, stock change, and the disclosed mass-balance residual. | eu-pef-2021-2279 |
| `validation_energy_emissions` | Energy and direct emissions | Confirm energy records cover included equipment and support loads and each direct emission is measured or calculated from collected activity using a documented factor; unresolved sources or units fail the affected check. | eu-pef-2021-2279 |
| `validation_test_traceability` | Calibration and testing | Confirm the applicable specification or manufacturer test basis, equipment calibration status, measured result, acceptance limit, and final disposition are traceable for the declared instrument route. | iso-25862-2019; iso-8728-2024; iec-60945-2002 |
| `validation_allocation` | Shared and multifunctional processes | Confirm subdivision was considered first and any remaining allocation has a reproducible causal physical driver or documented fallback with sensitivity. | eu-pef-2021-2279 |
| `validation_no_silent_cutoff` | Exclusions and data gaps | Confirm exclusions, unavailable background data, and cut-offs are explicit and justified; any silent omission makes validation inconclusive. | eu-pef-2021-2279 |
| `validation_electronic_eol_disclosure` | Electrical or electronic configurations when downstream end of life is modelled | Confirm component, material, and hazardous-substance information needed for treatment modelling is retained and the downstream scenario is separate from foreground manufacturing. | eu-weee-2012-19 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or disclosed production-mix foreground manufacturing dataset for a finished CPC 48211 instrument |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Product carbon-footprint or LCA studies that require a traceable manufacturing-stage dataset and whose product technology, configuration, geography, period, and mass convention match the declared scope |
| excluded_use | Direct comparison of materially different navigation technologies or performance classes without functional adjustment; use-stage, installation, maintenance, or end-of-life claims not represented by connected downstream datasets; adjacent CPC categories |
| required_metadata | PCR id and version; product flow UUID; CPC code; instrument technology and navigation function; platform or application; performance/test basis; configuration and included accessories; software or firmware status; packaging convention; site and geography; reporting period; product mix; process coverage; allocation; upstream dataset references |
| required_quality_disclosure | Primary-data share; temporal, geographical, and technological representativeness; BOM and output reconciliation; mass-balance residual; metering and allocation methods; test and calibration traceability; exclusions; data gaps; proxy datasets; uncertainty; review status |
| update_trigger | Change in product technology, BOM, configuration, software or firmware affecting manufacturing, performance/test route, site, supplier mix, energy mix, allocation, packaging convention, waste treatment, applicable standard, or reporting period that materially changes the inventory or qualifiers |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, CPC resources and structure, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-10) | CPC 48211 product-category identity and adjacent-category exclusions |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, Official Journal L 471, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 (retrieved 2026-08-10) | Functional-unit structure, supply-chain boundary, foreground products/wastes, product-specific BOM and manufacturing data, allocation hierarchy, cut-off disclosure, and data-quality requirements |
| `iso-25862-2019` | `standard` | ISO 25862:2019, Ships and marine technology - Marine magnetic compasses, binnacles and azimuth reading devices, official abstract and status, https://www.iso.org/standard/68015.html (retrieved 2026-08-10) | Magnetic-compass product identity, technology qualifiers, construction/performance scope, and calibration/test traceability |
| `iso-8728-2024` | `standard` | ISO 8728:2024, Ships and marine technology - Marine gyro-compasses, official abstract and status, https://www.iso.org/standard/82079.html (retrieved 2026-08-10) | Gyro-compass product identity, construction/performance scope, and type-test traceability |
| `iec-60945-2002` | `standard` | IEC 60945:2002, Maritime navigation and radiocommunication equipment and systems - General requirements - Methods of testing and required test results, official publication page, https://webstore.iec.ch/en/publication/3959 (retrieved 2026-08-10) | Electronic shipborne navigation-equipment performance/test qualifier and test-record requirements |
| `eu-weee-2012-19` | `official_guidance` | Directive 2012/19/EU on waste electrical and electronic equipment, consolidated text, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02012L0019-20240408 (retrieved 2026-08-10) | Conditional disclosure of electrical/electronic components, materials, and hazardous substances for downstream treatment modelling |
