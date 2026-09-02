---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.raw-silk-not-thrown
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Raw silk (not thrown)

## 1. Scope and Applicability

This PCR covers foreground production of continuous raw silk made by collectively reeling cocoon filaments and leaving the resulting silk unthrown. The reference product retains its declared sericin condition and is delivered as a marketable skein, hank, or cone. The foreground reporting unit begins with marketable fresh cocoons or dried/stifled cocoons received at the filature and ends with conditioned, tested, packed raw silk at the filature gate.

The PCR applies to mulberry and non-mulberry cocoon routes only when the silkworm species or commercial fibre type is declared. It supports hand, sitting-type, multi-end, semi-automatic, and automatic reeling, but these technologies shall be modelled as separate routes. Fresh-cocoon and dried-cocoon starting conditions, direct and indirect reeling, optional re-reeling, and any chemical cocoon treatment shall also be declared and kept separate. A weighted result may be reported only from documented production shares after each route has first been calculated independently.

The scope excludes silkworm rearing and mulberry cultivation except through an upstream cocoon dataset; transport before the declared filature gate unless included in that upstream dataset; thrown or twisted silk; spun silk and yarn made from silk waste; degumming; dyeing; weaving; knitting; textile finishing; garment manufacture; use; and end of life. Doupion or other specialty reeled silk may use this PCR only when it remains unthrown and its cocoon type, filament size, reeling conditions, and market specification are separately declared. Pierced cocoons converted by spinning are outside scope.

Tiangong product flow `343df125-d682-4ffa-8829-5fbc785bdbc9` was verified by direct record read as version `01.01.001`, `state_code=100`, a Product flow, CPC 26110, with Mass as its reference flow property. It supports the exact product identity “Raw Silk” only. It does not establish silkworm species, cocoon condition, production route, grade, moisture basis, geography, technology, or any inventory amount; those facts remain mandatory foreground declarations.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.raw-silk-not-thrown` |
| classification_refs | CPC 3.0 `26110` Raw silk (not thrown), exact semantic reference; classification is not the canonical PCR identity |
| covered_products | Continuous raw silk reeled from declared mulberry or non-mulberry cocoons; unthrown; sericin condition declared; supplied in a declared skein, hank, or cone form |
| excluded_products | Thrown or twisted silk; spun silk and silk-waste yarn; degummed silk unless separately modelled downstream; dyed or woven silk; pierced-cocoon spun products; synthetic or regenerated fibres |
| representative_product | Conditioned, marketable raw silk (not thrown) from one declared cocoon species and one declared filature route |
| production_route | Received fresh or dried/stifled cocoons; conditional stifling/drying and storage; sorting; cocoon cooking and end finding; route-specific reeling; conditional re-reeling and finishing; conditioning, testing, packing; residual management |
| market_state | Unthrown raw silk at filature gate, with package form, nominal linear density, quality grade/test method, sericin or boil-off condition, and commercial moisture basis declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply of raw silk filaments cohered by residual sericin and not subjected to throwing or twisting |
| How much | 1 kg of conditioned net raw silk, excluding packaging |
| How well | Meets the declared contract or standard for species/fibre type, nominal linear density, package form, quality grade and test method, defect/evenness class where applicable, and sericin or boil-off condition |
| How long or cycle | One production lot at the filature gate; no use duration is assigned to this intermediate product |
| reference_flow_link | The functional unit is realized by exactly 1 kg of the Tiangong Raw Silk product flow on the declared commercial moisture basis |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg conditioned net raw silk (not thrown) |
| Reference product flow | Raw Silk `343df125-d682-4ffa-8829-5fbc785bdbc9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | silkworm species or commercial fibre type; mulberry or non-mulberry route; fresh or dried/stifled cocoon starting condition; hand, sitting, multi-end, semi-automatic, or automatic reeling technology; direct or indirect reeling; re-reeling included or excluded; package form; nominal linear density and unit; quality grade and test method; sericin/boil-off condition; agreed commercial moisture regain or dry-mass conversion; geography; reference year; allocation method |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Missing qualifiers make the reference-flow definition incomplete. The Tiangong identity must not be interpreted as supplying any missing qualifier.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_conditioned_mass` | Reference raw silk | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report 1 kg net raw silk at the declared commercial moisture regain. Retain gross mass, tare, oven-dry mass or measured moisture, conditioning conditions, and calculation. An 11% regain may be used only when the applicable contract or test specification explicitly adopts the FAO handbook basis; it is not an unconditional default. |
| `cocoon_condition_mass` | Fresh and dried/stifled cocoon inputs | Mass | kg | Keep fresh-cocoon and dried-cocoon masses in separate fields. Record measured moisture or the supplier-declared state and never combine the two without a documented dry-matter conversion. |
| `linear_density_declaration` | Reference raw silk quality | Linear density | dtex or denier | Declare the method and result. ISO 21046:2018 may be used for silk yarn size; if denier is converted, use `1 denier = 1.111... dtex` and retain the original reported unit. |
| `utility_energy_preservation` | Electricity, steam, heat, and fuels | Energy or fuel-specific property | kWh, MJ, kg, or m3 as measured | Preserve measured energy carrier and unit. Convert only with a documented factor and do not merge electricity, purchased steam, and on-site fuel before their separate inventories are complete. |
| `water_balance_basis` | Cooking, reeling, re-reeling, and treatment water | Mass or volume with density | kg or m3 | Record withdrawal, internally recirculated water, discharge, evaporation, water in outputs, and other losses separately. Do not count recirculated water as a new withdrawal. |
| `net_packaging_exclusion` | Reference product and packaging | Mass | kg | The reference amount excludes packaging. Record packaging by material and measured mass as a separate product input. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Marketable fresh cocoons or dried/stifled cocoons received at the filature gate, with species/fibre type, moisture or condition, supplier, origin, transport inclusion, and whether stifling/drying occurred upstream declared |
| starting_condition_role | Upstream cocoon product input to the raw-silk filature foreground system |
| product_classification_scope | Raw silk (not thrown); excludes thrown, spun, degummed, dyed, woven, knitted, and finished textile products |
| recursive_input_rule | Purchased raw silk of this same category used for blending or finishing shall be recorded as a separate input with an upstream dataset and shall not recursively invoke this foreground PCR as though it were internally produced |
| upstream_dataset_requirement | Each cocoon input shall link to a geographically, temporally, species-, rearing-, and starting-condition-representative upstream dataset. Supplier stifling/drying and inbound transport shall be included upstream or added explicitly, with no gap or double count. |
| disclosure | Declare cocoon species/type, fresh or dried basis, reeling technology, direct/indirect route, re-reeling, package form, grade/test method, moisture basis, geography, period, capacity utilization, treatment route, and allocation choices |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `sb_route_separation` | All foreground modelling | Calculate each species/fibre type, cocoon starting condition, and reeling technology separately. Combine only with documented production shares after route-level inventories are complete; do not use an unconditional category average. | `fao-silk-reeling-testing-1999` |
| `sb_cocoon_upstream` | Cocoon supply | Stop the foreground boundary at the declared filature-gate cocoon input and require an upstream cocoon dataset covering rearing and any supplier stifling/drying. Add inbound transport explicitly if absent upstream. | `eu-pef-2021-2279` |
| `sb_filature_operations` | Filature | Include sorting, any on-site stifling/drying/storage, cooking, end finding, reeling, applicable re-reeling/finishing, conditioning/testing/packing, internally attributable utilities, water, wastewater, direct emissions, wastes, and co-products. | `fao-silk-reeling-testing-1999`; `eu-txt-bref-2023` |
| `sb_downstream_exclusions` | Reference product | Exclude throwing/twisting, degumming, dyeing, weaving, finishing, garment manufacture, use, and end of life; disclose any deviation as a separate downstream module rather than relabelling it raw silk production. | `un-cpc-3-0-26110`; `fao-silk-reeling-testing-1999` |
| `sb_capital_goods` | Infrastructure and equipment | Exclude capital goods from the default foreground package unless required by the intended downstream method. If included, disclose lifetime, utilization, and allocation and keep the result distinguishable. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

Each flow card represents one named material, energy carrier, product, co-product, waste, wastewater, or emission. Select mutually exclusive route rows by applicability and never merge them into category flows. Add and foreground-map one named atomic row for any actual energy carrier, chemical, refrigerant, or packaging material not listed here.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `cocoon_receipt_preparation` | Cocoon receipt, weighing, and sorting | `required` | Always | Foreground process | per 1 kg conditioned net raw silk |
| `cocoon_stifling_drying` | Cocoon stifling, drying, and storage | `conditional` | Fresh cocoons are treated on site | Foreground process | per 1 kg conditioned net raw silk |
| `cocoon_cooking_reeling` | Cocoon cooking, end finding, and raw-silk reeling | `required` | Always; one declared route | Foreground process | per 1 kg conditioned net raw silk |
| `raw_silk_rereeling_finishing` | Raw-silk re-reeling and skein finishing | `conditional` | Indirect route or package requires it | Foreground process | per 1 kg conditioned net raw silk |
| `conditioning_testing_packing` | Conditioning, testing, weighing, and packing | `required` | Always | Foreground process | per 1 kg conditioned net raw silk |
| `onsite_wastewater_treatment` | On-site raw-silk wastewater treatment | `conditional` | Wastewater is treated on site | Foreground process | per 1 kg conditioned net raw silk |

### Process: Cocoon receipt, weighing, and sorting (`cocoon_receipt_preparation`)

#### Inputs

##### Product flows

###### Fresh mulberry silkworm cocoons (`fresh_mulberry_cocoons`)

Applicability: Fresh mulberry route.

- Flow name: Fresh mulberry silkworm cocoons
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Fresh mulberry silkworm cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_receipt`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_receipt`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Evidence screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5.0
  - Upper: 8.34
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-silk-reeling-testing-1999`

