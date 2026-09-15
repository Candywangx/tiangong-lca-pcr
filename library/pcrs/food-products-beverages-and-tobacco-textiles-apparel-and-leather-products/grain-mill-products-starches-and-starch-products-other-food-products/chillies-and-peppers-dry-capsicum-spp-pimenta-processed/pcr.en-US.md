---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.chillies-and-peppers-dry-capsicum-spp-pimenta-processed
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Chillies and peppers, dry (Capsicum spp., Pimenta), processed

## 1. Scope and Applicability

This PCR covers dry or dehydrated fruits of a declared *Capsicum* species or berries of a declared *Pimenta* species that are processed as whole, cut, broken, cracked, crushed, flaked, ground or powdered products. Drying itself may be the processing step, or a facility may receive already dried material and perform sorting, microbial reduction, size reduction, formulation or packaging.

A foreground data package shall represent exactly one declared botanical species and cultivar or trade type, one incoming raw-material state, one drying and post-treatment route, one particle form and particle-size specification, and one packaging state. It shall not average sweet paprika, pungent chilli, *Pimenta* allspice, fresh and previously dried inputs, or whole and powdered products.

The scope excludes fresh unprocessed peppers, products of *Piper nigrum*, sauces, pastes, oleoresins, essential oils, extracts, blends whose identity is no longer a single declared pepper product, and cultivation or post-plant-gate distribution unless those stages are supplied as linked datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.chillies-and-peppers-dry-capsicum-spp-pimenta-processed |
| classification_refs | CPC 3.0: 23922, exact |
| covered_products | Processed dry or dehydrated fruits of declared *Capsicum* species and processed dry or dehydrated berries of declared *Pimenta* species, in one declared whole, cut, broken, cracked, crushed, flaked, ground or powdered style |
| excluded_products | Fresh unprocessed peppers; *Piper nigrum* pepper; chilli sauce or paste; oleoresins, oils or extracts; mixed-spice products; any product lacking a declared botanical and processing identity |
| representative_product | One specifically declared processed dry chilli, paprika or *Pimenta* allspice product |
| production_route | Receipt and identity control, followed by the actually applicable preparation, drying, validated microbial treatment, size reduction or formulation, packaging, storage, sanitation and on-site utility operations |
| market_state | Dry, in one declared particle form and moisture state, with one declared packaging configuration at the reporting-facility plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide a processed dry pepper product of one declared botanical identity, product form and processing route |
| How much | 1 kg net product, excluding packaging mass |
| How well | Conforming to the declared moisture basis, particle form and size, stalk/seed/placenta inclusion, treatment status, ingredient formula and packaging specification |
| How long or cycle | One finished production lot at the reporting-facility plant gate; any foreground storage duration is declared |
| reference_flow_link | The reference amount is the net mass of the verified CPC 23922 product flow after all included processing and before distribution |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Chillies and peppers, dry (Capsicum spp., Pimenta), processed `fa9bf702-43d4-414e-a2da-0dad135e5df7` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | scientific species; cultivar or trade type; chilli, paprika or allspice designation; incoming fresh or dried state; incoming and product moisture result with basis; drying technology and whether on site; microbial-reduction method or none; stalk, seed and placenta inclusion; whole, cut, broken, cracked, crushed, flaked, ground or powdered form; declared particle-size specification; each added ingredient or none; packaging configuration; storage condition and duration; geography; reporting period; plant-gate location |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, product description or an equivalent package field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net pepper product mass after subtracting the measured packaging tare; packaging is inventoried separately. |
| `botanical_state_separation` | incoming pepper material | Mass | kg | Record mass independently by scientific species, cultivar or trade type and fresh or dried incoming state; do not average or combine botanical identities or states. |
| `moisture_basis_alignment` | incoming, intermediate and final pepper material | Mass fraction | kg/kg | Record each moisture result and whether it is wet-basis or dry-basis; all drying mass-balance terms shall use a consistent declared basis. |
| `energy_unit_conversion` | electricity and thermal energy | Energy | kWh or MJ | Preserve the metered unit; when conversion is required, use 1 kWh = 3.6 MJ and retain the original record. |
| `water_unit_conversion` | washing and cleaning water | Volume or Mass | m3 or kg | Preserve the measured unit; any mass-volume conversion shall use a measured or source-disclosed density for the relevant water condition. |
| `packaging_component_mass` | each packaging component | Mass | kg | Determine each material independently from weighed issues or item counts multiplied by a measured unit mass; do not use a combined packaging-material total. |
| `internal_rework_exclusion` | internal pepper rework | Mass | kg | Track internal recirculation for process control but do not count it as a new boundary input or output; disclose any rework crossing the reporting boundary. |
| `emission_substance_mass` | each direct air or water emission | Mass | kg | Report each named substance or monitored pollutant independently; retain the measurement or calculation basis and discharge compartment. |

## 5. System Boundary

The foreground boundary starts when the one declared pepper raw material is accepted at the reporting facility and ends when 1 kg net packaged processed dry pepper leaves the plant gate. It includes the applicable foreground operations and direct exchanges below. Upstream production of the accepted botanical raw material, purchased utilities, chemicals and packaging, and off-site waste treatment are represented by linked upstream datasets rather than silently absorbed into this foreground inventory.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | One botanically explicit *Capsicum* fruit or *Pimenta* berry feedstock is accepted at the reporting facility in one declared fresh or previously dried state and moisture condition. |
| starting_condition_role | Foreground gate input whose identity and state determine which preparation, drying and downstream process rows apply. |
| product_classification_scope | Processed dry or dehydrated *Capsicum* or *Pimenta* products within CPC 3.0 subclass 23922; no averaging across species or product forms. |
| recursive_input_rule | If a purchased input is already a processed dry pepper in this same category, record that exact product input once with its upstream dataset, disclose which downstream processing remains, and stop recursive category expansion at that input. |
| upstream_dataset_requirement | Link representative upstream datasets for the declared botanical feedstock and incoming state, each purchased utility, each actual chemical or ingredient, each packaging component and each off-site treatment service. |
| disclosure | Declare species and cultivar or trade type, raw-material state, moisture basis, all included and omitted processes, drying and microbial-treatment technology, particle form, ingredients, packaging, storage, geography, period and allocation choices. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_lock` | foreground package | Include only the process route used for the declared product and explain every conditional process included or omitted. | `codex-cxc-42-1995`; `eu-pef-2021-2279` |
| `boundary_upstream_links` | purchased inputs | Keep upstream production outside the foreground facility model but link an upstream dataset for every accepted raw material, utility, chemical, ingredient and packaging component. | `eu-pef-2021-2279` |
| `boundary_direct_releases` | facility emissions and wastes | Include each direct air emission, wastewater pollutant and waste stream generated by the included foreground processes. | `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031` |
| `boundary_packaging` | reference product | Include the actual primary, secondary and tertiary packaging used to deliver the reference product at the plant gate, while keeping packaging mass outside the 1 kg net product amount. | `codex-cxc-42-1995`; `eu-pef-2021-2279` |
| `boundary_recursive_product` | same-category input | Stop recursive expansion at a purchased processed dry pepper input after recording its exact identity and linked upstream dataset; do not count upstream drying twice. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

Every flow card below is one atomic exchange. A concrete data package retains only the botanical, technology, ingredient, packaging, fuel, refrigerant, waste and emission rows that actually apply and supplies foreground records or calculations for them. An unused candidate is not averaged into another row.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receipt_and_sorting` | Raw material receipt and sorting | required | Every dataset records receipt, botanical identity, incoming state and sorting. | Foreground receipt, identity control and physical-hazard removal | mass of the one declared incoming botanical feedstock |
| `washing_and_preparation` | Washing and preparation | conditional | Include only when wet washing, blanching, trimming, stalk removal, seed removal or cutting occurs at the reporting facility. | Foreground wet preparation and material separation | mass of prepared pepper material |
| `drying` | Drying | conditional | Include when primary drying, finish drying or post-steam re-drying occurs at the reporting facility; otherwise disclose the upstream drying dataset. | Foreground moisture removal | mass of dry pepper leaving the drying step |
| `microbial_reduction_treatment` | Microbial reduction treatment | conditional | Include only for the declared, legally permitted and validated steam, fumigation or irradiation treatment actually applied. | Foreground pathogen-reduction treatment | mass of pepper treated by the declared method |
| `milling_sieving_and_formulation` | Milling, sieving and formulation | conditional | Include for cut, broken, crushed, flaked, ground or powdered products and whenever an actual anticaking agent is added. | Foreground particle-size production, separation and formulation | mass of declared product form leaving this step |
| `packaging_and_storage` | Packaging and storage | required | Every dataset records the actual primary, secondary and tertiary packaging configuration and any controlled storage performed before the plant gate. | Foreground packing, finished-product storage and reference output | 1 kg net packaged reference product at the plant gate |
| `cleaning_and_wastewater_management` | Cleaning and wastewater management | required | Every dataset records dry-cleaning activities and any wet-cleaning or wastewater operations actually present. | Foreground sanitation, residue collection and effluent accounting | 1 kg net packaged reference product |
| `onsite_thermal_energy_supply` | On-site thermal energy supply | conditional | Include when fuel is combusted on site for direct drying, steam, hot water or other processing heat; purchased utilities are recorded at their consuming process instead. | Foreground fuel combustion and direct air-emission accounting | 1 kg net packaged reference product |

