---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.other-spirituous-beverages-and-undenatured-ethyl-alcohol-of-an-alcoholic-strength-by-vo-94969250
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other spirituous beverages and undenatured ethyl alcohol of an alcoholic strength by volume of less than 80% vol

## 1. Scope and Applicability

This PCR applies to factory-gate production of products within the reviewed semantic boundary of other spirituous beverages and undenatured ethyl alcohol with actual alcoholic strength below 80% vol. It covers the declared route from receipt of fermentable agricultural or food-industry raw material, or from receipt of purchased agricultural ethyl alcohol or distillate, through conditional raw-material preparation, fermentation, distillation or rectification, maturation, blending, filtration, cleaning, quality release, and filling and packaging.

The category is deliberately broader than any one spirit type, raw material, alcohol strength, maturation period, or package. A concrete data package shall identify whether its product is a spirit drink, another potable spirituous beverage, or undenatured ethyl alcohol below 80% vol; its legal sales name; raw-material route; actual alcoholic strength by volume at 20 °C; maturation status; formulation; and market condition. The official CPC title defines the classification context, while applicable market law and product specifications govern legal identity. Sources: `unsd-cpc-3-24139`; `eu-reg-2019-787`.

Excluded products are denatured alcohol, ethyl alcohol at 80% vol or higher, beer, wine, cider, perry, mead, and other fermented beverages not distilled or otherwise within the spirituous-beverage identity, and spirit products assigned to a separately reviewed narrower PCR. Agricultural production, manufacture of purchased alcohol or distillate, barrel manufacture, packaging manufacture, and downstream distribution are linked as upstream or downstream datasets unless explicitly included in the declared foreground boundary.

The whey-spirit and white-whiskey study is a single clear, unaged case. It supports the existence and process decomposition of the conditional cheese-whey route only; it does not define this category or any category-wide quantitative range. Source: `risner-et-al-2018-whey-spirits`.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.other-spirituous-beverages-and-undenatured-ethyl-alcohol-of-an-alcoholic-strength-by-vo-94969250 |
| classification_refs | CPC 3.0: 24139 |
| covered_products | Other spirituous beverages; undenatured ethyl alcohol below 80% vol; finished products produced by declared fermentation-distillation, redistillation, purchased-alcohol formulation, or compatible combined routes |
| excluded_products | Denatured alcohol; ethyl alcohol at or above 80% vol; non-distilled beer, wine, cider, perry, mead, and other fermented beverages; products governed by a separately reviewed narrower PCR |
| representative_product | One finished undenatured alcoholic liquid below 80% vol, expressed as net product mass at the factory gate and qualified by its concrete beverage or ethyl-alcohol identity |
| production_route | Declared combination of feedstock preparation; fermentation; distillation or rectification; optional maturation; blending, dilution, sweetening, colouring, flavouring, and filtration; cleaning and wastewater handling; optional filling and packaging |
| market_state | Conforming bulk or packaged liquid with legal sales name, raw-material origin, actual alcoholic strength at 20 °C, formulation, maturation, filtration, and package format declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of a conforming finished other spirituous beverage or undenatured ethyl alcohol product below 80% vol |
| How much | 1,000 kg net product, excluding primary, secondary, and tertiary packaging mass |
| How well | Meets the declared legal identity and product specification, including actual alcoholic strength by volume at 20 °C, raw-material origin, formulation, maturation state, and release quality |
| How long or cycle | One completed production and, when applicable, packaging batch delivered at the factory gate; maturation duration is a required qualifier rather than a service life |
| reference_flow_link | Net mass of conforming finished product released from the batch after all declared losses, rework, filtration, and quality rejection |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net finished product |
| Reference product flow | Finished undenatured alcoholic liquid below 80% vol |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product class and legal sales name; target market and applicable specification; raw-material identity and origin; purchased alcohol or distillate identity; fermentation organism and enzyme route; distillation or rectification technology; actual alcoholic strength by volume at 20 °C; measured density and temperature used for volume-to-mass conversion; maturation vessel and duration; blending, sweetening, colouring, and flavouring recipe; filtration route; bulk or packaged state; package component masses; site, geography, batch, and reference period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | net conforming reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all foreground exchanges to 1,000 kg net released product. Packaging mass is inventoried separately. |
| `alcoholic_strength` | reference product and intermediate alcoholic liquids | Alcoholic strength by volume | % vol at 20 °C | Measure and report actual alcoholic strength at 20 °C using an applicable validated method; do not treat label strength or a nominal recipe target as a measured batch result. Sources: `eu-reg-2019-787`; `oiv-spirit-analysis-compendium-2023`. |
| `volume_mass_conversion` | liquid records reported by volume | Mass and volume | kg; L or m3 at recorded temperature | Convert volume to mass using measured product density at the same stated temperature, preferably 20 °C, and retain density, temperature, instrument, and formula. Do not use water density for an ethanol-water mixture. Sources: `eu-reg-2019-787`; `oiv-spirit-analysis-compendium-2023`. |
| `absolute_alcohol_check` | product and intermediate alcohol balance | Volume of pure alcohol | L alcohol at 20 °C | Calculate litres of pure alcohol as liquid volume at 20 °C multiplied by measured ABV/100; use it only as a composition and yield check, not as the PCR reference amount. |
| `ingredient_mass` | each fermentable raw material, yeast, enzyme, nutrient, additive, and processing aid | Mass | kg | Record every material identity as a separate net batch issue; no recipe group or combined material row is accepted. |
| `energy_records` | electricity, steam, purchased heat, and each fuel | Energy or Mass | kWh, MJ, kg, or m3 | Preserve each measured carrier and unit; convert only with a documented net calorific value or metered energy basis and do not combine carriers before inventory reporting. |
| `refrigerant_balance` | each refrigeration circuit | Mass | kg | Calculate make-up and leakage separately for each refrigerant identity from opening charge, additions, recovery, and closing charge. |
| `packaging_mass` | each bottle, closure, label, carton, and film | Mass | kg | Record each component separately from issued count and verified unit mass or direct weighing. |
| `wastewater_load` | each measured wastewater indicator | Mass | kg | Calculate each pollutant load separately as discharged volume multiplied by representative concentration at the declared treatment or discharge point. |

