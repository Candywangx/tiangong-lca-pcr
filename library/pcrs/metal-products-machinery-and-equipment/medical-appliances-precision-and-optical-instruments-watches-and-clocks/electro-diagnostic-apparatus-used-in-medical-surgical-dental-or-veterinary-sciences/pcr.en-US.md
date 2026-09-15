---
schema_version: 1
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.electro-diagnostic-apparatus-used-in-medical-surgical-dental-or-veterinary-sciences
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Electro-diagnostic apparatus, used in medical, surgical, dental or veterinary sciences

## 1. Scope and Applicability

This PCR covers complete electro-diagnostic apparatus whose intended purpose is to acquire, process, display, store, or transmit physiological or diagnostic information in medical, surgical, dental, or veterinary practice. It covers multiparameter and dedicated patient-monitoring equipment, diagnostic electrocardiographs, diagnostic ultrasound systems, and other non-therapeutic electro-diagnostic systems with a complete apparatus-level function.

Every foreground data package shall declare the following configuration dimensions before data are aggregated. Results for different rows shall not be combined unless component, use, and cleaning differences are retained.

| Configuration dimension | Required declaration |
| --- | --- |
| diagnostic_modality | `patient_monitoring`, `electrocardiography`, `diagnostic_ultrasound`, or `other_electrodiagnostic`; for `other_electrodiagnostic`, state the measured physiological phenomenon and intended diagnostic output |
| installation | `portable`, `mobile_cart`, or `fixed`; state the installed mass and any separate cart, dock, wall mount, or room-side unit included |
| product_configuration | `host_only`, `host_with_declared_reusable_probes_and_accessories`, or `integrated_system`; list every included host, probe, transducer, patient cable, cuff, sensor module, dock, and accessory |
| display_computing_power | State whether display, local computing, data storage, printer, external power supply, charger, and central or remote computing are integrated, separately included, or excluded |
| battery_boundary | State `no_battery`, `installed_battery_only`, or `installed_and_replacement_batteries`; report chemistry, rated capacity, installed mass, and replacement schedule when applicable |
| consumables_boundary | State whether electrodes, conductive gel, recording media, probe covers, sample lines, wipes, cleaning agents, and other single-use items are excluded from the product, included in delivered packaging, or modelled per use scenario |
| use_and_reprocessing | State annual examinations or monitoring hours, active/idle/off hours, service life, utilization, power mode, patient-contact class, cleaning/disinfection method, cycle frequency, and reusable accessory lifetime |

The reference product is a category configuration, not a single commercial model. Manufacturer-specific models may instantiate this PCR only after their configuration and mass have been declared.

