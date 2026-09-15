---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.vinegar-and-substitutes-therefor-obtained-from-acetic-acid
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Vinegar and substitutes therefor obtained from acetic acid

## 1. Scope and Applicability

This PCR covers the CPC 3.0 category of vinegar and edible vinegar substitutes obtained by diluting or formulating food-grade acetic acid. It supports foreground data packages for finished products at the plant gate, including fermentation vinegars made from agricultural substrates or agricultural alcohol and liquid food products formulated from acetic acid for vinegar-like use.

The foreground data package shall declare the specific product form and route. Fermentation vinegar and an acetic-acid-based substitute are distinct products and shall not be represented by one another. The category-labelled Tiangong flow in Section 3 is a representative identity for finished liquid vinegar only. If a more specific real Tiangong flow matches the actual substrate, route, physical form, market specification, or packaging state, that flow shall replace the representative flow. The representative UUID shall never be silently reused for an acetic-acid substitute, buffered vinegar powder, concentrated semi-finished acid, or another materially different form.

The PCR excludes industrial acetic acid sold as a chemical, acetate salts and buffered vinegar powders, sauces and pickled foods in which vinegar is only an ingredient, non-food cleaning products, and upstream production processes that are represented by separate supplier datasets. Packaging is included only when the declared plant-gate product is supplied packaged.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.vinegar-and-substitutes-therefor-obtained-from-acetic-acid |
| classification_refs | CPC 3.0: 23994, Vinegar and substitutes therefor obtained from acetic acid |
| covered_products | Finished liquid fermentation vinegars from agricultural substrates or agricultural alcohol; edible liquid substitutes formulated from food-grade acetic acid for vinegar-like use |
| excluded_products | Industrial acetic acid; acetate salts and buffered vinegar powders; sauces, condiments, pickled foods, and other foods containing vinegar; non-food cleaners; unfinished intermediates sold for further processing unless explicitly declared as the product |
| representative_product | Category-labelled finished liquid vinegar, manufactured and available at the plant gate; the verified Tiangong UUID is representative and not a universal identity for every covered form |
| production_route | Fermentation route with alcoholic fermentation when performed on site and aerobic acetification; or acetic-acid formulation route; followed by route-appropriate finishing and conditional packaging |
| market_state | Finished liquid product at plant; bulk or packaged state shall be declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | A declared finished vinegar or edible acetic-acid-based vinegar substitute that provides the specified acidifying, seasoning, or preservation function |
| How much | 1 kg net product |
| How well | Conforming to the declared product identity, route, acid-strength specification, physical form, market or jurisdictional specification, and packaging state |
| How long or cycle | One production batch or reporting-period output delivered at the declared plant gate; use and storage duration are outside this reference function |
| reference_flow_link | The functional unit is realized by exactly 1 kg of the declared finished product. The category-labelled representative flow is used only for finished liquid vinegar when no more specific real flow is available. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Vinegar and substitutes therefor obtained from acetic acid `20393649-bcc3-43f0-a2df-1a99c0005e29` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | specific product name and form; fermentation vinegar or acetic-acid-substitute route; agricultural substrate or acetic-acid origin; acid strength and test basis; physical state; bulk or packaged state; geography and market specification; production technology; aging and thermal treatment when applicable; selected product-flow UUID and reason for any replacement |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize to measured net product mass at the declared plant gate. Packaging mass is excluded from product mass and recorded separately. Convert volume to mass only with a batch- or product-specific measured density and retain the density, temperature, and method. |
| `representative_flow_use` | reference product identity | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use `20393649-bcc3-43f0-a2df-1a99c0005e29` only for the exact category-labelled representative finished liquid vinegar. Declare the actual form and replace this UUID whenever a more specific real flow exists; do not use it silently for substitutes or other forms. |
| `acid_strength_reporting` | finished product quality | product-specific concentration property | declared laboratory unit | Report acid strength separately from product mass with the test method, sampling point, temperature where relevant, and market specification. Do not infer product mass from nominal acid strength. |
| `packaging_mass` | packaged output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each packaging material separately per 1 kg net product; do not include container or closure mass in the reference product amount. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased agricultural or alcoholic feedstock, food-grade acetic acid, process water, ingredients, cultures, energy carriers, cleaning materials, and packaging enter with upstream datasets; foreground modelling starts at the first on-site transformation or formulation step. |
| starting_condition_role | Cradle-to-gate foreground manufacturing with supplier burdens represented by linked upstream datasets |
| product_classification_scope | The full CPC 3.0 23994 semantic category is covered, while each foreground package selects one declared product form and route. |
| recursive_input_rule | Purchased vinegar, substitute, mother vinegar, or rework from the same category is recorded once as a product input with its own upstream dataset. Do not recursively reopen that supplier dataset inside the receiving process. Internal recirculation within the same reported system is not counted as a new external input. |
| upstream_dataset_requirement | Link representative upstream datasets for all material and energy inputs crossing the plant boundary, including the declared feedstock or food-grade acetic acid. Supplier-specific data are preferred where materially relevant. |
| disclosure | Declare route, feedstock origin, whether alcoholic fermentation is on site, acetification technology, formulation recipe basis, aging, finishing and thermal treatment, plant-gate packaging state, included utilities, data period, geography, and any excluded activity. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_selection` | all foreground packages | Select and disclose either the fermentation-vinegar route or the acetic-acid-substitute route. Include only route-applicable processes and never use fermentation-vinegar identity claims for a formulated substitute. | `unsd-cpc-v3-2025`; `eu-commission-2016-263`; `us-fda-cpg-562-100` |
| `boundary_foreground_operations` | manufacturing plant | Include on-site feedstock preparation and alcoholic fermentation when performed, acetification or acetic-acid formulation, finishing, directly attributable utilities, cleaning, waste and wastewater handling to the point they leave the foreground boundary, and conditional packaging. | `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`; `jrc-fdm-bref-2019` |
| `boundary_upstream_inputs` | purchased inputs | Represent purchased feedstocks, food-grade acetic acid, ingredients, cultures, water, energy carriers, cleaning materials, and packaging with upstream datasets; do not treat their supplier production as zero burden. | `jrc-fdm-bref-2019` |
| `boundary_downstream_exclusions` | plant-gate result | Exclude distribution, retail, consumer storage and use, and end-of-life after the plant gate unless the study explicitly expands the boundary and reports that expansion separately. | `eu-pef-2021-2279` |
| `boundary_representative_identity` | reference flow | The verified category-labelled vinegar flow is only a representative product form. A package for a substitute or another materially different form must select a matching real flow when available and disclose any remaining proxy. | `unsd-cpc-v3-2025`; `eu-commission-2016-263`; `us-fda-cpg-562-100` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feedstock_preparation` | Agricultural feedstock preparation | `conditional` | Fermentation vinegar is made from an agricultural substrate prepared on site | Prepare a measurable agricultural-origin substrate | kg prepared substrate |
| `alcoholic_fermentation` | Alcoholic fermentation | `conditional` | Fermentable substrate is converted to an alcoholic liquid on site | Produce the alcoholic substrate for acetification | kg alcoholic liquid |
| `acetification` | Aerobic acetification | `conditional` | Fermentation-vinegar route is selected | Oxidize ethanol biologically under surface, generator, or submerged conditions | kg raw fermentation vinegar |
| `acetic_acid_formulation` | Food-grade acetic acid formulation | `conditional` | Acetic-acid-substitute route is selected | Dilute and formulate food-grade acetic acid into the declared edible substitute | kg raw formulated substitute |
| `finishing` | Blending, clarification, stabilization, and release | `required` | All routes | Blend, clarify, filter, stabilize, and release the product as applicable to the route | kg finished bulk product |
| `packaging` | Primary and secondary packaging | `conditional` | The declared plant-gate product is packaged | Fill, close, label, and prepare the finished product for dispatch | kg net packaged product |

### Process: Agricultural feedstock preparation (`feedstock_preparation`)

#### Inputs

##### Product flows

###### Grape must feedstock (`feedstock_grape_must`)

Record Grape must as one independently quantified exchange.

- Selected flow: Grape must
- UUID status: unresolved - Rejected a combined wine/grape-must category candidate that did not establish grape-must identity and reference property.
- Applicability: Include only for a grape-must route; omit when wine, cider, ethanol, sugar, rice, or wheat is the recorded feedstock.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### Wine feedstock (`feedstock_wine`)

Record Wine as one independently quantified exchange.

- Selected flow: Wine `bb271645-d31c-4d60-9c88-d8b416a0d947`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when purchased wine is prepared on site for acetification; omit for the remaining feedstock routes.
- Flow property / unit: Volume / m3
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### Cider feedstock (`feedstock_cider`)

Record Cider as one independently quantified exchange.

- Selected flow: Cider `2a9af3da-d57b-4669-bd9c-c228be771967`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when purchased cider is prepared on site for acetification; omit for the remaining feedstock routes.
- Flow property / unit: Volume / m3
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### Agricultural-origin ethanol feedstock (`feedstock_agricultural_ethanol`)

Record Food-grade ethanol of agricultural origin as one independently quantified exchange.

- Selected flow: Food-grade ethanol of agricultural origin
- UUID status: unresolved - Rejected generic ethanol and fuel-ethanol candidates that did not establish food grade and agricultural origin together.
- Applicability: Include only for an agricultural-alcohol route; omit when an agricultural substrate is fermented on site.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### Sucrose feedstock (`feedstock_sucrose`)

Record Soft white sugar as one independently quantified exchange.

- Selected flow: Soft white sugar `d3dfedfb-7d93-4553-aba3-02940edaf6aa`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when sucrose is the declared fermentable feedstock; omit for non-sugar routes.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### Rice feedstock (`feedstock_rice`)

Record Rice as one independently quantified exchange.

- Selected flow: Rice `bc375e24-c87f-4fa2-b557-123f3aa312ef`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when rice is the declared starch-bearing feedstock; omit for non-rice routes.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### Wheat feedstock (`feedstock_wheat`)

Record Food-grade wheat grain as one independently quantified exchange.

- Selected flow: Food-grade wheat grain
- UUID status: unresolved - Rejected the available wheat candidate because flow get identified it as feed-grade rather than food-grade grain.
- Applicability: Include only when wheat is the declared starch-bearing feedstock; omit for non-wheat routes.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### Preparation tap water (`preparation_tap_water`)

Record Tap water as one independently quantified exchange.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when tap water is consumed during feedstock preparation.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### Alpha-amylase enzyme (`preparation_alpha_amylase`)

Record Amylase, medium-temperature as one independently quantified exchange.

- Selected flow: Amylase, medium-temperature `ec31f8f1-1870-4f41-846a-3632072a5d9f`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this enzyme is dosed for starch liquefaction; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### Glucoamylase enzyme (`preparation_glucoamylase`)

Record Glucoamylase, 1500 U/g as one independently quantified exchange.

- Selected flow: Glucoamylase, 1500 U/g `019f5b53-6ae4-41aa-8e75-0f5fefaf4469`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this enzyme is dosed for saccharification; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### Pectinase enzyme (`preparation_pectinase`)

