---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-turkeys-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of turkeys, frozen

## 1. Scope and Applicability

This PCR governs foreground data packages for turkey meat marketed frozen at the slaughterhouse or meat-processing plant gate. It covers whole dressed carcasses and meat cuts, with bone or skin status declared, when the saleable reference product is classified exactly as CPC 21144, “Meat of turkeys, frozen.”

The foreground boundary begins when live turkeys are accepted at the slaughterhouse gate and continues through lairage, slaughter, bleeding, scalding, defeathering, evisceration, carcass dressing, conditional cutting, prechilling, freezing, packaging, frozen storage, quality release, attributable cleaning and sanitation, and conditional on-site wastewater treatment. Turkey farming, feed production, hatchery operation, and inbound live-bird transport are upstream. Outbound distribution, retail, consumer storage, cooking or use, and product end-of-life are downstream.

Fresh or chilled turkey meat, edible poultry offal, meat from another poultry species, mechanically separated meat, and prepared or preserved turkey products are excluded from the reference product. Named edible organs and recoverable outputs may cross the foreground boundary as separate co-products, but never contribute to reference-product mass.

This is a candidate authored methodology. It specifies foreground collection and calculation rules without default quantities or AI-derived ranges, and it does not assign UUIDs to unresolved non-reference flows.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-turkeys-frozen |
| classification_refs | CPC 3.0: 21144, exact mapping context |
| covered_products | Frozen turkey whole carcasses and frozen turkey meat cuts released at the plant gate, with product form, bone status, skin status, and frozen-state criterion declared |
| excluded_products | Fresh or chilled turkey meat; poultry edible offal; meat of chickens, ducks, geese, or guinea fowl; mechanically separated turkey meat; prepared or preserved turkey products |
| representative_product | Net saleable frozen turkey meat after packaging tare removal |
| production_route | Live-turkey receiving; slaughter and dressing; conditional cutting; prechilling and freezing; packaging and frozen storage; sanitation; conditional on-site wastewater treatment |
| market_state | Frozen product released at the slaughterhouse or processing-plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply frozen turkey meat fit for its declared food-market specification at the plant gate |
| How much | 1 kg net saleable frozen turkey meat, excluding packaging |
| How well | Exact CPC 21144 product; frozen-state and release specification met; product form, bone status, skin status, packaging, and exclusions declared |
| How long or cycle | One released production batch; frozen-storage duration through plant-gate transfer declared |
| reference_flow_link | The functional unit is realized by the single reference product-flow object below |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net released product, packaging excluded |
| Reference product flow | Meat of turkeys, frozen `2cf4dbce-c2cf-4ca6-a1bc-5366fad13063` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | CPC 21144; turkey species identity; whole carcass or cut form; bone status; skin status; product composition; frozen-state criterion; product-core temperature measurement point; freezing technology; release temperature; frozen-storage temperature; frozen-storage duration; packaging configuration; packaging tare; facility geography; reporting period; edible-offal exclusion |

When constructing a foreground data package, every item listed in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Missing required qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| `reference_net_mass` | reference_product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine net saleable frozen turkey meat mass after packaging tare is removed. The normalized reference amount is exactly 1 kg. | `un-cpc-3-0-2025`, `eu-pef-recommendation-2021-2279` |
| `frozen_state_declaration` | reference_product | Temperature state | declared site unit | Declare the product-core temperature criterion, measurement point, freezing technology, frozen-storage temperature, and storage duration used to identify the frozen market state. | `un-cpc-3-0-2025`, `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `energy_unit_conversion` | energy_inventory_rows | Energy | kWh | Preserve metered energy units; document every conversion to kWh and the conversion-factor source. Do not combine electricity, steam, hot water, or fuels in one exchange. | `eu-pef-recommendation-2021-2279` |
| `mass_carrier_conversion` | mass_inventory_rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | When a carrier, liquid, wastewater, refrigerant, chemical, or packaging record is volumetric or count-based, convert to kg only with a documented density or item-mass record. | `eu-pef-recommendation-2021-2279` |
| `chemical_formulation_basis` | cleaning_and_treatment_chemicals | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each named chemical formulation separately and disclose concentration; do not substitute active-ingredient mass for formulation mass without an explicit conversion. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `refrigerant_identity_balance` | refrigerant_rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Maintain a separate equipment mass balance for every named refrigerant. Never combine R717, R744, R404A, or R507A. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `packaging_tare_basis` | packaging_rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each packaging component separately, exclude all packaging tare from the reference-product mass, and disclose reuse-cycle allocation for reusable items. | `eu-pef-recommendation-2021-2279` |
| `wastewater_load_basis` | wastewater_and_water_emission_rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Keep named wastewater streams distinct. Calculate each waterborne load from temporally matched flow and concentration data without merging pollutant parameters. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live turkeys accepted at the slaughterhouse gate with supplier lot, bird count, and accepted live mass recorded |
| starting_condition_role | Measured product input to `live_turkey_receiving_lairage` |
| product_classification_scope | Exact CPC 21144 frozen turkey meat; fresh or chilled turkey meat and poultry edible offal are outside the reference-product scope |
| recursive_input_rule | A CPC 21144 frozen turkey meat input is recorded once as a transferred or purchased product input; its production boundary is not recursively reopened |
| upstream_dataset_requirement | Use representative upstream datasets for live-turkey production, feed, hatchery activity, inbound transport, purchased utilities, water, fuels, refrigerants, chemicals, packaging, and off-site treatment |
| disclosure | Declare facility geography, bird source, product form, slaughter and freezing technologies, frozen-state criterion, refrigeration systems, packaging, process applicability, co-product destinations, allocation, wastewater route, storage conditions, and data gaps |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_start` | foreground_system | Start the foreground boundary when live turkeys are accepted at the slaughterhouse gate. Farming, feed production, hatchery operations, and inbound transport remain upstream. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `boundary_included_operations` | foreground_system | Include receiving and lairage, slaughter and dressing, conditional cutting, prechilling and freezing, packaging and frozen storage, attributable sanitation, and conditional on-site wastewater treatment. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `boundary_purchased_inputs` | upstream_inputs | Record purchased electricity, steam, hot water, each fuel, water, refrigerant, chemical, and packaging component as a separate technosphere input and link a representative upstream dataset. | `eu-pef-recommendation-2021-2279` |
| `boundary_downstream_exclusions` | downstream_system | Exclude outbound distribution, retail, consumer storage, cooking or use, and end-of-life unless the study explicitly adds them outside this foreground package. | `eu-pef-recommendation-2021-2279` |
| `boundary_same_category_input` | same_category_input | If frozen turkey meat in CPC 21144 re-enters a foreground process, record it once as a purchased or transferred product input and do not recursively reopen its production boundary. | `un-cpc-3-0-2025`, `eu-pef-recommendation-2021-2279` |
| `boundary_conditional_processes` | conditional_processes | Declare whether carcass cutting and on-site wastewater treatment apply; omit their rows only with a documented non-applicability statement and retained boundary evidence. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `boundary_scope_exclusions` | product_scope | Exclude fresh or chilled turkey meat, poultry edible offal, meat of other poultry species, mechanically separated meat, and prepared or preserved turkey products from the reference product. | `un-cpc-3-0-2025` |

## 6. Process Inventory Structure

All rows use the normalization basis “per 1 kg net frozen turkey meat reference product.” Conditional utility, refrigerant, chemical, packaging, waste, or emission cards remain atomic: record the applicable exchange, or document why that one exchange is absent. Do not replace individual cards with a selector.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `live_turkey_receiving_lairage` | Live turkey receiving and lairage | `required` | Always included from transfer of live turkeys at the slaughterhouse gate. | foreground_production | Accepted live-turkey mass attributable to the reference production batch |
| `turkey_slaughter_dressing` | Turkey slaughter and dressing | `required` | Always included for slaughter, bleeding, scalding, defeathering, evisceration, washing, and carcass dressing. | foreground_production | Fresh dressed turkey carcass mass before cutting or freezing |
| `turkey_carcass_cutting` | Turkey carcass cutting | `conditional` | Include when the declared product is cut, deboned, skinned, or trimmed before freezing. | foreground_production | Fresh turkey cut mass leaving the cutting process |
| `turkey_prechilling_freezing` | Turkey prechilling and freezing | `required` | Always included for prechilling and conversion of the in-scope meat to its declared frozen state. | foreground_conditioning | Frozen turkey carcass or cut mass leaving the freezing process |
| `turkey_packaging_frozen_storage` | Turkey packaging and frozen storage | `required` | Always included through packaging, frozen storage, quality release, and transfer at the plant gate. | foreground_conditioning | Net released frozen turkey meat mass excluding packaging tare |
| `plant_cleaning_sanitation` | Plant cleaning and sanitation | `required` | Always include sanitation attributable to the foreground slaughter, cutting, freezing, packaging, and storage operations. | foreground_support | Batch-attributable sanitation activity normalized to released reference product |
| `onsite_wastewater_treatment` | On-site wastewater treatment | `conditional` | Include when the foreground facility treats wastewater on site before discharge or transfer. | foreground_support | Wastewater treatment attributable to the reference production batch |

### Process: Live turkey receiving and lairage (`live_turkey_receiving_lairage`)

#### Inputs

##### Product flows

