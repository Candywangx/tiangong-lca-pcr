---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.bovine-meat-salted-dried-or-smoked
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Bovine meat, salted, dried or smoked

## 1. Scope and Applicability

This PCR governs foreground data packages for bovine muscle meat whose declared finished-product identity is preserved by one concrete salting, drying, smoking route, or one explicitly ordered combination of those operations. Each package shall lock one route identifier and one finished-product specification before inventory collection. The reference amount is net edible product mass.

The category includes bovine meat preserved by dry salt, brine, controlled drying, direct wood smoke, a specifically identified liquid smoke condensate, or an ordered combination. It excludes fresh, chilled or frozen bovine meat sold without these preservation operations; edible offal; pig meat; meat of other species; sausages; extracts; prepared dishes; meat meals; and products whose principal identity is another preserved-meat category. Slaughter and inbound transport are upstream. Distribution, retail, preparation, use, food loss and packaging end of life are downstream.

The FAO manuals support process decomposition and route controls only. Their example recipes, dimensions, times, temperatures, yields and storage statements are not defaults or allowed ranges in this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.bovine-meat-salted-dried-or-smoked` |
| classification_refs | CPC 3.0 `21182` — Bovine meat, salted, dried or smoked (`exact`) |
| covered_products | Bovine muscle meat sold with a declared salted, dried, direct-wood-smoked or identified-liquid-smoke identity; an ordered combination is covered when every operation and intermediate state is declared. |
| excluded_products | Unpreserved fresh, chilled or frozen bovine meat; bovine offal; meat of other species; pig bacon or ham; sausages; extracts; prepared dishes; meat flours or meals; products without an exact preservation route and finished specification. |
| representative_product | One released lot of net edible bovine meat matching one locked preservation route and one manufacturer or regulatory finished-product specification. |
| production_route | Declare exactly one route code such as `salted_only`, `dried_only`, `direct_wood_smoked_only`, `liquid_smoke_only`, or one explicit ordered combination such as `salted_then_dried_then_direct_wood_smoked`. Record actual technology, ingredients, smoke medium and intermediate sequence. Do not pool routes. |
| market_state | Factory-gate bulk or packaged product at the declared release temperature and storage condition. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision at the factory gate of bovine meat preserved by one locked salted, dried, smoked or ordered-combination route. |
| How much | 1 kg net conforming edible product; packaging mass is excluded. |
| How well | Meets the declared route-specific finished-product specification, ingredient declaration, preservation endpoint, microbiological and sensory release criteria, storage condition and legal market requirements. |
| How long or cycle | One released production lot; declared shelf life and storage condition are product qualifiers rather than an added service quantity. |
| reference_flow_link | One-to-one: 1 kg net conforming released product equals 1 kg of the reference product flow. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Bovine meat, salted, dried or smoked `b022bdb0-0f92-4323-b5eb-2c5fb085bd19` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | locked route id; ordered process sequence; bovine cut and bone state; incoming meat state; ingredient list with exact identities; salting method; drying technology; direct wood species or exact liquid smoke condensate when applicable; heat-treatment endpoint when applicable; final moisture or water-activity specification when applicable; net product mass; packaging components; release temperature; storage condition; geography; production period; facility and line |

Every `Required qualifiers` item shall be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net conforming edible product after final release checks. Exclude packaging, labels, pallets and rejected product. |
| `incoming_meat_mass` | each incoming meat state | Mass | kg | Weigh each accepted supplier lot separately by exact fresh, chilled, frozen, salted, dried or smoked state. |
| `recipe_component_mass` | each salt, curing chemical, acid, spice, oil or smoke condensate | Mass | kg | Record every actual component separately from batch dispensing and stock reconciliation; do not interchange active substance with formulated product without a documented conversion. |
| `water_and_wastewater` | each water stream | Volume; Mass when measured | m3; kg | Preserve the measured quantity and density basis. Keep each generating wastewater stream separate through transfer or treatment reconciliation. |
| `energy_carrier_identity` | each electricity, steam, hot-water or fuel flow | Energy or Mass as stated on the card | kWh; MJ; kg | Preserve the physical carrier and original meter or invoice unit. Convert only with a documented factor; never merge carriers into preservation energy. |
| `packaging_component_mass` | each packaging component | Mass | kg | Record consumed mass for each exact component. For count records, multiply count by measured or supplier-declared unit mass and retain both records. |
| `refrigerant_mass` | each named refrigerant | Mass | kg | Record additions and recovery by exact refrigerant. Calculate emissions only by stock balance or direct measurement; no default leakage rate is provided. |
| `moisture_endpoint` | dried or thermally finished product | Mass fraction or water activity | declared unit | Record the product-specific endpoint and test method. This PCR provides no default moisture, water-activity, time or temperature. |
| `normalization` | all inventory amounts | card property | card unit per kg | Apply `calc_reference_normalization` only after route/specification attribution and reconciliation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Facility-gate receipt of one exact bovine-meat state: fresh boneless, chilled boneless, frozen boneless, or a separately identified purchased salted, dried or smoked bovine-meat input for further processing. |
| starting_condition_role | Foreground manufacturing gate; supplier production, slaughter and inbound transport are linked upstream activities. |
| product_classification_scope | CPC 3.0 `21182` only: bovine meat whose finished identity is salted, dried or smoked. |
| recursive_input_rule | Keep each purchased CPC 21182 input as one exact salted, dried or smoked product input and link an upstream dataset; do not recreate its production inside this package. |
| upstream_dataset_requirement | Use representative datasets for bovine production, slaughter, primary chilling or freezing, ingredient manufacture, packaging manufacture, utilities and inbound transport, with geography, technology and allocation disclosed. |
| disclosure | Declare route id, operation order, product specification, all actual ingredients, smoke technology and medium, applicable preservation endpoints, packaging, release and storage condition, facility, line, geography, period, allocation and exclusions. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_lock` | foreground data package | Declare one route identifier before collection: one concrete salted, dried, direct-wood-smoked or liquid-smoke route, or one explicitly ordered combination. Declare the exact finished-product specification. Do not aggregate different combinations. | `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279` |
| `boundary_start` | foreground system | Start at facility-gate receipt of one exact incoming bovine-meat state or one exact purchased preserved-bovine-meat input. Keep supplier production and inbound transport in linked upstream datasets. | `un-cpc-3-0-2025`; `eu-pef-2021-2279` |
| `boundary_end` | foreground system | End at factory-gate release of 1 kg net conforming product after the declared preservation, packaging and conditioned-storage steps. Packaging mass is outside the reference-product mass. | `un-cpc-3-0-2025`; `eu-pef-2021-2279` |
| `boundary_upstream` | upstream modelling | Bovine rearing, feed production, slaughter, primary chilling or freezing and inbound transport are outside foreground collection; link representative upstream datasets and disclose geography, technology and allocation. | `jrc-sa-bref-2024`; `eu-pef-2021-2279` |
| `boundary_downstream` | downstream modelling | Distribution, retail, consumer preparation, use, food loss and packaging end of life are outside this foreground boundary unless a study adds them as separate downstream stages. | `eu-pef-2021-2279` |
| `boundary_conditional_processes` | process map | Include only preservation and utility processes that physically occur in the locked route. Document every omitted conditional process with plant evidence. | `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279` |
| `boundary_recursive_input` | same-category input | When an incoming flow already meets CPC 21182, keep its exact salted, dried or smoked identity as a purchased input and require a separate upstream dataset; do not recreate it recursively inside this package. | `un-cpc-3-0-2025`; `eu-pef-2021-2279` |
| `boundary_atomic_extensions` | unlisted exchange | If the site uses an ingredient, chemical, wood species, refrigerant, packaging component, waste or emission not listed here, add one card for that exact single flow. Never place multiple candidates in one Selected flow. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `meat_receiving_preparation` | Meat receiving and preparation | `required` | Always include. Declare exactly one incoming meat state; preserve the identity of any purchased preserved-meat input. | Receipt, inspection, conditional thawing, deboning, trimming and preparation. | per 1 kg net conforming reference product |
| `salt_curing` | Salt curing | `conditional` | Include only for dry salting, brining, injection curing or a declared salt pretreatment. | Dry salting, brining, curing, draining and surface preparation. | per 1 kg net conforming reference product |
| `controlled_drying` | Controlled drying | `conditional` | Include only when drying occurs. Declare the technology plus the finished moisture or water-activity specification. | Air, sun, chamber or another declared drying operation with batch controls. | per 1 kg net conforming reference product |
| `direct_wood_smoking` | Direct wood smoking | `conditional` | Include only when meat contacts smoke generated from one or more explicitly named wood species. | Smoke generation, smoking, smoke-drying and smokehouse holding. | per 1 kg net conforming reference product |
| `liquid_smoke_application` | Liquid smoke application | `conditional` | Include only when one identified food-grade liquid smoke condensate is applied. Do not merge it with direct wood smoking. | Dipping, spraying, atomising or mixing of the identified smoke condensate. | per 1 kg net conforming reference product |
| `thermal_finishing_cooling` | Thermal finishing and cooling | `conditional` | Include only for a declared cooking, roasting, pasteurisation or other measured heat treatment; include controlled cooling when it occurs. | Heat treatment, product cooling and intermediate holding. | per 1 kg net conforming reference product |
| `packaging_conditioned_storage` | Packaging and conditioned storage | `required` | Always include product release. Include each packaging component and each refrigeration exchange only when used by the locked specification. | Final inspection, packing, labelling, conditioned storage and factory-gate release. | per 1 kg net conforming reference product |
| `cleaning_sanitation` | Cleaning and sanitation | `required` | Always include campaign cleaning. Record every chemical actually used as a separate exchange. | Clean-in-place, open-plant cleaning, disinfection and rinsing. | per 1 kg net conforming reference product |
| `onsite_wastewater_treatment` | On-site wastewater treatment | `conditional` | Include when the facility treats or pre-treats wastewater. For direct discharge, use this process to quantify the discharge before any linked external treatment. | Equalisation, physical removal, chemical treatment, biological treatment and discharge monitoring. | per 1 kg net conforming reference product |

