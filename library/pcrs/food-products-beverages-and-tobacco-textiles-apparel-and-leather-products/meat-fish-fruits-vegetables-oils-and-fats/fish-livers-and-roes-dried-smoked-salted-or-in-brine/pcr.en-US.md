---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-livers-and-roes-dried-smoked-salted-or-in-brine
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Fish livers and roes dried, smoked, salted or in brine

## 1. Scope and Applicability

This PCR applies to edible fish livers and fish roes preserved by one or more of drying, smoking, dry salting, wet salting, or holding in brine, and delivered as a finished product at the preserving facility gate. Products may be whole, portioned, loose, formed, or packed, provided that fish liver or roe remains the defining product and the preservation route is declared.

The foreground boundary begins when identified fish livers or roes arrive at the preserving facility in a declared fresh, chilled, or frozen state. It includes receipt and preparation, the actual preservation route, route-specific intermediate holding, packaging, and storage at the facility before dispatch. Upstream fishing or aquaculture, primary fish processing, production of ingredients and packaging, and inbound transport are represented by upstream datasets for inputs rather than re-created inside the foreground process.

Products outside scope include fresh or merely chilled fish livers and roes; frozen products without drying, smoking, salting, or brining; canned or otherwise hermetically heat-processed products; caviar or other roe preparations whose defining treatment or formulation is outside the declared preservation routes; composite foods in which liver or roe is not the defining product; and livers or roes from non-fish aquatic animals.

This candidate PCR specifies LCA data-production rules, not legal food-safety acceptance limits. The data package shall identify applicable product specifications and food-safety controls for its species, product form, preservation route, packaging atmosphere, storage condition, and market.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.fish-livers-and-roes-dried-smoked-salted-or-in-brine |
| classification_refs | CPC 3.0: 21227, exact mapping context (`unsd-cpc-3-0-21227`) |
| covered_products | Edible fish livers and fish roes dried, smoked, salted, or held in brine, including products using more than one of those preservation operations |
| excluded_products | Fresh-only, chilled-only, or frozen-only livers and roes; canned products; non-fish livers or roes; composite foods not defined by preserved fish liver or roe; products whose defining transformation is outside the named preservation routes |
| representative_product | Packaged edible fish roe or fish liver preserved by a declared combination of salting or brining and drying or smoking, ready for dispatch from the preserving facility |
| production_route | Receipt and preparation; declared dry-salting or brining and/or drying and/or smoking; route-specific holding; packaging; facility storage |
| market_state | Finished preserved product at the preserving facility gate; packaging atmosphere, storage temperature class, and intended chilled, frozen, or shelf-stable handling are declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of edible fish liver or fish roe preserved by drying, smoking, salting, or brining in the declared product and packaging state |
| How much | 1 kg net mass of finished product, excluding transport packaging unless it is part of the sold unit |
| How well | Conforming to the declared species, anatomical product, preservation route, salt or brine condition, moisture or drying state, smoke treatment, packaging atmosphere, and storage condition |
| How long or cycle | One production lot through release at the preserving facility gate; any storage duration included before dispatch is declared |
| reference_flow_link | `rf_preserved_fish_livers_roes_net_mass` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net mass of finished fish liver or roe product |
| Reference product flow | Fish livers and roes dried, smoked, salted or in brine `ab283f96-8c07-4a11-8904-4d5a6542d1fe` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | fish species or species group; liver or roe; incoming state (fresh or chilled or frozen); preservation route or route combination; salting state (dry-salted or wet-salted or brined); drying and smoking technology when applicable; product moisture or equivalent drying-state specification; packaging material and atmosphere; storage temperature class and duration; net product mass basis; production geography and period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net finished product after the declared preservation operations and before dispatch. Exclude separate transport packaging from product mass and inventory it separately. |
| `wet_dry_basis_disclosure` | Product moisture, salt, and yield observations | Mass fraction or concentration appropriate to the measured property | Declared unit | Declare whether each moisture, dry-matter, salt, or concentration result is on a wet-product, dry-matter, water-phase, or solution basis; do not convert between bases without recorded inputs and a stated formula. |
| `ingredient_solution_mass` | Brine and other aqueous ingredient solutions | Mass | kg | Record the mass and composition of make-up solution entering the process, recovered solution returned to use, and spent solution leaving the process as separate quantities; do not report only nominal tank capacity. |
| `energy_carrier_separation` | Electricity, thermal energy, and direct fuel | Energy or mass appropriate to the carrier | kWh, MJ, or kg | Keep purchased electricity, purchased heat, and combusted fuel separate. Record actual carrier, amount, and conversion factor; do not sum unlike energy units without an explicit calculation rule. |
| `packaging_mass_separation` | Primary, secondary, and transport packaging | Mass | kg | Measure packaging by material and level per reference flow. Packaging included in the sold unit remains an inventory input but is excluded from the net fish liver or roe mass. |

## 5. System Boundary

The foreground system covers operations controlled by the preserving facility from receipt of identified livers or roes through release of the finished packaged product. Include actual cleaning, sorting, membrane or tissue removal, draining, thawing, salting, brining, drying, smoking, cooling, intermediate storage, packaging, finished-product storage, sanitation-related process water, on-site waste handling, and on-site wastewater treatment when performed and attributable.

