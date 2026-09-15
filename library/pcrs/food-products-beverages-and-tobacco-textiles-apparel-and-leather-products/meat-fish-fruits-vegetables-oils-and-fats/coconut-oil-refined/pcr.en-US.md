---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.coconut-oil-refined
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Coconut oil, refined

## 1. Scope and Applicability

This PCR applies to bulk refined coconut oil leaving a refinery after a declared chemical-refining or physical-refining route. It covers refinery-gate production from received crude coconut oil through route-applicable pretreatment, degumming or neutralization, bleaching and filtration, deodorization, final polishing, cooling, and bulk storage or loading.

The category includes refined coconut oil derived from the kernel of *Cocos nucifera* L. for edible or declared technical markets when the dataset identifies the applicable product specification. It excludes crude coconut oil, virgin or cold-pressed coconut oil, hydrogenated or interesterified products, fractionated coconut-oil products, medium-chain triglyceride preparations, blends, formulated consumer products, retail packaging, distribution, use, and end-of-life. Cultivation, copra production, and crude-oil production are upstream background systems and are not part of the refinery foreground process unless the declared study boundary explicitly expands to include them.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.coconut-oil-refined |
| classification_refs | CPC 3.0: 21662, Coconut oil, refined (exact mapping context) |
| covered_products | Bulk refined coconut oil produced by declared chemical or physical refining; edible-grade or declared technical-grade material meeting its stated specification |
| excluded_products | Crude, virgin, cold-pressed, hydrogenated, interesterified, fractionated, blended, formulated, or retail-packaged coconut-oil products; isolated medium-chain triglyceride preparations |
| representative_product | Bulk refined coconut oil at the refinery gate |
| production_route | Received crude coconut oil; route-specific pretreatment and degumming or neutralization; bleaching and filtration; deodorization; polishing, cooling, and bulk storage/loading |
| market_state | Finished refined oil in bulk at the refinery gate, with edible or technical grade and packaging state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of bulk refined coconut oil at the refinery gate |
| How much | 1 kg net mass of refined coconut oil |
| How well | Refined coconut oil derived from coconut kernel, meeting the declared edible-grade or technical-grade specification and the declared contaminant-control requirements |
| How long or cycle | One production batch delivered at the refinery gate; no service duration applies |
| reference_flow_link | One kilogram of the declared finished refined coconut oil output from `deodorization_finishing` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Coconut oil, refined `570397b9-62ae-4576-b584-56691c7fed08` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | coconut origin; refined state; chemical or physical refining route; edible or technical grade; applicable product specification; production site and geography; batch or averaging period; bulk or packaged state; allocation treatment for recovered oil, soapstock, spent bleaching earth, and deodorizer distillate |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Finished refined coconut oil reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net product mass excluding containers and normalize all inventory results to exactly 1 kg of conforming refined coconut oil at the refinery gate. |
| `wet_mass_and_dry_matter` | Crude oil, bleaching earth, soapstock, spent earth, and other moisture-bearing material streams | Mass | kg | Record as-received mass and, when moisture materially affects balance or allocation, retain moisture or dry-matter fraction and the sampling method; do not mix wet and dry bases. |
| `energy_carrier_units` | Purchased electricity, fuels, and steam | Energy or carrier-specific property | kWh, MJ, or kg steam as collected | Preserve the invoiced or metered unit, document lower/higher heating-value conventions for fuels, and convert only with an explicit factor and source. |
| `water_accounting` | Process, wash, cooling, and boiler-feed water | Volume or Mass | m3 or kg | Distinguish withdrawal, recirculation, evaporation, and discharged wastewater; do not count recirculated water as a new withdrawal on every pass. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Crude coconut oil received at the refinery inlet, with origin, supplier, water/moisture, free-fatty-acid and relevant precursor information declared where available |
| starting_condition_role | Upstream product input to the refinery foreground system |
| product_classification_scope | Refined coconut oil only; intermediates remain process-linked product flows and do not create separate refined-coconut-oil reference products |
| recursive_input_rule | If refined coconut oil is reworked within the refinery, record it as a separately identified rework input and exclude its earlier burdens from duplicate counting; purchased refined coconut oil must use an upstream dataset and must not be represented as crude coconut oil. |
| upstream_dataset_requirement | Use a geographically, temporally, and technologically representative upstream dataset for crude coconut oil and disclose whether cultivation, copra preparation, extraction, transport, and storage are included. |
| disclosure | Declare refinery route, batch or averaging period, site geography, crude-oil origin and quality, product grade/specification, co-product and waste destinations, treatment systems, allocation choices, recycled loops, and any excluded process. |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_refinery_gate` | Foreground refinery system | Include all material and energy flows from crude-oil receipt through route-applicable degumming or neutralization, bleaching, deodorization, polishing, cooling, and bulk storage/loading; packaging and downstream distribution are excluded unless separately declared. | `codex-cxc-79-2019`; `eu-fdm-bat-2019` |
| `boundary_route_disclosure` | Chemical and physical refining routes | Model the actual route: chemical refining includes neutralization when performed, while physical refining omits neutralization and relies on degumming, bleaching, and deodorization; do not combine route inventories without a production-weighted calculation. | `codex-cxc-79-2019` |
| `boundary_environmental_streams` | Resource and emission inventory | Include water, energy, raw materials, wastewater, waste gas, residues, recovered materials, and treatment operations at the most appropriate process or installation level. | `eu-fdm-bat-2019` |
| `boundary_contaminant_control` | Degumming, bleaching, deodorization, and any post-refining treatment | Record process conditions and additional treatment that materially control 3-MCPDE and GE formation; the selected mitigation shall not be assumed identical across oil types or equipment. | `codex-cxc-79-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_pretreatment` | Crude oil receipt and pretreatment | `required` | Always | Foreground receipt, storage, heating, washing or conditioning before refining | kg conditioned crude oil transferred |
| `degumming_neutralization` | Degumming and chemical neutralization | `conditional` | Include each operation actually performed; neutralization is normally absent from a physical-refining route | Foreground removal of phospholipids, free fatty acids, soaps, and precursor compounds | kg treated oil transferred |
| `bleaching_filtration` | Bleaching and filtration | `required` | Always; declare clay type and any activated post-refining earth separately | Foreground adsorption and solids separation | kg bleached oil transferred |
| `deodorization_finishing` | Deodorization and finishing | `required` | Always; include additional deodorization or post-treatment when performed | Foreground steam stripping, vacuum operation, polishing, cooling, and finished-oil output | 1 kg refined coconut oil |

### Process: Crude oil receipt and pretreatment (`receipt_pretreatment`)

#### Inputs

##### Product flows

###### Crude coconut oil at refinery inlet (`crude_coconut_oil_input`)

Record the supplier-delivered crude coconut oil crossing the refinery foreground boundary, including tank inventory changes and recovered oil returned from an external operator.

- Selected flow: Crude coconut oil
- Flow property / unit: Mass / kg
- Amount rule: measured net crude coconut oil consumed by the batch or reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined coconut oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `codex-cxs-210-1999`
- Range: Provisional crude-oil input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.00
  - Upper: 1.30
  - Unit: kg
  - Basis: per 1 kg refined coconut oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Pretreatment water and additives (`pretreatment_materials`)

Record water and any citric acid, phosphoric acid, or other declared conditioning material actually consumed before degumming or bleaching; keep each material as a separate dataset exchange in implementation.

- Selected flow: Process water and declared pretreatment additives
- Flow property / unit: Mass / kg
- Amount rule: metered water plus weighed or invoiced additive consumption, disaggregated by material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined coconut oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `codex-cxc-79-2019`
- Range: Provisional combined pretreatment-material screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg
  - Basis: per 1 kg refined coconut oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conditioned crude coconut oil (`conditioned_oil_output`)

Calculate the oil transferred to the next route-specific operation from tank, transfer, and loss records.

- Selected flow: Conditioned crude coconut oil intermediate
- Flow property / unit: Mass / kg
- Amount rule: opening inventory plus crude input minus closing inventory, separated residues, wastewater oil, and measured losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined coconut oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_transfer_balance`
- Sources: `eu-fdm-bat-2019`