Record Food-grade pectinase as one independently quantified exchange.

- Selected flow: Food-grade pectinase
- UUID status: unresolved - No pectinase candidate was found; the returned crane-system hit was rejected as semantically unrelated.
- Applicability: Include only when pectinase is dosed for fruit-substrate preparation; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

###### Diammonium-phosphate nutrient (`preparation_diammonium_phosphate`)

Record Diammonium phosphate, purity above 99.5% as one independently quantified exchange.

- Selected flow: Diammonium phosphate, purity above 99.5% `743bd461-1a63-4ed6-934c-86b29fe21080`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when diammonium phosphate is dosed during preparation; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared fermentable substrate output (`prepared_fermentable_substrate`)

Record Prepared fermentable agricultural substrate as one independently quantified exchange.

- Selected flow: Prepared fermentable agricultural substrate
- UUID status: unresolved - No exact internal-intermediate flow identity was found; generic fermentable-feedstock candidates did not establish the declared substrate.
- Applicability: Required output when feedstock preparation is included; transfer only to the declared downstream fermentation or acetification process.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar`

##### Waste flows

###### Rejected agricultural feedstock (`preparation_rejected_feedstock`)

Record Rejected agricultural feedstock separately by measured quantity and destination.

- Selected flow: Rejected agricultural feedstock
- UUID status: unresolved - Rejected generic food-debris candidates that did not preserve the agricultural feedstock identity.
- Applicability: Include only when rejected incoming feedstock leaves the foreground boundary as waste.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Fruit pomace (`preparation_fruit_pomace`)

Record Fruit pomace separately by measured quantity and destination.

- Selected flow: Fruit pomace
- UUID status: unresolved - Rejected olive-pomace candidates because the PCR requires the declared fruit substrate rather than an olive-specific waste.
- Applicability: Include only for fruit preparation that separates pomace; omit for alcohol, sugar, or grain routes.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Spent grain (`preparation_spent_grain`)

Record Spent grain separately by measured quantity and destination.

- Selected flow: Spent grain
- UUID status: unresolved - No exact spent-grain waste flow was found; grinding-dust candidates were rejected.
- Applicability: Include only for a grain route that separates spent solids; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Preparation wastewater (`preparation_wastewater`)

Record Food-feedstock preparation wastewater separately by measured quantity and destination.

- Selected flow: Food-feedstock preparation wastewater
- UUID status: unresolved - Rejected municipal and manganese-processing wastewater candidates whose origin did not match food-feedstock preparation.
- Applicability: Include only when preparation wastewater leaves for treatment or discharge; retain the destination.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg prepared substrate output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

##### Elementary flows

### Process: Alcoholic fermentation (`alcoholic_fermentation`)

#### Inputs

##### Product flows

###### Prepared substrate input (`fermentation_prepared_substrate`)

Record Prepared fermentable agricultural substrate as one independently quantified exchange.

- Selected flow: Prepared fermentable agricultural substrate
- UUID status: unresolved - No exact internal-intermediate flow identity was found.
- Applicability: Required only when alcoholic fermentation is performed on site; omit for purchased-alcohol or purchased-wine routes.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### Fermentation yeast (`fermentation_yeast`)

Record Saccharomyces cerevisiae fermentation yeast as one independently quantified exchange.

- Selected flow: Saccharomyces cerevisiae fermentation yeast
- UUID status: unresolved - Rejected yeast-extract and dried-feed-yeast candidates that did not represent active fermentation yeast.
- Applicability: Include only when purchased yeast crosses the process boundary; internal culture recirculation is not a new external input.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### Diammonium-phosphate nutrient (`fermentation_diammonium_phosphate`)

Record Diammonium phosphate, purity above 99.5% as one independently quantified exchange.

- Selected flow: Diammonium phosphate, purity above 99.5% `743bd461-1a63-4ed6-934c-86b29fe21080`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this nutrient is dosed during alcoholic fermentation; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### Low-voltage grid electricity (`alcoholic_fermentation_electricity_low_voltage_grid`)

Record Alternating current, below 1 kV, grid consumption mix as one independently quantified exchange.

- Selected flow: Alternating current, below 1 kV, grid consumption mix
- UUID status: unresolved - Rejected the below-1-kV candidate because flow get reported Net calorific value rather than an electricity-energy reference property.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Medium-voltage grid electricity (`alcoholic_fermentation_electricity_medium_voltage_grid`)

Record Alternating current, 1-35 kV, grid consumption mix as one independently quantified exchange.

- Selected flow: Alternating current, 1-35 kV, grid consumption mix
- UUID status: unresolved - Rejected the 1-35-kV candidate because flow get reported Net calorific value rather than an electricity-energy reference property.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### High-voltage grid electricity (`alcoholic_fermentation_electricity_high_voltage_grid`)

Record Alternating current, above 35 kV, grid consumption mix as one independently quantified exchange.

- Selected flow: Alternating current, above 35 kV, grid consumption mix
- UUID status: unresolved - No exact above-35-kV consumption-mix candidate with a valid electricity-energy reference property was found.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### On-site photovoltaic electricity (`alcoholic_fermentation_electricity_onsite_photovoltaic`)

Record Alternating current, on-site photovoltaic supply as one independently quantified exchange.

- Selected flow: Alternating current, on-site photovoltaic supply
- UUID status: unresolved - Rejected photovoltaic candidates whose voltage or Net-calorific-value reference property did not match the exchange.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Purchased steam at 11.0 MPaG (`alcoholic_fermentation_steam_11mpag`)

Record Steam, 11.0 MPaG as one independently quantified exchange.

- Selected flow: Steam, 11.0 MPaG `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this purchased thermal carrier crosses the process boundary; omit when on-site fuel rows fully represent the same heat.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Purchased hot water at 80 °C (`alcoholic_fermentation_hot_water_80c`)

Record Hot water, 80 °C as one independently quantified exchange.

- Selected flow: Hot water, 80 °C
- UUID status: unresolved - No exact 80 °C hot-water product flow with a valid thermal-energy reference property was found.
- Applicability: Include only when this purchased thermal carrier crosses the process boundary; omit when on-site fuel rows fully represent the same heat.
- Flow property / unit: Energy / MJ
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Natural gas fuel (`alcoholic_fermentation_natural_gas`)

Record Natural gas in the gaseous state as one independently quantified exchange.

- Selected flow: Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Volume / m3
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Liquefied petroleum gas fuel (`alcoholic_fermentation_liquefied_petroleum_gas`)

Record Liquefied petroleum gas as one independently quantified exchange.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Diesel oil fuel (`alcoholic_fermentation_diesel_oil`)

Record Diesel oil as one independently quantified exchange.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Heavy oil fuel (`alcoholic_fermentation_heavy_oil`)

Record Heavy oil as one independently quantified exchange.

- Selected flow: Heavy oil `7fd5ee11-bcf8-47eb-83b4-778ed51eac29`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Biogas fuel (`alcoholic_fermentation_biogas`)

Record Biogas, 50-80% methane as one independently quantified exchange.

- Selected flow: Biogas, 50-80% methane `246d7fec-59ef-4032-8539-e47632b60a23`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Volume / m3
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Compressed air (`alcoholic_fermentation_compressed_air`)

Record Compressed air as one independently quantified exchange.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when Compressed air crosses the alcoholic fermentation boundary; omit otherwise.
- Flow property / unit: Volume / m3
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### R-134a refrigerant make-up (`alcoholic_fermentation_refrigerant_r134a`)

Record Refrigerant, R134a as one independently quantified exchange.

- Selected flow: Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when make-up of this refrigerant is attributable to in-scope cooling equipment; record leakage as a separate elementary output.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### R-717 ammonia refrigerant make-up (`alcoholic_fermentation_refrigerant_r717`)

Record Refrigerant, R717 ammonia as one independently quantified exchange.

- Selected flow: Refrigerant, R717 ammonia
- UUID status: unresolved - Rejected anhydrous-ammonia candidates that did not establish refrigeration grade or make-up use.
- Applicability: Include only when make-up of this refrigerant is attributable to in-scope cooling equipment; record leakage as a separate elementary output.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### R-744 carbon-dioxide refrigerant make-up (`alcoholic_fermentation_refrigerant_r744`)

Record Refrigerant, R744 carbon dioxide as one independently quantified exchange.

- Selected flow: Refrigerant, R744 carbon dioxide
- UUID status: unresolved - Rejected carbon-dioxide candidates described as waste gas, chemical reagent, or welding gas rather than R-744 refrigerant.
- Applicability: Include only when make-up of this refrigerant is attributable to in-scope cooling equipment; record leakage as a separate elementary output.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Tap water (`alcoholic_fermentation_tap_water`)

Record Tap water as one independently quantified exchange.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Groundwater for process use (`alcoholic_fermentation_groundwater`)

Record Groundwater for process use as one independently quantified exchange.

- Selected flow: Groundwater for process use
- UUID status: unresolved - Rejected groundwater-withdrawal and irrigation candidates that did not represent supplied food-process water.
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Cooling water (`alcoholic_fermentation_cooling_water`)

Record Cooling water as one independently quantified exchange.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Deionised water (`alcoholic_fermentation_deionized_water`)

Record Deionised water as one independently quantified exchange.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Reused process water (`alcoholic_fermentation_reused_process_water`)

Record Process Water as one independently quantified exchange.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Alcoholic liquid output (`alcoholic_liquid`)

Record Alcoholic liquid for acetification as one independently quantified exchange.

- Selected flow: Alcoholic liquid for acetification
- UUID status: unresolved - Generic ethanol candidates did not represent the batch-specific alcoholic intermediate.
- Applicability: Required output when alcoholic fermentation is included; preserve substrate identity, alcohol content, and batch linkage.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

##### Waste flows

###### Wine lees (`fermentation_wine_lees`)

Record Wine lees separately by measured quantity and destination.

- Selected flow: Wine lees
- UUID status: unresolved - Rejected generic dregs candidates with unrelated hazardous-content and treatment semantics.
- Applicability: Include only when lees are separated and leave the process; omit when retained in the intermediate.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Spent yeast biomass (`fermentation_spent_yeast`)

Record Spent yeast biomass separately by measured quantity and destination.

- Selected flow: Spent yeast biomass
- UUID status: unresolved - No exact spent-yeast waste flow was found; wood-waste hits were rejected.
- Applicability: Include only when spent yeast leaves the process as waste; omit verified internal reuse.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Rejected alcoholic liquid (`fermentation_rejected_alcoholic_liquid`)

Record Rejected alcoholic fermentation liquid separately by measured quantity and destination.

- Selected flow: Rejected alcoholic fermentation liquid
- UUID status: unresolved - Rejected generic waste-liquid candidates that did not establish alcoholic-fermentation origin.
- Applicability: Include only for rejected batches exported as waste; omit internal rework.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Fermentation wastewater (`fermentation_wastewater`)

Record Alcoholic-fermentation wastewater separately by measured quantity and destination.

