---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-poultry-fresh-chilled-or-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Edible offal of poultry, fresh, chilled or frozen

## 1. Scope and Applicability

This PCR covers factory-gate preparation of edible poultry offal received as an individually segregated raw organ from a linked slaughter and evisceration dataset. The foreground includes receipt, identity inspection, cleaning, trimming, organ-specific preparation, fresh-state handling or chilling or freezing, packaging, storage, dispatch, sanitation, wastewater management and on-site utility generation when present.

Covered poultry species are chicken, turkey, goose, duck and guinea fowl. Covered products are food-grade, specifically named edible organs, including non-fatty liver, heart and gizzard, plus fatty liver where the represented product specification permits it. A foreground data package shall represent exactly one poultry species, exactly one organ identity or fatty-liver identity, and exactly one market state: fresh, chilled or frozen. Mixed-species lots, mixed-organ products and aggregation across market states are not conforming reference products.

Live-bird production, feed, hatchery operations, inbound live-bird transport, slaughter, bleeding, defeathering and evisceration are linked upstream processes whose burdens and co-product allocation remain visible through the raw-organ input dataset. Post-gate distribution, retail, cooking, consumption and end-of-life are outside this foreground boundary. Mammalian offal, non-edible organs, whole poultry carcasses, poultry meat cuts, cooked or otherwise preserved offal, and an unnamed residual “other offal” product are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-poultry-fresh-chilled-or-frozen` |
| classification_refs | CPC 3.0: 21160 Edible offal of poultry, fresh, chilled or frozen |
| covered_products | One specifically named edible organ or fatty liver from one declared chicken, turkey, goose, duck or guinea-fowl population, delivered in one declared fresh, chilled or frozen state |
| excluded_products | Mixed poultry species; mixed organ identities; mixed market states; mammalian offal; non-edible organs; whole carcasses; meat cuts; live poultry; cooked, cured, canned or otherwise preserved offal; an unnamed residual offal category |
| representative_product | Net conforming edible offal with one declared poultry species, one declared organ identity and one declared market state |
| production_route | Receipt of individually segregated raw organ from a linked slaughter dataset; inspection; cleaning; trimming; organ-specific preparation; exact market-state conditioning; packaging; storage; factory-gate dispatch |
| market_state | Food-grade fresh, chilled or frozen product at the offal-processing factory gate, with species, organ, product temperature, packaging, glazing and lot state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of food-grade edible poultry offal for one declared poultry species, one declared organ identity and one declared fresh, chilled or frozen state at the producing factory gate |
| How much | 1 kg net conforming edible offal, excluding packaging, retained packaging gas, free glazing ice and pallet mass |
| How well | Declared species; exact organ identity or fatty-liver identity; food-grade release status; market state; product temperature; whole-organ or trimmed form; glazing status; packaging format |
| How long or cycle | One released production lot or a reporting-period aggregation containing only the same species-organ-state key |
| reference_flow_link | `reference_edible_poultry_offal` in `state_conditioning_packaging` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Edible offal of poultry, fresh, chilled or frozen `c294500e-2de6-44fd-a578-a1534dafb1b4` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | poultry_species: exactly one of chicken, turkey, goose, duck or guinea fowl; organ_identity: exactly one specifically named organ or fatty liver; market_state: exactly one of fresh, chilled or frozen; product temperature basis; food-grade release status; whole-organ or trimmed form; glazing status; net product mass; packaging format; source slaughter dataset; plant and geography; reporting period; upstream allocation method; co-product status and destination |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, reference-flow comment, product description or an equivalent field. Missing qualifiers or more than one value on any species-organ-state axis make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Fix the quantitative reference at 1 kg net conforming edible offal for the one declared species-organ-state key. |
| `variant_key_cardinality` | reference dataset | identity fields | declared values | Require exactly one poultry species, exactly one organ identity and exactly one market state; prohibit averaging or summing across any of these axes. |
| `net_product_mass` | product release | Mass | kg | Exclude packaging, retained packaging gas, pallets, free glazing ice, free drainage and separately declared co-products from reference-product mass. |
| `raw_organ_mass` | raw organ receipt | Mass | kg | Record the exact species-organ input at the receiving scale and reconcile accepted, rejected and inventory-change mass. |
| `market_state` | reference product | Temperature | declared unit | Retain measured release temperature and the declared fresh, chilled or frozen criterion without converting between market-state datasets. |
| `glazing_basis` | glazed frozen product | Mass | kg | Declare glazing and separate added glazing water or ice from net edible-offal mass under the applicable product specification. |
| `energy_basis` | electricity, steam, hot water, heat and fuel | Energy | kWh or MJ | Preserve each measured energy carrier and its conversion basis; do not combine unlike utilities before inventory entry. |
| `chemical_mass_basis` | cleaning and treatment chemicals | Mass | kg | Report every named chemical on a pure-substance-equivalent basis when records contain formulated solutions. |
| `packaging_mass_basis` | packaging | Mass | kg | Report every packaging material separately and exclude packaging from the 1 kg reference product. |
| `refrigerant_mass_basis` | refrigeration | Mass | kg | Reconcile each installed refrigerant separately and calculate emitted blend components as distinct elementary flows. |

## 5. System Boundary

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `sb_foreground_scope` | offal processing | Include receipt, inspection, cleaning, trimming, organ-specific preparation, exact market-state conditioning, packaging, storage, sanitation and directly controlled environmental management through factory-gate dispatch. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `sb_upstream_slaughter_link` | raw organ input | Link each raw organ to a species- and organ-specific slaughter and evisceration dataset carrying the applicable live-bird, slaughter and joint-production burdens. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `sb_company_specific_inventory` | bill of materials and manufacturing | Collect product-specific materials and company-specific process data for the represented plant, technology and reporting period. | `eu-pef-method-2021` |
| `sb_variant_separation` | all processes | Keep species, organ identity and market state separate through records, internal transfers, allocation and normalization; reject a mixed reference dataset. | `un-cpc-3-0-2025`; `eu-pef-method-2021` |
| `sb_atomic_exchanges` | process inventory | Record every utility, fuel, refrigerant, coolant, chemical, packaging material, co-product, waste and elementary emission as one concrete exchange. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `sb_internal_transfers` | intermediates, wastewater and utilities | Represent an internal transfer once at each linked boundary and prevent the equivalent external input, disposal or credit from being counted twice. | `eu-pef-method-2021` |
| `sb_conditional_technology` | state conditioning, packaging, treatment and energy | Populate only atomic cards used by the represented technology; document non-applicability and add a new specific card before using an unlisted exact organ, material or refrigerant. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `sb_direct_releases` | air and water | Include measured or calculated direct releases from refrigeration, packaging gas, wastewater treatment and combustion without substituting a pollutant collection selector. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Individually segregated raw edible organ accepted from a linked slaughter and evisceration dataset, with poultry species, exact organ identity, slaughter lot, receipt mass, temperature and inspection outcome recorded |
| starting_condition_role | Foreground processing gate; live-bird production and slaughter remain linked upstream and retain their own joint-production allocation |
| product_classification_scope | CPC 3.0 code 21160 covers edible poultry offal in fresh, chilled or frozen state, including fatty liver; each concrete data package narrows that category to one species-organ-state key |
| recursive_input_rule | Purchased edible offal entering this system is recorded only through the matching exact raw species-organ card with source dataset and amount; it is not regenerated recursively inside the foreground system |
| upstream_dataset_requirement | Link the exact raw organ, purchased electricity, water, steam, heat, fuels, refrigerants, coolants, chemicals, packaging and treatment services to representative upstream datasets |
| disclosure | Declare species, organ identity, fatty-liver status, market state, slaughter source, plant, geography, reporting period, preparation technology, temperature criterion, storage duration, refrigeration system, refrigerant, glazing, packaging, treatment route, co-product destinations and allocation |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `offal_receipt_preparation` | Offal receipt, inspection, cleaning, trimming and organ-specific preparation | `required` | Always; populate exactly one raw species-organ input and its matching prepared-organ output | `foreground_process` | `applicable_prepared_organ_row` |
| `state_conditioning_packaging` | Market-state conditioning, packaging, storage and dispatch | `required` | Always; declare exactly one fresh, chilled or frozen market-state route | `foreground_process` | `reference_edible_poultry_offal` |
| `sanitation_wastewater_management` | Cleaning, disinfection and wastewater management | `required` | Cleaning is always included; on-site wastewater-treatment outputs apply only when treatment occurs inside the facility boundary | `foreground_process` | `treated_process_water` |
| `onsite_energy_generation` | On-site fuel combustion and utility generation | `conditional` | Include when fuel is combusted or steam, hot water, heat or electricity is generated inside the facility boundary | `foreground_process` | `onsite_steam_output` |

### Process: Offal receipt, inspection, cleaning, trimming and organ-specific preparation (`offal_receipt_preparation`)

#### Inputs

##### Product flows

###### Raw chicken liver (`raw_chicken_liver`)

Raw chicken liver enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw chicken liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw chicken heart (`raw_chicken_heart`)

Raw chicken heart enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw chicken heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw chicken gizzard (`raw_chicken_gizzard`)

Raw chicken gizzard enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw chicken gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw turkey liver (`raw_turkey_liver`)

Raw turkey liver enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw turkey liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw turkey heart (`raw_turkey_heart`)

Raw turkey heart enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw turkey heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw turkey gizzard (`raw_turkey_gizzard`)

Raw turkey gizzard enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw turkey gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw goose liver, non-fatty (`raw_goose_liver_nonfatty`)

Raw goose liver, non-fatty enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw goose liver, non-fatty
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw goose heart (`raw_goose_heart`)

Raw goose heart enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw goose heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw goose gizzard (`raw_goose_gizzard`)

Raw goose gizzard enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw goose gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw goose fatty liver (`raw_goose_fatty_liver`)

Raw goose fatty liver enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw goose fatty liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw duck liver, non-fatty (`raw_duck_liver_nonfatty`)

Raw duck liver, non-fatty enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw duck liver, non-fatty
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw duck heart (`raw_duck_heart`)

Raw duck heart enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw duck heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw duck gizzard (`raw_duck_gizzard`)

Raw duck gizzard enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw duck gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw duck fatty liver (`raw_duck_fatty_liver`)

Raw duck fatty liver enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw duck fatty liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw guinea fowl liver (`raw_guinea_fowl_liver`)

Raw guinea fowl liver enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw guinea fowl liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw guinea fowl heart (`raw_guinea_fowl_heart`)

Raw guinea fowl heart enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw guinea fowl heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Raw guinea fowl gizzard (`raw_guinea_fowl_gizzard`)

Raw guinea fowl gizzard enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This candidate is used only when both its poultry species and organ identity match the declared variant key.

- Selected flow: Raw guinea fowl gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated batch-scale and lot-identity records for this exact species-organ stream, reconciled to accepted and rejected dispositions.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_raw_offal_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Electricity, facility supply (`offal_preparation_electricity`)

Electricity, facility supply enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Use a dedicated meter or a documented causal share of the reconciled facility electricity balance for this exact exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Process water (`offal_preparation_process_water`)

Process water enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Use a dedicated water meter or a documented process water balance for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Hot water (`offal_preparation_hot_water`)

Hot water enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Hot water
- Flow property / unit: Energy / MJ
- Amount rule: Use a dedicated heat meter or a documented utility balance for this exact steam, hot-water or heat exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Steam (`offal_preparation_steam`)

Steam enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Use a dedicated heat meter or a documented utility balance for this exact steam, hot-water or heat exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Water ice (`offal_preparation_water_ice`)

Water ice enters the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Water ice
- Flow property / unit: Mass / kg
- Amount rule: Use purchase, issue, return and stock records for this exact material identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### Waste flows

No direct exchanges of this type are expected; record any exception as a separate atomic card.

##### Elementary flows

No direct exchanges of this type are expected; record any exception as a separate atomic card.

#### Outputs

##### Product flows

###### Prepared chicken liver (`prepared_chicken_liver`)

Prepared chicken liver leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared chicken liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared chicken heart (`prepared_chicken_heart`)

Prepared chicken heart leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared chicken heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared chicken gizzard (`prepared_chicken_gizzard`)

Prepared chicken gizzard leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared chicken gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared turkey liver (`prepared_turkey_liver`)

Prepared turkey liver leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared turkey liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared turkey heart (`prepared_turkey_heart`)

Prepared turkey heart leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared turkey heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared turkey gizzard (`prepared_turkey_gizzard`)

Prepared turkey gizzard leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared turkey gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared goose liver, non-fatty (`prepared_goose_liver_nonfatty`)

Prepared goose liver, non-fatty leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared goose liver, non-fatty
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared goose heart (`prepared_goose_heart`)

Prepared goose heart leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared goose heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared goose gizzard (`prepared_goose_gizzard`)

Prepared goose gizzard leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared goose gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared goose fatty liver (`prepared_goose_fatty_liver`)

Prepared goose fatty liver leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared goose fatty liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared duck liver, non-fatty (`prepared_duck_liver_nonfatty`)

Prepared duck liver, non-fatty leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared duck liver, non-fatty
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared duck heart (`prepared_duck_heart`)

Prepared duck heart leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared duck heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared duck gizzard (`prepared_duck_gizzard`)

Prepared duck gizzard leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared duck gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared duck fatty liver (`prepared_duck_fatty_liver`)

Prepared duck fatty liver leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared duck fatty liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared guinea fowl liver (`prepared_guinea_fowl_liver`)

Prepared guinea fowl liver leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared guinea fowl liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared guinea fowl heart (`prepared_guinea_fowl_heart`)

Prepared guinea fowl heart leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared guinea fowl heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared guinea fowl gizzard (`prepared_guinea_fowl_gizzard`)

Prepared guinea fowl gizzard leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. This intermediate is transferred only for the same declared species-organ key as its raw input.

- Selected flow: Prepared guinea fowl gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Recovered edible liver trim (`recovered_edible_liver_trim`)

Recovered edible liver trim leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Recovered edible liver trim
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Recovered edible fatty-liver trim (`recovered_edible_fatty_liver_trim`)

Recovered edible fatty-liver trim leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Recovered edible fatty-liver trim
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Recovered edible heart trim (`recovered_edible_heart_trim`)

Recovered edible heart trim leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Recovered edible heart trim
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Recovered edible gizzard trim (`recovered_edible_gizzard_trim`)

Recovered edible gizzard trim leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Recovered edible gizzard trim
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### Waste flows

###### Gall bladder (`gall_bladder_waste`)

Gall bladder leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Gall bladder
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Bile (`bile_waste`)

Bile leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Bile
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Gizzard contents (`gizzard_contents_waste`)

Gizzard contents leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Gizzard contents
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Gizzard lining (`gizzard_lining_waste`)

Gizzard lining leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Gizzard lining
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Liver trimming waste (`liver_trimming_waste`)

Liver trimming waste leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Liver trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Fatty-liver trimming waste (`fatty_liver_trimming_waste`)

Fatty-liver trimming waste leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Fatty-liver trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Heart trimming waste (`heart_trimming_waste`)

Heart trimming waste leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Heart trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Gizzard trimming waste (`gizzard_trimming_waste`)

Gizzard trimming waste leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Gizzard trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Condemned liver (`condemned_liver_waste`)

Condemned liver leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Condemned liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Condemned fatty liver (`condemned_fatty_liver_waste`)

Condemned fatty liver leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Condemned fatty liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Condemned heart (`condemned_heart_waste`)

Condemned heart leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Condemned heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Condemned gizzard (`condemned_gizzard_waste`)

Condemned gizzard leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Condemned gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Offal-preparation wastewater (`offal_preparation_wastewater`)

Offal-preparation wastewater leaves the Offal receipt, inspection, cleaning, trimming and organ-specific preparation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Offal-preparation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### Elementary flows

No direct exchanges of this type are expected; record any exception as a separate atomic card.


### Process: Market-state conditioning, packaging, storage and dispatch (`state_conditioning_packaging`)

#### Inputs

##### Product flows

###### Prepared chicken liver (`conditioning_input_chicken_liver`)

Prepared chicken liver enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared chicken liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared chicken heart (`conditioning_input_chicken_heart`)

Prepared chicken heart enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared chicken heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared chicken gizzard (`conditioning_input_chicken_gizzard`)

Prepared chicken gizzard enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared chicken gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared turkey liver (`conditioning_input_turkey_liver`)

Prepared turkey liver enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared turkey liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared turkey heart (`conditioning_input_turkey_heart`)

Prepared turkey heart enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared turkey heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared turkey gizzard (`conditioning_input_turkey_gizzard`)

Prepared turkey gizzard enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared turkey gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared goose liver, non-fatty (`conditioning_input_goose_liver_nonfatty`)

Prepared goose liver, non-fatty enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared goose liver, non-fatty
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared goose heart (`conditioning_input_goose_heart`)

Prepared goose heart enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared goose heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared goose gizzard (`conditioning_input_goose_gizzard`)

Prepared goose gizzard enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared goose gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared goose fatty liver (`conditioning_input_goose_fatty_liver`)

Prepared goose fatty liver enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared goose fatty liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared duck liver, non-fatty (`conditioning_input_duck_liver_nonfatty`)

Prepared duck liver, non-fatty enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared duck liver, non-fatty
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared duck heart (`conditioning_input_duck_heart`)

Prepared duck heart enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared duck heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared duck gizzard (`conditioning_input_duck_gizzard`)

Prepared duck gizzard enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared duck gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared duck fatty liver (`conditioning_input_duck_fatty_liver`)

Prepared duck fatty liver enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared duck fatty liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared guinea fowl liver (`conditioning_input_guinea_fowl_liver`)

Prepared guinea fowl liver enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared guinea fowl liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared guinea fowl heart (`conditioning_input_guinea_fowl_heart`)

Prepared guinea fowl heart enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared guinea fowl heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Prepared guinea fowl gizzard (`conditioning_input_guinea_fowl_gizzard`)

Prepared guinea fowl gizzard enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Populate only the prepared-organ input that matches the declared species-organ key.

- Selected flow: Prepared guinea fowl gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated scales and a documented process mass balance for this exact material or intermediate.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_mass_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Electricity, facility supply (`conditioning_electricity`)

Electricity, facility supply enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Use a dedicated meter or a documented causal share of the reconciled facility electricity balance for this exact exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Process water (`conditioning_process_water`)

Process water enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Use a dedicated water meter or a documented process water balance for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Water ice (`conditioning_water_ice`)

Water ice enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Water ice
- Flow property / unit: Mass / kg
- Amount rule: Use purchase, issue, return and stock records for this exact material identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Heat, district supply (`conditioning_district_heat`)

Heat, district supply enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Heat, district supply
- Flow property / unit: Energy / MJ
- Amount rule: Use a dedicated heat meter or a documented utility balance for this exact steam, hot-water or heat exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Ammonia refrigerant R717 (`refrigerant_ammonia_r717`)

Ammonia refrigerant R717 enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Ammonia refrigerant R717
- Flow property / unit: Mass / kg
- Amount rule: Calculate from opening stock, purchases, equipment charge, recovery, returns and closing stock for this exact refrigerant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Carbon dioxide refrigerant R744 (`refrigerant_carbon_dioxide_r744`)

Carbon dioxide refrigerant R744 enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Carbon dioxide refrigerant R744
- Flow property / unit: Mass / kg
- Amount rule: Calculate from opening stock, purchases, equipment charge, recovery, returns and closing stock for this exact refrigerant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 1,1,1,2-Tetrafluoroethane refrigerant R134a (`refrigerant_hfc134a`)

1,1,1,2-Tetrafluoroethane refrigerant R134a enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant R134a
- Flow property / unit: Mass / kg
- Amount rule: Calculate from opening stock, purchases, equipment charge, recovery, returns and closing stock for this exact refrigerant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Refrigerant R404A (`refrigerant_r404a`)

Refrigerant R404A enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Refrigerant R404A
- Flow property / unit: Mass / kg
- Amount rule: Calculate from opening stock, purchases, equipment charge, recovery, returns and closing stock for this exact refrigerant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Refrigerant R507A (`refrigerant_r507a`)

Refrigerant R507A enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Refrigerant R507A
- Flow property / unit: Mass / kg
- Amount rule: Calculate from opening stock, purchases, equipment charge, recovery, returns and closing stock for this exact refrigerant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Refrigerant R448A (`refrigerant_r448a`)

Refrigerant R448A enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Refrigerant R448A
- Flow property / unit: Mass / kg
- Amount rule: Calculate from opening stock, purchases, equipment charge, recovery, returns and closing stock for this exact refrigerant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Refrigerant R449A (`refrigerant_r449a`)

Refrigerant R449A enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Refrigerant R449A
- Flow property / unit: Mass / kg
- Amount rule: Calculate from opening stock, purchases, equipment charge, recovery, returns and closing stock for this exact refrigerant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Propane refrigerant R290 (`refrigerant_propane_r290`)

Propane refrigerant R290 enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Propane refrigerant R290
- Flow property / unit: Mass / kg
- Amount rule: Calculate from opening stock, purchases, equipment charge, recovery, returns and closing stock for this exact refrigerant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Chlorodifluoromethane refrigerant R22 (`refrigerant_hcfc22`)

Chlorodifluoromethane refrigerant R22 enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Chlorodifluoromethane refrigerant R22
- Flow property / unit: Mass / kg
- Amount rule: Calculate from opening stock, purchases, equipment charge, recovery, returns and closing stock for this exact refrigerant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Propylene glycol coolant (`coolant_propylene_glycol`)

Propylene glycol coolant enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Propylene glycol coolant
- Flow property / unit: Mass / kg
- Amount rule: Use purchase, issue, return and stock records for this exact material identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Calcium chloride brine (`coolant_calcium_chloride_brine`)

Calcium chloride brine enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Calcium chloride brine
- Flow property / unit: Mass / kg
- Amount rule: Use purchase, issue, return and stock records for this exact material identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Corrugated paperboard box (`packaging_corrugated_paperboard_box`)

Corrugated paperboard box enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Corrugated paperboard box
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### High-density polyethylene crate (`packaging_hdpe_reusable_crate`)

High-density polyethylene crate enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: High-density polyethylene crate
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Low-density polyethylene bag (`packaging_ldpe_bag`)

Low-density polyethylene bag enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Low-density polyethylene bag
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Low-density polyethylene packaging film (`packaging_ldpe_packaging_film`)

Low-density polyethylene packaging film enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Polyamide packaging film (`packaging_polyamide_packaging_film`)

Polyamide packaging film enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Polyamide packaging film
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Expanded polystyrene insulated box (`packaging_eps_insulated_box`)

Expanded polystyrene insulated box enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Expanded polystyrene insulated box
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Polypropylene tray (`packaging_pp_tray`)

Polypropylene tray enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Polypropylene tray
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Cellulose absorbent pad (`packaging_cellulose_absorbent_pad`)

Cellulose absorbent pad enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Cellulose absorbent pad
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Polypropylene packaging strap (`packaging_pp_packaging_strap`)

Polypropylene packaging strap enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Polypropylene packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Paper label (`packaging_paper_label`)

Paper label enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Silicone-coated release paper (`packaging_silicone_release_paper`)

Silicone-coated release paper enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Silicone-coated release paper
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Wood pallet (`packaging_wood_pallet`)

Wood pallet enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Aluminium closure clip (`packaging_aluminium_closure_clip`)

Aluminium closure clip enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Aluminium closure clip
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Carbon dioxide, food grade (`packaging_carbon_dioxide`)

Carbon dioxide, food grade enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Carbon dioxide, food grade
- Flow property / unit: Mass / kg
- Amount rule: Use purchase, issue, return and stock records for this exact material identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Nitrogen, food grade (`packaging_nitrogen`)

Nitrogen, food grade enters the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Nitrogen, food grade
- Flow property / unit: Mass / kg
- Amount rule: Use purchase, issue, return and stock records for this exact material identity.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### Waste flows

No direct exchanges of this type are expected; record any exception as a separate atomic card.

##### Elementary flows

No direct exchanges of this type are expected; record any exception as a separate atomic card.

#### Outputs

##### Product flows

###### Edible offal of poultry, fresh, chilled or frozen (`reference_edible_poultry_offal`)

Edible offal of poultry, fresh, chilled or frozen leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified product exchange. This verified category-level Tiangong identity is quantified only after one poultry species, one organ identity and one market state have been fixed; it never authorizes a mixed dataset.

- Selected flow: Edible offal of poultry, fresh, chilled or frozen `c294500e-2de6-44fd-a578-a1534dafb1b4`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Fixed at 1 kg net conforming edible poultry offal for the one declared species-organ-state key; exclude packaging, retained packaging gas, free glazing ice and pallet mass.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_product_release`
- Sources: `un-cpc-3-0-2025`