Excluded products are therapeutic electrical or ultrasonic equipment, defibrillators and electrosurgical treatment units, ultraviolet or infrared treatment apparatus, stand-alone sensors or probes sold without a complete apparatus-level diagnostic function, generic computers or displays not dedicated to the declared system, in-vitro diagnostic analyzers, and apparatus based primarily on X-rays or alpha, beta, or gamma radiation. Diagnostic ultrasound is included; ultrasonic therapeutic equipment is excluded. Magnetic-resonance, scintigraphic, nuclear-medicine, or other materially distinct high-infrastructure systems require a dedicated PCR or documented manual methodology review rather than automatic use of this generic rule.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.electro-diagnostic-apparatus-used-in-medical-surgical-dental-or-veterinary-sciences |
| classification_refs | CPC 3.0: 48121 — Electro-diagnostic apparatus, used in medical, surgical, dental or veterinary sciences |
| covered_products | Complete patient monitors, diagnostic ECG apparatus, diagnostic ultrasound systems with declared transducers, and other complete non-therapeutic electro-diagnostic apparatus for human or veterinary use |
| excluded_products | Therapeutic equipment; stand-alone sensors, probes, accessories, batteries, or consumables; ionizing-radiation apparatus; generic IT equipment; in-vitro diagnostic analyzers; a single proprietary model represented as the category |
| representative_product | Mass-normalized finished electro-diagnostic apparatus at the manufacturer gate, configured by modality, portability, host/accessory boundary, display/computing/power architecture, battery boundary, and consumables boundary |
| production_route | Supplier production of electronic, electromechanical, display, power, and modality-specific subassemblies; enclosure and mechanical fabrication; final assembly; software loading; calibration and quality testing; packaging |
| market_state | Finished, calibrated, packaged apparatus at the manufacturer gate; use, disinfection, replacement, and end-of-life stages are separate declared scenarios |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished electro-diagnostic apparatus with the declared configuration at the manufacturer gate |
| How much | 1 kg net mass of accepted apparatus, excluding tertiary transport packaging and excluding any accessory or consumable not explicitly listed in the configuration |
| How well | Complete, calibrated, quality-released, and capable of its declared diagnostic or monitoring function; supplied host, probes, accessories, display/computing, power hardware, battery, and packaged consumables are identified separately |
| How long or cycle | One delivered product mass reference; no service duration or examination count is implied unless a use scenario is declared |
| reference_flow_link | Reference product output of `final_assembly_calibration_and_packaging`; use-service results shall additionally report examinations or monitoring hours over the declared service life |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Electro-diagnostic apparatus, used in medical, surgical, dental or veterinary sciences `81ec0b79-a1f0-4fb0-bc88-e6ac81427ebe` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | diagnostic modality; measured physiological phenomenon or imaging mode; human or veterinary use; portable/mobile-cart/fixed installation; host-only/host-with-accessories/integrated-system boundary; included probes, transducers, cables, cuffs, sensor modules, docks, displays, computers, storage and printers; power-supply architecture; battery chemistry, capacity and replacement boundary; consumables boundary; net apparatus mass; production geography and year; use intensity and service life when use is included; patient-contact class and cleaning/disinfection scenario |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | accepted finished apparatus and every included reusable accessory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize manufacturing inventory to 1 kg net accepted apparatus. Record gross delivered mass, packaging mass, and net apparatus mass separately; do not infer mass from a catalogue family or nominal shipping weight. |
| `configuration_mass_reconciliation` | host, probes/accessories, display/computing, power hardware, installed battery, and included consumables | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The sum of declared configuration masses shall reconcile with net apparatus mass. Consumables and packaging shall remain separate even when supplied in the same shipment. |
| `manufacturing_activity_units` | electricity, fuels, water, compressed air, and process chemicals | Activity-specific property | Native metered unit | Preserve native meter or invoice units and document every conversion before normalization to 1 kg accepted apparatus. Do not substitute rated equipment power for measured manufacturing electricity without disclosure. |
| `use_intensity_basis` | active, idle, standby, charging, and off modes | Energy or power with time | kWh, W, h, examination, or monitoring-hour | Report measured power by mode, mode hours, examinations or monitoring hours, annual utilization, service life, and geography. A product-mass result shall not silently include an unspecified use profile. |
| `battery_accounting` | installed and replacement batteries | Mass and rated energy | kg and Wh | Record battery chemistry, rated capacity, installed mass, number of replacements, charging losses when measured, and end-of-life route separately from the host apparatus. |
| `cleaning_and_consumables_accounting` | disinfectants, water, wipes, probe covers, gel, electrodes, recording media, sample lines, and similar items | Mass, volume, or count | kg, L, or item | Record per-cycle quantity, cycle count, reusable-item lifetime, product concentration, and waste route. Do not embed use consumables in host mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | A verified bill of materials and supplier list for the declared apparatus configuration, with component or material supply datasets identified at the point they enter foreground assembly |
| starting_condition_role | Foreground assembly starts from disclosed electronic, electromechanical, display, computing, storage, power, enclosure, probe/accessory, battery, and packaging inputs; upstream production is represented by traceable background datasets |
| product_classification_scope | Complete electro-diagnostic apparatus corresponding to CPC 3.0 48121 and the scope restrictions in this PCR; accessories are included only when declared as part of the supplied configuration |
| recursive_input_rule | A purchased complete electro-diagnostic apparatus of the same category shall be recorded as a technosphere input with supplier PCR-compliant upstream data and shall not be recursively decomposed again in the same foreground package |
| upstream_dataset_requirement | Use geographically and temporally representative datasets for materials, printed circuit assemblies, displays, semiconductors, batteries, power supplies, cables, probes, packaging, energy, transport, and waste treatment; disclose proxies and data gaps |
| disclosure | Declare modality, installation, configuration boundary, component masses, supplier coverage, manufacturing sites, accepted and rejected output, packaging, use scope, service life, use intensity, cleaning/disinfection, consumables, battery replacements, and end-of-life assumptions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_configuration_separation` | all datasets | Keep host apparatus, reusable probes/accessories, display/computing/storage, power hardware, installed battery, delivered consumables, use consumables, and packaging as separately identifiable inventory blocks before aggregation. | `who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021`; `eu-mdr-2017-745` |
| `boundary_lifecycle_stages` | cradle-to-gate and life-cycle datasets | Include product specification-relevant component production, manufacturing, assembly, testing, and packaging in cradle-to-gate results. Add distribution, installation, use, maintenance, cleaning/disinfection, consumables, battery replacement, data infrastructure, and end of life only when those stages are explicitly claimed and parameterized. | `iec-60601-1-9-2007`; `jacr-ultrasound-lca-2026` |
| `boundary_diagnostic_only` | category eligibility | Include diagnostic ultrasound and electro-diagnostic monitoring or recording systems; exclude therapeutic ultrasound and other equipment whose primary function is treatment. Route ionizing-radiation apparatus and materially distinct high-infrastructure imaging systems to a dedicated PCR or manual review. | `iec-60601-2-37-2024` |
| `boundary_reprocessing` | reusable patient-contact parts | Model cleaning, disinfection, or sterilization according to manufacturer instructions and patient-contact class. Keep console surfaces, reusable cables/cuffs, external probes, endocavitary probes, surgical probes, and single-use covers as distinct scenarios. | `cdc-disinfection-healthcare-equipment-2008`; `eu-mdr-2017-745` |
| `boundary_end_of_life` | end-of-life scenarios | Separate non-infective electrical/electronic equipment, batteries, infectious items, and ordinary packaging. Do not apply a generic WEEE route to equipment expected to be infective before end of life. | `eu-weee-directive-2012-19`; `eu-batteries-regulation-2023-1542` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `electronics_display_and_power_subassembly` | Electronics, display, computing, storage, and power subassembly | required | Always include; record absent blocks as zero only with configuration evidence | Foreground and supplier-linked subassembly production | Per kg accepted subassembly delivered to final assembly |
| `enclosure_and_mechanical_subassembly` | Enclosure, chassis, cart, dock, and mechanical subassembly | required | Always include the mechanical configuration delivered with the apparatus | Foreground and supplier-linked mechanical production | Per kg accepted mechanical subassembly delivered to final assembly |
| `modality_probe_and_accessory_subassembly` | Modality-specific acquisition modules, probes, transducers, cables, cuffs, and accessories | required | Include only items within the declared supplied configuration; identify host-only exclusions | Foreground and supplier-linked diagnostic-function production | Per kg accepted modality subassembly and included reusable accessories |
| `final_assembly_calibration_and_packaging` | Final assembly, software loading, calibration, quality testing, and packaging | required | Always include | Reference-product manufacturing | Per 1 kg net accepted apparatus at manufacturer gate |
| `use_maintenance_and_reprocessing` | Use, maintenance, cleaning/disinfection, consumables, and battery replacement | conditional | Include when a life-cycle or use-service result is claimed | Use-stage scenario | Per declared service life and per examination or monitoring-hour, additionally reported per kg apparatus |
| `end_of_life_management` | De-installation, sorting, battery removal, decontamination, recycling, treatment, and disposal | conditional | Include when an end-of-life or full life-cycle result is claimed | End-of-life scenario | Per kg apparatus and separately per kg battery, consumable, packaging, and infectious fraction |

### Process: Electronics, display, computing, storage, and power subassembly (`electronics_display_and_power_subassembly`)

#### Inputs

##### Product flows

###### Electronic components and printed circuit assemblies (`electronic_components_pcba`)

Record populated and bare printed circuit boards, semiconductors, connectors, memories, communication modules, and other electronic components entering the declared host or acquisition architecture.

- Selected flow: Foreground-resolved electronic components and printed circuit assemblies
- Flow property / unit: Mass / kg
- Amount rule: Supplier mass records or verified bill-of-material mass by component family
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted electronics, display, computing, storage, and power subassembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_supplier_mass`
- Sources: `kokare-cardiac-monitoring-lca-2021`

