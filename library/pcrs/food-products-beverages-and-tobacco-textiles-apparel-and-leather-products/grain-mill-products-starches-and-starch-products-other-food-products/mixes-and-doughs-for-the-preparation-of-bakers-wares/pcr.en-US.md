---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.mixes-and-doughs-for-the-preparation-of-bakers-wares
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Mixes and doughs for the preparation of bakers’ wares

## 1. Scope and Applicability

This PCR covers factory production of unbaked dry mixes and prepared wet doughs or batters intended for subsequent preparation of bakers' wares. It covers product-specific ingredient receiving and dosing, dry blending or wet dough preparation, any declared fermentation and make-up, route-specific chilling or freezing, packaging, storage to the factory gate, sanitation, and directly attributable utilities.

Every foreground data package shall select exactly one `route_code`: `dry_mix_ambient`, `wet_dough_ambient`, `wet_dough_chilled`, or `wet_dough_frozen`. Route-specific formulation, moisture, leavening, temperature conditioning, packaging, storage duration, and losses shall be recorded for that route. Results for dry mix, ambient dough, chilled dough, and frozen dough shall not be averaged into one dataset. A multi-route facility shall publish separate route datasets and use route sub-metering or a disclosed causal allocation only for genuinely shared services.

Included products are retail, food-service, or industrial dry bakery premixes; unbaked dough or batter sold or transferred in bulk, divided, or shaped form; and chilled or frozen unbaked dough. Excluded are flour or starch sold as such, finished or part-baked bakers' wares, baked bread, cakes, biscuits, pizza, and pastries, prepared meals, onsite baking at the customer, and distribution beyond the declared factory gate. A frozen part-baked product is a baked ware and is outside this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.mixes-and-doughs-for-the-preparation-of-bakers-wares |
| classification_refs | CPC 3.0: 23180, exact |
| covered_products | Unbaked dry bakery mixes; unbaked wet doughs or batters in ambient, chilled, or frozen market state; bulk, divided, or shaped product forms |
| excluded_products | Flour and starch sold as such; finished or part-baked bakers' wares; baked bread, cakes, biscuits, pizza, and pastries; prepared meals; customer baking; post-gate distribution |
| representative_product | One declared formulation and one mutually exclusive route of unbaked bakery mix or dough at the manufacturing factory gate |
| production_route | Exactly one of `dry_mix_ambient`, `wet_dough_ambient`, `wet_dough_chilled`, `wet_dough_frozen` |
| market_state | Dry ambient mix, ambient wet dough or batter, chilled wet dough or batter, or frozen wet dough or batter, declared without cross-state averaging |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net mass of one declared formulation of unbaked bakery mix, dough, or batter at the factory gate |
| How much | 1 kg net product, excluding packaging |
| How well | Conforming to the declared `route_code`, formulation, leavening mode, moisture, make-up state, storage temperature, shelf-life, and quality specification |
| How long or cycle | One production campaign normalized to 1 kg of released product after route-specific storage to the declared factory gate |
| reference_flow_link | 0252f353-8398-4eab-9e26-6a13e4b4f06b |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Mixes and doughs for the preparation of bakers' wares `0252f353-8398-4eab-9e26-6a13e4b4f06b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | route_code; formulation_id; leavening_mode; make_up_state; net_mass_basis; moisture_or_water_mass_fraction; storage_temperature_setpoint; storage_duration; packaging_configuration; shelf_life; production_site_and_geography |

