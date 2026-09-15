---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.cured-stemmed-stripped-tobacco-leaves
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Cured stemmed/stripped tobacco leaves

## 1. Scope and Applicability

This PCR defines foreground data production for cured leaf tobacco from receipt of traceable cured unstemmed leaves at a stemming/redrying facility through conditioning, foreign-matter removal, mechanical threshing or stemming, lamina/stem separation, screening, redrying, cooling or moisture equilibration, and packing at the facility gate. The reference product is unmanufactured cured tobacco in stemmed/stripped form: the main stems or midribs have been removed, while the lamina or strips remain a material for later manufacturing.

The PCR covers flue-cured, fire-cured, and air-cured tobacco only when the tobacco class/type, cultivar when known, origin, crop year, curing method, incoming moisture, grade, final stemmed/stripped form, final moisture specification, and package are declared. Cultivation, harvest, initial curing, and inbound transport are upstream linked systems unless an explicitly extended study adds them as separate processes. Unstemmed cured leaves sold without stem removal, tobacco stems sold alone, cut or shredded smoking tobacco, cigars, cigarettes, smokeless tobacco, reconstituted or homogenized tobacco, extracts, essences, nicotine products, and finished consumer products are excluded.

The Tiangong reference identity is verified by exact English and Chinese `baseName`, Product flow type, CPC 25010, Mass, Units of mass, and kg. Its platform `treatmentStandardsRoutes` value is `Fresh, unprocessed produce` / `鲜品，未加工`, which conflicts with the cured product title. That route value is an unresolved Tiangong metadata issue: it shall not define this PCR boundary, process route, or product state, and it must be resolved or formally accepted before publication.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.tobacco-products.cured-stemmed-stripped-tobacco-leaves |
| classification_refs | CPC:3.0:25010 (`exact`) |
| covered_products | Unmanufactured cured tobacco lamina or strips from which the main stems or midribs have been removed, including declared strip scrap when it is intentionally included in the sold product specification. |
| excluded_products | Green or fresh tobacco; cured unstemmed whole leaves sold as such; separated stems; dust and handling waste; cut filler; flavored, expanded, reconstituted, homogenized, extracted, manufactured, or consumer-ready tobacco products. |
| representative_product | Redried flue-cured tobacco strips with declared type, origin, crop year, grade, moisture specification, stem-content specification, and package, ready for storage or downstream manufacturing. |
| production_route | Cured unstemmed leaf receipt → conditioning and foreign-matter removal → threshing/stemming and air separation → screening → redrying and cooling/equilibration → packing and storage release. |
| market_state | Unmanufactured cured stemmed/stripped leaf tobacco at the stemming/redrying facility gate; not fresh and not ready for smoking or other consumer use. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Cured stemmed/stripped tobacco leaf material for storage and later tobacco-product manufacturing. |
| How much | 1,000 kg net cured stemmed/stripped tobacco leaves, excluding packaging. |
| How well | Declared tobacco class/type, cultivar when known, origin, crop year, curing method and location, grade, incoming and final moisture basis, stem-content specification, strip-size specification when used, package configuration, and conformance basis. |
| How long or cycle | One released stemming/redrying production lot at the facility gate; no use duration or aging period is assigned. |
| reference_flow_link | `rf_cured_stemmed_stripped_tobacco_leaves` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net product |
| Reference product flow | Cured stemmed/stripped tobacco leaves `57a438c1-b4d5-427a-8240-3aacf6c56025` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | tobacco class and type; cultivar or trade designation when known; country and region of origin; crop year; curing method and curing location; incoming leaf grade and moisture basis; final moisture specification and measured result; final stem-content specification and measured result; strip-size specification when used; package configuration; net product mass; production lot; facility geography; temporal coverage; upstream curing dataset reference |

