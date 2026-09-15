---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-physical-or-chemical-analysis-for-measuring-or-checking-v-0d84169c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Instruments and apparatus for physical or chemical analysis, viscosity, porosity, expansion, surface tension, heat, sound, or light measurement

## 1. Scope and Applicability

This PCR applies to the foreground manufacture and factory-gate release of finished instruments and apparatus whose principal function is physical or chemical analysis, measurement or checking of viscosity, porosity, expansion, surface tension or similar properties, or measurement or checking of quantities of heat, sound, or light. It covers electrically powered and non-electrical products only when their declared principal function and product classification fall within CPC 48253.

The PCR is production-data-first. It defines a mass-normalized foreground data package for a declared model or model family. It does not supply default use profiles, service lifetimes, calibration intervals, consumable demand during use, or end-of-life scenarios. Those aspects require a product-specific study or an applicable product-specific rule.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.instruments-and-apparatus-for-physical-or-chemical-analysis-for-measuring-or-checking-v-0d84169c |
| classification_refs | CPC 3.0: 48253 (exact) |
| covered_products | Finished physical or chemical analyzers and instruments; viscometers; porosimeters; dilatometers; surface-tension instruments; calorimetric, sound-measuring, and light-measuring instruments and apparatus when classified in CPC 48253 |
| excluded_products | Thermometers, pyrometers, barometers, hygrometers, and psychrometers; flow, level, or pressure instruments; electricity supply meters; ionizing-radiation instruments; mechanical-properties testing machines; automatic regulating or controlling apparatus; standalone parts, accessories, calibration services, and laboratory consumables |
| representative_product | A finished, calibrated or release-tested analytical or measurement instrument at the factory gate, represented by a declared product model or mass-weighted model family |
| production_route | Purchased materials, components, sensing or optical modules, and electronic assemblies; conditional in-house fabrication; final assembly and integration; calibration or release testing; packaging and factory-gate release |
| market_state | Finished product, manufactured; production mix, at plant; net instrument mass reported separately from distribution packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision at the factory gate of a finished instrument or apparatus within this PCR scope |
| How much | 1 kg net mass of released finished product, excluding separately reported distribution packaging |
| How well | Conforms to the declared measurement principle, measured quantity, operating range, resolution, accuracy or uncertainty statement, and applicable release-test or calibration criteria |
| How long or cycle | One manufacturing and release cycle; no use-stage duration or service-life claim is implied |
| reference_flow_link | `analytical_measurement_instrument_at_factory_gate` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Instruments and apparatus for physical or chemical analysis, for measuring or checking viscosity, porosity, expansion, surface tension or the like, or for measuring or checking quantities of heat, sound or light `529b86b6-3103-4ca8-b9ae-0fbcadfb0a80` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | declared product model or model-family rule; measured quantity or analytical principle; instrument configuration and included accessories; measurement range; resolution; accuracy or uncertainty statement; power-supply type; calibration or release-test basis; net product mass; packaging status; manufacturing site and geography; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Released reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all reported foreground quantities to 1 kg of net released instrument mass; exclude separately reported distribution packaging from the denominator. |
| `item_to_mass_conversion` | Product records available only by item | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg/item and kg | Convert item counts using measured net mass for the declared model or a documented production-weighted model-family mean; retain the weighing records and population represented. |
| `energy_quantity_preservation` | Electricity and fuels | Declared energy or fuel property | kWh, MJ, or native metered unit | Preserve the metered unit and conversion factor; do not treat equipment rated power as energy unless operating time and load are recorded. |
| `packaging_mass_separation` | Distribution packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report packaging material by material class and mass as an input, but do not add its mass to the 1 kg net-product reference denominator. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate_to_gate` | Foreground manufacturing | Include all directly controlled manufacturing from receipt of purchased materials and components through conditional in-house fabrication, final assembly, calibration or release testing, packaging, and release of the finished product at the factory gate. | `eu-pef-2021-2279`; `iec-63366-2025` |
| `boundary_complete_inputs_outputs` | Each foreground process | Collect all known material, component, energy, water, consumable, product, co-product, waste, and direct air, water, or soil flows; justify and disclose every omitted flow. | `eu-pef-2021-2279` |
| `boundary_upstream_linkage` | Purchased products and services | Keep purchased materials, components, modules, electricity, fuels, transport, and waste treatment as visible product or waste exchanges and link them to geographically and technologically representative upstream datasets. | `eu-pef-2021-2279` |
| `boundary_use_end_of_life_exclusion` | Dataset claim | Exclude distribution after the factory gate, installation, use-stage electricity and consumables, maintenance, recalibration in service, and end-of-life unless a downstream study adds explicit product-specific scenarios without changing this foreground inventory. | `iec-63366-2025` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials, components, subassemblies, sensing or optical modules, electronic assemblies, process aids, utilities, and packaging are received at the declared manufacturing site |
| starting_condition_role | Gate-to-gate foreground entry condition; upstream production and inbound transport remain linked background requirements |
| product_classification_scope | Finished instruments and apparatus whose principal function falls within CPC 48253 |
| recursive_input_rule | If an input is itself within this product category, retain it as a distinct purchased product input with its own upstream dataset and declared mass; do not recursively absorb its manufacturing inventory into the foreground process |
| upstream_dataset_requirement | Every purchased product, utility, transport service, and waste treatment exchange requires a representative upstream dataset or an explicit data-gap disclosure |
| disclosure | Declare the included model or model family, site, reporting period, in-house versus purchased component split, instrument and accessory configuration, packaging status, allocation methods, excluded processes, proxies, and data gaps |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_fabrication` | In-house component and subassembly fabrication | conditional | Include when the reporting site fabricates printed assemblies, sensors, optical assemblies, housings, machined parts, coated parts, cables, or other product components | Foreground component production and preparation | kg of conforming component or subassembly transferred to final assembly |
| `final_assembly` | Final assembly and integration | required | Always include | Foreground assembly of purchased and in-house components into a complete instrument | kg of assembled instrument transferred to release testing |
| `calibration_release_testing` | Calibration and release testing | required | Always include the actual factory release route; distinguish calibration, functional test, optical or acoustic test, burn-in, and rework loops when used | Foreground verification of the declared product function and release status | kg of conforming tested instrument |
| `packaging_factory_gate` | Packaging and factory-gate release | required | Always include | Foreground packaging, labelling, final weighing, and release of the reference product | 1 kg net released finished product |