###### Dried mulberry silkworm cocoons (`dried_mulberry_cocoons`)

Applicability: Dried mulberry route.

- Flow name: Dried mulberry silkworm cocoons
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Dried mulberry silkworm cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoon_receipt`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_receipt`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Evidence screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2.1
  - Upper: 4.4
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`method_formula`)
  - Sources: `fao-silk-reeling-testing-1999`

###### Dried Tasar silkworm cocoons (`dried_tasar_cocoons`)

Applicability: Tasar continuous-filament route.

- Flow name: Dried Tasar silkworm cocoons
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Dried Tasar silkworm cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoon_receipt`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_receipt`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

###### Dried Muga silkworm cocoons (`dried_muga_cocoons`)

Applicability: Muga continuous-filament route.

- Flow name: Dried Muga silkworm cocoons
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Dried Muga silkworm cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoon_receipt`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_receipt`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

###### Grid electricity for receipt and sorting (`receipt_electricity`)

Applicability: Metered sorting equipment is used.

- Flow name: Grid electricity for receipt and sorting
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Net calorific value / kWh, version 22.00.000
- Flow property / unit: Energy / kWh
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_receipt`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_receipt`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: kWh/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No atomic flow of this type is prescribed; record any actual flow as a named atomic row.

##### Elementary flows

No atomic flow of this type is prescribed; record any actual flow as a named atomic row.

#### Outputs

##### Product flows

###### Saleable double cocoons (`double_cocoons_product`)

Applicability: Sold or transferred for doupion production.

- Flow name: Saleable double cocoons
- Direction: outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Saleable double cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_receipt`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_receipt`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

##### Waste flows

###### Pierced cocoon waste (`pierced_cocoon_waste`)

Applicability: No product destination exists.

- Flow name: Pierced cocoon waste
- Direction: outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Pierced cocoon waste
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_receipt`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_receipt`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Mould-damaged cocoon waste (`mould_damaged_cocoon_waste`)

Applicability: No product destination exists.

- Flow name: Mould-damaged cocoon waste
- Direction: outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Mould-damaged cocoon waste
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_receipt`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_receipt`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No atomic flow of this type is prescribed; record any actual flow as a named atomic row.

### Process: Cocoon stifling, drying, and storage (`cocoon_stifling_drying`)

#### Inputs

##### Product flows

###### Fresh mulberry silkworm cocoons (`fresh_mulberry_cocoons_to_dryer`)

Applicability: Named fresh-cocoon route is dried on site.

- Flow name: Fresh mulberry silkworm cocoons
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Fresh mulberry silkworm cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

###### Fresh Tasar silkworm cocoons (`fresh_tasar_cocoons_to_dryer`)

Applicability: Named fresh-cocoon route is dried on site.

- Flow name: Fresh Tasar silkworm cocoons
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Fresh Tasar silkworm cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

###### Fresh Muga silkworm cocoons (`fresh_muga_cocoons_to_dryer`)

Applicability: Named fresh-cocoon route is dried on site.

- Flow name: Fresh Muga silkworm cocoons
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Fresh Muga silkworm cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

###### Natural gas for cocoon dryer (`dryer_natural_gas`)

Applicability: Named carrier is actually consumed.

- Flow name: Natural gas for cocoon dryer
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Gaseous natural gas `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Volume / m3, version 01.01.001
- Flow property / unit: Volume / m3
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Liquefied petroleum gas for cocoon dryer (`dryer_lpg`)

Applicability: Named carrier is actually consumed.

- Flow name: Liquefied petroleum gas for cocoon dryer
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: LPG `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Mass / kg, version 01.01.000
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel for cocoon dryer (`dryer_diesel`)

Applicability: Named carrier is actually consumed.

- Flow name: Diesel for cocoon dryer
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Mass / kg, version 01.01.002
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grid electricity for cocoon dryer (`dryer_electricity`)

Applicability: Named carrier is actually consumed.

- Flow name: Grid electricity for cocoon dryer
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Net calorific value / kWh, version 22.00.000
- Flow property / unit: Energy / kWh
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: kWh/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No atomic flow of this type is prescribed; record any actual flow as a named atomic row.

##### Elementary flows

No atomic flow of this type is prescribed; record any actual flow as a named atomic row.

#### Outputs

##### Product flows

###### Dried mulberry silkworm cocoons (`dried_mulberry_cocoons_output`)

Applicability: Named species is dried on site.

- Flow name: Dried mulberry silkworm cocoons
- Direction: outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Dried mulberry silkworm cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

###### Dried Tasar silkworm cocoons (`dried_tasar_cocoons_output`)

Applicability: Named species is dried on site.

- Flow name: Dried Tasar silkworm cocoons
- Direction: outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Dried Tasar silkworm cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

###### Dried Muga silkworm cocoons (`dried_muga_cocoons_output`)

Applicability: Named species is dried on site.

- Flow name: Dried Muga silkworm cocoons
- Direction: outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Dried Muga silkworm cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

##### Waste flows

###### Overheated cocoon waste (`overheated_cocoon_waste`)

Applicability: Overheating creates non-recoverable cocoons.

- Flow name: Overheated cocoon waste
- Direction: outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Overheated cocoon waste
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Storage-mould cocoon waste (`storage_mould_cocoon_waste`)

Applicability: Storage damage occurs.

- Flow name: Storage-mould cocoon waste
- Direction: outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Storage-mould cocoon waste
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Carbon dioxide, fossil, to air (`dryer_carbon_dioxide_fossil`)

Applicability: On-site dryer combustion emits this pollutant.