- Selected flow: Alcoholic-fermentation wastewater
- UUID status: unresolved - Rejected wastewater candidates tied to non-food industrial routes.
- Applicability: Include only when this wastewater leaves for treatment or discharge; retain destination and treatment state.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

##### Elementary flows

###### Biogenic carbon dioxide to air (`fermentation_biogenic_carbon_dioxide_air`)

Record Carbon dioxide, biogenic, to air unspecified only as the named elementary exchange and declared compartment.

- Selected flow: Carbon dioxide, biogenic, to air unspecified `08a91e70-3ddc-11dd-9c15-0050c2490048`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only when feedstock evidence establishes biogenic carbon and the release crosses the environmental boundary.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `spain-rd-661-2012-consolidated-2026`

###### Ethanol to air (`fermentation_ethanol_air`)

Record Ethanol, to air unspecified only as the named elementary exchange and declared compartment.

- Selected flow: Ethanol, to air unspecified `08a91e70-3ddc-11dd-9349-0050c2490048`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only for measured or calculated ethanol release to the unspecified-air compartment.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg alcoholic liquid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `mas-et-al-2014-wine-vinegar`

### Process: Aerobic acetification (`acetification`)

#### Inputs

##### Product flows

###### Alcoholic liquid input (`acetification_alcoholic_liquid`)

Record Alcoholic liquid for acetification as one independently quantified exchange.

- Selected flow: Alcoholic liquid for acetification
- UUID status: unresolved - No exact internal alcoholic-intermediate flow identity was found.
- Applicability: Required for the fermentation-vinegar route; omit for the acetic-acid-substitute route.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `mas-et-al-2014-wine-vinegar`; `jrc-fdm-bref-2019`

###### Purchased mother vinegar (`acetification_mother_vinegar`)

Record Mother vinegar culture as one independently quantified exchange.

- Selected flow: Mother vinegar culture
- UUID status: unresolved - Rejected acetic-acid-solution candidates from hydrometallurgical routes that did not represent mother vinegar.
- Applicability: Include only when purchased mother vinegar crosses the boundary; omit internal recirculation.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `mas-et-al-2014-wine-vinegar`; `jrc-fdm-bref-2019`

###### Acetic-acid-bacteria culture (`acetification_bacteria_culture`)

Record Acetic acid bacteria culture as one independently quantified exchange.

- Selected flow: Acetic acid bacteria culture
- UUID status: unresolved - No acetic-acid-bacteria culture flow was found; acetate-chemical hits were rejected.
- Applicability: Include only when purchased culture crosses the process boundary; omit internal culture recirculation.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `mas-et-al-2014-wine-vinegar`; `jrc-fdm-bref-2019`

###### Diammonium-phosphate nutrient (`acetification_diammonium_phosphate`)

Record Diammonium phosphate, purity above 99.5% as one independently quantified exchange.

- Selected flow: Diammonium phosphate, purity above 99.5% `743bd461-1a63-4ed6-934c-86b29fe21080`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this nutrient is dosed during acetification; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `mas-et-al-2014-wine-vinegar`; `jrc-fdm-bref-2019`

###### Purchased industrial oxygen (`acetification_industrial_oxygen`)

Record Industrial oxygen as one independently quantified exchange.

- Selected flow: Industrial oxygen `bd4b0f96-2090-4806-a648-335ab20ff401`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when purchased industrial oxygen crosses the process boundary; omit when atmospheric oxygen or compressed air represents the supply.
- Flow property / unit: Volume / m3
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `mas-et-al-2014-wine-vinegar`

###### Low-voltage grid electricity (`acetification_electricity_low_voltage_grid`)

Record Alternating current, below 1 kV, grid consumption mix as one independently quantified exchange.

- Selected flow: Alternating current, below 1 kV, grid consumption mix
- UUID status: unresolved - Rejected the below-1-kV candidate because flow get reported Net calorific value rather than an electricity-energy reference property.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Medium-voltage grid electricity (`acetification_electricity_medium_voltage_grid`)

Record Alternating current, 1-35 kV, grid consumption mix as one independently quantified exchange.

- Selected flow: Alternating current, 1-35 kV, grid consumption mix
- UUID status: unresolved - Rejected the 1-35-kV candidate because flow get reported Net calorific value rather than an electricity-energy reference property.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### High-voltage grid electricity (`acetification_electricity_high_voltage_grid`)

Record Alternating current, above 35 kV, grid consumption mix as one independently quantified exchange.

- Selected flow: Alternating current, above 35 kV, grid consumption mix
- UUID status: unresolved - No exact above-35-kV consumption-mix candidate with a valid electricity-energy reference property was found.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### On-site photovoltaic electricity (`acetification_electricity_onsite_photovoltaic`)

Record Alternating current, on-site photovoltaic supply as one independently quantified exchange.

- Selected flow: Alternating current, on-site photovoltaic supply
- UUID status: unresolved - Rejected photovoltaic candidates whose voltage or Net-calorific-value reference property did not match the exchange.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Purchased steam at 11.0 MPaG (`acetification_steam_11mpag`)

Record Steam, 11.0 MPaG as one independently quantified exchange.

- Selected flow: Steam, 11.0 MPaG `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this purchased thermal carrier crosses the process boundary; omit when on-site fuel rows fully represent the same heat.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Purchased hot water at 80 °C (`acetification_hot_water_80c`)

Record Hot water, 80 °C as one independently quantified exchange.

- Selected flow: Hot water, 80 °C
- UUID status: unresolved - No exact 80 °C hot-water product flow with a valid thermal-energy reference property was found.
- Applicability: Include only when this purchased thermal carrier crosses the process boundary; omit when on-site fuel rows fully represent the same heat.
- Flow property / unit: Energy / MJ
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Natural gas fuel (`acetification_natural_gas`)

Record Natural gas in the gaseous state as one independently quantified exchange.

- Selected flow: Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Volume / m3
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Liquefied petroleum gas fuel (`acetification_liquefied_petroleum_gas`)

Record Liquefied petroleum gas as one independently quantified exchange.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Diesel oil fuel (`acetification_diesel_oil`)

Record Diesel oil as one independently quantified exchange.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Heavy oil fuel (`acetification_heavy_oil`)

Record Heavy oil as one independently quantified exchange.

- Selected flow: Heavy oil `7fd5ee11-bcf8-47eb-83b4-778ed51eac29`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Biogas fuel (`acetification_biogas`)

Record Biogas, 50-80% methane as one independently quantified exchange.

- Selected flow: Biogas, 50-80% methane `246d7fec-59ef-4032-8539-e47632b60a23`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Volume / m3
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Compressed air (`acetification_compressed_air`)

Record Compressed air as one independently quantified exchange.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when Compressed air crosses the aerobic acetification boundary; omit otherwise.
- Flow property / unit: Volume / m3
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### R-134a refrigerant make-up (`acetification_refrigerant_r134a`)

Record Refrigerant, R134a as one independently quantified exchange.

- Selected flow: Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when make-up of this refrigerant is attributable to in-scope cooling equipment; record leakage as a separate elementary output.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### R-717 ammonia refrigerant make-up (`acetification_refrigerant_r717`)

Record Refrigerant, R717 ammonia as one independently quantified exchange.

- Selected flow: Refrigerant, R717 ammonia
- UUID status: unresolved - Rejected anhydrous-ammonia candidates that did not establish refrigeration grade or make-up use.
- Applicability: Include only when make-up of this refrigerant is attributable to in-scope cooling equipment; record leakage as a separate elementary output.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### R-744 carbon-dioxide refrigerant make-up (`acetification_refrigerant_r744`)

Record Refrigerant, R744 carbon dioxide as one independently quantified exchange.

- Selected flow: Refrigerant, R744 carbon dioxide
- UUID status: unresolved - Rejected carbon-dioxide candidates described as waste gas, chemical reagent, or welding gas rather than R-744 refrigerant.
- Applicability: Include only when make-up of this refrigerant is attributable to in-scope cooling equipment; record leakage as a separate elementary output.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Tap water (`acetification_tap_water`)

Record Tap water as one independently quantified exchange.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Groundwater for process use (`acetification_groundwater`)

Record Groundwater for process use as one independently quantified exchange.

- Selected flow: Groundwater for process use
- UUID status: unresolved - Rejected groundwater-withdrawal and irrigation candidates that did not represent supplied food-process water.
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Cooling water (`acetification_cooling_water`)

Record Cooling water as one independently quantified exchange.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Deionised water (`acetification_deionized_water`)

Record Deionised water as one independently quantified exchange.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Reused process water (`acetification_reused_process_water`)

Record Process Water as one independently quantified exchange.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

###### Atmospheric oxygen resource (`acetification_atmospheric_oxygen`)

Record Oxygen, resource from air as one independently quantified exchange.

- Selected flow: Oxygen, resource from air `e2fb04b0-6555-11dd-ad8b-0800200c9a66`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only when the modelling convention records direct atmospheric oxygen withdrawal; omit when purchased compressed air or industrial oxygen represents the supply.
- Flow property / unit: Mass / kg
- Amount rule: Calculated from collected aeration and composition records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_operation`
- Sources: `mas-et-al-2014-wine-vinegar`

#### Outputs

##### Product flows

###### Raw fermentation vinegar output (`raw_fermentation_vinegar`)

Record Raw fermentation vinegar as one independently quantified exchange.

- Selected flow: Raw fermentation vinegar
- UUID status: unresolved - Acetic-acid-solution candidates did not represent raw fermentation vinegar.
- Applicability: Required output for the fermentation-vinegar route; preserve substrate, technology, acid strength, and batch linkage.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `mas-et-al-2014-wine-vinegar`; `jrc-fdm-bref-2019`

##### Waste flows

###### Spent acetic-acid-bacteria biomass (`acetification_spent_bacteria_biomass`)

Record Spent acetic acid bacteria biomass separately by measured quantity and destination.

- Selected flow: Spent acetic acid bacteria biomass
- UUID status: unresolved - No exact spent-acetic-acid-bacteria waste flow was found.
- Applicability: Include only when biomass is separated and exported as waste; omit internal recirculation.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Acetification sludge (`acetification_sludge`)

Record Acetification sludge separately by measured quantity and destination.

- Selected flow: Acetification sludge
- UUID status: unresolved - Generic sludge candidates did not establish vinegar-acetification origin.
- Applicability: Include only when attributable sludge leaves the acetification process.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Rejected fermentation vinegar (`acetification_rejected_vinegar`)

Record Rejected fermentation vinegar separately by measured quantity and destination.

- Selected flow: Rejected fermentation vinegar
- UUID status: unresolved - Generic waste-liquid candidates did not establish fermentation-vinegar identity.
- Applicability: Include only when rejected vinegar leaves as waste; omit internal rework.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Acetification wastewater (`acetification_wastewater`)

Record Vinegar-acetification wastewater separately by measured quantity and destination.

- Selected flow: Vinegar-acetification wastewater
- UUID status: unresolved - Returned distillation-residue and industrial wastewater candidates did not match vinegar acetification.
- Applicability: Include only when this wastewater leaves for treatment or discharge.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