###### Live turkeys input (`receiving_live_turkeys`)

Live turkeys crosses the live turkey receiving and lairage boundary as one specific input. Record it independently under `receiving_live_turkeys` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Live turkeys
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Drinking water input (`receiving_drinking_water`)

Drinking water crosses the live turkey receiving and lairage boundary as one specific input. Record it independently under `receiving_drinking_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Drinking water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Grid electricity input (`receiving_grid_electricity`)

Grid electricity crosses the live turkey receiving and lairage boundary as one specific input. Record it independently under `receiving_grid_electricity` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh; flow-property and unit-group UUIDs unresolved
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Natural gas input (`receiving_natural_gas`)

Natural gas crosses the live turkey receiving and lairage boundary as one specific input. Record it independently under `receiving_natural_gas` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Natural gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Diesel fuel input (`receiving_diesel`)

Diesel fuel crosses the live turkey receiving and lairage boundary as one specific input. Record it independently under `receiving_diesel` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Liquefied petroleum gas input (`receiving_lpg`)

Liquefied petroleum gas crosses the live turkey receiving and lairage boundary as one specific input. Record it independently under `receiving_lpg` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Waste flows

No atomic exchanges are specified in this group for the declared process.

##### Elementary flows

No atomic exchanges are specified in this group for the declared process.

#### Outputs

##### Product flows

###### Accepted live turkeys output (`receiving_accepted_live_turkeys`)

Accepted live turkeys crosses the live turkey receiving and lairage boundary as one specific output. Record it independently under `receiving_accepted_live_turkeys` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Accepted live turkeys
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Waste flows

###### Dead turkeys output (`receiving_dead_turkeys`)

Dead turkeys crosses the live turkey receiving and lairage boundary as one specific output. Record it independently under `receiving_dead_turkeys` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Dead turkeys
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey manure output (`receiving_turkey_manure`)

Turkey manure crosses the live turkey receiving and lairage boundary as one specific output. Record it independently under `receiving_turkey_manure` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey manure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Contaminated wood-shaving litter output (`receiving_wood_shaving_litter`)

Contaminated wood-shaving litter crosses the live turkey receiving and lairage boundary as one specific output. Record it independently under `receiving_wood_shaving_litter` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Contaminated wood-shaving litter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey lairage wastewater output (`receiving_lairage_wastewater`)

Turkey lairage wastewater crosses the live turkey receiving and lairage boundary as one specific output. Record it independently under `receiving_lairage_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey lairage wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Elementary flows

###### Ammonia to air output (`receiving_ammonia_air`)

Ammonia to air crosses the live turkey receiving and lairage boundary as one specific output. Record it independently under `receiving_ammonia_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Ammonia to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Carbon dioxide, fossil, to air output (`receiving_co2_air`)

Carbon dioxide, fossil, to air crosses the live turkey receiving and lairage boundary as one specific output. Record it independently under `receiving_co2_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitrogen oxides to air output (`receiving_nox_air`)

Nitrogen oxides to air crosses the live turkey receiving and lairage boundary as one specific output. Record it independently under `receiving_nox_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sulfur oxides to air output (`receiving_sox_air`)

Sulfur oxides to air crosses the live turkey receiving and lairage boundary as one specific output. Record it independently under `receiving_sox_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Sulfur oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Particulate matter, less than 2.5 µm, to air output (`receiving_pm25_air`)

Particulate matter, less than 2.5 µm, to air crosses the live turkey receiving and lairage boundary as one specific output. Record it independently under `receiving_pm25_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Particulate matter, less than 2.5 µm, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`



### Process: Turkey slaughter and dressing (`turkey_slaughter_dressing`)

#### Inputs

##### Product flows

###### Accepted live turkeys input (`slaughter_accepted_live_turkeys`)

Accepted live turkeys crosses the turkey slaughter and dressing boundary as one specific input. Record it independently under `slaughter_accepted_live_turkeys` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Accepted live turkeys
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Process water input (`slaughter_process_water`)

Process water crosses the turkey slaughter and dressing boundary as one specific input. Record it independently under `slaughter_process_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Grid electricity input (`slaughter_grid_electricity`)

Grid electricity crosses the turkey slaughter and dressing boundary as one specific input. Record it independently under `slaughter_grid_electricity` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh; flow-property and unit-group UUIDs unresolved
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased steam input (`slaughter_purchased_steam`)

Purchased steam crosses the turkey slaughter and dressing boundary as one specific input. Record it independently under `slaughter_purchased_steam` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Purchased steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased hot water input (`slaughter_purchased_hot_water`)

Purchased hot water crosses the turkey slaughter and dressing boundary as one specific input. Record it independently under `slaughter_purchased_hot_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Purchased hot water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Natural gas input (`slaughter_natural_gas`)

Natural gas crosses the turkey slaughter and dressing boundary as one specific input. Record it independently under `slaughter_natural_gas` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Natural gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Diesel fuel input (`slaughter_diesel`)

Diesel fuel crosses the turkey slaughter and dressing boundary as one specific input. Record it independently under `slaughter_diesel` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Liquefied petroleum gas input (`slaughter_lpg`)

Liquefied petroleum gas crosses the turkey slaughter and dressing boundary as one specific input. Record it independently under `slaughter_lpg` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Waste flows

No atomic exchanges are specified in this group for the declared process.

##### Elementary flows

No atomic exchanges are specified in this group for the declared process.

#### Outputs

##### Product flows

###### Dressed turkey carcass, fresh output (`slaughter_fresh_carcass`)

Dressed turkey carcass, fresh crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_fresh_carcass` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Dressed turkey carcass, fresh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey blood for recovery output (`slaughter_blood_recovery`)

Turkey blood for recovery crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_blood_recovery` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey blood for recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey feathers for recovery output (`slaughter_feathers_recovery`)

Turkey feathers for recovery crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_feathers_recovery` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey feathers for recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey liver, edible output (`slaughter_edible_liver`)

Turkey liver, edible crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_edible_liver` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey liver, edible
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `un-cpc-3-0-2025`, `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey heart, edible output (`slaughter_edible_heart`)

Turkey heart, edible crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_edible_heart` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey heart, edible
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `un-cpc-3-0-2025`, `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey gizzard, edible output (`slaughter_edible_gizzard`)

Turkey gizzard, edible crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_edible_gizzard` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey gizzard, edible
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `un-cpc-3-0-2025`, `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey neck output (`slaughter_turkey_neck`)

Turkey neck crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_turkey_neck` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey neck
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey feet output (`slaughter_turkey_feet`)

Turkey feet crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_turkey_feet` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey feet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Recovered turkey fat output (`slaughter_recovered_fat`)

Recovered turkey fat crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_recovered_fat` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Recovered turkey fat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Waste flows

###### Waste turkey blood output (`slaughter_waste_blood`)

Waste turkey blood crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_waste_blood` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Waste turkey blood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste turkey feathers output (`slaughter_waste_feathers`)

Waste turkey feathers crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_waste_feathers` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Waste turkey feathers
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Condemned turkey liver output (`slaughter_condemned_liver`)

Condemned turkey liver crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_condemned_liver` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Condemned turkey liver
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Condemned turkey heart output (`slaughter_condemned_heart`)

Condemned turkey heart crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_condemned_heart` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Condemned turkey heart
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Condemned turkey gizzard output (`slaughter_condemned_gizzard`)

Condemned turkey gizzard crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_condemned_gizzard` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Condemned turkey gizzard
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey lung waste output (`slaughter_lung_waste`)

Turkey lung waste crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_lung_waste` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey lung waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey kidney waste output (`slaughter_kidney_waste`)

Turkey kidney waste crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_kidney_waste` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey kidney waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey head waste output (`slaughter_head_waste`)

Turkey head waste crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_head_waste` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey head waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey stomach contents output (`slaughter_stomach_contents`)

Turkey stomach contents crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_stomach_contents` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey stomach contents
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey intestinal contents output (`slaughter_intestinal_contents`)

Turkey intestinal contents crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_intestinal_contents` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey intestinal contents
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey intestinal tissue waste output (`slaughter_intestinal_tissue`)

Turkey intestinal tissue waste crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_intestinal_tissue` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey intestinal tissue waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey fat waste output (`slaughter_fat_waste`)

Turkey fat waste crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_fat_waste` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey fat waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Condemned turkey carcass output (`slaughter_condemned_carcass`)

