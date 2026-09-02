---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.sound-video-network-and-similar-cards-for-automatic-data-processing-machines
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sound, video, network and similar cards for automatic data processing machines

## 1. Scope and Applicability

This PCR guides construction of cradle-to-factory-gate foreground data packages for finished, tested expansion cards used in automatic data processing machines. Covered card archetypes include network interface cards, sound or audio cards, graphics or video cards, and AI, data-centre, high-performance-computing, or other accelerator cards when supplied as cards. Every dataset shall identify one card archetype and shall separately describe the primary chip and package, printed circuit board, onboard memory, cooling assembly, external interface assembly, and remaining support components.

This leaf is technically heterogeneous. A single GPU card, network card, video card, sound card, chip, or generic electronic assembly is not a representative proxy for the whole category. A production-weighted mix is allowed only for a declared family whose members have the same primary function, host interface, production route, and acceptance basis; weights and configuration differences shall be disclosed.

The reference boundary starts with purchased materials, components, and services at the reporting manufacturing boundary and ends with a finished card accepted at the factory gate. Semiconductor or bare-PCB fabrication is included only when performed by, or under the operational control of, the reporting organization; otherwise those items enter as supplier-specific upstream product datasets. Use and end-of-life are outside this cradle-to-gate data package.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.sound-video-network-and-similar-cards-for-automatic-data-processing-machines` |
| classification_refs | CPC 3.0 `45281`, `Sound, video, network and similar cards for automatic data processing machines` |
| covered_products | Finished expansion cards for automatic data processing machines, including network, sound/audio, graphics/video, AI/data-centre/HPC accelerator, and functionally similar cards |
| excluded_products | Bare dies, integrated circuits or semiconductor packages; bare printed circuit boards; complete computers or servers; hubs, routers and gateways; standalone external peripherals; storage units; cables or power supplies sold separately; and software-only services |
| representative_product | One declared, finished and acceptance-tested card archetype and configuration; no subtype represents the whole CPC leaf |
| production_route | Purchased component receipt and kitting, optional controlled bare-PCB and semiconductor/package fabrication, printed-board assembly, thermal/mechanical/interface assembly, firmware loading, test, acceptance, and dispatch |
| market_state | Finished, tested card at the manufacturing factory gate; detachable packaging and separately supplied accessories are not part of net card mass |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of a finished, electrically functional and acceptance-tested expansion card of one declared card type and configuration for an automatic data processing machine |
| How much | `1 kg` net accepted card, excluding detachable packaging, separately supplied cables, spares, and accessories |
| How well | Meets the declared electrical, functional, thermal, host-interface, connector, firmware, and factory acceptance specification for the named card configuration |
| How long or cycle | One defined production lot or reporting year at the factory gate; no use-life claim is included in this cradle-to-gate reference flow |
| reference_flow_link | The quantitative reference is the exact Tiangong CPC 3.0 `45281` product flow stated below |

| Field | Value |
| --- | --- |
| Reference amount | `1 kg` |
| Reference product flow | `cc906112-5ebd-437c-b701-88faeeac2f81` — Sound, video, network and similar cards for automatic data processing machines |
| Reference flow property | `93a60a56-a3c8-11da-a746-0800200b9a66` — Mass |
| Reference unit group | `93a60a57-a4c8-11da-a746-0800200c9a66` — Units of mass |
| Reference unit | `kg` |
| Required qualifiers | `card_type`; `primary_function`; `host_interface_and_form_factor`; `performance_class`; `primary_chip_model_and_package_technology`; `die_or_package_count_and_mass_basis`; `pcb_area_layer_count_thickness_surface_finish_and_mass`; `onboard_memory_technology_capacity_device_count_and_mass`; `cooling_architecture_materials_and_mass`; `external_connector_and_port_type_count_and_included_modules`; `support_component_groups_and_mass`; `firmware_version_and_test_profile`; `net_card_mass`; `manufacturing_site_country_and_reporting_period`; `production_route`; `yield_and_allocation_basis`; `packaging_exclusion` |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Accepted reference product | Mass | `kg` | Weigh accepted cards without detachable packaging, separately supplied cables, spares, or accessories. Normalize the summed accepted net card mass to `1 kg`. |
| `component_layer_mass` | Primary chips/packages, PCB, onboard memory, cooling, interfaces, and support components | Mass | `kg` | Record the measured or supplier-declared dry mass for every required layer separately; do not bury a layer in a generic electronics total. |
| `count_area_to_mass` | Parts initially recorded by count or PCB area | Mass | `kg` | Convert count or area to mass using lot-specific weighing or configuration-specific supplier data and retain the conversion record, sample size, and uncertainty. |
| `process_energy_preservation` | Electricity, heat, fuel, and compressed-air use | Energy | `kWh` or `MJ` | Preserve the metered unit and energy carrier before conversion; record conversion factors and do not report power ratings as energy use. |
| `water_and_process_materials` | Water, solder, flux, cleaners, coatings, thermal-interface materials, and fabrication chemicals | Mass or volume | `kg`, `m3`, or recorded compatible unit | Use purchase, issue, return, recovery, and stock-change records reconciled to the process and reporting period. |
| `waste_and_release_mass` | Scrap, rejected units, spent materials, wastewater constituents, and direct releases | Mass | `kg` | Measure or calculate each distinct waste or release stream before treatment and preserve destination or receiving compartment. |
| `performance_qualifiers` | Card function and acceptance | Declared technical performance | Declared SI or interface unit | Record metrics appropriate to card type, such as link rate and port count, audio channel/sample specification, graphics/compute throughput class, memory capacity, thermal design basis, and test profile; never compare different archetypes on mass alone. |
| `production_mix_control` | Product-family or configuration mix | Mass share | `kg/kg` | A mix shall use accepted net mass weights from the same route and period. Disclose every included configuration and prohibit averaging across different primary functions or host interfaces. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased raw materials, components, subassemblies, utilities, fuels, water, and transport services received at the reporting manufacturing boundary |
| starting_condition_role | Supplier-specific upstream datasets are linked at receipt; controlled in-house fabrication is modelled as foreground processes |
| product_classification_scope | Finished CPC 3.0 `45281` expansion cards only, with a declared card type and configuration |
| recursive_input_rule | Purchased chip packages, PCB, memory, cooling, interface and support components require upstream datasets but are not recursively reclassified as the finished card |
| upstream_dataset_requirement | Prefer supplier- and technology-specific datasets for semiconductor packages, PCB, memory, thermal assemblies and connectors; disclose any fallback separately by layer |
| disclosure | Declare organizational control, cut-offs, geography, technology, reporting period, yields, allocation, excluded packaging and unresolved flow identities |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | All datasets | Include receipt, kitting, assembly, thermal/mechanical/interface integration, firmware loading, test, rework, acceptance, internal handling, and dispatch activities required to produce the accepted card at the factory gate. | `itu-t-l1410-2024`; `eu-pef-2021-2279` |
| `boundary_component_hierarchy` | Bill of materials and upstream links | Keep primary chip/package, PCB, onboard memory, cooling, interface and support-component layers distinct. Report layer mass and data source; no generic electronic-part total may replace them. | `itu-t-l1410-2024`; `ipc-1752a-2018`; `iec-62474-2018` |
| `boundary_controlled_fabrication` | Bare-PCB and semiconductor/package fabrication | Include these as foreground only where the reporting organization has operational control and site records. Otherwise use supplier-specific upstream product datasets and do not invent wafer-fab or PCB-fab inventories. | `itu-t-l1410-2024`; `eu-pef-2021-2279` |
| `boundary_transport_packaging` | Inbound transport and dispatch packaging | Include inbound transport and packaging production or use as separate flows. Exclude detachable packaging from the `1 kg` reference product mass while retaining its inventory burden. | `eu-pef-2021-2279` |
| `boundary_use_eol` | Use, maintenance, reuse, recycling and disposal | Exclude from this cradle-to-gate package. A downstream lifecycle model may add them only with card-type-specific power, workload, lifetime, replacement and end-of-life scenarios. | `itu-t-l1410-2024` |
| `boundary_no_proxy` | Classification and representative product | Do not substitute a bare IC, bare PCB, complete computer/server, hub/router/gateway, external peripheral, or a single GPU/network/video/sound card for this category. | `un-cpc-3-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_receipt_and_kitting` | Component receipt, verification and kitting | required | Always | Preserve the product-specific bill of materials and supplier links by required layer | Mass of issued layer components per accepted card mass |
| `bare_pcb_fabrication` | Bare printed circuit board fabrication | conditional | Include only when performed by or under operational control of the reporting organization | Model controlled laminate, imaging, etching, plating, finishing and inspection activities | Mass of accepted bare PCB issued to assembly |
| `semiconductor_package_fabrication` | Semiconductor die and package fabrication | conditional | Include only when performed by or under operational control of the reporting organization | Model controlled wafer/die, substrate, packaging, test and yield activities | Mass or count of accepted packages issued to assembly, reconciled to mass |
| `printed_board_assembly` | Printed board assembly | required | Always | Mount, solder, clean, coat and inspect PCB assemblies | Mass of accepted assembled PCBA |
| `thermal_mechanical_interface_assembly` | Thermal, mechanical and interface assembly | required | Always | Add cooling, brackets, housings, external connectors and included modules | Mass of mechanically complete cards |
| `firmware_test_and_acceptance` | Firmware loading, functional test and acceptance | required | Always | Establish finished-card function, performance class and accepted yield | Mass of accepted finished cards |
| `packaging_and_dispatch` | Packaging and factory-gate dispatch | required | Always | Record protective packaging and release the reference product without adding packaging to its net mass | `1 kg` net accepted card at factory gate |

### Process: Component receipt, verification and kitting (`component_receipt_and_kitting`)

#### Inputs

##### Product flows

###### Primary chips and packages (`primary_chip_package_input`)

Record each primary processor, controller, accelerator, codec or comparable functional chip by model, package technology, count and dry mass. This layer may not be replaced by an average IC proxy.

- Selected flow: Supplier-specific primary chip or semiconductor-package product flow selected during dataset construction
- Flow property / unit: Mass / `kg`; retain piece count as a qualifier
- Amount rule: Foreground received-and-issued mass reconciled to the declared configuration and accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Accepted net card mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_specific_bom`
- Sources: `itu-t-l1410-2024`; `eu-pef-2021-2279`; `ipc-1752a-2018`