When constructing a foreground data package, every item in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Missing required qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every foreground exchange to exactly 1,000 kg net conforming product at the facility gate. |
| `net_product_mass` | Packed output | Mass | kg | Exclude the mass of boxes, liners, straps, pallets, and other packaging from the reference amount; retain net and gross mass records separately. |
| `moisture_basis` | Incoming leaf, intermediates, stems, scrap, and final product | Mass and moisture mass fraction | kg; % wet basis or declared alternative | Record each mass with its moisture basis and measurement method; do not compare or balance masses on different moisture bases without an explicit conversion. |
| `stem_content` | Final stemmed/stripped product | Mass fraction | % by mass | Measure and report residual main-stem or midrib content using the declared sampling and test method; do not infer conformance from thresher settings alone. |
| `electricity_conversion` | Metered electricity | Energy | kWh | Preserve metered kWh. If source records use MJ, convert with 1 kWh = 3.6 MJ and retain the original reading and conversion. |
| `fuel_energy` | Combusted fuel | Energy | MJ | Record physical fuel quantity and heating-value basis separately; calculate MJ without treating mass or volume as energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Traceable cured unstemmed tobacco leaves accepted at the stemming/redrying facility, with tobacco type, origin, crop year, curing method and location, grade, received mass, moisture basis, and upstream cultivation-curing dataset reference declared. |
| starting_condition_role | Foreground gate input; cultivation, harvesting, initial curing, and inbound transport are linked upstream systems unless separately added to an extended study. |
| product_classification_scope | Cured stemmed/stripped tobacco leaves represented by CPC 3.0 code 25010 and restricted to unmanufactured leaf tobacco with the main stems or midribs removed. |
| recursive_input_rule | Purchased or transferred cured stemmed/stripped tobacco already in this category is recorded once as a distinct input with its upstream dataset; do not reconstruct its stemming/redrying inventory recursively. |
| upstream_dataset_requirement | Link cultivation, harvesting, curing, and inbound transport for received cured unstemmed leaf; link purchased electricity, steam, water, each fuel, packaging component, and off-site treatment actually used. |
| disclosure | Declare facility and geography, tobacco type, origin and crop year, curing method and location, received-leaf state, process configuration, moisture targets, stem and scrap disposition, fuel and emission calculation, packaging, allocation, exclusions, data gaps, and the unresolved Tiangong route-metadata conflict. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_cured_leaf_start` | Foreground entry | Start the normal foreground boundary at accepted cured unstemmed leaf; represent cultivation, harvest, curing, and inbound transport with linked upstream datasets and declare whether curing was flue-, fire-, or air-curing. | `usda-7cfr-leaf-tobacco`; `fao-rwedp-32` |
| `boundary_complete_stemming_redrying` | Covered route | Include conditioning, foreign-matter removal, threshing or stemming, lamina/stem separation, screening, redrying, moisture equilibration or cooling, and packing as explicit foreground operations when performed. | `wise-reaves-1997`; `usepa-2006-tobacco-processing` |
| `boundary_product_state` | Product identity | The reference output must remain unmanufactured cured leaf tobacco in stemmed/stripped form; exclude unstemmed leaf sold as such and all downstream cutting, flavoring, expansion, reconstitution, extraction, and consumer-product manufacture. | `unsd-cpc3-25010`; `usda-7cfr-leaf-tobacco` |
| `boundary_actual_inputs` | Utilities and materials | Record each actually used water input, electricity supply, steam supply, fuel, cleaning chemical, and packaging component as its own atomic exchange; add a specific card when an actual item is not represented below. | `eu-2021-2279-environmental-footprint` |
| `boundary_outputs_emissions` | Outputs | Record stems, strip scrap, tobacco dust, rejects, wastewater, and each directly emitted substance separately by destination; do not hide direct emissions in a treatment-service input or net co-products from inputs. | `usepa-2006-tobacco-processing`; `eu-2021-2279-environmental-footprint` |
| `boundary_tiangong_route_conflict` | Tiangong metadata | Do not use `Fresh, unprocessed produce` / `鲜品，未加工` as route evidence because it contradicts the cured title and CPC identity; disclose the conflict and require resolution or formal review acceptance before publication. | `unsd-cpc3-25010`; `usda-7cfr-leaf-tobacco` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `leaf_receiving_conditioning` | Cured-leaf receiving, conditioning, and inspection | `required` | Every covered lot; utility cards apply only to utilities actually used. | Establish traceable incoming state, loosen/moisten leaf for handling, and remove non-tobacco matter. | kg conditioned cured leaf |
| `threshing_separation` | Threshing, stemming, air separation, and screening | `required` | Every covered lot. | Remove main stems or midribs and separate lamina, stems, strip scrap, dust, and rejects. | kg separated tobacco lamina |
| `redrying_cooling` | Redrying and moisture equilibration | `required` | Every covered lot; activate only the actual heat-supply cards. | Bring separated lamina to the declared final moisture and stable packing condition. | kg redried conforming lamina |
| `packing_storage_release` | Packing and storage release | `required` | Every covered lot; activate only packaging components actually used. | Produce the declared net reference product and release it for storage or dispatch. | 1,000 kg net reference product |

This candidate PCR contains no quantity-range blocks. Each amount is produced from foreground records or calculations. No single facility value, curing experiment, or literature case has been converted into an empirical interval.

### Process: Cured-leaf receiving, conditioning, and inspection (`leaf_receiving_conditioning`)

#### Inputs

##### Product flows

###### Cured unstemmed tobacco leaf received (`received_cured_unstemmed_leaf`)

The received lot is cured leaf tobacco whose main stems or midribs have not yet been removed.

- Selected flow: Cured unstemmed tobacco leaves
- Flow property / unit: Mass / kg
- Amount rule: Weigh every accepted receipt lot and record moisture, grade, origin, crop year, curing route, and upstream dataset.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_leaf_receipts`
- Sources: `usda-7cfr-leaf-tobacco`; `wise-reaves-1997`

###### Conditioning water (`conditioning_water`)

Record only water sprayed or otherwise supplied to condition the tobacco before threshing.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: Meter or weigh water supplied to each represented lot; do not create a default wastewater output when the water is absorbed by the tobacco.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conditioned cured leaf output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `usepa-2006-tobacco-processing`

###### Purchased steam for conditioning (`conditioning_purchased_steam`)

