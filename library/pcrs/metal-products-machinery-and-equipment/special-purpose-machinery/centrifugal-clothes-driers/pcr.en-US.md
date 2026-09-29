---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.centrifugal-clothes-driers
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Centrifugal clothes driers

## 1. Scope and Applicability

This rule covers production of a complete, stand-alone centrifugal machine that removes liquid water from washed clothes by rotating a perforated drum. The finished machine is accepted at the manufacturer's gate. It may be intended for domestic or professional use; the declared configuration, capacity, drive and intended market are part of the data package. A washer with only an integrated spin stage, a heated tumble dryer, a textile press, a food centrifuge and a spare part alone are outside this product boundary. The distinction between separate mechanical extraction and thermal drying follows `lot24-task1-2011`; the complete-machine classification follows `un-cpc-3-2025`. `orbegozo-sc4600` documents a complete domestic example with a stainless steel drum and centrifugal extraction, but its specifications are not a category-wide manufacturing range.

This is a cradle-to-factory-gate foreground production rule: upstream supply of purchased inputs is linked to appropriate background datasets, and in-factory fabrication, assembly, acceptance testing, packing when present, and outgoing production wastes are recorded. Distribution after the factory gate, customer use, maintenance, and end of life are outside this dataset profile; a full life-cycle study can add them as separately described stages. The stage distinction follows `ec-pef-2021`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.centrifugal-clothes-driers |
| classification_refs | CPC 3.0 44911, Centrifugal clothes driers (`un-cpc-3-2025`) |
| covered_products | Complete stand-alone centrifugal clothes driers or spin extractors with a rotating perforated drum for dewatering textiles |
| excluded_products | Integrated washer spin stages, thermal tumble dryers, water presses, food centrifuges, unassembled parts and replacement subassemblies |
| representative_product | One accepted complete motor-driven centrifugal clothes drier of a declared configuration; this is a configuration descriptor, not a fixed mass or capacity |
| production_route | Purchased components and sheet stock; drum fabrication where performed; final assembly, functional acceptance and conditional packing |
| market_state | Finished complete machine at manufacturer's factory gate, net of transport packaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A complete machine that mechanically extracts water from washed clothes by centrifugal rotation (`lot24-task1-2011`) |
| How much | One accepted complete machine of the declared configuration |
| How well | Perforated rotating drum, drive and safety controls meet the producer's documented acceptance specification; record capacity and test result |
| How long or cycle | One factory-gate handover of an accepted machine; no in-use service-life claim is included |
| reference_flow_link | `finished_drier` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Centrifugal clothes driers `c6fb37f3-a8e3-4178-99c5-c2dd06e2dac1` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | manufacturer; model and configuration; serial or batch; domestic or professional intended market; rated textile load; drum material; drive type; acceptance test; measured net machine mass M; factory gate; packing status |

When constructing a foreground data package, all Required qualifiers must be declared in metadata, process notes, the reference-flow comment or an equivalent field. A missing qualifier makes that package's reference-flow definition incomplete. M is measured for the actual accepted configuration; this PCR specifies no numeric machine mass.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `inventory_basis` | all inventory rows | Row-specific mass or energy | kg or MJ | Collect exchanges per one accepted finished machine of the same configuration. Count rejected machines only through attributable inputs and wastes; do not use them as accepted output. |

