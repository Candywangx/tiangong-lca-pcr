---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oleaginous-fruits-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other oleaginous fruits, n.e.c.

## 1. Scope and Applicability

This PCR covers one explicitly declared residual oleaginous-fruit species classified in CPC 01499 and delivered fresh at a harvest or farm hand-off. Each dataset shall declare species, cultivar where material, annual or perennial system, geography, harvest period, maturity, moisture state, grade, lot rule, packaging form, and gate. The residual category shall not aggregate different species or product states.

Products with their own named CPC leaf are excluded, as are oil extraction, pressing, refining, drying into a storable commodity, food or chemical manufacture, distribution, and retail. Perennial and annual routes may coexist, but one dataset selects one actual route. Cooling, washing, sorting, short holding, and packaging enter only when they occur before the farm hand-off.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-oleaginous-fruits-n-e-c |
| classification_refs | CPC 3.0: 01499 Other oleaginous fruits, n.e.c.; mapping relation: exact |
| covered_products | one named residual oleaginous-fruit species delivered fresh at the declared farm harvest hand-off |
| excluded_products | products with a named CPC leaf; mixed species; extracted or refined oils and manufactured products; distribution and retail |
| representative_product | fresh fruit of one named residual oleaginous species |
| production_route | managed annual or perennial production and harvest, with conditional sorting, prompt stabilization, and packing |
| market_state | fresh product with declared maturity, moisture, grade, and packaging at harvest/farm gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | accepted fresh product of one named residual oleaginous-fruit species |
| How much | 1,000 kg as-received accepted product |
| How well | species, cultivar where material, origin, production system, harvest period, maturity, moisture, grade, lot, packaging, and gate declared |
| How long or cycle | one declared harvest period, including matched establishment and replacement attribution for perennial systems |
| reference_flow_link | `reference_product_at_declared_handoff` |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Other oleaginous fruits, n.e.c. `d72a964f-f916-4c72-9f53-6a1126f1ecac` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; cultivar where material; annual or perennial system; origin; harvest period; maturity; moisture and basis; grade; lot rule; packaging; gate; included operations |

The sole reference output is `reference_product_at_declared_handoff` at `declared_reference_handoff`, a mandatory measurement of the actual accepted product at the already declared gate. Process `packing_handoff` remains conditional: omission of its physical activities does not remove this reference. Select the actual last included product handoff and record its process/output id; accept only the same species, physical state, grade, moisture basis and gate as Section 3. The prior `reference_product_output` row is the measured output of its actual operation when active, not an additional final sale. No bypass creates processing, a yield assumption, an extra burden or a change of product boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `fresh_mass_basis` | all fruit flows | Mass | kg | Report as-received fresh mass and record moisture with its basis. |
| `species_state_identity` | product and intermediate flows | Mass | kg | Preserve species, maturity, moisture, grade, and batch identity at every node. |
| `period_normalization` | managed production | activity-specific property | activity-specific unit | Normalize productive-area and cross-period inputs to the same declared harvest period and accepted mass. |
| `nutrient_basis` | nutrient inputs | nutrient mass | kg N, kg P2O5, kg K2O | Preserve product mass, formulation, assay, and elemental or oxide basis separately. |
| `batch_balance` | sorting, stabilization, and packing | Mass | kg | Reconcile inputs, accepted grades, downgraded product, rejects, and losses; do not count evaporated water as waste. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | productive field or orchard at period start; perennial routes include annualized establishment and replacement |
| starting_condition_role | production start for the declared harvest period |
| product_classification_scope | one named residual oleaginous-fruit species classified in CPC 01499 |
| recursive_input_rule | purchased same-category fresh fruit links to a separate upstream dataset at its actual state and gate and is not re-created here |
| upstream_dataset_requirement | compatible datasets for planting material, nutrients, crop protection, irrigation, energy, packaging, and external waste treatment |
| disclosure | species; system; geography; area; stand age where applicable; harvest period; yield; maturity; moisture; grade; gate; batches; packaging; rejects; shared assets; attribution |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_single_species` | all routes | Represent exactly one named residual species and one fresh state per dataset; do not aggregate heterogeneous species. |  |
| `boundary_productive_period` | production route | Include managed production, harvest, direct emissions, and applicable annualized establishment and replacement burdens for the declared harvest period. |  |
| `boundary_postharvest` | conditional route | Include only actual washing, sorting, prompt cooling or short stabilization, and packing before the declared gate. | `fao-postharvest-horticulture` |
| `boundary_extraction_exclusion` | all routes | Stop before oil extraction, pressing, refining, commodity drying, manufacture, distribution, and retail. |  |
| `boundary_direct_emissions` | managed soil | Calculate direct and relevant indirect emissions from the same nutrient and residue records using the declared method. | `ipcc-2019-managed-soils` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_production_harvest` | Managed production and harvest | `required` | always | managed annual or perennial production and harvest | productive area and declared harvest period |
| `sorting_stabilization` | Sorting and prompt stabilization | `conditional` | sorting, cleaning, cooling, short holding, or stabilization occurs before the gate | separate accepted grade, downgrade, reject, and loss states | matched incoming and outgoing batches |
| `packing_handoff` | Packing and farm-gate hand-off | `conditional` | packaging or presentation occurs before the declared gate | prepare the declared fresh product for hand-off | matched packed lot and packaging records |
| `declared_reference_handoff` | Accepted-product measurement at declared handoff | required | Every actual selected route, including bypass of conditional conditioning/packing/storage | Measurement and reconciliation only; no added physical processing | 1000 kg net accepted product at the same declared gate |

