---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.video-recording-or-reproducing-apparatus
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Video recording or reproducing apparatus

## 1. Scope and Applicability

This PCR applies to complete apparatus whose principal function is to record video, reproduce video, or perform both functions. It covers equipment used in monitoring systems, media playback, home entertainment, and professional video chains, including multi-channel digital or network video recorders, local-media recorders and players, optical-disc video recorders and players, solid-state or hard-disk video apparatus, and professional record/playout decks. A foreground dataset shall represent a declared product family or production configuration rather than one default DVR, NVR, or other single model.

The declared configuration shall distinguish recording-only, reproduction-only, and combined apparatus; network and local-media operation; channel count; supported input and output resolution; installed and supported storage; operating, idle, standby, networked-standby, and off modes where present; and the mass and type of printed circuit board assemblies, storage devices, power supplies, enclosure parts, supplied accessories, cables, and packaging.

This PCR excludes cameras and camcorders, television receivers, monitors and projectors, sound-only recording or reproducing apparatus, separately traded parts, unrecorded or recorded media, and general-purpose computers or servers whose principal function is not video recording or reproduction. It does not authorize combining these excluded products with the reference apparatus merely because they occur in the same video system. The default production boundary is factory gate; use and end-of-life stages are conditional extensions and shall follow the rules below when included.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.video-recording-or-reproducing-apparatus |
| classification_refs | CPC 3.0:47323 (exact) |
| covered_products | Complete video recording, video reproducing, or combined recording/reproducing apparatus for monitoring, media playback, home entertainment, or professional video chains; network or local-media products are included when video recording or reproduction is their principal function. |
| excluded_products | Cameras and camcorders; television receivers; monitors and projectors; sound-only apparatus; separately traded parts and recording media; general-purpose computers and servers; incomplete assemblies; and a dataset defined only by one commercial DVR/NVR model without a representative-product declaration. |
| representative_product | One declared finished apparatus configuration or production-weighted product family, classified by record/playback function, network/local medium, channel count and resolution, storage configuration, power-mode profile, and component/accessory configuration. |
| production_route | Receipt and verification of purchased electronic and mechanical components; assembly and storage installation; firmware loading and configuration; functional and electrical testing; packaging and factory-gate release. |
| market_state | Complete released equipment in the declared as-shipped configuration, including the declared internal or external power supply, installed storage, enclosure, cables, remote controls, and other bundled accessories; packaging is recorded separately. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished video recording or reproducing apparatus meeting the declared configuration and release criteria. |
| How much | 1 kg net mass of finished apparatus at factory gate. |
| How well | Complete and functional released equipment with reconciled bill of materials and declared function, connectivity, channels, resolution, storage, power modes, power supply, enclosure, and bundled accessories. |
| How long or cycle | One released production configuration or production-weighted family over the declared reporting period; service life and duty cycle are not embedded in the factory-gate reference amount. |
| reference_flow_link | Tiangong Product flow `72f5238b-6dc7-456f-bdd7-87c02608d719` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Video recording or reproducing apparatus `72f5238b-6dc7-456f-bdd7-87c02608d719` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | recording-only, reproduction-only, or combined function; network and/or local-media operation; channel count; supported input and output resolution; installed and maximum supported storage and storage technology; operating, idle, standby, networked-standby, and off-mode definitions and power where present; internal or external power-supply configuration; PCB assembly, storage, power supply, enclosure, accessory, cable, battery, and packaging mass split; included accessories; geographical market; production period; product-family weighting method |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or equivalent data-package fields. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net mass of the complete as-shipped apparatus and declared bundled accessories, excluding packaging. Normalize the foreground inventory to exactly 1 kg. Declare whether detachable external power supplies, remotes, batteries, and cables are included in the net product mass. |
| `configuration_identity` | represented product family | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record mass and production quantity for every configuration used in a family average. Do not average products with materially different recording/playback function, network/local-medium architecture, channel or resolution class, storage configuration, or supplied-accessory set without disclosing the weights and retained distinctions. |
| `component_mass_split` | bill of materials | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Reconcile the reference mass to separately recorded PCB assemblies, storage devices, power supply, enclosure and mechanical parts, batteries, displays if integral, cables, and bundled accessories. Record packaging outside net product mass. |
| `mode_power_measurement` | apparatus and supplied external power supply | Electrical power | W | Measure at the AC supply input in the as-shipped or declared default configuration. Record voltage, frequency, measurement uncertainty, connected ports, enabled network/control protocols, channel and resolution load, storage state, and mode transition conditions. Measure applicable recording, playback, simultaneous record/playback, idle, standby, networked-standby, and off modes separately; do not substitute nameplate power. |
| `use_energy_conversion` | use-stage extension | Energy | kWh | Calculate energy as the sum over declared modes of measured power in W multiplied by time in hours and divided by 1000. Service life, annual hours, channel loading, storage activity, and duty-cycle shares shall be scenario inputs, not universal defaults. |
| `packaging_mass` | packaging release | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh primary, secondary, and transport packaging by material and report per 1 kg net reference product without adding packaging to the reference amount. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased component and material inputs accepted at the reporting factory, with supplier identity, geography, technology, recycled-content basis where claimed, and upstream-dataset reference recorded. |
| starting_condition_role | The foreground begins at factory receipt and verification; upstream production of PCB assemblies, storage devices, power supplies, enclosure materials, accessories, electricity, fuels, and packaging is represented by linked background or supplier datasets. |
| product_classification_scope | Complete CPC 3.0 subclass 47323 apparatus only; excluded video-system equipment and separately traded parts remain distinct product categories. |
| recursive_input_rule | An input that itself satisfies this PCR is recorded as a purchased product with its own supplier dataset and declared starting condition; its manufacture is not recursively reconstructed inside the receiving foreground process. |
| upstream_dataset_requirement | Use technology-, geography-, and period-representative datasets for high-mass or high-impact inputs, and retain supplier-specific data when verified. Proxy use requires identity, representativeness, and substitution disclosure. |
| disclosure | Declare the represented function/configuration, factory sites, reporting period, family weighting, included components and accessories, packaging convention, cut-offs, proxies, excluded stages, and whether use and end-of-life extensions are included. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_manufacturing` | factory-gate foreground | Include component receipt and verification, assembly, storage installation, firmware loading and configuration, functional/electrical testing, rework and yield losses, packaging, utilities, on-site emissions and wastes, and factory-gate release. Link upstream supply datasets for purchased components, materials, energy, and packaging. | `iec-63366-2025`; `iso-14044-2006` |
| `boundary_use_stage` | use-stage extension | Include operating, idle, standby, networked-standby, and off-mode electricity only when a declared use scenario is in scope. Use measured mode power and explicit service-life, duty-cycle, channel/resolution-load, storage-activity, and network-state assumptions; keep the factory-gate result separately visible. | `iec-62087-4-2015`; `energy-star-av-v3-2014`; `eu-2023-826`; `iec-62301-2026`; `iec-63474-2026` |
| `boundary_end_of_life` | end-of-life extension | When end of life is included, model collection, preparation for reuse where applicable, battery and other selective removal, dismantling, recycling, recovery, and disposal using a declared geography and scenario. Keep recycled-content inputs and end-of-life credits methodologically distinct. | `eu-weee-2012-19`; `iec-tr-62635-2012`; `iec-63366-2025` |
| `boundary_exclusions` | product and system scope | Exclude cameras/camcorders, televisions, monitors/projectors, sound-only apparatus, separately traded parts/media, external displays and cameras, user networks and content services, and general-purpose computing equipment unless an expanded system study explicitly adds them as separate datasets. | `unsd-cpc-3-0-structure` |
| `boundary_component_resolution` | purchased electronics and assemblies | Preserve separate inventory resolution for PCB assemblies, storage devices, power supplies, enclosure/mechanical parts, accessories/cables, batteries, and packaging. Do not collapse these into an unspecified electronics input when records permit resolution. | `iec-62474-2018`; `eu-rohs-2011-65` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_supply` | Component and material supply | required | Always include purchased component, material, accessory, and packaging inputs and incoming rejects. | Establishes the BOM-resolved starting condition and links upstream supply datasets. | Per 1 kg net released reference product. |
| `equipment_assembly` | Equipment assembly and storage installation | required | Always include mechanical/electronic assembly, installed storage, internal wiring, soldering or fastening, utilities, scrap, and rework. | Produces assembled apparatus from verified inputs. | Per kg assembled apparatus transferred. |
| `firmware_configuration` | Firmware loading and configuration | required | Include firmware loading, configuration, data wiping or initialization, and configuration-specific yield. | Establishes record/playback, network/local medium, channel, resolution, and storage functionality. | Per kg configured apparatus transferred. |
| `functional_test` | Functional and electrical testing | required | Include functional testing, burn-in where performed, power checks, test energy, failures, and rework returns. | Verifies release functionality and produces the measured power-mode profile. | Per kg tested apparatus transferred. |
| `packaging_release` | Packaging and factory-gate release | required | Include packaging materials, final inspection, bundled-accessory consolidation, packaging losses, and released output. | Produces the reference product at factory gate. | 1 kg net released reference product. |
| `use_operation` | Use-stage operation | conditional | Include only for a declared use-stage or cradle-to-grave study. | Converts measured mode power and declared time shares into use electricity. | Per declared service life of 1 kg reference product. |
| `end_of_life` | End-of-life treatment | conditional | Include only for a declared downstream or cradle-to-grave study. | Represents collection, selective removal, dismantling, recovery, recycling, and disposal. | Per kg discarded reference product entering the declared scenario. |

