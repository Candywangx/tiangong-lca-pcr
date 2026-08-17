---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.artificial-staple-fibres-carded-combed-or-otherwise-processed-for-spinning
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Artificial staple fibres, carded, combed or otherwise processed for spinning

## 1. Scope and Applicability

This PCR applies to the factory-gate preparation of artificial staple fibres for spinning when the sold intermediate is carded, combed, or otherwise mechanically prepared but is not yet yarn. For this PCR, artificial fibres are non-synthetic man-made fibres based on naturally occurring organic polymers or their derivatives, including viscose, modal, lyocell, cupro, acetate, triacetate, alginate, and regenerated protein fibres when supplied as staple fibre. The declared dataset shall identify the actual fibre family and shall not substitute a synthetic fibre route.

The foreground boundary begins with receipt of artificial staple fibre in the physical state entering the preparation site and ends with packaged prepared fibre, sliver, lap, roving, or another explicitly declared spinning-preparation form at the factory gate. Fibre manufacture, dissolving-pulp production, polymer preparation, staple cutting performed by the fibre producer, inbound transport, yarn spinning, fabric manufacture, wet dyeing, use, and end-of-life are outside the foreground boundary unless a study deliberately expands the system. Upstream burdens of received fibres, energy, water, chemicals, packaging, and transport remain required background links when the dataset is used in a cradle-to-gate model.

Route selection is mandatory. Carding, combing, drawing, gilling, converter or stretch-breaking preparation, and other qualifying operations are modelled only when they occur. Fibre-family and route results shall remain separate; a single unqualified average across viscose, modal, lyocell, cupro, acetate, triacetate, alginate, protein, and other artificial fibres is non-conforming.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.artificial-staple-fibres-carded-combed-or-otherwise-processed-for-spinning |
| classification_refs | CPC 3.0: 26220 (exact generic mapping context) |
| covered_products | Artificial staple fibres based on naturally occurring organic polymers or their derivatives, supplied after carding, combing, drawing, gilling, converter or stretch-breaking preparation, or another declared mechanical preparation for spinning |
| excluded_products | Synthetic staple fibres; continuous filaments; unprocessed artificial staple fibre sold before spinning preparation; spun yarn or thread; woven, knitted, tufted, or nonwoven fabric; fibre manufacture and wet finishing not performed within the declared foreground operation |
| representative_product | One declared artificial staple-fibre family in one declared spinning-preparation form; no cross-family representative average is defined |
| production_route | Receipt and opening/blending, followed by at least one declared qualifying route: carding, combing after carding, or another documented spinning-preparation operation; conditioning/finish application and packing are included only when performed |
| market_state | Factory-gate prepared staple fibre, sliver, lap, roving, or equivalent intermediate for spinning, with fibre family, composition, moisture basis, finish condition, delivery form, and route declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of an artificial staple-fibre intermediate mechanically prepared to the declared state required for spinning |
| How much | 1 kg of prepared artificial staple fibres at the factory gate |
| How well | Conforming to the declared fibre family, blend composition, preparation route, delivery form, moisture basis, finish condition, and product specification |
| How long or cycle | Not applicable as a use-duration function; the reference covers one factory production lot normalized to 1 kg output |
| reference_flow_link | The Tiangong product flow below is the exact generic identity for CPC 26220; it does not encode a particular fibre family, preparation route, moisture basis, or delivery form, so all required qualifiers must accompany each dataset |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Artificial staple fibres, carded, combed or otherwise processed for spinning `4f65996d-819a-4b51-8c1a-e3c3ecaa96b2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | artificial fibre family and regulated/generally accepted fibre name; mono-fibre or blend composition by mass; incoming fibre form and supplier; preparation route and included operations; carded, combed, drawn, gilled, converter-prepared, stretch-broken, or other delivery state; staple length and linear density specification where available; moisture measurement and reporting basis; finish, lubricant, or antistatic-agent condition; recycled or recovered fibre share if any; site and technology; geography; production period; allocation treatment; packaging state |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, reference-flow comments, product description, or an equivalent field. The verified Tiangong flow is an exact generic identity with version 01.01.000 and state code 100 at authoring time; the PCR stores only its UUID, and the verification does not supply route-specific inventory values.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Prepared artificial staple-fibre output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg of the declared factory-gate output. |
| `moisture_basis` | Incoming and outgoing fibre masses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record whether mass is as delivered, conditioned, or dry; measure or document moisture for both input and output and do not mix bases without an explicit conversion. |
| `composition_basis` | Mono-fibre and blended products | Fibre mass fraction | % by mass | Report every fibre component using an accepted fibre name and a documented mass basis; do not classify synthetic polymers as artificial fibres under this PCR. |
| `route_separation` | Shared utilities and multi-route lines | Energy or mass as applicable | kWh, MJ, or kg | Meter by route where practicable; otherwise allocate shared records using documented machine time, throughput, or another causal physical driver and retain the calculation. |
| `mass_balance_period` | Fibre preparation processes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use the same lot, campaign, or reconciled reporting period for fibre inputs, prepared outputs, saleable secondary fibre, internal rework, waste, and collected dust. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Artificial staple fibre received at the preparation site, with fibre family, composition, supplier, incoming form, moisture basis, finish condition, recycled-content claim, and incoming packaging declared |
| starting_condition_role | Foreground gate and upstream-link condition for a spinning-preparation intermediate |
| product_classification_scope | Artificial staple fibres that leave the site carded, combed, or otherwise processed for spinning; CPC 3.0 code 26220 is mapping context, not canonical identity |
| recursive_input_rule | A received input already conforming to this same PCR category remains an explicit technosphere input with its own upstream dataset and preparation state; do not reopen or duplicate its upstream preparation inside the receiving process |
| upstream_dataset_requirement | Fibre-family-specific upstream datasets for received artificial staple fibres and appropriate datasets for electricity, fuels, water, chemicals, packaging, treatment, and transport when included in the broader model |
| disclosure | Declare the actual route, fibre family, material and utility inputs, internal rework loops, secondary outputs, wastes, emissions, abatement, excluded operations, temporal and site coverage, allocation, and every provisional estimate |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | Foreground system boundary | Include receipt, opening, cleaning or blending, every qualifying preparation operation performed, conditional conditioning or finish application, dust collection, waste handling, and packing through factory-gate output. | `un-cpc-3-0-2025`; `hse-textile-machinery-standards` |
| `boundary_route_conditioning` | Product and route selection | At least one of carding, combing following carding, or another documented spinning-preparation operation shall be active; do not import inactive route inventories or average materially different fibre families or routes without separate production-weighted records. | `hse-textile-machinery-standards`; `eu-environmental-footprint-2021` |
| `boundary_upstream_links` | Received products and utilities | Keep received fibre manufacture and other upstream production outside the foreground gate but link their burdens in cradle-to-gate use; the exact generic Tiangong product UUID does not authorize a generic upstream fibre-production dataset. | `eu-textiles-bref-2023`; `eu-environmental-footprint-2021` |
| `boundary_environmental_outputs` | Air, water, and waste crossings | Record relevant particulate releases, collected fibre and dust, waste packaging, wastewater, chemicals, and treatment outputs where they cross the site boundary; distinguish collected waste from elementary releases. | `eu-textiles-bat-2022`; `hse-textile-dust-guidance` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepared_fibre_gate_to_gate` | Gate-to-gate artificial staple-fibre preparation | required | Declare the actual operation sequence; opening/blending and packing are normally present, and at least one of carding, combing after carding, drawing, gilling, converter or stretch-breaking preparation, roving formation, or another specifically named mechanical preparation shall be active | Receive one or more separately identified artificial staple-fibre inputs and produce the qualified factory-gate intermediate without pooling inactive routes | 1 kg factory-gate prepared artificial staple fibres |

### Process: Gate-to-gate artificial staple-fibre preparation (`prepared_fibre_gate_to_gate`)

#### Inputs

##### Product flows

###### Viscose staple fibre, at spinning mill gate input (`viscose_staple_fibre_input`)

Atomic flow name: Viscose staple fibre, at spinning mill gate. Direction and flow type are inherited from the surrounding headings. Applicability: Only when the declared fibre family or blend contains viscose. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.001. Source ID or status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12.

- flow_name: Viscose staple fibre, at spinning mill gate
- direction: input
- flow_type: product
- applicability: Only when the declared fibre family or blend contains viscose
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed net viscose staple fibre assigned to the declared production lot
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.001
- Selected flow: Viscose staple fibre, at spinning mill gate `a64ce209-6dee-404e-a22c-9bbddb1cf295`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net viscose staple fibre assigned to the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Modal staple fibre input (`modal_staple_fibre_input`)

Atomic flow name: Modal staple fibre. Direction and flow type are inherited from the surrounding headings. Applicability: Only when the declared fibre family or blend contains modal. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected.

