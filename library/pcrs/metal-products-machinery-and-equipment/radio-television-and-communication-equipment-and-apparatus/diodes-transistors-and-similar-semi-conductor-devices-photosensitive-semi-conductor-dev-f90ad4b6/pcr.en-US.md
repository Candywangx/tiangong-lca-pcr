---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.diodes-transistors-and-similar-semi-conductor-devices-photosensitive-semi-conductor-dev-f90ad4b6
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Diodes, transistors and similar semi-conductor devices; photosensitive semi-conductor devices; light emitting diodes; mounted piezo-electric crystals

## 1. Scope and Applicability

This PCR applies to foreground data packages for finished devices within the reviewed semantic boundary of discrete semiconductor devices, photosensitive semiconductor devices, photovoltaic cells and cell assemblies, light-emitting diodes, and mounted piezo-electric crystals. A conforming data package represents one declared device family, material system, production route, and delivery state. It must not present a single diode, transistor, photovoltaic, LED, or piezo-electric route as an average for this heterogeneous category.

Covered delivery states are completed device wafers sold as products, separated bare dies or cells, packaged discrete devices, declared photovoltaic cell assemblies or modules that remain within the classification reference, LED packages or arrays, and mounted piezo-electric crystal units. Purchased raw semiconductor wafers without completed active device structures, unmounted piezo-electric material, integrated circuits, complete luminaires, electronic equipment, and downstream systems are excluded. Parts not constituting the declared finished device, production equipment, and services are also excluded as reference products.