### Process: Raw material receipt and sorting (`raw_material_receipt_and_sorting`)

#### Inputs

##### Product flows

###### Fresh Capsicum annuum fruit (`fresh_capsicum_annuum_fruit_input`)

Fresh ripe fruit of Capsicum annuum is one botanically explicit incoming feedstock candidate. It is recorded only when its species, cultivar or trade type, and incoming moisture state are the ones declared for the dataset.

- Selected flow: Fresh ripe fruit of Capsicum annuum
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed received mass for this species and incoming state; do not combine it with another species, cultivar group or moisture state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity_mass`
- Sources: `codex-cxs-353-2022`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Dried Capsicum annuum fruit (`dried_capsicum_annuum_fruit_input`)

Dried fruit of Capsicum annuum is one botanically explicit incoming feedstock candidate. It is recorded only when its species, cultivar or trade type, and incoming moisture state are the ones declared for the dataset.

- Selected flow: Dried fruit of Capsicum annuum
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed received mass for this species and incoming state; do not combine it with another species, cultivar group or moisture state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity_mass`
- Sources: `codex-cxs-353-2022`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Fresh Capsicum frutescens fruit (`fresh_capsicum_frutescens_fruit_input`)

Fresh ripe fruit of Capsicum frutescens is one botanically explicit incoming feedstock candidate. It is recorded only when its species, cultivar or trade type, and incoming moisture state are the ones declared for the dataset.

- Selected flow: Fresh ripe fruit of Capsicum frutescens
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed received mass for this species and incoming state; do not combine it with another species, cultivar group or moisture state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity_mass`
- Sources: `codex-cxs-353-2022`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Dried Capsicum frutescens fruit (`dried_capsicum_frutescens_fruit_input`)

Dried fruit of Capsicum frutescens is one botanically explicit incoming feedstock candidate. It is recorded only when its species, cultivar or trade type, and incoming moisture state are the ones declared for the dataset.

- Selected flow: Dried fruit of Capsicum frutescens
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed received mass for this species and incoming state; do not combine it with another species, cultivar group or moisture state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity_mass`
- Sources: `codex-cxs-353-2022`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Fresh Capsicum chinense fruit (`fresh_capsicum_chinense_fruit_input`)

Fresh ripe fruit of Capsicum chinense is one botanically explicit incoming feedstock candidate. It is recorded only when its species, cultivar or trade type, and incoming moisture state are the ones declared for the dataset.

- Selected flow: Fresh ripe fruit of Capsicum chinense
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed received mass for this species and incoming state; do not combine it with another species, cultivar group or moisture state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity_mass`
- Sources: `codex-cxs-353-2022`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Dried Capsicum chinense fruit (`dried_capsicum_chinense_fruit_input`)

Dried fruit of Capsicum chinense is one botanically explicit incoming feedstock candidate. It is recorded only when its species, cultivar or trade type, and incoming moisture state are the ones declared for the dataset.

- Selected flow: Dried fruit of Capsicum chinense
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed received mass for this species and incoming state; do not combine it with another species, cultivar group or moisture state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity_mass`
- Sources: `codex-cxs-353-2022`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Fresh Pimenta dioica berries (`fresh_pimenta_dioica_berry_input`)

Fresh berries of Pimenta dioica is one botanically explicit incoming feedstock candidate. It is recorded only when its species, cultivar or trade type, and incoming moisture state are the ones declared for the dataset.

- Selected flow: Fresh berries of Pimenta dioica
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed received mass for this species and incoming state; do not combine it with another species, cultivar group or moisture state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity_mass`
- Sources: `codex-cxs-358-2024`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Dried Pimenta dioica berries (`dried_pimenta_dioica_berry_input`)

Dried berries of Pimenta dioica is one botanically explicit incoming feedstock candidate. It is recorded only when its species, cultivar or trade type, and incoming moisture state are the ones declared for the dataset.

- Selected flow: Dried berries of Pimenta dioica
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed received mass for this species and incoming state; do not combine it with another species, cultivar group or moisture state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity_mass`
- Sources: `codex-cxs-358-2024`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Fresh Pimenta racemosa berries (`fresh_pimenta_racemosa_berry_input`)

Fresh berries of Pimenta racemosa var. racemosa is one botanically explicit incoming feedstock candidate. It is recorded only when its species, cultivar or trade type, and incoming moisture state are the ones declared for the dataset.

- Selected flow: Fresh berries of Pimenta racemosa var. racemosa
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed received mass for this species and incoming state; do not combine it with another species, cultivar group or moisture state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity_mass`
- Sources: `codex-cxs-358-2024`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Dried Pimenta racemosa berries (`dried_pimenta_racemosa_berry_input`)

Dried berries of Pimenta racemosa var. racemosa is one botanically explicit incoming feedstock candidate. It is recorded only when its species, cultivar or trade type, and incoming moisture state are the ones declared for the dataset.

- Selected flow: Dried berries of Pimenta racemosa var. racemosa
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed received mass for this species and incoming state; do not combine it with another species, cultivar group or moisture state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_identity_mass`
- Sources: `codex-cxs-358-2024`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Electricity for receipt and sorting (`receipt_sorting_electricity_input`)

Electricity, facility supply is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Electricity, facility supply attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_utility_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
#### Outputs

##### Waste flows

###### Mouldy Capsicum fruit waste (`mouldy_capsicum_fruit_waste`)

