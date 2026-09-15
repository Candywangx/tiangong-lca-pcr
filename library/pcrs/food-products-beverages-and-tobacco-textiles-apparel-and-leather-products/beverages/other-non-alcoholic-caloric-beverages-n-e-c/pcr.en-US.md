---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.other-non-alcoholic-caloric-beverages-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other non-alcoholic caloric beverages, n.e.c.

## 1. Scope and Applicability

This PCR applies to non-alcoholic beverages that provide caloric content and are not more specifically classified elsewhere. It covers ready-to-drink and sold-as-concentrate forms when the product is marketed as a beverage or beverage preparation. Covered forms may be carbonated or non-carbonated, clear or cloudy, and may include particulates. Examples include caloric flavoured soft drinks, punches and ades, sport, energy or electrolyte drinks, and comparable caloric beverage concentrates. The CPC 3.0 subclass definition controls the boundary; Codex beverage categories are used only to describe representative commercial forms and do not expand the CPC boundary to non-caloric products.

This PCR does not cover unsweetened and unflavoured bottled water, non-animal milk, non-alcoholic wine, non-alcoholic beer, alcoholic beverages, a juice or another beverage assigned to a more specific product category, or a wholly non-caloric drink. Food safety, nutrition, additive limits, and legal labelling remain governed by applicable law and product standards and are not determined by this LCA PCR.

The Tiangong flow `Carbonated beverage` is a reference representative for a carbonated ready-to-drink form. It is not a silent proxy for the entire category. A foreground data package for another form shall select a more specific public Tiangong product flow when one faithfully matches the real product; otherwise it shall retain the representative flow only with an explicit scope limitation and all required qualifiers.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.other-non-alcoholic-caloric-beverages-n-e-c |
| classification_refs | CPC 3.0 `24499` — Other non-alcoholic caloric beverages, n.e.c. (exact) |
| covered_products | Non-alcoholic caloric beverage products not elsewhere classified, including caloric carbonated and non-carbonated water-based flavoured drinks, caloric sport/energy/electrolyte drinks, punches and ades, particulated drinks, and caloric liquid, frozen, syrup or powder concentrates sold to prepare such beverages, subject to the actual product classification. |
| excluded_products | Products with a more specific classification, including unsweetened/unflavoured bottled water, non-animal milk, non-alcoholic wine, non-alcoholic beer, specifically classified juices or beverages, alcoholic beverages, wholly non-caloric drinks, and ingredients not marketed as a beverage or beverage preparation. |
| representative_product | `Carbonated beverage` is the representative carbonated ready-to-drink form only. The actual beverage identity, formulation class, concentration and carbonation state delimit applicability. |
| production_route | Receipt and preparation of water and ingredients; formulation and blending; conditional conditioning such as filtration, homogenisation or heat treatment; conditional carbonation; filling and packaging; cleaning, sanitation, waste and wastewater handling. |
| market_state | Finished beverage or beverage concentrate at the manufacturing gate, at the declared sold concentration and temperature condition, with packaging profile reported separately from net beverage mass. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A non-alcoholic caloric beverage within this PCR, at its declared sold concentration and commercial form. |
| How much | 1 kg net beverage product, excluding primary, secondary and tertiary packaging. |
| How well | Conforming to the declared formulation, caloric status, concentration or dilution instructions, carbonation state, particulate state and release specification for the represented production lot. |
| How long or cycle | One production lot delivered at the manufacturing gate; no service-life duration is assigned. |
| reference_flow_link | `rf_net_beverage_mass` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net beverage product at the sold concentration. |
| Reference product flow | Carbonated beverage `b6cb89fa-5fac-4d09-85d6-f6e1934200b2` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | Actual product name and formulation class; caloric ingredient and basis for caloric status; ready-to-drink or concentrate form; sold concentration and, when applicable, preparation dilution ratio; carbonated or non-carbonated state and carbonation specification when applicable; clear/cloudy/particulate state; net beverage mass; package type and fill size; production technology; geography; reference period; explicit statement whether the representative Tiangong flow is exact or retained as a limited proxy. |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. If a more specific public Tiangong product flow matches the actual beverage, that flow shall replace `Carbonated beverage`; the Mass property, Units of mass group and kg reference unit remain unless the selected public record requires a reviewed alternative.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference beverage product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net beverage at sold concentration. Exclude packaging mass and retain the weighing or filling record used to determine net mass. |
| `concentrate_state` | Concentrated beverage products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep the reference flow at 1 kg product as sold. Any as-consumed result shall be a separately calculated scenario using the declared preparation ratio; never mix as-sold and as-consumed inventories. |
| `carbonation_mass` | Added or vented carbon dioxide | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer supplier mass, mass-flow or cylinder inventory. If a volume-based record is converted, retain temperature, pressure, gas composition, conversion equation and source data. |
| `packaging_separation` | Primary, secondary and tertiary packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report packaging as separate product inputs per 1 kg net beverage; do not add packaging mass to the reference amount. |
| `batch_mass_balance` | Each included foreground process and the aggregated facility | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use a consistent wet-mass basis for material inputs, product, rework, rejects, waste and measured losses; disclose any volume-to-mass conversion and unresolved balance difference. |

## 5. System Boundary

The foreground boundary begins when purchased water, beverage ingredients, food-grade carbon dioxide, packaging, utilities and cleaning materials enter the manufacturing site and ends when the packaged beverage or beverage preparation is released at the manufacturing gate. Upstream datasets remain required for purchased inputs. Distribution, retail refrigeration, preparation by a customer, consumption and packaging end-of-life are outside the default foreground package and may be added only as explicitly declared downstream scenarios.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased or transferred water, ingredients, carbon dioxide, packaging, utilities and cleaning materials at the manufacturing-site receiving boundary, with supplier identity, state, concentration and quantity recorded. |
| starting_condition_role | Starting condition for foreground beverage manufacture; upstream production and inbound transport are linked through separate datasets rather than recreated inside the foreground processes. |
| product_classification_scope | Non-alcoholic caloric beverages not elsewhere classified; the specific product form and exclusions in Sections 1 and 2 govern. |
| recursive_input_rule | A purchased beverage base, concentrate or rework flow in the same product category is recorded once as a product input with its upstream dataset. Do not recursively apply this PCR to recreate that input, and do not count transfers between included on-site processes as new external inputs. |
| upstream_dataset_requirement | Link representative and temporally, geographically and technologically appropriate datasets for purchased ingredients, water supply when applicable, carbon dioxide, energy, packaging, cleaning materials, waste treatment and inbound transport included in the study boundary. |
| disclosure | Declare site and line, product identity and sold concentration, formulation route, included and conditional processes, data period, allocation, cut-offs or omissions, upstream dataset choices, packaging profile, downstream exclusions and any use of the representative flow as a proxy. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `sb_manufacturing_operations` | foreground manufacturing | Include water preparation, ingredient preparation and blending, all applied conditioning, carbonation when applied, filling and packaging, production losses, cleaning and sanitation, and foreground waste and wastewater handling. | `eu-fdm-bat-2019` |
| `sb_purchased_inputs` | upstream links | Quantify purchased materials, energy and packaging at the receiving boundary and link upstream datasets and included inbound transport; do not substitute an undocumented zero burden. | `ghg-protocol-product-2011`; `epd-food-beverage-pcr-2025` |
| `sb_packaging` | packaging system | Include primary, secondary and tertiary packaging used for the declared output and separately record line losses and returned or reusable packaging. | `epd-food-beverage-pcr-2025` |
| `sb_losses_and_emissions` | losses, waste and emissions | Include beverage losses, ingredient spills, packaging waste, cleaning discharges, wastewater streams and direct air or water emissions attributable to included processes. | `eu-fdm-bat-2019` |
| `sb_downstream_scenarios` | distribution, use and end-of-life | Exclude downstream stages from the default manufacturing-gate foreground package. Add them only in a declared lifecycle model with scenario-specific transport, storage, preparation and end-of-life assumptions. | `ghg-protocol-product-2011` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `water_preparation` | Water receipt and preparation | required | Always include; report zero treatment only when supplied water enters without on-site treatment. | Foreground water supply and preparation | kg prepared water transferred to formulation |
| `formulation_blending` | Ingredient preparation, dosing and blending | required | Always include for the actual formula. | Foreground formulation and beverage mixing | kg blended beverage produced |
| `product_conditioning` | Filtration, homogenisation, deaeration or heat treatment | conditional | Include every conditioning operation applied to the actual product; omit only with explicit route evidence. | Foreground product conditioning | kg conditioned beverage produced |
| `carbonation` | Carbon dioxide dosing and carbonation | conditional | Include when carbon dioxide is added or carbonation is otherwise controlled on site. | Foreground carbonation | kg beverage leaving carbonation |
| `filling_packaging` | Filling, closing, labelling and packing | required | Always include for the sold product; bulk output shall declare the actual container system. | Foreground final production | 1 kg net conforming beverage at the manufacturing gate |
| `cleaning_wastewater` | Cleaning, sanitation and wastewater handling | required | Always include allocated cleaning and sanitation; include on-site wastewater treatment when operated. | Foreground supporting operation and emission control | cleaning campaign and wastewater attributable to declared output |

