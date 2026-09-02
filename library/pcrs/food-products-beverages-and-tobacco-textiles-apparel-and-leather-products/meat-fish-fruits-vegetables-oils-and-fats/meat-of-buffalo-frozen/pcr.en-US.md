---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-buffalo-frozen
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Meat of buffalo, frozen

## 1. Scope and Applicability

This PCR models one representative factory-gate route for **packed, deboned, quick-frozen buffalo meat** produced in an integrated slaughter and meat-processing plant. The foreground starts with live buffalo accepted at the plant and follows lairage, slaughter and dressing, carcass chilling, cutting and deboning, packaging, blast freezing, frozen storage, and plant hygiene. The declared product is not a carcass, bone-in cut, edible offal, minced or mechanically separated meat, or a weighted average of those products.

The upstream production and inbound transport of live buffalo, production of electricity, fuels, water, chemicals and packaging, treatment of exported wastes and wastewater, outbound transport, retail, thawing, cooking and consumption are outside the foreground. They remain recursive inputs or downstream datasets when a cradle-to-gate or life-cycle model is assembled. The product must have reached a thermal centre temperature of `-18 °C` or colder after thermal stabilization and remain at `-18 °C` or colder in frozen storage (`fao-who-cxc-8-1976`).

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-buffalo-frozen` |
| classification_refs | CPC 3.0 `21132`, “Meat of buffalo, frozen” (`unsd-cpc-3-0-2025`) |
| covered_products | Uncooked, packed, deboned skeletal buffalo meat that is quick-frozen and dispatched from frozen storage |
| excluded_products | Fresh or chilled buffalo meat; carcasses; bone-in cuts; edible offal; minced, mechanically separated, cured, cooked or otherwise prepared meat; mixed-species products |
| representative_product | Commercial deboned buffalo cuts and trimmings packed as one frozen product grade; saleable bones, fat, hide, blood and edible offal remain separate co-products |
| production_route | Integrated plant: live-animal receiving and lairage → slaughter and dressing → carcass chilling → cutting and deboning → packaging → blast freezing and frozen storage → factory gate |
| market_state | Frozen, packed, uncooked, deboned product at the producing plant gate |

The CPC explanatory-note PDF contains an internal inconsistency: the class title and exclusion identify frozen buffalo meat, while one inclusion line says “fresh or chilled.” This PCR follows the official class title and explicit fresh-or-chilled exclusion; the inconsistency is disclosed for review (`unsd-cpc-3-0-2025`).

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Packed, deboned, quick-frozen buffalo meat from the declared integrated route |
| How much | `1,000 kg` net product mass, excluding pallet and transport packaging |
| How well | Buffalo species declared; deboned; uncooked; primary and outer packaging declared; thermal centre `≤ -18 °C`; no carcass, bone-in meat, edible offal or other co-product included |
| How long or cycle | One production lot through blast freezing plus the declared number of frozen-storage tonne-days before the factory-gate transfer |
| reference_flow_link | Tiangong Product flow `be81d099-544d-4fdf-be56-81f76427d52f` |

| Field | Value |
| --- | --- |
| Reference amount | `1,000 kg` |
| Reference product flow | `Meat of buffalo, frozen` / `冷冻水牛肉`; Tiangong UUID `be81d099-544d-4fdf-be56-81f76427d52f` |
| Reference flow property | Mass; Tiangong UUID `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | `kg` |
| Required qualifiers | `species_or_commercial_buffalo_designation`; `deboned=true`; `uncooked=true`; `freezing_method`; `thermal_centre_temperature_c`; `frozen_storage_temperature_c`; `frozen_storage_duration_days`; `net_product_mass_kg`; `primary_packaging`; `outer_packaging`; `plant_geography`; `reference_period`; `co_product_allocation_method` |