Mouldy Capsicum fruit is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Mouldy Capsicum fruit
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Mouldy Capsicum fruit; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_sorting_residues`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Mouldy Pimenta berry waste (`mouldy_pimenta_berry_waste`)

Mouldy Pimenta berries is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Mouldy Pimenta berries
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Mouldy Pimenta berries; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_sorting_residues`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Foreign plant debris (`foreign_plant_debris_waste`)

Foreign plant debris from pepper sorting is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Foreign plant debris from pepper sorting
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Foreign plant debris from pepper sorting; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_sorting_residues`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Stone sorting rejects (`stone_sorting_reject_waste`)

Stones from pepper sorting is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Stones from pepper sorting
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Stones from pepper sorting; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_sorting_residues`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Ferrous metal sorting rejects (`ferrous_metal_sorting_reject_waste`)

Ferrous metal pieces from pepper sorting is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Ferrous metal pieces from pepper sorting
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Ferrous metal pieces from pepper sorting; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_sorting_residues`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
### Process: Washing and preparation (`washing_and_preparation`)

#### Inputs

##### Product flows

###### Pepper washing water (`pepper_washing_water_input`)

Process water for pepper washing is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Process water for pepper washing
- Flow property / unit: Volume / m3
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Process water for pepper washing attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_water_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Electricity for washing and preparation (`preparation_electricity_input`)

Electricity, facility supply is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Electricity, facility supply attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_utility_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Purchased steam for blanching (`blanching_steam_input`)

Steam, purchased is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Steam, purchased attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_utility_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Purchased hot water for blanching (`blanching_hot_water_input`)

Hot water, purchased is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Hot water, purchased attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_utility_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Sodium hypochlorite for washing (`washing_sodium_hypochlorite_input`)

Sodium hypochlorite is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Sodium hypochlorite attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_chemical_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Peracetic acid for washing (`washing_peracetic_acid_input`)

Peracetic acid is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Peracetic acid attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_chemical_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
#### Outputs

##### Product flows

###### Capsicum stalk co-product from preparation (`preparation_capsicum_stalk_coproduct`)

Capsicum stalks is recorded as a co-product only when it leaves the process with a documented intended use or economic value; the same material must not also be recorded as waste.

- Selected flow: Capsicum stalks
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed mass of Capsicum stalks sold or transferred as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_material_balance`
- Sources: `codex-cxs-353-2022`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Capsicum seed co-product from preparation (`preparation_capsicum_seed_coproduct`)

Capsicum seeds is recorded as a co-product only when it leaves the process with a documented intended use or economic value; the same material must not also be recorded as waste.

- Selected flow: Capsicum seeds
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed mass of Capsicum seeds sold or transferred as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_material_balance`
- Sources: `codex-cxs-353-2022`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
##### Waste flows

###### Capsicum stalk waste from preparation (`preparation_capsicum_stalk_waste`)

Discarded Capsicum stalks is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Discarded Capsicum stalks
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Discarded Capsicum stalks; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_material_balance`
- Sources: `codex-cxs-353-2022`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Capsicum seed waste from preparation (`preparation_capsicum_seed_waste`)

Discarded Capsicum seeds is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Discarded Capsicum seeds
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Discarded Capsicum seeds; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_material_balance`
- Sources: `codex-cxs-353-2022`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Trimmed pepper tissue waste (`trimmed_pepper_tissue_waste`)

Damaged pepper fruit tissue is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Damaged pepper fruit tissue
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Damaged pepper fruit tissue; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_material_balance`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Pepper washing wastewater (`pepper_washing_wastewater_output`)

Wastewater from pepper washing is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Wastewater from pepper washing
- Flow property / unit: Volume / m3
- Amount rule: Record the weighed or mass-balance quantity of Wastewater from pepper washing; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_wastewater_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
### Process: Drying (`drying`)

#### Inputs

##### Product flows

###### Electricity for drying (`drying_electricity_input`)

Electricity, facility supply is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Electricity, facility supply attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_utility_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Purchased steam for drying (`drying_purchased_steam_input`)

Steam, purchased is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Steam, purchased attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_utility_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Purchased hot water for drying (`drying_purchased_hot_water_input`)

Hot water, purchased is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Hot water, purchased attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_utility_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
#### Outputs

##### Waste flows

###### Over-dried pepper waste (`overdried_pepper_waste`)

Over-dried pepper material is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Over-dried pepper material
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Over-dried pepper material; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_material_balance`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
##### Elementary flows

###### Water vapour from drying to air (`drying_water_vapour_to_air`)

Water vapour to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Water vapour to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the water mass removed from measured incoming and outgoing mass and moisture data, reconciled with rejects; do not infer it from an assumed moisture content.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_material_balance`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Pepper dust from drying to air (`dryer_pepper_dust_to_air`)

Pepper particulate dust to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Pepper particulate dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_air_emission_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
### Process: Microbial reduction treatment (`microbial_reduction_treatment`)

#### Inputs

##### Product flows

###### Electricity for microbial reduction (`microbial_treatment_electricity_input`)

Electricity, facility supply is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Electricity, facility supply attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_treatment_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Steam for microbial reduction (`microbial_treatment_steam_input`)

Steam, purchased is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Steam, purchased attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_treatment_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Ethylene oxide treatment agent (`ethylene_oxide_treatment_input`)

Ethylene oxide is recorded as one treatment chemical only when its use is legal in the applicable jurisdiction, validated for the declared product, and actually applied.

- Selected flow: Ethylene oxide
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Ethylene oxide attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_treatment_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Propylene oxide treatment agent (`propylene_oxide_treatment_input`)

Propylene oxide is recorded as one treatment chemical only when its use is legal in the applicable jurisdiction, validated for the declared product, and actually applied.

- Selected flow: Propylene oxide
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Propylene oxide attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_treatment_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Gamma irradiation treatment service (`gamma_irradiation_service_input`)

Gamma irradiation treatment service for dried spices is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Gamma irradiation treatment service for dried spices
- Flow property / unit: Mass treated / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Gamma irradiation treatment service for dried spices attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_treatment_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Electron-beam treatment service (`electron_beam_treatment_service_input`)

Electron-beam treatment service for dried spices is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Electron-beam treatment service for dried spices
- Flow property / unit: Mass treated / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Electron-beam treatment service for dried spices attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_microbial_treatment_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
#### Outputs

##### Elementary flows

###### Ethylene oxide to air (`ethylene_oxide_to_air`)

Ethylene oxide to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Ethylene oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_microbial_treatment_emission_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Propylene oxide to air (`propylene_oxide_to_air`)

Propylene oxide to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Propylene oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_microbial_treatment_emission_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
### Process: Milling, sieving and formulation (`milling_sieving_and_formulation`)

#### Inputs

##### Product flows

###### Electricity for milling and sieving (`milling_electricity_input`)

Electricity, facility supply is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Electricity, facility supply attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_utility_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Compressed air for milling controls (`milling_compressed_air_input`)

Compressed air is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Compressed air
- Flow property / unit: Volume / m3
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Compressed air attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_utility_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Silicon dioxide anticaking agent (`silicon_dioxide_anticaking_input`)

Silicon dioxide is recorded only when it is specifically identified in the product formula, legally authorised for the product and actually added; this card does not authorise its use.

- Selected flow: Silicon dioxide
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Silicon dioxide attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_ingredient_records`
- Sources: `codex-cxs-353-2022`; `codex-cxs-358-2024`; `eu-pef-2021-2279`
###### Calcium silicate anticaking agent (`calcium_silicate_anticaking_input`)

Calcium silicate is recorded only when it is specifically identified in the product formula, legally authorised for the product and actually added; this card does not authorise its use.

- Selected flow: Calcium silicate
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Calcium silicate attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_ingredient_records`
- Sources: `codex-cxs-353-2022`; `codex-cxs-358-2024`; `eu-pef-2021-2279`
###### Tricalcium phosphate anticaking agent (`tricalcium_phosphate_anticaking_input`)

