---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-cattle-fresh-chilled-or-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Edible offal of cattle, fresh, chilled or frozen

## 1. Scope and Applicability

This PCR governs foreground data packages for cattle edible offal classified exactly as CPC 21151. It covers facility operations from cattle receiving through slaughter and evisceration, organ-specific separation, trimming, washing, inspection, conditional chilling or freezing, composition assembly, packaging, storage, release, cleaning, and conditional on-site wastewater treatment.

The reference product is 1 kg net conforming cattle edible offal at the facility gate. The data package must declare every organ in the composition and exactly one market state: fresh, chilled, or frozen. Buffalo edible offal and edible offal of every non-cattle species are excluded. Cattle rearing and inbound transport are upstream; distribution after the facility gate, retail, use, and end-of-life are downstream.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-cattle-fresh-chilled-or-frozen` |
| classification_refs | CPC 3.0: 21151, exact |
| covered_products | Edible offal of cattle in one declared fresh, chilled, or frozen market state |
| excluded_products | Edible offal of buffalo; edible offal of non-cattle species; inedible cattle residuals; prepared meals |
| representative_product | Net conforming cattle edible-offal product composed of separately measured cattle organs |
| production_route | Receiving; slaughter and evisceration; organ separation; trimming, washing, and inspection; conditional chilling or freezing; packaging, storage, and release; hygiene; conditional on-site wastewater treatment |
| market_state | Exactly one of fresh, chilled, or frozen, declared for the dataset |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net conforming cattle edible offal classified as CPC 21151, with every organ component declared |
| How much | 1 kg |
| How well | Passed applicable food-safety and product release requirements; packaging mass excluded |
| How long or cycle | One production lot through facility-gate release |
| reference_flow_link | Exact public Tiangong Product flow at state 100 and version 01.01.000 |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net product |
| Reference product flow | Edible offal of cattle, fresh, chilled or frozen `a6673976-2ef4-4502-b9f5-bbc57099bb40` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CPC 21151; cattle species; complete organ composition and each component mass; exactly one market state; net product mass; production site; production period; conditioning technology; storage duration; packaging composition reported separately |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_reference_net_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine released net conforming product mass on calibrated scales. |
| `mu_component_mass` | Each organ component | Mass | kg | Measure every applicable organ component separately; the component sum must reconcile to released net reference-product mass. |
| `mu_packaging_excluded` | Reference product and packaging | Mass | kg | Exclude packaging mass from reference-product mass and record each packaging component separately. |
| `mu_physical_mass` | Cattle, carcass, organs, co-products, and solid wastes | Mass | kg | Use measured wet or net mass and declare moisture or dry-matter basis when it affects interpretation. |
| `mu_electricity` | Electricity | Energy | kWh | Use calibrated meter readings and retain the meter boundary and allocation driver. |
| `mu_thermal_energy` | Purchased steam, purchased hot water, and each on-site fuel | Energy | MJ | Convert measured carrier quantity with period-matched physical-property records and prevent duplicate heat accounting. |
| `mu_water_volume` | Water and wastewater | Volume | m3 | Use metered volume and keep routine, high-organic-load, defrost, condensate, sewer, reuse, and direct-discharge streams distinct. |
| `mu_direct_release_mass` | Direct releases to air or water | Mass | kg | Calculate substance or monitored-parameter mass from matched measured activity and concentration or a verified factor. |
| `mu_refrigerant_mass` | Refrigerant make-up and loss | Mass | kg | Reconcile each refrigerant species and circuit independently. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Cattle cross the facility receiving boundary after inbound transport ends |
| starting_condition_role | Foreground starting condition |
| product_classification_scope | Exact CPC 21151 cattle edible offal |
| recursive_input_rule | Declare any CPC 21151 intermediate input origin and prevent recursive counting of the same production |
| upstream_dataset_requirement | Model cattle rearing and inbound transport in separate upstream datasets with disclosed geography and period |
| disclosure | State facility, lot period, complete organ composition, one market state, slaughter and preparation configuration, conditioning technology, storage duration, heat route, refrigerant species, packaging BoM, wastewater destination, and on-site treatment decision |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | foreground system | Start with cattle entering facility receiving after inbound transport ends. | `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_upstream` | upstream activities | Model cattle rearing and inbound transport in separate upstream datasets. | `eu-2021-2279-environmental-footprint` |
| `boundary_core` | foreground processes | Include receiving, slaughter and evisceration, organ-specific separation, trimming, washing, inspection, conditional chilling or freezing, packaging, storage, release, and cleaning. | `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_end` | foreground system | End at 1 kg net conforming CPC 21151 cattle edible offal released at the facility gate, with packaging mass excluded. | `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_downstream` | downstream activities | Exclude distribution after the facility gate, retail, use, and end-of-life from this foreground inventory. | `eu-2021-2279-environmental-footprint` |
| `boundary_wwtp` | on-site wastewater treatment | Include on-site treatment only when operated inside the reporting facility boundary; otherwise record each wastewater transfer. | `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_cpc` | product identity | Exclude buffalo edible offal and every non-cattle species from the reference product. | `un-cpc-3-0-structure-2025` |
| `boundary_composition` | product composition | Declare every organ included in the reference product and measure each applicable organ component separately. | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `boundary_state` | market state | Declare exactly one market state—fresh, chilled, or frozen—for the reference product and apply only the matching component rows. | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `boundary_completeness` | all foreground exchanges | Do not apply a category cut-off to a known exchange; record it atomically or disclose verified absence. | `eu-2021-2279-environmental-footprint` |
| `boundary_recursive` | same-category intermediate input | If CPC 21151 edible offal is introduced as an intermediate input, declare origin and prevent recursive counting of the same production. | `eu-2021-2279-environmental-footprint` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cattle_receiving` | Cattle receiving and acceptance | `required` | Every facility-gate production lot | Starts foreground collection when inbound transport ends | per 1 kg net conforming cattle edible offal at the facility gate |
| `slaughter_offal_separation` | Slaughter, evisceration, and edible-offal separation | `required` | Every accepted cattle lot | Separates organ-specific edible-offal intermediates and co-products | per 1 kg net conforming cattle edible offal at the facility gate |
| `offal_preparation` | Organ-specific trimming, washing, and inspection | `required` | Every edible-offal production lot | Prepares and measures each fresh organ component | per 1 kg net conforming cattle edible offal at the facility gate |
| `temperature_conditioning` | Conditional chilling and freezing | `conditional` | Required for chilled or frozen product state; bypassed for fresh product | Produces organ-specific chilled or frozen components and records refrigeration circuits | per 1 kg net conforming cattle edible offal at the facility gate |
| `packaging_storage_release` | Composition assembly, packaging, storage, and release | `required` | Every released product lot | Assembles the declared organ composition in one declared market state and releases the reference product | per 1 kg net conforming cattle edible offal at the facility gate |
| `cleaning_thermal_utilities` | Cleaning, disinfection, and on-site thermal utility operation | `required` | Every production lot and scheduled hygiene cycle | Records hygiene inputs, cleaning wastewater, and direct combustion releases | per 1 kg net conforming cattle edible offal at the facility gate |
| `onsite_wastewater_treatment` | On-site cattle-offal wastewater treatment | `conditional` | Only when the facility operates treatment inside the foreground boundary | Treats separately identified wastewater and records treatment outputs | per 1 kg net conforming cattle edible offal at the facility gate |

### Process: Cattle receiving and acceptance (`cattle_receiving`)

#### Inputs

##### Product flows

###### Live cattle entering receiving (`receiving_live_cattle`)

The animal input crosses the foreground boundary after inbound transport ends at facility receiving.

- Selected flow: Live cattle
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated live mass entering the receiving area for accepted and rejected cattle.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for every production lot.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Receiving electricity (`receiving_electricity`)

Electricity operates receiving, inspection, gates, lighting, and directly associated equipment.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the receiving-area submeter; calculate a lot share only from metered use and a documented activity driver.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed by receiving.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Receiving water (`receiving_water`)

Water crosses the process boundary for cattle watering and receiving-area operations.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered water supplied to receiving and lairage for the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
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

###### Accepted cattle transfer (`receiving_accepted_cattle`)

This intermediate output transfers accepted cattle to slaughter and is not the CPC 21151 reference product.

- Selected flow: Accepted live cattle
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated live mass released from receiving to slaughter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for every accepted production lot.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Lairage manure (`receiving_cattle_manure`)

Manure removed from lairage is a specific solid waste stream.

- Selected flow: Cattle manure from lairage
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass using weighed containers and tare records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on separate manure collection.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Lairage wastewater (`receiving_lairage_wastewater`)

Wash water leaving receiving and lairage is recorded as one specific wastewater stream.