This is a manufacturing-gate PCR expressed on a mass reference. Count, active area, substrate area, rated electrical or optical performance, package or mount type, and tested grade remain mandatory supplementary quantities where applicable. Use-phase function is not made comparable by mass alone.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.diodes-transistors-and-similar-semi-conductor-devices-photosensitive-semi-conductor-dev-f90ad4b6 |
| classification_refs | CPC 3.0: 47150, exact reviewed semantic scope |
| covered_products | Discrete diodes, rectifiers, transistors, thyristors and similar devices; photosensitive semiconductor detectors and photovoltaic cells; declared PV cell assemblies or modules within the classification scope; LED dies, packages and arrays; mounted piezo-electric crystal units |
| excluded_products | Raw or device-free semiconductor wafers; unmounted piezo-electric material; electronic integrated circuits; complete lamps, luminaires, power converters, sensors or equipment containing the devices; generic electronic components; manufacturing equipment; parts that are not a finished in-scope device |
| representative_product | No single representative device is valid; each dataset declares one device family and one delivery state, or a documented production-weighted mix with family-level disaggregation |
| production_route | Route-specific sequence from the declared incoming substrate, device wafer, die, cell or crystal blank through applicable active-structure fabrication, separation, packaging or mounting, final test, binning and release |
| market_state | Conforming finished manufactured product at the declared processed-wafer, bare-die or cell, packaged-device, PV assembly or module, LED package or array, or mounted-crystal delivery gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Conforming finished in-scope device product at its declared delivery state |
| How much | 1 kg net product mass, excluding transport packaging unless packaging is inseparable from the marketed device |
| How well | Released after the declared electrical, optical, photovoltaic or frequency-control test and binning criteria; rejects are not included in reference output |
| How long or cycle | Production from one representative reporting period or complete campaign, with dates, sites and exceptional periods disclosed |
| reference_flow_link | The generic Tiangong product flow is used only with all required qualifiers; it does not authorize an unqualified category-average dataset |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Diodes, transistors and similar semi-conductor devices, photosensitive semi-conductor devices, light emitting diodes, mounted piezo-electric crystals `2db29aee-6424-47c2-9951-6d33d99c611d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | device_family; semiconductor_or_piezoelectric_material_system; delivery_state; processed_wafer_bare_die_cell_package_module_or_mount_definition; wafer_or_substrate_type_and_size_when_applicable; active_area_or_cell_area_when_applicable; die_count_or_device_count_per_reference_mass; package_mount_or_module_construction; electrical_optical_photovoltaic_or_frequency_grade; production_route; site_geography; reporting_period; conforming_output_mass; production_mix_rule |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg of net conforming reference product at the declared delivery gate. |
| `count_to_mass` | Item-count production or test records | Mass plus count | kg and item | Convert count records using measured lot mass divided by conforming item count, or a documented product-specific average mass from the same product and period; do not use a family-generic mass. |
| `area_to_mass` | Wafer, cell, detector, LED or module area records | Mass plus area | kg and m2 | Retain substrate or active area and convert to the mass reference using measured lot mass and matching processed area for the same route, device state and period. |
| `performance_metadata` | Electrical, optical, photovoltaic and piezo-electric grades | Mass plus declared performance quantity | kg plus native test unit | Preserve rated voltage, current, power, luminous or radiant output, responsivity, active area, frequency, or other applicable tested quantity as metadata; mass-normalized results alone are not suitable for functional comparisons. |
| `net_product_mass` | Packaged or mounted products | Mass | kg | Include the integral package, leads, mount, encapsulant, optics and integral module materials in net product mass; exclude removable shipping packaging and carriers returned to the supplier. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Receipt of the route-specific semiconductor substrate or device wafer, purchased die or cell, or piezo-electric crystal blank or prepared resonator at the first foreground-controlled transformation |
| starting_condition_role | The declared starting condition identifies which upstream material and device-forming stages require linked upstream datasets rather than being silently omitted |
| product_classification_scope | One declared device family and delivery state within CPC 3.0 code 47150; any production-weighted mixed dataset preserves family and route shares |
| recursive_input_rule | An in-scope purchased wafer, die, cell, LED, or mounted-device input is recorded as a same-category technosphere input with its own qualified upstream dataset; its burden is not recreated or treated as zero |
| upstream_dataset_requirement | Supplier-specific or representative upstream datasets are required for substrates, wafers, dies, cells, crystals, package materials, process chemicals, gases, electricity and utilities outside foreground control |
| disclosure | Declare family, material system, wafer or substrate state, package or mount state, included sites and stages, outsourced stages, yield basis, allocation drivers, abatement coverage, cut-offs and data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_family_route` | All datasets | Build the boundary for the declared device family and delivery state. Do not substitute the process map of another family or claim whole-category representativeness from one route. | `iec-63366-2025`; `us-doe-led-lca-2012`; `jrc-pv-footprint-2025`; `iec-60122-1-2017` |
| `boundary_semiconductor_fabrication` | Semiconductor, photosensitive, photovoltaic and LED routes | Include foreground-controlled active-structure formation and applicable wafer preparation, deposition or epitaxy, doping, masking, etching, cleaning, metallization, passivation and inspection. If these occur upstream, link qualified upstream datasets. | `us-epa-semiconductor-neshap`; `us-epa-subpart-i`; `us-doe-led-lca-2012` |
| `boundary_back_end` | Separated, packaged, mounted or module products | Include applicable dicing or separation, die attach, interconnection, electrode formation, encapsulation, optics, framing or module assembly, sealing, marking, test, binning and yield losses up to release. | `us-epa-semiconductor-neshap`; `us-doe-led-lca-2012`; `jrc-pv-footprint-2025`; `epson-crystal-device-process` |
| `boundary_emissions_and_treatment` | All included manufacturing stages | Include process-gas and solvent releases, fluorinated GHG and N2O emissions where used, abatement operation and downtime, wastewater, hazardous and non-hazardous waste, recycling preparation and off-site treatment flows without netting them against inputs. | `us-epa-subpart-i`; `us-epa-electronics-effluent-guidelines` |
| `boundary_capital_and_downstream` | Dataset boundary | Exclude manufacturing equipment, buildings, transport after the declared gate, use and end of life unless the study goal explicitly extends the system; disclose any included capital or downstream stages separately. | `iso-14044-2006`; `iec-63366-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `wafer_or_device_fabrication` | Active-structure, wafer, die or cell fabrication | conditional | Include for foreground-controlled semiconductor, photosensitive, photovoltaic or LED structure fabrication; otherwise require a qualified upstream device-wafer, die or cell dataset | Foreground device formation | kg conforming fabricated device wafer, die or cell, with substrate area and item count retained |
| `device_or_module_assembly` | Separation, package, LED array or PV assembly | conditional | Include when separation, packaging, encapsulation, optics, mounting, module or panel assembly occurs before the declared gate | Foreground back-end assembly | kg conforming assembled product before final release |
| `piezoelectric_crystal_manufacture_and_mounting` | Piezo-electric crystal preparation and mounting | conditional | Include for mounted piezo-electric crystal products; require qualified upstream datasets for purchased synthetic crystal or prepared resonator | Foreground crystal preparation and mount assembly | kg conforming mounted crystal before final release |
| `final_test_binning_release` | Final test, binning and product release | required | Required for every dataset; test content is family- and grade-specific | Foreground quality release and reference output | 1 kg net conforming reference product |

### Process: Active-structure, wafer, die or cell fabrication (`wafer_or_device_fabrication`)

#### Inputs

##### Product flows

###### Semiconductor substrate, device wafer or purchased precursor (`fabrication_substrate_input`)

Record each substrate, wafer, epitaxial wafer, semiconductor precursor and purchased active-device intermediate separately with its material system, dimensions, incoming state and upstream dataset.

- Selected flow: Route-specific substrate, wafer or device intermediate; UUID unresolved until the concrete route is declared
- Flow property / unit: Mass / kg; substrate area and item count retained
- Amount rule: Foreground purchase and issue records reconciled to tool or lot tracking
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_bom_records`
- Sources: `us-epa-semiconductor-neshap`; `us-doe-led-lca-2012`; `jrc-pv-footprint-2025`

###### Process chemicals and gases (`fabrication_chemicals_and_gases`)

Record each distinct dopant, deposition or epitaxy precursor, etchant, cleaning chemical, photoresist, solvent, process gas, carrier gas and chamber-cleaning gas as an individual flow instance; do not collapse them into a generic chemical mass.