The Tiangong record has a verified UUID, English base name, CPC 23180 classification leaf, `Product flow` type, and `Mass` quantitative reference. Its `common:generalComment` incorrectly states CPC 232. Treat that comment as a metadata defect: it is not evidence for scope, process selection, amounts, or any other methodological rule.

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference flow comment, the product description, or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net product mass after route-specific conditioning and storage and before packaging mass; packaging is a separate inventory input. |
| `formulation_mass` | Ingredients and intermediate product | Mass | kg | Record every actual ingredient as an individual named flow and retain batch recipe, issue, return, and rework records; do not report an aggregate ingredients or materials flow. |
| `water_and_moisture` | Formulation water and product moisture | Mass | kg | Record added water separately from ingredient moisture and report the measured or specification-based final moisture or water mass fraction. |
| `electricity_energy` | Electricity | Energy | kWh | Record metered electricity by included process; convert other electrical energy units to kWh with the disclosed exact conversion. |
| `thermal_energy` | Natural gas, LPG, diesel, purchased steam, and purchased hot water | Net calorific energy | MJ | Keep each carrier as a separate flow; state net calorific value, source, and conversion for fuel quantities and do not merge carriers as thermal energy. |
| `cold_storage_time` | Chilling, freezing, and cold storage | Energy and time | kWh; tonne-day | Record conditioning electricity separately from storage electricity where meters allow; report storage duration and normalize shared cold-store electricity using product mass × residence time only when direct sub-metering is unavailable. |
| `refrigerant_mass` | Refrigerant charge, addition, recovery, and loss | Mass | kg | Identify the actual refrigerant chemical and calculate each refrigerant loss separately; do not report a generic refrigerants flow or combine different chemicals. |
| `packaging_mass` | Primary, secondary, and tertiary packaging | Mass | kg | Measure each packaging material separately and report net packaging placed on the reference product plus separately measured scrap. |
| `wastewater_and_pollutants` | Wastewater and direct water emissions | Volume and mass | m3; kg | Record wastewater volume as a waste flow; if discharge is direct, report each measured pollutant load as a separate elementary flow and avoid double counting loads already modelled in an external wastewater-treatment dataset. |
| `air_emissions` | Direct air emissions | Mass | kg | Report each measured or calculated substance separately, including combustion emissions, refrigerant releases, ingredient dust, biogenic carbon dioxide, and ethanol where applicable. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Individually identified ingredients, packaging, purchased energy, water, and cleaning chemicals received at the manufacturing site boundary with quantity, supplier geography, and upstream dataset reference declared |
| starting_condition_role | Foreground gate-to-gate production starts at receipt; upstream production and inbound transport remain linked product systems rather than omitted burdens |
| product_classification_scope | Unbaked bakery mixes and doughs within the reviewed CPC 3.0 23180 semantic boundary; classification is context, not canonical identity |
| recursive_input_rule | A purchased mix or dough already within this PCR category is an individual technosphere input with its own upstream dataset and declared route; do not recursively reopen or silently absorb its production inventory |
| upstream_dataset_requirement | Link representative upstream datasets for every ingredient, packaging material, energy carrier, water supply, cleaning chemical, refrigerant, transport service, and waste treatment used by the selected route |
| disclosure | Declare route_code, formulation_id, leavening_mode, make_up_state, site, geography, campaign period, product temperature, storage duration, packaging, cut-offs, allocation, rework, and all deviations from this boundary |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_route_lock` | All foreground datasets | Select exactly one route_code and one formulation_id. Do not average dry mix, ambient wet dough, chilled wet dough, or frozen wet dough, and do not combine different leavening or preservation routes. | `un-cpc-v3-explanatory-notes-2025` |
| `sb_included_operations` | Selected route | Include every listed process whose gate is satisfied, from ingredient receipt through factory-gate storage, together with directly attributable sanitation, refrigerant loss, wastewater, waste, and onsite utility burdens. | `us-epa-bakery-oven-act-1992`; `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019` |
| `sb_upstream_links` | Purchased inputs | Keep upstream production and inbound transport outside the foreground process but link representative datasets; disclose any missing upstream coverage. | `ghg-protocol-product-standard-2011` |
| `sb_excluded_downstream` | Downstream preparation | Exclude proofing, thawing, baking, retail storage, consumption, and end-of-life after the declared factory gate unless the dataset explicitly expands its boundary; never import finished-bakery-product oven burdens into this product route. | `un-cpc-v3-explanatory-notes-2025`; `us-epa-bakery-oven-act-1992` |
| `sb_cold_route` | wet_dough_chilled and wet_dough_frozen | Include actual conditioning and cold-storage electricity, temperature records, refrigerant additions and releases, cold losses, and storage duration. Apply the Codex quick-frozen temperature rules only when the product is declared quick frozen. | `codex-cxc-8-1976`; `eu-emas-food-beverage-2017` |
| `sb_shared_services` | Shared utility, cleaning, warehouse, and refrigeration systems | Prefer process subdivision and sub-metering. If shared services remain, allocate by a documented causal driver and retain the unallocated facility total and reconciliation. | `ghg-protocol-product-standard-2011` |
| `sb_direct_emissions` | Site emissions | Include separate elementary flows for each direct emission actually occurring; do not hide combustion, refrigerant, dust, fermentation, or direct-water releases inside generic emissions cards. | `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ingredient_receiving_and_dosing` | Ingredient receiving, storage, and dosing | required | All routes; instantiate only the individually named formulation flows actually used | Foreground material preparation | Per 1,000 kg released reference product |
| `dry_sieving_and_blending` | Dry sieving and blending | conditional | Include only when route_code = dry_mix_ambient | Foreground dry-mix production | Per 1,000 kg released dry mix |
| `dough_mixing_and_kneading` | Wet mixing and kneading | conditional | Include only when route_code is wet_dough_ambient, wet_dough_chilled, or wet_dough_frozen | Foreground wet-dough production | Per 1,000 kg released wet dough or batter |
| `fermentation_resting_and_makeup` | Fermentation, resting, dividing, and shaping | conditional | Include each operation only when performed; fermentation requires leavening_mode = yeast or mixed | Foreground product development and make-up | Per 1,000 kg product leaving the operation |
| `temperature_conditioning_and_cold_storage` | Chilling or freezing and cold storage | conditional | Include only when route_code = wet_dough_chilled or wet_dough_frozen; lock conditioning method and storage state | Foreground preservation | Per 1,000 kg released chilled or frozen product and declared storage duration |
| `packaging` | Primary and secondary packaging | required | All routes; instantiate only actual named packaging materials | Foreground packing | Per 1,000 kg net product packed |
| `ambient_finished_storage` | Ambient finished-product storage | conditional | Include only when route_code = dry_mix_ambient or wet_dough_ambient | Foreground storage | Per 1,000 kg released product and declared storage duration |
| `cleaning_and_sanitation` | Cleaning and sanitation | required | Include actual dry and wet cleaning attributable to included production | Foreground hygiene support | Per 1,000 kg released reference product |
| `onsite_thermal_utility` | Onsite steam or hot-water generation | conditional | Include only when an onsite fuelled utility supplies an included process; otherwise record purchased steam or hot water directly | Foreground utility supply | Per MJ useful steam or hot water supplied to included processes |

### Process: Ingredient receiving, storage, and dosing (`ingredient_receiving_and_dosing`)

#### Inputs

##### Product flows

###### Wheat flour (`wheat_flour`)

Record wheat flour only when present in the locked formulation.

- Selected flow: Wheat flour
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue minus documented return, normalized to released product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `us-epa-bakery-oven-act-1992`

###### Rice flour (`rice_flour`)

Record rice flour separately when used, including gluten-free formulations.

- Selected flow: Rice flour
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue minus documented return, normalized to released product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources:

###### Maize flour (`maize_flour`)

Record maize flour separately when used.

- Selected flow: Maize flour
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue minus documented return, normalized to released product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources:

###### Potato starch (`potato_starch`)

Record potato starch separately when used as a formulation ingredient; the input does not change the output category identity.

- Selected flow: Potato starch
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue minus documented return, normalized to released product
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources:

###### Potable formulation water (`formulation_water`)

Record added formulation water separately from cleaning water and ingredient moisture.

- Selected flow: Potable water
- Flow property / unit: Mass / kg
- Amount rule: Metered or weighed water charged to the locked formulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `us-epa-bakery-oven-act-1992`

###### Baker's yeast (`bakers_yeast`)

Record baker's yeast only for yeast or mixed leavening modes.

- Selected flow: Baker's yeast
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue, reported as received product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `us-epa-bakery-oven-act-1992`

###### Sodium chloride (`sodium_chloride`)

Record food-grade sodium chloride separately when used.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue minus documented return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `us-epa-bakery-oven-act-1992`

###### Sucrose (`sucrose`)

Record sucrose separately from other sweeteners when used.

- Selected flow: Sucrose
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue minus documented return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `us-epa-bakery-oven-act-1992`

###### Palm shortening (`palm_shortening`)

Record palm shortening separately when used; another fat or oil requires its own named atomic flow card in the foreground package.

- Selected flow: Palm shortening
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue minus documented return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `us-epa-bakery-oven-act-1992`

###### Skim milk powder (`skim_milk_powder`)

Record skim milk powder separately when used.

- Selected flow: Skim milk powder
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue minus documented return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `us-epa-bakery-oven-act-1992`

###### Whole egg powder (`whole_egg_powder`)

Record whole egg powder separately when used; liquid egg requires its own named row in the foreground package.

- Selected flow: Whole egg powder
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue minus documented return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources:

###### Sodium hydrogen carbonate (`sodium_hydrogen_carbonate`)

Record sodium hydrogen carbonate separately for chemical or mixed leavening.

- Selected flow: Sodium hydrogen carbonate
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue minus documented return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources:

###### Monocalcium phosphate (`monocalcium_phosphate`)

Record monocalcium phosphate separately when it is the declared leavening acid.

- Selected flow: Monocalcium phosphate
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue minus documented return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources:

###### Mono- and diglycerides of fatty acids (`mono_diglycerides`)

Record the declared mono- and diglyceride emulsifier preparation separately when used.

- Selected flow: Mono- and diglycerides of fatty acids
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue minus documented return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `us-epa-bakery-oven-act-1992`

###### Alpha-amylase enzyme preparation (`alpha_amylase_preparation`)

Record the formulated alpha-amylase preparation separately when used, using purchased preparation mass rather than active enzyme mass unless both are reported.

- Selected flow: Alpha-amylase enzyme preparation
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue of the purchased preparation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `us-epa-bakery-oven-act-1992`

###### Calcium propionate (`calcium_propionate`)

Record calcium propionate separately when used as a preservative.

- Selected flow: Calcium propionate
- Flow property / unit: Mass / kg
- Amount rule: Net batch issue minus documented return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources: `us-epa-bakery-oven-act-1992`

###### Receiving and dosing electricity (`receiving_dosing_electricity`)

Record electricity for unloading, conveying, storage, sieving before dosing, and weighing that is attributable to the selected formulation.

- Selected flow: Electricity, supplied to the manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or calculated equipment power × operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_dosing_energy`
- Sources: `eu-emas-food-beverage-2017`
- Range: Provisional receiving and dosing electricity QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 30
  - Unit: kWh
  - Basis: per 1,000 kg released reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Dosed formulation batch (`dosed_formulation_batch`)

Record the mass transferred to dry blending or wet mixing; ingredient identities remain available in the underlying inventory.

- Selected flow: Dosed formulation batch
- Flow property / unit: Mass / kg
- Amount rule: Sum of net individual ingredient charges after receiving and dosing losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_mass`
- Sources:

##### Waste flows

###### Waste wheat flour (`wheat_flour_waste`)

Record separately weighed wheat-flour spills and rejected wheat flour sent to the declared treatment route. Each other discarded ingredient shall use its own specifically named atomic waste-flow card.

- Selected flow: Waste wheat flour
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded ingredient mass net of documented return or rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_dosing_losses`
- Sources: `eu-emas-food-beverage-2017`
- Range: Provisional ingredient-loss QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg
  - Basis: per 1,000 kg released reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Empty incoming paper sacks (`incoming_paper_sack_waste`)

Record paper ingredient sacks discarded after emptying; reusable or returned packaging is reported separately.

- Selected flow: Waste kraft paper sacks
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded paper sack mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_dosing_losses`
- Sources:

###### Empty incoming plastic liners (`incoming_plastic_liner_waste`)

Record plastic ingredient liners discarded after emptying.

- Selected flow: Waste polyethylene liners
- Flow property / unit: Mass / kg
- Amount rule: Weighed discarded liner mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_dosing_losses`
- Sources:

##### Elementary flows

###### Flour particulate matter to air (`flour_particulate_to_air_receiving`)

Record captured-and-released or directly emitted flour particulate mass from receiving and dosing, based on monitoring or a documented site emission calculation.