Use upstream datasets for incoming fish livers or roes, salt and other ingredients, water, energy carriers, fuels, packaging materials, refrigerants, transport services, and treatment services. Distribution after the facility gate, retail, consumer preparation, consumption, and end-of-life of packaging are outside the foreground boundary unless a study explicitly adds them as downstream scenarios.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_actual_route` | Foreground preservation system | Include every preparation, preservation, packaging, holding, and on-site treatment operation actually used for the declared lot; do not insert an unused drying, smoking, salting, or brining route. | `codex-cxc-52-2003`; `fao-fish-processing-storage` |
| `boundary_upstream_inputs` | Inputs crossing the facility gate | Represent upstream production and inbound transport through traceable upstream datasets and disclose any missing or proxy dataset; do not assign zero burden to incoming livers, roes, salt, fuel, packaging, or utilities. | `eu-pef-2021-2279` |
| `boundary_food_safety_controls` | Product- and line-specific controls | Document the applicable hazard analysis, control points, monitoring records, and release criteria for the actual product and line. Food-safety records support process identity and quality but do not replace environmental inventory measurements. | `codex-cxc-52-2003` |
| `boundary_storage_losses` | Intermediate and finished-product storage | Include electricity, refrigerant losses, product losses, and waste handling attributable to storage inside the declared facility boundary and period. | `fao-fish-processing-storage`; `eu-pef-2021-2279` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified edible fish livers or roes received at the preserving facility in a declared fresh, chilled, or frozen state, with species or species group, source, supplier, lot, upstream dataset, and net received mass recorded |
| starting_condition_role | Upstream product input to the foreground preserving system |
| product_classification_scope | Fish livers and fish roes whose finished state is produced by drying, smoking, salting, or holding in brine within CPC 3.0 code 21227 mapping context |
| recursive_input_rule | If an already preserved fish liver or roe product in this category is used as an input, record it once as an upstream product flow with its own dataset. Do not recursively re-run this PCR unless the foreground facility performs a further named preservation transformation. |
| upstream_dataset_requirement | Each incoming fish liver or roe input requires a traceable upstream dataset that declares capture or aquaculture origin, species, primary-processing boundary, co-product or by-product treatment, allocation method, geography, period, and incoming preservation state. Other material and energy inputs require representative upstream datasets or disclosed proxies. |
| disclosure | Declare facility location, reporting period, species or species group, liver or roe, incoming state, actual preservation sequence, product formulation, net-mass basis, packaging, storage condition and duration, rejected material, co-products, wastes, on-site treatment, upstream dataset choices, allocation, proxies, and retained reasoned estimates. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_preparation` | Receipt and preparation of fish livers or roes | `required` | Always include receipt, inspection, mass measurement, and the actual preparation operations | Establish input identity, remove non-product material, and produce the prepared preservation feed | kg prepared liver or roe |
| `preservation_processing` | Salting, brining, drying, or smoking | `required` | Include at least one named preservation route and every route operation actually used | Transform prepared liver or roe into the declared preserved product | kg preserved product before final packaging |
| `packaging_storage` | Packaging and facility storage | `required` | Include the actual packaging operation and all storage before the facility-gate reference flow is released | Produce the final packaged product and account for packaging, storage energy, refrigerants, and losses | kg net finished product |

### Process: Receipt and preparation of fish livers or roes (`receipt_preparation`)

#### Inputs

##### Product flows

###### Fresh fish liver received (`incoming_fresh_fish_liver`)

Record accepted fresh edible fish liver as its own incoming product exchange.

- Selected flow: Fresh fish liver
- Flow property / unit: Mass / kg
- Amount rule: Net accepted mass received for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `unsd-cpc-3-0-21227`

###### Chilled fish liver received (`incoming_chilled_fish_liver`)

Record accepted chilled edible fish liver as its own incoming product exchange.

- Selected flow: Chilled fish liver
- Flow property / unit: Mass / kg
- Amount rule: Net accepted mass received for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `unsd-cpc-3-0-21227`

###### Frozen fish liver received (`incoming_frozen_fish_liver`)

Record accepted frozen edible fish liver as its own incoming product exchange.

- Selected flow: Frozen fish liver
- Flow property / unit: Mass / kg
- Amount rule: Net accepted mass received for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `unsd-cpc-3-0-21227`

###### Fresh fish roe received (`incoming_fresh_fish_roe`)

Record accepted fresh edible fish roe as its own incoming product exchange.

- Selected flow: Fresh fish roe
- Flow property / unit: Mass / kg
- Amount rule: Net accepted mass received for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `unsd-cpc-3-0-21227`

###### Chilled fish roe received (`incoming_chilled_fish_roe`)

Record accepted chilled edible fish roe as its own incoming product exchange.

- Selected flow: Chilled fish roe
- Flow property / unit: Mass / kg
- Amount rule: Net accepted mass received for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `unsd-cpc-3-0-21227`

###### Frozen fish roe received (`incoming_frozen_fish_roe`)

Record accepted frozen edible fish roe as its own incoming product exchange.

- Selected flow: Frozen fish roe
- Flow property / unit: Mass / kg
- Amount rule: Net accepted mass received for the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `unsd-cpc-3-0-21227`

###### Preparation water (`preparation_water`)

Record water used for washing, thawing support, rinsing, or product cleaning when it crosses the process boundary.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or batch-estimated water attributable to product preparation, net of separately measured reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared liver or roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Range: Provisional preparation-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg prepared product
  - Basis: Per 1 kg prepared liver or roe
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Low-voltage grid electricity (`preparation_electricity_low_voltage_grid`)

Record public-grid electricity supplied as a consumption mix below 1 kV; do not use this row for another voltage or supply scenario.

- Selected flow: Alternating current, consumption mix, less than 1 kV `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered electricity attributable to receipt and preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg prepared liver or roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Medium-voltage grid electricity (`preparation_electricity_medium_voltage_grid`)

Record public-grid electricity supplied as a consumption mix at 1–35 kV; do not use this row for another voltage or supply scenario.

- Selected flow: Alternating current, consumption mix, 1–35 kV `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered electricity attributable to receipt and preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg prepared liver or roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### On-site photovoltaic electricity below 1 kV (`preparation_electricity_onsite_photovoltaic`)