When constructing a foreground data package, every required qualifier must be declared in metadata, process notes, the reference-flow comment, product description, or an equivalent field. The product-flow UUID identifies the CPC product class; it does not by itself prove the deboned route qualifier.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `mu_mass` | Animals, meat, carcass, co-products, wastes, packaging and chemicals | Mass | `kg` | Use calibrated scale records; report wet/as-received mass and do not mix carcass, bone-in and deboned product masses. |
| `mu_water` | Potable and process water; wastewater | Volume | `m3` | Use line or area meters corrected for opening and closing inventories; wastewater may use a calibrated discharge meter or a documented water balance. |
| `mu_electricity` | Electricity | Energy | `kWh` | Use submetered import by process; where one meter serves loads, allocate by measured runtime and rated or logged load and disclose the calculation. |
| `mu_fuel` | Natural gas | Net calorific energy | `MJ` | Convert metered fuel volume or mass using a supplier or jurisdiction-specific net calorific value for the same period. |
| `mu_temperature` | Product thermal centre and cold-room air | Temperature | `°C` | Use calibrated sensors and retained time-stamped records; confirm the product thermal centre reaches `≤ -18 °C` after stabilization. |
| `mu_storage` | Frozen storage | Mass-time | `tonne-day` | Multiply daily mean net frozen-product inventory in tonnes by elapsed storage days. |
| `mu_refrigerant` | Ammonia make-up and release | Mass | `kg` | Reconcile opening/closing charge, additions and recovery; do not infer zero release from a missing log. |
| `mu_air_emission` | Fossil carbon dioxide and nitrogen oxides | Mass | `kg` | Use source-specific measurement where available; otherwise use fuel use and an identified jurisdictional factor, keeping pollutant identities separate. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Live buffalo accepted at the integrated plant receiving point after inbound transport |
| starting_condition_role | External product input to `animal_receiving_lairage` |
| product_classification_scope | Only CPC 3.0 `21132` frozen buffalo meat with the additional deboned, packed and uncooked route qualifiers |
| recursive_input_rule | Upstream datasets are required for live buffalo, electricity, natural gas, potable water supply, cleaning chemicals, refrigerant and packaging when constructing broader models |
| upstream_dataset_requirement | Geography-, technology- and period-representative datasets; live-buffalo dataset must not be substituted by cattle without an explicit proxy disclosure and sensitivity test |
| disclosure | Declare whether slaughter, deboning, freezing and storage are co-located; disclose any external cold store, omitted support process, frozen-storage duration and cut-off |

Included foreground operations are animal holding, potable-water use, stunning/bleeding/dressing, segregation of edible and inedible material, chilling, temperature-controlled deboning, packaging, quick freezing, frozen storage, refrigeration loss, cleaning and sanitation, wastewater generation, solid residues, and on-site combustion emissions. Codex requires hygienic separation, controlled deboning and packaging, rapid cooling and cold-chain records (`fao-who-cxc-58-2005`; `fao-who-cxc-8-1976`). Resource, wastewater, waste and refrigerant inventories are mandatory because they are explicit environmental-performance inventory elements for slaughterhouses (`eu-sa-bat-2023-2749`).

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `animal_receiving_lairage` | Animal receiving and lairage | required | Always | Foreground transformation | Accepted live-buffalo mass |
| `slaughter_dressing` | Slaughter and dressing | required | Always | Foreground transformation | Hot dressed-carcass mass |
| `carcass_chilling` | Carcass chilling | required | Always | Foreground transformation | Chilled-carcass mass |
| `cutting_deboning` | Cutting and deboning | required | Always | Foreground transformation | Unpacked deboned-meat mass |
| `packaging` | Primary and outer packaging | required | Always | Foreground transformation | Packed chilled-meat mass |
| `blast_freezing_storage` | Blast freezing and frozen storage | required | Always | Foreground transformation | `1,000 kg` net reference product plus declared tonne-days |
| `hygiene_sanitation` | Plant hygiene and sanitation | required | Always; allocate by served area or verified activity driver | Foreground support | Normalized to `1,000 kg` reference product |

### Process: Animal receiving and lairage (`animal_receiving_lairage`)

#### Inputs

##### Product flows

###### Accepted live buffalo (`live_buffalo_input`)

Live buffalo crossing the plant gate are the sole animal feedstock for the declared species-specific route.
- Selected flow: Accepted live buffalo
- Flow property / unit: Mass / kg
- Amount rule: weighbridge or individual live-weight records normalized to `1,000 kg` reference product; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `eu-pef-2021-2279`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2000
  - Upper: 4000
  - Unit: kg/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Lairage potable water (`lairage_water_input`)

Potable water supplied for animal drinking and lairage washing is recorded separately from later process water.
- Selected flow: Lairage potable water
- Flow property / unit: Volume / m3
- Amount rule: receiving-area meter or documented allocation; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`

###### Lairage electricity (`lairage_electricity_input`)

Grid electricity for lighting, ventilation, pumps and animal-handling equipment is a distinct energy carrier.
- Selected flow: Lairage electricity
- Flow property / unit: Energy / kWh
- Amount rule: receiving-area submeter or documented load-time allocation; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `eu-sa-bat-2023-2749`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Slaughter-ready buffalo (`slaughter_ready_buffalo_output`)

Animals released from lairage transfer as an internal product flow to slaughter without changing species identity.
- Selected flow: Slaughter-ready buffalo
- Flow property / unit: Mass / kg
- Amount rule: transferred live weight or reconciled accepted weight and lairage losses; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

##### Waste flows

###### Lairage manure and bedding (`lairage_manure_output`)

Collected faeces, urine-bound solids and used bedding leave the process as a separately weighed wet solid waste.
- Selected flow: Lairage manure and bedding
- Flow property / unit: Mass / kg
- Amount rule: container weights net of tare, with dry matter recommended; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_weighing`
- Sources: `eu-sa-bat-2023-2749`

###### Lairage wastewater (`lairage_wastewater_output`)

