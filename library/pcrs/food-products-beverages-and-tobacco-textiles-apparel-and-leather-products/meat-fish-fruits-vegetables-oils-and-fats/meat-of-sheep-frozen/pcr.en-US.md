---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-sheep-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of sheep, frozen

## 1. Scope and Applicability

This PCR applies to net conforming meat of sheep supplied in a frozen state at the processing-facility gate under CPC 3.0 subclass 21135. Covered commercial forms include frozen sheep carcasses, sides and declared cuts, bone-in or boneless, provided that the reference product remains unprepared frozen sheep meat.

The foreground boundary begins with live sheep accepted at the slaughter facility and includes receiving and lairage; slaughter, bleeding, skinning and evisceration; carcass dressing and cutting; pre-chilling and freezing; packaging, on-site frozen storage and release; cleaning and disinfection; and on-site wastewater treatment when performed. Sheep farming and inbound transport to the facility are upstream. Retail, distribution after the facility gate, thawing, cooking or other use, and product or packaging end-of-life are downstream.

Fresh or chilled sheep meat, goat meat, meat from other species, edible offal as the declared reference product, cooked, seasoned or otherwise prepared meat, and packaging mass are excluded from the reference product. Edible organs may cross the foreground boundary only as separately measured co-products and never as CPC 21135 reference output.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-sheep-frozen |
| classification_refs | CPC 3.0: 21135, Meat of sheep, frozen |
| covered_products | Frozen sheep carcasses, sides and declared meat cuts; bone-in or boneless; unprepared and released in a frozen state |
| excluded_products | Fresh or chilled sheep meat; edible offal as reference product; goat or other-species meat; cooked, seasoned, cured or otherwise prepared meat; packaging |
| representative_product | Net conforming frozen sheep meat released from on-site frozen storage |
| production_route | Live-sheep receipt; slaughter and dressing; cutting; pre-chilling and freezing; packaging; frozen storage; facility-gate release |
| market_state | Frozen, packaged or bulk as declared, and released at the processing-facility gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of net conforming unprepared frozen meat of sheep at the processing-facility gate |
| How much | 1 kg net frozen sheep meat, excluding packaging |
| How well | Sheep species, frozen state, product form, bone status, release specification and cold-storage condition are declared and conforming |
| How long or cycle | One production lot through release from on-site frozen storage; actual frozen-storage duration is disclosed |
| reference_flow_link | `reference_product_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming frozen sheep meat, excluding packaging |
| Reference product flow | Meat of sheep, frozen `7a898ac1-b845-4943-bae3-94e7c24ae06d` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | sheep species identity; carcass or cut form; bone-in or boneless state; frozen state at release; processing site and geography; reference period; frozen-storage duration and condition; packaging format with packaging excluded from net mass; co-product status and allocation method |

When constructing a foreground data package, every required qualifier shall be stated in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | Quantitative reference | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report exactly 1 kg net conforming frozen sheep meat; exclude all packaging mass from the denominator. |
| `live_weight_measurement` | Live sheep receipt and transfer | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg live weight | Use calibrated live-weight records and preserve lot identity between receipt, lairage and slaughter. |
| `intermediate_product_mass` | Carcass, cut and frozen-intermediate transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use net measured mass at each transfer point; do not substitute counts or nominal package mass without a documented conversion. |
| `co_product_and_waste_mass` | Blood, skin, organs, fat, bones, contents, sludge and solid wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each physical stream independently and state whether its measured basis is wet mass, drained mass or another declared condition. |
| `refrigerant_mass_balance` | R-717 and R-134a systems | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Calculate make-up and unrecovered emissions independently for each refrigerant substance from reconciled stock and service records. |
| `energy_identity_and_conversion` | Electricity, steam, hot water and fuels | Declared carrier property | Card-specific unit | Keep each carrier in its card unit; disclose calorific-value or enthalpy conventions for conversions and do not count both purchased heat and its upstream generating fuel. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live sheep accepted at the processing-facility gate with measured live weight, lot identity, origin and upstream dataset reference |
| starting_condition_role | Foreground slaughter and frozen-meat processing begins at facility receipt; sheep farming and inbound transport are upstream |
| product_classification_scope | CPC 3.0 subclass 21135 only: meat of sheep, frozen |
| recursive_input_rule | If frozen sheep meat re-enters the represented site as rework, record the exact internal or external product flow once and disclose its prior processing boundary; do not recursively reproduce the same foreground chain |
| upstream_dataset_requirement | Link live-sheep supply and inbound transport to compatible upstream datasets with geography, production system, allocation and reference period disclosed |
| disclosure | Declare site, sheep origin, product form, freezing technology, frozen-storage condition and duration, packaging, wastewater destination, co-product status, allocation and all excluded life-cycle stages |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_start` | Facility-gate receipt | Begin foreground collection at accepted live-sheep receipt; model farming and inbound transport in upstream datasets rather than duplicating them in slaughter operations. | `un-cpc-3-0`; `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `boundary_required_operations` | Slaughter and frozen-meat manufacture | Include receiving, slaughter, carcass dressing, cutting, pre-chilling, freezing, packaging, on-site frozen storage, cleaning and release; include on-site wastewater treatment when performed. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `boundary_downstream_exclusion` | Facility-gate output | Exclude distribution after the facility gate, retail, thawing, cooking or other use, and end-of-life unless the declared study explicitly expands the downstream boundary. | `un-cpc-3-0`; `eu-recommendation-2021-2279-pef` |
| `boundary_product_scope` | Reference product | Keep fresh or chilled sheep meat, edible offal as reference product, other species and prepared meat outside CPC 21135. | `un-cpc-3-0` |
| `boundary_complete_lci` | Included foreground processes | Record all known material, energy and water inputs and every product, co-product, emission and waste output for each included process. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `live_sheep_receiving_and_lairage` | Live sheep receiving and lairage | `required` | Always included from live-sheep acceptance at the facility gate through transfer to slaughter | Foreground receipt, holding and animal mass reconciliation | kg accepted live sheep transferred to slaughter |
| `slaughter_bleeding_skinning_evisceration` | Slaughter, bleeding, skinning and evisceration | `required` | Always included for sheep slaughter represented by the dataset | Foreground slaughter and separation of carcass, blood, skin, organs and digestive contents | kg dressed sheep carcass transferred to dressing |
| `carcass_dressing_and_cutting` | Carcass dressing and cutting | `required` | Always included through production of the declared unfrozen carcass or cut form | Foreground trimming, carcass dressing, deboning or cutting | kg conforming unfrozen sheep meat transferred to freezing |
| `prechilling_and_freezing` | Pre-chilling and freezing | `required` | Always included until the declared product reaches its recorded frozen state | Foreground cooling, freezing and frozen-intermediate release | kg conforming frozen sheep meat transferred to packaging |
| `packaging_frozen_storage_and_release` | Packaging, frozen storage and release | `required` | Always included through packaging, on-site frozen storage and facility-gate release | Foreground packaging, frozen storage and quantitative reference release | 1 kg net conforming frozen sheep meat, excluding packaging |
| `cleaning_and_disinfection` | Cleaning and disinfection | `required` | Always included for cleaning and disinfection serving the represented production processes | Foreground sanitation service and associated wastewater and residue generation | cleaning service allocated to 1 kg net conforming frozen sheep meat |
| `onsite_wastewater_treatment` | On-site wastewater treatment | `conditional` | Include when ordinary or high-organic-load wastewater is treated at the represented facility before discharge or transfer | Foreground wastewater treatment, sludge generation and direct water emissions | m3 wastewater treated on site |

### Process: Live sheep receiving and lairage (`live_sheep_receiving_and_lairage`)

#### Inputs

##### Product flows

###### Live sheep received at the facility gate (`live_sheep_input`)

Live sheep cross the foreground boundary at facility receipt; farming and inbound transport remain in the linked upstream dataset.

- Selected flow: Live sheep
- Flow property / unit: Mass / kg live weight
- Amount rule: Measured live weight of sheep accepted into the represented receipt lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Receiving and lairage grid electricity (`receiving_electricity`)

Grid electricity used for receiving and lairage is recorded independently from all thermal carriers.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Measured or sub-meter-allocated grid electricity used by receiving and lairage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Receiving and lairage purchased steam (`receiving_purchased_steam`)

Purchased steam used for receiving and lairage is recorded separately from hot water and fuels.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased steam assigned to receiving and lairage when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Receiving and lairage purchased hot water (`receiving_purchased_hot_water`)

Purchased hot water used for receiving and lairage is recorded separately from steam.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased hot-water mass assigned to receiving and lairage when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Receiving and lairage natural gas (`receiving_natural_gas`)

Natural gas used by equipment serving receiving and lairage is recorded independently from diesel and LPG.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas energy assigned to receiving and lairage using the documented calorific-value convention
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Receiving and lairage diesel (`receiving_diesel`)

Diesel used by directly operated equipment serving receiving and lairage is recorded independently.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered or stock-reconciled diesel mass assigned to receiving and lairage when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Receiving and lairage LPG (`receiving_lpg`)

LPG used by equipment serving receiving and lairage is recorded independently from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Stock-reconciled LPG mass assigned to receiving and lairage when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Receiving and lairage process water (`receiving_process_water`)

Fresh process water used for receiving and lairage is measured separately from internally reused water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Measured fresh process-water intake assigned to receiving and lairage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted live sheep transferred to slaughter (`accepted_live_sheep_output`)

Accepted live sheep are weighed and transferred as one internal product flow to slaughter.

- Selected flow: Accepted live sheep
- Flow property / unit: Mass / kg live weight
- Amount rule: Measured live weight transferred from lairage to slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

###### Dead-on-arrival sheep waste (`dead_on_arrival_sheep_waste`)

Sheep identified dead on arrival are recorded independently from manure and wastewater.

- Selected flow: Dead-on-arrival sheep
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of dead-on-arrival sheep sent to the documented waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Lairage sheep manure (`lairage_manure_waste`)

Manure removed from sheep holding areas is measured as a distinct solid waste.

- Selected flow: Sheep manure from lairage
- Flow property / unit: Mass / kg
- Amount rule: Measured or weigh-recorded lairage manure sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Lairage wastewater (`lairage_wastewater`)

Wastewater from lairage washing is recorded separately from high-organic-load slaughter wastewater.

- Selected flow: Lairage wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured lairage wastewater volume sent to on-site treatment or off-site destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

###### Receiving and lairage fossil carbon dioxide emission (`receiving_carbon_dioxide_air`)

Fossil carbon dioxide from fuels used for receiving and lairage is reported as its own air exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from each measured receiving and lairage fuel amount and its documented carbon or emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Receiving and lairage nitrogen oxides emission (`receiving_nitrogen_oxides_air`)

Nitrogen oxides from fuel combustion serving receiving and lairage are reported separately from sulfur dioxide.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Measured or calculated from stage fuel use, equipment records and the documented NOx factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Receiving and lairage sulfur dioxide emission (`receiving_sulfur_dioxide_air`)

Sulfur dioxide from fuel combustion serving receiving and lairage is reported separately from nitrogen oxides.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from stage fuel use, sulfur content and equipment records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Receiving and lairage fine particulate emission (`receiving_pm25_air`)

Fine particulate matter from fuel combustion serving receiving and lairage is reported as a size-specific air exchange.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from stage fuel use and equipment-specific records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg accepted live sheep transferred to slaughter
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_receiving_lairage_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### Process: Slaughter, bleeding, skinning and evisceration (`slaughter_bleeding_skinning_evisceration`)

#### Inputs

##### Product flows

###### Accepted live sheep input (`accepted_live_sheep_input`)

Accepted live sheep transferred from lairage enter the slaughter process as one internal product flow.

- Selected flow: Accepted live sheep
- Flow property / unit: Mass / kg live weight
- Amount rule: Measured live weight entering slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Slaughter grid electricity (`slaughter_electricity`)

Grid electricity used for slaughter is recorded independently from all thermal carriers.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Measured or sub-meter-allocated grid electricity used by slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Slaughter purchased steam (`slaughter_purchased_steam`)

Purchased steam used for slaughter is recorded separately from hot water and fuels.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased steam assigned to slaughter when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Slaughter purchased hot water (`slaughter_purchased_hot_water`)

Purchased hot water used for slaughter is recorded separately from steam.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased hot-water mass assigned to slaughter when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Slaughter natural gas (`slaughter_natural_gas`)

Natural gas used by equipment serving slaughter is recorded independently from diesel and LPG.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas energy assigned to slaughter using the documented calorific-value convention
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Slaughter diesel (`slaughter_diesel`)

Diesel used by directly operated equipment serving slaughter is recorded independently.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered or stock-reconciled diesel mass assigned to slaughter when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Slaughter LPG (`slaughter_lpg`)

LPG used by equipment serving slaughter is recorded independently from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Stock-reconciled LPG mass assigned to slaughter when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Slaughter process water (`slaughter_process_water`)

Fresh process water used for slaughter is measured separately from internally reused water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Measured fresh process-water intake assigned to slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dressed sheep carcass (`dressed_sheep_carcass_output`)

The dressed sheep carcass transferred to carcass dressing is recorded separately from all co-products and wastes.

- Selected flow: Dressed sheep carcass
- Flow property / unit: Mass / kg
- Amount rule: Measured dressed-carcass mass released from slaughter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Recovered sheep blood co-product (`sheep_blood_coproduct`)

Sheep blood with documented product status and beneficial use is measured as a distinct co-product.

- Selected flow: Sheep blood
- Flow property / unit: Mass / kg
- Amount rule: Measured recovered sheep-blood mass transferred to its product destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Raw sheepskin co-product (`raw_sheepskin_coproduct`)

Raw sheepskin with documented product status is weighed independently from rejected skin waste.

- Selected flow: Raw sheepskin
- Flow property / unit: Mass / kg
- Amount rule: Measured raw-sheepskin mass transferred to its product destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Sheep edible organs co-product (`sheep_edible_organs_coproduct`)

Edible sheep organs released as a co-product are recorded separately from the reference meat and inedible organs.

- Selected flow: Sheep edible organs
- Flow property / unit: Mass / kg
- Amount rule: Measured mass of released edible sheep organs transferred to their product destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

###### Discarded sheep blood waste (`sheep_blood_waste`)

Sheep blood without product status is recorded as waste and is not merged with recovered blood.

- Selected flow: Discarded sheep blood
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded sheep-blood mass sent to the documented waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Rejected sheepskin waste (`rejected_sheepskin_waste`)

Rejected sheepskin without product status is measured separately from saleable raw sheepskin.

- Selected flow: Rejected sheepskin
- Flow property / unit: Mass / kg
- Amount rule: Measured rejected-sheepskin mass sent to the documented waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Inedible sheep organs waste (`sheep_inedible_organs_waste`)

Inedible sheep organs are weighed as a specific waste stream.

- Selected flow: Inedible sheep organs
- Flow property / unit: Mass / kg
- Amount rule: Measured inedible-organ mass sent to the documented waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Sheep stomach contents waste (`sheep_stomach_contents_waste`)

Removed sheep stomach contents are recorded independently from intestinal contents and wastewater.

- Selected flow: Sheep stomach contents
- Flow property / unit: Mass / kg
- Amount rule: Measured or container-weighed stomach-content mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Sheep intestinal contents waste (`sheep_intestinal_contents_waste`)

Removed sheep intestinal contents are recorded independently from stomach contents.

- Selected flow: Sheep intestinal contents
- Flow property / unit: Mass / kg
- Amount rule: Measured or container-weighed intestinal-content mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Condemned sheep carcass waste (`condemned_sheep_carcass_waste`)

A condemned sheep carcass is weighed separately from normal carcass output and organ waste.

- Selected flow: Condemned sheep carcass
- Flow property / unit: Mass / kg
- Amount rule: Measured condemned-carcass mass sent to the documented waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### High-organic-load slaughter wastewater (`slaughter_high_load_wastewater`)

Blood- and tissue-bearing slaughter wastewater is recorded separately from ordinary wastewater.

- Selected flow: High-organic-load slaughter wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured high-organic-load wastewater volume transferred to treatment or off-site destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

###### Slaughter fossil carbon dioxide emission (`slaughter_carbon_dioxide_air`)

Fossil carbon dioxide from fuels used for slaughter is reported as its own air exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from each measured slaughter fuel amount and its documented carbon or emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Slaughter nitrogen oxides emission (`slaughter_nitrogen_oxides_air`)

Nitrogen oxides from fuel combustion serving slaughter are reported separately from sulfur dioxide.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Measured or calculated from stage fuel use, equipment records and the documented NOx factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Slaughter sulfur dioxide emission (`slaughter_sulfur_dioxide_air`)

Sulfur dioxide from fuel combustion serving slaughter is reported separately from nitrogen oxides.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from stage fuel use, sulfur content and equipment records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Slaughter fine particulate emission (`slaughter_pm25_air`)

Fine particulate matter from fuel combustion serving slaughter is reported as a size-specific air exchange.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from stage fuel use and equipment-specific records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg dressed sheep carcass transferred to dressing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### Process: Carcass dressing and cutting (`carcass_dressing_and_cutting`)

#### Inputs

##### Product flows

###### Dressed sheep carcass input (`dressed_sheep_carcass_input`)

The measured dressed carcass enters dressing and cutting as one internal product flow.

- Selected flow: Dressed sheep carcass
- Flow property / unit: Mass / kg
- Amount rule: Measured dressed-carcass mass entering dressing and cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Carcass dressing and cutting grid electricity (`dressing_electricity`)

Grid electricity used for carcass dressing and cutting is recorded independently from all thermal carriers.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Measured or sub-meter-allocated grid electricity used by carcass dressing and cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Carcass dressing and cutting purchased steam (`dressing_purchased_steam`)

Purchased steam used for carcass dressing and cutting is recorded separately from hot water and fuels.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased steam assigned to carcass dressing and cutting when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Carcass dressing and cutting purchased hot water (`dressing_purchased_hot_water`)

Purchased hot water used for carcass dressing and cutting is recorded separately from steam.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased hot-water mass assigned to carcass dressing and cutting when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Carcass dressing and cutting natural gas (`dressing_natural_gas`)

Natural gas used by equipment serving carcass dressing and cutting is recorded independently from diesel and LPG.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas energy assigned to carcass dressing and cutting using the documented calorific-value convention
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Carcass dressing and cutting diesel (`dressing_diesel`)

Diesel used by directly operated equipment serving carcass dressing and cutting is recorded independently.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered or stock-reconciled diesel mass assigned to carcass dressing and cutting when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Carcass dressing and cutting LPG (`dressing_lpg`)

LPG used by equipment serving carcass dressing and cutting is recorded independently from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Stock-reconciled LPG mass assigned to carcass dressing and cutting when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Carcass dressing and cutting process water (`dressing_process_water`)

Fresh process water used for carcass dressing and cutting is measured separately from internally reused water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Measured fresh process-water intake assigned to carcass dressing and cutting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unfrozen sheep meat cuts (`unfrozen_sheep_meat_cuts_output`)

Conforming sheep meat before freezing is measured in the declared carcass or cut form.

- Selected flow: Unfrozen sheep meat cuts
- Flow property / unit: Mass / kg
- Amount rule: Measured net conforming sheep-meat mass transferred to pre-chilling and freezing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `un-cpc-3-0`; `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Recovered sheep fat co-product (`recovered_sheep_fat_coproduct`)