Condemned turkey carcass crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_condemned_carcass` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Condemned turkey carcass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey slaughter wastewater, high organic load output (`slaughter_high_load_wastewater`)

Turkey slaughter wastewater, high organic load crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_high_load_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey slaughter wastewater, high organic load
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_wastewater_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey slaughter wastewater, ordinary load output (`slaughter_ordinary_wastewater`)

Turkey slaughter wastewater, ordinary load crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_ordinary_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey slaughter wastewater, ordinary load
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_wastewater_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Elementary flows

###### Carbon dioxide, fossil, to air output (`slaughter_co2_air`)

Carbon dioxide, fossil, to air crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_co2_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitrogen oxides to air output (`slaughter_nox_air`)

Nitrogen oxides to air crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_nox_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sulfur oxides to air output (`slaughter_sox_air`)

Sulfur oxides to air crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_sox_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Sulfur oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Particulate matter, less than 2.5 µm, to air output (`slaughter_pm25_air`)

Particulate matter, less than 2.5 µm, to air crosses the turkey slaughter and dressing boundary as one specific output. Record it independently under `slaughter_pm25_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Particulate matter, less than 2.5 µm, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`



### Process: Turkey carcass cutting (`turkey_carcass_cutting`)

#### Inputs

##### Product flows

###### Dressed turkey carcass, fresh input (`cutting_fresh_carcass`)

Dressed turkey carcass, fresh crosses the turkey carcass cutting boundary as one specific input. Record it independently under `cutting_fresh_carcass` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Dressed turkey carcass, fresh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Process water input (`cutting_process_water`)

Process water crosses the turkey carcass cutting boundary as one specific input. Record it independently under `cutting_process_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Grid electricity input (`cutting_grid_electricity`)

Grid electricity crosses the turkey carcass cutting boundary as one specific input. Record it independently under `cutting_grid_electricity` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh; flow-property and unit-group UUIDs unresolved
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased steam input (`cutting_purchased_steam`)

Purchased steam crosses the turkey carcass cutting boundary as one specific input. Record it independently under `cutting_purchased_steam` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Purchased steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased hot water input (`cutting_purchased_hot_water`)

Purchased hot water crosses the turkey carcass cutting boundary as one specific input. Record it independently under `cutting_purchased_hot_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Purchased hot water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Natural gas input (`cutting_natural_gas`)

Natural gas crosses the turkey carcass cutting boundary as one specific input. Record it independently under `cutting_natural_gas` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Natural gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Waste flows

No atomic exchanges are specified in this group for the declared process.

##### Elementary flows

No atomic exchanges are specified in this group for the declared process.

#### Outputs

##### Product flows

###### Turkey meat cuts, fresh output (`cutting_fresh_meat_cuts`)

Turkey meat cuts, fresh crosses the turkey carcass cutting boundary as one specific output. Record it independently under `cutting_fresh_meat_cuts` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey meat cuts, fresh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey bone for recovery output (`cutting_bone_recovery`)

Turkey bone for recovery crosses the turkey carcass cutting boundary as one specific output. Record it independently under `cutting_bone_recovery` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey bone for recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey skin for recovery output (`cutting_skin_recovery`)

Turkey skin for recovery crosses the turkey carcass cutting boundary as one specific output. Record it independently under `cutting_skin_recovery` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey skin for recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey fat for recovery output (`cutting_fat_recovery`)

Turkey fat for recovery crosses the turkey carcass cutting boundary as one specific output. Record it independently under `cutting_fat_recovery` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey fat for recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey meat trim for recovery output (`cutting_trim_recovery`)

Turkey meat trim for recovery crosses the turkey carcass cutting boundary as one specific output. Record it independently under `cutting_trim_recovery` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey meat trim for recovery
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Waste flows

###### Turkey bone waste output (`cutting_bone_waste`)

Turkey bone waste crosses the turkey carcass cutting boundary as one specific output. Record it independently under `cutting_bone_waste` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey bone waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey skin waste output (`cutting_skin_waste`)

Turkey skin waste crosses the turkey carcass cutting boundary as one specific output. Record it independently under `cutting_skin_waste` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey skin waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey fat waste output (`cutting_fat_waste`)

Turkey fat waste crosses the turkey carcass cutting boundary as one specific output. Record it independently under `cutting_fat_waste` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey fat waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey meat trim waste output (`cutting_trim_waste`)

Turkey meat trim waste crosses the turkey carcass cutting boundary as one specific output. Record it independently under `cutting_trim_waste` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey meat trim waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey cutting wastewater output (`cutting_wastewater`)

Turkey cutting wastewater crosses the turkey carcass cutting boundary as one specific output. Record it independently under `cutting_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey cutting wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Elementary flows

###### Carbon dioxide, fossil, to air output (`cutting_co2_air`)

Carbon dioxide, fossil, to air crosses the turkey carcass cutting boundary as one specific output. Record it independently under `cutting_co2_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitrogen oxides to air output (`cutting_nox_air`)

Nitrogen oxides to air crosses the turkey carcass cutting boundary as one specific output. Record it independently under `cutting_nox_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sulfur oxides to air output (`cutting_sox_air`)

Sulfur oxides to air crosses the turkey carcass cutting boundary as one specific output. Record it independently under `cutting_sox_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Sulfur oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Particulate matter, less than 2.5 µm, to air output (`cutting_pm25_air`)

Particulate matter, less than 2.5 µm, to air crosses the turkey carcass cutting boundary as one specific output. Record it independently under `cutting_pm25_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Particulate matter, less than 2.5 µm, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`



### Process: Turkey prechilling and freezing (`turkey_prechilling_freezing`)

#### Inputs

##### Product flows

###### Dressed turkey carcass, fresh input (`freezing_fresh_carcass`)

Dressed turkey carcass, fresh crosses the turkey prechilling and freezing boundary as one specific input. Record it independently under `freezing_fresh_carcass` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Dressed turkey carcass, fresh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey meat cuts, fresh input (`freezing_fresh_meat_cuts`)

Turkey meat cuts, fresh crosses the turkey prechilling and freezing boundary as one specific input. Record it independently under `freezing_fresh_meat_cuts` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey meat cuts, fresh
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Process water input (`freezing_process_water`)

Process water crosses the turkey prechilling and freezing boundary as one specific input. Record it independently under `freezing_process_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Grid electricity input (`freezing_grid_electricity`)

Grid electricity crosses the turkey prechilling and freezing boundary as one specific input. Record it independently under `freezing_grid_electricity` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh; flow-property and unit-group UUIDs unresolved
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased steam input (`freezing_purchased_steam`)

Purchased steam crosses the turkey prechilling and freezing boundary as one specific input. Record it independently under `freezing_purchased_steam` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Purchased steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased hot water input (`freezing_purchased_hot_water`)

Purchased hot water crosses the turkey prechilling and freezing boundary as one specific input. Record it independently under `freezing_purchased_hot_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Purchased hot water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Natural gas input (`freezing_natural_gas`)

Natural gas crosses the turkey prechilling and freezing boundary as one specific input. Record it independently under `freezing_natural_gas` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Natural gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Diesel fuel input (`freezing_diesel`)

Diesel fuel crosses the turkey prechilling and freezing boundary as one specific input. Record it independently under `freezing_diesel` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Liquefied petroleum gas input (`freezing_lpg`)

Liquefied petroleum gas crosses the turkey prechilling and freezing boundary as one specific input. Record it independently under `freezing_lpg` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Ammonia refrigerant, R717 input (`freezing_r717_makeup`)

Ammonia refrigerant, R717 crosses the turkey prechilling and freezing boundary as one specific input. Record it independently under `freezing_r717_makeup` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Ammonia refrigerant, R717
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record refrigerant-specific purchases, charging, recovery, returns, and stock changes attributable to the named equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Carbon dioxide refrigerant, R744 input (`freezing_r744_makeup`)

Carbon dioxide refrigerant, R744 crosses the turkey prechilling and freezing boundary as one specific input. Record it independently under `freezing_r744_makeup` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Carbon dioxide refrigerant, R744
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record refrigerant-specific purchases, charging, recovery, returns, and stock changes attributable to the named equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R404A input (`freezing_r404a_makeup`)

Refrigerant R404A crosses the turkey prechilling and freezing boundary as one specific input. Record it independently under `freezing_r404a_makeup` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Refrigerant R404A
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record refrigerant-specific purchases, charging, recovery, returns, and stock changes attributable to the named equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R507A input (`freezing_r507a_makeup`)

Refrigerant R507A crosses the turkey prechilling and freezing boundary as one specific input. Record it independently under `freezing_r507a_makeup` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Refrigerant R507A
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record refrigerant-specific purchases, charging, recovery, returns, and stock changes attributable to the named equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Waste flows

No atomic exchanges are specified in this group for the declared process.

##### Elementary flows

No atomic exchanges are specified in this group for the declared process.

#### Outputs

##### Product flows

###### Turkey carcass, frozen output (`freezing_frozen_carcass`)

Turkey carcass, frozen crosses the turkey prechilling and freezing boundary as one specific output. Record it independently under `freezing_frozen_carcass` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey carcass, frozen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey meat cuts, frozen output (`freezing_frozen_meat_cuts`)

Turkey meat cuts, frozen crosses the turkey prechilling and freezing boundary as one specific output. Record it independently under `freezing_frozen_meat_cuts` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey meat cuts, frozen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Waste flows

###### Off-specification frozen turkey meat output (`freezing_offspec_meat`)

Off-specification frozen turkey meat crosses the turkey prechilling and freezing boundary as one specific output. Record it independently under `freezing_offspec_meat` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Off-specification frozen turkey meat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Used refrigeration compressor oil output (`freezing_compressor_oil`)

Used refrigeration compressor oil crosses the turkey prechilling and freezing boundary as one specific output. Record it independently under `freezing_compressor_oil` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Used refrigeration compressor oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey freezing defrost wastewater output (`freezing_defrost_wastewater`)

Turkey freezing defrost wastewater crosses the turkey prechilling and freezing boundary as one specific output. Record it independently under `freezing_defrost_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey freezing defrost wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Elementary flows

