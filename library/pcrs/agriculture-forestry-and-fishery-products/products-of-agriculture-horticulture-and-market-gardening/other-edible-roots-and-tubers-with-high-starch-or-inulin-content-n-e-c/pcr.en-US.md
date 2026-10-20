---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-edible-roots-and-tubers-with-high-starch-or-inulin-content-n-e-c
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Other edible roots and tubers with high starch or inulin content, n.e.c.

## 1. Scope and Applicability

This PCR covers one explicitly named edible root or tuber species with reliable evidence of a high-starch or high-inulin storage organ that belongs in residual CPC 01599. A dataset may stop at fresh harvest hand-off or include actual curing, storage, sorting and packing before a declared gate.

Each dataset shall declare species, cultivar where material, starch/inulin basis, production system, lot or aggregation rule, fresh/cured/stored state, moisture basis and terminal gate. It shall not aggregate different species or states. Exclusions are cassava, sweet potatoes, yams, taro, yautia, potatoes and all separately named CPC roots/tubers; chicory roots and roots classified elsewhere; standing crops measured by area or area-time; propagules sold for planting; powders, starch, inulin, extracts, dried preparations and manufactured foods.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.other-edible-roots-and-tubers-with-high-starch-or-inulin-content-n-e-c |
| classification_refs | CPC 3.0: 01599 Other edible roots and tubers with high starch or inulin content, n.e.c.; mapping relation: narrower |
| covered_products | one named residual edible root/tuber species with evidence of a high-starch or high-inulin storage organ |
| excluded_products | named CPC roots/tubers; standing crops; propagules; powders; starch/inulin extracts; dried preparations; manufactured foods; mixed-species lots |
| representative_product | one residual starch- or inulin-rich edible root/tuber in the declared fresh, cured or stored state |
| production_route | planting and managed production, lifting, gentle handling, sorting, and conditional curing, storage and packing |
| market_state | fresh at harvest hand-off or cured/stored and accepted at the declared primary-conditioning gate |

Routes may coexist in the category, but one dataset selects one actual route and terminal state. Technologies with materially different inputs, losses or gates remain separate.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | one declared residual edible starch- or inulin-rich root/tuber species at the selected terminal gate |
| How much | 1,000 kg as-received accepted product |
| How well | species, cultivar where material, starch/inulin eligibility evidence, origin, production system, harvest period, lot, skin/soil condition, fresh/cured/stored state, moisture basis, grade, package form and gate declared |
| How long or cycle | one crop cycle plus only declared post-harvest batches and storage before the gate |
| reference_flow_link | `reference_product_at_declared_handoff` |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Accepted harvested whole edible root or tuber of the declared single high-starch/inulin species (UUID unresolved) |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species; cultivar where material; starch/inulin evidence; origin; production system; crop cycle; lot; state; moisture basis; grade; package; gate; included operations |

Do not bind a standing chicory crop expressed in area-time or manufactured Cordyceps powder. Resolve a compatible harvested mass flow before active status or process publication.

