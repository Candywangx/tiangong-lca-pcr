---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-camels-and-camelids-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Meat of camels and camelids, frozen

## 1. Scope and Applicability

This PCR applies to net edible frozen meat obtained from dromedary camels, Bactrian camels, llamas, alpacas, or another declared camelid species and placed on the market within CPC 21137. Covered forms may be whole carcasses, quarters, bone-in cuts, boneless cuts, or meat trimmings, provided the declared product is frozen and offal is excluded.

The foreground boundary begins with accepted live animals at slaughterhouse receipt and ends with qualified frozen meat released at the facility gate after packaging and frozen storage. It covers holding, slaughter, bleeding, skinning, evisceration, carcass dressing, conditional cutting or deboning, pre-cooling, freezing, packaging, frozen storage, cleaning, disinfection, and conditional on-site wastewater treatment. Animal raising and inbound transport are upstream; distribution, retail, use, and end-of-life activities are downstream.

Fresh or chilled camel or camelid meat, edible offal, non-edible offal sold as a distinct product, and meat from non-camelid species are outside the reference-product scope. The process inventory still records specific recovered organs, hides, blood, fat, bone, wastes, wastewater, and direct emissions so that foreground mass and environmental balances remain complete. The source documents establish classification scope, process structure, primary-data expectations, allocation, transparency, data quality, and verification; they provide no quantitative default for this PCR.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-camels-and-camelids-frozen |
| classification_refs | CPC 3.0: 21137, exact |
| covered_products | Frozen edible meat from a declared camel or camelid species, including frozen whole carcass, quarter, bone-in cut, boneless cut, or meat trimming |
| excluded_products | Fresh or chilled camelid meat; frozen edible offal; non-edible offal as a separate product; meat from non-camelid species |
| representative_product | Net qualified frozen camel or camelid meat at the slaughterhouse or meat-processing facility gate |
| production_route | Accepted live animal; holding; slaughter; bleeding; skinning; evisceration; carcass dressing; conditional cutting or deboning; pre-cooling; freezing; packaging; frozen storage; sanitation; conditional on-site wastewater treatment |
| market_state | Frozen, with species, product form, bone status, freezing profile, dispatch temperature, packaging configuration, and net product mass declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provide edible frozen meat from a declared camel or camelid species, excluding offal and packaging mass |
| How much | 1 kg net qualified frozen product |
| How well | Product conforms to the facility release specification and applicable food-safety requirements, with species, product form, bone status, frozen state, and dispatch temperature declared |
| How long or cycle | One production batch through facility-gate release; pre-cooling, freezing, and frozen-storage duration are declared |
| reference_flow_link | 75e4eb25-986c-4684-ad73-33ba3528f571 |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net qualified frozen product, excluding packaging mass |
| Reference product flow | Meat of camels and camelids, frozen `75e4eb25-986c-4684-ad73-33ba3528f571` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | camelid species; whole carcass, quarter, cut, or trimming; bone-in or boneless state; fat and trim specification; frozen state; freezing method and profile; dispatch and storage temperature; packaging or bulk configuration; net product mass excluding packaging; facility and batch; evidence excluding fresh or chilled product; evidence excluding edible offal |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent package field. Missing qualifiers make the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Fix the reference flow at exactly 1 kg net qualified frozen meat and exclude all packaging mass. |
| `net_product_mass` | Product, intermediate, co-product, reject, and solid-waste mass | Mass | kg | Use calibrated gross and tare measurements or an auditable equivalent; report each physical mass lot once. |
| `frozen_state` | Reference product | Mass | kg | Demonstrate frozen status at release through the declared freezing profile and dispatch or storage temperature record; do not substitute fresh or chilled meat. |
| `electricity_energy` | Each stage-specific electricity input | Energy | kWh | Record receipt, slaughter, dressing, pre-cooling, freezing, packaging, frozen-storage, sanitation, and wastewater-treatment electricity separately. |
| `thermal_energy` | Purchased steam or purchased hot water | Energy | MJ | Meter each purchased thermal carrier separately and disclose conversion assumptions if the source record uses another energy unit. |
| `fuel_quantity` | Natural gas, diesel, or liquefied petroleum gas | Volume or Mass | m3 or kg | Record each fuel separately using a calibrated meter or stock balance and document any density or energy conversion. |
| `water_volume` | Process water or named wastewater stream | Volume | m3 | Record each water or wastewater stream separately before mixing where feasible and reconcile facility intake, transfer, treatment, and discharge. |
| `refrigerant_balance` | Each refrigerant substance | Mass | kg | Reconcile opening stock, purchases, recovery, transfer, closing stock, and loss separately for R-717, R-134a, and R-744 when present. |
| `emission_mass` | Each air or water emission | Mass | kg | Report each pollutant and environmental compartment separately; calculate only from matched foreground activity and measurement records. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live dromedary camel, Bactrian camel, llama, alpaca, or another declared camelid species accepted at slaughterhouse receipt |
| starting_condition_role | Foreground entry condition; upstream husbandry and inbound transport are not re-created inside this PCR |
| product_classification_scope | CPC 21137 frozen camel or camelid meat only; fresh or chilled meat and offal are excluded from the reference product |
| recursive_input_rule | If frozen camel or camelid meat re-enters a foreground operation, record it once as a product input and link its upstream dataset; do not recursively duplicate its production inventory |
| upstream_dataset_requirement | Use transparent upstream datasets for animal raising, feed, veterinary inputs, inbound transport, purchased utilities, chemicals, packaging, and off-site waste treatment when those burdens are in study scope |
| disclosure | Declare species, product form, bone status, freezing route, temperatures, packaging, facility, period, allocation, recovered-material status, wastewater route, refrigerants, and all exclusions |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_stages` | Foreground system | Include receipt, holding, slaughter, bleeding, skinning, evisceration, carcass dressing, conditional cutting, pre-cooling, freezing, packaging, frozen storage, cleaning, disinfection, and applicable on-site wastewater treatment. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `boundary_upstream_downstream` | Study boundary | Treat animal raising and inbound transport as upstream and distribution, retail, use, and end-of-life as downstream; disclose any study-specific extension. | `eu-pef-2021-2279` |
| `boundary_product_exclusions` | Reference product | Exclude fresh or chilled meat and edible or non-edible offal from the reference product; keep specific offal or residue exchanges in the inventory where they cross the foreground boundary. | `unsd-cpc-3-21137`; `ec-jrc-sa-bref-jrc135916` |
| `boundary_wastewater_condition` | On-site wastewater treatment | Include the treatment process only when named foreground wastewater streams are treated on site; otherwise preserve each transfer to its off-site treatment boundary. | `ec-jrc-sa-bref-jrc135916` |
| `boundary_completeness` | Inventory | Do not omit a material, energy, water, refrigerant, waste, wastewater, or direct-emission exchange merely because its Tiangong UUID is unresolved. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `camelid_receipt_and_holding` | Camelid receipt and holding | `required` | Always include for slaughterhouse production from accepted live animals. | Establishes species-specific live-animal receipt, acceptance, holding utilities, and receipt losses. | Accepted live-animal mass linked to the 1 kg reference output. |
| `slaughter_bleeding_skinning_evisceration` | Slaughter, bleeding, skinning, and evisceration | `required` | Always include for production from accepted live camelids. | Transforms accepted live animals into skinned eviscerated carcasses while separately recording utilities, co-products, wastes, wastewater, and combustion emissions. | Skinned eviscerated carcass mass linked to the 1 kg reference output. |
| `carcass_dressing_and_cutting` | Carcass dressing and cutting | `required` | Include carcass dressing for every product; include cutting and deboning operations only for the declared product form. | Prepares eligible carcasses and, where declared, separates specific meat cuts while recording bone, fat, rejects, wastewater, water, and electricity separately. | Eligible dressed carcass or cut mass linked to the 1 kg reference output. |
| `precooling_and_freezing` | Pre-cooling and freezing | `required` | Always include to establish the frozen market state; record only the refrigerant substances actually present at the facility. | Pre-cools eligible meat, freezes it to the declared frozen state, and keeps electricity, refrigerant make-up, refrigerant leakage, water, ice, wastewater, and compressor oil as separate exchanges. | Frozen eligible meat mass linked to the 1 kg reference output. |
| `packaging_and_frozen_storage` | Packaging and frozen storage | `required` | Always include product release packaging and frozen storage up to the facility gate; include each packaging component and protective gas only when used. | Receives frozen meat, records each packaging component and storage utility separately, rejects off-spec product, and releases the sole 1 kg reference product. | Exactly 1 kg net qualified frozen reference product, excluding packaging mass. |
| `cleaning_and_disinfection` | Cleaning and disinfection | `required` | Always include facility sanitation; record each chemical and thermal carrier only when actually used and assign shared cleaning records once. | Records sanitation water, electricity, steam, hot water, each fuel, each cleaning chemical, each chemical-specific wastewater, floor sweepings, and combustion emission separately. | Sanitation activity allocated to the 1 kg reference output. |
| `onsite_wastewater_treatment` | On-site wastewater treatment | `conditional` | Include only when one or more named foreground wastewater streams are treated on site before discharge or transfer. | Treats each named wastewater input, records each treatment consumable, separates each sludge or grease output, and reports each final water or air emission individually. | Treatment activity and discharge allocated to the 1 kg reference output. |

### Process: Camelid receipt and holding (`camelid_receipt_and_holding`)

#### Inputs

##### Product flows

###### Dromedary camel received alive (`receipt_live_dromedary_camel`)

Live dromedary camel is the single dromedary camel received alive crossing into the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Live dromedary camel
- Flow property / unit: Mass / kg
- Amount rule: Record net live mass from calibrated weighbridge or platform-scale records after excluding transport equipment tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_animal_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Bactrian camel received alive (`receipt_live_bactrian_camel`)

Live Bactrian camel is the single bactrian camel received alive crossing into the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Live Bactrian camel
- Flow property / unit: Mass / kg
- Amount rule: Record net live mass from calibrated weighbridge or platform-scale records after excluding transport equipment tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_animal_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Llama received alive (`receipt_live_llama`)

Live llama is the single llama received alive crossing into the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Live llama
- Flow property / unit: Mass / kg
- Amount rule: Record net live mass from calibrated weighbridge or platform-scale records after excluding transport equipment tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_animal_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Alpaca received alive (`receipt_live_alpaca`)

Live alpaca is the single alpaca received alive crossing into the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Live alpaca
- Flow property / unit: Mass / kg
- Amount rule: Record net live mass from calibrated weighbridge or platform-scale records after excluding transport equipment tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_animal_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Holding drinking water (`receipt_holding_water`)

Process water is the single holding drinking water crossing into the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record process water volume from a dedicated meter, tank record, or documented allocation of a shared calibrated meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Holding-area grid electricity (`receipt_holding_electricity`)

Electricity, medium voltage is the single holding-area grid electricity crossing into the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record stage electricity from a dedicated submeter; if a shared meter is used, apply a documented time, load, or throughput allocation without combining another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted dromedary camel (`receipt_accepted_dromedary_camel`)

Accepted dromedary camel is the single accepted dromedary camel leaving the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Accepted dromedary camel
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_animal_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Accepted Bactrian camel (`receipt_accepted_bactrian_camel`)

Accepted Bactrian camel is the single accepted bactrian camel leaving the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Accepted Bactrian camel
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_animal_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Accepted llama (`receipt_accepted_llama`)

Accepted llama is the single accepted llama leaving the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Accepted llama
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_animal_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Accepted alpaca (`receipt_accepted_alpaca`)

Accepted alpaca is the single accepted alpaca leaving the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Accepted alpaca
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_animal_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Dead-on-arrival dromedary carcass waste (`receipt_doa_dromedary_carcass`)

Dead-on-arrival dromedary camel carcass is the single dead-on-arrival dromedary carcass waste leaving the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Dead-on-arrival dromedary camel carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dead-on-arrival Bactrian carcass waste (`receipt_doa_bactrian_carcass`)

Dead-on-arrival Bactrian camel carcass is the single dead-on-arrival bactrian carcass waste leaving the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Dead-on-arrival Bactrian camel carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dead-on-arrival llama carcass waste (`receipt_doa_llama_carcass`)

Dead-on-arrival llama carcass is the single dead-on-arrival llama carcass waste leaving the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Dead-on-arrival llama carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dead-on-arrival alpaca carcass waste (`receipt_doa_alpaca_carcass`)

Dead-on-arrival alpaca carcass is the single dead-on-arrival alpaca carcass waste leaving the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Dead-on-arrival alpaca carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid manure waste (`receipt_camelid_manure`)

Camelid manure is the single camelid manure waste leaving the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid manure
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Holding-area wash wastewater (`receipt_holding_wash_wastewater`)

Holding-area wash wastewater is the single holding-area wash wastewater leaving the Camelid receipt and holding foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Holding-area wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receipt_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

### Process: Slaughter, bleeding, skinning, and evisceration (`slaughter_bleeding_skinning_evisceration`)

#### Inputs

##### Product flows

###### Accepted dromedary camel input (`slaughter_accepted_dromedary_camel`)

Accepted dromedary camel is the single accepted dromedary camel input crossing into the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Accepted dromedary camel
- Flow property / unit: Mass / kg
- Amount rule: Record net live mass from calibrated weighbridge or platform-scale records after excluding transport equipment tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_animal_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Accepted Bactrian camel input (`slaughter_accepted_bactrian_camel`)

Accepted Bactrian camel is the single accepted bactrian camel input crossing into the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Accepted Bactrian camel
- Flow property / unit: Mass / kg
- Amount rule: Record net live mass from calibrated weighbridge or platform-scale records after excluding transport equipment tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_animal_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Accepted llama input (`slaughter_accepted_llama`)

Accepted llama is the single accepted llama input crossing into the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Accepted llama
- Flow property / unit: Mass / kg
- Amount rule: Record net live mass from calibrated weighbridge or platform-scale records after excluding transport equipment tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_animal_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Accepted alpaca input (`slaughter_accepted_alpaca`)

Accepted alpaca is the single accepted alpaca input crossing into the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Accepted alpaca
- Flow property / unit: Mass / kg
- Amount rule: Record net live mass from calibrated weighbridge or platform-scale records after excluding transport equipment tare.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_animal_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter process water (`slaughter_process_water`)

Process water is the single slaughter process water crossing into the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record process water volume from a dedicated meter, tank record, or documented allocation of a shared calibrated meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter-stage grid electricity (`slaughter_electricity`)

Electricity, medium voltage is the single slaughter-stage grid electricity crossing into the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record stage electricity from a dedicated submeter; if a shared meter is used, apply a documented time, load, or throughput allocation without combining another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter-stage purchased steam (`slaughter_purchased_steam`)

Steam, purchased is the single slaughter-stage purchased steam crossing into the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record purchased steam delivered to this stage from a steam meter or supplier record, net of documented condensate-return treatment where relevant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter-stage purchased hot water (`slaughter_purchased_hot_water`)

Hot water, purchased is the single slaughter-stage purchased hot water crossing into the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record purchased hot-water heat delivered to this stage from calibrated flow and temperature records or a supplier heat meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter-stage natural gas (`slaughter_natural_gas`)

Natural gas is the single slaughter-stage natural gas crossing into the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Record natural-gas volume assigned to this stage from a calibrated fuel meter or reconciled supplier invoice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter-stage diesel (`slaughter_diesel`)

Diesel fuel is the single slaughter-stage diesel crossing into the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record diesel consumed by this stage from tank issue, purchase, and closing-stock records using the measured mass or documented density conversion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter-stage liquefied petroleum gas (`slaughter_lpg`)

Liquefied petroleum gas is the single slaughter-stage liquefied petroleum gas crossing into the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record liquefied-petroleum-gas consumption assigned to this stage from cylinder, tank, purchase, and stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Skinned eviscerated dromedary carcass (`slaughter_dromedary_carcass`)

Skinned eviscerated dromedary camel carcass is the single skinned eviscerated dromedary carcass leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Skinned eviscerated dromedary camel carcass
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Skinned eviscerated Bactrian carcass (`slaughter_bactrian_carcass`)

Skinned eviscerated Bactrian camel carcass is the single skinned eviscerated bactrian carcass leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Skinned eviscerated Bactrian camel carcass
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Skinned eviscerated llama carcass (`slaughter_llama_carcass`)

Skinned eviscerated llama carcass is the single skinned eviscerated llama carcass leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Skinned eviscerated llama carcass
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Skinned eviscerated alpaca carcass (`slaughter_alpaca_carcass`)

Skinned eviscerated alpaca carcass is the single skinned eviscerated alpaca carcass leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Skinned eviscerated alpaca carcass
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered camelid blood co-product (`slaughter_recovered_blood`)

Camelid blood is the single recovered camelid blood co-product leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid blood
- Flow property / unit: Mass / kg
- Amount rule: Record the net recovered mass from calibrated scales and destination records; use this product output only when the material has a documented beneficial use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproduct_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered raw camelid hide co-product (`slaughter_recovered_hide`)

Raw camelid hide is the single recovered raw camelid hide co-product leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Raw camelid hide
- Flow property / unit: Mass / kg
- Amount rule: Record the net recovered mass from calibrated scales and destination records; use this product output only when the material has a documented beneficial use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproduct_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered camelid liver co-product (`slaughter_recovered_liver`)

Camelid liver is the single recovered camelid liver co-product leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid liver
- Flow property / unit: Mass / kg
- Amount rule: Record the net recovered mass from calibrated scales and destination records; use this product output only when the material has a documented beneficial use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproduct_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered camelid heart co-product (`slaughter_recovered_heart`)

Camelid heart is the single recovered camelid heart co-product leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid heart
- Flow property / unit: Mass / kg
- Amount rule: Record the net recovered mass from calibrated scales and destination records; use this product output only when the material has a documented beneficial use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproduct_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered camelid kidney co-product (`slaughter_recovered_kidney`)

Camelid kidney is the single recovered camelid kidney co-product leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid kidney
- Flow property / unit: Mass / kg
- Amount rule: Record the net recovered mass from calibrated scales and destination records; use this product output only when the material has a documented beneficial use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproduct_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered camelid fat co-product (`slaughter_recovered_fat`)

Camelid fat is the single recovered camelid fat co-product leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid fat
- Flow property / unit: Mass / kg
- Amount rule: Record the net recovered mass from calibrated scales and destination records; use this product output only when the material has a documented beneficial use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproduct_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered camelid head co-product (`slaughter_recovered_head`)

Camelid head is the single recovered camelid head co-product leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid head
- Flow property / unit: Mass / kg
- Amount rule: Record the net recovered mass from calibrated scales and destination records; use this product output only when the material has a documented beneficial use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_coproduct_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Discarded camelid blood waste (`slaughter_discarded_blood`)

Discarded camelid blood is the single discarded camelid blood waste leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Discarded camelid blood
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Discarded raw camelid hide waste (`slaughter_discarded_hide`)

Discarded raw camelid hide is the single discarded raw camelid hide waste leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Discarded raw camelid hide
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Discarded camelid liver waste (`slaughter_discarded_liver`)

Discarded camelid liver is the single discarded camelid liver waste leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Discarded camelid liver
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Discarded camelid heart waste (`slaughter_discarded_heart`)

Discarded camelid heart is the single discarded camelid heart waste leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Discarded camelid heart
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Discarded camelid kidney waste (`slaughter_discarded_kidney`)

Discarded camelid kidney is the single discarded camelid kidney waste leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Discarded camelid kidney
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Discarded camelid fat waste (`slaughter_discarded_fat`)

Discarded camelid fat is the single discarded camelid fat waste leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Discarded camelid fat
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Discarded camelid head waste (`slaughter_discarded_head`)

Discarded camelid head is the single discarded camelid head waste leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Discarded camelid head
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid lung tissue waste (`slaughter_lung_tissue`)

Camelid lung tissue is the single camelid lung tissue waste leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid lung tissue
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid spleen tissue waste (`slaughter_spleen_tissue`)

Camelid spleen tissue is the single camelid spleen tissue waste leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid spleen tissue
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid stomach tissue waste (`slaughter_stomach_tissue`)

Camelid stomach tissue is the single camelid stomach tissue waste leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid stomach tissue
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid intestinal tissue waste (`slaughter_intestinal_tissue`)

Camelid intestinal tissue is the single camelid intestinal tissue waste leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid intestinal tissue
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid stomach contents waste (`slaughter_stomach_contents`)

Camelid stomach contents is the single camelid stomach contents waste leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid stomach contents
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid intestinal contents waste (`slaughter_intestinal_contents`)

Camelid intestinal contents is the single camelid intestinal contents waste leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid intestinal contents
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Condemned camelid carcass waste (`slaughter_condemned_carcass`)

Condemned camelid carcass is the single condemned camelid carcass waste leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Condemned camelid carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_waste_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### High-organic-load slaughter wastewater (`slaughter_high_load_wastewater`)

High-organic-load slaughter wastewater is the single high-organic-load slaughter wastewater leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: High-organic-load slaughter wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_wastewater`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### Slaughter fossil carbon-dioxide emission (`slaughter_fossil_co2_air`)