Separated sheep fat with documented product status is measured as a distinct co-product.

- Selected flow: Recovered sheep fat
- Flow property / unit: Mass / kg
- Amount rule: Measured recovered sheep-fat mass transferred to its product destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Recovered sheep bones co-product (`sheep_bones_coproduct`)

Sheep bones with documented product status are measured separately from discarded bone waste.

- Selected flow: Recovered sheep bones
- Flow property / unit: Mass / kg
- Amount rule: Measured recovered sheep-bone mass transferred to its product destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

###### Discarded sheep fat waste (`discarded_sheep_fat_waste`)

Sheep fat without product status is recorded as waste and is not merged with recovered fat.

- Selected flow: Discarded sheep fat
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded sheep-fat mass sent to the documented waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Discarded sheep bone waste (`sheep_bone_waste`)

Sheep bones without product status are recorded independently from recovered bones.

- Selected flow: Discarded sheep bones
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded sheep-bone mass sent to the documented waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Off-spec unfrozen sheep meat waste (`offspec_unfrozen_sheep_meat_waste`)

Unfrozen sheep meat rejected before freezing is weighed as a distinct product loss.

- Selected flow: Off-spec unfrozen sheep meat
- Flow property / unit: Mass / kg
- Amount rule: Measured off-spec unfrozen sheep-meat mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Sheep meat trimming residue (`cutting_tissue_residue_waste`)

