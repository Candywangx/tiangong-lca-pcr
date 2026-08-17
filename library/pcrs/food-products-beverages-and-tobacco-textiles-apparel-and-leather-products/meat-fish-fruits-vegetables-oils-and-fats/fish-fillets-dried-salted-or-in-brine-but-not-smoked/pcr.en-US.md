---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-fillets-dried-salted-or-in-brine-but-not-smoked
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Fish fillets, dried, salted or in brine, but not smoked

## 1. Scope and Applicability

This PCR covers edible fish fillets preserved by drying, dry-salting, wet-salting, brining, brine injection, or combinations of those operations, provided that smoking and smoke-flavouring are not used. The foreground product is a finished fish fillet at the processor gate, sold dried, salted, or immersed in brine as declared by the producer.

The PCR excludes smoked and smoke-flavoured fish, smoke-dried fish, whole or split fish that is not marketed as fillet, minced fish, fish livers and roes, canned or cooked fish preparations, and products whose principal preservation route is freezing without salting or drying. Species, capture or aquaculture origin, incoming fresh/chilled/frozen state, salting route, drying status, final brine inclusion, packaging format, storage temperature, and edible-product moisture or water-activity control must be declared because they materially affect inventory interpretation and food-safety controls.

The foreground boundary begins when raw fish or pre-cut fish fillets are received at the processing facility in their declared temperature state. It ends with one kilogram of net edible finished product, excluding packaging mass, packed and ready to leave the processing site. Upstream fish production or capture, ice, salt, packaging, electricity, fuel, water supply, and inbound transport are represented by linked upstream datasets when included in the study; downstream distribution, retail, preparation, consumption, and end-of-life are outside the default foreground boundary.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-fillets-dried-salted-or-in-brine-but-not-smoked |
| classification_refs | CPC 3.0: 21224, exact |
| covered_products | Edible fish fillets that are dried, salted, wet-salted, dry-salted, brine-injected, or held in brine, including combinations of drying and salting, without smoking or smoke flavouring |
| excluded_products | Smoked, smoke-flavoured, or smoke-dried fish; whole or split non-fillet fish; minced fish; fish livers or roes; canned or cooked preparations; frozen-only fillets without salting or drying |
| representative_product | A packaged edible fish fillet preserved by a declared dry-salting or brining route, optionally dried, and not smoked |
| production_route | Receipt under controlled temperature; inspection and thawing when needed; optional filleting, trimming, washing, and draining; salting or brining and curing; conditional hygienic drying; finishing, packaging, and controlled storage |
| market_state | Finished edible product at the processing facility gate; dried, salted, or in brine as declared; packaged; chilled, frozen, or shelf-stable only when supported by the product-specific food-safety plan |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Edible fish fillets preserved by drying, salting, or brining without smoking |
| How much | 1 kg net mass of finished edible fish fillets, excluding packaging and any non-product transport ice |
| How well | Conforms to the declared species, preservation route, salt/brine state, drying state, moisture or water-activity control, food-safety plan, and market specification |
| How long or cycle | One production lot delivered at the processing facility gate; shelf life and required storage temperature are declared lot attributes rather than part of the reference amount |
| reference_flow_link | `reference_finished_fish_fillets` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished product mass |
| Reference product flow | Fish fillets, dried, salted or in brine, but not smoked `b41d734d-e255-404c-b6bb-b2c408f653c6` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fish species or species group; capture or aquaculture origin; incoming product form and fresh/chilled/frozen state; filleting performed on-site or upstream; salting technology; salt and brine specification; dried or non-dried state; final product sold drained or with brine; moisture or water-activity control where applicable; packaging format; storage temperature and shelf-life basis; geographic and temporal representativeness |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference-flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference finished fish fillets | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground inventory to 1 kg net edible finished product; exclude packaging, transport ice, and drained free brine unless the marketed product definition explicitly includes brine in the sold net quantity. |
| `incoming_mass_state` | Incoming raw fish or fillets | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record weighed received mass and separately declare whether glaze, surface ice, free liquid, head, skin, bone, or other non-fillet material is included; do not silently convert gross receipt mass to edible fillet mass. |
| `brine_component_accounting` | Brine preparation and final brine | Mass | kg | Record water and food-grade salt as separate inputs. Record retained brine in the sold product separately from spent or discharged brine, and state whether the reference net quantity includes retained brine. |
| `moisture_and_dry_matter` | Drying and curing | Mass; dimensionless fraction | kg; kg/kg or percent | Use paired wet-basis mass records before and after curing or drying. Declare whether moisture or salt concentration is reported on wet, dry, or water-phase basis and retain the laboratory method. |
| `energy_conversion` | Refrigeration, pumps, drying, and packaging | Energy | kWh or MJ | Preserve metered units. Convert only with an explicit factor, identify electricity and fuel separately, and allocate shared utility meters using a documented physical driver before normalization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Raw fish or pre-cut fish fillets received at the processing facility with species, origin, form, temperature state, glaze or free-liquid treatment, and prior preservation disclosed |
| starting_condition_role | Foreground gate input whose received quantity and condition anchor yield, loss, cold-chain, and processing records |
| product_classification_scope | Edible fish fillets dried, salted, or in brine and not smoked; CPC 3.0 code 21224 is classification context, not canonical PCR identity |
| recursive_input_rule | When a same-category salted, dried, or brined fish fillet enters as an ingredient or intermediate, record it once as a product input with its upstream dataset and declared condition; do not recursively recreate upstream preservation inside the current foreground system |
| upstream_dataset_requirement | Link representative upstream datasets for incoming fish or fillets, salt, water, ice, packaging, electricity, fuel, refrigerants, and transport when those flows cross the study boundary; disclose proxy geography, technology, age, and allocation |
| disclosure | Declare facility geography, reporting period, species and source, raw-material state, processing route, included conditional processes, packaging, cold-storage conditions, yield basis, co-product treatment, exclusions, cut-offs, and all upstream proxies |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | foreground processing | Include receiving and temperature-controlled handling, inspection, applicable thawing and preparation, salting or brining and curing, conditional drying, finishing, packaging, storage, direct utilities, rejects, wastewater or spent brine, and other on-site wastes for every operation performed by the reporting facility. | `codex-cxc-52-2003` |
| `boundary_conditional_routes` | conditional operations | Include filleting and trimming only when whole, dressed, or otherwise non-fillet fish is processed on-site; include drying only for a dried product route; include final brine make-up only when product is sold in brine; disclose omitted conditional operations. | `codex-cxc-52-2003` |
| `boundary_food_safety_controls` | process control records | Retain product-specific HACCP or equivalent hazard-control evidence for raw-material suitability, time-temperature control, potable-water and food-grade-salt use, brine concentration where applicable, hygienic drying, contamination prevention, packaging, and storage. | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `boundary_upstream_downstream` | life-cycle linkage | Keep upstream production or capture and supply-chain burdens outside the foreground gate but link them through representative datasets; exclude downstream distribution, retail, preparation, consumption, and end-of-life from the default foreground package unless the declared study expands the boundary. | `eu-pef-2021-2279` |
| `boundary_cutoff_disclosure` | completeness | Do not omit a flow merely because its Tiangong UUID is pending. Quantify all measured material, energy, water, product, co-product, waste, wastewater, and direct elementary flows, and disclose any study-specific cut-off with its mass, energy, and expected environmental relevance. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_cold_handling` | Receiving and temperature-controlled handling | `required` | Always | Foreground receipt, identity, suitability, thawing decision, and cold-chain handling | kg received raw fish or fillets |
| `preparation_filleting` | Preparation, filleting, trimming, washing, and draining | `conditional` | Include when received material requires filleting, skinning, deboning, trimming, washing, or draining at the site | Foreground conversion to prepared fillets | kg prepared fillets |
| `salting_curing` | Salting, brining, and curing | `required` | Always; select and declare the applicable salting route | Foreground preservation and curing | kg cured fillets |
| `hygienic_drying` | Hygienic drying | `conditional` | Include when the finished product is declared dried or when a drying step is otherwise performed | Foreground moisture removal | kg dried fillets |
| `finishing_packaging_storage` | Finishing, packaging, and controlled storage | `required` | Always | Foreground final product preparation and processor-gate output | 1 kg net reference product |

### Process: Receiving and temperature-controlled handling (`receiving_cold_handling`)

#### Inputs

##### Product flows

###### Incoming whole fish, fresh or chilled (`incoming_whole_fish_fresh_chilled`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Whole fish, fresh or chilled
- Applicability: Use only for fresh or chilled whole-fish receipts; record species and origin.
- Flow property / unit: Mass / kg
- Amount rule: measured mass attributable to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Sources: `codex-cxc-52-2003`; `codex-cxs-190-1995`
- Range: Provisional raw-material mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 4.0
  - Unit: kg/kg net finished product
  - Basis: broad screen spanning pre-cut fillets and on-site filleting or drying routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Incoming whole fish, frozen (`incoming_whole_fish_frozen`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Whole fish, frozen
- Applicability: Use only for frozen whole-fish receipts.
- Flow property / unit: Mass / kg
- Amount rule: measured mass attributable to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Sources: `codex-cxc-52-2003`; `codex-cxs-190-1995`
- Range: Provisional raw-material mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 4.0
  - Unit: kg/kg net finished product
  - Basis: broad screen spanning pre-cut fillets and on-site filleting or drying routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Incoming fish fillets, fresh or chilled (`incoming_fish_fillets_fresh_chilled`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Fish fillets and fish meat (whether or not minced), fresh or chilled `a1c31d45-a225-426f-908a-f79eae6c071f`
- Applicability: Use only for fresh or chilled fillet receipts.
- Flow property / unit: Mass / kg
- Amount rule: measured mass attributable to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Sources: `codex-cxc-52-2003`; `codex-cxs-190-1995`
- Range: Provisional raw-material mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 4.0
  - Unit: kg/kg net finished product
  - Basis: broad screen spanning pre-cut fillets and on-site filleting or drying routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Incoming fish fillets, frozen (`incoming_fish_fillets_frozen`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Frozen fish fillets `130aa38f-8c63-4d0b-ad05-0b2c4426cdd8`
- Applicability: Use only for frozen fillet receipts.
- Flow property / unit: Mass / kg
- Amount rule: measured mass attributable to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Sources: `codex-cxc-52-2003`; `codex-cxs-190-1995`
- Range: Provisional raw-material mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.0
  - Upper: 4.0
  - Unit: kg/kg net finished product
  - Basis: broad screen spanning pre-cut fillets and on-site filleting or drying routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Receiving low-voltage grid electricity (`receiving_grid_electricity_low_voltage`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Applicability: Use only for below-1-kV consumption-mix supply; do not duplicate medium-voltage supply.
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity supplied below 1 kV and attributable to receipt, thawing control, and cold holding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_energy`
- Sources: `codex-cxc-52-2003`
- Range: Provisional receiving and cold-holding electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg net finished product
  - Basis: broad screen before route, climate, voltage, and duration evidence is reviewed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Receiving medium-voltage grid electricity (`receiving_grid_electricity_medium_voltage`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Applicability: Use only for 1–35-kV consumption-mix supply; do not duplicate low-voltage supply.
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity supplied at 1–35 kV and attributable to receipt, thawing control, and cold holding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_energy`
- Sources: `codex-cxc-52-2003`
- Range: Provisional receiving and cold-holding electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg net finished product
  - Basis: broad screen before route, climate, voltage, and duration evidence is reviewed
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Food-grade ice for fish chilling (`receiving_food_grade_ice`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Food-grade ice for fish chilling
- Flow property / unit: Mass / kg
- Amount rule: measured purchased or on-site produced food-grade ice used for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_energy`
- Sources: `codex-cxc-52-2003`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted whole fish (`accepted_whole_fish`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Accepted whole fish
- Flow property / unit: Mass / kg
- Amount rule: received whole-fish mass minus corresponding rejects and measured free liquid not entering processing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per receiving lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_batch`
- Sources: `codex-cxc-52-2003`

###### Accepted fish fillets (`accepted_fish_fillets`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Accepted fish fillets
- Flow property / unit: Mass / kg
- Amount rule: received fillet mass minus corresponding rejects and measured free liquid not entering processing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per receiving lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_batch`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Rejected whole fish (`receiving_rejected_whole_fish`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Rejected whole fish
- Flow property / unit: Mass / kg
- Amount rule: measured rejected or quarantined whole-fish mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional receiving-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg/kg received material
  - Basis: rejected fraction of the corresponding received material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rejected fish fillets (`receiving_rejected_fish_fillets`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Rejected fish fillets
- Flow property / unit: Mass / kg
- Amount rule: measured rejected or quarantined fish-fillet mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional receiving-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.0
  - Unit: kg/kg received material
  - Basis: rejected fraction of the corresponding received material
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Damaged polyethylene incoming packaging (`receiving_damaged_polyethylene_packaging`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Damaged polyethylene incoming packaging
- Flow property / unit: Mass / kg
- Amount rule: measured damaged polyethylene packaging mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Sources: `codex-cxc-52-2003`

###### Damaged corrugated-cardboard incoming packaging (`receiving_damaged_corrugated_packaging`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Damaged corrugated-cardboard incoming packaging
- Flow property / unit: Mass / kg
- Amount rule: measured damaged corrugated-cardboard packaging mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Sources: `codex-cxc-52-2003`

###### Separated ice glaze (`receiving_separated_ice_glaze`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Separated ice glaze from incoming fish
- Flow property / unit: Mass / kg
- Amount rule: measured separated ice-glaze mass not entering processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Sources: `codex-cxc-52-2003`

###### Thaw purge liquid (`receiving_thaw_purge_liquid`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Thaw purge liquid from incoming fish
- Flow property / unit: Mass / kg
- Amount rule: measured thaw purge mass not entering processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Sources: `codex-cxc-52-2003`

##### Elementary flows

### Process: Preparation, filleting, trimming, washing, and draining (`preparation_filleting`)

#### Inputs

##### Product flows

###### Accepted whole fish for preparation (`accepted_whole_fish_to_preparation`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Accepted whole fish
- Applicability: Use only when whole fish is prepared on site.
- Flow property / unit: Mass / kg
- Amount rule: measured mass attributable to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_batch`
- Sources: `codex-cxc-52-2003`

###### Accepted fish fillets for preparation (`accepted_fish_fillets_to_preparation`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Accepted fish fillets
- Applicability: Use only when received fillets require on-site preparation.
- Flow property / unit: Mass / kg
- Amount rule: measured mass attributable to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_batch`
- Sources: `codex-cxc-52-2003`

###### Process water for preparation (`preparation_process_water`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: metered or calculated process-water use attributable to washing, rinsing, and sanitation in preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_water_waste`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg/kg net finished product
  - Basis: broad first-pass screen for washing and sanitation water attributable to preparation
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared fish fillets (`prepared_fillets`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Prepared fish fillets
- Flow property / unit: Mass / kg
- Amount rule: measured drained prepared-fillet mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_batch`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Fish trimmings (`preparation_fish_trimmings`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Fish trimmings
- Flow property / unit: Mass / kg
- Amount rule: measured fish-trimming mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_water_waste`
- Sources: `codex-cxc-52-2003`; `eu-pef-2021-2279`

###### Fish skin (`preparation_fish_skin`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Fish skin
- Flow property / unit: Mass / kg
- Amount rule: measured fish-skin mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_water_waste`
- Sources: `codex-cxc-52-2003`; `eu-pef-2021-2279`

###### Fish bones (`preparation_fish_bones`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Fish bones
- Flow property / unit: Mass / kg
- Amount rule: measured fish-bone mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_water_waste`
- Sources: `codex-cxc-52-2003`; `eu-pef-2021-2279`

###### Fish offal (`preparation_fish_offal`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Fish offal
- Flow property / unit: Mass / kg
- Amount rule: measured fish-offal mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_water_waste`
- Sources: `codex-cxc-52-2003`; `eu-pef-2021-2279`

###### Fish-preparation wastewater (`preparation_wastewater`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Fish-preparation wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater discharge or water-balance volume attributable to preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_water_waste`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation-wastewater screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: m3 per kg net finished product
  - Basis: broad first-pass screen pending metered discharge and recirculation evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Salting, brining, and curing (`salting_curing`)

#### Inputs

##### Product flows

###### Prepared fish fillets for curing (`prepared_fillets_to_curing`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Prepared fish fillets
- Flow property / unit: Mass / kg
- Amount rule: measured prepared-fillet mass entering curing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per curing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_batch`
- Sources: `codex-cxc-52-2003`

###### Food-grade salt (`food_grade_salt`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Salt, food-grade, for brine preparation `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Flow property / unit: Mass / kg
- Amount rule: measured fresh salt issued to the batch minus recoverable unused salt returned to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional salt-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 1.5
  - Unit: kg/kg net finished product
  - Basis: broad screen across dry-salted, wet-salted, and brined routes
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process water for brine (`brine_process_water`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Applicability: Use only for wet-salting, brining, injection, or make-up brine.
- Flow property / unit: Mass / kg
- Amount rule: measured process water used to prepare or replenish brine
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional brine-water screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg net finished product
  - Basis: broad screen including dry-salted routes with zero brine water and wet routes with batch brine
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Curing low-voltage grid electricity (`curing_grid_electricity_low_voltage`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Applicability: Use only for below-1-kV supply; do not duplicate medium-voltage supply.
- Flow property / unit: Energy / kWh
- Amount rule: metered low-voltage electricity attributable to pumps, brine preparation, injection, handling, and controlled-temperature curing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_energy_waste`
- Sources: `codex-cxc-52-2003`
- Range: Provisional curing-electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg net finished product
  - Basis: broad first-pass screen pending route, voltage, and curing-duration evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Curing medium-voltage grid electricity (`curing_grid_electricity_medium_voltage`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Applicability: Use only for 1–35-kV supply; do not duplicate low-voltage supply.
- Flow property / unit: Energy / kWh
- Amount rule: metered medium-voltage electricity attributable to pumps, brine preparation, injection, handling, and controlled-temperature curing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_energy_waste`
- Sources: `codex-cxc-52-2003`
- Range: Provisional curing-electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg net finished product
  - Basis: broad first-pass screen pending route, voltage, and curing-duration evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cured fish fillets (`cured_fillets`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Cured fish fillets
- Flow property / unit: Mass / kg
- Amount rule: measured drained cured-fillet mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per curing batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_batch`
- Sources: `codex-cxc-52-2003`

##### Waste flows

###### Spent curing brine (`curing_spent_brine`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Spent curing brine
- Flow property / unit: Mass / kg
- Amount rule: measured spent-brine mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_energy_waste`
- Sources: `codex-cxc-52-2003`

###### Curing purge liquid (`curing_purge_liquid`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Curing purge liquid
- Flow property / unit: Mass / kg
- Amount rule: measured curing purge-liquid mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_energy_waste`
- Sources: `codex-cxc-52-2003`

###### Discarded contaminated salt (`curing_discarded_salt`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Discarded contaminated salt
- Flow property / unit: Mass / kg
- Amount rule: measured contaminated salt removed from the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_energy_waste`
- Sources: `codex-cxc-52-2003`

###### Curing cleaning wastewater (`curing_cleaning_wastewater`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Curing cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered cleaning-wastewater volume attributable to curing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salting_energy_waste`
- Sources: `codex-cxc-52-2003`

##### Elementary flows

### Process: Hygienic drying (`hygienic_drying`)

#### Inputs

##### Product flows

###### Cured fish fillets for drying (`cured_fillets_to_drying`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Cured fish fillets
- Flow property / unit: Mass / kg
- Amount rule: measured cured-fillet mass loaded to the dryer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per drying batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Sources: `codex-cxc-52-2003`

###### Drying low-voltage grid electricity (`drying_grid_electricity_low_voltage`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Applicability: Use only for below-1-kV supply.
- Flow property / unit: Energy / kWh
- Amount rule: metered low-voltage electricity attributable to dryer fans, electric heaters, dehumidification, and controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_energy`
- Sources: `codex-cxc-52-2003`

###### Drying medium-voltage grid electricity (`drying_grid_electricity_medium_voltage`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Applicability: Use only for 1–35-kV supply.
- Flow property / unit: Energy / kWh
- Amount rule: metered medium-voltage electricity attributable to dryer fans, electric heaters, dehumidification, and controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_energy`
- Sources: `codex-cxc-52-2003`

###### Drying steam (`drying_steam`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Steam `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- Applicability: Use only for purchased-steam drying; avoid double counting boiler fuel.
- Flow property / unit: Mass / kg
- Amount rule: metered purchased steam supplied to the dryer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_energy`
- Sources: `codex-cxc-52-2003`

###### Drying hot water (`drying_hot_water`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Industrial hot water at declared inlet and return temperatures
- Applicability: Use only for a hot-water heat-supply route.
- Flow property / unit: Energy / MJ
- Amount rule: metered delivered hot-water heat attributable to drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_energy`
- Sources: `codex-cxc-52-2003`

###### Drying natural gas (`drying_natural_gas`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Applicability: Use only when natural gas is burned for drying heat.
- Flow property / unit: Energy / MJ
- Amount rule: metered natural-gas gross calorific energy attributable to drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_energy`
- Sources: `codex-cxc-52-2003`

###### Drying liquefied petroleum gas (`drying_lpg`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Applicability: Use only when LPG is burned for drying heat.
- Flow property / unit: Mass / kg
- Amount rule: measured liquefied-petroleum-gas mass attributable to drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_energy`
- Sources: `codex-cxc-52-2003`

###### Drying diesel oil (`drying_diesel_oil`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Applicability: Use only when diesel oil is burned for drying heat.
- Flow property / unit: Mass / kg
- Amount rule: measured diesel-oil mass attributable to drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_energy`
- Sources: `codex-cxc-52-2003`

###### Drying fuel oil (`drying_fuel_oil`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Heavy fuel oil
- Applicability: Use only when heavy fuel oil is burned for drying heat.
- Flow property / unit: Mass / kg
- Amount rule: measured heavy-fuel-oil mass attributable to drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_energy`
- Sources: `codex-cxc-52-2003`

###### Drying wood pellets (`drying_wood_pellets`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Wood pellets `4905586c-0722-4c91-923f-112215546a41`
- Applicability: Use only when untreated wood pellets provide drying heat; smoking fuels remain excluded.
- Flow property / unit: Mass / kg
- Amount rule: measured wood-pellet mass attributable to drying
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_energy`
- Sources: `codex-cxc-52-2003`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried fish fillets (`dried_fillets`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Dried fish fillets
- Flow property / unit: Mass / kg
- Amount rule: measured cooled and equilibrated dried-fillet mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per drying batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Sources: `codex-cxc-52-2003`

##### Waste flows

##### Elementary flows

###### Water vapour released to air during drying (`drying_water_vapour_to_air`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Water vapour, to air, unspecified `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: calculated by `calc_drying_water_removed`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_batch`
- Sources: `codex-cxc-52-2003`
- Range: Provisional drying-loss mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg water/kg net finished product
  - Basis: broad screen spanning lightly dried and strongly dried fillets
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Finishing, packaging, and controlled storage (`finishing_packaging_storage`)

#### Inputs

##### Product flows

###### Cured fish fillets for packing (`cured_fillets_to_packing`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Cured fish fillets
- Applicability: Use for salted or brined product not passing through drying.
- Flow property / unit: Mass / kg
- Amount rule: measured cured-fillet mass transferred to packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packing lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `codex-cxc-52-2003`

###### Dried fish fillets for packing (`dried_fillets_to_packing`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Dried fish fillets
- Applicability: Use for product passing through hygienic drying.
- Flow property / unit: Mass / kg
- Amount rule: measured dried-fillet mass transferred to packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packing lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `codex-cxc-52-2003`

###### Retained food-grade brine for packed product (`retained_food_grade_brine_to_packing`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Retained food-grade brine
- Applicability: Use only when the marketed fish fillets are sold in brine.
- Flow property / unit: Mass / kg
- Amount rule: measured retained brine packed with the marketed product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `codex-cxc-52-2003`

###### Polyethylene packaging film (`packaging_polyethylene_film`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Polyethylene food-packaging film
- Applicability: Use only for a polyethylene-film pack.
- Flow property / unit: Mass / kg
- Amount rule: measured polyethylene film issued minus unused film returned to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `eu-pef-2021-2279`

###### Corrugated-cardboard packaging (`packaging_corrugated_cardboard`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass / kg
- Amount rule: measured corrugated-cardboard packaging issued minus unused packaging returned
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `eu-pef-2021-2279`

###### Glass-jar packaging (`packaging_glass_jar`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Glass Jar `eca48ea8-ab83-444f-98b2-15ab82570c80`
- Applicability: Use only for a glass-jar pack.
- Flow property / unit: Mass / kg
- Amount rule: measured glass-jar mass issued minus unused jars returned
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `eu-pef-2021-2279`

###### Steel food-can packaging (`packaging_steel_food_can`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Steel food can `f09b782f-b3db-4b1e-8473-597edcc5b6d7`
- Applicability: Use only for a steel-can pack.
- Flow property / unit: Mass / kg
- Amount rule: measured steel food-can mass issued minus unused cans returned
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `eu-pef-2021-2279`

###### Wood-pallet tertiary packaging (`packaging_wood_pallet`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Wood pallet `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Applicability: Use only for non-returnable pallet consumption; model reusable pallet service separately.
- Flow property / unit: Mass / kg
- Amount rule: measured non-returnable wood-pallet mass attributable to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `eu-pef-2021-2279`

###### Packaging and storage low-voltage grid electricity (`packaging_grid_electricity_low_voltage`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Alternating-current electricity, below 1 kV, consumption mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Applicability: Use only for below-1-kV supply.
- Flow property / unit: Energy / kWh
- Amount rule: metered below-1-kV electricity allocated to packing and controlled storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_energy`
- Sources: `codex-cxc-52-2003`
- Range: Provisional packaging and storage electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg net finished product
  - Basis: broad screen pending storage temperature, duration, climate, voltage, and equipment evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging and storage medium-voltage grid electricity (`packaging_grid_electricity_medium_voltage`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Alternating-current electricity, 1–35 kV, consumption mix `3d76981f-964a-4865-b588-0e067a2a1163`
- Applicability: Use only for 1–35-kV supply.
- Flow property / unit: Energy / kWh
- Amount rule: metered 1–35-kV electricity allocated to packing and controlled storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_energy`
- Sources: `codex-cxc-52-2003`
- Range: Provisional packaging and storage electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg net finished product
  - Basis: broad screen pending storage temperature, duration, climate, voltage, and equipment evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference finished fish fillets (`reference_finished_fish_fillets`)

This is the sole reference product output and excludes packaging mass and non-product transport ice.

- Selected flow: Fish fillets, dried, salted or in brine, but not smoked `b41d734d-e255-404c-b6bb-b2c408f653c6`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net finished product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `eu-pef-2021-2279`
- Range: Reference-flow identity check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: normalized reference product output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-pef-2021-2279`

##### Waste flows

###### Off-spec finished fish fillets (`finishing_offspec_fish_fillets`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Off-spec finished fish fillets
- Flow property / unit: Mass / kg
- Amount rule: measured off-spec finished-fillet mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `codex-cxc-52-2003`; `eu-pef-2021-2279`

###### Drained product brine (`finishing_drained_product_brine`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Drained product brine
- Flow property / unit: Mass / kg
- Amount rule: measured product brine drained and not returned to the marketed product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `codex-cxc-52-2003`; `eu-pef-2021-2279`

###### Polyethylene packaging scrap (`finishing_polyethylene_packaging_scrap`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Polyethylene packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: measured polyethylene packaging scrap and rejected-film mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `codex-cxc-52-2003`; `eu-pef-2021-2279`

###### Corrugated-cardboard packaging waste (`finishing_corrugated_cardboard_waste`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass / kg
- Amount rule: measured corrugated-cardboard off-cut and rejected-packaging mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `codex-cxc-52-2003`; `eu-pef-2021-2279`

###### Broken or rejected glass jars (`finishing_broken_glass_jars`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Broken or rejected glass jars
- Flow property / unit: Mass / kg
- Amount rule: measured broken or rejected glass-jar mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `codex-cxc-52-2003`; `eu-pef-2021-2279`

###### Rejected steel food cans (`finishing_rejected_steel_food_cans`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Rejected steel food cans
- Flow property / unit: Mass / kg
- Amount rule: measured rejected steel food-can mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `codex-cxc-52-2003`; `eu-pef-2021-2279`

###### Rejected wood pallets (`finishing_rejected_wood_pallets`)

Record this atomic exchange separately when the stated applicability condition holds.

- Selected flow: Rejected wood pallets
- Flow property / unit: Mass / kg
- Amount rule: measured rejected non-returnable wood-pallet mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net finished reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_batch`
- Sources: `codex-cxc-52-2003`; `eu-pef-2021-2279`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multi-output foreground processes | First avoid allocation by subdividing independently metered receiving, preparation, curing, drying, packaging, storage, and residue-handling operations, or by expanding the system only when the substituted function is demonstrable and consistent with the study goal. | `eu-pef-2021-2279` |
| `allocation_waste_co_product_status` | fish trimmings, offal, recovered salt, and other outputs | Determine and document whether each non-reference output is waste, recyclable material, or co-product at the facility gate using its actual destination, legal status, and economic function; do not assign co-product credit to a waste flow without evidence. | `eu-pef-2021-2279` |
| `allocation_physical_then_economic` | unavoidable joint burdens | When subdivision or justified system expansion is not feasible, use a physical relation that reflects causality, such as measured mass, dry matter, or another documented process driver. If no defensible physical relation exists, use economic allocation based on contemporaneous net revenues and report the price period, currency, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_shared_utilities` | shared refrigeration, water, sanitation, drying, and storage | Allocate shared measured utilities using a documented physical driver such as meter sub-reading, equipment operating time and rated load, mass throughput, storage mass-time, or dryer batch energy; do not use revenue allocation for utilities when a physical driver is available. | `eu-pef-2021-2279` |
| `allocation_upstream_consistency` | incoming fish and background datasets | Preserve the allocation method embedded in upstream fish-production or capture datasets, disclose it and any proxy mismatch, and do not reallocate upstream burdens inside the foreground processor model. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_batch` | `receiving_cold_handling` | incoming, accepted, and rejected fish mass | weighbridge or calibrated scale records; receiving inspection; supplier and lot records | lot_id; species; origin; supplier; incoming form; temperature; gross_mass; glaze_or_free_liquid; accepted_mass; rejected_mass; disposition | reconcile receiving tickets, calibrated weights, and inspection records by lot | kg; deg C | every lot | representative continuous 12-month period or all lots in a shorter declared campaign | all facilities in the declared dataset | sum mass by lot and normalize accepted, rejected, and final output through batch genealogy | calibration records; receiving logs; supplier specification; rejection disposition; temperature record |
| `cp_receiving_energy` | `receiving_cold_handling` | receipt, thawing-control, ice, and cold-holding utilities | electricity meter; ice invoice or production log; equipment log | meter_start; meter_end; ice_mass; equipment_hours; rated_load; lots_served | use submeter data first, otherwise documented equipment-hour allocation | kWh; kg | each lot or daily meter interval | same period as production inventory | all receiving and cold-holding equipment in scope | allocate shared utilities by measured equipment time, mass-time, or another documented physical driver | meter identity; invoice; equipment log; allocation worksheet |
| `cp_preparation_batch` | `preparation_filleting` | accepted input and prepared fillet output | calibrated batch weights and production records | batch_id; input_mass; prepared_fillet_mass; species; operations_performed; start_time; end_time | weigh drained input and output at consistent defined states | kg | every batch | same period as production inventory | all preparation lines in scope | sum paired batch input and output; retain route-specific yields | calibration; batch sheet; operator sign-off; state-definition record |
| `cp_preparation_water_waste` | `preparation_filleting` | processing water, solid residues, and wastewater | water meter; waste scales; discharge meter; destination records | water_in; recirculated_water; wastewater_out; residue_type; residue_mass; destination; pollutant_measurements | meter water and wastewater and weigh residue containers; use a documented balance only for missing discharge meter | kg; m3 | daily or each batch | same period as production inventory | all preparation and sanitation operations attributable to the line | aggregate by stream and destination; avoid double counting recirculated water | meter records; scale calibration; waste transfer note; laboratory report |
| `cp_salting_batch` | `salting_curing` | fillets, salt, brine water, cured output, and product condition | batch recipe; calibrated scales; tank records; salinometer or laboratory records | batch_id; fillet_input; salt_added; water_added; brine_reused; brine_concentration; curing_time; temperature; cured_mass; retained_brine; moisture_or_salt_result | reconcile issued materials, measured tank additions, drained output, and product tests | kg; hours; deg C; concentration as declared | every batch | same period as production inventory | every salting or brining route in scope | calculate route-specific totals; report fresh and reused brine separately | recipe authorization; calibration; salinometer or laboratory record; time-temperature log |
| `cp_salting_energy_waste` | `salting_curing` | curing utilities, spent brine, purge, and discarded salt | electricity meter; equipment log; tank discharge and waste records | electricity; pump_hours; cooling_hours; spent_brine_mass_or_volume; purge; discarded_salt; destination | meter utilities and weigh or meter each discharged stream | kWh; kg; m3 | each batch or daily interval | same period as production inventory | all curing tanks, pumps, and cooling equipment in scope | allocate shared utilities physically and aggregate wastes by destination | meter identity; tank record; waste transfer note; discharge record |
| `cp_drying_batch` | `hygienic_drying` | dryer input, output, moisture, water activity, and calculated water removed | calibrated scales; moisture or water-activity test; dryer batch record | batch_id; input_mass; output_mass; inlet_moisture_basis; inlet_moisture; outlet_moisture_basis; outlet_moisture; water_activity; time; temperature; humidity; airflow | pair cooled, equilibrated mass measurements with identified laboratory or instrument methods | kg; percent or kg/kg; dimensionless; hours; deg C | every drying batch | same period as production inventory | every drying technology in scope | calculate water removed with `calc_drying_water_removed`; aggregate only compatible moisture bases | scale calibration; instrument calibration; laboratory method; dryer log |
| `cp_drying_energy` | `hygienic_drying` | electricity and fuel | electricity meter; fuel meter or invoice; dryer control log | electricity; fuel_quantity; fuel_unit; energy_factor; batch_id; shared_batches | use direct batch metering first; otherwise allocate from documented operating time and load | kWh; MJ; native fuel unit | every batch or meter interval | same period as production inventory | all dryers and ancillary equipment in scope | convert units explicitly and allocate shared energy by batch operating time and load | meter; invoice; fuel factor source; allocation worksheet |
| `cp_packaging_batch` | `finishing_packaging_storage` | processed input, retained brine, packaging, final product, and finishing waste | line batch record; calibrated scales; packaging issue record | lot_id; processed_input; retained_brine; packaging_by_material; net_product; reject_product; packaging_waste; units_packed | reconcile product and packaging issued, returned, packed, and rejected | kg; item count | every lot | same period as production inventory | all packaging formats and lines in scope | aggregate separately by packaging material and product format; normalize net edible product to 1 kg | calibration; packaging bill of materials; issue-return record; packed-unit weight check |
| `cp_packaging_energy` | `finishing_packaging_storage` | packaging-line and storage electricity | meter; equipment log; storage inventory | meter_start; meter_end; equipment_hours; storage_mass; storage_days; temperature_setpoint; lots_served | submeter directly or allocate shared energy by documented line time and storage mass-time | kWh; kg-day | daily or meter interval | same period as production inventory | all packaging and processor-gate storage equipment in scope | allocate packaging by operating time and storage by mass-time within temperature zone | meter identity; equipment log; storage record; allocation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground inventory | normalized amount = reporting-period amount divided by reporting-period net reference product mass | flow amount; net reference product mass | amount per 1 kg net finished product | `eu-pef-2021-2279` |
| `calc_receiving_acceptance` | receiving | accepted mass = received gross mass minus separately measured rejected mass, separated glaze or free liquid, and other excluded receipt components | gross mass; rejected mass; excluded free liquid or glaze | accepted fish material | `codex-cxc-52-2003` |
| `calc_brine_balance` | salting and curing | fresh brine inputs + reused brine inputs = retained brine in product + reused brine returned + spent brine and purge + measured or disclosed balance difference | salt; water; incoming reused brine; retained brine; returned brine; discharge | brine mass-balance reconciliation | `codex-cxc-52-2003` |
| `calc_drying_water_removed` | hygienic drying | water removed = inlet wet mass multiplied by inlet moisture fraction minus outlet wet mass multiplied by outlet moisture fraction, using the same declared moisture basis | inlet mass; inlet moisture; outlet mass; outlet moisture; moisture basis | kg water removed | `codex-cxc-52-2003` |
| `calc_shared_utility_allocation` | shared utilities | allocated utility = measured shared total multiplied by the lot physical driver divided by the sum of physical drivers for all lots served | shared total; lot driver; total drivers | utility amount attributable to the lot | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | product and raw-material identity | Preserve lot linkage from received fish through final packed product, including species or species group, origin, supplier, capture or aquaculture status, incoming state, processing route, and product disposition. | supplier specification; receiving record; batch genealogy; final lot code; `codex-cxc-52-2003` |
| `dq_measurement_control` | mass, water, energy, time, temperature, salinity, moisture, and water activity | Use calibrated or verified instruments appropriate to the measurement; retain calibration status, reading frequency, missing-data treatment, unit conversion, and the wet/dry/water-phase basis of analytical results. | calibration certificate; meter log; laboratory method; calculation worksheet; `codex-cxc-52-2003` |
| `dq_temporal_representativeness` | reporting period | Use a representative continuous 12-month period where feasible, or disclose a shorter campaign and seasonality; align numerator and denominator periods and explain shutdowns, atypical lots, and missing periods. | production calendar; meter coverage; batch count; representativeness assessment; `eu-pef-2021-2279` |
| `dq_completeness_balance` | material and utility inventory | Reconcile received fish, prepared and cured intermediates, final product, retained brine, residues, wastewater, salt, water, and major energy across compatible batch boundaries; investigate unexplained differences instead of forcing closure. | batch mass-balance report; brine balance; utility reconciliation; exception log |
| `dq_food_safety_control` | product-specific processing | Retain the applicable hazard analysis and monitored controls for raw-material suitability, parasites and histamine where relevant, time-temperature conditions, potable water, food-grade salt, brine concentration, hygienic drying, contamination prevention, packaging, and storage. | HACCP or equivalent plan; control-point logs; corrective actions; laboratory tests; `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `dq_background_proxies` | upstream datasets | Document provider, dataset version outside PCR UUID fields, geography, technology, time period, allocation method, and known proxy limitations for incoming fish, utilities, salt, water, packaging, treatment, and transport. | source register; proxy justification; data-quality rating; `eu-pef-2021-2279` |
| `dq_estimate_replacement` | provisional QA ranges | Treat every `reasoned_estimate` interval as a replaceable screening flag, not as a default foreground value or industry benchmark; review it against collected data and replace or approve it before publication. | review record; collected distribution; source update |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_flow` | reference product | Verify exactly one reference product output with UUID `b41d734d-e255-404c-b6bb-b2c408f653c6`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and normalized amount 1; packaging and non-product ice must not be included in that mass. | `eu-pef-2021-2279` |
| `validation_scope_exclusions` | product category identity | Fail category conformance when smoking, smoke flavouring, or smoke drying is used, or when the output is not an edible fish fillet preserved by drying, salting, or brining. | `codex-cxc-52-2003` |
| `validation_qualifiers` | dataset metadata | Verify all required qualifiers are present and consistent with process records, especially species, origin, incoming state, on-site filleting, salting route, drying state, final brine treatment, packaging, and storage conditions. | `codex-cxc-52-2003` |
| `validation_process_coverage` | process inventory | Verify both required processes and every applicable conditional process have inventory rows, batch records, utilities, outputs, wastes, and direct emissions or discharges; an unperformed conditional process must be explicitly declared not applicable. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `validation_mass_brine_balance` | batch calculations | Check compatible-state mass balances for receiving, preparation, curing, drying, and packing, plus a separate brine balance; flag missing streams, inconsistent moisture bases, double-counted reused brine, and unexplained differences. | `codex-cxc-52-2003` |
| `validation_food_safety_evidence` | process controls | Verify product-specific food-safety evidence supports incoming material, time-temperature control, potable water, food-grade salt, brine concentration when applicable, hygienic drying, packaging, and storage; do not infer compliance from a broad QA range. | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `validation_allocation` | multi-output and shared processes | Verify subdivision was attempted first, every non-reference output is classified by actual status and destination, the selected physical or economic allocation method is documented, shared utilities use a physical driver where available, and upstream allocation is disclosed. | `eu-pef-2021-2279` |
| `validation_data_quality` | foreground and background evidence | Verify instrument control, temporal and site coverage, numerator-denominator alignment, batch traceability, completeness reconciliation, background proxy metadata, and estimate-replacement review are present; report missing dimensions as validation findings. | `eu-pef-2021-2279` |
| `validation_uuid_review` | non-reference inventory flows | Before publication, require exact Tiangong identity review for every non-reference flow represented by a UUID; never substitute an approximate or semantically incorrect flow merely to fill an identity field. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground production dataset for finished dried, salted, or brined fish fillets not smoked |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review and publication |
| allowed_use | Product-specific process modelling when required qualifiers, foreground records, upstream links, allocation, food-safety control evidence, and data-quality disclosures are present |
| excluded_use | Smoked or smoke-flavoured fish; whole or minced fish; fish livers or roes; frozen-only fillets; substitution for capture or aquaculture production; use of provisional reasoned estimates as verified industry averages |
| required_metadata | canonical PCR id; reference-flow UUID and unit support; species and origin; raw-material state; salting and drying route; product moisture or water-activity control; retained-brine treatment; packaging; facility geography; reporting period; storage conditions; process coverage; allocation method; upstream dataset identities |
| required_quality_disclosure | measurement and calibration coverage; batch and temporal completeness; mass and brine reconciliation; HACCP or equivalent control evidence; proxy geography, technology, age, and allocation; cut-offs; missing UUIDs; provisional estimates; uncertainty and known limitations |
| update_trigger | Change in species mix, source fishery or aquaculture system, raw-material state, filleting yield, salting or brining technology, drying technology or fuel, product moisture specification, packaging, storage regime, co-product destination, allocation, facility geography, or evidence that materially changes the inventory |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxc-52-2003` | Official guidance (`official_guidance`) | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://www.fao.org/input/download/standards/10273/CXP_052e.pdf (official text accessed 2026-08-11) | Product and process scope; definitions of fillets, brining, dry-salting, wet-salting, salting, and drying; receiving, preparation, curing, water and salt, time-temperature, hygienic drying, packaging, storage, HACCP, and quality records |
| `codex-cxs-190-1995` | Standard (`standard`) | Codex Alimentarius, CXS 190-1995, Standard for Quick Frozen Fish Fillets (official standard identifier; applicability limited to incoming quick-frozen fillets) | Incoming frozen-fillet identity, condition, handling, and quality controls when the raw-material route uses quick-frozen fillets |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (official text accessed 2026-08-11) | Reference-flow normalization, foreground and background boundary linkage, allocation hierarchy, shared-process allocation, cut-off disclosure, data quality, proxy documentation, and reporting |