- Selected flow: Route-specific chemical or gas; UUID unresolved until material identity is declared
- Flow property / unit: Mass / kg or measured gas amount converted with documented conditions
- Amount rule: Purchases, point-of-use delivery, cylinder or bulk-tank balance, and recipe records reconciled for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_material_and_gas_records`
- Sources: `us-epa-subpart-i`; `us-epa-semiconductor-neshap`

###### Electricity and manufacturing utilities (`fabrication_energy_and_utilities`)

Record electricity, process cooling, chilled water, clean dry air, nitrogen, vacuum and exhaust demand using metered tool or utility-system data and an explicit causal allocation driver.

- Selected flow: Site-specific electricity and utility services; UUID unresolved until site supply is declared
- Flow property / unit: Energy / kWh or MJ; utility-native quantities retained
- Amount rule: Metered consumption or calculated share from monitored equipment and facility utility records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_utility_records`
- Sources: `semi-s23-1021`

###### Ultrapure and process water (`fabrication_water_input`)

Record incoming water by supplied quality and separately account for purification losses when purification is foreground-controlled.

- Selected flow: Site-specific water supply; UUID unresolved until supply quality is declared
- Flow property / unit: Volume / m3 and mass / kg where available
- Amount rule: Metered fab, process-area or tool consumption allocated with the same route and period as output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_utility_records`
- Sources: `semi-s23-1021`; `us-doe-led-lca-2012`

##### Waste flows

No routine waste input is prescribed. Returned or reclaimed in-scope material entering this process is recorded as a product input with recycled-content status and upstream treatment disclosed.

##### Elementary flows

No elementary input is prescribed beyond resources represented by selected upstream product flows.

#### Outputs

##### Product flows

###### Fabricated device wafer, die or photovoltaic cell (`fabricated_device_output`)

Record the conforming output at the actual state leaving fabrication and retain wafer or substrate area, die or cell count, material system, technology, yield and tested grade.

- Selected flow: Route- and state-specific fabricated device output; UUID unresolved until the concrete product is declared
- Flow property / unit: Mass / kg; area and item count retained
- Amount rule: Measured conforming output mass and reconciled lot disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output before any downstream package or module assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_mass_and_disposition`
- Sources: `iec-60747-1-2010`; `jrc-pv-footprint-2025`

##### Waste flows

###### Fabrication scrap and spent process materials (`fabrication_solid_and_liquid_waste`)

Record rejected wafers, edge and kerf loss, spent slurries, resists, solvents, acids, bases, filters and other wastes as separate flows by composition and destination.

- Selected flow: Waste-specific flow; UUID unresolved until composition and treatment are declared
- Flow property / unit: Mass / kg
- Amount rule: Weighed containers, manifests and inventory change reconciled to lot disposition
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_wastewater_records`
- Sources: `us-epa-electronics-effluent-guidelines`

###### Fabrication wastewater (`fabrication_wastewater`)

Record wastewater by materially different stream before treatment, the treatment route, measured discharge and transferred residues; do not represent all streams as water alone.

- Selected flow: Route-specific wastewater or treatment flow; UUID unresolved until composition and destination are declared
- Flow property / unit: Volume / m3 and pollutant mass / kg
- Amount rule: Flowmeter, sampling, treatment-log and discharge records for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_wastewater_records`
- Sources: `us-epa-electronics-effluent-guidelines`

##### Elementary flows

###### Direct process air emissions (`fabrication_direct_air_emissions`)

Record each relevant emitted fluorinated GHG, N2O, acid gas, volatile organic compound and other measured or permitted release after abatement. Input gas consumption is not an emission factor by itself.

- Selected flow: Substance-specific elementary flow; UUID unresolved until the emitted substance is declared
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or a documented jurisdictional calculation using collected gas use, utilization, by-product formation, abatement efficiency and downtime
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming output of this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `us-epa-subpart-i`; `us-epa-semiconductor-neshap`

### Process: Separation, package, LED array or PV assembly (`device_or_module_assembly`)

#### Inputs

##### Product flows

###### Device wafer, die, cell or same-category component (`assembly_device_input`)

Record the incoming device state and link an upstream dataset with the same family, material system, route and delivery-state qualifiers.

- Selected flow: Qualified route-specific device input; UUID resolved for the concrete device state before publication
- Flow property / unit: Mass / kg; area and item count retained
- Amount rule: Foreground receipts and issue records, including returned or rejected input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming assembled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_bom_records`
- Sources: `us-doe-led-lca-2012`; `jrc-pv-footprint-2025`

###### Package, mount, optical and module materials (`assembly_material_inputs`)

Record each leadframe, substrate, electrode, bond material, solder, encapsulant, housing, thermal interface, optical element, phosphor, glass, frame, backsheet, junction or interconnect material as an individual BOM flow when applicable.

- Selected flow: Material-specific product flow; UUID unresolved until the construction is declared
- Flow property / unit: Mass / kg
- Amount rule: Product-specific BOM multiplied by released production, reconciled to receipts, issues, returns and scrap
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming assembled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_and_bom_records`
- Sources: `us-doe-led-lca-2012`; `jrc-pv-footprint-2025`