Wash water and animal-contaminated drainage are recorded before on-site or external treatment.
- Selected flow: Lairage wastewater
- Flow property / unit: Volume / m3
- Amount rule: area discharge meter or water balance; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_meter`
- Sources: `eu-sa-bat-2023-2749`

##### Elementary flows

### Process: Slaughter and dressing (`slaughter_dressing`)

#### Inputs

##### Product flows

###### Slaughter-ready buffalo (`slaughter_ready_buffalo_input`)

The internal live-animal flow enters stunning, bleeding, hide removal, evisceration and dressing.
- Selected flow: Slaughter-ready buffalo
- Flow property / unit: Mass / kg
- Amount rule: identical transfer quantity from `slaughter_ready_buffalo_output`; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

###### Slaughter potable water (`slaughter_water_input`)

Potable water for carcass contact, equipment washing and slaughter-floor operations is separately metered.
- Selected flow: Slaughter potable water
- Flow property / unit: Volume / m3
- Amount rule: slaughter-floor meter; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 8
  - Unit: m3/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Slaughter electricity (`slaughter_electricity_input`)

Electricity for conveyors, hoists, saws, ventilation and pumps is isolated from refrigeration electricity.
- Selected flow: Slaughter electricity
- Flow property / unit: Energy / kWh
- Amount rule: slaughter-line submeter; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `eu-sa-bat-2023-2749`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 20
  - Upper: 300
  - Unit: kWh/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Hot dressed buffalo carcass (`hot_carcass_output`)

The eviscerated dressed carcass is weighed hot and transferred to chilling; it is an intermediate, not the reference product.
- Selected flow: Hot dressed buffalo carcass
- Flow property / unit: Mass / kg
- Amount rule: calibrated hot-carcass scale; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

###### Edible buffalo offal (`edible_offal_output`)

Inspected edible organs are a separate co-product and must not be averaged into deboned frozen meat.
- Selected flow: Edible buffalo offal
- Flow property / unit: Mass / kg
- Amount rule: edible-offal scale and sales ledger; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_record`
- Sources: `fao-who-cxc-58-2005`, `eu-pef-2021-2279`

###### Buffalo hide (`hide_output`)

Removed hides sold for further processing are recorded as a distinct co-product at wet dispatch mass.
- Selected flow: Buffalo hide
- Flow property / unit: Mass / kg
- Amount rule: dispatch scale and sales ledger; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_record`
- Sources: `eu-pef-2021-2279`

###### Collected buffalo blood (`blood_output`)

Blood intentionally collected and sold or transferred for recovery is a separate product output; uncollected blood belongs in wastewater, not here.
- Selected flow: Collected buffalo blood
- Flow property / unit: Mass / kg
- Amount rule: tank mass or volume-density conversion and disposition record; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_record`
- Sources: `fao-who-cxc-58-2005`, `eu-pef-2021-2279`

##### Waste flows

###### Gut contents (`gut_contents_output`)

Digestive-tract contents removed during evisceration are recorded as wet solid waste, distinct from edible offal.
- Selected flow: Gut contents
- Flow property / unit: Mass / kg
- Amount rule: dedicated container mass net of tare; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_weighing`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`

###### Inedible slaughter material (`inedible_slaughter_material_output`)

Condemned tissue and other inedible animal material are separately weighed and assigned their actual treatment route.
- Selected flow: Inedible slaughter material
- Flow property / unit: Mass / kg
- Amount rule: container mass by destination; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_weighing`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`

###### Slaughter wastewater (`slaughter_wastewater_output`)

Blood-bearing and wash wastewater leaves the slaughter process before treatment and is not combined with solid residues.
- Selected flow: Slaughter wastewater
- Flow property / unit: Volume / m3
- Amount rule: slaughter drainage meter or documented water balance; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_meter`
- Sources: `eu-sa-bat-2023-2749`

##### Elementary flows

### Process: Carcass chilling (`carcass_chilling`)

#### Inputs

##### Product flows

###### Hot dressed buffalo carcass (`hot_carcass_input`)

The weighed hot carcass enters controlled chilling without being treated as saleable frozen meat.
- Selected flow: Hot dressed buffalo carcass
- Flow property / unit: Mass / kg
- Amount rule: identical transfer quantity from `hot_carcass_output`; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

###### Chilling electricity (`chilling_electricity_input`)

Electricity for refrigeration compressors, fans and pumps serving carcass chillers is submetered separately.
- Selected flow: Chilling electricity
- Flow property / unit: Energy / kWh
- Amount rule: chiller-system submeter; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 20
  - Upper: 250
  - Unit: kWh/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Chilling ammonia make-up (`chilling_ammonia_input`)

Anhydrous ammonia added to the refrigeration circuit serving carcass chilling is a separately reconciled material input.
- Selected flow: Chilling ammonia make-up
- Flow property / unit: Mass / kg
- Amount rule: make-up, recovery and charge records allocated to the chilling circuit; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_log`
- Sources: `eu-sa-bat-2023-2749`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Chilled buffalo carcass (`chilled_carcass_output`)