##### Waste flows

###### Pretreatment residues and wastewater (`pretreatment_residues`)

Record separated solids, tank bottoms, wash water, and oil recovered or lost with each stream; classify a stream as product, waste, or wastewater according to its actual destination.

- Selected flow: Pretreatment residues and wastewater
- Flow property / unit: Mass or Volume / kg or m3
- Amount rule: measured discharge, removal ticket, tank transfer, or mass-balance residual, disaggregated by destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined coconut oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources: `eu-fdm-bat-2019`
- Range: Provisional pretreatment-residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.30
  - Unit: kg or m3, reported separately
  - Basis: per 1 kg refined coconut oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Degumming and chemical neutralization (`degumming_neutralization`)

#### Inputs

##### Product flows

###### Conditioned oil feed (`conditioned_oil_input`)

Record the conditioned oil entering each route-applicable degumming or neutralization operation.

- Selected flow: Conditioned crude coconut oil intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer into the operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_transfer_balance`
- Sources: `codex-cxc-79-2019`

###### Degumming and neutralization materials (`degumming_neutralization_materials`)

Record water, acid, alkali, and other processing aids separately and only for operations actually performed.

- Selected flow: Water, degumming acid, alkali, and declared processing aids
- Flow property / unit: Mass / kg
- Amount rule: metered, weighed, or invoiced consumption by material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `codex-cxc-79-2019`
- Range: Provisional route-material screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg
  - Basis: per kg treated oil output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Degummed or neutralized oil (`treated_oil_output`)

Calculate treated oil delivered to bleaching after route-specific separation losses.

- Selected flow: Degummed or neutralized coconut oil intermediate
- Flow property / unit: Mass / kg
- Amount rule: collected feed less measured gums, soapstock, wastewater oil, and other losses, reconciled to transfer meters
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_transfer_balance`
- Sources: `codex-cxc-79-2019`

