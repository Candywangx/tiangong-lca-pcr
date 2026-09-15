---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.abalone-frozen-smoked-dried-salted-or-in-brine
language: en-US
status: candidate
content_maturity: authored_methodology
translation_status: canonical
sync_with: pcr.zh-CN.md
---

# Abalone, frozen, smoked, dried, salted or in brine

## 1. Scope and Applicability

This PCR governs foreground data packages for food-grade abalone (*Haliotis* spp.) preserved by freezing, smoking, drying, salting, or immersion in brine and supplied at the processing-plant gate. It covers product sold in-shell or shucked, and edible abalone flour, meal, or pellets when preservation remains within the named routes. One dataset shall represent a declared species or species mix, wild or farmed raw-material source, shell state, preservation route, packaging system, and storage condition.

The foreground boundary begins when live, fresh, chilled, frozen, or otherwise declared same-category intermediate abalone is received by the processor. It ends with packaged saleable product in its declared storage condition at the plant gate. Aquaculture, hatchery, grow-out, wild harvest, and landing are upstream and require linked supplier datasets. Distribution, retail, consumer preparation, consumption, and packaging end-of-life are downstream unless the study explicitly extends the boundary and reports those additions separately.

The PCR does not cover live, fresh, or chilled abalone sold without one of the named preservation routes; abalone otherwise prepared or preserved by canning, sauce, cooking-only, seasoning-only, or comparable routes; inedible abalone meals or pellets; dead abalone unfit for human consumption; or mixed prepared meals. The official fish-processing sources cited below are applied as process and control benchmarks; jurisdiction-specific seafood safety requirements remain controlling.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.abalone-frozen-smoked-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21261, Abalone, frozen, smoked, dried, salted or in brine |
| covered_products | Food-grade *Haliotis* spp., whether in shell or not, frozen, dried, salted, or in brine; smoked abalone whether or not cooked before or during smoking; edible abalone flour, meal, and pellets produced by a covered route |
| excluded_products | Live, fresh, or chilled abalone without covered preservation; otherwise prepared or preserved abalone; inedible flour, meal, or pellets; products unfit for human consumption; complete dishes or meals |
| representative_product | Packaged whole or shucked *Haliotis* spp. preserved by one declared freezing, smoking, drying, salting, or brining route |
| production_route | Raw-material receipt and preparation; one or more declared preservation operations; packaging; controlled finished-product storage |
| market_state | Saleable plant-gate product with declared species/source, shell state, preservation route, net-mass basis, packaging atmosphere, and required storage condition |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Provision of saleable food-grade abalone in the declared frozen, smoked, dried, salted, or brined state at the processing-plant gate |
| How much | 1 kg net saleable product, excluding packaging material; declare whether the mass includes shell or covering brine and report drained abalone mass when brine is present |
| How well | Conforming to the declared species/source, shell state, preservation route, moisture or water-activity specification where applicable, packaging system, and storage condition |
| How long or cycle | One production batch normalized to the plant-gate reference output; storage duration through the plant gate shall be declared |
| reference_flow_link | Abalone, frozen, smoked, dried, salted or in brine `61e83c4f-6657-4762-9a2b-9423a54b7bd5` |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg net saleable abalone product at the plant gate |
| Reference product flow | Abalone, frozen, smoked, dried, salted or in brine `61e83c4f-6657-4762-9a2b-9423a54b7bd5` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | scientific or commercial species identification; wild or farmed source and supplier geography; in-shell, shucked, sliced, flour, meal, or pellet form; freezing, hot-smoking, cold-smoking, smoke-drying, drying, dry-salting, wet-salting, or brining route; cooked-before-or-during-smoking status; net-mass convention; shell inclusion; drained-mass and covering-liquid mass for brined product; moisture and water activity where controlled; packaging material and aerobic, vacuum, or modified-atmosphere condition; finished-product storage temperature and duration |