### Process: Meat receiving and preparation (`meat_receiving_preparation`)

#### Inputs

##### Product flows

###### Fresh boneless bovine meat received (`receiving_fresh_boneless_beef_input`)

Fresh boneless bovine meat is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Fresh boneless bovine meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Fresh boneless bovine meat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Chilled boneless bovine meat received (`receiving_chilled_boneless_beef_input`)

Chilled boneless bovine meat is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Chilled boneless bovine meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Chilled boneless bovine meat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Frozen boneless bovine meat received (`receiving_frozen_boneless_beef_input`)

Frozen boneless bovine meat is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Frozen boneless bovine meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Frozen boneless bovine meat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Purchased salted bovine meat received (`receiving_purchased_salted_beef_input`)

Purchased salted bovine meat is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Purchased salted bovine meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Purchased salted bovine meat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Purchased dried bovine meat received (`receiving_purchased_dried_beef_input`)

Purchased dried bovine meat is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Purchased dried bovine meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Purchased dried bovine meat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Purchased smoked bovine meat received (`receiving_purchased_smoked_beef_input`)

Purchased smoked bovine meat is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Purchased smoked bovine meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Purchased smoked bovine meat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Process water for thawing and preparation (`receiving_process_water_input`)

Process water is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Process water attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Grid electricity for receiving and preparation (`receiving_grid_electricity_input`)

Grid electricity, medium voltage is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered or supplier-billed energy of Grid electricity, medium voltage attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R717 ammonia make-up for receiving refrigeration (`receiving_r717_makeup_input`)

Ammonia refrigerant (R717) is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Ammonia refrigerant (R717)
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Ammonia refrigerant (R717) attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R744 carbon dioxide make-up for receiving refrigeration (`receiving_r744_makeup_input`)

Carbon dioxide refrigerant (R744) is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide refrigerant (R744)
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Carbon dioxide refrigerant (R744) attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R404A refrigerant make-up for receiving refrigeration (`receiving_r404a_makeup_input`)

R404A refrigerant is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: R404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of R404A refrigerant attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared bovine meat cuts transferred to preservation (`receiving_prepared_beef_output`)

Prepared bovine meat cuts is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Prepared bovine meat cuts
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Prepared bovine meat cuts attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Food-grade bovine meat trimmings recovered (`receiving_food_grade_trim_output`)

Food-grade bovine meat trimmings is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Food-grade bovine meat trimmings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Food-grade bovine meat trimmings attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Recovered bovine fat co-product (`receiving_recovered_bovine_fat_output`)

Recovered bovine fat is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Recovered bovine fat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Recovered bovine fat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Waste flows

###### Rejected incoming bovine meat (`receiving_rejected_meat_waste`)

Rejected incoming bovine meat is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Rejected incoming bovine meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Rejected incoming bovine meat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Non-food bovine trimming waste (`receiving_nonfood_trim_waste`)

Non-food bovine trimming waste is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Non-food bovine trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Non-food bovine trimming waste attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Meat-preparation wastewater (`receiving_wastewater_output`)

Meat-preparation wastewater is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Meat-preparation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Meat-preparation wastewater attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Waste LDPE transport liner (`receiving_ldpe_liner_waste`)

Waste low-density polyethylene transport liner is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Waste low-density polyethylene transport liner
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Waste low-density polyethylene transport liner attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Waste corrugated fibreboard shipping box (`receiving_corrugated_box_waste`)

Waste corrugated fibreboard shipping box is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Waste corrugated fibreboard shipping box
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Waste corrugated fibreboard shipping box attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Elementary flows

###### R717 ammonia emission from receiving refrigeration (`receiving_r717_emission_air`)

Ammonia (R717) to air is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Ammonia (R717) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R744 carbon dioxide emission from receiving refrigeration (`receiving_r744_emission_air`)

Carbon dioxide (R744) to air is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide (R744) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R404A emission from receiving refrigeration (`receiving_r404a_emission_air`)

R404A refrigerant to air is recorded as one atomic exchange at the Meat receiving and preparation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: R404A refrigerant to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_meat_receiving_preparation`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`


### Process: Salt curing (`salt_curing`)

#### Inputs

##### Product flows

###### Prepared bovine meat entering salt curing (`curing_prepared_beef_input`)

Prepared bovine meat cuts is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Prepared bovine meat cuts
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Prepared bovine meat cuts attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Sodium chloride for salting (`curing_sodium_chloride_input`)

Sodium chloride is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Sodium chloride attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Sodium nitrite in the declared recipe (`curing_sodium_nitrite_input`)

Sodium nitrite is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Sodium nitrite
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Sodium nitrite attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Sodium nitrate in the declared recipe (`curing_sodium_nitrate_input`)

Sodium nitrate is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Sodium nitrate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Sodium nitrate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Sucrose in the declared recipe (`curing_sucrose_input`)

Sucrose is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Sucrose
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Sucrose attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Dextrose in the declared recipe (`curing_dextrose_input`)

Dextrose is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Dextrose
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Dextrose attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Sodium ascorbate in the declared recipe (`curing_sodium_ascorbate_input`)

Sodium ascorbate is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Sodium ascorbate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Sodium ascorbate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Lactic acid for declared surface treatment (`curing_lactic_acid_input`)

Lactic acid is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Lactic acid
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Lactic acid attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Acetic acid for declared surface treatment (`curing_acetic_acid_input`)

Acetic acid is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Acetic acid
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Acetic acid attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Black pepper in the declared recipe (`curing_black_pepper_input`)

Black pepper is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Black pepper
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Black pepper attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Garlic powder in the declared recipe (`curing_garlic_powder_input`)

Garlic powder is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Garlic powder
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Garlic powder attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Paprika powder in the declared recipe (`curing_paprika_powder_input`)

Paprika powder is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Paprika powder
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Paprika powder attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Process water for brine preparation (`curing_process_water_input`)

Process water is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Process water attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Grid electricity for salt curing (`curing_grid_electricity_input`)

Grid electricity, medium voltage is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered or supplier-billed energy of Grid electricity, medium voltage attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R717 ammonia make-up for curing refrigeration (`curing_r717_makeup_input`)

Ammonia refrigerant (R717) is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Ammonia refrigerant (R717)
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Ammonia refrigerant (R717) attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R744 carbon dioxide make-up for curing refrigeration (`curing_r744_makeup_input`)

Carbon dioxide refrigerant (R744) is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide refrigerant (R744)
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Carbon dioxide refrigerant (R744) attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R404A make-up for curing refrigeration (`curing_r404a_makeup_input`)

R404A refrigerant is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: R404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of R404A refrigerant attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Salted bovine meat intermediate (`curing_salted_beef_output`)

Salted bovine meat intermediate is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Salted bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Salted bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Waste flows

###### Spent curing brine (`curing_spent_brine_waste`)

Spent curing brine is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Spent curing brine
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Spent curing brine attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Used sodium chloride (`curing_used_salt_waste`)

