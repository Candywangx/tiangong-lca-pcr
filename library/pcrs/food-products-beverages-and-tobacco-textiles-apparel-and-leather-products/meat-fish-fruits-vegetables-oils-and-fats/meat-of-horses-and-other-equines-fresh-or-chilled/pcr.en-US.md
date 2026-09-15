---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-horses-and-other-equines-fresh-or-chilled
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of horses and other equines, fresh or chilled
## 1. Scope and Applicability

This PCR applies to edible skeletal meat of horses and other equines supplied fresh or chilled at the slaughterhouse or cutting-plant factory gate, including carcasses, sides, quarters, bone-in cuts and boneless cuts that have not been frozen.

Frozen equine meat, edible or inedible offal, rendered fat, blood products, hides, bones, prepared or preserved meat, live animals and meat of non-equine species are excluded from the reference product. Specific offal, blood, fat, hide and bone streams remain recorded as co-products or wastes where they arise.

Equine husbandry and inbound animal transport are upstream and enter through the live-animal dataset. Retail, food service, consumer preparation, use and end-of-life are downstream and outside the default boundary.

The dataset shall declare equine species, animal origin, slaughter and cutting sites, carcass or cut presentation, bone-in status, fresh or chilled state, chilling and storage technology, packaging, net meat mass, production period, geography, allocation and every controlled process included.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-horses-and-other-equines-fresh-or-chilled |
| classification_refs | CPC 3.0: 21118, Meat of horses and other equines, fresh or chilled |
| covered_products | Fresh or chilled edible skeletal meat from horses and other equines, as carcasses, sides, quarters, bone-in or boneless cuts |
| excluded_products | Frozen meat; edible and inedible offal; blood products; rendered fat; hides; bones; prepared or preserved meat; live equines; non-equine meat |
| representative_product | Factory-gate fresh or chilled equine skeletal meat with declared species, presentation, bone status, temperature state and packaging |
| production_route | Live-equine reception → slaughter and dressing → carcass chilling → cutting and deboning → cleaning and disinfection → packaging and chilled storage |
| market_state | Inspected fresh or chilled equine meat released at the slaughterhouse or cutting-plant factory gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide edible equine skeletal meat in the declared carcass or cut presentation |
| How much | 1 kg net fresh or chilled equine meat, excluding removable packaging |
| How well | Released under the producer's applicable inspection, identity, hygiene, presentation and temperature-state controls and never frozen |
| How long or cycle | One production and chilled-storage lot at factory gate; shelf life is declared but does not change the 1 kg reference amount |
| reference_flow_link | `reference_equine_meat` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Meat of horses and other equines, fresh or chilled `ac93b427-13d9-411d-9521-36baea644bb5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | equine species; animal origin; carcass or cut presentation; bone-in status; fresh or chilled state; chilling and storage technology; packaging; slaughter and cutting sites; production period; net meat mass |

All required qualifiers shall be present in dataset metadata, process notes, the reference-flow comment or equivalent package fields.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_meat_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure accepted edible skeletal meat only; include bones only for a declared bone-in presentation and exclude packaging, offal, blood, hide and separately removed fat. |
| `liveweight_measurement` | Live equine input | Mass | kg | Use calibrated lot liveweight at the slaughter-site boundary and retain animal or lot identity. |
| `water_volume` | Process water and wastewater | Volume | m3 | Use calibrated metering or documented process water balances; do not count internal recirculation repeatedly. |
| `utility_energy` | Electricity, steam, hot water and fuels | Energy | kWh or MJ | Preserve meter units and conversion factors; keep every stage and carrier separate and declare lower-heating-value basis for fuels. |
| `refrigerant_mass` | R-717 make-up and release | Mass | kg | Reconcile charged, recovered and stock-change quantities for the declared refrigeration system. |
| `co_product_waste_mass` | Co-products and wastes | Mass | kg | Weigh each named blood, organ, fat, hide, bone, tissue, solid and packaging stream separately with disposition and moisture basis where relevant. |

## 5. System Boundary

The default boundary is cradle-to-factory-gate. Foreground control begins when live equines cross the slaughter-site boundary and ends when net fresh or chilled meat is released after packaging and controlled cold storage. The live-animal upstream dataset shall include husbandry and inbound transport. Retail, use and end-of-life are excluded.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified live horses or other equines arrive at the slaughter site with declared origin, liveweight, lot and upstream dataset |
| starting_condition_role | Foreground slaughter and meat-processing input |
| product_classification_scope | CPC 3.0 subclass 21118 fresh or chilled equine skeletal meat |
| recursive_input_rule | Purchased fresh or chilled equine meat entering further cutting or packing is recorded once with its upstream dataset; do not reconstruct the same category recursively |
| upstream_dataset_requirement | Live equine input covers husbandry and inbound transport; other product, chemical, energy and packaging inputs require representative upstream datasets |
| disclosure | Declare controlled sites, process inclusions, temperature state, co-products, wastes, emissions, packaging, allocation, temporal coverage and upstream proxy gaps |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `p_animal_reception` | Animal reception and lairage | `required` | Always include reception, identity control and any controlled lairage at the slaughter site. | Receive and hold live equines before slaughter. | 1 kg accepted live equine mass transferred to slaughter |
| `p_slaughter_dressing` | Slaughter and carcass dressing | `required` | Always include controlled stunning, bleeding, skinning, evisceration, splitting and carcass inspection. | Convert accepted live equines into dressed carcasses and specifically identified co-products and wastes. | 1 kg accepted dressed equine carcass |
| `p_carcass_chilling` | Carcass chilling | `required` | Always include controlled chilling before cutting or dispatch. | Cool dressed carcasses without freezing and maintain lot identity. | 1 kg accepted chilled equine carcass |
| `p_cutting_deboning` | Cutting and deboning | `required` | Include the actual standard cutting, trimming and deboning steps used for the declared meat presentation. | Convert chilled carcasses into fresh or chilled equine meat cuts. | 1 kg accepted fresh or chilled equine meat before packaging |
| `p_cleaning_sanitation` | Cleaning and disinfection | `required` | Always include sanitation attributable to the declared slaughter, chilling, cutting and packing operations. | Clean and disinfect product-contact equipment and controlled production areas. | 1 kg accepted fresh or chilled equine meat |
| `p_packaging_cold_storage` | Packaging and chilled storage | `required` | Always include packaging actually applied and chilled storage controlled before the factory gate. | Package accepted meat, retain fresh or chilled state and release the reference product. | 1 kg net fresh or chilled equine meat |

### Process: Animal reception and lairage (`p_animal_reception`)

#### Inputs

##### Product flows

###### Live equine input (`reception_live_equine`)

Record live horses or other equines crossing the slaughter-site gate; farm production and inbound transport remain in the upstream animal dataset.

- Selected flow: Live horse for slaughter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated liveweight received by identified lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted live equine mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Reception water (`reception_process_water`)

Record water supplied for drinking, pen washing or animal cleaning during controlled reception.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered water attributable to received lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted live equine mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Reception electricity (`reception_electricity`)

Record electricity for reception lighting, ventilation, gates and directly attributable equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented equipment-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted live equine mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Straw bedding input (`reception_straw_bedding`)

Record wheat straw bedding introduced into lairage pens when used.

- Selected flow: Wheat straw bedding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Net issued dry bedding mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted live equine mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception`
- Sources: `ec-jrc-sa-bref-2024`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Accepted live equine output (`accepted_live_equine`)

