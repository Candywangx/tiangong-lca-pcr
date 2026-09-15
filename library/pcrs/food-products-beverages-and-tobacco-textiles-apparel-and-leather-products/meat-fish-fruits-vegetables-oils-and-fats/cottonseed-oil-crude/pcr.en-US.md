---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cottonseed-oil-crude
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Cottonseed oil, crude

## 1. Scope and Applicability

This PCR covers the foreground production of bulk crude cottonseed oil from non-planting cottonseed at an oil mill. The gate-to-gate foreground starts with cottonseed received from a cotton gin and ends with clarified, unrefined cottonseed oil ready for storage, dispatch, or downstream refining. Mechanical screw pressing, prepress-solvent extraction, and direct or expander-assisted solvent extraction are route alternatives; a data package shall declare one actual route and shall not model every route simultaneously.

The scope includes seed receiving and cleaning, residual-lint removal, dehulling, kernel conditioning, flaking and cooking, route-specific pressing or hexane extraction, solvent recovery and meal desolventizing where applicable, crude-oil clarification, on-site heat generation where applicable, and on-site wastewater treatment where applicable. It excludes cotton cultivation, cotton ginning before mill receipt, transport to the mill unless brought into the study scope, chemical or physical refining, bleaching, deodorisation, hydrogenation, packaging, distribution, use, and end of life.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.cottonseed-oil-crude |
| classification_refs | CPC 3.0: 21681 — Cottonseed oil, crude |
| covered_products | Crude cottonseed oil obtained by mechanical pressing, prepress-solvent extraction, or direct/expander-assisted solvent extraction, before refining |
| excluded_products | Refined cottonseed oil; hydrogenated or otherwise chemically modified cottonseed oil; blended vegetable oil; cottonseed meal, hulls, and linters sold as the reference product |
| representative_product | Bulk clarified crude cottonseed oil at the oil-mill gate |
| production_route | Declared actual route: mechanical screw pressing; prepress followed by hexane extraction; or direct/expander-assisted hexane extraction |
| market_state | Unrefined bulk oil after clarification and before refining, with actual moisture, insoluble impurities, and residual solvent status disclosed |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Production of crude cottonseed oil for downstream refining or a declared technical use |
| How much | 1 kg of crude cottonseed oil |
| How well | Clarified but unrefined oil, measured at the oil-mill gate; the dataset shall disclose moisture, insoluble impurities, and residual solvent status rather than assume a refined-oil specification |
| How long or cycle | One production accounting period represented by the foreground data, normally a continuous campaign or annual period |
| reference_flow_link | One kilogram of dispatchable crude cottonseed oil after route-specific extraction and clarification |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Cottonseed oil, crude — Tiangong UUID unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | extraction route; direct-extraction, expander, or prepress configuration; cottonseed receipt condition and moisture basis; product moisture and insoluble-impurity basis; residual solvent status; geography; technology and equipment vintage; reporting period; co-product treatment and allocation choice; solvent recovery configuration; purchased versus on-site steam/heat; wastewater-treatment boundary |

