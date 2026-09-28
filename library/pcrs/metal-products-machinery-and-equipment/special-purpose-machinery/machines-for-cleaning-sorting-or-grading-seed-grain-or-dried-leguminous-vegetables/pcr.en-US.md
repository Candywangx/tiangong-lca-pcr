---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machines-for-cleaning-sorting-or-grading-seed-grain-or-dried-leguminous-vegetables
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Machines for cleaning, sorting or grading seed, grain or dried leguminous vegetables

## 1. Scope and Applicability

This PCR covers manufacture to the factory gate of a complete machine whose principal function is cleaning, sorting or grading seed, grain or dried legumes. The declared model and accepted configuration determine applicable components. Crop processing, lifetime operation, post-gate transport, installation and end of life are outside this production dataset. CPC 3.0 distinguishes these complete machines from cleaning machines for other produce, milling machinery and separately sold parts [`un-cpc-3-2025`].

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.machines-for-cleaning-sorting-or-grading-seed-grain-or-dried-leguminous-vegetables |
| classification_refs | CPC 3.0: 44128 [`un-cpc-3-2025`] |
| covered_products | Complete machines for cleaning, sorting or grading seed, grain or dried legumes. |
| excluded_products | Separately sold parts; crop-cleaning service; processed crop; milling or grinding machines; machines for eggs, fruit or other produce. |
| representative_product | Accepted complete electrically driven seed or grain cleaner and grader. |
| production_route | Purchased materials and components; applicable fabrication; assembly and factory acceptance test. Disclose subcontracted steps. |
| market_state | New accepted complete machine at factory gate, excluding transport packaging. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture one complete machine to clean, sort or grade seed, grain or dried legumes. |
| How much | One accepted finished machine of the declared configuration. |
| How well | Acceptance-tested for the declared separation function; record throughput, drive and screen configuration. |
| How long or cycle | One production and acceptance cycle to factory gate; operating life is outside this reference. |
| reference_flow_link | `finished_machine` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Machines for cleaning, sorting or grading seed, grain or dried leguminous vegetables `043e01da-e959-43fb-b5c3-50851590caec` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Model and configuration; crop class; separation function; drive and screen; rated throughput and power; acceptance state; net mass M. |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete machine of the same configuration in kg; collect using cp_mass. |
| `electricity_unit` | `factory_electricity` | Net calorific value | MJ | Convert metered kWh to MJ using 1 kWh = 3.6 MJ; retain the original meter reading. |

## 5. System Boundary

Record delivered purchased inputs, applicable metal fabrication, assembly, factory test and directly attributable wastes. Model upstream production of purchased inputs with state-appropriate background datasets. Include subcontracted fabrication when part of the declared route. EPA identifies cutting and painting wastes as operation-specific possibilities, not machine-specific quantities [`us-epa-sector-aa-2006`].

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | complete machine | Start at delivered purchased materials and components; end at the accepted unpackaged machine at factory gate. | `un-cpc-3-2025` |
| `boundary_use` | downstream | Exclude crop processing, lifetime operation, post-gate distribution and end of life; disclose them separately when modelled. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased materials and components delivered to the manufacturing site. |
| starting_condition_role | Upstream input boundary for complete-machine production. |
| product_classification_scope | Complete seed, grain and dried-legume cleaning, sorting or grading machines; CPC 44128 is mapping context. |
| recursive_input_rule | Record a purchased same-category complete machine as an explicit input with one upstream dataset; do not recursively expand it into this foreground. |
| upstream_dataset_requirement | Use state- and geography-appropriate datasets for sheet steel, motors and electricity; disclose missing datasets and proxies. |
| disclosure | Declare model, configuration, fabrication and subcontracting, test practice, suppliers and exclusions. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `machine_production` | Fabrication, assembly and factory test | required | Complete machine produced and accepted; sheet and AC-motor rows apply only when present in the declared configuration. | Foreground production | One accepted machine; measured net mass M kg. |

### Process: Fabrication, assembly and factory test (`machine_production`)

#### Inputs

##### Product flows

###### Cold-rolled non-alloy steel sheet (`steel_sheet`)

Include only when sheet is fabricated into the declared machine. Reviewed candidates did not establish a consistent exact sheet-steel UUID.

- Selected flow: Cold-rolled non-alloy steel sheet
- Flow property / unit: Mass / kg
- Amount rule: Record consumed sheet stock from issue and return records per one accepted finished machine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources:

###### Purchased AC electric motor (`ac_motor`)

Include the installed purchased AC drive motor when present in the accepted configuration.