Chilled carcass mass is measured before cutting so chilling loss is visible in the mass balance.
- Selected flow: Chilled buffalo carcass
- Flow property / unit: Mass / kg
- Amount rule: calibrated rail or batch scale after chilling; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

##### Waste flows

##### Elementary flows

###### Ammonia to air from chilling (`chilling_ammonia_air_output`)

Unrecovered ammonia loss from the chilling circuit is reported as a specific elementary emission, never as generic “refrigerant.”
- Selected flow: Ammonia to air from chilling
- Flow property / unit: Mass / kg
- Amount rule: reconciled make-up less documented recovery and stock change; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_log`
- Sources: `eu-sa-bat-2023-2749`

### Process: Cutting and deboning (`cutting_deboning`)

#### Inputs

##### Product flows

###### Chilled buffalo carcass (`chilled_carcass_input`)

Only chilled buffalo carcass assigned to the declared deboning line enters this process.
- Selected flow: Chilled buffalo carcass
- Flow property / unit: Mass / kg
- Amount rule: identical transfer quantity from `chilled_carcass_output`; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

###### Cutting potable water (`cutting_water_input`)

Potable water used in temperature-controlled cutting and equipment rinsing is metered separately from sanitation water.
- Selected flow: Cutting potable water
- Flow property / unit: Volume / m3
- Amount rule: cutting-room meter; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`

###### Cutting electricity (`cutting_electricity_input`)

Electricity for saws, conveyors, trim tables and room conditioning is distinct from blast-freezer electricity.
- Selected flow: Cutting electricity
- Flow property / unit: Energy / kWh
- Amount rule: cutting-room submeter or documented load-time allocation; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `eu-sa-bat-2023-2749`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Unpacked deboned buffalo meat (`deboned_meat_output`)

Meat released from bones and approved for the declared frozen grade transfers to packaging as a measured intermediate.
- Selected flow: Unpacked deboned buffalo meat
- Flow property / unit: Mass / kg
- Amount rule: calibrated line or batch scale; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

###### Food-grade buffalo fat and trimmings (`food_grade_trim_output`)

Saleable fat or meat trimmings diverted to another food product are recorded as a co-product, not blended into the reference flow.
- Selected flow: Food-grade buffalo fat and trimmings
- Flow property / unit: Mass / kg
- Amount rule: dedicated scale and sales/disposition record; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_record`
- Sources: `eu-pef-2021-2279`

###### Food-grade buffalo bones (`food_grade_bones_output`)

Clean bones sold for food or ingredient processing are weighed as a distinct co-product.
- Selected flow: Food-grade buffalo bones
- Flow property / unit: Mass / kg
- Amount rule: dedicated scale and sales/disposition record; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_coproduct_record`
- Sources: `eu-pef-2021-2279`

##### Waste flows

###### Inedible cutting trim (`inedible_cutting_trim_output`)

Condemned or otherwise inedible cutting residues are weighed separately from saleable fat, trimmings and bones.
- Selected flow: Inedible cutting trim
- Flow property / unit: Mass / kg
- Amount rule: container mass by treatment destination; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_weighing`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`

###### Cutting wastewater (`cutting_wastewater_output`)

Drainage from cutting and equipment rinsing is recorded before treatment.
- Selected flow: Cutting wastewater
- Flow property / unit: Volume / m3
- Amount rule: cutting-room discharge meter or water balance; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_meter`
- Sources: `eu-sa-bat-2023-2749`

##### Elementary flows

### Process: Primary and outer packaging (`packaging`)

#### Inputs

##### Product flows

###### Unpacked deboned buffalo meat (`deboned_meat_input`)

The complete measured deboned-meat intermediate enters packaging without inclusion of bones or offal.
- Selected flow: Unpacked deboned buffalo meat
- Flow property / unit: Mass / kg
- Amount rule: identical transfer quantity from `deboned_meat_output`; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`

###### Polyethylene primary packaging (`pe_packaging_input`)

Food-contact polyethylene film or bags retained with the product are recorded by polymer and mass.
- Selected flow: Polyethylene primary packaging
- Flow property / unit: Mass / kg
- Amount rule: issued packages plus opening inventory minus closing inventory and scrap; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_ledger`
- Sources: `fao-who-cxc-8-1976`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5
  - Upper: 40
  - Unit: kg/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Corrugated outer cartons (`carton_packaging_input`)

Corrugated cartons dispatched with the reference product are recorded separately from polyethylene.
- Selected flow: Corrugated outer cartons
- Flow property / unit: Mass / kg
- Amount rule: carton issue and inventory records net of scrap; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_ledger`
- Sources: `fao-who-cxc-8-1976`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 20
  - Upper: 120
  - Unit: kg/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Packaging electricity (`packaging_electricity_input`)

Electricity for vacuum sealing, conveyors and carton forming is separately measured or allocated.
- Selected flow: Packaging electricity
- Flow property / unit: Energy / kWh
- Amount rule: packaging-line submeter or load-time allocation; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `eu-sa-bat-2023-2749`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packed chilled deboned buffalo meat (`packed_chilled_meat_output`)

