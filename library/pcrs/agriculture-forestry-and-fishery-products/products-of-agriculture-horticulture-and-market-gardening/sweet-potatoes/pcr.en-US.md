---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sweet-potatoes
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sweet potatoes


## 1. Scope and Applicability

This PCR covers managed production, harvest, careful handling, soil removal, grading, and optional curing or storage of fresh harvested *Ipomoea batatas* storage roots delivered at a farm or primary-conditioning hand-off. Declare uncured/cured state, damage grade, soil-removal state, moisture or as-received basis, and hand-off. Planting slips, vines, and roots for planting cannot be the reference product. Starch, chips, flour, puree, noodles, and other processed products are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sweet-potatoes |
| classification_refs | CPC 3.0: 01530 Sweet potatoes; mapping relation: narrower |
| covered_products | Fresh harvested *Ipomoea batatas* storage roots, uncured or cured, at farm or primary-conditioning hand-off |
| excluded_products | Planting material as reference product; starch, chips, flour, puree, noodles, and other processed products |
| representative_product | Marketable fresh storage roots on an as-received mass basis |
| production_route | Managed field production is the parent; harvest independently removes roots; primary conditioning removes soil and grades; curing/storage is optional preservation. Each technology route delta is separately declared. |
| market_state | Fresh unprocessed storage roots with curing, damage, soil-removal, moisture-basis, and hand-off state declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Fresh harvested *Ipomoea batatas* storage roots |
| How much | 1,000 kg as received |
| How well | Accepted grade with uncured/cured, damage, and soil-removal state declared |
| How long or cycle | One crop cycle and primary conditioning; add curing/storage duration when applicable |
| reference_flow_link | reference_product_at_declared_handoff |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Sweet potatoes |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species = *Ipomoea batatas*; storage root; uncured or cured; damage grade; soil-removal state; moisture or as-received basis; farm or primary-conditioning hand-off; crop cycle; storage duration when applicable |

Each foreground dataset must explicitly select one actual route, declared gate, product state and output row. Reconcile the selected terminal route with `reference_product_at_declared_handoff`; normalize that handoff output to the reference quantity and retain preceding-stage outputs as measured transfers. Raw weighing, mass reconciliation and lot traceability requirements continue to apply.

The sole reference output is `reference_product_at_declared_handoff`, receiving the selected actual route product at the declared gate. Existing route-output ids identify the source and physical state; they are no longer individually fixed to the reference quantity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference and internal root states | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Record gross as-received mass and separately record soil, rejects, and moisture basis. |
| `water_volume` | Irrigation, washing, wastewater | Volume or Mass with declared density | m3 or kg | Separate supplied, recirculated, and discharged water and report measurement points. |
| `energy_carrier` | Machinery, electricity, heat, storage utilities | Carrier-appropriate property | MJ, kWh, kg, or L | Preserve actual carriers and conversion basis; do not merge mobile fuel, stationary heat, and electricity. |
| `condition_mass_balance` | Harvest, grading, curing, storage | Mass | kg | Reconcile roots in, accepted roots, downgraded roots, rejects, soil/solids, and measured loss per event or lot. |

## 5. System Boundary