The sole reference output is `reference_product_at_declared_handoff` at `declared_reference_handoff`, a mandatory measurement of the actual accepted product at the already declared gate. Process `sorting_packing` remains conditional: omission of its physical activities does not remove this reference. Select the actual last included product handoff and record its process/output id; accept only the same species, physical state, grade, moisture basis and gate as Section 3. The prior `reference_product_output` row is the measured output of its actual operation when active, not an additional final sale. No bypass creates processing, a yield assumption, an extra burden or a change of product boundary.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | terminal accepted product | Mass | kg | Report as-received mass, moisture and state; retain dry-matter conversion separately. |
| `species_eligibility` | reference identity | composition/classification evidence | descriptive record | Preserve evidence that the edible organ is starch/inulin-rich and not separately named in CPC. |
| `area_to_reference_conversion` | crop production | activity-specific property | activity-specific unit | Normalize crop-cycle field totals to matched accepted terminal mass. |
| `nutrient_content_basis` | nutrients | nutrient mass | kg N, kg P2O5, kg K2O | Preserve product quantity, formulation, assay and elemental/oxide basis. |
| `batch_mass_balance` | lifting, storage, sorting, packing | Mass | kg | Reconcile accepted, downgraded, rejected, soil/foreign matter, decay and moisture loss; evaporated water is not solid waste. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared production area at planting; planting material and attributable shared infrastructure cross the boundary |
| starting_condition_role | start of one declared crop cycle |
| product_classification_scope | one named residual edible starch/inulin-rich root/tuber species in CPC 01599 |
| recursive_input_rule | same-category product from another operator links to its upstream dataset and is not recreated |
| upstream_dataset_requirement | compatible planting, nutrient, crop-protection, irrigation, energy, packaging and waste-treatment datasets |
| disclosure | species and eligibility, geography, production system, cycle, area, yield, state, moisture, gate, route activation, storage duration, lots, rejects, packaging and shared assets |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_residual_identity` | all routes | Include exactly one named edible residual species and document starch/inulin and CPC eligibility. |  |
| `boundary_crop_cycle` | production | Include planting, soil preparation, nutrients, crop protection, irrigation, energy, lifting and direct emissions for the declared crop. |  |
| `boundary_postharvest` | conditioned route | Include only actual curing, cleaning, storage, sorting and packing before gate; preserve matched lots and moisture states. | `fao-root-tuber-postharvest` `fao-root-tuber-storage` |
| `boundary_downstream_exclusion` | all routes | Stop before milling, manufacturing slices, drying into preparations, starch/inulin extraction, food manufacture, distribution and retail. |  |
| `boundary_direct_emissions` | soil and on-site combustion | Calculate from the same nutrient, residue and fuel records used in inventory. | `ipcc-2019-managed-soils` `emep-eea-2023-guidebook` `ipcc-2006-stationary-combustion` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_production_lifting` | Managed production, lifting and harvest hand-off | `required` | always | produce and lift the declared edible storage organ | cultivated area and one crop cycle |
| `curing_storage` | Curing and storage | `conditional` | curing or storage occurs before the declared gate | stabilize and hold matched lots | incoming/outgoing lot mass and storage time |
| `sorting_packing` | Sorting, grading and packing | `conditional` | sorting, grading or packing occurs before the declared gate | prepare accepted terminal product | matched incoming, accepted and rejected masses |
| `declared_reference_handoff` | Accepted-product measurement at declared handoff | required | Every actual selected route, including bypass of conditional conditioning/packing/storage | Measurement and reconciliation only; no added physical processing | 1000 kg net accepted product at the same declared gate |

### Process: Managed production, lifting and harvest hand-off (`managed_production_lifting`)

#### Inputs

##### Product flows

###### Species-specific planting material (`planting_material_input`)

Collect and reconcile species-specific planting material, retaining the identity, state, origin and destination required by this card.

- Selected flow: Propagules or planting stock for the declared species
- Flow property / unit: Mass or number / kg or item
- Amount rule: measure purchased and saved material separately
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: fresh planting material for one crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 5000
  - Unit: kg/ha·crop
  - Basis: fresh planting material for one crop cycle
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`

###### Fertilizer, urea input (`agricultural_nutrient_inputs`)

Include this conditional card only when Fertilizer, urea is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, urea
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, urea used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: declared nutrient quantities, not fertilizer product mass.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`

###### Fertilizer, monoammonium phosphate input (`agricultural_nutrient_inputs_monoammonium_phosphate`)

Include this conditional card only when Fertilizer, monoammonium phosphate is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, monoammonium phosphate
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, monoammonium phosphate used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: declared nutrient quantities, not fertilizer product mass.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`

###### Fertilizer, potassium chloride input (`agricultural_nutrient_inputs_potassium_chloride`)

Include this conditional card only when Fertilizer, potassium chloride is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, potassium chloride
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, potassium chloride used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: declared nutrient quantities, not fertilizer product mass.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`

###### Cattle manure, as applied input (`agricultural_nutrient_inputs_cattle_manure`)

Include this conditional card only when Cattle manure, as applied is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Cattle manure, as applied
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Cattle manure, as applied used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: declared nutrient quantities, not fertilizer product mass.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`

###### Agricultural limestone input (`agricultural_nutrient_inputs_agricultural_limestone`)

Include this conditional card only when Agricultural limestone is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Agricultural limestone
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Agricultural limestone used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: declared nutrient quantities, not fertilizer product mass.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`

###### Irrigation water (`irrigation_water_input`)

Collect and reconcile irrigation water, retaining the identity, state, origin and destination required by this card.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Amount rule: meter or calculate applied water; rainfed systems record zero with evidence
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: applied irrigation excluding effective rainfall.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 20000
  - Unit: m3/ha·crop
  - Basis: applied irrigation excluding effective rainfall
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`

###### Electricity, medium voltage (`field_energy_input`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: actual carrier remains explicit.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`