##### Waste flows

###### Gums, soapstock, and neutralization wastewater (`gums_soapstock_wastewater`)

Record gums, soapstock, acid oil, wastewater, and recovered oil separately, including destination and whether economic value is realized.

- Selected flow: Gums, soapstock, acid oil, and wastewater
- Flow property / unit: Mass or Volume / kg or m3
- Amount rule: measured separated mass, wastewater flow, and destination records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg treated oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources: `codex-cxc-79-2019`; `eu-fdm-bat-2019`
- Range: Provisional separation-output screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.25
  - Unit: kg or m3, reported separately
  - Basis: per kg treated oil output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Bleaching and filtration (`bleaching_filtration`)

#### Inputs

##### Product flows

###### Oil feed to bleaching (`oil_feed_bleaching`)

Record the actual route-specific oil entering the bleaching vessel.

- Selected flow: Degummed, neutralized, or otherwise conditioned coconut oil intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer into bleaching
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg bleached oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_transfer_balance`
- Sources: `codex-cxc-79-2019`

###### Bleaching earth and filter aids (`bleaching_media_input`)

Record bleaching clay, activated carbon, and filter aids by material; declare chlorine-related specifications when relevant to contaminant control.

- Selected flow: Bleaching earth and filter aids
- Flow property / unit: Mass / kg
- Amount rule: weighed or invoiced material consumed, corrected for inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg bleached oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_material_mass_records`
- Sources: `codex-cxc-79-2019`
- Range: Provisional bleaching-media screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.10
  - Unit: kg
  - Basis: per kg bleached oil output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Bleaching energy (`bleaching_energy`)

Record electricity, steam, or fuel used for heating, vacuum, agitation, pumping, and filtration, disaggregated by carrier.

- Selected flow: Purchased electricity, steam, and fuels
- Flow property / unit: Energy or carrier-specific property / kWh, MJ, or kg
- Amount rule: process-metered use or allocated site utility records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bleached oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `eu-fdm-bat-2019`
- Range: Provisional bleaching-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: MJ
  - Basis: per kg bleached oil output, all carriers converted and reported with factors
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Bleached oil (`bleached_oil_output`)

Calculate filtered bleached oil transferred to deodorization.

- Selected flow: Bleached coconut oil intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer reconciled with feed, media, spent earth, recovered oil, and other losses
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg bleached oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_intermediate_transfer_balance`
- Sources: `codex-cxc-79-2019`

##### Waste flows

###### Spent bleaching earth and filtration residues (`spent_bleaching_media`)

Record wet spent earth, filter residues, recovered oil, and destination; avoid double counting recovered oil returned to the process.

- Selected flow: Spent bleaching earth and filtration residues
- Flow property / unit: Mass / kg
- Amount rule: measured removal mass and recovered-oil transfer records
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg bleached oil output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources: `codex-cxc-79-2019`; `eu-fdm-bat-2019`
- Range: Provisional spent-media screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.20
  - Unit: kg
  - Basis: per kg bleached oil output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Deodorization and finishing (`deodorization_finishing`)

#### Inputs

##### Product flows

###### Bleached oil feed (`bleached_oil_input`)

Record bleached oil entering the deodorizer and any internal rework separately.

- Selected flow: Bleached coconut oil intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured fresh feed plus separately measured rework feed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined coconut oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_intermediate_transfer_balance`
- Sources: `codex-cxc-79-2019`
- Range: Provisional deodorizer-feed screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.00
  - Upper: 1.15
  - Unit: kg
  - Basis: per 1 kg refined coconut oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Stripping steam and deodorization energy (`deodorization_utilities`)

