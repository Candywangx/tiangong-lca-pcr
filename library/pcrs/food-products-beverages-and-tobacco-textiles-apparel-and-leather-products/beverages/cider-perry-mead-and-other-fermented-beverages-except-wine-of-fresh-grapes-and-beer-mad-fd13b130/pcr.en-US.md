---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.cider-perry-mead-and-other-fermented-beverages-except-wine-of-fresh-grapes-and-beer-mad-fd13b130
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cider, perry, mead and other fermented beverages, except wine of fresh grapes and beer made from malt

## 1. Scope and Applicability

This PCR governs foreground data packages for cider, perry, mead, and other beverages whose characteristic product is obtained by alcoholic fermentation, except wine of fresh grapes and beer made from malt. It covers facility-gate production from receipt of fruit, honey, another declared fermentable sugar material, or a disclosed same-category intermediate through must preparation, fermentation, route-specific finishing, optional conditioning or carbonation, and dispatch in bulk or in declared packaging.

The category includes apple cider, pear perry, honey mead, fermented beverages made from other fruits or declared sugar-bearing materials, and still or sparkling variants that retain the character of a fermented beverage. Fresh-grape wine, malt beer, non-fermented beverages, vinegar, distilled spirits, and beverages whose identity is primarily created by adding distilled alcohol rather than fermentation are excluded. A data package shall declare the product name, jurisdictional product standard, fermentable raw material, actual alcohol content, residual-sugar or sweetness class where applicable, still or sparkling state, carbonation route, heat-treatment route, bulk or packaged market state, and every production process actually used. Cider, perry, and mead specifications in the cited sources are route evidence, not universal composition thresholds for the full category.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.cider-perry-mead-and-other-fermented-beverages-except-wine-of-fresh-grapes-and-beer-mad-fd13b130 |
| classification_refs | CPC 3.0: 24230 |
| covered_products | Cider; perry; mead; other beverages retaining their characteristic identity from alcoholic fermentation of fruit, honey, or another declared fermentable sugar material; still, naturally sparkling, or externally carbonated variants |
| excluded_products | Wine of fresh grapes; beer made from malt; non-fermented beverages; vinegar; distilled spirits; products whose identity no longer remains that of a fermented beverage |
| representative_product | One market-ready fermented beverage within this category at the producing-facility dispatch gate |
| production_route | Route-specific preparation of fruit must, honey must, or another sugar-material must; alcoholic fermentation; conditional clarification, filtration, maturation, stabilization, secondary fermentation, pasteurization, carbonation, bulk preparation, and packaging |
| market_state | Bulk liquid or packaged liquid; raw-material route, alcohol content, sweetness, carbonation state, heat-treatment state, packaging configuration, jurisdictional designation, geography, and production campaign declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of a market-ready fermented beverage in this product category at the producing-facility dispatch gate |
| How much | 1,000 kg of net saleable reference product |
| How well | Conforms to the declared jurisdictional product, composition, alcohol, food-safety, quality, and labelling specifications while retaining fermented-beverage identity |
| How long or cycle | One completed batch or production campaign through dispatch-ready condition |
| reference_flow_link | Net saleable output after measured process and filling losses, before downstream distribution, retail, consumption, and end of life |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Fermented beverage in this product category |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | product_name; fermentable_raw_material; jurisdictional_product_standard; actual_alcohol_content; residual_sugar_or_sweetness_class; still_or_sparkling; carbonation_route; heat_treatment_route; bulk_or_packaged; packaging_configuration_and_fill_quantity; geography; production_campaign; technology_route |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-normalised exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1,000 kg net saleable reference product and normalise every exchange to this mass. |
| `liquid_mass_conversion` | Beverage, must, water, and liquid-material records measured by volume | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert volume to mass using a material- and temperature-specific density record; retain raw volume, temperature, density, and calculation. |
| `packaging_mass` | Each packaging component | Mass | kg | Record placed-on-market mass for each component separately from component count and verified unit mass or a direct issue balance. |
| `energy_separation` | Electricity, steam, natural gas, liquefied petroleum gas, and light fuel oil | Energy | kWh or MJ | Preserve each carrier as a separate exchange and document energy-unit conversion and lower- or higher-heating-value basis for each fuel. |
| `wastewater_load` | Each direct water-emission indicator | Mass | kg | Calculate each pollutant load separately from matched discharge volume and concentration records; do not combine COD, BOD5, TSS, nitrogen, or phosphorus. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fruit, natural honey, another declared fermentable sugar material, or one explicitly disclosed same-category must or bulk fermented-beverage input received at the producing-facility gate |
| starting_condition_role | Foreground entry point for route-specific beverage manufacture |
| product_classification_scope | CPC 3.0 24230 fermented beverages; excludes fresh-grape wine, malt beer, non-fermented beverages, vinegar, and distilled products |
| recursive_input_rule | Record purchased must or bulk fermented beverage in this category once as one atomic product input with an upstream dataset; do not recursively reconstruct its production inside the receiving foreground process. |
| upstream_dataset_requirement | Require representative upstream datasets for each feedstock, same-category intermediate, yeast, additive, processing aid, water source, energy carrier, refrigerant, packaging component, inbound transport, and offsite treatment service. |
| disclosure | Disclose product definition, raw-material route, included and outsourced operations, excluded life-cycle stages, fermentation and conditioning route, product and alcohol losses, wastewater route, waste and co-product destinations, packaging configuration, and allocation choices. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_facility_gate` | Foreground beverage system | Include attributable operations from receipt of the declared feedstock or recursive same-category input through net saleable product dispatch, including route preparation, fermentation, finishing, filling or bulk preparation, cleaning, refrigeration, onsite utilities, direct releases, wastewater, residues, and wastes. | `un-cpc-3-2025`; `ec-jrc-fdm-bref-2019`; `eu-pef-2021` |
| `boundary_route_selection` | Product route | Apply exactly one documented feedstock-preparation route; include only the finishing, secondary-fermentation, pasteurization, carbonation, and package routes actually performed, with every non-applicable process explicitly identified. | `uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `eu-czworniak-mead-2016`; `iglesias-mead-2014` |
| `boundary_complete_exchanges` | Every included process | Inventory each material, utility, refrigerant, packaging component, product, residue, waste, wastewater stream, and direct emission as a separate atomic exchange. Missing upstream data are disclosed data gaps, not zero burdens. | `ec-jrc-fdm-bref-2019`; `eu-pef-2021` |
| `boundary_downstream` | Lifecycle model | Distribution, retail refrigeration, serving, consumption, packaging end of life, and other downstream stages are outside this facility-gate dataset and require linked datasets when a full life cycle is modelled. | `eu-pef-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `fruit_must_preparation` | Fruit reception, milling, and must preparation | conditional | fermentable_raw_material=fruit | Converts received fruit into fruit must and separates fruit pomace | 1,000 kg reference product |
| `honey_must_preparation` | Honey-must preparation | conditional | fermentable_raw_material=honey | Mixes honey and water and applies declared thermal preparation | 1,000 kg reference product |
| `other_must_preparation` | Other sugar-material must preparation | conditional | fermentable_raw_material=other_sugar_material | Prepares the specifically declared non-fruit, non-honey fermentable material for fermentation | 1,000 kg reference product |
| `alcoholic_fermentation` | Alcoholic fermentation | required | All products in scope | Converts fermentable sugars to alcoholic beverage and biogenic carbon dioxide | 1,000 kg reference product |
| `finishing_maturation` | Clarification, filtration, maturation, and stabilization | conditional | Any listed finishing operation occurs | Produces finished bulk beverage and records processing aids, losses, residues, and utilities | 1,000 kg reference product |
| `conditioning_carbonation` | Secondary fermentation or external carbonation | conditional | Product is bottle-conditioned, bottle-fermented, tank-conditioned, or externally carbonated | Produces the declared sparkling or carbonated beverage state | 1,000 kg reference product |
| `packaging_dispatch` | Filling, packaging, and dispatch preparation | conditional | Product is packaged before dispatch | Fills and assembles the declared package without combining components | 1,000 kg reference product |
| `site_services_wastewater` | Site utilities, cleaning, refrigeration, and wastewater treatment | required | Record shared services; treatment outputs apply when under foreground control | Records each shared carrier, chemical, refrigerant, wastewater, sludge, and direct release | 1,000 kg reference product |

### Process: Fruit reception, milling, and must preparation (`fruit_must_preparation`)

#### Inputs

##### Product flows

###### Fresh fruit feedstock (`fresh_fermentation_fruit`)

Record the accepted mass of the specifically declared fruit delivered for pressing, pulping, or direct must preparation.

- Selected flow: Fresh fermentation fruit
- Flow property / unit: Mass / kg
- Amount rule: Calibrated received mass net of documented rejected loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### Fruit-washing and must-preparation water (`fruit_preparation_water`)

Water supplied for fruit washing and must preparation is separately metered or batch-estimated.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Measured water delivered to fruit preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `ec-jrc-fdm-bref-2019`

###### Electricity for fruit milling and pressing (`fruit_preparation_electricity`)

Electricity powers washing, sorting, milling, pressing, pumping, and controls in this route.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly sub-metered electricity used by fruit preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `ec-jrc-fdm-bref-2019`

###### Pectinase for fruit-must preparation (`fruit_pectinase`)

Pectinase is recorded only when added to aid juice extraction or clarification.

- Selected flow: Pectinase
- Flow property / unit: Mass / kg
- Amount rule: Weighed formulation mass issued to fruit-must batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### Calcium chloride for keeving (`fruit_calcium_chloride`)

Food-grade calcium chloride is recorded only for a declared keeving route.

- Selected flow: Calcium chloride
- Flow property / unit: Mass / kg
- Amount rule: Weighed calcium-chloride mass added to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

#### Outputs

##### Product flows

###### Fruit must transferred to fermentation (`fruit_must_output`)

Fruit must is measured at transfer and remains route-specific rather than being combined with other must identities.

- Selected flow: Fruit must for fermented-beverage production
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or calibrated volume converted with matched density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

##### Waste flows

###### Fruit pomace from milling and pressing (`fruit_pomace`)

Wet pomace is weighed separately and its beneficial-use, treatment, or disposal destination is declared.

- Selected flow: Fermentation fruit pomace
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass removed from fruit preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `ec-jrc-fdm-bref-2019`

###### Fruit-preparation wastewater (`fruit_preparation_wastewater`)

Wastewater from fruit washing, pressing equipment, and route cleaning is recorded by source and destination.

- Selected flow: Fruit-preparation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or validated batch-volume discharge from fruit preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-fdm-bref-2019`

