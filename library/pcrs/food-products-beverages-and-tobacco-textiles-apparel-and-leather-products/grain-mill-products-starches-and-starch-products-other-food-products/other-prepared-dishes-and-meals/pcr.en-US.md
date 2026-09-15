---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-prepared-dishes-and-meals
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other prepared dishes and meals

## 1. Scope and Applicability

This PCR applies to factory-manufactured prepared dishes and meals within CPC 3.0 subclass 23997. A covered product contains at least two distinct main ingredients, is prepared, seasoned and cooked, and is presented in vacuum-packed, canned or frozen form. Examples include frozen pizza and quiche, dishes based on eggs, cheese, tofu or meat substitutes, and other prepared dishes and meals not elsewhere classified.

The PCR does not cover meals whose primary basis is meat; fish, molluscs or crustaceans; vegetables, pulses or potatoes; stuffed pasta or couscous; homogenized composite food preparations such as infant food; or fresh or otherwise preserved but non-frozen pizza or quiche. The exact CPC inclusion and exclusion boundary is authoritative (`un-cpc-v3-2025`).

The foreground boundary starts with ingredients, processing aids, packaging components and utilities as received at the manufacturing site and ends with net saleable finished product at the factory gate. Distribution, retail, consumer reheating and end-of-life are outside this foreground production dataset, although downstream lifecycle models may add them.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.other-prepared-dishes-and-meals |
| classification_refs | CPC 3.0: 23997, exact |
| covered_products | Prepared dishes and meals with at least two distinct main ingredients that are prepared, seasoned and cooked and presented vacuum-packed, canned or frozen; frozen pizza and quiche; egg-, cheese-, tofu- or meat-substitute-based prepared dishes; other prepared dishes and meals n.e.c. |
| excluded_products | Meat-based meals (21186); fish-, mollusc- or crustacean-based meals (21241); vegetable-, pulse- or potato-based meals (21391); stuffed-pasta and couscous dishes (23722); homogenized composite food preparations including infant food (23991); fresh or preserved but non-frozen pizza and quiche (23430) |
| representative_product | Production mix of finished manufactured products within CPC 23997, declared by recipe family and preservation route |
| production_route | Ingredient receipt and preparation; formulation and seasoning; cooking or other validated heat treatment; assembly or filling; package forming and sealing; route-specific vacuum packing, canning/retorting, chilling or quick freezing; finished-product holding |
| market_state | Net saleable vacuum-packed, canned or frozen finished product at the factory gate; chilled products are included only when their product identity otherwise conforms to the CPC 23997 boundary and is not an excluded non-frozen pizza or quiche |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A prepared, seasoned and cooked multi-ingredient dish or meal conforming to CPC 23997 |
| How much | 1,000 kg net saleable finished product |
| How well | Conforms to the declared recipe, ingredient-basis classification, preservation route, package configuration and validated food-safety specifications |
| How long or cycle | One manufacturing reporting period, with batch or campaign traceability and no consumer storage or use duration included |
| reference_flow_link | The normalized factory-gate output recorded as `finished_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net saleable finished product |
| Reference product flow | Other prepared dishes and meals `92b0b2f5-905b-45e9-8182-b0ad6ed26cfc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | recipe family; identities and mass shares of at least two distinct main ingredients; ingredient-basis classification rationale; preparation and cooking route; preservation route (`vacuum_packed`, `canned`, `frozen`, or qualifying `chilled`); package component identities and masses; net content; site and geography; production period; allocation method; treatment destination for each waste and wastewater flow; consumer reheating excluded or included downstream |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground exchanges to 1,000 kg net saleable finished product, excluding secondary transport packaging not sold with the product. |
| `net_saleable_output` | finished product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine output from verified net-content mass and accepted saleable units; rejects, retained samples and giveaway are not saleable output. |
| `ingredient_mass` | each recipe ingredient | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record every ingredient separately on an as-received mass basis and retain moisture or solids information when it materially affects recipe comparison. |
| `package_component_mass` | each primary or secondary package component | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Weigh or calculate each package component separately from unit mass and packed unit count; no combined packaging-material total is conforming. |
| `energy_preservation` | electricity, natural gas and purchased steam | Energy | kWh, MJ or kg steam as metered | Preserve the original meter or invoice unit and document every conversion factor used for reference-flow normalization. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | factory-gate foreground | Include ingredient receipt, storage and preparation; formulation and seasoning; cooking or validated heat treatment; assembly or filling; package forming and sealing; route-specific cooling, quick freezing, retorting or vacuum packing; finished-product holding; cleaning; directly controlled utility use; rejects; packaging scrap; refrigerant losses; direct combustion emissions; and on-site wastewater treatment when operated by the producer. | `un-cpc-v3-2025`; `codex-cxc-8-1976`; `jrc-fdm-bref-2019`; `schmidt-rivera-2019` |
| `boundary_upstream_inputs` | purchased inputs | Link every ingredient, processing chemical, packaging component, electricity supply, fuel, steam and off-site treatment service to an upstream dataset appropriate to the declared geography, technology and period. | `eu-pef-2021` |
| `boundary_downstream_exclusion` | distribution, retail, use and end-of-life | Exclude distribution, retail storage, consumer reheating and product/package end-of-life from the foreground production dataset and disclose that exclusion; include them only in an explicitly expanded downstream lifecycle model. | `eu-pef-2021`; `schmidt-rivera-2019` |
| `boundary_no_hidden_cutoff` | material and energy completeness | Do not omit an actual recipe ingredient, package component, fuel, refrigerant, waste stream or directly released pollutant because it is small; document any unavailable secondary dataset as a data gap or disclosed proxy. | `eu-pef-2021` |
| `boundary_wastewater_route` | wastewater | Model process wastewater as a waste flow to off-site treatment, or include on-site treatment and separately record discharged water and each monitored pollutant; never count both routes for the same wastewater quantity. | `jrc-fdm-bref-2019` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ingredients, processing aids, packaging components and utilities received at the manufacturing site in their actual purchased state |
| starting_condition_role | Foreground gate-in condition; upstream production remains represented by linked datasets |
| product_classification_scope | Only finished products satisfying CPC 3.0 subclass 23997 and its explicit exclusions |
| recursive_input_rule | A purchased prepared component that itself falls in this PCR category remains a separately quantified upstream product input. Link its supplier dataset and do not recursively re-expand it inside the receiving process; disclose its mass, recipe state and supplier boundary. |
| upstream_dataset_requirement | Use geographically, temporally and technologically representative upstream datasets for every purchased input and disclose proxies or missing datasets |
| disclosure | Declare recipe family, main-ingredient basis, preservation route, packaging configuration, product state, foreground start and end, on-site versus off-site treatment, excluded downstream stages and allocation method |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepared_meal_manufacturing` | Prepared-meal manufacture, preservation and packing | `required` | Always included | Foreground production from received ingredients through saleable packaged output | 1,000 kg net saleable finished product |
| `on_site_wastewater_treatment` | On-site wastewater treatment and discharge | `conditional` | Include only when the producer operates treatment within the foreground boundary; otherwise send `process_wastewater` to an off-site treatment dataset | Foreground treatment of manufacturing wastewater | kg or m3 wastewater treated, normalized to 1,000 kg finished product |

The cards below are atomic exchanges, not an exhaustive recipe. The concrete dataset must add every other actual ingredient, processing chemical, packaging component, waste and emission as its own atomic exchange. A row named only “ingredients”, “packaging materials”, “energy carriers” or “wastewater and residues” is prohibited. No quantitative inventory range is retained because the reviewed studies are case-specific or cover materially different recipe boundaries; foreground measurement is mandatory.

### Process: Prepared-meal manufacture, preservation and packing (`prepared_meal_manufacturing`)

#### Inputs

##### Product flows

###### Wheat-flour recipe input (`wheat_flour`)

Record wheat flour only when it is an actual ingredient, such as in a frozen pizza or quiche base.

- Selected flow: Wheat flour
- Flow property / unit: Mass / kg
- Amount rule: As-received flour mass issued to conforming production, net of separately recorded returns
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_inputs`
- Sources: `un-cpc-v3-2025`; `schmidt-rivera-2019`