- flow_name: Modal staple fibre
- direction: input
- flow_type: product
- applicability: Only when the declared fibre family or blend contains modal
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed net modal staple fibre assigned to the declared production lot
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- Selected flow: Modal staple fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net modal staple fibre assigned to the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Lyocell staple fibre input (`lyocell_staple_fibre_input`)

Atomic flow name: Lyocell staple fibre. Direction and flow type are inherited from the surrounding headings. Applicability: Only when the declared fibre family or blend contains lyocell. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected.

- flow_name: Lyocell staple fibre
- direction: input
- flow_type: product
- applicability: Only when the declared fibre family or blend contains lyocell
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed net lyocell staple fibre assigned to the declared production lot
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- Selected flow: Lyocell staple fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net lyocell staple fibre assigned to the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cupro staple fibre input (`cupro_staple_fibre_input`)

Atomic flow name: Cupro staple fibre. Direction and flow type are inherited from the surrounding headings. Applicability: Only when the declared fibre family or blend contains cupro. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected.

- flow_name: Cupro staple fibre
- direction: input
- flow_type: product
- applicability: Only when the declared fibre family or blend contains cupro
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed net cupro staple fibre assigned to the declared production lot
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- Selected flow: Cupro staple fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net cupro staple fibre assigned to the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cellulose acetate staple fibre input (`acetate_staple_fibre_input`)

Atomic flow name: Cellulose acetate staple fibre. Direction and flow type are inherited from the surrounding headings. Applicability: Only when the declared fibre family or blend contains acetate. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected.

- flow_name: Cellulose acetate staple fibre
- direction: input
- flow_type: product
- applicability: Only when the declared fibre family or blend contains acetate
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed net cellulose acetate staple fibre assigned to the declared production lot
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- Selected flow: Cellulose acetate staple fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net cellulose acetate staple fibre assigned to the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cellulose triacetate staple fibre input (`triacetate_staple_fibre_input`)

Atomic flow name: Cellulose triacetate staple fibre. Direction and flow type are inherited from the surrounding headings. Applicability: Only when the declared fibre family or blend contains triacetate. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected.

- flow_name: Cellulose triacetate staple fibre
- direction: input
- flow_type: product
- applicability: Only when the declared fibre family or blend contains triacetate
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed net cellulose triacetate staple fibre assigned to the declared production lot
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- Selected flow: Cellulose triacetate staple fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net cellulose triacetate staple fibre assigned to the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Alginate staple fibre input (`alginate_staple_fibre_input`)

Atomic flow name: Alginate staple fibre. Direction and flow type are inherited from the surrounding headings. Applicability: Only when the declared fibre family or blend contains alginate. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected.

- flow_name: Alginate staple fibre
- direction: input
- flow_type: product
- applicability: Only when the declared fibre family or blend contains alginate
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed net alginate staple fibre assigned to the declared production lot
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- Selected flow: Alginate staple fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net alginate staple fibre assigned to the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Regenerated protein staple fibre input (`regenerated_protein_staple_fibre_input`)

Atomic flow name: Regenerated protein staple fibre. Direction and flow type are inherited from the surrounding headings. Applicability: Only when the declared fibre family or blend contains regenerated protein fibre. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected.

- flow_name: Regenerated protein staple fibre
- direction: input
- flow_type: product
- applicability: Only when the declared fibre family or blend contains regenerated protein fibre
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed net regenerated protein staple fibre assigned to the declared production lot
- range_or_uncertainty: 0–1.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family product flow; generic staple-fibre, regenerated-cellulose, viscose, tow, or synthetic candidates were rejected
- Selected flow: Regenerated protein staple fibre
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed net regenerated protein staple fibre assigned to the declared production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Alternating current; <1 kV; consumption mix; electricity mix input (`electricity_input`)

Atomic flow name: Alternating current; <1 kV; consumption mix; electricity mix. Direction and flow type are inherited from the surrounding headings. Applicability: Include only electricity used by active route operations and causally assigned shared services. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; version 01.01.003. Source ID or status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12.

- flow_name: Alternating current; <1 kV; consumption mix; electricity mix
- direction: input
- flow_type: product
- applicability: Include only electricity used by active route operations and causally assigned shared services
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: MJ
- value_or_formula_or_rule: Metered electricity in kWh multiplied by 3.6 MJ/kWh and assigned to active preparation equipment
- range_or_uncertainty: 0.0036–18 MJ/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ; version 01.01.003
- Selected flow: Alternating current; <1 kV; consumption mix; electricity mix `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: Metered electricity in kWh multiplied by 3.6 MJ/kWh and assigned to active preparation equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0.0036
  - Upper: 18
  - Unit: MJ/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Compressed air input (`compressed_air_input`)

Atomic flow name: Compressed air. Direction and flow type are inherited from the surrounding headings. Applicability: Only when compressed air is used; do not merge its electricity with this carrier row. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; version 01.01.001. Source ID or status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12.

- flow_name: Compressed air
- direction: input
- flow_type: product
- applicability: Only when compressed air is used; do not merge its electricity with this carrier row
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: m3
- value_or_formula_or_rule: Metered normal cubic metres of compressed air delivered to active route equipment
- range_or_uncertainty: 0–10 m3/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3; version 01.01.001
- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered normal cubic metres of compressed air delivered to active route equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Steam; 0.45 MPaG; production mix at plant input (`steam_input`)

Atomic flow name: Steam; 0.45 MPaG; production mix at plant. Direction and flow type are inherited from the surrounding headings. Applicability: Only when supplied steam is 0.45 MPaG; every other pressure grade requires a separate atomic row. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000. Source ID or status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12.

- flow_name: Steam; 0.45 MPaG; production mix at plant
- direction: input
- flow_type: product
- applicability: Only when supplied steam is 0.45 MPaG; every other pressure grade requires a separate atomic row
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Metered purchased or internally supplied steam mass assigned to active conditioning or thermal operations
- range_or_uncertainty: 0–5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000
- Selected flow: Steam; 0.45 MPaG; production mix at plant `aefdb9e8-b74c-4d25-bbfa-c4a1ff59dcdc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered purchased or internally supplied steam mass assigned to active conditioning or thermal operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hot water input (`hot_water_input`)

Atomic flow name: Hot water. Direction and flow type are inherited from the surrounding headings. Applicability: Only when hot water crosses the foreground process boundary; disclose inlet and outlet temperature. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact mass-referenced hot-water product flow; steam, process-heat, boiler-equipment, and water candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact mass-referenced hot-water product flow; steam, process-heat, boiler-equipment, and water candidates were rejected.

- flow_name: Hot water
- direction: input
- flow_type: product
- applicability: Only when hot water crosses the foreground process boundary; disclose inlet and outlet temperature
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Metered hot-water mass assigned to active conditioning or cleaning operations
- range_or_uncertainty: 0–10 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact mass-referenced hot-water product flow; steam, process-heat, boiler-equipment, and water candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact mass-referenced hot-water product flow; steam, process-heat, boiler-equipment, and water candidates were rejected
- Selected flow: Hot water
- Flow property / unit: Mass / kg
- Amount rule: Metered hot-water mass assigned to active conditioning or cleaning operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Natural gas in the gaseous state; consumption mix; pipeline supplied input (`natural_gas_input`)

Atomic flow name: Natural gas in the gaseous state; consumption mix; pipeline supplied. Direction and flow type are inherited from the surrounding headings. Applicability: Only when natural gas is consumed within the declared foreground boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.001. Source ID or status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12.

- flow_name: Natural gas in the gaseous state; consumption mix; pipeline supplied
- direction: input
- flow_type: product
- applicability: Only when natural gas is consumed within the declared foreground boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Metered natural-gas consumption assigned to route equipment or on-site utility generation included in the foreground
- range_or_uncertainty: 0–1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.001
- Selected flow: Natural gas in the gaseous state; consumption mix; pipeline supplied `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered natural-gas consumption assigned to route equipment or on-site utility generation included in the foreground
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel oil; generic refinery production mix input (`diesel_input`)

Atomic flow name: Diesel oil; generic refinery production mix. Direction and flow type are inherited from the surrounding headings. Applicability: Only when diesel is consumed by foreground equipment; exclude unrelated vehicles and transport. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.002. Source ID or status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12.

- flow_name: Diesel oil; generic refinery production mix
- direction: input
- flow_type: product
- applicability: Only when diesel is consumed by foreground equipment; exclude unrelated vehicles and transport
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Metered or invoiced diesel consumed by included stationary equipment
- range_or_uncertainty: 0–0.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.002
- Selected flow: Diesel oil; generic refinery production mix `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or invoiced diesel consumed by included stationary equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Liquefied petroleum gas; industrial fuel and feedstock input at plant input (`lpg_input`)

