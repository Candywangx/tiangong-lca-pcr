---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-vegetable-textile-fibres-other-than-cotton-including-flax-jute-coir-and-true-he-66566500
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Yarn of vegetable textile fibres other than cotton (including flax, jute, coir and true hemp); paper yarn

## 1. Scope and Applicability

This PCR governs foreground data packages for the factory manufacture of yarn from non-cotton vegetable textile fibres, including flax, jute, coir and true hemp, and for yarn made by slitting and twisting paper. It covers preparation performed inside the yarn mill, spinning or paper-strip twisting, plying when performed, winding, and production-lot conditioning up to finished yarn at the plant gate.

The starting material is a purchased, processed fibre suitable for spinning or purchased paper suitable for slitting and twisting. Cultivation, harvesting, retting, decortication, upstream degumming, pulp production, and papermaking are represented by upstream datasets. Weaving, knitting, dyeing, bleaching, coating, sizing, garment manufacture, distribution, use, and end-of-life are outside this foreground boundary unless a study adds them as separately measured processes.

One foreground data package represents one declared material and route. Blends containing cotton, animal fibres, or man-made fibres are outside this PCR unless the non-cotton vegetable-fibre or paper component is modelled as a separately measurable product input and the resulting product still meets the declared CPC 26380 product identity. Sewing thread and rope, cordage, woven fabric, raw or retted crop material, and processed-but-unspun fibre sold as the final product are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-vegetable-textile-fibres-other-than-cotton-including-flax-jute-coir-and-true-he-66566500 |
| classification_refs | CPC 3.0: 26380 |
| covered_products | Finished single, plied, or cabled yarn made from one declared non-cotton vegetable textile fibre; finished paper yarn made from one declared paper input. |
| excluded_products | Cotton yarn; animal-fibre yarn; man-made-fibre yarn; sewing thread; rope or cordage; woven or knitted fabric; processed fibre not yet spun; yarn whose dyeing, coating, or sizing is not separately modelled when those treatments are part of the delivered product. |
| representative_product | Unbleached, undyed finished yarn made from one declared non-cotton vegetable textile fibre, wound for dispatch at the yarn mill gate. |
| production_route | Route A: processed vegetable fibre preparation, spinning, optional plying, winding, and conditioning. Route B: paper slitting, optional moistening, twisting or folding, optional plying, winding, and conditioning. |
| market_state | Finished yarn at the manufacturing plant gate, with material identity, linear density, twist, moisture basis, treatment state, and package form declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of finished non-cotton vegetable-fibre yarn or paper yarn at the yarn manufacturing plant gate. |
| How much | 1 kg net yarn, excluding transport packaging and reusable carriers. |
| How well | Conforming to the declared fibre or paper identity, yarn construction, linear density, twist direction and level, moisture basis, treatment state, and quality specification. |
| How long or cycle | One completed production lot; no use-duration function is assigned. |
| reference_flow_link | The functional unit is realized by the single reference product flow defined below. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Yarn of vegetable textile fibres other than cotton (including flax, jute, coir and true hemp), paper yarn `bf8e0cc2-c99b-43a9-b306-d31a7fb8c11f` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | route; botanical fibre species or paper grade; single/plied/cabled construction; linear density in tex; twist direction; twist level; moisture basis and measured moisture content; treatment state; package form; plant geography; production period |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or an equivalent field. Missing qualifiers make the reference flow incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference yarn output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record net yarn mass excluding transport packaging and reusable carriers. Declare the moisture basis and retain the measured lot moisture used with the mass result. |
| `linear_density` | Yarn product specification | Linear density | tex | Record linear density in tex or retain the original count together with the documented conversion to tex. Determine package-yarn linear density using the applicable ISO 2060 procedure or an explicitly justified equivalent. |
| `twist_measurement` | Yarn product specification | Twist | turns/m | Declare S or Z direction and turns per metre. Use ISO 2061 where applicable; if that method is not applicable to the yarn construction, retain the agreed test method and specimen conditions. |
| `electricity_energy` | Medium-voltage alternating-current input | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered electricity amount and its original unit; when converting to MJ, retain the conversion equation and source unit. |
| `material_mass` | Fibre, paper, water, lubricant, and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record weighed mass by production lot. If water is metered by volume, retain volume, temperature or density evidence, and the calculation used to obtain mass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Processed fibre suitable for the declared spinning route is received at the yarn mill, or paper suitable for the declared paper-yarn route is received before slitting. |
| starting_condition_role | Upstream product input to the foreground yarn-manufacturing process. |
| product_classification_scope | CPC 3.0 code 26380, constrained by the covered and excluded product statements in this PCR. |
| recursive_input_rule | If same-category yarn is used for plying or another in-scope operation, record that yarn as one explicit product input with its own upstream dataset; do not expand it recursively inside this foreground process. |
| upstream_dataset_requirement | Each purchased fibre, paper, same-category yarn, electricity supply, water supply, and lubricant input shall reference an upstream dataset that matches the declared material, geography, technology, and time as closely as available. |
| disclosure | Declare starting material identity and condition, upstream preparation already completed, included on-site operations, excluded treatments, material losses, electricity voltage and supply mix, water use, auxiliary use, waste destinations, and any same-category yarn input. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground yarn manufacture | Include all directly controlled preparation, spinning or paper-strip forming, plying, winding, conditioning, utilities, auxiliaries, rejects, and wastes from receipt of the declared starting material through finished yarn at the plant gate. | `eu-jrc-txt-bref-2023`; `chummun-rosunee-2012`; `eu-pef-2021` |
| `boundary_upstream_inputs` | purchased starting materials and utilities | Keep cultivation, retting, decortication, degumming, pulp manufacture, papermaking, and utility generation in linked upstream datasets unless any operation is physically performed and measured inside the reporting site. | `unsd-cpc-3-0-26380`; `eu-jrc-bio-based-textiles-2025`; `eu-pef-2021` |
| `boundary_treatments` | dyeing, bleaching, coating, and sizing | Exclude downstream treatment unless it forms part of the delivered yarn and is separately measured as an added foreground process; disclose any exclusion that changes the delivered product state. | `eu-jrc-txt-bref-2023`; `eu-bat-textiles-2022` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yarn_manufacturing` | Vegetable-fibre or paper-yarn manufacturing | required | Include one declared route and only the atomic material rows applicable to the production lot. | Foreground preparation, spinning or paper-strip forming, optional plying, winding, conditioning, and release of finished yarn. | 1 kg net finished yarn at the declared moisture basis. |

### Process: Vegetable-fibre or paper-yarn manufacturing (`yarn_manufacturing`)

#### Inputs

##### Product flows

###### Prepared flax sliver (`flax_sliver_input`)

Record this input only for a flax-yarn lot that receives prepared flax sliver suitable for spinning.

- Selected flow: Prepared flax sliver (for spinning) `728fa78a-f638-4d63-86c6-f752fe31b5a2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net prepared flax sliver charged to the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished yarn from the same production lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `eu-jrc-bio-based-textiles-2025`

