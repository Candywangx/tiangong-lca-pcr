---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cloves-whole-stems-processed
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Cloves (whole stems), processed

## 1. Scope and Applicability

This PCR governs foreground data packages for CPC 23926 processed cloves made from a separately identified CPC 01656 unprocessed whole-clove lot. The package shall represent one botanical identity, one incoming raw-material state, one final product form, one particle-size specification, one processing route and one packaging configuration. It shall not average whole, crushed, ground and powdered products, or treated and untreated routes.

Covered foreground operations are receipt and lot acceptance, dry cleaning and sorting, conditional wet cleaning, conditional facility drying or moisture conditioning, conditional crushing or grinding and particle classification, conditional steam microbial reduction, conditional dosing of amorphous silicon dioxide, packaging, controlled storage, sanitation, dust control and conditional on-site wastewater treatment. Agricultural production, harvest, the production history of the CPC 01656 input and inbound transport are upstream. Distribution, retail, culinary use and end-of-life are downstream.

Codex CXS 344-2021 is used for botanical identity, whole and ground/powdered styles, quality attributes and food-hygiene links when the marketed product falls within that standard. It does not replace the retained CPC 23926 boundary or erase the crushed and otherwise-processed forms carried by the verified Tiangong reference identity.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.cloves-whole-stems-processed |
| classification_refs | CPC 3.0: 23926, exact |
| covered_products | Processed cloves from a declared CPC 01656 raw-clove lot in exactly one form: processed whole, crushed, ground or powdered; a declared INS 551 ground or powdered formulation is covered only through its separate dosing route. |
| excluded_products | CPC 01656 raw cloves; mixed-spice or seasoning products; clove essential oil, oleoresin or extract; another botanical spice; datasets averaging multiple product forms, particle-size specifications or microbial-reduction routes. |
| representative_product | One lot-specific processed clove product with declared botanical identity, final form, particle size, moisture state, treatment history and package. |
| production_route | Receipt → dry cleaning and sorting → conditional wet cleaning → conditional drying → conditional size reduction → conditional steam microbial reduction → conditional INS 551 dosing → packaging, storage and release. Every omitted or included conditional step is declared. |
| market_state | Dry food spice released in one declared bulk or retail package; net product mass excludes packaging. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply processed cloves with the declared aroma, flavour, cleanliness, form, particle-size and hygiene attributes. |
| How much | 1 kg net conforming released product, excluding all packaging. |
| How well | The declared form meets the applicable specification for identity, moisture, physical defects, contaminants, microbiological controls and particle size; no cross-form or cross-route averaging is allowed. |
| How long or cycle | One foreground production lot through packaged product release; storage duration and conditions are declared, with no separate service-life credit. |
| reference_flow_link | The fixed output row `reference_product_output` from `packaging_storage_release`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net released product |
| Reference product flow | Cloves (whole stems), processed `c848928e-35e4-4713-aba4-2f2d01ac641d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical identity and scientific name; incoming CPC 01656 state and moisture; origin and lot; final form; particle-size or sieve specification; drying route and conditions; microbial-reduction treatment status; additive identity and concentration; package bill of materials; storage conditions; geography and reference period |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | released reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net product at release; packaging, pallets and labels are excluded from reference mass and inventoried separately. |
| `incoming_mass_state` | CPC 01656 input | Mass | kg | Record incoming lot mass and moisture on the measured basis; do not silently convert a processed input into raw cloves. |
| `moisture_balance` | drying and steam treatment | Mass | kg water and kg product | Retain inlet and outlet moisture measurements and calculate removed water without imposing a default moisture value. |
| `particle_size_identity` | crushed, ground and powdered forms | Mass fraction and sieve aperture | % and mm or µm | Record the declared sieve method and distribution; a marketing term alone cannot substitute for a measured particle-size specification. |
| `utility_energy` | electricity, steam, hot water and heated air | Energy | kWh or MJ | Preserve metered units and conversion factors; never combine electricity and thermal energy in one amount. |
| `wastewater_load` | direct water emissions | Mass | kg | Calculate each pollutant load separately from measured volume and concentration over the same period; wastewater sent to sewer or treatment is not simultaneously a direct environmental discharge. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | A lot of CPC 01656 unprocessed whole cloves crossing the foreground facility gate with declared botanical identity, supplier, origin, moisture, physical condition and prior post-harvest history. |
| starting_condition_role | Upstream product input and auditable start of processed-clove foreground operations. |
| product_classification_scope | CPC 23926 processed cloves only, represented by one declared form and route. |
| recursive_input_rule | A purchased input already meeting CPC 23926 is a processed-clove intermediate, not the starting raw input. Disclose it, use an upstream dataset for completed processing and omit those duplicated foreground stages. |
| upstream_dataset_requirement | Cultivation, harvest, raw-clove post-harvest operations completed before receipt, production of packaging and chemicals, electricity and fuel supply, and inbound transport require upstream datasets when inside the study scope. |
| disclosure | Declare product form, particle size, all included and omitted conditional processes, treatment order, moisture history, package, storage conditions, geography, period, supplier coverage and any upstream processed-clove input. |

### System Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_raw_start` | foreground starting point | Begin at physical receipt of the declared CPC 01656 lot; do not include cultivation or harvest in the foreground process map. | `un-cpc-3-0-2025`, `eu-pef-2021-2279` |
| `boundary_form_route_lock` | all foreground processes | Keep each product form, particle-size specification and treatment route in a separate dataset or separately parameterised route; cross-form and cross-route averaging is prohibited. | `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279` |
| `boundary_hygiene_operations` | cleaning through release | Include the actual cleaning, dust-control, microbial-reduction, packaging and sanitation operations performed by the foreground facility. | `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019` |
| `boundary_complete_lci` | foreground inventory | Collect all known material, energy, product, co-product, waste and direct air and water exchanges for included processes. | `eu-pef-2021-2279` |
| `boundary_downstream` | distribution and use | Exclude distribution, retail, culinary use and final waste management from this gate-to-gate foreground PCR unless the study explicitly adds downstream modules. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_clove_receipt` | Raw clove receipt and lot acceptance | required | Every dataset starts with a separately identified incoming lot of unprocessed whole cloves. | Foreground material receipt and quality segregation | Per 1 kg net released reference product |
| `clove_cleaning_sorting` | Clove cleaning and sorting | required | Dry culling, screening, grading and foreign-matter removal are required; wet-cleaning cards are used only when that route is recorded. | Foreground preparation and physical-hazard removal | Per 1 kg net released reference product |
| `clove_drying_conditioning` | Clove drying and moisture conditioning | conditional | Include only when the foreground facility changes moisture after receipt, wet cleaning or another declared operation. | Foreground moisture control | Per 1 kg net released reference product |
| `clove_size_reduction` | Clove crushing, grinding and particle classification | conditional | Include for a crushed, ground or powdered reference form; omit for a processed whole-form route. | Foreground form and particle-size production | Per 1 kg net released reference product |
| `steam_microbial_reduction` | Steam microbial reduction | conditional | Include only when a validated steam treatment is performed at the foreground facility; do not average it with untreated, fumigated or irradiated routes. | Foreground pathogen-reduction treatment | Per 1 kg net released reference product |
| `anticaking_agent_dosing` | Amorphous silicon dioxide dosing | conditional | Include only for a declared ground or powdered formulation using INS 551 under the governing food rules. | Foreground formulation | Per 1 kg net released reference product |
| `onsite_heat_generation` | On-site steam, hot-water and drying-air generation | conditional | Include only when fuel is combusted or heat is generated inside the foreground boundary; purchased heat remains at the consuming process. | Foreground utility generation | Per 1 kg net released reference product |
| `packaging_storage_release` | Packaging, controlled storage and product release | required | Every dataset records the single released product form, its exact package bill of materials and any controlled-storage operation. | Foreground finalisation and reference-product release | Per 1 kg net released reference product |
| `sanitation_wastewater_control` | Sanitation, dust collection and wastewater control | required | Dry sanitation and dust control are required; wet sanitation, wastewater treatment and direct-discharge cards are used only when those operations occur. | Foreground hygiene and environmental control | Per 1 kg net released reference product |

### Process: Raw clove receipt and lot acceptance (`raw_clove_receipt`)

#### Inputs

##### Product flows

###### Incoming raw clove lot (`receipt_raw_whole_cloves`)

Unprocessed whole cloves (CPC 01656) enters raw clove receipt and lot acceptance as one separately recorded exchange. Record supplier, origin, botanical identity, incoming moisture, harvest/post-harvest state and lot mass; do not substitute a processed CPC 23926 input.

- Selected flow: Unprocessed whole cloves (CPC 01656)
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_lot_records`
- Sources: `un-cpc-3-0-2025`, `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Receipt electricity (`receipt_grid_electricity`)

Grid electricity enters raw clove receipt and lot acceptance as one separately recorded exchange. Use only the receipt, weighing, sampling and internal lot-handling electricity attributable to the declared lot.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: record metered electricity consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_lot_records`
- Sources: `un-cpc-3-0-2025`, `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

##### Waste flows

_No waste exchanges are defined in this direction for this process._

##### Elementary flows

_No elementary exchanges are defined in this direction for this process._

#### Outputs

##### Product flows

###### Accepted raw cloves (`receipt_accepted_whole_cloves`)

Accepted unprocessed whole cloves leaves raw clove receipt and lot acceptance as one separately recorded exchange. Record only the mass accepted for the declared processing route after lot inspection and sampling.

- Selected flow: Accepted unprocessed whole cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_lot_records`
- Sources: `un-cpc-3-0-2025`, `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

##### Waste flows

###### Mould-damaged rejects (`receipt_mould_rejects`)

Mould-damaged clove rejects leaves raw clove receipt and lot acceptance as one separately recorded exchange. Segregate cloves rejected for visible mould or mustiness from every other defect class.

- Selected flow: Mould-damaged clove rejects
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_lot_records`
- Sources: `un-cpc-3-0-2025`, `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Insect-damaged rejects (`receipt_insect_rejects`)

Insect-damaged clove rejects leaves raw clove receipt and lot acceptance as one separately recorded exchange. Segregate insect-infested or insect-defiled cloves from every other defect class.

- Selected flow: Insect-damaged clove rejects
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_lot_records`
- Sources: `un-cpc-3-0-2025`, `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Headless-clove rejects (`receipt_headless_rejects`)

Headless clove rejects leaves raw clove receipt and lot acceptance as one separately recorded exchange. Use this Codex defect identity only when rejected rather than retained within the declared grade.

- Selected flow: Headless clove rejects
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_lot_records`
- Sources: `un-cpc-3-0-2025`, `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Mother-clove rejects (`receipt_mother_clove_rejects`)

Mother clove rejects leaves raw clove receipt and lot acceptance as one separately recorded exchange. Use this Codex defect identity only when separated from the accepted product lot.

- Selected flow: Mother clove rejects
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_lot_records`
- Sources: `un-cpc-3-0-2025`, `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Khoker-clove rejects (`receipt_khoker_clove_rejects`)

Khoker clove rejects leaves raw clove receipt and lot acceptance as one separately recorded exchange. Record incompletely dried or fermented khoker cloves only when physically segregated as waste.

- Selected flow: Khoker clove rejects
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_lot_records`
- Sources: `un-cpc-3-0-2025`, `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Excreta-contaminated rejects (`receipt_excreta_contaminated_rejects`)

Animal-excreta-contaminated clove rejects leaves raw clove receipt and lot acceptance as one separately recorded exchange. Record the separately rejected mass; it cannot re-enter the human-food product stream.

- Selected flow: Animal-excreta-contaminated clove rejects
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_lot_records`
- Sources: `un-cpc-3-0-2025`, `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Incoming jute-sack waste (`receipt_jute_sack_waste`)

Discarded jute sacks leaves raw clove receipt and lot acceptance as one separately recorded exchange. Use only for incoming jute sacks discarded inside the foreground boundary.

- Selected flow: Discarded jute sacks
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_lot_records`
- Sources: `un-cpc-3-0-2025`, `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Incoming polypropylene-sack waste (`receipt_pp_sack_waste`)

Discarded polypropylene woven sacks leaves raw clove receipt and lot acceptance as one separately recorded exchange. Use only for incoming polypropylene sacks discarded inside the foreground boundary.

- Selected flow: Discarded polypropylene woven sacks
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_lot_records`
- Sources: `un-cpc-3-0-2025`, `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

##### Elementary flows

_No elementary exchanges are defined in this direction for this process._


### Process: Clove cleaning and sorting (`clove_cleaning_sorting`)

#### Inputs

##### Product flows

###### Accepted cloves for cleaning (`cleaning_accepted_whole_cloves`)

Accepted unprocessed whole cloves enters clove cleaning and sorting as one separately recorded exchange. Transfer the measured accepted lot without combining it with another botanical identity or product form.

- Selected flow: Accepted unprocessed whole cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Cleaning and sorting electricity (`cleaning_grid_electricity`)

Grid electricity enters clove cleaning and sorting as one separately recorded exchange. Record electricity for conveyors, screens, aspirators, magnets, metal detection and wet-cleaning equipment separately from later stages.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: record metered electricity consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Dry cleaning compressed air (`cleaning_compressed_air`)

Dry filtered compressed air enters clove cleaning and sorting as one separately recorded exchange. Use only where dried, filtered compressed air contacts equipment or product; record volume at stated pressure conditions.

- Selected flow: Dry filtered compressed air
- Flow property / unit: Volume / Nm3
- Amount rule: record metered dry compressed air consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Wet-cleaning water (`cleaning_potable_water`)

Potable cleaning water enters clove cleaning and sorting as one separately recorded exchange. Use only for the declared wet-cleaning route; dry-cleaned lots record no quantity on this card.

- Selected flow: Potable cleaning water
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Sodium hypochlorite wash chemical (`cleaning_sodium_hypochlorite`)

Sodium hypochlorite aqueous solution enters clove cleaning and sorting as one separately recorded exchange. Use only when this exact disinfectant is dosed in the declared wet-cleaning route and state formulation concentration.

- Selected flow: Sodium hypochlorite aqueous solution
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Peracetic acid wash chemical (`cleaning_peracetic_acid`)

Peracetic acid aqueous solution enters clove cleaning and sorting as one separately recorded exchange. Use only when this exact disinfectant is dosed in the declared wet-cleaning route and state formulation concentration.

- Selected flow: Peracetic acid aqueous solution
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Purchased cleaning hot water (`cleaning_hot_water`)

Purchased hot water enters clove cleaning and sorting as one separately recorded exchange. Use only when hot water crosses into wet cleaning from an external or separately modelled utility process.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: record purchased or internally transferred energy consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Waste flows

_No waste exchanges are defined in this direction for this process._

##### Elementary flows

_No elementary exchanges are defined in this direction for this process._

#### Outputs

##### Product flows

###### Cleaned whole product (`cleaning_processed_whole_cloves`)

Processed whole cloves leaves clove cleaning and sorting as one separately recorded exchange. This is the cleaned whole-form intermediate or final whole-form product; retain the declared moisture and defect grade.

- Selected flow: Processed whole cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Saleable stem screenings (`cleaning_saleable_stem_screenings`)

Saleable clove stem screenings leaves clove cleaning and sorting as one separately recorded exchange. Use only where stem screenings meet a separately specified market function and are transferred as a co-product.

- Selected flow: Saleable clove stem screenings
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Waste flows

###### Discarded stem screenings (`cleaning_stem_screenings_waste`)

Clove stem screenings for disposal leaves clove cleaning and sorting as one separately recorded exchange. Use only when stem screenings are discarded; do not also record the same mass as the saleable co-product.

- Selected flow: Clove stem screenings for disposal
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Foreign plant debris (`cleaning_foreign_plant_debris`)

Foreign plant debris removed from cloves leaves clove cleaning and sorting as one separately recorded exchange. Record source-plant debris not accepted in the final product, separately from mineral or metal debris.

- Selected flow: Foreign plant debris removed from cloves
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Stone and grit waste (`cleaning_stone_grit_waste`)

Stones and mineral grit removed from cloves leaves clove cleaning and sorting as one separately recorded exchange. Record the measured mineral foreign matter separated by screening, aspiration or density separation.

- Selected flow: Stones and mineral grit removed from cloves
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Ferrous metal fragments (`cleaning_ferrous_metal_waste`)

Ferrous metal fragments removed from cloves leaves clove cleaning and sorting as one separately recorded exchange. Record the mass captured by magnets or rejected following metal detection.

- Selected flow: Ferrous metal fragments removed from cloves
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Non-ferrous metal fragments (`cleaning_nonferrous_metal_waste`)

Non-ferrous metal fragments removed from cloves leaves clove cleaning and sorting as one separately recorded exchange. Record the mass rejected by metal detection separately from ferrous fragments.

- Selected flow: Non-ferrous metal fragments removed from cloves
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Captured cleaning dust (`cleaning_captured_clove_dust`)

Captured clove dust from cleaning leaves clove cleaning and sorting as one separately recorded exchange. Record dry clove dust collected by aspiration or filtration and sent to a declared waste treatment.

- Selected flow: Captured clove dust from cleaning
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Clove wash wastewater (`cleaning_wash_wastewater`)

Wastewater from clove wet cleaning leaves clove cleaning and sorting as one separately recorded exchange. Use only when the wet-cleaning stream is transferred to treatment or sewer as a waste flow; do not duplicate a direct discharge.

- Selected flow: Wastewater from clove wet cleaning
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Wet-cleaning settled solids (`cleaning_settled_solids`)

Settled clove wash solids leaves clove cleaning and sorting as one separately recorded exchange. Record solids physically removed from wet-cleaning water before wastewater transfer.

- Selected flow: Settled clove wash solids
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Elementary flows

###### Uncaptured clove dust (`cleaning_clove_pm_air`)

Clove particulate matter to air leaves clove cleaning and sorting as one separately recorded exchange. Record only the uncaptured mass released outside the building after any dust-control device.

- Selected flow: Clove particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Chemical oxygen demand discharge (`cleaning_cod_water`)

Chemical oxygen demand to water leaves clove cleaning and sorting as one separately recorded exchange. Use only for a measured final direct discharge from this process; omit when wastewater is transferred as a waste flow.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Five-day biochemical oxygen demand discharge (`cleaning_bod5_water`)

Biochemical oxygen demand, 5 days, to water leaves clove cleaning and sorting as one separately recorded exchange. Use only for a measured final direct discharge from this process; omit when wastewater is transferred as a waste flow.

- Selected flow: Biochemical oxygen demand, 5 days, to water
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Suspended-solids discharge (`cleaning_tss_water`)

Total suspended solids to water leaves clove cleaning and sorting as one separately recorded exchange. Use only for a measured final direct discharge from this process; omit when wastewater is transferred as a waste flow.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Chloride discharge (`cleaning_chloride_water`)

Chloride to water leaves clove cleaning and sorting as one separately recorded exchange. Use only when chloride is measured in the final discharge and attributable to this wet-cleaning route.

- Selected flow: Chloride to water
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Free-chlorine discharge (`cleaning_free_chlorine_water`)

Free chlorine to water leaves clove cleaning and sorting as one separately recorded exchange. Use only when sodium hypochlorite is used and residual free chlorine is measured at the final discharge.

- Selected flow: Free chlorine to water
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sorting_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`


