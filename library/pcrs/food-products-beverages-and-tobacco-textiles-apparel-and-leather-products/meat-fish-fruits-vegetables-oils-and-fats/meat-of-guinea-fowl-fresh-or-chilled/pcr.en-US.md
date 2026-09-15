---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-guinea-fowl-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of guinea fowl, fresh or chilled

## 1. Scope and Applicability

This PCR governs foreground data packages for net saleable meat obtained from guinea fowl and released fresh or chilled at the slaughterhouse or meat-processing plant gate. It covers receipt and temporary lairage of live guinea fowl, stunning and slaughter, bleeding, scalding, defeathering, evisceration and carcass dressing, conditional cutting and portioning, chilling and cold storage, packaging and release, attributable cleaning and sanitation, and conditional on-site wastewater treatment.

Guinea-fowl farming and hatchery operations, feed production, transport to the receiving plant gate, manufacture of purchased utilities, refrigerants, chemicals and packaging, retail, cooking or other use, and product end of life are outside the foreground boundary. Their datasets are linked when the study extends beyond the gate-to-gate system.

The category excludes frozen guinea-fowl meat, fatty liver, edible offal sold as such, meat from another bird species, mechanically separated meat, and prepared or preserved meat products. Liver, heart, gizzard, blood, feathers, fat, necks, feet, bones and skin may occur as separately measured co-products or wastes, but none is part of the reference-product mass unless it is legally and commercially included in the declared meat specification.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-guinea-fowl-fresh-or-chilled |
| classification_refs | CPC 3.0: 21125 Meat of guinea fowl, fresh or chilled |
| covered_products | Whole dressed guinea-fowl carcasses and guinea-fowl meat cuts released fresh or chilled, bone-in or boneless, skin-on or skinless, without freezing |
| excluded_products | Frozen guinea-fowl meat; fatty liver; edible offal sold as such; meat of another species; mechanically separated meat; prepared, preserved, cooked, salted, dried or smoked products |
| representative_product | Net conforming guinea-fowl carcass meat or cuts at the plant gate, maintained fresh or chilled and not frozen |
| production_route | Live-bird receipt and lairage; stunning and slaughter; bleeding; scalding and defeathering; evisceration and dressing; conditional cutting; chilling and cold storage; packaging and release |
| market_state | Fresh or chilled whole carcass or cuts at the plant gate; temperature state, cut form, bone and skin state, packaging state, net mass and release specification declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net conforming meat of guinea fowl suitable for sale or transfer as fresh or chilled meat |
| How much | 1 kg net product mass at the declared plant gate |
| How well | Meets the declared food-safety, quality, temperature and commercial specification; is not frozen; excludes packaging tare, fatty liver and edible offal sold separately |
| How long or cycle | One released production lot or a reporting-period aggregate at the plant gate; no service duration |
| reference_flow_link | Net released product mass after packaging tare, condemned material, separately sold organs and all co-products and wastes are excluded |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Meat of guinea fowl, fresh or chilled `8c683807-f79b-46a9-90e4-c005d506a98a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | guinea-fowl species declaration; whole carcass or named cut; fresh or chilled state; product temperature at release; bone-in or boneless; skin-on or skinless; edible-offal exclusion; fatty-liver exclusion; net mass and packaging tare; packaging state; slaughter and cutting route; geography; technology; reference period |

When constructing a foreground data package, every item listed in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product and normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every foreground exchange to exactly 1 kg of conforming net reference product; exclude packaging tare, separately sold organs, co-products, condemned material and wastes from reference-product mass. |
| `live_bird_mass_basis` | received and accepted live guinea fowl | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record live mass at receipt and acceptance with bird count retained as a supporting field; do not substitute bird count for measured mass without a documented lot-specific conversion. |
| `product_state_basis` | carcasses, cuts and reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record mass at the stated fresh or chilled temperature and drainage state; identify whole carcass versus cut, bone and skin state, and prevent frozen product from entering the reference amount. |
| `energy_carrier_units` | grid electricity, purchased steam, purchased hot water, natural gas, diesel and LPG | Energy; UUID unresolved | kWh for grid electricity; MJ for each purchased heat or fuel carrier | Preserve each carrier as a separate exchange with its measured unit and conversion factor; never pool electricity, steam, hot water or fuels into a combined energy row. |
| `refrigerant_mass_balance` | each named refrigerant make-up and air emission | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each refrigerant substance separately; calculate emitted mass from substance-specific inventory reconciliation only when direct leak measurement is unavailable. |
| `wastewater_load_basis` | each wastewater stream and treated-effluent emission | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep ordinary-load and high-organic-load wastewater quantities separate and calculate each discharged pollutant from matched concentration and discharge quantity records. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live guinea fowl accepted at the slaughterhouse receiving gate with supplier, origin, lot, bird count, live mass, arrival condition and upstream dataset reference declared |
| starting_condition_role | First technosphere product input to the foreground slaughter and meat-processing system |
| product_classification_scope | Meat of guinea fowl, fresh or chilled; CPC 3.0 code 21125 provides classification context but does not include frozen guinea-fowl meat, fatty liver or separately sold edible offal |
| recursive_input_rule | Purchased fresh or chilled guinea-fowl meat in the same category is recorded as a linked upstream product input and its production is not recreated inside the receiving foreground process |
| upstream_dataset_requirement | Link farming, live-bird transport, purchased utilities, fuels, water, refrigerants, chemicals, packaging and off-site treatment to geographically and temporally appropriate upstream datasets when the study extends beyond the foreground gate |
| disclosure | Declare live-bird origin and supplier mix, slaughter and dressing route, stunning method, cutting route, product temperature, refrigeration system and refrigerants, co-product and waste destinations, allocation method, cleaning system, wastewater destination, packaging, geography, technology and reference period |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | all foreground processes | Include operated live-bird receipt and lairage, slaughter and dressing through a clean saleable poultry carcass, conditional cutting, chilling, packing, cleaning, direct emissions, co-products, wastes and on-site wastewater treatment between the declared starting condition and plant-gate reference product. | `eu-jrc-sa-bref-2024` |
| `boundary_life_cycle_links` | upstream and downstream stages | Keep farming, inbound transport, purchased-input manufacture, retail, use and end of life outside the foreground boundary while retaining explicit linked datasets when a broader life-cycle result is produced. | `eu-pef-recommendation-2021-2279` |
| `boundary_complete_inventory` | foreground inputs and outputs | Collect all known process inputs and outputs, including energy, water, materials, products, co-products, direct emissions and wastes; any exclusion must be explicit, justified and consistent with the declared Environmental Footprint method. | `eu-pef-recommendation-2021-2279` |
| `boundary_product_scope` | reference-product eligibility | Accept only guinea-fowl meat released fresh or chilled under CPC 21125; reject frozen guinea-fowl meat, fatty liver and separately sold edible offal from the reference flow. | `un-cpc-3-0-2025` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `live_bird_receiving_lairage` | Live-bird receiving and temporary lairage | `required` | Always included from accepted arrival at the foreground plant gate | Foreground animal receiving | kg accepted live guinea fowl |
| `slaughter_dressing` | Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing | `required` | Always included when meat is manufactured from live guinea fowl | Foreground slaughter and carcass preparation | kg dressed guinea-fowl carcass |
| `carcass_cutting_portioning` | Carcass cutting and portioning | `conditional` | Included when whole dressed carcasses are cut, deboned or portioned at the foreground plant | Foreground meat cutting | kg fresh guinea-fowl cuts |
| `chilling_cold_storage` | Chilling and cold storage | `required` | Always included through release-temperature control; each refrigerant row applies only when that substance is present | Foreground temperature control | kg chilled carcass or cuts |
| `packaging_release` | Packaging, net weighing and product release | `required` | Always included through measurement of the net reference product; each package component applies only when used | Foreground finished-product release | 1 kg conforming reference product |
| `plant_cleaning_sanitation` | Plant cleaning and sanitation | `required` | Always include attributable sanitation; each chemical and heat carrier applies only when actually used | Foreground hygiene support | 1 kg net reference product served |
| `onsite_wastewater_treatment` | On-site slaughterhouse wastewater treatment | `conditional` | Included when wastewater is treated on site before environmental discharge or transfer | Foreground pollution control | kg wastewater treated |

### Process: Live-bird receiving and temporary lairage (`live_bird_receiving_lairage`)

#### Inputs

##### Product flows

###### Live-bird receiving and temporary lairage: Live guinea fowl (`live_guinea_fowl_input`)

Live guinea fowl enters the Live-bird receiving and temporary lairage process boundary as one specific product exchange; its quantity is obtained under cp_receiving_lairage_records.

- Selected flow: Live guinea fowl
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Live guinea fowl
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Live-bird receiving and temporary lairage: Drinking water for live guinea fowl (`receiving_drinking_water_input`)

Drinking water for live guinea fowl enters the Live-bird receiving and temporary lairage process boundary as one specific product exchange; its quantity is obtained under cp_receiving_lairage_records.

- Selected flow: Drinking water for live guinea fowl
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Drinking water for live guinea fowl
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Live-bird receiving and temporary lairage: Electricity, grid supply (`receiving_grid_electricity_input`)

Electricity, grid supply enters the Live-bird receiving and temporary lairage process boundary as one specific product exchange; its quantity is obtained under cp_receiving_lairage_records.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Electricity, grid supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Live-bird receiving and temporary lairage: Live guinea fowl, accepted for slaughter (`accepted_live_guinea_fowl_output`)

Live guinea fowl, accepted for slaughter leaves the Live-bird receiving and temporary lairage process boundary as one specific product exchange; its quantity is obtained under cp_receiving_lairage_records.

- Selected flow: Live guinea fowl, accepted for slaughter
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Live guinea fowl, accepted for slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Waste flows

###### Live-bird receiving and temporary lairage: Waste guinea fowl dead before slaughter (`dead_guinea_fowl_waste_output`)

Waste guinea fowl dead before slaughter leaves the Live-bird receiving and temporary lairage process boundary as one specific waste exchange; its quantity is obtained under cp_receiving_lairage_records.

- Selected flow: Waste guinea fowl dead before slaughter
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste guinea fowl dead before slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Live-bird receiving and temporary lairage: Waste guinea-fowl manure (`guinea_fowl_manure_waste_output`)

Waste guinea-fowl manure leaves the Live-bird receiving and temporary lairage process boundary as one specific waste exchange; its quantity is obtained under cp_receiving_lairage_records.

- Selected flow: Waste guinea-fowl manure
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste guinea-fowl manure
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Live-bird receiving and temporary lairage: Waste wood-shaving litter contaminated by guinea fowl (`receiving_litter_waste_output`)

Waste wood-shaving litter contaminated by guinea fowl leaves the Live-bird receiving and temporary lairage process boundary as one specific waste exchange; its quantity is obtained under cp_receiving_lairage_records.

- Selected flow: Waste wood-shaving litter contaminated by guinea fowl
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste wood-shaving litter contaminated by guinea fowl
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Live-bird receiving and temporary lairage: Wastewater from guinea-fowl lairage (`receiving_wastewater_output`)

Wastewater from guinea-fowl lairage leaves the Live-bird receiving and temporary lairage process boundary as one specific waste exchange; its quantity is obtained under cp_receiving_lairage_records.

- Selected flow: Wastewater from guinea-fowl lairage
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from guinea-fowl lairage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Elementary flows

###### Live-bird receiving and temporary lairage: Ammonia to air (`receiving_ammonia_air_output`)

Ammonia to air leaves the Live-bird receiving and temporary lairage process boundary as one specific elementary exchange; its quantity is obtained under cp_receiving_lairage_records.

- Selected flow: Ammonia to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Ammonia to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

### Process: Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing (`slaughter_dressing`)

#### Inputs

##### Product flows

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Live guinea fowl, accepted for slaughter (`slaughter_live_guinea_fowl_input`)

Live guinea fowl, accepted for slaughter enters the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Live guinea fowl, accepted for slaughter
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Live guinea fowl, accepted for slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Process water for guinea-fowl slaughter (`slaughter_process_water_input`)

Process water for guinea-fowl slaughter enters the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Process water for guinea-fowl slaughter
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Process water for guinea-fowl slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Electricity, grid supply (`slaughter_grid_electricity_input`)

Electricity, grid supply enters the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Electricity, grid supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Steam, purchased (`slaughter_purchased_steam_input`)

Steam, purchased enters the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Steam, purchased
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Hot water, purchased (`slaughter_purchased_hot_water_input`)

Hot water, purchased enters the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Hot water, purchased
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Natural gas (`slaughter_natural_gas_input`)

Natural gas enters the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Natural gas
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Diesel fuel (`slaughter_diesel_input`)

Diesel fuel enters the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Diesel fuel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Liquefied petroleum gas (`slaughter_lpg_input`)

Liquefied petroleum gas enters the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Liquefied petroleum gas
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Dressed guinea-fowl carcass, fresh (`dressed_guinea_fowl_carcass_output`)

Dressed guinea-fowl carcass, fresh leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Dressed guinea-fowl carcass, fresh
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Dressed guinea-fowl carcass, fresh
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Guinea-fowl blood for further processing (`guinea_fowl_blood_coproduct_output`)

Guinea-fowl blood for further processing leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Guinea-fowl blood for further processing
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Guinea-fowl blood for further processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Guinea-fowl feathers for further processing (`guinea_fowl_feathers_coproduct_output`)

Guinea-fowl feathers for further processing leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Guinea-fowl feathers for further processing
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Guinea-fowl feathers for further processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Guinea-fowl liver, edible, excluding fatty liver (`guinea_fowl_liver_coproduct_output`)

Guinea-fowl liver, edible, excluding fatty liver leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Guinea-fowl liver, edible, excluding fatty liver
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Guinea-fowl liver, edible, excluding fatty liver
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `un-cpc-3-0-2025`; `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Guinea-fowl heart, edible (`guinea_fowl_heart_coproduct_output`)