- Selected flow: Electric motor `014f80a3-c257-425b-9b75-3e5a18573695`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record installed motor mass per one accepted finished machine from the bill of materials and supplier evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_bom`
- Sources:

###### Factory electricity (`factory_electricity`)

Include electricity attributable to fabrication, assembly and acceptance testing.

- Selected flow: Alternating current `4d0361a3-56cc-45f9-aa42-bb9103285bf9`
- Flow property / unit: Net calorific value / MJ; unit group Units of energy
- Amount rule: Record attributable electricity in MJ per one accepted finished machine from the meter and production log.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted complete machine (`finished_machine`)

The output is the unpackaged accepted machine of the same configuration and measured mass M as the reference flow.

- Selected flow: Machines for cleaning, sorting or grading seed, grain or dried leguminous vegetables `043e01da-e959-43fb-b5c3-50851590caec`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources:

##### Waste flows

###### Fabrication steel offcuts (`steel_offcuts`)

Include sheet-derived steel scrap from in-house cutting or forming, whether sold for recycling or sent to treatment. Do not net it against steel input.

- Selected flow: Post-industrial steel scrap `c143745d-be4f-4d8f-b403-2dcbfe685349`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh attributable sheet-steel offcuts per one accepted machine; include only when sheet cutting or forming occurs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished machine
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap`
- Sources: `us-epa-sector-aa-2006`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocate_direct` | foreground resources | Attribute material, motor, electricity and scrap to the declared configuration using traceable production orders and meters. |  |
| `allocate_shared` | shared resources | If direct records are unavailable, use a documented physical driver linked to actual shared activity, such as machine-hours; report numerator, denominator and sensitivity. |  |
| `scrap_no_credit` | steel offcuts | Record steel scrap as a separate waste output; place any recycling credit in a distinct downstream or sensitivity model. | `us-epa-sector-aa-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `machine_production` | accepted complete machine | weighing and acceptance | model; configuration; serial number; accepted net mass M | Weigh the accepted complete machine on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each model or accepted lot | declared production period | manufacturing factory | accepted net mass per machine | calibration; acceptance record |
| `cp_bom` | `machine_production` | sheet and motor | BOM and stock issue | model; material and motor specification; issued mass; returned mass; installed mass | Reconcile issue, returns and installed components to the production order and accepted configuration. | kg | each production order | declared production period | factory and named suppliers | per one accepted finished machine | BOM revision; issue vouchers; supplier specification |
| `cp_energy` | `machine_production` | electricity | meter and production log | meter start; meter end; kWh; machine count | Read calibrated meter for attributable fabrication, assembly and test; exclude unrelated loads and retain allocation evidence. | MJ | each order or reporting period | declared production period | manufacturing factory | per one accepted finished machine | meter readings; calibration; test log |
| `cp_scrap` | `machine_production` | steel offcuts | waste weighing | scrap mass; waste type; generating order; accepted count | Weigh segregated steel offcuts and reconcile to sheet issues and treatment records. | kg | each order or reporting period | declared production period | manufacturing factory | per one accepted finished machine | weighbridge ticket; stock balance; transfer record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `electricity_conversion` | `factory_electricity` | Metered kWh multiplied by 3.6 gives MJ; attribute to the order and divide by accepted machine count. | kWh meter difference; order attribution; accepted machine count; `cp_energy` | MJ per accepted machine |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | all inventory rows | Match accepted model, configuration and period to M; disclose absent sheet or AC-motor rows. | production order; BOM; acceptance record |
| `dq_completeness` | all inventory rows | Reconcile the complete bill of materials and significant processing energy and waste; disclose missing flow identities or supplier datasets. | BOM; meters; waste ledger; gap log |
| `dq_mass` | `steel_sheet`, `steel_offcuts`, `finished_machine` | Explain material-balance differences; do not assume all finished mass is sheet steel. | stock movement; scales; accepted mass |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | `finished_machine` | Require one accepted complete machine with positive M from `cp_mass`, matching configuration and output M kg. |  |
| `validate_atomicity` | all inventory rows | Require one physical exchange per row with direction, flow type, property, unit and applicable collection protocol. |  |
| `validate_evidence` | `steel_sheet`, `factory_electricity`, `steel_offcuts` | Require primary quantity records; keep unresolved UUID blank instead of assigning a proxy. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground secondary dataset for production of one accepted complete machine. |
| downstream_use | Link to process or lifecyclemodel calculations for specified configurations. |
| allowed_use | Compare like-for-like factory-gate production after checking model, route and data quality. |
| excluded_use | No inference of operating performance, crop-processing impact, lifetime or universal machine mass. |
| required_metadata | Model; lot; crop class; separation and motor configuration; throughput; power; factory; period; measured M; upstream datasets. |
| required_quality_disclosure | Weighing and meter methods; BOM coverage; shared allocations; subcontracting; unresolved identities and ranges; exclusions. |
| update_trigger | Changed configuration, supplier state, fabrication route, measured mass or production-energy profile. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (accessed 2026-09-24). | Product identity and adjacent class boundary; no inventory amount. |
| `us-epa-sector-aa-2006` | Official guidance (`official_guidance`) | US EPA, Sector AA: Fabricated Metal Products Manufacturing Facilities, EPA 833-F-06-042, https://www.epa.gov/sites/default/files/2015-10/documents/sector_aa_fabmetal.pdf (accessed 2026-09-24), Table 1. | Conditional fabrication scrap screening; no machine-specific quantities. |