### Process: Managed production and harvest (`managed_production_harvest`)

#### Inputs

##### Product flows

###### Nursery plants for the declared oil-fruit species (`planting_material_input`)

Use this conditional card for exactly one actual material, product or waste stream in the declared process. Confirm its identity, physical state, period and destination from route records; instantiate a separate card for every other distinct stream. The template does not assert use or generation.

- Selected flow: Nursery plants for the declared oil-fruit species
- Flow property / unit: Mass / kg
- Amount rule: Measure or calculate only this one identified stream for the declared process and period, with its own unit and destination; do not combine other products or waste states.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: annualized establishment and replacement material.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_inputs`

###### Fertilizer, urea input (`agricultural_nutrient_inputs`)

Include this conditional card only when Fertilizer, urea is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, urea
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, urea used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: sum of separately retained N, P2O5 and K2O quantities; do not merge nutrient bases.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_inputs`

###### Fertilizer, monoammonium phosphate input (`agricultural_nutrient_inputs_monoammonium_phosphate`)

Include this conditional card only when Fertilizer, monoammonium phosphate is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, monoammonium phosphate
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, monoammonium phosphate used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: sum of separately retained N, P2O5 and K2O quantities; do not merge nutrient bases.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_inputs`

###### Fertilizer, potassium chloride input (`agricultural_nutrient_inputs_potassium_chloride`)

Include this conditional card only when Fertilizer, potassium chloride is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, potassium chloride
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, potassium chloride used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: sum of separately retained N, P2O5 and K2O quantities; do not merge nutrient bases.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_inputs`

###### Cattle manure, as applied input (`agricultural_nutrient_inputs_cattle_manure`)

Include this conditional card only when Cattle manure, as applied is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Cattle manure, as applied
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Cattle manure, as applied used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: sum of separately retained N, P2O5 and K2O quantities; do not merge nutrient bases.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_inputs`

###### Agricultural limestone input (`agricultural_nutrient_inputs_agricultural_limestone`)

Include this conditional card only when Agricultural limestone is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Agricultural limestone
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Agricultural limestone used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: sum of separately retained N, P2O5 and K2O quantities; do not merge nutrient bases.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_inputs`

###### Irrigation water (`irrigation_water_input`)

Record irrigation water at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Amount rule: meter or calculate applied irrigation water; rainfed systems record zero with evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: water applied to productive area in the declared period.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_inputs`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha·year
  - Basis: water applied to productive area in the declared period
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage input (`field_energy_input`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: actual energy supplied to productive and harvest operations.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_inputs`

###### Diesel fuel input (`field_energy_input_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: actual energy supplied to productive and harvest operations.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_production_inputs`