Tricalcium phosphate is recorded only when it is specifically identified in the product formula, legally authorised for the product and actually added; this card does not authorise its use.

- Selected flow: Tricalcium phosphate
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Tricalcium phosphate attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_formulation_ingredient_records`
- Sources: `codex-cxs-353-2022`; `codex-cxs-358-2024`; `eu-pef-2021-2279`
#### Outputs

##### Product flows

###### Capsicum stalk co-product from milling (`milling_capsicum_stalk_coproduct`)

Capsicum stalks is recorded as a co-product only when it leaves the process with a documented intended use or economic value; the same material must not also be recorded as waste.

- Selected flow: Capsicum stalks
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed mass of Capsicum stalks sold or transferred as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_material_balance`
- Sources: `codex-cxs-353-2022`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Capsicum seed co-product from milling (`milling_capsicum_seed_coproduct`)

Capsicum seeds is recorded as a co-product only when it leaves the process with a documented intended use or economic value; the same material must not also be recorded as waste.

- Selected flow: Capsicum seeds
- Flow property / unit: Mass / kg
- Amount rule: Record the separately weighed mass of Capsicum seeds sold or transferred as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_material_balance`
- Sources: `codex-cxs-353-2022`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
##### Waste flows

###### Capsicum stalk waste from milling (`milling_capsicum_stalk_waste`)

Discarded Capsicum stalks is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Discarded Capsicum stalks
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Discarded Capsicum stalks; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_material_balance`
- Sources: `codex-cxs-353-2022`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Capsicum seed waste from milling (`milling_capsicum_seed_waste`)

Discarded Capsicum seeds is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Discarded Capsicum seeds
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Discarded Capsicum seeds; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_material_balance`
- Sources: `codex-cxs-353-2022`; `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Captured pepper dust from milling (`captured_milling_pepper_dust_waste`)

Captured pepper dust is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Captured pepper dust
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Captured pepper dust; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_milling_dust_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
##### Elementary flows

###### Pepper dust from milling to air (`milling_pepper_dust_to_air`)

Pepper particulate dust to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Pepper particulate dust to air
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_milling_dust_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
### Process: Packaging and storage (`packaging_and_storage`)

#### Inputs

##### Product flows

###### Electricity for packaging and storage (`packaging_storage_electricity_input`)

Electricity, facility supply is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Electricity, facility supply attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_utility_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Nitrogen for inert-gas packaging (`packaging_nitrogen_input`)

Nitrogen gas is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Nitrogen gas attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Low-density polyethylene packaging film (`ldpe_packaging_film_input`)

Low-density polyethylene film is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Low-density polyethylene film attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Polypropylene packaging film (`polypropylene_packaging_film_input`)

Polypropylene film is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Polypropylene film
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Polypropylene film attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Polyethylene terephthalate jar (`pet_packaging_jar_input`)

Polyethylene terephthalate jar is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Polyethylene terephthalate jar
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Polyethylene terephthalate jar attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Glass packaging jar (`glass_packaging_jar_input`)

Glass jar is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Glass jar
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Glass jar attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Aluminium packaging foil (`aluminium_packaging_foil_input`)

Aluminium foil is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Aluminium foil
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Aluminium foil attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Corrugated fibreboard box (`corrugated_board_box_input`)

Corrugated fibreboard box is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Corrugated fibreboard box attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Paper label (`paper_label_input`)

Paper label is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Paper label attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Wood pallet (`wood_pallet_input`)

Wood pallet is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Wood pallet attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Low-density polyethylene stretch film (`ldpe_stretch_film_input`)

Low-density polyethylene stretch film is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Low-density polyethylene stretch film attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Ammonia refrigerant (`ammonia_refrigerant_input`)

Ammonia refrigerant (R717) is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Ammonia refrigerant (R717)
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Ammonia refrigerant (R717) attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_refrigerant_inventory`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Carbon dioxide refrigerant (`carbon_dioxide_refrigerant_input`)

Carbon dioxide refrigerant (R744) is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Carbon dioxide refrigerant (R744)
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Carbon dioxide refrigerant (R744) attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_refrigerant_inventory`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### HFC-134a refrigerant (`hfc134a_refrigerant_input`)

1,1,1,2-Tetrafluoroethane refrigerant (R134a) is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (R134a)
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of 1,1,1,2-Tetrafluoroethane refrigerant (R134a) attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_refrigerant_inventory`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
#### Outputs

##### Product flows

###### Processed dry chillies and peppers reference product (`processed_dry_chillies_and_peppers_reference_output`)

This is the verified CPC 23922 reference product flow. One dataset represents one declared botanical identity, incoming state, processing route, particle form and packaging state, never an average across Capsicum, Pimenta or product styles.

- Selected flow: Chillies and peppers, dry (Capsicum spp., Pimenta), processed `fa9bf702-43d4-414e-a2da-0dad135e5df7`
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg net product at the plant gate, excluding packaging mass.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net packaged reference product at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_reference_product_mass`
- Sources: `un-cpc-3.0-23922`; `codex-cxs-353-2022`; `codex-cxs-358-2024`
##### Waste flows

###### Low-density polyethylene packaging waste (`ldpe_packaging_waste`)

Low-density polyethylene packaging waste is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Low-density polyethylene packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Low-density polyethylene packaging waste; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Polypropylene packaging waste (`polypropylene_packaging_waste`)

Polypropylene packaging waste is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Polypropylene packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Polypropylene packaging waste; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Polyethylene terephthalate packaging waste (`pet_packaging_waste`)

Polyethylene terephthalate packaging waste is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Polyethylene terephthalate packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Polyethylene terephthalate packaging waste; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Glass packaging waste (`glass_packaging_waste`)

Glass packaging waste is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Glass packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Glass packaging waste; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Aluminium packaging waste (`aluminium_packaging_waste`)

Aluminium packaging waste is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Aluminium packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Aluminium packaging waste; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Corrugated fibreboard packaging waste (`corrugated_board_packaging_waste`)

Corrugated fibreboard packaging waste is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Corrugated fibreboard packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Corrugated fibreboard packaging waste; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Paper label waste (`paper_label_waste`)

Paper label waste is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Paper label waste
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Paper label waste; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Wood pallet waste (`wood_pallet_waste`)

Wood pallet waste is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Wood pallet waste
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Wood pallet waste; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
##### Elementary flows

###### Ammonia refrigerant to air (`ammonia_refrigerant_to_air`)

Ammonia to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate R717 loss from a substance-specific refrigerant mass balance using opening stock, purchases, additions, recovery, returns and closing stock.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigerant_inventory`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Carbon dioxide refrigerant to air (`carbon_dioxide_refrigerant_to_air`)

Carbon dioxide, fossil, to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate R744 loss from a substance-specific refrigerant mass balance; keep it separate from combustion carbon dioxide.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigerant_inventory`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### HFC-134a refrigerant to air (`hfc134a_refrigerant_to_air`)

