---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.olive-oil-refined
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Olive oil, refined

## 1. Scope and Applicability

This PCR governs foreground data production for refined olive oil made from virgin olive oils by refining methods that do not alter the initial glyceridic structure. It covers receipt of the oil requiring refining, the declared chemical or physical refining train, bleaching and filtration, deodorization, finished-oil storage, and on-site treatment of directly generated wastes and wastewater when operated by the reporting facility.

The default reporting boundary is gate-to-gate, from measured receipt of the feed oil at the refinery to bulk refined olive oil ready for dispatch at the plant gate. Olive cultivation, harvesting, virgin-oil extraction, and transport to the refinery are represented by disclosed upstream datasets. Consumer packaging, outbound distribution, retail, use, and end-of-life are excluded unless a study explicitly extends the boundary and reports those additions separately.

The category excludes virgin and extra-virgin olive oils, olive-pomace oils, refined olive-pomace oil, blends of refined olive oil with virgin olive oils, oils mixed with other vegetable oils, and oils obtained by re-esterification. Product identity and quality claims shall follow the declared jurisdiction; Codex CXS 33-1981 is the default international specification source.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.olive-oil-refined |
| classification_refs | CPC 3.0: 21672, Olive oil, refined (mapping context only) |
| covered_products | Bulk refined olive oil obtained from virgin olive oils by a declared chemical or physical refining route without alteration of the initial glyceridic structure |
| excluded_products | Virgin or extra-virgin olive oil; crude, refined, or blended olive-pomace oil; refined-and-virgin olive oil blends; mixed vegetable oils; re-esterified oils; packaged retail products unless packaging is added as an explicit downstream module |
| representative_product | Refined olive oil meeting the declared Codex or jurisdictional specification |
| production_route | Receipt and storage of oil requiring refining; route-specific deacidification and washing or physical refining; bleaching and filtration; deodorization; polishing and bulk storage |
| market_state | Finished product, bulk, production mix at plant gate |
| tiangong_process_identity | Olive oil, refined `23640aac-454b-481e-a599-60f29b6d1b86` (public identity candidate only; its inventory estimates are not PCR evidence) |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Refined olive oil suitable for the declared downstream market and specification |
| How much | 1 kg net refined olive oil |
| How well | Meets the declared refined-olive-oil identity and quality specification, including the declared free-acidity result and absence of pomace-oil or other-vegetable-oil substitution |
| How long or cycle | One refinery production campaign represented by the reporting period |
| reference_flow_link | Net conforming refined olive oil leaving finished-product storage at the plant gate |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Olive oil, refined `4637b050-f60f-4ebb-af43-5128ebf416bf` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | feed-oil identity and grade; chemical or physical refining route; facility geography; reporting period; product quality specification and test result; bulk or packaged state; allocation method; treatment location for wastes and wastewater |