Record alternating current supplied directly by an on-site photovoltaic system below 1 kV as a separate supply scenario.

- Selected flow: Alternating current, on-site photovoltaic generation, less than 1 kV
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered electricity attributable to receipt and preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg prepared liver or roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

###### Chilled water for preparation cooling (`preparation_chilled_water`)

Record chilled water crossing the preparation boundary as a purchased cooling carrier, separately from electricity.

- Selected flow: Chilled water
- Flow property / unit: Energy / MJ
- Amount rule: Metered chilled-water energy attributable to receipt and preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg prepared liver or roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared fish liver (`prepared_fish_liver`)

Record the measured prepared fish liver transferred to preservation processing.

- Selected flow: Prepared fish liver
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass after preparation and draining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Prepared fish roe (`prepared_fish_roe`)

Record the measured prepared fish roe transferred to preservation processing.

- Selected flow: Prepared fish roe
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass after preparation and draining
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per preparation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

##### Waste flows

###### Removed fish liver tissue (`preparation_residual_fish_liver_tissue`)

Record removed fish liver tissue leaving preparation by measured mass and disposition.

- Selected flow: Removed fish liver tissue
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by destination, distinguishing waste treatment from recovered co-product use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg incoming liver or roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Damaged fish roe (`preparation_residual_damaged_fish_roe`)

Record damaged fish roe leaving preparation by measured mass and disposition.

- Selected flow: Damaged fish roe
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by destination, distinguishing waste treatment from recovered co-product use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg incoming liver or roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Removed fish connective-tissue membrane (`preparation_residual_fish_membrane`)

Record fish connective-tissue membrane leaving preparation by measured mass and disposition.

- Selected flow: Fish connective-tissue membrane
- Flow property / unit: Mass / kg
- Amount rule: Measured mass by destination, distinguishing waste treatment from recovered co-product use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg incoming liver or roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater generated by preparation at the point it enters on-site treatment or leaves the facility.

- Selected flow: Fish-liver-or-roe preparation wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured or water-balance quantity attributed to preparation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg prepared liver or roe
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_records`
- Range: Provisional preparation-wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg prepared product
  - Basis: Per 1 kg prepared liver or roe
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Salting, brining, drying, or smoking (`preservation_processing`)

#### Inputs

##### Product flows

###### Prepared fish liver feed (`preservation_fish_liver_feed`)

Record prepared fish liver entering the declared preservation route without duplicating upstream burdens.

- Selected flow: Prepared fish liver
- Flow property / unit: Mass / kg
- Amount rule: Measured mass charged to preservation processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Prepared fish roe feed (`preservation_fish_roe_feed`)

Record prepared fish roe entering the declared preservation route without duplicating upstream burdens.

- Selected flow: Prepared fish roe
- Flow property / unit: Mass / kg
- Amount rule: Measured mass charged to preservation processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Food-grade salt (`preservation_salt`)

Record salt used for dry salting, brine make-up, replenishment, or pre-smoking salting.

- Selected flow: Salt, food-grade, for brine preparation `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Purchased or issued mass charged to the lot, less documented recovered salt returned to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `codex-cxc-52-2003`
- Range: Provisional salt-use QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg/kg preserved product
  - Basis: Per 1 kg preserved product; not a food-safety or formulation limit
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Brine make-up water (`brine_makeup_water`)

Record newly supplied water for brine separately from reused brine when wet salting or brining is used.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured make-up water charged to the brine system and attributed to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Range: Provisional brine-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg/kg preserved product
  - Basis: Per 1 kg preserved product; applicable only to wet-salting or brining
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Low-voltage grid electricity (`preservation_electricity_low_voltage_grid`)

Record public-grid electricity supplied as a consumption mix below 1 kV; do not use this row for another voltage or supply scenario.

- Selected flow: Alternating current, consumption mix, less than 1 kV `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered or engineering-allocated electricity for the declared preservation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-fish-processing-storage`

###### Medium-voltage grid electricity (`preservation_electricity_medium_voltage_grid`)

Record public-grid electricity supplied as a consumption mix at 1–35 kV; do not use this row for another voltage or supply scenario.

- Selected flow: Alternating current, consumption mix, 1–35 kV `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered or engineering-allocated electricity for the declared preservation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-fish-processing-storage`

###### On-site photovoltaic electricity below 1 kV (`preservation_electricity_onsite_photovoltaic`)

Record alternating current supplied directly by an on-site photovoltaic system below 1 kV as a separate supply scenario.

- Selected flow: Alternating current, on-site photovoltaic generation, less than 1 kV
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered or engineering-allocated electricity for the declared preservation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-fish-processing-storage`

###### Purchased process steam (`preservation_steam`)

Record purchased steam crossing the preservation boundary separately from hot water and direct fuel.

- Selected flow: Heat, steam, at plant, GLO `2e727825-ba09-4dde-bab5-2d4f04c1daf6`
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Metered steam energy attributed to the declared preservation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-fish-processing-storage`

###### Purchased hot water (`preservation_hot_water`)

Record hot water crossing the preservation boundary as its own thermal carrier and disclose supply and return conditions.

