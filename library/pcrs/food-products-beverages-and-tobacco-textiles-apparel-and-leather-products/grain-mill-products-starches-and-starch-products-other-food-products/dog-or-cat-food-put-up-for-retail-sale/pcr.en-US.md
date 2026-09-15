---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.dog-or-cat-food-put-up-for-retail-sale
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Dog or cat food, put up for retail sale

## 1. Scope and Applicability

This PCR defines foreground manufacturing data requirements for dog or cat food placed on the retail market. It covers complete and complementary prepared pet food in dry, wet, and semi-moist forms, including products described as treats when they are legally marketed as complementary dog or cat food. The foreground dataset starts with received ingredients, feed materials, additives, processing aids, and packaging and ends with conforming retail-ready product at the manufacturing gate.

The PCR does not by itself define a cradle-to-grave Product Environmental Footprint. Ingredient production, packaging production, distribution, feeding, food loss outside the manufacturing site, and packaging end-of-life require linked upstream or downstream datasets. For downstream PEF studies of complete meals, the manufacturing result must be converted from the mass reference used here to the declared daily-ration functional unit using the product-specific metabolizable-energy density and daily energy requirement.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.dog-or-cat-food-put-up-for-retail-sale |
| classification_refs | CPC 3.0: 23311, Dog or cat food, put up for retail sale |
| covered_products | Retail-packaged complete or complementary food intended for dogs or cats, including dry, wet, and semi-moist products and treats marketed as complementary pet food |
| excluded_products | Feed for species other than dogs or cats; veterinary medicinal products; unpackaged or bulk feed not put up for retail sale; home-prepared food; feeding dishes and equipment; standalone packaging products |
| representative_product | A declared retail-ready dog or cat food product; downstream PEF comparison distinguishes wet cat food, dry cat food, wet dog food, and dry dog food |
| production_route | Ingredient receipt, formulation and preparation, route-specific thermal processing, retail packaging, and site-support and loss management |
| market_state | Conforming product at the manufacturing gate in its as-sold moisture state and retail packaging configuration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture retail-ready dog or cat food in the declared as-sold state |
| How much | 1 kg net pet-food content, excluding packaging mass |
| How well | Conforming to the declared complete or complementary feeding purpose, target species and life stage, recipe, moisture class, metabolizable-energy declaration, and packaging configuration |
| How long or cycle | One production batch or reporting-period aggregate normalized to 1 kg conforming net output |
| reference_flow_link | rf_retail_ready_pet_food |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net pet-food content |
| Reference product flow | Dog or cat food, put up for retail sale `a044700b-9c04-49d8-8842-c967c80099d4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | target species; complete or complementary feeding purpose; target life stage or physiological state; moisture class (dry/wet/semi-moist); as-sold moisture content; metabolizable-energy density and method; net content; recipe or product family; manufacturing route; packaging masses and materials by level (primary/secondary/tertiary); manufacturing site and geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass | kg | Normalize every inventory result to 1 kg conforming net pet-food content; record packaging mass separately and do not include it in the reference amount. |
| `as_sold_moisture` | reference product and ingredient quantities | Mass | kg | Report the product in its as-sold state and retain measured moisture or dry-matter data needed to reconcile wet, dry, or semi-moist classifications and material balances. |
| `energy_carrier_separation` | electricity and fuels | Energy | kWh for electricity; MJ or carrier-specific mass/volume plus lower-heating-value conversion for fuels | Preserve each energy carrier separately. Record measured purchased or generated quantities and document every conversion factor without replacing carrier identity with a single undifferentiated energy total. |
| `water_accounting` | process and sanitation water | Volume or Mass | m3 or kg | Record withdrawal or supplied water by measured quantity and convert between mass and volume only with a declared density assumption and temperature basis when material. |
| `packaging_mass_conversion` | primary, secondary, and tertiary packaging | Mass | kg | Convert packaging item counts or surface areas to mass with product-specific specifications, measured sample masses, or supplier data, and retain the source record. |
| `daily_ration_conversion` | downstream complete-meal PEF use | Mass and metabolizable energy | kg and kcal ME/kg | Do not compare complete pet foods on the 1 kg manufacturing reference alone. Calculate product mass per daily ration as declared daily energy requirement divided by product-specific metabolizable-energy density and disclose both inputs and their methods. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ingredients, feed materials, additives, processing aids, and packaging components as physically received at the manufacturing site, with their moisture state, origin, supplier identity, and upstream dataset references declared |
| starting_condition_role | Factory-gate starting condition for a foreground pet-food manufacturing dataset |
| product_classification_scope | Retail-packaged complete or complementary food intended for dogs or cats |
| recursive_input_rule | Internally recycled or reworked pet food from the same manufacturing system is recorded as an internal loop and is not assigned duplicate upstream burdens; purchased finished or semi-finished dog or cat food entering from another system is an input product flow with an upstream dataset |
| upstream_dataset_requirement | Link every purchased ingredient, feed material, additive, processing aid, energy carrier, water supply, and packaging material to a geographically and technologically representative upstream dataset or disclose the unresolved data gap |
| disclosure | Declare species, feeding purpose, life stage, moisture class, product route, site, geography, reporting period, recipe or product-family aggregation, rework treatment, packaging configuration, allocation method, excluded processes, and all missing upstream or downstream stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_received_materials` | manufacturing foreground | Include receipt, storage losses, weighing, grinding or size reduction, and mixing of ingredients and additives when performed at the reporting site. | `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing` |
| `sb_route_specific_processing` | manufacturing foreground | Include the declared dry, wet, or semi-moist processing route, including product-contact heating, cooling, drying, coating, filling, sealing, and sterilisation steps that occur at the reporting site. | `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing` |
| `sb_packaging` | manufacturing foreground | Include consumption and manufacturing-site losses of primary, secondary, and tertiary packaging; model production of packaging materials with linked upstream datasets. | `fediaf-pet-food-pefcr-2025` |
| `sb_site_support` | manufacturing foreground | Include line and shared-site electricity, fuels, water, cleaning and sanitation materials, refrigeration, compressed air, on-site generation, manufacturing losses, wastewater, solid waste treatment, and direct elementary emissions when applicable. | `fediaf-pet-food-pefcr-2025` |
| `sb_upstream_linking` | background connection | Represent ingredient production, packaging production, purchased energy, water supply, inbound material transport when in scope, and waste treatment through linked background datasets; do not treat missing links as zero burden. | `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`; `fao-leap-feed-2016` |
| `sb_downstream_exclusion` | manufacturing dataset | Exclude distribution after the manufacturing gate, retail storage, consumer transport, feeding and use, consumer food loss, and packaging end-of-life from this foreground manufacturing dataset; add them explicitly for a cradle-to-grave study. | `fediaf-pet-food-pefcr-2025` |
| `sb_recursive_rework` | rework and same-category inputs | Record internal rework once at the process where it re-enters and retain its original burdens within the same system; require an upstream dataset for purchased same-category material crossing the declared starting boundary. | `eu-recommendation-2021-2279` |

## 6. Process Inventory Structure

Each card below represents one concrete exchange. Include a conditional card only when the named exchange occurs. If the declared recipe, packaging configuration, utility system, sanitation programme, waste system, or emission profile contains a single identity not enumerated below, add a new card for that identity; never combine it with an existing card or substitute a collection label.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `formulation_preparation` | Ingredient receipt, formulation, and preparation | `required` | Always included for manufactured pet food | Foreground material preparation | Prepared mix sent to declared processing route |
| `dry_route_processing` | Dry or semi-moist thermal processing | `conditional` | Include when the declared route uses extrusion, baking, drying, coating, or dry/semi-moist forming | Foreground dry-route processing | Bulk conforming dry or semi-moist product |
| `wet_route_processing` | Wet filling, sealing, and thermal sterilisation | `conditional` | Include when product is filled into primary packs before sealed-pack heat treatment | Foreground wet-route processing | Sterilised wet product in primary packaging |
| `retail_packaging` | Retail and distribution packaging | `required` | Always include product-specific packaging consumed at the site; wet-route primary packs remain in the preceding process | Foreground packaging | 1 kg conforming net pet-food output |
| `site_support_losses` | Site support, sanitation, and loss management | `required` | Always include attributable site-controlled support and loss-management activities | Foreground shared-site support | Allocated share per 1 kg conforming net pet-food output |