- Selected flow: Particulate matter, flour dust, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured emission or calculated handled mass × site-specific release factor after control
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_dosing_losses`
- Sources: `eu-fdm-bref-2019`

### Process: Dry sieving and blending (`dry_sieving_and_blending`)

#### Inputs

##### Product flows

###### Dosed dry formulation batch (`dry_dosed_batch_input`)

Record the dosed formulation entering the dry route without adding wet-route material.

- Selected flow: Dosed dry formulation batch
- Flow property / unit: Mass / kg
- Amount rule: Measured transferred batch mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg dry blend output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_blend_records`
- Sources:

###### Dry blending electricity (`dry_blending_electricity`)

Record electricity for sieving, conveying, blending, and dust collection on the dry route.

- Selected flow: Electricity, supplied to the manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or equipment power × operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg dry blend output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_blend_records`
- Sources: `eu-emas-food-beverage-2017`
- Range: Provisional dry blending electricity QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2
  - Upper: 100
  - Unit: kWh
  - Basis: per 1,000 kg dry blend output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Blended dry bakery premix (`blended_dry_premix`)

Record dry premix released to packaging.

- Selected flow: Blended dry bakery premix
- Flow property / unit: Mass / kg
- Amount rule: Measured good output mass after dry blending
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg dry blend output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_blend_records`
- Sources:

##### Waste flows

###### Dry blending reject (`dry_blending_reject`)

Record screened oversize, off-specification blend, and unreworked line residue as one declared waste treatment flow only when their treatment route is the same; otherwise split them.

- Selected flow: Rejected dry bakery premix
- Flow property / unit: Mass / kg
- Amount rule: Measured dry reject mass net of documented same-product rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry blend output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry_blend_records`
- Sources: `eu-emas-food-beverage-2017`
- Range: Provisional dry reject QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg
  - Basis: per 1,000 kg dry blend output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Flour particulate matter to air (`flour_particulate_to_air_blending`)

Record dry blending particulate released after the actual control system.

- Selected flow: Particulate matter, flour dust, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured emission or calculated handled mass × site-specific release factor after control
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg dry blend output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry_blend_records`
- Sources: `eu-fdm-bref-2019`

### Process: Wet mixing and kneading (`dough_mixing_and_kneading`)

#### Inputs

##### Product flows

###### Dosed wet formulation batch (`wet_dosed_batch_input`)

Record the dosed formulation entering the selected wet route.

- Selected flow: Dosed wet formulation batch
- Flow property / unit: Mass / kg
- Amount rule: Measured transferred batch mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg mixed dough or batter output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dough_mixing_records`
- Sources: `us-epa-bakery-oven-act-1992`

###### Dough mixing electricity (`dough_mixing_electricity`)

Record electricity for mixers, kneaders, pumps, and local conveying.

- Selected flow: Electricity, supplied to the manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or equipment power × loaded operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg mixed dough or batter output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dough_mixing_records`
- Sources: `us-epa-bakery-oven-act-1992`; `eu-emas-food-beverage-2017`
- Range: Provisional wet mixing electricity QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 180
  - Unit: kWh
  - Basis: per 1,000 kg mixed dough or batter output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Mixed dough or batter (`mixed_dough_or_batter`)

Record the measured mixed output and identify dough or batter state in product metadata.

- Selected flow: Mixed bakery dough or batter
- Flow property / unit: Mass / kg
- Amount rule: Measured good output mass from the mixer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg mixed dough or batter output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dough_mixing_records`
- Sources: `us-epa-bakery-oven-act-1992`

##### Waste flows

###### Wet mixing reject (`wet_mixing_reject`)

Record dough or batter rejected during mixing and transfer, net of same-product rework.

- Selected flow: Rejected wet bakery dough or batter
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass net of documented same-product rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg mixed dough or batter output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dough_mixing_records`
- Sources: `eu-emas-food-beverage-2017`
- Range: Provisional wet mixing reject QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 80
  - Unit: kg
  - Basis: per 1,000 kg mixed dough or batter output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Fermentation, resting, dividing, and shaping (`fermentation_resting_and_makeup`)

#### Inputs

##### Product flows

###### Mixed dough input (`mixed_dough_input`)

Record mixed dough entering only the fermentation, resting, dividing, or shaping steps actually performed.

- Selected flow: Mixed bakery dough
- Flow property / unit: Mass / kg
- Amount rule: Measured transferred dough mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg product leaving this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_makeup_records`
- Sources: `us-epa-bakery-oven-act-1992`

###### Fermentation and make-up electricity (`fermentation_makeup_electricity`)

Record electricity for agitation, conveyors, dividers, rounders, moulders, and controlled rooms that are actually used.

- Selected flow: Electricity, supplied to the manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or equipment power × operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg product leaving this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fermentation_makeup_records`
- Sources: `us-epa-bakery-oven-act-1992`; `eu-emas-food-beverage-2017`
- Range: Provisional fermentation and make-up electricity QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kWh
  - Basis: per 1,000 kg product leaving this process
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased steam for humidity control (`fermentation_purchased_steam`)

Record purchased steam separately when used for controlled humidity; onsite steam is supplied by `onsite_thermal_utility` and is not also recorded as purchased steam.

- Selected flow: Steam, purchased
- Flow property / unit: Net calorific energy / MJ
- Amount rule: Metered steam quantity converted with measured or supplier enthalpy difference
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg product leaving this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fermentation_makeup_records`
- Sources:

#### Outputs

##### Product flows

###### Prepared dough after make-up (`prepared_dough_after_makeup`)

Record bulk, divided, or shaped product as declared by `make_up_state`.

- Selected flow: Prepared unbaked bakery dough
- Flow property / unit: Mass / kg
- Amount rule: Measured good output mass after the last included operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg product leaving this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_makeup_records`
- Sources: `us-epa-bakery-oven-act-1992`

##### Waste flows

###### Fermentation or make-up reject (`fermentation_makeup_reject`)

Record dough rejected during fermentation, resting, dividing, or shaping, net of rework.

- Selected flow: Rejected prepared bakery dough
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass net of documented same-product rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg product leaving this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_makeup_records`
- Sources:

##### Elementary flows

###### Biogenic carbon dioxide from dough fermentation (`fermentation_biogenic_co2`)

Record biogenic carbon dioxide released before the factory gate only when yeast fermentation occurs and the release is measured or calculated from a documented mass balance.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented substrate-to-carbon-dioxide calculation for the included fermentation time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg product leaving this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fermentation_makeup_records`
- Sources: `us-epa-bakery-oven-act-1992`

###### Ethanol from dough fermentation to air (`fermentation_ethanol_to_air`)

Record ethanol released before baking only when yeast fermentation occurs and a site measurement or defensible pre-oven balance is available; do not apply bakery oven emission factors to unbaked dough production.

- Selected flow: Ethanol, to air
- Flow property / unit: Mass / kg
- Amount rule: Site measurement or documented pre-oven fermentation balance only
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg product leaving this process
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fermentation_makeup_records`
- Sources: `us-epa-bakery-oven-act-1992`

### Process: Chilling or freezing and cold storage (`temperature_conditioning_and_cold_storage`)

#### Inputs

##### Product flows

###### Unconditioned wet dough or batter (`unconditioned_wet_product`)

Record the wet product entering the locked chilled or frozen route.

- Selected flow: Unconditioned wet bakery dough or batter
- Flow property / unit: Mass / kg
- Amount rule: Measured mass entering conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released chilled or frozen product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_route_records`
- Sources:

###### Conditioning and cold-storage electricity (`cold_route_electricity`)

Record chilling or freezing electricity and cold-storage electricity for the selected state; retain separate meter channels where available and never average chilled and frozen routes.