### Process: Honey-must preparation (`honey_must_preparation`)

#### Inputs

##### Product flows

###### Natural honey feedstock (`natural_honey`)

Natural honey is weighed by batch and kept distinct from other fermentable raw materials.

- Selected flow: Natural honey
- Flow property / unit: Mass / kg
- Amount rule: Weighed honey issued to honey-must preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-czworniak-mead-2016`; `iglesias-mead-2014`

###### Water for honey-must dilution (`honey_must_water`)

Water mixed with honey is part of the formulated must and is separately measured.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Measured water mass or calibrated volume converted at measured temperature
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-czworniak-mead-2016`; `iglesias-mead-2014`

###### Electricity for honey-must preparation (`honey_must_electricity`)

Electricity for mixing, pumping, cooling, and controls is recorded for this route.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly allocated route electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-czworniak-mead-2016`; `ec-jrc-fdm-bref-2019`

###### Steam for cooked honey-must preparation (`honey_must_steam`)

Purchased steam is recorded only when the declared mead route heats or boils honey must with steam.

- Selected flow: Steam, at industrial facility
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam energy delivered to honey-must preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-czworniak-mead-2016`

#### Outputs

##### Product flows

###### Honey must transferred to fermentation (`honey_must_output`)

Prepared honey must is measured after mixing, any heating, and cooling.

- Selected flow: Honey must for mead production
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or calibrated volume converted with matched density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-czworniak-mead-2016`; `iglesias-mead-2014`

### Process: Other sugar-material must preparation (`other_must_preparation`)

#### Inputs

##### Product flows

###### Other fermentable sugar material (`other_sugar_material`)

The data package names one specific sugar-bearing raw material and records it separately from fruit and honey.

- Selected flow: Other fermentable sugar material
- Flow property / unit: Mass / kg
- Amount rule: Weighed quantity of the specifically named sugar-bearing raw material issued to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `un-cpc-3-2025`

###### Water for other sugar-material must (`other_must_water`)

Water incorporated into this must is separately measured.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Measured water mass or calibrated volume converted at measured temperature
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Electricity for other sugar-material must (`other_must_electricity`)

Electricity for handling, dissolving, mixing, pumping, and cooling is recorded for this route.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly allocated route electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Steam for other sugar-material must (`other_must_steam`)

Purchased steam is recorded only when heating or pasteurizing the prepared must.

- Selected flow: Steam, at industrial facility
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam energy delivered to this route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-fdm-bref-2019`