###### Diesel fuel (`field_energy_input_diesel`)

Include this exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: actual carrier remains explicit.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured Diesel fuel supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_crop_inputs`

Required crop-protection records: before completing the foreground package, enumerate every actually applied formulated product separately, retaining trade name, active ingredient, salt or chemical form, concentration, density where needed, application quantity, date and treated area. Select one physically specific product identity per exchange. Derive active-substance releases separately by substance and receiving compartment. Missing formulation identity is a completeness gap; do not replace it with a generic pesticide, invented example, or assumed zero.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested residual root or tuber (`harvested_root_tuber_output`)

Collect and reconcile harvested residual root or tuber, retaining the identity, state, origin and destination required by this card.

- Selected flow: Unresolved harvested root/tuber of the declared species
- Flow property / unit: Mass / kg
- Amount rule: measure accepted lifted mass with soil, damage, state and moisture recorded
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: as-harvested accepted storage organs.

- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_lots`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 500
  - Upper: 100000
  - Unit: kg/ha·crop
  - Basis: as-harvested accepted storage organs
  - Basis kind: `crop_cycle`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Field residues, damaged organs and adhered soil (`field_residue_output`)

Collect and reconcile field residues, damaged organs and adhered soil, retaining the identity, state, origin and destination required by this card.

- Selected flow: Field residues and harvest rejects by material and destination
- Flow property / unit: Mass / kg
- Amount rule: measure crop biomass, damaged organs and returned soil separately
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: all classes retained separately by fate.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_lots`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 3000
  - Unit: kg/1,000 kg accepted harvest
  - Basis: all classes retained separately by fate
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Dinitrogen monoxide, to air (`soil_n_emissions_output`)

Record Dinitrogen monoxide, to air as one substance and receiving-medium exchange only when measurement or the selected applicable method establishes this pathway. Retain the actual receiving compartment and verify the precise flow identity. Other substances require separate exchanges; this card does not imply a default release.
Raw activity or stage basis: each substance and compartment remains separate.

- Selected flow: Dinitrogen monoxide, to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Measured or method-calculated mass of Dinitrogen monoxide, to air, retaining activity data, factors, substance basis and receiving compartment; normalize once to the declared reference output. If reported as N2O-N, convert to N2O once using 44/28.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`

###### Ammonia, to air (`soil_n_emissions_output_nh3`)

Record Ammonia, to air as one substance and receiving-medium exchange only when measurement or the selected applicable method establishes this pathway. Retain the actual receiving compartment and verify the precise flow identity. Other substances require separate exchanges; this card does not imply a default release.
Raw activity or stage basis: each substance and compartment remains separate.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg NH3
- Amount rule: Measured or method-calculated mass of Ammonia, to air, retaining activity data, factors, substance basis and receiving compartment; normalize once to the declared reference output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`

###### Nitrogen monoxide, to air (`soil_n_emissions_output_no`)

Record Nitrogen monoxide, to air as one substance and receiving-medium exchange only when measurement or the selected applicable method establishes this pathway. Retain the actual receiving compartment and verify the precise flow identity. Other substances require separate exchanges; this card does not imply a default release.
Raw activity or stage basis: each substance and compartment remains separate.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg NO
- Amount rule: Measured or method-calculated mass of Nitrogen monoxide, to air, retaining activity data, factors, substance basis and receiving compartment; normalize once to the declared reference output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`

###### Nitrate, to water (`soil_n_emissions_output_nitrate`)

Record Nitrate, to water as one substance and receiving-medium exchange only when measurement or the selected applicable method establishes this pathway. Retain the actual receiving compartment and verify the precise flow identity. Other substances require separate exchanges; this card does not imply a default release.
Raw activity or stage basis: each substance and compartment remains separate.

- Selected flow: Nitrate, to water
- Flow property / unit: Mass / kg NO3-
- Amount rule: Measured or method-calculated mass of Nitrate, to water, retaining activity data, factors, substance basis and receiving compartment; normalize once to the declared reference output. If reported as nitrate-N, convert to NO3- once using 62/14.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`

###### Carbon dioxide, fossil, to air (`soil_n_emissions_output_co2_fossil`)

Record Carbon dioxide, fossil, to air as one substance and receiving-medium exchange only when measurement or the selected applicable method establishes this pathway. Retain the actual receiving compartment and verify the precise flow identity. Other substances require separate exchanges; this card does not imply a default release.
Raw activity or stage basis: each substance and compartment remains separate.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg CO2
- Amount rule: Measured or method-calculated mass of Carbon dioxide, fossil, to air, retaining activity data, factors, substance basis and receiving compartment; normalize once to the declared reference output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`