Atomic flow name: Liquefied petroleum gas; industrial fuel and feedstock input at plant. Direction and flow type are inherited from the surrounding headings. Applicability: Only when LPG is consumed within the declared foreground boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000. Source ID or status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12.

- flow_name: Liquefied petroleum gas; industrial fuel and feedstock input at plant
- direction: input
- flow_type: product
- applicability: Only when LPG is consumed within the declared foreground boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Metered or invoiced LPG consumed by included foreground equipment
- range_or_uncertainty: 0–0.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000
- Selected flow: Liquefied petroleum gas; industrial fuel and feedstock input at plant `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or invoiced LPG consumed by included foreground equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### R-134a refrigerant make-up (`r134a_refrigerant_makeup`)

Atomic flow name: Refrigerant R134a; industrial processing plant; make-up for leakage. Direction and flow type are inherited from the surrounding headings. Applicability: Only for equipment charged with R-134a; other refrigerants require their own atomic row. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000. Source ID or status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12.

- flow_name: Refrigerant R134a; industrial processing plant; make-up for leakage
- direction: input
- flow_type: product
- applicability: Only for equipment charged with R-134a; other refrigerants require their own atomic row
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Service-record mass of R-134a added to included cooling or air-conditioning equipment
- range_or_uncertainty: 0–0.01 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000
- Selected flow: Refrigerant R134a; industrial processing plant; make-up for leakage `a4facd51-1e5c-422e-8461-e9562c045164`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Service-record mass of R-134a added to included cooling or air-conditioning equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### R-32 refrigerant make-up (`r32_refrigerant_makeup`)

Atomic flow name: Difluoromethane (R-32). Direction and flow type are inherited from the surrounding headings. Applicability: Only for equipment charged with R-32; other refrigerants require their own atomic row. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact R-32/difluoromethane product flow after name, CAS 75-10-5, and methylene-fluoride searches; R404A, R134a, unspecified refrigerant, and fluoride candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact R-32/difluoromethane product flow after name, CAS 75-10-5, and methylene-fluoride searches; R404A, R134a, unspecified refrigerant, and fluoride candidates were rejected.

- flow_name: Difluoromethane (R-32)
- direction: input
- flow_type: product
- applicability: Only for equipment charged with R-32; other refrigerants require their own atomic row
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Service-record mass of R-32 added to included cooling or air-conditioning equipment
- range_or_uncertainty: 0–0.01 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact R-32/difluoromethane product flow after name, CAS 75-10-5, and methylene-fluoride searches; R404A, R134a, unspecified refrigerant, and fluoride candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact R-32/difluoromethane product flow after name, CAS 75-10-5, and methylene-fluoride searches; R404A, R134a, unspecified refrigerant, and fluoride candidates were rejected
- Selected flow: Difluoromethane (R-32)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Service-record mass of R-32 added to included cooling or air-conditioning equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process Water input (`process_water_input`)

Atomic flow name: Process Water. Direction and flow type are inherited from the surrounding headings. Applicability: Only for active water-using operations; potable and deionized water require separate atomic rows if both are used. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.001. Source ID or status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12.

- flow_name: Process Water
- direction: input
- flow_type: product
- applicability: Only for active water-using operations; potable and deionized water require separate atomic rows if both are used
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Metered water used for humidification, formulation dilution, or included equipment cleaning, net of directly recirculated water
- range_or_uncertainty: 0–5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.001
- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered water used for humidification, formulation dilution, or included equipment cleaning, net of directly recirculated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Synthetic-ester lubricant formulation input (`synthetic_ester_lubricant_input`)

Atomic flow name: Synthetic-ester textile lubricant formulation. Direction and flow type are inherited from the surrounding headings. Applicability: Only when the identified lubricant formulation is applied. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact declared formulation; generic lubricant, POY oil, and unspecified processing-aid candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact declared formulation; generic lubricant, POY oil, and unspecified processing-aid candidates were rejected.

- flow_name: Synthetic-ester textile lubricant formulation
- direction: input
- flow_type: product
- applicability: Only when the identified lubricant formulation is applied
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Batch-dosed formulated mass from one identified supplier product; do not combine multiple formulations
- range_or_uncertainty: 0–0.1 kg formulation/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact declared formulation; generic lubricant, POY oil, and unspecified processing-aid candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact declared formulation; generic lubricant, POY oil, and unspecified processing-aid candidates were rejected
- Selected flow: Synthetic-ester textile lubricant formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch-dosed formulated mass from one identified supplier product; do not combine multiple formulations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg formulation/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Antistatic-agent formulation input (`antistatic_agent_input`)

Atomic flow name: Antistatic textile-finish formulation. Direction and flow type are inherited from the surrounding headings. Applicability: Only when the identified antistatic formulation is applied. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact declared formulation; generic lubricant, POY oil, and unspecified processing-aid candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact declared formulation; generic lubricant, POY oil, and unspecified processing-aid candidates were rejected.

- flow_name: Antistatic textile-finish formulation
- direction: input
- flow_type: product
- applicability: Only when the identified antistatic formulation is applied
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Batch-dosed formulated mass from one identified supplier product; do not combine multiple formulations
- range_or_uncertainty: 0–0.1 kg formulation/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact declared formulation; generic lubricant, POY oil, and unspecified processing-aid candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact declared formulation; generic lubricant, POY oil, and unspecified processing-aid candidates were rejected
- Selected flow: Antistatic textile-finish formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch-dosed formulated mass from one identified supplier product; do not combine multiple formulations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg formulation/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Corrugated board boxes; 16.6% primary fibre; 83.4% recycled fibre; production mix at plant input (`corrugated_cardboard_box_input`)

Atomic flow name: Corrugated board boxes; 16.6% primary fibre; 83.4% recycled fibre; production mix at plant. Direction and flow type are inherited from the surrounding headings. Applicability: Only when corrugated cardboard boxes are used. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 03.00.002. Source ID or status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12.

- flow_name: Corrugated board boxes; 16.6% primary fibre; 83.4% recycled fibre; production mix at plant
- direction: input
- flow_type: product
- applicability: Only when corrugated cardboard boxes are used
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Purchased or bill-of-material mass assigned to packed output
- range_or_uncertainty: 0–0.2 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 03.00.002
- Selected flow: Corrugated board boxes; 16.6% primary fibre; 83.4% recycled fibre; production mix at plant `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchased or bill-of-material mass assigned to packed output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### LDPE bag or film input (`ldpe_bag_film_input`)

Atomic flow name: Low-density polyethylene bag or film. Direction and flow type are inherited from the surrounding headings. Applicability: Only when LDPE bags or film are used. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact LDPE bag-or-film product flow; generic polyethylene and unrelated film candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact LDPE bag-or-film product flow; generic polyethylene and unrelated film candidates were rejected.

- flow_name: Low-density polyethylene bag or film
- direction: input
- flow_type: product
- applicability: Only when LDPE bags or film are used
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Purchased or bill-of-material LDPE mass assigned to packed output
- range_or_uncertainty: 0–0.2 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact LDPE bag-or-film product flow; generic polyethylene and unrelated film candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact LDPE bag-or-film product flow; generic polyethylene and unrelated film candidates were rejected
- Selected flow: Low-density polyethylene bag or film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchased or bill-of-material LDPE mass assigned to packed output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Polypropylene strap input (`polypropylene_strap_input`)

Atomic flow name: Polypropylene strapping. Direction and flow type are inherited from the surrounding headings. Applicability: Only when polypropylene strapping is used. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact polypropylene strapping product flow; resin, fibre, twine, cable-tie, and mixed-packaging candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact polypropylene strapping product flow; resin, fibre, twine, cable-tie, and mixed-packaging candidates were rejected.

- flow_name: Polypropylene strapping
- direction: input
- flow_type: product
- applicability: Only when polypropylene strapping is used
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Purchased or bill-of-material polypropylene strap mass assigned to packed output
- range_or_uncertainty: 0–0.05 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact polypropylene strapping product flow; resin, fibre, twine, cable-tie, and mixed-packaging candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact polypropylene strapping product flow; resin, fibre, twine, cable-tie, and mixed-packaging candidates were rejected
- Selected flow: Polypropylene strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchased or bill-of-material polypropylene strap mass assigned to packed output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wooden pallets; production mix at lumber mill; wooden boards and slats input (`wood_pallet_input`)

Atomic flow name: Wooden pallets; production mix at lumber mill; wooden boards and slats. Direction and flow type are inherited from the surrounding headings. Applicability: Only when wood pallets are used and cross the declared product or packaging boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.001. Source ID or status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12.

