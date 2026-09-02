---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-sheep-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of sheep, fresh or chilled

## 1. Scope and Applicability

This PCR applies to net, conforming sheep meat placed on the market fresh or chilled under CPC 3.0 code 21115. The foreground begins with live sheep accepted at the slaughterhouse and covers lairage, slaughter and dressing, carcass chilling, cutting, packaging, chilled storage, sanitation, and on-site wastewater handling through the factory gate.

Frozen sheep meat, edible or inedible offal as reference products, rendered products, prepared meat, and meat of species other than sheep are excluded. Sheep farming, feed production, live-animal transport, distribution, retail, cooking, use, and end-of-life are outside the foreground boundary and require separate traceable datasets when included in a wider study.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-sheep-fresh-or-chilled |
| classification_refs | CPC 3.0: 21115, exact scope reference |
| covered_products | Fresh or chilled meat of sheep, as carcass, cuts, or portions, meeting the declared product specification |
| excluded_products | Frozen sheep meat; sheep offal as the reference product; rendered or prepared sheep products; meat of goats or other species; farming, transport, retail, use, and end-of-life services |
| representative_product | One declared fresh or chilled sheep-meat product specification at the slaughterhouse or cutting-plant factory gate |
| production_route | Live-animal receiving and lairage; slaughter and dressing; chilling; cutting and packaging when applicable; chilled storage; sanitation and wastewater handling |
| market_state | Net fresh or chilled sheep meat at factory gate, with temperature state, cut form, bone status, and packaging configuration declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide edible sheep meat in the declared fresh or chilled state and cut form |
| How much | 1 kg net conforming product at factory gate |
| How well | Meets the declared species, cut, bone status, temperature, hygiene, quality grade, and packaging specification |
| How long or cycle | At factory-gate release; the declared chilled holding time is reported, but no default shelf life is imposed |
| reference_flow_link | The net mass of conforming fresh or chilled sheep meat required to provide the declared product function; packaging is excluded from product mass and recorded separately |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Meat of sheep, fresh or chilled `f77c69e0-fe2f-421a-9f33-23b4a09bd9ba` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | sheep species confirmation; product cut or carcass form; bone-in or boneless status; fresh or chilled state; product temperature at release; net product mass; edible specification and grade; slaughter and cutting sites; production period; chilled holding time; packaging configuration; allocation method; co-product dispositions; wastewater route |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net mass of conforming fresh or chilled sheep meat; exclude packaging, free liquid, offal, and non-conforming material. |
| `live_mass` | live sheep input | Mass | kg live mass | Use calibrated arrival or accepted live-mass records and state whether fasting or shrink affects the measured basis. |
| `product_state` | meat and intermediate carcass flows | Mass | kg | Record weighing point, temperature state, bone status, and whether the mass is hot carcass, chilled carcass, or saleable meat. |
| `carrier_conversion` | electricity, steam, hot water, natural gas, diesel, and LPG | Energy or carrier quantity | original meter unit and kWh or MJ | Preserve original readings and document calorific values and conversion factors; never merge distinct carriers. |
| `water_balance` | water and wastewater | Mass or volume | kg or m3 | Reconcile supplied water, retained water, evaporation, product carryover, and each wastewater stream on a consistent period basis. |

## 5. System Boundary

