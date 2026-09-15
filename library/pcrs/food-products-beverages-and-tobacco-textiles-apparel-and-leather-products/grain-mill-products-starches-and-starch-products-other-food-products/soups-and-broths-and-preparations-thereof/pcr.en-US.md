---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.soups-and-broths-and-preparations-thereof
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Soups and broths and preparations thereof

## 1. Scope and Applicability

This PCR governs foreground data packages for the manufacture of finished soups, broths, bouillons, consommés, and preparations intended to yield soup or broth. It covers products sold ready to consume, chilled, frozen, condensed or concentrated as liquids, semi-liquids, or pastes, and dehydrated as powders, granules, tablets, cubes, or comparable forms. Products may contain meat, poultry, fish, vegetables, pulses, cereals, fats, seasonings, extracts, hydrolysates, or other recipe ingredients.

The category boundary follows the complete semantic scope of CPC 3.0 subclass 23992. Codex CXS 117-1981 provides authoritative detail for bouillons and consommés and their ready-to-eat, condensed, concentrated, frozen, and dehydrated forms, but it is not used to narrow the wider CPC category to clear bouillons only. Soups containing particulates or purées remain covered when marketed primarily as soup or broth.

Excluded are infant-use or homogenized composite preparations classified separately, sauces and mixed condiments, prepared dishes whose primary identity is not soup or broth, separately marketed meat or vegetable extracts, and ingredients that are not sold as a soup, broth, or preparation thereof. Retail, food-service, or household cooking from independently marketed ingredients is outside the manufacturing foreground unless the declared product itself is a soup preparation and the study explicitly includes its use stage.

This PCR produces a factory-gate manufacturing dataset. Upstream production of ingredients, packaging, fuels, electricity, water supply, and treatment services is represented by linked upstream datasets. Distribution, retail, consumer preparation, consumption, and end-of-life are outside the foreground dataset and may be added in a downstream lifecycle model.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.soups-and-broths-and-preparations-thereof |
| classification_refs | CPC 3.0: 23992, Soups and broths and preparations thereof (exact) |
| covered_products | Finished soups and broths and preparations thereof in ready-to-consume, chilled, frozen, condensed, concentrated, liquid, semi-liquid, paste, dried, powdered, granulated, tablet, cube, or comparable market forms |
| excluded_products | Infant-use or homogenized composite preparations; sauces and mixed condiments; prepared dishes not primarily identified as soup or broth; separately marketed extracts; ingredients not sold as a soup, broth, or preparation thereof |
| representative_product | A packaged factory-gate soup or broth product in the declared as-sold market form; the category flow is representative only at CPC 23992 level and does not imply a particular recipe, concentration, preservation route, or package |
| production_route | Receipt and preparation of ingredients; formulation, extraction, cooking, or blending; route-specific concentration, dehydration, thermal treatment, chilling, or freezing; filling, sealing, and packaging; cleaning, utilities, and residue management |
| market_state | Finished product at factory gate in its declared as-sold physical form, concentration, preservation condition, and package configuration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Manufacture and provision at the factory gate of a soup, broth, or preparation thereof in its declared as-sold form |
| How much | 1 kg net mass of conforming finished product, excluding packaging mass |
| How well | Meeting the declared recipe or formulation, concentration or reconstitution instructions, physical form, preservation condition, quality specification, and applicable food requirements |
| How long or cycle | One completed production and packaging cycle; declared shelf life is metadata and is modelled downstream when storage losses or packaging-dependent shelf life are in scope |
| reference_flow_link | The reference product output of `filling_and_packaging`, normalized to 1 kg net conforming product at factory gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net finished product as sold |
| Reference product flow | Soups and broths and preparations thereof `6cd389be-4748-4401-96a4-ecdc07c041a3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product identity or recipe family; liquid, concentrated, frozen, dehydrated, cube, powder, or other market form; net mass; solids or moisture basis where relevant; concentration factor or preparation/reconstitution instructions where relevant; principal ingredient basis; preservation route; storage condition; package format and packaging mass; geography; technology; production period |

The category-level reference flow covers the full CPC 23992 identity but is not a silent substitute for a more specific real product flow. When a reviewed public Tiangong product flow more precisely matches the actual soup or broth form and product identity, use that flow instead, retain the CPC 23992 classification context, and preserve the same mass property and unit basis unless the specific flow requires a reviewed alternative. The actual product qualifiers remain mandatory in either case.

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package. Comparisons between ready-to-consume and concentrated or dehydrated products must additionally report the mass or servings of prepared product obtained according to the declared instructions; 1 kg as sold alone is not a functionally equivalent comparison basis across those forms.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | Reference product output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory results to 1 kg net conforming product as sold at factory gate. Exclude primary, secondary, and tertiary packaging mass from the reference amount and report packaging separately. |
| `ingredient_mass_basis` | Recipe ingredients, process water, intermediates, and product losses | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record wet mass as received and disclose dry matter, moisture, concentration, or solids content wherever it changes mass balance or comparability. |
| `reconstitution_basis` | Concentrated or dehydrated products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg prepared product per kg as-sold product | Calculate prepared mass using the manufacturer's declared preparation or reconstitution instructions. Keep the 1 kg as-sold reference result and report the prepared-product conversion as additional metadata. |
| `packaging_mass_separation` | Packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each packaging material and component by mass per 1 kg net product; do not include packaging in product net mass. |
| `energy_carrier_consistency` | Electricity, fuels, steam, heating, cooling, refrigeration, compressed air, and vacuum | Energy content or service property of the selected real flow | kWh, MJ, kg steam, or documented service unit | Preserve the unit and property of the selected upstream flow, document conversions and heating-value basis, and do not combine thermal and electrical energy without separate carrier records. |
| `water_use_and_discharge` | Ingredient water, process water, cleaning water, cooling water, and wastewater | Volume or mass property of the selected real flow | m3 or kg | Distinguish water incorporated into product from washing, cleaning, cooling, boiler, and other technical uses; distinguish withdrawal, recirculation, consumption, and discharge and document density conversions. |

## 5. System Boundary

The foreground starts when recipe ingredients, water, packaging, energy carriers, and other supplies are received at the manufacturing site. It ends when the conforming, filled, sealed, and packaged product is ready to leave the factory gate. Include direct site operations, product and material losses, cleaning and sanitation, shared utilities, on-site wastewater or residue treatment, and direct emissions attributable to the product.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ingredients and intermediate soup or broth preparations are received at the factory with supplier identity, mass, moisture or solids basis where material, geography, and upstream dataset references declared; packaging and utilities are received as separate inputs |
| starting_condition_role | Factory-gate input condition for the foreground manufacturing dataset |
| product_classification_scope | Finished soups, broths, and preparations thereof corresponding to the full semantic scope of CPC 3.0 subclass 23992, independently of a particular recipe or physical form |
| recursive_input_rule | A purchased input that is itself a soup, broth, or preparation thereof is recorded once as a technosphere product input at the actual received form and quantity; do not recursively reproduce its manufacture inside this foreground system |
| upstream_dataset_requirement | Every purchased ingredient, same-category intermediate, packaging material, fuel, electricity supply, water supply, and off-site treatment service requires a geographically and technologically appropriate upstream dataset or a disclosed proxy |
| disclosure | Declare product form, recipe family, concentration or reconstitution basis, preservation route, storage condition, packaging configuration, facility geography, production period, process inclusions, exclusions, and all proxy or allocation choices |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground manufacturing | Include ingredient receipt and preparation, formulation or cooking, route-specific stabilization, filling and packaging, cleaning, utilities, direct emissions, product losses, and on-site waste or wastewater handling through the factory gate. | eu-jrc-fdm-bref-2019; eu-pef-2021-2279 |
| `boundary_upstream_links` | purchased inputs and services | Represent production of purchased ingredients, packaging, energy, water, and off-site treatment through linked upstream datasets rather than silently excluding those burdens. | eu-pef-2021-2279 |
| `boundary_route_conditionals` | concentration, dehydration, chilling, freezing, thermal preservation, or aseptic processing | Include every operation actually used for the declared market form and preservation route and mark non-applicable route processes explicitly. | fao-who-cxs-117-1981; eu-jrc-fdm-bref-2019 |
| `boundary_downstream_separation` | distribution, retail, use, and end-of-life | Exclude downstream stages from this factory-gate dataset; add them only in a clearly identified lifecycle model, including reconstitution energy and water, storage losses, and packaging end-of-life when relevant. | eu-pef-2021-2279 |
| `boundary_no_unreported_cutoff` | all foreground flows | Record all known material, water, energy, product, co-product, waste, and direct elementary flows. Any omitted flow requires a quantified materiality justification and disclosure; no category-wide default cut-off is granted. | eu-pef-2021-2279 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ingredient_preparation` | Ingredient receipt, storage, preparation, and batching | required | Always | Receives, stores, washes, trims, cuts, mills, dissolves, thaws, and doses recipe materials as applicable | kg prepared formulation or batched ingredients |
| `cooking_and_blending` | Extraction, cooking, formulation, and blending | required | Always; select the operations actually used | Produces the formulated soup or broth base from prepared ingredients and recipe water | kg cooked or blended bulk base |
| `route_stabilization` | Concentration, dehydration, thermal stabilization, chilling, or freezing | conditional | Include every stabilization operation used to create the declared market form and preservation condition | Establishes concentration, moisture, microbial stability, and storage state | kg stabilized bulk product |
| `filling_and_packaging` | Filling, sealing, inspection, and packaging | required | Always | Produces conforming packaged product at the factory gate | 1 kg net conforming finished product |
| `cleaning_utilities_and_residues` | Cleaning, shared utilities, wastewater, and residue management | required | Always; disaggregate material cross-cutting services where possible | Supplies cleaning and utilities and records site wastes and direct emissions | Services and residues allocated to 1 kg net conforming product |