When constructing a foreground data package, every item listed in `Required qualifiers` shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and mass-balance product, co-product, residue, and waste rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize the reporting-period inventory to 1 kg of clarified crude cottonseed oil. Record whether each mass is as-received, wet, dry, or solvent-bearing; do not mix bases without a documented conversion. |
| `internal_transfer_reconciliation` | Prepared meats, pressed cake, miscella, solvent-laden meal, and intermediate crude-oil transfers | Mass | kg | Internal transfer rows shall reconcile between consecutive unit processes for the declared route and shall not be counted again as external inputs or outputs. |
| `energy_accounting` | Electricity, steam, natural gas, and fuel oil | Energy or mass as metered | kWh, MJ, or kg | Preserve invoice or meter units. Convert only with a documented factor; for fuels report quantity, lower heating value, and whether combustion is inside the foreground boundary. |
| `water_accounting` | Process water, boiler feed water, and wastewater | Mass or volume | kg or m3 | Keep supplied water, reused water, condensate, and discharged wastewater separate. State density assumptions when converting volume to mass. |
| `hexane_balance` | Solvent-extraction and desolventizing processes | Mass | kg | Reconcile opening inventory, purchases, closing inventory, recovered solvent, solvent retained in products or wastewater, and measured or calculated losses; do not use a soybean factor as cottonseed evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Cottonseed received at the oil mill after ginning, with receipt mass, moisture, foreign matter, and residual lint condition declared |
| starting_condition_role | Gate-to-gate foreground starting input; cultivation and ginning burdens arrive through an upstream cottonseed dataset |
| product_classification_scope | Crude cottonseed oil only; CPC 3.0 subclass 21681 is mapping context and does not broaden the PCR to refined vegetable oils |
| recursive_input_rule | If crude cottonseed oil of the same category is introduced for rework or blending, record it as a separate external input with its upstream dataset and do not recursively recreate its production inside this foreground package |
| upstream_dataset_requirement | Link received cottonseed, purchased energy, water, hexane, cleaning agent, and other external inputs to representative upstream datasets; disclose unresolved proxies |
| disclosure | Declare the extraction route, included unit processes, internal transfers, on-site utilities, solvent recovery, wastewater treatment, co-product destinations, allocation method, exclusions, and any cut-offs |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground_start_and_end | Start at cottonseed receipt from the gin and end at clarified crude cottonseed oil at the mill gate; keep cultivation, ginning, and downstream refining outside this foreground boundary unless explicitly added and disclosed. | `unsd-cpc-3-0-structure-2025`; `us-epa-ap42-vegetable-oil-background-1995` |
| `boundary_rule_2` | route_selection | Model only the declared mechanical, prepress-solvent, or direct/expander-solvent route. Solvent extraction and desolventizing are not applicable to a mechanical-only route. | `us-epa-ap42-vegetable-oil-background-1995`; `zia-cottonseed-oil-review-2021` |
| `boundary_rule_3` | solvent_route | When hexane extraction is used, include extraction, oil/solvent evaporation and stripping, meal desolventizing, condensation and recovery, make-up solvent, wastewater containing solvent, and vented or fugitive hexane. | `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019` |
| `boundary_rule_4` | utilities_and_treatment | Include on-site steam or heat generation and on-site wastewater treatment only when operated by the reporting facility; otherwise represent purchased steam/heat and external treatment as product or waste-service inputs. | `eu-bat-food-drink-milk-2019`; `eu-pef-method-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `seed_preparation` | Cottonseed receiving, cleaning, delinting, and dehulling | required | Always included | Foreground raw-material preparation | Received cottonseed mass |
| `conditioning_flaking` | Conditioning, flaking, and cooking | required | Always included; equipment sequence shall be declared | Foreground extraction preparation | Prepared cottonseed-meat mass |
| `mechanical_pressing` | Mechanical pressing | conditional | Include for mechanical-only and prepress-solvent routes | Foreground oil extraction | Conditioned cottonseed-meat mass |
| `hexane_extraction` | Hexane extraction | conditional | Include for prepress-solvent and direct/expander-solvent routes | Foreground oil extraction | Extractor feed mass |
| `desolventizing_stripping` | Meal desolventizing and oil stripping | conditional | Include whenever hexane extraction is included | Foreground solvent recovery | Miscella and solvent-laden meal mass |
| `crude_oil_clarification` | Crude-oil clarification and storage transfer | required | Always included for the route-specific crude-oil stream | Foreground finishing | Clarified crude cottonseed oil mass |
| `onsite_heat_generation` | On-site steam or process-heat generation | conditional | Include only for steam or heat generated within the facility boundary | Foreground utility supply | Generated steam or useful heat |
| `onsite_wastewater_treatment` | On-site wastewater treatment | conditional | Include only when wastewater is treated within the facility boundary | Foreground waste treatment | Wastewater received for treatment |

### Process: Cottonseed receiving, cleaning, delinting, and dehulling (`seed_preparation`)

#### Inputs

##### Product flows

###### Cottonseed received from the gin (`received_cottonseed`)

Record non-planting cottonseed crossing the mill gate, including receipt moisture and foreign matter.

- Selected flow: Cottonseed, other `5ec72013-512e-4bb6-a5e6-648551f35d9d`
- Flow property / unit: Mass / kg
- Amount rule: Net received mass from calibrated weighbridge or scale records, adjusted only for separately documented rejected loads
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_preparation_records`
- Sources: `us-epa-ap42-vegetable-oil-background-1995`

###### Electricity for seed preparation (`seed_cleaning_electricity`)

Record metered electricity used by conveyors, screens, aspirators, saw delinting, hullers, beaters, and dust-control equipment.

- Selected flow: Electricity, medium voltage — Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: Metered or allocated electricity for seed preparation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_preparation_records`
- Sources: `eu-bat-food-drink-milk-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cotton linters recovered during delinting (`cotton_linters`)

Record marketable linters separated after seed receipt as a co-product.

- Selected flow: Cotton linters `6587eccc-106f-4941-be4a-afdbe46df8b5`
- Flow property / unit: Mass / kg
- Amount rule: Measured dry or as-produced linter mass with basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_preparation_records`
- Sources: `us-epa-ap42-vegetable-oil-background-1995`

###### Cottonseed hulls recovered during dehulling (`cottonseed_hulls`)

Record hulls leaving seed preparation for sale, feed use, energy use, or another declared destination.

- Selected flow: Cottonseed hulls — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured hull mass by destination and moisture basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_preparation_records`
- Sources: `us-epa-ap42-vegetable-oil-background-1995`

##### Waste flows

###### Foreign matter removed during cleaning (`seed_cleaning_rejects`)

Record sticks, stones, metal, dirt, and non-marketable seed-cleaning rejects as one site waste stream only when managed together.

