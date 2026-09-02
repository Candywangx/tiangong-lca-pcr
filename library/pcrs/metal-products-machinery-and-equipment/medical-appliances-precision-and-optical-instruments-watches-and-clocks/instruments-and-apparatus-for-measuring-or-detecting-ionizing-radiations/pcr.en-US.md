---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-measuring-or-detecting-ionizing-radiations
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Instruments and apparatus for measuring or detecting ionizing radiations

## 1. Scope and Applicability

This PCR applies to the production of complete instruments and apparatus whose principal function is measuring or detecting ionizing radiation. Covered products include portable and installed radiation monitors, survey meters, dose or dose-rate meters, contamination monitors, counters, spectrometers, dosimeters, and radionuclide calibrators when supplied as complete instruments. The exact detector principle, radiation type, measured quantity, application class, and applicable performance standard are product qualifiers rather than separate PCR identities.

The foreground boundary covers receipt of purchased materials, components, detector assemblies, and subassemblies; in-house detector or sensor manufacture when performed; printed-circuit-board manufacture or assembly when performed; enclosure manufacture and surface finishing when performed; final assembly; software or firmware loading where integral to operation; calibration and performance verification; and packaging at the manufacturing site. Upstream production of purchased inputs is represented by linked upstream datasets.

Detector modules, sensor modules, bare detectors, replacement parts, accessories sold separately, ionizing-radiation sources sold as products, radiation-generating medical or industrial treatment equipment, and instruments whose principal function is measuring non-ionizing radiation are excluded as reference products. Use, maintenance, transport after the factory gate, and end-of-life treatment are outside the foreground manufacturing boundary and require separate scenario datasets when included in a life-cycle model.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-measuring-or-detecting-ionizing-radiations |
| classification_refs | CPC 3.0: 48241 — Instruments and apparatus for measuring or detecting ionizing radiations |
| covered_products | Complete instruments whose principal function is measurement or detection of ionizing radiation, including portable and installed monitors, survey meters, dose or dose-rate meters, contamination monitors, counters, spectrometers, dosimeters, and radionuclide calibrators |
| excluded_products | Detector or sensor modules and bare detectors; separately supplied parts and accessories; radioactive sources sold as products; radiation-generating treatment or inspection equipment; non-ionizing-radiation instruments |
| representative_product | A complete, accepted, calibrated, and functionally verified ionizing-radiation measuring or detecting instrument at the manufacturing site gate |
| production_route | Purchased components and subassemblies, conditional in-house detector/electronics/enclosure production, final assembly, integral software or firmware loading, calibration and performance verification, and packaging |
| market_state | New finished instrument, calibrated and functionally verified, supplied at the manufacturing site gate; packaging is reported separately from net instrument mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net mass of a complete ionizing-radiation measuring or detecting instrument accepted after calibration and performance verification |
| How much | 1 kg net finished instrument, excluding transport and sales packaging |
| How well | Complete and operational in the declared configuration; accepted against the manufacturer's test plan and the declared application-specific calibration and performance requirements |
| How long or cycle | Output produced during the declared reporting period or production campaign |
| reference_flow_link | `finished_instrument_output` in process `calibration_and_performance_verification` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Instruments and apparatus for measuring or detecting ionizing radiations `0144e43c-eb28-46f2-be33-804023379cf1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product model or family; detector principle; radiation type; measured quantity; rated measurement or detection range; portable, installed, or integrated configuration; application or performance class; included probes, accessories, batteries, and software; production geography and site; calibration and performance standards used; calibration configuration and reference radiation or source; net instrument mass; firmware or software version where integral |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure the net mass of accepted complete instruments after calibration and performance verification and before packaging; normalize the inventory to exactly 1 kg. |
| `packaging_mass_separation` | Sales and transport packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure packaging separately by material and do not include it in reference-product mass. |
| `item_to_mass_conversion` | Production records in instrument counts | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert counts with measured net mass for the same product model or a documented production-weighted product-family average from the same reporting period; retain the count and weighing records. |
| `bom_mass_consistency` | Product materials, components, detector assemblies, batteries, cables, probes, and accessories included with the product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record masses on one consistent as-installed basis and reconcile the bill of materials, production losses, and accepted output without silently including packaging. |
| `energy_carrier_preservation` | Electricity, fuel, compressed air, and purchased thermal energy | Carrier-specific energy property | Carrier-specific reference unit | Preserve metered carrier and unit; document every conversion to the reporting unit and allocate only shared consumption using the declared allocation rule. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate_inputs` | Purchased materials, parts, components, subassemblies, utilities, and services | Include upstream datasets for all material and energy inputs that cross the foreground boundary and include all environmentally relevant foreground flows required by the declared goal and scope. | `eu-pef-2021-2279` |
| `boundary_foreground_operations` | Manufacturing site operations | Include applicable detector fabrication, electronics and printed-circuit-board operations, enclosure manufacture and finishing, final assembly, integral software or firmware loading, calibration and performance verification, rework, cleaning, and packaging; disclose outsourced steps. | `iec-61010-1-2010-amd1-2016`; `us-epa-pcb-pollution-prevention-1990` |
| `boundary_calibration_testing` | Calibration and performance verification | Include electricity, consumables, reference-source or radiation-field service, failed tests, retesting, and attributable facility operation. Declare the applicable instrument standard and retain test and calibration records; do not apply one performance criterion to every instrument type. | `iec-62244-2019`; `iec-63465-2026`; `iaea-ssg-85-2023` |
| `boundary_packaging` | Packaging at the manufacturing site | Include packaging materials and packaging-process energy as separate inventory flows; keep packaging mass outside the 1 kg net instrument reference flow. | `eu-pef-2021-2279` |
| `boundary_downstream_exclusion` | Use, maintenance, and end-of-life | Exclude downstream stages from the foreground manufacturing dataset. When a life-cycle model adds them, use declared service-life, power, maintenance, calibration, collection, and treatment scenarios and identify applicable electrical and electronic equipment obligations. | `eu-weee-2012-19-consolidated-2024` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased raw materials, electronic parts, detector or sensor assemblies, mechanical parts, batteries or power-supply parts, cables, displays, fasteners, packaging materials, utilities, and outsourced services received at the manufacturing site gate |
| starting_condition_role | Explicit foreground entry condition for manufacturing operations |
| product_classification_scope | Complete CPC 3.0 subclass 48241 instruments and apparatus; modules and separately supplied components are inputs or separate products, not this PCR reference product |
| recursive_input_rule | A purchased complete instrument within the same category is recorded as a product input with an upstream dataset and a declared reuse, integration, or configuration role; its production is not recursively reconstructed inside the receiving process |
| upstream_dataset_requirement | Link each purchased material, component, subassembly, utility, calibration service, and outsourced manufacturing step to the most representative available upstream dataset; disclose proxy, geography, technology, and age gaps |
| disclosure | Declare detector technology, radiation type, measured quantity, product configuration, included accessories, in-house and outsourced operations, calibration basis, reporting period, production site, net mass, packaging basis, allocation choices, data gaps, and excluded life-cycle stages |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `detector_subassembly_production` | Detector or sensor subassembly production | conditional | Include when detector or sensor fabrication, filling, encapsulation, or integration is performed by the reporting organization | Foreground detector production | kg conforming detector or sensor subassembly transferred to final assembly |
| `electronics_and_pcb_production` | Electronics and printed-circuit-board production or assembly | conditional | Include when printed-circuit-board manufacture, population, soldering, cleaning, or electronics testing is performed within the reporting boundary | Foreground electronics production | kg conforming electronics transferred to final assembly |
| `enclosure_and_mechanical_parts` | Enclosure and mechanical-parts manufacture and finishing | conditional | Include when forming, machining, moulding, coating, plating, or other surface finishing is performed within the reporting boundary | Foreground mechanical production | kg conforming enclosure and mechanical parts transferred to final assembly |
| `final_instrument_assembly` | Final instrument assembly and configuration | required | Always include for complete instruments | Foreground integration of detector, electronics, enclosure, power system, probes, cables, displays, accessories, and integral software or firmware | kg assembled instrument transferred to calibration and performance verification |
| `calibration_and_performance_verification` | Calibration and performance verification | required | Always include for accepted complete instruments | Foreground calibration, function and safety checks, performance verification, failed-test handling, and rework routing | kg accepted net finished instrument |
| `packaging` | Packaging | required | Always include packaging performed before the product leaves the manufacturing site | Foreground packaging with packaging mass kept separate from net instrument mass | kg packaged accepted instrument and kg packaging by material |