Record purchased steam only when it crosses the process boundary for conditioning.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Use the steam meter or calculate energy from measured condensate or steam mass and documented thermodynamic state.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conditioned cured leaf output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources: `usepa-2006-tobacco-processing`

###### Electricity for receiving and conditioning (`conditioning_electricity`)

Record electricity for unloading, opening, conveying, conditioning, inspection, and associated dust control.

- Selected flow: Electricity, supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: Use submetered electricity or reconcile facility electricity to equipment operating time with a documented allocation driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conditioned cured leaf output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `wise-reaves-1997`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned cured tobacco leaf (`conditioned_cured_leaf`)

Conditioned leaf is the measured output transferred to mechanical threshing or stemming.

- Selected flow: Conditioned cured tobacco leaves
- Flow property / unit: Mass / kg
- Amount rule: Weigh or mass-balance the transfer and record moisture immediately before threshing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conditioned cured leaf output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `wise-reaves-1997`

##### Waste flows

###### Rejected cured tobacco leaf (`receiving_rejected_leaf`)

Record off-grade, damaged, mold-affected, wet, or otherwise rejected leaf separately from saleable material.

- Selected flow: Waste rejected cured tobacco leaves
- Flow property / unit: Mass / kg
- Amount rule: Weigh each rejected lot or container and record its reason and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg received cured unstemmed leaf
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_leaf_receipts`
- Sources: `usda-7cfr-leaf-tobacco`

###### Stones removed at receiving (`receiving_stones`)

Record stones removed from tobacco without combining them with other foreign matter.

- Selected flow: Waste stones from tobacco receiving
- Flow property / unit: Mass / kg
- Amount rule: Weigh collected stones by lot or reporting period and retain destination records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg received cured unstemmed leaf
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_leaf_receipts`
- Sources: `wise-reaves-1997`; `usda-7cfr-leaf-tobacco`

###### Equipment-cleaning wastewater (`conditioning_cleaning_wastewater`)

Record this exchange only when wet cleaning generates a discharge; conditioning mist absorbed by tobacco is not wastewater.

- Selected flow: Wastewater from tobacco-conditioning equipment cleaning
- Flow property / unit: Mass / kg
- Amount rule: Meter the discharge or calculate it from measured cleaning-water input and separately measured retained or evaporated water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conditioned cured leaf output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- Sources: `usepa-2006-tobacco-processing`

##### Elementary flows

### Process: Threshing, stemming, air separation, and screening (`threshing_separation`)

#### Inputs

##### Product flows

###### Conditioned leaf entering threshing (`conditioned_leaf_to_threshing`)

Record the measured conditioned-leaf transfer into the threshing line.

- Selected flow: Conditioned cured tobacco leaves
- Flow property / unit: Mass / kg
- Amount rule: Use the transfer scale and correct for opening and closing line stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg separated tobacco lamina output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_records`
- Sources: `wise-reaves-1997`

###### Electricity for threshing and separation (`threshing_electricity`)

Record electricity for threshers, conveyors, air separators, screens, fans, and dust collection.

- Selected flow: Electricity, supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: Use a line submeter or reconciled equipment load and operating hours for the represented lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg separated tobacco lamina output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_records`
- Sources: `wise-reaves-1997`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Separated tobacco lamina (`separated_tobacco_lamina`)

Separated lamina is the main product transferred to redrying.

- Selected flow: Cured tobacco leaf strips
- Flow property / unit: Mass / kg
- Amount rule: Weigh the lamina stream and measure moisture at the redryer feed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg separated tobacco lamina output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_records`
- Sources: `usda-7cfr-leaf-tobacco`; `wise-reaves-1997`

###### Separated tobacco stems (`separated_tobacco_stems`)

Record removed main stems or midribs as a co-product only when they leave for beneficial use; otherwise reclassify the same physical stream as waste with its destination.

- Selected flow: Separated cured tobacco stems
- Flow property / unit: Mass / kg
- Amount rule: Weigh the separated stem stream and record moisture, purchaser or treatment destination, and revenue when economic allocation is assessed.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg separated tobacco lamina output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_records`
- Sources: `usda-7cfr-leaf-tobacco`; `wise-reaves-1997`

###### Saleable tobacco strip scrap (`saleable_strip_scrap`)

Record screened undersize lamina as a co-product only when it meets a declared saleable specification.

- Selected flow: Cured tobacco strip scrap
- Flow property / unit: Mass / kg
- Amount rule: Weigh saleable strip scrap separately from dust and waste and record moisture, specification, and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg separated tobacco lamina output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_records`
- Sources: `usda-7cfr-leaf-tobacco`; `wise-reaves-1997`

##### Waste flows

###### Collected tobacco dust (`collected_tobacco_dust`)

Record dust removed by baghouses or other dust collectors separately from saleable strip scrap.

- Selected flow: Waste collected tobacco dust
- Flow property / unit: Mass / kg
- Amount rule: Weigh removed dust or reconcile collector-container mass and record its destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg separated tobacco lamina output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_records`
- Sources: `usepa-2006-tobacco-processing`

