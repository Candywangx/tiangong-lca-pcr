---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.non-alcoholic-beer
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Non-alcoholic beer

## 1. Scope and Applicability

This PCR applies to foreground production of finished non-alcoholic beer and comparable yeast-fermented malt, cereal, ginger, or herb beverages placed on the market as non-alcoholic under the declared jurisdiction. It covers products made by controlled or arrested fermentation, physical alcohol removal, blending, or combinations of these routes. The producer shall declare the formulation family, alcohol-control route, measured alcohol content, applicable legal or market threshold, carbonation state, stabilization route, and packaging format.

The foreground boundary begins with receipt of brewing ingredients, treatment chemicals, packaging materials, and purchased utilities at the production site and ends with released packaged product at the brewery or beverage plant gate. Upstream production of ingredients, packaging, fuels, electricity, and other purchased inputs is represented by linked upstream datasets. Distribution, retail refrigeration, serving, consumer use, and packaging end-of-life are excluded from the gate dataset unless a broader study adds them as separate downstream processes.

Alcoholic beer outside the declared non-alcoholic specification, unfermented soft drinks not marketed as a fermented beer-type beverage, and brewery co-products sold as separate reference products are outside the reference product definition. They may appear only as inputs, outputs, or separately modelled co-products.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.beverages.non-alcoholic-beer |
| classification_refs | CPC 3.0: 24492 Non-alcoholic beer |
| covered_products | Finished non-alcoholic malt or cereal beverages and comparable yeast-fermented ginger or herb beers that meet the declared jurisdictional or market specification |
| excluded_products | Alcoholic beer outside the declared non-alcoholic specification; unfermented soft drinks not marketed as fermented beer-type beverages; upstream malt or ingredient production as foreground; downstream distribution, retail, serving, and end-of-life |
| representative_product | Packaged non-alcoholic fermented beverage released at the production-site gate |
| production_route | Ingredient preparation and wort production; fermentation and conditioning; optional alcohol-control treatment; stabilization, filling, and packaging |
| market_state | Finished liquid beverage, carbonated or still, in the declared primary packaging at plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a finished non-alcoholic beer-type beverage meeting the declared formulation and alcohol specification |
| How much | 1 kg net beverage mass |
| How well | Released product meeting declared alcohol content, formulation, carbonation, stabilization, and packaging specifications |
| How long or cycle | One released production lot at the plant gate; no storage or service duration is included |
| reference_flow_link | The reference flow is the net beverage mass required to deliver the functional unit; packaging is recorded separately as an input |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Non-alcoholic beer `6fe10289-5a7d-4ca7-a73c-e698bca5a320` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | applicable non-alcoholic definition and threshold; measured alcohol content and test method; formulation family; fermentation and alcohol-control route; carbonation state; pasteurization or sterile-filling status; primary packaging format; production geography and period; density and temperature when volume is converted to mass |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory to 1 kg of released net beverage, excluding primary and secondary packaging mass. |
| `volume_to_mass_conversion` | beverage quantities recorded by volume | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Convert volume to mass using product-specific measured density at a declared temperature; retain the volume, density, temperature, and calculation record. |
| `alcohol_content_measurement` | product qualification | Alcohol by volume | % vol | Record the measured alcohol content, analytical method, sampling date, and applicable jurisdictional threshold; do not infer compliance from the product name alone. |
| `packaging_mass_separation` | packaging inputs | Mass | kg | Report each packaging material by measured or supplier-declared mass and keep packaging mass outside the 1 kg net beverage reference amount. |
| `batch_mass_balance` | all liquid and solid process stages | Mass | kg | Reconcile ingredient, intermediate, product, co-product, loss, waste, and wastewater records on the same batch and period basis before normalization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Ingredients, process aids, packaging, and utilities are received at the foreground facility with quantity, supplier, composition or grade, and upstream dataset references declared |
| starting_condition_role | Gate-to-gate foreground starting condition with linked cradle-to-gate background datasets for purchased inputs |
| product_classification_scope | Finished non-alcoholic beer-type beverages within the semantic product scope; CPC 3.0 code 24492 is mapping context rather than canonical identity |
| recursive_input_rule | A purchased intermediate non-alcoholic beer within the same category is recorded once as an input and linked to an upstream dataset; its production is not recursively rebuilt inside this foreground package |
| upstream_dataset_requirement | Use representative upstream datasets for all material ingredients, packaging, fuels, electricity, water supply, treatment chemicals, and external waste or wastewater treatment |
| disclosure | Declare product route, facility boundary, excluded operations, allocation choices, data period, geography, alcohol specification, packaging format, outsourced operations, and any same-category intermediate input |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_core_brewing` | foreground production | Include ingredient receiving and handling, wort preparation, fermentation, conditioning, stabilization, filling, packaging, on-site utilities, cleaning, and wastewater handling when performed by or for the reporting facility. | us-epa-ap42-malt-beverages-1996 |
| `boundary_route_specific_alcohol_control` | alcohol-control route | Include fermentation arrest, dilution or blending, membrane separation, thermal alcohol removal, recovered alcohol handling, and associated energy, water, media, losses, and emissions whenever used; disclose omitted route stages as not applicable. |  |
| `boundary_direct_releases` | site emissions and wastes | Include measured or calculated fermentation carbon dioxide and volatile organic releases, combustion and refrigerant emissions, wastewater, sludge, spent yeast, spent grain, trub, filter media, cleaning losses, and packaging rejects. | us-epa-ap42-malt-beverages-1996 |
| `boundary_purchased_inputs` | upstream supply | Link each purchased material, packaging component, energy carrier, water supply, and outsourced treatment service to an upstream dataset; do not treat missing upstream burdens as zero. | iso-14044-lca-2006 |
| `boundary_downstream_exclusion` | gate dataset | Exclude distribution, retail, serving, consumer refrigeration, and end-of-life from this gate dataset and disclose them as downstream exclusions. | iso-14044-lca-2006 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `brewhouse_preparation` | Ingredient handling and wort preparation | required | Always | Foreground brewing and ingredient conversion | kg cooled wort transferred to fermentation |
| `fermentation_conditioning` | Fermentation and conditioning | required | Always | Foreground biological conversion and product conditioning | kg conditioned beverage transferred onward |
| `alcohol_control` | Route-specific alcohol control | conditional | Include when a distinct arrest, separation, dilution, or blending operation changes alcohol content after or during fermentation | Foreground alcohol-content control | kg alcohol-controlled beverage output |
| `packaging_release` | Stabilization, filling, packaging, and release | required | Always | Foreground final product preparation | 1 kg released net beverage |
| `site_services` | Utilities, cleaning, and wastewater management | required | Always; allocate shared services to the reporting product | Cross-cutting foreground support | service quantities allocated to 1 kg released net beverage |

### Process: Ingredient handling and wort preparation (`brewhouse_preparation`)

#### Inputs

##### Product flows

###### Brewing and formulation water (`brewing_water`)

Record water incorporated into the beverage or used directly in wort preparation. Cleaning water belongs under site services.

- Selected flow: Water, process quality
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-formula water delivered to wort and formulation operations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brewhouse_batch_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional brewing-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fermentable ingredients and botanical materials (`fermentable_ingredients`)

Record malt, cereal adjuncts, sugars, ginger, herbs, or other declared fermentable formulation materials separately in the foreground package.

- Selected flow: Fermentable ingredients and botanical materials
- Flow property / unit: Mass / kg
- Amount rule: Accepted mass from batch sheets, weigh scales, or supplier delivery records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brewhouse_batch_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional fermentable-material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Hops, yeast, and process aids (`brewing_aids`)

Record hops or extracts, yeast additions, enzymes, filtration aids, salts, acids, and other recipe or processing aids by material.

- Selected flow: Brewing ingredients and process aids
- Flow property / unit: Mass / kg
- Amount rule: Mass issued to the production lot from batch and inventory records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brewhouse_batch_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional brewing-aid QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Brewhouse electricity and thermal energy (`brewhouse_energy`)

Record metered electricity and delivered fuel or steam used for milling, mashing, boiling, pumping, separation, and wort cooling.

- Selected flow: Electricity and thermal energy
- Flow property / unit: Energy / MJ
- Amount rule: Metered process energy or allocated facility energy calculated from verified meters and operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_brewhouse_energy_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional brewhouse-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 30
  - Unit: MJ
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cooled wort transferred to fermentation (`cooled_wort`)

Record the mass of wort after solids separation and cooling at the transfer point to fermentation.

- Selected flow: Cooled wort
- Flow property / unit: Mass / kg
- Amount rule: Measured vessel transfer mass or volume converted with measured density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_brewhouse_batch_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional wort-yield QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recovered brewers grain or trub (`recovered_brewhouse_residue`)

Record separately measured residue only as a product output when it leaves the system with a documented beneficial use and meets the declared co-product criterion.

- Selected flow: Recovered brewers grain or trub
- Flow property / unit: Mass / kg
- Amount rule: Measured wet and, where relevant, dry mass dispatched for beneficial use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brewhouse_batch_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional recovered-residue QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg wet residue
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Discarded spent grain, trub, and filter residue (`brewhouse_solid_waste`)

Record residues without documented beneficial use as waste outputs to the actual treatment route.

- Selected flow: Brewery organic solid waste
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass leaving brewhouse operations for treatment or disposal
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_brewhouse_batch_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional brewhouse-waste QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg wet waste
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct brewhouse air emissions (`brewhouse_air_emissions`)

Record measured or method-calculated particulate matter, combustion emissions, and volatile releases that cross the site boundary during ingredient handling, boiling, and residue drying.

- Selected flow: Direct brewhouse emissions to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific measured emissions or calculation from recorded fuel and approved factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_brewhouse_energy_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional direct-emissions QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg pollutant
  - Basis: per 1 kg released net beverage and pollutant
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Fermentation and conditioning (`fermentation_conditioning`)

#### Inputs

##### Product flows

###### Cooled wort input (`wort_to_fermentation`)

Record the same transfer quantity reported as cooled wort output from the brewhouse process.

- Selected flow: Cooled wort
- Flow property / unit: Mass / kg
- Amount rule: Matched inter-process transfer mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fermentation_batch_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional wort-transfer QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fermentation, cooling, and conditioning energy (`fermentation_energy`)

Record electricity and thermal energy for fermentation control, cooling, storage, filtration, carbonation, and stabilization before final filling.

- Selected flow: Electricity and thermal energy
- Flow property / unit: Energy / MJ
- Amount rule: Metered energy or verified allocation from shared refrigeration and utility meters
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fermentation_batch_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional fermentation-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 20
  - Unit: MJ
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased carbonation gas (`purchased_carbon_dioxide`)

Record purchased carbon dioxide used for carbonation or inerting; separately record internally recovered carbon dioxide to prevent double counting.

- Selected flow: Carbon dioxide, beverage grade
- Flow property / unit: Mass / kg
- Amount rule: Supplier quantity or mass-flow record issued to the product lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_batch_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional carbonation-gas QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned beverage transferred onward (`conditioned_beverage`)

Record beer or beer-type beverage after fermentation, aging, clarification, and conditioning and before any distinct alcohol-control or packaging process.

- Selected flow: Conditioned beer-type beverage
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass or volume converted with measured density
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fermentation_batch_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional conditioned-beverage QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1.5
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recovered fermentation carbon dioxide or yeast (`recovered_fermentation_outputs`)

Record carbon dioxide or yeast as product outputs only when separately measured, meeting a declared specification, and dispatched for internal substitution or external beneficial use.

- Selected flow: Recovered carbon dioxide or yeast
- Flow property / unit: Mass / kg
- Amount rule: Separately measured recovered output mass with destination and quality record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_batch_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional recovered-output QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Surplus yeast and filtration residue (`fermentation_residue_waste`)

Record surplus yeast, filtration media, and conditioning residues sent to treatment without beneficial-use status.

- Selected flow: Fermentation and filtration residue waste
- Flow property / unit: Mass / kg
- Amount rule: Measured wet mass by treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fermentation_batch_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional fermentation-residue QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.3
  - Unit: kg wet waste
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fermentation carbon dioxide and volatile releases (`fermentation_air_emissions`)

Record unrecovered biogenic carbon dioxide and measured or method-calculated ethanol and other volatile releases from fermentation, conditioning, storage, and filtration.

- Selected flow: Fermentation emissions to air
- Flow property / unit: Mass / kg
- Amount rule: Pollutant-specific measured release or calculation from recorded fermentation and approved factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fermentation_batch_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional fermentation-emissions QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg pollutant
  - Basis: per 1 kg released net beverage and pollutant
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Route-specific alcohol control (`alcohol_control`)

#### Inputs

##### Product flows

###### Beverage entering alcohol control (`beverage_to_alcohol_control`)

Record the mass and measured alcohol content of the beverage entering a distinct arrest, separation, dilution, or blending stage.

- Selected flow: Fermented or partly fermented beer-type beverage
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass and inlet alcohol content
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_alcohol_control_records`
- Sources: `ttb-malt-beverage-alcohol-content-2023`
- Range: Provisional alcohol-control input QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 2
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Alcohol-control energy and process media (`alcohol_control_services`)

