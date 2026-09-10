---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-automatic-data-processing-machines-whether-or-not-containing-in-the-same-housing-565130a9
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other automatic data processing machines whether or not containing in the same housing one or two of the following types of units: storage units, input units, output units

## 1. Scope and Applicability

This PCR applies to a specifically declared finished automatic data processing machine within the residual CPC 3.0 class 45250. The machine performs data processing and may contain, in the same housing, none, one, or two of these unit types: storage, input, and output. It is used only when the product is not more specifically covered by the neighbouring portable-machine, combined central-processing/input/output-machine, system, peripheral, storage-unit, other-unit, or parts subclasses.

Every foreground data package shall identify the concrete computing architecture; processor arrangement; housing form; the exact storage, input, and output units inside the housing; memory; expansion and accelerator configuration; power-supply and cooling design; firmware or operating environment; intended workload and use; included accessories; saleable configuration identifier; and net product mass. A record for one server, workstation, thin client, appliance, mainframe, embedded device, or other narrow configuration shall not be extrapolated to the whole CPC leaf. A production-weighted family dataset is allowed only when each included configuration is separately identified and weighted with audited production mass.

This PCR covers purchased components and subassemblies entering the declared manufacturing system, receiving and kitting, optional board mounting, system integration, firmware or software loading, configuration, testing, rework, final finishing, packaging, and producer-gate release. Upstream component production is represented by linked supplier datasets. Use, maintenance, refurbishment, and end-of-life are outside the default foreground boundary but shall be attached explicitly when a cradle-to-grave lifecycle model is produced.

Excluded products include portable automatic data processing machines of CPC 45220; machines of CPC 45230 containing at least a central processing unit and input and output units in the same housing; machines presented as systems under CPC 45240; separately supplied input/output units, storage units, other automatic data processing units, parts, and accessories; and products whose principal function belongs to telecommunications, consumer electronics, industrial control, or another more specific category. Classification is based on the product as supplied, not on a convenient server or embedded-computer proxy.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-automatic-data-processing-machines-whether-or-not-containing-in-the-same-housing-565130a9 |
| classification_refs | CPC 3.0: 45250, exact classification context |
| covered_products | Specifically declared residual automatic data processing machines, whether or not containing in the same housing one or two of storage, input, and output unit types, when no more specific computing-machine subclass applies |
| excluded_products | CPC 45220 portable machines; CPC 45230 combined CPU/input/output machines; CPC 45240 systems; separately supplied input/output or storage units; other ADP units; parts and accessories; telecommunications, consumer-electronics, industrial-control, and other more specifically classified products |
| representative_product | One declared saleable configuration of an in-scope automatic data processing machine, normalized to 1 kg net product mass at the producer gate |
| production_route | Purchased component and subassembly receipt; kitting; board and system integration; firmware or software loading; configuration and testing; rework where required; finishing, packaging, and producer-gate release |
| market_state | Finished, tested, configured, packaged automatic data processing machine at the producer gate, with architecture, housing-unit combination, configuration, intended use, and included accessories declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a finished automatic data processing machine of one explicitly declared in-scope architecture, housing-unit combination, configuration, and intended use |
| How much | 1 kg net mass of the declared saleable machine configuration at the producer gate |
| How well | Passes the declared product specification and final test for the named configuration; contains only the declared in-housing storage, input, and output units and included accessories |
| How long or cycle | One completed manufacturing and producer-gate release cycle; design lifetime and use profile are metadata and are not embedded in the 1 kg reference amount |
| reference_flow_link | One declared configuration normalized from measured conforming unit mass to 1 kg net product; report the corresponding machine count and do not treat a narrow configuration as a leaf-wide average |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other automatic data processing machines whether or not containing in the same housing one or two of the following types of units: storage units, input units, output units `ea5779a6-4214-400c-b380-155efbd5b98e` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | computing architecture and processor arrangement; housing form; in-housing storage-unit presence and specification; in-housing input-unit presence and specification; in-housing output-unit presence and specification; memory; accelerators and expansion; power supply; cooling; firmware or operating environment; intended workload and use; saleable configuration identifier; included accessories; net unit mass; manufacturing site and period; producer-gate boundary |