- Selected flow: Hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered hot-water energy attributed to the declared preservation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-fish-processing-storage`

###### Pipeline natural gas (`preservation_natural_gas`)

Record pipeline natural gas combusted on site as a separate fuel carrier.

- Selected flow: Natural gas in the gaseous state, at consumption `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered natural-gas volume attributed to the declared preservation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-fish-processing-storage`

###### Liquefied petroleum gas (`preservation_lpg`)

Record LPG combusted on site as a separate fuel carrier.

- Selected flow: Liquefied petroleum gas, industrial fuel supply `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured LPG issue attributed to the declared preservation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-fish-processing-storage`

###### Diesel oil (`preservation_diesel`)

Record diesel oil combusted on site as a separate fuel carrier.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured diesel issue attributed to the declared preservation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-fish-processing-storage`

###### Heavy fuel oil (`preservation_fuel_oil`)

Record heavy fuel oil combusted on site as a separate fuel carrier.

- Selected flow: Heavy fuel oil
- Flow property / unit: Mass / kg
- Amount rule: Measured fuel-oil issue attributed to the declared preservation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-fish-processing-storage`

###### Untreated hardwood chips for smoke generation (`smoking_hardwood_chips`)

Record untreated hardwood chips entering an on-site smoke generator; declare species and moisture basis.

- Selected flow: Untreated hardwood chips for food smoke generation
- Flow property / unit: Mass / kg
- Amount rule: Measured wood-chip mass charged to the smoking operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg smoked product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `codex-cxc-52-2003`; `fao-fish-processing-storage`
- Range: Provisional smoke-fuel QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg smoked product
  - Basis: Per 1 kg smoked product; direct-smoking routes only
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Compressed air (`preservation_compressed_air`)

Record compressed air supplied to preservation equipment as a separate utility carrier.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered compressed-air volume attributed to the declared preservation lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `fao-fish-processing-storage`

###### Food-grade liquid smoke preparation (`preservation_liquid_smoke`)

Record liquid smoke preparation as an ingredient, never as fuel, when that formulation is used.

- Selected flow: Food-grade liquid smoke preparation
- Flow property / unit: Mass / kg
- Amount rule: Measured liquid-smoke preparation charged to the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `codex-cxc-52-2003`; `fao-fish-processing-storage`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved fish liver before packaging (`preserved_fish_liver_intermediate`)

Record the acceptable preserved fish liver intermediate transferred to packaging.

- Selected flow: Preserved fish liver intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured acceptable preserved-product mass transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Preserved fish roe before packaging (`preserved_fish_roe_intermediate`)

Record the acceptable preserved fish roe intermediate transferred to packaging.

- Selected flow: Preserved fish roe intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured acceptable preserved-product mass transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per preservation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

##### Waste flows

###### Spent high-salinity brine (`spent_brine`)

Record spent brine leaving the reuse loop separately from other preservation wastewater.

- Selected flow: High-concentration saline wastewater `76ab69b6-6fa7-461c-be07-bc54e581a699`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured discharge or calculated water-and-solution balance for spent brine
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_records`

###### Non-saline preservation wastewater (`preservation_wastewater`)

Record condensate, wash water, and other non-saline preservation wastewater separately from spent brine.

- Selected flow: Non-saline fish-preservation wastewater
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge or calculated water balance for non-saline preservation wastewater
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg preserved product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_records`

###### Rejected preserved fish liver (`rejected_preserved_fish_liver`)

Record rejected preserved fish liver by lot and disposition; do not hide it inside yield.

- Selected flow: Rejected preserved fish liver
- Flow property / unit: Mass / kg
- Amount rule: Measured loss by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg preservation feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Rejected preserved fish roe (`rejected_preserved_fish_roe`)

Record rejected preserved fish roe by lot and disposition; do not hide it inside yield.

- Selected flow: Rejected preserved fish roe
- Flow property / unit: Mass / kg
- Amount rule: Measured loss by lot and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg preservation feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

##### Elementary flows

###### Fossil carbon dioxide to air (`onsite_fossil_co2`)

Record carbon dioxide (fossil), to air, unspecified as its own elementary exchange when direct smoking or combustion occurs.

- Selected flow: Carbon dioxide (fossil), to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured emission or fossil-fuel use multiplied by a documented carbon-content and oxidation factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg smoked product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `codex-cxc-52-2003`

###### Biogenic carbon dioxide to air (`onsite_biogenic_co2`)

Record carbon dioxide (biogenic), to air, unspecified as its own elementary exchange when direct smoking or combustion occurs.

- Selected flow: Carbon dioxide (biogenic), to air, unspecified `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured emission or biomass use multiplied by a documented biogenic-carbon and oxidation factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg smoked product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `codex-cxc-52-2003`

###### Fossil carbon monoxide to air (`onsite_carbon_monoxide_fossil`)

Record carbon monoxide (fossil), to air, unspecified as its own elementary exchange when direct smoking or combustion occurs.

- Selected flow: Carbon monoxide (fossil), to air, unspecified `08a91e70-3ddc-11dd-924e-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack release or fuel-specific emission-factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg smoked product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `codex-cxc-52-2003`

###### Fossil methane to air (`onsite_methane_fossil`)

Record methane (fossil), to air, unspecified as its own elementary exchange when direct smoking or combustion occurs.

- Selected flow: Methane (fossil), to air, unspecified `08a91e70-3ddc-11dd-9610-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack release or fuel-specific emission-factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg smoked product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `codex-cxc-52-2003`

###### Nitrogen monoxide to air (`onsite_nitrogen_monoxide`)

Record nitrogen monoxide, to air, unspecified as its own elementary exchange when direct smoking or combustion occurs.