Record route-specific electricity, heat, vacuum, water, membrane or adsorbent replacement, and other process aids separately where the route uses them.

- Selected flow: Alcohol-control energy and process media
- Flow property / unit: Energy / MJ
- Amount rule: Metered energy plus separately recorded replacement media; preserve original units by item
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg alcohol-controlled beverage output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_alcohol_control_records`
- Sources:
- Range: Provisional alcohol-control energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: MJ
  - Basis: per 1 kg alcohol-controlled beverage output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Alcohol-controlled beverage (`alcohol_controlled_beverage`)

Record output mass, measured alcohol content, and route yield before transfer to final stabilization and packaging.

- Selected flow: Alcohol-controlled non-alcoholic beer-type beverage
- Flow property / unit: Mass / kg
- Amount rule: Measured transfer mass passing the declared alcohol specification
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_alcohol_control_records`
- Sources: `ttb-malt-beverage-alcohol-content-2023`
- Range: Provisional alcohol-controlled-yield QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1.5
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Recovered ethanol or concentrate (`recovered_alcohol_output`)

Record recovered ethanol or concentrate as a product output only when separately measured, meeting a specification, and dispatched for documented beneficial use.

- Selected flow: Recovered ethanol or alcoholic concentrate
- Flow property / unit: Mass / kg
- Amount rule: Measured recovered mass and composition with destination record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_alcohol_control_records`
- Sources:
- Range: Provisional recovered-alcohol QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Alcohol-control wastewater and spent media (`alcohol_control_waste`)

Record wastewater, spent membranes, adsorbents, and unrecovered concentrates by actual treatment route.

- Selected flow: Alcohol-control waste
- Flow property / unit: Mass / kg
- Amount rule: Measured waste mass or discharge volume converted with measured density
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg alcohol-controlled beverage output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_alcohol_control_records`
- Sources:
- Range: Provisional alcohol-control waste QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg alcohol-controlled beverage output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Stabilization, filling, packaging, and release (`packaging_release`)

