---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-goat-fresh-chilled-or-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Edible offal of goat, fresh, chilled or frozen

## 1. Scope and Applicability

This PCR produces a foreground data package for one deliberately narrow representative product: whole goat liver, with the gallbladder removed and visible contamination, lesions, condemned tissue, and non-liver attachments trimmed away; washed with potable water; chilled by forced air served by an R717 ammonia refrigeration system; vacuum sealed in a PA/PE pouch, placed in a corrugated case, and delivered from the slaughterhouse cold store at 0–3 °C. It does not represent an average of liver, kidneys, heart, lungs, tongue, stomachs, intestines, or other organs, and it does not average fresh, chilled, and frozen states.

The foreground boundary starts with live goats accepted at the slaughterhouse and includes slaughter and bleeding, hygienic evisceration and organ identity retention, liver separation and trimming, potable-water washing, forced-air chilling, vacuum packaging, refrigerated holding, and attributable sanitation. Goat farming and inbound live-animal transport are upstream linked datasets. Distribution after the declared slaughterhouse delivery gate, retail, cooking, consumption, and end-of-life of packaging are downstream.

Fresh liver delivered without active chilling and any frozen-liver route are excluded. A dataset for either state requires a separate route declaration and inventory; it must not be blended with this chilled-liver route. Prepared, cooked, salted, dried, smoked, minced, extracted, or formulated offal products are also excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-goat-fresh-chilled-or-frozen |
| classification_refs | CPC:3.0:21156 (`exact`) |
| covered_products | Food-grade whole goat liver from goats of CPC 02123, trimmed, potable-water washed, forced-air chilled, vacuum packed, and dispatched at 0–3 °C. |
| excluded_products | Liver from sheep or another species; kidneys, heart, lungs, tongue, stomachs, intestines, or mixed offal; fresh unchilled liver; frozen liver; prepared, preserved, cooked, salted, dried, smoked, minced, extracted, or formulated offal; condemned tissue. |
| representative_product | Whole chilled goat liver, gallbladder removed, visibly clean and trimmed, vacuum sealed in a PA/PE pouch within a corrugated case, net product at 0–3 °C. |
| production_route | Accepted live goat → slaughter and bleeding → hygienic evisceration → liver separation, inspection and trimming → potable-water washing → forced-air chilling with R717 refrigeration → PA/PE vacuum packing and corrugated casing → refrigerated holding and dispatch. |
| market_state | Food-grade chilled whole goat liver at the slaughterhouse dispatch gate, 0–3 °C throughout the product, package configuration and lot declared. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Chilled whole goat liver meeting the declared trimming, hygiene, package, and temperature specification. |
| How much | 1,000 kg net chilled goat liver, excluding all packaging. |
| How well | Goat species identity; liver tissue only; gallbladder removed; inspection disposition fit for human consumption; visible contamination and condemned tissue removed; potable-water-washed; forced-air chilled; vacuum pack intact; product temperature 0–3 °C at dispatch. |
| How long or cycle | One completed slaughter and liver-processing production lot at the slaughterhouse dispatch gate; no use duration is assigned. |
| reference_flow_link | `rf_chilled_goat_liver` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net product |
| Reference product flow | Edible offal of goat, fresh, chilled or frozen `378f6bb6-a27a-41ef-890a-2243f652a9fc` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species = goat; tissue = liver; product_state = chilled; gallbladder_removed = true; trimming_specification; washing_route = potable_water; chilling_route = forced_air_R717; dispatch_temperature_min_degC = 0; dispatch_temperature_max_degC = 3; package_configuration = PA_PE_vacuum_pouch_in_corrugated_case; inspection_disposition; slaughter_lot; facility; geography; temporal_coverage; allocation_method |

