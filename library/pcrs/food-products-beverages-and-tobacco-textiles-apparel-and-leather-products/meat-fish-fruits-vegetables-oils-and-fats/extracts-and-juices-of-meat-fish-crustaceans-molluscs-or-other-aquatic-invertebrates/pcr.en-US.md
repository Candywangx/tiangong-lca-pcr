---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.extracts-and-juices-of-meat-fish-crustaceans-molluscs-or-other-aquatic-invertebrates
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Extracts and juices of meat, fish, crustaceans, molluscs or other aquatic invertebrates

## 1. Scope and Applicability

This PCR applies to foreground production of an extract or juice made from one declared animal species and one declared tissue or processing cut, classified under CPC 3.0 subclass 21185. A conforming data package shall lock exactly one product identity (`extract` or `juice`) and exactly one physical and concentration state. It shall not average different species, tissues, product identities, or market states into one reference product.

Covered routes include direct aqueous extraction, thermal extraction, pressing, and enzyme-assisted aqueous extraction followed, as applicable, by clarification, filtration, concentration, cooling, drying, packaging, and storage. The route actually operated shall be disclosed; unused cards are marked not applicable in the completed data package and are not assigned zero by assumption. When an actual species, tissue, ingredient, filtration medium, package component, co-product, waste, or emission is not represented by a card below, the producer shall add one new atomic row with one exact exchange identity before recording it.

The PCR excludes soups, bouillons, consommés, sauces, whole or cut meat and aquatic products, rendered animal fats, fish oil sold as the principal product, fish meal, gelatine, collagen, isolated amino acids, and products whose declared identity is neither an extract nor a juice. Upstream livestock production, capture fisheries, aquaculture, slaughter, landing, and primary cutting remain background systems represented by supplier-specific or otherwise appropriate upstream datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.extracts-and-juices-of-meat-fish-crustaceans-molluscs-or-other-aquatic-invertebrates` |
| classification_refs | CPC 3.0 `21185`, exact title: Extracts and juices of meat, fish, crustaceans, molluscs or other aquatic invertebrates |
| covered_products | One species- and tissue-specific meat, fish, crustacean, mollusc, or other aquatic-invertebrate extract or juice, including a declared liquid, concentrated liquid, semi-liquid, paste, frozen, or dried state |
| excluded_products | Soups and broths; sauces; whole or cut animal products; principal-product fats or oils; fish meal; gelatine; collagen; isolated amino acids; mixed-species or mixed-state reference products |
| representative_product | One declared extract or juice from one declared species and one declared tissue, at one declared solids content and physical state |
| production_route | Receipt and preparation; aqueous or enzyme-assisted extraction; separation and clarification; conditional concentration or drying; cooling, packaging, storage; cleaning and wastewater management; conditional on-site energy generation |
| market_state | Facility-gate product in the declared liquid, concentrated, paste, frozen, or dried state and declared package configuration |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net mass of one declared extract or juice made from one exact animal species and one exact tissue or cut |
| How much | 1 kg net product, excluding packaging |
| How well | Meets the producer's declared composition, solids or dry-matter content, physical state, food-safety specification, and release criteria |
| How long or cycle | One released production lot at the facility gate; storage temperature and elapsed storage before release are declared |
| reference_flow_link | Tiangong Product flow `0238a5c5-5b90-4881-8277-cd862a581eb8` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Extracts and juices of meat, fish, crustaceans, molluscs or other aquatic invertebrates `0238a5c5-5b90-4881-8277-cd862a581eb8` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | exact animal species; exact tissue, organ, cut, or processing part; product identity exactly `extract` or `juice`; aqueous, thermal, pressing, or enzyme-assisted route; physical state; measured solids or dry-matter content; concentration state; fat-removal status; salt and process-aid status; preservation treatment; package components; storage temperature; production geography; production period |

When constructing a foreground data package, every item in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference flow incomplete. The category-wide Tiangong name does not authorize a mixed-species, mixed-tissue, mixed-product, or mixed-state dataset.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg of released net extract or juice; exclude every package component from the reference mass. |
| `wet_dry_basis` | feedstock, intermediates, concentrate, dried product | Mass and measured solids fraction | kg and kg/kg | Preserve measured wet mass and solids or moisture results; calculate dry matter from the same lot and never substitute an assumed solids value. |
| `ingredient_formulation_basis` | salt, enzymes, acids, alkalis, antifoam, disinfectants | Mass | kg | Record delivered formulation mass and, when relevant, measured or supplier-declared active fraction in separate metadata; do not confuse active-ingredient mass with formulation mass. |
| `electricity_basis` | purchased and generated electricity | Energy | kWh | Preserve metered electricity in kWh and allocate shared meters only by a documented causal driver. |
| `thermal_energy_basis` | purchased steam, generated steam, purchased hot water, generated hot water | Energy | MJ | Calculate useful thermal energy from measured mass, pressure or temperature, and enthalpy data; do not use an unverified generic steam or heat factor. |
| `refrigerant_basis` | each named refrigerant | Mass | kg | Record charge additions, recovery, returns, opening stock, and closing stock separately for each refrigerant and calculate loss by substance-specific inventory balance. |
| `wastewater_load_basis` | each named pollutant discharged to water | Mass | kg | Calculate load from a representative measured concentration and the corresponding measured discharge volume for the same reporting interval. |
| `normalization_basis` | all inventory exchanges | row-specific property | row-specific unit | Normalize the reporting-period exchange to 1 kg of conforming net product after excluding off-specification output and reconciling inventory changes. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | One segregated, species- and tissue-specific animal material is received at the extraction facility with measured mass, state, supplier, preservation history, and upstream dataset link. |
| starting_condition_role | Foreground gate; livestock production, capture or aquaculture, slaughter or landing, and primary cutting are upstream. |
| product_classification_scope | CPC 3.0 subclass 21185 only after the product is demonstrably an extract or juice; category membership does not merge species, tissues, routes, or states. |
| recursive_input_rule | A purchased CPC 21185 extract or juice used as an ingredient is recorded as one exact upstream product flow with its own dataset and is not reopened as foreground animal feedstock in the same package. |
| upstream_dataset_requirement | Link every received animal material, purchased extract or juice, ingredient, utility, filtration medium, refrigerant, and package component to a geographically and temporally appropriate upstream dataset. |
| disclosure | Declare species, tissue, product identity, route, state, solids content, fat-removal status, preservation, packaging, storage, geography, period, co-product fate, waste treatment, and every boundary exclusion. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_operations` | foreground system | Include receipt, preparation, extraction or hydrolysis, separation, clarification, applicable concentration or drying, cooling, packaging, storage, cleaning, wastewater management, and on-site energy operations used by the declared lot. | `eu-pef-2021-2279`; `fao-fishmeal-process`; `codex-cxs-117-1981` |
| `boundary_upstream_links` | purchased inputs | Represent upstream animal production or capture, primary processing, utilities, chemicals, filtration media, refrigerants, and packaging through linked datasets rather than silently omitting them. | `eu-pef-2021-2279` |
| `boundary_route_lock` | reference product | Model one exact species, tissue, extract-or-juice identity, route, physical state, and concentration state; aggregation across those choices is prohibited. | `un-cpc-3.0-21185`; `codex-cxs-117-1981`; `fao-fisheries-paper-540` |
| `boundary_nonoperated_upstream_exclusion` | non-operated upstream processes | Do not import slaughter, rendering, fishmeal, oil production, or other upstream operations into the foreground unless the facility actually performs them for the declared product. | `jrc-sa-bref-2024` |
| `boundary_complete_lci` | all exchanges | Inventory raw materials, energy, water, product and co-product outputs, wastes, and emissions to air and water without substituting a collection label for an exchange. | `eu-pef-2021-2279`; `jrc-sa-bref-2024` |

## 6. Process Inventory Structure