#### Inputs

##### Product flows

###### Bulk non-alcoholic beverage (`bulk_beverage_to_packaging`)

Record the qualified bulk beverage entering final stabilization or filling, including measured alcohol content.

- Selected flow: Bulk non-alcoholic beer-type beverage
- Flow property / unit: Mass / kg
- Amount rule: Matched transfer mass entering the packaging process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `ttb-malt-beverage-alcohol-content-2023`
- Range: Provisional bulk-beverage QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.2
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary, secondary, and tertiary packaging (`packaging_materials`)

Record each packaging material and component separately, including containers, closures, labels, cartons, trays, film, pallets, and reusable packaging losses.

- Selected flow: Packaging materials by material and component
- Flow property / unit: Mass / kg
- Amount rule: Measured component mass multiplied by accepted packed units, adjusted for recorded rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `iso-14044-lca-2006`
- Range: Provisional packaging-mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Filling and stabilization energy (`packaging_energy`)

Record electricity and heat for final filtration, pasteurization or sterile filling, container preparation, filling, conveying, and packing.

- Selected flow: Electricity and thermal energy
- Flow property / unit: Energy / MJ
- Amount rule: Metered line energy or verified allocation from packaging-line operating records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional packaging-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 10
  - Unit: MJ
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released packaged non-alcoholic beer (`packaged_non_alcoholic_beer`)