Guinea-fowl heart, edible leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Guinea-fowl heart, edible
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Guinea-fowl heart, edible
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `un-cpc-3-0-2025`; `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Guinea-fowl gizzard, edible (`guinea_fowl_gizzard_coproduct_output`)

Guinea-fowl gizzard, edible leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Guinea-fowl gizzard, edible
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Guinea-fowl gizzard, edible
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `un-cpc-3-0-2025`; `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Guinea-fowl neck (`guinea_fowl_neck_coproduct_output`)

Guinea-fowl neck leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Guinea-fowl neck
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Guinea-fowl neck
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Guinea-fowl feet for further processing (`guinea_fowl_feet_coproduct_output`)

Guinea-fowl feet for further processing leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Guinea-fowl feet for further processing
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Guinea-fowl feet for further processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Recovered guinea-fowl fat (`guinea_fowl_fat_coproduct_output`)

Recovered guinea-fowl fat leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific product exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Recovered guinea-fowl fat
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Recovered guinea-fowl fat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Waste flows

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Waste guinea-fowl blood (`guinea_fowl_blood_waste_output`)

Waste guinea-fowl blood leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific waste exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Waste guinea-fowl blood
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste guinea-fowl blood
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Waste guinea-fowl feathers (`guinea_fowl_feathers_waste_output`)

Waste guinea-fowl feathers leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific waste exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Waste guinea-fowl feathers
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste guinea-fowl feathers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Waste condemned guinea-fowl organs (`condemned_guinea_fowl_organs_waste_output`)

Waste condemned guinea-fowl organs leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific waste exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Waste condemned guinea-fowl organs
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste condemned guinea-fowl organs
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Waste guinea-fowl stomach contents (`guinea_fowl_stomach_contents_waste_output`)