Record live equines accepted and transferred to the slaughter line after identity and fitness controls.

- Selected flow: Accepted live horse for slaughter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated accepted liveweight
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per reception lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### Waste flows

###### Lairage manure (`reception_manure`)

Record manure removed from controlled reception and lairage as a distinct waste stream.

- Selected flow: Equine manure
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed manure leaving the process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted live equine mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception`
- Sources: `ec-jrc-sa-bref-2024`

###### Used bedding (`reception_used_bedding`)

Record spent straw bedding removed from pens separately from manure when managed separately.

- Selected flow: Used wheat straw bedding
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed used bedding by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted live equine mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception`
- Sources: `ec-jrc-sa-bref-2024`

###### Reception wastewater (`reception_wastewater`)

Record wastewater from pen washing and animal cleaning crossing to treatment.

- Selected flow: Lairage wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or documented water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted live equine mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Animal rejected at reception (`reception_condemned_animal`)

Record a dead or rejected animal leaving reception for controlled treatment as one waste exchange.

- Selected flow: Condemned equine carcass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed condemned animal mass by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted live equine mass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reception`
- Sources: `ec-jrc-sa-bref-2024`

##### Elementary flows

None.


### Process: Slaughter and carcass dressing (`p_slaughter_dressing`)

#### Inputs

##### Product flows

###### Accepted live equine input (`slaughter_live_equine`)

Record accepted live equines entering stunning and slaughter.

- Selected flow: Accepted live horse for slaughter
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Lot transfer liveweight
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Slaughter process water (`slaughter_process_water`)

Record water used for carcass dressing, equipment rinsing and direct slaughter operations.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered process water attributable to slaughter lots
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Slaughter electricity (`slaughter_electricity`)

Record electricity for stunning, hoists, cutting, pumps and directly attributable slaughter equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented equipment-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Slaughter steam (`slaughter_steam`)

Record purchased steam crossing the facility boundary for slaughter operations when used.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased steam energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Slaughter hot water (`slaughter_hot_water`)

Record purchased hot water as a separate utility when it crosses the facility boundary.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased hot-water energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Slaughter natural gas (`slaughter_natural_gas`)

Record natural gas consumed by controlled slaughter-line heating equipment.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered fuel energy on a declared lower-heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Slaughter LPG (`slaughter_lpg`)

Record LPG consumed by slaughter-line heating equipment when this fuel is used.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Energy / MJ
- Amount rule: Stock-reconciled LPG energy on a declared lower-heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Dressed carcass output (`dressed_equine_carcass`)

Record accepted dressed carcasses transferred to chilling after removal of hide, blood and viscera.

- Selected flow: Dressed equine carcass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated hot carcass mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Edible blood co-product (`edible_equine_blood`)

Record hygienically collected blood directed to an edible use as a separate co-product.

- Selected flow: Edible equine blood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed collected edible blood
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`

