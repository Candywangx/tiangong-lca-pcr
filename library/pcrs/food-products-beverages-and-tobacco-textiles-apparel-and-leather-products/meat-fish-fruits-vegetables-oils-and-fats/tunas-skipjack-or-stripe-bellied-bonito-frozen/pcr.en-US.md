---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.tunas-skipjack-or-stripe-bellied-bonito-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Tunas, skipjack or stripe-bellied bonito, frozen

## 1. Scope and Applicability

This PCR covers food-grade tunas, skipjack, or stripe-bellied bonito supplied frozen in whole, headed, gutted, dressed, or another declared non-fillet presentation at the freezing or processing facility gate. It supports wild-caught and aquaculture routes only when species, origin, production system, starting condition, presentation, freezing route, and linked upstream datasets are declared.

The foreground boundary begins when accepted fish enters the declared freezing and preparation system. It includes receipt and grading; bleeding, gutting, heading, dressing, and washing when performed; freezing; optional glazing; packing; factory or vessel frozen storage; and dispatch preparation to the declared gate. Harvest or aquaculture production and inbound transport are linked upstream datasets unless their activities are explicitly included in the foreground. Frozen fillets, frozen fish meat whether or not minced, livers and roes, canned or otherwise preserved products, cooked or ready-to-eat products, post-gate distribution, retail, consumer preparation, and end-of-life are excluded.