###### Bare printed circuit board (`bare_pcb_input`)

Record board area, layer count, thickness, surface finish, panel yield and accepted dry mass for the exact card design.

- Selected flow: Supplier- and technology-specific bare PCB product flow selected during dataset construction
- Flow property / unit: Mass / `kg`; retain area in `m2`
- Amount rule: Foreground issued mass plus attributable incoming rejects, normalized to accepted production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Accepted net card mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_specific_bom`
- Sources: `itu-t-l1410-2024`; `ipc-1752a-2018`

###### Onboard memory (`onboard_memory_input`)

Record memory technology, capacity, device count, package style and mass separately from the primary chip layer.

- Selected flow: Supplier-specific onboard-memory product flow selected during dataset construction
- Flow property / unit: Mass / `kg`; retain capacity and count qualifiers
- Amount rule: Foreground issued mass for the declared configuration, including attributable incoming rejects
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Accepted net card mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_specific_bom`
- Sources: `itu-t-l1410-2024`; `ipc-1752a-2018`

###### Cooling assembly (`cooling_assembly_input`)

Record heat sink, heat pipe or vapour chamber, fan, shroud, cold plate, liquid-cooling fitting and thermal-interface material by included configuration and mass.

- Selected flow: Supplier-specific cooling-component product flows selected by material and assembly type
- Flow property / unit: Mass / `kg`
- Amount rule: Foreground issued dry mass for the declared cooling architecture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Accepted net card mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_specific_bom`
- Sources: `itu-t-l1410-2024`; `ipc-1752a-2018`

###### External interfaces and included modules (`interface_component_input`)

Record host edge connector, network/audio/video ports, transceiver cages or included modules, brackets and interface-specific components by type, count and mass.

- Selected flow: Supplier-specific connector, port, bracket and included-module product flows
- Flow property / unit: Mass / `kg`; retain count and interface qualifiers
- Amount rule: Foreground issued mass for the declared configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Accepted net card mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_specific_bom`
- Sources: `ipc-1752a-2018`; `iec-62474-2018`

