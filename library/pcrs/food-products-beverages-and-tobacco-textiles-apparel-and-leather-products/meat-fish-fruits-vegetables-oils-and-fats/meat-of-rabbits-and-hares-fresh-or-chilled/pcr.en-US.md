---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-rabbits-and-hares-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of rabbits and hares, fresh or chilled

## 1. Scope and Applicability

This PCR applies to plant-gate production of net conforming rabbit meat or hare meat supplied fresh or chilled under CPC 21114. It covers receipt of live animals, slaughter and dressing, carcass finishing or standard cutting, chilling and refrigerated holding, plant cleaning and wastewater handling, final inspection, and packaging when used.

Frozen meat, edible offal as the reference product, farming, feed production, inbound animal transport, post-gate distribution, retail, cooking, use, and end-of-life are outside the foreground boundary. Edible organs, skins, blood, fat, trimmings, bones, and other outputs remain separately recorded for allocation and destination disclosure.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-rabbits-and-hares-fresh-or-chilled |
| classification_refs | CPC 3.0: 21114 Meat of rabbits and hares, fresh or chilled |
| covered_products | Fresh or chilled rabbit meat and fresh or chilled hare meat, as whole dressed carcasses or standard meat cuts, excluding edible offal |
| excluded_products | Frozen rabbit or hare meat; edible offal sold as the reference product; meat of other species; live animals |
| representative_product | Net conforming chilled rabbit carcass or rabbit meat cuts released at the processing-plant gate |
| production_route | Live-animal reception; slaughter, bleeding, skinning, evisceration; carcass finishing or standard cutting; chilling; refrigerated holding; inspection; packaging when used |
| market_state | Fresh or chilled without freezing, packaged or bulk as declared, at the processing-plant gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net conforming rabbit meat or hare meat supplied fresh or chilled for downstream food use |
| How much | 1 kg net product excluding packaging and edible offal |
| How well | Meets the declared specification, species identity, presentation, hygiene acceptance, and fresh-or-chilled temperature condition without freezing |
| How long or cycle | One production lot and plant-gate release; no downstream storage service is included |
| reference_flow_link | `reference_rabbit_hare_meat_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Meat of rabbits and hares, fresh or chilled `6fb95713-8813-4a4e-a0cd-1a3139e8347a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; whole carcass or cut presentation; bone-in status; offal exclusion; fresh or chilled state; exit temperature; net mass; packaging format; grade or conformity specification; processing geography and period |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net conforming meat mass after chilling and final inspection; exclude packaging, edible offal, rejects, and free liquid not sold with the product. |
| `live_and_output_mass` | animals, carcasses, meat, co-products, and solid wastes | Mass | kg | Preserve species-specific gross mass records and normalize only after reconciling the corresponding process balance. |
| `water_volume` | process water and wastewater | Volume | m3 | Use metered volume or a documented balance and do not convert pollutant mass into wastewater volume. |
| `energy_carriers` | electricity, steam, hot water, natural gas, diesel, and LPG | Energy | kWh or MJ | Keep electricity and each thermal carrier separate; document heating-value basis and every unit conversion. |
| `temperature_state` | chilled product | Temperature | degree C | Record product temperature and time evidence sufficient to demonstrate fresh-or-chilled state without freezing. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live rabbit or live hare received at the slaughterhouse gate with species, lot, supplier, live mass, arrival time, condition, and acceptance result declared |
| starting_condition_role | Foreground gate condition; farming and inbound animal transport are linked upstream datasets rather than foreground slaughter operations |
| product_classification_scope | CPC 21114 only: rabbit or hare meat supplied fresh or chilled, excluding frozen meat and edible offal as the reference product |
| recursive_input_rule | If fresh or chilled rabbit or hare meat re-enters an included process, record it as one species-specific product input and link its upstream dataset rather than recursively recreating its production |
| upstream_dataset_requirement | Link compatible datasets for animal farming, inbound transport, purchased utilities, chemicals, packaging, and any off-site waste or wastewater treatment |
| disclosure | Declare species, product presentation, fresh-or-chilled condition, cut-off, upstream links, on-site versus off-site treatment, allocation method, destinations, packaging, geography, technology, period, and data gaps |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_gate` | foreground system boundary | Start with live rabbits or live hares received at the slaughterhouse gate and end with net conforming fresh or chilled meat released at the processing-plant gate. | `ec-jrc-sa-bref-2024`, `eu-pef-2021` |
| `boundary_required_operations` | included operations | Include animal reception, slaughter, bleeding, skinning, evisceration, carcass finishing or standard cutting, chilling, refrigerated holding, cleaning, sanitation, wastewater handling, final inspection, and packaging when used. | `ec-jrc-sa-bref-2024` |
| `boundary_exclusions` | excluded foreground operations | Exclude animal farming, feed production, transport to the slaughterhouse, retail, distribution after the plant gate, cooking or use, and end-of-life; represent them with linked datasets only when the study expands beyond this foreground package. | `ec-jrc-sa-bref-2024`, `eu-pef-2021` |
| `boundary_product_state` | product state | Exclude frozen meat and edible offal from the reference product; record edible offal and other saleable outputs separately and disclose whether the reference product is fresh or chilled without freezing. | `un-cpc-v3-2025`, `ec-jrc-sa-bref-2024` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `animal_receiving` | Animal reception and holding | `required` | Required for every slaughter lot entering the foreground boundary. | Receive, identify, inspect, and hold live rabbits or hares before slaughter. | kg accepted live animal |
| `slaughter_dressing` | Slaughter, bleeding, skinning, and evisceration | `required` | Required for every product route. | Convert accepted live animals into species-specific dressed carcasses and separately recorded edible and non-edible outputs. | kg dressed carcass |
| `cutting_portioning` | Carcass finishing and standard cutting | `required` | Required; for a whole-carcass market form this process records finishing and zero or minimal cutting. | Trim, finish, and form the declared whole carcass or meat cuts before chilling. | kg prepared meat before chilling |
| `chilling_storage` | Chilling and refrigerated holding | `required` | Required to establish and maintain the fresh-or-chilled state before plant-gate release. | Cool prepared meat without freezing and hold it under controlled refrigerated conditions. | kg conforming chilled meat |
| `cleaning_wastewater` | Cleaning, sanitation, and wastewater treatment | `required` | Required for the included slaughter and cutting operations; off-site wastewater treatment may replace the on-site treatment sub-step only with a linked dataset. | Clean food-contact equipment and treat or transfer each wastewater stream without aggregating pollutant emissions. | m3 treated effluent |
| `packaging_release` | Packaging, final inspection, and release | `required` | Required for plant-gate release; each packaging-material card is conditional on the declared format. | Inspect, pack when applicable, weigh, and release net conforming fresh or chilled rabbit or hare meat. | 1 kg net reference product |

### Process: Animal reception and holding (`animal_receiving`)

#### Inputs

##### Product flows

###### Live rabbit input (`live_rabbit_input`)

This product input records only Live rabbit at slaughterhouse gate crossing the animal reception and holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Live rabbit at slaughterhouse gate
- Flow property / unit: Mass / kg
- Amount rule: Measured live mass accepted into the reception area; applicable only to rabbit lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted live animal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Live hare input (`live_hare_input`)

This product input records only Live hare at slaughterhouse gate crossing the animal reception and holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Live hare at slaughterhouse gate
- Flow property / unit: Mass / kg
- Amount rule: Measured live mass accepted into the reception area; applicable only to hare lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted live animal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Reception process water (`reception_process_water_input`)

This product input records only Process water supplied to animal reception crossing the animal reception and holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Process water supplied to animal reception
- Flow property / unit: Volume / m3
- Amount rule: Metered water supplied to reception pens and animal handling equipment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted live animal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Reception electricity (`reception_electricity_input`)

This product input records only Electricity supplied to animal reception equipment crossing the animal reception and holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Electricity supplied to animal reception equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or documented equipment allocation for reception and holding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted live animal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted live rabbit output (`accepted_live_rabbit_output`)

This product output records only Accepted live rabbit for slaughter crossing the animal reception and holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Accepted live rabbit for slaughter
- Flow property / unit: Mass / kg
- Amount rule: Measured rabbit live mass transferred to slaughter after inspection
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted live animal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animal_receiving`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Accepted live hare output (`accepted_live_hare_output`)