### Process: Curing and storage (`curing_storage`)

#### Inputs

##### Product flows

###### Harvested product entering curing or storage (`storage_product_input`)

Collect and reconcile harvested product entering curing or storage, retaining the identity, state, origin and destination required by this card.

- Selected flow: Unresolved harvested root/tuber of the declared species
- Flow property / unit: Mass / kg
- Amount rule: measure incoming lot with state, damage and moisture
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: matched lot at recorded moisture states.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_lots`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 2
  - Unit: kg incoming/kg accepted output
  - Basis: matched lot at recorded moisture states
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Electricity, medium voltage (`storage_energy_input`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: actual carrier and duration declared.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_lots`

###### Diesel fuel (`storage_energy_input_diesel`)

Include this exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: actual carrier and duration declared.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured Diesel fuel supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_lots`

###### Curing or cleaning water (`storage_water_input`)

Collect and reconcile curing or cleaning water, retaining the identity, state, origin and destination required by this card.

- Selected flow: Process water supply
- Flow property / unit: Volume / m3
- Amount rule: meter supplied water; dry routes record zero
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: zero where water is not used.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_lots`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 10
  - Unit: m3/1,000 kg accepted output
  - Basis: zero where water is not used
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cured or stored accepted product (`stored_root_tuber_output`)

Collect and reconcile cured or stored accepted product, retaining the identity, state, origin and destination required by this card.

- Selected flow: Unresolved cured or stored root/tuber of the declared species
- Flow property / unit: Mass / kg
- Amount rule: measure accepted output with duration, state and moisture
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: matched lot with moisture and interval declared.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_lots`
- Sources: `fao-root-tuber-postharvest` `fao-root-tuber-storage`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0.5
  - Upper: 1
  - Unit: kg accepted/kg incoming
  - Basis: matched lot with moisture and interval declared
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Storage losses and rejects (`storage_loss_output`)

Collect and reconcile storage losses and rejects, retaining the identity, state, origin and destination required by this card.

- Selected flow: Decayed, sprouted, damaged or rejected product by fate
- Flow property / unit: Mass / kg
- Amount rule: measure removals and reconcile opening and closing stock
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: physical rejects; moisture loss separate.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_lots`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 500
  - Unit: kg/1,000 kg incoming
  - Basis: physical rejects; moisture loss separate
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

###### Fossil carbon dioxide from on-site energy (`storage_fossil_co2_output`)

Collect and reconcile fossil carbon dioxide from on-site energy, retaining the identity, state, origin and destination required by this card.

- Selected flow: Fossil carbon dioxide to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg CO2
- Amount rule: calculate from actual fossil fuel; zero without on-site combustion
- Value mode: `calculated_value`
- Specificity: `technology_specific`
Raw activity or stage basis: only on-site fossil combustion.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_storage_lots`
- Sources: `ipcc-2006-stationary-combustion`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 1000
  - Unit: kg CO2/1,000 kg accepted output
  - Basis: only on-site fossil combustion
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

### Process: Sorting, grading and packing (`sorting_packing`)

#### Inputs

##### Product flows

###### Product lot entering sorting (`sorting_product_input`)

Collect and reconcile product lot entering sorting, retaining the identity, state, origin and destination required by this card.

- Selected flow: Declared fresh, cured or stored root/tuber lot
- Flow property / unit: Mass / kg
- Amount rule: measure incoming mass with state, moisture and source lot
- Value mode: `foreground_record`
- Specificity: `product_specific`
Raw activity or stage basis: matched sorting run.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sorting_runs`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 2
  - Unit: kg incoming/kg accepted terminal product
  - Basis: matched sorting run
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

###### Electricity, medium voltage input (`packing_energy_input`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: actual energy carriers retained.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sorting_runs`

###### Diesel fuel input (`packing_energy_input_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: actual energy carriers retained.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sorting_runs`

###### Paperboard packaging (`packaging_input`)

Record Paperboard packaging only when this material crosses the declared process boundary. Retain lot, physical state, composition where relevant, and actual destination. Record other materials independently rather than treating this card as a selector or material bundle. This is a conditional material example, not a packaging requirement. Measure reuse and replacement and allocate the material once across its documented uses.
Raw activity or stage basis: net attributable packaging after reuse.

