---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.hop-cones
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Hop cones

## 1. Scope and Applicability

This PCR covers whole hop cones from establishment of a perennial managed hop yard through the declared farm-gate hand-off. It includes yard establishment, crop management, harvest, cone separation, cleaning and grading. The normal route may end with accepted wet cones. Drying is included only when the declared hand-off is dried whole cones and the farm or included foreground operator controls it.

The managed object is female *Humulus lupulus* trained on a support system. Manual selective picking and mechanical whole-bine harvest are alternative implementations of the harvest activity. Their topology, energy, collected material and chaff differ, so a dataset shall identify the route and shall not combine mutually exclusive operations without measured weights. Pelletizing, milling, extraction, brewing, merchant storage, downstream packaging and post-gate transport are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.hop-cones |
| classification_refs | CPC 3.0:01659 Hop cones; mapping relation: exact |
| covered_products | Accepted whole hop cones at farm gate, in wet/fresh state or route-declared dried whole-cone state |
| excluded_products | Pellets, powders, extracts, oils, brewed products, plants for propagation, shoots, leaves, bines and roots |
| representative_product | Marketable whole hop cones from a managed perennial hop yard |
| production_route | Perennial production, harvest, cone separation and grading; manual and mechanical harvest coexist as declared alternatives; drying is conditional |
| market_state | Accepted wet cones for immediate use, or dried whole cones only when drying is explicitly included |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted route-declared farm-gate hop cones |
| How much | 1 kg net mass |
| How well | Whole cones meeting the reported acceptance specification, excluding leaves, stems, chaff and rejected cones |
| How long or cycle | One declared harvest within a model that attributes establishment and shared assets over the evidenced productive life |
| reference_flow_link | reference_product_at_declared_handoff |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Hop cones |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | wet or dried whole-cone state; moisture or dry-matter basis and test method; cultivar; harvest route; harvest date or campaign; geography; acceptance grade; farm-gate hand-off; drying inclusion |

All qualifiers are mandatory. The reference is accepted cone mass in the declared state, not standing crop, whole bines, harvester mixture, chaff, rejects or dry matter.

Each foreground dataset must explicitly select one actual route, declared gate, product state and output row. Reconcile the selected terminal route with `reference_product_at_declared_handoff`; normalize that handoff output to the reference quantity and retain preceding-stage outputs as measured transfers. Raw weighing, mass reconciliation and lot traceability requirements continue to apply.

