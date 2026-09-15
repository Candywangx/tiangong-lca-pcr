---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.phosphoric-acid
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Phosphoric acid

## 1. Scope and Applicability

This PCR covers foreground production of orthophosphoric acid (H3PO4) supplied as a manufactured product at the producer gate. It covers wet-process, thermal/furnace-process, and declared purification or concentration variants only when the route, delivered H3PO4 mass fraction, grade, physical state, and geography are stated. The rule is route-neutral: a dataset shall model the route actually operated and shall not substitute a wet-process, thermal-process, or single-concentration inventory for another route without an explicit scenario statement.

The scope excludes phosphoric esters, phosphate salts and fertilisers, polyphosphoric or superphosphoric acid unless converted and reported as orthophosphoric acid, weak process acid or gypsum slurry sold only as a route-specific intermediate, and downstream use, distribution, formulation, or neutralisation after the producer gate.

The foreground boundary begins with received process materials and utilities at the phosphoric-acid plant gate and ends with qualified phosphoric acid in the declared bulk storage or loading condition. Upstream production of purchased phosphate rock, sulfuric acid, elemental phosphorus, electricity, fuels, water, and treatment chemicals requires linked upstream datasets.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.phosphoric-acid |
| classification_refs | CPC 3.0:34232 Phosphoric acid (exact classification context) |
| covered_products | Orthophosphoric acid solutions or acid product represented on contained-H3PO4 basis; wet-process, furnace/thermal-process, and explicitly declared purification or concentration variants |
| excluded_products | Phosphoric esters; phosphate salts and fertilisers; polyphosphoric or superphosphoric acid not converted to orthophosphoric-acid basis; wet-process weak acid with gypsum slurry when sold only as an intermediate; downstream formulations and uses |
| representative_product | Finished phosphoric acid at producer gate, with delivered H3PO4 mass fraction, grade, route, physical state, and location declared |
| production_route | Route-specific foreground modelling: wet-process acidulation, separation and concentration; or thermal oxidation and hydration; plus purification/finishing when applicable |
| market_state | Bulk liquid or other declared physical state at producer gate before distribution; concentration and grade are mandatory qualifiers |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Contained orthophosphoric acid (H3PO4) in the qualified phosphoric-acid product at producer gate |
| How much | 1 kg contained H3PO4 |
| How well | Delivered H3PO4 mass fraction, grade/specification, production route, impurity or purity basis, physical state, and geography declared |
| How long or cycle | One reporting period representative of the declared production campaign or annual production mix |
| reference_flow_link | Mass of delivered product = 1 kg H3PO4 / measured H3PO4 mass fraction; all foreground inventory is normalized to this contained-H3PO4 basis |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg contained H3PO4 in delivered phosphoric acid |
| Reference product flow | Phosphoric acid `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | delivered H3PO4 mass fraction; concentration test basis; product grade/specification; wet, thermal/furnace, or other declared route; purification steps; physical state; producer-gate condition; geography; reporting period |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_h3po4_mass` | Reference product and all normalized inventory | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Determine delivered product mass by a calibrated mass record and determine H3PO4 mass fraction by the declared product test method; normalize as delivered mass multiplied by H3PO4 mass fraction. Do not treat P2O5 percentage as H3PO4 percentage without a documented conversion. |
| `solution_water_consistency` | Product water and concentration balance | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report product concentration on one declared wet or dry analytical basis and preserve the measured solution-water balance; water evaporated during concentration is not product H3PO4. |
| `route_separation` | Route-specific inventory | Mass and energy properties used by each record | kg; kWh; MJ | Keep wet-process and thermal/furnace-process production in separate foreground process chains or separately weighted production-mix components; disclose weights before aggregation. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Purchased phosphate rock and sulfuric acid for wet process, or purchased elemental phosphorus and oxidant/water for thermal process, plus purchased utilities and treatment materials, received at the producer site |
| starting_condition_role | Foreground plant-gate starting condition; extraction and production of purchased inputs are upstream datasets |
| product_classification_scope | Orthophosphoric acid product within CPC 3.0:34232; route-specific intermediate acids remain inputs or internal outputs and do not silently redefine the canonical product |
| recursive_input_rule | Purchased phosphoric acid entering concentration, purification, blending, or recycle is recorded as a technosphere input with supplier dataset and H3PO4 concentration; do not recursively claim its production inside the current foreground boundary |
| upstream_dataset_requirement | Link each purchased material, energy carrier, electricity, water supply, transport service, and waste-treatment input to a geographically and technologically representative upstream dataset |
| disclosure | Declare route, product grade, delivered H3PO4 mass fraction, included purification/concentration steps, treatment and destination of phosphogypsum or other residues, allocation method, geography, and reporting period |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_route_gate` | Foreground production chain | Include all operated unit processes from received route feedstocks through reaction, separation, concentration or hydration, route-specific purification, emission control, residue handling, storage, and loading to the declared producer-gate product. | `us-epa-phosphoric-acid-supply-chain-2023`; `us-epa-ap42-phosphoric-acid`; `eu-jrc-lvic-aaf-bref-2007` |
| `boundary_wet_process` | Wet-process route | Include phosphate-rock preparation when on site, sulfuric-acid attack, digestion/crystallisation, filtration or solid-liquid separation, weak-acid handling, concentration, gas scrubbing, phosphogypsum handling, process-water recycle, and wastewater treatment when operated. | `us-epa-ap42-phosphoric-acid`; `eu-jrc-lvic-aaf-bref-2007` |
| `boundary_thermal_process` | Thermal/furnace route | Include elemental-phosphorus handling, oxidation/combustion, hydration or absorption, cooling, off-gas control, and concentration or purification needed for the declared product. Upstream elemental-phosphorus production remains linked as an upstream dataset unless performed at the reporting site. | `us-epa-phosphoric-acid-supply-chain-2023`; `us-epa-ap42-phosphoric-acid` |
| `boundary_no_silent_exclusion` | All routes | Justify and disclose every excluded material or emission stream; do not omit fluoride-bearing gas, particulate, process wastewater, phosphogypsum, spent treatment material, or off-spec acid merely because it is recycled, sold, or treated. | `eu-jrc-lvic-aaf-bref-2007`; `eu-environmental-footprint-recommendation-2021` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `wet_acidulation_separation` | Wet-process acidulation and separation | conditional | Required when phosphate rock is attacked with sulfuric acid to produce wet-process acid | Foreground reaction, crystallisation, filtration, gas control, and phosphogypsum separation | 1 kg contained H3PO4 in weak acid leaving separation |
| `wet_concentration` | Wet-process concentration and finishing | conditional | Required when wet-process weak acid is concentrated or finished at the reporting site | Foreground evaporation, concentration, cooling, scrubbing, and product finishing | 1 kg contained H3PO4 in finished wet-process acid |
| `thermal_oxidation_hydration` | Thermal oxidation and hydration | conditional | Required when elemental phosphorus is oxidised and hydrated to phosphoric acid | Foreground furnace/combustion, hydration/absorption, cooling, gas control, and finishing | 1 kg contained H3PO4 in finished thermal-process acid |
| `purification` | Product purification | conditional | Required when extraction, adsorption, precipitation, ion exchange, or another purification step is used to meet the declared grade | Foreground purification and associated residue/wastewater handling | 1 kg contained H3PO4 in purified acid |
| `storage_loading` | Qualified product storage and loading | required | Always required for producer-gate delivery | Final quality release, storage losses, transfer, and loading | 1 kg contained H3PO4 in released product |

### Process: Wet-process acidulation and separation (`wet_acidulation_separation`)

#### Inputs

##### Product flows

###### Prepared phosphate rock (`phosphate_rock_input`)

Record dry and as-received phosphate rock, P2O5 assay, moisture, carbonate and fluoride-relevant composition, and supplier origin.

- Selected flow: Phosphate rock, declared grade
- Flow property / unit: Mass / kg
- Amount rule: measured dry and as-received mass charged to acidulation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in weak acid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_materials`
- Sources: `us-epa-ap42-phosphoric-acid`; `eu-jrc-lvic-aaf-bref-2007`
- Range: Provisional phosphate-rock screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg contained H3PO4 in weak acid output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Sulfuric acid (`sulfuric_acid_input`)

