---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cut-flowers-and-flower-buds
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cut flowers and flower buds

## 1. Scope and Applicability

This PCR applies to fresh cut flowers and flower buds supplied as individual stems or incorporated into bouquets, wreaths, floral baskets, and similar decorative articles. It covers open-field and protected cultivation, annual and perennial production, harvested flower preparation, conditioning, grading, cooling, bunching or article assembly, packaging, and dispatch. Distribution, storage, auction or trade, retail, consumer use, and end-of-life are included when the declared dataset boundary extends beyond the first dispatch point.

The PCR does not cover living potted plants, bulbs or other planting material sold for cultivation, flower seed, dried or artificially preserved flowers, artificial flowers, extracted fragrances, edible flowers sold as food, or dyeing and other transformation that materially changes the cut flower after normal post-harvest conditioning. A bouquet or other article remains in scope only when cut flowers or flower buds provide its principal function; non-floral accessories and containers are recorded as separate inputs.

Species, cultivar, grade, stem length, cultivation system, production geography, harvest season, post-harvest treatment, packaging configuration, cold-chain condition, expected decorative life, and article composition can materially change inventory results. These facts shall be declared for every conforming foreground data package.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.cut-flowers-and-flower-buds |
| classification_refs | CPC 3.0: 01962, exact classification context |
| covered_products | Fresh cut flowers and flower buds; individual stems; bouquets; wreaths; floral baskets; similar decorative articles whose principal function is supplied by cut flowers or flower buds |
| excluded_products | Living potted plants; bulbs, cuttings, and planting stock; flower seed; dried or preserved flowers; artificial flowers; fragrances and extracts; edible flowers sold as food; separately modelled dyeing or other material transformation |
| representative_product | One consumer-ready fresh cut-flower stem supplied for decoration |
| production_route | Starting material and cultivation in open field or protected systems; harvest; post-harvest handling and conditioning; packaging and dispatch; downstream distribution and end-of-life when included in the declared boundary |
| market_state | Fresh, graded, conditioned, and saleable stem or declared multi-stem decorative article |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide decoration with a fresh cut-flower stem |
| How much | One stem, as purchased by the consumer |
| How well | Meets the declared producer or retailer specification for species or cultivar, grade, stem length, appearance, freshness, and packaging |
| How long or cycle | Expected decorative or vase life declared for the specific product and storage method |
| reference_flow_link | One consumer-ready stem; for a bouquet, wreath, basket, or similar article, inventory shall be decomposed to the declared number of flower stems and all non-floral components shall be recorded separately |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Cut flower or flower bud, consumer-ready; Tiangong UUID unresolved |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | botanical species and cultivar; product form and article stem count; grade and stem length; open-field or protected cultivation; substrate or soil system; production geography; harvest period; post-harvest treatment; packaging configuration; cold-chain condition; expected decorative or vase life; included life-cycle stages |

