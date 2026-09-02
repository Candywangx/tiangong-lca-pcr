---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.starches-inulin-wheat-gluten-dextrins-and-other-modified-starches
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Starches; inulin; wheat gluten; dextrins and other modified starches

## 1. Scope and Applicability

This PCR governs foreground production data packages for products within CPC 3.0 subclass 23220: native starches from plant feedstocks; inulin; wheat gluten; dextrins; and physically, enzymatically, or chemically modified starches. It covers bulk or packaged products at the manufacturing plant gate and route-specific operations from receipt of the declared plant or intermediate feedstock through separation or extraction, refining, optional modification, concentration or drying, product finishing, and on-site waste and emission management.

The category is broader than the available representative Tiangong flow. `Starch` is therefore only the representative product form for this PCR. A data producer must declare the concrete product form and must replace the representative flow with a more specific real Tiangong flow whenever one exists. The representative Starch UUID must never be silently assigned to inulin, wheat gluten, dextrins, modified starches, or a more specific starch identity.

This PCR excludes starch-derived sweeteners, glucose and fructose syrups, polyols, ethanol, finished foods, paper products, adhesives, textiles, and other downstream articles. It also excludes agricultural production before the received feedstock and downstream distribution, use, and end of life unless the declared study explicitly adds those stages with separate datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.starches-inulin-wheat-gluten-dextrins-and-other-modified-starches |
| classification_refs | CPC 3.0:23220, exact scope reference |
| covered_products | Native plant starches; inulin; wheat gluten; dextrins; physically, enzymatically, or chemically modified starches |
| excluded_products | Starch sweeteners and syrups; polyols; ethanol; finished food, paper, adhesive, textile, pharmaceutical, or other downstream formulations and articles |
| representative_product | Starch, represented by Tiangong flow `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3`; representative product form only, not a default identity for other covered forms |
| production_route | Route-specific plant-component separation or extraction, refining, optional modification, concentration or drying, and finishing at the manufacturing site |
| market_state | Declared as-sold bulk or packaged powder, granule, wet cake, slurry, paste, or other specified commercial state at plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide the declared CPC 23220 starch, inulin, wheat gluten, dextrin, or modified-starch product in its specified commercial form |
| How much | 1 kg of as-sold product at the manufacturing plant gate |
| How well | Conforming to the declared product identity, botanical feedstock, native or modified status, dry-matter or moisture content, purity or grade, and intended technical specification |
| How long or cycle | One production lot at release; shelf life is declared when relevant to the product specification |
| reference_flow_link | 1 kg of the declared product; use the representative Starch flow only for a declared starch product when no more specific real flow exists |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg as-sold product at plant gate |
| Reference product flow | Starch, representative product form only `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | concrete product form; product-specific Tiangong flow decision; botanical feedstock; native, dextrin, inulin, wheat-gluten, or modification identity; modification method and agents when applicable; as-sold physical state; dry-matter or moisture content; purity or grade; production route; plant geography; reference period; packaging state; allocation method |

When constructing a foreground data package, every `Required qualifiers` item must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete. If the concrete product is not generic starch, or if a more specific real starch flow is available, the representative UUID must be replaced and the replacement decision recorded.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_as_sold` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report the reference amount on the declared as-sold basis and record moisture or dry-matter content; do not mix dry-solids and as-sold masses without an explicit conversion. |
| `dry_matter_conversion` | Raw materials, intermediates, products, and co-products | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | When comparing wet and dry streams, retain measured wet mass and solids fraction and calculate dry mass separately. |
| `energy_carrier_separation` | Electricity, steam, and fuels | Declared energy or fuel property | kWh, MJ, kg, or m3 as metered | Keep purchased electricity, imported steam, and each fuel separate; preserve the metered unit and document any conversion factor. |
| `water_accounting` | Fresh, recycled, and discharged water | Declared mass or volume property | kg or m3 | Distinguish fresh intake, internally recycled process water, water embedded in product or co-products, evaporation, and discharged wastewater. |
| `product_flow_identity` | Reference and product outputs | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | The selected product-flow UUID must match the concrete declared form; `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3` is permitted only as the representative Starch identity when no closer real flow exists. |

## 5. System Boundary