### Process: Water receipt and preparation (`water_preparation`)

#### Inputs

##### Product flows

###### Municipal tap water entering the site (`source_water_tap`)

Record municipal tap water entering the site as one separate exchange.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Applicability: Use only for municipal supply; exclude purchased raw surface water and direct-abstraction rows for the same quantity.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or invoiced water quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_preparation`
- Sources:

###### Purchased raw surface water entering the site (`source_water_purchased_surface`)

Record purchased raw surface water entering the site as one separate exchange.

- Selected flow: Raw surface water
- Applicability: Use only for purchased raw surface water; exclude direct river and lake abstraction for the same quantity.
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered or invoiced water quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_preparation`
- Sources:

###### Water preparation electricity - below 1 kV (`water_prep_electricity_lv`)

Record water preparation electricity - below 1 kv as one separate exchange.

- Selected flow: Alternating current, below 1 kV, consumption mix, to user
- Applicability: Use only for the below 1 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_preparation`
- Sources:

###### Water preparation electricity - 1-35 kV (`water_prep_electricity_mv`)

Record water preparation electricity - 1-35 kv as one separate exchange.

- Selected flow: Alternating current, 1-35 kV, consumption mix, to user
- Applicability: Use only for the 1-35 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_preparation`
- Sources:

###### Water preparation electricity - 35-330 kV (`water_prep_electricity_hv`)

Record water preparation electricity - 35-330 kv as one separate exchange.

- Selected flow: Alternating current, 35-330 kV, consumption mix, to user
- Applicability: Use only for the 35-330 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_preparation`
- Sources:

###### Water preparation electricity - on-site photovoltaic (`water_prep_electricity_pv`)

Record water preparation electricity - on-site photovoltaic as one separate exchange.

- Selected flow: Photovoltaic alternating current, on-site generation
- Applicability: Use only for the on-site photovoltaic supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_preparation`
- Sources:

##### Waste flows

No exchange is defined for this group.

##### Elementary flows

###### Direct groundwater abstraction (`source_water_ground`)

Record direct groundwater abstraction as one separate exchange.

- Selected flow: ground water `4f462198-40cd-4184-8733-86648a20dc3f`
- Applicability: Use only for direct groundwater abstraction; exclude purchased-water and the two alternative direct-water rows for the same quantity.
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered or invoiced water quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_preparation`
- Sources:

###### Direct river-water abstraction (`source_water_river`)

Record direct river-water abstraction as one separate exchange.

- Selected flow: river water `805a7346-1664-4483-afe3-4b224be5e361`
- Applicability: Use only for direct river-water abstraction; exclude purchased-water and the two alternative direct-water rows for the same quantity.
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered or invoiced water quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_preparation`
- Sources:

###### Direct lake-water abstraction (`source_water_lake`)

Record direct lake-water abstraction as one separate exchange.

- Selected flow: lake water `c506b970-7b92-452f-8d6f-05d4f203d958`
- Applicability: Use only for direct lake-water abstraction; exclude purchased-water and the two alternative direct-water rows for the same quantity.
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered or invoiced water quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_preparation`
- Sources:

#### Outputs

##### Product flows

###### Prepared process water (`prepared_process_water`)

Record prepared process water as one separate exchange.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Applicability: Use for non-deionised prepared water; exclude the deionised-water row for the same transfer.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered transfer or mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_preparation`
- Sources:

###### Prepared deionised water (`prepared_deionised_water`)

Record prepared deionised water as one separate exchange.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Applicability: Use only for deionised-water output; exclude the general process-water row for the same transfer.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered transfer or mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared water output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_preparation`
- Sources:

##### Waste flows

###### Water-treatment concentrate wastewater (`water_treatment_concentrate`)

Record water-treatment concentrate wastewater as one separate exchange.

- Selected flow: Water-treatment concentrate wastewater
- Applicability: Include only when water-treatment concentrate wastewater crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_preparation`
- Sources:

###### Spent water-treatment filter cartridge (`water_treatment_spent_filter`)

Record spent water-treatment filter cartridge as one separate exchange.

- Selected flow: Spent water-treatment filter cartridge
- Applicability: Include only when spent water-treatment filter cartridge crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_preparation`
- Sources:

###### Water-treatment sludge (`water_treatment_sludge`)

Record water-treatment sludge as one separate exchange.

- Selected flow: Water-treatment sludge
- Applicability: Include only when water-treatment sludge crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_preparation`
- Sources:

##### Elementary flows

No exchange is defined for this group.

### Process: Ingredient preparation, dosing and blending (`formulation_blending`)

#### Inputs

##### Product flows

###### Soft white sugar (`ingredient_soft_white_sugar`)

Record soft white sugar as one separate exchange.

- Selected flow: Soft white sugar `d3dfedfb-7d93-4553-aba3-02940edaf6aa`
- Applicability: Include only when soft white sugar crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Glucose syrup (`ingredient_glucose_syrup`)

Record glucose syrup as one separate exchange.

- Selected flow: Glucose syrup
- Applicability: Include only when glucose syrup crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### High-fructose corn syrup (`ingredient_high_fructose_corn_syrup`)

Record high-fructose corn syrup as one separate exchange.

- Selected flow: High-fructose corn syrup
- Applicability: Include only when high-fructose corn syrup crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Fruit juice concentrate (`ingredient_fruit_juice_concentrate`)

Record fruit juice concentrate as one separate exchange.

- Selected flow: Fruit juice concentrate
- Applicability: Include only when fruit juice concentrate crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Maltodextrin (`ingredient_maltodextrin`)

Record maltodextrin as one separate exchange.

- Selected flow: Maltodextrin `4f3e862f-2f27-4b33-b63b-f724621c0d96`
- Applicability: Include only when maltodextrin crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Citric acid (`ingredient_citric_acid`)

Record citric acid as one separate exchange.

- Selected flow: Citric Acid `80e2772b-119c-4565-a919-a70939d89dff`
- Applicability: Include only when citric acid crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Phosphoric acid (`ingredient_phosphoric_acid`)

Record phosphoric acid as one separate exchange.

- Selected flow: Phosphoric acid `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- Applicability: Include only when phosphoric acid crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Food-grade salt (`ingredient_food_salt`)

Record food-grade salt as one separate exchange.

- Selected flow: Salt `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Applicability: Include only when food-grade salt crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Sodium citrate (`ingredient_sodium_citrate`)

Record sodium citrate as one separate exchange.

- Selected flow: Sodium citrate
- Applicability: Include only when sodium citrate crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Liquid flavour preparation (`ingredient_liquid_flavour`)

Record liquid flavour preparation as one separate exchange.

- Selected flow: Liquid flavour preparation
- Applicability: Include only when liquid flavour preparation crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Caramel colour (`ingredient_caramel_colour`)

Record caramel colour as one separate exchange.

- Selected flow: Caramel colour
- Applicability: Include only when caramel colour crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Pectin (`ingredient_pectin`)

Record pectin as one separate exchange.

- Selected flow: Pectin
- Applicability: Include only when pectin crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Sodium benzoate (`ingredient_sodium_benzoate`)

Record sodium benzoate as one separate exchange.

- Selected flow: Sodium benzoate
- Applicability: Include only when sodium benzoate crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Potassium sorbate (`ingredient_potassium_sorbate`)

Record potassium sorbate as one separate exchange.

- Selected flow: Potassium sorbate
- Applicability: Include only when potassium sorbate crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Ascorbic acid (`ingredient_ascorbic_acid`)

Record ascorbic acid as one separate exchange.

- Selected flow: Ascorbic acid
- Applicability: Include only when ascorbic acid crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Caffeine (`ingredient_caffeine`)

Record caffeine as one separate exchange.

- Selected flow: Caffeine
- Applicability: Include only when caffeine crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Fruit pulp (`ingredient_fruit_pulp`)

Record fruit pulp as one separate exchange.

- Selected flow: Fruit pulp
- Applicability: Include only when fruit pulp crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Process water for formulation (`formulation_process_water`)

Record process water for formulation as one separate exchange.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Applicability: Use for non-deionised process water; exclude deionised water for the same quantity.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or invoiced water quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Deionised water for formulation (`formulation_deionised_water`)

Record deionised water for formulation as one separate exchange.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- Applicability: Use only for deionised water; exclude process water for the same quantity.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or invoiced water quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Blending electricity - below 1 kV (`blending_electricity_lv`)