Used sodium chloride is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Used sodium chloride
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Used sodium chloride attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Salt-bearing meat-juice wastewater (`curing_meat_juice_wastewater`)

Salt-bearing meat-juice wastewater is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Salt-bearing meat-juice wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Salt-bearing meat-juice wastewater attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Rejected salted bovine meat (`curing_rejected_beef_waste`)

Rejected salted bovine meat is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Rejected salted bovine meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Rejected salted bovine meat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Elementary flows

###### R717 ammonia emission from curing refrigeration (`curing_r717_emission_air`)

Ammonia (R717) to air is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Ammonia (R717) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R744 carbon dioxide emission from curing refrigeration (`curing_r744_emission_air`)

Carbon dioxide (R744) to air is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide (R744) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R404A emission from curing refrigeration (`curing_r404a_emission_air`)

R404A refrigerant to air is recorded as one atomic exchange at the Salt curing boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: R404A refrigerant to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_salt_curing`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`


### Process: Controlled drying (`controlled_drying`)

#### Inputs

##### Product flows

###### Prepared bovine meat entering drying (`drying_prepared_beef_input`)

Prepared bovine meat cuts is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Prepared bovine meat cuts
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Prepared bovine meat cuts attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Salted bovine meat entering drying (`drying_salted_beef_input`)

Salted bovine meat intermediate is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Salted bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Salted bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Soybean oil used as a declared surface coating (`drying_soybean_oil_input`)

Soybean oil is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Soybean oil
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Soybean oil attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Grid electricity for controlled drying (`drying_grid_electricity_input`)

Grid electricity, medium voltage is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered or supplier-billed energy of Grid electricity, medium voltage attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Purchased saturated steam for controlled drying (`drying_purchased_steam_input`)

Purchased saturated steam is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered or supplier-billed energy of Purchased saturated steam attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Purchased hot water for controlled drying (`drying_purchased_hot_water_input`)

Purchased hot water is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered or supplier-billed energy of Purchased hot water attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Natural gas burned for controlled drying (`drying_natural_gas_input`)

Natural gas is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered or supplier-billed energy of Natural gas attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Low-sulfur diesel burned for controlled drying (`drying_diesel_input`)

Low-sulfur diesel fuel is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Low-sulfur diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Low-sulfur diesel fuel attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Liquefied petroleum gas burned for controlled drying (`drying_lpg_input`)

Liquefied petroleum gas is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Liquefied petroleum gas attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R717 ammonia make-up for conditioned drying air (`drying_r717_makeup_input`)

Ammonia refrigerant (R717) is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Ammonia refrigerant (R717)
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Ammonia refrigerant (R717) attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R744 carbon dioxide make-up for conditioned drying air (`drying_r744_makeup_input`)

Carbon dioxide refrigerant (R744) is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide refrigerant (R744)
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Carbon dioxide refrigerant (R744) attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R404A make-up for conditioned drying air (`drying_r404a_makeup_input`)

R404A refrigerant is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: R404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of R404A refrigerant attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried bovine meat intermediate (`drying_dried_beef_output`)

Dried bovine meat intermediate is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Dried bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Dried bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Waste flows

###### Drying condensate wastewater (`drying_condensate_wastewater`)

Drying condensate wastewater is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Drying condensate wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Drying condensate wastewater attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Rejected dried bovine meat (`drying_rejected_beef_waste`)

Rejected dried bovine meat is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Rejected dried bovine meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Rejected dried bovine meat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Dried bovine meat particle waste (`drying_meat_particle_waste`)

Dried bovine meat particles is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Dried bovine meat particles
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Dried bovine meat particles attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Elementary flows

###### Water evaporated during drying (`drying_water_emission_air`)

Water to air is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Water to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_evaporated_water` from measured batch masses and moisture data; do not apply a default drying loss.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R717 ammonia emission from conditioned drying air (`drying_r717_emission_air`)

Ammonia (R717) to air is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Ammonia (R717) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R744 carbon dioxide emission from conditioned drying air (`drying_r744_emission_air`)

Carbon dioxide (R744) to air is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide (R744) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R404A emission from conditioned drying air (`drying_r404a_emission_air`)

R404A refrigerant to air is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: R404A refrigerant to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Fossil carbon dioxide from drying fuel (`drying_fossil_co2_emission_air`)

Carbon dioxide, fossil to air is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide, fossil to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Nitrogen oxides from drying fuel (`drying_nox_emission_air`)

Nitrogen oxides to air is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Sulfur dioxide from drying fuel (`drying_so2_emission_air`)

Sulfur dioxide to air is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Fine particulate matter from drying fuel (`drying_pm25_emission_air`)

Particulate matter, <2.5 µm to air is recorded as one atomic exchange at the Controlled drying boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Particulate matter, <2.5 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_controlled_drying`
- Sources: `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`


### Process: Direct wood smoking (`direct_wood_smoking`)

#### Inputs

##### Product flows

###### Prepared bovine meat entering direct wood smoking (`wood_smoking_prepared_beef_input`)

Prepared bovine meat cuts is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Prepared bovine meat cuts
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Prepared bovine meat cuts attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Salted bovine meat entering direct wood smoking (`wood_smoking_salted_beef_input`)

Salted bovine meat intermediate is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Salted bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Salted bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Dried bovine meat entering direct wood smoking (`wood_smoking_dried_beef_input`)

Dried bovine meat intermediate is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Dried bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Dried bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Beech wood chips for smoke generation (`wood_smoking_beech_chips_input`)

Beech wood chips is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Beech wood chips
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Beech wood chips attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Oak wood chips for smoke generation (`wood_smoking_oak_chips_input`)

Oak wood chips is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Oak wood chips
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Oak wood chips attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Hickory wood chips for smoke generation (`wood_smoking_hickory_chips_input`)

Hickory wood chips is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Hickory wood chips
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Hickory wood chips attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Process water for smokehouse humidity control (`wood_smoking_process_water_input`)

Process water is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Process water attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Grid electricity for direct wood smoking (`wood_smoking_grid_electricity_input`)

Grid electricity, medium voltage is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered or supplier-billed energy of Grid electricity, medium voltage attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Purchased saturated steam for direct wood smoking (`wood_smoking_purchased_steam_input`)

Purchased saturated steam is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered or supplier-billed energy of Purchased saturated steam attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Purchased hot water for direct wood smoking (`wood_smoking_purchased_hot_water_input`)

Purchased hot water is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered or supplier-billed energy of Purchased hot water attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Natural gas burned for direct wood smoking (`wood_smoking_natural_gas_input`)

Natural gas is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered or supplier-billed energy of Natural gas attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Low-sulfur diesel burned for direct wood smoking (`wood_smoking_diesel_input`)

Low-sulfur diesel fuel is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Low-sulfur diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Low-sulfur diesel fuel attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Liquefied petroleum gas burned for direct wood smoking (`wood_smoking_lpg_input`)

Liquefied petroleum gas is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Liquefied petroleum gas attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R717 ammonia make-up for smokehouse conditioning (`wood_smoking_r717_makeup_input`)

Ammonia refrigerant (R717) is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Ammonia refrigerant (R717)
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Ammonia refrigerant (R717) attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R744 carbon dioxide make-up for smokehouse conditioning (`wood_smoking_r744_makeup_input`)

Carbon dioxide refrigerant (R744) is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide refrigerant (R744)
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Carbon dioxide refrigerant (R744) attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R404A refrigerant make-up for smokehouse conditioning (`wood_smoking_r404a_makeup_input`)

R404A refrigerant is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: R404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of R404A refrigerant attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Direct wood-smoked bovine meat intermediate (`wood_smoking_beef_output`)

Direct wood-smoked bovine meat intermediate is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Direct wood-smoked bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Direct wood-smoked bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Waste flows

###### Beech wood ash (`wood_smoking_beech_ash_waste`)

Beech wood ash is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Beech wood ash
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Beech wood ash attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Oak wood ash (`wood_smoking_oak_ash_waste`)

Oak wood ash is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Oak wood ash
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Oak wood ash attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Hickory wood ash (`wood_smoking_hickory_ash_waste`)

Hickory wood ash is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Hickory wood ash
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Hickory wood ash attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Smokehouse soot (`wood_smoking_soot_waste`)

Smokehouse soot is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Smokehouse soot
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Smokehouse soot attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Smokehouse wastewater (`wood_smoking_wastewater`)

Smokehouse wastewater is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Smokehouse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Smokehouse wastewater attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Rejected direct wood-smoked bovine meat (`wood_smoking_rejected_beef_waste`)