- Flow name: Carbon dioxide, fossil, to air
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Carbon dioxide, fossil `08a91e70-3ddc-11dd-923d-0050c2490048`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Elementary flow, Mass / kg; air unspecified, version 03.00.004
- Flow property / unit: Mass / kg
- Amount rule: measured value, or atomic activity amount multiplied by a separately identified current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: requires foreground factor selection
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Methane to air (`dryer_methane`)

Applicability: On-site dryer combustion emits this pollutant.

- Flow name: Methane to air
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Methane, fossil `08a91e70-3ddc-11dd-9610-0050c2490048`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Elementary flow, Mass / kg; air unspecified, version 03.00.004
- Flow property / unit: Mass / kg
- Amount rule: measured value, or atomic activity amount multiplied by a separately identified current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: requires foreground factor selection
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dinitrogen monoxide to air (`dryer_dinitrogen_monoxide`)

Applicability: On-site dryer combustion emits this pollutant.

- Flow name: Dinitrogen monoxide to air
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Dinitrogen monoxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Elementary flow, Mass / kg; air unspecified, version 03.00.004
- Flow property / unit: Mass / kg
- Amount rule: measured value, or atomic activity amount multiplied by a separately identified current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: requires foreground factor selection
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrogen dioxide to air (`dryer_nitrogen_dioxide`)

Applicability: On-site dryer combustion emits this pollutant.

- Flow name: Nitrogen dioxide to air
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Elementary flow, Mass / kg; air unspecified, version 03.00.004
- Flow property / unit: Mass / kg
- Amount rule: measured nitrogen dioxide mass, or measured NOx expressed as nitrogen dioxide equivalent, or atomic activity amount multiplied by a separately identified current nitrogen-dioxide-equivalent factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: requires foreground factor selection
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sulfur dioxide to air (`dryer_sulfur_dioxide`)

Applicability: On-site dryer combustion emits this pollutant.

- Flow name: Sulfur dioxide to air
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Sulfur dioxide to air
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; reviewed sulfur-dioxide candidates lacked the required air-unspecified compartment; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured value, or atomic activity amount multiplied by a separately identified current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: requires foreground factor selection
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Particulate matter, ≤10 µm, to air (`dryer_pm10`)

Applicability: On-site dryer combustion emits this pollutant.

- Flow name: Particulate matter, ≤10 µm, to air
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Particulate matter, ≤10 µm, to air
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; reviewed PM10 candidates required an undeclared stack/air subcompartment; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured value, or atomic activity amount multiplied by a separately identified current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cocoon_drying`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cocoon_drying`
- Source ID or status: requires foreground factor selection
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cocoon cooking, end finding, and raw-silk reeling (`cocoon_cooking_reeling`)

#### Inputs

##### Product flows

###### Fresh mulberry silkworm cocoons (`fresh_mulberry_cocoons_to_reeling`)

Applicability: Only the named mutually exclusive route.

- Flow name: Fresh mulberry silkworm cocoons
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Fresh mulberry silkworm cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Evidence screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 5.0
  - Upper: 8.34
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `fao-silk-reeling-testing-1999`

###### Dried mulberry silkworm cocoons (`dried_mulberry_cocoons_to_reeling`)

Applicability: Only the named mutually exclusive route.

- Flow name: Dried mulberry silkworm cocoons
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Dried mulberry silkworm cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Evidence screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2.1
  - Upper: 4.4
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`method_formula`)
  - Sources: `fao-silk-reeling-testing-1999`

###### Dried Tasar silkworm cocoons (`dried_tasar_cocoons_to_reeling`)

Applicability: Only the named mutually exclusive route.

- Flow name: Dried Tasar silkworm cocoons
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Dried Tasar silkworm cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

###### Dried Muga silkworm cocoons (`dried_muga_cocoons_to_reeling`)

Applicability: Only the named mutually exclusive route.

- Flow name: Dried Muga silkworm cocoons
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Dried Muga silkworm cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

###### Freshwater for cocoon cooking and reeling (`reeling_freshwater`)

Applicability: Named carrier is actually consumed and separately metered.

- Flow name: Freshwater for cocoon cooking and reeling
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Freshwater for cocoon cooking and reeling
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; Tap-water and generic process-water candidates were rejected because the foreground source and grade are not declared; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 1
  - Upper: 2000
  - Unit: kg/kg reeled raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grid electricity for cocoon cooking and reeling (`reeling_electricity`)

Applicability: Named carrier is actually consumed and separately metered.

- Flow name: Grid electricity for cocoon cooking and reeling
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Net calorific value / kWh, version 22.00.000
- Flow property / unit: Energy / kWh
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: kWh/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased steam for cocoon cooking and reeling (`reeling_purchased_steam`)

Applicability: Named carrier is actually consumed and separately metered.

- Flow name: Purchased steam for cocoon cooking and reeling
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Gross calorific value / MJ, version 01.01.000
- Flow property / unit: Energy / MJ
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 200
  - Unit: MJ/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased hot water for cocoon cooking (`reeling_purchased_hot_water`)

Applicability: Named carrier is actually consumed and separately metered.

- Flow name: Purchased hot water for cocoon cooking
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Purchased hot water for cocoon cooking
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; combined steam-or-hot-water and generic heat candidates were rejected because no atomic hot-water flow matched; requires foreground mapping
- Flow property / unit: Energy / MJ
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 200
  - Unit: MJ/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Natural gas for on-site cooking heat (`reeling_natural_gas`)

Applicability: Named carrier is actually consumed and separately metered.

