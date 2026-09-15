---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.gas-liquid-or-electricity-supply-or-production-meters
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Gas, liquid or electricity supply or production meters

## 1. Scope and Applicability

This PCR governs foreground manufacturing data packages for finished meters that measure gas, liquid, or active electrical energy for supply or production accounting. It covers mechanical, electronic, and smart meters, including the measuring element, calculator or register, display, communication and power functions when fitted, enclosure, seals, and installation accessories delivered with the meter.

Every data package shall select and disclose one concrete product variant. At minimum it shall distinguish the measured medium (electricity, gas, water, or another liquid), supply versus production duty, metering principle and technology (mechanical, electronic, or smart/connected), applicable metrological class and rated measuring range, communication configuration, power configuration, enclosure rating, and included installation accessories. Results for materially different variants shall not be averaged unless production-weighted foreground records preserve those distinctions.

This PCR excludes stand-alone flow, pressure, level, voltage, current, resistance, or power sensors that are not complete supply or production meters; meter parts and subassemblies sold separately; data concentrators, head-end systems, billing platforms, and other metering services; installation work not delivered with the product; and thermal energy meters. A single smart electricity meter, flow sensor, or backend service shall not be used as a proxy for this category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.gas-liquid-or-electricity-supply-or-production-meters` |
| classification_refs | CPC 3.0: 48263 (exact) |
| covered_products | Finished gas, water, other-liquid, or active-electrical-energy supply or production meters; mechanical, electronic, and smart/connected variants; meter-integrated displays, communication and power functions; enclosures, seals, and installation accessories delivered with the meter |
| excluded_products | Stand-alone sensors or test instruments; separately sold parts and subassemblies; thermal energy meters; data concentrators, gateways not delivered as part of the meter, head-end systems, billing or energy-management software and services; field installation and network operation |
| representative_product | A finished, calibrated, legally conforming supply or production meter at the manufacturer plant gate, with the selected medium, duty, metering technology, metrological class, interfaces, power arrangement, enclosure, and delivered accessories declared |
| production_route | Meter body and measuring-element fabrication or procurement; mechanical/electronic subassembly; final assembly and configuration; calibration, verification and final test; cleaning, marking, packaging, and dispatch |
| market_state | Finished, calibrated and packaged meter at the manufacturer plant gate, before field installation and use |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished, calibrated gas, liquid, or active-electrical-energy supply or production meter conforming to the declared product variant |
| How much | 1 kg net finished product mass |
| How well | Meets the declared applicable legal-metrology regime, metrological or accuracy class, rated measuring range, medium compatibility, installation configuration, enclosure rating, communication configuration, and power configuration |
| How long or cycle | One declared production batch and model or configuration revision; service life and operational energy are outside this manufacturing reference flow and shall be modelled separately when required |
| reference_flow_link | The reference output of `packaging_and_dispatch`, normalized to 1 kg net finished product excluding packaging |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Gas, liquid or electricity supply or production meters `138fcae3-ed55-4a92-a456-38674b3e0d47` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | measured medium and, for liquids, liquid family; supply or production duty; mechanical, electronic, or smart/connected technology; measuring principle; metrological or accuracy class and governing regime; rated measuring range and pressure, voltage/current, temperature, or other applicable rated conditions; communication protocol and module boundary; internal, mains, external, or battery power arrangement; enclosure material and ingress/environmental rating; mounting arrangement; included seals, fittings, cables, antennas, communication modules, power supplies, batteries, and installation accessories; net product mass; production geography and batch period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

The 1 kg reference is a mass-normalized manufacturing declared unit. It does not assert equal metering service among electricity, gas, water, other-liquid, mechanical, electronic, or smart variants. Comparative service studies shall additionally model the declared measurement function, accuracy, capacity, service life, own-energy use, communication infrastructure, maintenance, and replacement scenario.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net finished meter mass. Exclude packaging mass, installation consumables not delivered with the meter, and remote communication or backend equipment outside the declared product boundary. |
| `count_to_mass_conversion` | Production records reported by unit count | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert item counts using measured or controlled bill-of-material net mass for the same model and configuration revision. Retain item count, sampled or specified mass per item, sampling basis, and conversion calculation. |
| `delivered_accessory_mass` | Accessories, batteries, external power supplies, antennas, fittings, cables, seals, and mounting items delivered with the meter | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Include delivered accessories in component inputs and product mass; identify each accessory family separately. Do not include site-supplied items or shared network equipment unless explicitly delivered as part of the declared meter. |
| `variant_weighting` | Multi-model or multi-site aggregation | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Aggregate only with production-mass weighting from the declared period and retain results by medium, duty, technology, metrological class, communication, power, enclosure, and accessory configuration. |
| `test_media_units` | Calibration and verification media or electrical test energy | Original measured property plus documented conversion property | Original calibrated unit and reported normalized unit | Preserve the original test-record unit. Convert gas or liquid volumes, masses, and electrical energy only with documented conditions, density or conversion factors, and uncertainty; do not convert the reference product away from kg. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing_scope` | Cradle-to-manufacturer-gate meter production | Include production and inbound transport of materials, components, subassemblies, product and packaging assembly, configuration, calibration and verification, final testing, cleaning, marking, packaging, manufacturing waste and direct emissions through delivery to the manufacturer's last logistics platform. | `pep-ecopassport-pcr-ed4` |
| `boundary_variant_integrity` | Product family coverage | Preserve the required medium, duty, technology, metrological class, communication, power, enclosure, installation and accessory qualifiers. Do not use a smart electricity meter, stand-alone sensor, component, or backend service as a proxy for the whole category. | `eu-mid-2014-32-eu`; `oiml-r46-2012`; `oiml-r49-2024`; `oiml-r117-2019`; `oiml-r137-2012` |
| `boundary_cutoff_control` | Assessable inputs and outputs | Include all assessable inputs and outputs with primary or secondary data. Any exclusion shall be documented and shall satisfy the applicable mass, energy and impact cut-off tests without hiding significant materials or components. | `pep-ecopassport-pcr-ed4` |
| `boundary_use_and_services` | Field installation, use, communication infrastructure and end of life | Exclude field installation, measured utility supply, operational own-energy use, data concentrators, telecommunications and backend services, maintenance, replacement and end of life from this manufacturing data package; model them as explicit downstream scenarios when the study requires them. | `pep-ecopassport-pcr-ed4`; `iea-4e-smart-metering-consumption-2013` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased raw materials, parts and subassemblies at their supplier gates, with medium-, technology- and model-specific identity and quantities |
| starting_condition_role | Upstream product inputs to meter component fabrication, subassembly, and final assembly |
| product_classification_scope | Finished CPC 3.0 48263 meters only; separately sold parts, stand-alone sensors and service systems remain outside the canonical product scope |
| recursive_input_rule | If a complete meter in this same category is used as an input, record it as an explicit reused or remanufactured complete-meter input with its own upstream dataset and declared prior state; do not recursively reproduce its manufacture inside the current meter process |
| upstream_dataset_requirement | Each material, component, subassembly, packaging item, energy carrier, test medium and treatment service requires a geographically and technologically representative upstream dataset or a documented data gap |
| disclosure | Declare factory sites, production period, medium and duty, metering principle, mechanical/electronic/smart technology, metrological class and rated conditions, communication and power configurations, enclosure and mounting, delivered accessories, supplier-data coverage, exclusions, allocation, yield and calibration or test boundary |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication_and_subassembly` | Component fabrication and subassembly | `required` |  | Foreground and supplier-linked manufacture of mechanical measuring elements, bodies, electronics, communication and power functions, enclosures and delivered accessories | kg conforming meter subassemblies transferred to final assembly |
| `final_assembly_and_configuration` | Final assembly and configuration | `required` |  | Assembly of the declared meter, firmware or register configuration, sealing preparation and identification | kg assembled unverified meter |
| `calibration_verification_and_test` | Calibration, legal-metrology verification and final test | `required` |  | Medium- and technology-specific calibration, verification, environmental or functional test, adjustment, sealing and acceptance | kg accepted calibrated meter |
| `packaging_and_dispatch` | Cleaning, marking, packaging and dispatch | `required` |  | Final cleaning and marking, inclusion of declared accessories and documentation, packaging and delivery to the manufacturer logistics platform | 1 kg net finished packaged meter output, excluding packaging mass |

### Process: Component fabrication and subassembly (`component_fabrication_and_subassembly`)

#### Inputs

##### Product flows

###### Mechanical body, measuring elements and fluid-contact parts (`mechanical_meter_components`)

Record all purchased or internally produced bodies, measuring chambers, rotors, diaphragms, turbines, ultrasonic paths, current or voltage sensing elements, terminals, valves and other measuring elements applicable to the selected medium and principle.

- Selected flow: Mechanical meter bodies and measuring elements, variant-specific
- Flow property / unit: Mass / kg
- Amount rule: Sum accepted input mass from the controlled bill of materials and production issue records for the declared model and batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished meter output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_mass`
- Sources: `pep-ecopassport-pcr-ed4`; `oiml-r49-2024`; `oiml-r117-2019`; `oiml-r137-2012`