All cards implement `atomic_flows:v1`. Each `Selected flow` is one concrete exchange. A completed package retains only cards applicable to its exact route and adds a new atomic card whenever its exact exchange is absent below.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receipt_and_preparation` | Raw material receipt and preparation | `required` | Always | Foreground receipt, cold holding, washing, trimming, size reduction | measured mass of prepared species- and tissue-specific feedstock |
| `aqueous_extraction_or_hydrolysis` | Aqueous extraction or hydrolysis | `required` | Always; record the one route actually used | Foreground solubilisation or juice release | measured mass and solids of extraction batch |
| `separation_and_clarification` | Separation and clarification | `required` | Always | Foreground pressing, centrifugation, clarification, filtration, or membrane separation | measured clarified liquid and separated fractions |
| `concentration_or_drying` | Concentration or drying | `conditional` | Include only when the declared state is concentrated, paste-like, frozen after concentration, or dried | Foreground evaporation, concentration, or drying | measured product mass and solids before and after conditioning |
| `cooling_packaging_and_storage` | Product cooling | `required` | Always | Foreground cooling before filling or final storage | measured cooled product throughput |
| `cleaning_and_wastewater_management` | Cleaning and wastewater management | `required` | Always | Foreground sanitation and discharge management | reporting-period production normalized to 1 kg net product |
| `onsite_energy_generation` | On-site energy generation | `conditional` | Include when fuel is combusted on site to supply steam or hot water to the declared lot | Foreground boiler or heater operation | measured useful steam or hot-water output |
| `packaging_and_storage` | Packaging and storage | `required` | Always | Foreground filling, packaging, cold or ambient storage, and facility-gate release | 1 kg released net reference product |

### Process: Raw material receipt and preparation (`raw_material_receipt_and_preparation`)

#### Inputs

##### Product flows

###### Beef skeletal muscle feedstock (`beef_skeletal_muscle_input`)

Beef skeletal muscle crosses the facility gate only for a lot whose locked feedstock is bovine skeletal muscle.

- Selected flow: Beef skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted wet mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_material_mass`
- Sources: `codex-cxs-117-1981`

###### Chicken skeletal muscle feedstock (`chicken_skeletal_muscle_input`)

Chicken skeletal muscle crosses the facility gate only for a lot whose locked species and tissue are chicken skeletal muscle.

- Selected flow: Chicken skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted wet mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_material_mass`
- Sources: `codex-cxs-117-1981`

###### Atlantic cod skeletal muscle feedstock (`atlantic_cod_skeletal_muscle_input`)

Atlantic cod skeletal muscle is recorded only when that exact fish species and tissue are the locked feedstock.

- Selected flow: Atlantic cod skeletal muscle
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted wet mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_material_mass`
- Sources: `fao-fisheries-paper-540`

###### Whiteleg shrimp meat feedstock (`whiteleg_shrimp_meat_input`)

Whiteleg shrimp meat is recorded only when the locked crustacean input is peeled shrimp meat of that species.

- Selected flow: Whiteleg shrimp meat
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted wet mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_material_mass`
- Sources: `fao-fisheries-paper-540`

###### Blue crab meat feedstock (`blue_crab_meat_input`)

Blue crab meat is recorded only when that exact crustacean species and tissue are the locked feedstock.

- Selected flow: Blue crab meat
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted wet mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_material_mass`
- Sources: `fao-fisheries-paper-540`

###### Blue mussel meat feedstock (`blue_mussel_meat_input`)

Blue mussel meat is recorded only when that exact bivalve species and tissue are the locked feedstock.

- Selected flow: Blue mussel meat
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted wet mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_material_mass`
- Sources: `fao-fisheries-paper-540`

###### European squid mantle feedstock (`european_squid_mantle_input`)

European squid mantle is recorded only when that exact cephalopod species and tissue are the locked feedstock.

- Selected flow: European squid mantle
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted wet mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_material_mass`
- Sources: `fao-fisheries-paper-540`

###### Sea cucumber body-wall feedstock (`sea_cucumber_body_wall_input`)

Sea cucumber body wall is recorded only when that exact aquatic-invertebrate tissue is the locked feedstock.

- Selected flow: Sea cucumber body wall
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted wet mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_material_mass`
- Sources: `un-cpc-3.0-21185`

###### Preparation electricity (`preparation_electricity`)

Metered electricity powers cold holding, conveying, washing, trimming, or size reduction assigned to preparation.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity assigned to the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_utility_records`
- Sources: `eu-pef-2021-2279`

###### Preparation process water (`preparation_process_water`)

Water used for feedstock washing or preparation is recorded separately from sanitation water.

- Selected flow: Potable process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-recorded water delivered to preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_water_records`
- Sources: `codex-cxs-117-1981`

###### Potable ice (`potable_ice_input`)

Potable ice is recorded when it crosses the boundary as a purchased cooling and preservation input.

- Selected flow: Potable water ice
- Flow property / unit: Mass / kg
- Amount rule: Measured ice mass charged to the declared lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_material_mass`
- Sources: `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Raw-material rinse wastewater (`raw_material_rinse_wastewater`)

The segregated aqueous stream leaving raw-material washing is recorded before treatment or discharge.

- Selected flow: Raw-material rinse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured or tank-volume-derived wastewater volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_wastewater_records`
- Sources: `jrc-sa-bref-2024`

##### Elementary flows

### Process: Aqueous extraction or hydrolysis (`aqueous_extraction_or_hydrolysis`)

#### Inputs

##### Product flows

###### Extraction electricity (`extraction_electricity`)

Electricity for mixing, pumping, temperature control, or hydrolysis equipment is recorded at the extraction stage.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity assigned to extraction batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_utility_records`
- Sources: `eu-pef-2021-2279`

###### Purchased extraction steam (`extraction_purchased_steam`)

Purchased steam crossing the facility boundary for thermal extraction is recorded separately from on-site steam.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered mass and enthalpy-derived useful energy assigned to extraction.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_extraction_utility_records`
- Sources: `fao-fishmeal-process`

###### Purchased extraction hot water (`extraction_purchased_hot_water`)

Purchased hot water used as a heat carrier is recorded separately from process water incorporated into extraction.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered flow and temperature-derived useful heat assigned to extraction.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_extraction_utility_records`
- Sources: `fao-fishmeal-process`

###### Extraction process water (`extraction_process_water`)

Water added as the extraction medium is a distinct product input and is not merged with washing water.

- Selected flow: Potable process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-dosed volume added to extraction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_ingredient_mass`
- Sources: `codex-cxs-117-1981`

###### Sodium chloride (`sodium_chloride_input`)

Food-grade sodium chloride is recorded only when it is deliberately added to the declared product route.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: Weighed formulation mass charged by batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_ingredient_mass`
- Sources: `codex-cxs-117-1981`

###### Papain enzyme (`papain_input`)

Food-grade papain is recorded only for an enzyme-assisted route that actually doses this enzyme.

- Selected flow: Papain
- Flow property / unit: Mass / kg
- Amount rule: Weighed delivered formulation mass charged by batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_ingredient_mass`
- Sources: `fao-fishmeal-process`

###### Citric acid (`citric_acid_input`)

Food-grade citric acid is recorded when used to adjust extraction pH or stabilize the declared product.

- Selected flow: Citric acid
- Flow property / unit: Mass / kg
- Amount rule: Weighed delivered formulation mass charged by batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_ingredient_mass`
- Sources: `eu-pef-2021-2279`

###### Hydrochloric acid (`hydrochloric_acid_input`)

Food-grade hydrochloric acid is recorded only when used in the declared extraction or hydrolysis formulation.

- Selected flow: Hydrochloric acid
- Flow property / unit: Mass / kg
- Amount rule: Weighed delivered solution mass and recorded concentration charged by batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_ingredient_mass`
- Sources: `eu-pef-2021-2279`

###### Sodium hydroxide for process pH control (`sodium_hydroxide_process_input`)

Food-grade sodium hydroxide used in the product recipe is distinct from sodium hydroxide used for cleaning.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Weighed delivered solution mass and recorded concentration charged by batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_ingredient_mass`
- Sources: `eu-pef-2021-2279`

###### Polydimethylsiloxane antifoam (`polydimethylsiloxane_antifoam_input`)

Food-grade polydimethylsiloxane antifoam is recorded only when this exact processing aid is dosed.

- Selected flow: Polydimethylsiloxane
- Flow property / unit: Mass / kg
- Amount rule: Weighed delivered formulation mass charged by batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_ingredient_mass`
- Sources: `codex-cxs-117-1981`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