- flow_name: Wooden pallets; production mix at lumber mill; wooden boards and slats
- direction: input
- flow_type: product
- applicability: Only when wood pallets are used and cross the declared product or packaging boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Pallet mass assigned using the documented number of reuse cycles
- range_or_uncertainty: 0–0.5 kg allocated pallet/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.001
- Selected flow: Wooden pallets; production mix at lumber mill; wooden boards and slats `e882bdf4-1cf6-4f51-93e9-c6b91855ba02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Pallet mass assigned using the documented number of reuse cycles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg allocated pallet/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared artificial staple fibres supplied for spinning (`prepared_artificial_staple_fibres`)

Atomic flow name: Artificial staple fibres, carded, combed or otherwise processed for spinning. Direction and flow type are inherited from the surrounding headings. Applicability: Always; exact generic identity requires every fibre-family and route qualifier. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000. Source ID or status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12.

- flow_name: Artificial staple fibres, carded, combed or otherwise processed for spinning
- direction: output
- flow_type: product
- applicability: Always; exact generic identity requires every fibre-family and route qualifier
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: 1 kg by reference-flow definition after normalization of collected packed-output mass
- range_or_uncertainty: 1–1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Product flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000
- Selected flow: Artificial staple fibres, carded, combed or otherwise processed for spinning `4f65996d-819a-4b51-8c1a-e3c3ecaa96b2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg by reference-flow definition after normalization of collected packed-output mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Reference-flow normalization
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg factory-gate output
  - Basis: fixed reference-flow identity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `eu-environmental-footprint-2021`

###### Saleable viscose staple fibre combing noil (`saleable_viscose_combing_noil`)

Atomic flow name: Saleable viscose staple fibre combing noil. Direction and flow type are inherited from the surrounding headings. Applicability: Only when viscose staple fibre combing noil is separately marketed. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected.

- flow_name: Saleable viscose staple fibre combing noil
- direction: output
- flow_type: product
- applicability: Only when viscose staple fibre combing noil is separately marketed
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed viscose staple fibre noil sold or transferred for beneficial use with documented quality and destination
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- Selected flow: Saleable viscose staple fibre combing noil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed viscose staple fibre noil sold or transferred for beneficial use with documented quality and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Saleable modal staple fibre combing noil (`saleable_modal_combing_noil`)

Atomic flow name: Saleable modal staple fibre combing noil. Direction and flow type are inherited from the surrounding headings. Applicability: Only when modal staple fibre combing noil is separately marketed. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected.

- flow_name: Saleable modal staple fibre combing noil
- direction: output
- flow_type: product
- applicability: Only when modal staple fibre combing noil is separately marketed
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed modal staple fibre noil sold or transferred for beneficial use with documented quality and destination
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- Selected flow: Saleable modal staple fibre combing noil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed modal staple fibre noil sold or transferred for beneficial use with documented quality and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Saleable lyocell staple fibre combing noil (`saleable_lyocell_combing_noil`)

Atomic flow name: Saleable lyocell staple fibre combing noil. Direction and flow type are inherited from the surrounding headings. Applicability: Only when lyocell staple fibre combing noil is separately marketed. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected.

- flow_name: Saleable lyocell staple fibre combing noil
- direction: output
- flow_type: product
- applicability: Only when lyocell staple fibre combing noil is separately marketed
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed lyocell staple fibre noil sold or transferred for beneficial use with documented quality and destination
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- Selected flow: Saleable lyocell staple fibre combing noil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed lyocell staple fibre noil sold or transferred for beneficial use with documented quality and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Saleable cupro staple fibre combing noil (`saleable_cupro_combing_noil`)

Atomic flow name: Saleable cupro staple fibre combing noil. Direction and flow type are inherited from the surrounding headings. Applicability: Only when cupro staple fibre combing noil is separately marketed. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected.

- flow_name: Saleable cupro staple fibre combing noil
- direction: output
- flow_type: product
- applicability: Only when cupro staple fibre combing noil is separately marketed
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed cupro staple fibre noil sold or transferred for beneficial use with documented quality and destination
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- Selected flow: Saleable cupro staple fibre combing noil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed cupro staple fibre noil sold or transferred for beneficial use with documented quality and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Saleable cellulose acetate staple fibre combing noil (`saleable_acetate_combing_noil`)

Atomic flow name: Saleable cellulose acetate staple fibre combing noil. Direction and flow type are inherited from the surrounding headings. Applicability: Only when cellulose acetate staple fibre combing noil is separately marketed. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected.

- flow_name: Saleable cellulose acetate staple fibre combing noil
- direction: output
- flow_type: product
- applicability: Only when cellulose acetate staple fibre combing noil is separately marketed
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed cellulose acetate staple fibre noil sold or transferred for beneficial use with documented quality and destination
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- Selected flow: Saleable cellulose acetate staple fibre combing noil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed cellulose acetate staple fibre noil sold or transferred for beneficial use with documented quality and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Saleable cellulose triacetate staple fibre combing noil (`saleable_triacetate_combing_noil`)

Atomic flow name: Saleable cellulose triacetate staple fibre combing noil. Direction and flow type are inherited from the surrounding headings. Applicability: Only when cellulose triacetate staple fibre combing noil is separately marketed. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected.

- flow_name: Saleable cellulose triacetate staple fibre combing noil
- direction: output
- flow_type: product
- applicability: Only when cellulose triacetate staple fibre combing noil is separately marketed
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed cellulose triacetate staple fibre noil sold or transferred for beneficial use with documented quality and destination
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- Selected flow: Saleable cellulose triacetate staple fibre combing noil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed cellulose triacetate staple fibre noil sold or transferred for beneficial use with documented quality and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Saleable alginate staple fibre combing noil (`saleable_alginate_combing_noil`)

Atomic flow name: Saleable alginate staple fibre combing noil. Direction and flow type are inherited from the surrounding headings. Applicability: Only when alginate staple fibre combing noil is separately marketed. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected.

- flow_name: Saleable alginate staple fibre combing noil
- direction: output
- flow_type: product
- applicability: Only when alginate staple fibre combing noil is separately marketed
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed alginate staple fibre noil sold or transferred for beneficial use with documented quality and destination
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- Selected flow: Saleable alginate staple fibre combing noil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed alginate staple fibre noil sold or transferred for beneficial use with documented quality and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Saleable regenerated protein staple fibre combing noil (`saleable_regenerated_protein_combing_noil`)

Atomic flow name: Saleable regenerated protein staple fibre combing noil. Direction and flow type are inherited from the surrounding headings. Applicability: Only when regenerated protein staple fibre combing noil is separately marketed. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected.

- flow_name: Saleable regenerated protein staple fibre combing noil
- direction: output
- flow_type: product
- applicability: Only when regenerated protein staple fibre combing noil is separately marketed
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed regenerated protein staple fibre noil sold or transferred for beneficial use with documented quality and destination
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific saleable combing-noil product flow; broader staple-fibre and unrelated product candidates were rejected
- Selected flow: Saleable regenerated protein staple fibre combing noil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed regenerated protein staple fibre noil sold or transferred for beneficial use with documented quality and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Foreign matter removed during opening (`opening_foreign_matter_waste`)

Atomic flow name: Foreign matter from bale opening. Direction and flow type are inherited from the surrounding headings. Applicability: Only when foreign matter is removed and crosses the boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact bale-opening foreign-matter waste flow; generic dregs candidate was rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact bale-opening foreign-matter waste flow; generic dregs candidate was rejected.

- flow_name: Foreign matter from bale opening
- direction: output
- flow_type: waste
- applicability: Only when foreign matter is removed and crosses the boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed foreign matter sent to its documented treatment destination
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact bale-opening foreign-matter waste flow; generic dregs candidate was rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact bale-opening foreign-matter waste flow; generic dregs candidate was rejected
- Selected flow: Foreign matter from bale opening
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed foreign matter sent to its documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Viscose staple fibre carding reject (`viscose_carding_reject_waste`)

Atomic flow name: Viscose staple fibre carding reject. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active viscose staple fibre carding route when this reject crosses the boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Viscose staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: Only for an active viscose staple fibre carding route when this reject crosses the boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed viscose staple fibre carding reject sent to recycling, recovery, or disposal
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Viscose staple fibre carding reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed viscose staple fibre carding reject sent to recycling, recovery, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Modal staple fibre carding reject (`modal_carding_reject_waste`)

Atomic flow name: Modal staple fibre carding reject. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active modal staple fibre carding route when this reject crosses the boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Modal staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: Only for an active modal staple fibre carding route when this reject crosses the boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed modal staple fibre carding reject sent to recycling, recovery, or disposal
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Modal staple fibre carding reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed modal staple fibre carding reject sent to recycling, recovery, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Lyocell staple fibre carding reject (`lyocell_carding_reject_waste`)