### Process: In-house component and subassembly fabrication (`component_fabrication`)

#### Inputs

##### Product flows

###### Product-specific fabrication materials and components (`fabrication_materials`)

Record all materials, parts, and components issued to in-house fabrication using the product-specific bill of materials and production issue records.

- Selected flow: Declared fabrication materials, electronic parts, sensing or optical parts, and mechanical parts by material or component identity
- Flow property / unit: Mass / kg
- Amount rule: Measured or procurement-reconciled quantity consumed by the declared product population
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_materials`
- Sources: `eu-pef-2021-2279`; `iec-62474-2018`

###### Fabrication electricity and fuels (`fabrication_energy`)

Record metered electricity and fuels for machining, forming, printed-assembly production, soldering, coating, cleaning, curing, and controlled environments used by included fabrication operations.

- Selected flow: Electricity and declared fuels by supply identity
- Flow property / unit: Energy / kWh or MJ; fuel may retain its native invoiced unit with conversion documented
- Amount rule: Metered process energy or physically allocated shared energy for the declared product population
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_energy`
- Sources: `eu-pef-2021-2279`

###### Fabrication process aids and water (`fabrication_aids_water`)

Record solder and flux, machining fluids, plating or coating chemicals, cleaners, adhesives, process gases, and water when consumed by included fabrication operations.

- Selected flow: Declared process aid, chemical, gas, or water by supplier and grade
- Flow property / unit: Mass or volume / kg, m3, or documented native unit
- Amount rule: Quantity issued, metered, or determined from beginning inventory plus purchases minus ending inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_consumables`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming fabricated components and subassemblies (`fabricated_subassemblies`)

Report components and subassemblies that pass the applicable in-process acceptance criteria and transfer to final assembly.

- Selected flow: Conforming fabricated component or subassembly by declared identity
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass calculated from accepted quantity and product-specific mass records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of conforming component or subassembly output and reconciled to the reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabrication_output_waste`