## 5. System Boundary

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | foreground production | Include all directly controlled operations from the declared starting material received at the facility through release of conforming bulk or packaged reference product. | `eu-jrc-fdm-bref-2019`; `eu-reg-2019-787` |
| `boundary_conditional_routes` | route selection | Activate feedstock preparation, fermentation, distillation or rectification, maturation, blending, filtration, on-site energy, cooling, and packaging only when performed for the reference product, and disclose every omitted route. | `eu-jrc-fdm-bref-2019`; `eu-reg-2019-787` |
| `boundary_upstream_inputs` | purchased products and services | Link every fermentable raw material, purchased alcohol or distillate, yeast, enzyme, auxiliary, water, energy carrier, refrigerant, barrel, and packaging component to a separate upstream dataset. | `eu-ef-method-2021` |
| `boundary_wastes_emissions` | foreground outputs | Include fermentation carbon dioxide, ethanol losses, combustion releases, refrigerant leakage, each stillage or spent-liquid stream, cleaning wastewater, treatment sludge, each monitored wastewater indicator, and each packaging waste separately. | `eu-jrc-fdm-bref-2019` |
| `boundary_atomic_inventory` | all inventory rows | Reject aggregate utility, fuel, ingredient, packaging, waste, or emission labels; one selected flow represents one physical or chemical exchange and one applicable route condition. |  |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | The foreground package declares whether the facility receives fermentable raw material, fermented liquid, purchased distillate, purchased agricultural ethyl alcohol, or a combination, and identifies the first directly controlled transformation |
| starting_condition_role | Received materials are upstream product inputs; the foreground boundary begins at receipt and includes every on-site transformation assigned to the reference product |
| product_classification_scope | Finished other spirituous beverage or undenatured ethyl alcohol below 80% vol with the concrete legal identity and market specification declared |
| recursive_input_rule | Returned, reworked, or purchased product already within this category remains a separately quantified same-category product input; prior burdens are linked through its upstream dataset and are not silently cut off |
| upstream_dataset_requirement | Use route-, geography-, and technology-compatible upstream datasets for each major raw material, alcohol input, energy carrier, refrigerant, barrel, and packaging component; disclose proxies and allocation |
| disclosure | Declare which raw-material preparation, fermentation, distillation, rectification, maturation, blending, filtration, cleaning, wastewater treatment, energy generation, cooling, packaging, and distribution operations are inside or linked outside the foreground boundary |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feedstock_preparation` | Fermentable-feedstock preparation | conditional | Include when grain, molasses, wine, whey, or another declared fermentable material is prepared on site | Produce prepared fermentable liquid for the declared route | kg prepared fermentable liquid |
| `alcoholic_fermentation` | Alcoholic fermentation | conditional | Include when alcohol is produced by on-site fermentation; omit only for a documented purchased-alcohol or purchased-distillate route | Convert fermentable substrate to alcoholic liquid and fermentation carbon dioxide | kg fermented liquid |
| `onsite_energy_generation` | On-site steam or heat generation | conditional | Include when fuel is combusted on site for process steam or heat | Supply measured steam or heat and record each fuel and direct emission | MJ steam or heat delivered |
| `cooling_refrigeration` | Cooling and refrigeration | conditional | Include when a refrigeration circuit serves fermentation, condensation, maturation, conditioning, or packaging | Supply cooling and account for each refrigerant make-up and leak | kWh cooling electricity and kg refrigerant |
| `distillation_rectification` | Distillation and rectification | conditional | Include when fermented liquid or received distillate is distilled, redistilled, or rectified on site | Separate and concentrate alcohol and produce the declared alcoholic intermediate or product | kg distillate or alcohol output |
| `maturation` | Maturation or ageing | conditional | Include when product is held in wood or another receptacle to develop specified characteristics | Produce matured alcoholic liquid and record vessel and storage losses | kg matured liquid |
| `blending_conditioning` | Blending, conditioning, filtration, and release | required | Always include final product reconciliation; activate dilution, sweetening, colouring, flavouring, or filtration rows only when used | Produce conforming bulk reference product | 1,000 kg conforming bulk product |
| `cleaning_wastewater` | Equipment cleaning and wastewater handling | required | Include cleaning assigned to foreground operations and any on-site wastewater treatment | Account for each cleaning input, wastewater stream, sludge, and measured discharge indicator | cleaning cycle and m3 wastewater |
| `filling_packaging` | Filling and packaging | conditional | Include for packaged factory-gate product; omit only for a declared bulk-delivery reference product | Fill, close, label, case, and wrap product | 1,000 kg net packaged product |

### Process: Fermentable-feedstock preparation (`feedstock_preparation`)

#### Inputs

##### Product flows

###### Malted barley (`malted_barley`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Malted barley
- Flow property / unit: Mass / kg
- Amount rule: Record net malted barley issued to the declared grain route; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared fermentable liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_materials`
- Sources: `eu-jrc-fdm-bref-2019`

###### Wheat grain (`wheat_grain`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Wheat grain
- Flow property / unit: Mass / kg
- Amount rule: Record net wheat issued to the declared grain route; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared fermentable liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_materials`
- Sources: `eu-jrc-fdm-bref-2019`

###### Maize grain (`maize_grain`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Maize grain
- Flow property / unit: Mass / kg
- Amount rule: Record net maize issued to the declared grain route; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared fermentable liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_materials`
- Sources: `eu-jrc-fdm-bref-2019`

###### Rye grain (`rye_grain`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Rye grain
- Flow property / unit: Mass / kg
- Amount rule: Record net rye issued to the declared grain route; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared fermentable liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_materials`
- Sources: `eu-jrc-fdm-bref-2019`

###### Alpha-amylase enzyme (`alpha_amylase`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Alpha-amylase enzyme preparation
- Flow property / unit: Mass / kg
- Amount rule: Record formulated enzyme mass dosed for starch liquefaction; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared fermentable liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_auxiliaries`
- Sources: `eu-jrc-fdm-bref-2019`

###### Glucoamylase enzyme (`glucoamylase`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Glucoamylase enzyme preparation
- Flow property / unit: Mass / kg
- Amount rule: Record formulated enzyme mass dosed for saccharification; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared fermentable liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_feedstock_auxiliaries`
- Sources: `eu-jrc-fdm-bref-2019`

###### Preparation water (`feedstock_water`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Potable process water
- Flow property / unit: Volume / m3
- Amount rule: Record water entering milling, mashing, dilution, hydrolysis, or feedstock transfer separately from cleaning and cooling water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared fermentable liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `eu-jrc-fdm-bref-2019`

###### Preparation electricity (`feedstock_electricity`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record sub-metered use or a documented equipment-time allocation for preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared fermentable liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-jrc-fdm-bref-2019`

###### Preparation steam (`feedstock_steam`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Process steam
- Flow property / unit: Energy / MJ
- Amount rule: Record metered net steam delivered for cooking, pasting, or hydrolysis; mark not applicable for unheated routes.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg prepared fermentable liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Alcoholic fermentation (`alcoholic_fermentation`)

#### Inputs

##### Product flows

###### Sugar beet molasses (`sugar_beet_molasses`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Sugar beet molasses
- Flow property / unit: Mass / kg
- Amount rule: Record net molasses entering fermentation when this route is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fermented liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_materials`
- Sources: `eu-jrc-fdm-bref-2019`

###### Sugar cane molasses (`sugar_cane_molasses`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Sugar cane molasses
- Flow property / unit: Mass / kg
- Amount rule: Record net cane molasses entering fermentation when this route is used.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fermented liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_materials`
- Sources: `eu-jrc-fdm-bref-2019`