- Selected flow: Paperboard packaging
- Flow property / unit: Mass / kg
- Amount rule: Measured net quantity of Paperboard packaging, reconciled to the linked lot and process balance, then normalized once to the declared reference output; retain moisture and any density conversion evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sorting_runs`

###### Polyethylene packaging film (`packaging_input_film`)

Record Polyethylene packaging film only when this material crosses the declared process boundary. Retain lot, physical state, composition where relevant, and actual destination. Record other materials independently rather than treating this card as a selector or material bundle. This is a conditional material example, not a packaging requirement. Measure reuse and replacement and allocate the material once across its documented uses.
Raw activity or stage basis: net attributable packaging after reuse.

- Selected flow: Polyethylene packaging film
- Flow property / unit: Mass / kg
- Amount rule: Measured net quantity of Polyethylene packaging film, reconciled to the linked lot and process balance, then normalized once to the declared reference output; retain moisture and any density conversion evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sorting_runs`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted terminal root/tuber product (`reference_product_output`)

Record the measured accepted output of `sorting_packing` only when that operation actually occurs. Preserve species, condition, grade, moisture, lot and its real outgoing gate. This stable row id identifies an actual route output; the sole final reference is reference_product_at_declared_handoff. Retain raw output and link the selected final lot without counting it as another final product. Any UUID shown is usable only for its independently confirmed physical state/gate; an incompatible upstream/intermediate state needs a separately verified or explicit unresolved identity. Preserve the original stage measurement and collection records.

- Selected flow: Unresolved residual edible high-starch or high-inulin root/tuber of the declared species
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: Weigh the accepted net lot output of the actual operation under `cp_sorting_runs`, retain gross/tare, rejects, stocks, moisture and matched onward lot records, and reconcile before final normalization.

- Amount rule: measured accepted net output from the actual operation under `cp_sorting_runs`; retain raw lot quantity and actual stage throughput, then normalize once under the final-handoff normalization in Section 8; never prescribe a fixed intermediate yield
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: measured actual operation/lot output and throughput, retained before one final-reference normalization.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_sorting_runs`
- Sources: `mass-balance-identity`

##### Waste flows

###### Sorting rejects and foreign matter (`sorting_reject_output`)

Collect and reconcile sorting rejects and foreign matter, retaining the identity, state, origin and destination required by this card.

- Selected flow: Off-grade, damaged or contaminated organs and foreign matter by fate
- Flow property / unit: Mass / kg
- Amount rule: measure separately from useful downgraded product and rework
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: rejects only; useful downgrade remains product.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sorting_runs`
- Range: Broad QA screening range
  - Range role: `qa_guardrail`
  - Lower: 0
  - Upper: 500
  - Unit: kg/1,000 kg incoming
  - Basis: rejects only; useful downgrade remains product
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

### Process: Accepted-product measurement at declared handoff (`declared_reference_handoff`)
This measurement adds no processing, waste generation or emission. Preserve all real upstream operations and losses; bypass only operations demonstrated absent. Select one actual terminal product lot and cancel its paired internal transfer once when aggregating the system. Do not sum inactive routes, co-products or both source and handoff as accepted final output.

#### Inputs
##### Product flows
###### Accepted actual-route product at the same handoff (`actual_route_product_for_handoff`)

