---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-artificial-staple-fibres-containing-85-or-more-by-weig-8014c608
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Yarn (other than sewing thread) of artificial staple fibres, containing 85% or more by weight of such fibres, not put up for retail sale

## 1. Scope and Applicability

This PCR covers gate-to-gate secondary spinning of yarn that is not sewing thread, contains at least 85% artificial staple fibres by mass, and is not put up for retail sale. Artificial fibres here are man-made fibres derived from natural polymers, including viscose, modal, lyocell, cupro, and acetate staple fibres. The representative route uses purchased viscose staple fibre and produces wound, undyed industrial yarn at the spinning-mill gate.

The scope excludes synthetic staple-fibre yarn, yarn containing less than 85% artificial staple fibres, retail-packed yarn, sewing thread, filament yarn, manufacture of the artificial fibre itself, textile wet pretreatment, dyeing, printing, finishing, fabric production, garment production, use, and end-of-life. A data package for another covered artificial staple-fibre composition must preserve the reference-product identity and add each actual constituent input as a separate atomic flow; it must not substitute a collective fibre label for constituent identities.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-other-than-sewing-thread-of-artificial-staple-fibres-containing-85-or-more-by-weig-8014c608 |
| classification_refs | CPC 3.0:26450 |
| covered_products | Yarn other than sewing thread, with artificial staple fibres representing at least 85% of fibre mass, not put up for retail sale |
| excluded_products | Sewing thread; filament yarn; synthetic staple-fibre yarn; yarn below 85% artificial staple fibres; retail-packed yarn; fabric and finished textile articles |
| representative_product | Undyed viscose staple-fibre yarn wound on an industrial paperboard cone |
| production_route | Purchased viscose staple fibre; opening and cleaning; carding; drawing; route-applicable combing and roving; spinning; route-applicable twisting; winding; industrial packaging |
| market_state | Finished manufactured yarn at the spinning-mill gate, not put up for retail sale |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Wound artificial staple-fibre yarn supplied for downstream textile manufacture |
| How much | 1 kg net yarn |
| How well | Not sewing thread; at least 85% artificial staple fibres by mass; not put up for retail sale; composition, yarn count, twist, spinning system, moisture basis, and dye state declared |
| How long or cycle | One declared production lot; no service duration |
| reference_flow_link | The 1 kg net reference product flow defined below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net yarn |
| Reference product flow | Yarn (other than sewing thread) of artificial staple fibres, containing 85% or more by weight of such fibres, not put up for retail sale `b2fccf4f-e4c4-4723-9e9b-ef0956abd0fc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | constituent fibre names and mass shares; artificial-fibre mass share; yarn count or linear density; twist direction and level; spinning system; moisture basis; dye state; industrial package type; production geography; production period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, reference-flow comments, product description, or an equivalent data-package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference yarn | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net yarn mass on the declared moisture basis and exclude removable cones, tubes, wrap, and other transport packaging from the 1 kg reference amount. |
| `composition_threshold` | fibre composition | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and mass fraction | Calculate all constituent fibre shares on one declared moisture basis; the summed artificial staple-fibre share must be at least 0.85 of total fibre mass. |
| `inventory_mass` | fibre, lubricant, packaging, product, and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Preserve measured mass before normalization and report the normalized value per 1 kg net yarn. |
| `electricity_measurement` | delivered electricity | Energy as declared by the selected electricity flow | kWh | Record delivered meter electricity for the declared medium-voltage China grid scenario and do not convert it to primary energy inside the foreground inventory. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | representative foreground system | Begin with purchased viscose staple fibre received at the spinning mill and end with wound, industrially packaged yarn at the mill gate; include opening and cleaning, carding, drawing, applicable combing and roving, spinning, applicable twisting, winding, and packaging performed by the foreground operator. | `jrc-textiles-bref-2023` |
| `boundary_upstream_links` | purchased inputs | Keep purchased fibre, delivered electricity, spinning lubricant, paperboard cones, and LDPE stretch film as explicit product inputs and link each to a geographically and technologically appropriate upstream dataset. |  |
| `boundary_exclusions` | excluded activities | Exclude artificial-fibre manufacture, dyeing, printing, finishing, fabric production, retail packing, use, and end-of-life unless the study explicitly expands the boundary and reports those activities separately. | `eu-textiles-bat-2022` |
| `boundary_direct_outputs` | foreground outputs | Record the reference yarn, viscose fibre fly waste, and viscose yarn waste as separate measured outputs; do not merge waste identities or net them against fibre input. | `jrc-textiles-bref-2023` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased artificial staple fibre received at the spinning-mill gate with supplier identity, fibre generic name, lot mass, moisture basis, and composition evidence declared |
| starting_condition_role | Upstream-linked product input and starting condition for secondary spinning |
| product_classification_scope | CPC 3.0:26450 only |
| recursive_input_rule | A purchased yarn already within CPC 26450 remains an explicit product input with its own upstream dataset; it is not relabelled as virgin staple fibre and its burdens are not recreated inside this foreground process. |
| upstream_dataset_requirement | Use a supplier-specific dataset when available; otherwise use a disclosed proxy matching fibre identity, geography, technology, and time, with the proxy limitation retained in data-quality metadata. |
| disclosure | Declare constituent fibre shares, spinning system, included process steps, lubricant product identity, electricity scenario, packaging configuration, waste destinations, production geography, production period, and any boundary expansion. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `secondary_staple_spinning` | Secondary spinning and winding of artificial staple fibre | required |  | Foreground conversion of purchased staple fibre into wound industrial yarn | 1 kg net yarn output |

### Process: Secondary spinning and winding of artificial staple fibre (`secondary_staple_spinning`)

#### Inputs

##### Product flows

###### Viscose staple-fibre feed (`viscose_staple_fibre_input`)

Purchased viscose staple fibre crosses the mill gate as the representative route's fibre feed.

- Selected flow: Viscose staple fibre, at spinning mill gate `a64ce209-6dee-404e-a22c-9bbddb1cf295`
- Flow property / unit: Mass / kg
- Amount rule: Measure lot-level net fibre mass issued to the included spinning process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fibre_input_mass`