- Selected flow: Cattle lairage wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the dedicated wastewater meter or calculate volume from matched wash-water records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows



### Process: Slaughter, evisceration, and edible-offal separation (`slaughter_offal_separation`)

#### Inputs

##### Product flows

###### Accepted cattle input (`separation_accepted_cattle_input`)

This intermediate connects receiving to the slaughter and evisceration line.

- Selected flow: Accepted live cattle
- Flow property / unit: Mass / kg
- Amount rule: Use the measured accepted-cattle transfer from receiving.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for every production lot.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separation-line electricity (`separation_electricity`)

Electricity operates stunning, hoisting, conveyors, pumps, ventilation, and separation equipment.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the slaughter and evisceration submeter; allocate shared use only from metered equipment activity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_separation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separation process water (`separation_water`)

This water excludes water assigned to later organ washing and facility cleaning.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered water supplied directly to slaughter, evisceration, organ separation, and carcass washing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required when process water is supplied.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dressed carcass co-product (`separation_carcass`)

The dressed carcass is a separate co-product outside the CPC 21151 reference product.

- Selected flow: Dressed cattle carcass
- Flow property / unit: Mass / kg
- Amount rule: Record hot dressed-carcass mass on a calibrated scale.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for each slaughter lot.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered hide co-product (`separation_hide`)

The cattle hide is a co-product only when destination evidence establishes productive use.

- Selected flow: Cattle hide for recovery
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated hide mass accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on documented productive use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered blood co-product (`separation_recovered_blood`)

Recovered blood is kept separate from waste blood.

- Selected flow: Recovered cattle blood
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass collected hygienically for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on documented productive use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Recovered fat co-product (`separation_recovered_fat`)

Recovered fat is a distinct co-product outside the reference product.

- Selected flow: Recovered cattle slaughter fat
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated slaughter-fat mass accepted for a documented productive destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on documented productive use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated liver (`separation_untrimmed_liver`)

The separated liver crosses from slaughter and evisceration into the preparation process as one organ-specific intermediate.

- Selected flow: Untrimmed cattle liver
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated mass of the separated liver transferred to edible-offal preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on recovery of liver for edible-offal preparation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated heart (`separation_untrimmed_heart`)

The separated heart crosses from slaughter and evisceration into the preparation process as one organ-specific intermediate.

- Selected flow: Untrimmed cattle heart
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated mass of the separated heart transferred to edible-offal preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on recovery of heart for edible-offal preparation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated kidney (`separation_untrimmed_kidney`)

The separated kidney crosses from slaughter and evisceration into the preparation process as one organ-specific intermediate.

- Selected flow: Untrimmed cattle kidney
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated mass of the separated kidney transferred to edible-offal preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on recovery of kidney for edible-offal preparation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated tongue (`separation_untrimmed_tongue`)

The separated tongue crosses from slaughter and evisceration into the preparation process as one organ-specific intermediate.

- Selected flow: Untrimmed cattle tongue
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated mass of the separated tongue transferred to edible-offal preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on recovery of tongue for edible-offal preparation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated stomach (`separation_untrimmed_stomach`)

The separated stomach crosses from slaughter and evisceration into the preparation process as one organ-specific intermediate.

- Selected flow: Untrimmed cattle stomach
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated mass of the separated stomach transferred to edible-offal preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on recovery of stomach for edible-offal preparation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated small intestine (`separation_untrimmed_small_intestine`)

The separated small intestine crosses from slaughter and evisceration into the preparation process as one organ-specific intermediate.

- Selected flow: Untrimmed cattle small intestine
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated mass of the separated small intestine transferred to edible-offal preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on recovery of small intestine for edible-offal preparation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Separated large intestine (`separation_untrimmed_large_intestine`)

The separated large intestine crosses from slaughter and evisceration into the preparation process as one organ-specific intermediate.

- Selected flow: Untrimmed cattle large intestine
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated mass of the separated large intestine transferred to edible-offal preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on recovery of large intestine for edible-offal preparation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Waste blood (`separation_waste_blood`)

Waste blood is mutually exclusive with recovered blood for the same physical quantity.

- Selected flow: Waste cattle blood
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated blood mass rejected from productive use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Stomach contents (`separation_stomach_contents`)

Stomach contents are kept separate from organ tissue and wastewater.

- Selected flow: Cattle stomach contents
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass removed from cattle stomachs.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required when stomachs are emptied on site.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Small-intestinal contents (`separation_small_intestinal_contents`)

Small-intestinal contents are recorded separately from large-intestinal contents.

- Selected flow: Cattle small-intestinal contents
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass removed from the small intestine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required when the small intestine is emptied on site.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Large-intestinal contents (`separation_large_intestinal_contents`)

Large-intestinal contents are recorded separately from small-intestinal contents.

- Selected flow: Cattle large-intestinal contents
- Flow property / unit: Mass / kg
- Amount rule: Record separately collected wet mass removed from the large intestine.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required when the large intestine is emptied on site.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Bile waste (`separation_bile_waste`)

Bile waste is one chemically and physically distinct slaughter stream.

- Selected flow: Cattle bile waste
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated bile mass collected for waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on collection as waste.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Gallbladder waste (`separation_gallbladder_waste`)

Gallbladder tissue is recorded separately from bile.

- Selected flow: Cattle gallbladder waste
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated gallbladder tissue mass dispatched to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Urinary-bladder waste (`separation_urinary_bladder_waste`)

Urinary-bladder tissue is one specific non-edible residual stream.

- Selected flow: Cattle urinary bladder waste
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated urinary-bladder tissue mass dispatched to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on waste classification.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Slaughter wastewater (`separation_high_load_wastewater`)

This wastewater carries concentrated aqueous load from bleeding, evisceration, and carcass washing.

- Selected flow: High-organic-load cattle slaughter wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record a dedicated flow meter or calculate volume from matched process-water and retained-water records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_separation_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when the stream leaves slaughter for treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

###### Slaughter ammonia release (`separation_ammonia_to_air`)

Ammonia is one substance-specific direct air release from the slaughter area.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate released mass from measured exhaust flow and temporally matched ammonia concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_air`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on a measured direct release.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Slaughter hydrogen sulfide release (`separation_hydrogen_sulfide_to_air`)

Hydrogen sulfide is recorded separately from ammonia.

- Selected flow: Hydrogen sulfide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate released mass from measured exhaust flow and temporally matched hydrogen sulfide concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_air`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on a measured direct release.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`



### Process: Organ-specific trimming, washing, and inspection (`offal_preparation`)

#### Inputs

##### Product flows

###### Untrimmed liver input (`preparation_untrimmed_liver_input`)

This organ-specific intermediate connects slaughter separation to trimming, washing, and inspection.

- Selected flow: Untrimmed cattle liver
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated separated-liver transfer record from the slaughter process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on recovery of liver for edible use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed heart input (`preparation_untrimmed_heart_input`)

This organ-specific intermediate connects slaughter separation to trimming, washing, and inspection.

- Selected flow: Untrimmed cattle heart
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated separated-heart transfer record from the slaughter process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on recovery of heart for edible use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed kidney input (`preparation_untrimmed_kidney_input`)

This organ-specific intermediate connects slaughter separation to trimming, washing, and inspection.

- Selected flow: Untrimmed cattle kidney
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated separated-kidney transfer record from the slaughter process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on recovery of kidney for edible use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed tongue input (`preparation_untrimmed_tongue_input`)

This organ-specific intermediate connects slaughter separation to trimming, washing, and inspection.

- Selected flow: Untrimmed cattle tongue
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated separated-tongue transfer record from the slaughter process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on recovery of tongue for edible use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed stomach input (`preparation_untrimmed_stomach_input`)

This organ-specific intermediate connects slaughter separation to trimming, washing, and inspection.

- Selected flow: Untrimmed cattle stomach
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated separated-stomach transfer record from the slaughter process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on recovery of stomach for edible use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed small intestine input (`preparation_untrimmed_small_intestine_input`)

This organ-specific intermediate connects slaughter separation to trimming, washing, and inspection.

- Selected flow: Untrimmed cattle small intestine
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated separated-small intestine transfer record from the slaughter process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on recovery of small intestine for edible use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Untrimmed large intestine input (`preparation_untrimmed_large_intestine_input`)

This organ-specific intermediate connects slaughter separation to trimming, washing, and inspection.

- Selected flow: Untrimmed cattle large intestine
- Flow property / unit: Mass / kg
- Amount rule: Use the calibrated separated-large intestine transfer record from the slaughter process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on recovery of large intestine for edible use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Preparation electricity (`preparation_electricity`)

Electricity serves trimming, washing, inspection, conveyors, pumps, and directly associated equipment.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the offal-preparation submeter; allocate shared use only from documented equipment activity.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Preparation wash water (`preparation_water`)

This water excludes facility-cleaning water assigned to the cleaning process.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered water supplied directly to organ washing and preparation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for wet organ preparation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh liver component (`preparation_fresh_liver`)

This liver is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the liver component in the fresh state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_organ_components`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on liver being present in the declared composition and on the fresh market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh heart component (`preparation_fresh_heart`)