###### Grape wine (`grape_wine`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Grape wine for distillation
- Flow property / unit: Mass / kg
- Amount rule: Record net wine entering the declared fermentation-distillation route; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fermented liquid or distillation feed
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_materials`
- Sources: `eu-reg-2019-787`

###### Cheese whey (`cheese_whey`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Cheese whey
- Flow property / unit: Mass / kg
- Amount rule: Record net whey entering the lactose-fermentation route; mark not applicable for every other route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg fermented whey liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_materials`
- Sources: `risner-et-al-2018-whey-spirits`

###### Fermentation water (`fermentation_water`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Potable process water
- Flow property / unit: Volume / m3
- Amount rule: Record water added to fermentation separately from preparation, cleaning, cooling, and formulation water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fermented liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `eu-jrc-fdm-bref-2019`

###### Saccharomyces cerevisiae yeast (`saccharomyces_cerevisiae`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Saccharomyces cerevisiae yeast preparation
- Flow property / unit: Mass / kg
- Amount rule: Record yeast preparation dosed to carbohydrate fermentation; mark not applicable for another organism.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg fermented liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_auxiliaries`
- Sources: `eu-jrc-fdm-bref-2019`

###### Kluyveromyces marxianus yeast (`kluyveromyces_marxianus`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Kluyveromyces marxianus yeast preparation
- Flow property / unit: Mass / kg
- Amount rule: Record lactose-fermenting yeast dosed to the whey route; mark not applicable for every other route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg fermented whey liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_auxiliaries`
- Sources: `risner-et-al-2018-whey-spirits`

###### Sulfuric acid (`sulfuric_acid`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Sulfuric acid
- Flow property / unit: Mass / kg
- Amount rule: Record net acid dosed for pH control or yeast washing; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg fermented liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_auxiliaries`
- Sources: `eu-jrc-fdm-bref-2019`

###### Diammonium phosphate nutrient (`diammonium_phosphate`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Diammonium phosphate
- Flow property / unit: Mass / kg
- Amount rule: Record nutrient mass dosed to fermentation; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg fermented liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_auxiliaries`
- Sources: `eu-jrc-fdm-bref-2019`

###### Fermentation electricity (`fermentation_electricity`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record electricity for agitation, pumping, aeration, control, and transfer assigned to fermentation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg fermented liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fermented liquid (`fermented_mash`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Fermented liquid for distillation
- Flow property / unit: Mass / kg
- Amount rule: Record transferred mass and measured ABV at 20 °C for each fermentation batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per fermentation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_alcoholic_liquid_balance`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

###### Fermentation carbon dioxide (`fermentation_carbon_dioxide`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measure recovered and released fermentation CO2 separately or calculate released CO2 from a documented carbon balance; do not merge with combustion CO2.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg fermented liquid
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-fdm-bref-2019`; `risner-et-al-2018-whey-spirits`

### Process: On-site steam or heat generation (`onsite_energy_generation`)

#### Inputs

##### Product flows

###### Natural gas fuel (`natural_gas`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record metered natural gas supplied to the boiler or heater; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ steam or heat delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_steam`
- Sources: `eu-jrc-fdm-bref-2019`

###### Coal fuel (`coal`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Bituminous coal
- Flow property / unit: Mass / kg
- Amount rule: Record weighed coal supplied to on-site energy generation; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ steam or heat delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_steam`
- Sources: `eu-jrc-fdm-bref-2019`

###### Biomass fuel (`biomass_fuel`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Wood chips for boiler fuel
- Flow property / unit: Mass / kg
- Amount rule: Record net as-received wood-chip mass and measured moisture; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ steam or heat delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_steam`
- Sources: `eu-jrc-fdm-bref-2019`

###### Fuel oil (`fuel_oil`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Residual fuel oil
- Flow property / unit: Mass / kg
- Amount rule: Record net fuel-oil use from calibrated tank or delivery reconciliation; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ steam or heat delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_steam`
- Sources: `eu-jrc-fdm-bref-2019`

###### Boiler electricity (`boiler_electricity`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record electricity for boiler feedwater, pumps, fans, controls, and treatment assigned to on-site energy generation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ steam or heat delivered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-jrc-fdm-bref-2019`