This product output records only Accepted live hare for slaughter crossing the animal reception and holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Accepted live hare for slaughter
- Flow property / unit: Mass / kg
- Amount rule: Measured hare live mass transferred to slaughter after inspection
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted live animal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animal_receiving`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Waste flows

###### Rabbit dead-on-arrival waste (`doa_rabbit_carcass_output`)

This waste output records only Rabbit carcass dead on arrival crossing the animal reception and holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit carcass dead on arrival
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of rabbit carcasses rejected before slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted live animal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare dead-on-arrival waste (`doa_hare_carcass_output`)

This waste output records only Hare carcass dead on arrival crossing the animal reception and holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare carcass dead on arrival
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of hare carcasses rejected before slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted live animal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Rabbit manure waste (`rabbit_manure_output`)

This waste output records only Rabbit manure from reception pens crossing the animal reception and holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit manure from reception pens
- Flow property / unit: Mass / kg
- Amount rule: Measured or container-weighed rabbit manure removed from reception pens
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted live animal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare manure waste (`hare_manure_output`)

This waste output records only Hare manure from reception pens crossing the animal reception and holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare manure from reception pens
- Flow property / unit: Mass / kg
- Amount rule: Measured or container-weighed hare manure removed from reception pens
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted live animal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Reception wastewater (`lairage_wastewater_output`)

This waste output records only Lairage wastewater from animal reception crossing the animal reception and holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Lairage wastewater from animal reception
- Flow property / unit: Volume / m3
- Amount rule: Metered or balance-calculated wastewater transferred to the wastewater process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg accepted live animal output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animal_receiving`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Elementary flows


### Process: Slaughter, bleeding, skinning, and evisceration (`slaughter_dressing`)

#### Inputs

##### Product flows

###### Accepted rabbit input (`accepted_live_rabbit_input`)

This product input records only Accepted live rabbit for slaughter crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Accepted live rabbit for slaughter
- Flow property / unit: Mass / kg
- Amount rule: Measured rabbit live mass transferred from reception
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Accepted hare input (`accepted_live_hare_input`)

This product input records only Accepted live hare for slaughter crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Accepted live hare for slaughter
- Flow property / unit: Mass / kg
- Amount rule: Measured hare live mass transferred from reception
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Slaughter process water (`slaughter_process_water_input`)

This product input records only Process water supplied to slaughter and dressing crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Process water supplied to slaughter and dressing
- Flow property / unit: Volume / m3
- Amount rule: Metered water used for slaughter, carcass washing, and dressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Slaughter electricity (`slaughter_electricity_input`)

This product input records only Electricity supplied to slaughter and dressing equipment crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Electricity supplied to slaughter and dressing equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or documented equipment allocation for slaughter and dressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Purchased steam (`slaughter_purchased_steam_input`)

This product input records only Purchased steam supplied to slaughter and dressing crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Purchased steam supplied to slaughter and dressing
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased steam supplied to this process; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Purchased hot water (`slaughter_purchased_hot_water_input`)

This product input records only Purchased hot water supplied to slaughter and dressing crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Purchased hot water supplied to slaughter and dressing
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased hot-water energy supplied to this process; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Natural gas fuel (`slaughter_natural_gas_input`)

This product input records only Natural gas combusted for slaughterhouse thermal demand crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Natural gas combusted for slaughterhouse thermal demand
- Flow property / unit: Energy / MJ
- Amount rule: Metered lower-heating-value energy of natural gas used by equipment serving this process; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Diesel fuel (`slaughter_diesel_input`)

This product input records only Diesel combusted for slaughterhouse thermal demand crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Diesel combusted for slaughterhouse thermal demand
- Flow property / unit: Energy / MJ
- Amount rule: Fuel issue records converted to lower-heating-value energy for equipment serving this process; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Liquefied petroleum gas fuel (`slaughter_lpg_input`)