###### Edible liver co-product (`edible_equine_liver`)

Record inspected equine liver released for edible use; offal is not part of the reference meat flow.

- Selected flow: Edible equine liver
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed released liver mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`

###### Edible heart co-product (`edible_equine_heart`)

Record inspected equine heart released for edible use as a separate co-product.

- Selected flow: Edible equine heart
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed released heart mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`

###### Hide co-product (`equine_hide`)

Record the raw hide leaving the slaughter process for further processing.

- Selected flow: Raw equine hide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed hide mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`

###### Fat co-product (`equine_rendering_fat`)

Record separated adipose tissue directed to rendering as a distinct co-product.

- Selected flow: Raw equine adipose tissue for rendering
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed fat mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`

##### Waste flows

###### Non-edible blood waste (`non_edible_equine_blood`)

Record blood not collected for edible use and sent to treatment or rendering as a distinct waste stream.

- Selected flow: Non-edible equine blood
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Measured or mass-balanced non-edible blood
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`

###### Gastrointestinal contents (`gastrointestinal_contents`)

Record removed gastrointestinal contents leaving slaughter as a separate waste stream.

- Selected flow: Equine gastrointestinal contents
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed container change corrected for tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`

###### Condemned viscera (`condemned_viscera`)

Record inspected viscera rejected from edible use and sent to controlled treatment.

- Selected flow: Condemned equine viscera
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed condemned viscera by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`

###### Slaughter wastewater (`slaughter_wastewater`)

Record wastewater from slaughter and carcass dressing crossing to treatment.

- Selected flow: Slaughterhouse wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or process water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### Elementary flows

###### Slaughter fossil carbon dioxide (`slaughter_fossil_co2`)

Calculate direct fossil carbon dioxide from on-site natural-gas or LPG combustion as an individual elementary flow.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Fuel record multiplied by a documented fuel-specific combustion factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-pef-method-2021-2279`

###### Slaughter nitrogen oxides (`slaughter_nox`)

Record or calculate nitrogen oxides from controlled combustion as a separate elementary flow.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Monitoring result or fuel record multiplied by a documented equipment-specific factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted dressed carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter`
- Sources: `ec-pef-method-2021-2279`


### Process: Carcass chilling (`p_carcass_chilling`)

#### Inputs

##### Product flows

###### Dressed carcass input (`chilling_dressed_carcass`)

Record dressed carcasses entering controlled chilling.

- Selected flow: Dressed equine carcass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Lot transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted chilled carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Chilling electricity (`chilling_electricity`)

Record electricity consumed by carcass chillers, fans, pumps and controls.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered refrigeration electricity or documented load-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted chilled carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Chilling refrigerant (`chilling_refrigerant_r717`)

Record R-717 make-up crossing the foreground boundary when the declared refrigeration system uses it.

- Selected flow: Refrigerant ammonia (R-717)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Maintenance stock issue attributable to the refrigeration system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: per 1 kg accepted chilled carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Chilled carcass output (`chilled_equine_carcass`)

Record accepted carcasses that remain fresh or chilled and have not been frozen.

- Selected flow: Chilled equine carcass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated chilled carcass mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per chilling lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### Waste flows

###### Chiller condensate (`chilling_condensate`)

Record collected condensate discharged to treatment when it crosses the process boundary.

- Selected flow: Carcass chiller condensate wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered condensate discharge
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted chilled carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling`
- Sources: `ec-jrc-sa-bref-2024`