Carbon dioxide, fossil, to air is the single slaughter fossil carbon-dioxide emission leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single air emission from the separately collected fuel quantity and a documented facility-specific factor, stack measurement, or legally reported result; no default factor is prescribed here.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_combustion_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter nitrogen-oxide emission (`slaughter_nox_air`)

Nitrogen oxides, to air is the single slaughter nitrogen-oxide emission leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single air emission from the separately collected fuel quantity and a documented facility-specific factor, stack measurement, or legally reported result; no default factor is prescribed here.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_combustion_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter sulfur-dioxide emission (`slaughter_so2_air`)

Sulfur dioxide, to air is the single slaughter sulfur-dioxide emission leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single air emission from the separately collected fuel quantity and a documented facility-specific factor, stack measurement, or legally reported result; no default factor is prescribed here.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_combustion_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter fine-particulate emission (`slaughter_pm25_air`)

Particulate matter, < 2.5 µm, to air is the single slaughter fine-particulate emission leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Particulate matter, < 2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single air emission from the separately collected fuel quantity and a documented facility-specific factor, stack measurement, or legally reported result; no default factor is prescribed here.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_combustion_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Slaughter coarse-particulate emission (`slaughter_pm10_fraction_air`)

Particulate matter, 2.5-10 µm, to air is the single slaughter coarse-particulate emission leaving the Slaughter, bleeding, skinning, and evisceration foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single air emission from the separately collected fuel quantity and a documented facility-specific factor, stack measurement, or legally reported result; no default factor is prescribed here.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_combustion_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### Process: Carcass dressing and cutting (`carcass_dressing_and_cutting`)