## 5. System Boundary

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | production system | Include purchased material and component supply through background links, in-factory fabrication, assembly, acceptance-test energy, conditional factory packing, and wastes before gate exit. Do not put customer operation or post-gate distribution into this foreground dataset. | `ec-pef-2021` |
| `boundary_no_integrated_washer` | product identity | Treat a separate centrifugal extractor as the product; an integrated washer spin stage and a thermal tumble dryer have different product boundaries. | `lot24-task1-2011` |
| `boundary_direct_emissions` | plant emissions | Where the declared route produces a direct emission, measure and report its specific elementary flow separately; do not hide it in a waste or utility row. | `ec-pef-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased sheet stock and components enter the reporting factory; disclose material specification, supplier state, and whether the drum is fabricated on site. |
| starting_condition_role | The factory entry of purchased inputs starts the foreground manufacturing stage. |
| product_classification_scope | The finished complete-machine output is CPC 3.0 44911; purchased motors, materials and boxes retain their own identities. |
| recursive_input_rule | If a complete centrifugal clothes drier is purchased and reworked as an input, retain it as a separately declared upstream machine input; do not count the same machine output recursively. |
| upstream_dataset_requirement | Link each purchased input and delivered electricity to geographically and technologically representative upstream datasets; disclose missing exact identities. |
| disclosure | State factory, period, model/configuration, component sourcing, drum-fabrication route, grid supply, packaging state, scrap destination, exclusions and shared-process allocation. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `drum_fabrication` | Perforated drum fabrication | conditional | Include when stainless sheet is cut and formed at the reporting factory; otherwise record the purchased drum as a separately verified component input. | Foreground fabrication and offcut accounting | per one accepted finished machine |
| `final_assembly` | Final assembly, acceptance and packing | required | Include for every accepted complete machine; record a corrugated carton only when fitted before the factory gate. | Foreground completion | per one accepted finished machine |

### Process: Perforated drum fabrication (`drum_fabrication`)

#### Inputs

##### Product flows

###### Stainless steel sheet for the perforated drum (`drum_stainless_sheet`)

Record the measured mass of stainless sheet issued to the drum-fabrication operation when this route is performed. The material grade and purchased product state must be retained with the bill of materials; no exact public flow UUID is yet confirmed. Inclusion condition: on-site sheet-to-drum fabrication. `orbegozo-sc4600` supports a stainless drum as a real configuration, not a universal material share.

- Selected flow: Stainless steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Record sheet issue attributable to per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `orbegozo-sc4600`

#### Outputs

##### Waste flows

###### Stainless steel sheet offcuts (`drum_steel_offcuts`)

Weigh segregated offcuts leaving drum fabrication and record alloy grade and treatment destination. Inclusion condition: on-site sheet-to-drum fabrication. Do not give an avoided-burden credit without a separately documented treatment model.

- Selected flow: Stainless steel sheet offcuts
- Flow property / unit: Mass / kg
- Amount rule: Record offcut mass attributable to per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap`
- Sources: `ec-pef-2021`

### Process: Final assembly, acceptance and packing (`final_assembly`)

#### Inputs

##### Product flows

###### Purchased electric motor (`assembly_motor`)

Record the installed motor mass from the configuration-controlled bill of materials and receipt or weighing record. Report any different drive configuration in the data package.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record installed motor mass attributable to per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `orbegozo-sc4600`

###### Alternating-current electricity (`assembly_ac_electricity`)

Measure electricity attributable to assembly and acceptance testing at the factory meter. Record supply voltage, geography and upstream grid dataset separately; duplicate public AC flow identities require review before assigning a UUID.

- Selected flow: Alternating current
- Flow property / unit: Energy / MJ
- Amount rule: Record metered electricity attributable to per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `ec-pef-2021`

###### Corrugated shipping box (`assembly_corrugated_box`)

