---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-goat-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of goat, frozen

## 1. Scope and Applicability

This PCR governs foreground data packages for frozen goat meat classified exactly as CPC 21136. It covers the facility operations from accepted live goats at receiving through slaughter, exsanguination, skinning, evisceration, standard carcass dressing and cutting, pre-chilling, freezing, packaging, frozen holding, quality release, cleaning, and conditional on-site wastewater treatment.

The reference product is net conforming frozen goat meat at the facility gate. Fresh or chilled goat meat and edible offal are excluded from the reference product. Goat farming and inbound transport are upstream; distribution after the facility gate, retail, use, and end-of-life are downstream.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-goat-frozen` |
| classification_refs | CPC 3.0: 21136, exact |
| covered_products | Meat of goat in the frozen market state, released as conforming product at the slaughter or meat-processing facility gate |
| excluded_products | Fresh or chilled goat meat; edible goat offal; meat from species other than goat; retail or prepared meal products |
| representative_product | Net frozen goat-meat cuts from slaughtered goats, excluding packaging mass |
| production_route | Receiving; slaughter and dressing; carcass cutting; pre-chilling and freezing; cold-system operation; packaging and release; hygiene; conditional on-site wastewater treatment |
| market_state | Frozen |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net conforming frozen goat meat classified as CPC 21136 |
| How much | 1 kg |
| How well | Frozen and released to the applicable product specification; excludes edible offal and packaging mass |
| How long or cycle | One production lot through facility-gate quality release |
| reference_flow_link | Exact public Tiangong Product flow at state 100 and version 01.01.000 |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Meat of goat, frozen `cf1026b3-d517-4896-b54b-0ba4e919a40b` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CPC 21136; goat species; frozen market state; net product mass; production site; production period; freezing technology; frozen-storage duration; packaging composition reported separately |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine released net conforming product mass on calibrated scales. |
| `mu_packaging_excluded` | Reference product and packaging | Mass | kg | Exclude packaging mass from reference product mass and record each packaging component separately. |
| `mu_physical_mass` | Live goats, carcasses, meat, co-products, and solid wastes | Mass | kg | Use measured wet or net mass as appropriate and declare moisture or dry-matter basis where it affects interpretation. |
| `mu_electricity` | Electricity | Energy | kWh | Use calibrated meter readings and retain the meter boundary and allocation driver. |
| `mu_thermal_energy` | Purchased steam, purchased hot water, and each on-site fuel | Energy | MJ | Convert measured carrier quantity with period-matched physical-property records and prevent duplicate heat accounting. |
| `mu_water_volume` | Water and wastewater | Volume | m3 | Use metered volume and keep routine, high-organic-load, defrost, condensate, sewer, reuse, and direct-discharge streams distinct. |
| `mu_direct_release_mass` | Direct releases to air or water | Mass | kg | Calculate substance or monitored-parameter mass from matched measured activity and concentration or a verified factor. |
| `mu_refrigerant_mass` | Refrigerant make-up and loss | Mass | kg | Reconcile each refrigerant species and circuit independently. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted live goats cross the receiving boundary after inbound transport ends |
| starting_condition_role | Foreground starting condition |
| product_classification_scope | Exact CPC 21136 frozen goat meat |
| recursive_input_rule | Declare any CPC 21136 intermediate input origin and prevent recursive counting of the same production |
| upstream_dataset_requirement | Model goat farming and inbound transport in separate upstream datasets with disclosed geography and period |
| disclosure | State the facility, lot period, slaughter and cutting configuration, freezing technology, storage duration, heat route, refrigerant species, packaging BoM, wastewater destination, and on-site treatment decision |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | foreground system | Start at accepted live goats entering facility receiving after the inbound transport service ends. | `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_upstream` | upstream activities | Model goat farming and inbound transport in separate upstream datasets; do not place them in this foreground inventory. | `eu-2021-2279-environmental-footprint` |
| `boundary_core` | foreground processes | Include receiving, slaughter and dressing, carcass cutting, pre-chilling and freezing, cold-system operation, packaging, frozen holding, release, and cleaning. | `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_end` | foreground system | End at 1 kg net conforming CPC 21136 frozen goat meat released at the facility gate, with packaging mass excluded. | `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_downstream` | downstream activities | Exclude distribution after the facility gate, retail, use, and end-of-life from this foreground inventory. | `eu-2021-2279-environmental-footprint` |
| `boundary_wwtp` | on-site wastewater treatment | Include on-site treatment only when operated inside the reporting facility boundary; otherwise record each wastewater transfer to the receiving system. | `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_cpc` | product identity | Exclude fresh or chilled goat meat and edible goat offal from the reference product; record any edible offal output separately. | `un-cpc-3-0-structure-2025` |
| `boundary_completeness` | all foreground exchanges | Do not apply a category cut-off to an exchange known to occur; record it atomically or disclose a verified absence. | `eu-2021-2279-environmental-footprint` |
| `boundary_recursive` | same-category intermediate input | If frozen goat meat from CPC 21136 is introduced as an intermediate input, declare its origin and prevent the same production from being counted recursively. | `eu-2021-2279-environmental-footprint` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `live_goat_receiving` | Live-goat receiving and acceptance | `required` | Every facility-gate production lot | Starts foreground collection after inbound transport ends | per 1 kg net conforming frozen goat meat at the facility gate |
| `slaughter_dressing` | Slaughter, exsanguination, skinning, and evisceration | `required` | Every accepted production lot | Converts accepted live goats to dressed carcasses and separately identified outputs | per 1 kg net conforming frozen goat meat at the facility gate |
| `carcass_cutting` | Carcass dressing and cutting | `required` | Every production lot | Produces goat-meat cuts for freezing and separates cutting outputs | per 1 kg net conforming frozen goat meat at the facility gate |
| `chilling_freezing` | Pre-chilling, freezing, and cold-system operation | `required` | Every production lot | Freezes conforming goat meat and records the refrigeration circuit through frozen storage | per 1 kg net conforming frozen goat meat at the facility gate |
| `packaging_release` | Packaging, frozen holding, and facility-gate release | `required` | Every released production lot | Packages and releases the CPC 21136 reference product | per 1 kg net conforming frozen goat meat at the facility gate |
| `cleaning_disinfection` | Cleaning, disinfection, and on-site thermal utility operation | `required` | Every production lot and scheduled hygiene cycle | Records hygiene resources, cleaning wastewater, and direct combustion releases | per 1 kg net conforming frozen goat meat at the facility gate |
| `onsite_wastewater_treatment` | On-site slaughterhouse wastewater treatment | `conditional` | Only when the facility operates treatment inside the foreground boundary | Treats separately identified wastewater and records treatment outputs | per 1 kg net conforming frozen goat meat at the facility gate |

### Process: Live-goat receiving and acceptance (`live_goat_receiving`)

#### Inputs

##### Product flows

###### Live goat entering receiving (`receiving_live_goat`)

The animal input crosses the foreground boundary when the inbound transport service ends at facility receiving.

- Selected flow: Live goat
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated-scale live mass entering the receiving area for accepted and rejected animals.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for every production lot.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Receiving electricity (`receiving_electricity`)

Electricity operates receiving, inspection, lighting, gates, and directly associated equipment within this process.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the receiving-area electricity meter; calculate a lot share only from documented meter readings and an auditable allocation driver.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed by receiving.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Receiving water (`receiving_water`)

Water crosses the process boundary for animal watering and receiving-area operations before slaughter.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered water supplied to receiving and lairage for the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required when facility water is supplied to receiving.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted live-goat transfer (`receiving_accepted_live_goat`)

This intermediate output transfers only accepted animals to the slaughter process and is not the CPC 21136 reference product.

- Selected flow: Accepted live goat
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated-scale mass released from receiving to slaughter for the accepted lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for every accepted production lot.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Lairage manure (`receiving_goat_manure`)

Manure removed from lairage is a specific solid waste stream and must not be hidden in wastewater.

- Selected flow: Goat manure from lairage
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass dispatched from lairage, using weighed containers or container tare records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required when manure is separately collected.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Lairage wastewater (`receiving_lairage_wastewater`)

Wash water leaving the receiving and lairage area is recorded as one specific wastewater stream.

- Selected flow: Lairage wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the dedicated wastewater meter or calculate volume from metered wash water less documented retained water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when this wastewater leaves the receiving process.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows



### Process: Slaughter, exsanguination, skinning, and evisceration (`slaughter_dressing`)

#### Inputs

##### Product flows

###### Accepted live-goat input (`slaughter_live_goat_input`)

This intermediate input connects receiving to the slaughter line.

- Selected flow: Accepted live goat
- Flow property / unit: Mass / kg
- Amount rule: Use the measured accepted-live-goat transfer from receiving without adding inbound transport mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for every production lot.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Slaughter-line electricity (`slaughter_electricity`)

Electricity serves stunning, hoisting, conveyors, pumps, ventilation, and line equipment in this process.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the slaughter-line submeter; if shared, calculate the lot share from metered consumption and documented equipment activity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed by the slaughter line.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Slaughter process water (`slaughter_water`)

This water input crosses the slaughter-process boundary and excludes cleaning water assigned to the separate cleaning process.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered water supplied to exsanguination, skinning, evisceration, carcass washing, and directly associated line operations.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required when water is supplied to slaughter operations.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dressed carcass transfer (`slaughter_dressed_carcass`)

The dressed carcass is the intermediate product transferred to carcass dressing and cutting.

- Selected flow: Dressed goat carcass
- Flow property / unit: Mass / kg
- Amount rule: Record hot dressed-carcass mass on calibrated rail or platform scales before cutting.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for every production lot.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered blood (`slaughter_recovered_blood`)

Blood is a co-product only when collection quality and the receiving destination establish product status.

- Selected flow: Recovered goat blood
- Flow property / unit: Mass / kg
- Amount rule: Record weighed blood collected hygienically for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on documented productive use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered hide (`slaughter_recovered_hide`)

The hide is a co-product only when sale or transfer records establish productive use.

- Selected flow: Goat hide for recovery
- Flow property / unit: Mass / kg
- Amount rule: Record weighed hides accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on documented productive use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered slaughter fat (`slaughter_recovered_fat`)

Separately recovered fat is a co-product when destination records demonstrate use.

- Selected flow: Recovered goat slaughter fat
- Flow property / unit: Mass / kg
- Amount rule: Record weighed slaughter fat accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on documented productive use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Edible liver co-product (`slaughter_edible_liver`)

Edible liver is outside the CPC 21136 reference product and is recorded as a separate co-product.

- Selected flow: Goat liver for human consumption
- Flow property / unit: Mass / kg
- Amount rule: Record weighed liver passed for human consumption and dispatched as edible offal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on food-safety acceptance and documented dispatch.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Edible heart co-product (`slaughter_edible_heart`)

Edible heart is outside the CPC 21136 reference product and is recorded as a separate co-product.

- Selected flow: Goat heart for human consumption
- Flow property / unit: Mass / kg
- Amount rule: Record weighed heart passed for human consumption and dispatched as edible offal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on food-safety acceptance and documented dispatch.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Edible kidney co-product (`slaughter_edible_kidneys`)

Edible kidneys are outside the CPC 21136 reference product and are recorded as a separate co-product.

- Selected flow: Goat kidneys for human consumption
- Flow property / unit: Mass / kg
- Amount rule: Record weighed kidneys passed for human consumption and dispatched as edible offal.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on food-safety acceptance and documented dispatch.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Waste blood (`slaughter_waste_blood`)

This row is mutually exclusive with recovered goat blood for the same physical quantity.

- Selected flow: Waste goat blood
- Flow property / unit: Mass / kg
- Amount rule: Record weighed blood rejected from productive use or calculate it from the measured collection vessel balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected hide waste (`slaughter_rejected_hide`)

Rejected hide is kept separate from hide accepted for productive use.

- Selected flow: Rejected goat hide
- Flow property / unit: Mass / kg
- Amount rule: Record weighed hides sent to waste treatment after rejection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Waste slaughter fat (`slaughter_waste_fat`)

Waste fat is kept separate from fat accepted for productive use.

- Selected flow: Waste goat slaughter fat
- Flow property / unit: Mass / kg
- Amount rule: Record weighed slaughter fat sent to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Condemned liver (`slaughter_condemned_liver`)

Condemned liver is a specific waste stream and must not be combined with edible liver.

- Selected flow: Condemned goat liver
- Flow property / unit: Mass / kg
- Amount rule: Record weighed liver condemned and dispatched for waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on condemnation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Condemned heart (`slaughter_condemned_heart`)

Condemned heart is a specific waste stream and must not be combined with edible heart.

- Selected flow: Condemned goat heart
- Flow property / unit: Mass / kg
- Amount rule: Record weighed heart condemned and dispatched for waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on condemnation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Condemned kidneys (`slaughter_condemned_kidneys`)

Condemned kidneys are a specific waste stream and must not be combined with edible kidneys.

- Selected flow: Condemned goat kidneys
- Flow property / unit: Mass / kg
- Amount rule: Record weighed kidneys condemned and dispatched for waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on condemnation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Stomach contents (`slaughter_stomach_contents`)

Stomach contents are recorded separately from intestinal contents and wastewater.

- Selected flow: Goat stomach contents
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass from emptied stomachs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required when stomachs are emptied on site.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Intestinal contents (`slaughter_intestinal_contents`)

Intestinal contents are recorded separately from stomach contents and wastewater.

- Selected flow: Goat intestinal contents
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass from emptied intestines.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required when intestines are emptied on site.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Slaughter wastewater (`slaughter_high_load_wastewater`)

This wastewater carries the concentrated aqueous load from bleeding, evisceration, and carcass washing.

- Selected flow: High-organic-load slaughter wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record a dedicated flow meter or calculate volume from metered slaughter water and documented retained water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when the stream leaves slaughter for treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

###### Slaughter ammonia release (`slaughter_ammonia_to_air`)

Ammonia is recorded as one substance-specific direct air release from the slaughter area.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate released mass from measured exhaust flow and measured ammonia concentration for the applicable operating period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_air_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on a measured direct release.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Slaughter hydrogen sulfide release (`slaughter_hydrogen_sulfide_to_air`)

Hydrogen sulfide is recorded separately from ammonia and odour observations.

- Selected flow: Hydrogen sulfide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate released mass from measured exhaust flow and measured hydrogen sulfide concentration for the applicable operating period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_air_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on a measured direct release.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`