### Process: Detector or sensor subassembly production (`detector_subassembly_production`)

#### Inputs

##### Product flows

###### Detector materials, parts, and purchased sensor elements (`detector_materials_parts`)

Record every material, part, gas, scintillator, semiconductor element, optical component, electrode, housing, seal, and purchased sensor element that becomes part of an in-house detector or sensor subassembly. Select exact Tiangong product flows during foreground package construction.

- Selected flow: Site- and technology-specific detector materials and parts
- Flow property / unit: Mass / kg, with item-to-mass conversion where necessary
- Amount rule: measured issued quantity minus documented unused return, by material or part
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming detector or sensor subassembly transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`

###### Process electricity and utilities for detector production (`detector_process_energy`)

Record metered or technically allocated electricity and other utilities used for detector fabrication, filling, encapsulation, cleaning, and in-process testing.

- Selected flow: Site-specific electricity and utility product flows
- Flow property / unit: Carrier-specific energy property / metered unit
- Amount rule: metered process consumption or allocated shared-meter consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming detector or sensor subassembly transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utility_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming detector or sensor subassembly (`detector_subassembly_output`)

Record the measured mass of detector or sensor subassemblies released to final assembly. This intermediate output is not the complete-instrument reference product.

- Selected flow: Technology-specific detector or sensor subassembly product flow
- Flow property / unit: Mass / kg
- Amount rule: measured conforming subassembly mass released to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming detector or sensor subassembly transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_records`

