---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.bodies-for-motor-vehicles
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bodies for motor vehicles

## 1. Scope and Applicability

This rule covers a newly manufactured, assembled motor-vehicle body (coachwork) supplied at the factory gate, before installation of the engine, powertrain, separate chassis, seats, electronics or other vehicle equipment. Record whether the delivered body is uncoated or coated; include the coating operation only for a coated body. The foreground boundary includes body-sheet forming, joining, rework, and, when performed before body release, surface preparation, coating and curing. Supplier production of purchased inputs is represented by upstream datasets. This is a body product rule, not a whole-vehicle use or end-of-life rule. The boundary follows the distinct CPC body, chassis and body-parts headings and the assembled-body description in the EDAG report. [Sources: `un-cpc3-notes-2025`, `edag-silverado-body-lca-2018`, `epa-auto-ria-2004`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.bodies-for-motor-vehicles |
| classification_refs | CPC 3.0 49210, Bodies for motor vehicles; classification context only |
| covered_products | Assembled new body shells or coachwork for motor vehicles, with declared coating state |
| excluded_products | Complete vehicles; engine-fitted chassis; loose body parts or accessories; trailers; repair or repainting services |
| representative_product | Assembled passenger or goods vehicle body shell at factory release |
| production_route | Sheet-metal forming and joining; surface preparation and coating when the delivered body is coated |
| market_state | One accepted finished body at factory gate, with configuration and coating state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | An assembled motor-vehicle body providing the declared structural and enclosure functions |
| How much | One accepted finished body of the declared configuration |
| How well | Meets the producer's documented body acceptance and dimensional criteria; declare coating state |
| How long or cycle | One factory release; no vehicle lifetime is asserted by this production rule |
| reference_flow_link | `body_output` |

| Field | Value |
| --- | --- |
| Reference amount | M |
| Reference product flow | Bodies for motor vehicles `68dcb7da-bb57-4730-94f3-ace5817da287` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | vehicle body type; model and configuration; included closures; material route; coated or uncoated state; coating system if present; factory location and reporting period; accepted net mass M |

The required qualifiers belong in the foreground data package. A body-in-white and a coated body must have different declared product states; do not treat their inventories as directly equivalent. No nominal body weight is specified here. [Sources: `edag-silverado-body-lca-2018`]

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = accepted net mass of one complete unit of the same configuration in kg; collect using cp_mass. |
| `inventory_basis` | all inventory rows | Exchange property in each row | row unit | Record each attributable exchange per one accepted finished unit; the reference amount is that body's measured M kg. Do not use a generic body mass. |
| `energy_conversion` | `plant_electricity` | Energy | kWh | Preserve metered kWh; if a downstream energy-flow unit is MJ, multiply kWh by 3.6 and disclose the conversion. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased body-grade sheet at the plant gate, plus other purchased process inputs; declare the accepted body configuration and coating state |
| starting_condition_role | Foreground manufacturing starts with purchased inputs; upstream manufacture remains linked by product datasets |
| product_classification_scope | A motor-vehicle body product under CPC 49210; chassis, body parts and complete vehicles remain separate products |
| recursive_input_rule | If a purchased input is itself a completed body, model its upstream body dataset once and record only additional foreground transformation; do not count its manufacture twice |
| upstream_dataset_requirement | Link supplier datasets for purchased sheet, electricity, coating materials, fuel and water at the declared geography and technology |
| disclosure | Declare supplied versus on-site formed panels, coating state, rework, scrap treatment, site, period, and any missing upstream data |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_body_only` | product boundary | Stop at the released body; exclude complete-vehicle assembly, use, service and end-of-life. | `un-cpc3-notes-2025`; `edag-silverado-body-lca-2018` |
| `boundary_coating` | coated body route | Include surface preparation, coating, curing, direct wastes and attributable energy only when coating is part of the delivered body. | `epa-auto-ria-2004` |
| `boundary_purchased_inputs` | upstream inputs | Record purchased inputs at the foreground gate and link suitable upstream datasets; avoid double counting on-site and purchased forming. | `edag-silverado-body-lca-2018` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `body_form_join` | Sheet forming and body joining | required | Every covered body | Foreground manufacture | per one accepted finished unit |
| `body_coating` | Body preparation and coating | conditional | Delivered body is coated | Foreground finish | per one accepted finished unit |
| `body_release` | Acceptance and factory release | required | Every covered body | Reference output and mass measurement | M kg per one accepted finished unit |

Internal panels and the body-in-white are work in progress within this foreground system; avoid a second outward product credit for their transfer. Forming scrap is a separate waste exchange. The EDAG report describes body sheet forming and an assembled-body boundary; the EPA report describes the subsequent coating sequence. [Sources: `edag-silverado-body-lca-2018`, `epa-auto-ria-2004`]

### Process: Sheet forming and body joining (`body_form_join`)

#### Inputs

##### Product flows

###### Cold-rolled steel body sheet (`steel_sheet`)

Include when steel sheet is purchased for the declared body configuration. Record the actual sheet grade and received mass; its UUID awaits identity review.

- Selected flow: Cold-rolled steel body sheet
- Flow property / unit: Mass / kg
- Amount rule: Measured steel-sheet input per one accepted finished unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet`
- Sources: `edag-silverado-body-lca-2018`

###### Aluminium body sheet (`aluminium_sheet`)

Include only when aluminium sheet is purchased for the declared body configuration; do not infer a primary or recycled alloy route from this generic sheet identity.

- Selected flow: aluminium sheet `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Measured aluminium-sheet input per one accepted finished unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sheet`
- Sources: `edag-silverado-body-lca-2018`

###### Plant electricity for body production (`plant_electricity`)

Meter the electricity attributable to forming, joining and, when present, coating. The duplicate generic alternating-current candidates need identity review before a UUID can be assigned.

- Selected flow: Grid electricity, alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity attributable to one accepted finished body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `edag-silverado-body-lca-2018`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Steel sheet offcuts (`steel_offcuts`)

Weigh segregated steel cut-offs leaving forming and joining; distinguish them from returned reusable sheet.

- Selected flow: Steel scrap, offcuts `ae44c4ac-bcd5-4a16-b0a5-d674ffeaab6b`
- Flow property / unit: Mass / kg
- Amount rule: Weighed steel offcuts per one accepted finished unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_scrap`
- Sources: `edag-silverado-body-lca-2018`

##### Elementary flows

### Process: Body preparation and coating (`body_coating`)

#### Inputs

##### Product flows

###### Industrial production water (`process_water`)

Include water entering surface preparation and rinsing only when the delivered body is coated; measure the supplied mass.

- Selected flow: Production water for industrial use `72dcdee6-846a-455a-95d1-942aa7ad3730`
- Flow property / unit: Mass / kg
- Amount rule: Metered or weighed water per one accepted finished unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`
- Sources: `epa-auto-ria-2004`

###### Waterborne automotive basecoat (`waterborne_basecoat`)

Include only if the coating recipe uses a waterborne color basecoat. Record the actual supplied formulation and wet mass; the generic paint candidates are not exact identities.

- Selected flow: Waterborne automotive body basecoat
- Flow property / unit: Mass / kg
- Amount rule: Issued wet basecoat mass per one accepted finished unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coating_materials`
- Sources: `epa-auto-ria-2004`

###### Gaseous natural gas for curing (`gaseous_natural_gas`)

Include only when natural gas fires the coating oven; use the metered gas volume and disclose its supply conditions.

- Selected flow: natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume / m3
- Amount rule: Metered gas volume attributable to one accepted finished body.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy`
- Sources: `epa-auto-ria-2004`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Pretreatment effluent (`pretreatment_effluent`)

Include separately collected aqueous phosphate pretreatment effluent when the coating route generates it. Record actual treatment destination; a generic wastewater identity is insufficient.

- Selected flow: Aqueous phosphate pretreatment effluent
- Flow property / unit: Mass / kg
- Amount rule: Measured discharged effluent per one accepted finished unit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `epa-auto-ria-2004`

##### Elementary flows

### Process: Acceptance and factory release (`body_release`)

#### Inputs

##### Product flows

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted motor-vehicle body (`body_output`)

Release one accepted finished body of the declared configuration and coating state. Its mass M is measured, not assumed. In the measurement rules, “unit” means this one finished motor-vehicle body.

- Selected flow: Bodies for motor vehicles `68dcb7da-bb57-4730-94f3-ace5817da287`
- Flow property / unit: Mass / kg
- Amount rule: M kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one accepted finished unit
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass`
- Sources: `un-cpc3-notes-2025`; `edag-silverado-body-lca-2018`

##### Waste flows

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocate_subdivide` | shared body and vehicle operations | Subdivide body-forming, joining and coating records from downstream vehicle assembly where measured records allow. | `edag-silverado-body-lca-2018` |
| `allocate_metered` | shared meters and batches | Assign shared electricity, gas, water and material issues to accepted bodies using the documented meter period, line or batch counts and configuration mix; disclose the allocation key and reject untraceable assignment. | `edag-silverado-body-lca-2018` |
| `allocate_scrap` | recovered steel offcuts | Record steel offcuts once as waste to their actual treatment route; do not give an undocumented avoided-production credit. | `edag-silverado-body-lca-2018` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | `body_release` | accepted body mass | calibrated scale record | model; configuration; serial or batch id; coating state; accepted net mass M | Weigh the accepted complete unit on a calibrated scale, excluding transport packaging; reconcile the same configuration and acceptance record. | kg | each accepted body or traceable batch | reporting period | release gate | accepted net mass per unit | scale calibration; acceptance record |
| `cp_sheet` | `body_form_join` | steel or aluminium sheet input | purchase and issue records | alloy or grade; received mass; issued mass; batch; accepted body count | Reconcile issued sheet with stock change and forming records for each material separately. | kg | each batch | reporting period | body line | per one accepted finished unit | invoices; stock ledger; bill of materials |
| `cp_energy` | `body_form_join` | electricity or gas input | meter and fuel records | meter id; kWh; gas m3; period; line; accepted body count | Read calibrated meters and assign only the attributable body line and coating load; separate electricity and gas. | kWh or m3 | each meter period | reporting period | body line and coating | per one accepted finished unit | meter calibration; utility bills; allocation worksheet |
| `cp_scrap` | `body_form_join` | steel offcuts | scrap weighbridge records | container id; steel grade; mass; destination; batch | Weigh segregated steel offcuts and reconcile against material issue and body output. | kg | each scrap transfer | reporting period | forming line | per one accepted finished unit | weighbridge; transfer ticket |
| `cp_coating_materials` | `body_coating` | water and basecoat input | meter and material issue records | water kg; coating formulation; issued wet paint kg; batch; accepted body count | Measure supplied water and separately reconcile issued basecoat against stock and returns. | kg | each batch | reporting period | paint shop | per one accepted finished unit | meter; issue log; formula sheet |
| `cp_effluent` | `body_coating` | pretreatment effluent | discharge meter and sample | discharged mass; pretreatment line; batch; treatment destination | Meter or weigh segregated phosphate pretreatment effluent and identify the treatment route. | kg | each discharge batch | reporting period | pretreatment line | per one accepted finished unit | discharge log; sample; treatment receipt |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `per_body_inventory` | all inventory rows | Sum attributable exchange quantities in the reporting period and divide by the number of accepted bodies of the same configuration; keep each exchange in its row unit. | raw records; accepted body count; configuration; applicable collection protocol | exchange per one accepted finished unit | `edag-silverado-body-lca-2018` |
| `mass_reconciliation` | `steel_sheet`, `aluminium_sheet`, `steel_offcuts`, `body_output` | Reconcile material input, documented internal returns, offcuts and measured net body mass for the declared configuration; investigate any unexplained difference rather than forcing balance. | cp_sheet; cp_scrap; cp_mass | reconciliation record | `edag-silverado-body-lca-2018` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and all flows | Declare body configuration, coating state and the physical identity of each material, fuel and waste stream. | accepted body record; material specification; treatment ticket |
| `dq_mass` | `body_output` | Use calibrated net mass M for the accepted body; do not substitute whole-vehicle or packaged mass. | scale calibration; acceptance record |
| `dq_time` | all foreground records | Use a common reporting period and reconcile production counts, meters, inventories and transfers. | dated ledgers and meter reads |
| `dq_coverage` | coating route | Explain omitted coating layers, treatment chemicals, direct emissions or waste streams and collect them as separate exchanges when material. | recipe; permit; waste log; completeness check |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | `body_output` | Confirm one accepted body with measured M kg and the same configuration and coating state across reference and inventory. | `edag-silverado-body-lca-2018` |
| `validate_boundary` | body versus vehicle | Reject datasets that include complete-vehicle assembly, chassis, engine or downstream use inside the body reference. | `un-cpc3-notes-2025`; `edag-silverado-body-lca-2018` |
| `validate_conditions` | conditional rows | Require route evidence for aluminium sheet, coating water, basecoat, oven gas and effluent when those rows are included; absent routes are disclosed. | `edag-silverado-body-lca-2018`; `epa-auto-ria-2004` |
| `validate_records` | all rows | Match each amount to a dated protocol record, check unit and direction, and disclose unresolved flow UUIDs and missing upstream datasets. | `edag-silverado-body-lca-2018` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset` or `background_dataset` after review |
| downstream_use | Body input to a foreground vehicle assembly `process` or `lifecyclemodel` |
| allowed_use | Matching body type, material route, configuration, factory geography and coating state |
| excluded_use | Whole-vehicle reference; unqualified substitution between coated and uncoated bodies; unsupported generic industry benchmark |
| required_metadata | body model; configuration; material and joining route; coating state and recipe; factory; period; measured M; source and treatment routes |
| required_quality_disclosure | meter and mass evidence; allocation keys; supplier dataset coverage; unresolved flow identities; omitted emissions and coating chemicals |
| update_trigger | changed body design, material mix, coating recipe, supplier route, site technology or reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc3-notes-2025` | `official_guidance` | United Nations Statistics Division, *CPC Ver. 3.0 Explanatory Notes* (30 June 2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, p. 271–272 (accessed 2026-09-27) | Body, chassis and body-part classification boundary |
| `edag-silverado-body-lca-2018` | `literature` | Lindita Bushi, *EDAG Silverado Body Lightweighting Final LCA Report* (August 2018), https://www.aluminum.org/sites/default/files/2021-10/AA-LWT-Body-Design_Final-LCA-Report_August-2018.pdf, §§ 6.2, 8.2 (accessed 2026-09-27) | Assembled-body state, sheet forming, material and scrap accounting; case method only, no empirical range |
| `epa-auto-ria-2004` | `official_guidance` | U.S. EPA, *Regulatory Impact Analysis for the Automobile and Light Duty Vehicle NESHAP, Final Report* (EPA-452/R-04-007, February 2004), https://www.epa.gov/sites/default/files/2020-07/documents/transport-mfg_ria_final-neshap_2004-02.pdf, § 2.1 (accessed 2026-09-27) | Coating sequence after body assembly, surface preparation, paint-booth water and coating inputs; no general body material quantities or allocation factors |