This is the declared reference product output. Its amount is net beverage mass; packaging is not included in the 1 kg reference amount.

- Selected flow: Non-alcoholic beer `6fe10289-5a7d-4ca7-a73c-e698bca5a320`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg released net beverage passing product and alcohol-content checks
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol:
- Sources: `ttb-malt-beverage-alcohol-content-2023`
- Range: Reference-product mass-balance check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-lca-2006`

##### Waste flows

###### Filling losses and rejected beverage (`filling_beverage_loss`)

Record spills, start-up and shutdown losses, damaged packs, and rejected beverage by recovery or treatment route.

- Selected flow: Rejected or lost beverage
- Flow property / unit: Mass / kg
- Amount rule: Beverage mass entering packaging minus released product, retained inventory change, and documented recovery
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional filling-loss QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging rejects and scrap (`packaging_scrap`)

Record rejected containers, closures, labels, cartons, films, and other packaging scrap by material and treatment route.

- Selected flow: Packaging waste by material
- Flow property / unit: Mass / kg
- Amount rule: Measured or counted rejected components converted with component mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional packaging-scrap QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Utilities, cleaning, and wastewater management (`site_services`)

#### Inputs

##### Product flows

###### Cleaning and service water (`cleaning_water`)

Record water used for cleaning-in-place, container washing, rinsing, utility generation, and site services, excluding water already recorded as formulation water.

- Selected flow: Water, process quality
- Flow property / unit: Mass / kg
- Amount rule: Metered site or subsystem water less separately metered formulation water, allocated by documented service driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_service_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional service-water QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning chemicals and treatment materials (`cleaning_chemicals`)

Record caustic, acid, sanitizer, detergent, water-treatment chemicals, and wastewater-treatment materials separately.

- Selected flow: Cleaning and treatment chemicals
- Flow property / unit: Mass / kg
- Amount rule: Inventory issue or dosing record allocated to the reporting product and period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_service_records`
- Sources:
- Range: Provisional chemical-use QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Shared site electricity and thermal energy (`site_service_energy`)