###### Ammonia, refrigerant, to air output (`freezing_r717_air`)

Ammonia, refrigerant, to air crosses the turkey prechilling and freezing boundary as one specific output. Record it independently under `freezing_r717_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Ammonia, refrigerant, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the refrigerant-specific release from opening stock plus purchases minus closing stock, recovery, and returns; reconcile maintenance events.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Carbon dioxide, refrigerant-grade, to air output (`freezing_r744_air`)

Carbon dioxide, refrigerant-grade, to air crosses the turkey prechilling and freezing boundary as one specific output. Record it independently under `freezing_r744_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Carbon dioxide, refrigerant-grade, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the refrigerant-specific release from opening stock plus purchases minus closing stock, recovery, and returns; reconcile maintenance events.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R404A to air output (`freezing_r404a_air`)

Refrigerant R404A to air crosses the turkey prechilling and freezing boundary as one specific output. Record it independently under `freezing_r404a_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Refrigerant R404A to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the refrigerant-specific release from opening stock plus purchases minus closing stock, recovery, and returns; reconcile maintenance events.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R507A to air output (`freezing_r507a_air`)

Refrigerant R507A to air crosses the turkey prechilling and freezing boundary as one specific output. Record it independently under `freezing_r507a_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Refrigerant R507A to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the refrigerant-specific release from opening stock plus purchases minus closing stock, recovery, and returns; reconcile maintenance events.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_mass_balance`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Carbon dioxide, fossil, to air output (`freezing_co2_air`)

Carbon dioxide, fossil, to air crosses the turkey prechilling and freezing boundary as one specific output. Record it independently under `freezing_co2_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitrogen oxides to air output (`freezing_nox_air`)

Nitrogen oxides to air crosses the turkey prechilling and freezing boundary as one specific output. Record it independently under `freezing_nox_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sulfur oxides to air output (`freezing_sox_air`)

Sulfur oxides to air crosses the turkey prechilling and freezing boundary as one specific output. Record it independently under `freezing_sox_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Sulfur oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Particulate matter, less than 2.5 µm, to air output (`freezing_pm25_air`)

Particulate matter, less than 2.5 µm, to air crosses the turkey prechilling and freezing boundary as one specific output. Record it independently under `freezing_pm25_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Particulate matter, less than 2.5 µm, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`



### Process: Turkey packaging and frozen storage (`turkey_packaging_frozen_storage`)

#### Inputs

##### Product flows

###### Turkey carcass, frozen input (`packaging_frozen_carcass`)

Turkey carcass, frozen crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_frozen_carcass` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey carcass, frozen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_mass_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey meat cuts, frozen input (`packaging_frozen_meat_cuts`)

Turkey meat cuts, frozen crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_frozen_meat_cuts` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey meat cuts, frozen
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the quantity from weighed batch transfer records and reconcile it in the named process mass balance.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_mass_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Grid electricity input (`packaging_grid_electricity`)

Grid electricity crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_grid_electricity` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh; flow-property and unit-group UUIDs unresolved
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased steam input (`packaging_purchased_steam`)

Purchased steam crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_purchased_steam` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Purchased steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased hot water input (`packaging_purchased_hot_water`)

Purchased hot water crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_purchased_hot_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Purchased hot water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Natural gas input (`packaging_natural_gas`)

Natural gas crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_natural_gas` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Natural gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Diesel fuel input (`packaging_diesel`)

Diesel fuel crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_diesel` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Liquefied petroleum gas input (`packaging_lpg`)

Liquefied petroleum gas crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_lpg` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Ammonia refrigerant, R717 input (`packaging_r717_makeup`)

Ammonia refrigerant, R717 crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_r717_makeup` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Ammonia refrigerant, R717
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record refrigerant-specific purchases, charging, recovery, returns, and stock changes attributable to the named equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Carbon dioxide refrigerant, R744 input (`packaging_r744_makeup`)

Carbon dioxide refrigerant, R744 crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_r744_makeup` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Carbon dioxide refrigerant, R744
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record refrigerant-specific purchases, charging, recovery, returns, and stock changes attributable to the named equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R404A input (`packaging_r404a_makeup`)

Refrigerant R404A crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_r404a_makeup` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Refrigerant R404A
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record refrigerant-specific purchases, charging, recovery, returns, and stock changes attributable to the named equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R507A input (`packaging_r507a_makeup`)

Refrigerant R507A crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_r507a_makeup` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Refrigerant R507A
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record refrigerant-specific purchases, charging, recovery, returns, and stock changes attributable to the named equipment.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Low-density polyethylene packaging bag input (`packaging_ldpe_bag`)

Low-density polyethylene packaging bag crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_ldpe_bag` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Low-density polyethylene packaging bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the net issued mass for this packaging component from stock issues, returns, weighing, and reuse records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Polyamide-polyethylene vacuum pouch input (`packaging_pape_pouch`)

Polyamide-polyethylene vacuum pouch crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_pape_pouch` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Polyamide-polyethylene vacuum pouch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the net issued mass for this packaging component from stock issues, returns, weighing, and reuse records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Polypropylene packaging tray input (`packaging_pp_tray`)

Polypropylene packaging tray crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_pp_tray` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Polypropylene packaging tray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the net issued mass for this packaging component from stock issues, returns, weighing, and reuse records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Corrugated fibreboard box input (`packaging_corrugated_box`)

Corrugated fibreboard box crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_corrugated_box` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the net issued mass for this packaging component from stock issues, returns, weighing, and reuse records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### High-density polyethylene reusable crate input (`packaging_hdpe_crate`)

High-density polyethylene reusable crate crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_hdpe_crate` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: High-density polyethylene reusable crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the net issued mass for this packaging component from stock issues, returns, weighing, and reuse records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Wood pallet input (`packaging_wood_pallet`)

Wood pallet crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_wood_pallet` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the net issued mass for this packaging component from stock issues, returns, weighing, and reuse records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Polypropylene strap input (`packaging_pp_strap`)

Polypropylene strap crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_pp_strap` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Polypropylene strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the net issued mass for this packaging component from stock issues, returns, weighing, and reuse records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Paper label input (`packaging_paper_label`)

Paper label crosses the turkey packaging and frozen storage boundary as one specific input. Record it independently under `packaging_paper_label` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Paper label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the net issued mass for this packaging component from stock issues, returns, weighing, and reuse records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Waste flows

No atomic exchanges are specified in this group for the declared process.

##### Elementary flows

No atomic exchanges are specified in this group for the declared process.

#### Outputs

##### Product flows

###### Meat of turkeys, frozen output (`packaging_reference_frozen_turkey_meat`)

Meat of turkeys, frozen crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_reference_frozen_turkey_meat` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Meat of turkeys, frozen `2cf4dbce-c2cf-4ca6-a1bc-5366fad13063`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Normalize released net product mass to exactly 1 kg; exclude every packaging component from product mass.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_release_mass_records`
- Sources: `un-cpc-3-0-2025`, `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Waste flows

###### Off-specification packaged frozen turkey meat output (`packaging_offspec_meat`)

Off-specification packaged frozen turkey meat crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_offspec_meat` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Off-specification packaged frozen turkey meat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_mass_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste low-density polyethylene packaging bag output (`packaging_waste_ldpe_bag`)

Waste low-density polyethylene packaging bag crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_waste_ldpe_bag` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Waste low-density polyethylene packaging bag
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste polyamide-polyethylene vacuum pouch output (`packaging_waste_pape_pouch`)

Waste polyamide-polyethylene vacuum pouch crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_waste_pape_pouch` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Waste polyamide-polyethylene vacuum pouch
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste polypropylene packaging tray output (`packaging_waste_pp_tray`)

Waste polypropylene packaging tray crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_waste_pp_tray` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Waste polypropylene packaging tray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste corrugated fibreboard box output (`packaging_waste_corrugated_box`)

Waste corrugated fibreboard box crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_waste_corrugated_box` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Waste corrugated fibreboard box
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste high-density polyethylene reusable crate output (`packaging_waste_hdpe_crate`)

Waste high-density polyethylene reusable crate crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_waste_hdpe_crate` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Waste high-density polyethylene reusable crate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste wood pallet output (`packaging_waste_wood_pallet`)

Waste wood pallet crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_waste_wood_pallet` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Waste wood pallet
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste polypropylene strap output (`packaging_waste_pp_strap`)

Waste polypropylene strap crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_waste_pp_strap` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Waste polypropylene strap
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste paper label output (`packaging_waste_paper_label`)

Waste paper label crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_waste_paper_label` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Waste paper label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Used frozen-storage compressor oil output (`packaging_compressor_oil`)