The boundary begins with the prepared managed field for the declared crop cycle and includes planting, crop management, harvest, on-farm movement, soil removal, grading, and hand-off. Include curing/storage only for a cured or stored delivery.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Managed field with prior crop, land preparation, soil, planting-material source, and rainfed/irrigated state declared |
| starting_condition_role | Starting condition for managed biological production |
| product_classification_scope | Fresh *Ipomoea batatas* storage roots under CPC 3.0 01530 |
| recursive_input_rule | Same-category roots entering from outside require an upstream product dataset with state and gate qualifiers; do not recreate them recursively. |
| upstream_dataset_requirement | Planting material, energy, water, nutrients, transport, and treatment services require compatible upstream datasets selected from concrete foreground records. |
| disclosure | Declare cultivar, location, cycle, route, harvest mode, curing/storage, damage, soil removal, moisture basis, and hand-off. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | Field production | Include crop-cycle management inputs, field operations, intended roots, residues, and losses. | `fao-sweet-potato-postharvest` |
| `boundary_harvest` | Harvest | Independently record removal from managed crop to fresh-root hand-off and distinguish soil, vines, damage, and uncollected losses. | `fao-sweet-potato-postharvest` |
| `boundary_conditioning` | Primary conditioning | Include careful handling, soil removal, washing when used, grading, and every grade and residual destination. | `fao-sweet-potato-postharvest` |
| `boundary_curing` | Curing/storage | Include preservation inputs, conditions, duration, and losses only for cured or stored delivery. | `fao-sweet-potato-postharvest` |
| `boundary_processed_exclusion` | Product scope | Exclude processed foods and planting material as reference product. | `fao-sweet-potato-postharvest` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `field_production` | Managed sweet-potato field production | required | Every package / 每个数据包 | Produces managed crop and standing roots / 生产管理作物和田间储藏根 | kg accepted roots / kg 合格根 |
| `harvest_capture` | Harvest and collection | required | Every package / 每个数据包 | Removes roots and hands them to conditioning / 移出储藏根并交接初级整理 | kg accepted roots / kg 合格根 |
| `primary_conditioning` | Soil removal, grading, and primary hand-off | required | Every package / 每个数据包 | Creates accepted, downgraded, rejected, soil, solid, and wastewater states / 形成合格、降级、剔除、土壤、固体和废水状态 | kg accepted roots / kg 合格根 |
| `curing_storage` | Curing and storage | conditional | Only cured or stored hand-off / 仅熟化或储藏后交接 | Preserves roots and creates cured hand-off / 保存储藏根并形成熟化交接 | kg accepted roots / kg 合格根 |
| declared_reference_handoff | Product Measurement at Declared Handoff | required |  | foreground | reference_product_at_declared_handoff |

Index each crop cycle, harvest event, conditioning run, and curing/storage lot. Manual/mechanized, rainfed/irrigated, dry/wet soil removal, and progressive/one-time harvest are route deltas requiring separate topology, inventory, calculation, and validation evidence.

### Process: Managed sweet-potato field production (`field_production`)

#### Inputs

##### Product flows

###### Fertilizer, urea input (`nutrient_supply`)

Include this conditional card only when Fertilizer, urea is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, urea
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, urea used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_field_cycle_records`

###### Fertilizer, monoammonium phosphate input (`nutrient_supply_monoammonium_phosphate`)

Include this conditional card only when Fertilizer, monoammonium phosphate is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, monoammonium phosphate
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, monoammonium phosphate used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_field_cycle_records`

###### Fertilizer, potassium chloride input (`nutrient_supply_potassium_chloride`)

Include this conditional card only when Fertilizer, potassium chloride is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, potassium chloride
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, potassium chloride used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_field_cycle_records`

###### Cattle manure, as applied input (`nutrient_supply_cattle_manure`)

Include this conditional card only when Cattle manure, as applied is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Cattle manure, as applied
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Cattle manure, as applied used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_field_cycle_records`

###### Agricultural limestone input (`nutrient_supply_agricultural_limestone`)

Include this conditional card only when Agricultural limestone is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Agricultural limestone
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Agricultural limestone used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_field_cycle_records`

###### Irrigation water supply (`irrigation_water`)

Water delivered for irrigation; rainfall remains site context crosses the declared process boundary only under the stated condition.

- Selected flow: Water delivered for irrigation; rainfall remains site context
- Flow property / unit: Declared compatible property / m3
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_field_cycle_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: m3
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage (`field_energy`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_field_cycle_records`

###### Diesel fuel (`field_energy_diesel`)

Include this exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured Diesel fuel supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_field_cycle_records`

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Standing storage roots transferred to harvest (`standing_roots_internal`)

Internal harvest-ready root state crosses the declared process boundary only under the stated condition.

- Selected flow: Internal harvest-ready root state
- Flow property / unit: Declared compatible property / kg
- Identity status: internal: foreground graph link only
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: crop cycle (`crop_cycle`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_cycle_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 1000000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

###### Field residues and uncollected root losses (`field_residue_loss`)

Vines, leaves, damaged or uncollected roots by destination crosses the declared process boundary only under the stated condition.

- Selected flow: Vines, leaves, damaged or uncollected roots by destination
- Flow property / unit: Declared compatible property / kg
- Identity status: internal/deferred: resolve only recorded boundary-exit destinations
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_cycle_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 3000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows

###### Dinitrogen monoxide, to air (`field_emissions`)

Record Dinitrogen monoxide, to air as one substance and receiving-medium exchange only when measurement or the selected applicable method establishes this pathway. Retain the actual receiving compartment and verify the precise flow identity. Other substances require separate exchanges; this card does not imply a default release.
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Selected flow: Dinitrogen monoxide, to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Measured or method-calculated mass of Dinitrogen monoxide, to air, retaining activity data, factors, substance basis and receiving compartment; normalize once to the declared reference output. If reported as N2O-N, convert to N2O once using 44/28.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_cycle_records`

