---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.refined-cane-or-beet-sugar-in-solid-form-containing-added-flavouring-or-colouring-matte-09d71d87
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Refined cane or beet sugar, in solid form, containing added flavouring or colouring matter; maple sugar and maple syrup

## 1. Scope and Applicability

This PCR covers exactly one declared product family in each foreground data package:

- Family A: solid refined cane or beet sugar containing added flavouring or colouring matter. The foreground boundary starts with purchased refined sugar and includes ingredient receipt, formulation, mixing or coating, drying only when the formulation requires it, cleaning, and packaging.
- Family B: maple syrup or solid maple sugar. The foreground boundary starts with receipt of maple sap and includes filtration, evaporation/concentration, cleaning, packaging, and crystallization only for solid maple sugar.

The two families shall not be combined in one foreground process system and shall not be assumed to occur together. The producer shall declare `product_family: A` or `product_family: B`; Family B shall also declare `maple_product_state: syrup` or `maple_product_state: solid_sugar`. Upstream production of refined cane/beet sugar and cultivation, tapping, or collection of maple sap are outside the foreground boundary and require separate upstream datasets. Sugar confectionery, unflavoured/uncoloured refined sugar sold without further formulation, artificial maple-flavoured syrups, maple cream, maple taffy, and other maple confections are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.refined-cane-or-beet-sugar-in-solid-form-containing-added-flavouring-or-colouring-matte-09d71d87 |
| classification_refs | CPC 3.0: 23530 |
| covered_products | Family A formulated solid refined cane or beet sugar with added flavouring or colouring matter; Family B maple syrup and solid maple sugar |
| excluded_products | Unflavoured and uncoloured refined sugar; raw sugar; molasses; artificial maple-flavoured syrup; maple cream, taffy, candy, and other sugar confectionery |
| representative_product | Packaged maple syrup at the manufacturing gate; the concrete dataset shall replace this representative identity with its single declared product |
| production_route | Mutually exclusive Family A purchased-refined-sugar formulation route or Family B received-maple-sap concentration route |
| market_state | Packaged solid formulated sugar, packaged maple sugar, or packaged maple syrup at the manufacturing gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of one declared packaged product covered by this PCR at the manufacturing gate |
| How much | 1 kg net product, excluding packaging |
| How well | Meets the declared formulation, physical state, soluble-solids or moisture specification, food-safety release criteria, and market specification |
| How long or cycle | One completed manufacturing batch or campaign normalized to 1 kg released product |
| reference_flow_link | Net mass of the single released product after final quality hold and before distribution |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Maple syrup |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product_family A or B; exact product name; cane sugar, beet sugar, or declared blend for Family A; flavouring and colouring status for Family A; syrup or solid_sugar for Family B; maple species or sap source; formulation code; drying applied or not; filtration technology; reverse osmosis applied or not; evaporator and heat technology; fuel types; packaging configuration; geography; reporting period |