Atomic flow name: Lyocell staple fibre carding reject. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active lyocell staple fibre carding route when this reject crosses the boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Lyocell staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: Only for an active lyocell staple fibre carding route when this reject crosses the boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed lyocell staple fibre carding reject sent to recycling, recovery, or disposal
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Lyocell staple fibre carding reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed lyocell staple fibre carding reject sent to recycling, recovery, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cupro staple fibre carding reject (`cupro_carding_reject_waste`)

Atomic flow name: Cupro staple fibre carding reject. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active cupro staple fibre carding route when this reject crosses the boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Cupro staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: Only for an active cupro staple fibre carding route when this reject crosses the boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed cupro staple fibre carding reject sent to recycling, recovery, or disposal
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Cupro staple fibre carding reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed cupro staple fibre carding reject sent to recycling, recovery, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cellulose acetate staple fibre carding reject (`acetate_carding_reject_waste`)

Atomic flow name: Cellulose acetate staple fibre carding reject. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active cellulose acetate staple fibre carding route when this reject crosses the boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Cellulose acetate staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: Only for an active cellulose acetate staple fibre carding route when this reject crosses the boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed cellulose acetate staple fibre carding reject sent to recycling, recovery, or disposal
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Cellulose acetate staple fibre carding reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed cellulose acetate staple fibre carding reject sent to recycling, recovery, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cellulose triacetate staple fibre carding reject (`triacetate_carding_reject_waste`)

Atomic flow name: Cellulose triacetate staple fibre carding reject. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active cellulose triacetate staple fibre carding route when this reject crosses the boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Cellulose triacetate staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: Only for an active cellulose triacetate staple fibre carding route when this reject crosses the boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed cellulose triacetate staple fibre carding reject sent to recycling, recovery, or disposal
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Cellulose triacetate staple fibre carding reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed cellulose triacetate staple fibre carding reject sent to recycling, recovery, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Alginate staple fibre carding reject (`alginate_carding_reject_waste`)

Atomic flow name: Alginate staple fibre carding reject. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active alginate staple fibre carding route when this reject crosses the boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Alginate staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: Only for an active alginate staple fibre carding route when this reject crosses the boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed alginate staple fibre carding reject sent to recycling, recovery, or disposal
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Alginate staple fibre carding reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed alginate staple fibre carding reject sent to recycling, recovery, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Regenerated protein staple fibre carding reject (`regenerated_protein_carding_reject_waste`)

Atomic flow name: Regenerated protein staple fibre carding reject. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active regenerated protein staple fibre carding route when this reject crosses the boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Regenerated protein staple fibre carding reject
- direction: output
- flow_type: waste
- applicability: Only for an active regenerated protein staple fibre carding route when this reject crosses the boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed regenerated protein staple fibre carding reject sent to recycling, recovery, or disposal
- range_or_uncertainty: 0–0.3 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Regenerated protein staple fibre carding reject
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed regenerated protein staple fibre carding reject sent to recycling, recovery, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Viscose staple fibre combing noil waste (`viscose_combing_noil_waste`)

Atomic flow name: Viscose staple fibre combing noil waste. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active viscose staple fibre combing route when this noil is classified as waste. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Viscose staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: Only for an active viscose staple fibre combing route when this noil is classified as waste
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed viscose staple fibre combing noil classified as waste and sent to documented treatment
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Viscose staple fibre combing noil waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed viscose staple fibre combing noil classified as waste and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Modal staple fibre combing noil waste (`modal_combing_noil_waste`)

Atomic flow name: Modal staple fibre combing noil waste. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active modal staple fibre combing route when this noil is classified as waste. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Modal staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: Only for an active modal staple fibre combing route when this noil is classified as waste
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed modal staple fibre combing noil classified as waste and sent to documented treatment
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Modal staple fibre combing noil waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed modal staple fibre combing noil classified as waste and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Lyocell staple fibre combing noil waste (`lyocell_combing_noil_waste`)

Atomic flow name: Lyocell staple fibre combing noil waste. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active lyocell staple fibre combing route when this noil is classified as waste. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Lyocell staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: Only for an active lyocell staple fibre combing route when this noil is classified as waste
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed lyocell staple fibre combing noil classified as waste and sent to documented treatment
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Lyocell staple fibre combing noil waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed lyocell staple fibre combing noil classified as waste and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cupro staple fibre combing noil waste (`cupro_combing_noil_waste`)

Atomic flow name: Cupro staple fibre combing noil waste. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active cupro staple fibre combing route when this noil is classified as waste. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Cupro staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: Only for an active cupro staple fibre combing route when this noil is classified as waste
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed cupro staple fibre combing noil classified as waste and sent to documented treatment
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Cupro staple fibre combing noil waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed cupro staple fibre combing noil classified as waste and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cellulose acetate staple fibre combing noil waste (`acetate_combing_noil_waste`)

Atomic flow name: Cellulose acetate staple fibre combing noil waste. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active cellulose acetate staple fibre combing route when this noil is classified as waste. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Cellulose acetate staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: Only for an active cellulose acetate staple fibre combing route when this noil is classified as waste
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed cellulose acetate staple fibre combing noil classified as waste and sent to documented treatment
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Cellulose acetate staple fibre combing noil waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed cellulose acetate staple fibre combing noil classified as waste and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cellulose triacetate staple fibre combing noil waste (`triacetate_combing_noil_waste`)

Atomic flow name: Cellulose triacetate staple fibre combing noil waste. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active cellulose triacetate staple fibre combing route when this noil is classified as waste. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Cellulose triacetate staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: Only for an active cellulose triacetate staple fibre combing route when this noil is classified as waste
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed cellulose triacetate staple fibre combing noil classified as waste and sent to documented treatment
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Cellulose triacetate staple fibre combing noil waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed cellulose triacetate staple fibre combing noil classified as waste and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Alginate staple fibre combing noil waste (`alginate_combing_noil_waste`)

Atomic flow name: Alginate staple fibre combing noil waste. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active alginate staple fibre combing route when this noil is classified as waste. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Alginate staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: Only for an active alginate staple fibre combing route when this noil is classified as waste
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed alginate staple fibre combing noil classified as waste and sent to documented treatment
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Alginate staple fibre combing noil waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed alginate staple fibre combing noil classified as waste and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Regenerated protein staple fibre combing noil waste (`regenerated_protein_combing_noil_waste`)

Atomic flow name: Regenerated protein staple fibre combing noil waste. Direction and flow type are inherited from the surrounding headings. Applicability: Only for an active regenerated protein staple fibre combing route when this noil is classified as waste. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Regenerated protein staple fibre combing noil waste
- direction: output
- flow_type: waste
- applicability: Only for an active regenerated protein staple fibre combing route when this noil is classified as waste
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed regenerated protein staple fibre combing noil classified as waste and sent to documented treatment
- range_or_uncertainty: 0–0.4 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Regenerated protein staple fibre combing noil waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed regenerated protein staple fibre combing noil classified as waste and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.4
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected viscose staple fibre dust (`collected_viscose_fibre_dust_waste`)

Atomic flow name: Collected viscose staple fibre dust. Direction and flow type are inherited from the surrounding headings. Applicability: Only when viscose staple fibre dust is collected; do not duplicate uncaptured particulate released to air. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Collected viscose staple fibre dust
- direction: output
- flow_type: waste
- applicability: Only when viscose staple fibre dust is collected; do not duplicate uncaptured particulate released to air
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed viscose staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Collected viscose staple fibre dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed viscose staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected modal staple fibre dust (`collected_modal_fibre_dust_waste`)

Atomic flow name: Collected modal staple fibre dust. Direction and flow type are inherited from the surrounding headings. Applicability: Only when modal staple fibre dust is collected; do not duplicate uncaptured particulate released to air. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Collected modal staple fibre dust
- direction: output
- flow_type: waste
- applicability: Only when modal staple fibre dust is collected; do not duplicate uncaptured particulate released to air
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed modal staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Collected modal staple fibre dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed modal staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected lyocell staple fibre dust (`collected_lyocell_fibre_dust_waste`)

Atomic flow name: Collected lyocell staple fibre dust. Direction and flow type are inherited from the surrounding headings. Applicability: Only when lyocell staple fibre dust is collected; do not duplicate uncaptured particulate released to air. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Collected lyocell staple fibre dust
- direction: output
- flow_type: waste
- applicability: Only when lyocell staple fibre dust is collected; do not duplicate uncaptured particulate released to air
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed lyocell staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Collected lyocell staple fibre dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed lyocell staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected cupro staple fibre dust (`collected_cupro_fibre_dust_waste`)