When constructing a foreground data package, every required qualifier shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent field. A missing qualifier makes the reference-flow definition incomplete.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and oil-bearing product flows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report net oil mass at the measured material state; normalize all inventory results to 1 kg conforming refined olive oil dispatched from finished-product storage. |
| `stock_adjusted_mass` | feed, intermediate oil, product, by-products, and wastes | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use receipts plus opening stock minus closing stock for each reporting period; do not treat internal transfers as external inputs or outputs. |
| `water_measurement` | process and cleaning water | Mass or volume with measured density | kg or m3 | Preserve the metered unit and conversion basis; convert volume to mass only with a declared measured or justified density and temperature basis. |
| `energy_measurement` | electricity, steam, fuel, and purchased heat | Energy or carrier-specific property | kWh, MJ, kg steam, or native fuel unit | Keep native meter and invoice units; use 1 kWh = 3.6 MJ only for explicit energy conversion and retain steam pressure or enthalpy and fuel heating-value bases. |
| `chemical_active_basis` | alkali, acid, bleaching aid, and treatment chemicals | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report purchased solution mass and concentration; calculate active-substance mass separately and state which basis is used in each exchange. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Feed oil requiring refining is weighed into refinery custody with identity, grade, origin, supplier, lot, moisture or impurity information where relevant, and opening-stock treatment declared. |
| starting_condition_role | Gate-to-gate starting condition for the refinery foreground system |
| product_classification_scope | Refined olive oil only; CPC 3.0 code 21672 is mapping context and does not broaden the canonical product boundary. |
| recursive_input_rule | Any returned or reworked refined olive oil entering the same category is recorded once as a separate product input with source, mass, and prior-burden treatment disclosed; do not recursively expand the same PCR. |
| upstream_dataset_requirement | Use a separately identified upstream dataset for the virgin olive oil requiring refining and for each purchased utility, chemical, packaging material when included, and off-site treatment service. |
| disclosure | Declare refining route, included unit operations, feed grade, co-product recovery, internal recycle treatment, waste-treatment location, packaging state, temporal coverage, and every deviation from the default gate-to-gate boundary. |

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_refinery_gate` | foreground refinery system | Include measured feed reception, route-specific refining, bleaching or filtration, deodorization, finished-product storage, direct utility use, direct emissions, wastes, by-products, and on-site treatment attributable to the reporting facility. | `ifc-vegetable-oil-ehs-2015` |
| `boundary_upstream_separation` | purchased feed and supplies | Exclude olive cultivation and virgin-oil extraction from the refinery foreground inventory and link them as upstream datasets; separately link purchased energy, water, chemicals, and off-site treatment. | `eu-ef-recommendation-2021-2279` |
| `boundary_product_separation` | product identity | Do not combine refined olive oil with refined olive-pomace oil, olive-pomace oil, virgin oils, or refined-and-virgin blends under this reference product. | `codex-cxs-33-1981-2024` |
| `boundary_packaging` | packaging and distribution | Exclude packaging and outbound distribution from the default bulk-at-plant reference flow; if included for a study, model and disclose them as separate downstream processes. | `eu-ef-recommendation-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `feed_reception` | Feed-oil receipt and storage | required | Always | Establish refinery custody, identity, and stock-adjusted feed mass | kg accepted feed oil transferred to refining |
| `refining_train` | Deacidification, bleaching, filtration, and deodorization | required | Always; individual chemical or physical route operations follow the declared route | Convert feed oil requiring refining into conforming refined oil | kg refined-oil intermediate |
| `finished_storage` | Polishing and finished-oil storage | required | Always | Establish conforming bulk product at plant gate | kg net conforming refined olive oil dispatched |
| `wastewater_treatment` | On-site wastewater treatment | conditional | Include when process wastewater is treated by the reporting facility | Treat direct refinery wastewater and record residuals and emissions | kg wastewater treated |

### Process: Feed-oil receipt and storage (`feed_reception`)

#### Inputs

##### Product flows

###### Virgin olive oil requiring refining received at the refinery (`feed_oil_received`)

Record the oil that enters refinery custody and is eligible to become refined olive oil under the declared specification. Supplier documents and weighbridge or calibrated tank records establish identity and mass.

- Selected flow: Virgin olive oil requiring refining
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: stock-adjusted measured feed mass accepted during the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg conforming refined olive oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_ledger`
- Sources: `codex-cxs-33-1981-2024`
- Range: Provisional feed-to-product mass QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1.00
  - Upper: 1.20
  - Unit: kg/kg refined olive oil
  - Basis: received feed oil per kg conforming refined olive oil dispatched
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted feed oil transferred to refining (`accepted_feed_oil`)

Record the stock-adjusted mass released from reception and storage to the refining train. Internal transfer is retained for subdivision but cancelled in the aggregated gate-to-gate result.

- Selected flow: Accepted olive oil feed for refining
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass after rejected or nonconforming receipts are removed
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg accepted feed oil transferred
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_ledger`
- Sources: `codex-cxs-33-1981-2024`
- Range: Provisional reception-yield QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.90
  - Upper: 1.00
  - Unit: kg/kg received feed oil
  - Basis: accepted feed oil per kg received feed oil
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

### Process: Deacidification, bleaching, filtration, and deodorization (`refining_train`)

#### Inputs

##### Product flows

###### Accepted olive oil feed (`refining_feed_oil`)

Record the internal feed entering the declared refining train. The route declaration determines whether chemical neutralization and washing or physical deacidification is represented.