#### Outputs

##### Product flows

###### Other sugar-material must transferred to fermentation (`other_must_output`)

The prepared must retains the identity of the specifically declared raw-material route.

- Selected flow: Other sugar-material must for fermented-beverage production
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or calibrated volume converted with matched density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `un-cpc-3-2025`

### Process: Alcoholic fermentation (`alcoholic_fermentation`)

#### Inputs

##### Product flows

###### Fruit must entering fermentation (`fermentation_fruit_must`)

This input applies only to the fruit route and is not combined with honey or other must.

- Selected flow: Fruit must for fermented-beverage production
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass from `fruit_must_preparation`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### Honey must entering fermentation (`fermentation_honey_must`)

This input applies only to the mead route.

- Selected flow: Honey must for mead production
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass from `honey_must_preparation`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-czworniak-mead-2016`; `iglesias-mead-2014`

###### Other sugar-material must entering fermentation (`fermentation_other_must`)

This input applies only to the declared other sugar-material route.

- Selected flow: Other sugar-material must for fermented-beverage production
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass from `other_must_preparation`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `un-cpc-3-2025`

###### Active dry beverage yeast (`fermentation_yeast`)

Purchased yeast is recorded when inoculation is used; spontaneous fermentation is disclosed with this row not applicable.

- Selected flow: Active dry beverage yeast
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry yeast added to the fermenter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `eu-czworniak-mead-2016`; `iglesias-mead-2014`

###### Diammonium phosphate yeast nutrient (`diammonium_phosphate`)

Diammonium phosphate is recorded separately when nutrient supplementation is used.

- Selected flow: Diammonium phosphate
- Flow property / unit: Mass / kg
- Amount rule: Weighed nutrient mass added to the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `iglesias-mead-2014`

###### Potassium metabisulfite addition (`potassium_metabisulfite`)

Potassium metabisulfite is recorded only when used for microbial or oxidation control.

- Selected flow: Potassium metabisulfite
- Flow property / unit: Mass / kg
- Amount rule: Weighed formulation mass added to must or beverage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### Electricity for fermentation control (`fermentation_electricity`)

Electricity for pumps, agitation, controls, cooling equipment, and tank operations is recorded here.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly sub-metered fermentation electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-fdm-bref-2019`

#### Outputs

##### Product flows

###### Fermented beverage transferred to finishing or dispatch (`fermented_beverage_output`)

The post-fermentation beverage is measured before route-specific finishing, conditioning, or packaging.

- Selected flow: Fermented beverage before finishing
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or calibrated volume converted with matched density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `eu-czworniak-mead-2016`; `iglesias-mead-2014`

##### Waste flows

###### Spent fermentation yeast (`spent_fermentation_yeast`)

Spent fermentation yeast removed from fermentation is weighed and assigned one documented destination.

- Selected flow: Spent fermentation yeast
- Flow property / unit: Mass / kg
- Amount rule: Measured wet yeast mass removed during fermentation, racking, or fermenter cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `eu-czworniak-mead-2016`

###### Fermentation lees (`fermentation_lees`)

Lees removed from fermentation are weighed separately from spent yeast and assigned one documented destination.

- Selected flow: Fermentation lees
- Flow property / unit: Mass / kg
- Amount rule: Measured wet lees mass removed during racking or fermenter cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `eu-czworniak-mead-2016`

###### Fermentation wastewater (`fermentation_wastewater`)

Fermenter, transfer-line, and racking-cleaning wastewater is recorded by source and destination.

- Selected flow: Fermentation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or validated batch-volume discharge from fermentation operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-fdm-bref-2019`

##### Elementary flows

###### Biogenic carbon dioxide from fermentation (`fermentation_co2_biogenic`)

Carbon dioxide formed by alcoholic fermentation is measured or calculated from the documented fermentable-sugar balance.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured off-gas or `calc_fermentation_co2`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `iglesias-mead-2014`; `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

### Process: Clarification, filtration, maturation, and stabilization (`finishing_maturation`)

#### Inputs

##### Product flows

###### Fermented beverage entering finishing (`finishing_beverage_input`)

The transferred beverage mass is reconciled with finished bulk output, residues, and losses.

- Selected flow: Fermented beverage before finishing
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass from `alcoholic_fermentation`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-czworniak-mead-2016`; `iglesias-mead-2014`; `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### Electricity for finishing and maturation (`finishing_electricity`)

Electricity for pumps, filtration, centrifugation, storage, cooling, and controls is recorded separately.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly sub-metered finishing electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Process water for finishing (`finishing_water`)

Water used for route-specific product preparation or equipment service is recorded separately from cleaning chemicals.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered water delivered to finishing operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Steam for thermal finishing (`finishing_steam`)

Purchased steam is recorded only when hot stabilization, pasteurization, or hot cleaning is included in this process.

- Selected flow: Steam, at industrial facility
- Flow property / unit: Energy / MJ
- Amount rule: Metered steam energy delivered to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-czworniak-mead-2016`; `ec-jrc-fdm-bref-2019`

###### Bentonite clarification aid (`bentonite`)

Bentonite is recorded only when used for the declared beverage.

- Selected flow: Bentonite
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry bentonite added to finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `iglesias-mead-2014`

###### Diatomaceous-earth filter aid (`diatomaceous_earth`)

Diatomaceous earth is recorded only for a route using this filter aid.

- Selected flow: Diatomaceous earth
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry filter-aid mass issued to filtration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `ec-jrc-fdm-bref-2019`

#### Outputs

##### Product flows

###### Finished bulk fermented beverage (`finished_bulk_beverage`)

Finished bulk beverage is measured after route-specific clarification, filtration, maturation, and stabilization.

- Selected flow: Finished bulk fermented beverage
- Flow property / unit: Mass / kg
- Amount rule: Measured finished-bulk mass net of retained residues and losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `eu-czworniak-mead-2016`; `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

##### Waste flows

###### Spent bentonite (`spent_bentonite`)

Spent bentonite is weighed separately from other filter and clarification residues.

- Selected flow: Spent bentonite
- Flow property / unit: Mass / kg
- Amount rule: Measured wet spent-bentonite mass removed from finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Spent diatomaceous earth (`spent_diatomaceous_earth`)

