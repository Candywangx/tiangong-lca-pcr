---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.tin-bars-rods-profiles-and-wire
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---
# Tin bars, rods, profiles and wire
## 1. Scope and Applicability
Gate-to-gate production of tin or declared tin-alloy bars, rods, solid profiles and wire from received metal feedstock through casting and/or extrusion, rolling, drawing, straightening, cutting and finishing. Excludes unwrought tin, sheet, strip, foil, powder, tubes, fabricated articles, use and end-of-life.
## 2. Product Category Identity
| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.tin-bars-rods-profiles-and-wire |
| classification_refs | CPC 3.0 41547 |
| covered_products | Tin and declared tin-alloy bars, rods, solid profiles and wire |
| excluded_products | Unwrought tin; sheet, strip, foil, powder, tubes and fabricated articles |
| representative_product | Tin rod |
| production_route | Declared casting/forming/finishing route |
| market_state | Saleable semi-finished solid product at factory gate |
## 3. Reference Flow
| Field | Value |
| --- | --- |
| What | Conforming saleable covered product |
| How much | 1 kg net saleable product |
| How well | Composition, form, dimensions, temper, surface and specification declared |
| How long or cycle | Reporting-period production campaign |
| reference_flow_link | Net factory-gate mass after internal returns and rejects |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Tin Rod `e9c72b13-0d60-4d67-a1c9-b0c963ec62cf` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | form; composition; dimensions; temper; surface; route; geography; period |
## 4. Measurement and Unit Rules
| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | mass flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use a consistent mass basis and normalize net output to 1 kg. |
## 5. System Boundary
### Boundary Abstraction
| Field | Value |
| --- | --- |
| declared_starting_condition | Received refined tin or declared tin-alloy feedstock |
| starting_condition_role | Upstream production represented by linked input datasets |
| product_classification_scope | Covered solid semi-finished forms |
| recursive_input_rule | Record same-category off-site feedstock once; internal scrap does not cross the boundary |
| upstream_dataset_requirement | Representative datasets for purchased inputs |
| disclosure | Declare route, alloy, internal scrap loop and surface treatment |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground system | Include on-site forming and finishing; exclude use and end-of-life. | `un-cpc-3-0-structure-2025` |
## 6. Process Inventory Structure
### Process Map
| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `tin_semifabrication` | Tin semi-fabrication | required | Always | foreground production | 1 kg net product |
### Process: Tin semi-fabrication (`tin_semifabrication`)
#### Inputs
##### Product flows
###### Tin feedstock (`tin_feedstock`)
Record the received mass of the declared feedstock grade crossing the factory boundary.
- Selected flow: Tin metal feedstock
- Flow property / unit: Mass / kg
- Amount rule: measured received mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources:
###### Purchased electricity (`electricity`)
Record electricity consumed by included production equipment and allocated auxiliaries.
- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- Flow property / unit: Net calorific value / MJ
- Amount rule: metered attributable electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources:
##### Waste flows
##### Elementary flows
#### Outputs
##### Product flows
###### Reference product (`reference_product`)
Record net conforming product mass after internal returns and rejects.
- Selected flow: Tin Rod `e9c72b13-0d60-4d67-a1c9-b0c963ec62cf`
- Flow property / unit: Mass / kg
- Amount rule: fixed reference amount
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:
##### Waste flows
###### Tin-bearing process scrap (`process_scrap`)
Record only segregated scrap leaving the foreground boundary; exclude internal returns.
- Selected flow: Tin scrap `72bbff5c-c26f-4b7b-971e-df634b72ea28`
- Flow property / unit: Mass / kg
- Amount rule: weighed off-site mass; exclude internal returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources:
##### Elementary flows
## 7. Allocation and Co-product Handling
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared production | Subdivide first; allocate residual shared burdens by net mass and disclose sensitivity. |  |
## 8. Foreground Data Collection, Calculation, and Quality Rules
### Data Collection Protocols
| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `tin_semifabrication` | material mass | scale records | time; grade; gross; tare; disposition | calibrated scales | kg | each lot | representative 12 months or disclosed campaign | included lines | sum and normalize | calibration and reconciliation |
| `cp_energy` | `tin_semifabrication` | electricity | meter records | meter; period; energy | submeter or documented allocation | kWh or MJ | monthly | production period | included equipment | subtract exclusions and normalize | invoices and meter checks |
### Calculation Rules
| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize` | all rows | allocated quantity divided by net product mass | quantity; net mass | per kg quantity |  |
### Data Quality Requirements
| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_balance` | metal flows | Reconcile feedstock, product, scrap, stock change and internal returns. | scale records and reconciliation |
## 9. Validation Rules
| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | reference flow | Require 1 kg and all qualifiers. |  |
| `validate_inventory` | inventory | Require atomic flows, UUID status, aligned periods and mass balance. |  |
## 10. Published Dataset Profile
| Field | Value |
| --- | --- |
| dataset_role | foreground production dataset |
| downstream_use | process and lifecyclemodel construction |
| allowed_use | declared covered product and route |
| excluded_use | upstream refining, use and end-of-life |
| required_metadata | form; composition; dimensions; route; geography; period; allocation |
| required_quality_disclosure | metering, mass balance, unresolved UUIDs and gaps |
| update_trigger | material boundary, route, alloy, energy or yield change |
## 11. Data Sources
| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Official guidance (`official_guidance`) | CPC Version 3.0 Structure, 30 June 2025; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retrieved 2026-09-04 | Verified original product identity text |