### Process: Carcass dressing and cutting (`carcass_cutting`)

#### Inputs

##### Product flows

###### Dressed carcass input (`cutting_dressed_carcass_input`)

This intermediate input connects slaughter to dressing and cutting.

- Selected flow: Dressed goat carcass
- Flow property / unit: Mass / kg
- Amount rule: Use the measured dressed-carcass transfer from slaughter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for every production lot.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Cutting electricity (`cutting_electricity`)

Electricity serves saws, conveyors, ventilation, and directly associated cutting equipment.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the cutting-area submeter; calculate a lot share only from metered consumption and documented equipment activity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed by cutting.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Cutting process water (`cutting_water`)

This water excludes the separate cleaning-process water inventory.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered water supplied directly to carcass dressing and cutting.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required when water is supplied to cutting.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Goat meat for freezing (`cutting_goat_meat_for_freezing`)

This intermediate product excludes edible offal and packaging mass.

- Selected flow: Goat meat cuts before freezing
- Flow property / unit: Mass / kg
- Amount rule: Record net mass of conforming goat-meat cuts released to pre-chilling and freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for every production lot.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Food-grade bones (`cutting_food_grade_bones`)

Food-grade bones are a separate co-product and are not included in the reference product mass.

- Selected flow: Food-grade goat bones
- Flow property / unit: Mass / kg
- Amount rule: Record weighed bones dispatched to a documented food-grade productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on documented productive use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered trimming fat (`cutting_recovered_fat`)

