---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.sparkling-wine-of-fresh-grapes
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sparkling wine of fresh grapes

## 1. Scope and Applicability

This PCR governs foreground data packages for fermentation-derived sparkling wine made from fresh grapes, grape must, or base wine. The foreground boundary begins with the declared winery-gate input condition and ends with net sparkling wine in its declared pressure-resistant package at winery dispatch. It covers base-wine preparation when performed onsite, primary alcoholic fermentation, cuvee preparation, secondary fermentation by the traditional bottle route or closed-tank route, route-specific ageing and clarification, dosage, cleaning, refrigeration, packaging, and onsite wastewater treatment.

The dataset shall declare whether the entry material is fresh wine grapes, grape must, or base wine and shall not count the upstream production of a purchased same-category input again. Aerated sparkling wine made wholly or partly by injected carbon dioxide, semi-sparkling wine below the declared sparkling-wine pressure specification, aromatised wine, fruit wine, distilled wine products, wine vinegar, and products not made from fresh grapes or grape-derived intermediates are excluded. Vineyard operations, inbound transport, distribution, retail, consumption, and packaging end of life require linked datasets when included in a wider study.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.sparkling-wine-of-fresh-grapes |
| classification_refs | CPC 3.0: 24211 |
| covered_products | Sparkling wine obtained by first or second alcoholic fermentation from fresh grapes, grape must, or wine, with carbon dioxide of fermentation origin and the declared applicable pressure specification |
| excluded_products | Aerated sparkling wine; semi-sparkling wine; still wine; aromatised wine; fruit wine; grape juice; wine vinegar; distilled wine products; products based only on non-grape feedstock |
| representative_product | Market-ready sparkling wine of fresh grapes in one declared pressure-resistant bottle configuration at winery dispatch |
| production_route | Fresh grapes, grape must, or purchased base wine; primary fermentation when required; traditional bottle secondary fermentation or closed-tank secondary fermentation; route-specific maturation, clarification or disgorgement, dosage, final closure, packaging, and dispatch |
| market_state | Finished pressurised liquid in a declared bottle and closure system; actual alcohol, residual sugar, pressure at 20 degrees C, bottle type, fill quantity, and production route declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of market-ready fermentation-derived sparkling wine of fresh grapes at the winery dispatch gate |
| How much | 1,000 kg net sparkling wine, excluding packaging |
| How well | Conforms to the declared legal and market specification for actual alcoholic strength, residual sugar, carbon-dioxide origin, excess pressure at 20 degrees C, sensory or quality designation, and package pressure rating |
| How long or cycle | One completed production batch through secondary fermentation, declared maturation, finishing, packaging, and dispatch |
| reference_flow_link | Net saleable liquid mass in conforming filled packages after documented wine losses and before downstream distribution |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg |
| Reference product flow | Sparkling wine of fresh grapes |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | actual_alcohol_percent_by_volume; residual_sugar_g_per_L and declared sugar class; excess_pressure_bar_at_20_C; carbon_dioxide_origin=fermentation; production_route=traditional_bottle or closed_tank or other declared fermentation route; entry_material=fresh_grapes or grape_must or base_wine; bottle_type including material, nominal volume, empty mass, pressure rating, refillability and colour; closure_type; net_fill_volume; measured liquid density and temperature used for mass conversion; grape variety or blend; vintage or campaign; dosage practice; maturation duration; geography |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-normalised exchanges | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1,000 kg net sparkling-wine liquid, excluding packaging, and normalise every exchange to that mass. |
| `liquid_volume_to_mass` | Wine, must, water, and liquid additives measured by volume | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Retain raw volume, liquid temperature, batch-specific density, instrument identity, and the multiplication used to convert volume to mass; do not assume that one litre equals one kilogram. |
| `alcohol_strength` | Finished reference product | Volume fraction | % vol at 20 degrees C | Report measured actual alcoholic strength and the applicable total-alcohol specification; identify the analytical method and sampling lot. |
| `residual_sugar` | Finished reference product and dosage control | Mass concentration | g/L | Report measured residual sugar and declared sugar class on the same analytical basis; preserve dosage additions separately from the finished-product test. |
| `sparkling_pressure` | Finished reference product | Pressure | bar gauge at 20 degrees C | Measure or verify excess pressure at 20 degrees C in the final closed container and retain temperature correction and test records. |
| `bottle_and_fill_conversion` | Bottle count and filled-package records | Mass and count | kg and item | Record bottle type, empty bottle mass, nominal and actual fill volume, filled count, rejects, and net liquid density; calculate liquid mass and each packaging-component mass separately. |
| `energy_and_fuel_separation` | Electricity, purchased steam, and onsite fuels | Energy or fuel mass/volume | kWh, MJ, kg, or m3 | Keep purchased electricity, purchased steam, natural gas, LPG, diesel, and every other actual fuel as separate exchanges; retain lower or higher heating-value basis and conversion factors. |
| `wastewater_load` | Direct water-emission indicators | Mass | kg | Calculate each pollutant load separately from matched discharge volume and concentration; never aggregate COD, BOD5, suspended solids, nitrogen, or phosphorus into one emission flow. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Fresh wine grapes received at the winery gate, grape must received at the winery gate, or purchased base wine received for sparkling-wine production |
| starting_condition_role | Mutually exclusive foreground entry condition for the declared production route |
| product_classification_scope | Fermentation-derived sparkling wine of fresh grapes; excludes aerated and semi-sparkling products and non-grape fermented beverages |
| recursive_input_rule | Record a purchased grape must, base wine, or same-category sparkling-wine intermediate once as an atomic product input with its upstream dataset; do not reconstruct its upstream winery production inside the receiving process. |
| upstream_dataset_requirement | Require representative upstream datasets for the declared grape-derived entry material, yeast, sugar, each oenological aid, water, electricity, steam, each fuel, each refrigerant, cleaning agent, food-grade carbon dioxide used only for pressure management, every packaging component, and offsite treatment. |
| disclosure | Disclose entry material, route, actual alcohol, residual sugar, pressure, carbon-dioxide origin, bottle and closure type, maturation time, outsourced operations, product losses, wastewater route, residue destinations, refrigerants, allocation, excluded stages, and all mass or energy conversions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_winery_gate` | Foreground sparkling-wine system | Include all attributable operations from the declared winery-gate entry material through the final conforming filled package; link rather than duplicate vineyard, purchased base-wine, transport, distribution, use, and end-of-life datasets. | `unsd-cpc-3-2025`; `eu-regulation-1308-2013`; `luke-sparkling-carbon-footprint-2021` |
| `boundary_route_specific` | Traditional-bottle and closed-tank production | Traditional-bottle data shall include tirage, fermentation in the bottle, lees contact or declared maturation, riddling where used, disgorgement, dosage, final closure, and packaging; closed-tank data shall include tank tirage, fermentation and storage under pressure, isobaric clarification, cooling, dosage, and isobaric bottling as performed. | `oiv-sparkling-code-2025`; `andreola-charmat-energy-2025` |
| `boundary_carbon_dioxide_origin` | Product category eligibility | Require fermentation-derived carbon dioxide for the reference product; record purchased carbon dioxide only when used for inerting, pressure balancing, transfer, or isobaric bottling and do not use it to qualify an aerated product as fermentation-derived sparkling wine. | `oiv-sparkling-definition-2025`; `eu-regulation-1308-2013` |
| `boundary_atomic_exchanges` | Every included process | Inventory fresh grapes, must, base wine, each yeast, sugar, clarifier, stabiliser, sulfiting material, cleaning agent, utility, fuel, refrigerant, packaging component, residue, wastewater stream, sludge, and direct emission as separate atomic exchanges. | `eu-fdm-bat-2019`; `eu-food-beverage-bemp-2017`; `luke-sparkling-carbon-footprint-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `base_wine_preparation` | Entry-material handling and base-wine preparation | required | Apply only the cards matching entry_material; primary fermentation is included when base wine is made onsite | Produces or receives the declared base wine or fermenting cuvee without double counting upstream production | 1,000 kg reference product |
| `traditional_bottle_secondary` | Traditional bottle secondary fermentation and maturation | conditional | production_route=traditional_bottle | Performs tirage, secondary fermentation in the bottle, lees contact, and bottle maturation | 1,000 kg reference product |
| `closed_tank_secondary` | Closed-tank secondary fermentation and stabilisation | conditional | production_route=closed_tank | Performs tirage, fermentation under pressure, cold stabilisation, storage, and isobaric clarification | 1,000 kg reference product |
| `finishing_packaging` | Route-specific finishing, dosage, closure, and packaging | required | Apply traditional disgorgement or closed-tank isobaric bottling cards as applicable | Produces the final pressure-conforming packaged sparkling wine | 1,000 kg reference product |
| `cleaning_refrigeration` | Cleaning, thermal utilities, and refrigeration support | required | Record only exchanges actually used by included foreground processes | Captures shared sanitation, heat, fuel, refrigeration, and direct utility emissions | 1,000 kg reference product |
| `wastewater_treatment` | Onsite wastewater treatment and discharge | conditional | Winery wastewater is treated or discharged under foreground control | Treats winery wastewater and quantifies separate sludge and water-emission flows | 1,000 kg reference product |