Atomic flow name: Collected cupro staple fibre dust. Direction and flow type are inherited from the surrounding headings. Applicability: Only when cupro staple fibre dust is collected; do not duplicate uncaptured particulate released to air. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Collected cupro staple fibre dust
- direction: output
- flow_type: waste
- applicability: Only when cupro staple fibre dust is collected; do not duplicate uncaptured particulate released to air
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed cupro staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Collected cupro staple fibre dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed cupro staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected cellulose acetate staple fibre dust (`collected_acetate_fibre_dust_waste`)

Atomic flow name: Collected cellulose acetate staple fibre dust. Direction and flow type are inherited from the surrounding headings. Applicability: Only when cellulose acetate staple fibre dust is collected; do not duplicate uncaptured particulate released to air. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Collected cellulose acetate staple fibre dust
- direction: output
- flow_type: waste
- applicability: Only when cellulose acetate staple fibre dust is collected; do not duplicate uncaptured particulate released to air
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed cellulose acetate staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Collected cellulose acetate staple fibre dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed cellulose acetate staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected cellulose triacetate staple fibre dust (`collected_triacetate_fibre_dust_waste`)

Atomic flow name: Collected cellulose triacetate staple fibre dust. Direction and flow type are inherited from the surrounding headings. Applicability: Only when cellulose triacetate staple fibre dust is collected; do not duplicate uncaptured particulate released to air. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Collected cellulose triacetate staple fibre dust
- direction: output
- flow_type: waste
- applicability: Only when cellulose triacetate staple fibre dust is collected; do not duplicate uncaptured particulate released to air
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed cellulose triacetate staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Collected cellulose triacetate staple fibre dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed cellulose triacetate staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected alginate staple fibre dust (`collected_alginate_fibre_dust_waste`)

Atomic flow name: Collected alginate staple fibre dust. Direction and flow type are inherited from the surrounding headings. Applicability: Only when alginate staple fibre dust is collected; do not duplicate uncaptured particulate released to air. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Collected alginate staple fibre dust
- direction: output
- flow_type: waste
- applicability: Only when alginate staple fibre dust is collected; do not duplicate uncaptured particulate released to air
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed alginate staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Collected alginate staple fibre dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed alginate staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Collected regenerated protein staple fibre dust (`collected_regenerated_protein_fibre_dust_waste`)

Atomic flow name: Collected regenerated protein staple fibre dust. Direction and flow type are inherited from the surrounding headings. Applicability: Only when regenerated protein staple fibre dust is collected; do not duplicate uncaptured particulate released to air. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected.

- flow_name: Collected regenerated protein staple fibre dust
- direction: output
- flow_type: waste
- applicability: Only when regenerated protein staple fibre dust is collected; do not duplicate uncaptured particulate released to air
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed regenerated protein staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact fibre-family-specific waste flow; generic textile waste, wool waste, dust, and unrelated material candidates were rejected
- Selected flow: Collected regenerated protein staple fibre dust
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed regenerated protein staple fibre dust removed from filters, collectors, or vacuum cleaning and sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Corrugated cardboard waste (`corrugated_cardboard_waste`)

Atomic flow name: Packaging waste, cardboard; generated during packing; treatment unspecified. Direction and flow type are inherited from the surrounding headings. Applicability: Only when corrugated cardboard becomes waste within the boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Waste flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000. Source ID or status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12.

- flow_name: Packaging waste, cardboard; generated during packing; treatment unspecified
- direction: output
- flow_type: waste
- applicability: Only when corrugated cardboard becomes waste within the boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed corrugated cardboard sent to recycling, recovery, or disposal
- range_or_uncertainty: 0–0.2 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Waste flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000
- Selected flow: Packaging waste, cardboard; generated during packing; treatment unspecified `72270223-04b1-4986-a546-94e5a0821317`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed corrugated cardboard sent to recycling, recovery, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### LDPE bag or film waste (`ldpe_bag_film_waste`)

Atomic flow name: Waste low-density polyethylene bag or film. Direction and flow type are inherited from the surrounding headings. Applicability: Only when LDPE packaging becomes waste within the boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact LDPE bag-or-film waste flow; returned candidate was unrelated anode sludge. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact LDPE bag-or-film waste flow; returned candidate was unrelated anode sludge.

- flow_name: Waste low-density polyethylene bag or film
- direction: output
- flow_type: waste
- applicability: Only when LDPE packaging becomes waste within the boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed LDPE waste sent to recycling, recovery, or disposal
- range_or_uncertainty: 0–0.2 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact LDPE bag-or-film waste flow; returned candidate was unrelated anode sludge
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact LDPE bag-or-film waste flow; returned candidate was unrelated anode sludge
- Selected flow: Waste low-density polyethylene bag or film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed LDPE waste sent to recycling, recovery, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Polypropylene strap waste (`polypropylene_strap_waste`)

Atomic flow name: Waste polypropylene strapping. Direction and flow type are inherited from the surrounding headings. Applicability: Only when polypropylene strapping becomes waste within the boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact strapping waste flow; broader polypropylene waste candidate was rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact strapping waste flow; broader polypropylene waste candidate was rejected.

- flow_name: Waste polypropylene strapping
- direction: output
- flow_type: waste
- applicability: Only when polypropylene strapping becomes waste within the boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed polypropylene strap waste sent to recycling, recovery, or disposal
- range_or_uncertainty: 0–0.05 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact strapping waste flow; broader polypropylene waste candidate was rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact strapping waste flow; broader polypropylene waste candidate was rejected
- Selected flow: Waste polypropylene strapping
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed polypropylene strap waste sent to recycling, recovery, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wood pallet waste (`wood_pallet_waste`)

Atomic flow name: Waste wood pallet. Direction and flow type are inherited from the surrounding headings. Applicability: Only when a wood pallet becomes waste within the boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact pallet waste flow; broader wood waste candidate was rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact pallet waste flow; broader wood waste candidate was rejected.

- flow_name: Waste wood pallet
- direction: output
- flow_type: waste
- applicability: Only when a wood pallet becomes waste within the boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed pallet mass sent to recycling, recovery, or disposal after its actual reuse history
- range_or_uncertainty: 0–0.5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact pallet waste flow; broader wood waste candidate was rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact pallet waste flow; broader wood waste candidate was rejected
- Selected flow: Waste wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed pallet mass sent to recycling, recovery, or disposal after its actual reuse history
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Unused synthetic-ester lubricant waste (`unused_lubricant_waste`)

Atomic flow name: Unused synthetic-ester textile lubricant formulation. Direction and flow type are inherited from the surrounding headings. Applicability: Only when the identified lubricant formulation becomes waste. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact formulation-specific unused-chemical waste flow; broader oil or textile-waste candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact formulation-specific unused-chemical waste flow; broader oil or textile-waste candidates were rejected.

- flow_name: Unused synthetic-ester textile lubricant formulation
- direction: output
- flow_type: waste
- applicability: Only when the identified lubricant formulation becomes waste
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed unused or off-specification lubricant formulation sent to documented treatment
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact formulation-specific unused-chemical waste flow; broader oil or textile-waste candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact formulation-specific unused-chemical waste flow; broader oil or textile-waste candidates were rejected
- Selected flow: Unused synthetic-ester textile lubricant formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed unused or off-specification lubricant formulation sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Unused antistatic-agent waste (`unused_antistatic_agent_waste`)

Atomic flow name: Unused antistatic textile-finish formulation. Direction and flow type are inherited from the surrounding headings. Applicability: Only when the identified antistatic formulation becomes waste. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact formulation-specific unused-chemical waste flow; broader oil or textile-waste candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact formulation-specific unused-chemical waste flow; broader oil or textile-waste candidates were rejected.

- flow_name: Unused antistatic textile-finish formulation
- direction: output
- flow_type: waste
- applicability: Only when the identified antistatic formulation becomes waste
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed unused or off-specification antistatic formulation sent to documented treatment
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact formulation-specific unused-chemical waste flow; broader oil or textile-waste candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact formulation-specific unused-chemical waste flow; broader oil or textile-waste candidates were rejected
- Selected flow: Unused antistatic textile-finish formulation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed unused or off-specification antistatic formulation sent to documented treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Contaminated absorbent waste (`contaminated_absorbent_waste`)

Atomic flow name: Cellulose absorbent contaminated with synthetic-ester textile lubricant. Direction and flow type are inherited from the surrounding headings. Applicability: Only when absorbents are used and discarded. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact cellulose-absorbent-and-lubricant composite waste flow; generic waste-oil and waste-clay candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact cellulose-absorbent-and-lubricant composite waste flow; generic waste-oil and waste-clay candidates were rejected.