Waste guinea-fowl stomach contents leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific waste exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Waste guinea-fowl stomach contents
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste guinea-fowl stomach contents
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Waste guinea-fowl intestinal contents (`guinea_fowl_intestinal_contents_waste_output`)

Waste guinea-fowl intestinal contents leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific waste exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Waste guinea-fowl intestinal contents
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste guinea-fowl intestinal contents
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Waste guinea-fowl intestines (`guinea_fowl_intestines_waste_output`)

Waste guinea-fowl intestines leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific waste exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Waste guinea-fowl intestines
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste guinea-fowl intestines
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Waste guinea-fowl fat (`guinea_fowl_fat_waste_output`)

Waste guinea-fowl fat leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific waste exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Waste guinea-fowl fat
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste guinea-fowl fat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Waste condemned guinea-fowl carcass material (`condemned_carcass_waste_output`)

Waste condemned guinea-fowl carcass material leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific waste exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Waste condemned guinea-fowl carcass material
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste condemned guinea-fowl carcass material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: High-organic-load wastewater from guinea-fowl slaughter (`slaughter_high_load_wastewater_output`)

High-organic-load wastewater from guinea-fowl slaughter leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific waste exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: High-organic-load wastewater from guinea-fowl slaughter
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of High-organic-load wastewater from guinea-fowl slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Ordinary-load wastewater from guinea-fowl slaughter (`slaughter_ordinary_wastewater_output`)

Ordinary-load wastewater from guinea-fowl slaughter leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific waste exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Ordinary-load wastewater from guinea-fowl slaughter
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Ordinary-load wastewater from guinea-fowl slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Elementary flows

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Carbon dioxide, fossil, to air (`slaughter_fossil_co2_air_output`)

Carbon dioxide, fossil, to air leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific elementary exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Carbon dioxide, fossil, to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Nitrogen oxides to air (`slaughter_nox_air_output`)

Nitrogen oxides to air leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific elementary exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Nitrogen oxides to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Sulfur oxides to air (`slaughter_sox_air_output`)

Sulfur oxides to air leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific elementary exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Sulfur oxides to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Sulfur oxides to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing: Particulate matter, less than 2.5 micrometres, to air (`slaughter_pm25_air_output`)

Particulate matter, less than 2.5 micrometres, to air leaves the Stunning, slaughter, bleeding, scalding, defeathering, evisceration and dressing process boundary as one specific elementary exchange; its quantity is obtained under cp_slaughter_dressing_records.

- Selected flow: Particulate matter, less than 2.5 micrometres, to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Particulate matter, less than 2.5 micrometres, to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

### Process: Carcass cutting and portioning (`carcass_cutting_portioning`)

#### Inputs

##### Product flows

###### Carcass cutting and portioning: Dressed guinea-fowl carcass, fresh (`cutting_dressed_carcass_input`)

Dressed guinea-fowl carcass, fresh enters the Carcass cutting and portioning process boundary as one specific product exchange; its quantity is obtained under cp_cutting_portioning_records.

- Selected flow: Dressed guinea-fowl carcass, fresh
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Dressed guinea-fowl carcass, fresh
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Carcass cutting and portioning: Process water for guinea-fowl cutting (`cutting_process_water_input`)

Process water for guinea-fowl cutting enters the Carcass cutting and portioning process boundary as one specific product exchange; its quantity is obtained under cp_cutting_portioning_records.

- Selected flow: Process water for guinea-fowl cutting
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Process water for guinea-fowl cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Carcass cutting and portioning: Electricity, grid supply (`cutting_grid_electricity_input`)

Electricity, grid supply enters the Carcass cutting and portioning process boundary as one specific product exchange; its quantity is obtained under cp_cutting_portioning_records.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Electricity, grid supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Carcass cutting and portioning: Guinea-fowl meat cuts, fresh (`fresh_guinea_fowl_cuts_output`)

Guinea-fowl meat cuts, fresh leaves the Carcass cutting and portioning process boundary as one specific product exchange; its quantity is obtained under cp_cutting_portioning_records.

- Selected flow: Guinea-fowl meat cuts, fresh
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Guinea-fowl meat cuts, fresh
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Carcass cutting and portioning: Guinea-fowl bones for further processing (`guinea_fowl_bones_coproduct_output`)

Guinea-fowl bones for further processing leaves the Carcass cutting and portioning process boundary as one specific product exchange; its quantity is obtained under cp_cutting_portioning_records.

- Selected flow: Guinea-fowl bones for further processing
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Guinea-fowl bones for further processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Carcass cutting and portioning: Guinea-fowl skin for further processing (`guinea_fowl_skin_coproduct_output`)

Guinea-fowl skin for further processing leaves the Carcass cutting and portioning process boundary as one specific product exchange; its quantity is obtained under cp_cutting_portioning_records.

- Selected flow: Guinea-fowl skin for further processing
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Guinea-fowl skin for further processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Carcass cutting and portioning: Recovered guinea-fowl cutting fat (`cutting_fat_coproduct_output`)

Recovered guinea-fowl cutting fat leaves the Carcass cutting and portioning process boundary as one specific product exchange; its quantity is obtained under cp_cutting_portioning_records.

- Selected flow: Recovered guinea-fowl cutting fat
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Recovered guinea-fowl cutting fat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Waste flows

###### Carcass cutting and portioning: Waste guinea-fowl bones (`guinea_fowl_bones_waste_output`)

Waste guinea-fowl bones leaves the Carcass cutting and portioning process boundary as one specific waste exchange; its quantity is obtained under cp_cutting_portioning_records.

- Selected flow: Waste guinea-fowl bones
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste guinea-fowl bones
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Carcass cutting and portioning: Waste guinea-fowl skin (`guinea_fowl_skin_waste_output`)

Waste guinea-fowl skin leaves the Carcass cutting and portioning process boundary as one specific waste exchange; its quantity is obtained under cp_cutting_portioning_records.

- Selected flow: Waste guinea-fowl skin
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste guinea-fowl skin
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Carcass cutting and portioning: Waste guinea-fowl cutting fat (`cutting_fat_waste_output`)

Waste guinea-fowl cutting fat leaves the Carcass cutting and portioning process boundary as one specific waste exchange; its quantity is obtained under cp_cutting_portioning_records.

- Selected flow: Waste guinea-fowl cutting fat
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste guinea-fowl cutting fat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Carcass cutting and portioning: Waste guinea-fowl meat trim (`cutting_trim_waste_output`)

Waste guinea-fowl meat trim leaves the Carcass cutting and portioning process boundary as one specific waste exchange; its quantity is obtained under cp_cutting_portioning_records.

- Selected flow: Waste guinea-fowl meat trim
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste guinea-fowl meat trim
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Carcass cutting and portioning: Wastewater from guinea-fowl carcass cutting (`cutting_wastewater_output`)

Wastewater from guinea-fowl carcass cutting leaves the Carcass cutting and portioning process boundary as one specific waste exchange; its quantity is obtained under cp_cutting_portioning_records.

- Selected flow: Wastewater from guinea-fowl carcass cutting
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from guinea-fowl carcass cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Elementary flows

### Process: Chilling and cold storage (`chilling_cold_storage`)

#### Inputs

##### Product flows

###### Chilling and cold storage: Dressed guinea-fowl carcass before chilling (`chilling_carcass_input`)

Dressed guinea-fowl carcass before chilling enters the Chilling and cold storage process boundary as one specific product exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Dressed guinea-fowl carcass before chilling
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Dressed guinea-fowl carcass before chilling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Guinea-fowl meat cuts before chilling (`chilling_cuts_input`)

Guinea-fowl meat cuts before chilling enters the Chilling and cold storage process boundary as one specific product exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Guinea-fowl meat cuts before chilling
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Guinea-fowl meat cuts before chilling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Process water for carcass chilling (`chilling_process_water_input`)