This heart is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the heart component in the fresh state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_organ_components`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on heart being present in the declared composition and on the fresh market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh kidney component (`preparation_fresh_kidney`)

This kidney is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle kidney, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the kidney component in the fresh state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_organ_components`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on kidney being present in the declared composition and on the fresh market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh tongue component (`preparation_fresh_tongue`)

This tongue is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle tongue, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the tongue component in the fresh state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_organ_components`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on tongue being present in the declared composition and on the fresh market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh stomach component (`preparation_fresh_stomach`)

This stomach is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle stomach, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the stomach component in the fresh state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_organ_components`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on stomach being present in the declared composition and on the fresh market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh small intestine component (`preparation_fresh_small_intestine`)

This small intestine is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle small intestine, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the small intestine component in the fresh state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_organ_components`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on small intestine being present in the declared composition and on the fresh market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh large intestine component (`preparation_fresh_large_intestine`)

This large intestine is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle large intestine, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the large intestine component in the fresh state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_organ_components`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on large intestine being present in the declared composition and on the fresh market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### liver trimming waste (`preparation_liver_trim_waste`)

Rejected tissue removed from the liver is one organ-specific waste stream.

- Selected flow: Cattle liver trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated wet mass removed from the liver during trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_organ_components`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on generation of liver trimming waste.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### heart trimming waste (`preparation_heart_trim_waste`)

Rejected tissue removed from the heart is one organ-specific waste stream.

- Selected flow: Cattle heart trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated wet mass removed from the heart during trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_organ_components`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on generation of heart trimming waste.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### kidney trimming waste (`preparation_kidney_trim_waste`)

Rejected tissue removed from the kidney is one organ-specific waste stream.

- Selected flow: Cattle kidney trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated wet mass removed from the kidney during trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_organ_components`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on generation of kidney trimming waste.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### tongue trimming waste (`preparation_tongue_trim_waste`)

Rejected tissue removed from the tongue is one organ-specific waste stream.

- Selected flow: Cattle tongue trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated wet mass removed from the tongue during trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_organ_components`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on generation of tongue trimming waste.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### stomach trimming waste (`preparation_stomach_trim_waste`)

Rejected tissue removed from the stomach is one organ-specific waste stream.

- Selected flow: Cattle stomach trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated wet mass removed from the stomach during trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_organ_components`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on generation of stomach trimming waste.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### small intestine trimming waste (`preparation_small_intestine_trim_waste`)

Rejected tissue removed from the small intestine is one organ-specific waste stream.

- Selected flow: Cattle small intestine trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated wet mass removed from the small intestine during trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_organ_components`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on generation of small intestine trimming waste.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### large intestine trimming waste (`preparation_large_intestine_trim_waste`)

Rejected tissue removed from the large intestine is one organ-specific waste stream.

- Selected flow: Cattle large intestine trimming waste
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated wet mass removed from the large intestine during trimming, washing, and inspection.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_organ_components`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on generation of large intestine trimming waste.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Offal-washing wastewater (`preparation_high_load_wastewater`)

This wastewater leaves organ trimming and washing for treatment.

- Selected flow: High-organic-load cattle offal washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record a dedicated flow meter or calculate volume from matched organ-washing water records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_organ_components`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when organ washing generates wastewater.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows



### Process: Conditional chilling and freezing (`temperature_conditioning`)

#### Inputs

##### Product flows

###### Fresh liver entering temperature conditioning (`conditioning_fresh_liver_input`)

This organ-specific input enters the selected chilled or frozen route; the fresh release route bypasses this process.

- Selected flow: Cattle liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured prepared fresh liver mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on liver being chilled or frozen.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh heart entering temperature conditioning (`conditioning_fresh_heart_input`)

This organ-specific input enters the selected chilled or frozen route; the fresh release route bypasses this process.

- Selected flow: Cattle heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured prepared fresh heart mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on heart being chilled or frozen.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh kidney entering temperature conditioning (`conditioning_fresh_kidney_input`)

This organ-specific input enters the selected chilled or frozen route; the fresh release route bypasses this process.

- Selected flow: Cattle kidney, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured prepared fresh kidney mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on kidney being chilled or frozen.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh tongue entering temperature conditioning (`conditioning_fresh_tongue_input`)

This organ-specific input enters the selected chilled or frozen route; the fresh release route bypasses this process.

- Selected flow: Cattle tongue, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured prepared fresh tongue mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on tongue being chilled or frozen.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh stomach entering temperature conditioning (`conditioning_fresh_stomach_input`)

This organ-specific input enters the selected chilled or frozen route; the fresh release route bypasses this process.

- Selected flow: Cattle stomach, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured prepared fresh stomach mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on stomach being chilled or frozen.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh small intestine entering temperature conditioning (`conditioning_fresh_small_intestine_input`)

This organ-specific input enters the selected chilled or frozen route; the fresh release route bypasses this process.

- Selected flow: Cattle small intestine, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured prepared fresh small intestine mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on small intestine being chilled or frozen.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh large intestine entering temperature conditioning (`conditioning_fresh_large_intestine_input`)

This organ-specific input enters the selected chilled or frozen route; the fresh release route bypasses this process.

- Selected flow: Cattle large intestine, fresh
- Flow property / unit: Mass / kg
- Amount rule: Use the measured prepared fresh large intestine mass assigned to chilling or freezing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on large intestine being chilled or frozen.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilling electricity (`conditioning_chilling_electricity`)

This electricity row applies only to chilling equipment.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the chiller submeter and calculate the lot share from metered operation and product residence time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on chilled or frozen processing that includes pre-chilling.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Freezing electricity (`conditioning_freezing_electricity`)

This electricity row applies only to freezing equipment.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the freezer submeter and calculate the lot share from metered operation and product residence time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on the frozen route.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Cold-system process water (`conditioning_process_water`)

Cold-system water includes documented defrost or equipment water supplied inside this process boundary.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record metered water used directly by the cold system, excluding facility-cleaning water.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on process-water use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### R717 refrigerant make-up (`conditioning_r717_makeup`)

R717 is recorded as one refrigerant species and one circuit-specific make-up exchange.

- Selected flow: Ammonia, refrigerant grade R717
- Flow property / unit: Mass / kg
- Amount rule: Calculate make-up mass from purchase, cylinder, service, and refrigeration-system inventory records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on an R717 circuit.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### R744 refrigerant make-up (`conditioning_r744_makeup`)

R744 is recorded as one refrigerant species and one circuit-specific make-up exchange.

- Selected flow: Carbon dioxide, refrigerant grade R744
- Flow property / unit: Mass / kg
- Amount rule: Calculate make-up mass from purchase, cylinder, service, and refrigeration-system inventory records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on an R744 circuit.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### R290 refrigerant make-up (`conditioning_r290_makeup`)

R290 is recorded as one refrigerant species and one circuit-specific make-up exchange.

- Selected flow: Propane, refrigerant grade R290
- Flow property / unit: Mass / kg
- Amount rule: Calculate make-up mass from purchase, cylinder, service, and refrigeration-system inventory records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
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

###### Chilled liver component (`conditioning_chilled_liver`)

This liver is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the liver component in the chilled state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on liver being present in the declared composition and on the chilled market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled heart component (`conditioning_chilled_heart`)

This heart is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the heart component in the chilled state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on heart being present in the declared composition and on the chilled market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled kidney component (`conditioning_chilled_kidney`)

This kidney is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle kidney, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the kidney component in the chilled state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on kidney being present in the declared composition and on the chilled market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled tongue component (`conditioning_chilled_tongue`)

This tongue is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle tongue, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the tongue component in the chilled state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on tongue being present in the declared composition and on the chilled market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled stomach component (`conditioning_chilled_stomach`)

This stomach is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle stomach, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the stomach component in the chilled state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on stomach being present in the declared composition and on the chilled market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled small intestine component (`conditioning_chilled_small_intestine`)

This small intestine is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle small intestine, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the small intestine component in the chilled state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on small intestine being present in the declared composition and on the chilled market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled large intestine component (`conditioning_chilled_large_intestine`)

