---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.potatoes-otherwise-prepared-or-preserved
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Potatoes, otherwise prepared or preserved

## 1. Scope and Applicability

This PCR applies to the production of finished potato products that are prepared or preserved by routes other than preservation by vinegar or acetic acid, simple freezing, simple boiling or steaming in water, or drying. It covers products such as French fries, potato chips or crisps, mashed potato products, potatoes precooked in fat or oil, baked potato products, potato salad, kloesse, and roesti. Products may be frozen or non-frozen.

The foreground boundary starts with receipt of potatoes, ingredients, packaging, and utilities at the manufacturing facility and ends with net finished product released at the plant gate in its declared market state. It includes actual preparation, transformation, optional quick freezing and cold storage, packaging, cleaning and sanitation, on-site waste handling, wastewater generation, and direct emissions. Upstream production of purchased inputs is represented by linked background datasets. Distribution, retail, consumer cooking or reheating, and end-of-life are outside this foreground package unless explicitly added by a downstream study.

The broad category contains materially different recipes, moisture states, cut styles, cooking technologies, and frozen or non-frozen routes. A conforming data package shall therefore declare the product form and route qualifiers and shall use site- and product-specific foreground records rather than a category-average recipe.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.potatoes-otherwise-prepared-or-preserved |
| classification_refs | CPC 3.0: 21394, Potatoes, otherwise prepared or preserved |
| covered_products | French fries; potato chips or crisps; mashed potato products; potatoes precooked in fat or oil; baked potato products; potato salad; kloesse; roesti; other finished potato products within the same semantic boundary; frozen and non-frozen presentations |
| excluded_products | Raw potatoes; raw frozen potatoes; potatoes merely boiled or steamed in water and frozen; potatoes preserved by vinegar or acetic acid; dried potatoes; starch and other products assigned to another product category |
| representative_product | Net finished potato product at the manufacturing plant gate, with product form, recipe class, cooking or preservation route, packaging state, and frozen or non-frozen state declared |
| production_route | Receipt and preparation of potatoes; route-specific size reduction, formulation, cooking, frying, baking, mashing, mixing, or other preservation; optional quick freezing and cold storage; packaging and plant-gate release |
| market_state | Finished manufactured product, packaged or bulk as declared, frozen or non-frozen, at plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished prepared or preserved potato product in its declared recipe, physical form, packaging state, and frozen or non-frozen market state |
| How much | 1 kg net finished product |
| How well | Conforming to the declared product specification and saleable release criteria; for quick-frozen French fried potatoes, relevant Codex identity, composition, quality, and temperature criteria apply |
| How long or cycle | One production batch through plant-gate release; declared shelf life is metadata and is not included as a use-duration service in this plant-gate foreground package |
| reference_flow_link | The reference flow is the net mass of saleable finished product released at the plant gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Potatoes, otherwise prepared or preserved `b158bec4-e459-437d-8106-88d2f3d92c8a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product form; recipe or ingredient class; cooking or preservation route; frozen or non-frozen state; packaging format and net content; production geography; technology; allocation status; plant-gate release condition |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, reference flow comments, product descriptions, or an equivalent data-package field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net saleable finished product at plant-gate release, excluding pallet and transport packaging unless that packaging is part of the declared sale unit. |
| `net_product_mass` | Product yield and reference normalization | Mass | kg | Measure net product mass after final processing and before plant-gate release; separately record product retained for rework, off-specification product, samples, and losses. |
| `batch_to_reference_conversion` | All foreground inputs and outputs | Quantity-specific property | Quantity-specific SI unit | Normalize a batch quantity as `recorded batch quantity / net saleable batch output in kg`; preserve the original record and conversion factor. |
| `frozen_temperature_condition` | Quick-frozen products | Temperature | degree Celsius | When the declared market state is quick frozen, record thermal-centre temperature at completion of freezing and storage or dispatch temperature; the product shall reach -18 degree Celsius or colder after thermal stabilization, subject only to documented competent-authority tolerances. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Potatoes, other ingredients, processing aids, packaging materials, and utilities received at the manufacturing-facility gate, each with quantity, state, supplier geography, and upstream dataset reference declared |
| starting_condition_role | Foreground manufacturing input gate |
| product_classification_scope | Finished products semantically covered by CPC 3.0 code 21394; classification is scope context and does not replace product-form and route declarations |
| recursive_input_rule | If a purchased semi-finished input is itself in this PCR category, record it once as a same-category product input, require a supplier-gate dataset for its upstream production, disclose its completed processing state, and do not recreate those upstream stages inside the receiving foreground process |
| upstream_dataset_requirement | Link representative upstream datasets for potatoes, ingredients, processing aids, energy carriers, water supply where modelled as a product flow, packaging, and same-category semi-finished inputs; disclose proxies, geography, technology, time period, and excluded data gaps |
| disclosure | Declare product form, recipe class, actual unit operations, frozen state, packaging state, plant location, reference period, allocation method, cut-offs, rework, co-products, wastes, wastewater treatment route, direct emissions, and all deviations from this boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | Foreground package | Include receiving and preparation, route-specific transformation, optional freezing and cold storage, packaging, cleaning and sanitation, on-site waste and wastewater handling, and direct emissions through plant-gate product release. Keep distribution, retail, use, and end-of-life outside this foreground package unless a downstream study explicitly extends it. | `eu-pef-2021-2279` |
| `boundary_complete_inventory` | Foreground processes | Record all known inputs and outputs, including products, co-products, water, energy, ingredients, packaging, wastes, wastewater, and emissions to air, water, and soil. Identify every co-product, by-product, rework stream, and waste stream. | `eu-pef-2021-2279` |
| `boundary_route_declaration` | Product-specific route | Include only unit operations actually used, but declare the disposition of sorting, washing, peeling, cutting, blanching, cooking, frying, baking, mashing, mixing, cooling, freezing, and storage so omission is distinguishable from non-applicability. | `codex-cxs-114-1981`; `codex-cxc-8-1976` |
| `boundary_frozen_chain` | Quick-frozen products | Include quick freezing and on-site frozen storage, electricity, refrigerant make-up and leakage where applicable, temperature monitoring, and product losses until plant-gate dispatch; downstream refrigerated transport is outside this package but shall be linked by the downstream model. | `codex-cxc-8-1976` |
| `boundary_cutoff` | Any proposed exclusion | Avoid cut-off. If a downstream PEF-conformant study applies a cut-off, use screening evidence, keep cumulative excluded material, energy, and environmental significance within the applicable 3% rule, and explicitly justify every exclusion; the foreground package itself shall retain known material flows. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receiving_and_preparation` | Raw material receiving and potato preparation | required | Always include for facility-processed potatoes; if a same-category semi-finished input bypasses an operation, declare the bypass and supplier dataset | Foreground receiving, sorting, cleaning, peeling, and size-reduction preparation | kg prepared potato intermediate |
| `product_transformation` | Product-specific transformation | required | Include the actual formulation and preservation operations used by the declared product route | Foreground cooking, frying, baking, mashing, mixing, cooling, or other transformation | kg transformed product before optional freezing and final packaging |
| `quick_freezing_and_cold_storage` | Quick freezing and on-site cold storage | conditional | Include when the declared product is quick frozen or held frozen before plant-gate release | Foreground freezing and frozen storage | kg frozen product released to final packaging or dispatch |
| `packaging_and_release` | Packaging and plant-gate release | required | Always include; declare bulk, primary, secondary, and reusable packaging actually used | Foreground packaging, final quality release, and reference-flow output | 1 kg net saleable finished product |