##### Waste flows

###### Detector-production rejects and hazardous residues (`detector_reject_waste`)

Record rejected sensor elements, off-specification detector materials, contaminated wipes, spent process chemicals, and other wastes separately by treatment route and regulatory classification.

- Selected flow: Site-specific waste flows by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured waste shipment, container, or production-log quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming detector or sensor subassembly transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emission_records`

##### Elementary flows

###### Direct detector-production emissions (`detector_direct_emissions`)

Record measured or permit-calculated releases to air, water, or soil from in-house detector production, including any controlled releases associated with technology-specific gases or chemicals; do not infer emissions from purchased material mass alone.

- Selected flow: Site-specific elementary flows
- Flow property / unit: Flow-specific property / reporting unit
- Amount rule: measured release or calculation from monitored activity using a documented method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming detector or sensor subassembly transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emission_records`

### Process: Electronics and printed-circuit-board production or assembly (`electronics_and_pcb_production`)

#### Inputs

##### Product flows

###### Printed boards, electronic components, solder, flux, and process materials (`electronics_materials`)

Record purchased printed boards, semiconductors, passive components, connectors, displays, solder, flux, coatings, cleaning agents, and other electronics materials. If bare printed-circuit boards are manufactured in-house, separately record cleaning, surface preparation, plating, masking, and etching inputs and wastes.

- Selected flow: Site-specific electronic-component and process-material product flows
- Flow property / unit: Mass / kg or item count converted with measured component mass
- Amount rule: measured issued quantity minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming electronics transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources: `us-epa-pcb-pollution-prevention-1990`

###### Electronics production electricity and utilities (`electronics_process_energy`)

Record metered or technically allocated energy used for board manufacture or population, soldering, cleaning, coating, and electronics testing.

- Selected flow: Site-specific electricity and utility product flows
- Flow property / unit: Carrier-specific energy property / metered unit
- Amount rule: metered process consumption or allocated shared-meter consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming electronics transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utility_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming electronics assembly (`electronics_output`)

Record the measured mass of electronics released to final instrument assembly.

- Selected flow: Product-specific electronics assembly flow
- Flow property / unit: Mass / kg
- Amount rule: measured conforming electronics mass released to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming electronics transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_records`

##### Waste flows

###### Electronics rejects, spent solutions, and wastewater (`electronics_waste`)

Record rejected boards and components, solder and flux residues, spent plating or etching solutions, rinsewater, and other wastes generated by operations inside the foreground boundary.

- Selected flow: Site-specific waste and wastewater flows by treatment route
- Flow property / unit: Mass / kg or wastewater volume with measured density when converted to mass
- Amount rule: measured waste shipment, bath replacement, wastewater meter, or production-log quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming electronics transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emission_records`
- Sources: `us-epa-pcb-pollution-prevention-1990`

##### Elementary flows

###### Direct electronics-production emissions (`electronics_direct_emissions`)

Record measured or permit-calculated air, water, and soil releases from in-house board manufacture, soldering, cleaning, coating, and related treatment systems.

- Selected flow: Site-specific elementary flows
- Flow property / unit: Flow-specific property / reporting unit
- Amount rule: measured release or documented calculation from monitored activity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming electronics transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emission_records`
- Sources: `us-epa-pcb-pollution-prevention-1990`

### Process: Enclosure and mechanical-parts manufacture and finishing (`enclosure_and_mechanical_parts`)

#### Inputs

##### Product flows

###### Enclosure and mechanical materials (`enclosure_materials`)

Record metals, polymers, glass, shielding materials, fasteners, coatings, plating chemicals, cleaning agents, and purchased mechanical parts used in in-house forming, machining, moulding, and finishing.

- Selected flow: Site-specific material and process-chemical product flows
- Flow property / unit: Mass / kg
- Amount rule: measured issued quantity minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming enclosure and mechanical parts transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`

###### Mechanical production energy and utilities (`enclosure_process_energy`)

Record metered or technically allocated electricity, fuel, compressed air, water, and other utilities used in in-house mechanical production and finishing.

- Selected flow: Site-specific energy and utility product flows
- Flow property / unit: Carrier-specific property / metered unit
- Amount rule: metered process consumption or allocated shared-meter consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming enclosure and mechanical parts transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utility_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming enclosure and mechanical parts (`enclosure_output`)

Record the measured mass of enclosure and mechanical parts released to final assembly.

- Selected flow: Product-specific enclosure and mechanical-parts flow
- Flow property / unit: Mass / kg
- Amount rule: measured conforming part mass released to final assembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming enclosure and mechanical parts transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_records`

##### Waste flows

###### Mechanical scrap, spent finishing materials, and wastewater (`enclosure_waste`)

Record metal and polymer scrap, spent abrasive and finishing media, spent baths, sludge, rinsewater, and other wastes separately by material and treatment route.

- Selected flow: Site-specific waste and wastewater flows by treatment route
- Flow property / unit: Mass / kg or wastewater volume with measured density when converted to mass
- Amount rule: measured waste shipment, bath replacement, wastewater meter, or production-log quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming enclosure and mechanical parts transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emission_records`