The concrete foreground data package shall use one exact product flow for its declared product. `Maple syrup` is the representative identity because no exact Tiangong UUID was resolved during authoring; the UUID gap is registered in the manifest and shall be closed before review or publication.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all exchanges to 1 kg net released product; packaging mass is excluded from the reference amount and recorded separately. |
| `route_specific_denominator` | all inventory rows | Mass or energy as stated by the row | kg, kWh, or MJ | Use only the selected family and product-state route in the denominator; do not average Family A and Family B or syrup and solid maple sugar. |
| `wet_dry_mass_disclosure` | sugar and maple product masses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | State whether each mass is as-received, wet, dry, or net packaged mass and retain the corresponding moisture or soluble-solids test record. |
| `fuel_energy_conversion` | each on-site fuel | Energy | MJ | Retain purchased mass or volume, density when needed, and net calorific value; calculate energy separately for each fuel without combining fuel ledgers. |
| `electricity_and_heat_separation` | electricity, steam, and heat | Energy | kWh or MJ | Record purchased electricity, purchased steam, purchased heat, and internally generated heat or steam as separate exchanges; document every conversion factor. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Family A: purchased refined cane or beet sugar accepted at the formulation site. Family B: maple sap accepted at the sugarhouse or processing site. |
| starting_condition_role | Foreground gate input; upstream production is represented by linked supplier or background datasets. |
| product_classification_scope | One declared product within CPC 3.0 subclass 23530; the subclass contains two methodologically distinct product families. |
| recursive_input_rule | If a same-category intermediate crosses the boundary, record its exact product identity and supplier dataset once and exclude the upstream processes already represented by that dataset; do not recursively reapply this PCR. |
| upstream_dataset_requirement | Family A requires upstream datasets for refined cane sugar, refined beet sugar, ingredients, utilities, fuels, and packaging. Family B requires upstream datasets for maple sap, filtration materials, utilities, fuels, and packaging. |
| disclosure | Declare the selected family and product state, starting condition, included substeps, drying/crystallization/RO status, heat source and fuels, packaging bill of materials, site, period, and any excluded or shared operation. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_route_exclusivity` | foreground system | Model exactly one of Family A or Family B. Do not include inactive-family processes or assume both families occur. | `unsd-cpc-3-0-structure-2024` |
| `sb_family_a_start` | Family A | Start at purchased refined sugar receipt and include formulation, mixing or coating, conditional drying, cleaning, and packaging through released product. | `unsd-cpc-3-0-structure-2024`; `eu-pef-method-2021` |
| `sb_family_b_start` | Family B | Start at maple sap receipt and include filtration, evaporation/concentration, cleaning, packaging, and crystallization only for solid maple sugar. | `cornell-maple-beginners-notebook-2019`; `penn-state-maple-syrup-production` |
| `sb_complete_foreground` | selected route | Record all known material, water, energy, product, waste, wastewater, sludge, and direct elementary flows for included foreground operations. | `eu-pef-method-2021` |
| `sb_stationary_combustion` | on-site heat generation | Record each combusted fuel separately and calculate direct carbon dioxide, methane, and nitrous oxide; distinguish fossil and biogenic carbon dioxide. | `ipcc-2006-stationary-combustion`; `checkoway-et-al-maple-footprint-2024` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `route_a_formulation` | Family A formulation, mixing/coating, and conditional drying | conditional | Include only when `product_family: A`; drying rows apply only when drying occurs. | Foreground conversion of purchased refined sugar | kg formulated sugar leaving the operation |
| `route_b_maple_processing` | Family B sap filtration, evaporation, and conditional crystallization | conditional | Include only when `product_family: B`; crystallization output applies only to solid maple sugar. | Foreground conversion of received maple sap | kg maple syrup or maple sugar leaving the operation |
| `onsite_heat_generation` | On-site stationary heat or steam generation | conditional | Include when any selected-route operation combusts fuel on site. | Support-energy production and direct emissions | MJ useful heat or kg steam delivered |
| `equipment_cleaning` | Equipment cleaning and sanitation | required | Include cleaning attributable to the selected route and reporting period. | Shared foreground support process | kg released selected-route product |
| `packaging` | Route-specific final packaging | required | Include only packaging used for the single declared product. | Final foreground packaging and release | 1 kg net released product |

### Process: Family A formulation, mixing/coating, and conditional drying (`route_a_formulation`)

#### Inputs

##### Product flows

###### Purchased refined cane sugar (`a_refined_cane_sugar`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Refined cane sugar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass; zero when only beet sugar is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated sugar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_a_bom`

###### Purchased refined beet sugar (`a_refined_beet_sugar`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Refined beet sugar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted mass; zero when only cane sugar is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated sugar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_a_bom`

###### Added flavouring (`a_flavouring`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Food flavouring preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured formulation addition by exact commercial ingredient
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated sugar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_a_bom`

###### Added colour (`a_colour`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Food colour additive
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured formulation addition by exact colour substance or preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated sugar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_a_bom`

###### Anti-caking agent (`a_anticaking_silica`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Silicon dioxide, food grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured formulation addition; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated sugar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_a_bom`

###### Flavour or colour carrier (`a_carrier_maltodextrin`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Maltodextrin
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured carrier addition; not applicable when the purchased preparation contains no separately added carrier
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg formulated sugar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_a_bom`

###### Formulation water (`a_process_water`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered or batch-weighed water added to liquid coating or formulation; not applicable for wholly dry mixing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg formulated sugar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_a_operations`