- Selected flow: Nitrogen monoxide, to air, unspecified `08a91e70-3ddc-11dd-96ee-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack release or substance-specific emission-factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg smoked product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `codex-cxc-52-2003`

###### Nitrogen dioxide to air (`onsite_nitrogen_dioxide`)

Record nitrogen dioxide, to air, unspecified as its own elementary exchange when direct smoking or combustion occurs.

- Selected flow: Nitrogen dioxide, to air, unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack release or substance-specific emission-factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg smoked product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `codex-cxc-52-2003`

###### Nitrous oxide to air (`onsite_nitrous_oxide`)

Record nitrous oxide, to air, unspecified as its own elementary exchange when direct smoking or combustion occurs.

- Selected flow: Nitrous oxide, to air, unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack release or substance-specific emission-factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg smoked product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `codex-cxc-52-2003`

###### Sulfur dioxide to air (`onsite_sulfur_dioxide`)

Record sulfur dioxide, to air, unspecified as its own elementary exchange when direct smoking or combustion occurs.

- Selected flow: Sulfur dioxide, to air, unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack release or fuel-sulfur balance with documented retention
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg smoked product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `codex-cxc-52-2003`

###### PM2.5 to air (`onsite_pm25`)

Record particles (pm2.5), to air, unspecified as its own elementary exchange when direct smoking or combustion occurs.

- Selected flow: Particles (PM2.5), to air, unspecified `08a91e70-3ddc-11dd-9293-0050c2490048`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack release or equipment-specific emission-factor calculation after controls
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg smoked product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `codex-cxc-52-2003`

###### Non-methane volatile organic compounds to air (`onsite_nmvoc`)

Record non-methane volatile organic compounds, to air, unspecified as its own elementary exchange when direct smoking or combustion occurs.

- Selected flow: Non-methane volatile organic compounds, to air, unspecified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured stack release or substance-flow-specific emission-factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg smoked product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `codex-cxc-52-2003`

### Process: Packaging and facility storage (`packaging_storage`)

#### Inputs

##### Product flows

###### Preserved fish liver entering packaging (`packaging_fish_liver_feed`)

Record acceptable preserved fish liver intermediate entering the actual primary-packaging operation.

- Selected flow: Preserved fish liver intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured mass released to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per packaging lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Preserved fish roe entering packaging (`packaging_fish_roe_feed`)

Record acceptable preserved fish roe intermediate entering the actual primary-packaging operation.

- Selected flow: Preserved fish roe intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured mass released to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per packaging lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`

###### Polyethylene film or pouch (`packaging_polyethylene_film`)

Record polyethylene film as its own packaging-component exchange when used.

- Selected flow: Polyethylene film `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued polyethylene-film mass less documented unused material returned to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Polypropylene rigid tub (`packaging_polypropylene_tub`)

Record polypropylene rigid food-packaging tub as its own packaging-component exchange when used.

- Selected flow: Polypropylene rigid food-packaging tub
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued polypropylene-tub mass less documented unused material returned to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Glass jar (`packaging_glass_jar`)

Record glass jar as its own packaging-component exchange when used.

- Selected flow: Glass Jar `eca48ea8-ab83-444f-98b2-15ab82570c80`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued glass-jar mass less documented unused containers returned to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Aluminium lid (`packaging_aluminium_lid`)

Record aluminium food-package lid as its own packaging-component exchange when used.

- Selected flow: Aluminium food-package lid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued aluminium-lid mass less documented unused lids returned to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Paperboard folding carton (`packaging_paperboard_carton`)

Record paper box as its own packaging-component exchange when used.

- Selected flow: Paper box `12d5d744-7725-4dbc-b102-43c80547f777`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued paperboard-carton mass less documented unused cartons returned to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Corrugated board box (`packaging_corrugated_box`)

Record corrugated board boxes as its own packaging-component exchange when used.

- Selected flow: Corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued corrugated-box mass less documented unused boxes returned to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Wooden pallet (`packaging_wood_pallet`)

Record wooden pallet as its own packaging-component exchange when used.

- Selected flow: Wooden pallet `4b49871e-95be-4e0c-9223-9902f9eaa763`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued wooden-pallet mass less documented unused pallets returned to inventory
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Low-voltage grid electricity (`storage_electricity_low_voltage_grid`)

Record public-grid electricity supplied as a consumption mix below 1 kV; do not use this row for another voltage or supply scenario.

- Selected flow: Alternating current, consumption mix, less than 1 kV `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered storage electricity allocated by occupied capacity, mass-time, or another disclosed causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_records`
- Sources: `fao-fish-processing-storage`

###### Medium-voltage grid electricity (`storage_electricity_medium_voltage_grid`)

Record public-grid electricity supplied as a consumption mix at 1–35 kV; do not use this row for another voltage or supply scenario.

- Selected flow: Alternating current, consumption mix, 1–35 kV `3d76981f-964a-4865-b588-0e067a2a1163`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- Amount rule: Metered storage electricity allocated by occupied capacity, mass-time, or another disclosed causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_records`
- Sources: `fao-fish-processing-storage`

###### On-site photovoltaic electricity below 1 kV (`storage_electricity_onsite_photovoltaic`)

Record alternating current supplied directly by an on-site photovoltaic system below 1 kV as a separate supply scenario.