When constructing a foreground data package, every item in `Required qualifiers` must be declared in dataset metadata, process notes, the reference-flow comment, product description, or an equivalent data-package field. Missing qualifiers make the reference flow incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all exchanges to 1,000 kg net chilled goat liver at dispatch; packaging is excluded from net product mass. |
| `lot_mass_balance` | Slaughter, separation, trimming, washing, chilling, and packaging | Mass | kg | Use calibrated lot-level masses on a consistent wet-mass basis. Do not substitute head count for mass except as a separately disclosed activity driver. |
| `temperature_gate` | Washed liver, chilled liver, cold holding, and dispatch | Temperature | °C | Record calibrated product temperatures and time stamps. The reference product must be 0–3 °C throughout at dispatch; the regulatory ceiling of 3 °C for offal is an acceptance gate, not an average or default measured temperature. |
| `net_pack_mass` | Packaged liver | Mass | kg | Record net liver mass and each packaging component separately; do not include pouch, label, case, or stretch-film mass in the reference amount. |
| `electricity_conversion` | Metered electricity | Energy | kWh | Preserve metered kWh. If a record is in MJ, use `kWh = MJ / 3.6` and retain the original reading and conversion. |
| `refrigerant_loss` | R717 refrigeration | Mass | kg | Calculate R717 loss from verified charge additions and recoveries using `R717_loss = opening_charge + additions - closing_charge - recovered`, constrained to the selected equipment and period. |
| `state_exclusivity` | Product state | Mass | kg | This PCR accepts only the chilled route. Fresh unchilled and frozen outputs must be separate datasets and must not be averaged into this reference flow. |
| `tissue_exclusivity` | Product identity | Mass | kg | This PCR accepts only goat liver. Do not aggregate quantities, prices, yields, or burdens across liver, kidney, heart, tongue, lung, stomach, intestine, or mixed-offal baskets. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live goats accepted at the slaughterhouse, identified to slaughter lot and linked to upstream farm-production and inbound-transport datasets. |
| starting_condition_role | Foreground gate input; farming and live-animal transport remain linked upstream systems. |
| product_classification_scope | CPC 3.0 code 21156, narrowed for dataset production to chilled whole goat liver under the declared route and specification. |
| recursive_input_rule | Purchased or transferred goat liver already inside CPC 21156 is recorded as a distinct product input with its own state, tissue, and upstream dataset; do not recursively rerun live-goat slaughter or relabel it as live goat. |
| upstream_dataset_requirement | Link upstream datasets for live-goat production and transport, electricity, potable water, R717 make-up, PA/PE pouch, paper label, corrugated case, LLDPE film, sodium hydroxide, peracetic acid, and any treatment service actually used. |
| disclosure | Declare tissue, state, trimming and washing specifications, slaughter and processing lot, inspection disposition, cooling equipment, refrigerant, time-temperature records, package configuration, sanitation attribution, wastewater route, by-product destinations, allocation method and sensitivity cases, exclusions, data gaps, and all conditional-route decisions. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_live_goat_to_dispatch` | Covered route | Include slaughter, bleeding, evisceration, liver separation and trimming, washing, chilling, packaging, refrigerated holding, and attributable sanitation from accepted live goat through dispatch of chilled liver. | `fao-small-ruminant-slaughter`; `fao-who-cxc-58-2005` |
| `boundary_identity_and_inspection` | Slaughter products | Keep each animal's liver identifiable with its carcass until post-mortem disposition; exclude condemned material from edible product and record it separately. | `eu-reg-853-2004`; `fao-small-ruminant-slaughter` |
| `boundary_temperature` | Chilled route | Chill immediately after post-mortem handling along a continuously decreasing temperature path and hold offal at no more than 3 °C; this PCR further fixes dispatch at 0–3 °C. | `eu-reg-853-2004`; `fao-who-cxc-58-2005` |
| `boundary_atomic_inputs` | All foreground processes | Record every actually used material, water, electricity, chemical, packaging component, refrigerant, and fuel as a separate chemically or physically specific exchange; do not use collection flows. | `fao-who-cxc-58-2005` |
| `boundary_atomic_outputs` | All foreground processes | Record each coproduct, waste, wastewater stream, refrigerant emission, and directly discharged pollutant separately. Wastewater-to-treatment and direct-to-water pollutant routes are mutually exclusive for the same quantity. | `fao-small-ruminant-sanitation` |
| `boundary_state_route` | Product state | Include only the chilled route. A fresh unchilled or frozen route requires a separate PCR-conforming dataset and cannot be averaged with this route. | `unsd-cpc3-21156`; `eu-reg-853-2004` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `slaughter_bleeding` | Slaughter and bleeding | `required` | Every covered lot. | Convert accepted live goats to bled bodies while separately collecting food-grade blood or blood for treatment. | kg bled goat body |
| `evisceration_separation` | Hygienic evisceration and organ separation | `required` | Every covered lot. | Separate the liver and every other coproduct or waste while retaining carcass identity through inspection. | kg liver with gallbladder |
| `liver_trimming` | Liver inspection, gallbladder removal, and trimming | `required` | Every covered liver lot after post-mortem disposition. | Produce only fit whole goat liver meeting the trimming specification. | kg trimmed goat liver |
| `liver_washing` | Potable-water liver washing | `required` | Every covered trimmed-liver lot; dry-clean-only routes are outside this representative route. | Remove residual surface contamination without mixing tissues or lots. | kg washed goat liver |
| `forced_air_chilling` | Forced-air chilling with R717 refrigeration | `required` | Every covered washed-liver lot. | Reduce product temperature continuously to 0–3 °C and quantify electricity and R717 loss. | kg chilled goat liver |
| `vacuum_packaging` | PA/PE vacuum packaging and corrugated casing | `required` | Every covered chilled-liver lot. | Protect the selected product and establish declared net pack mass. | kg vacuum-packed goat liver |
| `cold_holding_dispatch` | Refrigerated holding and dispatch | `required` | Every covered packaged lot until slaughterhouse dispatch. | Maintain 0–3 °C and deliver the reference product. | 1,000 kg net chilled goat liver |
| `lot_sanitation` | Lot-attributable sanitation and effluent handling | `required` | Direct lot records or a disclosed allocation of shared sanitation are required for every covered lot. | Clean and disinfect equipment and surfaces; route wastewater and solids without hiding direct emissions. | sanitation attributable to 1,000 kg net product |

### Process: Slaughter and bleeding (`slaughter_bleeding`)

#### Inputs

##### Product flows

###### Live goats accepted for slaughter (`live_goat_input`)

Live goats cross the foreground gate after identity and acceptance checks; farming and inbound transport remain linked upstream systems.

- Selected flow: Live goat at slaughter weight
- Flow property / unit: Mass / kg
- Amount rule: measured accepted live mass for goats assigned to the production lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_goat_and_slaughter`
- Sources: `fao-small-ruminant-slaughter`

###### Potable water used during slaughter (`slaughter_potable_water`)

Potable water used for slaughter-area operations crosses the process boundary and is metered separately from later washing and sanitation water.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: metered or tank-change water attributable to slaughter and bleeding for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bled goat body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `fao-who-cxc-58-2005`

###### Electricity used during slaughter (`slaughter_electricity`)

Electricity for hoists, conveyors, lighting allocated to the process, and slaughter equipment is recorded as one process-specific electricity exchange.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented equipment-time calculation for slaughter and bleeding
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bled goat body
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `fao-small-ruminant-slaughter`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bled goat body for hygienic dressing (`bled_goat_body`)

The bled goat body is the internal product output passed to evisceration and is measured to support lot mass balance.

- Selected flow: Bled goat body
- Flow property / unit: Mass / kg
- Amount rule: measured bled-body mass transferred to evisceration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_live_goat_and_slaughter`
- Sources: `fao-small-ruminant-slaughter`

###### Food-grade collected goat blood (`food_grade_goat_blood`)

Blood is recorded as a coproduct only when hygienically collected under a documented food or pharmaceutical destination; this route is mutually exclusive with `blood_for_treatment` for the same mass.

- Selected flow: Goat blood, food-grade
- Flow property / unit: Mass / kg
- Amount rule: measured blood mass accepted to the declared food-grade destination; otherwise zero and gate to `blood_for_treatment`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass_destination`
- Sources: `fao-small-ruminant-slaughter`

##### Waste flows

###### Goat blood sent to treatment (`blood_for_treatment`)

Blood not meeting the declared coproduct destination is recorded as a separate waste flow; it must not be hidden in wastewater and is mutually exclusive with `food_grade_goat_blood` for the same mass.

- Selected flow: Goat blood for treatment
- Flow property / unit: Mass / kg
- Amount rule: measured blood mass sent to the documented treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass_destination`
- Sources: `fao-small-ruminant-sanitation`

###### Slaughter wastewater sent to treatment (`slaughter_wastewater`)

Wastewater from slaughter and bleeding is recorded separately from blood and separately from washing or sanitation wastewater.

- Selected flow: Slaughter wastewater for treatment
- Flow property / unit: Volume / m3
- Amount rule: metered or water-balance wastewater volume sent to the declared treatment route
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bled goat body
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `fao-small-ruminant-sanitation`

##### Elementary flows

### Process: Hygienic evisceration and organ separation (`evisceration_separation`)

#### Inputs

##### Product flows

###### Bled goat body entering evisceration (`bled_goat_body_input`)

The lot-identified bled body enters evisceration without losing the link between carcass and organs required for inspection.

- Selected flow: Bled goat body
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from `slaughter_bleeding`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg liver with gallbladder separated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_evisceration_liver`
- Sources: `eu-reg-853-2004`; `fao-small-ruminant-slaughter`

###### Potable water used during evisceration (`evisceration_potable_water`)

Potable water used directly during evisceration is recorded independently from liver washing and sanitation water.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: metered water attributable to evisceration for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg liver with gallbladder separated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_evisceration_liver`
- Sources: `fao-who-cxc-58-2005`

###### Electricity used during evisceration (`evisceration_electricity`)

Electricity for rails, conveyors, lighting allocation, and evisceration equipment is measured or calculated for this process only.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented equipment-time calculation for evisceration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg liver with gallbladder separated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_evisceration_liver`
- Sources: `fao-small-ruminant-slaughter`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Goat liver with gallbladder retained for inspection (`goat_liver_with_gallbladder`)