##### Waste flows

###### Off-specification fresh liver (`offspec_fresh_liver`)

Off-specification fresh liver leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Record only the exact declared species represented by this rejected organ-state stream.

- Selected flow: Off-specification fresh liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Off-specification fresh fatty liver (`offspec_fresh_fatty_liver`)

Off-specification fresh fatty liver leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Record only the exact declared species represented by this rejected organ-state stream.

- Selected flow: Off-specification fresh fatty liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Off-specification fresh heart (`offspec_fresh_heart`)

Off-specification fresh heart leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Record only the exact declared species represented by this rejected organ-state stream.

- Selected flow: Off-specification fresh heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Off-specification fresh gizzard (`offspec_fresh_gizzard`)

Off-specification fresh gizzard leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Record only the exact declared species represented by this rejected organ-state stream.

- Selected flow: Off-specification fresh gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Off-specification chilled liver (`offspec_chilled_liver`)

Off-specification chilled liver leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Record only the exact declared species represented by this rejected organ-state stream.

- Selected flow: Off-specification chilled liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Off-specification chilled fatty liver (`offspec_chilled_fatty_liver`)

Off-specification chilled fatty liver leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Record only the exact declared species represented by this rejected organ-state stream.

- Selected flow: Off-specification chilled fatty liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Off-specification chilled heart (`offspec_chilled_heart`)