###### Electronic, display and register components (`electronic_register_components`)

Record printed circuit assemblies, metrology chips, displays, memory, registers, sensors and connectors when the selected meter is electronic or smart; record zero with a documented not-applicable reason for wholly mechanical variants.

- Selected flow: Electronic, display and register components, variant-specific
- Flow property / unit: Mass / kg
- Amount rule: Sum accepted component mass from the controlled bill of materials and purchase or issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished meter output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_mass`
- Sources: `pep-ecopassport-pcr-ed4`; `oiml-r46-2012`; `iea-4e-smart-metering-consumption-2013`

###### Communication modules and interfaces (`communication_components`)

Record integrated or delivered radio, cellular, power-line carrier, wired bus, optical or local-interface hardware and antennas. Exclude remote gateways, concentrators, telecom networks and backend systems not delivered with the meter.

- Selected flow: Communication modules and interfaces, variant-specific
- Flow property / unit: Mass / kg
- Amount rule: Measured mass from bill-of-material and purchase records for the declared communication configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished meter output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_mass`
- Sources: `iea-4e-smart-metering-consumption-2013`

###### Power supplies and batteries (`power_supply_components`)

Record internal or delivered mains power supplies, external power units, backup batteries, primary cells and energy-harvesting components according to the declared power configuration.