When constructing a foreground data package, every item listed in `Required qualifiers` that applies to the product shall be declared in dataset metadata, process notes, the reference-flow comment, the product description, or an equivalent data-package field. Product masses using different shell or covering-liquid conventions are not directly comparable until converted to the same declared basis.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference product and all mass-normalized inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net product mass excluding packaging. Record shell and covering-liquid inclusion separately and report drained abalone mass for brined product. |
| `energy_conversion` | Electricity and thermal-energy inputs | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | Preserve the metered unit and conversion factor; use 3.6 MJ per kWh only as the exact unit conversion, not as an energy-use estimate. |
| `water_and_brine_mass` | Process water, brine, and wastewater | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Prefer measured mass; when volume is measured, record density, temperature, and the conversion used. Keep salt mass, added water, retained brine, and discharged brine separate. |
| `moisture_and_aw` | Dried and smoke-dried product | Product-specific moisture or water-activity measurement | mass fraction or dimensionless aw | Record analytical method, sample location, batch, result, and applicable limit; do not convert moisture content to water activity without a validated product-specific relationship. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Abalone received at the processing facility with species/source, shell state, temperature, mass, and supplier dataset reference declared |
| starting_condition_role | Upstream product input to the foreground receiving and preparation process |
| product_classification_scope | Food-grade *Haliotis* spp. entering a route that produces CPC 3.0 class 21261 product |
| recursive_input_rule | When an input is already a frozen, smoked, dried, salted, or brined abalone product in this same category, record it as a same-category intermediate with its supplier dataset and begin the current foreground boundary at receipt; do not recreate or double count its prior preservation burdens. |
| upstream_dataset_requirement | Link wild-harvest or aquaculture production, landing, prior preservation, ingredients, packaging materials, energy supply, water supply, and waste treatment to geographically and technologically appropriate upstream datasets. |
| disclosure | Declare raw-material source, input state, included processes, preservation route, cooking status, packaging atmosphere, storage conditions, temporal coverage, excluded operations, and any same-category intermediate. |

### Normative Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | foreground_system_boundary | Include receipt, inspection, washing and preparation, the declared preservation operation, packaging, and controlled finished-product storage through the plant gate. | `codex-cac-rcp-52-2003`; `iso-14044-2006` |
| `boundary_route_specificity` | preservation_route | Instantiate and disclose the actual freezing, smoking, drying, salting, or brining operations; do not model mutually exclusive routes as if all occurred. | `codex-cac-rcp-52-2003`; `codex-cxs-311-2013` |
| `boundary_cold_chain` | chilled_and_frozen_storage | Include refrigeration or freezing energy and refrigerant losses under operational control from receipt through the plant gate; frozen storage shall record time and temperature. | `codex-cac-rcp-52-2003`; `fda-seafood-hazards-controls-2022` |
| `boundary_sanitation` | sanitation_and_wastewater | Include process and sanitation water, approved cleaning agents when material, wastewater or brine discharge, and on-site treatment; use potable or otherwise legally suitable water for product-contact operations. | `codex-cac-rcp-52-2003` |
| `boundary_capital_goods` | infrastructure | Exclude buildings and capital equipment from the default gate-to-gate dataset unless the governing study, PCR programme, or materiality review explicitly requires them; disclose any inclusion. | `iso-14044-2006` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `receipt_and_preparation` | Raw-material receipt and preparation | `required` | Always required | Foreground receipt, inspection, washing, de-shelling or trimming as declared | kg prepared abalone leaving preparation |
| `preservation_route` | Route-specific preservation | `required` | Instantiate only the actual freezing, smoking, drying, salting, or brining operations; multiple operations may be linked in their real sequence | Foreground preservation | kg preserved abalone intermediate |
| `packaging_and_storage` | Final packaging and plant-gate storage | `required` | Always required; storage condition follows the declared product specification | Foreground packaging and controlled storage | 1 kg net saleable reference product |

### Process: Raw-material receipt and preparation (`receipt_and_preparation`)

#### Inputs

##### Product flows

###### Wild raw abalone received (`wild_raw_abalone`)

Record wild *Haliotis* spp. received from a landing or supplier dataset when the raw-material source is wild. Do not use this row for farmed abalone.

- Selected flow: Wild abalone, live, fresh or chilled `477d146c-cb2f-457d-a1a6-5d065dcbdca5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted wild raw-material mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Range: Provisional raw-to-product screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: accepted raw abalone mass per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Farmed raw abalone received (`farmed_raw_abalone`)

Record farmed *Haliotis* spp. received from an aquaculture supplier dataset. Select a verified supplier-specific Tiangong flow; do not substitute an aquaculture-seedling flow.

- Selected flow: Farmed abalone, live, fresh or chilled
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured accepted farmed raw-material mass
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_receiving_batch`
- Range: Provisional raw-to-product screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: accepted raw abalone mass per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Product-contact water (`preparation_water`)