Off-specification chilled heart leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Record only the exact declared species represented by this rejected organ-state stream.

- Selected flow: Off-specification chilled heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Off-specification chilled gizzard (`offspec_chilled_gizzard`)

Off-specification chilled gizzard leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Record only the exact declared species represented by this rejected organ-state stream.

- Selected flow: Off-specification chilled gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Off-specification frozen liver (`offspec_frozen_liver`)

Off-specification frozen liver leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Record only the exact declared species represented by this rejected organ-state stream.

- Selected flow: Off-specification frozen liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Off-specification frozen fatty liver (`offspec_frozen_fatty_liver`)

Off-specification frozen fatty liver leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Record only the exact declared species represented by this rejected organ-state stream.

- Selected flow: Off-specification frozen fatty liver
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Off-specification frozen heart (`offspec_frozen_heart`)

Off-specification frozen heart leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Record only the exact declared species represented by this rejected organ-state stream.

- Selected flow: Off-specification frozen heart
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Off-specification frozen gizzard (`offspec_frozen_gizzard`)

Off-specification frozen gizzard leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Record only the exact declared species represented by this rejected organ-state stream.

- Selected flow: Off-specification frozen gizzard
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Waste corrugated paperboard box (`waste_corrugated_paperboard_box`)

Waste corrugated paperboard box leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Waste corrugated paperboard box
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Waste high-density polyethylene crate (`waste_hdpe_reusable_crate`)