- Selected flow: Accepted olive oil feed for refining
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured internal transfer from feed reception
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg refined-oil intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_ledger`
- Sources: `ifc-vegetable-oil-ehs-2015`

###### Process and cleaning water (`refining_water`)

Record water used for chemical neutralization and washing, steam or vacuum-system support where separately metered as water, and attributable cleaning. Do not assign shared water without a documented allocation basis.

- Selected flow: Process water
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered net water consumption attributable to the refining train
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg refined-oil intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `ifc-vegetable-oil-ehs-2015`
- Range: Provisional water-use QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg refined-oil intermediate
  - Basis: net attributable water per kg refined-oil intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied to refining (`refining_electricity`)

Record metered electricity for pumps, vacuum systems, filtration, agitation, and other refining equipment.

- Selected flow: Electricity, refinery supply mix
- Flow property / unit: Energy / kWh
- Amount rule: metered or invoice-reconciled electricity attributable to the refining train
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg refined-oil intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `ifc-vegetable-oil-ehs-2015`
- Range: Provisional electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.005
  - Upper: 1.0
  - Unit: kWh/kg refined-oil intermediate
  - Basis: refinery electricity per kg refined-oil intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Steam, fuel, or purchased process heat (`refining_heat`)

Record energy used for heating, soap splitting when in scope, drying, vacuum support, and deodorization. Preserve the carrier and measured basis before conversion.

- Selected flow: Refinery process heat or steam
- Flow property / unit: Energy or carrier-specific property / MJ, kg steam, or native fuel unit
- Amount rule: metered or invoice-reconciled thermal-energy use attributable to the refining train
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg refined-oil intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `ifc-vegetable-oil-ehs-2015`
- Range: Provisional thermal-energy QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 10
  - Unit: MJ/kg refined-oil intermediate
  - Basis: attributable process heat per kg refined-oil intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Route-specific refining chemicals (`refining_chemicals`)

Record alkali, acid, degumming agent, or other route-specific chemicals only when used. Report solution and active-substance mass separately.

- Selected flow: Refining chemical, declared substance and concentration
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased and stock-adjusted chemical mass attributable to the campaign, with active-mass calculation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refined-oil intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_chemical_ledger`
- Sources: `ifc-vegetable-oil-ehs-2015`
- Range: Provisional chemical-use QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg active substance/kg refined-oil intermediate
  - Basis: active refining chemical per kg refined-oil intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Bleaching earth and filtration aids (`bleaching_aids`)

Record the stock-adjusted mass of bleaching earth and filtration aids consumed in bleaching and polishing.

- Selected flow: Bleaching earth or declared filtration aid
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased mass plus opening stock minus closing stock, reconciled to campaign issues
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refined-oil intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_chemical_ledger`
- Sources: `ifc-vegetable-oil-ehs-2015`
- Range: Provisional bleaching-aid QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg refined-oil intermediate
  - Basis: bleaching and filtration aid per kg refined-oil intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Refined-oil intermediate transferred to finished storage (`refined_oil_intermediate`)

Record conforming oil leaving the refining train after route-specific deacidification, bleaching, filtration, and deodorization.

- Selected flow: Refined olive oil intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured stock-adjusted transfer mass that passes the declared quality release tests
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg refining-feed oil
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_ledger`
- Sources: `codex-cxs-33-1981-2024`
- Range: Provisional refining-yield QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.80
  - Upper: 1.00
  - Unit: kg/kg refining-feed oil
  - Basis: refined-oil intermediate per kg refining-feed oil
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Soapstock, acid oil, gums, and deodorizer distillate (`refining_byproducts`)

Record each recovered material separately with its actual disposition and economic status. Do not combine a sold co-product with a disposed waste.

