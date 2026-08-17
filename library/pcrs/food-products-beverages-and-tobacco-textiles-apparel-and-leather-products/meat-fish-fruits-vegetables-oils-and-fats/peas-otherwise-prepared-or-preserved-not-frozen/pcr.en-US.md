---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.peas-otherwise-prepared-or-preserved-not-frozen
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Peas, otherwise prepared or preserved, not frozen

## 1. Scope and Applicability

This PCR applies to shelf-stable peas prepared or preserved by heat in hermetically sealed cans, jars, trays, or flexible or semi-rigid packs and marketed without frozen storage. It covers products made from immature green peas and mature dried peas that are soaked before processing, with a declared liquid packing medium or vacuum-pack condition. It supports a gate-to-gate foreground data package from receipt of peas, ingredients, and packaging through preparation, filling, sealing, thermal processing, cooling, final packing, and release at the manufacturing plant gate.

The PCR excludes frozen peas; dried peas sold without further preparation or preservation; lacto-fermented peas; peas pickled or preserved principally by vinegar; refrigerated hermetically sealed products; pea soups, purees, composite meals, and products in which peas are not the defining product; distribution, retail, consumer preparation, and end-of-life. Upstream cultivation, production of purchased ingredients and packaging, and external utility generation are represented by linked upstream datasets rather than duplicated in the foreground system.

The product-specific scheduled thermal process, acidification route where used, container integrity controls, and applicable food-law conformity remain the responsibility of qualified processors and the jurisdiction governing the represented product. This PCR does not prescribe a universal sterilization temperature or time.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.peas-otherwise-prepared-or-preserved-not-frozen |
| classification_refs | CPC 3.0: 21396, Peas, otherwise prepared or preserved, not frozen (exact mapping context) |
| covered_products | shelf-stable canned or otherwise hermetically packed green peas; sweet green peas; mature processed peas made from soaked dried Pisum sativum L.; vacuum-packed shelf-stable peas; equivalent non-frozen heat-preserved pea presentations |
| excluded_products | frozen peas; unprepared dried peas; peas requiring refrigerated storage; lacto-fermented or vinegar-preserved peas; pea puree, soup, composite meals, and products where peas are not the defining product |
| representative_product | shelf-stable whole peas in a declared aqueous packing medium, hermetically sealed and thermally processed to commercial sterility |
| production_route | receipt and sorting; washing and preparation; conditional soaking of mature dried peas; blanching or equivalent conditioning; packing-medium preparation; filling and exhausting where applicable; hermetic closure; scheduled thermal processing; cooling and drying; final packing and release |
| market_state | finished non-frozen shelf-stable product at the manufacturing plant gate, with net contents, drained mass convention, pea maturity class, packing medium, container format, and preservation route declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | production of shelf-stable peas, otherwise prepared or preserved and not frozen, supplied at the manufacturing plant gate |
| How much | 1,000 kg net contents, comprising peas and declared packing medium but excluding primary, secondary, and tertiary packaging mass |
| How well | declared as immature green peas or mature processed peas; declared product and packing-medium formulation; hermetically sealed; processed under a qualified scheduled process to the required commercial stability; conforms to the applicable product specification |
| How long or cycle | one representative production campaign up to plant-gate release; storage, distribution, use, and end-of-life are outside this foreground reference period |
| reference_flow_link | prepared_preserved_peas_reference_flow |