- Flow name: Natural gas for on-site cooking heat
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Gaseous natural gas `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Volume / m3, version 01.01.001
- Flow property / unit: Volume / m3
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 20
  - Unit: m3/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Liquefied petroleum gas for on-site cooking heat (`reeling_lpg`)

Applicability: Named carrier is actually consumed and separately metered.

- Flow name: Liquefied petroleum gas for on-site cooking heat
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: LPG `d54ae71a-1245-4e3f-b694-dbf2b22bbf7d`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Mass / kg, version 01.01.000
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel for on-site cooking heat (`reeling_diesel`)

Applicability: Named carrier is actually consumed and separately metered.

- Flow name: Diesel for on-site cooking heat
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Diesel oil `9d258d75-6792-4f1c-9856-81602ed8f816`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Mass / kg, version 01.01.002
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Compressed air for automatic reeling controls (`reeling_compressed_air`)

Applicability: Named carrier is actually consumed and separately metered.

- Flow name: Compressed air for automatic reeling controls
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Compressed air for automatic reeling controls
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; the exact-name compressed-air candidate was rejected because its platform classification identifies environmental-protection services rather than compressed air; requires foreground mapping
- Flow property / unit: Volume / Nm3
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 100
  - Unit: Nm3/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Aluminium sulfate (alum) for Tasar cooking (`tasar_aluminium_sulfate`)

Applicability: Declared Tasar route actually doses this named chemical.

- Flow name: Aluminium sulfate (alum) for Tasar cooking
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Alum `194dc448-c455-4836-8b6e-8dd603daa294`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Mass / kg, version 01.01.002
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Formaldehyde solution for Tasar cooking (`tasar_formaldehyde_solution`)

Applicability: Declared Tasar route actually doses this named chemical.

- Flow name: Formaldehyde solution for Tasar cooking
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Formaldehyde solution for Tasar cooking
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; the Formalin candidate was rejected because solution concentration is undeclared and its platform classification identifies hydrocarbons rather than the oxygenated compound; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nonionic surfactant for Tasar cooking (`tasar_nonionic_surfactant`)

Applicability: Declared Tasar route actually doses this named chemical.

- Flow name: Nonionic surfactant for Tasar cooking
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Nonionic surfactant for Tasar cooking
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; the 95% polyoxyethylene nonionic-surfactant candidate was rejected because formulation and active content are not declared; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No atomic flow of this type is prescribed; record any actual flow as a named atomic row.

##### Elementary flows

No atomic flow of this type is prescribed; record any actual flow as a named atomic row.

#### Outputs

##### Product flows

###### Raw silk (not thrown) from reeling (`reeled_raw_silk`)

Applicability: Every route; keep route results separate.

- Flow name: Raw silk (not thrown) from reeling
- Direction: outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Raw Silk `343df125-d682-4ffa-8829-5fbc785bdbc9`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Mass / kg, version 01.01.001
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: Tiangong UUID confirmed

###### Mulberry silkworm pupae co-product (`mulberry_pupae_product`)

Applicability: Documented sale or beneficial product destination.

- Flow name: Mulberry silkworm pupae co-product
- Direction: outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Mulberry silkworm pupae co-product
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

###### Tasar silkworm pupae co-product (`tasar_pupae_product`)

Applicability: Documented sale or beneficial product destination.

- Flow name: Tasar silkworm pupae co-product
- Direction: outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Tasar silkworm pupae co-product
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Muga silkworm pupae co-product (`muga_pupae_product`)

Applicability: Documented sale or beneficial product destination.

- Flow name: Muga silkworm pupae co-product
- Direction: outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Muga silkworm pupae co-product
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

###### Recoverable brushing silk (`brushing_silk_product`)

Applicability: Documented sale or beneficial product destination.

- Flow name: Recoverable brushing silk
- Direction: outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Recoverable brushing silk
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

###### Recoverable end-missing cocoons (`end_missing_cocoons_product`)

Applicability: Documented sale or beneficial product destination.

- Flow name: Recoverable end-missing cocoons
- Direction: outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Recoverable end-missing cocoons
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

##### Waste flows

###### Raw-silk reeling wastewater (`reeling_wastewater`)

Applicability: Wastewater crosses to treatment.

- Flow name: Raw-silk reeling wastewater
- Direction: outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Raw-silk reeling wastewater
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; generic/textile wastewater candidates did not preserve the raw-silk route and transfer semantics; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `eu-txt-bref-2023`
- Sources: `eu-txt-bref-2023`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Reeled cocoon shell waste (`reeled_cocoon_shell_waste`)

Applicability: No product destination exists.

- Flow name: Reeled cocoon shell waste
- Direction: outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Reeled cocoon shell waste
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Non-recoverable silk fibre waste (`nonrecoverable_silk_fibre_waste`)

Applicability: No product destination exists.

- Flow name: Non-recoverable silk fibre waste
- Direction: outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Silk waste `690d2d6b-d573-4ab5-9e50-742a2ee12275`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Waste flow, Mass / kg, version 01.01.000
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Carbon dioxide, fossil, to air (`reeling_carbon_dioxide_fossil`)

Applicability: On-site reeling heat combustion emits this pollutant.

- Flow name: Carbon dioxide, fossil, to air
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Carbon dioxide, fossil `08a91e70-3ddc-11dd-923d-0050c2490048`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Elementary flow, Mass / kg; air unspecified, version 03.00.004
- Flow property / unit: Mass / kg
- Amount rule: measured value, or atomic activity amount multiplied by a separately identified current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: requires foreground factor selection
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Methane to air (`reeling_methane`)

Applicability: On-site reeling heat combustion emits this pollutant.

- Flow name: Methane to air
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Methane, fossil `08a91e70-3ddc-11dd-9610-0050c2490048`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Elementary flow, Mass / kg; air unspecified, version 03.00.004
- Flow property / unit: Mass / kg
- Amount rule: measured value, or atomic activity amount multiplied by a separately identified current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: requires foreground factor selection
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dinitrogen monoxide to air (`reeling_dinitrogen_monoxide`)

Applicability: On-site reeling heat combustion emits this pollutant.

- Flow name: Dinitrogen monoxide to air
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Dinitrogen monoxide `08a91e70-3ddc-11dd-94c3-0050c2490048`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Elementary flow, Mass / kg; air unspecified, version 03.00.004
- Flow property / unit: Mass / kg
- Amount rule: measured value, or atomic activity amount multiplied by a separately identified current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: requires foreground factor selection
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrogen dioxide to air (`reeling_nitrogen_dioxide`)

Applicability: On-site reeling heat combustion emits this pollutant.

- Flow name: Nitrogen dioxide to air
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Nitrogen dioxide `08a91e70-3ddc-11dd-96e5-0050c2490048`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Elementary flow, Mass / kg; air unspecified, version 03.00.004
- Flow property / unit: Mass / kg
- Amount rule: measured nitrogen dioxide mass, or measured NOx expressed as nitrogen dioxide equivalent, or atomic activity amount multiplied by a separately identified current nitrogen-dioxide-equivalent factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: requires foreground factor selection
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sulfur dioxide to air (`reeling_sulfur_dioxide`)

Applicability: On-site reeling heat combustion emits this pollutant.

- Flow name: Sulfur dioxide to air
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Sulfur dioxide to air
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; reviewed sulfur-dioxide candidates lacked the required air-unspecified compartment; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured value, or atomic activity amount multiplied by a separately identified current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: requires foreground factor selection
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Particulate matter, ≤10 µm, to air (`reeling_pm10`)

Applicability: On-site reeling heat combustion emits this pollutant.

- Flow name: Particulate matter, ≤10 µm, to air
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Particulate matter, ≤10 µm, to air
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; reviewed PM10 candidates required an undeclared stack/air subcompartment; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured value, or atomic activity amount multiplied by a separately identified current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cooking_reeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_cooking_reeling`
- Source ID or status: requires foreground factor selection
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Raw-silk re-reeling and skein finishing (`raw_silk_rereeling_finishing`)

#### Inputs

##### Product flows

###### Raw silk on small reels (`small_reel_raw_silk`)

Applicability: Only when the named flow applies to the declared re-reeling route.

- Flow name: Raw silk on small reels
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Raw Silk `343df125-d682-4ffa-8829-5fbc785bdbc9`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Mass / kg, version 01.01.001
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rereeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_rereeling`
- Source ID or status: Tiangong UUID confirmed

###### Freshwater for re-reeling wetting (`rereeling_freshwater`)

Applicability: Only when the named flow applies to the declared re-reeling route.

- Flow name: Freshwater for re-reeling wetting
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Freshwater for re-reeling wetting
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; Tap-water and generic process-water candidates were rejected because the foreground source and grade are not declared; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rereeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_rereeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`

###### Emulsified oil for re-reeling (`rereeling_emulsified_oil`)

Applicability: Only when the named flow applies to the declared re-reeling route.

- Flow name: Emulsified oil for re-reeling
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Emulsified oil for re-reeling
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact candidate survived direct flow-get verification of material/state, flow type, reference property/unit, and route or receiving-medium qualifiers; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rereeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_rereeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grid electricity for re-reeling (`rereeling_electricity`)

Applicability: Only when the named flow applies to the declared re-reeling route.

- Flow name: Grid electricity for re-reeling
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Net calorific value / kWh, version 22.00.000
- Flow property / unit: Energy / kWh
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rereeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_rereeling`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: kWh/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased steam for re-reeling conditioning (`rereeling_purchased_steam`)

Applicability: Only when the named flow applies to the declared re-reeling route.

- Flow name: Purchased steam for re-reeling conditioning
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Process heat from steam `fcf9e128-688f-42f0-9dca-85d2319cfac5`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Gross calorific value / MJ, version 01.01.000
- Flow property / unit: Energy / MJ
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rereeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_rereeling`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 200
  - Unit: MJ/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No atomic flow of this type is prescribed; record any actual flow as a named atomic row.

