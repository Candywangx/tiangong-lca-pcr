---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-rabbits-and-hares-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Meat of rabbits and hares, frozen

## 1. Scope and Applicability

This PCR applies only to net conforming meat of rabbits or hares released in a frozen market state under CPC Version 3.0 subclass 21134. It covers a whole dressed carcass or a meat cut when the declared factory-gate product remains rabbit or hare meat and is frozen before release.

Fresh or chilled rabbit or hare meat, edible offal, live animals sold as products, meat of another species, and prepared, preserved, seasoned, or composite meat products are outside this category. Rabbit and hare records shall remain species-specific through the foreground system; a declared combined reference output may be formed only after the species records and mass balances remain traceable.

The foreground system begins with live-animal receipt at the slaughter-facility gate and ends with factory-gate release after the attributable packaging or bulk-dispatch operation and frozen storage. Farming, feed production, rearing, and inbound transport are upstream dataset requirements. Distribution beyond the factory gate, retail, consumer storage, thawing, cooking, consumption, and product or packaging end of life are downstream and excluded.

The dataset shall report the actual frozen release specification, product form, time and temperature records, packaging configuration, and storage duration. This PCR provides no default temperature, yield, utility use, chemical dose, emission factor, amount, or range.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-rabbits-and-hares-frozen` |
| classification_refs | CPC Version 3.0 subclass 21134, exact mapping |
| covered_products | Net conforming rabbit meat or hare meat released frozen as a whole dressed carcass or meat cut |
| excluded_products | Fresh or chilled meat; edible offal; live animals; meat of another species; prepared, preserved, seasoned, or composite meat products |
| representative_product | Factory-gate frozen rabbit or hare meat with species, form, release specification, and net mass declared |
| production_route | Live-animal receipt; slaughter, bleeding, skinning, evisceration, and dressing; conditional cutting; pre-chilling and freezing; packaging or bulk dispatch; frozen storage and release; sanitation and conditional on-site wastewater treatment |
| market_state | Frozen at factory-gate release |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Factory-gate provision of net conforming frozen rabbit or hare meat |
| How much | 1 kg net product mass, excluding packaging |
| How well | Within CPC 21134, conforming to the declared release specification, with species, product form, frozen state, and quality disposition documented |
| How long or cycle | One factory-gate release; retain the attributable frozen-storage duration and reporting period |
| reference_flow_link | `reference_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming frozen meat, excluding packaging |
| Reference product flow | Meat of rabbits and hares, frozen `0204bc38-8047-4cbb-99cc-2cd7c41c626d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species and declared rabbit or hare share; product form; frozen release state; net mass; packaging configuration or unpackaged bulk dispatch; frozen-storage duration; facility geography; reporting period; slaughter and freezing technology; refrigerant identity; on-site wastewater-treatment status; co-product destinations; allocation basis |

When constructing a foreground data package, every required qualifier shall appear in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent package field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Set the reference output to exactly 1 kg of net conforming frozen meat released at the factory gate; exclude all packaging mass. |
| `species_mass_separation` | rabbit and hare animal, carcass, meat, by-product, and waste records | Mass | kg | Measure and retain rabbit and hare quantities separately through receipt, slaughter, cutting, freezing, rejection, and release before any declared aggregation. |
| `net_product_mass` | released frozen meat and packaging | Mass | kg | Determine net meat mass after tare deduction; record every packaging component separately and never include it in the 1 kg reference mass. |
| `live_animal_reconciliation` | receipt and holding | Mass | kg | Reconcile received live mass with accepted transfers, holding inventory change, dead-on-arrival animals, manure, bedding, and documented rejects for the same lot or period. |
| `process_mass_balance` | slaughter, dressing, cutting, freezing, and packaging | Mass | kg | Close each species-specific process mass balance using measured inputs, products, co-products, wastes, inventory change, and documented moisture or purge change without inventing a balancing quantity. |
| `water_volume` | mains-water supply and direct water withdrawal | Volume | m3 | Meter mains water, groundwater withdrawal, and surface-water withdrawal separately by process; do not duplicate a direct withdrawal as purchased mains water. |
| `electricity_energy` | grid electricity | Energy | kWh | Record metered medium-voltage grid electricity separately for every process and retain meter coverage and allocation where a meter is shared. |
| `thermal_and_fuel_energy` | purchased steam, purchased hot water, natural gas, diesel, and LPG | Energy | MJ | Keep each carrier separate; calculate delivered thermal or fuel energy only from measured quantity and documented supply conditions or supplier heating value. |
| `refrigerant_mass` | refrigerant make-up and refrigerant emissions | Mass | kg | Record each refrigerant product added and each emitted chemical species separately from inventory, service, recovery, and leak records; retain documented blend composition used for species calculations. |
| `wastewater_measurement` | wastewater streams and direct water emissions | Volume for wastewater; Mass for pollutant | m3; kg | Meter ordinary-strength and high-strength wastewater separately where segregated; calculate a direct pollutant load only from direct-discharge volume and representative measured concentration in compatible units. |
| `temporal_normalization` | all foreground exchanges | Recorded quantity | declared card unit | Use one coherent reporting period, reconcile opening and closing inventory, assign attributable quantities once, and divide by net conforming released mass for normalization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | A live rabbit or live hare crosses the slaughter-facility gate for receipt; species, supplier, origin, lot, animal count, live mass, acceptance status, and arrival time are declared |
| starting_condition_role | Purchased live-animal product input; its farming, feed, rearing, and inbound transport burdens are supplied by separate upstream datasets |
| product_classification_scope | CPC Version 3.0 subclass 21134 only: meat of rabbits and hares, frozen |
| recursive_input_rule | A purchased CPC 21134 meat input is one upstream product exchange with its own dataset and is not recursively expanded as foreground slaughter or freezing inside the receiving process |
| upstream_dataset_requirement | Use representative upstream datasets for live-animal production, inbound transport, water supply, electricity, steam, hot water, fuels, refrigerants, chemicals, packaging, wastewater transfer, and waste treatment |
| disclosure | Declare species and share, product form, release specification, facility and period, process technology, refrigeration system, actual refrigerants, packaging, frozen-storage duration, on-site treatment status, co-product and waste destinations, allocation, exclusions, and data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | foreground starting condition | Begin foreground collection when a live rabbit or live hare crosses the slaughter-facility gate for receipt; farming, feed production, rearing, and inbound transport remain upstream. | `unsd-cpc-21134`, `eu-jrc-sa-bref` |
| `boundary_end` | foreground ending condition | End foreground collection at factory-gate release of net conforming frozen meat after the attributable packaging or bulk-dispatch operation and frozen storage. | `unsd-cpc-21134`, `eu-jrc-sa-bref` |
| `boundary_required_operations` | required foreground operations | Include receipt, species identity control, slaughter, bleeding, skinning, evisceration, carcass dressing, pre-chilling, freezing, release, frozen storage, cleaning, disinfection, wastewater collection, and all attributable utilities. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `boundary_conditional_operations` | cutting, packaging, and on-site wastewater treatment | Include trimming, deboning, or cutting when performed; include each packaging component when used; include on-site wastewater treatment only when operated by the foreground facility, while always recording the actual wastewater transfer or direct discharge. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `boundary_upstream_datasets` | upstream product inputs | Link live-animal production, inbound transport, purchased water, electricity, steam, hot water, fuels, refrigerants, chemicals, and packaging to separate upstream datasets appropriate to their supplier, geography, technology, and period. | `eu-pef-2021-2279` |
| `boundary_downstream_exclusion` | downstream life-cycle stages | Exclude outbound distribution beyond the factory gate, retail, consumer storage, thawing, cooking, consumption, and product or packaging end of life from this foreground system. | `unsd-cpc-21134`, `eu-pef-2021-2279` |
| `boundary_recursive_input` | purchased CPC 21134 input | If frozen rabbit or hare meat is purchased as an input, record that single product input and link its documented upstream dataset; do not recursively recreate its slaughter and freezing inventory inside the receiving process. | `eu-pef-2021-2279` |
| `boundary_completeness` | foreground life-cycle inventory | Report every attributable raw-material, energy, product, co-product, waste, and direct air or water exchange identified by the process records; treat missing records as data gaps rather than zero quantities or automatic cut-offs. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `live_animal_receipt` | Live-animal receipt, identity control, and holding | required | Always include receipt, species identity control, acceptance, weighing, and attributable holding before slaughter | Establishes accepted rabbit and hare inputs | Per 1 kg net released frozen meat after normalization |
| `slaughter_dressing` | Slaughter, bleeding, skinning, and evisceration | required | Always include the performed stunning or killing, bleeding, skinning, evisceration, inspection, and carcass dressing operations | Produces dressed rabbit or hare carcasses and segregated by-products | Per 1 kg net released frozen meat after normalization |
| `carcass_cutting` | Carcass trimming, deboning, and cutting | conditional | Include when the released product is trimmed, deboned, portioned, or cut rather than a whole frozen carcass | Produces rabbit or hare meat cuts and segregated bones, fat, and trimmings | Per 1 kg net released frozen meat after normalization |
| `chilling_freezing` | Pre-chilling and freezing | required | Always include product cooling and the actual freezing operation needed to reach the declared frozen release state | Produces frozen rabbit or hare meat before final packing | Per 1 kg net released frozen meat after normalization |
| `packaging_frozen_storage` | Packaging, frozen storage, and factory-gate release | required | Always include release and frozen storage; packaging inputs are absent only for documented unpackaged bulk dispatch | Produces the net conforming CPC 21134 reference product | Exactly 1 kg net released frozen meat |
| `sanitation_wastewater` | Cleaning, disinfection, and wastewater management | required | Include all attributable equipment and area cleaning, disinfection, wastewater collection, and conditional on-site treatment | Cross-cutting sanitation and effluent support | Per 1 kg net released frozen meat after direct assignment or allocation |

### Process: Live-animal receipt, identity control, and holding (`live_animal_receipt`)

#### Inputs

##### Product flows

###### Live rabbit input (`live_rabbit_input`)

Live rabbit received at the slaughter facility is one species-specific animal input with origin, supplier, lot, live mass, and acceptance status retained.

- Selected flow: Live rabbit
- Flow property / unit: Mass / kg
- Amount rule: measured accepted live mass after dead-on-arrival and rejection adjustments and inventory reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_animal_receipt`
- Sources: `unsd-cpc-21134`, `eu-jrc-sa-bref`

