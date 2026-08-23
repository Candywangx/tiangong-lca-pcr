---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.prepared-dishes-and-meals-based-on-vegetables-pulses-and-potatoes
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Prepared dishes and meals based on vegetables, pulses and potatoes

## 1. Scope and Applicability

This PCR applies to factory-prepared, seasoned and cooked dishes or complete meals in which vegetables, pulses, or potatoes are the main ingredients. It covers ambient-stable, chilled, and frozen market states and requires the exact recipe, preservation route, packaging configuration, and storage condition to be declared. The foreground boundary begins with accepted ingredients and packaging at the manufacturing-site receiving gate and ends with the net prepared meal, in its saleable package, at the manufacturing-site gate.

The PCR excludes dishes primarily based on meat, fish, molluscs, crustaceans, cereals, couscous, stuffed pasta, or pizza; single-ingredient vegetables or potatoes that are merely preserved; restaurant or household meal preparation; and agricultural production except through required upstream datasets. A recipe may contain minor cereal, dairy, egg, or other ingredients only when vegetables, pulses, or potatoes remain the defining basis; each actual ingredient must then be represented by its own atomic inventory row.

The inventory below uses a representative potato–chickpea vegetable meal to make atomic exchanges explicit. A data producer shall replace or extend the ingredient cards with one card per actual recipe ingredient without merging ingredients into a collection row.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.prepared-dishes-and-meals-based-on-vegetables-pulses-and-potatoes |
| classification_refs | CPC 3.0: 21391, exact mapping context |
| covered_products | Ready-made, seasoned and cooked dishes or meals with vegetables, pulses, or potatoes as main ingredients; ambient-stable, chilled, or frozen |
| excluded_products | Meat-, fish-, cereal-, couscous-, stuffed-pasta-, or pizza-based meals; merely preserved single ingredients; food-service and household preparation |
| representative_product | Packaged potato–chickpea vegetable meal |
| production_route | Ingredient receiving; washing, sorting, peeling/cutting and pulse hydration as applicable; formulation and cooking; filling and sealing; thermal preservation and/or chilling/freezing; on-site storage |
| market_state | Declared as ambient-stable, chilled, or frozen at the manufacturing-site gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply a prepared, seasoned and cooked vegetable-, pulse-, or potato-based dish or meal for consumption after the declared final preparation |
| How much | 1,000 kg net prepared meal, excluding packaging, at the manufacturing-site gate |
| How well | Meets the declared recipe, ingredient predominance, food-safety controls, preservation route, packaging integrity, storage condition, and applicable product specification |
| How long or cycle | One production reporting period; shelf life is a required product qualifier rather than an extension of the reference amount |
| reference_flow_link | `reference_product_flow` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net prepared meal |
| Reference product flow | Prepared vegetable-, pulse-, or potato-based dish or meal |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual recipe and ingredient mass fractions; dominant ingredient basis; ambient/chilled/frozen market state; ready-to-eat or reheating status; preservation route; net mass and packaging exclusion; manufacturing geography and technology; storage temperature; declared shelf life; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1,000 kg of net edible prepared meal at the manufacturing-site gate; exclude all packaging mass from the reference amount. |
| `ingredient_mass` | every recipe ingredient | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each ingredient separately on an as-received mass basis and retain moisture or solids content when it materially changes comparability. |
| `utility_energy` | electricity, steam, purchased heat, and fuels | Energy or fuel-specific mass/volume | kWh, MJ, kg, or m3 | Preserve measured billing or meter units, identify lower or higher heating value where fuel energy is converted, and normalize only after unit conversion is documented. |
| `water_mass_volume` | process and sanitation water | Mass or volume | kg or m3 | Distinguish recipe water, preparation water, and sanitation water; document density assumptions when converting volume to mass. |
| `packaging_mass` | each packaging component | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure each primary, secondary, and tertiary packaging material separately; do not include packaging in the net-product reference amount. |
| `emission_load` | direct air and water emissions | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Calculate a pollutant load from measured concentration and measured flow over the same period, or use a documented direct mass measurement. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted food ingredients, processing aids, cleaning chemicals, packaging components, and utilities at the manufacturing-site receiving gate |
| starting_condition_role | Foreground manufacturing entry condition |
| product_classification_scope | Prepared dishes and meals whose defining main ingredients are vegetables, pulses, or potatoes |
| recursive_input_rule | A purchased prepared ingredient already within this product category is recorded once as a specific product input with an upstream dataset; do not reopen its internal preparation inside this foreground system. |
| upstream_dataset_requirement | Each purchased ingredient, packaging component, electricity supply, fuel, refrigerant, chemical, and treatment service requires a geographically and technologically representative upstream dataset. |
| disclosure | Declare ingredient origin and state, recipe, preparation and preservation route, shared-equipment treatment, packaging configuration, cold-chain condition at the gate, waste treatment destination, exclusions, and any recursive same-category input. |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground manufacturing | Include ingredient preparation, formulation/cooking, filling/sealing, applicable preservation and on-site cold storage, sanitation, on-site waste handling, and direct emissions from the manufacturing site. | `rasines-et-al-2024-precooked-vegetables`; `schmidt-rivera-et-al-2014-convenience-food` |
| `boundary_rule_2` | upstream and downstream stages | Exclude agriculture, ingredient manufacture, packaging manufacture, distribution beyond the site gate, consumer storage/preparation, and end of life from foreground collection, but link representative background datasets when the study boundary includes them. | `ec-pef-2021-2279` |
| `boundary_rule_3` | route-specific operations | Include pulse hydration, blanching, retorting/pasteurisation, chilling, freezing, and wastewater treatment only when used; mark each absent atomic exchange or process as not applicable and retain the route declaration. | `rasines-et-al-2024-precooked-vegetables`; `codex-cxc-1-1969` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ingredient_preparation` | Ingredient receiving and preparation | required | All products | Foreground ingredient acceptance, washing, sorting, peeling, cutting, and pulse hydration where used | kg accepted or prepared ingredient |
| `formulation_cooking` | Formulation and cooking | required | All products | Foreground recipe dosing, mixing, cooking, and bulk-meal production | kg bulk cooked meal |
| `filling_packaging` | Filling, sealing, and packing | required | All products | Foreground primary, secondary, and tertiary packaging | kg packaged meal |
| `preservation_storage` | Preservation and on-site storage | required | Route-specific preservation and declared market state | Foreground heat treatment, cooling/freezing, and site storage | kg saleable meal at site gate |
| `sanitation_wastewater` | Sanitation, waste, and wastewater management | required | All products; treatment outputs depend on site route | Foreground cleaning, waste segregation, and on-site wastewater treatment or discharge | production-period records normalized to reference flow |

### Process: Ingredient receiving and preparation (`ingredient_preparation`)

#### Inputs

##### Product flows

###### Raw potatoes (`raw_potato`)

Raw potatoes enter preparation as a separately weighed recipe ingredient.

- Selected flow: Potato, raw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net accepted mass from receiving and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `un-cpc-3-0`; `rasines-et-al-2024-precooked-vegetables`

###### Raw carrots (`raw_carrot`)

Raw carrots enter preparation as a separately weighed recipe ingredient.

- Selected flow: Carrot, raw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net accepted mass from receiving and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `rasines-et-al-2024-precooked-vegetables`

###### Raw onions (`raw_onion`)

Raw onions enter preparation as a separately weighed recipe ingredient.

- Selected flow: Onion, raw
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net accepted mass from receiving and batch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `rasines-et-al-2024-precooked-vegetables`

###### Dry chickpeas (`dry_chickpea`)

Dry chickpeas enter the representative pulse hydration route as a separately weighed ingredient.

- Selected flow: Chickpea, dry
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net accepted dry mass from receiving and batch records; not applicable when no chickpea is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `un-cpc-3-0`

###### Preparation water (`preparation_water`)

Water used for washing, peeling assistance, and pulse hydration is metered separately from recipe and sanitation water.

- Selected flow: Water, process
- Flow property / unit: Volume / m3
- Amount rule: Process-area water meter less separately metered sanitation water
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-fdm-bat-2019`; `rasines-et-al-2024-precooked-vegetables`