The sole reference output is `reference_product_at_declared_handoff`, receiving the selected actual route product at the declared gate. Existing route-output ids identify the source and physical state; they are no longer individually fixed to the reference quantity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Reference output | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Measure net accepted cone mass after grading; tare containers and exclude leaves, stems, chaff and rejects. |
| `moisture_state` | Wet and dried routes | Mass fraction or dry-matter fraction | kg/kg or % | Record sampling and test method and time; do not convert states without lot-specific moisture fractions. |
| `area_period_conversion` | Yard inventory | Mass or service per occupied area and period | stated unit/ha/year | Link every record to yard area, crop year and lifecycle phase before normalization to accepted output. |
| `drying_reconciliation` | Conditional drying | Mass | kg | Reconcile wet input, dried accepted output, rejects and water removed on one batch basis. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Prepared agricultural land at hop-yard establishment, with planting material, infrastructure, nutrients, water, crop-protection products and energy crossing as inputs |
| starting_condition_role | Start of the foreground perennial hop-yard system |
| product_classification_scope | CPC 3.0:01659 whole hop cones |
| recursive_input_rule | Purchased hop cones are separate upstream Product inputs and never relabelled own-farm production; planting rhizomes or plants are planting material, not cone reference flow |
| upstream_dataset_requirement | Traceable upstream datasets for planting material, infrastructure materials, energy, water, nutrient and crop-protection products, resolved to concrete UUIDs during dataset construction |
| disclosure | Yard location and area, establishment year, phases represented, cultivar, trellis and irrigation configuration, harvest route, wet/dried hand-off, drying ownership, reporting period and excluded capital items |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_perennial_yard` | Yard production | Include establishment, planting, trellis/support and irrigation infrastructure, crop management and field emissions; link each item to establishment, productive, replacement or termination periods. | `cornell-hop-yard-2017`; `cordella-hop-lca-2026` |
| `boundary_harvest_separate` | Harvest | Model harvest independently because it removes the output from perennial production and manual and mechanical routes create different collected states and burdens. | `uf-ifas-hop-harvest-2019` |
| `boundary_conditioning` | Separation and grading | Include cone separation, leaf and chaff removal, grading and immediate breathable handling. | `uf-ifas-hop-harvest-2019`; `penn-state-hop-production` |
| `boundary_wet_route` | Wet route | End at accepted graded wet cones; exclude drying, kiln assets and subsequent storage. | `penn-state-hop-production` |
| `boundary_dried_route` | Dried route | Include drying only for an explicitly declared dried whole-cone hand-off controlled by the foreground; record pre-state, moisture, energy, loss and post-state. | `cornell-hop-yard-2017` |
| `boundary_rejects` | Grading and drying | Separate accepted, downgraded, single-pass rework, rejected and chaff states and document every destination. | `penn-state-hop-production` |
| `boundary_downstream` | All routes | Exclude pelletizing, extraction, brewing, merchant storage, downstream packaging and post-gate transport. | `penn-state-hop-production` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `yard_production` | Hop-yard establishment and perennial production | required | All routes | Establish and manage female hop plants and deliver mature cone-bearing crop to harvest | Occupied hectare and crop year reconciled to accepted output over the attribution window |
| `harvest_capture` | Harvest and capture | required | All routes | Remove cones or cone-bearing bines and create a lot-indexed collected state | Harvest input and collected mixture by lot or campaign |
| `grading_handoff` | Cone separation, cleaning, grading and wet hand-off | required | All routes | Separate cones and classify accepted, downgraded, rework, reject and chaff states | Lot mass balance |
| `conditional_drying` | Whole-cone drying and stabilization | conditional | Dried whole-cone hand-off only | Stabilize accepted wet cones and hand off dried whole cones | Batch wet input, energy, water removed and dry outputs |
| declared_reference_handoff | Product Measurement at Declared Handoff | required |  | foreground | reference_product_at_declared_handoff |

### Process: Hop-yard establishment and perennial production (`yard_production`)

This seasonal process is indexed by yard and crop year. Establishment, immature, productive, replacement and termination phases remain distinguishable.

#### Inputs

##### Product flows

Required asset inventory: record every actual pole, wire, anchor, support, irrigation asset, installation and replacement separately by its concrete material and measured bill of materials. Allocate each asset once over its documented service life and all served crops and processes. Do not treat planting stock as a proxy for infrastructure.

###### Female hop nursery plants (`establishment_infrastructure`)

Record Female hop nursery plants only when this material crosses the declared process boundary. Retain lot, physical state, composition where relevant, and actual destination. Record other materials independently rather than treating this card as a selector or material bundle. Attribute establishment and replacement only across the serviced production periods; established stands without such an event do not receive an invented input.
Raw activity or stage basis: Per 1 kg accepted route-declared farm-gate hop cones over the declared productive-life scenario.

- Selected flow: Female hop nursery plants
- Flow property / unit: Mass / kg
- Amount rule: Measured net quantity of Female hop nursery plants, reconciled to the linked lot and process balance, then normalized once to the declared reference output; retain moisture and any density conversion evidence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_yard_assets`
- Sources: `cornell-hop-yard-2017`; `cordella-hop-lca-2026`

###### Fertilizer, urea input (`agricultural_nutrient_supply`)

Include this conditional card only when Fertilizer, urea is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, urea
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, urea used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per occupied hectare and crop year, then normalized to accepted output for the same attributed periods.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_inputs`

###### Fertilizer, monoammonium phosphate input (`agricultural_nutrient_supply_monoammonium_phosphate`)

Include this conditional card only when Fertilizer, monoammonium phosphate is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, monoammonium phosphate
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, monoammonium phosphate used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per occupied hectare and crop year, then normalized to accepted output for the same attributed periods.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_inputs`

###### Fertilizer, potassium chloride input (`agricultural_nutrient_supply_potassium_chloride`)

Include this conditional card only when Fertilizer, potassium chloride is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, potassium chloride
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, potassium chloride used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per occupied hectare and crop year, then normalized to accepted output for the same attributed periods.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_inputs`

###### Cattle manure, as applied input (`agricultural_nutrient_supply_cattle_manure`)

Include this conditional card only when Cattle manure, as applied is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Cattle manure, as applied
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Cattle manure, as applied used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per occupied hectare and crop year, then normalized to accepted output for the same attributed periods.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_inputs`

###### Agricultural limestone input (`agricultural_nutrient_supply_agricultural_limestone`)

