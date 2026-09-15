---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-sheep-fresh-chilled-or-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Edible offal of sheep, fresh, chilled or frozen

## 1. Scope and Applicability

This PCR is a deliberately narrow, non-averaged implementation within CPC 3.0 class 21155. It applies only to edible sheep liver delivered chilled at the processing-facility gate. The fixed route receives live sheep at an integrated slaughterhouse, performs slaughter and evisceration, separates the red-offal pluck, trims and washes the liver with potable water, chills it by forced air in a central ammonia (R717) refrigeration system, packs it in LDPE film and corrugated-fibreboard cartons, and transfers wastewater to off-site treatment.

Fresh or frozen liver, kidneys, hearts, tongues, lungs sold as the reference product, mixed-offal packs, goat offal, rendered products, cooked products, retail storage, distribution and consumer preparation are outside this PCR. Hearts, lungs and tracheae that physically arise on the locked route are separate co-products, never substitutes for or averages with the sheep-liver reference product.

No default utility, material, yield, refrigerant-loss, waste or pollutant quantity is prescribed. A conforming first dataset uses facility records or the calculation rules below. The official and literature sources support process inclusion, hygiene, temperature control, wastewater characterisation and allocation method; they do not replace foreground measurements.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.edible-offal-of-sheep-fresh-chilled-or-frozen |
| classification_refs | CPC 3.0:21155, narrower methodology scope |
| covered_products | Post-mortem-inspected edible sheep liver, air-chilled to 0–3 °C and packaged at the processing-facility gate |
| excluded_products | Other sheep tissues; mixed offal; goat offal; fresh liver; frozen liver; cooked, cured or otherwise prepared liver; retail or consumer-stage product |
| representative_product | Packaged chilled sheep liver |
| production_route | Integrated sheep slaughter; red-offal separation; liver trimming; potable-water washing; forced-air R717 chilling and cold holding; LDPE primary wrapping; corrugated-fibreboard secondary packaging; off-site wastewater treatment |
| market_state | Chilled, never frozen, packaged, ex-works processing-facility gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Packaged edible sheep liver from the locked slaughterhouse and air-chilling route |
| How much | 1,000 kg net product mass, excluding packaging |
| How well | Post-mortem accepted for human consumption; liver tissue only; core temperature 0–3 °C at gate; packaging intact; no freezing |
| How long or cycle | One reporting period containing complete slaughter, separation, washing, chilling, packaging and sanitation records; normally 12 consecutive months |
| reference_flow_link | `packaged_chilled_sheep_liver` |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net packaged chilled sheep liver |
| Reference product flow | Edible offal of sheep, fresh, chilled or frozen `1f8ad4d0-18e1-4ee6-8006-0d578c5e07eb` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species=Ovis aries; tissue=liver; temperature_state=chilled; gate_core_temperature=0–3 °C; freezing_history=never_frozen; slaughter_route=integrated_slaughterhouse; chilling_route=forced_air_R717; wastewater_route=off_site_treatment; packaging=LDPE_film_and_corrugated_fibreboard; net_mass_excludes_packaging=true |

When constructing a foreground data package, every required qualifier must be declared in dataset metadata, process notes, the reference-flow comment, the product description or an equivalent field. The broad Tiangong flow identity does not authorise averaging across organs or temperature states.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | `packaged_chilled_sheep_liver` | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net liver mass after packaging tare deduction; normalise all inventory to 1,000 kg net product. |
| `live_weight_basis` | `live_sheep_input` | Mass | kg live weight | Record verified live weight at slaughterhouse receipt; do not substitute carcass weight. |
| `intermediate_mass_consistency` | all liver intermediate rows | Mass | kg | Use the same calibrated scale basis and batch identity through trimming, washing, chilling and packaging. |
| `water_volume_conversion` | potable-water and wastewater carrier rows | Volume | m3 | Preserve metered m3; if mass is recorded, convert using measured water density or a disclosed accepted conversion. |
| `electricity_metering` | grid-electricity rows | Energy | kWh | Use imported active electricity from dedicated sub-meters or a documented allocation of the facility meter; do not combine electricity with thermal energy. |
| `purchased_hot_water_metering` | purchased-hot-water rows | Energy | MJ | Record delivered thermal energy; when only volume and temperatures are metered, calculate with `calc_hot_water_energy`. |
| `chemical_solution_mass` | detergent and disinfectant rows | Mass | kg solution | Record formulated solution mass and separately retain supplier concentration; do not report active ingredient mass as formulated solution mass. |
| `temperature_compliance` | chilled liver | Temperature | °C | Use calibrated core-temperature readings; all released lots must be 0–3 °C and must not have frozen. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live sheep accepted at the integrated slaughterhouse receiving gate, with upstream husbandry and inbound transport supplied by traceable upstream datasets |
| starting_condition_role | Foreground slaughter input carrying upstream sheep-production and inbound-transport burdens |
| product_classification_scope | CPC 3.0:21155 context; this methodology is restricted to chilled sheep liver |
| recursive_input_rule | If an input already represents edible sheep liver from another facility, do not restart the live-sheep route; link the upstream liver dataset and disclose the transferred starting condition, but such a route is outside this locked PCR |
| upstream_dataset_requirement | Species-, production-system-, geography-, period- and transport-representative live-sheep supply datasets; no generic sheep-offal proxy |
| disclosure | Declare slaughterhouse, reporting period, live-sheep origin, slaughter and inspection regime, organ identity, temperature log, refrigeration technology, wastewater destination, package specification and allocation price basis |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_route_lock` | foreground system | Include only the integrated chilled-sheep-liver route stated in section 1; do not average tissues, fresh/chilled/frozen states or mutually exclusive wastewater and refrigeration routes. | `fao-small-ruminant-slaughter-manual`; `eu-ec-853-2004-meat-hygiene` |
| `sb_upstream_scope` | upstream supply | Include sheep husbandry and inbound transport through traceable upstream datasets attached to `live_sheep_input`; keep those upstream processes outside foreground measurements. | `fao-who-cxc-58-2005-meat-hygiene` |
| `sb_foreground_scope` | slaughterhouse foreground | Include slaughter/evisceration, red-offal separation, liver trimming, potable-water washing, forced-air chilling and cold holding, packaging, sanitation, waste handling and transfer of wastewater to off-site treatment. | `fao-who-cxc-58-2005-meat-hygiene`; `fao-slaughter-meat-processing-guidelines`; `fao-small-ruminant-slaughter-manual` |
| `sb_temperature_gate` | product release | Release only liver with a measured core temperature of 0–3 °C; maintain the cold chain and exclude any frozen lot. | `eu-ec-853-2004-meat-hygiene` |
| `sb_wastewater_route` | wastewater | Model the locked off-site-treatment route: record carrier volume and each listed pollutant load separately at the facility sewer boundary; do not also model a direct elementary discharge. | `ifc-2007-meat-processing-ehs` |
| `sb_exclusions` | downstream stages | Exclude distribution after the factory gate, retail, cooking, consumption, packaging end-of-life and off-site wastewater treatment beyond the transfer boundary. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `slaughter_evisceration` | Sheep slaughter and evisceration | `required` | Always for the locked integrated route | Foreground joint-production process | kg live sheep received and complete slaughter outputs |
| `liver_separation_trimming` | Red-offal separation and liver trimming | `required` | Always for the locked liver route | Foreground organ separation | kg red-offal pluck processed |
| `liver_washing` | Potable-water liver washing | `required` | Always for the locked route | Foreground cleaning | kg trimmed liver input |
| `air_chilling_cold_holding` | Forced-air chilling and cold holding | `required` | Always; central R717 system | Foreground temperature control | kg washed liver entering chilling and holding hours |
| `primary_packaging` | LDPE wrapping and corrugated-fibreboard packing | `required` | Always for the locked packaged gate product | Foreground packaging | kg net chilled liver packed |
| `equipment_sanitation` | Route equipment and room sanitation | `required` | Always; sodium-hydroxide detergent followed by sodium-hypochlorite disinfection | Foreground hygiene support | sanitation event and 1,000 kg reference product |

### Process: Sheep slaughter and evisceration (`slaughter_evisceration`)

#### Inputs

##### Product flows

###### Live sheep received for slaughter (`live_sheep_input`)

Live sheep crossing the slaughterhouse gate are recorded by verified species-specific live weight and linked to upstream husbandry and inbound-transport datasets.

- Selected flow: Live sheep
- Flow property / unit: Mass / kg live weight
- Amount rule: verified receiving-scale live weight for sheep slaughtered in the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_outputs`
- Sources: `fao-who-cxc-58-2005-meat-hygiene`

