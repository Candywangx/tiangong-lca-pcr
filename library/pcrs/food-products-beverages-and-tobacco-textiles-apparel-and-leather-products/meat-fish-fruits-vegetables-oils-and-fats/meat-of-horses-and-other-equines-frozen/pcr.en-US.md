---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-horses-and-other-equines-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Meat of horses and other equines, frozen

## 1. Scope and Applicability

This PCR governs foreground data production for frozen meat of horses and other equines within CPC 3.0 subclass 21138. It covers net conforming frozen meat released from the reporting facility and excludes fresh or chilled equine meat and edible offal as reference products. The category boundary follows `un-cpc-3-0`; the process structure follows `ec-jrc-sa-bref-2024`; foreground inventory completeness, allocation, data quality, transparency, and verification rules follow `eu-recommendation-2021-2279-pef`.

The reference quantity is 1 kg net frozen product. Equine raising and inbound transport are upstream of the foreground boundary. Outbound distribution, retail, thawing, cooking, use, and end of life are downstream. No source-derived default amount or author-estimated range is provided.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-horses-and-other-equines-frozen |
| classification_refs | CPC 3.0 subclass 21138, exact |
| covered_products | Frozen meat of horses and other equines within CPC 21138, with species, carcass or cut form, and bone state declared |
| excluded_products | Fresh or chilled equine meat; edible offal; meat from non-equine species; prepared or preserved products outside CPC 21138 |
| representative_product | Net conforming frozen equine meat at frozen-store release |
| production_route | Live-animal reception; slaughter; bleeding; skinning; evisceration; carcass dressing; cutting; prechilling; freezing; packaging; frozen storage; sanitation; conditional on-site wastewater treatment |
| market_state | Frozen product released from the reporting facility |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Net conforming frozen meat of horses or other equines at frozen-store release |
| How much | 1 kg net product, excluding every packaging component |
| How well | Meets the declared commercial and food-safety release specification; species, carcass or cut form, bone state, and frozen state are declared |
| How long or cycle | One production lot through frozen-store release; storage duration and release condition are declared |
| reference_flow_link | Reference output row `pkg_reference_frozen_equine_meat` in process `packaging_frozen_storage_and_release` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net conforming frozen product; packaging mass excluded |
| Reference product flow | Meat of horses and other equines, frozen `b1d61fc0-90f2-4ef0-959b-b62596caca1a` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | equine species; carcass or cut form; bone state; frozen state at release; reporting facility; geography; reporting period; frozen-storage duration; frozen-storage condition; packaging configuration; co-product status; allocation method |

When constructing a foreground data package, every required qualifier shall appear in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Set the reference output to exactly 1 kg net conforming frozen meat after subtracting every packaging component. |
| `product_mass` | live animal, carcass, meat, co-product, solid waste | Mass | kg | Use calibrated gross, tare, and net records; declare live-weight or wet-matter basis where applicable. |
| `water_volume` | process water and each wastewater stream | Volume | m3 | Use metered volume or a documented stage water balance; keep each originating wastewater stream separate. |
| `electricity_energy` | stage electricity | Energy | kWh | Record electricity separately for each process stage and disclose any shared-meter allocation driver. |
| `purchased_steam_mass` | purchased steam | Mass | kg | Record delivered steam mass separately for each stage; do not merge it with hot water or fuel. |
| `purchased_hot_water_mass` | purchased hot water | Mass | kg | Record delivered hot-water mass separately for each stage; do not merge it with steam or fuel. |
| `natural_gas_energy` | natural gas | Energy | MJ | Convert metered quantity using the declared calorific-value basis and retain the original record. |
| `diesel_mass` | diesel fuel | Mass | kg | Convert volume only with a documented density applicable to the record and retain the original unit. |
| `lpg_mass` | liquefied petroleum gas | Mass | kg | Convert volume only with a documented density applicable to the record and retain the original unit. |
| `refrigerant_mass` | each refrigerant make-up and emission | Mass | kg | Balance each named refrigerant separately by stage; no default leakage rate is allowed. |
| `packaging_mass` | each packaging input or waste | Mass | kg | Record each material separately and exclude every packaging mass from the 1 kg net reference product. |
| `emission_mass` | each air or water emission | Mass | kg or the card-specific equivalent | Calculate each named emission separately from matched foreground records with units and factor basis disclosed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live equine animals received at the slaughter-facility gate, with species, supplier lot, net live weight, and reception time declared |
| starting_condition_role | Foreground product input; raising and inbound transport remain linked upstream activities |
| product_classification_scope | CPC 3.0 subclass 21138 frozen meat of horses and other equines; fresh or chilled equine meat and edible offal excluded |
| recursive_input_rule | Record any same-category frozen equine meat input once as an explicit product input with its upstream dataset; do not re-enter this PCR recursively inside the foreground system |
| upstream_dataset_requirement | Link transparent upstream datasets for animal raising, feed, veterinary inputs, mortality, and inbound transport when the study extends upstream |
| disclosure | Declare gate location, equine species, incoming condition, lot basis, foreground start time, upstream links, exclusions, and data gaps |

### Normative Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_foreground_gate_to_gate` | foreground_system_boundary | Begin at receipt of live equine animals at the slaughter-facility gate and end at release of 1 kg net conforming frozen equine meat from frozen storage; include reception, slaughter, dressing, cutting, prechilling, freezing, packaging, frozen storage, sanitation, and conditional on-site wastewater treatment. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `sb_upstream_exclusions` | upstream_boundary | Equine raising and inbound transport remain outside the foreground boundary; a cradle-to-gate study links transparent upstream datasets without folding those activities into these foreground process records. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `sb_downstream_exclusions` | downstream_boundary | Outbound distribution, retail, thawing, cooking, use, and end-of-life activities remain outside the foreground boundary. | `un-cpc-3-0`; `eu-recommendation-2021-2279-pef` |
| `sb_product_scope` | product_classification_scope | The reference product is CPC 3.0 subclass 21138 frozen meat of horses and other equines; fresh or chilled equine meat and edible offal are excluded as reference products. | `un-cpc-3-0` |
| `sb_same_category_recursion` | recursive_product_input | If a frozen equine meat input within this same category enters the foreground system, record it once as an explicit product input and link its upstream dataset; do not recursively reapply this PCR to that input inside the same foreground boundary. | `eu-recommendation-2021-2279-pef` |
| `sb_inventory_completeness` | foreground_inventory | Collect every known raw-material, utility, product, co-product, waste, and elementary exchange for each included process; retain electricity, steam, hot water, each fuel, each refrigerant, each chemical, each packaging material, each waste, and each emission as separate records. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `sb_conditional_treatment` | onsite_wastewater_treatment | Include on-site wastewater treatment only when operated by the reporting facility for in-scope wastewater; otherwise keep each wastewater stream as a transfer leaving the foreground system and disclose its destination. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `live_equine_receiving_and_lairage` | Live equine receiving and lairage | `required` | Always included from the facility gate through release to slaughter. | Foreground reception stage | kg accepted live equine animal |
| `equine_slaughter_bleeding_skinning_evisceration` | Equine slaughter, bleeding, skinning, and evisceration | `required` | Always included for slaughter and primary separation of carcass, blood, hide, organs, and digestive contents. | Foreground slaughter stage | kg equine carcass output |
| `equine_carcass_dressing_and_cutting` | Equine carcass dressing and cutting | `required` | Always included from carcass receipt through release of unfrozen meat cuts to chilling and freezing. | Foreground dressing and cutting stage | kg unfrozen equine meat cuts |
| `prechilling_and_freezing` | Prechilling and freezing | `required` | Always included from unfrozen meat-cut receipt through release of frozen meat to packaging. | Foreground freezing stage | kg frozen equine meat before packaging |
| `packaging_frozen_storage_and_release` | Packaging, frozen storage, and release | `required` | Always included from frozen-meat receipt through net product release at the frozen-store gate. | Foreground packaging and frozen-storage stage | 1 kg net frozen reference product |
| `cleaning_and_disinfection` | Cleaning and disinfection | `required` | Always included for sanitation attributable to in-scope slaughter, cutting, freezing, packaging, and storage operations. | Shared foreground sanitation stage | 1 kg net frozen reference product |
| `onsite_wastewater_treatment` | On-site wastewater treatment | `conditional` | Include when the reporting facility treats any in-scope wastewater before discharge or transfer; otherwise record each wastewater stream leaving the foreground system. | Conditional foreground wastewater-treatment stage | 1 kg net frozen reference product |

### Process: Live equine receiving and lairage (`live_equine_receiving_and_lairage`)