Include this conditional card only when Agricultural limestone is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Agricultural limestone
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Agricultural limestone used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per occupied hectare and crop year, then normalized to accepted output for the same attributed periods.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_nutrient_inputs`

###### Irrigation water (`irrigation_water`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Amount rule: Meter or calculate delivered water by block and date; rainfall is not a supplied Product flow.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per occupied hectare and irrigation week, then normalized to crop-year accepted output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yard_operations`
- Sources: `penn-state-hop-production`
- Range: Source-supported weekly irrigation context
  - Range role: Typical range (`typical_range`)
  - Lower: 254
  - Upper: 508
  - Unit: m3/ha/week
  - Basis: 1 to 2 inches delivered over one hectare during an irrigation week
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `penn-state-hop-production`

Required crop-protection records: before completing the foreground package, enumerate every actually applied formulated product separately, retaining trade name, active ingredient, salt or chemical form, concentration, density where needed, application quantity, date and treated area. Select one physically specific product identity per exchange. Derive active-substance releases separately by substance and receiving compartment. Missing formulation identity is a completeness gap; do not replace it with a generic pesticide, invented example, or assumed zero.

###### Electricity, medium voltage input (`field_energy`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per occupied hectare and crop year, then normalized to accepted output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yard_operations`

###### Diesel fuel input (`field_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per occupied hectare and crop year, then normalized to accepted output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_yard_operations`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Mature cone-bearing crop delivered to harvest (`mature_crop_handoff`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Mature cone-bearing bines or selectively picked cones at the harvest interface
- Flow property / unit: Mass / kg
- Amount rule: Measure harvested wet material consistently with the route and link it to yard, cultivar and lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
Raw activity or stage basis: Per 1 kg accepted route-declared farm-gate hop cones.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_balance`
- Sources: `uf-ifas-hop-harvest-2019`
- Range: Provisional crop hand-off ratio
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 50
  - Unit: kg wet harvested material/kg accepted hop cones
  - Basis: material crossing the harvest interface per 1 kg accepted output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Field residues and uncollected loss (`field_residues_losses`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Prunings, leaves, spent bines and cones left in field or otherwise not collected
- Flow property / unit: Mass / kg
- Amount rule: Record each state and destination separately and exclude it from accepted product.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per 1 kg accepted route-declared farm-gate hop cones.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_balance`
- Range: Provisional residue-and-loss screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kg wet residue/kg accepted hop cones
  - Basis: reported residues and losses per 1 kg accepted output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Elementary flows

###### Nitrous oxide to air (`direct_field_emissions`)

Conditional one-material exchange: include Nitrous oxide to air only when the actual route and records establish its use or release. Other products, fuels, waste materials, or emitted species require separate atomic rows with independent quantity, state and identity. No use is inferred from this example.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Measure or calculate only Nitrous oxide to air for this process and period using route-specific records; do not combine other species or carriers.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per occupied hectare and crop year, then normalized to accepted output.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_field_emissions`

### Process: Harvest and capture (`harvest_capture`)

Manual field picking, indoor manual picking and mechanical stripping are alternative lot-indexed instances. Inputs, outputs, cleaning and changeover events are assigned to the actual instance once.

#### Inputs

##### Product flows

###### Electricity, medium voltage (`harvest_energy`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: Per kg material delivered to separation.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_operations`
- Sources: `uf-ifas-hop-harvest-2019`

###### Diesel fuel (`harvest_energy_diesel`)

