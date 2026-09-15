---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.typewriters-and-word-processing-machines
status: candidate
language: en-US
sync_with: pcr.zh-CN.md
---

# Typewriters and word-processing machines

## 1. Scope and Applicability

This PCR covers production of standalone mechanical, electric and electronic typewriters and dedicated word-processing machines. General-purpose computers running word-processing software, separate printers, software, spare parts and repair services are excluded. CPC identifies the category; it does not define a manufacturing recipe. [un-cpc-3-0-structure-2025]

The foreground starting point is purchased finished components received at the assembly site. The output is tested, accepted equipment at the factory gate. Component manufacture is supplied through linked upstream datasets. Integrated component fabrication requires additional measured unit processes and atomic exchanges; it cannot be hidden in assembly electricity. The component map is a collection checklist, not a universal bill of materials.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.typewriters-and-word-processing-machines |
| classification_refs | CPC 3.0:45110 |
| covered_products | Standalone typewriters; dedicated word-processing machines |
| excluded_products | General-purpose computers; separate printers; software; parts sold separately; repair services |
| representative_product | One declared model of accepted complete machine |
| production_route | Purchased-component assembly, adjustment, testing and packing |
| market_state | New complete machine at factory gate; net mass excluding shipping packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a complete machine capable of the declared typing or dedicated text-processing function |
| How much | 1 kg net finished machine as production declared unit; record kg per complete machine |
| How well | Meets the model-specific acceptance test for keyboard response and print or text-processing function |
| How long or cycle | One production batch; lifetime service is outside this partial inventory and must be defined for a life-cycle comparison |
| reference_flow_link | reference_product: 1 kg; multiply by measured machine mass for a per-machine inventory |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Typewriters and word-processing machines `23a1e086-b873-4bcc-89a9-e300fab7eef6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; mechanical/electric/electronic drive; print technology; text storage and display configuration; kg per machine; supplied accessories; acceptance criteria; geography; production period; component starting boundary |

Declare every qualifier in dataset metadata. A mass-normalized factory dataset is not a functional equivalence claim: comparisons require the same text output, quality, duty cycle, lifetime and downstream boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | Accepted machine | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass. Retain machine count and measured model-specific kg per machine; never infer count from generic mass. |
| electricity_conversion | Purchased electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Convert kWh to MJ with 3.6 MJ/kWh; do not apply fuel heating values to electricity. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Finished components at receiving dock, supplier operations outside measured foreground |
| starting_condition_role | Foreground assembly starting boundary, not burden-free material |
| product_classification_scope | Finished machines; parts are upstream inputs, not reference products |
| recursive_input_rule | If a complete same-category machine enters, record its inherited burden once and only measure subsequent operations; never recurse into its own output dataset |
| upstream_dataset_requirement | Link each purchased component to supplier-specific or documented representative production data with transport boundary disclosed |
| disclosure | Separate assembly-only results from upstream-linked results; report omitted downstream stages |

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_scope | assembly | Include receiving, assembly, adjustment, testing, rework, packaging and site waste dispatch. Collect additional actual exchanges individually, including test paper, replacement ribbons, lubricants and packaging inserts where used. |  |
| boundary_upstream | supply_chain | Purchased assemblies retain their full upstream burden. Avoid counting an installed motor, board or cable both inside a purchased assembly and as a separate input. |  |
| boundary_partial | downstream | This is a production inventory module, not a complete product footprint. A complete life-cycle study must add distribution, use, maintenance and end-of-life and define the service functional unit. | ghg-protocol-product-standard-2011 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| machine_assembly | Assembly, acceptance and packing | required | All declared models | Foreground production | 1 kg net accepted machine |

### Process: Assembly, acceptance and packing (`machine_assembly`)

#### Inputs

##### Product flows

###### Typewriter keyboard assembly (`keyboard_assembly`)

Include when a complete keyboard assembly is purchased; include its fitted keys and linkage only once.

- Selected flow: Typewriter keyboard assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual batch quantity for this exchange; normalize by accepted net machine mass. Absence requires a documented not-applicable decision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Typewriter printing-mechanism and carriage assembly (`printing_mechanism_assembly`)

Include the complete purchased printing assembly; disclose platen, type element, ribbon and carriage coverage.

- Selected flow: Typewriter printing-mechanism and carriage assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual batch quantity for this exchange; normalize by accepted net machine mass. Absence requires a documented not-applicable decision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Typewriter machine enclosure (`machine_enclosure`)

Include the purchased enclosure; declare material composition and exclude contents recorded separately.

- Selected flow: Typewriter machine enclosure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual batch quantity for this exchange; normalize by accepted net machine mass. Absence requires a documented not-applicable decision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Small electric motor (`small_electric_motor`)

Include only when a separate small drive motor is installed; verify rated output and AC/DC design against its classification.

- Selected flow: Small electric motor `60ce5b4c-0a5b-4ee5-9f5a-ac3d2b69681c`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual batch quantity for this exchange; normalize by accepted net machine mass. Absence requires a documented not-applicable decision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Populated word-processing-machine control board (`populated_control_board`)

Include only when a separate populated control board is installed; component mass is included in this assembly.

- Selected flow: Populated word-processing-machine control board
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual batch quantity for this exchange; normalize by accepted net machine mass. Absence requires a documented not-applicable decision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### LCD display module (`lcd_display_module`)

Include only when a separate LCD module is installed; record size, backlight and supplied-module boundary.

- Selected flow: LCD display module `264605c6-41b8-4baa-82b0-e27e815063a0`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual batch quantity for this exchange; normalize by accepted net machine mass. Absence requires a documented not-applicable decision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Office-machine power supply unit (`power_supply_unit`)

Include only when a separate power supply unit is installed; declare voltage, rated power and whether the cable is included.

- Selected flow: Office-machine power supply unit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual batch quantity for this exchange; normalize by accepted net machine mass. Absence requires a documented not-applicable decision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

###### Electricity (`assembly_electricity`)

Measure electricity for receiving, assembly, adjustment, test and packing, including allocated facility overhead.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; unit group `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual batch quantity for this exchange; normalize by accepted net machine mass. Absence requires a documented not-applicable decision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`

###### corrugated board boxes (`corrugated_board_box`)

Include when corrugated shipping boxes cross the boundary; exclude box mass from net machine output mass.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual batch quantity for this exchange; normalize by accepted net machine mass. Absence requires a documented not-applicable decision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

#### Outputs

##### Product flows

###### Typewriters and word-processing machines (`reference_product`)

Record accepted finished-machine net mass; disclose installed accessories and exclude transport packaging.

- Selected flow: Typewriters and word-processing machines `23a1e086-b873-4bcc-89a9-e300fab7eef6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect batch quantity and normalize by accepted net machine mass; reference output equals 1 kg after normalization.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`

##### Waste flows

###### Steel scrap (`steel_scrap`)

Include when segregated rejected steel components leave assembly as scrap; record alloy and destination.

- Selected flow: Steel scrap `980a386b-f76b-4348-bb6b-3aa992538ba1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual batch quantity for this exchange; normalize by accepted net machine mass. Absence requires a documented not-applicable decision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Waste Plastic (`waste_plastic`)

