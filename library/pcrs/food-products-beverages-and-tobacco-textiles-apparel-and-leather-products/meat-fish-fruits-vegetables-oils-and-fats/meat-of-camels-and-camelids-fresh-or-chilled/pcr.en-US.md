---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-camels-and-camelids-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of camels and camelids, fresh or chilled

## 1. Scope and Applicability

This PCR applies to factory-gate production of fresh or chilled meat from camels and other camelids, beginning with live animals received at the slaughterhouse and ending with accepted fresh or chilled meat in chilled storage and its declared packaging. It excludes frozen meat, edible and inedible offal as reference products, upstream animal rearing and inbound transport, and downstream distribution, retail, cooking, consumption, and end-of-life.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-camels-and-camelids-fresh-or-chilled |
| classification_refs | CPC 3.0: 21117, exact classification reference |
| covered_products | Fresh or chilled camel and camelid meat supplied as carcasses, sides, quarters, bone-in cuts, or boneless cuts, provided the declared market state remains fresh or chilled. |
| excluded_products | Frozen camelid meat; edible or inedible offal as the reference product; meat from non-camelid species; live animals; upstream rearing and transport; retail, food preparation, consumption, and end-of-life. |
| representative_product | Accepted fresh or chilled camelid meat with declared species, carcass or cut form, bone status, temperature state, packaging, slaughter site, and reporting period. |
| production_route | Live-animal reception and stunning → slaughter and dressing → carcass chilling → cutting and deboning when applicable → packaging and final chilled storage; sanitation and wastewater handling support the actual route. |
| market_state | Fresh or chilled, accepted and released at the factory gate; frozen product and offal are outside the reference-product scope. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Factory-gate supply of accepted fresh or chilled meat from camels or camelids. |
| How much | 1 kg net mass of accepted meat, excluding separately inventoried packaging and non-meat co-products. |
| How well | Meets the declared food-safety, inspection, temperature, species, cut, bone-status, and packaging specification and has not been frozen. |
| How long or cycle | One slaughter and processing output at factory gate; no retail shelf-life, cooking yield, or consumption claim. |
| reference_flow_link | `reference_meat_output` in process `p5_packaging_storage`. |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Meat of camels and camelids, fresh or chilled `43edde93-b716-4329-93a4-2eb708e1e7e3` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | camelid species; sex or production class when material; carcass, side, quarter, or cut form; bone-in or boneless status; fresh or chilled state; product temperature and acceptance point; slaughter and cutting route; edible-product scope; packaging configuration; slaughter site; geography; technology; reporting period |