##### Elementary flows

###### Ethanol to air (`acetification_ethanol_air`)

Record Ethanol, to air unspecified only as the named elementary exchange and declared compartment.

- Selected flow: Ethanol, to air unspecified `08a91e70-3ddc-11dd-9349-0050c2490048`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only for measured or calculated ethanol release to the unspecified-air compartment.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `mas-et-al-2014-wine-vinegar`

###### Acetic acid to air (`acetification_acetic_acid_air`)

Record Acetic acid, to air unspecified only as the named elementary exchange and declared compartment.

- Selected flow: Acetic acid, to air unspecified `08a91e70-3ddc-11dd-92c3-0050c2490048`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only for measured or calculated acetic-acid release to the unspecified-air compartment.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw fermentation vinegar output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `mas-et-al-2014-wine-vinegar`

### Process: Food-grade acetic acid formulation (`acetic_acid_formulation`)

#### Inputs

##### Product flows

###### Food-grade acetic acid (`formulation_food_grade_acetic_acid`)

Record Food-grade acetic acid, 98% as one independently quantified exchange.

- Selected flow: Food-grade acetic acid, 98%
- UUID status: unresolved - Rejected industrial-grade, textile-use, and unspecified 98% acetic-acid candidates that did not establish food grade.
- Applicability: Required for the acetic-acid-substitute route; omit for the fermentation-vinegar route.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `eu-commission-2016-263`; `us-fda-cpg-562-100`; `jrc-fdm-bref-2019`

###### Formulation tap water (`formulation_tap_water`)

Record Tap water as one independently quantified exchange.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Required when tap water dilutes food-grade acetic acid; omit only when another declared water source is used.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `eu-commission-2016-263`; `us-fda-cpg-562-100`; `jrc-fdm-bref-2019`

###### Food-grade salt (`formulation_salt`)

Record Salt, food-grade as one independently quantified exchange.

- Selected flow: Salt, food-grade `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when salt is present in the declared formulation; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `eu-commission-2016-263`; `us-fda-cpg-562-100`; `jrc-fdm-bref-2019`

###### Caramel colour (`formulation_caramel_colour`)

Record Food-grade caramel colour as one independently quantified exchange.

- Selected flow: Food-grade caramel colour
- UUID status: unresolved - Search returned textile dyes and pigments, not food-grade caramel colour.
- Applicability: Include only when caramel colour is present in the declared formulation; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `eu-commission-2016-263`; `us-fda-cpg-562-100`; `jrc-fdm-bref-2019`

###### Citric acid (`formulation_citric_acid`)

Record Citric Acid as one independently quantified exchange.

- Selected flow: Citric Acid `80e2772b-119c-4565-a919-a70939d89dff`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when citric acid is present in the declared formulation; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `eu-commission-2016-263`; `us-fda-cpg-562-100`; `jrc-fdm-bref-2019`

###### Low-voltage grid electricity (`acetic_acid_formulation_electricity_low_voltage_grid`)

Record Alternating current, below 1 kV, grid consumption mix as one independently quantified exchange.

- Selected flow: Alternating current, below 1 kV, grid consumption mix
- UUID status: unresolved - Rejected the below-1-kV candidate because flow get reported Net calorific value rather than an electricity-energy reference property.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Medium-voltage grid electricity (`acetic_acid_formulation_electricity_medium_voltage_grid`)

Record Alternating current, 1-35 kV, grid consumption mix as one independently quantified exchange.

- Selected flow: Alternating current, 1-35 kV, grid consumption mix
- UUID status: unresolved - Rejected the 1-35-kV candidate because flow get reported Net calorific value rather than an electricity-energy reference property.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### High-voltage grid electricity (`acetic_acid_formulation_electricity_high_voltage_grid`)

Record Alternating current, above 35 kV, grid consumption mix as one independently quantified exchange.

- Selected flow: Alternating current, above 35 kV, grid consumption mix
- UUID status: unresolved - No exact above-35-kV consumption-mix candidate with a valid electricity-energy reference property was found.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### On-site photovoltaic electricity (`acetic_acid_formulation_electricity_onsite_photovoltaic`)

Record Alternating current, on-site photovoltaic supply as one independently quantified exchange.

- Selected flow: Alternating current, on-site photovoltaic supply
- UUID status: unresolved - Rejected photovoltaic candidates whose voltage or Net-calorific-value reference property did not match the exchange.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Purchased steam at 11.0 MPaG (`acetic_acid_formulation_steam_11mpag`)

Record Steam, 11.0 MPaG as one independently quantified exchange.

- Selected flow: Steam, 11.0 MPaG `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this purchased thermal carrier crosses the process boundary; omit when on-site fuel rows fully represent the same heat.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Purchased hot water at 80 °C (`acetic_acid_formulation_hot_water_80c`)

Record Hot water, 80 °C as one independently quantified exchange.

- Selected flow: Hot water, 80 °C
- UUID status: unresolved - No exact 80 °C hot-water product flow with a valid thermal-energy reference property was found.
- Applicability: Include only when this purchased thermal carrier crosses the process boundary; omit when on-site fuel rows fully represent the same heat.
- Flow property / unit: Energy / MJ
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Natural gas fuel (`acetic_acid_formulation_natural_gas`)

Record Natural gas in the gaseous state as one independently quantified exchange.

- Selected flow: Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Volume / m3
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Liquefied petroleum gas fuel (`acetic_acid_formulation_liquefied_petroleum_gas`)

Record Liquefied petroleum gas as one independently quantified exchange.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Diesel oil fuel (`acetic_acid_formulation_diesel_oil`)

Record Diesel oil as one independently quantified exchange.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Heavy oil fuel (`acetic_acid_formulation_heavy_oil`)

Record Heavy oil as one independently quantified exchange.

- Selected flow: Heavy oil `7fd5ee11-bcf8-47eb-83b4-778ed51eac29`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Biogas fuel (`acetic_acid_formulation_biogas`)

Record Biogas, 50-80% methane as one independently quantified exchange.

- Selected flow: Biogas, 50-80% methane `246d7fec-59ef-4032-8539-e47632b60a23`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Volume / m3
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Compressed air (`acetic_acid_formulation_compressed_air`)

Record Compressed air as one independently quantified exchange.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when Compressed air crosses the food-grade acetic acid formulation boundary; omit otherwise.
- Flow property / unit: Volume / m3
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### R-134a refrigerant make-up (`acetic_acid_formulation_refrigerant_r134a`)

Record Refrigerant, R134a as one independently quantified exchange.

- Selected flow: Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when make-up of this refrigerant is attributable to in-scope cooling equipment; record leakage as a separate elementary output.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### R-717 ammonia refrigerant make-up (`acetic_acid_formulation_refrigerant_r717`)

Record Refrigerant, R717 ammonia as one independently quantified exchange.

- Selected flow: Refrigerant, R717 ammonia
- UUID status: unresolved - Rejected anhydrous-ammonia candidates that did not establish refrigeration grade or make-up use.
- Applicability: Include only when make-up of this refrigerant is attributable to in-scope cooling equipment; record leakage as a separate elementary output.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### R-744 carbon-dioxide refrigerant make-up (`acetic_acid_formulation_refrigerant_r744`)

Record Refrigerant, R744 carbon dioxide as one independently quantified exchange.

- Selected flow: Refrigerant, R744 carbon dioxide
- UUID status: unresolved - Rejected carbon-dioxide candidates described as waste gas, chemical reagent, or welding gas rather than R-744 refrigerant.
- Applicability: Include only when make-up of this refrigerant is attributable to in-scope cooling equipment; record leakage as a separate elementary output.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Tap water (`acetic_acid_formulation_tap_water`)

Record Tap water as one independently quantified exchange.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Groundwater for process use (`acetic_acid_formulation_groundwater`)

Record Groundwater for process use as one independently quantified exchange.

- Selected flow: Groundwater for process use
- UUID status: unresolved - Rejected groundwater-withdrawal and irrigation candidates that did not represent supplied food-process water.
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Cooling water (`acetic_acid_formulation_cooling_water`)

Record Cooling water as one independently quantified exchange.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Deionised water (`acetic_acid_formulation_deionized_water`)

Record Deionised water as one independently quantified exchange.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Reused process water (`acetic_acid_formulation_reused_process_water`)

Record Process Water as one independently quantified exchange.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Raw acetic-acid-based substitute output (`raw_acetic_acid_substitute`)

Record Raw edible acetic-acid vinegar substitute as one independently quantified exchange.

- Selected flow: Raw edible acetic-acid vinegar substitute
- UUID status: unresolved - Acetic-acid-solution candidates were industrial or hydrometallurgical intermediates rather than an edible substitute.
- Applicability: Required output for the acetic-acid-substitute route; preserve formulation, acid strength, and batch linkage.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_outputs`
- Sources: `eu-commission-2016-263`; `us-fda-cpg-562-100`; `jrc-fdm-bref-2019`

##### Waste flows

###### Rejected acetic-acid substitute (`formulation_rejected_substitute`)

Record Rejected edible acetic-acid vinegar substitute separately by measured quantity and destination.

- Selected flow: Rejected edible acetic-acid vinegar substitute
- UUID status: unresolved - Waste-acid candidates represented sulfuric-acid waste and were rejected.
- Applicability: Include only when rejected substitute leaves as waste; omit internal rework.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Dilute acetic-acid spill waste (`formulation_acetic_acid_spill`)

Record Dilute acetic acid spill waste separately by measured quantity and destination.

- Selected flow: Dilute acetic acid spill waste
- UUID status: unresolved - Waste-acid candidates did not match dilute food-grade acetic-acid spill composition.
- Applicability: Include only for unrecovered acetic-acid spills exported as waste.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Formulation wastewater (`formulation_wastewater`)

Record Acetic-acid-formulation wastewater separately by measured quantity and destination.

- Selected flow: Acetic-acid-formulation wastewater
- UUID status: unresolved - Returned residue and non-food wastewater candidates did not match formulation wastewater.
- Applicability: Include only when this wastewater leaves for treatment or discharge.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg raw formulated substitute output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

##### Elementary flows

### Process: Blending, clarification, stabilization, and release (`finishing`)

#### Inputs

##### Product flows

###### Raw fermentation vinegar input (`finishing_raw_fermentation_vinegar`)

Record Raw fermentation vinegar as one independently quantified exchange.

- Selected flow: Raw fermentation vinegar
- UUID status: unresolved - No exact raw-fermentation-vinegar flow was found.
- Applicability: Required only for the fermentation-vinegar route; mutually exclusive with the raw substitute input for one product batch.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### Raw acetic-acid-substitute input (`finishing_raw_acetic_acid_substitute`)

Record Raw edible acetic-acid vinegar substitute as one independently quantified exchange.

- Selected flow: Raw edible acetic-acid vinegar substitute
- UUID status: unresolved - No exact edible raw-substitute flow was found.
- Applicability: Required only for the acetic-acid-substitute route; mutually exclusive with raw fermentation vinegar for one product batch.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### Dilution tap water (`finishing_dilution_tap_water`)

Record Tap water as one independently quantified exchange.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when tap water is added during final dilution or blending.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### Citric acid (`finishing_citric_acid`)

Record Citric Acid as one independently quantified exchange.

- Selected flow: Citric Acid `80e2772b-119c-4565-a919-a70939d89dff`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when citric acid is dosed during finishing; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### Food-grade salt (`finishing_salt`)

Record Salt, food-grade as one independently quantified exchange.

- Selected flow: Salt, food-grade `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when salt is dosed during finishing; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### Bentonite fining agent (`finishing_bentonite`)