- Selected flow: Power supply and battery components, variant-specific
- Flow property / unit: Mass / kg
- Amount rule: Measured mass from the controlled bill of materials and purchase records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished meter output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_mass`
- Sources: `pep-ecopassport-pcr-ed4`; `iea-4e-smart-metering-consumption-2013`

###### Enclosures, seals and delivered installation accessories (`enclosure_and_accessories`)

Record enclosure parts, windows, gaskets, seals, terminal covers, fittings, flanges, cables, mounting hardware and other installation accessories delivered with the declared meter.

- Selected flow: Enclosures, seals and installation accessories, variant-specific
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass from the bill of materials, kit list and issue records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished meter output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_component_mass`
- Sources: `pep-ecopassport-pcr-ed4`; `oiml-r49-2024`

###### Fabrication electricity (`fabrication_electricity`)

Record metered electricity for machining, forming, molding, surface treatment, printed-circuit or electronic subassembly, welding and subassembly operations within this process.

- Selected flow: Electricity, factory supply mix
- Flow property / unit: Energy / kWh
- Amount rule: Metered process electricity minus substantiated non-product loads, allocated according to section 7
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming meter subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `pep-ecopassport-pcr-ed4`

###### Fabrication water and process auxiliaries (`fabrication_water_auxiliaries`)

Record water, cleaning agents, machining fluids, plating chemicals, solder and other process auxiliaries that cross the foreground boundary.

- Selected flow: Fabrication water and process auxiliaries, site-specific
- Flow property / unit: Supplier property and unit; water reported in kg or m3 with conversion conditions retained
- Amount rule: Metered, purchased or inventory-change quantity attributable to component fabrication and subassembly
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming meter subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_materials_and_water`
- Sources: `pep-ecopassport-pcr-ed4`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming meter subassemblies (`conforming_meter_subassemblies`)

Record the measured mass transferred to final assembly, keeping mechanical, electronic, communication, power, enclosure and accessory configuration identifiers.

- Selected flow: Conforming meter subassemblies, variant-specific
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming meter subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_output_and_scrap`

##### Waste flows

###### Fabrication scrap and rejected components (`fabrication_scrap`)

Separate metal, plastic, electronic, battery, hazardous and other waste streams and record their treatment destinations; do not credit avoided virgin production inside the foreground process.

- Selected flow: Fabrication scrap and rejected components, waste-family-specific
- Flow property / unit: Mass / kg
- Amount rule: Weighed waste dispatch plus inventory change, reconciled with process material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming meter subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_output_and_scrap`
- Sources: `pep-ecopassport-pcr-ed4`

##### Elementary flows

###### Direct fabrication emissions (`fabrication_direct_emissions`)

Record measured or permit-calculated releases from coating, plating, soldering, cleaning, combustion or other included foreground operations by elementary-flow identity.

- Selected flow: Direct emissions to air, water or soil, substance-specific
- Flow property / unit: Mass / kg
- Amount rule: Measured or permit-method quantity attributable to included production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming meter subassembly output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`