###### Live hare input (`live_hare_input`)

Live hare received at the slaughter facility is one species-specific animal input with origin, supplier, lot, live mass, and acceptance status retained.

- Selected flow: Live hare
- Flow property / unit: Mass / kg
- Amount rule: measured accepted live mass after dead-on-arrival and rejection adjustments and inventory reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_animal_receipt`
- Sources: `unsd-cpc-21134`, `eu-jrc-sa-bref`

###### Live-animal receipt mains water (`receipt_mains_water`)

Potable mains water supplied across the facility boundary for live-animal receipt is recorded separately from direct environmental withdrawals.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: metered mains-water volume directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### Live-animal receipt grid electricity (`receipt_grid_electricity`)

Electricity, medium voltage, grid mix consumed by live-animal receipt is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Live-animal receipt purchased steam (`receipt_purchased_steam`)

Purchased steam consumed by live-animal receipt is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: delivered steam energy measured or calculated from measured steam mass and retained supply conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Live-animal receipt purchased hot water (`receipt_purchased_hot_water`)

Purchased hot water consumed by live-animal receipt is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: delivered hot-water energy measured or calculated from measured flow and retained supply and return temperatures
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Live-animal receipt natural gas (`receipt_natural_gas`)

Natural gas consumed by live-animal receipt is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy or measured gas quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Live-animal receipt diesel fuel (`receipt_diesel`)

Diesel fuel consumed by live-animal receipt is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Live-animal receipt liquefied petroleum gas (`receipt_lpg`)

Liquefied petroleum gas consumed by live-animal receipt is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

##### Waste flows

##### Elementary flows

###### Live-animal receipt groundwater withdrawal (`receipt_groundwater_withdrawal`)

Water, ground withdrawn directly for live-animal receipt is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### Live-animal receipt surface-water withdrawal (`receipt_surface_water_withdrawal`)

Water, surface withdrawn directly for live-animal receipt is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

#### Outputs

##### Product flows

###### Accepted live rabbit (`accepted_live_rabbit_output`)

Accepted live rabbit transferred to slaughter preserves the species identity and reconciled live mass of the receipt process.

- Selected flow: Accepted live rabbit
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled with received animals, holding inventory, mortality, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_live_animal_receipt`
- Sources: `eu-jrc-sa-bref`

###### Accepted live hare (`accepted_live_hare_output`)

Accepted live hare transferred to slaughter preserves the species identity and reconciled live mass of the receipt process.

- Selected flow: Accepted live hare
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled with received animals, holding inventory, mortality, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_live_animal_receipt`
- Sources: `eu-jrc-sa-bref`

##### Waste flows

###### Dead-on-arrival rabbit (`dead_on_arrival_rabbit_waste`)

Dead-on-arrival rabbit leaving receipt or holding is recorded as one waste exchange with its treatment destination retained.

- Selected flow: Dead-on-arrival rabbit
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Dead-on-arrival hare (`dead_on_arrival_hare_waste`)

Dead-on-arrival hare leaving receipt or holding is recorded as one waste exchange with its treatment destination retained.

- Selected flow: Dead-on-arrival hare
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Rabbit manure (`rabbit_lairage_manure`)

Rabbit manure leaving receipt or holding is recorded as one waste exchange with its treatment destination retained.

- Selected flow: Rabbit manure
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Hare manure (`hare_lairage_manure`)

Hare manure leaving receipt or holding is recorded as one waste exchange with its treatment destination retained.

- Selected flow: Hare manure
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Soiled straw bedding (`soiled_straw_bedding`)

Soiled straw bedding leaving receipt or holding is recorded as one waste exchange with its treatment destination retained.

- Selected flow: Soiled straw bedding
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

##### Elementary flows

###### Live-animal receipt fossil carbon dioxide to air (`receipt_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving live-animal receipt is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Live-animal receipt methane to air (`receipt_methane_air`)