- Selected flow: Cottonseed-cleaning rejects — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured reject mass sent to the declared treatment or disposal destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_seed_preparation_records`
- Sources: `us-epa-ap42-vegetable-oil-processing-1995`

##### Elementary flows

###### Dust released to air from seed handling (`seed_dust_air`)

Record measured or calculated particulate matter released after installed controls from receiving, cleaning, delinting, and dehulling.

- Selected flow: Particulate matter, to air — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Stack measurements plus documented fugitive estimate for the seed-preparation process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emission_records`
- Sources: `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

### Process: Conditioning, flaking, and cooking (`conditioning_flaking`)

#### Inputs

##### Product flows

###### Prepared cottonseed meats (`prepared_cottonseed_meats`)

Record the internal kernel stream from seed preparation; reconcile this transfer without adding upstream burden twice.

- Selected flow: Prepared cottonseed meats — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Internal transfer mass from dehulling to conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `us-epa-ap42-vegetable-oil-background-1995`

###### Electricity for conditioning and flaking (`conditioning_electricity`)

Record electricity used by flaking rolls, cookers, expanders when present, drives, and controls.

- Selected flow: Electricity, medium voltage — Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: Metered or allocated electricity for conditioning, flaking, cooking, and declared expansion
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `eu-bat-food-drink-milk-2019`

###### Process water added during conditioning (`conditioning_process_water`)

Record water directly added to control moisture during conditioning or cooking.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered or batch-record water addition, excluding recirculated condensate recorded separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `us-epa-ap42-vegetable-oil-background-1995`

###### Steam injected during conditioning (`conditioning_steam`)

Record purchased or internally transferred steam only when steam conditioning or cooking is used.

- Selected flow: Steam — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Metered steam delivered to the conditioner or cooker; mark not applicable when no steam is used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `us-epa-ap42-vegetable-oil-background-1995`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned and flaked cottonseed meats (`conditioned_cottonseed_meats`)

Record the internal prepared material sent to the declared pressing or direct-solvent route.

- Selected flow: Conditioned cottonseed meats — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Internal transfer mass to pressing or extraction, including declared expander treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- Sources: `us-epa-ap42-vegetable-oil-background-1995`; `zia-cottonseed-oil-review-2021`

##### Waste flows

##### Elementary flows

### Process: Mechanical pressing (`mechanical_pressing`)

#### Inputs

##### Product flows

###### Conditioned meats sent to the screw press (`press_feed`)

Record the internal press feed only for mechanical-only or prepress-solvent routes.

- Selected flow: Conditioned cottonseed meats — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Internal transfer mass entering the press
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_records`
- Sources: `us-epa-ap42-vegetable-oil-background-1995`; `zia-cottonseed-oil-review-2021`

###### Electricity for mechanical pressing (`pressing_electricity`)

Record electricity used by screw presses, feeders, pumps, and local controls.

- Selected flow: Electricity, medium voltage — Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: Metered or equipment-allocated electricity for pressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_records`
- Sources: `eu-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Pressed crude cottonseed oil (`pressed_crude_oil`)

Record the unclarified internal oil stream sent to crude-oil clarification.

- Selected flow: Pressed crude cottonseed oil — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured oil mass leaving the press and associated screening equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_records`
- Sources: `us-epa-ap42-vegetable-oil-background-1995`

###### Pressed cottonseed cake (`pressed_cottonseed_cake`)

Record press cake as a marketable co-product for a mechanical-only route or as internal extractor feed for a prepress-solvent route; do not count the same mass in both roles.

- Selected flow: Pressed cottonseed cake — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured press-cake mass split by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_pressing_records`
- Sources: `us-epa-ap42-vegetable-oil-background-1995`; `zia-cottonseed-oil-review-2021`

##### Waste flows

##### Elementary flows

### Process: Hexane extraction (`hexane_extraction`)

#### Inputs

##### Product flows

###### Cottonseed flakes for direct solvent extraction (`direct_extraction_feed`)

Record conditioned flakes or expanded material only for a direct/expander-solvent route.

- Selected flow: Conditioned cottonseed meats — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Internal transfer mass entering the extractor from conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `us-epa-ap42-vegetable-oil-background-1995`; `zia-cottonseed-oil-review-2021`

###### Press cake for prepress-solvent extraction (`prepress_extraction_feed`)

Record press cake entering the extractor only for a prepress-solvent route.

- Selected flow: Pressed cottonseed cake — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Internal transfer mass entering the extractor from pressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `us-epa-ap42-vegetable-oil-background-1995`; `zia-cottonseed-oil-review-2021`

###### Make-up n-hexane (`extraction_hexane`)

Record purchased n-hexane entering the closed solvent circuit; recovered solvent is an internal loop, not a new external input.

- Selected flow: n-Hexane — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Purchases plus opening inventory minus closing inventory, reconciled with recovered solvent and losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance_records`
- Sources: `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

###### Electricity for extraction and solvent circulation (`extraction_electricity`)

Record electricity used by the extractor, pumps, conveyors, and solvent-recovery auxiliaries assigned to extraction.

- Selected flow: Electricity, medium voltage — Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: Metered or equipment-allocated electricity for the extraction process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `eu-bat-food-drink-milk-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cottonseed oil miscella (`cottonseed_oil_miscella`)

Record the internal oil-and-hexane solution transferred to evaporation and stripping.

- Selected flow: Cottonseed oil miscella — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balance-calculated miscella transfer mass and composition
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_extraction_records`
- Sources: `us-epa-ap42-vegetable-oil-processing-1995`

###### Solvent-laden cottonseed meal (`solvent_laden_cottonseed_meal`)

Record extracted solids transferred to the desolventizer-toaster, with retained-solvent and moisture basis declared.

- Selected flow: Solvent-laden cottonseed meal — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured extractor solids output and sampled solvent content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_extraction_records`
- Sources: `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

##### Waste flows

##### Elementary flows