The foreground boundary begins when the declared plant raw material or purchased intermediate crosses the manufacturing-site gate and ends when the conforming product is released in its declared bulk or packaged state at the plant gate. Include route-specific separation, extraction, refining, modification, concentration, drying, finishing, internal recycling, cleaning directly attributable to production, on-site utilities used by these operations, and on-site management of wastes, wastewater, and direct emissions.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Received botanical raw material or purchased intermediate with measured mass, moisture or solids, origin, supplier, and product identity |
| starting_condition_role | Foreground manufacturing input at the site gate |
| product_classification_scope | CPC 3.0:23220 products only; route and concrete product form must be declared |
| recursive_input_rule | A purchased native starch, inulin, gluten, dextrin, or modified-starch input is recorded once as an upstream product input and linked to an upstream dataset; do not recursively reapply this foreground route to that input |
| upstream_dataset_requirement | Use supplier-specific or representative upstream datasets for cultivation, primary production, and inbound supply to the declared starting condition; disclose geography, reference period, technology, and data quality |
| disclosure | Declare product form, feedstock, route, plant geography, reference period, allocation, included packaging, on-site treatment, excluded stages, and every substituted product-flow UUID |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground manufacturing | Include all material, energy, water, product, co-product, waste, wastewater, and direct-emission flows attributable to the declared route from the site-gate starting condition to released product. | `ec-pef-recommendation-2021-2279`; `eu-fdm-bref-2019` |
| `boundary_rule_2` | route selection | Include only route processes that actually occur, but record a justified not-applicable decision for each conditional process in the Process Map. | `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7` |
| `boundary_rule_3` | purchased same-category intermediates | Prevent recursion by treating a purchased same-category intermediate as a product input with its own upstream dataset. | `ec-pef-recommendation-2021-2279` |
| `boundary_rule_4` | representative product flow | Never use the representative Starch UUID for another covered form; replace it with a product-specific flow whenever a more faithful real Tiangong identity exists. | `un-cpc-3-0-23220` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receiving` | Raw-material receiving and preparation | required | Always | Foreground receipt, cleaning, size reduction, and feed preparation | Per 1 kg reference product |
| `starch_component_separation` | Starch or wheat-component separation and refining | conditional | Native starch, dextrin, modified-starch, or integrated wheat-gluten route | Foreground wet or dry separation, washing, refining, and intermediate recovery | Per 1 kg reference product |
| `inulin_extraction` | Inulin extraction and purification | conditional | Inulin route | Foreground root preparation, extraction, separation, purification, and concentration | Per 1 kg reference product |
| `wheat_gluten_finishing` | Wheat-gluten isolation and finishing | conditional | Wheat gluten is the declared product or co-product | Foreground gluten separation, dewatering, and optional drying | Per 1 kg reference product |
| `starch_modification` | Dextrinisation or starch modification | conditional | Dextrin or modified starch is declared | Foreground physical, enzymatic, or chemical transformation and post-treatment | Per 1 kg reference product |
| `product_finishing` | Product finishing and plant-gate release | required | Always | Foreground concentration or drying, screening, storage, packaging, and release | 1 kg conforming as-sold product |
| `onsite_residuals_management` | On-site residuals and emission management | conditional | Wastewater, captured dust, organic residues, or direct emissions arise on site | Foreground collection, treatment, recovery, and discharge | Per 1 kg reference product |

### Process: Raw-material receiving and preparation (`raw_material_receiving`)

#### Inputs

##### Product flows

###### Declared botanical raw material or purchased intermediate (`plant_raw_material_input`)

Record the actual feedstock entering the site, such as maize, wheat, potatoes, chicory roots, another declared starch feedstock, wheat flour, or purchased native starch. A purchased CPC 23220 intermediate requires its own upstream dataset and does not inherit the representative Starch UUID.

- Selected flow: Product-specific Tiangong flow to be resolved for the declared feedstock
- Flow property / unit: Mass / kg
- Amount rule: measured received mass by lot, with moisture or solids fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_and_aids`
- Sources: `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

##### Waste flows

###### Removed foreign material and preparation rejects (`preparation_reject_output`)

Measure screenings, soil, stones, damaged roots or grain, and other rejects removed before processing.

- Selected flow: Site-specific waste flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured reject mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproducts_and_wastes`
- Sources: `us-epa-ap42-9-9-7`

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared process feed (`prepared_feed_output`)

Calculate prepared feed as received feed less measured rejects and documented storage or preparation losses.