###### Liquid-whole-egg recipe input (`liquid_whole_egg`)

Record liquid whole egg only when it is an actual recipe ingredient.

- Selected flow: Liquid whole egg
- Flow property / unit: Mass / kg
- Amount rule: Metered or weighed as-received liquid whole egg issued to conforming production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_inputs`
- Sources: `un-cpc-v3-2025`

###### Cheddar-cheese recipe input (`cheddar_cheese`)

Record cheddar cheese only when it is the actual cheese used; another cheese must be a separate precisely named row.

- Selected flow: Cheddar cheese
- Flow property / unit: Mass / kg
- Amount rule: Weighed as-received cheese issued to conforming production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_inputs`
- Sources: `un-cpc-v3-2025`

###### Tofu recipe input (`tofu`)

Record tofu only for a recipe that actually uses tofu.

- Selected flow: Tofu
- Flow property / unit: Mass / kg
- Amount rule: Weighed as-received tofu issued to conforming production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_inputs`
- Sources: `un-cpc-v3-2025`; `schmidt-rivera-2019`

###### Seitan recipe input (`seitan`)

Record seitan only for a recipe that actually uses this meat substitute.

- Selected flow: Seitan
- Flow property / unit: Mass / kg
- Amount rule: Weighed as-received seitan issued to conforming production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_inputs`
- Sources: `un-cpc-v3-2025`; `schmidt-rivera-2019`