All Required qualifiers shall be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent field.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference meat | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted net meat mass at the declared chilled factory-gate point before adding separately reported packaging; normalize all exchanges to exactly 1 kg reference output. |
| `live_weight` | live-animal input | Mass | kg live weight | Record individually or lot-weighed live mass at slaughterhouse receipt and preserve animal count and scale evidence. |
| `carcass_mass` | hot and chilled carcasses | Mass | kg | Record hot dressed mass and chilled mass at declared process points; do not mix them without an explicit moisture and chilling-loss reconciliation. |
| `product_mass` | meat, co-products, packaging, and solid wastes | Mass | kg | Use calibrated scales and keep reference meat, edible offal, non-edible co-products, waste, and packaging as separate records. |
| `utility_measurement` | electricity, steam, hot water, fuels, refrigerants, and process water | Applicable energy, mass, or volume | kWh, MJ, kg, or m3 | Prefer process sub-metering; otherwise allocate complete source totals under Section 7 and retain conversion evidence. |
| `temperature_state` | reference product and intermediate carcass | Temperature | degrees Celsius | Record measured product temperature, monitoring location, time, acceptance criterion, and whether any freezing occurred. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live camel or camelid accepted at the slaughterhouse gate with declared species, count, live mass, condition, supplier, and receipt time. |
| starting_condition_role | The live animal is the first foreground product input; animal rearing and inbound transport remain represented by traceable upstream datasets. |
| product_classification_scope | Fresh or chilled camel and camelid meat in the reviewed semantic scope corresponding exactly to CPC 3.0 code 21117. |
| recursive_input_rule | If fresh or chilled camelid meat in the same category enters for further cutting or packing, record one supplier product input with its supplier dataset and do not recursively recreate upstream slaughter processes. |
| upstream_dataset_requirement | Use traceable upstream datasets for animal rearing, inbound transport, utilities, fuels, chemicals, refrigeration, packaging, and externally treated wastes. |
| disclosure | Declare species, starting condition, slaughter and product route, temperature state, cut and bone status, co-product destinations, waste treatment, sanitation, wastewater boundary, allocation, exclusions, upstream datasets, and data gaps. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_rule_1` | foreground slaughterhouse | Include applicable reception, stunning, slaughter, bleeding, dressing, evisceration, inspection, chilling, cutting, packaging, sanitation, refrigeration, wastewater, direct waste, and emission operations. | jrc-sa-bref-2024 |
| `boundary_rule_2` | category scope | Require camel or camelid meat in fresh or chilled state; frozen meat and offal are outside the reference-product scope. | un-cpc-3-0 |
| `boundary_rule_3` | upstream boundary | Keep animal rearing and inbound transport outside the slaughterhouse foreground and connect them through traceable upstream datasets. | ec-pef-method-2021 |
| `boundary_rule_4` | downstream boundary | Exclude distribution, retail, cooking, consumption, and end-of-life unless a downstream lifecyclemodel adds them transparently without double counting. | ec-pef-method-2021 |
| `boundary_rule_5` | co-products and wastes | Keep blood, hide, fat, each edible organ, inedible viscera, bones, digestive contents, condemned material, wastewater, sludge, and packaging waste individually visible with destination and status. | jrc-sa-bref-2024 |
| `boundary_rule_6` | completeness | Record all applicable raw materials, energy, products, co-products, wastes, and direct emissions to air and water; unresolved UUIDs do not justify omission. | ec-pef-method-2021 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p1_reception_stunning` | Live-animal reception and stunning | required | Include lairage, animal identification, welfare checks, ante-mortem disposition, and the actual stunning route. | Produce or support the accepted output and record direct exchanges. | kg stunned live animal |
| `p2_slaughter_dressing` | Slaughter and carcass dressing | required | Include bleeding, hide removal, evisceration, carcass splitting when used, inspection, trimming, and transfer to chilling. | Produce or support the accepted output and record direct exchanges. | kg hot dressed carcass |
| `p3_carcass_chilling` | Carcass chilling and chilled holding | required | Include initial chilling and any chilled carcass holding before cutting; record the actual refrigeration system. | Produce or support the accepted output and record direct exchanges. | kg chilled dressed carcass |
| `p4_cutting_deboning` | Standard cutting and deboning | conditional | Include when the reference product is a quarter or cut; omit for a released whole or side carcass only when no cutting or deboning occurs at the reporting site. | Produce or support the accepted output and record direct exchanges. | kg unpacked fresh or chilled meat |
| `p5_packaging_storage` | Packaging and final chilled storage | required | Include product packaging, final chilled storage, acceptance, and factory-gate release without freezing. | Produce or support the accepted output and record direct exchanges. | 1 kg reference product |
| `p6_cleaning_sanitation` | Equipment and facility cleaning and disinfection | required | Include clean-in-place or manual cleaning and disinfection actually serving the foreground processes; each chemical is separate. | Produce or support the accepted output and record direct exchanges. | 1 kg reference product |
| `p7_wastewater_treatment` | On-site slaughterhouse wastewater treatment | conditional | Include when wastewater is treated on site; otherwise report each wastewater stream to its actual off-site treatment destination. | Produce or support the accepted output and record direct exchanges. | 1 kg reference product |

### Process: Live-animal reception and stunning (`p1_reception_stunning`)

#### Inputs

##### Product flows

###### Live camelid for slaughter (`live_camelid_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Live camelid for slaughter
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass from animal, lot, scale, issue, or transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg stunned live animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_reception_records`
- Sources: `jrc-sa-bref-2024`

###### Process water (`reception_process_water_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered process-water volume or complete site water total allocated by the documented physical rule.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stunned live animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p1_reception_records`
- Sources: `jrc-sa-bref-2024`

###### Electricity, medium voltage (`reception_electricity_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered use or complete meter total allocated with the documented physical driver.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stunned live animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p1_reception_records`
- Sources: `jrc-sa-bref-2024`

###### Low-sulphur diesel fuel (`reception_diesel_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Low-sulphur diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Measured fuel quantity converted with a documented net calorific value and assigned to the process.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stunned live animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p1_reception_records`
- Sources: `jrc-sa-bref-2024`
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Stunned camelid for slaughter (`stunned_camelid_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Stunned camelid for slaughter
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred to the next foreground process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg stunned live animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_reception_records`
- Sources: `jrc-sa-bref-2024`
##### Waste flows

###### Camelid manure (`reception_manure_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Camelid manure
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-transfer mass by named material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stunned live animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_reception_records`
- Sources: `jrc-sa-bref-2024`

###### Waste straw bedding (`reception_bedding_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Waste straw bedding
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-transfer mass by named material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stunned live animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_reception_records`
- Sources: `jrc-sa-bref-2024`

###### Dead-on-arrival camelid carcass (`reception_mortality_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Dead-on-arrival camelid carcass
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-transfer mass by named material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stunned live animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p1_reception_records`
- Sources: `jrc-sa-bref-2024`
##### Elementary flows

###### Carbon dioxide, fossil, to air (`reception_co2_air`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stunned live animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p1_reception_records`
- Sources: `jrc-sa-bref-2024`