### Process: Clove drying and moisture conditioning (`clove_drying_conditioning`)

#### Inputs

##### Product flows

###### Whole cloves for drying (`drying_processed_whole_cloves`)

Processed whole cloves enters clove drying and moisture conditioning as one separately recorded exchange. Use only for the declared lot entering facility drying or moisture conditioning.

- Selected flow: Processed whole cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Drying electricity (`drying_grid_electricity`)

Grid electricity enters clove drying and moisture conditioning as one separately recorded exchange. Record electricity for fans, conveyors, controls and electrically heated equipment separately from heat carriers.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: record metered electricity consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Purchased drying steam (`drying_purchased_steam`)

Purchased saturated steam enters clove drying and moisture conditioning as one separately recorded exchange. Use only when steam crosses the drying-process boundary from an external supplier.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: record purchased or internally transferred energy consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Purchased drying hot water (`drying_purchased_hot_water`)

Purchased hot water enters clove drying and moisture conditioning as one separately recorded exchange. Use only when hot water crosses the drying-process boundary from an external supplier.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: record purchased or internally transferred energy consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Internally generated drying air (`drying_heated_air`)

Heated drying air enters clove drying and moisture conditioning as one separately recorded exchange. Use only when separately modelled on-site heat generation supplies the dryer; do not also record the same fuel here.