- Selected flow: Internal intermediate; no external flow UUID required unless it crosses the dataset boundary
- Flow property / unit: Mass / kg
- Amount rule: calculated prepared mass and dry mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_and_aids`
- Sources: `eu-fdm-bref-2019`

##### Waste flows

##### Elementary flows

### Process: Starch or wheat-component separation and refining (`starch_component_separation`)

#### Inputs

##### Product flows

###### Prepared plant feed (`separation_feed_input`)

Transfer the measured prepared feed from the receiving process. Route-specific operations may include dry milling, wet milling or steeping, grinding, screening, centrifugation, washing, and dewatering.

- Selected flow: Internal intermediate matching `prepared_feed_output`
- Flow property / unit: Mass / kg
- Amount rule: transferred prepared mass and dry mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_and_aids`
- Sources: `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

###### Fresh process water (`process_water_input`)

Measure fresh water supplied to steeping, separation, washing, and cleaning while retaining internal recycle separately.

- Selected flow: Site-specific water flow to be resolved
- Flow property / unit: Volume / m3
- Amount rule: metered fresh water attributable to the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_and_water`
- Sources: `eu-fdm-bref-2019`

###### Separation aids and pH-control agents (`processing_aids_input`)

Record each acid, sulfite-bearing agent, enzyme, salt, alkali, filter aid, cleaning chemical retained in the production balance, or other process aid separately when used.

- Selected flow: Product-specific chemical or enzyme flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured issued quantity less documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_and_aids`
- Sources: `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

###### Electricity used for milling and separation (`electricity_input`)

Measure electricity for conveying, milling, screening, centrifugation, pumping, and associated controls.

- Selected flow: Site electricity supply mix to be resolved
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered use or allocation from measured equipment load and operating time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_and_water`
- Sources: `eu-fdm-bref-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Refined starch slurry or separated wheat fractions (`separated_component_output`)

Measure the mass and solids of the refined starch slurry and, for wheat routes, separated gluten and soluble or fibre fractions before finishing.

- Selected flow: Internal route-specific intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass and calculated dry mass by component
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_identity_and_output`
- Sources: `eu-fdm-bref-2019`

###### Marketable germ, fibre, protein, or soluble co-products (`coproduct_output`)

Record each co-product separately with destination, wet mass, solids, and commercial status; do not combine marketable co-products with waste.

- Selected flow: Product-specific co-product flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured shipped or transferred quantity by co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproducts_and_wastes`
- Sources: `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

##### Waste flows

###### Separation wastewater or organic residual (`wastewater_output`)

Record wastewater volume and load at the point it leaves the process for on-site treatment, off-site treatment, or discharge.

- Selected flow: Site-specific wastewater flow to be resolved
- Flow property / unit: Volume / m3
- Amount rule: measured flow with sampled load indicators and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions_and_wastewater`
- Sources: `eu-fdm-bref-2019`

##### Elementary flows

### Process: Inulin extraction and purification (`inulin_extraction`)

#### Inputs

##### Product flows

###### Prepared inulin-bearing feedstock (`inulin_feed_input`)

Record chicory roots or another explicitly declared inulin-bearing feedstock after receiving and preparation.

- Selected flow: Product-specific feedstock flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured feedstock mass with dry matter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming inulin product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_and_aids`
- Sources: `eu-feed-materials-catalogue-68-2013`

###### Extraction water and purification aids (`inulin_water_and_aids_input`)

Measure extraction water and record filtration, decolourisation, ion-exchange, antifoam, and other aids separately when used.

- Selected flow: Product-specific water and aid flows to be resolved
- Flow property / unit: Volume or mass / m3 or kg
- Amount rule: measured quantity by material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming inulin product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_and_aids`
- Sources: `eu-feed-materials-catalogue-68-2013`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Purified or concentrated inulin intermediate (`inulin_intermediate_output`)

Measure the recovered inulin stream and its solids or concentration before final drying or release.

- Selected flow: Product-specific inulin flow to be resolved; never use the representative Starch UUID
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass and calculated dry inulin mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming inulin product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_identity_and_output`
- Sources: `eu-feed-materials-catalogue-68-2013`

###### Chicory pulp, molasses, or vinasses co-products (`inulin_coproduct_output`)

Record each marketable or recovered co-product separately, including whether pulp is pressed or dried and whether the stream is sold, recovered, land-applied, or treated.

- Selected flow: Product-specific co-product flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured quantity, dry matter, and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming inulin product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproducts_and_wastes`
- Sources: `eu-feed-materials-catalogue-68-2013`