This large intestine is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle large intestine, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the large intestine component in the chilled state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on large intestine being present in the declared composition and on the chilled market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen liver component (`conditioning_frozen_liver`)

This liver is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the liver component in the frozen state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on liver being present in the declared composition and on the frozen market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen heart component (`conditioning_frozen_heart`)

This heart is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the heart component in the frozen state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on heart being present in the declared composition and on the frozen market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen kidney component (`conditioning_frozen_kidney`)

This kidney is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle kidney, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the kidney component in the frozen state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on kidney being present in the declared composition and on the frozen market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen tongue component (`conditioning_frozen_tongue`)

This tongue is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle tongue, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the tongue component in the frozen state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on tongue being present in the declared composition and on the frozen market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen stomach component (`conditioning_frozen_stomach`)

This stomach is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle stomach, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the stomach component in the frozen state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on stomach being present in the declared composition and on the frozen market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen small intestine component (`conditioning_frozen_small_intestine`)

This small intestine is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle small intestine, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the small intestine component in the frozen state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on small intestine being present in the declared composition and on the frozen market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen large intestine component (`conditioning_frozen_large_intestine`)

This large intestine is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle large intestine, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the large intestine component in the frozen state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on large intestine being present in the declared composition and on the frozen market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Defrost wastewater (`conditioning_defrost_wastewater`)

Defrost wastewater is one specific aqueous waste stream.

- Selected flow: Cold-system defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the defrost drain meter or calculate volume from metered defrost water less documented evaporation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on wet defrost operation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Condensate wastewater (`conditioning_condensate_wastewater`)

Condensate leaving the cold system is recorded separately from defrost wastewater.

- Selected flow: Cold-system condensate wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the dedicated condensate drain meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_records`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on condensate discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

###### R717 release to air (`conditioning_r717_to_air`)

The direct release is the same chemical species as the R717 make-up flow.

- Selected flow: Ammonia, R717 refrigerant, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate loss from the reconciled R717 circuit inventory and match it to leak and service records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on a measured or reconciled R717 loss.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### R744 release to air (`conditioning_r744_to_air`)

The direct release is the same chemical species as the R744 make-up flow.

- Selected flow: Carbon dioxide, R744 refrigerant, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate loss from the reconciled R744 circuit inventory and match it to leak and service records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on a measured or reconciled R744 loss.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### R290 release to air (`conditioning_r290_to_air`)

The direct release is the same chemical species as the R290 make-up flow.

- Selected flow: Propane, R290 refrigerant, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate loss from the reconciled R290 circuit inventory and match it to leak and service records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on a measured or reconciled R290 loss.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`



### Process: Composition assembly, packaging, storage, and release (`packaging_storage_release`)

#### Inputs

##### Product flows

###### Fresh liver component (`packaging_fresh_liver`)

This liver is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle liver, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the liver component in the fresh state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on liver being present in the declared composition and on the fresh market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh heart component (`packaging_fresh_heart`)

This heart is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle heart, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the heart component in the fresh state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on heart being present in the declared composition and on the fresh market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh kidney component (`packaging_fresh_kidney`)

This kidney is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle kidney, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the kidney component in the fresh state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on kidney being present in the declared composition and on the fresh market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh tongue component (`packaging_fresh_tongue`)

This tongue is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle tongue, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the tongue component in the fresh state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on tongue being present in the declared composition and on the fresh market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh stomach component (`packaging_fresh_stomach`)

This stomach is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle stomach, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the stomach component in the fresh state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on stomach being present in the declared composition and on the fresh market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh small intestine component (`packaging_fresh_small_intestine`)

This small intestine is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle small intestine, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the small intestine component in the fresh state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on small intestine being present in the declared composition and on the fresh market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fresh large intestine component (`packaging_fresh_large_intestine`)

This large intestine is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle large intestine, fresh
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the large intestine component in the fresh state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on large intestine being present in the declared composition and on the fresh market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled liver component (`packaging_chilled_liver`)

This liver is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle liver, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the liver component in the chilled state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on liver being present in the declared composition and on the chilled market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled heart component (`packaging_chilled_heart`)

This heart is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle heart, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the heart component in the chilled state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on heart being present in the declared composition and on the chilled market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled kidney component (`packaging_chilled_kidney`)

This kidney is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle kidney, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the kidney component in the chilled state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on kidney being present in the declared composition and on the chilled market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled tongue component (`packaging_chilled_tongue`)

This tongue is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle tongue, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the tongue component in the chilled state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on tongue being present in the declared composition and on the chilled market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled stomach component (`packaging_chilled_stomach`)

This stomach is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle stomach, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the stomach component in the chilled state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on stomach being present in the declared composition and on the chilled market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled small intestine component (`packaging_chilled_small_intestine`)

This small intestine is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle small intestine, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the small intestine component in the chilled state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on small intestine being present in the declared composition and on the chilled market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled large intestine component (`packaging_chilled_large_intestine`)

This large intestine is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle large intestine, chilled
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the large intestine component in the chilled state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on large intestine being present in the declared composition and on the chilled market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen liver component (`packaging_frozen_liver`)

This liver is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle liver, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the liver component in the frozen state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on liver being present in the declared composition and on the frozen market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen heart component (`packaging_frozen_heart`)

This heart is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle heart, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the heart component in the frozen state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on heart being present in the declared composition and on the frozen market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen kidney component (`packaging_frozen_kidney`)

This kidney is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle kidney, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the kidney component in the frozen state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on kidney being present in the declared composition and on the frozen market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen tongue component (`packaging_frozen_tongue`)

This tongue is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle tongue, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the tongue component in the frozen state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on tongue being present in the declared composition and on the frozen market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen stomach component (`packaging_frozen_stomach`)

This stomach is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle stomach, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the stomach component in the frozen state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on stomach being present in the declared composition and on the frozen market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen small intestine component (`packaging_frozen_small_intestine`)

This small intestine is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle small intestine, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the small intestine component in the frozen state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on small intestine being present in the declared composition and on the frozen market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen large intestine component (`packaging_frozen_large_intestine`)

This large intestine is one separately measured component of the cattle edible-offal product composition.

- Selected flow: Cattle large intestine, frozen
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated net mass of the large intestine component in the frozen state and link it to the declared reference-product composition.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_composition`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on large intestine being present in the declared composition and on the frozen market state.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Packaging electricity (`packaging_electricity`)

This electricity serves packaging and release equipment.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the packaging-line submeter and calculate the lot share from metered operation time.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chilled-storage electricity (`storage_chilled_electricity`)

This electricity row applies only to chilled product storage through release.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the chilled-store submeter and calculate the lot share from measured occupancy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on the chilled state.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Frozen-storage electricity (`storage_frozen_electricity`)

This electricity row applies only to frozen product storage through release.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the frozen-store submeter and calculate the lot share from measured occupancy.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_release`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on the frozen state.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### LDPE film packaging (`packaging_ldpe_film`)

LDPE film is one specific packaging material and its mass is excluded from reference-product mass.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Calculate consumed film mass from the product-specific BoM and issued-minus-returned roll mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on LDPE film use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fibreboard box packaging (`packaging_fibreboard_box`)

Corrugated fibreboard is recorded separately from polymer, paper, and wood packaging.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Calculate consumed box mass from the product-specific BoM, box count, and verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on corrugated fibreboard use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Paper label packaging (`packaging_paper_label`)

Paper labels are recorded separately from fibreboard boxes.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Calculate label mass from applied label count and verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on paper label use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wood pallet packaging (`packaging_wood_pallet`)

Wood pallets are recorded as one distinct reusable packaging component.

- Selected flow: Wood pallet
- Flow property / unit: Mass / kg
- Amount rule: Calculate pallet mass from pallet count, verified unit mass, and documented reuse cycles.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_bom`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on wood pallet use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference cattle edible offal (`cattle_edible_offal_reference_product`)

This is the CPC 21151 quantitative reference output after composition assembly, packaging, storage, quality release, and net-mass determination.

- Selected flow: Edible offal of cattle, fresh, chilled or frozen `a6673976-2ef4-4502-b9f5-bbc57099bb40`
- Flow property / unit: Mass / kg
- Amount rule: Record 1 kg net conforming cattle edible offal released at the facility gate; exclude packaging mass and require the organ composition and one market state.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- UUID status: Verified public state=100 Product flow, version 01.01.000; exact CPC 21151 and Mass reference.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required; exactly one quantitative reference output per dataset.
- Sources: `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Rejected liver at packaging (`packaging_rejected_liver`)

Rejected liver is kept separate from accepted composition mass and from every packaging waste stream.