| Field | Value |
| --- | --- |
| Reference amount | 1,000 kg net contents at plant gate |
| Reference product flow | Peas, otherwise prepared or preserved, not frozen `a5415af7-3575-4017-bd27-3b87650d94bd` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | pea maturity route (green or mature processed); cultivar or style where relevant; packing medium and optional ingredients; acidified or low-acid route; container material, format, size, and closure; net contents; drained mass and test convention; vacuum-pack condition where applicable; scheduled-process authority and identifier; production geography and time period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory amounts to 1,000 kg declared net contents at plant gate. Net contents include peas and packing medium and exclude every packaging layer. Record the campaign output mass used as the denominator. |
| `drained_mass_separation` | peas and packing medium | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and kg/kg net contents | Measure or test drained pea mass separately from packing-medium mass using the applicable product specification and sampling convention. Do not substitute net contents for drained mass when checking pea content; retain size or grade qualifiers that change the applicable minimum. Source: `codex-cxs-297-2009-2023`. |
| `packaging_mass_separation` | primary, secondary, and tertiary packaging | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record each packaging material as a separate product input normalized to the reference flow; packaging mass must not be included in the 1,000 kg net-contents reference amount. |
| `utility_measurement` | process water, electricity, fuels, steam, and heat | metered mass, volume, or energy property appropriate to the utility | kg or m3; kWh; MJ | Preserve metered units and conversion factors, distinguish purchased utilities from on-site generation, and allocate shared meters only through a documented physical driver. Record water, energy, raw materials, wastewater, and residues at the most appropriate process level. Source: `eu-bat-fdm-2019-2031`. |
| `thermal_process_record` | filling, sealing, retorting, and cooling | temperature, time, pressure, pH where applicable, fill mass, headspace, and container dimensions | °C; min or s; kPa or bar; pH; kg; mm | Retain the qualified scheduled-process identifier and its critical factors. Use actual campaign records for initial temperature, process time and temperature, pressure where required, fill and headspace, container configuration, and cooling; never infer commercial sterility from a generic PCR default. Source: `codex-cxc-23-1979`. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | peas received as fresh or previously frozen immature green peas, or as clean sound whole threshed dried mature peas; ingredients, water, utilities, and packaging received at the processing facility |
| starting_condition_role | foreground manufacturing gate; the pea agricultural route and production of purchased ingredients, utilities, and packaging are upstream linked systems |
| product_classification_scope | prepared or preserved non-frozen peas represented by the target semantic category; classification code is mapping context, not PCR identity |
| recursive_input_rule | when an input is already a product in this same prepared-or-preserved pea category, record it once as a purchased product input and link its upstream dataset; do not reopen or duplicate its preparation chain inside the receiving process |
| upstream_dataset_requirement | link geography-, technology-, and time-representative datasets for pea cultivation or prior pea preparation, purchased ingredients, packaging materials, electricity, fuels, heat, water supply, transport to plant when in study scope, and off-site waste or wastewater treatment |
| disclosure | disclose pea maturity route, initial state, excluded operations, outsourced operations, product and container formulation, scheduled-process basis, cut-offs, shared-resource treatment, allocation choices, waste destinations, and any gap filled by a provisional estimate |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | foreground manufacturing | Include all applicable receipt, sorting, washing, conditional soaking, blanching or conditioning, packing-medium preparation, filling, exhausting, hermetic closure, scheduled thermal processing, cooling, drying, final packing, release, product loss, cleaning, wastewater, and residue handling that occur under the facility's operational control. | `codex-cxs-297-2009-2023`; `codex-cxc-23-1979`; `eu-bat-fdm-2019-2031` |
| `boundary_upstream_links` | purchased inputs and utilities | Keep upstream cultivation and production of peas, ingredients, packaging, electricity, fuels, heat, and water outside the gate-to-gate foreground process but require explicit linked upstream datasets; outsourced steps replacing an in-scope plant operation must be disclosed and linked. | `eu-pef-2021-2279` |
| `boundary_downstream_exclusions` | post-plant-gate stages | Exclude distribution, warehousing after plant-gate release, retail, consumer storage and preparation, and packaging or food end-of-life from this foreground dataset; include them only in a declared downstream lifecycle model. | `eu-pef-2021-2279` |
| `boundary_inventory_completeness` | resource and emission streams | Do not omit a water, energy, raw-material, wastewater, waste-gas, or residue stream merely because it is shared or unmetered. Measure it, calculate it from a documented physical driver, or disclose it as an unresolved data gap. | `eu-bat-fdm-2019-2031` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `pea_receiving_preparation` | Pea receiving, sorting, washing, and preparation | required | Always include; route-specific preparation may use fresh, previously frozen, or dried mature peas. | foreground raw-material preparation | kg received peas and kg prepared peas |
| `mature_pea_soaking` | Soaking mature dried peas | conditional | Include only when mature processed peas are made from dried grains that undergo soaking. | foreground route conditioning | kg dry peas charged and kg soaked peas discharged |
| `blanching_conditioning` | Blanching or equivalent pea conditioning | required | Include the actual conditioning route; if no blanching occurs, document the equivalent preparation and zero blanching utilities. | foreground thermal or formulation conditioning | kg conditioned peas |
| `filling_closure` | Packing-medium preparation, filling, exhausting, and hermetic closure | required | Always include for the covered shelf-stable hermetically sealed product. | foreground formulation and primary packaging | kg sealed filled units |
| `thermal_processing_cooling` | Scheduled thermal processing and cooling | required | Always include the qualified route used to achieve the declared shelf-stable condition. | foreground preservation | kg cooled sealed units |
| `final_packing_release` | Container drying, inspection, final packing, and release | required | Always include; secondary or tertiary packaging inputs may be zero only when demonstrably absent. | foreground finished-product release | 1,000 kg net contents released at plant gate |
| `onsite_wastewater_treatment` | On-site wastewater treatment | conditional | Include when wastewater is treated under facility control; otherwise record wastewater to an external treatment product system. | foreground treatment | kg or m3 wastewater treated |

### Process: Pea receiving, sorting, washing, and preparation (`pea_receiving_preparation`)

#### Inputs

##### Product flows

###### Received peas (`received_peas`)

Record the mass of peas accepted into the represented campaign, distinguishing fresh or previously frozen immature green peas from dry mature peas and excluding rejected incoming lots.