- Selected flow: Route-specific refinery by-product, separately identified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or stock-adjusted mass by named stream and disposition
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refined-oil intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_byproduct_records`
- Sources: `ifc-vegetable-oil-ehs-2015`
- Range: Provisional recovered-material QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg refined-oil intermediate
  - Basis: combined recovered refinery materials per kg refined-oil intermediate, before stream separation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Spent bleaching earth and filtration residue (`spent_bleaching_media`)

Record spent media including retained oil, moisture, and treatment destination. Retained oil recovery is reported separately when performed.

- Selected flow: Spent bleaching earth or filtration residue
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed waste or container count converted using verified net mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per kg refined-oil intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_byproduct_records`
- Sources: `ifc-vegetable-oil-ehs-2015`
- Range: Provisional spent-media QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.15
  - Unit: kg/kg refined-oil intermediate
  - Basis: wet spent media per kg refined-oil intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Refinery process wastewater (`refinery_wastewater`)

Record wastewater from chemical neutralization, washing, condensate management, and attributable cleaning before on-site or off-site treatment.

- Selected flow: Vegetable-oil refinery wastewater
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered discharge or water-balance estimate with separately declared uncertainty
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg refined-oil intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ifc-vegetable-oil-ehs-2015`
- Range: Provisional wastewater QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg refined-oil intermediate
  - Basis: process wastewater before treatment per kg refined-oil intermediate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct refinery air emissions (`refinery_air_emissions`)

Measure or calculate reportable VOC, odor-control, combustion, and process emissions attributable to the refining train; report each pollutant as a separate elementary flow.

- Selected flow: Declared air pollutant, substance-specific
- Flow property / unit: Mass / kg
- Amount rule: monitored value or source-specific calculation from measured activity data and an accepted factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg refined-oil intermediate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_air_emissions`
- Sources: `ifc-vegetable-oil-ehs-2015`
- Range: Provisional aggregate air-emission QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.10
  - Unit: kg/kg refined-oil intermediate
  - Basis: aggregate direct reportable air emissions per kg refined-oil intermediate; substance rows remain separate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Polishing and finished-oil storage (`finished_storage`)

#### Inputs

##### Product flows

###### Refined-oil intermediate received into finished storage (`storage_oil_input`)

Record the internal transfer of released refined oil to finished storage.

- Selected flow: Refined olive oil intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer into finished-product tanks
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming refined olive oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_mass_ledger`
- Sources: `codex-cxs-33-1981-2024`

###### Electricity for polishing and storage (`storage_electricity`)

Record electricity for final filtration, pumping, inerting support, temperature control, and tank operation attributable to finished oil.

- Selected flow: Electricity, refinery supply mix
- Flow property / unit: Energy / kWh
- Amount rule: metered or allocated electricity for finished-product storage and polishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg conforming refined olive oil dispatched
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_utility_meters`
- Sources: `ifc-vegetable-oil-ehs-2015`
- Range: Provisional storage-electricity QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kWh/kg conforming refined olive oil
  - Basis: polishing and storage electricity per kg dispatched product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Conforming refined olive oil at plant gate (`refined_olive_oil`)

This is the quantitative reference output. Record only net product released against the declared specification; quarantine or rework is not conforming output.

- Selected flow: Olive oil, refined `4637b050-f60f-4ebb-af43-5128ebf416bf`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: normalize measured net dispatched conforming product to exactly 1 kg
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_mass_ledger`
- Sources: `codex-cxs-33-1981-2024`; `mass-balance-identity`
- Range: Reference-output normalization check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: normalized reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

##### Elementary flows

### Process: On-site wastewater treatment (`wastewater_treatment`)

#### Inputs

##### Product flows

###### Refinery wastewater sent to on-site treatment (`wastewater_to_treatment`)

Record the measured wastewater flow transferred from refining and cleaning operations to the on-site treatment system.

- Selected flow: Vegetable-oil refinery wastewater
- Flow property / unit: Mass or volume / kg or m3
- Amount rule: metered transfer to on-site treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ifc-vegetable-oil-ehs-2015`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Wastewater-treatment sludge and separated oil (`treatment_residuals`)

Record dewatered sludge, separated oil, and other treatment residuals separately by destination and measured wet or dry basis.