### Process: Final assembly and configuration (`final_assembly_and_configuration`)

#### Inputs

##### Product flows

###### Meter subassemblies and purchased final-assembly parts (`assembly_components`)

Record the configuration-specific mechanical, electronic, communication, power, enclosure, sealing and accessory inputs entering final assembly without replacing them by a generic smart-meter proxy.

- Selected flow: Meter subassemblies and purchased assembly parts, variant-specific
- Flow property / unit: Mass / kg
- Amount rule: Measured issued mass reconciled to accepted assembly output and waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled unverified meter output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`

###### Assembly electricity and auxiliaries (`assembly_energy_auxiliaries`)

Record electricity, compressed air, fasteners, solder, adhesives, lubricants and cleaning materials used for assembly, firmware or register loading, configuration and identification.

- Selected flow: Assembly energy and auxiliaries, site-specific
- Flow property / unit: Supplier property and unit
- Amount rule: Metered, purchased or inventory-change quantity attributable to the assembly line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled unverified meter output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `pep-ecopassport-pcr-ed4`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled unverified meter (`assembled_unverified_meter`)

Record assembled meters transferred to calibration and verification, retaining model, medium, duty, technology, metrological class target, communication, power, enclosure and accessory identifiers.

- Selected flow: Assembled unverified supply or production meter
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg assembled unverified meter output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`

##### Waste flows

###### Assembly rejects and waste (`assembly_waste`)

Record rejected parts, solder and adhesive waste, cleaning waste and other assembly waste by treatment route.

- Selected flow: Assembly rejects and waste, waste-family-specific
- Flow property / unit: Mass / kg
- Amount rule: Weighed or controlled disposal quantity reconciled with assembly material balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg assembled unverified meter output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_output_and_scrap`

##### Elementary flows

### Process: Calibration, legal-metrology verification and final test (`calibration_verification_and_test`)

#### Inputs

##### Product flows

###### Assembled meters awaiting verification (`meters_for_verification`)

Record the mass and count entering calibration and test by product variant and test route.

- Selected flow: Assembled unverified supply or production meter
- Flow property / unit: Mass / kg and supplementary item count
- Amount rule: Measured transfer mass and count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted calibrated meter output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_batch_records`

###### Calibration media, test energy and consumables (`calibration_media_energy`)

Record electricity or simulated electrical load, water, air, gas, liquid test media, reference-standard operation, seals and other consumables according to the applicable meter type and test plan. Preserve original measurement units and test conditions.

- Selected flow: Calibration media, test energy and consumables, medium-specific
- Flow property / unit: Original calibrated property and unit
- Amount rule: Metered or controlled test-bench consumption allocated to accepted and rejected meters in the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted calibrated meter output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_resources`
- Sources: `oiml-r46-2012`; `oiml-r49-2024`; `oiml-r117-2019`; `oiml-r137-2012`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted calibrated meter (`accepted_calibrated_meter`)

Record accepted output only after the applicable accuracy, rated-condition, software or register, communication, power and sealing checks are complete.

- Selected flow: Accepted calibrated supply or production meter
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass and count linked to calibration and verification records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted calibrated meter output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_batch_records`
- Sources: `eu-mid-2014-32-eu`; `oiml-r46-2012`; `oiml-r49-2024`; `oiml-r117-2019`; `oiml-r137-2012`

##### Waste flows

###### Failed meters and spent test consumables (`calibration_rejects`)

Record failed units, replacement parts, spent seals and test consumables by rework, recycling, treatment or disposal route; returned rework shall not be double counted as new material input.

- Selected flow: Calibration rejects and spent consumables, waste-family-specific
- Flow property / unit: Mass / kg
- Amount rule: Weighed or controlled quantity linked to test-batch disposition records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted calibrated meter output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_calibration_batch_records`

##### Elementary flows

###### Released calibration media (`released_calibration_media`)

Record direct release of test water, gas or other liquid to the environment only when it crosses the technosphere boundary; otherwise record recovery, recirculation or treatment as product or waste flows.

- Selected flow: Released calibration medium, substance-specific
- Flow property / unit: Original measured property and unit
- Amount rule: Metered discharge minus recovered or recirculated quantity, with conditions documented
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted calibrated meter output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_calibration_resources`

### Process: Cleaning, marking, packaging and dispatch (`packaging_and_dispatch`)

#### Inputs

##### Product flows

###### Accepted meters and delivered accessories (`accepted_meter_and_accessories`)