When constructing a foreground data package, the items listed in `Required qualifiers` shall be declared in dataset metadata, process notes, reference-flow comments, product descriptions, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete. The Tiangong reference product flow UUID shall remain unresolved rather than using the narrower `Dye Flower` flow; a semantically matching public product flow is required before activation or publication.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_item_count` | Reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Report the quantitative reference as exactly one consumer-ready flower stem. |
| `article_stem_conversion` | Bouquets, wreaths, floral baskets, and similar articles | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Record the measured count of qualifying flower stems in the article; divide article-level inputs and losses by the number of consumer-ready stems while retaining the article configuration as a qualifier. |
| `mass_per_stem_measurement` | Materials, products, and wastes recorded by mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure or calculate mass per declared stem for every mass-based row; do not substitute a generic stem mass when product-specific measurements are available. |
| `nutrient_basis` | Fertilisers and nutrient emissions | Mass of product and nutrient-specific mass | kg product; kg N; kg P; kg K | Preserve fertiliser product mass and calculate nutrient mass from documented composition; never treat formulated fertiliser mass as nutrient mass. |
| `active_ingredient_basis` | Plant-protection products | Mass | kg active ingredient | Collect formulated product and active-ingredient concentration, then report active-ingredient mass separately from formulated-product mass. |
| `energy_conversion` | Electricity and fuels | Energy | kWh; MJ | Preserve metered units and declared conversion factors; do not combine electricity and fuel energy without retaining carrier and technology identity. |
| `water_source_separation` | Irrigation, washing, conditioning, and transport water | Volume | m3 | Record water by source and use; report recirculated water and make-up water separately to prevent double counting. |

## 5. System Boundary

The default methodological boundary is cradle-to-grave. A foreground production dataset may stop at dispatch only when its shorter boundary is explicit and downstream users can attach the omitted stages without double counting.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased or internally produced seed, cutting, young plant, bulb, rootstock, or other propagation material entering the declared cut-flower production system |
| starting_condition_role | Upstream product input to the first foreground cultivation process |
| product_classification_scope | Fresh cut flowers and flower buds and the flower-stem content of in-scope decorative articles |
| recursive_input_rule | An input already representing an in-scope consumer-ready cut flower shall be recorded as an upstream product flow and shall not be expanded again inside the receiving foreground process. |
| upstream_dataset_requirement | Use a separately documented upstream dataset for purchased propagation material, externally cultivated stems, packaging, energy, fertiliser, plant-protection products, transport, and waste treatment; disclose proxy use and data quality. |
| disclosure | Declare starting-material type and origin, cultivation system, land and infrastructure treatment, included post-harvest operations, distribution route, article assembly, losses, and the exact terminal boundary. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_stages` | Product system | Include starting-material production and raw-material acquisition, cultivation and harvest, post-harvest handling, packaging, distribution, storage or auction and retail when applicable, consumer use assumptions, and end-of-life for the flowers and packaging. A shorter foreground boundary shall state every omitted downstream stage. | wur-floripefcr-2024; lan-cut-flower-review-2022 |
| `boundary_cultivation_inputs` | Cultivation | Include propagation material, growing media, greenhouse or protected-cultivation infrastructure when used, irrigation water, fertilisers, plant-protection products, biological-control disclosure, CO2 enrichment, energy, fuels, field operations, direct emissions, land occupation, and land-use change where relevant. | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `boundary_post_harvest` | Harvest to dispatch | Include harvesting, grading, trimming, washing or hydration, conditioning chemicals, phytosanitary treatment, cooling, cold storage, bunching or article assembly, packaging, on-site handling, product losses, wastewater, and wastes. | wur-floripefcr-2024 |
| `boundary_capital_goods` | Protected cultivation | Include greenhouse structures and cultivation-specific infrastructure through documented bill of materials, service life, occupied area, and production over that life; disclose any excluded capital goods. | wur-floripefcr-2024 |
| `boundary_cutoff_disclosure` | All stages | Do not omit a known material, energy, transport, waste, or direct-emission flow merely because it lacks data. Record it as unresolved, use a disclosed proxy, or justify exclusion against the applied study rule. | ec-pef-method-2021; wur-floripefcr-2024 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cultivation` | Starting material, cultivation, and harvest | required | Always | Foreground flower production | Harvested flower stems needed for one consumer-ready stem |
| `post_harvest` | Post-harvest preparation and conditioning | required | Always | Foreground grading, conditioning, cooling, and bunching or article assembly | Saleable conditioned stems needed for one consumer-ready stem |
| `packaging_dispatch` | Packaging and dispatch | required | Always | Foreground packaging and dispatch preparation | One consumer-ready stem at first dispatch |
| `distribution_retail` | Distribution, storage, auction or trade, and retail | conditional | Include when the declared boundary extends beyond first dispatch | Downstream transport, storage, trade, retail, and related losses | One stem delivered to the consumer |
| `end_of_life` | Flower and packaging end-of-life | conditional | Include for cradle-to-grave datasets or lifecycle models | Downstream waste collection and treatment | Waste generated by one purchased stem |

### Process: Starting material, cultivation, and harvest (`cultivation`)

#### Inputs

##### Product flows

###### Propagation or starting material (`starting_material`)

Record seed, cutting, young plant, bulb, rootstock, or other propagation material and its origin, quantity, losses, packaging, and supplier route.

- Selected flow: Select the matching Tiangong propagation-material product flow
- Flow property / unit: Number of items / Item(s), with mass where needed
- Amount rule: Measured starting-material count and mass allocated to harvested stems
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per harvested stems needed for one consumer-ready stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation_materials`
- Sources: `wur-floripefcr-2024`

###### Growing medium and cultivation materials (`growing_media_materials`)

Record growing-medium constituents, containers, mulch, supports, strings, films, and other cultivation materials when used.

- Selected flow: Select constituent-specific Tiangong product flows
- Flow property / unit: Mass / kg; Volume / m3 where measured
- Amount rule: Annual or crop-cycle purchases less documented unused stock, allocated by crop area and production
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per harvested stems needed for one consumer-ready stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation_materials`
- Sources: `wur-floripefcr-2024`

###### Irrigation and cultivation water (`cultivation_water`)

Record make-up water by source separately from recirculated water.

- Selected flow: Select source- and geography-specific Tiangong water flows
- Flow property / unit: Volume / m3
- Amount rule: Metered or reconciled make-up water allocated to the declared crop
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested stems needed for one consumer-ready stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `wur-floripefcr-2024`

###### Fertilisers and soil amendments (`fertiliser_inputs`)

Record product mass, composition, nutrient mass, organic or synthetic origin, and application location.

- Selected flow: Select formulation-specific Tiangong fertiliser and amendment flows
- Flow property / unit: Mass / kg product; kg N; kg P; kg K
- Amount rule: Measured application or purchase-and-stock reconciliation converted with documented composition
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested stems needed for one consumer-ready stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_fertiliser_records`
- Sources: `wur-floripefcr-2024`

###### Plant-protection products (`plant_protection_inputs`)