###### Boiler make-up water (`boiler_water`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Potable process water
- Flow property / unit: Volume / m3
- Amount rule: Record boiler make-up water separately from product, cleaning, and cooling water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per MJ steam or heat delivered
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Process steam (`process_steam_output`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Process steam
- Flow property / unit: Energy / MJ
- Amount rule: Record metered net steam or heat delivered after distribution losses; internal transfer shall not duplicate purchased-steam burdens.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per energy-generation reporting period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_and_steam`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide (`fossil_carbon_dioxide_to_air`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate separately from each fossil-fuel record using documented carbon content or direct stack measurement.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ steam or heat delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Biogenic carbon dioxide from fuel (`biogenic_carbon_dioxide_to_air`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate biomass-combustion CO2 separately from the biomass fuel record; do not merge with fermentation CO2.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ steam or heat delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Methane (`methane_to_air`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Methane, to air
- Flow property / unit: Mass / kg
- Amount rule: Record measured stack methane or calculate it separately for each combusted fuel with the declared factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ steam or heat delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Nitrous oxide (`nitrous_oxide_to_air`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Dinitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Record measured stack N2O or calculate it separately for each combusted fuel with the declared factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ steam or heat delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Nitrogen monoxide (`nitrogen_monoxide_to_air`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Record measured NO mass or calculate it separately for each fuel and combustion technology; do not merge it with NO2.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ steam or heat delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Nitrogen dioxide (`nitrogen_dioxide_to_air`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Record measured NO2 mass or calculate it separately for each fuel and combustion technology; do not merge it with NO.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ steam or heat delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Sulfur dioxide (`sulfur_dioxide_to_air`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Record measured SO2 or calculate it from the sulfur content of each fuel; mark not applicable only with supporting fuel data.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ steam or heat delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

###### Particulate matter (`particulate_matter_to_air`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Particulate matter, to air
- Flow property / unit: Mass / kg
- Amount rule: Record stack particulate mass using the declared measurement fraction and control-device boundary; do not combine it with gaseous pollutants.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ steam or heat delivered
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

### Process: Cooling and refrigeration (`cooling_refrigeration`)

#### Inputs

##### Product flows

###### Cooling electricity (`cooling_electricity`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record sub-metered compressor, pump, fan, and cooling-tower electricity assigned to the reference product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-jrc-fdm-bref-2019`

###### Cooling water (`cooling_water`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Potable process water
- Flow property / unit: Volume / m3
- Amount rule: Record cooling-system make-up water separately from fermentation, product, cleaning, and boiler water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water`
- Sources: `eu-jrc-fdm-bref-2019`

###### Ammonia refrigerant make-up (`ammonia_refrigerant`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Ammonia, refrigerant grade
- Flow property / unit: Mass / kg
- Amount rule: Calculate net R717 make-up from circuit records; mark not applicable when the circuit uses another refrigerant.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-jrc-fdm-bref-2019`

###### Carbon dioxide refrigerant make-up (`carbon_dioxide_refrigerant`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Carbon dioxide, refrigerant grade
- Flow property / unit: Mass / kg
- Amount rule: Calculate net R744 make-up from circuit records; mark not applicable when absent.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-jrc-fdm-bref-2019`

###### R404A refrigerant make-up (`r404a_refrigerant`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: R404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Calculate net R404A make-up from circuit records; mark not applicable when absent.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Ammonia refrigerant leak (`ammonia_to_air`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Report calculated or measured R717 leakage separately from every other refrigerant.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-jrc-fdm-bref-2019`

###### Carbon dioxide refrigerant leak (`carbon_dioxide_refrigerant_to_air`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Carbon dioxide, refrigerant, to air
- Flow property / unit: Mass / kg
- Amount rule: Report calculated or measured R744 leakage separately from combustion and fermentation CO2.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-jrc-fdm-bref-2019`

###### R404A refrigerant leak (`r404a_to_air`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: R404A refrigerant, to air
- Flow property / unit: Mass / kg
- Amount rule: Report calculated or measured R404A leakage separately from every other refrigerant.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `eu-jrc-fdm-bref-2019`

### Process: Distillation and rectification (`distillation_rectification`)

#### Inputs

##### Product flows

###### Fermented liquid feed (`fermented_liquid_feed`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Fermented liquid for distillation
- Flow property / unit: Mass / kg
- Amount rule: Record net transferred mass and measured ABV at 20 °C for each still charge or continuous feed period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg distillate or alcohol output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_alcoholic_liquid_balance`
- Sources: `eu-jrc-fdm-bref-2019`

###### Distillation electricity (`distillation_electricity`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record electricity for still auxiliaries, pumps, condensers, controls, and transfer.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg distillate or alcohol output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-jrc-fdm-bref-2019`

###### Distillation steam (`distillation_steam`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Process steam
- Flow property / unit: Energy / MJ
- Amount rule: Record metered net steam delivered to the pot or column still; disclose purchased or internal origin.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg distillate or alcohol output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Undenatured ethyl alcohol below 80% vol (`undenatured_ethyl_alcohol_below_80_vol`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Undenatured ethyl alcohol below 80% vol
- Flow property / unit: Mass / kg
- Amount rule: Record released mass and measured ABV at 20 °C when this is the declared reference product or intermediate; otherwise mark not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per distillation or rectification batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_alcoholic_liquid_balance`
- Sources: `unsd-cpc-3-24139`; `eu-reg-2019-787`

###### Other spirituous beverage (`other_spirituous_beverage`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Other spirituous beverage
- Flow property / unit: Mass / kg
- Amount rule: Record released distillate mass and measured ABV at 20 °C when the route produces the declared spirituous beverage; otherwise mark not applicable.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per distillation batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_alcoholic_liquid_balance`
- Sources: `unsd-cpc-3-24139`; `eu-reg-2019-787`

##### Waste flows

###### Stillage (`stillage`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Distillation stillage
- Flow property / unit: Mass / kg
- Amount rule: Record net stillage leaving the still and its destination separately from spent wash and spent lees.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg distillate or alcohol output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_residues`
- Sources: `eu-jrc-fdm-bref-2019`

###### Spent wash (`spent_wash`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Distillery spent wash
- Flow property / unit: Mass / kg
- Amount rule: Record net spent wash leaving the process and its treatment destination separately from stillage and spent lees.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg distillate or alcohol output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_residues`
- Sources: `eu-jrc-fdm-bref-2019`

###### Spent lees (`spent_lees`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Distillery spent lees
- Flow property / unit: Mass / kg
- Amount rule: Record net spent lees and destination separately from stillage and spent wash.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg distillate or alcohol output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_residues`
- Sources: `eu-jrc-fdm-bref-2019`

###### Distillation sludge (`distillation_sludge`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Distillation solids sludge
- Flow property / unit: Mass / kg
- Amount rule: Weigh separated yeast and suspended-solids sludge leaving distillation-residue handling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg distillate or alcohol output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distillation_residues`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

###### Distillation ethanol emission (`ethanol_to_air`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Ethanol, to air
- Flow property / unit: Mass / kg
- Amount rule: Record measured vent loss or calculate a closed alcohol balance; report separately from fermentation and maturation losses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg distillate or alcohol output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

### Process: Maturation or ageing (`maturation`)

#### Inputs

##### Product flows

###### Oak maturation barrel (`maturation_oak_barrel`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Oak barrel for spirit maturation
- Flow property / unit: Mass / kg
- Amount rule: Record barrel tare mass allocated by documented first use, reuse count, and occupancy; mark not applicable for non-oak or unaged routes.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg matured liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maturation_records`
- Sources: `eu-reg-2019-787`

###### Maturation electricity (`maturation_electricity`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record storage ventilation, pumping, monitoring, and conditioning electricity assigned by tank or barrel occupancy time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg matured liquid output
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maturation_records`
- Sources: `eu-reg-2019-787`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Matured alcoholic liquid (`matured_alcoholic_liquid`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Matured spirituous liquid
- Flow property / unit: Mass / kg
- Amount rule: Record released mass, ABV at 20 °C, vessel identity, and maturation duration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per maturation lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_maturation_records`
- Sources: `eu-reg-2019-787`

##### Waste flows

###### Waste oak barrel (`waste_oak_barrel`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Waste oak barrel
- Flow property / unit: Mass / kg
- Amount rule: Record retired barrel mass and destination when a barrel leaves service.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg matured liquid output over allocated barrel uses
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maturation_records`
- Sources:

##### Elementary flows

###### Maturation ethanol emission (`maturation_loss_ethanol_to_air`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Ethanol, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate ethanol loss from opening and closing liquid mass, measured ABV, transfers, and sampled quantities; do not merge with water loss or distillation vents.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per kg matured liquid output
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_maturation_records`
- Sources: `eu-reg-2019-787`

### Process: Blending, conditioning, filtration, and release (`blending_conditioning`)

#### Inputs

##### Product flows

###### Agricultural ethyl alcohol (`agricultural_ethyl_alcohol`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Ethyl alcohol of agricultural origin
- Flow property / unit: Mass / kg
- Amount rule: Record purchased or internally transferred alcohol added to the batch; retain source, purity, and ABV at 20 °C.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_materials`
- Sources: `eu-reg-2019-787`

###### Formulation water (`formulation_water`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Potable process water
- Flow property / unit: Volume / m3
- Amount rule: Record water entering the product separately from cleaning, cooling, and bottle-rinsing water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_materials`
- Sources: `eu-reg-2019-787`

###### Sucrose (`sucrose`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Refined sucrose
- Flow property / unit: Mass / kg
- Amount rule: Record net sucrose added for sweetening or rounding; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_materials`
- Sources: `eu-reg-2019-787`

###### Caramel colour (`caramel_colour`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Caramel colour E150a
- Flow property / unit: Mass / kg
- Amount rule: Record formulated caramel colour added to the batch; use a separate card for a different colour identity and mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_materials`
- Sources: `eu-reg-2019-787`

###### Natural flavouring preparation (`natural_flavouring_preparation`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Natural flavouring preparation
- Flow property / unit: Mass / kg
- Amount rule: Record each declared flavouring preparation as its own batch issue; this card applies only to the specifically identified preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_materials`
- Sources: `eu-reg-2019-787`

###### Diatomaceous-earth filter aid (`filter_aid`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Diatomaceous earth filter aid
- Flow property / unit: Mass / kg
- Amount rule: Record dry filter-aid mass charged to filtration; mark not applicable for routes without this aid.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filtration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Conditioning electricity (`conditioning_electricity`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record electricity for blending, pumping, chilling, filtration, and quality-release transfers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg conforming bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming reference product (`reference_product_output`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Finished undenatured alcoholic liquid below 80% vol
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Record net released mass after quality approval, with legal identity, measured ABV at 20 °C, density, route, and formulation qualifiers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_release`
- Sources: `unsd-cpc-3-24139`; `eu-reg-2019-787`; `oiv-spirit-analysis-compendium-2023`

##### Waste flows

###### Filtration residue (`filtration_residue`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Spent diatomaceous-earth filtration residue
- Flow property / unit: Mass / kg
- Amount rule: Weigh wet spent filter aid leaving the filtration route and record its destination; mark not applicable without filtration.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filtration_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Off-specification spirit (`off_spec_spirit`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Off-specification spirituous liquid
- Flow property / unit: Mass / kg
- Amount rule: Record rejected liquid mass separately from returned rework and released product, with destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg conforming bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_release`
- Sources:

##### Elementary flows

###### Conditioning ethanol emission (`conditioning_ethanol_to_air`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Ethanol, to air
- Flow property / unit: Mass / kg
- Amount rule: Record measured vent loss or calculate it from a closed batch alcohol balance; keep separate from distillation and maturation emissions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg conforming bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-fdm-bref-2019`

### Process: Equipment cleaning and wastewater handling (`cleaning_wastewater`)

#### Inputs

##### Product flows

###### Cleaning water (`cleaning_water`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Potable process water
- Flow property / unit: Volume / m3
- Amount rule: Record water for pre-rinse, wash, disinfection, and final rinse separately from product and cooling water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Sodium hydroxide cleaner (`sodium_hydroxide`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record active NaOH mass charged, replenished, and discharged from CIP; mark not applicable when absent.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Nitric acid cleaner (`nitric_acid`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Record active nitric-acid mass charged and discharged for acid cleaning; mark not applicable when absent.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Peracetic acid disinfectant (`peracetic_acid`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Record active peracetic-acid mass dosed for disinfection; mark not applicable when absent.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `eu-jrc-fdm-bref-2019`

###### Cleaning electricity (`cleaning_electricity`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record electricity for CIP pumps, heating auxiliaries, and wastewater handling assigned to foreground cleaning.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Cleaning wastewater (`cleaning_wastewater`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Distillery cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record wastewater volume at the declared untreated, treatment-inlet, or discharge point; do not combine it with stillage, spent wash, or spent lees.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `eu-jrc-fdm-bref-2019`

###### Wastewater-treatment sludge (`wastewater_treatment_sludge`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Distillery wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Record dewatered or wet sludge mass with dry-matter content and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `eu-jrc-fdm-bref-2019`

##### Elementary flows

###### Chemical oxygen demand to water (`wastewater_cod`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged COD load from separately measured wastewater volume and representative COD concentration at the declared point.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `eu-jrc-fdm-bref-2019`

###### Biochemical oxygen demand to water (`wastewater_bod5`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Biochemical oxygen demand, 5 days, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged BOD5 load independently from volume and representative BOD5 concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `eu-jrc-fdm-bref-2019`

###### Total nitrogen to water (`wastewater_total_nitrogen`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged total-nitrogen load independently from volume and representative concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `eu-jrc-fdm-bref-2019`

###### Total phosphorus to water (`wastewater_total_phosphorus`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged total-phosphorus load independently from volume and representative concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `eu-jrc-fdm-bref-2019`

### Process: Filling and packaging (`filling_packaging`)

#### Inputs

##### Product flows

###### Glass bottle (`glass_bottle`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Glass beverage bottle
- Flow property / unit: Mass / kg
- Amount rule: Calculate bottle mass from net issued count and verified unit mass; mark not applicable for non-glass packaging.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources: `eu-reg-2019-787`

###### Aluminium closure (`aluminium_closure`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Aluminium bottle closure
- Flow property / unit: Mass / kg
- Amount rule: Calculate closure mass from net issued count and verified unit mass; mark not applicable when absent.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources: `eu-reg-2019-787`

###### Natural cork closure (`natural_cork_closure`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Natural cork bottle closure
- Flow property / unit: Mass / kg
- Amount rule: Calculate cork mass from net issued count and verified unit mass; mark not applicable when absent.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources: `eu-reg-2019-787`

###### Paper label (`paper_label`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Coated paper beverage label
- Flow property / unit: Mass / kg
- Amount rule: Calculate label mass from net issued count and verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources: `eu-reg-2019-787`

###### Corrugated box (`corrugated_box`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Corrugated fibreboard shipping box
- Flow property / unit: Mass / kg
- Amount rule: Calculate box mass from net issued count and verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_components`
- Sources:

###### Polyethylene shrink film (`polyethylene_shrink_film`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Low-density polyethylene shrink film
- Flow property / unit: Mass / kg
- Amount rule: Record film mass issued to the packaged batch; mark not applicable when absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_components`
- Sources:

###### Bottle-rinsing water (`bottle_rinsing_water`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Potable process water
- Flow property / unit: Volume / m3
- Amount rule: Record bottle-rinsing water separately from product, cleaning, and cooling water; mark not applicable for dry or unrinsed formats.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_water`
- Sources: `eu-jrc-fdm-bref-2019`

###### Packaging electricity (`packaging_electricity`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Electricity, medium voltage, at plant
- Flow property / unit: Energy / kWh
- Amount rule: Record filler, capper, labeller, case-packer, conveyor, and wrapper electricity assigned to the packaged batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_energy`
- Sources: `eu-jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Waste glass bottle (`waste_glass`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Waste glass bottle
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected bottles or calculate rejected count multiplied by verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_wastes`
- Sources:

###### Waste aluminium closure (`waste_aluminium`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Waste aluminium bottle closure
- Flow property / unit: Mass / kg
- Amount rule: Reconcile rejected closure counts with verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_wastes`
- Sources:

###### Waste natural cork closure (`waste_cork`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Waste natural cork bottle closure
- Flow property / unit: Mass / kg
- Amount rule: Reconcile rejected cork counts with verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_wastes`
- Sources:

###### Waste paper label (`waste_paper_label`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Waste coated paper beverage label
- Flow property / unit: Mass / kg
- Amount rule: Weigh outgoing label waste or reconcile issued and applied label masses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_wastes`
- Sources:

###### Waste corrugated box (`waste_corrugated_board`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Waste corrugated fibreboard
- Flow property / unit: Mass / kg
- Amount rule: Weigh rejected corrugated boxes or reconcile issued and used box masses.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_wastes`
- Sources:

###### Waste polyethylene film (`waste_polyethylene_film`)

This atomic card records the named exchange for the applicable route; its quantity is obtained by the rule below.

- Selected flow: Waste low-density polyethylene shrink film
- Flow property / unit: Mass / kg
- Amount rule: Weigh discarded shrink film or reconcile film issued and used.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_wastes`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | product-specific batches and routes | First subdivide tanks, meters, fermentation batches, still campaigns, maturation lots, cleaning cycles, and packaging lines so that inputs and outputs are directly assigned to the product and route. | `eu-ef-method-2021` |
| `allocation_causal` | shared utilities and cleaning | When subdivision is not practicable, use a documented physical driver that represents causality, such as metered energy, equipment operating time, steam demand, tank occupancy, cleaning cycles, or filled units. | `eu-ef-method-2021` |
| `allocation_mass` | inseparable products of comparable function | Use net output mass only when subdivision and a more representative causal relationship are not practicable; disclose numerator, denominator, period, and sensitivity. | `eu-ef-method-2021` |
| `allocation_co_products` | stillage, distillers solids, recovered carbon dioxide, and other marketable outputs | Record every co-product at its measured output quantity. Apply the study's accepted allocation hierarchy and disclose any substitution or recycling credit separately; do not hide it by reducing waste or fuel rows. | `eu-jrc-fdm-bref-2019`; `eu-ef-method-2021` |
| `allocation_rework` | same-category rework | Record returned or reworked alcoholic product as a separate quantified input and avoid double counting burdens already carried by its upstream dataset. | `eu-ef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_feedstock_materials` | `feedstock_preparation` | each individual fermentable feedstock | scale, silo, tank, and batch issue record | material identity; supplier lot; gross; tare; return; batch id | calibrated weighing or tank reconciliation | kg | each batch | all campaigns in representative 12 months | all preparation lines | sum net issue separately by material and route | calibration; supplier specification; batch genealogy |
| `cp_feedstock_auxiliaries` | `feedstock_preparation` | each enzyme or preparation auxiliary | batch issue and formulation record | chemical identity; active concentration; gross; tare; return; batch id | calibrated scale or dosing meter | kg | each batch | representative 12 months | all preparation lines | calculate active or formulated mass separately for each material | calibration; safety or technical sheet; recipe |
| `cp_fermentation_materials` | `alcoholic_fermentation` | each molasses, wine, whey, or other fermentation input | tank, scale, and batch record | material identity; source; mass or volume; density; temperature; batch id | calibrated tank, meter, or scale | kg; L; m3 | each batch | all campaigns in representative 12 months | all fermenters | convert and sum each material separately | tank chart; density record; batch genealogy |
| `cp_fermentation_auxiliaries` | `alcoholic_fermentation` | each yeast, nutrient, acid, or auxiliary | dosing and batch record | identity; strain or grade; active concentration; quantity; batch id | calibrated scale or dosing meter | kg | each batch | representative 12 months | all fermenters | sum net dose separately by identity | calibration; culture or supplier specification; recipe |
| `cp_process_water` | each applicable process | each water-use role | water meter and batch record | opening and closing meter; process id; batch or period | dedicated sub-meter preferred; documented water balance otherwise | m3 | batch, daily, or monthly | representative 12 months | all foreground water points | retain preparation, fermentation, boiler, cooling, product, cleaning, and rinsing water separately | meter calibration; water balance |
| `cp_process_energy` | each applicable process | electricity or delivered steam | energy meter and operating record | carrier; meter readings; process id; operating time; allocation driver | sub-meter preferred; documented engineering allocation otherwise | kWh; MJ | batch or monthly | representative 12 months | all foreground equipment | aggregate separately by process and carrier | meter calibration; equipment log; allocation worksheet |
| `cp_alcoholic_liquid_balance` | `alcoholic_fermentation`; `distillation_rectification` | each alcoholic liquid input and output | calibrated tank, flowmeter, and laboratory record | mass or volume; temperature; density; ABV; opening and closing inventory; batch id | tank or flowmeter reconciliation with laboratory ABV | kg; L; % vol | each transfer or batch | all batches in reporting period | all relevant tanks and flowmeters | convert volume to mass at recorded density and keep each liquid identity separate | calibration; OIV-compatible method record; batch reconciliation |
| `cp_fuel_and_steam` | `onsite_energy_generation` | each fuel and delivered steam or heat | delivery, stock, meter, and boiler record | fuel identity; quantity; moisture; calorific value; steam meter; condensate return | calibrated fuel and steam measurement | kg; m3; MJ | each delivery and monthly | representative 12 months | all boilers and heaters | reconcile each fuel separately to net delivered energy | meter calibration; delivery ticket; fuel analysis; boiler log |
| `cp_combustion_emissions` | `onsite_energy_generation` | each direct combustion emission | stack test, continuous monitor, and fuel calculation record | pollutant identity; concentration; flow; time; fuel quantity; factor | direct monitoring preferred; declared fuel-specific factor otherwise | kg | permit frequency or representative campaign | representative operating conditions | every emission point | calculate fossil CO2, biogenic CO2, CH4, N2O, NO, NO2, SO2, and particulate matter independently | laboratory or monitor QA; factor source; calculation sheet |
| `cp_refrigerant_balance` | `cooling_refrigeration` | each refrigerant make-up and leak | circuit service and charge record | refrigerant identity; opening charge; additions; recovery; closing charge; equipment id | annual mass balance by circuit, supported by leak service records | kg | each service and annually | representative 12 months | all relevant cooling circuits | calculate each refrigerant independently and allocate by documented cooling service | technician record; cylinder weights; circuit register |
| `cp_distillation_residues` | `distillation_rectification` | each stillage, spent-wash, spent-lees, or sludge output | tank, scale, and dispatch record | waste identity; mass or volume; density; dry matter; destination; batch | calibrated tank, scale, or verified container method | kg; m3 | each batch or dispatch | representative 12 months | all stills and residue systems | sum separately by waste identity and destination | calibration; dispatch ticket; dry-matter test |
| `cp_direct_air_emissions` | applicable process | fermentation CO2 or ethanol release | monitor or closed balance record | flow identity; vent concentration and flow; alcohol inputs and outputs; recovered quantity | direct measurement preferred; carbon or alcohol balance otherwise | kg | each campaign or representative test | representative 12 months | every applicable vent or process | report each source and substance separately | calibration; balance closure; engineering review |
| `cp_maturation_records` | `maturation` | barrel, storage energy, matured output, barrel waste, and ethanol loss | vessel register, tank record, meter, and laboratory record | vessel id; material; tare; fills; reuse count; dates; mass; ABV; temperature; electricity | vessel-by-vessel or tank-lot reconciliation | kg; kWh; days | each fill, transfer, and release | complete maturation lots released in period | all maturation stores | allocate vessel and energy by occupancy; calculate ethanol loss separately | vessel register; calibration; laboratory result; inventory reconciliation |
| `cp_blending_materials` | `blending_conditioning` | each alcohol, water, sweetener, colour, or flavour input | recipe, scale, tank, and issue record | identity; grade; concentration; gross; tare; return; batch id | calibrated dosing, scale, or tank reconciliation | kg; m3 | each batch | representative 12 months | all blending tanks | sum each material separately and normalize to conforming output | calibration; recipe approval; supplier specification |
| `cp_filtration_records` | `blending_conditioning` | filter aid and filtration residue | issue, filter, and waste record | aid identity; dry input; wet residue; moisture; product recovery; batch | scale and filter campaign reconciliation | kg | each filter campaign | representative 12 months | all filters | keep aid input and residue output separate | calibration; filter log; waste ticket |
| `cp_product_release` | `blending_conditioning` | reference product and off-spec liquid | tank release and quality record | product identity; legal name; mass; volume; density; temperature; ABV; disposition; batch | calibrated tank plus laboratory release test | kg; L; % vol | each batch | all released batches in period | all release tanks | use conforming net mass as denominator; retain rework and rejection separately | tank calibration; release certificate; batch reconciliation |
| `cp_cleaning_records` | `cleaning_wastewater` | each cleaning water, cleaner, disinfectant, and electricity input | CIP recipe, meter, tank, and cycle record | chemical identity; active concentration; charge; return; discharge; water; energy; equipment | calibrated chemical, water, and energy measurement | kg; m3; kWh | each cleaning cycle | representative 12 months including product changes | all foreground CIP circuits and manual cleaning | calculate each chemical and water role separately by assigned cycle | calibration; CIP log; concentration test |
| `cp_wastewater_monitoring` | `cleaning_wastewater` | wastewater, sludge, COD, BOD5, nitrogen, or phosphorus | discharge meter, sampling, laboratory, and sludge record | volume; concentration; time; treatment stage; sludge mass; dry matter; destination | flow-weighted representative sampling and calibrated volume measurement | m3; mg/L; kg | each campaign or permit frequency | representative 12 months including peak production | all foreground discharge points | calculate each load independently at the declared point | meter calibration; accredited laboratory report; sampling plan |
| `cp_packaging_components` | `filling_packaging` | each bottle, closure, label, box, or film | bill of materials, issue, count, and unit-mass record | component identity; issued count; return; unit mass; supplier lot | net count multiplied by verified unit mass or direct issued mass | kg | each packaging batch | representative 12 months | all package formats and filling lines | calculate each component separately | supplier specification; unit-mass sample; inventory reconciliation |
| `cp_packaging_water` | `filling_packaging` | bottle-rinsing water | line water meter and cycle record | meter readings; line; format; batch; dry-rinse status | line sub-meter or verified cycle-volume calculation | m3 | each batch or monthly | representative 12 months | all filling lines | keep rinsing water separate from cleaning wastewater | meter calibration; line log; water balance |
| `cp_packaging_wastes` | `filling_packaging` | each individual packaging waste | rejection and waste dispatch record | material identity; rejected count or mass; destination; batch | direct weighing or rejected count times verified unit mass | kg | each batch and dispatch | representative 12 months | all filling lines | sum separately for glass, aluminium, cork, paper, corrugated board, and polyethylene film | rejection log; waste ticket; unit-mass verification |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_exchange` | every inventory row | normalized amount = net process amount / net conforming reference-product mass × 1,000 kg | net recorded exchange; conforming output mass | amount per 1,000 kg reference product |  |
| `volume_to_mass` | every alcoholic liquid recorded by volume | mass = measured volume at stated temperature × measured density at the same temperature | volume; density; temperature | kg alcoholic liquid | `oiv-spirit-analysis-compendium-2023` |
| `litres_pure_alcohol` | alcohol-balance check | litres pure alcohol at 20 °C = liquid volume at 20 °C × measured ABV/100 | volume at 20 °C; measured ABV | L pure alcohol | `eu-reg-2019-787`; `oiv-spirit-analysis-compendium-2023` |
| `refrigerant_leak` | each refrigeration circuit | leak = opening charge + additions − recovered refrigerant − closing charge, with unexplained residual disclosed | circuit charge and service records | kg leaked refrigerant by identity |  |
| `wastewater_load` | each wastewater indicator | load = discharged volume × flow-weighted concentration with unit conversion; calculate each indicator independently | m3 wastewater; mg/L indicator | kg indicator per 1,000 kg product | `eu-jrc-fdm-bref-2019` |
| `packaging_component_mass` | each packaging component | component mass = (issued count − returned unused count) × verified unit mass | counts; unit mass | kg component per 1,000 kg product |  |
| `maturation_alcohol_loss` | matured alcoholic liquid | ethanol loss = opening pure-alcohol mass + additions − closing pure-alcohol mass − transferred or sampled pure-alcohol mass | mass, density, ABV, transfers, samples | kg ethanol to air with residual uncertainty | `eu-reg-2019-787` |
| `batch_mass_balance` | each process and total foreground | closure = accounted products + wastes + elementary releases + closing inventory − opening inventory, compared with measured inputs; investigate residuals | all input, output, and inventory records | closure ratio and unexplained residual |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | every product, waste, and elementary flow | Retain one physical or chemical identity per row, with grade, composition, supplier, route, and destination data needed for an upstream or receiving-flow match. | specification; safety sheet; recipe; waste ticket; Tiangong UUID when confirmed |
| `dq_temporal` | foreground records | Use at least 12 consecutive representative months for continuous production; for campaigns and maturation releases, include all relevant campaigns or lots and disclose seasonality and stock changes. | meter exports; batch register; maturation register; production calendar |
| `dq_measurement` | mass, volume, ABV, density, energy, and emissions | Use calibrated instruments and validated laboratory methods; document estimation, conversion, and allocation where direct measurement is unavailable. | calibration certificates; laboratory method; allocation worksheet |
| `dq_route_completeness` | process map | Reconcile the declared starting condition and every activated route to detailed process rows; explain every omitted conditional process. | route diagram; batch genealogy; supplier records |
| `dq_inventory_completeness` | all exchanges | Reconcile raw materials, yeast, enzymes, auxiliaries, water, electricity, steam, each fuel, each refrigerant, barrels, packaging, wastes, wastewater indicators, and direct emissions without aggregate placeholders. | completeness matrix; mass and alcohol balances |
| `dq_geography_technology` | upstream links | Match raw-material, alcohol, electricity, fuel, water, refrigerant, barrel, and packaging datasets to supplier geography and production technology or disclose proxies. | supplier location; utility contract; proxy justification |
| `dq_case_evidence` | external quantitative evidence | Do not turn a single plant, batch, product, or literature scenario into a category range. Retain unresolved range needs until at least two independent boundary-compatible original sources support synthesis. | source review record; boundary comparison |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | The product is an other spirituous beverage or undenatured ethyl alcohol below 80% vol within the declared semantic boundary; denatured alcohol, alcohol at or above 80% vol, and excluded fermented beverages are rejected. | `unsd-cpc-3-24139`; `eu-reg-2019-787` |
| `validate_reference_identity` | reference flow | Net mass, product identity, legal name, raw-material route, ABV at 20 °C, density, maturation state, formulation, package state, Mass UUID, unit-group UUID, and kg unit are present and consistent; the unresolved product-flow UUID remains a review blocker for publication. | `eu-reg-2019-787`; `oiv-spirit-analysis-compendium-2023` |
| `validate_abv_conversion` | alcoholic liquids | Every volume-to-mass and pure-alcohol conversion retains measured volume, density, temperature, ABV method, formula, and unit conversion; water density and nominal label strength are not substituted. | `eu-reg-2019-787`; `oiv-spirit-analysis-compendium-2023` |
| `validate_route_coverage` | process map | Each on-site feedstock-preparation, fermentation, energy, cooling, distillation, rectification, maturation, blending, filtration, cleaning, wastewater, and packaging operation is activated or explicitly documented as not applicable. | `eu-jrc-fdm-bref-2019`; `eu-reg-2019-787` |
| `validate_atomic_flows` | inventory | Every fermentable raw material, yeast, enzyme, auxiliary, water role, electricity use, steam or heat carrier, fuel, refrigerant, cleaner, barrel, bottle, closure, label, box, film, waste, wastewater indicator, and air emission is a separate atomic row. |  |
| `validate_energy_no_double_count` | steam and fuels | Purchased steam and on-site fuel combustion are reconciled so that internal steam transfer is not assigned a second upstream production burden. | `eu-jrc-fdm-bref-2019` |
| `validate_refrigerants` | cooling circuits | Each refrigerant identity has separate make-up and leakage rows derived from a circuit mass balance; refrigerants are not grouped or hidden in electricity. | `eu-jrc-fdm-bref-2019` |
| `validate_waste_emissions` | outputs | Fermentation CO2, ethanol releases by process, combustion pollutants, stillage, spent wash, spent lees, sludge, cleaning wastewater, COD, BOD5, total nitrogen, total phosphorus, and each packaging waste are independently reported at a declared boundary and destination. | `eu-jrc-fdm-bref-2019` |
| `validate_mass_balance` | process and total foreground | Material and pure-alcohol balances reconcile inputs, conforming product, co-products, wastes, direct releases, samples, rework, and stock change; residuals are investigated and disclosed. |  |
| `validate_ranges` | all quantitative ranges | No single-case value is expressed as a category range. A source-backed empirical range requires at least two independent boundary-compatible original sources and an explicit synthesis; otherwise the range is omitted and the evidence need remains in manifest review metadata. | `risner-et-al-2018-whey-spirits` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one finished other spirituous beverage or undenatured ethyl alcohol product below 80% vol |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review, UUID resolution, and publication |
| allowed_use | Life-cycle inventory, product carbon footprint, environmental footprint, supply-chain assessment, and facility improvement where product identity, raw-material route, ABV, technology, geography, maturation, formulation, and package format are compatible |
| excluded_use | Denatured alcohol; alcohol at or above 80% vol; excluded beer, wine, cider, perry, mead, or other fermented beverages; another spirit type or route without compatibility review; comparative claims that ignore recipe, ABV, maturation, or packaging differences |
| required_metadata | PCR id and version; product class and legal name; target market; site and period; raw-material and alcohol origin; yeast and enzyme route; process map; distillation technology; measured ABV and density at stated temperature; maturation vessel and duration; formulation and filtration; bulk or package format; allocation; upstream datasets |
| required_quality_disclosure | Primary-data coverage; calibration and laboratory methods; mass and pure-alcohol balance closure; allocation; co-product treatment; wastewater sampling; direct-emission method; refrigerant balance; packaging evidence; proxies; exclusions; uncertainty; unresolved UUIDs and range evidence |
| update_trigger | Material change in product identity, legal specification, raw material, fermentation organism, enzyme route, still or rectification technology, fuel or electricity supply, refrigerant, maturation, formulation, filtration, cleaning, wastewater treatment, package format, allocation, site, or applicable market requirements |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-24139` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 24139, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-23) | Official classification coordinate and category title; scope context only, not process ranges |
| `eu-reg-2019-787` | Standard (`standard`) | Regulation (EU) 2019/787 on spirit drinks and agricultural ethyl alcohol, consolidated official text, https://eur-lex.europa.eu/eli/reg/2019/787/oj/eng (retrieved 2026-08-23) | Spirit-drink identity; agricultural alcohol; distillation, maturation, flavouring, colouring, blending, packaging, and ABV-at-20 °C definitions |
| `oiv-spirit-analysis-compendium-2023` | Standard (`standard`) | OIV, Compendium of International Methods of Analysis for Spirituous Beverages and Alcohols, 2023, https://www.oiv.int/sites/default/files/publication/2023-09/Compendium%20MA%20BOISPI%202023_EN%20.pdf (retrieved 2026-08-23) | Original official methods for measuring actual alcoholic strength by volume and density-based analysis at 20 °C |
| `eu-jrc-fdm-bref-2019` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019, Chapter 2 and Chapter 6, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf (retrieved 2026-08-23) | Original official process evidence for feedstock preparation, fermentation, distillation and rectification, stillage and spent liquids, CO2, ethanol and other emissions, energy, water, fuels, refrigeration, cleaning, wastewater, sludge, and bottling |
| `risner-et-al-2018-whey-spirits` | Literature (`literature`) | Risner, D. et al. (2018), Fermentation and distillation of cheese whey: Carbon dioxide-equivalent emissions and water use in the production of whey spirits and white whiskey, Journal of Dairy Science 101(4), 2963-2973, https://doi.org/10.3168/jds.2017-13774 | Original full-text single-case support for the conditional whey-spirit route, lactose-fermenting yeast, fermentation, distillation, water, energy, and fermentation CO2; explicitly not category range evidence |
| `eu-ef-method-2021` | Method factor (`method_factor`) | Commission Recommendation (EU) 2021/2279 on the Environmental Footprint methods, Annex I, https://eur-lex.europa.eu/eli/reco/2021/2279/oj/eng (retrieved 2026-08-23) | System modelling, process subdivision, allocation hierarchy, co-product treatment, data quality, and upstream dataset requirements |