The foreground starts when live sheep are accepted at the slaughterhouse gate and ends when conforming fresh or chilled sheep meat leaves chilled storage at the factory gate. Animal husbandry and inbound livestock transport remain upstream. The foreground includes directly operated and subcontracted slaughter, chilling, cutting, packaging, sanitation, and wastewater operations when they contribute to the declared product.

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate` | foreground system | Start at accepted live sheep and end at net conforming fresh or chilled meat released from factory-gate chilled storage. | `un-cpc-3-2025`; `ec-jrc-sa-bref-jrc135916` |
| `boundary_exclusions` | wider life cycle | Keep farming, feed, inbound transport, distribution, retail, cooking, use, and end-of-life outside this foreground package and link them separately when required. | `un-cpc-3-2025`; `eu-pef-2021` |
| `boundary_product_state` | reference product | Reject frozen meat and offal as the reference product; disclose temperature state, cut form, and bone status. | `un-cpc-3-2025` |
| `boundary_site_coverage` | manufacturing sites | Include all operated and subcontracted foreground sites responsible for slaughter, chilling, cutting, packaging, sanitation, or wastewater handling. | `eu-pef-2021` |
| `boundary_complete_lci` | inventory | Record relevant material, energy, product, co-product, waste, and air and water exchanges separately, with transparent exclusions. | `eu-pef-2021`; `ec-jrc-sa-bref-jrc135916` |

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live sheep accepted after identity and ante-mortem controls, with supplier, origin, live mass, batch, and transport handover recorded. |
| starting_condition_role | Live sheep are the purchased biological product input; husbandry and inbound transport are represented by separate upstream datasets. |
| product_classification_scope | Fresh or chilled sheep meat under CPC 3.0 code 21115; frozen meat and offal reference products are excluded. |
| recursive_input_rule | Purchased fresh or chilled sheep meat already within this category is recorded as one upstream product input with its own dataset and is not recursively decomposed inside the foreground package. |
| upstream_dataset_requirement | Link live sheep, farming, inbound transport, water, electricity, fuels, steam, hot water, refrigerant, chemicals, and packaging to traceable upstream datasets; disclose every proxy and geographic mismatch. |
| disclosure | Declare species evidence, live-mass basis, slaughter and cutting configuration, product form, bone status, chilling route, temperature, holding time, sites and subcontractors, co-product destinations, allocation, sanitation, wastewater treatment, geography, period, and data gaps. |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `animal_receiving_lairage` | Live-sheep receiving and lairage | `required` | Always included from slaughterhouse acceptance through release to slaughter | foreground production | kg accepted live sheep and kg rested sheep transferred |
| `slaughter_dressing` | Slaughter and carcass dressing | `required` | Always included for slaughterhouse production | foreground production | kg hot dressed sheep carcass |
| `carcass_chilling` | Carcass chilling | `required` | Always included to establish the fresh or chilled state | foreground conditioning | kg chilled sheep carcass |
| `cutting_packaging` | Cutting and packaging | `conditional` | Include when carcasses are cut, deboned, portioned, or packaged before release | foreground production | kg packaged fresh or chilled sheep meat |
| `chilled_storage` | Factory-gate chilled storage | `required` | Include storage through release from the foreground gate | foreground conditioning | kg conforming fresh or chilled sheep meat released |
| `sanitation_wastewater` | Sanitation and wastewater handling | `required` | Include site sanitation and the actual on-site or transfer wastewater route | foreground support | m3 stage wastewater received and treated or transferred |

### Process: Live-sheep receiving and lairage (`animal_receiving_lairage`)

#### Inputs

##### Product flows

###### Accepted live sheep (`live_sheep_input`)

Live sheep cross the foreground gate after acceptance and are linked to supplier and upstream husbandry records.

- Selected flow: Live sheep for slaughter
- Flow property / unit: Mass / kg live mass
- Amount rule: Calibrated accepted live mass for the production batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per receiving batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving_lairage`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Lairage process water (`process_water_lairage`)

Water supplied for animal watering and lairage cleaning is metered for this stage only.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or allocated lairage water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg rested sheep transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving_lairage`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Receiving and lairage electricity (`electricity_receiving`)

Electricity for unloading equipment, ventilation, lighting, and stage pumps is recorded separately.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or documented allocation from the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg rested sheep transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving_lairage`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

###### Diesel for receiving equipment (`diesel_receiving`)

Diesel is conditional on directly operated diesel equipment or a site generator and is absent only with documented evidence.

- Selected flow: Diesel fuel
- Flow property / unit: Mass or volume / kg or L
- Amount rule: Metered or inventory-reconciled diesel consumed by this stage when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg rested sheep transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving_lairage`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Rested sheep transferred to slaughter (`rested_sheep_output`)

Accepted sheep released from lairage retain the receiving batch identity and are weighed or reconciled by count and live mass.

- Selected flow: Rested live sheep for slaughter
- Flow property / unit: Mass / kg live mass
- Amount rule: Measured or reconciled live mass transferred to slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per receiving batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving_lairage`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Waste flows

###### Lairage sheep manure (`lairage_manure`)

Collected sheep manure is weighed separately from wash water and assigned its actual recovery or treatment destination.

- Selected flow: Sheep manure from lairage
- Flow property / unit: Mass / kg
- Amount rule: Measured collected manure sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg rested sheep transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving_lairage`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Lairage wash water (`lairage_wastewater`)

Wash water leaving lairage is measured independently and transferred to the declared wastewater route.

- Selected flow: Sheep-lairage wash water
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or water-balance result for lairage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg rested sheep transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving_lairage`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Dead sheep carcass waste (`dead_sheep_carcass_waste`)

An animal rejected or dead before slaughter is weighed as a distinct waste flow and linked to its legal disposition.

- Selected flow: Dead sheep carcass waste
- Flow property / unit: Mass / kg
- Amount rule: Measured mass sent to the documented treatment route when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per receiving batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_animal_receiving_lairage`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Elementary flows

###### Fossil carbon dioxide from receiving diesel (`carbon_dioxide_diesel_air`)

Direct fossil carbon dioxide is calculated only for diesel combusted in foreground equipment.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from reconciled diesel use and the documented carbon or emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg rested sheep transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_animal_receiving_lairage`
- Sources: `eu-pef-2021`

### Process: Slaughter and carcass dressing (`slaughter_dressing`)

#### Inputs

##### Product flows

###### Rested sheep input (`rested_sheep_input`)

Rested sheep enter slaughter under the same batch identity used at receiving.

- Selected flow: Rested live sheep for slaughter
- Flow property / unit: Mass / kg live mass
- Amount rule: Measured or reconciled mass received from lairage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per slaughter batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Slaughter process water (`process_water_slaughter`)