- Selected flow: Rejected cattle liver from packaging
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated mass of the liver rejected during packaging, storage, or final release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on rejection of liver during final handling.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected heart at packaging (`packaging_rejected_heart`)

Rejected heart is kept separate from accepted composition mass and from every packaging waste stream.

- Selected flow: Rejected cattle heart from packaging
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated mass of the heart rejected during packaging, storage, or final release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on rejection of heart during final handling.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected kidney at packaging (`packaging_rejected_kidney`)

Rejected kidney is kept separate from accepted composition mass and from every packaging waste stream.

- Selected flow: Rejected cattle kidney from packaging
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated mass of the kidney rejected during packaging, storage, or final release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on rejection of kidney during final handling.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected tongue at packaging (`packaging_rejected_tongue`)

Rejected tongue is kept separate from accepted composition mass and from every packaging waste stream.

- Selected flow: Rejected cattle tongue from packaging
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated mass of the tongue rejected during packaging, storage, or final release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on rejection of tongue during final handling.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected stomach at packaging (`packaging_rejected_stomach`)

Rejected stomach is kept separate from accepted composition mass and from every packaging waste stream.

- Selected flow: Rejected cattle stomach from packaging
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated mass of the stomach rejected during packaging, storage, or final release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on rejection of stomach during final handling.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected small intestine at packaging (`packaging_rejected_small_intestine`)

Rejected small intestine is kept separate from accepted composition mass and from every packaging waste stream.

- Selected flow: Rejected cattle small intestine from packaging
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated mass of the small intestine rejected during packaging, storage, or final release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on rejection of small intestine during final handling.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Rejected large intestine at packaging (`packaging_rejected_large_intestine`)

Rejected large intestine is kept separate from accepted composition mass and from every packaging waste stream.

- Selected flow: Rejected cattle large intestine from packaging
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated mass of the large intestine rejected during packaging, storage, or final release.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on rejection of large intestine during final handling.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### LDPE film waste (`packaging_ldpe_film_waste`)

LDPE waste is one material-specific packaging waste stream.

- Selected flow: Low-density polyethylene film offcut waste
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated LDPE film offcut and rejected-film mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fibreboard packaging waste (`packaging_fibreboard_waste`)

Fibreboard waste is recorded separately from paper, polymer, and wood waste.

- Selected flow: Corrugated fibreboard packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Record calibrated damaged-box and fibreboard-offcut mass.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Paper label waste (`packaging_paper_label_waste`)

Paper-label waste is recorded separately from fibreboard waste.

- Selected flow: Paper label waste
- Flow property / unit: Mass / kg
- Amount rule: Calculate rejected-label mass from count and verified unit mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on generation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Wood pallet waste (`packaging_wood_pallet_waste`)

Damaged wood pallets are one specific packaging waste stream.

- Selected flow: Damaged wood pallet waste
- Flow property / unit: Mass / kg
- Amount rule: Calculate retired pallet mass from verified unit mass and documented lot use.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_waste`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on pallet retirement.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows



### Process: Cleaning, disinfection, and on-site thermal utility operation (`cleaning_thermal_utilities`)

#### Inputs

##### Product flows

###### Cleaning electricity (`cleaning_electricity`)

Electricity operates cleaning pumps, pressure washers, dosing equipment, and ventilation.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the cleaning-system submeter and calculate the lot share from metered hygiene-cycle operation.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Required when grid electricity is consumed.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Cleaning water (`cleaning_water`)

Cleaning water is kept separate from process water recorded in production stages.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the cleaning-water meter for hygiene cycles assigned to the production lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required for wet cleaning.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Purchased steam (`cleaning_purchased_steam`)

Purchased steam is one imported heat carrier and is not combined with on-site boiler fuel.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Calculate delivered steam energy from supplier meter data and documented steam condition.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on purchased steam use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Purchased hot water (`cleaning_purchased_hot_water`)

Purchased hot water is separate from purchased steam and on-site fuel.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Calculate delivered hot-water energy from metered mass or volume and measured temperature change.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on purchased hot-water use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Natural-gas input (`cleaning_natural_gas`)

Natural gas is one on-site heat-generation route and must not duplicate purchased heat.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Calculate energy from the calibrated gas meter and period-matched supplier quality data.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on natural-gas use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Diesel input (`cleaning_diesel`)

Diesel is one on-site heat-generation route and must not duplicate purchased heat.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Calculate energy from calibrated tank or purchase records and a documented fuel-property record.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on diesel use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### LPG input (`cleaning_lpg`)

Liquefied petroleum gas is one on-site heat-generation route and must not duplicate purchased heat.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Calculate energy from calibrated tank or purchase records and a documented fuel-property record.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_thermal_utility`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on liquefied petroleum gas use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Sodium hydroxide cleaning agent (`cleaning_sodium_hydroxide`)

Sodium hydroxide is one chemical species.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass from chemical stock and dosing records for assigned hygiene cycles.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
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
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
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

Routine cleaning wastewater is one distinct stream sent to treatment or an off-site receiver.

- Selected flow: Routine cattle-offal cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the routine cleaning-drain meter for water not classified as high-organic-load wastewater.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Required when generated.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### High-load cleaning wastewater (`cleaning_high_load_wastewater`)

This stream carries concentrated blood, fat, or tissue residues from hygiene operations.

- Selected flow: High-organic-load cattle-offal cleaning wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the segregated high-load drain meter or calculate volume from matched wash-water records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on segregated high-load collection.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

###### Fossil carbon dioxide release (`combustion_co2_fossil_to_air`)

Fossil carbon dioxide is one direct substance-specific combustion release.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from measured on-site fuel use and a documented fuel-specific carbon balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on on-site fossil-fuel combustion.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nitrogen monoxide release (`combustion_nitrogen_monoxide_to_air`)

Nitrogen monoxide is recorded separately from nitrogen dioxide.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from direct measurement or a verified equipment-specific factor applied to measured fuel.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on on-site combustion and available evidence.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Nitrogen dioxide release (`combustion_nitrogen_dioxide_to_air`)

Nitrogen dioxide is recorded separately from nitrogen monoxide.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from direct measurement or a verified equipment-specific factor applied to measured fuel.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on on-site combustion and available evidence.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Sulfur dioxide release (`combustion_sulfur_dioxide_to_air`)

Sulfur dioxide is one substance-specific direct release.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from measured fuel use and documented sulfur content or direct measurement.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on on-site combustion and sulfur in the fuel.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Fine particulate release (`combustion_pm25_to_air`)

Fine particulate matter is recorded in the stated aerodynamic size fraction.

- Selected flow: Particulate matter below 2.5 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from direct measurement or a verified equipment-specific factor applied to measured fuel.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on on-site combustion and available evidence.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Coarse particulate release (`combustion_pm_coarse_to_air`)

Coarse particulate matter is separate from the below-2.5-micrometre fraction.

- Selected flow: Particulate matter from 2.5 to 10 micrometres to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate mass from direct measurement or a verified equipment-specific factor applied to measured fuel.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_releases`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on on-site combustion and available evidence.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`



### Process: On-site cattle-offal wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment electricity (`wwtp_electricity`)

Electricity operates pumps, aeration, separation, and sludge handling.

- Selected flow: Electricity, grid supply
- Flow property / unit: Energy / kWh
- Amount rule: Record the treatment-plant submeter and calculate the lot share from metered treated volume or pollutant load.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
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
- Amount rule: Record metered clean water used for reagent preparation or equipment operation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on clean-water use.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Calcium hydroxide reagent (`wwtp_calcium_hydroxide`)

Calcium hydroxide is one precipitation or pH-control reagent.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass from treatment-chemical stock and dosing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on calcium hydroxide dosing.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Aluminium sulfate reagent (`wwtp_aluminium_sulfate`)

Aluminium sulfate is one phosphorus-precipitation reagent.

- Selected flow: Aluminium sulfate
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass from treatment-chemical stock and dosing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on aluminium sulfate dosing.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Ferric chloride reagent (`wwtp_ferric_chloride`)

Ferric chloride is one phosphorus-precipitation reagent.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Record issued mass from treatment-chemical stock and dosing records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on ferric chloride dosing.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Routine wastewater input (`wwtp_routine_wastewater_input`)

Routine wastewater remains separate from high-organic-load wastewater.

- Selected flow: Routine cattle-offal wastewater
- Flow property / unit: Volume / m3
- Amount rule: Sum metered routine wastewater transfers entering on-site treatment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on receipt of this stream.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### High-load wastewater input (`wwtp_high_load_wastewater_input`)

High-organic-load wastewater is one distinct treatment input.

