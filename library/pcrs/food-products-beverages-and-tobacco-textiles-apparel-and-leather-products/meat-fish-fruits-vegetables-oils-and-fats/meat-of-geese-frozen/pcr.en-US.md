---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-geese-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Meat of geese, frozen

## 1. Scope and Applicability

This PCR applies only to net conforming goose meat released in a frozen market state under CPC Version 3.0 subclass 21143. It covers a whole dressed goose carcass or goose-meat cuts when the declared factory-gate product remains goose meat and is frozen before release.

Fresh or chilled goose meat under CPC 21123, foie gras, goose liver and other edible poultry offal under CPC 21160, live geese sold as products, meat of another poultry species, and prepared, preserved, seasoned, or composite meat products are outside this category. Every non-meat animal output shall remain separate from the reference product and retain its measured mass, quality status, and destination.

The foreground system begins with live-goose receipt at the slaughter-facility gate and ends with factory-gate release after the attributable packaging or bulk-dispatch operation and frozen storage. Farming, feed production, rearing, and inbound transport are upstream dataset requirements. Distribution beyond the factory gate, retail, consumer storage, thawing, cooking, consumption, and product or packaging end of life are downstream and excluded.

The dataset shall report the actual frozen release specification, whole-carcass or cut form, bone and skin state, time and temperature records, packaging configuration, and storage duration. This PCR provides no default temperature, yield, utility use, chemical dose, emission factor, amount, or range.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-geese-frozen` |
| classification_refs | CPC Version 3.0 subclass 21143, exact mapping |
| covered_products | Net conforming goose meat released frozen as a whole dressed carcass or meat cut |
| excluded_products | Fresh or chilled goose meat; foie gras; goose liver or other edible offal; live geese; meat of another species; prepared, preserved, seasoned, or composite meat products |
| representative_product | Factory-gate frozen goose meat with form, bone and skin state, release specification, and net mass declared |
| production_route | Live-goose receipt; slaughter, bleeding, scalding, defeathering, and evisceration; carcass dressing and actual cutting; pre-chilling and freezing; packaging or bulk dispatch; frozen storage and release; sanitation and conditional on-site wastewater treatment |
| market_state | Frozen at factory-gate release |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Factory-gate provision of net conforming frozen goose meat |
| How much | 1 kg net product mass, excluding packaging and every separated non-meat animal output |
| How well | Within CPC 21143, conforming to the declared release specification, with product form, bone and skin state, frozen state, and quality disposition documented |
| How long or cycle | One factory-gate release; retain the attributable frozen-storage duration and reporting period |
| reference_flow_link | `reference_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming frozen goose meat, excluding packaging |
| Reference product flow | Meat of geese, frozen `db06aea8-9943-4aac-b938-0c63d670a883` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | whole-carcass or cut form; bone and skin state; frozen release specification; net mass; packaging configuration or unpackaged bulk dispatch; frozen-storage duration; facility geography; reporting period; slaughter and defeathering technology; freezing technology; refrigerant identity; on-site wastewater-treatment status; foie gras and offal separation; co-product destinations; allocation basis |

When constructing a foreground data package, every required qualifier shall appear in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent package field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Set the reference output to exactly 1 kg of net conforming frozen goose meat released at the factory gate; exclude all packaging mass. |
| `reference_product_separation` | goose meat, foie gras, edible offal, and animal by-products | Mass | kg | Measure goose meat separately from foie gras, liver, heart, gizzard, kidney, lung, blood, feathers, down, head, feet, fat, bone, trimmings, contents, and condemned material; none of those separate outputs enters the reference mass. |
| `bird_receipt_reconciliation` | live-goose receipt and holding | Mass and count | kg; bird | Reconcile received live mass and bird count with accepted transfers, holding inventory change, dead-on-arrival birds, condemned rejects, manure, and bedding for the same lot or period. |
| `net_product_mass` | released frozen goose meat and packaging | Mass | kg | Determine net goose-meat mass after tare deduction; record every packaging component separately and never include it in the 1 kg reference mass. |
| `process_mass_balance` | slaughter, dressing, cutting, freezing, and packaging | Mass | kg | Close each process mass balance using measured inputs, products, co-products, wastes, inventory change, and documented moisture or purge change without inventing a balancing quantity. |
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
| declared_starting_condition | A live goose crosses the slaughter-facility gate for receipt; supplier, origin, lot, bird count, live mass, acceptance status, and arrival time are declared |
| starting_condition_role | Purchased live-goose product input; its farming, feed, rearing, and inbound transport burdens are supplied by separate upstream datasets |
| product_classification_scope | CPC Version 3.0 subclass 21143 only: meat of geese, frozen |
| recursive_input_rule | A purchased CPC 21143 meat input is one upstream product exchange with its own dataset and is not recursively expanded as foreground slaughter or freezing inside the receiving process |
| upstream_dataset_requirement | Use representative upstream datasets for live-goose production, inbound transport, water supply, electricity, steam, hot water, fuels, refrigerants, chemicals, packaging, wastewater transfer, and waste treatment |
| disclosure | Declare product form, bone and skin state, release specification, facility and period, process technology, refrigeration system, actual refrigerants, packaging, frozen-storage duration, on-site treatment status, foie gras and offal separation, co-product and waste destinations, allocation, exclusions, and data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | foreground starting condition | Begin foreground collection when a live goose crosses the slaughter-facility gate for receipt; farming, feed production, rearing, and inbound transport remain upstream. | `unsd-cpc-21143`, `eu-jrc-sa-bref` |
| `boundary_end` | foreground ending condition | End foreground collection at factory-gate release of net conforming frozen goose meat after the attributable packaging or bulk-dispatch operation and frozen storage. | `unsd-cpc-21143`, `eu-jrc-sa-bref` |
| `boundary_required_operations` | required foreground operations | Include receipt, identity control, slaughter, bleeding, scalding, defeathering, evisceration, carcass dressing, pre-chilling, freezing, release, frozen storage, cleaning, disinfection, wastewater collection, and all attributable utilities. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `boundary_conditional_operations` | cutting, packaging, and on-site wastewater treatment | Include trimming, deboning, portioning, or cutting when performed; include each packaging component when used; include on-site wastewater treatment only when operated by the foreground facility, while always recording the actual wastewater transfer or direct discharge. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `boundary_byproduct_separation` | foie gras, edible offal, feathers, down, blood, fat, bone, and condemned outputs | Keep every non-meat animal output separate from the CPC 21143 reference product and record its measured mass, quality status, destination, and product or waste classification. | `unsd-cpc-21143`, `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `boundary_upstream_datasets` | upstream product inputs | Link live-goose production, inbound transport, purchased water, electricity, steam, hot water, fuels, refrigerants, chemicals, and packaging to separate upstream datasets appropriate to their supplier, geography, technology, and period. | `eu-pef-2021-2279` |
| `boundary_downstream_exclusion` | downstream life-cycle stages | Exclude outbound distribution beyond the factory gate, retail, consumer storage, thawing, cooking, consumption, and product or packaging end of life from this foreground system. | `unsd-cpc-21143`, `eu-pef-2021-2279` |
| `boundary_recursive_input` | purchased CPC 21143 input | If frozen goose meat is purchased as an input, record that single product input and link its documented upstream dataset; do not recursively recreate its slaughter and freezing inventory inside the receiving process. | `eu-pef-2021-2279` |
| `boundary_completeness` | foreground life-cycle inventory | Report every attributable raw-material, energy, product, co-product, waste, and direct air or water exchange identified by the process records; treat missing records as data gaps rather than zero quantities or automatic cut-offs. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `live_goose_receipt` | Live-goose receipt, identity control, and holding | required | Always include receipt, identity control, acceptance, weighing, and attributable holding before slaughter | Establishes accepted live-goose input | Per 1 kg net released frozen goose meat after normalization |
| `slaughter_defeathering_evisceration` | Slaughter, bleeding, defeathering, and evisceration | required | Always include performed stunning or killing, bleeding, scalding, defeathering, evisceration, inspection, and initial carcass dressing | Produces dressed goose carcass and segregated animal outputs | Per 1 kg net released frozen goose meat after normalization |
| `carcass_dressing_cutting` | Carcass dressing and cutting | required | Always include final carcass dressing; include trimming, deboning, portioning, or cutting when performed | Produces goose meat cuts and segregated bone, fat, and trimmings | Per 1 kg net released frozen goose meat after normalization |
| `prechilling_freezing` | Pre-chilling and freezing | required | Always include product cooling and the actual freezing operation required to reach the declared frozen release state | Produces frozen goose meat before final packing | Per 1 kg net released frozen goose meat after normalization |
| `packaging_frozen_storage` | Packaging, frozen storage, and factory-gate release | required | Always include release and frozen storage; packaging inputs are absent only for documented unpackaged bulk dispatch | Produces the net conforming CPC 21143 reference product | Exactly 1 kg net released frozen goose meat |
| `sanitation_wastewater` | Cleaning, disinfection, and wastewater management | required | Include all attributable equipment and area cleaning, disinfection, wastewater collection, and conditional on-site treatment | Cross-cutting sanitation and effluent support | Per 1 kg net released frozen goose meat after direct assignment or allocation |

### Process: Live-goose receipt, identity control, and holding (`live_goose_receipt`)

#### Inputs

##### Product flows

###### Live goose input (`live_goose_input`)

Live goose received at the slaughter facility is one animal input with supplier, origin, lot, bird count, live mass, and acceptance status retained.

- Selected flow: Live goose
- Flow property / unit: Mass / kg
- Amount rule: measured accepted live mass after dead-on-arrival and rejection adjustments and inventory reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_goose_receipt`
- Sources: `unsd-cpc-21143`, `eu-jrc-sa-bref`

