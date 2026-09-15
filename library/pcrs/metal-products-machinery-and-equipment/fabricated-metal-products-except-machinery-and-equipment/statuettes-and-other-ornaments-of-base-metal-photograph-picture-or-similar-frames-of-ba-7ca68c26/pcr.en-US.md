---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.statuettes-and-other-ornaments-of-base-metal-photograph-picture-or-similar-frames-of-ba-7ca68c26
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Statuettes and other ornaments of base metal; photograph, picture or similar frames of base metal; mirrors of base metal

## 1. Scope and Applicability

Covers finished CPC 42996 base-metal statuettes and ornaments, photograph/picture/similar frames, and mirrors from purchased metal stock or ingots through on-site forming or casting, finishing, assembly, inspection, and factory-gate release. Excludes furniture, lighting equipment, glass mirrors without a base-metal article, precious-metal articles, packaging manufacture, distribution, use, and end-of-life.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.statuettes-and-other-ornaments-of-base-metal-photograph-picture-or-similar-frames-of-ba-7ca68c26 |
| classification_refs | CPC 3.0: 42996 |
| covered_products | Finished base-metal statuettes, ornaments, photograph/picture/similar frames, and mirrors |
| excluded_products | Precious-metal articles; unframed glass mirror; furniture; lighting equipment |
| representative_product | One declared factory-gate article in saleable condition |
| production_route | Sheet forming or metal casting, actual finishing, and assembly |
| market_state | Finished, inspected, unpackaged factory-gate product |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished CPC 42996 article; declare subtype and constituent metal |
| How much | 1 kg net mass of finished unpackaged product |
| How well | Saleable product meeting declared specification and quality grade |
| How long or cycle | Reporting-period production mix; service life is outside the boundary |
| reference_flow_link | reference_product |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | CPC 42996 base-metal ornament, frame, or mirror |
| Reference flow property | Mass (93a60a56-a3c8-11da-a746-0800200b9a66) |
| Reference unit group | Units of mass (93a60a57-a4c8-11da-a746-0800200c9a66) |
| Reference unit | kg |
| Required qualifiers | subtype; metal/alloy; dimensions; finish; mirror insert; geography; period; packaging exclusion |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mu_mass | products, materials, wastes, emissions | Mass | kg | Use calibrated mass records; declare solution concentration. |
| mu_energy | electricity | Net calorific value | MJ | Convert metered kWh at 3.6 MJ/kWh; disclose grid geography. |
| mu_gas | natural gas | Volume | m3 | State reference temperature and pressure. |

## 5. System Boundary

Include receiving, on-site forming/casting, cleaning, mechanical finishing, plating/coating actually performed, curing, assembly, inspection, rework, and waste handling. Purchased materials, energy, water, chemicals, mirror inserts, and treatment services are inputs; product, wastes, and direct emissions are outputs. Use separate upstream datasets and disclose outsourced operations.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased metal stock/ingot and components at factory gate |
| starting_condition_role | Upstream product inputs |
| product_classification_scope | CPC 42996 finished articles only |
| recursive_input_rule | Keep upstream production outside foreground processes |
| upstream_dataset_requirement | Representative geography, technology, and product state |
| disclosure | Declare routes, outsourced steps, recycled content, coating, and mirror insert boundary |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sheet_forming | Sheet forming | conditional | Include when sheet, plate, or strip is formed on site | form components | 1 kg process output |
| metal_casting | Metal casting | conditional | Include when a component is cast on site | cast components | 1 kg process output |
| surface_finishing | Surface finishing | required | Model actual mechanical, wet, plating, or coating operations | finish components | 1 kg process output |
| final_assembly | Final assembly | required | Always include; one-piece goods include final inspection | release product | 1 kg process output |

### Process: Sheet forming (`sheet_forming`)

#### Inputs

##### Product flows

###### Carbon steel sheet (`carbon_steel_sheet`)

Atomic inputs exchange measured from site records.

- Selected flow: Carbon steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

###### aluminium sheet (`aluminium_sheet`)

Atomic inputs exchange measured from site records.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

###### Brass plate and strip (`brass_plate_strip`)

Atomic inputs exchange measured from site records.

- Selected flow: Brass plate and strip `fff74890-cdbb-4184-84cc-b2d90582b28f`
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

###### Electricity (`sheet_fabrication_electricity`)

Atomic inputs exchange measured from site records.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

#### Outputs

##### Product flows

###### Formed base-metal sheet component (`formed_sheet_component`)

Atomic outputs exchange measured from site records.

- Selected flow: Formed base-metal sheet component
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

#### Outputs

##### Waste flows

###### Post-industrial steel scrap (`post_industrial_steel_scrap`)

Atomic outputs exchange measured from site records.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

###### Aluminium Scrap (`aluminium_scrap`)

Atomic outputs exchange measured from site records.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

###### Brass scrap (`brass_scrap`)

Atomic outputs exchange measured from site records.

- Selected flow: Brass scrap
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

### Process: Metal casting (`metal_casting`)

#### Inputs

##### Product flows

###### Zinc alloy ingot (`zinc_alloy_ingot`)

Atomic inputs exchange measured from site records.

- Selected flow: Zinc alloy ingot
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

###### Electricity (`casting_electricity`)

Atomic inputs exchange measured from site records.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

###### natural gas in the gaseous state (`casting_natural_gas`)

Atomic inputs exchange measured from site records.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

#### Outputs

##### Product flows

###### Cast base-metal component (`formed_cast_component`)

Atomic outputs exchange measured from site records.

- Selected flow: Cast base-metal component
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

#### Outputs

