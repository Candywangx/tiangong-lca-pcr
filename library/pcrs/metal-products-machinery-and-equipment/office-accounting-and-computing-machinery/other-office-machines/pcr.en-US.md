---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-office-machines
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other office machines

## 1. Scope and Applicability

This PCR covers manufacture of the residual office-machine products identified by CPC 3.0 subclass 45160. The official detail includes hectograph and stencil duplicating machines; letter closing, opening, folding, sealing and sorting machines; addressing machines; machines for affixing or cancelling postage stamps; cash registers and ticket-issuing machines without a calculating device; coin-counting machines; pencil-sharpening machines; perforating or stapling machines; and paper shredders. It excludes calculating-device ticket machines and cash registers classified in 45141, and network-connectable ATMs and cash registers classified in 45142.

The PCR supports cradle-to-gate foreground data packages for a declared machine model. Because the subclass contains mechanical and electromechanical products with different bills of materials, optional functions are represented by conditional processes rather than by a cross-product inventory expansion. The declared model, rated office function, power architecture, production route, manufacturing geography, packaging configuration, and net product mass are mandatory qualifiers.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-office-machines |
| classification_refs | CPC 3.0: 45160 Other office machines |
| covered_products | Office machines within the official CPC 45160 inclusion note, including paper shredders, non-calculating mail-handling and ticket machines, coin-counting machines, pencil-sharpening machines, and perforating or stapling machines |
| excluded_products | Products classified as photocopiers, printers, facsimile machines, computing peripherals, calculating-device machines in CPC 45141, network-connectable ATMs or cash registers in CPC 45142, and separately supplied parts or accessories |
| representative_product | Electric paper shredder, used only to organize conditional electrical and plastic-component rules and not to narrow the category |
| production_route | Receipt of purchased materials and components; conditional mechanical component fabrication; conditional electrical component integration; final assembly, acceptance testing, and packaging |
| market_state | Finished, tested, packaged machine at the manufacturing site gate, identified by model and configuration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of a declared CPC 45160 office-machine model that performs its stated office function |
| How much | 1 kg net mass of finished machine, excluding transport packaging |
| How well | The declared model passes the manufacturer's documented functional, safety, and quality acceptance criteria |
| How long or cycle | One completed production lot; use-stage service life is outside this cradle-to-gate unit and must be declared separately in a lifecycle model |
| reference_flow_link | `finished_other_office_machine` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other office machine |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model identifier; office function; rated capacity or throughput; power architecture; net product mass; manufacturing sites and geography; included production stages; packaging configuration; acceptance-test basis |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. No exact TianGong reference-product UUID was confirmed; the identity remains explicitly unresolved in the manifest.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | finished reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure finished machine mass after acceptance testing and before transport packaging; exclude manuals, loose consumables, and packaging unless they are integral to the saleable machine configuration, and disclose every inclusion. |
| `lot_normalization` | all inventory exchanges | row-specific property | row-specific unit | Sum exchanges for the same production lot and divide by conforming finished-product net mass in kg; exclude rejected units from the denominator and record their materials and treatment separately. |
| `electricity_conversion` | electricity rows | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | Preserve the meter's energy basis and convert kWh to MJ using 1 kWh = 3.6 MJ; disclose whether auxiliary loads and line losses are included. |
| `component_mass_accounting` | purchased and fabricated components | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use receipt, issue, return, and measured scrap records to reconcile material incorporated into conforming output; do not substitute item counts without a documented model-specific mass conversion. |

## 5. System Boundary