### Process: Ingredient receipt, formulation, and preparation (`formulation_preparation`)

#### Inputs

##### Product flows



###### Fresh chicken meat ingredient (`formula_chicken_meat`)

Record Fresh chicken meat as one ingredient exchange when it is consumed in the declared recipe.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Fresh chicken meat
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received mass issued to the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula_materials`
- Data source: Recipe, receiving, and ingredient-issue records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain supplier identity, as-received basis, scale calibration, substitutions, and batch reconciliation.
- Applicability: Conditional: include only when the declared recipe consumes Fresh chicken meat.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### Poultry by-product meal ingredient (`formula_poultry_byproduct_meal`)

Record Poultry by-product meal as one ingredient exchange when it is consumed in the declared recipe.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Poultry by-product meal
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received mass issued to the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula_materials`
- Data source: Recipe, receiving, and ingredient-issue records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain supplier identity, as-received basis, scale calibration, substitutions, and batch reconciliation.
- Applicability: Conditional: include only when the declared recipe consumes Poultry by-product meal.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### Wheat grain ingredient (`formula_wheat_grain`)

Record Wheat grain as one ingredient exchange when it is consumed in the declared recipe.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received mass issued to the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula_materials`
- Data source: Recipe, receiving, and ingredient-issue records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain supplier identity, as-received basis, scale calibration, substitutions, and batch reconciliation.
- Applicability: Conditional: include only when the declared recipe consumes Wheat grain.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### Maize grain ingredient (`formula_maize_grain`)

Record Maize grain as one ingredient exchange when it is consumed in the declared recipe.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Maize grain
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received mass issued to the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula_materials`
- Data source: Recipe, receiving, and ingredient-issue records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain supplier identity, as-received basis, scale calibration, substitutions, and batch reconciliation.
- Applicability: Conditional: include only when the declared recipe consumes Maize grain.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### Rice grain ingredient (`formula_rice_grain`)

Record Rice grain as one ingredient exchange when it is consumed in the declared recipe.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Rice grain
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received mass issued to the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula_materials`
- Data source: Recipe, receiving, and ingredient-issue records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain supplier identity, as-received basis, scale calibration, substitutions, and batch reconciliation.
- Applicability: Conditional: include only when the declared recipe consumes Rice grain.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### Soybean meal ingredient (`formula_soybean_meal`)

Record Soybean meal as one ingredient exchange when it is consumed in the declared recipe.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Soybean meal
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received mass issued to the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula_materials`
- Data source: Recipe, receiving, and ingredient-issue records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain supplier identity, as-received basis, scale calibration, substitutions, and batch reconciliation.
- Applicability: Conditional: include only when the declared recipe consumes Soybean meal.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### Poultry fat ingredient (`formula_poultry_fat`)

Record Poultry fat as one ingredient exchange when it is consumed in the declared recipe.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Poultry fat
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received mass issued to the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula_materials`
- Data source: Recipe, receiving, and ingredient-issue records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain supplier identity, as-received basis, scale calibration, substitutions, and batch reconciliation.
- Applicability: Conditional: include only when the declared recipe consumes Poultry fat.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### Fish oil ingredient (`formula_fish_oil`)

Record Fish oil as one ingredient exchange when it is consumed in the declared recipe.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Fish oil
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received mass issued to the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula_materials`
- Data source: Recipe, receiving, and ingredient-issue records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain supplier identity, as-received basis, scale calibration, substitutions, and batch reconciliation.
- Applicability: Conditional: include only when the declared recipe consumes Fish oil.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### Calcium carbonate ingredient (`formula_calcium_carbonate`)

Record Calcium carbonate as one ingredient exchange when it is consumed in the declared recipe.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Calcium carbonate
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received mass issued to the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula_materials`
- Data source: Recipe, receiving, and ingredient-issue records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain supplier identity, as-received basis, scale calibration, substitutions, and batch reconciliation.
- Applicability: Conditional: include only when the declared recipe consumes Calcium carbonate.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### Sodium chloride ingredient (`formula_sodium_chloride`)

Record Sodium chloride as one ingredient exchange when it is consumed in the declared recipe.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received mass issued to the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula_materials`
- Data source: Recipe, receiving, and ingredient-issue records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain supplier identity, as-received basis, scale calibration, substitutions, and batch reconciliation.
- Applicability: Conditional: include only when the declared recipe consumes Sodium chloride.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### Taurine ingredient (`formula_taurine`)

Record Taurine as one ingredient exchange when it is consumed in the declared recipe.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Taurine
- Flow property / unit: Mass / kg
- Amount rule: Measured as-received mass issued to the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formula_materials`
- Data source: Recipe, receiving, and ingredient-issue records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain supplier identity, as-received basis, scale calibration, substitutions, and batch reconciliation.
- Applicability: Conditional: include only when the declared recipe consumes Taurine.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`; `fediaf-recipes-processing`

###### Preparation process water (`preparation_water`)

Record process water added during formulation and preparation as one water exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-recorded water supplied to grinding, mixing, slurry preparation, or preconditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Data source: Water meter and batch-addition records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter calibration, line boundary, batch allocation, and water-source identity.
- Applicability: Conditional: include when process water is added during formulation or preparation.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

##### Waste flows



##### Elementary flows



#### Outputs

##### Product flows



###### Prepared formulation sent to processing (`prepared_formula`)

Record Prepared pet-food formulation as one conforming product output exchange.