###### Display, computing, storage, and communication hardware (`display_computing_storage`)

Record integrated displays, processors, local storage, printers, network modules, and dedicated remote computing hardware only when included in the product configuration.

- Selected flow: Foreground-resolved display, computing, storage, and communication hardware
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared mass for each included block
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted electronics, display, computing, storage, and power subassembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_supplier_mass`
- Sources: `who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021`

###### Power supply and installed battery components (`power_and_installed_battery`)

Record internal and external power supplies, chargers, power cables, and installed batteries separately by mass and battery chemistry.

- Selected flow: Foreground-resolved power supply, charger, cable, and battery inputs
- Flow property / unit: Mass / kg
- Amount rule: Measured installed mass by power block and battery chemistry
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted electronics, display, computing, storage, and power subassembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_supplier_mass`
- Sources: `who-oxygen-therapy-monitoring-2020`; `eu-batteries-regulation-2023-1542`

###### Subassembly electricity and utilities (`electronics_subassembly_utilities`)

Record metered electricity, compressed air, process heat, water, and directly used production chemicals for board assembly, soldering, cleaning, inspection, and subassembly testing.

- Selected flow: Foreground-resolved manufacturing utilities
- Flow property / unit: Energy, volume, or mass / native metered unit
- Amount rule: Metered activity allocated to accepted subassembly output using the allocation rules in section 7
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted electronics, display, computing, storage, and power subassembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_activity`
- Sources: `kokare-cardiac-monitoring-lca-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted electronics and power subassembly (`accepted_electronics_subassembly`)

Record the mass of accepted electronics, display, computing, storage, and power subassembly transferred to final assembly.

- Selected flow: Foreground-specific accepted electronics and power subassembly
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per electronics subassembly production batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_scrap_and_rework`
- Sources: `kokare-cardiac-monitoring-lca-2021`

##### Waste flows

###### Electronics scrap, rejects, and spent process materials (`electronics_scrap_and_rejects`)

Record printed-board scrap, component rejects, soldering residues, spent cleaning materials, and rework losses by treatment route; do not net them against accepted output.

- Selected flow: Foreground-resolved electronics manufacturing waste by treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed or inventory-reconciled waste and reject mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted electronics, display, computing, storage, and power subassembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_scrap_and_rework`
- Sources: `kokare-cardiac-monitoring-lca-2021`

##### Elementary flows

### Process: Enclosure, chassis, cart, dock, and mechanical subassembly (`enclosure_and_mechanical_subassembly`)

#### Inputs

##### Product flows

###### Enclosure and mechanical materials (`enclosure_mechanical_materials`)

Record polymers, metals, glass, elastomers, fasteners, cables, wheels, carts, docks, wall mounts, and protective parts included in the declared apparatus configuration.

- Selected flow: Foreground-resolved enclosure and mechanical materials
- Flow property / unit: Mass / kg
- Amount rule: Verified bill-of-material or supplier mass by material family
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted enclosure and mechanical subassembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_supplier_mass`
- Sources: `kokare-cardiac-monitoring-lca-2021`

###### Mechanical fabrication utilities (`mechanical_fabrication_utilities`)

Record electricity, fuels, water, coatings, adhesives, machining fluids, and other direct activities used for moulding, forming, machining, coating, and mechanical assembly.

- Selected flow: Foreground-resolved mechanical fabrication utilities
- Flow property / unit: Energy, volume, or mass / native metered unit
- Amount rule: Metered activity allocated to accepted mechanical output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted enclosure and mechanical subassembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_activity`
- Sources: `kokare-cardiac-monitoring-lca-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted enclosure and mechanical subassembly (`accepted_mechanical_subassembly`)

Record the accepted housing, chassis, cart, dock, mount, and other mechanical configuration transferred to final assembly.

- Selected flow: Foreground-specific accepted enclosure and mechanical subassembly
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted output mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per mechanical subassembly production batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_scrap_and_rework`
- Sources: `kokare-cardiac-monitoring-lca-2021`

##### Waste flows

###### Mechanical scrap and rejected parts (`mechanical_scrap_and_rejects`)

Record polymer, metal, glass, cable, coating, and mixed rejects by material and treatment route.