###### Rejected chilled carcass (`chilling_rejected_carcass`)

Record carcasses rejected after chilling and sent to controlled treatment.

- Selected flow: Rejected chilled equine carcass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed rejected carcass mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted chilled carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling`
- Sources: `ec-jrc-sa-bref-2024`

##### Elementary flows

###### R-717 emission to air (`chilling_ammonia_air`)

Calculate R-717 released from the declared refrigeration system as one specific elementary emission.

- Selected flow: Ammonia (R-717) to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Refrigerant make-up minus documented recovery and retained stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: per 1 kg accepted chilled carcass
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chilling`
- Sources: `ec-pef-method-2021-2279`


### Process: Cutting and deboning (`p_cutting_deboning`)

#### Inputs

##### Product flows

###### Chilled carcass input (`cutting_chilled_carcass`)

Record chilled carcasses or sides entering standard cutting and deboning.

- Selected flow: Chilled equine carcass
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Lot transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Cutting process water (`cutting_process_water`)

Record water used directly for cutting-room rinsing or product-contact operations.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered cutting-room water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Cutting electricity (`cutting_electricity`)

Record electricity for saws, knives, conveyors, local cooling and directly attributable equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented equipment-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Unpacked meat output (`fresh_chilled_equine_meat_unpacked`)

Record accepted skeletal meat cuts transferred to packaging without freezing.

- Selected flow: Equine meat, fresh or chilled, unpacked
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated accepted meat mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per cutting lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Bone co-product (`equine_bones`)

Record separated bones directed to a declared recovery or rendering use.

- Selected flow: Raw equine bones
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed bone mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting`
- Sources: `ec-jrc-sa-bref-2024`

###### Fat trimming co-product (`equine_fat_trimmings`)

Record edible or renderable fat trimmings separately from meat and other tissues.

- Selected flow: Raw equine fat trimmings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed fat trimming mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting`
- Sources: `ec-jrc-sa-bref-2024`

##### Waste flows

###### Condemned cutting tissue (`cutting_condemned_tissue`)

Record tissue rejected during cutting and sent to controlled treatment.

- Selected flow: Condemned equine tissue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed condemned tissue by disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting`
- Sources: `ec-jrc-sa-bref-2024`

###### Cutting wastewater (`cutting_wastewater`)

Record cutting-room wastewater crossing to treatment.

- Selected flow: Meat cutting wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered discharge or documented water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted meat before packaging
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cutting`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### Elementary flows

None.


### Process: Cleaning and disinfection (`p_cleaning_sanitation`)

#### Inputs

##### Product flows

###### Sanitation water (`sanitation_process_water`)

Record water used for cleaning and disinfection of controlled production areas.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Metered sanitation water or documented area-time allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Sanitation electricity (`sanitation_electricity`)

Record electricity for pumps, pressure washers, dosing and sanitation equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented equipment-time allocation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Sanitation steam (`sanitation_steam`)

Record purchased steam used for sanitation when it crosses the facility boundary.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased steam energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Sanitation hot water (`sanitation_hot_water`)

Record purchased hot water crossing the facility boundary for cleaning and disinfection.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: Metered purchased hot-water energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Sanitation boiler natural gas (`sanitation_natural_gas`)

Record natural gas consumed by an on-site sanitation hot-water or steam system.

- Selected flow: Natural gas
- Flow property / unit: Energy / MJ
- Amount rule: Metered fuel energy on a declared lower-heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Alkaline detergent input (`sanitation_sodium_hydroxide`)

Record sodium hydroxide active substance used in the declared cleaning formulation.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Formulation issue multiplied by verified sodium-hydroxide concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Disinfectant input (`sanitation_peracetic_acid`)

Record peracetic acid active substance used in the declared disinfectant formulation.

- Selected flow: Peracetic acid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Formulation issue multiplied by verified peracetic-acid concentration
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg accepted meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

None.

##### Waste flows

###### Sanitation wastewater (`sanitation_wastewater`)

Record spent cleaning and disinfection water crossing to treatment.

- Selected flow: Slaughterhouse sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Metered sanitation discharge or water balance
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Wastewater screenings (`wastewater_screenings`)

Record solids removed by wastewater screening as one waste stream.