Record blending electricity - below 1 kv as one separate exchange.

- Selected flow: Alternating current, below 1 kV, consumption mix, to user
- Applicability: Use only for the below 1 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Blending electricity - 1-35 kV (`blending_electricity_mv`)

Record blending electricity - 1-35 kv as one separate exchange.

- Selected flow: Alternating current, 1-35 kV, consumption mix, to user
- Applicability: Use only for the 1-35 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Blending electricity - 35-330 kV (`blending_electricity_hv`)

Record blending electricity - 35-330 kv as one separate exchange.

- Selected flow: Alternating current, 35-330 kV, consumption mix, to user
- Applicability: Use only for the 35-330 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Blending electricity - on-site photovoltaic (`blending_electricity_pv`)

Record blending electricity - on-site photovoltaic as one separate exchange.

- Selected flow: Photovoltaic alternating current, on-site generation
- Applicability: Use only for the on-site photovoltaic supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Blending purchased steam (`blending_steam`)

Record blending purchased steam as one separate exchange.

- Selected flow: Heat from steam `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- Applicability: Use only when steam crosses the site boundary; do not count upstream boiler fuel as on-site fuel for the same heat duty.
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Blending purchased hot water (`blending_hot_water`)

Record blending purchased hot water as one separate exchange.

- Selected flow: Purchased hot water
- Applicability: Use only when hot water crosses the site boundary; exclude purchased steam and on-site fuel for the same heat duty.
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Blending natural gas (`blending_natural_gas`)

Record blending natural gas as one separate exchange.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Applicability: Use only for on-site natural gas combustion; exclude purchased heat and the two alternative fuel rows for the same burner duty.
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Blending liquefied petroleum gas (`blending_lpg`)

Record blending liquefied petroleum gas as one separate exchange.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Applicability: Use only for on-site liquefied petroleum gas combustion; exclude purchased heat and the two alternative fuel rows for the same burner duty.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Blending diesel oil (`blending_diesel`)

Record blending diesel oil as one separate exchange.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Applicability: Use only for on-site diesel oil combustion; exclude purchased heat and the two alternative fuel rows for the same burner duty.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Blending compressed air (`blending_compressed_air`)

Record blending compressed air as one separate exchange.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Applicability: Use only when compressed air crosses this process boundary; do not duplicate compressor electricity in this row.
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

##### Waste flows

No exchange is defined for this group.

##### Elementary flows

No exchange is defined for this group.

#### Outputs

##### Product flows

###### Blended beverage intermediate (`blended_beverage`)

Record blended beverage intermediate as one separate exchange.

- Selected flow: Blended beverage intermediate
- Applicability: Include only when blended beverage intermediate crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered transfer or mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg blended beverage output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

##### Waste flows

###### Discarded soft white sugar (`formulation_discard_soft_white_sugar`)

Record discarded soft white sugar as one separate exchange.

- Selected flow: Discarded Soft white sugar
- Applicability: Include only when discarded soft white sugar crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded glucose syrup (`formulation_discard_glucose_syrup`)

Record discarded glucose syrup as one separate exchange.

- Selected flow: Discarded Glucose syrup
- Applicability: Include only when discarded glucose syrup crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded high-fructose corn syrup (`formulation_discard_high_fructose_corn_syrup`)

Record discarded high-fructose corn syrup as one separate exchange.

- Selected flow: Discarded High-fructose corn syrup
- Applicability: Include only when discarded high-fructose corn syrup crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded fruit juice concentrate (`formulation_discard_fruit_juice_concentrate`)

Record discarded fruit juice concentrate as one separate exchange.

- Selected flow: Discarded Fruit juice concentrate
- Applicability: Include only when discarded fruit juice concentrate crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded maltodextrin (`formulation_discard_maltodextrin`)

Record discarded maltodextrin as one separate exchange.

- Selected flow: Discarded Maltodextrin
- Applicability: Include only when discarded maltodextrin crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded citric acid (`formulation_discard_citric_acid`)

Record discarded citric acid as one separate exchange.

- Selected flow: Discarded Citric Acid
- Applicability: Include only when discarded citric acid crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded phosphoric acid (`formulation_discard_phosphoric_acid`)

Record discarded phosphoric acid as one separate exchange.

- Selected flow: Discarded Phosphoric acid
- Applicability: Include only when discarded phosphoric acid crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded food-grade salt (`formulation_discard_food_salt`)

Record discarded food-grade salt as one separate exchange.

- Selected flow: Discarded Salt
- Applicability: Include only when discarded food-grade salt crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded sodium citrate (`formulation_discard_sodium_citrate`)

Record discarded sodium citrate as one separate exchange.

- Selected flow: Discarded Sodium citrate
- Applicability: Include only when discarded sodium citrate crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded liquid flavour preparation (`formulation_discard_liquid_flavour`)

Record discarded liquid flavour preparation as one separate exchange.

- Selected flow: Discarded Liquid flavour preparation
- Applicability: Include only when discarded liquid flavour preparation crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded caramel colour (`formulation_discard_caramel_colour`)

Record discarded caramel colour as one separate exchange.

- Selected flow: Discarded Caramel colour
- Applicability: Include only when discarded caramel colour crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded pectin (`formulation_discard_pectin`)

Record discarded pectin as one separate exchange.

- Selected flow: Discarded Pectin
- Applicability: Include only when discarded pectin crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded sodium benzoate (`formulation_discard_sodium_benzoate`)

Record discarded sodium benzoate as one separate exchange.

- Selected flow: Discarded Sodium benzoate
- Applicability: Include only when discarded sodium benzoate crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded potassium sorbate (`formulation_discard_potassium_sorbate`)

Record discarded potassium sorbate as one separate exchange.

- Selected flow: Discarded Potassium sorbate
- Applicability: Include only when discarded potassium sorbate crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded ascorbic acid (`formulation_discard_ascorbic_acid`)

Record discarded ascorbic acid as one separate exchange.

- Selected flow: Discarded Ascorbic acid
- Applicability: Include only when discarded ascorbic acid crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded caffeine (`formulation_discard_caffeine`)

Record discarded caffeine as one separate exchange.

- Selected flow: Discarded Caffeine
- Applicability: Include only when discarded caffeine crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Discarded fruit pulp (`formulation_discard_fruit_pulp`)

Record discarded fruit pulp as one separate exchange.

- Selected flow: Discarded Fruit pulp
- Applicability: Include only when discarded fruit pulp crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

###### Off-specification blended beverage (`formulation_offspec_beverage`)

Record off-specification blended beverage as one separate exchange.

- Selected flow: Off-specification blended beverage
- Applicability: Include only when off-specification blended beverage crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_batch`
- Sources:

##### Elementary flows

No exchange is defined for this group.

### Process: Filtration, homogenisation, deaeration or heat treatment (`product_conditioning`)

#### Inputs

##### Product flows

###### Blended beverage entering conditioning (`conditioning_feed_blended`)

Record blended beverage entering conditioning as one separate exchange.

- Selected flow: Blended beverage intermediate
- Applicability: Include only when blended beverage entering conditioning crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered transfer or mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned beverage output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Conditioning electricity - below 1 kV (`conditioning_electricity_lv`)

Record conditioning electricity - below 1 kv as one separate exchange.

- Selected flow: Alternating current, below 1 kV, consumption mix, to user
- Applicability: Use only for the below 1 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Conditioning electricity - 1-35 kV (`conditioning_electricity_mv`)

Record conditioning electricity - 1-35 kv as one separate exchange.

- Selected flow: Alternating current, 1-35 kV, consumption mix, to user
- Applicability: Use only for the 1-35 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Conditioning electricity - 35-330 kV (`conditioning_electricity_hv`)

Record conditioning electricity - 35-330 kv as one separate exchange.

- Selected flow: Alternating current, 35-330 kV, consumption mix, to user
- Applicability: Use only for the 35-330 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Conditioning electricity - on-site photovoltaic (`conditioning_electricity_pv`)

Record conditioning electricity - on-site photovoltaic as one separate exchange.

- Selected flow: Photovoltaic alternating current, on-site generation
- Applicability: Use only for the on-site photovoltaic supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Conditioning purchased steam (`conditioning_steam`)

Record conditioning purchased steam as one separate exchange.