Record water used for washing, thawing when applicable, de-shelling support, and product-contact preparation.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered or batch-estimated product-contact water use
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_utilities`
- Sources: `codex-cac-rcp-52-2003`
- Range: Provisional preparation-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 100
  - Unit: kg/kg reference product
  - Basis: water supplied to receipt and preparation per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`preparation_electricity`)

Record electricity for pumps, conveyors, washing, de-shelling, cutting, ice handling, and other preparation equipment.

- Selected flow: Alternating current, electricity mix, consumption mix, less than 1 kV `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered electricity allocated to receipt and preparation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_utilities`
- Range: Provisional preparation-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 20
  - Unit: MJ/kg reference product
  - Basis: electricity allocated to receipt and preparation per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Prepared abalone intermediate (`prepared_abalone`)

Record the mass and state of abalone transferred to preservation, retaining traceability to the received batch.

- Selected flow: Prepared abalone intermediate, facility-specific
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured prepared-abalone mass transferred to preservation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_yield`
- Range: Provisional preparation-yield screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 1.2
  - Unit: kg/kg accepted raw abalone
  - Basis: prepared abalone mass per kg accepted raw abalone
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Shells and preparation residues (`shells_and_residues`)

Record shells, viscera, damaged product, and other preparation residues separately when their treatment or co-product status differs.

- Selected flow: Abalone shells `8caae24b-92f0-4ece-b1de-730bfbe4d9da`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured residue mass by treatment destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg accepted raw abalone and reported per reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preparation_yield`
- Range: Provisional residue screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.95
  - Unit: kg/kg accepted raw abalone
  - Basis: shells and residues per kg accepted raw abalone
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation wastewater (`preparation_wastewater`)

Record product-contact and cleaning water leaving preparation, including destination and on-site treatment.

- Selected flow: Untreated municipal wastewater influent `41eb8873-6852-40fe-8b5d-b792fe4d4754`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured or mass-balance-calculated wastewater sent to treatment
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preparation_utilities`
- Range: Provisional preparation-wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference product
  - Basis: wastewater leaving preparation per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Route-specific preservation (`preservation_route`)

#### Inputs

##### Product flows

###### Prepared or same-category abalone input (`preservation_abalone_input`)

Record prepared abalone from the preceding process or a disclosed same-category intermediate from a supplier. Preserve route sequence and do not double count prior preservation.

- Selected flow: Prepared or same-category abalone intermediate
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass entering each preservation operation
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_batch`
- Range: Provisional preservation-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.1
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: abalone entering preservation per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Food-grade salt (`preservation_salt`)

Record salt only for dry-salting, wet-salting, brining, osmotic pretreatment, or a declared smoking/drying formulation.

- Selected flow: Salt, food-grade, for brine preparation `3a5fa711-4648-4d58-b94d-67b79e7476c7`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: weighed salt charged to the batch, net of documented recovered and reused salt
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_materials`
- Sources: `codex-cac-rcp-52-2003`; `codex-cxs-311-2013`; `lemus-mondaca-2018-abalone-drying`
- Range: Provisional salt-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: food-grade salt charged per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation water (`preservation_water`)

Record water used for brine preparation, wet salting, thawing, cooking associated with smoking, or route-specific washing.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: metered water charged to the preservation batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_materials`
- Sources: `codex-cac-rcp-52-2003`
- Range: Provisional preservation-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference product
  - Basis: preservation water per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preservation electricity (`preservation_electricity`)

Record electricity for freezing, refrigeration, fans, pumps, dryers, smoke generators, controls, and route-specific handling.

- Selected flow: Alternating current, electricity mix, consumption mix, less than 1 kV `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered electricity allocated to the declared preservation operation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_energy`
- Range: Provisional preservation-electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: MJ/kg reference product
  - Basis: preservation electricity per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Thermal fuel or smoke medium (`thermal_fuel_or_smoke_medium`)

Record the actual fuel, steam, smoke wood, smoke condensate, or other thermal/smoking medium only when used. Select a verified facility-specific Tiangong flow and retain its composition or fuel-quality record.

- Selected flow: Declared thermal fuel or smoke medium, facility-specific
- Flow property / unit: Mass or net calorific value / kg or MJ as applicable
- Amount rule: measured purchase, batch charge, or metered thermal energy
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_energy`
- Sources: `codex-cac-rcp-52-2003`; `codex-cxs-311-2013`
- Range: Provisional thermal-input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: MJ/kg reference product
  - Basis: delivered thermal energy or fuel energy per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Preserved abalone intermediate (`preserved_abalone_intermediate`)

Record the product after the actual preservation route, including mass, shell state, salt or covering-liquid state, moisture, water activity where controlled, and temperature.

- Selected flow: Abalone, frozen, smoked, dried, salted or in brine `61e83c4f-6657-4762-9a2b-9423a54b7bd5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured preserved-product mass transferred to packaging
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per preservation batch and reported per reference product
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_preservation_batch`
- Sources: `codex-cac-rcp-52-2003`; `codex-cxs-311-2013`; `lemus-mondaca-2018-abalone-drying`
- Range: Provisional preservation-yield screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.05
  - Upper: 1.2
  - Unit: kg/kg abalone entering preservation
  - Basis: preserved product per kg abalone entering preservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spent brine and preservation wastewater (`spent_brine_and_wastewater`)