- Direction: Output (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Prepared pet-food formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or batch mass calculated and reconciled from formulation records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Batch yield, transfer, and conforming-product records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, moisture or net-content basis, rejects, and batch reconciliation.
- Applicability: Required for each declared dry, semi-moist, or wet processing route.
- Sources: `fediaf-recipes-processing`
- Source keys: `fediaf-recipes-processing`

##### Waste flows



###### Captured cereal ingredient dust (`preparation_dust_waste`)

Record Captured cereal ingredient dust as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Captured cereal ingredient dust
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when cereal dust is captured and leaves the product system for treatment.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Rejected prepared formulation (`rejected_prepared_formula`)

Record Rejected prepared pet-food formulation as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Rejected prepared pet-food formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when prepared formulation is rejected and is not returned as internal rework.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

##### Elementary flows



###### Preparation PM10 emission to air (`preparation_pm10_air`)

Record Particulate matter below 10 micrometres to air as one elementary exchange when it crosses the environmental boundary from ingredient handling or size reduction.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Particulate matter below 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored mass or calculation from the recorded source quantity and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Site monitoring, permit, fuel, maintenance, or engineering calculation records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain monitoring method or factor source, source attribution, temporal coverage, and double-counting check.
- Applicability: Conditional: include when PM10 from ingredient handling or size reduction crosses the site air boundary.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`
### Process: Dry or semi-moist thermal processing (`dry_route_processing`)

#### Inputs

##### Product flows



###### Prepared formulation for dry-route processing (`dry_prepared_formula`)

Record the prepared formulation transferred into dry or semi-moist processing without duplicating ingredient burdens.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Prepared pet-food formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bulk dry or semi-moist product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Inter-process transfer and batch yield records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain transfer-scale calibration, moisture basis, timing, and batch reconciliation.
- Applicability: Required when the declared product uses the dry or semi-moist processing route.
- Sources: `fediaf-recipes-processing`
- Source keys: `fediaf-recipes-processing`

###### Dry-route grid electricity (`dry_route_electricity`)

Record Grid electricity consumed by conveying, extrusion, forming, drying, cooling, coating, and controls as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Line-metered quantity or allocated site-meter quantity for this electricity exchange
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg bulk dry or semi-moist product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Grid electricity is consumed by conveying, extrusion, forming, drying, cooling, coating, and controls.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Dry-route purchased steam (`dry_route_purchased_steam`)

Record Purchased steam consumed by preconditioning, cooking, baking, or drying as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered, purchased, or inventory-issued quantity for this single carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg bulk dry or semi-moist product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Purchased steam is consumed by preconditioning, cooking, baking, or drying.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Dry-route purchased hot water (`dry_route_purchased_hot_water`)

Record Purchased hot water consumed by preconditioning, cooking, or thermal cleaning assigned to the route as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered, purchased, or inventory-issued quantity for this single carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg bulk dry or semi-moist product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Purchased hot water is consumed by preconditioning, cooking, or thermal cleaning assigned to the route.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Dry-route natural gas (`dry_route_natural_gas`)

Record Natural gas consumed by on-site dry-route combustion as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Metered, purchased, or inventory-issued quantity for this single carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg bulk dry or semi-moist product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Natural gas is consumed by on-site dry-route combustion.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Dry-route diesel fuel (`dry_route_diesel`)

Record Diesel fuel consumed by dry-route burners or dedicated mobile equipment as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered, purchased, or inventory-issued quantity for this single carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg bulk dry or semi-moist product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Diesel fuel is consumed by dry-route burners or dedicated mobile equipment.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Dry-route liquefied petroleum gas (`dry_route_lpg`)

Record Liquefied petroleum gas consumed by dry-route burners as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Metered, purchased, or inventory-issued quantity for this single carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg bulk dry or semi-moist product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Liquefied petroleum gas is consumed by dry-route burners.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

##### Waste flows



##### Elementary flows



#### Outputs

##### Product flows



###### Bulk dry or semi-moist pet food (`bulk_dry_pet_food`)

Record Bulk dry or semi-moist dog or cat food as one conforming product output exchange.

- Direction: Output (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Bulk dry or semi-moist dog or cat food
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming bulk product mass with measured moisture content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bulk dry or semi-moist product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality_yield`
- Data source: Batch yield, transfer, and conforming-product records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, moisture or net-content basis, rejects, and batch reconciliation.
- Applicability: Required when the declared product uses the dry or semi-moist processing route.
- Sources: `fediaf-recipes-processing`; `fediaf-nutritional-guidelines-2024`
- Source keys: `fediaf-recipes-processing`; `fediaf-nutritional-guidelines-2024`

##### Waste flows



###### Dry pet-food fines (`dry_route_fines`)

Record Dry pet-food fines as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Dry pet-food fines
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk dry or semi-moist product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when fines leave the route for treatment rather than internal rework.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Dry-route start-up waste (`dry_route_startup_waste`)

Record Dry pet-food start-up waste as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Dry pet-food start-up waste
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk dry or semi-moist product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when start-up material leaves the route for treatment.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Rejected dry pet food (`dry_route_reject`)

Record Rejected dry or semi-moist dog or cat food as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Rejected dry or semi-moist dog or cat food
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk dry or semi-moist product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when off-specification product leaves the route and is not returned as internal rework.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

##### Elementary flows



###### Dry-route fossil carbon dioxide to air (`dry_route_co2_air`)

Record Carbon dioxide, fossil, to air as one elementary exchange when it crosses the environmental boundary from on-site dry-route combustion.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored mass or calculation from the recorded source quantity and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg bulk dry or semi-moist product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Site monitoring, permit, fuel, maintenance, or engineering calculation records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain monitoring method or factor source, source attribution, temporal coverage, and double-counting check.
- Applicability: Conditional: include for on-site fossil-fuel combustion and exclude upstream fuel-supply emissions.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

###### Dry-route nitrogen oxides to air (`dry_route_nox_air`)

Record Nitrogen oxides to air as one elementary exchange when it crosses the environmental boundary from on-site dry-route combustion.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored mass or calculation from the recorded source quantity and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg bulk dry or semi-moist product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Site monitoring, permit, fuel, maintenance, or engineering calculation records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain monitoring method or factor source, source attribution, temporal coverage, and double-counting check.
- Applicability: Conditional: include when on-site dry-route combustion emits nitrogen oxides.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

###### Dry-route sulfur dioxide to air (`dry_route_so2_air`)

Record Sulfur dioxide to air as one elementary exchange when it crosses the environmental boundary from on-site dry-route combustion.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored mass or calculation from the recorded source quantity and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg bulk dry or semi-moist product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Site monitoring, permit, fuel, maintenance, or engineering calculation records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain monitoring method or factor source, source attribution, temporal coverage, and double-counting check.
- Applicability: Conditional: include when the consumed fuel and combustion conditions produce sulfur dioxide.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

###### Dry-route PM2.5 to air (`dry_route_pm25_air`)

Record Particulate matter below 2.5 micrometres to air as one elementary exchange when it crosses the environmental boundary from drying or on-site dry-route combustion.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored mass or calculation from the recorded source quantity and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg bulk dry or semi-moist product output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Site monitoring, permit, fuel, maintenance, or engineering calculation records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain monitoring method or factor source, source attribution, temporal coverage, and double-counting check.
- Applicability: Conditional: include when PM2.5 crosses the site air boundary from drying or combustion.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`
### Process: Wet filling, sealing, and thermal sterilisation (`wet_route_processing`)

#### Inputs

##### Product flows



###### Prepared formulation for wet-route processing (`wet_prepared_formula`)

Record the prepared wet formulation transferred into filling and sterilisation without duplicating ingredient burdens.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Prepared wet pet-food formulation
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Inter-process transfer and batch yield records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain transfer-scale calibration, moisture basis, timing, and batch reconciliation.
- Applicability: Required when the declared product uses the wet processing route.
- Sources: `fediaf-recipes-processing`
- Source keys: `fediaf-recipes-processing`

###### Wet-route process water (`wet_route_process_water`)

Record wet-route process water as one water input exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-recorded water supplied to wet preparation, filling, sterilisation, or cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Data source: Route water meters and batch-addition records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter calibration, line boundary, batch allocation, and water-source identity.
- Applicability: Conditional: include when process water is consumed by wet-route operations.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Tin-plated steel food can (`wet_tinplate_can`)

Record Tin-plated steel food can as one packaging-component input without combining it with another packaging material.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Tin-plated steel food can
- Flow property / unit: Mass / kg
- Amount rule: Issued mass, or item count multiplied by verified mass per item, for this single component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Data source: Packaging issue records, component counts, and verified component mass
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain component specification, item-mass sampling, count reconciliation, and moisture convention for paper products.
- Applicability: Conditional: include when the wet product is filled into tin-plated steel cans.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Aluminium food-can lid (`wet_aluminium_lid`)

Record Aluminium food-can lid as one packaging-component input without combining it with another packaging material.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Aluminium food-can lid
- Flow property / unit: Mass / kg
- Amount rule: Issued mass, or item count multiplied by verified mass per item, for this single component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Data source: Packaging issue records, component counts, and verified component mass
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain component specification, item-mass sampling, count reconciliation, and moisture convention for paper products.
- Applicability: Conditional: include when an aluminium lid is applied before sterilisation.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Polypropylene food tray (`wet_polypropylene_tray`)

Record Polypropylene food tray as one packaging-component input without combining it with another packaging material.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Polypropylene food tray
- Flow property / unit: Mass / kg
- Amount rule: Issued mass, or item count multiplied by verified mass per item, for this single component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Data source: Packaging issue records, component counts, and verified component mass
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain component specification, item-mass sampling, count reconciliation, and moisture convention for paper products.
- Applicability: Conditional: include when the wet product is filled into polypropylene trays.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Polyamide-polyethylene retort pouch (`wet_retort_pouch`)

Record Polyamide-polyethylene retort pouch as one packaging-component input without combining it with another packaging material.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Polyamide-polyethylene retort pouch
- Flow property / unit: Mass / kg
- Amount rule: Issued mass, or item count multiplied by verified mass per item, for this single component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Data source: Packaging issue records, component counts, and verified component mass
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain component specification, item-mass sampling, count reconciliation, and moisture convention for paper products.
- Applicability: Conditional: include when the wet product is filled into this retort-pouch construction.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Printed paper label for wet packs (`wet_paper_label`)

Record Printed paper label as one packaging-component input without combining it with another packaging material.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Printed paper label
- Flow property / unit: Mass / kg
- Amount rule: Issued mass, or item count multiplied by verified mass per item, for this single component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Data source: Packaging issue records, component counts, and verified component mass
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain component specification, item-mass sampling, count reconciliation, and moisture convention for paper products.
- Applicability: Conditional: include when a printed paper label is applied to the wet primary pack.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Wet-route grid electricity (`wet_route_electricity`)

Record Grid electricity consumed by preparation, filling, sealing, sterilisation, cooling, and controls as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Line-metered quantity or allocated site-meter quantity for this electricity exchange
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Grid electricity is consumed by preparation, filling, sealing, sterilisation, cooling, and controls.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Wet-route purchased steam (`wet_route_purchased_steam`)

Record Purchased steam consumed by cooking or thermal sterilisation as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered, purchased, or inventory-issued quantity for this single carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Purchased steam is consumed by cooking or thermal sterilisation.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Wet-route natural gas (`wet_route_natural_gas`)

Record Natural gas consumed by on-site wet-route combustion as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Metered, purchased, or inventory-issued quantity for this single carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Natural gas is consumed by on-site wet-route combustion.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Wet-route diesel fuel (`wet_route_diesel`)

Record Diesel fuel consumed by wet-route burners or dedicated mobile equipment as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered, purchased, or inventory-issued quantity for this single carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Diesel fuel is consumed by wet-route burners or dedicated mobile equipment.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Wet-route liquefied petroleum gas (`wet_route_lpg`)

Record Liquefied petroleum gas consumed by wet-route burners as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Metered, purchased, or inventory-issued quantity for this single carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Liquefied petroleum gas is consumed by wet-route burners.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

##### Waste flows



##### Elementary flows



#### Outputs

##### Product flows



###### Sterilised wet pet food in primary packaging (`sterilised_wet_pet_food`)

Record Wet dog or cat food in primary packaging as one conforming product output exchange.

- Direction: Output (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Wet dog or cat food in primary packaging
- Flow property / unit: Mass / kg net pet-food content
- Amount rule: Measured conforming net content and unit count reconciled to batch yield
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality_yield`
- Data source: Batch yield, transfer, and conforming-product records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, moisture or net-content basis, rejects, and batch reconciliation.
- Applicability: Required when the declared product uses the wet processing route.
- Sources: `fediaf-recipes-processing`; `fediaf-nutritional-guidelines-2024`
- Source keys: `fediaf-recipes-processing`; `fediaf-nutritional-guidelines-2024`

##### Waste flows



###### Rejected wet pet food (`wet_product_reject`)

Record Rejected wet dog or cat food as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Rejected wet dog or cat food
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when wet product is rejected and not returned as internal rework.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Waste tin-plated steel can (`wet_tinplate_scrap`)

Record Waste tin-plated steel food can as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Waste tin-plated steel food can
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when rejected or trimmed tin-plated steel cans leave for treatment.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Waste aluminium lid (`wet_aluminium_lid_scrap`)

Record Waste aluminium food-can lid as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Waste aluminium food-can lid
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when rejected aluminium lids leave for treatment.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Waste polypropylene tray (`wet_polypropylene_tray_scrap`)

Record Waste polypropylene food tray as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Waste polypropylene food tray
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when rejected polypropylene trays leave for treatment.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Waste retort pouch (`wet_retort_pouch_scrap`)

Record Waste polyamide-polyethylene retort pouch as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Waste polyamide-polyethylene retort pouch
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when rejected or cut retort pouches leave for treatment.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Waste printed paper label (`wet_paper_label_scrap`)

Record Waste printed paper label as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Waste printed paper label
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when rejected paper labels leave for treatment.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

##### Elementary flows



###### Wet-route fossil carbon dioxide to air (`wet_route_co2_air`)

Record Carbon dioxide, fossil, to air as one elementary exchange when it crosses the environmental boundary from on-site wet-route combustion.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored mass or calculation from the recorded source quantity and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Site monitoring, permit, fuel, maintenance, or engineering calculation records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain monitoring method or factor source, source attribution, temporal coverage, and double-counting check.
- Applicability: Conditional: include for on-site fossil-fuel combustion and exclude upstream fuel-supply emissions.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

###### Wet-route nitrogen oxides to air (`wet_route_nox_air`)

Record Nitrogen oxides to air as one elementary exchange when it crosses the environmental boundary from on-site wet-route combustion.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored mass or calculation from the recorded source quantity and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Site monitoring, permit, fuel, maintenance, or engineering calculation records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain monitoring method or factor source, source attribution, temporal coverage, and double-counting check.
- Applicability: Conditional: include when on-site wet-route combustion emits nitrogen oxides.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

###### Wet-route sulfur dioxide to air (`wet_route_so2_air`)

Record Sulfur dioxide to air as one elementary exchange when it crosses the environmental boundary from on-site wet-route combustion.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored mass or calculation from the recorded source quantity and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Site monitoring, permit, fuel, maintenance, or engineering calculation records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain monitoring method or factor source, source attribution, temporal coverage, and double-counting check.
- Applicability: Conditional: include when the consumed fuel and combustion conditions produce sulfur dioxide.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

###### Wet-route PM2.5 to air (`wet_route_pm25_air`)

Record Particulate matter below 2.5 micrometres to air as one elementary exchange when it crosses the environmental boundary from wet-route combustion or thermal processing.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored mass or calculation from the recorded source quantity and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg sterilised wet product net content
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Site monitoring, permit, fuel, maintenance, or engineering calculation records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain monitoring method or factor source, source attribution, temporal coverage, and double-counting check.
- Applicability: Conditional: include when PM2.5 crosses the site air boundary from wet-route combustion or thermal processing.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`
### Process: Retail and distribution packaging (`retail_packaging`)

#### Inputs

##### Product flows



###### Bulk dry product entering final packaging (`pack_bulk_dry_product`)

Record bulk dry or semi-moist product entering final packaging as one route input.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Bulk dry or semi-moist dog or cat food
- Flow property / unit: Mass / kg net pet-food content
- Amount rule: Measured transferred net product mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality_yield`
- Data source: Inter-process transfer and net-product records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain transfer-scale calibration, moisture basis, and batch reconciliation.
- Applicability: Conditional: include only for dry or semi-moist product sent to final packaging.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Wet product entering final packaging (`pack_wet_product`)

Record wet product already in primary packaging entering final packaging as one route input.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Wet dog or cat food in primary packaging
- Flow property / unit: Mass / kg net pet-food content
- Amount rule: Measured transferred net product mass and unit count
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_quality_yield`
- Data source: Inter-process transfer, unit-count, and net-product records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain count reconciliation, net-content check, and batch linkage.
- Applicability: Conditional: include only for wet product sent to final packaging.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Low-density polyethylene pet-food bag (`pack_ldpe_bag`)

Record Low-density polyethylene pet-food bag as one packaging-component input without combining it with another packaging material.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Low-density polyethylene pet-food bag
- Flow property / unit: Mass / kg
- Amount rule: Issued mass, or item count multiplied by verified mass per item, for this single component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Data source: Packaging issue records, component counts, and verified component mass
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain component specification, item-mass sampling, count reconciliation, and moisture convention for paper products.
- Applicability: Conditional: include when an LDPE bag is used in the declared packaging configuration.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Printed paper label (`pack_paper_label`)

Record Printed paper label as one packaging-component input without combining it with another packaging material.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Printed paper label
- Flow property / unit: Mass / kg
- Amount rule: Issued mass, or item count multiplied by verified mass per item, for this single component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Data source: Packaging issue records, component counts, and verified component mass
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain component specification, item-mass sampling, count reconciliation, and moisture convention for paper products.
- Applicability: Conditional: include when a printed paper label is used in final packaging.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Paperboard folding carton (`pack_folding_carton`)

Record Paperboard folding carton as one packaging-component input without combining it with another packaging material.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Paperboard folding carton
- Flow property / unit: Mass / kg
- Amount rule: Issued mass, or item count multiplied by verified mass per item, for this single component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Data source: Packaging issue records, component counts, and verified component mass
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain component specification, item-mass sampling, count reconciliation, and moisture convention for paper products.
- Applicability: Conditional: include when a folding carton is used in the declared packaging configuration.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Corrugated paperboard shipping carton (`pack_corrugated_shipper`)

Record Corrugated paperboard shipping carton as one packaging-component input without combining it with another packaging material.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Corrugated paperboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Issued mass, or item count multiplied by verified mass per item, for this single component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Data source: Packaging issue records, component counts, and verified component mass
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain component specification, item-mass sampling, count reconciliation, and moisture convention for paper products.
- Applicability: Conditional: include when a corrugated shipping carton is used.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Low-density polyethylene shrink film (`pack_ldpe_shrink_film`)

Record Low-density polyethylene shrink film as one packaging-component input without combining it with another packaging material.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Low-density polyethylene shrink film
- Flow property / unit: Mass / kg
- Amount rule: Issued mass, or item count multiplied by verified mass per item, for this single component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Data source: Packaging issue records, component counts, and verified component mass
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain component specification, item-mass sampling, count reconciliation, and moisture convention for paper products.
- Applicability: Conditional: include when LDPE shrink film is used for bundle or pallet containment.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Wooden pallet (`pack_wood_pallet`)

Record Wooden pallet as one packaging-component input without combining it with another packaging material.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Issued mass, or item count multiplied by verified mass per item, for this single component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Data source: Packaging issue records, component counts, and verified component mass
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain component specification, item-mass sampling, count reconciliation, and moisture convention for paper products.
- Applicability: Conditional: include the allocated pallet share when a wooden pallet is consumed by the declared packaging system.
- Sources: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fediaf-recipes-processing`

###### Packaging-line grid electricity (`packaging_electricity`)

Record Grid electricity consumed by filling, sealing, coding, cartoning, palletising, and packaging controls as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Line-metered quantity or allocated site-meter quantity for this electricity exchange
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Grid electricity is consumed by filling, sealing, coding, cartoning, palletising, and packaging controls.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

##### Waste flows



##### Elementary flows



#### Outputs

##### Product flows



###### Retail-ready dog or cat food (`retail_ready_pet_food`)

Record Dog or cat food, put up for retail sale as one conforming product output exchange.

- Direction: Output (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Dog or cat food, put up for retail sale `a044700b-9c04-49d8-8842-c967c80099d4`
- Flow property / unit: Mass / kg
- Amount rule: Fixed reference output of 1 kg after measured conforming yield is normalised
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Data source: Conforming net-output record and the verified reference-flow identity in Section 3
- UUID status: Verified reference Product flow; Mass property and Units of mass unit group remain fixed in Section 3.
- Uncertainty: Retain net-content calibration, conforming-yield reconciliation, and explicit exclusion of packaging mass.
- Applicability: Required reference output for every dataset under this PCR.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009`

##### Waste flows



###### Waste low-density polyethylene film (`pack_ldpe_scrap`)

Record Waste low-density polyethylene film as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when LDPE bag or shrink-film scrap leaves for treatment.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Waste printed paper label (`pack_paper_label_scrap`)

Record Waste printed paper label as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Waste printed paper label
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when rejected printed paper labels leave for treatment.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Waste paperboard folding carton (`pack_folding_carton_scrap`)

Record Waste paperboard folding carton as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Waste paperboard folding carton
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when folding-carton scrap leaves for treatment.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Waste corrugated paperboard (`pack_corrugated_scrap`)

Record Waste corrugated paperboard as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Waste corrugated paperboard
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when corrugated paperboard scrap leaves for treatment.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Waste wooden packaging (`pack_wood_waste`)

Record Waste wooden packaging as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Waste wooden packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when allocated damaged or discarded wooden packaging leaves for treatment.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Rejected packaged pet food (`pack_product_reject`)

Record Rejected packaged dog or cat food as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Rejected packaged dog or cat food
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_yield_losses`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include net pet-food content when a rejected packaged unit leaves for treatment and is not reworked.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

##### Elementary flows


### Process: Site support, sanitation, and loss management (`site_support_losses`)

#### Inputs

##### Product flows



###### Shared-site grid electricity (`site_grid_electricity`)

Record Grid electricity consumed by refrigeration, compressed-air generation, ventilation, lighting, water treatment, and shared controls as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Line-metered quantity or allocated site-meter quantity for this electricity exchange
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Grid electricity is consumed by refrigeration, compressed-air generation, ventilation, lighting, water treatment, and shared controls.
- Sources: `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`

###### Shared-site purchased steam (`site_purchased_steam`)

Record Purchased steam consumed by shared boilers, cleaning, or thermal support as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered, purchased, or inventory-issued quantity for this single carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Purchased steam is consumed by shared boilers, cleaning, or thermal support.
- Sources: `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`

###### Shared-site purchased hot water (`site_purchased_hot_water`)

Record Purchased hot water consumed by shared cleaning or thermal support as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered, purchased, or inventory-issued quantity for this single carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Purchased hot water is consumed by shared cleaning or thermal support.
- Sources: `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`

###### Shared-site purchased chilled water (`site_purchased_chilled_water`)

Record Purchased chilled water consumed by shared process or cold-room cooling as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Purchased chilled water
- Flow property / unit: Energy / MJ
- Amount rule: Metered, purchased, or inventory-issued quantity for this single carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Purchased chilled water is consumed by shared process or cold-room cooling.
- Sources: `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`

###### Shared-site natural gas (`site_natural_gas`)

Record Natural gas consumed by shared on-site combustion as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Metered, purchased, or inventory-issued quantity for this single carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Natural gas is consumed by shared on-site combustion.
- Sources: `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`

###### Shared-site diesel fuel (`site_diesel`)

Record Diesel fuel consumed by shared generators, burners, or site-controlled mobile equipment as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered, purchased, or inventory-issued quantity for this single carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Diesel fuel is consumed by shared generators, burners, or site-controlled mobile equipment.
- Sources: `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`

###### Shared-site liquefied petroleum gas (`site_lpg`)

Record Liquefied petroleum gas consumed by shared burners as one energy or utility exchange.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Metered, purchased, or inventory-issued quantity for this single carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Line meter, site meter, purchase invoice, and allocation records for this carrier
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter boundary, calibration, carrier specification, allocation driver, and conversion basis.
- Applicability: Conditional: include only when Liquefied petroleum gas is consumed by shared burners.
- Sources: `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`
- Source keys: `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016`

###### Refrigerant ammonia R-717 (`site_refrigerant_r717`)

Record refrigerant ammonia R-717 charged to site-controlled refrigeration as one product input.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Refrigerant ammonia (R-717)
- Flow property / unit: Mass / kg
- Amount rule: Measured charge, recharge, or inventory-balance quantity attributable to the product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Refrigerant purchase, charge, recovery, and maintenance logs
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain cylinder reconciliation, recovered mass, equipment assignment, and reporting-period inventory balance.
- Applicability: Conditional: include when site-controlled equipment uses ammonia R-717.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

###### Refrigerant R-134a (`site_refrigerant_r134a`)

Record refrigerant R-134a charged to site-controlled refrigeration as one product input.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Refrigerant R-134a
- Flow property / unit: Mass / kg
- Amount rule: Measured charge, recharge, or inventory-balance quantity attributable to the product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Refrigerant purchase, charge, recovery, and maintenance logs
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain cylinder reconciliation, recovered mass, equipment assignment, and reporting-period inventory balance.
- Applicability: Conditional: include when site-controlled equipment uses refrigerant R-134a.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

###### Refrigerant R-404A (`site_refrigerant_r404a`)

Record refrigerant R-404A charged to site-controlled refrigeration as one product input.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Refrigerant R-404A
- Flow property / unit: Mass / kg
- Amount rule: Measured charge, recharge, or inventory-balance quantity attributable to the product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_carriers`
- Data source: Refrigerant purchase, charge, recovery, and maintenance logs
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain cylinder reconciliation, recovered mass, equipment assignment, and reporting-period inventory balance.
- Applicability: Conditional: include when site-controlled equipment uses refrigerant R-404A.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

###### Sanitation process water (`sanitation_water`)

Record process water used for product-contact and site sanitation as one water input.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or cleaning-log water quantity allocated to the product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Data source: Sanitation water meters and cleaning logs
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter calibration, cleaning-cycle count, shared-area allocation, and water-source identity.
- Applicability: Required for sanitation water attributable to the product.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Sodium hydroxide cleaning chemical (`sanitation_sodium_hydroxide`)

Record sodium hydroxide used for sanitation as one chemical input.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Inventory-issued active-substance mass allocated from sanitation records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Data source: Chemical issue records, concentration certificates, and cleaning logs
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain product concentration, dilution calculation, issued quantity, return quantity, and allocation.
- Applicability: Conditional: include when sodium hydroxide is consumed by sanitation.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

###### Nitric acid cleaning chemical (`sanitation_nitric_acid`)

Record nitric acid used for sanitation as one chemical input.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Inventory-issued active-substance mass allocated from sanitation records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Data source: Chemical issue records, concentration certificates, and cleaning logs
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain product concentration, dilution calculation, issued quantity, return quantity, and allocation.
- Applicability: Conditional: include when nitric acid is consumed by sanitation.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

###### Peracetic acid disinfectant (`sanitation_peracetic_acid`)

Record peracetic acid used for sanitation as one chemical input.

- Direction: Input (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Inventory-issued active-substance mass allocated from sanitation records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_records`
- Data source: Chemical issue records, concentration certificates, and sanitation logs
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain product concentration, dilution calculation, issued quantity, return quantity, and allocation.
- Applicability: Conditional: include when peracetic acid is consumed as a disinfectant.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

##### Waste flows



##### Elementary flows



#### Outputs

##### Product flows



##### Waste flows



###### Manufacturing wastewater (`manufacturing_wastewater`)

Record Manufacturing wastewater as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Manufacturing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge volume or water-balance quantity assigned to the documented treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_waste`
- Data source: Effluent meters, water balance, sampling, and treatment-destination records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain meter calibration, discharge boundary, sampling coverage, treatment destination, and water balance.
- Applicability: Required when wastewater leaves the foreground system for sewer or treatment.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

###### Pet-food floor sweepings (`site_floor_sweepings`)

Record Pet-food floor sweepings as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Pet-food floor sweepings
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_waste`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when floor sweepings leave the site for treatment.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

###### Wastewater-treatment sludge (`site_wastewater_sludge`)

Record Pet-food manufacturing wastewater-treatment sludge as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Pet-food manufacturing wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_waste`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when wastewater-treatment sludge leaves the site for treatment.
- Sources: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`
- Source keys: `fediaf-pet-food-pefcr-2025`; `eu-recommendation-2021-2279`

###### Used polypropylene cleaning wipes (`site_used_cleaning_wipes`)

Record Used polypropylene cleaning wipes as one waste output and identify its treatment destination.

- Direction: Output (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Used polypropylene cleaning wipes
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity by disposition; exclude internal rework from external waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_waste`
- Data source: Waste scale, batch reconciliation, inventory, and shipment records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain scale calibration, composition identity, treatment route, moisture basis, and rework exclusion.
- Applicability: Conditional: include when used polypropylene cleaning wipes leave the site for treatment.
- Sources: `fediaf-pet-food-pefcr-2025`
- Source keys: `fediaf-pet-food-pefcr-2025`

##### Elementary flows



###### Shared-site fossil carbon dioxide to air (`site_co2_air`)

Record Carbon dioxide, fossil, to air as one elementary exchange when it crosses the environmental boundary from shared on-site combustion.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored mass or calculation from the recorded source quantity and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Site monitoring, permit, fuel, maintenance, or engineering calculation records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain monitoring method or factor source, source attribution, temporal coverage, and double-counting check.
- Applicability: Conditional: include for shared on-site fossil-fuel combustion and exclude upstream fuel-supply emissions.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

###### Shared-site nitrogen oxides to air (`site_nox_air`)

Record Nitrogen oxides to air as one elementary exchange when it crosses the environmental boundary from shared on-site combustion.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored mass or calculation from the recorded source quantity and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Site monitoring, permit, fuel, maintenance, or engineering calculation records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain monitoring method or factor source, source attribution, temporal coverage, and double-counting check.
- Applicability: Conditional: include when shared on-site combustion emits nitrogen oxides.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

###### Shared-site sulfur dioxide to air (`site_so2_air`)

Record Sulfur dioxide to air as one elementary exchange when it crosses the environmental boundary from shared on-site combustion.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored mass or calculation from the recorded source quantity and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Site monitoring, permit, fuel, maintenance, or engineering calculation records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain monitoring method or factor source, source attribution, temporal coverage, and double-counting check.
- Applicability: Conditional: include when the consumed shared-site fuel and combustion conditions produce sulfur dioxide.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

###### Shared-site PM2.5 to air (`site_pm25_air`)

Record Particulate matter below 2.5 micrometres to air as one elementary exchange when it crosses the environmental boundary from shared on-site combustion.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific monitored mass or calculation from the recorded source quantity and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Site monitoring, permit, fuel, maintenance, or engineering calculation records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain monitoring method or factor source, source attribution, temporal coverage, and double-counting check.
- Applicability: Conditional: include when PM2.5 from shared on-site combustion crosses the site air boundary.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

###### Ammonia R-717 refrigerant to air (`site_r717_air`)

Record Ammonia (R-717) to air as one elementary exchange when it crosses the environmental boundary from site-controlled refrigeration.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Ammonia (R-717) to air
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant-specific unrecovered loss calculated from charge, recovery, and inventory balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Refrigerant charge, recovery, leak-test, and inventory-balance records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain cylinder reconciliation, recovered mass, leak-test coverage, equipment assignment, and inventory closure.
- Applicability: Conditional: include when the R-717 inventory balance identifies unrecovered loss across the site air boundary.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

###### Refrigerant R-134a to air (`site_r134a_air`)

Record Refrigerant R-134a to air as one elementary exchange when it crosses the environmental boundary from site-controlled refrigeration.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Refrigerant R-134a to air
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant-specific unrecovered loss calculated from charge, recovery, and inventory balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Refrigerant charge, recovery, leak-test, and inventory-balance records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain cylinder reconciliation, recovered mass, leak-test coverage, equipment assignment, and inventory closure.
- Applicability: Conditional: include when the R-134a inventory balance identifies unrecovered loss across the site air boundary.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

###### Refrigerant R-404A to air (`site_r404a_air`)

Record Refrigerant R-404A to air as one elementary exchange when it crosses the environmental boundary from site-controlled refrigeration.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Refrigerant R-404A to air
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant-specific unrecovered loss calculated from charge, recovery, and inventory balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Refrigerant charge, recovery, leak-test, and inventory-balance records
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain cylinder reconciliation, recovered mass, leak-test coverage, equipment assignment, and inventory closure.
- Applicability: Conditional: include when the R-404A inventory balance identifies unrecovered loss across the site air boundary.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

###### Chemical oxygen demand to water (`site_cod_water`)

Record Chemical oxygen demand to water as one elementary exchange when it crosses the environmental boundary from directly discharged treated effluent.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Discharge volume multiplied by representative measured chemical-oxygen-demand concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Effluent flow meters and representative laboratory analyses
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain sampling frequency, laboratory method, flow-weighting, discharge boundary, and treatment period.
- Applicability: Conditional: include only when treated effluent crosses directly into an environmental water compartment.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

###### Total nitrogen to water (`site_total_n_water`)

Record Total nitrogen to water as one elementary exchange when it crosses the environmental boundary from directly discharged treated effluent.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: Discharge volume multiplied by representative measured total-nitrogen concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Effluent flow meters and representative laboratory analyses
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain sampling frequency, laboratory method, flow-weighting, discharge boundary, and treatment period.
- Applicability: Conditional: include only when treated effluent crosses directly into an environmental water compartment.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

###### Total phosphorus to water (`site_total_p_water`)

Record Total phosphorus to water as one elementary exchange when it crosses the environmental boundary from directly discharged treated effluent.

- Direction: Output (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: Discharge volume multiplied by representative measured total-phosphorus concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming net pet-food output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Data source: Effluent flow meters and representative laboratory analyses
- UUID status: Unresolved; UUID omitted because an exact public-state-100 Tiangong identity has not been confirmed by both required semantic checks for this row.
- Uncertainty: Retain sampling frequency, laboratory method, flow-weighting, discharge boundary, and treatment period.
- Applicability: Conditional: include only when treated effluent crosses directly into an environmental water compartment.
- Sources: `eu-recommendation-2021-2279`
- Source keys: `eu-recommendation-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | all shared and multifunctional processes | Avoid allocation by subdivision, separate metering, batch records, or direct assignment whenever the input, output, waste, or emission can be attributed to one product or production line. | `eu-recommendation-2021-2279`; `fao-leap-feed-2016` |
| `allocation_route_specific` | dry, wet, and semi-moist lines | Keep route-specific processing separate. Do not allocate dry-route burdens to wet products or wet-route burdens to dry products unless a measured shared process demonstrably serves both. | `fediaf-pet-food-pefcr-2025` |
| `allocation_shared_utilities` | shared electricity, fuel, water, sanitation, and support services | Use product-specific meters or operating records first. When direct assignment is unavailable, allocate shared manufacturing utilities by conforming net production mass over the same site and period and disclose the products included. | `fediaf-pet-food-pefcr-2025` |
| `allocation_physical_causality` | shared processes not represented by production mass | Use another physical parameter only when it explains the causal use of the shared process, and document the parameter, period, and reconciliation to the site total. | `fao-leap-feed-2016` |
| `allocation_economic_fallback` | multifunctional outputs without defensible physical causality | Use economic allocation only after subdivision and physical causality are shown not to be feasible; disclose prices, averaging period, coproduct grouping, and a sensitivity assessment for comparative use. | `fao-leap-feed-2016` |
| `allocation_rework_and_waste` | rework, residues, and waste | Internal rework carries its existing burdens and receives no new coproduct credit. Include collection, transport, and treatment burdens for waste leaving the system; do not assign avoided-burden credits unless a downstream study explicitly applies a compatible system-expansion rule. | `fao-leap-feed-2016`; `eu-recommendation-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_formula_materials` | `formulation_preparation` | Ingredient and feed-material inputs | Batch formulation and material issue records | material id; supplier; origin; lot; as-received mass; moisture or dry matter when available; returned quantity | Reconcile approved recipe, warehouse issues, returns, and batch records | kg | Each batch | Representative production period, normally at least 12 consecutive months or a justified seasonal campaign | Every site and line in dataset scope | Sum net issued mass by material and divide by conforming net output | Signed batch records; inventory reconciliation; supplier specifications |
| `cp_process_water` | `formulation_preparation`; `dry_route_processing`; `wet_route_processing` | Added and process water | Meter and batch records | meter id; opening and closing reading; batch id; process; quantity; recirculated quantity | Read calibrated meters or documented batch dosing systems | m3 or kg | Continuous or each batch | Same period as product output | Each included site and process line | Subtract separately metered recirculation when appropriate and normalize net supplied water to output | Meter calibration; dosing records; water balance |
| `cp_energy_carriers` | `dry_route_processing`; `wet_route_processing`; `retail_packaging`; `site_support_losses` | Electricity, fuels, steam, and on-site generation | Meter, invoice, and fuel-stock records | carrier; meter; quantity; unit; supplier; generation; export; line or site; period | Collect line meters where available and reconcile to site invoices and stock change | kWh, MJ, kg, or m3 | Continuous, monthly, or each delivery | Same period as product output and representative of normal operation | Every included site with line and shared-site separation | Directly assign line meters; allocate reconciled shared remainder under Section 7 | Calibration; invoices; meter hierarchy; energy balance |
| `cp_packaging_materials` | `wet_route_processing`; `retail_packaging` | Packaging inputs and losses | Packaging bill of materials and issue records | component id; material; packaging level; item count; mass per item; issued mass; returned mass; scrap | Combine product packaging specification with issued quantities and verified sample or supplier mass | item and kg | Each packaging run or batch | Same period as product output | Every packaging configuration in scope | Convert item counts to mass, subtract verified returns, and normalize to net product output | Approved packaging specification; sample-weighing record; inventory reconciliation |
| `cp_product_quality_yield` | `dry_route_processing`; `wet_route_processing`; `retail_packaging` | Conforming output and product qualifiers | Batch yield, laboratory, and label records | species; feeding purpose; life stage; route; product mass; unit count; net content; moisture; metabolizable energy; release status | Collect released-batch weights and quality results using documented methods | kg; percent moisture; kcal ME/kg | Each released batch | Same period as inventory inputs | Every product family, route, and site in scope | Sum conforming released net content; keep rejected product out of denominator | Calibrated scales; laboratory report; approved label; batch-release record |
| `cp_batch_yield_losses` | `formulation_preparation`; `dry_route_processing`; `wet_route_processing`; `retail_packaging` | Transfers, rework, and manufacturing losses | Batch mass-balance and waste records | input mass; transfer mass; conforming output; rework in and out; loss mass; waste type; destination | Reconcile adjacent process transfers and weigh losses by disposition | kg | Each batch with period reconciliation | Same period as product output | Every included line and site | Aggregate without double counting internal transfers or rework and normalize external losses to output | Batch reconciliation; scale records; waste tickets; rework ledger |
| `cp_sanitation_records` | `site_support_losses` | Sanitation water and materials | Cleaning schedules, dosing logs, and material issues | area or equipment; cleaning event; water; chemical id; concentration; issued quantity; recovery | Collect automated cleaning-system records or signed sanitation logs and material issues | m3 and kg | Each cleaning event | Same period as product output | All shared and line-specific sanitation in scope | Directly assign line events; allocate shared events under Section 7 | Dosing calibration; cleaning log; chemical inventory reconciliation |
| `cp_wastewater_waste` | `site_support_losses` | Wastewater and solid or hazardous waste | Discharge meters, analytical reports, and waste shipment records | waste id; quantity; water volume; pollutant load; treatment route; carrier; destination | Collect metered discharge and weighed shipment records; reconcile on-site treatment transfers | m3 and kg | Continuous, each shipment, or permit interval | Same period as product output | Every included site | Sum by waste identity and treatment route; prevent duplication between generation and treatment output | Meter calibration; laboratory analysis; manifests; contractor receipts |
| `cp_direct_emissions` | `formulation_preparation`; `dry_route_processing`; `wet_route_processing`; `site_support_losses` | Direct elementary emissions | Monitoring, permit, fuel, refrigerant, and engineering records | pollutant; compartment; measured concentration or factor; activity; calculation method; period | Prefer direct monitoring; otherwise use documented mass balance or engineering calculation tied to collected activity | kg pollutant | Monitoring or reporting interval | Same period as product output | Every emitting source in dataset scope | Calculate pollutant mass, reconcile with permits, and allocate only shared sources under Section 7 | Calibration; laboratory report; permit filing; calculation workbook |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period or batch amount / conforming net pet-food output | collected amount; conforming net output mass | amount per 1 kg reference product | `fediaf-pet-food-pefcr-2025` |
| `calc_packaging_mass` | packaging item records | packaging mass = issued item count × verified mass per item, less returned conforming items; reconcile the result to packaging inventory issues | item count; mass per item; returns; issued mass | kg packaging per 1 kg net pet-food output | `fediaf-pet-food-pefcr-2025` |
| `calc_energy_conversion` | fuels and purchased thermal energy | carrier energy = collected carrier quantity × documented lower heating value or supplier energy content; preserve original quantity and factor | carrier quantity; conversion factor; factor source | MJ by carrier and original carrier quantity | `eu-recommendation-2021-2279` |
| `calc_shared_allocation` | shared-site inputs and emissions | allocated amount = reconciled shared total × selected physical allocation share; conforming production mass is the default share unless another causal parameter is justified | shared total; product outputs; allocation parameter | allocated amount per product family | `fediaf-pet-food-pefcr-2025`; `fao-leap-feed-2016` |
| `calc_mass_balance` | each process and overall manufacturing system | mass-balance residual = total material inputs + internal transfers in − conforming outputs − internal transfers out − measured rework stock change − measured wastes − measured direct mass emissions | ingredient, water, packaging, transfer, output, rework, waste, and emission records | disclosed residual and reconciliation status | `eu-recommendation-2021-2279` |
| `calc_daily_ration_equivalence` | downstream complete pet-food PEF use | daily-ration mass = declared daily metabolizable-energy requirement / measured or substantiated product metabolizable-energy density | daily energy requirement; kcal ME/kg; target species and body-weight basis | kg product per declared daily ration | `fediaf-pet-food-pefcr-2025`; `fediaf-nutritional-guidelines-2024` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Preserve product, species, complete or complementary status, life stage, route, moisture, metabolizable-energy method, net content, recipe or product family, packaging, site, geography, and reporting period. | Approved specification, label, and batch-release record |
| `dq_primary_foreground` | site-controlled processes | Use primary site- or supply-chain-specific data for processes under the manufacturer's control or direct influence; explain every secondary-data substitution. | Meters, invoices, batch records, engineering records, and substitution log |
| `dq_temporal_representativeness` | all foreground records | Cover a period representative of normal production and disclose shutdowns, trials, abnormal losses, seasonal campaigns, and excluded batches. | Production calendar and coverage reconciliation |
| `dq_completeness` | material and energy inventory | Reconcile purchased and issued materials, energy, water, product output, rework, packaging, waste, wastewater, and direct emissions to site totals; missing flows are data gaps, not zero values. | Mass, energy, water, and waste reconciliation |
| `dq_route_separation` | wet, dry, and semi-moist products | Separate route-specific lines and meters or document the allocation of shared processes; do not merge unlike routes without preserving their technology shares. | Line mapping, meter hierarchy, and allocation workbook |
| `dq_geography_technology` | upstream links | Use supplier, geographic, and technology information at the most specific available level and disclose proxy datasets. | Supplier records and background-dataset mapping |
| `dq_measurement_quality` | measured values | Retain calibration, sampling, laboratory method, estimation formula, and responsible record for every material measurement or calculation. | Calibration certificates, laboratory reports, and calculation files |
| `dq_reviewability` | dataset package | Keep raw records, transformations, allocation parameters, exclusions, and reconciliation results traceable from each normalized row to its evidence. | Audit trail and reviewer sign-off |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_output` | reference flow | The normalized conforming output shall equal 1 kg net pet-food content, packaging shall be separate, and all inventory rows shall use a declared conversion to that reference. | `fediaf-pet-food-pefcr-2025`; `eu-regulation-767-2009` |
| `val_required_qualifiers` | product identity | All Required qualifiers in Section 3 shall be present and internally consistent with product, batch, label, and process-route records. | `eu-regulation-767-2009`; `fediaf-nutritional-guidelines-2024` |
| `val_feeding_purpose` | complete and complementary product claims | A complete product shall be identified as sufficient for a daily ration; a complementary product shall identify the other feed or feeding context needed and shall not be represented as a complete daily ration by itself. | `eu-regulation-767-2009`; `fediaf-nutritional-guidelines-2024` |
| `val_route_processes` | process map | Include the dry-route process only when applicable and the wet-route process only when applicable; at least one declared route-specific process shall connect preparation to retail-ready output. | `fediaf-recipes-processing` |
| `val_packaging_reconciliation` | packaging inventory | Packaging components by material and level shall reconcile to the declared retail configuration and wet-route primary packaging shall not be counted again in final packaging. | `fediaf-pet-food-pefcr-2025` |
| `val_mass_balance` | each process and overall manufacturing | Report the mass-balance residual and investigate material residuals using the declared measurement uncertainty and missing-flow review; do not force closure by assigning an unexplained residual to waste. | `eu-recommendation-2021-2279` |
| `val_energy_reconciliation` | energy inventory | Route-specific plus allocated shared energy shall reconcile to site totals by carrier and period; on-site generation, own use, export, and contractual electricity instruments shall be disclosed separately. | `fediaf-pet-food-pefcr-2025` |
| `val_rework_no_double_count` | rework and same-category inputs | Internal rework shall appear as a linked internal transfer without duplicate upstream burdens, while purchased same-category input shall have a separate upstream dataset. | `eu-recommendation-2021-2279` |
| `val_allocation_disclosure` | shared processes and coproducts | Every allocated row shall identify the allocation rule, denominator, products included, period, and reconciliation to the unallocated total. | `fao-leap-feed-2016`; `fediaf-pet-food-pefcr-2025` |
| `val_data_source_coverage` | external and background evidence | Every external method rule shall cite a listed source and every purchased material or service shall have an upstream dataset reference or an explicit unresolved data gap. | `eu-recommendation-2021-2279` |
| `val_daily_ration_use` | downstream PEF interpretation | A complete-meal comparison shall use product-specific metabolizable-energy density and a declared species/body-weight daily-energy basis to convert the manufacturing result to a daily ration; the 1 kg result alone is not a comparative PEF functional unit. | `fediaf-pet-food-pefcr-2025` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for retail-packaged dog or cat food |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supplier-specific or site-specific cradle-to-gate modelling; product-system assembly; manufacturing improvement; downstream PEF modelling after adding required upstream and downstream stages and, for complete meals, conversion to the daily-ration functional unit |
| excluded_use | Standalone cradle-to-grave or comparative environmental claims; nutritional-compliance certification; pet-food safety certification; veterinary or therapeutic claims; substitution for missing ingredient, distribution, use, or end-of-life stages |
| required_metadata | All Section 3 qualifiers; site and geography; reporting period; product and route shares; upstream dataset mapping; packaging bill; allocation rules; data coverage; exclusions; mass and energy reconciliation |
| required_quality_disclosure | Primary versus secondary data status; measurement and estimation methods; temporal, geographic, and technological representativeness; completeness; proxy datasets; allocation; abnormal production; unresolved UUIDs; missing ranges and upstream links |
| update_trigger | Material change in recipe or ingredient sourcing, species or life-stage claim, complete/complementary status, moisture or energy density, processing route or equipment, site energy or water system, packaging configuration, waste treatment, allocation basis, or data-quality evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fediaf-pet-food-pefcr-2025` | Standard (`standard`) | FEDIAF, Prepared Pet Food for Cats and Dogs, updated PEFCR, 2025, https://europeanpetfood.org/wp-content/uploads/2025/02/PEFCR_PetFood_update.pdf (retrieved 2026-07-25) | Product scope, representative subcategories, downstream daily-ration functional unit, life-cycle stages, mandatory company-specific data, foreground/background distinction, manufacturing inventory, allocation, data quality, and packaging |
| `eu-regulation-767-2009` | Standard (`standard`) | Regulation (EC) No 767/2009 on the placing on the market and use of feed, https://eur-lex.europa.eu/eli/reg/2009/767/oj/eng (retrieved 2026-07-25) | Complete, complementary, compound-feed, labelling, packaging, and net-quantity product identity |
| `eu-recommendation-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-07-25) | General PEF method, foreground and primary-data rules, life-cycle inventory completeness, allocation hierarchy, and direct-emission treatment |
| `fediaf-nutritional-guidelines-2024` | Handbook (`handbook`) | FEDIAF Nutritional Guidelines for Complete and Complementary Pet Food for Cats and Dogs, publication July 2024, https://europeanpetfood.org/wp-content/uploads/2024/09/FEDIAF-Nutritional-Guidelines_2024.pdf (retrieved 2026-07-25) | Feeding-purpose definitions, species and life-stage qualifiers, moisture class, metabolizable-energy and nutritional-adequacy metadata |
| `fediaf-recipes-processing` | Extension guidance (`extension_guidance`) | FEDIAF, Recipes and Processing, https://fediaf.org/prepared-pet-foods/recipes-and-processing.html (retrieved 2026-07-25) | Ingredient measurement, grinding and mixing, dry cooking-extrusion and finishing, wet filling and sterilisation process decomposition |
| `fao-leap-feed-2016` | Official guidance (`official_guidance`) | FAO LEAP Partnership, Environmental performance of animal feeds supply chains: Guidelines for assessment, 2016, https://openknowledge.fao.org/server/api/core/bitstreams/040bf0e7-e652-4eda-807c-37172c403671/content (retrieved 2026-07-25) | Feed-processing system boundaries, subdivision and physical allocation hierarchy, economic fallback, coproduct and waste treatment |