Include one segregated non-hazardous rejected-plastic stream; declare polymer and contamination, never combine electronic or metal scrap.

- Selected flow: Waste Plastic `9be4d01d-a957-445a-9ce6-70b0418cd0f6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual batch quantity for this exchange; normalize by accepted net machine mass. Absence requires a documented not-applicable decision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

###### Waste populated printed wiring board (`waste_populated_pwb`)

Include when populated boards are rejected; declare hazardous classification, composition and treatment destination.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Collect actual batch quantity for this exchange; normalize by accepted net machine mass. Absence requires a documented not-applicable decision.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg net accepted machine
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | shared_processes | Avoid allocation through subdivision where feasible. Otherwise use a demonstrated physical relationship; justify an economic or other relationship when physical causality cannot be established. Disclose the method consistently. | ghg-protocol-product-standard-2011 |
| allocation_site | assembly_overhead | Use measured line energy or validated operating-time shares for shared electricity. Include rework in the accepted output denominator; do not allocate burdens to unaccepted rejects as saleable machines. |  |
| allocation_scrap | waste | Record waste mass and treatment separately. Do not deduct an assumed recycling credit from measured assembly exchanges; disclose any downstream recycling model separately. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_material | machine_assembly | Component, packaging and reference mass | BOM and batch acceptance | model, component code, issued/returned kg, stock change, accepted count, net kg per machine, included subcomponents | Weigh representative model components and reconcile issued material with stores and accepted production | kg | Each batch | Declared representative production period | Declared assembly site | Net issued kg divided by accepted net output kg; output kg is count times measured kg per machine | Calibrations, BOM revision and test acceptance records |
| cp_energy | machine_assembly | Assembly electricity | Submeter and facility invoice | meter id, start/end kWh, line hours, facility total, allocation share, output kg | Meter the line; reconcile overhead shares to the facility total | MJ | Each batch or reconciled reporting period | Same period as production | Same site | Net kWh times 3.6 divided by accepted output kg | Meter calibration, invoices and allocation rationale |
| cp_waste | machine_assembly | Segregated rejects | Weigh tickets and transfer notes | stream id, material, hazardous status, kg, date, destination, stock change, output kg | Weigh each waste stream separately; reconcile dispatch and storage changes | kg | Each dispatch and batch reconciliation | Same production period | Same site | Generated waste kg divided by accepted output kg | Scale records, transfer notes and destination evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_batch | All exchanges | q = Q / M; M = accepted count × measured net kg per machine; preserve stock-change reconciliation | Q; M | quantity per kg accepted machine |  |
| electricity_mj | Electricity | MJ = kWh × 3.6 | kWh | MJ |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| complete_bom | Material coverage | Reconcile the complete model BOM against incoming components, net output, rejects and stock changes; investigate unexplained residuals. Add actual missing atomic exchanges before dataset completion. | cp_material and cp_waste reconciliation |
| primary_records | All rows | Retain original site records, calibration, uncertainty and representativeness; missing data is not zero. | Collection protocols and supplier evidence |
| configuration | Variants | Keep mechanical, electric and electronic configurations distinct in data collection; use production-weighted aggregation only with disclosed shares. | Model records and production shares |

## 9. Validation Rules

| rule_id | applies_to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | reference_flow | Require all reference qualifiers, positive accepted mass and measured count-to-mass conversion. |  |
| validate_coverage | inventory | Check BOM closure and every inclusion condition; no blanket zero for absent UUIDs, no combined utilities, and no duplicate assembly/subcomponent burdens. |  |
| validate_units | amounts | Check kg and MJ normalization, protocol links, reporting periods and waste direction; reference_product must equal 1 kg. |  |
| validate_boundary | dataset_claims | Reject a full-life-cycle comparison based only on this partial module; disclose upstream gaps and downstream scenarios. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | background_dataset; process; lifecyclemodel |
| allowed_use | Assembly production module with declared upstream links and configuration |
| excluded_use | Standalone comparative lifetime footprint; automatic substitution for general-purpose computers |
| required_metadata | Model, drive, net mass, accessories, site, dates, upstream coverage, protocol records and allocation |
| required_quality_disclosure | Missing exchanges and UUIDs, uncertainty, representativeness, exclusions and unresolved evidence |
| update_trigger | BOM, technology, supplier, site, energy mix or acceptance-test change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv ; retrieved 2026-09-08 | Finished-machine identity and distinction from parts; independence_key: un-cpc-version-3-0-structure-2025 |
| ghg-protocol-product-standard-2011 | standard | WRI and WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters 7 and 9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; retrieved 2026-09-08 | Partial versus complete inventory disclosure; allocation hierarchy only. This PCR does not claim full standard conformance. independence_key: ghg-protocol-product-standard-2011 |