Record delivered acid mass, assay, recycled-acid contribution, and supplier dataset separately.

- Selected flow: Sulfuric acid, declared concentration
- Flow property / unit: Mass / kg
- Amount rule: measured as-delivered mass and acid assay charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in weak acid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_wet_materials`
- Sources: `us-epa-phosphoric-acid-supply-chain-2023`; `us-epa-ap42-phosphoric-acid`
- Range: Provisional sulfuric-acid screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 5
  - Unit: kg
  - Basis: per 1 kg contained H3PO4 in weak acid output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process and wash water (`wet_process_water`)

Record fresh, recycled, and discharged water separately to preserve the plant water balance.

- Selected flow: Process water
- Flow property / unit: Mass / kg
- Amount rule: metered fresh water plus measured internal recycle by source
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in weak acid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Sources: `eu-jrc-lvic-aaf-bref-2007`
- Range: Provisional wet-process water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: fresh water per 1 kg contained H3PO4 in weak acid output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity and fuels (`wet_energy_input`)

Record metered electricity and each fuel or steam carrier separately; do not combine energy carriers before linking upstream datasets.

- Selected flow: Electricity, steam, and fuels by carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered consumption assigned to wet acidulation and separation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in weak acid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Range: Provisional combined-energy screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kWh-equivalent
  - Basis: per 1 kg contained H3PO4 in weak acid output; carrier conversion disclosed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Weak phosphoric acid (`weak_acid_output`)

Record weak-acid mass and measured H3PO4 or P2O5 assay before concentration; preserve the analytical conversion used.

- Selected flow: Wet-process weak phosphoric acid, route-specific intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured weak-acid mass and assay, normalized to contained H3PO4
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in weak acid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_quality`
- Sources: `us-epa-ap42-phosphoric-acid`
- Range: Typical wet-process weak-acid concentration
  - Range role: Typical range (`typical_range`)
  - Lower: 26
  - Upper: 30
  - Unit: mass % P2O5
  - Basis: weak acid leaving wet-process production before concentration
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `us-epa-ap42-phosphoric-acid`