When constructing a foreground data package, all `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product specification, or equivalent data-package fields. Missing architecture, housing-unit combination, configuration, intended use, or net unit mass makes the reference flow incomplete. Results for a single server, embedded device, or any other narrow design shall remain specific to that design unless audited production weighting supports a declared configuration family.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net mass of conforming finished machine, excluding transport packaging and separately supplied accessories; retain measured net mass per physical machine and the corresponding machine count. |
| `component_mass` | Components, subassemblies, consumables, products, and wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured mass by material or component identity and configuration; do not convert item counts to mass without a configuration-specific measured or supplier-declared mass. |
| `electricity_measurement` | Assembly, configuration, testing, rework, and finishing electricity | Energy | kWh | Use calibrated meter readings or reconciled equipment power and operating time; keep facility electricity separate from test-device use-phase electricity. |
| `unit_to_mass_normalization` | Physical machine output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Divide configuration-specific batch inputs and outputs by measured conforming net output mass; separately report units produced so unlike machine configurations are not silently averaged. |

## 5. System Boundary

The default deliverable is a producer-gate foreground manufacturing data package. A downstream `lifecyclemodel` may extend it to raw-material acquisition, use, maintenance, refurbishment, and end-of-life, but shall keep the declared configuration and prevent overlap with linked component or treatment datasets.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased electronic, electromechanical, mechanical, power, thermal-management, housing, storage, input, output, packaging, and software-bearing components or subassemblies received at the declared manufacturing site |
| starting_condition_role | Upstream product inputs to the first foreground receiving, kitting, board-integration, or system-assembly operation |
| product_classification_scope | Residual CPC 45250 automatic data processing machines represented only by the declared architecture, housing-unit combination, configuration, and intended use |
| recursive_input_rule | An input that is already a finished in-scope CPC 45250 machine shall be recorded as an upstream product flow and shall not be decomposed again inside the receiving foreground process; disclose its configuration and upstream dataset. |
| upstream_dataset_requirement | Link supplier- and technology-appropriate datasets for semiconductors, printed circuit assemblies, memory, storage, power supplies, cooling, chassis, cables, batteries, displays or input devices when included, packaging, electricity, transport, and waste treatment; disclose every proxy and mismatch. |
| disclosure | Declare architecture, processor arrangement, housing form, exact in-housing storage/input/output combination, bill of materials, configuration identifier, intended use, site, reporting period, included assembly and test operations, upstream datasets, packaging treatment, and exact producer-gate terminal condition. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | Producer-gate manufacturing | Include receiving and kitting, board mounting when performed on site, system integration, firmware or software loading, configuration, testing and burn-in when performed, rework, cleaning, final finishing, packaging, utilities, direct releases, rejects, and manufacturing wastes. | itu-l1410-2024 |
| `boundary_upstream_components` | Purchased inputs | Represent every material component and subassembly with an upstream dataset or a disclosed unresolved proxy; do not treat a purchased populated board, storage unit, power supply, housing, or cooling assembly as burden-free. | itu-l1410-2024; ec-pef-method-2021 |
| `boundary_configuration_specificity` | Product category coverage | Preserve architecture, housing-unit combination, installed components, firmware or operating environment, intended use, and configuration identity. Never extrapolate one server, workstation, thin client, appliance, embedded device, or other narrow design to the whole residual leaf. | un-cpc-3-2025; energy-star-computers-9-2025 |
| `boundary_software_and_test` | Software-bearing product and testing | Include on-site loading, configuration, update, and test energy and materials. Model software development, remote services, and use-phase operation only when the declared lifecycle boundary includes them, and disclose their allocation separately. | itu-l1410-2024 |
| `boundary_downstream_extension` | Lifecycle model | When use, maintenance, refurbishment, or end-of-life is claimed, add configuration-specific scenarios and datasets without duplicating producer-gate or upstream component burdens. | itu-l1410-2024 |
| `boundary_no_silent_cutoff` | All foreground operations | A known input, output, waste, or direct release shall not be omitted solely because a matching dataset is unavailable; record it, select a disclosed proxy, or document the exclusion and expected effect. | itu-l1410-2024; ec-pef-method-2021 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `component_receipt_and_kitting` | Component receipt, inspection, and configuration-specific kitting | required | Always | Establish the audited bill of materials and incoming component set for the declared configuration | Accepted component kit required for conforming output |
| `board_and_system_integration` | Board mounting and system integration | required | Always; board mounting rows apply only when performed inside the declared foreground site | Integrate processor, memory, storage, input/output units, power, cooling, housing, and interconnections | Assembled machines transferred to configuration and testing |
| `configuration_and_testing` | Firmware or software loading, configuration, testing, burn-in, and rework | required | Always; burn-in and rework inputs apply when performed | Produce a configuration-controlled, tested machine and record rejects and replacements | Tested conforming machines transferred to gate release |
| `finishing_and_gate_release` | Final finishing, packaging, and producer-gate release | required | Always | Complete labels, included accessories, packaging, mass verification, and saleable release | 1 kg net mass of conforming finished machine |

### Process: Component receipt, inspection, and configuration-specific kitting (`component_receipt_and_kitting`)

#### Inputs

##### Product flows

###### Electronic components and populated assemblies (`electronic_components`)

Record processor and accelerator devices, populated printed circuit assemblies, memory, storage, interface controllers, networking hardware when part of the machine, and other electronic items by part number and configuration.

- Selected flow: Supplier- and technology-specific electronic component and populated-assembly product flows selected in the concrete dataset
- Flow property / unit: Mass / kg; item counts retained as supporting records
- Amount rule: Net accepted quantity issued to the declared configuration from purchase, stock, return, and scrap reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming output mass of the declared configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_and_component_records`
- Sources: `itu-l1410-2024`