###### Assembly electricity and utilities (`assembly_energy_and_utilities`)

Record electricity, thermal energy, cleanroom and assembly utilities for separation, attach, interconnection, encapsulation, optics, lamination, framing, sealing and in-line tests.

- Selected flow: Site-specific electricity and utility services; UUID unresolved until site supply is declared
- Flow property / unit: Energy / kWh or MJ; utility-native quantities retained
- Amount rule: Metered process consumption or a documented causal allocation from monitored equipment records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming assembled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_utility_records`
- Sources: `semi-s23-1021`

##### Waste flows

No routine waste input is prescribed.

##### Elementary flows

No elementary input is prescribed beyond resources represented by selected upstream product flows.

#### Outputs

##### Product flows

###### Assembled device, LED array or PV assembly (`assembled_device_output`)

Record conforming output before final release with family, construction, package or module state, device count, net mass and applicable active area.

- Selected flow: Route-specific assembled product; UUID unresolved until the concrete product is declared
- Flow property / unit: Mass / kg; area and item count retained
- Amount rule: Measured output mass and production disposition records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output before final release
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_mass_and_disposition`
- Sources: `iec-60747-1-2010`; `us-doe-led-lca-2012`; `iec-62941-2019`

##### Waste flows

###### Assembly rejects and material losses (`assembly_rejects_and_scrap`)

Record rejected dies, cells, packages, modules, frames, glass, encapsulants, metals and other losses separately by material and destination.

- Selected flow: Waste-specific flow; UUID unresolved until composition and treatment are declared
- Flow property / unit: Mass / kg and item count
- Amount rule: Lot disposition, rework, scrap and waste-manifest records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming assembled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_yield_mass_and_disposition`
- Sources: `jrc-pv-footprint-2025`; `us-doe-led-lca-2012`

##### Elementary flows

###### Direct assembly releases (`assembly_direct_releases`)

Record measured or permitted solvent, soldering, curing, cleaning and other direct air or water releases by substance after controls.

- Selected flow: Substance-specific elementary flow; UUID unresolved until substance identity is declared
- Flow property / unit: Mass / kg
- Amount rule: Monitoring, material balance or permitted calculation based on foreground records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming assembled output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `us-epa-semiconductor-neshap`; `us-epa-electronics-effluent-guidelines`

### Process: Piezo-electric crystal preparation and mounting (`piezoelectric_crystal_manufacture_and_mounting`)

#### Inputs

##### Product flows

###### Piezo-electric crystal or prepared resonator input (`piezoelectric_crystal_input`)

Declare natural or synthetic origin, material composition, cut or orientation, blank or resonator state, dimensions and the upstream production boundary.

- Selected flow: Product-specific piezo-electric crystal input; UUID unresolved until material and state are declared
- Flow property / unit: Mass / kg and item count
- Amount rule: Receipts, issue records and measured lot mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming mounted crystal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_and_bom_records`
- Sources: `epson-crystal-device-process`; `iec-60122-1-2017`

###### Electrode, package and mounting materials (`piezoelectric_mount_materials`)

Record each electrode metal, adhesive, solder, lead, substrate, enclosure, sealing medium and cleaning material separately.

- Selected flow: Material-specific product flow; UUID unresolved until mount construction is declared
- Flow property / unit: Mass / kg
- Amount rule: Product-specific BOM reconciled to purchases, issues and losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming mounted crystal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_and_bom_records`
- Sources: `epson-crystal-device-process`; `iec-60122-1-2017`

###### Crystal preparation and mounting energy (`piezoelectric_energy_and_utilities`)

Record electricity and utilities for cutting, shaping, polishing, cleaning, electrode formation, frequency adjustment, mounting, sealing and in-line test as applicable.

- Selected flow: Site-specific electricity and utility services; UUID unresolved until site supply is declared
- Flow property / unit: Energy / kWh or MJ; utility-native quantities retained
- Amount rule: Metered equipment consumption or documented causal allocation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming mounted crystal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_utility_records`
- Sources: `semi-s23-1021`; `epson-crystal-device-process`

##### Waste flows

No routine waste input is prescribed.

##### Elementary flows

No elementary input is prescribed beyond resources represented by selected upstream product flows.

#### Outputs

##### Product flows

###### Mounted piezo-electric crystal before final release (`mounted_piezoelectric_output`)

Record conforming units with material, cut, package or mount, nominal frequency or other controlled characteristic, item count and net mass.

- Selected flow: Product-specific mounted piezo-electric crystal; UUID unresolved until the concrete product is declared
- Flow property / unit: Mass / kg and item count
- Amount rule: Measured conforming output mass and item count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: process output before final release
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_mass_and_disposition`
- Sources: `iec-60122-1-2017`

##### Waste flows

###### Crystal losses, rejects and spent materials (`piezoelectric_waste`)

Record cutting and polishing loss, off-spec resonators, electrode or package scrap, spent slurry, cleaning wastes and treatment destinations separately.

- Selected flow: Waste-specific flow; UUID unresolved until composition and treatment are declared
- Flow property / unit: Mass / kg and item count where applicable
- Amount rule: Lot disposition, mass balance and waste-manifest records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming mounted crystal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_wastewater_records`
- Sources: `epson-crystal-device-process`