- Selected flow: Heated drying air
- Flow property / unit: Energy / MJ
- Amount rule: record purchased or internally transferred energy consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Waste flows

_No waste exchanges are defined in this direction for this process._

##### Elementary flows

_No elementary exchanges are defined in this direction for this process._

#### Outputs

##### Product flows

###### Moisture-conditioned whole cloves (`drying_processed_whole_cloves_output`)

Processed whole cloves leaves clove drying and moisture conditioning as one separately recorded exchange. Record output mass, moisture and drying conditions for the same declared lot.

- Selected flow: Processed whole cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Waste flows

###### Heat-damaged clove rejects (`drying_heat_damaged_rejects`)

Heat-damaged clove rejects leaves clove drying and moisture conditioning as one separately recorded exchange. Record only product rejected for scorching, excessive volatile-oil loss or another documented drying failure.

- Selected flow: Heat-damaged clove rejects
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Dryer condensate wastewater (`drying_condensate_wastewater`)

Dryer condensate wastewater leaves clove drying and moisture conditioning as one separately recorded exchange. Record only condensate leaving as wastewater rather than returned to a utility system.

- Selected flow: Dryer condensate wastewater
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Elementary flows

###### Moisture removed during drying (`drying_water_vapour_air`)

Water vapour to air leaves clove drying and moisture conditioning as one separately recorded exchange. Calculate from inlet and outlet moisture mass balance, corrected for measured condensate.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Dryer clove dust (`drying_clove_pm_air`)

Clove particulate matter to air leaves clove drying and moisture conditioning as one separately recorded exchange. Record only uncaptured clove dust released after dryer exhaust control.

- Selected flow: Clove particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`


### Process: Clove crushing, grinding and particle classification (`clove_size_reduction`)

#### Inputs

##### Product flows

###### Whole cloves for size reduction (`size_reduction_processed_whole_cloves`)

Processed whole cloves enters clove crushing, grinding and particle classification as one separately recorded exchange. Use the measured whole-form input for exactly one declared crushed, ground or powdered route.

- Selected flow: Processed whole cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Size-reduction electricity (`size_reduction_grid_electricity`)

Grid electricity enters clove crushing, grinding and particle classification as one separately recorded exchange. Record electricity for crusher, mill, grinder, sieve, classifier and dust-control equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: record metered electricity consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Classifier compressed air (`size_reduction_compressed_air`)

Dry filtered compressed air enters clove crushing, grinding and particle classification as one separately recorded exchange. Use only where pneumatic transport or air classification is used and state pressure conditions.

- Selected flow: Dry filtered compressed air
- Flow property / unit: Volume / Nm3
- Amount rule: record metered dry compressed air consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Waste flows

_No waste exchanges are defined in this direction for this process._

##### Elementary flows

_No elementary exchanges are defined in this direction for this process._

#### Outputs

##### Product flows

###### Crushed product (`size_reduction_crushed_cloves`)

Crushed cloves leaves clove crushing, grinding and particle classification as one separately recorded exchange. Use only for the declared crushed form and record the sieve or particle-size specification.

- Selected flow: Crushed cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Ground product (`size_reduction_ground_cloves`)

Ground cloves leaves clove crushing, grinding and particle classification as one separately recorded exchange. Use only for the declared ground form and record the sieve or particle-size specification.

- Selected flow: Ground cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Powdered product (`size_reduction_clove_powder`)

Clove powder leaves clove crushing, grinding and particle classification as one separately recorded exchange. Use only for the declared powder form and record the sieve or particle-size distribution.

- Selected flow: Clove powder
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Saleable milling stem screenings (`size_reduction_saleable_stem_screenings`)

Saleable clove stem screenings leaves clove crushing, grinding and particle classification as one separately recorded exchange. Use only where separately recovered stem screenings have a documented market function.

- Selected flow: Saleable clove stem screenings
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Waste flows

###### Discarded milling stem screenings (`size_reduction_stem_screenings_waste`)

Clove stem screenings for disposal leaves clove crushing, grinding and particle classification as one separately recorded exchange. Use only for discarded stem screenings; do not duplicate a saleable co-product mass.

- Selected flow: Clove stem screenings for disposal
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Discarded oversized particles (`size_reduction_oversize_waste`)

Oversized clove particles for disposal leaves clove crushing, grinding and particle classification as one separately recorded exchange. Use only when oversized particles leave the rework loop and are discarded.

- Selected flow: Oversized clove particles for disposal
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Captured milling dust (`size_reduction_captured_dust`)

Captured clove dust from size reduction leaves clove crushing, grinding and particle classification as one separately recorded exchange. Record dust collected by the declared cyclone or filter and transferred as waste.

- Selected flow: Captured clove dust from size reduction
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Milling ferrous fragments (`size_reduction_ferrous_metal_waste`)

Ferrous metal fragments removed after milling leaves clove crushing, grinding and particle classification as one separately recorded exchange. Record the mass rejected by the post-mill magnet or detector.

- Selected flow: Ferrous metal fragments removed after milling
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Milling non-ferrous fragments (`size_reduction_nonferrous_metal_waste`)

Non-ferrous metal fragments removed after milling leaves clove crushing, grinding and particle classification as one separately recorded exchange. Record the mass rejected by the post-mill detector separately from ferrous metal.

- Selected flow: Non-ferrous metal fragments removed after milling
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Spent milling filter bags (`size_reduction_spent_filter_bags`)

Spent polyester dust-filter bags leaves clove crushing, grinding and particle classification as one separately recorded exchange. Record replaced polyester filter bags as a distinct waste material.

- Selected flow: Spent polyester dust-filter bags
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_size_reduction_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Elementary flows

###### Uncaptured milling dust (`size_reduction_clove_pm_air`)

Clove particulate matter to air leaves clove crushing, grinding and particle classification as one separately recorded exchange. Record only the uncaptured mass released after the final dust-control device.

- Selected flow: Clove particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_size_reduction_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`


### Process: Steam microbial reduction (`steam_microbial_reduction`)

#### Inputs

##### Product flows

###### Whole cloves for steam treatment (`steam_treatment_whole_cloves_input`)

Processed whole cloves enters steam microbial reduction as one separately recorded exchange. Use only when the declared whole-form lot receives validated steam treatment.

- Selected flow: Processed whole cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Crushed cloves for steam treatment (`steam_treatment_crushed_cloves_input`)

Crushed cloves enters steam microbial reduction as one separately recorded exchange. Use only when the declared crushed-form lot receives validated steam treatment.

- Selected flow: Crushed cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Ground cloves for steam treatment (`steam_treatment_ground_cloves_input`)

Ground cloves enters steam microbial reduction as one separately recorded exchange. Use only when the declared ground-form lot receives validated steam treatment.

- Selected flow: Ground cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Clove powder for steam treatment (`steam_treatment_powder_input`)

Clove powder enters steam microbial reduction as one separately recorded exchange. Use only when the declared powder-form lot receives validated steam treatment.

- Selected flow: Clove powder
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Steam-treatment steam (`steam_treatment_purchased_steam`)

Purchased saturated steam enters steam microbial reduction as one separately recorded exchange. Record saturated steam delivered to the product and keep its pressure and quality in the treatment log.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: record purchased or internally transferred energy consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Steam-treatment electricity (`steam_treatment_grid_electricity`)