Non-product tissue residue from dressing and cutting is measured independently from fat and bones.

- Selected flow: Sheep meat trimming residue
- Flow property / unit: Mass / kg
- Amount rule: Measured trimming-residue mass sent to the documented waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Carcass cutting wastewater (`cutting_wastewater`)

Wastewater from dressing and cutting is recorded separately from high-organic-load slaughter wastewater.

- Selected flow: Carcass cutting wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured dressing-and-cutting wastewater volume transferred to treatment or off-site destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

###### Carcass dressing and cutting fossil carbon dioxide emission (`dressing_carbon_dioxide_air`)

Fossil carbon dioxide from fuels used for carcass dressing and cutting is reported as its own air exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from each measured carcass dressing and cutting fuel amount and its documented carbon or emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Carcass dressing and cutting nitrogen oxides emission (`dressing_nitrogen_oxides_air`)

Nitrogen oxides from fuel combustion serving carcass dressing and cutting are reported separately from sulfur dioxide.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Measured or calculated from stage fuel use, equipment records and the documented NOx factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Carcass dressing and cutting sulfur dioxide emission (`dressing_sulfur_dioxide_air`)

Sulfur dioxide from fuel combustion serving carcass dressing and cutting is reported separately from nitrogen oxides.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from stage fuel use, sulfur content and equipment records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Carcass dressing and cutting fine particulate emission (`dressing_pm25_air`)

Fine particulate matter from fuel combustion serving carcass dressing and cutting is reported as a size-specific air exchange.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from stage fuel use and equipment-specific records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming unfrozen sheep meat transferred to freezing
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dressing_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### Process: Pre-chilling and freezing (`prechilling_and_freezing`)

#### Inputs

##### Product flows

###### Unfrozen sheep meat input (`unfrozen_sheep_meat_input`)

Conforming sheep meat enters pre-chilling and freezing in its declared carcass or cut form.

- Selected flow: Unfrozen sheep meat cuts
- Flow property / unit: Mass / kg
- Amount rule: Measured conforming sheep-meat mass entering pre-chilling and freezing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Pre-chilling and freezing grid electricity (`freezing_electricity`)

Grid electricity used for pre-chilling and freezing is recorded independently from all thermal carriers.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Measured or sub-meter-allocated grid electricity used by pre-chilling and freezing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Pre-chilling and freezing purchased steam (`freezing_purchased_steam`)