### Process: Ingredient receipt, storage, preparation, and batching (`ingredient_preparation`)

#### Inputs

##### Product flows

###### Recipe ingredients received (`recipe_ingredients`)

Record every ingredient by actual product identity and received mass, including meat, poultry, fish, vegetables, pulses, cereals, starches, fats, salt, seasonings, extracts, hydrolysates, additives, and returned same-category intermediate where used. Do not replace the recipe with a single generic food input.

- Selected flow: Product-specific Tiangong flow for each actual ingredient; use a documented proxy only when no adequate real flow exists
- Flow property / unit: Mass / kg
- Amount rule: measured received mass corrected for returns and inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared formulation leaving `ingredient_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_batch_materials`
- Sources: unsd-cpc-3-0-explanatory-notes-2025; fao-who-cxs-117-1981

###### Ingredient and preparation water (`ingredient_preparation_water`)

Record potable water incorporated into the formulation or used to wash, soak, dissolve, thaw, or transfer ingredients. Separate incorporated water from water discharged after preparation.

- Selected flow: Potable or process water flow matching the facility supply
- Flow property / unit: Volume / m3 or Mass / kg
- Amount rule: metered or batch-recorded water supplied to ingredient preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared formulation leaving `ingredient_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_water`
- Sources: fao-who-cxs-117-1981; eu-jrc-fdm-bref-2019

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared ingredients or formulation (`prepared_formulation`)

Record the measured mass transferred to cooking or blending, with moisture or solids content where needed to close the product mass balance.

- Selected flow: Product-specific prepared soup or broth formulation intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass from batch, tank, or line records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared formulation leaving `ingredient_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_batch_materials`
- Sources: eu-jrc-fdm-bref-2019

##### Waste flows

###### Vegetable trimming residues (`ingredient_residue_vegetable`)

Record vegetable trimming residues separately by material identity and actual destination before recovery or treatment.

- Selected flow: Vegetable preparation residue or waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured residue or difference from a documented ingredient-preparation mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared formulation leaving `ingredient_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_batch_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Animal-tissue preparation residues (`ingredient_residue_animal`)

Record animal-tissue preparation residues separately by material identity and actual destination before recovery or treatment.

- Selected flow: Animal-tissue food residue or waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured residue or difference from a documented ingredient-preparation mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared formulation leaving `ingredient_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_batch_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Screenings and filter solids (`ingredient_residue_screenings`)

Record screenings and filter solids separately by material identity and actual destination before recovery or treatment.

- Selected flow: Food-processing screenings or filter-residue waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured residue or difference from a documented ingredient-preparation mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared formulation leaving `ingredient_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_batch_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Spilled or off-specification ingredients (`ingredient_residue_offspec`)

Record spilled or off-specification ingredients separately by material identity and actual destination before recovery or treatment.

- Selected flow: Ingredient-specific food-residue waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured residue or difference from a documented ingredient-preparation mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared formulation leaving `ingredient_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_batch_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Ingredient preparation wastewater (`ingredient_preparation_wastewater`)

Record wastewater from washing, soaking, thawing, and preparation before any on-site treatment, with separately measured high-strength streams where available.

- Selected flow: Wastewater flow matching the receiving treatment route
- Flow property / unit: Volume / m3 or Mass / kg
- Amount rule: metered discharge or calculated water balance for ingredient preparation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared formulation leaving `ingredient_preparation`
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_water`
- Sources: eu-jrc-fdm-bref-2019

##### Elementary flows

### Process: Extraction, cooking, formulation, and blending (`cooking_and_blending`)

#### Inputs

##### Product flows

###### Prepared formulation input (`prepared_formulation_input`)

Record the actual prepared ingredient or formulation mass entering cooking, extraction, dissolution, or blending.

- Selected flow: Same product-specific intermediate used for `prepared_formulation`
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass into the cooking or blending line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_batch`
- Sources: fao-who-cxs-117-1981; eu-jrc-fdm-bref-2019

###### Recipe water added during cooking or blending (`cooking_recipe_water`)

Record water intentionally incorporated during extraction, cooking, dilution, dissolution, or formulation, separately from cleaning and utility water.

- Selected flow: Potable or process water flow matching the facility supply
- Flow property / unit: Volume / m3 or Mass / kg
- Amount rule: metered or batch-recorded water addition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_batch`
- Sources: fao-who-cxs-117-1981; eu-jrc-fdm-bref-2019

###### Purchased electricity for cooking and blending (`cooking_electricity`)

Record grid or supplier electricity used by extraction, cooking, mixing, homogenizing, and pumping equipment.

- Selected flow: Purchased electricity supply matching the facility voltage level and geography
- Flow property / unit: Energy / kWh
- Amount rule: dedicated meter reading or allocation from measured equipment demand and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_energy`
- Sources: eu-jrc-fdm-bref-2019

###### Purchased steam for cooking and blending (`cooking_steam`)

Record imported steam separately from fuels burned on site, retaining pressure, temperature, and condensate-return conditions.

- Selected flow: Purchased steam supply matching the declared steam conditions
- Flow property / unit: Energy or Mass / MJ or kg steam
- Amount rule: steam meter reading corrected for declared conditions and documented condensate return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_energy`
- Sources: eu-jrc-fdm-bref-2019

###### Purchased hot water for cooking and blending (`cooking_hot_water`)

Record imported hot water used as a heat carrier; do not combine it with recipe water or cleaning water.

- Selected flow: Purchased hot-water supply matching the declared supply and return temperatures
- Flow property / unit: Energy / MJ
- Amount rule: heat-meter reading or measured mass multiplied by documented temperature difference and heat capacity
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_energy`
- Sources: eu-jrc-fdm-bref-2019