###### Preparation electricity (`preparation_electricity`)

Electricity powers sorting, cutting, peeling, pumping, and preparation equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered preparation electricity or documented allocation from a shared meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-fdm-bat-2019`; `rasines-et-al-2024-precooked-vegetables`

###### Sodium hypochlorite for produce disinfection (`sodium_hypochlorite`)

Sodium hypochlorite is recorded only when used to disinfect incoming produce.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Active-product mass issued to the preparation line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `rasines-et-al-2024-precooked-vegetables`; `codex-cxc-1-1969`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared potato (`prepared_potato`)

Washed, peeled as applicable, and cut potato leaves preparation for cooking.

- Selected flow: Potato, prepared for cooking
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured transfer mass or input mass less separately measured potato losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared potato output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_mass_balance`
- Sources: `rasines-et-al-2024-precooked-vegetables`

###### Prepared carrot (`prepared_carrot`)

Washed and cut carrot leaves preparation for cooking.

- Selected flow: Carrot, prepared for cooking
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured transfer mass or input mass less separately measured carrot losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared carrot output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_mass_balance`
- Sources: `rasines-et-al-2024-precooked-vegetables`

###### Prepared onion (`prepared_onion`)

Peeled and cut onion leaves preparation for cooking.

- Selected flow: Onion, prepared for cooking
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured transfer mass or input mass less separately measured onion losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared onion output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_mass_balance`
- Sources: `rasines-et-al-2024-precooked-vegetables`

###### Hydrated chickpeas (`hydrated_chickpea`)

Hydrated chickpeas leave preparation for cooking when the dry-pulse route is used.

- Selected flow: Chickpea, hydrated
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured drained mass after hydration; not applicable for pre-cooked or absent chickpeas
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg hydrated chickpea output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_mass_balance`
- Sources: `un-cpc-3-0`

##### Waste flows

###### Potato peel waste (`potato_peel_waste`)

Potato peel removed on site is weighed as a distinct biodegradable waste stream.

- Selected flow: Potato peel waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured mass sent to the declared treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-fdm-bat-2019`; `rasines-et-al-2024-precooked-vegetables`

###### Rejected vegetable matter (`rejected_vegetable_waste`)

Rejected edible and inedible vegetable matter other than potato peel is kept separate from other solid waste.