- Selected flow: Slaughterhouse wastewater screenings
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed screenings corrected for container tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation`
- Sources: `ec-jrc-sa-bref-2024`

###### Wastewater-treatment sludge (`wastewater_sludge`)

Record sludge leaving controlled wastewater treatment as a distinct waste stream.

- Selected flow: Slaughterhouse wastewater-treatment sludge
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed sludge with declared dry-matter basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation`
- Sources: `ec-jrc-sa-bref-2024`

##### Elementary flows

###### Sanitation fossil carbon dioxide (`sanitation_fossil_co2`)

Calculate direct fossil carbon dioxide from sanitation boiler natural gas.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Fuel record multiplied by a documented combustion factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation`
- Sources: `ec-pef-method-2021-2279`

###### Sanitation nitrogen oxides (`sanitation_nox`)

Record or calculate nitrogen oxides from the sanitation boiler separately.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Monitoring result or fuel record multiplied by a documented equipment factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg accepted meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation`
- Sources: `ec-pef-method-2021-2279`


### Process: Packaging and chilled storage (`p_packaging_cold_storage`)

#### Inputs

##### Product flows

###### Unpacked meat input (`packaging_unpacked_meat`)

Record accepted unpacked meat entering packaging and cold storage.

- Selected flow: Equine meat, fresh or chilled, unpacked
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Lot transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Vacuum film input (`packaging_pa_pe_film`)

Record the declared PA/PE vacuum film used for primary packaging.

- Selected flow: Polyamide-polyethylene vacuum packaging film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Roll issue less verified remainder
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-pef-method-2021-2279`

###### PET tray input (`packaging_pet_tray`)

Record PET trays used for the declared product presentation.

- Selected flow: Polyethylene terephthalate meat tray
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count multiplied by measured mean empty-tray mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-pef-method-2021-2279`

###### Absorbent pad input (`packaging_absorbent_pad`)

Record cellulose absorbent pads applied to the declared pack.

- Selected flow: Cellulose absorbent meat pad
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count multiplied by measured mean dry pad mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-pef-method-2021-2279`

###### Label input (`packaging_label`)

Record printed paper labels applied to packs or shipping units.

- Selected flow: Printed paper meat label
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Count multiplied by measured mean label mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-pef-method-2021-2279`

###### Shipping carton input (`packaging_corrugated_carton`)

Record the attributable share of corrugated shipping cartons.

- Selected flow: Corrugated paperboard meat shipping carton
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Empty-carton mass allocated by packed net meat mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-pef-method-2021-2279`

###### Packaging electricity (`packaging_electricity`)

Record electricity for vacuum packaging, sealing, labelling and directly attributable equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered electricity or documented equipment-time calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Cold-storage electricity (`cold_storage_electricity`)

Record chilled-room refrigeration electricity separately from packaging electricity.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: Sub-metered cold-room electricity allocated by occupied mass and time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Cold-storage refrigerant (`cold_storage_refrigerant_r717`)

Record R-717 make-up attributable to cold storage when this declared refrigeration technology is used.

- Selected flow: Refrigerant ammonia (R-717)
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Maintenance stock issue attributable to the cold-storage system
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

###### Emergency-generator diesel (`backup_diesel`)

Record diesel consumed by backup generation attributable to chilled storage when operated.

- Selected flow: Diesel fuel
- Flow property / unit: Energy / MJ
- Amount rule: Metered or stock-reconciled diesel on a declared lower-heating-value basis
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### Waste flows

None.

##### Elementary flows

None.

#### Outputs

##### Product flows

###### Reference meat output (`reference_equine_meat`)

Record released fresh or chilled equine skeletal meat at factory gate; removable packaging is excluded from reference mass.

- Selected flow: Meat of horses and other equines, fresh or chilled `ac93b427-13d9-411d-9521-36baea644bb5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Calibrated net meat mass normalized to 1 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per packaging and storage lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-pef-method-2021-2279`

##### Waste flows

###### Film packaging waste (`packaging_film_waste`)

Record damaged or trimmed PA/PE film leaving packaging as waste.

- Selected flow: Waste polyamide-polyethylene film
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed packaging waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-pef-method-2021-2279`

###### Paperboard packaging waste (`packaging_paperboard_waste`)

Record damaged cartons and paperboard leaving packaging as waste.