##### Elementary flows

###### Direct mechanical-production emissions (`enclosure_direct_emissions`)

Record measured or permit-calculated releases from machining, moulding, coating, plating, cleaning, and onsite treatment.

- Selected flow: Site-specific elementary flows
- Flow property / unit: Flow-specific property / reporting unit
- Amount rule: measured release or documented calculation from monitored activity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming enclosure and mechanical parts transferred to final assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emission_records`

### Process: Final instrument assembly and configuration (`final_instrument_assembly`)

#### Inputs

##### Product flows

###### Detector, electronics, enclosure, power-system, probe, cable, and accessory inputs (`assembly_components`)

Record all purchased and in-house subassemblies and components incorporated into the delivered configuration, including detector assemblies, electronics, enclosure, display, battery or power supply, probes, cables, fasteners, and included accessories. A purchased radiation detector module is an input, not the complete-instrument reference flow.

- Selected flow: Product-specific component and subassembly product flows
- Flow property / unit: Mass / kg or item count converted with measured component mass
- Amount rule: measured issued quantity minus unused return, reconciled to the as-built bill of materials
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled instrument transferred to calibration and performance verification
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_component_records`
- Sources: `eu-rohs-2011-65-consolidated-2021`; `iec-61010-1-2010-amd1-2016`

###### Assembly electricity and utilities (`assembly_energy`)

Record metered or technically allocated energy used for assembly, cleaning, software or firmware loading, configuration, and in-process checks.

- Selected flow: Site-specific electricity and utility product flows
- Flow property / unit: Carrier-specific energy property / metered unit
- Amount rule: metered process consumption or allocated shared-meter consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled instrument transferred to calibration and performance verification
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utility_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled instrument awaiting calibration (`assembled_instrument_output`)

Record the measured net mass of assembled instruments transferred to calibration and performance verification.

- Selected flow: Product-specific assembled instrument intermediate flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net assembled instrument mass transferred to calibration and performance verification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled instrument transferred to calibration and performance verification
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_output_records`

##### Waste flows

###### Assembly rejects and component packaging waste (`assembly_waste`)

Record rejected components, damaged assemblies, consumables, and incoming component packaging separately by material and treatment route. Rework retained inside the site is tracked without double counting it as both waste and a new input.

- Selected flow: Site-specific waste flows by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured waste shipment or production-log quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled instrument transferred to calibration and performance verification
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emission_records`

##### Elementary flows

### Process: Calibration and performance verification (`calibration_and_performance_verification`)

#### Inputs

##### Product flows

###### Assembled instruments for calibration and verification (`instrument_for_test`)

Record assembled instruments entering calibration and performance verification, preserving product model, detector, configuration, and firmware identity.

- Selected flow: Product-specific assembled instrument intermediate flow
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net mass entering calibration and verification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted net finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_calibration_records`

###### Calibration, test, and facility energy (`calibration_energy`)

Record electricity and other utilities attributable to source warm-up or field generation, instrument operation, environmental conditioning, safety checks, performance tests, retesting, and calibration-facility operation.

- Selected flow: Site-specific electricity and utility product flows
- Flow property / unit: Carrier-specific energy property / metered unit
- Amount rule: metered test consumption or technically allocated facility consumption based on test time and equipment load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted net finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_calibration_records`
- Sources: `iec-62244-2019`; `iec-63465-2026`; `iaea-ssg-85-2023`

###### Calibration consumables and reference-radiation service (`calibration_consumables_service`)

Record replaceable fixtures, phantoms or source holders, gases, cleaning materials, dosimetry consumables, outsourced calibration, and reference-radiation or source service when consumed or attributable. A reusable sealed calibration source is capital equipment unless the study's infrastructure rule includes it; do not record its activity as a consumed mass flow.