###### Mechanical, power, thermal, and housing assemblies (`mechanical_power_thermal_parts`)

Record chassis, enclosures, fasteners, cables, connectors, power supplies, batteries when included, fans, heat sinks, liquid-cooling parts, and other mechanical or thermal-management items.

- Selected flow: Material-, supplier-, and technology-specific component product flows selected in the concrete dataset
- Flow property / unit: Mass / kg; item counts retained as supporting records
- Amount rule: Net accepted quantity issued to the declared configuration from purchase, stock, return, and scrap reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming output mass of the declared configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_and_component_records`
- Sources: `itu-l1410-2024`

###### In-housing storage, input, and output units (`housing_unit_combination`)

Record the exact storage, input, and output units installed in the same housing and explicitly record absence for every unit type not installed.

- Selected flow: Unit-specific Tiangong product flows selected for the concrete configuration
- Flow property / unit: Mass / kg; item counts and capacity or interface specifications retained
- Amount rule: Measured or supplier-declared mass and issued count for each installed in-housing unit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per conforming output mass of the declared configuration
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom_and_component_records`
- Sources: `un-cpc-3-2025`; `energy-star-computers-9-2025`

##### Waste flows

###### Incoming packaging and rejected component waste (`incoming_component_waste`)

Record incoming packaging and rejected components by material, hazard status, and treatment route.

- Selected flow: Material- and treatment-specific waste flows selected in the concrete dataset
- Flow property / unit: Mass / kg
- Amount rule: Measured waste leaving receiving and kitting, net of documented return to supplier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted component kit output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_rework_and_yield`
- Sources: `itu-l1410-2024`

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted configuration-specific component kit (`accepted_component_kit`)

Transfer the audited component kit to integration without losing part-number, mass, configuration, or supplier-dataset links.

- Selected flow: Internal accepted component kit; no external product-flow UUID required
- Flow property / unit: Mass / kg
- Amount rule: Sum accepted issued components after stock, return, and reject reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted component kit
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_bom_and_component_records`
- Sources: `itu-l1410-2024`

##### Waste flows

##### Elementary flows

### Process: Board mounting and system integration (`board_and_system_integration`)

#### Inputs

##### Product flows

###### Accepted component kit input (`component_kit_input`)

Carry the complete configuration-specific kit into assembly.

- Selected flow: Internal accepted component kit
- Flow property / unit: Mass / kg
- Amount rule: Measured kit mass transferred into integration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembled machine output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_transfer_and_mass`
- Sources: `itu-l1410-2024`

###### Assembly consumables (`assembly_consumables`)

Record solder, flux, adhesives, thermal interface materials, cleaning agents, process gases, and other consumables when used; record populated boards as purchased inputs when board mounting is outside the site.

- Selected flow: Substance- and formulation-specific product flows selected in the concrete dataset
- Flow property / unit: Mass / kg; gases retained in measured delivery units with documented conversion
- Amount rule: Issued amount less recovered unused stock, attributed to the declared configuration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per assembled machine output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables_and_energy`
- Sources: `itu-l1410-2024`

###### Integration electricity and utilities (`integration_energy`)

Record electricity and other utilities for board mounting, fastening, cable installation, cooling-system charging, cleaning, and assembly-area operation.