The foreground boundary begins when purchased materials and components are received at each declared manufacturing site and ends with the conforming, packaged machine at the site gate. Upstream production of purchased inputs is represented by linked upstream datasets. Include on-site component fabrication, electrical integration, assembly, testing, rework, and packaging when performed for the declared model. Use and end-of-life stages are outside this cradle-to-gate data package, although a downstream lifecycle model may add them using separately declared scenarios.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_site_gate` | declared manufacturing sites | Include all material, component, energy, waste, and direct elementary exchanges from receipt at the manufacturing site through release of the packaged conforming machine; identify outsourced stages and link their datasets rather than silently excluding them. | `un-cpc-3-0-detail-45160` |
| `boundary_conditional_routes` | model-specific production route | Include mechanical fabrication only when performed within the declared foreground, and include electrical integration only when the declared model contains electrical or electronic components; otherwise mark the process not applicable and explain the purchased-component boundary. | `hk-green-procurement-paper-shredder-2022`; `japan-green-procurement-2020` |
| `boundary_specific_exchanges` | bills of materials and waste registers | Extend the inventory with additional model-specific exchanges as separate atomic rows; do not aggregate unnamed materials, utilities, packaging, or wastes into an umbrella flow. |  |
| `boundary_use_stage` | downstream lifecycle model | Do not include use electricity, consumables, maintenance, or end-of-life treatment in the manufacturing data package; declare them as separate processes when constructing a lifecycle model. | `japan-green-procurement-2020` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and components received at the gate of each declared manufacturing site |
| starting_condition_role | Foreground manufacturing entry condition |
| product_classification_scope | CPC 3.0 subclass 45160 only, interpreted by its official inclusion and exclusion note |
| recursive_input_rule | A purchased CPC 45160 machine incorporated into another covered machine is recorded as a product input with its own upstream dataset and model identifier; its manufacture is not recursively expanded inside the receiving process. |
| upstream_dataset_requirement | Every purchased material, component, electricity, and packaging input requires a geographically and technologically representative upstream dataset or an explicit documented data gap. |
| disclosure | Declare sites, outsourced stages, purchased-versus-made components, model configuration, production period, net output mass, allocation, cut-offs, and every omitted or not-applicable process. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `mechanical_component_fabrication` | Mechanical component fabrication | conditional | Include when steel forming or ABS moulding for the declared model occurs within the reporting foreground. | Manufacture structural, housing, cutting, or mechanism components. | kg conforming fabricated components transferred to assembly |
| `electrical_component_integration` | Electrical component integration and test | conditional | Include when the declared model contains a motor or printed wire board and integration or electrical testing occurs within the reporting foreground. | Integrate and test electrical or electronic functional components. | kg accepted electrical assemblies transferred to final assembly |
| `final_assembly_testing_packaging` | Final assembly, acceptance testing, and packaging | required | Always include for the declared finished model. | Assemble components, perform acceptance tests, package conforming output, and release it at the site gate. | 1 kg net finished machine output |

### Process: Mechanical component fabrication (`mechanical_component_fabrication`)

#### Inputs

##### Product flows

###### Cold-rolled steel sheet for formed parts (`cold_rolled_steel_sheet`)

Record cold-rolled steel sheet issued to cutting, stamping, bending, or forming when those operations are inside the declared foreground. The TianGong UUID remains unresolved because the highest-ranked bilingual identity is inconsistent.

- Selected flow: Cold-rolled steel sheet
- Flow property / unit: Mass / kg
- Amount rule: measured steel-sheet issues minus documented unused returns for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished machine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass_balance`
- Sources:

###### ABS molding resin (`abs_granulate`)

Record ABS granulate issued to molding only when ABS component molding occurs inside the declared foreground; retain grade and recycled-content records.

- Selected flow: Acrylonitrile butadiene styrene (ABS) granulate `b895c3a1-076e-4a42-a2c0-6088890c0bd9`
- Flow property / unit: Mass / kg
- Amount rule: measured ABS granulate issues minus documented unused resin returns for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished machine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass_balance`
- Sources: `hk-green-procurement-paper-shredder-2022`; `japan-green-procurement-2020`

###### Fabrication electricity (`component_fabrication_electricity`)

Record purchased electricity consumed by in-boundary metal forming and ABS molding equipment, including assigned auxiliary loads.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or a documented allocation from a calibrated site meter for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished machine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_fabrication_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Record segregated ferrous offcuts and rejected formed steel parts leaving the process for reuse, recycling, or treatment; disclose destination and contamination.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass transferred out as ferrous manufacturing scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished machine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass_balance`
- Sources:

###### ABS molding scrap (`abs_moulding_scrap`)

Record segregated ABS sprues, runners, purge, and rejected ABS parts that leave the process. Do not combine them with other polymers or packaging waste.

- Selected flow: ABS molding scrap
- Flow property / unit: Mass / kg
- Amount rule: measured net ABS scrap transferred out after any documented in-process regrind return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished machine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_component_mass_balance`
- Sources:

##### Elementary flows

### Process: Electrical component integration and test (`electrical_component_integration`)

#### Inputs

##### Product flows

###### Printed wire board (`printed_wire_board`)

Record each printed wire board incorporated into the declared model when the electrical integration process applies; preserve board specification and supplier identity.

- Selected flow: Printed Wire Board `a8bd954c-59b3-4317-b4de-02a17d6da5ca`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of printed wire boards issued minus unused returns for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished machine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical_component_mass_balance`
- Sources: `hk-green-procurement-paper-shredder-2022`