Include this exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: Per kg material delivered to separation.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured Diesel fuel supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_harvest_operations`
- Sources: `uf-ifas-hop-harvest-2019`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected harvest mixture (`collected_harvest_mixture`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Selectively picked wet cones or mechanically collected mixture of cones, leaves and stems
- Flow property / unit: Mass / kg
- Amount rule: Weigh before separation and declare the physical state and harvest route.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
Raw activity or stage basis: Per 1 kg accepted route-declared farm-gate hop cones.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest_balance`
- Sources: `uf-ifas-hop-harvest-2019`
- Range: Provisional collected-mixture ratio
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 30
  - Unit: kg wet mixture/kg accepted hop cones
  - Basis: collected material delivered to separation per 1 kg accepted output
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Harvest losses and incidental material (`harvest_losses`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Material lost or removed during cutting, lowering, movement or picking before the separation hand-off
- Flow property / unit: Mass / kg
- Amount rule: Reconcile harvest input and collected output and record destination or on-field retention.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
Raw activity or stage basis: Per kg harvest input.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest_balance`
- Range: Provisional harvest-loss fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg harvest input
  - Basis: loss and incidental material divided by harvest input mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Cone separation, cleaning, grading and wet hand-off (`grading_handoff`)

The incoming state is the declared harvest output. Every output is accepted wet cones, downgraded cones with a destination, a single-pass rework return, rejected cones, or chaff/residue sent to a stated route.

#### Inputs

##### Product flows

###### Electricity, medium voltage (`separation_energy`)

Conditional one-material exchange: include Electricity, medium voltage only when the actual route and records establish its use or release. Other products, fuels, waste materials, or emitted species require separate atomic rows with independent quantity, state and identity. No use is inferred from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measure or calculate only Electricity, medium voltage for this process and period using route-specific records; do not combine other species or carriers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per kg separation input.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_batch`

###### Diesel fuel (`separation_energy_diesel`)

Conditional one-material exchange: include Diesel fuel only when the actual route and records establish its use or release. Other products, fuels, waste materials, or emitted species require separate atomic rows with independent quantity, state and identity. No use is inferred from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measure or calculate only Diesel fuel for this process and period using route-specific records; do not combine other species or carriers.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per kg separation input.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_batch`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted wet hop cones (`accepted_wet_cones`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Hop cones `17e491b0-4419-4898-8a8b-c67b0e035470`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Raw output measurement and reconciliation: Weigh net accepted wet cones after grading; this is the reference output for the wet route and input to drying for the dried route.

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per 1 kg accepted wet hop cones.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_batch`
- Sources: `penn-state-hop-production`
- Range: Same-stage output measurement reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg net accepted output of this stage
  - Basis: same-stage numerator and denominator measurement consistency; not a stage yield or fixed ratio to the final reference output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Downgraded or reworkable cones (`downgraded_cones`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Off-spec whole cones with a documented downgrade, recovery or single-pass rework destination
- Flow property / unit: Mass / kg
- Amount rule: Weigh by disposition; link rework to the producing lot and do not count it accepted before successful regrading.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per kg separation input.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_batch`
- Range: Provisional downgrade-and-rework fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg separation input
  - Basis: downgraded or reworkable cone mass divided by separation input mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Chaff and rejected cones (`chaff_rejects`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Leaves, stems, chaff and cones rejected after grading
- Flow property / unit: Mass / kg
- Amount rule: Weigh chaff and rejected cones separately and record field return, recovery, treatment or disposal destination; exclude all from accepted output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
Raw activity or stage basis: Per kg separation input.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grading_batch`
- Sources: `penn-state-hop-production`
- Range: Provisional chaff-and-reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.95
  - Unit: kg/kg separation input
  - Basis: combined chaff and rejected cone mass divided by separation input mass, with components still recorded separately
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Whole-cone drying and stabilization (`conditional_drying`)

This node is inactive for the wet route. Its usable input is accepted wet cones and its stabilized hand-off is accepted dried whole cones. Energy, cleaning and shared dryer burdens are assigned once to the actual batch or service period.

#### Inputs

##### Product flows

###### Accepted wet cones for drying (`wet_cones_for_drying`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Hop cones `17e491b0-4419-4898-8a8b-c67b0e035470`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Weigh the input and test lot moisture or dry matter immediately before drying.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per 1 kg initial cone dry matter.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Sources: `cornell-hop-yard-2017`
- Range: Source-supported pre-drying wet-mass ratio
  - Range role: Typical range (`typical_range`)
  - Lower: 3.85
  - Upper: 5
  - Unit: kg wet cones/kg initial cone dry matter
  - Basis: harvested cones at 20 to 26 percent dry matter before drying
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `cornell-hop-yard-2017`

###### Electricity, medium voltage input (`drying_energy`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per kg accepted dried whole hop cones.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`

###### Diesel fuel input (`drying_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per kg accepted dried whole hop cones.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted dried whole hop cones (`accepted_dried_cones`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Dried whole hop cones
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Raw output measurement and reconciliation: Weigh accepted whole cones after drying and final grading at declared moisture; this is the reference output only for the dried route.

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: Per 1 kg accepted dried whole hop cones.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Sources: `cornell-hop-yard-2017`
- Range: Same-stage output measurement reconciliation
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg net accepted output of this stage
  - Basis: same-stage numerator and denominator measurement consistency; not a stage yield or fixed ratio to the final reference output
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

Identity applicability: Verify the concrete identity against the selected actual species/organ, sowing or commodity use, fresh/cured/dried and shell state, grade, provider and declared gate, with Mass/kg support. This PCR retains the semantic route and measurement definition; it does not assert that one fixed UUID covers all alternative states. A fresh-state flow cannot automatically bind a cured/dried output, an ambiguous nut/kernel flow cannot prove both states, and commodity seed cannot establish seed-for-sowing identity. Preserve a verified compatible existing binding only for its supported state; otherwise keep the UUID explicitly unresolved until detail-confirmed. Do not change the product boundary, quantity or route to force a match.

##### Waste flows

###### Drying rejects (`drying_rejects`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Cones or fragments rejected after drying with declared destination
- Flow property / unit: Mass / kg
- Amount rule: Weigh by batch and exclude from accepted output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: Per kg wet cones entering drying.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_drying_batch`
- Range: Provisional drying-reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg wet cones entering drying
  - Basis: dry reject mass divided by wet input mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Water removed during drying (`drying_water_to_air`)

This card records the named flow where it crosses the stated process boundary and keeps its quantity linked to the declared lot, period or route.


- Selected flow: Water emitted to air from cone moisture during drying
- Flow property / unit: Mass / kg water
- Amount rule: Determine supported evaporation on a closed water-mass control volume: incoming material water + actual added water + opening water stock - water in all accepted/co-product/reject/residue exits - separate liquid discharge/exports - closing water stock. Use measured wet mass times wet-basis moisture for each material stream, and compatible density for liquid volumes. Internal recirculation cancels. Retain actual rain/rewetting where relevant; total fresh/dry mass difference is not all water. Independently support all terms and the evaporation pathway; investigate an unexplained or negative balance rather than force it into a vapour release or clip it to zero. Keep water quantities distinct from dry-solids loss and other volatiles. Attribute and normalize the evidenced water release once using the original matched final reference.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per kg wet cones entering drying.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_drying_batch`
- Sources: `mass-balance-identity`; `cornell-hop-yard-2017`
- Range: Physical moisture-loss fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg water/kg wet cones entering drying
  - Basis: water removed divided by wet input mass
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`


### Process: Product Measurement at the Declared Handoff (`declared_reference_handoff`)
This node records the actual product handoff at the existing system boundary for reconciliation and reference-quantity normalization. It adds no physical processing and does not presume drying, cooling, storage, packaging or transport. Each data package declares one actual route, one terminal product state, moisture or dry-matter basis, and gate. Feed only the accepted product delivered by that route at that gate into this node; do not add other routes as extra inputs. Record co-products separately and apply Section 7. Count preceding inputs, losses and emissions once. Normalize using the measured accepted net mass at the handoff; this measurement node changes neither mass, yield nor allocation.
#### Inputs
##### Product flows
###### Actual route product at handoff (`actual_route_product_for_handoff`)
Record the accepted product delivered by the actual terminal route and reconcile it with handoff weighing and lot records.
- Selected flow: Hop cones
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
- Selected flow: Hop cones
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
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
| `allocation_no_co_product_default` | Production | Accepted cones are the only reference product. Residues, chaff, rejects and field losses receive no avoided burden unless a documented valuable output requires justified allocation. |  |
| `allocation_productive_life` | Perennial phases | Aggregate establishment, immature, productive, replacement and termination records over the declared scenario and divide by accepted output from the same periods; do not assign establishment twice. | `cordella-hop-lca-2026` |
| `allocation_shared_infrastructure` | Shared assets | Link trellis, irrigation, harvest and dryer assets to every consuming node and service period; attribute once by serviced area-time, measured use or documented capacity-time. | `cordella-hop-lca-2026` |
| `allocation_batches` | Harvest, grading and drying | Assign direct records to actual lots; allocate start-up, cleaning and changeover once by measured use, processed mass or capacity-time. |  |
| `allocation_rework_rejects` | Off-spec states | Retain burdens through the producing node. A single rework loop receives incremental burdens and is not a second accepted output; every boundary exit and credit needs a destination and method. |  |
| `allocation_route_exclusivity` | Wet and dried routes | Select one reference route. The wet route excludes drying; the dried route includes the wet-cone chain once and drying once. | `penn-state-hop-production` |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Inventory completeness: conditional named cards are examples of individual exchanges, not an exhaustive recipe or a requirement to use those products. Before completing a foreground package, enumerate every actual planting stock, nutrient, crop-protection formulation, asset material, operating service, carrier, packaging material, waste stream and applicable elementary substance separately, using its physical identity, state, native property/unit, origin or receiving compartment, and measured or method-calculated quantity. Missing identity or quantity remains a completeness gap, never an assumed zero. Preserve the actual lot and phase basis; do not sum intermediate transfers as additional final output or duplicate burdens included in purchased services.

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yard_assets` | `yard_production` | establishment, planting and shared assets | invoices, maps, bills and replacement logs | yard_id; area; phase; cultivar; material_uuid; count; mass; installation_year; replacement_year; service_area; consuming_nodes; service_life | Physical inventory linked to mapped blocks; Raw aggregation and attribution: Attribute once across service area and periods | count; kg; ha; year | Each installation or replacement | Full declared scenario | Asset and serviced blocks | per declared reference flow | Dated invoices, drawings, logs and photos |
| `cp_nutrient_inputs` | `yard_production` | all nutrient products | purchase and application records | product_uuid; name; product_mass; nutrient_analysis; dry_matter; date; block; method; treated_area | Collect each actual product/formulation separately, retain its own atomic input card, physical product mass, composition, supplier, application event and native unit. Reconcile stocks and actual applications, derive nutrients analytically without duplicate product exchange, and attribute/normalize each supported quantity once through matched accepted final output. | kg product; kg nutrient; ha | Every application | Every represented year | Treated block | per declared reference flow | Invoice, label and calibrated application log |
| `cp_yard_operations` | `yard_production` | water, crop protection, canopy inputs and field energy | meter, application, fuel and operation logs | date; block; input_uuid; active_ingredient; quantity; unit; water_volume; equipment; operation; runtime | Meter or calibrated application record; Raw aggregation and attribution: Sum by concrete input and year, never unlike units | m3; kg; L; kWh; MJ; h | Every operation | Every represented year | Block and equipment | per declared reference flow | Meter calibration, invoices and logs |
| `cp_field_emissions` | `yard_production` | direct emissions | calculation inputs | input identity; nutrient or active amount; soil; weather; irrigation; incorporation; method; compartment | Apply declared substance-specific method; Raw aggregation and attribution: Calculate by substance and compartment | kg substance/ha/year | Each application and annual calculation | Every represented year | Treated block | per declared reference flow | Complete calculation sheet and method/version |
| `cp_harvest_balance` | `yard_production`; `harvest_capture` | hand-off, collected mixture, residues and losses | lot tickets and scale logs | lot_id; yard_id; cultivar; route; input_mass; collected_mass; residue_mass; loss; destination; timestamps | Calibrated weighing or documented reconciliation; Raw aggregation and attribution: Reconcile input with unique outputs, residues and losses | kg wet mass | Every lot | Every harvest | Yard and lot | per declared reference flow | Calibration and chain of custody |
| `cp_harvest_operations` | `harvest_capture` | energy, cleaning and changeover | fuel, meter and machine logs | lot_id; route; machine; carrier_uuid; quantity; runtime; event | Meter or carrier issue linked to run; Raw aggregation and attribution: Assign shared event once | L; kWh; MJ; h | Every run and event | Every harvest | Machine and lot | per declared reference flow | Meter and run logs |
| `cp_grading_batch` | `grading_handoff` | all grade states and energy | lot, scale, grade and meter records | lot_id; input_mass; accepted_mass; downgraded_mass; rework_mass; reject_mass; chaff_mass; destination; moisture; carrier_uuid; energy | Calibrated weighing, destination coding and meter record; Raw aggregation and attribution: Reconcile all unique states; do not double-count returns | kg; %; MJ | Every lot and rework pass | Every harvest | Lot and equipment | per declared reference flow | Calibration, grade sheet and receipts |
| `cp_drying_batch` | `conditional_drying` | wet input, moisture, energy, dried outputs and water | batch sheet, scales, moisture tests and meters | batch_id; lot_id; wet_mass; initial_moisture; test_method; carrier_uuid; energy; temperature; duration; dried_mass; final_moisture; reject_mass ; all input/output water including rejects/residues; actual added/rain water; separate liquid exports; opening/closing water stock; moisture and density; supported evaporation| Weigh, sample moisture and meter energy by batch; Raw aggregation and attribution: Close dry-matter and total-mass balance; assign shared energy once | kg; %; MJ; °C; h | Every batch | Every dried-route harvest | Batch and dryer | per declared reference flow | Calibrations and validated moisture records |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | handoff weighing and acceptance records | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | Use calibrated scales or traceable weighing records; reconcile the actual terminal-operation handoff lot, accepted net mass, product state and moisture; exclude packaging tare and do not sum preceding-stage quantities. | kg | each handoff lot | declared reporting period | declared handoff gate | per declared reference flow | calibration or weighing tickets, acceptance and lot traceability |
| `cp_phase1_environment_coverage` | yard_production | managed environmental coverage by actual node | site/activity/method ledger | actual production nodes; soil/substrate route; climate/soil; nutrient product mass and composition; residue fate/N; relevant mineralisation/organic-soil/excreta activity; method/tier/equation/version; pathway factors and units; lime/urea; actual fuels; substance/compartment; supplier coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_productive_life` | Establishment and assets | Sum attributed phase burdens across the scenario and divide by cumulative accepted mass from the same area and periods. | phase, asset, area, period and accepted-output records | burden/kg accepted cones | `cordella-hop-lca-2026` |
| `calc_route_yield` | Crop year and route | Accepted farm-gate mass divided by occupied area; report state and moisture. | accepted mass; area; state; moisture | kg/ha/year | `penn-state-hop-production` |
| `calc_grading_balance` | Harvest and grading | input minus unique accepted, downgraded, rejected, chaff and loss states; rework returns are transfers. | all lot masses and state codes | closure mass and ratio | `mass-balance-identity` |
| `calc_drying_water` | Drying | Determine supported evaporation on a closed water-mass control volume: incoming material water + actual added water + opening water stock - water in all accepted/co-product/reject/residue exits - separate liquid discharge/exports - closing water stock. Use measured wet mass times wet-basis moisture for each material stream, and compatible density for liquid volumes. Internal recirculation cancels. Retain actual rain/rewetting where relevant; total fresh/dry mass difference is not all water. Independently support all terms and the evaporation pathway; investigate an unexplained or negative balance rather than force it into a vapour release or clip it to zero. Keep water quantities distinct from dry-solids loss and other volatiles. Attribute and normalize the evidenced water release once using the original matched final reference. | cp_drying_batch; wet mass/moisture of all material streams, actual water additions/liquid exports, opening/closing water stocks and supported evaporation | kg water to air | `mass-balance-identity` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_field_emissions`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | actual managed-production nodes | For the actual owned managed-production node(s), require an applicability ledger for direct soil N2O, volatilisation/deposition-derived indirect N2O, leaching/runoff-derived indirect N2O, NH3/NOx and nutrient losses, plus actual liming/urea-use CO2. Primary calculation precedence is a representative pathway measurement, then a validated site/national method applicable to the crop, soil and management; otherwise use the compatible 2006 IPCC/2019-refined managed-soil equations and climate/input-specific factor selection for N2O and lime/urea CO2. Retain the exact edition, equation, tier, activity and factor units, climate and management applicability; no universal dose or emission factor is prescribed. Non-soil/protected routes need a method valid for their actual medium; do not force soil factors onto an inapplicable route. Use the same period/field N ledger for synthetic and organic additions, residues, actual relevant mineralisation/organic-soil and excreta pathways; demonstrate absent pathways rather than infer zero. Calculate direct and each indirect component separately, then assign each once to matching existing or new concrete cards; never add a total to its components. Convert N2O-N to molecular N2O by 44/28 once. NH3, NOx and nutrient/pesticide loss require an applicable measured or documented substance/fate model; total N/P or an unexplained balance residual is not a compound release. Keep actual receiving compartments and molecular versus elemental/reporting bases explicit; indirect formation does not remove the same N from the source ledger twice. Include actual local combustion releases separately using fuel-specific combustion-only methods; purchased electricity/heat/services retain upstream coverage once. Add one identity-specific exchange only for a supported release and reuse an existing matching card, with verified UUID or explicit unresolved identity. Missing applicable method/activity/factor/identity blocks completeness; it is not a justified zero. Attribute raw activity/release totals and normalize once to the matched accepted reference output. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference | `review-ipcc-soils-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference product | Preserve cultivar, state, grade, moisture, harvest date and hand-off with the fixed UUID. | Lot specification |
| `dq_temporal` | Perennial system | Cover the declared establishment and productive-life scenario or identify extrapolated years and replacement assumptions. | Multi-year records |
| `dq_completeness` | Inventory | Include establishment, nutrients, water, crop protection, field energy, infrastructure, emissions, harvest, rejects and route-conditional drying. | Process/protocol matrix |
| `dq_measurement` | Mass, water and energy | Use calibrated instruments where available and disclose estimation, sampling and uncertainty. | Calibration and calculations |
| `dq_route` | Alternatives | Keep manual/mechanical harvest and wet/dried hand-offs separate unless evidence-based weights are supplied. | Route records |
| `dq_flow_resolution` | Inputs and emissions | Resolve actual Product inputs to verified UUIDs and retain substance and compartment specificity for elementary flows. | Resolution record |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | Reference flow | Verify the concrete identity against the selected actual species/organ, sowing or commodity use, fresh/cured/dried and shell state, grade, provider and declared gate, with Mass/kg support. This PCR retains the semantic route and measurement definition; it does not assert that one fixed UUID covers all alternative states. A fresh-state flow cannot automatically bind a cured/dried output, an ambiguous nut/kernel flow cannot prove both states, and commodity seed cannot establish seed-for-sowing identity. Preserve a verified compatible existing binding only for its supported state; otherwise keep the UUID explicitly unresolved until detail-confirmed. Do not change the product boundary, quantity or route to force a match. |  |
| `validate_route_exclusivity` | Route | Require exactly one wet or dried hand-off; wet has no drying inventory, dried has one linked drying node and declared parent activity and delta. | `penn-state-hop-production` |
| `validate_periods` | Perennial attribution | Require phase treatment, cumulative output, attribution period and evidence and reject double attribution. | `cordella-hop-lca-2026` |
| `validate_shared_assets` | Shared infrastructure | Require asset identity, consuming nodes and periods, service boundary, attribution driver and duplicate-burden check. |  |
| `validate_nutrient_cardinality` | Every process | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |
| `validate_batch_linkage` | Harvest, grading and drying | Require lot/batch IDs for inputs, outputs, energy, cleaning and changeover and reject shared burdens counted twice. |  |
| `validate_mass_balance` | Harvest, grading and drying | Reconcile accepted, downgraded, rework, rejected, chaff, loss and moisture states within disclosed uncertainty. | `mass-balance-identity` |
| `validate_reject_routing` | Off-spec material | Give every downgrade, rework, recovery or discard state one producing node and documented next state; exclude unresolved rejects from accepted output. |  |
| `validate_drying` | Dried route | Require initial/final moisture, test method, batch mass, energy and acceptance state. The 20–26% initial dry matter and 8–10% target moisture are QA context, not universal limits. | `cornell-hop-yard-2017` |
| `validate_ranges` | All flow cards | Check each supplied range for complete bounds, unit, basis, evidence and bilingual alignment. Require compatible quantitative evidence for any enforced limit. If no supported bound exists, retain measured quantities and explicitly report range screening unavailable; do not invent a range or declare that check complete. Investigate deviations rather than overwrite measured values. | |
| `validate_exclusions` | Boundary | Reject pelletizing, extraction, brewing, merchant storage, downstream packaging and post-gate transport. | `penn-state-hop-production` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production dataset for route-declared farm-gate hop cones |
| downstream_use | Secondary or background use after matching state, geography, cultivar, time and boundary |
| allowed_use | Attributional modelling of wet or dried whole cones at farm gate; comparison only with compatible state and perennial attribution |
| excluded_use | Pellets, extracts, brewed products, planting material or systems requiring excluded downstream processing |
| required_metadata | PCR id/version; fixed flow UUID; geography; yard area and establishment year; attribution period; cultivar; harvest route; state; moisture method/result; grade; infrastructure treatment; years and sources |
| required_quality_disclosure | Foreground coverage, estimation share, missing years, productive-life assumptions, UUID resolution, mass-balance closure, calibration, route weights and reasoned estimates |
| update_trigger | Material change in yard configuration, cultivar, yield, nutrient or irrigation regime, harvest technology, infrastructure life, drying, hand-off state, specification or evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `uf-ifas-hop-harvest-2019` | extension_guidance | University of Florida IFAS Extension, Campbell and Pearson, *Harvest Techniques for Hops (Humulus lupulus)*, ENH1314/EP578, https://doi.org/10.32473/edis-ep578-219 | Perennial/trellis context, harvest routes, separation, incidental material and immediate handling |
| `penn-state-hop-production` | extension_guidance | Penn State Extension, *Hop Production*, https://extension.psu.edu/hop-production | Wet/dried routes, irrigation, nutrient management, maturity and leaf/chaff removal |
| `cornell-hop-yard-2017` | extension_guidance | Cornell Hops, Weldon, Gent and Gadoury, *Five considerations before ever planting your first hop*, November 2017, https://hops.cals.cornell.edu/grower-resources/five-considerations-before-ever-planting-your-first-hop/ | Permanent yard, establishment, shared equipment, initial dry matter and drying endpoint context |
| `cordella-hop-lca-2026` | literature | Cordella et al., *Uncovering the environmental burden of hops: a spatially resolved agricultural LCA for modern beer supply chains*, International Journal of Life Cycle Assessment (2026), https://doi.org/10.1007/s11367-026-02651-y | Farm-gate process coverage, establishment, trellis, field operations, drying and multi-year attribution |
| `mass-balance-identity` | method_factor | Conservation-of-mass identity applied to lot and batch records | Harvest, grading and drying reconciliation and water calculation |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | This PCR, Sections 3, 6 and 8: measured net mass at the same state and gate is its own normalization denominator, giving a mass ratio of 1; handoff measurement adds no physical processing. | Same-stage and handoff measurement identities; a definition, not an observed yield, empirical default or external publication. |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct/indirect N2O and lime/urea CO2 method context; factors require actual applicability and site activity, not a product default. |