##### Waste flows

###### Phosphogypsum (`phosphogypsum_output`)

Record separated gypsum mass, moisture, composition, storage or sale status, transport, and final destination; classification as co-product or waste follows the actual disposition.

- Selected flow: Phosphogypsum, declared disposition
- Flow property / unit: Mass / kg
- Amount rule: measured wet and dry mass leaving filtration and any later handling
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in weak acid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_emissions`
- Sources: `eu-jrc-lvic-aaf-bref-2007`
- Range: BREF phosphogypsum generation screen
  - Range role: Typical range (`typical_range`)
  - Lower: 4
  - Upper: 5
  - Unit: kg phosphogypsum/kg P2O5 manufactured
  - Basis: wet-process production on P2O5 output basis
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-jrc-lvic-aaf-bref-2007`

###### Wet-process wastewater (`wet_wastewater_output`)

Record discharged water volume or mass and analysed fluoride, phosphate, suspended solids, acidity, and treatment route after internal recycle.

- Selected flow: Wastewater, phosphoric-acid production
- Flow property / unit: Mass / kg
- Amount rule: measured net discharge after recycled process and scrubber water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in weak acid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_emissions`
- Sources: `eu-jrc-lvic-aaf-bref-2007`
- Range: Provisional net-wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg contained H3PO4 in weak acid output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fluoride emissions to air (`wet_fluoride_air`)

Record measured HF, SiF4, or total fluoride at each controlled and uncontrolled emission point using the reported species basis.

- Selected flow: Fluoride compounds to air, species declared
- Flow property / unit: Mass / kg
- Amount rule: stack concentration multiplied by dry standardized gas volume and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in weak acid output
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues_emissions`
- Sources: `us-epa-ap42-phosphoric-acid`; `eu-jrc-lvic-aaf-bref-2007`
- Range: Wet-process BAT fluoride concentration screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 5
  - Unit: mg/Nm3 as HF
  - Basis: controlled wet-process exhaust concentration; not a product-normalized emission factor
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `eu-jrc-lvic-aaf-bref-2007`

### Process: Wet-process concentration and finishing (`wet_concentration`)

#### Inputs

##### Product flows

###### Weak phosphoric acid feed (`weak_acid_input`)

Record transferred weak acid by measured mass and assay; internal transfer must reconcile with `weak_acid_output`.