### Process: Entry-material handling and base-wine preparation (`base_wine_preparation`)

#### Inputs

##### Product flows

###### Fresh wine grapes (`fresh_wine_grapes`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Fresh wine grapes
- Flow property / unit: Mass / kg
- Amount rule: Accepted inbound mass by lot when entry_material=fresh_grapes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_balance`
- Sources: `oiv-sparkling-code-2025`

###### Grape must (`received_grape_must`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Grape must
- Flow property / unit: Mass / kg
- Amount rule: Received mass converted from calibrated volume and density when entry_material=grape_must
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance`
- Sources: `oiv-sparkling-code-2025`

###### Purchased base wine (`purchased_base_wine`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Base wine for sparkling-wine production
- Flow property / unit: Mass / kg
- Amount rule: Received mass converted from calibrated volume and density when entry_material=base_wine
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance`
- Sources: `oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### Primary-fermentation yeast (`primary_fermentation_yeast`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Active wine yeast for primary fermentation
- Flow property / unit: Mass / kg
- Amount rule: Weighed yeast added when primary fermentation is performed onsite
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### Sulfur dioxide for must or base wine (`base_wine_sulfur_dioxide`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: Active sulfur-dioxide mass from formulation mass and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_records`
- Sources: `oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

#### Outputs

##### Product flows

###### Prepared base wine (`prepared_base_wine`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Base wine for sparkling-wine production
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred to cuvee preparation from calibrated volume and batch density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance`
- Sources: `oiv-sparkling-code-2025`

##### Waste flows

###### Grape stems (`grape_stems`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Grape stems
- Flow property / unit: Mass / kg
- Amount rule: Wet mass removed when fresh grapes are destemmed onsite
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `eu-food-beverage-bemp-2017`

###### Grape pomace (`grape_pomace`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Grape pomace
- Flow property / unit: Mass / kg
- Amount rule: Wet mass of skins, seeds, and pulp separated onsite, with destination and market status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `luke-sparkling-carbon-footprint-2021`

###### Primary-fermentation wine lees (`primary_wine_lees`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Wine lees from primary fermentation
- Flow property / unit: Mass / kg
- Amount rule: Wet lees mass removed before cuvee preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `luke-sparkling-carbon-footprint-2021`

##### Elementary flows

###### Biogenic carbon dioxide from primary fermentation (`primary_biogenic_co2`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or sugar-balance-calculated carbon dioxide released from onsite primary fermentation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `oiv-sparkling-code-2025`