Record Bentonite, wine clarification grade as one independently quantified exchange.

- Selected flow: Bentonite, wine clarification grade `e01d9941-db32-46cb-b577-ebc584597a2d`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when bentonite is dosed for clarification; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### Diatomaceous-earth filter aid (`finishing_diatomaceous_earth`)

Record Diatomaceous earth filter aid as one independently quantified exchange.

- Selected flow: Diatomaceous earth filter aid `af13e1e4-290c-412d-b3fe-dcba0b4c5b81`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this filter aid is used; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### Gelatin fining agent (`finishing_gelatin`)

Record Gelatin, purity above 99.5% as one independently quantified exchange.

- Selected flow: Gelatin, purity above 99.5% `aa9b81c7-64ab-40a2-9419-50fedc25a2c7`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when gelatin is dosed for clarification; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### PVPP stabilizing agent (`finishing_pvpp`)

Record Polyvinylpolypyrrolidone, beverage grade as one independently quantified exchange.

- Selected flow: Polyvinylpolypyrrolidone, beverage grade
- UUID status: unresolved - Rejected non-crosslinked PVP and pharmaceutical crospovidone candidates that did not establish beverage-grade PVPP.
- Applicability: Include only when beverage-grade PVPP is dosed; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### Sodium-hydroxide cleaning chemical (`finishing_sodium_hydroxide`)

Record Sodium hydroxide, 95-98% as one independently quantified exchange.

- Selected flow: Sodium hydroxide, 95-98% `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this concentration is consumed in finishing cleaning; represent a different concentration as a separate atomic row.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### Nitric-acid cleaning chemical (`finishing_nitric_acid`)

Record Nitric acid, 50% aqueous solution as one independently quantified exchange.

- Selected flow: Nitric acid, 50% aqueous solution `db613797-10b0-4252-b818-659b99ce85dd`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this concentration is consumed in finishing cleaning; represent a different concentration separately.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### Peracetic-acid disinfectant (`finishing_peracetic_acid`)

Record Peracetic acid disinfectant as one independently quantified exchange.

- Selected flow: Peracetic acid disinfectant
- UUID status: unresolved - Search returned acid gases and polyacrylic chemicals, not peracetic acid disinfectant.
- Applicability: Include only when peracetic acid is consumed in finishing sanitation; omit otherwise.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inputs`
- Sources: `spain-rd-661-2012-consolidated-2026`; `jrc-fdm-bref-2019`

###### Low-voltage grid electricity (`finishing_electricity_low_voltage_grid`)

Record Alternating current, below 1 kV, grid consumption mix as one independently quantified exchange.

- Selected flow: Alternating current, below 1 kV, grid consumption mix
- UUID status: unresolved - Rejected the below-1-kV candidate because flow get reported Net calorific value rather than an electricity-energy reference property.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Medium-voltage grid electricity (`finishing_electricity_medium_voltage_grid`)

Record Alternating current, 1-35 kV, grid consumption mix as one independently quantified exchange.

- Selected flow: Alternating current, 1-35 kV, grid consumption mix
- UUID status: unresolved - Rejected the 1-35-kV candidate because flow get reported Net calorific value rather than an electricity-energy reference property.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### High-voltage grid electricity (`finishing_electricity_high_voltage_grid`)

Record Alternating current, above 35 kV, grid consumption mix as one independently quantified exchange.

- Selected flow: Alternating current, above 35 kV, grid consumption mix
- UUID status: unresolved - No exact above-35-kV consumption-mix candidate with a valid electricity-energy reference property was found.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### On-site photovoltaic electricity (`finishing_electricity_onsite_photovoltaic`)

Record Alternating current, on-site photovoltaic supply as one independently quantified exchange.

- Selected flow: Alternating current, on-site photovoltaic supply
- UUID status: unresolved - Rejected photovoltaic candidates whose voltage or Net-calorific-value reference property did not match the exchange.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Purchased steam at 11.0 MPaG (`finishing_steam_11mpag`)

Record Steam, 11.0 MPaG as one independently quantified exchange.

- Selected flow: Steam, 11.0 MPaG `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this purchased thermal carrier crosses the process boundary; omit when on-site fuel rows fully represent the same heat.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Purchased hot water at 80 °C (`finishing_hot_water_80c`)

Record Hot water, 80 °C as one independently quantified exchange.

- Selected flow: Hot water, 80 °C
- UUID status: unresolved - No exact 80 °C hot-water product flow with a valid thermal-energy reference property was found.
- Applicability: Include only when this purchased thermal carrier crosses the process boundary; omit when on-site fuel rows fully represent the same heat.
- Flow property / unit: Energy / MJ
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Natural gas fuel (`finishing_natural_gas`)

Record Natural gas in the gaseous state as one independently quantified exchange.

- Selected flow: Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Volume / m3
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Liquefied petroleum gas fuel (`finishing_liquefied_petroleum_gas`)

Record Liquefied petroleum gas as one independently quantified exchange.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Diesel oil fuel (`finishing_diesel_oil`)

Record Diesel oil as one independently quantified exchange.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Heavy oil fuel (`finishing_heavy_oil`)

Record Heavy oil as one independently quantified exchange.

- Selected flow: Heavy oil `7fd5ee11-bcf8-47eb-83b4-778ed51eac29`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Biogas fuel (`finishing_biogas`)

Record Biogas, 50-80% methane as one independently quantified exchange.

- Selected flow: Biogas, 50-80% methane `246d7fec-59ef-4032-8539-e47632b60a23`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Volume / m3
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Compressed air (`finishing_compressed_air`)

Record Compressed air as one independently quantified exchange.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when Compressed air crosses the blending, clarification, stabilization, and release boundary; omit otherwise.
- Flow property / unit: Volume / m3
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### R-134a refrigerant make-up (`finishing_refrigerant_r134a`)

Record Refrigerant, R134a as one independently quantified exchange.

- Selected flow: Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when make-up of this refrigerant is attributable to in-scope cooling equipment; record leakage as a separate elementary output.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### R-717 ammonia refrigerant make-up (`finishing_refrigerant_r717`)

Record Refrigerant, R717 ammonia as one independently quantified exchange.

- Selected flow: Refrigerant, R717 ammonia
- UUID status: unresolved - Rejected anhydrous-ammonia candidates that did not establish refrigeration grade or make-up use.
- Applicability: Include only when make-up of this refrigerant is attributable to in-scope cooling equipment; record leakage as a separate elementary output.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### R-744 carbon-dioxide refrigerant make-up (`finishing_refrigerant_r744`)

Record Refrigerant, R744 carbon dioxide as one independently quantified exchange.

- Selected flow: Refrigerant, R744 carbon dioxide
- UUID status: unresolved - Rejected carbon-dioxide candidates described as waste gas, chemical reagent, or welding gas rather than R-744 refrigerant.
- Applicability: Include only when make-up of this refrigerant is attributable to in-scope cooling equipment; record leakage as a separate elementary output.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Tap water (`finishing_tap_water`)

Record Tap water as one independently quantified exchange.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Groundwater for process use (`finishing_groundwater`)

Record Groundwater for process use as one independently quantified exchange.

- Selected flow: Groundwater for process use
- UUID status: unresolved - Rejected groundwater-withdrawal and irrigation candidates that did not represent supplied food-process water.
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Cooling water (`finishing_cooling_water`)

Record Cooling water as one independently quantified exchange.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Deionised water (`finishing_deionized_water`)

Record Deionised water as one independently quantified exchange.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Reused process water (`finishing_reused_process_water`)

Record Process Water as one independently quantified exchange.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished bulk vinegar output (`finished_bulk_vinegar`)

Record Vinegar and substitutes therefor obtained from acetic acid as one independently quantified exchange.

- Selected flow: Vinegar and substitutes therefor obtained from acetic acid `20393649-bcc3-43f0-a2df-1a99c0005e29`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Required only for the representative finished-liquid vinegar route; mutually exclusive with the finished substitute output for one batch.
- Flow property / unit: Mass / kg
- Amount rule: Measured net released mass at the declared plant gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg declared finished bulk product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_identity_output`
- Sources: `unsd-cpc-v3-2025`; `eu-commission-2016-263`; `us-fda-cpg-562-100`

###### Finished bulk acetic-acid substitute output (`finished_bulk_acetic_acid_substitute`)

Record Finished edible acetic-acid vinegar substitute as one independently quantified exchange.