Water used for slaughter and carcass dressing is metered separately from lairage and sanitation water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or allocated slaughter-process water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Slaughter electricity (`electricity_slaughter`)

Electricity for stunning, hoisting, dressing equipment, extraction, and pumps is recorded for slaughter only.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or documented allocation from the site meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

###### Purchased slaughter steam (`purchased_steam_slaughter`)

Purchased steam is conditional on the actual heat system and is recorded at the delivery meter without merging it with hot water or fuels.

- Selected flow: Purchased steam
- Flow property / unit: Mass or energy / kg or MJ
- Amount rule: Metered purchased steam used by slaughter when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Natural gas for slaughter heat (`natural_gas_slaughter`)

Natural gas is conditional on direct site combustion for slaughter heat and is reconciled separately from LPG.

- Selected flow: Natural gas
- Flow property / unit: Energy or volume / MJ or m3
- Amount rule: Metered slaughter-attributable gas use with declared calorific value when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### LPG for slaughter heat (`lpg_slaughter`)

LPG is conditional on direct LPG-fired heating and is recorded independently from natural gas and steam.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Inventory-reconciled LPG consumed for slaughter heat when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Hot dressed sheep carcass (`dressed_sheep_carcass`)

The dressed carcass is weighed at the declared hot-carcass point before chilling.

- Selected flow: Hot dressed sheep carcass
- Flow property / unit: Mass / kg
- Amount rule: Calibrated hot-carcass mass for the batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per slaughter batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Collected sheep blood (`sheep_blood`)

Blood recovered as a saleable or usable output is weighed separately and its destination is documented.

- Selected flow: Sheep blood
- Flow property / unit: Mass / kg
- Amount rule: Measured blood mass sent to the declared product destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per slaughter batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Fresh sheep liver (`fresh_sheep_liver`)

Liver approved for edible use is weighed as its own co-product and is not part of the CPC 21115 reference mass.

- Selected flow: Fresh sheep liver
- Flow property / unit: Mass / kg
- Amount rule: Measured approved liver mass sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per slaughter batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `un-cpc-3-2025`; `ec-jrc-sa-bref-jrc135916`

###### Fresh sheep kidney (`fresh_sheep_kidney`)

Kidney approved for edible use is weighed independently from liver and heart.

- Selected flow: Fresh sheep kidney
- Flow property / unit: Mass / kg
- Amount rule: Measured approved kidney mass sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per slaughter batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `un-cpc-3-2025`; `ec-jrc-sa-bref-jrc135916`

###### Fresh sheep heart (`fresh_sheep_heart`)

Heart approved for edible use is weighed independently from other anatomical outputs.

- Selected flow: Fresh sheep heart
- Flow property / unit: Mass / kg
- Amount rule: Measured approved heart mass sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per slaughter batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `un-cpc-3-2025`; `ec-jrc-sa-bref-jrc135916`

###### Raw sheepskin (`raw_sheepskin`)

Removed sheepskin is weighed before preservation or transfer and its actual destination is retained.

- Selected flow: Raw sheepskin
- Flow property / unit: Mass / kg
- Amount rule: Measured raw sheepskin mass transferred from dressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per slaughter batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Sheep adipose tissue from dressing (`sheep_fat_slaughter`)

Fat removed during dressing is weighed separately from meat, blood, skin, and condemned tissue.

- Selected flow: Sheep adipose tissue from dressing
- Flow property / unit: Mass / kg
- Amount rule: Measured fat mass sent to the declared product destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per slaughter batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Waste flows

###### Sheep rumen content (`sheep_rumen_content`)

Rumen content is weighed or mass-balanced as one distinct organic waste stream with its treatment route recorded.

- Selected flow: Sheep rumen content
- Flow property / unit: Mass / kg
- Amount rule: Measured or mass-balanced rumen content sent to the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per slaughter batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Condemned sheep lung (`condemned_sheep_lung`)

Condemned lung is weighed separately and linked to its controlled treatment route.

- Selected flow: Condemned sheep lung
- Flow property / unit: Mass / kg
- Amount rule: Measured condemned lung mass sent to the documented route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per slaughter batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Sheep-slaughter wastewater (`slaughter_wastewater`)

Process wastewater from slaughter and dressing is measured independently from lairage and cutting wastewater.

- Selected flow: Sheep-slaughter process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or slaughter-stage water-balance result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Elementary flows

###### Fossil carbon dioxide from natural gas (`carbon_dioxide_natural_gas_air`)

Direct fossil carbon dioxide from slaughter-attributable natural-gas combustion is calculated independently.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from reconciled natural-gas use and documented carbon or emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `eu-pef-2021`

###### Fossil carbon dioxide from LPG (`carbon_dioxide_lpg_air`)