##### Elementary flows

###### Direct crystal-process releases (`piezoelectric_direct_releases`)

Record substance-specific releases from etching, cleaning, electrode formation, joining and sealing when they cross the environmental boundary.

- Selected flow: Substance-specific elementary flow; UUID unresolved until substance identity is declared
- Flow property / unit: Mass / kg
- Amount rule: Monitoring or foreground material balance after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming mounted crystal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `us-epa-electronics-effluent-guidelines`

### Process: Final test, binning and product release (`final_test_binning_release`)

#### Inputs

##### Product flows

###### Product awaiting final release (`pre_release_product_input`)

Record the applicable fabricated, assembled or mounted product input with its route and state unchanged.

- Selected flow: Qualified pre-release product state; UUID resolved for the concrete dataset when available
- Flow property / unit: Mass / kg and item count
- Amount rule: Measured mass and item count entering final test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_mass_and_disposition`
- Sources: `iec-60747-1-2010`; `iec-60122-1-2017`; `iec-62941-2019`

###### Test electricity and consumables (`final_test_inputs`)

Record test-system electricity, thermal conditioning, burn-in where applied, carriers consumed, and other non-reusable consumables.

- Selected flow: Site-specific energy and material flows; UUID unresolved until the test route is declared
- Flow property / unit: Energy / kWh or MJ and material mass / kg
- Amount rule: Metered test-cell consumption and consumed-material records allocated by tested item-hours or another causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_and_grade_records`
- Sources: `iec-60747-1-2010`; `iec-60122-1-2017`; `iec-62941-2019`

##### Waste flows

No routine waste input is prescribed.

##### Elementary flows

No elementary input is prescribed beyond resources represented by selected upstream product flows.

#### Outputs

##### Product flows

###### Released reference product (`reference_product_output`)

The output is exactly the qualified Tiangong reference flow with the dataset-specific family, route, state, construction, grade, count or area, site and period qualifiers.

- Selected flow: Diodes, transistors and similar semi-conductor devices, photosensitive semi-conductor devices, light emitting diodes, mounted piezo-electric crystals `2db29aee-6424-47c2-9951-6d33d99c611d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net conforming released product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Final-test rejects and downgraded product (`final_test_rejects`)

Record rejected, downgraded, reworked and scrapped items separately. A downgraded product is a co-product only when it is sold for a documented function and leaves as a distinct product flow.

- Selected flow: Disposition-specific waste or product flow; UUID unresolved until disposition is declared
- Flow property / unit: Mass / kg and item count
- Amount rule: Test-bin and disposition records reconciled to pre-release input and released output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_and_grade_records`
- Sources: `iec-60747-1-2010`; `iec-60122-1-2017`; `iec-62941-2019`

##### Elementary flows