- Selected flow: Finished edible acetic-acid vinegar substitute
- UUID status: unresolved - The category-labelled vinegar flow does not establish substitute identity and no exact substitute flow was found.
- Applicability: Required only for the substitute route; mutually exclusive with finished bulk vinegar for one batch.
- Flow property / unit: Mass / kg
- Amount rule: Measured net released mass at the declared plant gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg declared finished bulk product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_identity_output`
- Sources: `eu-commission-2016-263`; `us-fda-cpg-562-100`

##### Waste flows

###### Spent diatomaceous earth (`finishing_spent_diatomaceous_earth`)

Record Spent diatomaceous earth filter aid separately by measured quantity and destination.

- Selected flow: Spent diatomaceous earth filter aid
- UUID status: unresolved - Generic filtration-residue candidates did not establish spent diatomaceous-earth identity.
- Applicability: Include only when diatomaceous-earth filter aid leaves as waste.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Clarification sludge (`finishing_clarification_sludge`)

Record Vinegar clarification sludge separately by measured quantity and destination.

- Selected flow: Vinegar clarification sludge
- UUID status: unresolved - Generic sediment-and-sludge candidates did not establish vinegar-clarification origin.
- Applicability: Include only when attributable clarification sludge leaves the process.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Spent filter media (`finishing_spent_filter_media`)

Record Spent food-grade filter media separately by measured quantity and destination.

- Selected flow: Spent food-grade filter media
- UUID status: unresolved - Returned tailings-mud and generic filter-residue candidates did not establish food-grade filter media.
- Applicability: Include only when filter media is replaced and leaves the foreground boundary.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Rejected finished vinegar (`finishing_rejected_vinegar`)

Record Rejected finished fermentation vinegar separately by measured quantity and destination.

- Selected flow: Rejected finished fermentation vinegar
- UUID status: unresolved - Generic waste-liquid candidates did not preserve fermentation-vinegar identity.
- Applicability: Include only when rejected vinegar leaves as waste; omit internal rework.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Rejected finished substitute (`finishing_rejected_substitute`)

Record Rejected finished acetic-acid vinegar substitute separately by measured quantity and destination.

- Selected flow: Rejected finished acetic-acid vinegar substitute
- UUID status: unresolved - Waste-acid candidates did not represent an edible acetic-acid substitute.
- Applicability: Include only when rejected substitute leaves as waste; omit internal rework.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Finishing wastewater (`finishing_wastewater`)

Record Vinegar-finishing wastewater separately by measured quantity and destination.

- Selected flow: Vinegar-finishing wastewater
- UUID status: unresolved - Returned industrial washing-wastewater candidates did not match vinegar finishing.
- Applicability: Include only when finishing wastewater leaves for treatment or discharge.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

##### Elementary flows

###### Acetic acid to air (`finishing_acetic_acid_air`)

Record Acetic acid, to air unspecified only as the named elementary exchange and declared compartment.

- Selected flow: Acetic acid, to air unspecified `08a91e70-3ddc-11dd-92c3-0050c2490048`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only for measured or calculated acetic-acid release to unspecified air from finishing or storage.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Fossil carbon dioxide to air (`finishing_fossil_carbon_dioxide_air`)

Record Carbon dioxide, fossil, to air unspecified only as the named elementary exchange and declared compartment.

- Selected flow: Carbon dioxide, fossil, to air unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only for in-scope fossil-fuel combustion; keep biogenic carbon dioxide separate.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Fossil carbon monoxide to air (`finishing_fossil_carbon_monoxide_air`)

Record Carbon monoxide, fossil, to air unspecified only as the named elementary exchange and declared compartment.

- Selected flow: Carbon monoxide, fossil, to air unspecified `08a91e70-3ddc-11dd-924e-0050c2490048`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only when in-scope combustion produces measured or calculated fossil carbon monoxide.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Nitrogen monoxide to non-urban air (`finishing_nitrogen_monoxide_air`)

Record Nitrogen monoxide, to non-urban air or high stacks only as the named elementary exchange and declared compartment.

- Selected flow: Nitrogen monoxide, to non-urban air or high stacks `fe0acd60-3ddc-11dd-aa19-0050c2490048`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only when the measured species and declared compartment match this flow; do not use as a total-NOx placeholder.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Sulfur oxides to air (`finishing_sulfur_oxides_air`)

Record Sulfur oxides, to air unspecified only as the named elementary exchange and declared compartment.

- Selected flow: Sulfur oxides, to air unspecified `fe0acd60-3ddc-11dd-a207-0050c2490048`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only for measured or calculated sulfur-oxide release to unspecified air.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### PM2.5 to air (`finishing_pm25_air`)

Record Particles, PM2.5, to air unspecified only as the named elementary exchange and declared compartment.

- Selected flow: Particles, PM2.5, to air unspecified `08a91e70-3ddc-11dd-9293-0050c2490048`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only for measured or calculated PM2.5 released to unspecified air.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### HFC-134a to air (`finishing_r134a_air`)

Record HFC-134a, to air unspecified only as the named elementary exchange and declared compartment.

- Selected flow: HFC-134a, to air unspecified `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only when leakage is attributable to in-scope R-134a equipment.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Ammonia to air (`finishing_ammonia_air`)

Record Ammonia, to air unspecified only as the named elementary exchange and declared compartment.

- Selected flow: Ammonia, to air unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only when leakage is attributable to in-scope ammonia equipment or measured ammonia release.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Fossil methane to air (`finishing_methane_air`)

Record Methane, fossil, to air unspecified only as the named elementary exchange and declared compartment.

- Selected flow: Methane, fossil, to air unspecified `08a91e70-3ddc-11dd-9610-0050c2490048`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only for measured or calculated fossil-methane release; keep biogenic methane separate.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Chemical oxygen demand to water (`finishing_cod_water`)

Record Chemical Oxygen Demand, to water unspecified only as the named elementary exchange and declared compartment.

- Selected flow: Chemical Oxygen Demand, to water unspecified `e57fc631-2c77-457a-aa30-be79e357792b`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only for a direct discharge to an unspecified water compartment with measured COD.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Biological oxygen demand to fresh water (`finishing_bod_freshwater`)

Record Biological oxygen demand, to fresh water only as the named elementary exchange and declared compartment.

- Selected flow: Biological oxygen demand, to fresh water `08a91e70-3ddc-11dd-97de-0050c2490048`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only for a direct fresh-water discharge with measured BOD.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Total nitrogen to fresh water (`finishing_total_nitrogen_freshwater`)

Record Nitrogen, total excluding N2, to fresh water only as the named elementary exchange and declared compartment.

- Selected flow: Nitrogen, total excluding N2, to fresh water `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only for a direct fresh-water discharge with measured total nitrogen excluding N2.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

###### Total phosphorus to fresh water (`finishing_total_phosphorus_freshwater`)

Record Phosphorus, total, to fresh water only as the named elementary exchange and declared compartment.

- Selected flow: Phosphorus, total, to fresh water `f9df3107-6b59-4067-b920-3c61cf3630c7`
- UUID status: verified at state_code 100: Elementary flow; reference property matches Mass
- Applicability: Include only for a direct fresh-water discharge with measured total phosphorus.
- Flow property / unit: Mass / kg
- Amount rule: Measured release or documented calculation from collected operating, discharge, or composition data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg finished bulk product
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_emissions`
- Sources: `jrc-fdm-bref-2019`

### Process: Primary and secondary packaging (`packaging`)

#### Inputs

##### Product flows

###### Finished bulk vinegar input (`packaging_bulk_vinegar`)

Record Vinegar and substitutes therefor obtained from acetic acid as one independently quantified exchange.

- Selected flow: Vinegar and substitutes therefor obtained from acetic acid `20393649-bcc3-43f0-a2df-1a99c0005e29`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for packaged representative finished liquid vinegar; mutually exclusive with the packaged substitute input for one run.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `unsd-cpc-v3-2025`; `jrc-fdm-bref-2019`

###### Finished bulk substitute input (`packaging_bulk_substitute`)

Record Finished edible acetic-acid vinegar substitute as one independently quantified exchange.

- Selected flow: Finished edible acetic-acid vinegar substitute
- UUID status: unresolved - No exact edible substitute flow was found.
- Applicability: Include only for the packaged substitute route; mutually exclusive with packaged vinegar for one run.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### Glass bottle (`packaging_glass_bottle`)

Record Glass bottle for food liquids as one independently quantified exchange.

- Selected flow: Glass bottle for food liquids
- UUID status: unresolved - Rejected plate-glass and glass-jar candidates because neither established a bottle for food liquids.
- Applicability: Include only when a glass bottle leaves with the declared product; omit for plastic-container routes.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### PET bottle (`packaging_pet_bottle`)

Record PET bottle for food liquids as one independently quantified exchange.

- Selected flow: PET bottle for food liquids
- UUID status: unresolved - Rejected bottle-grade PET granulate and rPET flakes because they were materials rather than finished bottles.
- Applicability: Include only when a PET bottle leaves with the declared product; omit for glass or HDPE routes.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### HDPE bottle (`packaging_hdpe_bottle`)

Record HDPE bottle for food liquids as one independently quantified exchange.

- Selected flow: HDPE bottle for food liquids
- UUID status: unresolved - No HDPE food-liquid bottle candidate was found; thermos-bottle and generic-container hits were rejected.
- Applicability: Include only when an HDPE bottle leaves with the declared product; omit for glass or PET routes.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### Plastic closure cap (`packaging_plastic_closure`)

Record Plastic packaging closure cap as one independently quantified exchange.

- Selected flow: Plastic packaging closure cap `bab04179-3799-4eff-b12b-edaec382520c`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when a plastic closure leaves with the product; omit for aluminium-closure runs.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### Aluminium screw cap (`packaging_aluminium_closure`)

Record Aluminium screw cap closure as one independently quantified exchange.

- Selected flow: Aluminium screw cap closure `c37f87ea-0b43-43d6-a300-b142ea358cb7`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when an aluminium screw cap leaves with the product; omit for plastic-closure runs.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### Paper label (`packaging_paper_label`)

Record Label, paper as one independently quantified exchange.

- Selected flow: Label, paper `7b25a54f-baa6-4593-9670-4240a3315eed`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when a paper label leaves with the product.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### Corrugated-cardboard carton (`packaging_corrugated_cardboard`)

Record Corrugated cardboard, type C, E, or F as one independently quantified exchange.

- Selected flow: Corrugated cardboard, type C, E, or F `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this corrugated-board grade leaves with the product; represent another grade separately.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### LDPE stretch film (`packaging_ldpe_stretch_film`)

Record LDPE stretch film as one independently quantified exchange.

- Selected flow: LDPE stretch film
- UUID status: unresolved - Rejected polyethylene-resin candidates that did not establish LDPE stretch-film form.
- Applicability: Include only when LDPE stretch film leaves with the palletized product.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### Wooden pallet (`packaging_wooden_pallet`)

Record Pallets and load boards of wood as one independently quantified exchange.

- Selected flow: Pallets and load boards of wood `4b49871e-95be-4e0c-9223-9902f9eaa763`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when a wooden pallet is attributable to the dispatched product.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### Sodium-hydroxide cleaning chemical (`packaging_sodium_hydroxide`)

Record Sodium hydroxide, 95-98% as one independently quantified exchange.

- Selected flow: Sodium hydroxide, 95-98% `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this concentration is consumed on the packaging line; represent a different concentration separately.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Nitric-acid cleaning chemical (`packaging_nitric_acid`)

Record Nitric acid, 50% aqueous solution as one independently quantified exchange.

- Selected flow: Nitric acid, 50% aqueous solution `db613797-10b0-4252-b818-659b99ce85dd`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this concentration is consumed on the packaging line; represent a different concentration separately.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Peracetic-acid disinfectant (`packaging_peracetic_acid`)

Record Peracetic acid disinfectant as one independently quantified exchange.

- Selected flow: Peracetic acid disinfectant
- UUID status: unresolved - No peracetic-acid disinfectant product flow was found.
- Applicability: Include only when peracetic acid is consumed on the packaging line.
- Flow property / unit: Mass / kg
- Amount rule: Metered, weighed, or batch-recorded quantity reconciled to purchasing, stock, transfer, or dispatch records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Low-voltage grid electricity (`packaging_electricity_low_voltage_grid`)

Record Alternating current, below 1 kV, grid consumption mix as one independently quantified exchange.

- Selected flow: Alternating current, below 1 kV, grid consumption mix
- UUID status: unresolved - Rejected the below-1-kV candidate because flow get reported Net calorific value rather than an electricity-energy reference property.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Medium-voltage grid electricity (`packaging_electricity_medium_voltage_grid`)

Record Alternating current, 1-35 kV, grid consumption mix as one independently quantified exchange.

- Selected flow: Alternating current, 1-35 kV, grid consumption mix
- UUID status: unresolved - Rejected the 1-35-kV candidate because flow get reported Net calorific value rather than an electricity-energy reference property.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### High-voltage grid electricity (`packaging_electricity_high_voltage_grid`)