The separated goat liver remains identified to its carcass until inspection disposition and then passes to liver trimming.

- Selected flow: Goat liver with gallbladder
- Flow property / unit: Mass / kg
- Amount rule: measured liver-with-gallbladder mass released as fit for further food handling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_evisceration_liver`
- Sources: `eu-reg-853-2004`; `fao-small-ruminant-slaughter`

###### Dressed goat carcass (`dressed_goat_carcass`)

The dressed carcass is recorded as its own coproduct with measured wet mass, destination, and price evidence for allocation sensitivity.

- Selected flow: Dressed goat carcass
- Flow property / unit: Mass / kg
- Amount rule: measured dressed carcass mass released from the same slaughter lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass_destination`
- Sources: `lefeon-2020-slaughter-allocation`

###### Goat hide (`goat_hide`)

The removed goat hide is recorded separately when it has a documented coproduct destination and is not grouped with other animal parts.

- Selected flow: Goat hide
- Flow property / unit: Mass / kg
- Amount rule: measured hide mass sent to the declared coproduct destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass_destination`
- Sources: `fao-small-ruminant-slaughter`

###### Goat head and feet (`goat_head_and_feet`)

Goat head and feet are recorded as a distinct coproduct only when the combined commercial item has one documented destination; otherwise the dataset must split them further.

- Selected flow: Goat head and feet
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass_destination`
- Sources: `fao-small-ruminant-slaughter`

###### Goat heart (`goat_heart`)

The goat heart is a separate edible-offal coproduct and must never be averaged into the liver reference product.

- Selected flow: Goat heart
- Flow property / unit: Mass / kg
- Amount rule: measured fit-for-food heart mass and declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass_destination`
- Sources: `fao-small-ruminant-slaughter`

###### Goat lungs (`goat_lungs`)

Goat lungs are recorded separately with inspection disposition and destination because their food status and destination are market-specific.

- Selected flow: Goat lungs
- Flow property / unit: Mass / kg
- Amount rule: measured lung mass released to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass_destination`
- Sources: `fao-small-ruminant-slaughter`

###### Goat kidneys (`goat_kidneys`)

Goat kidneys are a separate edible-offal coproduct and are excluded from the liver reference product and liver yield.

- Selected flow: Goat kidneys
- Flow property / unit: Mass / kg
- Amount rule: measured fit-for-food kidney mass and declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass_destination`
- Sources: `eu-reg-853-2004`

###### Goat tongue (`goat_tongue`)

Goat tongue is recorded separately with its fit-for-food disposition and must not be grouped with liver or head mass.

- Selected flow: Goat tongue
- Flow property / unit: Mass / kg
- Amount rule: measured fit-for-food tongue mass and declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass_destination`
- Sources: `fao-small-ruminant-slaughter`

###### Goat stomachs (`goat_stomachs`)

Cleanable goat stomachs are recorded as a distinct coproduct with their actual destination and are not mixed with intestines or paunch contents.

- Selected flow: Goat stomachs
- Flow property / unit: Mass / kg
- Amount rule: measured stomach mass sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass_destination`
- Sources: `eu-reg-853-2004`; `fao-small-ruminant-slaughter`

###### Goat intestines (`goat_intestines`)

Cleanable goat intestines are recorded separately from stomachs and their contents with the actual destination declared.

- Selected flow: Goat intestines
- Flow property / unit: Mass / kg
- Amount rule: measured intestine mass sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass_destination`
- Sources: `eu-reg-853-2004`; `fao-small-ruminant-slaughter`

###### Goat fat, unrendered (`goat_fat_unrendered`)

Separated unrendered goat fat is recorded as its own coproduct when recovered, without combining it with hide, carcass, or condemned tissue.

- Selected flow: Goat fat, unrendered
- Flow property / unit: Mass / kg
- Amount rule: measured unrendered fat mass sent to the declared destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass_destination`
- Sources: `lefeon-2020-slaughter-allocation`

##### Waste flows

###### Paunch contents removed from goat stomachs (`paunch_contents`)

Paunch contents are a specific organic waste and are recorded separately from stomach tissue, wastewater, blood, and condemned organs.

- Selected flow: Goat paunch contents
- Flow property / unit: Mass / kg
- Amount rule: measured or container-difference mass sent to the documented management route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass_destination`
- Sources: `fao-small-ruminant-sanitation`

###### Condemned goat tissue from post-mortem inspection (`condemned_goat_tissue`)

Tissue declared unfit for human consumption is kept separate from edible outputs and recorded to its actual regulated treatment destination.

- Selected flow: Condemned goat tissue
- Flow property / unit: Mass / kg
- Amount rule: measured condemned tissue mass by disposition record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per accepted slaughter lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_mass_destination`
- Sources: `eu-reg-853-2004`

##### Elementary flows

### Process: Liver inspection, gallbladder removal, and trimming (`liver_trimming`)

#### Inputs

##### Product flows

###### Goat liver with gallbladder entering trimming (`liver_with_gallbladder_input`)

Only lot-identified goat liver released by post-mortem inspection enters the trimming process.

- Selected flow: Goat liver with gallbladder
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from `evisceration_separation`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg trimmed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trimming_liver`
- Sources: `fao-small-ruminant-slaughter`

###### Electricity used for liver trimming (`trimming_electricity`)

Electricity for trimming-line equipment and attributable lighting is recorded separately from evisceration and chilling electricity.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented equipment-time calculation for liver trimming
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg trimmed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trimming_liver`
- Sources: `fao-small-ruminant-slaughter`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Trimmed whole goat liver (`trimmed_goat_liver`)

The whole liver output has the gallbladder, visible contamination, lesions, condemned tissue, and non-liver attachments removed while retaining its liver identity.

- Selected flow: Trimmed whole goat liver
- Flow property / unit: Mass / kg
- Amount rule: measured fit trimmed-liver mass transferred to washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per trimming lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trimming_liver`
- Sources: `eu-reg-853-2004`; `fao-small-ruminant-slaughter`

##### Waste flows

###### Removed goat gallbladder and bile (`removed_gallbladder_and_bile`)

The removed gallbladder and its contained bile are recorded as one physically defined organ-and-content waste stream and kept out of product and wastewater.

- Selected flow: Goat gallbladder and bile
- Flow property / unit: Mass / kg
- Amount rule: measured container-difference mass sent to the documented treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg trimmed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trimming_liver`
- Sources: `fao-small-ruminant-slaughter`

###### Condemned goat liver tissue (`condemned_liver_tissue`)

Lesions, contaminated portions, or other liver tissue condemned during trimming are weighed separately and sent to the documented treatment route.

- Selected flow: Condemned goat liver tissue
- Flow property / unit: Mass / kg
- Amount rule: measured condemned liver-tissue mass by disposition record
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg trimmed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_trimming_liver`
- Sources: `eu-reg-853-2004`