Measure only accepted product at the existing declared gate. Match one actual terminal source record; internal paired transfer and this reference represent the same event, not two sales. Verify identity for the actual species/state/gate independently; an identifier confirmed only for fresh farm-gate goods cannot represent an incompatible conditioned or independent pack-house state. Missing identity remains explicit and is not resolved by copying an adjacent output UUID.
- Selected flow: Accepted harvested whole edible root or tuber of the declared single high-starch/inulin species (UUID unresolved)
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
- Selected flow: Accepted harvested whole edible root or tuber of the declared single high-starch/inulin species (UUID unresolved)
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
| `allocation_crop_outputs` | production | Use physical subdivision first; report useful secondary outputs and apply a justified consistent allocation when inseparable. |  |
| `allocation_grades` | sorting | Keep accepted grades and useful downgraded output as products; do not call useful output waste to avoid allocation. |  |
| `allocation_residues` | residues | No credit when discarded without function; if sold or used, disclose destination and use reviewed allocation or a separate substitution scenario. |  |
| `allocation_shared_assets` | shared assets | Allocate by measured operating time, area-time, volume-time or throughput and prevent duplicate attribution. |  |
| `allocation_rework` | rework | Return rework to its originating lot, count added burdens/losses once, and count output only after acceptance. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Inventory completeness: conditional named cards are examples of individual exchanges, not an exhaustive recipe or a requirement to use those products. Before completing a foreground package, enumerate every actual planting stock, nutrient, crop-protection formulation, asset material, operating service, carrier, packaging material, waste stream and applicable elementary substance separately, using its physical identity, state, native property/unit, origin or receiving compartment, and measured or method-calculated quantity. Missing identity or quantity remains a completeness gap, never an assumed zero. Preserve the actual lot and phase basis; do not sum intermediate transfers as additional final output or duplicate burdens included in purchased services.

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_crop_inputs` | `managed_production_lifting` | planting, nutrients, water, crop protection, energy | invoices, field logs, meters, contractor records | species, cultivar, field, area, dates, input identity, formulation, assay, amount, unit, carrier, operation | reconcile purchases, saved material and applications to fields; Raw aggregation and attribution: sum by field/input, allocate shared use causally, divide by matched terminal output | native units plus ha | each event | complete crop cycle | every included field and shared service | per declared reference flow | invoices, application logs, meters, field map, contractor evidence |
| `cp_harvest_lots` | `managed_production_lifting` | lifting, accepted harvest, residues and soil | weigh tickets, harvest logs, sampling | species, field, date, gross/tare, accepted mass, moisture, soil, damage, residue/reject class, fate, lot | calibrated weighing and representative inspection/moisture sampling; Raw aggregation and attribution: sum by lot/class; retain state and fate | kg, %, ha | each lot | complete lifting period | every included field and collection point | per declared reference flow | calibration, lot identifiers, photographs/inspection, moisture/destination records |
| `cp_field_emissions` | `managed_production_lifting` | managed-soil emissions | calculated foreground record | N by form, residue N, soil/climate, factor version, substance, compartment | apply documented method to reconciled field inputs; Raw aggregation and attribution: calculate by field then output-mass-weight | kg substance | each crop cycle | same cycle and stated method lag | every managed field | per declared reference flow | method source, workbook, input reconciliation, review |
| `cp_storage_lots` | `curing_storage` | curing, storage, losses, energy, water | lot sheets, scales, meters, condition logs | species, lot, opening/closing mass, moisture, damage, method, time, temperature, humidity, ventilation, water, energy, rejects, fate | Use the storage control volume in calc_batch_balance; record accepted and downgraded dispatch separately from closing stock, with measured waste, supported physical releases and unexplained difference. | kg, %, day, m3, kWh, MJ | each lot and condition interval | complete declared interval | every store, curing area and utility meter | per declared reference flow | calibration, condition logger, lot chain, stocktake, destinations |
| `cp_sorting_runs` | `sorting_packing` | sorting, grades, rework, packing, rejects | run sheets, scales, package records, meters | species, lot, state, incoming mass, grade criteria, accepted/downgraded/reject mass, rework, packaging material/mass/reuse, energy, gate | matched-run mass balance and package-count reconciliation; Raw aggregation and attribution: sum by grade/destination; allocate shared runs by throughput | kg, item, kWh | each run or lot | all represented runs | every included line and shared asset | per declared reference flow | calibration, inspection, package specification, run/lot linkage, closure check |
| `cp_phase1_environment_coverage` | managed_production_lifting | managed environmental coverage by actual node | site/activity/method ledger | actual production nodes; soil/substrate route; climate/soil; nutrient product mass and composition; residue fate/N; relevant mineralisation/organic-soil/excreta activity; method/tier/equation/version; pathway factors and units; lime/urea; actual fuels; substance/compartment; supplier coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_area_normalization` | crop-cycle flows | field total / terminal accepted mass from same crop × 1,000 | field amount; matched accepted mass | amount per 1,000 kg reference product |  |
| `calc_batch_balance` | storage and sorting | Declare one control volume at a time. Storage over a period: opening stock + external receipts + actual added material/water = accepted dispatch + separately marketed downgraded dispatch + waste removals + evidenced physical releases + closing stock + signed unexplained difference. Accepted/downgraded stock still held belongs only to closing stock, not dispatch. Sorting/packing batch: opening work-in-progress + actual batch receipts/additions = accepted exits + separately transferred downgrades + waste/reject exits + evidenced physical releases + closing work-in-progress + signed unexplained difference. A received lot is counted once, not as both incoming and receipts; a dispatched accepted lot is counted once, not as both accepted and dispatch. Use matched component/moisture bases; cancel internal rework once and investigate nonclosure instead of inventing waste or evaporation. Apply final normalization only after the physical balances and attribution. | matched lot/control-volume opening and closing stocks, receipts/additions, mutually exclusive exits, moisture/components and uncertainty | reconciled inventory | `mass-balance-identity` |
| `calc_dry_matter` | moisture conversion | as-received mass × (1 − wet-basis moisture fraction) | mass; moisture | dry matter mass | `mass-balance-identity` |
| `calc_combustion_co2` | on-site fuel | fuel quantity × applicable calorific, carbon and oxidation factors | carrier; factors | kg fossil CO2 | `ipcc-2006-stationary-combustion` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_field_emissions`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | actual managed-production nodes | For the actual owned managed-production node(s), require an applicability ledger for direct soil N2O, volatilisation/deposition-derived indirect N2O, leaching/runoff-derived indirect N2O, NH3/NOx and nutrient losses, plus actual liming/urea-use CO2. Primary calculation precedence is a representative pathway measurement, then a validated site/national method applicable to the crop, soil and management; otherwise use the compatible 2006 IPCC/2019-refined managed-soil equations and climate/input-specific factor selection for N2O and lime/urea CO2. Retain the exact edition, equation, tier, activity and factor units, climate and management applicability; no universal dose or emission factor is prescribed. Non-soil/protected routes need a method valid for their actual medium; do not force soil factors onto an inapplicable route. Use the same period/field N ledger for synthetic and organic additions, residues, actual relevant mineralisation/organic-soil and excreta pathways; demonstrate absent pathways rather than infer zero. Calculate direct and each indirect component separately, then assign each once to matching existing or new concrete cards; never add a total to its components. Convert N2O-N to molecular N2O by 44/28 once. NH3, NOx and nutrient/pesticide loss require an applicable measured or documented substance/fate model; total N/P or an unexplained balance residual is not a compound release. Keep actual receiving compartments and molecular versus elemental/reporting bases explicit; indirect formation does not remove the same N from the source ledger twice. Include actual local combustion releases separately using fuel-specific combustion-only methods; purchased electricity/heat/services retain upstream coverage once. Add one identity-specific exchange only for a supported release and reuse an existing matching card, with verified UUID or explicit unresolved identity. Missing applicable method/activity/factor/identity blocks completeness; it is not a justified zero. Attribute raw activity/release totals and normalize once to the matched accepted reference output. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference | `review-ipcc-soils-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Name species/state and retain reliable high-starch/inulin and residual CPC eligibility evidence. | botanical/product specification, composition source, classification review, lot record |
| `dq_completeness` | all nodes | Reconcile fields, inputs, harvest lots, stocks, sorting, losses, packaging and destinations. | completeness checklist and balances |
| `dq_temporal` | crop and storage | Keep one crop and matched post-harvest lots; disclose storage duration and averaging. | dated field, lot and stock records |
| `dq_measurement` | mass, moisture, conditions | Use calibrated scales and documented representative moisture/condition measurement. | calibration, sampling and logger records |
| `dq_route` | conditional nodes | Include only actual curing, storage, sorting and packing; disclose inactive nodes and gate. | route statement, process map and records |

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_declared_reference_handoff` | `declared_reference_handoff` | actual accepted terminal product and paired transfer | scale/lot/acceptance records | species; state; grade; moisture/basis; gate; actual_terminal_process_id; actual_terminal_output_row_id; lot/transfer_id; gross/tare/net mass R; raw stage totals/throughputs; stocks, rejects and destinations | Weigh accepted net R at the existing gate; match exactly one actual terminal source of the same lot/state and reconcile all earlier losses and stocks. If conditional preparation is absent use the last actual included eligible product output, without inventing that preparation. Preserve original activity records and all required qualifiers. | kg and native activity units | each accepted lot | matched production and handoff period | existing declared producer/primary gate | per declared reference flow | calibrated weighing, acceptance/grade records, lot chain, activation/bypass evidence and closed balances |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_final_handoff_normalization` | all foreground quantities and actual route outputs | Let R be positive measured accepted final mass in kg for one matched species/state/grade/gate/period, excluding tare, rejects, co-products and held stock. Physical ledger = raw physical quantity/R * 1000 kg, without burden-allocation scaling. Attributable inventory contribution = attributable raw quantity/R * 1000 kg, preserving native numerator units and the existing output/period attribution. A local intensity q_i=Q_i/O_i first reconstructs Q_i=q_i*actual linked O_i; do not divide by R again after final normalization. Both handoff sides are the same measured event R/R*1000 kg, not another physical yield. Include only actual active operations; record and substantiate bypass. Missing/nonpositive R or an unlinked terminal record blocks a normalized complete result, not zero. Preserve original stage data and cancel paired internal transfers once. | cp_declared_reference_handoff; original linked collection protocols | native quantities per declared final reference | `declared-handoff-measurement-definition` |