Waste high-density polyethylene crate leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Waste high-density polyethylene crate
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Waste low-density polyethylene bag (`waste_ldpe_bag`)

Waste low-density polyethylene bag leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Waste low-density polyethylene bag
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Waste low-density polyethylene packaging film (`waste_ldpe_packaging_film`)

Waste low-density polyethylene packaging film leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Waste low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Waste polyamide packaging film (`waste_polyamide_packaging_film`)

Waste polyamide packaging film leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Waste polyamide packaging film
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Waste expanded polystyrene insulated box (`waste_eps_insulated_box`)

Waste expanded polystyrene insulated box leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Waste expanded polystyrene insulated box
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Waste polypropylene tray (`waste_pp_tray`)

Waste polypropylene tray leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Waste polypropylene tray
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Waste cellulose absorbent pad (`waste_cellulose_absorbent_pad`)

Waste cellulose absorbent pad leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Waste cellulose absorbent pad
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Waste polypropylene packaging strap (`waste_pp_packaging_strap`)

Waste polypropylene packaging strap leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Waste polypropylene packaging strap
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Waste paper label (`waste_paper_label`)

Waste paper label leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Waste paper label
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Waste silicone-coated release paper (`waste_silicone_release_paper`)

Waste silicone-coated release paper leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Waste silicone-coated release paper
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Waste wood pallet (`waste_wood_pallet`)

Waste wood pallet leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Waste wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Waste aluminium closure clip (`waste_aluminium_closure_clip`)

Waste aluminium closure clip leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Waste aluminium closure clip
- Flow property / unit: Mass / kg
- Amount rule: Use issued item counts multiplied by verified unit mass and reconcile returns, stocks and scrap for this exact material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Conditioning condensate wastewater (`conditioning_condensate_wastewater`)

Conditioning condensate wastewater leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Conditioning condensate wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Glazing wastewater (`glazing_wastewater`)

Glazing wastewater leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Glazing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Defrost wastewater (`defrost_wastewater`)

Defrost wastewater leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### Elementary flows

###### Ammonia, to air (`conditioning_ammonia_air`)

Ammonia, to air leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Carbon dioxide, fossil, to air (`conditioning_carbon_dioxide_air`)

Carbon dioxide, fossil, to air leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 1,1,1,2-Tetrafluoroethane, to air (`conditioning_hfc134a_air`)

1,1,1,2-Tetrafluoroethane, to air leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Pentafluoroethane, to air (`conditioning_hfc125_air`)

Pentafluoroethane, to air leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Pentafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 1,1,1-Trifluoroethane, to air (`conditioning_hfc143a_air`)

1,1,1-Trifluoroethane, to air leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: 1,1,1-Trifluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Difluoromethane, to air (`conditioning_hfc32_air`)

Difluoromethane, to air leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Difluoromethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### 2,3,3,3-Tetrafluoropropene, to air (`conditioning_hfo1234yf_air`)