- Selected flow: Wet-process weak phosphoric acid, route-specific intermediate
- Flow property / unit: Mass / kg
- Amount rule: measured transfer mass multiplied by measured H3PO4 mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in finished wet-process acid
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_quality`

###### Concentration utilities (`concentration_energy_water`)

Record steam, electricity, cooling water, and fuel separately for evaporators and finishing equipment.

- Selected flow: Steam, electricity, fuel, and cooling water by carrier
- Flow property / unit: Energy or mass / kWh, MJ, or kg
- Amount rule: metered utility use assigned to concentration and finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in finished wet-process acid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Range: Provisional concentration-utility screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kWh-equivalent
  - Basis: per 1 kg contained H3PO4 in finished wet-process acid; carrier conversion disclosed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished wet-process phosphoric acid (`wet_finished_acid`)

Record product mass, delivered H3PO4 mass fraction, P2O5 result when used, grade, and release specification.

- Selected flow: Phosphoric acid `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: delivered product mass = 1 kg H3PO4 divided by measured H3PO4 mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg contained H3PO4 in finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_quality`
- Sources: `us-epa-ap42-phosphoric-acid`; `us-epa-phosphoric-acid-supply-chain-2023`
- Range: Provisional delivered-product mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg product
  - Basis: per 1 kg contained H3PO4; replace with the exact inverse of measured H3PO4 mass fraction
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Concentration condensate and wastewater (`concentration_wastewater`)

Record condensate reuse and net discharge, including measured phosphate, fluoride, acidity, and treatment destination.

- Selected flow: Concentration condensate or wastewater, disposition declared
- Flow property / unit: Mass / kg
- Amount rule: measured net condensate or wastewater leaving foreground reuse loops
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in finished wet-process acid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_emissions`
- Range: Provisional concentration-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: per 1 kg contained H3PO4 in finished wet-process acid
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Thermal oxidation and hydration (`thermal_oxidation_hydration`)

#### Inputs

##### Product flows

###### Elemental phosphorus (`elemental_phosphorus_input`)

Record phosphorus mass, purity, supplier, and upstream production dataset; do not merge upstream furnace production into this plant step unless it occurs within the reporting boundary.

- Selected flow: Elemental phosphorus, declared grade
- Flow property / unit: Mass / kg
- Amount rule: measured phosphorus charged
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in finished thermal-process acid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_materials`
- Sources: `us-epa-phosphoric-acid-supply-chain-2023`; `us-epa-ap42-phosphoric-acid`
- Range: Provisional elemental-phosphorus screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 1
  - Unit: kg
  - Basis: per 1 kg contained H3PO4 in finished thermal-process acid
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Oxidant and hydration water (`thermal_air_water`)

Record dry air or oxygen supply and net fresh hydration/cooling water separately from recycled acid and water.

- Selected flow: Air or oxygen; process water
- Flow property / unit: Mass / kg
- Amount rule: measured or calculated oxidant from monitored flow and measured net water input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in finished thermal-process acid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_thermal_materials`
- Sources: `us-epa-ap42-phosphoric-acid`
- Range: Provisional hydration-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg water
  - Basis: per 1 kg contained H3PO4 in finished thermal-process acid
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal-route utilities (`thermal_energy_input`)

Record electricity, steam, cooling, and auxiliary fuel by carrier.

- Selected flow: Electricity, steam, and fuels by carrier
- Flow property / unit: Energy / kWh or MJ
- Amount rule: metered consumption assigned to oxidation, hydration, cooling, and finishing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in finished thermal-process acid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_water_energy`
- Range: Provisional thermal-utility screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kWh-equivalent
  - Basis: per 1 kg contained H3PO4 in finished thermal-process acid; carrier conversion disclosed
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished thermal-process phosphoric acid (`thermal_finished_acid`)

Record product mass, measured H3PO4 mass fraction, grade, impurity basis, and release specification.

- Selected flow: Phosphoric acid `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: delivered product mass = 1 kg H3PO4 divided by measured H3PO4 mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg contained H3PO4 in finished product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_quality`
- Sources: `us-epa-phosphoric-acid-supply-chain-2023`; `us-epa-ap42-phosphoric-acid`
- Range: Provisional delivered-product mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg product
  - Basis: per 1 kg contained H3PO4; replace with the exact inverse of measured H3PO4 mass fraction
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Thermal-route wastewater and residues (`thermal_waste_output`)

Record net wastewater, off-spec acid, filter solids, and spent control material by treatment destination.

- Selected flow: Thermal-route wastewater and residues by type
- Flow property / unit: Mass / kg
- Amount rule: measured mass leaving recycle loops
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in finished thermal-process acid
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_emissions`
- Range: Provisional thermal-waste screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: per 1 kg contained H3PO4 in finished thermal-process acid
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Thermal-process particulate and phosphorus-bearing emissions (`thermal_air_emissions`)