### Process: Raw material receiving and potato preparation (`receiving_and_preparation`)

#### Inputs

##### Product flows

###### Received potatoes or same-category semi-finished potato input (`received_potato_input`)

Record the measured mass of potatoes or disclosed same-category semi-finished potato material entering preparation. Retain supplier, lot, origin, storage state, and upstream dataset identity.

- Selected flow: Raw potatoes or declared same-category semi-finished potato input; resolve the product-specific Tiangong UUID before publication
- Flow property / unit: Mass / kg
- Amount rule: weigh received usable and rejected quantities by lot and normalize the accepted input to net finished product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `unstats-cpc-3-0`
- Range: Provisional category-wide received-potato screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg net saleable finished product across high-moisture formulated products through low-moisture fried products
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation and sanitation water (`preparation_water`)

Record metered or defensibly allocated water crossing the preparation boundary for washing, peeling, transfer, and sanitation. Separate recirculated internal water from fresh make-up water.

- Selected flow: Process water; resolve the site-appropriate Tiangong UUID before publication
- Flow property / unit: Mass / kg
- Amount rule: meter fresh water by preparation line and allocate only when line-level subdivision is unavailable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-pef-2021-2279`
- Range: Provisional category-wide preparation-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: fresh water per 1 kg net saleable finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Prepared potato intermediate (`prepared_potato_intermediate`)

Record the measured mass transferred to the declared transformation route after sorting, cleaning, peeling, and cutting operations that actually apply.

- Selected flow: Prepared potato intermediate internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass to `product_transformation`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared potato intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass`
- Sources: `codex-cxs-114-1981`; `codex-cxc-8-1976`