### Process: Separation and clarification (`separation_and_clarification`)

#### Inputs

##### Product flows

###### Separation electricity (`separation_electricity`)

Electricity for presses, centrifuges, pumps, clarifiers, or filtration equipment is assigned to separation.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity assigned to separation batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_utility_records`
- Sources: `fao-fishmeal-process`

###### Separation process water (`separation_process_water`)

Water used for filter rinsing or controlled dilution during separation is recorded apart from extraction water.

- Selected flow: Potable process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or batch-recorded volume used by separation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_utility_records`
- Sources: `eu-pef-2021-2279`

###### Diatomaceous-earth filter aid (`diatomaceous_earth_input`)

Diatomaceous earth is recorded when this exact filter aid is consumed in clarification.

- Selected flow: Diatomaceous earth
- Flow property / unit: Mass / kg
- Amount rule: Weighed mass charged to filters by batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filter_media_mass`
- Sources: `eu-pef-2021-2279`

###### Activated-carbon clarification medium (`activated_carbon_input`)

Activated carbon is recorded when consumed for decolouring, deodorising, or clarification.

- Selected flow: Activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Weighed mass charged by batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filter_media_mass`
- Sources: `fao-fishmeal-process`

###### Cellulose filter aid (`cellulose_filter_aid_input`)

Cellulose filter aid is recorded only when this exact medium is consumed.

- Selected flow: Cellulose filter aid
- Flow property / unit: Mass / kg
- Amount rule: Weighed mass charged to filters by batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_filter_media_mass`
- Sources: `eu-pef-2021-2279`

###### Polypropylene filter cartridge (`polypropylene_filter_cartridge_input`)

A polypropylene cartridge is recorded as a consumable when it is installed and consumed for the declared production.

- Selected flow: Polypropylene filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Purchased cartridge mass allocated over measured treated product before replacement.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filter_media_mass`
- Sources: `eu-pef-2021-2279`

###### Polyethersulfone ultrafiltration membrane (`polyethersulfone_membrane_input`)

A polyethersulfone membrane is recorded when that exact membrane material is consumed by the route.

- Selected flow: Polyethersulfone ultrafiltration membrane
- Flow property / unit: Mass / kg
- Amount rule: Installed membrane mass allocated over measured treated product before replacement.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_filter_media_mass`
- Sources: `fao-fisheries-paper-540`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered beef fat co-product (`recovered_beef_fat_coproduct`)

Separated beef fat is a co-product only when it meets a declared specification and leaves the facility for beneficial use.

- Selected flow: Recovered beef fat
- Flow property / unit: Mass / kg
- Amount rule: Measured released co-product mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass`
- Sources: `jrc-sa-bref-2024`

###### Recovered Atlantic cod oil co-product (`recovered_atlantic_cod_oil_coproduct`)

Separated Atlantic cod oil is a co-product only when it is released to a specified beneficial use.

- Selected flow: Recovered Atlantic cod oil
- Flow property / unit: Mass / kg
- Amount rule: Measured released co-product mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass`
- Sources: `fao-fishmeal-process`

###### Recovered whiteleg shrimp oil co-product (`recovered_whiteleg_shrimp_oil_coproduct`)

Separated whiteleg shrimp oil is recorded only when it is a released co-product rather than a waste.

- Selected flow: Recovered whiteleg shrimp oil
- Flow property / unit: Mass / kg
- Amount rule: Measured released co-product mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass`
- Sources: `jrc-sa-bref-2024`

###### Recovered whiteleg shrimp shell co-product (`recovered_whiteleg_shrimp_shell_coproduct`)

Whiteleg shrimp shell is a co-product only when a specified shell stream is released for further use.

- Selected flow: Recovered whiteleg shrimp shell
- Flow property / unit: Mass / kg
- Amount rule: Measured released shell mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass`
- Sources: `jrc-sa-bref-2024`

###### Recovered blue crab shell co-product (`recovered_blue_crab_shell_coproduct`)

Blue crab shell is a co-product only when a specified shell stream is released for further use.

- Selected flow: Recovered blue crab shell
- Flow property / unit: Mass / kg
- Amount rule: Measured released shell mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass`
- Sources: `jrc-sa-bref-2024`

##### Waste flows

###### Beef extraction press cake (`beef_extraction_press_cake_waste`)

The insoluble bovine residue leaving separation is recorded as waste when it has no released co-product status.

- Selected flow: Beef extraction press cake
- Flow property / unit: Mass / kg
- Amount rule: Measured wet waste mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_waste_mass`
- Sources: `jrc-sa-bref-2024`

###### Atlantic cod extraction press cake (`atlantic_cod_extraction_press_cake_waste`)

The insoluble Atlantic cod residue is recorded as one species-specific waste stream.

- Selected flow: Atlantic cod extraction press cake
- Flow property / unit: Mass / kg
- Amount rule: Measured wet waste mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_waste_mass`
- Sources: `fao-fishmeal-process`

###### Whiteleg shrimp extraction press cake (`whiteleg_shrimp_extraction_press_cake_waste`)

The insoluble whiteleg shrimp residue is recorded as one species-specific waste stream.

- Selected flow: Whiteleg shrimp extraction press cake
- Flow property / unit: Mass / kg
- Amount rule: Measured wet waste mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_waste_mass`
- Sources: `jrc-sa-bref-2024`

###### Blue mussel extraction press cake (`blue_mussel_extraction_press_cake_waste`)

The insoluble blue mussel residue is recorded as one species-specific waste stream.

- Selected flow: Blue mussel extraction press cake
- Flow property / unit: Mass / kg
- Amount rule: Measured wet waste mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_waste_mass`
- Sources: `jrc-sa-bref-2024`

###### European squid extraction press cake (`european_squid_extraction_press_cake_waste`)

The insoluble European squid residue is recorded as one species-specific waste stream.

- Selected flow: European squid extraction press cake
- Flow property / unit: Mass / kg
- Amount rule: Measured wet waste mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_waste_mass`
- Sources: `jrc-sa-bref-2024`

###### Sea cucumber extraction press cake (`sea_cucumber_extraction_press_cake_waste`)

The insoluble sea cucumber residue is recorded as one species-specific waste stream.

- Selected flow: Sea cucumber extraction press cake
- Flow property / unit: Mass / kg
- Amount rule: Measured wet waste mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_waste_mass`
- Sources: `jrc-sa-bref-2024`

###### Spent diatomaceous earth (`spent_diatomaceous_earth_waste`)

Used diatomaceous earth is recorded as its own waste stream after filter discharge.

- Selected flow: Spent diatomaceous earth
- Flow property / unit: Mass / kg
- Amount rule: Measured wet waste mass removed from filters.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_waste_mass`
- Sources: `eu-pef-2021-2279`

###### Spent activated carbon (`spent_activated_carbon_waste`)

Used activated carbon is recorded separately after clarification.

- Selected flow: Spent activated carbon
- Flow property / unit: Mass / kg
- Amount rule: Measured wet waste mass removed from filters.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_waste_mass`
- Sources: `eu-pef-2021-2279`

###### Spent polypropylene filter cartridge (`spent_polypropylene_filter_cartridge_waste`)

Each discarded polypropylene cartridge is recorded as a distinct solid waste.

- Selected flow: Spent polypropylene filter cartridge
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded cartridge mass allocated to treated product.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_separation_waste_mass`
- Sources: `eu-pef-2021-2279`

###### Spent polyethersulfone membrane (`spent_polyethersulfone_membrane_waste`)

Discarded polyethersulfone membrane mass is recorded separately from filter cartridges.

- Selected flow: Spent polyethersulfone ultrafiltration membrane
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded membrane mass allocated to treated product.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_separation_waste_mass`
- Sources: `fao-fisheries-paper-540`

###### Separation wastewater (`separation_wastewater`)

The aqueous stream discharged from pressing, centrifugation, or filtration is recorded before treatment.