Recovered trimming fat is a separate co-product and is not included in the reference product mass.

- Selected flow: Recovered goat trimming fat
- Flow property / unit: Mass / kg
- Amount rule: Record weighed trimming fat dispatched to a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on documented productive use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Bone waste (`cutting_bone_waste`)

Bone waste is mutually exclusive with food-grade goat bones for the same physical quantity.

- Selected flow: Goat bone waste
- Flow property / unit: Mass / kg
- Amount rule: Record weighed cutting bones classified for waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Trimming-fat waste (`cutting_fat_waste`)

Fat waste is mutually exclusive with recovered trimming fat for the same physical quantity.

- Selected flow: Goat trimming fat waste
- Flow property / unit: Mass / kg
- Amount rule: Record weighed trimming fat classified for waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Meat-trimming waste (`cutting_meat_trim_waste`)

Nonconforming meat trimmings are recorded separately from conforming meat for freezing.

- Selected flow: Goat meat trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record weighed nonconforming meat trimmings sent to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Cutting wastewater (`cutting_high_load_wastewater`)

This wastewater stream leaves carcass dressing and cutting for treatment.

- Selected flow: High-organic-load cutting wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record a dedicated flow meter or calculate volume from metered cutting water and documented retained water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when the stream is generated.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows



### Process: Pre-chilling, freezing, and cold-system operation (`chilling_freezing`)

#### Inputs

##### Product flows

###### Goat meat entering cold system (`freezing_goat_meat_input`)

This intermediate input enters pre-chilling and freezing.

- Selected flow: Goat meat cuts before freezing
- Flow property / unit: Mass / kg
- Amount rule: Use the measured conforming cut mass released from cutting.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for every production lot.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Freezing electricity (`freezing_electricity`)

This electricity row covers pre-chilling and freezing equipment only.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the freezer and pre-chiller submeter; calculate the lot share from metered consumption and documented occupancy time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed by freezing.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen-storage electricity (`frozen_storage_electricity`)

This distinct electricity row covers the frozen-storage refrigeration load through facility-gate release.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the frozen-store refrigeration submeter and calculate the released-lot share from measured storage occupancy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when the product uses frozen storage.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Cold-system process water (`freezing_process_water`)

This water input is limited to direct cold-system operation such as documented defrost water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered process water used by the cold system, excluding water assigned to the separate cleaning process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on documented process-water use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### R717 refrigerant make-up (`freezing_refrigerant_r717`)

R717 make-up is recorded as a single refrigerant species for the cold system.

- Selected flow: Ammonia, refrigerant grade R717
- Flow property / unit: Mass / kg
- Amount rule: Calculate make-up mass from cylinder or bulk inventory receipts and refrigeration-system stock reconciliation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on an R717 circuit.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### R744 refrigerant make-up (`freezing_refrigerant_r744`)

R744 make-up is recorded as a single refrigerant species for the cold system.

- Selected flow: Carbon dioxide, refrigerant grade R744
- Flow property / unit: Mass / kg
- Amount rule: Calculate make-up mass from cylinder or bulk inventory receipts and refrigeration-system stock reconciliation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on an R744 circuit.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### R290 refrigerant make-up (`freezing_refrigerant_r290`)

R290 make-up is recorded as a single refrigerant species for the cold system.

- Selected flow: Propane, refrigerant grade R290
- Flow property / unit: Mass / kg
- Amount rule: Calculate make-up mass from cylinder inventory receipts and refrigeration-system stock reconciliation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on an R290 circuit.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Frozen goat-meat transfer (`freezing_frozen_goat_meat`)

This intermediate output has attained the frozen market state but is not yet the released reference product.

- Selected flow: Frozen goat meat before packaging
- Flow property / unit: Mass / kg
- Amount rule: Record net conforming frozen-meat mass released from the cold system to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for every production lot.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Off-specification frozen meat (`freezing_offspec_meat`)

Rejected frozen meat is recorded separately from conforming frozen meat.

- Selected flow: Off-specification frozen goat meat
- Flow property / unit: Mass / kg
- Amount rule: Record weighed frozen meat rejected before packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on rejection.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Defrost wastewater (`freezing_defrost_wastewater`)

Defrost wastewater is a specific aqueous waste stream from freezer operation.

- Selected flow: Freezer defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the defrost drain meter or calculate volume from metered defrost water less documented evaporation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on wet defrost operation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Condensate wastewater (`freezing_condensate_wastewater`)

Condensate leaving the cold system is recorded separately from defrost wastewater.

- Selected flow: Refrigeration condensate wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the dedicated condensate drain meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional when condensate is discharged as wastewater.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

###### R717 release to air (`freezing_ammonia_to_air`)

The direct release is the same chemical species as the R717 make-up flow.

- Selected flow: Ammonia, R717 refrigerant, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate loss from the reconciled R717 make-up and system inventory balance; reconcile with leak and service records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on a measured or reconciled R717 loss.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### R744 release to air (`freezing_carbon_dioxide_to_air`)