#### Inputs

##### Product flows

###### Dromedary carcass input (`dressing_dromedary_carcass_input`)

Skinned eviscerated dromedary camel carcass is the single dromedary carcass input crossing into the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Skinned eviscerated dromedary camel carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_input_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Bactrian carcass input (`dressing_bactrian_carcass_input`)

Skinned eviscerated Bactrian camel carcass is the single bactrian carcass input crossing into the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Skinned eviscerated Bactrian camel carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_input_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Llama carcass input (`dressing_llama_carcass_input`)

Skinned eviscerated llama carcass is the single llama carcass input crossing into the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Skinned eviscerated llama carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_input_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Alpaca carcass input (`dressing_alpaca_carcass_input`)

Skinned eviscerated alpaca carcass is the single alpaca carcass input crossing into the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Skinned eviscerated alpaca carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_input_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dressing process water (`dressing_process_water`)

Process water is the single dressing process water crossing into the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record process water volume from a dedicated meter, tank record, or documented allocation of a shared calibrated meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dressing-stage grid electricity (`dressing_electricity`)

Electricity, medium voltage is the single dressing-stage grid electricity crossing into the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record stage electricity from a dedicated submeter; if a shared meter is used, apply a documented time, load, or throughput allocation without combining another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dressed dromedary carcass (`dressing_dromedary_carcass_output`)

Dressed dromedary camel carcass is the single dressed dromedary carcass leaving the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Dressed dromedary camel carcass
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dressed Bactrian carcass (`dressing_bactrian_carcass_output`)

Dressed Bactrian camel carcass is the single dressed bactrian carcass leaving the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Dressed Bactrian camel carcass
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dressed llama carcass (`dressing_llama_carcass_output`)

Dressed llama carcass is the single dressed llama carcass leaving the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Dressed llama carcass
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dressed alpaca carcass (`dressing_alpaca_carcass_output`)

Dressed alpaca carcass is the single dressed alpaca carcass leaving the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Dressed alpaca carcass
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid loin meat (`dressing_loin_meat`)

Camelid loin meat is the single camelid loin meat leaving the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid loin meat
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid shoulder meat (`dressing_shoulder_meat`)

Camelid shoulder meat is the single camelid shoulder meat leaving the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid shoulder meat
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid leg meat (`dressing_leg_meat`)

Camelid leg meat is the single camelid leg meat leaving the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid leg meat
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid rib meat (`dressing_rib_meat`)

Camelid rib meat is the single camelid rib meat leaving the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid rib meat
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid meat trimmings (`dressing_meat_trimmings`)

Camelid meat trimmings is the single camelid meat trimmings leaving the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid meat trimmings
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered camelid bone co-product (`dressing_recovered_bone`)

Recovered camelid bone is the single recovered camelid bone co-product leaving the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Recovered camelid bone
- Flow property / unit: Mass / kg
- Amount rule: Record the net recovered mass from calibrated scales and destination records; use this product output only when the material has a documented beneficial use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_coproduct_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Recovered separated camelid fat co-product (`dressing_recovered_fat`)

Recovered separated camelid fat is the single recovered separated camelid fat co-product leaving the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Recovered separated camelid fat
- Flow property / unit: Mass / kg
- Amount rule: Record the net recovered mass from calibrated scales and destination records; use this product output only when the material has a documented beneficial use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_coproduct_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Discarded camelid bone waste (`dressing_discarded_bone`)

Discarded camelid bone is the single discarded camelid bone waste leaving the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Discarded camelid bone
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Discarded separated camelid fat waste (`dressing_discarded_fat`)

Discarded separated camelid fat is the single discarded separated camelid fat waste leaving the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Discarded separated camelid fat
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Condemned camelid meat waste (`dressing_condemned_meat`)

Condemned camelid meat is the single condemned camelid meat waste leaving the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Condemned camelid meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Carcass dressing wastewater (`dressing_wash_wastewater`)

Carcass dressing wastewater is the single carcass dressing wastewater leaving the Carcass dressing and cutting foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Carcass dressing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dressing_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

### Process: Pre-cooling and freezing (`precooling_and_freezing`)

#### Inputs

##### Product flows

###### Dressed dromedary carcass input (`freezing_dromedary_carcass_input`)

Dressed dromedary camel carcass is the single dressed dromedary carcass input crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Dressed dromedary camel carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_input_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dressed Bactrian carcass input (`freezing_bactrian_carcass_input`)

Dressed Bactrian camel carcass is the single dressed bactrian carcass input crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Dressed Bactrian camel carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_input_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dressed llama carcass input (`freezing_llama_carcass_input`)

Dressed llama carcass is the single dressed llama carcass input crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Dressed llama carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_input_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dressed alpaca carcass input (`freezing_alpaca_carcass_input`)

Dressed alpaca carcass is the single dressed alpaca carcass input crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Dressed alpaca carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_input_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid loin input (`freezing_loin_input`)

Camelid loin meat is the single camelid loin input crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid loin meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_input_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid shoulder input (`freezing_shoulder_input`)

Camelid shoulder meat is the single camelid shoulder input crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid shoulder meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_input_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid leg input (`freezing_leg_input`)

Camelid leg meat is the single camelid leg input crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid leg meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_input_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid rib input (`freezing_rib_input`)

Camelid rib meat is the single camelid rib input crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid rib meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_input_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Camelid meat-trimming input (`freezing_trimmings_input`)

Camelid meat trimmings is the single camelid meat-trimming input crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Camelid meat trimmings
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_input_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Pre-cooling process water (`freezing_precooling_water`)

Process water is the single pre-cooling process water crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record process water volume from a dedicated meter, tank record, or documented allocation of a shared calibrated meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Pre-cooling ice (`freezing_ice`)

Ice is the single pre-cooling ice crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Ice
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Pre-cooling grid electricity (`freezing_precooling_electricity`)

Electricity, medium voltage is the single pre-cooling grid electricity crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record stage electricity from a dedicated submeter; if a shared meter is used, apply a documented time, load, or throughput allocation without combining another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Freezing-stage grid electricity (`freezing_stage_electricity`)

Electricity, medium voltage is the single freezing-stage grid electricity crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record stage electricity from a dedicated submeter; if a shared meter is used, apply a documented time, load, or throughput allocation without combining another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Ammonia refrigerant make-up (`freezing_ammonia_makeup`)

Ammonia refrigerant R-717 is the single ammonia refrigerant make-up crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Ammonia refrigerant R-717
- Flow property / unit: Mass / kg
- Amount rule: Record refrigerant make-up mass from cylinder weighing, purchase, recovery, transfer, and equipment service records for this specific substance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_refrigerant_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-134a refrigerant make-up (`freezing_r134a_makeup`)

1,1,1,2-Tetrafluoroethane refrigerant R-134a is the single r-134a refrigerant make-up crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant R-134a
- Flow property / unit: Mass / kg
- Amount rule: Record refrigerant make-up mass from cylinder weighing, purchase, recovery, transfer, and equipment service records for this specific substance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_refrigerant_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-744 refrigerant make-up (`freezing_r744_makeup`)

Carbon dioxide refrigerant R-744 is the single r-744 refrigerant make-up crossing into the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Carbon dioxide refrigerant R-744
- Flow property / unit: Mass / kg
- Amount rule: Record refrigerant make-up mass from cylinder weighing, purchase, recovery, transfer, and equipment service records for this specific substance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_refrigerant_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Frozen dromedary carcass (`freezing_frozen_dromedary_carcass`)

Frozen dromedary camel carcass is the single frozen dromedary carcass leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen dromedary camel carcass
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen Bactrian carcass (`freezing_frozen_bactrian_carcass`)

Frozen Bactrian camel carcass is the single frozen bactrian carcass leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen Bactrian camel carcass
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen llama carcass (`freezing_frozen_llama_carcass`)