- Selected flow: Separation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured or tank-volume-derived wastewater volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_wastewater_records`
- Sources: `jrc-sa-bref-2024`

##### Elementary flows

### Process: Concentration or drying (`concentration_or_drying`)

#### Inputs

##### Product flows

###### Concentration electricity (`concentration_electricity`)

Electricity used by evaporators, concentrators, vacuum systems, or dryers is recorded for applicable routes.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity assigned to concentration or drying batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_concentration_utility_records`
- Sources: `fao-fishmeal-process`

###### Purchased concentration steam (`concentration_purchased_steam`)

Purchased steam for evaporation or indirect drying is recorded separately from on-site steam.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered mass and enthalpy-derived useful energy assigned to applicable batches.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_concentration_utility_records`
- Sources: `fao-fishmeal-process`

###### Purchased concentration hot water (`concentration_purchased_hot_water`)

Purchased hot water used as a heat carrier is recorded as a separate thermal input.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered flow and temperature-derived useful heat assigned to applicable batches.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_concentration_utility_records`
- Sources: `fao-fishmeal-process`

###### Drying compressed air (`drying_compressed_air`)

Compressed air crossing the process boundary is recorded when used for atomisation or pneumatic drying controls.

- Selected flow: Compressed air
- Flow property / unit: Normal volume / m3
- Amount rule: Metered normal volume assigned to drying batches.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_compressed_air_records`
- Sources: `fao-fisheries-paper-540`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Evaporator condensate wastewater (`evaporator_condensate_wastewater`)

Evaporator condensate is recorded as wastewater when it leaves the process for treatment or discharge rather than reuse.

- Selected flow: Evaporator condensate wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or condensate-tank-volume-derived discharge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_evaporator_condensate_records`
- Sources: `fao-fishmeal-process`

##### Elementary flows

###### Drying particulate matter to air (`drying_particulate_matter_to_air`)

Direct particulate release from a dryer is calculated only from route-specific measured outlet data.

- Selected flow: Particulate matter, less than or equal to 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured concentration multiplied by corresponding dry outlet-gas volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_stack_measurements`
- Sources: `jrc-sa-bref-2024`

### Process: Product cooling (`cooling_packaging_and_storage`)

#### Inputs

##### Product flows

###### Cooling and storage electricity (`cooling_storage_electricity`)

Electricity used for product cooling, frozen holding, cold storage, filling, sealing, or warehouse operation is recorded here.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity assigned to the declared lot and storage interval.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooling_utility_records`
- Sources: `eu-pef-2021-2279`

###### Chilled water (`chilled_water_input`)

Purchased chilled water is recorded as a distinct cooling input when it crosses the facility boundary.

- Selected flow: Purchased chilled water
- Flow property / unit: Energy / MJ
- Amount rule: Metered flow and temperature-derived useful cooling assigned to the declared lot.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_utility_records`
- Sources: `eu-pef-2021-2279`

###### Ammonia refrigerant (`ammonia_refrigerant_input`)

Ammonia make-up is recorded only for refrigeration equipment charged with R717.

- Selected flow: Ammonia refrigerant, R717
- Flow property / unit: Mass / kg
- Amount rule: Substance-specific inventory-balance loss assigned to production and storage.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_refrigerant_inventory`
- Sources: `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

##### Elementary flows

###### Ammonia refrigerant to air (`ammonia_refrigerant_to_air`)

Loss of R717 is emitted as ammonia and is calculated from the ammonia-only inventory balance.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Opening stock plus additions minus closing stock, recovery, and documented transfers.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooling_refrigerant_inventory`
- Sources: `jrc-sa-bref-2024`

### Process: Cleaning and wastewater management (`cleaning_and_wastewater_management`)

#### Inputs

##### Product flows

###### Sanitation process water (`sanitation_process_water`)

Water supplied for cleaning-in-place and surface sanitation is recorded apart from recipe and preparation water.

- Selected flow: Potable process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or cleaning-cycle-volume-derived sanitation water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utility_records`
- Sources: `jrc-sa-bref-2024`

###### Sanitation electricity (`sanitation_electricity`)

Electricity for cleaning pumps, wastewater equipment, or sanitation controls is assigned to this process.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Metered electricity assigned to sanitation and wastewater operations.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utility_records`
- Sources: `eu-pef-2021-2279`

###### Purchased sanitation steam (`sanitation_purchased_steam`)

Purchased steam used for sanitation is recorded separately from process-heating steam.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered mass and enthalpy-derived useful energy assigned to sanitation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_utility_records`
- Sources: `jrc-sa-bref-2024`

###### Purchased sanitation hot water (`sanitation_purchased_hot_water`)

Purchased hot water used for cleaning is recorded separately from water incorporated into product.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered flow and temperature-derived useful heat assigned to sanitation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_utility_records`
- Sources: `jrc-sa-bref-2024`

###### Sodium hydroxide cleaning agent (`sodium_hydroxide_cip_input`)

Sodium hydroxide used for cleaning-in-place is recorded independently from sodium hydroxide used in product processing.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Weighed delivered solution mass and recorded concentration used by cleaning cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cip_chemical_mass`
- Sources: `jrc-sa-bref-2024`

###### Nitric acid cleaning agent (`nitric_acid_cip_input`)

Nitric acid used in cleaning-in-place is recorded as its own chemical input.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Weighed delivered solution mass and recorded concentration used by cleaning cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cip_chemical_mass`
- Sources: `jrc-sa-bref-2024`

###### Peracetic acid disinfectant (`peracetic_acid_disinfectant_input`)

Peracetic acid disinfectant is recorded when that exact disinfectant is consumed.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Weighed delivered formulation mass and recorded concentration used by cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cip_chemical_mass`
- Sources: `jrc-sa-bref-2024`

###### Sodium hypochlorite disinfectant (`sodium_hypochlorite_disinfectant_input`)

Sodium hypochlorite disinfectant is recorded when that exact disinfectant is consumed.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Weighed delivered solution mass and recorded concentration used by cycle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cip_chemical_mass`
- Sources: `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Cleaning-in-place wastewater (`cip_wastewater`)

Spent cleaning solution leaving the cleaning-in-place system is recorded before treatment or discharge.

- Selected flow: Cleaning-in-place wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or cleaning-cycle-volume-derived wastewater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cip_wastewater_records`
- Sources: `jrc-sa-bref-2024`

###### Wastewater-treatment sludge (`wastewater_treatment_sludge`)

Sludge removed from on-site wastewater treatment is recorded as a separate wet waste stream.

- Selected flow: Wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured wet sludge mass removed during the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_sludge_mass`
- Sources: `jrc-sa-bref-2024`

##### Elementary flows

###### Chemical oxygen demand to water (`chemical_oxygen_demand_to_water`)

Chemical oxygen demand is calculated from representative effluent analysis and matching discharge volume.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Measured COD concentration multiplied by corresponding discharge volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_discharge_sampling`
- Sources: `jrc-sa-bref-2024`

###### Biochemical oxygen demand to water (`biochemical_oxygen_demand_to_water`)

Five-day biochemical oxygen demand is calculated independently from the corresponding measured result.

- Selected flow: Biochemical oxygen demand, 5 days, to water
- Flow property / unit: Mass / kg
- Amount rule: Measured BOD5 concentration multiplied by corresponding discharge volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_discharge_sampling`
- Sources: `jrc-sa-bref-2024`

###### Total suspended solids to water (`total_suspended_solids_to_water`)

Suspended-solids discharge is calculated from the measured effluent concentration and matching volume.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: Measured TSS concentration multiplied by corresponding discharge volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_discharge_sampling`
- Sources: `jrc-sa-bref-2024`

###### Total nitrogen to water (`total_nitrogen_to_water`)

Total nitrogen is recorded as its own measured pollutant load.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: Measured total-nitrogen concentration multiplied by corresponding discharge volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_discharge_sampling`
- Sources: `jrc-sa-bref-2024`

###### Total phosphorus to water (`total_phosphorus_to_water`)

Total phosphorus is recorded as its own measured pollutant load.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: Measured total-phosphorus concentration multiplied by corresponding discharge volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_discharge_sampling`
- Sources: `jrc-sa-bref-2024`

###### Chloride to water (`chloride_to_water`)