- Selected flow: Electricity, supplied to the manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: Conditioning sub-meter kWh + allocated cold-store kWh for actual tonne-day residence
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg released chilled or frozen product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_route_records`
- Sources: `codex-cxc-8-1976`; `eu-emas-food-beverage-2017`
- Range: Provisional cold-route electricity sensitivity prior
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 10
  - Upper: 1200
  - Unit: kWh
  - Basis: per 1,000 kg released chilled or frozen product including declared factory storage
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia refrigerant addition (`ammonia_refrigerant_input`)

Record net ammonia addition attributable to the selected cold route when ammonia is the installed refrigerant.

- Selected flow: Ammonia, refrigerant grade
- Flow property / unit: Mass / kg
- Amount rule: Opening charge + purchases - closing charge - recovered mass, allocated only after system reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released chilled or frozen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_route_records`
- Sources: `eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

###### R404A refrigerant addition (`r404a_refrigerant_input`)

Record net R404A addition separately when R404A is the installed refrigerant.

- Selected flow: Refrigerant R404A
- Flow property / unit: Mass / kg
- Amount rule: Opening charge + purchases - closing charge - recovered mass, allocated only after system reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released chilled or frozen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_route_records`
- Sources: `eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

###### R134a refrigerant addition (`r134a_refrigerant_input`)

Record net R134a addition separately when R134a is the installed refrigerant.

- Selected flow: Refrigerant R134a
- Flow property / unit: Mass / kg
- Amount rule: Opening charge + purchases - closing charge - recovered mass, allocated only after system reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released chilled or frozen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_route_records`
- Sources: `eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

###### Carbon dioxide refrigerant addition (`r744_refrigerant_input`)

Record net R744 carbon dioxide addition separately when R744 is the installed refrigerant.

- Selected flow: Carbon dioxide, refrigerant grade, R744
- Flow property / unit: Mass / kg
- Amount rule: Opening charge + purchases - closing charge - recovered mass, allocated only after system reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released chilled or frozen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_route_records`
- Sources: `eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

#### Outputs

##### Product flows

###### Chilled or frozen reference product at factory gate (`cold_reference_product_output`)

Record only the selected market state and actual release temperature after the declared packaging sequence and factory cold storage; quick-frozen claims require thermal-centre and cold-chain records.

- Selected flow: Mixes and doughs for the preparation of bakers' wares `0252f353-8398-4eab-9e26-6a13e4b4f06b`
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg net released reference product for normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg released chilled or frozen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources: `codex-cxc-8-1976`

##### Waste flows

###### Cold-route product loss (`cold_route_product_loss`)

Record temperature-abused, freezer-damaged, or otherwise rejected product net of rework.

- Selected flow: Rejected chilled or frozen bakery dough or batter
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected mass net of documented same-product rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg released chilled or frozen product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_route_records`
- Sources: `codex-cxc-8-1976`; `eu-emas-food-beverage-2017`

##### Elementary flows

###### Ammonia refrigerant to air (`ammonia_refrigerant_to_air`)

Record reconciled ammonia loss to air separately.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Reconciled ammonia loss not transferred to recovery or waste treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released chilled or frozen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_route_records`
- Sources: `eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

###### R404A refrigerant to air (`r404a_refrigerant_to_air`)

Record reconciled R404A loss to air separately.

- Selected flow: Refrigerant R404A, to air
- Flow property / unit: Mass / kg
- Amount rule: Reconciled R404A loss not transferred to recovery or waste treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released chilled or frozen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_route_records`
- Sources: `eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

###### R134a refrigerant to air (`r134a_refrigerant_to_air`)

Record reconciled R134a loss to air separately.

- Selected flow: Refrigerant R134a, to air
- Flow property / unit: Mass / kg
- Amount rule: Reconciled R134a loss not transferred to recovery or waste treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released chilled or frozen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_route_records`
- Sources: `eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

###### R744 carbon dioxide refrigerant to air (`r744_refrigerant_to_air`)

Record reconciled R744 loss to air separately from combustion and biogenic carbon dioxide.

- Selected flow: Carbon dioxide, fossil, to air, from refrigerant R744
- Flow property / unit: Mass / kg
- Amount rule: Reconciled R744 loss not transferred to recovery or waste treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released chilled or frozen product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cold_route_records`
- Sources: `eu-emas-food-beverage-2017`; `codex-cxc-8-1976`

### Process: Primary and secondary packaging (`packaging`)

#### Inputs

##### Product flows

###### Unpacked route product (`unpacked_route_product`)

Record the good product mass entering packaging from exactly one route.

- Selected flow: Unpacked bakery mix, dough, or batter
- Flow property / unit: Mass / kg
- Amount rule: Measured mass entering packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net product packed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources:

###### Packaging electricity (`packaging_electricity`)

Record electricity for filling, sealing, labelling, case packing, and pallet wrapping.

- Selected flow: Electricity, supplied to the manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or equipment power × operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net product packed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-emas-food-beverage-2017`
- Range: Provisional packaging electricity QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 120
  - Unit: kWh
  - Basis: per 1,000 kg net product packed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Low-density polyethylene film (`ldpe_packaging_film`)

Record LDPE film separately when used for liners, pouches, or wrapping.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Issued LDPE film - returned film - measured LDPE scrap
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net product packed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-emas-food-beverage-2017`

###### Polypropylene film (`pp_packaging_film`)

Record polypropylene film separately when used.

- Selected flow: Polypropylene film
- Flow property / unit: Mass / kg
- Amount rule: Issued polypropylene film - returned film - measured polypropylene scrap
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net product packed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-emas-food-beverage-2017`

###### Kraft paper bag (`kraft_paper_bag`)

Record kraft paper bag mass separately when used.

- Selected flow: Kraft paper bag
- Flow property / unit: Mass / kg
- Amount rule: Issued bag count × verified mass per bag - returned bag mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net product packed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-emas-food-beverage-2017`

###### Corrugated board case (`corrugated_board_case`)

Record corrugated board cases separately when used.

- Selected flow: Corrugated board case
- Flow property / unit: Mass / kg
- Amount rule: Issued case count × verified mass per case - returned case mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net product packed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-emas-food-beverage-2017`

###### Polyethylene stretch film (`pe_stretch_film`)

Record pallet stretch film separately when used.

- Selected flow: Polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Issued stretch-film roll mass - remaining roll mass - measured scrap
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net product packed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-emas-food-beverage-2017`
- Range: Provisional PE stretch-film mass QA prior
  - Range role: Uncertainty range (`uncertainty_range`)
  - Lower: 0
  - Upper: 50
  - Unit: kg
  - Basis: per 1,000 kg net product packed; replace with measured issued-and-returned roll mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Packed route product (`packed_route_product`)

Record packed product gross mass and retain net product and each packaging component separately.

- Selected flow: Packed bakery mix, dough, or batter
- Flow property / unit: Mass / kg
- Amount rule: Measured net product + measured packaging mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net product packed
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources:

##### Waste flows

###### LDPE packaging scrap (`ldpe_packaging_scrap`)

Record LDPE scrap separately from other polymers and paper.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Measured LDPE trim and rejected-film mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net product packed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-emas-food-beverage-2017`

###### Polypropylene packaging scrap (`pp_packaging_scrap`)

Record polypropylene scrap separately.

- Selected flow: Waste polypropylene film
- Flow property / unit: Mass / kg
- Amount rule: Measured polypropylene trim and rejected-film mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net product packed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-emas-food-beverage-2017`

###### Kraft-paper packaging scrap (`kraft_paper_packaging_scrap`)

Record kraft-paper bag and label scrap separately from corrugated board and polymer scrap.

- Selected flow: Waste kraft paper
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected kraft-paper bag and label mass sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net product packed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-emas-food-beverage-2017`

###### Corrugated-board packaging scrap (`corrugated_board_packaging_scrap`)

Record corrugated-board case scrap separately from kraft paper and polymer scrap.

- Selected flow: Waste corrugated board
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected corrugated-board case mass sent to the declared treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net product packed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-emas-food-beverage-2017`

##### Elementary flows

### Process: Ambient finished-product storage (`ambient_finished_storage`)

#### Inputs

##### Product flows

###### Packed ambient-route product (`packed_ambient_product`)

Record packed dry mix or ambient wet product entering ambient storage.

- Selected flow: Packed ambient bakery mix, dough, or batter
- Flow property / unit: Mass / kg
- Amount rule: Measured mass received into ambient finished storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ambient_storage_records`
- Sources:

###### Ambient storage electricity (`ambient_storage_electricity`)

Record attributable lighting, ventilation, and handling electricity; exclude cold-store electricity.

- Selected flow: Electricity, supplied to the manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered kWh or warehouse kWh allocated by product mass × residence time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product and declared storage duration
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ambient_storage_records`
- Sources: `eu-emas-food-beverage-2017`
- Range: Provisional ambient storage electricity QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 80
  - Unit: kWh
  - Basis: per 1,000 kg released product for declared factory storage
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

#### Outputs

##### Product flows

###### Reference product at factory gate (`reference_product_output`)

Record net released product mass; packaging remains separate.

- Selected flow: Mixes and doughs for the preparation of bakers' wares `0252f353-8398-4eab-9e26-6a13e4b4f06b`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1,000 kg net released reference product for normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources:

##### Waste flows

###### Ambient storage product loss (`ambient_storage_product_loss`)

Record expired, damaged, or contaminated ambient product net of rework.

- Selected flow: Rejected ambient bakery mix, dough, or batter
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded mass net of documented same-product rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ambient_storage_records`
- Sources: `eu-emas-food-beverage-2017`