The direct release is the same chemical species as the R744 make-up flow.

- Selected flow: Carbon dioxide, R744 refrigerant, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate loss from the reconciled R744 make-up and system inventory balance; reconcile with leak and service records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on a measured or reconciled R744 loss.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### R290 release to air (`freezing_propane_to_air`)

The direct release is the same chemical species as the R290 make-up flow.

- Selected flow: Propane, R290 refrigerant, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate loss from the reconciled R290 make-up and system inventory balance; reconcile with leak and service records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on a measured or reconciled R290 loss.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`



### Process: Packaging, frozen holding, and facility-gate release (`packaging_release`)

#### Inputs

##### Product flows

###### Frozen meat entering packaging (`packaging_frozen_meat_input`)

This intermediate input enters final packaging and release control.

- Selected flow: Frozen goat meat before packaging
- Flow property / unit: Mass / kg
- Amount rule: Use the measured frozen-meat transfer released from the cold system.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for every production lot.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Packaging electricity (`packaging_electricity`)

This electricity row covers packaging and release equipment, excluding cold-system electricity already recorded.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the packaging-line submeter; calculate the lot share only from metered operation time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed by packaging.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### LDPE film packaging (`packaging_ldpe_film`)

LDPE film is one specific packaging material and its mass is excluded from the 1 kg reference amount.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Calculate consumed film mass from product-specific BoM, issued-roll mass, and returned-roll mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on LDPE film use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fibreboard box packaging (`packaging_fibreboard_box`)

Corrugated fibreboard is recorded separately from polymer and wood packaging.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Calculate consumed box mass from product-specific BoM, box count, and verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on corrugated fibreboard box use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wood pallet packaging (`packaging_wood_pallet`)

Wood pallets are recorded as a distinct packaging component.

- Selected flow: Wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Calculate pallet mass assigned to released product from pallet count, verified unit mass, and documented reuse cycles.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on wood pallet use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Paper label packaging (`packaging_paper_label`)

Paper labels are recorded separately from fibreboard boxes.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Calculate label mass from applied label count and verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on paper label use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Polypropylene strapping (`packaging_pp_strapping`)

Polypropylene strapping is one specific polymer packaging component.

- Selected flow: Polypropylene strapping
- Flow property / unit: Mass / kg
- Amount rule: Calculate consumed strapping mass from issued and returned roll mass or verified length and linear mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on polypropylene strapping use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference frozen goat meat (`frozen_goat_meat_reference_product`)

This is the CPC 21136 reference product after packaging, frozen holding, quality release, and net-mass determination.

- Selected flow: Meat of goat, frozen `cf1026b3-d517-4896-b54b-0ba4e919a40b`
- Flow property / unit: Mass / kg
- Amount rule: Record 1 kg net conforming frozen goat meat released at the facility gate; exclude every packaging component from product mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- UUID status: Verified public state=100 Product flow, version 01.01.000; exact CPC 21136 and Mass reference.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required; exactly one quantitative reference output per dataset.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Off-specification packaged meat (`packaging_offspec_meat`)

Rejected meat is kept separate from packaging waste and the reference product.

- Selected flow: Off-specification packaged frozen goat meat
- Flow property / unit: Mass / kg
- Amount rule: Record net frozen-meat mass rejected during final packaging or release; record removed packaging in its material-specific waste row.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on rejection.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### LDPE film waste (`packaging_ldpe_film_waste`)

LDPE waste is recorded separately from every non-LDPE packaging waste.

- Selected flow: Low-density polyethylene film offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Record weighed LDPE film offcuts and rejected film from packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fibreboard packaging waste (`packaging_fibreboard_waste`)

Fibreboard waste is recorded separately from paper labels and polymer packaging waste.

- Selected flow: Corrugated fibreboard packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Record weighed damaged boxes and fibreboard offcuts.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wood pallet waste (`packaging_wood_pallet_waste`)

Damaged wood pallets are a distinct packaging waste stream.

- Selected flow: Damaged wood pallet waste
- Flow property / unit: Mass / kg
- Amount rule: Record weighed pallet mass retired from use and assigned to the production lot by documented pallet use.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on pallet retirement.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Paper label waste (`packaging_paper_label_waste`)

Paper label waste is recorded separately from fibreboard packaging waste.

- Selected flow: Paper label waste
- Flow property / unit: Mass / kg
- Amount rule: Record label count rejected or removed and calculate mass from verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Polypropylene strapping waste (`packaging_pp_strapping_waste`)

Polypropylene strapping waste is a distinct polymer waste stream.

- Selected flow: Polypropylene strapping waste
- Flow property / unit: Mass / kg
- Amount rule: Record weighed discarded strapping or calculate mass from measured discarded length and verified linear mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows



### Process: Cleaning, disinfection, and on-site thermal utility operation (`cleaning_disinfection`)

#### Inputs

##### Product flows

###### Cleaning electricity (`cleaning_electricity`)

Electricity operates pumps, pressure washers, dosing equipment, and ventilation assigned to cleaning.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the cleaning-system submeter; calculate the production-lot share from metered hygiene-cycle operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed by cleaning.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Cleaning water (`cleaning_water`)

Cleaning water is kept separate from process water recorded in production stages.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the cleaning-water meter for the hygiene cycles assigned to the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for wet cleaning.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Purchased steam (`cleaning_purchased_steam`)

Purchased steam is a distinct imported heat carrier and is not combined with on-site boiler fuel.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Calculate delivered steam energy from supplier meter data and documented steam condition for the assigned hygiene cycles.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on purchased steam use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Purchased hot water (`cleaning_purchased_hot_water`)

Purchased hot water is recorded separately from purchased steam and on-site fuel.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Calculate delivered hot-water energy from metered mass or volume and measured inlet and outlet temperatures.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on purchased hot-water use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Natural-gas input (`cleaning_natural_gas`)

Natural gas is one on-site fuel route and must not duplicate purchased heat.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Calculate lower-heating-value energy from the calibrated fuel meter and supplier quality data for on-site heat generation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on natural-gas use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Diesel-fuel input (`cleaning_diesel`)

Diesel is one on-site fuel route and must not duplicate purchased heat.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Calculate fuel energy from calibrated tank or purchase records and a documented fuel-property record.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on diesel use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### LPG input (`cleaning_lpg`)

Liquefied petroleum gas is one on-site fuel route and must not duplicate purchased heat.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Calculate fuel energy from calibrated tank or purchase records and a documented fuel-property record.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on liquefied petroleum gas use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Sodium hydroxide cleaning agent (`cleaning_sodium_hydroxide`)

Sodium hydroxide is recorded as one chemical species.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass from chemical stock and dosing records for assigned hygiene cycles.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on sodium hydroxide use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Sodium hypochlorite disinfectant (`cleaning_sodium_hypochlorite`)

Sodium hypochlorite is recorded separately from sodium hydroxide.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass from chemical stock and dosing records for assigned hygiene cycles.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on sodium hypochlorite use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Routine cleaning wastewater (`cleaning_routine_wastewater`)

This routine wastewater is a distinct stream sent to treatment or an off-site receiver.

- Selected flow: Routine slaughterhouse cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the routine cleaning-drain meter for water not classified as high-organic-load wastewater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required when generated.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### High-load cleaning wastewater (`cleaning_high_load_wastewater`)

This stream is segregated because it carries concentrated blood, fat, or tissue residues.

- Selected flow: High-organic-load cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the dedicated high-load drain meter or calculate volume from metered wash water and documented retained water.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on segregated high-load collection.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

###### Fossil carbon dioxide release (`cleaning_co2_fossil_to_air`)

Fossil carbon dioxide is one substance-specific direct release from on-site combustion.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from each measured on-site fuel quantity and a documented fuel-specific carbon balance; exclude purchased steam and hot-water production.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on on-site fossil-fuel combustion.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nitrogen monoxide release (`cleaning_nitrogen_monoxide_to_air`)

Nitrogen monoxide is recorded separately from nitrogen dioxide.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from measured on-site fuel use and a verified equipment-specific factor or direct measurement.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on on-site combustion and available evidence.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nitrogen dioxide release (`cleaning_nitrogen_dioxide_to_air`)

Nitrogen dioxide is recorded separately from nitrogen monoxide.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from measured on-site fuel use and a verified equipment-specific factor or direct measurement.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on on-site combustion and available evidence.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Sulfur dioxide release (`cleaning_sulfur_dioxide_to_air`)

Sulfur dioxide is recorded as one substance-specific direct release.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from measured fuel use and documented sulfur content or direct measurement.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on on-site combustion and sulfur in the fuel.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fine particulate release (`cleaning_pm25_to_air`)

Fine particulate matter is recorded in its stated aerodynamic size fraction.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from direct measurement or a verified equipment-specific factor applied to measured fuel use.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on on-site combustion and available evidence.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Coarse particulate release (`cleaning_pm_coarse_to_air`)

Coarse particulate matter is recorded separately from the below-2.5-micrometre fraction.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from direct measurement or a verified equipment-specific factor applied to measured fuel use.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on on-site combustion and available evidence.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`



