---
pcr_id: pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-milking-and-dairy-machines-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Parts of milking and dairy machines, n.e.c.

## 1. Scope and Applicability

This rule covers manufacture through factory acceptance of a separately supplied, identifiable part intended for a milking or dairy machine. Declare the part number, host machine, material grade, production route, and milk-contact status. Do not average unlike part configurations. Complete milking machines and dairy machines are outside this PCR. Packaging, distribution, installation, use, maintenance, and end-of-life are outside the factory-gate result unless separately modelled. UN CPC 3.0 distinguishes parts in 44139 from complete machines in 44131 and 44132 (`un-cpc-3-2025`). A manufacturer leaflet identifies steel and NBR dairy-machine components, but does not establish a transferable manufacturing route or amount (`alfalaval-h20-separator`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.special-purpose-machinery.parts-of-milking-and-dairy-machines-n-e-c |
| classification_refs | CPC 3.0:44139; classification context only (`un-cpc-3-2025`) |
| covered_products | Accepted, separately supplied milking-machine or dairy-machine parts, one declared part configuration per dataset. |
| excluded_products | Complete machines, generic unassigned material stock, hygiene consumables, and replacement services. |
| representative_product | One accepted milk-contact machine part of a declared steel or elastomer configuration. |
| production_route | Declare actual metal stock fabrication or elastomer forming; record any other actual route as specific exchanges. |
| market_state | Accepted finished part at the manufacturer's gate, net of transport packaging. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | An accepted finished part for an identified milking or dairy machine. |
| How much | 1 kg accepted net finished part mass. |
| How well | Part number, material grade, host-machine compatibility, acceptance status, and milk-contact status declared. |
| How long or cycle | One accepted production lot; no assumed service life. |
| reference_flow_link | `finished_part_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Parts of milking and dairy machines, n.e.c. `0ea78094-45f3-4068-9e30-73c26232c351` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | part number; host machine and function; material grade; manufacturing route; milk-contact status; acceptance lot; accepted net mass; geography and reporting period |

Declare these qualifiers in dataset metadata, process notes, or the reference-flow comment. The same accepted lot and net mass are the denominator for all inventory rows.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | `finished_part_output` | Mass | kg | Weigh accepted finished parts for the declared lot using a calibrated scale, excluding transport packaging and rejected parts; use `cp_finished_mass`. Measured accepted net mass is the denominator for per-kg inventory. |
| `electricity_unit` | `electricity_input` | Electrical energy | kWh | Retain metered electrical energy in kWh; divide electrical MJ by 3.6 if conversion is necessary. Net calorific value is not electrical energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased, grade-identified material enters the part manufacturer's foreground boundary. |
| starting_condition_role | Material input at factory receipt; supplier production belongs to linked upstream datasets. |
| product_classification_scope | Separately supplied parts under the semantic 44139 boundary, with one identified configuration per dataset. |
| recursive_input_rule | Record a purchased 44139 part once and link its upstream dataset; do not reproduce the supplier's inventory in this foreground process. |
| upstream_dataset_requirement | Link grade-, geography-, and technology-appropriate upstream datasets for purchased materials and energy. |
| disclosure | Declare part identity, route, included operations, purchased-input boundary, site, period, meter allocation, and excluded downstream stages. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_part_identity` | reference product | Use accepted separately supplied parts; complete machines and unassigned stock are outside the product boundary. | `un-cpc-3-2025` |
| `boundary_actual_operations` | manufacturing | Record actual fabrication, forming, assembly, finishing, cleaning, inspection, and rejects as specific exchanges; omit absent operations. | `alfalaval-h20-separator` |
| `boundary_upstream` | purchased inputs | Link purchased material and energy upstream without double-counting supplier production in the foreground. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `part_manufacture` | Part fabrication and acceptance | required | Every accepted lot; apply material rows only for the declared route. | Foreground production and acceptance | 1 kg accepted net finished part |

### Process: Part fabrication and acceptance (`part_manufacture`)

These rows specify steel-plate and NBR-compound routes plus a shared electricity input. Record every other actual material, utility, direct emission, and waste as a separate atomic exchange in the foreground package. Do not substitute another material into a listed row.

#### Inputs

##### Product flows

###### Alloy steel plate input (`steel_plate_input`)

Include only for a part fabricated from alloy steel plate. Record actual alloy grade and weighed amount; the public flow name is generic and the grade is a dataset qualifier.

- Selected flow: Steel Plate `421db3a5-394d-410b-8ebf-af23a37fc878`
- Flow property / unit: Mass / kg
- Amount rule: net issued kg of alloy steel plate for the declared lot divided by accepted net finished kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_input`
- Sources: `alfalaval-h20-separator`

###### Raw nitrile-butadiene rubber compound input (`nbr_compound_input`)

Include only if an uncured NBR compound is formed into the part. The UUID is unresolved: a vulcanized finished article is not the raw compound.

- Selected flow: Uncured nitrile-butadiene rubber compound
- Flow property / unit: Mass / kg
- Amount rule: net charged kg of uncured NBR compound for the declared lot divided by accepted net finished kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nbr_input`
- Sources: `alfalaval-h20-separator`

###### Purchased alternating-current electricity input (`electricity_input`)

Use the measured electricity attributable to the declared lot. The UUID is unresolved because searched public candidates do not represent metered kWh.

- Selected flow: Purchased grid alternating-current electricity
- Flow property / unit: Electrical energy / kWh
- Amount rule: attributable metered kWh divided by accepted net finished kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted finished part (`finished_part_output`)

Report accepted net part mass, excluding rejects and transport packaging. Part metadata constrains the broad reference-product identity.

- Selected flow: Parts of milking and dairy machines, n.e.c. `0ea78094-45f3-4068-9e30-73c26232c351`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_mass`
- Sources: `un-cpc-3-2025`

##### Waste flows

###### New steel scrap output (`new_steel_scrap_output`)

Include only when fresh ferrous scrap leaves a steel-processing route. Keep the gross measured waste amount separate from any recycling credit.

- Selected flow: New steel scrap `bc4cdf13-d9bb-4ea1-a8ad-398f13fcfcaa`
- Flow property / unit: Mass / kg
- Amount rule: weighed new steel scrap attributable to the lot divided by accepted net finished kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steel_scrap`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared manufacturing | Prefer separate lot, material-issue, and submeter records for the declared part configuration. |  |
| `allocation_shared_meter` | shared electricity | If submetering is unavailable, allocate measured electricity by documented operating time and rated or measured power for the same period; disclose residual unallocated use. |  |
| `allocation_scrap` | steel scrap | Record gross new steel scrap and its disposition separately; do not silently net an avoided-burden recycling credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_finished_mass` | `part_manufacture` | accepted part output | calibrated scale and acceptance record | part number; lot; accepted count; accepted net mass; rejected mass; scale ID | Weigh accepted parts without packaging and reconcile to acceptance records. | kg | each lot | reporting period | manufacturing site | accepted net kg per lot; denominator for every row | calibration and acceptance ledger |
| `cp_steel_input` | `part_manufacture` | alloy steel plate input | material issue and weigh record | alloy grade; supplier; lot; issued mass; returns | Reconcile issued plate mass and stock returns with the declared lot. | kg | each lot | reporting period | manufacturing site | per 1 kg reference flow | material ledger and grade certificate |
| `cp_nbr_input` | `part_manufacture` | uncured NBR input | batch charge record | compound grade; batch; charged mass; returns | Weigh compound charges and reconcile returns. | kg | each batch | reporting period | manufacturing site | per 1 kg reference flow | batch sheet and scale record |
| `cp_electricity` | `part_manufacture` | purchased electricity | meter and allocation record | metered kWh; machine hours; power basis; lot | Read meter and attribute shared use by recorded time and power. | kWh | each lot or meter period | reporting period | manufacturing site | per 1 kg reference flow | meter and allocation worksheet |
| `cp_steel_scrap` | `part_manufacture` | new steel scrap | scrap weigh ticket | lot; scrap type; gross mass; destination | Weigh fresh ferrous scrap separately from old or mixed scrap. | kg | each lot | reporting period | manufacturing site | per 1 kg reference flow | weigh ticket and disposition record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_lot_mass` | `steel_plate_input`, `nbr_compound_input`, `electricity_input`, `new_steel_scrap_output` | q_ref = q_lot / m_accepted; q_lot is the attributable lot exchange; m_accepted is the accepted net finished mass in kg from `cp_finished_mass`. | q_lot; m_accepted; cp_finished_mass; row collection protocol | q_ref per 1 kg reference flow |  |
| `accepted_output` | `finished_part_output` | m_accepted / m_accepted = 1 kg accepted output per 1 kg reference flow; m_accepted must be positive. | m_accepted; cp_finished_mass | 1 kg reference product |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and materials | Trace part number, host machine, material grade, and milk-contact status to one acceptance lot. | drawing, bill of materials, grade certificate, acceptance record |
| `dq_completeness` | all actual operations | Add specific atomic rows for every actual material, utility, direct emission, and waste not represented above; record zero only when absence is demonstrated. | reconciled material, meter, and waste ledgers |
| `dq_period` | all foreground rows | Use one site and period; disclose allocation across lots and missing records. | reporting-period ledger and allocation worksheet |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference product | Reject a package missing part number, host-machine compatibility, material grade, route, milk-contact status, or accepted lot. | `un-cpc-3-2025` |
| `validate_mass_basis` | inventory | Require positive accepted net mass and the same accepted-lot denominator for every row; reconcile material, product, reject, and waste masses. |  |
| `validate_flow_identity` | inventory | Use only exact public flow identities; keep unresolved rows unlinked until product state, classification, property, and unit are verified. |  |
| `validate_route` | conditional material rows | Apply steel plate and fresh steel scrap only to the steel route, NBR compound only to its forming route, and add other actual exchanges atomically. | `alfalaval-h20-separator` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground part-manufacturing dataset eligible for later `secondary_dataset` or `background_dataset` review |
| downstream_use | process or lifecyclemodel projection for the declared part configuration |
| allowed_use | one identified part configuration and compatible host-machine application |
| excluded_use | average of unlike part families, complete-machine operation, or unspecified material route |
| required_metadata | part number; host machine; route; material grades; milk-contact status; site and period; accepted net mass; allocation; waste disposition |
| required_quality_disclosure | primary-record coverage, meter allocation, unresolved UUIDs, omitted operations, data gaps, and linked upstream datasets |
| update_trigger | material, design, route, site, meter allocation, or upstream supplier change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | UN Statistics Division, CPC Ver. 3.0 Explanatory Notes, 30 June 2025, section 4413, p. 229. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | product boundary |
| `alfalaval-h20-separator` | `handbook` | Alfa Laval, H20 Disc stack separator for the dairy industry, publication code 200002019-1-EN-GB, pp. 1–2. https://www.alfalaval.com/globalassets/documents/products/separation/centrifugal-separators/separators/dairy/product_leaflet_h20_separator_en.pdf | example dairy-machine steel and NBR components; no manufacturing quantity transfer |