Grid electricity enters steam microbial reduction as one separately recorded exchange. Record electricity for the treatment chamber, conveying, controls, vacuum and post-treatment drying equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: record metered electricity consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Waste flows

_No waste exchanges are defined in this direction for this process._

##### Elementary flows

_No elementary exchanges are defined in this direction for this process._

#### Outputs

##### Product flows

###### Steam-treated whole cloves (`steam_treatment_whole_cloves_output`)

Processed whole cloves leaves steam microbial reduction as one separately recorded exchange. Use only for the treated whole-form lot and retain treatment time, temperature and post-treatment moisture.

- Selected flow: Processed whole cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Steam-treated crushed cloves (`steam_treatment_crushed_cloves_output`)

Crushed cloves leaves steam microbial reduction as one separately recorded exchange. Use only for the treated crushed-form lot and retain treatment time, temperature and post-treatment moisture.

- Selected flow: Crushed cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Steam-treated ground cloves (`steam_treatment_ground_cloves_output`)

Ground cloves leaves steam microbial reduction as one separately recorded exchange. Use only for the treated ground-form lot and retain treatment time, temperature and post-treatment moisture.

- Selected flow: Ground cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Steam-treated clove powder (`steam_treatment_powder_output`)

Clove powder leaves steam microbial reduction as one separately recorded exchange. Use only for the treated powder-form lot and retain treatment time, temperature and post-treatment moisture.

- Selected flow: Clove powder
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Waste flows

###### Steam-treatment condensate (`steam_treatment_condensate_wastewater`)

Steam-treatment condensate wastewater leaves steam microbial reduction as one separately recorded exchange. Record condensate leaving the treatment process as wastewater after any recovery.

- Selected flow: Steam-treatment condensate wastewater
- Flow property / unit: Energy / MJ
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Off-spec treated whole cloves (`steam_treatment_whole_rejects`)

Off-spec steam-treated whole clove waste leaves steam microbial reduction as one separately recorded exchange. Use only for rejected whole-form material and keep it separate from every reduced-size form.

- Selected flow: Off-spec steam-treated whole clove waste
- Flow property / unit: Energy / MJ
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Off-spec treated crushed cloves (`steam_treatment_crushed_rejects`)

Off-spec steam-treated crushed clove waste leaves steam microbial reduction as one separately recorded exchange. Use only for rejected crushed-form material.

- Selected flow: Off-spec steam-treated crushed clove waste
- Flow property / unit: Energy / MJ
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Off-spec treated ground cloves (`steam_treatment_ground_rejects`)

Off-spec steam-treated ground clove waste leaves steam microbial reduction as one separately recorded exchange. Use only for rejected ground-form material.

- Selected flow: Off-spec steam-treated ground clove waste
- Flow property / unit: Energy / MJ
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Off-spec treated clove powder (`steam_treatment_powder_rejects`)

Off-spec steam-treated clove powder waste leaves steam microbial reduction as one separately recorded exchange. Use only for rejected powder-form material.

- Selected flow: Off-spec steam-treated clove powder waste
- Flow property / unit: Energy / MJ
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Elementary flows

###### Steam-treatment water vapour (`steam_treatment_water_vapour_air`)

Water vapour to air leaves steam microbial reduction as one separately recorded exchange. Calculate from steam, condensate and product-moisture records.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Steam-treatment clove dust (`steam_treatment_clove_pm_air`)

Clove particulate matter to air leaves steam microbial reduction as one separately recorded exchange. Record only uncaptured product dust released after treatment exhaust control.

- Selected flow: Clove particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_steam_treatment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`


### Process: Amorphous silicon dioxide dosing (`anticaking_agent_dosing`)

#### Inputs

##### Product flows

###### Ground cloves for dosing (`additive_ground_cloves_input`)

Ground cloves enters amorphous silicon dioxide dosing as one separately recorded exchange. Use only for a ground-form formulation that declares INS 551.

- Selected flow: Ground cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_dosing_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-gsfa-ins-551-2025`, `eu-pef-2021-2279`

###### Clove powder for dosing (`additive_powder_input`)

Clove powder enters amorphous silicon dioxide dosing as one separately recorded exchange. Use only for a powder-form formulation that declares INS 551.

- Selected flow: Clove powder
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_dosing_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-gsfa-ins-551-2025`, `eu-pef-2021-2279`

###### Amorphous silicon dioxide (`additive_amorphous_silica`)

Amorphous silicon dioxide (INS 551) enters amorphous silicon dioxide dosing as one separately recorded exchange. Record the food-grade additive mass and supplier specification; no additive may be inferred from product form alone.

- Selected flow: Amorphous silicon dioxide (INS 551)
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_dosing_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-gsfa-ins-551-2025`, `eu-pef-2021-2279`

###### Dosing and blending electricity (`additive_grid_electricity`)

Grid electricity enters amorphous silicon dioxide dosing as one separately recorded exchange. Record electricity for dosing, blending and local dust control.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: record metered electricity consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_dosing_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-gsfa-ins-551-2025`, `eu-pef-2021-2279`

##### Waste flows

_No waste exchanges are defined in this direction for this process._

##### Elementary flows

_No elementary exchanges are defined in this direction for this process._

#### Outputs

##### Product flows

###### Ground cloves containing INS 551 (`additive_ground_cloves_output`)

Ground cloves with amorphous silicon dioxide leaves amorphous silicon dioxide dosing as one separately recorded exchange. Record the exact formulation and additive concentration for the declared ground product.

- Selected flow: Ground cloves with amorphous silicon dioxide
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_dosing_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-gsfa-ins-551-2025`, `eu-pef-2021-2279`

###### Clove powder containing INS 551 (`additive_powder_output`)

Clove powder with amorphous silicon dioxide leaves amorphous silicon dioxide dosing as one separately recorded exchange. Record the exact formulation and additive concentration for the declared powder product.

- Selected flow: Clove powder with amorphous silicon dioxide
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_dosing_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-gsfa-ins-551-2025`, `eu-pef-2021-2279`

##### Waste flows

###### Ground-clove dosing spill (`additive_ground_clove_spill`)

Spilled ground clove waste leaves amorphous silicon dioxide dosing as one separately recorded exchange. Record ground-form losses separately from powder and additive losses.

- Selected flow: Spilled ground clove waste
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_dosing_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-gsfa-ins-551-2025`, `eu-pef-2021-2279`

###### Clove-powder dosing spill (`additive_powder_spill`)

Spilled clove powder waste leaves amorphous silicon dioxide dosing as one separately recorded exchange. Record powder-form losses separately from ground and additive losses.

- Selected flow: Spilled clove powder waste
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_dosing_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-gsfa-ins-551-2025`, `eu-pef-2021-2279`

###### Silicon-dioxide dosing spill (`additive_silica_spill`)

Spilled amorphous silicon dioxide waste leaves amorphous silicon dioxide dosing as one separately recorded exchange. Record the exact additive loss separately from clove material.

- Selected flow: Spilled amorphous silicon dioxide waste
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_additive_dosing_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-gsfa-ins-551-2025`, `eu-pef-2021-2279`

##### Elementary flows

###### Silicon-dioxide dust (`additive_silica_pm_air`)

Amorphous silicon dioxide particulate matter to air leaves amorphous silicon dioxide dosing as one separately recorded exchange. Record only the uncaptured additive mass released outside after local exhaust control.

- Selected flow: Amorphous silicon dioxide particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_additive_dosing_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-gsfa-ins-551-2025`, `eu-pef-2021-2279`

###### Clove dust from blending (`additive_clove_pm_air`)

Clove particulate matter to air leaves amorphous silicon dioxide dosing as one separately recorded exchange. Record only the uncaptured clove dust released outside after local exhaust control.

- Selected flow: Clove particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_additive_dosing_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-gsfa-ins-551-2025`, `eu-pef-2021-2279`


### Process: On-site steam, hot-water and drying-air generation (`onsite_heat_generation`)

#### Inputs

##### Product flows

###### Utility makeup water (`utility_makeup_water`)

Potable boiler makeup water enters on-site steam, hot-water and drying-air generation as one separately recorded exchange. Record water entering on-site steam, hot-water or heated-air generation.

- Selected flow: Potable boiler makeup water
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Utility electricity (`utility_grid_electricity`)

Grid electricity enters on-site steam, hot-water and drying-air generation as one separately recorded exchange. Record electricity for pumps, fans, controls and water-treatment equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: record metered electricity consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Natural-gas fuel (`utility_natural_gas`)

Natural gas enters on-site steam, hot-water and drying-air generation as one separately recorded exchange. Use only for a metered natural-gas-fired utility or direct-air heater; do not combine with another fuel.

- Selected flow: Natural gas
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Diesel fuel (`utility_diesel`)

Diesel fuel enters on-site steam, hot-water and drying-air generation as one separately recorded exchange. Use only for a metered diesel-fired utility or direct-air heater; do not combine with another fuel.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Liquefied-petroleum-gas fuel (`utility_lpg`)

Liquefied petroleum gas enters on-site steam, hot-water and drying-air generation as one separately recorded exchange. Use only for a metered LPG-fired utility or direct-air heater; retain the supplier composition.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Waste flows

_No waste exchanges are defined in this direction for this process._

##### Elementary flows

_No elementary exchanges are defined in this direction for this process._