Used frozen-storage compressor oil crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_compressor_oil` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Used frozen-storage compressor oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Elementary flows

###### Ammonia, refrigerant, to air output (`packaging_r717_air`)

Ammonia, refrigerant, to air crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_r717_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Ammonia, refrigerant, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the refrigerant-specific release from opening stock plus purchases minus closing stock, recovery, and returns; reconcile maintenance events.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Carbon dioxide, refrigerant-grade, to air output (`packaging_r744_air`)

Carbon dioxide, refrigerant-grade, to air crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_r744_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Carbon dioxide, refrigerant-grade, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the refrigerant-specific release from opening stock plus purchases minus closing stock, recovery, and returns; reconcile maintenance events.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R404A to air output (`packaging_r404a_air`)

Refrigerant R404A to air crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_r404a_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Refrigerant R404A to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the refrigerant-specific release from opening stock plus purchases minus closing stock, recovery, and returns; reconcile maintenance events.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Refrigerant R507A to air output (`packaging_r507a_air`)

Refrigerant R507A to air crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_r507a_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Refrigerant R507A to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the refrigerant-specific release from opening stock plus purchases minus closing stock, recovery, and returns; reconcile maintenance events.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Carbon dioxide, fossil, to air output (`packaging_co2_air`)

Carbon dioxide, fossil, to air crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_co2_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitrogen oxides to air output (`packaging_nox_air`)

Nitrogen oxides to air crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_nox_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sulfur oxides to air output (`packaging_sox_air`)

Sulfur oxides to air crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_sox_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Sulfur oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Particulate matter, less than 2.5 µm, to air output (`packaging_pm25_air`)

Particulate matter, less than 2.5 µm, to air crosses the turkey packaging and frozen storage boundary as one specific output. Record it independently under `packaging_pm25_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Particulate matter, less than 2.5 µm, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_frozen_storage_utility_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`



### Process: Plant cleaning and sanitation (`plant_cleaning_sanitation`)

#### Inputs

##### Product flows

###### Process water input (`cleaning_process_water`)

Process water crosses the plant cleaning and sanitation boundary as one specific input. Record it independently under `cleaning_process_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Process water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Grid electricity input (`cleaning_grid_electricity`)

Grid electricity crosses the plant cleaning and sanitation boundary as one specific input. Record it independently under `cleaning_grid_electricity` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh; flow-property and unit-group UUIDs unresolved
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased steam input (`cleaning_purchased_steam`)

Purchased steam crosses the plant cleaning and sanitation boundary as one specific input. Record it independently under `cleaning_purchased_steam` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Purchased steam
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Purchased hot water input (`cleaning_purchased_hot_water`)

Purchased hot water crosses the plant cleaning and sanitation boundary as one specific input. Record it independently under `cleaning_purchased_hot_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Purchased hot water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Natural gas input (`cleaning_natural_gas`)

Natural gas crosses the plant cleaning and sanitation boundary as one specific input. Record it independently under `cleaning_natural_gas` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Natural gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Diesel fuel input (`cleaning_diesel`)

Diesel fuel crosses the plant cleaning and sanitation boundary as one specific input. Record it independently under `cleaning_diesel` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Liquefied petroleum gas input (`cleaning_lpg`)

Liquefied petroleum gas crosses the plant cleaning and sanitation boundary as one specific input. Record it independently under `cleaning_lpg` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sodium hydroxide solution input (`cleaning_sodium_hydroxide`)

Sodium hydroxide solution crosses the plant cleaning and sanitation boundary as one specific input. Record it independently under `cleaning_sodium_hydroxide` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitric acid solution input (`cleaning_nitric_acid`)

Nitric acid solution crosses the plant cleaning and sanitation boundary as one specific input. Record it independently under `cleaning_nitric_acid` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Nitric acid solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Peracetic acid solution input (`cleaning_peracetic_acid`)

Peracetic acid solution crosses the plant cleaning and sanitation boundary as one specific input. Record it independently under `cleaning_peracetic_acid` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Peracetic acid solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sodium hypochlorite solution input (`cleaning_sodium_hypochlorite`)

Sodium hypochlorite solution crosses the plant cleaning and sanitation boundary as one specific input. Record it independently under `cleaning_sodium_hypochlorite` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Sodium hypochlorite solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Benzalkonium chloride solution input (`cleaning_benzalkonium_chloride`)

Benzalkonium chloride solution crosses the plant cleaning and sanitation boundary as one specific input. Record it independently under `cleaning_benzalkonium_chloride` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Benzalkonium chloride solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Waste flows

No atomic exchanges are specified in this group for the declared process.

##### Elementary flows

No atomic exchanges are specified in this group for the declared process.

#### Outputs

##### Product flows

No atomic exchanges are specified in this group for the declared process.

##### Waste flows

###### Sodium hydroxide cleaning wastewater output (`cleaning_sodium_hydroxide_wastewater`)

Sodium hydroxide cleaning wastewater crosses the plant cleaning and sanitation boundary as one specific output. Record it independently under `cleaning_sodium_hydroxide_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Sodium hydroxide cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitric acid cleaning wastewater output (`cleaning_nitric_acid_wastewater`)

Nitric acid cleaning wastewater crosses the plant cleaning and sanitation boundary as one specific output. Record it independently under `cleaning_nitric_acid_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Nitric acid cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Peracetic acid disinfection wastewater output (`cleaning_peracetic_acid_wastewater`)

Peracetic acid disinfection wastewater crosses the plant cleaning and sanitation boundary as one specific output. Record it independently under `cleaning_peracetic_acid_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Peracetic acid disinfection wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sodium hypochlorite disinfection wastewater output (`cleaning_sodium_hypochlorite_wastewater`)

Sodium hypochlorite disinfection wastewater crosses the plant cleaning and sanitation boundary as one specific output. Record it independently under `cleaning_sodium_hypochlorite_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Sodium hypochlorite disinfection wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Benzalkonium chloride disinfection wastewater output (`cleaning_benzalkonium_wastewater`)

Benzalkonium chloride disinfection wastewater crosses the plant cleaning and sanitation boundary as one specific output. Record it independently under `cleaning_benzalkonium_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Benzalkonium chloride disinfection wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Final-rinse sanitation wastewater output (`cleaning_final_rinse_wastewater`)

Final-rinse sanitation wastewater crosses the plant cleaning and sanitation boundary as one specific output. Record it independently under `cleaning_final_rinse_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Final-rinse sanitation wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Used cellulose cleaning cloth output (`cleaning_used_cloth`)

Used cellulose cleaning cloth crosses the plant cleaning and sanitation boundary as one specific output. Record it independently under `cleaning_used_cloth` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Used cellulose cleaning cloth
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Waste high-density polyethylene chemical container output (`cleaning_waste_hdpe_container`)

Waste high-density polyethylene chemical container crosses the plant cleaning and sanitation boundary as one specific output. Record it independently under `cleaning_waste_hdpe_container` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Waste high-density polyethylene chemical container
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Elementary flows

###### Carbon dioxide, fossil, to air output (`cleaning_co2_air`)

Carbon dioxide, fossil, to air crosses the plant cleaning and sanitation boundary as one specific output. Record it independently under `cleaning_co2_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitrogen oxides to air output (`cleaning_nox_air`)

Nitrogen oxides to air crosses the plant cleaning and sanitation boundary as one specific output. Record it independently under `cleaning_nox_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sulfur oxides to air output (`cleaning_sox_air`)

Sulfur oxides to air crosses the plant cleaning and sanitation boundary as one specific output. Record it independently under `cleaning_sox_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Sulfur oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Particulate matter, less than 2.5 µm, to air output (`cleaning_pm25_air`)

Particulate matter, less than 2.5 µm, to air crosses the plant cleaning and sanitation boundary as one specific output. Record it independently under `cleaning_pm25_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Particulate matter, less than 2.5 µm, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_sanitation_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`



### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Grid electricity input (`wwt_grid_electricity`)

Grid electricity crosses the on-site wastewater treatment boundary as one specific input. Record it independently under `wwt_grid_electricity` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh; flow-property and unit-group UUIDs unresolved
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Ferric chloride solution input (`wwt_ferric_chloride`)

Ferric chloride solution crosses the on-site wastewater treatment boundary as one specific input. Record it independently under `wwt_ferric_chloride` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Ferric chloride solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Anionic polyacrylamide solution input (`wwt_anionic_polyacrylamide`)

Anionic polyacrylamide solution crosses the on-site wastewater treatment boundary as one specific input. Record it independently under `wwt_anionic_polyacrylamide` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Anionic polyacrylamide solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sodium hydroxide solution input (`wwt_sodium_hydroxide`)

Sodium hydroxide solution crosses the on-site wastewater treatment boundary as one specific input. Record it independently under `wwt_sodium_hydroxide` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Sodium hydroxide solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the batch-attributable quantity from calibrated metering, weighing, invoicing, issue records, or reconciled stock records, as applicable; document non-applicability when the exchange is absent.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Waste flows

###### Turkey lairage wastewater input (`wwt_lairage_wastewater`)

Turkey lairage wastewater crosses the on-site wastewater treatment boundary as one specific input. Record it independently under `wwt_lairage_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey lairage wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey slaughter wastewater, high organic load input (`wwt_high_load_slaughter_wastewater`)

Turkey slaughter wastewater, high organic load crosses the on-site wastewater treatment boundary as one specific input. Record it independently under `wwt_high_load_slaughter_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey slaughter wastewater, high organic load
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey slaughter wastewater, ordinary load input (`wwt_ordinary_slaughter_wastewater`)