###### live-goose receipt mains water (`receipt_mains_water`)

Potable mains water supplied across the facility boundary for live-goose receipt is recorded separately from direct environmental withdrawals.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: metered mains-water volume directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### live-goose receipt grid electricity (`receipt_grid_electricity`)

Electricity, medium voltage, grid mix consumed by live-goose receipt is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### live-goose receipt purchased steam (`receipt_purchased_steam`)

Purchased steam consumed by live-goose receipt is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: delivered steam energy measured or calculated from measured steam mass and retained supply conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### live-goose receipt purchased hot water (`receipt_purchased_hot_water`)

Purchased hot water consumed by live-goose receipt is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: delivered hot-water energy measured or calculated from measured flow and retained supply and return temperatures
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### live-goose receipt natural gas (`receipt_natural_gas`)

Natural gas consumed by live-goose receipt is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy or measured gas quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### live-goose receipt diesel fuel (`receipt_diesel`)

Diesel fuel consumed by live-goose receipt is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### live-goose receipt liquefied petroleum gas (`receipt_lpg`)

Liquefied petroleum gas consumed by live-goose receipt is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

##### Waste flows

##### Elementary flows

###### live-goose receipt groundwater withdrawal (`receipt_groundwater_withdrawal`)

Water, ground withdrawn directly for live-goose receipt is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### live-goose receipt surface-water withdrawal (`receipt_surface_water_withdrawal`)

Water, surface withdrawn directly for live-goose receipt is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

#### Outputs

##### Product flows

###### Accepted live goose (`accepted_live_goose_output`)

Accepted live goose transferred to slaughter preserves the reconciled bird count and live mass of the receipt process.

- Selected flow: Accepted live goose
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass reconciled with received birds, holding inventory, mortality, and rejects
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_live_goose_receipt`
- Sources: `eu-jrc-sa-bref`

##### Waste flows

###### Dead-on-arrival goose (`dead_on_arrival_goose`)

Dead-on-arrival goose leaving receipt or holding is recorded as one waste exchange with its destination retained.

- Selected flow: Dead-on-arrival goose
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Goose manure (`goose_lairage_manure`)

Goose manure leaving receipt or holding is recorded as one waste exchange with its destination retained.

- Selected flow: Goose manure
- Flow property / unit: Mass / kg
- Amount rule: measured manure mass assigned once to its documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Soiled straw bedding (`soiled_straw_bedding`)

Soiled straw bedding leaving receipt or holding is recorded as one waste exchange with its destination retained.

- Selected flow: Soiled straw bedding
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Condemned rejected goose (`receipt_rejected_goose`)

Condemned rejected goose leaving receipt or holding is recorded as one waste exchange with its destination retained.

- Selected flow: Condemned rejected goose
- Flow property / unit: Mass / kg
- Amount rule: measured rejected live mass assigned once to its documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

##### Elementary flows

###### live-goose receipt fossil carbon dioxide to air (`receipt_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving live-goose receipt is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### live-goose receipt methane to air (`receipt_methane_air`)

Methane to air from on-site combustion serving live-goose receipt is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### live-goose receipt dinitrogen monoxide to air (`receipt_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving live-goose receipt is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### live-goose receipt nitrogen monoxide to air (`receipt_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving live-goose receipt is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### live-goose receipt nitrogen dioxide to air (`receipt_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving live-goose receipt is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### live-goose receipt carbon monoxide to air (`receipt_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving live-goose receipt is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### live-goose receipt sulfur dioxide to air (`receipt_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving live-goose receipt is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### live-goose receipt particulate matter below 2.5 µm to air (`receipt_pm25_air`)

Particulate matter, <2.5 µm, to air from on-site combustion serving live-goose receipt is reported as one elementary output.

- Selected flow: Particulate matter, <2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### live-goose receipt particulate matter from 2.5 µm to 10 µm to air (`receipt_pm_coarse_air`)

Particulate matter, 2.5-10 µm, to air from on-site combustion serving live-goose receipt is reported as one elementary output.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

### Process: Slaughter, bleeding, defeathering, and evisceration (`slaughter_defeathering_evisceration`)

#### Inputs

##### Product flows

###### Accepted live goose input (`accepted_live_goose_input`)

Accepted live goose entering slaughter is the same internal animal product transferred from receipt.

- Selected flow: Accepted live goose
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass for the represented lot or period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration mains water (`slaughter_mains_water`)

Potable mains water supplied across the facility boundary for slaughter, bleeding, defeathering, and evisceration is recorded separately from direct environmental withdrawals.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: metered mains-water volume directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration grid electricity (`slaughter_grid_electricity`)

Electricity, medium voltage, grid mix consumed by slaughter, bleeding, defeathering, and evisceration is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration purchased steam (`slaughter_purchased_steam`)

Purchased steam consumed by slaughter, bleeding, defeathering, and evisceration is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: delivered steam energy measured or calculated from measured steam mass and retained supply conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration purchased hot water (`slaughter_purchased_hot_water`)

Purchased hot water consumed by slaughter, bleeding, defeathering, and evisceration is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: delivered hot-water energy measured or calculated from measured flow and retained supply and return temperatures
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration natural gas (`slaughter_natural_gas`)

Natural gas consumed by slaughter, bleeding, defeathering, and evisceration is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy or measured gas quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration diesel fuel (`slaughter_diesel`)

Diesel fuel consumed by slaughter, bleeding, defeathering, and evisceration is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration liquefied petroleum gas (`slaughter_lpg`)

Liquefied petroleum gas consumed by slaughter, bleeding, defeathering, and evisceration is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

##### Waste flows

##### Elementary flows

###### slaughter, bleeding, defeathering, and evisceration groundwater withdrawal (`slaughter_groundwater_withdrawal`)

Water, ground withdrawn directly for slaughter, bleeding, defeathering, and evisceration is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration surface-water withdrawal (`slaughter_surface_water_withdrawal`)

Water, surface withdrawn directly for slaughter, bleeding, defeathering, and evisceration is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

#### Outputs

##### Product flows

###### Dressed goose carcass (`dressed_goose_carcass_output`)

Dressed goose carcass leaving slaughter or dressing is recorded as one segregated product output with quality status and destination retained.

- Selected flow: Dressed goose carcass
- Flow property / unit: Mass / kg
- Amount rule: measured carcass mass after bleeding, defeathering, evisceration, inspection, and dressing
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Goose blood (`goose_blood_coproduct`)

Goose blood leaving slaughter or dressing is recorded as one segregated product output with quality status and destination retained.