##### Waste flows

###### Fabrication scrap and spent process materials (`fabrication_waste`)

Record metal, polymer, glass, ceramic, printed-board, cable, optical, chemical, wastewater, and other waste leaving fabrication, separated by treatment route.

- Selected flow: Declared waste by composition and treatment route
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: Measured waste shipment or container mass allocated to the declared product population
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fabrication_output_waste`

##### Elementary flows

###### Direct fabrication emissions (`fabrication_direct_emissions`)

Record measured or permit-calculated releases from included coating, plating, cleaning, soldering, combustion, or other fabrication operations; do not duplicate emissions already represented by purchased utility or treatment datasets.

- Selected flow: Declared elementary flow to air, water, or soil
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or calculation from collected activity data and a documented applicable factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fabrication_direct_emissions`
- Sources: `eu-pef-2021-2279`

### Process: Final assembly and integration (`final_assembly`)

#### Inputs

##### Product flows

###### Purchased and in-house components and subassemblies (`assembly_components`)

Record all mechanical, electronic, sensing, optical, acoustic, thermal, fluidic, cable, power-supply, display, enclosure, and software-bearing hardware included in the released configuration.

- Selected flow: Declared component or subassembly by part number, material class, supplier, and purchased or in-house origin
- Flow property / unit: Mass / kg
- Amount rule: Product-specific bill-of-material quantity multiplied by measured part mass and reconciled with production issue records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_bom`
- Sources: `eu-pef-2021-2279`; `iec-62474-2018`

###### Assembly energy (`assembly_energy`)

Record electricity and any other energy used for fastening, joining, soldering, adhesive curing, firmware loading, cleaning, handling, and controlled assembly environments.

- Selected flow: Electricity and declared energy carriers by supply identity
- Flow property / unit: Energy / kWh or MJ
- Amount rule: Metered process energy or physically allocated shared energy for the declared product population
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_energy`
- Sources: `eu-pef-2021-2279`

###### Assembly consumables (`assembly_consumables`)

Record solder, flux, fasteners, adhesives, cleaners, wipes, process gases, lubricants, and other consumables that become part of the product or are consumed in assembly.

- Selected flow: Declared assembly consumable by supplier and grade
- Flow property / unit: Mass or volume / kg, L, or documented native unit
- Amount rule: Quantity issued or inventory-reconciled for the declared product population
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_consumables_waste`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Assembled instrument awaiting release testing (`assembled_instrument`)

Report complete instruments transferred to calibration and release testing, including installed accessories that are part of the declared product configuration.

- Selected flow: Assembled analytical or measurement instrument by declared model
- Flow property / unit: Mass / kg
- Amount rule: Accepted assembled quantity multiplied by measured net mass before separately reported packaging
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of assembled instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_assembly_output`

##### Waste flows

###### Assembly scrap and discarded consumables (`assembly_waste`)

Record discarded components, solder residues, cable and enclosure offcuts, adhesive or cleaner residues, wipes, and other assembly waste by composition and treatment route.

- Selected flow: Declared assembly waste by composition and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Measured waste shipment or container mass allocated to the declared product population
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_consumables_waste`

##### Elementary flows

### Process: Calibration and release testing (`calibration_release_testing`)

#### Inputs

##### Product flows

###### Assembled instruments entering testing (`test_input_instruments`)

Record the assembled instruments entering the declared calibration, functional verification, burn-in, and release-test route.

- Selected flow: Assembled analytical or measurement instrument by declared model
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated mass of units entering testing, including repeat entries caused by rework
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_route_records`

###### Test energy and calibration media (`test_energy_media`)

Record electricity, reference materials, calibration gases or liquids, lamps or sources, acoustic references, thermal media, cooling water, filters, and other consumables used by the actual release route.