Process water for carcass chilling enters the Chilling and cold storage process boundary as one specific product exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Process water for carcass chilling
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Process water for carcass chilling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Electricity, grid supply (`chilling_grid_electricity_input`)

Electricity, grid supply enters the Chilling and cold storage process boundary as one specific product exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Electricity, grid supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Steam, purchased (`chilling_purchased_steam_input`)

Steam, purchased enters the Chilling and cold storage process boundary as one specific product exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Steam, purchased
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Hot water, purchased (`chilling_purchased_hot_water_input`)

Hot water, purchased enters the Chilling and cold storage process boundary as one specific product exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Hot water, purchased
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Natural gas (`chilling_natural_gas_input`)

Natural gas enters the Chilling and cold storage process boundary as one specific product exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Natural gas
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Diesel fuel (`chilling_diesel_input`)

Diesel fuel enters the Chilling and cold storage process boundary as one specific product exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Diesel fuel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Liquefied petroleum gas (`chilling_lpg_input`)

Liquefied petroleum gas enters the Chilling and cold storage process boundary as one specific product exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Liquefied petroleum gas
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Ammonia, refrigerant grade (`ammonia_refrigerant_makeup_input`)

Ammonia, refrigerant grade enters the Chilling and cold storage process boundary as one specific product exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Ammonia, refrigerant grade
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Ammonia, refrigerant grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Carbon dioxide, refrigerant grade (`carbon_dioxide_refrigerant_makeup_input`)

Carbon dioxide, refrigerant grade enters the Chilling and cold storage process boundary as one specific product exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Carbon dioxide, refrigerant grade
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Carbon dioxide, refrigerant grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Refrigerant R404A (`r404a_refrigerant_makeup_input`)

Refrigerant R404A enters the Chilling and cold storage process boundary as one specific product exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Refrigerant R404A
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Refrigerant R404A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Refrigerant R134a (`r134a_refrigerant_makeup_input`)

Refrigerant R134a enters the Chilling and cold storage process boundary as one specific product exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Refrigerant R134a
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Refrigerant R134a
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilling and cold storage: Guinea-fowl carcass, chilled (`chilled_guinea_fowl_carcass_output`)

Guinea-fowl carcass, chilled leaves the Chilling and cold storage process boundary as one specific product exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Guinea-fowl carcass, chilled
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Guinea-fowl carcass, chilled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Guinea-fowl meat cuts, chilled (`chilled_guinea_fowl_cuts_output`)

Guinea-fowl meat cuts, chilled leaves the Chilling and cold storage process boundary as one specific product exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Guinea-fowl meat cuts, chilled
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Guinea-fowl meat cuts, chilled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Waste flows

###### Chilling and cold storage: Waste off-spec chilled guinea-fowl meat (`off_spec_chilled_meat_waste_output`)

Waste off-spec chilled guinea-fowl meat leaves the Chilling and cold storage process boundary as one specific waste exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Waste off-spec chilled guinea-fowl meat
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste off-spec chilled guinea-fowl meat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Waste refrigeration compressor oil (`refrigeration_oil_waste_output`)

Waste refrigeration compressor oil leaves the Chilling and cold storage process boundary as one specific waste exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Waste refrigeration compressor oil
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste refrigeration compressor oil
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Wastewater from refrigeration defrost (`chilling_defrost_wastewater_output`)

Wastewater from refrigeration defrost leaves the Chilling and cold storage process boundary as one specific waste exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Wastewater from refrigeration defrost
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from refrigeration defrost
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Elementary flows

###### Chilling and cold storage: Ammonia, refrigerant, to air (`ammonia_refrigerant_air_output`)

Ammonia, refrigerant, to air leaves the Chilling and cold storage process boundary as one specific elementary exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Ammonia, refrigerant, to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Ammonia, refrigerant, to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Carbon dioxide, refrigerant, to air (`carbon_dioxide_refrigerant_air_output`)

Carbon dioxide, refrigerant, to air leaves the Chilling and cold storage process boundary as one specific elementary exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Carbon dioxide, refrigerant, to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Carbon dioxide, refrigerant, to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Refrigerant R404A to air (`r404a_refrigerant_air_output`)

Refrigerant R404A to air leaves the Chilling and cold storage process boundary as one specific elementary exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Refrigerant R404A to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Refrigerant R404A to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Refrigerant R134a to air (`r134a_refrigerant_air_output`)

Refrigerant R134a to air leaves the Chilling and cold storage process boundary as one specific elementary exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Refrigerant R134a to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Refrigerant R134a to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Carbon dioxide, fossil, to air (`chilling_fossil_co2_air_output`)

Carbon dioxide, fossil, to air leaves the Chilling and cold storage process boundary as one specific elementary exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Carbon dioxide, fossil, to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Nitrogen oxides to air (`chilling_nox_air_output`)

Nitrogen oxides to air leaves the Chilling and cold storage process boundary as one specific elementary exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Nitrogen oxides to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Sulfur oxides to air (`chilling_sox_air_output`)

Sulfur oxides to air leaves the Chilling and cold storage process boundary as one specific elementary exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Sulfur oxides to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Sulfur oxides to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Chilling and cold storage: Particulate matter, less than 2.5 micrometres, to air (`chilling_pm25_air_output`)

Particulate matter, less than 2.5 micrometres, to air leaves the Chilling and cold storage process boundary as one specific elementary exchange; its quantity is obtained under cp_chilling_storage_records.

- Selected flow: Particulate matter, less than 2.5 micrometres, to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Particulate matter, less than 2.5 micrometres, to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_storage_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

### Process: Packaging, net weighing and product release (`packaging_release`)

#### Inputs

##### Product flows

###### Packaging, net weighing and product release: Guinea-fowl carcass, chilled (`packaging_chilled_carcass_input`)

Guinea-fowl carcass, chilled enters the Packaging, net weighing and product release process boundary as one specific product exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Guinea-fowl carcass, chilled
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Guinea-fowl carcass, chilled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Guinea-fowl meat cuts, chilled (`packaging_chilled_cuts_input`)

Guinea-fowl meat cuts, chilled enters the Packaging, net weighing and product release process boundary as one specific product exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Guinea-fowl meat cuts, chilled
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Guinea-fowl meat cuts, chilled
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Electricity, grid supply (`packaging_grid_electricity_input`)

Electricity, grid supply enters the Packaging, net weighing and product release process boundary as one specific product exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Electricity, grid supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Polyethylene packaging film (`polyethylene_film_input`)

Polyethylene packaging film enters the Packaging, net weighing and product release process boundary as one specific product exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Polyethylene packaging film
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Polyamide-polyethylene vacuum pouch (`polyamide_polyethylene_pouch_input`)

Polyamide-polyethylene vacuum pouch enters the Packaging, net weighing and product release process boundary as one specific product exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Polyamide-polyethylene vacuum pouch
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Polyamide-polyethylene vacuum pouch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Polyethylene terephthalate meat tray (`pet_tray_input`)

Polyethylene terephthalate meat tray enters the Packaging, net weighing and product release process boundary as one specific product exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Polyethylene terephthalate meat tray
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Polyethylene terephthalate meat tray
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Cellulose meat absorbent pad (`cellulose_absorbent_pad_input`)

Cellulose meat absorbent pad enters the Packaging, net weighing and product release process boundary as one specific product exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Cellulose meat absorbent pad
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Cellulose meat absorbent pad
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Corrugated paperboard carton (`corrugated_carton_input`)

Corrugated paperboard carton enters the Packaging, net weighing and product release process boundary as one specific product exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Corrugated paperboard carton
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Corrugated paperboard carton
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: High-density polyethylene transport crate (`hdpe_crate_input`)