Turkey slaughter wastewater, ordinary load crosses the on-site wastewater treatment boundary as one specific input. Record it independently under `wwt_ordinary_slaughter_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey slaughter wastewater, ordinary load
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey cutting wastewater input (`wwt_cutting_wastewater`)

Turkey cutting wastewater crosses the on-site wastewater treatment boundary as one specific input. Record it independently under `wwt_cutting_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey cutting wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Turkey freezing defrost wastewater input (`wwt_freezing_defrost_wastewater`)

Turkey freezing defrost wastewater crosses the on-site wastewater treatment boundary as one specific input. Record it independently under `wwt_freezing_defrost_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Turkey freezing defrost wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sodium hydroxide cleaning wastewater input (`wwt_sodium_hydroxide_wastewater`)

Sodium hydroxide cleaning wastewater crosses the on-site wastewater treatment boundary as one specific input. Record it independently under `wwt_sodium_hydroxide_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Sodium hydroxide cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Nitric acid cleaning wastewater input (`wwt_nitric_acid_wastewater`)

Nitric acid cleaning wastewater crosses the on-site wastewater treatment boundary as one specific input. Record it independently under `wwt_nitric_acid_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Nitric acid cleaning wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Peracetic acid disinfection wastewater input (`wwt_peracetic_acid_wastewater`)

Peracetic acid disinfection wastewater crosses the on-site wastewater treatment boundary as one specific input. Record it independently under `wwt_peracetic_acid_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Peracetic acid disinfection wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Sodium hypochlorite disinfection wastewater input (`wwt_sodium_hypochlorite_wastewater`)

Sodium hypochlorite disinfection wastewater crosses the on-site wastewater treatment boundary as one specific input. Record it independently under `wwt_sodium_hypochlorite_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Sodium hypochlorite disinfection wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Benzalkonium chloride disinfection wastewater input (`wwt_benzalkonium_wastewater`)

Benzalkonium chloride disinfection wastewater crosses the on-site wastewater treatment boundary as one specific input. Record it independently under `wwt_benzalkonium_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Benzalkonium chloride disinfection wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Final-rinse sanitation wastewater input (`wwt_final_rinse_wastewater`)

Final-rinse sanitation wastewater crosses the on-site wastewater treatment boundary as one specific input. Record it independently under `wwt_final_rinse_wastewater` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Final-rinse sanitation wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Elementary flows

No atomic exchanges are specified in this group for the declared process.

#### Outputs

##### Product flows

No atomic exchanges are specified in this group for the declared process.

##### Waste flows

###### Treated turkey-slaughterhouse effluent output (`wwt_treated_effluent`)

Treated turkey-slaughterhouse effluent crosses the on-site wastewater treatment boundary as one specific output. Record it independently under `wwt_treated_effluent` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Treated turkey-slaughterhouse effluent
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the stream mass directly, or convert measured volume using a documented stream density; keep this stream separate from every other wastewater stream.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Dewatered biological sludge output (`wwt_dewatered_sludge`)

Dewatered biological sludge crosses the on-site wastewater treatment boundary as one specific output. Record it independently under `wwt_dewatered_sludge` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Dewatered biological sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Coarse wastewater screenings output (`wwt_coarse_screenings`)

Coarse wastewater screenings crosses the on-site wastewater treatment boundary as one specific output. Record it independently under `wwt_coarse_screenings` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Coarse wastewater screenings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Dissolved-air-flotation turkey fat waste output (`wwt_daf_fat`)

Dissolved-air-flotation turkey fat waste crosses the on-site wastewater treatment boundary as one specific output. Record it independently under `wwt_daf_fat` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Dissolved-air-flotation turkey fat waste
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Wastewater-treatment grit output (`wwt_grit`)

Wastewater-treatment grit crosses the on-site wastewater treatment boundary as one specific output. Record it independently under `wwt_grit` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Wastewater-treatment grit
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Record the separately weighed or otherwise quantified quantity sent to its declared destination and retain destination evidence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`


##### Elementary flows

###### Water to receiving water output (`wwt_water_release`)

Water to receiving water crosses the on-site wastewater treatment boundary as one specific output. Record it independently under `wwt_water_release` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Water to receiving water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate this discharge separately from matched discharge-flow and analytical records; retain sampling point, method, and time alignment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_sampling`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Chemical oxygen demand to water output (`wwt_cod_water`)

Chemical oxygen demand to water crosses the on-site wastewater treatment boundary as one specific output. Record it independently under `wwt_cod_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate this discharge separately from matched discharge-flow and analytical records; retain sampling point, method, and time alignment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_sampling`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Biochemical oxygen demand, 5-day, to water output (`wwt_bod5_water`)

Biochemical oxygen demand, 5-day, to water crosses the on-site wastewater treatment boundary as one specific output. Record it independently under `wwt_bod5_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Biochemical oxygen demand, 5-day, to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate this discharge separately from matched discharge-flow and analytical records; retain sampling point, method, and time alignment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_sampling`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Total nitrogen to water output (`wwt_total_n_water`)

Total nitrogen to water crosses the on-site wastewater treatment boundary as one specific output. Record it independently under `wwt_total_n_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate this discharge separately from matched discharge-flow and analytical records; retain sampling point, method, and time alignment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_sampling`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Total phosphorus to water output (`wwt_total_p_water`)

Total phosphorus to water crosses the on-site wastewater treatment boundary as one specific output. Record it independently under `wwt_total_p_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate this discharge separately from matched discharge-flow and analytical records; retain sampling point, method, and time alignment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_sampling`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Suspended solids to water output (`wwt_suspended_solids_water`)

Suspended solids to water crosses the on-site wastewater treatment boundary as one specific output. Record it independently under `wwt_suspended_solids_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Suspended solids to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate this discharge separately from matched discharge-flow and analytical records; retain sampling point, method, and time alignment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_sampling`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Animal fat to water output (`wwt_animal_fat_water`)