Purchased steam used for pre-chilling and freezing is recorded separately from hot water and fuels.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased steam assigned to pre-chilling and freezing when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Pre-chilling and freezing purchased hot water (`freezing_purchased_hot_water`)

Purchased hot water used for pre-chilling and freezing is recorded separately from steam.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased hot-water mass assigned to pre-chilling and freezing when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Pre-chilling and freezing natural gas (`freezing_natural_gas`)

Natural gas used by equipment serving pre-chilling and freezing is recorded independently from diesel and LPG.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas energy assigned to pre-chilling and freezing using the documented calorific-value convention
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Pre-chilling and freezing diesel (`freezing_diesel`)

Diesel used by directly operated equipment serving pre-chilling and freezing is recorded independently.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered or stock-reconciled diesel mass assigned to pre-chilling and freezing when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Pre-chilling and freezing LPG (`freezing_lpg`)

LPG used by equipment serving pre-chilling and freezing is recorded independently from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Stock-reconciled LPG mass assigned to pre-chilling and freezing when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Pre-chilling and freezing process water (`freezing_process_water`)

Fresh process water used for pre-chilling and freezing is measured separately from internally reused water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Measured fresh process-water intake assigned to pre-chilling and freezing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Pre-chilling and freezing R-717 refrigerant make-up (`freezing_r717_makeup`)

Ammonia refrigerant make-up for pre-chilling and freezing is balanced separately from R-134a.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: Calculated net R-717 make-up assigned to pre-chilling and freezing from stock and service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Pre-chilling and freezing R-134a refrigerant make-up (`freezing_r134a_makeup`)

R-134a refrigerant make-up for pre-chilling and freezing is balanced separately from R-717.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (R-134a)
- Flow property / unit: Mass / kg
- Amount rule: Calculated net R-134a make-up assigned to pre-chilling and freezing from stock and service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Frozen sheep meat intermediate (`frozen_sheep_meat_intermediate_output`)

Frozen sheep meat transferred to packaging is measured after the declared freezing operation.