High-density polyethylene transport crate enters the Packaging, net weighing and product release process boundary as one specific product exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: High-density polyethylene transport crate
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of High-density polyethylene transport crate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Wooden transport pallet (`wood_pallet_input`)

Wooden transport pallet enters the Packaging, net weighing and product release process boundary as one specific product exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Wooden transport pallet
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wooden transport pallet
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Polypropylene packaging strap (`polypropylene_strap_input`)

Polypropylene packaging strap enters the Packaging, net weighing and product release process boundary as one specific product exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Polypropylene packaging strap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Paper packaging label (`paper_label_input`)

Paper packaging label enters the Packaging, net weighing and product release process boundary as one specific product exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Paper packaging label
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Paper packaging label
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net reference product: meat of guinea fowl, fresh or chilled (`reference_guinea_fowl_meat_output`)

Conforming fresh or chilled guinea-fowl meat leaves the plant gate at exactly 1 kg net mass; this is the only inventory card carrying the verified product-flow UUID.

- Selected flow: Meat of guinea fowl, fresh or chilled `8c683807-f79b-46a9-90e4-c005d506a98a`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: conforming net product mass normalized to exactly 1 kg after packaging tare is excluded
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `un-cpc-3-0-2025`; `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Waste flows

###### Packaging, net weighing and product release: Waste off-spec packaged guinea-fowl meat (`packaging_off_spec_meat_waste_output`)

Waste off-spec packaged guinea-fowl meat leaves the Packaging, net weighing and product release process boundary as one specific waste exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Waste off-spec packaged guinea-fowl meat
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste off-spec packaged guinea-fowl meat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Waste polyethylene packaging film (`polyethylene_film_waste_output`)

Waste polyethylene packaging film leaves the Packaging, net weighing and product release process boundary as one specific waste exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Waste polyethylene packaging film
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste polyethylene packaging film
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Waste polyamide-polyethylene vacuum pouch (`polyamide_polyethylene_pouch_waste_output`)

Waste polyamide-polyethylene vacuum pouch leaves the Packaging, net weighing and product release process boundary as one specific waste exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Waste polyamide-polyethylene vacuum pouch
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste polyamide-polyethylene vacuum pouch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Waste polyethylene terephthalate meat tray (`pet_tray_waste_output`)

Waste polyethylene terephthalate meat tray leaves the Packaging, net weighing and product release process boundary as one specific waste exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Waste polyethylene terephthalate meat tray
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste polyethylene terephthalate meat tray
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Waste cellulose meat absorbent pad (`cellulose_absorbent_pad_waste_output`)

Waste cellulose meat absorbent pad leaves the Packaging, net weighing and product release process boundary as one specific waste exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Waste cellulose meat absorbent pad
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste cellulose meat absorbent pad
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Waste corrugated paperboard carton (`corrugated_carton_waste_output`)

Waste corrugated paperboard carton leaves the Packaging, net weighing and product release process boundary as one specific waste exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Waste corrugated paperboard carton
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste corrugated paperboard carton
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Waste high-density polyethylene transport crate (`hdpe_crate_waste_output`)

Waste high-density polyethylene transport crate leaves the Packaging, net weighing and product release process boundary as one specific waste exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Waste high-density polyethylene transport crate
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste high-density polyethylene transport crate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Waste wooden transport pallet (`wood_pallet_waste_output`)

Waste wooden transport pallet leaves the Packaging, net weighing and product release process boundary as one specific waste exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Waste wooden transport pallet
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste wooden transport pallet
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Waste polypropylene packaging strap (`polypropylene_strap_waste_output`)

Waste polypropylene packaging strap leaves the Packaging, net weighing and product release process boundary as one specific waste exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Waste polypropylene packaging strap
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste polypropylene packaging strap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Packaging, net weighing and product release: Waste paper packaging label (`paper_label_waste_output`)

Waste paper packaging label leaves the Packaging, net weighing and product release process boundary as one specific waste exchange; its quantity is obtained under cp_packaging_release_records.

- Selected flow: Waste paper packaging label
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste paper packaging label
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Elementary flows

### Process: Plant cleaning and sanitation (`plant_cleaning_sanitation`)

#### Inputs

##### Product flows

###### Plant cleaning and sanitation: Process water for plant sanitation (`sanitation_process_water_input`)

Process water for plant sanitation enters the Plant cleaning and sanitation process boundary as one specific product exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Process water for plant sanitation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Process water for plant sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Electricity, grid supply (`sanitation_grid_electricity_input`)

Electricity, grid supply enters the Plant cleaning and sanitation process boundary as one specific product exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Electricity, grid supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Steam, purchased (`sanitation_purchased_steam_input`)

Steam, purchased enters the Plant cleaning and sanitation process boundary as one specific product exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Steam, purchased
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Hot water, purchased (`sanitation_purchased_hot_water_input`)

Hot water, purchased enters the Plant cleaning and sanitation process boundary as one specific product exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Hot water, purchased
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Natural gas (`sanitation_natural_gas_input`)

Natural gas enters the Plant cleaning and sanitation process boundary as one specific product exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Natural gas
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Diesel fuel (`sanitation_diesel_input`)

Diesel fuel enters the Plant cleaning and sanitation process boundary as one specific product exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Diesel fuel
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Liquefied petroleum gas (`sanitation_lpg_input`)

Liquefied petroleum gas enters the Plant cleaning and sanitation process boundary as one specific product exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Liquefied petroleum gas
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Sodium hydroxide cleaning formulation (`sodium_hydroxide_cleaner_input`)

Sodium hydroxide cleaning formulation enters the Plant cleaning and sanitation process boundary as one specific product exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Sodium hydroxide cleaning formulation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Sodium hydroxide cleaning formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Nitric acid cleaning formulation (`nitric_acid_cleaner_input`)

Nitric acid cleaning formulation enters the Plant cleaning and sanitation process boundary as one specific product exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Nitric acid cleaning formulation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Nitric acid cleaning formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Peracetic acid disinfectant formulation (`peracetic_acid_disinfectant_input`)

Peracetic acid disinfectant formulation enters the Plant cleaning and sanitation process boundary as one specific product exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Peracetic acid disinfectant formulation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Peracetic acid disinfectant formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Sodium hypochlorite disinfectant formulation (`sodium_hypochlorite_disinfectant_input`)

Sodium hypochlorite disinfectant formulation enters the Plant cleaning and sanitation process boundary as one specific product exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Sodium hypochlorite disinfectant formulation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Sodium hypochlorite disinfectant formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Quaternary ammonium disinfectant formulation (`quaternary_ammonium_disinfectant_input`)

Quaternary ammonium disinfectant formulation enters the Plant cleaning and sanitation process boundary as one specific product exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Quaternary ammonium disinfectant formulation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Quaternary ammonium disinfectant formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Plant cleaning and sanitation: Wastewater from sodium hydroxide plant cleaning (`alkaline_cleaning_wastewater_output`)

Wastewater from sodium hydroxide plant cleaning leaves the Plant cleaning and sanitation process boundary as one specific waste exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Wastewater from sodium hydroxide plant cleaning
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from sodium hydroxide plant cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Wastewater from nitric acid plant cleaning (`acid_cleaning_wastewater_output`)

Wastewater from nitric acid plant cleaning leaves the Plant cleaning and sanitation process boundary as one specific waste exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Wastewater from nitric acid plant cleaning
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from nitric acid plant cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Wastewater from peracetic acid disinfection (`peracetic_disinfection_wastewater_output`)

Wastewater from peracetic acid disinfection leaves the Plant cleaning and sanitation process boundary as one specific waste exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Wastewater from peracetic acid disinfection
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from peracetic acid disinfection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Wastewater from sodium hypochlorite disinfection (`hypochlorite_disinfection_wastewater_output`)

Wastewater from sodium hypochlorite disinfection leaves the Plant cleaning and sanitation process boundary as one specific waste exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Wastewater from sodium hypochlorite disinfection
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from sodium hypochlorite disinfection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Wastewater from quaternary ammonium disinfection (`quaternary_ammonium_wastewater_output`)

Wastewater from quaternary ammonium disinfection leaves the Plant cleaning and sanitation process boundary as one specific waste exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Wastewater from quaternary ammonium disinfection
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from quaternary ammonium disinfection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Waste used cleaning cloth (`used_cleaning_cloth_waste_output`)

Waste used cleaning cloth leaves the Plant cleaning and sanitation process boundary as one specific waste exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Waste used cleaning cloth
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste used cleaning cloth
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Elementary flows

###### Plant cleaning and sanitation: Carbon dioxide, fossil, to air (`sanitation_fossil_co2_air_output`)

Carbon dioxide, fossil, to air leaves the Plant cleaning and sanitation process boundary as one specific elementary exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Carbon dioxide, fossil, to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Nitrogen oxides to air (`sanitation_nox_air_output`)

Nitrogen oxides to air leaves the Plant cleaning and sanitation process boundary as one specific elementary exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Nitrogen oxides to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Sulfur oxides to air (`sanitation_sox_air_output`)

Sulfur oxides to air leaves the Plant cleaning and sanitation process boundary as one specific elementary exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Sulfur oxides to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Sulfur oxides to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### Plant cleaning and sanitation: Particulate matter, less than 2.5 micrometres, to air (`sanitation_pm25_air_output`)

Particulate matter, less than 2.5 micrometres, to air leaves the Plant cleaning and sanitation process boundary as one specific elementary exchange; its quantity is obtained under cp_cleaning_sanitation_records.

- Selected flow: Particulate matter, less than 2.5 micrometres, to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Particulate matter, less than 2.5 micrometres, to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

### Process: On-site slaughterhouse wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### On-site slaughterhouse wastewater treatment: Electricity, grid supply (`wwtp_grid_electricity_input`)

Electricity, grid supply enters the On-site slaughterhouse wastewater treatment process boundary as one specific product exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh; flow-property and unit-group UUIDs unresolved
- Amount rule: measured energy of Electricity, grid supply
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Ferric chloride wastewater-treatment formulation (`ferric_chloride_treatment_input`)

Ferric chloride wastewater-treatment formulation enters the On-site slaughterhouse wastewater treatment process boundary as one specific product exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Ferric chloride wastewater-treatment formulation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Ferric chloride wastewater-treatment formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Polyacrylamide flocculant formulation (`polyacrylamide_flocculant_input`)

Polyacrylamide flocculant formulation enters the On-site slaughterhouse wastewater treatment process boundary as one specific product exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Polyacrylamide flocculant formulation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Polyacrylamide flocculant formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Sodium hydroxide pH-adjustment formulation (`sodium_hydroxide_ph_adjustment_input`)

Sodium hydroxide pH-adjustment formulation enters the On-site slaughterhouse wastewater treatment process boundary as one specific product exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Sodium hydroxide pH-adjustment formulation
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Sodium hydroxide pH-adjustment formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Waste flows

###### On-site slaughterhouse wastewater treatment: Wastewater from guinea-fowl lairage (`wwtp_receiving_wastewater_input`)

Wastewater from guinea-fowl lairage enters the On-site slaughterhouse wastewater treatment process boundary as one specific waste exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Wastewater from guinea-fowl lairage
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from guinea-fowl lairage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: High-organic-load wastewater from guinea-fowl slaughter (`wwtp_high_load_slaughter_wastewater_input`)

High-organic-load wastewater from guinea-fowl slaughter enters the On-site slaughterhouse wastewater treatment process boundary as one specific waste exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: High-organic-load wastewater from guinea-fowl slaughter
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of High-organic-load wastewater from guinea-fowl slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Ordinary-load wastewater from guinea-fowl slaughter (`wwtp_ordinary_slaughter_wastewater_input`)

Ordinary-load wastewater from guinea-fowl slaughter enters the On-site slaughterhouse wastewater treatment process boundary as one specific waste exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Ordinary-load wastewater from guinea-fowl slaughter
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Ordinary-load wastewater from guinea-fowl slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Wastewater from guinea-fowl carcass cutting (`wwtp_cutting_wastewater_input`)

Wastewater from guinea-fowl carcass cutting enters the On-site slaughterhouse wastewater treatment process boundary as one specific waste exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Wastewater from guinea-fowl carcass cutting
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from guinea-fowl carcass cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Wastewater from refrigeration defrost (`wwtp_defrost_wastewater_input`)

Wastewater from refrigeration defrost enters the On-site slaughterhouse wastewater treatment process boundary as one specific waste exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Wastewater from refrigeration defrost
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from refrigeration defrost
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Wastewater from sodium hydroxide plant cleaning (`wwtp_alkaline_cleaning_wastewater_input`)

Wastewater from sodium hydroxide plant cleaning enters the On-site slaughterhouse wastewater treatment process boundary as one specific waste exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Wastewater from sodium hydroxide plant cleaning
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from sodium hydroxide plant cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Wastewater from nitric acid plant cleaning (`wwtp_acid_cleaning_wastewater_input`)

Wastewater from nitric acid plant cleaning enters the On-site slaughterhouse wastewater treatment process boundary as one specific waste exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Wastewater from nitric acid plant cleaning
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from nitric acid plant cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Wastewater from peracetic acid disinfection (`wwtp_peracetic_wastewater_input`)

Wastewater from peracetic acid disinfection enters the On-site slaughterhouse wastewater treatment process boundary as one specific waste exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Wastewater from peracetic acid disinfection
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from peracetic acid disinfection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Wastewater from sodium hypochlorite disinfection (`wwtp_hypochlorite_wastewater_input`)

Wastewater from sodium hypochlorite disinfection enters the On-site slaughterhouse wastewater treatment process boundary as one specific waste exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Wastewater from sodium hypochlorite disinfection
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from sodium hypochlorite disinfection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Wastewater from quaternary ammonium disinfection (`wwtp_quaternary_ammonium_wastewater_input`)

Wastewater from quaternary ammonium disinfection enters the On-site slaughterhouse wastewater treatment process boundary as one specific waste exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Wastewater from quaternary ammonium disinfection
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Wastewater from quaternary ammonium disinfection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### On-site slaughterhouse wastewater treatment: Sludge from guinea-fowl slaughterhouse wastewater treatment (`wastewater_sludge_output`)

Sludge from guinea-fowl slaughterhouse wastewater treatment leaves the On-site slaughterhouse wastewater treatment process boundary as one specific waste exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Sludge from guinea-fowl slaughterhouse wastewater treatment
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Sludge from guinea-fowl slaughterhouse wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Screenings from guinea-fowl slaughterhouse wastewater treatment (`wastewater_screenings_output`)

Screenings from guinea-fowl slaughterhouse wastewater treatment leaves the On-site slaughterhouse wastewater treatment process boundary as one specific waste exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Screenings from guinea-fowl slaughterhouse wastewater treatment
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Screenings from guinea-fowl slaughterhouse wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Waste animal fat from wastewater treatment (`wastewater_recovered_fat_waste_output`)

Waste animal fat from wastewater treatment leaves the On-site slaughterhouse wastewater treatment process boundary as one specific waste exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Waste animal fat from wastewater treatment
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: measured mass of Waste animal fat from wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

##### Elementary flows

###### On-site slaughterhouse wastewater treatment: Chemical oxygen demand to water (`cod_water_output`)

Chemical oxygen demand to water leaves the On-site slaughterhouse wastewater treatment process boundary as one specific elementary exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Chemical oxygen demand to water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Biochemical oxygen demand, 5 days, to water (`bod5_water_output`)

Biochemical oxygen demand, 5 days, to water leaves the On-site slaughterhouse wastewater treatment process boundary as one specific elementary exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Biochemical oxygen demand, 5 days, to water
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Biochemical oxygen demand, 5 days, to water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Nitrogen, total, to water (`total_nitrogen_water_output`)

Nitrogen, total, to water leaves the On-site slaughterhouse wastewater treatment process boundary as one specific elementary exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Nitrogen, total, to water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Phosphorus, total, to water (`total_phosphorus_water_output`)

Phosphorus, total, to water leaves the On-site slaughterhouse wastewater treatment process boundary as one specific elementary exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Phosphorus, total, to water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Suspended solids to water (`suspended_solids_water_output`)

Suspended solids to water leaves the On-site slaughterhouse wastewater treatment process boundary as one specific elementary exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Suspended solids to water
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Suspended solids to water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Animal fat to water (`animal_fat_water_output`)

Animal fat to water leaves the On-site slaughterhouse wastewater treatment process boundary as one specific elementary exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Animal fat to water
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Animal fat to water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Methane, biogenic, to air (`wastewater_methane_air_output`)

Methane, biogenic, to air leaves the On-site slaughterhouse wastewater treatment process boundary as one specific elementary exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Methane, biogenic, to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Methane, biogenic, to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

###### On-site slaughterhouse wastewater treatment: Dinitrogen monoxide to air (`wastewater_nitrous_oxide_air_output`)

Dinitrogen monoxide to air leaves the On-site slaughterhouse wastewater treatment process boundary as one specific elementary exchange; its quantity is obtained under cp_wastewater_treatment_records.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: calculated mass of Dinitrogen monoxide to air
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | all multifunctional foreground operations | Avoid allocation by separately metering and subdividing receiving, slaughter, cutting, chilling, packing, sanitation and wastewater-treatment operations wherever their exchanges can be directly attributed. | `eu-pef-recommendation-2021-2279` |
| `allocation_physical_relation` | meat and saleable blood, feathers, organs, fat, bones, skin, necks or feet | When subdivision cannot eliminate multifunctionality, use a documented physical causal relationship only when it reflects how the process inputs and outputs change; retain measured masses and the basis for every factor. | `eu-pef-recommendation-2021-2279` |
| `allocation_economic_fallback` | remaining saleable co-products | When no defensible physical relationship exists, apply the declared Environmental Footprint allocation hierarchy and use consistent, contemporaneous economic data if economic allocation is required; disclose factors and sensitivity. | `eu-pef-recommendation-2021-2279` |
| `allocation_waste_destination` | condemned material, organic residues and recovered materials | Classify each stream as product, co-product or waste from its documented destination and applicable study rule; do not credit a waste without a transparent substitution or system-expansion model and linked destination dataset. | `eu-pef-recommendation-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_lairage_records` | `live_bird_receiving_lairage` | live birds; drinking water; electricity; mortality; manure; litter; wastewater; ammonia | receiving, scale, meter, mortality and waste records | supplier; lot; bird count; live mass; accepted mass; water; electricity; mortality mass; manure; litter; wastewater; ammonia measurement or model fields | reconcile each lot and each separately metered or weighed exchange | kg; kWh | each lot, with monthly utility reconciliation | representative continuous 12-month period or all lots in a shorter campaign | every foreground receiving site | preserve lot identity and normalize each exchange to net reference product | scale and meter calibration; receiving log; veterinary disposition; waste ticket; calculation workpaper |
| `cp_slaughter_dressing_records` | `slaughter_dressing` | accepted birds; water; each utility and fuel; carcass; each co-product; each waste; each wastewater; each combustion emission | line, batch, scale, meter, inspection and destination records | live input; water; electricity; steam; hot water; natural gas; diesel; LPG; carcass mass; each organ, blood, feather, fat and waste mass; wastewater; emission fields | reconcile every slaughter lot and each named output on a common mass basis | kg; kWh; MJ | each lot, with monthly carrier reconciliation | representative continuous 12-month period or all campaign lots | every foreground slaughter line | keep every carrier, co-product, waste and emission separate and normalize to net reference product | calibrated scales and meters; inspection record; destination ticket; fuel record; mass-balance sign-off |
| `cp_cutting_portioning_records` | `carcass_cutting_portioning` | carcass; water; electricity; cuts; bones; skin; fat; trim; wastewater | cutting batch, scale, meter and waste records | carcass input; cut output; bone, skin, fat and trim masses; water; electricity; wastewater; stock change | reconcile each cutting batch and named output separately | kg; kWh | each batch, with monthly meter reconciliation | representative continuous 12-month period or all cutting batches | every foreground cutting line | normalize each exchange to released net meat while preserving cut identity | scale and meter calibration; cut specification; genealogy; waste ticket; mass-balance sign-off |
| `cp_chilling_storage_records` | `chilling_cold_storage` | carcass or cuts; water; each utility and fuel; each refrigerant; chilled output; wastes; each direct emission | temperature, mass, utility, refrigerant and maintenance records | input and output mass; temperature; water; electricity; steam; hot water; each fuel; beginning, purchase, recovery and ending mass for each refrigerant; wastes; emission fields | reconcile product mass, temperature, each carrier and each refrigerant substance independently | kg; kWh; MJ; degrees Celsius | each lot and refrigerant service event, with monthly reconciliation | representative continuous 12-month period or all campaign lots | every foreground chilling and cold-storage system | calculate each refrigerant loss separately and normalize all rows to net reference product | thermometer, scale and meter calibration; refrigerant service log; inventory reconciliation; maintenance record |
| `cp_packaging_release_records` | `packaging_release` | chilled meat; electricity; each packaging component; reference product; off-spec product; each packaging waste | issue, filling, weighing, release and waste records | meat input; electricity; component count and mass; reusable-component use share; gross mass; tare; net mass; off-spec mass; each waste mass | reconcile each released lot, subtract tare and keep every package component separate | kg; kWh; item | each released lot, with monthly reconciliation | representative continuous 12-month period or all lots | every foreground packing line | normalize exactly to 1 kg conforming net product | scale calibration; packaging specification; issue and return log; release record; waste ticket |
| `cp_cleaning_sanitation_records` | `plant_cleaning_sanitation` | water; each utility and fuel; each chemical; each wastewater; cloth waste; each combustion emission | sanitation schedule, meter, issue, wastewater and emission records | water; electricity; steam; hot water; natural gas; diesel; LPG; each formulation mass and concentration; each wastewater; cloth waste; emission fields | record every sanitation event and every named carrier, formulation, wastewater and emission independently | kg; kWh; MJ | each sanitation event, aggregated monthly | representative continuous 12-month period or all campaign events | all in-scope sanitation systems | assign shared sanitation by a documented causal driver and normalize to net reference product | calibration; invoice; formulation specification; sanitation log; waste receipt; calculation workpaper |
| `cp_wastewater_treatment_records` | `onsite_wastewater_treatment` | each influent; electricity; each treatment chemical; sludge; screenings; fat; each water and air emission | inlet, meter, chemical, sludge, laboratory and gas records | each wastewater quantity; electricity; each chemical mass; sludge, screenings and fat mass; matched concentration and discharge quantity for each pollutant; methane and nitrous-oxide fields | preserve each influent, treatment material, waste and emission as a separate record | kg; kWh; mg/L | flow continuous or daily; sampling under the operating plan | representative continuous 12-month period or complete campaign | complete on-site treatment boundary | calculate each discharged load separately and normalize treatment rows to net reference product | laboratory QA; sampling plan; meter calibration; chemical record; waste receipt; calculation workpaper |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | every foreground row | normalized amount = reporting-period row amount / conforming net guinea-fowl meat output | collected row amount; conforming net product mass excluding tare | amount per 1 kg reference product | `eu-pef-recommendation-2021-2279` |
| `calc_process_mass_balance` | each material process | residual = opening stock + measured inputs - measured outputs - closing stock; investigate the signed and absolute residual against measurement uncertainty | all named product, co-product and waste masses; stock change | process mass-balance residual | `eu-pef-recommendation-2021-2279` |
| `calc_refrigerant_loss` | each named refrigerant | substance loss = beginning inventory + purchases + charged mass - recovered mass - returned mass - ending inventory; use direct leak measurement when available | substance-specific inventory and service records | kg of one refrigerant emitted or otherwise lost | `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279` |
| `calc_combustion_emission` | each named combustion air emission | emission mass = each separately recorded fuel quantity multiplied by its disclosed factor, summed only for the same elementary flow | natural gas, diesel or LPG record; fuel properties; measurement or factor | kg of one specified air emission | `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279` |
| `calc_effluent_load` | each treated-effluent emission | discharged mass = matched concentration multiplied by measured discharge quantity with documented density and unit conversion | one parameter concentration; discharge quantity; sampling representativeness | kg of one specified water emission | `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279` |
| `calc_packaging_component` | each packaging input | component mass = issued count multiplied by measured empty unit mass minus returned unused mass; reusable items use a documented use share | count; unit mass; returns; reuse history | kg of one packaging component | `eu-pef-recommendation-2021-2279` |
| `calc_allocation_factor` | each multifunctional process | calculate each allocation factor from the declared physical or economic variable, verify all factors sum to one, and retain the unrounded fields | measured output quantities; causal variable or contemporaneous economic data | disclosed co-product allocation factors | `eu-pef-recommendation-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | live birds, carcasses, cuts and released product | Retain guinea-fowl species, supplier, lot, slaughter date, product form, bone and skin state, temperature state and genealogy from receipt to release. | receiving record; line genealogy; cut specification; release record |
| `dq_measurement_control` | mass, energy, water, refrigerant, chemical and waste records | Use calibrated or verified measurement systems and retain unit, conversion, calibration status and calculation flag for every value. | calibration certificate; meter register; approved conversion sheet; calculation workpaper |
| `dq_temporal_representativeness` | foreground dataset | Cover a representative continuous 12-month period for continuous operation or all lots in the declared campaign; disclose shutdowns, atypical lots and missing periods. | production calendar; completeness reconciliation; exception log |
| `dq_complete_lci` | all foreground processes | Include all known material and energy inputs and all products, co-products, wastes and air or water emissions, or document process evidence that one named row is not applicable. | signed inventory checklist; process mass balance; applicability record |
| `dq_atomic_exchange_identity` | every inventory card | Preserve one physical or chemical exchange per row; never substitute a collection label for a named carrier, refrigerant, chemical, package component, waste or emission. | row-level review; Tiangong lookup disposition; signed applicability checklist |
| `dq_cold_chain_state` | chilling, storage and release | Retain continuous or lot-representative temperature evidence showing the product was released fresh or chilled and was not frozen. | calibrated temperature log; alarm record; lot release |
| `dq_destination_and_allocation` | co-products and wastes | Retain destination, legal or commercial classification, quantity, allocation variable and linked treatment or receiving dataset for every material output. | dispatch or waste ticket; allocation workpaper; destination dataset |
| `dq_source_currency` | external classification and method rules | Confirm the applicable CPC version, JRC BREF and Environmental Footprint text before activation or publication. | source review record; applicability statement |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | reference product | Require exactly 1 kg net product, Tiangong product-flow UUID `8c683807-f79b-46a9-90e4-c005d506a98a`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, and unit kg. | `un-cpc-3-0-2025` |
| `validate_product_scope` | product identity | Require guinea-fowl identity and fresh or chilled state; reject frozen meat, fatty liver, separately sold edible offal, another bird species and prepared or preserved meat from the reference flow. | `un-cpc-3-0-2025` |
| `validate_process_route` | foreground route | Require receiving, slaughter and dressing, chilling, packaging, sanitation and release; require cutting only when performed and on-site wastewater treatment only when present. | `eu-jrc-sa-bref-2024` |
| `validate_mass_balance` | every material process | Reconcile input, product, co-product, waste and stock-change masses and investigate residuals outside the site's approved measurement uncertainty. | `eu-pef-recommendation-2021-2279` |
| `validate_atomic_flows` | process inventory | Require one concrete exchange per card; keep each carrier, refrigerant substance, chemical formulation, packaging component, co-product, waste and elementary emission separate. | `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279` |
| `validate_refrigerants` | refrigeration systems | Require a separate make-up and emission record for every refrigerant substance present; mark named substances not applicable only with equipment and service-log evidence. | `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279` |
| `validate_combustion_emissions` | on-site fuel use | For every used fuel, calculate or measure fossil carbon dioxide, nitrogen oxides, sulfur oxides and primary PM2.5 separately using disclosed foreground records and factors. | `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279` |
| `validate_wastewater` | wastewater and on-site treatment | Keep ordinary-load and high-organic-load wastewater separate and report sludge, screenings, recovered fat, COD, BOD5, total nitrogen, total phosphorus, suspended solids, animal fat, methane and nitrous oxide as individual rows when applicable. | `eu-jrc-sa-bref-2024`; `eu-pef-recommendation-2021-2279` |
| `validate_allocation` | saleable co-products | Confirm subdivision was attempted first, the selected allocation relationship is documented, factors sum to one, product and waste classifications follow destinations, and sensitivity is disclosed when material. | `eu-pef-recommendation-2021-2279` |
| `validate_data_quality` | foreground dataset | Require company-specific activity data for operated processes, a complete known LCI, product-specific material and packaging records, DQ evidence, transparent calculations and a verification-ready audit trail. | `eu-pef-recommendation-2021-2279` |
| `validate_uuid_resolution` | non-reference inventory flows | Leave every non-reference flow UUID absent until flow-hybrid-search and state-100 direct readback agree on the exact atomic identity; activation or publication requires resolution or an approved explicit exception. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground company-specific dataset suitable for reviewed publication as a secondary_dataset or background_dataset |
| downstream_use | Supports process and lifecyclemodel construction for guinea-fowl meat systems when the declared boundary, geography, technology, period and product state match |
| allowed_use | Gate-to-gate slaughter and processing studies; broader studies with explicit upstream and downstream links; internal improvement and reviewed Environmental Footprint modelling |
| excluded_use | Frozen guinea-fowl meat, fatty liver, separately sold edible offal, another species, prepared meat, retail, cooking or end-of-life modelling without additional datasets |
| required_metadata | CPC 21125; reference UUID; product form; bone and skin state; fresh or chilled temperature; live-bird origin; slaughter, cutting and refrigeration route; refrigerants; co-product destinations; allocation; packaging; wastewater destination; geography; technology; reference period |
| required_quality_disclosure | Primary-data coverage; scale and meter calibration; lot and mass-balance completeness; refrigerant reconciliation; direct-emission method; wastewater sampling; allocation factors; data gaps; proxies; DQ assessment and verification status |
| update_trigger | Change in species or product scope, slaughter or cutting technology, refrigeration substance, packaging, allocation, wastewater route, supplier mix, site, reference period, official classification or governing method |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | dataset | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025; official CSV https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv; retained raw artifact `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv`; retrieved 2026-06-23 | Exact CPC 21125 fresh-or-chilled guinea-fowl meat boundary and exclusion of frozen poultry meat and separately classified edible offal |
| `eu-jrc-sa-bref-2024` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, EUR 31752 EN, JRC135916, 2024; DOI 10.2760/18199; https://publications.jrc.ec.europa.eu/repository/handle/JRC135916; retrieved 2026-08-13 | Slaughterhouse scope, poultry clean-carcass endpoint, receiving, slaughter and dressing, chilling, cleaning, utilities, animal co-products, wastes, wastewater and emissions |
| `eu-pef-recommendation-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated text 30 December 2021, CELEX 02021H2279-20211230; https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:02021H2279-20211230; retrieved 2026-08-13 | Company-specific data, product-specific bill of materials, complete life-cycle inventory, allocation hierarchy, transparency, data quality and verification |