#### Outputs

##### Product flows

###### Generated saturated steam (`utility_saturated_steam`)

Saturated steam leaves on-site steam, hot-water and drying-air generation as one separately recorded exchange. Record energy transferred to foreground consumers and avoid duplicating the associated fuel at those consumers.

- Selected flow: Saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Generated hot water (`utility_hot_water`)

Hot water leaves on-site steam, hot-water and drying-air generation as one separately recorded exchange. Record energy transferred to foreground consumers with supply and return temperatures.

- Selected flow: Hot water
- Flow property / unit: Energy / MJ
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Generated drying air (`utility_heated_drying_air`)

Heated drying air leaves on-site steam, hot-water and drying-air generation as one separately recorded exchange. Record energy transferred to a dryer and keep combustion gas contact status explicit.

- Selected flow: Heated drying air
- Flow property / unit: Energy / MJ
- Amount rule: record the net quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Waste flows

###### Boiler blowdown wastewater (`utility_boiler_blowdown`)

Boiler blowdown wastewater leaves on-site steam, hot-water and drying-air generation as one separately recorded exchange. Record blowdown leaving the utility process after any internal recovery.

- Selected flow: Boiler blowdown wastewater
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Elementary flows

###### Fossil carbon dioxide (`utility_fossil_co2_air`)

Carbon dioxide, fossil, to air leaves on-site steam, hot-water and drying-air generation as one separately recorded exchange. Calculate from each separately recorded fuel or use direct stack data; no default factor is supplied by this PCR.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Nitrogen monoxide (`utility_nitrogen_monoxide_air`)

Nitrogen monoxide to air leaves on-site steam, hot-water and drying-air generation as one separately recorded exchange. Measure or calculate this species separately from nitrogen dioxide.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Nitrogen dioxide (`utility_nitrogen_dioxide_air`)

Nitrogen dioxide to air leaves on-site steam, hot-water and drying-air generation as one separately recorded exchange. Measure or calculate this species separately from nitrogen monoxide.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Sulfur dioxide (`utility_sulfur_dioxide_air`)

Sulfur dioxide to air leaves on-site steam, hot-water and drying-air generation as one separately recorded exchange. Measure or calculate this sulfur species from the declared fuel and control system.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Sulfur trioxide (`utility_sulfur_trioxide_air`)

Sulfur trioxide to air leaves on-site steam, hot-water and drying-air generation as one separately recorded exchange. Use only when measured or calculated separately from sulfur dioxide.

- Selected flow: Sulfur trioxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Fine particulate matter (`utility_pm25_air`)

Particulate matter, less than 2.5 micrometres, to air leaves on-site steam, hot-water and drying-air generation as one separately recorded exchange. Record the final stack release after control as a separate size fraction.

- Selected flow: Particulate matter, less than 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Coarse particulate matter (`utility_pm_coarse_air`)

Particulate matter, 2.5 to 10 micrometres, to air leaves on-site steam, hot-water and drying-air generation as one separately recorded exchange. Record the final stack release after control separately from the fine fraction.

- Selected flow: Particulate matter, 2.5 to 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_generation_records`
- Sources: `jrc-fdm-bref-2019`, `eu-pef-2021-2279`


### Process: Packaging, controlled storage and product release (`packaging_storage_release`)

#### Inputs

##### Product flows

###### Whole cloves for packing (`packaging_whole_cloves_input`)

Processed whole cloves enters packaging, controlled storage and product release as one separately recorded exchange. Use only for the declared processed whole-form reference product.

- Selected flow: Processed whole cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Crushed cloves for packing (`packaging_crushed_cloves_input`)

Crushed cloves enters packaging, controlled storage and product release as one separately recorded exchange. Use only for the declared crushed-form reference product.

- Selected flow: Crushed cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Ground cloves for packing (`packaging_ground_cloves_input`)

Ground cloves enters packaging, controlled storage and product release as one separately recorded exchange. Use only for the declared additive-free ground-form reference product.

- Selected flow: Ground cloves
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Clove powder for packing (`packaging_powder_input`)

Clove powder enters packaging, controlled storage and product release as one separately recorded exchange. Use only for the declared additive-free powder-form reference product.

- Selected flow: Clove powder
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Ground cloves with INS 551 for packing (`packaging_ground_silica_input`)

Ground cloves with amorphous silicon dioxide enters packaging, controlled storage and product release as one separately recorded exchange. Use only for the declared ground formulation containing INS 551.

- Selected flow: Ground cloves with amorphous silicon dioxide
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Clove powder with INS 551 for packing (`packaging_powder_silica_input`)

Clove powder with amorphous silicon dioxide enters packaging, controlled storage and product release as one separately recorded exchange. Use only for the declared powder formulation containing INS 551.

- Selected flow: Clove powder with amorphous silicon dioxide
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Packing and storage electricity (`packaging_grid_electricity`)

Grid electricity enters packaging, controlled storage and product release as one separately recorded exchange. Record filling, sealing, labelling, palletising, humidity control and any cooling electricity attributable to the product.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: record metered electricity consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### LDPE inner liner (`packaging_ldpe_liner`)

Low-density polyethylene inner liner enters packaging, controlled storage and product release as one separately recorded exchange. Use only when this exact component appears in the product-specific packaging bill of materials.

- Selected flow: Low-density polyethylene inner liner
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Polypropylene woven sack (`packaging_pp_woven_sack`)

Polypropylene woven sack enters packaging, controlled storage and product release as one separately recorded exchange. Use only when this exact component appears in the product-specific packaging bill of materials.

- Selected flow: Polypropylene woven sack
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Multiwall kraft sack (`packaging_kraft_sack`)

Multiwall kraft paper sack enters packaging, controlled storage and product release as one separately recorded exchange. Use only when this exact component appears in the product-specific packaging bill of materials.

- Selected flow: Multiwall kraft paper sack
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### BOPP pouch (`packaging_bopp_pouch`)

Biaxially oriented polypropylene pouch enters packaging, controlled storage and product release as one separately recorded exchange. Use only when this exact component appears in the product-specific packaging bill of materials.

- Selected flow: Biaxially oriented polypropylene pouch
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Corrugated shipping box (`packaging_corrugated_box`)

Corrugated fibreboard box enters packaging, controlled storage and product release as one separately recorded exchange. Use only when this exact component appears in the product-specific packaging bill of materials.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Wooden pallet (`packaging_wooden_pallet`)

Wooden pallet enters packaging, controlled storage and product release as one separately recorded exchange. Use only when this exact component appears in the product-specific packaging bill of materials.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### LLDPE stretch film (`packaging_lldpe_stretch_film`)

Linear low-density polyethylene stretch film enters packaging, controlled storage and product release as one separately recorded exchange. Use only when this exact component appears in the product-specific packaging bill of materials.

- Selected flow: Linear low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Paper label (`packaging_paper_label`)

Paper pressure-sensitive label enters packaging, controlled storage and product release as one separately recorded exchange. Use only when this exact component appears in the product-specific packaging bill of materials.

- Selected flow: Paper pressure-sensitive label
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### R-717 refrigerant makeup (`storage_r717_makeup`)

R-717 ammonia refrigerant enters packaging, controlled storage and product release as one separately recorded exchange. Use only when this exact refrigerant is charged into controlled-storage equipment; record no catch-all refrigerant card.

- Selected flow: R-717 ammonia refrigerant
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-climate-industrial-refrigeration-2025`, `eu-pef-2021-2279`

###### R-744 refrigerant makeup (`storage_r744_makeup`)

R-744 carbon dioxide refrigerant enters packaging, controlled storage and product release as one separately recorded exchange. Use only when this exact refrigerant is charged into controlled-storage equipment; record no catch-all refrigerant card.

- Selected flow: R-744 carbon dioxide refrigerant
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-climate-industrial-refrigeration-2025`, `eu-pef-2021-2279`

###### R-290 refrigerant makeup (`storage_r290_makeup`)

R-290 propane refrigerant enters packaging, controlled storage and product release as one separately recorded exchange. Use only when this exact refrigerant is charged into controlled-storage equipment; record no catch-all refrigerant card.

- Selected flow: R-290 propane refrigerant
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-climate-industrial-refrigeration-2025`, `eu-pef-2021-2279`

###### R-449A refrigerant makeup (`storage_r449a_makeup`)

R-449A refrigerant blend enters packaging, controlled storage and product release as one separately recorded exchange. Use only when this exact refrigerant is charged into controlled-storage equipment; record no catch-all refrigerant card.

- Selected flow: R-449A refrigerant blend
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-climate-industrial-refrigeration-2025`, `eu-pef-2021-2279`

###### R-1234ze(E) refrigerant makeup (`storage_r1234ze_makeup`)

R-1234ze(E) refrigerant enters packaging, controlled storage and product release as one separately recorded exchange. Use only when this exact refrigerant is charged into controlled-storage equipment; record no catch-all refrigerant card.

- Selected flow: R-1234ze(E) refrigerant
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-climate-industrial-refrigeration-2025`, `eu-pef-2021-2279`

##### Waste flows

_No waste exchanges are defined in this direction for this process._

##### Elementary flows

_No elementary exchanges are defined in this direction for this process._

#### Outputs

##### Product flows

###### Released reference product (`reference_product_output`)

Cloves (whole stems), processed leaves packaging, controlled storage and product release as one separately recorded exchange. Release exactly one declared product form and route at 1 kg net product mass; packaging mass is excluded.