#### Inputs

##### Product flows

###### Live equine animal received at the facility gate (`rec_live_equine_input`)

The live equine animal crosses the foreground boundary at the slaughter facility gate; species and supplier lot remain declared attributes of this one input.

- Selected flow: Live equine animal
- Flow property / unit: Mass / kg live weight
- Amount rule: Record verified net live weight by lot from calibrated scales after tare correction.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Live equine receiving and lairage process water (`rec_process_water`)

Process water crosses the live equine receiving and lairage boundary for equipment operation, washing, or hygiene duties assigned to this stage.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the metered or reconciled volume consumed by this stage during the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Live equine receiving and lairage grid electricity (`rec_electricity`)

Grid electricity crosses the live equine receiving and lairage boundary to operate equipment assigned to this stage.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Record the stage meter reading; when only a shared meter exists, allocate the measured total with a documented operating driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Live equine receiving and lairage purchased steam (`rec_purchased_steam`)

Purchased steam crosses the live equine receiving and lairage boundary when the facility supplies steam to this stage.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Record the metered or supplier-reconciled steam mass attributable to this stage; report zero only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Live equine receiving and lairage purchased hot water (`rec_purchased_hot_water`)

Purchased hot water crosses the live equine receiving and lairage boundary when hot water is supplied as a separately delivered utility.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Record the delivered hot-water mass attributable to this stage from meters, delivery records, or a documented balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Live equine receiving and lairage natural gas (`rec_natural_gas`)

Natural gas crosses the live equine receiving and lairage boundary when directly combusted by equipment assigned to this stage.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record fuel consumption and convert to energy using the declared metering and calorific-value basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Live equine receiving and lairage diesel fuel (`rec_diesel`)

Diesel fuel crosses the live equine receiving and lairage boundary when stationary or mobile equipment assigned to this stage consumes diesel on site.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record issued or metered diesel mass assigned to this stage and reconcile it to stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Live equine receiving and lairage liquefied petroleum gas (`rec_lpg`)

Liquefied petroleum gas crosses the live equine receiving and lairage boundary when equipment assigned to this stage consumes it on site.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record delivered or issued LPG mass assigned to this stage and reconcile it to stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted live equine animal released to slaughter (`rec_accepted_live_equine`)

The accepted animal leaves reception as the quantified internal product transferred to the slaughter stage.

- Selected flow: Accepted live equine animal
- Flow property / unit: Mass / kg live weight
- Amount rule: Record net accepted live weight after documented reception rejection and mortality adjustments.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

###### Dead equine carcass arising during reception (`rec_dead_equine_carcass`)

A dead equine carcass leaves reception as a separately weighed waste stream with its treatment destination recorded.

- Selected flow: Dead equine carcass from reception
- Flow property / unit: Mass / kg
- Amount rule: Record actual carcass mass or a documented scale-based mass balance for each event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Lairage manure (`rec_lairage_manure`)

Lairage manure leaves the reception area as a distinct solid or semi-solid waste stream before any off-site treatment.

- Selected flow: Lairage manure
- Flow property / unit: Mass / kg wet matter
- Amount rule: Record collected wet mass and the documented destination for the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Lairage wash wastewater (`rec_lairage_wash_wastewater`)

Lairage wash wastewater leaves reception as one separately quantified liquid waste stream before on-site or off-site treatment.

- Selected flow: Lairage wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record metered discharge volume or calculate it from the documented water balance for this area.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

###### Live equine receiving and lairage fossil carbon dioxide emission (`rec_carbon_dioxide_to_air`)

Fossil carbon dioxide emission crosses from live equine receiving and lairage equipment to air as one separately reported elementary exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Live equine receiving and lairage nitrogen oxides emission (`rec_nitrogen_oxides_to_air`)

Nitrogen oxides emission crosses from live equine receiving and lairage equipment to air as one separately reported elementary exchange.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Live equine receiving and lairage sulfur dioxide emission (`rec_sulfur_dioxide_to_air`)

Sulfur dioxide emission crosses from live equine receiving and lairage equipment to air as one separately reported elementary exchange.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Live equine receiving and lairage fine particulate emission (`rec_particulate_matter_to_air`)

Fine particulate emission crosses from live equine receiving and lairage equipment to air as one separately reported elementary exchange.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted live equine animal
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_live_equine_receiving_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### Process: Equine slaughter, bleeding, skinning, and evisceration (`equine_slaughter_bleeding_skinning_evisceration`)

#### Inputs

##### Product flows

###### Accepted live equine animal transferred from reception (`sla_accepted_live_equine`)

The accepted live animal enters slaughter as the quantified internal input from reception.

- Selected flow: Accepted live equine animal
- Flow property / unit: Mass / kg live weight
- Amount rule: Use the reconciled accepted live weight transferred from reception by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine slaughter, bleeding, skinning, and evisceration process water (`sla_process_water`)

Process water crosses the equine slaughter, bleeding, skinning, and evisceration boundary for equipment operation, washing, or hygiene duties assigned to this stage.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the metered or reconciled volume consumed by this stage during the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine slaughter, bleeding, skinning, and evisceration grid electricity (`sla_electricity`)

Grid electricity crosses the equine slaughter, bleeding, skinning, and evisceration boundary to operate equipment assigned to this stage.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Record the stage meter reading; when only a shared meter exists, allocate the measured total with a documented operating driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine slaughter, bleeding, skinning, and evisceration purchased steam (`sla_purchased_steam`)

Purchased steam crosses the equine slaughter, bleeding, skinning, and evisceration boundary when the facility supplies steam to this stage.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Record the metered or supplier-reconciled steam mass attributable to this stage; report zero only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine slaughter, bleeding, skinning, and evisceration purchased hot water (`sla_purchased_hot_water`)

Purchased hot water crosses the equine slaughter, bleeding, skinning, and evisceration boundary when hot water is supplied as a separately delivered utility.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Record the delivered hot-water mass attributable to this stage from meters, delivery records, or a documented balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine slaughter, bleeding, skinning, and evisceration natural gas (`sla_natural_gas`)

Natural gas crosses the equine slaughter, bleeding, skinning, and evisceration boundary when directly combusted by equipment assigned to this stage.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record fuel consumption and convert to energy using the declared metering and calorific-value basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine slaughter, bleeding, skinning, and evisceration diesel fuel (`sla_diesel`)

Diesel fuel crosses the equine slaughter, bleeding, skinning, and evisceration boundary when stationary or mobile equipment assigned to this stage consumes diesel on site.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record issued or metered diesel mass assigned to this stage and reconcile it to stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine slaughter, bleeding, skinning, and evisceration liquefied petroleum gas (`sla_lpg`)

Liquefied petroleum gas crosses the equine slaughter, bleeding, skinning, and evisceration boundary when equipment assigned to this stage consumes it on site.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record delivered or issued LPG mass assigned to this stage and reconcile it to stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Equine carcass released to dressing (`sla_equine_carcass`)

The dressed but uncut equine carcass leaves primary slaughter as the internal product transferred to carcass dressing.

- Selected flow: Equine carcass
- Flow property / unit: Mass / kg
- Amount rule: Record verified warm carcass mass by lot after the declared dressing point.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Recovered equine blood (`sla_equine_blood`)

Equine blood leaves the bleeding step as a separately recovered co-product only when its product status and destination are documented.

- Selected flow: Equine blood
- Flow property / unit: Mass / kg
- Amount rule: Record collected blood mass delivered to the documented product destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Recovered raw equine hide (`sla_raw_equine_hide`)

The raw equine hide leaves skinning as one separately weighed co-product when transferred to a documented product use.

- Selected flow: Raw equine hide
- Flow property / unit: Mass / kg
- Amount rule: Record net hide mass by lot after removing unassociated foreign material.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Recovered equine edible organs (`sla_equine_edible_organs`)

Equine edible organs leave evisceration as one segregated co-product stream when accepted for the declared product destination.

- Selected flow: Equine edible organs
- Flow property / unit: Mass / kg
- Amount rule: Record accepted organ mass from inspection and dispatch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

###### Discarded equine blood (`sla_discarded_equine_blood`)

Blood not accepted as a product leaves the bleeding step as a separately quantified waste stream.

- Selected flow: Discarded equine blood
- Flow property / unit: Mass / kg
- Amount rule: Record the segregated wet mass and treatment destination from lot or dispatch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Rejected equine hide (`sla_rejected_equine_hide`)

A hide rejected from product use leaves skinning as a separately weighed waste stream.