Record every applied formulated product, active ingredient, concentration, rate, treatment location, and post-harvest application.

- Selected flow: Select active-ingredient or formulated-product Tiangong flows
- Flow property / unit: Mass / kg formulated product; kg active ingredient
- Amount rule: Applied formulated mass multiplied by active-ingredient concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested stems needed for one consumer-ready stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_plant_protection_records`
- Sources: `wur-floripefcr-2024`

###### Cultivation electricity (`cultivation_electricity`)

Record electricity for lighting, pumping, ventilation, cooling, automation, and other cultivation operations.

- Selected flow: Select voltage-, supplier-, and geography-specific Tiangong electricity flow
- Flow property / unit: Energy / kWh
- Amount rule: Metered consumption allocated to the declared crop by sub-metering or the allocation rule in section 7
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested stems needed for one consumer-ready stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_fuel_records`
- Sources: `wur-floripefcr-2024`

###### Heating fuels and supplied heat (`cultivation_heat_fuel`)

Record each fuel or heat carrier, quantity, lower or higher heating-value convention, combustion technology, and CHP relationship.

- Selected flow: Select carrier- and technology-specific Tiangong fuel or heat flows
- Flow property / unit: Energy / MJ; fuel quantity in metered unit
- Amount rule: Metered fuel or heat converted with a documented heating value and allocated to the crop
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per harvested stems needed for one consumer-ready stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_fuel_records`
- Sources: `wur-floripefcr-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested flower stems (`harvested_stems`)

Record the count and measured representative mass of harvested stems before grading.

- Selected flow: Harvested cut-flower stems; Tiangong UUID unresolved
- Flow property / unit: Number of items / Item(s); Mass / kg
- Amount rule: Counted harvested stems allocated to the declared product and harvest period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per harvested stems needed for one consumer-ready stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_loss_records`
- Sources: `wur-floripefcr-2024`

##### Waste flows

###### Cultivation and harvest biomass waste (`cultivation_biomass_waste`)

Record stems, leaves, roots, failed plants, and other biomass leaving the process as waste, with treatment route.

- Selected flow: Select the matching Tiangong biowaste flow
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balanced biomass waste by treatment route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested stems needed for one consumer-ready stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_loss_records`
- Sources: `wur-floripefcr-2024`

##### Elementary flows

###### Direct cultivation emissions (`cultivation_direct_emissions`)

Calculate direct emissions to air, water, and soil from fertiliser, manure, plant-protection products, fuel combustion, substrate, and field operations with the declared method and factors.

- Selected flow: Select substance- and compartment-specific Tiangong elementary flows
- Flow property / unit: Mass / kg
- Amount rule: Calculation from collected activity data using cited emission-factor methods
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per harvested stems needed for one consumer-ready stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_cultivation_emissions`
- Sources: `wur-floripefcr-2024`

### Process: Post-harvest preparation and conditioning (`post_harvest`)

#### Inputs

##### Product flows

###### Harvested stems entering post-harvest handling (`post_harvest_stem_input`)

Record the transfer of harvested stems without duplicating cultivation burdens.

- Selected flow: Harvested cut-flower stems; Tiangong UUID unresolved
- Flow property / unit: Number of items / Item(s)
- Amount rule: Calculated from saleable output plus measured rejects and handling losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one saleable conditioned stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_loss_records`
- Sources: `wur-floripefcr-2024`

###### Post-harvest water and conditioning agents (`post_harvest_water_agents`)

Record washing, hydration, bucket, and conditioning water and each conditioning or phytosanitary agent.

- Selected flow: Select source-specific water and agent product flows
- Flow property / unit: Volume / m3; Mass / kg
- Amount rule: Metered batch use divided by saleable conditioned stems from the batch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one saleable conditioned stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_post_harvest_records`
- Sources: `wur-floripefcr-2024`

###### Post-harvest electricity and refrigerants (`post_harvest_energy_refrigerants`)

Record electricity for sorting, washing, cooling, cold storage, and article assembly, plus refrigerant charge and leakage.

- Selected flow: Select voltage-, geography-, and refrigerant-specific Tiangong flows
- Flow property / unit: Energy / kWh; Mass / kg refrigerant
- Amount rule: Metered energy and reconciled refrigerant leakage allocated by stem throughput, storage volume, and time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one saleable conditioned stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_post_harvest_records`
- Sources: `wur-floripefcr-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Saleable conditioned stems (`saleable_conditioned_stems`)

Record stems meeting the declared grade and post-harvest specification.

- Selected flow: Saleable conditioned cut-flower stems; Tiangong UUID unresolved
- Flow property / unit: Number of items / Item(s)
- Amount rule: Counted saleable stems after grading and conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one saleable conditioned stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_output_loss_records`
- Sources: `wur-floripefcr-2024`

##### Waste flows

###### Post-harvest rejects and wastewater (`post_harvest_waste`)

Record rejected biomass, trimmed material, spent conditioning solution, and wastewater by treatment route.