Record shared refrigeration, compressed air, steam, hot water, lighting, and treatment energy not already assigned to another process.

- Selected flow: Electricity and thermal energy
- Flow property / unit: Energy / MJ
- Amount rule: Residual metered site energy allocated using documented operating-hour, load, or service-demand drivers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_service_records`
- Sources: `iso-14044-lca-2006`
- Range: Provisional site-service energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 30
  - Unit: MJ
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Process wastewater to treatment (`process_wastewater`)

Record wastewater quantity and route, including alcohol-bearing losses, scrubber water, cleaning effluent, and alcohol-control wastewater without double counting.

- Selected flow: Brewery process wastewater
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge or water balance reconciled with water incorporated in product, evaporation, and other outputs
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_service_records`
- Sources: `us-epa-ap42-malt-beverages-1996`
- Range: Provisional wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater sludge and spent treatment material (`treatment_residue`)

Record sludge, spent carbon, filters, and other treatment residues by measured mass and actual treatment destination.

- Selected flow: Wastewater-treatment residue
- Flow property / unit: Mass / kg
- Amount rule: Measured wet or dry mass with basis and destination declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_site_service_records`
- Sources:
- Range: Provisional treatment-residue QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg
  - Basis: per 1 kg released net beverage
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct utility, treatment, and refrigerant emissions (`site_service_emissions`)

Record pollutant-specific combustion, wastewater-treatment, and refrigerant releases that cross the site boundary and are not already assigned to another process.

- Selected flow: Direct site-service emissions to air or water
- Flow property / unit: Mass / kg
- Amount rule: Measured releases or calculations from recorded fuel, treatment, and refrigerant activity using approved factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg released net beverage
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_site_service_records`
- Sources: `iso-14044-lca-2006`
- Range: Provisional site-emissions QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg pollutant
  - Basis: per 1 kg released net beverage and pollutant
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | all foreground operations | Prefer process subdivision and direct measurement. Assign separately metered ingredients, utilities, emissions, wastes, and packaging to the product lot before any allocation. | iso-14044-lca-2006 |
| `allocation_recovered_outputs` | spent grain, yeast, carbon dioxide, ethanol, and other recovered outputs | Treat an output as a co-product only when it is separately measured, meets a declared specification, and has documented beneficial use. Otherwise record it as waste. If subdivision cannot resolve shared burdens, use a documented physical relationship that reflects the process; use economic allocation only when no defensible physical relationship exists and report a sensitivity result. | iso-14044-lca-2006; us-epa-ap42-malt-beverages-1996 |
| `allocation_recycling_no_avoided_credit` | packaging scrap, organic residues, wastewater products, and recovered materials | Report the actual outgoing material and treatment route. Do not subtract an avoided-production credit inside this gate inventory unless the broader study applies and documents a consistent recycling or substitution method. | iso-14044-lca-2006 |
| `allocation_shared_site_services` | shared utilities, cleaning, refrigeration, and wastewater treatment | Allocate shared services using measured demand where available; otherwise use a documented causal driver such as operating hours, mass throughput, thermal load, or wastewater load. Do not allocate solely by total sales value without justification. | iso-14044-lca-2006 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_brewhouse_batch_records` | `brewhouse_preparation` | ingredients, water, wort, residues, and waste | batch sheets, weigh records, tank levels, density tests, and dispatch records | batch_id; material_id; input_mass; input_volume; density; temperature; wort_output; residue_mass; destination | reconcile signed batch and inventory records to vessel transfers | kg; L; kg/L; °C | each batch | at least one representative continuous 12-month period or all batches if production is shorter | all foreground brewhouse lines producing the declared product | sum batch quantities, adjust opening and closing inventory, then normalize to released net product mass | calibrated scales or meters; batch sign-off; density test; material and destination traceability |
| `cp_brewhouse_energy_records` | `brewhouse_preparation` | electricity, heat, fuel, and direct emissions | submeter, fuel invoice, steam record, operating log, and emissions test or factor record | meter_id; start_reading; end_reading; fuel_quantity; steam_quantity; operating_hours; pollutant; factor; factor_source | read dedicated meters where available and document causal allocation for shared supply | kWh; MJ; kg fuel; kg pollutant | monthly and each material campaign | same period as product output | all brewhouse equipment and on-site residue drying in scope | convert to MJ, calculate pollutant-specific releases, and normalize to released net product mass | meter calibration; invoice reconciliation; factor identity and version; allocation workbook |
| `cp_fermentation_batch_records` | `fermentation_conditioning` | wort, energy, fermentation outputs, residues, and air releases | transfer meter, fermentation log, refrigeration meter, gas-flow record, laboratory result, and waste ticket | batch_id; inlet_mass; inlet_density; yeast_mass; energy; outlet_mass; alcohol_content; recovered_co2; recovered_yeast; residue_mass; vent_measurement | reconcile vessel transfers and laboratory release records for each lot | kg; L; kg/L; MJ; % vol | each batch with monthly utility reconciliation | same period as product output | all fermentation, aging, filtration, and conditioning vessels in scope | calculate transfers, recovery, losses, and emissions on a batch basis and normalize to released net product mass | calibrated transfer and gas meters; laboratory QA; vessel reconciliation; waste destination records |
| `cp_alcohol_control_records` | `alcohol_control` | inlet and outlet beverage, alcohol content, energy, media, recovered alcohol, and waste | process run log, transfer meter, laboratory result, energy meter, media replacement, recovery log, and waste manifest | run_id; route; inlet_mass; inlet_abv; outlet_mass; outlet_abv; energy; water; media_mass; recovered_ethanol; wastewater; waste_destination | record every alcohol-control run and preserve inlet/outlet mass and alcohol analysis | kg; L; % vol; MJ | each run | same period as product output | every alcohol-control unit or contracted operation used for the product | reconcile route-specific mass and alcohol balance and normalize accepted output to released net product mass | analytical method and calibration; meter records; recovery specification; contractor data when outsourced |
| `cp_packaging_release_records` | `packaging_release` | bulk beverage, packaging, energy, released product, filling loss, and rejects | filler counters, tank levels, component specifications, weigh checks, line meters, release certificate, and reject log | lot_id; inlet_mass; density; packed_units; net_content; component_mass; energy; rejected_units; beverage_loss; release_abv | reconcile line input, released output, rejects, and inventory change for each product-format lot | kg; item; kg/item; MJ; % vol | each packaging lot | same period as product output | all filling and packaging lines producing the declared product | calculate net beverage output and component masses by format, then normalize to 1 kg net beverage | legal metrology or checkweigh records; component specifications; release approval; alcohol test; line reconciliation |
| `cp_site_service_records` | `site_services` | service water, chemicals, shared energy, wastewater, sludge, and direct releases | site and submeter readings, chemical inventory, utility invoices, discharge meter, laboratory analysis, waste ticket, and refrigerant log | period; meter_id; water; energy; chemical_mass; wastewater; concentration; sludge_mass; refrigerant_added; fuel; allocation_driver | reconcile site totals with submetered processes and document residual service allocation | kg; m3; kWh; MJ; mg/L; kg pollutant | monthly with annual reconciliation | same representative period as product output | complete foreground facility, excluding documented unrelated production before allocation | subtract directly assigned use, allocate residual services by causal drivers, and normalize to released net product mass | calibrated meters; invoice balance; discharge laboratory QA; waste manifests; refrigerant service records; allocation review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_to_reference_mass` | all inventory rows | normalized amount = period or batch amount / released net beverage mass for the same scope and period | collected amount; released net beverage mass | amount per 1 kg released net beverage | iso-14044-lca-2006 |
| `calc_volume_to_mass` | beverage, water, and wastewater recorded by volume | mass = measured volume × measured product-specific density at the declared temperature | volume; density; temperature | kg |  |
| `calc_energy_conversion` | electricity, steam, and fuels | preserve original quantity and convert to MJ using a documented unit conversion or fuel property; do not use an unreferenced combustion factor | original energy or fuel quantity; conversion factor | MJ per 1 kg released net beverage | iso-14044-lca-2006 |
| `calc_packaging_mass` | packaging components | packaging mass = accepted packed units × measured or supplier-declared component mass + recorded component rejects | packed units; component mass; reject count or mass | kg packaging by material per 1 kg released net beverage |  |
| `calc_batch_mass_balance` | each production and packaging stage | input mass + opening inventory = outputs + closing inventory + recovered products + wastes + measured or estimated releases; investigate and disclose residual imbalance | all batch mass records and inventory changes | stage balance and unexplained residual | iso-14044-lca-2006 |
| `calc_alcohol_compliance` | product qualification and alcohol-control output | compare measured alcohol content with the explicitly declared jurisdictional or market threshold and retain the analytical method and decision record | measured alcohol content; analytical method; applicable threshold | pass or fail and declared value | ttb-malt-beverage-alcohol-content-2023 |
| `calc_wastewater_load` | wastewater emissions where concentration data exist | pollutant load = discharged volume × measured concentration, with unit conversion and sampling representativeness documented | discharge volume; pollutant concentration; sampling period | kg pollutant per 1 kg released net beverage |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product and each product format | Preserve formulation family, route, alcohol specification, measured alcohol content, carbonation, stabilization, package format, geography, and production period. | approved recipe; product specification; label or market specification; laboratory release result |
| `dq_temporal_representativeness` | all foreground data | Use one continuous representative 12-month period when available; if production is seasonal or shorter, cover all production and disclose the period and missing seasons. | production calendar; meter period; batch list; justification of representativeness |
| `dq_measurement_control` | mass, volume, energy, alcohol, and emission records | Identify instruments and methods, calibration or verification status, conversion factors, and data owners; distinguish measured, calculated, and estimated values. | calibration certificates; laboratory QA; meter register; calculation workbook |
| `dq_completeness` | process map and inventory | Cover every required process and every applicable conditional process; reconcile material, alcohol, packaging, water, and energy balances and disclose excluded or unquantified flows. | process-flow diagram; balance checks; exclusion register; missing-data log |
| `dq_supplier_and_background_links` | purchased inputs and services | Record supplier, grade or composition, geography, time period, and upstream dataset reference for material inputs; document proxy selection and substitution when exact data are unavailable. | purchase record; specification; supplier declaration; dataset mapping register |
| `dq_allocation_and_outsourcing` | shared services, co-products, and contracted operations | Preserve subdivision, allocation drivers, co-product criteria, sensitivity results, and contractor data boundaries. | allocation workbook; dispatch records; contractor inventory; sensitivity calculation |
| `dq_provisional_ranges` | all reasoned-estimate ranges | Treat provisional ranges only as QA screens; they shall not overwrite valid foreground records and shall be replaced or explicitly accepted during methodology review before publication. | QA report; reviewer decision; source update record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require exactly 1 kg net beverage using the declared Tiangong product flow, Mass property, units-of-mass group, and kg unit. |  |
| `validate_required_qualifiers` | dataset metadata | Fail completeness when any required qualifier is missing, including applicable alcohol threshold, measured alcohol content and method, formulation family, route, carbonation, stabilization, packaging, geography, period, and density basis where used. | ttb-malt-beverage-alcohol-content-2023 |
| `validate_alcohol_claim` | released product | Require a measured alcohol result and compare it with the declared jurisdictional or market specification; do not assume one global threshold or infer compliance from the product name. | ttb-malt-beverage-alcohol-content-2023 |
| `validate_process_coverage` | process inventory | Require brewhouse preparation, fermentation and conditioning, packaging and release, and site services; require the alcohol-control process whenever a distinct arrest, separation, dilution, or blending stage is declared. | us-epa-ap42-malt-beverages-1996 |
| `validate_interprocess_transfers` | wort, conditioned beverage, and bulk beverage | Match each inter-process output and input on the same mass, density, lot, and inventory-change basis; explain any difference. |  |
| `validate_mass_balance` | each process and reporting period | Flag unexplained stage or site mass-balance residuals and prohibit balancing by silently deleting losses, wastes, recovered outputs, or emissions. | iso-14044-lca-2006 |
| `validate_no_double_counting` | water, energy, recovered carbon dioxide, packaging, wastewater, and shared services | Ensure formulation and cleaning water, direct and shared energy, purchased and recovered carbon dioxide, packaging mass and net beverage mass, and process-specific and site wastewater are not double counted. |  |
| `validate_allocation` | co-products and shared services | Require documented subdivision or allocation driver, co-product criterion, and sensitivity when economic allocation is used. | iso-14044-lca-2006 |
| `validate_range_use` | provisional reasoned estimates | Treat values outside provisional ranges as review flags rather than automatic errors when verified foreground evidence is present; reject substitution of a provisional midpoint for missing foreground data without disclosure. |  |
| `validate_sources_and_background` | external evidence and purchased inputs | Require every cited source id to resolve and every material purchased input or treatment service to have an upstream dataset or a disclosed data gap. | iso-14044-lca-2006 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground gate-to-gate production dataset for finished packaged non-alcoholic beer, with linked upstream inputs and explicit direct releases |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product and facility LCA, supply-chain inventory, footprint screening, and lifecyclemodel construction when the declared product route, alcohol specification, packaging, geography, period, and boundary match the study |
| excluded_use | Comparative public claims without review; alcoholic beer or unrelated soft drinks; use-phase or full cradle-to-grave results without added downstream stages; substitution of provisional QA ranges for site records |
| required_metadata | canonical PCR id; product and formulation; applicable alcohol definition and threshold; measured alcohol content and method; route; package format and component masses; geography; production period; facility boundary; process coverage; allocation; upstream dataset links; data gaps |
| required_quality_disclosure | measured versus calculated versus estimated shares; meter and laboratory QA; temporal and geographic representativeness; mass and alcohol balance; completeness; allocation sensitivity; source-backed and provisional ranges; outsourced data quality |
| update_trigger | Material change in formulation, alcohol-control technology, energy or water system, package format, facility boundary, allocation, legal product definition, upstream dataset, or a change exceeding the producer's documented significance threshold |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ttb-malt-beverage-alcohol-content-2023` | official_guidance | U.S. Alcohol and Tobacco Tax and Trade Bureau, “Malt Beverage Labeling: Alcohol Content,” TTB G 2023-2, https://www.ttb.gov/regulated-commodities/beverage-alcohol/beer/labeling/malt-beverage-alcohol-content (retrieved 2026-08-11) | Product qualification evidence; measured alcohol declaration; illustration of jurisdiction-specific non-alcoholic and alcohol-free thresholds |
| `us-epa-ap42-malt-beverages-1996` | official_guidance | U.S. Environmental Protection Agency, AP-42 Section 9.12.1, “Malt Beverages,” October 1996, https://www.epa.gov/sites/default/files/2020-10/documents/c9s12-1.pdf (retrieved 2026-08-11) | Brewing process decomposition; fermentation, conditioning, packaging, residues, wastewater, and direct-emission flow candidates |
| `iso-14044-lca-2006` | standard | ISO 14044:2006, “Environmental management — Life cycle assessment — Requirements and guidelines,” https://www.iso.org/standard/38498.html (confirmed current in 2022; retrieved 2026-08-11) | Goal and scope, life-cycle inventory structure, allocation hierarchy, reporting, and interpretation requirements |