###### Processed jute fibre (`jute_fibre_input`)

Record this input only for a jute-yarn lot. The unresolved name denotes one processed jute fibre product suitable for spinning, not tow or a mixed waste stream.

- Selected flow: Processed jute fibre for spinning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net processed jute fibre charged to the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished yarn from the same production lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `eu-jrc-txt-bref-2023`

###### Processed true hemp fibre (`hemp_fibre_input`)

Record this input only for a true-hemp-yarn lot and retain the declared preparation state received by the mill.

- Selected flow: Processed true hemp fibre for spinning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net processed true hemp fibre charged to the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished yarn from the same production lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `eu-jrc-bio-based-textiles-2025`

###### Processed coir fibre (`coir_fibre_input`)

Record this input only for a coir-yarn lot and retain the declared preparation state received by the mill.

- Selected flow: Processed coir fibre for spinning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net processed coir fibre charged to the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished yarn from the same production lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `eu-jrc-txt-bref-2023`

###### Paper strip (`paper_strip_input`)

Record the paper feed as one paper-strip product for a paper-yarn lot. If slitting is performed on site, the measured feed is the paper before slitting and the product description shall still identify the paper grade used to make the strip.

- Selected flow: Paper strip for paper-yarn twisting
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net paper charged to slitting, folding, or twisting for the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished paper yarn from the same production lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `chummun-rosunee-2012`