###### Hexane/VOC released during extraction (`extraction_hexane_air`)

Record extractor vents and documented fugitive losses assigned to extraction.

- Selected flow: n-Hexane, to air — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured vent emissions plus equipment-leak estimate, reconciled to the site solvent balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance_records`
- Sources: `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

### Process: Meal desolventizing and oil stripping (`desolventizing_stripping`)

#### Inputs

##### Product flows

###### Miscella sent to evaporation and stripping (`miscella_to_stripping`)

Record the internal miscella transferred from extraction.

- Selected flow: Cottonseed oil miscella — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Reconciled internal transfer mass and oil/hexane composition
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_desolventizing_records`
- Sources: `us-epa-ap42-vegetable-oil-processing-1995`

###### Solvent-laden meal sent to desolventizing (`meal_to_desolventizing`)

Record the internal meal transfer from extraction.

- Selected flow: Solvent-laden cottonseed meal — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Reconciled internal transfer mass and retained-solvent content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_desolventizing_records`
- Sources: `eu-bat-food-drink-milk-2019`

###### Steam for desolventizing and stripping (`desolventizing_steam`)

Record direct and indirect steam used by evaporators, stripper, and desolventizer-toaster.

- Selected flow: Steam — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Metered steam delivered to desolventizing and stripping
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_desolventizing_records`
- Sources: `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

###### Electricity for desolventizing and solvent recovery (`desolventizing_electricity`)

Record electricity for evaporators, vacuum equipment, condensers, pumps, meal dryers, and coolers assigned to this process.

- Selected flow: Electricity, medium voltage — Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: Metered or equipment-allocated electricity for desolventizing, stripping, drying, cooling, and solvent recovery
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_desolventizing_records`
- Sources: `eu-bat-food-drink-milk-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Extracted crude cottonseed oil (`extracted_crude_oil`)

Record desolventized internal crude oil transferred to clarification.

- Selected flow: Extracted crude cottonseed oil — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured stripped crude-oil mass at transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_desolventizing_records`
- Sources: `us-epa-ap42-vegetable-oil-processing-1995`

###### Desolventized cottonseed meal (`cottonseed_meal`)

Record meal leaving drying and cooling as a co-product, with moisture and residual-solvent basis declared.

- Selected flow: Cottonseed Meal `a5d3b1ef-9fde-4393-af7b-5ec33451551d`
- Flow property / unit: Mass / kg
- Amount rule: Measured meal mass by sale or use destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_desolventizing_records`
- Sources: `us-epa-ap42-vegetable-oil-background-1995`

##### Waste flows

###### Solvent-bearing condensate wastewater (`solvent_condensate_wastewater`)

Record aqueous condensate leaving phase separation or distillation for treatment.

- Selected flow: Solvent-bearing wastewater — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Metered wastewater mass with measured hexane content
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

##### Elementary flows

###### Hexane/VOC released during desolventizing and recovery (`desolventizing_hexane_air`)

Record main-vent, meal-dryer, meal-cooler, storage, and fugitive hexane losses assigned to this process without double counting extraction losses.

- Selected flow: n-Hexane, to air — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured and calculated emissions reconciled to the site solvent balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_solvent_balance_records`
- Sources: `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

### Process: Crude-oil clarification and storage transfer (`crude_oil_clarification`)

#### Inputs

##### Product flows

###### Pressed crude-oil transfer (`pressed_oil_to_clarification`)

Record pressed oil entering clarification only for mechanical-only or prepress-solvent routes.

- Selected flow: Pressed crude cottonseed oil — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Reconciled internal transfer mass from pressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_records`
- Sources: `us-epa-ap42-vegetable-oil-background-1995`

###### Extracted crude-oil transfer (`extracted_oil_to_clarification`)

Record stripped oil entering clarification only for solvent routes.

- Selected flow: Extracted crude cottonseed oil — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Reconciled internal transfer mass from desolventizing and stripping
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_records`
- Sources: `us-epa-ap42-vegetable-oil-processing-1995`

###### Electricity for clarification and transfer (`clarification_electricity`)

Record electricity for screens, settling or centrifugation, filtration, pumps, and storage transfer.

- Selected flow: Electricity, medium voltage — Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: Metered or equipment-allocated electricity for crude-oil clarification and transfer
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_records`
- Sources: `eu-pef-method-2021`

###### Process water for clarification equipment (`clarification_process_water`)

Record process water that contacts oil or clarification equipment, excluding general sanitation water recorded separately.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered water entering clarification equipment or oil-contact washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_records`
- Sources: `eu-bat-food-drink-milk-2019`

###### Alkaline cleaning agent (`alkaline_cleaning_agent`)

Record the actual purchased alkaline cleaning formulation used on oil-contact or process equipment; do not include refining alkali under this row.

- Selected flow: Alkaline cleaning agent — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Issue or purchase records allocated to the crude-oil production line
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_records`
- Sources: `eu-pef-method-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Clarified crude cottonseed oil (`crude_cottonseed_oil_reference`)

Record the reference product after clarification and before any refining step.

- Selected flow: Cottonseed oil, crude — Tiangong UUID unresolved
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg reference output; reporting-period dispatchable output is normalized to this amount
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Source rule (`source_rule`)
- Collection protocol: `cp_clarification_records`
- Sources: `unsd-cpc-3-0-structure-2025`