Chloride discharge is calculated separately when chloride is monitored or materially expected from salt or cleaning inputs.

- Selected flow: Chloride to water
- Flow property / unit: Mass / kg
- Amount rule: Measured chloride concentration multiplied by corresponding discharge volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_discharge_sampling`
- Sources: `jrc-sa-bref-2024`

### Process: On-site energy generation (`onsite_energy_generation`)

#### Inputs

##### Product flows

###### Natural gas (`natural_gas_input`)

Natural gas consumed in an on-site boiler or heater is recorded separately from every other fuel.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered lower-heating-value energy consumed during the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_mass_energy`
- Sources: `jrc-sa-bref-2024`

###### Diesel fuel (`diesel_input`)

Diesel consumed by an on-site thermal unit or emergency generator serving production is recorded separately.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled mass consumed during the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_mass_energy`
- Sources: `jrc-sa-bref-2024`

###### Liquefied petroleum gas (`lpg_input`)

Liquefied petroleum gas is recorded as its own purchased fuel when used by on-site thermal equipment.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Metered or invoice-reconciled mass consumed during the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_mass_energy`
- Sources: `jrc-sa-bref-2024`

###### Boiler feedwater (`boiler_feedwater_input`)

Water entering an on-site boiler is recorded independently from process and cleaning water.

- Selected flow: Boiler feedwater
- Flow property / unit: Volume / m3
- Amount rule: Metered boiler make-up water volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler_water_records`
- Sources: `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### On-site generated steam (`onsite_steam_output`)

Useful steam produced on site is recorded as one internal energy carrier and reconciled with user-process meters.

- Selected flow: On-site generated steam
- Flow property / unit: Energy / MJ
- Amount rule: Measured steam mass converted with measured pressure and enthalpy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_generated_heat_records`
- Sources: `jrc-sa-bref-2024`

###### On-site generated hot water (`onsite_hot_water_output`)

Useful hot water produced on site is recorded separately from steam and reconciled with user-process meters.

- Selected flow: On-site generated hot water
- Flow property / unit: Energy / MJ
- Amount rule: Measured flow converted with measured supply and return temperatures.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_generated_heat_records`
- Sources: `jrc-sa-bref-2024`

##### Waste flows

###### Boiler blowdown wastewater (`boiler_blowdown_wastewater`)

Water purged from the boiler is recorded as a distinct wastewater stream before treatment or discharge.

- Selected flow: Boiler blowdown wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or tank-volume-derived blowdown volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_boiler_blowdown_records`
- Sources: `jrc-sa-bref-2024`

##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_carbon_dioxide_to_air`)

Combustion carbon dioxide is calculated independently from measured fuel use and a documented fuel carbon balance or site factor.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured fuel consumption multiplied by a documented site-specific carbon factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stack_emissions`
- Sources: `jrc-sa-bref-2024`

###### Nitrogen oxides to air (`nitrogen_oxides_to_air`)

Nitrogen oxides are reported as nitrogen dioxide mass from stack measurement or a documented site factor.

- Selected flow: Nitrogen oxides, expressed as nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured concentration times dry gas volume, or measured fuel times a documented site-specific factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stack_emissions`
- Sources: `jrc-sa-bref-2024`

###### Sulfur dioxide to air (`sulfur_dioxide_to_air`)

Sulfur dioxide is recorded as a distinct substance-specific combustion emission.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured concentration times dry gas volume, or measured fuel sulfur balance using site records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stack_emissions`
- Sources: `jrc-sa-bref-2024`

###### Combustion particulate matter to air (`combustion_particulate_matter_to_air`)

Stack particulate matter is recorded independently from product-dryer particulate emissions.

- Selected flow: Particulate matter, less than or equal to 10 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured concentration multiplied by corresponding dry stack-gas volume.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stack_emissions`
- Sources: `jrc-sa-bref-2024`

###### Carbon monoxide to air (`carbon_monoxide_to_air`)

Carbon monoxide is recorded as a separate stack emission from on-site fuel combustion.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured concentration times dry gas volume, or measured fuel times a documented site-specific factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stack_emissions`
- Sources: `jrc-sa-bref-2024`

###### Methane to air (`methane_to_air`)

Unburned methane is recorded separately when measured or derived from a documented site-specific combustion factor.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: Measured concentration times dry gas volume, or measured fuel times a documented site-specific factor.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_stack_emissions`
- Sources: `jrc-sa-bref-2024`

### Process: Packaging and storage (`packaging_and_storage`)

#### Inputs

##### Product flows

###### Carbon dioxide refrigerant (`carbon_dioxide_refrigerant_input`)

Carbon dioxide make-up is recorded only for refrigeration equipment charged with R744.

- Selected flow: Carbon dioxide refrigerant, R744
- Flow property / unit: Mass / kg
- Amount rule: Substance-specific inventory-balance loss assigned to production and storage.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigerant_inventory`
- Sources: `jrc-sa-bref-2024`

###### 1,1,1,2-Tetrafluoroethane refrigerant (`hfc_134a_refrigerant_input`)

HFC-134a make-up is recorded only for refrigeration equipment charged with that exact refrigerant.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant, R134a
- Flow property / unit: Mass / kg
- Amount rule: Substance-specific inventory-balance loss assigned to production and storage.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigerant_inventory`
- Sources: `jrc-sa-bref-2024`

###### Glass bottle (`glass_bottle_input`)

Glass bottles are recorded as one package component when used for the declared product.

- Selected flow: Glass bottle
- Flow property / unit: Mass / kg
- Amount rule: Measured component mass issued to filled conforming units.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_component_mass`
- Sources: `eu-pef-2021-2279`

###### High-density polyethylene bottle (`hdpe_bottle_input`)

High-density polyethylene bottles are recorded separately from all other package components.

- Selected flow: High-density polyethylene bottle
- Flow property / unit: Mass / kg
- Amount rule: Measured component mass issued to filled conforming units.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_component_mass`
- Sources: `eu-pef-2021-2279`

###### Steel drum (`steel_drum_input`)

Steel drums are recorded when used as the immediate or transport package for the declared product.

- Selected flow: Steel drum
- Flow property / unit: Mass / kg
- Amount rule: Measured drum mass allocated by actual fills and verified reuse count where applicable.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_component_mass`
- Sources: `eu-pef-2021-2279`

###### Kraft-paper sack (`kraft_paper_sack_input`)

Kraft-paper sacks used for dried product are recorded apart from any polymer liner.

- Selected flow: Kraft-paper sack
- Flow property / unit: Mass / kg
- Amount rule: Measured sack mass issued to conforming filled units.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_component_mass`
- Sources: `eu-pef-2021-2279`

###### Low-density polyethylene liner (`ldpe_liner_input`)

The low-density polyethylene liner is one separate package component and is not merged with its outer sack.

- Selected flow: Low-density polyethylene liner
- Flow property / unit: Mass / kg
- Amount rule: Measured liner mass issued to conforming filled units.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_component_mass`
- Sources: `eu-pef-2021-2279`

###### Paperboard carton (`paperboard_carton_input`)

Paperboard cartons are recorded as a distinct secondary package component.

- Selected flow: Paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: Measured carton mass issued to conforming shipped units.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_component_mass`
- Sources: `eu-pef-2021-2279`

###### Wooden pallet (`wooden_pallet_input`)

Wooden pallet mass is recorded when pallets cross the product system boundary, with verified reuse allocation if applicable.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured pallet mass allocated by actual loads and verified reuse count.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_component_mass`
- Sources: `eu-pef-2021-2279`

###### Low-density polyethylene stretch film (`ldpe_stretch_film_input`)

Low-density polyethylene stretch film used to secure loads is recorded separately from liners and bottles.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Measured film mass issued to conforming shipped loads.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_component_mass`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released reference product (`reference_product_output`)

The output is the one locked extract or juice at its declared state, solids content, and package configuration.

- Selected flow: Extracts and juices of meat, fish, crustaceans, molluscs or other aquatic invertebrates `0238a5c5-5b90-4881-8277-cd862a581eb8`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Exactly 1 kg net conforming product excluding packaging.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `un-cpc-3.0-21185`

##### Waste flows