###### Potable water used in slaughter and evisceration (`slaughter_potable_water`)

Record only potable water used by slaughter and evisceration operations; sanitation water is assigned to `equipment_sanitation`.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: dedicated meter or documented meter allocation for slaughter and evisceration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`
- Sources: `eu-ec-852-2004-food-hygiene`

###### Grid electricity used in slaughter and evisceration (`slaughter_grid_electricity`)

Record imported active electricity for the slaughter floor, evisceration line and directly associated equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered electricity or documented allocation from the facility import meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`

###### Purchased hot water used in slaughter operations (`slaughter_purchased_hot_water`)

This route purchases centrally supplied hot water and uses no on-site combustion for this thermal service.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: delivered thermal-energy meter or `calc_hot_water_energy` from foreground records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_utilities`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dressed sheep carcass co-product (`dressed_sheep_carcass`)

Record saleable dressed carcass mass separately from every offal and by-product output.

- Selected flow: Dressed sheep carcass
- Flow property / unit: Mass / kg
- Amount rule: calibrated hot- or cold-carcass weight with the weighing state disclosed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per slaughter reporting period and per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_outputs`

###### Red-offal pluck sent to organ separation (`red_offal_pluck`)

The liver, heart, lungs and trachea remain a single physically handled pluck at this transfer point; individual tissues are separated in the next process.

- Selected flow: Sheep red-offal pluck
- Flow property / unit: Mass / kg
- Amount rule: measured pluck mass transferred to `liver_separation_trimming`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_outputs`
- Sources: `fao-small-ruminant-slaughter-manual`

###### Sheepskin co-product (`sheepskin_coproduct`)

Record saleable sheepskin mass and destination separately.

- Selected flow: Sheepskin
- Flow property / unit: Mass / kg
- Amount rule: measured dispatched sheepskin mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per slaughter reporting period and per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_outputs`

###### Recovered sheep blood co-product (`recovered_sheep_blood`)

Record only blood collected in a closed system and sold or transferred as a co-product; blood entering wastewater is captured by pollutant measurements instead.

- Selected flow: Recovered sheep blood
- Flow property / unit: Mass / kg
- Amount rule: measured collected blood dispatched as co-product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per slaughter reporting period and per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_mass_outputs`
- Sources: `fao-small-ruminant-slaughter-manual`

##### Waste flows

###### Paunch contents sent to waste management (`paunch_contents_waste`)

Record removed gastrointestinal contents by wet mass and actual destination.

- Selected flow: Sheep paunch contents waste
- Flow property / unit: Mass / kg
- Amount rule: measured container mass net of tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_wastes`
- Sources: `fao-small-ruminant-slaughter-manual`

###### Inedible slaughter trim sent to waste management (`inedible_slaughter_trim_waste`)

Record condemned or inedible solid tissue from slaughter separately from paunch contents and organ-line trim.