- Selected flow: Heat from steam `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- Applicability: Use only when steam crosses the site boundary; do not count upstream boiler fuel as on-site fuel for the same heat duty.
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Conditioning purchased hot water (`conditioning_hot_water`)

Record conditioning purchased hot water as one separate exchange.

- Selected flow: Purchased hot water
- Applicability: Use only when hot water crosses the site boundary; exclude purchased steam and on-site fuel for the same heat duty.
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Conditioning natural gas (`conditioning_natural_gas`)

Record conditioning natural gas as one separate exchange.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Applicability: Use only for on-site natural gas combustion; exclude purchased heat and the two alternative fuel rows for the same burner duty.
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Conditioning liquefied petroleum gas (`conditioning_lpg`)

Record conditioning liquefied petroleum gas as one separate exchange.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Applicability: Use only for on-site liquefied petroleum gas combustion; exclude purchased heat and the two alternative fuel rows for the same burner duty.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Conditioning diesel oil (`conditioning_diesel`)

Record conditioning diesel oil as one separate exchange.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Applicability: Use only for on-site diesel oil combustion; exclude purchased heat and the two alternative fuel rows for the same burner duty.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Conditioning compressed air (`conditioning_compressed_air`)

Record conditioning compressed air as one separate exchange.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Applicability: Use only when compressed air crosses this process boundary; do not duplicate compressor electricity in this row.
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Conditioning cooling water (`conditioning_cooling_water`)

Record conditioning cooling water as one separate exchange.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Applicability: Use only for a cooling-water circuit; exclude chilled-water duty for the same cooling load.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or invoiced water quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Conditioning chilled water (`conditioning_chilled_water`)

Record conditioning chilled water as one separate exchange.

- Selected flow: Chilled water
- Applicability: Use only for a purchased or separately metered chilled-water route; exclude cooling-water duty for the same load.
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Conditioning filter cartridge (`conditioning_filter_cartridge`)

Record conditioning filter cartridge as one separate exchange.

- Selected flow: Beverage-process filter cartridge
- Applicability: Include only when conditioning filter cartridge crosses this process boundary; omit otherwise.
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Reverse-osmosis component (`conditioning_ro_component`)

Record reverse-osmosis component as one separate exchange.

- Selected flow: Reverse Osmosis Component `948219f7-52b6-43d7-bfdd-52dcc1121659`
- Applicability: Include only when reverse-osmosis component crosses this process boundary; omit otherwise.
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### R717 ammonia refrigerant (`conditioning_refrigerant_r717`)

Record r717 ammonia refrigerant as one separate exchange.

- Selected flow: Refrigerant R717 ammonia
- Applicability: Include only when r717 ammonia refrigerant crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### R744 carbon dioxide refrigerant (`conditioning_refrigerant_r744`)

Record r744 carbon dioxide refrigerant as one separate exchange.

- Selected flow: Refrigerant R744 carbon dioxide
- Applicability: Include only when r744 carbon dioxide refrigerant crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### R134a refrigerant (`conditioning_refrigerant_r134a`)

Record r134a refrigerant as one separate exchange.

- Selected flow: Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- Applicability: Include only when r134a refrigerant crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### R404A refrigerant (`conditioning_refrigerant_r404a`)

Record r404a refrigerant as one separate exchange.

- Selected flow: Refrigerant R404A `76513c71-a148-484e-865f-2ab54afb4331`
- Applicability: Include only when r404a refrigerant crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

##### Waste flows

No exchange is defined for this group.

##### Elementary flows

No exchange is defined for this group.

#### Outputs

##### Product flows

###### Conditioned beverage intermediate (`conditioned_beverage`)

Record conditioned beverage intermediate as one separate exchange.

- Selected flow: Conditioned beverage intermediate
- Applicability: Include only when conditioned beverage intermediate crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered transfer or mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned beverage output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

##### Waste flows

###### Conditioning reject beverage (`conditioning_reject_beverage`)

Record conditioning reject beverage as one separate exchange.

- Selected flow: Conditioning reject beverage
- Applicability: Include only when conditioning reject beverage crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Spent conditioning filter cartridge (`conditioning_spent_filter`)

Record spent conditioning filter cartridge as one separate exchange.

- Selected flow: Spent conditioning filter cartridge
- Applicability: Include only when spent conditioning filter cartridge crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### Spent reverse-osmosis membrane (`conditioning_spent_membrane`)

Record spent reverse-osmosis membrane as one separate exchange.

- Selected flow: Spent reverse-osmosis membrane
- Applicability: Include only when spent reverse-osmosis membrane crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

##### Elementary flows

###### Ammonia emitted to air (`conditioning_ammonia_air`)

Record ammonia emitted to air as one separate exchange.

- Selected flow: ammonia, to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Applicability: Include only when ammonia emitted to air crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured release or calculation from matched activity records and mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### HFC-134a emitted to air (`conditioning_r134a_air`)

Record hfc-134a emitted to air as one separate exchange.

- Selected flow: HFC-134a, to air, unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- Applicability: Include only when hfc-134a emitted to air crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured release or calculation from matched activity records and mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### R404A emitted to air (`conditioning_r404a_air`)

Record r404a emitted to air as one separate exchange.

- Selected flow: R404A refrigerant, to air
- Applicability: Include only when r404a emitted to air crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured release or calculation from matched activity records and mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

###### R744 carbon dioxide emitted to air (`conditioning_r744_air`)

Record r744 carbon dioxide emitted to air as one separate exchange.

- Selected flow: R744 carbon dioxide, to air
- Applicability: Include only when r744 carbon dioxide emitted to air crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured release or calculation from matched activity records and mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_operation`
- Sources:

### Process: Carbon dioxide dosing and carbonation (`carbonation`)

#### Inputs

##### Product flows

###### Blended beverage entering carbonation (`carbonation_feed_blended`)

Record blended beverage entering carbonation as one separate exchange.

- Selected flow: Blended beverage intermediate
- Applicability: Use only when carbonation follows blending without conditioning; exclude conditioned feed for the same mass.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered transfer or mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg beverage leaving carbonation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonation_run`
- Sources:

###### Conditioned beverage entering carbonation (`carbonation_feed_conditioned`)

Record conditioned beverage entering carbonation as one separate exchange.

- Selected flow: Conditioned beverage intermediate
- Applicability: Use only when carbonation follows conditioning; exclude blended feed for the same mass.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered transfer or mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg beverage leaving carbonation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonation_run`
- Sources:

###### Food-grade carbon dioxide (`carbonation_food_grade_co2`)

Record food-grade carbon dioxide as one separate exchange.

- Selected flow: Food-grade carbon dioxide
- Applicability: Include only when food-grade carbon dioxide crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonation_run`
- Sources:

###### Carbonation electricity - below 1 kV (`carbonation_electricity_lv`)

Record carbonation electricity - below 1 kv as one separate exchange.

- Selected flow: Alternating current, below 1 kV, consumption mix, to user
- Applicability: Use only for the below 1 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonation_run`
- Sources:

###### Carbonation electricity - 1-35 kV (`carbonation_electricity_mv`)

Record carbonation electricity - 1-35 kv as one separate exchange.

- Selected flow: Alternating current, 1-35 kV, consumption mix, to user
- Applicability: Use only for the 1-35 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonation_run`
- Sources:

###### Carbonation electricity - 35-330 kV (`carbonation_electricity_hv`)

Record carbonation electricity - 35-330 kv as one separate exchange.

- Selected flow: Alternating current, 35-330 kV, consumption mix, to user
- Applicability: Use only for the 35-330 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonation_run`
- Sources:

###### Carbonation electricity - on-site photovoltaic (`carbonation_electricity_pv`)

Record carbonation electricity - on-site photovoltaic as one separate exchange.

- Selected flow: Photovoltaic alternating current, on-site generation
- Applicability: Use only for the on-site photovoltaic supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonation_run`
- Sources:

###### Carbonation cooling water (`carbonation_cooling_water`)

Record carbonation cooling water as one separate exchange.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- Applicability: Use only for a cooling-water circuit; exclude chilled-water duty for the same cooling load.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or invoiced water quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonation_run`
- Sources:

###### Carbonation chilled water (`carbonation_chilled_water`)

Record carbonation chilled water as one separate exchange.

- Selected flow: Chilled water
- Applicability: Use only for a purchased or separately metered chilled-water route; exclude cooling-water duty for the same load.
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonation_run`
- Sources:

##### Waste flows

No exchange is defined for this group.

##### Elementary flows

No exchange is defined for this group.

#### Outputs

##### Product flows

###### Carbonated beverage intermediate (`carbonated_beverage`)

Record carbonated beverage intermediate as one separate exchange.

- Selected flow: Carbonated beverage `b6cb89fa-5fac-4d09-85d6-f6e1934200b2`
- Applicability: Include only when carbonated beverage intermediate crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered transfer or mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg beverage leaving carbonation
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonation_run`
- Sources:

##### Waste flows

###### Off-specification carbonated beverage (`carbonation_loss`)

Record off-specification carbonated beverage as one separate exchange.