Record spent brine, thawing water, condensate, and cleaning wastewater by destination; distinguish reuse from discharge.

- Selected flow: High-concentration saline wastewater `76ab69b6-6fa7-461c-be07-bc54e581a699`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured discharge or mass-balance calculation from water, salt, retained brine, and reuse records
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_waste`
- Range: Provisional spent-brine and wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg/kg reference product
  - Basis: spent brine and preservation wastewater per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water removed to air (`water_to_air`)

For drying, smoke-drying, and other moisture-removal routes, calculate water removed from measured input and output masses and moisture results. Do not apply this row to routes without material moisture removal.

- Selected flow: Water, emitted to air, facility-specific elementary flow
- Flow property / unit: Mass / kg
- Amount rule: calculated water loss from route-specific mass and moisture balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_quality`
- Sources: `lemus-mondaca-2018-abalone-drying`
- Range: Provisional removed-water screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20
  - Unit: kg/kg reference product
  - Basis: water removed during preservation per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Direct preservation emissions to air (`preservation_air_emissions`)

Record route-specific direct combustion, refrigerant, and smoking emissions when they cross the foreground environmental boundary. Calculate only from measured fuel/refrigerant activity and a cited factor or direct measurement.

- Selected flow: Substance-specific elementary flow to air
- Flow property / unit: Mass / kg
- Amount rule: measured release or calculated emission by substance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_preservation_energy`
- Sources: `codex-cxs-311-2013`
- Range: Provisional substance-specific preservation-emission screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kg/kg reference product
  - Basis: each declared direct emission substance per 1 kg net saleable reference product
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Final packaging and plant-gate storage (`packaging_and_storage`)

#### Inputs

##### Product flows

###### Preserved abalone for pack-out (`packout_abalone`)

Record preserved abalone transferred from the declared route to final packaging, preserving batch and route identity.

- Selected flow: Abalone, frozen, smoked, dried, salted or in brine `61e83c4f-6657-4762-9a2b-9423a54b7bd5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured product mass entering final pack-out
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_product_mass`
- Range: Provisional pack-out input screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.2
  - Unit: kg/kg reference product
  - Basis: preserved product entering pack-out per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Primary plastic packaging (`primary_packaging`)

Record the actual food-contact packaging resin, laminate, tray, pouch, or film by material; the selected generic film is used only when it matches the purchased packaging.

- Selected flow: Plastic film `b01e4bd9-5ada-4676-8a90-be5f167c00fc`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased packaging issued to conforming packs minus documented returned unused material
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Range: Provisional primary-packaging screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.001
  - Upper: 0.2
  - Unit: kg/kg reference product
  - Basis: primary packaging per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Secondary corrugated packaging (`secondary_packaging`)

Record corrugated board or an alternative secondary material using the actual purchased specification and verified flow.

- Selected flow: Corrugated cardboard `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: purchased secondary packaging allocated to conforming product
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Range: Provisional secondary-packaging screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg reference product
  - Basis: secondary packaging per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging and storage electricity (`packaging_storage_electricity`)

Record sealing, vacuum or modified-atmosphere equipment, conveyors, final freezing or cooling, and finished-product cold-store electricity through the plant gate.

- Selected flow: Alternating current, electricity mix, consumption mix, less than 1 kV `50657322-939c-4829-a87b-47c093bfa6a7`
- Flow property / unit: Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- Amount rule: metered electricity allocated by documented equipment, batch, storage-volume, and storage-time drivers
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_energy`
- Sources: `codex-cac-rcp-52-2003`; `fda-seafood-hazards-controls-2022`
- Range: Provisional packaging-and-storage electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.01
  - Upper: 100
  - Unit: MJ/kg reference product
  - Basis: packaging and plant-gate storage electricity per 1 kg net saleable reference product
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Packaged saleable abalone reference product (`reference_product_output`)

This is the quantitative reference output. Record net product, packaging, shell, covering-liquid, and drained-mass fields separately so that the 1 kg normalization can be reproduced.

- Selected flow: Abalone, frozen, smoked, dried, salted or in brine `61e83c4f-6657-4762-9a2b-9423a54b7bd5`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: exactly 1 kg after normalization from measured conforming product mass
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_product_mass`
- Range: Reference-flow identity check
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1
  - Upper: 1
  - Unit: kg
  - Basis: normalized reference output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `iso-14044-2006`

##### Waste flows

###### Packaging rejects and scrap (`packaging_scrap`)

Record rejected packs, trim, film, board, and damaged packaging by material and treatment destination.