##### Waste flows

###### Sorting, peel, trim, and preparation residues (`preparation_residues`)

Record residues by measured mass and disposition. Classify a stream as a co-product only when it is intentionally produced, quality-controlled, and leaves with a documented beneficial use and economic value; otherwise record it as waste.

- Selected flow: Potato preparation residues; resolve waste or co-product UUIDs by actual disposition before publication
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing mass by residue class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `eu-pef-2021-2279`
- Range: Provisional preparation-residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 4
  - Unit: kg
  - Basis: per 1 kg net saleable finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater sent to internal treatment, sewer, or external treatment, net of internally recirculated water; retain measured quantity and destination.

- Selected flow: Wastewater; resolve the destination-specific Tiangong waste flow before publication
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or water-balance calculation from collected make-up, product carryover, evaporation, and recirculation records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_wastewater`
- Sources: `eu-pef-2021-2279`
- Range: Provisional preparation-wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg net saleable finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Product-specific transformation (`product_transformation`)

#### Inputs

##### Product flows

###### Prepared potato intermediate (`transformation_potato_input`)

Record the internal mass transferred from preparation and reconcile it to the preceding process output.

- Selected flow: Prepared potato intermediate internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from `receiving_and_preparation`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg transformed product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass`
- Sources: `codex-cxs-114-1981`; `codex-cxc-8-1976`

###### Ingredients, edible oil, and processing aids (`recipe_inputs`)

Record every recipe ingredient and processing aid separately, including edible oil or fat, salt, sugars, seasonings, dairy or other formulation ingredients, and processing aids when used. Do not use this aggregate card as a single combined exchange in a completed dataset.

- Selected flow: Product-specific ingredient flows; resolve each Tiangong UUID before publication
- Flow property / unit: Mass / kg
- Amount rule: actual batch issue minus documented return to stock, recorded separately for each ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `codex-cxs-114-1981`; `eu-pef-2021-2279`
- Range: Provisional combined recipe-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1.5
  - Unit: kg
  - Basis: combined non-potato recipe inputs per 1 kg net saleable finished product; completed datasets shall disaggregate ingredients
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity used for transformation (`transformation_electricity`)

Record metered electricity for route-specific transformation equipment and line auxiliaries, with shared loads subdivided or allocated transparently.

- Selected flow: Electricity supply appropriate to site and voltage; resolve Tiangong UUID before publication
- Flow property / unit: Energy / kWh
- Amount rule: meter by line or allocate shared metering using documented equipment runtime and power data
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional transformation-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 5
  - Unit: kWh
  - Basis: per 1 kg net saleable finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal energy and fuels used for transformation (`transformation_thermal_energy`)