- Selected flow: Off-specification carbonated beverage
- Applicability: Include only when off-specification carbonated beverage crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carbonation_run`
- Sources:

##### Elementary flows

###### Biogenic carbon dioxide vented to air (`carbonation_co2_biogenic_air`)

Record biogenic carbon dioxide vented to air as one separate exchange.

- Selected flow: carbon dioxide (biogenic), to air, unspecified `08a91e70-3ddc-11dd-9c15-0050c2490048`
- Applicability: Use only for biogenic carbon dioxide and unspecified air; exclude fossil-origin rows for the same mass.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured release or calculation from matched activity records and mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carbonation_run`
- Sources:

###### Fossil carbon dioxide vented to urban air (`carbonation_co2_fossil_urban_air`)

Record fossil carbon dioxide vented to urban air as one separate exchange.

- Selected flow: carbon dioxide (fossil), to urban air close to ground `08a91e70-3ddc-11dd-9c12-0050c2490048`
- Applicability: Use only for fossil carbon dioxide to urban air close to ground; exclude high-stack and biogenic rows for the same mass.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured release or calculation from matched activity records and mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carbonation_run`
- Sources:

###### Fossil carbon dioxide vented from a high stack (`carbonation_co2_fossil_high_stack`)

Record fossil carbon dioxide vented from a high stack as one separate exchange.

- Selected flow: carbon dioxide (fossil), to non-urban air or from high stacks `08a91e70-3ddc-11dd-9c13-0050c2490048`
- Applicability: Use only for fossil carbon dioxide to non-urban air or high stacks; exclude urban and biogenic rows for the same mass.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured release or calculation from matched activity records and mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carbonation_run`
- Sources:

### Process: Filling, closing, labelling and packing (`filling_packaging`)

#### Inputs

##### Product flows

###### Blended beverage supplied to filling (`filling_feed_blended`)

Record blended beverage supplied to filling as one separate exchange.

- Selected flow: Blended beverage intermediate
- Applicability: Use only for a route with no conditioning or carbonation; exclude the two alternative feed rows for the same mass.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered transfer or mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming beverage output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Conditioned beverage supplied to filling (`filling_feed_conditioned`)

Record conditioned beverage supplied to filling as one separate exchange.

- Selected flow: Conditioned beverage intermediate
- Applicability: Use only for a conditioned non-carbonated route; exclude the two alternative feed rows for the same mass.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered transfer or mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming beverage output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Carbonated beverage supplied to filling (`filling_feed_carbonated`)

Record carbonated beverage supplied to filling as one separate exchange.

- Selected flow: Carbonated beverage `b6cb89fa-5fac-4d09-85d6-f6e1934200b2`
- Applicability: Use only for the carbonated route; exclude the two alternative feed rows for the same mass.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered transfer or mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming beverage output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### PET beverage bottle (`packaging_pet_bottle`)

Record pet beverage bottle as one separate exchange.

- Selected flow: PET beverage bottle
- Applicability: Use only for this primary-container route; exclude the four alternative primary-container rows for the same sale unit.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued quantity minus verified returns and ending stock, reconciled to packed output and line waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Glass jar (`packaging_glass_jar`)

Record glass jar as one separate exchange.

- Selected flow: Glass Jar `eca48ea8-ab83-444f-98b2-15ab82570c80`
- Applicability: Use only for this primary-container route; exclude the four alternative primary-container rows for the same sale unit.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued quantity minus verified returns and ending stock, reconciled to packed output and line waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Aluminium beverage can (`packaging_aluminium_can`)

Record aluminium beverage can as one separate exchange.

- Selected flow: Aluminium beverage can
- Applicability: Use only for this primary-container route; exclude the four alternative primary-container rows for the same sale unit.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued quantity minus verified returns and ending stock, reconciled to packed output and line waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Steel food can (`packaging_steel_can`)

Record steel food can as one separate exchange.

- Selected flow: Steel food can `f09b782f-b3db-4b1e-8473-597edcc5b6d7`
- Applicability: Use only for this primary-container route; exclude the four alternative primary-container rows for the same sale unit.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued quantity minus verified returns and ending stock, reconciled to packed output and line waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Aseptic beverage carton (`packaging_aseptic_carton`)

Record aseptic beverage carton as one separate exchange.

- Selected flow: Aseptic beverage carton
- Applicability: Use only for this primary-container route; exclude the four alternative primary-container rows for the same sale unit.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued quantity minus verified returns and ending stock, reconciled to packed output and line waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### HDPE closure (`packaging_hdpe_closure`)

Record hdpe closure as one separate exchange.

- Selected flow: HDPE closure
- Applicability: Include only when hdpe closure crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued quantity minus verified returns and ending stock, reconciled to packed output and line waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Polypropylene closure (`packaging_pp_closure`)

Record polypropylene closure as one separate exchange.

- Selected flow: Polypropylene closure
- Applicability: Include only when polypropylene closure crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued quantity minus verified returns and ending stock, reconciled to packed output and line waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Aluminium screw cap closure (`packaging_aluminium_closure`)

Record aluminium screw cap closure as one separate exchange.

- Selected flow: Aluminium screw cap closure `c37f87ea-0b43-43d6-a300-b142ea358cb7`
- Applicability: Include only when aluminium screw cap closure crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued quantity minus verified returns and ending stock, reconciled to packed output and line waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Paper label (`packaging_paper_label`)

Record paper label as one separate exchange.

- Selected flow: Label, paper `7b25a54f-baa6-4593-9670-4240a3315eed`
- Applicability: Include only when paper label crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued quantity minus verified returns and ending stock, reconciled to packed output and line waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Plastic label (`packaging_plastic_label`)

Record plastic label as one separate exchange.

- Selected flow: Plastic label
- Applicability: Include only when plastic label crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued quantity minus verified returns and ending stock, reconciled to packed output and line waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Corrugated board box (`packaging_corrugated_box`)

Record corrugated board box as one separate exchange.

- Selected flow: corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- Applicability: Include only when corrugated board box crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued quantity minus verified returns and ending stock, reconciled to packed output and line waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### LDPE shrink film (`packaging_ldpe_shrink_film`)

Record ldpe shrink film as one separate exchange.

- Selected flow: LDPE shrink film
- Applicability: Include only when ldpe shrink film crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued quantity minus verified returns and ending stock, reconciled to packed output and line waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Wooden pallet (`packaging_wooden_pallet`)

Record wooden pallet as one separate exchange.

- Selected flow: Wooden pallet
- Applicability: Include only when wooden pallet crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Issued quantity minus verified returns and ending stock, reconciled to packed output and line waste.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Filling and packing electricity - below 1 kV (`filling_electricity_lv`)

Record filling and packing electricity - below 1 kv as one separate exchange.

- Selected flow: Alternating current, below 1 kV, consumption mix, to user
- Applicability: Use only for the below 1 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Filling and packing electricity - 1-35 kV (`filling_electricity_mv`)

Record filling and packing electricity - 1-35 kv as one separate exchange.

- Selected flow: Alternating current, 1-35 kV, consumption mix, to user
- Applicability: Use only for the 1-35 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Filling and packing electricity - 35-330 kV (`filling_electricity_hv`)

Record filling and packing electricity - 35-330 kv as one separate exchange.

- Selected flow: Alternating current, 35-330 kV, consumption mix, to user
- Applicability: Use only for the 35-330 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Filling and packing electricity - on-site photovoltaic (`filling_electricity_pv`)

Record filling and packing electricity - on-site photovoltaic as one separate exchange.

- Selected flow: Photovoltaic alternating current, on-site generation
- Applicability: Use only for the on-site photovoltaic supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Filling compressed air (`filling_compressed_air`)

Record filling compressed air as one separate exchange.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Applicability: Include only when filling compressed air crosses this process boundary; omit otherwise.
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

##### Waste flows

No exchange is defined for this group.

##### Elementary flows

No exchange is defined for this group.

#### Outputs

##### Product flows

###### Net conforming beverage at manufacturing gate (`reference_beverage_output`)

Record net conforming beverage at manufacturing gate as one separate exchange.

- Selected flow: Carbonated beverage `b6cb89fa-5fac-4d09-85d6-f6e1934200b2`
- Applicability: Use only under the reference-flow identity and mandatory substitution rule in Section 3.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net conforming beverage at sold concentration, excluding packaging
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Filling reject beverage (`filling_offspec_beverage`)

Record filling reject beverage as one separate exchange.

- Selected flow: Filling reject beverage
- Applicability: Include only when filling reject beverage crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### PET bottle line waste (`packaging_waste_pet`)

Record pet bottle line waste as one separate exchange.

- Selected flow: Waste PET bottles `8874aca6-2ff9-4aef-be62-5cd02f20dc97`
- Applicability: Include only when pet bottle line waste crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Glass-container line waste (`packaging_waste_glass`)

Record glass-container line waste as one separate exchange.

- Selected flow: Glass-container waste
- Applicability: Include only when glass-container line waste crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Aluminium packaging scrap (`packaging_waste_aluminium`)