##### Waste flows

###### Inulin-route wastewater and spent purification media (`inulin_residual_output`)

Measure wastewater and spent filtration or ion-exchange media by treatment destination.

- Selected flow: Site-specific waste or wastewater flow to be resolved
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured quantity by residual type
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming inulin product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions_and_wastewater`
- Sources: `eu-feed-materials-catalogue-68-2013`

##### Elementary flows

### Process: Wheat-gluten isolation and finishing (`wheat_gluten_finishing`)

#### Inputs

##### Product flows

###### Separated wet gluten stream (`wet_gluten_input`)

Transfer the measured wet-gluten stream from the wheat-component separation process; if purchased, link it to its upstream dataset instead.

- Selected flow: Internal wet-gluten intermediate or purchased product-specific flow
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass and solids fraction
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming wheat-gluten product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_identity_and_output`
- Sources: `eu-fdm-bref-2019`

###### Finishing electricity and thermal energy (`gluten_finishing_energy_input`)

Measure energy used for dewatering, drying, milling, and screening wheat gluten.

- Selected flow: Site-specific electricity, steam, or fuel flows to be resolved separately
- Flow property / unit: Energy or fuel property / kWh, MJ, kg, or m3
- Amount rule: metered or equipment-specific measured use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming wheat-gluten product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_and_water`
- Sources: `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming wheat gluten (`wheat_gluten_output`)

Record the actual wheat-gluten product flow, grade, moisture, and protein specification. Never use the representative Starch UUID.

- Selected flow: Product-specific wheat-gluten Tiangong flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured conforming as-sold output
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg conforming wheat-gluten product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_identity_and_output`
- Sources: `eu-fdm-bref-2019`

##### Waste flows

##### Elementary flows

###### Captured and released drying particulate (`particulate_emission_output`)

Measure captured dust as a waste or recovered product and measured stack particulate as an elementary flow; do not combine the two.

- Selected flow: Product-specific particulate flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured emission or validated calculation from monitoring data
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming wheat-gluten product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_and_wastewater`
- Sources: `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

### Process: Dextrinisation or starch modification (`starch_modification`)

#### Inputs

##### Product flows

###### Declared native starch feed (`native_starch_input`)

Record the native starch slurry, wet cake, or dry starch entering modification, with its botanical origin and solids.

- Selected flow: Product-specific native-starch flow; the representative Starch UUID may be used only when no closer real starch flow exists
- Flow property / unit: Mass / kg
- Amount rule: measured as-sold or wet mass with calculated dry starch mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming dextrin or modified-starch product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_materials_and_aids`
- Sources: `eu-fdm-bref-2019`

###### Modification agents, enzymes, water, and catalysts (`modification_agents_input`)

Record each chemical, enzyme, catalyst, water input, neutralising agent, washing aid, and purification material separately according to the declared modification method.

- Selected flow: Product-specific input flows to be resolved
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured issued amount less documented recovery or return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming dextrin or modified-starch product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_materials_and_aids`
- Sources: `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Modified-starch or dextrin intermediate (`modified_product_intermediate_output`)

Record the product-specific transformed stream after reaction and any washing or dewatering. The concrete modification identity is mandatory.

- Selected flow: Product-specific dextrin or modified-starch flow to be resolved; never default to the representative Starch UUID
- Flow property / unit: Mass / kg
- Amount rule: measured wet or dry mass with solids and specification status
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming dextrin or modified-starch product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_identity_and_output`
- Sources: `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

##### Waste flows

###### Modification wastewater and spent media (`modification_residual_output`)

Record aqueous residuals, spent media, off-spec material, and recovered agents by destination.