Animal fat to water crosses the on-site wastewater treatment boundary as one specific output. Record it independently under `wwt_animal_fat_water` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Animal fat to water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate this discharge separately from matched discharge-flow and analytical records; retain sampling point, method, and time alignment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent_sampling`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Methane, biogenic, to air output (`wwt_methane_air`)

Methane, biogenic, to air crosses the on-site wastewater treatment boundary as one specific output. Record it independently under `wwt_methane_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Methane, biogenic, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`

###### Dinitrogen monoxide to air output (`wwt_n2o_air`)

Dinitrogen monoxide to air crosses the on-site wastewater treatment boundary as one specific output. Record it independently under `wwt_n2o_air` so the foreground inventory preserves the applicable mass, energy, waste, or emission balance.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; unit group `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calculate the batch-attributable release from collected fuel, operating, monitoring, or mass-balance records using a documented method; do not double count measured releases.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net frozen turkey meat reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_treatment_records`
- Sources: `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279`



## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | all_foreground_processes | Use process subdivision, separate metering, batch tracing, and direct assignment before applying allocation. | `eu-pef-recommendation-2021-2279` |
| `allocation_physical_relation` | joint_process_outputs | When subdivision cannot avoid allocation, use a documented physical relationship that reflects the causal relation between inputs, operations, and separately marketed outputs. | `eu-pef-recommendation-2021-2279` |
| `allocation_economic_fallback` | joint_process_outputs | Use economic allocation only when no defensible physical relationship can be established; use contemporaneous net values and document price source, period, currency, and sensitivity. | `eu-pef-recommendation-2021-2279` |
| `allocation_named_coproducts` | blood_feathers_offal_fat_bone_skin_trim | Classify every named output by actual destination as product, co-product, recyclable material, or waste before allocation; do not group destinations. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `allocation_waste_treatment` | waste_and_wastewater | Assign treatment burdens to the process generating the named waste or wastewater stream unless a documented shared-treatment causal driver is applied consistently. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `allocation_reusable_packaging` | reusable_packaging | Allocate reusable crate and pallet manufacture over documented realized or expected use cycles, and disclose losses and return geography. | `eu-pef-recommendation-2021-2279` |
| `allocation_mass_balance_check` | all_material_outputs | Reconcile allocated and unallocated quantities against the same batch mass balance; allocation must not create or remove physical mass. | `eu-pef-recommendation-2021-2279` |
| `allocation_disclosure` | dataset_metadata | Disclose subdivision, allocation hierarchy, factors, factor sources, co-product destinations, excluded credits, and sensitivity results. | `eu-pef-recommendation-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_lairage_records` | `live_turkey_receiving_lairage` | received_birds; drinking_water; utilities; mortality; manure; litter; wastewater; air_releases | weighbridge_log; bird_count_log; meter_log; waste_transfer_record | supplier_lot_id; bird_count; live_mass_kg; water_kg; electricity_kwh; fuel_kg; mortality_kg; manure_kg; litter_kg; wastewater_kg; operating_hours | Use calibrated receiving scales, meters, stock reconciliation, environmental monitoring, and destination records. | kg; kWh; count | per_batch | reporting_period | foreground_site | Attribute records to the received lot and normalize through released product mass. | Calibration records; lot reconciliation; waste destination evidence; monitoring method |
| `cp_slaughter_utility_records` | `turkey_slaughter_dressing` | water; electricity; steam; hot_water; fuels; combustion_releases | meter_log; invoice; fuel_issue_log; stack_test | water_kg; electricity_kwh; steam_kg; hot_water_kg; natural_gas_kg; diesel_kg; lpg_kg; stack_result_kg | Use process meters where available; otherwise reconcile facility records with a documented causal allocation driver. | kg; kWh | per_batch_or_shift | reporting_period | foreground_site | Allocate only the slaughter share and normalize through released product mass. | Meter coverage; calibration; invoice reconciliation; allocation worksheet |
| `cp_slaughter_mass_balance` | `turkey_slaughter_dressing` | live_birds; carcass; blood; feathers; named_organs; neck; feet; fat; contents; condemned_parts | batch_mass_balance | accepted_live_mass_kg; carcass_mass_kg; each_output_mass_kg; each_waste_mass_kg | Weigh each named product, by-product, and waste stream separately or derive it from auditable batch transfer records. | kg | per_batch | reporting_period | foreground_site | Reconcile separately named streams without merging edible offal into the reference product. | Scale calibration; batch reconciliation; destination record |
| `cp_slaughter_wastewater_records` | `turkey_slaughter_dressing` | high_load_wastewater; ordinary_load_wastewater | flow_meter_log; segregation_log | stream_mass_kg; stream_volume_m3; density_kg_per_m3; segregation_period | Meter segregated wastewater streams; convert measured volume to mass only with documented density. | kg; m3 | per_batch_or_day | reporting_period | foreground_site | Attribute by time, line, or measured discharge linked to the production batch. | Flow-meter calibration; density basis; segregation record |
| `cp_cutting_records` | `turkey_carcass_cutting` | carcass; utilities; cuts; bone; skin; fat; trim; wastewater; combustion_releases | batch_mass_balance; meter_log; waste_transfer_record | carcass_mass_kg; utility_quantity; cut_mass_kg; each_recovery_mass_kg; each_waste_mass_kg; wastewater_kg | Use cutting-line scales, meters, and separately coded recovery or disposal records. | kg; kWh | per_batch | reporting_period | foreground_site | Include the process only for products actually cut and normalize through released product mass. | Scale calibration; meter records; product code; destination evidence |
| `cp_freezing_mass_balance` | `turkey_prechilling_freezing` | fresh_meat; frozen_meat; offspec_meat | batch_mass_balance; release_log | fresh_input_mass_kg; frozen_output_mass_kg; offspec_mass_kg; product_form; freezing_method | Reconcile weighed input and frozen output by product form and freezing campaign. | kg | per_batch | reporting_period | foreground_site | Normalize each campaign through net released reference product mass. | Scale calibration; release record; batch reconciliation |
| `cp_freezing_utility_records` | `turkey_prechilling_freezing` | water; electricity; steam; hot_water; fuels; defrost_wastewater; combustion_releases | meter_log; invoice; fuel_issue_log; defrost_log | water_kg; electricity_kwh; steam_kg; hot_water_kg; natural_gas_kg; diesel_kg; lpg_kg; defrost_wastewater_kg | Use freezing-system and utility meters; document any shared-meter allocation. | kg; kWh | per_freezing_campaign | reporting_period | foreground_site | Attribute utilities to the campaign using metering or a causal equipment-time driver. | Meter calibration; equipment runtime; allocation worksheet |
| `cp_refrigerant_mass_balance` | `turkey_prechilling_freezing` | refrigerant_makeup; refrigerant_release; compressor_oil | refrigerant_inventory; maintenance_log | refrigerant_identity; opening_stock_kg; purchases_kg; closing_stock_kg; recovered_kg; returned_kg; oil_waste_kg | Maintain a refrigerant-specific mass balance for each named refrigerant and separate freezing equipment from storage equipment. | kg | per_reporting_period | reporting_period | foreground_site | Allocate equipment-specific losses to the relevant production campaign and normalize through released mass. | Purchase record; maintenance record; recovery record; signed reconciliation |
| `cp_frozen_storage_utility_records` | `turkey_packaging_frozen_storage` | electricity; steam; hot_water; fuels; refrigerant_makeup; refrigerant_release; compressor_oil | meter_log; fuel_issue_log; refrigerant_inventory; maintenance_log | electricity_kwh; steam_kg; hot_water_kg; natural_gas_kg; diesel_kg; lpg_kg; refrigerant_balance_fields; oil_waste_kg; storage_duration_h | Meter frozen-storage utilities and keep refrigerant-specific inventory and maintenance records. | kg; kWh; h | per_storage_campaign | reporting_period | foreground_site | Attribute storage utilities using measured product occupancy and duration; normalize through released mass. | Meter calibration; occupancy log; refrigerant reconciliation; maintenance record |
| `cp_packaging_material_records` | `turkey_packaging_frozen_storage` | packaging_inputs; packaging_wastes | stock_issue_record; packaging_specification; waste_transfer_record | packaging_component_id; material_identity; issued_mass_kg; returned_mass_kg; waste_mass_kg; reuse_cycles | Record every packaging component separately from stock issues, weights, and waste records. | kg; count | per_batch | reporting_period | foreground_site | Calculate net consumed mass for each component; disclose reusable-item cycle allocation. | Supplier specification; scale record; stock reconciliation; waste destination |
| `cp_release_mass_records` | `turkey_packaging_frozen_storage` | frozen_intermediate; released_reference_product; offspec_product | batch_release_log; scale_record | gross_mass_kg; packaging_tare_kg; net_released_mass_kg; frozen_state; product_form; offspec_mass_kg; storage_temperature; storage_duration | Determine reference mass from calibrated release weighing after subtracting packaging tare. | kg | per_batch | reporting_period | foreground_site | Set the normalized reference output to exactly 1 kg net released product. | Scale calibration; tare record; release certificate; temperature log |
| `cp_cleaning_sanitation_records` | `plant_cleaning_sanitation` | water; electricity; steam; hot_water; fuels; named_chemicals; named_wastewaters; cleaning_wastes; combustion_releases | sanitation_log; meter_log; chemical_issue_log; waste_transfer_record | water_kg; utility_quantity; each_chemical_kg; formulation_concentration; each_wastewater_kg; cloth_waste_kg; container_waste_kg | Use sanitation schedules, metering, chemical issue records, formulation specifications, and separately coded waste records. | kg; kWh | per_sanitation_cycle | reporting_period | foreground_site | Attribute sanitation activity to the cleaned production lines and normalize through released mass. | Meter calibration; chemical specification; sanitation verification; waste destination |
| `cp_wastewater_treatment_records` | `onsite_wastewater_treatment` | influent_streams; electricity; treatment_chemicals; treated_effluent; sludge; screenings; fat_waste; grit; air_releases | treatment_log; flow_meter_log; chemical_issue_log; waste_transfer_record | each_influent_mass_kg; electricity_kwh; each_chemical_kg; effluent_mass_kg; each_residue_mass_kg; methane_kg; nitrous_oxide_kg | Keep each influent stream and treatment chemical separate; measure treatment outputs and residues by the site treatment train. | kg; kWh | per_day_or_batch | reporting_period | foreground_site | Allocate treatment to the reference batch using measured influent load or another documented causal driver. | Flow-meter calibration; chemical records; residue destination; calculation worksheet |
| `cp_effluent_sampling` | `onsite_wastewater_treatment` | water_release; cod; bod5; total_nitrogen; total_phosphorus; suspended_solids; animal_fat | laboratory_result; discharge_flow_log | discharge_volume_m3; density_kg_per_m3; each_concentration_kg_per_m3; sample_time; sampling_point | Use representative discharge sampling and accredited or otherwise documented analytical methods with matched discharge flow. | kg; m3; kg_per_m3 | per_discharge_period | reporting_period | foreground_site | Calculate each pollutant load separately from matched concentration and flow records. | Laboratory report; method identifier; chain of custody; flow-meter calibration |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all_inventory_rows | Divide each batch-attributable quantity by net released frozen turkey meat mass after packaging tare removal. | batch_quantity; net_released_product_mass_kg | quantity_per_1_kg_reference_product | `eu-pef-recommendation-2021-2279` |
| `calc_reference_output` | packaging_reference_frozen_turkey_meat | Set the normalized product output to exactly 1 kg after the release-mass and packaging-tare checks pass. | net_released_product_mass_kg; packaging_tare_kg | reference_output_kg | `un-cpc-3-0-2025`, `eu-pef-recommendation-2021-2279` |
| `calc_process_mass_balance` | slaughter_cutting_freezing_packaging | For each process, reconcile weighed inputs with separately named products, co-products, wastes, retained inventory, and measured losses using one batch boundary. | each_input_mass_kg; each_output_mass_kg; stock_change_kg; measured_loss_kg | process_mass_balance_difference_kg | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `calc_shared_utility_attribution` | shared_utility_meters | Attribute shared metered utilities with a documented causal driver such as equipment runtime, measured load, or product occupancy; do not combine carriers. | meter_quantity; causal_driver_reference_batch; causal_driver_total | batch_attributable_utility_quantity | `eu-pef-recommendation-2021-2279` |
| `calc_combustion_release` | fuel_emission_rows | Calculate each named air release from batch-attributable fuel consumption and facility-specific measurement or a declared approved factor; measured stack results take precedence and are not double counted. | fuel_quantity; emission_measurement_or_factor | named_air_release_kg | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `calc_refrigerant_release` | refrigerant_emission_rows | For each refrigerant and equipment group, calculate opening stock plus purchases minus closing stock, recovered quantity, and returned quantity; reconcile maintenance charges. | opening_stock_kg; purchases_kg; closing_stock_kg; recovered_kg; returned_kg | refrigerant_release_kg | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `calc_packaging_consumption` | packaging_rows | For each packaging component, calculate issued mass minus returned unused mass, then apply a disclosed use-cycle allocation for reusable components. | issued_mass_kg; returned_mass_kg; use_cycle_factor | packaging_mass_per_batch_kg | `eu-pef-recommendation-2021-2279` |
| `calc_effluent_load` | water_emission_rows | Calculate each pollutant load separately as matched discharge volume multiplied by its measured concentration; convert volume to water mass only with documented density. | discharge_volume_m3; pollutant_concentration_kg_per_m3; water_density_kg_per_m3 | pollutant_load_kg; discharged_water_kg | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `calc_frozen_yield` | freezing_outputs | Divide net frozen output mass by corresponding fresh carcass or cut input mass for the same campaign; report off-spec output separately. | frozen_output_mass_kg; fresh_input_mass_kg; offspec_mass_kg | freezing_yield_ratio | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `calc_allocation_factor` | joint_process_outputs | Apply the disclosed physical relationship; if unavailable, calculate contemporaneous economic shares from net output values and retain sensitivity data. | output_quantity_or_value; total_quantity_or_value | allocation_factor | `eu-pef-recommendation-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference_product | Demonstrate exact CPC 21144 frozen turkey meat scope and separately identify product form, bone status, skin status, frozen-state criterion, and offal exclusion. | product specification; release certificate; classification record |
| `dq_temporal_coverage` | all_foreground_records | Use records covering the declared reporting period and representative production campaigns, including seasonal operation where material. | dated logs; reporting-period reconciliation |
| `dq_meter_calibration` | metered_resources | Retain calibration or verification evidence for scales, utility meters, wastewater flow meters, temperature sensors, and analytical instruments. | calibration certificates; verification logs |
| `dq_mass_completeness` | material_balance_rows | Account separately for live birds, saleable meat, each named co-product, each named waste, stock changes, and measured losses. | batch mass-balance worksheet; destination records |
| `dq_refrigerant_specificity` | refrigerant_rows | Retain equipment-specific and refrigerant-specific stock, purchase, recovery, return, and maintenance records. | refrigerant ledger; maintenance work orders |
| `dq_chemical_specificity` | chemical_rows | Retain product identity, formulation concentration, issue quantity, and supplier specification for each named chemical. | supplier specification; issue log |
| `dq_packaging_specificity` | packaging_rows | Retain material identity, mass, supplier specification, reuse cycles, loss rate, and destination for each packaging component. | packaging specification; stock reconciliation |
| `dq_effluent_quality` | water_emission_rows | Match sampling time and point to discharge-flow records; identify analytical method, detection limit, laboratory, and treatment operating condition. | laboratory report; chain of custody; flow log |
| `dq_allocation_transparency` | allocated_processes | Retain the decision path from subdivision through physical relation to any economic fallback, with factor source and sensitivity. | allocation worksheet; source records; sensitivity result |
| `dq_data_gap_disclosure` | all_inventory_rows | Identify missing, estimated, shared-meter, below-detection, and non-applicable records without substituting unreviewed default ranges. | data-gap register; reviewer note |
| `dq_geographic_technology_fit` | upstream_and_foreground_data | Disclose facility geography, slaughter and freezing technology, grid and fuel supply context, wastewater route, refrigerant system, and upstream-dataset representativeness. | dataset metadata; technology description; upstream dataset metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_cpc_scope` | reference_product | Reference product identity must be exact CPC 21144 frozen turkey meat; reject fresh or chilled turkey meat, edible offal, other poultry species, mechanically separated meat, and prepared products. | `un-cpc-3-0-2025` |
| `validate_reference_uuid` | reference_product | Reference product flow UUID must equal 2cf4dbce-c2cf-4ca6-a1bc-5366fad13063 and use the verified Mass property, Units of mass group, and kg reference unit. | `un-cpc-3-0-2025` |
| `validate_reference_amount` | reference_product | Normalized reference output must equal exactly 1 kg net released product after packaging tare exclusion. | `eu-pef-recommendation-2021-2279` |
| `validate_frozen_state` | reference_product | Frozen-state criterion, product-core measurement point, release temperature record, storage temperature, and storage duration must be declared. | `un-cpc-3-0-2025`, `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_boundary_start` | foreground_system | Confirm live-turkey acceptance at the slaughterhouse gate as the foreground start and keep farming, feed, hatchery, and inbound transport upstream. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_process_coverage` | process_map | All required processes must be present; conditional cutting and on-site wastewater treatment require an applicability statement. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_atomic_rows` | all_inventory_rows | Every card must contain exactly one specific exchange. Reject carrier, chemical, packaging, waste, by-product, refrigerant, or emission selectors and combined labels. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_nonreference_uuid_status` | all_nonreference_inventory_rows | Every non-reference flow UUID must remain blank until exact flow-hybrid-search and public state-100 direct readback agree; unresolved row_ids must close against manifest review metadata. | `eu-pef-recommendation-2021-2279` |
| `validate_mass_balance` | material_balance_rows | Reconcile live-bird inputs, meat outputs, each named co-product, each named waste, stock change, and measured loss within the declared batch boundary. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_utility_separation` | utility_rows | Validate electricity, purchased steam, purchased hot water, natural gas, diesel, and liquefied petroleum gas as separate exchanges at every applicable stage. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_refrigerant_balance` | refrigerant_rows | Validate separate make-up and release balances for R717, R744, R404A, and R507A; reject any combined refrigerant row. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_chemical_separation` | chemical_rows | Validate each cleaning, disinfection, and wastewater-treatment chemical as a separately identified formulation with concentration and quantity. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_packaging_tare` | packaging_rows | Validate separate packaging-component records, packaging-tare exclusion from product mass, and disclosed allocation for reusable items. | `eu-pef-recommendation-2021-2279` |
| `validate_byproduct_destinations` | co_product_rows | Validate separate identity, mass, destination, and allocation treatment for blood, feathers, each edible organ, neck, feet, fat, bone, skin, and trim. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_wastewater_separation` | wastewater_rows | Validate each named wastewater stream separately and prevent double counting between generation processes and on-site treatment inputs. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_waterborne_loads` | water_emission_rows | Validate matched discharge flow and concentration for every named waterborne load, including method and sampling point. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_air_releases` | air_emission_rows | Validate separate carbon dioxide, nitrogen oxides, sulfur oxides, particulate matter, refrigerant, methane, nitrous oxide, and ammonia rows when applicable. | `eu-jrc-sa-bref-2024`, `eu-pef-recommendation-2021-2279` |
| `validate_allocation` | allocated_processes | Validate subdivision, allocation hierarchy, factor calculation, co-product destination, reusable-packaging treatment, and sensitivity disclosure. | `eu-pef-recommendation-2021-2279` |
| `validate_source_traceability` | all_rules_and_rows | All source_ids must resolve to Section 11; foreground records, formulas, allocation, conversion, and data gaps must retain auditable evidence. | `eu-pef-recommendation-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground production dataset for frozen turkey meat |
| downstream_use | Eligible, after review, as a `secondary_dataset` or `background_dataset` for studies whose product, technology, geography, frozen state, and boundary match |
| allowed_use | Plant-gate LCA modelling of exact CPC 21144 frozen turkey meat when required qualifiers, process applicability, upstream links, allocation, and data-quality disclosures are complete |
| excluded_use | Fresh or chilled turkey meat; edible offal; meat from another poultry species; mechanically separated meat; prepared products; farming-only datasets; retail, use-phase, or end-of-life claims without added downstream modelling |
| required_metadata | PCR id; CPC code; reference UUID; net mass basis; turkey species; product form; bone and skin status; frozen-state criterion; freezing technology; release and storage temperatures; storage duration; packaging and tare; facility geography; reporting period; process applicability; refrigerant identities; co-product destinations; wastewater route |
| required_quality_disclosure | Primary-data share; meter coverage and calibration; mass-balance difference; shared-meter attribution; refrigerant balance; analytical methods; allocation hierarchy and sensitivity; packaging reuse cycles; data gaps; upstream-dataset representativeness |
| update_trigger | Change in product scope, slaughter or cutting route, freezing technology, refrigeration system, packaging, frozen-storage regime, co-product destination, wastewater treatment, allocation method, facility geography, or material data-quality evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | `dataset` | United Nations Statistics Division, Central Product Classification Version 3.0 structure, 30 June 2025, retained raw CSV: https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Exact CPC 21144 frozen-turkey scope and separation from CPC 21124 fresh or chilled turkey meat and CPC 21160 poultry edible offal |
| `eu-jrc-sa-bref-2024` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, 2024, DOI 10.2760/18199: https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | Process decomposition, slaughter operations, refrigeration, sanitation, utilities, wastewater, named animal outputs, wastes, and releases; no default quantity is copied |
| `eu-pef-recommendation-2021-2279` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, consolidated text: https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX%3A02021H2279-20211230 | Product-specific bill of materials, company-specific foreground data, complete life-cycle inventory, allocation hierarchy, transparency, data quality, and verification |