###### Cottonseed oil foots from clarification (`cottonseed_oil_foots`)

Record separated oil-bearing fines or foots by actual destination. If a site calls this stream soapstock, disclose that local name; do not merge it with alkali-refining soapstock outside this PCR boundary.

- Selected flow: Cottonseed oil foots — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured foots mass sent back to meal, recovered, sold, treated, or disposed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clarification_records`
- Sources: `us-epa-ap42-vegetable-oil-background-1995`

##### Waste flows

###### Oily wastewater from clarification and cleaning (`clarification_wastewater`)

Record wastewater leaving clarification and equipment cleaning for on-site or external treatment.

- Selected flow: Oily wastewater — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Metered discharge mass with destination and oil/solids content documented
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-bat-food-drink-milk-2019`

##### Elementary flows

### Process: On-site steam or process-heat generation (`onsite_heat_generation`)

#### Inputs

##### Product flows

###### Natural gas burned on site (`natural_gas_fuel`)

Record natural gas only when used in an on-site boiler or direct heater within the foreground boundary.

- Selected flow: Natural gas — Tiangong UUID unresolved
- Flow property / unit: Energy / MJ
- Amount rule: Metered fuel quantity converted with documented lower heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_generation_records`
- Sources: `eu-bat-food-drink-milk-2019`

###### Fuel oil burned on site (`fuel_oil_fuel`)

Record fuel oil as a separate alternative fuel when actually burned; do not combine it with natural gas.

- Selected flow: Fuel oil — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Tank or purchase records corrected for opening and closing stock
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_heat_generation_records`
- Sources: `eu-bat-food-drink-milk-2019`

###### Boiler feed water (`boiler_feed_water`)

Record externally supplied make-up water entering on-site steam generation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Metered boiler make-up water net of returned condensate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_generation_records`
- Sources: `eu-bat-food-drink-milk-2019`

###### Electricity for on-site heat generation (`heat_generation_electricity`)

Record boiler-house electricity for pumps, fans, controls, and fuel handling.

- Selected flow: Electricity, medium voltage — Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: Metered or equipment-allocated boiler-house electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_generation_records`
- Sources: `eu-bat-food-drink-milk-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Steam generated on site (`generated_steam`)

Record steam transferred internally to conditioning, desolventizing, stripping, or other declared users.

- Selected flow: Steam — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Metered generated steam net of blowdown and distribution losses
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_heat_generation_records`
- Sources: `eu-bat-food-drink-milk-2019`

##### Waste flows

##### Elementary flows

###### Fossil carbon dioxide from fuel combustion (`fossil_carbon_dioxide_air`)

Record fossil carbon dioxide released from on-site fuel combustion.

- Selected flow: Carbon dioxide, fossil, to air — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Direct measurement or fuel-specific calculation from collected fuel use and documented carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emission_records`
- Sources: `eu-pef-method-2021`

###### Carbon monoxide from fuel combustion (`carbon_monoxide_air`)

Record carbon monoxide released from the actual boiler or direct heater.

- Selected flow: Carbon monoxide, to air — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured emission or calculation from collected fuel use and a documented equipment-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emission_records`
- Sources: `eu-pef-method-2021`

###### Nitrogen oxides from fuel combustion (`nitrogen_oxides_air`)

Record nitrogen oxides released from the actual boiler or direct heater.

- Selected flow: Nitrogen oxides, to air — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured emission or calculation from collected fuel use and a documented equipment-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emission_records`
- Sources: `eu-pef-method-2021`

###### Sulfur dioxide from fuel combustion (`sulfur_dioxide_air`)

Record sulfur dioxide from the actual fuel sulfur content; mark not applicable only with evidence that no sulfur-bearing fuel is burned.

- Selected flow: Sulfur dioxide, to air — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured emission or sulfur balance from collected fuel quantity and sulfur content
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emission_records`
- Sources: `eu-pef-method-2021`

###### Particulate matter from fuel combustion (`combustion_particulate_air`)

Record particulate matter emitted after controls from the on-site boiler or direct heater.

- Selected flow: Particulate matter, to air — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured stack emission or calculation from collected fuel use and a documented equipment-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emission_records`
- Sources: `eu-pef-method-2021`

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Electricity for wastewater treatment (`wastewater_treatment_electricity`)

Record electricity used by on-site equalisation, separation, aeration, pumping, and sludge handling.

- Selected flow: Electricity, medium voltage — Tiangong UUID unresolved
- Flow property / unit: Energy / kWh
- Amount rule: Metered or equipment-allocated wastewater-treatment electricity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-bat-food-drink-milk-2019`

##### Waste flows

###### Solvent-bearing wastewater received for treatment (`solvent_wastewater_to_treatment`)

Record the internal wastewater transfer from solvent recovery when that route applies.

- Selected flow: Solvent-bearing wastewater — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Reconciled internal transfer mass and pollutant load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019`

###### Oily wastewater received for treatment (`oily_wastewater_to_treatment`)

Record the internal wastewater transfer from clarification and cleaning.

- Selected flow: Oily wastewater — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Reconciled internal transfer mass and pollutant load
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-bat-food-drink-milk-2019`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Treated industrial wastewater (`treated_wastewater`)