###### Medium-voltage alternating current (`medium_voltage_electricity_input`)

Record electricity supplied as 1-35 kV alternating current from the declared consumption mix. Do not merge this row with heat, steam, or fuel.

- Selected flow: alternating current; 1-35 kV; consumption mix; electricity mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered electricity attributable to preparation, spinning or twisting, plying, winding, conditioning, and local auxiliary equipment for the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished yarn from the same production lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity`
- Sources: `eu-jrc-txt-bref-2023`; `eu-bat-textiles-2022`

###### Process water (`process_water_input`)

Record water only when it crosses the process boundary for paper-strip moistening, wet spinning, conditioning, or cleaning attributable to the production lot.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or tank-weighed process water attributable to the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg net finished yarn from the same production lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `chummun-rosunee-2012`; `eu-jrc-txt-bref-2023`

###### Mineral lubricating oil (`mineral_lubricating_oil_input`)

Record mineral lubricating oil only when it is applied to fibre or yarn during preparation, spinning, plying, or winding. Other formulated auxiliaries shall be represented by separate, chemically or commercially specific atomic cards in the foreground package.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Net mass issued to and consumed by the production lot after documented returns.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished yarn from the same production lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lubricating_oil`
- Sources: `eu-bat-textiles-2022`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished yarn (`finished_yarn_output`)

Record only yarn that meets the declared lot specification and reference-flow qualifiers.

- Selected flow: Yarn of vegetable textile fibres other than cotton (including flax, jute, coir and true hemp), paper yarn `bf8e0cc2-c99b-43a9-b306-d31a7fb8c11f`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net conforming yarn output at the declared moisture basis, excluding transport packaging and reusable carriers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net finished yarn
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_yarn`
- Sources: `unsd-cpc-3-0-26380`; `iso-2060-1994`; `iso-2061-2015`

##### Waste flows

###### Discarded flax fibre (`flax_fibre_waste`)

Record this waste only for a flax-yarn lot and only when the discarded material leaves the process as flax fibre.

- Selected flow: Discarded flax fibre from yarn manufacture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed discarded flax fibre sent to the declared waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished yarn from the same production lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_wastes`
- Sources: `eu-jrc-txt-bref-2023`

###### Discarded jute fibre (`jute_fibre_waste`)

Record this waste only for a jute-yarn lot and only when the discarded material leaves the process as jute fibre.

- Selected flow: Discarded jute fibre from yarn manufacture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed discarded jute fibre sent to the declared waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished yarn from the same production lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_wastes`
- Sources: `eu-jrc-txt-bref-2023`

###### Discarded true hemp fibre (`hemp_fibre_waste`)

Record this waste only for a true-hemp-yarn lot and only when the discarded material leaves the process as true hemp fibre.

- Selected flow: Discarded true hemp fibre from yarn manufacture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed discarded true hemp fibre sent to the declared waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished yarn from the same production lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_wastes`
- Sources: `eu-jrc-bio-based-textiles-2025`

###### Discarded coir fibre (`coir_fibre_waste`)

Record this waste only for a coir-yarn lot and only when the discarded material leaves the process as coir fibre.

- Selected flow: Discarded coir fibre from yarn manufacture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed discarded coir fibre sent to the declared waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished yarn from the same production lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_wastes`
- Sources: `eu-jrc-txt-bref-2023`

###### Discarded paper strip (`paper_strip_waste`)

Record this waste only for a paper-yarn lot and only when discarded paper strip leaves the process for waste management.

- Selected flow: Discarded paper strip from paper-yarn manufacture
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed discarded paper strip sent to the declared waste destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished paper yarn from the same production lot
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_solid_wastes`
- Sources: `chummun-rosunee-2012`