2,3,3,3-Tetrafluoropropene, to air leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: 2,3,3,3-Tetrafluoropropene, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### trans-1,3,3,3-Tetrafluoropropene, to air (`conditioning_hfo1234ze_air`)

trans-1,3,3,3-Tetrafluoropropene, to air leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: trans-1,3,3,3-Tetrafluoropropene, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Propane, to air (`conditioning_propane_air`)

Propane, to air leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Propane, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Chlorodifluoromethane, to air (`conditioning_hcfc22_air`)

Chlorodifluoromethane, to air leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Chlorodifluoromethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Nitrogen, to air (`conditioning_nitrogen_air`)

Nitrogen, to air leaves the Market-state conditioning, packaging, storage and dispatch boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Nitrogen, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`


### Process: Cleaning, disinfection and wastewater management (`sanitation_wastewater_management`)

#### Inputs

##### Product flows

###### Electricity, facility supply (`sanitation_electricity`)

Electricity, facility supply enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Use a dedicated meter or a documented causal share of the reconciled facility electricity balance for this exact exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Process water (`sanitation_process_water`)

Process water enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Use a dedicated water meter or a documented process water balance for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Hot water (`sanitation_hot_water`)

Hot water enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Hot water
- Flow property / unit: Energy / MJ
- Amount rule: Use a dedicated heat meter or a documented utility balance for this exact steam, hot-water or heat exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Steam (`sanitation_steam`)

Steam enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Use a dedicated heat meter or a documented utility balance for this exact steam, hot-water or heat exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Sodium hydroxide (`sanitation_sodium_hydroxide`)

Sodium hydroxide enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Use issue, concentration and stock records for this exact chemical, converted to pure-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Nitric acid (`sanitation_nitric_acid`)

Nitric acid enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Use issue, concentration and stock records for this exact chemical, converted to pure-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Sodium hypochlorite (`sanitation_sodium_hypochlorite`)

Sodium hypochlorite enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Use issue, concentration and stock records for this exact chemical, converted to pure-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Peracetic acid (`sanitation_peracetic_acid`)

Peracetic acid enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Use issue, concentration and stock records for this exact chemical, converted to pure-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Hydrogen peroxide (`sanitation_hydrogen_peroxide`)

Hydrogen peroxide enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: Use issue, concentration and stock records for this exact chemical, converted to pure-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Benzalkonium chloride (`sanitation_benzalkonium_chloride`)

Benzalkonium chloride enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Benzalkonium chloride
- Flow property / unit: Mass / kg
- Amount rule: Use issue, concentration and stock records for this exact chemical, converted to pure-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Sodium carbonate (`sanitation_sodium_carbonate`)

Sodium carbonate enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Sodium carbonate
- Flow property / unit: Mass / kg
- Amount rule: Use issue, concentration and stock records for this exact chemical, converted to pure-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Phosphoric acid (`sanitation_phosphoric_acid`)

Phosphoric acid enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Phosphoric acid
- Flow property / unit: Mass / kg
- Amount rule: Use issue, concentration and stock records for this exact chemical, converted to pure-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Trisodium phosphate (`sanitation_trisodium_phosphate`)

Trisodium phosphate enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Trisodium phosphate
- Flow property / unit: Mass / kg
- Amount rule: Use issue, concentration and stock records for this exact chemical, converted to pure-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Ferric chloride (`sanitation_ferric_chloride`)

Ferric chloride enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Use issue, concentration and stock records for this exact chemical, converted to pure-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Calcium hydroxide (`sanitation_calcium_hydroxide`)

Calcium hydroxide enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Use issue, concentration and stock records for this exact chemical, converted to pure-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Anionic polyacrylamide (`sanitation_anionic_polyacrylamide`)

Anionic polyacrylamide enters the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Anionic polyacrylamide
- Flow property / unit: Mass / kg
- Amount rule: Use issue, concentration and stock records for this exact chemical, converted to pure-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### Waste flows

###### Offal-preparation wastewater (`sanitation_offal_preparation_wastewater`)

Offal-preparation wastewater enters the Cleaning, disinfection and wastewater management boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Offal-preparation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Conditioning condensate wastewater (`sanitation_conditioning_condensate`)

Conditioning condensate wastewater enters the Cleaning, disinfection and wastewater management boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Conditioning condensate wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Glazing wastewater (`sanitation_glazing_wastewater`)

Glazing wastewater enters the Cleaning, disinfection and wastewater management boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Glazing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Defrost wastewater (`sanitation_defrost_wastewater`)

Defrost wastewater enters the Cleaning, disinfection and wastewater management boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### Elementary flows

No direct exchanges of this type are expected; record any exception as a separate atomic card.

#### Outputs

##### Product flows

###### Treated process water (`treated_process_water`)

Treated process water leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Treated process water
- Flow property / unit: Volume / m3
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Recovered biogas (`recovered_biogas`)

Recovered biogas leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Recovered biogas
- Flow property / unit: Energy / MJ
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### Waste flows

###### Untreated wastewater for off-site treatment (`untreated_wastewater_offsite`)

Untreated wastewater for off-site treatment leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Untreated wastewater for off-site treatment
- Flow property / unit: Volume / m3
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Primary wastewater-treatment sludge (`primary_wastewater_sludge`)

Primary wastewater-treatment sludge leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Primary wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Biological wastewater-treatment sludge (`biological_wastewater_sludge`)

Biological wastewater-treatment sludge leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Biological wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Dissolved-air-flotation grease sludge (`daf_grease_sludge`)

Dissolved-air-flotation grease sludge leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Dissolved-air-flotation grease sludge
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Screened wastewater solids (`screened_solids`)

Screened wastewater solids leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Screened wastewater solids
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Spent cleaning solution (`spent_cleaning_solution`)

Spent cleaning solution leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Spent cleaning solution
- Flow property / unit: Volume / m3
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Waste high-density polyethylene chemical drum (`waste_hdpe_chemical_drum`)

Waste high-density polyethylene chemical drum leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Waste high-density polyethylene chemical drum
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Waste steel chemical drum (`waste_steel_chemical_drum`)

Waste steel chemical drum leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Waste steel chemical drum
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### Elementary flows

###### Chemical oxygen demand, to water (`effluent_cod`)

Chemical oxygen demand, to water leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Biochemical oxygen demand, to water (`effluent_bod`)

Biochemical oxygen demand, to water leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Biochemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Total nitrogen, to water (`effluent_total_nitrogen`)

Total nitrogen, to water leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Total nitrogen, to water
- Flow property / unit: Mass / kg
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Ammonium nitrogen, to water (`effluent_ammonium_nitrogen`)

Ammonium nitrogen, to water leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Ammonium nitrogen, to water
- Flow property / unit: Mass / kg
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Nitrate nitrogen, to water (`effluent_nitrate_nitrogen`)

Nitrate nitrogen, to water leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Nitrate nitrogen, to water
- Flow property / unit: Mass / kg
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Total phosphorus, to water (`effluent_total_phosphorus`)

Total phosphorus, to water leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Total phosphorus, to water
- Flow property / unit: Mass / kg
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Orthophosphate, to water (`effluent_orthophosphate`)

Orthophosphate, to water leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Orthophosphate, to water
- Flow property / unit: Mass / kg
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Suspended solids, to water (`effluent_suspended_solids`)

Suspended solids, to water leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Suspended solids, to water
- Flow property / unit: Mass / kg
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Animal fat, to water (`effluent_animal_fat`)

Animal fat, to water leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Animal fat, to water
- Flow property / unit: Mass / kg
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Chloride, to water (`effluent_chloride`)

Chloride, to water leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Chloride, to water
- Flow property / unit: Mass / kg
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Total dissolved solids, to water (`effluent_total_dissolved_solids`)

Total dissolved solids, to water leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Total dissolved solids, to water
- Flow property / unit: Mass / kg
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Free chlorine, to water (`effluent_free_chlorine`)

Free chlorine, to water leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Free chlorine, to water
- Flow property / unit: Mass / kg
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Methane, biogenic, to air (`wastewater_methane_air`)

Methane, biogenic, to air leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Methane, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Carbon dioxide, biogenic, to air (`wastewater_carbon_dioxide_air`)

Carbon dioxide, biogenic, to air leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Ammonia, to air (`wastewater_ammonia_air`)

Ammonia, to air leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Hydrogen sulfide, to air (`wastewater_hydrogen_sulfide_air`)

Hydrogen sulfide, to air leaves the Cleaning, disinfection and wastewater management boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Hydrogen sulfide, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`