Direct fossil carbon dioxide from slaughter-attributable LPG combustion is calculated separately from natural gas.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from reconciled LPG use and documented carbon or emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg hot dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_dressing`
- Sources: `eu-pef-2021`

### Process: Carcass chilling (`carcass_chilling`)

#### Inputs

##### Product flows

###### Hot dressed carcass input (`dressed_carcass_input`)

Hot carcasses enter chilling with batch, mass, and time records preserved.

- Selected flow: Hot dressed sheep carcass
- Flow property / unit: Mass / kg
- Amount rule: Measured hot-carcass mass received from dressing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilling batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_chilling`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Carcass-chilling electricity (`electricity_chilling`)

Electricity for refrigeration, fans, controls, and chilling-room operation is recorded for this stage only.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or documented refrigeration-load allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg chilled carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_chilling`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

###### R-717 refrigerant supplied to carcass chilling (`ammonia_r717_chilling`)

Ammonia refrigerant is conditional on an R-717 system and is reconciled from charge, purchase, recovery, and service records.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: Net R-717 make-up supplied to the carcass-chilling system when applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg chilled carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carcass_chilling`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled sheep carcass (`chilled_sheep_carcass`)

The carcass is weighed after the declared chilling period and linked to temperature records.

- Selected flow: Chilled sheep carcass
- Flow property / unit: Mass / kg
- Amount rule: Calibrated chilled-carcass mass released from chilling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilling batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_chilling`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Waste flows

###### Carcass-chilling condensate (`chilling_condensate`)

Condensate collected from the carcass-chilling area is measured separately from other wastewater.

- Selected flow: Carcass-chilling condensate
- Flow property / unit: Volume / m3
- Amount rule: Metered or collected condensate volume transferred to the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg chilled carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_carcass_chilling`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Elementary flows

###### R-717 loss from carcass chilling (`ammonia_r717_chilling_air`)

Direct ammonia refrigerant loss is calculated from the carcass-chilling refrigerant balance.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered R-717 loss assigned to carcass chilling
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg chilled carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_carcass_chilling`
- Sources: `ec-jrc-sa-bref-jrc135916`

### Process: Cutting and packaging (`cutting_packaging`)

#### Inputs

##### Product flows

###### Chilled carcass input (`chilled_carcass_input`)

Chilled carcasses entering cutting retain the chilling batch identity and measured mass.

- Selected flow: Chilled sheep carcass
- Flow property / unit: Mass / kg
- Amount rule: Measured chilled-carcass mass received for cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cutting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Cutting process water (`process_water_cutting`)

Water directly used in cutting-area operations is metered separately from sanitation water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered or allocated cutting-stage water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Cutting and packaging electricity (`electricity_cutting`)

Electricity for cutting, deboning, conveyors, vacuum equipment, and packaging is recorded for this stage.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or documented equipment-based allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

###### Corrugated meat carton (`corrugated_carton`)

Corrugated paperboard used for the declared product is recorded independently from plastic film.

- Selected flow: Corrugated paperboard meat carton
- Flow property / unit: Mass / kg
- Amount rule: Measured carton mass issued minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

###### LDPE meat-packaging film (`ldpe_packaging_film`)

Low-density polyethylene film is recorded as one specific packaging material and not combined with paperboard.

- Selected flow: Low-density polyethylene meat-packaging film
- Flow property / unit: Mass / kg
- Amount rule: Measured film mass issued minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg packaged meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged sheep-meat intermediate (`packaged_sheep_meat`)

Conforming packaged meat is weighed before factory-gate chilled storage and excludes packaging mass.

- Selected flow: Packaged fresh or chilled sheep meat
- Flow property / unit: Mass / kg net meat
- Amount rule: Measured net conforming meat mass transferred to chilled storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cutting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging`
- Sources: `un-cpc-3-2025`; `ec-jrc-sa-bref-jrc135916`

###### Edible sheep-meat trimming (`edible_sheep_meat_trimming`)

Edible trimming routed to another product is weighed separately from the declared reference cut.

- Selected flow: Edible sheep-meat trimming
- Flow property / unit: Mass / kg
- Amount rule: Measured edible trimming mass sent to the declared product destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cutting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Sheep bone from cutting (`sheep_bone`)

Bone removed during cutting is weighed as its own output and assigned its actual destination.

- Selected flow: Sheep bone from cutting
- Flow property / unit: Mass / kg
- Amount rule: Measured bone mass sent to the declared product destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cutting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Sheep adipose tissue from cutting (`sheep_fat_cutting`)

Fat removed during cutting is weighed separately from edible trimming and bone.

- Selected flow: Sheep adipose tissue from cutting
- Flow property / unit: Mass / kg
- Amount rule: Measured fat mass sent to the declared product destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per cutting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Waste flows

###### Sheep-meat cutting wastewater (`cutting_wastewater`)

Wastewater leaving cutting is measured independently from slaughter and sanitation wastewater.

- Selected flow: Sheep-meat cutting wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or cutting-stage water-balance result
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Rejected fresh sheep meat (`rejected_sheep_meat`)

Rejected meat leaving cutting is weighed separately from edible trimming and linked to its treatment route.

- Selected flow: Rejected fresh sheep meat
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected meat mass sent to the documented route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per cutting batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Waste corrugated carton (`corrugated_carton_waste`)