##### Elementary flows

No atomic flow of this type is prescribed; record any actual flow as a named atomic row.

#### Outputs

##### Product flows

###### Re-reeled raw silk (not thrown) (`rereeled_raw_silk`)

Applicability: Only when the named flow applies to the declared re-reeling route.

- Flow name: Re-reeled raw silk (not thrown)
- Direction: outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Raw Silk `343df125-d682-4ffa-8829-5fbc785bdbc9`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Mass / kg, version 01.01.001
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rereeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_rereeling`
- Source ID or status: Tiangong UUID confirmed

##### Waste flows

###### Raw-silk re-reeling wastewater (`rereeling_wastewater`)

Applicability: Only when the named flow applies to the declared re-reeling route.

- Flow name: Raw-silk re-reeling wastewater
- Direction: outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Raw-silk re-reeling wastewater
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; generic/textile wastewater candidates did not preserve the raw-silk route and transfer semantics; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_rereeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_rereeling`
- Source ID or status: `eu-txt-bref-2023`
- Sources: `eu-txt-bref-2023`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Rejected raw silk from re-reeling (`rereeling_rejected_raw_silk`)

Applicability: Only when the named flow applies to the declared re-reeling route.

- Flow name: Rejected raw silk from re-reeling
- Direction: outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Silk waste `690d2d6b-d573-4ab5-9e50-742a2ee12275`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Waste flow, Mass / kg, version 01.01.000
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_rereeling`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_rereeling`
- Source ID or status: `fao-silk-reeling-testing-1999`
- Sources: `fao-silk-reeling-testing-1999`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No atomic flow of this type is prescribed; record any actual flow as a named atomic row.

### Process: Conditioning, testing, weighing, and packing (`conditioning_testing_packing`)

#### Inputs

##### Product flows

###### Raw silk before final release (`raw_silk_for_release`)

Applicability: Only when this named material or operation applies.

- Flow name: Raw silk before final release
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Raw Silk `343df125-d682-4ffa-8829-5fbc785bdbc9`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Mass / kg, version 01.01.001
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_testing`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_release_testing`
- Source ID or status: Tiangong UUID confirmed

###### Grid electricity for conditioning and testing (`release_electricity`)

Applicability: Only when this named material or operation applies.

- Flow name: Grid electricity for conditioning and testing
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Net calorific value / kWh, version 22.00.000
- Flow property / unit: Energy / kWh
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_testing`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_release_testing`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: kWh/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Corrugated cardboard carton (`corrugated_carton`)

Applicability: Only when this named material or operation applies.

- Flow name: Corrugated cardboard carton
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Corrugated board boxes `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Mass / kg, version 03.00.002
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_testing`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_release_testing`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Polyethylene packaging film (`pe_packaging_film`)

Applicability: Only when this named material or operation applies.

- Flow name: Polyethylene packaging film
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Polyethylene packaging film
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; the exact-name polyethylene-film candidate was rejected because its platform classification identifies luggage and handbags rather than packaging film; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_testing`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_release_testing`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wooden pallet (`wooden_pallet`)

Applicability: Only when this named material or operation applies.

- Flow name: Wooden pallet
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Wooden pallet
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; the wooden-pallet candidate was rejected because its platform classification conflicts with its flow identity; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_testing`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_release_testing`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

No atomic flow of this type is prescribed; record any actual flow as a named atomic row.

##### Elementary flows

No atomic flow of this type is prescribed; record any actual flow as a named atomic row.

#### Outputs

##### Product flows

###### Conditioned raw silk (not thrown) (`reference_raw_silk`)

Applicability: Only when this named material or operation applies.

- Flow name: Conditioned raw silk (not thrown)
- Direction: outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Raw Silk `343df125-d682-4ffa-8829-5fbc785bdbc9`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Mass / kg, version 01.01.001
- Flow property / unit: Mass / kg
- Amount rule: exactly 1 kg conditioned net raw silk on the declared moisture basis
- Value mode: Fixed value (`fixed_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Collection protocol: `cp_release_testing`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_release_testing`
- Source ID or status: Tiangong UUID confirmed

##### Waste flows

###### Discarded raw-silk test sample (`discarded_raw_silk_test_sample`)

Applicability: Only when this named material or operation applies.

- Flow name: Discarded raw-silk test sample
- Direction: outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Silk waste `690d2d6b-d573-4ab5-9e50-742a2ee12275`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Waste flow, Mass / kg, version 01.01.000
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_testing`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_release_testing`
- Source ID or status: `iso-15625-2014`; `iso-21046-2018`
- Sources: `iso-15625-2014`; `iso-21046-2018`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Waste corrugated cardboard (`waste_corrugated_cardboard`)

Applicability: Only when this named material or operation applies.

- Flow name: Waste corrugated cardboard
- Direction: outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Packaging waste cardboard `72270223-04b1-4986-a546-94e5a0821317`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Waste flow, Mass / kg, version 01.01.000
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_testing`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_release_testing`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Waste polyethylene film (`waste_pe_film`)

Applicability: Only when this named material or operation applies.

- Flow name: Waste polyethylene film
- Direction: outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Waste polyethylene `7e78f0a8-c042-47ca-a742-3bac92be1477`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Waste flow, Mass / kg, version 01.01.001
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_release_testing`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_release_testing`
- Source ID or status: foreground protocol; UUID unresolved
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No atomic flow of this type is prescribed; record any actual flow as a named atomic row.

### Process: On-site raw-silk wastewater treatment (`onsite_wastewater_treatment`)

#### Inputs

##### Product flows

###### Grid electricity for wastewater treatment (`wwt_electricity`)

Applicability: The named input is actually used.

- Flow name: Grid electricity for wastewater treatment
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Electricity `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Product flow, Net calorific value / kWh, version 22.00.000
- Flow property / unit: Energy / kWh
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual_management`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_residual_management`
- Source ID or status: `eu-txt-bref-2023`
- Sources: `eu-txt-bref-2023`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 50
  - Unit: kWh/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sodium hydroxide for wastewater treatment (`wwt_sodium_hydroxide`)

Applicability: The named input is actually used.

- Flow name: Sodium hydroxide for wastewater treatment
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Sodium hydroxide for wastewater treatment
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; the 95–98% sodium-hydroxide candidate was rejected because supplied form and concentration are not declared; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual_management`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_residual_management`
- Source ID or status: `eu-txt-bref-2023`
- Sources: `eu-txt-bref-2023`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ferric chloride for wastewater treatment (`wwt_ferric_chloride`)

Applicability: The named input is actually used.

- Flow name: Ferric chloride for wastewater treatment
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Ferric chloride for wastewater treatment
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; ferric-chloride candidates were rejected because supplied form/concentration are not declared and candidate metadata were inconsistent; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual_management`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_residual_management`
- Source ID or status: `eu-txt-bref-2023`
- Sources: `eu-txt-bref-2023`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Polyacrylamide flocculant for wastewater treatment (`wwt_polyacrylamide`)

Applicability: The named input is actually used.

- Flow name: Polyacrylamide flocculant for wastewater treatment
- Direction: inputs (`inputs`)
- Flow type: Product (`product`)
- Selected flow: Polyacrylamide flocculant for wastewater treatment
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; polyacrylamide candidates were rejected because ionic grade, molecular specification, supplied form, and active content are not declared; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual_management`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_residual_management`
- Source ID or status: `eu-txt-bref-2023`
- Sources: `eu-txt-bref-2023`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg relevant output
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Raw-silk reeling wastewater to treatment (`reeling_wastewater_to_treatment`)

Applicability: Reconcile to the producing process.