Record steam, hot water, direct fuel, or other thermal-energy carriers used for blanching, cooking, frying, baking, drying incidental to the covered route, and sanitation; separate carrier identities and units.

- Selected flow: Route-specific fuel, steam, or heat supply; resolve each Tiangong UUID before publication
- Flow property / unit: Energy / MJ
- Amount rule: measure fuel or heat supply and convert using documented net calorific value or metered delivered heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional transformation-thermal-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: MJ
  - Basis: delivered thermal energy per 1 kg net saleable finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Transformed potato product before optional freezing and final packaging (`transformed_product`)

Record measured saleable and non-saleable output after the actual cooking, frying, baking, mashing, mixing, cooling, or other preservation route.

- Selected flow: Transformed potato product internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass to optional freezing or final packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg transformed product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass`
- Sources: `codex-cxs-114-1981`; `codex-cxc-8-1976`

##### Waste flows

###### Transformation residues and off-specification product (`transformation_waste`)

Record spent oil, crumbs, filter residues, off-specification product, and other route-specific waste separately by composition and destination; record internally reworked product separately from waste.

- Selected flow: Route-specific transformation waste; resolve Tiangong UUIDs by material and destination before publication
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing mass by waste class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `eu-pef-2021-2279`
- Range: Provisional transformation-waste screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg net saleable finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct transformation emissions (`direct_transformation_emissions`)

Record pollutant-specific emissions from on-site combustion, frying exhaust, or other direct release points using measurements or facility activity data and documented factors. Do not aggregate different elementary flows into one exchange.

- Selected flow: Pollutant-specific elementary flows; resolve each Tiangong UUID before publication
- Flow property / unit: Mass / kg
- Amount rule: direct measurement or `site activity data x documented emission factor` for each pollutant and compartment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-pef-2021-2279`

### Process: Quick freezing and on-site cold storage (`quick_freezing_and_cold_storage`)

#### Inputs

##### Product flows

###### Product entering quick freezing (`freezing_product_input`)

Record measured mass and entry temperature of transformed product entering the quick-freezing equipment.

- Selected flow: Transformed potato product internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering freezing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg frozen product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_chain_records`
- Sources: `codex-cxc-8-1976`

###### Freezing and cold-storage electricity (`frozen_chain_electricity`)

Record electricity used by quick-freezing equipment and on-site frozen storage through plant-gate release, including defrost and auxiliary loads.

- Selected flow: Electricity supply appropriate to site and voltage; resolve Tiangong UUID before publication
- Flow property / unit: Energy / kWh
- Amount rule: meter freezing and cold-store electricity and allocate shared cold storage using documented product mass and residence time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable frozen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `codex-cxc-8-1976`; `eu-pef-2021-2279`
- Range: Provisional frozen-chain electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 3
  - Unit: kWh
  - Basis: per 1 kg net saleable frozen product through plant-gate release
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Quick-frozen potato product (`quick_frozen_product`)

Record output mass, thermal-centre temperature after stabilization, cold-store residence time, and dispatch temperature.

- Selected flow: Quick-frozen potato product internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred to final packaging or dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg quick-frozen product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_chain_records`
- Sources: `codex-cxs-114-1981`; `codex-cxc-8-1976`

##### Waste flows

##### Elementary flows

###### Refrigerant releases (`refrigerant_releases`)

Record each refrigerant emitted from quick-freezing and cold-storage systems using verified make-up records and inventory reconciliation; do not assume zero leakage without records.

- Selected flow: Refrigerant-specific emission to air; resolve each Tiangong elementary-flow UUID before publication
- Flow property / unit: Mass / kg
- Amount rule: calculated refrigerant loss from opening and closing inventory, purchases, recovery, and equipment service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable frozen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-pef-2021-2279`

### Process: Packaging and plant-gate release (`packaging_and_release`)

#### Inputs

##### Product flows

###### Product entering final packaging (`packaging_product_input`)

Record the measured mass entering final packaging, identifying whether it comes from non-frozen transformation or quick-frozen storage.

- Selected flow: Transformed or quick-frozen potato product internal product flow
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering final packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_mass`
- Sources: `codex-cxs-114-1981`