###### Ethanol emitted during primary fermentation (`primary_ethanol_air`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Ethanol, to air
- Flow property / unit: Mass / kg
- Amount rule: Site-measured or documented engineering estimate of primary-fermentation ethanol loss
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-food-beverage-bemp-2017`

### Process: Traditional bottle secondary fermentation and maturation (`traditional_bottle_secondary`)

#### Inputs

##### Product flows

###### Base wine for bottle secondary fermentation (`traditional_base_wine`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Base wine for sparkling-wine production
- Flow property / unit: Mass / kg
- Amount rule: Cuvee base-wine mass charged to the traditional-bottle route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance`
- Sources: `oiv-sparkling-code-2025`

###### Tirage sugar for bottle fermentation (`traditional_tirage_sugar`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Sucrose
- Flow property / unit: Mass / kg
- Amount rule: Weighed sucrose in tirage liqueur charged to bottles
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### Secondary-fermentation yeast for bottle route (`traditional_secondary_yeast`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Active wine yeast for secondary fermentation
- Flow property / unit: Mass / kg
- Amount rule: Weighed yeast inoculum added at tirage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### Diammonium phosphate nutrient for bottle route (`traditional_dap`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Diammonium hydrogen phosphate
- Flow property / unit: Mass / kg
- Amount rule: Weighed nutrient addition when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `oiv-sparkling-code-2025`

###### Bentonite clarifier for bottle route (`traditional_bentonite`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Bentonite
- Flow property / unit: Mass / kg
- Amount rule: Weighed bentonite added at tirage when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### Pressure-resistant fermentation bottle (`traditional_fermentation_bottle`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Pressure-resistant glass sparkling-wine bottle
- Flow property / unit: Mass / kg
- Amount rule: Accepted bottle count multiplied by measured empty mass for the declared bottle type
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### Crown cap for tirage bottle (`traditional_crown_cap`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Steel crown cap
- Flow property / unit: Mass / kg
- Amount rule: Crown-cap count multiplied by supplier-declared unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `oiv-sparkling-code-2025`

#### Outputs

##### Product flows

###### Bottle-conditioned sparkling wine before disgorgement (`traditional_conditioned_wine`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Bottle-conditioned sparkling wine of fresh grapes
- Flow property / unit: Mass / kg
- Amount rule: Liquid mass in accepted matured bottles before riddling and disgorgement
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance`
- Sources: `oiv-sparkling-code-2025`

##### Elementary flows

###### Biogenic carbon dioxide released from bottle-route losses (`traditional_biogenic_co2`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Sugar-balance carbon dioxide not retained in saleable wine plus measured venting and disgorgement loss
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `oiv-sparkling-code-2025`

### Process: Closed-tank secondary fermentation and stabilisation (`closed_tank_secondary`)

#### Inputs

##### Product flows

###### Base wine for closed-tank secondary fermentation (`tank_base_wine`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Base wine for sparkling-wine production
- Flow property / unit: Mass / kg
- Amount rule: Cuvee base-wine mass charged to the pressure-resistant tank
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance`
- Sources: `oiv-sparkling-code-2025`

###### Tirage sugar for closed-tank fermentation (`tank_tirage_sugar`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Sucrose
- Flow property / unit: Mass / kg
- Amount rule: Weighed sucrose charged in tank tirage liqueur
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### Secondary-fermentation yeast for closed-tank route (`tank_secondary_yeast`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Active wine yeast for secondary fermentation
- Flow property / unit: Mass / kg
- Amount rule: Weighed yeast inoculum charged to the pressure-resistant tank
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### Diammonium phosphate nutrient for closed-tank route (`tank_dap`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Diammonium hydrogen phosphate
- Flow property / unit: Mass / kg
- Amount rule: Weighed nutrient addition when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `oiv-sparkling-code-2025`

###### Bentonite clarifier for closed-tank route (`tank_bentonite`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Bentonite
- Flow property / unit: Mass / kg
- Amount rule: Weighed bentonite added when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### Electricity for tank fermentation and cold stabilisation (`tank_electricity`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for agitation, pumping, refrigeration, clarification, and pressure control
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `andreola-charmat-energy-2025`; `luke-sparkling-carbon-footprint-2021`

###### Food-grade carbon dioxide for isobaric handling (`tank_food_grade_co2`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Carbon dioxide, food grade
- Flow property / unit: Mass / kg
- Amount rule: Metered purchased carbon dioxide used only for inerting, pressure balancing, transfer, or isobaric bottling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `oiv-sparkling-code-2025`

#### Outputs

##### Product flows

###### Clarified bulk sparkling wine (`tank_bulk_sparkling_wine`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Bulk sparkling wine of fresh grapes
- Flow property / unit: Mass / kg
- Amount rule: Mass transferred under isobaric conditions to final bottling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance`
- Sources: `oiv-sparkling-code-2025`; `andreola-charmat-energy-2025`

##### Waste flows

###### Closed-tank secondary-fermentation lees (`tank_secondary_lees`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Wine lees from closed-tank secondary fermentation
- Flow property / unit: Mass / kg
- Amount rule: Wet lees mass removed during tank clarification
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `luke-sparkling-carbon-footprint-2021`

##### Elementary flows

###### Biogenic carbon dioxide released from closed-tank losses (`tank_biogenic_co2`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Sugar-balance carbon dioxide not retained in saleable wine plus measured venting and transfer losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `oiv-sparkling-code-2025`

### Process: Route-specific finishing, dosage, closure, and packaging (`finishing_packaging`)

#### Inputs

##### Product flows

###### Bottle-conditioned wine entering disgorgement (`finishing_traditional_wine`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Bottle-conditioned sparkling wine of fresh grapes
- Flow property / unit: Mass / kg
- Amount rule: Accepted mass entering riddling and disgorgement for traditional_bottle route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance`
- Sources: `oiv-sparkling-code-2025`