### Process: On-site fuel combustion and utility generation (`onsite_energy_generation`)

#### Inputs

##### Product flows

###### Natural gas (`onsite_natural_gas`)

Natural gas enters the On-site fuel combustion and utility generation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Use fuel meters, invoices and stock reconciliation for this exact fuel on the declared energy basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Diesel fuel (`onsite_diesel`)

Diesel fuel enters the On-site fuel combustion and utility generation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Use fuel meters, invoices and stock reconciliation for this exact fuel on the declared energy basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Liquefied petroleum gas (`onsite_lpg`)

Liquefied petroleum gas enters the On-site fuel combustion and utility generation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Use fuel meters, invoices and stock reconciliation for this exact fuel on the declared energy basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Fuel oil (`onsite_fuel_oil`)

Fuel oil enters the On-site fuel combustion and utility generation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Fuel oil
- Flow property / unit: Energy / MJ
- Amount rule: Use fuel meters, invoices and stock reconciliation for this exact fuel on the declared energy basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Wood chips (`onsite_wood_chips`)

Wood chips enters the On-site fuel combustion and utility generation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Wood chips
- Flow property / unit: Energy / MJ
- Amount rule: Use fuel meters, invoices and stock reconciliation for this exact fuel on the declared energy basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Recovered biogas (`onsite_recovered_biogas`)

Recovered biogas enters the On-site fuel combustion and utility generation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Recovered biogas
- Flow property / unit: Energy / MJ
- Amount rule: Use fuel meters, invoices and stock reconciliation for this exact fuel on the declared energy basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fuel_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Process water (`boiler_process_water`)

Process water enters the On-site fuel combustion and utility generation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Use a dedicated water meter or a documented process water balance for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_balance`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Electricity, facility supply (`onsite_auxiliary_electricity`)

Electricity, facility supply enters the On-site fuel combustion and utility generation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Electricity, facility supply
- Flow property / unit: Energy / kWh
- Amount rule: Use a dedicated meter or a documented causal share of the reconciled facility electricity balance for this exact exchange.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Sodium hydroxide (`boiler_sodium_hydroxide`)

Sodium hydroxide enters the On-site fuel combustion and utility generation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Use issue, concentration and stock records for this exact chemical, converted to pure-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Trisodium phosphate (`boiler_trisodium_phosphate`)

Trisodium phosphate enters the On-site fuel combustion and utility generation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Trisodium phosphate
- Flow property / unit: Mass / kg
- Amount rule: Use issue, concentration and stock records for this exact chemical, converted to pure-substance-equivalent mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_inventory`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### Waste flows

No direct exchanges of this type are expected; record any exception as a separate atomic card.

##### Elementary flows

No direct exchanges of this type are expected; record any exception as a separate atomic card.

#### Outputs

##### Product flows

###### Steam (`onsite_steam_output`)

Steam leaves the On-site fuel combustion and utility generation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Use a dedicated heat meter or a documented utility balance for this exact steam, hot-water or heat exchange.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Hot water (`onsite_hot_water_output`)

Hot water leaves the On-site fuel combustion and utility generation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Hot water
- Flow property / unit: Energy / MJ
- Amount rule: Use a dedicated heat meter or a documented utility balance for this exact steam, hot-water or heat exchange.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Heat, onsite supply (`onsite_heat_output`)

Heat, onsite supply leaves the On-site fuel combustion and utility generation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Heat, onsite supply
- Flow property / unit: Energy / MJ
- Amount rule: Use a dedicated heat meter or a documented utility balance for this exact steam, hot-water or heat exchange.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Electricity (`onsite_electricity_output`)

Electricity leaves the On-site fuel combustion and utility generation boundary as one separately quantified product exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Electricity
- Flow property / unit: Energy / kWh
- Amount rule: Use a dedicated meter or a documented causal share of the reconciled facility electricity balance for this exact exchange.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### Waste flows

###### Boiler blowdown wastewater (`boiler_blowdown_wastewater`)

Boiler blowdown wastewater leaves the On-site fuel combustion and utility generation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Boiler blowdown wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use matched flow-meter, sampling, treatment and destination records for this exact wastewater or water-emission stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Spent lubricating oil (`spent_lubricating_oil`)

Spent lubricating oil leaves the On-site fuel combustion and utility generation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Spent lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Boiler ash (`boiler_ash`)

Boiler ash leaves the On-site fuel combustion and utility generation boundary as one separately quantified waste exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Boiler ash
- Flow property / unit: Mass / kg
- Amount rule: Use calibrated container weights, dispatch records, product-or-waste status and destination evidence for this exact stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_byproduct_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

##### Elementary flows

###### Carbon dioxide, fossil, to air (`onsite_carbon_dioxide_fossil_air`)

Carbon dioxide, fossil, to air leaves the On-site fuel combustion and utility generation boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Carbon dioxide, biogenic, to air (`onsite_carbon_dioxide_biogenic_air`)

Carbon dioxide, biogenic, to air leaves the On-site fuel combustion and utility generation boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Nitrogen oxides expressed as nitrogen dioxide, to air (`onsite_nitrogen_oxides_air`)

Nitrogen oxides expressed as nitrogen dioxide, to air leaves the On-site fuel combustion and utility generation boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Nitrogen oxides expressed as nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Sulfur oxides expressed as sulfur dioxide, to air (`onsite_sulfur_oxides_air`)

Sulfur oxides expressed as sulfur dioxide, to air leaves the On-site fuel combustion and utility generation boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Sulfur oxides expressed as sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Carbon monoxide, to air (`onsite_carbon_monoxide_air`)