- Selected flow: Select matching Tiangong biowaste and wastewater flows
- Flow property / unit: Mass / kg; Volume / m3
- Amount rule: Measured waste plus batch mass and water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one saleable conditioned stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_output_loss_records`
- Sources: `wur-floripefcr-2024`

##### Elementary flows

###### Refrigerant leakage (`post_harvest_refrigerant_emission`)

Record substance-specific refrigerant emitted to air.

- Selected flow: Select the matching Tiangong elementary flow to air
- Flow property / unit: Mass / kg
- Amount rule: Beginning charge plus additions minus recovered and ending charge, allocated to stored volume and time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per one saleable conditioned stem
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_post_harvest_records`
- Sources: `wur-floripefcr-2024`

### Process: Packaging and dispatch (`packaging_dispatch`)

#### Inputs

##### Product flows

###### Saleable stems for packaging (`packaging_stem_input`)

Record the stem count entering packaging or article assembly.

- Selected flow: Saleable conditioned cut-flower stems; Tiangong UUID unresolved
- Flow property / unit: Number of items / Item(s)
- Amount rule: Counted input stems by packaging or article batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one consumer-ready stem
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_dispatch_records`
- Sources: `wur-floripefcr-2024`

###### Packaging, accessories, and transport water (`packaging_materials`)

Record primary, secondary, and tertiary packaging, ties, sleeves, containers, floral foam, supports, non-floral decorations, and water transported with the product.

- Selected flow: Select material-specific Tiangong product flows
- Flow property / unit: Mass / kg; Volume / m3
- Amount rule: Measured packaging bill of materials divided by packaged consumer-ready stems; divide reusable packaging by verified reuse cycles
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per one consumer-ready stem
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_dispatch_records`
- Sources: `wur-floripefcr-2024`

###### Packaging and dispatch energy (`packaging_dispatch_energy`)

Record electricity and fuels used for packing, article assembly, internal handling, and dispatch staging.

- Selected flow: Select carrier-, voltage-, and geography-specific Tiangong energy flows
- Flow property / unit: Energy / kWh; MJ
- Amount rule: Metered batch energy divided by dispatched consumer-ready stems
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one consumer-ready stem
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_dispatch_records`
- Sources: `wur-floripefcr-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Consumer-ready cut-flower stem (`consumer_ready_stem`)

Record exactly one conforming stem. For articles, this output represents one stem-equivalent and retains article composition as a qualifier.

- Selected flow: Cut flower or flower bud, consumer-ready; Tiangong UUID unresolved
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Fixed reference output of one stem
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one consumer-ready stem
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: External source (`external_source`)
- Sources: `wur-floripefcr-2024`

##### Waste flows

###### Packaging and assembly waste (`packaging_assembly_waste`)

Record offcuts, damaged packaging, nonconforming accessories, and flower losses generated during packaging or assembly.

- Selected flow: Select material-specific waste flows
- Flow property / unit: Mass / kg; Number of items / Item(s)
- Amount rule: Measured waste by material and treatment route divided by dispatched stems
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per one consumer-ready stem
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_dispatch_records`
- Sources: `wur-floripefcr-2024`

##### Elementary flows

### Process: Distribution, storage, auction or trade, and retail (`distribution_retail`)

#### Inputs

##### Product flows

###### Dispatched stems and transport service (`distribution_inputs`)

Record all route legs, transport modes, distance, load, packaging mass, temperature control, storage duration, auction or trade handling, and retail storage.

- Selected flow: Consumer-ready stem plus mode-specific transport, storage, and energy service flows
- Flow property / unit: Number of items / Item(s); Transport work / tkm; Energy / kWh
- Amount rule: Route-specific calculation from mass, volume, distance, load factor, storage volume, and time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one stem delivered to the consumer
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_distribution_records`
- Sources: `wur-floripefcr-2024`

##### Waste flows

##### Elementary flows

###### Distribution refrigerant leakage (`distribution_refrigerant_emission`)

Record substance-specific refrigerant leakage from cold transport, storage, and retail.