- Selected flow: Frozen sheep meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured net conforming frozen sheep-meat mass transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- Sources: `un-cpc-3-0`; `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

###### Freezing-system defrost wastewater (`freezing_defrost_wastewater`)

Defrost wastewater from the freezing stage is recorded separately from cleaning and slaughter wastewater.

- Selected flow: Freezing-system defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured defrost wastewater volume transferred to treatment or off-site destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Off-spec frozen sheep meat waste (`offspec_frozen_meat_waste`)

Frozen sheep meat rejected before packaging is weighed as a distinct product loss.

- Selected flow: Off-spec frozen sheep meat
- Flow property / unit: Mass / kg
- Amount rule: Measured off-spec frozen sheep-meat mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

###### Pre-chilling and freezing R-717 emission (`freezing_r717_air`)

Unrecovered R-717 loss from refrigeration serving pre-chilling and freezing is reported as ammonia to air.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered R-717 loss assigned to pre-chilling and freezing from the refrigerant mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Pre-chilling and freezing R-134a emission (`freezing_r134a_air`)

Unrecovered R-134a loss from refrigeration serving pre-chilling and freezing is reported as its own air exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered R-134a loss assigned to pre-chilling and freezing from the refrigerant mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Pre-chilling and freezing fossil carbon dioxide emission (`freezing_carbon_dioxide_air`)

Fossil carbon dioxide from fuels used for pre-chilling and freezing is reported as its own air exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from each measured pre-chilling and freezing fuel amount and its documented carbon or emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Pre-chilling and freezing nitrogen oxides emission (`freezing_nitrogen_oxides_air`)

Nitrogen oxides from fuel combustion serving pre-chilling and freezing are reported separately from sulfur dioxide.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Measured or calculated from stage fuel use, equipment records and the documented NOx factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Pre-chilling and freezing sulfur dioxide emission (`freezing_sulfur_dioxide_air`)

Sulfur dioxide from fuel combustion serving pre-chilling and freezing is reported separately from nitrogen oxides.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from stage fuel use, sulfur content and equipment records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Pre-chilling and freezing fine particulate emission (`freezing_pm25_air`)

Fine particulate matter from fuel combustion serving pre-chilling and freezing is reported as a size-specific air exchange.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from stage fuel use and equipment-specific records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conforming frozen sheep meat transferred to packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### Process: Packaging, frozen storage and release (`packaging_frozen_storage_and_release`)

#### Inputs

##### Product flows

###### Frozen sheep meat intermediate input (`frozen_sheep_meat_intermediate_input`)

Conforming frozen sheep meat enters packaging and frozen storage as one internal product flow.

- Selected flow: Frozen sheep meat intermediate
- Flow property / unit: Mass / kg
- Amount rule: Measured frozen sheep-meat mass entering packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging and frozen storage grid electricity (`packaging_storage_electricity`)

Grid electricity used for packaging and frozen storage is recorded independently from all thermal carriers.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Measured or sub-meter-allocated grid electricity used by packaging and frozen storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging and frozen storage purchased steam (`packaging_storage_purchased_steam`)

Purchased steam used for packaging and frozen storage is recorded separately from hot water and fuels.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased steam assigned to packaging and frozen storage when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging and frozen storage purchased hot water (`packaging_storage_purchased_hot_water`)

Purchased hot water used for packaging and frozen storage is recorded separately from steam.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased hot-water mass assigned to packaging and frozen storage when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging and frozen storage natural gas (`packaging_storage_natural_gas`)

Natural gas used by equipment serving packaging and frozen storage is recorded independently from diesel and LPG.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas energy assigned to packaging and frozen storage using the documented calorific-value convention
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging and frozen storage diesel (`packaging_storage_diesel`)

Diesel used by directly operated equipment serving packaging and frozen storage is recorded independently.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered or stock-reconciled diesel mass assigned to packaging and frozen storage when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging and frozen storage LPG (`packaging_storage_lpg`)

LPG used by equipment serving packaging and frozen storage is recorded independently from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Stock-reconciled LPG mass assigned to packaging and frozen storage when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging and frozen storage process water (`packaging_storage_process_water`)

Fresh process water used for packaging and frozen storage is measured separately from internally reused water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Measured fresh process-water intake assigned to packaging and frozen storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging and frozen storage R-717 refrigerant make-up (`packaging_storage_r717_makeup`)

Ammonia refrigerant make-up for packaging and frozen storage is balanced separately from R-134a.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: Calculated net R-717 make-up assigned to packaging and frozen storage from stock and service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging and frozen storage R-134a refrigerant make-up (`packaging_storage_r134a_makeup`)

R-134a refrigerant make-up for packaging and frozen storage is balanced separately from R-717.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (R-134a)
- Flow property / unit: Mass / kg
- Amount rule: Calculated net R-134a make-up assigned to packaging and frozen storage from stock and service records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Low-density polyethylene packaging film (`packaging_ldpe_packaging_film`)

Low-density polyethylene film used for the declared pack is recorded independently.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Measured net consumption of low-density polyethylene packaging film assigned to released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Polyamide/polyethylene vacuum bag (`packaging_pa_pe_vacuum_bag`)

The multilayer PA/PE vacuum bag is recorded as one specified packaging product and not merged with LDPE film.

- Selected flow: Polyamide/polyethylene multilayer vacuum bag
- Flow property / unit: Mass / kg
- Amount rule: Measured net consumption of polyamide/polyethylene multilayer vacuum bag assigned to released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Corrugated paperboard carton (`packaging_corrugated_carton`)

Corrugated paperboard cartons used for frozen-meat shipment are recorded independently from polymer packaging.

- Selected flow: Corrugated paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: Measured net consumption of corrugated paperboard carton assigned to released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### High-density polyethylene reusable crate (`packaging_hdpe_reusable_crate`)

Net consumption of reusable HDPE crates is recorded with documented returns and reuse cycles.

- Selected flow: High-density polyethylene reusable crate
- Flow property / unit: Mass / kg
- Amount rule: Measured net consumption of high-density polyethylene reusable crate assigned to released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Wooden pallet (`packaging_wooden_pallet`)

Net wooden-pallet consumption is recorded independently from cartons and polymer packaging.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured net consumption of wooden pallet assigned to released product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference frozen sheep meat output (`reference_product_output`)

This is the quantitative reference: net conforming frozen sheep meat released at the facility gate, excluding packaging mass.

- Selected flow: Meat of sheep, frozen `7a898ac1-b845-4943-bae3-94e7c24ae06d`
- Flow property / unit: Mass / kg
- Amount rule: Exactly 1 kg net conforming frozen sheep meat released; packaging mass is excluded
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `un-cpc-3-0`

##### Waste flows

###### Off-spec packaged frozen sheep meat waste (`offspec_packaged_frozen_sheep_meat_waste`)

Packaged frozen sheep meat rejected before release is weighed as a distinct product loss.

- Selected flow: Off-spec packaged frozen sheep meat
- Flow property / unit: Mass / kg
- Amount rule: Measured off-spec packaged frozen sheep-meat mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Waste low-density polyethylene packaging film (`waste_ldpe_packaging_film`)

Discarded low-density polyethylene packaging film is recorded as its own packaging-waste stream.

- Selected flow: Waste low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded low-density polyethylene packaging film mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Waste polyamide/polyethylene vacuum bag (`waste_pa_pe_vacuum_bag`)

Discarded polyamide/polyethylene multilayer vacuum bag is recorded as its own packaging-waste stream.

- Selected flow: Waste polyamide/polyethylene multilayer vacuum bag
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded polyamide/polyethylene multilayer vacuum bag mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Waste corrugated paperboard carton (`waste_corrugated_carton`)

Discarded corrugated paperboard carton is recorded as its own packaging-waste stream.

- Selected flow: Waste corrugated paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded corrugated paperboard carton mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Waste high-density polyethylene reusable crate (`waste_hdpe_reusable_crate`)

Discarded high-density polyethylene reusable crate is recorded as its own packaging-waste stream.

- Selected flow: Waste high-density polyethylene reusable crate
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded high-density polyethylene reusable crate mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Waste wooden pallet (`waste_wooden_pallet`)

Discarded wooden pallet is recorded as its own packaging-waste stream.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Measured discarded wooden pallet mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging-area wash wastewater (`packaging_area_wash_wastewater`)

Wastewater from packaging-area washing is recorded independently from frozen-store defrost water.

- Selected flow: Packaging-area wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured packaging-area wash wastewater volume transferred to treatment or off-site destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Frozen-store defrost wastewater (`frozen_store_defrost_wastewater`)

Defrost wastewater from on-site frozen storage is recorded independently from packaging-area wash water.

- Selected flow: Frozen-store defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured frozen-store defrost wastewater volume transferred to treatment or off-site destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

###### Packaging and frozen storage R-717 emission (`packaging_storage_r717_air`)

Unrecovered R-717 loss from refrigeration serving packaging and frozen storage is reported as ammonia to air.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered R-717 loss assigned to packaging and frozen storage from the refrigerant mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging and frozen storage R-134a emission (`packaging_storage_r134a_air`)

Unrecovered R-134a loss from refrigeration serving packaging and frozen storage is reported as its own air exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated unrecovered R-134a loss assigned to packaging and frozen storage from the refrigerant mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging and frozen storage fossil carbon dioxide emission (`packaging_storage_carbon_dioxide_air`)

Fossil carbon dioxide from fuels used for packaging and frozen storage is reported as its own air exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from each measured packaging and frozen storage fuel amount and its documented carbon or emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging and frozen storage nitrogen oxides emission (`packaging_storage_nitrogen_oxides_air`)

Nitrogen oxides from fuel combustion serving packaging and frozen storage are reported separately from sulfur dioxide.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Measured or calculated from stage fuel use, equipment records and the documented NOx factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging and frozen storage sulfur dioxide emission (`packaging_storage_sulfur_dioxide_air`)

Sulfur dioxide from fuel combustion serving packaging and frozen storage is reported separately from nitrogen oxides.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from stage fuel use, sulfur content and equipment records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging and frozen storage fine particulate emission (`packaging_storage_pm25_air`)

Fine particulate matter from fuel combustion serving packaging and frozen storage is reported as a size-specific air exchange.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from stage fuel use and equipment-specific records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### Process: Cleaning and disinfection (`cleaning_and_disinfection`)

#### Inputs

##### Product flows

###### Cleaning and disinfection grid electricity (`cleaning_electricity`)

Grid electricity used for cleaning and disinfection is recorded independently from all thermal carriers.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Measured or sub-meter-allocated grid electricity used by cleaning and disinfection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection purchased steam (`cleaning_purchased_steam`)

Purchased steam used for cleaning and disinfection is recorded separately from hot water and fuels.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased steam assigned to cleaning and disinfection when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection purchased hot water (`cleaning_purchased_hot_water`)

Purchased hot water used for cleaning and disinfection is recorded separately from steam.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased hot-water mass assigned to cleaning and disinfection when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection natural gas (`cleaning_natural_gas`)

Natural gas used by equipment serving cleaning and disinfection is recorded independently from diesel and LPG.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas energy assigned to cleaning and disinfection using the documented calorific-value convention
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection diesel (`cleaning_diesel`)

Diesel used by directly operated equipment serving cleaning and disinfection is recorded independently.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered or stock-reconciled diesel mass assigned to cleaning and disinfection when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection LPG (`cleaning_lpg`)

LPG used by equipment serving cleaning and disinfection is recorded independently from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Stock-reconciled LPG mass assigned to cleaning and disinfection when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection process water (`cleaning_process_water`)

Fresh process water used for cleaning and disinfection is measured separately from internally reused water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Measured fresh process-water intake assigned to cleaning and disinfection
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Sodium hydroxide cleaning solution (`cleaning_sodium_hydroxide`)

Sodium hydroxide cleaning solution is recorded separately from every other cleaner and disinfectant.

- Selected flow: Sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued sodium hydroxide cleaning solution mass minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Nitric acid cleaning solution (`cleaning_nitric_acid`)

Nitric acid cleaning solution is recorded separately from every other cleaner and disinfectant.

- Selected flow: Nitric acid cleaning solution
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued nitric acid cleaning solution mass minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Sodium hypochlorite disinfectant (`cleaning_sodium_hypochlorite`)

Sodium hypochlorite disinfectant is recorded separately from every other cleaner and disinfectant.

- Selected flow: Sodium hypochlorite disinfectant
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued sodium hypochlorite disinfectant mass minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Peracetic acid disinfectant (`cleaning_peracetic_acid`)

Peracetic acid disinfectant is recorded separately from every other cleaner and disinfectant.

- Selected flow: Peracetic acid disinfectant
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured issued peracetic acid disinfectant mass minus documented unused return
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Sanitation wastewater (`cleaning_disinfection_wastewater`)

Wastewater generated by cleaning and disinfection is measured separately from production-stage wastewater.

- Selected flow: Sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured sanitation wastewater volume transferred to treatment or off-site destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning solid residue (`cleaning_solid_residue_waste`)

Solid residue collected during cleaning is weighed separately from wastewater-treatment sludge.

- Selected flow: Cleaning solid residue
- Flow property / unit: Mass / kg
- Amount rule: Measured cleaning-residue mass sent to the documented waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

###### Cleaning and disinfection fossil carbon dioxide emission (`cleaning_carbon_dioxide_air`)

Fossil carbon dioxide from fuels used for cleaning and disinfection is reported as its own air exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from each measured cleaning and disinfection fuel amount and its documented carbon or emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection nitrogen oxides emission (`cleaning_nitrogen_oxides_air`)

Nitrogen oxides from fuel combustion serving cleaning and disinfection are reported separately from sulfur dioxide.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Measured or calculated from stage fuel use, equipment records and the documented NOx factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection sulfur dioxide emission (`cleaning_sulfur_dioxide_air`)

Sulfur dioxide from fuel combustion serving cleaning and disinfection is reported separately from nitrogen oxides.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from stage fuel use, sulfur content and equipment records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection fine particulate emission (`cleaning_pm25_air`)

Fine particulate matter from fuel combustion serving cleaning and disinfection is reported as a size-specific air exchange.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from stage fuel use and equipment-specific records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net conforming frozen sheep meat released
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### On-site wastewater treatment grid electricity (`wastewater_treatment_electricity`)

Grid electricity used for on-site wastewater treatment is recorded independently from all thermal carriers.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Measured or sub-meter-allocated grid electricity used by on-site wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment purchased steam (`wastewater_treatment_purchased_steam`)

Purchased steam used for on-site wastewater treatment is recorded separately from hot water and fuels.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased steam assigned to on-site wastewater treatment when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment purchased hot water (`wastewater_treatment_purchased_hot_water`)

Purchased hot water used for on-site wastewater treatment is recorded separately from steam.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Measured purchased hot-water mass assigned to on-site wastewater treatment when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment natural gas (`wastewater_treatment_natural_gas`)

Natural gas used by equipment serving on-site wastewater treatment is recorded independently from diesel and LPG.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered natural-gas energy assigned to on-site wastewater treatment using the documented calorific-value convention
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment diesel (`wastewater_treatment_diesel`)

Diesel used by directly operated equipment serving on-site wastewater treatment is recorded independently.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Metered or stock-reconciled diesel mass assigned to on-site wastewater treatment when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment LPG (`wastewater_treatment_lpg`)

LPG used by equipment serving on-site wastewater treatment is recorded independently from natural gas and diesel.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Stock-reconciled LPG mass assigned to on-site wastewater treatment when used
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment process water (`wastewater_treatment_process_water`)

Fresh process water used for on-site wastewater treatment is measured separately from internally reused water.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Measured fresh process-water intake assigned to on-site wastewater treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Ferric chloride treatment solution (`wastewater_treatment_ferric_chloride`)

Ferric chloride solution used for on-site treatment is recorded separately from polymer flocculant.

- Selected flow: Ferric chloride solution
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured ferric-chloride solution mass issued to on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Polyacrylamide flocculant (`wastewater_treatment_polyacrylamide`)

Polyacrylamide flocculant used for on-site treatment is recorded as one specified chemical input.

- Selected flow: Polyacrylamide flocculant
- Flow property / unit: Mass / kg formulated product
- Amount rule: Measured polyacrylamide flocculant mass issued to on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

###### Ordinary slaughterhouse wastewater input (`ordinary_wastewater_input`)

Ordinary wastewater entering on-site treatment is measured separately from high-organic-load wastewater.

- Selected flow: Ordinary slaughterhouse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured ordinary wastewater volume entering on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### High-organic-load wastewater input (`high_load_wastewater_input`)

High-organic-load wastewater entering on-site treatment is measured independently from ordinary wastewater.

- Selected flow: High-organic-load slaughterhouse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured high-organic-load wastewater volume entering on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Treated slaughterhouse wastewater (`treated_slaughterhouse_wastewater`)

Treated wastewater leaving the on-site plant is recorded before discharge or off-site transfer.

- Selected flow: Treated slaughterhouse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Measured treated-wastewater volume leaving the on-site plant
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Wastewater-treatment sludge (`wastewater_treatment_sludge`)

Sludge removed from on-site wastewater treatment is weighed as a distinct waste stream.

- Selected flow: Slaughterhouse wastewater-treatment sludge
- Flow property / unit: Mass / kg wet sludge
- Amount rule: Measured wet sludge mass sent to the documented destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Wastewater-treatment screenings (`wastewater_treatment_screenings`)

Screenings removed during on-site wastewater treatment are weighed separately from sludge.

- Selected flow: Slaughterhouse wastewater screenings
- Flow property / unit: Mass / kg
- Amount rule: Measured screenings mass sent to the documented waste destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

###### Chemical oxygen demand emission to water (`wastewater_treatment_chemical_oxygen_demand_water`)

Chemical oxygen demand to water from the on-site treatment discharge is reported as its own water exchange.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge volume multiplied by the matched COD concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Total nitrogen emission to water (`wastewater_treatment_total_nitrogen_water`)

Total nitrogen to water from the on-site treatment discharge is reported as its own water exchange.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge volume multiplied by the matched total-nitrogen concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Total phosphorus emission to water (`wastewater_treatment_total_phosphorus_water`)

Total phosphorus to water from the on-site treatment discharge is reported as its own water exchange.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge volume multiplied by the matched total-phosphorus concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Total suspended solids emission to water (`wastewater_treatment_total_suspended_solids_water`)

Total suspended solids to water from the on-site treatment discharge is reported as its own water exchange.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: Measured discharge volume multiplied by the matched total-suspended-solids concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment fossil carbon dioxide emission (`wastewater_treatment_carbon_dioxide_air`)

Fossil carbon dioxide from fuels used for on-site wastewater treatment is reported as its own air exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculated from each measured on-site wastewater treatment fuel amount and its documented carbon or emission factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment nitrogen oxides emission (`wastewater_treatment_nitrogen_oxides_air`)

Nitrogen oxides from fuel combustion serving on-site wastewater treatment are reported separately from sulfur dioxide.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Measured or calculated from stage fuel use, equipment records and the documented NOx factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment sulfur dioxide emission (`wastewater_treatment_sulfur_dioxide_air`)

Sulfur dioxide from fuel combustion serving on-site wastewater treatment is reported separately from nitrogen oxides.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from stage fuel use, sulfur content and equipment records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment fine particulate emission (`wastewater_treatment_pm25_air`)

Fine particulate matter from fuel combustion serving on-site wastewater treatment is reported as a size-specific air exchange.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Measured or calculated from stage fuel use and equipment-specific records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per m3 wastewater treated on site
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | Multi-output slaughter and cutting | First subdivide receiving, slaughter, dressing, freezing, packaging, sanitation and wastewater treatment using meters, batch records and transfer measurements so directly attributable burdens require no allocation. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `allocation_product_status` | Blood, sheepskin, edible organs, fat and bones | Treat a stream as a co-product only when it has documented product status and a beneficial destination; otherwise keep its treatment burden as waste. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `allocation_residual_shared_burdens` | Saleable meat and co-products | After subdivision, allocate only residual shared burdens using the governing study method; document the physical or economic relation, factors, reference period and affected processes. | `eu-recommendation-2021-2279-pef` |
| `allocation_waste_no_credit` | Condemned carcass, digestive contents, rejected material, wastewater, sludge and packaging waste | Do not assign avoided-product credit solely because a waste stream has incidental revenue; disclose downstream treatment and any separately justified recovery model. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `allocation_consistency_and_sensitivity` | Foreground and upstream datasets | Preserve disclosed upstream allocation, apply one consistent foreground method during the reference period and test a material alternative when the allocation choice materially changes the reference-product result. | `eu-recommendation-2021-2279-pef` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_lairage_records` | `live_sheep_receiving_and_lairage` | Live sheep; stage utilities; accepted sheep; dead-on-arrival sheep; manure; lairage wastewater; direct air emissions | Weighbridge or livestock scale, receipt log, meter, invoice, stock record and waste transfer record | timestamp; lot; supplier and origin; live weight; acceptance; meter or stock quantity by exact carrier; water; output mass or volume; destination; emission measurement or factor | Record each receipt and exact exchange, then reconcile accepted live weight to slaughter transfer | kg, kWh, MJ or m3 as specified by the card | Each receipt and each meter period | At least one representative continuous 12-month period or every campaign in a disclosed shorter seasonal period | Every included receiving and lairage area | Aggregate only identical exchanges within the same site and period; retain rejected lots and destinations separately | Scale and meter calibration; supplier record; invoice; stock reconciliation; signed waste transfer record |
| `cp_slaughter_records` | `slaughter_bleeding_skinning_evisceration` | Accepted sheep; stage utilities; carcass; blood; sheepskin; organs; digestive contents; condemned carcass; high-load wastewater; direct air emissions | Slaughter lot record, calibrated scale, meter, collection vessel record, laboratory result and waste transfer record | lot; input live weight; carcass mass; exact co-product or waste identity; mass; wastewater volume; destination; meter or stock quantity; emission basis | Record each slaughter lot and separately weigh or meter every named output and utility | kg, kWh, MJ or m3 as specified by the card | Each lot or production shift | Same period as reference-product output | Every included slaughter line | Reconcile live weight, carcass, co-products, wastes and quantified losses by lot and reporting period | Scale and meter calibration; signed lot record; inspection or release record; destination evidence; mass-balance worksheet |
| `cp_dressing_cutting_records` | `carcass_dressing_and_cutting` | Carcass; stage utilities; meat cuts; fat; bones; trimmings; off-spec meat; wastewater; direct air emissions | Cutting-lot record, calibrated scale, meter, product release and waste record | lot; carcass input; net meat output; exact co-product or waste identity; mass; wastewater volume; destination; meter or stock quantity; emission basis | Record each dressing or cutting lot and preserve bone-in or boneless product identity | kg, kWh, MJ or m3 as specified by the card | Each lot or shift | Same period as reference-product output | Every included dressing and cutting line | Reconcile input carcass mass to meat, co-products, wastes and stock change without merging stream identities | Scale and meter calibration; cut specification; release record; waste record; reconciliation worksheet |
| `cp_freezing_records` | `prechilling_and_freezing` | Unfrozen meat; stage utilities; R-717; R-134a; frozen intermediate; defrost wastewater; off-spec meat; direct emissions | Batch or continuous-line record, energy meter, refrigerant service and inventory record, temperature log and scale | lot; input and output mass; start and end time; declared frozen-state evidence; electricity and each thermal carrier; refrigerant stock, purchase, recharge, recovery and closing stock; wastewater; rejects | Record each freezing lot or campaign and reconcile product, energy, refrigerant and wastewater records | kg, kWh, MJ, m3 and recorded temperature unit | Each lot or campaign; refrigerant at each service event | Same period as reference-product output | Every included pre-chilling and freezing system | Keep each energy carrier and refrigerant separate; calculate net refrigerant loss by substance; aggregate only conforming like product forms | Scale, meter and temperature-sensor calibration; service certificate; stock reconciliation; batch release |
| `cp_packaging_storage_release_records` | `packaging_frozen_storage_and_release` | Frozen meat; exact packaging products; stage utilities; R-717; R-134a; reference product; product loss; each packaging waste; wastewater; direct emissions | Filler or packing scale, packaging issue record, warehouse movement, refrigerant record, meter and release record | lot; frozen input; net packed output; exact packaging identity and mass; return and reuse; waste mass; storage time and condition; refrigerant fields; meter quantity; release status | Record each lot through released warehouse quantity and exclude packaging from net product mass | kg, kWh, MJ, m3 and recorded storage-condition unit | Each lot plus continuous storage meters | Same period as reference-product output | Every included packing line and on-site frozen store | Net product excludes packaging; keep every product, packaging material, waste and refrigerant identity separate | Scale and meter calibration; packaging specification; warehouse reconciliation; release record; refrigerant service evidence |
| `cp_cleaning_disinfection_records` | `cleaning_and_disinfection` | Stage utilities; sodium hydroxide; nitric acid; sodium hypochlorite; peracetic acid; sanitation wastewater; solid residue; direct air emissions | Sanitation schedule, chemical issue record, water and energy meter, wastewater record and residue transfer record | serviced process; time; exact chemical; formulated mass and concentration; unused return; water; energy carrier; wastewater volume; residue mass; destination; emission basis | Record each sanitation event and allocate only shared service using a documented causal driver | kg, kWh, MJ or m3 as specified by the card | Each sanitation event and meter period | Same period as reference-product output | All sanitation serving included processes | Keep each chemical and energy carrier separate; do not double count water reused internally | Chemical certificate and issue reconciliation; meter calibration; sanitation verification; wastewater and waste record |
| `cp_onsite_wastewater_records` | `onsite_wastewater_treatment` | Ordinary wastewater; high-load wastewater; exact treatment chemicals; stage utilities; treated wastewater; sludge; screenings; air and water emissions | Influent and effluent meter, composite sample, laboratory report, chemical issue, energy meter, sludge scale and transfer record | date and time; influent class and volume; chemical identity and quantity; energy carrier; effluent volume; COD; total nitrogen; total phosphorus; suspended solids; sludge and screenings mass; destination; air-emission basis | Match flow-weighted samples to discharge volume and keep ordinary and high-load influent separate | kg, kWh, MJ, m3 and concentration unit | Continuous volume with sampling frequency disclosed | Same period as reference-product output | Every included on-site treatment line and discharge point | Calculate each water pollutant independently from matched volume and concentration; separately reconcile sludge and screenings | Flowmeter and laboratory QA; sampling plan; chemical issue; sludge scale; discharge and transfer records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | All included inventory | normalized amount = reporting-period exchange amount divided by net conforming frozen sheep-meat mass released; packaging is excluded from the denominator | period exchange amount; released net reference-product mass | amount per 1 kg reference product | `eu-recommendation-2021-2279-pef` |
| `calc_process_mass_balance` | Each foreground process | opening stock plus external and internal inputs equals closing stock plus products, co-products, wastes, internal transfers and quantified loss; report the residual without forcing closure | stock, input, output, transfer and reject records | process mass-balance residual | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_live_to_carcass_reconciliation` | Receiving and slaughter | reconcile accepted live weight to dressed carcass, blood, skin, organs, digestive contents, condemned material and documented residual | live-weight, carcass and separated-stream records | slaughter mass-balance residual | `ec-jrc-sa-bref-2024` |
| `calc_stage_utility_allocation` | Shared utilities | assign a directly metered quantity first; allocate only the reconciled shared residual using a documented causal driver such as operating time, throughput or measured load | sub-meter, site total, export, operating driver and process output | carrier amount by process | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_combustion_emissions` | Natural gas, diesel and LPG use | calculate each named air emission from the measured fuel amount and the documented site measurement or emission factor; preserve factor basis and fuel convention | fuel amount; measured concentration or factor; operating record | kg of each named air emission | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_refrigerant_loss` | R-717 and R-134a systems | unrecovered loss = opening stock plus purchases plus recharge transfers in minus recovered quantity minus closing stock minus documented transfers out; calculate separately by substance | refrigerant stock and service records | kg make-up and kg unrecovered emission by substance | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_wastewater_load` | On-site treatment discharge | pollutant load = matched treated-wastewater volume multiplied by the measured concentration; calculate COD, total nitrogen, total phosphorus and suspended solids independently | discharge volume; matched concentration; sampling period | kg of each named water emission | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_coproduct_allocation` | Residual shared burdens | allocated burden for output i = residual shared burden multiplied by the disclosed allocation factor for output i; factors shall sum to one across the allocated outputs | residual burden; product quantities; physical relation or economic value; reference period | allocated residual burden and sensitivity result | `eu-recommendation-2021-2279-pef` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product and intermediate meat | Demonstrate sheep species, frozen state, product form, bone status, lot identity and conformity; do not use the CPC 21135 UUID for edible offal or prepared meat. | Product specification; lot record; release record; selected Tiangong UUID |
| `dq_temporal_representativeness` | All foreground records | Use one representative continuous 12-month period for year-round operation or all production campaigns in a shorter disclosed seasonal period; register gaps and substitutions. | Meter and batch coverage; production calendar; gap register |
| `dq_geographic_and_technical_scope` | Site and upstream datasets | Match actual slaughter geography, sheep supply, process technology, freezing system and wastewater route; disclose every proxy and material mismatch. | Site metadata; supplier origin; equipment records; dataset geography and technology |
| `dq_inventory_completeness` | All included processes | Cover all known energy, water, material and chemical inputs and every product, co-product, waste and direct emission output; document a specific non-applicability or cut-off reason for omissions. | Complete LCI checklist; bills; stock records; meters; batch and waste records |
| `dq_mass_balance` | Sheep, carcass, meat and separated streams | Reconcile live weight and each process mass balance, disclose measurement uncertainty and investigate material residuals instead of inserting an unmeasured loss. | Signed balance worksheets; calibrated scales; residual investigation |
| `dq_cold_chain_and_release` | Pre-chilling, freezing and frozen storage | Retain lot-linked evidence of the declared frozen state, storage condition, duration and release status without inventing a default temperature or residence time. | Temperature log; sensor calibration; warehouse movement; release record |
| `dq_emissions_and_wastewater` | Air and water emissions | Link every calculated emission to measured activity data, a documented measurement or factor, applicable compartment and reference period. | Measurement report; factor source; fuel record; laboratory QA; calculation worksheet |
| `dq_coproduct_and_waste_status` | Blood, skin, organs, fat, bones and rejected material | Document destination and legal or commercial product status for each stream before treating it as a co-product; retain waste transfer evidence otherwise. | Sales or transfer record; product specification; waste manifest; allocation worksheet |
| `dq_data_provenance_and_review` | Foreground data package | Retain company-specific source records, transformations, allocation, data-quality ratings, reviewer findings and limitations sufficient to reproduce the inventory. | Data lineage register; calculation workbook; review record; limitation disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference_identity` | Reference flow | The selected flow UUID shall be `7a898ac1-b845-4943-bae3-94e7c24ae06d`, a Product flow for exact CPC 21135 using Mass and kg; do not apply it to fresh or chilled sheep meat, edible offal, other species or prepared meat. | `un-cpc-3-0` |
| `validation_reference_amount` | Quantitative reference | The reference output shall equal exactly 1 kg net conforming frozen sheep meat using Mass `93a60a56-a3c8-11da-a746-0800200b9a66` and kg from unit group `93a60a57-a4c8-11da-a746-0800200c9a66`; packaging mass shall be excluded. | `un-cpc-3-0` |
| `validation_process_selection` | Process map | Include all six required processes and include `onsite_wastewater_treatment` whenever wastewater is treated at the represented facility. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `validation_atomic_inventory` | Foreground inventory | Each card shall contain one exact exchange and one property-unit pair. Reject collection labels, selectors, combined energy carriers, multiple chemicals, multiple packaging materials, multiple wastes or multiple emissions in one Selected flow. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `validation_inventory_coverage` | Foreground inventory | Verify separate cards for live sheep, stage water and each energy carrier, each refrigerant make-up and emission, each cleaner and disinfectant, each packaging product and packaging waste, each product or co-product, each waste stream and each direct air or water emission actually present. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `validation_mass_balance` | Foreground processes | Report process and reporting-period mass-balance residuals with measurement uncertainty and investigate material residuals; do not fabricate closure. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `validation_frozen_state` | Reference product | Demonstrate the declared frozen state and preserve lot-linked pre-chilling, freezing, frozen-storage duration, condition and release evidence; no default temperature or duration may be inferred. | `un-cpc-3-0`; `ec-jrc-sa-bref-2024` |
| `validation_no_utility_double_counting` | Utilities | Verify that purchased steam and fuels, purchased hot water and its upstream heat supply, fresh and reused water, and shared utility allocations are each counted once. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `validation_refrigerants` | Refrigeration | Reconcile each refrigerant substance independently; a make-up product flow and its corresponding unrecovered air emission shall not be merged or duplicated. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `validation_wastewater` | Wastewater and on-site treatment | Keep ordinary and high-organic-load wastewater distinct, reconcile influent, effluent and sludge, and calculate each reported water emission from matched flow and concentration records. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `validation_allocation` | Co-products and shared operations | Subdivide directly attributable burdens before allocation; residual allocation factors shall sum to one and the method, period, product status and material sensitivity result shall be disclosed. | `eu-recommendation-2021-2279-pef` |
| `validation_collection_links` | Collected and calculated rows | Every collected or calculated row shall reference an implemented collection protocol; every calculation shall identify its rule or reproducible worksheet. | `eu-recommendation-2021-2279-pef` |
| `validation_data_quality_and_transparency` | Published data package | Disclose company-specific data coverage, sources, transformations, proxies, gaps, cut-offs, uncertainty, allocation, data quality and reviewer findings. | `eu-recommendation-2021-2279-pef` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground data package for frozen sheep meat, publishable as a unit process or reviewed gate-to-gate dataset |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Attributional product LCA, supply-chain modelling, facility improvement, hotspot analysis and comparison of like frozen sheep-meat forms when geography, technology, allocation and frozen-state specification are compatible |
| excluded_use | Claims for fresh or chilled meat, edible offal, goat or other species, prepared meat, food-safety certification, nutrition claims, or use outside the represented geography, period and technology without representativeness review |
| required_metadata | PCR id and lifecycle state; CPC 21135 product identity and Tiangong UUID; sheep origin; facility and geography; carcass or cut form; bone status; freezing and storage technology; frozen-storage duration and condition; reference period; system boundary; upstream datasets; packaging; wastewater route; co-product status; allocation; data owners and review status |
| required_quality_disclosure | Primary-data coverage; scale, meter, sensor and laboratory methods; live-weight and process mass-balance residuals; unresolved flow UUIDs; proxy datasets; temporal, geographic and technology limitations; cut-offs; allocation sensitivity; uncertainty; data-quality ratings and reviewer findings |
| update_trigger | Change in product form, sheep supply, slaughter or freezing technology, energy system, refrigerant, packaging, wastewater route, co-product status or allocation; new verified Tiangong identity; better representative foreground data; corrected mass balance or source revision |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | Official guidance (`official_guidance`) | United Nations Statistics Division. Central Product Classification, Version 3.0, structure and explanatory notes, 30 June 2025; retained raw structure file `CPC_Ver_3.0_Structure_30Jun2025.csv`. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf. Retrieved 2026-08-13. | Exact CPC 21135 frozen sheep-meat scope and exclusions from fresh or chilled meat and edible-offal categories |
| `ec-jrc-sa-bref-2024` | Official guidance (`official_guidance`) | Karlis, P., Presicce, F., Giner Santonja, G., Brinkmann, T. and Roudier, S. Best Available Techniques (BAT) Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries. European Commission Joint Research Centre, EUR 31752 EN, JRC135916, 2024. https://doi.org/10.2760/18199; https://publications.jrc.ec.europa.eu/repository/handle/JRC135916. Retrieved 2026-08-13. | Slaughterhouse process decomposition, utilities, cleaning, refrigeration, wastewater, co-products, wastes, emissions and foreground quality records |
| `eu-recommendation-2021-2279-pef` | Official guidance (`official_guidance`) | European Commission. Commission Recommendation (EU) 2021/2279 of 15 December 2021 on the use of the Environmental Footprint methods to measure and communicate the life cycle environmental performance of products and organisations, consolidated text 30 December 2021. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng. Retrieved 2026-08-13. | Product-specific bill of materials, company-specific data, complete LCI, allocation, normalization, transparency, data quality and verification |