Carbon monoxide, to air leaves the On-site fuel combustion and utility generation boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`

###### Particulate matter PM10, to air (`onsite_pm10_air`)

Particulate matter PM10, to air leaves the On-site fuel combustion and utility generation boundary as one separately quantified elementary exchange. Keep its identity, amount, origin or destination separate from every alternative exchange.

- Selected flow: Particulate matter PM10, to air
- Flow property / unit: Mass / kg
- Amount rule: Use direct monitoring or a documented calculation from collected source records for this exact elementary emission.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming edible poultry offal for the declared species-organ-state key at factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `alloc_upstream_subdivision` | linked slaughter and evisceration | Use subdivision and direct measurement before allocation wherever the organ-recovery line and records can be separated. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `alloc_upstream_joint_production` | raw organ, carcass and slaughter co-products | Retain the allocation applied by the linked slaughter dataset and disclose its co-product quantities, status, formula and reporting-period basis. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `alloc_direct_processing` | offal preparation and conditioning | Assign directly measured preparation, conditioning, packaging, storage and treatment burdens to the exact species-organ-state product before allocating any unavoidable joint burden. | `eu-pef-method-2021` |
| `alloc_co_product_status` | recovered edible trim and recovered biogas | Determine product or waste status at the actual hand-off and use only the matching product or waste exchange; never count one physical stream in both roles. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `alloc_physical_relation` | unavoidable joint outputs | If subdivision is impossible, use an evidence-backed physical causal relation only when it represents how inputs and releases change with joint output production. | `eu-pef-method-2021` |
| `alloc_economic_fallback` | remaining joint outputs | If no defensible physical relation exists, use a documented economic allocation consistent with the applicable study programme and reporting period; do not invent a default factor. | `eu-pef-method-2021` |
| `alloc_waste_no_credit` | waste streams | Assign treatment burdens to the declared hand-off without an avoided-product credit unless a downstream model explicitly requires and documents that scenario. | `eu-pef-method-2021` |
| `alloc_internal_recovery` | treated water, biogas, steam, hot water, heat and electricity | Treat internal recovery as a linked transfer and do not allocate or credit the same recovered quantity twice. | `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_raw_offal_records` | `offal_receipt_preparation` | exact raw species-organ receipt | lot, supplier and scale records | lot_id; slaughter_source; poultry_species; organ_identity; fatty_liver_status; receipt_time; product_temperature; gross_mass; tare_mass; accepted_mass; rejected_mass | calibrated batch scale plus identity and inspection review | kg | each lot | full reporting period | all represented receipts | aggregate only identical species-organ keys and reconcile dispositions | calibration; receipt; inspection; source dataset |
| `cp_process_mass_balance` | `offal_receipt_preparation`; `state_conditioning_packaging` | organ inputs, intermediates, trim and product | production and scale records | batch_id; variant_key; input_mass; prepared_mass; trim_mass; reject_mass; glazing_mass; inventory_change | calibrated scales and batch records | kg | each batch or shift | full reporting period | all represented lines | reconcile each species-organ-state key separately before normalization | calibration; batch sheet; balance exception log |
| `cp_product_release` | `state_conditioning_packaging` | conforming reference product | lot-release records | lot_id; species; organ_identity; market_state; net_mass; product_temperature; glazing_status; package; release_decision | calibrated final scale plus identity, temperature and quality review | kg | each lot | full reporting period | all reference-product lots | sum only released lots sharing the same species-organ-state key | calibration; temperature log; release certificate |
| `cp_energy_records` | all processes | electricity | meter and utility records | meter_id; timestamp; opening_reading; closing_reading; source; destination | dedicated meter or documented causal share from reconciled site meters | kWh | continuous or billing period | full reporting period | all represented equipment | aggregate electricity separately by process and reconcile imports, generation and transfers | meter calibration; invoice; reconciliation |
| `cp_heat_records` | all processes | steam, hot water and heat | heat-meter and utility records | meter_id; carrier_identity; temperature; pressure; opening_reading; closing_reading; source; destination | dedicated heat meter or documented utility balance | MJ | continuous or shift | full reporting period | all represented utility circuits | retain every carrier separately and reconcile internal transfers | meter calibration; utility balance |
| `cp_water_balance` | all processes | process water | water-meter records | meter_id; source; destination; opening_reading; closing_reading; recirculation; discharge | dedicated meters and documented water balance | m3 | continuous or daily | full reporting period | all represented water circuits | separate external make-up, internal reuse and discharge | meter calibration; balance reconciliation |
| `cp_material_inventory` | applicable processes | ice, coolant and packaging gas | purchase and stock records | material_identity; concentration; opening_stock; purchases; issues; returns; closing_stock | material-specific stock reconciliation | kg | each issue and reporting period | full reporting period | all represented stores and dosing points | calculate each exact material separately | invoice; specification; stock record |
| `cp_refrigerant_balance` | `state_conditioning_packaging` | each refrigerant and emitted component | equipment and service records | equipment_id; refrigerant_identity; blend_composition; opening_stock; purchases; charge; recovery; returns; closing_stock; service_loss | reporting-period refrigerant mass balance | kg | each service event and reporting period | full reporting period | every represented refrigeration circuit | calculate each refrigerant input and emitted component separately | service invoice; cylinder weight; composition specification |
| `cp_packaging_inventory` | `state_conditioning_packaging` | each packaging material and scrap | bill of materials, issue and scrap records | material_identity; units_issued; unit_mass; returns; stock_change; scrap_mass; reusable_cycles | item count multiplied by verified unit mass plus stock reconciliation | kg | each batch and reporting period | full reporting period | every represented packaging line | calculate every material and matching scrap stream separately | supplier specification; scale check; issue record |
| `cp_chemical_inventory` | sanitation and utilities | each named chemical | issue, concentration and stock records | chemical_identity; formulation; active_fraction; opening_stock; purchases; issues; closing_stock | stock reconciliation converted to pure-substance-equivalent mass | kg | each issue and reporting period | full reporting period | all represented chemical stores | no aggregation across chemical identities | safety data sheet; concentration test; stock reconciliation |
| `cp_waste_byproduct_records` | all processes | each co-product and waste | weighed dispatch and treatment records | stream_identity; variant_key; product_or_waste_status; container_tare; gross_mass; net_mass; destination; date | calibrated scale or verified container mass | kg | each transfer | full reporting period | every declared stream and destination | retain each physical identity and status separately | weigh ticket; consignment note; destination evidence |
| `cp_wastewater_records` | applicable processes | wastewater, sludge and water emissions | flow-meter and laboratory records | stream_identity; volume; sample_time; concentration; parameter; treatment_route; sludge_mass; destination | matched flow measurement and representative sampling | m3; kg | continuous flow and risk-based sampling | full reporting period | every discharge and treatment route | calculate each load from matched volume and concentration; reconcile transfers and sludge | meter calibration; laboratory report; permit record |
| `cp_air_emissions` | refrigeration, treatment and energy | each direct air emission | monitoring, mass-balance and service records | emission_identity; source; activity; concentration; flow_rate; duration; composition; calculated_loss | direct monitoring or documented calculation from collected source records | kg | continuous, campaign or service event as applicable | full reporting period | every direct emission source | calculate and report each elementary flow separately | monitoring report; service record; calculation worksheet |
| `cp_fuel_inventory` | `onsite_energy_generation` | each fuel | fuel meter, invoice and stock records | fuel_identity; quantity; unit; energy_basis; opening_stock; purchases; issues; closing_stock | meter or stock reconciliation by fuel | MJ | each delivery and reporting period | full reporting period | every combustion unit | calculate consumption separately for every fuel identity | invoice; tank calibration; fuel specification |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_variant_lock` | all records | Construct one immutable key from poultry species, organ identity and market state; reject a record set containing more than one value on any axis. | identity and release records | one conforming species-organ-state key | `un-cpc-3-0-2025`; `eu-pef-method-2021` |
| `calc_reference_normalization` | all inventory rows | Divide the reporting-period amount for one atomic exchange by released net product mass for the same species-organ-state key. | exchange amount; released net product mass; variant key | amount per 1 kg reference product | `eu-pef-method-2021` |
| `calc_organ_mass_balance` | receipt and preparation | Reconcile exact raw-organ mass with prepared organ, edible trim, waste, wastewater-carried material and inventory change for the same species-organ key. | receipt mass; prepared mass; trim; waste; wastewater load; stock change | reconciled organ mass balance | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `calc_state_balance` | conditioning and packaging | Reconcile prepared organ, ice or water additions, released product, off-specification product, drainage, glazing and inventory change for the selected market state. | prepared mass; water; ice; released mass; rejects; stock change | reconciled state-specific product balance | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `calc_internal_transfer` | intermediates, wastewater and utilities | Match sending-process output to receiving-process input for the same identity and period and remove any duplicate external exchange. | linked output; linked input; stock change | reconciled internal transfer | `eu-pef-method-2021` |
| `calc_refrigerant_loss` | refrigeration | Calculate each refrigerant loss from stock and service records; calculate every emitted blend component using documented composition. | refrigerant balance; blend composition | refrigerant input and component-specific air releases | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `calc_packaging_mass` | packaging | Multiply issued units by verified unit mass, adjust for returns and stock change, and retain every material and scrap identity separately. | units; unit mass; returns; stocks; scrap | material-specific packaging inputs and wastes | `eu-pef-method-2021` |
| `calc_wastewater_load` | water emissions | Multiply matched discharged volume by representative concentration for each declared parameter with unit conversion documented. | effluent volume; parameter concentration | parameter-specific mass release | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `calc_combustion_emissions` | on-site combustion | Use direct monitoring or a documented calculation tied to every fuel inventory and operating period; retain pollutant identities separately. | fuel inventory; monitoring; operating time; composition | pollutant-specific air releases | `ec-jrc-sa-bref-jrc135916` |
| `calc_allocation` | linked slaughter and joint outputs | Apply the declared hierarchy only after subdivision and direct measurement; disclose data, formula and reporting-period basis. | joint inventory; output quantities; physical or economic basis | allocated inventory by exact product | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all exchanges | Preserve exact flow identity, direction, type, unit and process; unresolved non-reference UUIDs remain blank and manifest-listed. | inventory audit and UUID review |
| `dq_variant_lock` | all records | Retain one immutable species-organ-state key through receipt, preparation, release, normalization and publication. | lot genealogy and key-cardinality check |
| `dq_primary_data` | foreground processing | Use company-specific records for the represented plant, technology and reporting period. | meters, scales, invoices, logs and laboratory reports |
| `dq_upstream_traceability` | raw organ | Retain slaughter source, lot, species, organ identity, transfer mass and upstream allocation disclosure. | receipt and linked-dataset records |
| `dq_completeness` | inventory | Cover exact materials, energy, products, co-products, wastes and direct releases; document non-applicability for every conditional card. | completeness matrix and process walk-through |
| `dq_temporal` | reporting period | Cover a representative operating period and disclose shutdowns, abnormal events, stock changes and seasonal effects. | reporting-period reconciliation |
| `dq_mass_balance` | preparation and conditioning | Reconcile raw organ, prepared product, edible trim, reject, water or ice, wastewater-carried material and stock changes without a combined residual flow. | batch and period mass balances |
| `dq_refrigeration` | chilling, freezing and storage | Retain equipment-specific refrigerant identity, blend composition, service records and component-loss calculation. | refrigeration service file |
| `dq_market_state` | reference product | Retain state criterion, product temperature, glazing status, storage duration and release decision. | temperature log and release certificate |
| `dq_packaging` | packaged product | Retain a variant-specific packaging bill of materials and material-specific scrap records. | bill of materials and issue records |
| `dq_wastewater` | water management | Match representative concentration samples to measured volumes and disclose treatment or off-site hand-off. | laboratory, meter and consignment records |
| `dq_transparency` | published dataset | Disclose exclusions, allocation, data gaps, proxies, unresolved identities and calculation methods. | data-quality report |