##### Waste flows

###### zinc scrap (`zinc_scrap`)

Atomic outputs exchange measured from site records.

- Selected flow: zinc scrap `b1629e09-83ea-4027-aab4-3a02406fac02`
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

#### Outputs

##### Elementary flows

###### carbon dioxide (fossil) (`casting_fossil_co2`)

Atomic outputs exchange measured from site records.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

### Process: Surface finishing (`surface_finishing`)

#### Inputs

##### Product flows

###### Formed base-metal component (`formed_component_input`)

Atomic inputs exchange measured from site records.

- Selected flow: Formed base-metal component
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

###### Electricity (`finishing_electricity`)

Atomic inputs exchange measured from site records.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

###### Process Water (`finishing_process_water`)

Atomic inputs exchange measured from site records.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

###### Sodium hydroxide (`finishing_sodium_hydroxide`)

Atomic inputs exchange measured from site records.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

###### Powder Coating (`powder_coating`)

Atomic inputs exchange measured from site records.

- Selected flow: Powder Coating `0c581697-0eed-4b86-a070-b94966eb7344`
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

#### Outputs

##### Product flows

###### Finished base-metal component (`finished_component`)

Atomic outputs exchange measured from site records.

- Selected flow: Finished base-metal component
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

#### Outputs

##### Waste flows

###### Powder coating waste (`powder_coating_waste`)

Atomic outputs exchange measured from site records.

- Selected flow: Powder coating waste `9aa53a82-5462-400e-9096-efab7718201f`
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

###### Waste Alkaline Liquor (`waste_alkaline_liquor`)

Atomic outputs exchange measured from site records.

- Selected flow: Waste Alkaline Liquor `ce738ef0-a711-4650-a38b-34479efd7559`
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

### Process: Final assembly (`final_assembly`)

#### Inputs

##### Product flows

###### Finished base-metal component (`finished_component_input`)

Atomic inputs exchange measured from site records.

- Selected flow: Finished base-metal component
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

###### Silver mirror (`silver_mirror`)

Atomic inputs exchange measured from site records.

- Selected flow: Silver mirror `649a8d8c-ee6e-466e-8252-3a4bb54e6fa9`
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

###### Electricity (`assembly_electricity`)

Atomic inputs exchange measured from site records.

- Selected flow: Electricity `67b723a9-6f63-4802-adca-b52ce7967d47`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

#### Outputs

##### Product flows

###### CPC 42996 base-metal ornament, frame, or mirror (`reference_product`)

Atomic outputs exchange measured from site records.

- Selected flow: CPC 42996 base-metal ornament, frame, or mirror
- Flow property / unit: Mass / kg
- Amount rule: Measure and normalize to 1 kg process output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg process output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: cp_exchange_records
- Sources:

## 7. Allocation and Co-product Handling

First subdivide by product family and route. If impracticable, use documented system expansion only for a substituted function; otherwise allocate shared exchanges by physical causality such as machine time, treated area, bath loading, or mass. Economic allocation is last resort and requires sensitivity analysis. Do not credit scrap without an explicit recycling convention and receiving-treatment boundary.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_exchange_records | all | each atomic exchange | meter, scale, invoice, batch or waste ticket | value, unit, date, process, product, route, record id | reconcile readings with purchases, stock change, production, and dispatch | row unit | batch or monthly | representative 12 months | all included lines | sum by row / conforming process output mass | calibration, record, reconciliation, variance review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_normalize | every row | reporting-period exchange / conforming process output mass | exchange; output mass | amount per kg output |  |
| calc_balance | each process | metal inputs = product metal + scrap + measured losses, adjusted for stock change | mass records | residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_period | foreground | Representative continuous 12 months or justified shorter coverage. | dated records |
| dq_route | processes | Keep forming, casting, wet treatment, and coating routes visible before aggregation. | routing records |
| dq_balance | metals | Investigate and disclose mass-balance residual and recycling-loop accounting. | reconciliation |

## 9. Validation Rules

Verify one 1 kg reference output; route completeness without double counting; links between intermediate outputs and inputs; metal balance; Section 4 units; atomic rows; measured direct fossil CO2 only; audited UUID identity/type/property/unit; and explicit unresolved UUID rows.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground production dataset |
| downstream_use | Flow, process, and lifecycle-model construction |
| allowed_use | Declared subtype, alloy, finish, geography, technology, and period |
| excluded_use | Undeclared sector average; use or end-of-life claims |
| required_metadata | reference qualifiers, route shares, recycled content, outsourcing, allocation |
| required_quality_disclosure | coverage, metering, estimates, balance, exclusions, unresolved identities |
| update_trigger | change in mix, alloy, route, finish, site, energy, or allocation |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| un-cpc-3-0-structure-2025 | dataset | https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | identity |
| eu-jrc-smitheries-foundries-bref | official_guidance | https://eippcb.jrc.ec.europa.eu/reference/smitheries-and-foundries-industry | forming, casting, machining, finishing |
| eu-jrc-stm-bref-2006 | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf | electrolytic and chemical treatment |
| eu-jrc-sts-bref-2020 | official_guidance | https://eippcb.jrc.ec.europa.eu/reference/surface-treatment-using-organic-solvents-including-wood-and-wood-products-preservation | coating, painting, degreasing |
| us-epa-ap42-electroplating-2021 | official_guidance | https://www.epa.gov/sites/default/files/2020-11/documents/b12s20.pdf | cleaning, dipping, rinsing, plating, mists |
| eu-commission-pef-2021 | official_guidance | https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021H2279R%2801%29 | allocation and data quality |