- Selected flow: Site-specific waste or wastewater flow to be resolved
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured quantity by residual type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming dextrin or modified-starch product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions_and_wastewater`
- Sources: `eu-fdm-bref-2019`

##### Elementary flows

###### Direct air emissions from modification and drying (`modification_air_emission_output`)

Record measured particulate, acid mist, volatile organic compounds, sulfur dioxide, or other reportable direct emissions when applicable; do not infer an emission factor from flow identity.

- Selected flow: Pollutant-specific elementary flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured or permit-approved calculation from foreground monitoring
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming dextrin or modified-starch product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_and_wastewater`
- Sources: `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

### Process: Product finishing and plant-gate release (`product_finishing`)

#### Inputs

##### Product flows

###### Route-specific product intermediate (`product_intermediate_input`)

Transfer the route-specific purified, separated, modified, or concentrated intermediate into finishing.

- Selected flow: Internal intermediate matching the declared product route
- Flow property / unit: Mass / kg
- Amount rule: measured transferred mass and solids
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_product_identity_and_output`
- Sources: `eu-fdm-bref-2019`

###### Electricity and thermal energy for finishing (`thermal_energy_input`)

Measure electricity, steam, and fuels used for concentration, dewatering, drying, milling, screening, conveying, and storage separately.

- Selected flow: Site-specific electricity, steam, and fuel flows to be resolved separately
- Flow property / unit: Energy or fuel property / kWh, MJ, kg, or m3
- Amount rule: sub-metered use or documented equipment allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utilities_and_water`
- Sources: `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

###### Packaging materials (`packaging_material_input`)

Record primary, secondary, and tertiary packaging only when included in the declared market state, separated by material and actual mass.

- Selected flow: Packaging-material-specific flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured packaging consumption net of documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `ec-pef-recommendation-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming declared product at plant gate (`reference_product_output`)

Record the actual product-specific Tiangong flow and qualifiers. Use `Starch` `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3` only for a declared starch form when no more specific real flow exists.

- Selected flow: Declared product-specific flow; representative Starch `e5842f16-31b3-4ea4-b16a-f7b06beeb6c3` only under the stated limitation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg conforming as-sold product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg declared reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Sources: `ec-pef-recommendation-2021-2279`

##### Waste flows

###### Off-spec product, captured dust, and packaging waste (`organic_waste_output`)

Measure each residual separately and distinguish rework, recovered co-product, recycling, treatment, and disposal.

- Selected flow: Site-specific waste flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured mass by residual and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproducts_and_wastes`
- Sources: `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

##### Elementary flows

###### Finishing particulate and combustion emissions (`finishing_air_emission_output`)

Record pollutant-specific direct emissions from dryers and on-site combustion using measured monitoring or a documented calculation; captured material remains a waste or recovered product flow.

- Selected flow: Pollutant-specific elementary flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated from foreground monitoring and fuel records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_and_wastewater`
- Sources: `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7`

### Process: On-site residuals and emission management (`onsite_residuals_management`)

#### Inputs

##### Product flows

###### Treatment chemicals and imported treatment energy (`residual_treatment_input`)

Record chemicals, electricity, steam, and fuels used for on-site wastewater, air-emission, or residual treatment.

- Selected flow: Material- and energy-specific flows to be resolved
- Flow property / unit: Declared property / kg, kWh, MJ, or m3
- Amount rule: measured treatment input attributable to the product system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions_and_wastewater`
- Sources: `eu-fdm-bref-2019`

##### Waste flows

###### Process wastewater and captured residuals received for treatment (`residuals_received_input`)

Transfer measured wastewater, captured dust, sludge precursors, spent media, and organic residuals into the applicable treatment operation without double counting.

- Selected flow: Internal waste streams matching upstream outputs
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: measured transferred quantity by stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions_and_wastewater`
- Sources: `eu-fdm-bref-2019`

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered biogas, water, or material (`recovered_treatment_output`)

Record recovered outputs only when measured and actually reused or exported; link internal reuse to the consuming process.

- Selected flow: Product-specific recovered flow to be resolved
- Flow property / unit: Declared property / kg, m3, kWh, or MJ
- Amount rule: measured recovered quantity and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproducts_and_wastes`
- Sources: `eu-fdm-bref-2019`

##### Waste flows

###### Treatment sludge and spent media (`treatment_waste_output`)

Measure dewatered sludge and spent media by treatment or disposal destination.

- Selected flow: Site-specific waste flow to be resolved
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass and dry solids by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_emissions_and_wastewater`
- Sources: `eu-fdm-bref-2019`

##### Elementary flows

###### Treated effluent and residual direct emissions (`treated_release_output`)