- Selected flow: Site-specific consumable and calibration-service product flows
- Flow property / unit: Flow-specific property / procurement or consumption unit
- Amount rule: measured consumption or documented service quantity attributable to the tested production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted net finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_calibration_records`
- Sources: `iec-63465-2026`; `iaea-ssg-85-2023`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished ionizing-radiation instrument (`finished_instrument_output`)

This is the quantitative reference. Record accepted instruments only after completion of the declared calibration, function, safety, and application-specific performance checks.

- Selected flow: Instruments and apparatus for measuring or detecting ionizing radiations `0144e43c-eb28-46f2-be33-804023379cf1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg (Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`)
- Amount rule: measured net accepted instrument mass, normalized to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1 kg net accepted finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_production_output_records`
- Sources: `iec-62244-2019`; `iec-63465-2026`; `iaea-ssg-85-2023`

###### Failed instruments routed to rework (`failed_instrument_rework`)

Track failed instruments returned to rework without treating the internal transfer as a co-product. Retesting and additional inputs remain assigned to accepted output.

- Selected flow: Product-specific instrument-for-rework intermediate flow
- Flow property / unit: Mass / kg
- Amount rule: measured mass or count converted with measured model-specific mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted net finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_calibration_records`

##### Waste flows

###### Test rejects and calibration consumable waste (`test_reject_waste`)

Record scrapped instruments, rejected parts, spent batteries, damaged sources or source-related items handled as regulated waste, and calibration consumable wastes separately by treatment route. Do not classify internal rework as waste.

- Selected flow: Site-specific waste flows by material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured waste shipment or test-log quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted net finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emission_records`

##### Elementary flows

###### Direct releases during calibration or testing (`calibration_direct_releases`)

Record only monitored or permit-calculated material releases to air, water, or soil. Exposure to a controlled radiation field is not itself entered as a material elementary flow; any reportable release of radioactive material must use the applicable radionuclide elementary flow and measured activity or mass basis.

- Selected flow: Site-specific elementary flows where a release crosses the environmental boundary
- Flow property / unit: Flow-specific property / reporting unit
- Amount rule: measured release or documented regulatory calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted net finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emission_records`

### Process: Packaging (`packaging`)

#### Inputs

##### Product flows

###### Accepted instrument entering packaging (`accepted_instrument_for_packaging`)

Record the accepted net instrument without adding packaging mass to the reference product.

- Selected flow: Instruments and apparatus for measuring or detecting ionizing radiations `0144e43c-eb28-46f2-be33-804023379cf1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net accepted instrument mass entering packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted net finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Packaging materials (`packaging_materials`)

Record cartons, cases, cushioning, films, pallets, labels, manuals, desiccants, and other packaging separately by material and reuse status.

- Selected flow: Material-specific packaging product flows
- Flow property / unit: Mass / kg
- Amount rule: measured packaging material issued to accepted products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted net finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`

###### Packaging energy (`packaging_energy`)

Record metered or allocated electricity and fuel used for packaging.

- Selected flow: Site-specific electricity and fuel product flows
- Flow property / unit: Carrier-specific energy property / metered unit
- Amount rule: metered packaging consumption or allocated shared-meter consumption
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted net finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utility_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged instrument at manufacturing site gate (`packaged_instrument_output`)

Record the accepted instrument and its packaging as separate quantities. The reference amount remains 1 kg net instrument, not gross shipped mass.

- Selected flow: Instruments and apparatus for measuring or detecting ionizing radiations `0144e43c-eb28-46f2-be33-804023379cf1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net accepted instrument plus separately reported packaging mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1 kg net accepted finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`

##### Waste flows

###### Packaging process waste (`packaging_waste`)

Record offcuts, damaged packaging, release liners, and other packaging-process wastes by material and treatment route.

- Selected flow: Site-specific packaging waste flows
- Flow property / unit: Mass / kg
- Amount rule: measured packaging waste quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted net finished instrument
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Shared detector, electronics, enclosure, assembly, testing, and packaging operations | Prefer direct measurement and process subdivision by product model, detector technology, production line, and test route before allocation. | `eu-pef-2021-2279` |
| `allocation_physical_driver` | Residual shared material, energy, facility, and test burdens | Use a documented causal physical driver: measured consumption where available; machine or test time multiplied by attributable load for energy; processed mass for material-handling operations; occupied area and time only for genuinely shared facility services. | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | Shared burdens without a defensible physical relationship | Economic allocation is a last resort. Declare the products, price basis, geography, period, price source, and sensitivity to price changes. | `eu-pef-2021-2279` |
| `allocation_rework_rejects` | Internal rework, failed tests, rejects, scrap, and recovered materials | Assign rework, retesting, and reject burdens to accepted output. Record wastes at the boundary and do not deduct recycling credits inside the foreground inventory unless the downstream modelling method explicitly requires and documents them. | `eu-pef-2021-2279`; `eu-weee-2012-19-consolidated-2024` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_component_records` | `detector_subassembly_production`; `electronics_and_pcb_production`; `enclosure_and_mechanical_parts`; `final_instrument_assembly` | Materials, components, detector assemblies, electronics, enclosure parts, power systems, probes, cables, and accessories | ERP issue/return record, bill of materials, purchase record, batch sheet, weighing record | product_model; part_id; material_or_component; supplier; quantity_issued; quantity_returned; unit; measured_mass; included_configuration; lot; process_id | Reconcile issued-minus-returned quantities to the as-built bill of materials and convert item counts with measured part mass | native procurement unit and kg | Per lot or production order | Same reporting period as accepted output | Every included manufacturing site and outsourced step represented as foreground | Sum net consumed quantity by flow and process, then normalize with `calc_reference_normalization` | Approved bill of materials, scale calibration, lot trace, supplier declaration, and reconciliation record |
| `cp_energy_utility_records` | all foreground processes | Electricity, fuel, compressed air, water, and purchased thermal energy | Meter, submeter, invoice, equipment power and operating-time log | meter_id; carrier; opening_reading; closing_reading; unit; process_id; equipment_id; operating_time; rated_or_measured_load; allocation_driver | Prefer process meters; otherwise allocate a shared meter with documented causal driver | carrier-specific metered unit | At least monthly and per campaign for intermittent high-load tests | Complete declared reporting period | Every included site | Sum by carrier and process, subtract documented non-production use, apply allocation, and normalize with `calc_reference_normalization` | Meter calibration or invoice, coverage reconciliation, allocation worksheet, and equipment-load evidence |
| `cp_production_output_records` | all foreground processes | Conforming intermediate output and accepted finished output | Production release, quality release, count record, and calibrated weighing record | product_model; process_id; lot; quantity_count; gross_mass; tare; net_mass; acceptance_status; release_time | Weigh released output; convert counts only with same-model or documented production-weighted measured mass | kg and count | Per lot | Complete declared reporting period | Every included site | Sum accepted net output only; keep rejected and reworked quantities separate | Calibrated scale record, quality release, lot genealogy, and count-to-mass worksheet |
| `cp_test_calibration_records` | `calibration_and_performance_verification` | Calibration, functional, safety, environmental, electromagnetic, mechanical, radiological, firmware, failed-test, and retest activity | Calibration certificate, test log, equipment log, source or field certificate, service record | product_model; serial_or_lot; detector; firmware; test_standard; test_method; measured_quantity; radiation_type; reference_source_or_field; source_certificate; test_equipment; result; acceptance_limit; pass_fail; test_time; energy; consumables; rework; retest | Capture every required test and calibration event and its attributable resources; preserve application-specific criteria | test-specific unit, hour, kWh, kg, and count | Per instrument or statistically justified production lot as required by the declared standard and test plan | Complete declared reporting period | Every calibration and test facility included | Aggregate attributable resources and failures by product model; normalize to accepted net output | Traceable calibration or source certificate, controlled procedure, test-equipment calibration, raw result, acceptance record, and retest history |
| `cp_waste_emission_records` | all foreground processes | Solid and liquid waste, wastewater, and direct releases | Waste manifest, scale ticket, wastewater meter, laboratory analysis, stack or discharge monitor, permit calculation | process_id; waste_or_emission; quantity; unit; date; treatment_route; destination; measurement_method; calculation_factor; regulated_classification | Measure at source where possible; otherwise reconcile facility totals and allocate with a causal driver | flow-specific unit | Per shipment or monitoring interval | Complete declared reporting period | Every included site | Sum by flow, compartment, and treatment route; subtract only documented quantities outside scope; normalize to process output or reference flow | Manifest, meter calibration, laboratory report, permit method, factor source, and mass-balance reconciliation |
| `cp_packaging_records` | `packaging` | Packaging materials, packaging waste, and gross-versus-net shipped mass | Packaging specification, issue record, weighing record, and waste record | product_model; packaging_material; reusable_status; quantity; unit; packaging_mass; net_instrument_mass; gross_shipped_mass; waste_mass | Weigh or obtain controlled packaging specification and reconcile net instrument plus packaging to gross shipped mass | kg and item count | Per packaging specification and production lot | Same reporting period as accepted output | Every included packaging site | Sum material-specific packaging per accepted product and normalize to 1 kg net instrument | Approved packaging specification, calibrated weighing record, reuse evidence, and gross-net reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every foreground input, output, waste, and elementary flow | normalized amount = reporting-period amount attributable to the product family / reporting-period net mass of accepted finished instruments in kg | Attributable flow amount; accepted net finished-instrument mass from `cp_production_output_records` | Flow amount per 1 kg net accepted finished instrument | `eu-pef-2021-2279` |
| `calc_count_to_mass` | Records available in item counts | mass = item count × measured mean net mass for the same model, configuration, and reporting period; for a product family use a disclosed production-count-weighted mean | Item count; model-specific measured net mass; production mix | kg |  |
| `calc_shared_energy` | Shared electricity and utility meters | attributable energy = total shared consumption × documented causal driver share; use equipment test or operating time multiplied by attributable load where direct submetering is unavailable | Metered shared consumption; equipment load; operating or test time; production records | Carrier-specific energy allocated to the product | `eu-pef-2021-2279` |
| `calc_mass_reconciliation` | Bill of materials, intermediates, accepted product, rejects, waste, and returned unused material | Reconcile input mass with incorporated product mass, returned unused material, transferred intermediates, waste, and measured stock change; report the residual and its investigation without applying an invented acceptance tolerance | Material issue and return records; intermediate and finished output mass; waste mass; stock change | Material-specific mass-balance statement and unexplained residual |  |
| `calc_packaging_separation` | Packaged output | gross shipped mass = net accepted instrument mass + included accessory mass already in product configuration + packaging mass; report net instrument and packaging separately | Net instrument mass; configuration record; material-specific packaging mass; gross shipment mass | 1 kg net reference product plus separate kg packaging flows | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_configuration` | Reference flow and product family | Preserve the exact Tiangong reference-flow UUID and declare every required qualifier, including detector, radiation type, measured quantity, range, application class, included probes or accessories, calibration basis, and integral software or firmware. | Product specification, configuration record, bill of materials, calibration/test plan, and UUID readback |
| `dq_material_completeness` | Bill of materials and purchased inputs | Cover all components and materials incorporated in the delivered configuration and all production consumables crossing the foreground boundary. Retain supplier material declarations and applicable hazardous-substance compliance evidence; disclose missing supplier masses or proxy flows. | Reconciled bill of materials, purchase and issue records, supplier declarations, and applicable RoHS documentation (`eu-rohs-2011-65-consolidated-2021`) |
| `dq_calibration_traceability` | Calibration and performance verification | Identify the applicable instrument standard and retain raw results, acceptance criteria, calibration configuration, reference radiation or source identity, source or facility certificate, equipment calibration status, failed tests, rework, and retests. | Controlled test procedure, raw test log, calibration certificate, reference-source or field certificate, and release record (`iec-62244-2019`; `iec-63465-2026`; `iaea-ssg-85-2023`) |
| `dq_temporal_coverage` | All foreground records | Use one complete, representative reporting period or a documented production campaign that captures routine production, failures, rework, maintenance, and calibration activity. Explain exclusions, shutdowns, and extrapolation. | Meter coverage, production calendar, maintenance log, calibration schedule, and reconciliation worksheet |
| `dq_technology_geography` | Foreground and upstream data | Match detector technology, electronics route, enclosure route, calibration facility, electricity geography, production site, and supplier geography where material. Disclose every proxy and its expected direction of bias. | Site process map, supplier identity, dataset metadata, and proxy assessment |
| `dq_mass_energy_closure` | Materials, packaging, waste, and energy | Reconcile material and energy records to site and process totals. Report unexplained residuals and correction actions; do not force closure through undocumented balancing flows. | Mass-balance statements, meter reconciliation, packaging gross-net check, and reviewer sign-off |
| `dq_regulated_waste` | Radioactive, hazardous, electronic, and battery-related wastes | Preserve regulated classification, activity or concentration where applicable, treatment route, consignee, and legal scope. Keep downstream WEEE treatment outside the manufacturing foreground dataset unless explicitly added as a separate scenario. | Waste manifest, laboratory or activity measurement, treatment certificate, and applicable WEEE record (`eu-weee-2012-19-consolidated-2024`) |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Quantitative reference | Fail unless the product flow is `0144e43c-eb28-46f2-be33-804023379cf1`, the flow property is Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, the unit group is Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, the unit is kg, and the normalized output is exactly 1 kg net accepted instrument. |  |
| `validate_scope_identity` | Covered product | Fail if the reference product is only a detector module, sensor module, bare detector, separately supplied part or accessory, radioactive source, radiation-generating treatment or inspection equipment, or non-ionizing-radiation instrument. |  |
| `validate_required_qualifiers` | Product metadata | Fail when any required reference-flow qualifier is missing or when the delivered configuration differs from the recorded configuration. | `iec-62244-2019`; `iec-63465-2026`; `iaea-ssg-85-2023` |
| `validate_process_coverage` | Process map and inventory | Fail if final assembly, calibration and performance verification, or packaging is missing; fail when an applicable in-house detector, electronics, printed-circuit-board, enclosure, finishing, or outsourced operation is omitted without disclosure and an upstream dataset. | `us-epa-pcb-pollution-prevention-1990`; `eu-pef-2021-2279` |
| `validate_calibration_release` | Accepted output | Fail unless the declared calibration and application-specific performance checks are traceable to controlled records and every accepted instrument or justified production lot has a passing release decision; do not substitute a generic radiation-instrument criterion for the declared product standard. | `iec-62244-2019`; `iec-63465-2026`; `iaea-ssg-85-2023` |
| `validate_collection_links` | Foreground-collected and calculated rows | Fail when a row using `collected_record` or `calculated_from_collection` lacks its declared collection protocol or when the protocol lacks temporal, site, method, unit, aggregation, or quality evidence. |  |
| `validate_mass_packaging` | Bill of materials, output, waste, and packaging | Fail when net product mass includes packaging, when material-specific packaging is not reported separately, or when mass reconciliation has no disclosed residual and investigation. | `eu-pef-2021-2279` |
| `validate_allocation` | Shared processes | Fail when shared burdens are allocated without subdivision assessment, a documented causal driver, source data, calculation, and sensitivity or fallback disclosure. | `eu-pef-2021-2279` |
| `validate_regulated_flows` | Hazardous substances, radioactive materials, and waste | Fail when applicable regulated material, activity, hazardous-substance, or waste-treatment information is silently omitted or netted against the product inventory. | `eu-rohs-2011-65-consolidated-2021`; `eu-weee-2012-19-consolidated-2024` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; may be selected as `background_dataset` only when product configuration, detector technology, calibration basis, geography, and data quality match the consuming study |
| downstream_use | Foreground data package for process and lifecyclemodel construction; comparison of manufacturing routes or configurations only after equivalence of function, performance class, included accessories, calibration basis, and boundary is demonstrated |
| allowed_use | Cradle-to-manufacturing-site-gate modelling of complete CPC 48241 instruments; supplier and site improvement; contribution analysis; background use for a matching technology and configuration |
| excluded_use | Standalone claim for an unqualified item; module or component production; non-ionizing-radiation instruments; full life-cycle results without explicit use, maintenance, recalibration, transport, and end-of-life scenarios; comparison across non-equivalent measurement functions or performance classes |
| required_metadata | Canonical PCR id; CPC reference; exact flow/property/unit-group UUIDs; all required qualifiers; product and included-accessory configuration; reference net mass; production and calibration sites; reporting period; in-house and outsourced process map; standards and calibration basis; allocation; upstream datasets and proxies; packaging; regulated materials and wastes |
| required_quality_disclosure | Foreground coverage; accepted-output denominator; bill-of-material and mass-balance completeness; meter and allocation coverage; calibration and test traceability; failed-test and rework treatment; proxy age, geography, and technology; packaging separation; regulated material and waste treatment; uncertainty and unresolved gaps |
| update_trigger | Change in detector principle, radiation type, measured quantity or range, performance or application class, product configuration, included probes/accessories/battery, material composition, electronics or enclosure route, calibration/test standard, firmware affecting measurement, production or calibration site, supplier mix, allocation method, reporting period representativeness, or regulated-substance/waste requirements |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-48241` | `official_guidance` | United Nations Statistics Division, CPC subclass 48241, “Instruments and apparatus for measuring or detecting ionising radiations”, https://unstats.un.org/unsd/classifications/Econ/Detail/EN/3/48241 (retrieved 2026-08-10) | Official product-category identity and exclusion of component-only reference products |
| `iec-61010-1-2010-amd1-2016` | `standard` | IEC 61010-1:2010+AMD1:2016, Safety requirements for electrical equipment for measurement, control, and laboratory use — Part 1: General requirements, https://webstore.iec.ch/en/publication/4279 (retrieved 2026-08-10) | General scope of electrical measurement equipment and safety-related assembly and verification context |
| `iec-62244-2019` | `standard` | IEC 62244:2019, Radiation protection instrumentation — Installed radiation portal monitors for the detection of illicit trafficking of radioactive and nuclear materials, https://webstore.iec.ch/en/publication/32885 (retrieved 2026-08-10) | Evidence that product-specific radiological, climatic, mechanical, electrical, electromagnetic, documentation, and test requirements vary with instrument application |
| `iec-63465-2026` | `standard` | IEC 63465:2026, Calibration and quality control in the use of radionuclide calibrators, https://webstore.iec.ch/en/publication/74730 (retrieved 2026-08-10) | Calibration, quality control, test records, application-specific acceptance, and treatment of integral software and accessories for a covered instrument family |
| `iaea-ssg-85-2023` | `official_guidance` | International Atomic Energy Agency, Radiation Protection and Radioactive Waste Management in the Design and Operation of Research Reactors, Specific Safety Guide No. SSG-85, 2023, https://www-pub.iaea.org/MTCD/Publications/PDF/PUB2049_web.pdf (retrieved 2026-08-10) | Instrument technical qualifiers, calibration traceability, certified sources, calibration periodicity, maintenance, and recalibration evidence |
| `us-epa-pcb-pollution-prevention-1990` | `official_guidance` | U.S. Environmental Protection Agency, Guides to Pollution Prevention: The Printed Circuit Board Manufacturing Industry, EPA/625/7-90/007, 1990, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=30004DTH.TXT (retrieved 2026-08-10) | Conditional printed-circuit-board process decomposition and associated spent baths, rinsewater, particulates, and other waste records |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods to measure and communicate the life cycle environmental performance of products and organisations, http://data.europa.eu/eli/reco/2021/2279/2021-12-30 (retrieved 2026-08-10) | Functional unit, system boundary, material and energy flow completeness, packaging, allocation hierarchy, foreground data quality, and disclosure |
| `eu-rohs-2011-65-consolidated-2021` | `standard` | Directive 2011/65/EU on the restriction of the use of certain hazardous substances in electrical and electronic equipment, consolidated text 2021-11-01, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02011L0065-20211101 (retrieved 2026-08-10) | Applicable hazardous-substance and supplier material-declaration evidence for electrical monitoring and control instruments |
| `eu-weee-2012-19-consolidated-2024` | `standard` | Directive 2012/19/EU on waste electrical and electronic equipment, consolidated text 2024-04-08, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02012L0019-20240408 (retrieved 2026-08-10) | Separate electrical/electronic equipment waste, component and consumable treatment records, downstream boundary disclosure, and end-of-life scenario requirements |