For at-sea freezing, the foreground starting point and the division between catching and onboard preparation or freezing shall be declared so vessel fuel, ice, refrigeration, and losses are neither omitted nor double counted. Codex CXS 190-1995 is not a product-conformity standard for this non-fillet category; its quick-freezing, glazing-water, and net-content provisions are supplementary only when those practices are explicitly claimed.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.tunas-skipjack-or-stripe-bellied-bonito-frozen |
| classification_refs | CPC 3.0: 21215, Tunas, skipjack or stripe-bellied bonito, frozen (exact mapping context) |
| covered_products | Food-grade frozen tunas, skipjack, or stripe-bellied bonito in a declared whole, headed, gutted, dressed, or other non-fillet presentation |
| excluded_products | Live, fresh, or chilled fish; frozen fillets; frozen fish meat whether or not minced; fish livers and roes; canned, salted, smoked, cooked, ready-to-eat, or otherwise preserved products |
| representative_product | Packed frozen tuna, skipjack, or stripe-bellied bonito in a declared non-fillet presentation at the facility gate |
| production_route | Accepted fish → grading and optional bleeding/gutting/heading/dressing/washing → freezing → optional glazing → packing → frozen storage → declared facility gate |
| market_state | Frozen, with species, presentation, net fish mass, glazing status, freezing endpoint, storage regime, and gate condition declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide food-grade frozen tuna, skipjack, or stripe-bellied bonito in the declared non-fillet presentation |
| How much | 1 kg net mass of target frozen fish, excluding glaze, free ice, and packaging |
| How well | Product meets the declared species, origin, presentation, freezing, cold-chain, net-content, and applicable food-safety specifications |
| How long or cycle | One production lot through the included preparation, freezing, packing, and declared frozen-storage period to the facility gate |
| reference_flow_link | rf_frozen_tuna_skipjack_bonito |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net target product mass |
| Reference product flow | Tunas, skipjack or stripe-bellied bonito, frozen `e51735cd-08ba-4052-bb11-0e5d936b87f2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and scientific or accepted market name; wild-caught or aquaculture origin; catch area or farm origin; upstream fish dataset; whole or dressed presentation and retained parts; at-sea or land-based route; frozen or quick-frozen claim; freezing technology and endpoint; glazing status and glaze mass; storage temperature and duration; processing location; net mass excluding glaze, free ice, and packaging |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize inventory to exactly 1 kg net target frozen fish mass; exclude glaze, free ice, and packaging and declare which fish parts remain in the marketed presentation. |
| `glaze_mass_separation` | Glazed product | Mass | kg | Measure gross frozen mass and glaze mass separately by a documented deglazing or equivalent verified method; do not count glaze as target fish mass. |
| `lot_mass_balance` | Fish, retained water or ice, co-products, residues, and wastewater solids | Mass | kg | Use calibrated measurements on a consistent wet-mass basis and reconcile accepted inputs with product, co-products, waste, retained material, and stock change for each aggregation period. |
| `energy_conversion` | Electricity and fuels | Energy | kWh or MJ | Preserve metered units and documented conversion factors; report electricity in kWh and declare the heating-value basis before converting fuels to MJ. |
| `temperature_record` | Freezing and frozen storage | Temperature | °C | Record calibrated product thermal-centre endpoint and storage temperatures. When a quick-frozen claim is made, verify -18 °C or colder at the thermal centre after stabilization; otherwise apply and disclose the applicable frozen-product specification. |
| `packaging_mass` | Primary, secondary, and tertiary packaging | Mass | kg | Record packaging by material and normalize issued mass minus documented returns to the net reference product; report packaging scrap separately. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted tuna, skipjack, or stripe-bellied bonito entering the declared preparation and freezing system, with species, origin, production system, preservation state, lot mass, and upstream boundary recorded |
| starting_condition_role | Upstream product input to the foreground frozen-fish production system |
| product_classification_scope | Frozen non-fillet tuna, skipjack, or stripe-bellied bonito represented by CPC 3.0 code 21215 as classification context; PCR identity remains classification-independent |
| recursive_input_rule | If already-frozen fish in this same category enters repacking, glazing, or re-freezing, record it once as a linked upstream product dataset and model only additional foreground operations; do not recursively recreate its upstream freezing system |
| upstream_dataset_requirement | Species-, origin-, production-system-, and route-specific datasets for harvest or aquaculture and inbound transport are required where available; disclose proxy geography, technology, time, and boundary limitations |
| disclosure | Declare species, origin, production system, presentation, starting condition, at-sea or land-based route, upstream/foreground division, preparation steps, freezing and glazing technology, storage period, energy supply, refrigerant, co-product handling, allocation, and excluded downstream stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_category_scope` | Product category | Include only frozen tuna, skipjack, or stripe-bellied bonito in a declared non-fillet presentation; exclude frozen fillets, fish meat, livers, and roes from this PCR. | `unsd-cpc-ver-3-0` |
| `boundary_foreground_gate` | Foreground processing | Include all material and energy flows from the declared accepted-fish starting point through required receipt, applicable preparation, freezing, optional glazing, packing, frozen storage, and dispatch preparation to the declared gate. | `codex-cxc-52-2003` |
| `boundary_upstream_links` | Fish and purchased inputs | Link upstream datasets for harvest or aquaculture, inbound transport, water, ice, energy carriers, packaging, and other purchased inputs; do not omit those burdens from a cradle-to-gate result. | `eu-pef-2021-2279` |
| `boundary_at_sea_no_double_count` | At-sea route | Declare whether catching-vessel operations, onboard ice, preparation, refrigeration, and freezing sit in the upstream fish dataset or foreground; include each activity once. | `codex-cxc-52-2003`; `eu-pef-2021-2279` |
| `boundary_cold_chain` | Freezing and included storage | Include electricity or fuel, refrigerant losses, water or ice, and product losses associated with freezing and the declared pre-gate frozen-storage period. | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `boundary_waste_treatment` | Residues, wastewater, and packaging waste | Include on-site treatment and link off-site transport and treatment datasets for wastes crossing the boundary; identify beneficially used outputs separately as co-products. | `eu-pef-2021-2279` |
| `boundary_downstream_exclusion` | Downstream stages | Exclude post-gate distribution, retail, thawing, consumer preparation, consumption, and end-of-life unless the study explicitly expands the system and discloses the added stages. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receive_prepare` | Receipt, grading, and product preparation | required | Receipt and grading are always included; bleeding, gutting, heading, dressing, and washing are included when performed within the declared boundary | Foreground preparation | kg prepared fish entering freezing |
| `freeze_glaze` | Freezing and optional glazing | required | Freezing is always included; glazing applies only when used | Foreground preservation | kg net frozen fish leaving freezing, with glaze tracked separately |
| `pack_store` | Packing and pre-gate frozen storage | required | Always included through the declared gate and storage period | Foreground packing and cold storage | 1 kg net target frozen fish at the declared gate |

### Process: Receipt, grading, and product preparation (`receive_prepare`)

#### Inputs

##### Product flows

###### Accepted tuna, skipjack, or stripe-bellied bonito (`accepted_fish_input`)

Record accepted fish by species, origin, production system, preservation state, presentation, lot, and linked upstream dataset.

- Selected flow: Species- and origin-specific accepted tuna, skipjack, or stripe-bellied bonito (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured accepted lot mass entering the foreground preparation system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net target frozen fish at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `unsd-cpc-ver-3-0`; `codex-cxc-52-2003`
- Range: Provisional accepted-fish input QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 3
  - Unit: kg/kg net target frozen fish
  - Basis: accepted fish input per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water (`preparation_water`)

Record potable water or clean seawater supplied for food-contact washing and preparation when it crosses the foreground boundary.

- Selected flow: Food-contact preparation water (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: metered supply or documented tank balance assigned to preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_ice_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation-water QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg prepared fish
  - Basis: preparation water supplied per prepared fish output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation ice (`preparation_ice`)

Record food-contact ice used during receipt or preparation when included in this process; do not count ice as fish mass.

- Selected flow: Food-contact ice (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured issued ice minus documented recovered unused ice
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted fish input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_ice_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation-ice QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg accepted fish
  - Basis: ice supplied per accepted fish input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`preparation_electricity`)

Record electricity for grading, cutting, washing, conveyors, pumps, and preparation-area refrigeration assigned to this process.

- Selected flow: Electricity, facility supply mix (UUID pending exact Tiangong review)
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or documented equipment load and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation-electricity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kWh/kg prepared fish
  - Basis: preparation electricity per prepared fish output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed; water, ice, and electricity are product inputs.

#### Outputs

##### Product flows

###### Prepared fish entering freezing (`prepared_fish_output`)

Measure the declared whole or dressed fish presentation transferred to freezing after any included preparation.

- Selected flow: Prepared tuna, skipjack, or stripe-bellied bonito, not yet frozen (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass transferred to freezing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted fish input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `codex-cxc-52-2003`
- Range: Provisional prepared-product yield QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.3
  - Upper: 1
  - Unit: kg/kg accepted fish
  - Basis: prepared fish wet mass per accepted fish input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Marketable fish co-products (`fish_coproducts`)

Record separately measured edible or marketable parts leaving the process as products rather than waste, with destination and function declared.

- Selected flow: Fish co-product by declared presentation and use (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured co-product wet mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted fish input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `eu-pef-2021-2279`
- Range: Provisional co-product mass QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.7
  - Unit: kg/kg accepted fish
  - Basis: marketable co-product wet mass per accepted fish input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Fish residues and rejected material (`fish_residues`)

Record viscera, heads, damaged material, rejects, and other fish residues as waste only when they do not leave as co-products.

- Selected flow: Fish processing residue or waste by destination (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured residue and reject wet mass leaving preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted fish input
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `codex-cxc-52-2003`
- Range: Provisional fish-residue QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.7
  - Unit: kg/kg accepted fish
  - Basis: residue and reject wet mass per accepted fish input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving receipt and preparation, with separately measured solids kept distinct from fish residues.

- Selected flow: Fish-processing wastewater (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured discharge volume converted using measured or documented density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional preparation-wastewater QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg prepared fish
  - Basis: wastewater discharged per prepared fish output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No default elementary output is prescribed; report measured direct releases separately when present.

### Process: Freezing and optional glazing (`freeze_glaze`)

#### Inputs

##### Product flows

###### Prepared fish transferred to freezing (`prepared_fish_input`)

Carry forward the measured prepared fish from `receive_prepare` without duplicating its upstream burden.

- Selected flow: Prepared tuna, skipjack, or stripe-bellied bonito, not yet frozen (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: equals measured `prepared_fish_output` transferred to freezing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net target frozen fish at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `codex-cxc-52-2003`
- Range: Provisional prepared-fish input QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg/kg net target frozen fish
  - Basis: prepared fish input per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Freezing electricity (`freezing_electricity`)

Record electricity for freezers, pumps, fans, conveyors, defrosting, and refrigeration assigned to the freezing process.

- Selected flow: Electricity, facility or vessel supply mix (UUID pending exact Tiangong review)
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or documented equipment load and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net target frozen fish at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `codex-cxc-52-2003`; `codex-cxs-190-1995`
- Range: Provisional freezing-electricity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10
  - Unit: kWh/kg net target frozen fish
  - Basis: freezing electricity per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Glazing water (`glazing_water`)

When glazing is used, record potable water or clean seawater applied and retain measured glaze separately from net fish mass.

- Selected flow: Food-contact glazing water (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured glazing-water supply, with retained glaze and rejected water separately reconciled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net target frozen fish at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_ice_records`
- Sources: `codex-cxs-190-1995`
- Range: Provisional retained-glaze QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net target frozen fish
  - Basis: retained glaze per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed; energy carriers and water are product inputs.