- Selected flow: Rejected vegetable matter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured mass by destination and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-fdm-bat-2019`; `rasines-et-al-2024-precooked-vegetables`

###### Preparation wastewater (`preparation_wastewater`)

Wastewater from washing and preparation is measured before mixing with other site wastewater where practicable.

- Selected flow: Wastewater from vegetable preparation
- Flow property / unit: Volume / m3
- Amount rule: Measured or water-balance-derived volume sent to on-site or off-site treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-fdm-bat-2019`; `rasines-et-al-2024-precooked-vegetables`

##### Elementary flows

### Process: Formulation and cooking (`formulation_cooking`)

#### Inputs

##### Product flows

###### Prepared potato input (`prepared_potato_input`)

Prepared potato is transferred into recipe formulation.

- Selected flow: Potato, prepared for cooking
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch dose
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_batch`
- Sources: `rasines-et-al-2024-precooked-vegetables`

###### Prepared carrot input (`prepared_carrot_input`)

Prepared carrot is transferred into recipe formulation.

- Selected flow: Carrot, prepared for cooking
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch dose
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_batch`
- Sources: `rasines-et-al-2024-precooked-vegetables`

###### Prepared onion input (`prepared_onion_input`)

Prepared onion is transferred into recipe formulation.

- Selected flow: Onion, prepared for cooking
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch dose
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_batch`
- Sources: `rasines-et-al-2024-precooked-vegetables`

###### Hydrated chickpea input (`hydrated_chickpea_input`)

Hydrated chickpeas are dosed separately into the representative recipe.

- Selected flow: Chickpea, hydrated
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch dose; not applicable when no chickpea is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_batch`
- Sources: `un-cpc-3-0`

###### Tomato puree (`tomato_puree`)

Tomato puree is a separately weighed sauce ingredient.

- Selected flow: Tomato puree
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch dose
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_batch`
- Sources: `schmidt-rivera-et-al-2014-convenience-food`

###### Sunflower oil (`sunflower_oil`)

Sunflower oil is a separately weighed recipe ingredient.

- Selected flow: Sunflower oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch dose
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_batch`
- Sources: `schmidt-rivera-et-al-2014-convenience-food`

###### Salt (`salt`)

Salt is a separately weighed recipe ingredient.

- Selected flow: Sodium chloride
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured batch dose
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_batch`
- Sources: `schmidt-rivera-et-al-2014-convenience-food`

###### Recipe water (`recipe_water`)

Water incorporated into the meal is recorded separately from preparation and sanitation water.

- Selected flow: Water, potable
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Metered or batch-dosed mass incorporated into product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_batch`
- Sources: `schmidt-rivera-et-al-2014-convenience-food`

###### Cooking electricity (`cooking_electricity`)

Electricity used by mixers, pumps, electric cooking equipment, and controls is submetered.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered formulation and cooking electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-fdm-bat-2019`; `schmidt-rivera-et-al-2014-convenience-food`

###### Cooking steam (`cooking_steam`)

Purchased or site-generated steam delivered to cooking equipment is recorded as steam.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Steam-meter reading or mass and enthalpy calculation for the cooking line
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-fdm-bat-2019`; `schmidt-rivera-et-al-2014-convenience-food`

###### Purchased heat (`purchased_heat`)

Purchased hot water or district heat is recorded separately when it crosses the site boundary.

- Selected flow: Heat, district or industrial
- Flow property / unit: Energy / MJ
- Amount rule: Supplier meter or invoice attributable to cooking; not applicable when no heat is purchased
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-fdm-bat-2019`

###### Natural gas (`natural_gas`)

Natural gas combusted on site for boilers or direct heating is recorded separately.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Fuel meter reading attributable to this product and reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-fdm-bat-2019`

###### Liquefied petroleum gas (`liquefied_petroleum_gas`)

Liquefied petroleum gas is recorded only for equipment that consumes it.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Tank issue or invoice attributable to this product; not applicable when unused
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-fdm-bat-2019`

###### Light fuel oil (`light_fuel_oil`)

Light fuel oil is recorded separately for boilers or backup thermal equipment that consumes it.

- Selected flow: Light fuel oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Tank issue or invoice attributable to this product; not applicable when unused
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `schmidt-rivera-et-al-2014-convenience-food`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bulk cooked meal (`bulk_cooked_meal`)

The cooked, formulated meal leaves the cooker before primary packaging.

- Selected flow: Prepared vegetable and chickpea meal, bulk
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured bulk cooked output corrected for returned or held material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bulk cooked meal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `rasines-et-al-2024-precooked-vegetables`; `schmidt-rivera-et-al-2014-convenience-food`

##### Waste flows

###### Off-specification cooked food (`offspec_cooked_food`)

Cooked material rejected before packaging is weighed separately from preparation residues.

- Selected flow: Off-specification cooked food
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-fdm-bat-2019`; `schmidt-rivera-et-al-2014-convenience-food`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_carbon_dioxide`)

Fossil carbon dioxide from on-site combustion is reported as a direct air emission.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured stack mass or fuel-specific calculation from collected fuel records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-fdm-bat-2019`

###### Carbon monoxide to air (`carbon_monoxide`)

Carbon monoxide from on-site combustion is reported separately.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured stack load over the production period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-fdm-bat-2019`

###### Nitrogen oxides to air (`nitrogen_oxides`)

Nitrogen oxides from on-site combustion are reported as NOx on the facility's declared measurement basis.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured stack load over the production period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-fdm-bat-2019`

###### Sulfur dioxide to air (`sulfur_dioxide`)