##### Elementary flows

### Process: Potable-water liver washing (`liver_washing`)

#### Inputs

##### Product flows

###### Trimmed goat liver entering washing (`trimmed_liver_input`)

Trimmed whole goat liver enters the dedicated red-offal washing line without mixing with other organs or lots.

- Selected flow: Trimmed whole goat liver
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from `liver_trimming`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg washed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liver_washing`
- Sources: `fao-small-ruminant-slaughter`

###### Potable water for liver washing (`liver_washing_potable_water`)

Only potable water applied directly to liver is recorded here; sanitation and evisceration water remain separate cards.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: metered wash-water volume for the liver lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg washed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liver_washing`
- Sources: `fao-who-cxc-58-2005`; `fao-small-ruminant-slaughter`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Washed whole goat liver (`washed_goat_liver`)

Washed whole goat liver is drained, weighed, and transferred without delay to forced-air chilling.

- Selected flow: Washed whole goat liver
- Flow property / unit: Mass / kg
- Amount rule: measured drained liver mass transferred to chilling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per washing lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_liver_washing`
- Sources: `fao-who-cxc-58-2005`

##### Waste flows

###### Liver-washing wastewater sent to treatment (`liver_washing_wastewater`)

Wastewater from direct liver washing is separately metered or balanced and sent to the declared treatment route; direct-discharge pollutants are reported only under the mutually exclusive sanitation-effluent gate.

- Selected flow: Liver-washing wastewater for treatment
- Flow property / unit: Volume / m3
- Amount rule: measured wash-water discharge or `wash_water_input - retained_water - documented_loss`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg washed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `fao-small-ruminant-sanitation`

##### Elementary flows

### Process: Forced-air chilling with R717 refrigeration (`forced_air_chilling`)

#### Inputs

##### Product flows

###### Washed goat liver entering forced-air chilling (`washed_liver_input`)

Washed whole liver enters the forced-air chiller as a distinct lot and is not mixed with fresh or frozen product routes.

- Selected flow: Washed whole goat liver
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from `liver_washing`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg chilled goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling`
- Sources: `fao-who-cxc-58-2005`; `eu-reg-853-2004`

###### Electricity for forced-air chilling (`chilling_electricity`)

Metered electricity for refrigeration compressors, evaporator fans, controls, and attributable auxiliaries is recorded for the selected chilling equipment and lot.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered chiller electricity allocated by documented meter interval and lot occupancy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg chilled goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling`
- Sources: `fao-who-cxc-58-2005`

###### R717 ammonia make-up for forced-air chilling (`chilling_r717_makeup`)

R717 ammonia added to the refrigeration circuit is recorded as a chemically specific input and never as a generic refrigerant card.

- Selected flow: Ammonia, anhydrous, R717
- Flow property / unit: Mass / kg
- Amount rule: verified R717 additions attributable to the chilling equipment and reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg chilled goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant`
- Sources: `fao-who-cxc-58-2005`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled whole goat liver at 0–3 °C (`chilled_goat_liver`)

Whole goat liver leaves the forced-air chiller only after product-temperature records demonstrate 0–3 °C throughout the lot.

- Selected flow: Chilled whole goat liver
- Flow property / unit: Mass / kg
- Amount rule: measured chilled liver mass accepted by the time-temperature gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per chilling lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling`
- Sources: `eu-reg-853-2004`; `fao-who-cxc-58-2005`

##### Waste flows

##### Elementary flows

###### R717 ammonia emitted to air during chilling (`chilling_r717_to_air`)

Calculated R717 loss from the selected chilling system is reported as an ammonia-to-air elementary flow and must reconcile with refrigerant service records.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: `R717_loss = opening_charge + additions - closing_charge - recovered`, allocated to forced-air chilling by equipment and time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg chilled goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Sources: `fao-who-cxc-58-2005`

### Process: PA/PE vacuum packaging and corrugated casing (`vacuum_packaging`)

#### Inputs

##### Product flows

###### Chilled goat liver entering packaging (`chilled_liver_input`)

Only chilled whole goat liver that passed the 0–3 °C gate enters the declared vacuum-packaging route.

- Selected flow: Chilled whole goat liver
- Flow property / unit: Mass / kg
- Amount rule: measured mass transferred from `forced_air_chilling`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg vacuum-packed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `fao-who-cxc-58-2005`

###### PA/PE vacuum pouch (`pa_pe_vacuum_pouch`)

The food-contact PA/PE pouch is weighed as a specific primary-packaging component and excluded from net product mass.

- Selected flow: Polyamide/polyethylene vacuum pouch
- Flow property / unit: Mass / kg
- Amount rule: issued pouch mass minus returned unused pouch mass for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg vacuum-packed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `fao-who-cxc-58-2005`

###### Paper product label (`paper_label`)

Paper labels applied to the packs or cases are recorded separately from the pouch and corrugated case.

- Selected flow: Paper label
- Flow property / unit: Mass / kg
- Amount rule: issued label mass minus returned unused label mass for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg vacuum-packed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `fao-who-cxc-58-2005`

###### Corrugated fibreboard case (`corrugated_case`)

The corrugated secondary case is weighed independently and is not combined with labels, pouch film, or stretch film.

- Selected flow: Corrugated fibreboard case
- Flow property / unit: Mass / kg
- Amount rule: issued corrugated-case mass minus returned unused case mass for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg vacuum-packed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `fao-who-cxc-58-2005`

###### LLDPE pallet stretch film (`lldpe_stretch_film`)

LLDPE stretch film used for pallet stabilization is a separate tertiary-packaging input and is not grouped with the PA/PE pouch.

- Selected flow: Linear low-density polyethylene stretch film
- Flow property / unit: Mass / kg
- Amount rule: roll-weight difference attributable to the dispatched lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg vacuum-packed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `fao-who-cxc-58-2005`

###### Electricity for vacuum packaging (`vacuum_packaging_electricity`)

Electricity for the vacuum pump, heat sealer, labeler, case handling, and attributable auxiliaries is recorded for this packaging route.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or documented equipment-time calculation for packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg vacuum-packed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `fao-who-cxc-58-2005`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Vacuum-packed chilled goat liver (`vacuum_packed_goat_liver`)

The internal packaged product output preserves separate net-liver and packaging-component masses and passes to refrigerated holding.

- Selected flow: Vacuum-packed chilled goat liver
- Flow property / unit: Mass / kg
- Amount rule: measured net chilled-liver mass; packaging masses excluded and recorded on their own cards
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per packaging lot
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `fao-who-cxc-58-2005`

##### Waste flows

###### PA/PE pouch offcuts and rejected pouches (`pa_pe_pouch_offcuts`)

PA/PE offcuts and rejected pouches are weighed as one material-specific waste stream and not combined with paper or corrugated waste.

- Selected flow: Waste polyamide/polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: measured PA/PE offcut and rejected-pouch mass for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg vacuum-packed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `fao-who-cxc-58-2005`

###### Waste paper labels (`paper_label_waste`)

Rejected or unused paper labels sent to waste are recorded separately from every plastic and board waste stream.

- Selected flow: Waste paper labels
- Flow property / unit: Mass / kg
- Amount rule: measured rejected-label mass for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg vacuum-packed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `fao-who-cxc-58-2005`

###### Waste corrugated board (`corrugated_board_waste`)

Damaged corrugated cases and board offcuts are weighed as a material-specific waste stream.

- Selected flow: Waste corrugated fibreboard
- Flow property / unit: Mass / kg
- Amount rule: measured corrugated-board waste mass for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg vacuum-packed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `fao-who-cxc-58-2005`

###### Waste LLDPE stretch film (`lldpe_film_waste`)

Discarded LLDPE stretch film is recorded separately from PA/PE pouch waste and other packaging waste.

- Selected flow: Waste linear low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: measured discarded LLDPE film mass for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg vacuum-packed goat liver
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging`
- Sources: `fao-who-cxc-58-2005`