- Selected flow: High-organic-load cattle-offal wastewater
- Flow property / unit: Volume / m3
- Amount rule: Sum metered high-organic-load wastewater transfers entering on-site treatment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwtp_inputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on receipt of this stream.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

#### Outputs

##### Product flows

###### Reclaimed water (`wwtp_reclaimed_water`)

Treated water is a product output only when quality and destination evidence demonstrate productive reuse.

- Selected flow: Reclaimed process water
- Flow property / unit: Volume / m3
- Amount rule: Record the reclaimed-water meter at transfer to an approved productive use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on documented reuse.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Waste flows

###### Treated wastewater to sewer (`wwtp_treated_wastewater_to_sewer`)

This waste flow is a sewer or off-site-treatment transfer, not a direct surface-water release.

- Selected flow: Treated cattle-offal wastewater to sewer
- Flow property / unit: Volume / m3
- Amount rule: Record the final sewer-discharge meter after on-site treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on sewer or off-site transfer.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Screening solids (`wwtp_screening_solids`)

Screening solids are separate from grease skim and sludge.

- Selected flow: Cattle-offal wastewater screening solids
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass removed by screens and dispatched to waste treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on screening.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Grease skim (`wwtp_grease_skim`)

Grease skim is separate from biological and chemical sludge.

- Selected flow: Cattle-offal wastewater grease skim
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass removed by grease separation or flotation.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on grease separation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Biological sludge (`wwtp_biological_sludge`)

Biological sludge is one distinct treatment residue.

- Selected flow: Cattle-offal biological wastewater sludge
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass and measured dry-matter fraction of biological sludge leaving treatment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on biological treatment.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Chemical precipitation sludge (`wwtp_chemical_sludge`)

Chemical-precipitation sludge is separate from biological sludge.

- Selected flow: Cattle-offal chemical precipitation sludge
- Flow property / unit: Mass / kg
- Amount rule: Record wet mass and measured dry-matter fraction of chemical-precipitation sludge.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwtp_outputs`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document instrument resolution, calibration status, missing records, and lot-allocation uncertainty.
- Applicability: Conditional on chemical precipitation.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### Elementary flows

###### Chemical oxygen demand release (`wwtp_cod_to_water`)

COD is one monitored direct water-release parameter.

- Selected flow: Chemical oxygen demand to surface water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged load from measured effluent volume and temporally matched COD concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
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
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_discharge`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on direct surface-water discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Total nitrogen release (`wwtp_total_nitrogen_to_water`)

Total nitrogen is one monitored direct water-release parameter.

- Selected flow: Total nitrogen to surface water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged load from measured effluent volume and temporally matched total-nitrogen concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_discharge`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on direct surface-water discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Total phosphorus release (`wwtp_total_phosphorus_to_water`)

Total phosphorus is one monitored direct water-release parameter.

- Selected flow: Total phosphorus to surface water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged load from measured effluent volume and temporally matched total-phosphorus concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
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
- Amount rule: Calculate discharged load from measured effluent volume and temporally matched suspended-solids concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_water_discharge`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on direct surface-water discharge.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Treatment ammonia release (`wwtp_ammonia_to_air`)