Record treated effluent leaving the foreground boundary, with receiving destination and monitored pollutant loads.

- Selected flow: Treated industrial wastewater — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Metered effluent mass or volume with density basis and pollutant concentrations
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-bat-food-drink-milk-2019`

###### Industrial wastewater-treatment sludge (`wastewater_sludge`)

Record dewatered or wet sludge leaving treatment, with solids basis and destination declared.

- Selected flow: Industrial wastewater-treatment sludge — Tiangong UUID unresolved
- Flow property / unit: Mass / kg
- Amount rule: Measured sludge mass with dry-solids fraction and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg crude cottonseed oil
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-bat-food-drink-milk-2019`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | route_and_unit_processes | First subdivide seed preparation, conditioning, extraction, clarification, utilities, and treatment using meters, batch records, equipment operating time, or another documented causal key. Do not allocate burdens from route steps that are not operated. | `eu-pef-method-2021` |
| `allocation_rule_2` | residual_common_burdens | For the attributional baseline, after subdivision allocate residual common foreground burdens by dry mass among crude cottonseed oil and marketable cotton linters, hulls, press cake, and meal leaving the system. Waste streams receive no co-product share. Record moisture conversions and all allocation factors. | `eu-pef-method-2021` |
| `allocation_rule_3` | system_expansion_alternative | System expansion may replace the mass-allocation baseline only when the study goal requires it and a transparent, quality-matched displaced-product model exists for every credited co-product. Report the substituted product, substitution ratio, geography, quality adjustment, and sensitivity result; do not mix system expansion and allocation for the same burden. | `eu-pef-method-2021` |
| `allocation_rule_4` | foots_and_internal_recycling | Treat foots returned to meal and recovered hexane returned to extraction as internal loops. Allocate or credit only net external outputs, and disclose any foots sold or sent to waste treatment. | `us-epa-ap42-vegetable-oil-background-1995`; `eu-pef-method-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_seed_preparation_records` | `seed_preparation` | cottonseed, electricity, linters, hulls, rejects | weighbridge, scale, meter, production log | receipt mass; moisture; foreign matter; electricity; linter mass; hull mass; reject mass | calibrated instruments and reconciled production records | kg; kWh | each load or shift, aggregated monthly | representative continuous campaign or at least 12 months | all seed-preparation equipment serving the product | sum external flows and reconcile prepared-kernel transfer by mass | calibration certificates; weigh tickets; meter mapping; reconciliation |
| `cp_conditioning_records` | `conditioning_flaking` | meats, water, steam, electricity | transfer scale, flowmeter, steam meter, electricity meter, batch log | feed and output mass; moisture; water; steam; electricity; expander status | direct metering or documented equipment allocation | kg; kWh | shift or batch | same reporting period as reference product | all conditioning, flaking, cooking, and expansion equipment | sum by declared route and reconcile internal transfers | meter calibration; operating log; moisture tests |
| `cp_pressing_records` | `mechanical_pressing` | press feed, electricity, oil, cake | scale, electricity meter, press log | feed mass; electricity; pressed oil; cake mass; cake destination | direct measurement or documented equipment allocation | kg; kWh | shift or batch | route operating period | all presses serving the declared route | aggregate only periods when pressing operates | scale calibration; press log; mass balance |
| `cp_extraction_records` | `hexane_extraction` | extractor feeds, electricity, miscella, solvent-laden meal | transfer measurement, electricity meter, composition sample | feed mass by route; electricity; miscella mass and composition; meal mass and solvent content | direct measurement and laboratory sampling | kg; kWh; mass fraction | shift or batch | solvent-route operating period | extractor and assigned auxiliaries | reconcile oil, solids, water, and solvent transfers | meter calibration; laboratory methods; solvent balance |
| `cp_desolventizing_records` | `desolventizing_stripping` | miscella, meal, steam, electricity, crude oil, meal output | transfer scale, steam and electricity meters, lab sample | internal inputs; steam; electricity; crude oil; meal; moisture; residual solvent | direct measurement and laboratory sampling | kg; kWh; mass fraction | shift or batch | solvent-route operating period | evaporators, stripper, desolventizer-toaster, dryer, cooler, condensers | aggregate route-specific operation and reconcile internal transfers | calibration; lab QA; production balance |
| `cp_solvent_balance_records` | `hexane_extraction`; `desolventizing_stripping` | make-up hexane and air loss | tank gauge, purchases, flowmeter, stack test, leak survey | opening stock; purchases; closing stock; recovered hexane; retained solvent; wastewater solvent; vent emissions; fugitive estimate | site solvent mass balance supported by measurements | kg | daily or monthly balance; annual reconciliation | full solvent-route reporting period | all solvent storage and solvent-using/recovery equipment | purchases plus opening stock minus closing stock minus retained/recovered transfers equals loss, with uncertainty disclosed | tank calibration; purchase records; stack test; leak survey; closure error |
| `cp_clarification_records` | `crude_oil_clarification` | oil transfers, reference product, electricity, water, cleaning agent, foots | tank or scale records, meters, issue logs, lab tests | input oil; dispatchable crude oil; electricity; water; cleaning agent; foots; moisture; insoluble impurities; residual solvent | direct measurement and representative sampling | kg; kWh; mass fraction | batch or shift | full product reporting period | clarification, filtration, tanks, and assigned cleaning | reconcile incoming oil to crude oil, foots, wastewater, and stock change | tank calibration; laboratory QA; cleaning issue records; mass balance |
| `cp_heat_generation_records` | `onsite_heat_generation` | fuels, feed water, electricity, steam | fuel meter or tank, invoices, water and electricity meters, steam meter | natural gas; fuel oil; lower heating value; water; electricity; steam; condensate return; blowdown | direct measurement and stock reconciliation | MJ; kg; kWh | daily or monthly | full reporting period | on-site boilers and direct heaters serving foreground production | allocate only after metered subdivision where feasible | meter calibration; fuel certificates; boiler log; steam balance |
| `cp_combustion_emission_records` | `onsite_heat_generation` | combustion emissions | stack measurements or fuel-specific calculation | fuel quantity; carbon and sulfur content; stack concentration and flow; operating hours; emission factors | direct monitoring or documented calculation from collected activity data | kg | permit or monitoring frequency and annual aggregation | full reporting period | each boiler or direct heater in scope | sum measured/calculated emissions without double counting | stack-test report; fuel analysis; calculation workbook |
| `cp_wastewater_records` | `desolventizing_stripping`; `crude_oil_clarification` | wastewater | flowmeter, tank record, laboratory analysis | flow; oil and grease; suspended solids; hexane where applicable; destination | continuous or batch flow measurement and representative sampling | kg or m3; concentration | daily or batch | full operating period | all in-scope wastewater sources | aggregate mass and pollutant loads by source and destination | flowmeter calibration; chain of custody; laboratory QA |
| `cp_wastewater_treatment_records` | `onsite_wastewater_treatment` | treated effluent, electricity, sludge | influent/effluent meters, electricity meter, sludge scale, lab tests | influent; effluent; electricity; sludge mass; dry solids; pollutant concentrations; destination | direct measurement and laboratory analysis | kg; m3; kWh; concentration | daily, batch, or permit frequency | full treatment operating period | on-site wastewater-treatment plant | reconcile influent, effluent, sludge, evaporation, and stock change | calibration; permit reports; lab QA; treatment balance |
| `cp_air_emission_records` | `seed_preparation` | process dust | stack test, bag-filter/cyclone monitoring, fugitive survey | concentration; gas flow; operating time; control status; fugitive estimate | direct monitoring and documented calculation | kg | monitoring frequency and annual aggregation | full operating period | receiving, cleaning, delinting, dehulling, and meal handling assigned to this PCR | sum controlled and fugitive emissions by source | stack-test report; control inspection; calculation workbook |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all external inventory rows | reporting-period row amount / reporting-period clarified crude cottonseed oil mass | collected row amount; reference product mass | amount per 1 kg crude cottonseed oil | `eu-pef-method-2021` |
| `calc_internal_mass_balance` | every unit process | opening stock + inputs = closing stock + products + co-products + wastes + measured releases + reported unaccounted difference | transfer, stock, product, waste, and emission records | process mass-balance closure and discrepancy | `eu-pef-method-2021` |
| `calc_hexane_loss` | solvent route | opening hexane + purchases - closing hexane - net recovered inventory - quantified solvent retained in products/wastewater = total hexane loss; partition measured sources and report the residual as fugitive/unresolved | solvent records, samples, vent data | hexane make-up and loss per reference flow | `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019` |
| `calc_fuel_energy` | on-site heat generation | measured fuel quantity × documented lower heating value | fuel quantity; lower heating value | fuel energy in MJ per reference flow | `eu-bat-food-drink-milk-2019` |
| `calc_allocation_mass` | residual common burdens | burden × dry mass of selected marketable output / total dry mass of all selected marketable outputs | common burden; output wet masses; moisture fractions | allocated burden and allocation factor | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product and route | Demonstrate that the output is crude cottonseed oil rather than refined oil and identify the actual extraction route and solvent configuration. | product specification or dispatch record; process flow diagram; route declaration |
| `dq_temporal` | all foreground data | Use one consistent reporting period that covers representative operation, shutdowns, start-ups, route changes, and seasonal campaigns; disclose exclusions. | dated logs; production calendar; reporting-period reconciliation |
| `dq_completeness` | mass, energy, solvent, water, co-products, wastes, and emissions | Account for every listed important flow or document why its atomic row is not applicable to the declared technology. | completeness matrix; signed not-applicable justification; mass and utility balances |
| `dq_measurement` | meters, scales, tanks, and laboratory results | Retain instrument identity, calibration or verification status, sampling method, detection limits, and unit conversions. | calibration records; laboratory QA/QC; calculation workbook |
| `dq_representativeness` | upstream and secondary datasets | Report technological, geographical, and temporal representativeness and identify all proxies, especially cottonseed supply, electricity, fuels, hexane, and waste treatment. | dataset metadata; proxy register; data-quality assessment |
| `dq_allocation` | co-products | Retain unallocated totals, subdivision keys, dry-mass conversions, allocation factors, destinations, and any system-expansion sensitivity model. | allocation workbook; sales or dispatch records; moisture tests; sensitivity results |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_flow | Fail validation if the reference output is refined cottonseed oil, if the reference product UUID is represented by the known refined-oil UUID, or if the output is not measured in kg on a declared mass basis. | `unsd-cpc-3-0-structure-2025` |
| `validation_rule_2` | route_consistency | Fail validation if mechanical-only data include hexane extraction/desolventizing burdens, or if a declared solvent route omits hexane make-up, recovery, wastewater, and air-loss accounting. | `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019` |
| `validation_rule_3` | inventory_completeness | Require separate atomic rows for cottonseed, electricity, steam, each fuel, process water, hexane, cleaning agent, linters, hulls, meal, foots, wastewater, sludge, hexane/VOC, dust, and each reported combustion emission when applicable. | `eu-pef-method-2021`; `us-epa-ap42-vegetable-oil-processing-1995` |
| `validation_rule_4` | balances | Require disclosed closure for process mass balances, the site solvent balance on solvent routes, water/wastewater balance, and fuel-to-energy calculation. Flag unexplained discrepancies rather than forcing them into the reference product. | `us-epa-ap42-vegetable-oil-processing-1995`; `eu-bat-food-drink-milk-2019` |
| `validation_rule_5` | allocation | Require one declared attributional mass-allocation result after subdivision, or one fully documented system-expansion alternative; fail if burdens are left unassigned or the same co-product receives both allocation and substitution credit. | `eu-pef-method-2021` |
| `validation_rule_6` | quantitative_ranges | Treat all amount ranges as unresolved for this candidate PCR until at least two independent original sources with compatible cottonseed-oil route, boundary, unit, and normalization basis are verified; do not infer a range from a single point or from soybean, rapeseed, or sunflower BAT values. | `us-epa-ap42-vegetable-oil-background-1995`; `eu-bat-food-drink-milk-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground unit-process data package for crude cottonseed oil production, publishable after review as a secondary_dataset or background_dataset |
| downstream_use | Product flow, process dataset, and lifecyclemodel construction for systems requiring crude cottonseed oil at the mill gate |
| allowed_use | Attributional modelling with declared mass allocation; system-expansion scenarios when fully documented; route-specific benchmarking that does not imply unsupported quantitative ranges |
| excluded_use | Refined cottonseed oil; generic vegetable oil without identity disclosure; comparative assertions across routes without aligned boundaries and data quality; automatic use of unresolved UUIDs or ranges |
| required_metadata | Geography; reporting period; cottonseed receipt condition; extraction route; technology; product moisture and impurities; residual solvent status; process coverage; energy supply; solvent recovery; wastewater boundary; co-product destinations; allocation method; upstream dataset identities |
| required_quality_disclosure | Foreground coverage; measurement and calculation split; mass/solvent/water closure; missing-flow justifications; proxy list; allocation factors; uncertainty and detection limits; unresolved reference-product and inventory UUIDs; absence of source-backed ranges |
| update_trigger | New exact public Tiangong crude-cottonseed-oil flow; material route or equipment change; revised official BAT/PEF method; two compatible quantitative sources enabling a range; changed solvent, energy, co-product, or treatment practice; review finding |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-structure-2025` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0 structure, code 21681, https://unstats.un.org/unsd/classifications/Meetings/UNCEISC2023/8-3_Background3_CPC3_Structure.pdf (accessed 2026-08-24) | Official product-category identity and exclusion of refined cottonseed oil |
| `us-epa-ap42-vegetable-oil-background-1995` | official_guidance | U.S. EPA, Background Report, AP-42 Section 9.11.1, Vegetable Oil Processing, November 1995, https://www.epa.gov/sites/default/files/2020-10/documents/b9s11-1.pdf (accessed 2026-08-24) | Cottonseed-specific cleaning, delinting, dehulling, conditioning, flaking, pressing, prepress-solvent extraction, meal, and foots process decomposition; evidence limitations |
| `us-epa-ap42-vegetable-oil-processing-1995` | official_guidance | U.S. EPA, AP-42 Section 9.11.1, Vegetable Oil Processing, November 1995, https://www.epa.gov/sites/default/files/2020-10/documents/c9s11-1.pdf (accessed 2026-08-24) | Solvent extraction, evaporation, stripping, desolventizing, recovery, wastewater, dust, VOC/hexane sources, and site solvent-balance method |
| `eu-bat-food-drink-milk-2019` | standard | Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, especially oilseed processing and vegetable oil refining, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj/eng (accessed 2026-08-24) | Energy and water monitoring, seed/meal dust, solvent-recovery configuration, hexane-loss accounting, and wastewater management; non-cottonseed numeric BAT levels are not used as ranges |
| `eu-pef-method-2021` | official_guidance | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated English text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (accessed 2026-08-24) | Company-specific foreground data, completeness, data quality, multifunctionality hierarchy, subdivision, allocation, and system expansion |
| `zia-cottonseed-oil-review-2021` | literature | Zia, M. A. et al., “Physicochemical features, functional characteristics, and health benefits of cottonseed oil: a review,” Brazilian Journal of Biology 82, DOI: 10.1590/1519-6984.243511, https://www.scielo.br/j/bjb/a/yQYp7FmKD5bbJzMqxm3Zs6x/?format=pdf&lang=en (accessed 2026-08-24) | Corroboration of mechanical screw pressing, prepress-solvent extraction, and expander-solvent route alternatives only; not used for LCA ranges |