##### Elementary flows

### Process: Refrigerated holding and dispatch (`cold_holding_dispatch`)

#### Inputs

##### Product flows

###### Packaged chilled goat liver entering cold holding (`packaged_liver_input`)

Vacuum-packed chilled liver enters the selected cold room with lot identity and net mass retained.

- Selected flow: Vacuum-packed chilled goat liver
- Flow property / unit: Mass / kg
- Amount rule: measured net liver mass transferred from `vacuum_packaging`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_holding`
- Sources: `eu-reg-853-2004`; `fao-who-cxc-58-2005`

###### Electricity for refrigerated holding (`cold_holding_electricity`)

Cold-room compressor, fan, defrost, control, and attributable auxiliary electricity is recorded for the product occupancy period.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: metered cold-room electricity allocated by documented product occupancy and time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cold_holding`
- Sources: `fao-who-cxc-58-2005`

###### R717 ammonia make-up for cold holding (`cold_holding_r717_makeup`)

R717 additions attributable to the cold-holding refrigeration equipment are recorded separately from chilling-system additions.

- Selected flow: Ammonia, anhydrous, R717
- Flow property / unit: Mass / kg
- Amount rule: verified R717 additions attributable to cold holding by equipment and reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant`
- Sources: `fao-who-cxc-58-2005`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled whole goat liver reference product (`chilled_goat_liver_reference_product`)

This is the only reference-product output: inspected, trimmed, potable-water-washed whole goat liver, forced-air chilled, vacuum packed, and dispatched at 0–3 °C.

- Selected flow: Edible offal of goat, fresh, chilled or frozen `378f6bb6-a27a-41ef-890a-2243f652a9fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed reference amount of 1,000 kg net chilled goat liver meeting all required qualifiers
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_cold_holding`
- Sources: `unsd-cpc3-21156`; `eu-reg-853-2004`

##### Waste flows

##### Elementary flows

###### R717 ammonia emitted to air during cold holding (`cold_holding_r717_to_air`)

Calculated R717 loss from cold-holding equipment is reported as a separate ammonia-to-air elementary flow.

- Selected flow: Ammonia to air
- Flow property / unit: Mass / kg
- Amount rule: `R717_loss = opening_charge + additions - closing_charge - recovered`, allocated to cold holding by equipment and time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant`
- Sources: `fao-who-cxc-58-2005`

### Process: Lot-attributable sanitation and effluent handling (`lot_sanitation`)

#### Inputs

##### Product flows

###### Potable water for equipment and surface sanitation (`sanitation_potable_water`)

Potable sanitation water attributable to the lot is recorded separately from slaughter, evisceration, and liver-washing water.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: metered sanitation water or documented shared-sanitation allocation for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation`
- Sources: `fao-who-cxc-58-2005`; `fao-small-ruminant-sanitation`

###### Electricity for sanitation-water heating and cleaning equipment (`sanitation_electricity`)

The representative sanitation route uses electricity for water heating, pumps, and cleaning equipment and does not assume an unrecorded thermal fuel.

- Selected flow: Electricity, low voltage
- Flow property / unit: Energy / kWh
- Amount rule: submetered sanitation electricity or documented equipment-time calculation for the lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation`
- Sources: `fao-small-ruminant-sanitation`

###### Sodium hydroxide detergent (`sodium_hydroxide_detergent`)

Sodium hydroxide used in the declared cleaning formulation is recorded as a chemically specific input at active-ingredient mass.

- Selected flow: Sodium hydroxide
- Flow property / unit: Mass / kg
- Amount rule: issued solution mass multiplied by verified active concentration, less returned unused solution
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation`
- Sources: `fao-small-ruminant-sanitation`

###### Peracetic acid sanitizer (`peracetic_acid_sanitizer`)

Peracetic acid used after cleaning is recorded separately from sodium hydroxide at active-ingredient mass.

- Selected flow: Peracetic acid
- Flow property / unit: Mass / kg
- Amount rule: issued sanitizer solution mass multiplied by verified peracetic-acid concentration, less returned unused solution
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation`
- Sources: `fao-who-cxc-58-2005`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Sanitation wastewater sent to treatment (`sanitation_wastewater_to_treatment`)

Sanitation wastewater is a distinct waste flow to on-site or off-site treatment; when this route is used, the same untreated pollutant mass is not also reported as a direct elementary emission.

- Selected flow: Sanitation wastewater for treatment
- Flow property / unit: Volume / m3
- Amount rule: measured discharge or water balance for the sanitation event attributable to the lot
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `fao-small-ruminant-sanitation`

###### Screened animal-tissue solids from sanitation wastewater (`screened_animal_tissue_solids`)

Meat, fat, blood clots, and other animal-tissue solids captured by screens are weighed as a specific organic solid waste rather than included in wastewater volume.