Methane to air from on-site combustion serving live-animal receipt is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Live-animal receipt dinitrogen monoxide to air (`receipt_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving live-animal receipt is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Live-animal receipt nitrogen monoxide to air (`receipt_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving live-animal receipt is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Live-animal receipt nitrogen dioxide to air (`receipt_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving live-animal receipt is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Live-animal receipt carbon monoxide to air (`receipt_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving live-animal receipt is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Live-animal receipt sulfur dioxide to air (`receipt_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving live-animal receipt is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Live-animal receipt particulate matter below 2.5 µm to air (`receipt_pm25_air`)

Particulate matter, <2.5 µm, to air from on-site combustion serving live-animal receipt is reported as one elementary output.

- Selected flow: Particulate matter, <2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Live-animal receipt particulate matter from 2.5 µm to 10 µm to air (`receipt_pm_coarse_air`)

Particulate matter, 2.5-10 µm, to air from on-site combustion serving live-animal receipt is reported as one elementary output.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

### Process: Slaughter, bleeding, skinning, and evisceration (`slaughter_dressing`)

#### Inputs

##### Product flows

###### Accepted live rabbit input (`accepted_live_rabbit_input`)

Accepted live rabbit entering slaughter is the same species-specific internal product transferred from receipt.

- Selected flow: Accepted live rabbit
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass for the represented lot or period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`

###### Accepted live hare input (`accepted_live_hare_input`)

Accepted live hare entering slaughter is the same species-specific internal product transferred from receipt.

- Selected flow: Accepted live hare
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass for the represented lot or period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing mains water (`slaughter_mains_water`)

Potable mains water supplied across the facility boundary for slaughter and dressing is recorded separately from direct environmental withdrawals.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: metered mains-water volume directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing grid electricity (`slaughter_grid_electricity`)

Electricity, medium voltage, grid mix consumed by slaughter and dressing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing purchased steam (`slaughter_purchased_steam`)

Purchased steam consumed by slaughter and dressing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: delivered steam energy measured or calculated from measured steam mass and retained supply conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing purchased hot water (`slaughter_purchased_hot_water`)

Purchased hot water consumed by slaughter and dressing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: delivered hot-water energy measured or calculated from measured flow and retained supply and return temperatures
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing natural gas (`slaughter_natural_gas`)

Natural gas consumed by slaughter and dressing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy or measured gas quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing diesel fuel (`slaughter_diesel`)

Diesel fuel consumed by slaughter and dressing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing liquefied petroleum gas (`slaughter_lpg`)

Liquefied petroleum gas consumed by slaughter and dressing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

##### Waste flows

##### Elementary flows

###### Slaughter and dressing groundwater withdrawal (`slaughter_groundwater_withdrawal`)

Water, ground withdrawn directly for slaughter and dressing is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing surface-water withdrawal (`slaughter_surface_water_withdrawal`)

Water, surface withdrawn directly for slaughter and dressing is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

#### Outputs

##### Product flows

###### Dressed rabbit carcass (`dressed_rabbit_carcass_output`)

Dressed rabbit carcass leaving slaughter and dressing is one internal product transferred to cutting or directly to chilling.

- Selected flow: Dressed rabbit carcass
- Flow property / unit: Mass / kg
- Amount rule: measured inspected carcass mass reconciled with live-animal input, by-products, contents, rejects, and retained inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`

###### Dressed hare carcass (`dressed_hare_carcass_output`)

Dressed hare carcass leaving slaughter and dressing is one internal product transferred to cutting or directly to chilling.

- Selected flow: Dressed hare carcass
- Flow property / unit: Mass / kg
- Amount rule: measured inspected carcass mass reconciled with live-animal input, by-products, contents, rejects, and retained inventory
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`

###### Rabbit blood co-product (`rabbit_blood_coproduct`)

Rabbit blood segregated during slaughter is recorded as one positive product output when it crosses the process boundary with documented legal and economic status.

- Selected flow: Rabbit blood
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass with destination, composition where relevant, and market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Rabbit skin co-product (`rabbit_skin_coproduct`)

Rabbit skin segregated during slaughter is recorded as one positive product output when it crosses the process boundary with documented legal and economic status.

- Selected flow: Rabbit skin
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass with destination, composition where relevant, and market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Rabbit liver co-product (`rabbit_liver_coproduct`)

Rabbit liver segregated during slaughter is recorded as one positive product output when it crosses the process boundary with documented legal and economic status.

- Selected flow: Rabbit liver
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass with destination, composition where relevant, and market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Rabbit heart co-product (`rabbit_heart_coproduct`)

Rabbit heart segregated during slaughter is recorded as one positive product output when it crosses the process boundary with documented legal and economic status.

- Selected flow: Rabbit heart
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass with destination, composition where relevant, and market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Rabbit kidney co-product (`rabbit_kidney_coproduct`)

Rabbit kidney segregated during slaughter is recorded as one positive product output when it crosses the process boundary with documented legal and economic status.

- Selected flow: Rabbit kidney
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass with destination, composition where relevant, and market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Rabbit lung co-product (`rabbit_lung_coproduct`)

Rabbit lung segregated during slaughter is recorded as one positive product output when it crosses the process boundary with documented legal and economic status.

- Selected flow: Rabbit lung
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass with destination, composition where relevant, and market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Rabbit abdominal fat co-product (`rabbit_abdominal_fat_coproduct`)

Rabbit abdominal fat segregated during slaughter is recorded as one positive product output when it crosses the process boundary with documented legal and economic status.

- Selected flow: Rabbit abdominal fat
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass with destination, composition where relevant, and market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Hare blood co-product (`hare_blood_coproduct`)

Hare blood segregated during slaughter is recorded as one positive product output when it crosses the process boundary with documented legal and economic status.

- Selected flow: Hare blood
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass with destination, composition where relevant, and market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Hare skin co-product (`hare_skin_coproduct`)

Hare skin segregated during slaughter is recorded as one positive product output when it crosses the process boundary with documented legal and economic status.

- Selected flow: Hare skin
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass with destination, composition where relevant, and market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Hare liver co-product (`hare_liver_coproduct`)

Hare liver segregated during slaughter is recorded as one positive product output when it crosses the process boundary with documented legal and economic status.

- Selected flow: Hare liver
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass with destination, composition where relevant, and market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Hare heart co-product (`hare_heart_coproduct`)

Hare heart segregated during slaughter is recorded as one positive product output when it crosses the process boundary with documented legal and economic status.

- Selected flow: Hare heart
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass with destination, composition where relevant, and market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Hare kidney co-product (`hare_kidney_coproduct`)

Hare kidney segregated during slaughter is recorded as one positive product output when it crosses the process boundary with documented legal and economic status.

- Selected flow: Hare kidney
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass with destination, composition where relevant, and market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Hare lung co-product (`hare_lung_coproduct`)

Hare lung segregated during slaughter is recorded as one positive product output when it crosses the process boundary with documented legal and economic status.

- Selected flow: Hare lung
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass with destination, composition where relevant, and market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Hare abdominal fat co-product (`hare_abdominal_fat_coproduct`)

Hare abdominal fat segregated during slaughter is recorded as one positive product output when it crosses the process boundary with documented legal and economic status.

- Selected flow: Hare abdominal fat
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass with destination, composition where relevant, and market status retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

##### Waste flows

###### Rabbit stomach contents (`rabbit_stomach_contents`)

Rabbit stomach contents leaving slaughter is one waste exchange and is not merged with blood, skin, organ, or carcass records.

- Selected flow: Rabbit stomach contents
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Hare stomach contents (`hare_stomach_contents`)

Hare stomach contents leaving slaughter is one waste exchange and is not merged with blood, skin, organ, or carcass records.

- Selected flow: Hare stomach contents
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Rabbit intestinal contents (`rabbit_intestinal_contents`)

Rabbit intestinal contents leaving slaughter is one waste exchange and is not merged with blood, skin, organ, or carcass records.

- Selected flow: Rabbit intestinal contents
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Hare intestinal contents (`hare_intestinal_contents`)

Hare intestinal contents leaving slaughter is one waste exchange and is not merged with blood, skin, organ, or carcass records.

- Selected flow: Hare intestinal contents
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Condemned rabbit carcass (`condemned_rabbit_carcass`)

Condemned rabbit carcass leaving slaughter is one waste exchange and is not merged with blood, skin, organ, or carcass records.

- Selected flow: Condemned rabbit carcass
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Condemned hare carcass (`condemned_hare_carcass`)

Condemned hare carcass leaving slaughter is one waste exchange and is not merged with blood, skin, organ, or carcass records.

- Selected flow: Condemned hare carcass
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

##### Elementary flows

###### Slaughter and dressing fossil carbon dioxide to air (`slaughter_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving slaughter and dressing is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing methane to air (`slaughter_methane_air`)

Methane to air from on-site combustion serving slaughter and dressing is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing dinitrogen monoxide to air (`slaughter_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving slaughter and dressing is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing nitrogen monoxide to air (`slaughter_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving slaughter and dressing is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing nitrogen dioxide to air (`slaughter_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving slaughter and dressing is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing carbon monoxide to air (`slaughter_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving slaughter and dressing is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing sulfur dioxide to air (`slaughter_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving slaughter and dressing is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing particulate matter below 2.5 µm to air (`slaughter_pm25_air`)

Particulate matter, <2.5 µm, to air from on-site combustion serving slaughter and dressing is reported as one elementary output.

- Selected flow: Particulate matter, <2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Slaughter and dressing particulate matter from 2.5 µm to 10 µm to air (`slaughter_pm_coarse_air`)

Particulate matter, 2.5-10 µm, to air from on-site combustion serving slaughter and dressing is reported as one elementary output.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

### Process: Carcass trimming, deboning, and cutting (`carcass_cutting`)

#### Inputs

##### Product flows

###### Dressed rabbit carcass input (`dressed_rabbit_carcass_input`)

Dressed rabbit carcass entering cutting is the same species-specific internal product produced by slaughter and dressing.

- Selected flow: Dressed rabbit carcass
- Flow property / unit: Mass / kg
- Amount rule: measured carcass mass entering trimming, deboning, or cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`

###### Dressed hare carcass input (`dressed_hare_carcass_input`)

Dressed hare carcass entering cutting is the same species-specific internal product produced by slaughter and dressing.

- Selected flow: Dressed hare carcass
- Flow property / unit: Mass / kg
- Amount rule: measured carcass mass entering trimming, deboning, or cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting mains water (`cutting_mains_water`)

Potable mains water supplied across the facility boundary for carcass cutting is recorded separately from direct environmental withdrawals.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: metered mains-water volume directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting grid electricity (`cutting_grid_electricity`)

Electricity, medium voltage, grid mix consumed by carcass cutting is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting purchased steam (`cutting_purchased_steam`)

Purchased steam consumed by carcass cutting is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: delivered steam energy measured or calculated from measured steam mass and retained supply conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting purchased hot water (`cutting_purchased_hot_water`)

Purchased hot water consumed by carcass cutting is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: delivered hot-water energy measured or calculated from measured flow and retained supply and return temperatures
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting natural gas (`cutting_natural_gas`)

Natural gas consumed by carcass cutting is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy or measured gas quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting diesel fuel (`cutting_diesel`)

Diesel fuel consumed by carcass cutting is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting liquefied petroleum gas (`cutting_lpg`)

Liquefied petroleum gas consumed by carcass cutting is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

##### Waste flows

##### Elementary flows

###### Carcass cutting groundwater withdrawal (`cutting_groundwater_withdrawal`)

Water, ground withdrawn directly for carcass cutting is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting surface-water withdrawal (`cutting_surface_water_withdrawal`)

Water, surface withdrawn directly for carcass cutting is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

#### Outputs

##### Product flows

###### Rabbit meat cut (`rabbit_meat_cut_output`)

Rabbit meat cut segregated during cutting is recorded as one species-specific product output.

- Selected flow: Rabbit meat cut
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass reconciled with carcass input, retained inventory, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Rabbit bone (`rabbit_bone_coproduct`)

Rabbit bone segregated during cutting is recorded as one species-specific product output.

- Selected flow: Rabbit bone
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass reconciled with carcass input, retained inventory, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Rabbit cutting fat (`rabbit_cutting_fat_coproduct`)

Rabbit cutting fat segregated during cutting is recorded as one species-specific product output.

- Selected flow: Rabbit cutting fat
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass reconciled with carcass input, retained inventory, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Rabbit meat trimming (`rabbit_meat_trimming_coproduct`)

Rabbit meat trimming segregated during cutting is recorded as one species-specific product output.

- Selected flow: Rabbit meat trimming
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass reconciled with carcass input, retained inventory, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Hare meat cut (`hare_meat_cut_output`)

Hare meat cut segregated during cutting is recorded as one species-specific product output.

- Selected flow: Hare meat cut
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass reconciled with carcass input, retained inventory, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Hare bone (`hare_bone_coproduct`)

Hare bone segregated during cutting is recorded as one species-specific product output.

- Selected flow: Hare bone
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass reconciled with carcass input, retained inventory, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Hare cutting fat (`hare_cutting_fat_coproduct`)

Hare cutting fat segregated during cutting is recorded as one species-specific product output.

- Selected flow: Hare cutting fat
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass reconciled with carcass input, retained inventory, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Hare meat trimming (`hare_meat_trimming_coproduct`)

Hare meat trimming segregated during cutting is recorded as one species-specific product output.

- Selected flow: Hare meat trimming
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass reconciled with carcass input, retained inventory, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

##### Waste flows

###### Rejected rabbit meat (`rejected_rabbit_meat_waste`)

Rejected rabbit meat diverted during cutting is recorded as one species-specific waste exchange.

- Selected flow: Rejected rabbit meat
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Rejected hare meat (`rejected_hare_meat_waste`)

Rejected hare meat diverted during cutting is recorded as one species-specific waste exchange.

- Selected flow: Rejected hare meat
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

##### Elementary flows

###### Carcass cutting fossil carbon dioxide to air (`cutting_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving carcass cutting is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting methane to air (`cutting_methane_air`)

Methane to air from on-site combustion serving carcass cutting is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting dinitrogen monoxide to air (`cutting_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving carcass cutting is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting nitrogen monoxide to air (`cutting_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving carcass cutting is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting nitrogen dioxide to air (`cutting_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving carcass cutting is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting carbon monoxide to air (`cutting_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving carcass cutting is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting sulfur dioxide to air (`cutting_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving carcass cutting is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting particulate matter below 2.5 µm to air (`cutting_pm25_air`)

Particulate matter, <2.5 µm, to air from on-site combustion serving carcass cutting is reported as one elementary output.

- Selected flow: Particulate matter, <2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Carcass cutting particulate matter from 2.5 µm to 10 µm to air (`cutting_pm_coarse_air`)

Particulate matter, 2.5-10 µm, to air from on-site combustion serving carcass cutting is reported as one elementary output.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

### Process: Pre-chilling and freezing (`chilling_freezing`)

#### Inputs

##### Product flows

###### Rabbit meat cut input (`rabbit_meat_cut_input`)

Rabbit meat cut entering pre-chilling and freezing is one species-specific internal product from cutting or carcass dressing.

- Selected flow: Rabbit meat cut
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass entering the cold process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_transfer`
- Sources: `eu-jrc-sa-bref`

###### Hare meat cut input (`hare_meat_cut_input`)

Hare meat cut entering pre-chilling and freezing is one species-specific internal product from cutting or carcass dressing.

- Selected flow: Hare meat cut
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass entering the cold process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_transfer`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing mains water (`freezing_mains_water`)

Potable mains water supplied across the facility boundary for pre-chilling and freezing is recorded separately from direct environmental withdrawals.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: metered mains-water volume directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing grid electricity (`freezing_grid_electricity`)

Electricity, medium voltage, grid mix consumed by pre-chilling and freezing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing purchased steam (`freezing_purchased_steam`)

Purchased steam consumed by pre-chilling and freezing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: delivered steam energy measured or calculated from measured steam mass and retained supply conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing purchased hot water (`freezing_purchased_hot_water`)

Purchased hot water consumed by pre-chilling and freezing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: delivered hot-water energy measured or calculated from measured flow and retained supply and return temperatures
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing natural gas (`freezing_natural_gas`)

Natural gas consumed by pre-chilling and freezing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy or measured gas quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing diesel fuel (`freezing_diesel`)

Diesel fuel consumed by pre-chilling and freezing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing liquefied petroleum gas (`freezing_lpg`)

Liquefied petroleum gas consumed by pre-chilling and freezing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing R-717 refrigerant make-up (`freezing_r717_makeup`)

Ammonia refrigerant (R-717) charged as make-up to refrigeration equipment serving pre-chilling and freezing is recorded as one product input.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from service and inventory records; total system charge is not treated as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing HFC-134a refrigerant make-up (`freezing_hfc134a_makeup`)

1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a) charged as make-up to refrigeration equipment serving pre-chilling and freezing is recorded as one product input.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a)
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from service and inventory records; total system charge is not treated as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing R-404A refrigerant make-up (`freezing_r404a_makeup`)

R-404A refrigerant charged as make-up to refrigeration equipment serving pre-chilling and freezing is recorded as one product input.

- Selected flow: R-404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from service and inventory records; total system charge is not treated as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

##### Waste flows

##### Elementary flows

###### Pre-chilling and freezing groundwater withdrawal (`freezing_groundwater_withdrawal`)

Water, ground withdrawn directly for pre-chilling and freezing is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing surface-water withdrawal (`freezing_surface_water_withdrawal`)

Water, surface withdrawn directly for pre-chilling and freezing is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

#### Outputs

##### Product flows

###### Frozen rabbit meat (`frozen_rabbit_meat_output`)

Frozen rabbit meat leaving the freezing operation is one internal product with species, lot, mass, and recorded frozen-state release evidence retained.

- Selected flow: Frozen rabbit meat
- Flow property / unit: Mass / kg
- Amount rule: measured frozen output mass reconciled with cold-process input, inventory change, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_transfer`
- Sources: `unsd-cpc-21134`, `eu-jrc-sa-bref`

###### Frozen hare meat (`frozen_hare_meat_output`)

Frozen hare meat leaving the freezing operation is one internal product with species, lot, mass, and recorded frozen-state release evidence retained.

- Selected flow: Frozen hare meat
- Flow property / unit: Mass / kg
- Amount rule: measured frozen output mass reconciled with cold-process input, inventory change, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_transfer`
- Sources: `unsd-cpc-21134`, `eu-jrc-sa-bref`

##### Waste flows

###### Off-specification frozen rabbit meat (`off_spec_frozen_rabbit_meat`)

Off-specification frozen rabbit meat diverted from the cold process is one species-specific waste exchange.

- Selected flow: Off-specification frozen rabbit meat
- Flow property / unit: Mass / kg
- Amount rule: measured diverted mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Off-specification frozen hare meat (`off_spec_frozen_hare_meat`)

Off-specification frozen hare meat diverted from the cold process is one species-specific waste exchange.

- Selected flow: Off-specification frozen hare meat
- Flow property / unit: Mass / kg
- Amount rule: measured diverted mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

##### Elementary flows

###### Pre-chilling and freezing fossil carbon dioxide to air (`freezing_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing methane to air (`freezing_methane_air`)

Methane to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing dinitrogen monoxide to air (`freezing_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing nitrogen monoxide to air (`freezing_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing nitrogen dioxide to air (`freezing_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing carbon monoxide to air (`freezing_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing sulfur dioxide to air (`freezing_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing particulate matter below 2.5 µm to air (`freezing_pm25_air`)

Particulate matter, <2.5 µm, to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Particulate matter, <2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing particulate matter from 2.5 µm to 10 µm to air (`freezing_pm_coarse_air`)

Particulate matter, 2.5-10 µm, to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing ammonia refrigerant to air (`freezing_ammonia_air`)

Ammonia to air released from refrigeration equipment serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing HFC-134a to air (`freezing_hfc134a_air`)

1,1,1,2-Tetrafluoroethane to air released from refrigeration equipment serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing HFC-125 to air (`freezing_hfc125_air`)

Pentafluoroethane to air released from refrigeration equipment serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Pentafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### Pre-chilling and freezing HFC-143a to air (`freezing_hfc143a_air`)

1,1,1-Trifluoroethane to air released from refrigeration equipment serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: 1,1,1-Trifluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

### Process: Packaging, frozen storage, and factory-gate release (`packaging_frozen_storage`)

#### Inputs

##### Product flows

###### Frozen rabbit meat input (`frozen_rabbit_meat_input`)

Frozen rabbit meat entering final packing or bulk dispatch is the same species-specific internal product produced by freezing.

- Selected flow: Frozen rabbit meat
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass entering packaging and frozen storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`

###### Frozen hare meat input (`frozen_hare_meat_input`)

Frozen hare meat entering final packing or bulk dispatch is the same species-specific internal product produced by freezing.

- Selected flow: Frozen hare meat
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass entering packaging and frozen storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`

###### LDPE film (`ldpe_film_input`)

Low-density polyethylene film crossing the facility boundary for the released package is recorded as one packaging-component input.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: measured issued component mass less documented returns, reconciled with packed units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Polyamide barrier film (`polyamide_film_input`)

Polyamide barrier film crossing the facility boundary for the released package is recorded as one packaging-component input.

- Selected flow: Polyamide barrier film
- Flow property / unit: Mass / kg
- Amount rule: measured issued component mass less documented returns, reconciled with packed units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### PET tray (`pet_tray_input`)

Polyethylene terephthalate tray crossing the facility boundary for the released package is recorded as one packaging-component input.

- Selected flow: Polyethylene terephthalate tray
- Flow property / unit: Mass / kg
- Amount rule: measured issued component mass less documented returns, reconciled with packed units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Polypropylene tray (`pp_tray_input`)

Polypropylene tray crossing the facility boundary for the released package is recorded as one packaging-component input.

- Selected flow: Polypropylene tray
- Flow property / unit: Mass / kg
- Amount rule: measured issued component mass less documented returns, reconciled with packed units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Expanded polystyrene tray (`eps_tray_input`)

Expanded polystyrene tray crossing the facility boundary for the released package is recorded as one packaging-component input.

- Selected flow: Expanded polystyrene tray
- Flow property / unit: Mass / kg
- Amount rule: measured issued component mass less documented returns, reconciled with packed units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Paperboard carton (`paperboard_carton_input`)

Paperboard carton crossing the facility boundary for the released package is recorded as one packaging-component input.

- Selected flow: Paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: measured issued component mass less documented returns, reconciled with packed units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Corrugated board box (`corrugated_box_input`)

Corrugated board box crossing the facility boundary for the released package is recorded as one packaging-component input.

- Selected flow: Corrugated board box
- Flow property / unit: Mass / kg
- Amount rule: measured issued component mass less documented returns, reconciled with packed units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Aluminium foil (`aluminium_foil_input`)

Aluminium foil crossing the facility boundary for the released package is recorded as one packaging-component input.

- Selected flow: Aluminium foil
- Flow property / unit: Mass / kg
- Amount rule: measured issued component mass less documented returns, reconciled with packed units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Wooden pallet (`wooden_pallet_input`)

Wooden pallet crossing the facility boundary for the released package is recorded as one packaging-component input.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: measured issued component mass less documented returns, reconciled with packed units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### LDPE stretch film (`ldpe_stretch_film_input`)

Low-density polyethylene stretch film crossing the facility boundary for the released package is recorded as one packaging-component input.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: measured issued component mass less documented returns, reconciled with packed units and the corresponding scrap stream
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Packaging and frozen storage mains water (`packaging_storage_mains_water`)

Potable mains water supplied across the facility boundary for packaging and frozen storage is recorded separately from direct environmental withdrawals.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: metered mains-water volume directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage grid electricity (`packaging_storage_grid_electricity`)

Electricity, medium voltage, grid mix consumed by packaging and frozen storage is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage purchased steam (`packaging_storage_purchased_steam`)

Purchased steam consumed by packaging and frozen storage is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: delivered steam energy measured or calculated from measured steam mass and retained supply conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage purchased hot water (`packaging_storage_purchased_hot_water`)

Purchased hot water consumed by packaging and frozen storage is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: delivered hot-water energy measured or calculated from measured flow and retained supply and return temperatures
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage natural gas (`packaging_storage_natural_gas`)

Natural gas consumed by packaging and frozen storage is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy or measured gas quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage diesel fuel (`packaging_storage_diesel`)

Diesel fuel consumed by packaging and frozen storage is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage liquefied petroleum gas (`packaging_storage_lpg`)

Liquefied petroleum gas consumed by packaging and frozen storage is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage R-717 refrigerant make-up (`packaging_storage_r717_makeup`)

Ammonia refrigerant (R-717) charged as make-up to refrigeration equipment serving packaging and frozen storage is recorded as one product input.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from service and inventory records; total system charge is not treated as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage HFC-134a refrigerant make-up (`packaging_storage_hfc134a_makeup`)

1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a) charged as make-up to refrigeration equipment serving packaging and frozen storage is recorded as one product input.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a)
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from service and inventory records; total system charge is not treated as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage R-404A refrigerant make-up (`packaging_storage_r404a_makeup`)

R-404A refrigerant charged as make-up to refrigeration equipment serving packaging and frozen storage is recorded as one product input.

- Selected flow: R-404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from service and inventory records; total system charge is not treated as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

##### Waste flows

##### Elementary flows

###### Packaging and frozen storage groundwater withdrawal (`packaging_storage_groundwater_withdrawal`)

Water, ground withdrawn directly for packaging and frozen storage is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage surface-water withdrawal (`packaging_storage_surface_water_withdrawal`)

Water, surface withdrawn directly for packaging and frozen storage is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

#### Outputs

##### Product flows

###### Released frozen rabbit or hare meat (`reference_product_output`)

The reference output is the exact CPC 21134 frozen rabbit-or-hare meat product at factory-gate release; fresh or chilled meat and edible offal are excluded.

- Selected flow: Meat of rabbits and hares, frozen `0204bc38-8047-4cbb-99cc-2cd7c41c626d`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: exactly 1 kg net conforming frozen meat, excluding packaging mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_packaging_release`
- Sources: `unsd-cpc-21134`

##### Waste flows

###### Rejected packaged frozen rabbit meat (`rejected_packaged_rabbit_meat`)

Rejected packaged frozen rabbit meat rejected at packing or release is recorded separately from its packaging waste.

- Selected flow: Rejected packaged frozen rabbit meat
- Flow property / unit: Mass / kg
- Amount rule: measured rejected product mass excluding separately recorded packaging mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Rejected packaged frozen hare meat (`rejected_packaged_hare_meat`)

Rejected packaged frozen hare meat rejected at packing or release is recorded separately from its packaging waste.

- Selected flow: Rejected packaged frozen hare meat
- Flow property / unit: Mass / kg
- Amount rule: measured rejected product mass excluding separately recorded packaging mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### LDPE film waste (`ldpe_film_waste`)

Waste low-density polyethylene film generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Polyamide barrier-film waste (`polyamide_film_waste`)

Waste polyamide barrier film generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste polyamide barrier film
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### PET tray waste (`pet_tray_waste`)

Waste polyethylene terephthalate tray generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste polyethylene terephthalate tray
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Polypropylene tray waste (`pp_tray_waste`)

Waste polypropylene tray generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste polypropylene tray
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Expanded-polystyrene tray waste (`eps_tray_waste`)

Waste expanded polystyrene tray generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste expanded polystyrene tray
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Paperboard-carton waste (`paperboard_carton_waste`)

Waste paperboard carton generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Corrugated-board-box waste (`corrugated_box_waste`)

Waste corrugated board box generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste corrugated board box
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Aluminium-foil waste (`aluminium_foil_waste`)

Waste aluminium foil generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste aluminium foil
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Wooden-pallet waste (`wooden_pallet_waste`)

Waste wooden pallet generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### LDPE stretch-film waste (`ldpe_stretch_film_waste`)

Waste low-density polyethylene stretch film generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

##### Elementary flows

###### Packaging and frozen storage fossil carbon dioxide to air (`packaging_storage_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving packaging and frozen storage is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage methane to air (`packaging_storage_methane_air`)

Methane to air from on-site combustion serving packaging and frozen storage is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage dinitrogen monoxide to air (`packaging_storage_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving packaging and frozen storage is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage nitrogen monoxide to air (`packaging_storage_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving packaging and frozen storage is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage nitrogen dioxide to air (`packaging_storage_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving packaging and frozen storage is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage carbon monoxide to air (`packaging_storage_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving packaging and frozen storage is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage sulfur dioxide to air (`packaging_storage_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving packaging and frozen storage is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage particulate matter below 2.5 µm to air (`packaging_storage_pm25_air`)

Particulate matter, <2.5 µm, to air from on-site combustion serving packaging and frozen storage is reported as one elementary output.

- Selected flow: Particulate matter, <2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage particulate matter from 2.5 µm to 10 µm to air (`packaging_storage_pm_coarse_air`)

Particulate matter, 2.5-10 µm, to air from on-site combustion serving packaging and frozen storage is reported as one elementary output.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage ammonia refrigerant to air (`packaging_storage_ammonia_air`)

Ammonia to air released from refrigeration equipment serving packaging and frozen storage is reported as one elementary output.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage HFC-134a to air (`packaging_storage_hfc134a_air`)

1,1,1,2-Tetrafluoroethane to air released from refrigeration equipment serving packaging and frozen storage is reported as one elementary output.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage HFC-125 to air (`packaging_storage_hfc125_air`)

Pentafluoroethane to air released from refrigeration equipment serving packaging and frozen storage is reported as one elementary output.

- Selected flow: Pentafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### Packaging and frozen storage HFC-143a to air (`packaging_storage_hfc143a_air`)

1,1,1-Trifluoroethane to air released from refrigeration equipment serving packaging and frozen storage is reported as one elementary output.

- Selected flow: 1,1,1-Trifluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

### Process: Cleaning, disinfection, and wastewater management (`sanitation_wastewater`)

#### Inputs

##### Product flows

###### Sodium hydroxide input (`sodium_hydroxide_input`)

Sodium hydroxide used for cleaning, disinfection, or conditional on-site wastewater treatment is recorded as one chemical input.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: measured issued commercial-product mass, with active concentration and use retained when required for calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Sources: `eu-jrc-sa-bref`

###### Nitric acid input (`nitric_acid_input`)

Nitric acid used for cleaning, disinfection, or conditional on-site wastewater treatment is recorded as one chemical input.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: measured issued commercial-product mass, with active concentration and use retained when required for calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Sources: `eu-jrc-sa-bref`

###### Peracetic acid input (`peracetic_acid_input`)

Peracetic acid used for cleaning, disinfection, or conditional on-site wastewater treatment is recorded as one chemical input.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: measured issued commercial-product mass, with active concentration and use retained when required for calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Sources: `eu-jrc-sa-bref`

###### Sodium hypochlorite input (`sodium_hypochlorite_input`)

Sodium hypochlorite used for cleaning, disinfection, or conditional on-site wastewater treatment is recorded as one chemical input.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: measured issued commercial-product mass, with active concentration and use retained when required for calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Sources: `eu-jrc-sa-bref`

###### Hydrogen peroxide input (`hydrogen_peroxide_input`)

Hydrogen peroxide used for cleaning, disinfection, or conditional on-site wastewater treatment is recorded as one chemical input.

- Selected flow: Hydrogen peroxide
- Flow property / unit: Mass / kg
- Amount rule: measured issued commercial-product mass, with active concentration and use retained when required for calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Sources: `eu-jrc-sa-bref`

###### Ferric chloride input (`ferric_chloride_input`)

Ferric chloride used for cleaning, disinfection, or conditional on-site wastewater treatment is recorded as one chemical input.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: measured issued commercial-product mass, with active concentration and use retained when required for calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Sources: `eu-jrc-sa-bref`

###### Calcium hydroxide input (`calcium_hydroxide_input`)

Calcium hydroxide used for cleaning, disinfection, or conditional on-site wastewater treatment is recorded as one chemical input.

- Selected flow: Calcium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: measured issued commercial-product mass, with active concentration and use retained when required for calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Sources: `eu-jrc-sa-bref`

###### Polyacrylamide flocculant input (`polyacrylamide_input`)

Polyacrylamide flocculant used for cleaning, disinfection, or conditional on-site wastewater treatment is recorded as one chemical input.

- Selected flow: Polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: measured issued commercial-product mass, with active concentration and use retained when required for calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management mains water (`sanitation_mains_water`)

Potable mains water supplied across the facility boundary for cleaning and wastewater management is recorded separately from direct environmental withdrawals.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: metered mains-water volume directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management grid electricity (`sanitation_grid_electricity`)

Electricity, medium voltage, grid mix consumed by cleaning and wastewater management is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management purchased steam (`sanitation_purchased_steam`)

Purchased steam consumed by cleaning and wastewater management is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: delivered steam energy measured or calculated from measured steam mass and retained supply conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management purchased hot water (`sanitation_purchased_hot_water`)

Purchased hot water consumed by cleaning and wastewater management is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: delivered hot-water energy measured or calculated from measured flow and retained supply and return temperatures
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management natural gas (`sanitation_natural_gas`)

Natural gas consumed by cleaning and wastewater management is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy or measured gas quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management diesel fuel (`sanitation_diesel`)

Diesel fuel consumed by cleaning and wastewater management is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management liquefied petroleum gas (`sanitation_lpg`)

Liquefied petroleum gas consumed by cleaning and wastewater management is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

##### Waste flows

##### Elementary flows

###### Cleaning and wastewater management groundwater withdrawal (`sanitation_groundwater_withdrawal`)

Water, ground withdrawn directly for cleaning and wastewater management is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management surface-water withdrawal (`sanitation_surface_water_withdrawal`)

Water, surface withdrawn directly for cleaning and wastewater management is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

#### Outputs

##### Product flows

##### Waste flows

###### Ordinary-strength slaughterhouse wastewater (`ordinary_strength_wastewater`)

Ordinary-strength slaughterhouse wastewater leaving cleaning or wastewater management is one waste exchange and is not duplicated as a direct environmental release.

- Selected flow: Ordinary-strength slaughterhouse wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater volume transferred once to its documented treatment exchange
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

###### High-strength slaughterhouse wastewater (`high_strength_wastewater`)

High-strength slaughterhouse wastewater leaving cleaning or wastewater management is one waste exchange and is not duplicated as a direct environmental release.

- Selected flow: High-strength slaughterhouse wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered wastewater volume transferred once to its documented treatment exchange
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

###### Wastewater-treatment sludge (`wastewater_treatment_sludge`)

Wastewater-treatment sludge leaving cleaning or wastewater management is one waste exchange and is not duplicated as a direct environmental release.

- Selected flow: Wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

###### Slaughterhouse screen residue (`slaughterhouse_screen_residue`)

Slaughterhouse screen residue leaving cleaning or wastewater management is one waste exchange and is not duplicated as a direct environmental release.

- Selected flow: Slaughterhouse screen residue
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

###### Waste rabbit fat from grease separation (`rabbit_grease_separation_waste`)

Waste rabbit fat from grease separation leaving cleaning or wastewater management is one waste exchange and is not duplicated as a direct environmental release.

- Selected flow: Waste rabbit fat from grease separation
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

###### Waste hare fat from grease separation (`hare_grease_separation_waste`)

Waste hare fat from grease separation leaving cleaning or wastewater management is one waste exchange and is not duplicated as a direct environmental release.

- Selected flow: Waste hare fat from grease separation
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

##### Elementary flows

###### Cleaning and wastewater management fossil carbon dioxide to air (`sanitation_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving cleaning and wastewater management is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management methane to air (`sanitation_methane_air`)

Methane to air from on-site combustion serving cleaning and wastewater management is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management dinitrogen monoxide to air (`sanitation_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving cleaning and wastewater management is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management nitrogen monoxide to air (`sanitation_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving cleaning and wastewater management is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management nitrogen dioxide to air (`sanitation_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving cleaning and wastewater management is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management carbon monoxide to air (`sanitation_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving cleaning and wastewater management is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management sulfur dioxide to air (`sanitation_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving cleaning and wastewater management is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management particulate matter below 2.5 µm to air (`sanitation_pm25_air`)

Particulate matter, <2.5 µm, to air from on-site combustion serving cleaning and wastewater management is reported as one elementary output.

- Selected flow: Particulate matter, <2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Cleaning and wastewater management particulate matter from 2.5 µm to 10 µm to air (`sanitation_pm_coarse_air`)

Particulate matter, 2.5-10 µm, to air from on-site combustion serving cleaning and wastewater management is reported as one elementary output.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### Chemical oxygen demand to water (`direct_cod_water`)

Chemical oxygen demand to water is reported as one elementary output only for direct treated-wastewater discharge from the foreground facility.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from metered direct-discharge volume and a representative measured concentration using compatible units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

###### Biochemical oxygen demand to water (`direct_bod5_water`)

Biochemical oxygen demand to water is reported as one elementary output only for direct treated-wastewater discharge from the foreground facility.

- Selected flow: Biochemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from metered direct-discharge volume and a representative measured concentration using compatible units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

###### Total suspended solids to water (`direct_tss_water`)

Total suspended solids to water is reported as one elementary output only for direct treated-wastewater discharge from the foreground facility.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from metered direct-discharge volume and a representative measured concentration using compatible units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

###### Total nitrogen to water (`direct_total_nitrogen_water`)

Total nitrogen to water is reported as one elementary output only for direct treated-wastewater discharge from the foreground facility.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from metered direct-discharge volume and a representative measured concentration using compatible units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

###### Total phosphorus to water (`direct_total_phosphorus_water`)

Total phosphorus to water is reported as one elementary output only for direct treated-wastewater discharge from the foreground facility.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from metered direct-discharge volume and a representative measured concentration using compatible units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

###### Ammonium to water (`direct_ammonium_water`)

Ammonium to water is reported as one elementary output only for direct treated-wastewater discharge from the foreground facility.

- Selected flow: Ammonium to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from metered direct-discharge volume and a representative measured concentration using compatible units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

###### Nitrate to water (`direct_nitrate_water`)

Nitrate to water is reported as one elementary output only for direct treated-wastewater discharge from the foreground facility.

- Selected flow: Nitrate to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from metered direct-discharge volume and a representative measured concentration using compatible units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

###### Chloride to water (`direct_chloride_water`)

Chloride to water is reported as one elementary output only for direct treated-wastewater discharge from the foreground facility.

- Selected flow: Chloride to water
- Flow property / unit: Mass / kg
- Amount rule: calculated from metered direct-discharge volume and a representative measured concentration using compatible units
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen rabbit or hare meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | multi-output foreground processes | First avoid allocation through process subdivision, species-separated records, and direct assignment of utilities, chemicals, packaging, wastes, and emissions to the operation that causes them. | `eu-pef-2021-2279` |
| `allocation_species` | rabbit and hare production | Do not transfer rabbit burdens to hare output or hare burdens to rabbit output when species-specific measured records are available; disclose any shared-service allocation between species. | `eu-pef-2021-2279` |
| `allocation_output_status` | blood, skins, organs, fat, bones, and trimmings | Determine the product, co-product, or waste status of each segregated output from its documented quality, destination, and contractual disposition; do not infer a useful co-product solely from its physical presence. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `allocation_physical_relation` | unavoidable co-product allocation | Where subdivision cannot avoid allocation, use a documented underlying physical relationship that reflects how inputs and outputs change; do not select mass merely because mass data are available. | `eu-pef-2021-2279` |
| `allocation_economic_relation` | co-products without a defensible physical relation | Use an economic relationship only when a defensible physical relationship cannot be established, and retain the price source, averaging period, currency basis, market, and sensitivity disclosure. | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | waste outputs and treatment | Assign collection, handling, and treatment burdens to each documented waste destination once; apply no avoided-burden credit unless the selected study method explicitly requires it and the assumption is disclosed. | `eu-pef-2021-2279` |
| `allocation_shared_services` | shared water, energy, refrigeration, sanitation, and wastewater services | Prefer submetering or operational logs; otherwise use a documented causal driver such as operating time, cleaned area, thermal load, wastewater volume, or product mass only where that driver represents consumption. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `allocation_disclosure` | reported dataset | Report the allocation hierarchy, equations, drivers, values, co-product destinations, unresolved data gaps, and sensitivity results so that no measured input or output is counted twice or omitted. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_animal_receipt` | `live_animal_receipt` | live rabbit, live hare, accepted animals, arrival losses, and holding balance | supplier, receipt, weighbridge, holding, and mortality records | species; supplier; origin; lot; arrival time; animal count; gross mass; tare; accepted mass; rejected mass; mortality; opening and closing holding inventory | weigh each lot with calibrated equipment and reconcile acceptance and holding records by species | kg; animal | each received lot | complete reporting period including opening and closing holding inventory | all receipt and holding areas serving the represented facility | sum by species and lot, then normalize once to net released reference mass | calibration records, signed receipts, rejection records, mortality logs, and inventory reconciliation |
| `cp_slaughter_byproduct_balance` | `slaughter_dressing` | accepted animals, dressed carcasses, blood, skins, organs, fat, stomach contents, intestinal contents, and condemned carcasses | batch production, inspection, weighing, and destination records | species; lot; accepted live mass; carcass mass; output identity; output mass; quality status; destination; opening and closing inventory; purge or moisture change | weigh segregated outputs by species and close one lot or period mass balance without a fabricated balancing item | kg | each slaughter lot or production shift | complete reporting period | all slaughter, bleeding, skinning, evisceration, inspection, and dressing lines in scope | sum species-specific measured masses and retain every documented destination before normalization | scale calibration, batch sheets, veterinary or quality disposition, destination tickets, and signed mass balance |
| `cp_cutting_mass_balance` | `carcass_cutting` | carcasses, meat cuts, bones, cutting fat, trimmings, and rejected meat | cutting batch, weighing, yield, rejection, and inventory records | species; lot; carcass input; cut output; bone; fat; trimming; reject; opening and closing inventory; purge | weigh each segregated stream and reconcile measured inputs, outputs, inventory, and documented purge | kg | each cutting lot or shift | complete reporting period | all trimming, deboning, portioning, and cutting operations in scope | sum by species and output identity before normalization | calibrated scale records, cutting sheets, yield reconciliation, and disposition records |
| `cp_freezing_transfer` | `chilling_freezing` | meat entering cooling, frozen meat output, and off-specification frozen meat | cold-process batch, transfer, temperature, time, mass, and rejection records | species; lot; input mass; output mass; reject mass; cooling start and end; freezing start and end; measured product temperature; opening and closing inventory | link calibrated mass records to retained time and temperature records for each represented cold-process lot | kg; degree Celsius; hour | each freezing lot | complete reporting period including cold-store inventory change | all pre-chilling and freezing equipment in scope | sum mass by species; retain actual time and temperature descriptors without imposing a category default | calibrated scales and sensors, batch logs, alarm logs, and inventory reconciliation |
| `cp_packaging_release` | `packaging_frozen_storage` | frozen meat transfer, each packaging component, reference output, and packaged rejects | packing order, material issue, tare, release, dispatch, and frozen-store records | species; lot; product form; input mass; package component identity; component mass; package count; tare; net released mass; reject mass; storage time; release status | measure net product after tare deduction, record every component separately, and reconcile packing and frozen-store inventory | kg; package; hour | each packing and release lot | complete reporting period including opening and closing frozen inventory | all final packing, bulk dispatch, frozen storage, and release points in scope | sum component and product masses separately; normalize reference output to exactly 1 kg net meat | material issue records, packaging specifications, scale calibration, release certificates, dispatch records, and stock reconciliation |
| `cp_water_records` | `all_foreground_processes` | mains water, groundwater withdrawal, and surface-water withdrawal by process | meter, invoice, withdrawal, and submeter records | source identity; meter identity; opening and closing reading; volume; process coverage; reading time; allocation driver; calibration status | read each source meter and submeter, prevent supply-withdrawal duplication, and assign shared volume with a documented causal driver | m3 | at least each reporting interval and whenever process assignment changes | complete reporting period with opening and closing readings | all meters and withdrawals serving the foreground boundary | difference readings by source and process, subtract documented non-production use, then normalize once | meter calibration, invoices, permits, logs, and allocation workbook |
| `cp_utility_records` | `all_foreground_processes` | grid electricity, purchased steam, purchased hot water, natural gas, diesel, and LPG by process | meter, invoice, delivery, tank, boiler, and operational records | carrier identity; supplier; meter or tank identity; measured quantity; unit; supply conditions; heating value; opening and closing inventory; process coverage; allocation driver | collect each carrier separately, reconcile purchases and inventory, and calculate energy only with retained supplier data or measured conditions | kWh for electricity; MJ for steam, hot water, and fuels | each meter interval, delivery, or production shift as available | complete reporting period with opening and closing inventory | all utility points serving each foreground process | sum each carrier separately by process and use a documented causal allocation for shared meters | calibration, invoices, delivery notes, supplier heating values, meter logs, and allocation workbook |
| `cp_refrigerant_records` | `cold_chain_processes` | R-717, HFC-134a, and R-404A make-up plus ammonia, HFC-134a, HFC-125, and HFC-143a emissions | refrigerant purchase, service, charge, recovery, leak, and inventory records | equipment; process served; refrigerant product; chemical composition; opening charge; additions; removals; recovered mass; closing charge; leak event; service date; technician | close an equipment-level mass balance, retain actual blend composition, and assign make-up and emitted species separately to the cold process served | kg | each service or leak event and at reporting-period boundaries | complete reporting period with opening and closing charge | all refrigeration equipment serving pre-chilling, freezing, and frozen storage | sum by refrigerant product, emitted chemical species, equipment, and process without double counting recovered material | purchase invoices, service logs, leak tests, recovery tickets, composition specification, and signed balance |
| `cp_cleaning_chemical_records` | `sanitation_wastewater` | each cleaning, disinfection, and wastewater-treatment chemical | chemical issue, purchase, formulation, concentration, and use records | chemical identity; supplier; commercial-product mass; active concentration; batch; use point; date; opening and closing inventory; returned mass | record each commercial chemical separately and reconcile issued mass with inventory and returns | kg | each issue or preparation batch | complete reporting period with opening and closing stock | all cleaning, disinfection, and conditional on-site treatment points | sum by single chemical identity and use point before process assignment and normalization | safety data sheet, purchase invoice, issue log, concentration record, and stock reconciliation |
| `cp_waste_records` | `all_foreground_processes` | each species-specific or material-specific waste stream and destination | weighing, rejection, container, transfer, recovery, and treatment records | row identity; species or material; lot; mass; container tare; quality status; destination; carrier; treatment route; transfer date; document number | weigh each stream separately, deduct tare, and assign its documented destination exactly once | kg | each waste transfer or production lot | complete reporting period | all waste generation and dispatch points within the foreground boundary | sum by row identity, species or material, and destination; prevent transfer and treatment duplication | calibrated scale, rejection record, transfer note, treatment receipt, and destination reconciliation |
| `cp_wastewater_records` | `sanitation_wastewater` | ordinary-strength wastewater, high-strength wastewater, sludge, screen residue, separated fat, and direct water pollutants | flowmeter, sampling, laboratory, sludge, screening, grease-separation, sewer-transfer, and discharge records | stream identity; destination; discharge status; volume; sampling point; sampling time; sampling method; concentration; analyte; unit; sludge mass; residue mass; species identity for separated fat | meter segregated wastewater, use representative measured concentrations, weigh solids, and distinguish sewer transfer from direct environmental discharge | m3; kg; concentration unit retained | continuous or each discharge interval for flow and according to the documented representative sampling plan for concentration | complete reporting period including bypasses and abnormal events | all wastewater collection, treatment, sewer-transfer, and direct-discharge points in scope | calculate each pollutant separately from compatible volume and concentration records; report direct emissions only for direct discharge | meter calibration, sampling plan, chain of custody, accredited or documented laboratory results, discharge permit, and mass reconciliation |
| `cp_direct_air_emissions` | `all_foreground_processes` | each direct combustion substance emitted to air by process | fuel, equipment, stack-test, continuous-monitoring, operating-hour, and verified-factor records | process served; equipment; fuel identity; fuel quantity; operating time; substance; measured concentration or verified factor; exhaust flow; test period; unit | use direct measurement where representative; otherwise calculate each substance separately from collected fuel or activity data and a retained verified factor | kg | each representative test or monitoring interval and each fuel-reporting interval | complete reporting period including abnormal operation | all on-site combustion equipment serving the foreground processes | sum each chemical species by process and equipment; do not merge NO with NO2 or fine with coarse particulate matter | calibration, test report, monitoring log, fuel record, verified factor source, and calculation workbook |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized exchange = attributable foreground exchange for the reporting period divided by net conforming frozen meat released in the same period; the reference output itself is fixed at 1 kg | attributable exchange; net conforming released mass | exchange per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_mass_reconciliation` | receipt, slaughter, cutting, freezing, and packing mass balances | mass-balance difference = measured inputs plus opening inventory minus measured products, co-products, wastes, closing inventory, and documented moisture or purge change; investigate rather than fabricate an unmeasured balancing exchange | measured masses; opening and closing inventory; documented purge or moisture change | species-specific mass-balance difference and reconciliation status | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `calc_delivered_thermal_energy` | purchased steam and purchased hot water | use metered delivered energy where available; otherwise calculate energy from measured delivered quantity and retained supply conditions using a documented engineering relation | measured steam mass or water flow; supply pressure or temperature; return temperature where relevant; documented relation | delivered energy in MJ for one carrier | `eu-pef-2021-2279` |
| `calc_fuel_energy` | natural gas, diesel, and LPG | fuel energy = measured fuel quantity multiplied by the retained supplier heating value after unit conversion; keep each fuel separate | measured fuel quantity; supplier heating value; unit conversion | energy in MJ for one fuel | `eu-pef-2021-2279` |
| `calc_refrigerant_balance` | refrigerant make-up and chemical-specific air emissions | close each equipment mass balance from opening charge, purchases or additions, removals, recovered mass, and closing charge; allocate an evidenced loss to its refrigerant product and calculate each emitted chemical species only from retained actual composition | opening and closing charge; additions; removals; recovery; leak records; actual composition | make-up mass by refrigerant product and emitted mass by chemical species | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `calc_wastewater_pollutant_load` | direct water emissions | pollutant load = metered direct-discharge volume multiplied by representative measured concentration after compatible unit conversion; subtract intake background only when paired representative measurements and the selected method justify it | direct-discharge volume; measured concentration; unit conversion; paired intake result if used | mass of one pollutant directly discharged to water | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `calc_shared_service_assignment` | shared meters and support services | assign the measured shared total first by direct submeter data and otherwise by one documented causal driver whose totals reconcile to the shared record; retain the unrounded calculation | shared measured total; submeter records or causal-driver values; process coverage | attributable amount for one process and one atomic exchange | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_company_specific` | foreground manufacturing inventory | Use company-specific facility, lot, meter, invoice, service, laboratory, and production records for the represented reporting period. | record register with owner, date, system of origin, and retained record reference |
| `dq_temporal` | all foreground data | Use one coherent reporting period that captures normal production, shutdowns, abnormal events, and opening and closing inventory; disclose substitutions or gaps. | reporting calendar, production log, downtime log, and inventory reconciliation |
| `dq_geographic` | site and upstream links | Declare facility geography, water sources, electricity supply geography, fuel suppliers, waste destinations, and direct discharge receiving environment. | site metadata, supplier records, utility contracts, permits, and destination documents |
| `dq_technology` | slaughter, cutting, freezing, refrigeration, sanitation, and wastewater treatment | Document the actual equipment and operations represented, including product form, freezing equipment, refrigerant identity, cleaning practice, and on-site treatment status. | process map, equipment register, refrigerant register, work instructions, and treatment description |
| `dq_completeness` | life-cycle inventory | Reconcile the atomic card register to purchase, production, maintenance, laboratory, waste, and discharge records; list every missing card record as an explicit data gap. | completeness matrix with included, absent, and unresolved status by row_id |
| `dq_precision` | measured and calculated quantities | Retain instrument resolution, calibration, sampling variability, conversion factors, allocation drivers, unrounded calculations, and final rounding rule. | calibration certificates, sampling records, calculation workbook, and uncertainty statement |
| `dq_consistency` | species, units, flow identities, and destinations | Apply one documented convention for rabbit versus hare identity, gross versus net mass, units, co-product status, waste destination, and direct versus sewer discharge throughout the dataset. | data dictionary, unit-conversion register, flow mapping register, and reviewer sign-off |
| `dq_transparency` | method and results | Disclose boundary choices, conditional operations, exclusions, allocation, upstream dataset selection, calculations, unresolved UUIDs, data gaps, and verification findings. | method report, manifest review metadata, source register, calculation workbook, and verification report |
| `dq_verification` | completed foreground data package | Perform an independent review of identity, scope, records, balances, calculations, allocation, source use, and bilingual rule alignment before lifecycle advancement. | dated review checklist, reviewer identity, findings, corrections, and closure evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | PCR and reference flow identity | Confirm canonical_pcr_id, CPC 3.0 code 21134, exact product title, Product flow type, reference UUID, Mass property UUID, Units of mass UUID, and kg unit; reject fresh or chilled meat and edible offal. | `unsd-cpc-21134` |
| `validate_reference_amount` | reference output | Require exactly 1 kg net conforming frozen meat at factory-gate release and verify that packaging mass is excluded. | `unsd-cpc-21134`, `eu-pef-2021-2279` |
| `validate_scope` | dataset scope | Verify frozen market state, declared rabbit or hare species, product form, process coverage, facility gate, reporting period, and exclusions for upstream farming and inbound transport and downstream stages. | `unsd-cpc-21134`, `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_process_map` | foreground processes | Require detailed inventories for every required process and for each conditional process that is performed; document why an unperformed conditional process is absent. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_atomic_inventory` | all inventory cards | Require one concrete exchange per row_id, a non-empty description, property and unit, amount rule, value mode, specificity, normalization basis, basis kind, evidence kind, collection protocol, and ordered source ids; reject collection selectors. | `eu-pef-2021-2279` |
| `validate_species_balance` | rabbit and hare mass records | Check species-separated receipt, slaughter, cutting, freezing, packing, co-product, reject, waste, and inventory records and investigate each unresolved mass-balance difference. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_utility_separation` | water and energy | Check each process separately for mains water, groundwater, surface water, grid electricity, purchased steam, purchased hot water, natural gas, diesel, and LPG and verify no carrier is merged or double counted. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_refrigerants` | pre-chilling, freezing, and frozen storage | Reconcile equipment-level refrigerant records and verify separate product make-up and chemical-specific emissions, actual blend composition, recovery, and absence of double counting. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_wastewater` | wastewater and direct water emissions | Distinguish ordinary-strength and high-strength wastewater, sewer transfer, on-site treatment, and direct discharge; verify volume-concentration calculations, solids records, and receiving compartment. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_allocation` | co-products, wastes, and shared services | Verify subdivision and direct assignment first, the documented status and destination of each output, the causal basis of unavoidable allocation, equations, reconciliation, and sensitivity disclosure. | `eu-pef-2021-2279` |
| `validate_evidence` | sources and foreground records | Accept only the three declared external source ids for PCR support, require company-specific records for amounts, reject unsubstantiated defaults or ranges, and retain every unresolved non-reference UUID in manifest review metadata. | `unsd-cpc-21134`, `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_data_quality` | completed foreground data package | Review temporal, geographic, technological, precision, completeness, consistency, transparency, and verification evidence and block lifecycle advancement until material findings are closed. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Company-specific factory-gate foreground data package for 1 kg net conforming frozen rabbit or hare meat under CPC 21134 |
| downstream_use | Projection to TianGong flow, process, lifecyclemodel, and dataset entities and use in a complete life-cycle model with separately selected upstream and downstream datasets |
| allowed_use | Product-specific LCA and environmental-footprint modelling when species, form, facility, period, technology, packaging, storage, allocation, and data quality match the study |
| excluded_use | Generic category-wide default quantities; fresh or chilled meat; edible offal; another species; retail, cooking, use, or end-of-life modelling without added datasets |
| required_metadata | PCR id; CPC code; reference UUIDs; species and share; product form; frozen release specification; net mass; facility and period; process map; refrigeration system and refrigerants; packaging; storage duration; wastewater and waste destinations; allocation; source ids |
| required_quality_disclosure | Primary-data coverage; meter and scale calibration; mass-balance reconciliation; sampling representativeness; calculation factors; allocation choices; uncertainty; missing records; unresolved non-reference UUIDs; reviewer and verification status |
| update_trigger | Change in species mix, product form, process route, facility, freezing or refrigeration technology, refrigerant, packaging, storage practice, wastewater treatment, co-product destination, allocation, reporting period, source method, or reference identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-21134` | Dataset (`dataset`) | United Nations Statistics Division, Central Product Classification Version 3.0, retained official structure CSV, subclass 21134, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Exact category title and frozen market-state scope; distinction from fresh or chilled meat and edible offal |
| `eu-jrc-sa-bref` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, SA BREF, JRC135916, DOI 10.2760/18199, https://doi.org/10.2760/18199 | Facility operations and inventory coverage for receipt, slaughter, dressing, cutting, cooling, freezing, storage, sanitation, utilities, wastewater, segregated animal outputs, wastes, and direct emissions |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Company-specific foreground data, complete life-cycle inventory, product and process specificity, allocation, transparency, data quality, calculation documentation, and verification |
