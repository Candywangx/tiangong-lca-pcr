---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.unmanufactured-tobacco
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Unmanufactured tobacco

## 1. Scope and Applicability

This PCR covers tobacco leaves delivered either as fresh harvested green leaf at the field/farm gate, or as cured unmanufactured leaf after one declared air-, fire-, flue-, or sun-curing route and subsequent grading and packing. One dataset shall select one terminal market state and gate. It excludes cigarettes, cigars, smoking mixtures, cut, homogenized or reconstituted tobacco, nicotine extraction, and all other manufactured tobacco or nicotine products.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.unmanufactured-tobacco |
| classification_refs | CPC 3.0: 01970 Unmanufactured tobacco; mapping relation: exact |
| covered_products | fresh harvested tobacco leaf; air-, fire-, flue-, or sun-cured leaf remaining unmanufactured |
| excluded_products | manufactured tobacco and nicotine products, including cut, blended, reconstituted, extracted, smoking, oral, and heated products |
| representative_product | tobacco leaf in one declared green or cured market state |
| production_route | managed cultivation and harvest, followed conditionally by exactly one curing route and grading/packing |
| market_state | green leaf at field/farm gate or cured graded leaf at curing/farm hand-off; state, curing method, moisture, grade, variety, crop year, geography, and package form declared |

Green and cured routes coexist in this category but are mutually exclusive terminal references in one dataset. Air, fire, flue, and sun curing are alternative technologies rather than simultaneous default operations.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | unmanufactured tobacco leaf at the selected terminal gate |
| How much | 1,000 kg as-received tobacco leaf |
| How well | declared green or cured state, curing method where applicable, moisture, grade, variety, origin, crop year, and acceptance specification |
| How long or cycle | one crop cycle and, for cured leaf, its matched curing and grading batches |
| reference_flow_link | reference_product_at_declared_handoff |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Unmanufactured tobacco, production mix, at farm gate, fresh unprocessed for green leaf only; cured-leaf identity unresolved |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | terminal leaf state; curing method or not applicable; variety/market class; geography; crop year; moisture basis; grade; package form; gate; included operations |

The fixed fresh-leaf UUID shall never identify cured tobacco.

Each foreground dataset must explicitly select one actual route, declared gate, product state and output row. Reconcile the selected terminal route with `reference_product_at_declared_handoff`; normalize that handoff output to the reference quantity and retain preceding-stage outputs as measured transfers. Raw weighing, mass reconciliation and lot traceability requirements continue to apply.