- flow_name: Cellulose absorbent contaminated with synthetic-ester textile lubricant
- direction: output
- flow_type: waste
- applicability: Only when absorbents are used and discarded
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed contaminated absorbent sent to hazardous or non-hazardous treatment according to its actual classification
- range_or_uncertainty: 0–0.05 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact cellulose-absorbent-and-lubricant composite waste flow; generic waste-oil and waste-clay candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact cellulose-absorbent-and-lubricant composite waste flow; generic waste-oil and waste-clay candidates were rejected
- Selected flow: Cellulose absorbent contaminated with synthetic-ester textile lubricant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed contaminated absorbent sent to hazardous or non-hazardous treatment according to its actual classification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### HDPE chemical container waste (`hdpe_chemical_container_waste`)

Atomic flow name: Waste high-density polyethylene chemical container. Direction and flow type are inherited from the surrounding headings. Applicability: Only when an HDPE chemical container becomes waste within the boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact HDPE chemical-container waste flow; broader waste-polyethylene candidate was rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact HDPE chemical-container waste flow; broader waste-polyethylene candidate was rejected.

- flow_name: Waste high-density polyethylene chemical container
- direction: output
- flow_type: waste
- applicability: Only when an HDPE chemical container becomes waste within the boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed HDPE chemical-container mass sent to return, recycling, recovery, or disposal
- range_or_uncertainty: 0–0.1 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact HDPE chemical-container waste flow; broader waste-polyethylene candidate was rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact HDPE chemical-container waste flow; broader waste-polyethylene candidate was rejected
- Selected flow: Waste high-density polyethylene chemical container
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed HDPE chemical-container mass sent to return, recycling, recovery, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Steel chemical drum waste (`steel_chemical_drum_waste`)

Atomic flow name: Waste steel chemical drum. Direction and flow type are inherited from the surrounding headings. Applicability: Only when a steel chemical drum becomes waste within the boundary. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact steel-drum waste flow; generic steel scrap and steel-production waste candidates were rejected. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact steel-drum waste flow; generic steel scrap and steel-production waste candidates were rejected.

- flow_name: Waste steel chemical drum
- direction: output
- flow_type: waste
- applicability: Only when a steel chemical drum becomes waste within the boundary
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Weighed steel-drum mass sent to return, recycling, recovery, or disposal
- range_or_uncertainty: 0–0.2 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact steel-drum waste flow; generic steel scrap and steel-production waste candidates were rejected
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact steel-drum waste flow; generic steel scrap and steel-production waste candidates were rejected
- Selected flow: Waste steel chemical drum
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed steel-drum mass sent to return, recycling, recovery, or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater from cleaning; at plant; discharged to water (`equipment_cleaning_wastewater`)

Atomic flow name: Wastewater from cleaning; at plant; discharged to water. Direction and flow type are inherited from the surrounding headings. Applicability: Only when equipment cleaning generates an aqueous discharge; other wastewater streams require separate atomic rows. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Waste flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000. Source ID or status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12.

- flow_name: Wastewater from cleaning; at plant; discharged to water
- direction: output
- flow_type: waste
- applicability: Only when equipment cleaning generates an aqueous discharge; other wastewater streams require separate atomic rows
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Metered or batch-reconciled aqueous discharge mass, net of documented direct reuse
- range_or_uncertainty: 0–5 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; Tiangong direct-read identity verified 2026-08-12
- uuid_status: verified by flow-hybrid-search and Tiangong flow get; state_code 100; Waste flow; Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; version 01.01.000
- Selected flow: Wastewater from cleaning; at plant; discharged to water `f0402393-e82c-47e8-9cd8-a486c97f3e89`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or batch-reconciled aqueous discharge mass, net of documented direct reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Particulate matter released to air (`particulate_matter_to_air`)

Atomic flow name: Total particulate matter to air. Direction and flow type are inherited from the surrounding headings. Applicability: Only the uncaptured release after abatement; collected fibre dust remains a waste flow. Quantity basis: per 1 kg factory-gate output unless the amount rule states an intermediate measurement. Data source ID: collection protocol `cp_atomic_inventory_records`. UUID status: unresolved; flow-hybrid-search completed 2026-08-12; no exact total-particulate elementary flow; available PM0.2-PM2.5 and PM2.5-PM10 compartment-specific flows cannot be combined without measured size fractions. Source ID or status: `cp_atomic_inventory_records`; UUID lookup completed; no exact total-particulate elementary flow; available PM0.2-PM2.5 and PM2.5-PM10 compartment-specific flows cannot be combined without measured size fractions.