##### Elementary flows

### Process: Cleaning and sanitation (`cleaning_and_sanitation`)

#### Inputs

##### Product flows

###### Cleaning electricity (`cleaning_electricity`)

Record electricity for pumps, floor machines, clean-in-place systems, and ventilation during cleaning.

- Selected flow: Electricity, supplied to the manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered cleaning electricity or equipment power × cleaning time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`
- Range: Provisional cleaning electricity QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 250
  - Unit: kWh
  - Basis: per 1,000 kg released reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning water (`cleaning_water`)

Record potable or process water used for wet cleaning separately from formulation water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered cleaning water or calibrated flow × duration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`
- Range: Provisional cleaning-water QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 12
  - Unit: m3
  - Basis: per 1,000 kg released reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased hot water (`purchased_hot_water`)

Record purchased hot water separately when no onsite utility supplies it.

- Selected flow: Hot water, purchased
- Flow property / unit: Net calorific energy / MJ
- Amount rule: Metered mass × measured or supplier enthalpy difference
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`

###### Purchased steam for cleaning (`cleaning_purchased_steam`)

Record purchased steam separately when used and not supplied by the onsite thermal utility.

- Selected flow: Steam, purchased
- Flow property / unit: Net calorific energy / MJ
- Amount rule: Metered steam mass × measured or supplier enthalpy difference
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`

###### Sodium hydroxide cleaning solution (`sodium_hydroxide_cleaner`)

Record purchased sodium hydroxide product mass separately, with concentration disclosed.

- Selected flow: Sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Purchased formulated-product mass issued to included cleaning
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`

###### Nitric acid cleaning solution (`nitric_acid_cleaner`)

Record purchased nitric acid product mass separately, with concentration disclosed.

- Selected flow: Nitric acid cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Purchased formulated-product mass issued to included cleaning
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`

###### Peracetic acid sanitizer (`peracetic_acid_sanitizer`)

Record purchased peracetic-acid sanitizer mass separately, with concentration disclosed.

- Selected flow: Peracetic acid sanitizer
- Flow property / unit: Mass / kg
- Amount rule: Purchased formulated-product mass issued to included sanitation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater to treatment (`cleaning_wastewater`)

Record wastewater volume sent to the declared onsite or external treatment route.

- Selected flow: Wastewater from bakery mix and dough cleaning
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge volume attributable to included cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent_records`
- Sources: `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`
- Range: Provisional wastewater-volume QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 12
  - Unit: m3
  - Basis: per 1,000 kg released reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recovered food solids from cleaning (`cleaning_food_solids_waste`)

Record dry-cleaned and screened food solids sent to the declared treatment route.

- Selected flow: Recovered bakery mix and dough solids from cleaning
- Flow property / unit: Mass / kg
- Amount rule: Measured recovered solids net of documented rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent_records`
- Sources: `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019`

##### Elementary flows

###### Chemical oxygen demand to water (`cod_to_water`)

Record direct COD load only for onsite final discharge; omit when an external treatment dataset already carries the pollutant releases.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Flow-weighted COD concentration × direct-discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_records`
- Sources: `eu-fdm-bref-2019`

###### Biochemical oxygen demand to water (`bod5_to_water`)

Record direct BOD5 load separately when monitored and directly discharged.

- Selected flow: Biochemical oxygen demand, 5-day, to water
- Flow property / unit: Mass / kg
- Amount rule: Flow-weighted BOD5 concentration × direct-discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_records`
- Sources: `eu-fdm-bref-2019`

###### Total suspended solids to water (`tss_to_water`)

Record direct suspended-solids load separately when monitored and directly discharged.

- Selected flow: Total suspended solids, to water
- Flow property / unit: Mass / kg
- Amount rule: Flow-weighted suspended-solids concentration × direct-discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_records`
- Sources: `eu-fdm-bref-2019`

###### Total nitrogen to water (`total_nitrogen_to_water`)

Record direct total-nitrogen load separately when monitored and directly discharged.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Flow-weighted total-nitrogen concentration × direct-discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_records`
- Sources: `eu-fdm-bref-2019`

###### Total phosphorus to water (`total_phosphorus_to_water`)

Record direct total-phosphorus load separately when monitored and directly discharged.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Flow-weighted total-phosphorus concentration × direct-discharge volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_records`
- Sources: `eu-fdm-bref-2019`

### Process: Onsite steam or hot-water generation (`onsite_thermal_utility`)

#### Inputs

##### Product flows

###### Natural gas (`natural_gas_fuel`)

Record natural gas separately when burned onsite for included steam or hot water.

- Selected flow: Natural gas
- Flow property / unit: Net calorific energy / MJ
- Amount rule: Metered gas quantity × site or supplier net calorific value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ useful steam or hot water supplied to included processes
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility_records`
- Sources:
- Range: Provisional natural-gas efficiency QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.05
  - Upper: 3
  - Unit: MJ
  - Basis: per MJ useful steam or hot water output
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Liquefied petroleum gas (`lpg_fuel`)

Record LPG separately when burned onsite; do not combine with natural gas or diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Net calorific energy / MJ
- Amount rule: Metered LPG mass or volume × site or supplier net calorific value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ useful steam or hot water supplied to included processes
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility_records`
- Sources:
- Range: Provisional LPG efficiency QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.05
  - Upper: 3
  - Unit: MJ
  - Basis: per MJ useful steam or hot water output
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel fuel (`diesel_fuel`)

Record diesel separately when burned in an included boiler or heater.

- Selected flow: Diesel fuel
- Flow property / unit: Net calorific energy / MJ
- Amount rule: Metered diesel volume × density × site or supplier net calorific value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ useful steam or hot water supplied to included processes
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility_records`
- Sources:
- Range: Provisional diesel efficiency QA prior
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.05
  - Upper: 3.5
  - Unit: MJ
  - Basis: per MJ useful steam or hot water output
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal-utility electricity (`thermal_utility_electricity`)

Record boiler fans, pumps, controls, and water-treatment electricity separately.

- Selected flow: Electricity, supplied to the manufacturing site
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered utility electricity or equipment power × operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ useful steam or hot water supplied to included processes
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility_records`
- Sources:

###### Boiler feedwater (`boiler_feedwater`)

Record treated feedwater entering the onsite utility separately from cleaning water.

- Selected flow: Boiler feedwater
- Flow property / unit: Volume / m3
- Amount rule: Metered makeup feedwater
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ useful steam or hot water supplied to included processes
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_utility_records`
- Sources:

#### Outputs

##### Product flows

###### Onsite steam supplied (`onsite_steam_output`)

Record useful steam delivered to included processes.

- Selected flow: Steam, onsite
- Flow property / unit: Net calorific energy / MJ
- Amount rule: Delivered steam mass × measured enthalpy difference
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ useful steam supplied
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility_records`
- Sources:

###### Onsite hot water supplied (`onsite_hot_water_output`)

Record useful hot water delivered to included processes.

- Selected flow: Hot water, onsite
- Flow property / unit: Net calorific energy / MJ
- Amount rule: Delivered water mass × heat capacity × measured temperature rise
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ useful hot water supplied
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility_records`
- Sources:

##### Waste flows

###### Boiler blowdown wastewater (`boiler_blowdown_wastewater`)

Record boiler blowdown sent to the declared treatment route.