Record aluminium packaging scrap as one separate exchange.

- Selected flow: Aluminium Scrap `96c5f842-ea53-419b-b1cd-c02c479efb45`
- Applicability: Include only when aluminium packaging scrap crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Steel packaging scrap (`packaging_waste_steel`)

Record steel packaging scrap as one separate exchange.

- Selected flow: Scrap steel `c2d4cf7a-d512-4afb-9184-c81f5dd2ed4a`
- Applicability: Include only when steel packaging scrap crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Aseptic-carton line waste (`packaging_waste_carton`)

Record aseptic-carton line waste as one separate exchange.

- Selected flow: Aseptic-carton waste
- Applicability: Include only when aseptic-carton line waste crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Polyethylene film line waste (`packaging_waste_polyethylene`)

Record polyethylene film line waste as one separate exchange.

- Selected flow: Waste polyethylene `7e78f0a8-c042-47ca-a742-3bac92be1477`
- Applicability: Include only when polyethylene film line waste crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Polypropylene closure line waste (`packaging_waste_polypropylene`)

Record polypropylene closure line waste as one separate exchange.

- Selected flow: Polypropylene Wastes `88215d1b-e6b6-4ec7-af7f-83375e80637b`
- Applicability: Include only when polypropylene closure line waste crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Corrugated-board line waste (`packaging_waste_cardboard`)

Record corrugated-board line waste as one separate exchange.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- Applicability: Include only when corrugated-board line waste crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

###### Wooden-pallet line waste (`packaging_waste_wood`)

Record wooden-pallet line waste as one separate exchange.

- Selected flow: Wooden-pallet waste
- Applicability: Include only when wooden-pallet line waste crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filling_packaging`
- Sources:

##### Elementary flows

No exchange is defined for this group.

### Process: Cleaning, sanitation and wastewater handling (`cleaning_wastewater`)

#### Inputs

##### Product flows

###### Tap water for cleaning (`cleaning_tap_water`)

Record tap water for cleaning as one separate exchange.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- Applicability: Use only for municipal water; exclude process and reclaimed water for the same quantity.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or invoiced water quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Process water for cleaning (`cleaning_process_water`)

Record process water for cleaning as one separate exchange.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Applicability: Use only for prepared process water; exclude tap and reclaimed water for the same quantity.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered or invoiced water quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Reclaimed water for cleaning (`cleaning_reclaimed_water`)

Record reclaimed water for cleaning as one separate exchange.

- Selected flow: Reclaimed water `8c86c0f7-24f0-4c12-852f-93d9dd1980e7`
- Applicability: Use only for reclaimed water; exclude tap and process water for the same quantity.
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered or invoiced water quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Sodium hydroxide (`cleaning_chemical_sodium_hydroxide`)

Record sodium hydroxide as one separate exchange.

- Selected flow: Sodium hydroxide `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- Applicability: Include only when sodium hydroxide crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Nitric acid, 50% aqueous solution (`cleaning_chemical_nitric_acid`)

Record nitric acid, 50% aqueous solution as one separate exchange.

- Selected flow: Nitric acid, 50% aqueous solution `db613797-10b0-4252-b818-659b99ce85dd`
- Applicability: Include only when nitric acid, 50% aqueous solution crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Peracetic acid (`cleaning_chemical_peracetic_acid`)

Record peracetic acid as one separate exchange.

- Selected flow: Peracetic acid
- Applicability: Include only when peracetic acid crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Sodium hypochlorite (`cleaning_chemical_sodium_hypochlorite`)

Record sodium hypochlorite as one separate exchange.

- Selected flow: Sodium hypochlorite `28c4ca0f-c924-4d2a-93dd-b9ac93009d25`
- Applicability: Include only when sodium hypochlorite crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Hydrogen peroxide, 30% (`cleaning_chemical_hydrogen_peroxide`)

Record hydrogen peroxide, 30% as one separate exchange.

- Selected flow: Hydrogen peroxide (30%) `b21960ac-f3c4-4f00-ba92-527ca1dd5d12`
- Applicability: Include only when hydrogen peroxide, 30% crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Batch issue, dosing or stock-balance quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Cleaning and treatment electricity - below 1 kV (`cleaning_electricity_lv`)

Record cleaning and treatment electricity - below 1 kv as one separate exchange.

- Selected flow: Alternating current, below 1 kV, consumption mix, to user
- Applicability: Use only for the below 1 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Cleaning and treatment electricity - 1-35 kV (`cleaning_electricity_mv`)

Record cleaning and treatment electricity - 1-35 kv as one separate exchange.

- Selected flow: Alternating current, 1-35 kV, consumption mix, to user
- Applicability: Use only for the 1-35 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Cleaning and treatment electricity - 35-330 kV (`cleaning_electricity_hv`)

Record cleaning and treatment electricity - 35-330 kv as one separate exchange.

- Selected flow: Alternating current, 35-330 kV, consumption mix, to user
- Applicability: Use only for the 35-330 kV supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Cleaning and treatment electricity - on-site photovoltaic (`cleaning_electricity_pv`)

Record cleaning and treatment electricity - on-site photovoltaic as one separate exchange.

- Selected flow: Photovoltaic alternating current, on-site generation
- Applicability: Use only for the on-site photovoltaic supply route; exclude the three alternative electricity rows for the same quantity.
- Flow property / unit: Energy / kWh
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Cleaning and treatment purchased steam (`cleaning_steam`)

Record cleaning and treatment purchased steam as one separate exchange.

- Selected flow: Heat from steam `cbc1f372-5c64-4ad5-a938-89b9396758c9`
- Applicability: Use only when steam crosses the site boundary; do not count upstream boiler fuel as on-site fuel for the same heat duty.
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Cleaning and treatment purchased hot water (`cleaning_hot_water`)

Record cleaning and treatment purchased hot water as one separate exchange.

- Selected flow: Purchased hot water
- Applicability: Use only when hot water crosses the site boundary; exclude purchased steam and on-site fuel for the same heat duty.
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Cleaning and treatment natural gas (`cleaning_natural_gas`)

Record cleaning and treatment natural gas as one separate exchange.

- Selected flow: Natural gas `4bfd1abb-9106-495a-a291-ce410f205691`
- Applicability: Use only for on-site natural gas combustion; exclude purchased heat and the two alternative fuel rows for the same burner duty.
- Flow property / unit: Gross calorific value `93a60a56-a3c8-14da-a746-0800200c9a66` / MJ
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Cleaning and treatment liquefied petroleum gas (`cleaning_lpg`)

Record cleaning and treatment liquefied petroleum gas as one separate exchange.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- Applicability: Use only for on-site liquefied petroleum gas combustion; exclude purchased heat and the two alternative fuel rows for the same burner duty.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Cleaning and treatment diesel oil (`cleaning_diesel`)

Record cleaning and treatment diesel oil as one separate exchange.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- Applicability: Use only for on-site diesel oil combustion; exclude purchased heat and the two alternative fuel rows for the same burner duty.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Cleaning and treatment compressed air (`cleaning_compressed_air`)

Record cleaning and treatment compressed air as one separate exchange.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- Applicability: Use only when compressed air crosses this process boundary; do not duplicate compressor electricity in this row.
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered use or engineering allocation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

##### Waste flows

No exchange is defined for this group.

##### Elementary flows

No exchange is defined for this group.

#### Outputs

##### Product flows

###### Recovered reclaimed water (`recovered_reclaimed_water`)

Record recovered reclaimed water as one separate exchange.