###### Electric motor (`electric_motor`)

Record the motor incorporated into motorized models; declare motor type, rated output, voltage, and supplier.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of motors issued minus unused returns for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished machine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical_component_mass_balance`
- Sources: `japan-green-procurement-2020`

###### Electrical integration and test electricity (`electrical_integration_electricity`)

Record purchased electricity used for board population or connection, motor integration, firmware loading when applicable, and electrical testing within the declared foreground.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or a documented allocation from a calibrated site meter for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished machine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical_integration_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Rejected populated printed wiring board (`waste_populated_printed_wiring_board`)

Record populated boards rejected from integration or testing and transferred as waste; declare hazardous characteristics and destination.

- Selected flow: Waste populated printed wiring board `eb5ffe4a-49af-450c-9a31-3efdfd343f8a`
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of rejected populated boards transferred to waste management
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished machine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electrical_component_mass_balance`
- Sources:

##### Elementary flows

### Process: Final assembly, acceptance testing, and packaging (`final_assembly_testing_packaging`)

#### Inputs

##### Product flows

###### Final assembly and acceptance-test electricity (`final_assembly_electricity`)

Record purchased electricity consumed by final assembly tools, functional acceptance tests, and allocated line auxiliaries. Use-stage testing beyond release criteria is not included.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: submetered electricity or a documented allocation from a calibrated site meter for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished machine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_assembly_electricity`
- Sources:

###### Corrugated board box (`corrugated_board_box`)

Record the corrugated board box delivered with the declared model; dimensions, recycled content, and packaging configuration must match the foreground product.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: measured mass of corrugated board boxes consumed for conforming finished units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished machine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`
- Sources: `japan-green-procurement-2020`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished other office machine (`finished_other_office_machine`)

Record only conforming machines released after acceptance testing. The selected flow remains without a TianGong UUID until an exact CPC 45160 state-100 identity is available.