###### Natural gas for cooking and blending (`cooking_natural_gas`)

Record natural gas burned in equipment serving cooking and blending, separately from other fuels.

- Selected flow: Natural gas supply matching the facility geography and pressure level
- Flow property / unit: Energy or Volume / MJ lower heating value or Nm3
- Amount rule: fuel meter reading with documented lower heating value and standard-condition conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_energy`
- Sources: eu-jrc-fdm-bref-2019

###### Liquefied petroleum gas for cooking and blending (`cooking_lpg`)

Record LPG burned in cooking and blending equipment as a distinct carrier.

- Selected flow: Liquefied petroleum gas supply matching the facility market
- Flow property / unit: Mass or Energy / kg or MJ lower heating value
- Amount rule: measured delivery or tank inventory balance with documented lower heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_energy`
- Sources: eu-jrc-fdm-bref-2019

###### Diesel for cooking and blending (`cooking_diesel`)

Record diesel used by included thermal or mobile equipment serving cooking and blending, separately from other fuels.

- Selected flow: Diesel fuel supply matching the facility market
- Flow property / unit: Mass or Energy / kg or MJ lower heating value
- Amount rule: measured issue or tank inventory balance with documented density and lower heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_energy`
- Sources: eu-jrc-fdm-bref-2019

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cooked or blended soup or broth base (`bulk_soup_base`)

Record the measured mass and declared solids or moisture state of the bulk base transferred to stabilization or directly to filling.

- Selected flow: Product-specific bulk soup, broth, or preparation intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured good-product transfer mass after cooking or blending
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_batch`
- Sources: fao-who-cxs-117-1981

##### Waste flows

###### Bones from cooking or extraction (`cooking_residue_bones`)

Record bones from cooking or extraction separately by actual material identity and destination before recovery or treatment.

- Selected flow: Bone food-residue waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured residue or difference from a documented cooking-batch mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_batch`
- Sources: eu-jrc-fdm-bref-2019

###### Spent vegetable and ingredient solids (`cooking_residue_spent_solids`)

Record spent vegetable and ingredient solids separately by actual material identity and destination before recovery or treatment.

- Selected flow: Spent food-solid residue waste flow matching the principal material
- Flow property / unit: Mass / kg
- Amount rule: measured residue or difference from a documented cooking-batch mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_batch`
- Sources: eu-jrc-fdm-bref-2019

###### Cooking filter residues (`cooking_residue_filter_solids`)

Record cooking filter residues separately by actual material identity and destination before recovery or treatment.

- Selected flow: Food-processing filter-residue waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured residue or difference from a documented cooking-batch mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_batch`
- Sources: eu-jrc-fdm-bref-2019

###### Off-specification bulk soup or broth (`cooking_residue_offspec_product`)

Record off-specification bulk soup or broth separately by actual material identity and destination before recovery or treatment.

- Selected flow: Soup or broth product-residue waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured residue or difference from a documented cooking-batch mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_batch`
- Sources: eu-jrc-fdm-bref-2019

##### Elementary flows

###### Fossil carbon dioxide from cooking (`cooking_emission_co2_fossil`)

Record direct fossil CO2 released from included cooking fuel combustion; upstream supply emissions remain in fuel datasets.

- Selected flow: Carbon dioxide, fossil
- Flow property / unit: Mass / kg
- Amount rule: measured emission or collected fuel use multiplied by a documented pollutant-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_emissions`
- Sources: eu-jrc-fdm-bref-2019

###### Biogenic carbon dioxide from cooking (`cooking_emission_co2_biogenic`)

Record direct biogenic CO2 released from included cooking fuel combustion; upstream supply emissions remain in fuel datasets.

- Selected flow: Carbon dioxide, biogenic
- Flow property / unit: Mass / kg
- Amount rule: measured emission or collected fuel use multiplied by a documented pollutant-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_emissions`
- Sources: eu-jrc-fdm-bref-2019

###### Methane from cooking combustion (`cooking_emission_ch4`)

Record direct CH4 released from included cooking fuel combustion; upstream supply emissions remain in fuel datasets.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or collected fuel use multiplied by a documented pollutant-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_emissions`
- Sources: eu-jrc-fdm-bref-2019

###### Nitrous oxide from cooking combustion (`cooking_emission_n2o`)

Record direct N2O released from included cooking fuel combustion; upstream supply emissions remain in fuel datasets.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or collected fuel use multiplied by a documented pollutant-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_emissions`
- Sources: eu-jrc-fdm-bref-2019

###### Nitrogen oxides from cooking combustion (`cooking_emission_nox`)

Record direct NOx released from included cooking fuel combustion; upstream supply emissions remain in fuel datasets.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or collected fuel use multiplied by a documented pollutant-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_emissions`
- Sources: eu-jrc-fdm-bref-2019

###### Sulphur dioxide from cooking combustion (`cooking_emission_so2`)

Record direct SO2 released from included cooking fuel combustion; upstream supply emissions remain in fuel datasets.

- Selected flow: Sulphur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured emission or collected fuel use multiplied by a documented pollutant-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_emissions`
- Sources: eu-jrc-fdm-bref-2019

###### Particulate matter from cooking combustion (`cooking_emission_pm`)

Record direct particulate matter released from included cooking fuel combustion; upstream supply emissions remain in fuel datasets.

- Selected flow: Particulate matter to air at the measured size fraction
- Flow property / unit: Mass / kg
- Amount rule: measured emission or collected fuel use multiplied by a documented pollutant-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bulk soup or broth base output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_emissions`
- Sources: eu-jrc-fdm-bref-2019

### Process: Concentration, dehydration, thermal stabilization, chilling, or freezing (`route_stabilization`)

#### Inputs

##### Product flows

###### Bulk soup or broth base for stabilization (`stabilization_bulk_input`)

Record the bulk product entering each actual concentration, dehydration, pasteurization, sterilization, aseptic, chilling, or freezing step. Skip operations not used by the declared route.

- Selected flow: Same product-specific intermediate used for `bulk_soup_base`
- Flow property / unit: Mass / kg
- Amount rule: measured input mass to each included stabilization operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilization_batch`
- Sources: fao-who-cxs-117-1981; eu-jrc-fdm-bref-2019

###### Stabilization electricity (`stabilization_electricity`)

Record electricity used by concentration, dehydration, thermal-treatment, chilling, or freezing equipment.

- Selected flow: Purchased electricity supply matching the facility voltage level and geography
- Flow property / unit: Energy / kWh
- Amount rule: route submeter reading or allocation from measured equipment demand and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_energy`
- Sources: eu-jrc-fdm-bref-2019

###### Stabilization steam (`stabilization_steam`)

Record purchased steam used by evaporators, dryers, pasteurizers, sterilizers, or post-treatment equipment.

- Selected flow: Purchased steam supply matching the declared steam conditions
- Flow property / unit: Energy or Mass / MJ or kg steam
- Amount rule: steam meter reading corrected for declared conditions and condensate return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_energy`
- Sources: eu-jrc-fdm-bref-2019

###### Stabilization natural gas (`stabilization_natural_gas`)

Record natural gas burned by included stabilization equipment separately from other fuels and purchased heat.