Spent diatomaceous earth is separately weighed and assigned a treatment destination.

- Selected flow: Spent diatomaceous earth
- Flow property / unit: Mass / kg
- Amount rule: Measured wet spent-filter-aid mass removed from filtration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Rejected beverage from finishing (`finishing_beverage_loss`)

Off-specification or lost beverage is measured separately from wastewater.

- Selected flow: Rejected fermented beverage
- Flow property / unit: Mass / kg
- Amount rule: Measured product mass rejected, spilled, or removed during finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Finishing wastewater (`finishing_wastewater`)

Wastewater from filtration, maturation vessels, stabilization, and finishing cleaning is recorded by destination.

- Selected flow: Finishing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or validated batch-volume discharge from finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-fdm-bref-2019`

### Process: Secondary fermentation or external carbonation (`conditioning_carbonation`)

#### Inputs

##### Product flows

###### Finished beverage entering conditioning (`conditioning_beverage_input`)

The beverage transferred to conditioning is measured before sugar, yeast, or carbon dioxide additions.

- Selected flow: Finished bulk fermented beverage
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass from finishing or direct fermentation route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### Sucrose for secondary fermentation (`conditioning_sucrose`)

Sucrose is recorded only when added to drive a declared secondary-fermentation route.

- Selected flow: Sucrose
- Flow property / unit: Mass / kg
- Amount rule: Weighed sucrose added to the conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### Yeast for secondary fermentation (`conditioning_yeast`)

Secondary-fermentation yeast is recorded separately from primary-fermentation yeast.

- Selected flow: Active dry beverage yeast
- Flow property / unit: Mass / kg
- Amount rule: Weighed dry yeast added for secondary fermentation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### Beverage-grade carbon dioxide for external carbonation (`beverage_carbon_dioxide`)

Purchased carbon dioxide is recorded only for external carbonation and not netted against fermentation carbon dioxide.

- Selected flow: Carbon dioxide, beverage grade
- Flow property / unit: Mass / kg
- Amount rule: Cylinder, bulk-tank, or mass-flow-meter balance for carbon dioxide added to product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_records`
- Sources: `eu-cider-perry-market-standards-2023`

###### Electricity for conditioning (`conditioning_electricity`)

Electricity for conditioning tanks, riddling, disgorging, chilling, and carbonation equipment is recorded separately.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly allocated conditioning electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `ec-jrc-fdm-bref-2019`

#### Outputs

##### Product flows

###### Conditioned fermented beverage (`conditioned_beverage`)

The sparkling or carbonated beverage is measured before final filling or dispatch.

- Selected flow: Conditioned fermented beverage
- Flow property / unit: Mass / kg
- Amount rule: Measured conditioned-beverage mass net of disgorging and transfer losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

##### Waste flows

###### Secondary-fermentation lees (`secondary_fermentation_lees`)

Lees removed during riddling, disgorging, or tank conditioning are recorded separately.

- Selected flow: Secondary-fermentation lees
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass removed during secondary fermentation finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

### Process: Filling, packaging, and dispatch preparation (`packaging_dispatch`)

#### Inputs

##### Product flows

###### Bulk beverage sent to filling (`packaging_beverage_input`)

Bulk beverage transferred to the filling line is measured before package losses.

- Selected flow: Finished bulk fermented beverage
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_balance`
- Sources: `ec-jrc-fdm-bref-2019`

###### Packaging-line electricity (`packaging_electricity`)

Electricity for rinsing, filling, closing, labelling, conveying, and pallet preparation is separately recorded.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered or defensibly allocated packaging-line electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Packaging-line water (`packaging_water`)

Water used on the filling line is separately metered from other process water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered water delivered to packaging operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Glass bottles (`glass_bottle`)

Glass bottle mass is recorded only for a glass-bottle package route.

- Selected flow: Glass bottle
- Flow property / unit: Mass / kg
- Amount rule: Filled-bottle count multiplied by verified empty-bottle mass plus measured rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### Aluminium beverage cans (`aluminium_can`)

Aluminium can mass is recorded only for the can route.

- Selected flow: Aluminium beverage can
- Flow property / unit: Mass / kg
- Amount rule: Filled-can count multiplied by verified empty-can mass plus measured rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021`

###### Steel crown closures (`steel_crown_closure`)

Steel crown closures are recorded separately from bottles and other closure types.

- Selected flow: Steel crown closure
- Flow property / unit: Mass / kg
- Amount rule: Applied-closure count multiplied by verified unit mass plus measured rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `uk-welsh-cider-2015`; `uk-welsh-perry-2015`

###### Aluminium screw-cap closures (`aluminium_screw_cap`)

Aluminium screw caps are recorded only when used and remain separate from crown closures.

- Selected flow: Aluminium screw-cap closure
- Flow property / unit: Mass / kg
- Amount rule: Applied-closure count multiplied by verified unit mass plus measured rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021`

###### Paper labels (`paper_label`)

Paper labels are recorded separately from containers, closures, and cartons.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Applied-label count multiplied by verified unit mass plus measured rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021`

###### Corrugated board cartons (`corrugated_board_carton`)

Carton mass is recorded for the declared secondary-packaging configuration.

- Selected flow: Corrugated board carton
- Flow property / unit: Mass / kg
- Amount rule: Carton count multiplied by verified unit mass plus measured rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021`

###### Low-density polyethylene shrink film (`ldpe_shrink_film`)

Shrink-film mass is recorded separately from cartons and other package components.

- Selected flow: Low-density polyethylene shrink film
- Flow property / unit: Mass / kg
- Amount rule: Issued film mass net of returned rolls, with measured line scrap added
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021`

#### Outputs

##### Product flows

###### Market-ready reference product (`reference_product_output`)

This is the single reference-product exchange for the declared bulk or packaged fermented beverage.

- Selected flow: Fermented beverage in this product category
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed net saleable reference amount after filling and dispatch-preparation losses
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: exactly 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `un-cpc-3-2025`; `eu-pef-2021`

##### Waste flows

###### Rejected beverage from filling (`packaging_beverage_loss`)

Underfills, overfills, start-up product, spills, and rejected filled product are measured separately from wastewater.

- Selected flow: Rejected fermented beverage
- Flow property / unit: Mass / kg
- Amount rule: Measured beverage mass rejected or lost on the filling line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Broken glass packaging (`broken_glass`)

Broken or rejected glass is weighed separately from metal, paper, and plastic packaging scrap.