###### Refined-vegetable-oil recipe input (`refined_vegetable_oil`)

Record refined vegetable oil when it is added to the recipe or used for cooking.

- Selected flow: Refined vegetable oil
- Flow property / unit: Mass / kg
- Amount rule: Tank issue, batch dispense or verified purchase-to-stock balance for conforming production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_inputs`
- Sources: `schmidt-rivera-2019`

###### Sodium-chloride recipe input (`sodium_chloride`)

Record sodium chloride when it is added as seasoning.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: Weighed batch addition to conforming production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_recipe_inputs`
- Sources: `schmidt-rivera-2019`

###### Potable-water input (`potable_water`)

Record all potable water entering the foreground process once, with recipe-contact, washing, cleaning and make-up uses retained as disaggregated raw fields.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: Submetered water use; if one meter serves several uses, reconcile end-use readings or documented engineering estimates without duplicating the site total
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_utilities`
- Sources: `jrc-fdm-bref-2019`; `codex-cxc-1-1969`

###### Grid-electricity input (`grid_electricity`)

Record purchased grid electricity used by preparation, cooking, filling, sealing, cooling, freezing, cold holding and cleaning equipment.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Process submeter total; otherwise allocate the verified site meter total under `calc_shared_utility`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_utilities`
- Sources: `jrc-fdm-bref-2019`; `schmidt-rivera-2019`

###### Natural-gas input (`natural_gas`)

Record natural gas only when it is combusted within the foreground boundary for cooking, retorting, hot-water or steam generation.

- Selected flow: Natural gas
- Flow property / unit: Net calorific value / MJ
- Amount rule: Metered fuel volume converted using the supplier-declared net calorific value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_and_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Purchased-steam input (`purchased_steam`)

Record purchased steam separately from on-site fuel and electricity when steam crosses the foreground boundary.

- Selected flow: Steam
- Flow property / unit: Mass / kg
- Amount rule: Supplier meter or invoice quantity corrected for verified condensate returns where applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_and_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Tinplate-can component (`tinplate_can`)

Record the tinplate can body and ends as one weighed can component only when this package is used.

- Selected flow: Tinplate steel can
- Flow property / unit: Mass / kg
- Amount rule: Verified empty-can mass multiplied by accepted packed unit count, plus separately recorded process scrap
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources: `jrc-fdm-bref-2019`

###### Polypropylene-tray component (`polypropylene_tray`)

Record the polypropylene tray only when this package component is used.

- Selected flow: Polypropylene tray
- Flow property / unit: Mass / kg
- Amount rule: Verified tray unit mass multiplied by accepted packed unit count, plus separately recorded process scrap
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources: `jrc-fdm-bref-2019`; `schmidt-rivera-2019`

###### Polyethylene-lidding-film component (`polyethylene_lidding_film`)

Record polyethylene lidding or vacuum film separately from rigid trays and cartons.

- Selected flow: Polyethylene lidding film
- Flow property / unit: Mass / kg
- Amount rule: Issued roll mass minus returned roll and separately recorded film scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources: `jrc-fdm-bref-2019`; `codex-cxc-8-1976`

###### Paperboard-carton component (`paperboard_carton`)

Record the paperboard retail carton separately from the primary food-contact package.

- Selected flow: Paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: Verified carton unit mass multiplied by accepted packed unit count, plus separately recorded process scrap
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources: `jrc-fdm-bref-2019`

###### R-404A-refrigerant make-up (`r404a_refrigerant`)

Record R-404A only when this refrigerant is present in directly controlled cooling or freezing equipment; each other refrigerant requires its own card.

- Selected flow: Refrigerant R-404A
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant purchased or added during the reporting period, reconciled with opening, closing and recovered inventory under `calc_refrigerant_loss`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- Sources: `jrc-fdm-bref-2019`; `schmidt-rivera-2019`

##### Waste flows

_None entering this process._

##### Elementary flows

_None entering this process._

#### Outputs

##### Product flows

###### Net saleable finished product (`finished_product`)

This is the quantitative reference output after final quality acceptance and package sealing.

- Selected flow: Other prepared dishes and meals `92b0b2f5-905b-45e9-8182-b0ad6ed26cfc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Normalize accepted net-content mass to exactly 1,000 kg under `calc_reference_normalization`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_product`
- Sources: `un-cpc-v3-2025`

##### Waste flows

###### Prepared-food waste (`food_waste`)

Record edible or inedible prepared-food material rejected or lost from this process, with its treatment destination disclosed.