###### Electricity (`a_electricity`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered use for dosing, mixing, coating, conveying, ventilation, and drying when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg formulated sugar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_a_operations`

###### Purchased steam (`a_purchased_steam`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased steam used in coating or drying; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg formulated sugar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_a_operations`

###### Purchased heat (`a_purchased_heat`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Thermal energy
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased heat used in coating or drying; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg formulated sugar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_a_operations`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Formulated refined sugar ready for packaging (`a_bulk_product`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Formulated refined sugar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted output after mixing/coating and after drying when drying applies
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch or campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_a_operations`

##### Waste flows

###### Family A product loss (`a_product_loss`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Off-spec formulated sugar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured spills, retained powder, coating overspray, rejects, and unrecovered start-up/shutdown sugar leaving as this single waste stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg formulated sugar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

##### Elementary flows

### Process: Family B sap filtration, evaporation, and conditional crystallization (`route_b_maple_processing`)

#### Inputs

##### Product flows

###### Received maple sap (`b_maple_sap`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Maple sap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted sap mass at the foreground gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg maple product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_b_operations`
- Sources: `cornell-maple-beginners-notebook-2019`

###### Filter aid (`b_filter_aid`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Diatomaceous earth, food grade
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured filter-aid addition; not applicable when no filter aid is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg maple product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_b_operations`
- Sources: `cornell-maple-beginners-notebook-2019`

###### Disposable filter medium (`b_filter_paper`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Cellulose filter paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured consumed filter-paper mass; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg maple product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_b_operations`
- Sources: `penn-state-maple-syrup-production`

###### Reusable filter medium make-up (`b_filter_cloth`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Polyester filter cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured make-up mass allocated over documented service life; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg maple product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route_b_operations`
- Sources: `penn-state-maple-syrup-production`

###### Process water (`b_process_water`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered water used for filter preparation, backwash, or product-contact processing, excluding separately recorded cleaning water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg maple product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_b_operations`

###### Electricity (`b_electricity`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered use for pumps, filtration, optional reverse osmosis, evaporation auxiliaries, and crystallization when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg maple product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_b_operations`
- Sources: `checkoway-et-al-maple-footprint-2024`

###### Purchased steam (`b_purchased_steam`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased steam for evaporation or crystallization; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg maple product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_b_operations`

###### Purchased heat (`b_purchased_heat`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Thermal energy
- Flow property / unit: Energy / MJ
- Amount rule: metered purchased heat for evaporation or crystallization; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg maple product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_b_operations`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bulk maple syrup (`b_bulk_maple_syrup`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Maple syrup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted syrup output after concentration and final filtration; not applicable for solid maple sugar after complete further conversion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch or campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_b_operations`
- Sources: `cornell-maple-beginners-notebook-2019`

###### Bulk granulated maple sugar (`b_bulk_maple_sugar`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Granulated maple sugar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted sugar after syrup concentration, crystallization, stirring, and screening; applicable only to solid maple sugar
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per batch or campaign
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_route_b_operations`
- Sources: `cornell-maple-beginners-notebook-2019`

##### Waste flows

###### Filtration residue (`b_filtration_residue`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Sugar sand with spent diatomaceous earth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured wet residue removed from syrup filtration; record sugar sand without filter aid as a separate dataset row when that is the actual waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg maple product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`
- Sources: `penn-state-maple-syrup-production`

###### Spent filter paper (`b_spent_filter_paper`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Spent cellulose filter paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured discarded filter paper mass; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg maple product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

###### Spent polyester filter cloth (`b_spent_filter_cloth`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Spent polyester filter cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured discarded cloth mass allocated to its recorded service; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg maple product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_release`

###### Maple-process wastewater (`b_wastewater`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Wastewater from maple processing
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered or mass-balanced process wastewater excluding separately recorded cleaning wastewater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg maple product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