- Flow name: Raw-silk reeling wastewater to treatment
- Direction: inputs (`inputs`)
- Flow type: Waste (`waste`)
- Selected flow: Raw-silk reeling wastewater to treatment
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; generic/textile wastewater candidates did not preserve the raw-silk route and treatment-transfer semantics; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual_management`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_residual_management`
- Source ID or status: `eu-txt-bref-2023`
- Sources: `eu-txt-bref-2023`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Raw-silk re-reeling wastewater to treatment (`rereeling_wastewater_to_treatment`)

Applicability: Reconcile to the producing process.

- Flow name: Raw-silk re-reeling wastewater to treatment
- Direction: inputs (`inputs`)
- Flow type: Waste (`waste`)
- Selected flow: Raw-silk re-reeling wastewater to treatment
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; generic/textile wastewater candidates did not preserve the raw-silk route and treatment-transfer semantics; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual_management`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_residual_management`
- Source ID or status: `eu-txt-bref-2023`
- Sources: `eu-txt-bref-2023`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No atomic flow of this type is prescribed; record any actual flow as a named atomic row.

#### Outputs

##### Product flows

###### Reclaimed process water (`reclaimed_process_water`)

Applicability: Treated water meets a documented reuse function.

- Flow name: Reclaimed process water
- Direction: outputs (`outputs`)
- Flow type: Product (`product`)
- Selected flow: Reclaimed process water
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; generic process-water candidates were not reclaimed water; the reclaimed-water candidate used an incompatible volume reference; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residual_management`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_residual_management`
- Source ID or status: `eu-txt-bref-2023`
- Sources: `eu-txt-bref-2023`

##### Waste flows

###### Raw-silk wastewater-treatment sludge (`wastewater_treatment_sludge`)

Applicability: Sludge leaves for treatment or disposal.

- Flow name: Raw-silk wastewater-treatment sludge
- Direction: outputs (`outputs`)
- Flow type: Waste (`waste`)
- Selected flow: Raw-silk wastewater-treatment sludge
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; generic sludge candidates did not identify raw-silk wastewater-treatment sludge; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured by homogeneous route and lot; never merged with another row
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual_management`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_residual_management`
- Source ID or status: `eu-txt-bref-2023`
- Sources: `eu-txt-bref-2023`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Treated water discharged to surface water (`treated_water_to_surface_water`)

Applicability: Measured discharge and pollutant-specific result exist.

- Flow name: Treated water discharged to surface water
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Treated water discharged to surface water
- UUID status: unresolved — flow-hybrid-search completed 2026-08-12; no exact treated-water elementary flow preserved the declared surface-water recipient; requires foreground mapping
- Flow property / unit: Mass / kg
- Amount rule: measured value, or atomic activity amount multiplied by a separately identified current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual_management`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_residual_management`
- Source ID or status: `eu-txt-bref-2023`
- Sources: `eu-txt-bref-2023`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 2000
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Chemical oxygen demand to water (`chemical_oxygen_demand_to_water`)

Applicability: Measured discharge and pollutant-specific result exist.

- Flow name: Chemical oxygen demand to water
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Chemical Oxygen Demand `e57fc631-2c77-457a-aa30-be79e357792b`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Elementary flow, Mass / kg; water unspecified, version 01.01.000
- Flow property / unit: Mass / kg
- Amount rule: measured value, or atomic activity amount multiplied by a separately identified current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual_management`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_residual_management`
- Source ID or status: `eu-txt-bref-2023`
- Sources: `eu-txt-bref-2023`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Total nitrogen to water (`total_nitrogen_to_water`)

Applicability: Measured discharge and pollutant-specific result exist.

- Flow name: Total nitrogen to water
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Nitrogen, total excluding N2 `e1716164-e906-48e4-ad77-8f2ec4a9a4c5`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Elementary flow, Mass / kg; fresh water, version 03.00.004
- Flow property / unit: Mass / kg
- Amount rule: measured value, or atomic activity amount multiplied by a separately identified current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual_management`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_residual_management`
- Source ID or status: `eu-txt-bref-2023`
- Sources: `eu-txt-bref-2023`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Total phosphorus to water (`total_phosphorus_to_water`)

Applicability: Measured discharge and pollutant-specific result exist.

- Flow name: Total phosphorus to water
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Phosphorus, total `f9df3107-6b59-4067-b920-3c61cf3630c7`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Elementary flow, Mass / kg; fresh water, version 03.00.004
- Flow property / unit: Mass / kg
- Amount rule: measured value, or atomic activity amount multiplied by a separately identified current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual_management`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_residual_management`
- Source ID or status: `eu-txt-bref-2023`
- Sources: `eu-txt-bref-2023`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Suspended solids to water (`suspended_solids_to_water`)

Applicability: Measured discharge and pollutant-specific result exist.

