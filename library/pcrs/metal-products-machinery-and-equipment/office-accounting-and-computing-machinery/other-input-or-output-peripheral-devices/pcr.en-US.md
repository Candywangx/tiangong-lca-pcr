---
pcr_id: pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-input-or-output-peripheral-devices
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other input or output peripheral devices

## 1. Scope and Applicability

This PCR defines foreground manufacture of computer-connected badge, card, paper-tape, magnetic-ink and optical reading peripherals through final assembly of purchased functional subassemblies, acceptance testing and packing. The semantic boundary follows the reader-device exclusions in `un-cpc-2-1-reader-notes`, with current classification identity checked against `un-cpc-3-0-structure-2025`. The older notes are supporting scope evidence, not a claim that CPC 3.0 publishes the same explanatory text.

A USB contact smart-card reader is the representative configuration (`acs-acr39u-product`). Its manufacturer specifications support interface and test qualifiers only; no universal bill of materials, lifetime or inventory quantity is inferred. Data packages must select one concrete model. Different sensing technologies remain separate datasets. Semiconductor fabrication, board population and enclosure moulding are upstream purchased-component burdens. Integrated manufacture requires explicit upstream foreground process extensions before these rules can describe its full boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.office-accounting-and-computing-machinery.other-input-or-output-peripheral-devices |
| classification_refs | CPC 3.0: 45269 |
| covered_products | Computer-connected badge and card readers, paper-tape readers, magnetic-ink recognition and optical reading devices |
| excluded_products | Keyboards, mice, joysticks; image scanners; printers and multifunction printers; monitors and projectors; fixed or removable storage drives and flash-card readers; smart cards themselves; autonomous payment terminals |
| representative_product | USB contact smart-card reader, model-specific configuration |
| production_route | Purchased functional reader board and formed components; assembly, test and packing |
| market_state | New, complete, tested device at factory gate; packaging separately inventoried |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a declared computer reading interface |
| How much | 1 kg of accepted complete devices of one model; report corresponding device count |
| How well | Pass declared protocol, interface, read/write and acceptance tests; record failure criteria |
| How long or cycle | One manufacturing reporting period; no use-life claim. A service comparison needs independently declared duty cycle and lifetime |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Other input or output peripheral devices `25b5cd7d-87b6-4790-8626-ce835d1edcad` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | model; reading principle; supported media and protocols; host interface; power supply; cable inclusion; unit net mass; accepted count; site and period; purchased-module boundary; test criteria; packaging configuration |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mass_basis | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh complete devices including supplied cable; exclude carton. Derive accepted mass from count times measured model-specific unit mass. Never equate kg with device count. |
| energy_conversion | electricity | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Retain meter readings and apply 1 kWh = 3.6 MJ once. USB test power must include attributable host losses. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased, functional populated reader boards and formed components received at assembly site |
| starting_condition_role | foreground_input |
| product_classification_scope | Reader peripherals within the semantic exclusions in section 2 |
| recursive_input_rule | Purchased same-category modules remain measured inputs linked once to upstream datasets; do not recursively reproduce their manufacture |
| upstream_dataset_requirement | Link each purchased component to a compatible cradle-to-delivery dataset, with electronics, sensing element, moulding and transport covered or disclosed as gaps |
| disclosure | Declare suppliers, geography, technology, exclusions and whether only gate-to-gate results are reported |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_completeness | foreground | Include acceptance rejects, rework, attributable energy and packing. Reconcile the actual bill of materials; add a separate atomic row for every actual solder, adhesive, screw, separate head, bag, waste or direct emission absent from this core list. Absence requires records, not a zero default. |  |
| boundary_lifecycle | dataset | Distribution, customer use and end-of-life are outside this manufacturing package. Do not call it a complete product life-cycle result; downstream full-life-cycle models must add these stages. | `ghg-product-standard-page` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| assembly_test | Final assembly and acceptance test | required |  | foreground production | 1 kg accepted devices |
| packing | Delivery packing | required |  | conditioning | Same 1 kg accepted devices; no second product output |

### Process: Final assembly and acceptance test (`assembly_test`)

#### Inputs

##### Product flows

###### Populated reader circuit board assembly (`reader_board`)

Required; includes the fitted reading interface. Declare board model, contact or sensing technology and supplied components. Split a separately purchased reading head into its own exchange.

- Selected flow: Populated reader circuit board assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period quantity divided by accepted device net mass; reference output normalizes to 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted complete devices
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly_test`

###### Moulded ABS reader enclosure (`abs_housing`)

inclusion_condition: fitted ABS enclosure. Record finished moulded part mass, resin grade and recycled fraction; do not substitute resin granulate.

- Selected flow: Moulded ABS reader enclosure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period quantity divided by accepted device net mass; reference output normalizes to 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted complete devices
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly_test`

###### USB cable with connectors (`usb_cable`)

inclusion_condition: USB cable is supplied with the device. Record complete cable mass, length and connector types, including a permanently attached cable.

- Selected flow: USB cable with connectors
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period quantity divided by accepted device net mass; reference output normalizes to 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted complete devices
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly_test`

###### Electricity (`electricity`)

Include assembly, firmware loading, functional testing, rework and attributable facility electricity; measure host test equipment consumption without assigning it to customer use.

- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Unit group: `93a60a57-a3c8-11da-a746-0800200c9a66`
- Amount rule: Measured period quantity divided by accepted device net mass; reference output normalizes to 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted complete devices
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly_test`