#### Outputs

##### Product flows

###### Frozen fish transferred to packing (`frozen_fish_intermediate`)

Measure frozen fish leaving the freezer and track glaze separately so the intermediate can be reconciled to net fish mass.

- Selected flow: Frozen tuna, skipjack, or stripe-bellied bonito intermediate (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured gross frozen mass minus separately measured glaze where present
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared fish entering freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `codex-cxc-52-2003`; `codex-cxs-190-1995`
- Range: Provisional freezing yield QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1
  - Unit: kg net frozen fish/kg prepared fish
  - Basis: net frozen fish output per prepared fish input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Freezing rejects and product loss (`freezing_loss`)

Record rejected or lost fish, drip, and other separately recoverable material from freezing by destination.

- Selected flow: Freezing reject or fish-product loss by destination (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected and lost wet mass leaving freezing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared fish entering freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `codex-cxc-52-2003`
- Range: Provisional freezing-loss QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg prepared fish
  - Basis: freezing rejects and loss per prepared fish input
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant released during freezing (`freezing_refrigerant_loss`)

Calculate chemical-specific refrigerant loss from equipment serving the freezing process.

- Selected flow: Refrigerant substance, chemical-specific emission to air (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: opening charge plus additions minus recovered, transferred, and closing charge, allocated to freezing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net target frozen fish at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional freezing-refrigerant-loss QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg net target frozen fish
  - Basis: chemical-specific refrigerant loss per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Packing and pre-gate frozen storage (`pack_store`)

#### Inputs

##### Product flows

###### Frozen fish transferred to packing (`frozen_fish_input`)

Carry forward the measured frozen fish intermediate without duplicating preparation or freezing burdens.

- Selected flow: Frozen tuna, skipjack, or stripe-bellied bonito intermediate (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: equals measured `frozen_fish_intermediate` transferred to packing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net target frozen fish at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `codex-cxc-52-2003`
- Range: Provisional frozen-fish transfer QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.2
  - Unit: kg/kg net target frozen fish
  - Basis: frozen fish transferred to packing per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`packaging_input`)

Record primary, secondary, and tertiary packaging by material, including verified allocation of reusable packaging.

- Selected flow: Packaging material, material-specific (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: issued mass minus documented returns, with reusable items divided by verified use cycles
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net target frozen fish at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional packaging-input QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net target frozen fish
  - Basis: packaging input per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Frozen-storage electricity (`storage_electricity`)

Record electricity for packing, cold rooms, fans, pumps, defrosting, and dispatch preparation during the declared pre-gate storage period.

- Selected flow: Electricity, facility or vessel supply mix (UUID pending exact Tiangong review)
- Flow property / unit: Energy / kWh
- Amount rule: submetered consumption or allocated use based on measured storage time, occupied capacity, and equipment operation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net target frozen fish for the declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional frozen-storage electricity QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh/kg net target frozen fish
  - Basis: electricity for the declared pre-gate storage period per reference flow
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No waste input is prescribed for this process.

##### Elementary flows

No elementary input is prescribed; electricity and packaging are product inputs.

#### Outputs

##### Product flows

###### Reference frozen tuna, skipjack, or bonito (`reference_product_output`)

Report the target product at exactly 1 kg net fish mass, excluding glaze, free ice, and packaging.

- Selected flow: Tunas, skipjack or stripe-bellied bonito, frozen `e51735cd-08ba-4052-bb11-0e5d936b87f2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net target frozen fish mass at the declared gate
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-ver-3-0`
- Range: Reference-flow identity range
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: net target frozen fish mass excluding glaze, free ice, and packaging
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Packing rejects and product loss (`packed_product_loss`)

Record damaged packs, rejected product, dehydration loss, and other measurable product loss by destination.

- Selected flow: Frozen fish product loss by destination (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected product and stock loss during packing and included storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net target frozen fish at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_lot_mass_identity`
- Sources: `codex-cxc-52-2003`
- Range: Provisional packed-product-loss QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net target frozen fish
  - Basis: packing and storage product loss per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging waste (`packaging_waste`)

Record packaging scrap and damaged packaging by material and destination without netting them from purchased inputs.

- Selected flow: Packaging waste, material-specific (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: measured packaging waste leaving packing and storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net target frozen fish at the declared gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional packaging-waste QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg net target frozen fish
  - Basis: packaging waste per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant released during frozen storage (`storage_refrigerant_loss`)

Calculate chemical-specific refrigerant loss from equipment serving packing and included frozen storage.

- Selected flow: Refrigerant substance, chemical-specific emission to air (UUID pending exact Tiangong review)
- Flow property / unit: Mass / kg
- Amount rule: opening charge plus additions minus recovered, transferred, and closing charge, allocated to packing and storage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net target frozen fish for the declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional storage-refrigerant-loss QA range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg net target frozen fish
  - Basis: chemical-specific refrigerant loss per reference flow and declared storage period
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Shared preparation, freezing, packing, vessel, and storage operations | Avoid allocation where possible by submetering and subdividing lots, equipment, vessel activities, and storage periods so inputs and outputs are directly assigned. | `eu-pef-2021-2279` |
| `allocation_system_expansion` | Additional co-product functions | Where subdivision is not possible, evaluate system expansion when the substituted function and datasets can be represented consistently; report the expanded-system result transparently. | `eu-pef-2021-2279` |
| `allocation_physical_relationship` | Unresolved multifunctional processes | If subdivision or system expansion is not practicable, use a documented causal physical relationship. Wet mass at the separation point may be used only when no more relevant physical driver is justified, with sensitivity to another functionally relevant property. | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | Co-products lacking a defensible physical relationship | Use economic allocation only as a fallback; use representative net values at the same market boundary and disclose price source, period, currency, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_waste_no_credit` | Residues, wastewater, packaging waste, and rejected product | Do not allocate product burden to material classified and managed as waste. Include waste-management burdens and disclose any separately modelled avoided-product credit. | `eu-pef-2021-2279` |
| `allocation_mass_reconciliation` | Fish product, co-products, and wastes | Preserve the unallocated wet-mass balance before allocation and report burden-bearing allocation factors that sum to one. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_identity` | `receive_prepare`; `freeze_glaze`; `pack_store` | Fish inputs, intermediates, product, co-products, residues, and losses | Weighing, batch, traceability, and product-specification records | lot_id; species; origin; production_system; presentation; gross_mass; tare_mass; glaze_mass; net_fish_mass; intermediate_mass; co_product_mass; waste_mass; destination | Calibrated scales linked to lot genealogy and transfers | kg | Each lot and transfer | At least 12 consecutive representative months or the full seasonal campaign | Every included facility, vessel, line, and product route | Sum valid masses by lot and process; reconcile transfers and stock change; normalize to accepted net reference product | Calibration certificates; lot traceability; product specification; mass-reconciliation log |
| `cp_water_ice_records` | `receive_prepare`; `freeze_glaze` | Preparation water, ice, glazing water, and retained glaze | Meter, tank, issue, batch, and quality records | meter_id; opening_reading; closing_reading; issued_mass; returned_mass; water_source; food_contact_quality; glaze_mass; lot_id | Submeter or tank/issue balance linked to the operating period and lot | kg or m3 | Daily and each relevant lot | Same representative period as production | Each included water and ice system | Convert volume using measured or documented density; subtract documented non-process use; report retained glaze separately | Meter checks; water-quality evidence; issue and batch records; deglazing or equivalent verification |
| `cp_energy_records` | `receive_prepare`; `freeze_glaze`; `pack_store` | Electricity and direct fuels | Meter, invoice, fuel, equipment-runtime, and storage-occupancy records | meter_id; readings; fuel_quantity; unit; heating_value_basis; equipment_power; operating_hours; storage_days; occupied_capacity; allocation_key | Submeter first; otherwise reconcile invoices or fuel records with equipment operation and physical allocation drivers | kWh, MJ, or purchased fuel unit | Monthly plus batch or shift submetering where available | At least 12 consecutive representative months or full seasonal campaign | Each included facility, vessel, freezer, and cold room | Assign direct meters; allocate residual shared use by documented physical drivers; normalize to process output | Calibration; invoices; fuel logs; runtime records; allocation worksheet; energy balance |
| `cp_wastewater_records` | `receive_prepare` | Wastewater and entrained solids | Effluent meter, tank, sampling, and treatment records | discharge_volume; density; solids_mass; treatment_route; sampling_time; process_assignment | Meter or tank balance with representative sampling and treatment-route records | kg or m3 | Daily or per discharge event | Same representative period as production | Each included discharge point | Convert volume to mass; retain separately measured solids as distinct flows; normalize to prepared output | Meter checks; laboratory reports; discharge and treatment manifests |
| `cp_refrigerant_records` | `freeze_glaze`; `pack_store` | Chemical-specific refrigerant loss | Equipment charge, purchase, service, recovery, and transfer records | refrigerant_id; opening_charge; additions; recovered; transferred; closing_charge; equipment_group; service_date | Complete inventory balance by refrigerant and equipment group | kg | Each service event and period close | At least one complete balance covering the production period | Each included freezer and cold-storage equipment group | Loss = opening + additions - recovered - transferred - closing; allocate by equipment service or cooling-load driver | Service invoices; cylinder logs; recovery records; signed inventory balance |
| `cp_packaging_records` | `pack_store` | Packaging input and waste | Purchase, issue, bill-of-material, return, reuse, and scrap records | material_id; material_type; issued_mass; returned_mass; scrap_mass; packs_produced; reuse_cycles | Mass reconciliation by material and product format | kg | Each packaging run, aggregated monthly | Same representative period as production | Each included packing line and format | Net input = issued - returned; report scrap separately; allocate reusable packaging by verified use cycles | Supplier specification; stock reconciliation; reuse evidence; scrap tickets |
| `cp_temperature_food_safety` | `receive_prepare`; `freeze_glaze`; `pack_store` | Time-temperature control, freezing endpoint, storage, and scombrotoxin controls | Calibrated probe, logger, hazard-plan, test, and corrective-action records | lot_id; receipt_time; preparation_time; thermal_centre_temperature; storage_temperature; timestamp; excursion_duration; criterion; test_result; corrective_action | Validated product-core measurement and continuous or justified interval logging linked to the food-safety plan | °C, time, and declared test unit | Each lot at critical steps; continuous or justified interval during storage | Entire included production and storage period | Each included facility, vessel, freezer, cold room, and lot | Retain lot minima/maxima, exposure duration, applicable criteria, test results, and disposition; do not average away excursions | Calibration; logger records; hazard analysis; verification tests; corrective-action and lot-disposition records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All inventory rows | Normalized amount = valid foreground amount / net target frozen fish mass at the declared gate | Valid flow amount; `net_fish_mass` excluding glaze, free ice, and packaging | Amount per 1 kg reference flow | `mass-balance-identity` |
| `calc_net_fish_mass` | Glazed or iced products | Net target fish mass = gross frozen product mass - verified glaze mass - free ice - packaging tare | gross_mass; glaze_mass; free_ice_mass; packaging_tare | `net_fish_mass` | `codex-cxs-190-1995`; `mass-balance-identity` |
| `calc_process_mass_balance` | Preparation, freezing, and packing | Difference = accepted material inputs + opening stock - product - co-products - waste - discharged material - closing stock; investigate rather than force-balance material differences | Lot and stock masses; retained water or ice; product; co-products; waste; wastewater solids | Reconciled mass balance and unexplained difference | `mass-balance-identity` |
| `calc_shared_energy` | Shared equipment and storage | Assigned energy = measured shared energy × documented physical allocation driver for the product / total driver | meter or fuel quantity; runtime, cooling load, throughput, or occupied-capacity driver | Assigned kWh, MJ, or fuel quantity | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | Freezing and storage equipment | Refrigerant loss = opening charge + additions - recovered - transferred - closing charge | Chemical-specific equipment inventory | kg refrigerant emitted and allocated to the process | `mass-balance-identity` |
| `calc_physical_allocation` | Joint products | Allocation factor_i = selected causal physical quantity_i / sum of that quantity for all burden-bearing products | Measured quantities at the separation point; selected physical property | Product-specific factors summing to one | `eu-pef-2021-2279` |
| `calc_economic_allocation` | Economic fallback | Allocation factor_i = representative net value_i / sum of net values for burden-bearing co-products at the same boundary | Representative prices; measured co-product quantities | Economic factors summing to one | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Fish inputs and finished lots | Preserve species, accepted market or scientific name, wild-caught or aquaculture system, origin, supplier or vessel, lot links, received state, non-fillet presentation, and product destination. | Supplier or landing records, catch or farm records, lot genealogy, product specification and label |
| `dq_temporal_representativeness` | All foreground flows | Cover at least 12 consecutive representative months or the complete seasonal campaign; disclose shutdowns, missing periods, and extrapolation. | Dated meter, batch, invoice, service, and production records |
| `dq_site_route_coverage` | Multi-site, multi-vessel, or multi-route datasets | Include every site, vessel, and route represented or report production-weighted coverage and exclusions; do not silently extrapolate one route to another. | Site and vessel list, route records, production totals, coverage calculation |
| `dq_measurement_control` | Mass, water, ice, energy, refrigerant, and temperature | Use calibrated or verified instruments, retain raw units and conversions, and document estimation when direct measurement is unavailable. | Calibration, meter checks, conversion worksheet, estimation rationale |
| `dq_mass_completeness` | Fish, co-products, residues, glaze, packaging, and stock | Reconcile major inputs, outputs, and stock changes; investigate unexplained differences and preserve product and waste destinations. | Process mass balance, stock reconciliation, waste and sales records |
| `dq_cold_chain` | Frozen product | Retain the freezing endpoint, frozen-storage temperature and duration, excursions, actions, and applicable product specification for each included route. | Validated freezing study, probe and logger records, excursion and corrective-action records |
| `dq_food_safety_scombrotoxin` | Tuna, skipjack, and bonito lots | Apply a documented food-safety plan for time-temperature abuse and scombrotoxin or histamine risk, using applicable regulatory or customer criteria; retain tests, disposition, and corrective actions without substituting this PCR for food law. | Hazard analysis, monitoring records, laboratory results, lot disposition, corrective actions |
| `dq_upstream_dataset_fit` | Fish and purchased inputs | Document geography, technology, time, production system, and boundary for each upstream dataset; disclose proxy limitations and any onboard activity already represented. | Dataset metadata, boundary comparison, and data-quality assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require exactly 1 kg net target product linked to flow `e51735cd-08ba-4052-bb11-0e5d936b87f2`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. | `mass-balance-identity` |
| `validate_category_scope` | Product identity | Require tuna, skipjack, or stripe-bellied bonito in a declared frozen non-fillet presentation; reject records whose product is a fillet, fish meat, liver, roe, fresh or chilled fish, or another preserved form. | `unsd-cpc-ver-3-0` |
| `validate_required_qualifiers` | Dataset metadata | Fail completeness when species, origin, production system, non-fillet presentation, starting condition, route, upstream boundary, freezing endpoint, glazing status, storage regime, processing location, or net-mass basis is missing. | `unsd-cpc-ver-3-0`; `codex-cxc-52-2003` |
| `validate_process_coverage` | Foreground inventory | Require receipt and grading, every performed preparation step, freezing, applicable glazing, packing, pre-gate frozen storage, energy, water or ice where used, refrigerant, co-product and waste handling, or an explicit justified zero/not-applicable declaration. | `codex-cxc-52-2003` |
| `validate_cold_chain` | Each finished lot | Require the declared freezing endpoint, storage temperature and duration, excursion assessment, and corrective action. If quick-frozen status is claimed, require evidence of -18 °C or colder at the thermal centre after stabilization. | `codex-cxc-52-2003`; `codex-cxs-190-1995` |
| `validate_glaze_net_mass` | Glazed product | Require separately measured glaze and confirm that reference mass excludes glaze, free ice, and packaging; do not infer whole-product conformity with CXS 190-1995. | `codex-cxs-190-1995` |
| `validate_mass_balance` | Each aggregation period | Require accepted inputs and stock changes to reconcile with net product, co-products, residues, wastewater solids, glaze or retained water, and losses; report unexplained differences and action. | `mass-balance-identity` |
| `validate_food_safety_controls` | Tuna, skipjack, and bonito lots | Require evidence of applicable hygiene, time-temperature, traceability, and scombrotoxin or histamine controls and lot disposition; flag missing or unassessed criteria. | `codex-cxc-52-2003` |
| `validate_allocation` | Multifunctional processes | Require a documented subdivision or system-expansion assessment, justified fallback method, factors summing to one, and sensitivity disclosure where allocation may materially affect results. | `eu-pef-2021-2279` |
| `validate_temporal_route_coverage` | Foreground dataset | Require declared representative period and site, vessel, and route coverage, with exclusions, missing periods, and extrapolation disclosed. | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | Candidate QA ranges | Treat every `reasoned_estimate` range only as a screening flag; do not substitute it for foreground records, and replace or explicitly review it before publication-critical use. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for frozen tuna, skipjack, or stripe-bellied bonito in a declared non-fillet presentation, normalized to 1 kg net product at the declared gate |
| downstream_use | May serve as a `secondary_dataset` or `background_dataset` when species, origin, production system, presentation, route, upstream boundary, geography, technology, storage period, allocation, and data quality fit the study |
| allowed_use | Cradle-to-gate or downstream product systems requiring a transparent frozen non-fillet tuna, skipjack, or bonito input and preserving declared upstream datasets and qualifiers |
| excluded_use | Direct representation of fillets, minced or other fish meat, livers, roes, fresh or chilled fish, canned or cooked products, retail or consumer stages, or a different species, origin, presentation, or freezing route without representativeness assessment |
| required_metadata | PCR id and version; product flow UUID; species; production system; catch area or farm origin; upstream datasets and onboard boundary; presentation; starting condition; freezing technology and endpoint; glazing and net-mass method; processing site or vessel; storage temperature and duration; electricity and fuel supply; refrigerant; co-product destinations; allocation; reference period |
| required_quality_disclosure | Site, vessel, route, and temporal coverage; mass-balance difference; meter and scale quality; cold-chain and food-safety evidence; upstream proxies; provisional estimates; allocation sensitivity; excluded stages; applicability limits of CXS 190-1995 |
| update_trigger | Material change in species, origin, production system, presentation, onboard boundary, preparation yield, freezing or glazing technology, packaging, energy supply, refrigerant, storage period, co-product market, allocation basis, food-safety requirement, site or vessel coverage, or representative data period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-ver-3-0` | `official_guidance` | United Nations Statistics Division. Central Product Classification (CPC), Version 3.0, explanatory notes, subclass 21215. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Category identity and exclusion of frozen fillets, fish meat, livers, and roes |
| `codex-cxc-52-2003` | `official_guidance` | Codex Alimentarius Commission. CXC 52-2003, Code of Practice for Fish and Fishery Products, 2019 edition. https://workspace.fao.org/sites/codex/Standards/CXC%2052-2003/CXC_052e.pdf (retrieved 2026-08-11) | Fish processing, hygiene, time-temperature control, traceability, cold-chain, waste, and scombrotoxin-risk data requirements |
| `codex-cxs-190-1995` | `standard` | Codex Alimentarius Commission. CXS 190-1995, Standard for Quick-Frozen Fish Fillets, amended 2024 and redesigned 2026. https://openknowledge.fao.org/handle/20.500.14283/ce0070en (retrieved 2026-08-11) | Supplementary quick-freezing endpoint, glazing-water, deep-frozen handling, and net-content concepts only when explicitly applicable; not product conformity for CPC 21215 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission. Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods. CELEX 32021H2279. https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-11) | Life-cycle boundary completeness; upstream data; multifunctionality hierarchy; waste and allocation disclosure |
| `mass-balance-identity` | `method_factor` | Conservation-of-mass identity applied to measured foreground inputs, outputs, and stock changes. | Reference normalization, net-mass reconciliation, process mass balance, refrigerant inventory balance, and allocation-factor checks |