The sole reference output is `reference_product_at_declared_handoff`, receiving the selected actual route product at the declared gate. Existing route-output ids identify the source and physical state; they are no longer individually fixed to the reference quantity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass_as_received` | terminal leaf | Mass | kg | Report as-received mass and measured moisture; retain moisture basis for dry-matter comparisons. |
| `area_to_reference_conversion` | field flows | activity-specific property | activity-specific unit | Normalize same-cycle field totals first to harvested green leaf, then use matched curing and grading balances for cured leaf. |
| `nutrient_content_basis` | nutrient inputs | nutrient mass | kg N, kg P2O5, kg K2O | Preserve product mass, formulation, assay, and elemental/oxide basis separately. |
| `curing_energy_basis` | curing energy | energy or carrier mass | MJ, kWh, kg, m3 | Preserve carrier and measured amount; document every conversion to delivered energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | prepared field or transplant bed at crop-cycle start, with planting material and purchased inputs crossing the foreground boundary |
| starting_condition_role | start of managed tobacco leaf production |
| product_classification_scope | fresh and cured unmanufactured tobacco leaf corresponding to CPC 01970 |
| recursive_input_rule | tobacco seed/seedlings link to distinct propagation datasets and shall not recurse to this harvested-leaf PCR |
| upstream_dataset_requirement | compatible datasets for planting material, nutrients, crop protection, irrigation, fuels, electricity, curing energy, and packaging |
| disclosure | variety; nursery boundary; crop dates; geography; area; irrigation; yield; residue fate; terminal state/gate; curing method/fuel; barn; batches; moisture; grade; rejects; packaging; allocation |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | all routes | Include nursery or purchased transplant input, field preparation, transplanting, management, harvest, and direct field emissions through green-leaf hand-off. | `who-tobacco-environment-2017` |
| `boundary_curing_route` | cured route | Include exactly the declared air, fire, flue, or sun curing route, barn/structure service, energy, drying loss, combustion emissions, handling, and conditioning. | `who-tobacco-environment-2017` |
| `boundary_grading_packing` | cured route | Include pre-gate grading and packing; distinguish accepted grades, downgraded useful leaf, rework, rejects, and waste. | `who-tobacco-environment-2017` |
| `boundary_manufacturing_exclusion` | all routes | Stop before product manufacture, extraction, cutting, blending, reconstitution, distribution, retail, and use. |  |
| `boundary_direct_emissions` | soil and curing combustion | Include managed-soil and foreground combustion emissions from the same activity records used for nutrients and fuels. | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook`; `ipcc-2006-stationary-combustion` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `tobacco_field_production` | Tobacco field production and harvest | required | always | managed biological production and separate leaf harvest | hectare and harvested green-leaf mass for one crop cycle |
| `tobacco_leaf_curing` | Tobacco leaf curing | conditional | terminal product is cured leaf | stabilize leaf by one declared curing technology | incoming green leaf and accepted cured leaf per batch |
| `cured_leaf_grading_packing` | Cured-leaf grading and packing | conditional | cured leaf is graded, reworked, or packed before hand-off | grade and present cured leaf | incoming and accepted packed-leaf mass |
| declared_reference_handoff | Product Measurement at Declared Handoff | required |  | foreground | reference_product_at_declared_handoff |

### Process: Tobacco field production and harvest (`tobacco_field_production`)

#### Inputs

##### Product flows

###### Fertilizer, urea input (`tobacco_field_agricultural_nutrient_inputs`)

Include this conditional card only when Fertilizer, urea is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, urea
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, urea used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and converted to 1,000 kg terminal leaf.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`

###### Fertilizer, monoammonium phosphate input (`tobacco_field_agricultural_nutrient_inputs_monoammonium_phosphate`)

Include this conditional card only when Fertilizer, monoammonium phosphate is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, monoammonium phosphate
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, monoammonium phosphate used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and converted to 1,000 kg terminal leaf.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`

###### Fertilizer, potassium chloride input (`tobacco_field_agricultural_nutrient_inputs_potassium_chloride`)

Include this conditional card only when Fertilizer, potassium chloride is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, potassium chloride
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, potassium chloride used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and converted to 1,000 kg terminal leaf.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`

###### Cattle manure, as applied input (`tobacco_field_agricultural_nutrient_inputs_cattle_manure`)

Include this conditional card only when Cattle manure, as applied is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Cattle manure, as applied
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Cattle manure, as applied used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and converted to 1,000 kg terminal leaf.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`

###### Agricultural limestone input (`tobacco_field_agricultural_nutrient_inputs_agricultural_limestone`)