Sulfur dioxide is reported separately when sulfur-containing fuel is combusted on site.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured stack load or sulfur mass-balance calculation; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-fdm-bat-2019`

###### Particulate matter to air (`particulate_matter`)

Particulate matter from a channelled combustion source is reported separately when present.

- Selected flow: Particulate matter, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured stack load over the production period; not applicable without a channelled particulate source
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `eu-fdm-bat-2019`

### Process: Filling, sealing, and packing (`filling_packaging`)

#### Inputs

##### Product flows

###### Bulk cooked meal input (`bulk_cooked_meal_input`)

Bulk cooked meal is transferred to filling equipment.

- Selected flow: Prepared vegetable and chickpea meal, bulk
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured filler feed mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `rasines-et-al-2024-precooked-vegetables`

###### Polyethylene terephthalate tray (`pet_tray`)

Each PET primary tray is recorded by material mass.

- Selected flow: Polyethylene terephthalate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Purchased mass issued to the product minus verified unused returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `schmidt-rivera-et-al-2014-convenience-food`

###### Polyethylene lidding film (`polyethylene_lidding_film`)

Polyethylene lidding film is recorded separately from the rigid tray.

- Selected flow: Polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Roll consumption attributable to saleable and rejected packages
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `schmidt-rivera-et-al-2014-convenience-food`

###### Paper label (`paper_label`)

Paper labels are recorded as a separate primary-packaging component.

- Selected flow: Paper label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count multiplied by measured unit mass, including rejected labels
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `rasines-et-al-2024-precooked-vegetables`

###### Corrugated carton (`corrugated_carton`)

Corrugated cartons used for distribution packing are recorded separately.

- Selected flow: Corrugated board box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Carton count multiplied by verified unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `rasines-et-al-2024-precooked-vegetables`; `schmidt-rivera-et-al-2014-convenience-food`

###### Wooden pallet (`wooden_pallet`)

One-way pallet mass or the attributable loss of reusable pallets is recorded.

- Selected flow: Wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: One-way pallet mass plus measured replacement mass of reusable pallets
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `schmidt-rivera-et-al-2014-convenience-food`

###### Stretch film (`stretch_film`)

Pallet stretch film is recorded separately from primary lidding film.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Roll consumption attributable to palletised product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `rasines-et-al-2024-precooked-vegetables`

###### Packaging electricity (`packaging_electricity`)

Electricity for filling, sealing, labelling, conveying, and pallet wrapping is recorded.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Packaging-line submeter or documented shared-meter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-fdm-bat-2019`; `rasines-et-al-2024-precooked-vegetables`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged prepared meal (`packaged_meal`)

Sealed meal units leave the packaging line before final preservation or storage.

- Selected flow: Packaged prepared vegetable and chickpea meal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net food mass of accepted sealed units; packaging mass retained separately
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged-meal net content
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_output`
- Sources: `rasines-et-al-2024-precooked-vegetables`

##### Waste flows

###### PET packaging scrap (`pet_packaging_scrap`)

Rejected PET trays and trim are weighed separately by destination.

- Selected flow: Waste polyethylene terephthalate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured scrap mass by recycling or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `rasines-et-al-2024-precooked-vegetables`

###### Polyethylene packaging scrap (`polyethylene_packaging_scrap`)

Rejected lidding and stretch film are weighed separately from rigid plastics.

- Selected flow: Waste polyethylene
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured scrap mass by recycling or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `rasines-et-al-2024-precooked-vegetables`

###### Paperboard packaging scrap (`paperboard_packaging_scrap`)

Rejected cartons and labels are weighed as a fibre-packaging waste stream.

- Selected flow: Waste paperboard
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured scrap mass by recycling or disposal route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `rasines-et-al-2024-precooked-vegetables`

##### Elementary flows

### Process: Preservation and on-site storage (`preservation_storage`)

#### Inputs

##### Product flows

###### Packaged meal input (`packaged_meal_input`)

Accepted sealed meal units enter the declared preservation and storage route.

- Selected flow: Packaged prepared vegetable and chickpea meal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net food mass entering preservation and storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `rasines-et-al-2024-precooked-vegetables`

###### Cold-storage electricity (`cold_storage_electricity`)

Electricity for cooling, freezing, and on-site temperature-controlled storage is separately recorded.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered energy allocated by measured occupancy, mass, and storage time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_storage`
- Sources: `schmidt-rivera-et-al-2014-convenience-food`; `rasines-et-al-2024-precooked-vegetables`

###### Ammonia refrigerant (`ammonia_refrigerant`)

Ammonia charged to refrigeration equipment is recorded separately when used.

- Selected flow: Ammonia
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Purchases plus opening inventory minus closing inventory, recovered quantity, and transfers; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-fdm-bat-2019`; `schmidt-rivera-et-al-2014-convenience-food`

###### Carbon dioxide refrigerant (`carbon_dioxide_refrigerant`)

Carbon dioxide charged to refrigeration equipment is recorded separately when used.

- Selected flow: Carbon dioxide, refrigerant grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Purchases plus opening inventory minus closing inventory, recovered quantity, and transfers; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-fdm-bat-2019`

###### R134a refrigerant (`r134a_refrigerant`)

R134a is recorded separately only where legacy or existing equipment uses it.