- Selected flow: Goose blood
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass assigned to its documented product destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Goose feathers (`goose_feathers_coproduct`)

Goose feathers leaving slaughter or dressing is recorded as one segregated product output with quality status and destination retained.

- Selected flow: Goose feathers
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass assigned to its documented product destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Goose down (`goose_down_coproduct`)

Goose down leaving slaughter or dressing is recorded as one segregated product output with quality status and destination retained.

- Selected flow: Goose down
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass assigned to its documented product destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Goose head (`goose_head_coproduct`)

Goose head leaving slaughter or dressing is recorded as one segregated product output with quality status and destination retained.

- Selected flow: Goose head
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass assigned to its documented product destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Goose feet (`goose_feet_coproduct`)

Goose feet leaving slaughter or dressing is recorded as one segregated product output with quality status and destination retained.

- Selected flow: Goose feet
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass assigned to its documented product destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Goose liver (`goose_liver_coproduct`)

Goose liver leaving evisceration is recorded as one non-reference output; foie gras and edible offal are not merged with CPC 21143 goose meat.

- Selected flow: Goose liver
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass assigned to its documented non-reference product destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Goose heart (`goose_heart_coproduct`)

Goose heart leaving slaughter or dressing is recorded as one segregated product output with quality status and destination retained.

- Selected flow: Goose heart
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass assigned to its documented non-reference product destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Goose gizzard (`goose_gizzard_coproduct`)

Goose gizzard leaving slaughter or dressing is recorded as one segregated product output with quality status and destination retained.

- Selected flow: Goose gizzard
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass assigned to its documented non-reference product destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Goose kidney (`goose_kidney_coproduct`)

Goose kidney leaving slaughter or dressing is recorded as one segregated product output with quality status and destination retained.

- Selected flow: Goose kidney
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass assigned to its documented non-reference product destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Goose lung (`goose_lung_coproduct`)

Goose lung leaving slaughter or dressing is recorded as one segregated product output with quality status and destination retained.

- Selected flow: Goose lung
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass assigned to its documented non-reference product destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Goose abdominal fat (`goose_abdominal_fat_coproduct`)

Goose abdominal fat leaving slaughter or dressing is recorded as one segregated product output with quality status and destination retained.

- Selected flow: Goose abdominal fat
- Flow property / unit: Mass / kg
- Amount rule: measured segregated mass assigned to its documented product destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_byproduct_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

##### Waste flows

###### Goose stomach contents (`goose_stomach_contents`)

Goose stomach contents leaving slaughter or dressing is recorded as one waste exchange and is not merged with another animal output.

- Selected flow: Goose stomach contents
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Goose intestinal contents (`goose_intestinal_contents`)

Goose intestinal contents leaving slaughter or dressing is recorded as one waste exchange and is not merged with another animal output.

- Selected flow: Goose intestinal contents
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Condemned goose carcass (`condemned_goose_carcass`)

Condemned goose carcass leaving slaughter or dressing is recorded as one waste exchange and is not merged with another animal output.

- Selected flow: Condemned goose carcass
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Rejected goose blood (`rejected_goose_blood`)

Rejected goose blood leaving slaughter or dressing is recorded as one waste exchange and is not merged with another animal output.

- Selected flow: Rejected goose blood
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Rejected goose feathers (`rejected_goose_feathers`)

Rejected goose feathers leaving slaughter or dressing is recorded as one waste exchange and is not merged with another animal output.

- Selected flow: Rejected goose feathers
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Rejected goose liver (`rejected_goose_liver`)

Rejected goose liver leaving slaughter or dressing is recorded as one waste exchange and is not merged with another animal output.

- Selected flow: Rejected goose liver
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Rejected goose heart (`rejected_goose_heart`)

Rejected goose heart leaving slaughter or dressing is recorded as one waste exchange and is not merged with another animal output.

- Selected flow: Rejected goose heart
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Rejected goose gizzard (`rejected_goose_gizzard`)

Rejected goose gizzard leaving slaughter or dressing is recorded as one waste exchange and is not merged with another animal output.

- Selected flow: Rejected goose gizzard
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Rejected goose kidney (`rejected_goose_kidney`)

Rejected goose kidney leaving slaughter or dressing is recorded as one waste exchange and is not merged with another animal output.

- Selected flow: Rejected goose kidney
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Rejected goose lung (`rejected_goose_lung`)

Rejected goose lung leaving slaughter or dressing is recorded as one waste exchange and is not merged with another animal output.

- Selected flow: Rejected goose lung
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

##### Elementary flows

###### slaughter, bleeding, defeathering, and evisceration fossil carbon dioxide to air (`slaughter_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving slaughter, bleeding, defeathering, and evisceration is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration methane to air (`slaughter_methane_air`)