###### Bulk sparkling wine entering isobaric bottling (`finishing_tank_wine`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Bulk sparkling wine of fresh grapes
- Flow property / unit: Mass / kg
- Amount rule: Accepted mass entering isobaric bottling for closed_tank route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_balance`
- Sources: `oiv-sparkling-code-2025`

###### Wine used in dosage (`dosage_wine`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Wine for dosage liqueur
- Flow property / unit: Mass / kg
- Amount rule: Mass of wine charged in dosage liqueur when used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_records`
- Sources: `oiv-sparkling-code-2025`

###### Sugar used in dosage (`dosage_sugar`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Sucrose
- Flow property / unit: Mass / kg
- Amount rule: Weighed sucrose charged in dosage liqueur when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `oiv-sparkling-code-2025`

###### Citric acid stabiliser in dosage (`dosage_citric_acid`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Citric acid
- Flow property / unit: Mass / kg
- Amount rule: Weighed citric acid charged in dosage when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_ingredient_records`
- Sources: `oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### Sulfur dioxide in dosage (`dosage_sulfur_dioxide`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Sulfur dioxide
- Flow property / unit: Mass / kg
- Amount rule: Active sulfur-dioxide mass from the dosage formulation when used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_records`
- Sources: `oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### Pressure-resistant bottle for closed-tank route (`tank_final_bottle`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Pressure-resistant glass sparkling-wine bottle
- Flow property / unit: Mass / kg
- Amount rule: Accepted bottle count multiplied by measured empty mass for the declared bottle type; not duplicated for traditional bottles already recorded at tirage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021`

###### Natural cork closure (`natural_cork_closure`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Natural cork sparkling-wine stopper
- Flow property / unit: Mass / kg
- Amount rule: Accepted stopper count multiplied by supplier-declared unit mass when this closure is used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `luke-sparkling-carbon-footprint-2021`

###### Synthetic polymer closure (`synthetic_polymer_closure`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Polyethylene sparkling-wine stopper
- Flow property / unit: Mass / kg
- Amount rule: Accepted stopper count multiplied by supplier-declared unit mass when this alternative closure is used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021`

###### Wire cage (`wire_cage`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Steel sparkling-wine wire cage
- Flow property / unit: Mass / kg
- Amount rule: Accepted cage count multiplied by supplier-declared unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `luke-sparkling-carbon-footprint-2021`

###### Paper bottle label (`paper_label`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Coated paper bottle label
- Flow property / unit: Mass / kg
- Amount rule: Applied label count multiplied by measured or supplier-declared unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `luke-sparkling-carbon-footprint-2021`

###### Corrugated cardboard carton (`corrugated_carton`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Corrugated cardboard shipping carton
- Flow property / unit: Mass / kg
- Amount rule: Used carton count multiplied by measured or supplier-declared unit mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_records`
- Sources: `luke-sparkling-carbon-footprint-2021`

###### Polyethylene pallet film (`polyethylene_film`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Net film mass issued to conforming pallets
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `luke-sparkling-carbon-footprint-2021`

#### Outputs

##### Product flows

###### Finished sparkling wine (`finished_sparkling_wine`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Sparkling wine of fresh grapes
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1,000 kg net conforming liquid in accepted final packages
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `reference-mass-identity`

##### Waste flows

###### Disgorged secondary-fermentation lees (`disgorged_secondary_lees`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Wine lees from bottle secondary fermentation
- Flow property / unit: Mass / kg
- Amount rule: Wet lees and wine loss collected during disgorgement
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `oiv-sparkling-code-2025`

###### Broken or rejected glass bottle (`rejected_glass_bottle`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Waste pressure-resistant glass bottle
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of broken or quality-rejected bottles leaving foreground control
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `luke-sparkling-carbon-footprint-2021`

##### Elementary flows

###### Carbon dioxide released during disgorgement or filling (`finishing_biogenic_co2`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or pressure-and-mass-balance-calculated fermentation carbon dioxide released during finishing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `oiv-sparkling-code-2025`

###### Ethanol emitted during disgorgement or filling (`finishing_ethanol_air`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Ethanol, to air
- Flow property / unit: Mass / kg
- Amount rule: Site-measured or engineering-estimated ethanol loss during disgorgement, dosage, transfer, and filling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-food-beverage-bemp-2017`

### Process: Cleaning, thermal utilities, and refrigeration support (`cleaning_refrigeration`)

#### Inputs

##### Product flows

###### Cleaning water (`cleaning_water`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered water delivered for equipment, line, tank, bottle, and floor cleaning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-fdm-bat-2019`; `eu-food-beverage-bemp-2017`; `luke-sparkling-carbon-footprint-2021`

###### Sodium hydroxide cleaning agent (`sodium_hydroxide_cleaner`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Active sodium-hydroxide mass from cleaning formulation and concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_agent_records`
- Sources: `eu-fdm-bat-2019`; `luke-sparkling-carbon-footprint-2021`

###### Citric acid cleaning agent (`citric_acid_cleaner`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Citric acid
- Flow property / unit: Mass / kg
- Amount rule: Active citric-acid mass used for cleaning or descaling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_agent_records`
- Sources: `eu-fdm-bat-2019`; `luke-sparkling-carbon-footprint-2021`

###### Peracetic acid disinfectant (`peracetic_acid_disinfectant`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Active peracetic-acid mass from disinfectant formulation and concentration when used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_agent_records`
- Sources: `eu-fdm-bat-2019`

###### Purchased electricity (`shared_electricity`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity attributable to base-wine handling, pumping, bottle handling, riddling, disgorging, filling, compressed air, cleaning, and refrigeration, excluding separately metered tank-route electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `andreola-charmat-energy-2025`; `luke-sparkling-carbon-footprint-2021`