Damaged or unused corrugated cartons discarded during packaging are weighed separately from plastic waste.

- Selected flow: Waste corrugated paperboard meat carton
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded corrugated-carton mass sent to the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Waste LDPE packaging film (`ldpe_film_waste`)

Discarded low-density polyethylene film is weighed independently from paperboard waste.

- Selected flow: Waste low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded LDPE-film mass sent to the declared route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg packaged meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting_packaging`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Elementary flows

### Process: Factory-gate chilled storage (`chilled_storage`)

#### Inputs

##### Product flows

###### Packaged sheep-meat input (`packaged_sheep_meat_input`)

Packaged meat enters chilled storage with net mass, packaging, time, and temperature records linked.

- Selected flow: Packaged fresh or chilled sheep meat
- Flow property / unit: Mass / kg net meat
- Amount rule: Measured net conforming meat mass received from cutting or carcass release
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per storage release batch
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_storage`
- Sources: `un-cpc-3-2025`; `ec-jrc-sa-bref-jrc135916`

###### Chilled-storage electricity (`electricity_cold_storage`)

Electricity for cold rooms, fans, controls, and product handling is recorded separately from carcass chilling.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or time-and-load allocation for factory-gate chilled storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_storage`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

###### R-717 refrigerant supplied to chilled storage (`ammonia_r717_storage`)

Ammonia refrigerant is conditional on an R-717 storage system and is reconciled independently from carcass chilling.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: Net R-717 make-up assigned to chilled storage when applicable
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_storage`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Fresh or chilled sheep meat reference output (`fresh_chilled_sheep_meat`)

This is net conforming sheep meat released at the factory gate in the declared fresh or chilled state.

- Selected flow: Meat of sheep, fresh or chilled `f77c69e0-fe2f-421a-9f33-23b4a09bd9ba`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1 kg net reference output
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming fresh or chilled sheep meat
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Rejected chilled sheep meat (`rejected_chilled_sheep_meat`)

Product rejected during storage or release is weighed and linked to its actual treatment route.

- Selected flow: Rejected chilled sheep meat
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected chilled-meat mass sent to the documented route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilled_storage`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Elementary flows

###### R-717 loss from chilled storage (`ammonia_r717_storage_air`)

Direct ammonia refrigerant loss is calculated from storage-specific charge and service records.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered R-717 loss assigned to chilled storage
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilled_storage`
- Sources: `ec-jrc-sa-bref-jrc135916`

### Process: Sanitation and wastewater handling (`sanitation_wastewater`)

#### Inputs

##### Product flows

###### Sanitation process water (`process_water_sanitation`)

Water used for cleaning and disinfection is metered separately from production-stage process water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered sanitation water use for the declared production period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Wastewater and sanitation electricity (`electricity_wastewater`)

Electricity for cleaning systems, screening, pumping, aeration, and sludge handling is recorded for this support process.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: Submetered use or documented equipment-based allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021`

###### Purchased hot water for sanitation (`purchased_hot_water_sanitation`)

Purchased hot water is conditional on external supply and is kept separate from steam and directly combusted fuel.

- Selected flow: Purchased hot water
- Flow property / unit: Mass or energy / kg or MJ
- Amount rule: Metered purchased hot water with supply and return temperatures when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Sodium hydroxide cleaning solution (`sodium_hydroxide_cleaner`)

Formulated sodium hydroxide cleaner is recorded by product mass and active concentration, separately from disinfectant.

- Selected flow: Sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued cleaner mass minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Peracetic acid disinfectant (`peracetic_acid_disinfectant`)

Formulated peracetic acid disinfectant is recorded independently from caustic cleaner and other chemicals.

- Selected flow: Peracetic acid disinfectant
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued disinfectant mass minus documented return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Waste flows

###### Lairage wastewater received (`lairage_wastewater_input`)

Lairage wash water enters the actual on-site treatment or transfer route as its own wastewater stream.

- Selected flow: Sheep-lairage wash water
- Flow property / unit: Volume / m3
- Amount rule: Measured lairage wastewater received
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per treatment period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Slaughter wastewater received (`slaughter_wastewater_input`)

Slaughter wastewater enters treatment as a distinct stream and is not merged in the inventory with lairage wastewater.

- Selected flow: Sheep-slaughter process wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured slaughter wastewater received
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per treatment period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Chilling condensate received (`chilling_condensate_input`)

Carcass-chilling condensate is recorded separately when routed to wastewater handling.

- Selected flow: Carcass-chilling condensate
- Flow property / unit: Volume / m3
- Amount rule: Measured chilling condensate received when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per treatment period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Cutting wastewater received (`cutting_wastewater_input`)

Cutting wastewater enters treatment as its own measured stream.

- Selected flow: Sheep-meat cutting wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured cutting wastewater received when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per treatment period
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Treated slaughterhouse effluent (`treated_slaughterhouse_effluent`)

Treated effluent transferred to off-site treatment is measured as one specific waste output; direct discharge is represented by elementary water emissions instead.

- Selected flow: Treated sheep-slaughterhouse effluent
- Flow property / unit: Volume / m3
- Amount rule: Metered treated effluent sent to the declared off-site route when applicable
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Wastewater screenings (`wastewater_screenings`)

Screened solids from wastewater handling are weighed separately from treatment sludge.

- Selected flow: Sheep-slaughterhouse wastewater screenings
- Flow property / unit: Mass / kg
- Amount rule: Measured screenings mass sent to the documented treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Wastewater-treatment sludge (`wastewater_sludge`)

Dewatered sludge is weighed independently from screenings and linked to moisture and destination records.

- Selected flow: Sheep-slaughterhouse wastewater-treatment sludge
- Flow property / unit: Mass / kg wet sludge
- Amount rule: Measured sludge mass with dry-matter content and treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`