- Selected flow: Peas received for preparation
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weigh accepted peas by lot and sum the lots attributable to the campaign
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`
- Sources: `codex-cxs-297-2009-2023`
- Range: Provisional route-screening estimate for received peas
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 2.0
  - Unit: kg/kg reference product net contents
  - Basis: broad cross-route screen covering liquid-packed green peas and soaked mature-pea production
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation water (`preparation_water`)

Record water supplied for conveying, washing, grading, and equipment cleaning within this process. Keep recirculated water visible through gross use and net make-up fields.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured make-up water plus separately reported recirculated quantity
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water_records`
- Sources: `codex-cxc-23-1979`; `eu-bat-fdm-2019-2031`
- Range: Provisional preparation-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 10
  - Unit: kg/kg reference product net contents
  - Basis: gross water supplied to receiving and preparation before subtracting separately measured reuse
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Prepared peas (`prepared_peas`)

Calculate the prepared pea mass transferred to soaking or conditioning from direct transfer weights or a documented mass balance.

- Selected flow: Prepared peas, intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass, or accepted peas minus measured preparation rejects and retained material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_material_batch_records`
- Sources: `codex-cxs-297-2009-2023`

##### Waste flows

###### Preparation rejects and pea residues (`preparation_residues`)

Record rejected peas, pod or plant material, stones, screenings, and other separated organic residues by measured destination; do not net a sold or feed-directed stream against pea input.

- Selected flow: Pea preparation residues
- Flow property / unit: Mass / kg
- Amount rule: measured mass by residue type and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources: `eu-bat-fdm-2019-2031`
- Range: Provisional residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg received peas
  - Basis: broad initial screen for sorting and preparation losses
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record wastewater leaving washing and preparation, with separately reported water sent to reuse, on-site treatment, or external treatment.

- Selected flow: Food-processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or water balance for this process
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources: `eu-bat-fdm-2019-2031`
- Range: Provisional preparation-wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg reference product net contents
  - Basis: broad initial screen before site-specific water balance review
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Soaking mature dried peas (`mature_pea_soaking`)

#### Inputs

##### Product flows

###### Prepared mature dried peas (`prepared_dry_peas_for_soaking`)

Record the dry prepared pea mass transferred from receiving only for the mature processed-pea route.

- Selected flow: Prepared mature dried peas, intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured dry pea charge to soaking
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg soaked peas discharged
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`
- Sources: `codex-cxs-297-2009-2023`

###### Soaking water (`soaking_water`)

Record water charged to soaking and rinsing, including make-up water and separately identified reuse.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: measured water charged to the soaking batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg soaked peas discharged
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water_records`
- Sources: `codex-cxs-297-2009-2023`; `eu-bat-fdm-2019-2031`
- Range: Provisional soaking-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 10
  - Unit: kg/kg soaked peas discharged
  - Basis: broad initial screen for batch soaking and rinsing water
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Soaked mature peas (`soaked_mature_peas`)

Record the drained mass transferred to conditioning and retain batch time and temperature as route metadata.

- Selected flow: Soaked mature peas, intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured drained transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per soaking batch and per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`
- Sources: `codex-cxs-297-2009-2023`

##### Waste flows

###### Spent soaking water (`spent_soaking_water`)

Record soaking liquor and rinsate transferred to reuse or wastewater treatment.

- Selected flow: Food-processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or batch water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg soaked peas discharged
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources: `eu-bat-fdm-2019-2031`
- Range: Provisional spent-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg soaked peas discharged
  - Basis: broad initial screen before batch water-balance review
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Blanching or equivalent pea conditioning (`blanching_conditioning`)

#### Inputs

##### Product flows

###### Peas entering conditioning (`peas_to_conditioning`)

Record prepared green peas or soaked mature peas entering the actual conditioning route.

- Selected flow: Prepared peas, intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured feed mass to conditioning
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg conditioned peas discharged
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`
- Sources: `codex-cxc-23-1979`

###### Conditioning heat (`conditioning_heat`)

Record purchased heat or fuel-derived heat used in blanching or equivalent conditioning; where no thermal conditioning occurs, report zero with route evidence.

- Selected flow: Process heat
- Flow property / unit: Energy / MJ
- Amount rule: metered heat, or calculated heat from measured fuel or steam consumption and documented conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg conditioned peas discharged
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_utility_records`
- Sources: `codex-cxc-23-1979`; `eu-bat-fdm-2019-2031`
- Range: Provisional conditioning-heat screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3
  - Unit: MJ/kg conditioned peas
  - Basis: broad initial screen including a documented zero-heat equivalent route
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Conditioned peas (`conditioned_peas`)

Record peas transferred to filling after blanching, cooling, or equivalent conditioning.