###### Purchased steam (`purchased_steam`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased steam used for cleaning, sanitising, or bottle warming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `luke-sparkling-carbon-footprint-2021`

###### Natural gas fuel (`natural_gas_fuel`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural gas combusted onsite with documented heating-value basis
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-food-beverage-bemp-2017`

###### Liquefied petroleum gas fuel (`lpg_fuel`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Weighed or invoice-reconciled LPG combusted onsite
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `luke-sparkling-carbon-footprint-2021`

###### Diesel fuel (`diesel_fuel`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered diesel combusted by stationary or dedicated onsite equipment attributable to the foreground system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_records`
- Sources: `eu-food-beverage-bemp-2017`

###### Ammonia refrigerant makeup (`ammonia_refrigerant`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Ammonia, refrigerant grade
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance makeup mass for ammonia refrigeration equipment when installed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-fdm-bat-2019`

###### R-134a refrigerant makeup (`r134a_refrigerant`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant R-134a
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance makeup mass for R-134a equipment when installed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-fdm-bat-2019`

###### R-404A refrigerant makeup (`r404a_refrigerant`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Refrigerant blend R-404A
- Flow property / unit: Mass / kg
- Amount rule: Inventory-balance makeup mass for R-404A equipment when installed
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-fdm-bat-2019`

#### Outputs

##### Waste flows

###### Winery cleaning wastewater (`cleaning_wastewater`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Winery wastewater from cleaning and sanitation
- Flow property / unit: Volume / m3
- Amount rule: Metered wastewater volume from cleaning and sanitation before treatment or offsite transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-fdm-bat-2019`; `eu-food-beverage-bemp-2017`

##### Elementary flows

###### Ammonia refrigerant emitted to air (`ammonia_refrigerant_air`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Ammonia inventory loss after recovery and documented servicing transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-fdm-bat-2019`

###### R-134a refrigerant emitted to air (`r134a_refrigerant_air`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: R-134a inventory loss after recovery and documented servicing transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-fdm-bat-2019`

###### R-404A refrigerant emitted to air (`r404a_refrigerant_air`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Refrigerant blend R-404A, to air
- Flow property / unit: Mass / kg
- Amount rule: R-404A inventory loss after recovery and documented servicing transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-fdm-bat-2019`

###### Fossil carbon dioxide from onsite combustion (`combustion_fossil_co2`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Sum of fuel-specific activity multiplied by documented fossil-carbon dioxide factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-pef-2021`

###### Methane from onsite combustion (`combustion_ch4`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Methane, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Each fuel activity multiplied by its documented methane factor and summed only after atomic factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-pef-2021`

###### Nitrous oxide from onsite combustion (`combustion_n2o`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Dinitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Each fuel activity multiplied by its documented nitrous-oxide factor and summed only after atomic factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-pef-2021`

###### Nitrogen oxides from onsite combustion (`combustion_nox`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Each fuel activity multiplied by its documented nitrogen-oxides factor and summed only after atomic factor calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions`
- Sources: `eu-fdm-bat-2019`

### Process: Onsite wastewater treatment and discharge (`wastewater_treatment`)

#### Inputs

##### Waste flows

###### Untreated winery wastewater (`untreated_winery_wastewater`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Untreated winery wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered volume accepted into onsite treatment from included winery processes
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-fdm-bat-2019`; `eu-food-beverage-bemp-2017`

##### Product flows

###### Wastewater-treatment electricity (`wastewater_electricity`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity for pumping, aeration, mixing, dewatering, and controls
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `eu-fdm-bat-2019`

###### Polyacrylamide flocculant (`wastewater_flocculant`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Active flocculant mass dosed to treatment when used
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_ingredient_records`
- Sources: `eu-fdm-bat-2019`

#### Outputs

##### Product flows

###### Treated wastewater for reuse (`treated_water_reuse`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Treated process water for reuse
- Flow property / unit: Volume / m3
- Amount rule: Metered treated-water volume transferred to a documented reuse destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

###### Wastewater-treatment sludge (`wastewater_sludge`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Winery wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Wet sludge mass with measured dry-matter fraction and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_records`
- Sources: `eu-fdm-bat-2019`

##### Elementary flows

###### Chemical oxygen demand discharged to water (`wastewater_cod`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched discharge volume multiplied by measured COD concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-fdm-bat-2019`

###### Biochemical oxygen demand discharged to water (`wastewater_bod5`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Biochemical oxygen demand, five-day, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched discharge volume multiplied by measured BOD5 concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-fdm-bat-2019`

###### Total suspended solids discharged to water (`wastewater_tss`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Suspended solids, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched discharge volume multiplied by measured total suspended-solids concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-fdm-bat-2019`

###### Total nitrogen discharged to water (`wastewater_total_n`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched discharge volume multiplied by measured total-nitrogen concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-fdm-bat-2019`

###### Total phosphorus discharged to water (`wastewater_total_p`)