###### Family B syrup product loss (`b_syrup_product_loss`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Off-spec maple syrup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured off-spec maple syrup; applicable only when Family B produces syrup
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg maple product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

###### Family B sugar product loss (`b_sugar_product_loss`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Off-spec maple sugar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured off-spec solid maple sugar; applicable only when Family B includes crystallization and solid-sugar finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg maple product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

##### Elementary flows

###### Evaporated process water (`b_water_vapour`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Water vapour to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: calculated from measured sap, product, liquid waste, and retained-water mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg maple product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_route_b_operations`

### Process: On-site stationary heat or steam generation (`onsite_heat_generation`)

#### Inputs

##### Product flows

###### Natural gas (`heat_natural_gas`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: measured quantity converted with documented net calorific value; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ useful heat or kg steam delivered to the selected route
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_heat`

###### Liquefied petroleum gas (`heat_lpg`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured quantity converted with documented net calorific value; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ useful heat or kg steam delivered to the selected route
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_heat`

###### Fuel oil (`heat_fuel_oil`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Distillate fuel oil
- Flow property / unit: Energy / MJ
- Amount rule: measured quantity converted with documented net calorific value; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ useful heat or kg steam delivered to the selected route
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_heat`
- Sources: `checkoway-et-al-maple-footprint-2024`

###### Fuelwood (`heat_fuelwood`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Fuelwood
- Flow property / unit: Energy / MJ
- Amount rule: measured dry or as-fired mass converted with documented moisture and net calorific value; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ useful heat or kg steam delivered to the selected route
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_heat`
- Sources: `checkoway-et-al-maple-footprint-2024`