#### Outputs

##### Product flows

###### Other input or output peripheral devices (`reference_product`)

Record accepted complete devices by one model and configuration. Exclude packaging mass. The same accepted output denominator is used for packing.

- Selected flow: Other input or output peripheral devices `25b5cd7d-87b6-4790-8626-ce835d1edcad`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period quantity divided by accepted device net mass; reference output normalizes to 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted complete devices
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly_test`

##### Waste flows

###### Discarded reader electronic assembly (`rejected_reader`)

inclusion_condition: unrecoverable reader assemblies leave the site for treatment. Record actual composition, hazardous status, destination and treatment; internally reworked units are not discarded output.

- Selected flow: Discarded reader electronic assembly
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period quantity divided by accepted device net mass; reference output normalizes to 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted complete devices
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_assembly_test`

### Process: Delivery packing (`packing`)

#### Inputs

##### Product flows

###### corrugated board boxes (`carton`)

inclusion_condition: corrugated box is used for delivery. Weigh box mass allocated to accepted devices; disclose recycled content and delivered package configuration.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Unit group: `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured period quantity divided by accepted device net mass; reference output normalizes to 1 kg
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per 1 kg accepted complete devices
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_packing`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_records | shared_operations | Use dedicated component issues and meters first. For shared test equipment allocate measured electricity by metered power times occupied test duration; for common packing allocate by actual boxes used. Document causal drivers and reconcile allocated totals to measured totals under cp_assembly_test and cp_packing. |  |
| reject_burden | waste | Assign reject and rework burdens to accepted output. Do not count reworked devices twice or automatically credit avoided virgin production for waste leaving the gate; disclose the downstream recycling convention. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_assembly_test | assembly_test | components; electricity; accepted and rejected devices | production records | model; batch; component issue and return mass; opening and closing stock; accepted count; net unit mass; reject mass; kWh; test duration; power; rework; treatment destination | weigh and reconcile stock; meter electricity including test hosts; retain acceptance and waste transfer records | kg; count; kWh; h | each batch and meter interval | declared continuous representative reporting period | one site and model | sum net issues and measured energy; divide by accepted net mass; avoid rework double count | calibration; BOM; stock reconciliation; supplier composition; test log |
| cp_packing | packing | box consumption | packing record | box mass; counts issued and returned; accepted device mass; configuration | weigh representative boxes and reconcile issues with delivery records | kg; count | each shipment | same reporting period as assembly | same site and model | net box mass divided by accepted device mass | scale calibration and packing BOM |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | inventory | M = accepted count × measured unit net mass; q_i = period net quantity_i / M; reconcile opening stock + receipts - closing stock - returns | cp_assembly_test; cp_packing | exchange per kg device |  |
| energy | electricity | MJ = kWh × 3.6 | cp_assembly_test | MJ/kg |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| traceability | all_rows | Link quantities to dated records, model and site; retain uncertainty and missing-data disclosure. Do not use manufacturer specifications as production consumption. | cp_assembly_test; cp_packing |
| technology | reference_product | Record reader protocol, supplied interface and acceptance tests; do not pool contact, magnetic and optical devices without explicit weighting. | `acs-acr39u-product` |
| complete_bom | components | Reconcile component mass, accepted product, rejects and inventory change. Every mismatch requires investigation with measurement uncertainty, not a preset tolerance. | supplier BOM and batch ledger |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | reference_product | Require all reference qualifiers and positive accepted mass. Exclude storage-media readers and manual input devices. | `un-cpc-2-1-reader-notes` |
| validate_inventory | all_rows | Require atomic exchanges, compatible units, period alignment and upstream boundary links. Missing UUIDs remain explicit identity gaps; missing quantities are not zeros. No generic external range is authorized. |  |
| validate_comparison | dataset | A mass-normalized manufacturing result cannot establish service equivalence. Compare only after aligning reading function, performance, duty cycle, lifetime and full system boundary. | `ghg-product-standard-page` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Model-specific manufacturing contribution with explicit upstream datasets |
| excluded_use | Unqualified comparisons; full-life-cycle claims from gate-to-gate data; substitution for storage drives or smart cards |
| required_metadata | model; site; period; net mass; unit count; sensing technology; BOM boundary; supplier geography; allocation |
| required_quality_disclosure | coverage; uncertainty; missing UUIDs and quantities; omitted stages; range evidence gaps |
| update_trigger | BOM, interface, supplier, test regime, energy mix or manufacturing-boundary change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | official_guidance | UNSD CPC 3.0 structure, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Current category label and adjacent category exclusions; retrieved 2026-09-09 |
| un-cpc-2-1-reader-notes | official_guidance | UNSD CPC 2.1, 45269. https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/45269 | Original explanatory note, reader scope and storage/manual-input exclusions; retrieved 2026-09-09 |
| acs-acr39u-product | handbook | ACS ACR39U-U1 Smart Card Reader, Technical Specifications V1.04, sections 1, 2 and 5 (manufacturer document hosted by CardLogix). https://www.cardlogix.com/wp-content/uploads/ACS-ACR39U-U1-Smart-Card-Reader-Technical-Specifications.pdf | Representative computer-connected reader, interface, power and cable qualifiers only; retrieved 2026-09-09 |
| ghg-product-standard-page | official_guidance | GHG Protocol Product Standard overview and comparison FAQ. https://ghgprotocol.org/product-standard | Full-life-cycle stage distinction and limits of product comparison; retrieved 2026-09-09 |