###### China medium-voltage grid electricity (`cn_grid_medium_voltage_electricity`)

Delivered electricity powers opening, cleaning, carding, drawing, applicable combing and roving, spinning, twisting, winding, ventilation, and directly attributable packaging equipment.

- Selected flow: Electricity, medium voltage, grid mix, China
- Flow property / unit: Energy / kWh
- Amount rule: Record delivered electricity from a dedicated meter or a documented equipment-level allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`

###### Mineral-oil-based spinning lubricant (`mineral_oil_spinning_lubricant`)

The purchased mineral-oil-based spinning lubricant is recorded as one product input when used on the representative viscose route; no generic lubricant UUID is substituted.

- Selected flow: Mineral-oil-based spinning lubricant
- Flow property / unit: Mass / kg
- Amount rule: Measure purchased product mass issued to the included production lots, net of documented closing stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lubricant_mass`
- Sources: `jrc-textiles-bref-2023`

###### Paperboard yarn cone (`paperboard_yarn_cone`)

The paperboard cone that leaves the mill with industrial yarn is recorded separately from yarn mass.

- Selected flow: Paperboard yarn cone
- Flow property / unit: Mass / kg
- Amount rule: Measure the mass of paperboard cones shipped with the reference production lots.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`

###### LDPE stretch film for industrial yarn packaging (`ldpe_stretch_film`)

Low-density polyethylene stretch film used to secure industrial yarn packages is recorded as a separate product input.

- Selected flow: Low-density polyethylene stretch film for industrial yarn packaging
- Flow property / unit: Mass / kg
- Amount rule: Measure film mass issued to the reference production lots, net of unused returned film.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_mass`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference artificial staple-fibre yarn (`artificial_staple_fibre_yarn_output`)

The wound industrial yarn is the measured reference output of the included process.