Record the measured mass of a corrugated box fitted to the accepted machine before factory-gate exit. Inclusion condition: this box is actually used; otherwise the row is not applicable. The box is excluded from net machine mass M.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record fitted box mass attributable to per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_components`
- Sources: `ec-pef-2021`

#### Outputs

##### Product flows

###### Accepted complete centrifugal clothes drier (`finished_drier`)

Weigh the accepted complete machine in its declared configuration, excluding transport packaging and loose spares. Record a serial or batch identifier and signed acceptance result. M is the actual net mass, not a category default.

- Selected flow: Centrifugal clothes driers `c6fb37f3-a8e3-4178-99c5-c2dd06e2dac1`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc-3-2025`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared factory activities | Prefer product- and operation-specific bills, meters and waste records to separate the drier route from other products before allocating shared burdens. | `ec-pef-2021` |
| `allocation_physical` | inseparable shared activities | Where subdivision is impossible, use a documented causal physical driver such as measured machine-hours for shared electricity; record numerator, denominator, period and sensitivity. Do not use a fixed category factor. | `ec-pef-2021` |
| `allocation_scrap` | sheet offcuts | Report actual offcut mass and destination as an outgoing waste flow. Model recycling or disposal in the receiving system and disclose any separate credit method; do not silently net waste against sheet input. | `ec-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `final_assembly` | accepted complete drier | calibrated weighing and acceptance record | manufacturer; model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted machine | reporting period | reporting factory | accepted net mass per machine | scale calibration, tare and signed acceptance record |
| `cp_components` | `drum_fabrication`; `final_assembly` | stainless sheet, motor and conditional corrugated box | controlled bill of materials and material issue | model; configuration; serial or lot; material grade; component identity; issue and installed mass; returns; box fitted flag | Reconcile purchase and issue records with installed or used mass and returns for the accepted configuration. | kg | each production lot | reporting period | reporting factory | attributable net input mass / accepted machines of the same configuration | bill-of-material revision, receipts, issue and return records |
| `cp_electricity` | `final_assembly` | assembly and test electricity | calibrated meter log | meter id; start and end reading; voltage; period; operating hours; accepted units | Submeter assembly and test consumption; when shared, document the measured physical allocation driver. | MJ | each production period | reporting period | reporting factory | attributable metered energy / accepted machines of the same configuration | meter calibration and allocation worksheet |
| `cp_scrap` | `drum_fabrication` | stainless sheet offcuts | weighed scrap dispatch | material grade; scrap mass; lot; destination; accepted units | Weigh segregated offcuts and reconcile the material balance and dispatch record. | kg | each production lot | reporting period | reporting factory | attributable offcut mass / accepted machines of the same configuration | scale calibration, balance and transfer ticket |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `per_item_average` | collected input and waste rows | Divide the attributable exchange total for one configuration and period by its number of accepted complete machines; retain the measured numerator and count. | attributable exchange total; accepted machine count; configuration; period | exchange per one accepted finished machine | `ec-pef-2021` |
| `mass_reconciliation` | `drum_stainless_sheet`; `drum_steel_offcuts`; `finished_drier` | Compare measured sheet issue, installed drum material and segregated offcuts; explain returns, rework and purchased components before accepting the material balance. | sheet issue; installed drum material; offcuts; returns; M | documented material balance | `ec-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | all rows | Use the same declared model and configuration as the accepted reference machine; retain changed bills of materials separately. | controlled bill of materials and acceptance record |
| `dq_period` | all rows | Align meter, issue, scrap and output records to the same reporting period and disclose missing periods. | dated logs and reconciliation |
| `dq_identity` | unresolved rows | Keep the concrete row and amount, but do not assign a proxy Tiangong UUID; resolve material grade, grid context or scrap route before database publication. | direct-read identity review and foreground specifications |
| `dq_sources` | upstream links | Document supplier state, geography, technology and time representativeness of linked datasets. | supplier records and dataset metadata (`ec-pef-2021`) |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference product | Confirm `finished_drier` is one accepted complete machine, that M is a calibrated net kg measurement for the same configuration, and that the signed acceptance record exists. | `un-cpc-3-2025` |
| `validate_rows` | inventory | Confirm each reported exchange is one physical flow, uses its declared collection protocol, and is expressed per one accepted finished machine. | `ec-pef-2021` |
| `validate_boundary` | study boundary | Check that downstream use and distribution are excluded from this factory-gate dataset and conditional drum fabrication and carton rows match actual practice. | `ec-pef-2021`; `lot24-task1-2011` |
| `validate_balance` | material and energy records | Reconcile input, offcut, output, meter and accepted-unit records; disclose unresolved UUIDs and the absence of source-backed quantitative ranges. | `ec-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground factory-gate production dataset for one declared centrifugal clothes drier configuration |
| downstream_use | `secondary_dataset`; `background_dataset` when reviewed and suitable for reuse |
| allowed_use | Link upstream purchased inputs and use the accepted machine as a product output in downstream process or lifecyclemodel models |
| excluded_use | Claiming thermal drying performance, a fixed machine mass, customer-use impacts or a category-wide impact benchmark from this factory record |
| required_metadata | PCR id; CPC reference; manufacturer; model and configuration; serial or lot; capacity; drum material; drive; factory and period; M; testing; packing; allocation; upstream links |
| required_quality_disclosure | Measurement uncertainty, record coverage, supplier and grid representativeness, direct-flow identity gaps, scrap route and unresolved range evidence |
| update_trigger | Material change in machine configuration, component sourcing, production route, factory supply, allocation or acceptance specification |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division, *CPC Ver. 3.0 Structure*, 30 June 2025, [official CSV](https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv), accessed 2026-09-27 | Product classification identity only |
| `lot24-task1-2011` | literature | Öko-Institut et al., *Preparatory Studies for Eco-design Requirements of Energy-using Products, Lot 24: Professional Washing Machines, Dryers and Dishwashers, Final Report, Part: Washing Machines and Dryers, Task 1: Definition*, May 2011, [full report](https://ekosuunnittelu.info/wp-content/uploads/2015/09/EuP_Lot24_Wash_T1_Report_ENER_clean.pdf), accessed 2026-09-28 | Separate spin-extractor function and exclusion from thermal dryer boundary |
| `ec-pef-2021` | official_guidance | European Commission, *Annex I. Product Environmental Footprint Method*, 2021, [complete annex](https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf), accessed 2026-09-28 | Factory-gate stage, waste inclusion, data collection and allocation hierarchy |
| `orbegozo-sc4600` | handbook | Sonifer S.A., *Spin Dryer - Instruction Manual*, SC 4600, 05.22, [complete manual](https://codilamar.com/tienda/pdf/otros-manuales/SC4600.pdf), accessed 2026-09-28 | Example of a complete centrifugal drier with perforated stainless drum; no manufacturing range inferred |