- Selected flow: Natural gas supply matching the facility geography and pressure level
- Flow property / unit: Energy or Volume / MJ lower heating value or Nm3
- Amount rule: fuel meter reading with documented lower heating value and standard-condition conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_energy`
- Sources: eu-jrc-fdm-bref-2019

###### Stabilization cooling water (`stabilization_cooling_water`)

Record fresh cooling-water make-up supplied to the stabilization route; recirculated water is tracked separately and not counted repeatedly.

- Selected flow: Process-water supply matching the facility source
- Flow property / unit: Volume / m3
- Amount rule: make-up meter reading after separating recirculation and blowdown
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_energy`
- Sources: eu-jrc-fdm-bref-2019

###### Ammonia refrigerant make-up (`stabilization_r717_makeup`)

Record R717 (ammonia) refrigerant charged to replace losses from included chilling or freezing systems.

- Selected flow: Ammonia (R717) refrigerant product flow
- Flow property / unit: Mass / kg
- Amount rule: service-log make-up mass allocated to the represented route; do not record the circulating charge as consumption
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_energy`
- Sources: eu-jrc-fdm-bref-2019

###### R404A refrigerant make-up (`stabilization_r404a_makeup`)

Record R404A refrigerant charged to replace losses from included chilling or freezing systems.

- Selected flow: R404A refrigerant product flow
- Flow property / unit: Mass / kg
- Amount rule: service-log make-up mass allocated to the represented route; do not record the circulating charge as consumption
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_energy`
- Sources: eu-jrc-fdm-bref-2019

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stabilized bulk product (`stabilized_bulk_product`)

Record the mass, physical form, concentration or solids content, temperature or frozen state where relevant, and preservation route of product released to filling.

- Selected flow: Product-specific stabilized soup, broth, or preparation intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured conforming transfer mass from stabilization to filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_stabilization_batch`
- Sources: fao-who-cxs-117-1981

##### Waste flows

###### Stabilization condensate (`stabilization_condensate`)

Record stabilization condensate separately by recovery or treatment destination and before any netting.

- Selected flow: Process condensate flow
- Flow property / unit: Volume / m3
- Amount rule: measured condensate quantity before any recovery or discharge
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_residues`
- Sources: eu-jrc-fdm-bref-2019

###### Stabilization wastewater (`stabilization_wastewater`)

Record stabilization wastewater separately by recovery or treatment destination and before any netting.

- Selected flow: Wastewater flow matching the receiving treatment route
- Flow property / unit: Volume / m3
- Amount rule: metered discharge or stabilization water balance after separating condensate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_residues`
- Sources: eu-jrc-fdm-bref-2019

###### Rejected stabilized product (`stabilization_rejected_product`)

Record rejected stabilized product separately by recovery or treatment destination and before any netting.

- Selected flow: Soup or broth product-residue waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured rejected product before rework, recovery, or treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_residues`
- Sources: eu-jrc-fdm-bref-2019

##### Elementary flows

###### Fossil carbon dioxide from stabilization (`stabilization_emission_co2_fossil`)

Record direct fossil CO2 released from included stabilization equipment; upstream supply emissions remain in carrier datasets.

- Selected flow: Carbon dioxide, fossil
- Flow property / unit: Mass / kg
- Amount rule: measured release or collected activity multiplied by a documented substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_residues`
- Sources: eu-jrc-fdm-bref-2019

###### Biogenic carbon dioxide from stabilization (`stabilization_emission_co2_biogenic`)

Record direct biogenic CO2 released from included stabilization equipment; upstream supply emissions remain in carrier datasets.

- Selected flow: Carbon dioxide, biogenic
- Flow property / unit: Mass / kg
- Amount rule: measured release or collected activity multiplied by a documented substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_residues`
- Sources: eu-jrc-fdm-bref-2019

###### Methane from stabilization combustion (`stabilization_emission_ch4`)

Record direct CH4 released from included stabilization equipment; upstream supply emissions remain in carrier datasets.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or collected activity multiplied by a documented substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_residues`
- Sources: eu-jrc-fdm-bref-2019

###### Nitrous oxide from stabilization combustion (`stabilization_emission_n2o`)

Record direct N2O released from included stabilization equipment; upstream supply emissions remain in carrier datasets.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or collected activity multiplied by a documented substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_residues`
- Sources: eu-jrc-fdm-bref-2019

###### Nitrogen oxides from stabilization combustion (`stabilization_emission_nox`)

Record direct NOx released from included stabilization equipment; upstream supply emissions remain in carrier datasets.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or collected activity multiplied by a documented substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_residues`
- Sources: eu-jrc-fdm-bref-2019

###### Sulphur dioxide from stabilization combustion (`stabilization_emission_so2`)

Record direct SO2 released from included stabilization equipment; upstream supply emissions remain in carrier datasets.

- Selected flow: Sulphur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or collected activity multiplied by a documented substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_residues`
- Sources: eu-jrc-fdm-bref-2019

###### Particulate matter from stabilization combustion (`stabilization_emission_pm`)

Record direct particulate matter released from included stabilization equipment; upstream supply emissions remain in carrier datasets.

- Selected flow: Particulate matter to air at the measured size fraction
- Flow property / unit: Mass / kg
- Amount rule: measured release or collected activity multiplied by a documented substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_residues`
- Sources: eu-jrc-fdm-bref-2019

###### Ammonia refrigerant emission (`stabilization_emission_r717`)

Record direct R717 refrigerant released from included stabilization equipment; upstream supply emissions remain in carrier datasets.

- Selected flow: Ammonia (R717) to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or collected activity multiplied by a documented substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_residues`
- Sources: eu-jrc-fdm-bref-2019

###### R404A refrigerant emission (`stabilization_emission_r404a`)

Record direct R404A refrigerant released from included stabilization equipment; upstream supply emissions remain in carrier datasets.

- Selected flow: R404A to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or collected activity multiplied by a documented substance-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg stabilized bulk product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stabilization_residues`
- Sources: eu-jrc-fdm-bref-2019

### Process: Filling, sealing, inspection, and packaging (`filling_and_packaging`)

#### Inputs

##### Product flows

###### Bulk product supplied to filling (`filling_bulk_input`)

Record the measured conforming bulk product mass entering filling, whether it bypasses a separate stabilization step or arrives from it.

- Selected flow: Product-specific bulk soup, broth, or preparation intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured mass entering the filler
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product`
- Sources: eu-jrc-fdm-bref-2019

###### Tinplate or steel packaging (`packaging_steel`)

Record tinplate or other steel cans, lids, and closures; keep aluminium components out of this row.

- Selected flow: Tinplate or steel packaging product flow
- Flow property / unit: Mass / kg
- Amount rule: verified steel component mass multiplied by units consumed, including measured start-up and reject losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Aluminium packaging (`packaging_aluminium`)

Record aluminium cans, lids, foils, or laminate layers separately from steel and plastics.

- Selected flow: Aluminium packaging product flow
- Flow property / unit: Mass / kg
- Amount rule: verified aluminium component mass multiplied by units consumed, including measured start-up and reject losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Glass packaging (`packaging_glass`)

Record glass jars or bottles without combining their metal, plastic, or paper closures and labels.

- Selected flow: Container-glass packaging product flow
- Flow property / unit: Mass / kg
- Amount rule: verified glass container mass multiplied by units consumed, including measured start-up and reject losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### PET packaging (`packaging_pet`)

Record polyethylene terephthalate containers, trays, or layers as a separate polymer row.

- Selected flow: Polyethylene terephthalate packaging product flow
- Flow property / unit: Mass / kg
- Amount rule: verified PET component mass multiplied by units consumed, including measured start-up and reject losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Polypropylene packaging (`packaging_pp`)

Record polypropylene tubs, trays, closures, films, or laminate layers as a separate polymer row.

- Selected flow: Polypropylene packaging product flow
- Flow property / unit: Mass / kg
- Amount rule: verified PP component mass multiplied by units consumed, including measured start-up and reject losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Polyethylene packaging (`packaging_pe`)