##### Elementary flows

###### Fugitive fine particulate matter to air (`threshing_pm25_to_air`)

Record uncaptured fine particulate emissions when monitoring or an applicable factor supports the exchange.

- Selected flow: Particulate matter, less than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Use measured concentration and exhaust flow or an explicitly cited equipment- and control-specific factor applied to collected activity data.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg separated tobacco lamina output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `usepa-2006-tobacco-processing`

### Process: Redrying and moisture equilibration (`redrying_cooling`)

#### Inputs

##### Product flows

###### Separated lamina entering redrying (`lamina_to_redrying`)

Record the lamina mass and moisture entering the redryer.

- Selected flow: Cured tobacco leaf strips
- Flow property / unit: Mass / kg
- Amount rule: Use the redryer feed scale and representative moisture sampling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg redried conforming lamina output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_redrying_records`
- Sources: `wise-reaves-1997`

###### Electricity for redrying and cooling (`redrying_electricity`)

Record electricity for the redryer, fans, conveyors, controls, cooling, and moisture equilibration.

- Selected flow: Electricity, supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: Use a line submeter or reconciled equipment load and operating hours.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg redried conforming lamina output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_redrying_records`
- Sources: `wise-reaves-1997`

###### Purchased steam for redrying (`redrying_purchased_steam`)

Activate this card only when purchased steam supplies redrying heat.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Calculate heat from metered steam mass and documented inlet and condensate state.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg redried conforming lamina output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_redrying_records`
- Sources: `wise-reaves-1997`

###### Natural gas for redrying (`redrying_natural_gas`)

Activate this card only when natural gas is combusted onsite for redrying heat.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Meter gas volume or mass and calculate energy with the supplier heating value and declared basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg redried conforming lamina output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_redrying_records`
- Sources: `zhu-2025-curing-emissions`

###### Biomass pellets for redrying (`redrying_biomass_pellets`)

Activate this card only when biomass pellets are combusted onsite for redrying heat.

- Selected flow: Biomass fuel pellets
- Flow property / unit: Energy / MJ
- Amount rule: Weigh fuel and calculate energy using lot-specific moisture and lower heating value.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg redried conforming lamina output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_redrying_records`
- Sources: `zhu-2025-curing-emissions`

###### Coal for redrying (`redrying_coal`)

Activate this card only when coal is combusted onsite for redrying heat.

- Selected flow: Coal
- Flow property / unit: Energy / MJ
- Amount rule: Weigh fuel and calculate energy using the lot-specific lower heating value and moisture or ash basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg redried conforming lamina output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_redrying_records`
- Sources: `fao-rwedp-32`; `zhu-2025-curing-emissions`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Redried conforming tobacco lamina (`redried_conforming_lamina`)

Record redried lamina after cooling or equilibration and before packing.

- Selected flow: Redried cured tobacco leaf strips
- Flow property / unit: Mass / kg
- Amount rule: Weigh output and record final moisture, residual stem content, strip-size result, and release status.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg redried conforming lamina output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_redrying_records`
- Sources: `wise-reaves-1997`; `usda-7cfr-leaf-tobacco`

##### Waste flows

##### Elementary flows

###### Water vapour released during redrying (`redrying_water_to_air`)

Calculate evaporated water from moisture-corrected material balances; do not report it as wastewater.

- Selected flow: Water, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from measured inlet and outlet wet mass and moisture, corrected for stock and other water additions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg redried conforming lamina output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_redrying_records`
- Sources: `fao-rwedp-32`

###### Fossil carbon dioxide from redrying fuel (`redrying_fossil_co2_to_air`)

Record fossil carbon dioxide separately for each combusted fossil fuel inventory.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Use stack measurement or a fuel-specific factor applied to collected fuel quantity and heating-value basis.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ onsite fossil fuel input
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `zhu-2025-curing-emissions`

###### Biogenic carbon dioxide from biomass fuel (`redrying_biogenic_co2_to_air`)

Record biogenic carbon dioxide separately when biomass fuel is combusted onsite.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Use stack measurement or a biomass-fuel-specific factor applied to collected fuel quantity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ onsite biomass fuel input
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `zhu-2025-curing-emissions`

###### Sulfur dioxide from redrying fuel (`redrying_so2_to_air`)

Record sulfur dioxide only for fuels and operating periods for which it is emitted.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Use stack measurement or a fuel-sulfur-specific factor applied to collected fuel records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ onsite fuel input
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `zhu-2025-curing-emissions`

###### Nitrogen monoxide from redrying fuel (`redrying_no_to_air`)

Record nitrogen monoxide as its own elementary exchange.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Use measured concentration and exhaust flow or a fuel- and technology-specific factor applied to collected activity data.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ onsite fuel input
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `zhu-2025-curing-emissions`

###### Nitrogen dioxide from redrying fuel (`redrying_no2_to_air`)

Record nitrogen dioxide separately from nitrogen monoxide.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Use measured concentration and exhaust flow or a fuel- and technology-specific factor applied to collected activity data.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ onsite fuel input
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `zhu-2025-curing-emissions`