###### Support electronic and mechanical components (`support_component_input`)

Record passive components, power-delivery parts, oscillators, auxiliary controllers, shielding, fasteners and other residual components in disclosed groups; this residual must not absorb any required layer.

- Selected flow: Supplier-specific support-component product flows grouped by technology and material where individual modelling is impracticable
- Flow property / unit: Mass / `kg`
- Amount rule: Difference between measured complete-card mass and all separately measured required layers, checked against procurement and placement records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Accepted net card mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_specific_bom`
- Sources: `itu-t-l1410-2024`; `ipc-1752a-2018`

##### Waste flows

###### Incoming packaging and rejected components (`incoming_rejects_and_packaging`)

Record receiving packaging and components rejected before assembly by material or component family and treatment destination.

- Selected flow: Site-specific waste flows selected by material and destination
- Flow property / unit: Mass / `kg`
- Amount rule: Weighed or documented rejected mass and packaging mass for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Accepted net card mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste_rework`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

#### Outputs

##### Product flows

###### Kitted component set (`kitted_component_set`)

Transfer the verified component layers to printed-board and final assembly without treating the kit as an external co-product.

- Selected flow: Internal intermediate kitted component set
- Flow property / unit: Mass / `kg`
- Amount rule: Sum of issued component-layer masses after receiving rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Accepted net card mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_specific_bom`
- Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

### Process: Bare printed circuit board fabrication (`bare_pcb_fabrication`)

#### Inputs

##### Product flows

###### PCB fabrication materials and utilities (`pcb_fabrication_inputs`)

When this conditional foreground process applies, record laminates, copper, films, masks, finishes, plating and etching chemicals, cleaning agents, water and each energy carrier separately for the controlled line.

- Selected flow: Site- and technology-specific material, chemical, water and utility flows selected during dataset construction
- Flow property / unit: Mass, volume, or energy / `kg`, `m3`, `kWh`, or `MJ`
- Amount rule: Metered, purchased-and-issued, or stock-balanced amounts allocated to the declared board family
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Accepted bare PCB mass issued to card assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_materials_water`
- Sources: `eu-pef-2021-2279`; `iec-62474-2018`

##### Waste flows

###### PCB scrap, spent baths and wastewater (`pcb_fabrication_waste`)

Keep solid board scrap, spent process materials, treatment residues and wastewater distinct by treatment route.

- Selected flow: Site-specific waste and wastewater flows selected by composition and destination
- Flow property / unit: Mass or volume / `kg` or `m3`
- Amount rule: Weighed, metered, or treatment-record amount reconciled to the controlled fabrication line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Accepted bare PCB mass issued to card assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste_rework`
- Sources: `mass-balance-identity`

##### Elementary flows

###### Direct PCB-fabrication releases (`pcb_fabrication_direct_releases`)

Record measured direct releases to air and water after site treatment by named substance and receiving compartment; never infer them from purchased chemical mass alone.

- Selected flow: Substance- and compartment-specific elementary flows selected during dataset construction
- Flow property / unit: Mass / `kg`
- Amount rule: Site monitoring or compliant engineering calculation for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Accepted bare PCB mass issued to card assembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_emissions`
- Sources: `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### Accepted bare PCB (`accepted_bare_pcb`)

Transfer only inspected bare boards meeting the declared design and finish specification to assembly.

- Selected flow: Internal accepted bare PCB for the declared card configuration
- Flow property / unit: Mass / `kg`
- Amount rule: Measured accepted dry mass after fabrication yield losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste_rework`
- Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