##### Elementary flows

###### Chemical oxygen demand to water (`chemical_oxygen_demand_water`)

COD is reported as a separate direct water emission only for the monitored final discharge attributable to the foreground system.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg COD
- Amount rule: Calculated from measured final-effluent volume and representative COD concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Total nitrogen to water (`total_nitrogen_water`)

Total nitrogen is reported independently from COD and phosphorus for the monitored final discharge.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass / kg N
- Amount rule: Calculated from measured final-effluent volume and representative total-nitrogen concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`

###### Total phosphorus to water (`total_phosphorus_water`)

Total phosphorus is reported as its own monitored direct water emission.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass / kg P
- Amount rule: Calculated from measured final-effluent volume and representative total-phosphorus concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared slaughterhouse operations | First subdivide processes, meters, batches, and treatment records wherever separately measured data can assign burdens directly. | `eu-pef-2021` |
| `allocation_avoid` | multi-output processes | Avoid allocation through process subdivision or a justified system-function approach when consistent with the study goal and PEF method. | `eu-pef-2021` |
| `allocation_physical` | unavoidable co-production | When allocation cannot be avoided, use a documented physical causal relationship only when it represents how inputs and emissions change with outputs. | `eu-pef-2021` |
| `allocation_economic` | outputs without defensible physical causality | If no defensible physical relationship exists, use economic allocation with product-specific prices, a declared representative period, and sensitivity disclosure. | `eu-pef-2021` |
| `allocation_disposition` | blood, organs, skin, fat, bone, trimming, and condemned material | Classify each anatomical output by actual legal and commercial disposition before deciding whether it is a co-product, recyclable material, or waste; do not allocate to a waste output unless the chosen method requires it. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021` |
| `allocation_consistency` | reference product and co-products | Reconcile output masses, allocation keys, revenues when used, and the share assigned to the 1 kg reference product; disclose zero-value and missing-price treatment. | `eu-pef-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_animal_receiving_lairage` | `animal_receiving_lairage` | live sheep, water, electricity, diesel, rested sheep, manure, wastewater, carcass waste, diesel CO2 | receiving and batch records, meters, fuel logs, scales, waste records | batch_id; supplier; species; accepted_live_kg; rejected_live_kg; rested_live_kg; water_m3; electricity_kWh; diesel_quantity; manure_kg; wash_water_m3; dead_carcass_kg; destination | Link calibrated weighbridge or count-to-mass records, stage meters, inventory movements, and waste documents by batch and period | kg; m3; kWh; L or kg | each batch; utilities by meter interval | justified representative production period or complete campaign, with gaps disclosed | every included receiving and lairage site | sum linked records and normalize to rested sheep and final reference output without double counting | scale and meter calibration; supplier and acceptance records; fuel reconciliation; waste transfer records |
| `cp_slaughter_dressing` | `slaughter_dressing` | sheep input, water, electricity, steam, fuels, carcass, anatomical outputs, wastes, wastewater, combustion CO2 | slaughter batch, meter, scale, fuel, product, inspection, and waste records | batch_id; sheep_input_kg; water_m3; electricity_kWh; steam_kg; natural_gas_quantity; gas_calorific_value; lpg_kg; carcass_kg; blood_kg; liver_kg; kidney_kg; heart_kg; skin_kg; fat_kg; rumen_content_kg; condemned_lung_kg; wastewater_m3; destinations | Link every measured carrier and anatomical output to slaughter batch and inspection disposition | kg; m3; kWh; MJ | each batch; utilities by meter interval | justified representative production period or complete campaign, with gaps disclosed | every included slaughter and dressing site | reconcile input, carcass, each co-product, waste, wastewater, and allocation keys before normalization | scale and meter calibration; inspection records; product dispatch; fuel invoices; waste manifests |
| `cp_carcass_chilling` | `carcass_chilling` | carcass input, electricity, R-717, chilled carcass, condensate, R-717 loss | batch, temperature, meter, refrigerant, service, scale, and condensate records | batch_id; hot_carcass_kg; chilled_carcass_kg; inlet_temperature; release_temperature; start_time; release_time; electricity_kWh; r717_charge_kg; r717_purchase_kg; r717_recovery_kg; condensate_m3 | Link carcass mass and time-temperature records to refrigeration meters and a closed refrigerant balance | kg; kWh; m3 | each batch; refrigerant by service event | justified representative production period or complete campaign, with gaps disclosed | every included carcass-chilling system | calculate chilling loss and unrecovered refrigerant only from reconciled records; normalize to chilled carcass | scale and temperature calibration; meter checks; service reports; refrigerant inventory reconciliation |
| `cp_cutting_packaging` | `cutting_packaging` | carcass, water, electricity, carton, LDPE, packaged meat, trimming, bone, fat, wastewater, rejects, packaging wastes | cutting batch, BOM, meter, issue-return, scale, inspection, and waste records | batch_id; carcass_input_kg; water_m3; electricity_kWh; carton_input_kg; carton_return_kg; ldpe_input_kg; ldpe_return_kg; packaged_meat_kg; trimming_kg; bone_kg; fat_kg; wastewater_m3; rejected_meat_kg; carton_waste_kg; ldpe_waste_kg; destinations | Reconcile cut yields, packaging issues and returns, meters, and disposition-specific outputs by batch | kg; m3; kWh | each batch; utilities by meter interval | justified representative production period or complete campaign, with gaps disclosed | every included cutting and packaging site | reconcile input mass to all product and waste outputs, then normalize to packaged net meat | scale and meter calibration; BOM and packaging specifications; inspection and dispatch records; waste manifests |
| `cp_chilled_storage` | `chilled_storage` | packaged meat, electricity, R-717, reference output, reject, R-717 loss | storage batch, temperature, time, meter, scale, refrigerant, service, and release records | batch_id; input_meat_kg; output_meat_kg; rejected_kg; entry_temperature; release_temperature; storage_hours; electricity_kWh; r717_charge_kg; r717_purchase_kg; r717_recovery_kg | Link net product mass and time-temperature history to storage electricity and refrigerant records | kg; kWh; h | each release batch; refrigerant by service event | justified representative production period or complete campaign, with gaps disclosed | every included factory-gate chilled store | sum batch-specific records and normalize to net conforming reference output | scale, temperature, and meter calibration; release records; service reports; refrigerant reconciliation |
| `cp_sanitation_wastewater` | `sanitation_wastewater` | water, electricity, hot water, cleaner, disinfectant, stage wastewater, effluent, screenings, sludge, water emissions | sanitation log, chemical issue-return, meters, laboratory, treatment, sludge, and transfer records | period_id; water_m3; electricity_kWh; hot_water_quantity; supply_temperature; return_temperature; sodium_hydroxide_product_kg; sodium_hydroxide_concentration; peracetic_product_kg; peracetic_concentration; lairage_wastewater_m3; slaughter_wastewater_m3; condensate_m3; cutting_wastewater_m3; offsite_effluent_m3; screenings_kg; sludge_kg; sludge_dry_matter; discharge_m3; cod_concentration; total_n_concentration; total_p_concentration | Reconcile chemical use and stage water flows; pair accredited or controlled sampling with final-discharge volume | kg; m3; kWh; MJ | each cleaning cycle or meter interval; emissions by sampling plan | justified representative production period or complete campaign, with gaps disclosed | every included sanitation and wastewater system | preserve stage wastewater identities; calculate each direct water emission separately from discharge volume and concentration | meter calibration; chemical inventory; sampling plan; laboratory QA; treatment log; waste and off-site transfer records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all foreground exchanges | Divide the reconciled exchange assigned to the reference product by net conforming CPC 21115 output for the same period. | assigned exchange; net reference output kg | exchange per 1 kg reference product | `eu-pef-2021` |
| `calc_mass_balance` | live sheep through products and wastes | Reconcile live input, carcass and meat outputs, anatomical co-products, waste, retained stock, moisture change, and documented gaps without forcing unlike measurement points to equality. | calibrated masses; stock change; moisture-state records | disclosed batch and period mass reconciliation | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021` |
| `calc_energy` | steam, hot water, natural gas, diesel, and LPG | Preserve purchased quantities and calculate energy only with documented pressure, temperatures, density, and calorific values applicable to the recorded carrier. | meter or invoice quantities; carrier properties | carrier-specific energy use | `eu-pef-2021` |
| `calc_refrigerant_loss` | R-717 systems | Calculate unrecovered loss from opening stock, purchases, additions, recovery, transfers, and closing stock; assign by system records or documented load. | refrigerant inventory and service fields | kg R-717 to air and make-up input | `ec-jrc-sa-bref-jrc135916` |
| `calc_water_emission` | direct final wastewater discharge | For each pollutant, multiply representative final-effluent concentration by the matched discharge volume, apply unit conversion, and do not sum different substances. | discharge volume; COD, total N, or total P concentration | kg of the named emission to water | `ec-jrc-sa-bref-jrc135916` |
| `calc_allocation` | multi-output process | Apply the declared allocation hierarchy and key to reconciled shared burdens; retain pre-allocation totals, output quantities, prices if used, and allocated shares. | shared inventory; output masses; causal parameter or prices | inventory assigned to the reference product | `eu-pef-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Demonstrate sheep species, CPC 21115 fresh-or-chilled state, cut form, bone status, net mass, and exclusion of frozen meat and offal reference products. | product specification; traceability and temperature records; release label |
| `dq_primary_data` | foreground manufacturing | Use company-specific records for every included operated and subcontracted foreground process and disclose missing primary data. | site and subcontractor records; meter and batch coverage matrix |
| `dq_temporal` | declared production period | Use a justified representative period or complete campaign and disclose seasonality, shutdowns, abnormal operation, and data gaps. | production calendar; period completeness report; gap log |
| `dq_measurement` | mass, utilities, temperature, chemical, and emission data | Retain calibration, sampling, laboratory, conversion, and reconciliation evidence appropriate to each measured quantity. | calibration certificates; sampling plan; laboratory QA; signed reconciliations |
| `dq_completeness` | full LCI | Account for relevant raw materials, utilities, products, each co-product, waste, refrigerant, and direct air and water emission; state every exclusion and unresolved UUID. | completeness matrix; mass, water, energy, chemical, and refrigerant balances |
| `dq_transparency` | data package | Disclose upstream datasets, allocation, proxies, wastewater route, co-product disposition, uncertainty, and deviations from this PCR. | dataset metadata; calculation workbook; deviation and uncertainty log |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require UUID `f77c69e0-fe2f-421a-9f33-23b4a09bd9ba`, Product flow type, exact CPC 21115 identity, Mass property, and kg unit. | `un-cpc-3-2025` |
| `validate_reference_amount` | reference flow | Require exactly 1 kg net conforming fresh or chilled sheep meat, with packaging, offal, rejected material, and free liquid excluded from reference mass. | `un-cpc-3-2025`; `eu-pef-2021` |
| `validate_product_state` | product metadata | Reject a dataset whose reference output is frozen meat, offal, another species, or lacks declared cut, bone, temperature, and factory-gate state. | `un-cpc-3-2025` |
| `validate_process_coverage` | foreground boundary | Require receiving, slaughter, chilling, chilled release, sanitation, wastewater routing, and any applicable cutting, packaging, fuel, or refrigerant operation. | `ec-jrc-sa-bref-jrc135916` |
| `validate_atomic_inventory` | inventory | Reject combined carriers, chemicals, packaging, anatomical outputs, wastes, wastewater streams, refrigerants, or emissions; require any additional anatomical output to be added as its own exchange. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021` |
| `validate_balances` | foreground records | Require reconciled mass, water, energy, chemical, and refrigerant balances with explicit stock changes and gaps. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021` |
| `validate_allocation` | multi-output inventory | Require the allocation hierarchy, output disposition, key, period, pre-allocation totals, allocated shares, and economic sensitivity when prices are used. | `eu-pef-2021` |
| `validate_completeness` | data package | Require company-specific manufacturing data and complete relevant LCI coverage with transparent exclusions, proxies, quality evidence, and unresolved identities. | `eu-pef-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Product-specific foreground production dataset for fresh or chilled sheep meat under CPC 21115 |
| downstream_use | May be used as a `secondary_dataset` or `background_dataset` when species, product form, bone status, temperature state, technology, geography, allocation, and period are compatible |
| allowed_use | Factory-gate modelling of declared fresh or chilled sheep meat and aggregation into wider life-cycle models with separate upstream and downstream datasets |
| excluded_use | Frozen meat; offal as reference product; goat or other species meat; farming, transport, retail, cooking, use, or end-of-life without separate modelling; materially different slaughter or product route without adjustment |
| required_metadata | PCR id and version; species; product form; bone status; temperature; net mass; sites and subcontractors; live-mass basis; process route; holding time; packaging; geography; period; co-product disposition; allocation; wastewater route; upstream datasets |
| required_quality_disclosure | Primary-data coverage; calibration and sampling; mass, water, energy, chemical, and refrigerant balances; allocation sensitivity; proxies; unresolved UUIDs; exclusions; uncertainty; abnormal operations; review status |
| update_trigger | Change in species or source, product form, bone status, temperature state, site, subcontractor, slaughter or cutting route, refrigeration, fuel, sanitation, packaging, wastewater treatment, co-product destination, allocation, upstream dataset, or production period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | United Nations Statistics Division, CPC Ver. 3.0 official resources and Explanatory Notes, 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/CPC; repository retained raw structure `CPC_Ver_3.0_Structure_30Jun2025.csv` | Exact CPC 21115 fresh-or-chilled sheep-meat scope and exclusion of frozen meat and offal reference products |
| `ec-jrc-sa-bref-jrc135916` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, DOI 10.2760/18199, https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | Process structure from animal receiving through slaughter, dressing, chilling, cutting, sanitation and wastewater handling; utilities; refrigerants; specific co-products, wastes, and emissions; no default quantities adopted |
| `eu-pef-2021` | `official_guidance` | Commission Recommendation (EU) 2021/2279, consolidated Product Environmental Footprint method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific and company-specific data, complete LCI, allocation hierarchy, transparency, data quality, calculation, and validation rules |