Include this conditional card only when Agricultural limestone is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Agricultural limestone
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Agricultural limestone used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and converted to 1,000 kg terminal leaf.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`

###### Irrigation water (`tobacco_irrigation_water_input`)

Record water applied to the tobacco field and distinguish irrigation from rainfall.

- Selected flow: Irrigation water supply
- Flow property / unit: Volume / m3
- Amount rule: metered or calculated applied water; rainfed fields record zero with evidence
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and converted to terminal leaf.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field_records`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 8,000
  - Unit: m3/ha
  - Basis: one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage (`tobacco_field_energy_input`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per hectare and converted to terminal leaf.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_field_records`

###### Diesel fuel (`tobacco_field_energy_input_diesel`)

Include this exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per hectare and converted to terminal leaf.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured Diesel fuel supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `crop_cycle`
- Evidence kind: `collected_record`
- Collection protocol: `cp_field_records`

Required crop-protection records: before completing the foreground package, enumerate every actually applied formulated product separately, retaining trade name, active ingredient, salt or chemical form, concentration, density where needed, application quantity, date and treated area. Select one physically specific product identity per exchange. Derive active-substance releases separately by substance and receiving compartment. Missing formulation identity is a completeness gap; do not replace it with a generic pesticide, invented example, or assumed zero.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested green tobacco leaf (`green_leaf_output`)

Record accepted harvested green leaf as the terminal product or the measured intermediate transferred to curing.

- Selected flow: Unmanufactured tobacco, production mix, at farm gate, fresh unprocessed `e903dd1d-1d82-41e7-9526-2ae250746688`
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: measured accepted green-leaf mass at declared moisture, grade, and gate

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare; scale to 1,000 kg only when green leaf is terminal.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_records`
- Range: Provisional green-leaf yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 500
  - Upper: 8,000
  - Unit: kg/ha
  - Basis: one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field residues and rejected leaves (`field_residue_waste_output`)

Record non-product stalks, roots, rejected leaves, and harvest losses by destination.

- Selected flow: Tobacco field residues and rejected green leaves
- Flow property / unit: Mass / kg
- Amount rule: measured or reconciled mass by residue class and fate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg harvested green leaf.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_records`
- Range: Provisional residue screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,500
  - Unit: kg/1,000 kg harvested green leaf
  - Basis: all non-product biomass and rejected leaf by fate
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Nitrous oxide to air (`field_n2o_air_output`)

Record calculated managed-soil nitrous oxide in the confirmed unspecified-air compartment.

- Selected flow: Nitrous oxide, emissions to air, unspecified `08a91e70-3ddc-11dd-94c3-0050c2490048`
- Flow property / unit: Mass / kg N2O
- Amount rule: calculate from collected N inputs and residues with an applicable method
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and converted to terminal leaf.

- Normalization basis: per declared reference flow
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Broad method-result screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/ha
  - Basis: one crop cycle; method calculation governs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Ammonia to air (`field_ammonia_air_output`)

Record calculated fertilizer-related ammonia volatilization in the confirmed unspecified-air compartment.

- Selected flow: Ammonia, emissions to air, unspecified `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- Flow property / unit: Mass / kg NH3
- Amount rule: calculate by nutrient product, method, timing, weather, and factor
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and converted to terminal leaf.

- Normalization basis: per declared reference flow
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `emep-eea-2023-guidebook`
- Range: Broad method-result screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 200
  - Unit: kg NH3/ha
  - Basis: one crop cycle; method calculation governs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Nitrate to water (`field_nitrate_water_output`)

Record calculated or monitored nitrate loss in the confirmed unspecified-water compartment.

- Selected flow: Nitrate, emissions to water, unspecified `fe0acd60-3ddc-11dd-aa31-0050c2490048`
- Flow property / unit: Mass / kg nitrate
- Amount rule: calculate only with applicable leaching/runoff method or monitored balance
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and converted to terminal leaf.

- Normalization basis: per declared reference flow
- Basis kind: N input (`n_input`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`
- Sources: `ipcc-2019-managed-soils`
- Range: Broad method-result screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1,000
  - Unit: kg nitrate/ha
  - Basis: one crop cycle; selected method governs
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Tobacco leaf curing (`tobacco_leaf_curing`)

#### Inputs

##### Product flows

###### Green leaf entering curing (`curing_green_leaf_input`)

Record the measured harvested green-leaf batch transferred into the selected curing route.

- Selected flow: Unmanufactured tobacco, production mix, at farm gate, fresh unprocessed `e903dd1d-1d82-41e7-9526-2ae250746688`
- Flow property / unit: Mass / kg
- Amount rule: measured green-leaf batch mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per batch and converted to 1,000 kg cured leaf.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing_records`
- Range: Green-to-cured mass ratio
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 2
  - Upper: 12
  - Unit: kg green leaf/kg accepted cured leaf
  - Basis: matched batch with moisture states declared
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage (`curing_energy_input`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per 1,000 kg accepted cured leaf.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_curing_records`

###### Diesel fuel (`curing_energy_input_diesel`)

Include this exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per 1,000 kg accepted cured leaf.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured Diesel fuel supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_curing_records`

###### Purchased steam (`curing_energy_input_steam`)

Include this exchange only when Purchased steam is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per 1,000 kg accepted cured leaf.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Measured Purchased steam supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_curing_records`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Cured tobacco leaf (`cured_leaf_output`)

The fresh-leaf UUID shall not be reused.

- Selected flow: Cured unmanufactured tobacco leaf
- Flow property / unit: Mass / kg
- Amount rule: measured cured-leaf mass at declared moisture and curing method
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per batch and converted to 1,000 kg accepted cured leaf.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing_records`
- Range: Cured output fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.08
  - Upper: 0.50
  - Unit: kg cured leaf/kg incoming green leaf
  - Basis: matched batch with moisture states declared
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Curing rejects (`curing_reject_waste_output`)

Record leaf rejected during curing and every non-useful destination separately from evaporated water.

- Selected flow: Tobacco curing rejects and non-useful leaf
- Flow property / unit: Mass / kg
- Amount rule: measured rejects plus reconciled non-water loss by fate; evaporated water is not waste
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted cured leaf.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_curing_records`
- Range: Provisional curing-reject screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/1,000 kg incoming green leaf
  - Basis: matched batch, excluding evaporated water
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Fossil carbon dioxide from curing (`curing_fossil_co2_air_output`)

Record fossil carbon dioxide from on-site curing combustion only.

- Selected flow: Carbon dioxide (fossil), emissions to air, unspecified `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg CO2
- Amount rule: fuel quantity × carrier-specific carbon and oxidation factors; zero without on-site fossil combustion
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per 1,000 kg accepted cured leaf.

- Normalization basis: per declared reference flow
- Basis kind: Fuel inventory (`fuel_inventory`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_curing_records`
- Sources: `ipcc-2006-stationary-combustion`
- Range: Route-conditional combustion screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5,000
  - Unit: kg fossil CO2/1,000 kg accepted cured leaf
  - Basis: zero without fossil combustion
  - Basis kind: Fuel inventory (`fuel_inventory`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Cured-leaf grading and packing (`cured_leaf_grading_packing`)

#### Inputs

##### Product flows

###### Cured leaf entering grading (`grading_cured_leaf_input`)

Record the measured cured-leaf batch transferred to grading and packing.

- Selected flow: Cured unmanufactured tobacco leaf
- Flow property / unit: Mass / kg
- Amount rule: measured incoming batch mass and moisture
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per batch and converted to 1,000 kg packed leaf.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Grading input-output ratio
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg incoming/kg accepted packed leaf
  - Basis: matched grading batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Packaging materials (`cured_leaf_packaging_input`)

Record actual wrap, carton, sack, liner, pallet, crate, strap, and reusable packaging separately. This parameterized set-level card has no fixed UUID.

- Selected flow: Packaging functions for cured tobacco leaf
- Flow property / unit: Mass or number of items / kg or item
- Amount rule: measured packaging by material/reuse status, expanded to verified exchanges
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1,000 kg accepted packed leaf.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Provisional packaging screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 150
  - Unit: kg packaging/1,000 kg packed leaf
  - Basis: account for reuse over declared cycles
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Graded cured tobacco leaf (`graded_cured_leaf_output`)

Record the accepted terminal cured-leaf grade or explicitly declared grade mix.

- Selected flow: Graded cured unmanufactured tobacco leaf
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: measured accepted mass by grade at declared moisture and package form

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: terminal output scaled to 1,000 kg.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Terminal reference quantity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1,000
  - Upper: 1,000
  - Unit: kg
  - Basis: terminal cured-leaf reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `reference-normalization-rule`

###### Downgraded cured leaf (`downgraded_leaf_output`)

Record downgraded leaf only when it leaves the process for a named useful destination.

- Selected flow: Downgraded cured tobacco leaf for declared use
- Flow property / unit: Mass / kg
- Amount rule: measured leaf transferred to named useful destination; exclude internal rework
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted packed leaf.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_records`
- Range: Provisional downgraded-product screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 300
  - Unit: kg/1,000 kg incoming cured leaf
  - Basis: useful destination documented
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected cured tobacco leaves (`grading_reject_waste_output`)

Record Rejected cured tobacco leaves only when this material crosses the declared process boundary. Retain lot, physical state, composition where relevant, and actual destination. Record other materials independently rather than treating this card as a selector or material bundle.
Raw activity or stage basis: per 1,000 kg accepted packed leaf.

- Selected flow: Rejected cured tobacco leaves
- Flow property / unit: Mass / kg
- Amount rule: Measured net quantity of Rejected cured tobacco leaves, reconciled to the linked lot and process balance, then normalized once to the declared reference output; retain moisture and any density conversion evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grading_records`

###### Paperboard packaging waste (`grading_reject_waste_output_paper_waste`)

Record Paperboard packaging waste only when this material crosses the declared process boundary. Retain lot, physical state, composition where relevant, and actual destination. Record other materials independently rather than treating this card as a selector or material bundle.
Raw activity or stage basis: per 1,000 kg accepted packed leaf.

- Selected flow: Paperboard packaging waste
- Flow property / unit: Mass / kg
- Amount rule: Measured net quantity of Paperboard packaging waste, reconciled to the linked lot and process balance, then normalized once to the declared reference output; retain moisture and any density conversion evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grading_records`

###### Polyethylene packaging-film waste (`grading_reject_waste_output_film_waste`)

Record Polyethylene packaging-film waste only when this material crosses the declared process boundary. Retain lot, physical state, composition where relevant, and actual destination. Record other materials independently rather than treating this card as a selector or material bundle.
Raw activity or stage basis: per 1,000 kg accepted packed leaf.

- Selected flow: Polyethylene packaging-film waste
- Flow property / unit: Mass / kg
- Amount rule: Measured net quantity of Polyethylene packaging-film waste, reconciled to the linked lot and process balance, then normalized once to the declared reference output; retain moisture and any density conversion evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_grading_records`

##### Elementary flows


### Process: Product Measurement at the Declared Handoff (`declared_reference_handoff`)
This node records the actual product handoff at the existing system boundary for reconciliation and reference-quantity normalization. It adds no physical processing and does not presume drying, cooling, storage, packaging or transport. Each data package declares one actual route, one terminal product state, moisture or dry-matter basis, and gate. Feed only the accepted product delivered by that route at that gate into this node; do not add other routes as extra inputs. Record co-products separately and apply Section 7. Count preceding inputs, losses and emissions once. Normalize using the measured accepted net mass at the handoff; this measurement node changes neither mass, yield nor allocation.
#### Inputs
##### Product flows
###### Actual route product at handoff (`actual_route_product_for_handoff`)
Record the accepted product delivered by the actual terminal route and reconcile it with handoff weighing and lot records.
- Selected flow: Unmanufactured tobacco, production mix, at farm gate, fresh unprocessed for green leaf only; cured-leaf identity unresolved
- Flow property / unit: Mass / kg
- Amount rule: measured accepted net product mass at the actual handoff, normalized to the reference quantity; do not sum preceding-stage quantities, other routes or co-products
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_reference_handoff`
- Range: Handoff quantity normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg net handoff mass of the same state
  - Basis: normalization of the measured net mass of the same handoff state; not a physical-operation yield
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `declared-handoff-measurement-definition`

##### Waste flows
This measurement node adds no waste inputs.
##### Elementary flows
This measurement node adds no resource inputs.
#### Outputs
##### Product flows
###### Reference product at declared handoff (`reference_product_at_declared_handoff`)
- Selected flow: Unmanufactured tobacco, production mix, at farm gate, fresh unprocessed for green leaf only; cured-leaf identity unresolved
- Flow property / unit: Mass / kg
- Amount rule: 1000 kg
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_declared_reference_handoff`
Confirm the product UUID independently for the actual state. Until confirmed, retain unresolved identity instead of inheriting a UUID from a preceding stage or another route.
- Range: Handoff quantity normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg net handoff mass of the same state
  - Basis: normalization of the measured net mass of the same handoff state; not a physical-operation yield
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `declared-handoff-measurement-definition`

##### Waste flows
Record actual losses at the operation where they occur; do not duplicate them here.
##### Elementary flows
Record actual emissions at the operation where they occur; do not duplicate them here.

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid_by_subdivision` | all nodes | Separate field, curing, grading, and batch records; attribute shared meters/equipment by operating time, throughput, or occupied capacity before allocation. | `iso-14044-2006` |
| `allocation_leaf_grades` | useful grades | Preserve grades and direct burdens; if subdivision is infeasible, use contemporaneous hand-off economic allocation and disclose mass sensitivity. | `iso-14044-2006` |
| `allocation_residue_reject` | residues, rework, rejects | Do not allocate to internal rework or waste; prevent reworked leaf from becoming a second output. |  |
| `allocation_shared_infrastructure` | shared barns/assets | Attribute each shared asset once across batches/periods with documented use; prevent cross-node double counting. | `iso-14044-2006` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Inventory completeness: conditional named cards are examples of individual exchanges, not an exhaustive recipe or a requirement to use those products. Before completing a foreground package, enumerate every actual planting stock, nutrient, crop-protection formulation, asset material, operating service, carrier, packaging material, waste stream and applicable elementary substance separately, using its physical identity, state, native property/unit, origin or receiving compartment, and measured or method-calculated quantity. Missing identity or quantity remains a completeness gap, never an assumed zero. Preserve the actual lot and phase basis; do not sum intermediate transfers as additional final output or duplicate burdens included in purchased services.

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_records` | `tobacco_field_production` | planting, nutrients, water, energy, protection | log, invoice, meter, contractor record | field; area; variety; product; formulation; amount; assay; date; operation | reconcile inputs to field/cycle; Raw aggregation and attribution: sum by identity/field; normalize with matched yield | item; kg; L; m3; MJ; ha | each event | full cycle | all fields | per declared reference flow | invoices; labels; calibrated meters; logs |
| `cp_harvest_records` | `tobacco_field_production` | green leaf, residue, reject | harvest ticket, scale, moisture, destination | field; date; mass; moisture; grade; residue; fate | weigh/reconcile each picking; Raw aggregation and attribution: separate accepted leaf and every residue fate | kg; percent; ha | each picking | full cycle | all fields | per declared reference flow | calibration; lot trace; moisture test |
| `cp_field_emissions` | `tobacco_field_production` | emissions | nutrient, soil, weather, residue, model | N; residue N; soil; climate; application; drainage; factors; model | Within each compatible route/product/state, calculate attributable raw totals by field first. Aggregate final intensity = sum(attributable raw quantities) * declared reference quantity / sum(matched accepted final outputs). When source quantities are per-ha rates e_h and y_h, first recover raw totals as e_h*area and y_h*area; do not area-weight field totals again. A per-product intensity is weighted by its matched output, not area or an unweighted mean. Apply existing allocation once, preserve period/throughput and all source-unit conversions, and keep incompatible routes separate. | kg N; kg emission; ha | each event/cycle | full cycle | all fields | per declared reference flow | activity and factor provenance; model file |
| `cp_curing_records` | `tobacco_leaf_curing` | leaf, energy, rejects, emissions | batch, scale, moisture, meter, barn log | batch; method; barn; input mass/moisture; carrier; energy; time; outputs | match each run to inputs/outputs/meters; Raw aggregation and attribution: reconcile mass; allocate shared services by measured driver | kg; percent; kWh; MJ; h | each batch/period | full curing period | all barns and curing sites | per declared reference flow | calibrated scale/meter; invoice; barn log |
| `cp_grading_records` | `cured_leaf_grading_packing` | grades, packaging, rework, rejects | batch, scale, grade, issue, destination | batch; input; moisture; accepted; downgrade; rework; reject; packaging | reconcile grades/destinations; Raw aggregation and attribution: count rework once and close mass balance | kg; item; percent | each batch | full grading period | all grading and packing sites | per declared reference flow | calibration; grade sheet; package record |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | handoff weighing and acceptance records | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | Use calibrated scales or traceable weighing records; reconcile the actual terminal-operation handoff lot, accepted net mass, product state and moisture; exclude packaging tare and do not sum preceding-stage quantities. | kg | each handoff lot | declared reporting period | declared handoff gate | per declared reference flow | calibration or weighing tickets, acceptance and lot traceability |
| `cp_phase1_environment_coverage` | tobacco_field_production | managed environmental coverage by actual node | site/activity/method ledger | site and actual managed nodes; area; dated occupation intervals; co-users; establishment/immature history; actual prior/current land classes and transformation dates/areas; carbon-method coverage; upstream land coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_field_to_green_leaf` | field flows | Crop-cycle quantity / matched green-leaf mass gives only a per-kg-green-leaf intermediate. For a green-leaf reference multiply attributable totals by 1,000 kg / accepted green gate mass. For a cured-leaf reference, scale the per-kg-green contribution by actual linked green input per accepted cured kg under calc_green_to_cured_leaf, then multiply by 1,000 kg; add curing/grading contributions on that same final basis once. Preserve actual lots, losses, output shares and units; do not apply the green-to-cured conversion to direct curing quantities or divide final intensities again. | amount; area; green leaf | amount/kg green leaf |  |
| `calc_green_to_cured_leaf` | cured route | green-leaf-normalized amount × green-leaf input / cured output | masses; moisture; rejects | amount/kg cured leaf | `mass-balance-identity` |
| `calc_nutrient_content` | nutrient supply | product amount × declared nutrient fraction | identity; amount; assay | nutrient by product |  |
| `calc_managed_soil_emissions` | field emissions | applicable IPCC/regional method using inputs, residues, volatilization, and leaching | activity; soil; climate; factors | emissions by pathway | `ipcc-2019-managed-soils` |
| `calc_curing_combustion` | curing | fuel quantity × carrier-specific factor; purchased electricity is not on-site combustion | carrier; amount; factor | pollutant/batch | `ipcc-2006-stationary-combustion` |
| `calc_curing_mass_balance` | curing | green wet mass = cured leaf + rejects + water/other loss within uncertainty | masses; moisture | reconciled outputs | `mass-balance-identity` |
| `calc_grading_mass_balance` | grading | input = accepted + downgraded + rejects + loss; count rework once | batch masses; routes | reconciled grades | `mass-balance-identity` |
| `tobacco_planting_material_input_identity_and_fate` | `tobacco_field_production` | For the original tobacco_planting_material_input collection role at this operation, identify the actual physical form, species/material, composition, state and supply/treatment boundary before creating exchanges. Each seed lot, transplant, crown, cutting, larval stage, formulation, coating, preservative or separated residue actually used/generated requires its own concrete card where relevant to this role; these examples are alternatives, not a required recipe. Retain existing collection records and route-specific source evidence. Count-based planting records require measured or supplier-supported mass-per-unit when matched to a mass-based provider; retain count and mass as linked attributes rather than two purchases. Do not merge separate husk/shell or separate agents. A real mixed stream requires composition and recipient evidence and is counted once. Before completeness, record every applicable amount and native unit, link a compatible verified UUID or explicitly unresolved identity, preserve stock/return attribution, and normalize the attributable raw quantity once to the accepted reference output. Missing records are not zero; aggregate ranges are not individual-input defaults. | `cp_field_records` | Identity-specific exchanges and reconciled activity records |  |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_field_emissions`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_land_coverage` | actual managed-production nodes | For each actual owned managed-production site, collect the occupied area and dated occupation intervals, including attributable establishment/immature and production periods. Occupation is area multiplied by actual duration, converted explicitly to the selected area-time unit (1 ha = 10,000 m2; time in years); hectares per crop-cycle alone are not an area-time result without duration. Partition or take the union of overlapping establishment/management intervals so the same area-time is counted once, with shares across actual co-users summing to one. Record evidenced land transformation separately by actual from/to land class, event area and date under the declared land-use method; transformation has area units and is not added to occupation. Planting, continued occupation or missing prior-land data do not establish a transformation or zero transformation. Preserve actual historical-event attribution and carbon-stock/emission method coverage where applicable; no invented land conversion or generic carbon credit. Instantiate separate compatible elementary identities with verified UUIDs or explicit unresolved identities; attribute once and normalize to the matched final reference. Purchased completed biological inputs inherit compatible upstream land coverage once instead of duplicating it locally. Missing applicable land identity, area, duration or prior-state evidence remains a completeness gap; documented no transformation is a valid absence. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_route_identity` | reference | Distinguish green/cured and air/fire/flue/sun route; retain variety, grade, moisture, crop year, gate. | crop, curing, grade, sales records |
| `dq_temporal_alignment` | all rows | Match field, harvest, curing, grading, energy, and outputs to the same crop/batches; disclose proxies. | dated records |
| `dq_mass_moisture` | transformations | Use calibrated masses and paired moisture at green, cured, and packed states. | calibration; moisture records |
| `dq_route_completeness` | curing | Record energy carrier and combustion location; zero energy requires passive-route evidence. | barn log; invoice; meter |
| `dq_identity_resolution` | parameterized/unresolved | Resolve every emitted exchange to one verified UUID before process publication. | identity review record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validation_terminal_route` | reference | Select exactly one terminal route: 1,000 kg green or 1,000 kg cured graded leaf; forbid fresh UUID for cured leaf. |  |
| `validation_curing_method` | cured route | Declare one primary curing method per batch and include its energy, barn service, emissions, rejects, and hand-off. | `who-tobacco-environment-2017` |
| `validation_mass_balance` | harvest/curing/grading | Reconcile mass, moisture, grades, rework, rejects, and losses within documented uncertainty. | `mass-balance-identity` |
| `validation_nutrient_emissions` | field | Reconcile nutrient/residue N with N2O, NH3, and nitrate methods without duplicate pathways. | `ipcc-2019-managed-soils`; `emep-eea-2023-guidebook` |
| `validation_rework` | curing/grading | Link rework to origin and count once; rejected material cannot be accepted reference product. |  |
| `validation_shared_assets` | barns/meters/equipment | Apply one attribution driver per period and prevent double counting. | `iso-14044-2006` |
| `validation_flow_identity` | every flow | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground unmanufactured tobacco leaf production dataset |
| downstream_use | `secondary_dataset`; `background_dataset` after review and publication |
| allowed_use | LCA of green or cured unmanufactured tobacco preserving geography, crop year, state, curing technology, grade, moisture, gate, and allocation |
| excluded_use | manufactured tobacco/nicotine products or a different curing route, grade, geography, or gate without reviewed proxy decision |
| required_metadata | variety/market class; geography; crop year; area; yield; terminal state/gate; curing method; barn/energy; moisture; grade; packaging; residue/reject fate; allocation; identity resolution |
| required_quality_disclosure | foreground coverage; proxy periods; missing records; range exceedances; emission methods; meter/fuel reconciliation; mass/moisture balance; unresolved identities |
| update_trigger | reviewed route evidence, technology or emission-method change, concrete flow identity verification|

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `who-tobacco-environment-2017` | official_guidance | WHO, Tobacco and its environmental impact: an overview, 2017, https://iris.who.int/bitstream/handle/10665/255574/9789241512497-eng.pdf | cultivation and air/fire/flue/sun curing routes |
| `ipcc-2019-managed-soils` | method_factor | IPCC, 2019 Refinement, Volume 4, Chapter 11 | managed-soil nitrogen pathways |
| `emep-eea-2023-guidebook` | method_factor | EEA, EMEP/EEA Air Pollutant Emission Inventory Guidebook 2023 | agricultural ammonia context |
| `ipcc-2006-stationary-combustion` | method_factor | IPCC 2006 Guidelines, Volume 2, Chapter 2 | curing combustion calculations |
| `iso-14044-2006` | standard | ISO 14044:2006 | allocation and disclosure |
| `mass-balance-identity` | method_factor | Conservation of mass for matched harvest, curing, and grading batches | batch calculations and validation |
| `reference-normalization-rule` | method_factor | PCR normalization: terminal reference output equals 1,000 kg | exact terminal range |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | This PCR, Sections 3, 6 and 8: measured net mass at the same state and gate is its own normalization denominator, giving a mass ratio of 1; handoff measurement adds no physical processing. | Same-stage and handoff measurement identities; a definition, not an observed yield, empirical default or external publication. |