### Process: Semiconductor die and package fabrication (`semiconductor_package_fabrication`)

#### Inputs

##### Product flows

###### Semiconductor fabrication materials and utilities (`semiconductor_fabrication_inputs`)

When this conditional foreground process applies, record wafers or dies, substrates, leadframes, encapsulants, bonding materials, process gases and chemicals, ultrapure water, and each utility separately for the controlled technology route.

- Selected flow: Site- and technology-specific semiconductor material, chemical, water and utility flows selected during dataset construction
- Flow property / unit: Mass, volume, or energy / compatible recorded unit
- Amount rule: Metered or production-accounted amounts allocated to the declared die/package family using documented tool and yield records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Accepted package mass or count issued to card assembly, reconciled to mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_materials_water`
- Sources: `itu-t-l1410-2024`; `eu-pef-2021-2279`

##### Waste flows

###### Semiconductor scrap and spent materials (`semiconductor_fabrication_waste`)

Record rejected wafers, dies and packages, spent chemicals, abatement residues and wastewater separately by treatment route.

- Selected flow: Site-specific waste flows selected by composition and destination
- Flow property / unit: Mass or volume / compatible recorded unit
- Amount rule: Production and treatment records reconciled to controlled fabrication yields
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Accepted package mass or count issued to card assembly, reconciled to mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste_rework`
- Sources: `mass-balance-identity`

##### Elementary flows

###### Direct semiconductor-fabrication releases (`semiconductor_direct_releases`)

Record measured releases after abatement by substance and compartment, including any process-gas destruction basis; do not derive releases solely from purchases.

- Selected flow: Substance- and compartment-specific elementary flows selected during dataset construction
- Flow property / unit: Mass / `kg`
- Amount rule: Site monitoring or documented engineering calculation for the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Accepted package mass or count issued to card assembly, reconciled to mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_emissions`
- Sources: `eu-pef-2021-2279`

#### Outputs

##### Product flows

###### Accepted semiconductor packages (`accepted_semiconductor_packages`)

Transfer tested packages by model and package technology to card assembly.

- Selected flow: Internal accepted semiconductor packages for the declared card configuration
- Flow property / unit: Mass / `kg`; retain count
- Amount rule: Accepted package mass after fabrication and test yield losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste_rework`
- Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

### Process: Printed board assembly (`printed_board_assembly`)

#### Inputs

##### Product flows

###### Electronic components and PCB (`pcba_component_inputs`)

Issue the separately recorded primary chip/package, PCB, memory and support-component layers to the exact board configuration.

- Selected flow: Kitted component layers or controlled-fabrication intermediate outputs
- Flow property / unit: Mass / `kg`
- Amount rule: Lot-specific issued mass including attributable placement and assembly losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Accepted assembled PCBA mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_specific_bom`
- Sources: `itu-t-l1410-2024`; `eu-pef-2021-2279`

###### Assembly materials and energy (`pcba_assembly_materials_energy`)

Record solder alloy or paste, flux, adhesives, cleaners, conformal coating and electricity separately for printing, placement, reflow, selective or wave soldering, cleaning, coating and inspection.

- Selected flow: Site-specific assembly material and utility flows selected during dataset construction
- Flow property / unit: Mass or energy / `kg`, `kWh`, or `MJ`
- Amount rule: Issued material and metered energy allocated to the declared assembly route and accepted output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Accepted assembled PCBA mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_materials_water`
- Sources: `ipc-jstd001j-a610j-2024`; `eu-pef-2021-2279`

##### Waste flows

###### Assembly scrap and spent materials (`pcba_assembly_waste`)

Record rejected boards and components, solder dross, spent wipes, masks, cleaners and coating wastes separately from rework that remains inside the system.

- Selected flow: Site-specific assembly waste flows selected by material and destination
- Flow property / unit: Mass / `kg`
- Amount rule: Weighed or documented waste generated for the reporting period after accounting for successful internal rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Accepted assembled PCBA mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste_rework`
- Sources: `ipc-jstd001j-a610j-2024`; `mass-balance-identity`

##### Elementary flows

###### Direct assembly releases (`pcba_direct_releases`)

Record measured or permitted releases from soldering, cleaning and coating by substance and compartment where they occur.

- Selected flow: Substance- and compartment-specific elementary flows selected during dataset construction
- Flow property / unit: Mass / `kg`
- Amount rule: Site monitoring or documented engineering calculation, net of captured waste sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Accepted assembled PCBA mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_emissions`
- Sources: `ipc-jstd001j-a610j-2024`

#### Outputs

##### Product flows

###### Accepted assembled PCBA (`accepted_assembled_pcba`)

Transfer inspected PCB assemblies to final mechanical integration.

