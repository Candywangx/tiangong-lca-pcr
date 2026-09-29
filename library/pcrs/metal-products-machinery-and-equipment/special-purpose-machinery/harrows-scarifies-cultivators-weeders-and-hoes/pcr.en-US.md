---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.harrows-scarifies-cultivators-weeders-and-hoes
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Harrows, scarifies, cultivators, weeders and hoes

## 1. Scope and Applicability

Manufacture of one new, complete harrow, scarifier, cultivator, weeder or hoe in its accepted sale configuration. Manual and mounted designs are covered when their actual materials and routes are declared. Tractors, ploughs, seeders, separately sold parts, field use and end of life are excluded. Producers must add separately identified atomic BOM exchanges for actual components outside the representative rows below. The production dataset includes purchased input supply through linked background datasets and foreground fabrication, finishing, assembly and dispatch preparation. Product identity follows `un-cpc-3-2025`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.harrows-scarifies-cultivators-weeders-and-hoes |
| classification_refs | CPC 3.0 44112 (`un-cpc-3-2025`) |
| covered_products | Complete harrows, scarifiers, cultivators, weeders and hoes for soil preparation or cultivation |
| excluded_products | Ploughs; seeders; tractors; separately sold parts; residual other soil machinery |
| representative_product | Accepted complete steel-frame cultivator with declared working tools and hitch |
| production_route | Purchased materials and parts; cutting/forming; conditional welding and coating; assembly, inspection and packaging |
| market_state | New accepted complete implement at factory gate; dispatch packaging reported separately |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide one complete implement for soil preparation or cultivation. |
| How much | One accepted finished implement of the declared configuration. |
| How well | Meets the manufacturer's declared configuration and acceptance specification. |
| How long or cycle | Factory-gate manufacture; no assumed field life or operating cycle. |
| reference_flow_link | `finished_implement` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Harrows, scarifies, cultivators, weeders and hoes `b7ca7dbf-8da6-4c2f-b5fc-2751058a221b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Subtype; model and configuration; manual or mounted drive; working width; principal materials; accepted net mass M; site and period. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased steel and other physical inputs at supplier delivery states, identified by actual BOM item. |
| starting_condition_role | Start of the foreground manufacturing unit process. |
| product_classification_scope | Complete named soil-working implements under CPC 44112. |
| recursive_input_rule | Record a purchased same-category complete implement only if physically incorporated; do not recursively model its manufacture in this foreground unit process. |
| upstream_dataset_requirement | Link each purchased atomic input to a state- and geography-appropriate upstream dataset; disclose unavailable matches. |
| disclosure | Declare site, period, operations, configuration, purchased subassemblies, packaging and excluded life-cycle stages. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | production dataset | Include fabrication, applicable finishing, assembly and dispatch preparation through factory gate; report packaging separately from net product mass. | |
| `boundary_variant` | configuration | Include conditional exchanges only when the documented route uses them; add distinct atomic BOM exchanges for other actual components. | |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `implement_manufacturing` | Integrated implement manufacture | required | Every accepted complete implement | Cutting, forming, applicable welding/coating, assembly and dispatch preparation | per one accepted finished machine |

### Process: Integrated implement manufacture (`implement_manufacturing`)

#### Inputs

##### Product flows

###### Hot-rolled non-alloy steel sheet (`steel_sheet`)

Purchased sheet issued to the declared steel-frame route; distinguish other grades and shapes in the actual BOM.

- Selected flow: Non-Alloy Steel `ce3ac926-5d6f-4558-9edc-67179d93dde4`
- Flow property / unit: Mass / kg
- Amount rule: Collect sheet issued per one accepted finished machine from material issue and BOM records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Inclusion condition: Only when hot-rolled non-alloy steel sheet is used.

###### Alternating-current electricity (`electricity_ac`)

Record attributable purchased alternating-current energy consumed during manufacture.

- Selected flow: Alternating current `8bfc48b1-c262-4156-a817-b2c8a1b21598`
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect metered energy attributable per one accepted finished machine in MJ.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`

###### Flux-cored welding wire (`welding_wire`)

Consumed wire on the documented flux-cored arc welding route.

- Selected flow: Flux Cored Wire `1b74a576-06e0-4764-97ce-11a73f8a4752`
- Flow property / unit: Mass / kg
- Amount rule: Collect wire issued less traceable unused returns per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Inclusion condition: Only when flux-cored arc welding is used.