- Selected flow: 1,1,1,2-Tetrafluoroethane
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Purchases plus opening inventory minus closing inventory, recovered quantity, and transfers; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `schmidt-rivera-et-al-2014-convenience-food`; `eu-fdm-bat-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Final prepared meal (`final_prepared_meal`)

The saleable meal leaves the site in the declared ambient, chilled, or frozen state.

- Selected flow: Prepared vegetable-, pulse-, or potato-based dish or meal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net mass of saleable product released at the manufacturing-site gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_output`
- Sources: `un-cpc-3-0`; `rasines-et-al-2024-precooked-vegetables`

##### Waste flows

###### Off-specification packaged meal (`offspec_packaged_meal`)

Packaged units rejected after preservation or storage are weighed with packaging and food portions distinguishable in records.

- Selected flow: Off-specification packaged prepared meal
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured rejected net food mass; packaging is reported in its material-specific scrap row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `schmidt-rivera-et-al-2014-convenience-food`

##### Elementary flows

###### Ammonia to air (`ammonia_to_air`)

Ammonia lost from the refrigeration system is reported as a direct air emission.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Refrigerant mass-balance loss assigned to the product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `schmidt-rivera-et-al-2014-convenience-food`

###### Refrigerant carbon dioxide to air (`carbon_dioxide_refrigerant_to_air`)

Refrigerant-grade carbon dioxide lost from the refrigeration system is reported separately.

- Selected flow: Carbon dioxide, refrigerant, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Refrigerant mass-balance loss assigned to the product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-fdm-bat-2019`

###### R134a to air (`r134a_to_air`)

R134a lost from existing refrigeration equipment is reported as a distinct direct air emission.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Refrigerant mass-balance loss assigned to the product; not applicable when no R134a is used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `schmidt-rivera-et-al-2014-convenience-food`; `eu-fdm-bat-2019`

### Process: Sanitation, waste, and wastewater management (`sanitation_wastewater`)

#### Inputs

##### Product flows

###### Sanitation water (`sanitation_water`)

Water used for equipment and area cleaning is metered separately from preparation and recipe water.

- Selected flow: Water, process
- Flow property / unit: Volume / m3
- Amount rule: Sanitation submeter or documented water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `eu-fdm-bat-2019`; `codex-cxc-1-1969`

###### Sanitation electricity (`sanitation_electricity`)

Electricity for cleaning-in-place pumps and on-site wastewater treatment is separately recorded.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sanitation and treatment submeter or documented shared-meter allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-fdm-bat-2019`

###### Sodium hydroxide cleaner (`sodium_hydroxide`)

Sodium hydroxide used for alkaline cleaning is recorded as one chemical.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Product mass issued, with concentration retained in records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-fdm-bat-2019`; `codex-cxc-1-1969`

###### Nitric acid cleaner (`nitric_acid`)

Nitric acid used for acid cleaning is recorded separately from alkaline cleaner.

- Selected flow: Nitric acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Product mass issued, with concentration retained in records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-fdm-bat-2019`; `codex-cxc-1-1969`

###### Peracetic acid disinfectant (`peracetic_acid`)

Peracetic acid used for equipment disinfection is recorded as one chemical.

- Selected flow: Peracetic acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Product mass issued, with active concentration retained in records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-fdm-bat-2019`; `codex-cxc-1-1969`

###### Sodium hypochlorite for sanitation (`sanitation_sodium_hypochlorite`)

Sodium hypochlorite used in sanitation is recorded separately from produce-disinfection use.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Product mass issued to sanitation, with active concentration retained in records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_records`
- Sources: `eu-fdm-bat-2019`; `codex-cxc-1-1969`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Factory wastewater (`factory_wastewater`)

Combined factory wastewater sent to off-site treatment is reported as a waste flow; direct discharge pollutants are reported separately below.

- Selected flow: Wastewater from food manufacturing
- Flow property / unit: Volume / m3
- Amount rule: Calibrated discharge meter over the production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `eu-fdm-bat-2019`

###### Wastewater-treatment sludge (`wastewater_sludge`)

Sludge leaving on-site wastewater treatment is weighed by treatment destination.

- Selected flow: Sludge from food-industry wastewater treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Wet mass and dry-solids fraction measured for each dispatch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-fdm-bat-2019`

###### Mixed solid waste (`mixed_solid_waste`)

Non-hazardous mixed solid waste not represented by a more specific food or packaging row is weighed separately.

- Selected flow: Mixed municipal solid waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured mass by disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-fdm-bat-2019`

###### Food-processing residue (`food_processing_residue`)

Source-separated biodegradable food residue sent to animal feed, anaerobic digestion, composting, or another declared route is recorded separately.