- Selected flow: Rejected equine hide
- Flow property / unit: Mass / kg
- Amount rule: Record the segregated wet mass and treatment destination from lot or dispatch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Inedible equine organs (`sla_inedible_equine_organs`)

Organs classified as inedible leave evisceration as one separately recorded waste stream.

- Selected flow: Inedible equine organs
- Flow property / unit: Mass / kg
- Amount rule: Record the segregated wet mass and treatment destination from lot or dispatch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine stomach contents (`sla_equine_stomach_contents`)

Stomach contents leave evisceration as a distinct wet waste stream before treatment.

- Selected flow: Equine stomach contents
- Flow property / unit: Mass / kg
- Amount rule: Record the segregated wet mass and treatment destination from lot or dispatch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine intestinal contents (`sla_equine_intestinal_contents`)

Intestinal contents leave evisceration as a distinct wet waste stream before treatment.

- Selected flow: Equine intestinal contents
- Flow property / unit: Mass / kg
- Amount rule: Record the segregated wet mass and treatment destination from lot or dispatch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Condemned equine carcass (`sla_condemned_equine_carcass`)

A carcass condemned at slaughter leaves as a separately weighed waste stream with its destination documented.

- Selected flow: Condemned equine carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the segregated wet mass and treatment destination from lot or dispatch records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### High-organic-load slaughter wastewater (`sla_high_organic_load_wastewater`)

Blood-contaminated slaughter wastewater leaves this stage as one separately quantified liquid waste stream before treatment.

- Selected flow: High-organic-load slaughter wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record the segregated flow-meter volume or calculate it from a documented area water balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

###### Equine slaughter, bleeding, skinning, and evisceration fossil carbon dioxide emission (`sla_carbon_dioxide_to_air`)

Fossil carbon dioxide emission crosses from equine slaughter, bleeding, skinning, and evisceration equipment to air as one separately reported elementary exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine slaughter, bleeding, skinning, and evisceration nitrogen oxides emission (`sla_nitrogen_oxides_to_air`)

Nitrogen oxides emission crosses from equine slaughter, bleeding, skinning, and evisceration equipment to air as one separately reported elementary exchange.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine slaughter, bleeding, skinning, and evisceration sulfur dioxide emission (`sla_sulfur_dioxide_to_air`)

Sulfur dioxide emission crosses from equine slaughter, bleeding, skinning, and evisceration equipment to air as one separately reported elementary exchange.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine slaughter, bleeding, skinning, and evisceration fine particulate emission (`sla_particulate_matter_to_air`)

Fine particulate emission crosses from equine slaughter, bleeding, skinning, and evisceration equipment to air as one separately reported elementary exchange.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg equine carcass output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_equine_slaughter_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### Process: Equine carcass dressing and cutting (`equine_carcass_dressing_and_cutting`)

#### Inputs

##### Product flows

###### Equine carcass transferred from slaughter (`cut_equine_carcass`)

The equine carcass enters dressing and cutting as the quantified internal product from slaughter.

- Selected flow: Equine carcass
- Flow property / unit: Mass / kg
- Amount rule: Use the reconciled carcass mass transferred from slaughter by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine carcass dressing and cutting process water (`cut_process_water`)

Process water crosses the equine carcass dressing and cutting boundary for equipment operation, washing, or hygiene duties assigned to this stage.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the metered or reconciled volume consumed by this stage during the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine carcass dressing and cutting grid electricity (`cut_electricity`)

Grid electricity crosses the equine carcass dressing and cutting boundary to operate equipment assigned to this stage.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Record the stage meter reading; when only a shared meter exists, allocate the measured total with a documented operating driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine carcass dressing and cutting purchased steam (`cut_purchased_steam`)

Purchased steam crosses the equine carcass dressing and cutting boundary when the facility supplies steam to this stage.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Record the metered or supplier-reconciled steam mass attributable to this stage; report zero only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine carcass dressing and cutting purchased hot water (`cut_purchased_hot_water`)

Purchased hot water crosses the equine carcass dressing and cutting boundary when hot water is supplied as a separately delivered utility.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Record the delivered hot-water mass attributable to this stage from meters, delivery records, or a documented balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine carcass dressing and cutting natural gas (`cut_natural_gas`)

Natural gas crosses the equine carcass dressing and cutting boundary when directly combusted by equipment assigned to this stage.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record fuel consumption and convert to energy using the declared metering and calorific-value basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine carcass dressing and cutting diesel fuel (`cut_diesel`)

Diesel fuel crosses the equine carcass dressing and cutting boundary when stationary or mobile equipment assigned to this stage consumes diesel on site.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record issued or metered diesel mass assigned to this stage and reconcile it to stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine carcass dressing and cutting liquefied petroleum gas (`cut_lpg`)

Liquefied petroleum gas crosses the equine carcass dressing and cutting boundary when equipment assigned to this stage consumes it on site.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record delivered or issued LPG mass assigned to this stage and reconcile it to stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unfrozen equine meat cuts released to freezing (`cut_unfrozen_equine_meat`)

Conforming unfrozen equine meat cuts leave cutting as the internal product transferred to prechilling and freezing.

- Selected flow: Unfrozen equine meat cuts
- Flow property / unit: Mass / kg
- Amount rule: Record verified net meat mass by lot after trimming and before prechilling.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Recovered equine fat (`cut_recovered_equine_fat`)

Segregated equine fat leaves cutting as a co-product only when a documented product destination accepts it.

- Selected flow: Recovered equine fat
- Flow property / unit: Mass / kg
- Amount rule: Record weighed accepted fat mass and its dispatch destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Recovered equine bones (`cut_recovered_equine_bones`)

Segregated equine bones leave cutting as a co-product only when a documented product destination accepts them.

- Selected flow: Recovered equine bones
- Flow property / unit: Mass / kg
- Amount rule: Record weighed accepted bone mass and its dispatch destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Recovered edible equine meat trimmings (`cut_edible_equine_trimmings`)

Edible meat trimmings leave cutting as a segregated co-product when accepted for a documented food product use.

- Selected flow: Edible equine meat trimmings
- Flow property / unit: Mass / kg
- Amount rule: Record weighed accepted trimming mass by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

###### Inedible equine fat (`cut_inedible_equine_fat`)

Fat not accepted as a product leaves cutting as a separately weighed waste stream.

- Selected flow: Inedible equine fat
- Flow property / unit: Mass / kg
- Amount rule: Record segregated wet mass and documented treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Discarded equine bones (`cut_discarded_equine_bones`)

Bones not accepted as a product leave cutting as a separately weighed waste stream.

- Selected flow: Discarded equine bones
- Flow property / unit: Mass / kg
- Amount rule: Record segregated wet mass and documented treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Condemned equine meat (`cut_condemned_equine_meat`)

Meat condemned during dressing or cutting leaves as a separately weighed waste stream.

- Selected flow: Condemned equine meat
- Flow property / unit: Mass / kg
- Amount rule: Record segregated wet mass and documented treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Inedible equine muscle tissue (`cut_inedible_equine_muscle_tissue`)

Inedible muscle tissue removed during trimming leaves as one separately recorded solid waste stream.

- Selected flow: Inedible equine muscle tissue
- Flow property / unit: Mass / kg
- Amount rule: Record segregated wet mass and documented treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cutting-floor wash wastewater (`cut_floor_wash_wastewater`)

Cutting-floor wash wastewater leaves this stage as one separately quantified liquid waste stream before treatment.

- Selected flow: Cutting-floor wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record metered discharge volume or calculate it from the documented cutting-area water balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

###### Equine carcass dressing and cutting fossil carbon dioxide emission (`cut_carbon_dioxide_to_air`)

Fossil carbon dioxide emission crosses from equine carcass dressing and cutting equipment to air as one separately reported elementary exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine carcass dressing and cutting nitrogen oxides emission (`cut_nitrogen_oxides_to_air`)

Nitrogen oxides emission crosses from equine carcass dressing and cutting equipment to air as one separately reported elementary exchange.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine carcass dressing and cutting sulfur dioxide emission (`cut_sulfur_dioxide_to_air`)

Sulfur dioxide emission crosses from equine carcass dressing and cutting equipment to air as one separately reported elementary exchange.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Equine carcass dressing and cutting fine particulate emission (`cut_particulate_matter_to_air`)

Fine particulate emission crosses from equine carcass dressing and cutting equipment to air as one separately reported elementary exchange.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg unfrozen equine meat cuts
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_equine_cutting_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### Process: Prechilling and freezing (`prechilling_and_freezing`)