###### Boiler feedwater (`heat_boiler_water`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Boiler feedwater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered make-up water entering on-site steam generation; not applicable for direct dry heat
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg steam delivered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_heat`

###### Heat-generation electricity (`heat_electricity`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered burner, fan, pump, feed, and control electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ useful heat or kg steam delivered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_heat`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Internally generated steam (`heat_steam_output`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Steam from on-site boiler
- Flow property / unit: Energy / MJ
- Amount rule: measured delivered steam energy; not applicable when only direct heat is generated
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_heat`

###### Internally generated thermal energy (`heat_output`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Thermal energy from on-site combustion
- Flow property / unit: Energy / MJ
- Amount rule: measured or efficiency-calculated useful heat delivered; not applicable when only metered steam is transferred
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_and_heat`

##### Waste flows

###### Wood-combustion ash (`heat_wood_ash`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Wood ash from boiler
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured ash sent to the declared treatment; not applicable when fuelwood is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ useful heat or kg steam delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

##### Elementary flows

###### Fossil carbon dioxide (`heat_co2_fossil`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: calculate separately from each fossil fuel energy input and applicable emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ useful heat or kg steam delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2006-stationary-combustion`

###### Biogenic carbon dioxide (`heat_co2_biogenic`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: calculate separately from fuelwood energy input and applicable emission factor; not applicable when fuelwood is absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ useful heat or kg steam delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2006-stationary-combustion`

###### Methane (`heat_ch4`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Methane to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: sum fuel-specific methane emissions calculated from each combusted fuel and technology factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ useful heat or kg steam delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2006-stationary-combustion`

###### Nitrous oxide (`heat_n2o`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: sum fuel-specific nitrous oxide emissions calculated from each combusted fuel and technology factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ useful heat or kg steam delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ipcc-2006-stationary-combustion`

### Process: Equipment cleaning and sanitation (`equipment_cleaning`)

#### Inputs

##### Product flows

###### Cleaning water (`cleaning_water`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered water attributable to selected-route cleaning and sanitation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`

###### Alkaline cleaning agent (`cleaning_naoh`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured formulated-product mass and concentration; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`

###### Sanitizing agent (`cleaning_peracetic_acid`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Peracetic acid solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured formulated-product mass and concentration; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`

###### Cleaning electricity (`cleaning_electricity`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity for clean-in-place pumps and sanitation equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`

###### Cleaning steam (`cleaning_steam`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: metered steam used for sanitation; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Cleaning wastewater (`cleaning_wastewater`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Wastewater from equipment cleaning
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered discharge or inlet-water mass balance, kept separate from maple-process wastewater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning`

###### Wastewater-treatment sludge (`cleaning_sludge`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Sludge from on-site wastewater treatment
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured wet mass with solids content and treatment destination; not applicable when treatment is off site and no sludge leaves the foreground
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

##### Elementary flows

### Process: Route-specific final packaging (`packaging`)

#### Inputs

##### Product flows

###### Family A bulk product (`pack_in_a_product`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Formulated refined sugar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer to packaging; applicable only to Family A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Bulk maple syrup (`pack_in_maple_syrup`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Maple syrup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer to packaging; applicable only to Family B syrup
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Bulk maple sugar (`pack_in_maple_sugar`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Granulated maple sugar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer to packaging; applicable only to Family B solid sugar
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

###### Glass primary container (`pack_glass_container`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Glass food container
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured purchased mass allocated to released units; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### PET primary container (`pack_pet_container`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Polyethylene terephthalate bottle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured purchased mass allocated to released units; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### HDPE primary container (`pack_hdpe_container`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: High-density polyethylene bottle
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured purchased mass allocated to released units; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### Steel primary container (`pack_steel_can`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Tinplate steel food can
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured purchased mass allocated to released units; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### Paper primary bag (`pack_paper_bag`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Kraft paper food bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured purchased mass allocated to released units; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### LDPE primary pouch (`pack_ldpe_pouch`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Low-density polyethylene food pouch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured purchased mass allocated to released units; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### Metal closure (`pack_metal_closure`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Tinplate steel closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: counted closure mass converted from verified unit mass; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### Plastic closure (`pack_pp_closure`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Polypropylene closure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: counted closure mass converted from verified unit mass; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### Paper label (`pack_paper_label`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Paper label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: counted label mass converted from verified unit mass; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### Corrugated shipping case (`pack_corrugated_case`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased case mass allocated by packed units; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### Pallet stretch film (`pack_stretch_film`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured film mass allocated by palletized released product; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### Wooden pallet (`pack_wood_pallet`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased or pooled pallet mass allocated by documented trips and released product; not applicable when absent
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging`

###### Packaging electricity (`pack_electricity`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered filling, sealing, labelling, and palletizing electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged formulated refined sugar (`packaged_formulated_sugar`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Packaged formulated refined sugar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net released product; applicable only to Family A
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference amount 1 kg
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

###### Packaged maple syrup (`packaged_maple_syrup`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Maple syrup
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net released product; applicable only to Family B syrup
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference amount 1 kg
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`
- Sources: `cornell-maple-beginners-notebook-2019`

###### Packaged maple sugar (`packaged_maple_sugar`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Packaged granulated maple sugar
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured net released product; applicable only to Family B solid sugar
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: reference amount 1 kg
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`
- Sources: `cornell-maple-beginners-notebook-2019`

##### Waste flows

###### Formulated-sugar packaging loss (`pack_formulated_sugar_loss`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Formulated refined sugar lost during packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured unrecovered Family A product lost at filling, sealing, inspection, and changeover
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

###### Maple-syrup packaging loss (`pack_maple_syrup_loss`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Maple syrup lost during packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured unrecovered maple syrup lost at filling, sealing, inspection, and changeover
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

###### Maple-sugar packaging loss (`pack_maple_sugar_loss`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Maple sugar lost during packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured unrecovered solid maple sugar lost at filling, sealing, inspection, and changeover
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

###### Waste glass packaging (`pack_waste_glass`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Waste glass food container
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected or broken glass packaging sent to its declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

###### Waste PET packaging (`pack_waste_pet`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Waste polyethylene terephthalate packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected PET packaging sent to its declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

###### Waste HDPE packaging (`pack_waste_hdpe`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Waste high-density polyethylene packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected HDPE packaging sent to its declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

###### Waste steel packaging (`pack_waste_steel`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Waste tinplate steel packaging
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected cans and closures sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

###### Waste kraft-paper bag (`pack_waste_paper_bag`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Waste kraft paper food bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected kraft-paper food bags sent to their declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

###### Waste paper label (`pack_waste_paper_label`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Waste paper label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected paper labels sent to their declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

###### Waste corrugated case (`pack_waste_corrugated_case`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Waste corrugated fibreboard box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected corrugated fibreboard boxes sent to their declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

###### Waste LDPE packaging (`pack_waste_ldpe`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured rejected pouches and stretch film sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_release`

###### Waste wooden pallets (`pack_waste_wood_pallet`)

This card records the named atomic exchange for the stated route condition.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured pallets leaving the reuse pool for treatment, allocated to the selected product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_and_release`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide_routes` | all foreground operations | First subdivide Family A, Family B, syrup, solid sugar, and packaging lines using meters, batch records, and production time; never allocate burdens across the two product families by default. | `eu-pef-method-2021` |
| `alloc_internal_heat` | on-site heat generation | Assign metered steam or useful heat directly to the consuming route; allocate only the unmetered remainder using a documented physical driver such as delivered energy. | `eu-pef-method-2021` |
| `alloc_shared_cleaning` | equipment cleaning | Assign recipe- or campaign-specific cleaning directly; otherwise allocate shared cleaning using recorded cleaning time, vessel volume, or product-contact area and disclose the selected physical driver. | `eu-pef-method-2021` |
| `alloc_recovered_material` | recovered product, filter residue, ash, and packaging waste | Treat a material as a co-product only when it has a documented beneficial use and economic or functional value; otherwise model it as waste with its treatment. Report avoided-burden or recycling substitution only in a separate declared scenario. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_route_a_bom` | `route_a_formulation` | each Family A ingredient | formulation and receipt records | ingredient identity; supplier; lot; accepted mass; addition mass; formulation code | reconcile controlled recipe, scale tickets, and inventory issues | kg | each batch | full declared reporting period | each formulation site and product | sum each ingredient separately and divide by accepted formulated output | calibrated scale records; recipe approval; supplier specification; inventory reconciliation |
| `cp_route_a_operations` | `route_a_formulation` | water, electricity, steam, heat, and output | meter and batch records | meter start/end; batch id; drying status; input/output mass; moisture; rejects | submeter or allocate from documented physical driver | kg; kWh; MJ | each batch or meter interval | full declared reporting period | each formulation line | aggregate only batches of the same declared product and route | meter calibration; batch sheets; moisture tests; allocation worksheet |
| `cp_route_b_operations` | `route_b_maple_processing` | sap, filtration materials, utilities, and maple outputs | scale, meter, and process records | sap mass; initial/final soluble solids; RO status; filter media; evaporation output; crystallization status; syrup/sugar mass | direct measurement with hydrometer/refractometer and equipment logs as applicable | kg; kWh; MJ | each boil or batch | complete declared maple campaign | each sugarhouse and technology route | aggregate only equivalent syrup or solid-sugar routes | instrument calibration; boil log; filter log; product release record |
| `cp_fuel_and_heat` | `onsite_heat_generation` | each fuel and delivered heat/steam | invoice, tank, scale, moisture, and meter records | fuel identity; mass or volume; density; moisture; net calorific value; steam/heat delivery | reconcile purchases and inventory change; convert each fuel separately | kg; m3; MJ; kWh | each delivery and reporting interval | full declared reporting period | each combustion unit | calculate each fuel energy separately before summing delivered energy | invoices; tank/scale calibration; calorific-value source; boiler meter; efficiency evidence |
| `cp_cleaning` | `equipment_cleaning` | water, cleaning agents, energy, wastewater | clean-in-place and sanitation logs | route served; water; chemical product; concentration; electricity; steam; discharge | meter, weigh, or use validated dosing records | kg; kWh; MJ | each cleaning event | full declared reporting period | each shared or dedicated cleaning system | direct assignment first; otherwise apply declared physical allocation driver | cleaning log; dosing calibration; chemical specification; discharge meter |
| `cp_packaging` | `packaging` | each packaging component and packaging energy | purchase, specification, count, and line records | material identity; unit mass; units used; rejects; reuse trips; electricity | verify component mass and reconcile purchases, stocks, and packed units | kg; count; kWh | each packaging lot and reporting interval | full declared reporting period | each packaging line and product | calculate each component separately per kg net released product | supplier specification; sample weighing; stock reconciliation; line meter |
| `cp_waste_and_release` | all | products, losses, residues, wastewater, sludge, ash, and packaging wastes | scale, discharge, treatment, and release records | stream identity; wet mass; dry solids when relevant; destination; released product mass | weigh or meter each stream and reconcile with mass balance | kg | each batch or disposal event | full declared reporting period | each site and product | keep streams separate by physical identity and destination | scale/meter calibration; waste transfer note; product release; mass-balance worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all exchanges | normalized exchange = route-attributable exchange / net released mass of the single declared product | exchange amount; released product mass | amount per 1 kg reference product | `eu-pef-method-2021` |
| `calc_fuel_energy` | each fuel | fuel energy = measured fuel quantity × documented density when needed × net calorific value; calculate by fuel before aggregation | fuel mass or volume; density; moisture; net calorific value | MJ by fuel | `ipcc-2006-stationary-combustion` |
| `calc_combustion_emissions` | CO2, CH4, and N2O | emission by gas and fuel = fuel energy × applicable fuel/technology emission factor; sum only after retaining fuel-resolved calculations | MJ by fuel; emission factor by gas and fuel | kg CO2 fossil; kg CO2 biogenic; kg CH4; kg N2O | `ipcc-2006-stationary-combustion` |
| `calc_mass_balance` | each selected route | mass-balance difference = total measured mass inputs - products - separately measured wastes - wastewater - accounted evaporation or retained water; investigate unexplained differences | ingredient or sap inputs; water; products; wastes; wastewater; water vapour | route mass-balance residual |  |
| `calc_packaging_mass` | each packaging component | component mass = verified unit mass × consumed units, adjusted for documented reusable trips where applicable | unit mass; units consumed; reuse trips; released product | kg component per 1 kg product | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | dataset | Declare exactly one family, one final product state, one formulation or maple route, and the included conditional steps. | product master; process flow diagram; batch/campaign records |
| `dq_completeness` | foreground inventory | Reconcile all known inputs and outputs, including utilities, every actual fuel, each ingredient, each packaging component, losses, filter residues, wastewater, sludge, ash, and direct emissions. | reconciled ledgers; meters; waste transfer records; mass balance |
| `dq_representativeness` | activity data | Use records representative of the declared site, technology, geography, product, and period; explain exclusions, substitutions, shutdowns, and abnormal campaigns. | data-quality assessment and retained raw records |
| `dq_atomic_identity` | flows | Confirm one Tiangong flow UUID for each concrete exchange before review or publication; add any actual ingredient, fuel, cleaning chemical, packaging component, waste, or emission not represented here as its own row. | direct-read flow record and identity review |
| `dq_range_evidence` | quantitative ranges | Do not create a range from one case or duplicate a single value as equal bounds. Any later empirical range requires at least two independent original sources with compatible boundary, unit, and basis. | source comparison and range-inference note |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_one_family` | dataset | Pass only when exactly one of Family A or Family B is selected and inactive-family exchanges are absent. | `unsd-cpc-3-0-structure-2024` |
| `val_product_state` | Family B | Pass only when syrup or solid_sugar is declared; require crystallization for solid_sugar and prohibit it as a default syrup step. | `cornell-maple-beginners-notebook-2019` |
| `val_family_a_steps` | Family A | Require purchased refined sugar, each actual flavouring/colour/anti-caking/carrier input, mixing or coating, conditional drying disclosure, product loss, cleaning, and packaging. | `eu-pef-method-2021` |
| `val_family_b_steps` | Family B | Require maple sap receipt, filtration media, filtration residue, evaporation/concentration, product loss, wastewater, cleaning, packaging, and conditional crystallization disclosure. | `cornell-maple-beginners-notebook-2019`; `penn-state-maple-syrup-production` |
| `val_fuels_and_emissions` | on-site combustion | Require a separate input for every actual fuel and fuel-resolved calculations for fossil CO2, biogenic CO2 when biomass is used, CH4, and N2O. | `ipcc-2006-stationary-combustion` |
| `val_packaging_atomicity` | packaging | Require every actual primary, closure, label, secondary, tertiary, and reusable packaging component as a separate material flow and every physically separate packaging-waste stream as a separate output. | `eu-pef-method-2021` |
| `val_reference_mass` | reference product | Require 1 kg net released product with the Mass and Units of mass UUIDs stated in section 3; packaging shall not be included in the reference mass. |  |
| `val_mass_balance` | each route | Require an explained route mass-balance residual and prohibit hiding product loss, filter residue, wastewater, sludge, packaging waste, or evaporation in an unclassified difference. | `eu-pef-method-2021` |
| `val_range_provenance` | ranges | Reject equal lower/upper bounds copied from one value and reject inferred empirical ranges without at least two independent compatible original sources. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for one declared product and route |
| downstream_use | secondary_dataset; background_dataset after review, UUID completion, and context-specific representativeness assessment |
| allowed_use | Product-specific LCI, LCA, EPD, footprint, process, and lifecyclemodel work for the declared site, technology, geography, period, family, product state, and packaging configuration |
| excluded_use | Averaging Family A with Family B; representing upstream sugar production or maple cultivation/tapping; representing confectionery or artificial maple-flavoured syrup; comparative claims without equivalent boundaries and review |
| required_metadata | PCR id; product family and state; exact product identity; formulation or sap source; included steps; drying, RO, filtration, crystallization, heat and fuel technologies; packaging bill of materials; site; geography; period; allocation; flow UUIDs; source and data-quality references |
| required_quality_disclosure | Primary-data share; measurement methods; calibration; temporal, geographical, and technological representativeness; allocation; mass-balance residual; missing UUIDs; proxies; exclusions; uncertainty; unresolved range evidence |
| update_trigger | Change in family or product state, formulation, sap source, filtration/RO/evaporation/crystallization technology, fuel or electricity supply, packaging, allocation, site, reporting period, product specification, flow UUID, or material source evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2024` | official_guidance | United Nations Statistics Division, Draft Structure of the Central Product Classification, Version 3.0, subclass 23530, https://unstats.un.org/UNSDWebsite/statcom/session_55/documents/BG-4e-draft-CPC-structure-E.pdf (retrieved 2026-08-24) | Official category title and evidence that the subclass contains the formulated refined-sugar family and the maple sugar/syrup family |
| `cornell-maple-beginners-notebook-2019` | extension_guidance | Cornell Maple Program, Maple Syrup Production: Beginner's Notebook, 1st ed., https://mapleresearch.org/wp-content/uploads/Beginner-Notebook-1st-Edition.pdf (retrieved 2026-08-24) | Maple sap processing, filtration, evaporation, granular maple sugar crystallization/stirring/screening, and airtight packaging decomposition |
| `penn-state-maple-syrup-production` | extension_guidance | Penn State Extension, Maple Syrup Production, https://extension.psu.edu/maple-syrup-production (retrieved 2026-08-24) | Pre-boil sap filtration, evaporation equipment and heat source, sugar-sand filtration, filter media, and filling containers |
| `checkoway-et-al-maple-footprint-2024` | literature | Checkoway, Lewis, and Keoleian, Carbon and Energy Footprinting across Archetypes for U.S. Maple Syrup Production, Environmental Science & Technology 58(49), DOI: 10.1021/acs.est.4c03067; OpenAlex: W4403183730 | Evidence that maple production routes vary by RO, electricity, fuel oil, fuelwood, scale, and equipment; supports route-specific energy and fuel collection rather than a default range |
| `eu-pef-method-2021` | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-24) | Company-specific bill of materials and manufacturing inputs/outputs, data quality, packaging, subdivision, physical allocation, and transparent reporting |
| `ipcc-2006-stationary-combustion` | method_factor | IPCC, 2006 Guidelines for National Greenhouse Gas Inventories, Volume 2 Energy, Chapter 2 Stationary Combustion, https://archive.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf (retrieved 2026-08-24) | Fuel-specific energy activity data and direct CO2, CH4, and N2O calculation method |