- Selected flow: Packaging waste, material-specific
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured packaging waste by material and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packaging_materials`
- Range: Provisional packaging-waste screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg reference product
  - Basis: packaging rejects and scrap per 1 kg net saleable reference product
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Refrigerant emissions to air (`refrigerant_emissions`)

Record refrigerant losses under processor control from freezing and cold-storage equipment by substance.

- Selected flow: Refrigerant-specific elementary flow to air
- Flow property / unit: Mass / kg
- Amount rule: annual top-up or leak-test loss allocated to product by documented refrigeration load and storage driver
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg net saleable reference product
- Basis kind: Storage duration (`storage_duration`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_packaging_storage_energy`
- Range: Provisional refrigerant-loss screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: each declared refrigerant emitted per 1 kg net saleable reference product
  - Basis kind: Storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | route_and_batch_operations | Avoid allocation by separately metering or subdividing wild and farmed sources, preservation routes, product forms, and materially different packaging or storage conditions. | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_shared_utilities` | shared_water_energy_and_storage | Allocate shared utilities using a documented physical driver that reflects causality, such as metered equipment use, operating time, refrigeration load times storage duration, or product mass when no better driver exists. | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_shells_and_residues` | shells_offal_and_other_outputs | First document whether each output is a waste or a co-product. For a co-product, prefer subdivision; if subdivision is not possible, use a relevant physical relationship and disclose it. Use economic allocation only when a physical relationship cannot be established, and report a sensitivity result. | `iso-14044-2006` |