- Selected flow: Conditioned peas, intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_batch_records`
- Sources: `codex-cxc-23-1979`

##### Waste flows

###### Conditioning wastewater (`conditioning_wastewater`)

Record blanching and cooling water discharged from this process, net of measured internal reuse.

- Selected flow: Food-processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: measured discharge or process water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conditioned peas discharged
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources: `eu-bat-fdm-2019-2031`
- Range: Provisional conditioning-wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned peas
  - Basis: broad initial screen before process water-balance review
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Packing-medium preparation, filling, exhausting, and hermetic closure (`filling_closure`)

#### Inputs

##### Product flows

###### Conditioned peas to filling (`conditioned_peas_to_filling`)

Record conditioned peas charged to containers and connect the batch to drained-mass and fill-control records.

- Selected flow: Conditioned peas, intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured pea fill mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg sealed filled units
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fill_closure_records`
- Sources: `codex-cxs-297-2009-2023`; `codex-cxc-23-1979`; `ecfr-21-cfr-155-170`

###### Packing medium and optional ingredients (`packing_medium_ingredients`)

Record water, salt, sugars, seasonings, oils, acids, firming agents, and other ingredients separately according to the actual formulation; do not create ingredients not used by the represented product.

- Selected flow: Packing-medium ingredients by formulation
- Flow property / unit: Mass / kg
- Amount rule: measured batch issues minus measured returns, reconciled to filled product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fill_closure_records`
- Sources: `codex-cxs-297-2009-2023`; `ecfr-21-cfr-155-170`
- Range: Provisional total packing-medium and ingredient screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product net contents
  - Basis: broad initial screen for total liquid medium and optional ingredients
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary containers and closures (`primary_packaging`)

Record each container, lid, closure, sealant, label, and directly attributable primary packaging material by material and mass.

- Selected flow: Primary packaging materials by material
- Flow property / unit: Mass / kg
- Amount rule: packaging issued to the campaign minus measured reusable returns, reconciled to accepted and rejected containers
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `codex-cxc-23-1979`
- Range: Provisional primary-packaging screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.02
  - Upper: 0.5
  - Unit: kg/kg reference product net contents
  - Basis: broad cross-format screen for metal, glass, tray, or flexible-pack systems
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Sealed filled units (`sealed_filled_units`)

Record sealed units accepted for thermal processing with fill mass, headspace or pouch thickness, vacuum condition where applicable, and closure-inspection results.

- Selected flow: Sealed filled pea product, intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured net contents transferred to thermal processing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_fill_closure_records`
- Sources: `codex-cxc-23-1979`

##### Waste flows

###### Filling and closure rejects (`filling_closure_rejects`)

Record spilled product, off-specification fills, damaged containers, lids, and closure rejects by material and destination.

- Selected flow: Filling and packaging rejects by material
- Flow property / unit: Mass / kg
- Amount rule: measured rejected mass by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources: `codex-cxc-23-1979`; `eu-bat-fdm-2019-2031`
- Range: Provisional filling-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg reference product net contents
  - Basis: broad initial screen for product and packaging rejects
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Scheduled thermal processing and cooling (`thermal_processing_cooling`)

#### Inputs

##### Product flows

###### Sealed units to thermal process (`sealed_units_to_retort`)

Record sealed units entering each scheduled-process batch or continuous run.

- Selected flow: Sealed filled pea product, intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured net contents entering the thermal process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per thermal-process batch and per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_process_records`
- Sources: `codex-cxc-23-1979`

###### Thermal-processing heat (`thermal_processing_heat`)

Record steam, hot water, direct fuel, or purchased heat required for venting, come-up, holding, and associated losses, distinguishing recovered heat.

- Selected flow: Process heat or fuel by actual route
- Flow property / unit: Energy / MJ
- Amount rule: metered heat or calculated useful heat from measured steam or fuel with documented conversion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg cooled sealed units
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_utility_records`
- Sources: `codex-cxc-23-1979`; `eu-bat-fdm-2019-2031`
- Range: Provisional thermal-processing heat screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 6
  - Unit: MJ/kg cooled sealed units
  - Basis: broad initial screen across container formats and heat-recovery configurations
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal-process electricity (`thermal_process_electricity`)

Record electricity for pumps, retort circulation, conveyors, controls, compressed air, and cooling attributable to this process.

- Selected flow: Electricity, supplied to the facility
- Flow property / unit: Energy / kWh
- Amount rule: submetered electricity or calculated share from measured equipment load and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cooled sealed units
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_utility_records`
- Sources: `eu-bat-fdm-2019-2031`
- Range: Provisional thermal-process electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 1
  - Unit: kWh/kg cooled sealed units
  - Basis: broad initial screen across batch and continuous systems
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooling water (`cooling_water`)

Record gross cooling-water circulation, net make-up, blowdown, and segregated uncontaminated cooling-water reuse without double counting.

- Selected flow: Cooling water
- Flow property / unit: Mass / kg
- Amount rule: metered make-up and discharge, with gross recirculation reported separately
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cooled sealed units
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_process_water_records`
- Sources: `codex-cxc-23-1979`; `eu-bat-fdm-2019-2031`
- Range: Provisional net cooling-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 20
  - Unit: kg make-up water/kg cooled sealed units
  - Basis: broad initial screen across once-through and recirculating systems
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Cooled shelf-stable pea units (`cooled_preserved_peas`)