- Selected flow: Broken glass packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured glass reject mass from the packaging line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Aluminium-can scrap (`aluminium_can_scrap`)

Rejected aluminium cans are weighed separately from closure scrap and other packaging waste.

- Selected flow: Aluminium-can scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected aluminium-can mass from packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Steel crown-closure scrap (`steel_crown_closure_scrap`)

Rejected steel crown closures are weighed separately from cans, other closures, and other packaging waste.

- Selected flow: Steel crown-closure scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected steel crown-closure mass from packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Aluminium screw-cap scrap (`aluminium_screw_cap_scrap`)

Rejected aluminium screw caps are weighed separately from cans, steel closures, and other packaging waste.

- Selected flow: Aluminium screw-cap scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected aluminium screw-cap mass from packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Paper-label scrap (`paper_label_scrap`)

Rejected paper labels are recorded separately from cartons and other packaging waste.

- Selected flow: Paper-label scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected paper-label mass from packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Corrugated-board packaging scrap (`corrugated_board_scrap`)

Rejected corrugated-board cartons are recorded separately from labels and other packaging waste.

- Selected flow: Corrugated-board packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected corrugated-board mass from packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Polyethylene-film scrap (`polyethylene_film_scrap`)

Rejected shrink film is recorded separately from all other packaging wastes.

- Selected flow: Polyethylene-film scrap
- Flow property / unit: Mass / kg
- Amount rule: Measured polyethylene-film reject mass from packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Packaging wastewater (`packaging_wastewater`)

Filling-line, container-rinsing, and packaging-cleaning wastewater is recorded by destination.

- Selected flow: Packaging wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or validated batch-volume discharge from packaging operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-fdm-bref-2019`

### Process: Site utilities, cleaning, refrigeration, and wastewater treatment (`site_services_wastewater`)

#### Inputs

##### Product flows

###### Shared site electricity (`site_electricity`)

Shared electricity not directly sub-metered to another process is separately recorded and allocated by a causal driver.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered shared-site electricity assigned with documented operating or load drivers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-fdm-bref-2019`; `eu-pef-2021`

###### Natural gas for onsite heat (`site_natural_gas`)

Natural gas is recorded as one fuel and is not combined with other fuels.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoice quantity converted using documented heating value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Liquefied petroleum gas for onsite heat (`site_lpg`)

Liquefied petroleum gas is recorded only when used and remains separate from natural gas and fuel oil.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoice quantity converted using documented heating value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Light fuel oil for onsite heat (`site_light_fuel_oil`)

Light fuel oil is recorded only when used and remains separate from gaseous fuels.

- Selected flow: Light fuel oil
- Flow property / unit: Energy / MJ
- Amount rule: Metered or invoice quantity converted using documented heating value
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Purchased steam for shared services (`site_steam`)

Purchased steam used by shared hot-water or cleaning systems is separately metered from fuels.

- Selected flow: Steam, at industrial facility
- Flow property / unit: Energy / MJ
- Amount rule: Metered shared-service steam energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Cleaning and service water (`site_cleaning_water`)

Water used for shared clean-in-place, sanitation, and site services is measured separately from formulation water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or event-based water use for cleaning and shared services
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Sodium hydroxide cleaning agent (`sodium_hydroxide_cleaner`)

Sodium hydroxide is recorded separately from acid and disinfectant chemicals.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Active sodium-hydroxide mass calculated from issued formulation and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Nitric acid cleaning agent (`nitric_acid_cleaner`)

Nitric acid is recorded only when used in an acid-cleaning step.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Active nitric-acid mass calculated from issued formulation and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Peracetic acid disinfectant (`peracetic_acid_disinfectant`)

Peracetic acid is recorded separately when used for disinfection.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Active peracetic-acid mass calculated from issued formulation and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Refrigerant R134a makeup (`r134a_makeup`)

R134a additions are recorded by refrigeration circuit only when that refrigerant is present.

- Selected flow: Refrigerant R134a
- Flow property / unit: Mass / kg
- Amount rule: Servicing additions reconciled by `calc_refrigerant_loss`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Refrigerant R404A makeup (`r404a_makeup`)

R404A additions are recorded separately from R134a and ammonia.

- Selected flow: Refrigerant R404A
- Flow property / unit: Mass / kg
- Amount rule: Servicing additions reconciled by `calc_refrigerant_loss`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Anhydrous ammonia refrigerant makeup (`ammonia_refrigerant_makeup`)

Anhydrous ammonia additions are recorded only for an ammonia refrigeration circuit.

- Selected flow: Anhydrous ammonia refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Servicing additions reconciled by `calc_refrigerant_loss`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `ec-jrc-fdm-bref-2019`

##### Waste flows

###### Combined beverage-process wastewater to onsite treatment (`wastewater_treatment_input`)

Combined process wastewater is recorded at the treatment inlet after source-process streams remain separately traceable.

- Selected flow: Combined beverage-process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered onsite-treatment influent volume reconciled to source streams
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-fdm-bref-2019`

#### Outputs

##### Waste flows

###### Treated beverage-process wastewater (`treated_wastewater`)

Treated effluent is recorded by volume and destination before direct discharge, reuse, or transfer.

- Selected flow: Treated beverage-process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered treatment-effluent volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ec-jrc-fdm-bref-2019`

###### Wastewater-treatment sludge (`wastewater_sludge`)

Sludge is recorded by wet mass, dry matter where available, and one documented destination.

- Selected flow: Beverage wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured wet sludge mass removed from onsite treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `ec-jrc-fdm-bref-2019`

##### Elementary flows

###### Fossil carbon dioxide from onsite fuel combustion (`combustion_co2_fossil`)

Fossil carbon dioxide is calculated for each fuel activity without combining fuels in the input inventory.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: `calc_combustion_emissions` for carbon dioxide
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-pef-2021`

###### Fossil methane from onsite fuel combustion (`combustion_ch4`)

Methane is calculated as a separate direct emission.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: `calc_combustion_emissions` for methane
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-pef-2021`

###### Nitrous oxide from onsite fuel combustion (`combustion_n2o`)

Nitrous oxide is calculated as a separate direct emission.

- Selected flow: Nitrous oxide, to air
- Flow property / unit: Mass / kg
- Amount rule: `calc_combustion_emissions` for nitrous oxide
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `eu-pef-2021`

###### Nitrogen oxides from onsite fuel combustion (`combustion_nox`)