- Selected flow: Reclaimed water `8c86c0f7-24f0-4c12-852f-93d9dd1980e7`
- Applicability: Include only when recovered reclaimed water crosses this process boundary; omit otherwise.
- Flow property / unit: Volume `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- Amount rule: Metered transfer or mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

###### Recovered sodium-hydroxide cleaning solution (`recovered_caustic_solution`)

Record recovered sodium-hydroxide cleaning solution as one separate exchange.

- Selected flow: Recovered sodium-hydroxide cleaning solution
- Applicability: Include only when recovered sodium-hydroxide cleaning solution crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Metered transfer or mass balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources:

##### Waste flows

###### Beverage-manufacturing wastewater (`beverage_wastewater`)

Record beverage-manufacturing wastewater as one separate exchange.

- Selected flow: Beverage-manufacturing wastewater
- Applicability: Include only when beverage-manufacturing wastewater crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `eu-fdm-bat-2019`

###### Beverage wastewater-treatment sludge (`wastewater_treatment_sludge`)

Record beverage wastewater-treatment sludge as one separate exchange.

- Selected flow: Beverage wastewater-treatment sludge
- Applicability: Include only when beverage wastewater-treatment sludge crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `eu-fdm-bat-2019`

###### Beverage wastewater screenings (`wastewater_screenings`)

Record beverage wastewater screenings as one separate exchange.

- Selected flow: Beverage wastewater screenings
- Applicability: Include only when beverage wastewater screenings crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weighed, metered or mass-balance quantity leaving the process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

###### Chemical oxygen demand to water (`direct_water_cod`)

Record chemical oxygen demand to water as one separate exchange.

- Selected flow: Chemical Oxygen Demand, to water, unspecified `e57fc631-2c77-457a-aa30-be79e357792b`
- Applicability: Include only when chemical oxygen demand to water crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured release or calculation from matched activity records and mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `eu-fdm-bat-2019`

###### Biological oxygen demand to water (`direct_water_bod`)

Record biological oxygen demand to water as one separate exchange.

- Selected flow: biological oxygen demand, to water, unspecified `08a91e70-3ddc-11dd-97e0-0050c2490048`
- Applicability: Include only when biological oxygen demand to water crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured release or calculation from matched activity records and mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `eu-fdm-bat-2019`

###### Total nitrogen to fresh water (`direct_water_tn`)

Record total nitrogen to fresh water as one separate exchange.

- Selected flow: nitrogen, total (excluding N2), to fresh water `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- Applicability: Include only when total nitrogen to fresh water crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured release or calculation from matched activity records and mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `eu-fdm-bat-2019`

###### Total phosphorus to fresh water (`direct_water_tp`)

Record total phosphorus to fresh water as one separate exchange.

- Selected flow: phosphorus, total, to fresh water `f9df3107-6b59-4067-b920-3c61cf3630c7`
- Applicability: Include only when total phosphorus to fresh water crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured release or calculation from matched activity records and mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `eu-fdm-bat-2019`

###### Suspended solids to water (`direct_water_tss`)

Record suspended solids to water as one separate exchange.