Sealed and cartoned chilled meat transfers as one internal product flow to blast freezing.
- Selected flow: Packed chilled deboned buffalo meat
- Flow property / unit: Mass / kg
- Amount rule: net meat mass, excluding packaging, reconciled to packed units; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-58-2005`, `fao-who-cxc-8-1976`

##### Waste flows

###### Polyethylene packaging scrap (`pe_packaging_scrap_output`)

Off-cuts and rejected polyethylene generated before product dispatch are weighed as a distinct waste material.
- Selected flow: Polyethylene packaging scrap
- Flow property / unit: Mass / kg
- Amount rule: polymer-specific scrap containers net of tare; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_weighing`
- Sources: `eu-sa-bat-2023-2749`

###### Corrugated-cardboard scrap (`carton_scrap_output`)

Rejected and trimmed corrugated board is weighed separately from plastic scrap.
- Selected flow: Corrugated-cardboard scrap
- Flow property / unit: Mass / kg
- Amount rule: cardboard scrap containers net of tare; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_weighing`
- Sources: `eu-sa-bat-2023-2749`

##### Elementary flows

### Process: Blast freezing and frozen storage (`blast_freezing_storage`)

#### Inputs

##### Product flows

###### Packed chilled deboned buffalo meat (`packed_chilled_meat_input`)

Packed chilled product enters the blast freezer promptly and remains segregated from bone-in and other-species products.
- Selected flow: Packed chilled deboned buffalo meat
- Flow property / unit: Mass / kg
- Amount rule: identical net meat quantity from `packed_chilled_meat_output`; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_balance`
- Sources: `fao-who-cxc-8-1976`

###### Freezing and frozen-storage electricity (`freezing_storage_electricity_input`)

Electricity for blast-freezer compressors, fans, pumps and frozen-store refrigeration is recorded as one identified load with blast and storage subloads recommended.
- Selected flow: Freezing and frozen-storage electricity
- Flow property / unit: Energy / kWh
- Amount rule: refrigeration submeter, with storage component normalized by tonne-day; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `fao-who-cxc-8-1976`, `eu-sa-bat-2023-2749`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 50
  - Upper: 500
  - Unit: kWh/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 30
  - Unit: kWh/tonne-day
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Freezing-system ammonia make-up (`freezing_ammonia_input`)

Anhydrous ammonia added to the blast-freezer and frozen-store circuit is reconciled separately from chilling-circuit make-up.
- Selected flow: Freezing-system ammonia make-up
- Flow property / unit: Mass / kg
- Amount rule: make-up, recovery and charge records for the freezing/storage circuit; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_log`
- Sources: `eu-sa-bat-2023-2749`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Deboned frozen buffalo meat at factory gate (`frozen_buffalo_meat_output`)

This is the sole quantitative reference: net packed, deboned, uncooked buffalo meat whose thermal centre has reached `≤ -18 °C` and whose frozen storage is declared.
- Selected flow: Deboned frozen buffalo meat at factory gate `be81d099-544d-4fdf-be56-81f76427d52f`
- Flow property / unit: Mass / kg
- Amount rule: calibrated dispatch scale and lot-level temperature release record; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_reference_product`
- Sources: `unsd-cpc-3-0-2025`, `fao-who-cxc-8-1976`

##### Waste flows

##### Elementary flows

###### Ammonia to air from freezing and storage (`freezing_ammonia_air_output`)

Unrecovered ammonia loss from the freezing and storage circuit is reported as a specific elementary emission.
- Selected flow: Ammonia to air from freezing and storage
- Flow property / unit: Mass / kg
- Amount rule: reconciled make-up less documented recovery and stock change; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_refrigerant_log`
- Sources: `eu-sa-bat-2023-2749`

### Process: Plant hygiene and sanitation (`hygiene_sanitation`)

#### Inputs

##### Product flows

###### Sanitation potable water (`sanitation_water_input`)

Potable water for cleaning and disinfection outside production-time process-water records is separately metered.
- Selected flow: Sanitation potable water
- Flow property / unit: Volume / m3
- Amount rule: sanitation header meter allocated by cleaned area or cleaning duration; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_meter`
- Sources: `fao-who-cxc-58-2005`, `eu-sa-bat-2023-2749`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 6
  - Unit: m3/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Sanitation electricity (`sanitation_electricity_input`)

Electricity for pressure washing, foam systems, pumps and cleaning support is not hidden within generic utilities.
- Selected flow: Sanitation electricity
- Flow property / unit: Energy / kWh
- Amount rule: sanitation equipment meter or load-time allocation; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_electricity_meter`
- Sources: `eu-sa-bat-2023-2749`

###### Natural gas for sanitation hot water (`sanitation_natural_gas_input`)

Natural gas burned on site to produce sanitation hot water is a distinct fuel input; purchased steam must instead be an explicitly named steam flow.
- Selected flow: Natural gas for sanitation hot water
- Flow property / unit: Energy / MJ
- Amount rule: boiler meter and period-specific net calorific value; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_natural_gas_meter`
- Sources: `eu-sa-bat-2023-2749`
- Range: Provisional QA guardrail
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 1500
  - Unit: MJ/1,000 kg reference product
  - Basis: replace or confirm with measured buffalo-route records
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
  - Sources:

###### Sodium hydroxide cleaning agent (`sodium_hydroxide_input`)

Sodium hydroxide used in alkaline cleaning is recorded as delivered active substance, not as an aggregate “cleaning chemical.”
- Selected flow: Sodium hydroxide cleaning agent
- Flow property / unit: Mass / kg
- Amount rule: solution mass multiplied by documented active concentration; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_ledger`
- Sources: `eu-sa-bat-2023-2749`

###### Peracetic acid sanitizer (`peracetic_acid_input`)

Peracetic acid sanitizer is recorded separately from alkaline cleaner as delivered active substance.
- Selected flow: Peracetic acid sanitizer
- Flow property / unit: Mass / kg
- Amount rule: solution mass multiplied by documented active concentration; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_ledger`
- Sources: `eu-sa-bat-2023-2749`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Sanitation wastewater (`sanitation_wastewater_output`)

Cleaning and disinfection drainage is recorded before treatment and kept distinct from water inputs.
- Selected flow: Sanitation wastewater
- Flow property / unit: Volume / m3
- Amount rule: sanitation discharge meter or documented water balance; normalize to the declared reference flow
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_meter`
- Sources: `eu-sa-bat-2023-2749`

##### Elementary flows

###### Fossil carbon dioxide to air (`sanitation_fossil_co2_air_output`)

Fossil carbon dioxide from on-site natural-gas combustion is reported separately from other air emissions.
- Selected flow: Fossil carbon dioxide to air
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or metered fuel multiplied by an identified jurisdictional factor; normalize to the declared reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `eu-sa-bat-2023-2749`

###### Nitrogen oxides to air (`sanitation_nox_air_output`)

Nitrogen oxides from the sanitation hot-water boiler are quantified as the explicitly declared reporting species, such as `NOx as NO2`.
- Selected flow: Nitrogen oxides to air
- Flow property / unit: Mass / kg
- Amount rule: stack measurement or metered fuel multiplied by an identified jurisdictional factor; normalize to the declared reference flow
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1,000 kg net reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_combustion_emissions`
- Sources: `eu-sa-bat-2023-2749`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_first` | All processes | Subdivide metered inputs, wastes and emissions by physical line or process before any allocation. | `eu-pef-2021-2279` |
| `al_direct_causality` | Chilling, deboning, packaging, freezing and storage | Assign flows directly to the product or co-product that causes them using mass throughput, runtime, refrigerated volume or tonne-day only where that driver is demonstrably causal. | `eu-pef-2021-2279` |
| `al_slaughter_coproducts` | Slaughter and dressing | Keep carcass, edible offal, hide and collected blood as separate outputs. Where subdivision is impossible, use a site-specific economic allocation based on contemporaneous plant-gate revenue and disclose masses, prices, period and sensitivity. | `eu-pef-2021-2279` |
| `al_deboning_coproducts` | Cutting and deboning | Keep deboned meat, saleable fat/trimmings and food-grade bones separate. Apply the same subdivision-first and site-specific economic fallback hierarchy. | `eu-pef-2021-2279` |
| `al_no_bovine_default` | All co-products | Do not apply cattle default allocation factors to buffalo; the cited PEF slaughterhouse defaults do not provide a buffalo factor. | `eu-pef-2021-2279` |
| `al_waste_no_credit` | Wastes | A zero-revenue waste receives no co-product allocation, but the generating process retains collection and pre-treatment burdens. Any avoided-burden scenario must be reported separately. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_balance` | all route processes | animal, intermediate, meat, co-product, solid waste | scale record | timestamp, lot, flow id, gross, tare, net | calibrated scale export | `kg` | each lot | representative 12 months preferred | declared plant and line | sum by flow and lot; reconcile transfers | calibration and reconciliation |
| `cp_reference_product` | `blast_freezing_storage` | reference output | release record | lot, net mass, thermal-centre trace, store trace, release time | scale plus temperature logger | `kg` | each lot | study period | declared plant | sum released conforming lots | scale calibration and signed release |
| `cp_water_meter` | applicable process | potable water | meter record | opening, closing, reset, downtime | calibrated meter | `m3` | daily or batch | study period | process area | difference minus documented non-route use | meter calibration and water balance |
| `cp_wastewater_meter` | applicable process | wastewater | meter or balance | discharge volume, diversion, inventory | calibrated meter; balance only if meter absent | `m3` | daily | study period | drainage area | sum by process; no double count | meter QA or closure evidence |
| `cp_electricity_meter` | applicable process | electricity | meter record | import, export, runtime, load | submeter; engineering allocation if absent | `kWh` | hourly/daily | study period | process/load | sum imports net of export | meter check and allocation file |
| `cp_natural_gas_meter` | `hygiene_sanitation` | natural gas | invoice/meter | volume, pressure, temperature, NCV | boiler meter and supplier NCV | `MJ` | daily/monthly | study period | sanitation boiler | convert to net calorific energy | invoice and conversion record |
| `cp_packaging_ledger` | `packaging` | packaging material | inventory record | opening, receipts, closing, scrap, polymer/grade | stock reconciliation | `kg` | batch/month | study period | packaging line | opening + receipts - closing - scrap | purchase and stock ledger |
| `cp_coproduct_record` | slaughter/deboning | saleable co-product | scale and sales record | mass, price, currency, date, destination | scale joined to sales ledger | `kg` | each dispatch | same period as reference product | declared plant | mass and revenue by co-product | scale, invoice, price-period evidence |
| `cp_waste_weighing` | applicable process | solid waste | waste ticket | flow id, gross, tare, destination | container scale or haulier ticket | `kg` | each movement | study period | generating area | sum net wet mass by flow and destination | ticket and tare record |
| `cp_refrigerant_log` | chilling/freezing | ammonia | maintenance log | charge, additions, recovered mass, date, circuit | refrigerant reconciliation | `kg` | each event and annual closure | study period plus opening/closing state | named circuit | additions + opening - closing - recovered | service record and charge inventory |
| `cp_chemical_ledger` | `hygiene_sanitation` | NaOH or peracetic acid | issue record | solution mass, concentration, product | stock reconciliation and SDS concentration | `kg active` | batch/month | study period | sanitation system | solution mass × active fraction | SDS and inventory ledger |
| `cp_combustion_emissions` | `hygiene_sanitation` | CO2 fossil or NOx | stack/factor calculation | fuel, NCV, factor, pollutant basis | measurement preferred; named factor fallback | `kg` | campaign/month | study period | sanitation boiler | measured emission or fuel × factor | test report or factor citation |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_normalize` | Every inventory flow | `normalized amount = period flow × 1,000 / conforming net reference-product kg` | period flow; conforming product mass | amount per `1,000 kg` | `eu-pef-2021-2279` |
| `cr_transfer_match` | Internal product flows | Upstream output and downstream input must match by lot before losses in the next process are calculated. | paired transfer records | reconciled internal flow | `eu-pef-2021-2279` |
| `cr_mass_closure` | Each transformation | Report `mass inputs - product outputs - waste outputs - measured mass loss`; investigate absolute unexplained imbalance above `2%` of total mass input. | mass records | closure and unexplained balance | none; threshold is `reasoned_estimate` |
| `cr_storage_energy` | Frozen storage | `storage intensity = frozen-store electricity / tonne-days`; add lot-attributed blast-freezing electricity separately. | kWh; daily inventory; days | kWh per reference product | `fao-who-cxc-8-1976` |
| `cr_refrigerant_release` | Chilling/freezing | `release = opening charge + additions - closing charge - recovered amount`; negative results require investigation. | circuit refrigerant log | kg ammonia to air | `eu-sa-bat-2023-2749` |
| `cr_economic_allocation` | Unsubdividable co-product burden | `allocated share_i = revenue_i / sum positive co-product revenue`; report price basis and sensitivity. | mass, plant-gate price, period | allocated burden share | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | Dataset | Demonstrate buffalo species, deboned route, product grade, pack format and frozen release condition; do not merge carcass or bone-in products. | lot specification, labels, process map |
| `dq_temporal` | Foreground | Prefer one complete recent 12-month period covering seasonal throughput; shorter campaigns must disclose dates and storage conditions. | meter and production coverage report |
| `dq_technology` | Foreground | Identify stunning/dressing technology, deboning configuration, packaging equipment, refrigerant, freezer type and cold-store arrangement. | equipment list and process description |
| `dq_geography` | Foreground/upstream | Declare plant geography, electricity market, water source, fuel specification and waste/wastewater destinations. | site and supplier records |
| `dq_metering` | Utilities | State metered share and every engineering allocation; generic unquantified “utilities” are prohibited. | meter register and allocation workbook |
| `dq_estimate_replacement` | Provisional ranges | All `reasoned_estimate` ranges in this candidate PCR are QA flags only and must be replaced or confirmed by measured buffalo-route records before review. | comparison table and reviewer disposition |
| `dq_source_gap` | Quantitative claims | Do not use cattle/pig/sheep/goat BAT or PEF numeric defaults as buffalo values; any proxy needs justification and sensitivity. | source/species check |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `vr_reference_uuid` | Reference flow identity | Reference output UUID equals `be81d099-544d-4fdf-be56-81f76427d52f`, flow type is Product flow, CPC is `21132`, and flow property is Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`. | `unsd-cpc-3-0-2025` |
| `vr_reference_amount` | Reference amount | Quantitative reference equals `1,000 kg` net deboned frozen buffalo meat. | `unsd-cpc-3-0-2025` |
| `vr_temperature` | Freezing and frozen storage | A calibrated record shows product thermal centre `≤ -18 °C` after stabilization and frozen storage `≤ -18 °C`. | `fao-who-cxc-8-1976` |
| `vr_route_complete` | Required process route | All seven required processes are present or a disclosed equivalent preserves every inventory boundary. | `ec-jrc-sa-bref-2024` |
| `vr_atomic_flows` | All foreground exchanges | Electricity, natural gas, water, wastewater, ammonia, packaging, chemicals, solid residues, fossil CO2 and NOx remain separate atomic flows. | `eu-sa-bat-2023-2749`; `eu-pef-2021-2279` |
| `vr_transfer_balance` | Internal transfers | Each internal product-flow output matches the next process input by lot. | `eu-pef-2021-2279` |
| `vr_species_product_separation` | Reference product and co-products | Carcass, bone-in meat, edible offal, hide, blood, bones and saleable trim are not included in the reference product mass. | `unsd-cpc-3-0-2025` |
| `vr_allocation` | Shared burdens and co-products | Subdivision is attempted first; any economic fallback discloses buffalo-specific masses, prices, period and sensitivity and uses no cattle default factor. | `eu-pef-2021-2279` |
| `vr_storage_duration` | Frozen storage | Frozen-storage duration and tonne-days are declared; storage electricity is not represented as an unqualified monthly total. | `fao-who-cxc-8-1976` |
| `vr_estimates` | Reasoned estimates | Every `reasoned_estimate` is flagged as provisional and accompanied by a replacement or confirmation record. | `eu-pef-2021-2279` |
| `vr_uuid_resolution` | Non-reference UUID fields | Non-reference Tiangong UUIDs remain `unresolved` and must not be invented; resolve them before a UUID-bearing exchange is published. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground unit-process package and factory-gate aggregation for one deboned frozen buffalo-meat route |
| downstream_use | Cradle-to-gate or life-cycle models after linking upstream supply and downstream treatment/market datasets |
| allowed_use | Site-specific LCA, EPD/PCR development support, process improvement and audited inventory compilation where route qualifiers match |
| excluded_use | Generic cattle or mixed-meat proxy; carcass, bone-in, offal, minced or prepared buffalo products; unqualified national average |
| required_metadata | Reference qualifiers, geography, period, technology, process map, meter coverage, mass balance, allocation, co-product masses/prices, frozen-storage duration, temperature evidence, treatment destinations |
| required_quality_disclosure | All proxies, exclusions, engineering allocations, reasoned estimates, unresolved UUIDs and deviations from the seven-process map |
| update_trigger | Material change in species/product specification, yield, allocation, refrigerant, freezer, energy source, packaging, storage duration, plant geography or evidence base |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-2025` | `official_guidance` | UN Statistics Division, *CPC Version 3.0 Explanatory Notes*, class 21132, 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Official class title and explicit exclusion; internal wording inconsistency disclosed. |
| `fao-who-cxc-58-2005` | `standard` | Codex Alimentarius, *Code of Hygienic Practice for Meat*, CXC 58-2005. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B58-2005%252FCXC_058e.pdf | Verified process sequence, separation, potable water, controlled deboning/packaging, chilling/freezing and storage records. |
| `fao-who-cxc-8-1976` | `standard` | Codex Alimentarius, *Code of Practice for the Processing and Handling of Quick Frozen Foods*, CXC 8-1976. https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXC%2B8-1976%252FCXC_008e.pdf | Verified quick-freezing qualifier, thermal-centre and storage temperature, packaging, rapid transfer and temperature-record requirements. |
| `eu-sa-bat-2023-2749` | `official_guidance` | European Commission Implementing Decision (EU) 2023/2749, BAT conclusions for slaughterhouses and animal by-products. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=OJ:L_202302749 | Verified mandatory inventory attention to energy, water, wastewater, waste, chemicals and refrigerant loss; species-specific cattle numeric levels were not adopted for buffalo. |
| `eu-pef-2021-2279` | `official_guidance` | European Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods. https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32021H2279 | Verified company-specific collection, subdivision-first allocation hierarchy and slaughterhouse economic fallback; non-buffalo default factors were not adopted. |
| `ec-jrc-sa-bref-2024` | `official_guidance` | European Commission JRC, *Slaughterhouses, Animal By-products and Edible Co-products BREF*, 2024, DOI `10.2760/18199`. https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | Official scope corroboration only; no BREF numeric value is used in this PCR. |

OpenAlex screening was completed centrally through `paper-search search -s openalex` with four route-focused queries covering water-buffalo meat, slaughter, deboning, blast freezing, frozen storage, LCA, energy, water, wastewater, waste, refrigerant and emissions. Thirty result records were screened. None directly documented the declared deboned frozen-water-buffalo factory route or supplied applicable foreground LCI rules or values; broad livestock, buffalo-milk, cattle-slaughterhouse, cultured-meat and food-quality hits were rejected. No OpenAlex metadata, abstract, search snippet or unverified paper supports any rule or value in this PCR.