Ammonia is one substance-specific direct air release from treatment.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate released mass from measured exhaust flow and temporally matched ammonia concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwtp_air`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on a measured direct release.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### Treatment hydrogen sulfide release (`wwtp_hydrogen_sulfide_to_air`)

Hydrogen sulfide is recorded separately from ammonia.

- Selected flow: Hydrogen sulfide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate released mass from measured exhaust flow and temporally matched hydrogen sulfide concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming cattle edible offal at the facility gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwtp_air`
- UUID status: Unresolved; the Tiangong flow UUID is intentionally omitted.
- Uncertainty: Document input-record uncertainty, calculation assumptions, factor provenance, and allocation uncertainty.
- Applicability: Conditional on a measured direct release.
- Sources: `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | multi-output slaughter and preparation | First avoid allocation through process subdivision and direct measurement of carcass, each organ, co-product, utility, and waste stream. | `eu-2021-2279-environmental-footprint` |
| `allocation_expand` | co-products with additional functions | If subdivision cannot resolve a co-product function, investigate transparent system expansion before partitioning burdens. | `eu-2021-2279-environmental-footprint` |
| `allocation_physical` | remaining multi-output process | When allocation remains necessary, use a documented physical relationship reflecting causal input use and output generation. | `eu-2021-2279-environmental-footprint` |
| `allocation_economic` | remaining unresolved relationship | Use economic allocation only when subdivision, system expansion, and a relevant physical relationship are not defensible; use period-matched facility records and disclose sensitivity. | `eu-2021-2279-environmental-footprint` |
| `allocation_status` | each carcass, hide, blood, fat, organ, water, and residue row | Establish product or waste status from quality, legal status, and destination evidence before allocation; never assign the same quantity to both statuses. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `allocation_composition` | reference-product organ components | Do not allocate burdens among organ components merely because they are assembled into one declared reference product; their measured masses form the product composition. | `eu-2021-2279-environmental-footprint` |
| `allocation_waste` | waste treatment | Do not credit a waste destination unless the selected LCA method and documented receiving function require it; disclose the modelling choice. | `eu-2021-2279-environmental-footprint` |
| `allocation_consistency` | all process links | Do not double count an intermediate organ transfer, purchased heat and its upstream fuel, refrigerant make-up and an unrelated loss, or wastewater output and the same treatment input. | `eu-2021-2279-environmental-footprint` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `cattle_receiving` | live cattle, receiving utilities, accepted transfer, manure, and lairage wastewater | scale ticket; acceptance log; utility meter; waste record | timestamp; lot_id; meter_or_scale_id; opening_reading; closing_reading; gross_mass; tare_mass; destination | Reconcile calibrated measurements and destination records to the production lot. | kg; m3; kWh | each lot | full study period | receiving and lairage | sum each row_id once; allocate shared electricity by documented activity | calibration certificates; signed acceptance and destination records; meter reconciliation |
| `cp_separation_inputs` | `slaughter_offal_separation` | accepted cattle, separation electricity, and process water | transfer record; electricity meter; water meter | timestamp; lot_id; source_process; meter_id; opening_reading; closing_reading | Link accepted-cattle transfer and calibrated utility meters to the slaughter lot. | kg; kWh; m3 | each lot | full study period | slaughter and evisceration line | sum direct records; allocate shared meters by documented equipment activity | transfer reconciliation; meter calibration; operating log |
| `cp_separation_outputs` | `slaughter_offal_separation` | carcass, co-products, organ intermediates, residuals, and slaughter wastewater | scale record; inspection log; destination record; wastewater meter | timestamp; lot_id; row_id; gross_mass; tare_mass; destination; legal_status; flow_reading | Weigh each physical output separately and establish product or waste status before aggregation. | kg; m3 | each lot | full study period | slaughter and offal-separation area | sum each row_id once; prohibit overlap between productive and waste destinations | scale calibration; inspection record; destination evidence; mass balance |
| `cp_slaughter_air` | `slaughter_offal_separation` | ammonia and hydrogen sulfide direct releases | airflow and concentration monitoring | timestamp; operating_state; exhaust_flow; substance; concentration; method; detection_limit | Match each substance concentration to exhaust flow and slaughter operation. | kg | monitoring campaign and material change | representative operation within study period | slaughter air-release points | integrate each measured substance mass flow over applicable operating time | laboratory report; method; instrument calibration |
| `cp_preparation_inputs` | `offal_preparation` | untrimmed organ inputs, preparation electricity, and wash water | transfer scale; utility meter; preparation log | timestamp; lot_id; organ_identity; mass; meter_id; opening_reading; closing_reading | Link every organ-specific transfer and utility record to the preparation lot. | kg; kWh; m3 | each lot | full study period | organ-preparation area | sum each row_id once; allocate shared utilities by documented operation | scale and meter calibration; transfer and preparation records |
| `cp_organ_components` | `offal_preparation` | fresh organ components, organ-specific trimming waste, and washing wastewater | component scale; inspection record; waste scale; wastewater meter | timestamp; lot_id; organ_identity; accepted_mass; rejected_mass; market_state; destination | Measure accepted and rejected mass separately for every organ identity. | kg; m3 | each lot | full study period | organ-preparation area | sum each organ row once and reconcile organ input to accepted and rejected outputs | scale calibration; food-safety inspection; destination record; mass balance |
| `cp_conditioning_records` | `temperature_conditioning` | fresh inputs, chilled outputs, frozen outputs, cold-system utilities, and aqueous waste | transfer scale; electricity meter; water meter; temperature and residence log; drain meter | timestamp; lot_id; organ_identity; market_state; mass; meter_reading; temperature; residence_time; drain_volume | Link each organ and declared state to cold-system activity and transfer records. | kg; kWh; m3 | each lot | full study period | chiller and freezer | sum each state-specific row once; prevent fresh, chilled, and frozen state mixing | scale and meter calibration; temperature log; state release record |
| `cp_refrigerant_inventory` | `temperature_conditioning` | R717, R744, and R290 make-up and releases | purchase; cylinder stock; service log; leak record; circuit inventory | date; circuit_id; refrigerant_code; opening_stock; receipts; closing_stock; recovered_mass; transferred_mass; leak_event | Reconcile each refrigerant species and circuit independently. | kg | each service event and annual closure | full study period | cold-system circuits inside boundary | opening stock plus receipts minus closing stock, recovery, and documented transfers | invoice; cylinder weights; service record; leak-detector log |
| `cp_packaging_composition` | `packaging_storage_release` | fresh, chilled, or frozen organ-component inputs | component scale; composition sheet; market-state release | timestamp; lot_id; organ_identity; market_state; net_mass; composition_share | Measure each organ component separately and use exactly one market state for the reference product. | kg | each lot | full study period | composition assembly and packaging | sum applicable organ-component masses to released net reference-product mass | scale calibration; signed composition sheet; market-state record |
| `cp_packaging_bom` | `packaging_storage_release` | each packaging component | product-specific BoM; issue-return record; component count | lot_id; component_identity; issued_mass; returned_mass; count; unit_mass; reuse_cycles | Calculate every named packaging component from the product BoM and verified stock records. | kg | each lot | full study period | packaging line | sum each component separately; allocate reusable pallets by documented use cycles | approved BoM; stock ledger; unit-mass test; pallet ledger |
| `cp_packaging_release` | `packaging_storage_release` | packaging and storage electricity plus reference-product output | electricity submeter; storage occupancy; release scale; quality record | timestamp; lot_id; market_state; output_net_mass; meter_reading; storage_duration; release_status | Determine net conforming product mass and stage electricity for the released lot. | kg; kWh | each lot | full study period | packaging, storage, and release area | sum released net product once; exclude packaging mass | scale and meter calibration; signed release; temperature record |
| `cp_packaging_waste` | `packaging_storage_release` | organ-specific rejects and each packaging waste | waste scale; reject log; component count | timestamp; lot_id; row_id; organ_identity; gross_mass; tare_mass; count; destination | Measure each organ reject and each material-specific packaging waste separately. | kg | each lot | full study period | packaging and release area | sum each row_id once; prohibit transfer into reference-product mass | waste ticket; reject record; scale calibration |
| `cp_cleaning_inputs` | `cleaning_thermal_utilities` | cleaning electricity, water, sodium hydroxide, and sodium hypochlorite | submeter; chemical issue and dosing log; hygiene-cycle record | timestamp; lot_id; cycle_id; substance; issued_mass; concentration; meter_reading | Assign measured hygiene resources to the production lot and retain chemical identity. | kg; m3; kWh | each hygiene cycle | full study period | foreground hygiene systems | sum each substance separately; allocate shared cycles by documented time or cleaned area | meter calibration; stock reconciliation; dosing log; sanitation record |
| `cp_thermal_utility` | `cleaning_thermal_utilities` | purchased steam, purchased hot water, natural gas, diesel, and liquefied petroleum gas | supplier meter; boiler meter; tank and purchase ledger | timestamp; lot_id; carrier_identity; quantity; temperature; pressure; heating_value; meter_id | Record each imported heat carrier or on-site fuel separately and reconcile alternative heat routes. | MJ | each hygiene cycle and monthly closure | full study period | thermal systems serving foreground hygiene | convert measured carrier quantity with documented properties; prohibit double counting | supplier invoice; calibrated meter; fuel-quality record; boiler log |
| `cp_cleaning_wastewater` | `cleaning_thermal_utilities` | routine and high-organic-load cleaning wastewater | segregated drain meter; hygiene-cycle log | timestamp; lot_id; stream_identity; opening_reading; closing_reading; destination | Measure routine and high-load cleaning wastewater independently. | m3 | each hygiene cycle | full study period | cleaning drains | sum each stream once by destination | drain-meter calibration; flow diagram; transfer record |
| `cp_combustion_releases` | `cleaning_thermal_utilities` | each named on-site combustion release | fuel meter; direct monitoring; verified equipment factor | timestamp; equipment_id; fuel_identity; fuel_quantity; substance; concentration_or_factor; factor_source | Determine each substance release from direct measurement or a verified factor applied to measured fuel. | kg | monitoring campaign and reporting period | full study period | on-site combustion equipment | calculate each substance separately; exclude upstream purchased-heat production | monitoring report; fuel record; factor provenance; calculation review |
| `cp_wwtp_inputs` | `onsite_wastewater_treatment` | wastewater inputs, electricity, water, and each treatment reagent | influent meters; submeter; chemical dosing and stock logs | timestamp; lot_id; stream_or_substance; meter_reading; issued_mass; concentration; treated_volume | Measure each wastewater stream and reagent independently at the treatment boundary. | kg; m3; kWh | daily and each lot allocation | full study period | on-site wastewater-treatment plant | sum each row_id separately; allocate shared treatment by measured volume or pollutant load | meter calibration; chemical stock reconciliation; treatment log |
| `cp_wwtp_outputs` | `onsite_wastewater_treatment` | reclaimed water, sewer wastewater, screening solids, grease skim, and each sludge | outlet meter; waste scale; destination and quality record | timestamp; row_id; volume; wet_mass; dry_matter; quality_result; destination | Measure each treatment output separately and establish product or waste status. | kg; m3 | daily and each dispatch | full study period | on-site wastewater-treatment plant | sum each row_id once; keep reuse, sewer, and residue destinations distinct | meter and scale calibration; laboratory result; dispatch record |
| `cp_water_discharge` | `onsite_wastewater_treatment` | COD, BOD5, total nitrogen, total phosphorus, and total suspended solids releases | final-effluent flow meter and accredited laboratory analysis | timestamp; sample_id; effluent_volume; parameter; concentration; method; detection_limit | Match each parameter concentration to the same direct-discharge period. | kg | permit monitoring frequency and material change | full study period | final direct-discharge point | effluent volume multiplied by temporally matched concentration for each parameter | laboratory accreditation; chain of custody; meter calibration; calculation review |
| `cp_wwtp_air` | `onsite_wastewater_treatment` | ammonia and hydrogen sulfide direct releases | airflow and concentration monitoring | timestamp; operating_state; exhaust_flow; substance; concentration; method; detection_limit | Match each substance concentration to treatment airflow and operating time. | kg | monitoring campaign and material change | representative operation within study period | wastewater-treatment air-release points | integrate each substance mass flow over applicable operating time | laboratory report; method; instrument calibration |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | Divide the lot-attributed exchange by released net conforming cattle edible-offal mass. | lot-attributed exchange; released net reference-product mass | exchange per 1 kg reference product | `eu-2021-2279-environmental-footprint` |
| `calc_composition_sum` | all organ-component rows | Sum only the applicable organ-specific component masses in one declared market state and reconcile the sum to released net reference-product mass. | organ identity; organ net mass; market state; released net mass | declared organ composition and composition mass balance | `eu-2021-2279-environmental-footprint` |
| `calc_stage_electricity` | each stage electricity row | Use a direct stage submeter; for a shared meter, multiply the metered total by an auditable activity, residence-time, or occupancy share. | meter total; activity or occupancy; lot release mass | stage electricity per reference flow | `eu-2021-2279-environmental-footprint` |
| `calc_mass_balance` | cattle, carcass, organ, co-product, and waste mass rows | Reconcile measured mass entering each process with separately recorded product and waste outputs; investigate rather than distribute unexplained imbalance. | input masses; output masses; moisture or stock change | documented process mass balance | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_refrigerant_loss` | each refrigerant species | For each circuit and species, reconcile opening stock plus receipts against closing stock, recovered mass, and documented transfers. | opening stock; receipts; closing stock; recovered mass; transfers; service records | species-specific refrigerant loss | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_packaging_mass` | each packaging component | Calculate use from issued mass less returned mass, or component count multiplied by verified unit mass; apply documented reuse cycles only to reusable pallets. | issued mass; returned mass; count; unit mass; reuse ledger | component mass per reference flow | `eu-2021-2279-environmental-footprint` |
| `calc_thermal_energy` | each purchased heat carrier and on-site fuel | Convert measured carrier quantity to delivered energy using period-matched temperature, pressure, density, or heating-value records. | measured carrier quantity; carrier property records | MJ per reference flow | `eu-2021-2279-environmental-footprint` |
| `calc_combustion_release` | each direct combustion substance | Use direct measured mass flow where available; otherwise apply a verified equipment-specific factor to measured fuel and retain provenance. | measured fuel; direct concentration and flow or verified factor | substance mass to air per reference flow | `eu-2021-2279-environmental-footprint` |
| `calc_wastewater_volume` | each wastewater stream | Use a dedicated meter; when calculated, subtract only documented retained, recovered, or evaporated water from matched metered supply. | stream meter or matched water-balance records | m3 wastewater per reference flow | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_water_release` | each direct water-release parameter | Multiply measured final-effluent volume by a temporally matched measured concentration and convert units without substituting a limit for a measurement. | effluent volume; parameter concentration; unit conversion | parameter mass to surface water per reference flow | `ec-jrc-2024-sa-bref-jrc135916` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_specific` | reference product and packaging | Use product-specific organ composition, market state, net mass, BoM, storage, and release records. | approved composition; BoM; signed lot release |
| `dq_site_specific` | foreground operations | Use company-specific activity data and direct releases for processes operated by the reporting facility. | meter, scale, ledger, laboratory, and service records |
| `dq_state_identity` | all organ components | Declare exactly one of fresh, chilled, or frozen for the reference product and preserve that state on every applicable component row. | temperature record; state release; composition sheet |
| `dq_temporal` | all foreground rows | Cover a representative production period and disclose shutdowns, maintenance, seasonal storage, and missing intervals. | coverage statement; gap register; operating calendar |
| `dq_technology` | conditioning, storage, thermal utility, and wastewater treatment | Identify actual equipment, refrigerant species, heat route, and treatment configuration. | equipment register; piping diagram; service log; process-flow diagram |
| `dq_mass_balance` | cattle and organ conversion | Reconcile live cattle, carcass, each organ, co-products, residuals, wastewater-associated solids, and stock change. | signed mass-balance worksheet and investigated residuals |
| `dq_meter_reconciliation` | utilities and wastewater | Reconcile submeters to facility meters and document each allocation driver. | meter hierarchy; calibration record; allocation worksheet |
| `dq_destination` | co-products and wastes | Retain destination, legal status, and acceptance evidence so one physical stream is not both a product and a waste. | contract; dispatch ticket; inspection or acceptance record |
| `dq_uuid` | all inventory identities | Use a Tiangong UUID only after exact semantic hybrid search and public state=100 direct-read verification; keep UUID absent while unresolved. | dual-verification evidence or manifest unresolved entry |
| `dq_uncertainty` | all inventory rows | Document measurement resolution, calibration, missing-data treatment, factor provenance, and allocation uncertainty without inventing a category range. | uncertainty register and calculation review |
| `dq_completeness` | full inventory | Demonstrate coverage of organ components, material, energy, waste, and direct air and water exchanges inside the boundary. | process-flow diagram; row checklist; input-output reconciliation |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_uuid` | reference flow | Require Product flow a6673976-2ef4-4502-b9f5-bbc57099bb40, Mass 93a60a56-a3c8-11da-a746-0800200b9a66, Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, and kg. | `un-cpc-3-0-structure-2025` |
| `validate_reference_amount` | reference output | Require exactly 1 kg net conforming cattle edible offal and exclude packaging mass. | `un-cpc-3-0-structure-2025` |
| `validate_scope` | product identity | Reject buffalo edible offal and every non-cattle species. | `un-cpc-3-0-structure-2025` |
| `validate_composition` | reference composition | Require a nonempty organ composition and organ-specific measured masses whose applicable sum equals released net reference-product mass. | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `validate_state` | market state | Require exactly one of fresh, chilled, or frozen and reject mixing state-specific component rows in one reference product. | `un-cpc-3-0-structure-2025` |
| `validate_additional_organs` | organ identities | When a cattle organ not represented by an authored row is included, add one new organ-specific input and output row rather than using a residual category. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_boundary` | process coverage | Require every mandatory process and a documented inclusion decision for temperature conditioning and on-site wastewater treatment. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_atomic` | inventory rows | Require one specific physical or chemical exchange per row_id and nonempty description, amount rule, protocol, uncertainty, applicability, and sources. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_selector_free` | selected flows | Reject collection labels and instructions in Selected flow; organs, utilities, fuels, refrigerants, chemicals, packaging, wastes, and releases remain separate. | `eu-2021-2279-environmental-footprint` |
| `validate_official_or` | reference selected flow | Permit the word or only in the official CPC 21151 reference-product Selected flow; every non-reference Selected flow must be selector-free. | `un-cpc-3-0-structure-2025` |
| `validate_uuid` | inventory UUIDs | Accept a non-reference UUID only after exact semantic hybrid search and public state=100 direct-read verification; otherwise require no UUID. | `eu-2021-2279-environmental-footprint` |
| `validate_manifest_closure` | unresolved UUIDs | Require every UUID-free row_id to appear exactly once in manifest review_metadata with candidate identity and rejection reason. | `eu-2021-2279-environmental-footprint` |
| `validate_value_mode` | inventory amounts | Allow foreground_record or calculated_value supported by collected records; reject unsupported authored quantities and category default ranges. | `eu-2021-2279-environmental-footprint` |
| `validate_mass_balance` | physical outputs | Reconcile cattle, carcass, each organ, co-products, residuals, contents, wastewater-associated solids, and stock change without forced balancing. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_heat_routes` | thermal inputs | Prevent duplicate recording of purchased steam, purchased hot water, and on-site fuel used to generate the same heat. | `eu-2021-2279-environmental-footprint` |
| `validate_refrigerants` | cold system | Identify each actual refrigerant by species and circuit; require its own make-up and direct-release row when loss occurs. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_cleaning_agents` | cleaning | Identify each cleaning or disinfection substance separately from stock and dosing records; add a new atomic row for every additional substance. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_packaging` | packaging | Match each packaging component and its material-specific waste to the product BoM and exclude packaging mass from reference-product mass. | `eu-2021-2279-environmental-footprint` |
| `validate_destinations` | co-products and wastes | Require destination and status evidence and prohibit assigning one physical quantity to both a product row and a waste row. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_wastewater` | wastewater | Keep routine and high-organic-load wastewater separate; distinguish sewer transfer, direct surface-water discharge, and on-site treatment. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_air_releases` | direct air releases | Require substance-specific measurement or calculation and factor provenance; reject an aggregate combustion or refrigerant-release row. | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_water_releases` | direct water releases | For direct discharge, require temporally matched effluent volume and parameter concentration for each release row. | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_sources` | evidence | Use only the listed UN CPC, EC JRC SA BREF, and Commission Recommendation sources; do not treat UUID lookup as amount evidence. | `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_bilingual` | bilingual record | Require identical ordered process_id, direction, flow_type, row_id, UUID, controlled tokens, protocol ids, and source-id sequences in en-US and zh-CN. | `eu-2021-2279-environmental-footprint` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Facility-specific foreground data package for CPC 21151 cattle edible offal |
| downstream_use | Construction and validation of TianGong flow, process, lifecyclemodel, and dataset projections |
| allowed_use | Product-specific modelling when organ composition, single market state, facility boundary, technology, and collection period are disclosed |
| excluded_use | Category-default inventory; buffalo edible offal; non-cattle edible offal; undeclared organ composition; mixed market states |
| required_metadata | Facility geography; reporting period; production volume; lot definition; organ identities and component masses; single market state; net-mass method; slaughter and preparation configuration; conditioning technology; storage duration; heat route; refrigerant species; packaging BoM; co-product and waste destinations; wastewater route |
| required_quality_disclosure | Meter and scale calibration; temporal coverage; missing data; calculation inputs; allocation decisions; organ and total mass balances; uncertainty; UUID status |
| update_trigger | Change in product scope, organ composition, market state, slaughter or preparation configuration, conditioning or storage technology, energy route, refrigerant species, packaging BoM, co-product destination, wastewater route, or evidence source |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | Dataset (`dataset`) | United Nations Statistics Division, CPC Ver. 3.0 official page, https://unstats.un.org/unsd/classifications/Econ/CPC; retained raw structure `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` | Exact CPC 21151 identity and fresh, chilled, or frozen scope; exclusion of CPC 21152 buffalo edible offal |
| `ec-jrc-2024-sa-bref-jrc135916` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, 2024, DOI 10.2760/18199, https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | Slaughter and evisceration boundary; edible co-product separation and preparation; cooling and freezing; cleaning; utilities; refrigerants; residuals; wastewater; sludge; direct air and water releases |
| `eu-2021-2279-environmental-footprint` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279, consolidated 30 December 2021, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific composition and BoM; company-specific manufacturing data; complete LCI; allocation hierarchy; completeness, transparency, data quality, and verification |