Record polyethylene films, pouches, closures, or laminate layers separately from PET and polypropylene.

- Selected flow: Polyethylene packaging product flow matching the declared grade
- Flow property / unit: Mass / kg
- Amount rule: verified PE component mass multiplied by units consumed, including measured start-up and reject losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Paperboard packaging (`packaging_paperboard`)

Record folding cartons, sleeves, and paperboard components separately from corrugated cases and labels.

- Selected flow: Paperboard packaging product flow
- Flow property / unit: Mass / kg
- Amount rule: verified paperboard component mass multiplied by units consumed, including measured start-up and reject losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Corrugated-board packaging (`packaging_corrugated_board`)

Record corrugated shipping cases, dividers, and pads separately from paperboard cartons.

- Selected flow: Corrugated-board packaging product flow
- Flow property / unit: Mass / kg
- Amount rule: verified corrugated component mass multiplied by units consumed, including measured start-up and reject losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Paper labels (`packaging_paper_label`)

Record paper labels separately from containers, cartons, and plastic labels.

- Selected flow: Paper label product flow
- Flow property / unit: Mass / kg
- Amount rule: verified label mass multiplied by units consumed, including measured start-up and reject losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Wooden pallets (`packaging_wood_pallet`)

Record the consumed or allocated share of wooden pallets; reusable pallet trips and losses shall be disclosed.

- Selected flow: Wooden pallet product flow
- Flow property / unit: Mass or Item / kg or pallet
- Amount rule: pallet mass or item count multiplied by the documented loss or trip-allocation share
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Filling and packaging electricity (`packaging_electricity`)

Record electricity used by fillers, seamers, cappers, inspection, coding, conveying, and packaging equipment.

- Selected flow: Purchased electricity supply matching the facility voltage level and geography
- Flow property / unit: Energy / kWh
- Amount rule: line meter reading or allocation from measured demand and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_energy`
- Sources: eu-jrc-fdm-bref-2019

###### Post-fill treatment steam (`packaging_steam`)

Record purchased steam used by retorts or other post-fill heat treatment separately from line electricity.

- Selected flow: Purchased steam supply matching the declared steam conditions
- Flow property / unit: Energy or Mass / MJ or kg steam
- Amount rule: steam meter reading corrected for declared conditions and condensate return
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_energy`
- Sources: eu-jrc-fdm-bref-2019

###### Filling-line cooling water (`packaging_cooling_water`)

Record fresh cooling-water make-up used after filling or retorting, excluding recirculated water counted within the loop.

- Selected flow: Process-water supply matching the facility source
- Flow property / unit: Volume / m3
- Amount rule: make-up meter reading after separating recirculation and blowdown
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_energy`
- Sources: eu-jrc-fdm-bref-2019

###### Natural gas for post-fill treatment (`packaging_natural_gas`)

Record natural gas burned by equipment dedicated to filling-line or post-fill treatment.

- Selected flow: Natural gas supply matching the facility geography and pressure level
- Flow property / unit: Energy or Volume / MJ lower heating value or Nm3
- Amount rule: fuel meter reading with documented lower heating value and standard-condition conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_energy`
- Sources: eu-jrc-fdm-bref-2019

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming soup, broth, or preparation thereof (`finished_product`)

This is the quantitative reference. Record only conforming net product in its declared as-sold form; use the category-level reference UUID unless a reviewed, more product-specific public Tiangong flow is available.

- Selected flow: Soups and broths and preparations thereof `6cd389be-4748-4401-96a4-ecdc07c041a3`, or a reviewed more specific real product flow under the replacement rule in Section 3
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net conforming finished product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net finished product as sold at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_final_product`
- Sources: unsd-cpc-3-0-explanatory-notes-2025

##### Waste flows

###### Product rejects and filling losses (`filling_product_losses`)

Record start-up, changeover, overfill, underfill, spill, seal-failure, inspection-reject, and returned bulk product quantities and actual destinations.

- Selected flow: Product-specific food residue or waste flow
- Flow property / unit: Mass / kg
- Amount rule: measured reject and loss mass before any recovery credit
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product`
- Sources: eu-jrc-fdm-bref-2019

###### Steel packaging waste (`packaging_waste_steel`)

Record the damaged, trimmed, misprinted, unsealed, or otherwise rejected steel packaging waste separately from other packaging materials and by treatment destination.

- Selected flow: steel packaging waste flow
- Flow property / unit: Mass / kg
- Amount rule: material issued minus material incorporated in conforming output and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Aluminium packaging waste (`packaging_waste_aluminium`)

Record the damaged, trimmed, misprinted, unsealed, or otherwise rejected aluminium packaging waste separately from other packaging materials and by treatment destination.

- Selected flow: aluminium packaging waste flow
- Flow property / unit: Mass / kg
- Amount rule: material issued minus material incorporated in conforming output and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Glass packaging waste (`packaging_waste_glass`)

Record the damaged, trimmed, misprinted, unsealed, or otherwise rejected glass packaging waste separately from other packaging materials and by treatment destination.

- Selected flow: waste container-glass flow
- Flow property / unit: Mass / kg
- Amount rule: material issued minus material incorporated in conforming output and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019

###### PET packaging waste (`packaging_waste_pet`)

Record the damaged, trimmed, misprinted, unsealed, or otherwise rejected pet packaging waste separately from other packaging materials and by treatment destination.

- Selected flow: waste polyethylene terephthalate packaging flow
- Flow property / unit: Mass / kg
- Amount rule: material issued minus material incorporated in conforming output and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Polypropylene packaging waste (`packaging_waste_pp`)

Record the damaged, trimmed, misprinted, unsealed, or otherwise rejected polypropylene packaging waste separately from other packaging materials and by treatment destination.

- Selected flow: waste polypropylene packaging flow
- Flow property / unit: Mass / kg
- Amount rule: material issued minus material incorporated in conforming output and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Polyethylene packaging waste (`packaging_waste_pe`)

Record the damaged, trimmed, misprinted, unsealed, or otherwise rejected polyethylene packaging waste separately from other packaging materials and by treatment destination.

- Selected flow: waste polyethylene packaging flow matching the declared grade
- Flow property / unit: Mass / kg
- Amount rule: material issued minus material incorporated in conforming output and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Paperboard packaging waste (`packaging_waste_paperboard`)

Record the damaged, trimmed, misprinted, unsealed, or otherwise rejected paperboard packaging waste separately from other packaging materials and by treatment destination.

- Selected flow: waste paperboard packaging flow
- Flow property / unit: Mass / kg
- Amount rule: material issued minus material incorporated in conforming output and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Corrugated-board packaging waste (`packaging_waste_corrugated_board`)

Record the damaged, trimmed, misprinted, unsealed, or otherwise rejected corrugated-board packaging waste separately from other packaging materials and by treatment destination.

- Selected flow: waste corrugated-board packaging flow
- Flow property / unit: Mass / kg
- Amount rule: material issued minus material incorporated in conforming output and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Paper-label waste (`packaging_waste_paper_label`)

Record the damaged, trimmed, misprinted, unsealed, or otherwise rejected paper-label waste separately from other packaging materials and by treatment destination.

- Selected flow: waste paper-label flow
- Flow property / unit: Mass / kg
- Amount rule: material issued minus material incorporated in conforming output and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Wooden-pallet waste (`packaging_waste_wood_pallet`)

Record the damaged, trimmed, misprinted, unsealed, or otherwise rejected wooden-pallet waste separately from other packaging materials and by treatment destination.

- Selected flow: waste wooden-pallet flow
- Flow property / unit: Mass / kg
- Amount rule: material issued minus material incorporated in conforming output and documented returns
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming packaged product output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: eu-jrc-fdm-bref-2019