Nitrogen oxides are calculated separately from greenhouse-gas emissions.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: `calc_combustion_emissions` for nitrogen oxides
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emission_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### R134a released to air (`r134a_to_air`)

R134a loss is reported separately from every other refrigerant.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: `calc_refrigerant_loss` for the R134a circuit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### R404A released to air (`r404a_to_air`)

R404A loss is reported as its own refrigerant-mixture elementary flow.

- Selected flow: Refrigerant R404A, to air
- Flow property / unit: Mass / kg
- Amount rule: `calc_refrigerant_loss` for the R404A circuit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Ammonia refrigerant released to air (`ammonia_to_air`)

Anhydrous ammonia loss is reported separately from fluorinated refrigerants.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: `calc_refrigerant_loss` for the ammonia circuit
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `ec-jrc-fdm-bref-2019`

###### Chemical oxygen demand discharged to water (`cod_to_water`)

COD is calculated from matched effluent flow and concentration records.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: `calc_wastewater_load` for COD
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ec-jrc-fdm-bref-2019`

###### Five-day biochemical oxygen demand discharged to water (`bod5_to_water`)

BOD5 is calculated separately from COD.

- Selected flow: Biochemical oxygen demand, 5 days, to water
- Flow property / unit: Mass / kg
- Amount rule: `calc_wastewater_load` for BOD5
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ec-jrc-fdm-bref-2019`

###### Total suspended solids discharged to water (`tss_to_water`)

Total suspended solids are calculated as a separate pollutant load.

- Selected flow: Total suspended solids, to water
- Flow property / unit: Mass / kg
- Amount rule: `calc_wastewater_load` for TSS
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ec-jrc-fdm-bref-2019`

###### Total nitrogen discharged to water (`total_nitrogen_to_water`)

Total nitrogen is calculated separately from other water-emission indicators.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass / kg
- Amount rule: `calc_wastewater_load` for total nitrogen
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ec-jrc-fdm-bref-2019`

###### Total phosphorus discharged to water (`total_phosphorus_to_water`)