- Selected flow: Waste corrugated paperboard
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed paperboard waste
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-pef-method-2021-2279`

###### Rejected packaged meat (`packaging_rejected_meat`)

Record packaged meat rejected before factory-gate release and sent to controlled treatment.

- Selected flow: Rejected fresh or chilled equine meat
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Weighed rejected net meat mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product specific (`product_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`

##### Elementary flows

###### Cold-storage R-717 emission (`cold_storage_ammonia_air`)

Calculate R-717 released from the cold-storage refrigeration system as a separate elementary flow.

- Selected flow: Ammonia (R-717) to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Refrigerant make-up minus documented recovery and stock change
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology specific (`technology_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-pef-method-2021-2279`

###### Backup diesel carbon dioxide (`backup_diesel_co2`)

Calculate fossil carbon dioxide from diesel burned for backup cold-storage electricity.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Diesel record multiplied by a documented combustion factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-pef-method-2021-2279`

###### Backup diesel nitrogen oxides (`backup_diesel_nox`)

Record or calculate nitrogen oxides from backup diesel combustion separately.

- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg; Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`
- Amount rule: Monitoring result or diesel record multiplied by a documented equipment factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site specific (`site_specific`)
- Normalization basis: per 1 kg net reference meat
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage`
- Sources: `ec-pef-method-2021-2279`


## 7. Allocation and Co-product Handling