Record calibrated meters plus the exact seals, fittings, cables, antennas, power supplies, batteries, mounting items and documentation delivered in the declared product configuration.

- Selected flow: Accepted calibrated meter and delivered accessory kit
- Flow property / unit: Mass / kg
- Amount rule: Measured kit mass and count from packing records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished meter output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`

###### Packaging materials and dispatch energy (`packaging_materials_energy`)

Record primary and secondary packaging, labels, manuals, pallets, reusable packaging losses, cleaning materials, electricity and fuels used through the manufacturer's last logistics platform.

- Selected flow: Packaging materials and dispatch energy, material- or carrier-specific
- Flow property / unit: Supplier property and unit
- Amount rule: Purchased or issued packaging quantity and metered energy attributable to dispatched product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished meter output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`
- Sources: `pep-ecopassport-pcr-ed4`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished gas, liquid or electricity supply or production meter (`reference_meter_output`)

This is the PCR reference output. It includes the selected finished meter and delivered accessories but excludes packaging mass from the 1 kg reference amount.

- Selected flow: Gas, liquid or electricity supply or production meters `138fcae3-ed55-4a92-a456-38674b3e0d47`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net finished product mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net finished meter output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packaging and dispatch waste (`packaging_dispatch_waste`)

Record offcuts, damaged packaging, rejected labels and other waste generated before dispatch by material and treatment route.