- Selected flow: Other office machine
- Flow property / unit: Mass / kg
- Amount rule: measured net mass of conforming finished machines before transport packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net finished machine output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_product_mass`
- Sources: `un-cpc-3-0-structure-2025`; `un-cpc-3-0-detail-45160`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared manufacturing lines | Prefer process subdivision, submeters, production-order records, and direct material issue records so the declared model receives its measured exchanges. |  |
| `allocation_physical_driver` | unavoidable shared loads | When direct measurement is unavailable, allocate shared electricity and auxiliaries by a documented causal physical driver such as machine time multiplied by rated load; use mass only when causality cannot be established and disclose sensitivity. |  |
| `allocation_scrap_treatment` | scrap and rejected components | Record gross input and measured waste outputs without netting scrap revenue or avoided-production credits inside the foreground process; document any recycling substitution only in a separately declared downstream scenario. | `japan-green-procurement-2020` |
| `allocation_no_category_average` | multiple CPC 45160 models | Do not average mechanically different models unless the represented product mix, production volume weights, functional differences, and all allocation steps are disclosed. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_mass_balance` | `mechanical_component_fabrication` | steel and ABS inputs; steel and ABS scrap outputs | material issue, return, production, and waste-transfer records | material_id; grade; lot; issued_mass; returned_mass; conforming_part_mass; scrap_mass; destination | Reconcile calibrated scale records, warehouse transactions, and waste-transfer tickets by material and production order. | kg | each production lot | all lots in the declared reporting period | every in-boundary fabrication site | Sum net issues and outbound scrap by material, then normalize to conforming finished-product net mass. | scale calibration; transaction reconciliation; signed waste-transfer record |
| `cp_component_fabrication_electricity` | `mechanical_component_fabrication` | fabrication electricity | submeter or site-meter interval record | meter_id; start_reading; end_reading; production_order; operating_time; allocation_driver | Read dedicated submeters or allocate a calibrated site meter using documented equipment time and load. | MJ | each lot or monthly with lot allocation | representative consecutive reporting period | every in-boundary fabrication site | Sum energy for the process and normalize to conforming finished-product net mass. | meter calibration; bill reconciliation; allocation worksheet |
| `cp_electrical_component_mass_balance` | `electrical_component_integration` | printed wire board and motor inputs; rejected populated-board output | bill of materials, issue, return, rejection, and waste-transfer records | component_id; specification; supplier; issued_mass; returned_mass; accepted_mass; rejected_mass; waste_destination | Reconcile production-order component transactions and calibrated mass measurements. | kg | each production lot | all lots in the declared reporting period | every in-boundary electrical integration site | Sum net component issues and rejected-board waste, then normalize to conforming finished-product net mass. | approved bill of materials; scale calibration; rejection disposition |
| `cp_electrical_integration_electricity` | `electrical_component_integration` | integration and test electricity | submeter or site-meter interval record | meter_id; start_reading; end_reading; production_order; test_cycles; allocation_driver | Read dedicated submeters or allocate a calibrated site meter using documented equipment time and load. | MJ | each lot or monthly with lot allocation | representative consecutive reporting period | every in-boundary electrical integration site | Sum energy for the process and normalize to conforming finished-product net mass. | meter calibration; bill reconciliation; allocation worksheet |
| `cp_final_assembly_electricity` | `final_assembly_testing_packaging` | assembly and acceptance-test electricity | submeter or site-meter interval record | meter_id; start_reading; end_reading; production_order; accepted_units; test_cycles; allocation_driver | Read dedicated submeters or allocate a calibrated site meter using documented line time and load. | MJ | each lot or monthly with lot allocation | representative consecutive reporting period | every final assembly site | Sum energy for assembly and release testing and normalize to conforming finished-product net mass. | meter calibration; bill reconciliation; acceptance-test log |
| `cp_packaging_mass` | `final_assembly_testing_packaging` | corrugated board box input | packaging specification, purchase, issue, and return records | packaging_id; material; supplier; issued_mass; returned_mass; packed_units | Reconcile approved packaging specifications with warehouse transactions and calibrated sample masses. | kg | each packaging configuration and lot | all configurations in the declared reporting period | every final assembly site | Sum net box mass consumed and normalize to conforming finished-product net mass. | approved packaging specification; scale calibration; stock reconciliation |
| `cp_finished_product_mass` | `final_assembly_testing_packaging` | conforming finished product output | acceptance and calibrated mass records | model_id; serial_or_lot; configuration; accepted_quantity; net_mass; excluded_accessories; test_status | Weigh a documented representative sample or every unit after acceptance testing and before transport packaging. | kg | each model and configuration; each lot | all conforming output in the declared reporting period | every final assembly site | Sum accepted net product mass; retain sample design and expansion calculations when not every unit is weighed. | scale calibration; acceptance record; sampling record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_material_input` | material and component inputs | net input = issued mass - unused returned mass | issued_mass; returned_mass | kg net input by row and lot |  |
| `calc_reference_normalization` | all mass exchanges | normalized amount = row net mass / conforming finished-product net mass | row net mass; accepted net product mass | kg per kg reference flow |  |
| `calc_energy_normalization` | electricity rows | normalized electricity = process electricity in MJ / conforming finished-product net mass in kg | meter difference; conversion factor; allocation driver when used; accepted net product mass | MJ per kg reference flow |  |
| `calc_component_mass_check` | mechanical component fabrication | net material input - outbound scrap - measured conforming component transfer = documented inventory change plus measured process loss | issue; return; scrap; component transfer; inventory change | material-specific mass-balance residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_model_identity` | reference product | Record model, configuration, rated office function or throughput, motor rating when applicable, power architecture, and acceptance criteria. | approved product specification and acceptance-test record |
| `dq_temporal_coverage` | all foreground exchanges | Use a consecutive period representative of normal production, identify startup, shutdown, rework, and abnormal lots, and disclose exclusions. | dated production, meter, warehouse, and waste records |
| `dq_mass_balance` | material-bearing processes | Reconcile net inputs, conforming output, inventory change, and each separately recorded waste stream; investigate material-specific residuals. | signed reconciliation worksheet and calibrated measurements |
| `dq_electricity_identity` | electricity inputs | Declare grid or supplier mix, voltage, geography, delivery boundary, meter coverage, and any loss treatment. | invoice, supply contract, meter map, and allocation worksheet |
| `dq_substance_and_recyclability` | electrical or plastic-bearing models | Declare applicable restricted-substance compliance evidence, recycled-plastic claims, separability information, and waste destinations without converting regulatory limits into empirical inventory ranges. | supplier declarations and product compliance records; `hk-green-procurement-paper-shredder-2022`; `japan-green-procurement-2020` |
| `dq_completeness` | model-specific inventory | Compare the approved bill of materials, energy-meter map, packaging specification, rejection register, and waste register with inventory rows; add every omitted exchange as one atomic flow or document it as a quantified data gap. | completeness reconciliation signed by the data owner |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | product identity | Confirm the declared product is within the official CPC 45160 inclusion note and is not a printer, photocopier, computing peripheral, calculating-device machine in 45141, network-connectable ATM or cash register in 45142, or separately supplied part. | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-detail-45160` |
| `validate_reference_mass` | reference flow | Confirm the normalized finished output equals 1 kg net product mass and that packaging and excluded accessories are consistently treated. |  |
| `validate_process_applicability` | conditional process map | Confirm each conditional process is either populated with foreground rows and records or explicitly marked not applicable with the purchased-component boundary disclosed. |  |
| `validate_uuid_resolution` | TianGong identities | Reject substitution of printers, photocopiers, ink, mixed plastic waste, or other proxy UUIDs for the three unresolved rows; require state-100 direct-read identity before resolution. |  |
| `validate_inventory_balance` | each production lot | Confirm material issues, returns, conforming transfers, separately recorded wastes, and inventory changes reconcile; report residuals and corrective actions. |  |
| `validate_energy_records` | electricity rows | Reconcile process meters to invoices or site meters, prevent overlap among the three electricity rows, and verify the kWh-to-MJ conversion and allocation driver. |  |
| `validate_bilingual_flow_names` | Chinese rendering | Confirm every UUID-bearing Chinese selected flow exactly matches the TianGong state-100 Chinese baseName and that UUID-empty atomic flows remain accurately translated. |  |
| `validate_range_status` | amount metadata | Confirm no externally inferred range is added without two independent, original-text-verified, boundary-compatible sources; retain the manifest evidence need when that condition is unmet. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground cradle-to-gate manufacturing dataset for one declared CPC 45160 office-machine model |
| downstream_use | May be used as a secondary_dataset or background_dataset after review, and as the manufacturing stage of a lifecyclemodel with separately modelled use and end-of-life stages |
| allowed_use | Model-specific product comparison, supply-chain assessment, and lifecycle modelling when reference mass, function, configuration, geography, technology, and data period are compatible |
| excluded_use | Unqualified category-average claims, comparison of unlike office functions, use-stage claims without a declared duty cycle and service life, or proxy substitution for unresolved flow UUIDs |
| required_metadata | model and configuration; CPC scope; rated function or throughput; net mass; sites and geography; reporting period; purchased-versus-made boundary; electricity supply; packaging; allocation; cut-offs; unresolved identities |
| required_quality_disclosure | primary-data share; meter and scale coverage; allocation drivers; sampling; mass-balance residuals; rejected units; data gaps; supplier-data age; substance-compliance evidence where applicable |
| update_trigger | material design or supplier change; production-route or site change; electricity-supply change; packaging redesign; changed acceptance test; new exact TianGong UUID; or foreground records no longer representative |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-09-08) | Official classification identity and hierarchy for CPC 45160 |
| `un-cpc-3-0-detail-45160` | official_guidance | United Nations Statistics Division, CPC Version 3.0 classification detail, code 45160. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/45160 (retrieved 2026-09-08) | Official included and excluded products and semantic category boundary |
| `japan-green-procurement-2020` | official_guidance | Ministry of the Environment, Government of Japan, Basic Policy on Promoting Green Procurement, provisional translation, February 2020. https://www.env.go.jp/policy/hozen/green/g-law/archive/bp/r1bp_en.pdf (retrieved 2026-09-08) | Paper-shredder and digital-duplicator evidence for motorized variants, electricity relevance, plastic components, packaging, dismantling, and waste disclosure |
| `hk-green-procurement-paper-shredder-2022` | official_guidance | Environment and Ecology Bureau, Hong Kong SAR Government, Green Procurement: Office equipment M04 Paper shredder, last reviewed 10 February 2022. https://www.eeb.gov.hk/en/susdev/green_procure/pdf/M04.pdf (retrieved 2026-09-08) | Paper-shredder evidence for circuit boards, electrical or electronic components, plastic components, and restricted-substance compliance records |