- Selected flow: Inedible sheep slaughter trim waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste-container mass net of tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_wastes`

###### Slaughter wastewater carrier sent to off-site treatment (`slaughter_wastewater_carrier`)

Record liquid volume at the off-site sewer transfer boundary; pollutant loads below are constituents of this carrier and are not additional carrier mass.

- Selected flow: Slaughter wastewater to off-site treatment
- Flow property / unit: Volume / m3
- Amount rule: effluent meter volume assigned to slaughter and evisceration
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_slaughter_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### COD in slaughter wastewater (`slaughter_wastewater_cod`)

Record chemical oxygen demand as an individual pollutant load in the wastewater transferred off site.

- Selected flow: Chemical oxygen demand in slaughter wastewater
- Flow property / unit: Mass / kg COD
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and COD concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### Total nitrogen in slaughter wastewater (`slaughter_wastewater_total_nitrogen`)

Record total nitrogen as an individual pollutant load in the wastewater transferred off site.

- Selected flow: Total nitrogen in slaughter wastewater
- Flow property / unit: Mass / kg N
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and total-nitrogen concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### Total phosphorus in slaughter wastewater (`slaughter_wastewater_total_phosphorus`)

Record total phosphorus as an individual pollutant load in the wastewater transferred off site.

- Selected flow: Total phosphorus in slaughter wastewater
- Flow property / unit: Mass / kg P
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and total-phosphorus concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### Total suspended solids in slaughter wastewater (`slaughter_wastewater_tss`)

Record total suspended solids as an individual pollutant load in the wastewater transferred off site.

- Selected flow: Total suspended solids in slaughter wastewater
- Flow property / unit: Mass / kg TSS
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and TSS concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### Oil and grease in slaughter wastewater (`slaughter_wastewater_oil_grease`)

Record oil and grease as an individual pollutant load in the wastewater transferred off site.

- Selected flow: Oil and grease in slaughter wastewater
- Flow property / unit: Mass / kg
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and oil-and-grease concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_slaughter_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

##### Elementary flows

### Process: Red-offal separation and liver trimming (`liver_separation_trimming`)

#### Inputs

##### Product flows

###### Red-offal pluck received from slaughter (`red_offal_pluck_input`)

Use the same batch-linked pluck mass reported by `red_offal_pluck`; no duplicate upstream burden is added.

- Selected flow: Sheep red-offal pluck
- Flow property / unit: Mass / kg
- Amount rule: batch-linked measured transfer mass equal to `red_offal_pluck`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- Sources: `fao-small-ruminant-slaughter-manual`

###### Grid electricity used for separation and trimming (`separation_grid_electricity`)

Record electricity for conveyors, task lighting and powered trimming equipment assigned to this line.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered electricity or documented allocation from the facility import meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Trimmed raw sheep liver (`trimmed_raw_sheep_liver`)

Record liver accepted after veterinary disposition, tissue separation and visible-defect trimming.

- Selected flow: Trimmed raw sheep liver
- Flow property / unit: Mass / kg
- Amount rule: calibrated scale mass after trimming and before washing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- Sources: `fao-slaughter-meat-processing-guidelines`

###### Sheep heart co-product (`sheep_heart_coproduct`)

Record heart output separately; it must never be averaged with liver.

- Selected flow: Edible sheep heart
- Flow property / unit: Mass / kg
- Amount rule: measured accepted heart mass and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per slaughter reporting period and per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- Sources: `fao-small-ruminant-slaughter-manual`

###### Sheep lungs co-product (`sheep_lungs_coproduct`)

Record lungs separately with the actual food, feed or rendering destination.

- Selected flow: Sheep lungs
- Flow property / unit: Mass / kg
- Amount rule: measured lungs mass and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per slaughter reporting period and per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- Sources: `fao-small-ruminant-slaughter-manual`

###### Sheep trachea co-product (`sheep_trachea_coproduct`)

Record the trachea separately with its actual destination.

- Selected flow: Sheep trachea
- Flow property / unit: Mass / kg
- Amount rule: measured trachea mass and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per slaughter reporting period and per 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`

##### Waste flows

###### Inedible liver trim (`inedible_liver_trim`)

Record removed vessels, connective tissue and other non-saleable liver trim separately from rejected whole liver.

- Selected flow: Inedible sheep liver trim waste
- Flow property / unit: Mass / kg
- Amount rule: measured trim-container mass net of tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`

###### Rejected sheep liver (`rejected_sheep_liver`)

Record whole or partial liver rejected after post-mortem disposition separately from routine trim.

- Selected flow: Rejected sheep liver waste
- Flow property / unit: Mass / kg
- Amount rule: measured rejected-liver mass and recorded disposition reason
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_separation_outputs`
- Sources: `fao-who-cxc-58-2005-meat-hygiene`

##### Elementary flows

### Process: Potable-water liver washing (`liver_washing`)

#### Inputs

##### Product flows

###### Trimmed liver entering washing (`trimmed_liver_washing_input`)

Use the same batch-linked mass as `trimmed_raw_sheep_liver`.

- Selected flow: Trimmed raw sheep liver
- Flow property / unit: Mass / kg
- Amount rule: batch-linked measured transfer mass equal to `trimmed_raw_sheep_liver`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_mass_water`

###### Potable washing water (`washing_potable_water`)

Use potable water only and record the meter serving the liver washing line.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: dedicated washing-line meter volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_mass_water`
- Sources: `eu-ec-852-2004-food-hygiene`; `fao-small-ruminant-slaughter-manual`

###### Grid electricity used for liver washing (`washing_grid_electricity`)

Record electricity for the dedicated washing pump and line equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: sub-metered electricity or documented allocation from the facility import meter
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_mass_water`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Washed sheep liver (`washed_sheep_liver`)

Record drained liver mass after potable-water washing and before chilling.

- Selected flow: Washed raw sheep liver
- Flow property / unit: Mass / kg
- Amount rule: calibrated drained-product mass after the declared drip time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_mass_water`

##### Waste flows

###### Washing wastewater carrier sent to off-site treatment (`washing_wastewater_carrier`)

Record washing-effluent volume at the sewer transfer boundary; constituent loads are reported in separate cards.

- Selected flow: Liver-washing wastewater to off-site treatment
- Flow property / unit: Volume / m3
- Amount rule: dedicated effluent meter or validated water-balance volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_washing_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### COD in washing wastewater (`washing_wastewater_cod`)

Record chemical oxygen demand as an individual pollutant load.

- Selected flow: Chemical oxygen demand in liver-washing wastewater
- Flow property / unit: Mass / kg COD
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and COD concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_washing_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### Total nitrogen in washing wastewater (`washing_wastewater_total_nitrogen`)

Record total nitrogen as an individual pollutant load.

- Selected flow: Total nitrogen in liver-washing wastewater
- Flow property / unit: Mass / kg N
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and total-nitrogen concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_washing_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### Total phosphorus in washing wastewater (`washing_wastewater_total_phosphorus`)

Record total phosphorus as an individual pollutant load.

- Selected flow: Total phosphorus in liver-washing wastewater
- Flow property / unit: Mass / kg P
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and total-phosphorus concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_washing_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### Total suspended solids in washing wastewater (`washing_wastewater_tss`)

Record total suspended solids as an individual pollutant load.

- Selected flow: Total suspended solids in liver-washing wastewater
- Flow property / unit: Mass / kg TSS
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and TSS concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_washing_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### Oil and grease in washing wastewater (`washing_wastewater_oil_grease`)

Record oil and grease as an individual pollutant load.

- Selected flow: Oil and grease in liver-washing wastewater
- Flow property / unit: Mass / kg
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and oil-and-grease concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_washing_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

##### Elementary flows