- Selected flow: Packaging and dispatch waste, waste-family-specific
- Flow property / unit: Mass / kg
- Amount rule: Weighed or controlled disposal quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished meter output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_dispatch`
- Sources: `pep-ecopassport-pcr-ed4`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Multi-product component, assembly, calibration and packaging lines | Prefer meter-, line-, batch- or process-level metering and subdivision. Separate electricity, water, auxiliaries, rejects and emissions when direct records are available. | `pep-ecopassport-pcr-ed4` |
| `allocation_physical_then_economic` | Unavoidable shared foreground burdens | Use a physical driver that represents process causality, such as machine time, test-bench time, processed mass or item count. Use economic allocation only when no defensible physical driver exists, and disclose the method and sensitivity. | `pep-ecopassport-pcr-ed4` |
| `allocation_rework_and_scrap` | Rework, manufacturing scrap and waste treatment | Return internal rework to the originating process without double counting. Assign burdens through the point waste leaves the foreground boundary; do not apply avoided-virgin-material credits inside the reference product inventory. | `pep-ecopassport-pcr-ed4` |
| `allocation_variant_weighting` | Product-family and multi-site datasets | Weight site and variant records by net finished production mass for the declared period and retain production totals by required qualifier. Do not average across media or technologies when the result would conceal materially different bills of materials, test routes or energy use. | `pep-ecopassport-pcr-ed4` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_component_mass` | `component_fabrication_and_subassembly` | Variant-specific material, component, communication, power, enclosure and accessory inputs | Controlled BOM, purchase and issue records, component mass measurement | model_revision; medium; duty; technology; metrological_class; component_family; material; supplier; quantity; mass_per_item; accepted_mass; communication_configuration; power_configuration; enclosure; accessory_inclusion | Reconcile controlled BOM to purchase or issue records; weigh representative parts where supplier mass is absent; preserve model and revision | kg and item | Each BOM revision and production batch | At least the declared production period | Every contributing factory and supplier-data scope | Sum accepted input mass by component family and divide by net finished product mass; production-mass weight sites and variants only after qualifier stratification | Approved BOM; scale calibration; purchase or issue records; sampling record; supplier declarations |
| `cp_process_energy` | `component_fabrication_and_subassembly`; `final_assembly_and_configuration`; `packaging_and_dispatch` | Electricity, fuel, compressed air and other process energy | Submeter, utility invoice and operating log | meter_id; energy_carrier; opening_reading; closing_reading; operating_hours; line; batch; non_product_load; allocation_driver | Prefer submetering; otherwise reconcile invoices to line operating records and document allocation | kWh, MJ, kg or m3 in original carrier unit | Per shift or batch, aggregated monthly | At least 12 consecutive representative months or the full shorter campaign | Every contributing production site | Subtract substantiated non-product loads, allocate by causal driver, then normalize to accepted process output | Meter calibration; invoice reconciliation; operating logs; allocation worksheet |
| `cp_process_materials_and_water` | `component_fabrication_and_subassembly`; `final_assembly_and_configuration` | Water, chemicals and process auxiliaries | Meter, purchase, issue, tank and inventory records | material_id; opening_stock; purchases; closing_stock; process_return; water_meter; batch; concentration; density; temperature | Use direct metering or mass balance; retain original units and conversion conditions | kg, L or m3 as measured | Per batch or monthly | Declared production period | Every contributing production site | Consumption equals opening stock plus purchases minus closing stock minus documented returns; normalize to accepted process output | Calibrated meter; inventory reconciliation; supplier specification; conversion record |
| `cp_process_output_and_scrap` | `component_fabrication_and_subassembly`; `final_assembly_and_configuration` | Accepted output, rejects, scrap and waste | Production count, scale ticket, waste manifest and inventory record | process_id; model_revision; input_mass; accepted_mass; accepted_count; rework_return; waste_mass; waste_family; treatment_route | Weigh accepted output and separated waste; reconcile count-to-mass conversion and internal rework | kg and item | Per batch | Declared production period | Every contributing production site | Accepted output plus waste plus documented stock change shall reconcile with measured input within the stated uncertainty | Scale calibration; batch traveller; waste manifest; reconciliation report |
| `cp_direct_emissions` | `component_fabrication_and_subassembly`; `final_assembly_and_configuration` | Direct emissions to air, water and soil | Continuous monitor, stack or effluent test, permit calculation and operating record | substance; compartment; concentration; flow_rate; operating_time; calculation_method; detection_limit; batch_or_period | Use measured releases or the applicable documented permit method; subtract no control credit unless physically measured | kg or original regulated unit | As monitored or at permit frequency | Declared production period | Each emitting site | Integrate concentration and flow over operation; allocate by causal process driver and normalize to accepted output | Calibration and laboratory report; permit method; operating log; uncertainty statement |
| `cp_assembly_records` | `final_assembly_and_configuration` | Assembly inputs, configured output and assembly rejects | Batch traveller, issue record, configuration log and mass record | model_revision; medium; duty; technology; metrological_class_target; communication; power; enclosure; accessory_kit; input_mass; output_mass; count; reject_mass | Link component issues and configuration logs to each batch; weigh transfer output and rejects | kg and item | Per batch | Declared production period | Every assembly site | Sum by exact configuration, reconcile mass, then normalize to assembled output | Traceable batch identifier; approved configuration; scale calibration; reject disposition |
| `cp_calibration_batch_records` | `calibration_verification_and_test` | Calibration input, accepted meters, rework and rejects | Calibration certificate, test-bench log, verification record and disposition log | meter_serial_or_batch; model_revision; medium; duty; principle; metrological_class; rated_range; rated_conditions; test_standard; test_result; adjustment; seal; software_or_register_version; input_mass; accepted_mass; reject_mass | Link each meter or statistically governed batch to the applicable test plan and acceptance record | kg, item and original metrology units | Every meter or governed batch | Declared production period | Every calibration or test site | Aggregate only accepted meters with the same test route and required qualifiers; retain rework and rejection separately | Reference-standard traceability; test-bench calibration; certificate or verification record; acceptance signature |
| `cp_calibration_resources` | `calibration_verification_and_test` | Test media, electrical load, reference-standard operation and consumables | Test-bench meter and resource log | medium; source; opening_reading; closing_reading; recirculated_quantity; recovered_quantity; discharged_quantity; pressure; temperature; density; electrical_energy; test_hours; accepted_mass | Meter batch-level resource use; record recirculation and recovery separately; retain original conditions and units | Original calibrated unit | Per test batch | Declared production period | Every calibration or test site | Net input equals gross supplied minus recovered return; discharged amount equals measured release after recirculation; normalize to accepted output | Meter calibration; environmental conditions; conversion factors; balance check |
| `cp_packaging_and_dispatch` | `packaging_and_dispatch` | Delivered product kit, packaging, labels, manuals, energy and pre-dispatch waste | Packing list, BOM, purchase or issue record, scale and logistics record | model_revision; meter_mass; accessory_mass; packaging_material; packaging_mass; reusable_packaging; label_and_manual_mass; energy; dispatched_count; waste_mass | Weigh the net meter kit separately from packaging; reconcile issued packaging and dispatch records | kg, item and energy carrier unit | Per batch or dispatch lot | Declared production period | Every packaging and dispatch site | Normalize product and packaging separately to 1 kg net finished product; do not add packaging mass to the reference amount | Scale calibration; packing list; packaging specification; dispatch record; waste manifest |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_reference_mass` | Packaged reference product | Net reference mass equals finished meter plus delivered accessory mass, excluding all primary, secondary and transport packaging | meter_mass; delivered_accessory_mass; packaging_mass | kg net finished product | `pep-ecopassport-pcr-ed4` |
| `calc_count_to_mass` | Count-based production records | Mass equals accepted item count multiplied by measured or controlled net mass per item for the same model and revision | accepted_count; mass_per_item; sampling_basis | kg product or component |
| `calc_process_normalization` | Every process inventory row | Normalized amount equals attributable process amount divided by accepted process output mass, then multiplied by 1 kg | attributable_amount; accepted_output_mass | amount per kg accepted output |
| `calc_test_media_balance` | Calibration gas or liquid | Net consumed or discharged medium equals gross supplied minus measured recovered or recirculated return, with volume-to-mass conversion only when temperature, pressure and density or conversion method are documented | gross_supply; recovered_return; recirculated_quantity; discharge; temperature; pressure; density_or_factor | net medium amount per kg accepted meter | `oiml-r49-2024`; `oiml-r117-2019`; `oiml-r137-2012` |
| `calc_variant_site_weighting` | Multi-variant or multi-site dataset | Weighted result equals the sum of each stratified site-variant result multiplied by its net finished production mass, divided by total net finished production mass | site_variant_result; site_variant_production_mass; qualifier_stratum | production-mass-weighted result with retained qualifier distribution | `pep-ecopassport-pcr-ed4` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and all aggregated variants | Preserve medium, supply or production duty, mechanical/electronic/smart technology, measuring principle, metrological class and rated range, communication, power, enclosure, mounting and delivered-accessory configuration | Approved product specification, controlled BOM, type-approval or conformity record, and production-volume table |
| `dq_metrological_traceability` | Calibration, verification and final test | Use traceable reference standards and the applicable test plan; retain environmental and operating conditions, software or register version when applicable, adjustments, acceptance and uncertainty records | Calibration certificates, test-bench calibration, verification report and batch or serial traceability |
| `dq_mass_balance` | Component fabrication, assembly, calibration and packaging | Reconcile measured inputs, accepted output, internal rework, stock change, waste and direct releases; document uncertainty and unresolved imbalance | Process-level mass-balance worksheet, scale calibration and disposition records |
| `dq_temporal_and_site_coverage` | Foreground production | Cover all contributing sites and at least 12 consecutive representative months unless the complete production campaign is shorter; disclose ramp-up, abnormal shutdowns and missing periods | Site list, production calendar, meter coverage table and exception log |
| `dq_supplier_and_background_coverage` | Materials, components, subassemblies, packaging, energy, test media and treatment | Use representative upstream datasets and disclose supplier-specific data coverage, geography, technology, age and proxies; do not treat a narrow smart-meter dataset as representative of all variants | Supplier declarations, dataset register, data-gap list and proxy justification |
| `dq_completeness_and_cutoff` | All assessable inputs and outputs | Quantify and justify exclusions against the applicable mass, energy and environmental-impact cut-off criteria and systematically include significant materials and components | Completeness calculation, exclusion register and sensitivity check; `pep-ecopassport-pcr-ed4` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | Reference flow | The product-flow UUID, Mass property UUID, Units of mass UUID and kg unit shall match section 3; the output shall be a finished meter, not a part, sensor or service. |  |
| `validation_required_qualifiers` | Dataset identity | Reject a data package missing the measured medium, duty, technology, principle, metrological class and rated conditions, communication, power, enclosure, mounting, delivered accessories, net mass, geography or period. | `eu-mid-2014-32-eu`; `oiml-r46-2012`; `oiml-r49-2024`; `oiml-r117-2019`; `oiml-r137-2012` |
| `validation_process_coverage` | Foreground inventory | Require component and subassembly, final assembly and configuration, calibration and verification, and packaging and dispatch processes, with conditional electronic, communication, power and medium-specific resources explicitly present or documented not applicable. | `pep-ecopassport-pcr-ed4`; `iea-4e-smart-metering-consumption-2013` |
| `validation_mass_and_yield` | Process balances | Confirm inputs, accepted output, rework, stock change, waste and direct releases reconcile within documented measurement uncertainty and that rejects are not hidden in accepted yield. | `pep-ecopassport-pcr-ed4` |
| `validation_calibration_traceability` | Accepted product output | Confirm each accepted meter or governed batch links to the applicable test plan, traceable standard, rated conditions, metrological class, result, adjustment, software or register version when applicable, seal and acceptance record. | `eu-mid-2014-32-eu`; `oiml-r46-2012`; `oiml-r49-2024`; `oiml-r117-2019`; `oiml-r137-2012` |
| `validation_cutoff_and_sources` | Completeness and evidence | Confirm every exclusion is quantified and justified, significant materials and components are retained, all non-default method constraints cite valid source ids, and all foreground rows link to records or calculations. | `pep-ecopassport-pcr-ed4` |
| `validation_variant_aggregation` | Product families and sites | Reject aggregation that combines materially different media, duties, technologies or configurations without qualifier-stratified records, production-mass weights and a sensitivity or variability disclosure. | `pep-ecopassport-pcr-ed4` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package for a declared finished supply or production meter variant |
| downstream_use | `secondary_dataset`; `background_dataset`; input to a downstream `process` or `lifecyclemodel` that adds distribution, installation, measured utility service, operational own-energy and communications, maintenance, replacement, and end-of-life scenarios |
| allowed_use | Cradle-to-manufacturer-gate modelling of the exact declared meter variant or a transparent production-weighted family that preserves all required qualifiers |
| excluded_use | Proxying the entire category with one smart electricity meter, one gas or water meter, a stand-alone sensor, a component, or a backend service; comparative metering-service claims without function, accuracy, capacity, service life and use-phase scenarios |
| required_metadata | PCR id and version state; product model and revision; medium and liquid family; supply or production duty; mechanical/electronic/smart technology and principle; metrological class, rated range and applicable regime; communication and power configuration; enclosure and mounting; delivered accessories; net mass; sites and period; reference-flow UUIDs; allocation; data-source and foreground-record lineage |
| required_quality_disclosure | BOM and supplier-data coverage; foreground meter coverage; site and temporal representativeness; calibration and verification traceability; mass-balance closure and uncertainty; exclusions and cut-off checks; allocation; proxy datasets; variant weights; missing data and sensitivity |
| update_trigger | Change in measured medium or duty, measuring principle, metrological class or rated range, material or component design, communication or power configuration, enclosure or delivered accessories, factory route, calibration method, supplier or background dataset, allocation, or production mix that materially changes the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `pep-ecopassport-pcr-ed4` | `standard` | PEP Ecopassport, Product Category Rules for Electrical, Electronic and HVAC-R Products, PEP-PCR-ed4-EN-2021 09 06, https://register.pep-ecopassport.org/documents/public/PCR-4-EN (retrieved 2026-08-09) | Manufacturing and life-cycle boundary, materials and components, packaging, cut-off, allocation, foreground reporting and data quality |
| `eu-mid-2014-32-eu` | `official_guidance` | European Parliament and Council, Directive 2014/32/EU on measuring instruments, https://eur-lex.europa.eu/eli/dir/2014/32/oj (retrieved 2026-08-09) | Meter-family scope, conformity, rated-condition, accuracy-class and manufacturer documentation requirements |
| `oiml-r46-2012` | `standard` | OIML R 46-1/-2:2012, Active electrical energy meters, https://www.oiml.org/en/files/pdf_r/r046-1-2-e12.pdf/@@download/file/R046-1-2-e12.pdf (retrieved 2026-08-09) | Electrical-meter technology, metrological and performance testing, rated conditions, bidirectional and software-controlled configurations |
| `oiml-r49-2024` | `standard` | OIML R 49-1:2024, Water meters for cold potable water and hot water, https://www.oiml.org/en/files/pdf_r/r049-1-e24.pdf (retrieved 2026-08-09) | Water-meter materials, construction, installation, metrological requirements and testing |
| `oiml-r117-2019` | `standard` | OIML R 117-1:2019, Dynamic measuring systems for liquids other than water, https://www.oiml.org/en/files/pdf_r/r117-1-e19.pdf (retrieved 2026-08-09) | Other-liquid meter scope, measuring-system constituents, rated conditions, metrological requirements and testing |
| `oiml-r137-2012` | `standard` | OIML R 137-1&2:2012, Gas meters, https://www.oiml.org/en/files/pdf_r/r137-1-2-e12.pdf/@@download/file/R137-1-2-e12.pdf (retrieved 2026-08-09) | Gas families, pressure and flow ranges, accuracy classes, rated conditions, metrological tests and software-controlled meter requirements |
| `iea-4e-smart-metering-consumption-2013` | `official_guidance` | IEA 4E, Smart Metering Consumption, Appendix C English report, 2013, https://www.iea-4e.org/wp-content/uploads/2021/01/APPENDIX_C_Smart_Metering_Consumption_english.pdf (retrieved 2026-08-09) | Smart/electronic-meter conditional branch only: metering, communication, hardware, additional features, power supply, own-energy and downstream communication-infrastructure separation |