Required crop-protection records: before completing the foreground package, enumerate every actually applied formulated product separately, retaining trade name, active ingredient, salt or chemical form, concentration, density where needed, application quantity, date and treated area. Select one physically specific product identity per exchange. Derive active-substance releases separately by substance and receiving compartment. Missing formulation identity is a completeness gap; do not replace it with a generic pesticide, invented example, or assumed zero.

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Harvested fresh oleaginous fruit (`harvested_fruit_output`)

Record harvested fresh oleaginous fruit at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Other oleaginous fruits, n.e.c.
- Flow property / unit: Mass / kg
- Amount rule: measure accepted fresh harvest mass with species, maturity, moisture, grade and gate
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: fresh accepted harvest from the declared productive area.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 50000
  - Unit: kg/ha·harvest period
  - Basis: fresh accepted harvest from the declared productive area
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


Verify this intermediate state or co-product grade independently; the reference-output UUID is not evidence for this row.

##### Waste flows

###### Field residues and harvest rejects (`field_residue_output`)

Record field residues and harvest rejects at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Prunings, incidental biomass, fallen fruit and harvest rejects by fate
- Flow property / unit: Mass / kg
- Amount rule: measure or reconcile each residue class and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: all non-product biomass and rejects; no accepted fruit.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5000
  - Unit: kg/1,000 kg accepted fruit
  - Basis: all non-product biomass and rejects; no accepted fruit
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows

### Process: Sorting and prompt stabilization (`sorting_stabilization`)

#### Inputs

##### Product flows

###### Incoming fresh fruit batch (`incoming_fruit_input`)

Record incoming fresh fruit batch at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Harvested fresh residual oleaginous fruit with declared species and state
- Flow property / unit: Mass / kg
- Amount rule: measure incoming batch mass, maturity, moisture, temperature and grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: matched batch before sorting or stabilization.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 2
  - Unit: kg incoming/kg accepted output
  - Basis: matched batch before sorting or stabilization
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Cleaning and conditioning water (`conditioning_water_input`)