- Selected flow: Electricity and declared calibration or test medium by identity
- Flow property / unit: Energy, mass, or volume / kWh, kg, L, m3, or documented native unit
- Amount rule: Metered or issued quantity for initial tests, repeat tests, burn-in, and rework verification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_energy_media`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming release-tested instruments (`tested_instruments`)

Report instruments that meet the declared release criteria; retain the measured quantity, test status, rework history, and calibration or verification record.

- Selected flow: Conforming release-tested analytical or measurement instrument by declared model
- Flow property / unit: Mass / kg
- Amount rule: Released quantity multiplied by measured net product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg of conforming tested instrument output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_calibration_release_records`

###### Instruments sent to rework (`test_rework_loop`)

Keep nonconforming units that remain products as a visible internal rework loop rather than treating them as final waste; count all repeated test energy and consumables.

- Selected flow: Instrument or subassembly returned to the declared rework route
- Flow property / unit: Mass / kg
- Amount rule: Measured mass and number of units returned to rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_route_records`

##### Waste flows

###### Spent test media and rejected units (`test_waste`)

Record spent calibration media, test samples, filters, cooling liquids, damaged parts, and units finally discarded after failed release testing by composition and treatment route.

- Selected flow: Declared test waste by composition and treatment route
- Flow property / unit: Mass or volume / kg, L, or m3
- Amount rule: Measured waste quantity attributable to the declared product population
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_energy_media`

##### Elementary flows

###### Direct testing emissions (`test_direct_emissions`)

Record direct releases of calibration or test gases, vapours, liquids, or other substances when they cross the environmental boundary and are not captured in a waste-treatment exchange.

- Selected flow: Declared elementary flow to air, water, or soil
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or calculation from the consumed test medium and documented release or capture fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_direct_emissions`

### Process: Packaging and factory-gate release (`packaging_factory_gate`)

#### Inputs

##### Product flows

###### Conforming tested instrument (`packaging_instrument_input`)

Record the conforming tested instrument entering packaging, including all accessories declared as part of the reference product configuration.

- Selected flow: Conforming release-tested analytical or measurement instrument by declared model
- Flow property / unit: Mass / kg
- Amount rule: Measured net product mass entering packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass_release`

###### Distribution packaging materials (`distribution_packaging`)

Record primary, secondary, and tertiary packaging by material class, including cases, cartons, foams, films, pallets, documentation, and protective materials supplied with the product.

- Selected flow: Declared packaging material by material class and recycled-content claim when available
- Flow property / unit: Mass / kg
- Amount rule: Product-specific packaging bill-of-material quantity multiplied by measured material mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released finished product, with packaging mass excluded from the denominator
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`

###### Packaging and release electricity (`packaging_energy`)

Record electricity used for packaging equipment, labelling, final inspection, and other included release operations.

- Selected flow: Electricity by supply identity
- Flow property / unit: Energy / kWh
- Amount rule: Metered process energy or physically allocated shared energy for the declared product population
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_energy_waste`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released reference product at factory gate (`analytical_measurement_instrument_at_factory_gate`)

This is the canonical reference product output. Its net mass excludes separately reported distribution packaging and it must carry all required qualifiers.