Record stripping steam, vacuum-system electricity, heating fuel or steam, pumping, polishing, and cooling energy separately by carrier.

- Selected flow: Stripping steam, electricity, and heating utilities
- Flow property / unit: Energy or carrier-specific property / kg steam, kWh, or MJ
- Amount rule: process-metered use or allocated site utility records with documented factors
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined coconut oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_records`
- Sources: `codex-cxc-79-2019`; `eu-fdm-bat-2019`
- Range: Provisional deodorization-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 10
  - Unit: MJ
  - Basis: per 1 kg refined coconut oil output, all carriers converted and reported with factors
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cooling and process water (`deodorization_water`)

Record freshwater withdrawal, recirculated cooling water, boiler-feed water, condensate return, and makeup water as separate quantities.

- Selected flow: Cooling and process water
- Flow property / unit: Volume / m3
- Amount rule: metered withdrawal and loop makeup, excluding recirculated passes from repeated withdrawal counting
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined coconut oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater_records`
- Sources: `eu-fdm-bat-2019`
- Range: Provisional water-withdrawal screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: m3
  - Basis: per 1 kg refined coconut oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Refined coconut oil reference product (`refined_coconut_oil_output`)

Record only conforming finished refined coconut oil at the refinery gate as the quantitative reference output.

- Selected flow: Coconut oil, refined `570397b9-62ae-4576-b584-56691c7fed08`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg net conforming product after normalization
- Value mode: Fixed value (`fixed_value`)
- Specificity: Generic (`generic`)
- Normalization basis: PCR reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources: `codex-cxs-210-1999`

###### Deodorizer distillate or recovered fatty material (`deodorizer_distillate`)

Record condensable free fatty acids and volatile fatty material separately from uncontrolled air emissions, and declare whether it is a co-product, recovered material, or waste according to destination.