- Selected flow: Wastewater-treatment residual, separately identified
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured residual mass with moisture or dry-solids basis declared
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ifc-vegetable-oil-ehs-2015`
- Range: Provisional treatment-residual QA screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.20
  - Unit: kg/kg wastewater treated
  - Basis: wet treatment residuals per kg wastewater treated
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Treated wastewater discharge (`treated_wastewater_discharge`)

Record water discharge and each monitored pollutant separately after treatment; do not represent an off-site sewer transfer as an elementary emission.

- Selected flow: Water and substance-specific emissions to water
- Flow property / unit: Mass or volume / kg, m3, or pollutant-specific mass
- Amount rule: measured discharge volume and laboratory concentration converted to pollutant load
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per kg wastewater treated
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_wastewater_monitoring`
- Sources: `ifc-vegetable-oil-ehs-2015`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | shared refinery processes and utilities | Prefer direct metering and subdivision of the refining train, storage, and treatment processes before applying allocation. | `eu-ef-recommendation-2021-2279` |
| `allocation_internal_recycle` | internally recovered oil and rework | Keep internal recycle inside the foreground system; record recovered mass and energy without creating a second product credit or duplicate upstream burden. | `mass-balance-identity` |
| `allocation_co_products` | sold soapstock, acid oil, distillate, or recovered oil | If subdivision or system expansion is not practicable, use a relevant physical relationship; use economic allocation only when no defensible physical relationship exists, and disclose prices, period, currency, and sensitivity. | `eu-ef-recommendation-2021-2279` |
| `allocation_waste_treatment` | wastes and treatment residuals | Assign collection and treatment burdens to the refinery product unless a recovered material qualifies as a co-product under the declared study method; disclose any burden transfer or credit. | `eu-ef-recommendation-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass_ledger` | `feed_reception`; `refining_train`; `finished_storage` | feed, intermediates, reference product, rejects, stock changes | weighbridge tickets, calibrated tank gauges, batch transfer records, dispatch records | timestamp; lot; material identity; gross, tare, net mass; opening stock; closing stock; destination; quality release | reconcile custody-transfer and tank records by campaign and reporting period | kg | each receipt, transfer, and dispatch | complete representative reporting period including opening and closing stock | all refinery tanks and transfer points in scope | receipts + opening stock - closing stock - separately recorded outbound non-product streams; normalize by conforming dispatched mass | calibration certificates, reconciliation sign-off, exception log |
| `cp_utility_meters` | `refining_train`; `finished_storage` | water, electricity, steam, fuel, purchased heat | meter readings, invoices, boiler logs, steam conditions, allocation driver | meter id; timestamp; opening and closing reading; unit; pressure; temperature; heating value; shared-use driver | direct submetering preferred; reconcile to site totals | native meter unit, kWh, MJ, kg steam, or m3 | continuous or batch readings with monthly reconciliation | same period as product mass ledger | all in-scope utility meters and justified shared systems | usage difference minus documented exports, allocated by causal driver where direct metering is unavailable | meter calibration, invoice reconciliation, missing-data log |
| `cp_chemical_ledger` | `refining_train` | acids, alkalis, bleaching earth, filtration aids, treatment chemicals | purchase, stock, issue, return, and concentration records | substance; supplier; lot; solution mass; concentration; opening stock; closing stock; process issue | stock balance reconciled to batch issues | kg solution and kg active substance | each issue with monthly reconciliation | same period as product mass ledger | all in-scope chemical stores and dosing points | purchases + opening stock - closing stock - documented returns; active mass = solution mass × mass fraction | supplier certificate, scale calibration, concentration test where used |
| `cp_waste_and_byproduct_records` | `refining_train` | soapstock, acid oil, gums, distillate, spent earth, filtration residue | weigh tickets, tank or container records, sales and disposal manifests | stream identity; mass; moisture or dry-solids basis; oil content when measured; destination; economic status | measure each named stream and reconcile to mass balance | kg | each transfer | same period as product mass ledger | all refining residual collection points | sum by stream and disposition; never combine sold co-products with disposed waste | manifest, invoice, laboratory result, destination receipt |
| `cp_wastewater_monitoring` | `refining_train`; `wastewater_treatment` | wastewater, treated discharge, pollutants, sludge | flow meter, sampling log, laboratory result, sewer or discharge record | volume; sample time; concentration; method; detection limit; treatment status; sludge mass; moisture | representative composite or legally required sampling plus continuous or batch flow measurement | m3, kg, and mg/L as measured | per permit and operating cycle | same period as product mass ledger | all in-scope wastewater outlets and on-site treatment | pollutant load = measured volume × concentration with unit conversion; disclose non-detect treatment | calibration, chain of custody, accredited or documented laboratory method |
| `cp_air_emissions` | `refining_train` | direct process and combustion emissions | stack test, continuous monitor, fuel record, activity record, accepted factor | pollutant; concentration or factor; gas flow or activity; time; method; uncertainty | direct monitoring preferred; otherwise calculate from measured activity and cited factor | substance-specific mass | per permit and representative operation | same period as product mass ledger | all in-scope process vents and combustion sources | calculate each substance separately; aggregate only after preserving substance rows | calibration, test report, factor source, uncertainty record |
| `cp_quality_release` | `finished_storage` | refined-olive-oil identity and release | lot certificate, laboratory result, release or quarantine decision | lot; sampling date; method; free acidity; required physicochemical fields; disposition | sample and test according to declared product specification and jurisdiction | specification-specific | each released lot or representative batch defined by the quality plan | all lots contributing to reference output | all finished-product tanks and release points | include only released conforming mass in reference product; report quarantined and reworked mass separately | signed certificate, method identifier, laboratory competence evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = reporting-period amount / net conforming refined olive oil dispatched | measured row amount; conforming dispatched mass | amount per 1 kg reference flow | `mass-balance-identity` |
| `calc_stock_adjustment` | feed, product, chemicals, wastes, and intermediates | period consumption or production = receipts or transfers + opening stock - closing stock - separately documented returns or exports | receipts; transfers; opening and closing stock; returns; exports | stock-adjusted period amount | `mass-balance-identity` |
| `calc_mass_balance` | refinery foreground system | input oil and mass-bearing auxiliaries = product + separately measured co-products and wastes + emissions + closing-minus-opening work-in-progress, within declared measurement uncertainty | stock-adjusted material rows; inventory change; measured emissions | mass-balance residual and relative residual | `mass-balance-identity` |
| `calc_active_chemical` | chemical inputs | active-substance mass = solution mass × measured or supplier-declared mass fraction | solution mass; concentration | kg active substance | `ifc-vegetable-oil-ehs-2015` |
| `calc_energy_conversion` | electricity and thermal energy | convert electricity using 1 kWh = 3.6 MJ only when a common energy unit is required; preserve native carrier quantities and declared steam or fuel basis | native energy record; conversion factor; steam or fuel basis | converted energy with traceable native value | `mass-balance-identity` |
| `calc_pollutant_load` | wastewater and air emissions | pollutant load = measured flow or activity × measured concentration or accepted factor, with explicit unit conversion and non-detect rule | flow or activity; concentration or factor; sampling coverage | substance-specific mass emission | `ifc-vegetable-oil-ehs-2015` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | feed and reference product | Retain supplier identity, lot traceability, declared refining route, product specification, and release result; exclude pomace-oil and refined-and-virgin blend categories. | supplier documents, batch genealogy, quality-release certificate, `codex-cxs-33-1981-2024` |
| `dq_temporal` | all foreground records | Use one complete representative reporting period that captures normal route operation, start/end stocks, downtime, rework, and seasonal variation; disclose exclusions and abnormal campaigns. | period coverage report and production log |
| `dq_measurement` | mass, utilities, chemicals, wastes, and emissions | Use calibrated direct measurement where practicable; document meter coverage, allocation drivers, conversions, detection limits, and uncertainty. | calibration certificates, meter map, laboratory methods, reconciliation report |
| `dq_completeness` | process inventory | Account for every named major input, output, waste, wastewater stream, and direct emission; quantify or explicitly flag every unmeasured stream rather than treating it as zero. | signed mass and utility balance, missing-data register, waste manifests |
| `dq_representativeness` | published dataset | Report geography, technology, feed grade, chemical or physical route, capacity utilization, product state, and temporal coverage so users can judge representativeness. | dataset metadata and facility declaration, `eu-ef-recommendation-2021-2279` |
| `dq_estimate_replacement` | reasoned-estimate ranges | Treat every `reasoned_estimate` as a replaceable QA screen only; foreground records determine dataset values and methodology review must accept or replace any estimate before publication-critical use. | review record and foreground evidence manifest |