- Selected flow: Select the matching Tiangong elementary flow to air
- Flow property / unit: Mass / kg
- Amount rule: Reconciled leakage allocated by product volume and storage time or transport work
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one stem delivered to the consumer
- Basis kind: Transport service (`transport_service`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_distribution_records`
- Sources: `wur-floripefcr-2024`

#### Outputs

##### Product flows

###### Stem delivered to consumer (`delivered_stem`)

Record one purchased stem after scaling upstream production for measured distribution, storage, trade, and retail losses.

- Selected flow: Cut flower or flower bud, consumer-ready; Tiangong UUID unresolved
- Flow property / unit: Number of items / Item(s)
- Amount rule: Fixed output of one delivered stem after loss scaling
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: one delivered stem
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: External source (`external_source`)
- Sources: `wur-floripefcr-2024`

##### Waste flows

###### Distribution and retail losses (`distribution_retail_losses`)

Record damaged, wilted, or unsold flowers and associated packaging waste at the stage where each loss occurs.

- Selected flow: Select matching flower-biowaste and packaging-waste flows
- Flow property / unit: Number of items / Item(s); Mass / kg
- Amount rule: Counted losses by stage and treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per one stem delivered to the consumer
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_distribution_records`
- Sources: `wur-floripefcr-2024`

##### Elementary flows

### Process: Flower and packaging end-of-life (`end_of_life`)

#### Inputs

##### Product flows

##### Waste flows

###### Discarded flower and packaging (`discarded_flower_packaging`)

Record flower biomass, water, sleeves, ties, containers, foam, baskets, and other packaging by material and local treatment route.

- Selected flow: Select material-specific Tiangong waste flows
- Flow property / unit: Mass / kg; Number of items / Item(s)
- Amount rule: Measured product and packaging composition multiplied by local collection and treatment shares
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: waste from one purchased stem
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `wur-floripefcr-2024`

##### Elementary flows

#### Outputs

##### Product flows

###### Waste-treatment services and recovered products (`end_of_life_services`)

Record composting, digestion, incineration, landfill, recycling, and recovered products without double counting avoided burdens.

- Selected flow: Select route-specific Tiangong treatment and recovered-product flows
- Flow property / unit: Mass / kg
- Amount rule: Input waste mass multiplied by documented treatment shares and process yields
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: waste from one purchased stem
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `wur-floripefcr-2024`

##### Waste flows

##### Elementary flows

###### Direct end-of-life emissions (`end_of_life_emissions`)

Record treatment-specific emissions to air, water, and soil using the selected treatment datasets or documented factors.

- Selected flow: Select substance- and compartment-specific Tiangong elementary flows
- Flow property / unit: Mass / kg
- Amount rule: Treatment-specific calculation from waste mass and cited factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Scenario-specific (`scenario_specific`)
- Normalization basis: waste from one purchased stem
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Method formula (`method_formula`)
- Collection protocol: `cp_end_of_life_scenario`
- Sources: `wur-floripefcr-2024`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | All multifunctional processes | First subdivide processes and use direct measurements for the flower crop, compartment, batch, article, or route. Apply allocation only to residual shared inputs or emissions. | ec-pef-method-2021; wur-floripefcr-2024 |
| `allocation_greenhouse_land_time` | Shared greenhouse cultivation | Allocate shared energy, cleaning, land occupation, and generic operations using crop-specific sub-metering where available; otherwise use occupied area integrated over growing time. Apply economic allocation only to remaining co-products that cannot be separated physically. | wur-floripefcr-2024 |
| `allocation_chp_energy` | Combined heat and power | Subdivide fuel and direct emissions between useful heat and electricity by their produced energy content, retain measured efficiency, and separately attribute purification burdens for recovered CO2 supplied to cultivation. | wur-floripefcr-2024 |
| `allocation_rotation_inputs` | Organic fertiliser and green manure in rotations | Allocate mineral nitrogen to the crop receiving it and allocate residual organic nutrients and green-manure burdens across the rotation using occupied area and the cited horticultural rule. | bsi-pas-2050-1-2012; wur-floripefcr-2024 |
| `allocation_transport_physical` | Shared transport | Allocate by the physical constraint on load capacity: mass when mass-constrained, volume when volume-constrained; include documented empty return and cold-chain operation. | wur-floripefcr-2024 |
| `allocation_storage_volume_time` | Shared storage, auction, trade, and retail | Allocate utilities and leakage by occupied product volume multiplied by storage time. | wur-floripefcr-2024 |
| `allocation_reuse_cycles` | Reusable buckets, trays, trolleys, and containers | Divide manufacture and end-of-life burdens by verified lifetime uses and include cleaning and return transport for each use. | wur-floripefcr-2024 |
| `allocation_article_components` | Bouquets and similar articles | Normalize article-level burdens by measured flower-stem count for this PCR while retaining each non-floral component as a separate input; do not allocate accessory burdens away from the article. | wur-floripefcr-2024 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation_materials` | cultivation | Starting material, growing media, infrastructure, and cultivation materials | Purchase, stock, supplier, and field records | material identity; supplier; origin; quantity; composition; recycled content; opening and closing stock; crop area; service life; crop share | Reconcile purchases and stock; verify bills of materials and supplier specifications | item; kg; m3; m2-year | Each receipt and annual reconciliation | At least three recent years for annual or protected crops, or three recent crop cycles when shorter; steady-state representation for perennials | Every included farm and cultivation compartment | Sum net use, allocate by direct crop records or section 7, and divide by saleable stem count | Invoices, stock sheets, supplier specifications, infrastructure records, and crop-area logs |
| `cp_water_records` | cultivation | Irrigation and cultivation water | Meter and water-source records | source; abstraction or supply meter; make-up volume; recirculated volume; discharge volume; crop area; stem output | Read calibrated meters and reconcile water balance | m3 | Monthly and each crop cycle | Same representative period as cultivation output | Every water source and included cultivation block | Sum make-up water by source and divide by saleable stems; report recirculation separately | Meter calibration, bills, abstraction records, and water-balance check |
| `cp_fertiliser_records` | cultivation | Fertilisers, manure, amendments, and nutrient inputs | Application and composition records | product; batch; applied mass; N/P/K composition; organic or synthetic origin; field or compartment; date | Reconcile application logs to purchase and stock records; verify composition | kg product; kg N; kg P; kg K | Each application | Same representative period as cultivation output | Every included field or compartment | Convert product mass to nutrients, apply rotation allocation, and divide by saleable stems | Application logs, invoices, labels, laboratory or supplier composition |
| `cp_plant_protection_records` | cultivation | Plant-protection and post-harvest treatment products | Application records | product; active ingredient; concentration; formulated amount; treated area or batch; date; application method | Record each application and calculate active-ingredient mass | kg product; kg active ingredient | Each application | Same representative period as cultivation output | Every included field, greenhouse, and post-harvest area | Sum by active ingredient and divide by saleable stems | Application logs, labels, invoices, and applicator calibration |
| `cp_energy_fuel_records` | cultivation | Electricity, heat, fuels, CHP, and CO2 enrichment | Meter, invoice, and operating records | carrier; meter; quantity; unit; supplier; voltage; fuel heating value; CHP heat and electricity; CO2 source; crop area and time | Sub-meter where possible; otherwise reconcile facility totals and allocation drivers | kWh; MJ; kg; m3 | Monthly and each crop cycle | Same representative period as cultivation output | Every included energy system and cultivation compartment | Convert with documented factors, allocate under section 7, and divide by saleable stems | Meter calibration, invoices, fuel specifications, CHP logs, and allocation reconciliation |
| `cp_output_loss_records` | cultivation; post_harvest | Harvested, saleable, rejected, and lost stems and biomass | Harvest, grading, waste, and dispatch records | harvested count and mass; saleable count; reject count and mass; reason; waste route; product qualifier | Count by batch and weigh representative stems and wastes | item; kg | Each harvest and grading batch | Same representative period as cultivation output | Every included crop, grade, and handling site | Reconcile harvested stems to saleable stems, transfers, rejects, and inventory change | Batch tickets, scale records, grade reports, waste receipts, and mass/count balance |
| `cp_cultivation_emissions` | cultivation | Direct emissions from cultivation | Calculation workpaper linked to activity records | fertiliser and manure inputs; soil or substrate; climate; water discharge; fuel use; active ingredient; factor and factor source | Apply declared factor method to collected activity data | kg substance | Each reporting period | Same representative period as cultivation output | Every included field or compartment | Calculate by substance and compartment and divide by saleable stems | Formula audit, source version, input traceability, and independent recalculation |
| `cp_post_harvest_records` | post_harvest | Water, conditioning agents, energy, storage, refrigerants, and wastewater | Batch, meter, stock, and maintenance records | stem count; water; agent; energy; storage volume and time; refrigerant charge, additions, recovery; wastewater | Measure by batch or reconcile shared systems | item; m3; kg; kWh; m3-day | Each batch; monthly for shared utilities | Same representative period as processed output | Every included post-harvest site | Allocate by measured batch, stem throughput, or volume-time and divide by saleable stems | Batch sheets, meters, invoices, maintenance logs, and utility reconciliation |
| `cp_packaging_dispatch_records` | packaging_dispatch | Packaging, accessories, reusable containers, assembly, and dispatch | Bill of materials and batch records | material; mass; recycled content; article stem count; reuse cycles; cleaning; dispatch count; packaging waste | Weigh representative configurations and reconcile purchases and stock | item; kg; m3 | Each configuration and annual reconciliation | Current configuration and representative reporting year | Every included packhouse or assembly site | Divide batch materials and energy by conforming dispatched stems; divide reusable items by verified uses | Packaging specifications, scale records, purchase data, reuse logs, and batch reconciliation |
| `cp_distribution_records` | distribution_retail | Transport, storage, auction, trade, retail, losses, and refrigerants | Route, shipment, facility, and sales records | origin and destination; mode; distance; fuel; load; mass and volume; storage volume and time; utility use; refrigerant; loss count and route | Collect each route leg and reconcile facility activity | km; tkm; m3-week; kWh; kg; item | Each shipment and monthly facility totals | Representative reporting year with seasonal coverage | Every included route leg and facility | Calculate transport work, allocate storage by volume-time, scale for stage-specific losses, and divide by delivered stems | Freight documents, telematics, utility bills, inventory records, sales and waste records |
| `cp_end_of_life_scenario` | end_of_life | Flower and packaging treatment | Composition and scenario records | material mass; local collection share; composting; digestion; recycling; incineration; landfill; transport; recovery yield | Use measured composition and current geography-specific treatment evidence | kg; fraction | Each product configuration; scenario review at least annually | Current market and waste-management year | Declared consumer market | Multiply material mass by treatment shares and route datasets; sum shares to one | Product disassembly record, official waste statistics, treatment evidence, and scenario checksum |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_stem_normalization` | All process rows | normalized amount = attributed period or batch amount / conforming consumer-ready stems represented by that amount | attributed amount; conforming stem count | amount per stem | wur-floripefcr-2024 |
| `calc_article_to_stems` | Bouquets and similar articles | amount per stem = article-level amount / measured qualifying flower-stem count; retain article identity and non-floral components | article amount; flower-stem count | amount per stem-equivalent | wur-floripefcr-2024 |
| `calc_loss_scaling` | Successive life-cycle stages | required upstream stems = one delivered stem / product of retained fractions at each included loss stage; do not combine losses without retaining stage records | counted input, output, and loss by stage | loss-adjusted upstream stem requirement | wur-floripefcr-2024 |
| `calc_three_period_average` | Cultivation | Calculate each annual or crop-cycle inventory first, then average three representative years or three recent consecutive cycles; use a shorter period only with explicit justification and never less than one year for a new annual system. | period inputs; period outputs; stem counts | representative cultivation inventory per stem | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `calc_perennial_steady_state` | Perennial cut-flower systems | Weight development stages so the reporting period represents theoretical steady state; document any correction and exclude pre-yield-only inventory from an unqualified mature-product dataset. | stage area, time, inputs, outputs, yields | steady-state inventory per stem | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `calc_nutrient_mass` | Fertilisers and amendments | nutrient mass = applied product mass × documented nutrient mass fraction | product mass; N/P/K composition | kg nutrient | wur-floripefcr-2024 |
| `calc_active_ingredient` | Plant-protection products | active-ingredient mass = formulated product mass × active-ingredient mass fraction | formulated mass; concentration | kg active ingredient | wur-floripefcr-2024 |
| `calc_transport_work` | Distribution | tonne-kilometres = transported gross mass in tonnes × one-way loaded distance; apply documented load and empty-return treatment without duplicating refrigerated energy | mass; distance; load; empty return; mode | tkm by route leg | wur-floripefcr-2024 |
| `calc_reusable_packaging` | Reusable packaging | material burden per use = packaging manufacture and end-of-life burden / verified lifetime uses; add cleaning and return transport for the current use | packaging mass; reuse cycles; cleaning; return route | packaging burden per stem | wur-floripefcr-2024 |
| `calc_dqr` | Data quality | Assess precision, time, geography, and technology representativeness for material activity data and direct elementary flows; retain criterion scores and evidence. | activity and flow evidence; study context | data-quality record | ec-pef-method-2021; wur-floripefcr-2024 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Retain species or cultivar, grade, stem length, product form, article composition, production geography, cultivation system, harvest period, post-harvest treatment, packaging, cold-chain condition, and expected decorative life. | Product specification, batch record, and reference-flow metadata |
| `dq_temporal` | Cultivation | Use three representative recent years for annual and protected systems or three consecutive recent cycles for crops shorter than a year; apply documented steady-state treatment to perennial systems. | Period coverage table and source-linked calculation |
| `dq_site_coverage` | Multi-site production | Describe the population, technology, farm practice, climate zone, and capacity strata; document included sites and production coverage. | Site register, sampling rationale, and production-volume reconciliation |
| `dq_measurement` | Material activity data | Prefer calibrated meters, verified invoices, batch counts, scales, and supplier specifications; preserve raw units and conversion factors. | Calibration, invoice, batch, scale, and specification records |
| `dq_completeness` | All required stages and flows | Reconcile inputs, outputs, losses, stock changes, water, energy, and waste; list every unresolved or excluded flow with materiality rationale. | Completeness checklist and mass/count/utility balances |
| `dq_representativeness` | Foreground and secondary data | Assess technological, geographical, temporal, and precision representativeness; disclose proxies and their expected direction of bias. | DQR workpaper and proxy register |
| `dq_source_traceability` | Calculated values and factors | Store formula, source id and version, raw inputs, allocation driver, and calculation output so an independent reviewer can reproduce the value. | Calculation workpaper and cited source |
| `dq_uuid_readiness` | Tiangong identity | Resolve each selected public flow, property, and unit-group UUID against the current Tiangong row before activation or publication; do not substitute a narrower flow. | Tiangong readback record retained outside PCR content |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_product_identity` | Reference product | Fail conformance when species or cultivar, grade, product form, stem count for an article, cultivation system, production geography, and boundary are missing. | wur-floripefcr-2024 |
| `validate_reference_flow` | Quantitative reference | Require exactly one consumer-ready stem in Item(s), or a transparent article-to-stem calculation whose qualifying stem count is positive and whose non-floral components remain in inventory. | wur-floripefcr-2024; lan-cut-flower-review-2022 |
| `validate_reference_uuid` | Tiangong reference flow | Block activation, publication, and claims of full PCR conformance until a semantically matching generic cut-flower product flow UUID is selected and read back; reject the narrower `Dye Flower` flow for this role. |  |
| `validate_process_coverage` | Foreground inventory | Require cultivation, post-harvest, and packaging-dispatch process inventories. Require distribution and end-of-life inventories whenever those stages are within the declared boundary. | wur-floripefcr-2024 |
| `validate_required_inputs` | Cultivation | Require explicit rows or justified non-applicability for starting material, growing medium, cultivation materials, water, fertilisers, plant-protection products, energy, heating or cooling, infrastructure, direct emissions, output, and losses. | wur-floripefcr-2024 |
| `validate_count_balance` | Stem transfers | For each stage, require input stems = conforming output stems + rejected or lost stems ± documented inventory change. |  |
| `validate_water_balance` | Water-using stages | Require make-up water = incorporated or transported water + discharge + evaporation or other loss ± stock change, within declared measurement uncertainty; keep recirculated water separate. |  |
| `validate_allocation` | Shared processes | Require subdivision evidence or a cited allocation rule and measured driver; reject unexplained economic allocation where physical separation or causality is available. | ec-pef-method-2021; wur-floripefcr-2024 |
| `validate_temporal_coverage` | Cultivation | Require the representative period or an explicit exception consistent with annual, short-cycle, or perennial rules. | wur-floripefcr-2024; bsi-pas-2050-1-2012 |
| `validate_loss_scaling` | Downstream stages | Require stage-specific measured loss fractions in the interval from zero through one and verify that upstream stem scaling reproduces one delivered stem. | wur-floripefcr-2024 |
| `validate_source_traceability` | Calculated rows | Require every method factor, externally constrained rule, and non-default scenario to reference a listed source id; require every foreground calculated row to link to a collection protocol. | ec-pef-method-2021 |
| `validate_data_quality` | Dataset profile | Require disclosed precision, time, geography, and technology representativeness and an explicit proxy register. | ec-pef-method-2021; wur-floripefcr-2024 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground cut-flower production data package, with optional downstream distribution and end-of-life extensions |
| downstream_use | `secondary_dataset`; `background_dataset`; input to `process` and `lifecyclemodel` projections |
| allowed_use | Product-specific modelling for cut flowers and flower buds when the declared species, grade, cultivation route, geography, time, post-harvest treatment, packaging, distribution, loss, and boundary match the study |
| excluded_use | Potted plants, planting material, seed, dried or artificial flowers, edible flowers sold as food, undisclosed generic global proxies, or comparison of unlike product specifications and decorative lives |
| required_metadata | PCR id and version; species or cultivar; grade; stem length; product or article form and stem count; cultivation system and substrate; geography; harvest and data period; post-harvest treatment; packaging; cold-chain and route; expected decorative life; boundary; allocation; source and proxy register; Tiangong UUID readback status |
| required_quality_disclosure | Site and production coverage; collection period; measurement and calculation methods; data-quality criteria; unresolved flows; excluded processes; proxy data and direction of bias; allocation drivers; mass, count, water, and utility reconciliation |
| update_trigger | Change in species or grade, cultivation technology, energy system, greenhouse infrastructure, water source, nutrient or plant-protection regime, post-harvest treatment, packaging, route or cold chain, loss pattern, waste treatment, source method, or any material input or emission |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| wur-floripefcr-2024 | standard | Broekema, R. et al. (2024), Product Environmental Footprint Category Rules for Cut Flowers and Potted Plants: Final version, Wageningen Economic Research Report 2024-023, DOI: 10.18174/549543, retrieved 2026-07-30 | Flower-specific functional unit and reference flow; life-cycle stages; mandatory company-specific data; allocation; temporal coverage; packaging, distribution, loss, data-quality, and end-of-life rules |
| ec-pef-method-2021 | official_guidance | European Commission Recommendation (EU) 2021/2279, Annex I: Product Environmental Footprint Method, https://environment.ec.europa.eu/document/download/680503dc-5a19-4f6a-bb92-84d9bfc8f312_en, retrieved 2026-07-30 | General PEF boundary, multifunctionality, data-needs, data-quality, secondary-data, and reporting rules |
| bsi-pas-2050-1-2012 | standard | BSI PAS 2050-1:2012, Assessment of life cycle greenhouse gas emissions from horticultural products - Supplementary requirements for the cradle-to-gate stages, official BSI record, retrieved 2026-07-30 | Horticultural temporal averaging, perennial steady state, rotation allocation, land-use-change, and cradle-to-gate disclosure |
| lan-cut-flower-review-2022 | literature | Lan, Y.-C., Tam, V. W. Y., Xing, W., Datt, R., and Chan, Z. (2022), Life cycle environmental impacts of cut flowers: A review, Journal of Cleaner Production 369, 133415, DOI: 10.1016/j.jclepro.2022.133415 | Independent evidence for stem-count functional units, category variability, and the relevance of cultivation, post-harvest, consumer, energy, water, chemical, land-use, and waste stages |

Source limitation: the 2024 FloriPEFCR states a validity end date of 2025-12-31. Its flower-specific technical rules are used here as the strongest located published methodology evidence, not as a claim of current validity. A current replacement or renewed validity shall be confirmed before this candidate PCR can become active.