- Selected flow: Alternating current, on-site photovoltaic generation, less than 1 kV
- Flow property / unit: Net calorific value / kWh
- Amount rule: Metered storage electricity allocated by occupied capacity, mass-time, or another disclosed causal driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_records`
- Sources: `fao-fish-processing-storage`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished reference product (`finished_reference_product`)

Record the released preserved fish liver or roe product in the declared packaging and storage state.

- Selected flow: Fish livers and roes dried, smoked, salted or in brine `ab283f96-8c07-4a11-8904-4d5a6542d1fe`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net finished product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: Reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Polyethylene packaging scrap (`packaging_polyethylene_scrap`)

Record polyethylene film packaging scrap separately by material and destination.

- Selected flow: Polyethylene film packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Polypropylene packaging scrap (`packaging_polypropylene_scrap`)

Record polypropylene rigid-packaging scrap separately by material and destination.

- Selected flow: Polypropylene rigid-packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Glass-jar packaging waste (`packaging_glass_waste`)

Record broken glass-jar packaging waste separately by material and destination.

- Selected flow: Broken glass-jar packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Aluminium-lid packaging scrap (`packaging_aluminium_scrap`)

Record aluminium-lid packaging scrap separately by material and destination.

- Selected flow: Aluminium-lid packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Paperboard-carton scrap (`packaging_paperboard_scrap`)

Record paperboard-carton packaging scrap separately by material and destination.

- Selected flow: Paperboard-carton packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Corrugated-box scrap (`packaging_corrugated_scrap`)

Record corrugated-board-box packaging scrap separately by material and destination.

- Selected flow: Corrugated-board-box packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Wooden-pallet packaging waste (`packaging_wood_waste`)

Record damaged wooden-pallet packaging waste separately by material and destination.

- Selected flow: Damaged wooden-pallet packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Rejected finished preserved fish liver (`rejected_finished_fish_liver`)

Record rejected finished preserved fish liver separately by material and destination.

- Selected flow: Rejected finished preserved fish liver
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

###### Rejected finished preserved fish roe (`rejected_finished_fish_roe`)

Record rejected finished preserved fish roe separately by material and destination.

- Selected flow: Rejected finished preserved fish roe
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: Per 1 kg net finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`

##### Elementary flows

###### R717 refrigerant loss to air (`storage_r717_emission`)

Record r717 refrigerant loss to air only for equipment using that refrigerant.

- Selected flow: Ammonia, to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant charged minus documented recovery and inventory change, allocated to included storage service
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net finished product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_records`

###### R404A refrigerant loss to air (`storage_r404a_emission`)

Record r404a refrigerant loss to air only for equipment using that refrigerant.

- Selected flow: Refrigerant R404A, to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant charged minus documented recovery and inventory change, allocated to included storage service
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net finished product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_records`

###### R134a refrigerant loss to air (`storage_r134a_emission`)

Record r134a refrigerant loss to air only for equipment using that refrigerant.

- Selected flow: HFC-134a, to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant charged minus documented recovery and inventory change, allocated to included storage service
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net finished product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_records`

###### R507A refrigerant loss to air (`storage_r507a_emission`)

Record r507a refrigerant loss to air only for equipment using that refrigerant.

- Selected flow: Refrigerant R507A, to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant charged minus documented recovery and inventory change, allocated to included storage service
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net finished product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_records`

###### R744 refrigerant loss to air (`storage_r744_emission`)

Record r744 refrigerant loss to air only for equipment using that refrigerant.