## 9. Validation Rules

| rule_id | Applies to | rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Require product flow UUID `4637b050-f60f-4ebb-af43-5128ebf416bf`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66`, and kg reference unit. | `codex-cxs-33-1981-2024` |
| `validate_product_quality` | released refined olive oil | Require the declared jurisdiction or Codex specification, test method, lot result, and release decision; under the Codex default, refined olive oil shall be obtained from virgin olive oils by permitted refining and have free acidity not more than 0.3 g oleic acid per 100 g. | `codex-cxs-33-1981-2024` |
| `validate_route_boundary` | process map and inventory | Require one declared chemical or physical refining route and inventory coverage for applicable deacidification, bleaching or filtration, deodorization, direct utilities, residuals, storage, and treatment location. | `ifc-vegetable-oil-ehs-2015` |
| `validate_mass_reconciliation` | refinery foreground system | Calculate and report the mass-balance residual; a nonzero residual is not silently allocated or set to zero and requires investigation or explicit uncertainty disclosure. | `mass-balance-identity` |
| `validate_internal_transfers` | aggregated dataset | Match internal product-flow outputs to corresponding inputs and cancel them exactly in the aggregated gate-to-gate result. | `mass-balance-identity` |
| `validate_allocation` | multifunctional outputs | Require subdivision evidence or a documented physical allocation basis; if economic allocation is used, require prices, period, currency, and sensitivity disclosure. | `eu-ef-recommendation-2021-2279` |
| `validate_data_package` | foreground data package | Require all collection protocols used by collected or calculated rows, complete required qualifiers, source references, quality evidence, and explicit disclosure of unmeasured streams and provisional estimates. | `eu-ef-recommendation-2021-2279` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Gate-to-gate foreground refinery dataset normalized to bulk refined olive oil at plant gate |
| downstream_use | `secondary_dataset`; `background_dataset` after methodology review and publication |
| allowed_use | Refinery-stage LCI and lifecycle-model projections for refined olive oil when feed grade, route, geography, product state, allocation, and boundary are compatible |
| excluded_use | Virgin or extra-virgin olive oil; olive-pomace oil; refined-and-virgin blends; consumer-packaged product without an added packaging module; comparative public claims without complete compatible life-cycle modelling and review |
| required_metadata | facility geography; reporting period; feed identity and origin; refining route and unit operations; bulk or packaged state; product specification and release method; allocation method; upstream dataset references; treatment locations; data ownership and review status |
| required_quality_disclosure | meter and sampling coverage; calibration; mass-balance residual; missing or estimated data; reasoned-estimate usage; co-product disposition; data age; technological and geographic representativeness; verification status |
| update_trigger | material change in feed grade, refining route, energy system, pollution control, allocation, product specification, plant configuration, data ownership, or representative reporting period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cxs-33-1981-2024` | standard | Codex Alimentarius Commission. CXS 33-1981, Standard for Olive Oils and Olive-Pomace Oils, revised 2024. https://workspace.fao.org/sites/codex/Standards/CXS%2033-1981/CXS_033e.pdf (retrieved 2026-08-10) | Refined-olive-oil identity, exclusions, quality specification, and release validation |
| `ifc-vegetable-oil-ehs-2015` | official_guidance | World Bank Group/IFC. Environmental, Health, and Safety Guidelines for Vegetable Oil Production and Processing, 12 February 2015. https://www.ifc.org/content/dam/ifc/doc/2010/2015-vegetable-oil-processing-ehs-guidelines-en.pdf (retrieved 2026-08-10) | Refinery process decomposition, water and energy roles, wastes, by-products, wastewater, emissions, and monitoring |
| `eu-ef-recommendation-2021-2279` | official_guidance | European Commission. Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, 15 December 2021. https://eur-lex.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-10) | Life-cycle boundary, high-quality data, multifunctionality and allocation hierarchy, and downstream dataset use |
| `mass-balance-identity` | method_factor | Conservation-of-mass and exact unit-conversion identities applied to measured foreground records | Stock adjustment, reference normalization, mass reconciliation, internal-transfer cancellation, and kWh-to-MJ conversion |