- Selected flow: Foreground-resolved mechanical manufacturing waste by treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed or inventory-reconciled waste and reject mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted enclosure and mechanical subassembly
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_scrap_and_rework`
- Sources: `kokare-cardiac-monitoring-lca-2021`

##### Elementary flows

### Process: Modality-specific acquisition modules, probes, transducers, cables, cuffs, and accessories (`modality_probe_and_accessory_subassembly`)

#### Inputs

##### Product flows

###### Modality-specific modules and reusable patient interfaces (`modality_modules_and_interfaces`)

Record the acquisition and signal-conditioning module and all reusable patient interfaces included in the supplied configuration. Distinguish monitoring sensor modules, ECG lead systems, ultrasound transducers, and other electro-diagnostic electrodes or interfaces.

- Selected flow: Foreground-resolved modality modules, probes, transducers, patient cables, cuffs, and reusable accessories
- Flow property / unit: Mass / kg
- Amount rule: Measured or supplier-declared mass by separately replaceable module or accessory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg accepted modality subassembly and included reusable accessories
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_accessory_configuration`
- Sources: `who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021`; `eu-mdr-2017-745`

###### Modality subassembly utilities (`modality_subassembly_utilities`)

Record electricity, water, compressed air, adhesives, encapsulants, coupling materials, and test consumables used for acquisition-module and probe/accessory production.

- Selected flow: Foreground-resolved modality-subassembly manufacturing utilities
- Flow property / unit: Energy, volume, or mass / native metered unit
- Amount rule: Metered activity allocated to accepted modality subassembly and accessories
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted modality subassembly and included reusable accessories
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_activity`
- Sources: `iec-60601-2-37-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted modality subassembly and declared accessories (`accepted_modality_subassembly`)

Record accepted acquisition modules and included reusable probes/accessories by modality and replaceable-item identity.

- Selected flow: Foreground-specific accepted modality subassembly and reusable accessories
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted output mass by module and accessory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per modality-subassembly production batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_scrap_and_rework`
- Sources: `who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021`

##### Waste flows

###### Probe, accessory, and module rejects (`modality_rejects`)

Record rejected electronics, cables, probes, transducers, cuffs, sensors, encapsulants, and test items by treatment route.

- Selected flow: Foreground-resolved modality-subassembly waste by treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed or inventory-reconciled reject mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted modality subassembly and included reusable accessories
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_scrap_and_rework`
- Sources: `who-radiotherapy-equipment-ultrasound-2021`

##### Elementary flows

### Process: Final assembly, software loading, calibration, quality testing, and packaging (`final_assembly_calibration_and_packaging`)

#### Inputs

##### Product flows

###### Accepted subassemblies and supplied accessories (`final_assembly_subassemblies`)

Record accepted electronics/power, mechanical, modality, probe/accessory, and separately supplied dedicated display/computing blocks entering final assembly without double counting their upstream burdens.

- Selected flow: Foreground-specific accepted subassemblies and supplied accessories
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass reconciled to the configuration bill of materials
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net accepted finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_mass_balance`
- Sources: `who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021`

###### Final assembly, calibration, and test utilities (`final_assembly_utilities`)

Record metered electricity and direct materials for assembly, software loading, calibration, burn-in, functional testing, quality control, and rework.

- Selected flow: Foreground-resolved final-assembly and test utilities
- Flow property / unit: Energy, volume, or mass / native metered unit
- Amount rule: Metered batch or line activity allocated to accepted finished apparatus
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net accepted finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_manufacturing_activity`
- Sources: `iec-60601-1-9-2007`

###### Primary and secondary packaging (`product_packaging`)

Record packaging supplied with the apparatus by material and mass. Tertiary distribution packaging shall be reported separately when included.

- Selected flow: Foreground-resolved packaging materials
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging mass by material and packaging level
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net accepted finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `iec-60601-1-9-2007`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished electro-diagnostic apparatus (`finished_electrodiagnostic_apparatus`)

Record only quality-released product matching the declared modality and configuration. Host, reusable accessories, installed battery, included delivered consumables, and packaging masses remain traceable below the aggregate.

- Selected flow: Electro-diagnostic apparatus, used in medical, surgical, dental or veterinary sciences `81ec0b79-a1f0-4fb0-bc88-e6ac81427ebe`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net accepted apparatus
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Final assembly rejects and packaging waste (`final_assembly_waste`)

Record rejected assemblies, replaced test parts, calibration consumables, and packaging waste by material and treatment route.

- Selected flow: Foreground-resolved final-assembly and packaging waste by treatment route
- Flow property / unit: Mass / kg
- Amount rule: Weighed or inventory-reconciled waste and reject mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net accepted finished apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_mass_balance`
- Sources: `iec-60601-1-9-2007`

##### Elementary flows

### Process: Use, maintenance, cleaning/disinfection, consumables, and battery replacement (`use_maintenance_and_reprocessing`)

#### Inputs

##### Product flows

###### Electricity by operating mode (`use_electricity`)

Record measured active, idle, standby, charging, and off-mode electricity over the declared annual use and service life. State examinations, monitoring hours, occupancy, power-management settings, and electricity geography.

- Selected flow: Geography-specific electricity supply
- Flow property / unit: Energy / kWh
- Amount rule: Sum of measured mode power multiplied by mode hours, plus separately measured charging losses when applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared service life and per examination or monitoring-hour; additionally per kg apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_use_intensity_and_power`
- Sources: `iec-60601-1-9-2007`; `jacr-ultrasound-lca-2026`

###### Replacement parts and batteries (`maintenance_and_replacement_parts`)

Record replaced probes, cables, cuffs, modules, power supplies, displays, batteries, and other parts over the service life without counting the original installed item twice.