Rejected direct wood-smoked bovine meat is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Rejected direct wood-smoked bovine meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Rejected direct wood-smoked bovine meat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Elementary flows

###### R717 ammonia emission from smokehouse conditioning (`wood_smoking_r717_emission_air`)

Ammonia (R717) to air is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Ammonia (R717) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R744 carbon dioxide emission from smokehouse conditioning (`wood_smoking_r744_emission_air`)

Carbon dioxide (R744) to air is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide (R744) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R404A refrigerant emission from smokehouse conditioning (`wood_smoking_r404a_emission_air`)

R404A refrigerant to air is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: R404A refrigerant to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Biogenic carbon dioxide from smoking wood (`wood_smoking_biogenic_co2_emission_air`)

Carbon dioxide, biogenic to air is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide, biogenic to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured named wood input and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Carbon monoxide from direct wood smoking (`wood_smoking_carbon_monoxide_emission_air`)

Carbon monoxide to air is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured named wood input and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Non-methane volatile organic compounds from direct wood smoking (`wood_smoking_nmvoc_emission_air`)

Non-methane volatile organic compounds to air is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured named wood input and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Fossil carbon dioxide from direct wood smoking (`wood_smoking_fossil_co2_emission_air`)

Carbon dioxide, fossil to air is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide, fossil to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel or named smoking wood and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Nitrogen oxides from direct wood smoking (`wood_smoking_nox_emission_air`)

Nitrogen oxides to air is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel or named smoking wood and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Sulfur dioxide from direct wood smoking (`wood_smoking_so2_emission_air`)

Sulfur dioxide to air is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel or named smoking wood and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Fine particulate matter from direct wood smoking (`wood_smoking_pm25_emission_air`)

Particulate matter, <2.5 µm to air is recorded as one atomic exchange at the Direct wood smoking boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Particulate matter, <2.5 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel or named smoking wood and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_wood_smoking`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`


### Process: Liquid smoke application (`liquid_smoke_application`)

#### Inputs

##### Product flows

###### Prepared bovine meat entering liquid smoke application (`liquid_smoke_prepared_beef_input`)

Prepared bovine meat cuts is recorded as one atomic exchange at the Liquid smoke application boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Prepared bovine meat cuts
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Prepared bovine meat cuts attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquid_smoke_application`
- Sources: `eu-pef-2021-2279`

###### Salted bovine meat entering liquid smoke application (`liquid_smoke_salted_beef_input`)

Salted bovine meat intermediate is recorded as one atomic exchange at the Liquid smoke application boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Salted bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Salted bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquid_smoke_application`
- Sources: `eu-pef-2021-2279`

###### Dried bovine meat entering liquid smoke application (`liquid_smoke_dried_beef_input`)

Dried bovine meat intermediate is recorded as one atomic exchange at the Liquid smoke application boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Dried bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Dried bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquid_smoke_application`
- Sources: `eu-pef-2021-2279`

###### Food-grade liquid smoke condensate (`liquid_smoke_condensate_input`)

Food-grade liquid smoke condensate is recorded as one atomic exchange at the Liquid smoke application boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Food-grade liquid smoke condensate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Food-grade liquid smoke condensate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquid_smoke_application`
- Sources: `eu-pef-2021-2279`

###### Process water for liquid smoke dilution (`liquid_smoke_process_water_input`)

Process water is recorded as one atomic exchange at the Liquid smoke application boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Process water attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquid_smoke_application`
- Sources: `eu-pef-2021-2279`

###### Grid electricity for liquid smoke application (`liquid_smoke_grid_electricity_input`)

Grid electricity, medium voltage is recorded as one atomic exchange at the Liquid smoke application boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered or supplier-billed energy of Grid electricity, medium voltage attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquid_smoke_application`
- Sources: `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Liquid-smoke-treated bovine meat intermediate (`liquid_smoke_beef_output`)

Liquid-smoke-treated bovine meat intermediate is recorded as one atomic exchange at the Liquid smoke application boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Liquid-smoke-treated bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Liquid-smoke-treated bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquid_smoke_application`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Spent liquid smoke solution wastewater (`liquid_smoke_solution_wastewater`)

Spent liquid smoke solution wastewater is recorded as one atomic exchange at the Liquid smoke application boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Spent liquid smoke solution wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Spent liquid smoke solution wastewater attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquid_smoke_application`
- Sources: `eu-pef-2021-2279`

###### Rejected liquid-smoke-treated bovine meat (`liquid_smoke_rejected_beef_waste`)

Rejected liquid-smoke-treated bovine meat is recorded as one atomic exchange at the Liquid smoke application boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Rejected liquid-smoke-treated bovine meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Rejected liquid-smoke-treated bovine meat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liquid_smoke_application`
- Sources: `eu-pef-2021-2279`

##### Elementary flows


### Process: Thermal finishing and cooling (`thermal_finishing_cooling`)

#### Inputs

##### Product flows

###### Salted bovine meat entering thermal finishing (`thermal_salted_beef_input`)

Salted bovine meat intermediate is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Salted bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Salted bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Dried bovine meat entering thermal finishing (`thermal_dried_beef_input`)

Dried bovine meat intermediate is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Dried bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Dried bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Direct wood-smoked bovine meat entering thermal finishing (`thermal_wood_smoked_beef_input`)

Direct wood-smoked bovine meat intermediate is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Direct wood-smoked bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Direct wood-smoked bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Liquid-smoke-treated bovine meat entering thermal finishing (`thermal_liquid_smoked_beef_input`)

Liquid-smoke-treated bovine meat intermediate is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Liquid-smoke-treated bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Liquid-smoke-treated bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Process water for thermal finishing (`thermal_process_water_input`)

Process water is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Process water attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Grid electricity for thermal finishing (`thermal_grid_electricity_input`)

Grid electricity, medium voltage is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered or supplier-billed energy of Grid electricity, medium voltage attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Purchased saturated steam for thermal finishing (`thermal_purchased_steam_input`)

Purchased saturated steam is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered or supplier-billed energy of Purchased saturated steam attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Purchased hot water for thermal finishing (`thermal_purchased_hot_water_input`)

Purchased hot water is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered or supplier-billed energy of Purchased hot water attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Natural gas burned for thermal finishing (`thermal_natural_gas_input`)

Natural gas is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered or supplier-billed energy of Natural gas attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Low-sulfur diesel burned for thermal finishing (`thermal_diesel_input`)

Low-sulfur diesel fuel is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Low-sulfur diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Low-sulfur diesel fuel attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Liquefied petroleum gas burned for thermal finishing (`thermal_lpg_input`)

Liquefied petroleum gas is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Liquefied petroleum gas attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R717 ammonia make-up for post-treatment cooling (`thermal_r717_makeup_input`)

Ammonia refrigerant (R717) is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Ammonia refrigerant (R717)
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Ammonia refrigerant (R717) attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R744 carbon dioxide make-up for post-treatment cooling (`thermal_r744_makeup_input`)

Carbon dioxide refrigerant (R744) is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide refrigerant (R744)
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Carbon dioxide refrigerant (R744) attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R404A refrigerant make-up for post-treatment cooling (`thermal_r404a_makeup_input`)

R404A refrigerant is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: R404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of R404A refrigerant attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Thermally finished preserved bovine meat (`thermal_finished_beef_output`)

Thermally finished preserved bovine meat is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Thermally finished preserved bovine meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Thermally finished preserved bovine meat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Waste flows

###### Thermal-processing liquor wastewater (`thermal_liquor_wastewater`)

Thermal-processing liquor wastewater is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Thermal-processing liquor wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Thermal-processing liquor wastewater attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Rejected thermally finished bovine meat (`thermal_rejected_beef_waste`)

Rejected thermally finished bovine meat is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Rejected thermally finished bovine meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Rejected thermally finished bovine meat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Elementary flows

###### R717 ammonia emission from post-treatment cooling (`thermal_r717_emission_air`)

Ammonia (R717) to air is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Ammonia (R717) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R744 carbon dioxide emission from post-treatment cooling (`thermal_r744_emission_air`)

Carbon dioxide (R744) to air is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide (R744) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R404A refrigerant emission from post-treatment cooling (`thermal_r404a_emission_air`)

R404A refrigerant to air is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: R404A refrigerant to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Water evaporated during thermal finishing (`thermal_water_emission_air`)