This product input records only Liquefied petroleum gas combusted for slaughterhouse thermal demand crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Liquefied petroleum gas combusted for slaughterhouse thermal demand
- Flow property / unit: Energy / MJ
- Amount rule: Fuel issue records converted to lower-heating-value energy for equipment serving this process; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Sodium hydroxide cleaner (`slaughter_sodium_hydroxide_input`)

This product input records only Sodium hydroxide cleaning solution supplied to slaughter equipment crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Sodium hydroxide cleaning solution supplied to slaughter equipment
- Flow property / unit: Mass / kg
- Amount rule: Measured solution mass and recorded active concentration; not applicable when this chemical is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Peracetic acid disinfectant (`slaughter_peracetic_acid_input`)

This product input records only Peracetic acid disinfectant solution supplied to slaughter equipment crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Peracetic acid disinfectant solution supplied to slaughter equipment
- Flow property / unit: Mass / kg
- Amount rule: Measured solution mass and recorded active concentration; not applicable when this disinfectant is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Rabbit dressed carcass output (`rabbit_dressed_carcass_output`)

This product output records only Rabbit dressed carcass after evisceration crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit dressed carcass after evisceration
- Flow property / unit: Mass / kg
- Amount rule: Measured rabbit dressed-carcass mass after bleeding, skinning, and evisceration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Rabbit liver co-product (`rabbit_liver_output`)

This product output records only Rabbit liver for human consumption crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit liver for human consumption
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming rabbit liver mass transferred as an edible co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Rabbit heart co-product (`rabbit_heart_output`)

This product output records only Rabbit heart for human consumption crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit heart for human consumption
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming rabbit heart mass transferred as an edible co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Rabbit kidney co-product (`rabbit_kidney_output`)

This product output records only Rabbit kidney for human consumption crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit kidney for human consumption
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming rabbit kidney mass transferred as an edible co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare dressed carcass output (`hare_dressed_carcass_output`)

This product output records only Hare dressed carcass after evisceration crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare dressed carcass after evisceration
- Flow property / unit: Mass / kg
- Amount rule: Measured hare dressed-carcass mass after bleeding, skinning, and evisceration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare liver co-product (`hare_liver_output`)

This product output records only Hare liver for human consumption crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare liver for human consumption
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming hare liver mass transferred as an edible co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare heart co-product (`hare_heart_output`)

This product output records only Hare heart for human consumption crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare heart for human consumption
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming hare heart mass transferred as an edible co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare kidney co-product (`hare_kidney_output`)

This product output records only Hare kidney for human consumption crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare kidney for human consumption
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming hare kidney mass transferred as an edible co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Waste flows

###### Rabbit blood output (`rabbit_blood_output`)

This waste output records only Rabbit blood from slaughter crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit blood from slaughter
- Flow property / unit: Mass / kg
- Amount rule: Measured or balance-calculated rabbit blood sent to the documented destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Rabbit skin output (`rabbit_skin_output`)

This waste output records only Rabbit skin from slaughter crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit skin from slaughter
- Flow property / unit: Mass / kg
- Amount rule: Measured rabbit skin mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Rabbit inedible viscera (`rabbit_inedible_viscera_output`)

This waste output records only Rabbit inedible viscera from slaughter crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit inedible viscera from slaughter
- Flow property / unit: Mass / kg
- Amount rule: Measured rabbit inedible-viscera mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Rabbit digestive-tract content (`rabbit_digestive_content_output`)

This waste output records only Rabbit digestive-tract content from slaughter crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit digestive-tract content from slaughter
- Flow property / unit: Mass / kg
- Amount rule: Measured or balance-calculated rabbit digestive-tract content removed during evisceration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare blood output (`hare_blood_output`)

This waste output records only Hare blood from slaughter crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare blood from slaughter
- Flow property / unit: Mass / kg
- Amount rule: Measured or balance-calculated hare blood sent to the documented destination
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare skin output (`hare_skin_output`)

This waste output records only Hare skin from slaughter crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare skin from slaughter
- Flow property / unit: Mass / kg
- Amount rule: Measured hare skin mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare inedible viscera (`hare_inedible_viscera_output`)

This waste output records only Hare inedible viscera from slaughter crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare inedible viscera from slaughter
- Flow property / unit: Mass / kg
- Amount rule: Measured hare inedible-viscera mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare digestive-tract content (`hare_digestive_content_output`)

This waste output records only Hare digestive-tract content from slaughter crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare digestive-tract content from slaughter
- Flow property / unit: Mass / kg
- Amount rule: Measured or balance-calculated hare digestive-tract content removed during evisceration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Slaughter wastewater (`slaughter_wastewater_output`)

This waste output records only Slaughter and carcass-washing wastewater crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Slaughter and carcass-washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or balance-calculated wastewater transferred to the wastewater process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Elementary flows

###### Fossil carbon dioxide from natural gas (`slaughter_natural_gas_co2_output`)

This elementary output records only Carbon dioxide, fossil, to air from natural gas combustion for slaughterhouse thermal demand crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Carbon dioxide, fossil, to air from natural gas combustion for slaughterhouse thermal demand
- Flow property / unit: Mass / kg
- Amount rule: Recorded natural gas energy multiplied by a documented site, supplier, or regulatory fossil-carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `eu-pef-2021`

###### Fossil carbon dioxide from diesel (`slaughter_diesel_co2_output`)

This elementary output records only Carbon dioxide, fossil, to air from diesel combustion for slaughterhouse thermal demand crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Carbon dioxide, fossil, to air from diesel combustion for slaughterhouse thermal demand
- Flow property / unit: Mass / kg
- Amount rule: Recorded diesel energy multiplied by a documented site, supplier, or regulatory fossil-carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `eu-pef-2021`

###### Fossil carbon dioxide from liquefied petroleum gas (`slaughter_lpg_co2_output`)