- Selected flow: Screened animal-tissue solids
- Flow property / unit: Mass / kg
- Amount rule: measured wet mass removed from screens and traps for the attributable sanitation event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_effluent`
- Sources: `fao-small-ruminant-sanitation`

##### Elementary flows

###### Chemical oxygen demand directly discharged to water (`cod_to_water`)

COD is reported only for measured final effluent discharged directly to the environment; it is not duplicated when wastewater leaves as a treatment-service waste flow.

- Selected flow: Chemical oxygen demand to water
- Flow property / unit: Mass / kg
- Amount rule: `COD_mass = final_effluent_volume * measured_COD_concentration`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `fao-small-ruminant-sanitation`

###### Biochemical oxygen demand directly discharged to water (`bod5_to_water`)

BOD5 is calculated from final-effluent measurement only under the direct-discharge route and remains separate from COD.

- Selected flow: Biochemical oxygen demand, 5-day, to water
- Flow property / unit: Mass / kg
- Amount rule: `BOD5_mass = final_effluent_volume * measured_BOD5_concentration`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `fao-small-ruminant-sanitation`

###### Total nitrogen directly discharged to water (`total_nitrogen_to_water`)

Total nitrogen is a separate final-effluent elementary flow under the direct-discharge route and is not inferred from COD or BOD5.

- Selected flow: Total nitrogen to water
- Flow property / unit: Mass / kg
- Amount rule: `TN_mass = final_effluent_volume * measured_TN_concentration`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `fao-small-ruminant-sanitation`

###### Total phosphorus directly discharged to water (`total_phosphorus_to_water`)

Total phosphorus is reported as its own final-effluent elementary flow under the direct-discharge route.

- Selected flow: Total phosphorus to water
- Flow property / unit: Mass / kg
- Amount rule: `TP_mass = final_effluent_volume * measured_TP_concentration`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `fao-small-ruminant-sanitation`

###### Total suspended solids directly discharged to water (`total_suspended_solids_to_water`)

TSS is calculated from the measured final-effluent concentration after screened solids have been separately removed and weighed.

- Selected flow: Total suspended solids to water
- Flow property / unit: Mass / kg
- Amount rule: `TSS_mass = final_effluent_volume * measured_TSS_concentration`
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1,000 kg net chilled goat liver at dispatch
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_effluent`
- Sources: `fao-small-ruminant-sanitation`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_where_possible` | Separable post-slaughter operations | Assign liver-specific washing, chilling, packaging, cold holding, and directly measured trimming burdens to liver by subdivision; do not allocate those burdens across the carcass and unrelated organs. | `lefeon-2020-slaughter-allocation` |
| `allocation_joint_slaughter_base` | Live-goat upstream, slaughter, bleeding, and joint evisceration burdens | Use one declared primary allocation method with lot-specific coproduct masses and destinations. The primary result must not silently switch between mass, economic, or biophysical allocation. | `lefeon-2020-slaughter-allocation` |
| `allocation_mass_sensitivity` | Joint slaughter outputs | Calculate a wet-mass sensitivity using `AF_liver_mass = M_liver / sum(M_i)` over all marketable coproduct outputs included in the joint system; excluded waste receives no coproduct share but its treatment remains in the system. | `lefeon-2020-slaughter-allocation` |
| `allocation_economic_sensitivity` | Joint slaughter outputs | Calculate an economic sensitivity using `AF_liver_economic = (M_liver * P_liver) / sum(M_i * P_i)` with contemporaneous lot- or period-specific prices, common currency and price basis; zero-value and waste destinations are disclosed. | `lefeon-2020-slaughter-allocation` |
| `allocation_no_lamb_default` | Goat-specific model | Lamb allocation factors may demonstrate sensitivity but are not goat defaults. If goat-specific biophysical data are unavailable, disclose the evidence gap rather than transplanting a lamb factor. | `lefeon-2020-slaughter-allocation` |
| `allocation_sanitation` | Shared sanitation and cold-room operations | Prefer submetering and event records; otherwise allocate shared electricity, water, chemicals, effluent, and cold-room loads using a disclosed causal driver such as equipment time, cleaned area, or mass-time occupancy, and test the driver where material. | `fao-who-cxc-58-2005` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_live_goat_and_slaughter` | `slaughter_bleeding` | live goat, bled body, lot identity | scale_and_slaughter_log | `lot_id; animal_ids; accepted_live_mass_kg; bled_body_mass_kg; slaughter_time; scale_id` | Calibrated scales and linked slaughter log. | kg; timestamp | Every lot | All covered lots in reporting period | Slaughterhouse | Sum accepted masses by lot; preserve animal-to-lot link. | Scale calibration, acceptance records, slaughter log reconciliation. |
| `cp_slaughter_utilities` | `slaughter_bleeding` | slaughter water and electricity | meter_and_equipment_log | `lot_id; water_meter_open_m3; water_meter_close_m3; electricity_meter_open_kWh; electricity_meter_close_kWh; equipment_id; runtime_h` | Dedicated meters or documented equipment-time calculation. | m3; kWh; h | Every lot or meter interval | Representative operation including cleaning boundaries | Slaughter area | Difference meters; allocate only shared intervals with disclosed driver. | Meter IDs, calibration, interval completeness, equipment ratings. |
| `cp_evisceration_liver` | `evisceration_separation` | organ identity, liver and utility records | inspection_scale_and_meter_log | `lot_id; animal_id; carcass_id; inspection_disposition; liver_with_gallbladder_kg; evisceration_water_m3; evisceration_electricity_kWh; transfer_time` | Carcass-organ identity tags, inspection records, calibrated scales and meters. | kg; m3; kWh; timestamp | Every animal and lot | All covered lots | Evisceration and inspection line | Sum only fit goat liver assigned to the selected lot; keep other organ masses separate. | Inspection signature, identity-chain audit, scale and meter checks. |
| `cp_coproduct_mass_destination` | `slaughter_bleeding; evisceration_separation` | individual coproduct and waste destinations | scale_destination_and_price_log | `lot_id; row_id; wet_mass_kg; disposition; destination; invoice_id; price_currency_per_kg; price_basis; price_date` | Calibrated mass records linked to disposition, destination, and invoice or zero-value evidence. | kg; currency/kg; date | Every lot; price by transaction | All covered lots and a representative price period | Slaughterhouse | Aggregate by exact row_id and destination; never combine organs for allocation. | Scale calibration, dispatch notes, invoices, waste manifests. |
| `cp_trimming_liver` | `liver_trimming` | liver input, trimmed liver, gallbladder, condemned liver | scale_and_disposition_log | `lot_id; liver_input_kg; trimmed_liver_kg; gallbladder_bile_kg; condemned_liver_kg; electricity_kWh; disposition; operator; time` | Calibrated before/after scales, disposition records, and electricity meter or equipment-time log. | kg; kWh; timestamp | Every lot | All covered lots | Liver trimming line | Maintain `liver_input_kg = trimmed_liver_kg + gallbladder_bile_kg + condemned_liver_kg + documented_mass_difference_kg`. | Scale calibration, inspection disposition, balance reconciliation. |
| `cp_liver_washing` | `liver_washing` | liver and direct wash-water records | scale_meter_and_temperature_log | `lot_id; trimmed_liver_kg; washed_drained_liver_kg; wash_water_input_m3; wash_water_discharge_m3; water_potability_record; wash_start; wash_end` | Calibrated scales, dedicated water meter, and potability records. | kg; m3; timestamp | Every lot | All covered lots | Dedicated liver-washing line | Sum by lot; keep sanitation water outside the wash-water field. | Potability certificate, meter and scale calibration, lot reconciliation. |
| `cp_chilling` | `forced_air_chilling` | liver mass, electricity, time-temperature path | scale_meter_and_temperature_log | `lot_id; liver_input_kg; liver_output_kg; chiller_id; electricity_kWh; product_temp_start_degC; product_temp_end_degC; temp_points; start_time; end_time; fan_runtime_h` | Calibrated product probes, continuous logger, scales, and chiller submeter. | kg; kWh; °C; timestamp; h | Every lot; continuous temperature | All covered lots and seasonal operating conditions | Selected forced-air chiller | Accept only lots with continuous decrease and all dispatch-bound product at 0–3 °C; sum electricity by meter interval. | Probe calibration, logger completeness, alarm and corrective-action records. |
| `cp_packaging` | `vacuum_packaging` | product and individual packaging components | scale_issue_and_waste_log | `lot_id; net_liver_kg; pa_pe_issued_kg; pa_pe_returned_kg; label_issued_kg; label_returned_kg; corrugated_issued_kg; corrugated_returned_kg; lldpe_roll_open_kg; lldpe_roll_close_kg; each_waste_kg; electricity_kWh; seal_test_result` | Calibrated product scales, material issue/return weights, waste weights, electricity meter, and seal test. | kg; kWh | Every packaging lot | All covered lots | Packaging line | Calculate each material use and waste separately; never include packaging in net liver mass. | Scale calibration, bill of materials, issue/return records, seal integrity tests. |
| `cp_cold_holding` | `cold_holding_dispatch` | product mass, occupancy, electricity, temperature | dispatch_meter_and_logger | `lot_id; net_liver_kg; cold_room_id; entry_time; dispatch_time; mass_time_kg_h; electricity_kWh; product_temp_points_degC; room_temp_points_degC; dispatch_temp_degC` | Dispatch scales, continuous temperature logger, occupancy record, and submeter. | kg; kg*h; kWh; °C; timestamp | Every lot; continuous temperature | Full holding period | Selected cold room | Allocate shared electricity by measured mass-time occupancy unless a better causal submeter exists. | Probe and scale calibration, logger completeness, dispatch record. |
| `cp_refrigerant` | `forced_air_chilling; cold_holding_dispatch` | R717 charge and loss | refrigerant_service_log | `equipment_id; period_start; period_end; opening_charge_kg; additions_kg; closing_charge_kg; recovered_kg; service_event; leak_location; allocation_driver` | Technician-verified inventory and service-cylinder mass records by equipment. | kg; date | Each service event and reporting period | Period covering all reported lots | Selected R717 systems | Apply `R717_loss = opening_charge + additions - closing_charge - recovered`; allocate by equipment and documented causal time. | Service tickets, cylinder weights, inventory reconciliation, leak repair records. |
| `cp_sanitation` | `lot_sanitation` | water, electricity, NaOH and peracetic acid | meter_issue_and_concentration_log | `event_id; lot_ids; cleaned_area_m2; equipment_time_h; water_m3; electricity_kWh; naoh_solution_kg; naoh_fraction; paa_solution_kg; paa_fraction; unused_return_kg` | Event meters, chemical issue/return weights, concentration certificates, and sanitation schedule. | m2; h; m3; kWh; kg; mass fraction | Every sanitation event | Events attributable to covered lots | Slaughter, offal, chilling, packaging and cold-room areas | Attribute event inputs by direct lot record or disclosed cleaned-area/equipment-time driver. | Meter checks, chemical certificate, sanitation completion and verification records. |
| `cp_effluent` | `slaughter_bleeding; liver_washing; lot_sanitation` | wastewater, screened solids, and direct-discharge pollutants | flow_composite_sample_and_waste_log | `stream_id; route; volume_m3; sample_start; sample_end; COD_kg_per_m3; BOD5_kg_per_m3; TN_kg_per_m3; TP_kg_per_m3; TSS_kg_per_m3; screened_solids_kg; treatment_manifest` | Calibrated flow measurement, time- or flow-proportional composite sample, accredited analysis, and waste manifest. | m3; kg/m3; kg; timestamp | Each discharge event or representative composite interval | Full production and sanitation coverage | Final discharge point and each segregated waste stream | Calculate each pollutant mass separately. If route = treatment_service, do not also report untreated direct emissions. | Sampler and flow-meter calibration, laboratory report, chain of custody, manifest reconciliation. |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | All inventory rows | `normalized_amount = attributable_amount / net_chilled_liver_kg * 1000` | `attributable_amount; net_chilled_liver_kg` | amount per 1,000 kg net chilled goat liver |  |
| `calc_trimming_balance` | `liver_trimming` | `documented_mass_difference_kg = liver_input_kg - trimmed_liver_kg - gallbladder_bile_kg - condemned_liver_kg` | `liver_input_kg; trimmed_liver_kg; gallbladder_bile_kg; condemned_liver_kg` | documented mass difference | `fao-small-ruminant-slaughter` |
| `calc_washing_wastewater` | `liver_washing` | `wash_wastewater_m3 = wash_water_input_m3 - retained_water_m3 - documented_loss_m3` | `wash_water_input_m3; retained_water_m3; documented_loss_m3` | liver-washing wastewater volume | `fao-small-ruminant-sanitation` |
| `calc_refrigerant_loss` | R717 systems | `R717_loss = opening_charge + additions - closing_charge - recovered` | `opening_charge_kg; additions_kg; closing_charge_kg; recovered_kg` | R717 emitted to air before equipment/time allocation |  |
| `calc_pollutant_mass` | Direct final effluent | `pollutant_mass = final_effluent_volume * measured_pollutant_concentration` | `final_effluent_volume; measured_pollutant_concentration` | separate COD, BOD5, TN, TP, or TSS mass | `fao-small-ruminant-sanitation` |
| `calc_mass_allocation` | Joint slaughter burdens | `AF_liver_mass = M_liver / sum(M_i)` | wet masses of all marketable coproduct outputs in the joint system | liver wet-mass allocation factor | `lefeon-2020-slaughter-allocation` |
| `calc_economic_allocation` | Joint slaughter burdens | `AF_liver_economic = (M_liver * P_liver) / sum(M_i * P_i)` | coproduct wet masses and contemporaneous prices on one basis | liver economic allocation factor | `lefeon-2020-slaughter-allocation` |
| `calc_cold_room_share` | Shared cold-room electricity | `lot_electricity = interval_electricity * lot_mass_time / sum(all_mass_time)` | `interval_electricity_kWh; lot_mass_time_kg_h; all_mass_time_kg_h` | cold-holding electricity attributable to the lot |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and all internal liver transfers | Preserve goat species, liver tissue, chilled state, slaughter lot, carcass/organ link through inspection, and package lot. | Identity tags, inspection record, transfer and dispatch logs. |
| `dq_mass_balance` | Slaughter and liver-processing chain | Reconcile live mass, bled body, separately measured coproducts and wastes, liver input/output, packaging-excluded net product, and documented mass differences. | Calibrated scale records and signed balance review. |
| `dq_temperature` | Chilling and holding | Continuous records must show a decreasing chilling path and 0–3 °C product at packaging transfer and dispatch; retain alarms and corrective actions. | Calibrated probe certificates, raw logger export, release record. |
| `dq_temporal` | Utilities, refrigerant, prices, and effluent | Meter intervals, refrigerant periods, price periods, and sampling intervals must overlap the production period and disclose any extrapolation. | Meter timestamps, service records, invoices, sampler timestamps. |
| `dq_completeness` | Atomic inventory | Confirm every actually used utility, material, chemical, package component, refrigerant, coproduct, waste, wastewater stream, and direct emission has one specific card or a documented zero/not-applicable gate. | Purchase/issue reconciliation, process walk-through, waste and discharge manifests. |
| `dq_allocation` | Joint slaughter and shared operations | Retain all masses, destinations, prices, denominators, and causal drivers needed to reproduce primary and sensitivity allocation results. | Allocation workbook linked to raw mass and price evidence. |
| `dq_no_default_quantities` | All quantitative inventory | Do not insert an unverified default for goat-liver yield, utility demand, packaging, refrigerant loss, or effluent pollutant load. Missing foreground evidence is an explicit evidence gap. | Data-gap register and reviewer sign-off. |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Fail if species is not goat, tissue is not liver, state is not chilled, gallbladder removal or trimming specification is missing, package route differs without separate review, or the reference product UUID differs from `378f6bb6-a27a-41ef-890a-2243f652a9fc`. | `unsd-cpc3-21156` |
| `validate_temperature` | Chilling and dispatch | Fail if final product has any recorded temperature above 3 °C, if dispatch temperature is below 0 °C, or if the time-temperature record is incomplete. | `eu-reg-853-2004`; `fao-who-cxc-58-2005` |
| `validate_route_exclusivity` | Product route | Fail if fresh unchilled, frozen, or another organ route is averaged with this chilled whole-liver route. | `unsd-cpc3-21156` |
| `validate_inspection_chain` | Evisceration and trimming | Fail if the liver cannot be linked to its carcass through post-mortem disposition or if condemned tissue enters edible output. | `eu-reg-853-2004`; `fao-small-ruminant-slaughter` |
| `validate_atomic_flows` | Process inventory | Fail if an actual input or output is represented by a collection card such as energy, materials, chemicals, fuels, refrigerants, packaging, wastes, or emissions instead of one specific exchange per card. | `fao-who-cxc-58-2005` |
| `validate_mass_balance` | Liver chain | Fail if an unexplained mass difference exceeds the facility's documented scale uncertainty and no corrective record closes the discrepancy. | `fao-small-ruminant-slaughter` |
| `validate_effluent_gate` | Effluent inventory | Fail if the same wastewater or untreated pollutant mass is counted both as a waste flow to treatment and as a direct elementary emission. | `fao-small-ruminant-sanitation` |
| `validate_refrigerant` | R717 systems | Fail if R717 additions are recorded without equipment-level balance, or if calculated loss is omitted from air emissions. | `fao-who-cxc-58-2005` |
| `validate_allocation_sensitivity` | Joint slaughter burdens | Fail if joint burdens lack one declared primary allocation and both lot-specific wet-mass and economic sensitivity results, or if a lamb factor is used as an undisclosed goat default. | `lefeon-2020-slaughter-allocation` |
| `validate_source_closure` | Evidence references | Fail if a source id used by a row or rule is absent from section 11, or if a listed source id is unused. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for chilled whole goat liver at the slaughterhouse dispatch gate. |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication. |
| allowed_use | LCA of products using chilled whole goat liver with matching species, tissue, trimming, washing, chilling, package, temperature, geography, technology, and allocation context. |
| excluded_use | Mixed offal; another goat organ; sheep or other species; fresh unchilled or frozen liver; prepared or preserved liver; a route lacking slaughter coproduct allocation; a product outside the 0–3 °C dispatch gate. |
| required_metadata | PCR id and version; CPC 21156; reference UUID; species; tissue; state; trimming and washing specifications; facility and geography; slaughter and processing period; chilling equipment and refrigerant; time-temperature evidence; packaging bill; sanitation and wastewater route; allocation method and sensitivity factors; data gaps. |
| required_quality_disclosure | Primary versus calculated records; scale, meter, logger and laboratory coverage; missing data and extrapolations; mass-balance closure; refrigerant reconciliation; effluent route; coproduct destinations and prices; allocation sensitivity; package exclusion from net mass. |
| update_trigger | Change in organ or state; slaughter boundary; trimming or washing specification; cooling technology or refrigerant; dispatch-temperature specification; package configuration; sanitation chemistry; effluent route; coproduct destination or price structure; allocation method; regulatory requirements; reference-flow identity. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc3-21156` | `official_guidance` | United Nations Statistics Division, CPC Version 3.0 Explanatory Notes, code 21156, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf (retrieved 2026-08-13) | CPC scope and goat-offal product identity. |
| `fao-who-cxc-58-2005` | `official_guidance` | Codex Alimentarius, CXC 58-2005, Code of Hygienic Practice for Meat, https://www.fao.org/input/download/standards/10196/CXP_058e.pdf (retrieved 2026-08-13) | Hygienic process control, potable water, cooling, temperature monitoring, packaging, cold-chain, and sanitation requirements. |
| `eu-reg-853-2004` | `official_guidance` | Regulation (EC) No 853/2004, consolidated text 2026-01-27, Annex III Section I, https://eur-lex.europa.eu/eli/reg/2004/853/2026-01-27/eng (retrieved 2026-08-13) | Carcass-organ identity through inspection, exclusion of unfit material, hygienic viscera handling, and offal temperature ceiling of 3 °C. |
| `fao-small-ruminant-slaughter` | `handbook` | FAO, Manual for the slaughter of small ruminants in developing countries, Chapters 6 and 8, https://www.fao.org/4/X6552E/X6552E06.htm and https://www.fao.org/4/X6552E/X6552E08.htm (retrieved 2026-08-13) | Goat slaughter and evisceration sequence, liver/gallbladder handling, inspection identity, separate red-offal cleaning, and individual by-product handling. |
| `fao-small-ruminant-sanitation` | `handbook` | FAO, Manual for the slaughter of small ruminants in developing countries, Chapter 9, https://www.fao.org/4/X6552E/X6552E09.htm (retrieved 2026-08-13) | Potable hot/cold water, cleaning agents, separation of solids and blood, wastewater routing, screening, settling, and fat removal. |
| `lefeon-2020-slaughter-allocation` | `literature` | Le Féon, S. et al. (2020), Allocation factors for meat coproducts: Dataset to perform life cycle assessment at slaughterhouse, Data in Brief 33:106558, https://doi.org/10.1016/j.dib.2020.106558; open full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC7718151/; PMID 33304956 (full text verified 2026-08-20) | Need for explicit coproduct allocation and comparison of wet-mass, economic, and biophysical allocation; evidence gap against transferring lamb factors to goat. |

OpenAlex discovery was completed centrally with three goat-liver/small-ruminant route queries and one exact-title query. Fifteen result records were screened. The route queries produced no goat-liver processing LCI source. The exact-title query confirmed `lefeon-2020-slaughter-allocation`; it was retained only because the PMC original full text had already been independently verified. Broad slaughter-waste, retail-resource, sheep, cattle and metadata-only results were rejected, and no abstract or search snippet supports a rule or value.