- Selected flow: Foreground-resolved replacement parts and batteries
- Flow property / unit: Mass and count / kg and item
- Amount rule: Service records multiplied by measured replacement-item mass; batteries remain separated by chemistry
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared service life and per examination or monitoring-hour; additionally per kg apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maintenance_and_battery_records`
- Sources: `who-oxygen-therapy-monitoring-2020`; `eu-batteries-regulation-2023-1542`

###### Diagnostic consumables (`diagnostic_consumables`)

Record modality-specific single-use electrodes, gel, recording media, probe covers, sample lines, wipes, and similar items actually consumed. Keep reusable accessories outside this row.

- Selected flow: Foreground-resolved diagnostic consumables by material or product type
- Flow property / unit: Mass, volume, or count / kg, L, or item
- Amount rule: Purchasing, issue, or procedure records reconciled to declared examinations or monitoring hours
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per examination or monitoring-hour over the declared service life; additionally per kg apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables_and_reprocessing`
- Sources: `who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021`; `jacr-ultrasound-lca-2026`

###### Cleaning and disinfection inputs (`cleaning_and_disinfection_inputs`)

Record cleaning agents, disinfectants, water, wipes, probe covers, energy, and any sterilization service according to patient-contact class and manufacturer instructions. Distinguish console surfaces, external probes, endocavitary probes, and surgical probes.

- Selected flow: Foreground-resolved cleaning, disinfection, and sterilization inputs
- Flow property / unit: Mass, volume, energy, or count / kg, L, kWh, or item
- Amount rule: Per-cycle measured or purchasing-reconciled quantity multiplied by documented cycle count
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per examination or monitoring-hour over the declared service life; additionally per kg apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables_and_reprocessing`
- Sources: `cdc-disinfection-healthcare-equipment-2008`; `eu-mdr-2017-745`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Delivered diagnostic or monitoring service (`diagnostic_service_output`)

Report examination count and/or monitoring hours as a complementary service denominator. Do not replace the mass reference flow with a service count.

- Selected flow: Foreground-specific diagnostic examination or monitoring service
- Flow property / unit: Count or duration / examination or h
- Amount rule: Completed examinations or verified monitoring hours over the declared period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per declared service life and additionally per kg apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_use_intensity_and_power`
- Sources: `jacr-ultrasound-lca-2026`

##### Waste flows

###### Used consumables, replaced parts, and reprocessing waste (`use_stage_waste`)

Record infectious and non-infectious fractions, used gel and wipes, probe covers, electrodes, sample lines, recording media, replaced parts, and spent batteries by treatment route.

- Selected flow: Foreground-resolved use-stage waste by infection status, material, and treatment route
- Flow property / unit: Mass and count / kg and item
- Amount rule: Weighed waste, purchase-to-waste reconciliation, and service records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per examination or monitoring-hour over the declared service life; additionally per kg apparatus
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_consumables_and_reprocessing`
- Sources: `cdc-disinfection-healthcare-equipment-2008`; `eu-weee-directive-2012-19`; `eu-batteries-regulation-2023-1542`

##### Elementary flows

### Process: De-installation, sorting, battery removal, decontamination, recycling, treatment, and disposal (`end_of_life_management`)

#### Inputs

##### Product flows

##### Waste flows

###### Retired apparatus and separately collected batteries (`retired_apparatus_input`)

Record retired host, reusable accessories, batteries, remaining consumables, and packaging as separate waste inputs. State infection status and any required decontamination before ordinary electrical/electronic treatment.

- Selected flow: Foreground-resolved retired apparatus and battery waste
- Flow property / unit: Mass / kg
- Amount rule: Measured retired mass by host, accessory, battery chemistry, packaging, and infectious status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg apparatus entering end-of-life management
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life_records`
- Sources: `eu-weee-directive-2012-19`; `eu-batteries-regulation-2023-1542`; `cdc-disinfection-healthcare-equipment-2008`

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered material and reusable parts (`recovered_materials_and_parts`)

Record measured recovered metals, polymers, glass, circuit-board fractions, reusable parts, and batteries leaving sorting or treatment; apply section 7 consistently to recycling credits.