No generic elementary output is prescribed. Record direct test or burn-in releases if they occur.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Multi-product facilities and shared lines | Prefer process subdivision, direct metering and product-route records so allocation is avoided wherever practicable. | `iso-14044-2006`; `semi-s23-1021` |
| `allocation_causal_driver` | Shared tools, cleanrooms and utilities | Allocate unavoidable shared consumption using a documented causal driver such as recipe tool-time, wafer or substrate area by process step, chamber cycles, processed item-hours, metered load, exhaust demand or cooling load. Production mass or revenue may not be used without demonstrating why it reflects the physical relationship. | `iso-14044-2006`; `semi-s23-1021`; `us-epa-subpart-i` |
| `allocation_yield_and_rework` | Rejects, rework and downgraded bins | Assign burdens of ordinary yield loss and rework to conforming output. Treat a downgraded bin as a co-product only when it has a documented market function and separate flow; disclose the chosen physical or economic allocation and test it in sensitivity analysis. | `iso-14044-2006` |
| `allocation_recycling` | Recovered materials and returned carriers | Report material recovery, recycled content and any substitution credit separately. Apply one disclosed recycling allocation convention consistently and prevent double counting between the supplying and receiving systems. | `iso-14044-2006`; `iec-63366-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

No category-wide numerical default is authorized. The device families, material systems, wafer sizes, package states, yields and production technologies are too heterogeneous for a single credible range. All important amounts therefore require foreground records or a reviewed family- and route-specific external dataset; any future `reasoned_estimate` is temporary, replaceable and usable only as a QA screen.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_identity_and_mass` | `final_test_binning_release` | Reference product identity and mass | Product master, lot release and scale record | family; material_system; delivery_state; construction; grade; lot_id; item_count; net_mass; area; site; dates | Controlled master-data export joined to calibrated scale and release records | kg; item; m2 as applicable | Each released lot | Representative reporting period or complete campaign | Every included release site | Sum net conforming mass by qualified product, then preserve family and route shares | Calibration record; product specification; test release; traceable lot reconciliation |
| `cp_material_and_bom_records` | `wafer_or_device_fabrication`; `device_or_module_assembly`; `piezoelectric_crystal_manufacture_and_mounting` | Material inputs | BOM, purchase, warehouse issue and return records | material_id; composition; supplier; upstream_state; quantity; unit; lot; issue; return; inventory_change; recycled_content | Reconcile product-specific BOM to receipts, issues, returns and inventory change | kg; item; m2 | Each lot with monthly reconciliation | Same period as output | Every included process and outsourced supplier stage | Material used equals opening inventory plus receipts minus closing inventory and documented returns | Approved BOM revision; supplier certificate; inventory reconciliation |
| `cp_process_material_and_gas_records` | `wafer_or_device_fabrication` | Process chemicals and gases | Bulk-tank, cylinder, point-of-use and recipe records | substance; purity; mass_or_volume; conditions; tool; recipe; lot; return; residual; abatement_link | Reconcile purchases and inventory change to point-of-use or recipe consumption | kg; m3 with temperature and pressure | Continuous or each container and recipe | Same period as output | Each fab and process type | Substance-specific use allocated by direct measure or documented recipe driver | Meter calibration; container balance; recipe audit; uncertainty statement |
| `cp_energy_utility_records` | All applicable process ids | Electricity, water and utilities | Meter, equipment-state and facility utility log | meter_id; utility; quantity; unit; timestamp; tool_state; process; allocation_driver; calibration | Prefer submetering; otherwise allocate monitored facility totals using causal engineering drivers | kWh; MJ; m3; kg; utility-native unit | Continuous or batch-resolved | Same period as output, including idle and maintenance | Each included site and shared utility system | Sum measured use and allocate only the documented shared portion to conforming output | Meter calibration; coverage report; reconciliation to facility bill; allocation sensitivity |
| `cp_yield_mass_and_disposition` | All applicable process ids | Product yield, rework and waste | Manufacturing execution, test-bin, scale and waste records | input_lot; output_lot; input_mass; output_mass; item_count; area; pass; rework; downgrade; scrap; destination | Reconcile lot genealogy and all dispositions | kg; item; m2 | Each lot | Same period as output | Each included process | Preserve stage yield and assign normal loss to conforming output; do not hide rework loops | Closed lot balance; disposition approval; scale calibration |
| `cp_direct_emission_records` | All applicable process ids | Direct air and water releases | Stack test, continuous monitoring, gas-use, abatement and permit records | substance; input_use; by_product; utilization; abatement_efficiency; downtime; measured_release; method; uncertainty | Use direct monitoring where available or a documented applicable regulatory method based on collected activity data | kg per substance | Continuous, test campaign or regulatory reporting interval | Same period as output | Each emitting fab, stack and treatment system | Sum substance-specific controlled releases and normalize to conforming output | Method report; calibration; abatement uptime; permit or regulatory reconciliation |
| `cp_waste_and_wastewater_records` | All applicable process ids | Waste and wastewater | Flowmeter, sample, waste manifest and treatment log | stream; volume; pollutant_concentration; waste_mass; composition; hazard_class; treatment; destination; recovery | Measure separate streams and reconcile transferred residues and discharge | m3; kg | Continuous, batch or shipment | Same period as output | Each included site and treatment route | Sum by composition and destination before normalization | Laboratory QA; manifest; flowmeter calibration; treatment acceptance record |
| `cp_test_and_grade_records` | `final_test_binning_release` | Functional test, binning and release | Test-system and quality records | device_id_or_lot; test_method; grade; performance_value; unit; pass; fail; downgrade; test_time; burn_in; energy | Export traceable results from controlled test systems and join to product disposition | Native performance unit; item; kg; kWh | Each tested lot or item | Same period as output | Every included release site | Aggregate only within identical family, state, construction and grade; retain distributions when material | Test calibration; applicable product standard; release authorization; exception log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_mass_normalization` | Every inventory amount | normalized amount = period amount divided by period net conforming reference-product mass in kg | Period amount; net conforming mass from `cp_product_identity_and_mass` | Amount per 1 kg reference product | `iso-14044-2006` |
| `calc_count_area_conversion` | Count- or area-based records | Use matching lot mass divided by count or processed area; keep the original count or area and prohibit cross-family conversion factors | Lot mass; item count; processed area; route and state | Product-specific count-to-mass or area-to-mass factor | `us-epa-subpart-i`; `us-doe-led-lca-2012`; `jrc-pv-footprint-2025` |
| `calc_stage_yield` | Each manufacturing stage | stage yield = conforming output quantity divided by total input quantity on a consistent mass, item or area basis; separately report rework and downgrade | Input, conforming output, rework, downgrade and scrap records | Stage yield and reconciled disposition | `jrc-pv-footprint-2025`; `iec-62941-2019` |
| `calc_shared_utility` | Shared energy and utilities | allocated amount = measured shared amount multiplied by the documented causal-driver share; report unallocated and excluded portions | Metered total; driver values; meter coverage | Allocated utility amount and allocation sensitivity | `semi-s23-1021`; `us-epa-subpart-i` |
| `calc_direct_emissions` | Process gases and controlled releases | Apply direct measurement or the selected applicable method to collected gas use, utilization, by-product formation, abatement efficiency and downtime; never equate purchased gas with emitted gas without justification | Gas and monitoring records from `cp_direct_emission_records` | Substance-specific direct emission | `us-epa-subpart-i` |
| `calc_mass_reconciliation` | Each process and reporting period | input mass plus opening inventory = product mass plus waste mass plus measured releases plus closing inventory, with non-mass service flows excluded and the residual reported | Material, product, waste, release and inventory records | Mass-balance residual and explained exceptions | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | All required qualifiers match the product master, test grade and delivery state; a generic flow name alone is insufficient | Product specification, master-data snapshot and release record |
| `dq_family_route` | Process coverage | Evidence demonstrates that included and outsourced stages match the declared family, material system, technology, wafer or crystal state, package or mount, and reporting period | Route map, supplier declarations, process recipes and lot genealogy |
| `dq_temporal` | Foreground activity data | Use a representative reporting period that captures normal production, idle, maintenance, abatement downtime, rework and yield variation; justify and flag pilot or short-campaign data | Production calendar, meter coverage and exception log |
| `dq_completeness` | Inventory | No hazardous, fluorinated-gas, water, waste, high-mass, high-energy or yield-significant flow is excluded by a mass cut-off alone; disclose all cut-offs and missing substances | Completeness checklist, material balance and regulatory records |
| `dq_source_match` | Upstream datasets | Technology, geography, time, material purity and delivery state of upstream datasets are stated and mismatches are assessed | Dataset metadata and representativeness assessment |
| `dq_allocation` | Shared systems and co-products | Allocation driver, measurement coverage, excluded load and sensitivity are reproducible from retained records | Meter map, engineering model, driver data and sensitivity result |
| `dq_uncertainty` | Calculated and modelled values | Report measurement uncertainty, estimation method and unresolved data gaps; provisional estimates may not be presented as observed values | Calibration certificates, method report and uncertainty register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The product UUID, Mass UUID, Units of mass UUID and kg unit exactly match section 3. |  |
| `validate_required_qualifiers` | Dataset identity | Fail when device family, material system, delivery state, construction, grade, route, site, period, mass and applicable count or area qualifiers are missing. | `iec-60747-1-2010`; `iec-60122-1-2017`; `iec-62941-2019` |
| `validate_no_single_family_proxy` | Representativeness claim | Fail any claim to represent all of CPC 47150 when evidence covers only one diode, transistor, PV, LED, photosensitive or piezo-electric family. A mixed dataset must disclose production-weighted family and route shares and retain disaggregated inventory. | `iec-63366-2025`; `us-doe-led-lca-2012`; `jrc-pv-footprint-2025` |
| `validate_route_and_state` | Process map | Included stages, purchased intermediates and upstream datasets must reconcile with the declared incoming state and marketed delivery state; no wafer, die, package, module or mount stage may be double counted or silently omitted. | `us-epa-semiconductor-neshap`; `us-doe-led-lca-2012`; `epson-crystal-device-process` |
| `validate_process_coverage` | Manufacturing boundary | At least one family-specific production route plus `final_test_binning_release` is present; each conditional stage is explicitly included, outsourced with an upstream dataset, or not applicable with reason. | `iec-63366-2025` |
| `validate_yield_and_mass_balance` | Each process | Input, output, rework, downgrade, scrap, waste, release and inventory-change records reconcile; unexplained residuals and inconsistent mass, count or area yield bases are findings. | `iso-14044-2006`; `iec-62941-2019` |
| `validate_energy_utility_allocation` | Shared energy and utilities | Meter coverage and causal allocation drivers are disclosed and reproduce the normalized amount; revenue-only or unsubstantiated mass allocation is a finding. | `semi-s23-1021`; `us-epa-subpart-i` |
| `validate_direct_emissions` | Fabs and emitting assembly stages | When fluorinated gases, N2O, solvents, acid gases or other controlled substances are used, substance-specific emissions, abatement method and downtime are present or the check is explicitly inconclusive. | `us-epa-subpart-i`; `us-epa-semiconductor-neshap` |
| `validate_wastewater_and_waste` | Wet and material-removal processes | Wastewater and waste are distinguished by stream, composition and treatment destination; absence of evidence for an applicable stream is a finding. | `us-epa-electronics-effluent-guidelines` |
| `validate_foreground_evidence` | Important amounts | Important amounts are foreground records or calculations from collection. A reasoned estimate, if introduced, is labelled temporary and replaceable and is not used as a conformance limit or whole-family default. | `iso-14044-2006`; `iec-63366-2025` |
| `validate_recursive_inputs` | Same-category intermediates | Purchased in-scope wafers, dies, cells or devices have qualified upstream datasets and are not assigned zero burden or expanded recursively. | `iec-63366-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing data package for one qualified CPC 47150 device family, route and delivery state |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review and publication |
| allowed_use | Product- and route-specific supply-chain modelling when reference-flow qualifiers, included stages, upstream datasets and data quality match the study |
| excluded_use | Unqualified whole-leaf average; substitution among PV, LED, power-electronic, photosensitive, discrete-semiconductor and piezo-electric families; functional comparison using kg alone; use-phase performance claim; proxy for integrated circuits, luminaires or complete equipment |
| required_metadata | All reference-flow qualifiers; site and period; technology and route; wafer, die, cell, package, module or mount state; BOM revision; yield basis; count and area conversions; included and outsourced stages; upstream dataset references; allocation and recycling methods; abatement and treatment coverage |
| required_quality_disclosure | Foreground measurement coverage; calibration; temporal, geographical and technological representativeness; meter and mass-balance reconciliation; family and route shares for mixes; cut-offs; uncertainty; reasoned estimates; missing UUIDs or substances; data gaps |
| update_trigger | Change in device family, material system, wafer or substrate size, active structure, package or module construction, major process route, site electricity, yield, abatement, allocation driver, product grade, or reporting period that materially affects the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-47150` | official_guidance | United Nations Statistics Division, CPC classification detail for code 47150, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/1073/47150 (accessed 2026-08-09) | Classification scope identity |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html (confirmed current in 2022; accessed 2026-08-09) | LCI, allocation, consistency, completeness and interpretation rules |
| `iec-63366-2025` | standard | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691 (accessed 2026-08-09) | Horizontal EEPS PCR and need for product-specific complementary specifications |
| `iec-60747-1-2010` | standard | IEC 60747-1:2006+A1:2010, Semiconductor devices — Part 1: General, https://webstore.iec.ch/en/publication/3244 (accessed 2026-08-09) | Discrete semiconductor identity, ratings, characteristics, measurement and release evidence |
| `iec-60122-1-2017` | standard | IEC 60122-1:2002+A1:2017, Quartz crystal units of assessed quality — Part 1: Generic specification, https://webstore.iec.ch/en/publication/62199 (accessed 2026-08-09) | Mounted quartz crystal identity, qualification and test evidence |
| `iec-62941-2019` | standard | IEC 62941:2019, Terrestrial photovoltaic modules — Quality system for PV module manufacturing, https://webstore.iec.ch/en/publication/61932 (accessed 2026-08-09) | PV construction, material and process control, test and manufacturing consistency |
| `us-epa-semiconductor-neshap` | official_guidance | U.S. EPA, Semiconductor Manufacturing National Emission Standards for Hazardous Air Pollutants, https://www.epa.gov/stationary-sources-air-pollution/semiconductor-manufacturing-national-emission-standards-hazardous (accessed 2026-08-09) | Semiconductor boundary from crystal growth through wafer fabrication, test and assembly; relevant direct releases |
| `us-epa-subpart-i` | official_guidance | U.S. EPA, Subpart I Information Sheet — Electronics Manufacturing, https://www.epa.gov/ghgreporting/subpart-i-information-sheet (accessed 2026-08-09) | Fluorinated GHG, N2O, HTF, abatement, wafer diameter, substrate area and fab-level monitoring rules |
| `us-epa-electronics-effluent-guidelines` | official_guidance | U.S. EPA, Electrical and Electronic Components Effluent Guidelines Documents, https://www.epa.gov/eg/electrical-and-electronic-components-effluent-guidelines-documents (accessed 2026-08-09) | Wastewater stream, pollutant and treatment records |
| `semi-s23-1021` | standard | SEMI S23-1021, Guide for Energy, Utilities, and Materials Use Efficiency of Semiconductor Manufacturing Equipment; official revision notice, https://www.semi.org/en/standards-watch-2021Dec/revisions-to-semi-s23-published (accessed 2026-08-09) | Tool and facility energy, cooling-water, utility and material measurement and allocation drivers |
| `us-doe-led-lca-2012` | official_guidance | U.S. Department of Energy, Life-Cycle Assessment of Energy and Environmental Impacts of LED Lighting Products, Part 2: LED Manufacturing and Performance, https://www.energy.gov/documents/2012ledlca-pt2pdf-0 (2012; accessed 2026-08-09) | LED substrate, epitaxy, die fabrication, packaging, test and binning decomposition; heterogeneity and data-gap treatment |
| `jrc-pv-footprint-2025` | official_guidance | European Commission Joint Research Centre, Harmonised rules for the calculation of the carbon footprint of photovoltaic modules in the context of the EU Ecodesign Directive, JRC141275, DOI 10.2760/4062978, https://publications.jrc.ec.europa.eu/repository/handle/JRC141275 (2025; accessed 2026-08-09) | PV technology and delivery-state separation, company-specific BOM, energy, yield and data-quality requirements |
| `epson-crystal-device-process` | extension_guidance | Seiko Epson Corporation, Crystal devices: roles, manufacturing process and applications, https://www.epsondevice.com/crystal/ja/techinfo/column/general/crystal-device.html (accessed 2026-08-09) | Synthetic quartz and crystal-device manufacturing-route decomposition |