- Selected flow: Waste prepared food
- Flow property / unit: Mass / kg
- Amount rule: Weighed reject, spill and retained-product waste leaving the foreground process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `schmidt-rivera-2019`

###### Food-processing wastewater (`process_wastewater`)

Record wastewater leaving manufacturing for on-site or off-site treatment. Do not combine it with solid food waste.

- Selected flow: Wastewater from food processing
- Flow property / unit: Volume / m3
- Amount rule: Effluent flow meter or verified water balance for the manufacturing wastewater collection point
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `jrc-fdm-bref-2019`

###### Waste-polyethylene output (`waste_polyethylene`)

Record polyethylene trim and rejected lidding or vacuum film separately.

- Selected flow: Waste polyethylene
- Flow property / unit: Mass / kg
- Amount rule: Weighed polyethylene scrap leaving the process, by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `jrc-fdm-bref-2019`

###### Waste-polypropylene output (`waste_polypropylene`)

Record rejected polypropylene trays separately.

- Selected flow: Waste polypropylene
- Flow property / unit: Mass / kg
- Amount rule: Weighed polypropylene scrap leaving the process, by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `jrc-fdm-bref-2019`

###### Waste-paperboard output (`waste_paperboard`)

Record rejected paperboard cartons and clean paperboard trim separately.

- Selected flow: Waste paperboard
- Flow property / unit: Mass / kg
- Amount rule: Weighed paperboard scrap leaving the process, by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `jrc-fdm-bref-2019`

###### Waste-tinplate output (`waste_tinplate`)

Record rejected tinplate cans and metal trim separately.

- Selected flow: Waste tinplate steel
- Flow property / unit: Mass / kg
- Amount rule: Weighed tinplate scrap leaving the process, by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_outputs`
- Sources: `jrc-fdm-bref-2019`

##### Elementary flows

###### Fossil-carbon-dioxide emission (`fossil_carbon_dioxide`)

Record direct fossil carbon dioxide from on-site fuel combustion; exclude upstream fuel-cycle emissions.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or natural-gas consumption multiplied by a disclosed jurisdiction-appropriate factor under `calc_direct_combustion_emission`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Methane emission (`methane_air`)

Record direct methane from on-site fuel combustion separately from carbon dioxide.

- Selected flow: Methane, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or natural-gas consumption multiplied by a disclosed jurisdiction-appropriate factor under `calc_direct_combustion_emission`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Nitrous-oxide emission (`nitrous_oxide_air`)

Record direct nitrous oxide from on-site fuel combustion separately.

- Selected flow: Nitrous oxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or natural-gas consumption multiplied by a disclosed jurisdiction-appropriate factor under `calc_direct_combustion_emission`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Nitrogen-monoxide emission (`nitrogen_monoxide_air`)

Record nitrogen monoxide as its own direct air emission when measured or factorized.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or natural-gas consumption multiplied by a disclosed species-specific factor under `calc_direct_combustion_emission`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Nitrogen-dioxide emission (`nitrogen_dioxide_air`)

Record nitrogen dioxide separately from nitrogen monoxide when measured or factorized.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or natural-gas consumption multiplied by a disclosed species-specific factor under `calc_direct_combustion_emission`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `jrc-fdm-bref-2019`

###### R-404A-refrigerant emission (`r404a_air`)

Record direct R-404A loss from foreground cooling or freezing equipment as a separate air emission.

- Selected flow: Refrigerant R-404A, to air
- Flow property / unit: Mass / kg
- Amount rule: Opening charge plus additions minus closing charge and recovered refrigerant under `calc_refrigerant_loss`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- Sources: `jrc-fdm-bref-2019`; `schmidt-rivera-2019`

### Process: On-site wastewater treatment and discharge (`on_site_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment electricity (`wastewater_treatment_electricity`)

Record electricity used by on-site wastewater treatment separately from manufacturing electricity when the treatment process is included.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Treatment-plant submeter total normalized to treated wastewater attributable to conforming production
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_inputs`
- Sources: `jrc-fdm-bref-2019`

###### Sodium-hydroxide treatment input (`sodium_hydroxide`)

Record sodium hydroxide only when dosed in the on-site treatment process.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Delivery, tank or dosing-pump record reconciled over the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_inputs`
- Sources: `jrc-fdm-bref-2019`

###### Ferric-chloride treatment input (`ferric_chloride`)