- Selected flow: Supplier-, voltage-, and geography-specific electricity and utility flows selected in the concrete dataset
- Flow property / unit: Energy / kWh; other utilities in their measured units
- Amount rule: Sub-metered use or reconciled equipment runtime and power, with shared facility use allocated under section 7
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per assembled machine output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables_and_energy`
- Sources: `itu-l1410-2024`

##### Waste flows

###### Assembly scrap and residues (`assembly_waste`)

Record electronic scrap, offcuts, spent consumables, wastewater, and rejected assemblies by material and route.

- Selected flow: Material-, hazard-, and treatment-specific waste flows selected in the concrete dataset
- Flow property / unit: Mass / kg
- Amount rule: Measured waste transferred to internal recovery, supplier return, or external treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per assembled machine output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_rework_and_yield`
- Sources: `itu-l1410-2024`

##### Elementary flows

###### Direct assembly releases (`assembly_direct_releases`)

Record measured or source-calculated direct releases from soldering, cleaning, coating, process gases, and thermal-management charging by substance and compartment.

- Selected flow: Substance- and compartment-specific elementary flows selected in the concrete dataset
- Flow property / unit: Mass / kg substance
- Amount rule: Measured release or calculation from collected consumable use and a cited factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per assembled machine output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_consumables_and_energy`
- Sources: `itu-l1410-2024`

#### Outputs

##### Product flows

###### Assembled machine (`assembled_machine`)

Transfer each assembled unit with its architecture, housing-unit combination, configuration identifier, and measured or reconciled mass.

- Selected flow: Internal assembled automatic data processing machine
- Flow property / unit: Mass / kg
- Amount rule: Measured assembled output mass transferred to configuration and testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per assembled machine output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_transfer_and_mass`
- Sources: `itu-l1410-2024`

##### Waste flows

##### Elementary flows

### Process: Firmware or software loading, configuration, testing, burn-in, and rework (`configuration_and_testing`)

#### Inputs

##### Product flows

###### Assembled machine input (`assembled_machine_input`)

Carry each assembled machine into configuration and testing without changing its identity.

- Selected flow: Internal assembled automatic data processing machine
- Flow property / unit: Mass / kg
- Amount rule: Measured mass and unit count received from integration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per tested conforming machine output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_transfer_and_mass`
- Sources: `itu-l1410-2024`

###### Configuration, test, and burn-in electricity (`test_electricity`)

Record on-site energy for firmware or software loading, functional tests, stress tests, burn-in when performed, test peripherals, and test-support equipment. Do not substitute a use-phase estimate.

- Selected flow: Supplier-, voltage-, and geography-specific electricity flow selected in the concrete dataset
- Flow property / unit: Energy / kWh
- Amount rule: Metered test-cell use or reconciled device and support-equipment power multiplied by logged test time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per tested conforming machine output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_configuration_and_test_records`
- Sources: `energy-star-computers-9-2025`; `ecma-383-2010`

###### Rework and replacement components (`rework_components`)

Record replacement parts and consumables used to convert failed units into conforming output.

- Selected flow: Part- and material-specific product flows selected for the concrete configuration
- Flow property / unit: Mass / kg; item counts retained
- Amount rule: Measured parts issued to logged rework orders, net of returned usable parts
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per tested conforming machine output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_rework_and_yield`
- Sources: `itu-l1410-2024`

##### Waste flows

###### Failed units, replaced parts, and test waste (`test_and_rework_waste`)

Record failed units, unrecovered replaced parts, spent test consumables, and other test wastes by material, hazard status, and route.

- Selected flow: Material-, hazard-, and treatment-specific waste flows selected in the concrete dataset
- Flow property / unit: Mass / kg
- Amount rule: Measured mass removed from the batch and transferred to recovery, supplier return, or treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per tested conforming machine output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_rework_and_yield`
- Sources: `itu-l1410-2024`

##### Elementary flows

#### Outputs

##### Product flows

###### Tested configuration-controlled machine (`tested_machine`)

Transfer only units that pass the declared configuration-specific test, retaining test profile, firmware or operating-environment version, result, and mass.

- Selected flow: Internal tested automatic data processing machine
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of conforming units released from final test
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per tested conforming machine output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_configuration_and_test_records`
- Sources: `energy-star-computers-9-2025`; `ecma-383-2010`

##### Waste flows

##### Elementary flows

### Process: Final finishing, packaging, and producer-gate release (`finishing_and_gate_release`)

#### Inputs

##### Product flows

###### Tested machine input (`tested_machine_input`)

Carry the tested machine to gate release with its configuration and test identity intact.

- Selected flow: Internal tested automatic data processing machine
- Flow property / unit: Mass / kg
- Amount rule: Measured mass and unit count received from testing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finished machine output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_transfer_and_mass`
- Sources: `itu-l1410-2024`

###### Packaging and included accessories (`packaging_and_accessories`)