###### Fine particulate matter from redrying fuel (`redrying_pm25_to_air`)

Record fine particulate emissions separately from collected baghouse dust.

- Selected flow: Particulate matter, less than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Use measured concentration and exhaust flow or a fuel- and control-specific factor applied to collected activity data.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per MJ onsite fuel input
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `zhu-2025-curing-emissions`

### Process: Packing and storage release (`packing_storage_release`)

#### Inputs

##### Product flows

###### Redried lamina entering packing (`redried_lamina_to_packing`)

Record the released redried lamina entering the packing line.

- Selected flow: Redried cured tobacco leaf strips
- Flow property / unit: Mass / kg
- Amount rule: Weigh the packing-line input and correct for opening and closing line stock.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_records`
- Sources: `wise-reaves-1997`

###### Electricity for packing (`packing_electricity`)

Record electricity for conveying, pressing, weighing, sealing, labelling, and attributable storage handling.

- Selected flow: Electricity, supplied to facility
- Flow property / unit: Energy / kWh
- Amount rule: Use a packaging-line submeter or reconciled equipment load and operating hours.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_records`
- Sources: `wise-reaves-1997`

###### Corrugated fibreboard box (`packing_fibreboard_box`)

Record corrugated boxes only when they are part of the declared package.

- Selected flow: Corrugated fibreboard packaging box
- Flow property / unit: Mass / kg
- Amount rule: Multiply used box count by verified item mass and reconcile packaging stock.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_records`
- Sources: `wise-reaves-1997`

###### Polyethylene packaging liner (`packing_polyethylene_liner`)

Record the polyethylene liner separately when used.

- Selected flow: Polyethylene packaging liner
- Flow property / unit: Mass / kg
- Amount rule: Multiply used liner count by verified item mass and reconcile packaging stock.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_records`
- Sources: `wise-reaves-1997`

###### Steel packaging strap (`packing_steel_strap`)

Record steel strap separately when used to secure the package.

- Selected flow: Steel packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Weigh used strap or calculate from measured length and supplier mass per unit length.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packing_records`
- Sources: `wise-reaves-1997`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cured stemmed/stripped tobacco leaves (`reference_product_output`)

This is the only UUID-bearing inventory row and must use the verified Tiangong reference identity.

- Selected flow: Cured stemmed/stripped tobacco leaves `57a438c1-b4d5-427a-8240-3aacf6c56025`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Fixed normalization output of 1,000 kg net conforming product; measure gross packed mass and packaging mass separately.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net cured stemmed/stripped tobacco leaves
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc3-25010`; `usda-7cfr-leaf-tobacco`

##### Waste flows

###### Waste corrugated fibreboard (`packing_waste_fibreboard`)

Record rejected boxes and fibreboard offcuts separately.

- Selected flow: Waste corrugated fibreboard packaging
- Flow property / unit: Mass / kg
- Amount rule: Weigh fibreboard waste and record recovery or treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_records`
- Sources:

###### Waste polyethylene film (`packing_waste_polyethylene`)

Record rejected liners and polyethylene offcuts separately.

- Selected flow: Waste polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Weigh polyethylene waste and record recovery or treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_records`
- Sources:

###### Waste steel strap (`packing_waste_steel_strap`)

Record rejected or trimmed steel strap separately.