###### Waste glass bottle (`waste_glass_packaging`)

Rejected or damaged glass bottles are recorded as one material-specific packaging waste.

- Selected flow: Waste glass bottle
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded glass-bottle mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_mass`
- Sources: `eu-pef-2021-2279`

###### Waste high-density polyethylene bottle (`waste_hdpe_packaging`)

Rejected high-density polyethylene bottles are recorded separately from other polymers.

- Selected flow: Waste high-density polyethylene bottle
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded bottle mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_mass`
- Sources: `eu-pef-2021-2279`

###### Waste steel drum (`waste_steel_packaging`)

Discarded steel drums are recorded as a distinct metallic packaging waste.

- Selected flow: Waste steel drum
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded drum mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_mass`
- Sources: `eu-pef-2021-2279`

###### Waste kraft-paper sack (`waste_kraft_paper_packaging`)

Rejected kraft-paper sacks are recorded independently from polymer liners.

- Selected flow: Waste kraft-paper sack
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded sack mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_mass`
- Sources: `eu-pef-2021-2279`

###### Waste low-density polyethylene (`waste_ldpe_packaging`)

Discarded low-density polyethylene liners or film are weighed as a single material stream only when collected together physically.

- Selected flow: Waste low-density polyethylene
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded low-density polyethylene mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_mass`
- Sources: `eu-pef-2021-2279`

###### Waste paperboard carton (`waste_paperboard_packaging`)

Discarded paperboard cartons are recorded as a separate fibre-based waste stream.

- Selected flow: Waste paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded carton mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_mass`
- Sources: `eu-pef-2021-2279`

##### Elementary flows

###### Carbon dioxide refrigerant to air (`carbon_dioxide_refrigerant_to_air`)