## 9. Validation Rules

| rule_id | Applies to | Rule | severity |
| --- | --- | --- | --- |
| `validate_residual_identity` | reference product | Reject unless one species, starch/inulin evidence, CPC 01599 eligibility, state and gate are declared. | error |
| `validate_exclusions` | reference product | Reject named CPC roots/tubers, standing crops, propagules, powders, extracts and manufactured products. | error |
| `validate_reference_identity` | reference product | UUID may remain blank at candidate stage; active status and process publication require a compatible detail-confirmed harvested mass flow. | error |
| `validate_reference_mass` | terminal output | Accepted terminal output equals 1,000 kg as received and excludes rejects and unaccepted rework. | error |
| `validate_route_activation` | conditional nodes | Burdens are zero/absent when inactive and require matched records when active. | error |
| `validate_nutrient_binding` | crop nutrients | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. | error |
| `validate_mass_balance` | harvest, storage, sorting | Reconcile accepted, downgraded, rejected, foreign matter, stock and moisture terms and disclose closure error. | error |
| `validate_ranges` | all cards | Review range exceptions; provisional screens do not replace foreground evidence or impose limits. | warning |
| `validate_flow_resolution` | inventory | Resolve parameterized and unresolved cards to verified concrete UUIDs before process publication. | error |
| `validate_shared_rework` | shared assets and rework | Reject duplicate counting of shared services or reworked product. | error |


| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_final_handoff_bypass` | selected actual route and all conditional bypass states | Check both presence and absence of optional conditioning/packing/storage against actual records: exactly one required handoff reference persists, its source product/state/gate matches Section 3, active physical rows retain measured throughput, and inactive physical activities add no exchange. Require raw accepted mass, upstream closure, unique transfer pairing and single final normalization; an unexplained state or missing identity is not an assumed valid branch. | `declared-handoff-measurement-definition` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground system for one named residual edible starch/inulin-rich root/tuber species |
| downstream_use | `secondary_dataset`; `background_dataset` only when species, route, state, geography and gate fit |
| allowed_use | within declared species, production system, cycle, state, storage interval, technology, geography and gate |
| excluded_use | species-neutral residual averages; named CPC products; standing crops; propagules; powders; extracts; manufactured foods; substitution across fresh/cured/stored gates |
| required_metadata | species/cultivar, composition and CPC eligibility, origin, system, cycle, area, lot, state, moisture, grade, gate, nodes, duration, packaging, allocation and identity resolution |
| required_quality_disclosure | completeness, measurement, missing data, range exceptions, balance closure, shared assets, rework, allocation and unresolved identities |
| update_trigger | species/category correction, gate/route/technology change, new records, revised factors, material yield/loss change or verified identity change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-root-tuber-postharvest` | official_guidance | FAO, https://www.fao.org/4/y4358e/y4358e05.htm | gentle harvest, handling, curing, deterioration and route design |
| `fao-root-tuber-storage` | official_guidance | FAO, https://www.fao.org/4/x5415e/x5415e03.htm | storage conditions, stock control and loss records |
| `ipcc-2019-managed-soils` | method_factor | IPCC 2019 Refinement, Volume 4 Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/vol4.html | managed-soil nitrogen emissions |
| `emep-eea-2023-guidebook` | method_factor | EEA EMEP/EEA 2023, https://www.eea.europa.eu/publications/emep-eea-guidebook-2023 | agricultural ammonia |
| `ipcc-2006-stationary-combustion` | method_factor | IPCC 2006, Volume 2 Chapter 2, https://www.ipcc-nggip.iges.or.jp/public/2006gl/vol2.html | on-site combustion CO2 |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to matched foreground records | batch reconciliation and exact reference output |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct/indirect N2O and lime/urea CO2 method context; factors require actual applicability and site activity, not a product default. |

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | method_factor | This PCR Sections 3, 6 and 8: matched accepted handoff mass divided by itself times the declared reference amount; physical transfer pairing and dimensional normalization identity, not an empirical yield or new physical operation. | single accepted reference and measured route-throughput linkage |