- Selected flow: Suspended solids, unspecified, to water, unspecified `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- Applicability: Include only when suspended solids to water crosses this process boundary; omit otherwise.
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Measured release or calculation from matched activity records and mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net beverage product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `eu-fdm-bat-2019`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | shared processes and co-products | Avoid allocation by sub-metering, batch or line subdivision, or separately modelling functions whenever practicable. | `ghg-protocol-product-2011` |
| `allocation_physical` | unavoidable shared utilities, cleaning and common processes | When subdivision is not practicable, use a physical driver that represents causation, such as metered energy, water use, processing time, mass throughput or container count; document the driver and all products sharing it. | `ghg-protocol-product-2011` |
| `allocation_fallback` | common process without defensible physical relation | If no defensible physical relationship exists, use economic or another documented relationship that best reflects the common process, disclose prices and period, and test sensitivity when allocation materially affects results. | `ghg-protocol-product-2011` |
| `allocation_rework` | internal beverage rework and recovered streams | Treat on-site rework returned within the included system as an internal transfer. Retain burdens and losses in the system and do not create a co-product credit unless a separately marketed product leaves the boundary. | `ghg-protocol-product-2011` |
| `allocation_waste` | outputs without economic value | Classify an output without economic value as waste and assign no co-product allocation to it; include the attributable handling and treatment burdens in the declared product system. | `ghg-protocol-product-2011` |
| `allocation_packaging_returns` | reusable or returned packaging | Model returned packaging by the declared reuse-cycle method of the selected background system; disclose cycles, losses and any burden sharing and avoid a second credit for the same returned material. | `epd-food-beverage-pcr-2025` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_identity` | `filling_packaging` | reference product identity and qualifiers | release specification and product master data | product name; formula revision; caloric ingredient; sold concentration; dilution instruction; carbonation specification; particulate state; package; lot; net mass | Approved formula, product specification and lot release record cross-check | kg and declared product descriptors | each product and formula revision; verify each reporting period | Same period as the foreground inventory | Each represented product, site and line | Retain one identity record per product/route and link all included lots | Approved specification, release record, calibrated net-content evidence and Tiangong flow selection rationale |
| `cp_water_preparation` | `water_preparation` | source water, prepared water, reject, electricity and treatment media | meter, invoice, stock and maintenance records | source by type; opening/closing meter; prepared-water transfer; reject; electricity; media issued; lot/time | Calibrated meters reconciled with invoices and treatment logs | kg water; kWh; kg media | continuous or per batch with monthly reconciliation | Representative production period including cleaning and seasonal operation | Each supplying system at the represented site | Sum by source and allocate only documented common use before normalising to reference output | Meter calibration, invoice reconciliation, treatment log and balance check |
| `cp_formulation_batch` | `formulation_blending` | ingredients, water, energy, intermediate output and losses | batch recipe, dosing, inventory and meter records | batch id; formula revision; ingredient id; supplied concentration; issued mass; water; energy; output mass; rework; loss | Electronic batch record and calibrated dosing/utility meters, reconciled to inventory | kg; kWh; MJ | each batch with reporting-period reconciliation | Representative production period covering the declared formulation | Each represented product and blending line | Sum conforming batches; separate formula revisions; normalise by net conforming output | Dosing calibration, inventory reconciliation, formula approval and batch mass balance |
| `cp_conditioning_operation` | `product_conditioning` | conditioning feed, utilities, consumables, output and rejects | run log, meters, consumable issues and mass balance | operation type; equipment; feed/output mass; temperature/time; energy; consumables; reject | Run-specific process records and calibrated meters | kg; kWh; MJ | each run or continuous campaign | Same period as represented production | Each applied conditioning unit | Aggregate only equivalent technologies and product states | Meter calibration, run log, release specification and mass balance |
| `cp_carbonation_run` | `carbonation` | beverage feed/output, carbon dioxide input, energy, retained carbon dioxide, recovery, vent and loss | supplier stock, mass flow, product test and run log | CO2 opening/closing stock; purchases; charged mass; recovered mass; beverage feed/output; carbonation test; energy; loss | Reconciled tank/cylinder inventory plus calibrated mass flow and product specification test | kg; kWh; MJ | each run with reporting-period stock reconciliation | Same period as carbonated product output | Each carbonator and represented product | Calculate net CO2 use and vent by run or campaign; normalise by conforming output | Supplier record, scale/flow calibration, stock reconciliation and carbonation test |
| `cp_filling_packaging` | `filling_packaging` | beverage feed/output, packaging, energy, rejects and packaging waste | filler meter, net-content check, component issue, line counter, waste weight and utility meter | product/lot; beverage feed; conforming unit count; net mass; component id/material/mass; issued/returned components; rejects; waste; energy | Calibrated filler records, statistical net-content checks, packaging stock reconciliation and weighed waste | kg; item; kWh; MJ | each run with reporting-period reconciliation | Same period as represented packed product | Each package format and filling line | Separate package formats; calculate net beverage and packaging per conforming output | Scale and meter calibration, packaging bill, stock balance and reject reconciliation |
| `cp_cleaning_wastewater` | `cleaning_wastewater` | cleaning water, chemicals, energy, recovered streams, wastewater, residuals and releases | clean-in-place log, meters, dosing, laboratory and waste records | campaign/line; water; chemical/product concentration; energy; recovered volume; wastewater flow; pH; temperature; relevant pollutant concentrations; sludge mass/dry matter; destination | Calibrated flow and dosing meters with time-matched accredited or quality-controlled sampling and waste documentation | kg; m3; kWh; MJ; concentration units | each cleaning campaign for use; wastewater flow continuously or by discharge; sampling at justified frequency | Representative production period including start-up, changeover and cleaning | Each line, cleaning circuit and discharge point | Assign campaign-specific use where possible; otherwise use documented physical driver; match concentration with corresponding flow before load calculation | Meter calibration, chemical stock reconciliation, sampling plan, laboratory QA and treatment/disposal record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | all inventory rows | Normalised amount = attributable reporting-period amount / kg net conforming beverage at sold concentration. | attributable amount; net conforming beverage mass | row amount per 1 kg reference flow | `ghg-protocol-product-2011` |
| `calc_concentrate_scenario` | as-consumed scenario for concentrate | Prepared beverage amount and added water shall be calculated from the product's declared mass-based preparation ratio; retain the as-sold 1 kg inventory as the source result and report the prepared scenario separately. | as-sold concentrate mass; declared concentrate-to-water ratio; any density conversion | separately labelled as-consumed scenario | `codex-gsfa-beverage-forms-2025` |
| `calc_packaging_use` | packaging inputs | Packaging consumed = opening stock + receipts - closing stock - verified returns; reconcile with conforming units and weighed packaging waste before normalisation. | stock, receipts, returns, component mass, output count and waste | kg of each packaging component per 1 kg net beverage | `epd-food-beverage-pcr-2025` |
| `calc_carbon_dioxide_vent` | carbonation direct emission | CO2 vent = CO2 supplied + opening stock - closing stock - CO2 retained in conforming product - recovered CO2 - CO2 in separately measured product loss; do not report a negative vent. | supplier and stock records; retained/recovered CO2; product loss | kg CO2 vented per 1 kg net beverage | `eu-fdm-bat-2019` |
| `calc_wastewater_load` | direct water emissions | Pollutant load = time-matched concentration × discharge volume, with unit and density conversion documented; subtract an influent load only when the study method explicitly requires net treatment removal and both values are measured. | discharge flow; pollutant concentration; sampling interval | kg pollutant to the receiving compartment per 1 kg net beverage | `eu-fdm-bat-2019` |
| `calc_mass_balance` | each process and facility total | Balance difference = total material inputs - product outputs - waste outputs - measured direct material emissions - stock increase. Report the difference and investigate its direction and materiality; do not force it to zero by adding an unidentified flow. | all mass records and stock changes on a consistent wet-mass basis | disclosed mass-balance result | `eu-fdm-bat-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and reference flow | Demonstrate that the product is caloric, non-alcoholic and not more specifically classified; retain the formulation, commercial form and Tiangong-flow selection or limited-proxy rationale. | Product specification, formula revision, classification review and `cp_product_identity` record; `unsd-cpc-3-2025`; `codex-gsfa-beverage-forms-2025` |
| `dq_primary_data` | foreground operations | Use site-, line- and product-specific primary records for material, utility, product, waste and emission quantities. Estimates shall be identified, justified and replaced when measured records become available. | Collection protocol records and the GHG Protocol data-management principles in `ghg-protocol-product-2011` |
| `dq_temporal` | reporting period | Cover a representative period including routine production, start-up, changeover, cleaning, downtime and seasonal effects relevant to the declared product. State exclusions and why the period remains representative. | Dated batch, meter, cleaning, waste and production records |
| `dq_completeness` | process and flow coverage | Reconcile all required and triggered conditional processes. List omitted flows or processes with quantified or evidence-based justification; an undocumented zero is not acceptable. | Process map, mass/energy/water inventories, wastewater-stream inventory and balance checks; `eu-fdm-bat-2019` |
| `dq_technology_geography` | site and upstream datasets | Describe actual water source, formulation route, conditioning, carbonation, package format, utilities, wastewater treatment, geography and technology; justify each upstream proxy. | Site records, supplier information and dataset metadata |
| `dq_measurement` | meters, conversions and laboratory data | Retain calibration status, measurement uncertainty where available, conversion formula, sampling method, time matching and laboratory QA for values that materially influence the inventory. | Calibration certificates, sampling plan, laboratory QA and calculation workbook |
| `dq_allocation` | shared processes | Preserve pre-allocation totals, allocation driver, products sharing the process, allocation factors and sensitivity evidence when results are materially affected. | Allocation worksheet and `ghg-protocol-product-2011` |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `vr_category_identity` | product scope | Fail if caloric status, non-alcoholic status, sold form, formula class or not-elsewhere-classified rationale is missing, or if the product belongs to an excluded or more specific category. | `unsd-cpc-3-2025`; `codex-gsfa-beverage-forms-2025` |
| `vr_reference_flow` | reference object | Require exactly 1 kg net beverage at sold concentration, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and kg; packaging mass shall be separate. |  |
| `vr_flow_substitution` | product flow identity | Accept `Carbonated beverage` `b6cb89fa-5fac-4d09-85d6-f6e1934200b2` only for a matching carbonated product or with an explicit limited-proxy disclosure. Require a more specific public Tiangong product flow when one matches the actual product. |  |
| `vr_process_coverage` | process inventory | Require `water_preparation`, `formulation_blending`, `filling_packaging` and `cleaning_wastewater`. Require each conditional process when route records show it occurred, and require an explicit evidence-backed omission otherwise. | `eu-fdm-bat-2019` |
| `vr_recursive_input` | same-category input | Reject double counting when a purchased beverage base, concentrate or rework input is both linked to an upstream dataset and recursively recreated, or when an internal on-site transfer is counted as a new external input. | `ghg-protocol-product-2011` |
| `vr_mass_balance` | material inventory | Require process and facility mass-balance disclosure on a consistent basis. Investigate and disclose differences rather than forcing balance with an unidentified flow. | `eu-fdm-bat-2019` |
| `vr_water_wastewater` | water and direct water emissions | Require water-use and wastewater-stream quantities. Where direct discharge is in scope, require time-matched flow and relevant pollutant concentrations and project substance-specific elementary releases. | `eu-fdm-bat-2019` |
| `vr_packaging` | packaging inventory | Require package component, material, mass, format, loss and reuse/return status separately from net beverage mass. | `epd-food-beverage-pcr-2025` |
| `vr_allocation` | shared processes and co-products | Require subdivision where practicable; otherwise require the documented physical or fallback relationship, factors, pre-allocation totals and no duplicate credit. | `ghg-protocol-product-2011` |
| `vr_data_traceability` | foreground data | Require source record, time period, site/line/product scope, collection protocol, calculation rule, unit conversion and quality evidence for each collected or calculated row. | `ghg-protocol-product-2011` |
| `vr_inventory_identity` | non-reference inventory flows | Require every final dataset to record the actual public Tiangong UUID for selected product, waste and elementary flows where a matching public flow exists; semantic candidate labels in this PCR are not final UUID evidence. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-, site-, route- and reporting-period-specific foreground beverage manufacturing data package, suitable for publication as a secondary dataset or background dataset after review. |
| downstream_use | Upstream-linked cradle-to-gate LCA, product carbon-footprint or lifecycle-model construction; manufacturing benchmarking within an equivalent product definition; supply-chain modelling with declared package and concentration. |
| allowed_use | Use when category identity, functional/reference unit, process coverage, allocation, upstream links, packaging, data period and quality disclosure meet this PCR and the downstream study method. |
| excluded_use | Do not use as a nutrition or food-safety assessment; do not use the carbonated representative flow to imply all category products are equivalent; do not compare products with different sold/as-consumed states, functions, package systems, boundaries or data quality without harmonisation; do not treat a candidate PCR as a verified comparative-claim programme rule. |
| required_metadata | Canonical PCR id and version state; actual product name and Tiangong product-flow UUID; complete required qualifiers; site, line, geography, technology and period; formula revision; process map; reference flow and net-mass evidence; sold concentration and preparation ratio; package bill; data sources; collection/calculation protocols; upstream dataset versions; allocation; cut-offs and downstream exclusions. |
| required_quality_disclosure | Primary-data share by relevant process; meter/calibration and sampling evidence; temporal, geographical and technological representativeness; mass-balance differences; wastewater coverage; allocation sensitivity; proxy flow and upstream-dataset limitations; uncertainty and excluded data. |
| update_trigger | Reassess when product classification, formula or concentration changes; when conditioning, carbonation, package format, site, line, utilities, water source, cleaning or wastewater route changes; when the representative Tiangong flow is superseded by a more specific public flow; when upstream data or allocation materially changes; or when the reporting period no longer represents current production. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, subclass 24499, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | Authoritative product-category boundary and not-elsewhere-classified meaning. |
| `codex-gsfa-beverage-forms-2025` | official_guidance | Codex Alimentarius GSFA Online, food categories 14.1.4.1, 14.1.4.2 and 14.1.4.3, updated through the 48th Codex Alimentarius Commission session (2025): https://www.fao.org/gsfaonline/foods/details.html?id=249 ; https://www.fao.org/gsfaonline/foods/details.html?id=250 ; https://www.fao.org/gsfaonline/foods/details.html?id=251 (retrieved 2026-08-11) | Representative carbonated, non-carbonated, sport/energy/electrolyte, particulate and concentrate beverage forms; used only where products remain caloric and within CPC 24499. |
| `eu-fdm-bat-2019` | official_guidance | European Commission, *Commission Implementing Decision (EU) 2019/2031 establishing best available techniques conclusions for the food, drink and milk industries*, 2019. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-11) | Process-flow sheets; inventories of water, energy, raw materials, wastewater and waste gas; water balances; wastewater quantity and pollutant-characterisation requirements; cleaning and emission-control context. |
| `ghg-protocol-product-2011` | standard | WRI and WBCSD, *Greenhouse Gas Protocol Product Life Cycle Accounting and Reporting Standard*, 2011. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf (retrieved 2026-08-11) | Boundary documentation, primary-data and data-quality management, allocation avoidance and physical/economic fallback hierarchy, reporting and update traceability. |
| `epd-food-beverage-pcr-2025` | standard | International EPD System, PCR 2025:03 *Food and beverage products (main PCR)*, version 1.0.1, valid to 2030-07-14. https://environdec.com/pcr-library/pcr_fbd3e8c6-483c-48f5-d22f-08da0b49f7f5 (retrieved 2026-08-11) | Sector-general declared-unit and dataset-profile context, packaging inclusion and publication-use limitations. |