- Selected flow: Food-processing residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured dispatched mass by destination and legal status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-fdm-bat-2019`; `rasines-et-al-2024-precooked-vegetables`

##### Elementary flows

###### Chemical oxygen demand to water (`cod_to_water`)

COD is reported as a distinct direct water-emission load when treated effluent leaves the site to a receiving water body.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Flow-proportional concentration multiplied by matched discharge volume; not applicable for wholly off-site treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `eu-fdm-bat-2019`

###### Biochemical oxygen demand to water (`bod_to_water`)

BOD is reported separately from COD for direct discharge where monitored.

- Selected flow: Biochemical oxygen demand, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Flow-proportional concentration multiplied by matched discharge volume; not applicable for wholly off-site treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `eu-fdm-bat-2019`

###### Total nitrogen to water (`total_nitrogen_to_water`)

Total nitrogen is reported as its own direct water-emission load.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Flow-proportional concentration multiplied by matched discharge volume; not applicable for wholly off-site treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `eu-fdm-bat-2019`

###### Total phosphorus to water (`total_phosphorus_to_water`)

Total phosphorus is reported as its own direct water-emission load.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Flow-proportional concentration multiplied by matched discharge volume; not applicable for wholly off-site treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `eu-fdm-bat-2019`

###### Suspended solids to water (`suspended_solids_to_water`)

Total suspended solids are reported as a distinct direct water-emission load.

- Selected flow: Suspended solids, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Flow-proportional concentration multiplied by matched discharge volume; not applicable for wholly off-site treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `eu-fdm-bat-2019`

###### Chloride to water (`chloride_to_water`)

Chloride is reported separately where relevant to direct discharge.

- Selected flow: Chloride, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Flow-proportional concentration multiplied by matched discharge volume; not applicable for wholly off-site treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net prepared meal
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `eu-fdm-bat-2019`

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | shared processes and equipment | Avoid allocation by submetering, batch records, or subdivision wherever the product-specific inputs and outputs can be isolated. | `ec-pef-2021-2279`; `eu-fdm-bat-2019` |
| `allocation_rule_2` | shared utilities and storage | When subdivision is not possible, allocate a shared utility using a causally relevant physical driver such as measured equipment time and power, steam duty, occupied refrigerated volume-mass-time, or treated wastewater load; document the driver and reconciliation to the facility total. | `ec-pef-2021-2279`; `schmidt-rivera-et-al-2014-convenience-food` |
| `allocation_rule_3` | shared mass-handling operations | Use mass allocation only when mass throughput is a demonstrably relevant physical relationship; do not apply it automatically to heating, cooling, or treatment operations with materially different intensities. | `ec-pef-2021-2279`; `rasines-et-al-2024-precooked-vegetables` |
| `allocation_rule_4` | food residues and recovered materials | First determine and disclose whether each output is waste or a co-product under the applicable jurisdiction. For a co-product, follow subdivision or system expansion before physical allocation; any substitution credit belongs only to the declared expanded-system study and shall not be silently embedded in a gate-to-gate dataset. | `ec-pef-2021-2279`; `eu-fdm-bat-2019` |
| `allocation_rule_5` | economic allocation | Use economic allocation only when subdivision, system expansion, and a relevant physical relationship are not feasible; use contemporaneous net values, disclose the period and sensitivity, and keep the unallocated facility totals. | `ec-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ingredient_mass` | `ingredient_preparation` | individual received ingredient | receiving and batch record | ingredient identity, supplier lot, gross mass, tare, accepted mass, moisture/solids where relevant | calibrated receiving scale reconciled to batch issue | kg | each lot and batch | representative production period, normally at least 12 consecutive months | each manufacturing site | sum accepted mass by ingredient and product, then normalize | calibration, lot traceability, recipe reconciliation |
| `cp_preparation_mass_balance` | `ingredient_preparation` | prepared ingredient and preparation loss | batch mass balance | input mass, prepared transfer mass, peel, reject, retained work-in-process | calibrated line scales and inventory reconciliation | kg | each batch | same period as reference-product output | each preparation line | input equals transfers plus measured losses and inventory change | scale calibration, signed batch record, closure result |
| `cp_recipe_batch` | `formulation_cooking` | individual recipe ingredient | recipe and dosing record | recipe version, ingredient id, dose, returned amount, batch output | calibrated dosing equipment or verified manual weigh sheet | kg | each batch | same period as reference-product output | each cooking line | sum net doses by ingredient and recipe version | recipe authorization, calibration, batch traceability |
| `cp_energy_records` | all | electricity, steam, and purchased heat | meter, invoice, and operating log | meter ids, opening/closing readings, steam mass/pressure, heat quantity, operating time, product throughput | calibrated submeter preferred; documented physical allocation otherwise | kWh, MJ, kg steam | continuous or each billing interval | full reporting period | site and relevant line | reconcile process totals to site purchase/generation and normalize | meter calibration, invoices, reconciliation |
| `cp_fuel_records` | `formulation_cooking` | each on-site fuel | tank, meter, and invoice record | fuel identity, quantity, density, heating-value basis, opening/closing inventory, equipment | calibrated meter or inventory balance | kg or m3 | each delivery and reporting interval | full reporting period | each combustion unit | reconcile receipts, inventory change, and consumption by unit | invoices, tank calibration, fuel certificate |
| `cp_water_balance` | `ingredient_preparation`; `sanitation_wastewater` | preparation, recipe, sanitation, and discharge water | meter and water-balance record | meter ids, readings, recipe addition, discharge, evaporation estimate, product water, losses | calibrated submeters and site water balance | m3 and kg | continuous or daily | full reporting period | each water-use area and discharge point | reconcile intake with product, discharge, evaporation, and inventory change | meter calibration, balance closure, maintenance log |
| `cp_packaging_records` | `filling_packaging` | each packaging component | purchase, issue, count, and scrap record | material, specification, unit mass, issued count/mass, unused returns, scrap | verified bill of materials plus line issue and scrap weights | kg | each production order | full reporting period | each packaging line | issued minus return equals saleable packaging plus scrap | supplier specification, unit-mass check, reconciliation |
| `cp_product_output` | all | intermediate and final product | production and release record | batch id, gross/net mass, packaging tare, hold/rework/reject, market state | calibrated checkweigher and release records | kg | each batch | full reporting period | each line and site | sum released net mass; exclude packaging and unresolved holds | checkweigher calibration, release authorization, mass balance |
| `cp_waste_records` | all | each solid or liquid waste stream | container weight and transfer note | waste identity, legal status, wet mass, dry solids where relevant, destination, treatment | calibrated weighbridge/scale and transfer documentation | kg or m3 | each dispatch | full reporting period | each site | sum by atomic waste identity and destination; no netting with credits | transfer note, scale ticket, destination evidence |
| `cp_chemical_records` | `ingredient_preparation`; `sanitation_wastewater` | each processing or cleaning chemical | issue and concentration record | chemical identity, product mass, active concentration, return/reuse, process area | inventory issue records and dosing-system totalizer | kg | each batch or cleaning cycle | full reporting period | each dosing system | calculate active and formulated product amounts without merging chemicals | safety data sheet, concentration certificate, dosing calibration |
| `cp_cold_storage` | `preservation_storage` | storage electricity | submeter and occupancy log | electricity, product mass, occupied volume, entry/exit time, temperature, route | calibrated meter linked to warehouse management records | kWh, kg, h | continuous | full reporting period including seasonal variation | each cold room or freezer | allocate by a justified mass-volume-time driver and reconcile to meter | meter calibration, temperature log, occupancy record |
| `cp_refrigerant_balance` | `preservation_storage` | each refrigerant and direct leak | refrigerant inventory and service record | refrigerant identity, opening stock, purchases, additions, recovery, transfer, closing stock, equipment | annual equipment-level mass balance supported by service records | kg | each service event and annual close | full reporting period | each refrigeration system | calculate loss separately for ammonia, carbon dioxide, and R134a; allocate with documented storage driver | technician record, cylinder weights, inventory reconciliation |
| `cp_air_emissions` | `formulation_cooking` | each direct combustion emission | stack measurement and fuel record | source, operating hours, gas flow, pollutant concentration, oxygen/reference conditions, fuel use | representative stack test or continuous monitoring; matched-period load calculation | kg | permit or risk-based frequency and each material change | representative operation within reporting period | each emission source | concentration times matched flow and time, then reconcile to fuel operation | laboratory accreditation, instrument calibration, sampling report |
| `cp_wastewater_monitoring` | `sanitation_wastewater` | wastewater volume and each direct pollutant | flow meter and laboratory result | volume, sampling time, pH, temperature, COD, BOD, TN, TP, TSS, chloride, treatment route | flow-proportional composite sampling where applicable and matched discharge metering | m3, mg/L, kg | site permit or BAT frequency and each material change | full reporting period with representative sampling | each final discharge point | concentration times matched volume; report off-site wastewater as waste, not direct emission | accredited analysis, meter calibration, chain of custody |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | every inventory row | normalized amount = reporting-period row amount / released net product mass × 1,000 kg | atomic row total; released net product mass | amount per 1,000 kg net prepared meal | `ec-pef-2021-2279` |
| `calc_mass_balance` | ingredient preparation, cooking, and packaging | input mass + opening work-in-process = output mass + separately identified waste + closing work-in-process; investigate material imbalance before release | calibrated batch and inventory records | reconciled process mass balance | `eu-fdm-bat-2019` |
| `calc_energy_allocation` | shared energy | product energy = shared-meter energy × documented causal driver share; sum of all shares must equal the shared-meter total | meter total; equipment time/power, thermal duty, or storage driver | product-attributed energy | `ec-pef-2021-2279` |
| `calc_refrigerant_loss` | each refrigerant | loss = opening inventory + purchases + additions received − closing inventory − recovered quantity − transfers out; negative or unexplained results require correction | equipment-level refrigerant records | direct loss by refrigerant | `eu-fdm-bat-2019` |
| `calc_emission_load` | each direct air or water pollutant | load = representative concentration × matched flow integrated over the same operating or discharge period, with documented unit conversion | concentration, flow, duration, reference conditions | pollutant mass | `eu-fdm-bat-2019` |
| `calc_packaging_balance` | each packaging component | purchased/issued mass − unused returns = mass on saleable packages + separately measured scrap + inventory change | component issue, return, product count, unit mass, scrap | component mass and scrap | `rasines-et-al-2024-precooked-vegetables` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and every atomic flow | Preserve recipe version, supplier or equipment identity, physical state, market state, treatment destination, and any Tiangong UUID once resolved. | recipe, specification, lot records, service and transfer documents |
| `dq_temporal` | all foreground records | Use one common representative reporting period, normally at least 12 consecutive months; explain shorter campaigns and cover seasonal or preservation-route variation. | date-bounded extracts and production calendar |
| `dq_completeness` | all processes | Reconcile ingredient, water, energy, packaging, product, waste, and emission totals to facility control totals; disclose exclusions and unclosed balances. | signed reconciliation and variance investigation |
| `dq_measurement` | meters, scales, and analyses | Use calibrated instruments and accredited or otherwise demonstrated fit-for-purpose laboratory methods; retain detection limits and reference conditions. | calibration certificates, laboratory scope, sampling reports |
| `dq_technology` | cooking, preservation, refrigeration, and treatment | Record equipment type, fuel, heat source, preservation temperature/time control, refrigerant, storage temperature, and wastewater route. | equipment register, HACCP records, operating logs |
| `dq_supplier_background` | purchased inputs and services | Select background datasets matching ingredient origin, technology, electricity geography, fuel, packaging resin/fibre, refrigerant, and waste destination; record every proxy. | dataset selection log and supplier evidence |
| `dq_no_unsupported_ranges` | all important flows | Do not publish a quantitative range until at least two independent, boundary-, unit-, and basis-compatible original sources have been verified, unless a controlling specification prescribes the interval. | range-evidence review or unresolved-range entry |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | PCR identity and reference flow | Reject a data package if the product is not primarily vegetable-, pulse-, or potato-based, if its market/preservation state is undeclared, or if the reference amount includes packaging. | `un-cpc-3-0` |
| `validation_rule_2` | recipe and inventory atomicity | Require the recipe ingredient sum, each utility, each fuel, each refrigerant, each packaging component, each waste, and each direct emission to have a separate row; reject collection labels and combined carriers. | `eu-fdm-bat-2019` |
| `validation_rule_3` | process completeness | Require every applicable preparation, cooking, packaging, preservation/storage, sanitation, waste, and treatment process to have inputs and outputs; require an explicit not-applicable statement for route-dependent rows that are absent. | `rasines-et-al-2024-precooked-vegetables`; `codex-cxc-1-1969` |
| `validation_rule_4` | mass and utility reconciliation | Require process mass balances and reconciliation of electricity, heat, fuel, water, packaging, refrigerant, and waste records to facility totals within a documented acceptance criterion. | `eu-fdm-bat-2019` |
| `validation_rule_5` | direct emissions | Require each reported emission load to use matched concentration, flow, time, and reference conditions; do not report off-site wastewater treatment as a direct water emission. | `eu-fdm-bat-2019` |
| `validation_rule_6` | allocation | Require evidence that subdivision was attempted before allocation, that any physical driver is causally relevant, and that allocation factors reconcile to one; reject undisclosed economic allocation or embedded substitution credits. | `ec-pef-2021-2279` |
| `validation_rule_7` | food-safety route evidence | Require the declared preservation and storage conditions to be supported by validated control measures and monitored batch records; this PCR does not prescribe a universal time-temperature schedule. | `codex-cxc-1-1969` |
| `validation_rule_8` | unresolved evidence | Fail publication readiness while Tiangong identities or important-flow range evidence remain unresolved; a candidate dataset may proceed only with the gaps explicitly disclosed and no invented UUID or range. | `ec-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for a declared prepared vegetable-, pulse-, or potato-based meal |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product-specific LCA and lifecycle models when recipe, market state, preservation route, geography, technology, allocation, and system boundary are compatible |
| excluded_use | Nutrition equivalence claims; generic substitution for meat-, fish-, cereal-, pizza-, or single-ingredient preserved products; use-phase or end-of-life claims not modelled by the dataset |
| required_metadata | PCR id and version state; product name and recipe; ingredient mass fractions; net reference mass; market state; preservation route; packaging components; site geography and technology; reporting period; allocation; storage condition; shelf life; data sources and unresolved identities |
| required_quality_disclosure | Primary-data share; meter and mass-balance coverage; temporal and geographic representativeness; background proxies; excluded flows; allocation factors; wastewater route; refrigerant balance; unresolved UUIDs and ranges |
| update_trigger | Recipe or dominant ingredient change; preservation or packaging redesign; fuel, electricity, refrigerant, storage, or wastewater-route change; site/technology change; allocation change; material production shift; new verified Tiangong identity or compatible range evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | standard | United Nations Statistics Division. Central Product Classification Version 3.0, structure and classification resources. https://unstats.un.org/unsd/classifications/Econ/CPC.cshtml (accessed 2026-08-24). | Category title, classification context, and product-basis scope |
| `eu-fdm-bat-2019` | official_guidance | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries. https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng (accessed 2026-08-24). | Facility inventories, energy/water/raw-material monitoring, cleaning chemicals, refrigeration, wastes, wastewater and direct-emission data rules |
| `ec-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, Annex I. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (accessed 2026-08-24). | Functional unit, system boundary, foreground/background separation, allocation hierarchy, data quality and validation |
| `codex-cxc-1-1969` | standard | FAO and WHO. 2023. General Principles of Food Hygiene. Codex Alimentarius Code of Practice CXC 1-1969, revised 2022. https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ (accessed 2026-08-24). | Process description, hygienic design and cleaning, hazard-control validation, monitoring, documentation and storage-route disclosure |
| `rasines-et-al-2024-precooked-vegetables` | literature | Rasines, L.; Morera, S.; San Miguel, G.; et al. Exploring the total cost of whole fresh, fresh-cut and pre-cooked vegetables. International Journal of Life Cycle Assessment 29, 967–982 (2024). https://doi.org/10.1007/s11367-024-02292-z | Vegetable preparation, washing/disinfection, cutting/peeling, blanching/draining, sauce dosing, heat treatment, packaging, cold storage, waste and foreground data structure |
| `schmidt-rivera-et-al-2014-convenience-food` | literature | Schmidt Rivera, X. C.; Espinoza Orias, N.; Azapagic, A. Life cycle environmental impacts of convenience food: comparison of ready and home-made meals. Journal of Cleaner Production 73, 294–309 (2014). https://doi.org/10.1016/j.jclepro.2014.01.008 | Ready-meal manufacturing, ingredient cooking and combining, packaging, refrigeration, utilities, refrigerant leakage, wastes and mass-allocation evidence |
