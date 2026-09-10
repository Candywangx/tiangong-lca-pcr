---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.other-non-animal-milk
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Other non-animal milk

## 1. Scope and Applicability

This PCR applies to finished liquid plant beverages made from vegetables, cereals, fruits, tubers, pulses, nuts, seeds, or pseudo-cereals that fall within the semantic residual category “other non-animal milk”. It covers plain, flavoured, sweetened, fortified, fermented, ambient-stable, and refrigerated variants when the declared reference product is a milk-like beverage released by the manufacturing facility.

It excludes coconut, almond, soy, rice, and oat milk when those products fall in their separately named categories; animal milk and dairy-containing blends; powdered or solid drink mixes; infant formula; spoonable fermented products; and foods in which the beverage is only an ingredient. Agricultural production and purchased ingredients, packaging, electricity, fuels, and waste-treatment services are linked through upstream or downstream datasets rather than recreated as foreground records.

The route must identify the actual plant species and ingredient form. A flow for one narrow beverage, such as oat, almond, soy, rice, coconut, or a sesame-pea protein formulation, must not be used as the reference product for this full residual category. No cross-category empirical amount range is specified because the verified sources do not provide at least two independent, boundary-compatible original datasets for the same broad scope.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.other-non-animal-milk |
| classification_refs | CPC 3.0: 24429 Other non-animal milk |
| covered_products | Finished liquid milk-like plant beverages made from other vegetables, cereals, fruits, tubers, pulses, nuts, seeds, or pseudo-cereals not represented by a separately named product category |
| excluded_products | Coconut milk; almond milk; soy milk; rice milk; oat milk; animal milk; dairy-containing blends; powders and solid mixes; infant formula; spoonable fermented foods; downstream foods using the beverage as an ingredient |
| representative_product | One packaged, conforming other non-animal milk beverage released at the manufacturing facility gate |
| production_route | Plant-base receiving and preparation; conditional soaking; conditional grinding and aqueous extraction; conditional filtration; formulation; conditional enzyme treatment; conditional fermentation; homogenisation when used; validated heat treatment; filling and packaging; conditional cold storage; cleaning and utility supply |
| market_state | Finished liquid beverage, packaged for declared ambient or refrigerated distribution |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A finished liquid other non-animal milk beverage used as a drink, milk substitute, or food ingredient |
| How much | 1 kg of packaged conforming beverage at the manufacturing facility gate |
| How well | Meets the declared plant species, recipe, solids, fortification, fermentation, sensory, microbiological-release, heat-treatment, packaging, and storage specifications |
| How long or cycle | At factory release; shelf life and storage regime are declared qualifiers rather than a service-duration conversion |
| reference_flow_link | One kilogram of conforming packaged other non-animal milk is the reference for normalising all included foreground exchanges |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Other non-animal milk, packaged, at plant (Tiangong UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | plant species and plant family; raw-material form; recipe and plant-base share; dry-matter or solids basis; oil, sweetener, salt, stabiliser, enzyme, and fortification status; extraction and filtration route; fermentation organism and route when used; homogenisation; heat-treatment regime and release criterion; packaging format and net fill; ambient or refrigerated storage; geography; production period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and normalised results | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net mass of conforming packaged beverage, excluding secondary and tertiary packaging. Convert volume using measured product density for the represented recipe and temperature. |
| `ingredient_basis` | Plant bases, oils, sugars, salt, stabilisers, enzymes, vitamins, and minerals | Mass | kg | Record received or issued mass and declare as-received, dry-matter, active-substance, or formulated-product basis wherever interpretation changes. |
| `water_separation` | Product-contact, soaking, cleaning, cooling, and boiler water | Mass or volume | kg or m3 | Keep each water use separately metered or allocated; disclose density when volume is converted to mass and do not merge product water with cleaning water. |
| `energy_separation` | Electricity, steam, purchased heat, natural gas, liquefied petroleum gas, fuel oil, and diesel | Energy and carrier-specific quantity | kWh, MJ, kg, L, or m3 | Preserve each carrier as a separate exchange. Record steam and purchased heat separately from fuels combusted on site. |
| `packaging_basis` | Bottle, carton, closure, label, corrugated box, and film | Mass and count | kg and item | Calculate mass for each component from issued mass or verified component mass multiplied by count; do not report a combined packaging mass as one flow. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declared plant bases, water, recipe ingredients, cultures, enzymes, packaging components, utilities, fuels, refrigerants, and cleaning chemicals are received at the beverage manufacturing facility |
| starting_condition_role | Foreground collection begins at facility-controlled receiving and processing; upstream cultivation, extraction, ingredient manufacture, packaging production, and energy supply use linked datasets |
| product_classification_scope | Finished plant beverages within the residual other non-animal milk category; separately named coconut, almond, soy, rice, and oat milk are excluded |
| recursive_input_rule | If another non-animal milk or intermediate of the same category enters the facility, record it once as a product input with its upstream dataset and processing stage; do not recursively reconstruct its production |
| upstream_dataset_requirement | Link representative datasets for every declared plant base, ingredient, culture, enzyme, packaging component, water supply, electricity, heat, fuel, refrigerant, and externally treated waste |
| disclosure | Declare plant identity and origin, recipe, processing route, facility and period, co-product and waste status, allocation method, packaging, storage, data gaps, excluded stages, and all upstream substitutions |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_category_scope` | Product identity | Include only residual milk-like plant beverages and exclude separately named coconut, almond, soy, rice, and oat milk. | `un-cpc-30-2025` |
| `sb_foreground_operations` | Facility foreground boundary | Include every facility-controlled operation that occurs from receiving through release, including conditional soaking, grinding, extraction, filtration, enzyme treatment, fermentation, homogenisation, heat treatment, filling, cold storage, cleaning, utility generation, and on-site wastewater treatment. | `aydar-plant-milk-2020`; `tangyu-fermentation-2019`; `eu-jrc-fdm-bref-2019` |
| `sb_resource_inventory` | Resource and emission completeness | Maintain process-level inventories of water, energy, raw materials, wastewater, waste gas, residues, and packaging waste; separately identify direct emissions and treatment routes. | `eu-jrc-fdm-bref-2019` |
| `sb_food_safety` | Hygiene and preservation | Include validated hygiene controls and the actual preservation route; record monitoring, corrective action, verification, and documentation relevant to product release. | `fao-who-food-hygiene-2023` |
| `sb_upstream_downstream` | Complete study model | Link upstream datasets for purchased inputs and add distribution, use, or end-of-life only when required by the study; disclose any excluded life-cycle stages. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receive_prepare_base` | Plant-base receiving and preparation | required | Always include receiving; include sorting, washing, dehulling, roasting, blanching, sprouting, or dry grinding only when performed | Foreground raw-material preparation | kg of each declared plant base received |
| `soak_base` | Soaking | conditional | Include when the declared plant material is hydrated or steeped before extraction | Foreground hydration | kg soaked plant base transferred |
| `grind_extract` | Grinding and aqueous extraction | conditional | Include for whole-material wet extraction; exclude and disclose when a purchased concentrate or isolate is directly reconstituted | Foreground size reduction and extraction | kg extract or slurry produced |
| `filter_separate` | Filtration and solids separation | conditional | Include when insoluble solids or excess oil/starch are removed | Foreground separation | kg filtered plant extract |
| `formulate` | Formulation | required | Always include water and every ingredient actually dosed | Foreground recipe preparation | kg formulated beverage base |
| `enzyme_treat` | Enzyme treatment | conditional | Include each enzyme only when the declared route uses it | Foreground conversion or stability treatment | kg enzyme-treated beverage base |
| `ferment` | Fermentation | conditional | Include only for a declared controlled fermentation; identify every inoculum, organism, time, temperature, pH endpoint, and post-fermentation control | Foreground biological treatment | kg fermented beverage base |
| `homogenise` | Homogenisation | conditional | Include when mechanical homogenisation or high-pressure treatment occurs | Foreground physical stabilisation | kg homogenised beverage |
| `heat_treat` | Heat treatment and cooling | required | Include the validated pasteurisation, UHT, sterilisation, or other declared thermal regime and associated cooling | Foreground preservation | kg treated beverage released to filling |
| `fill_package` | Filling and packaging | required | Include the actual primary, secondary, and tertiary components and reject streams | Foreground final manufacture | kg conforming packaged beverage released |
| `cold_store` | Refrigerated storage | conditional | Include when product or intermediate storage requires active refrigeration | Foreground storage | kg-day under refrigeration |
| `cleaning_utilities` | Cleaning and utility generation | required | Include product-contact cleaning and allocated shared utilities serving the represented production period | Foreground hygiene and utilities | production period serving the reference product |
| `treat_wastewater` | On-site wastewater treatment | conditional | Include when wastewater or sludge is treated on site; otherwise link external treatment | Foreground waste treatment | kg wastewater treated |

### Process: Plant-base receiving and preparation (`receive_prepare_base`)

#### Inputs

##### Product flows

###### Pea seed (`pea_seed_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Pea seed (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received mass when pea is used as the plant base
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Chickpea seed (`chickpea_seed_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Chickpea seed (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received mass when chickpea is used as the plant base
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Lupin seed (`lupin_seed_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Lupin seed (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received mass when lupin is used as the plant base
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Millet grain (`millet_grain_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Millet grain (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received mass when millet is used as the plant base
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Spelt grain (`spelt_grain_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Spelt grain (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received mass when spelt is used as the plant base
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Quinoa grain (`quinoa_grain_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Quinoa grain (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received mass when quinoa is used as the plant base
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Cashew nut (`cashew_nut_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Cashew nut (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received mass when cashew is used as the plant base
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Hazelnut (`hazelnut_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Hazelnut (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received mass when hazelnut is used as the plant base
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Walnut (`walnut_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Walnut (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received mass when walnut is used as the plant base
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Peanut (`peanut_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Peanut (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received mass when peanut is used as the plant base
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Sesame seed (`sesame_seed_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Sesame seed (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received mass when sesame is used as the plant base
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Hemp seed (`hemp_seed_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Hemp seed (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received mass when hemp is used as the plant base
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Tiger nut tuber (`tiger_nut_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Tiger nut tuber (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received mass when tiger nut is used as the plant base
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Potato tuber (`potato_tuber_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Potato tuber (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: received mass when potato is used as the plant base
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Rejected pea seed (`rejected_pea_seed_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected pea seed from receiving (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected pea seed mass leaving receiving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

###### Rejected chickpea seed (`rejected_chickpea_seed_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected chickpea seed from receiving (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected chickpea seed mass leaving receiving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

###### Rejected lupin seed (`rejected_lupin_seed_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected lupin seed from receiving (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected lupin seed mass leaving receiving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

###### Rejected millet grain (`rejected_millet_grain_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected millet grain from receiving (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected millet grain mass leaving receiving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

###### Rejected spelt grain (`rejected_spelt_grain_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected spelt grain from receiving (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected spelt grain mass leaving receiving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

###### Rejected quinoa grain (`rejected_quinoa_grain_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected quinoa grain from receiving (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected quinoa grain mass leaving receiving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

###### Rejected cashew nut (`rejected_cashew_nut_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected cashew nut from receiving (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected cashew nut mass leaving receiving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

###### Rejected hazelnut (`rejected_hazelnut_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected hazelnut from receiving (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected hazelnut mass leaving receiving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

###### Rejected walnut (`rejected_walnut_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected walnut from receiving (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected walnut mass leaving receiving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

###### Rejected peanut (`rejected_peanut_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected peanut from receiving (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected peanut mass leaving receiving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

###### Rejected sesame seed (`rejected_sesame_seed_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected sesame seed from receiving (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected sesame seed mass leaving receiving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

###### Rejected hemp seed (`rejected_hemp_seed_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected hemp seed from receiving (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected hemp seed mass leaving receiving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

###### Rejected tiger nut tuber (`rejected_tiger_nut_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected tiger nut tuber from receiving (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected tiger nut tuber mass leaving receiving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

###### Rejected potato tuber (`rejected_potato_tuber_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected potato tuber from receiving (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected potato tuber mass leaving receiving
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

##### Elementary flows

### Process: Soaking (`soak_base`)

#### Inputs

##### Product flows

###### Soaking water (`soaking_water_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Potable process water for soaking (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: metered water entering soaking vessels
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_utilities`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Spent soaking liquor (`spent_soaking_liquor_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Spent plant-base soaking liquor (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured drained soaking liquor not transferred into product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

##### Elementary flows

### Process: Grinding and aqueous extraction (`grind_extract`)

#### Inputs

##### Product flows

###### Extraction water (`extraction_water_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Potable process water for extraction (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: metered water entering wet grinding or extraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_utilities`

###### Grinding electricity (`grinding_electricity_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Electricity supplied to wet grinding (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: submetered use or documented equipment allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Grinding loss (`grinding_loss_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Plant slurry lost during grinding (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured spill, purge, or unrecovered slurry mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

##### Elementary flows

### Process: Filtration and solids separation (`filter_separate`)

#### Inputs

##### Product flows

###### Filtration electricity (`filtration_electricity_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Electricity supplied to filtration (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: submetered or allocated electricity for filtration, centrifugation, or decanting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Filtered plant solids (`filtered_plant_solids_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Wet filtered plant solids (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass removed by filters, decanters, or centrifuges; declare moisture and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

###### Filtration wastewater (`filtration_wastewater_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Wastewater from filtration (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: metered or mass-balanced liquid leaving filtration as wastewater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

##### Elementary flows

### Process: Formulation (`formulate`)

#### Inputs

##### Product flows

###### Formulation water (`formulation_water_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Potable process water for formulation (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: metered water dosed into the beverage recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Rapeseed oil (`rapeseed_oil_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade rapeseed oil (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued mass when rapeseed oil is in the recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Sunflower oil (`sunflower_oil_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade sunflower oil (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued mass when sunflower oil is in the recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Sucrose (`sucrose_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade sucrose (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued mass when sucrose is in the recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Glucose syrup (`glucose_syrup_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade glucose syrup (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued wet mass and declared solids when glucose syrup is in the recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Sodium chloride (`sodium_chloride_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade sodium chloride (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued mass when sodium chloride is in the recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Gellan gum (`gellan_gum_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade gellan gum (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued mass when gellan gum is in the recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Xanthan gum (`xanthan_gum_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade xanthan gum (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued mass when xanthan gum is in the recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Sunflower lecithin (`sunflower_lecithin_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade sunflower lecithin (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued mass when sunflower lecithin is in the recipe
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Calcium carbonate (`calcium_carbonate_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade calcium carbonate (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued mass when calcium carbonate fortification is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Tricalcium phosphate (`tricalcium_phosphate_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade tricalcium phosphate (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued mass when tricalcium phosphate fortification is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Riboflavin (`riboflavin_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade riboflavin (vitamin B2) (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued active mass when vitamin B2 fortification is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Cyanocobalamin (`cyanocobalamin_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade cyanocobalamin (vitamin B12) (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued active mass when vitamin B12 fortification is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Ergocalciferol (`ergocalciferol_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade ergocalciferol (vitamin D2) (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued active mass when vitamin D2 fortification is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_recipe`

###### Formulation electricity (`formulation_electricity_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Electricity supplied to formulation mixing (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: submetered or allocated mixer and pump electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Off-specification formulation (`offspec_formulation_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Off-specification formulated plant beverage (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured batch or purge mass not returned to saleable product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

##### Elementary flows

### Process: Enzyme treatment (`enzyme_treat`)

#### Inputs

##### Product flows

###### Alpha-amylase (`alpha_amylase_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade alpha-amylase preparation (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued formulated-product and active-enzyme mass when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_enzyme_fermentation`

###### Beta-glucanase (`beta_glucanase_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade beta-glucanase preparation (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued formulated-product and active-enzyme mass when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_enzyme_fermentation`

###### Protease (`protease_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade protease preparation (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued formulated-product and active-enzyme mass when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_enzyme_fermentation`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Fermentation (`ferment`)

#### Inputs

##### Product flows

###### Declared bacterial starter, single species and strain (`single_bacterial_starter_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade bacterial starter culture, one declared species and strain (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured inoculum mass for each declared species and strain
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_enzyme_fermentation`
- Sources: `tangyu-fermentation-2019`

###### Declared yeast starter, single species and strain (`single_yeast_starter_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade yeast starter culture, one declared species and strain (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured inoculum mass for each declared species and strain
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_enzyme_fermentation`
- Sources: `tangyu-fermentation-2019`

###### Fermentation electricity (`fermentation_electricity_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Electricity supplied to fermentation control (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: submetered agitation, pumping, instrumentation, and temperature-control electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Fermentation reject (`fermentation_reject_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected fermented plant beverage (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured batch or purge mass rejected after fermentation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

##### Elementary flows

###### Biogenic carbon dioxide from fermentation (`fermentation_co2_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Carbon dioxide, biogenic, to air (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured vented mass or calculated from substrate conversion for yeast-containing fermentation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_enzyme_fermentation`

### Process: Homogenisation (`homogenise`)

#### Inputs

##### Product flows

###### Homogenisation electricity (`homogenisation_electricity_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Electricity supplied to homogenisation (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: submetered or equipment-allocated homogeniser electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Heat treatment and cooling (`heat_treat`)

#### Inputs

##### Product flows

###### Heat-treatment electricity (`heat_treatment_electricity_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Electricity supplied to heat treatment (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: submetered or allocated electrical use for heating, pumps, controls, and cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`

###### Process steam (`process_steam_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Process steam supplied to heat treatment (Tiangong UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: metered steam energy or mass converted using measured pressure and enthalpy
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_utilities`

###### Purchased heat (`purchased_heat_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Purchased thermal energy supplied to heat treatment (Tiangong UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased heat when not represented as steam
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_utilities`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Heat-treatment reject (`heat_treatment_reject_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Rejected heat-treated plant beverage (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured start-up, shutdown, hold, or failed-release mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

##### Elementary flows

### Process: Filling and packaging (`fill_package`)

#### Inputs

##### Product flows

###### Glass bottle (`glass_bottle_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade glass bottle (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued bottle count multiplied by verified bottle mass when glass bottles are used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### PET bottle (`pet_bottle_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade PET bottle (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued bottle count multiplied by verified bottle mass when PET bottles are used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### Aseptic beverage carton (`aseptic_carton_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Aseptic laminated beverage carton (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued carton count multiplied by verified empty-carton mass when cartons are used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### HDPE closure (`hdpe_closure_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade HDPE closure (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued closure count multiplied by verified component mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### Aluminium closure (`aluminium_closure_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Food-grade aluminium closure (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued closure count multiplied by verified component mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### Paper label (`paper_label_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Printed paper label (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued label count multiplied by verified label mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### Polypropylene label (`polypropylene_label_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Printed polypropylene label (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued label count multiplied by verified label mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### Corrugated cardboard box (`corrugated_box_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Corrugated cardboard box (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued box count multiplied by verified box mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### LDPE shrink film (`ldpe_film_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: LDPE shrink film (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued film roll mass minus verified return and unused stock
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Filling electricity (`filling_electricity_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Electricity supplied to filling and packaging (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: submetered or allocated filling-line electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference product (`reference_product_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Other non-animal milk, packaged, at plant (Tiangong UUID unresolved)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of conforming product released
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `mass-balance-identity`

##### Waste flows

###### Waste glass bottle (`waste_glass_bottle_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Waste food-grade glass bottle (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected or broken glass-bottle mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Waste PET bottle (`waste_pet_bottle_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Waste food-grade PET bottle (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected PET-bottle mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Waste aseptic carton (`waste_aseptic_carton_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Waste laminated beverage carton (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected carton and carton-offcut mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Waste closure (`waste_closure_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Waste HDPE closure (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected HDPE-closure mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Waste aluminium closure (`waste_aluminium_closure_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Waste food-grade aluminium closure (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected aluminium-closure mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Waste label (`waste_label_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Waste printed paper label (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected paper-label mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Waste polypropylene label (`waste_polypropylene_label_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Waste printed polypropylene label (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected polypropylene-label mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Waste corrugated box (`waste_corrugated_box_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Waste corrugated cardboard box (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured rejected or damaged corrugated-box mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Waste LDPE film (`waste_ldpe_film_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Waste LDPE shrink film (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured offcut and rejected-film mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Filling product loss (`filling_product_loss_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Waste other non-animal milk from filling (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured start-up, shutdown, spill, and rejected-fill product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

##### Elementary flows

### Process: Refrigerated storage (`cold_store`)

#### Inputs

##### Product flows

###### Refrigeration electricity (`refrigeration_electricity_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Electricity supplied to refrigerated storage (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: submetered refrigeration electricity allocated by product mass and storage time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerants_storage`

###### Ammonia refrigerant (`ammonia_refrigerant_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Refrigeration-grade ammonia (R717) (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: purchased top-up mass allocated to the represented refrigeration service
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerants_storage`

###### Carbon dioxide refrigerant (`co2_refrigerant_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Refrigeration-grade carbon dioxide (R744) (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: purchased top-up mass allocated to the represented refrigeration service
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerants_storage`

###### HFC-134a refrigerant (`hfc134a_refrigerant_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Refrigerant HFC-134a (R134a) (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: purchased top-up mass allocated to the represented refrigeration service
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerants_storage`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Ammonia leakage (`ammonia_leakage_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Ammonia, refrigerant, to air (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured loss or inventory-balance loss of R717
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerants_storage`

###### Carbon dioxide refrigerant leakage (`co2_refrigerant_leakage_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Carbon dioxide, refrigerant, to air (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured loss or inventory-balance loss of R744
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerants_storage`

###### HFC-134a leakage (`hfc134a_leakage_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: HFC-134a, to air (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured loss or inventory-balance loss of R134a
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerants_storage`

### Process: Cleaning and utility generation (`cleaning_utilities`)

#### Inputs

##### Product flows

###### Cleaning water (`cleaning_water_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Potable water for equipment cleaning (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: metered cleaning and final-rinse water allocated to represented production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`

###### Sodium hydroxide cleaning agent (`sodium_hydroxide_cleaning_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Sodium hydroxide cleaning solution (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued solution mass and active sodium hydroxide concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`

###### Nitric acid cleaning agent (`nitric_acid_cleaning_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Nitric acid cleaning solution (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued solution mass and active nitric acid concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`

###### Peracetic acid disinfectant (`peracetic_acid_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Peracetic acid disinfectant solution (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued solution mass and active peracetic acid concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`

###### Sodium hypochlorite disinfectant (`sodium_hypochlorite_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Sodium hypochlorite disinfectant solution (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: issued solution mass and active chlorine concentration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`

###### Utility electricity (`utility_electricity_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Electricity supplied to cleaning and utility systems (Tiangong UUID unresolved)
- Flow property / unit: Energy / kWh
- Amount rule: submetered or documented allocation for CIP, compressors, pumps, boilers, and water treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`

###### Natural gas (`natural_gas_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Natural gas combusted on site (Tiangong UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: metered lower-heating-value energy for represented boiler or heater service
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuels_emissions`

###### Liquefied petroleum gas (`lpg_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Liquefied petroleum gas combusted on site (Tiangong UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: invoiced or metered carrier quantity converted using supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuels_emissions`

###### Fuel oil (`fuel_oil_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Fuel oil combusted on site (Tiangong UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: tank or invoice quantity converted using supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuels_emissions`

###### Diesel fuel (`diesel_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Diesel fuel combusted on site (Tiangong UUID unresolved)
- Flow property / unit: Energy / MJ
- Amount rule: issued quantity converted using supplier heating value for stationary or mobile facility equipment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuels_emissions`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Cleaning wastewater (`cleaning_wastewater_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Wastewater from equipment cleaning (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: metered or mass-balanced cleaning wastewater leaving CIP and manual cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_wastewater`

###### Spent caustic cleaning solution (`spent_caustic_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Spent sodium hydroxide cleaning solution (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured discarded caustic solution after documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`

###### Spent acidic cleaning solution (`spent_acid_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Spent nitric acid cleaning solution (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured discarded acidic solution after documented reuse
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`

###### Spent disinfectant solution (`spent_disinfectant_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Spent peracetic acid disinfectant solution (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured discarded disinfectant solution
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`

###### Spent sodium hypochlorite disinfectant solution (`spent_hypochlorite_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Spent sodium hypochlorite disinfectant solution (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured discarded sodium hypochlorite disinfectant solution
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`

##### Elementary flows

###### Fossil carbon dioxide (`combustion_co2_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Carbon dioxide, fossil, to air (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculated from each on-site fuel record and a disclosed factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuels_emissions`

###### Nitrogen oxides (`combustion_nox_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Nitrogen oxides, to air (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculated separately for each combusted fuel
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuels_emissions`

###### Sulfur dioxide (`combustion_so2_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Sulfur dioxide, to air (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculated separately for each combusted fuel and sulfur content
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuels_emissions`

###### Carbon monoxide (`combustion_co_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Carbon monoxide, to air (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculated separately for each combusted fuel
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuels_emissions`

###### Fine particulate matter (`combustion_pm25_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Particulate matter, less than 2.5 micrometres, to air (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured stack mass or calculated separately for each combusted fuel
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuels_emissions`

### Process: On-site wastewater treatment (`treat_wastewater`)

#### Inputs

##### Product flows

##### Waste flows

###### Manufacturing wastewater (`manufacturing_wastewater_input`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Manufacturing wastewater from plant-beverage production (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: metered wastewater entering on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater-treatment sludge (`wastewater_sludge_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Sludge from on-site wastewater treatment (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured wet sludge mass with dry-solids content and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`

##### Elementary flows

###### Treated effluent (`treated_effluent_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Treated wastewater effluent to receiving water (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: metered discharge mass with monitored concentration and load data
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment`

###### Methane from wastewater treatment (`wastewater_methane_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Methane, biogenic, to air (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured or modelled emission from the declared treatment technology
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`

###### Nitrous oxide from wastewater treatment (`wastewater_n2o_output`)

Record this atomic exchange separately for the declared route and determine its quantity with the row-specific amount rule below.

- Selected flow: Nitrous oxide, to air (Tiangong UUID unresolved)
- Flow property / unit: Mass / kg
- Amount rule: measured or modelled emission from the declared treatment technology
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming packaged beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_avoid` | Multi-output operations | First avoid allocation by submetering, batch-specific records, and subdivision of extraction, formulation, packaging, utility, and treatment operations. | `eu-pef-2021-2279` |
| `al_filtered_solids` | Filtered plant solids | Classify wet filtered solids as a co-product only when they meet a documented specification and leave for an economic use. If they are discarded or paid for as treatment, keep them as waste and do not assign an avoided-product credit without a governed consequential scenario. | `eu-pef-2021-2279`; `aydar-plant-milk-2020` |
| `al_physical_then_economic` | Unavoidable shared burdens | When subdivision is not possible, use a justified physical relationship such as measured mass, dry matter, energy, or processing time. Use economic allocation only when no defensible physical relationship exists, and disclose prices, period, currency, and sensitivity. | `eu-pef-2021-2279` |
| `al_recycling` | Packaging and recovered residues | Report gross inputs and outputs before recycling credits. Apply the chosen study programme's recycling method consistently and do not combine it with an unreported avoided-burden credit. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_materials_recipe` | `receive_prepare_base`; `formulate` | Plant bases and recipe ingredients | receiving, inventory, batch and recipe records | material identity; supplier; lot; received mass; issued mass; returns; moisture or active content; recipe; product output | reconcile purchase, stock, issue and batch records | kg, kg dry matter, or kg active substance | each lot and batch | representative production period | all represented lines | sum net issued mass by atomic material and recipe; normalise to released product | invoices, lot records, calibrated scales, recipe approval, stock reconciliation |
| `cp_water_utilities` | `soak_base`; `grind_extract`; `formulate`; `heat_treat`; `cleaning_utilities` | Water, steam, and purchased heat | meters and operating logs | meter opening/closing; flow; steam pressure; temperature; condensate; heat meter; downtime | read dedicated meters or apply documented engineering allocation | kg, m3, MJ | batch or daily | representative production period | all represented utilities | subtract unrelated use and normalise by released product | meter calibration, allocation rationale, operating logs |
| `cp_process_energy` | all foreground production processes | Process electricity | submeter and equipment records | kWh; runtime; load; line; batch; product output | submeter directly or allocate from verified equipment runtime and load | kWh | batch, shift, or daily | representative production period | all represented lines | sum by process and normalise by released product | calibrated meter or documented allocation model |
| `cp_enzyme_fermentation` | `enzyme_treat`; `ferment` | Enzymes, cultures, controls, and fermentation gas | issue records, batch sheets, control historian | identity; species; strain; issued mass; activity; inoculum; time; temperature; pH; endpoint; reject; vent data | record each enzyme and culture separately and retain validated process controls | kg, activity unit, h, degrees C, pH, kg gas | each batch | all represented fermented batches | all fermentation equipment serving represented batches | aggregate only identical route and product variants | supplier certificate, batch record, calibrated sensors, release decision |
| `cp_packaging` | `fill_package` | Packaging inputs and rejects | issue, count, component specification and waste records | component identity; material; count; unit mass; issued mass; returns; rejects | count components and verify unit mass or reconcile issued mass | item and kg | each packaging run | representative production period | each packaging format | calculate each component separately and normalise by net product mass | component specification, calibrated scale, line reconciliation |
| `cp_product_release` | `fill_package` | Reference product and product loss | batch, tank, filler and release records | tank mass or volume; density; filled count; net fill; rejects; release status | reconcile treated product, packaged output, retained stock, and loss | kg | each batch and filling run | representative production period | all represented products | include only conforming released mass in denominator | calibrated tank/filler records, density record, release certificate |
| `cp_residues_wastewater` | all production processes | Residues, rejects, product loss, and wastewater | waste tickets, container weights, meters and mass balance | stream identity; wet mass; dry solids; volume; density; destination; treatment | measure each stream separately; prohibit mixed residual labels | kg, kg dry matter, or m3 | batch, shift, or shipment | representative production period | all represented lines | subtract tare; convert volume with measured density; normalise to released product | scale tickets, meter records, analytical certificate, destination evidence |
| `cp_cleaning` | `cleaning_utilities` | Cleaning water and chemicals | CIP historian, issue and concentration records | cycle; circuit; water; chemical identity; solution mass; active concentration; temperature; time; conductivity; pH; reuse; discard | collect by chemical and cleaning circuit | kg, m3, degrees C, min, pH | each cleaning cycle | representative production period | all product-contact circuits | allocate only when dedicated data are unavailable and disclose driver | calibrated sensors, chemical certificates, sanitation verification |
| `cp_fuels_emissions` | `cleaning_utilities` | Each fuel and direct combustion emission | fuel meters, invoices, composition and stack records | carrier; quantity; heating value; carbon and sulfur content; stack concentration; flow; runtime | record each fuel separately; calculate each emission with disclosed factor when not measured | MJ and kg | monthly or operating period | representative production period | all on-site combustion sources | allocate by metered useful service or documented operating driver | supplier certificate, calibrated meter, stack test, factor reference |
| `cp_refrigerants_storage` | `cold_store` | Refrigeration electricity and each refrigerant | electricity meters, charge, purchase, service and leak records | kWh; refrigerant identity; charge; top-up; recovery; disposal; storage mass; duration | inventory balance by refrigerant and allocate electricity by mass-time or measured load | kWh, kg, kg-day | monthly and each service event | representative production period | all cold stores serving product | calculate loss separately for R717, R744, and R134a | service log, purchase/recovery tickets, leak inspection, meter record |
| `cp_wastewater_treatment` | `treat_wastewater` | Influent, effluent, sludge, methane, and nitrous oxide | meters, laboratory results, sludge tickets and treatment logs | flow; pH; temperature; COD or TOC; nitrogen; phosphorus; solids; sludge mass and dry solids; gas | monitor at relevant inlet, treatment, discharge, and sludge-removal points | kg, m3, mg/L, kg dry matter | continuous flow plus sampling frequency justified by permit and variability | representative production period | on-site treatment system | calculate loads as flow times concentration; normalise to released product | calibrated meters, accredited tests, permit reports, sludge destination records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | Reference product | released mass = sum(conforming filled units × verified net mass), cross-checked against tank mass and density | fill count; net mass; tank volume; density; rejects | kg conforming packaged beverage | `mass-balance-identity` |
| `calc_normalise` | All foreground exchanges | normalised exchange = period exchange ÷ conforming released product mass for the same period | atomic exchange quantity; released product mass | exchange per kg reference product | `mass-balance-identity` |
| `calc_packaging_mass` | Each packaging component | component mass = issued component count × verified unit mass, or net issued mass where directly weighed | count; unit mass; issued mass; returns | kg of one packaging component | `mass-balance-identity` |
| `calc_water_load` | Wastewater analytes | pollutant load = wastewater volume × measured concentration with consistent units | flow; concentration | kg pollutant per period and per kg product | `eu-jrc-fdm-bref-2019` |
| `calc_fuel_emission` | Each direct combustion emission | emission = each fuel quantity × disclosed carrier-specific factor, unless representative stack measurement is available | fuel quantity; heating value; factor or stack data | kg emission by substance | `eu-jrc-fdm-bref-2019` |
| `calc_refrigerant_loss` | Each refrigerant | loss = opening charge + additions − recovered amount − closing charge, calculated separately by refrigerant | charge and service records | kg refrigerant emitted or unaccounted | `eu-jrc-fdm-bref-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Product and materials | Declare the plant species, ingredient form, supplier, recipe, and product variant; do not substitute a separately classified milk flow or a generic protein drink. | approved specification, supplier record, recipe, classification check |
| `dq_route` | Process inventory | Record actual inclusion or exclusion of every conditional route and preserve route-specific batches rather than averaging incompatible extraction, fermentation, preservation, or packaging systems. | process flow diagram, batch record, equipment list |
| `dq_temporal` | Foreground period | Use a period representative of normal production and disclose start/end dates, production volume, shutdowns, trials, and abnormal losses. | production and maintenance calendar |
| `dq_completeness` | Mass, water, and energy | Reconcile plant bases, product output, residues, wastewater, packaging, water, electricity, heat, and fuels; explain every material imbalance or unmetered allocation. | signed reconciliation and meter coverage map |
| `dq_food_safety` | Product release and cleaning | Retain validated preservation limits, monitoring, corrective action, cleaning verification, allergen controls, and release decision for the declared product. | HACCP or equivalent plan, sanitation record, release certificate |
| `dq_sources` | Secondary data | Record provider, geography, technology, time, system boundary, version, and substitutions for every linked dataset. | dataset provenance record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference` | Reference flow | Require exactly 1 kg of conforming packaged other non-animal milk and all required qualifiers; fail if the reference UUID is filled with a narrower product flow. | `un-cpc-30-2025`; `mass-balance-identity` |
| `val_atomic` | Inventory | Require one atomic exchange per card and reject combined plant bases, ingredients, utilities, fuels, refrigerants, packaging, wastes, or emissions. | `eu-jrc-fdm-bref-2019` |
| `val_route` | Conditional processes | Require explicit applicability and operating evidence for soaking, extraction, filtration, enzyme treatment, fermentation, homogenisation, thermal route, and refrigeration; do not infer absent or present routes from product name. | `aydar-plant-milk-2020`; `tangyu-fermentation-2019` |
| `val_mass_balance` | Product and residuals | Reconcile received plant material and other mass inputs with conforming product, filtered solids, rejects, wastewater, sludge, and stock change for the same period. | `mass-balance-identity`; `eu-jrc-fdm-bref-2019` |
| `val_hygiene_release` | Cleaning and heat treatment | Require validated limits, monitoring records, corrective actions, verification, and release disposition for product safety controls. | `fao-who-food-hygiene-2023` |
| `val_no_unsupported_range` | Amount ranges | Reject an empirical range derived from one case, an abstract, or incompatible routes; require at least two independent, original, boundary-compatible sources or omit the range and retain the collection rule. | `mass-balance-identity` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground plant-gate production dataset that may be published as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Product carbon footprint, life-cycle assessment, procurement, formulation or packaging scenarios, and lifecyclemodel construction for the declared plant beverage |
| allowed_use | Use only for products matching the declared plant species, recipe, process route, geography, period, packaging, preservation, storage, and allocation assumptions |
| excluded_use | Do not use as a generic proxy for coconut, almond, soy, rice, oat, animal milk, powder, infant formula, spoonable fermented food, or an undeclared plant-base route |
| required_metadata | plant identity and origin; ingredient form and recipe; functional and reference flow qualifiers; process inclusion; fermentation and heat-treatment controls; packaging; storage; facility and period; allocation; upstream datasets; uncertainty and data gaps |
| required_quality_disclosure | meter and record coverage; mass, water, and energy reconciliation; sampling and calculation methods; route-specific exclusions; co-product and waste classification; unresolved UUID and range evidence; food-safety release evidence |
| update_trigger | Change in plant species, recipe, supplier form, extraction or fermentation route, enzyme, preservation regime, packaging, refrigeration system, fuel mix, facility, allocation, regulation, or representative production period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-30-2025` | `official_guidance` | United Nations Statistics Division. *Central Product Classification Version 3.0 Explanatory Notes*, code 24429, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-23). | Category scope and exclusions |
| `aydar-plant-milk-2020` | `literature` | Aydar, E.F., Tütüncü, S., and Özçelik, B. *Plant-based milk substitutes: Bioactive compounds, conventional and novel processes, bioavailability studies, and health effects*. Journal of Functional Foods 70 (2020) 103975. https://doi.org/10.1016/j.jff.2020.103975. | Multi-source process decomposition, common operations, and plant-specific conditional routes |
| `tangyu-fermentation-2019` | `literature` | Tangyu, M., Muller, J., Bolten, C.J., and Wittmann, C. *Fermentation of plant-based milk alternatives for improved flavour and nutritional value*. Applied Microbiology and Biotechnology 103 (2019) 9263–9275. https://doi.org/10.1007/s00253-019-10175-9. | Conditional fermentation routes, culture identity, and route-specific control requirements |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre. *Best Available Techniques Reference Document for the Food, Drink and Milk Industries*, EUR 29978 EN, JRC118627, 2019. https://doi.org/10.2760/243911. | Water, energy, raw-material, wastewater, air-emission, cleaning, packaging, and refrigerant inventory rules |
| `fao-who-food-hygiene-2023` | `official_guidance` | FAO and WHO. *General Principles of Food Hygiene*, CXC 1-1969, Rome, 2023. https://doi.org/10.4060/cc6125en. | Hygiene, cleaning, preventive controls, monitoring, corrective action, verification, and documentation |
| `eu-pef-2021-2279` | `official_guidance` | European Commission. *Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods*, 2021. http://data.europa.eu/eli/reco/2021/2279/oj. | Life-cycle boundary, allocation, recycling consistency, and secondary-data disclosure |
| `mass-balance-identity` | `method_factor` | Conservation-of-mass and inventory reconciliation identity. | Reference normalization, packaging calculation, mass balance, and unsupported-range prohibition |