### Process: Forced-air chilling and cold holding (`air_chilling_cold_holding`)

#### Inputs

##### Product flows

###### Washed liver entering chilling (`washed_liver_chilling_input`)

Use the same batch-linked mass as `washed_sheep_liver`.

- Selected flow: Washed raw sheep liver
- Flow property / unit: Mass / kg
- Amount rule: batch-linked measured transfer mass equal to `washed_sheep_liver`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_energy_temperature`

###### Grid electricity used for chilling and cold holding (`chilling_grid_electricity`)

Record electricity for compressors, fans, pumps and the allocated share of cold holding; do not include other facility refrigeration loads.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: refrigeration sub-meter energy allocated by measured liver chamber load and holding time
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_energy_temperature`

###### Ammonia refrigerant replenishment (`ammonia_refrigerant_replenishment`)

The locked central refrigeration system uses anhydrous ammonia (R717); record replenishment attributable to this product route from the annual refrigerant balance.

- Selected flow: Anhydrous ammonia refrigerant (R717)
- Flow property / unit: Mass / kg
- Amount rule: `calc_refrigerant_loss` allocated by metered refrigeration electricity share
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled sheep liver (`chilled_sheep_liver`)

Record batch mass and core-temperature readings after forced-air chilling and before packaging.

- Selected flow: Chilled sheep liver
- Flow property / unit: Mass / kg
- Amount rule: calibrated mass of lots meeting 0–3 °C core-temperature and never-frozen criteria
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chilling_energy_temperature`
- Sources: `eu-ec-853-2004-meat-hygiene`; `fao-meat-cold-store-manual`

##### Waste flows

##### Elementary flows

###### Ammonia refrigerant emitted to air (`ammonia_refrigerant_to_air`)

Report the R717 loss calculated from the same closed refrigerant inventory as the replenishment input; do not create a generic refrigerant card.

- Selected flow: Ammonia to air from R717 refrigeration leakage
- Flow property / unit: Mass / kg NH3
- Amount rule: `calc_refrigerant_loss` allocated by metered refrigeration electricity share
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_refrigerant_inventory`

### Process: LDPE wrapping and corrugated-fibreboard packing (`primary_packaging`)

#### Inputs

##### Product flows

###### Chilled liver entering packaging (`chilled_liver_packaging_input`)

Use the same accepted-lot mass as `chilled_sheep_liver`.

- Selected flow: Chilled sheep liver
- Flow property / unit: Mass / kg
- Amount rule: batch-linked measured transfer mass equal to `chilled_sheep_liver`
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`

###### LDPE primary packaging film (`ldpe_film_input`)

Record low-density polyethylene film net of returned unused stock; do not combine it with fibreboard.

- Selected flow: Low-density polyethylene film
- Flow property / unit: Mass / kg
- Amount rule: opening inventory plus receipts minus closing inventory minus separately measured trim waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `eu-ec-852-2004-food-hygiene`

###### Corrugated-fibreboard secondary cartons (`corrugated_fibreboard_input`)

Record corrugated-fibreboard carton mass separately from LDPE film.

- Selected flow: Corrugated fibreboard
- Flow property / unit: Mass / kg
- Amount rule: opening inventory plus receipts minus closing inventory minus separately measured trim waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_materials`
- Sources: `eu-ec-852-2004-food-hygiene`

###### Grid electricity used for packaging (`packaging_grid_electricity`)

Record electricity for sealing, labelling and carton handling.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: packaging-line sub-meter or documented equipment-runtime calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_energy`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged chilled sheep liver (`packaged_chilled_sheep_liver`)

This is the sole reference-product row. The 1,000 kg amount is net liver mass and excludes LDPE and fibreboard tare.

- Selected flow: Edible offal of sheep, fresh, chilled or frozen `1f8ad4d0-18e1-4ee6-8006-0d578c5e07eb`
- Flow property / unit: Mass / kg
- Amount rule: 1,000 kg net packaged chilled sheep liver
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)

##### Waste flows

###### LDPE packaging trim waste (`ldpe_trim_waste`)

Record LDPE film trim and rejected film separately from fibreboard waste.

- Selected flow: Low-density polyethylene packaging trim waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste-bin mass net of tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`

###### Corrugated-fibreboard trim waste (`corrugated_fibreboard_trim_waste`)

Record damaged cartons and fibreboard trim separately from LDPE waste.

- Selected flow: Corrugated-fibreboard packaging waste
- Flow property / unit: Mass / kg
- Amount rule: measured waste-bin mass net of tare
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_waste`

##### Elementary flows

### Process: Route equipment and room sanitation (`equipment_sanitation`)

#### Inputs

##### Product flows

###### Potable sanitation water (`sanitation_potable_water`)

Record cold potable water used for cleaning and final rinsing across the foreground route.

- Selected flow: Potable water
- Flow property / unit: Volume / m3
- Amount rule: sanitation meter volume or event-level measured volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `eu-ec-852-2004-food-hygiene`

###### Purchased hot water for sanitation (`sanitation_purchased_hot_water`)

Record purchased hot-water thermal energy separately from cold water and electricity.

- Selected flow: Purchased hot water
- Flow property / unit: Energy / MJ
- Amount rule: delivered thermal-energy meter or `calc_hot_water_energy` from event records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `fao-slaughter-meat-processing-guidelines`

###### Grid electricity used for sanitation (`sanitation_grid_electricity`)

Record electricity for sanitation pumps, foamers and related equipment.

- Selected flow: Grid electricity
- Flow property / unit: Energy / kWh
- Amount rule: sanitation sub-meter or documented equipment-runtime calculation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`

###### Sodium-hydroxide-based alkaline detergent (`sodium_hydroxide_detergent`)

The locked sanitation route uses one formulated sodium-hydroxide-based alkaline detergent; record solution mass and concentration separately.

- Selected flow: Sodium-hydroxide-based alkaline detergent solution
- Flow property / unit: Mass / kg solution
- Amount rule: purchase and issue records reconciled to sanitation events
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `eu-ec-852-2004-food-hygiene`

###### Sodium-hypochlorite disinfectant (`sodium_hypochlorite_disinfectant`)

The locked sanitation route uses one formulated sodium-hypochlorite solution after cleaning; record solution mass and available-chlorine concentration separately.