###### Ammonia, to air (`field_emissions_nh3`)

Record Ammonia, to air as one substance and receiving-medium exchange only when measurement or the selected applicable method establishes this pathway. Retain the actual receiving compartment and verify the precise flow identity. Other substances require separate exchanges; this card does not imply a default release.
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Selected flow: Ammonia, to air
- Flow property / unit: Mass / kg NH3
- Amount rule: Measured or method-calculated mass of Ammonia, to air, retaining activity data, factors, substance basis and receiving compartment; normalize once to the declared reference output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_cycle_records`

###### Nitrogen monoxide, to air (`field_emissions_no`)

Record Nitrogen monoxide, to air as one substance and receiving-medium exchange only when measurement or the selected applicable method establishes this pathway. Retain the actual receiving compartment and verify the precise flow identity. Other substances require separate exchanges; this card does not imply a default release.
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg NO
- Amount rule: Measured or method-calculated mass of Nitrogen monoxide, to air, retaining activity data, factors, substance basis and receiving compartment; normalize once to the declared reference output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_cycle_records`

###### Nitrate, to water (`field_emissions_nitrate`)

Record Nitrate, to water as one substance and receiving-medium exchange only when measurement or the selected applicable method establishes this pathway. Retain the actual receiving compartment and verify the precise flow identity. Other substances require separate exchanges; this card does not imply a default release.
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Selected flow: Nitrate, to water
- Flow property / unit: Mass / kg NO3-
- Amount rule: Measured or method-calculated mass of Nitrate, to water, retaining activity data, factors, substance basis and receiving compartment; normalize once to the declared reference output. If reported as nitrate-N, convert to NO3- once using 62/14.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_cycle_records`

###### Carbon dioxide, fossil, to air (`field_emissions_co2_fossil`)

Record Carbon dioxide, fossil, to air as one substance and receiving-medium exchange only when measurement or the selected applicable method establishes this pathway. Retain the actual receiving compartment and verify the precise flow identity. Other substances require separate exchanges; this card does not imply a default release.
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg CO2
- Amount rule: Measured or method-calculated mass of Carbon dioxide, fossil, to air, retaining activity data, factors, substance basis and receiving compartment; normalize once to the declared reference output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_field_cycle_records`

### Process: Harvest and collection (`harvest_capture`)

#### Inputs

##### Product flows

###### Standing roots from field production (`standing_roots_harvest_input`)

Internal root state linked to the crop cycle crosses the declared process boundary only under the stated condition.