Record Alternating current, above 35 kV, grid consumption mix as one independently quantified exchange.

- Selected flow: Alternating current, above 35 kV, grid consumption mix
- UUID status: unresolved - No exact above-35-kV consumption-mix candidate with a valid electricity-energy reference property was found.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### On-site photovoltaic electricity (`packaging_electricity_onsite_photovoltaic`)

Record Alternating current, on-site photovoltaic supply as one independently quantified exchange.

- Selected flow: Alternating current, on-site photovoltaic supply
- UUID status: unresolved - Rejected photovoltaic candidates whose voltage or Net-calorific-value reference property did not match the exchange.
- Applicability: Include only when the metered electricity has this voltage and supply scenario; do not duplicate the same meter in another electricity row.
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented calculation from power and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Purchased steam at 11.0 MPaG (`packaging_steam_11mpag`)

Record Steam, 11.0 MPaG as one independently quantified exchange.

- Selected flow: Steam, 11.0 MPaG `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this purchased thermal carrier crosses the process boundary; omit when on-site fuel rows fully represent the same heat.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Purchased hot water at 80 °C (`packaging_hot_water_80c`)

Record Hot water, 80 °C as one independently quantified exchange.

- Selected flow: Hot water, 80 °C
- UUID status: unresolved - No exact 80 °C hot-water product flow with a valid thermal-energy reference property was found.
- Applicability: Include only when this purchased thermal carrier crosses the process boundary; omit when on-site fuel rows fully represent the same heat.
- Flow property / unit: Energy / MJ
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Natural gas fuel (`packaging_natural_gas`)

Record Natural gas in the gaseous state as one independently quantified exchange.

- Selected flow: Natural gas in the gaseous state `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Volume / m3
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Liquefied petroleum gas fuel (`packaging_liquefied_petroleum_gas`)

Record Liquefied petroleum gas as one independently quantified exchange.

- Selected flow: Liquefied petroleum gas `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Diesel oil fuel (`packaging_diesel_oil`)

Record Diesel oil as one independently quantified exchange.

- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Heavy oil fuel (`packaging_heavy_oil`)

Record Heavy oil as one independently quantified exchange.

- Selected flow: Heavy oil `7fd5ee11-bcf8-47eb-83b4-778ed51eac29`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Biogas fuel (`packaging_biogas`)

Record Biogas, 50-80% methane as one independently quantified exchange.

- Selected flow: Biogas, 50-80% methane `246d7fec-59ef-4032-8539-e47632b60a23`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when this fuel is combusted for the process; do not duplicate heat already represented by purchased steam or hot water.
- Flow property / unit: Volume / m3
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Compressed air (`packaging_compressed_air`)

Record Compressed air as one independently quantified exchange.

- Selected flow: Compressed air `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- UUID status: verified at state_code 100: Product flow; reference property matches Volume
- Applicability: Include only when Compressed air crosses the primary and secondary packaging boundary; omit otherwise.
- Flow property / unit: Volume / m3
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### R-134a refrigerant make-up (`packaging_refrigerant_r134a`)

Record Refrigerant, R134a as one independently quantified exchange.

- Selected flow: Refrigerant, R134a `86e15f5d-a7dd-40be-8dc4-ac9fa826a309`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only when make-up of this refrigerant is attributable to in-scope cooling equipment; record leakage as a separate elementary output.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### R-717 ammonia refrigerant make-up (`packaging_refrigerant_r717`)

Record Refrigerant, R717 ammonia as one independently quantified exchange.

- Selected flow: Refrigerant, R717 ammonia
- UUID status: unresolved - Rejected anhydrous-ammonia candidates that did not establish refrigeration grade or make-up use.
- Applicability: Include only when make-up of this refrigerant is attributable to in-scope cooling equipment; record leakage as a separate elementary output.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### R-744 carbon-dioxide refrigerant make-up (`packaging_refrigerant_r744`)

Record Refrigerant, R744 carbon dioxide as one independently quantified exchange.

- Selected flow: Refrigerant, R744 carbon dioxide
- UUID status: unresolved - Rejected carbon-dioxide candidates described as waste gas, chemical reagent, or welding gas rather than R-744 refrigerant.
- Applicability: Include only when make-up of this refrigerant is attributable to in-scope cooling equipment; record leakage as a separate elementary output.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Tap water (`packaging_tap_water`)

Record Tap water as one independently quantified exchange.

- Selected flow: Tap water `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Groundwater for process use (`packaging_groundwater`)

Record Groundwater for process use as one independently quantified exchange.

- Selected flow: Groundwater for process use
- UUID status: unresolved - Rejected groundwater-withdrawal and irrigation candidates that did not represent supplied food-process water.
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Cooling water (`packaging_cooling_water`)

Record Cooling water as one independently quantified exchange.

- Selected flow: Cooling water `df413bba-3c03-412b-a80a-c6082b6b9b33`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Deionised water (`packaging_deionized_water`)

Record Deionised water as one independently quantified exchange.

- Selected flow: Deionised water `5b3acbab-2518-4406-8736-d21f222d757a`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

###### Reused process water (`packaging_reused_process_water`)

Record Process Water as one independently quantified exchange.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- UUID status: verified at state_code 100: Product flow; reference property matches Mass
- Applicability: Include only for this declared water source and use; do not duplicate the same water volume under another water row.
- Flow property / unit: Mass / kg
- Amount rule: Sub-metered, invoiced, weighed, or documented allocated use reconciled to facility totals
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_utilities`
- Sources: `jrc-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged finished vinegar output (`packaged_finished_vinegar`)

Record Packaged finished liquid vinegar as one independently quantified exchange.

- Selected flow: Packaged finished liquid vinegar
- UUID status: unresolved - The verified category flow does not declare packaging state, so it was not reused for this packaged output.
- Applicability: Required only for packaged finished liquid vinegar; mutually exclusive with packaged substitute output for one run.
- Flow property / unit: Mass / kg
- Amount rule: Measured net filled product mass excluding packaging mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net packaged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_identity_output`
- Sources: `unsd-cpc-v3-2025`

###### Packaged finished substitute output (`packaged_finished_substitute`)

Record Packaged edible acetic-acid vinegar substitute as one independently quantified exchange.

- Selected flow: Packaged edible acetic-acid vinegar substitute
- UUID status: unresolved - No exact packaged edible substitute flow was found.
- Applicability: Required only for packaged substitute; mutually exclusive with packaged vinegar output for one run.
- Flow property / unit: Mass / kg
- Amount rule: Measured net filled product mass excluding packaging mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net packaged product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_identity_output`
- Sources: `unsd-cpc-v3-2025`

##### Waste flows

###### Waste glass bottles (`packaging_waste_glass_bottle`)

Record Waste glass bottles from filling separately by measured quantity and destination.

- Selected flow: Waste glass bottles from filling
- UUID status: unresolved - The available glass-waste candidate was tied to wafer production and was rejected.
- Applicability: Include only when glass bottles break or are rejected inside the foreground boundary.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### Waste PET bottles (`packaging_waste_pet_bottle`)

Record Waste PET bottles separately by measured quantity and destination.

- Selected flow: Waste PET bottles `8874aca6-2ff9-4aef-be62-5cd02f20dc97`
- UUID status: verified at state_code 100: Waste flow; reference property matches Mass
- Applicability: Include only when PET bottles become waste inside the foreground boundary.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### Waste HDPE bottles (`packaging_waste_hdpe_bottle`)

Record Waste HDPE bottles separately by measured quantity and destination.

- Selected flow: Waste HDPE bottles
- UUID status: unresolved - Generic waste-polyethylene candidates did not distinguish HDPE bottle waste from LDPE film waste.
- Applicability: Include only when HDPE bottles become waste inside the foreground boundary.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### Waste aluminium closures (`packaging_waste_aluminium_closure`)

Record Waste aluminium screw-cap closures separately by measured quantity and destination.

- Selected flow: Waste aluminium screw-cap closures
- UUID status: unresolved - Rejected post-consumer and unrelated aluminium-waste candidates that did not represent on-site closure scrap.
- Applicability: Include only when aluminium closures become waste inside the foreground boundary.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### Waste paper labels (`packaging_waste_paper_label`)

Record Packaging waste, paper separately by measured quantity and destination.

- Selected flow: Packaging waste, paper `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- UUID status: verified at state_code 100: Waste flow; reference property matches Mass
- Applicability: Include only when paper labels become waste inside the foreground boundary.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### Waste corrugated cardboard (`packaging_waste_corrugated_cardboard`)

Record Packaging waste, cardboard separately by measured quantity and destination.

- Selected flow: Packaging waste, cardboard `72270223-04b1-4986-a546-94e5a0821317`
- UUID status: verified at state_code 100: Waste flow; reference property matches Mass
- Applicability: Include only when corrugated cardboard becomes waste inside the foreground boundary.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### Waste LDPE stretch film (`packaging_waste_ldpe_stretch_film`)

Record Waste LDPE stretch film separately by measured quantity and destination.

- Selected flow: Waste LDPE stretch film
- UUID status: unresolved - Generic waste-polyethylene candidates did not establish LDPE stretch-film form.
- Applicability: Include only when LDPE stretch film becomes waste inside the foreground boundary.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

###### Waste wooden pallets (`packaging_waste_wooden_pallet`)

Record Waste wooden pallets separately by measured quantity and destination.