Loss of R744 is emitted as carbon dioxide and is calculated separately from combustion carbon dioxide.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Opening stock plus additions minus closing stock, recovery, and documented transfers.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigerant_inventory`
- Sources: `jrc-sa-bref-2024`

###### 1,1,1,2-Tetrafluoroethane refrigerant to air (`hfc_134a_refrigerant_to_air`)

Loss of R134a is emitted as one chemically specific HFC elementary flow.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Opening stock plus additions minus closing stock, recovery, and documented transfers.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigerant_inventory`
- Sources: `jrc-sa-bref-2024`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared production | Subdivide by species, tissue, product identity, route, and production lot wherever meters and records permit; never allocate a mixed campaign before segregated records have been exhausted. | `eu-pef-2021-2279` |
| `allocation_direct_assignment` | dedicated operations | Assign feedstock, ingredients, filtration media, packaging, waste, and directly metered utilities to the product that caused them. | `eu-pef-2021-2279` |
| `allocation_physical_relation` | inseparable shared operations | For a remaining shared operation, use a documented causal physical relation such as measured throughput, evaporated water, solids processed, or useful heat demand. | `eu-pef-2021-2279`; `fao-fishmeal-process` |
| `allocation_economic_fallback` | multifunctional outputs | Use economic allocation only when subdivision and a defensible causal physical relation are unavailable; use contemporaneous prices, disclose the period and currency, and test sensitivity. | `eu-pef-2021-2279` |
| `allocation_coproduct_classification` | separated fat, oil, shell, or other fraction | Treat a separated fraction as a co-product only when it meets a declared specification and leaves the facility for an evidenced beneficial use; otherwise record the exact stream as waste. | `jrc-sa-bref-2024` |
| `allocation_no_avoided_burden` | recycling or recovery | Do not subtract an avoided product burden inside the foreground inventory; any substitution credit belongs to an explicitly declared downstream scenario. | `eu-pef-2021-2279` |
| `allocation_no_double_counting` | purchased and on-site utilities | A user process shall consume either a purchased carrier or an internally generated carrier for the same metered delivery; do not count both as external input. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_material_mass` | `raw_material_receipt_and_preparation` | exact feedstock and potable ice | weighbridge, scale, receiving log | species; tissue; supplier; lot; gross mass; tare; accepted mass; temperature | Calibrated weighing tied to the locked lot identity | kg | each delivery | complete reporting period | facility | Sum accepted mass by exact species and tissue; do not combine candidate cards | calibration record and receiving trace |
| `cp_receipt_utility_records` | `raw_material_receipt_and_preparation` | electricity | submeter or equipment meter | opening reading; closing reading; operating interval; lot link | Read calibrated meter and assign only the preparation interval | kWh | each batch or shift | complete reporting period | facility | Sum readings, subtract verified non-production use, normalize to conforming output | meter identifier and calibration evidence |
| `cp_receipt_water_records` | `raw_material_receipt_and_preparation` | preparation water | water meter or batch log | opening reading; closing reading; batch volume; lot link | Meter direct water supply or reconcile batch tank volume | m3 | each batch or shift | complete reporting period | facility | Sum preparation water only | meter or tank calibration |
| `cp_receipt_wastewater_records` | `raw_material_receipt_and_preparation` | rinse wastewater | effluent meter or tank record | volume; time; destination; lot link | Meter segregated stream or derive from calibrated tank changes | m3 | each batch or discharge | complete reporting period | facility | Sum physical rinse-water discharge before treatment | meter or tank record |
| `cp_extraction_utility_records` | `aqueous_extraction_or_hydrolysis` | electricity, purchased steam, purchased hot water | meter and operating log | carrier; readings; steam mass; pressure; temperatures; batch link | Read carrier-specific meters and retain thermodynamic measurements | kWh; kg; MJ | each batch or shift | complete reporting period | facility | Calculate each carrier separately and normalize after lot reconciliation | meter calibration and batch log |
| `cp_extraction_ingredient_mass` | `aqueous_extraction_or_hydrolysis` | water, salt, enzyme, acid, alkali, antifoam | recipe issue and scale record | exact substance; formulation; concentration; lot; gross; tare; charged mass or volume | Weigh or meter each named ingredient separately | kg or m3 | each batch | complete reporting period | facility | Sum only actual charges; keep delivered formulation and active fraction distinct | scale calibration, certificate, recipe sign-off |
| `cp_separation_utility_records` | `separation_and_clarification` | electricity and water | meter and batch log | readings; batch; equipment; operating interval | Read stage-specific meters or documented submeter allocation | kWh or m3 | each batch or shift | complete reporting period | facility | Sum each carrier separately | meter calibration and allocation worksheet |
| `cp_filter_media_mass` | `separation_and_clarification` | each named filtration medium | stores issue, installation, replacement log | medium identity; material; supplied mass; installed mass; replacement date; treated mass | Weigh batch media; for durable media allocate installed mass over measured treated throughput | kg | each charge or replacement | complete reporting period plus service interval | facility | Allocate only by verified service throughput; no assumed lifetime | purchase specification and replacement trace |
| `cp_coproduct_mass` | `separation_and_clarification` | each released co-product | product scale and release record | exact material; origin species; wet mass; solids; specification; destination | Weigh each released stream and retain sale or transfer evidence | kg | each lot | complete reporting period | facility | Sum only specification-conforming released mass | scale calibration, release certificate, destination record |
| `cp_separation_waste_mass` | `separation_and_clarification` | each solid waste | container scale and waste log | exact waste identity; origin species; gross; tare; wet mass; destination | Weigh each physically separate waste stream | kg | each container or batch | complete reporting period | facility | Sum by exact waste identity and destination | scale record and waste transfer document |
| `cp_separation_wastewater_records` | `separation_and_clarification` | separation wastewater | effluent meter or tank record | volume; time; destination; batch link | Meter the segregated stream before treatment | m3 | each batch or discharge | complete reporting period | facility | Sum physical separation wastewater | meter or calibrated tank record |
| `cp_concentration_utility_records` | `concentration_or_drying` | electricity, steam, hot water | meter and operating log | carrier; readings; steam mass; pressure; temperatures; batch link | Read equipment or line meters for applicable concentration and drying operations | kWh; kg; MJ | each batch or shift | complete reporting period | facility | Calculate each carrier separately | meter calibration and operating log |
| `cp_compressed_air_records` | `concentration_or_drying` | compressed air | normal-volume meter | opening reading; closing reading; pressure; temperature; batch link | Meter at standardized conditions and record conversion basis | m3 | each batch or shift | complete reporting period | facility | Sum standardized volume assigned to drying | meter calibration and conversion record |
| `cp_evaporator_condensate_records` | `concentration_or_drying` | condensate wastewater | condensate meter or tank record | volume; reuse volume; discharge volume; destination | Meter condensate and subtract only documented internal reuse | m3 | each batch or discharge | complete reporting period | facility | Report physical discharge, not generated condensate twice | meter or tank reconciliation |
| `cp_drying_stack_measurements` | `concentration_or_drying` | dryer particulate emission | stack test or continuous monitor | concentration; dry gas volume; reference conditions; operating time; product mass | Pair measured concentration with corresponding dry gas volume | kg/m3 and m3 | representative campaign or continuous | representative of reporting period | emission point | Calculate load for the matching interval and normalize to conforming output | laboratory method, monitor QA, operating record |
| `cp_cooling_utility_records` | `cooling_packaging_and_storage` | cooling electricity and chilled water | meter and storage log | readings; temperatures; flow; lot; storage duration | Meter carrier use for cooling and declared storage period | kWh; m3; MJ | each batch, shift, or storage interval | complete reporting period | facility | Attribute by measured throughput and storage duration only when causal | meter calibration and storage trace |
| `cp_cooling_refrigerant_inventory` | `cooling_packaging_and_storage` | ammonia refrigerant | charge and inventory log | substance; opening stock; purchases; additions; recovery; returns; closing stock; equipment | Complete an R717-specific mass balance for cooling equipment | kg | each service event and annual close | complete reporting period | equipment and facility | Calculate R717 loss separately and allocate by documented equipment service | service invoices, cylinder weights, inventory sign-off |
| `cp_storage_refrigerant_inventory` | `packaging_and_storage` | carbon dioxide and HFC-134a refrigerants | charge and inventory log | substance; opening stock; purchases; additions; recovery; returns; closing stock; equipment | Complete separate mass balances for R744 and R134a storage equipment | kg | each service event and annual close | complete reporting period | equipment and facility | Calculate loss separately by substance and allocate by documented equipment service | service invoices, cylinder weights, inventory sign-off |
| `cp_sanitation_utility_records` | `cleaning_and_wastewater_management` | water, electricity, steam, hot water | meter and cleaning log | carrier; readings; cycle; area; production link | Meter or reconcile each carrier to documented cleaning cycles | m3; kWh; kg; MJ | each cycle or shift | complete reporting period | facility | Sum each carrier separately and allocate by causal cleaned operation | meter calibration and cleaning log |
| `cp_cip_chemical_mass` | `cleaning_and_wastewater_management` | each named cleaning or disinfecting chemical | stores issue and dosing log | substance; formulation; concentration; gross; tare; dose; cycle | Weigh or meter each chemical separately | kg | each cleaning cycle | complete reporting period | facility | Sum actual delivered formulation by substance | scale calibration, safety-data sheet, dosing record |
| `cp_cip_wastewater_records` | `cleaning_and_wastewater_management` | cleaning-in-place wastewater | effluent meter or cycle-volume record | volume; time; treatment; discharge point | Meter CIP return or reconcile calibrated cycle volumes | m3 | each cycle or discharge | complete reporting period | facility | Sum CIP wastewater separately from other streams | meter or tank record |
| `cp_wastewater_sludge_mass` | `cleaning_and_wastewater_management` | wastewater sludge | container scale and removal log | gross; tare; wet mass; dry solids if tested; destination | Weigh each sludge removal | kg | each removal | complete reporting period | facility | Sum wet mass and preserve measured solids separately | scale record and transfer document |
| `cp_wastewater_discharge_sampling` | `cleaning_and_wastewater_management` | each named water pollutant | flow meter and accredited analysis | discharge volume; sampling time; COD; BOD5; TSS; total nitrogen; total phosphorus; chloride | Use representative sampling paired with the corresponding discharge volume | m3 and kg/m3 | permit frequency or representative campaign | representative of reporting period | discharge point | Calculate each pollutant independently for matched intervals | laboratory report, sampling plan, flow-meter QA |
| `cp_fuel_mass_energy` | `onsite_energy_generation` | each named fuel | fuel meter, tank dip, invoice | fuel identity; volume or mass; density; heating value; opening; purchases; closing | Reconcile metered or inventory fuel by exact carrier | kg or MJ | each delivery and reporting-period close | complete reporting period | facility | Keep natural gas, diesel, and LPG separate | meter calibration, invoices, inventory reconciliation |
| `cp_boiler_water_records` | `onsite_energy_generation` | boiler feedwater | make-up water meter | opening reading; closing reading; boiler operating time | Read dedicated boiler-water meter | m3 | each shift or reporting period | complete reporting period | facility | Sum make-up water only | meter calibration |
| `cp_generated_heat_records` | `onsite_energy_generation` | generated steam and hot water | steam and heat meters | steam mass; pressure; enthalpy; water flow; supply temperature; return temperature | Calculate useful output from measured thermodynamic data | MJ | each shift or batch | complete reporting period | facility | Keep steam and hot-water outputs separate and reconcile user meters | meter calibration and heat-balance worksheet |
| `cp_boiler_blowdown_records` | `onsite_energy_generation` | boiler blowdown | purge meter or tank record | volume; time; destination | Meter purge or reconcile calibrated blowdown tank | m3 | each purge or reporting period | complete reporting period | facility | Sum physical blowdown discharge | meter or tank record |
| `cp_stack_emissions` | `onsite_energy_generation` | each named air emission | stack monitor, stack test, fuel analysis | pollutant; concentration; dry gas volume; reference conditions; fuel; operating time | Pair pollutant-specific concentration with matching gas volume or use a documented site fuel balance | kg/m3 and m3 | continuous or representative campaign | representative of reporting period | emission point | Calculate CO2, NOx as NO2, SO2, PM10, CO, and CH4 separately | test method, monitor QA, fuel certificate, operating record |
| `cp_packaging_component_mass` | `packaging_and_storage` | each package component | bill of materials, scale, issue record | component identity; material; unit mass; units issued; rejects; reuse count | Weigh each component and reconcile issued units to conforming output | kg | each package specification or lot | complete reporting period | facility and product | Calculate each component separately; reuse requires verified cycles | approved BoM, scale record, issue reconciliation |
| `cp_reference_product_mass` | `packaging_and_storage` | released reference product | finished-goods scale and release record | species; tissue; product identity; state; solids; gross; tare; net; lot | Weigh released net product and verify all required qualifiers | kg | each lot | complete reporting period | facility | Sum conforming net mass only | scale calibration and release certificate |
| `cp_packaging_waste_mass` | `packaging_and_storage` | each package waste | waste scale and rejection log | material; component; gross; tare; mass; destination | Weigh each material-specific waste stream | kg | each container or shift | complete reporting period | facility | Sum by one exact waste identity | scale record and waste transfer document |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every exchange | normalized amount = reconciled reporting-period exchange / released conforming net product mass | exchange record; `cp_reference_product_mass` net output | row amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_dry_matter` | feedstock and product | dry matter = measured wet mass × measured solids fraction from the same lot | wet mass; measured solids fraction | dry matter mass | `codex-cxs-117-1981`; `fao-fisheries-paper-540` |
| `calc_extraction_solids_yield` | extraction and separation | recovered-solids yield = measured dry matter in declared product / measured dry matter in exact feedstock; report losses and separated fractions independently | lot wet masses; lot solids results | disclosed solids yield and reconciliation | `fao-fishmeal-process`; `fao-fisheries-paper-540` |
| `calc_thermal_energy` | steam and hot water | useful heat is calculated from measured carrier mass or flow and measured enthalpy or temperature difference | mass or flow; pressure; supply temperature; return temperature | MJ useful heat | `fao-fishmeal-process` |
| `calc_refrigerant_loss` | each refrigerant | loss = opening stock + purchases + additions − closing stock − recovered quantity − returned quantity; calculate independently for each substance | `cp_cooling_refrigerant_inventory`; `cp_storage_refrigerant_inventory` fields | kg substance emitted | `eu-pef-2021-2279` |
| `calc_wastewater_load` | each water pollutant | load = representative measured concentration × corresponding measured discharge volume, with unit conversion documented | `cp_wastewater_discharge_sampling` concentration and volume | kg pollutant discharged | `jrc-sa-bref-2024` |
| `calc_stack_load` | each air pollutant | load = measured concentration × corresponding dry normalized gas volume; a site fuel factor may be used only when its identity and derivation are documented | `cp_stack_emissions` concentration or factor; gas volume or fuel | kg pollutant emitted | `jrc-sa-bref-2024` |
| `calc_packaging_mass` | each package component | component amount = measured unit mass × issued conforming units / conforming net product mass; reusable component mass is additionally divided by verified reuse cycles | component scale and issue records; verified reuse count; net output | kg component per kg reference product | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_lock` | reference product and feedstock | One species, one tissue, one extract-or-juice identity, one physical state, and one concentration state are fixed for the data package. | lot specification, release record, reference-flow qualifiers |
| `dq_primary_manufacturing_data` | foreground operations | Use company-specific measured or calculated-from-measurement data for the represented facility and reporting period. | meters, batch records, laboratory reports, invoices, calculation workpapers |
| `dq_temporal_representativeness` | foreground inventory | Cover a representative production period including start-up, cleaning, downtime allocation, storage, and seasonal changes material to the declared product. | production calendar and coverage statement |
| `dq_mass_solids_reconciliation` | each lot and reporting period | Reconcile wet mass and dry matter across feedstock, product, co-products, wastes, inventory changes, and measured water removal; explain material residuals. | signed wet-mass and solids balance |
| `dq_atomic_exchange_identity` | inventory rows | Each row names one exchange; electricity, steam, hot water, each fuel, each refrigerant, each chemical, each package component, each waste, and each emission remain separate. | row-level inventory audit |
| `dq_upstream_dataset_links` | purchased inputs | Provide an upstream dataset link, geography, time, and supplier or technology basis for every material input. | dataset-link register and supplier evidence |
| `dq_no_unsupported_defaults` | all quantities | Do not use an author estimate, unreferenced range, or source example value as a production amount; collect the value or calculate it from collected records. | row provenance and protocol linkage |
| `dq_evidence_traceability` | all calculated rows | Retain raw records, formula version, unit conversions, allocation driver, reviewer, and calculation date. | reproducible calculation file and review sign-off |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | reference flow | The reference product UUID, Mass property UUID, Units of mass UUID, kg unit, and exactly 1 kg net output shall match section 3. | `un-cpc-3.0-21185` |
| `validation_qualifier_lock` | data package identity | Reject a package that mixes species, tissues, extract and juice identities, physical states, or concentration states, or omits any required qualifier. | `un-cpc-3.0-21185`; `codex-cxs-117-1981` |
| `validation_process_applicability` | process map | Every required process has foreground records; each conditional process is either evidenced as operated or explicitly not applicable with a route explanation. | `eu-pef-2021-2279` |
| `validation_atomic_rows` | process inventory | Reject a collection or selector row; each actual exchange is represented by one concrete flow card and every actual unlisted exchange is added as a new atomic row. | `eu-pef-2021-2279` |
| `validation_uuid_closure` | Tiangong identities | The reference UUIDs shall equal the verified identities; every other UUID remains blank until independently resolved and the manifest unresolved register shall exactly match all blank-UUID row ids. | `un-cpc-3.0-21185` |
| `validation_inventory_completeness` | LCI | Confirm raw feedstock, utilities, water, ingredients, filtration media, packaging, co-products, wastes, wastewater pollutants, refrigerant losses, and direct air emissions for the operated route. | `eu-pef-2021-2279`; `jrc-sa-bref-2024` |
| `validation_mass_solids_balance` | mass balance | Wet-mass and dry-matter balances shall reconcile feedstock, product, separated fractions, waste, inventory changes, and water removal; every residual is quantified and explained. | `fao-fishmeal-process`; `fao-fisheries-paper-540` |
| `validation_quantity_provenance` | inventory amounts | Every non-fixed value shall link to a foreground collection protocol or a calculation using collected records; unsupported defaults, ranges, and reasoned estimates are prohibited. | `eu-pef-2021-2279` |
| `validation_allocation` | shared operations and co-products | Verify subdivision, direct assignment, the documented causal driver, any economic fallback, co-product classification, and absence of double counting or embedded avoided burden. | `eu-pef-2021-2279` |
| `validation_language_alignment` | bilingual PCR | English and Chinese shall have the same ordered process ids, row ids, controlled tokens, UUIDs, source ids, calculation ids, and normative rule ids. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Company-specific foreground production dataset for one locked extract or juice |
| downstream_use | Product carbon footprint, environmental-footprint study, LCA process dataset, lifecycle model, supplier disclosure, and internal process improvement |
| allowed_use | Use only for the declared species, tissue, product identity, route, physical state, solids or concentration state, facility, geography, period, package, and storage condition |
| excluded_use | Generic poultry, generic fish, generic crustacean, generic mollusc, mixed animal input, mixed extract-and-juice product, another concentration state, soup or broth, fishmeal, gelatine, principal-product oil, or an unrepresented facility |
| required_metadata | All reference qualifiers; facility and period; process applicability; exact BoM; meters and protocols; upstream dataset links; co-product fate; allocation; waste destinations; discharge points; unresolved UUID status |
| required_quality_disclosure | Primary-data coverage; meter and laboratory QA; wet-mass and solids reconciliation; allocation sensitivity; missing data; representativeness; any added atomic rows |
| update_trigger | Change of species, tissue, product identity, extraction route, physical or concentration state, formulation, filtration technology, packaging, refrigerant, fuel, wastewater treatment, allocation basis, facility, or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3.0-21185` | Official guidance (`official_guidance`) | United Nations Statistics Division, Central Product Classification Version 3.0, retained official structure CSV, subclass 21185, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv, retrieved 2026-06-23 | Exact product-category title and category boundary |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, consolidated text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng, retrieved 2026-08-13 | Product-specific bill of materials, company-specific manufacturing data, complete raw-material, energy, product, waste and emission inventory, transparency, allocation, and data quality |
| `jrc-sa-bref-2024` | Official guidance (`official_guidance`) | Karlis, P. et al., Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, EUR 31752 EN, DOI 10.2760/18199, https://publications.jrc.ec.europa.eu/repository/handle/JRC135916, retrieved 2026-08-13 | Animal-derived input and co-product context, cleaning, water, wastewater, fuel combustion, direct emissions, monitoring, and treatment boundaries without importing non-operated upstream processes |
| `codex-cxs-117-1981` | Standard (`standard`) | Codex Alimentarius, CXS 117-1981, Standard for Bouillons and Consommés, revised 2015 and amended 2021, https://workspace.fao.org/sites/codex/Standards/CXS%20117-1981/CXS_117e.pdf, retrieved 2026-08-13 | Definition of beef extract as concentrated water-soluble components, aqueous cooking context, salt and water inputs, and declared ready, concentrated, frozen, or dehydrated forms; no compositional value is adopted as a PCR default |
| `fao-fisheries-paper-540` | Handbook (`handbook`) | Tacon, A.G.J., Metian, M. and Hasan, M.R., Feed ingredients and fertilizers for farmed aquatic animals: sources and composition, FAO Fisheries and Aquaculture Technical Paper 540, 2009, ISBN 978-92-5-106421-4, https://www.fao.org/4/i1142e/i1142e.pdf, retrieved 2026-08-13 | Exact origin and tissue naming, presswater and water-extract definitions, species-specific identity, enzyme hydrolysis, removal of undigested solids, concentration, filtration and drying route structure; feed definitions are methodological evidence only, not product defaults |
| `fao-fishmeal-process` | Handbook (`handbook`) | FAO, The production of fish meal and oil, Chapter 3: The process, https://www.fao.org/4/X6899E/X6899E04.htm, retrieved 2026-08-13 | Official full-text evidence for heating, pressing, centrifugation, separation, evaporation of aqueous solubles, drying, cooling, energy carriers, waste-water and air-emission controls; fishmeal quantities and operating examples are not imported into this PCR |