- Selected flow: Waste steel packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Weigh steel strap waste and record recovery or treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_records`
- Sources:

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_first` | Every multi-output operation | Prefer subdivision, line-specific measurement, or system expansion that preserves separately measured lamina, stems, strip scrap, dust, rejects, and energy recovery before applying allocation. | `eu-2021-2279-environmental-footprint` |
| `allocation_output_classification` | Stems and strip scrap | Classify each stream by its actual destination: a saleable or internally used material with an upstream-substitution claim is a co-product; a discarded stream is waste. Do not change classification merely to improve results. | `usda-7cfr-leaf-tobacco`; `eu-2021-2279-environmental-footprint` |
| `allocation_residual_physical` | Unavoidable shared burdens | When subdivision and system expansion are not applicable, allocate shared conditioning, separation, and redrying burdens by measured dry mass of saleable outputs on a consistent moisture basis. | `eu-2021-2279-environmental-footprint` |
| `allocation_economic_sensitivity` | Material co-products | When stems or strip scrap have materially different value from lamina, report an economic-allocation sensitivity using period-matched net revenues and disclose the result alongside the primary physical allocation. | `eu-2021-2279-environmental-footprint` |
| `allocation_no_invisible_credit` | Waste and recovered energy | Do not subtract waste treatment, exported material, recovered heat, or recovered energy directly from an input. Represent the outgoing stream and any substitution or credit as an explicit model choice. | `eu-2021-2279-environmental-footprint` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_leaf_receipts` | `leaf_receiving_conditioning` | Received leaf, rejects, and stones | Weighbridge, lot, supplier, grade, and inspection records | lot_id; supplier; origin; crop_year; tobacco_type; cultivar; curing_method; curing_location; upstream_dataset; gross_mass; tare_mass; moisture; grade; reject_mass; reject_reason; stone_mass | Calibrated scale plus documented representative sampling and visual inspection | kg; mass % | Every receipt lot | Full represented production period | Every supplying lot accepted by the represented facility | Sum net mass and rejected mass; mass-weight moisture; retain lot identity and stock change | Calibration certificate; weigh ticket; supplier document; grade certificate; sampling plan; inspection record |
| `cp_conditioning_records` | `leaf_receiving_conditioning` | Conditioned leaf, water, steam, electricity, and cleaning wastewater | Line scales, water/steam/electricity meters, equipment logs, and cleaning records | lot_id; inlet_mass; inlet_moisture; outlet_mass; outlet_moisture; water_input; steam_mass; steam_state; electricity; cleaning_water; wastewater; opening_stock; closing_stock | Calibrated transfer scales and utility meters; documented balance only where direct measurement is unavailable | kg; kWh; MJ; mass % | Each lot, shift, and utility meter period | Full represented production period | All receiving and conditioning equipment serving the product | Stock-correct material transfer; reconcile utilities to represented operating hours; keep absorbed mist separate from cleaning discharge | Calibration record; meter record; batch log; steam calculation; cleaning log; water-balance worksheet |
| `cp_separation_records` | `threshing_separation` | Lamina, stems, strip scrap, dust, and electricity | Transfer scales, line logs, collector records, sales and waste records | lot_id; input_mass; input_moisture; lamina_mass; lamina_moisture; stem_mass; stem_moisture; strip_scrap_mass; dust_mass; destination; revenue; electricity; opening_stock; closing_stock | Calibrated scales, line submeter, collector-container weighing, and dispatch reconciliation | kg; kWh; mass %; currency | Each lot or shift | Full represented production period | Every threshing, separation, screening, and dust-control line | Reconcile stock-correct inputs and all physical outputs before allocation; sum outputs by destination | Calibration record; line log; laboratory result; collector record; sale ticket; waste manifest; stock reconciliation |
| `cp_redrying_records` | `redrying_cooling` | Lamina, utilities, fuel, final moisture, and evaporated water | Feed/output scales, moisture tests, meters, fuel invoices, fuel analyses, and redryer logs | lot_id; inlet_mass; inlet_moisture; outlet_mass; outlet_moisture; electricity; steam_mass; steam_state; fuel_type; fuel_quantity; heating_value; heating_value_basis; operating_hours; opening_stock; closing_stock | Calibrated scales and meters; representative moisture sampling; fuel stock reconciliation | kg; kWh; MJ; mass % | Each lot and utility/fuel reporting period | Full represented production period | Every redryer and cooling/equilibration unit | Calculate energy from each fuel separately; calculate evaporated water from moisture-corrected balance; never average fuel routes | Calibration record; moisture method; meter record; invoice; fuel analysis; operating log; stock and mass-balance worksheet |
| `cp_air_emissions` | `threshing_separation`; `redrying_cooling` | Substance-specific direct air emissions | Stack or workplace monitoring, exhaust-flow, fuel, permit, and factor records | emission_point; substance_id; concentration; exhaust_flow; temperature; pressure; duration; fuel_type; fuel_quantity; factor; factor_source; control_device | Direct measurement preferred; otherwise an applicable fuel-, equipment-, and control-specific factor applied to collected activity data | kg; mg/m3; m3/s; MJ | Each monitoring event and reporting period | Full represented operating period | Every included direct emission point | Calculate mass by substance and point; do not combine NO with NO2 or emitted particulate with collected dust | Calibration and laboratory report; monitoring plan; permit return; factor source; calculation worksheet; control-device log |
| `cp_packing_records` | `packing_storage_release` | Net product, packaging components, packaging waste, and electricity | Packing batch, scale, bill-of-material, purchase, stock, and waste records | batch_id; product_input; net_product_output; gross_packed_mass; box_count; box_mass; liner_count; liner_mass; strap_length; strap_mass; packaging_waste_mass; electricity; opening_stock; closing_stock | Calibrated product scale plus item mass verification and stock reconciliation | kg; item count; m; kWh | Each packing batch | Full represented production period | Every line and package used for the reference product | Reconcile net product separately from packaging; convert item counts or length with verified item factors | Scale calibration; package specification; supplier record; invoice; batch log; waste ticket; stock reconciliation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every foreground exchange | normalized amount = stock-corrected exchange amount / net conforming reference-product mass × 1,000 kg | exchange amount; opening stock; closing stock; net reference-product mass | amount per 1,000 kg reference product | `eu-2021-2279-environmental-footprint` |
| `calc_dry_mass` | Moisture-basis comparison | dry mass = wet mass × (1 - moisture mass fraction); retain the original wet mass and measured moisture | wet mass; moisture mass fraction | dry mass for balancing or physical allocation | `fao-rwedp-32`; `usda-7cfr-leaf-tobacco` |
| `calc_process_mass_balance` | Each process and aggregate facility | balance gap = inputs + opening stock - outputs - closing stock; report evaporated water and each measured discharge explicitly and investigate the residual | moisture-consistent inputs; outputs; stock changes; absorbed water; evaporated water | balance gap and documented gap fraction | `eu-2021-2279-environmental-footprint` |
| `calc_fuel_energy` | Each onsite fuel | fuel energy = measured fuel quantity × declared heating value on a consistent basis | fuel quantity; heating value; moisture or ash basis; lower/higher heating-value basis | MJ by fuel | `zhu-2025-curing-emissions` |
| `calc_direct_emission` | Each emitted substance | emitted mass = measured concentration × standardized exhaust flow × operating duration, or collected activity × an applicable documented factor | concentration; exhaust flow; temperature; pressure; time; or activity and factor | kg of one substance | `zhu-2025-curing-emissions` |
| `calc_allocation_fraction` | Residual allocation | allocation fraction for output i = selected driver for output i / sum of the driver across all co-products in the same period | dry mass or net revenue by output; shared burden | allocated burden and allocation fraction by output | `eu-2021-2279-environmental-footprint` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_reference_identity` | Reference product | Use Tiangong flow `57a438c1-b4d5-427a-8240-3aacf6c56025`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg without dataset versions. | Dataset reference-flow record and UUID validation |
| `dq_tiangong_route_conflict` | Reference identity metadata | Disclose that `treatmentStandardsRoutes = Fresh, unprocessed produce / 鲜品，未加工` conflicts with the cured title and CPC 25010; do not use it as methodology evidence, and retain the issue as unresolved until Tiangong reread and review close it. | Tiangong state-100 direct-read record; manifest unresolved-identity entry; review decision |
| `dq_product_qualifiers` | Every reference lot | Preserve traceability for tobacco type, origin, crop year, curing route and location, grade, moisture, residual stem content, strip size when applicable, and package. | Supplier record; grade certificate; laboratory result; lot genealogy; packing record |
| `dq_temporal_coverage` | Foreground data | Cover a representative operating year or complete declared campaign and disclose shutdowns, crop-season gaps, product changes, and extrapolation. | Date-bounded production, meter, fuel, stock, laboratory, and dispatch records; `eu-2021-2279-environmental-footprint` |
| `dq_technology_geography` | Facility representation | Describe facility geography, line capacity, conditioning method, thresher and separator configuration, redryer, heat supply, dust control, moisture control, and package configuration. | Facility profile; process-flow diagram; equipment list; control-device record |
| `dq_completeness` | Process inventory | Reconcile every process and disclose missing inputs, unmetered shared utilities, omitted emissions, unknown destinations, and unexplained balance gaps instead of silently assigning zero. | Signed mass, energy, water, and emission reconciliation; `eu-2021-2279-environmental-footprint` |
| `dq_zero_ranges` | Quantitative guidance | Do not infer a range from one facility, one curing experiment, or unlike process boundaries. This PCR has zero ranges; all values require collected foreground evidence until two independent boundary-compatible originals support a reviewed interval. | Range audit; source applicability review; foreground records |
| `dq_source_traceability` | External evidence and factors | Retain source title, stable URL or DOI, retrieval date for web sources, factor version, applicability, and the calculation worksheet. | Source register and calculation archive; `eu-2021-2279-environmental-footprint` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference flow | Fail conformance if the product UUID, Mass UUID, unit-group UUID, reference unit, reference amount, English display, or Chinese display differs from the verified reference object without an approved PCR revision. | `unsd-cpc3-25010` |
| `val_tiangong_route_conflict` | Publication readiness | Fail publication readiness while the conflicting `Fresh, unprocessed produce` / `鲜品，未加工` route metadata remains unresolved or lacks formal review acceptance; never treat that value as support for a fresh-product boundary. | `unsd-cpc3-25010`; `usda-7cfr-leaf-tobacco` |
| `val_required_qualifiers` | Dataset metadata | Fail conformance when any required qualifier is absent or product, laboratory, and process records disagree on tobacco type, curing route, moisture, residual stem content, strip specification, or package. | `usda-7cfr-leaf-tobacco` |
| `val_process_coverage` | Process inventory | Require all four processes and an applicability decision for every conditional utility, fuel, wastewater, packaging, and emission card; an active card must carry amount, basis, protocol, and destination or compartment. | `wise-reaves-1997`; `usepa-2006-tobacco-processing` |
| `val_atomic_flows` | Inventory exchanges | Fail conformance when a row combines fuels, utilities, packaging materials, wastes, or emitted substances; each card must represent one exchange and unresolved UUIDs must remain blank. | `eu-2021-2279-environmental-footprint` |
| `val_moisture_mass_balance` | Every process and facility total | Calculate and report material balance on consistent moisture bases; investigate gaps against a documented site tolerance and do not force-close the balance by changing product mass or merging stems, scrap, dust, or evaporation. | `eu-2021-2279-environmental-footprint` |
| `val_allocation` | Multi-output processes | Verify destination classification, avoidance rationale, allocation driver and period, fractions summing to 1 within reported rounding precision, and economic sensitivity when co-product value differences are material. | `eu-2021-2279-environmental-footprint` |
| `val_energy_emissions` | Utilities, fuel, and direct emissions | Reconcile meters, invoices, stocks, heating values, operating periods, controls, and substance-specific calculations; do not combine NO and NO2 or fossil and biogenic carbon dioxide. | `zhu-2025-curing-emissions`; `eu-2021-2279-environmental-footprint` |
| `val_no_inferred_ranges` | Quantitative metadata | Verify that the structured projection contains zero quantity ranges; reject any lower-equals-upper case value or range inferred without two independent boundary-compatible original sources. | `eu-2021-2279-environmental-footprint` |
| `val_source_resolution` | Evidence register | Verify that every cited source id resolves in Data Sources and that each external factor or rule retains an applicability statement and calculation record. | `eu-2021-2279-environmental-footprint` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for cured stemmed/stripped tobacco leaves at a declared stemming/redrying facility. |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product and process LCA for unmanufactured cured stemmed/stripped leaf tobacco when origin, curing route, technology, product specification, boundary, allocation, and data quality are compatible. |
| excluded_use | Fresh or green tobacco; unstemmed leaf sold as such; tobacco stems alone; tobacco cultivation or curing without linked upstream data; manufactured, reconstituted, extracted, flavored, cut, consumer-ready, or smoking products; public comparative claims without method-compatible review. |
| required_metadata | PCR id; Tiangong reference-flow UUIDs; facility geography; production period; tobacco type; origin; crop year; curing method and location; incoming grade and moisture; process configuration; heat supply; final moisture; residual stem content; strip-size specification when used; package; boundary; allocation; dataset version; Tiangong route-conflict status. |
| required_quality_disclosure | Temporal, geographic, and technological representativeness; weighing and moisture-test methods; calibration; mass, energy, water, and emission reconciliation; upstream curing coverage; missing flow UUIDs; shared-utility allocation; co-product treatment; absent ranges; source and factor versions; uncertainty; Tiangong route-metadata conflict and review status. |
| update_trigger | Material change in product scope, CPC or Tiangong identity, treatment route metadata, tobacco or curing route, facility geography, conditioning, threshing/separation, redrying heat supply, dust control, package, allocation, measurement system, or source evidence. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-25010` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, subclass 25010, last updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-08-20 | Exact CPC identity and separation from manufactured tobacco categories. |
| `usda-7cfr-leaf-tobacco` | Standard (`standard`) | U.S. Department of Agriculture, 7 CFR Part 30, Tobacco Stocks and Standards, sections 30.2-30.13, https://www.govinfo.gov/content/pkg/CFR-2022-title7-vol2/pdf/CFR-2022-title7-vol2-subtitleB-chapI-subchapA.pdf, retrieved 2026-08-20 | Definitions of leaf tobacco, stemmed form, scrap, curing, and flue-, fire-, and air-curing; product-state and qualifier rules. |
| `wise-reaves-1997` | Literature (`literature`) | William B. Wise and Dixie Watts Reaves, Tobacco's Important Role in the Economy of Southside Virginia, Virginia Tech Rural Economic Analysis Program Report R030, 1997, DOI 10.22004/ag.econ.14847, https://ageconsearch.umn.edu/record/14847, retrieved 2026-08-20 | Original process description for conditioning, inspection, threshing, air separation, screening, redrying, quality sampling, and packing. |
| `usepa-2006-tobacco-processing` | Official guidance (`official_guidance`) | U.S. Environmental Protection Agency, Final Engineering Report: Tobacco Products Processing Detailed Study, 2006, EPA-HQ-OW-2004-0032, https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100N4Y7.TXT, retrieved 2026-08-20 | Stemming/redrying sector boundary, conditioning water absorption, limited process wastewater, baghouse material and air-control disclosure, and utility/process completeness. |
| `fao-rwedp-32` | Official guidance (`official_guidance`) | Food and Agriculture Organization of the United Nations, Proceedings of the Regional Expert Consultation on Selection Criteria and Priority Rating for Assistance to Traditional Biomass Energy Using Industries, RWEDP Report No. 32, July 1997, tobacco leaf curing section, https://www.fao.org/4/ad594e/ad594e00.pdf, retrieved 2026-08-20 | Upstream curing-route distinction, moisture removal context, curing-stage declaration, and fuel-data need; no case value is used as a PCR range. |
| `zhu-2025-curing-emissions` | Literature (`literature`) | Yinlong Zhu et al., Evaluating main gas emission and energy consumption economy during tobacco leaf curing life cycle based on clean energy, Scientific Reports 15, 13835 (2025), https://doi.org/10.1038/s41598-025-98956-3, retrieved 2026-08-20 | Full-text measurement design for fuel, flue-gas concentration, flow, duration, and substance-specific CO2, SO2, NO, and NO2 calculations; experimental values are not generalized into PCR ranges. |
| `eu-2021-2279-environmental-footprint` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on the Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32021H2279, retrieved 2026-08-20 | Company-specific data, completeness, allocation hierarchy and disclosure, data quality, robustness, and downstream dataset use. |