- Selected flow: Foreground-resolved recovered material or reusable part
- Flow property / unit: Mass / kg
- Amount rule: Weighed recovered output by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg apparatus entering end-of-life management
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life_records`
- Sources: `eu-weee-directive-2012-19`; `eu-batteries-regulation-2023-1542`

##### Waste flows

###### Residual treatment and disposal outputs (`end_of_life_residuals`)

Record hazardous, infectious, mixed, incinerated, and landfilled residuals without subtracting recovered outputs.

- Selected flow: Foreground-resolved treatment residual by route
- Flow property / unit: Mass / kg
- Amount rule: Weighed residual output by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per kg apparatus entering end-of-life management
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_end_of_life_records`
- Sources: `eu-weee-directive-2012-19`; `cdc-disinfection-healthcare-equipment-2008`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared manufacturing lines and facilities | Subdivide and meter modality, subassembly, assembly, calibration, test, and packaging activities directly whenever technically feasible. | `iec-60601-1-9-2007` |
| `allocation_shared_manufacturing` | residual shared utilities and overhead | When direct metering is not feasible, allocate electricity and utilities using a documented causal driver such as machine time, line time, test duration, or batch occupancy. Use mass only when no more causal driver is available, and disclose sensitivity. | `iec-60601-1-9-2007` |
| `allocation_rework_and_rejects` | rework, scrap, and rejected apparatus | Assign rework and reject burdens to the production batch that caused them; do not dilute them across unrelated product families. | `kokare-cardiac-monitoring-lca-2021` |
| `allocation_shared_use_infrastructure` | central stations, remote displays, servers, storage, printers, and shared chargers | Allocate shared use-stage equipment by measured device-hours, monitoring-hours, examinations, stored data, or another documented causal service driver; report excluded shared infrastructure. | `jacr-ultrasound-lca-2026` |
| `allocation_recycling` | recovered materials and reusable parts | Report gross treatment burdens and recovered outputs. Apply cut-off, substitution, or another recycling approach only as required by the governing study method; state the approach and do not combine approaches within one result. | `eu-weee-directive-2012-19`; `eu-batteries-regulation-2023-1542` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_supplier_mass` | `electronics_display_and_power_subassembly`; `enclosure_and_mechanical_subassembly` | component and material inputs | bill of materials, supplier specification, receiving record, measured mass | part id; supplier; material or component family; quantity; unit mass; included configuration block; battery chemistry and capacity when applicable | Reconcile engineering BOM, procurement records, and measured sample mass for the exact configuration | kg, item, Wh | each design revision and production period | current design and reporting year | all manufacturing sites and material suppliers in scope | Sum quantity multiplied by verified unit mass; retain supplier-specific datasets before normalization | revision-controlled BOM, scale calibration, supplier declaration, sampling record |
| `cp_manufacturing_activity` | `all_manufacturing_processes` | electricity, fuels, water, compressed air, chemicals, test and calibration activity | meters, invoices, equipment logs, batch travellers | activity type; meter start/end; native unit; batch; accepted output; machine time; test time; allocation driver | Prefer submetering; otherwise reconcile invoices to line logs and documented allocation drivers | native meter unit, h | each batch or at least monthly | representative continuous 12-month period where available | each foreground and material supplier manufacturing site | Allocate by direct measurement, machine time, line time, test duration, or disclosed fallback driver | meter identification, calibration, invoice reconciliation, production log |
| `cp_output_scrap_and_rework` | `all_subassembly_processes` | accepted output, rejects, scrap, and rework | production and waste records | accepted mass; rejected mass; reworked mass; material; waste code; destination | Weigh outputs and reconcile to batch input and stock change | kg | each batch | same period as manufacturing activity | each manufacturing site | Sum by product, material, and destination; keep rework separate | calibrated scales, waste transfer record, mass-balance sign-off |
| `cp_accessory_configuration` | `modality_probe_and_accessory_subassembly` | host, probe, transducer, cable, cuff, sensor module, dock, and accessory boundary | configuration BOM and product documentation | modality; installation; host id; accessory id; included/excluded status; unit mass; reusable/single-use status; patient-contact class | Verify supplied configuration against BOM, packing list, and instructions for use | kg, item | each configuration revision | current configuration | all configurations represented by the dataset | Sum included reusable items separately from host; never average across undeclared configurations | signed configuration record, packing list, instructions for use |
| `cp_final_assembly_mass_balance` | `final_assembly_calibration_and_packaging` | transferred subassemblies, finished product, rejects, and calibration materials | batch traveller, quality-release record, scale record | input masses; net accepted mass; rejected mass; rework; serial or lot; calibration status | Reconcile every released batch to configuration BOM and weighed output | kg | each batch | reporting period | each final assembly site | Divide net accepted batch inventory by net accepted output mass | calibrated scale, quality-release signature, reconciliation report |
| `cp_packaging_records` | `final_assembly_calibration_and_packaging` | primary, secondary, and tertiary packaging | packaging BOM, supplier record, sample weighing | material; packaging level; unit mass; quantity; recycled content if documented | Measure representative packaging sets and reconcile to purchased quantity | kg | each packaging revision | current packaging design | each packaging configuration | Sum by material and packaging level per net kg apparatus | scale calibration, packaging specification, sample record |
| `cp_use_intensity_and_power` | `use_maintenance_and_reprocessing` | examination or monitoring service and electricity by mode | plug meter, onboard log, facility meter, scheduling record | active/idle/standby/charging/off power; mode hours; examinations; monitoring hours; annual utilization; service life; geography | Measure representative operation and reconcile mode hours to scheduling or monitoring logs | W, h, kWh, examination | representative measurement campaign plus annual reconciliation | declared use year and service life | each use setting represented | Sum mode power multiplied by mode time and separately report service denominator | meter calibration, log completeness, sampling plan, scenario approval |
| `cp_maintenance_and_battery_records` | `use_maintenance_and_reprocessing` | replacement parts, batteries, and maintenance | service work orders, parts issue, battery test and purchasing records | part id; mass; quantity; date; reason; battery chemistry; capacity; charging data; disposal route | Reconcile service records to installed population and service life | kg, item, Wh | each maintenance event | full declared service life or justified projection | each use setting represented | Sum original and replacement parts separately; normalize to service and mass denominators | work order, part receipt, battery test, traceable projection method |
| `cp_consumables_and_reprocessing` | `use_maintenance_and_reprocessing` | consumables, cleaning, disinfection, sterilization, and resulting waste | purchase/issue records, procedure logs, reprocessing logs, waste records | item or chemical; concentration; quantity; cycle; patient-contact class; probe/accessory id; water; energy; waste route | Reconcile issued quantities and documented cycles to examinations or monitoring hours; follow manufacturer instructions | kg, L, kWh, item, cycle | each procedure or representative campaign with annual reconciliation | declared use year and service life | each clinical or veterinary setting represented | Sum by modality, contact class, and cycle; multiply per-cycle records only by verified cycle count | instructions for use, infection-control protocol, lot record, waste manifest |
| `cp_end_of_life_records` | `end_of_life_management` | retired equipment, decontamination, batteries, recovery, and residuals | asset retirement, decontamination certificate, treatment and weighing records | host/accessory/battery mass; infection status; decontamination; treatment route; recovered output; residual | Trace representative retired units through authorized treatment | kg, item | each retirement batch | declared retirement period | all end-of-life routes represented | Mass-balance input to recovered and residual outputs; retain route-specific results | asset register, decontamination certificate, scale ticket, treatment certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_manufacturing_per_kg` | manufacturing inventory rows | Normalized amount = batch amount divided by net accepted apparatus or subassembly mass; exclude rework output from the denominator until accepted | batch activity; accepted output mass | amount per kg accepted output | `kokare-cardiac-monitoring-lca-2021` |
| `calc_configuration_mass_balance` | final apparatus configuration | Net apparatus mass = host + included reusable probes/accessories + integrated/separately included display/computing/storage + power hardware + installed battery; delivered consumables and packaging are separate checks | configuration masses | reconciled net apparatus mass | `who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021` |
| `calc_use_electricity` | use electricity | Lifetime electricity = sum over modes of measured power multiplied by mode hours, divided by 1000 for W-to-kWh conversion, plus separately measured charging losses | mode power; mode time; service life; charging loss | kWh per service life, examination or monitoring-hour, and kg apparatus | `iec-60601-1-9-2007`; `jacr-ultrasound-lca-2026` |
| `calc_consumables_and_disinfection` | consumables and reprocessing | Lifetime quantity = measured or purchase-reconciled quantity per cycle multiplied by verified cycle count; do not apply one modality's cycle to another | per-cycle quantity; examinations or monitoring events; contact class; reuse count | kg, L, kWh, or items per service denominator and kg apparatus | `cdc-disinfection-healthcare-equipment-2008`; `eu-mdr-2017-745` |
| `calc_replacement_parts` | maintenance and batteries | Lifetime replacement inventory = sum of actual replacement events; projections shall use documented survival or service assumptions and be labelled as projections | service records; part mass; battery chemistry; service life | replacement mass and count per service life and kg apparatus | `eu-batteries-regulation-2023-1542` |
| `calc_end_of_life_mass_balance` | end-of-life treatment | Retired input mass = recovered product output + residual waste output + measured direct releases, within documented stock change and moisture corrections | retired mass; recovered mass; residual mass; direct releases | route-specific mass balance | `eu-weee-directive-2012-19`; `eu-batteries-regulation-2023-1542` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_and_configuration` | all datasets | Identify modality, installation, host/accessory boundary, display/computing/power architecture, battery boundary, consumables boundary, product mass, and intended human or veterinary use; do not represent a model-family average without sales-weighted configuration evidence | configuration BOM, instructions for use, packing list, product label, weighting method |
| `dq_mass_completeness` | manufacturing and end of life | Reconcile material and component inputs, accepted output, rejects, stock change, packaging, batteries, recovered outputs, and residuals; disclose unresolved mass | signed mass balance and calibrated scale records |
| `dq_temporal_and_geographic` | all foreground and background data | Use data representative of the declared production and use geography and year; identify supplier, grid, treatment, or use proxies | dataset metadata, supplier coverage table, proxy log |
| `dq_use_profile` | use-stage results | Report measured power modes, hours, examinations or monitoring hours, utilization, service life, maintenance, data infrastructure, and electricity geography; provide sensitivity for materially uncertain drivers | meter logs, scheduling records, service records, scenario analysis |
| `dq_reprocessing` | cleaning and disinfection | Match patient-contact class and manufacturer instructions; distinguish console, external probe, endocavitary probe, surgical probe, reusable accessory, and single-use cover scenarios | instructions for use, infection-control approval, reprocessing logs |
| `dq_quantitative_evidence` | all inventory amounts | Use foreground records or explicit calculations from collected records. No category-wide default amount from this PCR may replace missing foreground data | collection protocol linkage, raw record retention, calculation audit |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm the product flow UUID, Mass property UUID, Units of mass UUID, kg reference unit, and 1 kg amount; reject a stand-alone probe, sensor, accessory, therapeutic unit, ionizing-radiation apparatus, or single model as the category reference. | |
| `validate_configuration_declaration` | product identity | Require every configuration dimension in section 1 and every qualifier in section 3; fail validation when host/accessory, display/computing/power, battery, consumables, or installation boundaries are ambiguous. | `who-oxygen-therapy-monitoring-2020`; `who-radiotherapy-equipment-ultrasound-2021`; `eu-mdr-2017-745` |
| `validate_modality_separation` | aggregation and comparison | Do not aggregate monitoring, ECG, ultrasound, or other electro-diagnostic apparatus without retaining modality-specific configuration, manufacturing, use, consumable, and disinfection records. | `iec-60601-2-37-2024`; `who-oxygen-therapy-monitoring-2020` |
| `validate_mass_balance` | manufacturing and end of life | Check net apparatus mass against host, accessories, display/computing, power, battery, consumables, packaging, rejects, and treatment outputs; report any unreconciled mass. | `kokare-cardiac-monitoring-lca-2021` |
| `validate_use_intensity` | use-stage claims | Require annual examinations or monitoring hours, mode power and time, service life, utilization, maintenance, charging, data infrastructure, and electricity geography; a generic “in use” scenario is inconclusive. | `iec-60601-1-9-2007`; `jacr-ultrasound-lca-2026` |
| `validate_disinfection` | reprocessing claims | Require patient-contact class, manufacturer method, agent and concentration, quantity, cycle count, reusable-item lifetime, and waste route; probe covers shall not silently eliminate required disinfection. | `cdc-disinfection-healthcare-equipment-2008`; `eu-mdr-2017-745` |
| `validate_battery_and_consumables` | product and use boundary | Separate original installed batteries, replacements, charging losses, diagnostic consumables, cleaning materials, and delivered starter supplies; reject double counting between product mass and use inventory. | `who-oxygen-therapy-monitoring-2020`; `eu-batteries-regulation-2023-1542` |
| `validate_source_and_protocol_links` | all constraining rows and rules | Every external-source or source-rule claim shall cite a listed source; every collected or calculated foreground row shall link to a defined collection protocol. | |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-category dataset for a declared electro-diagnostic apparatus configuration; may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Product manufacturing, procurement comparison, equipment-fleet modelling, and downstream `process` or `lifecyclemodel` projections with explicit modality and scenario qualifiers |
| allowed_use | Cradle-to-gate comparison of functionally and configurationally comparable apparatus; life-cycle or use-service modelling when service life, use intensity, reprocessing, consumables, battery, data infrastructure, and end-of-life scenarios are complete |
| excluded_use | Clinical safety or efficacy claims; comparison across undeclared modalities or configurations; treatment equipment; stand-alone sensors/probes; ionizing-radiation systems; extrapolation from a single model to the whole category without weighting evidence |
| required_metadata | PCR id and version; CPC ref; modality; intended diagnostic output; human/veterinary use; installation; host/accessory/display/computing/power/battery/consumables boundaries; net and gross mass; manufacturing geography/year; supplier coverage; use scenario and service denominator when included; cleaning/disinfection; end-of-life route; allocation method; source and protocol ids |
| required_quality_disclosure | BOM and supplier coverage; mass-balance result; foreground measurement coverage; proxy list; temporal and geographic representativeness; uncertainty and sensitivity for use intensity, service life, replacements, reprocessing, and end of life; unresolved data gaps |
| update_trigger | Material change in modality scope, product architecture, reference UUIDs, manufacturing route, configuration mass, software or computing boundary, battery chemistry, supplied accessories, use profile, reprocessing instructions, consumables, regulation, evidence, or end-of-life route |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `who-oxygen-therapy-monitoring-2020` | official_guidance | World Health Organization, *COVID-19 technical specifications for procurement of oxygen therapy and monitoring devices*, WHO/2020-nCoV/MedDev/TS/O2T.V1, https://cdn.who.int/media/docs/default-source/medical-devices/tech-specs-o2-therapy-monitoring-final-draft.pdf?sfvrsn=d684989_2 (retrieved 2026-08-09) | Patient-monitor and ECG functional blocks, display, power, rechargeable battery, accessories, reusable probes, consumables, maintenance, and configuration disclosure |
| `who-radiotherapy-equipment-ultrasound-2021` | official_guidance | World Health Organization and International Atomic Energy Agency, *Technical specifications of radiotherapy equipment for cancer treatment*, ISBN 978-92-4-001998-0, section 4.4 and Annex 10, https://iris.who.int/bitstream/handle/10665/339912/9789240019980-eng.pdf (retrieved 2026-08-09) | Diagnostic ultrasound console, transducer, display, computing, storage, connectivity, gel, and quality-assurance configuration |
| `iec-60601-1-9-2007` | standard | IEC 60601-1-9:2007+AMD1:2013+AMD2:2020 CSV, *Medical electrical equipment — Requirements for environmentally conscious design*, https://webstore.iec.ch/en/publication/2601 (retrieved 2026-08-09) | Life-cycle stage coverage from specification and manufacturing through use and end of life |
| `iec-60601-2-37-2024` | standard | IEC 60601-2-37:2024, *Particular requirements for the basic safety and essential performance of ultrasonic medical diagnostic and monitoring equipment*, https://webstore.iec.ch/en/publication/78093 (retrieved 2026-08-09) | Diagnostic ultrasound scope and explicit exclusion of ultrasonic therapeutic equipment |
| `eu-mdr-2017-745` | official_guidance | Regulation (EU) 2017/745 on medical devices, ELI http://data.europa.eu/eli/reg/2017/745/oj (retrieved 2026-08-09) | Intended purpose, accessory and generic-device-group distinctions, separate accessory classification, reusable-device cleaning/disinfection instructions, and configuration boundary |
| `cdc-disinfection-healthcare-equipment-2008` | official_guidance | US Centers for Disease Control and Prevention, *Guideline for Disinfection and Sterilization in Healthcare Facilities (2008): Recommendations*, https://www.cdc.gov/infection-control/hcp/disinfection-sterilization/summary-recommendations.html (retrieved 2026-08-09) | Risk-based cleaning, disinfection and sterilization; distinct external, endocavitary and surgical probe scenarios; probe-cover limitation |
| `eu-weee-directive-2012-19` | official_guidance | Directive 2012/19/EU on waste electrical and electronic equipment, ELI http://data.europa.eu/eli/dir/2012/19/oj (retrieved 2026-08-09) | Electrical/electronic end-of-life boundary and separate treatment of equipment expected to be infective |
| `eu-batteries-regulation-2023-1542` | official_guidance | Regulation (EU) 2023/1542 concerning batteries and waste batteries, ELI http://data.europa.eu/eli/reg/2023/1542/oj (retrieved 2026-08-09) | Installed and replacement battery identity, mass, spare/replacement boundary, separate collection, and end-of-life accounting |
| `kokare-cardiac-monitoring-lca-2021` | literature | Kokare, S. et al., “A comparative life cycle assessment of stretchable and rigid electronics: a case study of cardiac monitoring devices,” *International Journal of Environmental Science and Technology* 19, 3087–3102, https://doi.org/10.1007/s13762-021-03388-x | Cardiac-monitor materials and manufacturing decomposition: enclosure, printed circuit boards, semiconductors, wires, assembly, battery, scrap, and end-of-life separation |
| `jacr-ultrasound-lca-2026` | literature | Thiel, C. et al., “Harmonizing Diagnostic Ultrasound Practice with Environmental Sustainability: A Life Cycle Assessment of Diagnostic Ultrasound in a Single Adult University Hospital,” *Journal of the American College of Radiology* 23(4), 522–531, https://doi.org/10.1016/j.jacr.2025.09.031 | Use-stage boundary for ultrasound equipment, electricity, production/disposal, examination supplies, data storage, and interpretation equipment |