##### Elementary flows

### Process: Cleaning, shared utilities, wastewater, and residue management (`cleaning_utilities_and_residues`)

#### Inputs

##### Product flows

###### Cleaning water (`cleaning_water`)

Record fresh water used for manual cleaning, cleaning-in-place, and sanitation; keep recovered and recirculated solution separate.

- Selected flow: Process-water supply matching the facility source
- Flow property / unit: Volume / m3
- Amount rule: metered make-up water or validated CIP recipe water multiplied by completed cycles
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Sodium hydroxide cleaning agent (`cleaning_sodium_hydroxide`)

Record sodium hydroxide supplied to cleaning and CIP systems as delivered product and active-substance mass.

- Selected flow: Sodium hydroxide product flow matching delivered concentration
- Flow property / unit: Mass / kg
- Amount rule: dosing record or purchase-and-inventory balance, with concentration conversion retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Nitric acid cleaning agent (`cleaning_nitric_acid`)

Record nitric acid supplied to cleaning and CIP systems separately from other acids.

- Selected flow: Nitric acid product flow matching delivered concentration
- Flow property / unit: Mass / kg
- Amount rule: dosing record or purchase-and-inventory balance, with concentration conversion retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Peracetic acid disinfectant (`cleaning_peracetic_acid`)

Record peracetic acid disinfectant separately from detergents, alkalis, and other disinfectants.

- Selected flow: Peracetic acid product flow matching delivered concentration
- Flow property / unit: Mass / kg
- Amount rule: dosing record or purchase-and-inventory balance, with concentration conversion retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Sodium hypochlorite disinfectant (`cleaning_sodium_hypochlorite`)

Record sodium hypochlorite disinfectant separately from other cleaning chemicals.

- Selected flow: Sodium hypochlorite product flow matching delivered concentration
- Flow property / unit: Mass / kg
- Amount rule: dosing record or purchase-and-inventory balance, with available-chlorine conversion retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_materials`
- Sources: eu-jrc-fdm-bref-2019

###### Residual shared electricity (`shared_electricity`)

Record only electricity not directly assigned to another process, after reconciling site and submeters.

- Selected flow: Purchased electricity supply matching the facility voltage level and geography
- Flow property / unit: Energy / kWh
- Amount rule: measured residual electricity allocated with a documented causal physical driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_utilities`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Residual shared steam (`shared_steam`)

Record only purchased steam not directly assigned to another process.

- Selected flow: Purchased steam supply matching the declared steam conditions
- Flow property / unit: Energy or Mass / MJ or kg steam
- Amount rule: measured residual steam allocated causally, with steam conditions and condensate return retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_utilities`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Residual shared natural gas (`shared_natural_gas`)

Record only natural gas not directly assigned to another process or boiler output.

- Selected flow: Natural gas supply matching the facility geography and pressure level
- Flow property / unit: Energy or Volume / MJ lower heating value or Nm3
- Amount rule: measured residual fuel allocated causally with lower heating value retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_utilities`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Residual shared diesel (`shared_diesel`)

Record diesel used by shared included equipment separately from other fuels.

- Selected flow: Diesel fuel supply matching the facility market
- Flow property / unit: Mass or Energy / kg or MJ lower heating value
- Amount rule: measured issue or inventory balance allocated causally with density and lower heating value retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_utilities`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Residual shared LPG (`shared_lpg`)

Record LPG used by shared included equipment separately from other fuels.

- Selected flow: Liquefied petroleum gas supply matching the facility market
- Flow property / unit: Mass or Energy / kg or MJ lower heating value
- Amount rule: measured issue or inventory balance allocated causally with lower heating value retained
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_utilities`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Shared compressed air (`shared_compressed_air`)

Record compressed-air service used by included operations and not already assigned to a process.

- Selected flow: Compressed-air utility service at the declared pressure
- Flow property / unit: Volume or service energy / Nm3 or kWh
- Amount rule: submetered quantity or compressor electricity allocated from measured air demand
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_utilities`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Shared refrigeration electricity (`shared_refrigeration_electricity`)

Record electricity for shared cold stores and refrigeration systems not assigned to stabilization or filling.

- Selected flow: Purchased electricity supply matching the facility voltage level and geography
- Flow property / unit: Energy / kWh
- Amount rule: refrigeration submeter reading allocated by measured cooling load or justified temperature-time-volume driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_shared_utilities`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

###### Waste and wastewater received for on-site management (`site_residue_inputs`)

Record each foreground waste or wastewater stream transferred into on-site treatment without double counting the upstream process output.

- Selected flow: Same waste or wastewater flow used at the originating process
- Flow property / unit: Mass / kg or Volume / m3
- Amount rule: measured transfer quantity reconciled to originating-process records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_waste`
- Sources: eu-jrc-fdm-bref-2019

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered material or energy exported (`recovered_coproducts`)

Record any recovered product, animal-feed material, biogas, heat, electricity, or other useful co-product leaving the system before applying allocation or substitution.

- Selected flow: Product-specific recovered material or energy flow
- Flow property / unit: Flow-specific property and unit
- Amount rule: measured exported quantity without avoided-burden netting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_waste`
- Sources: eu-jrc-fdm-bref-2019; eu-pef-2021-2279

##### Waste flows

###### Wastewater and solid residues leaving the site (`site_waste_outputs`)

Record treated or untreated wastewater, sludge, food residues, used cleaning solution, and other wastes by destination and treatment route. Do not treat sale or recycling as disappearance.