- Selected flow: Boiler blowdown wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or calculated blowdown volume
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ useful steam or hot water supplied
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility_records`
- Sources:

##### Elementary flows

###### Fossil carbon dioxide from fuel combustion (`combustion_fossil_co2`)

Record fossil carbon dioxide separately for the actual fuel inventory.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Fuel net calorific energy × disclosed fuel-specific emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ useful steam or hot water supplied
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources:

###### Methane from fuel combustion (`combustion_methane`)

Record combustion methane separately.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Fuel net calorific energy × disclosed fuel- and technology-specific emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ useful steam or hot water supplied
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources:

###### Nitrous oxide from fuel combustion (`combustion_nitrous_oxide`)

Record combustion nitrous oxide separately.

- Selected flow: Nitrous oxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Fuel net calorific energy × disclosed fuel- and technology-specific emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ useful steam or hot water supplied
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources:

###### Nitrogen oxides from fuel combustion (`combustion_nox`)

Record nitrogen oxides separately as the inventory convention requires.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or fuel net calorific energy × disclosed technology-specific emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ useful steam or hot water supplied
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources:

###### Carbon monoxide from fuel combustion (`combustion_carbon_monoxide`)

Record carbon monoxide separately.

- Selected flow: Carbon monoxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or fuel net calorific energy × disclosed technology-specific emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ useful steam or hot water supplied
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources:

###### Fine particulate matter from fuel combustion (`combustion_pm25`)

Record PM2.5 separately when applicable to the selected fuel and equipment.

- Selected flow: Particulate matter, less than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Stack measurement or fuel net calorific energy × disclosed technology-specific emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ useful steam or hot water supplied
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_avoid_allocation` | All multi-output or shared processes | Avoid allocation first through route-specific datasets, process subdivision, separate batch records, and sub-metering. | `ghg-protocol-product-standard-2011` |
| `al_no_route_average` | Facilities producing multiple product states | Never allocate by first averaging dry, ambient, chilled, and frozen routes. Establish separate route inventories before treating genuinely shared services. | `ghg-protocol-product-standard-2011`; `codex-cxc-8-1976` |
| `al_rework` | Same-product rework | Return same-formulation rework to the originating route as an internal loop and disclose gross generation and returned mass; do not count returned mass as waste or a co-product. | `ghg-protocol-product-standard-2011` |
| `al_shared_service_physical` | Shared electricity, cleaning, storage, refrigeration, and utilities | If subdivision is unavailable, use a causal physical driver: metered operating time for equipment, cleaned surface or cleaning cycle for sanitation, tonne-day and temperature lift for storage, or delivered useful heat for thermal utilities. | `ghg-protocol-product-standard-2011`; `eu-emas-food-beverage-2017` |
| `al_economic_fallback` | Residual shared burdens | Use economic allocation only when no defensible physical relationship exists; disclose prices, period, geography, volatility, and a physical-versus-economic sensitivity result. | `ghg-protocol-product-standard-2011` |
| `al_waste_and_saleable_output` | Residues and off-specification product | Treat an output with no economic value and a required treatment route as waste. If sold or used as a functionally valuable output, classify it as a co-product and apply the allocation hierarchy. | `ghg-protocol-product-standard-2011` |
| `al_recycling` | Packaging and other recyclable wastes | Report the selected recycling convention and keep collection, sorting, treatment, recycled-content credit, and any avoided-burden claim explicit; do not mix conventions within one dataset. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_route_formulation_release` | `ingredient_receiving_and_dosing` | route and product identity | production master and release record | route_code; formulation_id; leavening_mode; make_up_state; moisture_or_water_mass_fraction; storage_temperature_setpoint; storage_duration; packaging_configuration; shelf_life; released_net_mass_kg | Approved product specification joined to released lots | kg; °C; h | Each released lot | Representative consecutive campaigns covering at least one year or the full available campaign period if shorter | Every included production site and line | Keep routes and formulations separate; sum only released lots with identical required qualifiers | Approved formula; batch genealogy; release certificate; calibrated product scale; temperature record |
| `cp_ingredient_mass` | `ingredient_receiving_and_dosing` | each named ingredient input | weigh ticket and batch issue record | ingredient_name; supplier_lot; formulation_id; issued_kg; returned_kg; reworked_kg; ingredient_moisture_fraction; batch_id | Calibrated weigh system reconciled to inventory issues and returns | kg | Each batch | Same lots and campaigns as product output | Every included dosing line | net_ingredient_kg = issued_kg - returned_kg; normalize only within one formulation_id and route_code | Scale calibration; supplier lot; recipe approval; issue-return reconciliation |
| `cp_receiving_dosing_energy` | `ingredient_receiving_and_dosing` | receiving and dosing electricity | meter or equipment log | meter_start_kwh; meter_end_kwh; equipment_kw; loaded_runtime_h; batch_id | Dedicated meter preferred; otherwise verified power × loaded runtime | kWh | Each campaign or meter interval | At least one representative year or full campaign period | Each included receiving and dosing system | Subtract documented idle or unrelated use; divide by released net mass for the same route | Meter identifier and calibration; runtime log; reconciliation to facility bill |
| `cp_receiving_dosing_losses` | `ingredient_receiving_and_dosing` | ingredient waste, incoming packaging waste, and dust | waste ticket, mass balance, and emission record | waste_name; treatment_route; gross_kg; reworked_kg; captured_dust_kg; released_dust_kg; batch_id | Weigh each waste stream; use monitored or site-approved dust calculation | kg | Each batch or waste pickup | Same campaigns as product output | Each included receiving and dosing system | Keep paper, plastic, food waste, captured dust, and released dust separate | Waste scale calibration; treatment receipt; filter log; emission calculation |
| `cp_dry_blend_records` | `dry_sieving_and_blending` | dry route mass, electricity, reject, and dust | batch, meter, and waste record | route_code; batch_input_kg; good_output_kg; reject_kg; rework_kg; meter_kwh; runtime_h; released_dust_kg | Calibrated mass records plus dedicated meter or verified power × runtime | kg; kWh | Each dry batch | Representative consecutive dry-route campaigns | Each dry line | Normalize only dry_mix_ambient batches; reconcile input = good output + reject + dust + stock change | Scale and meter calibration; batch genealogy; dust-control log |
| `cp_dough_mixing_records` | `dough_mixing_and_kneading` | wet route mass, electricity, and reject | batch, mixer, and waste record | route_code; batch_input_kg; good_output_kg; reject_kg; rework_kg; meter_kwh; mixer_kw; loaded_runtime_h | Calibrated mass records and dedicated meter or verified power × loaded runtime | kg; kWh | Each wet batch | Representative consecutive wet-route campaigns | Each mixer and wet line | Keep ambient, chilled, and frozen route_code values separate; reconcile mass by batch | Scale and meter calibration; mixer log; batch genealogy |
| `cp_fermentation_makeup_records` | `fermentation_resting_and_makeup` | included operations, energy, steam, mass, and direct fermentation releases | process historian, batch, and emission record | operation_codes; leavening_mode; input_kg; output_kg; reject_kg; rework_kg; meter_kwh; steam_kg; steam_enthalpy_mj_per_kg; fermentation_time_h; released_co2_kg; released_ethanol_kg | Record only performed operations; meter utilities and use site measurement or documented pre-oven balance for releases | kg; kWh; MJ; h | Each batch or campaign | Representative consecutive campaigns for each selected operation set | Each included fermentation and make-up line | Aggregate only identical operation_codes and leavening_mode; no bakery-oven factor transfer | Historian export; utility meter; batch genealogy; emission-method record |
| `cp_cold_route_records` | `temperature_conditioning_and_cold_storage` | conditioning, storage, refrigerant, temperature, and loss | energy meter, temperature logger, refrigerant ledger, and stock record | route_code; conditioning_method; input_kg; released_kg; reject_kg; conditioning_kwh; storage_kwh; storage_duration_h; product_temperature_c; refrigerant_name; opening_charge_kg; purchased_kg; recovered_kg; closing_charge_kg | Separate conditioning and storage meters where available; calibrated continuous temperature log; annual refrigerant mass balance by named chemical | kg; kWh; h; °C | Each batch plus continuous temperature and annual refrigerant reconciliation | At least one full seasonal year when the route operates year-round | Each cold system and route | Keep chilled and frozen route_code values separate; allocate shared storage only by tonne-day adjusted for documented temperature lift | Meter and logger calibration; refrigerant invoices and recovery records; stock reconciliation; alarm log |
| `cp_packaging_records` | `packaging` | each named packaging input, scrap, and electricity | bill of materials, issue record, scale, and meter | material_name; package_count; verified_mass_per_item_kg; issued_kg; returned_kg; scrap_kg; packed_net_product_kg; meter_kwh | Count × verified item mass or direct weighing; dedicated meter or verified power × runtime | kg; kWh | Each packaging campaign | Same released lots as reference product | Each packaging line and configuration | Keep LDPE, PP, kraft paper, corrugated board, and stretch film separate; reconcile issued = packed + scrap + returned | Packaging specification; scale and meter calibration; issue-return reconciliation |
| `cp_ambient_storage_records` | `ambient_finished_storage` | ambient storage energy, residence, release, and loss | warehouse meter and stock movement | route_code; lot_id; mass_in_kg; mass_out_kg; discarded_kg; meter_kwh; entry_time; release_time | Dedicated meter preferred; otherwise complete warehouse meter allocated by mass × residence time | kg; kWh; h | Each stock movement and meter interval | At least one representative year or full campaign period | Each ambient warehouse | Include only dry_mix_ambient and wet_dough_ambient; reconcile stock change and losses | Meter calibration; warehouse stock ledger; release record |
| `cp_cleaning_records` | `cleaning_and_sanitation` | cleaning electricity, water, heat, and each named chemical | cleaning log, issue record, and utility meter | cleaning_cycle_id; area_or_equipment; route_code; water_m3; electricity_kwh; hot_water_kg; inlet_temperature_c; outlet_temperature_c; steam_kg; sodium_hydroxide_solution_kg; nitric_acid_solution_kg; peracetic_acid_solution_kg; product_concentration | Meter utilities and weigh or reconcile each formulated chemical issue | m3; kWh; kg; °C | Each cleaning cycle | Representative production and changeover cycles over the reporting period | Every included line and shared sanitation system | Assign direct cycles to route; allocate shared cycles by documented causal driver and reconcile to site totals | Cleaning schedule; meter calibration; chemical issue record; concentration certificate |
| `cp_effluent_records` | `cleaning_and_sanitation` | wastewater, recovered solids, and direct pollutant loads | flow meter, laboratory sample, and waste ticket | discharge_destination; wastewater_m3; solids_kg; cod_mg_per_l; bod5_mg_per_l; tss_mg_per_l; total_n_mg_per_l; total_p_mg_per_l; sample_time; flow_period | Flow-proportional composite sampling and accredited or controlled laboratory method; weigh screened solids | m3; kg; mg/L | Each discharge period with sampling frequency justified by variability | Same reporting period as production | Every discharge point and treatment route in scope | concentration_kg_per_m3 × matching discharge_m3; report direct releases only at the final onsite discharge point | Flow-meter calibration; chain of custody; method and detection limit; treatment receipt |
| `cp_thermal_utility_records` | `onsite_thermal_utility` | each fuel, electricity, feedwater, useful heat, and blowdown | fuel meter, utility meter, water meter, and operating log | fuel_name; fuel_quantity; density_kg_per_l; ncv_mj_per_unit; electricity_kwh; feedwater_m3; steam_kg; steam_enthalpy_mj_per_kg; hot_water_kg; temperature_rise_c; blowdown_m3 | Meter every carrier separately and calculate useful output from measured thermodynamic state | MJ; kWh; m3; kg; °C | Each meter interval | At least one representative year or complete campaign period | Each included boiler or heater | No carrier averaging; reconcile fuel energy to useful heat, losses, and stock change | Meter calibration; fuel invoice; supplier NCV; steam or hot-water state record |
| `cp_combustion_emissions` | `onsite_thermal_utility` | each combustion emission | stack test, continuous monitor, or fuel-factor calculation | fuel_name; fuel_energy_mj; pollutant_name; measured_concentration; exhaust_flow; emission_factor; factor_unit; factor_source | Prefer stack or continuous measurement; otherwise multiply separate fuel energy by a current disclosed fuel- and technology-specific factor | kg; MJ | Each test or factor interval | Same period as fuel inventory | Each combustion unit | Calculate each substance and fuel separately; aggregate only after calculation | Test report or monitor QA; factor citation; fuel-energy reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_ingredient_mass` | Each ingredient | net_ingredient_kg = issued_kg - returned_kg; same-product rework is disclosed separately and not subtracted from virgin ingredient identity | issued_kg; returned_kg; reworked_kg; released_net_mass_kg | kg ingredient per 1,000 kg released product | `ghg-protocol-product-standard-2011` |
| `calc_process_energy` | Each electricity row | normalized_kwh = attributable_meter_kwh × 1000 / released_or_process_output_kg | meter_start_kwh; meter_end_kwh; attributable_fraction; output_kg | kWh per 1,000 kg output | `eu-emas-food-beverage-2017` |
| `calc_storage_energy` | Shared ambient or cold storage | allocated_kwh = complete_storage_kwh × product_tonne_days / sum_all_product_tonne_days; apply a documented temperature-lift refinement when products use materially different setpoints | complete_storage_kwh; product_mass_t; residence_days; storage_setpoint_c | kWh per 1,000 kg released product | `eu-emas-food-beverage-2017`; `ghg-protocol-product-standard-2011` |
| `calc_refrigerant_loss` | Each named refrigerant | loss_kg = opening_charge_kg + purchased_kg - closing_charge_kg - recovered_kg - documented_transfer_kg; negative or unreconciled results are invalid | opening_charge_kg; purchased_kg; closing_charge_kg; recovered_kg; documented_transfer_kg | kg named refrigerant to air before causal allocation | `eu-emas-food-beverage-2017`; `codex-cxc-8-1976` |
| `calc_packaging_mass` | Each packaging material | packaging_to_product_kg = issued_kg - returned_kg - scrap_kg; reconcile with package_count × verified_mass_per_item_kg | issued_kg; returned_kg; scrap_kg; package_count; verified_mass_per_item_kg | kg named packaging per 1,000 kg net product | `eu-emas-food-beverage-2017` |
| `calc_cleaning_heat` | Hot water and steam | hot_water_mj = water_kg × 4.186 kJ_per_kg_K × temperature_rise_K / 1000; steam_mj = steam_kg × measured_enthalpy_difference_mj_per_kg | water_kg; temperature_rise_K; steam_kg; measured_enthalpy_difference_mj_per_kg | MJ useful cleaning heat | `eu-fdm-bref-2019` |
| `calc_fuel_energy` | Natural gas, LPG, and diesel | fuel_energy_mj = metered_quantity × documented_density_if_needed × supplier_or_site_ncv | fuel_quantity; density; ncv | MJ per named fuel |  |
| `calc_combustion_emission` | Each fuel and pollutant | pollutant_kg = fuel_energy_mj × disclosed_emission_factor_kg_per_mj; do not calculate until factor source, fuel, technology, and oxidation basis are declared | fuel_energy_mj; emission_factor_kg_per_mj | kg individual pollutant |  |
| `calc_effluent_load` | Each direct water pollutant | pollutant_kg = flow_weighted_concentration_mg_per_l × matching_discharge_m3 / 1000 | concentration_mg_per_l; discharge_m3 | kg individual pollutant to water | `eu-fdm-bref-2019` |
| `calc_mass_balance` | Each process and whole foreground system | mass_balance_gap_kg = total_mass_inputs_kg - total_mass_outputs_kg - measured_direct_mass_emissions_kg - stock_change_kg; report gap and investigate against the route-specific threshold | all mass inputs; all product and waste outputs; direct mass emissions; stock change | kg and percent mass-balance gap | `ghg-protocol-product-standard-2011` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | Dataset identity | Declare exactly one route_code and one formulation_id and retain lot genealogy from ingredient issue through released product. | Approved specification, batch genealogy, and release records |
| `dq_temporal` | Foreground measurements | Use temporally matched inputs and outputs; normally cover at least one representative year, or disclose shorter campaigns, seasonality, shutdowns, and start-up losses. | Dated meter, batch, stock, and waste records |
| `dq_technology_geography` | Foreground and upstream data | Describe actual mixer, conditioner, cold system, packaging line, thermal utility, site, and geography; assess upstream datasets for technological, temporal, and geographic representativeness. | Equipment register, site metadata, supplier and dataset metadata |
| `dq_completeness` | Atomic flow inventory | Reconcile material, energy, refrigerant, water, packaging, waste, and emission records. Any actual ingredient, fuel, refrigerant, cleaning chemical, packaging material, waste, or emitted substance missing from the listed cards shall be added as its own named atomic row before publication. | Reconciliation worksheet and completeness sign-off |
| `dq_meter_quality` | Measurements | Retain meter identity, calibration or verification status, resolution, missing-data handling, and the fraction of output covered. | Calibration certificates, meter register, and missing-data log |
| `dq_cold_chain` | Chilled and frozen routes | Retain product and storage temperature time series, conditioning endpoint, storage duration, alarm excursions, and instrument checks. For quick-frozen product, document thermal-centre completion at -18 °C or colder and subsequent -18 °C cold-chain control. | Calibrated logger records and release review; `codex-cxc-8-1976` |
| `dq_refrigerant` | Cold systems | Reconcile opening charge, purchases, additions, recovery, transfer, and closing charge for each named refrigerant; disclose unreconciled difference and allocation. | Refrigerant ledger, invoices, service and recovery records |
| `dq_reasoned_estimates` | Provisional ranges | Every reasoned_estimate range is a broad authoring QA or sensitivity prior, not a default foreground value. Test the lower and upper bounds when the flow is material and replace the range with reviewed route/site evidence before it becomes publication-critical. | Sensitivity result and review disposition |
| `dq_tiangong_comment_defect` | Reference-flow identity | The reference flow UUID, name, CPC 23180 classification, Product flow type, and Mass reference are consistent, but its generalComment says CPC 232. Disclose this defect and never use the comment as methodology or scope evidence. | Tiangong identity fields for UUID 0252f353-8398-4eab-9e26-6a13e4b4f06b |
| `dq_source_limits` | External evidence | EPA bakery material is limited to mainly yeast-leavened bread operations and predates current equipment; use it only for ingredient and unit-operation candidates. Codex quick-frozen rules apply only to declared quick-frozen product. EU food-sector sources are environmental guidance, not product-specific amount defaults. | Source applicability matrix and reviewer sign-off |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference flow | Require UUID 0252f353-8398-4eab-9e26-6a13e4b4f06b, exact product name, CPC 23180 classification leaf, Product flow type, and Mass property; flag the CPC 232 generalComment defect without using it as evidence. |  |
| `val_route_exclusive` | Dataset route | Fail if route_code is missing, outside the four allowed values, or if records from more than one route_code are averaged. | `un-cpc-v3-explanatory-notes-2025` |
| `val_process_gates` | Process map | Require every process whose condition is true and reject dry blending on wet routes, wet mixing on dry routes, cold conditioning on ambient routes, or fermentation where the operation is not performed. | `us-epa-bakery-oven-act-1992`; `codex-cxc-8-1976` |
| `val_atomic_inputs` | Product inputs | Fail any aggregate materials, ingredients, chemicals, cleaning agents, packaging, energy carriers, fuels, thermal energy, or refrigerants row; require one named flow per actual substance or product. | `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019` |
| `val_atomic_outputs` | Waste and elementary outputs | Fail any aggregate wastes or emissions row; require separate treatment flows and separate substances for air and water releases. | `eu-fdm-bref-2019` |
| `val_uuid_scope` | UUID-bearing inventory | Permit the verified UUIDs only on the reference product and its Mass reference property; all other flow UUIDs remain blank until individually mapped by the foreground author. |  |
| `val_mass_balance` | Each process and whole system | Require a reported mass-balance gap and investigation of unexplained differences; never close the balance with an unnamed other material, waste, or emission. | `ghg-protocol-product-standard-2011` |
| `val_cold_records` | Chilled and frozen routes | Require conditioning method, product temperature, storage setpoint, duration, electricity, named refrigerant reconciliation, and product loss. | `codex-cxc-8-1976`; `eu-emas-food-beverage-2017` |
| `val_quick_frozen_claim` | Quick-frozen product | When freezing_claim = quick_frozen, require evidence that the thermal centre reached -18 °C or colder after stabilization and that subsequent storage was maintained at -18 °C or colder, subject to declared permitted tolerances. | `codex-cxc-8-1976` |
| `val_energy_carriers` | Thermal utility | Fail combined fuel or thermal-energy inputs; natural gas, LPG, diesel, purchased steam, and purchased hot water shall remain separate and reconcile to useful heat. | `eu-emas-food-beverage-2017`; `eu-fdm-bref-2019` |
| `val_refrigerants` | Cold systems | Fail generic refrigerant entries or combined refrigerant losses; require actual chemical identity and a non-negative reconciled mass balance. | `eu-emas-food-beverage-2017`; `codex-cxc-8-1976` |
| `val_effluent_double_count` | Wastewater and water emissions | If wastewater is sent to external treatment, do not also report treatment-plant releases as direct site emissions; if discharge is onsite final, require measured individual loads and discharge destination. | `eu-fdm-bref-2019` |
| `val_allocation` | Shared processes | Require documented subdivision attempt, causal driver, unallocated total, allocated total, and reconciliation; require sensitivity when economic allocation is used. | `ghg-protocol-product-standard-2011` |
| `val_reasoned_estimates` | Amount ranges | Prohibit a reasoned_estimate from silently becoming the foreground amount. Require collection protocol values and disclose any sensitivity use of provisional bounds. | `ghg-protocol-product-standard-2011` |
| `val_source_applicability` | Method evidence | Reject bakery-oven emission factors for this unbaked product boundary and reject the erroneous Tiangong generalComment as a source. | `us-epa-bakery-oven-act-1992` |
| `val_bilingual_machine_semantics` | Bilingual PCR | Require identical ordered process_id, row_id, rule_id, protocol_id, controlled tokens, formulas, numerical values, UUIDs, source_ids, and source URLs across en-US and zh-CN. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Route- and formulation-specific foreground production dataset for unbaked bakery mixes, doughs, or batters |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology, translation, identity, and data-quality review |
| allowed_use | Upstream modelling of a declared unbaked mix or dough route when all required qualifiers, storage state, geography, time period, and upstream links are compatible |
| excluded_use | Proxy for baked or part-baked products; cross-route average; substitute for another formulation without sensitivity review; claim about consumer baking; use of the erroneous CPC 232 generalComment as evidence |
| required_metadata | pcr_id; route_code; formulation_id; leavening_mode; make_up_state; moisture_or_water_mass_fraction; net_mass_basis; site; geography; campaign_period; conditioning_method; storage_temperature_setpoint; storage_duration; packaging_configuration; shelf_life; allocation_method; cut_offs; rework; upstream_dataset_refs |
| required_quality_disclosure | Coverage and calibration of meters; mass-balance gap; data representativeness; source applicability; named refrigerant reconciliation; wastewater destination; provisional reasoned estimates and sensitivity; Tiangong generalComment defect; unresolved unit-group UUID |
| update_trigger | Formula, supplier, route, mixer, conditioner, refrigerant, storage temperature or duration, packaging, utility, waste treatment, allocation, regulation, reference-flow identity, or material production-volume change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-explanatory-notes-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, code 23180, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13) | Official classification identity and separation from CPC 232 and finished bakers' wares |
| `us-epa-bakery-oven-act-1992` | official_guidance | U.S. EPA, Alternative Control Technology Document for Bakery Oven Emissions, EPA-453/R-92-017, https://www.epa.gov/sites/default/files/2020-08/documents/bakery92.pdf (retrieved 2026-08-13) | Dough-process decomposition, common ingredient candidates, mixing, fermentation, dividing, shaping, and explicit limitation against transferring oven factors |
| `eu-emas-food-beverage-2017` | official_guidance | Commission Decision (EU) 2017/1508, food and beverage manufacturing sectoral reference document, https://eur-lex.europa.eu/eli/dec/2017/1508/oj/eng (retrieved 2026-08-13) | Process-level energy indicators, packaging, cleaning water/energy/chemicals, refrigeration efficiency, named refrigerant leakage, and food-waste records |
| `eu-fdm-bref-2019` | official_guidance | European Commission JRC, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 (retrieved 2026-08-13) | Food-manufacturing environmental aspects, cleaning, water, wastewater, energy, dust, direct emissions, monitoring, and treatment context |
| `codex-cxc-8-1976` | standard | Codex Alimentarius, Code of Practice for the Processing and Handling of Quick Frozen Foods, CXC 8-1976, revision 2008, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/fr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B8-1976%252FCXC_008e.pdf (retrieved 2026-08-13) | Quick-freezing definition, -18 °C completion and cold-chain rule, temperature monitoring, packaging, storage, and refrigerant-leak prevention |
| `ghg-protocol-product-standard-2011` | standard | WRI and WBCSD, Product Life Cycle Accounting and Reporting Standard, 2011, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf (retrieved 2026-08-13) | Process maps, primary data, data-quality assessment, allocation hierarchy, subdivision, disclosure, and sensitivity expectations |