Frozen llama carcass is the single frozen llama carcass leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen llama carcass
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen alpaca carcass (`freezing_frozen_alpaca_carcass`)

Frozen alpaca carcass is the single frozen alpaca carcass leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen alpaca carcass
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen camelid loin (`freezing_frozen_loin`)

Frozen camelid loin meat is the single frozen camelid loin leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen camelid loin meat
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen camelid shoulder (`freezing_frozen_shoulder`)

Frozen camelid shoulder meat is the single frozen camelid shoulder leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen camelid shoulder meat
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen camelid leg (`freezing_frozen_leg`)

Frozen camelid leg meat is the single frozen camelid leg leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen camelid leg meat
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen camelid rib (`freezing_frozen_rib`)

Frozen camelid rib meat is the single frozen camelid rib leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen camelid rib meat
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen camelid meat trimmings (`freezing_frozen_trimmings`)

Frozen camelid meat trimmings is the single frozen camelid meat trimmings leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen camelid meat trimmings
- Flow property / unit: Mass / kg
- Amount rule: Record net output mass from calibrated scales and batch production records; classify each mass lot once.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_output_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Pre-cooling wastewater (`freezing_precooling_wastewater`)

Pre-cooling wastewater is the single pre-cooling wastewater leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Pre-cooling wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Defrost wastewater (`freezing_defrost_wastewater`)

Defrost wastewater is the single defrost wastewater leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste refrigeration compressor oil (`freezing_waste_compressor_oil`)

Waste refrigeration compressor oil is the single waste refrigeration compressor oil leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Waste refrigeration compressor oil
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_freezing_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### Ammonia refrigerant emission (`freezing_ammonia_air`)

Ammonia, to air is the single ammonia refrigerant emission leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single refrigerant emission by substance-specific inventory mass balance or direct service-loss records; do not combine another refrigerant.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_refrigerant_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### R-134a refrigerant emission (`freezing_r134a_air`)

1,1,1,2-Tetrafluoroethane, to air is the single r-134a refrigerant emission leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single refrigerant emission by substance-specific inventory mass balance or direct service-loss records; do not combine another refrigerant.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_refrigerant_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Fossil R-744 carbon-dioxide emission (`freezing_r744_fossil_co2_air`)

Carbon dioxide, fossil, to air is the single fossil r-744 carbon-dioxide emission leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single refrigerant emission by substance-specific inventory mass balance or direct service-loss records; do not combine another refrigerant.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_refrigerant_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Biogenic R-744 carbon-dioxide emission (`freezing_r744_biogenic_co2_air`)

Carbon dioxide, biogenic, to air is the single biogenic r-744 carbon-dioxide emission leaving the Pre-cooling and freezing foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single refrigerant emission by substance-specific inventory mass balance or direct service-loss records; do not combine another refrigerant.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_freezing_refrigerant_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### Process: Packaging and frozen storage (`packaging_and_frozen_storage`)

#### Inputs

##### Product flows

###### Frozen dromedary carcass input (`packaging_frozen_dromedary_carcass`)

Frozen dromedary camel carcass is the single frozen dromedary carcass input crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen dromedary camel carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_product_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen Bactrian carcass input (`packaging_frozen_bactrian_carcass`)

Frozen Bactrian camel carcass is the single frozen bactrian carcass input crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen Bactrian camel carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_product_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen llama carcass input (`packaging_frozen_llama_carcass`)

Frozen llama carcass is the single frozen llama carcass input crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen llama carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_product_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen alpaca carcass input (`packaging_frozen_alpaca_carcass`)

Frozen alpaca carcass is the single frozen alpaca carcass input crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen alpaca carcass
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_product_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen camelid loin input (`packaging_frozen_loin`)

Frozen camelid loin meat is the single frozen camelid loin input crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen camelid loin meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_product_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen camelid shoulder input (`packaging_frozen_shoulder`)

Frozen camelid shoulder meat is the single frozen camelid shoulder input crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen camelid shoulder meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_product_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen camelid leg input (`packaging_frozen_leg`)

Frozen camelid leg meat is the single frozen camelid leg input crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen camelid leg meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_product_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen camelid rib input (`packaging_frozen_rib`)

Frozen camelid rib meat is the single frozen camelid rib input crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen camelid rib meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_product_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen camelid meat-trimming input (`packaging_frozen_trimmings`)

Frozen camelid meat trimmings is the single frozen camelid meat-trimming input crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Frozen camelid meat trimmings
- Flow property / unit: Mass / kg
- Amount rule: Record the net transferred mass from calibrated scales and batch transfer records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_product_mass`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Packaging-stage grid electricity (`packaging_stage_electricity`)

Electricity, medium voltage is the single packaging-stage grid electricity crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record stage electricity from a dedicated submeter; if a shared meter is used, apply a documented time, load, or throughput allocation without combining another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_energy`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Frozen-storage grid electricity (`storage_stage_electricity`)

Electricity, medium voltage is the single frozen-storage grid electricity crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record stage electricity from a dedicated submeter; if a shared meter is used, apply a documented time, load, or throughput allocation without combining another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_energy`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Linear-low-density-polyethylene film (`packaging_lldpe_film`)

Linear low-density polyethylene film is the single linear-low-density-polyethylene film crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Linear low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass of this single packaging component issued to qualified product, including documented replacement consumption for reusable items.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### High-density-polyethylene liner (`packaging_hdpe_liner`)

High-density polyethylene liner is the single high-density-polyethylene liner crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: High-density polyethylene liner
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass of this single packaging component issued to qualified product, including documented replacement consumption for reusable items.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Polyamide film (`packaging_polyamide_film`)

Polyamide film is the single polyamide film crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Polyamide film
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass of this single packaging component issued to qualified product, including documented replacement consumption for reusable items.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Paper label (`packaging_paper_label`)

Paper label is the single paper label crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass of this single packaging component issued to qualified product, including documented replacement consumption for reusable items.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Corrugated fibreboard box (`packaging_corrugated_box`)

Corrugated fibreboard box is the single corrugated fibreboard box crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass of this single packaging component issued to qualified product, including documented replacement consumption for reusable items.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Polypropylene strap (`packaging_pp_strap`)

Polypropylene strap is the single polypropylene strap crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Polypropylene strap
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass of this single packaging component issued to qualified product, including documented replacement consumption for reusable items.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Reusable high-density-polyethylene crate (`packaging_hdpe_crate`)

High-density polyethylene reusable crate is the single reusable high-density-polyethylene crate crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: High-density polyethylene reusable crate
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass of this single packaging component issued to qualified product, including documented replacement consumption for reusable items.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Reusable wooden pallet (`packaging_wooden_pallet`)

Wooden pallet is the single reusable wooden pallet crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass of this single packaging component issued to qualified product, including documented replacement consumption for reusable items.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dry-ice cooling input (`packaging_dry_ice`)

Carbon dioxide, solid is the single dry-ice cooling input crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Carbon dioxide, solid
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass issued to this stage from chemical inventory, dosing, purchase, and return records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitrogen protective-gas input (`packaging_nitrogen_gas`)

Nitrogen gas is the single nitrogen protective-gas input crossing into the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Nitrogen gas
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass issued to this stage from chemical inventory, dosing, purchase, and return records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_material_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Qualified frozen camel or camelid meat reference output (`reference_frozen_camelid_meat`)

Meat of camels and camelids, frozen is the sole reference product leaving the foreground system. The amount is fixed at 1 kg net qualified frozen meat, with packaging mass excluded.

- Selected flow: Meat of camels and camelids, frozen `75e4eb25-986c-4684-ad73-33ba3528f571`
- Flow property / unit: Mass / kg
- Amount rule: Set the reference output to exactly 1 kg net qualified frozen product; packaging mass is excluded.
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `unsd-cpc-3-21137`; `eu-pef-2021-2279`

##### Waste flows

###### Off-spec frozen camelid meat waste (`packaging_off_spec_frozen_meat`)

Off-spec frozen camelid meat is the single off-spec frozen camelid meat waste leaving the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Off-spec frozen camelid meat
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste linear-low-density-polyethylene film (`packaging_waste_lldpe_film`)

Waste linear low-density polyethylene film is the single waste linear-low-density-polyethylene film leaving the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Waste linear low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste high-density-polyethylene liner (`packaging_waste_hdpe_liner`)

Waste high-density polyethylene liner is the single waste high-density-polyethylene liner leaving the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Waste high-density polyethylene liner
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste polyamide film (`packaging_waste_polyamide_film`)

Waste polyamide film is the single waste polyamide film leaving the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Waste polyamide film
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste paper label (`packaging_waste_paper_label`)

Waste paper label is the single waste paper label leaving the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Waste paper label
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste corrugated fibreboard box (`packaging_waste_corrugated_box`)

Waste corrugated fibreboard box is the single waste corrugated fibreboard box leaving the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Waste corrugated fibreboard box
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste polypropylene strap (`packaging_waste_pp_strap`)

Waste polypropylene strap is the single waste polypropylene strap leaving the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Waste polypropylene strap
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste high-density-polyethylene crate (`packaging_waste_hdpe_crate`)

Waste high-density polyethylene crate is the single waste high-density-polyethylene crate leaving the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Waste high-density polyethylene crate
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Waste wooden pallet (`packaging_waste_wooden_pallet`)

Waste wooden pallet is the single waste wooden pallet leaving the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Waste wooden pallet
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Packaging-area wash wastewater (`packaging_area_wash_wastewater`)

Packaging-area wash wastewater is the single packaging-area wash wastewater leaving the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Packaging-area wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### Fossil dry-ice carbon-dioxide emission (`packaging_dry_ice_fossil_co2_air`)

Carbon dioxide, fossil, to air is the single fossil dry-ice carbon-dioxide emission leaving the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single gas emission from the corresponding material balance or a direct calibrated measurement, retaining its declared origin and compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_gas_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Biogenic dry-ice carbon-dioxide emission (`packaging_dry_ice_biogenic_co2_air`)

Carbon dioxide, biogenic, to air is the single biogenic dry-ice carbon-dioxide emission leaving the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single gas emission from the corresponding material balance or a direct calibrated measurement, retaining its declared origin and compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_gas_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Protective nitrogen emission (`packaging_nitrogen_air`)

Nitrogen, to air is the single protective nitrogen emission leaving the Packaging and frozen storage foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Nitrogen, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single gas emission from the corresponding material balance or a direct calibrated measurement, retaining its declared origin and compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_gas_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### Process: Cleaning and disinfection (`cleaning_and_disinfection`)

#### Inputs

##### Product flows

###### Sanitation process water (`sanitation_process_water`)

Process water is the single sanitation process water crossing into the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record process water volume from a dedicated meter, tank record, or documented allocation of a shared calibrated meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation grid electricity (`sanitation_electricity`)

Electricity, medium voltage is the single sanitation grid electricity crossing into the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record stage electricity from a dedicated submeter; if a shared meter is used, apply a documented time, load, or throughput allocation without combining another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation purchased steam (`sanitation_purchased_steam`)

Steam, purchased is the single sanitation purchased steam crossing into the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Steam, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record purchased steam delivered to this stage from a steam meter or supplier record, net of documented condensate-return treatment where relevant.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation purchased hot water (`sanitation_purchased_hot_water`)

Hot water, purchased is the single sanitation purchased hot water crossing into the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Hot water, purchased
- Flow property / unit: Energy / MJ
- Amount rule: Record purchased hot-water heat delivered to this stage from calibrated flow and temperature records or a supplier heat meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation natural gas (`sanitation_natural_gas`)

Natural gas is the single sanitation natural gas crossing into the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Natural gas
- Flow property / unit: Volume / m3
- Amount rule: Record natural-gas volume assigned to this stage from a calibrated fuel meter or reconciled supplier invoice.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation diesel (`sanitation_diesel`)

Diesel fuel is the single sanitation diesel crossing into the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Record diesel consumed by this stage from tank issue, purchase, and closing-stock records using the measured mass or documented density conversion.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation liquefied petroleum gas (`sanitation_lpg`)

Liquefied petroleum gas is the single sanitation liquefied petroleum gas crossing into the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass / kg
- Amount rule: Record liquefied-petroleum-gas consumption assigned to this stage from cylinder, tank, purchase, and stock records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_utilities`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sodium-hydroxide cleaner (`sanitation_sodium_hydroxide`)