- Selected flow: Yarn (other than sewing thread) of artificial staple fibres, containing 85% or more by weight of such fibres, not put up for retail sale `b2fccf4f-e4c4-4723-9e9b-ef0956abd0fc`
- Flow property / unit: Mass / kg
- Amount rule: Measure net conforming yarn mass excluding removable packaging, then normalize the dataset to 1 kg.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net reference yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yarn_output_mass`
- Sources: `unsd-cpc-3-2025`

##### Waste flows

###### Viscose fibre fly waste (`viscose_fibre_fly_waste`)

Loose viscose fibre fly removed by collection and housekeeping during staple-yarn spinning is recorded as one waste output.

- Selected flow: Viscose fibre fly waste from staple-yarn spinning
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected fibre fly assigned to the reference production lots.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

###### Viscose yarn waste (`viscose_yarn_waste`)

Off-specification viscose yarn, broken ends, and winding rejects that leave the process as yarn-form waste are recorded separately from loose fibre fly.

- Selected flow: Viscose yarn waste from staple-yarn spinning
- Flow property / unit: Mass / kg
- Amount rule: Weigh yarn-form waste assigned to the reference production lots.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net yarn output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_mass`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | separately identifiable production lots and lines | Subdivide production by fibre composition, spinning system, and production lot before allocating shared inputs or outputs. |  |
| `shared_equipment_allocation` | shared electricity and directly attributable auxiliary equipment | When separate metering is unavailable, allocate using documented operating time multiplied by measured or nameplate equipment load, and disclose the calculation and affected rows. |  |
| `shared_packaging_allocation` | cones and stretch film used for more than one yarn product | Allocate measured packaging mass by the net mass of yarn shipped in each documented package configuration. |  |
| `waste_handling` | viscose fibre fly waste and viscose yarn waste | Report each waste mass and destination separately; do not subtract waste revenue or an assumed recycling credit from foreground burdens. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fibre_input_mass` | `secondary_staple_spinning` | `viscose_staple_fibre_input` | weighbridge, warehouse issue, and stock record | supplier; fibre generic name; lot id; gross mass; tare mass; moisture basis; opening stock; closing stock | calibrated scale plus stock reconciliation | kg | each lot; monthly reconciliation | same period as yarn output | all included fibre stores and lines | issued mass = opening stock + receipts - closing stock - documented transfers | calibration record; supplier specification; stock reconciliation |
| `cp_electricity_meter` | `secondary_staple_spinning` | `cn_grid_medium_voltage_electricity` | electricity meter and equipment operating log | meter id; opening reading; closing reading; voltage level; grid geography; production hours; equipment load where allocated | dedicated meter preferred; otherwise documented equipment calculation | kWh | continuous or shift reading | same period as yarn output | all included process and directly attributable auxiliary equipment | subtract opening from closing reading; remove documented excluded loads; allocate shared load under `shared_equipment_allocation` | meter calibration; bills; operating logs; allocation worksheet |
| `cp_lubricant_mass` | `secondary_staple_spinning` | `mineral_oil_spinning_lubricant` | purchase, issue, return, and stock record | product trade name; supplier; safety-data-sheet id; opening stock; issued mass; returned mass; closing stock; lot linkage | calibrated scale and inventory reconciliation | kg | each issue; monthly reconciliation | same period as yarn output | included lines only | consumed mass = opening stock + receipts - returns - closing stock - documented transfers | scale calibration; purchase invoice; safety data sheet; stock reconciliation |
| `cp_packaging_mass` | `secondary_staple_spinning` | `paperboard_yarn_cone`; `ldpe_stretch_film` | bill of materials, package count, and component weighing | package configuration; component identity; component count; representative component mass; total yarn mass shipped | count components and verify mass on a calibrated scale | kg | each package configuration; monthly aggregation | same period as yarn output | packages leaving the included mill gate | component mass = count multiplied by verified unit mass, reconciled with issues and returns | bill of materials; scale calibration; issue record; shipment record |
| `cp_yarn_output_mass` | `secondary_staple_spinning` | `artificial_staple_fibre_yarn_output` | final scale and quality-release record | product id; lot id; gross package mass; cone mass; wrap mass; net yarn mass; moisture basis; composition; yarn count; twist; release status | calibrated final weighing and quality release | kg | each finished lot | same period as all input and waste records | all conforming output from included lines | sum released net yarn mass; exclude removable packaging and nonconforming output | scale calibration; release certificate; composition evidence; batch record |
| `cp_waste_mass` | `secondary_staple_spinning` | `viscose_fibre_fly_waste`; `viscose_yarn_waste` | segregated waste-container and dispatch record | waste row id; container id; gross mass; tare mass; lot or line; destination; stock change | segregated collection and calibrated weighing | kg | each container or dispatch; monthly reconciliation | same period as yarn output | all included lines and directly attributable collection points | net waste mass = gross - tare, adjusted for opening and closing waste stock | scale calibration; photographs or container labels; dispatch receipt; destination record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized exchange = period exchange / period net conforming yarn output | measured period exchange; measured net conforming yarn output | exchange per 1 kg net yarn |  |
| `calc_artificial_fibre_share` | reference-product composition | artificial staple-fibre share = summed mass of artificial staple-fibre constituents / summed mass of all fibre constituents, on one declared moisture basis | constituent fibre masses; fibre generic names; moisture basis | artificial staple-fibre mass fraction | `unsd-cpc-3-2025` |
| `calc_fibre_mass_reconciliation` | fibre-bearing inputs and outputs | reconcile fibre input with net yarn output, viscose fibre fly waste, viscose yarn waste, other separately identified fibre-bearing outputs, and measured stock change; investigate and disclose any residual | fibre input; yarn output; each fibre-bearing waste; other fibre-bearing outputs; stock change | mass-reconciliation residual and explanation |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all flow rows | Preserve one physical or chemical identity per row and retain supplier or waste-destination evidence; unresolved UUID rows must remain human-readable and must not receive a broader candidate UUID. | supplier specification; safety data sheet; package bill of materials; waste dispatch record; manifest review metadata |
| `dq_temporal` | foreground inventory | Use one common reporting period and reconcile opening and closing stocks for fibre, lubricant, yarn, packaging, and waste. | dated meter, stock, production, and dispatch records |
| `dq_measurement` | mass and electricity | Use calibrated scales and meters; retain calibration status, raw readings, tare treatment, and unit conversions. | calibration certificates; raw readings; calculation workbook |
| `dq_composition` | reference yarn | Demonstrate at least 85% artificial staple fibres by mass on the declared moisture basis and identify every constituent fibre. | supplier composition evidence or full laboratory report; batch formulation; moisture-basis record |
| `dq_completeness` | included foreground process | Cover every included process step and separately record all actual fibre constituents, electricity scenarios, purchased lubricant products, packaging components, waste streams, and direct elementary emissions if present. | process map; purchasing records; meter coverage; waste register; emission monitoring records where applicable |
| `dq_representativeness` | upstream links | Match fibre identity, electricity geography and voltage, lubricant product, packaging material, technology, and period; disclose every proxy. | upstream dataset metadata and proxy assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm that the reference product UUID, Product flow type, CPC 26450 identity, Mass property, Units of mass group, and kg reference unit remain consistent with the declared yarn. | `unsd-cpc-3-2025` |
| `validate_scope_threshold` | product composition and market state | Reject a package if artificial staple fibres are below 85% of total fibre mass, constituent fibres are not identified, the product is sewing thread or filament yarn, or the package is put up for retail sale. | `unsd-cpc-3-2025` |
| `validate_atomic_inventory` | process inventory | Reject collective, selector, or combined flow labels; every actual material, chemical product, electricity scenario, packaging component, waste, and elementary flow must occupy its own row. |  |
| `validate_bilingual_alignment` | English and Chinese PCR renderings | Require identical ordered process_id, row_id, direction, flow_type, value_mode, specificity, basis_kind, evidence_kind, source_id, and UUID sequences. |  |
| `validate_foreground_records` | inventory amounts | Require raw foreground evidence and a collection protocol for every inventory amount; do not accept AI-estimated values or unsupported ranges. |  |
| `validate_mass_reconciliation` | fibre-bearing inventory | Require a documented fibre mass reconciliation and an explanation for every residual rather than silently balancing or netting waste. |  |
| `validate_unresolved_identity` | UUID-free inventory rows | Require direct Tiangong re-search before publication and keep a UUID blank unless a public record exactly matches the row semantics. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for secondary spinning of artificial staple-fibre yarn |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review and publication |
| allowed_use | LCA process or lifecyclemodel construction for yarn matching CPC 26450, declared fibre composition, spinning system, geography, technology, and time |
| excluded_use | Artificial-fibre manufacture; synthetic staple-fibre yarn; filament yarn; sewing thread; retail-packed yarn; dyeing or finishing; fabric production; unqualified global proxy use |
| required_metadata | PCR id and version; reference product UUID; constituent fibre names and mass shares; yarn count; twist; spinning system; moisture basis; dye state; included steps; geography; period; electricity scenario; lubricant identity; package configuration; waste destinations; allocation method |
| required_quality_disclosure | Foreground versus proxy status for every row; meter and scale coverage; composition evidence; stock reconciliation; allocation calculations; UUID gaps; range-evidence gaps; mass-reconciliation residuals; excluded activities |
| update_trigger | Change in fibre identity or composition, spinning system, lubricant product, electricity supply, package configuration, waste route, site, reporting period, reference-flow UUID, or a resolved Tiangong identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, code 26450, pp. 120-121, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact product scope, 85% mass threshold, sewing-thread exclusion, artificial staple-fibre identity, and non-retail market state |
| `jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques (BAT) Reference Document for the Textiles Industry, JRC131874, Sections 2.4-2.4.3, pp. 33-34, and Section 8.1.2.3, p. 849, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2023-01/TXT_BREF_2023_for_publishing%20ISSN%201831-9424_final_1_revised.pdf | Secondary staple-fibre yarn process sequence, winding and optional twisting, spinning-lubricant role, and environmental relevance |
| `eu-textiles-bat-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508, Textiles Industry BAT Conclusions, Scope, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508 | Explicit disclosure that production of man-made fibres and yarns is outside the BAT Conclusions scope; prevention of misapplication to this PCR |