- Flow name: Suspended solids to water
- Direction: outputs (`outputs`)
- Flow type: Elementary (`elementary`)
- Selected flow: Suspended solids, unspecified `618d3d9a-9f85-417d-b0c4-e87942a9e345`
- UUID status: confirmed — flow-hybrid-search match verified by Tiangong flow get on 2026-08-12: state_code=100, Elementary flow, Mass / kg; water unspecified, version 01.00.004
- Flow property / unit: Mass / kg
- Amount rule: measured value, or atomic activity amount multiplied by a separately identified current factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
- Normalization basis: per 1 kg conditioned net raw silk from the same route
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residual_management`
- Range or uncertainty: no universal default; report measurement, sampling, or factor uncertainty.
- Data source ID: `cp_residual_management`
- Source ID or status: `eu-txt-bref-2023`
- Sources: `eu-txt-bref-2023`
- Range: Provisional screening estimate
  - Range role: Default estimate (`default_estimate`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg conditioned raw silk
  - Basis: screening only; replace with route-specific measurement
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)
## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `al_subdivide_routes` | Species, cocoon condition, and reeling technology | Subdivide and calculate route-specific processes before any allocation or aggregation. Do not allocate burdens through an unconditional average of mulberry/non-mulberry, fresh/dried, or hand/machine routes. | `iso-14044-2006`; `fao-silk-reeling-testing-1999` |
| `al_classify_outputs` | Pupae, recoverable cocoon/silk material, and residues | Determine product or waste status from the actual function and destination. FAO identifies pupae and several silk residues as potentially valuable outputs; saleable material shall not be silently treated as burden-free waste. | `fao-silk-reeling-testing-1999` |
| `al_avoid_where_possible` | Multi-output processes | First avoid allocation by separately measuring attributable operations or subdividing treatment. Use system expansion only when the downstream study method permits it and the substituted product and evidence are explicit. | `iso-14044-2006` |
| `al_physical_then_economic` | Unavoidable shared burdens | Where subdivision is not feasible, use a documented physical causal relation when defensible. If no defensible physical relation exists, use economic allocation based on contemporaneous net-gate values and quantities for all co-products, and report a sensitivity case. | `iso-14044-2006` |
| `al_internal_recycling` | Internally returned silk, cocoon, water, or heat | Treat internal recycling as an internal loop. Count only make-up inputs and final outputs crossing the reporting-unit boundary; disclose recirculation rates without crediting the same material twice. | `iso-14044-2006`; `eu-txt-bref-2023` |
| `al_residual_treatment` | Wastewater and final wastes | Assign on-site treatment burdens to the generating route by measured residual quantity and, where treatment demand differs materially, by pollutant load or another documented causal driver. | `iso-14044-2006`; `eu-txt-bref-2023` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cocoon_receipt` | `cocoon_receipt_preparation` | Cocoon input, acceptance, rejects, receipt electricity | Weighbridge/scale, supplier lot, inspection, meter | gross_mass; tare; net_mass; fresh_or_dried; moisture_or_condition; species_or_fibre_type; supplier; origin; lot; accepted_mass; reject_mass_by_disposition; electricity | Calibrated weighing by lot, inspection record, and meter/submeter | kg; percent; kWh | Every received lot; electricity at least monthly | At least 12 representative months or all campaigns in a shorter seasonal year | Each filature and supplier-origin group separately | Sum by homogeneous route; normalize only to conditioned output from the same route | Scale calibration; supplier record; moisture method; lot reconciliation; meter evidence |
| `cp_cocoon_drying` | `cocoon_stifling_drying` | Fresh input, dried output, fuel/heat/electricity, losses, direct emissions | Batch sheet, meters, fuel issue, moisture test | fresh_mass; dried_mass; input_moisture; output_moisture; dryer_type; temperature_profile; runtime; fuel_by_type; heat; electricity; loss_mass; emission_method | Batch weighing and moisture test; calibrated meters or fuel stock balance | kg; percent; MJ; kWh; h | Every batch; utilities at least daily | Full drying campaign and all material technologies | Each dryer and site separately | Allocate only documented shared utility to batches, then normalize to dried output and route reference flow | Scale/moisture calibration; meter/fuel invoices; batch log; emission factor provenance |
| `cp_cooking_reeling` | `cocoon_cooking_reeling` | Cocoons, water, energy, aids, raw silk, pupae, by-products, wastewater, residuals, emissions | Batch/reel production sheet, meters, dosing, scales, lab and discharge records | cocoon_mass_and_condition; route; machine_type; cooking_method; water_withdrawal; recirculation; discharge; steam; heat; fuel; electricity; aid_name_and_mass; raw_silk_mass_and_moisture; pupae_mass; byproduct_mass_by_type; waste_mass; pollutant_data | Meter and weigh each batch or production shift; retain route identity | kg; m3; MJ; kWh; percent; concentration units | Each lot/shift; discharge monitoring at permit or process-control frequency | At least 12 representative months or complete seasonal production | Each filature, water system, and reeling technology separately | Close water and mass balances by route before normalization; no cross-route averaging without documented shares | Meter/scale calibration; production logs; laboratory QA; invoices; discharge chain of custody |
| `cp_rereeling` | `raw_silk_rereeling_finishing` | Raw-silk transfer, water/aids, energy, accepted output, residuals | Lot sheet, scale, meter, dosing and reject record | input_mass_and_moisture; package_form_in; reeling_speed; water; aid_name_and_mass; electricity; heat; output_mass_and_moisture; package_form_out; reject_mass; wastewater | Lot-level weighing and metering or defensible engineering allocation | kg; kWh; MJ; percent | Each lot; utilities at least shift/month with allocation basis | All re-reeled lots in the reporting period | Each line and re-reeling route separately | Normalize accepted output and reject flows to the same moisture basis | Scale/meter calibration; lot traceability; aid purchase and dosing records |
| `cp_release_testing` | `conditioning_testing_packing` | Conditioned mass, linear density, defects/evenness, grade, testing energy, packaging, rejects | Test certificate, conditioning log, scale, oven, packaging BOM, meter | lot_id; gross_mass; tare; oven_dry_mass_or_moisture; agreed_regain; conditioning_temperature_humidity_time; linear_density_result_and_method; defect_evenness_method_and_result; grade; package_material_mass; reuse_cycles; energy; reject_mass | Apply declared contract or standard; calibrated weighing and test equipment | kg; percent; dtex or denier; kWh; MJ | Every release lot with sampling per declared method | All released lots in reporting period | Each product specification and route separately | Calculate conditioned net mass; aggregate only conforming homogeneous lots | Test-method revision; certificates; calibration; raw observations; sampling record |
| `cp_residual_management` | `onsite_wastewater_treatment` | Two named wastewaters; each treatment chemical; electricity; reclaimed water; sludge; each water pollutant | Treatment log, meters, scales, laboratory data | reeling_wastewater; rereeling_wastewater; sodium_hydroxide; ferric_chloride; polyacrylamide; electricity; reclaimed_water; sludge; discharge; COD; total_nitrogen; total_phosphorus; suspended_solids | Reconcile each producing-process transfer to treatment records; monitor according to permit and process needs | kg; m3; kWh; concentration and load units | Continuous/daily flow where available; chemistry at permit or control frequency | Representative full reporting year including peak campaigns | Each on-site treatment train separately | Allocate by measured quantity and causal treatment driver, then normalize to generating route | Laboratory accreditation/QA; meter calibration; manifests; treatment and discharge records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `cr_conditioned_mass` | Raw-silk reference mass | `conditioned_mass = oven_dry_mass × (1 + declared_regain_fraction)`. Use `0.11` only when the applicable commercial specification explicitly adopts the FAO handbook's 11% basis. | oven_dry_mass; declared_regain_fraction; contract_or_standard | conditioned net raw-silk mass | `fao-silk-reeling-testing-1999` |
| `cr_linear_density` | Silk size reporting | Preserve measured dtex or denier. When conversion is required, `dtex = denier × 10/9`; retain the original unit and test method. | measured_size; original_unit; test_method | declared linear density | `iso-21046-2018` |
| `cr_fresh_cocoon_screen` | Fresh-cocoon yield QA | `fresh_cocoon_input_per_kg_raw_silk = 1 / measured_raw_silk_fraction`; compare only to the 12-20% FAO screening interval for a comparable route. | fresh_cocoon_mass; conditioned_raw_silk_mass | kg fresh cocoons/kg raw silk | `fao-silk-reeling-testing-1999` |
| `cr_dried_cocoon_screen` | Dried-cocoon yield QA | Convert fresh and dried cocoon masses through measured moisture where available. The 2.1-4.4 kg/kg screen is a conservative combination of FAO fresh yield and whole-cocoon moisture intervals and shall not replace measured route data. | cocoon_mass; cocoon_moisture; raw_silk_mass | dry-matter-consistent cocoon ratio | `fao-silk-reeling-testing-1999` |
| `cr_route_normalization` | All foreground rows | `normalized_amount = route_period_amount / route_period_conditioned_raw_silk_mass`; exclude internal transfers from boundary-crossing totals. | route-specific raw records; conditioned output | amount per kg reference flow | `eu-pef-2021-2279` |
| `cr_water_balance` | Cooking, reeling, re-reeling, treatment | `withdrawal + water_in_inputs = discharge + evaporation + water_in_products_and_wastes + inventory_change`; show recirculated water separately. | all measured water terms | reconciled water balance and closure | `mass-balance-identity`; `eu-txt-bref-2023` |
| `cr_process_mass_balance` | Each process and route | Reconcile moisture-consistent input mass with products, co-products, wastes, emissions, and justified inventory change. Investigate rather than force-close material discrepancies. | measured input/output masses; moisture; emissions | mass-balance closure and discrepancy | `mass-balance-identity` |
| `cr_economic_allocation` | Unavoidable multi-output allocation | `share_i = quantity_i × representative_net_gate_price_i / Σ(quantity_j × representative_net_gate_price_j)` using one consistent price period and geography; report price and sensitivity. | co-product quantities; net-gate prices | allocation shares | `iso-14044-2006` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | Reference product and cocoons | Link every released lot to species/fibre type, supplier cocoon lots, starting condition, reeling route, direct/indirect status, re-reeling status, package, grade/test method, and moisture basis. | Lot genealogy and release certificate |
| `dq_route_representativeness` | Technology and geography | Keep route-specific records and report production shares, coverage, downtime, seasonal gaps, and excluded sites. | Route register, production ledger, site list, coverage calculation |
| `dq_temporal_coverage` | Foreground annual dataset | Use at least 12 representative months where production is continuous; for seasonal production, cover all campaigns represented and disclose deviations. | Dated raw records and coverage statement |
| `dq_mass_and_water_closure` | Each foreground process | Report mass- and water-balance closure and investigate material discrepancies without inventing balancing flows. | Calculation workbook, meter/scale calibration, investigation record |
| `dq_meter_and_lab_quality` | Utilities, moisture, quality, and emissions | Retain calibration, sampling, method revision, laboratory QA, detection limits, and data-gap treatment. | Calibration certificates, laboratory reports, sampling plan |
| `dq_upstream_completeness` | Cocoons, utilities, chemicals, packaging, transport, treatment | Link representative upstream datasets and disclose age, geography, technology, and any supplier drying or transport gaps. | Dataset references and representativeness assessment |
| `dq_estimate_replacement` | Reasoned-estimate ranges | Treat every `reasoned_estimate` range as provisional and non-conforming for publication-critical substitution. Replace it with audited foreground or reviewed source-backed evidence when available or when route/specification changes. | Replacement log and source/record review |
| `dq_source_limitations` | External evidence | FAO 1999 values are technical screening evidence with mainly bivoltine temperate-zone context; ISO abstracts establish method applicability but not unpublished procedural details; EU BREF applicability is subject to installation scope. | Source-use statement and limitations disclosure |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `val_reference_identity` | Reference flow | Require the exact product flow UUID `343df125-d682-4ffa-8829-5fbc785bdbc9`, Mass UUID `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass UUID `93a60a57-a4c8-11da-a746-0800200c9a66`, unit kg, and exactly 1 kg conditioned net output. | `un-cpc-3-0-26110` |
| `val_required_qualifiers` | Dataset metadata | Fail completeness when any required qualifier is absent, including species/fibre type, cocoon condition, technology, direct/indirect route, re-reeling, package, linear density, quality method/grade, sericin condition, moisture basis, geography, period, and allocation. | `fao-silk-reeling-testing-1999`; `iso-15625-2014`; `iso-21046-2018` |
| `val_not_thrown_scope` | Product boundary | Reject a result labelled by this PCR if throwing/twisting, spun-silk conversion, degumming, dyeing, weaving, or downstream finishing is inseparably included. | `un-cpc-3-0-26110`; `fao-silk-reeling-testing-1999` |
| `val_route_conditioning` | Route aggregation | Require independent route results before weighted aggregation and require documented production shares; reject unconditional averaging across species, cocoon state, or reeling technology. | `fao-silk-reeling-testing-1999` |
| `val_reference_mass` | Conditioned mass | Require gross, tare, net, moisture or oven-dry result, declared regain, and calculation. Flag an assumed 11% regain unless the applicable specification explicitly adopts it. | `fao-silk-reeling-testing-1999` |
| `val_process_completeness` | Foreground inventory | Require receipt/sorting, cooking/reeling, conditioning/testing/packing, and every triggered conditional process, together with water, energy, cocoon, product, co-product, waste, wastewater, direct-emission, and packaging records or explicit justified zero/not-applicable statements. | `fao-silk-reeling-testing-1999`; `eu-txt-bref-2023` |
| `val_mass_water_balance` | Each route | Require reported mass and water closure; flag negative flows, outputs above compatible measured inputs, recirculated water counted as withdrawal, or unexplained material discrepancies. | `mass-balance-identity`; `eu-txt-bref-2023` |
| `val_coproduct_destination` | Pupae and silk/cocoon by-products | Require measured mass, product-or-waste status, destination, and consistent allocation. Flag saleable or beneficially used material treated as burden-free waste. | `fao-silk-reeling-testing-1999`; `iso-14044-2006` |
| `val_data_coverage` | Published dataset candidate | Require temporal/site coverage, calibration and laboratory evidence, upstream dataset references, source limitations, and a list of remaining provisional estimates. Inconclusive checks are not passes. | `eu-pef-2021-2279`; `iso-14044-2006` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground raw-silk production dataset with linked upstream cocoon, utility, material, transport, and treatment datasets |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology, representativeness, and uncertainty review |
| allowed_use | LCA process or lifecycle-model projections for the declared raw-silk species/type, cocoon condition, filature technology, geography, period, quality, moisture basis, and allocation method |
| excluded_use | Unqualified global or category average; comparison of routes without harmonized boundary and allocation; proxy for thrown, spun, degummed, dyed, woven, or finished silk; use of provisional estimates as reviewed publication-critical defaults |
| required_metadata | All reference-flow qualifiers; filature/site coverage; reporting period; route shares; capacity utilization; upstream dataset identities; water and energy carriers; co-product destinations; allocation; test methods; source limitations; uncertainty and data gaps |
| required_quality_disclosure | Raw-record coverage; scale/meter/laboratory QA; mass and water closure; fresh/dried conversion; route aggregation; source age and applicability; provisional estimate list and replacement plan; upstream representativeness |
| update_trigger | Change in product-flow identity or reference property; species/fibre type; cocoon starting condition; reeling or re-reeling technology; quality or moisture specification; allocation; co-product destination; water/energy system; treatment; geography; data older than the governing study window; or acquisition of audited data replacing provisional ranges |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-26110` | `standard` | United Nations Statistics Division, Central Product Classification Version 3.0 Explanatory Notes, 30 June 2025, subclass 26110, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf, retrieved 2026-08-12 | Official classification label and exclusion of downstream silk yarn categories; not a process or quantity source |
| `fao-silk-reeling-testing-1999` | `handbook` | Yong-woo Lee, Silk Reeling and Testing Manual, FAO Agricultural Services Bulletin No. 136, ISBN 92-5-104293-4, 1999, https://www.fao.org/4/x2099E/x2099e00.htm, retrieved 2026-08-12 | Product/process decomposition; cocoon condition; route distinctions; fresh-cocoon yield screen; cocoon moisture; water planning screens; re-reeling; by-products; conditioned mass and quality testing. Limitation: mainly bivoltine temperate-zone technical practice and not a universal current-technology default. |
| `iso-15625-2014` | `standard` | ISO 15625:2014, Silk — Electronic test method for defects and evenness of raw silk, confirmed 2023, https://www.iso.org/standard/55447.html, retrieved 2026-08-12 | Applicability of electronic defects/evenness testing to specified raw-silk forms and size range; the PCR does not reproduce paywalled procedural details |
| `iso-21046-2018` | `standard` | ISO 21046:2018, Silk — Test method for determining the size of silk yarns, confirmed 2025, https://www.iso.org/standard/69734.html, retrieved 2026-08-12 | Declared linear-density test method for silk yarns; excludes spun silk according to the official abstract |
| `iso-14044-2006` | `standard` | ISO 14044:2006, Environmental management — Life cycle assessment — Requirements and guidelines, confirmed current, https://www.iso.org/standard/38498.html, retrieved 2026-08-12 | LCI boundary, allocation, reporting, limitations, and review framework |
| `eu-pef-2021-2279` | `official_guidance` | Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, OJ L 471, 30 December 2021, ELI http://data.europa.eu/eli/reco/2021/2279/oj, retrieved 2026-08-12 | Life-cycle data quality, supply-chain completeness, representativeness, verification, and transparent use limitations |
| `eu-txt-bref-2023` | `official_guidance` | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, January 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/index.php/reference/textiles-industry, retrieved 2026-08-12 | Conditional wet-process water, energy, wastewater, emission monitoring, and treatment context; no raw-silk-specific amount factor is taken from this source |
| `mass-balance-identity` | `method_factor` | Conservation-of-mass and site water-balance identity as implemented from measured foreground inputs, outputs, stock change, and releases | QA limits, mass/water closure, and investigation of discrepancies; not an external empirical range |