###### Polyester powder coating (`polyester_powder`)

Purchased dry polyester powder only where this finishing route is used; exact public flow UUID remains unresolved.

- Selected flow: Polyester powder coating
- Flow property / unit: Mass / kg
- Amount rule: Collect powder consumption per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Inclusion condition: Only when polyester powder coating is applied.

###### Corrugated dispatch box (`corrugated_box`)

Record box mass separately from accepted net machine mass when this packaging accompanies the implement.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Collect box mass per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Inclusion condition: Only when a corrugated dispatch box is used.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished implement (`finished_implement`)

The complete inspected implement without dispatch packaging.

- Selected flow: Harrows, scarifies, cultivators, weeders and hoes `b7ca7dbf-8da6-4c2f-b5fc-2751058a221b`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`

##### Waste flows

###### Fabrication steel offcuts (`steel_scrap`)

Segregated post-industrial steel scrap leaving cutting and forming operations.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass / kg
- Amount rule: Collect segregated scrap mass per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap`
- Inclusion condition: Only when steel cutting or forming generates offcuts.

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_shared` | shared manufacturing inputs | Prefer separately metered or subdivided operations; otherwise allocate shared inputs to accepted configurations using a documented physical driver and disclose the driver and period. | `ghg-product-2011` |
| `allocation_scrap` | steel scrap | Record scrap as a waste output and disclose its destination; do not credit avoided virgin steel in this foreground inventory without a separately declared method. | `ghg-product-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `implement_manufacturing` | reference product | calibrated weighing and acceptance record | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted configuration | declared production period | manufacturing site | accepted net mass per machine | scale calibration and acceptance record |
| `cp_bom` | `implement_manufacturing` | purchased material and packaging inputs | BOM and material issue records | model; configuration; item identity; issued mass; unused return; accepted units | Reconcile purchased material and box issues to the actual configuration and accepted output. | kg | each production lot | declared production period | manufacturing site | net issued mass / accepted machines | supplier specification and issue ledger |
| `cp_energy` | `implement_manufacturing` | electricity input | meter and production records | meter reading; period; allocated MJ; accepted units | Read calibrated meter or utility record; convert kWh to MJ using 3.6 MJ/kWh and reconcile shared use by a documented driver. | MJ | each reporting period | declared production period | manufacturing site | attributable electricity / accepted machines | meter or utility record and allocation worksheet |
| `cp_scrap` | `implement_manufacturing` | steel scrap output | segregated scrap weighing | scrap mass; period; accepted units; destination | Weigh segregated steel offcuts and reconcile with material issue. | kg | each collection batch | declared production period | manufacturing site | attributable scrap / accepted machines | scale record and waste transfer note |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | all rows | Match BOM, metering and acceptance records to the declared configuration and period; identify excluded components. | BOM, production and acceptance records |
| `dq_balance` | material and scrap rows | Reconcile major steel input, accepted net product and segregated scrap; explain purchased parts and other outputs. | signed material balance |
| `dq_background` | purchased inputs | Document upstream dataset state, geography, technology and temporal fit; disclose missing matches. | supplier and background dataset metadata |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_mass` | reference product | Confirm M is measured accepted net mass of the same complete configuration and excludes dispatch packaging. | `un-cpc-3-2025` |
| `validate_inventory` | inventory | Confirm atomic included rows, documented route conditions, per-machine quantities and distinct exchanges for other actual BOM items. | `ghg-product-2011` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground production inventory suitable for review as a secondary or background dataset |
| downstream_use | product flow, process and lifecyclemodel projections |
| allowed_use | Modelling an accepted implement with matching subtype, configuration and manufacturing route. |
| excluded_use | Inferring field-use lifetime, soil performance or unrecorded component quantities. |
| required_metadata | Site; period; subtype; model; configuration; accepted net mass M; working width; materials; operations; allocation driver. |
| required_quality_disclosure | Metering, BOM and weighing provenance; conditional routes; upstream dataset fit; unresolved UUID and range evidence. |
| update_trigger | Configuration, supplier, finishing route or manufacturing technology change. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | UN Statistics Division, CPC Version 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Product identity; retrieved 2026-09-24. |
| `ghg-product-2011` | standard | GHG Protocol, *Product Life Cycle Accounting and Reporting Standard*, 2011, section 9.2, pp. 62–63; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | Avoiding and performing allocation. |