- Selected flow: Instruments and apparatus for physical or chemical analysis, for measuring or checking viscosity, porosity, expansion, surface tension or the like, or for measuring or checking quantities of heat, sound or light `529b86b6-3103-4ca8-b9ae-0fbcadfb0a80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: 1 kg net released finished product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Packaging and release waste (`packaging_waste`)

Record packaging offcuts, damaged packaging, labels, films, and other waste generated before factory-gate release by composition and treatment route.

- Selected flow: Declared packaging waste by composition and treatment route
- Flow property / unit: Mass / kg
- Amount rule: Measured waste quantity attributable to the declared product population
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_energy_waste`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | Shared manufacturing processes and utilities | Avoid allocation by direct metering, segregated production records, subdivision, or justified system expansion before applying an allocation factor. | `eu-pef-2021-2279` |
| `allocation_physical_fallback` | Shared processes that cannot be subdivided | Allocate using a documented causal physical driver such as machine time, metered energy, processed mass, occupied controlled-environment time, or test duration that represents resource use; retain the driver values and calculation. | `eu-pef-2021-2279` |
| `allocation_other_relationship_last` | Shared burdens lacking a defensible physical driver | Use another relationship, including economic allocation, only after documenting why subdivision, system expansion, and physical allocation are not feasible; disclose the method and sensitivity. | `eu-pef-2021-2279` |
| `allocation_rework_and_scrap` | Rework loops, rejects, scrap, and waste | Attribute all repeated processing, test energy, consumables, and waste generated before product release to the released product population; keep saleable co-products separate and apply the hierarchy above. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_materials` | `component_fabrication` | Fabrication materials and components | Bill of materials, purchase and material-issue records | part number; description; supplier; material class; quantity issued; measured unit mass; returned quantity; product model; lot | Reconcile product-specific BoM with stores issues and returns | kg and item | Each production lot with period reconciliation | Declared representative production period | All included fabrication operations at the reporting site | Sum net issued mass by identity; allocate only shared issues using the declared physical driver; normalize to released net product mass | Approved BoM revision, weighing records, issue and return records, supplier declaration |
| `cp_fabrication_energy` | `component_fabrication` | Fabrication electricity and fuels | Submeter, equipment log, fuel invoice, operating record | energy carrier; meter readings; equipment; operating time; load; product lot; shared allocation driver | Prefer submetering; otherwise reconcile facility records and apply a causal physical driver | kWh, MJ, or native fuel unit | Per meter interval or production lot | Same representative period as product output | Included fabrication equipment and controlled areas | Sum direct readings plus allocated shared energy; convert with documented factors; normalize to released net product mass | Meter calibration or invoice, equipment log, allocation calculation |
| `cp_fabrication_consumables` | `component_fabrication` | Process aids, chemicals, gases, and water | Issue, purchase, batch, and meter records | substance or mixture; supplier; grade; quantity issued; beginning and ending inventory; returned quantity; water meter; lot | Measure or inventory-reconcile each consumed input | kg, L, m3, or native unit | Each issue or meter interval | Declared representative production period | Included fabrication operations | Net consumption equals beginning inventory plus receipts minus ending inventory and documented returns; normalize to released net product mass | Stock reconciliation, batch record, meter record, safety or supplier data sheet |
| `cp_fabrication_output_waste` | `component_fabrication` | Conforming subassemblies and fabrication waste | Transfer, inspection, and waste shipment records | output identity; accepted quantity; unit mass; reject quantity; waste composition; container tare and gross mass; treatment route | Weigh accepted outputs and waste or use verified item-to-mass conversion | kg or m3 | Each lot and waste shipment | Declared representative production period | Included fabrication operations | Sum accepted output and waste by identity; reconcile with material inputs and inventory changes | Transfer record, inspection status, calibrated scale record, waste manifest |
| `cp_fabrication_direct_emissions` | `component_fabrication` | Direct releases | Stack, wastewater, permit, and activity-factor records | substance; compartment; concentration; flow rate; duration; activity amount; factor; capture fraction | Direct measurement preferred; otherwise calculate from collected activity and documented applicable factor | kg or source measurement unit | Each monitoring interval or operating batch | Declared representative production period | Included direct emission points | Sum measured releases or activity multiplied by factor and uncaptured fraction; avoid double counting treatment datasets | Laboratory report, monitor calibration, permit report, factor reference and calculation |
| `cp_assembly_bom` | `final_assembly` | Purchased and fabricated assembly content | Product-specific BoM and assembly issue records | model; configuration; part number; supplier; purchased or fabricated origin; quantity; measured part mass; installed quantity; loss | Reconcile released configuration BoM with assembly issues and accepted output | kg and item | Each model revision and production lot | Declared representative production period | All included assembly lines | Sum installed mass by part identity and origin; normalize to released net product mass | Approved BoM and engineering change level, scale records, issue records |
| `cp_assembly_energy` | `final_assembly` | Assembly energy | Submeter and equipment operating records | meter readings; equipment; operating time; load; line; model; lot; shared driver | Prefer line or equipment submetering; otherwise allocate shared energy by causal physical driver | kWh or MJ | Per meter interval or production lot | Declared representative production period | Included assembly equipment and controlled areas | Sum direct and allocated shared energy; normalize to released net product mass | Meter record, equipment log, allocation calculation |
| `cp_assembly_consumables_waste` | `final_assembly` | Assembly consumables and waste | Issue and waste records | consumable identity; issued and returned quantity; waste identity; gross and tare mass; treatment route; lot | Inventory reconciliation and weighed waste records | kg, L, or native unit | Each lot and waste shipment | Declared representative production period | Included assembly lines | Calculate net consumable use and sum waste by route; normalize to released net product mass | Issue record, scale record, waste manifest |
| `cp_assembly_output` | `final_assembly` | Assembled instrument output | Production transfer and weighing records | model; configuration; accepted count; net unit mass; total mass; transfer time | Count accepted units and use measured model-specific mass | kg and item | Each production lot | Declared representative production period | Included assembly lines | Accepted count multiplied by verified unit mass; reconcile to testing input | Transfer record, calibrated scale record, configuration record |
| `cp_test_route_records` | `calibration_release_testing` | Test route, input, repeats, and rework | Manufacturing execution and test routing records | serial or lot; model; test steps; entry count; repeat count; rework route; final status; net mass | Extract actual route and status records, including repeated tests | item, cycle, h, and kg | Each unit or production lot | Declared representative production period | All included release-test stations and rework loops | Sum initial and repeat entries and convert items to mass using verified model mass | Traceable route history, test system record, rework disposition |
| `cp_test_energy_media` | `calibration_release_testing` | Test energy, calibration media, and spent media | Submeter, equipment, issue, and disposal records | test station; meter readings; runtime; load; medium identity; quantity issued; recovered quantity; waste quantity; test cycle | Meter energy and measure issued and recovered media for all initial and repeat tests | kWh, kg, L, m3, or native unit | Each test batch or meter interval | Declared representative production period | All included test and burn-in stations | Sum energy and net medium consumption, including repeats; normalize to released net product mass | Meter record, issue record, equipment log, waste record |
| `cp_calibration_release_records` | `calibration_release_testing` | Conforming tested output | Calibration, verification, and release records | model; serial or lot; measured quantity; range; resolution; accuracy or uncertainty; procedure revision; reference standard; result; release status; net mass | Retain the actual release evidence for the declared configuration | item and kg | Each unit or defined release lot | Declared representative production period | All included release-test stations | Sum released net mass only for conforming status; preserve failed and reworked populations separately | Signed or controlled electronic test record, reference-standard status, scale record |
| `cp_test_direct_emissions` | `calibration_release_testing` | Direct releases from test media | Medium use, recovery, discharge, and emission calculation records | substance; quantity charged; quantity recovered; waste quantity; release fraction; compartment; factor | Mass balance preferred; direct measurement when available | kg or source measurement unit | Each test batch or discharge interval | Declared representative production period | Included test emission points | Released amount equals charged amount minus recovered, retained, and waste-managed amount, or direct measured release | Batch record, recovery record, discharge report, factor and calculation |
| `cp_product_mass_release` | `packaging_factory_gate` | Net released product mass | Final weighing and release records | model; configuration; included accessories; serial or lot; gross packed mass; packaging mass; net product mass; released quantity | Weigh net product directly or subtract separately measured packaging from gross mass | kg and item | Each model and production lot | Declared representative production period | Final release operation | Sum released net product mass; use it as the normalization denominator | Calibrated scale record, release record, configuration list |
| `cp_packaging_materials` | `packaging_factory_gate` | Distribution packaging | Packaging BoM, purchase, and weighing records | material class; supplier; recycled-content claim; quantity per pack; measured unit mass; model; packing configuration | Reconcile packaging BoM with issued quantities and measured masses | kg and item | Each packaging configuration and lot | Declared representative production period | Included packaging operations | Sum packaging mass by material class; normalize to released net product mass without adding packaging to the denominator | Packaging specification, scale record, supplier declaration |
| `cp_packaging_energy_waste` | `packaging_factory_gate` | Packaging energy and waste | Meter, issue, and waste records | electricity; meter interval; equipment; operating time; waste material; gross and tare mass; treatment route | Meter or physically allocate electricity and weigh packaging waste | kWh and kg | Per meter interval and waste shipment | Declared representative production period | Included packaging and release operations | Sum energy and waste by route; normalize to released net product mass | Meter record, equipment log, scale record, waste manifest |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every foreground exchange | normalized amount = period exchange amount divided by period net mass of conforming released products | collected exchange amount; released net product mass from `cp_product_mass_release` | exchange amount per 1 kg net released finished product | `eu-pef-2021-2279` |
| `calc_item_to_mass` | Item-count records | mass = accepted or consumed item count multiplied by measured model-specific unit mass; a model-family mean must be production-mass-weighted and its population disclosed | item count; unit mass; model population | kg by product or component identity |  |
| `calc_shared_resource_allocation` | Shared utilities and operations | apply direct metering first; otherwise multiply shared total by the documented causal physical-driver share for the declared product | shared total; product driver value; total driver value | allocated product-specific resource or emission amount | `eu-pef-2021-2279` |
| `calc_material_reconciliation` | Each manufacturing process | inputs plus opening work-in-process shall reconcile with conforming output, transfers, closing work-in-process, rework, waste, and measured direct releases; investigate and disclose residuals | material inputs; opening and closing inventory; product transfers; rework; waste; direct releases | mass-balance residual and completeness check | `eu-pef-2021-2279` |
| `calc_test_medium_release` | Calibration or test media with direct release | direct release = charged or consumed amount minus recovered amount minus amount retained in product or equipment minus waste-managed amount, unless directly measured | charged amount; recovered amount; retained amount; waste amount; direct measurement | direct elementary flow amount |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and all product outputs | Preserve model, configuration, included accessories, measured quantity or analytical principle, range, resolution, accuracy or uncertainty statement, release basis, net mass, and packaging status. | Controlled product specification, BoM revision, release and weighing records |
| `dq_complete_inventory` | Each foreground process | Include all known inputs and outputs and complete material reconciliation; disclose each exclusion, proxy, unresolved residual, and missing upstream link. | Process inventory, reconciliation calculation, data-gap register; `eu-pef-2021-2279` |
| `dq_temporal_scope` | All foreground records | Use one declared representative production period covering the included route; identify shutdowns, start-up, abnormal lots, engineering trials, and production-mix weighting and justify inclusion or exclusion. | Meter periods, production ledger, lot list, exception log |
| `dq_measurement_traceability` | Mass, energy, water, emissions, and test records | Retain instrument identity, calibration or verification status, measurement unit, conversion factor, data owner, and extraction time for every material measurement chain. | Calibration certificates, meter and scale logs, controlled calculation |
| `dq_supplier_material_identity` | Purchased electrical, electronic, sensing, optical, and mechanical content | Retain supplier and part identity, material class and mass, and available material declarations; for electrotechnical content, preserve the declaration scope and revision rather than inferring unreported substances. | Supplier specification or IEC 62474-compatible declaration; `iec-62474-2018` |
| `dq_representativeness` | Foreground and linked upstream data | Assess and disclose technological, geographical, temporal, and precision representativeness; use product-specific BoM and company-specific manufacturing data. | Data-quality assessment and source metadata; `eu-pef-2021-2279` |
| `dq_release_traceability` | Calibration and release testing | Demonstrate that the released product population meets the declared release criteria and that repeat tests, rework, and final rejects remain in the inventory. | Test route history, calibration or verification record, nonconformance and rework records |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference product flow | Require the exact Tiangong product-flow UUID, Mass flow-property UUID, Units of mass UUID, and kg unit stated in Section 3; reject a substitute flow representing a component, consumable, service, or neighbouring instrument category. |  |
| `validate_scope_qualifiers` | Dataset identity | Require every Section 3 qualifier and verify that the principal product function is within CPC 48253; fail conformance when the measured quantity, model configuration, or packaging status is missing. | `un-cpc-3-0` |
| `validate_reference_mass` | Normalization | Verify that all foreground amounts use 1 kg of released net product mass and that separately reported packaging is excluded from the denominator. |  |
| `validate_process_coverage` | Process inventory | Require final assembly, calibration or release testing, and packaging and release; require component fabrication whenever performed in-house and disclose purchased-versus-in-house component coverage. | `eu-pef-2021-2279` |
| `validate_material_energy_waste_completeness` | Foreground inputs and outputs | Require product-specific BoM or component records, process energy, consumables, conforming output, rework, waste, and applicable direct emissions for every included process; unresolved residuals or omissions must be explicit findings. | `eu-pef-2021-2279` |
| `validate_allocation` | Shared resources and multifunctional operations | Require direct metering or subdivision where feasible; otherwise require the physical driver, factor calculation, justification, and sensitivity or limitation disclosure. | `eu-pef-2021-2279` |
| `validate_test_traceability` | Calibration and release testing | Require a controlled release procedure, reference-standard or test-system status where applicable, actual test result, final disposition, and inclusion of repeat-test and rework burdens. |  |
| `validate_supplier_declarations` | Purchased electrotechnical content | When material declarations are claimed or used, require supplier, part, declaration scope, list or standard revision, and declared material or substance information; do not treat missing entries as zero. | `iec-62474-2018` |
| `validate_data_quality` | Published foreground data package | Require declared site, geography, production period, model weighting, data sources, upstream dataset links, proxy and gap disclosures, and technological, geographical, temporal, completeness, and precision evidence. | `eu-pef-2021-2279`; `iec-63366-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific or explicitly production-weighted model-family foreground manufacturing dataset |
| downstream_use | `secondary_dataset`; `background_dataset` for downstream product systems requiring factory-gate analytical or measurement instruments by mass |
| allowed_use | Gate-to-gate manufacturing inventory and cradle-to-gate models that add representative upstream datasets; downstream life-cycle models that add explicit distribution, use, maintenance, and end-of-life scenarios |
| excluded_use | Direct comparison of instruments with different measurement functions or performance; per-item use without a verified item-to-mass conversion; claims about service life, use-stage energy, consumables, maintenance, calibration interval, or end-of-life that are not modelled separately |
| required_metadata | PCR id; product model or weighting rule; CPC scope; measured quantity or analytical principle; measurement range; resolution; accuracy or uncertainty statement; included accessories; power-supply type; release-test basis; net product mass; packaging status; site and geography; production period; in-house and purchased component split; process coverage; allocation methods; source and upstream dataset identities |
| required_quality_disclosure | BoM and material-declaration coverage; mass-balance residuals; metering and allocation coverage; calibration and release-record coverage; temporal, technological, geographical, completeness, and precision assessment; proxy datasets; cut-offs; unresolved data gaps; reason for every omitted flow or process |
| update_trigger | Product model or configuration change; BoM or supplier change; material declaration revision; manufacturing route or site change; energy supply change; calibration or release-test route change; packaging change; allocation-driver change; or evidence that materially changes the normalized inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, classification family and structure, https://unstats.un.org/unsd/classifications/Family/Detail/2100 (retrieved 2026-08-09) | Product-category scope and neighbouring-category exclusions |
| `eu-pef-2021-2279` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, CELEX:32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 (retrieved 2026-08-09) | Functional-unit framing, product-specific BoM, company-specific manufacturing data, complete foreground inputs and outputs, allocation hierarchy, data collection, normalization, and data quality |
| `iec-63366-2025` | standard | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691 (retrieved 2026-08-09) | Horizontal electrical and electronic product PCR basis, LCA reporting, default-scenario and product-specific-rule limitations |
| `iec-62474-2018` | standard | IEC 62474:2018, Material declaration for products of and for the electrotechnical industry, https://webstore.iec.ch/en/publication/29857 (retrieved 2026-08-09) | Supplier material and substance declaration records, material classes, declaration scope, and supply-chain traceability |