Record receiving compartment, measured discharge volume, sampled pollutant loads, and any residual air emissions from on-site treatment.

- Selected flow: Compartment- and pollutant-specific elementary flows to be resolved
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: calculated load from measured flow and concentration, or direct measured mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_emissions_and_wastewater`
- Sources: `eu-fdm-bref-2019`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | Multi-output separation, extraction, and refining | First subdivide processes and meters so inputs and outputs directly attributable to starch, gluten, germ, fibre, protein, pulp, solubles, inulin, or other outputs remain with those operations. | `ec-pef-recommendation-2021-2279`; `eu-fdm-bref-2019` |
| `allocation_rule_2` | Remaining multifunctionality | If subdivision is not possible, investigate system expansion and document the added functions and datasets before applying allocation. | `ec-pef-recommendation-2021-2279` |
| `allocation_rule_3` | Physical allocation | When subdivision and system expansion are not feasible, use a documented physical relationship that reflects the process causality, such as separately measured dry mass, solids, or another justified physical driver; do not select a driver only to favour the reference product. | `ec-pef-recommendation-2021-2279` |
| `allocation_rule_4` | Economic fallback | Use economic allocation only when no relevant physical relationship can be justified; use a representative price period, perform sensitivity analysis, and disclose the result and rationale. | `ec-pef-recommendation-2021-2279` |
| `allocation_rule_5` | Co-product and residual classification | Do not assign zero burden to a marketable co-product and do not classify a material as waste merely to avoid allocation; record destination, commercial status, dry matter, and allocation treatment. | `eu-fdm-bref-2019`; `eu-feed-materials-catalogue-68-2013` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_identity_and_output` | all production processes | Product identity, intermediates, and conforming output | Batch, laboratory, and production records | product name; product-flow UUID decision; feedstock; modification identity; physical state; lot; wet mass; solids or moisture; purity or grade; release status | Calibrated scales, laboratory methods, and batch reconciliation | kg; mass fraction | Each lot, aggregated monthly | Representative continuous 12-month period or complete campaign | All lines producing the declared product | Sum conforming output and calculate weighted composition; exclude rework until released | Calibration, test method, certificates of analysis, and release records |
| `cp_materials_and_aids` | `raw_material_receiving`; route processes | Raw materials, process aids, enzymes, and chemicals | Weighbridge, invoice, tank, silo, and issue records | material identity; supplier; origin; lot; quantity; unit; moisture or concentration; opening and closing stock; return; destination process | Reconcile purchases and inventory movements to process issues | kg; m3 | Each delivery or issue, aggregated monthly | Same period as product output | All relevant site stores and production lines | Opening stock + receipts - closing stock - documented return, allocated only with documented process driver | Supplier documents, meter or scale calibration, and stock reconciliation |
| `cp_utilities_and_water` | route processes; `product_finishing` | Electricity, fuels, steam, fresh water, recycle, and evaporation | Meter, utility invoice, fuel stock, and equipment records | carrier; meter; quantity; unit; operating time; process; fresh or recycled water status; conversion factor | Prefer sub-metering; otherwise documented equipment or operating-hour allocation | kWh; MJ; kg; m3 | Continuous or shift, aggregated monthly | Same period as product output | All production and relevant on-site utility systems | Sum measured use by carrier; subtract internal transfers; normalize after allocation | Meter calibration, invoice reconciliation, and documented conversion factors |
| `cp_coproducts_and_wastes` | all production processes | Co-products, rework, rejects, captured dust, sludge, and waste | Scale, dispatch, transfer, and waste-manifest records | stream identity; commercial or waste status; wet mass; solids; destination; treatment; price where economic fallback is used | Measure at transfer or dispatch and reconcile internal rework | kg; mass fraction | Each transfer, aggregated monthly | Same period as product output | All route and residual-management processes | Sum by stream and destination; count internal rework once when finally released or discarded | Scale calibration, dispatch evidence, contracts, and waste manifests |
| `cp_direct_emissions_and_wastewater` | route processes; `onsite_residuals_management` | Direct air emissions, wastewater, and treatment releases | Continuous or periodic monitoring, laboratory, permit, and flow records | source; pollutant; compartment; concentration; flow; sampling period; control status; wastewater destination; sludge; treatment input and output | Use applicable validated monitoring methods and calculate loads from matched flow and concentration periods | kg; m3; mg/L; mg/Nm3 | As monitored, aggregated to production period | Same period as product output; disclose sampling gaps | All attributable stacks, vents, drains, and on-site treatment | Sum measured loads; do not substitute AP-42 factors for available site monitoring | Laboratory accreditation, calibration, sampling plan, permits, and monitoring reports |
| `cp_packaging` | `product_finishing` | Included packaging materials | Packaging issue and product dispatch records | material; packaging level; issued mass; returned mass; packed product mass; format | Reconcile packaging issues with packed output | kg | Each packaging run, aggregated monthly | Same period as packaged product output | All included packaging lines | Net packaging issued divided by packed conforming output | Supplier specification, stock reconciliation, and scale calibration |
| `cp_allocation_basis` | all multi-output processes | Allocation decision and driver | Meter, mass balance, price, and decision records | process; outputs; subdivision status; system-expansion option; selected driver; dry mass; physical property; price period; price; sensitivity case | Apply the hierarchy in Section 7 and retain rejected alternatives | kg dry matter; declared driver; currency | Each reporting period and when route changes | Same period as inventory | Every multifunctional process | Apply one consistent documented basis to all jointly attributable inputs and outputs | Process diagram, meter boundary, calculation workbook, and reviewer approval |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_rule_1` | Inventory normalization | normalized amount = reporting-period amount / reporting-period conforming as-sold output | Collected flow amount; conforming product output | Amount per 1 kg reference product | `ec-pef-recommendation-2021-2279` |
| `calc_rule_2` | Dry-matter conversion | dry mass = wet mass × measured solids mass fraction; retain both wet and dry results | Wet mass; solids or moisture result | kg dry matter and kg wet stream | `eu-fdm-bref-2019` |
| `calc_rule_3` | Wastewater and stack loads | pollutant mass = matched concentration × measured volumetric flow, with explicit unit and standard-condition conversion | Concentration; flow; duration; temperature and pressure where required | Pollutant-specific mass | `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7` |
| `calc_rule_4` | Energy conversion | Convert only with a documented physical conversion factor; keep original meter reading and carrier identity | Meter reading; unit; conversion factor | Energy in reporting unit and original unit | `eu-fdm-bref-2019` |
| `calc_rule_5` | Mass reconciliation | Reconcile feed dry matter to product, co-product, waste, measured emissions, and documented inventory change; investigate rather than erase an unexplained residual | Dry-mass inputs and outputs; stock changes | Reconciliation statement and unresolved residual | `eu-fdm-bref-2019` |
| `calc_rule_6` | Allocation | Apply Section 7 hierarchy at each multifunctional process and normalize only after jointly attributable burdens are partitioned | Sub-metered burdens; output quantities; selected driver; sensitivity data | Allocated inventory by output | `ec-pef-recommendation-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Retain the concrete product name, product-flow UUID decision, feedstock, route, modification identity, physical state, moisture or dry matter, grade, and packaging state; the representative Starch UUID cannot substitute for a different form. | Product specification, release record, flow lookup decision, and batch metadata |
| `dq_temporal` | Foreground inventory | Use a representative continuous 12-month period or the complete production campaign; disclose shutdowns, abnormal events, and any mismatch between numerator and output periods. | Dated meters, batch records, operating calendar, and reconciliation |
| `dq_completeness` | Materials and releases | Cover all mapped processes, utilities, water, aids, products, co-products, wastes, wastewater, and direct emissions; document not-applicable conditional processes and unresolved mass residuals. | Process map, completeness checklist, dry-mass reconciliation, and monitoring inventory |
| `dq_measurement` | Quantitative records | Use calibrated meters and scales where available; document estimation methods, conversion factors, sampling, detection limits, and data gaps. | Calibration certificates, laboratory reports, calculation files, and gap register |
| `dq_allocation` | Multi-output processes | Retain the allocation hierarchy decision, process subdivisions, driver data, price period if used, and sensitivity result. | Allocation workbook, meter map, price evidence, and reviewer approval |
| `dq_upstream` | Purchased inputs | Identify supplier, geography, technology, reference period, and representativeness of upstream datasets, especially for botanical feedstocks and purchased CPC 23220 intermediates. | Supplier records, dataset metadata, and data-quality assessment |
| `dq_source_provenance` | All calculated values | Link every calculated result to raw records, formula version, author, and calculation date; do not treat external process descriptions as site measurements. | Traceable calculation package and source references |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | Product identity | Fail if the concrete product form and required qualifiers are missing, or if the representative Starch UUID is used for inulin, wheat gluten, dextrin, modified starch, or a product with a more specific real flow. | `un-cpc-3-0-23220` |
| `validation_rule_2` | Reference amount | Fail if the reference output is not 1 kg as-sold product on the declared moisture or dry-matter basis, or if dry and as-sold masses are mixed without conversion. | `ec-pef-recommendation-2021-2279` |
| `validation_rule_3` | Process coverage | Fail if a required process lacks inventory, or if a conditional route process is neither included nor explicitly marked not applicable with justification. | `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7` |
| `validation_rule_4` | Co-products and allocation | Fail if a marketable co-product is hidden as waste, given zero burden without justification, or handled without the allocation hierarchy and supporting data. | `ec-pef-recommendation-2021-2279`; `eu-feed-materials-catalogue-68-2013` |
| `validation_rule_5` | Water, waste, and direct emissions | Fail if fresh and recycled water are conflated, wastewater destination is missing, captured dust is reported as an elementary emission, or relevant measured direct emissions are omitted. | `eu-fdm-bref-2019`; `us-epa-ap42-9-9-7` |
| `validation_rule_6` | Data provenance | Fail if a collected or calculated amount cannot be traced to its collection protocol and reporting period, or if an external process description is presented as a site-specific amount. | `ec-pef-recommendation-2021-2279` |
| `validation_rule_7` | Mass reconciliation | Require a documented dry-matter reconciliation across product, co-products, waste, emissions, and inventory change; unresolved residuals must be disclosed and reviewed. | `eu-fdm-bref-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground manufacturing dataset for one declared CPC 23220 product form and route |
| downstream_use | `secondary_dataset`; `background_dataset` after review of representativeness and uncertainty |
| allowed_use | Product-specific process, lifecycle model, hotspot, supplier, and scenario studies consistent with declared product, route, geography, period, allocation, and plant-gate boundary |
| excluded_use | Automatic use of the representative Starch UUID for another form; undisclosed substitution across feedstocks, modification chemistries, technologies, geographies, periods, or as-sold states; comparative assertions without a compatible reviewed rule set |
| required_metadata | Concrete product-flow UUID decision; CPC reference; product form; feedstock; route; modification method and agents; physical state; moisture or dry matter; grade; geography; period; technology; packaging; system boundary; allocation; data sources |
| required_quality_disclosure | Primary-data share; meter and sampling coverage; unresolved UUIDs; estimated values; mass-balance residual; allocation sensitivity; upstream dataset representativeness; exclusions and data gaps |
| update_trigger | Product-flow identity change; new specific Tiangong flow; feedstock or route change; modification chemistry change; material process or control change; allocation change; packaging change; material data-quality improvement; reporting period renewal |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-23220` | dataset | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 23220, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/23220 (retrieved 2026-08-10) | Official category scope and representative-flow limitation |
| `eu-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, 2019, Chapter 14, https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2020-01/JRC118627_FDM_Bref_2019_published.pdf (retrieved 2026-08-10) | Starch and wheat-gluten route decomposition, modification, water and energy accounting, co-products, wastewater, drying, and direct-emission monitoring |
| `us-epa-ap42-9-9-7` | official_guidance | United States Environmental Protection Agency, AP-42 Section 9.9.7 Corn Wet Milling, January 1995, https://www.epa.gov/sites/default/files/2020-10/documents/c9s09-7.pdf (retrieved 2026-08-10) | Wet-milling process decomposition, grain handling, separation, drying, and candidate air-emission sources; route-specific, not a site value source |
| `ec-pef-recommendation-2021-2279` | standard | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, corrected 23 May 2022, http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-10) | Functional unit, reference-flow normalization, inventory completeness, multifunctionality hierarchy, data collection, and quality disclosure |
| `eu-feed-materials-catalogue-68-2013` | standard | Commission Regulation (EU) No 68/2013 on the Catalogue of feed materials, consolidated text, http://data.europa.eu/eli/reg/2013/68/oj (retrieved 2026-08-10) | Inulin production co-product identities including pressed or dried chicory pulp, chicory molasses, and chicory vinasses |