Sodium hydroxide is the single sodium-hydroxide cleaner crossing into the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass issued to this stage from chemical inventory, dosing, purchase, and return records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_chemical_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitric-acid cleaner (`sanitation_nitric_acid`)

Nitric acid is the single nitric-acid cleaner crossing into the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Nitric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass issued to this stage from chemical inventory, dosing, purchase, and return records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_chemical_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Phosphoric-acid cleaner (`sanitation_phosphoric_acid`)

Phosphoric acid is the single phosphoric-acid cleaner crossing into the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Phosphoric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass issued to this stage from chemical inventory, dosing, purchase, and return records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_chemical_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Peracetic-acid disinfectant (`sanitation_peracetic_acid`)

Peracetic acid is the single peracetic-acid disinfectant crossing into the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass issued to this stage from chemical inventory, dosing, purchase, and return records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_chemical_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sodium-hypochlorite disinfectant (`sanitation_sodium_hypochlorite`)

Sodium hypochlorite is the single sodium-hypochlorite disinfectant crossing into the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Sodium hypochlorite
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass issued to this stage from chemical inventory, dosing, purchase, and return records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_chemical_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Benzalkonium-chloride disinfectant (`sanitation_benzalkonium_chloride`)

Benzalkonium chloride is the single benzalkonium-chloride disinfectant crossing into the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Benzalkonium chloride
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass issued to this stage from chemical inventory, dosing, purchase, and return records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_chemical_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Sodium-hydroxide sanitation wastewater (`sanitation_alkaline_wastewater`)

Sodium-hydroxide sanitation wastewater is the single sodium-hydroxide sanitation wastewater leaving the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Sodium-hydroxide sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitric-acid sanitation wastewater (`sanitation_nitric_wastewater`)

Nitric-acid sanitation wastewater is the single nitric-acid sanitation wastewater leaving the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Nitric-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Phosphoric-acid sanitation wastewater (`sanitation_phosphoric_wastewater`)

Phosphoric-acid sanitation wastewater is the single phosphoric-acid sanitation wastewater leaving the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Phosphoric-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Peracetic-acid sanitation wastewater (`sanitation_peracetic_wastewater`)

Peracetic-acid sanitation wastewater is the single peracetic-acid sanitation wastewater leaving the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Peracetic-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sodium-hypochlorite sanitation wastewater (`sanitation_hypochlorite_wastewater`)

Sodium-hypochlorite sanitation wastewater is the single sodium-hypochlorite sanitation wastewater leaving the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Sodium-hypochlorite sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Benzalkonium-chloride sanitation wastewater (`sanitation_benzalkonium_wastewater`)

Benzalkonium-chloride sanitation wastewater is the single benzalkonium-chloride sanitation wastewater leaving the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Benzalkonium-chloride sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Final-rinse sanitation wastewater (`sanitation_final_rinse_wastewater`)

Final-rinse sanitation wastewater is the single final-rinse sanitation wastewater leaving the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Final-rinse sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Facility floor sweepings waste (`sanitation_floor_sweepings`)

Facility floor sweepings is the single facility floor sweepings waste leaving the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Facility floor sweepings
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### Sanitation fossil carbon-dioxide emission (`sanitation_fossil_co2_air`)

Carbon dioxide, fossil, to air is the single sanitation fossil carbon-dioxide emission leaving the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single air emission from the separately collected fuel quantity and a documented facility-specific factor, stack measurement, or legally reported result; no default factor is prescribed here.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_combustion_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation nitrogen-oxide emission (`sanitation_nox_air`)

Nitrogen oxides, to air is the single sanitation nitrogen-oxide emission leaving the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Nitrogen oxides, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single air emission from the separately collected fuel quantity and a documented facility-specific factor, stack measurement, or legally reported result; no default factor is prescribed here.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_combustion_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation sulfur-dioxide emission (`sanitation_so2_air`)

Sulfur dioxide, to air is the single sanitation sulfur-dioxide emission leaving the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Sulfur dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single air emission from the separately collected fuel quantity and a documented facility-specific factor, stack measurement, or legally reported result; no default factor is prescribed here.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_combustion_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation fine-particulate emission (`sanitation_pm25_air`)

Particulate matter, < 2.5 µm, to air is the single sanitation fine-particulate emission leaving the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Particulate matter, < 2.5 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single air emission from the separately collected fuel quantity and a documented facility-specific factor, stack measurement, or legally reported result; no default factor is prescribed here.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_combustion_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sanitation coarse-particulate emission (`sanitation_pm10_fraction_air`)