Record this single exchange separately for the declared process and applicable route; obtain its amount from the specified collection protocol.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Matched discharge volume multiplied by measured total-phosphorus concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-fdm-bat-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_subdivide` | Shared winery operations | First subdivide metered processes, route batches, storage periods, cleaning cycles, packaging runs, and wastewater loads so that physical records are assigned directly to the sparkling-wine product. | `eu-pef-2021` |
| `allocation_recycled_internal` | Wine, lees, dosage material, cleaning solution, and water reused inside the foreground system | Model internal reuse as an internal transfer without a second upstream burden; inventory any additional treatment, energy, losses, and discharge. | `eu-fdm-bat-2019`; `eu-pef-2021` |
| `allocation_residue_co_product` | Grape pomace, wine lees, and other exported material with economic value | Classify the output from documented destination and market evidence; if subdivision is impossible and allocation remains necessary, apply the governing study method consistently and disclose physical and economic sensitivity. | `luke-sparkling-carbon-footprint-2021`; `eu-pef-2021` |
| `allocation_packaging_reuse` | Refillable bottles, crates, pallets, or pressure containers | Record first use, reuse cycles, losses, washing, and return transport separately and apply the governing study method; do not assume a reuse count without records. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_balance` | base_wine_preparation; traditional_bottle_secondary; closed_tank_secondary; finishing_packaging | grape-derived inputs, intermediates, product, and losses | Scale, tank, fill, and stock records | lot_id; material_name; route; opening_stock; received_mass_or_volume; temperature; density; transfers; closing_stock; saleable_output; loss | Calibrated weighing or tank/fill volume converted with matched density | kg, L, degrees C, kg/L | Every lot and transfer | Complete declared campaign including maturation | All controlled winery areas and outsourced steps | Reconcile by process and route before normalising to 1,000 kg product | Calibration, tank tables, batch sheets, fill reports, stock reconciliation |
| `cp_ingredient_records` | all production processes | yeast, sugar, sulfiting material, clarifier, stabiliser, nutrient, carbon dioxide, and treatment chemical | Batch recipe and issue record | product_name; formulation; active_fraction; lot; quantity; unit; process; route; returned_quantity | Weighed issue and formulation calculation | kg or L | Every addition | Complete declared campaign | All included processes | Sum active mass by atomic ingredient and route | Supplier specification, scale calibration, signed recipe |
| `cp_packaging_records` | traditional_bottle_secondary; finishing_packaging | bottle, cap, closure, wire cage, label, carton, and film | Packaging bill, count, and reject record | component; material; supplier; unit_mass; issued_count; accepted_count; reject_count; refillability; bottle_pressure_rating | Count reconciliation multiplied by component-specific unit mass | item and kg | Every packaging run | Complete declared campaign | Onsite and contracted packaging | Component mass = net used count multiplied by unit mass; no combined packaging row | Supplier declarations, pressure certificate, count and reject reconciliation |
| `cp_energy_records` | closed_tank_secondary; finishing_packaging; cleaning_refrigeration; wastewater_treatment | electricity and purchased steam | Meter, invoice, and runtime record | meter_id; reading; time; process; route; steam_mass_or_energy; conversion_factor | Calibrated submeter preferred; defensible runtime allocation otherwise | kWh or MJ | Continuous or per batch | Complete campaign including cold storage and maturation | All included equipment | Direct assignment first; documented physical driver for residual shared use | Meter calibration, invoices, runtime logs, allocation worksheet |
| `cp_fuel_records` | cleaning_refrigeration | natural gas, LPG, diesel, and each other fuel | Meter, delivery, stock, and equipment log | fuel_identity; opening_stock; purchases; closing_stock; meter; heating_value; equipment; time | Inventory reconciliation and calibrated fuel metering | kg, m3, L, or MJ | Delivery and campaign close | Complete declared campaign | Onsite attributable combustion | Calculate each fuel separately before any energy total | Invoices, tank dip, meter calibration, heating-value certificate |
| `cp_water_records` | all winery processes | process and cleaning water | Water-meter and cleaning-cycle record | meter_id; start; end; process; cycle; reuse_source; destination | Submeter or validated cleaning-cycle estimate | m3 | Continuous or every cleaning cycle | Complete declared campaign | All included processes | Separate fresh, reused, process, and cleaning water by process | Meter calibration and cleaning logs |
| `cp_cleaning_agent_records` | cleaning_refrigeration | each cleaning or disinfecting chemical | Cleaning recipe and issue record | chemical_identity; formulation; active_fraction; quantity; cycle; recovered_quantity; discharge_route | Weighed or metered addition and active-mass calculation | kg or L | Every cleaning cycle | Complete declared campaign | All included systems | Sum active mass by single chemical; subtract documented recovered material only | Supplier safety/specification sheets and cleaning log |
| `cp_refrigerant_records` | cleaning_refrigeration | each installed refrigerant and loss | Equipment register, purchase, recovery, and service record | equipment_id; refrigerant_identity; opening_charge; additions; recovered_mass; closing_charge; service_event; allocation_driver | Annual or campaign inventory balance by refrigerant | kg | Every service event and campaign close | Period covering the declared production campaign | All refrigeration equipment serving included processes | Loss = opening + additions - recovered - closing; allocate with documented cooling-service driver | Certified technician record, purchase and recovery receipt, equipment register |
| `cp_residue_records` | all production processes | stems, pomace, lees, glass rejects, sludge, and each other waste | Container weight and destination record | residue_identity; wet_mass; dry_matter; source_process; destination; market_status; treatment | Calibrated scale or weighed-container reconciliation | kg | Every removal | Complete declared campaign | All included processes and onsite treatment | Sum each residue separately by destination | Scale calibration, waste manifest, sales or transfer record |
| `cp_wastewater_records` | cleaning_refrigeration; wastewater_treatment | wastewater, treated water, and pollutant loads | Flow meter and laboratory record | source_process; flow; destination; sample_time; COD; BOD5; TSS; total_N; total_P; detection_limit | Flow-proportional sampling where practicable and accredited analysis | m3 and mg/L | Continuous flow; representative sampling | Complete declared campaign including cleaning peaks | Every controlled discharge and transfer point | Match concentration to discharge volume; calculate each pollutant separately | Meter calibration, chain of custody, laboratory QA/QC |
| `cp_direct_emissions` | all production processes | fermentation gas, ethanol, refrigerant loss, and fuel emissions | Measurement, mass balance, or factor calculation | substance; source; activity; retained_quantity; factor; factor_source; time; route | Direct measurement preferred; otherwise documented substance-specific calculation | kg | Per batch or campaign | Complete declared campaign | All included direct-emission sources | Calculate each substance and source separately before summation | Instrument QA, mass balance, factor identity, calculation review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_liquid_mass` | Wine, must, water, and liquid additives recorded by volume | mass_kg = volume_L multiplied by density_kg_per_L at the matched temperature | Calibrated volume; measured temperature; batch-specific density | Atomic liquid mass | `reference-mass-identity` |
| `calc_reference_output` | Final filled packages | net_liquid_mass = sum accepted_fill_volume multiplied by matched finished-wine density; packaging mass is excluded | Accepted bottle count; actual fill volume; density; temperature; rejects | Exactly 1,000 kg reference liquid after normalisation | `reference-mass-identity` |
| `calc_packaging_mass` | Each packaging component | component_mass = net_used_count multiplied by component_unit_mass; film is weighed directly | Issued, returned, rejected, and accepted counts; unit mass | Separate bottle, closure, cage, label, carton, and film masses | `eu-pef-2021` |
| `calc_active_ingredient` | Sulfur dioxide, cleaning chemicals, and formulated aids | active_mass = formulation_mass multiplied by active_fraction | Formulation quantity and supplier concentration | Atomic active-material mass | `oiv-sparkling-code-2025` |
| `calc_fermentation_co2` | Primary and secondary fermentation | released_biogenic_CO2 = sugar-balance production minus dissolved product CO2 minus recovered CO2 minus measured contained losses | Sugar consumed; product CO2; recovery; batch losses | Separate biogenic carbon-dioxide emission by process | `oiv-sparkling-code-2025` |
| `calc_refrigerant_loss` | Each refrigerant | loss = opening_charge + additions - recovered_mass - closing_charge | Equipment inventory and service records | Separate emission mass for ammonia, R-134a, R-404A, or another explicitly added atomic refrigerant row | `eu-fdm-bat-2019` |
| `calc_combustion_emissions` | Each direct combustion emission | emission_mass = fuel_activity multiplied by documented fuel- and substance-specific factor | Each fuel amount; heating value; factor identity | Separate fossil CO2, CH4, N2O, and NOx emissions | `eu-pef-2021` |
| `calc_wastewater_load` | Each direct water-emission indicator | load_kg = discharge_volume_m3 multiplied by concentration_mg_per_L divided by 1,000 | Matched discharge volume and concentration | Separate COD, BOD5, TSS, total-N, and total-P loads | `eu-fdm-bat-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Retain actual alcohol, residual sugar, pressure at 20 degrees C, carbon-dioxide origin, route, grape basis, bottle type, closure, dosage, and maturation records for every represented product group. | Final-product certificate, laboratory report, pressure test, batch and packaging specification |
| `dq_route_completeness` | Process map | Demonstrate one coherent route from entry material to finished package and include every performed conditional process without counting purchased base-wine production twice. | Route diagram, batch traveller, supplier dataset links, mass balance |
| `dq_atomic_inventory` | All exchanges | Retain one identity, quantity, unit, source process, and destination per flow; add a separate atomic row if a site uses another fuel, refrigerant, additive, package component, waste, or emission. | General ledger, batch sheets, meter map, chemical and equipment registers |
| `dq_temporal` | Foreground records | Cover one complete representative campaign including primary production when onsite, secondary fermentation, the full declared maturation or cold-storage period, packaging, cleaning, and wastewater treatment. | Dated meter exports, batch calendar, stock opening and closing records |
| `dq_measurement` | Mass, volume, energy, pressure, sugar, alcohol, water, and pollutants | Use calibrated instruments or documented engineering estimates and retain temperature, density, conversion, detection limit, and uncertainty records. | Calibration certificates, laboratory QA/QC, conversion worksheet |
| `dq_completeness` | Material balance and emissions | Reconcile grape-derived materials, product, wine loss, lees, pomace, packaging rejects, wastewater, sludge, fermentation carbon dioxide, refrigerants, and direct fuel emissions; explain all gaps. | Signed campaign balance and completeness review |
| `dq_range_evidence` | Important inventory amounts | Treat site records as dataset values; do not author or enforce an empirical PCR range until at least two independent boundary-compatible original sources support synthesis. | Range evidence review linked to original full text |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require the singular product name, Mass UUID, mass unit-group UUID, kg unit, 1,000 kg net liquid amount, and all required alcohol, sugar, pressure, route, bottle, closure, density, and conversion qualifiers; the reference-product flow UUID may remain unresolved only while manifest review metadata records the gap. | `unsd-cpc-3-2025`; `eu-regulation-1308-2013`; `oiv-sparkling-definition-2025` |
| `validate_product_eligibility` | Finished sparkling wine | Confirm fermentation origin of product carbon dioxide, applicable excess pressure at 20 degrees C, actual and total alcohol requirements, and residual-sugar declaration; reject aerated or semi-sparkling product substitution. | `eu-regulation-1308-2013`; `oiv-sparkling-definition-2025` |
| `validate_route` | Process map | Require exactly one declared entry-material route and one declared sparkling route; for traditional bottle production require bottle fermentation and route finishing, and for closed-tank production require tank fermentation, clarification or stabilisation as performed, and isobaric bottling. | `oiv-sparkling-code-2025`; `andreola-charmat-energy-2025` |
| `validate_atomic_inventory` | Inventory rows | Reject combined ingredient, chemical, utility, fuel, refrigerant, package, waste, wastewater, sludge, or emission labels; require every actual exchange to resolve to one physically or chemically specific flow. | `eu-fdm-bat-2019`; `eu-food-beverage-bemp-2017` |
| `validate_mass_and_conversion` | Material balance | Reconcile opening stocks plus grape-derived inputs, ingredients, and packaging with saleable liquid, closing stocks, residues, wine losses, emissions, and rejects; verify every volume-to-mass and count-to-mass conversion. | `eu-pef-2021`; `luke-sparkling-carbon-footprint-2021` |
| `validate_packaging` | Final package | Require bottle type and pressure rating, empty mass, nominal and actual fill, closure type, and separate bottle, cap, stopper, wire cage, label, carton, and film records when used; prohibit double counting the traditional fermentation bottle at final packaging. | `oiv-sparkling-code-2025`; `luke-sparkling-carbon-footprint-2021` |
| `validate_wastewater_and_refrigerants` | Cleaning, refrigeration, and wastewater treatment | Require each refrigerant makeup and loss separately, source-process wastewater volumes, sludge destination, and separate COD, BOD5, TSS, total-N, and total-P discharge loads where monitored or required. | `eu-fdm-bat-2019`; `eu-food-beverage-bemp-2017` |
| `validate_ranges` | Inventory amounts | Reject an authored empirical range based on one plant, one case, an abstract, or incompatible boundaries; until two independent compatible original sources are reviewed, require foreground values without a PCR range and retain the manifest unresolved-range record. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for market-ready sparkling wine of fresh grapes in a declared pressure-resistant package at winery dispatch |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review and publication |
| allowed_use | Product and process LCA, environmental-footprint studies, supply-chain inventory, hotspot analysis, and scenario modelling consistent with the declared entry material, fermentation route, product specification, bottle system, campaign, geography, and boundary |
| excluded_use | Aerated or semi-sparkling wine, still or aromatised wine, fruit wine, distilled products, undisclosed route substitution, or cradle-to-grave claims based only on this winery-gate dataset |
| required_metadata | PCR id and version; entry material; grape variety or blend; vintage or campaign; actual alcohol; residual sugar and class; excess pressure at 20 degrees C; carbon-dioxide origin; traditional-bottle or closed-tank route; maturation duration; dosage; bottle material, colour, pressure rating, empty mass, volume and refillability; closure; net fill; density and temperature; geography; data period; refrigerants; wastewater route; residue destinations; allocation; upstream dataset identities |
| required_quality_disclosure | Primary-versus-secondary data share; meter and laboratory coverage; measurement and conversion methods; calibration; temporal, geographical and technological representativeness; completeness; uncertainty; allocation sensitivity; missing UUIDs; missing range evidence; exclusions and outsourced steps |
| update_trigger | Change in entry material, grape or wine source, product specification, fermentation or stabilisation route, maturation time, energy system, fuel, refrigerant, cleaning chemistry, bottle or closure system, wastewater treatment, residue destination, allocation method, applicable regulation, or a material data-quality finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 24211, Sparkling wine of fresh grapes: https://unstats.un.org/unsd/classifications/Econ/CPC | Official product-category identity; accessed 2026-08-23 |
| `oiv-sparkling-definition-2025` | official_guidance | International Organisation of Vine and Wine, International Code of Oenological Practices, Part I, I.4.4 Sparkling wines: https://www.oiv.int/standards/international-code-of-oenological-practices/part-i-definitions/special-wines/sparkling-wines | Fermentation-derived carbon dioxide, pressure specification, route and sugar-class identity; accessed 2026-08-23 |
| `oiv-sparkling-code-2025` | official_guidance | International Organisation of Vine and Wine, International Code of Oenological Practices, Part II, Special wines: sparkling wines: https://www.oiv.int/standards/international-code-of-oenological-practices/part-ii-oenological-treatments-and-practices/special-wines%3A-sparkling-wines | Base wine, cuvee, tirage, yeast, nutrients, clarifiers, second fermentation, bottle route, disgorgement, tank route, clarification, cooling, dosage and isobaric bottling; accessed 2026-08-23 |
| `eu-regulation-1308-2013` | standard | Regulation (EU) No 1308/2013, Annex VII Part II, consolidated text: https://eur-lex.europa.eu/eli/reg/2013/1308 | Legal sparkling-wine definition, fermentation origin, pressure, and alcoholic-strength requirements; accessed 2026-08-23 |
| `eu-fdm-bat-2019` | standard | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries: https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj | Energy, water, cleaning chemicals, low-GWP refrigerants, residue separation, wastewater control, treatment, monitoring, and direct-emission rules; accessed 2026-08-23 |
| `eu-food-beverage-bemp-2017` | official_guidance | European Commission Joint Research Centre, Best Environmental Management Practice for the Food and Beverage Manufacturing Sector, 2017: https://susproc.jrc.ec.europa.eu/activities/emas/documents/FoodBeverageBEMP.pdf | Winery water, cleaning, wastewater composition, cooling, energy, waste and emissions process decomposition; accessed 2026-08-23 |
| `luke-sparkling-carbon-footprint-2021` | official_guidance | Usva, K. et al., Product Environmental Carbon Footprint Report: Organic Sparkling Wine, Natural Resources and Bioeconomy Studies 89/2021, Natural Resources Institute Finland: https://jukuri.luke.fi/handle/10024/552333 | Original institutional case evidence for base wine, ingredients, secondary fermentation, energy, water, cleaning, lees, bottling, glass bottle, LPG, and packaging inventory needs; not used to author PCR ranges |
| `andreola-charmat-energy-2025` | literature | Andreola, F. et al., Energy optimization of the Martinotti-Charmat refermentation process in sparkling wines production, Cleaner Engineering and Technology 27 (2025) 101018, DOI: https://doi.org/10.1016/j.clet.2025.101018 | Open peer-reviewed original process evidence for closed-tank refermentation, cold stabilisation, storage, refrigeration, filtration and bottling; not used to author PCR ranges |
| `eu-pef-2021` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279 | Reference-flow consistency, foreground data quality, allocation hierarchy, packaging, and calculation disclosure; accessed 2026-08-23 |
| `reference-mass-identity` | method_factor | PCR reference-mass identity: normalised saleable sparkling-wine liquid output equals 1,000 kg and packaging is inventoried separately | Reference-flow normalisation and fixed output amount |