#### Inputs

##### Product flows

###### Unfrozen equine meat cuts transferred from cutting (`frz_unfrozen_equine_meat`)

Unfrozen equine meat cuts enter prechilling and freezing as the quantified internal product from cutting.

- Selected flow: Unfrozen equine meat cuts
- Flow property / unit: Mass / kg
- Amount rule: Use the reconciled net meat mass transferred from cutting by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Prechilling and freezing process water (`frz_process_water`)

Process water crosses the prechilling and freezing boundary for equipment operation, washing, or hygiene duties assigned to this stage.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the metered or reconciled volume consumed by this stage during the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Prechilling and freezing grid electricity (`frz_electricity`)

Grid electricity crosses the prechilling and freezing boundary to operate equipment assigned to this stage.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Record the stage meter reading; when only a shared meter exists, allocate the measured total with a documented operating driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Prechilling and freezing purchased steam (`frz_purchased_steam`)

Purchased steam crosses the prechilling and freezing boundary when the facility supplies steam to this stage.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Record the metered or supplier-reconciled steam mass attributable to this stage; report zero only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Prechilling and freezing purchased hot water (`frz_purchased_hot_water`)

Purchased hot water crosses the prechilling and freezing boundary when hot water is supplied as a separately delivered utility.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Record the delivered hot-water mass attributable to this stage from meters, delivery records, or a documented balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Prechilling and freezing natural gas (`frz_natural_gas`)

Natural gas crosses the prechilling and freezing boundary when directly combusted by equipment assigned to this stage.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record fuel consumption and convert to energy using the declared metering and calorific-value basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Prechilling and freezing diesel fuel (`frz_diesel`)

Diesel fuel crosses the prechilling and freezing boundary when stationary or mobile equipment assigned to this stage consumes diesel on site.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record issued or metered diesel mass assigned to this stage and reconcile it to stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Prechilling and freezing liquefied petroleum gas (`frz_lpg`)

Liquefied petroleum gas crosses the prechilling and freezing boundary when equipment assigned to this stage consumes it on site.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record delivered or issued LPG mass assigned to this stage and reconcile it to stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Ammonia refrigerant make-up (`frz_ammonia_refrigerant`)

Ammonia refrigerant make-up crosses the freezing boundary only when the site's R-717 circuit receives a recorded charge.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: Record the stage-attributed purchased or issued make-up mass from refrigerant service logs; report zero only with an intact-system record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### R-134a refrigerant make-up (`frz_r134a_refrigerant`)

R-134a refrigerant make-up crosses the freezing boundary only when the site's R-134a circuit receives a recorded charge.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (R-134a)
- Flow property / unit: Mass / kg
- Amount rule: Record the stage-attributed purchased or issued make-up mass from refrigerant service logs; report zero only with an intact-system record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Frozen equine meat released to packaging (`frz_frozen_equine_meat`)

Conforming frozen equine meat leaves freezing as the internal product transferred to packaging.

- Selected flow: Frozen equine meat before packaging
- Flow property / unit: Mass / kg
- Amount rule: Record verified net frozen meat mass by lot at release to packaging.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

###### Freezer defrost wastewater (`frz_freezer_defrost_wastewater`)

Freezer defrost wastewater leaves the freezing stage as one separately quantified liquid waste stream before treatment.

- Selected flow: Freezer defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record metered volume or calculate it from documented defrost-cycle water records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

###### Ammonia refrigerant emission (`frz_ammonia_to_air`)

Ammonia refrigerant emission crosses from the freezing refrigeration circuit to air as one separately reported elementary exchange.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the stage loss from opening inventory, documented additions, closing inventory, and recovered mass; assign no default leakage rate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### R-134a refrigerant emission (`frz_r134a_to_air`)

R-134a refrigerant emission crosses from the freezing refrigeration circuit to air as one separately reported elementary exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the stage loss from opening inventory, documented additions, closing inventory, and recovered mass; assign no default leakage rate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Prechilling and freezing fossil carbon dioxide emission (`frz_carbon_dioxide_to_air`)

Fossil carbon dioxide emission crosses from prechilling and freezing equipment to air as one separately reported elementary exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Prechilling and freezing nitrogen oxides emission (`frz_nitrogen_oxides_to_air`)

Nitrogen oxides emission crosses from prechilling and freezing equipment to air as one separately reported elementary exchange.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Prechilling and freezing sulfur dioxide emission (`frz_sulfur_dioxide_to_air`)

Sulfur dioxide emission crosses from prechilling and freezing equipment to air as one separately reported elementary exchange.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Prechilling and freezing fine particulate emission (`frz_particulate_matter_to_air`)

Fine particulate emission crosses from prechilling and freezing equipment to air as one separately reported elementary exchange.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg frozen equine meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prechilling_freezing_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### Process: Packaging, frozen storage, and release (`packaging_frozen_storage_and_release`)

#### Inputs

##### Product flows

###### Frozen equine meat transferred from freezing (`pkg_frozen_equine_meat_input`)

Frozen equine meat enters packaging as the quantified internal product from the freezing stage.

- Selected flow: Frozen equine meat before packaging
- Flow property / unit: Mass / kg
- Amount rule: Use the reconciled net frozen meat mass transferred from freezing by lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging, frozen storage, and release process water (`pkg_process_water`)

Process water crosses the packaging, frozen storage, and release boundary for equipment operation, washing, or hygiene duties assigned to this stage.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the metered or reconciled volume consumed by this stage during the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging, frozen storage, and release grid electricity (`pkg_electricity`)

Grid electricity crosses the packaging, frozen storage, and release boundary to operate equipment assigned to this stage.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Record the stage meter reading; when only a shared meter exists, allocate the measured total with a documented operating driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging, frozen storage, and release purchased steam (`pkg_purchased_steam`)

Purchased steam crosses the packaging, frozen storage, and release boundary when the facility supplies steam to this stage.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Record the metered or supplier-reconciled steam mass attributable to this stage; report zero only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging, frozen storage, and release purchased hot water (`pkg_purchased_hot_water`)

Purchased hot water crosses the packaging, frozen storage, and release boundary when hot water is supplied as a separately delivered utility.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Record the delivered hot-water mass attributable to this stage from meters, delivery records, or a documented balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging, frozen storage, and release natural gas (`pkg_natural_gas`)

Natural gas crosses the packaging, frozen storage, and release boundary when directly combusted by equipment assigned to this stage.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record fuel consumption and convert to energy using the declared metering and calorific-value basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging, frozen storage, and release diesel fuel (`pkg_diesel`)

Diesel fuel crosses the packaging, frozen storage, and release boundary when stationary or mobile equipment assigned to this stage consumes diesel on site.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record issued or metered diesel mass assigned to this stage and reconcile it to stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging, frozen storage, and release liquefied petroleum gas (`pkg_lpg`)

Liquefied petroleum gas crosses the packaging, frozen storage, and release boundary when equipment assigned to this stage consumes it on site.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record delivered or issued LPG mass assigned to this stage and reconcile it to stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Ammonia refrigerant make-up for frozen storage (`pkg_ammonia_refrigerant`)

Ammonia refrigerant make-up crosses the frozen-storage boundary only when the site's R-717 circuit receives a recorded charge.

- Selected flow: Ammonia refrigerant (R-717)
- Flow property / unit: Mass / kg
- Amount rule: Record the frozen-store-attributed purchased or issued make-up mass from refrigerant service logs; report zero only with an intact-system record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### R-134a refrigerant make-up for frozen storage (`pkg_r134a_refrigerant`)

R-134a refrigerant make-up crosses the frozen-storage boundary only when the site's R-134a circuit receives a recorded charge.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant (R-134a)
- Flow property / unit: Mass / kg
- Amount rule: Record the frozen-store-attributed purchased or issued make-up mass from refrigerant service logs; report zero only with an intact-system record.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Low-density polyethylene packaging film (`pkg_ldpe_film`)

Low-density polyethylene film crosses the packaging boundary as one material-specific primary packaging input.

- Selected flow: Low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Record issued net material mass attributable to released product after documented reuse allocation where relevant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Polyamide packaging film (`pkg_polyamide_film`)

Polyamide film crosses the packaging boundary as one material-specific barrier packaging input.

- Selected flow: Polyamide packaging film
- Flow property / unit: Mass / kg
- Amount rule: Record issued net material mass attributable to released product after documented reuse allocation where relevant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Corrugated paperboard carton (`pkg_paperboard_carton`)

A corrugated paperboard carton crosses the packaging boundary as one secondary packaging component.