###### Primary, secondary, and bulk packaging (`packaging_materials`)

Record each packaging material separately by material, format, net mass, recycled-content claim when verified, and reuse count where applicable. Exclude transport pallets only when outside the declared sale unit and disclose that exclusion.

- Selected flow: Material-specific packaging product flows; resolve each Tiangong UUID before publication
- Flow property / unit: Mass / kg
- Amount rule: packaging bill of materials verified against purchases, stock changes, and packed-unit counts
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-cxs-114-1981`; `eu-pef-2021-2279`
- Range: Provisional packaging-mass screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: packaging per 1 kg net saleable finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Net finished product at plant gate (`reference_product_output`)

This is the quantitative reference output. Record exactly 1 kg net saleable finished product in the declared product form, route, packaging state, and frozen or non-frozen release condition.

- Selected flow: Potatoes, otherwise prepared or preserved `b158bec4-e459-437d-8106-88d2f3d92c8a`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net saleable finished product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unstats-cpc-3-0`

##### Waste flows

###### Packaging scrap and rejected packed product (`packaging_scrap`)

Record packaging scrap and rejected packed product separately by material and destination; return-to-process product is rework, not waste.

- Selected flow: Material-specific packaging waste and rejected product flows; resolve Tiangong UUIDs before publication
- Flow property / unit: Mass / kg
- Amount rule: measured outgoing mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `eu-pef-2021-2279`
- Range: Provisional packaging-scrap screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg net saleable finished product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | Shared preparation, transformation, freezing, storage, packaging, and utility systems | First avoid allocation by sub-metering, separate batch records, and process subdivision. Collect inventory only for operations directly attributable to the declared product whenever subdivision is feasible. | `eu-pef-2021-2279` |
| `allocation_physical` | Unavoidable multifunctional processes | If subdivision or system expansion is not feasible, use a documented physical relationship that reflects causality, such as measured processing time, delivered heat, refrigeration load, or another verified driver. Mass allocation alone is not automatically causal. | `eu-pef-2021-2279` |
| `allocation_other_relationship` | Multifunctionality without a defensible physical relationship | Use economic or another relationship only after documenting why subdivision, system expansion, and physical allocation are not feasible; retain prices, reference period, currency, and sensitivity evidence. | `eu-pef-2021-2279` |
| `allocation_residue_status` | Potato residues, spent oil, rework, and off-specification product | Distinguish internal rework, saleable co-product, recyclable material, and waste using actual disposition and economic status. Do not credit avoided production inside this foreground inventory; any downstream substitution or system expansion shall be a separate transparent scenario. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_inputs` | `receiving_and_preparation`; `product_transformation` | potatoes, ingredients, oils, processing aids | weighbridge, scale, batch issue, supplier lot, stock ledger | material identity; supplier; lot; origin; opening stock; receipts; batch issue; returns; closing stock; measured mass | calibrated scales plus stock reconciliation | kg | each lot and batch; monthly reconciliation | declared representative production period covering normal product mix | all facilities and lines in the dataset | sum net consumed mass by material and divide by net saleable output | calibration certificates; supplier records; inventory reconciliation; missing-data log |
| `cp_water_and_wastewater` | `receiving_and_preparation`; `product_transformation` | fresh water and wastewater | meter and water-balance records | meter id; opening and closing reading; make-up water; recirculation; discharge; evaporation estimate; product carryover; treatment destination | line meter where available; otherwise documented facility balance and causal allocation | kg or m3 with density conversion | continuous or shift readings; monthly reconciliation | declared representative production period | all included preparation, transformation, and sanitation operations | reconcile input, reuse, discharge, evaporation, and product carryover; normalize to reference output | meter calibration; balance closure; discharge invoice or treatment log |
| `cp_energy_records` | `product_transformation`; `quick_freezing_and_cold_storage`; `packaging_and_release` | electricity, fuel, steam, and heat | utility meters, invoices, equipment runtime | carrier; meter id; readings; fuel quantity; calorific value; steam or heat quantity; runtime; product mass; storage residence time | sub-metering preferred; otherwise engineering allocation using verified runtime or refrigeration load | kWh, MJ, or carrier unit with conversion | continuous or batch readings; monthly reconciliation | declared representative production period including seasonal frozen-storage conditions where applicable | all included equipment and shared utilities | subtract non-production loads; subdivide or apply documented causal driver; normalize to reference output | meter calibration; invoices; runtime logs; conversion-factor source |
| `cp_product_mass` | all processes | internal transfers, saleable output, rework, and losses | calibrated scale and production ledger | batch id; product form; input mass; transfer mass; saleable output; rework; samples; off-specification mass | weigh each transfer or reconcile calibrated continuous mass-flow measurement | kg | each batch | full declared production period | all included product lines | reconcile consecutive process outputs and normalize to exactly 1 kg net saleable output | scale calibration; batch mass balance; release records |
| `cp_waste_outputs` | all processes | residues, off-specification product, spent oil, wastewater solids, packaging scrap | scales, waste manifests, internal treatment logs | material; mass; moisture or concentration where relevant; destination; rework status; economic value; transporter | weigh by stream and retain destination evidence | kg | each removal or batch; monthly reconciliation | full declared production period | all included lines and waste-handling areas | sum by material and disposition; do not net saleable co-products against waste | scale calibration; manifests; invoices; treatment acceptance records |
| `cp_direct_emissions` | `product_transformation` | direct emissions to air, water, and soil | stack or effluent measurement and activity-factor calculation | pollutant; compartment; concentration; flow rate; operating time; fuel use; factor; factor source | direct measurement preferred; otherwise site activity multiplied by documented factor | pollutant-specific kg | monitoring schedule or each operating period | period representative of actual controls and product mix | all included direct release points | calculate by pollutant and compartment, then normalize to reference output | laboratory accreditation; instrument calibration; sampling plan; factor reference |
| `cp_frozen_chain_records` | `quick_freezing_and_cold_storage` | mass, entry temperature, thermal-centre temperature, storage and dispatch condition | calibrated temperature sensor, batch record, cold-store log | batch id; entry time and temperature; freezer exit time; thermal-centre temperature after stabilization; storage duration; air temperature; dispatch temperature; product mass | continuous air monitoring plus validated direct or indirect product-temperature checks | degree Celsius, hour, kg | each batch plus continuous cold-store monitoring | all frozen batches in the declared period | all quick-freezing equipment and cold stores serving included batches | retain batch extrema and calculate mass-weighted storage duration; never average away a temperature excursion | sensor calibration; alarm and deviation log; corrective-action record |
| `cp_refrigerant_records` | `quick_freezing_and_cold_storage` | refrigerant make-up, recovery, and release | purchase, inventory, recovery, and maintenance records | refrigerant identity; opening stock; purchases; charging; recovery; closing stock; equipment id | annual or campaign inventory reconciliation supported by service records | kg | each service event and period-end reconciliation | full declared period | all freezing and cold-storage equipment | loss = opening stock + purchases + charged returns - closing stock - recovered or transferred quantity | service invoice; cylinder weights; leak test; reconciliation |
| `cp_packaging_records` | `packaging_and_release` | packaging materials and packed units | bill of materials, purchase and stock records, pack counter | material; component mass; units packed; opening stock; receipts; scrap; closing stock; reuse count | component weighing plus stock and unit-count reconciliation | kg and count | each packaging specification; monthly reconciliation | full declared production period | all packaging formats included in the dataset | calculate material mass per net product mass by format, then aggregate using actual output shares | packaging specification; supplier declaration; stock reconciliation; reuse log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_to_reference_mass` | Every foreground amount | `normalized amount = recorded quantity / net saleable finished-product mass`; convert the result to the required SI unit and retain original quantity and conversion | recorded quantity; net saleable finished-product mass; conversion factor | amount per 1 kg reference product | `eu-pef-2021-2279` |
| `batch_mass_balance` | Each process and whole foreground package | Reconcile all material inputs with product, co-product, rework, waste, wastewater-carried material where measured, emissions, and documented stock change; investigate rather than silently allocate unexplained imbalance | material inputs; outputs; rework; waste; stock change; measured releases | disclosed balance closure and unexplained difference | `eu-pef-2021-2279` |
| `wastewater_balance` | Preparation and transformation wastewater | `discharge = fresh make-up + imported water in materials - water in product - evaporation - exported or recovered water - stock change`, using measured terms and disclosing estimated terms | water meter; recirculation; product moisture where available; evaporation; recovered water | wastewater quantity by destination | `eu-pef-2021-2279` |
| `direct_emission_calculation` | Pollutant-specific releases without continuous direct measurement | `emission = site activity x documented emission factor x (1 - measured control efficiency where applicable)`; never reuse one factor across different pollutants or technologies without justification | activity record; factor; control efficiency; operating period | pollutant mass by compartment per reference flow | `eu-pef-2021-2279` |
| `refrigerant_balance` | Freezing and cold-storage refrigerants | Reconcile opening stock, purchases, charges, recovered mass, transfers, and closing stock by refrigerant; positive unexplained loss is recorded as emission to air | refrigerant inventory and service records | refrigerant-specific release per reference flow | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and all batches | Product form, recipe class, actual unit operations, packaging format, frozen state, plant, geography, and reference period shall be traceable to production and release records. | product specification; bill of materials; batch record; release record |
| `dq_measurement` | Mass, water, energy, temperature, and emissions | Use calibrated meters or documented engineering calculations; retain units, conversion factors, meter coverage, allocation drivers, and missing-data treatment. | calibration certificates; meter map; calculation workbook or machine-readable equivalent |
| `dq_temporal_coverage` | Foreground averages | Use a declared period representative of normal operation, product mix, maintenance, and seasonal cold-storage conditions; disclose shutdowns, start-up, atypical campaigns, and data gaps. | production calendar; meter and batch coverage report; missing-data log |
| `dq_completeness` | All foreground processes | Demonstrate coverage of all known product, co-product, material, water, energy, packaging, waste, wastewater, and direct elementary flows; explicitly justify exclusions and quantify applicable cut-offs. | flow checklist; mass and water balances; source and proxy register; exclusion log |
| `dq_representativeness` | Foreground and linked upstream datasets | Assess technological, geographical, and time-related representativeness and precision; disclose proxies and any mismatch to the declared route. | dataset metadata; DQR assessment; proxy justification |
| `dq_frozen_chain` | Quick-frozen product | Retain calibrated temperature records, excursions, corrective actions, and storage duration for every included frozen batch; do not average away nonconforming excursions. | sensor calibration; batch and cold-store log; deviation and disposition record |
| `dq_allocation` | Shared or multifunctional processes | Retain evidence that subdivision was attempted and document every driver, factor, price, reference period, and sensitivity used for remaining allocation. | meter map; allocation workbook; price record; sensitivity result |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | Reference output | Confirm the quantitative reference is exactly 1 kg net saleable product using flow `b158bec4-e459-437d-8106-88d2f3d92c8a`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, mass unit group `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. | `unstats-cpc-3-0` |
| `validate_scope_and_qualifiers` | Product identity | Reject a package that omits product form, recipe or ingredient class, actual cooking or preservation route, frozen state, packaging format, production geography, technology, allocation status, or plant-gate release condition, or that falls in an explicitly excluded potato category. | `unstats-cpc-3-0`; `codex-cxs-114-1981` |
| `validate_process_route` | Process map and inventory | Confirm every required process is represented, the conditional frozen process matches the declared product state, and every potentially applicable unit operation has an explicit included, not-applicable, or supplier-completed disposition. | `codex-cxs-114-1981`; `codex-cxc-8-1976` |
| `validate_mass_and_water_balance` | Foreground inventory | Require process and whole-package mass reconciliation plus a water balance when water or wastewater is material; unresolved differences shall be findings, not silently allocated amounts. | `eu-pef-2021-2279` |
| `validate_frozen_condition` | Quick-frozen product | Confirm thermal-centre temperature reached -18 degree Celsius or colder after stabilization and that on-site cold storage and dispatch records demonstrate temperature control; report every excursion and disposition. | `codex-cxs-114-1981`; `codex-cxc-8-1976` |
| `validate_allocation` | Shared and multifunctional processes | Confirm the hierarchy of subdivision or system expansion, physical relationship, then other relationship was followed and documented; verify residue status and prevent undisclosed avoided-burden credits. | `eu-pef-2021-2279` |
| `validate_completeness_and_cutoff` | Foreground and linked datasets | Confirm all known inputs and outputs are addressed, proxies and exclusions are disclosed, and any downstream PEF cut-off is screened, justified, and within the applicable cumulative threshold. | `eu-pef-2021-2279` |
| `validate_source_traceability` | Records, factors, and generated dataset | Confirm foreground records are traceable to calibration, supplier, meter, batch, waste, emission, and temperature evidence; confirm every external factor has a stable source and that no provisional reasoned estimate is presented as observed data. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground manufacturing data package normalized to 1 kg net finished potato product at plant gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Product-specific process and lifecycle-model construction when route, recipe, technology, geography, frozen state, packaging, allocation, temporal coverage, and upstream links are compatible and disclosed |
| excluded_use | Unqualified category-average claims; agricultural potato production without an upstream dataset; simple frozen, boiled, steamed, vinegar-preserved, or dried potato products outside this scope; consumer cooking; distribution, retail, or end-of-life claims not separately modelled; environmental declarations based on provisional reasoned-estimate ranges |
| required_metadata | PCR id and version used; reference product UUID; product form; recipe or ingredient class; unit operations; frozen state; packaging format; net content; plant and geography; technology; reference period; source and proxy register; upstream dataset identities; allocation and cut-off declarations; data-quality assessment |
| required_quality_disclosure | Meter and record coverage; calibration evidence; mass and water balance closure; temporal, technological, and geographical representativeness; missing data; proxy use; allocation sensitivity; co-product and waste disposition; temperature excursions for frozen product; status of provisional ranges |
| update_trigger | Material change in product specification, recipe, yield, processing technology, energy or refrigerant system, frozen-state management, packaging, supplier geography, allocation relationship, regulatory or Codex requirement, data source, or representative production period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-0` | dataset | United Nations Statistics Division, Central Product Classification Version 3.0, official classification resources, https://unstats.un.org/unsd/classifications/Econ (retrieved 2026-08-11) | Product-category identity, inclusion and exclusion boundary, and classification context |
| `codex-cxs-114-1981` | standard | Codex Alimentarius, CXS 114-1981, Standard for Quick Frozen French Fried Potatoes, amended 2019, https://workspace.fao.org/sites/codex/Standards/CXS%20114-1981/CXS_114e.pdf (retrieved 2026-08-11) | Representative French-fry product definition, sorting, washing, peeling, cutting, frying, quick-freezing, composition, quality, packaging, and release-condition rules |
| `codex-cxc-8-1976` | official_guidance | Codex Alimentarius, CXC 8-1976, Code of Practice for the Processing and Handling of Quick Frozen Foods, revised 2008, https://workspace.fao.org/sites/codex/Standards/CXC%208-1976/CXC_008e.pdf (retrieved 2026-08-11) | Conditional frozen-route process decomposition, cold-chain temperature control, monitoring, storage, and traceability |
| `eu-pef-2021-2279` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, ELI http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11) | Functional unit, reference flow, system boundary, complete foreground data, allocation hierarchy, cut-off, data collection, calculation, quality, and validation rules |