###### Nitrogen oxides to air (`reception_nox_air`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg stunned live animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p1_reception_records`
- Sources: `jrc-sa-bref-2024`


### Process: Slaughter and carcass dressing (`p2_slaughter_dressing`)

#### Inputs

##### Product flows

###### Stunned camelid for slaughter (`stunned_camelid_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Stunned camelid for slaughter
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass from animal, lot, scale, issue, or transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Process water (`slaughter_process_water_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered process-water volume or complete site water total allocated by the documented physical rule.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Hot water (`slaughter_hot_water_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered hot-water energy or calculated energy from measured volume and temperature difference.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Electricity, medium voltage (`slaughter_electricity_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered use or complete meter total allocated with the documented physical driver.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Steam (`slaughter_steam_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered steam energy or calculated energy from measured mass and documented steam conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Natural gas (`slaughter_natural_gas_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Measured fuel quantity converted with a documented net calorific value and assigned to the process.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Liquefied petroleum gas (`slaughter_lpg_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Measured fuel quantity converted with a documented net calorific value and assigned to the process.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Hot dressed camelid carcass (`hot_dressed_carcass_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Hot dressed camelid carcass
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred to the next foreground process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Camelid blood (`camel_blood_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Camelid blood
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated mass and declared edible, inedible, sale, treatment, or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Camelid hide (`camel_hide_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Camelid hide
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated mass and declared edible, inedible, sale, treatment, or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Camelid slaughter fat (`camel_fat_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Camelid slaughter fat
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated mass and declared edible, inedible, sale, treatment, or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Edible camelid liver (`edible_liver_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Edible camelid liver
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated mass and declared edible, inedible, sale, treatment, or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Edible camelid heart (`edible_heart_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Edible camelid heart
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated mass and declared edible, inedible, sale, treatment, or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Edible camelid kidney (`edible_kidney_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Edible camelid kidney
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated mass and declared edible, inedible, sale, treatment, or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Inedible camelid viscera (`inedible_viscera_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Inedible camelid viscera
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated mass and declared edible, inedible, sale, treatment, or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`
##### Waste flows

###### Camelid digestive tract contents (`digestive_contents_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Camelid digestive tract contents
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-transfer mass by named material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Condemned camelid tissue (`condemned_tissue_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Condemned camelid tissue
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-transfer mass by named material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Untreated wastewater from camelid slaughter (`slaughter_wastewater_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Untreated wastewater from camelid slaughter
- Flow property / unit: Volume / m3
- Amount rule: Measured volume of this named wastewater stream at the stated process or treatment boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`
##### Elementary flows

###### Carbon dioxide, fossil, to air (`slaughter_co2_air`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Nitrogen oxides to air (`slaughter_nox_air`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`

###### Non-methane volatile organic compounds to air (`slaughter_nmvoc_air`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p2_slaughter_records`
- Sources: `jrc-sa-bref-2024`


### Process: Carcass chilling and chilled holding (`p3_carcass_chilling`)

#### Inputs

##### Product flows

###### Hot dressed camelid carcass (`hot_carcass_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Hot dressed camelid carcass
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass from animal, lot, scale, issue, or transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg chilled dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_chilling_records`
- Sources: `jrc-sa-bref-2024`

###### Electricity, medium voltage (`chilling_electricity_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered use or complete meter total allocated with the documented physical driver.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg chilled dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p3_chilling_records`
- Sources: `jrc-sa-bref-2024`

###### Process water (`chilling_process_water_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered process-water volume or complete site water total allocated by the documented physical rule.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg chilled dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p3_chilling_records`
- Sources: `jrc-sa-bref-2024`

###### Refrigerant R-717 ammonia (`chilling_r717_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Refrigerant R-717 ammonia
- Flow property / unit: Mass / kg
- Amount rule: Opening inventory plus purchases minus closing inventory, recovered amount, and documented transfers.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg chilled dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p3_chilling_records`
- Sources: `jrc-sa-bref-2024`

###### Refrigerant R-404A (`chilling_r404a_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Refrigerant R-404A
- Flow property / unit: Mass / kg
- Amount rule: Opening inventory plus purchases minus closing inventory, recovered amount, and documented transfers.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg chilled dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p3_chilling_records`
- Sources: `jrc-sa-bref-2024`
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled dressed camelid carcass (`chilled_carcass_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Chilled dressed camelid carcass
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred to the next foreground process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg chilled dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_chilling_records`
- Sources: `jrc-sa-bref-2024`
##### Waste flows

###### Wastewater from camelid carcass chilling (`chilling_wastewater_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Wastewater from camelid carcass chilling
- Flow property / unit: Volume / m3
- Amount rule: Measured volume of this named wastewater stream at the stated process or treatment boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg chilled dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_chilling_records`
- Sources: `jrc-sa-bref-2024`

###### Condemned chilled camelid carcass (`chilling_reject_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Condemned chilled camelid carcass
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-transfer mass by named material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg chilled dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p3_chilling_records`
- Sources: `jrc-sa-bref-2024`
##### Elementary flows

###### Ammonia to air (`chilling_ammonia_air`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg chilled dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p3_chilling_records`
- Sources: `jrc-sa-bref-2024`

###### Refrigerant R-404A to air (`chilling_r404a_air`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Refrigerant R-404A to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg chilled dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p3_chilling_records`
- Sources: `jrc-sa-bref-2024`


### Process: Standard cutting and deboning (`p4_cutting_deboning`)

#### Inputs

##### Product flows

###### Chilled dressed camelid carcass (`chilled_carcass_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Chilled dressed camelid carcass
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass from animal, lot, scale, issue, or transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked fresh or chilled meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_cutting_records`
- Sources: `jrc-sa-bref-2024`

###### Electricity, medium voltage (`cutting_electricity_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered use or complete meter total allocated with the documented physical driver.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked fresh or chilled meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p4_cutting_records`
- Sources: `jrc-sa-bref-2024`

###### Process water (`cutting_process_water_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered process-water volume or complete site water total allocated by the documented physical rule.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked fresh or chilled meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p4_cutting_records`
- Sources: `jrc-sa-bref-2024`
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unpacked chilled camelid meat cuts (`fresh_chilled_cuts_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Unpacked chilled camelid meat cuts
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred to the next foreground process.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked fresh or chilled meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_cutting_records`
- Sources: `jrc-sa-bref-2024`

###### Camelid bones (`camel_bones_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Camelid bones
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated mass and declared edible, inedible, sale, treatment, or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked fresh or chilled meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_cutting_records`
- Sources: `jrc-sa-bref-2024`

###### Camelid fat trimmings (`camel_fat_trimmings_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Camelid fat trimmings
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated mass and declared edible, inedible, sale, treatment, or disposal destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg unpacked fresh or chilled meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_cutting_records`
- Sources: `jrc-sa-bref-2024`
##### Waste flows

###### Condemned camelid meat (`condemned_meat_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Condemned camelid meat
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-transfer mass by named material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked fresh or chilled meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_cutting_records`
- Sources: `jrc-sa-bref-2024`

###### Wastewater from camelid meat cutting (`cutting_wastewater_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Wastewater from camelid meat cutting
- Flow property / unit: Volume / m3
- Amount rule: Measured volume of this named wastewater stream at the stated process or treatment boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked fresh or chilled meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p4_cutting_records`
- Sources: `jrc-sa-bref-2024`
##### Elementary flows

###### Carbon dioxide, fossil, to air (`cutting_co2_air`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked fresh or chilled meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p4_cutting_records`
- Sources: `jrc-sa-bref-2024`

###### Nitrogen oxides to air (`cutting_nox_air`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unpacked fresh or chilled meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p4_cutting_records`
- Sources: `jrc-sa-bref-2024`


### Process: Packaging and final chilled storage (`p5_packaging_storage`)

#### Inputs

##### Product flows

###### Chilled dressed camelid carcass (`packaging_chilled_carcass_input`)

Record this single carcass-route input when an accepted whole or side carcass bypasses cutting and enters packaging or final chilled storage directly.

- Selected flow: Chilled dressed camelid carcass
- Flow property / unit: Mass / kg
- Amount rule: Measured accepted mass transferred from carcass chilling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`

###### Unpacked chilled camelid meat cuts (`unpacked_meat_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Unpacked chilled camelid meat cuts
- Flow property / unit: Mass / kg
- Amount rule: Measured net mass from animal, lot, scale, issue, or transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`

###### Electricity, medium voltage (`packaging_electricity_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered use or complete meter total allocated with the documented physical driver.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`

###### Refrigerant R-717 ammonia (`packaging_r717_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Refrigerant R-717 ammonia
- Flow property / unit: Mass / kg
- Amount rule: Opening inventory plus purchases minus closing inventory, recovered amount, and documented transfers.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`

###### Refrigerant R-404A (`packaging_r404a_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Refrigerant R-404A
- Flow property / unit: Mass / kg
- Amount rule: Opening inventory plus purchases minus closing inventory, recovered amount, and documented transfers.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`

###### Polyamide-polyethylene vacuum meat bag (`vacuum_bag_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Polyamide-polyethylene vacuum meat bag
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging mass from specifications, purchase records, and product-specific packing counts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`

###### Low-density polyethylene meat shrink bag (`shrink_bag_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Low-density polyethylene meat shrink bag
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging mass from specifications, purchase records, and product-specific packing counts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`

###### Corrugated paperboard meat carton (`corrugated_carton_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Corrugated paperboard meat carton
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging mass from specifications, purchase records, and product-specific packing counts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`

###### High-density polyethylene reusable meat crate (`hdpe_crate_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: High-density polyethylene reusable meat crate
- Flow property / unit: Mass / kg
- Amount rule: Measured replacement or loss mass allocated over documented crate uses; do not record circulating crate throughput as consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`

###### Linear low-density polyethylene pallet stretch film (`pallet_stretch_film_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Linear low-density polyethylene pallet stretch film
- Flow property / unit: Mass / kg
- Amount rule: Measured packaging mass from specifications, purchase records, and product-specific packing counts.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh or chilled camelid meat (`reference_meat_output`)

This is the accepted factory-gate reference product. It excludes frozen meat, edible or inedible offal, and separately inventoried packaging mass.

- Selected flow: Meat of camels and camelids, fresh or chilled `43edde93-b716-4329-93a4-2eb708e1e7e3`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg in Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: exactly 1 kg net mass of accepted fresh or chilled meat.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### Rejected packaged camelid meat (`packaging_reject_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Rejected packaged camelid meat
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-transfer mass by named material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`

###### Waste polyamide-polyethylene film (`waste_vacuum_bag_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Waste polyamide-polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-transfer mass by named material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`

###### Waste low-density polyethylene film (`waste_ldpe_film_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Waste low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-transfer mass by named material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`

###### Waste corrugated paperboard (`waste_corrugated_carton_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Waste corrugated paperboard
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-transfer mass by named material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`

###### Waste linear low-density polyethylene stretch film (`waste_stretch_film_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Waste linear low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-transfer mass by named material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`
##### Elementary flows

###### Ammonia to air (`packaging_ammonia_air`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`

###### Refrigerant R-404A to air (`packaging_r404a_air`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Refrigerant R-404A to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p5_packaging_records`
- Sources: `jrc-sa-bref-2024`


### Process: Equipment and facility cleaning and disinfection (`p6_cleaning_sanitation`)

#### Inputs

##### Product flows

###### Process water (`sanitation_process_water_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered process-water volume or complete site water total allocated by the documented physical rule.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p6_sanitation_records`
- Sources: `jrc-sa-bref-2024`

###### Hot water (`sanitation_hot_water_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered hot-water energy or calculated energy from measured volume and temperature difference.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p6_sanitation_records`
- Sources: `jrc-sa-bref-2024`

###### Electricity, medium voltage (`sanitation_electricity_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered use or complete meter total allocated with the documented physical driver.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p6_sanitation_records`
- Sources: `jrc-sa-bref-2024`

###### Steam (`sanitation_steam_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered delivered steam energy or calculated energy from measured mass and documented steam conditions.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p6_sanitation_records`
- Sources: `jrc-sa-bref-2024`

###### Natural gas (`sanitation_natural_gas_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Measured fuel quantity converted with a documented net calorific value and assigned to the process.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p6_sanitation_records`
- Sources: `jrc-sa-bref-2024`

###### Sodium hydroxide cleaning solution (`sodium_hydroxide_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg
- Amount rule: Measured active-product mass from chemical issue, concentration, and solution-use records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p6_sanitation_records`
- Sources: `jrc-sa-bref-2024`

###### Peracetic acid disinfectant solution (`peracetic_acid_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Peracetic acid disinfectant solution
- Flow property / unit: Mass / kg
- Amount rule: Measured active-product mass from chemical issue, concentration, and solution-use records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p6_sanitation_records`
- Sources: `jrc-sa-bref-2024`

###### Sodium hypochlorite disinfectant solution (`sodium_hypochlorite_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Sodium hypochlorite disinfectant solution
- Flow property / unit: Mass / kg
- Amount rule: Measured active-product mass from chemical issue, concentration, and solution-use records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p6_sanitation_records`
- Sources: `jrc-sa-bref-2024`
##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Untreated wastewater from slaughterhouse sanitation (`sanitation_wastewater_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Untreated wastewater from slaughterhouse sanitation
- Flow property / unit: Volume / m3
- Amount rule: Measured volume of this named wastewater stream at the stated process or treatment boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p6_sanitation_records`
- Sources: `jrc-sa-bref-2024`

###### Waste high-density polyethylene chemical container (`empty_chemical_container_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Waste high-density polyethylene chemical container
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-transfer mass by named material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p6_sanitation_records`
- Sources: `jrc-sa-bref-2024`
##### Elementary flows

###### Non-methane volatile organic compounds to air (`sanitation_nmvoc_air`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Non-methane volatile organic compounds to air
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p6_sanitation_records`
- Sources: `jrc-sa-bref-2024`


### Process: On-site slaughterhouse wastewater treatment (`p7_wastewater_treatment`)

#### Inputs

##### Product flows

###### Electricity, medium voltage (`wastewater_electricity_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered use or complete meter total allocated with the documented physical driver.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p7_wastewater_records`
- Sources: `jrc-sa-bref-2024`

###### Ferric chloride coagulant (`ferric_chloride_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Ferric chloride coagulant
- Flow property / unit: Mass / kg
- Amount rule: Measured active-product mass from chemical issue, concentration, and solution-use records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p7_wastewater_records`
- Sources: `jrc-sa-bref-2024`

###### Polyacrylamide flocculant (`polyacrylamide_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Polyacrylamide flocculant
- Flow property / unit: Mass / kg
- Amount rule: Measured active-product mass from chemical issue, concentration, and solution-use records.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p7_wastewater_records`
- Sources: `jrc-sa-bref-2024`
##### Waste flows

###### Untreated wastewater from camelid slaughter (`slaughter_wastewater_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Untreated wastewater from camelid slaughter
- Flow property / unit: Volume / m3
- Amount rule: Measured volume of this named wastewater stream at the stated process or treatment boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p7_wastewater_records`
- Sources: `jrc-sa-bref-2024`

###### Wastewater from camelid carcass chilling (`chilling_wastewater_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Wastewater from camelid carcass chilling
- Flow property / unit: Volume / m3
- Amount rule: Measured volume of this named wastewater stream at the stated process or treatment boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p7_wastewater_records`
- Sources: `jrc-sa-bref-2024`

###### Wastewater from camelid meat cutting (`cutting_wastewater_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Wastewater from camelid meat cutting
- Flow property / unit: Volume / m3
- Amount rule: Measured volume of this named wastewater stream at the stated process or treatment boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p7_wastewater_records`
- Sources: `jrc-sa-bref-2024`

###### Untreated wastewater from slaughterhouse sanitation (`sanitation_wastewater_input`)

Record this one named exchange entering the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Untreated wastewater from slaughterhouse sanitation
- Flow property / unit: Volume / m3
- Amount rule: Measured volume of this named wastewater stream at the stated process or treatment boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p7_wastewater_records`
- Sources: `jrc-sa-bref-2024`
##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Treated slaughterhouse effluent (`treated_effluent_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Treated slaughterhouse effluent
- Flow property / unit: Volume / m3
- Amount rule: Measured volume of this named wastewater stream at the stated process or treatment boundary.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p7_wastewater_records`
- Sources: `jrc-sa-bref-2024`

###### Slaughterhouse wastewater screenings (`wastewater_screenings_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Slaughterhouse wastewater screenings
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-transfer mass by named material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p7_wastewater_records`
- Sources: `jrc-sa-bref-2024`

###### Slaughterhouse wastewater treatment sludge (`wastewater_sludge_output`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Slaughterhouse wastewater treatment sludge
- Flow property / unit: Mass / kg
- Amount rule: Measured segregated waste-transfer mass by named material and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_p7_wastewater_records`
- Sources: `jrc-sa-bref-2024`
##### Elementary flows

###### Chemical oxygen demand to water (`effluent_cod_water`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p7_wastewater_records`
- Sources: `jrc-sa-bref-2024`

###### Total nitrogen to water (`effluent_total_n_water`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p7_wastewater_records`
- Sources: `jrc-sa-bref-2024`

###### Total phosphorus to water (`effluent_total_p_water`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p7_wastewater_records`
- Sources: `jrc-sa-bref-2024`

###### Suspended solids to water (`effluent_tss_water`)

Record this one named exchange leaving the process when applicable; retain its measured identity, route condition, and destination.

- Selected flow: Suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: Measured release or calculated load from monitored activity data and a documented factor or concentration.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_p7_wastewater_records`
- Sources: `jrc-sa-bref-2024`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | foreground processes | Avoid allocation by separate metering, batch tracing, process subdivision, and direct mass assignment whenever records permit. | ec-pef-method-2021 |
| `allocation_rule_2` | edible and non-edible outputs | Record mass, legal or food status, destination, and revenue for reference meat, each edible organ, blood, hide, fat, bones, viscera, and condemned material before allocation. | jrc-sa-bref-2024; ec-pef-method-2021 |
| `allocation_rule_3` | physically attributable burdens | Assign operations and resources directly when a physical causal relationship is documented, such as cutting energy to the actual cut route or packaging to packed meat. | ec-pef-method-2021 |
| `allocation_rule_4` | residual multifunctionality | When subdivision and physical causality cannot resolve multifunctionality, use a documented PEF-consistent allocation basis supported by contemporaneous market values; disclose prices, averaging period, shares, and sensitivity. | ec-pef-method-2021 |
| `allocation_rule_5` | waste and recovery | Keep gross inputs, internal recovery, exported co-products, wastes, and final outputs visible; do not apply avoided-burden credits unless a downstream model explicitly requires them. | ec-pef-method-2021 |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_p1_reception_records` | `p1_reception_stunning` | live animals, utilities, manure, bedding, mortalities, emissions | receipt; scale; lairage; fuel and meter logs | species; lot; count; live_mass; receipt_time; water; electricity; diesel; manure; bedding; mortality | Match accepted animals and reception records to stunned-animal output. | kg; count; m3; kWh; MJ | receipt and shift | representative declared period | all reception/stunning areas | Aggregate by species/class and reconcile count/mass. | calibrated scale; traceability; meters |
| `cp_p2_slaughter_records` | `p2_slaughter_dressing` | animal, utilities, carcass, co-products, waste, wastewater, emissions | slaughter lot; scales; inspection; transfers | lot; count; live_mass; hot_mass; each_output_mass; destination; utilities; wastewater; emission activity | Link each lot to carcass, every co-product, condemnation, and utility record. | kg; count; m3; kWh; MJ | lot and shift | representative declared period | all slaughter/dressing lines | Reconcile lot mass before normalization. | calibrated scales/meters; inspection; receipts; balance |
| `cp_p3_chilling_records` | `p3_carcass_chilling` | carcass, refrigeration, water, rejects, wastewater, emissions | scales; temperature; meter; service | lot; hot_mass; chilled_mass; time; temperature; electricity; water; refrigerant; reject; wastewater | Match mass and temperature history to refrigeration records. | kg; Celsius; kWh; m3 | lot and continuous temperature | representative declared period | all chill rooms | Normalize to accepted chilled mass. | scale; logger; meter; service record |
| `cp_p4_cutting_records` | `p4_cutting_deboning` | carcass, utilities, meat, bones, fat, rejects, wastewater | cutting lot; cut sheet; scales; meters | lot; input; cuts; bones; fat; condemned; water; electricity; wastewater | Reconcile each cutting lot by form and bone status. | kg; kWh; m3 | lot and shift | representative declared period | all cutting rooms | Aggregate compatible cuts after lot balance. | scales/meters; cut sheet; inspection |
| `cp_p5_packaging_records` | `p5_packaging_storage` | meat, refrigeration, packaging, reject, waste, reference output | packing lot; scale; specs; cold-store meters | lot; product_form; net_mass; each_packaging_mass; accepted; reject; electricity; refrigerant; temperature | Match packed lot and cold-store records to accepted net output. | kg; kWh; Celsius | lot and continuous temperature | representative declared period | all packing/cold storage | Normalize to exactly 1 kg net meat. | scale; specs; logger; service record |
| `cp_p6_sanitation_records` | `p6_cleaning_sanitation` | water, heat, utilities, chemicals, wastewater | schedule; chemical issue; meters; concentration | area; cycle; water; hot_water; steam; electricity; gas; each solution; concentration; wastewater | Match sanitation cycles to serviced areas and lots. | kg; m3; kWh; MJ | sanitation cycle | representative declared period | all serviced areas | Calculate active chemical mass and allocate by verified cleaning driver. | sign-off; SDS; concentration; meters |
| `cp_p7_wastewater_records` | `p7_wastewater_treatment` | wastewater, chemicals, electricity, effluent, screenings, sludge, water emissions | flow meter; treatment log; issue; samples | source; volume; electricity; chemical; effluent; screenings; sludge; COD; N; P; TSS | Keep source streams separate and reconcile treatment output and loads. | m3; kg; kWh | continuous flow and sampling | representative declared period | on-site treatment | Calculate loads from matched flow/concentration. | calibration; lab QA; custody; balance |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all exchanges | normalized exchange = period exchange × attribution share ÷ accepted net reference-meat mass | exchange; share; mass | exchange per kg | ec-pef-method-2021 |
| `calc_slaughter_mass_balance` | slaughter | live input = carcass + each co-product + each waste + process mass change + residual | input/output masses | balance and residual | jrc-sa-bref-2024 |
| `calc_chilling_loss` | chilling | mass change = hot carcass mass − chilled carcass mass by matched lot/time | hot and chilled mass | kg change | jrc-sa-bref-2024 |
| `calc_cutting_balance` | cutting | chilled carcass = unpacked meat + bones + fat + condemned meat + residual | input/output masses | cutting balance | jrc-sa-bref-2024 |
| `calc_shared_utilities` | shared utilities | allocated utility = complete total × documented meter, runtime/load, area, or throughput share | total; driver | utility by process | ec-pef-method-2021 |
| `calc_fuel_energy` | individual fuels | energy = measured fuel × documented net calorific value | fuel; factor | MJ | ec-pef-method-2021 |
| `calc_refrigerant_loss` | individual refrigerants | loss = opening + purchases − closing − recovered − transfers | stock/service records | kg loss | ec-pef-method-2021 |
| `calc_active_chemical` | individual chemicals | active mass = solution mass × documented active concentration | solution; concentration | kg active | jrc-sa-bref-2024 |
| `calc_effluent_load` | individual water emissions | load = matched effluent volume × representative concentration with unit conversion | volume; concentration | kg to water | jrc-sa-bref-2024 |
| `calc_economic_allocation` | residual co-product allocation | share = revenue of named output ÷ total contemporaneous revenue of allocated outputs | mass; price; period | burden share | ec-pef-method-2021 |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | animals and product | Preserve species, lot, slaughter identity, product form, temperature, inspection status, and verified reference UUIDs; keep other UUID gaps explicit. | traceability; specification; manifest |
| `dq_mass_balance` | slaughter and cutting | Reconcile live mass, hot/chilled carcass, meat, each co-product, each waste, mass change, and residual. | scales; lot balance |
| `dq_temperature` | chilled product | Retain temperature records and evidence that reference meat was not frozen. | calibrated logger; release record |
| `dq_temporal` | foreground data | Use one representative declared period and disclose atypical operations and seasonal limits. | logs; register |
| `dq_measurement` | measured/calculated flows | Retain boundary, calibration, concentration, sampling, conversion, drivers, and limitations. | meter map; certificates; lab reports |
| `dq_completeness` | LCI | Cover applicable materials, energy, products, co-products, wastes, and air/water releases; explain exclusions. | checklist; balances |
| `dq_destination` | outputs | Record food status, disposition, treatment, sale, reuse, or disposal for every named output. | inspection; transfers |
| `dq_transparency` | publication | Disclose boundary, allocation, prices, datasets, gaps, UUID gaps, exclusions, uncertainty, and verification. | report; review |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference identity | Require exactly the verified product-flow, Mass-property, Units-of-mass UUIDs, and kg. |  |
| `validation_rule_2` | scope | Require camel or camelid meat in fresh or chilled state; reject frozen meat and offal as reference product. | un-cpc-3-0 |
| `validation_rule_3` | reference amount | Require exactly 1 kg accepted net meat and separate packaging and co-products. | ec-pef-method-2021 |
| `validation_rule_4` | process coverage | Include actual reception, slaughter, dressing, chilling, cutting, packaging, sanitation, refrigeration, wastewater, waste, and emissions. | jrc-sa-bref-2024 |
| `validation_rule_5` | atomic inventory | Reject collection labels and combined utilities, fuels, refrigerants, chemicals, packaging, co-products, wastes, or emissions. |  |
| `validation_rule_6` | balances | Require compatible slaughter, chilling, and cutting balances with disclosed residuals. | jrc-sa-bref-2024 |
| `validation_rule_7` | allocation | Verify subdivision, assignments, basis, totals, shares, prices, period, and sensitivity. | ec-pef-method-2021 |
| `validation_rule_8` | temperature | Require point, criterion, monitoring, release status, and confirmation product was not frozen. | un-cpc-3-0; jrc-sa-bref-2024 |
| `validation_rule_9` | wastewater | Require each source stream, boundary, volume, sampling basis, and separate pollutant loads. | jrc-sa-bref-2024 |
| `validation_rule_10` | evidence gaps | Reject invented quantities and unconfirmed UUIDs; keep absent values as collection requirements. | ec-pef-method-2021 |
| `validation_rule_11` | double counting | Do not duplicate rearing, inbound transport, upstream materials, external waste treatment, or downstream stages. | ec-pef-method-2021 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground slaughtering and processing dataset for fresh or chilled camelid meat. |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` after all gates pass. |
| allowed_use | Factory-gate modelling of declared species, form, cut/bone status, temperature, route, site, technology, period, and packaging. |
| excluded_use | Frozen meat; offal as reference; non-camelid meat; rearing, shelf-life, cooking, nutrition, consumption, or end-of-life claims; undisclosed route/allocation. |
| required_metadata | PCR id/version; UUIDs; species; animal class; product form; cut/bone status; fresh/chilled state; temperature; route; inspection; edible scope; packaging; site; geography; technology; period; boundary; allocation; destinations; datasets; review. |
| required_quality_disclosure | Primary coverage; traceability; balances; temperature; metering; allocation/prices; co-product status; wastewater sampling; gaps; UUID gaps; exclusions; uncertainty; verification. |
| update_trigger | Change in scope, identity, species, form, temperature, technology, refrigeration, sanitation, packaging, wastewater, allocation, regulation, method, or representativeness. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0 official entry and repository raw structure title for subclass 21117. https://unstats.un.org/unsd/classifications/Econ/CPC (offline verified source package, 2026-08-13). | Exact fresh-or-chilled camelid-meat scope and exclusion of frozen meat and offal. |
| `jrc-sa-bref-2024` | `official_guidance` | European Commission Joint Research Centre, BAT Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, DOI:10.2760/18199. | Reception, slaughter, cutting, chilling, storage, cleaning, utilities, wastewater, and named co-products; no default amount imported. |
| `ec-pef-method-2021` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279, consolidated Product Environmental Footprint method. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng (offline verified official full text). | Product inventory, company data, complete LCI, allocation, transparency, quality, and validation. |