Record measured particulate and phosphorus-bearing species by emission point after controls.

- Selected flow: Particulate and phosphorus-bearing emissions to air, species declared
- Flow property / unit: Mass / kg
- Amount rule: measured concentration multiplied by standardized gas volume and operating time
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 in finished thermal-process acid
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_residues_emissions`
- Sources: `us-epa-ap42-phosphoric-acid`
- Range: Provisional thermal-air-emission screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg
  - Basis: per 1 kg contained H3PO4 in finished thermal-process acid
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Product purification (`purification`)

#### Inputs

##### Product flows

###### Crude acid and purification materials (`purification_inputs`)

Record crude-acid mass and assay plus each extraction solvent, adsorbent, precipitant, ion-exchange material, and utility used to meet the declared grade.

- Selected flow: Crude phosphoric acid and purification materials by type
- Flow property / unit: Mass / kg
- Amount rule: measured mass charged and inventory change over the reporting period
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg contained H3PO4 in purified product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purification`
- Sources: `us-epa-phosphoric-acid-supply-chain-2023`
- Range: Provisional purification-material screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg
  - Basis: combined purification materials per 1 kg contained H3PO4 in purified product; individual materials still reported separately
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Purified phosphoric acid (`purified_acid_output`)

Record measured product mass, H3PO4 mass fraction, grade and impurity specification, and recovery from crude acid.

- Selected flow: Phosphoric acid `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: delivered product mass = 1 kg H3PO4 divided by measured H3PO4 mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg contained H3PO4 in purified product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_quality`
- Sources: `us-epa-phosphoric-acid-supply-chain-2023`
- Range: Provisional delivered-product mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg product
  - Basis: per 1 kg contained H3PO4; replace with the exact inverse of measured H3PO4 mass fraction
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Purification residues and wastewater (`purification_waste`)

Record spent solvent, adsorbent, sludge, filter cake, regenerant, and wastewater separately with treatment destination.

- Selected flow: Purification waste by type and destination
- Flow property / unit: Mass / kg
- Amount rule: measured waste mass and net wastewater leaving recovery loops
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg contained H3PO4 in purified product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_purification`
- Range: Provisional purification-waste screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg
  - Basis: combined residues and wastewater per 1 kg contained H3PO4 in purified product; individual streams still reported separately
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Qualified product storage and loading (`storage_loading`)

#### Inputs

##### Product flows

###### Released phosphoric acid to storage (`released_acid_input`)

Record the route-specific finished or purified acid entering qualified storage by mass and H3PO4 assay.

- Selected flow: Phosphoric acid `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured transfer mass and assay reconciled with production output
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 loaded at producer gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_quality`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Producer-gate phosphoric acid (`reference_product_output`)

This is the reference product after quality release and loading. Record actual loaded mass, H3PO4 assay, route, grade, physical state, batch or production-mix identity, and container or bulk-transfer condition.

- Selected flow: Phosphoric acid `9396269a-cf0d-4b38-ae6d-ab6b91e1dc87`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: loaded product mass = 1 kg H3PO4 divided by measured delivered H3PO4 mass fraction
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg contained H3PO4 in producer-gate product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_product_quality`
- Range: Provisional delivered-product mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 100
  - Unit: kg product
  - Basis: per 1 kg contained H3PO4; replace with the exact inverse of measured H3PO4 mass fraction
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Storage and loading losses (`storage_loading_losses`)

Record spills, off-spec returns, tank bottoms, washings, vent-scrubber liquid, and packaging residues by destination.