- Selected flow: Internal accepted assembled PCBA
- Flow property / unit: Mass / `kg`
- Amount rule: Measured accepted mass after assembly rejects and unrecoverable losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste_rework`
- Sources: `ipc-jstd001j-a610j-2024`

##### Waste flows

##### Elementary flows

### Process: Thermal, mechanical and interface assembly (`thermal_mechanical_interface_assembly`)

#### Inputs

##### Product flows

###### PCBA and final assembly layers (`final_assembly_inputs`)

Combine the accepted PCBA with separately measured cooling, thermal-interface, bracket, housing, external-interface and included-module layers.

- Selected flow: Internal accepted PCBA and supplier-specific final assembly components
- Flow property / unit: Mass / `kg`; retain component count
- Amount rule: Lot-specific issued mass for the declared final configuration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Mechanically complete card mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_specific_bom`
- Sources: `itu-t-l1410-2024`; `ipc-1752a-2018`

###### Final assembly energy and consumables (`final_assembly_energy_consumables`)

Record electricity, fasteners, adhesives, thermal-interface material and other consumables not already included in purchased subassemblies.

- Selected flow: Site-specific utility and consumable flows selected during dataset construction
- Flow property / unit: Mass or energy / `kg`, `kWh`, or `MJ`
- Amount rule: Metered or issued amount allocated to accepted mechanically complete cards
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Mechanically complete card mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_materials_water`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Mechanical assembly waste (`final_assembly_waste`)

Record rejected cooling parts, brackets, connectors, modules, fasteners, liners and other assembly residues by destination.

- Selected flow: Site-specific waste flows selected by material and destination
- Flow property / unit: Mass / `kg`
- Amount rule: Weighed or documented waste after recoverable parts and rework are accounted for
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Mechanically complete card mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste_rework`
- Sources: `mass-balance-identity`

##### Elementary flows

#### Outputs

##### Product flows

###### Mechanically complete card (`mechanically_complete_card`)

Transfer the assembled configuration to firmware loading and acceptance testing.

- Selected flow: Internal mechanically complete card
- Flow property / unit: Mass / `kg`
- Amount rule: Measured mass of completed configurations issued to test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_specific_bom`
- Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

### Process: Firmware loading, functional test and acceptance (`firmware_test_and_acceptance`)

#### Inputs

##### Product flows

###### Complete cards and test energy (`test_inputs`)

Record cards entering test, firmware or configuration image, electricity for test equipment and any consumed test media. Test time alone is not energy.

- Selected flow: Internal mechanically complete cards and site-specific electricity flow
- Flow property / unit: Mass and energy / `kg` and `kWh`
- Amount rule: Tested card mass and metered test energy allocated by measured test duration and equipment load where direct metering is unavailable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Accepted finished card mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_test_acceptance`
- Sources: `ipc-jstd001j-a610j-2024`; `eu-pef-2021-2279`

##### Waste flows

###### Unrecoverable test rejects (`test_reject_waste`)

Record only units and components that leave internal rework as waste; reworked cards remain internal and their extra energy and materials stay in the process inventory.

- Selected flow: Site-specific rejected-card or component waste flow selected by material and destination
- Flow property / unit: Mass / `kg`
- Amount rule: Weighed unrecoverable rejects after rework disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Accepted finished card mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yield_waste_rework`
- Sources: `ipc-jstd001j-a610j-2024`

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished cards (`accepted_finished_cards`)

Release only cards that meet the declared electrical, functional, thermal, host-interface, connector, firmware and acceptance specification.

- Selected flow: Exact finished-card configuration prior to detachable packaging
- Flow property / unit: Mass / `kg`
- Amount rule: Measured accepted net mass after test and final disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_identity_mass`
- Sources: `ipc-jstd001j-a610j-2024`

##### Waste flows

##### Elementary flows

### Process: Packaging and factory-gate dispatch (`packaging_and_dispatch`)

#### Inputs

##### Product flows

###### Accepted cards and protective packaging (`dispatch_inputs`)

Record accepted card mass and every detachable antistatic bag, tray, cushion, carton, label and pallet material separately; packaging burden stays in the system even though packaging mass is excluded from the reference product.

- Selected flow: Internal accepted cards and material-specific packaging product flows
- Flow property / unit: Mass / `kg`
- Amount rule: Accepted card mass plus purchased-and-used packaging mass for the same dispatch population
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Net accepted card mass at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Packaging trim and damaged packaging (`packaging_waste`)

Record packaging waste by material and destination.

- Selected flow: Site-specific packaging waste flows selected by material and destination
- Flow property / unit: Mass / `kg`
- Amount rule: Weighed or stock-balanced packaging loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Net accepted card mass at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `mass-balance-identity`

##### Elementary flows

#### Outputs

##### Product flows

###### Reference card output (`reference_card_output`)

The output is the exact CPC 3.0 `45281` Tiangong product flow and carries all required card-specific qualifiers.