- Selected flow: Corrugated paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: Record issued net material mass attributable to released product after documented reuse allocation where relevant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### High-density polyethylene reusable crate (`pkg_hdpe_crate`)

A high-density polyethylene reusable crate crosses the packaging boundary as one transport packaging component; allocation over reuse cycles is documented from site records.

- Selected flow: High-density polyethylene reusable crate
- Flow property / unit: Mass / kg
- Amount rule: Record issued net material mass attributable to released product after documented reuse allocation where relevant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Wooden pallet (`pkg_wooden_pallet`)

A wooden pallet crosses the packaging boundary as one transport packaging component; allocation over reuse cycles is documented from site records.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Record issued net material mass attributable to released product after documented reuse allocation where relevant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Reference frozen equine meat released from the frozen store (`pkg_reference_frozen_equine_meat`)

The verified Tiangong Product flow is the sole reference output; it represents net conforming frozen equine meat at frozen-store release, excluding packaging mass.

- Selected flow: Meat of horses and other equines, frozen `b1d61fc0-90f2-4ef0-959b-b62596caca1a`
- Flow property / unit: Mass / kg
- Amount rule: Set exactly 1 kg net reference product after excluding all packaging mass.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `un-cpc-3-0`; `eu-recommendation-2021-2279-pef`

##### Waste flows

###### Packaging-area wash wastewater (`pkg_packaging_area_wash_wastewater`)

Packaging-area wash wastewater leaves packaging as one separately quantified liquid waste stream before treatment.

- Selected flow: Packaging-area wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record metered volume or calculate it from the documented area water balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Frozen-store defrost wastewater (`pkg_frozen_store_defrost_wastewater`)

Frozen-store defrost wastewater leaves frozen storage as one separately quantified liquid waste stream before treatment.

- Selected flow: Frozen-store defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record metered volume or calculate it from the documented area water balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Waste low-density polyethylene packaging film (`pkg_waste_ldpe_film`)

Discarded low-density polyethylene film leaves packaging as one material-specific waste stream.

- Selected flow: Waste low-density polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Record segregated net mass and the documented treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Waste polyamide packaging film (`pkg_waste_polyamide_film`)

Discarded polyamide film leaves packaging as one material-specific waste stream.

- Selected flow: Waste polyamide packaging film
- Flow property / unit: Mass / kg
- Amount rule: Record segregated net mass and the documented treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Waste corrugated paperboard carton (`pkg_waste_paperboard_carton`)

Discarded corrugated paperboard cartons leave packaging as one material-specific waste stream.

- Selected flow: Waste corrugated paperboard carton
- Flow property / unit: Mass / kg
- Amount rule: Record segregated net mass and the documented treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Damaged high-density polyethylene crate (`pkg_damaged_hdpe_crate`)

A damaged high-density polyethylene crate leaves packaging as one material-specific waste stream after its recorded reuse life.

- Selected flow: Damaged high-density polyethylene crate
- Flow property / unit: Mass / kg
- Amount rule: Record segregated net mass and the documented treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Waste wooden pallet (`pkg_waste_wooden_pallet`)

A discarded wooden pallet leaves packaging as one material-specific waste stream after its recorded reuse life.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Record segregated net mass and the documented treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Condemned frozen equine meat (`pkg_condemned_frozen_equine_meat`)

Frozen equine meat rejected before release leaves as a separately weighed product waste stream.

- Selected flow: Condemned frozen equine meat
- Flow property / unit: Mass / kg
- Amount rule: Record segregated net mass and the documented treatment destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

###### Ammonia refrigerant emission from frozen storage (`pkg_ammonia_to_air`)

Ammonia refrigerant emission crosses from the frozen-storage refrigeration circuit to air as one separately reported elementary exchange.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the frozen-store loss from opening inventory, documented additions, closing inventory, and recovered mass; assign no default leakage rate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### R-134a refrigerant emission from frozen storage (`pkg_r134a_to_air`)

R-134a refrigerant emission crosses from the frozen-storage refrigeration circuit to air as one separately reported elementary exchange.

- Selected flow: 1,1,1,2-Tetrafluoroethane to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate the frozen-store loss from opening inventory, documented additions, closing inventory, and recovered mass; assign no default leakage rate.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging, frozen storage, and release fossil carbon dioxide emission (`pkg_carbon_dioxide_to_air`)

Fossil carbon dioxide emission crosses from packaging, frozen storage, and release equipment to air as one separately reported elementary exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging, frozen storage, and release nitrogen oxides emission (`pkg_nitrogen_oxides_to_air`)

Nitrogen oxides emission crosses from packaging, frozen storage, and release equipment to air as one separately reported elementary exchange.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging, frozen storage, and release sulfur dioxide emission (`pkg_sulfur_dioxide_to_air`)

Sulfur dioxide emission crosses from packaging, frozen storage, and release equipment to air as one separately reported elementary exchange.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging, frozen storage, and release fine particulate emission (`pkg_particulate_matter_to_air`)

Fine particulate emission crosses from packaging, frozen storage, and release equipment to air as one separately reported elementary exchange.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_frozen_storage_release_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### Process: Cleaning and disinfection (`cleaning_and_disinfection`)

#### Inputs

##### Product flows

###### Cleaning and disinfection process water (`cip_process_water`)

Process water crosses the cleaning and disinfection boundary for equipment operation, washing, or hygiene duties assigned to this stage.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the metered or reconciled volume consumed by this stage during the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection grid electricity (`cip_electricity`)

Grid electricity crosses the cleaning and disinfection boundary to operate equipment assigned to this stage.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Record the stage meter reading; when only a shared meter exists, allocate the measured total with a documented operating driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection purchased steam (`cip_purchased_steam`)

Purchased steam crosses the cleaning and disinfection boundary when the facility supplies steam to this stage.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Record the metered or supplier-reconciled steam mass attributable to this stage; report zero only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection purchased hot water (`cip_purchased_hot_water`)

Purchased hot water crosses the cleaning and disinfection boundary when hot water is supplied as a separately delivered utility.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Record the delivered hot-water mass attributable to this stage from meters, delivery records, or a documented balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection natural gas (`cip_natural_gas`)

Natural gas crosses the cleaning and disinfection boundary when directly combusted by equipment assigned to this stage.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record fuel consumption and convert to energy using the declared metering and calorific-value basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection diesel fuel (`cip_diesel`)

Diesel fuel crosses the cleaning and disinfection boundary when stationary or mobile equipment assigned to this stage consumes diesel on site.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record issued or metered diesel mass assigned to this stage and reconcile it to stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection liquefied petroleum gas (`cip_lpg`)

Liquefied petroleum gas crosses the cleaning and disinfection boundary when equipment assigned to this stage consumes it on site.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record delivered or issued LPG mass assigned to this stage and reconcile it to stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Sodium hydroxide cleaning solution (`cip_sodium_hydroxide`)

Sodium hydroxide cleaning solution crosses the sanitation boundary only when a site record confirms its use.

- Selected flow: Sodium hydroxide cleaning solution
- Flow property / unit: Mass / kg solution
- Amount rule: Record issued solution mass and concentration from stock, dosing, and batch records; report zero only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Nitric acid cleaning solution (`cip_nitric_acid`)

Nitric acid cleaning solution crosses the sanitation boundary only when a site record confirms its use.

- Selected flow: Nitric acid cleaning solution
- Flow property / unit: Mass / kg solution
- Amount rule: Record issued solution mass and concentration from stock, dosing, and batch records; report zero only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Sodium hypochlorite disinfectant (`cip_sodium_hypochlorite`)

Sodium hypochlorite disinfectant crosses the sanitation boundary only when a site record confirms its use.

- Selected flow: Sodium hypochlorite disinfectant
- Flow property / unit: Mass / kg solution
- Amount rule: Record issued solution mass and concentration from stock, dosing, and batch records; report zero only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Peracetic acid disinfectant (`cip_peracetic_acid`)

Peracetic acid disinfectant crosses the sanitation boundary only when a site record confirms its use.

- Selected flow: Peracetic acid disinfectant
- Flow property / unit: Mass / kg solution
- Amount rule: Record issued solution mass and concentration from stock, dosing, and batch records; report zero only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Sanitation wastewater (`cip_sanitation_wastewater`)

Sanitation wastewater leaves cleaning and disinfection as one separately quantified liquid waste stream before treatment.

- Selected flow: Sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record metered discharge volume or calculate it from the documented sanitation water balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