- Selected flow: Storage and loading waste by type
- Flow property / unit: Mass / kg
- Amount rule: measured loss and waste mass from storage and loading reconciliation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg contained H3PO4 loaded at producer gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_residues_emissions`
- Range: Provisional storage-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg
  - Basis: per 1 kg contained H3PO4 loaded at producer gate
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | All multifunctional plant operations | Avoid allocation first by metering and subdividing reaction, separation, concentration, purification, utilities, emission control, and residue handling that are directly attributable to phosphoric acid or another output. | `eu-environmental-footprint-recommendation-2021` |
| `allocation_phosphogypsum_status` | Phosphogypsum and recovered fluosilicic acid | Treat a stream as a co-product only when it leaves the site as a quality-controlled product with an evidenced market or beneficial use; otherwise model it as waste with the actual treatment, storage, or disposal burden. Disclose moisture and avoided-burden assumptions. | `eu-jrc-lvic-aaf-bref-2007` |
| `allocation_physical_then_other` | Inseparable co-products | If subdivision or system expansion is not practicable, use a documented, quantifiable physical relationship relevant to the functions. If no defensible physical relationship exists, use another relationship such as site- and period-specific relative economic value and justify why the preceding hierarchy was rejected. | `eu-environmental-footprint-recommendation-2021` |
| `allocation_recycle_no_double_count` | Internal recycled acid, scrubber liquid, water, and recovered materials | Treat internal recycle as an internal transfer; count only net purchased inputs and net outputs crossing the foreground boundary, while retaining gross recycle measurements for mass-balance QA. Do not award a co-product credit and avoid a treatment burden for the same quantity. | `eu-jrc-lvic-aaf-bref-2007`; `eu-environmental-footprint-recommendation-2021` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_wet_materials` | `wet_acidulation_separation` | phosphate rock, sulfuric acid, recycled acid | weighbridge, batch record, assay, inventory | material_id; supplier; wet_mass; dry_mass; moisture; P2O5_assay; acid_assay; recycle_mass; timestamp | calibrated scales and laboratory certificates linked to batches | kg; mass % | each receipt and batch; monthly reconciliation | full declared reporting period | all wet-process lines in declared site scope | sum net purchased and internal transfers separately; normalize to measured contained H3PO4 output | calibration, laboratory QA/QC, supplier certificate, stock reconciliation |
| `cp_thermal_materials` | `thermal_oxidation_hydration` | elemental phosphorus, oxidant, hydration water | batch meter, mass-flow meter, tank inventory, assay | phosphorus_mass; phosphorus_purity; air_or_oxygen_flow; water_mass; recycle_mass; timestamp | calibrated tank/flow metering and laboratory assay | kg; Nm3 | continuous or batch; monthly reconciliation | full declared reporting period | all thermal-process lines in declared site scope | sum by carrier and convert only with documented density or composition | calibration, assay QA/QC, stock and gas-flow reconciliation |
| `cp_water_energy` | all applicable processes | fresh/recycled water and each energy carrier | utility meter, invoice, steam/fuel balance | meter_id; opening; closing; carrier; energy_content; allocation_key; recycle_water; period | calibrated submeters preferred; invoices reconciled to plant total | kg; m3; kWh; MJ | continuous/monthly | full declared reporting period | each process line and shared utility system | direct submeter first; documented allocation only for inseparable shared utilities | calibration, invoice, meter coverage and reconciliation |
| `cp_product_quality` | all product-output processes | acid mass, H3PO4/P2O5 assay, grade and batch | tank scale/flow meter, laboratory certificate, release record | batch_id; product_mass; sample_id; H3PO4_fraction; P2O5_fraction; conversion_method; grade; route; impurity_results; release_time | calibrated mass measurement and validated product assay | kg; mass % | each batch or tank; production-period weighted average | full declared reporting period | all released product in declared dataset | calculate contained H3PO4 by batch and sum; weight route or grade mixes by contained H3PO4 | calibration, certified method, blanks/duplicates, release approval, mass balance |
| `cp_residues_emissions` | all applicable processes | phosphogypsum, wastewater, air emissions, spills and residues | scale, flow meter, stack/water monitoring, waste manifest | stream_id; mass_or_flow; moisture; concentration; species; gas_volume; operating_time; destination; manifest_id | direct measurement and regulatory or equivalent monitoring | kg; m3; mg/Nm3; mg/L | continuous/periodic as required; at least reporting-period reconciliation | full declared reporting period | every discharge and residue destination in site scope | concentration times measured carrier flow; sum by species and destination; report below-detection handling | calibration, laboratory QA/QC, detection limits, permits and manifests |
| `cp_purification` | `purification` | purification materials, recovery, residues | batch sheets, inventory, assay, waste manifest | crude_acid_mass; crude_assay; material_mass; recovered_mass; product_assay; residue_mass; destination | batch reconciliation with laboratory assays | kg; mass % | each batch; monthly reconciliation | full declared reporting period | each purification train included | contained-H3PO4 balance and net material consumption over inventory period | assay QA/QC, stock reconciliation, waste manifests |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_contained_h3po4` | Every acid input and output | contained H3PO4 mass = measured as-delivered acid mass × measured H3PO4 mass fraction | product_mass; H3PO4_fraction | kg contained H3PO4 |  |
| `calc_p2o5_conversion` | Records reported as P2O5 | Convert P2O5 assay to H3PO4 only with a documented stoichiometric factor and preserve both reported and converted values; prohibit treating the percentages as interchangeable | P2O5_fraction; conversion_method | H3PO4_fraction with audit field | `us-epa-ap42-phosphoric-acid` |
| `calc_reference_normalization` | All foreground rows | normalized amount = reporting-period net amount / reporting-period contained H3PO4 in qualified producer-gate output | net_flow_amount; qualified_product_mass; H3PO4_fraction | amount per 1 kg contained H3PO4 |  |
| `calc_route_mix` | Production-mix datasets | aggregate route inventories only after each route is normalized; route weight = route contained-H3PO4 output / total contained-H3PO4 output | route outputs and normalized inventories | disclosed contained-H3PO4-weighted production mix | `eu-environmental-footprint-recommendation-2021` |
| `calc_emission_mass` | Stack and wastewater species | emitted mass = measured concentration × measured carrier-gas or water volume, with temperature, pressure, moisture, unit conversion, non-detect treatment, and operating time documented | concentration; carrier_flow; conditions; operating_time | kg species per reporting period | `us-epa-ap42-phosphoric-acid`; `eu-jrc-lvic-aaf-bref-2007` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Product flow identity, CPC context, route, grade, physical state, H3PO4 assay basis, geography, and producer-gate condition must be complete and mutually consistent. | Tiangong UUID confirmation, product specification, batch release record |
| `dq_mass_balance` | Each route and reporting period | Reconcile phosphorus-bearing inputs, contained-H3PO4 product and intermediates, recycle, phosphogypsum/residues, wastewater, emissions, inventory change, and documented loss; explain residuals. | signed material balance and assay records |
| `dq_temporal` | Foreground records | Use one representative continuous 12-month period where available, or disclose shorter campaign coverage, shutdowns, start-ups, abnormal operation, and averaging method. | meter coverage, production calendar, batch list |
| `dq_representativeness` | Foreground and upstream datasets | Assess technological, geographical, time representativeness, and precision; higher-quality site-specific data are required for major material, energy, product, residue, and direct-emission rows. | data-quality assessment and source metadata; `eu-environmental-footprint-recommendation-2021` |
| `dq_completeness` | All routes | Cover all operated process-map stages and every material discharge, including recycled, marketed, stored, or treated streams; quantify data coverage and justify exclusions. | process map, meter register, permits, waste manifests, exclusion log |
| `dq_uncertainty` | Reasoned estimates and non-detects | Flag every `reasoned_estimate` as provisional and replace it with foreground or reviewed external evidence before publication-critical use; state detection limits and non-detect substitution. | uncertainty register and review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Fail if the product flow UUID, Mass property UUID, Units of mass UUID, CPC 34232 context, or reference unit kg is missing or inconsistent. |  |
| `validate_required_qualifiers` | Dataset metadata | Fail if delivered H3PO4 mass fraction, analytical basis, product grade, route, purification status, physical state, producer-gate condition, geography, or reporting period is missing. | `us-epa-phosphoric-acid-supply-chain-2023` |
| `validate_route_structure` | Process map and inventory | Require either the complete applicable wet-process chain or thermal-process chain, plus applicable purification and required storage/loading; fail a production mix that does not disclose route weights. | `us-epa-ap42-phosphoric-acid`; `eu-jrc-lvic-aaf-bref-2007` |
| `validate_h3po4_balance` | Product normalization | Recalculate contained H3PO4 from product mass and assay and require agreement with the 1 kg reference basis within the declared measurement uncertainty; fail an undocumented P2O5-to-H3PO4 conversion. |  |
| `validate_wet_streams` | Wet process | Require phosphate rock, sulfuric acid, process water, weak acid, phosphogypsum disposition, fluoride-bearing air emissions, wastewater, energy, and concentration utilities when applicable; any omission requires a documented zero or exclusion rationale. | `us-epa-ap42-phosphoric-acid`; `eu-jrc-lvic-aaf-bref-2007` |
| `validate_thermal_streams` | Thermal process | Require elemental phosphorus, oxidant, hydration water, utilities, product assay, particulate/phosphorus-bearing air emissions, and net wastewater/residues; any omission requires a documented zero or exclusion rationale. | `us-epa-ap42-phosphoric-acid`; `us-epa-phosphoric-acid-supply-chain-2023` |
| `validate_allocation` | Co-products and wastes | Fail if phosphogypsum, recovered fluosilicic acid, or another output is credited as a co-product without market/use evidence and a disclosed allocation hierarchy, or if internal recycle is double counted. | `eu-jrc-lvic-aaf-bref-2007`; `eu-environmental-footprint-recommendation-2021` |
| `validate_source_and_estimate_status` | Ranges and rules | Require source ids for external ranges and method rules; require provisional labelling and an unresolved evidence note for every `reasoned_estimate`. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground phosphoric-acid production dataset normalized to 1 kg contained H3PO4 at producer gate |
| downstream_use | `secondary_dataset`; `background_dataset` after review of route, concentration, geography, allocation, and data quality |
| allowed_use | Route- and grade-matched LCA models, chemical and fertiliser supply chains, and disclosed production mixes whose required qualifiers match the dataset |
| excluded_use | Silent substitution across wet and thermal routes, concentrations, grades, geographies, or purification states; weak-acid or slurry intermediates treated as finished acid; downstream use or distribution claims outside the boundary |
| required_metadata | canonical PCR id; product flow UUID; CPC context; producer; geography; reporting period; route and route weights; delivered H3PO4 and P2O5 assay with conversion method; grade/specification; physical state; included purification; technology; allocation; residue destinations; upstream dataset identities |
| required_quality_disclosure | meter and laboratory coverage; mass-balance residual; technological/geographical/temporal representativeness and precision; exclusions; non-detect handling; source versions; provisional `reasoned_estimate` rows; uncertainty and review status |
| update_trigger | Change in route, concentration or grade, purification train, major supplier or energy mix, emission control, phosphogypsum disposition, allocation method, geography, reference-flow identity, or evidence that materially changes an important range or rule |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `us-epa-ap42-phosphoric-acid` | `official_guidance` | U.S. EPA, AP-42 Chapter 8.9, Phosphoric Acid. https://www.epa.gov/sites/default/files/2020-09/documents/8.9_phosphoric_acid.pdf (retrieved 2026-08-09) | Wet and thermal process decomposition; weak-acid concentration context; fluoride and particulate emission points; control and measurement rules |
| `us-epa-phosphoric-acid-supply-chain-2023` | `official_guidance` | U.S. EPA, Phosphoric Acid Supply Chain Profile, 2023. https://www.epa.gov/system/files/documents/2023-03/Phosphoric%20Acid%20Supply%20Chain%20Profile.pdf (retrieved 2026-08-09) | Wet versus thermal routes; industrial versus purified/high-purity product distinction; sulfuric-acid dependence and purification boundary |
| `eu-jrc-lvic-aaf-bref-2007` | `official_guidance` | European Commission JRC, Reference Document on Best Available Techniques for the Manufacture of Large Volume Inorganic Chemicals – Ammonia, Acids and Fertilisers, August 2007. https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2022-03/LVIC-AAF.pdf (retrieved 2026-08-09) | Wet-process boundary; P2O5 efficiency; fluoride control; process-water recycle; wastewater treatment; phosphogypsum and fluosilicic-acid disposition; source-backed QA ranges |
| `eu-environmental-footprint-recommendation-2021` | `standard` | European Commission Recommendation (EU) 2021/2279 on Environmental Footprint methods. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32021H2279R(01) (retrieved 2026-08-09) | Functional-unit and intermediate-product framing; multifunctionality hierarchy; subdivision, physical and economic allocation; data quality and representativeness |