Record primary, secondary, and tertiary packaging and every cable, external power supply, input/output accessory, manual, or other article included with the saleable configuration; keep transport packaging outside net product mass.

- Selected flow: Material- and article-specific product flows selected in the concrete dataset
- Flow property / unit: Mass / kg; item counts retained
- Amount rule: Configuration bill-of-pack quantity reconciled to packed conforming units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per finished machine output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_gate_records`
- Sources: `itu-l1410-2024`

###### Finishing and packaging energy (`finishing_energy`)

Record energy for cleaning, labelling, final inspection, packaging, and gate handling.

- Selected flow: Supplier-, voltage-, and geography-specific electricity or utility flows selected in the concrete dataset
- Flow property / unit: Energy / kWh; other utilities in measured units
- Amount rule: Metered use or reconciled equipment runtime and power attributed to the declared configuration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per finished machine output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_and_gate_records`
- Sources: `itu-l1410-2024`

##### Waste flows

###### Finishing and packaging waste (`packaging_waste`)

Record damaged packaging, label liner, protective film, cleaning waste, and final rejected accessories by material and treatment route.

- Selected flow: Material- and treatment-specific waste flows selected in the concrete dataset
- Flow property / unit: Mass / kg
- Amount rule: Measured waste from finishing and packaging, net of documented reuse or return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per finished machine output mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_and_gate_records`
- Sources: `itu-l1410-2024`

##### Elementary flows

#### Outputs

##### Product flows

###### Finished automatic data processing machine (`reference_product`)

Release only the declared conforming configuration. The category-level flow identity does not authorize configuration-free aggregation or proxying.

- Selected flow: Other automatic data processing machines whether or not containing in the same housing one or two of the following types of units: storage units, input units, output units `ea5779a6-4214-400c-b380-155efbd5b98e`
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg net finished product, calculated from measured conforming unit mass; packaging and separately supplied accessories remain separate flows
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished automatic data processing machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3-2025`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | All shared manufacturing operations | First subdivide by line, work order, configuration, test profile, and process time and use direct measurements. Allocate only residual shared inputs or releases. | ec-pef-method-2021; itu-l1410-2024 |
| `allocation_shared_utilities` | Shared facility electricity and utilities | Use configuration-specific sub-metering where available; otherwise allocate by a documented causal driver such as equipment runtime multiplied by measured power, machine time, or occupied test-cell time. Use output mass only when no better causal driver exists and disclose the limitation. | itu-l1410-2024; ec-pef-method-2021 |
| `allocation_rework_and_rejects` | Rework and nonconforming output | Retain initial processing burdens, added rework inputs, and final disposal or recovery burdens in the production batch that generated the conforming output; do not remove reject burdens by treating scrap revenue as a co-product without an explicit reviewed method. | ec-pef-method-2021 |
| `allocation_configuration_family` | Multi-configuration dataset | Calculate each configuration separately, then combine only with audited production mass for the declared site and period. Report included configurations, weights, dispersion, and exclusions; never substitute one server or embedded-device profile for the CPC leaf. | energy-star-computers-9-2025 |
| `allocation_recovered_material` | Recovered manufacturing material | Report recovered material quantity and treatment route separately. Apply substitution or recycling credit only in a downstream lifecycle model with the method, quality, and avoided product explicitly declared. | ec-pef-method-2021; itu-l1410-2024 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_and_component_records` | component_receipt_and_kitting | Electronic, mechanical, power, thermal, housing, storage, input, and output components | Configuration BOM, purchase, stock, inspection, supplier, and return records | configuration id; part number; function; supplier; quantity; mass; material or technology; installed housing-unit type; opening and closing stock; reject; return; upstream dataset | Reconcile approved BOM to purchase, stock, issue, return, and inspection records; weigh representative parts when supplier mass is unavailable | item; kg | Each receipt and production batch; monthly stock reconciliation | Representative production period covering all included configurations | Every included manufacturing site and incoming component store | Net issued amount = opening stock + receipts - closing stock - documented returns; attribute by work order and divide by conforming configuration output mass | Approved BOM revision, invoices, stock ledger, inspection record, scale calibration, supplier specification, and upstream-dataset register |
| `cp_consumables_and_energy` | board_and_system_integration | Assembly consumables, electricity, utilities, and direct releases | Issue, meter, equipment, maintenance, and environmental records | substance; amount; stock; meter; equipment id; power; runtime; batch; configuration; release factor; source id; waste transfer | Sub-meter material operations; otherwise reconcile issued stock and equipment logs to facility totals | kg; kWh; measured utility unit | Each batch; monthly facility reconciliation | Same representative period as product output | Every included line, test cell, utility system, and emission point | Attribute directly by work order; allocate residual shared use under section 7; calculate releases only from collected activity and cited factors | Meter and scale calibration, invoices, equipment logs, stock ledger, calculation workpaper, and environmental record |
| `cp_configuration_and_test_records` | configuration_and_testing | Firmware or software loading, test, burn-in, and conforming output | Configuration-control, test-cell, meter, and work-order records | serial or batch id; configuration id; architecture; firmware or OS version; test profile; test duration; device power; support-equipment power; pass/fail; rework order; final mass | Link configuration and test logs to metered cell energy and output serials; document every changed default setting | item; h; kWh; kg | Each tested unit or auditable batch | Same representative period as product output | Every included configuration and test cell | Sum device and support-equipment energy by test profile, retain failures and rework, and divide by conforming output mass | Version-controlled test procedure, meter calibration, machine log, pass/fail record, and rework trace |
| `cp_waste_rework_and_yield` | component_receipt_and_kitting; board_and_system_integration; configuration_and_testing | Rejects, rework, returned parts, scrap, and treatment routes | Batch, quality, rework, scale, manifest, and treatment records | input units and mass; conforming units and mass; reject reason; replaced part; returned quantity; waste material; hazard status; destination; recovered quantity | Reconcile batch yield and mass transfers; weigh each separated waste stream or use verified container totals | item; kg | Each batch and each waste shipment | Same representative period as product output | Every included operation and waste destination | Input = conforming transfer + reject or waste + return +/- inventory change within documented uncertainty | Quality record, rework order, calibrated scale, waste manifest, supplier return, treatment receipt, and mass balance |
| `cp_output_transfer_and_mass` | component_receipt_and_kitting; board_and_system_integration; configuration_and_testing; finishing_and_gate_release | Internal transfers and conforming product mass | Work-order, transfer, serial, count, and scale records | configuration id; serial or batch; input count and mass; output count and mass; transfer time; stock change; net product mass | Count all units and weigh the finished configuration using a calibrated scale; retain sampling plan if unit mass is sampled | item; kg | Each batch and each configuration revision | Same representative period as product output | Every included line and final gate | Reconcile transfers by configuration and calculate kg output from measured net mass excluding packaging and separately supplied accessories | Work-order closure, transfer record, scale calibration, sampling plan, and finished-product specification |
| `cp_packaging_and_gate_records` | finishing_and_gate_release | Packaging, included accessories, finishing energy, and gate release | Bill-of-pack, purchase, stock, meter, packing, and release records | configuration id; material or accessory; quantity; mass; recycled content; package level; meter; runtime; packed count; release status | Reconcile bill-of-pack and issues to packed conforming units; weigh representative packaging configurations | item; kg; kWh | Each packaging configuration and production batch | Current packaging configuration and representative production period | Every included packing line and release gate | Divide attributed packaging, accessory, and finishing inputs by conforming output mass; keep transport packaging outside net product mass | Approved bill-of-pack, supplier specification, scale and meter calibration, packing record, and release certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_component_use` | Purchased components and consumables | net use = opening stock + receipts - closing stock - documented supplier returns; reconcile result to work-order issues and waste | stock, purchase, return, issue, and waste records | net input by part or substance and configuration |  |
| `calc_reference_mass_normalization` | All inventory rows | normalized amount = amount attributed to conforming configuration / measured conforming net output mass in kg | attributed amount; conforming unit count; measured net unit or batch mass | amount per 1 kg finished machine |  |
| `calc_yield_and_rework` | Production batch | conforming yield = conforming output units / started units; retain rejected units, rework loops, replacement parts, and waste rather than applying an unsupported default yield | started, conforming, rejected, reworked, and scrapped units and mass | configuration-specific yield and burden per conforming kg |  |
| `calc_test_energy` | Configuration and testing | test electricity = sum of metered test-cell energy; when only equipment logs are available, sum measured power multiplied by logged duration for device and support equipment and reconcile to facility electricity | meter readings; device and support-equipment power; test duration; configuration id | kWh per conforming kg by test profile | energy-star-computers-9-2025; ecma-383-2010 |
| `calc_configuration_family` | Declared configuration family | family amount = sum(configuration amount per kg x audited configuration production mass) / sum(audited configuration production mass); exclude unmeasured configurations and disclose coverage | configuration-specific results; production mass; site and period | production-mass-weighted family result with coverage | energy-star-computers-9-2025 |
| `calc_mass_balance` | Each foreground process and whole foreground system | input material mass = product and internal-transfer output mass + waste and direct material release mass +/- documented stock change, within measured uncertainty; investigate and disclose residuals | input, output, waste, release, stock, and uncertainty records | process and system mass-balance residual | itu-l1410-2024 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Retain architecture, processor arrangement, housing, exact in-housing storage/input/output combination, memory, accelerators, expansion, power, cooling, firmware or operating environment, intended use, configuration id, included accessories, net unit mass, and producer-gate condition. | Approved configuration specification, BOM revision, product label, test profile, and reference-flow metadata |
| `dq_configuration_coverage` | Multi-configuration production | Enumerate the configuration population and report production-mass coverage; do not infer unmeasured configurations from a single representative server or embedded design. | Configuration register, audited production mass, inclusion table, and coverage calculation |
| `dq_measurement` | Mass, energy, count, time, and waste records | Use calibrated scales and meters, serial or batch counts, version-controlled machine logs, invoices, and treatment receipts; preserve raw units, conversions, and uncertainty. | Calibration certificates, raw exports, work orders, invoices, and reconciliation workpapers |
| `dq_temporal` | Foreground production | Use a representative continuous period that captures production mix, yield, rework, and operating conditions; normally at least twelve consecutive months, or a shorter complete campaign only with justification and configuration coverage. | Period register, production reconciliation, seasonality or campaign justification, and exception log |
| `dq_site_coverage` | Multi-site dataset | Define the site population, technology and product strata, included sites, and production-mass coverage; calculate sites separately before aggregation. | Site register, sampling rationale, site results, and production-mass reconciliation |
| `dq_upstream_traceability` | Components and subassemblies | Retain supplier, part number, technology or material, geography, data period, upstream dataset, proxy mismatch, and configuration linkage for material inputs. | Supplier evidence, approved BOM, upstream-dataset register, and proxy register |
| `dq_completeness` | Foreground inventory | Reconcile BOM mass, unit transfers, energy, yield, rework, rejects, wastes, and stock changes; list every omitted or unresolved flow and its expected effect. | Mass and count balances, utility reconciliation, completeness checklist, and unresolved-flow register |
| `dq_source_traceability` | Calculated values and external rules | Store formula, raw inputs, source id and version, allocation driver, assumptions, and calculation result so an independent reviewer can reproduce the value. | Calculation workpaper, source archive, and independent recalculation |
| `dq_uuid_readiness` | Tiangong identity | Read back the public reference product flow, Mass property, Units of mass group, and kg compatibility before activation or publication; reject wrong state, flow type, classification, property, unit group, or a narrower proxy. | Tiangong identity readback retained outside PCR content |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_product_identity` | Reference product | Fail conformance when architecture, processor arrangement, housing form, exact in-housing storage/input/output combination including explicit absence, configuration id, intended use, included accessories, or net unit mass is missing. | un-cpc-3-2025; energy-star-computers-9-2025 |
| `validate_residual_class_scope` | CPC classification | Reject portable machines, machines containing CPU plus input and output in the same housing, machines presented as systems, separately supplied input/output or storage units, other ADP units, parts, and more specifically classified telecommunications, consumer-electronics, or industrial-control products. | un-cpc-3-2025 |
| `validate_no_leaf_extrapolation` | Dataset representativeness | Reject an unqualified CPC-leaf result derived from one server, workstation, thin client, appliance, embedded device, or other narrow design. A family result requires separate configuration results and audited production-mass weights. | energy-star-computers-9-2025 |
| `validate_reference_flow` | Quantitative reference | Require exactly 1 kg net finished product using flow `ea5779a6-4214-400c-b380-155efbd5b98e`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg; require corresponding measured machine count and exclude packaging and separately supplied accessories from net mass. |  |
| `validate_process_coverage` | Foreground inventory | Require component receipt and kitting, board and system integration, configuration and testing, and finishing and gate-release inventories, with explicit non-applicability only for conditional board mounting, burn-in, rework, and direct-release rows. | itu-l1410-2024 |
| `validate_housing_unit_combination` | Configuration BOM | Require separate storage, input, and output unit fields with installed count, specification, mass, and explicit absence; reject a generic statement that does not identify the same-housing combination. | un-cpc-3-2025 |
| `validate_transfer_and_mass_balance` | Foreground processes | Require configuration-specific unit-transfer reconciliation and material mass balance within documented uncertainty; investigate and disclose every residual and stock change. | itu-l1410-2024 |
| `validate_test_records` | Configuration and testing | Require version-controlled test profile, firmware or operating environment, test duration, energy method, pass/fail result, failures, and rework. ENERGY STAR or ECMA procedures may support only products within their stated scope and shall not be treated as leaf-wide energy factors. | energy-star-computers-9-2025; ecma-383-2010 |
| `validate_allocation` | Shared operations | Require direct subdivision or a documented causal allocation driver; require separate configuration calculations before family aggregation and reject unexplained mass or economic allocation. | ec-pef-method-2021; itu-l1410-2024 |
| `validate_source_and_proxy_traceability` | Upstream and calculated rows | Require every non-default method, factor, or scenario to reference a listed source id; require every calculated foreground row to link to a collection protocol; disclose each proxy and mismatch. | ec-pef-method-2021; itu-l1410-2024 |
| `validate_data_quality` | Dataset profile | Require temporal, site, configuration, technology, geography, measurement, completeness, uncertainty, and production-mass coverage disclosures sufficient for independent verification. | ec-pef-method-2021; itu-l1410-2024 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Configuration-specific foreground manufacturing data package for an in-scope automatic data processing machine at the producer gate |
| downstream_use | `secondary_dataset`; `background_dataset`; input to `process` and `lifecyclemodel` projections |
| allowed_use | Modelling the declared architecture and saleable configuration, or a transparently production-mass-weighted family whose configuration population, site, period, and producer-gate boundary match the study |
| excluded_use | Unqualified CPC-leaf averages; extrapolation from one server, workstation, thin client, appliance, embedded device, or other narrow design; use-phase or end-of-life claims without explicit extension; products in a more specific classification subclass |
| required_metadata | PCR id and version; CPC context; architecture; processor arrangement; housing; in-housing storage/input/output presence and specification; memory; accelerators and expansion; power and cooling; firmware or operating environment; intended workload and use; configuration id; included accessories; net unit mass and machine count; site and period; boundary; allocation; configuration coverage; sources, proxies, and Tiangong UUID readback status |
| required_quality_disclosure | Configuration and production-mass coverage; site and temporal coverage; measurement and calculation methods; calibration and uncertainty; BOM, unit, mass, energy, yield, rework, waste, and stock reconciliation; upstream dataset and proxy quality; omitted flows and expected effect; allocation drivers |
| update_trigger | Change in architecture, processor, memory, storage/input/output combination, accelerator or expansion, power supply, cooling, firmware or operating environment, intended use, BOM, supplier or upstream dataset, manufacturing site or process, test profile, yield or rework, packaging, allocation, production mix, or any material input, waste, or direct release |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, Structure and Explanatory Notes, https://unstats.un.org/unsd/classifications/Econ/CPC, retrieved 2026-08-09 | CPC 45250 identity, residual classification boundary, hierarchy, and neighbouring computing-machine subclass exclusions |
| `itu-l1410-2024` | standard | ITU-T Recommendation L.1410 (11/2024), Methodology for environmental life cycle assessments of information and communication technology goods, networks and services, https://handle.itu.int/11.1002/1000/16010, retrieved 2026-08-09 | ICT product composition, lifecycle and unit-process boundary, parts and amounts, data collection and validation, allocation, reporting, and downstream extension |
| `energy-star-computers-9-2025` | official_guidance | U.S. EPA ENERGY STAR Program Requirements for Computers, Version 9.0, January 2025, https://www.energystar.gov/sites/default/files/2025-01/ENERGY%20STAR%20Computers%20Version%209.0%20Final%20Specification.pdf, retrieved 2026-08-09 | Product-type distinctions, installed-component and as-shipped configuration records, representative-model limits, and configuration-specific testing; not used as a leaf-wide energy factor |
| `ecma-383-2010` | standard | Ecma International, ECMA-383, 3rd edition, Measuring the Energy Consumption of Personal Computing Products, December 2010, https://ecma-international.org/wp-content/uploads/ECMA-383_3rd_edition_december_2010.pdf, retrieved 2026-08-09 | Conditional configuration and test-energy record structure for desktop and notebook products within the standard's scope; not used to represent the full CPC leaf or supply default values |
| `ec-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, Official Journal L 471, http://data.europa.eu/eli/reco/2021/2279/oj, retrieved 2026-08-09 | General lifecycle data quality, verifiability, completeness, multifunctionality, allocation, and disclosure rules |

Source limitation: ENERGY STAR Version 9.0 and ECMA-383 cover named computing product types and test conditions rather than the complete residual CPC 45250 leaf. They support configuration disclosure and conditional test-energy measurement only. No numerical value or single product architecture from either source is generalized across the category.