This elementary output records only Carbon dioxide, fossil, to air from liquefied petroleum gas combustion for slaughterhouse thermal demand crossing the slaughter, bleeding, skinning, and evisceration boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Carbon dioxide, fossil, to air from liquefied petroleum gas combustion for slaughterhouse thermal demand
- Flow property / unit: Mass / kg
- Amount rule: Recorded liquefied petroleum gas energy multiplied by a documented site, supplier, or regulatory fossil-carbon factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg dressed carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `eu-pef-2021`


### Process: Carcass finishing and standard cutting (`cutting_portioning`)

#### Inputs

##### Product flows

###### Rabbit dressed carcass input (`rabbit_dressed_carcass_input`)

This product input records only Rabbit dressed carcass after evisceration crossing the carcass finishing and standard cutting boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit dressed carcass after evisceration
- Flow property / unit: Mass / kg
- Amount rule: Measured rabbit dressed-carcass mass received from slaughter and dressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare dressed carcass input (`hare_dressed_carcass_input`)

This product input records only Hare dressed carcass after evisceration crossing the carcass finishing and standard cutting boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare dressed carcass after evisceration
- Flow property / unit: Mass / kg
- Amount rule: Measured hare dressed-carcass mass received from slaughter and dressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Cutting process water (`cutting_process_water_input`)

This product input records only Process water supplied to carcass finishing and cutting crossing the carcass finishing and standard cutting boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Process water supplied to carcass finishing and cutting
- Flow property / unit: Volume / m3
- Amount rule: Metered water used for carcass finishing, cutting, and food-contact rinsing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Cutting electricity (`cutting_electricity_input`)

This product input records only Electricity supplied to carcass cutting equipment crossing the carcass finishing and standard cutting boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Electricity supplied to carcass cutting equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or documented equipment allocation for carcass finishing and cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Rabbit prepared meat output (`rabbit_prepared_meat_output`)

This product output records only Rabbit meat prepared for chilling crossing the carcass finishing and standard cutting boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit meat prepared for chilling
- Flow property / unit: Mass / kg
- Amount rule: Measured net rabbit carcass or cut mass transferred to chilling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Rabbit edible fat co-product (`rabbit_edible_fat_output`)

This product output records only Rabbit edible fat trimming crossing the carcass finishing and standard cutting boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit edible fat trimming
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming rabbit fat trimming transferred for food use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Rabbit edible meat trimming co-product (`rabbit_edible_meat_trim_output`)

This product output records only Rabbit edible meat trimming crossing the carcass finishing and standard cutting boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit edible meat trimming
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming rabbit meat trimming transferred for food use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare prepared meat output (`hare_prepared_meat_output`)

This product output records only Hare meat prepared for chilling crossing the carcass finishing and standard cutting boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare meat prepared for chilling
- Flow property / unit: Mass / kg
- Amount rule: Measured net hare carcass or cut mass transferred to chilling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare edible fat co-product (`hare_edible_fat_output`)

This product output records only Hare edible fat trimming crossing the carcass finishing and standard cutting boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare edible fat trimming
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming hare fat trimming transferred for food use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare edible meat trimming co-product (`hare_edible_meat_trim_output`)

This product output records only Hare edible meat trimming crossing the carcass finishing and standard cutting boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare edible meat trimming
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming hare meat trimming transferred for food use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Waste flows

###### Rabbit bone output (`rabbit_bone_output`)

This waste output records only Rabbit bone from carcass cutting crossing the carcass finishing and standard cutting boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit bone from carcass cutting
- Flow property / unit: Mass / kg
- Amount rule: Measured rabbit bone mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Rabbit inedible trimming (`rabbit_inedible_trim_output`)

This waste output records only Rabbit inedible trimming from carcass cutting crossing the carcass finishing and standard cutting boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit inedible trimming from carcass cutting
- Flow property / unit: Mass / kg
- Amount rule: Measured rabbit inedible-trimming mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare bone output (`hare_bone_output`)

This waste output records only Hare bone from carcass cutting crossing the carcass finishing and standard cutting boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare bone from carcass cutting
- Flow property / unit: Mass / kg
- Amount rule: Measured hare bone mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare inedible trimming (`hare_inedible_trim_output`)

This waste output records only Hare inedible trimming from carcass cutting crossing the carcass finishing and standard cutting boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare inedible trimming from carcass cutting
- Flow property / unit: Mass / kg
- Amount rule: Measured hare inedible-trimming mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg prepared meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Cutting wastewater (`cutting_wastewater_output`)

This waste output records only Carcass-cutting and food-contact-rinse wastewater crossing the carcass finishing and standard cutting boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Carcass-cutting and food-contact-rinse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered or balance-calculated wastewater transferred to the wastewater process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg prepared meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cutting_portioning`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Elementary flows


### Process: Chilling and refrigerated holding (`chilling_storage`)

#### Inputs

##### Product flows

###### Rabbit prepared meat input (`rabbit_prepared_meat_input`)

This product input records only Rabbit meat prepared for chilling crossing the chilling and refrigerated holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit meat prepared for chilling
- Flow property / unit: Mass / kg
- Amount rule: Measured rabbit meat mass received from carcass finishing and cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare prepared meat input (`hare_prepared_meat_input`)

This product input records only Hare meat prepared for chilling crossing the chilling and refrigerated holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare meat prepared for chilling
- Flow property / unit: Mass / kg
- Amount rule: Measured hare meat mass received from carcass finishing and cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Chilling electricity (`chilling_electricity_input`)

This product input records only Electricity supplied to meat chilling and cold-storage equipment crossing the chilling and refrigerated holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Electricity supplied to meat chilling and cold-storage equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or documented refrigeration-system allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### R-717 refrigerant make-up (`r717_refrigerant_makeup_input`)

This product input records only Ammonia (R-717) refrigerant make-up crossing the chilling and refrigerated holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Ammonia (R-717) refrigerant make-up
- Flow property / unit: Mass / kg
- Amount rule: Measured refrigerant make-up supplied to the chilling system; not applicable when R-717 is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### R-134a refrigerant make-up (`r134a_refrigerant_makeup_input`)

This product input records only 1,1,1,2-Tetrafluoroethane (R-134a) refrigerant make-up crossing the chilling and refrigerated holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R-134a) refrigerant make-up
- Flow property / unit: Mass / kg
- Amount rule: Measured refrigerant make-up supplied to the chilling system; not applicable when R-134a is absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Rabbit chilled meat output (`rabbit_chilled_meat_output`)

This product output records only Rabbit meat, fresh or chilled, before packaging crossing the chilling and refrigerated holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit meat, fresh or chilled, before packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming rabbit meat mass after chilling and refrigerated holding
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_storage`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare chilled meat output (`hare_chilled_meat_output`)