1,1,1,2-Tetrafluoroethane to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate R134a loss from a substance-specific refrigerant mass balance using opening stock, purchases, additions, recovery, returns and closing stock.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_refrigerant_inventory`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
### Process: Cleaning and wastewater management (`cleaning_and_wastewater_management`)

#### Inputs

##### Product flows

###### Equipment cleaning water (`equipment_cleaning_water_input`)

Water for equipment cleaning is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Water for equipment cleaning
- Flow property / unit: Volume / m3
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Water for equipment cleaning attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_material_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
###### Electricity for cleaning and wastewater management (`cleaning_electricity_input`)

Electricity, facility supply is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Electricity, facility supply attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_utility_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Sodium hydroxide cleaner (`cleaning_sodium_hydroxide_input`)

Sodium hydroxide is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Sodium hydroxide attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_material_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Sodium hypochlorite disinfectant (`cleaning_sodium_hypochlorite_input`)

Sodium hypochlorite is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Sodium hypochlorite attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_material_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Peracetic acid disinfectant (`cleaning_peracetic_acid_input`)

Peracetic acid is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Peracetic acid attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_material_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
#### Outputs

##### Waste flows

###### Cleaning wastewater (`cleaning_wastewater_output`)

Wastewater from equipment cleaning is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Wastewater from equipment cleaning
- Flow property / unit: Volume / m3
- Amount rule: Record the weighed or mass-balance quantity of Wastewater from equipment cleaning; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Wastewater treatment sludge (`wastewater_treatment_sludge_output`)

Sludge from pepper-processing wastewater treatment is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Sludge from pepper-processing wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Sludge from pepper-processing wastewater treatment; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Spent sodium hydroxide cleaning solution (`spent_sodium_hydroxide_solution_waste`)

Spent sodium hydroxide cleaning solution is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Spent sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Spent sodium hydroxide cleaning solution; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_waste_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Spent sodium hypochlorite disinfectant solution (`spent_sodium_hypochlorite_solution_waste`)

Spent sodium hypochlorite disinfectant solution is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Spent sodium hypochlorite disinfectant solution
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Spent sodium hypochlorite disinfectant solution; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_waste_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Spent peracetic acid disinfectant solution (`spent_peracetic_acid_solution_waste`)

Spent peracetic acid disinfectant solution is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Spent peracetic acid disinfectant solution
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Spent peracetic acid disinfectant solution; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_waste_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Pepper dust collected by dry cleaning (`dry_cleaning_pepper_dust_waste`)

Pepper dust collected by dry cleaning is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Pepper dust collected by dry cleaning
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Pepper dust collected by dry cleaning; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_waste_records`
- Sources: `codex-cxc-42-1995`; `eu-pef-2021-2279`
##### Elementary flows

###### Chemical oxygen demand to water (`chemical_oxygen_demand_to_water`)

Chemical oxygen demand to water is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Biochemical oxygen demand to water (`biochemical_oxygen_demand_to_water`)

Biochemical oxygen demand (5-day) to water is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Biochemical oxygen demand (5-day) to water
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Total suspended solids to water (`total_suspended_solids_to_water`)

Total suspended solids to water is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Total nitrogen to water (`total_nitrogen_to_water`)

Total nitrogen to water is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Total phosphorus to water (`total_phosphorus_to_water`)

Total phosphorus to water is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Chloride to water (`chloride_to_water`)

Chloride to water is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Chloride to water
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_pollutant_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
### Process: On-site thermal energy supply (`onsite_thermal_energy_supply`)

#### Inputs

##### Product flows

###### Natural gas fuel (`natural_gas_fuel_input`)

Natural gas is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Natural gas attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_fuel_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Liquefied petroleum gas fuel (`liquefied_petroleum_gas_fuel_input`)

Liquefied petroleum gas is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Liquefied petroleum gas attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_fuel_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Diesel fuel (`diesel_fuel_input`)

Diesel fuel is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Diesel fuel attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_fuel_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Wood pellet fuel (`wood_pellet_fuel_input`)

Wood pellets is a single process input. Record it only for equipment or operations that actually consume this exchange in the declared production route.

- Selected flow: Wood pellets
- Flow property / unit: Mass / kg
- Amount rule: Record the metered, invoiced, weighed or inventory-reconciled quantity of Wood pellets attributable to this process; do not insert a default quantity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_fuel_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
#### Outputs

##### Waste flows

###### Wood-combustion ash (`wood_combustion_ash_waste`)

Ash from wood-pellet combustion is recorded as one separately managed waste stream only when it leaves this process for treatment, recovery or disposal.

- Selected flow: Ash from wood-pellet combustion
- Flow property / unit: Mass / kg
- Amount rule: Record the weighed or mass-balance quantity of Ash from wood-pellet combustion; keep it separate from every other residue stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_combustion_residue_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
##### Elementary flows

###### Fossil carbon dioxide to air (`fossil_carbon_dioxide_to_air`)

Carbon dioxide, fossil, to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_air_emission_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Biogenic carbon dioxide to air (`biogenic_carbon_dioxide_to_air`)

Carbon dioxide, biogenic, to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_air_emission_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Methane to air (`methane_to_air`)

Methane to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_air_emission_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Nitrous oxide to air (`nitrous_oxide_to_air`)

Nitrous oxide to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_air_emission_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Nitrogen oxides to air (`nitrogen_oxides_to_air`)

Nitrogen oxides to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_air_emission_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Sulfur dioxide to air (`sulfur_dioxide_to_air`)

Sulfur dioxide to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_air_emission_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Carbon monoxide to air (`carbon_monoxide_to_air`)

Carbon monoxide to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_air_emission_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Particulate matter PM10 to air (`particulate_matter_pm10_to_air`)