Water to air is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Water to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_evaporated_water` from measured batch masses and moisture data.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Fossil carbon dioxide from thermal finishing (`thermal_fossil_co2_emission_air`)

Carbon dioxide, fossil to air is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide, fossil to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel or named smoking wood and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Nitrogen oxides from thermal finishing (`thermal_nox_emission_air`)

Nitrogen oxides to air is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel or named smoking wood and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Sulfur dioxide from thermal finishing (`thermal_so2_emission_air`)

Sulfur dioxide to air is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel or named smoking wood and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Fine particulate matter from thermal finishing (`thermal_pm25_emission_air`)

Particulate matter, <2.5 µm to air is recorded as one atomic exchange at the Thermal finishing and cooling boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Particulate matter, <2.5 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel or named smoking wood and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_finishing_cooling`
- Sources: `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`


### Process: Packaging and conditioned storage (`packaging_conditioned_storage`)

#### Inputs

##### Product flows

###### Salted bovine meat entering packaging (`packaging_salted_beef_input`)

Salted bovine meat intermediate is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Salted bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Salted bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Dried bovine meat entering packaging (`packaging_dried_beef_input`)

Dried bovine meat intermediate is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Dried bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Dried bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Direct wood-smoked bovine meat entering packaging (`packaging_wood_smoked_beef_input`)

Direct wood-smoked bovine meat intermediate is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Direct wood-smoked bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Direct wood-smoked bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Liquid-smoke-treated bovine meat entering packaging (`packaging_liquid_smoked_beef_input`)

Liquid-smoke-treated bovine meat intermediate is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Liquid-smoke-treated bovine meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Liquid-smoke-treated bovine meat intermediate attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Thermally finished preserved bovine meat entering packaging (`packaging_thermal_beef_input`)

Thermally finished preserved bovine meat is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Thermally finished preserved bovine meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Thermally finished preserved bovine meat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Grid electricity for packaging and conditioned storage (`packaging_grid_electricity_input`)

Grid electricity, medium voltage is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered or supplier-billed energy of Grid electricity, medium voltage attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R717 ammonia make-up for conditioned product storage (`packaging_r717_makeup_input`)

Ammonia refrigerant (R717) is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Ammonia refrigerant (R717)
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Ammonia refrigerant (R717) attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R744 carbon dioxide make-up for conditioned product storage (`packaging_r744_makeup_input`)

Carbon dioxide refrigerant (R744) is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide refrigerant (R744)
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Carbon dioxide refrigerant (R744) attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R404A refrigerant make-up for conditioned product storage (`packaging_r404a_makeup_input`)

R404A refrigerant is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: R404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of R404A refrigerant attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Polyamide/polyethylene vacuum pouch (`packaging_pa_pe_vacuum_pouch_input`)

Polyamide/polyethylene multilayer vacuum pouch is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Polyamide/polyethylene multilayer vacuum pouch
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Polyamide/polyethylene multilayer vacuum pouch attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Low-density polyethylene film (`packaging_ldpe_film_input`)

Low-density polyethylene film is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Low-density polyethylene film attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Aluminium foil (`packaging_aluminium_foil_input`)

Aluminium foil is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Aluminium foil
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Aluminium foil attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Regenerated cellulose film (`packaging_cellulose_film_input`)

Regenerated cellulose film is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Regenerated cellulose film
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Regenerated cellulose film attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Jute sack (`packaging_jute_sack_input`)

Jute sack is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Jute sack
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Jute sack attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Corrugated fibreboard box (`packaging_corrugated_box_input`)

Corrugated fibreboard box is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Corrugated fibreboard box attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Polypropylene strapping (`packaging_polypropylene_strap_input`)

Polypropylene strapping is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Polypropylene strapping
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Polypropylene strapping attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Paper label (`packaging_paper_label_input`)

Paper label is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Paper label attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Wooden pallet (`packaging_wood_pallet_input`)

Wooden pallet is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Wooden pallet attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Net conforming bovine meat reference product (`reference_product_output`)

Bovine meat, salted, dried or smoked is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Bovine meat, salted, dried or smoked `b022bdb0-0f92-4323-b5eb-2c5fb085bd19`
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg net conforming product; packaging mass is excluded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `eu-pef-2021-2279`

##### Waste flows

###### Waste Polyamide/polyethylene vacuum pouch (`packaging_waste_pa_pe_vacuum_pouch`)

Waste polyamide/polyethylene multilayer vacuum pouch is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Waste polyamide/polyethylene multilayer vacuum pouch
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Waste polyamide/polyethylene multilayer vacuum pouch attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Waste Low-density polyethylene film (`packaging_waste_ldpe_film`)

Waste low-density polyethylene film is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Waste low-density polyethylene film attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Waste Aluminium foil (`packaging_waste_aluminium_foil`)

Waste aluminium foil is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Waste aluminium foil
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Waste aluminium foil attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Waste Regenerated cellulose film (`packaging_waste_cellulose_film`)

Waste regenerated cellulose film is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Waste regenerated cellulose film
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Waste regenerated cellulose film attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Waste Jute sack (`packaging_waste_jute_sack`)

Waste jute sack is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Waste jute sack
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Waste jute sack attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Waste Corrugated fibreboard box (`packaging_waste_corrugated_box`)

Waste corrugated fibreboard box is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Waste corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Waste corrugated fibreboard box attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Waste Polypropylene strapping (`packaging_waste_polypropylene_strap`)

Waste polypropylene strapping is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Waste polypropylene strapping
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Waste polypropylene strapping attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Waste Paper label (`packaging_waste_paper_label`)

Waste paper label is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Waste paper label
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Waste paper label attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Waste Wooden pallet (`packaging_waste_wood_pallet`)

Waste wooden pallet is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Waste wooden pallet attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Rejected packaged preserved bovine meat (`packaging_rejected_product_waste`)

Rejected packaged preserved bovine meat is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Rejected packaged preserved bovine meat
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Rejected packaged preserved bovine meat attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Elementary flows

###### R717 ammonia emission from conditioned product storage (`packaging_r717_emission_air`)

Ammonia (R717) to air is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Ammonia (R717) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R744 carbon dioxide emission from conditioned product storage (`packaging_r744_emission_air`)

Carbon dioxide (R744) to air is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide (R744) to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### R404A refrigerant emission from conditioned product storage (`packaging_r404a_emission_air`)