| `allocation_reuse_and_recycling` | reused_brine_packaging_and_residues | Credit no avoided burden inside the gate-to-gate dataset unless an explicit system-expansion or recycling method is required by the governing study. Record recovered material and the receiving treatment or product system separately. | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_mass_balance` | foreground_mass_reconciliation | Reconcile raw abalone, water, salt, packaging, product, residues, wastewater, covering liquid, and moisture removal on consistent wet- or dry-mass bases; report unexplained imbalance rather than forcing it into a co-product. | `codex-cac-rcp-52-2003`; `lemus-mondaca-2018-abalone-drying` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_batch` | `receipt_and_preparation` | wild and farmed raw abalone | receiving lot record | lot_id; species; wild_or_farmed; supplier; harvest_or_farm_geography; shell_state; receipt_time; receipt_temperature; gross_mass; rejected_mass; accepted_mass; supplier_dataset_ref | calibrated scale, receiving inspection, and supplier traceability record | kg; degrees C | every lot | all lots in reporting period | every included facility | sum accepted mass by source and product route; retain rejected mass separately | scale calibration; lot tickets; supplier certificate; species and source verification |
| `cp_preparation_utilities` | `receipt_and_preparation` | preparation water, electricity, and wastewater | meter and production log | meter_start; meter_end; submeter_id; batch_id; water_source; wastewater_destination; operating_time; allocation_driver | direct submeter preferred; otherwise reconciled main meter with documented physical allocation | kg water; kWh or MJ electricity; kg wastewater | each batch or shift | complete reporting period | each included preparation line | subtract documented non-process use; allocate only residual shared use with declared driver | meter calibration; invoices; shift logs; water suitability record |
| `cp_preparation_yield` | `receipt_and_preparation` | prepared product, shells, and residues | batch mass balance | accepted_raw_mass; prepared_mass; shell_mass; viscera_mass; other_residue_mass; retained_product_mass; destinations | calibrated scales at transfer and waste collection points | kg | every batch | complete reporting period | each included line | sum each mass by batch and route; report unresolved imbalance | scale calibration; batch sheet; waste transfer record |
| `cp_preservation_batch` | `preservation_route` | preservation input and output | route batch record | batch_id; route_sequence; input_mass; output_mass; species; shell_state; cook_status; time; temperature; pressure_if_any; storage_transition | calibrated scales plus validated route control log | kg; minutes or hours; degrees C | every batch | complete reporting period | every route and equipment train | aggregate only batches with equivalent route and product qualifiers | calibration; HACCP or process-control record; batch release result |
| `cp_preservation_materials` | `preservation_route` | salt, water, brine, and route ingredients | batch formulation record | batch_id; salt_mass; water_mass; reused_brine_mass; discharged_brine_mass; ingredient_identity; food_grade_status; concentration_measurement | weigh tickets, flow meter, and formulation log | kg; mass fraction | every batch | complete reporting period | each route and facility | report virgin, reused, retained, and discharged quantities separately | scale or meter calibration; ingredient specification; formulation approval |
| `cp_preservation_energy` | `preservation_route` | electricity, thermal fuel, smoke medium, and direct emissions | meter, fuel, and maintenance record | batch_id; electricity_kWh; fuel_quantity; fuel_LHV; steam_quantity; equipment_time; smoke_medium; refrigerant_top_up; emission_factor_id; direct_measurement | submeter and purchase records; direct emissions measurement or cited factor when calculated | kWh; MJ; kg | batch, shift, or monthly with batch allocation | complete reporting period | each preservation equipment train | convert energy units explicitly; allocate shared energy by causal driver; calculate each emission by substance | meter calibration; invoices; fuel certificate; factor citation; leak and stack records |
| `cp_preservation_quality` | `preservation_route` | moisture, water activity, salt, temperature, and product state | laboratory and process-control record | batch_id; sample_id; sampling_location; moisture_result; moisture_method; aw_result; aw_method; salt_result; core_temperature; storage_requirement; specification_limit | validated laboratory or calibrated in-line method | mass fraction; aw; degrees C | each batch or validated sampling plan | complete reporting period | every declared product specification | retain batch result and report production-weighted summary without replacing specification limits | method identifier; calibration; laboratory result; release decision |
| `cp_preservation_waste` | `preservation_route` | spent brine, wastewater, condensate, and route residues | discharge and waste record | batch_id; stream_identity; mass_or_volume; density; salt_concentration; destination; treatment; reuse_quantity | flow meter, tank level, weigh ticket, or documented mass balance | kg; m3; mass fraction | each discharge or batch | complete reporting period | each discharge point | convert volume with recorded density; separate reuse, on-site treatment, and off-site treatment | meter calibration; manifest; treatment receipt; mass-balance review |
| `cp_packaging_materials` | `packaging_and_storage` | primary and secondary packaging and scrap | packaging issue and waste record | material_id; supplier; mass_per_item; items_issued; conforming_packs; unused_returns; reject_mass; destination | bill of materials verified by weigh check and inventory reconciliation | kg; item | each packaging run | complete reporting period | every included pack format | calculate used mass from verified item mass and reconcile issues, returns, and scrap | supplier specification; scale check; inventory and waste records |
| `cp_packaging_storage_energy` | `packaging_and_storage` | packaging electricity, cold storage, and refrigerant | meter and refrigeration log | equipment_id; electricity_kWh; storage_temperature; entry_time; exit_time; storage_mass; refrigerant_type; top_up_mass; leak_event | equipment submeter or main-meter allocation; temperature logger; maintenance record | kWh; degrees C; kg*h; kg refrigerant | continuous or shift meter; each storage lot | complete reporting period including plant-gate storage | each packaging line and cold room | allocate cold-room electricity by refrigeration-load proxy and mass-time; report refrigerant by substance | meter calibration; continuous temperature record; maintenance invoice; allocation workbook |
| `cp_final_product_mass` | `packaging_and_storage` | reference product and net-mass convention | pack-out and batch release record | batch_id; gross_pack_mass; packaging_mass; covering_liquid_mass; drained_abalone_mass; shell_included; conforming_product_mass; route; expiry_or_storage_instruction | calibrated scale and declared net/drained-mass procedure | kg | every lot or statistically controlled pack check | complete reporting period | every included product and pack format | normalize inventory to measured conforming mass using the declared net-mass convention | scale calibration; legal-metrology check; label; batch release certificate |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = reporting-period amount / reporting-period conforming reference-product mass | flow amount; conforming reference-product mass | amount per 1 kg reference product | `iso-14044-2006` |
| `calc_net_product_mass` | brined and packaged product | net reference mass = gross filled-pack mass - packaging mass; report covering-liquid mass and drained abalone mass separately and declare which is the saleable-product basis | gross pack mass; packaging mass; covering-liquid mass; drained mass | net product mass and drained-mass qualifier | `codex-cxs-311-2013` |
| `calc_energy_conversion` | electricity | MJ = kWh x 3.6; retain the original kWh record and do not treat the conversion as an energy estimate | metered kWh | MJ | `iso-14044-2006` |
| `calc_route_yield` | preparation and preservation | yield = measured conforming output mass / measured input abalone mass, using consistent shell, covering-liquid, and moisture bases | input mass; output mass; shell state; moisture basis | route-specific mass yield | `lemus-mondaca-2018-abalone-drying` |
| `calc_brine_composition` | salting and brining | initial brine salt fraction = salt mass / (salt mass + water mass); report reused brine and final measured concentration separately | salt mass; water mass; reused-brine record; measured concentration | prepared brine fraction and final concentration | `codex-cac-rcp-52-2003`; `codex-cxs-311-2013` |
| `calc_removed_water` | drying and smoke-drying | removed water = input water mass + added water - output product water mass - liquid waste water mass, with every term based on measured mass and moisture | input/output masses; moisture results; added water; liquid wastes | water removed to air and balance residual | `lemus-mondaca-2018-abalone-drying` |
| `calc_shared_utilities` | shared meters | allocate shared amount using the documented causal driver; sum allocated amounts back to the measured total and report unallocated residual | meter total; excluded use; equipment time; refrigeration load; mass-time | allocated utility amount and residual | `iso-14044-2006`; `eu-pef-method-2021` |
| `calc_mass_balance` | each process and reporting period | mass-balance residual = total measured mass inputs - total measured mass outputs; investigate and disclose moisture change, evaporation, sampling, stock change, and measurement uncertainty | all mass inputs; all mass outputs; inventory change | residual mass and explanation | `iso-14044-2006`; `codex-cac-rcp-52-2003` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | product and raw material | Identify *Haliotis* species or justified mix, wild or farmed source, supplier geography, shell state, preservation route, cooking status, pack format, and storage condition. | lot traceability; supplier declaration; product specification; label |
| `dq_temporal` | foreground activity data | Cover a complete representative reporting period including seasonal and storage-load variation; if shorter, disclose the period, campaign context, and representativeness limitation. | dated batch, meter, purchase, and production records; `eu-pef-method-2021` |
| `dq_technological` | preservation and packaging | Match collected data to the actual equipment train, preservation sequence, packaging atmosphere, and cold-store operation represented. | equipment list; process flow; batch controls; `eu-pef-method-2021` |
| `dq_geographical` | utilities and upstream links | Use site-specific utilities and geographically appropriate upstream datasets or explain proxy selection. | site address; utility supplier; dataset metadata; `eu-pef-method-2021` |
| `dq_completeness` | inventory | Include every required process and all measured raw material, water, salt, energy, packaging, product, waste, wastewater, and direct-emission streams; document zero, not-applicable, and unavailable records separately. | reconciled ledger; meter coverage map; mass and energy checks |
| `dq_measurement` | mass, energy, temperature, moisture, and aw | Use calibrated instruments or verified invoices and retain method, calibration, sampling, and conversion evidence. | calibration certificate; laboratory method; invoice; logger record |
| `dq_route_separation` | multi-product facilities | Separate routes and materially different product forms by direct records or a documented causal allocation driver. | submeter; batch schedule; allocation workbook; `iso-14044-2006` |
| `dq_estimate_status` | provisional ranges | Treat every `reasoned_estimate` range as a QA screen only; replace it with collected values and source-backed factors before a dataset is released for normal use. | dataset review record; completed collection protocols |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_scope` | product_identity | Confirm *Haliotis* identity, one declared raw-material source, covered preservation route, shell/form state, packaging, and storage condition; reject otherwise prepared products and undeclared route mixtures. | `environdec-fish-and-fish-products-pcr-v1`; `codex-cac-rcp-52-2003` |
| `validate_reference_flow` | reference_flow | Confirm product flow `61e83c4f-6657-4762-9a2b-9423a54b7bd5`, Mass property `93a60a56-a3c8-11da-a746-0800200b9a66`, Units of mass group `93a60a57-a4c8-11da-a746-0800200c9a66`, kg unit, and a reproducible net-mass convention. | `iso-14044-2006` |
| `validate_process_completeness` | process_inventory | Confirm receipt and preparation, the actual preservation operation, packaging, and plant-gate storage are present, while non-occurring preservation routes are absent or explicitly not applicable. | `codex-cac-rcp-52-2003` |
| `validate_mass_balance` | mass_inventory | Reconcile measured input, product, residue, wastewater, covering-liquid, moisture-removal, and inventory-change masses for each process and disclose unresolved residuals. | `iso-14044-2006`; `codex-cac-rcp-52-2003` |
| `validate_frozen_route` | frozen_product | For frozen product, retain freezing and storage time-temperature records; use at or colder than -18 degrees C as the Codex benchmark unless a governing product or jurisdictional specification requires a different validated limit. | `codex-cac-rcp-52-2003` |
| `validate_smoked_dried_route` | smoked_dried_product | Record smoking, drying, salt, packaging, storage, moisture, and water-activity controls. If shelf stability is claimed using the CXS 311 smoke-dried benchmark, demonstrate aw at or below 0.75 or moisture at or below 10 percent; otherwise retain the validated product-specific limit and storage requirement. | `codex-cxs-311-2013`; `fda-seafood-hazards-controls-2022` |
| `validate_brine_and_salt` | salted_or_brined_product | Reconcile food-grade salt, water, reused brine, retained covering liquid, and spent brine; record measured formulation or final concentration rather than assuming salt uptake. | `codex-cac-rcp-52-2003`; `codex-cxs-311-2013` |
| `validate_packaging_and_label` | packaged_product | Confirm packaging material and atmosphere, net or drained-mass convention, lot identity, and storage/handling instructions match the represented product. | `codex-cxs-311-2013`; `fda-seafood-hazards-controls-2022` |
| `validate_data_quality` | dataset_release | Confirm temporal, technological, geographical, completeness, and precision evidence and disclose proxy datasets, allocation, exclusions, and uncertainty. | `eu-pef-method-2021`; `iso-14044-2006` |
| `validate_no_estimate_as_observation` | quantitative_inventory | Fail release when a provisional `reasoned_estimate` has been copied into the foreground inventory as if observed; only collected or transparently calculated values may populate the released foreground amounts. | `eu-pef-method-2021` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | `secondary_dataset`; may be used as `background_dataset` only after methodology review, aggregation, and uncertainty disclosure |
| downstream_use | Foreground `process` datasets and downstream `lifecyclemodel` projections for processed abalone supply at the plant gate |
| allowed_use | Gate-to-gate product modelling with explicit upstream wild-harvest or aquaculture links; route-specific supply-chain studies; inventory development and reviewed aggregation |
| excluded_use | Direct comparison across shell, drained-mass, route, or storage conventions without conversion; attribution of aquaculture or harvest burdens to this gate-to-gate dataset; legal food-safety certification; use of provisional ranges as measured data |
| required_metadata | PCR id and version state; species/source; supplier geography; shell and product form; route sequence; cooking status; net/drained/covering-liquid mass basis; moisture and aw where applicable; packaging and atmosphere; storage temperature and duration; reporting period; site geography; allocation; upstream dataset references |
| required_quality_disclosure | Meter and batch coverage; calibration and laboratory methods; data gaps and proxies; reasoned estimates remaining as QA screens; mass-balance residuals; shared-utility allocation; co-product decisions; uncertainty and representativeness limitations |
| update_trigger | Change in raw-material source, species mix, preservation equipment or sequence, formulation, shelf-stability specification, packaging atmosphere or material, refrigeration system, storage duration, allocation method, or evidence that materially changes a rule or QA range |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `codex-cac-rcp-52-2003` | `standard` | Codex Alimentarius, CAC/RCP 52-2003, Code of Practice for Fish and Fishery Products, second edition, https://www.fao.org/4/i2382e/i2382e.pdf, retrieved 2026-08-07 | Process decomposition; raw-material receipt; potable water; freezing and frozen storage; salting, drying, smoking, packaging, storage, and hygiene controls |
| `codex-cxs-311-2013` | `standard` | Codex Alimentarius, CXS 311-2013, Standard for Smoked Fish, Smoke-Flavoured Fish and Smoke-Dried Fish, https://www.fao.org/input/download/standards/13292/CXS_311e.pdf, retrieved 2026-08-07 | Conditional smoking and smoke-drying route definitions; salt, moisture, water activity, packaging, storage, net-weight, and labelling benchmarks |
| `fda-seafood-hazards-controls-2022` | `official_guidance` | U.S. Food and Drug Administration, Fish and Fishery Products Hazards and Controls Guidance, June 2022 edition, https://www.fda.gov/media/80637/download, retrieved 2026-08-07 | Batch records and controls for freezing, refrigeration, drying, salt, reduced-oxygen packaging, labels, and seafood process hazards |
| `environdec-fish-and-fish-products-pcr-v1` | `standard` | EPD International, Fish and fish products PCR 1.0, https://environdec.com/pcr-library/pcr_7313bb4a-e17b-48f9-85ad-72347b9de578, retrieved 2026-08-07 | External PCR category context for frozen, dried, salted, brined, and smoked aquatic products |
| `iso-14044-2006` | `standard` | ISO 14044:2006 with Amendments 1:2017 and 2:2020, Environmental management - Life cycle assessment - Requirements and guidelines, https://www.iso.org/standard/38498.html, retrieved 2026-08-07 | Functional-unit consistency; inventory calculation; allocation hierarchy; reporting, interpretation, and review |
| `eu-pef-method-2021` | `official_guidance` | European Commission Recommendation C(2021) 9332, Annex I, Product Environmental Footprint Method, https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf, retrieved 2026-08-07 | Data-quality dimensions; representativeness, completeness, precision, multifunctionality, and transparent dataset documentation |
| `lemus-mondaca-2018-abalone-drying` | `literature` | Lemus-Mondaca et al., Convective Drying of Osmo-Treated Abalone (*Haliotis rufescens*) Slices: Diffusion, Modeling, and Quality Features, Journal of Food Quality, 2018, DOI: 10.1155/2018/6317943 | Abalone-specific evidence that drying records need pretreatment salt, time, temperature, moisture-transfer, and product-quality variables; not used as a universal operating range |