- Selected flow: Waste-specific flow matching the off-site treatment route
- Flow property / unit: Mass / kg or Volume / m3
- Amount rule: measured dispatch or discharge quantity reconciled with treatment mass balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_waste`
- Sources: eu-jrc-fdm-bref-2019

##### Elementary flows

###### Direct utility and treatment emissions (`site_direct_emissions`)

Record pollutant-specific emissions to air, water, or soil from boilers, refrigerant losses, wastewater treatment, and other on-site utilities or residue management.

- Selected flow: Pollutant-specific elementary flow matching monitored or calculated release
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculation from collected activity data and a documented factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net conforming finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_emissions`
- Sources: eu-jrc-fdm-bref-2019

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | multifunctional processes and shared lines | Avoid allocation where practicable by process subdivision, separate meters, batch records, or system expansion. Keep soup or broth production physically distinguishable from other products. | eu-pef-2021-2279 |
| `allocation_causal_physical` | shared utilities, cleaning, storage, and treatment | When subdivision is not practicable, allocate using a documented causal physical driver such as equipment operating time, metered demand, cleanable surface and cycle count, wastewater load, or product mass only when mass is demonstrably causal. | eu-pef-2021-2279 |
| `allocation_coproducts` | recovered food material, feed material, extracts, biogas, heat, or other co-products | Record gross co-product quantities first. Apply a relevant, quantifiable physical relationship when it represents causality; use economic allocation only when subdivision, system expansion, and a defensible physical relationship are not feasible. | eu-pef-2021-2279 |
| `allocation_economic_disclosure` | economic allocation | If economic allocation is used, disclose the market, price basis, currency, averaging period, co-product condition and point of sale, factors, and sensitivity to price variation. | eu-pef-2021-2279 |
| `allocation_waste_no_credit` | wastes sent to recycling, energy recovery, feed use, treatment, or disposal | Do not silently subtract an avoided burden. Record the physical waste output and treatment or recovery route; any substitution or recycling credit belongs to an explicitly documented expanded-system or lifecycle-model method. | eu-pef-2021-2279 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_ingredient_batch_materials` | `ingredient_preparation` | ingredients, prepared formulation, and residues | batch tickets, receiving records, inventory, scales, formulation system | material identity; supplier; lot; opening and closing inventory; received, returned, transferred, and residue mass; moisture or solids where material | calibrated scales and reconciled inventory or formulation records | kg and mass fraction | each lot and batch | representative continuous 12 months or complete declared campaign | all included lines and facilities | sum by material and destination, reconcile each batch, then divide by qualifying output | scale calibration, lot traceability, formulation revision, and mass-balance reconciliation |
| `cp_ingredient_water` | `ingredient_preparation` | preparation water and wastewater | meters, tank records, recipes, and discharge records | water source; meter start/end; recipe addition; recirculation; discharge; density conversion | dedicated meter where available, otherwise validated water balance | m3 and kg | each batch or meter interval | same period as product output | all preparation operations | separate incorporated, recirculated, consumed, and discharged water before normalization | meter calibration and balance reconciliation |
| `cp_cooking_batch` | `cooking_and_blending` | formulation input, recipe water, bulk output, and residues | batch historian, recipe system, tank scales, transfer meters | batch id; input masses; water addition; output mass; solids or moisture; rejects; rework | calibrated batch measurement and transfer reconciliation | kg and mass fraction | each batch | same period as product output | all included cooking, extraction, and blending lines | reconcile input, output, evaporation, and residue by batch; aggregate qualifying batches | instrument calibration, approved recipe, batch release, and mass balance |
| `cp_cooking_energy` | `cooking_and_blending` | cooking and blending energy | electricity, fuel, steam, and heat meters; equipment runtime | carrier; meter start/end; steam condition; equipment power; runtime; production mass | direct process meter or validated engineering calculation from measured operation | kWh, MJ, kg steam, or carrier unit | continuous or each batch | same period as product output | all included equipment | subtract non-production baseload where evidenced and allocate by causal demand | meter calibration, energy conversion sheet, and operating log |
| `cp_cooking_emissions` | `cooking_and_blending` | direct cooking emissions | emissions monitoring, fuel analysis, fuel records, and approved factors | pollutant; measured concentration and flow or fuel quantity; factor; oxidation basis; operating time | direct measurement preferred; otherwise activity data multiplied by documented factor | kg pollutant | monitoring interval or each fuel period | same period as product output | all direct-emission sources in scope | sum pollutant mass and normalize to bulk output | monitoring QA, laboratory result, factor provenance, and calculation record |
| `cp_stabilization_batch` | `route_stabilization` | bulk input and stabilized output | batch historian, mass meters, moisture or solids tests, temperature records | route; input/output mass; solids; moisture; concentration; time; temperature; release status | calibrated measurement and quality-control test | kg, mass fraction, °C, and time | each batch or production run | same period as product output | every included stabilization line | reconcile each included operation and aggregate only released output | calibration, laboratory method, route record, and release record |
| `cp_stabilization_energy` | `route_stabilization` | energy, refrigerants, and auxiliaries | meters, equipment historian, refrigerant log, and purchase records | carrier; meter start/end; runtime; make-up; leakage; output mass | direct metering or validated equipment calculation | flow-specific unit | continuous, each run, or each make-up event | same period as product output | all included stabilization equipment | aggregate separately by carrier and route before normalization | meter calibration, service records, and engineering calculation |
| `cp_stabilization_residues` | `route_stabilization` | condensate, wastewater, rejects, and direct emissions | meters, waste tickets, mass balance, and emissions records | stream identity; quantity; recovery; destination; pollutant; factor or measurement | direct measurement or documented mass/activity balance | kg, m3, or kg pollutant | each run or dispatch | same period as product output | all included stabilization operations | report gross recovery and loss streams separately; normalize to released output | reconciliation, waste receipt, monitoring QA, and factor provenance |
| `cp_packaging_materials` | `filling_and_packaging` | packaging incorporated and lost | packaging specification, bills of material, counts, weights, inventory, and reject logs | component; material; unit mass; units issued, returned, incorporated, and rejected | verified component weighing and line counts or inventory balance | kg and count | each packaging batch or format | same period as product output | all primary, secondary, and tertiary packaging | calculate incorporated and loss mass separately by material and component | approved specification, scale calibration, inventory reconciliation, and reject log |
| `cp_packaging_energy` | `filling_and_packaging` | filling, retort, cooling, inspection, and packaging energy | line meters and equipment historian | carrier; meter start/end; demand; runtime; line output | direct line meter or validated engineering calculation | kWh, MJ, kg steam, or carrier unit | continuous or each production run | same period as product output | all included filling and packaging equipment | allocate by measured causal demand; separate post-fill treatment | meter calibration and production log |
| `cp_final_product` | `filling_and_packaging` | bulk input, conforming product, and product rejects | filler mass meter, checkweigher, batch release, reject and rework logs | bulk input; unit net mass; units released; rejects; rework; product form; lot | calibrated mass measurement and released-unit count | kg and count | each lot and batch | same period as all other records | all included product formats and lines | conforming net mass equals released units times verified net mass; report rejects before rework netting | checkweigher verification, release record, traceability, and mass balance |
| `cp_cleaning_materials` | `cleaning_utilities_and_residues` | cleaning water and agents | CIP historian, meters, chemical dosing, purchases, and inventory | cycle; equipment; water; chemical concentration; solution recovery; discharge | direct meter/dosing records or validated recipe times cycles | m3, kg, and concentration | each cleaning cycle | same period as product output | all product-contact and allocated non-contact cleaning | sum by chemical and water use, subtract documented recovered solution only once, allocate causally | meter calibration, dosing verification, cycle completion, and inventory reconciliation |
| `cp_shared_utilities` | `cleaning_utilities_and_residues` | shared energy and utility services | site and submeter data, utility bills, runtime, and production records | carrier; meter start/end; submeter quantity; equipment runtime; output by line | metering hierarchy with documented residual allocation | flow-specific unit | continuous or billing interval | same period as product output | complete facility with included and excluded users identified | direct assignment first; allocate residual only with causal physical driver | meter hierarchy, bill reconciliation, allocation worksheet, and sensitivity check |
| `cp_site_waste` | `cleaning_utilities_and_residues` | waste, wastewater, recovered products, and treatment outputs | flow meters, waste manifests, weighbridge, treatment logs, and sales records | stream; origin; quantity; composition; treatment; destination; recovered output | measured dispatch/discharge and treatment mass balance | kg or m3 | each dispatch, discharge interval, or treatment batch | same period as product output | all on-site and off-site routes used by the foreground | reconcile origin, treatment input, recovered output, emissions, and final waste without netting | manifests, receiver confirmation, meter calibration, and treatment balance |
| `cp_site_emissions` | `cleaning_utilities_and_residues` | direct utility and treatment emissions | continuous monitoring, periodic tests, fuel/refrigerant records, treatment data, and approved factors | source; pollutant; concentration; flow; activity; factor; operating time | direct measurement preferred; otherwise activity data multiplied by documented factor | kg pollutant | monitoring interval or activity period | same period as product output | every direct air, water, and soil release in scope | calculate pollutant mass by source and normalize after allocation | monitoring QA, laboratory result, factor provenance, and calculation record |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = period flow quantity / period net mass of conforming finished product | period flow quantity; `finished_product` net mass | flow amount per 1 kg net finished product | eu-pef-2021-2279 |
| `calc_product_net_mass` | conforming product | net finished mass = sum(released units × verified net product mass per unit); packaging mass is excluded | released count; checkweigher or declared verified net mass | kg conforming product | eu-pef-2021-2279 |
| `calc_reconstituted_mass` | concentrated or dehydrated product | prepared product mass = as-sold product mass + water or other preparation additions required by declared instructions; report assumptions and any density conversion | as-sold mass; declared preparation ratio; preparation additions | kg prepared product per kg as sold | fao-who-cxs-117-1981; eu-pef-2021-2279 |
| `calc_process_mass_balance` | each material process | input mass = conforming transfer + co-products + wastes + measured evaporation or discharge + inventory change; report closure and measurement uncertainty | batch inputs, outputs, residues, water, inventory change | reconciled process mass balance | eu-jrc-fdm-bref-2019 |
| `calc_packaging_mass` | packaging | packaging mass = sum(component unit mass × component count consumed); split incorporated packaging and losses | component weights; issued, returned, released, and rejected counts | kg by packaging material per kg product | eu-jrc-fdm-bref-2019 |
| `calc_energy_allocation` | shared and process energy | assign direct-metered demand first; allocate only residual shared demand using a documented causal physical driver; keep carriers separate | main and submeters; runtime or demand driver; outputs | carrier-specific energy per kg product | eu-jrc-fdm-bref-2019; eu-pef-2021-2279 |
| `calc_direct_emissions` | direct site emissions | pollutant mass = measured concentration × measured exhaust or discharge flow × operating time, or collected activity × documented emission factor | monitoring data or activity and factor | kg pollutant per kg product | eu-jrc-fdm-bref-2019 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and intermediates | Preserve actual recipe or product family, market form, concentration or reconstitution basis, solids or moisture where material, preservation route, storage condition, and package configuration; do not infer one variant from the category flow name. | Product specification, approved recipe, label, preparation instructions, and batch release |
| `dq_temporal` | all foreground records | Use one representative continuous 12-month period for regular production or the complete declared campaign for seasonal or campaign production; align numerator and denominator periods and disclose abnormal shutdowns or substitutions. | Dated meters, batch records, production calendar, and reconciliation |
| `dq_geography_technology` | foreground and upstream links | Identify facility geography and actual line technology; select upstream datasets matching source geography and technology or document proxy differences. | Facility metadata, equipment list, supplier origin, and dataset metadata |
| `dq_completeness` | all inventory | Cover all known inputs and outputs, including water, cleaning, utilities, packaging, rejects, rework, co-products, wastes, wastewater, and direct emissions; quantify and justify any omission. | Process flow diagram, mass/energy/water balances, source inventory, and omission register |
| `dq_measurement` | meters, scales, tests, and calculations | Retain calibration or verification status, raw readings, unit conversions, formulas, factors, and responsible source records; do not replace missing primary data with an undisclosed estimate. | Calibration certificates, laboratory reports, calculation sheets, and factor references |
| `dq_representativeness_precision` | published dataset | Assess technological, geographical, and time-related representativeness and precision, and disclose uncertainty or sensitivity for material proxies and allocation choices. | Data-quality assessment and sensitivity record following the declared method |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_scope` | product identity | Confirm that the output is marketed primarily as a soup, broth, bouillon, consommé, or preparation thereof and that all required qualifiers are present. Reject silent use for sauces, non-soup prepared meals, infant preparations, or separately marketed extracts. | unsd-cpc-3-0-explanatory-notes-2025; fao-who-cxs-117-1981 |
| `validate_reference_uuid` | reference flow | Confirm the selected category flow UUID, Mass property UUID, Units of mass UUID, and kg unit, or document a reviewed replacement by a more product-specific real Tiangong flow. |  |
| `validate_reference_amount` | quantitative reference | Confirm that output equals exactly 1 kg net conforming product after normalization and that packaging mass is excluded from the reference amount. | eu-pef-2021-2279 |
| `validate_route_coverage` | process map | Confirm that every operation actually used for formulation, cooking or extraction, concentration or dehydration, preservation, chilling or freezing, filling, post-fill treatment, cleaning, utilities, and residue management is included or explicitly marked not applicable. | fao-who-cxs-117-1981; eu-jrc-fdm-bref-2019 |
| `validate_reconstitution` | concentrated and dehydrated products | Require declared preparation instructions and verify the prepared-product conversion; prohibit comparison with ready-to-consume products on 1 kg as-sold mass alone. | fao-who-cxs-117-1981; eu-pef-2021-2279 |
| `validate_balances` | material, water, and energy data | Verify process and period balances, investigate closure outside documented measurement uncertainty, and prevent double counting of recycled water, recovered product, rework, shared utilities, waste transfers, and treatment inputs. | eu-jrc-fdm-bref-2019 |
| `validate_allocation` | shared processes and co-products | Verify that subdivision was attempted first, physical allocation uses a causal relationship, and any economic allocation or substitution is fully justified and sensitivity-tested. | eu-pef-2021-2279 |
| `validate_data_quality` | foreground package | Verify temporal alignment, geographic and technological representativeness, completeness, precision, source traceability, calibration evidence, proxy disclosure, and documented uncertainty. | eu-pef-2021-2279 |
| `validate_atomic_inventory` | inventory flow identity | Fail if electricity, steam, hot water, each fuel, refrigerant, cleaning chemical, packaging material, packaging waste, or direct combustion or refrigerant emission covered by this PCR is represented by a combined carrier or material placeholder instead of a separately identifiable flow row. | eu-jrc-fdm-bref-2019; eu-pef-2021-2279 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground manufacturing dataset for a declared soup, broth, or preparation thereof |
| downstream_use | `secondary_dataset`; `background_dataset` when reviewed, representative, and sufficiently documented for the declared product, geography, technology, and period |
| allowed_use | Foreground package construction, product manufacturing inventories, supply-chain models, and downstream lifecycle models that preserve the declared product form, concentration, route, and system boundary |
| excluded_use | Direct comparison of unlike as-sold concentrations without prepared-product normalization; use as a recipe-independent proxy without qualifier disclosure; attribution to sauces, prepared meals, infant foods, or extracts outside scope; undisclosed substitution for a product-specific flow or dataset |
| required_metadata | PCR id and version; product and recipe family; product flow UUID; market form; net mass; solids or moisture basis where relevant; concentration or reconstitution instructions; preservation and storage condition; package components and masses; geography; technology; production period; process map; upstream dataset references; allocations; exclusions |
| required_quality_disclosure | Temporal, geographic, and technological representativeness; meter and scale coverage; balance closure and uncertainty; proxies; data gaps; excluded flows; allocation and substitution choices; source and calculation traceability; review status |
| update_trigger | Recipe or principal ingredient change; change of market form, concentration, preservation route, package, facility, or material technology; material change in energy, water, yield, waste, or emissions; new product-specific Tiangong flow; changed source requirement; representative period no longer valid |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-explanatory-notes-2025` | `official_guidance` | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Explanatory Notes*, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-11) | CPC 23992 category identity and separation from adjacent product classes |
| `fao-who-cxs-117-1981` | `standard` | Codex Alimentarius, *Standard for Bouillons and Consommés*, CXS 117-1981, revised 2001 and 2015, amended 2021, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS+117-1981%2FCXS_117e.pdf (retrieved 2026-08-11) | Bouillon and consommé product forms, ingredients and water, ready-to-consume and reconstituted states, and qualifier requirements |
| `eu-jrc-fdm-bref-2019` | `official_guidance` | European Commission Joint Research Centre, *Best Available Techniques Reference Document in the Food, Drink and Milk Industries*, JRC118627, 2019, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf (retrieved 2026-08-11) | Food-manufacturing process decomposition; energy, water, cleaning, packaging, waste, wastewater, and direct-emission inventory requirements |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, *Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods*, Annex I Product Environmental Footprint Method, ELI http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-11) | Functional unit and reference flow, system boundary, company-specific inventory, multi-functionality hierarchy, completeness, representativeness, precision, and disclosure |