R404A refrigerant to air is recorded as one atomic exchange at the Packaging and conditioned storage boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: R404A refrigerant to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_refrigerant_stock_balance` from opening charge, additions, closing charge and recovered mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_conditioned_storage`
- Sources: `un-cpc-3-0-2025`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`


### Process: Cleaning and sanitation (`cleaning_sanitation`)

#### Inputs

##### Product flows

###### Process water for cleaning and rinsing (`cleaning_process_water_input`)

Process water is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Process water attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Grid electricity for cleaning and sanitation (`cleaning_grid_electricity_input`)

Grid electricity, medium voltage is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered or supplier-billed energy of Grid electricity, medium voltage attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Purchased saturated steam for cleaning and sanitation (`cleaning_purchased_steam_input`)

Purchased saturated steam is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Purchased saturated steam
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered or supplier-billed energy of Purchased saturated steam attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Purchased hot water for cleaning and sanitation (`cleaning_purchased_hot_water_input`)

Purchased hot water is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered or supplier-billed energy of Purchased hot water attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Natural gas burned for cleaning and sanitation (`cleaning_natural_gas_input`)

Natural gas is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record the metered or supplier-billed energy of Natural gas attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Low-sulfur diesel burned for cleaning and sanitation (`cleaning_diesel_input`)

Low-sulfur diesel fuel is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Low-sulfur diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Low-sulfur diesel fuel attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Liquefied petroleum gas burned for cleaning and sanitation (`cleaning_lpg_input`)

Liquefied petroleum gas is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Liquefied petroleum gas attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Sodium hydroxide cleaning chemical (`cleaning_sodium_hydroxide_input`)

Sodium hydroxide is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Sodium hydroxide attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Nitric acid cleaning chemical (`cleaning_nitric_acid_input`)

Nitric acid is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Nitric acid attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Phosphoric acid cleaning chemical (`cleaning_phosphoric_acid_input`)

Phosphoric acid is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Phosphoric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Phosphoric acid attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Sodium hypochlorite disinfectant (`cleaning_sodium_hypochlorite_input`)

Sodium hypochlorite is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Sodium hypochlorite attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Peracetic acid disinfectant (`cleaning_peracetic_acid_input`)

Peracetic acid is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Peracetic acid attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Hydrogen peroxide disinfectant (`cleaning_hydrogen_peroxide_input`)

Hydrogen peroxide is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Hydrogen peroxide attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Benzalkonium chloride disinfectant (`cleaning_benzalkonium_chloride_input`)

Benzalkonium chloride is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Benzalkonium chloride
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Benzalkonium chloride attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Cleaning and sanitation wastewater (`cleaning_wastewater_output`)

Cleaning and sanitation wastewater is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Cleaning and sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Cleaning and sanitation wastewater attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Waste HDPE chemical drum (`cleaning_waste_hdpe_drum`)

Waste high-density polyethylene chemical drum is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Waste high-density polyethylene chemical drum
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Waste high-density polyethylene chemical drum attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Waste polypropylene chemical pail (`cleaning_waste_pp_pail`)

Waste polypropylene chemical pail is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Waste polypropylene chemical pail
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Waste polypropylene chemical pail attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Used polyester cleaning cloth (`cleaning_used_polyester_cloth`)

Used polyester cleaning cloth is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Used polyester cleaning cloth
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Used polyester cleaning cloth attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Elementary flows

###### Fossil carbon dioxide from cleaning and sanitation (`cleaning_fossil_co2_emission_air`)

Carbon dioxide, fossil to air is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Carbon dioxide, fossil to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Nitrogen oxides from cleaning and sanitation (`cleaning_nox_emission_air`)

Nitrogen oxides to air is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Sulfur dioxide from cleaning and sanitation (`cleaning_so2_emission_air`)

Sulfur dioxide to air is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Fine particulate matter from cleaning and sanitation (`cleaning_pm25_emission_air`)

Particulate matter, <2.5 µm to air is recorded as one atomic exchange at the Cleaning and sanitation boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Particulate matter, <2.5 µm to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_stationary_combustion_emission` from each measured fuel and a documented applicable factor, or use direct monitoring.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation`
- Sources: `fao-dried-salted-meats-1985`; `eu-pef-2021-2279`; `jrc-sa-bref-2024`


### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Grid electricity for on-site wastewater treatment (`wwt_grid_electricity_input`)

Grid electricity, medium voltage is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Grid electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record the metered or supplier-billed energy of Grid electricity, medium voltage attributable to this process for the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Ferric chloride treatment chemical (`wwt_ferric_chloride_input`)

Ferric chloride is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Ferric chloride attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Sodium hydroxide treatment chemical (`wwt_sodium_hydroxide_input`)

Sodium hydroxide is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Sodium hydroxide attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Calcium hydroxide treatment chemical (`wwt_calcium_hydroxide_input`)

Calcium hydroxide is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Calcium hydroxide attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Anionic polyacrylamide treatment chemical (`wwt_anionic_polyacrylamide_input`)

Anionic polyacrylamide is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Anionic polyacrylamide
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Anionic polyacrylamide attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Waste flows

###### Meat-preparation wastewater entering treatment (`wwt_meat_preparation_wastewater_input`)

Meat-preparation wastewater is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Meat-preparation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Meat-preparation wastewater attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Spent curing brine entering treatment (`wwt_spent_curing_brine_wastewater_input`)

Spent curing brine is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Spent curing brine
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Spent curing brine attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Salt-bearing meat-juice wastewater entering treatment (`wwt_salt_meat_juice_wastewater_input`)

Salt-bearing meat-juice wastewater is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Salt-bearing meat-juice wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Salt-bearing meat-juice wastewater attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Drying condensate wastewater entering treatment (`wwt_drying_condensate_wastewater_input`)

Drying condensate wastewater is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Drying condensate wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Drying condensate wastewater attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Smokehouse wastewater entering treatment (`wwt_smokehouse_wastewater_input`)

Smokehouse wastewater is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Smokehouse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Smokehouse wastewater attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Spent liquid smoke solution wastewater entering treatment (`wwt_liquid_smoke_solution_wastewater_input`)

Spent liquid smoke solution wastewater is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Spent liquid smoke solution wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Spent liquid smoke solution wastewater attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Thermal-processing liquor wastewater entering treatment (`wwt_thermal_liquor_wastewater_input`)

Thermal-processing liquor wastewater is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Thermal-processing liquor wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Thermal-processing liquor wastewater attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Cleaning and sanitation wastewater entering treatment (`wwt_cleaning_wastewater_input`)

Cleaning and sanitation wastewater is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Cleaning and sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Cleaning and sanitation wastewater attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Treated meat-processing wastewater (`wwt_treated_effluent_output`)

Treated meat-processing wastewater is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Treated meat-processing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the metered volume of Treated meat-processing wastewater attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Dewatered biological wastewater sludge (`wwt_dewatered_sludge_output`)

Dewatered biological wastewater sludge is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Dewatered biological wastewater sludge
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Dewatered biological wastewater sludge attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Meat-processing wastewater screenings (`wwt_screenings_output`)

Meat-processing wastewater screenings is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Meat-processing wastewater screenings
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Meat-processing wastewater screenings attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Waste bovine fat from wastewater treatment (`wwt_fat_grease_waste_output`)

Waste bovine fat from wastewater treatment is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Waste bovine fat from wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Waste bovine fat from wastewater treatment attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Wastewater-treatment grit (`wwt_grit_output`)

Wastewater-treatment grit is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Wastewater-treatment grit
- Flow property / unit: Mass / kg
- Amount rule: Record the measured or stock-reconciled mass of Wastewater-treatment grit attributable to the locked batch.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

##### Elementary flows

###### Water discharged to surface water (`wwt_water_emission_water`)

Water to surface water is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Water to surface water
- Flow property / unit: Mass / kg
- Amount rule: Use the measured discharged-water mass, or convert the measured volume with a documented density.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Chemical oxygen demand discharged to water (`wwt_cod_emission_water`)

Chemical oxygen demand to water is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_wastewater_pollutant_load` from matched discharge volume and measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Five-day biochemical oxygen demand discharged to water (`wwt_bod5_emission_water`)

Biochemical oxygen demand, 5 days to water is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Biochemical oxygen demand, 5 days to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_wastewater_pollutant_load` from matched discharge volume and measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Suspended solids discharged to water (`wwt_tss_emission_water`)

Suspended solids to water is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_wastewater_pollutant_load` from matched discharge volume and measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Chloride discharged to water (`wwt_chloride_emission_water`)

Chloride to water is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Chloride to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_wastewater_pollutant_load` from matched discharge volume and measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Total nitrogen discharged to water (`wwt_total_nitrogen_emission_water`)

Total nitrogen to water is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_wastewater_pollutant_load` from matched discharge volume and measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Total phosphorus discharged to water (`wwt_total_phosphorus_emission_water`)

Total phosphorus to water is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_wastewater_pollutant_load` from matched discharge volume and measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Nitrate discharged to water (`wwt_nitrate_emission_water`)

Nitrate to water is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Nitrate to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_wastewater_pollutant_load` from matched discharge volume and measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Nitrite discharged to water (`wwt_nitrite_emission_water`)

Nitrite to water is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Nitrite to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate by `calc_wastewater_pollutant_load` from matched discharge volume and measured concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Biogenic methane from wastewater treatment (`wwt_methane_emission_air`)

Methane, biogenic to air is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Methane, biogenic to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or calculate from measured treatment activity with a documented applicable factor; no PCR default factor is provided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

###### Nitrous oxide from wastewater treatment (`wwt_nitrous_oxide_emission_air`)