##### Elementary flows

No direct elementary-flow amount is prescribed. Measure and add each emitted substance as a separate elementary-flow card when the site has an applicable measurement, permit record, or mass-balance result; do not infer an emission from electricity, water, lubricant, or waste use.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | independently measurable routes, lots, and yarn grades | Avoid allocation by subdividing plant records by route, material, production lot, and independently metered operation wherever feasible. | `eu-pef-2021` |
| `allocation_physical` | inseparable co-products with a documented physical causal relationship | When subdivision is not feasible, apply the documented physical relationship that reflects how inputs and emissions change with the co-products; retain the formula and supporting measurements. | `eu-pef-2021` |
| `allocation_economic_fallback` | inseparable saleable co-products without a defensible physical relationship | Use contemporaneous net economic value only as a fallback, disclose prices, period, currency, and allocation factors, and test sensitivity against mass allocation. | `eu-pef-2021` |
| `allocation_waste` | discarded fibre and paper strip | Treat material sent to waste management as a waste output. Do not assign an avoided-product credit inside this plant-gate dataset unless a broader study applies and discloses a separate recycling or substitution method. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `yarn_manufacturing` | `flax_sliver_input`, `jute_fibre_input`, `hemp_fibre_input`, `coir_fibre_input`, `paper_strip_input` | weighbridge, scale, batch issue, and return records | lot_id; material_identity; supplier; preparation_or_paper_grade; gross_mass; tare_mass; returned_mass; moisture_basis; timestamp | Reconcile receiving and lot-issue records to calibrated scale records and deduct documented returns. | kg | each lot | continuous over the reporting period | all reporting-site yarn lines | Sum net input by atomic material and lot; never merge different material identities. | calibration record; supplier specification; receiving record; batch issue and return record |
| `cp_electricity` | `yarn_manufacturing` | `medium_voltage_electricity_input` | electricity meter and production log | meter_id; voltage_level; supply_mix; opening_reading; closing_reading; unit; allocation_key; lot_id; timestamp | Use dedicated meters where available; otherwise allocate a reconciled submeter total using documented machine runtime and rated-load evidence. | original meter unit and MJ | each lot or shift | representative reporting period including all operating modes | all in-scope preparation, spinning or twisting, plying, winding, conditioning, and auxiliary equipment | Convert with a documented unit equation and divide by net conforming yarn mass. | meter calibration; utility invoice reconciliation; machine runtime log |
| `cp_process_water` | `yarn_manufacturing` | `process_water_input` | water meter, tank mass, or batch addition record | meter_or_vessel_id; purpose; route; opening_reading; closing_reading; volume_or_mass; temperature_or_density; lot_id; timestamp | Measure only process water attributable to the lot and retain evidence for any volume-to-mass conversion. | kg | each lot or shift | representative reporting period | paper moistening, wet spinning, conditioning, and attributable cleaning only | Sum attributable water mass and divide by net conforming yarn mass. | meter calibration; batch sheet; conversion record |
| `cp_lubricating_oil` | `yarn_manufacturing` | `mineral_lubricating_oil_input` | chemical issue and return record | product_name; composition_or_specification; container_id; issued_mass; returned_mass; lot_id; use_point; timestamp | Weigh issued and returned containers and assign only net consumption to the lot. | kg | each issue and lot | full reporting period | all in-scope use points | Sum net consumed mass by the exact product identity and divide by net conforming yarn mass. | scale calibration; safety data sheet; issue and return record |
| `cp_finished_yarn` | `yarn_manufacturing` | `finished_yarn_output` | finished-goods scale and quality release record | lot_id; gross_mass; tare_mass; net_mass; moisture_content; moisture_basis; material_identity; construction; tex; twist_direction; twist_level; treatment_state; package_form; release_status | Weigh conforming yarn separately from carriers and rejected yarn; retain the quality-release record and test conditions. | kg | each lot | full reporting period | all reporting-site yarn lines | Sum conforming net yarn at the declared moisture basis; rejected yarn is not reference product. | scale calibration; moisture test; ISO 2060 or equivalent record; ISO 2061 or equivalent record; lot release certificate |
| `cp_solid_wastes` | `yarn_manufacturing` | `flax_fibre_waste`, `jute_fibre_waste`, `hemp_fibre_waste`, `coir_fibre_waste`, `paper_strip_waste` | waste scale, container, and dispatch record | lot_id; exact_material_identity; container_id; gross_mass; tare_mass; destination; recovery_or_disposal_route; timestamp | Segregate and weigh each atomic waste stream; use a documented sampling and reconciliation method if continuous collection prevents lot-level weighing. | kg | each lot or waste dispatch | full reporting period | all in-scope waste collection points | Sum each exact waste material separately and divide by net conforming yarn mass. | scale calibration; waste transfer note; destination evidence; reconciliation record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_mass` | material, lubricant, finished-yarn, and waste records | net_mass = gross_mass - tare_mass - documented_returned_mass, with returned_mass omitted where not applicable. | gross_mass; tare_mass; returned_mass | net mass in kg |  |
| `calc_normalized_exchange` | every inventory row | normalized_exchange = attributable_exchange_amount / net_conforming_yarn_mass for the same lot and declared moisture basis. | attributable exchange amount; net conforming yarn mass | exchange amount per kg reference yarn | `eu-pef-2021` |
| `calc_mass_reconciliation` | each production lot | Reconcile atomic material inputs against finished yarn, separately weighed wastes, retained work in progress, and measured moisture change; investigate and disclose any residual rather than creating an unmeasured flow. | atomic material inputs; finished yarn; atomic wastes; work-in-progress change; measured moisture change | lot mass-reconciliation statement | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and material identity | Declare one yarn route and one exact botanical fibre species or paper grade per dataset; record any additional material or emitted substance as its own atomic exchange. | supplier specification; batch record; product release record; Tiangong UUID where resolved |
| `dq_measurement` | mass, electricity, and water records | Use calibrated instruments and retain raw readings, units, conversion equations, allocation keys, and reconciliation evidence. | calibration certificates; meter logs; weigh tickets; calculation workbook |
| `dq_temporal` | reporting period | Cover a representative period including startup, normal operation, changeover, stoppage, and cleaning attributable to the product, or disclose excluded operating modes. | production calendar; downtime log; reporting-period rationale |
| `dq_completeness` | process and exchange coverage | Demonstrate that all in-scope operations and all material, energy, water, auxiliary, waste, and measured direct-emission exchanges are included or explicitly documented as not applicable. | completeness checklist and lot mass reconciliation; `eu-pef-2021` |
| `dq_yarn_properties` | reference product | Retain linear-density, twist, moisture, construction, treatment-state, and package-form evidence for the represented lot. | ISO 2060 or justified equivalent; ISO 2061 or justified equivalent; moisture test; lot specification |
| `dq_representativeness` | dataset publication | Assess and disclose technological, geographical, temporal, and precision representativeness and any proxy upstream dataset. | data-quality assessment following `eu-pef-2021` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Require exactly 1 kg net conforming yarn, the confirmed reference product UUID, Mass flow-property UUID, Units of mass unit-group UUID, and every required product qualifier. | `unsd-cpc-3-0-26380`; `iso-2060-1994`; `iso-2061-2015` |
| `validate_route_material` | starting material | Require exactly one declared route and only material cards that apply to the lot. Any other in-scope vegetable fibre shall be recorded with its exact species-specific atomic name and a verified Tiangong UUID or an explicit unresolved identity record. | `unsd-cpc-3-0-26380` |
| `validate_atomic_inventory` | all exchanges | Reject any card that combines different materials, chemicals, electricity supply scenarios, fuels, wastes, or elementary flows; every selected flow shall describe one atomic exchange. |  |
| `validate_amount_evidence` | all inventory amounts | Require foreground records or calculations linked to the collection protocols. Reject AI-estimated amounts and unsupported default ranges. | `eu-pef-2021` |
| `validate_mass_balance` | each production lot | Require a documented mass reconciliation of atomic material inputs, finished yarn, atomic wastes, work-in-progress change, and measured moisture change; unresolved residuals shall be disclosed and investigated. | `eu-pef-2021` |
| `validate_boundary` | foreground dataset | Require all directly controlled in-scope operations, utilities, auxiliaries, rejects, and measured emissions, plus linked upstream datasets for purchased inputs; disclose each treatment excluded from the delivered yarn state. | `eu-jrc-txt-bref-2023`; `eu-bat-textiles-2022`; `eu-pef-2021` |
| `validate_allocation` | shared operations and co-products | Require subdivision first and retain the physical or economic allocation evidence when allocation remains necessary. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground product-manufacturing dataset for one declared non-cotton vegetable-fibre yarn or paper-yarn route. |
| downstream_use | May support a reviewed `secondary_dataset` or `background_dataset` for textile, packaging, composite, craft, or other systems consuming the declared yarn. |
| allowed_use | Use for the declared material, yarn construction, treatment state, plant technology, geography, and reporting period after all unresolved identities are resolved or transparently retained for candidate review. |
| excluded_use | Do not represent cotton, animal-fibre, man-made-fibre, sewing-thread, rope, fabric, dyed, bleached, coated, or sized yarn production unless the changed identity and added processes are explicitly modelled. Do not use for comparative assertions without an independently reviewed complete life-cycle scope. |
| required_metadata | PCR id; route; material species or paper grade; upstream preparation state; yarn construction; tex; twist direction and level; moisture basis and content; treatment state; package form; plant geography; technology; reporting period; allocation method; electricity voltage and mix; waste destinations; source and dataset versions. |
| required_quality_disclosure | Instrument calibration; sampling and allocation methods; mass-reconciliation result; coverage gaps; operating modes; upstream proxies; technological, geographical, temporal, and precision representativeness; unresolved UUIDs. |
| update_trigger | Change in starting material, paper grade, spinning or twisting technology, yarn construction, treatment state, plant electricity supply, allocation basis, waste route, reporting period, or any resolved Tiangong identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-26380` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, code 26380, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (retrieved 2026-08-12). | Product-category scope and reference-product identity. |
| `eu-jrc-txt-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, January 2023. https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry (retrieved 2026-08-12). | Fibre preparation, yarn-manufacturing boundary, utilities, auxiliaries, waste, and data coverage. |
| `eu-bat-textiles-2022` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry. https://eur-lex.europa.eu/eli/dec_impl/2022/2508/oj/eng (retrieved 2026-08-12). | Textile process controls, resource records, mineral-oil relevance, and treatment boundary. |
| `eu-jrc-bio-based-textiles-2025` | official_guidance | European Commission Joint Research Centre, Bio-based textiles in a sustainable and circular bioeconomy, JRC140676. https://publications.jrc.ec.europa.eu/repository/handle/JRC140676 (retrieved 2026-08-12). | Flax and hemp value-chain stages and separation of upstream preparation from spinning and yarn treatment. |
| `chummun-rosunee-2012` | literature | Chummun, J.; Rosunee, S. Manufacture of Folded and Twisted Paper Yarn. Research Journal of Textile and Apparel 16(4), 93-99. https://doi.org/10.1108/RJTA-16-04-2012-B010. | Paper slitting, moistening, folding or twisting, and paper-yarn route decomposition. |
| `iso-2060-1994` | standard | ISO 2060:1994, Textiles — Yarn from packages — Determination of linear density (mass per unit length) by the skein method. https://www.iso.org/standard/6837.html (retrieved 2026-08-12). | Linear-density measurement and reference-product qualification. |
| `iso-2061-2015` | standard | ISO 2061:2015, Textiles — Determination of twist in yarns — Direct counting method. https://www.iso.org/standard/65146.html (retrieved 2026-08-12). | Twist direction and level measurement. |
| `eu-pef-2021` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-12). | Functional unit, system boundary, allocation hierarchy, company-specific data, completeness, data quality, and validation. |