- Selected flow: `cc906112-5ebd-437c-b701-88faeeac2f81` — Sound, video, network and similar cards for automatic data processing machines
- Flow property / unit: `93a60a56-a3c8-11da-a746-0800200b9a66` Mass / `kg`; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Fixed normalization output of `1 kg` net accepted card; detachable packaging and separately supplied accessories are excluded from output mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_reference_identity_mass`
- Sources: `un-cpc-3-2025`; `tiangong-flow-verification-2026`

- Range: Reference amount
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: `kg`
  - Basis: Net accepted card at factory gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Source rule (`source_rule`)
  - Sources: `tiangong-flow-verification-2026`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | All foreground processes | First subdivide lines, tools, meters, batches and records to avoid allocation between card configurations and unrelated products. | `eu-pef-2021-2279` |
| `allocation_physical_driver` | Shared assembly, test and facility activity | When subdivision is not practicable, use a measured causal driver such as machine time multiplied by measured load, placement count, oven occupancy, test duration and load, treated volume, or floor-area-time for residual facility services. | `eu-pef-2021-2279` |
| `allocation_yield_and_rework` | Rejects, yield loss and rework | Attribute material, energy and treatment associated with normal rejects and rework to accepted output of the same configuration and period. Do not credit internal rework as a co-product. | `mass-balance-identity` |
| `allocation_recovered_material` | Sold scrap or recovered materials | Keep collection and treatment burdens in the generating process. Apply any substitution or recycling credit only in a downstream method that explicitly requires it, and disclose the method separately. | `eu-pef-2021-2279` |
| `allocation_no_category_average` | Product families | Do not allocate or average across different primary functions, host interfaces, semiconductor technologies, cooling architectures, or acceptance profiles merely because they share CPC `45281`. | `un-cpc-3-2025`; `itu-t-l1410-2024` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reference_identity_mass` | `firmware_test_and_acceptance`; `packaging_and_dispatch` | Accepted reference product | Scale and acceptance records | configuration_id, serial_or_lot, gross_card_mass, detachable_items_mass, net_card_mass, acceptance_status | Calibrated weighing linked to final acceptance | `kg` | Each lot or statistically justified sample | Same reporting period | Each manufacturing site | Sum accepted net mass only; report sampling expansion | Calibration record, sample plan, acceptance log |
| `cp_product_specific_bom` | `component_receipt_and_kitting`; all assembly processes | Required component layers | Engineering BOM and mass roll-up | part_number, revision, layer, quantity, measured_or_declared_mass, unit, source, effective_date | Freeze the exact BOM revision and reconcile to measured card mass | `kg` plus count | Each configuration or engineering change | Effective production period | Each product and site | Aggregate only within the six required layers plus disclosed support groups | Approved BOM, change record, mass reconciliation |
| `cp_supplier_layer_data` | `component_receipt_and_kitting` | Purchased components | Supplier declaration and upstream dataset | supplier, site, part_number, technology, composition, mass, declaration_standard, dataset_id, validity | Collect part-specific supplier declarations and datasets; document fallback by layer | Native and `kg` | Supplier or design change | Valid for reporting period | Named supplier/site where available | No cross-layer or cross-technology substitution | Supplier declaration, IEC/IPC data, dataset review |
| `cp_process_energy` | Controlled fabrication, assembly, test and dispatch | Utilities | Meter, tool log, and calculation | meter_id, carrier, start, end, consumption, tool_state, load, operating_time, allocation_driver | Prefer submetering; otherwise calculate from measured load and operating time and reconcile to site meter | `kWh`, `MJ` | Continuous, batch, or shift | Representative reporting period | Each controlled site/process | Sum by carrier; allocate with declared causal driver | Meter calibration, invoices, tool logs, reconciliation |
| `cp_process_materials_water` | Controlled fabrication and assembly | Consumables and water | Purchase, issue, return, recovery and stock records | material_id, composition, opening_stock, purchases, issues, returns, recovery, closing_stock, process | Stock-balance each named material and assign to process | `kg`, `m3`, or native unit | Batch or monthly | Full reporting period | Each controlled site/process | Opening plus purchases minus closing, returns and transfers | Inventory ledger, issue tickets, composition record |
| `cp_water_emissions` | Controlled fabrication and assembly | Water and direct releases | Metering, monitoring and permit records | source_or_substance, quantity, unit, compartment, treatment, sampling_method, detection_limit, period | Measure intake/discharge and direct releases; use documented compliant calculation where monitoring is unavailable | `m3`, `kg` | Permit or operational frequency | Full reporting period | Each emission point | Sum by substance, compartment and treatment; handle non-detects explicitly | Laboratory report, permit return, calculation sheet |
| `cp_yield_waste_rework` | All manufacturing processes | Yield, rejects, rework and waste | Manufacturing execution and waste records | input_count_mass, accepted_count_mass, reject_reason, rework_route, waste_mass, destination, recovery | Reconcile input, accepted output, internal rework and exiting waste | Count and `kg` | Each lot, monthly reconciliation | Full reporting period | Each process/site | Do not double count rework; sum exiting waste by type and destination | Yield report, weigh ticket, waste manifest, reconciliation |
| `cp_test_acceptance` | `firmware_test_and_acceptance` | Function and quality | Test system and disposition records | firmware_version, test_profile, interface, performance_metric, threshold, result, duration, power_or_energy, disposition | Link automated or controlled manual tests to configuration and accepted mass | Declared technical unit, seconds, `kWh` | Each unit or justified sampling plan | Same production period | Each test route | Report pass, rework and scrap populations separately | Test procedure, calibration, test log, disposition |
| `cp_packaging` | Receipt and dispatch | Packaging | Packaging specification and stock balance | material, item_mass, item_count, recycled_content, reusable_cycles, issued, wasted, destination | Weigh representative items and reconcile purchased/issued quantities | `kg` | Packaging change or monthly | Full reporting period | Each dispatch site | Sum by material and reusable-use basis; never add to net card mass | Packaging specification, scale record, stock ledger |
| `cp_allocation_drivers` | Shared operations | Allocation | Meter, MES and accounting records | shared_resource, total_quantity, product_quantity, driver, driver_total, rationale | Select and document a physical causal driver before allocation | Native driver unit | Each reporting period | Same as shared activity | Each shared process/site | Allocated amount equals shared total multiplied by product driver share | Driver study, meter/tool logs, allocation calculation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | `normalized_amount = reporting_period_amount / accepted_net_card_mass_kg` | Reporting-period amount; accepted net card mass | Amount per `1 kg` reference flow | `tiangong-flow-verification-2026` |
| `calc_layer_mass_reconciliation` | Product-specific BOM | `residual_support_mass = measured_net_card_mass - sum(primary_chip_package, pcb, memory, cooling, interface)`; investigate a negative or unexplained residual before use | Measured card mass; separately measured required layers | Disclosed support-component mass and reconciliation difference | `mass-balance-identity` |
| `calc_count_to_mass` | Count-based parts | `part_mass = accepted_part_count * configuration_specific_unit_mass`; use sampled weighing only with documented sample size and variability | Count; unit mass | Part mass in `kg` | `mass-balance-identity` |
| `calc_area_to_pcb_mass` | PCB recorded by area | `pcb_mass = accepted_board_area * measured_areal_mass`; retain layer count, thickness and finish | Accepted area; design-specific areal mass | PCB mass in `kg` | `mass-balance-identity` |
| `calc_energy_from_load_time` | Unmetered tool energy | `energy = measured_average_load * operating_time`; reconcile tool totals to the parent meter and allocate standby explicitly | Load, time, parent meter | Energy by carrier | `eu-pef-2021-2279` |
| `calc_stock_balance` | Process materials and packaging | `consumed = opening_stock + purchases + inbound_transfers - closing_stock - returns - outbound_transfers - recovered_for_reuse` | Stock and transaction records | Process consumption | `mass-balance-identity` |
| `calc_yield` | Each process | `mass_yield = accepted_output_mass / total_input_mass_of_corresponding_product_material`; report count yield separately where relevant | Input, accepted output, rejects | Mass yield and count yield | `mass-balance-identity` |
| `calc_shared_allocation` | Shared activity | `allocated_amount = shared_amount * product_driver / sum(all_product_drivers)` | Shared amount; causal driver values | Allocated foreground amount | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration_specificity` | Reference product and BOM | Identify card type, configuration, chip/package, PCB, memory, cooling and interfaces at the granularity used for inventory; generic leaf averages are unacceptable. | BOM revision, product specification, configuration list |
| `dq_technological_representativeness` | Upstream component datasets | Match semiconductor technology/package, PCB construction, memory technology, cooling design and connector/module type; disclose every proxy by layer. | Supplier declaration, dataset metadata, proxy justification |
| `dq_geographical_representativeness` | Manufacturing and upstream electricity | Use the actual site and electricity-supply geography where known; disclose supplier-location uncertainty. | Site records, supplier/site metadata, electricity contract |
| `dq_temporal_representativeness` | Foreground records | Use one coherent recent production period and align BOM, energy, yield, waste and test populations. | Reporting-period ledger and reconciliation |
| `dq_completeness` | All required processes and layers | Account for every required component layer, required process, conditional controlled process, energy carrier, material waste, wastewater and direct release; document justified zeroes and exclusions. | Completeness matrix and signed review |
| `dq_mass_balance` | Product layers and each process | Reconcile input, output, waste, rework and inventory change. Investigate unexplained differences rather than assigning them silently to support components. | Mass-balance worksheet and variance disposition |
| `dq_measurement_quality` | Mass, energy, water and emissions | Record instrument, calibration, sampling, detection limit, conversion and uncertainty appropriate to each record. | Calibration and sampling records |
| `dq_supplier_evidence` | Purchased components | Prefer part-specific material declarations and upstream datasets. A declaration supplies composition evidence but does not replace manufacturing energy, yield, waste or emission data. | Supplier declaration and separate upstream dataset review |
| `dq_no_unreviewed_defaults` | Missing quantitative data | Do not use a category-wide default or reasoned estimate in a reviewed dataset unless separately approved, labelled replaceable, and supported for the declared card archetype. | Gap register, approval and replacement plan |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | Dataset identity | Confirm CPC 3.0 `45281`, exact reference product UUID, Mass property UUID, Units of mass UUID and `kg`; reject narrow or broader proxy products. | `un-cpc-3-2025`; `tiangong-flow-verification-2026` |
| `validation_qualifiers` | Reference flow | Fail completeness when any required qualifier is absent or when card type, primary function, host interface, configuration, site or reporting period is ambiguous. | `itu-t-l1410-2024` |
| `validation_layer_separation` | Bill of materials | Confirm separate chip/package, PCB, memory, cooling, interface and support-component records and a reconciliation to measured net card mass. | `itu-t-l1410-2024`; `ipc-1752a-2018`; `mass-balance-identity` |
| `validation_no_leaf_extrapolation` | Representativeness | Reject a claim that one GPU, network, video, sound or accelerator card represents all CPC `45281`; validate any family mix against the homogeneity and weighting rules. | `un-cpc-3-2025`; `itu-t-l1410-2024` |
| `validation_boundary_control` | Conditional fabrication | Verify operational control evidence for foreground bare-PCB or semiconductor/package fabrication; otherwise require supplier upstream links and exclude invented foreground inventories. | `eu-pef-2021-2279` |
| `validation_process_completeness` | Process map | Confirm all required processes and every applicable conditional process are present, with explicit zero or exclusion evidence for non-applicable rows. | `eu-pef-2021-2279`; `ipc-jstd001j-a610j-2024` |
| `validation_yield_rework_waste` | Manufacturing inventory | Reconcile accepted output, rejects, internal rework and exiting waste; prevent double counting of reworked cards and recovered components. | `mass-balance-identity` |
| `validation_energy_material_emissions` | Site inventory | Confirm energy is not inferred from power alone, materials are stock-balanced, and direct releases are compartment-specific and not inferred solely from purchases. | `eu-pef-2021-2279` |
| `validation_allocation` | Shared activity | Confirm subdivision was attempted, the chosen driver is physically causal, totals reconcile, and no averaging crosses different primary functions or host interfaces. | `eu-pef-2021-2279` |
| `validation_packaging_reference_mass` | Dispatch output | Confirm detachable packaging burdens are included as inventory while packaging, separate cables, spares and accessories are excluded from the `1 kg` reference product mass. | `eu-pef-2021-2279`; `mass-balance-identity` |
| `validation_source_and_uuid_status` | Publication review | Verify source access dates and exact flow identities. Treat unresolved non-reference UUIDs and absent quantitative evidence as disclosed incompleteness, not permission to substitute a generic flow or estimate. | `tiangong-flow-verification-2026` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product- and site-specific cradle-to-factory-gate foreground data package for one declared CPC 3.0 `45281` card archetype and configuration |
| downstream_use | Construction of reviewed `process` and `lifecyclemodel` projections for electronic equipment, AI/data-centre infrastructure, and related systems |
| allowed_use | Comparison or aggregation only among configurations with equivalent function, performance basis, host interface, boundary, geography, period and data quality; lifecycle models may add explicit use and end-of-life scenarios |
| excluded_use | Bare IC, bare PCB, complete computer/server, hub/router/gateway or external-peripheral modelling; representing the entire CPC leaf with one card subtype; use-phase claims from this cradle-to-gate package alone |
| required_metadata | All reference-flow qualifiers; CPC identity; exact UUID chain; BOM revision; card type and configuration; production route; site/geography/period; operational-control statement; yield; allocation; supplier-data status; packaging exclusion |
| required_quality_disclosure | Layer-specific upstream coverage and proxies; primary versus secondary data; measurement and sampling basis; missing non-reference UUIDs; mass-balance variance; conditional-process applicability; excluded flows; uncertainty and data gaps |
| update_trigger | Card architecture, primary chip/package, PCB stack-up, memory, cooling, interface, firmware/test profile, supplier route, site, energy supply, yield, packaging, classification, reference identity or evidence basis changes materially |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, official CSV: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; official class detail: https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1073/45281; retrieved 2026-08-09 | Exact category identity, included expansion-card examples, and exclusion of hubs, routers and gateways |
| `tiangong-flow-verification-2026` | `dataset` | TianGong LCA CLI read-only verification on 2026-08-09: state-code `100` Product flow `cc906112-5ebd-437c-b701-88faeeac2f81`, exact CPC 3.0 `45281`; Mass `93a60a56-a3c8-11da-a746-0800200b9a66`; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`; reference unit `kg` | Reference-product identity and unit chain; no non-reference inventory UUID inferred |
| `itu-t-l1410-2024` | `standard` | ITU-T Recommendation L.1410, Methodology for environmental life cycle assessments of information and communication technology goods, networks and services, 11/2024, https://handle.itu.int/11.1002/1000/16010; retrieved 2026-08-09 | ICT-good functional-unit qualifiers, hierarchical electronic/mechanical/cooling/cable and PCBA component structure, upstream life-cycle coverage and cradle-to-gate reporting |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, Annex I Product Environmental Footprint method, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021H2279; retrieved 2026-08-09 | Product-specific bill of materials, company-specific manufacturing data, functional/declaration unit, reference flow, allocation, completeness and data-quality controls |
| `ipc-1752a-2018` | `standard` | IPC-1752A, Materials Declaration Management, official IPC materials-declaration page, https://www.electronics.org/materials-declaration-data-exchange-standards-homepage; retrieved 2026-08-09 | Supplier material declarations for bulk materials, components, printed boards, subassemblies and products |
| `iec-62474-2018` | `standard` | IEC 62474:2018, Material declaration for products of and for the electrotechnical industry, https://webstore.iec.ch/en/publication/29857; retrieved 2026-08-09 | Supplier material-declaration structure and the limitation that composition declarations do not replace process-chemical or use-emission records |
| `ipc-jstd001j-a610j-2024` | `standard` | IPC, release notice for J-STD-001J and IPC-A-610J, https://www.electronics.org/news-release/ipc-releases-j-revisions-two-leading-standards-electronics-assembly; retrieved 2026-08-09 | Soldering materials/process controls, printed-board assembly and post-assembly acceptance evidence |
| `mass-balance-identity` | `method_factor` | Physical mass-balance identity: measured inputs equal outputs, inventory change, wastes and measured releases within the same declared process boundary and period | Layer reconciliation, yield, stock balance, waste and validation calculations; no category-specific numeric factor |