This product output records only Hare meat, fresh or chilled, before packaging crossing the chilling and refrigerated holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare meat, fresh or chilled, before packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming hare meat mass after chilling and refrigerated holding
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_storage`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Waste flows

###### Rabbit temperature-control reject (`rabbit_temperature_reject_output`)

This waste output records only Rabbit meat rejected after chilling temperature deviation crossing the chilling and refrigerated holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit meat rejected after chilling temperature deviation
- Flow property / unit: Mass / kg
- Amount rule: Measured rabbit meat mass rejected for documented temperature or time nonconformity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare temperature-control reject (`hare_temperature_reject_output`)

This waste output records only Hare meat rejected after chilling temperature deviation crossing the chilling and refrigerated holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare meat rejected after chilling temperature deviation
- Flow property / unit: Mass / kg
- Amount rule: Measured hare meat mass rejected for documented temperature or time nonconformity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg conforming chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_storage`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Elementary flows

###### R-717 emitted to air (`r717_to_air_output`)

This elementary output records only Ammonia (R-717), to air from meat refrigeration crossing the chilling and refrigerated holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Ammonia (R-717), to air from meat refrigeration
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant charge balance using opening charge, make-up, closing charge, recovery, and documented transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_storage`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### R-134a emitted to air (`r134a_to_air_output`)

This elementary output records only 1,1,1,2-Tetrafluoroethane (R-134a), to air from meat refrigeration crossing the chilling and refrigerated holding boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane (R-134a), to air from meat refrigeration
- Flow property / unit: Mass / kg
- Amount rule: Refrigerant charge balance using opening charge, make-up, closing charge, recovery, and documented transfers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg conforming chilled meat output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling_storage`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`


### Process: Cleaning, sanitation, and wastewater treatment (`cleaning_wastewater`)

#### Inputs

##### Product flows

###### Sanitation process water (`sanitation_process_water_input`)

This product input records only Process water supplied to plant cleaning and sanitation crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Process water supplied to plant cleaning and sanitation
- Flow property / unit: Volume / m3
- Amount rule: Metered water used for cleaning and sanitation within the included plant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Wastewater-treatment electricity (`wastewater_electricity_input`)

This product input records only Electricity supplied to slaughterhouse wastewater treatment crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Electricity supplied to slaughterhouse wastewater treatment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or documented equipment allocation for wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Wastewater pH-control chemical (`wastewater_sodium_hydroxide_input`)

This product input records only Sodium hydroxide solution supplied to wastewater treatment crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Sodium hydroxide solution supplied to wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured solution mass and active concentration; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Ferric chloride coagulant (`ferric_chloride_input`)

This product input records only Ferric chloride solution supplied to wastewater treatment crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Ferric chloride solution supplied to wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured solution mass and active concentration; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Anionic polyacrylamide flocculant (`anionic_polyacrylamide_input`)

This product input records only Anionic polyacrylamide flocculant supplied to wastewater treatment crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Anionic polyacrylamide flocculant supplied to wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured product mass; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Waste flows

###### Reception wastewater input (`lairage_wastewater_input`)

This waste input records only Lairage wastewater from animal reception crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Lairage wastewater from animal reception
- Flow property / unit: Volume / m3
- Amount rule: Metered reception wastewater entering treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Slaughter wastewater input (`slaughter_wastewater_input`)

This waste input records only Slaughter and carcass-washing wastewater crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Slaughter and carcass-washing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered slaughter wastewater entering treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Cutting wastewater input (`cutting_wastewater_input`)

This waste input records only Carcass-cutting and food-contact-rinse wastewater crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Carcass-cutting and food-contact-rinse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered cutting wastewater entering treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater screenings (`wastewater_screenings_output`)

This waste output records only Screenings from slaughterhouse wastewater treatment crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Screenings from slaughterhouse wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured dewatered screenings sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Dissolved-air-flotation sludge (`daf_sludge_output`)

This waste output records only Dissolved-air-flotation sludge from slaughterhouse wastewater treatment crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Dissolved-air-flotation sludge from slaughterhouse wastewater treatment
- Flow property / unit: Mass / kg
- Amount rule: Measured dewatered flotation sludge sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Elementary flows

###### Treated effluent water (`treated_effluent_water_output`)

This elementary output records only Water, to surface water from slaughterhouse wastewater treatment crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Water, to surface water from slaughterhouse wastewater treatment
- Flow property / unit: Volume / m3
- Amount rule: Metered treated effluent discharged to surface water; not applicable when transferred off site
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Biochemical oxygen demand to water (`bod5_to_water_output`)

This elementary output records only Biochemical oxygen demand (BOD5), to surface water crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Biochemical oxygen demand (BOD5), to surface water
- Flow property / unit: Mass / kg
- Amount rule: Measured effluent volume multiplied by the matched laboratory concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Chemical oxygen demand to water (`cod_to_water_output`)

This elementary output records only Chemical oxygen demand (COD), to surface water crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Chemical oxygen demand (COD), to surface water
- Flow property / unit: Mass / kg
- Amount rule: Measured effluent volume multiplied by the matched laboratory concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Suspended solids to water (`tss_to_water_output`)

This elementary output records only Total suspended solids, to surface water crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Total suspended solids, to surface water
- Flow property / unit: Mass / kg
- Amount rule: Measured effluent volume multiplied by the matched laboratory concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Total nitrogen to water (`total_nitrogen_to_water_output`)

This elementary output records only Nitrogen, total, to surface water crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Nitrogen, total, to surface water
- Flow property / unit: Mass / kg
- Amount rule: Measured effluent volume multiplied by the matched laboratory concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Total phosphorus to water (`total_phosphorus_to_water_output`)

This elementary output records only Phosphorus, total, to surface water crossing the cleaning, sanitation, and wastewater treatment boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Phosphorus, total, to surface water
- Flow property / unit: Mass / kg
- Amount rule: Measured effluent volume multiplied by the matched laboratory concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 m3 treated effluent output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_wastewater`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`


### Process: Packaging, final inspection, and release (`packaging_release`)

#### Inputs

##### Product flows

###### Rabbit chilled meat input (`rabbit_chilled_meat_input`)

This product input records only Rabbit meat, fresh or chilled, before packaging crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit meat, fresh or chilled, before packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming rabbit meat mass received from chilled holding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare chilled meat input (`hare_chilled_meat_input`)

This product input records only Hare meat, fresh or chilled, before packaging crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare meat, fresh or chilled, before packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming hare meat mass received from chilled holding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Polypropylene tray (`pp_tray_input`)

This product input records only Polypropylene tray for chilled meat packaging crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Polypropylene tray for chilled meat packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured or purchase-reconciled tray mass used for the declared packaging format; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Polyethylene lidding film (`pe_film_input`)

This product input records only Polyethylene lidding film for chilled meat packaging crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Polyethylene lidding film for chilled meat packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured or purchase-reconciled film mass used for the declared packaging format; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Cellulose absorbent pad (`cellulose_pad_input`)

This product input records only Cellulose absorbent pad for chilled meat packaging crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Cellulose absorbent pad for chilled meat packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured or purchase-reconciled pad mass used for the declared packaging format; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Paper label (`paper_label_input`)

This product input records only Paper label for chilled meat packaging crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Paper label for chilled meat packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured or purchase-reconciled label mass used for the declared packaging format; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Corrugated transport carton (`corrugated_carton_input`)

This product input records only Corrugated paperboard carton for chilled meat transport crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Corrugated paperboard carton for chilled meat transport
- Flow property / unit: Mass / kg
- Amount rule: Measured or purchase-reconciled carton mass used for the declared packaging format; not applicable when absent
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Packaging electricity (`packaging_electricity_input`)

This product input records only Electricity supplied to meat packaging and final-inspection equipment crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Electricity supplied to meat packaging and final-inspection equipment
- Flow property / unit: Energy / kWh
- Amount rule: Submetered electricity or documented equipment allocation for packaging and final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference fresh or chilled meat output (`reference_rabbit_hare_meat_output`)

This product output records only Meat of rabbits and hares, fresh or chilled crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Meat of rabbits and hares, fresh or chilled `6fb95713-8813-4a4e-a0cd-1a3139e8347a`
- Flow property / unit: Mass 93a60a56-a3c8-11da-a746-0800200b9a66 / kg
- Amount rule: Measured net mass of conforming reference product released at the plant gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `un-cpc-v3-2025`, `eu-pef-2021`

##### Waste flows

###### Rabbit final-product reject (`packaged_rabbit_reject_output`)

This waste output records only Rabbit meat rejected during final inspection crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Rabbit meat rejected during final inspection
- Flow property / unit: Mass / kg
- Amount rule: Measured net rabbit meat mass rejected at final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Hare final-product reject (`packaged_hare_reject_output`)

This waste output records only Hare meat rejected during final inspection crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Hare meat rejected during final inspection
- Flow property / unit: Mass / kg
- Amount rule: Measured net hare meat mass rejected at final inspection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Waste polypropylene tray (`waste_pp_tray_output`)

This waste output records only Waste polypropylene tray from chilled meat packaging crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Waste polypropylene tray from chilled meat packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured or purchase-reconciled packaging material discarded before product release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Waste polyethylene film (`waste_pe_film_output`)

This waste output records only Waste polyethylene film from chilled meat packaging crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Waste polyethylene film from chilled meat packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured or purchase-reconciled packaging material discarded before product release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Waste cellulose pad (`waste_cellulose_pad_output`)

This waste output records only Waste cellulose absorbent pad from chilled meat packaging crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Waste cellulose absorbent pad from chilled meat packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured or purchase-reconciled packaging material discarded before product release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Waste paper label (`waste_paper_label_output`)

This waste output records only Waste paper label from chilled meat packaging crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Waste paper label from chilled meat packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured or purchase-reconciled packaging material discarded before product release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

###### Waste corrugated carton (`waste_corrugated_carton_output`)

This waste output records only Waste corrugated paperboard carton from chilled meat packaging crossing the packaging, final inspection, and release boundary. Its quantity is obtained from the stated foreground rule and is not combined with another exchange.

- Selected flow: Waste corrugated paperboard carton from chilled meat packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured or purchase-reconciled packaging material discarded before product release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_release`
- Sources: `ec-jrc-sa-bref-2024`, `eu-pef-2021`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | slaughter, dressing, and cutting | Use subdivision or direct metering to assign separately measurable operations to rabbit meat, hare meat, edible organs, skins, blood, fat, meat trimmings, and other outputs before applying allocation. | `eu-pef-2021` |
| `allocation_causal_then_economic` | unavoidable multifunctionality | When subdivision cannot eliminate multifunctionality, apply a documented physical causal relationship; if no defensible physical relationship exists, use representative economic values and disclose prices, period, geography, and sensitivity. | `eu-pef-2021` |
| `allocation_gross_output_records` | all co-products and wastes | Record the gross measured mass and destination of each specific output before allocation and do not net revenues, treatment credits, or avoided products against foreground inventory quantities. | `ec-jrc-sa-bref-2024`, `eu-pef-2021` |
| `allocation_waste_boundary` | waste treatment | Assign waste handling to the producer up to the documented waste-system boundary; any downstream recycling or substitution credit belongs to the declared downstream model and must not be embedded silently. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animal_receiving` | `animal_receiving` | Live-animal, water, electricity, acceptance, mortality, manure, and reception-wastewater records | lot receipt, scale, inspection, meter, pen-cleaning, and waste records | species; lot; supplier; arrival time; live mass; accepted mass; dead-on-arrival mass; water; electricity; manure; wastewater | Calibrated livestock scales, meters, inspection logs, and destination records | kg; m3; kWh | Per production lot with monthly reconciliation | At least one representative continuous 12-month period or the complete production campaign | All included equipment and operating areas for this process | Sum each atomic flow separately by species and lot, reconcile balances, then normalize to the process quantitative reference | Calibration, approved specifications, signed logs, laboratory reports where applicable, and mass-balance review |
| `cp_slaughter_dressing` | `slaughter_dressing` | Species-specific carcass, edible organ, non-edible output, water, utility, fuel, chemical, wastewater, and emission records | slaughter lot, scale, meter, fuel, chemical issue, sanitation, and destination records | species; live input; carcass; liver; heart; kidney; blood; skin; viscera; digestive content; water; electricity; steam; hot water; each fuel; each chemical; wastewater | Calibrated scales and meters reconciled to slaughter lots and signed destination records | kg; m3; kWh; MJ | Per production lot with monthly reconciliation | At least one representative continuous 12-month period or the complete production campaign | All included equipment and operating areas for this process | Sum each atomic flow separately by species and lot, reconcile balances, then normalize to the process quantitative reference | Calibration, approved specifications, signed logs, laboratory reports where applicable, and mass-balance review |
| `cp_cutting_portioning` | `cutting_portioning` | Carcass input, prepared meat, edible trimming, bone, inedible trimming, water, electricity, and wastewater records | cutting lot, scale, cutting plan, meter, reject, and destination records | species; carcass input; market presentation; prepared meat; edible fat; edible meat trim; bone; inedible trim; water; electricity; wastewater | Calibrated scales and meters reconciled to cutting plans and lot records | kg; m3; kWh | Per production lot with monthly reconciliation | At least one representative continuous 12-month period or the complete production campaign | All included equipment and operating areas for this process | Sum each atomic flow separately by species and lot, reconcile balances, then normalize to the process quantitative reference | Calibration, approved specifications, signed logs, laboratory reports where applicable, and mass-balance review |
| `cp_chilling_storage` | `chilling_storage` | Prepared meat, chilled output, temperature reject, electricity, refrigerant, and cold-room records | lot, scale, temperature logger, electricity meter, refrigerant service, and reject records | species; input mass; output mass; product temperature; time; electricity; refrigerant identity; opening charge; make-up; recovery; closing charge; reject mass | Calibrated scales, continuous temperature records, electricity meters, and refrigerant service logs | kg; kWh; degree C; h | Per production lot with monthly reconciliation | At least one representative continuous 12-month period or the complete production campaign | All included equipment and operating areas for this process | Sum each atomic flow separately by species and lot, reconcile balances, then normalize to the process quantitative reference | Calibration, approved specifications, signed logs, laboratory reports where applicable, and mass-balance review |
| `cp_cleaning_wastewater` | `cleaning_wastewater` | Wastewater inflow, sanitation water, treatment electricity, chemical, residual, effluent, and pollutant records | flow meter, chemical issue, laboratory, sludge, screening, discharge, and transfer records | source stream; inflow; water; electricity; each chemical; screenings; sludge; effluent volume; BOD5; COD; TSS; total nitrogen; total phosphorus; discharge route | Calibrated flow meters, accredited laboratory results, chemical records, and signed waste destinations | m3; kg; kWh; mg/L | Per production lot with monthly reconciliation | At least one representative continuous 12-month period or the complete production campaign | All included equipment and operating areas for this process | Sum each atomic flow separately by species and lot, reconcile balances, then normalize to the process quantitative reference | Calibration, approved specifications, signed logs, laboratory reports where applicable, and mass-balance review |
| `cp_packaging_release` | `packaging_release` | Species-specific chilled meat, net product, packaging item, packaging waste, electricity, reject, and release records | lot, scale, BOM, purchase, issue, meter, inspection, reject, and dispatch records | species; presentation; fresh-or-chilled state; input mass; net released mass; each packaging mass; each packaging waste; electricity; reject; dispatch | Calibrated scales and meters reconciled to the product BOM, inspection, and dispatch records | kg; kWh | Per production lot with monthly reconciliation | At least one representative continuous 12-month period or the complete production campaign | All included equipment and operating areas for this process | Sum each atomic flow separately by species and lot, reconcile balances, then normalize to the process quantitative reference | Calibration, approved specifications, signed logs, laboratory reports where applicable, and mass-balance review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_receiving_balance` | animal reception | Opening live mass plus receipts equals accepted transfer plus dead-on-arrival carcasses plus measured removals plus closing live mass; investigate differences. | species; receipts; accepted mass; dead-on-arrival mass; removals; opening and closing live mass | Species-specific receiving balance | `ec-jrc-sa-bref-2024` |
| `calc_slaughter_balance` | slaughter and dressing | Reconcile accepted live mass to dressed carcass, each edible organ, blood, skin, inedible viscera, digestive content, wastewater-carried solids where quantified, and stock change. | species-specific slaughter and destination records | Species-specific slaughter mass balance | `ec-jrc-sa-bref-2024`, `eu-pef-2021` |
| `calc_cutting_balance` | carcass finishing and cutting | Reconcile dressed carcass input to prepared meat, edible fat, edible meat trimming, bone, inedible trimming, wastewater-carried solids where quantified, and stock change. | species-specific cutting records | Species-specific cutting mass balance | `ec-jrc-sa-bref-2024`, `eu-pef-2021` |
| `calc_fuel_co2` | direct fuel combustion | Multiply each fuel energy record by its documented site, supplier, or regulatory fossil-carbon factor without combining fuels. | fuel identity; energy; factor; factor source and validity period | Fossil CO2 for one fuel and process | `eu-pef-2021` |
| `calc_refrigerant_loss` | chilling and refrigerated holding | Opening charge plus make-up minus recovered quantity minus closing charge minus documented transfers equals loss to air for each refrigerant. | refrigerant identity; opening charge; make-up; recovery; closing charge; transfers | Loss to air for one refrigerant | `ec-jrc-sa-bref-2024`, `eu-pef-2021` |
| `calc_effluent_load` | wastewater discharge | Multiply matched treated-effluent volume by the laboratory concentration for one pollutant and convert units explicitly. | effluent volume; pollutant concentration; sampling period; conversion factor | Mass of one pollutant discharged | `ec-jrc-sa-bref-2024` |
| `calc_reference_mass` | packaging and release | Net released mass equals gross packaged or bulk product mass minus packaging mass; reconcile species-specific inputs, rejects, samples, and stock change. | gross mass; each packaging mass; species-specific chilled input; rejects; samples; stock change | Net kg reference product | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Record species, whole carcass or cut presentation, bone-in status, offal exclusion, fresh-or-chilled state, exit temperature, net mass, packaging format, grade, site, and production period. | Approved product specification, inspection, temperature, label, and dispatch records |
| `dq_company_specific` | foreground inventory | Use company-specific activity data for included manufacturing processes and retain the raw records used for each atomic flow. | Meters, scales, invoices, issue records, logs, laboratory reports, and supplier records |
| `dq_temporal_scope` | all processes | Use a representative continuous 12-month period or complete production campaign and disclose seasonal, species, product-mix, shutdown, and abnormal-operation coverage. | Production calendar, lot register, maintenance log, and representativeness statement |
| `dq_completeness` | inventory | Account for every declared material, utility, fuel, refrigerant, cleaning chemical, packaging item, co-product, waste, and elementary emission or document why the atomic row is not applicable. | Signed completeness checklist and reconciled process records |
| `dq_measurement` | measured data | Retain instrument identity, calibration status, reading frequency, estimation or allocation method, and uncertainty or data limitation for each measured or derived value. | Calibration certificates, meter map, calculation workbook, and review record |
| `dq_external_links` | upstream and downstream datasets | Document geography, technology, time, product state, allocation compatibility, and quality of linked farming, transport, purchased utility, material, chemical, packaging, waste, and treatment datasets. | Dataset metadata and data-quality assessment |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | Confirm CPC 21114, species, fresh-or-chilled state, exclusion of frozen meat and offal, net mass, presentation, and plant-gate release. | `un-cpc-v3-2025` |
| `validate_reference_uuid` | reference flow | Confirm that the reference output alone uses UUID 6fb95713-8813-4a4e-a0cd-1a3139e8347a, Mass 93a60a56-a3c8-11da-a746-0800200b9a66, unit group 93a60a57-a4c8-11da-a746-0800200c9a66, and kg. |  |
| `validate_process_completeness` | foreground process map | Confirm all six required process records exist and that any off-site wastewater treatment is linked rather than omitted. | `ec-jrc-sa-bref-2024` |
| `validate_atomic_inventory` | inventory | Reject collection labels and require separate rows for each species, material, utility, fuel, refrigerant, chemical, packaging item, waste, co-product, and elementary emission. | `ec-jrc-sa-bref-2024`, `eu-pef-2021` |
| `validate_mass_balance` | receiving, slaughter, cutting, chilling, and packaging | Reconcile measured inputs, conforming outputs, specific co-products, specific wastes, rejects, and stock change for every lot and investigate unexplained differences. | `ec-jrc-sa-bref-2024`, `eu-pef-2021` |
| `validate_energy_refrigerant` | utilities and refrigeration | Reconcile stage electricity and each thermal fuel separately; reconcile each refrigerant from opening charge, make-up, recovery, closing charge, and transfer records. | `ec-jrc-sa-bref-2024`, `eu-pef-2021` |
| `validate_effluent` | wastewater treatment | Match effluent volume and each reported pollutant load to the same sampling period, analytical result, discharge route, and operating record. | `ec-jrc-sa-bref-2024` |
| `validate_transparency` | published dataset | Retain company-specific records, allocation choices, exclusions, data gaps, factors, representativeness, and quality evidence sufficient for independent review. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for fresh or chilled rabbit or hare meat at the processing-plant gate |
| downstream_use | `secondary_dataset`; `background_dataset` when reviewed and representative for the consuming model |
| allowed_use | Link to downstream food products and lifecycle models whose species, product state, presentation, geography, technology, period, allocation, and quality needs match the dataset |
| excluded_use | Frozen meat, edible offal as the reference product, other species, live-animal production, retail or use-stage modelling, or an unmatched technology or allocation context |
| required_metadata | PCR id; CPC 21114; reference UUID; species; presentation; bone-in status; offal exclusion; fresh-or-chilled condition and temperature; net mass; packaging; site; geography; technology; period; process coverage; allocation; destinations; upstream and downstream links |
| required_quality_disclosure | Company-specific data coverage; meter and scale coverage; laboratory methods; mass-balance closure; allocation sensitivity; refrigerant balance; data gaps; exclusions; substitutions; dataset quality and representativeness |
| update_trigger | Change in species mix, product presentation, process route, chilling system, refrigerant, fuel, cleaning chemistry, wastewater route, packaging format, allocation basis, site, regulation, or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | Official guidance (`official_guidance`) | United Nations Statistics Division, CPC Version 3.0 official classification entry and CPC_Ver_3.0_Structure_30Jun2025.csv, https://unstats.un.org/unsd/classifications/Econ/CPC, accessed 2026-08-13 | Exact CPC 21114 fresh-or-chilled scope and exclusion of frozen meat and offal from the reference category |
| `ec-jrc-sa-bref-2024` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and Edible Co-products Industries, JRC135916, DOI 10.2760/18199, https://publications.jrc.ec.europa.eu/repository/handle/JRC135916, accessed 2026-08-13 | Animal reception, slaughter, dressing, cutting, chilling, cleaning, utilities, wastewater, emissions, and specific output process structure without default quantities |
| `eu-pef-2021` | Official guidance (`official_guidance`) | European Commission Recommendation (EU) 2021/2279, consolidated Product Environmental Footprint method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng, accessed 2026-08-13 | Product-specific inventory, company-specific manufacturing data, complete LCI, allocation hierarchy, transparency, data quality, and verification |