Methane to air from on-site combustion serving slaughter, bleeding, defeathering, and evisceration is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration dinitrogen monoxide to air (`slaughter_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving slaughter, bleeding, defeathering, and evisceration is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration nitrogen monoxide to air (`slaughter_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving slaughter, bleeding, defeathering, and evisceration is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration nitrogen dioxide to air (`slaughter_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving slaughter, bleeding, defeathering, and evisceration is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration carbon monoxide to air (`slaughter_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving slaughter, bleeding, defeathering, and evisceration is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration sulfur dioxide to air (`slaughter_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving slaughter, bleeding, defeathering, and evisceration is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration particulate matter below 2.5 µm to air (`slaughter_pm25_air`)

Particulate matter, <2.5 µm, to air from on-site combustion serving slaughter, bleeding, defeathering, and evisceration is reported as one elementary output.

- Selected flow: Particulate matter, <2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### slaughter, bleeding, defeathering, and evisceration particulate matter from 2.5 µm to 10 µm to air (`slaughter_pm_coarse_air`)

Particulate matter, 2.5-10 µm, to air from on-site combustion serving slaughter, bleeding, defeathering, and evisceration is reported as one elementary output.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

### Process: Carcass dressing and cutting (`carcass_dressing_cutting`)

#### Inputs

##### Product flows

###### Dressed goose carcass input (`dressed_goose_carcass_input`)

Dressed goose carcass entering dressing or cutting is the same internal product produced by slaughter and evisceration.

- Selected flow: Dressed goose carcass
- Flow property / unit: Mass / kg
- Amount rule: measured carcass mass entering trimming, deboning, or cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting mains water (`cutting_mains_water`)

Potable mains water supplied across the facility boundary for carcass dressing and cutting is recorded separately from direct environmental withdrawals.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: metered mains-water volume directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting grid electricity (`cutting_grid_electricity`)

Electricity, medium voltage, grid mix consumed by carcass dressing and cutting is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting purchased steam (`cutting_purchased_steam`)

Purchased steam consumed by carcass dressing and cutting is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: delivered steam energy measured or calculated from measured steam mass and retained supply conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting purchased hot water (`cutting_purchased_hot_water`)

Purchased hot water consumed by carcass dressing and cutting is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: delivered hot-water energy measured or calculated from measured flow and retained supply and return temperatures
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting natural gas (`cutting_natural_gas`)

Natural gas consumed by carcass dressing and cutting is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy or measured gas quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting diesel fuel (`cutting_diesel`)

Diesel fuel consumed by carcass dressing and cutting is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting liquefied petroleum gas (`cutting_lpg`)

Liquefied petroleum gas consumed by carcass dressing and cutting is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

##### Waste flows

##### Elementary flows

###### carcass dressing and cutting groundwater withdrawal (`cutting_groundwater_withdrawal`)

Water, ground withdrawn directly for carcass dressing and cutting is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting surface-water withdrawal (`cutting_surface_water_withdrawal`)

Water, surface withdrawn directly for carcass dressing and cutting is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

#### Outputs

##### Product flows

###### Prepared whole goose carcass (`prepared_whole_goose_carcass_output`)

Prepared whole goose carcass leaving final dressing is recorded as one product output when released without cutting.

- Selected flow: Prepared whole goose carcass
- Flow property / unit: Mass / kg
- Amount rule: measured whole-carcass mass transferred to the cold process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Goose meat cut (`goose_meat_cut_output`)

Goose meat cut leaving carcass dressing or cutting is recorded as one product output with its destination retained.

- Selected flow: Goose meat cut
- Flow property / unit: Mass / kg
- Amount rule: measured meat mass transferred to the cold process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Goose bone (`goose_bone_coproduct`)

Goose bone leaving carcass dressing or cutting is recorded as one product output with its destination retained.

- Selected flow: Goose bone
- Flow property / unit: Mass / kg
- Amount rule: measured segregated bone mass assigned to its documented destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Goose cutting fat (`goose_cutting_fat_coproduct`)

Goose cutting fat leaving carcass dressing or cutting is recorded as one product output with its destination retained.

- Selected flow: Goose cutting fat
- Flow property / unit: Mass / kg
- Amount rule: measured segregated fat mass assigned to its documented destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Goose meat trimming (`goose_meat_trimming_coproduct`)

Goose meat trimming leaving carcass dressing or cutting is recorded as one product output with its destination retained.

- Selected flow: Goose meat trimming
- Flow property / unit: Mass / kg
- Amount rule: measured segregated trimming mass assigned to its documented destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_mass_balance`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

##### Waste flows

###### Rejected goose meat (`rejected_goose_meat_waste`)

Rejected goose meat diverted during dressing or cutting is recorded as one waste exchange.

- Selected flow: Rejected goose meat
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

##### Elementary flows

###### carcass dressing and cutting fossil carbon dioxide to air (`cutting_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving carcass dressing and cutting is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting methane to air (`cutting_methane_air`)

Methane to air from on-site combustion serving carcass dressing and cutting is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting dinitrogen monoxide to air (`cutting_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving carcass dressing and cutting is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting nitrogen monoxide to air (`cutting_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving carcass dressing and cutting is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting nitrogen dioxide to air (`cutting_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving carcass dressing and cutting is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting carbon monoxide to air (`cutting_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving carcass dressing and cutting is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting sulfur dioxide to air (`cutting_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving carcass dressing and cutting is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting particulate matter below 2.5 µm to air (`cutting_pm25_air`)

Particulate matter, <2.5 µm, to air from on-site combustion serving carcass dressing and cutting is reported as one elementary output.

- Selected flow: Particulate matter, <2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### carcass dressing and cutting particulate matter from 2.5 µm to 10 µm to air (`cutting_pm_coarse_air`)

Particulate matter, 2.5-10 µm, to air from on-site combustion serving carcass dressing and cutting is reported as one elementary output.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

### Process: Pre-chilling and freezing (`prechilling_freezing`)

#### Inputs

##### Product flows

###### Prepared whole goose carcass input (`prepared_whole_goose_carcass_input`)

Prepared whole goose carcass entering pre-chilling and freezing is the same internal product from final carcass dressing.

- Selected flow: Prepared whole goose carcass
- Flow property / unit: Mass / kg
- Amount rule: measured whole-carcass transfer mass entering the cold process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_transfer`
- Sources: `eu-jrc-sa-bref`

###### Goose meat cut input (`goose_meat_cut_input`)

Goose meat cut entering pre-chilling and freezing is the same internal product from carcass dressing or cutting.

- Selected flow: Goose meat cut
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass entering the cold process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_transfer`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing mains water (`freezing_mains_water`)

Potable mains water supplied across the facility boundary for pre-chilling and freezing is recorded separately from direct environmental withdrawals.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: metered mains-water volume directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing grid electricity (`freezing_grid_electricity`)

Electricity, medium voltage, grid mix consumed by pre-chilling and freezing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing purchased steam (`freezing_purchased_steam`)

Purchased steam consumed by pre-chilling and freezing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: delivered steam energy measured or calculated from measured steam mass and retained supply conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing purchased hot water (`freezing_purchased_hot_water`)

Purchased hot water consumed by pre-chilling and freezing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: delivered hot-water energy measured or calculated from measured flow and retained supply and return temperatures
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing natural gas (`freezing_natural_gas`)

Natural gas consumed by pre-chilling and freezing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy or measured gas quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing diesel fuel (`freezing_diesel`)

Diesel fuel consumed by pre-chilling and freezing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing liquefied petroleum gas (`freezing_lpg`)

Liquefied petroleum gas consumed by pre-chilling and freezing is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing R-717 refrigerant make-up (`freezing_r717_makeup`)

Ammonia refrigerant (R-717) charged as make-up to refrigeration equipment serving pre-chilling and freezing is recorded as one product input.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from service and inventory records; total system charge is not treated as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing HFC-134a refrigerant make-up (`freezing_hfc134a_makeup`)

1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a) charged as make-up to refrigeration equipment serving pre-chilling and freezing is recorded as one product input.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a)
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from service and inventory records; total system charge is not treated as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing R-404A refrigerant make-up (`freezing_r404a_makeup`)

R-404A refrigerant charged as make-up to refrigeration equipment serving pre-chilling and freezing is recorded as one product input.

- Selected flow: R-404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from service and inventory records; total system charge is not treated as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

##### Waste flows

##### Elementary flows

###### pre-chilling and freezing groundwater withdrawal (`freezing_groundwater_withdrawal`)

Water, ground withdrawn directly for pre-chilling and freezing is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing surface-water withdrawal (`freezing_surface_water_withdrawal`)

Water, surface withdrawn directly for pre-chilling and freezing is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

#### Outputs

##### Product flows

###### Frozen goose meat (`frozen_goose_meat_output`)

Frozen goose meat leaving the cold process is one internal product with lot, product form, time, temperature, and mass records retained.

- Selected flow: Frozen goose meat
- Flow property / unit: Mass / kg
- Amount rule: measured frozen meat mass transferred to final packing or bulk dispatch
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_transfer`
- Sources: `eu-jrc-sa-bref`

##### Waste flows

###### Off-specification frozen goose meat (`off_spec_frozen_goose_meat`)

Off-specification frozen goose meat diverted from the cold process is one waste exchange.

- Selected flow: Off-specification frozen goose meat
- Flow property / unit: Mass / kg
- Amount rule: measured diverted mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

##### Elementary flows

###### pre-chilling and freezing fossil carbon dioxide to air (`freezing_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing methane to air (`freezing_methane_air`)

Methane to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing dinitrogen monoxide to air (`freezing_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing nitrogen monoxide to air (`freezing_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing nitrogen dioxide to air (`freezing_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing carbon monoxide to air (`freezing_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing sulfur dioxide to air (`freezing_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing particulate matter below 2.5 µm to air (`freezing_pm25_air`)

Particulate matter, <2.5 µm, to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Particulate matter, <2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing particulate matter from 2.5 µm to 10 µm to air (`freezing_pm_coarse_air`)

Particulate matter, 2.5-10 µm, to air from on-site combustion serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing ammonia refrigerant to air (`freezing_ammonia_air`)

Ammonia to air released from refrigeration equipment serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing HFC-134a to air (`freezing_hfc134a_air`)

1,1,1,2-Tetrafluoroethane to air released from refrigeration equipment serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing HFC-125 to air (`freezing_hfc125_air`)

Pentafluoroethane to air released from refrigeration equipment serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: Pentafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### pre-chilling and freezing HFC-143a to air (`freezing_hfc143a_air`)

1,1,1-Trifluoroethane to air released from refrigeration equipment serving pre-chilling and freezing is reported as one elementary output.

- Selected flow: 1,1,1-Trifluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

### Process: Packaging, frozen storage, and factory-gate release (`packaging_frozen_storage`)

#### Inputs

##### Product flows

###### Frozen goose meat input (`frozen_goose_meat_input`)

Frozen goose meat entering final packing or bulk dispatch is the same internal product produced by freezing.

- Selected flow: Frozen goose meat
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass entering packaging and frozen storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`

###### Low-density polyethylene film input (`ldpe_film_input`)

Low-density polyethylene film used in the documented packaging configuration is recorded as one material input.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass reconciled with packed units, remaining stock, and separately recorded scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Polyamide barrier film input (`polyamide_film_input`)

Polyamide barrier film used in the documented packaging configuration is recorded as one material input.

- Selected flow: Polyamide barrier film
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass reconciled with packed units, remaining stock, and separately recorded scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Polyethylene terephthalate tray input (`pet_tray_input`)

Polyethylene terephthalate tray used in the documented packaging configuration is recorded as one material input.

- Selected flow: Polyethylene terephthalate tray
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass reconciled with packed units, remaining stock, and separately recorded scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Polypropylene tray input (`pp_tray_input`)

Polypropylene tray used in the documented packaging configuration is recorded as one material input.

- Selected flow: Polypropylene tray
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass reconciled with packed units, remaining stock, and separately recorded scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Expanded polystyrene tray input (`eps_tray_input`)

Expanded polystyrene tray used in the documented packaging configuration is recorded as one material input.

- Selected flow: Expanded polystyrene tray
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass reconciled with packed units, remaining stock, and separately recorded scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Paperboard carton input (`paperboard_carton_input`)

Paperboard carton used in the documented packaging configuration is recorded as one material input.

- Selected flow: Paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass reconciled with packed units, remaining stock, and separately recorded scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Corrugated board box input (`corrugated_box_input`)

Corrugated board box used in the documented packaging configuration is recorded as one material input.

- Selected flow: Corrugated board box
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass reconciled with packed units, remaining stock, and separately recorded scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Aluminium foil input (`aluminium_foil_input`)

Aluminium foil used in the documented packaging configuration is recorded as one material input.

- Selected flow: Aluminium foil
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass reconciled with packed units, remaining stock, and separately recorded scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Wooden pallet input (`wooden_pallet_input`)

Wooden pallet used in the documented packaging configuration is recorded as one material input.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass reconciled with packed units, remaining stock, and separately recorded scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Low-density polyethylene stretch film input (`ldpe_stretch_film_input`)

Low-density polyethylene stretch film used in the documented packaging configuration is recorded as one material input.

- Selected flow: Low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: measured issued mass reconciled with packed units, remaining stock, and separately recorded scrap
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### packaging, frozen storage, and release mains water (`packaging_storage_mains_water`)

Potable mains water supplied across the facility boundary for packaging, frozen storage, and release is recorded separately from direct environmental withdrawals.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: metered mains-water volume directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release grid electricity (`packaging_storage_grid_electricity`)

Electricity, medium voltage, grid mix consumed by packaging, frozen storage, and release is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release purchased steam (`packaging_storage_purchased_steam`)

Purchased steam consumed by packaging, frozen storage, and release is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: delivered steam energy measured or calculated from measured steam mass and retained supply conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release purchased hot water (`packaging_storage_purchased_hot_water`)

Purchased hot water consumed by packaging, frozen storage, and release is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: delivered hot-water energy measured or calculated from measured flow and retained supply and return temperatures
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release natural gas (`packaging_storage_natural_gas`)

Natural gas consumed by packaging, frozen storage, and release is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy or measured gas quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release diesel fuel (`packaging_storage_diesel`)

Diesel fuel consumed by packaging, frozen storage, and release is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release liquefied petroleum gas (`packaging_storage_lpg`)

Liquefied petroleum gas consumed by packaging, frozen storage, and release is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release R-717 refrigerant make-up (`packaging_storage_r717_makeup`)

Ammonia refrigerant (R-717) charged as make-up to refrigeration equipment serving packaging, frozen storage, and release is recorded as one product input.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from service and inventory records; total system charge is not treated as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release HFC-134a refrigerant make-up (`packaging_storage_hfc134a_makeup`)

1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a) charged as make-up to refrigeration equipment serving packaging, frozen storage, and release is recorded as one product input.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (HFC-134a)
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from service and inventory records; total system charge is not treated as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release R-404A refrigerant make-up (`packaging_storage_r404a_makeup`)

R-404A refrigerant charged as make-up to refrigeration equipment serving packaging, frozen storage, and release is recorded as one product input.

- Selected flow: R-404A refrigerant
- Flow property / unit: Mass / kg
- Amount rule: measured recharge mass from service and inventory records; total system charge is not treated as make-up
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

##### Waste flows

##### Elementary flows

###### packaging, frozen storage, and release groundwater withdrawal (`packaging_storage_groundwater_withdrawal`)

Water, ground withdrawn directly for packaging, frozen storage, and release is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release surface-water withdrawal (`packaging_storage_surface_water_withdrawal`)

Water, surface withdrawn directly for packaging, frozen storage, and release is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

#### Outputs

##### Product flows

###### Reference frozen goose meat output (`reference_product_output`)

Meat of geese, frozen is the CPC 21143 reference product released at the factory gate after the attributable packaging or bulk-dispatch operation and frozen storage.

- Selected flow: Meat of geese, frozen `db06aea8-9943-4aac-b938-0c63d670a883`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- Amount rule: exactly 1 kg net conforming frozen goose meat, excluding packaging mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_packaging_release`
- Sources: `unsd-cpc-21143`

##### Waste flows

###### Rejected packaged frozen goose meat (`rejected_packaged_goose_meat`)

Rejected packaged frozen goose meat diverted before factory-gate release is one waste exchange.

- Selected flow: Rejected packaged frozen goose meat
- Flow property / unit: Mass / kg
- Amount rule: measured rejected net meat mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Waste low-density polyethylene film (`ldpe_film_waste`)

Waste low-density polyethylene film generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Waste polyamide barrier film (`polyamide_film_waste`)

Waste polyamide barrier film generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste polyamide barrier film
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Waste polyethylene terephthalate tray (`pet_tray_waste`)

Waste polyethylene terephthalate tray generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste polyethylene terephthalate tray
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Waste polypropylene tray (`pp_tray_waste`)

Waste polypropylene tray generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste polypropylene tray
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Waste expanded polystyrene tray (`eps_tray_waste`)

Waste expanded polystyrene tray generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste expanded polystyrene tray
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Waste paperboard carton (`paperboard_carton_waste`)

Waste paperboard carton generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Waste corrugated board box (`corrugated_box_waste`)

Waste corrugated board box generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste corrugated board box
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Waste aluminium foil (`aluminium_foil_waste`)

Waste aluminium foil generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste aluminium foil
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Waste wooden pallet (`wooden_pallet_waste`)

Waste wooden pallet generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

###### Waste low-density polyethylene stretch film (`ldpe_stretch_film_waste`)

Waste low-density polyethylene stretch film generated during packing is recorded as one single-material waste exchange.

- Selected flow: Waste low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: measured scrap mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`, `eu-pef-2021-2279`

##### Elementary flows

###### packaging, frozen storage, and release fossil carbon dioxide to air (`packaging_storage_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving packaging, frozen storage, and release is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release methane to air (`packaging_storage_methane_air`)

Methane to air from on-site combustion serving packaging, frozen storage, and release is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release dinitrogen monoxide to air (`packaging_storage_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving packaging, frozen storage, and release is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release nitrogen monoxide to air (`packaging_storage_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving packaging, frozen storage, and release is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release nitrogen dioxide to air (`packaging_storage_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving packaging, frozen storage, and release is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release carbon monoxide to air (`packaging_storage_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving packaging, frozen storage, and release is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release sulfur dioxide to air (`packaging_storage_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving packaging, frozen storage, and release is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release particulate matter below 2.5 µm to air (`packaging_storage_pm25_air`)

Particulate matter, <2.5 µm, to air from on-site combustion serving packaging, frozen storage, and release is reported as one elementary output.

- Selected flow: Particulate matter, <2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release particulate matter from 2.5 µm to 10 µm to air (`packaging_storage_pm_coarse_air`)

Particulate matter, 2.5-10 µm, to air from on-site combustion serving packaging, frozen storage, and release is reported as one elementary output.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release ammonia refrigerant to air (`packaging_storage_ammonia_air`)

Ammonia to air released from refrigeration equipment serving packaging, frozen storage, and release is reported as one elementary output.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release HFC-134a to air (`packaging_storage_hfc134a_air`)

1,1,1,2-Tetrafluoroethane to air released from refrigeration equipment serving packaging, frozen storage, and release is reported as one elementary output.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release HFC-125 to air (`packaging_storage_hfc125_air`)

Pentafluoroethane to air released from refrigeration equipment serving packaging, frozen storage, and release is reported as one elementary output.

- Selected flow: Pentafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_records`
- Sources: `eu-jrc-sa-bref`

###### packaging, frozen storage, and release HFC-143a to air (`packaging_storage_hfc143a_air`)

1,1,1-Trifluoroethane to air released from refrigeration equipment serving packaging, frozen storage, and release is reported as one elementary output.

- Selected flow: 1,1,1-Trifluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: calculated from opening charge, measured additions, closing charge, measured recovery, incident records, and verified blend composition where relevant
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_chemical_records`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management mains water (`sanitation_mains_water`)

Potable mains water supplied across the facility boundary for cleaning, disinfection, and wastewater management is recorded separately from direct environmental withdrawals.

- Selected flow: Potable mains water
- Flow property / unit: Volume / m3
- Amount rule: metered mains-water volume directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management grid electricity (`sanitation_grid_electricity`)

Electricity, medium voltage, grid mix consumed by cleaning, disinfection, and wastewater management is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Electricity, medium voltage, grid mix
- Flow property / unit: Energy / kWh
- Amount rule: metered electricity consumption directly assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management purchased steam (`sanitation_purchased_steam`)

Purchased steam consumed by cleaning, disinfection, and wastewater management is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: delivered steam energy measured or calculated from measured steam mass and retained supply conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management purchased hot water (`sanitation_purchased_hot_water`)

Purchased hot water consumed by cleaning, disinfection, and wastewater management is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: delivered hot-water energy measured or calculated from measured flow and retained supply and return temperatures
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management natural gas (`sanitation_natural_gas`)

Natural gas consumed by cleaning, disinfection, and wastewater management is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: metered energy or measured gas quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management diesel fuel (`sanitation_diesel`)

Diesel fuel consumed by cleaning, disinfection, and wastewater management is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management liquefied petroleum gas (`sanitation_lpg`)

Liquefied petroleum gas consumed by cleaning, disinfection, and wastewater management is recorded as one energy exchange and kept separate from every other utility.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: measured fuel quantity converted with a documented supplier heating value
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-jrc-sa-bref`

##### Waste flows

##### Elementary flows

###### cleaning, disinfection, and wastewater management groundwater withdrawal (`sanitation_groundwater_withdrawal`)

Water, ground withdrawn directly for cleaning, disinfection, and wastewater management is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, ground
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management surface-water withdrawal (`sanitation_surface_water_withdrawal`)

Water, surface withdrawn directly for cleaning, disinfection, and wastewater management is one elementary input and is not duplicated as mains-water supply.

- Selected flow: Water, surface
- Flow property / unit: Volume / m3
- Amount rule: metered direct withdrawal assigned to this process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_records`
- Sources: `eu-jrc-sa-bref`

#### Outputs

##### Product flows

##### Waste flows

###### Ordinary-strength goose-slaughter wastewater (`ordinary_strength_wastewater`)

Ordinary-strength goose-slaughter wastewater leaving wastewater collection or conditional on-site treatment is recorded as one waste exchange with destination retained.

- Selected flow: Ordinary-strength goose-slaughter wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered stream volume assigned once to its documented sewer or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

###### High-strength goose-slaughter wastewater (`high_strength_wastewater`)

High-strength goose-slaughter wastewater leaving wastewater collection or conditional on-site treatment is recorded as one waste exchange with destination retained.

- Selected flow: High-strength goose-slaughter wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered stream volume assigned once to its documented sewer or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

###### Wastewater-treatment sludge (`wastewater_treatment_sludge`)

Wastewater-treatment sludge leaving wastewater collection or conditional on-site treatment is recorded as one waste exchange with destination retained.

- Selected flow: Wastewater-treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

###### Goose-slaughter screen residue (`slaughterhouse_screen_residue`)

Goose-slaughter screen residue leaving wastewater collection or conditional on-site treatment is recorded as one waste exchange with destination retained.

- Selected flow: Goose-slaughter screen residue
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

###### Waste goose fat from grease separation (`goose_grease_separation_waste`)

Waste goose fat from grease separation leaving wastewater collection or conditional on-site treatment is recorded as one waste exchange with destination retained.

- Selected flow: Waste goose fat from grease separation
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass assigned once to its documented recovery or treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_records`
- Sources: `eu-jrc-sa-bref`

##### Elementary flows

###### cleaning, disinfection, and wastewater management fossil carbon dioxide to air (`sanitation_fossil_co2_air`)

Carbon dioxide, fossil, to air from on-site combustion serving cleaning, disinfection, and wastewater management is reported as one elementary output.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management methane to air (`sanitation_methane_air`)

Methane to air from on-site combustion serving cleaning, disinfection, and wastewater management is reported as one elementary output.

- Selected flow: Methane to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management dinitrogen monoxide to air (`sanitation_nitrous_oxide_air`)

Dinitrogen monoxide to air from on-site combustion serving cleaning, disinfection, and wastewater management is reported as one elementary output.

- Selected flow: Dinitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management nitrogen monoxide to air (`sanitation_nitrogen_monoxide_air`)

Nitrogen monoxide to air from on-site combustion serving cleaning, disinfection, and wastewater management is reported as one elementary output.

- Selected flow: Nitrogen monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management nitrogen dioxide to air (`sanitation_nitrogen_dioxide_air`)

Nitrogen dioxide to air from on-site combustion serving cleaning, disinfection, and wastewater management is reported as one elementary output.

- Selected flow: Nitrogen dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management carbon monoxide to air (`sanitation_carbon_monoxide_air`)

Carbon monoxide to air from on-site combustion serving cleaning, disinfection, and wastewater management is reported as one elementary output.

- Selected flow: Carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management sulfur dioxide to air (`sanitation_sulfur_dioxide_air`)

Sulfur dioxide to air from on-site combustion serving cleaning, disinfection, and wastewater management is reported as one elementary output.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management particulate matter below 2.5 µm to air (`sanitation_pm25_air`)

Particulate matter, <2.5 µm, to air from on-site combustion serving cleaning, disinfection, and wastewater management is reported as one elementary output.

- Selected flow: Particulate matter, <2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `eu-jrc-sa-bref`

###### cleaning, disinfection, and wastewater management particulate matter from 2.5 µm to 10 µm to air (`sanitation_pm_coarse_air`)

Particulate matter, 2.5-10 µm, to air from on-site combustion serving cleaning, disinfection, and wastewater management is reported as one elementary output.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: directly measured mass or substance mass calculated from separately collected fuel records and a retained verified factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
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
- Normalization basis: per 1 kg net conforming frozen goose meat released at the factory gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_records`
- Sources: `eu-jrc-sa-bref`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | multi-output foreground processes | First avoid allocation through process subdivision and direct assignment of utilities, chemicals, packaging, wastes, and emissions to the operation that causes them. | `eu-pef-2021-2279` |
| `allocation_output_status` | blood, feathers, down, head, feet, organs, fat, bones, and trimmings | Determine the product, co-product, or waste status of each segregated output from its documented quality, destination, and contractual disposition; do not infer a useful co-product solely from its physical presence. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `allocation_foie_gras_separation` | goose liver and foie gras outputs | Treat goose liver or foie gras as a separate non-reference output with its own measured mass and destination; do not include its mass in frozen goose meat or hide its co-product treatment inside the reference flow. | `unsd-cpc-21143`, `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `allocation_physical_relation` | unavoidable co-product allocation | Where subdivision cannot avoid allocation, use a documented underlying physical relationship that reflects how inputs and outputs change; do not select mass merely because mass data are available. | `eu-pef-2021-2279` |
| `allocation_economic_relation` | co-products without a defensible physical relation | Use an economic relationship only when a defensible physical relationship cannot be established, and retain the price source, averaging period, currency basis, market, and sensitivity disclosure. | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | waste outputs and treatment | Assign collection, handling, and treatment burdens to each documented waste destination once; apply no avoided-burden credit unless the selected study method explicitly requires it and the assumption is disclosed. | `eu-pef-2021-2279` |
| `allocation_shared_services` | shared water, energy, refrigeration, sanitation, and wastewater services | Prefer submetering or operational logs; otherwise use a documented causal driver such as operating time, cleaned area, thermal load, wastewater volume, or product mass only where that driver represents consumption. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `allocation_disclosure` | reported dataset | Report the allocation hierarchy, equations, drivers, values, co-product destinations, unresolved data gaps, and sensitivity results so that no measured input or output is counted twice or omitted. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_goose_receipt` | `live_goose_receipt` | live geese, accepted birds, arrival losses, rejected birds, and holding balance | supplier, receipt, weighbridge, holding, and mortality records | supplier; origin; lot; arrival time; bird count; gross mass; tare; accepted mass; rejected mass; mortality; opening and closing holding inventory | weigh each lot with calibrated equipment and reconcile acceptance and holding records | kg; bird | each received lot | complete reporting period including opening and closing holding inventory | all receipt and holding areas serving the represented facility | sum by lot, then normalize once to net released reference mass | calibration records, signed receipts, rejection records, mortality logs, and inventory reconciliation |
| `cp_slaughter_byproduct_balance` | `slaughter_defeathering_evisceration` | accepted geese, dressed carcasses, blood, feathers, down, head, feet, organs, fat, stomach contents, intestinal contents, and condemned outputs | batch production, inspection, weighing, and destination records | lot; accepted live mass; bird count; carcass mass; output identity; output mass; quality status; destination; opening and closing inventory; purge or moisture change | weigh segregated outputs and close one lot or period mass balance without a fabricated balancing item | kg; bird | each slaughter lot or production shift | complete reporting period | all slaughter, bleeding, scalding, defeathering, evisceration, inspection, and initial dressing lines in scope | sum measured masses by output identity and retain every documented destination before normalization | scale calibration, batch sheets, veterinary or quality disposition, destination tickets, and signed mass balance |
| `cp_cutting_mass_balance` | `carcass_dressing_cutting` | dressed carcass, prepared whole carcass, meat cuts, bones, cutting fat, trimmings, and rejected meat | dressing or cutting batch, weighing, yield, rejection, and inventory records | lot; carcass input; prepared whole-carcass output; cut output; bone; fat; trimming; reject; opening and closing inventory; purge | weigh each segregated stream and reconcile measured inputs, outputs, inventory, and documented purge | kg | each dressing or cutting lot or shift | complete reporting period | all final dressing, trimming, deboning, portioning, and cutting operations in scope | sum by output identity before normalization | calibrated scale records, cutting sheets, yield reconciliation, and disposition records |
| `cp_freezing_transfer` | `prechilling_freezing` | whole carcass or meat cuts entering cooling, frozen goose meat output, and off-specification frozen meat | cold-process batch, transfer, temperature, time, mass, and rejection records | lot; product form; input mass; output mass; reject mass; cooling start and end; freezing start and end; measured product temperature; opening and closing inventory | link calibrated mass records to retained time and temperature records for each represented cold-process lot | kg; degree Celsius; hour | each freezing lot | complete reporting period including cold-store inventory change | all pre-chilling and freezing equipment in scope | sum mass by product form; retain actual time and temperature descriptors without imposing a category default | calibrated scales and sensors, batch logs, alarm logs, and inventory reconciliation |
| `cp_packaging_release` | `packaging_frozen_storage` | frozen goose meat transfer, each packaging component, reference output, and packaged rejects | packing order, material issue, tare, release, dispatch, and frozen-store records | lot; product form; bone and skin state; input mass; package component identity; component mass; package count; tare; net released mass; reject mass; storage time; release status | measure net product after tare deduction, record every component separately, and reconcile packing and frozen-store inventory | kg; package; hour | each packing and release lot | complete reporting period including opening and closing frozen inventory | all final packing, bulk dispatch, frozen storage, and release points in scope | sum component and product masses separately; normalize reference output to exactly 1 kg net goose meat | material issue records, packaging specifications, scale calibration, release certificates, dispatch records, and stock reconciliation |
| `cp_water_records` | `all_foreground_processes` | mains water, groundwater withdrawal, and surface-water withdrawal by process | meter, invoice, withdrawal, and submeter records | source identity; meter identity; opening and closing reading; volume; process coverage; reading time; allocation driver; calibration status | read each source meter and submeter, prevent supply-withdrawal duplication, and assign shared volume with a documented causal driver | m3 | at least each reporting interval and whenever process assignment changes | complete reporting period with opening and closing readings | all meters and withdrawals serving the foreground boundary | difference readings by source and process, subtract documented non-production use, then normalize once | meter calibration, invoices, permits, logs, and allocation workbook |
| `cp_utility_records` | `all_foreground_processes` | grid electricity, purchased steam, purchased hot water, natural gas, diesel, and LPG by process | meter, invoice, delivery, tank, boiler, and operational records | carrier identity; supplier; meter or tank identity; measured quantity; unit; supply conditions; heating value; opening and closing inventory; process coverage; allocation driver | collect each carrier separately, reconcile purchases and inventory, and calculate energy only with retained supplier data or measured conditions | kWh for electricity; MJ for steam, hot water, and fuels | each meter interval, delivery, or production shift as available | complete reporting period with opening and closing inventory | all utility points serving each foreground process | sum each carrier separately by process and use a documented causal allocation for shared meters | calibration, invoices, delivery notes, supplier heating values, meter logs, and allocation workbook |
| `cp_refrigerant_records` | `cold_chain_processes` | R-717, HFC-134a, and R-404A make-up plus ammonia, HFC-134a, HFC-125, and HFC-143a emissions | refrigerant purchase, service, charge, recovery, leak, and inventory records | equipment; process served; refrigerant product; chemical composition; opening charge; additions; removals; recovered mass; closing charge; leak event; service date; technician | close an equipment-level mass balance, retain actual blend composition, and assign make-up and emitted species separately to the cold process served | kg | each service or leak event and at reporting-period boundaries | complete reporting period with opening and closing charge | all refrigeration equipment serving pre-chilling, freezing, and frozen storage | sum by refrigerant product, emitted chemical species, equipment, and process without double counting recovered material | purchase invoices, service logs, leak tests, recovery tickets, composition specification, and signed balance |
| `cp_cleaning_chemical_records` | `sanitation_wastewater` | each cleaning, disinfection, and wastewater-treatment chemical | chemical issue, purchase, formulation, concentration, and use records | chemical identity; supplier; commercial-product mass; active concentration; batch; use point; date; opening and closing inventory; returned mass | record each commercial chemical separately and reconcile issued mass with inventory and returns | kg | each issue or preparation batch | complete reporting period with opening and closing stock | all cleaning, disinfection, and conditional on-site treatment points | sum by single chemical identity and use point before process assignment and normalization | safety data sheet, purchase invoice, issue log, concentration record, and stock reconciliation |
| `cp_waste_records` | `all_foreground_processes` | each animal-specific or material-specific waste stream and destination | weighing, rejection, container, transfer, recovery, and treatment records | row identity; animal output or material; lot; mass; container tare; quality status; destination; carrier; treatment route; transfer date; document number | weigh each stream separately, deduct tare, and assign its documented destination exactly once | kg | each waste transfer or production lot | complete reporting period | all waste generation and dispatch points within the foreground boundary | sum by row identity, animal output or material, and destination; prevent transfer and treatment duplication | calibrated scale, rejection record, transfer note, treatment receipt, and destination reconciliation |
| `cp_wastewater_records` | `sanitation_wastewater` | ordinary-strength wastewater, high-strength wastewater, sludge, screen residue, separated goose fat, and direct water pollutants | flowmeter, sampling, laboratory, sludge, screening, grease-separation, sewer-transfer, and discharge records | stream identity; destination; discharge status; volume; sampling point; sampling time; sampling method; concentration; analyte; unit; sludge mass; residue mass; separated-fat mass | meter segregated wastewater, use representative measured concentrations, weigh solids, and distinguish sewer transfer from direct environmental discharge | m3; kg; concentration unit retained | continuous or each discharge interval for flow and according to the documented representative sampling plan for concentration | complete reporting period including bypasses and abnormal events | all wastewater collection, treatment, sewer-transfer, and direct-discharge points in scope | calculate each pollutant separately from compatible volume and concentration records; report direct emissions only for direct discharge | meter calibration, sampling plan, chain of custody, accredited or documented laboratory results, discharge permit, and mass reconciliation |
| `cp_direct_air_emissions` | `all_foreground_processes` | each direct combustion substance emitted to air by process | fuel, equipment, stack-test, continuous-monitoring, operating-hour, and verified-factor records | process served; equipment; fuel identity; fuel quantity; operating time; substance; measured concentration or verified factor; exhaust flow; test period; unit | use direct measurement where representative; otherwise calculate each substance separately from collected fuel or activity data and a retained verified factor | kg | each representative test or monitoring interval and each fuel-reporting interval | complete reporting period including abnormal operation | all on-site combustion equipment serving the foreground processes | sum each chemical species by process and equipment; do not merge NO with NO2 or fine with coarse particulate matter | calibration, test report, monitoring log, fuel record, verified factor source, and calculation workbook |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized exchange = attributable foreground exchange for the reporting period divided by net conforming frozen goose meat released in the same period; the reference output itself is fixed at 1 kg | attributable exchange; net conforming released mass | exchange per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_mass_reconciliation` | receipt, slaughter, dressing, cutting, freezing, and packing mass balances | mass-balance difference = measured inputs plus opening inventory minus measured products, co-products, wastes, closing inventory, and documented moisture or purge change; investigate rather than fabricate an unmeasured balancing exchange | measured masses; opening and closing inventory; documented purge or moisture change | mass-balance difference and reconciliation status | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
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
| `dq_technology` | slaughter, defeathering, cutting, freezing, refrigeration, sanitation, and wastewater treatment | Document the actual equipment and operations represented, including product form, defeathering and freezing equipment, refrigerant identity, cleaning practice, and on-site treatment status. | process map, equipment register, refrigerant register, work instructions, and treatment description |
| `dq_completeness` | life-cycle inventory | Reconcile the atomic card register to purchase, production, maintenance, laboratory, waste, and discharge records; list every missing card record as an explicit data gap. | completeness matrix with included, absent, and unresolved status by row_id |
| `dq_precision` | measured and calculated quantities | Retain instrument resolution, calibration, sampling variability, conversion factors, allocation drivers, unrounded calculations, and final rounding rule. | calibration certificates, sampling records, calculation workbook, and uncertainty statement |
| `dq_consistency` | units, flow identities, product form, output status, and destinations | Apply one documented convention for gross versus net mass, whole carcass versus cut form, bone and skin state, units, co-product status, waste destination, and direct versus sewer discharge throughout the dataset. | data dictionary, unit-conversion register, flow mapping register, and reviewer sign-off |
| `dq_transparency` | method and results | Disclose boundary choices, conditional operations, exclusions, allocation, upstream dataset selection, calculations, unresolved UUIDs, data gaps, and verification findings. | method report, manifest review metadata, source register, calculation workbook, and verification report |
| `dq_verification` | completed foreground data package | Perform an independent review of identity, scope, records, balances, calculations, allocation, source use, and bilingual rule alignment before lifecycle advancement. | dated review checklist, reviewer identity, findings, corrections, and closure evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | PCR and reference-flow identity | Confirm canonical_pcr_id, CPC 3.0 code 21143, exact product title, Product flow type, reference UUID, Mass property UUID, Units of mass UUID, and kg unit; reject fresh or chilled goose meat, foie gras, and edible offal. | `unsd-cpc-21143` |
| `validate_reference_amount` | reference output | Require exactly 1 kg net conforming frozen goose meat at factory-gate release and verify that packaging, liver, offal, feathers, down, blood, fat, bone, and other separated outputs are excluded. | `unsd-cpc-21143`, `eu-pef-2021-2279` |
| `validate_scope` | dataset scope | Verify frozen market state, goose identity, product form, bone and skin state, process coverage, facility gate, reporting period, and exclusions for upstream farming and inbound transport and downstream stages. | `unsd-cpc-21143`, `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_process_map` | foreground processes | Require detailed inventories for receipt, slaughter and defeathering, carcass dressing and actual cutting, pre-chilling and freezing, release and frozen storage, and sanitation and wastewater management; document conditional packaging and on-site treatment status. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_atomic_inventory` | all inventory cards | Require one concrete exchange per row_id, a non-empty description, property and unit, amount rule, value mode, specificity, normalization basis, basis kind, evidence kind, collection protocol, and ordered source ids; reject collection selectors. | `eu-pef-2021-2279` |
| `validate_goose_mass_balance` | goose receipt, carcass, meat, co-product, reject, waste, and inventory records | Check bird-count and mass reconciliation through receipt, slaughter, dressing, cutting, freezing, packing, and every separated animal output; investigate each unresolved mass-balance difference. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_utility_separation` | water and energy | Check each process separately for mains water, groundwater, surface water, grid electricity, purchased steam, purchased hot water, natural gas, diesel, and LPG and verify no carrier is merged or double counted. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_refrigerants` | pre-chilling, freezing, and frozen storage | Reconcile equipment-level refrigerant records and verify separate product make-up and chemical-specific emissions, actual blend composition, recovery, and absence of double counting. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_wastewater` | wastewater and direct water emissions | Distinguish ordinary-strength and high-strength wastewater, sewer transfer, on-site treatment, and direct discharge; verify volume-concentration calculations, solids records, and receiving compartment. | `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_allocation` | co-products, wastes, and shared services | Verify subdivision and direct assignment first, separate treatment of foie gras and offal, the documented status and destination of every output, the causal basis of unavoidable allocation, equations, reconciliation, and sensitivity disclosure. | `eu-pef-2021-2279` |
| `validate_evidence` | sources and foreground records | Accept only the three declared external source ids for PCR support, require company-specific records for amounts, reject unsubstantiated defaults or ranges, and retain every unresolved non-reference UUID in manifest review metadata. | `unsd-cpc-21143`, `eu-jrc-sa-bref`, `eu-pef-2021-2279` |
| `validate_data_quality` | completed foreground data package | Review temporal, geographic, technological, precision, completeness, consistency, transparency, and verification evidence and block lifecycle advancement until material findings are closed. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Company-specific factory-gate foreground data package for 1 kg net conforming frozen goose meat under CPC 21143 |
| downstream_use | May serve as a `secondary_dataset` or `background_dataset` in a complete life-cycle model with separately selected upstream and downstream datasets, and may project to TianGong flow, process, lifecyclemodel, and dataset entities |
| allowed_use | Product-specific LCA and environmental-footprint modelling when product form, facility, period, technology, packaging, storage, allocation, and data quality match the study |
| excluded_use | Generic category-wide default quantities; fresh or chilled goose meat; foie gras; edible offal; another species; retail, cooking, use, or end-of-life modelling without added datasets |
| required_metadata | PCR id; CPC code; reference UUIDs; product form; bone and skin state; frozen release specification; net mass; facility and period; process map; refrigeration system and refrigerants; packaging; storage duration; foie gras and offal separation; wastewater and waste destinations; allocation; source ids |
| required_quality_disclosure | Primary-data coverage; meter and scale calibration; bird-count and mass-balance reconciliation; sampling representativeness; calculation factors; allocation choices; uncertainty; missing records; unresolved non-reference UUIDs; reviewer and verification status |
| update_trigger | Change in product form, process route, facility, defeathering, freezing or refrigeration technology, refrigerant, packaging, storage practice, wastewater treatment, co-product destination, foie gras or offal relation, allocation, reporting period, source method, or reference identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-21143` | Dataset (`dataset`) | United Nations Statistics Division, Central Product Classification Version 3.0, retained official structure CSV, subclass 21143, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Exact category title and frozen poultry-meat scope; distinction from fresh or chilled goose meat and edible poultry offal |
| `eu-jrc-sa-bref` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, DOI 10.2760/18199, https://doi.org/10.2760/18199 | Facility operations and inventory coverage for receipt, slaughter, bleeding, scalding, defeathering, evisceration, dressing, cutting, cooling, freezing, storage, sanitation, utilities, wastewater, segregated animal outputs, wastes, and direct emissions |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated text, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Company-specific foreground data, complete life-cycle inventory, product and process specificity, allocation, transparency, data quality, calculation documentation, and verification |