- Selected flow: Cloves (whole stems), processed `c848928e-35e4-4713-aba4-2f2d01ac641d`
- Flow property / unit: Mass / kg
- Amount rule: 1 kg net released product
- Value mode: Fixed value (`fixed_value`)
- Specificity: Not applicable (`not_applicable`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `un-cpc-3-0-2025`, `codex-cxs-344-2021-2025`

##### Waste flows

###### Whole-clove packing spill (`packaging_whole_clove_spill`)

Spilled processed whole clove waste leaves packaging, controlled storage and product release as one separately recorded exchange. Record only this exact product-form loss or packaging component discarded inside the foreground boundary.

- Selected flow: Spilled processed whole clove waste
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Crushed-clove packing spill (`packaging_crushed_clove_spill`)

Spilled crushed clove waste leaves packaging, controlled storage and product release as one separately recorded exchange. Record only this exact product-form loss or packaging component discarded inside the foreground boundary.

- Selected flow: Spilled crushed clove waste
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Ground-clove packing spill (`packaging_ground_clove_spill`)

Spilled ground clove waste leaves packaging, controlled storage and product release as one separately recorded exchange. Record only this exact product-form loss or packaging component discarded inside the foreground boundary.

- Selected flow: Spilled ground clove waste
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Clove-powder packing spill (`packaging_powder_spill`)

Spilled clove powder waste leaves packaging, controlled storage and product release as one separately recorded exchange. Record only this exact product-form loss or packaging component discarded inside the foreground boundary.

- Selected flow: Spilled clove powder waste
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### LDPE liner scrap (`packaging_ldpe_scrap`)

Low-density polyethylene film scrap leaves packaging, controlled storage and product release as one separately recorded exchange. Record only this exact product-form loss or packaging component discarded inside the foreground boundary.

- Selected flow: Low-density polyethylene film scrap
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Polypropylene sack scrap (`packaging_pp_sack_scrap`)

Polypropylene woven-sack scrap leaves packaging, controlled storage and product release as one separately recorded exchange. Record only this exact product-form loss or packaging component discarded inside the foreground boundary.

- Selected flow: Polypropylene woven-sack scrap
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Kraft-sack scrap (`packaging_kraft_scrap`)

Kraft paper sack scrap leaves packaging, controlled storage and product release as one separately recorded exchange. Record only this exact product-form loss or packaging component discarded inside the foreground boundary.

- Selected flow: Kraft paper sack scrap
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### BOPP pouch scrap (`packaging_bopp_scrap`)

Biaxially oriented polypropylene film scrap leaves packaging, controlled storage and product release as one separately recorded exchange. Record only this exact product-form loss or packaging component discarded inside the foreground boundary.

- Selected flow: Biaxially oriented polypropylene film scrap
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Corrugated-box scrap (`packaging_corrugated_scrap`)

Corrugated fibreboard scrap leaves packaging, controlled storage and product release as one separately recorded exchange. Record only this exact product-form loss or packaging component discarded inside the foreground boundary.

- Selected flow: Corrugated fibreboard scrap
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Damaged pallet waste (`packaging_damaged_pallet`)

Damaged wooden pallet leaves packaging, controlled storage and product release as one separately recorded exchange. Record only this exact product-form loss or packaging component discarded inside the foreground boundary.

- Selected flow: Damaged wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Stretch-film scrap (`packaging_lldpe_scrap`)

Linear low-density polyethylene stretch-film scrap leaves packaging, controlled storage and product release as one separately recorded exchange. Record only this exact product-form loss or packaging component discarded inside the foreground boundary.

- Selected flow: Linear low-density polyethylene stretch-film scrap
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

###### Paper-label waste (`packaging_label_waste`)

Paper label waste leaves packaging, controlled storage and product release as one separately recorded exchange. Record only this exact product-form loss or packaging component discarded inside the foreground boundary.

- Selected flow: Paper label waste
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`

##### Elementary flows

###### R-717 direct release (`storage_r717_air`)

R-717 ammonia refrigerant to air leaves packaging, controlled storage and product release as one separately recorded exchange. Calculate this exact refrigerant loss from charge, purchase, recovery and closing-stock records; do not merge refrigerants.

- Selected flow: R-717 ammonia refrigerant to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-climate-industrial-refrigeration-2025`, `eu-pef-2021-2279`

###### R-744 direct release (`storage_r744_air`)

R-744 carbon dioxide refrigerant to air leaves packaging, controlled storage and product release as one separately recorded exchange. Calculate this exact refrigerant loss from charge, purchase, recovery and closing-stock records; do not merge refrigerants.

- Selected flow: R-744 carbon dioxide refrigerant to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-climate-industrial-refrigeration-2025`, `eu-pef-2021-2279`

###### R-290 direct release (`storage_r290_air`)

R-290 propane refrigerant to air leaves packaging, controlled storage and product release as one separately recorded exchange. Calculate this exact refrigerant loss from charge, purchase, recovery and closing-stock records; do not merge refrigerants.

- Selected flow: R-290 propane refrigerant to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-climate-industrial-refrigeration-2025`, `eu-pef-2021-2279`

###### R-449A direct release (`storage_r449a_air`)

R-449A refrigerant blend to air leaves packaging, controlled storage and product release as one separately recorded exchange. Calculate this exact refrigerant loss from charge, purchase, recovery and closing-stock records; do not merge refrigerants.

- Selected flow: R-449A refrigerant blend to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-climate-industrial-refrigeration-2025`, `eu-pef-2021-2279`

###### R-1234ze(E) direct release (`storage_r1234ze_air`)

R-1234ze(E) refrigerant to air leaves packaging, controlled storage and product release as one separately recorded exchange. Calculate this exact refrigerant loss from charge, purchase, recovery and closing-stock records; do not merge refrigerants.

- Selected flow: R-1234ze(E) refrigerant to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `eu-climate-industrial-refrigeration-2025`, `eu-pef-2021-2279`

###### Filling clove dust (`packaging_clove_pm_air`)

Clove particulate matter to air leaves packaging, controlled storage and product release as one separately recorded exchange. Record only the uncaptured clove dust released outside after filling-line control.

- Selected flow: Clove particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release_records`
- Sources: `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279`


### Process: Sanitation, dust collection and wastewater control (`sanitation_wastewater_control`)

#### Inputs

##### Product flows

###### Sanitation and treatment electricity (`sanitation_grid_electricity`)

Grid electricity enters sanitation, dust collection and wastewater control as one separately recorded exchange. Record electricity for vacuum cleaning, dust collection, controlled wet sanitation and on-site wastewater treatment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: record metered electricity consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Sanitation compressed air (`sanitation_compressed_air`)

Dry filtered compressed air enters sanitation, dust collection and wastewater control as one separately recorded exchange. Use only for a documented special dry-cleaning operation and state pressure conditions.

- Selected flow: Dry filtered compressed air
- Flow property / unit: Volume / Nm3
- Amount rule: record metered dry compressed air consumed by this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Controlled wet-sanitation water (`sanitation_potable_water`)

Potable sanitation water enters sanitation, dust collection and wastewater control as one separately recorded exchange. Use only where controlled wet cleaning is documented; routine dry sanitation records no quantity here.

- Selected flow: Potable sanitation water
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Ethanol disinfectant (`sanitation_ethanol_solution`)

Ethanol disinfectant solution, 70 percent by mass enters sanitation, dust collection and wastewater control as one separately recorded exchange. Use only when this exact alcohol solution is applied and record purchased solution mass.

- Selected flow: Ethanol disinfectant solution, 70 percent by mass
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Sodium hydroxide cleaner (`sanitation_sodium_hydroxide`)

Sodium hydroxide aqueous solution enters sanitation, dust collection and wastewater control as one separately recorded exchange. Use only when this exact cleaning chemical is dosed and record formulation concentration.

- Selected flow: Sodium hydroxide aqueous solution
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Sodium hypochlorite disinfectant (`sanitation_sodium_hypochlorite`)

Sodium hypochlorite aqueous solution enters sanitation, dust collection and wastewater control as one separately recorded exchange. Use only when this exact disinfectant is dosed and record formulation concentration.

- Selected flow: Sodium hypochlorite aqueous solution
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Peracetic acid disinfectant (`sanitation_peracetic_acid`)

Peracetic acid aqueous solution enters sanitation, dust collection and wastewater control as one separately recorded exchange. Use only when this exact disinfectant is dosed and record formulation concentration.

- Selected flow: Peracetic acid aqueous solution
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Ferric chloride coagulant (`wastewater_ferric_chloride`)

Ferric chloride aqueous solution enters sanitation, dust collection and wastewater control as one separately recorded exchange. Use only when this exact coagulant is dosed in on-site wastewater treatment.

- Selected flow: Ferric chloride aqueous solution
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Anionic polyacrylamide flocculant (`wastewater_anionic_polyacrylamide`)

Anionic polyacrylamide flocculant enters sanitation, dust collection and wastewater control as one separately recorded exchange. Use only when this exact flocculant is dosed in on-site wastewater treatment.

- Selected flow: Anionic polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: record the net quantity entering this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Waste flows

_No waste exchanges are defined in this direction for this process._

##### Elementary flows

_No elementary exchanges are defined in this direction for this process._

#### Outputs

##### Product flows

_No product exchanges are defined in this direction for this process._

##### Waste flows

###### Sanitation wastewater (`sanitation_wastewater`)

Wastewater from controlled wet sanitation leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Use only when wet-sanitation water is transferred to sewer or treatment as a waste flow.

- Selected flow: Wastewater from controlled wet sanitation
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Captured sanitation dust (`sanitation_captured_clove_dust`)

Captured clove dust from sanitation leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Record clove residue recovered by vacuums or dust collectors and transferred as waste.

- Selected flow: Captured clove dust from sanitation
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Spent sanitation filter bags (`sanitation_spent_filter_bags`)

Spent polyester dust-filter bags leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Record replaced polyester bags from sanitation or central dust control.

- Selected flow: Spent polyester dust-filter bags
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Spent cleaning cloths (`sanitation_spent_cleaning_cloths`)

Spent cotton cleaning cloths leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Record cotton cleaning cloths leaving as waste; another cloth material requires its own exact card.

- Selected flow: Spent cotton cleaning cloths
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Wastewater screenings (`wastewater_screenings`)

Clove solids from wastewater screening leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Record solid clove material separated by the wastewater screen.

- Selected flow: Clove solids from wastewater screening
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Dewatered biological sludge (`wastewater_biological_sludge`)

Dewatered biological wastewater sludge leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Use only when on-site biological treatment produces this separately weighed sludge.

- Selected flow: Dewatered biological wastewater sludge
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Treated wastewater to sewer (`wastewater_treated_to_sewer`)

Treated process wastewater sent to municipal sewer leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Use only when treated wastewater crosses to a municipal sewer as a waste flow rather than a direct environmental discharge.

- Selected flow: Treated process wastewater sent to municipal sewer
- Flow property / unit: Mass / kg
- Amount rule: record the separately weighed or otherwise measured quantity leaving this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

##### Elementary flows

###### Ethanol vapour (`sanitation_ethanol_air`)

Ethanol to air leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Use only where evaporation from the exact ethanol disinfectant is measured or calculated.

- Selected flow: Ethanol to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Sanitation clove dust (`sanitation_clove_pm_air`)

Clove particulate matter to air leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Record only uncaptured clove dust released outside after sanitation and central dust control.

- Selected flow: Clove particulate matter to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Final COD discharge (`wastewater_cod_water`)

Chemical oxygen demand to water leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Use only for the final direct discharge after on-site treatment; do not duplicate wastewater sent to sewer.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Final BOD5 discharge (`wastewater_bod5_water`)

Biochemical oxygen demand, 5 days, to water leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Use only for the final direct discharge after on-site treatment.

- Selected flow: Biochemical oxygen demand, 5 days, to water
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Final suspended-solids discharge (`wastewater_tss_water`)

Total suspended solids to water leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Use only for the final direct discharge after on-site treatment.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Final nitrogen discharge (`wastewater_total_nitrogen_water`)

Total nitrogen to water leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Use only for the final direct discharge after on-site treatment.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Final phosphorus discharge (`wastewater_total_phosphorus_water`)

Total phosphorus to water leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Use only for the final direct discharge after on-site treatment.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Final chloride discharge (`wastewater_chloride_water`)

Chloride to water leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Use only for the final direct discharge after on-site treatment.

- Selected flow: Chloride to water
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Wastewater-treatment methane (`wastewater_methane_air`)

Methane to air leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Use only when on-site wastewater treatment produces a measured or calculated direct methane release.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

###### Wastewater-treatment nitrous oxide (`wastewater_nitrous_oxide_air`)

Nitrous oxide to air leaves sanitation, dust collection and wastewater control as one separately recorded exchange. Use only when on-site wastewater treatment produces a measured or calculated direct nitrous-oxide release.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: calculate the released mass from direct monitoring or collected activity data using the named calculation rule
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net released reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_environment_records`
- Sources: `codex-cxc-75-2015-2018`, `jrc-fdm-bref-2019`, `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared lines and utilities | Prefer process subdivision, dedicated meters, batch records or time-based equipment records before allocation. | `eu-pef-2021-2279` |
| `allocation_mass_balance` | all clove material outputs | Reconcile accepted cloves to released product, saleable stem screenings, captured dust, rejects, spills and moisture change before assigning burdens. No default yield is supplied. | `codex-cxc-75-2015-2018`, `eu-pef-2021-2279` |
| `allocation_saleable_stem_screenings` | saleable clove stem screenings | Treat separately marketed stem screenings as a co-product and disclose the physical or causal allocation relation used when subdivision cannot avoid allocation. | `eu-pef-2021-2279` |
| `allocation_discarded_residues` | discarded screenings, dust and rejects | Keep discarded material as a waste flow with its treatment route; do not give it a co-product credit merely because it contains clove material. | `eu-pef-2021-2279` |
| `allocation_rework` | internal rework | Material returned within the same process chain is not a second output. Record only net losses and disclose the rework loop. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_lot_records` | `raw_clove_receipt` | raw lot, accepted mass, defect rejects and incoming package waste | weighbridge, scale, inspection and laboratory records | lot id; supplier; origin; scientific name; incoming mass; moisture; accepted mass; each reject class; package tare and discard mass | calibrated weighing plus lot-specific visual and laboratory acceptance records | kg, % | each lot | full reference period | every included facility and supplier lot | sum by lot and normalize only after keeping reject classes separate | calibration, sample plan, photographs or inspection record, moisture and test reports |
| `cp_cleaning_sorting_records` | `clove_cleaning_sorting` | dry and wet cleaning exchanges | meters, dosing logs, scales, detector and discharge records | input and output mass; electricity; compressed air; water; each chemical; hot water; each screening; each debris class; dust; wastewater volume; pollutant concentrations | stage meters and batch logs with separate waste containers and discharge sampling | kg, kWh, Nm3, MJ | each batch and discharge event | full reference period | every included cleaning line | sum each atomic exchange by batch; no wet-route value on a dry-only batch | meter calibration, chemical invoices, detector logs, waste tickets and laboratory reports |
| `cp_drying_records` | `clove_drying_conditioning` | drying inputs, outputs and moisture | batch log, meters, scales and moisture tests | inlet and outlet product mass; inlet and outlet moisture; electricity; steam; hot water; heated air; condensate; rejects; exhaust dust | calibrated mass and moisture tests plus utility meters | kg, %, kWh, MJ | each drying batch | full reference period | every included dryer | calculate lot-specific water removal and normalize from the same batch | calibration, moisture method, time-temperature-humidity log and exhaust-control record |
| `cp_size_reduction_records` | `clove_size_reduction` | crushing, grinding, sieving and dust | scales, electricity meter, compressed-air meter and sieve tests | whole input; declared output form; particle-size distribution; electricity; compressed air; each screening; metal; dust; filter bags | batch weighing, meter reads and retained sieve analysis | kg, kWh, Nm3, %, mm or µm | each batch | full reference period | every included mill or crusher | keep crushed, ground and powder batches separate and close mass balance | calibration, sieve method, detector record, filter service log and batch traceability |
| `cp_steam_treatment_records` | `steam_microbial_reduction` | treatment inputs, outputs, rejects and emissions | treatment batch record, meters, scales and validation record | form; product mass; steam; electricity; time; temperature; pressure; condensate; inlet and outlet moisture; each reject form; water vapour; dust | validated treatment log linked to product lot and utility meters | kg, kWh, MJ, °C, time, pressure | each treatment batch | full reference period | every included treatment unit | keep each product form and treatment recipe separate | current validation, critical-limit records, calibration and corrective-action record |
| `cp_additive_dosing_records` | `anticaking_agent_dosing` | INS 551 formulation and losses | formulation, scale, invoice and batch records | product form; clove input; INS 551 mass and specification; electricity; formulated output; each spill; dust | calibrated dosing and batch reconciliation | kg, kWh | each formulation batch | full reference period | every included dosing line | calculate additive concentration per declared product batch | supplier specification, legal applicability check, scale calibration and batch release record |
| `cp_utility_generation_records` | `onsite_heat_generation` | fuel, water, generated heat, blowdown and stack species | fuel meters, invoices, water meter, heat meter and stack record | each fuel; water; electricity; steam; hot water; heated air; blowdown; each air species; operating hours | dedicated meters or documented allocation from common utility records; stack measurement or approved calculation | kg, kWh, MJ | continuous or each operating shift | full reference period | every included boiler or heater | retain each fuel and species separately; allocate only after subdivision is exhausted | meter calibration, fuel certificate, heat balance, stack report and factor provenance |
| `cp_packaging_release_records` | `packaging_storage_release` | final form, package, storage, refrigerant and release | batch, packaging BOM, scale, electricity, refrigeration and release records | exact clove form; net product; each package component; electricity; storage time and humidity; each refrigerant charge, purchase, recovery and closing stock; each scrap; each spill; release mass | product-specific BOM and lot scale linked to warehouse and refrigeration logs | kg, kWh, time, temperature, humidity | each packing lot; refrigerant at service event and period close | full reference period | every included packing and storage site | one form and package per route; sum service records only for the matching equipment and period | scale calibration, BOM, supplier invoice, package specification, leak/service log and release certificate |
| `cp_sanitation_environment_records` | `sanitation_wastewater_control` | sanitation chemicals, dust, wastewater, sludge and direct emissions | cleaning log, meters, chemical logs, waste tickets, treatment and laboratory records | electricity; compressed air; water; each chemical; each waste; wastewater volume; each pollutant concentration; methane and nitrous oxide activity data | documented dry or controlled-wet sanitation and flow-proportional or representative discharge sampling | kg, kWh, Nm3, m3 | each sanitation event; each discharge sample; period close | full reference period | every included hygiene area and treatment unit | keep dry and wet events separate; compute each pollutant load over matching volume and time | cleaning verification, calibration, chemical invoice, laboratory QA, waste ticket and treatment log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every non-reference row | normalized amount = period amount attributable to the declared form and route ÷ net kg of released reference product from the same scope and period | atomic flow amount; released net product mass | amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_clove_mass_balance` | receipt through release | accepted cloves = released product + saleable stem screenings + all clove-bearing wastes + spills + measured water-mass change, adjusted for opening and closing work in progress | lot masses; moisture; inventory change | lot mass-balance residual | `codex-cxc-75-2015-2018`, `eu-pef-2021-2279` |
| `calc_removed_water` | drying and steam treatment | removed water = inlet product × inlet moisture fraction − outlet product × outlet moisture fraction − collected liquid water, on a consistent moisture basis | inlet and outlet mass and moisture; condensate | water vapour or unexplained water residual | `codex-cxc-75-2015-2018` |
| `calc_particle_size` | crushed, ground and powder outputs | report retained mass fraction for each declared sieve aperture and link the distribution to the released lot; no default cut point is imposed | sieve aperture; retained mass; sample mass | particle-size distribution | `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018` |
| `calc_combustion_species` | on-site heat generation | use direct stack mass where available; otherwise multiply each separately measured fuel quantity by a documented jurisdiction- and equipment-specific factor without combining species | each fuel; factor or stack data; operating period | mass of one named air species | `jrc-fdm-bref-2019`, `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | controlled storage | direct release = opening charge + additions − closing charge − recovered amount − transferred amount, calculated for one refrigerant identity | charge and service records for one refrigerant | mass of that refrigerant to air | `eu-climate-industrial-refrigeration-2025`, `eu-pef-2021-2279` |
| `calc_wastewater_pollutant` | direct water emissions | pollutant mass = discharge volume × time-matched concentration, with unit conversion and treatment boundary documented | volume; concentration; sampling period | mass of one named pollutant to water | `jrc-fdm-bref-2019`, `eu-pef-2021-2279` |
| `calc_packaging_exclusion` | reference product | gross packed mass − measured package tare = net reference-product mass | gross mass; each package-component tare | net kg of released cloves | `codex-cxs-344-2021-2025`, `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_form` | reference product and incoming lot | Preserve lot traceability, scientific name, CPC starting state, final form, particle size, treatment history and formulation. | supplier specification, retained sample, batch record and release certificate |
| `dq_route_separation` | all processes | Do not aggregate wet and dry cleaning, dried and non-dried, treated and untreated, or whole, crushed, ground and powdered routes before route-specific results are available. | route-coded production and meter records |
| `dq_temporal_site` | foreground activity data | Cover a representative period for every included facility and disclose shutdowns, seasonal lots and missing records. | period ledger and site list |
| `dq_meter_calibration` | mass, energy, water, pressure and concentration data | Use calibrated or otherwise quality-controlled measurement systems and retain conversion factors. | calibration and laboratory QA records |
| `dq_inventory_completeness` | each included process | Reconcile known inputs and outputs, including product, co-product, waste and direct emissions, and document any material residual. | mass, moisture, energy and wastewater balances |
| `dq_source_applicability` | external method rules | Record which Codex, JRC, EU and local legal provisions apply to the actual product and geography; an external method source does not create a default amount. | applicability assessment and source register |
| `dq_uuid_status` | every inventory flow | Keep non-reference Tiangong UUIDs blank until the exact semantic flow is independently confirmed by both required identity checks. | manifest unresolved-flow entry or completed identity review |
| `dq_no_default_amounts` | every non-reference row | Produce the first value from foreground records or a named calculation rule; this candidate PCR supplies no reasoned-estimate range. | collection protocol and calculation worksheet |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | Confirm the reference UUID, Product flow type, CPC 23926 identity, Mass property, Units of mass group and kg unit before release. | `un-cpc-3-0-2025` |
| `validation_single_form_route` | dataset identity | Reject a dataset that averages product forms, particle-size specifications, treatment routes or package configurations without separately reported route results. | `codex-cxs-344-2021-2025`, `codex-cxc-75-2015-2018`, `eu-pef-2021-2279` |
| `validation_process_conditions` | process map | Every conditional process shall have a true/false declaration and supporting facility record; required processes shall have inventory sections and data. | `codex-cxc-75-2015-2018`, `eu-pef-2021-2279` |
| `validation_atomic_exchange` | process inventory | Each card shall contain one concrete exchange only. Utilities, fuels, chemicals, package components, wastes, refrigerants and emission species shall remain separate. | `eu-pef-2021-2279` |
| `validation_mass_moisture_balance` | product chain | Investigate and disclose unexplained accepted-clove, product, residue and moisture imbalance before publication. | `codex-cxc-75-2015-2018`, `eu-pef-2021-2279` |
| `validation_wastewater_boundary` | wastewater | Reject double counting of a wastewater waste flow and a direct environmental discharge for the same stream and treatment boundary. | `jrc-fdm-bref-2019`, `eu-pef-2021-2279` |
| `validation_refrigerant_identity` | controlled storage | Require the exact refrigerant identity and separate make-up and direct-release records; a non-listed refrigerant needs its own atomic row before dataset publication. | `eu-climate-industrial-refrigeration-2025`, `eu-pef-2021-2279` |
| `validation_no_unsupported_defaults` | amounts and ranges | Reject an amount or range not produced by a foreground protocol, named calculation or cited external evidence. | `eu-pef-2021-2279` |
| `validation_traceability` | external communication | Retain source records, calculations, data-quality evidence and route metadata needed for verification. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Candidate foreground dataset that may become a `secondary_dataset` or `background_dataset` after methodology and data review. |
| downstream_use | Product-form- and route-specific modelling of processed cloves at packaged facility gate. |
| allowed_use | Use for the declared botanical identity, product form, particle size, treatment route, formulation, package, geography, technology and reference period. |
| excluded_use | Raw cloves, another spice, clove extracts or oils, mixed seasonings, an undeclared treatment route, or an average across product forms or packages. |
| required_metadata | PCR id and version; CPC coordinate; reference UUID; scientific name; raw state; lot and origin; final form; particle size; moisture; included processes; treatment validation; additive formulation; package BOM; storage; geography; period; site and supplier coverage; allocation; unresolved UUID status. |
| required_quality_disclosure | Foreground coverage, meter and laboratory quality, mass/moisture/energy balance, sampling, allocation, missing data, source applicability, direct-emission method and uncertainty. |
| update_trigger | Change in botanical/raw state, form, particle specification, process sequence, microbial treatment, additive, fuel or electricity supply, refrigerant, package, site, supplier mix, allocation, governing product standard, reference-flow identity or material foreground performance. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | official_guidance | United Nations Statistics Division, CPC Version 3.0 official classification entry and retained raw CSV, https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-13) | CPC 23926 processed-clove boundary and exclusion of CPC 01656 raw cloves. |
| `codex-cxs-344-2021-2025` | standard | Codex Alimentarius CXS 344-2021, Standard for dried floral parts: Cloves, amended 2025, https://openknowledge.fao.org/handle/20.500.14283/cd9046en (retrieved 2026-08-13) | Botanical identity, whole and ground/powdered styles, moisture and defect attributes, packaging and hygiene links. |
| `codex-cxc-75-2015-2018` | standard | Codex Alimentarius CXC 75-2015, Code of hygienic practice for low-moisture foods, Annex III on spices and dried culinary herbs, amended 2018, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/pl/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B75-2015%252FCXC_075e.pdf (retrieved 2026-08-13) | Cleaning, sorting, drying, grinding, steam treatment, dust control, dry sanitation, controlled wet cleaning, packaging and storage process requirements. |
| `codex-gsfa-ins-551-2025` | standard | Codex GSFA Online, amorphous silicon dioxide INS 551, updated through CAC48 (2025), https://www.fao.org/gsfaonline/additives/details.html?d-3586470-o=1&d-3586470-s=5&d-3988876-o=1&id=284&lang=&print=true (retrieved 2026-08-13) | Exact conditional anticaking-agent identity for a declared ground or powdered formulation. |
| `jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, EUR 29978 EN, DOI 10.2760/243911, https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 (retrieved 2026-08-13) | Common food-process decomposition, energy and water consumption, dust, emissions to water, abatement and environmental monitoring. |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279, consolidated Product Environmental Footprint method, https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A02021H2279-20211230 (retrieved 2026-08-13) | Product-specific BOM, company-specific manufacturing data, complete LCI, allocation, data quality, transparency and verification. |
| `eu-climate-industrial-refrigeration-2025` | official_guidance | European Commission DG Climate Action, Climate-friendly alternatives to F-gases: industrial refrigeration, https://climate.ec.europa.eu/areas-action/fluorinated-greenhouse-gases/climate-friendly-alternatives-f-gases/refrigeration_en (updated 2025-04-09; retrieved 2026-08-13) | Exact refrigerant candidates and the requirement to retain refrigerant identity in controlled-storage equipment. |