### Process: On-site slaughterhouse wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment electricity (`wwtp_electricity`)

Electricity operates pumps, aeration, separation, and sludge handling within on-site treatment.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the treatment-plant submeter and calculate the lot share from metered treated volume or measured pollutant load.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on on-site treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wastewater-treatment process water (`wwtp_process_water`)

This input excludes wastewater being treated and reclaimed-water recirculation.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered clean water used for reagent preparation or equipment operation in on-site treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on clean-water use in treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Calcium hydroxide reagent (`wwtp_calcium_hydroxide`)

Calcium hydroxide is a single precipitation or pH-control reagent.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass from treatment-chemical stock and dosing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on calcium hydroxide dosing.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Aluminium sulfate reagent (`wwtp_aluminium_sulfate`)

Aluminium sulfate is a single phosphorus-precipitation reagent.

- Selected flow: Aluminium sulfate
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass from treatment-chemical stock and dosing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on aluminium sulfate dosing.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Ferric chloride reagent (`wwtp_ferric_chloride`)

Ferric chloride is a single phosphorus-precipitation reagent.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass from treatment-chemical stock and dosing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on ferric chloride dosing.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Routine wastewater input (`wwtp_routine_wastewater_input`)

Routine wastewater is one treatment input and remains separate from high-organic-load wastewater.

- Selected flow: Routine slaughterhouse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Sum metered routine wastewater transfers entering on-site treatment without including high-organic-load flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on on-site receipt of this stream.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### High-load wastewater input (`wwtp_high_load_wastewater_input`)

High-organic-load wastewater is a distinct treatment input.

- Selected flow: High-organic-load slaughterhouse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Sum metered high-organic-load wastewater transfers entering on-site treatment without including routine flow.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on on-site receipt of this stream.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

#### Outputs

##### Product flows

###### Reclaimed water (`wwtp_reclaimed_water`)

Treated water is a product output only when quality and destination records demonstrate productive reuse.

- Selected flow: Reclaimed process water
- Flow property / unit: Volume / m3
- Amount rule: Record the reclaimed-water meter at the point of transfer to an approved productive use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on documented reuse.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Treated wastewater to sewer (`wwtp_treated_wastewater_to_sewer`)

This waste flow applies to transfer to a sewer or off-site treatment and is not a direct surface-water release.

- Selected flow: Treated slaughterhouse wastewater to sewer
- Flow property / unit: Volume / m3
- Amount rule: Record the final sewer-discharge meter after on-site treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on sewer or off-site transfer.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Screening solids (`wwtp_screening_solids`)

Screening solids are recorded separately from sludge and grease skim.

- Selected flow: Slaughterhouse wastewater screening solids
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass removed by screens and dispatched to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on screening.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Grease skim (`wwtp_grease_skim`)

Grease skim is recorded separately from biological and chemical sludge.

- Selected flow: Slaughterhouse wastewater grease skim
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass removed by grease separation or flotation and dispatched to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on grease separation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Biological sludge (`wwtp_biological_sludge`)

Biological sludge is a distinct treatment residue.

- Selected flow: Slaughterhouse biological wastewater sludge
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass and measured dry-matter fraction of biological sludge leaving treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on biological treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chemical precipitation sludge (`wwtp_chemical_sludge`)

Chemical precipitation sludge is kept separate from biological sludge.

- Selected flow: Slaughterhouse chemical precipitation sludge
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass and measured dry-matter fraction of sludge produced by chemical precipitation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on chemical precipitation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

###### Chemical oxygen demand release (`wwtp_cod_to_water`)

COD is recorded as one monitored water-release parameter for direct discharge.

- Selected flow: Chemical oxygen demand to surface water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged load from measured effluent volume and temporally matched COD concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_discharge`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on direct surface-water discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Five-day biochemical oxygen demand release (`wwtp_bod5_to_water`)

BOD5 is recorded separately from COD.

- Selected flow: Five-day biochemical oxygen demand to surface water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged load from measured effluent volume and temporally matched BOD5 concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_discharge`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on direct surface-water discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Total nitrogen release (`wwtp_total_nitrogen_to_water`)

Total nitrogen is one monitored water-release parameter.

- Selected flow: Total nitrogen to surface water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged load from measured effluent volume and temporally matched total-nitrogen concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_discharge`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on direct surface-water discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Total phosphorus release (`wwtp_total_phosphorus_to_water`)

Total phosphorus is one monitored water-release parameter.

- Selected flow: Total phosphorus to surface water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged load from measured effluent volume and temporally matched total-phosphorus concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_discharge`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on direct surface-water discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Suspended-solids release (`wwtp_tss_to_water`)

Total suspended solids are recorded separately from oxygen-demand and nutrient parameters.