###### Cleaning and disinfection fossil carbon dioxide emission (`cip_carbon_dioxide_to_air`)

Fossil carbon dioxide emission crosses from cleaning and disinfection equipment to air as one separately reported elementary exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection nitrogen oxides emission (`cip_nitrogen_oxides_to_air`)

Nitrogen oxides emission crosses from cleaning and disinfection equipment to air as one separately reported elementary exchange.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection sulfur dioxide emission (`cip_sulfur_dioxide_to_air`)

Sulfur dioxide emission crosses from cleaning and disinfection equipment to air as one separately reported elementary exchange.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cleaning and disinfection fine particulate emission (`cip_particulate_matter_to_air`)

Fine particulate emission crosses from cleaning and disinfection equipment to air as one separately reported elementary exchange.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using a documented sanitation allocation driver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cleaning_disinfection_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### On-site wastewater treatment process water (`wwt_process_water`)

Process water crosses the on-site wastewater treatment boundary for equipment operation, washing, or hygiene duties assigned to this stage.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record the metered or reconciled volume consumed by this stage during the reporting period.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment grid electricity (`wwt_electricity`)

Grid electricity crosses the on-site wastewater treatment boundary to operate equipment assigned to this stage.

- Selected flow: Electricity, grid
- Flow property / unit: Energy / kWh
- Amount rule: Record the stage meter reading; when only a shared meter exists, allocate the measured total with a documented operating driver.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment purchased steam (`wwt_purchased_steam`)

Purchased steam crosses the on-site wastewater treatment boundary when the facility supplies steam to this stage.

- Selected flow: Purchased steam
- Flow property / unit: Mass / kg
- Amount rule: Record the metered or supplier-reconciled steam mass attributable to this stage; report zero only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment purchased hot water (`wwt_purchased_hot_water`)

Purchased hot water crosses the on-site wastewater treatment boundary when hot water is supplied as a separately delivered utility.

- Selected flow: Purchased hot water
- Flow property / unit: Mass / kg
- Amount rule: Record the delivered hot-water mass attributable to this stage from meters, delivery records, or a documented balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment natural gas (`wwt_natural_gas`)

Natural gas crosses the on-site wastewater treatment boundary when directly combusted by equipment assigned to this stage.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Record fuel consumption and convert to energy using the declared metering and calorific-value basis.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment diesel fuel (`wwt_diesel`)

Diesel fuel crosses the on-site wastewater treatment boundary when stationary or mobile equipment assigned to this stage consumes diesel on site.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record issued or metered diesel mass assigned to this stage and reconcile it to stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment liquefied petroleum gas (`wwt_lpg`)

Liquefied petroleum gas crosses the on-site wastewater treatment boundary when equipment assigned to this stage consumes it on site.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record delivered or issued LPG mass assigned to this stage and reconcile it to stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Ferric chloride treatment solution (`wwt_ferric_chloride`)

Ferric chloride solution crosses the wastewater-treatment boundary only when a dosing record confirms its use.

- Selected flow: Ferric chloride solution
- Flow property / unit: Mass / kg solution
- Amount rule: Record dosed solution mass and concentration from treatment logs; report zero only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Polyacrylamide flocculant (`wwt_polyacrylamide`)

Polyacrylamide flocculant crosses the wastewater-treatment boundary only when a dosing record confirms its use.

- Selected flow: Polyacrylamide flocculant
- Flow property / unit: Mass / kg solution
- Amount rule: Record dosed solution mass and concentration from treatment logs; report zero only with evidence of absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Waste flows

###### Lairage wash wastewater entering treatment (`wwt_lairage_wash_wastewater`)

Lairage wash wastewater enters on-site treatment as one separately reconciled waste input from its originating foreground stage.

- Selected flow: Lairage wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use the originating stage volume and reconcile it to the treatment inlet flow balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### High-organic-load slaughter wastewater entering treatment (`wwt_high_organic_load_wastewater`)

High-organic-load slaughter wastewater enters on-site treatment as one separately reconciled waste input from its originating foreground stage.

- Selected flow: High-organic-load slaughter wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use the originating stage volume and reconcile it to the treatment inlet flow balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Cutting-floor wash wastewater entering treatment (`wwt_cutting_floor_wastewater`)

Cutting-floor wash wastewater enters on-site treatment as one separately reconciled waste input from its originating foreground stage.

- Selected flow: Cutting-floor wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use the originating stage volume and reconcile it to the treatment inlet flow balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Freezer defrost wastewater entering treatment (`wwt_freezer_defrost_wastewater`)

Freezer defrost wastewater enters on-site treatment as one separately reconciled waste input from its originating foreground stage.

- Selected flow: Freezer defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use the originating stage volume and reconcile it to the treatment inlet flow balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Packaging-area wash wastewater entering treatment (`wwt_packaging_area_wastewater`)

Packaging-area wash wastewater enters on-site treatment as one separately reconciled waste input from its originating foreground stage.

- Selected flow: Packaging-area wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use the originating stage volume and reconcile it to the treatment inlet flow balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Frozen-store defrost wastewater entering treatment (`wwt_frozen_store_defrost_wastewater`)

Frozen-store defrost wastewater enters on-site treatment as one separately reconciled waste input from its originating foreground stage.

- Selected flow: Frozen-store defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use the originating stage volume and reconcile it to the treatment inlet flow balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Sanitation wastewater entering treatment (`wwt_sanitation_wastewater`)

Sanitation wastewater enters on-site treatment as one separately reconciled waste input from its originating foreground stage.

- Selected flow: Sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Use the originating stage volume and reconcile it to the treatment inlet flow balance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Treated slaughterhouse wastewater (`wwt_treated_wastewater`)

Treated slaughterhouse wastewater leaves on-site treatment as one quantified water-carrier waste flow before discharge or further transfer.

- Selected flow: Treated slaughterhouse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record final effluent flow-meter volume and discharge or transfer destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Slaughterhouse wastewater-treatment sludge (`wwt_sludge`)

Wastewater-treatment sludge leaves the treatment process as one separately weighed wet waste stream.

- Selected flow: Slaughterhouse wastewater-treatment sludge
- Flow property / unit: Mass / kg wet matter
- Amount rule: Record dewatered wet mass and treatment destination from operating records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Slaughterhouse wastewater screenings (`wwt_screenings`)

Screenings removed from slaughterhouse wastewater leave treatment as one separately weighed wet waste stream.

- Selected flow: Slaughterhouse wastewater screenings
- Flow property / unit: Mass / kg wet matter
- Amount rule: Record dewatered wet mass and treatment destination from operating records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

##### Elementary flows

###### Chemical oxygen demand discharge (`wwt_cod_to_water`)

Chemical oxygen demand discharge crosses from the on-site treatment outlet to the receiving water compartment as one separately reported elementary exchange.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg O2-equivalent
- Amount rule: Calculate discharged COD mass from matched effluent volume and laboratory concentration records after blank, unit, and time alignment checks.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Total nitrogen discharge (`wwt_total_nitrogen_to_water`)

Total nitrogen discharge crosses from the on-site treatment outlet to the receiving water compartment as one separately reported elementary exchange.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg N
- Amount rule: Calculate discharged total nitrogen mass from matched effluent volume and laboratory concentration records after blank, unit, and time alignment checks.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Total phosphorus discharge (`wwt_total_phosphorus_to_water`)

Total phosphorus discharge crosses from the on-site treatment outlet to the receiving water compartment as one separately reported elementary exchange.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg P
- Amount rule: Calculate discharged total phosphorus mass from matched effluent volume and laboratory concentration records after blank, unit, and time alignment checks.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### Total suspended solids discharge (`wwt_total_suspended_solids_to_water`)

Total suspended solids discharge crosses from the on-site treatment outlet to the receiving water compartment as one separately reported elementary exchange.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate discharged total suspended solids mass from matched effluent volume and laboratory concentration records after blank, unit, and time alignment checks.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment fossil carbon dioxide emission (`wwt_carbon_dioxide_to_air`)

Fossil carbon dioxide emission crosses from on-site wastewater treatment equipment to air as one separately reported elementary exchange.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment nitrogen oxides emission (`wwt_nitrogen_oxides_to_air`)

Nitrogen oxides emission crosses from on-site wastewater treatment equipment to air as one separately reported elementary exchange.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg NO2-equivalent
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment sulfur dioxide emission (`wwt_sulfur_dioxide_to_air`)

Sulfur dioxide emission crosses from on-site wastewater treatment equipment to air as one separately reported elementary exchange.