Record cleaning and conditioning water at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Process water supply
- Flow property / unit: Volume / m3
- Amount rule: meter water used for washing or conditioning; dry routes record zero
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: zero when water-using route is inactive.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/1,000 kg accepted output
  - Basis: zero when water-using route is inactive
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage (`conditioning_energy_input`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: route-conditional energy before farm-gate hand-off.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning_batch`

###### Diesel fuel (`conditioning_energy_input_diesel`)

Include this exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: route-conditional energy before farm-gate hand-off.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured Diesel fuel supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_conditioning_batch`

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Sorted fresh oleaginous fruit (`conditioned_fruit_output`)

Record sorted fresh oleaginous fruit at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Other oleaginous fruits, n.e.c.
- Flow property / unit: Mass / kg
- Amount rule: measure accepted fresh output by grade; no extraction, drying-to-commodity, or manufacture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: matched fresh batch after sorting and prompt stabilization.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.5
  - Upper: 1
  - Unit: kg accepted/kg incoming fresh fruit
  - Basis: matched fresh batch after sorting and prompt stabilization
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


Verify this intermediate state or co-product grade independently; the reference-output UUID is not evidence for this row.

##### Waste flows

###### Sorting rejects and removed material (`sorting_reject_output`)

Record sorting rejects and removed material at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Spoiled fruit, foreign matter and removed biological material by fate
- Flow property / unit: Mass / kg
- Amount rule: measure each reject class and destination; exclude evaporated water
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: matched sorting mass balance.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kg/1,000 kg incoming fruit
  - Basis: matched sorting mass balance
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning wastewater (`conditioning_wastewater_output`)

Record conditioning wastewater at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Wastewater from washing or wet conditioning
- Flow property / unit: Volume / m3
- Amount rule: meter or calculate discharge and record destination and treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: zero for dry routes.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning_batch`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3/1,000 kg accepted output
  - Basis: zero for dry routes
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows


### Process: Packing and farm-gate hand-off (`packing_handoff`)

#### Inputs

##### Product flows

###### Accepted fresh fruit for packing (`packing_fruit_input`)

Record accepted fresh fruit for packing at this node while preserving traceable species, state, batch, and destination evidence.

- Selected flow: Accepted declared residual oleaginous fruit
- Flow property / unit: Mass / kg
- Amount rule: measure matched accepted mass entering packing
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: allows only documented packing loss.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_lot`
- Range: Foreground QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.1
  - Unit: kg/kg packed product
  - Basis: allows only documented packing loss
  - Basis kind: 过程输出 (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Corrugated cardboard box input (`packaging_input`)

Include this conditional card only when Corrugated cardboard box is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Corrugated cardboard box
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Corrugated cardboard box used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: all one-way packaging plus attributed reusable-packaging loss.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_lot`

###### Polyethylene packaging film input (`packaging_input_plastic_film`)

Include this conditional card only when Polyethylene packaging film is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Polyethylene packaging film used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: all one-way packaging plus attributed reusable-packaging loss.

- Normalization basis: per declared reference flow
- Basis kind: 过程输出 (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_lot`

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Fresh product at declared farm gate (`reference_product_output`)

Record the measured accepted output of `packing_handoff` only when that operation actually occurs. Preserve species, condition, grade, moisture, lot and its real outgoing gate. This stable row id identifies an actual route output; the sole final reference is reference_product_at_declared_handoff. Retain raw output and link the selected final lot without counting it as another final product. Any UUID shown is usable only for its independently confirmed physical state/gate; an incompatible upstream/intermediate state needs a separately verified or explicit unresolved identity. Preserve the original stage measurement and collection records.

- Selected flow: Other oleaginous fruits, n.e.c. `d72a964f-f916-4c72-9f53-6a1126f1ecac`
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: Weigh the accepted net lot output of the actual operation under `cp_packing_lot`, retain gross/tare, rejects, stocks, moisture and matched onward lot records, and reconcile before final normalization.

- Amount rule: measured accepted net output from the actual operation under `cp_packing_lot`; retain raw lot quantity and actual stage throughput, then normalize once under the final-handoff normalization in Section 8; never prescribe a fixed intermediate yield
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: measured actual operation/lot output and throughput, retained before one final-reference normalization.

- Normalization basis: per declared reference flow
- Basis kind: 参考流 (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_packing_lot`

##### Waste flows

##### Elementary flows

### Process: Accepted-product measurement at declared handoff (`declared_reference_handoff`)
This measurement adds no processing, waste generation or emission. Preserve all real upstream operations and losses; bypass only operations demonstrated absent. Select one actual terminal product lot and cancel its paired internal transfer once when aggregating the system. Do not sum inactive routes, co-products or both source and handoff as accepted final output.

#### Inputs
##### Product flows
###### Accepted actual-route product at the same handoff (`actual_route_product_for_handoff`)

Measure only accepted product at the existing declared gate. Match one actual terminal source record; internal paired transfer and this reference represent the same event, not two sales. Verify identity for the actual species/state/gate independently; an identifier confirmed only for fresh farm-gate goods cannot represent an incompatible conditioned or independent pack-house state. Missing identity remains explicit and is not resolved by copying an adjacent output UUID.
- Selected flow: Other oleaginous fruits, n.e.c. `d72a964f-f916-4c72-9f53-6a1126f1ecac`
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net mass at this same handoff, normalized as R/R * 1000 kg; paired input equals accepted output, with raw R retained
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_reference_handoff`

##### Waste flows
##### Elementary flows
#### Outputs
##### Product flows
###### Reference product at declared handoff (`reference_product_at_declared_handoff`)

Measure only accepted product at the existing declared gate. Match one actual terminal source record; internal paired transfer and this reference represent the same event, not two sales. Verify identity for the actual species/state/gate independently; an identifier confirmed only for fresh farm-gate goods cannot represent an incompatible conditioned or independent pack-house state. Missing identity remains explicit and is not resolved by copying an adjacent output UUID.
- Selected flow: Other oleaginous fruits, n.e.c. `d72a964f-f916-4c72-9f53-6a1126f1ecac`
- Flow property / unit: Mass / kg
- Amount rule: 1000 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_reference_handoff`

##### Waste flows
Actual waste remains at the operation that generates it; no duplicate here.
##### Elementary flows
Actual releases remain at their responsible physical operation; no duplicate here.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_period` | perennial production | Attribute establishment, immature years, and replacement burdens across an evidenced productive life to the declared harvest period; do not repeat them in annual records. |  |
| `allocation_grade` | sorted outputs | Only the accepted declared grade enters the reference quantity. Downgraded material sold for an independently intended use is a separate product output with measured mass, destination and its share of inseparable upstream burdens after subdivision. Rejected material without a product function is waste; keep its physical mass, fate and management burdens. |  |
| `allocation_residue` | residues and rejects | Waste receives no co-product share. Retain all production burdens associated with generating discarded material and its attributable collection/treatment burdens with the producing saleable route; absence of a product function never erases these burdens. Only an independently intended output with evidenced identity, recipient, function, quantity and hand-off may enter the complete product allocation denominator. Revenue or a possible substitution use alone does not establish avoided-production credit. |  |
| `allocation_shared_assets` | shared infrastructure | Attribute irrigation, equipment, cooling, and packing assets once using recorded area, machine time, mass, or another causal driver. |  |
| `allocation_rework` | rework and returns | Attribute the rework loop to its producing node and do not count returned material again as new input. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Inventory completeness: conditional named cards are examples of individual exchanges, not an exhaustive recipe or a requirement to use those products. Before completing a foreground package, enumerate every actual planting stock, nutrient, crop-protection formulation, asset material, operating service, carrier, packaging material, waste stream and applicable elementary substance separately, using its physical identity, state, native property/unit, origin or receiving compartment, and measured or method-calculated quantity. Missing identity or quantity remains a completeness gap, never an assumed zero. Preserve the actual lot and phase basis; do not sum intermediate transfers as additional final output or duplicate burdens included in purchased services.

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_production_inputs` | `managed_production_harvest` | annual inputs | invoice, operation, and meter records | species; area; product; quantity; nutrient assay; energy carrier; water; date | reconcile purchasing, storage, and field logs to declared area; Raw aggregation and attribution: sum by species and harvest period; normalize to accepted fresh fruit | native units plus kg, m3, MJ | each event and period total | complete declared harvest period | every included field or orchard | per declared reference flow | invoices, meters, operation logs, calibration, inventory reconciliation |
| `cp_harvest_records` | `managed_production_harvest` | harvest and residues | batch weights and field logs | batch; mass; species; maturity; moisture; grade; reject class; destination | calibrated weighing reconciled with area and container records; Raw aggregation and attribution: sum batches while retaining species and state | kg | every harvest batch | complete harvest window | all included harvest points | per declared reference flow | weigh tickets, scale calibration, batch and destination records |
| `cp_emission_calculation` | `managed_production_harvest` | direct emissions | calculation record | N inputs; residues; soil and climate; factor; receiving compartment | apply declared method version to the same input records; Raw aggregation and attribution: calculate each substance and compartment separately | kg substance | each harvest period | same period as production inputs | all included productive area | per declared reference flow | method version, input trace, factor source, reproducible calculation |
| `cp_conditioning_batch` | `sorting_stabilization` | sorting and stabilization | matched batch record | input and output mass; grade; temperature; moisture; water; energy; rejects; wastewater; time | batch weighing, metering, and mass balance; Raw aggregation and attribution: match incoming and outgoing batch; keep wet and dry routes separate | kg, m3, kWh, MJ | each batch | all included conditioning batches | declared farm or primary site | per declared reference flow | scale and meter calibration, batch sheet, signed mass balance |
| `cp_packing_lot` | `packing_handoff` | packing and hand-off | packing lot and delivery records | fruit mass; material; accessories; reuse count; scrap; grade; gate | reconcile issues, weights, and delivery ticket by lot; Raw aggregation and attribution: aggregate by material and lot; attribute reusable packaging by actual loss | kg or item | each packing lot | all included hand-off lots | every included packing point | per declared reference flow | bill of materials, weigh ticket, delivery ticket, inventory reconciliation |
| `cp_phase1_environment_coverage` | managed_production_harvest | managed environmental coverage by actual node | site/activity/method ledger | site and actual managed nodes; area; dated occupation intervals; co-users; establishment/immature history; actual prior/current land classes and transformation dates/areas; carbon-method coverage; upstream land coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all nodes | node amount × 1000 / accepted fresh mass at declared gate | node amount; accepted fresh mass | amount per 1,000 kg reference product |  |
| `calc_perennial_attribution` | perennial route | establishment or replacement total × declared period share | establishment; replacement; productive life; attribution method | amount attributed to declared harvest period |  |
| `calc_batch_balance` | sorting and packing | incoming mass = accepted + downgraded + rejected + documented loss | matched inputs and outputs | balance difference and flows |  |
| `calc_soil_emissions` | soil emissions | declared method applied to source-specific nutrients and residues | nutrients; residues; factors; compartments | mass of each specific emission | `ipcc-2019-managed-soils` |
| `packing_waste_output_specific_exchanges` | `packing_handoff` | Enumerate rejected fruit and each actual packaging-waste material as separate actual streams. Measure each physical stream with its own composition, state, native unit, lot/period and destination; instantiate one atomic card per specific stream and boundary role. Distinguish waste transfer, purchased treatment and substance-specific discharge; do not treat a disposal service as the wastewater itself or duplicate treatment burdens. Keep stock, rework, marketed downgrade and discarded waste separate, and count physical mixtures once without also counting their components as additional exits. Retain the linked protocol and actual process attribution. Reconstruct each attributable raw numerator on its recorded stage basis, then normalize once to the matched accepted reference output. Missing identity, quantity, unit or destination blocks dataset completeness; absence requires evidence, not an assumed zero. | `cp_packing_lot` | Separate atomic exchanges; completeness required |  |
| `soil_nitrogen_emissions_identity_and_fate` | `managed_production_harvest` | Identify every actual emitted substance and receiving compartment separately. Quantify each supported pathway with its own activity, method, chemical-species basis and native unit; distinguish elemental N/P ledgers from final compounds. Soil nutrient retention or a mass-balance residual is not automatically an emission. This replaces an ambiguous aggregate exchange, not the collection obligation. Before dataset completeness, create one concrete card per actual exchange, verify a compatible UUID or retain an explicit unresolved identity, and record quantity, unit, stage/period, destination and evidence. Reconstruct the raw attributable numerator from the linked protocol and normalize once to the matched accepted reference output. Missing data is not zero; no range of the former aggregate is an individual-stream default. | `cp_emission_calculation` | Identity-specific exchanges and reconciled activity records |  |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_land_coverage` | actual managed-production nodes | For each actual owned managed-production site, collect the occupied area and dated occupation intervals, including attributable establishment/immature and production periods. Occupation is area multiplied by actual duration, converted explicitly to the selected area-time unit (1 ha = 10,000 m2; time in years); hectares per crop-cycle alone are not an area-time result without duration. Partition or take the union of overlapping establishment/management intervals so the same area-time is counted once, with shares across actual co-users summing to one. Record evidenced land transformation separately by actual from/to land class, event area and date under the declared land-use method; transformation has area units and is not added to occupation. Planting, continued occupation or missing prior-land data do not establish a transformation or zero transformation. Preserve actual historical-event attribution and carbon-stock/emission method coverage where applicable; no invented land conversion or generic carbon credit. Instantiate separate compatible elementary identities with verified UUIDs or explicit unresolved identities; attribute once and normalize to the matched final reference. Purchased completed biological inputs inherit compatible upstream land coverage once instead of duplicating it locally. Missing applicable land identity, area, duration or prior-state evidence remains a completeness gap; documented no transformation is a valid absence. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | all product flows | Species, production system, fresh state, maturity, moisture, grade, lot, and gate are complete and consistent. | batch and delivery records |
| `dq_completeness` | all nodes | Mass, energy, water, nutrients, packaging, rejects, and direct emissions cover the declared period and every included site. | completeness reconciliation and mass balance |
| `dq_temporal` | all nodes | Production inputs, harvest, and conditioning batches come from the same or explicitly aligned harvest period. | dated records and attribution schedule |
| `dq_route` | conditional nodes | Inactive treatment is evidenced and recorded as zero; oil extraction or manufacture is absent from the fresh-product boundary. | route map, equipment, and batch records |

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_declared_reference_handoff` | `declared_reference_handoff` | actual accepted terminal product and paired transfer | scale/lot/acceptance records | species; state; grade; moisture/basis; gate; actual_terminal_process_id; actual_terminal_output_row_id; lot/transfer_id; gross/tare/net mass R; raw stage totals/throughputs; stocks, rejects and destinations | Weigh accepted net R at the existing gate; match exactly one actual terminal source of the same lot/state and reconcile all earlier losses and stocks. If conditional preparation is absent use the last actual included eligible product output, without inventing that preparation. Preserve original activity records and all required qualifiers. | kg and native activity units | each accepted lot | matched production and handoff period | existing declared producer/primary gate | per declared reference flow | calibrated weighing, acceptance/grade records, lot chain, activation/bypass evidence and closed balances |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_final_handoff_normalization` | all foreground quantities and actual route outputs | Let R be positive measured accepted final mass in kg for one matched species/state/grade/gate/period, excluding tare, rejects, co-products and held stock. Physical ledger = raw physical quantity/R * 1000 kg, without burden-allocation scaling. Attributable inventory contribution = attributable raw quantity/R * 1000 kg, preserving native numerator units and the existing output/period attribution. A local intensity q_i=Q_i/O_i first reconstructs Q_i=q_i*actual linked O_i; do not divide by R again after final normalization. Both handoff sides are the same measured event R/R*1000 kg, not another physical yield. Include only actual active operations; record and substantiate bypass. Missing/nonpositive R or an unlinked terminal record blocks a normalized complete result, not zero. Preserve original stage data and cancel paired internal transfers once. | cp_declared_reference_handoff; original linked collection protocols | native quantities per declared final reference | `declared-handoff-measurement-definition` |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | dataset | Declare one named residual species, one production system, one fresh state, grade, and farm/harvest gate. |  |
| `validate_reference` | reference product | Reference output equals exactly 1,000 kg accepted fresh product with all required qualifiers. |  |
| `validate_boundary` | all routes | Fail when oil extraction, refining, manufacture, distribution, or retail is included. |  |
| `validate_period` | perennial route | Establishment, immature period, replacement, and shared assets have one auditable cross-period attribution. |  |
| `validate_balance` | sorting and packing | Fail when matched-batch mass balance exceeds declared measurement uncertainty. |  |
| `validate_rework` | rejects and rework | Downgrade, rework, recovery, and disposal destinations are mutually exclusive and not duplicated as accepted output. |  |
| `validate_flow_binding` | all cards | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |
| `validate_ranges` | all cards | Every lower bound is no greater than its upper bound; inactive conditional routes equal zero; foreground records supersede provisional screens. |  |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | selected actual route and all conditional bypass states | Check both presence and absence of optional conditioning/packing/storage against actual records: exactly one required handoff reference persists, its source product/state/gate matches Section 3, active physical rows retain measured throughput, and inactive physical activities add no exchange. Require raw accepted mass, upstream closure, unique transfer pairing and single final normalization; an unexplained state or missing identity is not an assumed valid branch. | `declared-handoff-measurement-definition` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground unit-process or aggregated farm-gate dataset for fresh product of one named residual oleaginous-fruit species |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | LCA with declared species, system, state, grade, harvest period, and gate |
| excluded_use | undisclosed multi-species average; extracted or refined oil; manufactured product; substitute for another named CPC leaf |
| required_metadata | species; system; geography; harvest period; area; yield; maturity; moisture; grade; lot; packaging; gate; route; attribution |
| required_quality_disclosure | foreground coverage; measurement methods; range screens; missing values; cross-period attribution; mass balance; unresolved flow identities |
| update_trigger | material change in species, system, yield, route, gate, grade, packaging, period attribution, or key evidence |

## 11. Data Sources

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `fao-postharvest-horticulture` | official_guidance | FAO, Prevention of post-harvest food losses: fruits, vegetables and root crops, https://www.fao.org/4/t0073e/t0073e00.htm | principles for fresh horticultural handling, grading, packing, and loss control |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement to the 2006 IPCC Guidelines, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | managed-soil nitrogen-emission method |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | This PCR Sections 3, 6 and 8: matched accepted handoff mass divided by itself times the declared reference amount; physical transfer pairing and dimensional normalization identity, not an empirical yield or new physical operation. | single accepted reference and measured route-throughput linkage |