- Selected flow: Coconut-oil deodorizer distillate or recovered fatty material
- Flow property / unit: Mass / kg
- Amount rule: measured receiver mass corrected for inventory change
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg refined coconut oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residue_wastewater_records`
- Sources: `codex-cxc-79-2019`
- Range: Provisional distillate screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg
  - Basis: per 1 kg refined coconut oil output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Refinery wastewater (`refinery_wastewater`)

Record net wastewater discharged after excluding recirculated water; characterize treatment route and relevant oil, organic, nutrient, chloride, conductivity, pH, temperature, and solids parameters when applicable.

- Selected flow: Refinery wastewater
- Flow property / unit: Volume / m3
- Amount rule: metered discharge from the refinery system boundary
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined coconut oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_wastewater_records`
- Sources: `eu-fdm-bat-2019`
- Range: Indicative stand-alone vegetable-oil refining wastewater-discharge range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.00015
  - Upper: 0.0009
  - Unit: m3
  - Basis: per 1 kg oil produced, converted from 0.15-0.9 m3 per tonne oil produced
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-fdm-bat-2019`

##### Elementary flows

###### Direct volatile releases from deodorization and storage (`direct_air_releases`)

Record measured or calculated uncaptured volatile organic compounds and other direct releases to air; do not duplicate material captured as distillate or routed to treatment.

- Selected flow: Relevant direct emissions to air, reported as elementary flows
- Flow property / unit: Mass / kg
- Amount rule: stack or vent measurement, validated engineering calculation, or pollutant-specific mass balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg refined coconut oil output
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_emission_monitoring_records`
- Sources: `eu-fdm-bat-2019`
- Range: Provisional direct-air-release screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.01
  - Unit: kg
  - Basis: per 1 kg refined coconut oil output, summed only after pollutant identities remain distinguishable
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | Multi-output refinery processes | First avoid allocation through process subdivision and separately metered inventories; use system expansion only when the added function and substituted product are demonstrable and consistent with the study goal. | `eu-pef-method-2021` |
| `allocation_physical` | Unavoidable co-product allocation | When subdivision or system expansion is not feasible, use a documented physical relationship that reflects causation; simple mass allocation is allowed only when mass is the relevant physical relationship. | `eu-pef-method-2021` |
| `allocation_other_relation` | Cases without a defensible physical relationship | Use another documented relationship, such as economic value, only after the prior options fail; use a representative price period and disclose price source, currency, geography, and sensitivity. | `eu-pef-method-2021` |
| `allocation_waste_recovery` | Soapstock, acid oil, recovered oil, spent bleaching earth, distillate, and other residues | Classify each output from its actual destination and economic function. Do not assign co-product credit to a waste stream without evidence of a substituted function, and do not double count internally recovered oil. | `eu-pef-method-2021`; `eu-fdm-bat-2019` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass_records` | `receipt_pretreatment`; `degumming_neutralization`; `bleaching_filtration` | Raw oils, water, acids, alkali, bleaching media, and filter aids | Weighbridge, calibrated tank, batch sheet, purchase, and inventory record | material_id; supplier; batch_id; opening_stock; receipts; returns; closing_stock; measured_mass; moisture_or_concentration; timestamp | Reconcile calibrated measurements and stock movements by material and batch or reporting period | kg; concentration fraction | Each batch, aggregated monthly | Representative production period, normally 12 consecutive months | All foreground refinery units and storage tanks | Consumption = opening stock + receipts - returns - closing stock; normalize only after the conforming product mass is known | Calibration record; stock reconciliation; supplier specification; batch authorization |
| `cp_intermediate_transfer_balance` | all foreground processes | Intermediate oil feed and output | Tank gauge, mass-flow meter, batch transfer, and loss record | process_id; batch_id; opening_inventory; input_transfer; output_transfer; closing_inventory; recovered_oil; residue_oil; timestamp | Reconcile each transfer across adjacent processes and investigate unmatched transfers | kg | Each batch | Same period as the represented production | All intermediate oil tanks and transfer points | Intermediate output = opening + inputs - closing - separated outputs - documented losses | Meter calibration; tank strapping table; signed batch reconciliation |
| `cp_utility_records` | all foreground processes | Electricity, fuel, steam, and process heat | Submeter, boiler record, invoice, and operating-hour allocation | carrier; meter_start; meter_end; import; export; steam_mass; pressure; temperature; fuel_mass_or_volume; heating_value_basis; process_hours | Prefer process meters; allocate common utilities using a causal driver and disclose the allocation | kWh; MJ; kg steam; carrier unit | Continuous or per batch, aggregated monthly | Same period as the represented production | Foreground refinery and shared utilities used by it | Net use by carrier; convert with documented factors; no summation across unlike units before conversion | Meter calibration; invoice reconciliation; boiler efficiency and conversion-factor record |
| `cp_water_wastewater_records` | all foreground processes | Water withdrawal, recirculation, condensate, and wastewater | Water meter, loop balance, effluent meter, and laboratory analysis | source; withdrawal; recirculation; makeup; condensate_return; discharge; pH; temperature; COD_or_TOC; TSS; chloride; conductivity; sample_time | Measure net withdrawal and discharge and retain route-specific water balance and sampling results | m3; parameter-specific units | Continuous flow where available; quality sampling at the applicable regulatory or management frequency | Same period as the represented production, with sampling dates retained | Refinery water system and discharge points | Net withdrawal excludes recirculated passes; discharge is normalized to conforming product | Meter calibration; laboratory method; chain of custody; water-balance closure |
| `cp_residue_wastewater_records` | all foreground processes | Residues, co-products, recovered materials, and wastes | Receiver weight, removal ticket, laboratory result, and destination record | stream_id; mass_or_volume; moisture; oil_content; destination; economic_value; waste_code_if_applicable; timestamp | Record each destination separately and reconcile recovered oil to internal returns | kg or m3 | Each batch or shipment | Same period as the represented production | All foreground separation and waste handling points | Sum by stream identity and destination; do not net saleable and disposed fractions | Calibrated scale; transporter receipt; treatment or sale record; laboratory result |
| `cp_emission_monitoring_records` | `deodorization_finishing` | Direct air releases | Stack/vent measurement or engineering calculation based on collected operating data | pollutant; concentration; gas_flow; operating_time; capture_efficiency; calculation_inputs; method; timestamp | Apply relevant monitoring method at identified emission points and retain raw results | kg pollutant; concentration and flow units | Campaign-specific or applicable monitoring frequency | Representative operating campaigns within the production period | Deodorizer, vacuum, storage, and treatment vents within the boundary | Emission = measured concentration x flow x time or validated mass-balance result; subtract captured material only once | Sampling report; instrument calibration; calculation review; treatment performance record |
| `cp_product_quality_records` | `deodorization_finishing` | Conforming refined coconut oil | Certificate of analysis, batch release, and specification record | batch_id; origin; grade; specification; fatty_acid_profile; acidity; peroxide_value; moisture_and_volatiles; contaminants_if_required; release_status | Test or verify against the declared market specification using applicable methods | parameter-specific units | Each released batch or justified lot grouping | All released batches represented by the production period | Finished product tanks and loading points | Only released conforming mass enters the reference output | Laboratory accreditation or method record; signed certificate of analysis; release decision |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | Every inventory row | normalized quantity = period or batch quantity / net conforming refined coconut oil output in kg | collected row quantity; conforming product mass | quantity per 1 kg reference product | `eu-fdm-bat-2019` |
| `calc_oil_mass_balance` | Each oil-processing stage and the combined refinery | opening oil inventory + oil-bearing inputs = closing oil inventory + intermediate/final oil outputs + measured oil in residues/wastewater + documented losses; report unresolved residual separately | transfer, stock, residue oil, recovered oil, and product records | stage and refinery mass-balance closure | `eu-fdm-bat-2019` |
| `calc_water_balance` | Refinery water system | net withdrawal = gross withdrawal - returned water received from outside the reporting system; report recirculation, evaporation, condensate return, and discharge separately | water meter and loop records | water inventory per reference flow | `eu-fdm-bat-2019` |
| `calc_allocation_factor` | Unavoidable burden allocation | selected allocation factor for output i = documented physical or other relationship value for output i / sum of the same relationship values for all co-products; apply consistently to shared inputs and emissions | subdivision result; co-product quantities; physical relation or economic values | disclosed allocation factors and allocated inventory | `eu-pef-method-2021` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product and upstream crude oil | Verify coconut origin, refined/crude state, route, grade, specification, and Tiangong reference-flow identity; prevent substitution with palm-kernel oil, virgin coconut oil, or generic vegetable oil. | Product specification; supplier record; batch certificate; flow UUID verification |
| `dq_temporal` | Foreground data | Use a continuous representative period, normally at least 12 months where operations are not campaign-limited; disclose shutdowns, abnormal events, and shorter periods. | Dated meter, batch, invoice, and production records |
| `dq_technology` | Refinery route | Keep chemical and physical refining data separate unless production-weighted from documented output; identify degumming chemistry, neutralization status, bleaching media, deodorizer configuration, temperature, pressure/vacuum, residence time, and post-treatment. | Process flow sheet; operating log; production-weight calculation; `codex-cxc-79-2019` |
| `dq_geography` | Site and upstream datasets | Use site geography for foreground operations and representative geographies for crude oil, electricity, fuels, water, treatment, and transport. | Site metadata; supplier origin; background dataset metadata |
| `dq_precision_completeness` | Material, utility, residue, wastewater, and air inventories | Reconcile oil and water balances; quantify data gaps; document measurement uncertainty, allocation, and important exclusions; evaluate technological, geographical and time representativeness plus precision. | Balance reports; calibration; gap register; DQR record; `eu-pef-method-2021`; `eu-fdm-bat-2019` |
| `dq_product_conformance` | Finished refined coconut oil | Retain a batch release or certificate showing conformity with the declared product specification; when marketed for food, apply the relevant Codex or jurisdictional composition, contaminant, hygiene, and analysis requirements. | Certificate of analysis; declared standard; `codex-cxs-210-1999` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | The dataset shall contain exactly one quantitative-reference output using Coconut oil, refined `570397b9-62ae-4576-b584-56691c7fed08`, Mass `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and 1 kg after normalization. | `codex-cxs-210-1999` |
| `validate_required_qualifiers` | Dataset metadata | All required qualifiers shall be present and mutually consistent; crude, virgin, cold-pressed, hydrogenated, interesterified, fractionated, blended, or isolated MCT products fail category identity. | `codex-cxs-210-1999` |
| `validate_route_processes` | Process map and inventory | Receipt/pretreatment, bleaching/filtration, and deodorization/finishing shall be represented; degumming and neutralization shall match the declared route, and all exclusions or combined operations shall be justified. | `codex-cxc-79-2019` |
| `validate_inventory_coverage` | Foreground exchanges | The dataset shall account for crude oil, route-specific processing materials, electricity and thermal utilities, water, refined oil, intermediate transfers, residues/co-products, wastewater, direct emissions, and treatment destinations, or explicitly justify a non-applicable stream. | `eu-fdm-bat-2019` |
| `validate_mass_balance` | Oil-bearing streams | Oil mass balances shall close within the declared measurement uncertainty; residual imbalance shall be quantified, investigated, and not hidden by allocation or normalization. | `eu-fdm-bat-2019` |
| `validate_water_range` | Net refinery wastewater | Compare net discharge with the 0.00015-0.0009 m3/kg indicative stand-alone refining range; values outside it trigger review but do not automatically invalidate a site-specific dataset. | `eu-fdm-bat-2019` |
| `validate_contaminant_controls` | Refining conditions and product release | Record route-specific precursor assessment and deodorization conditions relevant to 3-MCPDE and GE control, and retain evidence that mitigation remains compatible with the declared product quality. | `codex-cxc-79-2019`; `codex-cxs-210-1999` |
| `validate_allocation` | Multi-output operations | Confirm the hierarchy of subdivision/system expansion, relevant physical relationship, then other relationship; all factors, values, destinations, and sensitivities shall be reproducible and internally recovered oil shall not receive duplicate credit. | `eu-pef-method-2021` |
| `validate_data_quality` | Foreground and linked background data | Confirm temporal, technological, geographical, and precision evidence, source traceability, calibration, batch/product conformance, and disclosure of gaps and provisional ranges. | `eu-pef-method-2021`; `eu-fdm-bat-2019` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground refinery-gate production dataset for bulk refined coconut oil |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | Attributional LCA of products using refined coconut oil; supplier or site comparisons with harmonized route, boundary, allocation, product grade, geography, and data quality; linkage into broader cradle-to-gate models |
| excluded_use | Virgin/cold-pressed oil, palm-kernel oil, fractionated or isolated MCT products, retail packaged oil without added packaging/distribution, consequential claims without an appropriate market model, or public comparative claims without review |
| required_metadata | PCR id/version; flow UUID; product and grade; applicable specification; chemical/physical route; site/geography; reference period; technology; crude-oil origin and upstream boundary; allocation; co-product/waste destinations; product quality release; data sources |
| required_quality_disclosure | Foreground coverage; meter/calibration status; oil and water balance; route weighting; data gaps; provisional estimates; uncertainty; background dataset representativeness; allocation sensitivity; deviations from this PCR |
| update_trigger | Change in feed origin or quality, refining route, degumming/neutralization practice, bleaching media, deodorizer conditions, energy or water system, contaminant controls, co-product destination, allocation basis, product specification, site geography, or evidence that makes a provisional range obsolete |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-210-1999` | `standard` | FAO and WHO, Codex Alimentarius, *Standard for Named Vegetable Oils*, CXS 210-1999, amended 2024 with 2026 correction, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B210-1999%2FCXS_210e.pdf (retrieved 2026-08-10) | Coconut-oil identity, edible-market specification, composition and quality conformity, contaminants, hygiene, labelling, and analysis |
| `codex-cxc-79-2019` | `official_guidance` | FAO and WHO, Codex Alimentarius, *Code of Practice for the Reduction of 3-MCPDEs and GEs in Refined Oils and Food Products Made with Refined Oils*, CXC 79-2019, https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXC%2B79-2019%2FCXC_079e.pdf (retrieved 2026-08-10) | Chemical and physical refining decomposition; degumming, neutralization, bleaching and deodorization rules; precursor assessment and contaminant mitigation |
| `eu-fdm-bat-2019` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj (retrieved 2026-08-10) | Inventory of water, energy, raw materials, wastewater, waste gas and residues; monitoring and resource-efficiency rules; indicative stand-alone refining wastewater range |
| `eu-pef-method-2021` | `official_guidance` | European Commission, Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods, consolidated and corrected text, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02021H2279-20211230 (retrieved 2026-08-10) | Multifunctionality hierarchy, allocation disclosure, life-cycle data quality, representativeness, precision, and verification |