Record thermally processed units accepted after cooling and link them to the scheduled-process record and lot code.

- Selected flow: Peas, otherwise prepared or preserved, not frozen, intermediate before final release
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted net contents after cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_process_records`
- Sources: `codex-cxc-23-1979`

##### Waste flows

###### Cooling blowdown and wastewater (`cooling_wastewater`)

Record cooling-system blowdown, contaminated cooling water, and other discharges by destination; segregated clean recirculation is not a waste output.

- Selected flow: Cooling-system wastewater
- Flow property / unit: Mass / kg
- Amount rule: metered discharge or cooling-system water balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg cooled sealed units
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources: `codex-cxc-23-1979`; `eu-bat-fdm-2019-2031`
- Range: Provisional cooling-wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg cooled sealed units
  - Basis: broad initial screen before cooling-water balance review
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Container drying, inspection, final packing, and release (`final_packing_release`)

#### Inputs

##### Product flows

###### Cooled preserved pea units (`cooled_units_to_release`)

Record cooled units transferred to drying, inspection, coding, and final release.

- Selected flow: Cooled shelf-stable pea units, intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured net contents transferred from cooling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finished_product_records`
- Sources: `codex-cxc-23-1979`

###### Secondary and tertiary packaging (`secondary_tertiary_packaging`)

Record cartons, films, trays, pallets, straps, and other shipment packaging by material; report zero only where a layer is demonstrably absent or reusable packaging is outside the ownership boundary and separately disclosed.

- Selected flow: Secondary and tertiary packaging materials by material
- Flow property / unit: Mass / kg
- Amount rule: packaging issued minus measured reusable returns, reconciled to released units
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_records`
- Sources: `eu-pef-2021-2279`
- Range: Provisional outer-packaging screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg reference product net contents
  - Basis: broad initial screen across bulk and retail shipment formats
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

###### Released reference product (`reference_product_output`)

Record conforming finished product released at the plant gate. This row is the quantitative reference and must equal 1,000 kg net contents after normalization.

- Selected flow: Peas, otherwise prepared or preserved, not frozen `a5415af7-3575-4017-bd27-3b87650d94bd`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: fixed normalized reference amount based on measured released campaign mass
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1,000 kg net contents at plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:

##### Waste flows

###### Post-process rejected units and packaging (`release_rejects`)

Record leaking, damaged, improperly coded, or otherwise rejected units and separated packaging by destination.

- Selected flow: Post-process rejects by material
- Flow property / unit: Mass / kg
- Amount rule: measured rejected net contents and packaging mass by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources: `codex-cxc-23-1979`
- Range: Provisional release-reject screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg reference product net contents
  - Basis: broad initial screen before campaign release-yield review
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: On-site wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Wastewater to on-site treatment (`wastewater_to_onsite_treatment`)

Record combined or segregated wastewater streams treated under facility control, retaining source-process links.

- Selected flow: Food-processing wastewater
- Flow property / unit: Mass / kg
- Amount rule: inlet meter or reconciled sum of source-process discharges
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources: `eu-bat-fdm-2019-2031`
- Range: Provisional total-wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.2
  - Upper: 20
  - Unit: kg/kg reference product net contents
  - Basis: broad initial screen for total process wastewater entering treatment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater-treatment electricity and chemicals (`wastewater_treatment_inputs`)

Record electricity, aeration, chemicals, and other treatment inputs by actual technology.

- Selected flow: Wastewater-treatment utilities and chemicals by type
- Flow property / unit: Energy or Mass / kWh or kg
- Amount rule: measured issues or calculated share from treatment records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_energy_utility_records`
- Sources: `eu-bat-fdm-2019-2031`
- Range: Provisional treatment-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg wastewater treated
  - Basis: broad initial electricity-equivalent screen requiring replacement by technology-specific records
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

#### Outputs

##### Product flows

##### Waste flows

###### Treated effluent and treatment residues (`treated_effluent_residues`)

Record treated effluent, sludge, screenings, and recovered material separately by mass and destination; report direct emissions as elementary flows where measured or calculated.