- Selected flow: Waste wooden pallets
- UUID status: unresolved - Generic wood-waste candidates did not establish pallet identity and packaging-line origin.
- Applicability: Include only when wooden pallets are discarded inside the foreground boundary.
- Flow property / unit: Mass / kg
- Amount rule: Measured dispatch quantity or documented mass-balance result; keep destination-specific records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg net packaged product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `jrc-fdm-bref-2019`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | all multifunctional processes | First avoid allocation by subdividing meters, batch records, equipment time, and material records so inputs and outputs are directly assigned to the declared product. Use system expansion only when it is justified and the expanded function is reported. | `eu-pef-2021-2279` |
| `allocation_physical` | inseparable co-products | If subdivision or justified system expansion is not possible, use a documented causal physical relationship relevant to the shared process, such as measured mass, dry matter, acid content, or processing time. Explain why the selected relationship represents resource use; do not choose mass by default when it is not causal. | `eu-pef-2021-2279` |
| `allocation_other` | no defensible physical relationship | Use another relationship such as economic value only when no relevant physical relationship can be established. Record price basis, geography, time period, currency, co-product quantities, and sensitivity. | `eu-pef-2021-2279` |
| `allocation_waste_rework` | wastes, residues, and rework | Internal rework carries its already-recorded burdens and is not counted as a new external input or co-product. Classify outputs as waste or co-product from documented destination and economic function before allocation; disclose any burden or credit assigned. | `eu-pef-2021-2279`; `jrc-fdm-bref-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_identity_output` | `finishing`; `packaging` | finished product identity and output | release, laboratory, and dispatch records | product name; route; substrate or acetic-acid origin; acid strength; method; physical form; treatment; packaging state; flow UUID; batch; net mass; density if used | Reconcile quality release and calibrated mass records; document why the selected flow is exact or a disclosed proxy | kg plus declared quality units | each batch, aggregated monthly or annually | representative continuous 12-month period or all batches in the declared shorter campaign | every included site and line | sum released net mass by product and route; no cross-route averaging before separate results are available | calibration, laboratory method, batch release, flow-selection record, dispatch reconciliation |
| `cp_material_inputs` | all material-consuming processes | feedstocks, acetic acid, water, cultures, ingredients, auxiliaries, and internal transfers | receiving, inventory, recipe, meter, and transfer records | material identity; supplier; flow UUID; batch; route; quantity; unit; concentration; density; opening stock; receipts; closing stock; returns; internal transfer | Reconcile purchasing and stock movement with batch issues; separate internal recirculation from external inputs | kg or declared native unit with conversion evidence | each receipt and batch | same period as product output | every included site and route | consumption equals opening stock plus receipts minus closing stock, returns, and documented transfers; normalize after route separation | supplier specification, scale or meter calibration, stock reconciliation, batch sheet |
| `cp_energy_utilities` | all processes | electricity, fuels, steam, cooling, water, and cleaning utilities | sub-meter, invoice, and operating records | meter id; carrier; opening and closing reading; quantity; unit; process or line; operating hours; allocation driver | Prefer process sub-meters; otherwise allocate facility totals using a documented physical driver and reconcile to invoices | declared energy or mass unit | continuous or per batch; aggregate monthly | same period as product output | every included site | subtract excluded uses, assign direct meters, allocate residual documented totals, then normalize to the applicable process output | meter calibration, invoice reconciliation, allocation worksheet |
| `cp_process_operation` | `alcoholic_fermentation`; `acetification`; `acetic_acid_formulation`; `finishing` | route and operating state | batch log and control-system record | route; equipment; start and end time; input and output batch; technology; aeration or mixing basis; temperature; aging duration; filtration; thermal treatment; rework | Capture contemporaneous batch and control-system records; link all internal intermediate transfers | declared operating units | each batch | all batches in reporting period | every included line | retain batch-level route identity; aggregate only like products and technologies | signed batch record, control-system export, deviation log |
| `cp_process_outputs` | `feedstock_preparation`; `alcoholic_fermentation`; `acetification`; `acetic_acid_formulation` | internal intermediate outputs | calibrated vessel, scale, and transfer records | intermediate identity; batch; mass or volume; density; concentration; sender; receiver; losses | Reconcile sender and receiver transfer records and use measured density for volume conversion | kg | each transfer | all transfers in reporting period | every included site | sum reconciled accepted transfers; keep route-specific intermediates separate | calibration, paired transfer records, mass-balance reconciliation |
| `cp_waste_emissions` | all processes | wastes, wastewater, and direct emissions | waste tickets, wastewater meters and analyses, emission monitors, and calculation records | flow identity; state; quantity; unit; destination; treatment; fossil or biogenic basis; sampling and calculation method | Measure at source where possible; otherwise use a documented calculation from collected activity data without inventing factors | kg or declared emission unit | each shipment, discharge, sample, or batch; aggregate monthly | same period as product output | every included site and discharge point | sum by flow and destination; keep measured and calculated results separate before normalization | manifests, laboratory reports, meter calibration, formula and input trace |
| `cp_packaging_records` | `packaging` | packaging materials, packed product, and scrap | bill of materials, issue, count, fill-weight, and reject records | packaging material; supplier; flow UUID; item mass; units issued; units packed; rejects; net fill mass | Reconcile packaging issues and rejects to packed units; verify count-to-mass conversion with measured item mass | kg | each packaging run | all included runs in reporting period | every included packaging line | sum by packaging material; normalize to net product mass, not gross packed mass | packaging specification, sample weighing, fill-control and reject records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = route-specific inventory amount divided by released net product mass for the same route, site, and period | collected inventory amount; released net product mass | amount per 1 kg reference product |  |
| `calc_volume_to_mass` | any volume-based liquid record | mass = measured volume multiplied by product- or batch-specific measured density at the documented condition | volume; density; measurement temperature and method | kg liquid |  |
| `calc_mass_reconciliation` | each foreground process | reconcile external inputs plus internal received transfers with product, internal sent transfers, waste, emissions, stock change, and documented measurement difference; investigate rather than force-close material differences | all measured mass inputs, outputs, transfers, stock changes, waste, and emissions | process mass-balance check and disclosed residual | `jrc-fdm-bref-2019` |
| `calc_allocation` | shared processes | apply the documented hierarchy in Section 7 after direct assignment; retain the chosen driver and all numerator and denominator values | directly assigned records; co-product quantities; physical driver or economic data | allocated inventory by product | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and material flows | Product form, route, substrate or acetic-acid origin, physical state, packaging state, and selected flow UUID shall be traceable. The representative UUID requires an explicit exact-use statement; all replacements require a reason. | product specification, batch record, supplier record, Tiangong flow readback or selection record |
| `dq_measurement` | mass, volume, energy, water, waste, and emission data | Use calibrated instruments or reconciled records; retain conversions, density, sampling, laboratory, and allocation methods. | calibration certificates, invoices, meter logs, laboratory reports, reconciliation worksheets |
| `dq_temporal` | all foreground records | Cover a representative 12-month period or all batches in a shorter declared campaign and explain shutdowns, seasonal effects, and excluded batches. | production calendar, batch list, period completeness check |
| `dq_completeness` | process map and inventory | Check every applicable process and all material, energy, water, product, waste, wastewater, and direct-emission pathways; quantify or justify each exclusion. | signed boundary checklist, mass balance, utility and waste reconciliation |
| `dq_route_separation` | multi-route plants | Preserve separate activity and output data for fermentation vinegar and acetic-acid substitutes before any aggregation. | route-coded batch records, sub-meters or documented allocation records |
| `dq_source_fitness` | upstream datasets and external rules | Match upstream geography, technology, time, and product identity; disclose proxies and do not convert jurisdiction-specific product specifications into universal limits. | dataset metadata, source applicability note, proxy register |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_category_and_route` | product identity | Confirm that the product belongs to CPC 3.0 code 23994 and that exactly one product route is declared. A formulated acetic-acid substitute shall not be labelled or modelled as fermentation vinegar. | `unsd-cpc-v3-2025`; `eu-commission-2016-263`; `us-fda-cpg-562-100` |
| `validate_reference_identity` | reference flow | Confirm 1 kg net mass, Mass UUID, Units of mass UUID, kg, required qualifiers, and selected product-flow UUID. Fail if the representative UUID is used for a substitute or materially different form without a documented proxy and no more specific real flow search. |  |
| `validate_route_processes` | process map | Fermentation-vinegar packages shall include acetification and shall include feedstock preparation or alcoholic fermentation when performed on site. Substitute packages shall include food-grade acetic acid formulation. All packages shall include finishing and conditional packaging. | `spain-rd-661-2012-consolidated-2026`; `mas-et-al-2014-wine-vinegar` |
| `validate_boundary_completeness` | foreground inventory | Check applicable material, energy, water, cleaning, internal transfer, waste, wastewater, direct-emission, and product rows against source records and investigate unexplained mass-balance residuals. | `jrc-fdm-bref-2019` |
| `validate_allocation` | shared processes | Verify direct assignment was attempted first, the selected allocation relationship is relevant and documented, and economic allocation is used only after the earlier hierarchy steps are shown infeasible. | `eu-pef-2021-2279` |
| `validate_temporal_coverage` | reporting period | Verify the production, material, utility, waste, emission, and product-output records cover the same declared period and sites, with gaps disclosed. | `jrc-fdm-bref-2019` |
| `validate_packaging_state` | plant-gate output | Confirm that packaging inventory is present when the output is packaged and absent or separately excluded when the declared output is bulk; product mass shall remain net of packaging. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for one declared vinegar or edible acetic-acid-based vinegar substitute at the plant gate |
| downstream_use | `secondary_dataset`; `background_dataset` when product, route, geography, time, technology, and packaging state are representative for the receiving model |
| allowed_use | Product carbon-footprint and LCA studies, foreground process construction, supplier-data replacement, and background use within the declared product and route scope |
| excluded_use | Silent substitution between fermentation vinegar and acetic-acid substitutes; use of the representative UUID for another form without the required replacement check; consumer-use or cradle-to-grave claims without added downstream stages; comparative assertions when representativeness differs materially |
| required_metadata | canonical PCR id; CPC coordinate; product name and form; route; substrate or acetic-acid origin; acid strength and method; physical and packaging state; selected flow UUID and replacement reason; geography; site and technology; reporting period; boundary; allocation; upstream datasets; data-owner and review status |
| required_quality_disclosure | primary-data share; measurement and calibration basis; period and site coverage; route separation; mass-balance residuals; allocation choices; proxy flows and datasets; excluded processes; wastewater and emission coverage; uncertainty and review status |
| update_trigger | Change in product form, route, feedstock or acetic-acid source, technology, site, acid specification, packaging state, allocation, material supplier, energy mix, wastewater treatment, reporting period, governing market specification, or availability of a more specific real Tiangong product flow |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-2025` | `dataset` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 23994, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-08-10 | Category scope and title |
| `eu-commission-2016-263` | `standard` | Commission Regulation (EU) 2016/263, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0263, retrieved 2026-08-10 | Distinction and common food-category treatment of agricultural-origin vinegar and edible diluted acetic acid |
| `spain-rd-661-2012-consolidated-2026` | `standard` | Spain, Real Decreto 661/2012 consolidated through 27 February 2026, ELI https://www.boe.es/eli/es/rd/2012/04/13/661/con, retrieved 2026-08-10 | Current official examples of vinegar definitions, permitted process routes, raw materials, finishing, packaging, and quality disclosure; jurisdiction-specific limits are not universal PCR defaults |
| `us-fda-cpg-562-100` | `official_guidance` | U.S. FDA CPG Sec. 562.100, Acetic Acid - Use in Foods - Labeling of Foods in Which Used, https://www.fda.gov/regulatory-information/search-fda-guidance-documents/cpg-sec-562100-acetic-acid-use-foods-labeling-foods-which-used, retrieved 2026-08-10 | Product identity separation between vinegar and diluted food-grade acetic acid |
| `mas-et-al-2014-wine-vinegar` | `literature` | Mas, Torija, García-Parrilla and Troncoso, Acetic Acid Bacteria and the Production and Quality of Wine Vinegar, 2014, DOI 10.1155/2014/394671 | Fermentation-vinegar process decomposition, aerobic acetification technologies, aging, and quality determinants |
| `jrc-fdm-bref-2019` | `official_guidance` | European Commission JRC, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, EUR 29978 EN, DOI 10.2760/243911 | Common food-manufacturing operations and foreground collection priorities for water, energy, cleaning, emissions, and wastewater |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:02021H2279-20211230, retrieved 2026-08-10 | System boundary, multifunctionality, subdivision, physical allocation, and fallback allocation hierarchy |