- Selected flow: Internal root state linked to the crop cycle
- Flow property / unit: Declared compatible property / kg
- Identity status: internal: paired foreground graph link
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: process output (`process_output`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_event_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage (`harvest_energy`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_event_records`

###### Diesel fuel (`harvest_energy_diesel`)

Include this exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured Diesel fuel supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_event_records`

###### On-farm road movement service (`harvest_transport`)

Separately modelled movement to conditioning crosses the declared process boundary only under the stated condition.

- Selected flow: Separately modelled movement to conditioning
- Flow property / unit: Declared compatible property / tkm
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: route specific (`route_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: transport service (`transport_service`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_harvest_event_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: tkm
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: transport service (`transport_service`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Freshly harvested roots transferred to conditioning (`harvested_roots_internal`)

Fresh lifted roots before soil removal and grading crosses the declared process boundary only under the stated condition.

- Selected flow: Fresh lifted roots before soil removal and grading
- Flow property / unit: Declared compatible property / kg
- Identity status: internal: paired foreground graph link
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: process output (`process_output`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_event_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

###### Harvest damage and uncollected losses (`harvest_rejects`)

Cut, bruised, broken, or uncollected roots by destination crosses the declared process boundary only under the stated condition.

- Selected flow: Cut, bruised, broken, or uncollected roots by destination
- Flow property / unit: Declared compatible property / kg
- Identity status: internal/deferred: destination determines product, recovery, or waste identity
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: process output (`process_output`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_event_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows


### Process: Soil removal, grading, and primary hand-off (`primary_conditioning`)

#### Inputs

##### Product flows

###### Freshly harvested roots from harvest (`harvested_roots_conditioning_input`)

Internal harvested roots with damage and soil state crosses the declared process boundary only under the stated condition.

- Selected flow: Internal harvested roots with damage and soil state
- Flow property / unit: Declared compatible property / kg
- Identity status: internal: paired foreground graph link
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: process output (`process_output`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_run_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Washing water supply (`conditioning_water`)

Process water when wet cleaning is used crosses the declared process boundary only under the stated condition.

- Selected flow: Process water when wet cleaning is used
- Flow property / unit: Declared compatible property / m3
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: process output (`process_output`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_conditioning_run_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Conditioning electricity supply (`conditioning_electricity`)

Electricity for washing, conveying, sorting, grading, or drainage crosses the declared process boundary only under the stated condition.

- Selected flow: Electricity for washing, conveying, sorting, grading, or drainage
- Flow property / unit: Declared compatible property / kWh
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: process output (`process_output`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_conditioning_run_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 500
  - Unit: kWh
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Wastewater treatment service (`conditioning_wastewater_treatment`)

External treatment service for discharged wash water crosses the declared process boundary only under the stated condition.

- Selected flow: External treatment service for discharged wash water
- Flow property / unit: Declared compatible property / m3
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: process output (`process_output`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_conditioning_run_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: m3
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Accepted uncured fresh sweet-potato roots (`fresh_reference_product`)

Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057` crosses the declared process boundary only under the stated condition.

- Selected flow: Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Identity status: fixed: detail-confirmed CPC 01530 Product flow with Mass at farm gate
Raw output measurement and reconciliation: measured or calculated amount linked to the declared process event and destination

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: fixed value (`fixed_value`)
- Specificity: product specific (`product_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Fixed quantitative-reference amount
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Downgraded roots by declared destination (`downgraded_roots`)

Edible immediate-use, feed, rework, or recovery grades crosses the declared process boundary only under the stated condition.

- Selected flow: Edible immediate-use, feed, rework, or recovery grades
- Flow property / unit: Declared compatible property / kg
- Identity status: internal/deferred: resolve external identity only after destination is known
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: process output (`process_output`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_run_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

###### Sweet-potato root trimming rejects (`conditioning_residuals`)

Use this conditional card for exactly one actual material, product or waste stream in the declared process. Confirm its identity, physical state, period and destination from route records; instantiate a separate card for every other distinct stream. The template does not assert use or generation.

- Selected flow: Sweet-potato root trimming rejects
- Flow property / unit: Mass / kg
- Identity status: unresolved until material and destination are verified
- Amount rule: Measure or calculate only this one identified stream for the declared process and period, with its own unit and destination; do not combine other products or waste states.
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: process output (`process_output`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_run_records`
- Sources:

###### Conditioning wastewater effluent (`conditioning_residuals_wastewater`)

Use this conditional card for exactly one actual material, product or waste stream in the declared process. Confirm its identity, physical state, period and destination from route records; instantiate a separate card for every other distinct stream. The template does not assert use or generation.

- Selected flow: Conditioning wastewater effluent; exact route identity unresolved
- Flow property / unit: Volume / m3 effluent
- Identity status: unresolved until material and destination are verified
- Amount rule: Measure or calculate only this one identified stream for the declared process and period, with its own unit and destination; do not combine other products or waste states.
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: process output (`process_output`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning_run_records`
- Sources:

##### Elementary flows


### Process: Curing and storage (`curing_storage`)

#### Inputs

##### Product flows

###### Accepted uncured roots entering curing or storage (`uncured_roots_curing_input`)

Internal accepted state from conditioning crosses the declared process boundary only under the stated condition.

- Selected flow: Internal accepted state from conditioning
- Flow property / unit: Declared compatible property / kg
- Identity status: internal: cured-route foreground link
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: storage duration (`storage_duration`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_curing_storage_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1000
  - Upper: 2000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage (`curing_electricity`)

Conditional one-material exchange: include Electricity, medium voltage only when the actual route and records establish its use or release. Other products, fuels, waste materials, or emitted species require separate atomic rows with independent quantity, state and identity. No use is inferred from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measure or calculate only Electricity, medium voltage for this process and period using route-specific records; do not combine other species or carriers.
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: storage duration (`storage_duration`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_curing_storage_records`

###### Purchased district heat (`curing_heat`)

Include this exchange only when Purchased district heat is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Selected flow: Purchased district heat
- Flow property / unit: Energy / MJ
- Amount rule: Measured Purchased district heat supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_curing_storage_records`

##### Waste flows


##### Elementary flows


#### Outputs

##### Product flows

###### Accepted cured fresh sweet-potato roots (`cured_reference_product`)

Sweet potatoes `03d4145f-cc49-4e7b-8c45-d6ce90a90057` crosses the declared process boundary only under the stated condition.

- Selected flow: Cured sweet-potato storage roots, declared actual state
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Identity status: fixed: detail-confirmed CPC 01530 Product flow with Mass at farm gate
Raw output measurement and reconciliation: measured or calculated amount linked to the declared process event and destination

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: fixed value (`fixed_value`)
- Specificity: product specific (`product_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: reference flow (`reference_flow`)
- Evidence kind: method formula (`method_formula`)
- Sources: `mass-balance-identity`
- Range: Fixed quantitative-reference amount
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`


Identity applicability: Verify the concrete identity against the selected actual species/organ, sowing or commodity use, fresh/cured/dried and shell state, grade, provider and declared gate, with Mass/kg support. This PCR retains the semantic route and measurement definition; it does not assert that one fixed UUID covers all alternative states. A fresh-state flow cannot automatically bind a cured/dried output, an ambiguous nut/kernel flow cannot prove both states, and commodity seed cannot establish seed-for-sowing identity. Preserve a verified compatible existing binding only for its supported state; otherwise keep the UUID explicitly unresolved until detail-confirmed. Do not change the product boundary, quantity or route to force a match.

##### Waste flows

###### Curing and storage rejects (`curing_storage_rejects`)

Decayed, sprouted, chilled, or severely damaged roots crosses the declared process boundary only under the stated condition.

- Selected flow: Decayed, sprouted, chilled, or severely damaged roots
- Flow property / unit: Declared compatible property / kg
- Identity status: internal/deferred: recorded destination determines external identity
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: calculated value (`calculated_value`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: storage duration (`storage_duration`)
- Evidence kind: calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_curing_storage_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows

###### Measured evaporative moisture loss to air (`curing_moisture_loss`)

Water loss isolated by inlet/outlet and moisture measurements crosses the declared process boundary only under the stated condition.

- Selected flow: Water loss isolated by inlet/outlet and moisture measurements
- Flow property / unit: Declared compatible property / kg water
- Identity status: unresolved: resolve water-to-air compartment only after separate measurement
- Amount rule: measured or calculated amount linked to the declared process event and destination
- Value mode: foreground record (`foreground_record`)
- Specificity: site specific (`site_specific`)
Raw activity or stage basis: per 1,000 kg accepted reference roots or the stated linked event.

- Normalization basis: per declared reference flow
- Basis kind: storage duration (`storage_duration`)
- Evidence kind: collected record (`collected_record`)
- Collection protocol: `cp_curing_storage_records`
- Sources:
- Range: Provisional QA screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg water
  - Basis: per 1,000 kg accepted reference roots or the stated linked event; replace provisional bounds with reviewed evidence
  - Basis kind: storage duration (`storage_duration`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)



### Process: Product Measurement at the Declared Handoff (`declared_reference_handoff`)
This node records the actual product handoff at the existing system boundary for reconciliation and reference-quantity normalization. It adds no physical processing and does not presume drying, cooling, storage, packaging or transport. Each data package declares one actual route, one terminal product state, moisture or dry-matter basis, and gate. Feed only the accepted product delivered by that route at that gate into this node; do not add other routes as extra inputs. Record co-products separately and apply Section 7. Count preceding inputs, losses and emissions once. Normalize using the measured accepted net mass at the handoff; this measurement node changes neither mass, yield nor allocation.
#### Inputs
##### Product flows
###### Actual route product at handoff (`actual_route_product_for_handoff`)
Record the accepted product delivered by the actual terminal route and reconcile it with handoff weighing and lot records.
- Selected flow: Sweet potatoes
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
- Selected flow: Sweet potatoes
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
| `allocation_subdivide` | All nodes | Prefer subdivision by crop cycle, harvest event, conditioning run, and storage lot. | `mass-balance-identity` |
| `allocation_rejects` | Rejects, rework, and downgraded roots | Retain original production burdens, add rework burdens once, and exclude rejects from accepted output. | `mass-balance-identity` |
| `allocation_shared_runs` | Shared runs | Allocate only indivisible records by a disclosed physical driver and prove conservation without double counting. | `mass-balance-identity` |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Inventory completeness: conditional named cards are examples of individual exchanges, not an exhaustive recipe or a requirement to use those products. Before completing a foreground package, enumerate every actual planting stock, nutrient, crop-protection formulation, asset material, operating service, carrier, packaging material, waste stream and applicable elementary substance separately, using its physical identity, state, native property/unit, origin or receiving compartment, and measured or method-calculated quantity. Missing identity or quantity remains a completeness gap, never an assumed zero. Preserve the actual lot and phase basis; do not sum intermediate transfers as additional final output or duplicate burdens included in purchased services.

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field_cycle_records` | `field_production` | all field cards | logs, invoices, meters, field measurements | field, cultivar, cycle, planting material, nutrients, water, energy, roots, residues, losses, emission inputs | reconcile by field and cycle; Raw aggregation and attribution: normalize after linking harvests | declared units | each activity | complete cycle | farm and field | per declared reference flow | invoices, checks, field sheets, analyses |
| `cp_harvest_event_records` | `harvest_capture` | all harvest cards | scales, equipment, route, loss survey | cycle, event, mode, mass, damage, energy, distance, load, destination | record each event; Raw aggregation and attribution: sum without transport/machinery duplication | declared units | each harvest | all linked harvests | field and event | per declared reference flow | scale, equipment, hand-off |
| `cp_conditioning_run_records` | `primary_conditioning` | all conditioning cards | run, scale, meters, grade, destination tickets | inlet, soil removal, water, electricity, grades, residuals, wastewater, treatment | mass-balance each run; Raw aggregation and attribution: reconcile states and destinations | declared units | each run | all reference runs | site and line | per declared reference flow | calibration, grade protocol, tickets |
| `cp_curing_storage_records` | `curing_storage` | all curing/storage cards | lot, temperature/RH, meters, inspection | inlet, conditions, duration, energy, outlet, rejects, moisture | trace loading to hand-off; Raw aggregation and attribution: reconcile inlet, accepted, rejects, water loss | declared units | each lot and periodic readings | full duration | store and lot | per declared reference flow | sensors, meters, traceability |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | handoff weighing and acceptance records | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | Use calibrated scales or traceable weighing records; reconcile the actual terminal-operation handoff lot, accepted net mass, product state and moisture; exclude packaging tare and do not sum preceding-stage quantities. | kg | each handoff lot | declared reporting period | declared handoff gate | per declared reference flow | calibration or weighing tickets, acceptance and lot traceability |
| `cp_phase1_environment_coverage` | field_production | managed environmental coverage by actual node | site/activity/method ledger | actual production nodes; soil/substrate route; climate/soil; nutrient product mass and composition; residue fate/N; relevant mineralisation/organic-soil/excreta activity; method/tier/equation/version; pathway factors and units; lime/urea; actual fuels; substance/compartment; supplier coverage; site and actual managed nodes; area; dated occupation intervals; co-users; establishment/immature history; actual prior/current land classes and transformation dates/areas; carbon-method coverage; upstream land coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalize_reference` | all inventory | recorded amount × 1,000 kg / accepted reference-root mass on same basis | amount; reference mass | normalized amount | `mass-balance-identity` |
| `calc_transport_work` | transport | tkm = transported tonnes × loaded kilometres | load; distance | tkm | `mass-balance-identity` |
| `calc_root_mass_balance` | nodes | inlet minus accepted, downgraded, rejected, solids, samples, and separately measured water loss | linked mass records | unexplained difference | `mass-balance-identity` |
| `calc_dry_mass_conversion` | dry-matter comparison | dry mass = as-received mass × (1 − moisture fraction) | mass; moisture | dry mass | `mass-balance-identity` |
| `planting_material_identity_and_fate` | `field_production` | For the original planting_material collection role at this operation, identify the actual physical form, species/material, composition, state and supply/treatment boundary before creating exchanges. Each seed lot, transplant, crown, cutting, larval stage, formulation, coating, preservative or separated residue actually used/generated requires its own concrete card where relevant to this role; these examples are alternatives, not a required recipe. Retain existing collection records and route-specific source evidence. Count-based planting records require measured or supplier-supported mass-per-unit when matched to a mass-based provider; retain count and mass as linked attributes rather than two purchases. Do not merge separate husk/shell or separate agents. A real mixed stream requires composition and recipient evidence and is counted once. Before completeness, record every applicable amount and native unit, link a compatible verified UUID or explicitly unresolved identity, preserve stock/return attribution, and normalize the attributable raw quantity once to the accepted reference output. Missing records are not zero; aggregate ranges are not individual-input defaults. | `cp_field_cycle_records` | Identity-specific exchanges and reconciled activity records |  |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_field_cycle_records`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | actual managed-production nodes | For the actual owned managed-production node(s), require an applicability ledger for direct soil N2O, volatilisation/deposition-derived indirect N2O, leaching/runoff-derived indirect N2O, NH3/NOx and nutrient losses, plus actual liming/urea-use CO2. Primary calculation precedence is a representative pathway measurement, then a validated site/national method applicable to the crop, soil and management; otherwise use the compatible 2006 IPCC/2019-refined managed-soil equations and climate/input-specific factor selection for N2O and lime/urea CO2. Retain the exact edition, equation, tier, activity and factor units, climate and management applicability; no universal dose or emission factor is prescribed. Non-soil/protected routes need a method valid for their actual medium; do not force soil factors onto an inapplicable route. Use the same period/field N ledger for synthetic and organic additions, residues, actual relevant mineralisation/organic-soil and excreta pathways; demonstrate absent pathways rather than infer zero. Calculate direct and each indirect component separately, then assign each once to matching existing or new concrete cards; never add a total to its components. Convert N2O-N to molecular N2O by 44/28 once. NH3, NOx and nutrient/pesticide loss require an applicable measured or documented substance/fate model; total N/P or an unexplained balance residual is not a compound release. Keep actual receiving compartments and molecular versus elemental/reporting bases explicit; indirect formation does not remove the same N from the source ledger twice. Include actual local combustion releases separately using fuel-specific combustion-only methods; purchased electricity/heat/services retain upstream coverage once. Add one identity-specific exchange only for a supported release and reuse an existing matching card, with verified UUID or explicit unresolved identity. Missing applicable method/activity/factor/identity blocks completeness; it is not a justified zero. Attribute raw activity/release totals and normalize once to the matched accepted reference output. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | actual managed-production nodes | For each actual owned managed-production site, collect the occupied area and dated occupation intervals, including attributable establishment/immature and production periods. Occupation is area multiplied by actual duration, converted explicitly to the selected area-time unit (1 ha = 10,000 m2; time in years); hectares per crop-cycle alone are not an area-time result without duration. Partition or take the union of overlapping establishment/management intervals so the same area-time is counted once, with shares across actual co-users summing to one. Record evidenced land transformation separately by actual from/to land class, event area and date under the declared land-use method; transformation has area units and is not added to occupation. Planting, continued occupation or missing prior-land data do not establish a transformation or zero transformation. Preserve actual historical-event attribution and carbon-stock/emission method coverage where applicable; no invented land conversion or generic carbon credit. Instantiate separate compatible elementary identities with verified UUIDs or explicit unresolved identities; attribute once and normalize to the matched final reference. Purchased completed biological inputs inherit compatible upstream land coverage once instead of duplicating it locally. Missing applicable land identity, area, duration or prior-state evidence remains a completeness gap; documented no transformation is a valid absence. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | reference product | Confirm species, storage-root use, cultivar, curing, damage, soil removal, moisture basis, and hand-off. | lot, inspection, hand-off |
| `dq_traceability` | process graph | Link crop cycles, harvest events, conditioning runs, and storage lots. | stable identifiers |
| `dq_completeness` | inventory | Cover material inputs, water, energy, root states, residues, losses, transport, treatment, and conditional utilities. | completeness reconciliation |
| `dq_route_delta` | alternative routes | Every topology, inventory, calculation, or validation delta needs current records. | route evidence matrix |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference flow | Verify the concrete identity against the selected actual species/organ, sowing or commodity use, fresh/cured/dried and shell state, grade, provider and declared gate, with Mass/kg support. This PCR retains the semantic route and measurement definition; it does not assert that one fixed UUID covers all alternative states. A fresh-state flow cannot automatically bind a cured/dried output, an ambiguous nut/kernel flow cannot prove both states, and commodity seed cannot establish seed-for-sowing identity. Preserve a verified compatible existing binding only for its supported state; otherwise keep the UUID explicitly unresolved until detail-confirmed. Do not change the product boundary, quantity or route to force a match. | `fao-sweet-potato-postharvest` |
| `validate_reference_uuid` | reference identity | Verify the concrete identity against the selected actual species/organ, sowing or commodity use, fresh/cured/dried and shell state, grade, provider and declared gate, with Mass/kg support. This PCR retains the semantic route and measurement definition; it does not assert that one fixed UUID covers all alternative states. A fresh-state flow cannot automatically bind a cured/dried output, an ambiguous nut/kernel flow cannot prove both states, and commodity seed cannot establish seed-for-sowing identity. Preserve a verified compatible existing binding only for its supported state; otherwise keep the UUID explicitly unresolved until detail-confirmed. Do not change the product boundary, quantity or route to force a match. |  |
| `validate_exclusions` | scope | Fail when planting material or any processed product is the reference product. | `fao-sweet-potato-postharvest` |
| `validate_graph_links` | process graph | Require complete cycle, harvest, conditioning, and storage-lot links. |  |
| `validate_rejects` | reject states | Require explicit downgrade, rework, recovery, or discard destinations and exclude rejects from accepted output. | `fao-sweet-potato-postharvest` |
| `validate_mass_balance` | nodes | Report residuals; never label total loss as water-to-air without separate moisture measurement. | `mass-balance-identity` |
| `validate_flow_resolution` | all cards | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |
| `validate_curing` | cured route | Require method, temperature, relative humidity, duration, and inlet/outlet state; omit the node for uncured route. | `fao-sweet-potato-postharvest` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production package for fresh sweet-potato storage roots |
| downstream_use | Generate processes and lifecycle models; secondary or background use when geography, route, state, and quality match |
| allowed_use | Fresh-root routes with compatible identity, cycle, curing, damage, soil removal, moisture basis, and hand-off |
| excluded_use | Planting-material production, processed products, undisclosed curing mixtures, or substitution for another root crop |
| required_metadata | Cultivar, geography, cycle/event/run/lot, route, irrigation, curing conditions, storage duration, damage, soil removal, moisture, hand-off, UUIDs, concrete flow identity verification, and resolution evidence |
| required_quality_disclosure | Period, coverage, measured/calculated shares, instruments, mass balances, route evidence, allocation, representativeness, and gaps |
| update_trigger | Material change to boundary, identity, concrete flow identity verification|

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-sweet-potato-postharvest` | official_guidance | FAO, *Prevention of post-harvest food losses: Sweet potato crop profile*, https://www.fao.org/4/t0073e/T0073E08.htm | Careful harvest, soil removal, damage grading, curing/storage, and boundary |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to linked inlet, output, residual, sample, and measured-moisture records | Normalization, reconciliation, dry-mass conversion, fixed reference amount |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | This PCR, Sections 3, 6 and 8: measured net mass at the same state and gate is its own normalization denominator, giving a mass ratio of 1; handoff measurement adds no physical processing. | Same-stage and handoff measurement identities; a definition, not an observed yield, empirical default or external publication. |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct/indirect N2O and lime/urea CO2 method context; factors require actual applicability and site activity, not a product default. |