- Selected flow: Treated effluent and wastewater-treatment residues by type
- Flow property / unit: Mass / kg
- Amount rule: measured outlet and residue mass with water-balance reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg reference product net contents
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources: `eu-bat-fdm-2019-2031`
- Range: Provisional treated-stream mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 25
  - Unit: kg/kg reference product net contents
  - Basis: combined wet effluent and wet treatment residues before destination-specific modelling
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | multi-output and shared foreground operations | First avoid allocation by subdividing process records, meters, batches, and waste streams so that inputs and emissions directly attributable to the pea product are assigned to it. System expansion may be used only when the study explicitly represents the added function and reports the expanded result. | `eu-pef-2021-2279` |
| `allocation_physical_driver` | shared utilities and services that cannot be subdivided | When subdivision is not practicable, allocate shared water, heat, electricity, cleaning, compressed air, and treatment services using the most relevant measured physical relationship, such as product mass, metered energy, operating time, water load, or pollutant load. Document the driver, period, denominator, and sensitivity. | `eu-pef-2021-2279`; `eu-bat-fdm-2019-2031` |
| `residue_classification` | pea residues, rejected product, wastewater sludge, and recovered materials | Classify each output by actual destination and legal/economic status. An output with no product function is a waste flow and receives treatment burdens; a sold or internally used output with a documented function is a co-product and must not be silently credited or netted from input mass. | `eu-pef-2021-2279`; `eu-bat-fdm-2019-2031` |
| `no_default_avoided_burden` | recycling, feed use, energy recovery, and other recovery routes | Do not apply an avoided-burden credit by default. If a lifecycle study applies substitution or another end-of-life method, keep it outside the gate-to-gate inventory unless the expanded function is explicitly in scope, and disclose the substituted product, factor, quality relationship, and sensitivity. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_batch_records` | `pea_receiving_preparation` | peas and intermediate product mass | receiving tickets, calibrated scale records, batch sheets | lot_id; pea_route; gross_mass; tare_mass; accepted_mass; reject_mass; transfer_mass; timestamp | reconcile receiving and transfer scales to batch identifiers | kg | every lot and batch | all campaigns in representative period | all lines and receiving points serving represented product | sum accepted and transferred mass by campaign; retain route-specific totals before normalization | calibration status; ticket and batch-sheet cross-reference; reject reconciliation |
| `cp_process_water_records` | `thermal_processing_cooling` | preparation, soaking, blanching, cleaning, and cooling water | flow meters, tank level records, reuse and blowdown logs | process_id; meter_id; opening_reading; closing_reading; make_up; recirculation; discharge; timestamp | meter net withdrawals and discharges; use tank balance only where metering is absent | kg or m3 | each campaign or shift | representative operating period including cleaning | every material water-using process and shared system | calculate gross use, net make-up, reuse, and discharge separately; allocate shared water by documented physical driver | meter calibration; water-balance closure; reuse-loop diagram |
| `cp_energy_utility_records` | `thermal_processing_cooling` | heat, electricity, steam, fuels, and treatment utilities | submeters, utility invoices, steam and fuel meters, equipment runtime records | utility_type; meter_id; quantity; unit; pressure_or_calorific_value; equipment_id; runtime; process_id; timestamp | direct submetering preferred; otherwise calculate from measured service quantity and documented conversion | kWh; MJ; kg steam; kg or m3 fuel | each batch, shift, or billing interval with allocation to campaigns | representative operating period | all utility systems serving represented processes | convert without discarding original units; subtract exported or recovered energy only when separately metered | meter calibration; invoice reconciliation; conversion-factor provenance; allocation sensitivity |
| `cp_fill_closure_records` | `filling_closure` | formulation, fill, headspace, vacuum, and closure integrity | recipe issues, filler checks, seam or seal inspection, checkweigher records | lot_id; recipe_id; ingredient_mass; pea_fill_mass; medium_mass; net_contents; drained_mass; headspace; vacuum_or_air_content; container_id; closure_result | collect formulation and fill-control records and link each lot to closure inspections | kg; mm; kPa or bar as applicable | every formulation batch and at the scheduled inspection frequency | all represented production lots | all filling and closure lines serving the represented product | aggregate accepted fills only; retain rejected fills and closure defects separately | calibrated scales; inspection frequency; corrective-action record; traceable lot code |
| `cp_packaging_records` | `final_packing_release` | primary, secondary, and tertiary packaging | material issue and return records, packaging specifications, rejection logs | material_id; material_type; unit_mass; issued_count; accepted_count; reject_count; return_count; recycled_content_claim | reconcile issued packaging to accepted, rejected, returned, and inventory-change quantities | kg and count | every campaign | all represented packaging formats | all packaging lines and material issue points serving the represented product | calculate mass by material per released net-content mass; do not include packaging in reference product mass | supplier specification; unit-mass verification; stock reconciliation |
| `cp_thermal_process_records` | `thermal_processing_cooling` | scheduled process and cooling | retort charts or electronic records, scheduled-process specification, cooling-water records | schedule_id; product_code; container_type; container_dimensions; fill_mass; headspace; initial_temperature; process_temperature; process_time; pressure; pH_if_applicable; cooling_method; cooling_endpoint; deviation_id | retain complete batch or continuous-run records and qualified schedule linkage | °C; min or s; kPa or bar; pH; kg; mm | every thermal-process run | every represented lot | all thermal-processing systems and container formats serving the represented product | no averaging across non-equivalent schedules; aggregate only after confirming schedule conformity | instrument calibration; qualified-process authorization; deviation disposition; lot traceability |
| `cp_residue_wastewater_records` | `onsite_wastewater_treatment` | rejects, residues, wastewater, sludge, and destinations | weighbridge records, bins, flow meters, waste manifests, laboratory records | source_process; stream_id; mass_or_volume; dry_matter_if_relevant; pH; COD_or_TOC_if_available; destination; treatment_route; timestamp | measure each major stream and retain destination evidence; calculate unmetered wastewater only through a closed water balance | kg or m3; supporting concentration units | each batch, shift, or dispatch as appropriate | representative operating period | all source processes, collection points, and on-site treatment units | keep streams and destinations separate; aggregate after normalization to reference flow | manifest or invoice; meter calibration; laboratory method; water- and mass-balance closure |
| `cp_finished_product_records` | `final_packing_release` | conforming released product | finished-goods ledger, release certificate, checkweigher and inventory records | lot_id; net_contents; drained_mass; accepted_count; rejected_count; release_mass; release_date; qualifier_set | reconcile released net contents to accepted production and inventory change | kg | every lot | all campaigns in representative period | all final inspection and finished-goods release points serving the represented product | sum conforming released net contents; normalize inventory to 1,000 kg | release authorization; scale calibration; lot and formulation traceability |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = campaign-attributable amount / released net-content mass × 1,000 kg | collected row quantity; released campaign net-content mass | amount per 1,000 kg reference product net contents |  |
| `calc_drained_fraction` | pea content and packing medium | drained fraction = tested drained pea mass / tested net contents; retain the applicable size, grade, method, and sampling result | drained pea mass; net contents; pea route and size or grade | kg drained peas/kg net contents and lot conformity result | `codex-cxs-297-2009-2023` |
| `calc_material_balance` | each preparation, filling, cooling, and release step | inputs + opening work-in-process = products + wastes + wastewater-carried solids where measured + closing work-in-process + documented balance difference | measured input, output, reject, residue, spill, and inventory-change masses | balance difference and percentage closure by process | `eu-bat-fdm-2019-2031` |
| `calc_utility_conversion` | steam, fuels, electricity, and heat | convert measured service quantities using source-specific pressure/enthalpy, calorific value, or unit conversion; retain raw quantity and factor | meter reading; utility specification; conversion factor | kWh or MJ per reference flow with factor provenance | `eu-bat-fdm-2019-2031` |
| `calc_shared_resource_allocation` | shared utilities and treatment | attributable quantity = total shared quantity × documented physical driver for represented product / sum of the same driver for all users | shared meter total; selected physical driver by product; denominator population | allocated water, energy, cleaning, or treatment quantity plus sensitivity | `eu-pef-2021-2279`; `eu-bat-fdm-2019-2031` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | reference product and all product lots | Every inventory campaign must link received pea lots, formulation, container specification, scheduled-process record, accepted finished lot, and the reference product qualifiers. | receiving tickets; recipe and packaging specification; lot code; release record; scheduled-process identifier |
| `dq_measurement_control` | mass, water, energy, time, temperature, pressure, and pH records | Use calibrated or verified instruments appropriate to the measurement. Retain raw readings, units, conversion factors, missing-data substitutions, and calibration status. | calibration certificates; meter logs; laboratory methods; conversion-factor records |
| `dq_temporal_representativeness` | foreground activity data | Cover a representative production period including start-up, normal operation, cleaning, and product changeover where attributable. Explain seasonal pea campaigns, downtime, and excluded abnormal events. | campaign schedule; production ledger; operating and cleaning logs |
| `dq_completeness_balance` | raw materials, product, packaging, water, energy, residues, and wastewater | Reconcile material and water balances at process or campaign level and investigate material differences. No important stream may be silently assigned zero because a meter is shared or absent. | material balance; water balance; unresolved-gap register; BAT-aligned resource inventory |
| `dq_thermal_conformity` | every released thermal-process lot | Link each lot to a qualified scheduled process, critical-factor records, closure control, cooling record, deviations, and release disposition. A generic PCR range cannot demonstrate commercial sterility. | qualified scheduled-process specification; process chart; closure inspection; cooling record; deviation approval |
| `dq_source_and_estimate_status` | all non-foreground values | Mark reasoned estimates as provisional, keep them separate from collected values, and replace them with source-backed or reviewed foreground ranges before activation. | structured amount evidence kind; source references; review record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow and metadata | Fail validation when the product-flow UUID, Mass property, mass unit group, 1,000 kg net-contents amount, or required product qualifiers are missing or inconsistent. Packaging mass must be separate from reference net contents. |  |
| `validate_scope_route` | product classification and process route | Confirm that the product is shelf-stable, not frozen, and a defining pea product. Require mature-pea soaking when the input is dried mature peas, and reject a dataset that silently treats refrigerated, frozen, fermented, vinegar-preserved, or composite products as in scope. | `codex-cxs-297-2009-2023`; `ecfr-21-cfr-155-170` |
| `validate_process_coverage` | foreground process map | Require recorded values or an explicit documented zero/not-applicable reason for every applicable process, including cleaning, rejected product, packaging, thermal processing, cooling, and wastewater or residue handling. | `codex-cxc-23-1979`; `eu-bat-fdm-2019-2031` |
| `validate_thermal_process` | sealed product release | Fail validation if a released lot lacks a qualified scheduled-process identifier, container and fill specification, critical time/temperature records, closure control, cooling method, or resolved deviation disposition. Do not validate sterility from provisional energy ranges. | `codex-cxc-23-1979` |
| `validate_mass_and_water_balance` | each campaign and process | Flag unexplained mass or water imbalance and require the producer to state the investigation threshold used; no universal numerical tolerance is imposed by this candidate PCR. | `eu-bat-fdm-2019-2031` |
| `validate_allocation` | shared operations and multi-output streams | Require subdivision where practicable. Otherwise require a documented relevant physical allocation driver and sensitivity; reject undisclosed economic allocation, netting of sold residues, or default avoided-burden credits. | `eu-pef-2021-2279` |
| `validate_provisional_ranges` | reasoned-estimate ranges | Treat all `reasoned_estimate` ranges as QA prompts only. Flag an out-of-range foreground value for review rather than replacing it, and block activation until important provisional ranges are replaced or explicitly accepted through methodology review. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground manufacturing data package for prepared or preserved non-frozen peas, with a plant-gate reference product and process-resolved inventory |
| downstream_use | may support `secondary_dataset` or `background_dataset` publication after review and may be linked into cradle-to-gate or cradle-to-grave `process` and `lifecyclemodel` studies |
| allowed_use | route-, geography-, time-, formulation-, and container-representative modelling where the required qualifiers, scheduled-process evidence, linked upstream datasets, allocation, and data-quality disclosures are satisfied |
| excluded_use | direct representation of frozen, refrigerated, dried-only, fermented, vinegar-preserved, pureed, soup, or composite pea products; food-safety release based only on this PCR; undisclosed transfer to materially different pea routes or container systems |
| required_metadata | PCR id and status; product-flow UUID; CPC mapping context; pea maturity route; cultivar/style/size or grade where relevant; recipe and packing medium; net contents and drained-mass convention; container and closure; vacuum or acidification condition; scheduled-process identifier; facility geography; technology; reference period; foreground collection coverage; linked upstream datasets; allocation and cut-off decisions |
| required_quality_disclosure | measured versus calculated versus provisional values; instrument and calibration status; temporal and site coverage; material and water balance closure; shared-meter allocation; data gaps; reasoned-estimate ranges; thermal-process and closure deviations; waste destinations; upstream dataset representativeness |
| update_trigger | material change to pea route, formulation, product state, container geometry or closure, scheduled thermal process, cooling system, facility technology, allocation method, reference-flow identity, applicable product specification, or evidence supporting an important range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-297-2009-2023` | `standard` | Codex Alimentarius, CXS 297-2009, Standard for Certain Canned Vegetables, adopted 2009 and amended through 2023, official PDF: https://workspace.fao.org/sites/codex/Standards/CXS%20297-2009/CXS_297e.pdf (retrieved 2026-08-11) | product scope and definition; green and mature processed pea routes; washing and preparation; packing media; heat preservation; drained-mass and quality controls |
| `codex-cxc-23-1979` | `official_guidance` | Codex Alimentarius, CXC 23-1979, Code of Hygienic Practice for Low-Acid and Acidified Low-Acid Canned Foods, revisions through 1993 and editorial corrections 2011, official PDF: https://workspace.fao.org/sites/codex/Standards/CXC%2023-1979/CXC_023e.pdf (retrieved 2026-08-11) | raw-material preparation; blanching; filling and headspace; exhausting; closure control; qualified scheduled process; thermal-process records; cooling; cooling-water quality; release and deviation rules |
| `ecfr-21-cfr-155-170` | `standard` | U.S. Electronic Code of Federal Regulations, 21 CFR 155.170, Canned peas, https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-155/subpart-B/section-155.170 (retrieved 2026-08-11) | corroborating regulatory product identity; optional ingredients; aqueous packing medium; sealing and heat processing |
| `eu-bat-fdm-2019-2031` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, ELI: http://data.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-11) | process flow sheets; water, energy, raw-material, wastewater, waste-gas, and residue inventory; process-level monitoring; cleaning and water-use controls; resource efficiency |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated ELI: http://data.europa.eu/eli/reco/2021/2279/2021-12-30 (retrieved 2026-08-11) | system-boundary disclosure; foreground data specificity; multi-functionality hierarchy; subdivision or system expansion before physical allocation; downstream lifecycle use |