- flow_name: Total particulate matter to air
- direction: output
- flow_type: elementary
- applicability: Only the uncaptured release after abatement; collected fibre dust remains a waste flow
- quantity_basis: per 1 kg factory-gate prepared artificial staple fibres
- unit: kg
- value_or_formula_or_rule: Released particulate mass calculated from measured concentration and exhaust volume or from a transparent site-specific estimate
- range_or_uncertainty: 0–0.05 kg/kg factory-gate output
- data_source_id: `cp_atomic_inventory_records`
- source_id_or_status: `cp_atomic_inventory_records`; UUID lookup completed; no exact total-particulate elementary flow; available PM0.2-PM2.5 and PM2.5-PM10 compartment-specific flows cannot be combined without measured size fractions
- uuid_status: unresolved; flow-hybrid-search completed 2026-08-12; no exact total-particulate elementary flow; available PM0.2-PM2.5 and PM2.5-PM10 compartment-specific flows cannot be combined without measured size fractions
- Selected flow: Total particulate matter to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Released particulate mass calculated from measured concentration and exhaust volume or from a transparent site-specific estimate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg factory-gate prepared artificial staple fibres
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_atomic_inventory_records`
- Range: Provisional atomic-flow QA screen
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.05
  - Unit: kg/kg factory-gate output
  - Basis: broad candidate screen pending foreground or reviewed source evidence
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | All foreground operations | Avoid allocation by separately metering or subdividing routes, fibre families, products, and equipment wherever practicable. | `eu-environmental-footprint-2021` |
| `allocation_internal_rework` | Fibre returned within the same production system | Treat clean internal rework as an internal loop: record its mass for balance and quality control, but do not create a second input burden, output credit, or co-product. | `eu-textiles-bat-2022` |
| `allocation_secondary_fibre` | Saleable noil or other secondary fibre | First apply physical subdivision; if subdivision is not possible, use a documented causal physical relationship, and use economic allocation only when no defensible physical relationship exists. Record mass, quality, destination, price period, and sensitivity to the chosen method. | `eu-environmental-footprint-2021` |
| `allocation_waste` | Waste, recycling, recovery, and disposal | Do not allocate production burdens to waste merely because it is collected; model treatment and any recycling convention consistently with the goal and scope and disclose it. | `eu-textiles-bat-2022`; `eu-environmental-footprint-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_atomic_inventory_records` | `prepared_fibre_gate_to_gate` | Every atomic fibre-family input, energy carrier, water input, supplier formulation, packaging material, product, secondary product, waste stream, wastewater stream, and elementary release | Lot, batch, bill-of-material, meter, invoice, service, waste-transfer, sales, and emission records | lot_id; fibre_name; supplier; composition; incoming_form; moisture_basis; route_steps; atomic_flow_name; flow_direction; flow_type; Tiangong_uuid_or_unresolved_status; quantity; unit; meter_or_scale_id; formulation_SKU; package_material; product_mass; secondary_product_mass; waste_stream; treatment_destination; exhaust_flow; particulate_concentration; operating_time; allocation_driver | Create one record line per atomic flow and active route; use calibrated mass and utility measurement where practicable, supplier SKU and SDS/TDS for each formulation, service records for each refrigerant, and monitoring or a transparent calculation for releases | kg; kWh; Nm3; operating hour; concentration and exhaust volume as applicable | Each lot or campaign; utilities at meter interval; service and emissions at applicable event or monitoring interval | At least 12 consecutive representative months or every lot when production is shorter | Every included line and shared service, with fibre family and route tags | Never pool distinct fibre families, carriers, chemicals, packaging materials, wastes, wastewater streams, or emissions; reconcile stock changes and internal rework once, then normalize each atomic row to 1 kg output | Calibration and meter records, invoices, fibre certificates, recipes, SDS/TDS, packaging specifications, service logs, waste receipts, sales records, emission reports, route sheet, and signed mass/energy reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_specific_input` | Material, water, chemical, waste, and packaging records | specific amount = net amount assigned to declared route / net declared route output mass | assigned amount; route output mass | kg per kg process or factory-gate output | `eu-environmental-footprint-2021` |
| `calc_specific_electricity` | Electricity records | specific electricity = route-assigned kWh / net route output mass; subtract exported energy and unrelated site use | metered kWh; causal allocation driver; route output mass | kWh per kg output | `eu-textiles-bat-2022`; `eu-environmental-footprint-2021` |
| `calc_material_balance` | Every process and complete foreground route | closure = fibre input + applied water or retained formulation mass - prepared outputs - saleable secondary fibre - waste - net stock change; report absolute and percentage imbalance on a consistent moisture basis | fibre and formulation inputs; product and secondary outputs; waste; stock change; moisture data | reconciled mass balance and unexplained imbalance | `eu-textiles-bat-2022` |
| `calc_particulate_release` | Channelled particulate where monitored | released mass = concentration × dry or otherwise documented exhaust volume, with unit conversion and sampling-period extrapolation disclosed; do not subtract collected dust again | concentration; exhaust flow; operating time; abatement boundary | kg particulate released per kg route input or output | `eu-textiles-bat-2022`; `hse-textile-dust-guidance` |
| `calc_route_result` | Multi-family or multi-route sites | Calculate each fibre-family and route result separately; a combined result is allowed only as a documented production-mass-weighted aggregation of disclosed component results for a defined geography and period | component inventories; production masses; family and route identifiers | transparent production-weighted aggregate and component results | `eu-environmental-footprint-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and input identity | Retain supplier and lot evidence for accepted fibre name, composition, incoming state, output state, and route; resolve discrepancies before aggregation. | Fibre certificate, bill of materials, lot label, test record, and route sheet |
| `dq_route_specificity` | All foreground records | Tag every record to fibre family, route, machine or line, site, lot or campaign, and reporting period; disclose any shared-service allocation. | Production logs, meter map, and allocation worksheet |
| `dq_measurement` | Mass, moisture, water, energy, chemicals, waste, and emissions | Use calibrated measurement where practicable and retain device, method, unit, frequency, and uncertainty or estimation basis. | Calibration certificates, meter logs, laboratory reports, and method records |
| `dq_temporal` | Dataset period | Cover at least 12 consecutive representative months, or all production in a shorter campaign, and disclose shutdowns, trials, abnormal operation, and missing periods. | Production calendar, downtime log, and completeness statement |
| `dq_completeness` | Input-output inventory | Include all known material, water, energy, product, secondary product, waste, wastewater, and air-emission crossings relevant to the declared operations. | Signed input-output inventory and mass/energy reconciliation |
| `dq_estimate_replacement` | Every `reasoned_estimate` range | Treat the range only as a candidate QA or initialization screen; replace it with reviewed source-backed or foreground evidence before active or published use, or retain an explicit reviewer acceptance and limitation disclosure. | Review decision and replacement source or approved limitation |
| `dq_uuid_resolution` | Non-reference inventory flows | Select Tiangong flow UUIDs through verified lookup during review; never infer a UUID from a similar label or copy the generic reference-product UUID to unrelated flows. | Lookup evidence retained outside PCR content and reviewer sign-off |
| `dq_generic_flow_limit` | Reference product flow | Preserve the exact generic product UUID and disclose that it does not distinguish fibre family, route, quality, moisture, finish, or delivery form. | Required qualifier fields in the completed data package |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require product UUID `4f65996d-819a-4b51-8c1a-e3c3ecaa96b2`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, reference amount 1, and unit kg. |  |
| `validate_required_qualifiers` | Product metadata | Fail conformance when fibre family, composition, input and output state, route, moisture basis, finish condition, site, geography, production period, allocation, or packaging state is missing. | `eu-textile-fibre-names-1007-2011` |
| `validate_artificial_not_synthetic` | Category scope | Reject a dataset that uses only synthetic fibres or fails to establish a non-synthetic artificial fibre identity; blends shall report every component and remain within the declared product scope. | `eu-textile-fibre-names-1007-2011`; `un-cpc-3-0-2025` |
| `validate_route_gate` | Process map | Require receipt/opening/blending, packing/dispatch, and at least one qualifying preparation path: carding, combing after carding, or a specifically named other spinning-preparation operation. | `hse-textile-machinery-standards` |
| `validate_no_unconditional_average` | Aggregation | Reject an unqualified average across materially different fibre families or routes; any combined result shall expose component inventories, production weights, geography, and period. | `eu-environmental-footprint-2021` |
| `validate_mass_basis` | Mass balance | Require input and output moisture bases, consistent reporting periods, stock change, internal rework, secondary fibre, waste, and unexplained imbalance disclosure. | `eu-textiles-bat-2022` |
| `validate_environmental_crossings` | Emissions and waste | Require recorded or justified-not-applicable particulate, collected dust, fibre waste, packaging waste, water, wastewater, chemicals, and chemical waste for every active route. | `eu-textiles-bat-2022`; `hse-textile-dust-guidance` |
| `validate_allocation` | Multi-output operations | Require subdivision where practicable and a documented causal physical or, only when necessary, economic allocation method with mass, quality, destination, price period, and sensitivity for saleable secondary fibre. | `eu-environmental-footprint-2021` |
| `validate_estimates` | Provisional quantitative ranges | Flag every `reasoned_estimate` as provisional; active or published use requires replacement by reviewed evidence or explicit reviewer acceptance and disclosure. |  |
| `validate_uuid_limit` | Inventory identity | Fail if an unverified UUID is assigned to a non-reference flow or if the exact generic product UUID is treated as route-specific evidence. |  |
| `validate_atomic_flows` | Process inventory | Each inventory row shall represent one specific fibre, one energy carrier, one supplier formulation, one packaging material, one product, one waste stream, one wastewater stream, or one elementary flow; reject collection-type placeholder flows. | `eu-textiles-bat-2022` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground unit-process or aggregated gate-to-gate dataset for one declared artificial staple-fibre family and preparation route |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review and completion of required foreground evidence |
| allowed_use | Cradle-to-gate or broader LCA models needing prepared artificial staple fibre when fibre family, route, product state, technology, geography, period, allocation, and data quality match |
| excluded_use | Synthetic fibres; fibre manufacture; yarn or fabric production; unqualified cross-family or cross-route averages; comparative claims using candidate reasoned estimates as if they were reviewed benchmarks |
| required_metadata | Canonical PCR id; exact generic product-flow UUID and required qualifiers; fibre certificate and composition; input/output form; process map; site and geography; period; measurement and moisture basis; active operations; utilities; wastes and emissions; allocation; packaging; upstream dataset links; estimate flags |
| required_quality_disclosure | Coverage and representativeness; measurement and allocation methods; route-level completeness; mass-balance closure; missing or estimated flows; unresolved inventory UUIDs; abatement boundary; all retained reasoned estimates and their review status |
| update_trigger | New reviewed route-specific benchmark; new or changed Tiangong flow identity; regulatory or fibre-name change; material technology or recipe change; route or equipment change; supplier/fibre-family shift; estimate replacement; allocation change; or material deviation from the declared period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification (CPC) Version 3.0 Explanatory Notes, code 26220, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-12) | Classification scope and distinction from synthetic staple fibres and yarn |
| `eu-textile-fibre-names-1007-2011` | Official guidance (`official_guidance`) | Regulation (EU) No 1007/2011, especially Article 5 and Annex I, https://eur-lex.europa.eu/eli/reg/2011/1007/oj (retrieved 2026-08-12) | Accepted fibre names and descriptions for acetate, alginate, cupro, modal, protein, triacetate, viscose, lyocell, and distinction from synthetic fibres |
| `eu-textiles-bref-2023` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry (retrieved 2026-08-12) | Textile fibre-family context, fibre preparation scope, and boundary limitation that man-made fibre production is a distinct upstream activity |
| `eu-textiles-bat-2022` | Official guidance (`official_guidance`) | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508 (retrieved 2026-08-12) | Input-output inventory, materials, water, energy, wastewater, waste gas, waste, chemicals management, monitoring, and waste handling rules |
| `hse-textile-dust-guidance` | Official guidance (`official_guidance`) | UK Health and Safety Executive, Dust in the textiles industry, https://www.hse.gov.uk/textiles/dust.htm (retrieved 2026-08-12) | Dust relevance for opening, blending, carding, combing, extraction, filtration, cleaning, and released-versus-collected material distinction |
| `hse-textile-machinery-standards` | Official guidance (`official_guidance`) | UK Health and Safety Executive, British Standards and other documents applicable to textile machinery safety, section on BS EN ISO 11111-2, https://www.hse.gov.uk/textiles/british-standards.htm (retrieved 2026-08-12) | Process decomposition for opening, cleaning, blending, carding, converter/stretch-breaking, drawing, gilling, combing, roving, and related preparation equipment |
| `eu-environmental-footprint-2021` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-12) | Intermediate-product mass reference, company-specific foreground records, multi-route representativeness, subdivision and allocation hierarchy, and data-quality framing |