- Selected flow: Carbon dioxide from R744 refrigerant, to air, unspecified
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant charged minus documented recovery and inventory change, allocated to included storage service
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: Per 1 kg net finished product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_records`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | Multi-output preparation, preservation, packaging, and utility systems | Avoid allocation where measured process subdivision or direct metering can assign inputs, energy, emissions, wastes, and losses to the liver or roe product. | `eu-pef-2021-2279` |
| `allocation_physical_relation` | Unavoidable joint processes with multiple valuable outputs | When subdivision is not possible, use a documented physical causal relationship that reflects how the joint process changes with output production. Mass allocation may be used only when mass is an appropriate causal proxy. | `eu-pef-2021-2279` |
| `allocation_economic_fallback` | Joint valuable outputs without a defensible physical causal relationship | Use economic allocation only as a fallback. Record prices, currency, geography, averaging period, product state, and treatment of abnormal or missing prices, and test material sensitivity. | `eu-pef-2021-2279` |
| `allocation_incoming_material` | Upstream fish liver or roe dataset | Preserve and disclose the upstream dataset's treatment of livers or roes arising with fish meat or other co-products. Do not replace upstream allocation with zero burden at the preservation facility gate. | `eu-pef-2021-2279` |
| `allocation_residual_destination` | Removed tissue, off-specification product, spent brine, and packaging residuals | Classify each output as waste or recovered co-product according to its actual destination and applicable rules. Do not grant an avoided-burden credit without an explicit downstream substitution model outside this foreground inventory. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | `receipt_preparation`; `preservation_processing`; `packaging_storage` | Incoming, transferred, finished, rejected, and lost liver or roe material | Weighbridge, batch scale, production, and disposition records | lot id; species; liver or roe; incoming state; gross mass; tare; accepted mass; transfer mass; finished net mass; rejected mass; destination; timestamp | Calibrated weighing at each transfer or reconciled lot records | kg | Each lot and transfer | Complete declared reporting period | All included lines, shifts, and sites | Sum by lot and process; reconcile transfers and normalize to net finished product | Scale calibration; signed batch record; reconciliation record; disposition evidence |
| `cp_water_records` | `receipt_preparation`; `preservation_processing` | Preparation water, brine water, condensate, and wastewater | Meter, batch recipe, tank, and discharge records | meter id; opening and closing readings; batch additions; reuse; discharge; condensate; process; lot; timestamp | Sub-meter where available; otherwise documented water balance using measured batch additions | kg or m3 with density conversion | Each batch or meter interval | Complete declared reporting period | All included water users and discharge points | Subtract documented reuse and non-process use; allocate shared totals by disclosed causal driver | Meter calibration; recipe; tank log; discharge record; balance closure |
| `cp_ingredient_records` | `preservation_processing` | Salt, brine constituents, and other declared preservation ingredients | Purchase, issue, recipe, return, and inventory records | ingredient; supplier; lot; composition; issued mass; returned mass; solution mass; concentration basis; production lot | Mass reconciliation by ingredient and batch | kg | Each batch | Complete declared reporting period | All included preservation lines | Net issued mass equals issued minus documented return; keep solution water and solute separately calculable | Invoice; specification; calibrated scale; recipe approval; inventory reconciliation |
| `cp_energy_records` | `receipt_preparation`; `preservation_processing` | Electricity, purchased heat, direct fuel, and smoke material | Meter, fuel issue, operating-hour, and equipment records | carrier; meter; readings; fuel mass or volume; heating value source; operating time; equipment; process; lot | Direct metering preferred; engineering allocation only with documented driver | kWh, MJ, or kg by carrier | Meter interval or batch | Complete declared reporting period | All included process equipment | Keep carriers separate; allocate shared use by measured operating parameter and normalize to process output | Meter calibration; invoice; fuel specification; operating log; allocation worksheet |
| `cp_packaging_records` | `packaging_storage` | Packaging inputs, scrap, rejected packs, and finished-product loss | Bill of materials, issue, return, scrap, and rejection records | material; packaging level; unit mass; units issued; units returned; scrap mass; rejected product; destination | Unit-count times verified unit mass or direct mass reconciliation | kg | Each packaging lot | Complete declared reporting period | All packaging formats and lines | Net material equals issued minus returned; separate material and level; normalize to net finished product | Supplier specification; unit-mass check; issue and scrap records |
| `cp_storage_records` | `packaging_storage` | Storage duration, electricity, occupancy, and refrigerant service | Warehouse, meter, inventory, and maintenance records | product mass; entry and exit time; temperature class; meter readings; occupied capacity; refrigerant type; charge; recovery; stock change; service date | Mass-time inventory linked to meters and maintenance balance | kg·day, kWh, and kg refrigerant | Storage movement and service event | Complete declared reporting period | All included storage rooms and refrigeration systems | Allocate shared electricity and refrigerant balance using disclosed mass-time, capacity, or measured load driver | Temperature log; meter record; inventory movement; maintenance invoice; refrigerant balance |
| `cp_direct_emission_records` | `preservation_processing` | Direct fuel combustion or smoke-generation emissions | Fuel records, stack measurements, and factor documentation | fuel type; fuel quantity; emission substance; measured concentration and flow or factor; factor source; control equipment; operating time | Direct measurement where available; otherwise fuel-specific calculation from a cited factor | kg substance | Each monitored campaign or calculation period | Representative included operations | All direct smoking or combustion units | Calculate each substance separately and normalize to smoked output | Monitoring report; factor source; fuel record; calculation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference_flow` | All inventory rows | normalized amount = attributable process amount / net mass of released finished product | Attributable amount; released net finished mass | Amount per 1 kg reference flow |  |
| `calc_preparation_yield` | `receipt_preparation` | preparation yield = prepared transfer mass / accepted incoming mass | Accepted incoming mass; prepared transfer mass | kg prepared product per kg accepted input |  |
| `calc_preservation_yield` | `preservation_processing` | preservation yield = acceptable preserved intermediate mass / prepared feed mass | Prepared feed mass; preserved intermediate mass | kg preserved intermediate per kg prepared feed |  |
| `calc_water_balance` | Preparation and preservation water | wastewater estimate = measured water and solution inputs + relevant product water released - water retained in product or recovered for reuse - measured evaporation, with every term declared | Water inputs; brine inputs; reuse; product mass and moisture observations; condensate; evaporation information | Wastewater or an explicit unresolved water-balance gap |  |
| `calc_shared_energy` | Shared utilities | attributable energy = metered total × declared causal allocation share; report driver and reconciliation to 100 percent of the meter total | Meter total; operating time, load, mass-time, or other causal driver | Carrier-specific energy attributed to the process | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | Included refrigeration system | refrigerant loss = charge during period - documented recovery - closing stock increase + opening-to-closing equipment charge decrease, using the facility's consistent mass-balance convention | Refrigerant purchase, charge, recovery, stock, and equipment service records | kg refrigerant emitted before allocation to product |  |
| `calc_direct_emissions` | On-site fuel combustion or smoke generation | substance emission = measured emission or fuel quantity × cited substance-specific factor × applicable control adjustment | Fuel quantity; measured emission or cited factor; control record | kg elementary flow by substance |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and incoming material | Preserve species or species group, anatomical product, origin, incoming state, preservation route, packaging, storage condition, lot, and net-mass basis through source records and dataset metadata. | Supplier specification, lot record, product specification, reference-flow metadata |
| `dq_technology` | Preservation and packaging processes | Data shall represent the actual equipment and route used; proxies shall identify the missing technology and why the proxy is suitable. | Process flow diagram, equipment list, operating logs, proxy justification |
| `dq_time` | Foreground records | Declare the reporting period and cover representative production, including seasonal or campaign operation where material; explain shutdowns, abnormal lots, and gaps. | Dated records, production schedule, completeness reconciliation |
| `dq_geography` | Facility and upstream datasets | Declare facility geography and upstream source geography; assess and disclose any geographic mismatch in electricity, heat, transport, ingredients, or incoming liver or roe datasets. | Site metadata, supplier origin, dataset metadata, mismatch assessment |
| `dq_completeness` | Inventory and mass balance | Reconcile all material transfers, ingredients, water, energy carriers, packaging, co-products, wastes, and direct emissions identified for the actual route. Quantify or explain missing items. | Mass, water, energy, and packaging reconciliations; gap log |
| `dq_food_safety_process_identity` | Product- and line-specific controls | Retain the applicable hazard analysis and monitoring evidence needed to show which preservation, packaging, and storage conditions were actually operated; do not infer environmental quantities from compliance alone. | HACCP or equivalent plan, monitoring log, release record (`codex-cxc-52-2003`) |
| `dq_estimate_disclosure` | Provisional quantities | Any retained `reasoned_estimate` shall remain distinguishable from measured or calculated foreground data, state its effect on results, and be prioritized for replacement during review. | Dataset quality disclosure, sensitivity result, replacement action |
| `dq_pef_dimensions` | Dataset quality assessment | Assess technological, geographical, and time-related representativeness and precision or uncertainty for important data, and document the basis of the assessment. | Data quality assessment (`eu-pef-2021-2279`) |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require reference amount 1 kg, product flow UUID `ab283f96-8c07-4a11-8904-4d5a6542d1fe`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, unit-group UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. |  |
| `validate_required_qualifiers` | Dataset metadata | Fail completeness when any required qualifier is absent or when liver and roe, species, route, packaging, storage state, or net-mass basis cannot be determined. | `unsd-cpc-3-0-21227` |
| `validate_route_presence` | Process inventory | Require at least one of drying, smoking, dry salting, wet salting, or in-brine preservation and require every declared route operation to appear in the process map and records. | `codex-cxc-52-2003`; `fao-fish-processing-storage` |
| `validate_route_conditional_flows` | Preservation inputs and outputs | Require salt for a declared salting or brining route, make-up water and spent brine accounting for a brining route, smoke material and direct-emission review for direct smoking, and energy or ambient-condition disclosure for drying. Mark non-applicable route flows explicitly rather than assigning an unexplained zero. | `codex-cxc-52-2003`; `fao-fish-processing-storage` |
| `validate_mass_balance` | Each process and production lot | Check incoming material = transferred product + measured residuals + product losses + explained mass change, allowing declared moisture gain or loss and documented inventory change. Report the balance gap and basis. |  |
| `validate_collection_links` | Foreground and calculated inventory rows | Require a valid collection protocol for every `foreground_record` and `calculated_value` row and all calculation-rule inputs needed to reproduce the value. |  |
| `validate_allocation` | Multi-output processes and upstream input | Require the allocation hierarchy, driver, factors, co-product or waste classification, upstream liver or roe allocation treatment, and sensitivity disclosure where economic allocation is used. | `eu-pef-2021-2279` |
| `validate_food_safety_records` | Preservation, packaging, and storage process identity | Require the applicable product- and line-specific hazard-control records and actual operating-condition records; do not claim product compliance from this LCA validation. | `codex-cxc-52-2003` |
| `validate_estimate_status` | Provisional ranges and values | Reject presentation of a `reasoned_estimate` as a measured, source-backed, typical, or allowed industry range; require disclosure and replacement priority. |  |
| `validate_source_integrity` | Source references and quantitative factors | Require every non-empty source id to resolve in Data Sources. Require an actual external source for any emission factor, conversion factor, or quantitative constraint not derived solely from collected records. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for preserved fish liver or roe at the preserving facility gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review for scope and representativeness |
| allowed_use | Product, process, or lifecycle-model studies matching the declared species or species group, liver or roe product, preservation route, packaging, storage condition, geography, period, net-mass basis, and upstream allocation context |
| excluded_use | Fresh-only, chilled-only, frozen-only, canned, non-fish, or composite products; undeclared preservation routes; legal food-safety compliance claims; substitution across materially different species, product forms, technologies, packaging atmospheres, or storage regimes without sensitivity analysis |
| required_metadata | Canonical PCR id and version used; product flow UUID; species or species group; liver or roe; upstream origin and dataset; incoming state; actual route sequence; product specification; net mass; moisture or drying-state basis; salt or brine basis; smoking technology; packaging materials and atmosphere; storage temperature class and duration; facility geography; reporting period; allocation; data sources; estimate status |
| required_quality_disclosure | Foreground coverage and gaps; mass, water, energy, and packaging reconciliation; technological, geographical, and temporal representativeness; uncertainty; proxy datasets; upstream co-product treatment; missing UUIDs; retained reasoned estimates; food-safety record availability; sensitivity to allocation and important estimates |
| update_trigger | Change in species or source mix, incoming state, preservation route, equipment, recipe or brine management, energy carrier, smoke fuel, packaging, storage regime, facility, reporting period, upstream allocation, important dataset, resolved UUID, source-backed benchmark, or a material validation finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-21227` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, code 21227, “Fish livers and roes dried, smoked, salted or in brine”, https://unstats.un.org/unsd/classifications/Econ/cpc, retrieved 2026-08-11 | Product-category boundary and classification mapping context |
| `codex-cxc-52-2003` | `standard` | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://workspace.fao.org/sites/codex/Standards/CXC%2052-2003/CXC_052e.pdf, retrieved 2026-08-11 | Fish and fishery product process decomposition; product- and line-specific hygiene, hazard-control, preservation, packaging, and storage records |
| `fao-fish-processing-storage` | `official_guidance` | Food and Agriculture Organization of the United Nations, “Processing & Storage”, Food Loss and Waste in Fish Value Chains, https://www.fao.org/flw-in-fish-value-chains/value-chain/processing-storage/en/, retrieved 2026-08-11 | Drying, salting, smoking, cooling, storage, waste, and loss process coverage |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods, CELEX 32021H2279, http://data.europa.eu/eli/reco/2021/2279/oj | System boundary, allocation hierarchy, company-specific data, dataset quality, representativeness, and disclosure rules |