### Process: Component and material supply (`component_supply`)

#### Inputs

##### Product flows

###### PCB assemblies (`pcb_assemblies`)

Record populated PCB assemblies by function and supplier, including the main logic/video-processing board, interface boards, tuner or capture boards where present, and control boards.

- Selected flow: PCB assemblies (semantic candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Foreground BOM mass accepted into production, including gross input needed for rejects and rework, normalized to 1 kg released product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass_reconciliation`
- Sources: `iec-62474-2018`; `eu-rohs-2011-65`

###### Storage devices (`storage_devices`)

Record installed hard-disk, solid-state, optical-drive, and removable-storage hardware separately by technology, capacity, quantity, and supplier.

- Selected flow: Storage devices for video apparatus (semantic candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Foreground BOM mass by storage technology and installed configuration, normalized to 1 kg released product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_configuration`
- Sources: `iec-62474-2018`

###### Power supply, enclosure, and accessories (`other_component_inputs`)

Record internal or external power supplies, enclosure and mechanical parts, cooling devices, batteries, cables, remote controls, rack hardware, and other bundled accessories as separate BOM lines.

- Selected flow: Power supply, enclosure, and accessory components (semantic candidates; Tiangong UUIDs unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Foreground BOM mass by component family, including gross input and rejects, normalized to 1 kg released product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass_reconciliation`
- Sources: `iec-62474-2018`; `eu-rohs-2011-65`

#### Outputs

##### Product flows

###### Verified component set (`verified_component_set`)

Transfer the configuration-specific, mass-reconciled component set to assembly.

- Selected flow: Verified component set (semantic candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Accepted component mass transferred to assembly after incoming rejects are removed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg accepted component set
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass_reconciliation`
- Sources:

##### Waste flows

###### Incoming rejects (`incoming_rejects`)

Record rejected components and packaging by material or component type and actual treatment route.

- Selected flow: Incoming rejected electronic and mechanical components (semantic candidates; Tiangong UUIDs unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured gross rejected mass before return, recycling, or disposal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg accepted component set
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_mass_reconciliation`
- Sources:

### Process: Equipment assembly and storage installation (`equipment_assembly`)

#### Inputs

##### Product flows

###### Verified components (`assembly_components`)

Record the component set entering physical assembly and storage installation.

- Selected flow: Verified component set (semantic candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass entering assembly.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg assembled apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

###### Assembly electricity (`assembly_electricity`)

Record metered electricity for assembly, storage installation, fastening, soldering, cleaning, and allocated shared line services.

- Selected flow: Electricity supply for equipment assembly (semantic candidate; Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Metered process electricity plus documented allocation of shared line electricity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg assembled apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources:

#### Outputs

##### Product flows

###### Assembled apparatus (`assembled_apparatus`)

Transfer physically assembled apparatus with installed storage to firmware configuration.

- Selected flow: Assembled video apparatus (semantic candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured good output plus separately tracked rework returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg assembled apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

##### Waste flows

###### Assembly scrap (`assembly_scrap`)

Record PCB, metal, plastic, cable, fastener, storage, solder, and mixed scrap by measured treatment route.

- Selected flow: Assembly scrap by material and treatment route (semantic candidates; Tiangong UUIDs unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Gross measured scrap leaving assembly, excluding internally reworked units.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg assembled apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_assembly_records`
- Sources:

### Process: Firmware loading and configuration (`firmware_configuration`)

#### Inputs

##### Product flows

###### Assembled apparatus input (`firmware_input`)

Record apparatus entering firmware loading, initialization, channel/resolution configuration, and storage setup.

- Selected flow: Assembled video apparatus (semantic candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Foreground transfer record including repeated passes caused by configuration failure.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg configured apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_firmware_yield`
- Sources:

#### Outputs

##### Product flows

###### Configured apparatus (`configured_apparatus`)

Transfer successfully configured apparatus with recorded firmware, function, network/local-medium, channel, resolution, and storage identity to testing.

- Selected flow: Configured video apparatus (semantic candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Good configured output after separately recording failed and reworked units.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg configured apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_firmware_yield`
- Sources:

### Process: Functional and electrical testing (`functional_test`)

#### Inputs

##### Product flows

###### Configured apparatus input (`test_input`)

Record configured apparatus entering functional, recording, playback, network, interface, storage, and power testing.

- Selected flow: Configured video apparatus (semantic candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Foreground transfer record including retests and rework loops.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg tested apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_power_and_yield`
- Sources:

###### Test electricity (`test_electricity`)

Record electricity for test stations, burn-in where used, attached test storage, and allocated shared test infrastructure.

- Selected flow: Electricity supply for functional testing (semantic candidate; Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Metered test electricity including repeated tests, normalized to good tested output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg tested apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_meters`
- Sources:

#### Outputs

##### Product flows

###### Tested apparatus (`tested_apparatus`)

Transfer apparatus meeting declared functional and electrical release criteria to packaging.

- Selected flow: Tested video apparatus (semantic candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Good tested output after failures and rework are separately recorded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg tested apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_power_and_yield`
- Sources:

##### Waste flows

###### Failed units and test rejects (`test_rejects`)

Record failed units, replaced components, and irreparable test rejects without netting internal rework.

- Selected flow: Failed video apparatus and replaced components (semantic candidates; Tiangong UUIDs unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Gross mass sent to rework, component recovery, recycling, or disposal, with each route identified.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per kg tested apparatus output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_test_power_and_yield`
- Sources:

### Process: Packaging and factory-gate release (`packaging_release`)

#### Inputs

##### Product flows

###### Tested apparatus input (`packaging_input`)

Record tested apparatus and its declared accessories entering final inspection and packaging.

- Selected flow: Tested video apparatus (semantic candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Net tested apparatus mass entering release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources:

###### Packaging materials (`packaging_materials`)

Record cartons, moulded fibre, plastic films and foams, pallets, labels, manuals, and other packaging by material.

- Selected flow: Packaging materials by material type (semantic candidates; Tiangong UUIDs unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Gross packaging input including process loss per 1 kg net released product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources:

#### Outputs

##### Product flows

###### Released reference product (`reference_product`)

The output is the exact CPC 3.0:47323 product flow selected for this PCR and meets the declared release criteria.

- Selected flow: Video recording or reproducing apparatus `72f5238b-6dc7-456f-bdd7-87c02608d719`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net released apparatus, excluding packaging and including only the declared bundled components and accessories.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources:

### Process: Use-stage operation (`use_operation`)

#### Inputs

##### Product flows

###### Use electricity (`use_electricity`)

Record electricity calculated from measured mode power and explicit scenario hours. Report mode-level results before aggregation.

- Selected flow: Electricity supply for declared use geography (semantic candidate; Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: Sum of measured power for each declared mode multiplied by scenario hours and divided by 1000; do not use nameplate power or an undeclared default duty cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: Per declared service life of 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mode_power_profile`
- Sources: `iec-62087-4-2015`; `energy-star-av-v3-2014`; `eu-2023-826`; `iec-62301-2026`; `iec-63474-2026`

### Process: End-of-life treatment (`end_of_life`)

#### Inputs

##### Waste flows

###### Discarded apparatus (`discarded_apparatus`)

Record discarded apparatus entering the declared collection and treatment scenario, with reuse and collection losses separately identified.

- Selected flow: Waste video recording or reproducing apparatus (semantic candidate; Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Discarded mass entering each treatment route per kg reference product after the declared service life.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: Per declared service life of 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eol_records`
- Sources: `eu-weee-2012-19`; `iec-tr-62635-2012`

#### Outputs

##### Product flows

###### Recovered fractions (`recovered_fractions`)

Record reusable equipment or parts and recovered metal, plastic, glass, PCB, storage, and battery fractions by actual destination and quality.

- Selected flow: Reused products and recovered material fractions (semantic candidates; Tiangong UUIDs unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured output mass by fraction and destination; do not assign avoided-product credit unless the chosen LCA method and scenario declare it separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: Per kg discarded apparatus entering treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eol_records`
- Sources: `eu-weee-2012-19`; `iec-tr-62635-2012`

##### Waste flows

###### Treatment residues (`treatment_residues`)

Record hazardous and non-hazardous treatment residues by material, treatment, and final destination.

- Selected flow: End-of-life treatment residues (semantic candidates; Tiangong UUIDs unresolved)
- Flow property / unit: Mass / kg
- Amount rule: Measured residue mass by treatment route and final destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: Per kg discarded apparatus entering treatment
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_eol_records`
- Sources: `eu-weee-2012-19`; `iec-tr-62635-2012`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all foreground processes | Avoid allocation by subdivision, separate metering, configuration-specific BOMs, and explicit recording of rework loops. Do not allocate excluded camera, display, television, or general-purpose computing burdens to the reference apparatus merely because equipment shares a system or line. | `iso-14044-2006`; `iec-63366-2025` |
| `allocation_shared_resources` | shared line energy, utilities, and materials | Allocate shared electricity and utilities using measured cycle time and operating power, machine-hours, or another causal physical driver. Allocate directly attributable materials by BOM or measured mass. If a non-physical basis is unavoidable, document the reason, data, result, and sensitivity. | `iso-14044-2006`; `iec-63366-2025` |
| `allocation_rework_and_recovery` | rework, scrap, co-products, and end-of-life recovery | Record gross inputs, good outputs, internal rework, rejects, and treatment routes before allocation. Apply burdens to saleable co-products using a declared physical relationship where feasible; keep any economic allocation or avoided-product credit as a disclosed alternative scenario and do not mix it with the foreground mass balance. | `iso-14044-2006`; `iec-63366-2025`; `iec-tr-62635-2012` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_mass_reconciliation` | `component_supply` | purchased components and net reference mass | ERP/BOM, supplier declaration, calibrated scale record | configuration id; component id; supplier; component family; material; quantity; unit mass; gross mass; net released mass; reject mass; inclusion in reference mass | Export BOM and receiving records, verify representative unit masses by calibrated weighing, and reconcile to released-product mass. | kg | Each configuration and BOM revision; monthly aggregation | Representative reporting period, normally at least 12 consecutive months or the full shorter production campaign | Every represented factory and supplier-specific input where available | Production-quantity-weighted by configuration; retain component-family subtotals and gross-to-net reconciliation. | BOM revision, supplier declaration, scale calibration, reconciliation sign-off |
| `cp_storage_configuration` | `component_supply` | storage devices | BOM, serial/configuration log, supplier specification | configuration id; technology; device count; installed capacity; maximum supported capacity; removable/fixed status; unit mass; supplier; firmware dependence | Reconcile installed storage hardware to BOM and sampled finished units; record supported but uninstalled capacity only as metadata. | kg and declared capacity unit | Each configuration and storage option | Same period as reference production | Every represented configuration and factory | Production-quantity-weighted by installed configuration; never treat supported capacity as installed mass. | BOM, serial/configuration report, supplier specification, sample check |
| `cp_assembly_records` | `equipment_assembly` | assembly inputs, outputs, scrap, and rework | MES batch record, weigh ticket, scrap log | batch; configuration; component input mass; good output mass; rework mass; scrap type; scrap mass; destination; timestamp | Collect gross batch flows and preserve internal rework loops before netting. | kg | Each batch or shift | Same period as reference production | Every represented assembly line | Sum gross flows by configuration and normalize to good assembled output. | MES audit trail, scale calibration, waste transfer record |
| `cp_energy_meters` | `equipment_assembly`; `functional_test` | process electricity and shared utilities | submeter log and equipment runtime record | meter id; process; start/end reading; voltage; power; runtime; batch; good output; rework cycles; allocation driver | Prefer dedicated meters; otherwise combine measured equipment power and logged runtime and document shared-resource allocation. | kWh | Each batch/shift or continuous logging | Representative operating period including normal production variation | Every represented line and test area | Subtract documented idle/non-production use where separately measured; normalize to good output after recording rework. | Meter calibration, timestamps, runtime log, allocation worksheet |
| `cp_firmware_yield` | `firmware_configuration` | configured output, retries, and failures | station log and firmware deployment record | configuration id; firmware version; function class; network/local-medium state; channel count; resolution; storage setup; pass; retry; failure; timestamp | Export station-level deployment results and reconcile passes, retries, failures, and transferred mass. | kg and count | Every unit or batch | Same period as reference production | Every represented configuration station | Aggregate by configuration and firmware version; retain retry and failure rates. | Signed software release, station log, yield reconciliation |
| `cp_test_power_and_yield` | `functional_test` | tested output, failures, and release power checks | test-station log, failure report, power-meter record | configuration; test profile; channel load; resolution; storage state; network state; pass/fail; rework route; mode power; voltage; frequency; uncertainty | Export functional-test results and power checks with apparatus configuration and test conditions; reconcile failures to rework or waste. | kg, count, W | Every unit or statistically justified batch sample | Same period as reference production | Every represented test line and configuration | Aggregate yields by configuration; retain power observations without replacing the dedicated use-mode protocol. | Test procedure, instrument calibration, station log, failure disposition |
| `cp_packaging_release` | `packaging_release` | released reference product and packaging | packing BOM, final inspection, scale record, dispatch record | configuration; product mass; accessory mass; external PSU mass; battery mass; cable mass; packaging material; packaging mass; released count; reject/repack mass | Weigh representative complete releases and packaging components; reconcile packed count to dispatch and net reference mass. | kg and count | Each configuration and packaging revision; monthly aggregation | Same period as reference production | Every represented packing site | Production-quantity-weighted by configuration; keep packaging outside net product mass. | Scale calibration, packing specification, release and dispatch reconciliation |
| `cp_mode_power_profile` | `use_operation` | applicable operating and low-power modes | controlled power measurement | configuration; supply voltage; frequency; power factor; connected ports; enabled protocols; channel load; resolution; storage state; mode; transition condition; stable power; uncertainty | Measure AC-input power in declared default configuration using applicable IEC and regulatory mode definitions; repeat for materially distinct configurations and modes. | W | Each representative configuration and firmware/power-management revision | Current sold configuration and firmware | Laboratory or production site with traceable instruments | Report mode-level observations; family averages require production weights and shall retain min/max observations without inventing category defaults. | Test method, meter calibration, raw time series, configuration photographs/logs |
| `cp_use_duty_cycle` | `use_operation` | service life and mode hours | scenario record, field telemetry, customer study, or explicit assumption | geography; application; annual hours by mode; channel occupancy; resolution; storage write/read duty; network state; service life; source; uncertainty | Use representative measured or documented scenario data; label assumptions and provide sensitivity when primary evidence is unavailable. | h/year and years | Each use scenario | Declared scenario period | Declared market and application | Mode hours shall sum to the declared year; multiply by declared service life only after scenario validation. | Telemetry/study reference or signed scenario assumption and sensitivity |
| `cp_eol_records` | `end_of_life` | collection, reuse, recovered fractions, and residues | operator weighbridge, treatment report, scenario dataset | geography; collection rate; reuse share; dismantling input; removed battery/PCB/storage; recovered fraction; residue; destination; loss; credit method | Use operator or official scenario records and maintain mass balance through collection and treatment. | kg | Each operator/reporting period or declared scenario | Period representative of disposal geography | All treatment routes in the declared scenario | Weighted by route share; separately report uncollected mass, reuse, recycling, recovery, and disposal. | Operator permit/report, weighbridge records, mass-balance reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all manufacturing inventories | Divide each gross foreground flow by net kg of released reference product in the same reconciled production scope. | Gross flow amount; released product mass | Flow amount per 1 kg reference product | `iso-14044-2006`; `iec-63366-2025` |
| `calc_family_weighting` | multi-configuration dataset | Sum each configuration-specific normalized result multiplied by its released-production quantity share; disclose included configurations and weights. | Configuration result; released quantity | Production-weighted family result | `iec-63366-2025` |
| `calc_mass_balance` | manufacturing and end of life | Reconcile opening inputs with good outputs, internal rework, rejects, recovered fractions, residues, emissions where measured, and inventory change; investigate unexplained imbalance rather than forcing closure. | Mass inputs; outputs; inventory change | Mass-balance residual and completeness result | `iso-14044-2006`; `iec-tr-62635-2012` |
| `calc_use_energy` | use-stage scenario | E = sum(P_m × t_m) / 1000 for all declared modes m; calculate each mode separately before summing and retain service-life multiplication as a scenario step. | Mode power P_m in W; mode time t_m in h | Electricity in kWh | `iec-62087-4-2015`; `energy-star-av-v3-2014`; `eu-2023-826`; `iec-62301-2026`; `iec-63474-2026` |
| `calc_yield_and_rework` | assembly, configuration, and test | Record gross passes and rework loops; yield equals accepted output divided by total units or mass entering the applicable decision point. Never erase the energy and component losses of failed attempts. | Input; accepted output; rework; rejects | Yield, gross resource use, and reject flows | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Exact CPC 3.0:47323 identity and all required qualifiers shall be present; exclusions shall be checked. | Product specification, configuration matrix, CPC decision record, reference-flow UUID check |
| `dq_bom_completeness` | component supply | PCB assemblies, storage, power supply, enclosure/mechanical parts, accessories/cables, batteries, integral displays if any, and packaging shall be separately visible and reconciled. | BOM-to-scale reconciliation, supplier declarations, missing-line review |
| `dq_temporal_geographic_technology` | all linked data | Production period, factory geography, configuration/firmware, supplier technology, and proxy differences shall be recorded. | Data-quality assessment and dataset metadata |
| `dq_energy_coverage` | assembly, test, and use | Meter coverage, calibration, allocation of shared energy, repeated tests, applicable power modes, test conditions, and measurement uncertainty shall be documented. | Meter map, calibration certificates, raw logs, allocation worksheet, mode-power report |
| `dq_mass_balance` | manufacturing and end of life | Gross inputs, good outputs, rework, rejects, recovered fractions, residues, and inventory change shall be checked at the most resolved feasible level. | Signed mass-balance table and exception log |
| `dq_source_traceability` | external method and scenario evidence | Each external source id shall resolve to a stable reference; assumptions and unresolved semantic flow candidates shall remain explicit. | Source register, retrieval record, unresolved-flow review |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | product identity | Fail if the represented product is not principally video recording or reproduction apparatus under CPC 3.0:47323, or if cameras, televisions, monitors/projectors, sound-only equipment, separately traded parts/media, or general-purpose computers are silently included. | `unsd-cpc-3-0-structure` |
| `val_reference_uuid_mass` | reference flow | Require Product flow `72f5238b-6dc7-456f-bdd7-87c02608d719`, state code 100 at author verification, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, kg, and exactly 1 kg net released reference product. |  |
| `val_configuration` | dataset metadata | Require recording/playback function, network/local-medium architecture, channels, resolution, installed/supported storage, power-supply configuration, applicable power modes, component/accessory split, production period, geography, and family weights. Fail a single-model dataset presented as a category default. | `iec-62087-4-2015`; `energy-star-av-v3-2014`; `eu-2023-826` |
| `val_bom` | component and packaging inventory | Require reconciled net product mass and separate PCB, storage, power-supply, enclosure/mechanical, accessory/cable, battery, and packaging records; flag unresolved important Tiangong flow UUIDs before publication of a concrete dataset. | `iec-62474-2018`; `eu-rohs-2011-65` |
| `val_process_coverage` | manufacturing inventory | Require component supply, assembly, firmware configuration, testing, and packaging/release, including yields, rework, rejects, process energy, packaging, and waste treatment. | `iec-63366-2025`; `iso-14044-2006` |
| `val_power_modes` | use-stage extension | Require AC-input measured power for every applicable active and low-power mode with voltage, frequency, network/control state, channel/resolution load, storage state, transition conditions, and uncertainty. Fail use results based only on nameplate power. | `iec-62087-4-2015`; `energy-star-av-v3-2014`; `eu-2023-826`; `iec-62301-2026`; `iec-63474-2026` |
| `val_use_energy` | use-stage extension | Require explicit service life and mode hours that sum to the declared time basis; recalculate kWh from mode-level W and h and keep the factory-gate result visible. | `iec-62087-4-2015`; `energy-star-av-v3-2014` |
| `val_boundary_allocation` | system model | Require declared boundary, cut-offs, upstream datasets, proxies, allocation drivers, rework treatment, and any recovery credit. Do not mix an expanded use/end-of-life result with the factory-gate result without separate reporting. | `iso-14044-2006`; `iec-63366-2025` |
| `val_end_of_life` | end-of-life extension | Require geography, collection, reuse, selective removal, treatment-route shares, recovered fractions, residues, losses, mass balance, and credit method when end of life is included. | `eu-weee-2012-19`; `iec-tr-62635-2012` |
| `val_sources` | evidence traceability | Require every used source id to exist in Section 11 and prohibit search snippets, unverified numerical defaults, or undocumented estimates as final evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package for complete video recording or reproducing apparatus, with optional, separately declared use and end-of-life extensions. |
| downstream_use | Construction of Tiangong flow, process, and lifecyclemodel projections and product-footprint or comparative studies whose scope matches the declared configuration. |
| allowed_use | Factory-gate modelling of CPC 3.0:47323 apparatus; comparison of declared configurations when functional equivalence, boundary, data quality, power modes, storage, accessories, and scenario assumptions are aligned; expanded studies with separately visible use and end-of-life results. |
| excluded_use | Cameras, televisions, monitors/projectors, sound-only apparatus, separately traded components/media, or general-purpose computers; undisclosed extrapolation from one DVR/NVR model to the whole category; comparison using nameplate power or hidden duty-cycle, storage, lifetime, allocation, or recovery assumptions. |
| required_metadata | Canonical PCR id; CPC code; reference-flow UUID and mass basis; all required qualifiers; configuration matrix and weights; factory/site and period; BOM/component split; manufacturing process coverage; boundary/cut-offs; upstream datasets/proxies; allocation; applicable power measurements and scenarios; end-of-life scenario if included; source ids; unresolved semantic flow candidates. |
| required_quality_disclosure | Primary-versus-secondary share; supplier/site specificity; temporal, geographical, and technological representativeness; BOM and mass-balance completeness; meter coverage and uncertainty; yield and rework; proxy use; family weighting; excluded stages; scenario sensitivity; unresolved quantitative evidence and flow UUIDs. |
| update_trigger | Product architecture, channel/resolution class, network/local-medium function, storage technology/configuration, PCB or power supply, accessory set, firmware power management, production route/site, family mix, applicable regulation/standard, or background dataset changes that materially affect identity, inventory, power, or interpretation. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure` | official_guidance | United Nations Statistics Division, Proposed CPC Version 3.0 Structure, subclass 47323 and adjacent exclusions, https://unstats.un.org/unsd/classifications/CPC/Documents/3-Proposed-CPC-Ver3-Structure-20Nov2023.pdf (retrieved 2026-08-09) | Exact category identity and separation from cameras, televisions, monitors/projectors, parts, and recording media. |
| `iec-62087-4-2015` | standard | IEC 62087-4:2015, Audio, video and related equipment — Determination of power consumption — Part 4: Video recording equipment, https://webstore.iec.ch/en/publication/22584 (retrieved 2026-08-09) | Video-recording equipment mode scope and power-measurement design. |
| `energy-star-av-v3-2014` | official_guidance | U.S. EPA, ENERGY STAR Program Requirements Product Specification for Audio/Video, Version 3.0, revised December 2014, https://www.energystar.gov/sites/default/files/asset/document/Final%20Version%203.0%20AV%20Program%20Requirements%20%28Rev%20Dec-2014%29.pdf (retrieved 2026-08-09) | Active/idle/sleep/off definitions, network/configuration disclosure, AC-input measurement, and recording/playback test conditions. |
| `eu-2023-826` | standard | Commission Regulation (EU) 2023/826, https://eur-lex.europa.eu/eli/reg/2023/826/oj/eng (retrieved 2026-08-09) | Standby, off, and networked-standby definitions and disclosure of power, transition, ports, and test conditions. |
| `iec-62301-2026` | standard | IEC 62301:2026, Household electrical appliances — Measurement of standby power, https://webstore.iec.ch/en/publication/90194 (retrieved 2026-08-09) | Measurement of standby, off, and other non-active modes and associated stability and uncertainty. |
| `iec-63474-2026` | standard | IEC 63474:2026, Electrical and electronic household and office equipment — Measurement of networked standby power of edge equipment, https://webstore.iec.ch/en/publication/85393 (retrieved 2026-08-09) | Networked-standby power measurement when applicable. |
| `iec-62474-2018` | standard | IEC 62474:2018, Material declaration for products of and for the electrotechnical industry, https://webstore.iec.ch/en/publication/29857 (retrieved 2026-08-09) | Component/material declaration structure and traceability. |
| `eu-rohs-2011-65` | standard | Directive 2011/65/EU on restriction of hazardous substances in electrical and electronic equipment, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex%3A32011L0065 (retrieved 2026-08-09) | Homogeneous-material and restricted-substance declaration context for electronics. |
| `eu-weee-2012-19` | standard | Directive 2012/19/EU on waste electrical and electronic equipment, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=celex%3A32012L0019 (retrieved 2026-08-09) | Separate collection, selective removal, treatment, reuse, recycling, and recovery scope. |
| `iec-tr-62635-2012` | official_guidance | IEC TR 62635:2012, Guidelines for end-of-life information provided by manufacturers and recyclers and for recyclability rate calculation of electrical and electronic equipment, https://webstore.iec.ch/en/publication/7292 (retrieved 2026-08-09) | End-of-life information exchange, treatment mass balance, recyclability, and recoverability. |
| `iec-63366-2025` | standard | IEC 63366:2025, Product category rules for life cycle assessment of electrical and electronic products and systems, https://webstore.iec.ch/en/publication/67691 (retrieved 2026-08-09) | Electrical/electronic product LCA boundary, dataset, scenario, reporting, and category-rule framework. |
| `iso-14044-2006` | standard | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, https://www.iso.org/standard/38498.html (retrieved 2026-08-09) | Inventory requirements, boundary, allocation hierarchy, data quality, and interpretation. |