- `allocation_avoid_subdivision`: First avoid allocation through animal and lot genealogy, separate weighing, sub-metering, process subdivision and destination-specific co-product records. Source: `ec-pef-method-2021-2279`.
- `allocation_record_gross_outputs`: Record meat, edible blood, edible organs, hide, fat and bones at gross measured output before allocation; never net their quantities against waste or input amounts. Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`.
- `allocation_physical_relationship`: For an inseparable multi-output slaughter process, apply a documented physical relationship only when it represents the causal resource relationship; disclose the property, units and affected exchanges. Source: `ec-pef-method-2021-2279`.
- `allocation_other_basis`: When no representative physical relationship exists, follow the applicable PEF allocation hierarchy and disclose the chosen basis, prices or other parameters, reference period and sensitivity; this PCR supplies no default shares. Source: `ec-pef-method-2021-2279`.
- `allocation_waste_boundary`: Classify a stream as co-product or waste using its documented legal and operational destination; external treatment of waste remains an explicit output and is not silently credited. Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`.
- `allocation_shared_utilities`: Allocate shared electricity, heat, refrigeration and sanitation by the closest measured driver, such as equipment time and load, metered energy, occupied chilled mass-time, cleaned area-time or process water. Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`.

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_reception` | `p_animal_reception` | Live animals, water, electricity, accepted animals and reception wastes | Animal register, weighbridge, meter, bedding and waste records | animal_or_lot_id; species; origin; liveweight; arrival; acceptance; water; electricity; bedding; manure; wastewater; rejected mass | Calibrated liveweight, meters, stock issue and waste weighing linked to lot identity | kg; m3; kWh | Every lot | Representative production period, normally 12 consecutive months or the complete shorter campaign | All controlled reception and lairage areas | Sum each atomic exchange and normalize by accepted liveweight | Identity records; scale calibration; meters; stock and waste tickets |
| `cp_slaughter` | `p_slaughter_dressing` | Animals, water, stage energy, carcass, specific co-products, wastes and combustion emissions | Slaughter batch, meter, weighing, inspection and destination records | lot_id; liveweight; water; electricity; steam; hot_water; gas; LPG; carcass_mass; each co-product; each waste; destination; factor | Calibrated scales, sub-meters, product and inspection records, destination tickets and documented emission calculations | kg; m3; kWh; MJ | Every lot and meter period | Same period as reference production | All controlled slaughter and dressing lines | Normalize each exchange by accepted dressed carcass mass and retain gross outputs | Calibration; batch genealogy; meters; inspection; destination and factor records |
| `cp_chilling` | `p_carcass_chilling` | Carcass, electricity, R-717, chilled output, condensate, rejects and release | Lot transfer, refrigeration meter and maintenance records | lot_id; input_mass; output_mass; temperature_state; electricity; refrigerant_issue; recovery; stock_change; condensate; reject_mass | Calibrated weighing, sub-metering, refrigeration logs and refrigerant balance | kg; kWh; m3 | Every lot and maintenance event | Same period as reference production | All controlled carcass chillers | Normalize by accepted chilled carcass mass | Lot record; meter; maintenance log; refrigerant reconciliation |
| `cp_cutting` | `p_cutting_deboning` | Chilled carcass, water, electricity, meat, bones, fat, condemned tissue and wastewater | Cutting batch, meter, weighing and destination records | lot_id; presentation; bone_status; input_mass; water; electricity; accepted_meat; bones; fat; condemned_tissue; wastewater | Calibrated batch weighing, meters and destination records | kg; m3; kWh | Every cutting lot | Same period as reference production | All controlled cutting and deboning rooms | Normalize by accepted meat before packaging and reconcile named outputs | Batch genealogy; calibration; meters; inspection and destination records |
| `cp_sanitation` | `p_cleaning_sanitation` | Water, energy, active chemicals, wastewater, screenings, sludge and emissions | Sanitation schedule, recipe, stock, meter and treatment records | area; duration; water; electricity; steam; hot_water; gas; formulation_mass; active_concentration; wastewater; screenings; sludge; factors | Meters, verified formulation concentrations, stock reconciliation, waste weighing and documented emission calculations | kg; m3; kWh; MJ | Every sanitation cycle and treatment period | Same period as reference production | All controlled processing areas and on-site wastewater treatment | Allocate by cleaned area-time or measured process driver and normalize by accepted meat | Schedule; SDS; recipe; meters; calibration; treatment and factor records |
| `cp_packaging_storage` | `p_packaging_cold_storage` | Meat, each package, stage electricity, R-717, diesel, reference output, wastes and emissions | Packaging BoM, count, weighing, meter, storage and maintenance records | lot_id; net_meat; package_SKU; count; unit_mass; packaging_electricity; storage_electricity; mass_time; refrigerant; diesel; rejects; waste | Approved BoM, calibrated net weighing, component sampling, sub-metering and maintenance balance | kg; count; kWh; MJ | Every lot, storage period and maintenance event | Same period as reference production | All controlled packing and chilled-storage areas | Normalize by net released meat; allocate shared cold storage by occupied mass-time | BoM; sample weights; scale and meter calibration; cold-room and maintenance logs |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_mass` | Reference meat | Accepted product mass minus removable packaging tare; include bone only for declared bone-in product | gross packed mass; packaging tare; bone status | kg net fresh or chilled equine meat | `ec-pef-method-2021-2279` |
| `calc_material_balance` | Slaughter and cutting | Live or carcass input = measured meat and named co-products + named wastes + documented stock or moisture change within uncertainty | all named input and output masses | reconciled kg and residual | `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279` |
| `calc_active_chemical` | Sodium hydroxide and peracetic acid | Formulated-product mass × verified active concentration | issued formulation mass; concentration | kg named active substance | `ec-pef-method-2021-2279` |
| `calc_refrigerant_release` | R-717 refrigeration | Make-up refrigerant − documented recovered refrigerant − positive system stock change | issue; recovery; charge and stock records | kg ammonia to air | `ec-pef-method-2021-2279` |
| `calc_combustion_emission` | Natural gas, LPG and diesel | Multiply each foreground fuel record by a documented fuel- and equipment-specific factor for each named emission | fuel energy; factor and unit | kg named elementary emission | `ec-pef-method-2021-2279` |
| `calc_component_packaging_mass` | Counted packaging | Count × measured mean empty unit mass for the same packaging SKU and period | count; sampled unit masses | kg named packaging component | `ec-pef-method-2021-2279` |
| `calc_cold_storage_allocation` | Shared chilled storage | Metered cold-room electricity × declared product occupied mass-time / total occupied mass-time | meter; product mass; storage time; total mass-time | kWh attributable to product lot | `ec-pef-method-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_scope_identity` | Reference product | Confirm equine skeletal meat, fresh or chilled and never frozen; keep offal and other co-products outside reference mass. | CPC record, product specification, inspection and temperature-state records |
| `dq_company_specific` | Controlled foreground | Use company-specific process, BoM, utility, co-product, waste and direct-emission data for all controlled operations. | Batch records, meters, invoices, destination records and `ec-pef-method-2021-2279` |
| `dq_traceability` | Animal-to-meat genealogy | Maintain lot links from live equines through carcass, cutting, packaging and release. | Animal register, slaughter and cutting batches, pack lot |
| `dq_completeness` | LCI | Cover known raw materials, energy, products, co-products, wastes and emissions to air, water and soil without collection-flow placeholders. | Process walk-through, BoM, meters, waste and emission reconciliation |
| `dq_mass_balance` | Reception, slaughter and cutting | Reconcile all named masses and disclose residuals, moisture changes and measurement uncertainty. | Signed balance worksheet and calibrated weights |
| `dq_temperature_state` | Chilling and storage | Demonstrate that the reference meat remained fresh or chilled and was not frozen; declare monitoring basis and deviations. | Chiller and cold-room records |
| `dq_sanitation` | Cleaning and disinfection | Record each active chemical separately with formulation identity and concentration; reconcile water, wastewater and treatment solids. | SDS, recipe, stock, meter and treatment records |
| `dq_allocation` | Meat and co-products | Disclose gross outputs, classification, destination, allocation hierarchy, drivers, reference period and sensitivity. | Allocation worksheet and destination evidence |
| `dq_packaging` | Packaging | Record every packaging component separately and exclude removable packaging from reference meat mass. | Packaging BoM and unit-mass sampling |
| `dq_unresolved_uuid` | Non-reference rows | Leave UUID blank until exact hybrid and state-100 direct-read checks agree and retain the row-specific manifest gap. | Manifest unresolved inventory rows |

## 9. Validation Rules

- `validate_reference_identity`: Confirm Product flow UUID `ac93b427-13d9-411d-9521-36baea644bb5`, exact name, CPC 21118, state 100, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66` and kg. Source: `unsd-cpc-3-21118`.
- `validate_scope`: Reject frozen equine meat, offal-only products, prepared meat, live animals and non-equine meat; require fresh or chilled skeletal meat. Source: `unsd-cpc-3-21118`.
- `validate_boundary`: Confirm husbandry and inbound animal transport are upstream and retail, use and end-of-life are downstream.
- `validate_process_map`: Require reception, slaughter and dressing, chilling, applicable cutting, sanitation, packaging and controlled chilled storage. Source: `ec-jrc-sa-bref-2024`.
- `validate_reference_mass`: Confirm 1 kg net accepted meat, with declared bone status and removable packaging excluded. Source: `ec-pef-method-2021-2279`.
- `validate_atomic_flows`: Reject combined materials, utilities, fuels, chemicals, packaging, co-products, wastes or emissions.
- `validate_uuid_gate`: Require every non-reference UUID to remain blank unless exact hybrid and state-100 direct-read confirmation exists and require a matching manifest row.
- `validate_lci_completeness`: Reconcile company-specific raw materials, energy, products, co-products, waste and air, water and soil emissions. Source: `ec-pef-method-2021-2279`.
- `validate_mass_balance`: Check liveweight, carcass, meat, named co-products, wastes and stock or moisture changes and investigate residuals. Sources: `ec-jrc-sa-bref-2024`; `ec-pef-method-2021-2279`.
- `validate_refrigerant`: When R-717 refrigeration applies, require make-up, recovery, stock-change and separate ammonia-release records.
- `validate_combustion`: When natural gas, LPG or diesel applies, require each fuel separately and each applicable direct emission separately.
- `validate_bilingual_alignment`: Confirm identical ordered process ids, row ids, selected-flow names, controlled tokens, UUIDs, rule ids, protocol ids, calculation ids, quality ids and source ids.

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for factory-gate fresh or chilled equine meat production |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | Product LCA, Environmental Footprint studies, supplier datasets and downstream process or lifecyclemodel construction matching the declared product, route, geography and period |
| excluded_use | Frozen meat, offal products, prepared meat, non-equine meat, undisclosed temperature state, missing genealogy or unreported co-product allocation |
| required_metadata | PCR id; CPC; reference UUID; species; origin; sites; presentation; bone status; fresh/chilled state; refrigeration; packaging; net mass; period; geography; genealogy; allocation; co-product destinations; process inclusions; unresolved identities |
| required_quality_disclosure | Foreground coverage; meters and calculations; mass-balance residuals; temperature deviations; representativeness; upstream proxies; allocation sensitivity; chemical, refrigerant, waste and emission gaps; review state |
| update_trigger | Supplier or animal-origin change; process, product, packaging, refrigeration, sanitation or fuel change; new site or period; allocation or destination change; UUID resolution; new evidence or method revision |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21118` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 21118 "Meat of horses and other equines, fresh or chilled", https://unstats.un.org/unsd/classifications/Econ/CPC; official repository raw CSV CPC_Ver_3.0_Structure_30Jun2025.csv | Product identity; fresh/chilled inclusion; frozen and offal exclusion |
| `ec-jrc-sa-bref-2024` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and Edible Co-products Industries, JRC135916, DOI 10.2760/18199 | Animal reception, slaughter, dressing, cutting, chilling, sanitation, utilities, wastewater and specific blood, fat, hide and bone streams |
| `ec-pef-method-2021-2279` | official_guidance | European Commission, Commission Recommendation (EU) 2021/2279, consolidated Environmental Footprint method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific data, company-specific manufacturing, complete LCI, allocation, transparency, data quality and validation |