Particulate matter, 2.5-10 µm, to air is the single sanitation coarse-particulate emission leaving the Cleaning and disinfection foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Particulate matter, 2.5-10 µm, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single air emission from the separately collected fuel quantity and a documented facility-specific factor, stack measurement, or legally reported result; no default factor is prescribed here.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_combustion_emissions`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater-treatment grid electricity (`wwt_electricity`)

Electricity, medium voltage is the single wastewater-treatment grid electricity crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Record stage electricity from a dedicated submeter; if a shared meter is used, apply a documented time, load, or throughput allocation without combining another energy carrier.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumable_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Ferric-chloride coagulant (`wwt_ferric_chloride`)

Ferric chloride is the single ferric-chloride coagulant crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Ferric chloride
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass issued to this stage from chemical inventory, dosing, purchase, and return records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumable_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Anionic-polyacrylamide flocculant (`wwt_polyacrylamide`)

Anionic polyacrylamide is the single anionic-polyacrylamide flocculant crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Anionic polyacrylamide
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass issued to this stage from chemical inventory, dosing, purchase, and return records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumable_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Wastewater-treatment sodium hydroxide (`wwt_sodium_hydroxide`)

Sodium hydroxide is the single wastewater-treatment sodium hydroxide crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass issued to this stage from chemical inventory, dosing, purchase, and return records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumable_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Wastewater-treatment sulfuric acid (`wwt_sulfuric_acid`)

Sulfuric acid is the single wastewater-treatment sulfuric acid crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Sulfuric acid
- Flow property / unit: Mass / kg
- Amount rule: Record the net mass issued to this stage from chemical inventory, dosing, purchase, and return records.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumable_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Polymer make-up water (`wwt_polymer_makeup_water`)

Process water is the single polymer make-up water crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Process water
- Flow property / unit: Volume / m3
- Amount rule: Record process water volume from a dedicated meter, tank record, or documented allocation of a shared calibrated meter.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_consumable_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Holding-area wash wastewater influent (`wwt_holding_wash_influent`)

Holding-area wash wastewater is the single holding-area wash wastewater influent crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Holding-area wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### High-organic-load slaughter wastewater influent (`wwt_slaughter_high_load_influent`)

High-organic-load slaughter wastewater is the single high-organic-load slaughter wastewater influent crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: High-organic-load slaughter wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Carcass dressing wastewater influent (`wwt_dressing_wash_influent`)

Carcass dressing wastewater is the single carcass dressing wastewater influent crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Carcass dressing wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Pre-cooling wastewater influent (`wwt_precooling_influent`)

Pre-cooling wastewater is the single pre-cooling wastewater influent crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Pre-cooling wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Defrost wastewater influent (`wwt_defrost_influent`)

Defrost wastewater is the single defrost wastewater influent crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Defrost wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Packaging-area wash wastewater influent (`wwt_packaging_wash_influent`)

Packaging-area wash wastewater is the single packaging-area wash wastewater influent crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Packaging-area wash wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sodium-hydroxide sanitation wastewater influent (`wwt_alkaline_sanitation_influent`)

Sodium-hydroxide sanitation wastewater is the single sodium-hydroxide sanitation wastewater influent crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Sodium-hydroxide sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitric-acid sanitation wastewater influent (`wwt_nitric_sanitation_influent`)

Nitric-acid sanitation wastewater is the single nitric-acid sanitation wastewater influent crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Nitric-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Phosphoric-acid sanitation wastewater influent (`wwt_phosphoric_sanitation_influent`)

Phosphoric-acid sanitation wastewater is the single phosphoric-acid sanitation wastewater influent crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Phosphoric-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Peracetic-acid sanitation wastewater influent (`wwt_peracetic_sanitation_influent`)

Peracetic-acid sanitation wastewater is the single peracetic-acid sanitation wastewater influent crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Peracetic-acid sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Sodium-hypochlorite sanitation wastewater influent (`wwt_hypochlorite_sanitation_influent`)

Sodium-hypochlorite sanitation wastewater is the single sodium-hypochlorite sanitation wastewater influent crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Sodium-hypochlorite sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Benzalkonium-chloride sanitation wastewater influent (`wwt_benzalkonium_sanitation_influent`)

Benzalkonium-chloride sanitation wastewater is the single benzalkonium-chloride sanitation wastewater influent crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Benzalkonium-chloride sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Final-rinse sanitation wastewater influent (`wwt_final_rinse_influent`)

Final-rinse sanitation wastewater is the single final-rinse sanitation wastewater influent crossing into the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Final-rinse sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: Record this wastewater stream separately from a dedicated flow meter, tank record, or documented hydraulic allocation before mixing.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_influent_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

#### Outputs

##### Product flows

###### Recovered wastewater grease co-product (`wwt_recovered_grease`)

Recovered wastewater grease is the single recovered wastewater grease co-product leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Recovered wastewater grease
- Flow property / unit: Mass / kg
- Amount rule: Record the net recovered mass from calibrated scales and destination records; use this product output only when the material has a documented beneficial use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_output_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Waste flows

###### Wastewater screenings waste (`wwt_screenings`)

Wastewater screenings is the single wastewater screenings waste leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Wastewater screenings
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_output_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Dissolved-air-flotation sludge waste (`wwt_daf_sludge`)

Dissolved-air-flotation sludge is the single dissolved-air-flotation sludge waste leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Dissolved-air-flotation sludge
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_output_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Biological wastewater sludge waste (`wwt_biological_sludge`)

Biological wastewater sludge is the single biological wastewater sludge waste leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Biological wastewater sludge
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_output_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Discarded wastewater grease (`wwt_discarded_grease`)

Discarded wastewater grease is the single discarded wastewater grease leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Discarded wastewater grease
- Flow property / unit: Mass / kg
- Amount rule: Record the net waste mass from calibrated container weighing, waste logs, and destination records; do not also report the same mass as a co-product.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_output_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

##### Elementary flows

###### Treated effluent discharge (`wwt_treated_effluent`)

Treated wastewater effluent, to surface water is the single treated effluent discharge leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Treated wastewater effluent, to surface water
- Flow property / unit: Volume / m3
- Amount rule: Record treated effluent volume from the final discharge meter for the same reporting period as pollutant measurements.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wwt_discharge_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Five-day biochemical-oxygen-demand discharge (`wwt_bod5_water`)

Biochemical oxygen demand, 5-day, to water is the single five-day biochemical-oxygen-demand discharge leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Biochemical oxygen demand, 5-day, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single water emission from measured effluent volume and a representative measured concentration for the same discharge period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_discharge_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chemical-oxygen-demand discharge (`wwt_cod_water`)

Chemical oxygen demand, to water is the single chemical-oxygen-demand discharge leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Chemical oxygen demand, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single water emission from measured effluent volume and a representative measured concentration for the same discharge period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_discharge_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Total-suspended-solids discharge (`wwt_tss_water`)

Total suspended solids, to water is the single total-suspended-solids discharge leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Total suspended solids, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single water emission from measured effluent volume and a representative measured concentration for the same discharge period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_discharge_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Total-nitrogen discharge (`wwt_total_n_water`)

Nitrogen, total, to water is the single total-nitrogen discharge leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Nitrogen, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single water emission from measured effluent volume and a representative measured concentration for the same discharge period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_discharge_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Total-phosphorus discharge (`wwt_total_p_water`)

Phosphorus, total, to water is the single total-phosphorus discharge leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Phosphorus, total, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single water emission from measured effluent volume and a representative measured concentration for the same discharge period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_discharge_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Chloride discharge (`wwt_chloride_water`)

Chloride, to water is the single chloride discharge leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Chloride, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single water emission from measured effluent volume and a representative measured concentration for the same discharge period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_discharge_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Ammonium discharge (`wwt_ammonium_water`)

Ammonium, to water is the single ammonium discharge leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Ammonium, to water
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single water emission from measured effluent volume and a representative measured concentration for the same discharge period.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_discharge_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Biogenic methane emission (`wwt_biogenic_methane_air`)

Methane, biogenic, to air is the single biogenic methane emission leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Methane, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single gas emission from the corresponding material balance or a direct calibrated measurement, retaining its declared origin and compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_air_emission_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Biogenic carbon-dioxide emission (`wwt_biogenic_co2_air`)

Carbon dioxide, biogenic, to air is the single biogenic carbon-dioxide emission leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Carbon dioxide, biogenic, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single gas emission from the corresponding material balance or a direct calibrated measurement, retaining its declared origin and compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_air_emission_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

###### Nitrous-oxide emission (`wwt_nitrous_oxide_air`)

Nitrous oxide, to air is the single nitrous-oxide emission leaving the On-site wastewater treatment foreground boundary. Its quantity is obtained only through the stated amount rule.

- Selected flow: Nitrous oxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Calculate this single gas emission from the corresponding material balance or a direct calibrated measurement, retaining its declared origin and compartment.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net qualified frozen camel or camelid meat at the facility gate, excluding packaging mass
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wwt_air_emission_records`
- Sources: `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | Foreground multifunctionality | First seek process subdivision or a defensible expansion of the system. If multifunctionality remains, apply a documented physical relationship that reflects the underlying process; use mass only when it is the defensible relationship. | `eu-pef-2021-2279` |
| `allocation_recovered_outputs` | Blood, hide, liver, heart, kidney, head, fat, bone, grease, or another recovered output | Classify each quantity once as a recovered product or as waste according to documented legal status and destination, then disclose the allocation method and sensitivity. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `allocation_mass_balance` | Slaughter and cutting yields | Preserve a batch mass balance across accepted live mass, eligible meat, recovered outputs, condemned material, wastewater solids, and other measured losses without assigning the same mass twice. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `allocation_waste_treatment` | Waste and wastewater | Assign foreground collection and on-site treatment burdens to this product system; assign downstream treatment burdens according to the declared waste-boundary convention and disclose credits separately. | `eu-pef-2021-2279` |
| `allocation_reusable_packaging` | Reusable crate or wooden pallet | Use actual issue, return, lifetime, and replacement records to allocate only the consumed share to the declared product; disclose losses and reuse assumptions. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_animal_mass` | `camelid_receipt_and_holding` | Species-specific or material-specific mass exchange | Weighbridge, calibrated scale, and batch mass record | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | Capture gross and tare mass on calibrated equipment, calculate net mass, and reconcile input, output, co-product, and reject lots by batch. | kg | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale calibration; weigh tickets; batch ledger; mass-balance reconciliation |
| `cp_receipt_utilities` | `camelid_receipt_and_holding` | Single water, electricity, heat, or fuel exchange | Meter, invoice, tank, cylinder, and allocation record | row_id; meter_or_stock_id; opening_reading; closing_reading; delivered_quantity; return_quantity; unit; allocation_driver; batch_id | Read each carrier separately; reconcile purchases and stocks; document any shared-meter allocation before normalization. | m3, kWh, MJ, or kg as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Meter calibration; supplier invoice; stock reconciliation; allocation worksheet |
| `cp_receipt_waste_records` | `camelid_receipt_and_holding` | Single named waste, wastewater, sludge, grease, or reject exchange | Waste scale, flow-meter, container, manifest, and destination record | row_id; batch_id; container_id; gross_quantity; tare_quantity; net_quantity; unit; destination; classification; timestamp | Measure each named stream before mixing where feasible and retain its classification and destination; report recovered product and waste once only. | kg or m3 as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale or meter calibration; waste manifest; destination receipt; mass or water balance |
| `cp_slaughter_animal_mass` | `slaughter_bleeding_skinning_evisceration` | Species-specific or material-specific mass exchange | Weighbridge, calibrated scale, and batch mass record | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | Capture gross and tare mass on calibrated equipment, calculate net mass, and reconcile input, output, co-product, and reject lots by batch. | kg | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale calibration; weigh tickets; batch ledger; mass-balance reconciliation |
| `cp_slaughter_utilities` | `slaughter_bleeding_skinning_evisceration` | Single water, electricity, heat, or fuel exchange | Meter, invoice, tank, cylinder, and allocation record | row_id; meter_or_stock_id; opening_reading; closing_reading; delivered_quantity; return_quantity; unit; allocation_driver; batch_id | Read each carrier separately; reconcile purchases and stocks; document any shared-meter allocation before normalization. | m3, kWh, MJ, or kg as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Meter calibration; supplier invoice; stock reconciliation; allocation worksheet |
| `cp_slaughter_output_mass` | `slaughter_bleeding_skinning_evisceration` | Species-specific or material-specific mass exchange | Weighbridge, calibrated scale, and batch mass record | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | Capture gross and tare mass on calibrated equipment, calculate net mass, and reconcile input, output, co-product, and reject lots by batch. | kg | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale calibration; weigh tickets; batch ledger; mass-balance reconciliation |
| `cp_slaughter_coproduct_mass` | `slaughter_bleeding_skinning_evisceration` | Species-specific or material-specific mass exchange | Weighbridge, calibrated scale, and batch mass record | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | Capture gross and tare mass on calibrated equipment, calculate net mass, and reconcile input, output, co-product, and reject lots by batch. | kg | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale calibration; weigh tickets; batch ledger; mass-balance reconciliation |
| `cp_slaughter_waste_mass` | `slaughter_bleeding_skinning_evisceration` | Single named waste, wastewater, sludge, grease, or reject exchange | Waste scale, flow-meter, container, manifest, and destination record | row_id; batch_id; container_id; gross_quantity; tare_quantity; net_quantity; unit; destination; classification; timestamp | Measure each named stream before mixing where feasible and retain its classification and destination; report recovered product and waste once only. | kg or m3 as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale or meter calibration; waste manifest; destination receipt; mass or water balance |
| `cp_slaughter_wastewater` | `slaughter_bleeding_skinning_evisceration` | Single named wastewater stream or discharge parameter | Flow-meter, composite-sample, laboratory, and discharge record | row_id; sampling_point; start_time; end_time; effluent_volume; concentration; analyte; unit; laboratory_method; detection_limit | Measure stream volume separately and pair representative concentration results with the same reporting period and discharge point. | m3 or kg as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Meter calibration; sampling plan; laboratory report; chain of custody; discharge log |
| `cp_slaughter_combustion_emissions` | `slaughter_bleeding_skinning_evisceration` | Single combustion emission to air | Fuel record, stack result, facility factor, and calculation record | row_id; fuel_row_id; fuel_quantity; fuel_unit; factor_or_measurement; factor_unit; source_reference; calculated_mass; reporting_period | Use the separately collected fuel quantity with a documented facility-specific factor or direct stack result for this pollutant only. | kg | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Fuel reconciliation; stack report or factor evidence; calculation worksheet; reviewer sign-off |
| `cp_dressing_input_mass` | `carcass_dressing_and_cutting` | Species-specific or material-specific mass exchange | Weighbridge, calibrated scale, and batch mass record | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | Capture gross and tare mass on calibrated equipment, calculate net mass, and reconcile input, output, co-product, and reject lots by batch. | kg | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale calibration; weigh tickets; batch ledger; mass-balance reconciliation |
| `cp_dressing_utilities` | `carcass_dressing_and_cutting` | Single water, electricity, heat, or fuel exchange | Meter, invoice, tank, cylinder, and allocation record | row_id; meter_or_stock_id; opening_reading; closing_reading; delivered_quantity; return_quantity; unit; allocation_driver; batch_id | Read each carrier separately; reconcile purchases and stocks; document any shared-meter allocation before normalization. | m3, kWh, MJ, or kg as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Meter calibration; supplier invoice; stock reconciliation; allocation worksheet |
| `cp_dressing_output_mass` | `carcass_dressing_and_cutting` | Species-specific or material-specific mass exchange | Weighbridge, calibrated scale, and batch mass record | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | Capture gross and tare mass on calibrated equipment, calculate net mass, and reconcile input, output, co-product, and reject lots by batch. | kg | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale calibration; weigh tickets; batch ledger; mass-balance reconciliation |
| `cp_dressing_coproduct_mass` | `carcass_dressing_and_cutting` | Species-specific or material-specific mass exchange | Weighbridge, calibrated scale, and batch mass record | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | Capture gross and tare mass on calibrated equipment, calculate net mass, and reconcile input, output, co-product, and reject lots by batch. | kg | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale calibration; weigh tickets; batch ledger; mass-balance reconciliation |
| `cp_dressing_waste_records` | `carcass_dressing_and_cutting` | Single named waste, wastewater, sludge, grease, or reject exchange | Waste scale, flow-meter, container, manifest, and destination record | row_id; batch_id; container_id; gross_quantity; tare_quantity; net_quantity; unit; destination; classification; timestamp | Measure each named stream before mixing where feasible and retain its classification and destination; report recovered product and waste once only. | kg or m3 as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale or meter calibration; waste manifest; destination receipt; mass or water balance |
| `cp_freezing_input_mass` | `precooling_and_freezing` | Species-specific or material-specific mass exchange | Weighbridge, calibrated scale, and batch mass record | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | Capture gross and tare mass on calibrated equipment, calculate net mass, and reconcile input, output, co-product, and reject lots by batch. | kg | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale calibration; weigh tickets; batch ledger; mass-balance reconciliation |
| `cp_freezing_utilities` | `precooling_and_freezing` | Single water, electricity, heat, or fuel exchange | Meter, invoice, tank, cylinder, and allocation record | row_id; meter_or_stock_id; opening_reading; closing_reading; delivered_quantity; return_quantity; unit; allocation_driver; batch_id | Read each carrier separately; reconcile purchases and stocks; document any shared-meter allocation before normalization. | m3, kWh, MJ, or kg as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Meter calibration; supplier invoice; stock reconciliation; allocation worksheet |
| `cp_freezing_refrigerant_records` | `precooling_and_freezing` | Substance-specific refrigerant make-up or emission | Cylinder weighing, purchase, recovery, transfer, and service record | row_id; refrigerant_substance; opening_inventory; purchases; recovered_mass; transferred_mass; closing_inventory; direct_loss; unit; equipment_id | Maintain a separate mass balance for each refrigerant substance and reconcile it to service and recovery records. | kg | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Cylinder-scale calibration; service logs; purchase invoices; recovery certificates; mass-balance worksheet |
| `cp_freezing_output_mass` | `precooling_and_freezing` | Species-specific or material-specific mass exchange | Weighbridge, calibrated scale, and batch mass record | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | Capture gross and tare mass on calibrated equipment, calculate net mass, and reconcile input, output, co-product, and reject lots by batch. | kg | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale calibration; weigh tickets; batch ledger; mass-balance reconciliation |
| `cp_freezing_waste_records` | `precooling_and_freezing` | Single named waste, wastewater, sludge, grease, or reject exchange | Waste scale, flow-meter, container, manifest, and destination record | row_id; batch_id; container_id; gross_quantity; tare_quantity; net_quantity; unit; destination; classification; timestamp | Measure each named stream before mixing where feasible and retain its classification and destination; report recovered product and waste once only. | kg or m3 as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale or meter calibration; waste manifest; destination receipt; mass or water balance |
| `cp_packaging_product_mass` | `packaging_and_frozen_storage` | Species-specific or material-specific mass exchange | Weighbridge, calibrated scale, and batch mass record | row_id; species_or_material; batch_id; gross_mass; tare_mass; net_mass; unit; scale_id; timestamp | Capture gross and tare mass on calibrated equipment, calculate net mass, and reconcile input, output, co-product, and reject lots by batch. | kg | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale calibration; weigh tickets; batch ledger; mass-balance reconciliation |
| `cp_packaging_energy` | `packaging_and_frozen_storage` | Single water, electricity, heat, or fuel exchange | Meter, invoice, tank, cylinder, and allocation record | row_id; meter_or_stock_id; opening_reading; closing_reading; delivered_quantity; return_quantity; unit; allocation_driver; batch_id | Read each carrier separately; reconcile purchases and stocks; document any shared-meter allocation before normalization. | m3, kWh, MJ, or kg as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Meter calibration; supplier invoice; stock reconciliation; allocation worksheet |
| `cp_packaging_material_records` | `packaging_and_frozen_storage` | Single chemical, treatment consumable, packaging component, or protective material | Inventory issue, dosing, purchase, return, and batch record | row_id; material_identity; concentration_or_grade; opening_stock; purchases; issued_mass; returned_mass; closing_stock; unit; batch_id | Reconcile each named material independently from purchase and stock records and link the net issued quantity to the applicable production batch. | kg, m3, kWh, or MJ as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Invoice; stock ledger; dosing record; material specification; batch issue record |
| `cp_packaging_waste_records` | `packaging_and_frozen_storage` | Single named waste, wastewater, sludge, grease, or reject exchange | Waste scale, flow-meter, container, manifest, and destination record | row_id; batch_id; container_id; gross_quantity; tare_quantity; net_quantity; unit; destination; classification; timestamp | Measure each named stream before mixing where feasible and retain its classification and destination; report recovered product and waste once only. | kg or m3 as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale or meter calibration; waste manifest; destination receipt; mass or water balance |
| `cp_packaging_gas_records` | `packaging_and_frozen_storage` | Single named gas emission to air | Material-balance, direct measurement, and calculation record | row_id; source_material_row_id; input_mass; recovered_mass; retained_mass; emitted_mass; origin; compartment; reporting_period | Calculate or measure each gas separately, retaining origin and compartment and reconciling it to the corresponding material input or treatment activity. | kg | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Material-balance worksheet; calibrated measurement; supplier origin evidence; calculation review |
| `cp_sanitation_utilities` | `cleaning_and_disinfection` | Single water, electricity, heat, or fuel exchange | Meter, invoice, tank, cylinder, and allocation record | row_id; meter_or_stock_id; opening_reading; closing_reading; delivered_quantity; return_quantity; unit; allocation_driver; batch_id | Read each carrier separately; reconcile purchases and stocks; document any shared-meter allocation before normalization. | m3, kWh, MJ, or kg as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Meter calibration; supplier invoice; stock reconciliation; allocation worksheet |
| `cp_sanitation_chemical_records` | `cleaning_and_disinfection` | Single chemical, treatment consumable, packaging component, or protective material | Inventory issue, dosing, purchase, return, and batch record | row_id; material_identity; concentration_or_grade; opening_stock; purchases; issued_mass; returned_mass; closing_stock; unit; batch_id | Reconcile each named material independently from purchase and stock records and link the net issued quantity to the applicable production batch. | kg, m3, kWh, or MJ as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Invoice; stock ledger; dosing record; material specification; batch issue record |
| `cp_sanitation_wastewater_records` | `cleaning_and_disinfection` | Single named wastewater stream or discharge parameter | Flow-meter, composite-sample, laboratory, and discharge record | row_id; sampling_point; start_time; end_time; effluent_volume; concentration; analyte; unit; laboratory_method; detection_limit | Measure stream volume separately and pair representative concentration results with the same reporting period and discharge point. | m3 or kg as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Meter calibration; sampling plan; laboratory report; chain of custody; discharge log |
| `cp_sanitation_combustion_emissions` | `cleaning_and_disinfection` | Single combustion emission to air | Fuel record, stack result, facility factor, and calculation record | row_id; fuel_row_id; fuel_quantity; fuel_unit; factor_or_measurement; factor_unit; source_reference; calculated_mass; reporting_period | Use the separately collected fuel quantity with a documented facility-specific factor or direct stack result for this pollutant only. | kg | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Fuel reconciliation; stack report or factor evidence; calculation worksheet; reviewer sign-off |
| `cp_wwt_consumable_records` | `onsite_wastewater_treatment` | Single chemical, treatment consumable, packaging component, or protective material | Inventory issue, dosing, purchase, return, and batch record | row_id; material_identity; concentration_or_grade; opening_stock; purchases; issued_mass; returned_mass; closing_stock; unit; batch_id | Reconcile each named material independently from purchase and stock records and link the net issued quantity to the applicable production batch. | kg, m3, kWh, or MJ as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Invoice; stock ledger; dosing record; material specification; batch issue record |
| `cp_wwt_influent_records` | `onsite_wastewater_treatment` | Single named wastewater stream or discharge parameter | Flow-meter, composite-sample, laboratory, and discharge record | row_id; sampling_point; start_time; end_time; effluent_volume; concentration; analyte; unit; laboratory_method; detection_limit | Measure stream volume separately and pair representative concentration results with the same reporting period and discharge point. | m3 or kg as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Meter calibration; sampling plan; laboratory report; chain of custody; discharge log |
| `cp_wwt_output_records` | `onsite_wastewater_treatment` | Single named waste, wastewater, sludge, grease, or reject exchange | Waste scale, flow-meter, container, manifest, and destination record | row_id; batch_id; container_id; gross_quantity; tare_quantity; net_quantity; unit; destination; classification; timestamp | Measure each named stream before mixing where feasible and retain its classification and destination; report recovered product and waste once only. | kg or m3 as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Scale or meter calibration; waste manifest; destination receipt; mass or water balance |
| `cp_wwt_discharge_records` | `onsite_wastewater_treatment` | Single named wastewater stream or discharge parameter | Flow-meter, composite-sample, laboratory, and discharge record | row_id; sampling_point; start_time; end_time; effluent_volume; concentration; analyte; unit; laboratory_method; detection_limit | Measure stream volume separately and pair representative concentration results with the same reporting period and discharge point. | m3 or kg as declared by the card | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Meter calibration; sampling plan; laboratory report; chain of custody; discharge log |
| `cp_wwt_air_emission_records` | `onsite_wastewater_treatment` | Single named gas emission to air | Material-balance, direct measurement, and calculation record | row_id; source_material_row_id; input_mass; recovered_mass; retained_mass; emitted_mass; origin; compartment; reporting_period | Calculate or measure each gas separately, retaining origin and compartment and reconciling it to the corresponding material input or treatment activity. | kg | Per batch with reporting-period reconciliation | Continuous over the declared foreground reporting period | Foreground facility | Sum only records assigned to this process and row_id, prevent double counting, then normalize to net qualified reference-product mass. | Material-balance worksheet; calibrated measurement; supplier origin evidence; calculation review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every non-reference inventory row | Divide the reporting-period or batch exchange quantity by the matched net mass of qualified frozen reference product; retain the unrounded source quantity and denominator. | exchange quantity; net qualified frozen product mass | Quantity per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_batch_mass_balance` | Receipt, slaughter, dressing, freezing, and packaging | Reconcile measured input mass with eligible output, recovered output, waste, retained inventory, measured wastewater solids, and documented measurement difference; do not invent an unmeasured balancing flow. | calibrated input and output mass records; inventory change | Disclosed batch mass-balance result | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `calc_combustion_emission` | Each combustion emission row | Multiply the separately recorded fuel quantity by a documented facility-specific factor for the single pollutant, or use a matched direct stack result; preserve factor source, unit, and period. | fuel quantity; pollutant factor or stack result | Pollutant mass to air | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | Each refrigerant emission row | Opening inventory plus purchases minus closing inventory, recovered mass, and transferred mass equals unexplained loss; reconcile that result with direct service-loss records for the same substance. | substance-specific stock and service records | Refrigerant mass to air | `eu-pef-2021-2279` |
| `calc_shared_meter_allocation` | Shared water or energy meter | Allocate only after direct submetering has been evaluated; use documented operating time, rated load, measured throughput, or another causal driver and preserve the unallocated total. | shared-meter total; causal allocation driver | Stage-specific exchange quantity | `eu-pef-2021-2279` |
| `calc_packaging_consumption` | Each packaging component | Net consumption equals opening stock plus receipts minus closing stock, returns, and documented unused transfer; for reusable items allocate recorded replacement consumption through actual issue and return records. | component-specific stock, issue, return, and replacement records | Packaging-component mass | `eu-pef-2021-2279` |
| `calc_effluent_load` | Each wastewater pollutant row | Multiply matched effluent volume by representative measured concentration for the same discharge period and convert units explicitly. | effluent volume; measured concentration | Pollutant mass to water | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | Reference product | Demonstrate CPC 21137 scope, declared camelid species, frozen state, product form, bone status, and exclusion of offal and fresh or chilled meat. | Product specification; batch release record; classification evidence; temperature record |
| `dq_primary_foreground` | Foreground operations | Use facility-specific primary data for material, energy, water, product, waste, wastewater, and direct-emission exchanges; identify every allocation from shared records. | Meters; scales; invoices; stock ledgers; production logs; waste manifests; laboratory reports |
| `dq_temporal_coverage` | Reporting period | Cover a representative operating period that captures production, sanitation, freezing, frozen storage, and treatment variability; disclose shutdowns and exceptional batches. | Dated source records; production calendar; completeness reconciliation |
| `dq_atomic_completeness` | Inventory rows | Keep each carrier, chemical, refrigerant, packaging component, recovered output, waste stream, wastewater stream, and emission in its own row even when records share a source. | Ordered row-id audit; unresolved-UUID register; source-record crosswalk |
| `dq_mass_water_balance` | Facility balances | Reconcile batch mass and reporting-period water balances and explain material residuals with evidence rather than invented values. | Mass-balance worksheet; water-balance worksheet; reviewer sign-off |
| `dq_refrigerant` | Refrigeration system | Identify every refrigerant substance and reconcile make-up, recovery, transfer, stock, and emission for the same period. | Service log; cylinder weighing; purchase and recovery records; substance-specific balance |
| `dq_traceability` | Calculated values | Preserve raw values, units, conversion factors, calculation formulas, factor provenance, and links to the exact batch or reporting period. | Calculation workbook or script; source-record identifiers; review record |
| `dq_verification` | Dataset package | Subject scope, reference flow, completeness, allocation, calculations, data quality, and exclusions to independent review before lifecycle promotion. | Completed validation record; reviewer identity; issue disposition |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Require UUID 75e4eb25-986c-4684-ad73-33ba3528f571, Product flow type, CPC 21137, Mass property 93a60a56-a3c8-11da-a746-0800200b9a66, Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66, kg, and exactly 1 kg net product excluding packaging. | `unsd-cpc-3-21137` |
| `validate_scope_exclusions` | Product identity | Reject a package that substitutes fresh or chilled camelid meat, edible offal, non-edible offal, or non-camelid meat for the frozen reference product. | `unsd-cpc-3-21137` |
| `validate_process_coverage` | Process inventory | Require every required process and require a documented condition for on-site wastewater treatment inclusion or exclusion. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_atomic_rows` | Inventory | Require one selected physical or chemical exchange per row and reject selector labels or combined electricity, heat, fuel, refrigerant, chemical, packaging, waste, wastewater-pollutant, or emission rows. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_reference_amount` | Reference output | Require the sole fixed value to be 1 kg and prohibit fixed or fabricated quantities for non-reference rows. | `eu-pef-2021-2279` |
| `validate_mass_balance` | Animal, carcass, cut, recovered output, and waste records | Require batch reconciliation and reject duplicate classification of one mass as both recovered product and waste. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_refrigerant_balance` | R-717, R-134a, and R-744 | Require substance-specific make-up and emission records for every refrigerant present and disclose the origin of emitted R-744 carbon dioxide. | `eu-pef-2021-2279` |
| `validate_water_effluent` | Water and wastewater | Require separate named wastewater streams, matched discharge volumes and concentrations, and disclosure of off-site transfer when on-site treatment is absent. | `ec-jrc-sa-bref-jrc135916`; `eu-pef-2021-2279` |
| `validate_unresolved_uuid` | Non-reference flow identity | Permit a blank UUID only when the row remains physically specific and its row_id has an unresolved review entry in manifest.yaml; prohibit invented UUIDs. | `eu-pef-2021-2279` |
| `validate_data_quality` | Foreground package | Require auditable primary records, temporal and site representativeness, calculation traceability, allocation disclosure, and review evidence. | `eu-pef-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground unit-process package for producing 1 kg net qualified frozen camel or camelid meat at the facility gate |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Product carbon footprinting, life-cycle assessment, supplier data exchange, facility improvement, and reviewed aggregation when all qualifiers and boundary disclosures are retained |
| excluded_use | Direct representation of fresh or chilled camelid meat, offal, animal raising, inbound transport, retail, use, or non-camelid meat without a separately reviewed scope extension |
| required_metadata | PCR id; CPC code; species; product form; bone status; frozen state; freezing profile; temperatures; packaging; facility; geography; technology; reporting period; allocation; wastewater route; refrigerants; reference UUID; unresolved UUID register |
| required_quality_disclosure | Primary-data share; meter and scale coverage; shared-record allocations; mass and water balances; refrigerant balance; data gaps; calculation provenance; recovered-output destinations; validation findings |
| update_trigger | Change in species mix, product form, freezing technology, refrigerant, thermal supply, packaging, sanitation chemistry, wastewater route, allocation, legal status of recovered outputs, facility configuration, or representative reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-21137` | Dataset (`dataset`) | United Nations Statistics Division, Central Product Classification Version 3.0, code 21137, retained raw file CPC_Ver_3.0_Structure_30Jun2025.csv; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | Exact frozen camel and camelid meat category boundary and exclusion of neighboring fresh or chilled meat and offal categories |
| `ec-jrc-sa-bref-jrc135916` | Official guidance (`official_guidance`) | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and Edible Co-products Industries, JRC135916, DOI 10.2760/18199; https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | Receipt, slaughter, bleeding, skinning, evisceration, carcass preparation, cooling, cleaning, utilities, wastewater, specific recovered materials, wastes, emissions, and foreground process structure; no quantitative default imported |
| `eu-pef-2021-2279` | Official guidance (`official_guidance`) | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, consolidated text; https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | Product-specific bill of materials, company-specific foreground data, complete life-cycle inventory, allocation, transparency, data quality, calculation traceability, and verification |