Dinitrogen monoxide to air is recorded as one atomic exchange at the On-site wastewater treatment boundary. Record this exact flow only when it occurs in the locked route and finished-product specification.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or calculate from measured treatment activity with a documented applicable factor; no PCR default factor is provided.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment`
- Sources: `eu-pef-2021-2279`; `jrc-sa-bref-2024`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision` | shared operations | First subdivide lines, rooms, meters and batch records to the locked route and finished-product specification wherever technically feasible. | `eu-pef-2021-2279` |
| `allocation_causal` | shared utilities | When subdivision is infeasible, use a documented physical causal driver for each shared utility or treatment operation and reconcile allocated values to the measured total. | `eu-pef-2021-2279` |
| `allocation_coproduct_identity` | trimmings and recovered fat | Classify food-grade bovine trimmings or recovered bovine fat as co-products only when a documented beneficial destination and positive product function exist; otherwise retain the exact waste flow. | `eu-pef-2021-2279`; `jrc-sa-bref-2024` |
| `allocation_joint_process` | joint co-products | If a joint process remains after subdivision and causal modelling, apply `calc_allocation_factor` with a justified physical driver; use an economic driver only when no defensible physical relation exists. Disclose values, period and sensitivity. | `eu-pef-2021-2279` |
| `allocation_no_hidden_credit` | waste and recovery | Do not subtract an avoided burden or hide a recovery credit in a foreground amount. Model substitution, recycling or treatment consequences as explicit downstream scenarios outside this attributional foreground inventory. | `eu-pef-2021-2279` |
| `allocation_mass_balance` | all stages | Reconcile input meat, ingredients and water with conforming product, co-products, waste, wastewater and calculated evaporation for every locked batch; investigate and disclose residuals. | `eu-pef-2021-2279`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_meat_receiving_preparation` | `meat_receiving_preparation` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | Collect signed batch sheets, formulation and issue records, calibrated scales and meters, maintenance ledgers, laboratory reports, waste transfer notes and verified factor records. Keep each atomic flow separately. | native record unit; normalize to kg, m3, kWh or MJ per reference flow | every batch; continuous or billing-period meters allocated to the same campaign | representative campaign with reporting period and shutdowns declared | all lines, rooms, utilities and treatment assets serving the locked route and specification | aggregate only the same route and specification; allocate shared records with a documented causal key, then apply `calc_reference_normalization` | route approval; source document; calibration; completeness reconciliation; sign-off; factor provenance |
| `cp_salt_curing` | `salt_curing` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | Collect signed batch sheets, formulation and issue records, calibrated scales and meters, maintenance ledgers, laboratory reports, waste transfer notes and verified factor records. Keep each atomic flow separately. | native record unit; normalize to kg, m3, kWh or MJ per reference flow | every batch; continuous or billing-period meters allocated to the same campaign | representative campaign with reporting period and shutdowns declared | all lines, rooms, utilities and treatment assets serving the locked route and specification | aggregate only the same route and specification; allocate shared records with a documented causal key, then apply `calc_reference_normalization` | route approval; source document; calibration; completeness reconciliation; sign-off; factor provenance |
| `cp_controlled_drying` | `controlled_drying` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | Collect signed batch sheets, formulation and issue records, calibrated scales and meters, maintenance ledgers, laboratory reports, waste transfer notes and verified factor records. Keep each atomic flow separately. | native record unit; normalize to kg, m3, kWh or MJ per reference flow | every batch; continuous or billing-period meters allocated to the same campaign | representative campaign with reporting period and shutdowns declared | all lines, rooms, utilities and treatment assets serving the locked route and specification | aggregate only the same route and specification; allocate shared records with a documented causal key, then apply `calc_reference_normalization` | route approval; source document; calibration; completeness reconciliation; sign-off; factor provenance |
| `cp_direct_wood_smoking` | `direct_wood_smoking` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | Collect signed batch sheets, formulation and issue records, calibrated scales and meters, maintenance ledgers, laboratory reports, waste transfer notes and verified factor records. Keep each atomic flow separately. | native record unit; normalize to kg, m3, kWh or MJ per reference flow | every batch; continuous or billing-period meters allocated to the same campaign | representative campaign with reporting period and shutdowns declared | all lines, rooms, utilities and treatment assets serving the locked route and specification | aggregate only the same route and specification; allocate shared records with a documented causal key, then apply `calc_reference_normalization` | route approval; source document; calibration; completeness reconciliation; sign-off; factor provenance |
| `cp_liquid_smoke_application` | `liquid_smoke_application` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | Collect signed batch sheets, formulation and issue records, calibrated scales and meters, maintenance ledgers, laboratory reports, waste transfer notes and verified factor records. Keep each atomic flow separately. | native record unit; normalize to kg, m3, kWh or MJ per reference flow | every batch; continuous or billing-period meters allocated to the same campaign | representative campaign with reporting period and shutdowns declared | all lines, rooms, utilities and treatment assets serving the locked route and specification | aggregate only the same route and specification; allocate shared records with a documented causal key, then apply `calc_reference_normalization` | route approval; source document; calibration; completeness reconciliation; sign-off; factor provenance |
| `cp_thermal_finishing_cooling` | `thermal_finishing_cooling` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | Collect signed batch sheets, formulation and issue records, calibrated scales and meters, maintenance ledgers, laboratory reports, waste transfer notes and verified factor records. Keep each atomic flow separately. | native record unit; normalize to kg, m3, kWh or MJ per reference flow | every batch; continuous or billing-period meters allocated to the same campaign | representative campaign with reporting period and shutdowns declared | all lines, rooms, utilities and treatment assets serving the locked route and specification | aggregate only the same route and specification; allocate shared records with a documented causal key, then apply `calc_reference_normalization` | route approval; source document; calibration; completeness reconciliation; sign-off; factor provenance |
| `cp_packaging_conditioned_storage` | `packaging_conditioned_storage` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | Collect signed batch sheets, formulation and issue records, calibrated scales and meters, maintenance ledgers, laboratory reports, waste transfer notes and verified factor records. Keep each atomic flow separately. | native record unit; normalize to kg, m3, kWh or MJ per reference flow | every batch; continuous or billing-period meters allocated to the same campaign | representative campaign with reporting period and shutdowns declared | all lines, rooms, utilities and treatment assets serving the locked route and specification | aggregate only the same route and specification; allocate shared records with a documented causal key, then apply `calc_reference_normalization` | route approval; source document; calibration; completeness reconciliation; sign-off; factor provenance |
| `cp_cleaning_sanitation` | `cleaning_sanitation` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | Collect signed batch sheets, formulation and issue records, calibrated scales and meters, maintenance ledgers, laboratory reports, waste transfer notes and verified factor records. Keep each atomic flow separately. | native record unit; normalize to kg, m3, kWh or MJ per reference flow | every batch; continuous or billing-period meters allocated to the same campaign | representative campaign with reporting period and shutdowns declared | all lines, rooms, utilities and treatment assets serving the locked route and specification | aggregate only the same route and specification; allocate shared records with a documented causal key, then apply `calc_reference_normalization` | route approval; source document; calibration; completeness reconciliation; sign-off; factor provenance |
| `cp_onsite_wastewater_treatment` | `onsite_wastewater_treatment` | `atomic_exchanges` | `batch_meter_stock_emission_record` | locked_route_id; finished_spec_id; batch_id; exact_flow_identity; opening_stock; receipts; closing_stock; measured_quantity; meter_period; allocation_key; product_mass; waste_mass; emission_measurement; laboratory_result; destination | Collect signed batch sheets, formulation and issue records, calibrated scales and meters, maintenance ledgers, laboratory reports, waste transfer notes and verified factor records. Keep each atomic flow separately. | native record unit; normalize to kg, m3, kWh or MJ per reference flow | every batch; continuous or billing-period meters allocated to the same campaign | representative campaign with reporting period and shutdowns declared | all lines, rooms, utilities and treatment assets serving the locked route and specification | aggregate only the same route and specification; allocate shared records with a documented causal key, then apply `calc_reference_normalization` | route approval; source document; calibration; completeness reconciliation; sign-off; factor provenance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory cards | Normalized amount = atomic exchange quantity attributable to the locked route and product specification / net conforming reference-product mass released in the same campaign. | attributable atomic exchange quantity; net conforming product mass | amount per 1 kg net conforming product | `eu-pef-2021-2279` |
| `calc_stage_utility_allocation` | shared utility meters | Use a dedicated submeter where available. Otherwise allocate a shared meter only with a documented causal driver such as measured runtime multiplied by verified load; retain total reconciliation. | shared-meter total; submeter or causal-driver records; route and specification ids | stage-specific carrier quantity | `eu-pef-2021-2279` |
| `calc_recipe_input` | ingredients and packaging | Atomic input = opening stock + receipts - closing stock - documented return, reconciled to dispensing or issue records for the locked batch. | opening stock; receipts; closing stock; returns; dispensing records | product-specific atomic input mass | `eu-pef-2021-2279`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990` |
| `calc_product_yield` | each preservation stage | Yield = measured conforming output mass / measured input meat mass for the same locked batch. Report co-products, rejects, wastewater and evaporation separately. | input meat; conforming output; co-products; waste; wastewater; evaporation | stage yield and mass-balance residual | `eu-pef-2021-2279`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990` |
| `calc_evaporated_water` | drying and thermal finishing | Evaporated water = water mass in measured inputs - water mass in measured products - water mass in separately recorded liquid and solid outputs, using batch-specific moisture results. | batch masses; moisture results; liquid outputs; solid outputs | water to air | `eu-pef-2021-2279`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990` |
| `calc_refrigerant_stock_balance` | each named refrigerant | Emission = opening equipment charge + additions - closing equipment charge - recovered mass. Investigate negative or unreconciled results; do not substitute a default leak rate. | opening charge; additions; closing charge; recovered mass | named refrigerant emission to air | `eu-pef-2021-2279`; `jrc-sa-bref-2024` |
| `calc_stationary_combustion_emission` | each direct air pollutant | Emission = sum of each exact burned fuel or named wood quantity multiplied by a documented pollutant-specific factor, unless direct monitoring is used. Store each pollutant separately. | fuel or named wood quantity; pollutant factor and provenance; direct monitoring | one named elementary emission | `eu-pef-2021-2279`; `jrc-sa-bref-2024`; `fao-meat-preservation-manual-1990` |
| `calc_wastewater_pollutant_load` | each wastewater pollutant | Pollutant load = matched discharge volume multiplied by its laboratory concentration, with unit conversion and sampling representativeness documented. | discharge volume; pollutant concentration; sampling time; conversion | one named pollutant mass to water | `eu-pef-2021-2279`; `jrc-sa-bref-2024` |
| `calc_allocation_factor` | shared operations and co-products | After subdivision and causal allocation are exhausted, allocation factor = declared product-specific driver / sum of the same driver for all jointly produced outputs. Record driver, period, outputs, factor and sensitivity. | joint inventory; output identities; physical or economic driver; period | documented allocation factor | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | every package | Approve the route id, operation order and finished-product specification before aggregation; do not average across routes. | Approved specification, route map and batch link. |
| `dq_primary_records` | foreground amounts | Use calibrated measurements, invoices, stock reconciliation, batch records, laboratory results or signed waste records representative of the declared period. | Source record, calibration or supplier evidence and sign-off. |
| `dq_completeness` | all processes | Reconcile ingredients, utilities, product, co-products, packaging, waste, wastewater and direct emissions for every active process. | Process checklist and mass or energy reconciliation. |
| `dq_temporal_alignment` | campaign data | Align recipes, product mass, meters, maintenance, waste and samples to one representative campaign; disclose shutdowns and abnormal batches. | Timestamped records and inclusion log. |
| `dq_representativeness` | all data | Assess technological, geographical and temporal representativeness and document material gaps or proxies. | Data-quality assessment and source metadata. |
| `dq_calculation_traceability` | calculated values | Retain raw inputs, formula version, units, conversion factors, source provenance and reviewer check for every calculation. | Reproducible calculation and review record. |
| `dq_no_default_substitution` | missing amounts | Do not insert a PCR recipe, time, temperature, yield, energy, emission factor or numerical range. Obtain a foreground record or document a data gap. | Gap register and collection action. |
| `dq_uuid_review` | non-reference flows | Keep UUID blank until flow-hybrid-search and public state-100 direct read both confirm exact semantics, flow type, property and unit. | Dual-verification record outside PCR content. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | reference flow | Confirm the sole reference-product UUID, Mass UUID, Units of mass UUID and kg unit exactly match this PCR; reject any non-CPC-21182 reference product. | `un-cpc-3-0-2025` |
| `validate_route_spec` | dataset identity | Reject a package that lacks one locked route identifier, exact operation order, finished-product specification, ingredient list, smoke medium where applicable, preservation endpoint, storage condition or packaging declaration. | `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279` |
| `validate_atomic_flows` | inventory cards | Reject any Selected flow that contains alternatives, plural categories, unnamed carriers, unnamed ingredients, unnamed chemicals, unnamed packaging, mixed wastes or combined emissions. Keep every non-reference UUID empty until dual exact verification. | `eu-pef-2021-2279` |
| `validate_process_applicability` | process map | Confirm every active route operation has a process section and every omitted conditional process has documentary non-applicability evidence. Never merge direct wood smoking with liquid smoke application. | `fao-meat-preservation-manual-1990`; `eu-pef-2021-2279` |
| `validate_reference_mass` | quantitative inventory | Confirm all amounts normalize to 1 kg net conforming product and packaging mass is excluded. Reconcile released net mass to batch and pack records. | `eu-pef-2021-2279` |
| `validate_recipe_completeness` | ingredients and packaging | Reconcile the product-specific ingredient bill and every packaging component to stock, issue, return and batch records. Any unlisted actual flow requires a new atomic card. | `eu-pef-2021-2279` |
| `validate_utility_reconciliation` | utilities | Reconcile electricity, steam, hot water and each fuel to meters or invoices. Document causal allocation of shared records and prohibit double counting purchased heat with upstream supplier fuel. | `eu-pef-2021-2279` |
| `validate_refrigerants_emissions` | refrigeration and direct emissions | Reconcile every named refrigerant by stock balance. For each pollutant, retain direct measurements or the exact activity record, factor, factor source, unit conversion and calculation. | `eu-pef-2021-2279`; `jrc-sa-bref-2024` |
| `validate_wastewater` | wastewater | Reconcile each generating wastewater stream to treatment inflow and discharge. Match volume and concentration periods for each named pollutant load. | `eu-pef-2021-2279`; `jrc-sa-bref-2024` |
| `validate_mass_balance` | all production stages | Check stage and campaign mass balances across meat, ingredients, product, co-products, waste, wastewater and evaporation. Investigate residuals instead of forcing them into an aggregate flow. | `eu-pef-2021-2279`; `fao-dried-salted-meats-1985`; `fao-meat-preservation-manual-1990` |
| `validate_temporal_scope` | foreground evidence | Confirm route, specification, recipes, meters, waste records and laboratory samples cover the same representative period and identify shutdowns, abnormal batches and exclusions. | `eu-pef-2021-2279` |
| `validate_quality_verification` | published dataset | Retain evidence for completeness, precision, temporal, technological and geographical representativeness, calculations, source provenance and reviewer sign-off. External communication requires the applicable PEF verification and validation procedure. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; `background_dataset` after methodology and data review |
| downstream_use | Foreground preservation-process modelling and linked life-cycle models for the exact declared route and finished-product specification. |
| allowed_use | Attributional studies whose geography, technology, period, route, ingredients, smoke medium, preservation endpoint, packaging and storage state match the metadata. |
| excluded_use | A generic average across salted, dried and smoked routes; substitution for unpreserved bovine meat, offal, another species or another meat preparation; comparative assertion without applicable review and verification. |
| required_metadata | PCR id; CPC reference; reference UUIDs; route id; operation order; product specification; complete ingredient and packaging bill; smoke technology and exact medium; preservation endpoints; facility and line; geography; period; allocation; sources; data-quality assessment; exclusions. |
| required_quality_disclosure | Primary-data share; meter and mass-balance coverage; calculation and factor provenance; refrigerant reconciliation; emission and wastewater monitoring; temporal, technological and geographical representativeness; uncertainty and gaps; reviewer and verification status. |
| update_trigger | Change in route, recipe, smoke medium, wood species, thermal endpoint, drying endpoint, equipment, refrigerant, energy supply, packaging, wastewater treatment, allocation, regulation, reference-flow identity, or a material data-quality finding. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `dataset` | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0 Structure*, 30 June 2025, retained exact row 21182. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv (accessed 2026-08-13). | Exact product boundary and exclusions from neighbouring preserved-meat classes. |
| `fao-dried-salted-meats-1985` | `official_guidance` | FAO Animal Production and Health Paper 51, G. A. Norman and O. O. Corte, *Dried salted meats: charque and carne-de-sol*, ISBN 92-5-102219-4, 1985. https://www.fao.org/4/x6555e/x6555e00.htm (accessed 2026-08-13). | Bovine raw-material preparation, distinct salted-dried routes, salt and water inputs, brine and used-salt wastes, drying, packaging and sanitation structure; no example quantity is adopted. |
| `fao-meat-preservation-manual-1990` | `official_guidance` | FAO Animal Production and Health Paper 79, *Manual on simple methods of meat preservation*, ISBN 92-5-102744-7, 1990, Chapter 2. https://www.fao.org/4/x6932e/x6932e02.htm (accessed 2026-08-13). | Drying and direct-wood-smoking structure, controls, exact salt treatment, smoke-medium declaration and packaging candidates; no example quantity is adopted. |
| `jrc-sa-bref-2024` | `official_guidance` | European Commission Joint Research Centre, *Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries*, JRC135916, EUR 31752 EN, 2024, DOI 10.2760/18199. https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 (accessed 2026-08-13). | Animal-product-site utility, cleaning, refrigeration, wastewater, waste and direct-emission collection candidates; no BREF level is adopted as a cured-meat default. |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279, Annex I, Product Environmental Footprint Method, consolidated text. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (accessed 2026-08-13). | Product-specific bill of materials, company-specific foreground data, complete LCI, allocation, transparency, data quality, reporting, verification and validation. |