- Selected flow: Total suspended solids to surface water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged load from measured effluent volume and temporally matched total-suspended-solids concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_discharge`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on direct surface-water discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Treatment ammonia release (`wwtp_ammonia_to_air`)

Ammonia is recorded as one substance-specific direct air release from wastewater treatment.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate released mass from measured exhaust flow and measured ammonia concentration for the treatment operating period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwtp_air_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on a measured direct release.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Treatment hydrogen sulfide release (`wwtp_hydrogen_sulfide_to_air`)

Hydrogen sulfide is recorded separately from ammonia.

- Selected flow: Hydrogen sulfide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate released mass from measured exhaust flow and measured hydrogen sulfide concentration for the treatment operating period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goat meat at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwtp_air_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on a measured direct release.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multi-output processes | First avoid allocation by process subdivision and direct metering of slaughter, cutting, freezing, packaging, cleaning, and treatment activities. | `eu-2021-2279-environmental-footprint` |
| `allocation_expand` | co-products with additional functions | If subdivision cannot resolve a co-product function, investigate transparent system expansion before partitioning burdens. | `eu-2021-2279-environmental-footprint` |
| `allocation_physical` | remaining multi-output process | When allocation remains necessary, use a documented physical relationship that reflects the causal use of inputs and generation of outputs. | `eu-2021-2279-environmental-footprint` |
| `allocation_economic` | remaining unresolved relationship | Use economic allocation only when neither subdivision, system expansion, nor a relevant physical relationship is defensible; use period-matched facility records and disclose sensitivity. | `eu-2021-2279-environmental-footprint` |
| `allocation_status` | each blood, hide, fat, organ, bone, water, and residue row | Establish product or waste status from quality, legal status, and destination evidence before allocation; do not assign the same physical quantity to both statuses. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `allocation_waste` | waste treatment | Do not credit a waste destination unless the selected LCA method and documented receiving function require it; disclose the modelling choice. | `eu-2021-2279-environmental-footprint` |
| `allocation_consistency` | all process links | Do not double count an intermediate transfer, purchased heat and its upstream fuel, a refrigerant make-up and an unrelated loss, or a wastewater output and the same treatment input. | `eu-2021-2279-environmental-footprint` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `live_goat_receiving` | live-goat, electricity, water, accepted transfer, manure, and lairage wastewater | weighbridge ticket; animal acceptance log; utility meter; waste dispatch record | timestamp; lot_id; meter_or_scale_id; opening_reading; closing_reading; gross_mass; tare_mass; destination | Reconcile calibrated measurements and dispatch records to the production lot. | kg; m3; kWh | each lot | full study period | receiving area | sum lot records once; allocate shared electricity by documented equipment activity | calibration certificates; signed acceptance and dispatch records; meter reconciliation |
| `cp_slaughter_inputs` | `slaughter_dressing` | accepted live-goat input, line electricity, and process water | transfer record; electricity meter; water meter | timestamp; lot_id; source_process; meter_id; opening_reading; closing_reading | Link receiving transfer and calibrated utility meters to the slaughter lot. | kg; kWh; m3 | each lot | full study period | slaughter line | sum direct records; allocate shared meters with documented equipment activity | transfer reconciliation; calibration; meter logs |
| `cp_slaughter_outputs` | `slaughter_dressing` | carcass, co-product, condemned stream, contents, and wastewater output | scale record; condemnation log; destination record; wastewater meter | timestamp; lot_id; row_id; gross_mass; tare_mass; destination; legal_status; flow_reading | Weigh each physical output separately and document product or waste status before aggregation. | kg; m3 | each lot | full study period | slaughter line | sum each row_id once; prohibit overlap between productive and condemned destinations | scale calibration; inspection record; destination evidence; mass balance |
| `cp_slaughter_air_releases` | `slaughter_dressing` | ammonia and hydrogen sulfide direct releases | stack or capture-flow monitoring record | timestamp; operating_state; exhaust_flow; substance; concentration; method; detection_limit | Match substance-specific concentration measurements to exhaust flow and slaughter operation. | kg | monitoring campaign and each material change | representative operating period within study period | slaughter air-release points | integrate measured mass flow over applicable operating time | laboratory report; monitoring method; instrument calibration |
| `cp_cutting_records` | `carcass_cutting` | carcass input, utilities, meat output, bone, fat, trimming waste, and wastewater | scale record; submeter; destination record; wastewater meter | timestamp; lot_id; row_id; mass; meter_reading; destination; legal_status | Link calibrated cutting records and each separated output to the lot. | kg; kWh; m3 | each lot | full study period | cutting area | sum each row_id once and reconcile input-output mass | scale and meter calibration; destination record; mass balance |
| `cp_freezing_records` | `chilling_freezing` | meat transfer, cold-system electricity, water, frozen output, off-spec meat, and aqueous wastes | scale record; refrigeration submeter; water meter; storage occupancy log; drain meter | timestamp; lot_id; mass; meter_id; opening_reading; closing_reading; storage_duration; drain_volume | Link measured cold-system activity and frozen-meat transfers to each released lot. | kg; kWh; m3 | each lot | full study period | pre-chiller; freezer; frozen store | sum direct records; allocate frozen-store electricity by measured occupancy | scale and meter calibration; temperature and occupancy logs; release record |
| `cp_refrigerant_inventory` | `chilling_freezing` | R717, R744, and R290 make-up and direct releases | refrigerant purchase; cylinder stock; service log; leak record; system charge inventory | date; circuit_id; refrigerant_code; opening_stock; receipts; closing_stock; recovered_mass; transferred_mass; leak_event | Reconcile each refrigerant species and circuit independently; never substitute a combined refrigerant total. | kg | each service event and annual closure | full study period | all cold-system circuits inside boundary | opening stock plus receipts minus closing stock, recovery, and documented transfers | purchase invoice; cylinder weights; service certification; leak-detector log |
| `cp_packaging_bom` | `packaging_release` | each packaging component input | product-specific BoM; issue-return record; component count | lot_id; component_identity; issued_mass; returned_mass; count; unit_mass; reuse_cycles | Calculate each named packaging component from product-specific BoM and verified stock records. | kg | each lot | full study period | packaging line | sum each component separately; allocate reusable pallets by documented use cycles | approved BoM; stock ledger; unit-mass test; pallet ledger |
| `cp_packaging_release` | `packaging_release` | frozen-meat input, packaging electricity, and reference-product output | transfer scale; electricity submeter; release scale; quality-release record | timestamp; lot_id; input_net_mass; output_net_mass; meter_reading; release_status; temperature | Determine net conforming product mass and packaging-line electricity for the released lot. | kg; kWh | each lot | full study period | packaging and release area | sum released net product once; exclude packaging mass | scale and meter calibration; signed release; temperature record |
| `cp_packaging_waste` | `packaging_release` | off-spec meat and each packaging waste | waste scale; reject log; component count | timestamp; lot_id; row_id; gross_mass; tare_mass; count; destination | Measure each material-specific packaging waste and rejected meat separately. | kg | each lot | full study period | packaging area | sum each row_id once; prohibit transfer of packaging mass into reference product | waste tickets; reject records; scale calibration |
| `cp_cleaning_inputs` | `cleaning_disinfection` | electricity, water, sodium hydroxide, and sodium hypochlorite | submeter; chemical issue and dosing log; hygiene-cycle record | timestamp; lot_id; cycle_id; substance; concentration; issued_mass; meter_reading | Assign measured hygiene-cycle resources to the production lot and retain chemical identity. | kg; m3; kWh | each hygiene cycle | full study period | foreground hygiene systems | sum each substance separately; allocate shared cycles by cleaned area or documented cycle time | meter calibration; chemical stock reconciliation; dosing log; sanitation record |
| `cp_thermal_utility` | `cleaning_disinfection` | purchased steam, purchased hot water, natural gas, diesel, and liquefied petroleum gas | supplier meter; boiler meter; fuel tank and purchase ledger | timestamp; lot_id; carrier_identity; quantity; temperature; pressure; heating_value; meter_id | Record each imported heat carrier or on-site fuel separately and reconcile alternative heat routes. | MJ | each hygiene cycle and monthly closure | full study period | thermal systems serving foreground hygiene | convert measured carrier quantity to delivered energy with documented properties; prohibit double counting | supplier invoice; calibrated meter; fuel-quality record; boiler log |
| `cp_cleaning_wastewater` | `cleaning_disinfection` | routine and high-organic-load cleaning wastewater | segregated drain meter; hygiene-cycle log | timestamp; lot_id; stream_identity; opening_reading; closing_reading; destination | Measure routine and high-load cleaning streams independently. | m3 | each hygiene cycle | full study period | cleaning drains | sum each stream once by destination | drain-meter calibration; flow diagram; dispatch or treatment record |
| `cp_combustion_releases` | `cleaning_disinfection` | each named on-site combustion release | fuel meter; direct monitoring; verified equipment-specific factor record | timestamp; equipment_id; fuel_identity; fuel_quantity; substance; concentration_or_factor; factor_source | Determine each substance-specific release from direct measurement or a verified factor applied to measured fuel. | kg | each monitoring campaign and reporting period | full study period | on-site combustion equipment inside boundary | calculate each substance separately; exclude upstream purchased heat production | monitoring report; fuel record; factor provenance; calculation review |
| `cp_wwtp_inputs` | `onsite_wastewater_treatment` | wastewater inputs, electricity, water, and each treatment reagent | influent meters; submeter; chemical dosing and stock logs | timestamp; lot_id; stream_or_substance; meter_reading; issued_mass; concentration; treated_volume | Measure each wastewater stream and reagent independently at the on-site treatment boundary. | kg; m3; kWh | daily and each lot allocation | full study period | on-site wastewater-treatment plant | sum each row_id separately; allocate shared treatment by measured volume or pollutant load | meter calibration; chemical stock reconciliation; treatment log |
| `cp_wwtp_outputs` | `onsite_wastewater_treatment` | reclaimed water, sewer wastewater, screening solids, grease skim, and each sludge | outlet meter; waste scale; destination and quality record | timestamp; row_id; volume; wet_mass; dry_matter; quality_result; destination | Measure each treatment output separately and establish product or waste status from quality and destination. | kg; m3 | daily and each dispatch | full study period | on-site wastewater-treatment plant | sum each row_id once; keep reuse, sewer transfer, and residue destinations distinct | meter and scale calibration; laboratory result; dispatch record |
| `cp_water_discharge` | `onsite_wastewater_treatment` | COD, BOD5, total nitrogen, total phosphorus, and total suspended solids direct releases | final-effluent flow meter and accredited laboratory analysis | timestamp; sample_id; effluent_volume; parameter; concentration; method; detection_limit | Match each parameter concentration to the same discharge period and calculate its mass load. | kg | permit monitoring frequency and each material change | full study period | final direct-discharge point | effluent volume multiplied by temporally matched concentration for each parameter | laboratory accreditation; chain of custody; meter calibration; calculation review |
| `cp_wwtp_air_releases` | `onsite_wastewater_treatment` | ammonia and hydrogen sulfide direct releases | airflow and concentration monitoring record | timestamp; operating_state; exhaust_flow; substance; concentration; method; detection_limit | Match each substance concentration to treatment airflow and operating time. | kg | monitoring campaign and each material change | representative treatment operation within study period | wastewater-treatment air-release points | integrate measured substance mass flow over applicable operating time | laboratory report; method; instrument calibration |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | Divide the lot-attributed exchange by released net conforming frozen goat meat mass. | lot-attributed exchange; released net reference-product mass | exchange per 1 kg reference product | `eu-2021-2279-environmental-footprint` |
| `calc_stage_electricity` | each stage electricity row | Use a direct stage submeter; when a meter is shared, multiply the metered period total by an auditable equipment-activity or occupancy share. | meter total; equipment activity or storage occupancy; lot release mass | stage electricity per reference flow | `eu-2021-2279-environmental-footprint` |
| `calc_mass_balance` | animal, carcass, meat, co-product, and waste mass rows | Reconcile measured mass entering each process with its separately recorded product and waste outputs; investigate rather than distribute unexplained imbalance. | measured input masses; measured output masses; moisture or stock change records | documented process mass balance | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_refrigerant_loss` | each refrigerant species | For each circuit and species, reconcile opening stock plus receipts against closing stock, recovered mass, and documented transfers; record the residual only when supported by service and leak evidence. | opening stock; receipts; closing stock; recovered mass; transfers; service records | species-specific refrigerant loss | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_packaging_mass` | each packaging component | Calculate component use from issued mass less returned mass, or component count multiplied by verified unit mass; apply documented reuse cycles only to reusable pallets. | issued mass; returned mass; component count; unit mass; reuse ledger | component mass per reference flow | `eu-2021-2279-environmental-footprint` |
| `calc_thermal_energy` | each purchased heat carrier and on-site fuel | Convert measured carrier quantity to delivered energy using documented temperature, pressure, density, or heating-value records that match the reporting period. | measured carrier quantity; carrier property records | MJ per reference flow | `eu-2021-2279-environmental-footprint` |
| `calc_combustion_release` | each direct combustion substance | Use direct measured mass flow where available; otherwise apply a verified equipment-specific factor to measured fuel use and preserve the factor provenance. | measured fuel; direct concentration and flow or verified factor | substance mass to air per reference flow | `eu-2021-2279-environmental-footprint` |
| `calc_wastewater_volume` | each wastewater stream | Use a dedicated flow meter; when calculated, subtract only documented retained, product-bound, recovered, or evaporated water from the matched metered supply. | stream meter or matched water balance records | m3 wastewater per reference flow | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_water_release` | each direct water-release parameter | Multiply measured final-effluent volume by a temporally matched measured concentration and convert units without substituting a concentration limit for a measured result. | effluent volume; parameter concentration; unit conversion | parameter mass to surface water per reference flow | `ec-jrc-2024-sa-bref-jrc135916` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_specific` | reference product and packaging | Use product-specific net mass, BoM, release, and packaging records for the frozen-goat-meat product. | approved product specification; BoM; signed lot release |
| `dq_site_specific` | foreground manufacturing | Use company-specific activity data and direct releases for processes operated by the reporting facility. | meter, scale, ledger, laboratory, and service records |
| `dq_temporal` | all foreground rows | Cover a representative production period and disclose shutdowns, maintenance, seasonal storage, and missing intervals. | coverage statement; gap register; operating calendar |
| `dq_technology` | freezing, storage, thermal utility, and wastewater treatment | Identify actual equipment, refrigerant species, heat route, and treatment configuration used during the study period. | equipment register; piping diagram; service log; process-flow diagram |
| `dq_mass_balance` | animal and meat conversion | Reconcile live-animal, carcass, meat, co-product, waste, and stock-change masses at lot or representative-period level. | signed mass-balance worksheet and investigated residuals |
| `dq_meter_reconciliation` | utilities and wastewater | Reconcile submeter totals to facility meters and document every allocation driver used. | meter hierarchy; calibration record; allocation worksheet |
| `dq_destination` | co-products and wastes | Retain destination, legal status, and acceptance evidence so the same physical stream is not both a product and a waste. | contract; dispatch ticket; inspection or acceptance record |
| `dq_uuid` | all inventory identities | Use a Tiangong UUID only after exact semantic hybrid search and public state=100 direct-read verification; keep the UUID absent while unresolved. | dual-verification evidence or manifest unresolved entry |
| `dq_uncertainty` | all inventory rows | Document measurement resolution, calibration, missing-data treatment, factor provenance, and allocation uncertainty without inventing a category range. | uncertainty register and calculation review |
| `dq_completeness` | full inventory | Demonstrate coverage of material, energy, waste, and direct air and water exchanges inside the boundary. | process-flow diagram; row checklist; input-output reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_uuid` | reference flow | Require Product flow cf1026b3-d517-4896-b54b-0ba4e919a40b, Mass 93a60a56-a3c8-11da-a746-0800200b9a66, Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, and kg. | `un-cpc-3-0-structure-2025` |
| `validate_reference_amount` | reference output | Require exactly 1 kg net conforming frozen goat meat and exclude packaging mass. | `un-cpc-3-0-structure-2025` |
| `validate_scope` | product identity | Reject fresh or chilled goat meat, edible offal as the reference product, and any non-goat meat. | `un-cpc-3-0-structure-2025` |
| `validate_boundary` | process coverage | Require every mandatory process and require a documented inclusion decision for on-site wastewater treatment. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_atomic` | inventory rows | Require one specific physical or chemical exchange per row_id and a nonempty description, amount rule, protocol, uncertainty statement, applicability statement, and source list. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_selector_free` | selected flows | Reject collection labels or instructions in Selected flow; utilities, fuels, refrigerants, chemicals, packaging components, wastes, and releases must remain separate. | `eu-2021-2279-environmental-footprint` |
| `validate_uuid` | inventory UUIDs | Accept a non-reference UUID only after exact semantic flow-hybrid-search and public state=100 direct-read verification; otherwise require no UUID. | `eu-2021-2279-environmental-footprint` |
| `validate_manifest_closure` | unresolved UUIDs | Require every UUID-free row_id to appear once in manifest review_metadata with its candidate identity and rejection reason. | `eu-2021-2279-environmental-footprint` |
| `validate_value_mode` | inventory amounts | Allow foreground_record or calculated_value supported by collected records; reject unsupported authored quantities and category default ranges. | `eu-2021-2279-environmental-footprint` |
| `validate_mass_balance` | physical outputs | Reconcile accepted live mass, carcass, meat, co-products, condemned streams, contents, wastewater-associated solids, and stock change without forced balancing. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_heat_routes` | thermal inputs | Prevent duplicate recording of purchased steam, purchased hot water, and on-site fuel used to generate the same heat. | `eu-2021-2279-environmental-footprint` |
| `validate_refrigerants` | cold system | Identify each actual refrigerant by species and circuit; require its own make-up and direct-release row when a loss occurs. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_cleaning_agents` | cleaning | Identify each cleaning or disinfection substance separately from stock and dosing records; add a new atomic row for every additional substance used. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_packaging` | packaging | Match each actual packaging component and its material-specific waste to the product BoM and exclude packaging mass from the reference product. | `eu-2021-2279-environmental-footprint` |
| `validate_destinations` | co-products and wastes | Require destination and status evidence and prohibit assigning one physical quantity to both a co-product row and a waste row. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_wastewater` | wastewater | Keep routine and high-organic-load wastewater separate; distinguish sewer transfer from direct surface-water discharge and on-site treatment. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_air_releases` | direct air releases | Require substance-specific measured or calculated releases and factor provenance; do not report an aggregate combustion or refrigerant release row. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_water_releases` | direct water releases | For direct discharge, require temporally matched effluent volume and parameter concentration for each release row. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_sources` | evidence | Use only the listed UN CPC, EC JRC SA BREF, and Commission Recommendation sources for this PCR; do not treat UUID lookup as amount evidence. | `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_bilingual` | bilingual record | Require identical ordered process_id, direction, flow_type, row_id, UUID, controlled tokens, protocol ids, and source-id sequences in en-US and zh-CN. | `eu-2021-2279-environmental-footprint` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Facility-specific foreground data package for CPC 21136 frozen goat meat |
| downstream_use | Construction and validation of TianGong flow, process, lifecyclemodel, and dataset projections |
| allowed_use | Product-specific modelling when the facility boundary, reference qualifiers, actual technology, and collection period are disclosed |
| excluded_use | Category-default inventory; fresh or chilled goat meat; edible-offal reference product; retail or meal modelling |
| required_metadata | Facility geography; reporting period; production volume; lot definition; net-mass method; slaughter and cutting configuration; freezing technology; frozen-storage duration; heat route; refrigerant species; packaging BoM; co-product and waste destinations; wastewater route |
| required_quality_disclosure | Meter and scale calibration; temporal coverage; missing data; calculation inputs; allocation decisions; mass balance; uncertainty; UUID status |
| update_trigger | Change in product scope, slaughter or cutting configuration, freezing or storage technology, energy route, refrigerant species, packaging BoM, co-product destination, wastewater route, or evidence source |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Dataset (`dataset`) | United Nations Statistics Division, CPC Ver. 3.0 official page, https://unstats.un.org/unsd/classifications/Econ/CPC; retained raw structure `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` | Exact CPC 21136 identity and frozen-state boundary; exclusion of CPC 21116 fresh or chilled goat meat and CPC 21156 edible goat offal |
| `ec-jrc-2024-sa-bref-jrc135916` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, 2024, DOI 10.2760/18199, https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | Slaughter boundary through standard cuts; process decomposition; cooling and freezing; cleaning; utilities; refrigerants; separately managed animal outputs; wastewater; sludge; direct air and water releases |
| `eu-2021-2279-environmental-footprint` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279, consolidated 30 December 2021, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific BoM and manufacturing data; complete LCI of material, energy, product, waste, and direct releases; allocation hierarchy; completeness, transparency, data quality, and verification |