Total phosphorus is calculated separately from other water-emission indicators.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass / kg
- Amount rule: `calc_wastewater_load` for total phosphorus
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ec-jrc-fdm-bref-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | All foreground processes and shared site services | Avoid allocation first by sub-metering or subdividing batches, lines, tanks, cleaning events, refrigeration circuits, and treatment operations so directly attributable exchanges remain with the declared product. | `eu-pef-2021`; `ec-jrc-fdm-bref-2019` |
| `allocation_physical_causality` | Shared operations that cannot be subdivided | Allocate remaining shared inputs and outputs using a documented physical causal driver such as product mass, tank occupancy, operating time, thermal load, cleaning event, wastewater volume, or pollutant load; state why the driver reflects causality. | `eu-pef-2021` |
| `allocation_economic_fallback` | Multiple valuable outputs without a defensible physical relationship | Use a documented non-physical relationship such as contemporaneous economic value only after subdivision and physical causality are shown impracticable; disclose prices, reference period, factors, and a sensitivity result. | `eu-pef-2021` |
| `allocation_residue_status` | Pomace, yeast, lees, recovered carbon dioxide, sludge, and other recovered outputs | Treat an output as a co-product only when it is separately measured, meets a declared specification, and has documented beneficial use or market value; otherwise record it as waste. Do not subtract an avoided-product credit within this facility-gate inventory unless a broader study applies a consistent substitution method. | `eu-pef-2021`; `ec-jrc-fdm-bref-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_balance` | all | Feedstock, must, intermediate, and product mass | Scale, tank, density, batch, and dispatch records | batch_id; material_identity; route; timestamp; gross_mass; tare_mass; volume; temperature; density; opening_stock; closing_stock; transfer_loss | Calibrated scale or calibrated volume converted with matched density | kg | Each receipt, batch, transfer, and dispatch | Complete representative campaign | All foreground operations | Reconcile route-specific inputs, outputs, stock changes, emissions, and documented losses before normalization | Calibration certificates; tank charts; batch reconciliation; dispatch records |
| `cp_energy_records` | all | Electricity, steam, and each fuel | Meter, invoice, and equipment-allocation records | carrier_identity; meter_id; timestamp; quantity; unit; heating_value_basis; process_assignment; allocation_driver | Direct sub-metering preferred; otherwise documented allocation from facility meters | kWh; MJ | Continuous or invoice period | Complete representative campaign | Foreground facility and onsite treatment | Aggregate each carrier separately; no combined energy row | Meter calibration; invoices; allocation worksheet; completeness check |
| `cp_water_records` | all | Formulation, process, and cleaning water | Meter, batch, and cleaning-event records | meter_id; timestamp; volume; temperature; source; process_assignment; reuse_flag | Direct meter or validated event estimate | kg; m3 | Continuous, batch, or each cleaning event | Complete representative campaign | All foreground operations | Sum by source and process; distinguish water incorporated into product, fresh intake, and reuse | Meter calibration; batch sheet; cleaning log; water balance |
| `cp_additive_records` | all | Yeast, nutrient, additive, processing aid, sugar, and carbon dioxide | Weighing, formulation, stock-issue, and gas-meter records | material_identity; supplier; active_fraction; batch_id; issued_mass; returned_mass; gas_quantity | Weighed issue-and-return balance or calibrated dosing record | kg | Each addition | Complete representative campaign | Foreground beverage operations | Aggregate each atomic material and route separately | Supplier specification; scale calibration; batch sheet; stock reconciliation |
| `cp_cleaning_records` | site_services_wastewater | Each cleaning or disinfectant chemical | CIP recipe, concentration, conductivity, stock, and event records | chemical_identity; formulation; active_fraction; event_id; process; solution_volume; concentration; recovered_quantity | Active-mass calculation from issued formulation and measured concentration or stock balance | kg | Each cleaning event | Complete representative campaign | Foreground cleaning systems | Aggregate each active chemical separately; retain reused solution and disposal records | Supplier specification; conductivity or titration record; stock reconciliation |
| `cp_refrigerant_records` | site_services_wastewater | Each refrigerant addition and loss | Asset register and service records | equipment_id; refrigerant_identity; opening_charge; added_mass; recovered_mass; closing_charge; service_date; process_assignment | Circuit-level inventory balance | kg | Each service and annual or campaign close | Period overlapping declared campaign | Refrigeration systems serving foreground processes | Calculate and report each refrigerant separately | Technician record; purchase receipt; asset register; reconciliation |
| `cp_packaging_records` | packaging_dispatch | Each packaging component | Bill of materials, count, unit-mass, issue, return, and reject records | component_identity; supplier; specification; unit_mass; issued_count; returned_count; reject_count; reusable_cycles | Count times verified unit mass or direct mass issue balance | kg | Each packaging run | Complete representative campaign | Packaging operations under foreground control | Aggregate each component separately; reconcile product fill and rejects | Supplier specification; sampled unit mass; line reconciliation |
| `cp_waste_records` | all | Each waste, residue, or co-product | Scale, collection, dry-matter, status, and destination records | waste_identity; wet_mass; dry_matter; batch_id; destination; market_status; specification; haulier | Calibrated scale or container count with verified net mass | kg | Each removal | Complete representative campaign | All foreground processes | Aggregate each identity and destination separately; do not net sales against inputs | Weigh ticket; manifest; analysis; destination evidence |
| `cp_wastewater_records` | all | Each source-process wastewater | Flow meter, tank, sewer, reuse, and treatment records | source_process; timestamp; volume; destination; sanitary_inclusion; product_loss; treatment_route | Metered flow or validated tank-volume balance | m3 | Continuous or each discharge batch | Complete campaign including cleaning and peak production | Wastewater under foreground control | Preserve source stream before aggregation; reconcile influent, effluent, reuse, and transfer | Meter calibration; sewer invoice; tank log; water balance |
| `cp_wastewater_monitoring` | site_services_wastewater | Each wastewater pollutant | Matched flow and laboratory sample records | sample_id; interval; discharge_volume; cod; bod5; tss; total_nitrogen; total_phosphorus; method; detection_limit | Representative composite sampling and documented laboratory analysis | kg; mg/L; m3 | Per permit and sufficient to represent production variability | Complete representative campaign | Direct discharge under foreground control | Pair each concentration with the same flow interval and calculate each pollutant separately | Chain of custody; method; laboratory QA/QC; flow-meter calibration |
| `cp_direct_emission_records` | all | Fermentation, combustion, and refrigerant releases | Sugar, off-gas, fuel, factor, and asset records | batch_id; sugar_before; sugar_after; offgas_mass; fuel_identity; fuel_quantity; factor_id; factor_value; refrigerant_identity; refrigerant_loss | Direct measurement preferred; otherwise documented stoichiometry, factor, or asset balance | kg | Each batch, fuel period, or refrigerant service | Complete representative campaign | Direct foreground emission sources | Calculate each emitted substance separately | Analytical record; invoice; factor provenance; calculation worksheet |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalisation` | Every inventory exchange | normalized_amount = campaign_amount / net_saleable_reference_product_mass × 1,000 kg | Campaign exchange amount; net saleable product mass | Exchange per 1,000 kg reference product | `eu-pef-2021` |
| `calc_volume_to_mass` | Must, beverage, water, and liquid materials | mass = calibrated_volume × density measured or justified for the material and temperature | Volume; temperature; density | Material mass | `eu-pef-2021` |
| `calc_active_chemical` | Formulated additives and cleaning agents | active_material_mass = formulation_mass × verified active_mass_fraction | Formulation mass; active fraction | Atomic active-material mass | `ec-jrc-fdm-bref-2019` |
| `calc_fermentation_co2` | Alcoholic fermentation | Use measured off-gas where reliable; otherwise CO2_mass = fermentable_hexose_equivalent_consumed × 88/180, adjusted for documented dissolved or recovered carbon dioxide | Sugar before and after; batch mass; measured off-gas; retained or recovered carbon dioxide | Biogenic carbon dioxide to air | `iglesias-mead-2014` |
| `calc_refrigerant_loss` | Each refrigeration circuit | loss = opening_charge + additions - recovered_mass - closing_charge; retain one calculation per refrigerant | Circuit-level refrigerant inventory | Refrigerant emission to air | `ec-jrc-fdm-bref-2019` |
| `calc_combustion_emissions` | Each fuel and emitted substance | emission_mass = fuel_activity × documented fuel- and substance-specific emission_factor | Fuel quantity; heating-value basis; factor identity | Separate CO2, CH4, N2O, or NOx emission | `eu-pef-2021` |
| `calc_wastewater_load` | Each direct water-emission indicator | load_kg = matched_discharge_volume_m3 × concentration_mg_per_L / 1,000 | Discharge volume; matched concentration | Separate COD, BOD5, TSS, total-N, or total-P load | `ec-jrc-fdm-bref-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and every exchange | Retain the product definition, raw-material route, atomic flow identity, material specification, packaging component, refrigerant identity, waste status, and destination. | Product standard; batch sheet; supplier specification; asset register; waste manifest |
| `dq_temporal` | Foreground data | Cover one complete representative production campaign including preparation, fermentation, maturation, packaging, cleaning, refrigeration, stock changes, and wastewater attributable to the product; disclose deviations. | Dated meter exports; production calendar; opening and closing inventories |
| `dq_measurement` | Mass, volume, energy, water, chemical, packaging, and pollutant records | Use calibrated instruments or documented engineering estimates; retain units, density, active fractions, heating values, detection limits, and allocation drivers. | Calibration certificate; laboratory QA/QC; calculation worksheet |
| `dq_completeness` | All included processes | Reconcile feedstocks, products, intermediates, product loss, utilities, additives, aids, packaging, each waste, wastewater destination, refrigerant, and direct emission; explain every missing or excluded flow. | Campaign balance; signed completeness review; `ec-jrc-fdm-bref-2019`; `eu-pef-2021` |
| `dq_representativeness` | Foreground and linked upstream data | Characterize time, geography, technology, precision, completeness, consistency, source, and uncertainty; prioritize site-specific records for controlled processes and representative upstream datasets. | Data-quality assessment; dataset metadata; `eu-pef-2021` |
| `dq_range_integrity` | Any future quantitative range | Do not convert one plant, batch, scenario, or paper value into a range. Require at least two independent, boundary-compatible verified full texts before authoring an inferred empirical range. | Source comparison and range review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require the exact 1,000 kg mass basis and all product qualifiers; keep the product-flow UUID empty until one Tiangong flow is confirmed to cover the complete category. | `un-cpc-3-2025`; `eu-cider-perry-market-standards-2023` |
| `validate_scope` | Product identity | Confirm alcoholic fermentation is identity-forming and reject fresh-grape wine, malt beer, non-fermented beverages, vinegar, distilled spirits, and products that no longer retain fermented-beverage character. | `un-cpc-3-2025`; `eu-cn-2206-2019` |
| `validate_route` | Process map | Require exactly one applicable must-preparation route, alcoholic fermentation, and all actually performed finishing, conditioning, packaging, utility, cleaning, refrigeration, and wastewater operations; prohibit combined route-selector exchanges. | `uk-welsh-cider-2015`; `uk-welsh-perry-2015`; `eu-czworniak-mead-2016`; `iglesias-mead-2014` |
| `validate_atomic_inventory` | Inventory rows | Reject any selected flow that combines feedstocks, yeast and nutrients, electricity and heat, multiple fuels, multiple refrigerants, multiple chemicals, filtration aids, packaging components, wastes, wastewater indicators, or air emissions. | `ec-jrc-fdm-bref-2019`; `eu-pef-2021` |
| `validate_mass_balance` | Each process and campaign | Reconcile opening stocks plus inputs against outputs, closing stocks, fermentation carbon dioxide, moisture or density changes, measured waste, wastewater product loss, and documented losses before publication. | `ec-jrc-fdm-bref-2019`; `eu-pef-2021` |
| `validate_wastewater` | Wastewater and direct discharge | Require source-process volumes and destinations; reconcile onsite-treatment influent and effluent; calculate COD, BOD5, TSS, total nitrogen, and total phosphorus separately when monitored or required. | `ec-jrc-fdm-bref-2019` |
| `validate_packaging` | Packaged product | Reconcile fill count and net product mass and require a separate mass for every container, closure, label, carton, and film actually used, plus separate reject wastes. | `eu-pef-2021` |
| `validate_allocation` | Shared operations and recovered outputs | Require documented subdivision attempts, causal drivers, residual allocation factors, output status, and sensitivity for any non-physical fallback; prohibit undisclosed avoided-product credits. | `eu-pef-2021` |
| `validate_sources_and_quality` | Foreground package | Require source ids for externally constrained rules, foreground records for controlled processes, documented proxies for unavailable upstream data, complete quality disclosure, and explicit unresolved range and UUID gaps. | `ec-jrc-fdm-bref-2019`; `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for one declared fermented beverage in this product category at the producing-facility dispatch gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Product and process LCA, supply-chain inventory, environmental-footprint studies, hotspot analysis, and scenario modelling consistent with the declared raw-material route, product standard, technology, geography, campaign, packaging, and facility-gate boundary |
| excluded_use | Fresh-grape wine, malt beer, non-fermented beverage, vinegar, distilled spirit, or undisclosed substitution between fruit, honey, and other sugar-material routes; consumer claims implying cradle-to-grave coverage from this facility-gate dataset alone |
| required_metadata | PCR id and version; product name and jurisdictional standard; fermentable raw material; actual alcohol content; residual-sugar or sweetness class; still or sparkling state; carbonation and heat-treatment routes; geography; campaign; bulk or packaged state; package bill of materials; reference mass; wastewater route; waste and co-product destinations; allocation method; upstream dataset identities |
| required_quality_disclosure | Primary-versus-secondary data share; measurement and conversion methods; calibration and laboratory evidence; temporal, geographical, and technological representativeness; completeness; uncertainty; allocation sensitivity; unresolved flow UUIDs; missing range evidence; exclusions and proxy datasets |
| update_trigger | Change in product identity or law, raw-material route or formulation, fermentation or finishing technology, energy system, refrigerant, cleaning regime, packaging configuration, wastewater route, recovered-output status, allocation method, production representativeness, or a material review finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 Structure, 30 June 2025, code 24230: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Authoritative product-category title, inclusions, and exclusions; accessed 2026-08-23 |
| `eu-cider-perry-market-standards-2023` | official_guidance | European Commission, COM(2023) 200 final, Report on new marketing standards for cider and perry: https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:52023DC0200 | Official evidence that cider and perry definitions, fruit-juice content, water and sugar additions, and production rules vary by jurisdiction; supports required qualifiers rather than a universal recipe; accessed 2026-08-23 |
| `eu-cn-2206-2019` | standard | European Union, Explanatory Notes to the Combined Nomenclature, heading 2206, 2019/C 219/04: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52019XC0701(02) | Independent official description of other fermented beverages and the requirement that a product retain fermented-beverage character; accessed 2026-08-23 |
| `uk-welsh-cider-2015` | standard | UK Government, Traditional Welsh Cider Product Specification V2, 14 May 2015: https://assets.publishing.service.gov.uk/media/5fd36b18d3bf7f03a934080c/protected-food-name-welsh-cider.pdf | Verified full-text cider route: fruit receipt, washing, milling, pressing, yeast or spontaneous fermentation, sulfite and keeving aids, racking, still and secondary-fermentation package routes, and traceability; accessed 2026-08-23 |
| `uk-welsh-perry-2015` | standard | UK Government, Traditional Welsh Perry Product Specification V2, 14 May 2015: https://assets.publishing.service.gov.uk/media/5fd36afd8fa8f54d60878a81/protected-food-name-welsh-perry.pdf | Verified full-text perry route: pear pressing, fermentation, yeast and permitted aids, racking, still and sparkling finishing, packaging, and traceability; accessed 2026-08-23 |
| `eu-czworniak-mead-2016` | standard | European Union, Czwórniak traditional mead product specification, 2016/C 188/05: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52016XC0527(01) | Verified official mead route: honey, water, optional fruit or herbs, steam-heated must preparation, cooling, yeast pitching, fermentation, racking, maturation, filtration, and final adjustment; accessed 2026-08-23 |
| `iglesias-mead-2014` | literature | Iglesias, A. et al. Developments in the Fermentation Process and Quality Improvement Strategies for Mead Production. Molecules 19(8), 12577-12590. DOI: https://doi.org/10.3390/molecules190812577 | Open full-text peer-reviewed support for honey-water must, yeast, nutrients, pasteurization, fermentation carbon dioxide, fermentation control, post-fermentation, and impurity removal |
| `ec-jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, EUR 29978 EN, JRC118627, DOI: https://doi.org/10.2760/243911 | Verified full-text process inventory, water and energy monitoring, cleaning and CIP chemicals, separate residues, refrigerants, wastewater characterization and treatment, sludge, direct emissions, and data-quality evidence |
| `eu-pef-2021` | official_guidance | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated text: https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Functional unit, reference flow, system boundary, completeness, company-specific data, packaging, data quality, verification, and multi-functionality hierarchy; accessed 2026-08-23 |