## 9. Validation Rules

| rule_id | Applies to | Rule | Sources |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | Use Edible offal of poultry, fresh, chilled or frozen `c294500e-2de6-44fd-a578-a1534dafb1b4`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` and kg. |  |
| `val_variant_lock` | reference dataset | Require exactly one poultry species, exactly one specifically named organ or fatty liver, and exactly one fresh, chilled or frozen market state. | `un-cpc-3-0-2025`; `eu-pef-method-2021` |
| `val_species_scope` | poultry species | Accept chicken, turkey, goose, duck or guinea fowl; reject mixed species and non-poultry species. | `un-cpc-3-0-2025` |
| `val_organ_scope` | organ identity | Require a concrete organ name; if the exact organ lacks an inventory card, add one atomic row and obtain identity review before dataset use; reject “offal”, “organ mix” and “other offal” as selected identities. | `un-cpc-3-0-2025`; `eu-pef-method-2021` |
| `val_market_state` | product state | Require one declared state criterion and measured release temperature; prohibit combining fresh, chilled and frozen lots. | `un-cpc-3-0-2025`; `ec-jrc-sa-bref-jrc135916` |
| `val_atomic_inventory` | all inventory rows | Require one concrete exchange and a non-empty explanatory paragraph per card; reject collection labels and material, utility, chemical, packaging, waste or pollutant selectors. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_uuid_closure` | identity | Permit only dual-kernel-confirmed UUIDs and require every blank non-reference UUID to have the same row_id in manifest review metadata. |  |
| `val_no_inferred_quantities` | amounts | Require foreground records, calculated values or the fixed reference amount; reject inference-only defaults and unsupported ranges. | `eu-pef-method-2021` |
| `val_mass_balance` | receipt through release | Reconcile raw organ with product, co-products, wastes, water or ice additions, discharged loads and stock changes for the same variant key and period. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_upstream_allocation` | linked slaughter dataset | Require disclosed subdivision or allocation method, co-product status, source quantities, formula and period. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_energy_water_balance` | utilities | Reconcile imported, generated and internally transferred electricity, steam, hot water, heat, fuels and water without double counting. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_refrigerant_balance` | refrigeration | Require each installed refrigerant and every emitted component to be separately identified and reconciled to service records. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_packaging` | packaged product | Match every packaging input, scrap stream and declared package format while excluding packaging from reference-product mass. | `eu-pef-method-2021` |
| `val_wastewater` | wastewater | Match measured wastewater volumes to internal transfer, treatment, off-site hand-off and parameter-specific discharge loads. | `ec-jrc-sa-bref-jrc135916` |
| `val_co_product_status` | recovered trim and biogas | Require one product or waste status and one destination for every physical stream; reject duplicate product-and-waste accounting. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-method-2021` |
| `val_allocation` | joint outputs | Require the declared subdivision and allocation hierarchy, input data, formula and reporting-period basis. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Factory-gate foreground processing dataset for one exact edible-poultry-offal species-organ-state variant |
| downstream_use | `secondary_dataset`; `background_dataset`; product-footprint and life-cycle model construction |
| allowed_use | Systems matching the declared poultry species, organ identity, market state, slaughter source, plant, technology, geography, reporting period, packaging and allocation |
| excluded_use | Mixed species; mixed organs; mixed market states; mammalian offal; non-edible organs; whole carcasses; meat cuts; cooked or preserved offal; post-gate distribution, preparation, use or end-of-life |
| required_metadata | PCR id; CPC reference; UUID chain; species; organ identity; fatty-liver status; market state; product temperature; glazing; net mass; slaughter source; plant; period; preparation; refrigeration; packaging; treatment; allocation |
| required_quality_disclosure | primary-data coverage; scale and meter quality; mass, energy, water and refrigerant balances; sampling; non-applicability; proxies; unresolved UUIDs; allocation; uncertainty |
| update_trigger | change in species, organ identity, market state, source slaughter allocation, preparation, refrigeration, fuel, chemical, package, treatment, plant, geography, period, evidence or UUID |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | Dataset (`dataset`) | United Nations Statistics Division, Central Product Classification Version 3.0, official classification entry and retained raw file `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv`. https://unstats.un.org/unsd/classifications/Econ/CPC | Exact CPC 21160 title, covered poultry species, fatty-liver inclusion and fresh, chilled or frozen scope |
| `ec-jrc-sa-bref-jrc135916` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916. https://doi.org/10.2760/18199 | Organ handling and preparation, energy, water, refrigeration, cleaning, co-products, waste, wastewater and direct emissions |
| `eu-pef-method-2021` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279, consolidated Product Environmental Footprint method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific bill of materials, company-specific manufacturing data, life-cycle inventory completeness, allocation, calculation, data quality and transparency |