Particulate matter, PM10, to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Particulate matter, PM10, to air
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_air_emission_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`
###### Particulate matter PM2.5 to air (`particulate_matter_pm2_5_to_air`)

Particulate matter, PM2.5, to air is one direct elementary emission. Record it only when the declared equipment or discharge path emits this substance or monitored pollutant.

- Selected flow: Particulate matter, PM2.5, to air
- Flow property / unit: Mass / kg
- Amount rule: Use a measured mass, or calculate mass from measured activity and a disclosed substance-specific method; do not substitute a combined emission total.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net packaged reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_air_emission_records`
- Sources: `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031`; `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | shared equipment and utilities | Prefer subdivision, dedicated metering or a documented physical driver tied to operating time, throughput or measured energy demand before applying allocation. | `eu-pef-2021-2279` |
| `allocation_stalk_seed_status` | Capsicum stalks and seeds | Classify each separated stream exclusively as internal rework, co-product or waste from documented destination and function; never record the same mass in more than one status. | `codex-cxs-353-2022`; `eu-pef-2021-2279` |
| `allocation_physical_relation` | unavoidable multi-output process | When subdivision is not possible, use a documented physical relationship that reflects how inputs and emissions relate to the functions of the outputs. | `eu-pef-2021-2279` |
| `allocation_economic_last_resort` | multi-output process lacking a defensible physical relation | Economic allocation may be used only after documenting why subdivision and physical allocation are not feasible; use prices at the point where co-products leave the process and disclose period and source. | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | wastes sent off site | Assign foreground collection and handling to the generating process; model downstream recovery, treatment or disposal with the linked treatment dataset and avoid double counting credits. | `eu-pef-2021-2279` |
| `allocation_internal_rework` | pepper material returned within the facility | Treat internal rework as an internal loop, not a second product output or raw-material input; disclose losses and any boundary-crossing transfer. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_identity_mass` | `raw_material_receipt_and_sorting` | botanical feedstock identity and mass | lot receipt record | scientific name; cultivar or trade type; supplier lot; incoming fresh or dried state; moisture result and basis; gross mass; tare mass; accepted mass | Verify supplier documents and calibrated scale records by botanical identity and lot | kg | each received lot | complete reporting period | all reporting-facility receipts | Sum only the one declared species, cultivar grouping and incoming state used for the reference product | supplier specification; lot traceability; scale calibration; moisture test |
| `cp_receipt_utility_records` | `raw_material_receipt_and_sorting` | receipt and sorting electricity | meter or allocated utility record | meter start; meter end; operating hours; allocation driver; accepted mass | Read a dedicated meter or allocate a documented facility meter to receipt and sorting | kWh | each batch or monthly | complete reporting period | reporting facility | Sum attributable electricity and normalize to net reference output | meter records; invoices; allocation worksheet |
| `cp_receipt_sorting_residues` | `raw_material_receipt_and_sorting` | each sorting reject | separate residue record | residue identity; container tare; gross mass; destination; lot | Weigh each reject stream separately at removal | kg | each removal | complete reporting period | receipt and sorting area | Sum by row identity without combining mould, plant debris, stone or metal | scale record; waste transfer record; photographs where used |
| `cp_preparation_water_records` | `washing_and_preparation` | pepper washing water | water meter record | meter start; meter end; batch; recirculated volume; discharged volume | Meter fresh water entering pepper washing and separate any recirculated loop | m3 | each batch or shift | complete reporting period | washing line | Sum net water entering the foreground boundary and normalize to net reference output | meter calibration; batch log; water balance |
| `cp_preparation_utility_records` | `washing_and_preparation` | electricity, steam or hot water by individual row | utility record | utility identity; meter start; meter end; invoice quantity; allocation driver; batch | Meter each utility separately or allocate with a documented physical driver | kWh or MJ | each batch or monthly | complete reporting period | washing and preparation equipment | Aggregate separately for electricity, steam and hot water | meter record; invoice; allocation worksheet |
| `cp_preparation_chemical_records` | `washing_and_preparation` | one washing chemical | batch formulation and stock record | chemical name; concentration; opening stock; receipts; closing stock; returned mass; batch dose | Reconcile each named chemical independently and verify actual legal use | kg | each batch and monthly close | complete reporting period | washing line | Calculate consumption separately for each chemical; exclude unused candidates | batch sheet; safety data sheet; purchase and stock records |
| `cp_preparation_material_balance` | `washing_and_preparation` | prepared material, stalks, seeds and trimmed tissue by individual row | weighing record | incoming mass; prepared mass; row identity; co-product mass; waste mass; destination | Weigh separated material streams and assign each stream exclusively as product or waste | kg | each batch | complete reporting period | preparation line | Reconcile mass by batch and sum each row separately | scale calibration; batch balance; transfer or waste record |
| `cp_preparation_wastewater_records` | `washing_and_preparation` | pepper washing wastewater | flow record | discharge volume; recirculated volume; destination; batch | Meter or calculate the wastewater volume from a closed water balance | m3 | each batch or daily | complete reporting period | washing line discharge | Sum wastewater leaving for treatment without combining cleaning wastewater | flow meter; water balance; transfer record |
| `cp_drying_utility_records` | `drying` | each drying utility | meter or utility record | utility identity; meter start; meter end; operating time; dryer; batch; allocation driver | Meter electricity, purchased steam and purchased hot water independently for the declared dryer | kWh or MJ | each batch or monthly | complete reporting period | drying equipment | Aggregate each utility separately and normalize to dry output | meter calibration; invoice; dryer log; allocation worksheet |
| `cp_drying_material_balance` | `drying` | drying mass, moisture, reject and water loss | batch drying record | incoming mass; incoming moisture and basis; dry output mass; output moisture and basis; reject mass | Measure mass and moisture at both sides of the declared drying step | kg and mass fraction | each batch | complete reporting period | drying equipment | Close the batch mass balance and calculate water removed without default moisture assumptions | scale and moisture-instrument calibration; batch record |
| `cp_drying_air_emission_records` | `drying` | pepper particulate dust from drying | stack or fugitive emission record | sampling point; flow; concentration; duration; captured dust; batch | Measure dust mass or calculate from measured flow and concentration for the declared discharge | kg | representative test and each reporting period | drying exhausts | Calculate only pepper particulate dust from drying and document control efficiency | sampling report; instrument calibration; control-device log | undefined |
| `cp_microbial_treatment_records` | `microbial_reduction_treatment` | each treatment input or service | treatment batch record | treatment method; legal authorisation; validation reference; input identity; dose or service mass; time; temperature or dose; batch | Record only the one validated treatment actually applied and each input separately | kg, MJ, kWh or kg treated | each treatment batch | complete reporting period | treatment equipment or contracted service | Sum by treatment technology and substance; do not combine alternatives | validation report; batch certificate; utility meter; supplier invoice |
| `cp_microbial_treatment_emission_records` | `microbial_reduction_treatment` | each fumigant emitted to air | substance-specific emission record | substance; charge; recovered mass; residual mass; measured exhaust concentration; exhaust flow; duration | Use substance-specific recovery balance or measured exhaust data | kg | each fumigation batch or representative test | complete reporting period | fumigation equipment and exhaust | Calculate ethylene oxide and propylene oxide independently | monitoring report; material balance; abatement log |
| `cp_milling_utility_records` | `milling_sieving_and_formulation` | electricity or compressed air by individual row | meter or utility record | utility identity; meter start; meter end; operating hours; batch; allocation driver | Meter each utility separately for the declared milling and sieving equipment | kWh or m3 | each batch or monthly | complete reporting period | milling and sieving equipment | Aggregate each utility separately and normalize to product output | meter calibration; equipment log; allocation worksheet |
| `cp_formulation_ingredient_records` | `milling_sieving_and_formulation` | one named anticaking agent | formula and stock record | chemical identity; legal authorisation; formula mass; opening stock; receipts; closing stock; returned mass | Reconcile each explicitly named ingredient against the product formula and stock | kg | each batch and monthly close | complete reporting period | formulation equipment | Calculate each anticaking agent separately; exclude every agent not actually used | approved formula; batch sheet; purchase and stock records |
| `cp_milling_material_balance` | `milling_sieving_and_formulation` | stalk or seed product or waste by individual row | separation weighing record | incoming mass; product mass; stalk mass; seed mass; row classification; destination | Weigh separated stalks and seeds and assign each exclusively as co-product or waste | kg | each batch | complete reporting period | milling and sieving line | Reconcile batch mass and sum each row separately | scale calibration; batch balance; sales or waste record |
| `cp_milling_dust_records` | `milling_sieving_and_formulation` | captured pepper dust or pepper dust to air | dust collection and emission record | captured dust mass; exhaust flow; dust concentration; duration; filter change; batch | Weigh captured dust and measure or calculate emitted pepper dust separately | kg | each removal and representative emission test | complete reporting period | milling dust-control system | Keep captured waste and direct air emission as separate balances | waste scale record; emission test; filter log |
| `cp_packaging_utility_records` | `packaging_and_storage` | packaging and storage electricity | meter or allocated utility record | meter start; meter end; operating hours; storage duration; allocation driver | Meter packaging and storage electricity or allocate it with a documented physical driver | kWh | each batch or monthly | complete reporting period | packaging and finished-product storage | Sum attributable electricity and normalize to net product output | meter record; invoice; allocation worksheet |
| `cp_packaging_material_records` | `packaging_and_storage` | one packaging component or nitrogen | bill of materials and issue record | component material identity; supplier item; units issued; units returned; measured unit mass; nitrogen mass; batch | Record each packaging material and nitrogen separately from the product-specific bill of materials | kg | each packaging batch | complete reporting period | packaging line | Calculate component mass independently and exclude unused packaging candidates | product specification; issue record; unit-mass test; supplier invoice |
| `cp_storage_refrigerant_inventory` | `packaging_and_storage` | one named refrigerant | substance-specific refrigerant inventory | substance; equipment; opening stock; purchases; additions; recovery; returns; closing stock | Complete an independent mass balance for R717, R744 and R134a whenever that substance is present | kg | each service event and annual close | complete reporting period | finished-product storage equipment | Calculate loss separately by refrigerant and allocate by documented equipment service | service invoice; cylinder weight; recovery record; inventory sign-off |
| `cp_reference_product_mass` | `packaging_and_storage` | net packaged reference product | finished-product mass record | product code; scientific name; cultivar; form; particle size; moisture result and basis; package configuration; gross mass; packaging tare; net mass | Verify net product mass and all required qualifiers for each finished lot | kg | each finished lot | complete reporting period | reporting facility plant gate | Sum net mass of only the declared reference product and set the reference amount to 1 kg | scale calibration; product specification; lot release; packaging tare test |
| `cp_packaging_waste_records` | `packaging_and_storage` | one packaging waste material | material-specific waste record | material identity; container tare; gross mass; destination; batch | Weigh each packaging waste material separately | kg | each removal | complete reporting period | packaging line | Sum each polymer, glass, aluminium, board, paper or wood row independently | scale record; waste transfer note; material specification |
| `cp_cleaning_material_records` | `cleaning_and_wastewater_management` | one cleaning material | cleaning and stock record | material identity; concentration; opening stock; receipts; closing stock; returned mass; cleaning event | Meter water and reconcile each named cleaning chemical independently | m3 or kg | each cleaning event and monthly close | complete reporting period | all included foreground areas | Aggregate each material separately; exclude candidates not actually used | cleaning log; purchase and stock record; water meter |
| `cp_cleaning_utility_records` | `cleaning_and_wastewater_management` | cleaning and wastewater electricity | meter or allocated utility record | meter start; meter end; equipment; operating time; allocation driver | Meter electricity or allocate it with a documented physical driver | kWh | each cleaning event or monthly | complete reporting period | cleaning and wastewater equipment | Sum attributable electricity and normalize to net product output | meter record; invoice; allocation worksheet |
| `cp_cleaning_wastewater_records` | `cleaning_and_wastewater_management` | cleaning wastewater or treatment sludge by individual row | flow and residue record | wastewater volume; sludge identity; wet mass; dry solids; destination; period | Meter wastewater volume and weigh sludge separately | m3 or kg | daily or each removal | complete reporting period | reporting-facility discharge and treatment | Keep wastewater and sludge as separate rows and reconcile with treatment records | flow meter; laboratory solids result; transfer note |
| `cp_cleaning_waste_records` | `cleaning_and_wastewater_management` | one spent solution or dry-cleaning dust stream | material-specific waste record | waste identity; mass; concentration where applicable; destination; cleaning event | Weigh or reconcile each spent solution and collected dust stream separately | kg | each removal | complete reporting period | cleaning operations | Sum each named waste stream independently | scale record; chemical balance; waste transfer note |
| `cp_wastewater_pollutant_records` | `cleaning_and_wastewater_management` | one wastewater pollutant | discharge monitoring record | pollutant identity; sample result; flow; sampling period; discharge destination | Use representative concentration and matched discharge volume for each pollutant | kg | permit or risk-based monitoring frequency | complete reporting period | final reporting-facility discharge | Calculate each pollutant load independently and do not combine parameters | laboratory report; sampling chain of custody; flow-meter calibration |
| `cp_onsite_fuel_records` | `onsite_thermal_energy_supply` | one named fuel | fuel meter or stock record | fuel identity; opening stock; purchases; closing stock; returned quantity; meter reading; equipment; allocation driver | Meter or reconcile each fuel separately for on-site combustion | MJ or kg | each delivery and monthly close | complete reporting period | all included combustion equipment | Calculate consumption independently by fuel and allocate with a documented physical driver | invoice; tank or meter calibration; stock reconciliation |
| `cp_onsite_combustion_residue_records` | `onsite_thermal_energy_supply` | wood-pellet combustion ash | residue weighing record | fuel identity; ash container tare; gross mass; destination; period | Weigh ash from wood-pellet combustion separately from all other residues | kg | each removal | complete reporting period | wood-pellet combustion equipment | Sum ash and normalize to net reference output | scale record; waste transfer note; combustion log |
| `cp_onsite_air_emission_records` | `onsite_thermal_energy_supply` | one combustion pollutant | substance-specific stack or factor record | fuel identity; fuel quantity; pollutant; measured concentration; exhaust flow; duration; factor source where used | Measure each pollutant or calculate it from measured fuel use and a disclosed pollutant- and fuel-specific method | kg | representative monitoring and each reporting period | all included combustion points | Calculate each substance independently by fuel and preserve fossil or biogenic carbon identity | stack report; fuel analysis; meter calibration; disclosed factor source | undefined |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_exchange` | all variable inventory rows | normalized amount = reporting-period row quantity / reporting-period net mass of the declared reference product | applicable collection protocol row quantity; `cp_reference_product_mass` net mass | row unit per kg net reference product | `eu-pef-2021-2279` |
| `calc_received_feedstock` | each botanical feedstock | received mass = opening accepted stock + accepted receipts − closing accepted stock − documented returns; calculate independently by scientific name, cultivar grouping and incoming state | `cp_receipt_identity_mass` fields | kg feedstock | `eu-pef-2021-2279` |
| `calc_drying_water_loss` | water vapour from drying | water removed = incoming water mass − outgoing product water mass − reject water mass; derive each water mass from measured total mass and measured moisture on the same declared basis | `cp_drying_material_balance` fields | kg water | `codex-cxc-42-1995` |
| `calc_packaging_component_mass` | each packaging component | component mass = issued item count × measured mass per item − returned unused component mass; calculate independently by material | `cp_packaging_material_records` fields | kg packaging material | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | each refrigerant | loss = opening stock + purchases + additions − closing stock − recovered quantity − returned quantity; calculate independently for R717, R744 and R134a | `cp_storage_refrigerant_inventory` fields | kg refrigerant emitted | `eu-fdm-bat-2019-2031` |
| `calc_wastewater_pollutant_load` | each wastewater pollutant | pollutant load = matched discharge volume × representative pollutant concentration, with unit conversion documented | `cp_wastewater_pollutant_records` fields | kg pollutant | `eu-fdm-bat-2019-2031` |
| `calc_combustion_emission` | each combustion pollutant | use measured mass where available; otherwise measured fuel quantity × a disclosed fuel- and pollutant-specific factor valid for the equipment and period | `cp_onsite_fuel_records`; `cp_onsite_air_emission_records` fields | kg pollutant | `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031` |
| `calc_mass_balance` | each material-processing step | mass balance difference = measured inputs − measured products − measured co-products − measured wastes − measured direct material emissions; investigate and disclose unresolved difference | process-specific material-balance protocols | kg and percent of measured inputs | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_botanical_identity` | raw material and reference product | Preserve scientific species, cultivar or trade type, incoming state, product style and lot linkage; reject data aggregated across Capsicum, Pimenta or materially different forms. | supplier specification, receipt record, batch genealogy and finished-product specification |
| `dq_route_completeness` | process map | Document every required process and the applicability decision for every conditional process, including whether drying and microbial reduction occurred upstream or on site. | signed route map, process flow diagram and batch record |
| `dq_temporal_representativeness` | all foreground records | Cover a representative reporting period and disclose seasonality, start-ups, shutdowns, abnormal batches and material changes in technology or recipe. | dated meters, invoices, batch logs and exception register |
| `dq_meter_quality` | mass, energy, water and emissions | Use calibrated instruments or documented reconciliation; retain original readings, units, conversion steps and allocation drivers. | calibration certificates, raw readings and calculation workbook |
| `dq_mass_balance` | receipt, preparation, drying and milling | Reconcile measured products, co-products, wastes, water loss and direct material emissions against measured inputs and investigate material unexplained differences. | batch mass-balance worksheet and corrective-action record |
| `dq_bom_specificity` | ingredients and packaging | Use the product-specific bill of materials for the declared product; list each actual ingredient and packaging material separately and exclude unused candidates. | approved formula, packaging specification, issue and return records |
| `dq_pollutant_specificity` | air and water emissions | Retain sampling location, compartment, substance or parameter identity, flow, concentration, period and calculation; do not report a combined pollutant amount. | laboratory report, stack test, chain of custody and flow calibration |
| `dq_no_unsubstantiated_default` | all inventory amounts | A missing foreground amount remains unresolved; do not replace it with an author estimate, an unsupported range or a value copied from an example source. | completeness review and unresolved-data register |
| `dq_uuid_identity` | every inventory row | Use the verified reference UUIDs supplied in this PCR; all other UUIDs remain blank until a separate Tiangong identity review confirms the exact row. | UUID review record and manifest identity-gap closure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Confirm the product UUID is `fa9bf702-43d4-414e-a2da-0dad135e5df7`, the flow property is `93a60a56-a3c8-11da-a746-0800200b9a66`, the unit group is `93a60a57-a4c8-11da-a746-0800200c9a66`, and the reference amount is exactly 1 kg net product. | `un-cpc-3.0-23922` |
| `validate_dataset_lock` | dataset identity | Fail when scientific species, cultivar or trade type, incoming state, drying route, product form, particle specification or packaging configuration is missing or represents an average across alternatives. | `un-cpc-3.0-23922`; `codex-cxs-353-2022`; `codex-cxs-358-2024` |
| `validate_process_map` | process inventory | Require every required process and a documented applicability decision for every conditional process; each detailed process id shall occur once in the Process Map. | `codex-cxc-42-1995`; `eu-pef-2021-2279` |
| `validate_atomic_exchange` | inventory rows | Require one concrete exchange per row and reject collection labels for raw spices, materials, energy, fuels, packaging, by-products, wastes or emissions. | `eu-pef-2021-2279` |
| `validate_bom_actuality` | chemicals, ingredients and packaging | Reject any chemical, anticaking agent, packaging component, fuel or refrigerant row unless the named exchange is actually used in the declared route and supported by foreground records. | `eu-pef-2021-2279` |
| `validate_mass_and_moisture_balance` | preparation, drying and milling | Require measured mass and compatible moisture bases; investigate an unexplained balance difference before dataset release. | `codex-cxc-42-1995`; `eu-pef-2021-2279` |
| `validate_emission_separation` | direct releases | Require substance-specific air emissions and parameter-specific water pollutant loads; keep refrigerant loss, fuel combustion and pepper dust in separate rows. | `jrc-fdm-bref-2019`; `eu-fdm-bat-2019-2031` |
| `validate_no_default_amounts` | inventory amounts | Reject unsupported default quantities, ranges, reasoned estimates and modelled estimates; accept foreground records or calculations linked to declared protocols. | `eu-pef-2021-2279` |
| `validate_uuid_whitelist` | UUID-bearing fields | Permit only the three verified reference UUIDs in this authored candidate; every non-reference inventory UUID shall be blank and closed in manifest review metadata by row_id. | `un-cpc-3.0-23922` |
| `validate_bilingual_structure` | English and Chinese Markdown | Require identical ordered process ids, row ids, controlled tokens, protocol ids, calculation rule ids, normative rule ids, source ids and UUIDs in both languages. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground gate-to-gate dataset suitable for review before use as a secondary_dataset or background_dataset |
| downstream_use | Link to upstream feedstock, utility, ingredient, packaging and treatment datasets, then use in a declared product system without averaging across botanical identities or product forms |
| allowed_use | The exact declared species, cultivar or trade type, incoming state, technology route, product style, formulation, packaging, geography and reporting period represented by the foreground records |
| excluded_use | Proxying a different botanical species, a fresh product, a Piper product, a different particle form, an unrepresented microbial treatment, an unrepresented ingredient formula or a different packaging route without review |
| required_metadata | All reference-flow qualifiers; facility geography; reporting period; process applicability; upstream dataset links; allocation method; data ownership; review status |
| required_quality_disclosure | Primary-data coverage; meter and scale quality; moisture basis; mass-balance closure; allocation shares; missing values; emission methods; unresolved UUIDs; deviations from this PCR |
| update_trigger | Change of species or cultivar grouping, incoming state, dryer or microbial-reduction technology, product form or particle specification, ingredient formula, packaging, refrigerant, fuel, facility, allocation method or representative reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3.0-23922` | standard | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 23922, retained raw source; https://unstats.un.org/unsd/classifications/Econ/CPC (retrieved 2026-08-13) | exact category scope and reference-product identity |
| `codex-cxs-353-2022` | standard | FAO/WHO Codex Alimentarius, Standard for Dried or Dehydrated Chilli Pepper and Paprika, CXS 353-2022, adopted 2022 and amended 2025; https://openknowledge.fao.org/handle/20.500.14283/cd9056en (retrieved 2026-08-13) | Capsicum species, whole/broken/flaked/ground/powdered styles, stalk/seed/placenta and anticaking applicability |
| `codex-cxs-358-2024` | standard | FAO/WHO Codex Alimentarius, Standard for Spices Derived from Dried or Dehydrated Fruits and Berries: Allspice, Juniper Berry and Star Anise, CXS 358-2024; https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B358-2024%2FCXS_358e.pdf (retrieved 2026-08-13) | Pimenta species identity, whole/cut/broken/ground/powdered styles and conditional processing-aid rules |
| `codex-cxc-42-1995` | official_guidance | FAO/WHO Codex Alimentarius, Code of Hygienic Practice for Spices and Dried Aromatic Herbs, CXC 42-1995, revised 2014; https://www.fao.org/input/download/standards/27/CXP_042e_2014.pdf (retrieved 2026-08-13) | cleaning, sorting, mechanical drying, grinding, microbial reduction, packaging, storage, dust control, water management and traceability |
| `jrc-fdm-bref-2019` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Food, Drink and Milk Industries, JRC118627, EUR 29978 EN, DOI 10.2760/243911; https://publications.jrc.ec.europa.eu/repository/handle/JRC118627 (retrieved 2026-08-13) | foreground process structure and accounting of energy, water, raw materials, wastewater, waste gas and wastes |
| `eu-fdm-bat-2019-2031` | standard | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries; https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-13) | separate inventories and monitoring fields for water, energy, raw materials, wastewater pollutants and air pollutants |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I Product Environmental Footprint Method; https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (retrieved 2026-08-13) | functional unit, reference flow, product-specific bill of materials, company-specific manufacturing data, completeness, allocation and data quality |