Record ferric chloride only when dosed for phosphorus or solids removal.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Delivery, tank or dosing-pump record reconciled over the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_inputs`
- Sources: `jrc-fdm-bref-2019`

##### Waste flows

###### Manufacturing-wastewater input (`wastewater_input`)

This card receives the same physical wastewater recorded as `process_wastewater`; the linked amount must reconcile exactly.

- Selected flow: Wastewater from food processing
- Flow property / unit: Volume / m3
- Amount rule: Flow-metered wastewater entering on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `jrc-fdm-bref-2019`

##### Elementary flows

_None entering this process._

#### Outputs

##### Product flows

_None leaving this process._

##### Waste flows

###### Wastewater-treatment sludge (`wastewater_sludge`)

Record dewatered sludge leaving on-site treatment separately from food waste and packaging scrap.

- Selected flow: Wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Weighbridge, container or dewatering record on a declared wet-mass basis with dry-solids content retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `jrc-fdm-bref-2019`

##### Elementary flows

###### Treated-water discharge (`treated_water_discharge`)

Record the water mass discharged directly to the receiving water body when on-site treatment and direct discharge are in scope.

- Selected flow: Water, river
- Flow property / unit: Volume / m3
- Amount rule: Final-effluent flow meter total
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `jrc-fdm-bref-2019`

###### Chemical-oxygen-demand discharge (`cod_to_water`)

Record COD load as a distinct monitored wastewater indicator.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Final-effluent volume multiplied by representative COD concentration under `calc_wastewater_pollutant_load`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `jrc-fdm-bref-2019`

###### Five-day-biochemical-oxygen-demand discharge (`bod5_to_water`)

Record BOD5 load separately from COD.

- Selected flow: Biochemical oxygen demand, 5 days, to water
- Flow property / unit: Mass / kg
- Amount rule: Final-effluent volume multiplied by representative BOD5 concentration under `calc_wastewater_pollutant_load`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `jrc-fdm-bref-2019`

###### Total-suspended-solids discharge (`tss_to_water`)

Record TSS load as its own wastewater indicator.

- Selected flow: Total suspended solids, to water
- Flow property / unit: Mass / kg
- Amount rule: Final-effluent volume multiplied by representative TSS concentration under `calc_wastewater_pollutant_load`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `jrc-fdm-bref-2019`

###### Total-nitrogen discharge (`total_nitrogen_to_water`)

Record total nitrogen load separately from other wastewater indicators.

- Selected flow: Total nitrogen, to water
- Flow property / unit: Mass / kg
- Amount rule: Final-effluent volume multiplied by representative total-nitrogen concentration under `calc_wastewater_pollutant_load`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `jrc-fdm-bref-2019`

###### Total-phosphorus discharge (`total_phosphorus_to_water`)

Record total phosphorus load separately from total nitrogen.

- Selected flow: Total phosphorus, to water
- Flow property / unit: Mass / kg
- Amount rule: Final-effluent volume multiplied by representative total-phosphorus concentration under `calc_wastewater_pollutant_load`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net saleable finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `jrc-fdm-bref-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `avoid_allocation` | separable products, batches and treatment lines | First subdivide processes, meters and records so each recipe family, preservation route and output receives its directly attributable ingredients, packaging, utilities, wastes and emissions. | `eu-pef-2021` |
| `shared_utility_allocation` | shared cooking, cooling, freezing, cleaning and site services | When direct measurement is unavailable, allocate a shared utility using the closest causal operating parameter, such as metered equipment load multiplied by operating time, thermal load, cleaned area or equipment occupancy; document the parameter and reconcile to the site total. | `eu-pef-2021`; `schmidt-rivera-2019` |
| `physical_output_allocation` | unavoidable multi-output operation with a documented physical relation | Use a documented physical relation that reflects causality. Mass allocation is permitted only when product masses drive the shared burden and all output masses are measured on a consistent basis. | `eu-pef-2021` |
| `economic_allocation_last_resort` | multi-output operation without a defensible physical relation | Use economic allocation only as a last resort; disclose price source, price period, currency, averaging method and allocation factors and test sensitivity to material price variation. | `eu-pef-2021` |
| `waste_and_byproduct_status` | food residues, recyclable packaging scrap and treatment sludge | Declare whether each output is waste, by-product or recovered product under the applicable jurisdiction; do not assign avoided burdens inside the foreground dataset unless the downstream modelling convention is explicitly declared. | `eu-pef-2021`; `jrc-fdm-bref-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_recipe_inputs` | `prepared_meal_manufacturing` | each actual recipe ingredient | batch recipe, weigh ticket, issue and return record | ingredient identity; supplier lot; as-received mass; returned mass; recipe family; batch id; moisture or solids when material | Reconcile batch additions and returns to approved recipe and production orders | kg | each batch | representative continuous 12-month period or complete shorter campaign with justification | all lines producing the declared recipe family | Sum net issued mass by exact ingredient and normalize with `calc_reference_normalization`; never aggregate unlike ingredients | calibrated scales; approved formulation; lot traceability; inventory reconciliation |
| `cp_water_and_utilities` | `prepared_meal_manufacturing` | potable water, electricity, natural gas and purchased steam | meter, invoice, equipment log and production log | opening and closing meter; invoice quantity; meter unit; equipment id; operating time; fuel calorific value; condensate return; production output | Prefer process submetering; otherwise reconcile site meter or invoice totals and apply `calc_shared_utility` | native meter unit | continuous or per invoice with monthly reconciliation | same reporting period as finished output | manufacturing site and included support systems | Reconcile allocated totals to verified site totals before normalization | meter calibration; invoices; time logs; reconciliation statement |
| `cp_packaging_components` | `prepared_meal_manufacturing` | each package component | component specification, unit-mass test, issue and scrap record | exact material; supplier; unit mass; packed unit count; issued mass; returned mass; scrap mass | Weigh representative empty components and reconcile component issues, packed counts and scrap | kg | each package specification and monthly reconciliation | same reporting period as finished output | all packing lines in scope | Calculate each component separately; no combined packaging total | calibrated scale; component specification; stock reconciliation |
| `cp_finished_product` | `prepared_meal_manufacturing` | net saleable finished product | checkweigher, net-content test, accepted unit and batch release record | batch id; recipe family; route; accepted units; net content; rejects; retained samples; release status | Sum accepted net-content mass only after final quality release | kg | each batch | complete reporting period | all included lines | Normalize all exchanges using `calc_reference_normalization` | calibrated checkweigher; release record; production reconciliation |
| `cp_waste_outputs` | `prepared_meal_manufacturing` | each food or packaging waste | container weight, weighbridge ticket and transfer note | exact waste identity; gross and tare mass; destination; date; batch or line; recovery status | Weigh each waste stream separately at transfer | kg | each transfer or container | same reporting period as finished output | all included lines | Sum by atomic waste identity and destination; subtract measured contamination only with evidence | scale calibration; transfer note; treatment acceptance record |
| `cp_refrigerant_inventory` | `prepared_meal_manufacturing` | R-404A make-up and direct loss | equipment charge, service and recovery records | equipment id; refrigerant identity; opening charge; additions; closing charge; recovered mass; production allocation key | Technician-verified refrigerant mass balance by equipment | kg | each service event and annual closure | reporting year including opening and closing inventory | directly controlled refrigeration systems | Apply `calc_refrigerant_loss`; allocate only equipment-specific loss to covered production | certified service record; cylinder weights; equipment log |
| `cp_direct_air_emissions` | `prepared_meal_manufacturing` | each direct combustion emission | stack test, continuous monitor, fuel meter and factor record | pollutant species; measured concentration and flow or fuel use; factor value; factor source; oxidation basis; operating hours | Prefer representative stack measurements; otherwise calculate each species from collected fuel use and a disclosed factor | kg pollutant and native fuel unit | monitoring interval or each fuel reconciliation period | same reporting period as fuel use | each directly controlled combustion unit | Apply `calc_direct_combustion_emission`; never combine pollutant species | accredited test or monitor QA; calibrated fuel meter; retained factor source |
| `cp_wastewater_monitoring` | `prepared_meal_manufacturing`; `on_site_wastewater_treatment` | wastewater volume, sludge and each final-effluent indicator | flow meter, composite sample and laboratory result | inflow and outflow volume; sample period; COD; BOD5; TSS; TN; TP; sludge wet mass; sludge dry solids; discharge destination | Flow-proportional composite sampling where practicable and accredited laboratory analysis using declared methods | m3, mg/L and kg | continuous flow plus sampling frequency justified by permit and process variability | same reporting period as finished output | manufacturing collection point and final discharge point | Apply `calc_wastewater_pollutant_load`; keep every indicator separate | flow-meter calibration; chain of custody; laboratory accreditation; permit record |
| `cp_wastewater_treatment_inputs` | `on_site_wastewater_treatment` | treatment electricity and each treatment chemical | submeter, dosing pump, tank and delivery record | exact input identity; meter or dosing total; concentration; opening and closing stock; treated volume | Reconcile submeter and chemical stock changes to treatment operation | kWh or kg | continuous or each delivery with monthly reconciliation | same reporting period as wastewater monitoring | on-site treatment system | Normalize inputs to covered production without merging chemical identities | meter calibration; delivery note; dosing calibration; stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every foreground exchange | normalized quantity = reporting-period exchange quantity × 1,000 kg / reporting-period net saleable finished-product mass | atomic exchange quantity; accepted net saleable output mass | exchange quantity per 1,000 kg reference product | `eu-pef-2021` |
| `calc_shared_utility` | verified site utility total without direct process submeter | Allocate by a documented causal driver; sum all allocated quantities and reconcile exactly to the verified meter or invoice total before reference-flow normalization | site total; equipment load; operating time or other causal driver; covered output | allocated atomic utility quantity | `eu-pef-2021`; `schmidt-rivera-2019` |
| `calc_refrigerant_loss` | each refrigerant in directly controlled equipment | loss = opening charge + additions − closing charge − recovered refrigerant; investigate and document any negative or unexplained balance | equipment-specific refrigerant inventory and service records | kg refrigerant emitted to air | `jrc-fdm-bref-2019` |
| `calc_direct_combustion_emission` | each directly emitted combustion species | emission = measured stack mass, or collected fuel activity × disclosed species-specific emission factor; do not use one combined air-emission row | stack result or fuel activity; species-specific factor and source | kg of one named pollutant species | `jrc-fdm-bref-2019` |
| `calc_wastewater_pollutant_load` | COD, BOD5, TSS, TN or TP at direct discharge | pollutant load (kg) = final-effluent volume (m3) × representative concentration (mg/L) × 0.001; use the same sampling and flow period | final-effluent volume; one pollutant concentration | kg of the named pollutant indicator | `jrc-fdm-bref-2019` |
| `calc_mass_reconciliation` | recipe and packaging mass balance | Compare total as-received ingredient and packaging mass with saleable product, separately named wastes, wastewater transfers, retained samples and documented inventory change; investigate unexplained imbalance without treating water evaporation as solid waste | all measured mass inputs and outputs; stock changes | reconciliation statement and unexplained-mass result | `eu-pef-2021`; `jrc-fdm-bref-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_category_identity` | finished product | Demonstrate two distinct main ingredients and document why the ingredient basis is not one of the excluded CPC subclasses. | approved recipe, ingredient mass shares, product specification and CPC classification rationale |
| `dq_route_identity` | finished product | Retain preparation, cooking, cooling/freezing or retorting, package-sealing and storage specifications and identify the route actually used. | batch route, HACCP plan, process log and package specification |
| `dq_temporal_alignment` | all foreground data | Use the same representative reporting period for inputs, outputs, wastes and emissions; a shorter campaign must cover all campaign batches and disclose seasonality or start-up effects. | dated records and production reconciliation |
| `dq_meter_and_scale_control` | measured quantities | Use calibrated meters and scales and retain calibration status and data-capture completeness. | calibration certificates, meter checks and missing-data log |
| `dq_supplier_representativeness` | upstream datasets | Match ingredient, packaging, energy and treatment datasets to supplier geography, technology and period; disclose every proxy. | supplier declarations, dataset metadata and proxy register |
| `dq_wastewater_sampling` | wastewater indicators | Align final-effluent volume and concentration periods, retain laboratory method and chain of custody and identify whether discharge is direct or to off-site treatment. | composite-sample record, accredited laboratory report, flow-meter record and permit |
| `dq_allocation_reconciliation` | shared operations | Reconcile allocated utility, waste and emission totals to verified site totals and disclose causal drivers and residuals. | allocation workbook, meter total and reconciliation check |
| `dq_completeness` | inventory | Include each actual ingredient, package component, utility, refrigerant, waste and direct emission as an atomic row; document a missing secondary dataset as a data gap rather than deleting the exchange. | recipe-to-inventory, bill-of-materials-to-inventory, utility and waste reconciliation checklists |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | The output UUID must be `92b0b2f5-905b-45e9-8182-b0ad6ed26cfc`, the reference property must be Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, the unit group must be `93a60a57-a4c8-11da-a746-0800200c9a66`, and the normalized amount must be 1,000 kg. | `un-cpc-v3-2025` |
| `validate_cpc_scope` | product category | At least two distinct main ingredients must be separately identified and mass-quantified, and no excluded primary ingredient basis or product form may be classified under this PCR. | `un-cpc-v3-2025` |
| `validate_atomic_inventory` | all inventory rows | Every selected flow must represent one physical or chemical exchange; reject plural collection labels, combined utilities, combined packaging, combined wastes and combined emissions. | `jrc-fdm-bref-2019` |
| `validate_recipe_completeness` | ingredient inventory | Every ingredient on the approved production recipe must map to one separately named input row, and recipe mass must reconcile to batch issue records. | `schmidt-rivera-2019` |
| `validate_package_completeness` | package inventory | Every primary and secondary package component must map to one separately named input and its process scrap, if any, must map to one separately named waste output. | `jrc-fdm-bref-2019`; `codex-cxc-8-1976` |
| `validate_preservation_records` | cooking, chilling, freezing, retorting or vacuum route | The data package must retain the actual process route and relevant time-temperature or sealing records; a frozen route must identify quick-freezing and cold-holding conditions. | `codex-cxc-1-1969`; `codex-cxc-8-1976` |
| `validate_wastewater_exclusivity` | wastewater | The same wastewater quantity must be represented either as a waste flow to off-site treatment or through included on-site treatment and direct-discharge flows, not both. | `jrc-fdm-bref-2019` |
| `validate_wastewater_indicators` | direct wastewater discharge | When direct discharge is included, COD, BOD5, TSS, TN and TP must each be reported or each missing test must be an explicit data gap; no combined wastewater-pollutant row is allowed. | `jrc-fdm-bref-2019` |
| `validate_direct_air_emissions` | on-site combustion and refrigeration | Each measured or calculated pollutant and each refrigerant must be a separate elementary-flow row with its method or factor source retained in the produced dataset. | `jrc-fdm-bref-2019` |
| `validate_normalization` | all foreground exchanges | Every exchange must use the same accepted net-saleable-output denominator and the reporting-period allocation totals must reconcile to site records before normalization. | `eu-pef-2021` |
| `validate_ranges` | quantitative range metadata | No source-backed range is authorized by this PCR. Any later range must pass the repository range-evidence contract, including at least two independent boundary-compatible original sources for an inferred empirical range. | — |
| `validate_unresolved_identities` | publication readiness | UUID-free atomic flow names may support candidate authoring but every unresolved Tiangong identity in the manifest must be resolved or explicitly reviewed before publication. | — |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production data package that may be published as a secondary or background dataset after review |
| downstream_use | Construction of process and lifecyclemodel datasets for prepared-meal production and broader food-system studies |
| allowed_use | Factory-gate modelling of a declared CPC 23997 recipe family, preservation route, package configuration, geography and production period |
| excluded_use | Direct proxy for excluded CPC meal subclasses; consumer meal service; restaurant preparation; distribution, retail, reheating or end-of-life unless an expanded lifecycle model adds those stages |
| required_metadata | canonical PCR id; CPC coordinate; recipe family; two or more main ingredient identities and mass shares; ingredient-basis rationale; route; package components; reference UUID/property/unit; site/geography/period; allocation; wastewater route; upstream dataset and proxy register |
| required_quality_disclosure | record coverage; meter and scale calibration; temporal, geographic and technological representativeness; allocation drivers and reconciliation; missing secondary datasets; unresolved UUIDs; treatment destinations; direct-emission and wastewater test methods |
| update_trigger | Recipe or main-ingredient basis change; preservation-route or package redesign; material supplier or energy-system change; treatment-route change; new source-backed range evidence; material meter or allocation change; Tiangong identity resolution; regulatory or CPC scope change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | `official_guidance` | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, subclass 23997, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-20) | Exact inclusion and exclusion boundary; representative product identity; qualifying forms and ingredient bases |
| `eu-pef-2021` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, consolidated text and Annex I. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-20) | Lifecycle boundary, company-specific data, completeness, data quality, allocation hierarchy, proxy and disclosure rules |
| `jrc-fdm-bref-2019` | `official_guidance` | Giner Santonja et al., *Best Available Techniques (BAT) Reference Document for the Food, Drink and Milk Industries*, JRC118627, EUR 29978 EN, 2019. https://doi.org/10.2760/243911 (retrieved 2026-08-20) | Food-manufacturing process water, electricity and heat, packaging, cleaning, refrigeration, solid outputs, direct air emissions, wastewater treatment and separate COD/BOD5/TSS/TN/TP monitoring |
| `codex-cxc-1-1969` | `standard` | FAO/WHO Codex Alimentarius, *General Principles of Food Hygiene*, CXC 1-1969, revised 2020 and 2022. https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ (retrieved 2026-08-20) | Food-process route records, water quality, time-temperature controls, packaging hygiene, traceability and HACCP-aligned quality evidence |
| `codex-cxc-8-1976` | `standard` | FAO/WHO Codex Alimentarius, *Code of Practice for the Processing and Handling of Quick Frozen Foods*, CXC 8-1976, revised 2008. https://www.fao.org/fao-who-codexalimentarius/codex-texts/codes-of-practice/en/ (retrieved 2026-08-20) | Frozen-route preparation, heat treatment, cooling, quick freezing, packaging, cold storage, temperature monitoring and retained records |
| `schmidt-rivera-2019` | `literature` | Schmidt Rivera, X. C. and Azapagic, A. (2019), “Life cycle environmental impacts of ready-made meals considering different cuisines and recipes,” *Science of the Total Environment* 660:1168–1181. https://doi.org/10.1016/j.scitotenv.2019.01.069; open full text: https://bura.brunel.ac.uk/bitstream/2438/17849/1/FullText.pdf (retrieved 2026-08-20) | Multi-recipe ready-meal process decomposition, ingredient and package inventory, cooking and packing route, utilities based on manufacturer bills and output, shared-energy allocation context; not used as range evidence |