- Selected flow: Sulfur dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`

###### On-site wastewater treatment fine particulate emission (`wwt_particulate_matter_to_air`)

Fine particulate emission crosses from on-site wastewater treatment equipment to air as one separately reported elementary exchange.

- Selected flow: Particulate matter, <2.5 um, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate from collected stage fuel records and the dataset's disclosed measurement or emission-factor basis; assign no PCR default.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net reference product using measured treated volume
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_onsite_wastewater_treatment_records`
- Sources: `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef`


## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivision_first` | separable_processes | Avoid allocation first by subdividing metered operations and directly assigning stage utilities, packaging, chemicals, wastes, and emissions to the process output that causes them. | `eu-recommendation-2021-2279-pef` |
| `alloc_product_waste_status` | all_non_reference_outputs | Classify every blood, hide, organ, fat, bone, trimming, condemned-material, digestive-content, sludge, screening, and packaging output as a product, co-product, or waste from documented legal, technical, and destination evidence; do not infer saleable status. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `alloc_physical_relation` | joint_products | When subdivision cannot avoid burden sharing and a causal physical relation can be demonstrated, allocate the residual burden with that documented physical relation and report the driver values. | `eu-recommendation-2021-2279-pef` |
| `alloc_economic_fallback` | joint_products | When no defensible physical relation exists, use a documented economic relation for the same representative period and disclose prices, currency, geography, period, and sensitivity; this PCR supplies no default shares. | `eu-recommendation-2021-2279-pef` |
| `alloc_waste_no_credit` | waste_outputs | Assign no co-product credit to a waste output unless the foreground record demonstrates recovered product status and a receiving product use; preserve treatment burdens and destination records otherwise. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `alloc_reference_consistency` | reference_product | Normalize only after applying one consistently documented allocation method across the reporting period, and reconcile allocated burdens to the unallocated foreground total. | `eu-recommendation-2021-2279-pef` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Foreground quantities come from facility measurements, logs, invoices, stock movements, laboratory reports, and reconciled calculations. Source documents define method and completeness requirements, not default quantities.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_equine_receiving_records` | `live_equine_receiving_and_lairage` | all_atomic_exchanges | site_measurement_record | timestamp;lot_id;flow_name;gross_amount;tare_amount;net_amount;meter_reading;unit;destination;evidence_ref | direct_measurement_plus_record_reconciliation | native_record_unit_then_card_unit | continuous_meter_or_per_lot_record | declared_reporting_period_covering_all_in_scope_operations | reporting_facility | sum_valid_records_then_normalize_to_process_output | calibration_log;weigh_ticket;meter_log;invoice;stock_record;dispatch_record |
| `cp_equine_slaughter_records` | `equine_slaughter_bleeding_skinning_evisceration` | all_atomic_exchanges | site_measurement_record | timestamp;lot_id;flow_name;gross_amount;tare_amount;net_amount;meter_reading;unit;destination;inspection_status;evidence_ref | direct_measurement_plus_mass_balance_reconciliation | native_record_unit_then_card_unit | continuous_meter_or_per_lot_record | declared_reporting_period_covering_all_in_scope_operations | reporting_facility | sum_valid_records_then_normalize_to_process_output | calibration_log;weigh_ticket;meter_log;invoice;inspection_record;dispatch_record |
| `cp_equine_cutting_records` | `equine_carcass_dressing_and_cutting` | all_atomic_exchanges | site_measurement_record | timestamp;lot_id;flow_name;input_mass;output_mass;meter_reading;unit;destination;inspection_status;evidence_ref | direct_measurement_plus_mass_balance_reconciliation | native_record_unit_then_card_unit | continuous_meter_or_per_lot_record | declared_reporting_period_covering_all_in_scope_operations | reporting_facility | sum_valid_records_then_normalize_to_process_output | calibration_log;weigh_ticket;meter_log;invoice;inspection_record;dispatch_record |
| `cp_prechilling_freezing_records` | `prechilling_and_freezing` | all_atomic_exchanges | site_measurement_record | timestamp;lot_id;flow_name;input_mass;output_mass;meter_reading;refrigerant_opening_stock;refrigerant_addition;refrigerant_closing_stock;refrigerant_recovery;unit;evidence_ref | direct_measurement_plus_inventory_balance | native_record_unit_then_card_unit | continuous_meter_or_per_lot_record | declared_reporting_period_covering_all_in_scope_operations | reporting_facility | sum_valid_records_then_normalize_to_process_output | calibration_log;weigh_ticket;meter_log;invoice;refrigerant_service_log;stock_record |
| `cp_packaging_frozen_storage_release_records` | `packaging_frozen_storage_and_release` | all_atomic_exchanges | site_measurement_record | timestamp;lot_id;flow_name;issued_mass;returned_mass;waste_mass;product_net_mass;meter_reading;storage_duration;refrigerant_opening_stock;refrigerant_addition;refrigerant_closing_stock;refrigerant_recovery;unit;evidence_ref | direct_measurement_plus_inventory_balance | native_record_unit_then_card_unit | continuous_meter_or_per_lot_record | declared_reporting_period_covering_all_in_scope_operations | reporting_facility | sum_valid_records_then_normalize_to_reference_output | calibration_log;weigh_ticket;meter_log;invoice;packaging_issue_record;release_record;refrigerant_service_log |
| `cp_cleaning_disinfection_records` | `cleaning_and_disinfection` | all_atomic_exchanges | site_measurement_record | timestamp;cleaning_event;flow_name;issued_mass;solution_concentration;meter_reading;discharge_volume;unit;served_area;served_process;evidence_ref | direct_measurement_plus_sanitation_allocation | native_record_unit_then_card_unit | per_cleaning_event_plus_continuous_meter | declared_reporting_period_covering_all_in_scope_operations | reporting_facility | sum_valid_records_then_allocate_with_documented_sanitation_driver | meter_log;dosing_log;stock_record;cleaning_schedule;calibration_log |
| `cp_onsite_wastewater_treatment_records` | `onsite_wastewater_treatment` | all_atomic_exchanges | site_measurement_record | timestamp;flow_name;inlet_volume;outlet_volume;chemical_dose;wet_residue_mass;sample_time;concentration;unit;destination;evidence_ref | direct_measurement_plus_matched_flow_concentration_calculation | native_record_unit_then_card_unit | continuous_flow_plus_each_compliance_sample | declared_reporting_period_covering_all_in_scope_operations | reporting_facility | time_align_valid_records_then_normalize_to_reference_output | flow_meter_log;laboratory_report;chain_of_custody;dosing_log;residue_dispatch_record;calibration_log |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_receiving_mass_balance` | live equine receiving | accepted live mass = received live mass - dead carcass mass - documented reception mass adjustment; retain lot-level reconciliation | received live mass; dead carcass mass; documented adjustment | accepted live equine animal mass | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_slaughter_mass_balance` | slaughter outputs | reconcile accepted live mass to carcass, blood, hide, organ, digestive-content, condemned-material, wastewater-solids, and documented process-loss records without assigning a default yield | accepted live mass; every weighed slaughter output; documented stock change | slaughter mass-balance residual | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_cutting_mass_balance` | dressing and cutting outputs | reconcile carcass input to unfrozen meat, fat, bone, trimming, condemned-meat, inedible-tissue, and stock-change records without assigning a default yield | carcass mass; every weighed cutting output; documented stock change | cutting mass-balance residual | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_stage_utility_normalization` | stage utilities | stage quantity per basis = validated stage meter, invoice, or stock quantity divided by the matching process output or reference-product mass | validated stage quantity; matching denominator mass | normalized atomic utility quantity | `eu-recommendation-2021-2279-pef` |
| `calc_refrigerant_loss` | each refrigerant circuit | refrigerant loss = opening stock + documented additions - closing stock - documented recovered or transferred mass; calculate separately for each named refrigerant and stage | opening stock; additions; closing stock; recovered mass; transferred mass | named refrigerant emission mass | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_packaging_material_balance` | each packaging material | packaging consumed = issued mass - returned unused mass - closing work-in-process stock; reusable packaging allocation uses recorded cycles with the method disclosed | issued mass; returned mass; stock change; recorded reuse cycles | material-specific packaging input per reference product | `eu-recommendation-2021-2279-pef` |
| `calc_combustion_emission` | each stage combustion emission | emission mass = stage fuel quantity multiplied by the disclosed site-measurement or factor basis; calculate each named air emission separately and do not assign a PCR default factor | stage fuel quantity; disclosed measurement or factor; oxidation and unit-conversion records | single air-emission mass | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_wastewater_flow_balance` | on-site wastewater treatment | treated volume balance = sum of separately recorded inlet wastewater volumes plus treatment water - treated wastewater volume - documented water retained in sludge - documented evaporation | each inlet volume; treatment water; effluent volume; sludge water; evaporation record | wastewater-treatment volume-balance residual | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_effluent_pollutant_load` | each water emission | discharged mass = time-matched final-effluent volume multiplied by validated final-effluent concentration with unit conversion; calculate each analyte separately | final-effluent volume; analyte concentration; sample time; unit conversion | single water-emission mass | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `calc_reference_product_mass` | reference product | net reference mass = gross released packaged lot mass - all packaging-component mass; normalize the foreground inventory to exactly 1 kg net conforming frozen product | gross released mass; each packaging-component mass; release status | 1 kg net reference product | `un-cpc-3-0`; `eu-recommendation-2021-2279-pef` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_technological` | all foreground stages | Represent the actual slaughter, cutting, freezing, packaging, sanitation, and wastewater technologies used during the declared reporting period. | equipment list; process diagram; operating log |
| `dq_temporal` | all collected records | Use one declared reporting period that covers all in-scope operations and disclose shutdowns, atypical lots, missing intervals, and substitutions. | dated meter logs; production calendar; gap register |
| `dq_geographical` | facility and utilities | Declare facility location, electricity supply geography, water source, fuel supply basis, wastewater destination, and co-product destination. | site metadata; invoices; permits; dispatch records |
| `dq_completeness` | all atomic exchanges | Collect every known material, utility, product, co-product, waste, and air, water, or soil emission; explain any verified zero and do not hide a flow through aggregation. | flow register; completeness reconciliation; zero-evidence record |
| `dq_mass_balance` | animal, carcass, meat, co-product, and waste masses | Maintain lot or reporting-period mass balances with gross, tare, net, stock-change, moisture, and destination records sufficient to explain residuals. | weigh tickets; stock records; balance worksheet |
| `dq_energy` | electricity, steam, hot water, natural gas, diesel, and LPG | Keep each carrier separate by stage and reconcile meters, invoices, stock movements, allocation drivers, and unit conversions. | meter logs; invoices; tank records; allocation worksheet |
| `dq_refrigerant` | each named refrigerant | Keep make-up and emission balances separate by refrigerant and by freezing or frozen-storage stage; disclose maintenance, recovery, and data gaps. | service logs; cylinder records; inventory balance |
| `dq_wastewater` | each wastewater and water emission | Preserve originating wastewater streams, treatment flow balance, matched sampling times, analytical method, detection-limit treatment, and discharge destination. | flow logs; laboratory reports; chain of custody; permit record |
| `dq_allocation` | reference product and recovered outputs | Disclose subdivision, physical relation, economic data period when used, waste classification, destination, and sensitivity for every burden-sharing decision. | allocation worksheet; sales or physical-driver evidence; sensitivity result |
| `dq_verification` | published foreground data package | Retain traceable source records, calculation formulas, reviewer checks, corrections, and unresolved identity records so an independent reviewer can reproduce every reported exchange. | audit trail; formula workbook; review record; manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_identity` | reference_flow | The sole reference flow UUID shall be b1d61fc0-90f2-4ef0-959b-b62596caca1a, public state 100, version 01.01.000, Product, exact CPC 21138, Mass property 93a60a56-a3c8-11da-a746-0800200b9a66, Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, and kg. | `un-cpc-3-0` |
| `val_reference_mass` | reference_quantity | The quantitative reference shall equal exactly 1 kg net conforming frozen product, and every packaging-component mass shall be excluded from that net mass. | `un-cpc-3-0`; `eu-recommendation-2021-2279-pef` |
| `val_scope_state` | product_scope | Dataset metadata shall identify frozen equine meat and shall not present fresh or chilled meat or edible offal as the reference product. | `un-cpc-3-0` |
| `val_process_coverage` | process_map | All six required processes shall contain records; on-site wastewater treatment shall be present when its inclusion condition is met and explicitly marked not applicable with evidence otherwise. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `val_atomic_inventory` | process_inventory | Every inventory card shall contain one named atomic exchange; no utility, refrigerant, chemical, packaging, waste, or emission selector may replace a flow identity. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `val_uuid_integrity` | inventory_flow_identity | Only the verified reference UUID may be populated from the supplied evidence; every non-reference UUID remains blank until hybrid discovery and public state-100 direct read independently confirm exact semantics, type, property, unit group, and unit, with unresolved row metadata updated together. | `eu-recommendation-2021-2279-pef` |
| `val_value_mode` | inventory_amounts | The reference output alone uses fixed_value; measured records use foreground_record, derived balances use calculated_value, and no author-estimated range or default amount is permitted. | `eu-recommendation-2021-2279-pef` |
| `val_card_completeness` | process_inventory | Every card shall have a non-empty description, selected flow, property and unit, amount rule, controlled value mode, specificity, basis, basis kind, evidence kind, collection protocol, and source ids. | `eu-recommendation-2021-2279-pef` |
| `val_mass_balance` | foreground_mass_flows | Reception, slaughter, cutting, freezing, packaging, and wastewater volume or mass balances shall be reconciled and residuals explained without inserting a default yield. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `val_stage_energy` | energy_inventory | Electricity, purchased steam, purchased hot water, natural gas, diesel, and LPG shall remain separate by stage, with shared-meter allocation drivers documented. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `val_refrigerants` | refrigeration_inventory | Make-up and air emission shall be separately balanced for each named refrigerant at freezing and frozen storage; any additional site-used refrigerant requires its own atomic input and emission records before release. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `val_wastewater` | wastewater_inventory | Each originating wastewater stream, treated wastewater, sludge, screenings, and each water emission shall be separately reconciled to flow and analytical records with destination disclosed. | `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `val_allocation` | allocation | Every joint-output burden decision shall follow the declared hierarchy, disclose data and period, preserve waste status evidence, and reconcile allocated totals. | `eu-recommendation-2021-2279-pef` |
| `val_sources` | evidence | Method claims shall cite only the three declared sources; foreground quantities shall trace to facility records rather than a source-derived default. | `un-cpc-3-0`; `ec-jrc-sa-bref-2024`; `eu-recommendation-2021-2279-pef` |
| `val_bilingual_alignment` | localized_markdown | English and Chinese files shall preserve identical ordered process_id, row_id, direction, flow_type, UUID, controlled amount fields, collection protocol, and source-id sequences. | `eu-recommendation-2021-2279-pef` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Site-specific foreground data package for 1 kg net conforming frozen meat of horses or other equines at frozen-store release |
| downstream_use | Input to reviewed process datasets and lifecycle models that require a CPC 21138 foreground manufacturing inventory |
| allowed_use | Facility-specific gate-to-gate modelling; cradle-to-gate modelling when transparent upstream datasets are linked; comparative use only after equivalent scope, quality, allocation, and product qualifiers are confirmed |
| excluded_use | Representation of fresh or chilled equine meat, edible offal, non-equine meat, retail, cooking, consumption, or undisclosed generic industry averages |
| required_metadata | canonical PCR id; CPC code; reference UUID; species; carcass or cut form; bone state; frozen state; facility; geography; reporting period; technology; storage duration; storage condition; packaging; process inclusion; allocation; destinations |
| required_quality_disclosure | Primary-data coverage; meter allocation; mass-balance residuals; refrigerant balances; wastewater sampling; analytical methods; source records; zero evidence; data gaps; substitutions; allocation sensitivity; reviewer findings |
| update_trigger | Material change in product scope, facility technology, freezing system, refrigerant, packaging, storage condition, wastewater treatment, co-product destination, allocation relation, reporting period, or verified Tiangong identity |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0` | `official_guidance` | United Nations Statistics Division. Central Product Classification Version 3.0 Structure and Explanatory Notes, subclass 21138, 30 June 2025. Retained raw: classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Exact frozen-equine-meat classification boundary and exclusion of fresh or chilled meat and edible offal |
| `ec-jrc-sa-bref-2024` | `official_guidance` | European Commission, Joint Research Centre. Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries. JRC135916, 2024. DOI: 10.2760/18199. https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | Reception, slaughter, dressing, cutting, chilling, freezing, sanitation, utilities, wastewater, co-product, waste, and emission process structure; no default quantity adopted |
| `eu-recommendation-2021-2279-pef` | `official_guidance` | European Commission. Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, consolidated text. https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific bill of materials, company-specific foreground data, complete life-cycle inventory, allocation hierarchy, data quality, transparency, and verification |