- Selected flow: Sodium hypochlorite disinfectant solution
- Flow property / unit: Mass / kg solution
- Amount rule: purchase and issue records reconciled to sanitation events
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_inputs`
- Sources: `eu-ec-852-2004-food-hygiene`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Sanitation wastewater carrier sent to off-site treatment (`sanitation_wastewater_carrier`)

Record sanitation-effluent volume at the sewer transfer boundary; constituent pollutant loads are separate cards.

- Selected flow: Sanitation wastewater to off-site treatment
- Flow property / unit: Volume / m3
- Amount rule: dedicated effluent meter or validated water-balance volume
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### COD in sanitation wastewater (`sanitation_wastewater_cod`)

Record chemical oxygen demand as an individual pollutant load.

- Selected flow: Chemical oxygen demand in sanitation wastewater
- Flow property / unit: Mass / kg COD
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and COD concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### Total nitrogen in sanitation wastewater (`sanitation_wastewater_total_nitrogen`)

Record total nitrogen as an individual pollutant load.

- Selected flow: Total nitrogen in sanitation wastewater
- Flow property / unit: Mass / kg N
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and total-nitrogen concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### Total phosphorus in sanitation wastewater (`sanitation_wastewater_total_phosphorus`)

Record total phosphorus as an individual pollutant load.

- Selected flow: Total phosphorus in sanitation wastewater
- Flow property / unit: Mass / kg P
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and total-phosphorus concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### Total suspended solids in sanitation wastewater (`sanitation_wastewater_tss`)

Record total suspended solids as an individual pollutant load.

- Selected flow: Total suspended solids in sanitation wastewater
- Flow property / unit: Mass / kg TSS
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and TSS concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### Oil and grease in sanitation wastewater (`sanitation_wastewater_oil_grease`)

Record oil and grease as an individual pollutant load.

- Selected flow: Oil and grease in sanitation wastewater
- Flow property / unit: Mass / kg
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and oil-and-grease concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `ifc-2007-meat-processing-ehs`

###### Total residual chlorine in sanitation wastewater (`sanitation_wastewater_residual_chlorine`)

Record total residual chlorine separately because the locked route uses sodium hypochlorite.

- Selected flow: Total residual chlorine in sanitation wastewater
- Flow property / unit: Mass / kg as Cl2
- Amount rule: `calc_wastewater_pollutant_load` using matched volume and total-residual-chlorine concentration records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg packaged chilled sheep liver
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_sanitation_wastewater`
- Sources: `us-epa-2004-meat-effluent-development`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `alloc_subdivide_direct_operations` | `liver_washing`; `air_chilling_cold_holding`; `primary_packaging` | Attribute metered post-separation liver operations directly to liver; do not dilute these burdens across carcass, skin or other organs. | `bamber-et-al-2026-allocation-review` |
| `alloc_joint_block_definition` | `slaughter_evisceration`; `liver_separation_trimming` | Treat slaughter through completion of organ separation as one joint-production block when its shared inputs cannot be subdivided; retain separate measured masses and destinations for carcass, liver, heart, lungs, trachea, sheepskin and recovered blood. | `le-feon-2020-meat-coproduct-allocation` |
| `alloc_primary_economic` | joint-production block | Apply `calc_economic_allocation` using contemporaneous net ex-works revenue for every marketable output at the common separation gate. Waste and legally condemned material receive no co-product share; their handling burden remains with the joint block. | `eu-pef-2013-allocation-hierarchy`; `le-feon-2020-meat-coproduct-allocation` |
| `alloc_price_evidence` | co-product price ledger | Use invoiced net prices and saleable masses for the same reporting period, currency and gate; disclose zero-price, internal-transfer and missing-price treatment. Do not infer a liver price from another organ. | `eu-pef-2013-allocation-hierarchy` |
| `alloc_economic_sensitivity` | liver allocation result | Recalculate the liver share using every observed monthly net price in the reporting period and report the minimum, maximum and mass-weighted base result; if fewer than 12 months exist, report all observed months and the evidence gap without inventing prices. | `le-feon-2020-meat-coproduct-allocation`; `bamber-et-al-2026-allocation-review` |
| `alloc_method_sensitivity` | liver allocation result | Also report mass-based allocation across marketable outputs and, only when tissue-growth data support it, a biophysical allocation result; keep these as sensitivity scenarios and do not merge them with the primary economic result. | `le-feon-2020-meat-coproduct-allocation`; `bamber-et-al-2026-allocation-review` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_slaughter_mass_outputs` | `slaughter_evisceration` | live sheep and joint-product masses | receiving, scale and dispatch records | batch_id; slaughter_date; live_weight_kg; carcass_mass_kg; pluck_mass_kg; sheepskin_mass_kg; recovered_blood_mass_kg; scale_id; weighing_state | calibrated scales linked by slaughter batch | kg | every slaughter batch | complete reporting period | target slaughterhouse | sum each atomic output by row_id; preserve batch links | calibration certificates; receiving tickets; dispatch records; reconciliation sign-off |
| `cp_slaughter_utilities` | `slaughter_evisceration` | water, electricity and purchased hot water | meter records | timestamp; meter_id; potable_water_m3; grid_electricity_kWh; hot_water_energy_MJ; hot_water_volume_m3; supply_temperature_C; return_temperature_C; allocation_driver | dedicated meters; documented meter allocation only when no sub-meter exists | m3; kWh; MJ; °C | daily or finer | complete reporting period | slaughter and evisceration line | sum readings by utility; subtract verified non-route loads | meter calibration; invoices; allocation worksheet |
| `cp_slaughter_wastes` | `slaughter_evisceration` | paunch contents and inedible trim | waste container and consignment records | date; batch_id; waste_row_id; gross_mass_kg; tare_mass_kg; destination; manifest_id | calibrated container scale and waste consignment record | kg | every consignment | complete reporting period | slaughter floor | sum net mass separately by row_id and destination | scale checks; waste manifests; contractor receipts |
| `cp_slaughter_wastewater` | `slaughter_evisceration` | wastewater carrier and pollutant loads | flow meter and laboratory records | sample_id; start_time; end_time; wastewater_volume_m3; COD_mg_L; TN_mg_L; TP_mg_L; TSS_mg_L; oil_grease_mg_L; laboratory_method; sewer_destination | flow-proportional composite sampling matched to effluent volume | m3; mg/L | representative composite per production day or permit frequency, whichever is stricter | complete reporting period | slaughter wastewater substream before sewer mixing | calculate each pollutant with `calc_wastewater_pollutant_load`; volume-weight across samples | accredited laboratory reports; meter calibration; chain of custody |
| `cp_separation_outputs` | `liver_separation_trimming` | pluck input, tissue outputs, trim, rejection and electricity | batch scale, disposition and meter records | batch_id; pluck_input_kg; trimmed_liver_kg; heart_kg; lungs_kg; trachea_kg; inedible_trim_kg; rejected_liver_kg; rejection_reason; destination; electricity_kWh | calibrated scales, veterinary disposition records and sub-meter | kg; kWh | every batch; electricity daily or finer | complete reporting period | red-offal separation line | sum each atomic row_id; reconcile tissue outputs and wastes to pluck input | scale calibration; inspection record; signed mass-balance review |
| `cp_washing_mass_water` | `liver_washing` | liver mass, potable water and electricity | batch scale and meter records | batch_id; trimmed_liver_input_kg; washed_liver_drained_kg; drip_time_min; potable_water_m3; electricity_kWh; meter_id | calibrated scales and dedicated meters | kg; min; m3; kWh | every batch; meters daily or finer | complete reporting period | liver washing line | sum by row_id; preserve batch transfer equality | calibration records; potable-water compliance record; batch sheet |
| `cp_washing_wastewater` | `liver_washing` | washing wastewater and pollutant loads | flow meter and laboratory records | sample_id; start_time; end_time; wastewater_volume_m3; COD_mg_L; TN_mg_L; TP_mg_L; TSS_mg_L; oil_grease_mg_L; laboratory_method; sewer_destination | flow-proportional composite sampling matched to washing volume | m3; mg/L | representative composite per production day or permit frequency, whichever is stricter | complete reporting period | liver washing substream before sewer mixing | calculate each pollutant with `calc_wastewater_pollutant_load`; volume-weight across samples | accredited laboratory reports; meter calibration; chain of custody |
| `cp_chilling_energy_temperature` | `air_chilling_cold_holding` | liver mass, electricity, temperature and holding time | batch, sub-meter and temperature logger records | lot_id; washed_liver_input_kg; chilled_liver_output_kg; chamber_id; entry_time; release_time; holding_hours; core_temperature_C; air_temperature_C; electricity_kWh; freezing_deviation | calibrated core probes, continuous air logger and refrigeration sub-meter | kg; h; °C; kWh | every lot; continuous temperature | complete reporting period | R717 liver chilling chamber | accept only lots with all release core readings 0–3 °C and no freezing; sum route electricity | probe calibration; logger audit trail; sub-meter calibration; deviation log |
| `cp_refrigerant_inventory` | `air_chilling_cold_holding` | R717 replenishment and air loss | refrigerant inventory and service records | period_start; opening_charge_kg; purchases_kg; transfers_in_kg; closing_charge_kg; recovered_kg; returned_kg; transfers_out_kg; service_event; total_refrigeration_kWh; liver_route_refrigeration_kWh | closed annual refrigerant mass balance reconciled to service invoices | kg; kWh | every service event and annual close | same reporting period as product dataset | central R717 system and liver-route allocation | calculate total loss with `calc_refrigerant_loss`; allocate by metered refrigeration electricity share | technician records; purchase invoices; recovery receipts; signed balance |
| `cp_packaging_materials` | `primary_packaging` | chilled liver, LDPE and fibreboard | batch and material inventory records | lot_id; chilled_liver_input_kg; packaged_net_liver_kg; material_row_id; opening_stock_kg; receipts_kg; closing_stock_kg; returned_stock_kg; trim_waste_kg | calibrated product scale and material inventory reconciliation | kg | every lot; material inventory monthly | complete reporting period | liver packaging line | calculate consumption separately by material row_id; exclude packaging tare from reference mass | scale calibration; purchase invoices; stock count; reconciliation worksheet |
| `cp_packaging_energy` | `primary_packaging` | packaging electricity | meter or equipment-runtime records | date; meter_id; electricity_kWh; equipment_id; rated_power_kW; runtime_h; allocation_driver | line sub-meter; runtime calculation only if sub-meter unavailable | kWh; kW; h | daily or finer | complete reporting period | liver packaging line | sum sub-meter; otherwise sum rated_power_kW * runtime_h with disclosed load factor from measured evidence | meter check; equipment log; calculation review |
| `cp_packaging_waste` | `primary_packaging` | LDPE and fibreboard waste | waste-bin and consignment records | date; waste_row_id; gross_mass_kg; tare_mass_kg; destination; manifest_id | dedicated labelled bins and calibrated scale | kg | every waste removal | complete reporting period | liver packaging line | sum net mass separately by material row_id | scale check; waste manifest; bin labelling audit |
| `cp_sanitation_inputs` | `equipment_sanitation` | water, hot water, electricity, detergent and disinfectant | sanitation event, meter and chemical issue records | event_id; start_time; end_time; potable_water_m3; hot_water_energy_MJ; hot_water_volume_m3; supply_temperature_C; return_temperature_C; electricity_kWh; detergent_solution_kg; detergent_NaOH_mass_fraction; hypochlorite_solution_kg; available_chlorine_mass_fraction; covered_area | event-level meters and reconciled chemical issue records | m3; MJ; °C; kWh; kg solution; mass fraction | every sanitation event | complete reporting period | all route equipment and rooms | sum each atomic input; retain concentration and covered-area evidence | sanitation log; meter calibration; supplier certificate; stock reconciliation |
| `cp_sanitation_wastewater` | `equipment_sanitation` | sanitation wastewater and pollutant loads | flow meter and laboratory records | sample_id; start_time; end_time; wastewater_volume_m3; COD_mg_L; TN_mg_L; TP_mg_L; TSS_mg_L; oil_grease_mg_L; residual_chlorine_mg_L; laboratory_method; sewer_destination | flow-proportional composite sampling matched to sanitation volume; grab sample for residual chlorine when method requires | m3; mg/L | representative sample per sanitation regime and permit frequency, whichever is stricter | complete reporting period | sanitation substream before sewer mixing | calculate each pollutant with `calc_wastewater_pollutant_load`; volume-weight across samples | accredited laboratory reports; meter calibration; chain of custody |
| `cp_coproduct_prices` | `slaughter_evisceration` | economic allocation evidence | sales invoice and internal transfer ledger | month; product_row_id; saleable_mass_kg; gross_revenue; rebates; transport_after_gate; net_exworks_revenue; currency; exchange_rate; invoice_id; zero_price_reason | invoice reconciliation at common separation gate; no cross-organ price proxy | kg; currency | every sale; monthly close | same reporting period, normally 12 consecutive months | all marketable outputs of the joint-production block | mass-weighted net price by product_row_id; preserve every observed monthly price for sensitivity | invoices; audited ledger; exchange-rate source; signed zero-price review |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all inventory rows | normalized_amount = period_amount / packaged_net_liver_kg * 1000 | period_amount; packaged_net_liver_kg | amount per 1,000 kg reference product |  |
| `calc_hot_water_energy` | purchased hot water | hot_water_energy_MJ = water_mass_kg * specific_heat_MJ_per_kgK * (supply_temperature_C - return_temperature_C) | hot_water_volume_m3; measured density; supply_temperature_C; return_temperature_C; accepted specific heat | MJ delivered thermal energy |  |
| `calc_wastewater_pollutant_load` | each wastewater pollutant row | pollutant_load_kg = wastewater_volume_m3 * concentration_mg_L / 1000 | matched wastewater_volume_m3; pollutant-specific concentration_mg_L | kg pollutant transferred to off-site treatment | `ifc-2007-meat-processing-ehs` |
| `calc_refrigerant_loss` | R717 input and air output | refrigerant_loss_kg = opening_charge_kg + purchases_kg + transfers_in_kg - closing_charge_kg - recovered_kg - returned_kg - transfers_out_kg; liver_route_loss_kg = refrigerant_loss_kg * liver_route_refrigeration_kWh / total_refrigeration_kWh | closed refrigerant inventory; liver-route and total refrigeration electricity | kg R717 replenishment and kg NH3 to air assigned to liver route |  |
| `calc_joint_mass_balance` | slaughter and separation joint block | mass_balance_gap_kg = live_weight_kg - sum(all measured product and waste output masses) - measured_evaporation_or_untracked_liquid_kg | every atomic mass output; live_weight_kg; disclosed untracked liquid or evaporation term | kg and percent mass-balance gap |  |
| `calc_liver_yield` | liver route | liver_yield = packaged_net_liver_kg / live_weight_kg | packaged_net_liver_kg; live_weight_kg | kg packaged chilled liver per kg live sheep |  |
| `calc_economic_allocation` | joint-production block | AF_i = max(net_exworks_revenue_i, 0) / sum_j(max(net_exworks_revenue_j, 0)); net_exworks_revenue_i = saleable_mass_i * net_exworks_price_i | saleable mass and contemporaneous net ex-works price for each marketable product_row_id | allocation fraction for each marketable output | `eu-pef-2013-allocation-hierarchy`; `le-feon-2020-meat-coproduct-allocation` |
| `calc_liver_joint_burden` | chilled sheep liver | liver_joint_burden = AF_liver * total_joint_block_burden; add direct post-separation liver burdens without allocation | AF_liver; joint block inventory and impacts; direct liver operations | allocated upstream and slaughter burden plus direct liver burden | `le-feon-2020-meat-coproduct-allocation` |
| `calc_economic_sensitivity` | liver allocation | recompute AF_liver for each observed monthly price vector; report base mass-weighted AF_liver, minimum AF_liver and maximum AF_liver with the associated month and price vector | monthly `cp_coproduct_prices` records | reproducible economic-allocation sensitivity interval | `le-feon-2020-meat-coproduct-allocation`; `bamber-et-al-2026-allocation-review` |
| `calc_mass_allocation_sensitivity` | joint-production block | mass_AF_i = saleable_mass_i / sum_j(saleable_mass_j) for the same marketable-output set | saleable mass by product_row_id | mass-allocation sensitivity result | `le-feon-2020-meat-coproduct-allocation` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | full dataset | Dataset metadata must declare sheep liver, chilled 0–3 °C, never frozen, forced-air R717 refrigeration, LDPE plus fibreboard packaging and off-site wastewater treatment. | lot specification; process map; signed route declaration |
| `dq_temporal_match` | all records | Product, utilities, wastes, wastewater, refrigerant inventory and price evidence must cover the same reporting period; disclose any justified gap. | date-range reconciliation |
| `dq_mass_traceability` | slaughter through packaging | Preserve batch or lot links through every intermediate liver row and reconcile all joint outputs by atomic row_id. | batch ledger; `calc_joint_mass_balance` review |
| `dq_meter_quality` | utilities and wastewater | Use calibrated meters; disclose estimation only when a named meter is unavailable and retain the allocation worksheet. | calibration certificate; meter register; worksheet |
| `dq_temperature_quality` | chilled liver | Use calibrated core probes and continuous chamber logs; retain every deviation and disposition. | logger file; probe certificate; release record |
| `dq_water_hygiene` | washing and sanitation | Potable-water status and cleaning/disinfection records must be valid for the reporting period. | potable-water certificate; sanitation verification |
| `dq_pollutant_sampling` | wastewater | Match concentration samples to volume and operating regime; do not use permit limits as measured concentrations. | chain of custody; accredited laboratory report; sampling plan |
| `dq_price_audit` | allocation | Prices must be organ-specific, contemporaneous, net ex-works and invoice-reconciled; retain all months used in sensitivity. | invoice ledger; monthly price vector; audit sign-off |
| `dq_no_default_amounts` | all non-reference rows | Missing quantities remain explicit evidence gaps; they must not be filled with generic PCR defaults. | completeness register keyed by row_id |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | reference flow | Require the exact Tiangong UUID, Mass property UUID, 1,000 kg net amount and all required qualifiers. |  |
| `val_single_tissue_state` | product identity | Reject organ averaging, mixed-offal reference products, fresh liver, frozen liver or any lot with freezing history. |  |
| `val_process_completion` | process map | Require all six processes in the declared order and a detailed section for every process_id. |  |
| `val_atomic_rows` | process inventory | Require one card per actual material, utility, chemical, refrigerant, packaging material, co-product, waste, wastewater pollutant and air emission; reject aggregate cards such as energy, materials, chemicals, packaging, wastes or emissions. |  |
| `val_uuid_policy` | flow identity | Permit a flow UUID only on `packaged_chilled_sheep_liver`; require every other atomic flow UUID to remain blank pending separate reviewed identity selection. |  |
| `val_transfer_equality` | intermediate liver and pluck rows | Require batch-linked output/input equality at every adjacent process transfer; differences must be represented as a named product or waste row, not hidden loss. |  |
| `val_mass_balance` | joint-production block | Calculate and disclose the mass-balance gap and every included term; unexplained differences make completeness inconclusive. |  |
| `val_temperature` | product release | Reject lots without calibrated core readings or with any release reading below 0 °C or above 3 °C; retain evidence that product never froze. | `eu-ec-853-2004-meat-hygiene` |
| `val_refrigerant_balance` | R717 system | Require a closed inventory and equality of allocated R717 replenishment input and ammonia-to-air loss unless documented recovery, return or transfer terms explain the difference. |  |
| `val_wastewater_no_double_count` | wastewater | Require carrier volume and each pollutant load as separate rows; because wastewater is transferred off site, reject simultaneous direct-to-water elementary emissions for the same load. | `ifc-2007-meat-processing-ehs` |
| `val_allocation_ledger` | joint-production block | Require masses, destinations and price records for carcass, liver, heart, lungs, trachea, sheepskin and recovered blood, plus explicit treatment of zero-price and waste outputs. | `le-feon-2020-meat-coproduct-allocation` |
| `val_allocation_sensitivity` | liver burden | Require reproducible monthly economic sensitivity and mass-allocation sensitivity; do not accept a single undocumented economic fraction. | `le-feon-2020-meat-coproduct-allocation`; `bamber-et-al-2026-allocation-review` |
| `val_foreground_amounts` | non-reference amounts | Require `foreground_record` or `calculated_value`, its collection protocol, and reporting-period evidence; reject uncited generic defaults. |  |
| `val_bilingual_structure` | PCR source | Require identical ordered process_id, row_id, controlled token, formula, numeric value, UUID, URL, source_id and collection-protocol field sequences in en-US and zh-CN. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; eligible as `background_dataset` only after independent methodology and data-quality review |
| downstream_use | Foreground data packages and downstream `process` or `lifecyclemodel` projections for packaged chilled sheep liver at the processing-facility gate |
| allowed_use | Studies whose species, tissue, chilled state, integrated slaughter route, refrigeration, packaging, wastewater boundary, geography and period are demonstrably representative |
| excluded_use | Other organs; mixed offal; fresh or frozen liver; goat offal; cooked products; retail or consumption stages; facilities using materially different refrigeration or wastewater routes without adaptation |
| required_metadata | all required qualifiers; site and period; live-sheep origin; process map; meter coverage; inspection regime; temperature evidence; package specification; wastewater destination; R717 balance; allocation ledger and sensitivities |
| required_quality_disclosure | data coverage by row_id; mass-balance gap; estimated meter shares; sampling representativeness; temperature deviations; refrigerant balance; missing-price months; allocation sensitivity results |
| update_trigger | change in organ or temperature scope, slaughter route, refrigeration technology, wastewater destination, package materials, hygiene chemicals, regulation, Tiangong reference identity, or material co-product price structure |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-who-cxc-58-2005-meat-hygiene` | `official_guidance` | Codex Alimentarius, CXC 58-2005, Code of Hygienic Practice for Meat. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B58-2005%252FCXC_058e.pdf (retrieved 2026-08-13) | slaughter hygiene, inspection, cross-contamination control, temperature records and traceability |
| `eu-ec-853-2004-meat-hygiene` | `standard` | Regulation (EC) No 853/2004, specific hygiene rules for food of animal origin. https://eur-lex.europa.eu/eli/reg/2004/853/oj/eng (retrieved 2026-08-13) | offal chilling to no more than 3 °C, cold-chain and packaging/storage controls |
| `eu-ec-852-2004-food-hygiene` | `standard` | Regulation (EC) No 852/2004, hygiene of foodstuffs. https://eur-lex.europa.eu/eli/reg/2004/852/oj/eng (retrieved 2026-08-13) | potable water, equipment cleaning/disinfection, waste handling and packaging hygiene |
| `fao-small-ruminant-slaughter-manual` | `handbook` | FAO, Manual for the slaughter of small ruminants in developing countries, Chapters 7–8. https://www.fao.org/4/x6552e/X6552E07.htm and https://www.fao.org/4/x6552e/X6552E08.htm (retrieved 2026-08-13) | liver as red offal, separate offal cleaning, organ separation, waste and chilling route decomposition |
| `fao-slaughter-meat-processing-guidelines` | `handbook` | FAO, Guidelines for slaughtering, meat cutting and further processing. https://www.fao.org/4/t0279e/T0279E04.htm (retrieved 2026-08-13) | inspection, trimming, minimum clean-water washing and immediate refrigeration |
| `fao-meat-cold-store-manual` | `handbook` | FAO, Manual on meat cold store operation and management. https://www.fao.org/4/T0098E/T0098E02.htm (retrieved 2026-08-13) | primary chilling endpoint and separate control of edible offal |
| `ifc-2007-meat-processing-ehs` | `official_guidance` | IFC / World Bank Group, Environmental, Health, and Safety Guidelines for Meat Processing, 2007. https://www.ifc.org/content/dam/ifc/doc/2000/2007-meat-processing-ehs-guidelines-en.pdf (retrieved 2026-08-13) | separate water, energy, waste and wastewater pollutant records; COD, TN, TP, TSS and oil-and-grease parameters |
| `us-epa-2004-meat-effluent-development` | `official_guidance` | US EPA, Technical Development Document for the Final Effluent Limitations Guidelines and Standards for the Meat and Poultry Products Point Source Category, 2004. https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P100Q1U2.TXT (retrieved 2026-08-13) | total residual chlorine as a distinct meat-processing wastewater parameter |
| `eu-pef-2013-allocation-hierarchy` | `official_guidance` | European Commission Recommendation 2013/179/EU on Product Environmental Footprint methods. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32013H0179 (retrieved 2026-08-13) | subdivision priority, physical relationship and documented economic-allocation fallback |
| `le-feon-2020-meat-coproduct-allocation` | `literature` | Le Féon, S. et al. (2020), Allocation factors for meat coproducts: Dataset to perform life cycle assessment at slaughterhouse. Data in Brief 33:106558. https://doi.org/10.1016/j.dib.2020.106558 | lamb slaughter co-product mass, economic and biophysical allocation and sensitivity evidence |
| `bamber-et-al-2026-allocation-review` | `literature` | Bamber, N., Kroebel, R. and Pelletier, N. (2026), Allocation in field crop and livestock life cycle assessment. International Journal of Life Cycle Assessment. https://doi.org/10.1007/s11367-026-02618-z | allocation hierarchy, causal alternatives and price-volatility sensitivity |
