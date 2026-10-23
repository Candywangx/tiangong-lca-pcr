---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sunflower-seed
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Sunflower seed

## 1. Scope and Applicability

This PCR makes a foreground package for whole sunflower seed produced by a managed field crop and transferred at a declared point within the farm. It covers oilseed, confection/non-oil, and bird-food market classes as whole seed. The platform reference is “Production mix, in the farm” and “Production of sunflower seeds”. This does not establish an at-farm-gate, cleaned, dried, or graded state. Each package must record its real hand-off and all preceding on-farm operations. NDSU identifies distinct market types and field, harvest, drying and grading practices. [ndsu-sunflower-guide-2020]

Oil, meal, dehulled kernels, roasted seed, off-farm processing and transport are outside this record. Sowing-seed production needs its own verified output identity; a sowing-seed supply mix at farm input is not a harvested output. The proposed CPC relation is narrower than the whole leaf if it also includes seed for sowing. [unsd-cpc-3-2025]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.sunflower-seed |
| classification_refs | CPC 3.0 01445 Sunflower seed; `narrower` whole-commodity route; mapping relation: narrower |
| covered_products | Whole sunflower seed for oil, confection/food and bird-food markets at a documented in-farm hand-off |
| excluded_products | Sowing seed under an unverified output identity; oil, meal, kernels, roasted seed |
| representative_product | Whole harvested sunflower seed, actual accepted mass |
| production_route | Managed field crop; head/seed harvest and threshing; conditional on-farm first cleaning, grading, drying and storage |
| market_state | Market class, grade, foreign matter, moisture and hand-off are lot-specific rather than implied by the platform flow |

The managed crop is the production parent. Irrigated fields add water, pump energy and meter records to the rainfed field inventory; the two routes are mutually exclusive per field/period, though separately identified fields can be aggregated. First conditioning is the parent of natural-air and heated drying routes; these may be sequential for a lot only when separately logged. Heated drying changes energy and moisture-removal records. Oilseed and confection types are distinct market classes, not grades to pool without evidence. [ndsu-sunflower-guide-2020; ndsu-sunflower-drying-2022]

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Whole sunflower seed at the actual in-farm output hand-off |
| How much | 1 kg actual accepted whole-seed mass |
| How well | Declare oilseed, confection/non-oil or bird-food class, grade/acceptance rule, measured moisture and foreign matter; no inferred cleaning or storage grade |
| How long or cycle | Identified crop year, field and lot; every included conditioning run is traceable |
| reference_flow_link | reference_product_at_declared_handoff |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Sunflower seed; production mix “in the farm” |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | farm and field; crop year and lot; oilseed/confection/bird-food class; variety where known; measured harvest and hand-off moisture; grade and foreign matter; actual hand-off; harvest, cleaning, grading, drying and storage scope; irrigated or rainfed route |

Measurement basis qualifier: 1 kg actual mass; dry-mass or standardized-moisture quantities are separate declared calculations

Each foreground dataset must explicitly select one actual route, declared gate, product state and output row. Reconcile the selected terminal route with `reference_product_at_declared_handoff`; normalize that handoff output to the reference quantity and retain preceding-stage outputs as measured transfers. Raw weighing, mass reconciliation and lot traceability requirements continue to apply.

The sole reference output is `reference_product_at_declared_handoff`, receiving the selected actual route product at the declared gate. Existing route-output ids identify the source and physical state; they are no longer individually fixed to the reference quantity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | All seed state transfers | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Use weighed actual mass and moisture at each transfer; record conversion to dry solids separately. |
| `wet_dry_balance` | Drying | Mass | kg | Dry solids = wet mass × (1 − measured wet-basis moisture fraction); reconcile input and output dry solids with rejects. |
| `input_units` | Nutrients, energy and water | Appropriate measured property | kg, L, kWh or m3 | Keep original unit and document product-to-nutrient, fuel-to-energy, or water-volume conversions. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Pre-sowing field in a stated rotation and documented opening soil condition; identify purchased inputs and field operations from preparation through harvest |
| starting_condition_role | Crop establishment is the foreground start; purchased seed, fertilizer, crop protection, fuel and electricity carry upstream datasets |
| product_classification_scope | Whole commodity seed in the narrower CPC 01445 route, with oilseed and non-oil classes separated |
| recursive_input_rule | Purchased sunflower sowing seed is an upstream input; never recursively assign this output dataset to itself |
| upstream_dataset_requirement | Identify upstream supply datasets for sowing seed, nutrients, crop protection, fuel, electricity and services; disclose gaps |
| disclosure | Field and crop year, market class, actual in-farm hand-off, treatment and storage coverage, water route, residue fate |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `b_field` | `sunflower_cultivation` | Include seedbed preparation, planting, nutrient/protection management, irrigated water and pumping when practiced, and machinery up to mature heads ready for harvest. | ndsu-sunflower-guide-2020 |
| `b_harvest` | `sunflower_harvest` | Separate head/seed capture and threshing from standing crop production; record collected bulk seed, uncollected loss and incidental stalk/head material distinctly. | ndsu-sunflower-guide-2020 |
| `b_treatment` | `sunflower_cleaning`, `sunflower_grading`, `sunflower_drying` | Include first cleaning, sorting and stabilization only if actually performed before hand-off; log accepted, downgraded, reject, moisture-loss and storage states. | ndsu-sunflower-guide-2020; ndsu-sunflower-drying-2022 |
| `b_exit` | Final output | End at the declared in-farm whole-seed transfer. Exclude off-farm movement and oil/food processing; do not reinterpret “in the farm” as “at farm gate”. | ndsu-sunflower-guide-2020 |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `sunflower_cultivation` | Field crop management | required | Each field and crop year | Managed biological production; rainfed or irrigated | Field records per accepted kg |
| `sunflower_harvest` | Head and seed capture | required | Each harvest lot | Independent harvest and threshing | Collected seed and field loss |
| `sunflower_cleaning` | First cleaning | conditional | Performed before hand-off | Raw bulk to prepared whole seed | Inlet/outlet kg |
| `sunflower_grading` | Market-class sorting | conditional | Two or more quality/destination states are separated | Accepted, downgraded and rejected output hand-offs | kg by grade and fate |
| `sunflower_drying` | On-farm preservation | conditional | Drying or active storage occurs before hand-off | Usable wet seed to stable measured-moisture state | Moisture, mass and energy by run |
| declared_reference_handoff | Product Measurement at Declared Handoff | required |  | foreground | reference_product_at_declared_handoff |

Field and harvest are separate because harvest removes mature heads/seeds from the growing crop; first cleaning cannot be assumed to occur. Oilseed, confection and bird-food destinations require actual lot records. Continuous cleaners and dryers need operating periods, while field harvest and grade sorting need lot/run IDs. Changeovers, re-cleaning and sequential drying are recorded as linked runs; one input or output is counted once. [ndsu-sunflower-guide-2020; ndsu-sunflower-drying-2022]

### Process: Field crop management (`sunflower_cultivation`)

#### Inputs

##### Product flows

###### Sowing seed input (`sowing_seed_input`)

The sowing seed used to establish this field enters cultivation as a purchased or retained input.

- Selected flow: Verified actual sowing-seed product identity; never the commodity output UUID.
- Flow property / unit: Mass / kg
- Amount rule: Seed actually planted by field and event.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per field and accepted seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 50
  - Unit: kg seed/ha
  - Basis: one crop hectare; broad provisional mass screen across seed sizes and plant populations; use the measured seed lot
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Fertilizer, urea input (`sunflower_cultivation_agricultural_nutrient_inputs`)

Include this conditional card only when Fertilizer, urea is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, urea
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, urea used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per field and accepted seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`

###### Fertilizer, monoammonium phosphate input (`sunflower_cultivation_agricultural_nutrient_inputs_monoammonium_phosphate`)

Include this conditional card only when Fertilizer, monoammonium phosphate is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, monoammonium phosphate
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, monoammonium phosphate used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per field and accepted seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`

###### Fertilizer, potassium chloride input (`sunflower_cultivation_agricultural_nutrient_inputs_potassium_chloride`)

Include this conditional card only when Fertilizer, potassium chloride is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, potassium chloride
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, potassium chloride used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per field and accepted seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`

###### Cattle manure, as applied input (`sunflower_cultivation_agricultural_nutrient_inputs_cattle_manure`)

Include this conditional card only when Cattle manure, as applied is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Cattle manure, as applied
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Cattle manure, as applied used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per field and accepted seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`

###### Agricultural limestone input (`sunflower_cultivation_agricultural_nutrient_inputs_agricultural_limestone`)

Include this conditional card only when Agricultural limestone is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Agricultural limestone
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Agricultural limestone used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per field and accepted seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`

Required crop-protection records: before completing the foreground package, enumerate every actually applied formulated product separately, retaining trade name, active ingredient, salt or chemical form, concentration, density where needed, application quantity, date and treated area. Select one physically specific product identity per exchange. Derive active-substance releases separately by substance and receiving compartment. Missing formulation identity is a completeness gap; do not replace it with a generic pesticide, invented example, or assumed zero.

###### Irrigation water, groundwater input (`irrigation_water`)

Include this one exchange only when Irrigation water, groundwater is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Irrigation water, groundwater
- Flow property / unit: Volume / m3
- Amount rule: Measured quantity of Irrigation water, groundwater used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per field and accepted seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`

###### Diesel fuel input (`field_fuel`)

Include this one exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per field and accepted seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`

###### Electricity, medium voltage input (`field_electricity`)

Include this one exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per field and accepted seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_field`

##### Waste flows

No routine waste input; separately identify any recycled amendment.

##### Elementary flows

No fixed elementary input is assumed.

#### Outputs

##### Product flows

###### Mature heads in standing crop (`mature_heads`)

The mature standing crop is the biological hand-off to independent harvest.

- Selected flow: Internal biological state, not a sold seed UUID.
- Flow property / unit: Estimated seed mass / kg.
- Amount rule: Link field and crop year to the harvest lot; do not treat potential seed as market output.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per crop year..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg potential seed/ha
  - Basis: one crop hectare; provisional potential-seed screen before harvest loss, not marketed seed
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

Stalks and heads retained on the field are field residues; removed material needs a measured exit and fate.

##### Elementary flows

No elementary-flow exchange is fixed without a named emission species and a justified method or factor. Field-level records retain each candidate species, method source and calculation inputs; add a separate species-specific exchange only when verified.

### Process: Head and seed capture (`sunflower_harvest`)

#### Inputs

##### Product flows

###### Standing mature crop (`standing_crop_input`)

Mature heads pass from cultivation to the independent capture operation.

- Selected flow: Internal mature-head state, not a sold product.
- Flow property / unit: Mass / kg potential seed
- Amount rule: Link the producing field and crop year to the harvest lot.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per harvest lot..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg potential seed/ha
  - Basis: one crop hectare; provisional potential-seed screen before harvest loss, not marketed seed
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel fuel input (`harvest_fuel`)

Include this one exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per bulk seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`

###### Electricity, medium voltage input (`harvest_electricity`)

Include this one exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per bulk seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`

##### Waste flows

No routine waste input.

##### Elementary flows

No fixed elementary input.

#### Outputs

##### Product flows

###### Bulk threshed whole seed (`bulk_seed`)

Collected bulk seed leaves harvest before any unverified cleaning or grading.

- Selected flow: Internal harvested seed state before any claimed cleaning or grading.
- Flow property / unit: Mass / kg.
Raw output measurement and reconciliation: Weigh by field and lot; test moisture and foreign material.

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per harvest lot..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Broad provisional QA screen; replace with foreground records
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10000
  - Unit: kg raw seed/ha
  - Basis: one harvested hectare; provisional broad captured-seed screen before first conditioning, replace with scale records
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

Uncollected seed loss and stalk/head material retained on the field are recorded as field observations and residue fate in `cp_harvest`, not as an assumed waste exchange. If residue is physically removed, record the measured exit and independently classify its product or waste destination.

##### Elementary flows

No fixed elementary output.

### Process: First cleaning (`sunflower_cleaning`)

#### Inputs

##### Product flows

###### Bulk seed into first cleaner (`bulk_seed_cleaner_input`)

Collected bulk seed enters the first conditioning operation.

- Selected flow: Internal bulk whole-seed state.
- Flow property / unit: Mass / kg
- Amount rule: Weigh inlet seed and test moisture and foreign matter by run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per prepared seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clean`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage input (`cleaner_electricity`)

Include this one exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per prepared seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clean`

###### Diesel fuel input (`cleaner_fuel`)

Include this one exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per prepared seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clean`

##### Waste flows

No routine waste input.

##### Elementary flows

No fixed elementary input.

#### Outputs

##### Product flows

###### Prepared whole seed (`clean_seed`)

Prepared whole seed leaves the first cleaner for its documented next use.

- Selected flow: Internal cleaned whole-seed state, transferred to grading, drying or final in-farm hand-off.
- Flow property / unit: Mass / kg.
Raw output measurement and reconciliation: Weigh cleaned mass and record moisture and foreign matter.

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per cleaning run..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clean`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Screen-outs and dust (`clean_reject`)

Screen-outs leave the cleaner through a documented rework, downgrade or disposal route.

- Selected flow: Off-spec seed/debris by documented re-cleaning, downgraded sale or disposal fate.
- Flow property / unit: Mass / kg.
- Amount rule: Weigh or estimate removed material and link any return to a new run.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per cleaning run..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_clean`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

Report measured dust emission separately when relevant; do not equate all screen-outs with emitted dust.

### Process: Market-class sorting (`sunflower_grading`)

#### Inputs

##### Product flows

###### Whole seed into sorter (`grade_seed_input`)

The identified bulk or prepared seed lot enters market-class grading.

- Selected flow: Internal whole-seed state with known lot.
- Flow property / unit: Mass / kg
- Amount rule: Weigh inlet seed and retain its class and moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per grading run..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage input (`sorter_electricity`)

Include this one exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per graded seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`

##### Waste flows

No routine waste input.

##### Elementary flows

No fixed elementary input.

#### Outputs

##### Product flows

###### Accepted whole-seed grade (`accepted_seed`)

An accepted whole-seed grade leaves at the actual declared in-farm commodity hand-off.

- Selected flow: Sunflower seed `a62436d6-249c-4ac3-b5f4-653d0f277519` at the declared in-farm commodity hand-off.
- Flow property / unit: Mass / kg.
Raw output measurement and reconciliation: Weigh accepted oilseed, confection or bird-food class by actual grade, lot and moisture.

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per accepted output kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Downgraded saleable seed (`downgraded_seed`)

A separately saleable lower grade leaves for its recorded destination.

- Selected flow: Separate whole-seed product destination, not part of accepted reference mass.
- Flow property / unit: Mass / kg.
- Amount rule: Weigh each downgraded sale grade and document buyer or use.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per grading run..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Rejected seed (`grade_reject`)

Off-spec seed is held for a documented return, recovery or final waste exit.

- Selected flow: Off-spec lot with re-sort, downgrade, recovery or disposal path.
- Flow property / unit: Mass / kg.
- Amount rule: Weigh rejects and identify destination and linked follow-on run; only final rejected material is a waste exit.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per grading run..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_grade`
- Sources: `ndsu-sunflower-guide-2020`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

No fixed elementary output.

### Process: On-farm preservation (`sunflower_drying`)

#### Inputs

##### Product flows

###### Usable whole seed before drying (`wet_seed_input`)

Measured wet seed enters the bounded stabilization run.

- Selected flow: Internal whole-seed state with grade and lot identity.
- Flow property / unit: Mass / kg
- Amount rule: Weigh inlet mass and test wet-basis moisture.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per stabilized seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry`
- Sources: `ndsu-sunflower-drying-2022`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage input (`drying_fan_electricity`)

Include this one exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per stabilized seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry`

###### Diesel fuel input (`drying_heat_fuel`)

Include this one exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier, water source or material in a separate atomic row with its own verified or explicitly unresolved identity.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and declared period; record not applicable only when the actual route excludes it.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per stabilized seed kg..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry`

##### Waste flows

No routine waste input.

##### Elementary flows

Ambient air is a process medium; no fixed elementary quantity is imposed.

#### Outputs

##### Product flows

###### Stabilized whole seed (`dry_seed`)

Stabilized whole seed leaves with its measured moisture and declared hand-off.

- Selected flow: Whole seed at measured exit moisture and actual in-farm hand-off.
- Flow property / unit: Mass / kg.
Raw output measurement and reconciliation: Weigh output, test moisture and retain class/grade; do not infer a universal target moisture.

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per drying lot..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry`
- Sources: `ndsu-sunflower-drying-2022`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant material-transfer node; check actual moisture and any mixing before applying conservation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Spoiled or rejected material (`dry_reject`)

Spoiled or rejected seed leaves through an identified recovery or disposal path.

- Selected flow: Off-spec seed by actual recovery or disposal fate, distinct from water removal.
- Flow property / unit: Mass / kg.
- Amount rule: Weigh rejected seed and record whether reworked or discarded.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per drying lot..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_dry`
- Sources: `ndsu-sunflower-drying-2022`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Removed moisture (`drying_water`)

Water removed during drying is accounted separately from rejected seed.

- Selected flow: Water vapor only where required by the applicable inventory system.
- Flow property / unit: Mass / kg.
- Amount rule: Determine supported evaporation on a closed water-mass control volume: incoming material water + actual added water + opening water stock - water in all accepted/co-product/reject/residue exits - separate liquid discharge/exports - closing water stock. Use measured wet mass times wet-basis moisture for each material stream, and compatible density for liquid volumes. Internal recirculation cancels. Retain actual rain/rewetting where relevant; total fresh/dry mass difference is not all water. Independently support all terms and the evaporation pathway; investigate an unexplained or negative balance rather than force it into a vapour release or clip it to zero. Keep water quantities distinct from dry-solids loss and other volatiles. Attribute and normalize the evidenced water release once using the original matched final reference.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: Per drying lot..

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_dry`
- Sources: `ndsu-sunflower-drying-2022`
- Range: Mass-conservation QA check
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg linked incoming seed
  - Basis: per kg measured seed entering the relevant sorting or drying node; each reject, downgrade or moisture stream is a separate nonnegative part, sum must reconcile
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


### Process: Product Measurement at the Declared Handoff (`declared_reference_handoff`)
This node records the actual product handoff at the existing system boundary for reconciliation and reference-quantity normalization. It adds no physical processing and does not presume drying, cooling, storage, packaging or transport. Each data package declares one actual route, one terminal product state, moisture or dry-matter basis, and gate. Feed only the accepted product delivered by that route at that gate into this node; do not add other routes as extra inputs. Record co-products separately and apply Section 7. Count preceding inputs, losses and emissions once. Normalize using the measured accepted net mass at the handoff; this measurement node changes neither mass, yield nor allocation.
#### Inputs
##### Product flows
###### Actual route product at handoff (`actual_route_product_for_handoff`)
Record the accepted product delivered by the actual terminal route and reconcile it with handoff weighing and lot records.
- Selected flow: Sunflower seed; production mix “in the farm”
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
- Selected flow: Sunflower seed; production mix “in the farm”
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
| `a_field` | Cultivation and harvest | Attribute joint field/harvest burdens to collected seed when residues remain in the field. A physically removed and marketed stalk/head output needs measured mass and a disclosed allocation basis; do not automatically give it zero burden. | ndsu-sunflower-guide-2020 |
| `a_grade` | Cleaning and grading | Reconcile accepted, downgraded, reworked and waste mass. Directly assign metered separable work to its output run; disclose a consistent measured driver for truly shared burdens when more than one saleable output exists. | ndsu-sunflower-guide-2020 |
| `a_rework` | Reject return | Link reject/re-cleaning loops to their original and follow-on run; charge added work once and count the material as accepted only after successful recovery. | ndsu-sunflower-guide-2020 |
| `a_mode` | Field, batch and continuous runs | Attribute shared machinery, cleaning and changeover to logged field/lot/period by recorded time, throughput or other causal driver; no duplicate charge across sequential runs. | ndsu-sunflower-guide-2020 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Inventory completeness: conditional named cards are examples of individual exchanges, not an exhaustive recipe or a requirement to use those products. Before completing a foreground package, enumerate every actual planting stock, nutrient, crop-protection formulation, asset material, operating service, carrier, packaging material, waste stream and applicable elementary substance separately, using its physical identity, state, native property/unit, origin or receiving compartment, and measured or method-calculated quantity. Missing identity or quantity remains a completeness gap, never an assumed zero. Preserve the actual lot and phase basis; do not sum intermediate transfers as additional final output or duplicate burdens included in purchased services.

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


The quantity ranges on flow cards are review triggers before normalization, not inventory defaults or universal acceptance limits. Use actual field, lot and run records for amounts; investigate values outside provisional screens against route, region, units and measurement quality. Regional planting-rate examples are illustrative only.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_field` | `sunflower_cultivation` | Inputs and irrigation | Field, invoice, application and meter logs | field_id, area, year, seed_kg, product_kg, nutrient_kg, water_m3, fuel_L, kWh, emission_species, emission_method, factor_source, date | Reconcile applications with invoices and meter reads; Raw aggregation and attribution: Sum by field and link to harvested lots | ha, kg, m3, L, kWh | Each event | Full crop year | Each field | per declared reference flow | Receipts, meter records and calculation factors |
| `cp_harvest` | `sunflower_harvest` | Capture and loss | Combine, scale and field notes | field_id, lot_id, date, bulk_kg, moisture_pct, foreign_matter_pct, loss, residue_fate, fuel_L | Weigh lots and measure condition; Raw aggregation and attribution: Sum distinct lots; link downstream | kg, %, L | Each harvest lot | Harvest period | Field and machine run | per declared reference flow | Scale ticket, moisture test, field observation |
| `cp_clean` | `sunflower_cleaning` | Prepared seed and screen-outs | Cleaner run log | lot_id, run_id, inlet_kg, outlet_kg, reject_kg, moisture_pct, kWh, reject_fate | Weigh inlet/outlet and meter service; Raw aggregation and attribution: Reconcile mass and linked returns | kg, %, kWh | Each run | All in-boundary runs | Farm cleaner | per declared reference flow | Scale and meter log |
| `cp_grade` | `sunflower_grading` | Quality/destination states | Sorting and sale records | lot_id, run_id, class, grade, accepted_kg, downgraded_kg, reject_kg, destination, return_link | Weigh by state and destination; Raw aggregation and attribution: Balance distinct states; avoid duplicate returns | kg | Each run | All in-boundary runs | Farm sorter | per declared reference flow | Grade sheet, sale and reject tickets |
| `cp_dry` | `sunflower_drying` | Preservation and water loss | Bin/dryer and meter log | lot_id, run_id, method, inlet_kg, inlet_moisture, outlet_kg, outlet_moisture, reject_kg, fan_kWh, fuel_L, days ; all inlet/outlet material water including rejects/residues; actual added/rain water; separate liquid exports; opening/closing water stock; wet-basis moisture/density; supported evaporation and uncertainty| Weigh/test before and after; meter energy; Raw aggregation and attribution: Balance dry solids and sum sequential stages once | kg, %, kWh, L, day | Each run | All on-farm treatment before hand-off | Farm bin or dryer | per declared reference flow | Scale, moisture test and meter log |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | handoff weighing and acceptance records | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | Use calibrated scales or traceable weighing records; reconcile the actual terminal-operation handoff lot, accepted net mass, product state and moisture; exclude packaging tare and do not sum preceding-stage quantities. | kg | each handoff lot | declared reporting period | declared handoff gate | per declared reference flow | calibration or weighing tickets, acceptance and lot traceability |
| `cp_phase1_environment_coverage` | sunflower_cultivation | managed environmental coverage by actual node | site/activity/method ledger | site and actual managed nodes; area; dated occupation intervals; co-users; establishment/immature history; actual prior/current land classes and transformation dates/areas; carbon-method coverage; upstream land coverage ; actual production nodes; soil/substrate route; climate/soil; nutrient product mass and composition; residue fate/N; relevant mineralisation/organic-soil/excreta activity; method/tier/equation/version; pathway factors and units; lime/urea; actual fuels; substance/compartment; supplier coverage; site and actual managed nodes; area; dated occupation intervals; co-users; establishment/immature history; actual prior/current land classes and transformation dates/areas; carbon-method coverage; upstream land coverage| Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_norm` | All inventory | Divide distinct field-, lot- or run-linked quantities by actual accepted seed kg at the declared hand-off. | Raw amount; accepted kg; trace links | Per kg reference seed | ndsu-sunflower-guide-2020 |
| `c_dry` | Drying | Dry solids = wet mass × (1 − wet-basis moisture fraction); compare inlet and outlet plus reject dry solids before estimating evaporated water. | Mass and moisture on inlet, outlet and reject | Dry-solids residual and water loss | ndsu-sunflower-drying-2022 |
| `c_field_emissions` | Field emissions | Create a species-specific calculated exchange only when a named species, method and factor source are verified against field records; otherwise flag the exchange as unresolved. | Field records; species; method; factor source | Method-specific calculated exchange or unresolved finding | ndsu-sunflower-guide-2020 |
| `c_sort` | Cleaning and grading | Input mass = accepted + downgraded + rejected + measured loss, allowing separately measured moisture change. | Weigh and moisture records | Run mass residual | ndsu-sunflower-guide-2020 |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_land_coverage` | actual managed-production nodes | For each actual owned managed-production site, collect the occupied area and dated occupation intervals, including attributable establishment/immature and production periods. Occupation is area multiplied by actual duration, converted explicitly to the selected area-time unit (1 ha = 10,000 m2; time in years); hectares per crop-cycle alone are not an area-time result without duration. Partition or take the union of overlapping establishment/management intervals so the same area-time is counted once, with shares across actual co-users summing to one. Record evidenced land transformation separately by actual from/to land class, event area and date under the declared land-use method; transformation has area units and is not added to occupation. Planting, continued occupation or missing prior-land data do not establish a transformation or zero transformation. Preserve actual historical-event attribution and carbon-stock/emission method coverage where applicable; no invented land conversion or generic carbon credit. Instantiate separate compatible elementary identities with verified UUIDs or explicit unresolved identities; attribute once and normalize to the matched final reference. Purchased completed biological inputs inherit compatible upstream land coverage once instead of duplicating it locally. Missing applicable land identity, area, duration or prior-state evidence remains a completeness gap; documented no transformation is a valid absence. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference |  |
| `calc_managed_environment_coverage` | actual managed-production nodes | For the actual owned managed-production node(s), require an applicability ledger for direct soil N2O, volatilisation/deposition-derived indirect N2O, leaching/runoff-derived indirect N2O, NH3/NOx and nutrient losses, plus actual liming/urea-use CO2. Primary calculation precedence is a representative pathway measurement, then a validated site/national method applicable to the crop, soil and management; otherwise use the compatible 2006 IPCC/2019-refined managed-soil equations and climate/input-specific factor selection for N2O and lime/urea CO2. Retain the exact edition, equation, tier, activity and factor units, climate and management applicability; no universal dose or emission factor is prescribed. Non-soil/protected routes need a method valid for their actual medium; do not force soil factors onto an inapplicable route. Use the same period/field N ledger for synthetic and organic additions, residues, actual relevant mineralisation/organic-soil and excreta pathways; demonstrate absent pathways rather than infer zero. Calculate direct and each indirect component separately, then assign each once to matching existing or new concrete cards; never add a total to its components. Convert N2O-N to molecular N2O by 44/28 once. NH3, NOx and nutrient/pesticide loss require an applicable measured or documented substance/fate model; total N/P or an unexplained balance residual is not a compound release. Keep actual receiving compartments and molecular versus elemental/reporting bases explicit; indirect formation does not remove the same N from the source ledger twice. Include actual local combustion releases separately using fuel-specific combustion-only methods; purchased electricity/heat/services retain upstream coverage once. Add one identity-specific exchange only for a supported release and reuse an existing matching card, with verified UUID or explicit unresolved identity. Missing applicable method/activity/factor/identity blocks completeness; it is not a justified zero. Attribute raw activity/release totals and normalize once to the matched accepted reference output. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference | `review-ipcc-soils-2019` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `q_identity` | Reference output | Verify whole commodity seed, market class, grade, actual in-farm hand-off and moisture; no sowing-seed output under the fixed UUID. | Lot and transfer records |
| `q_time` | Foreground package | Capture one full crop cycle and all fields and included treatment runs; disclose gaps. | Dated field and machine logs |
| `q_mass` | All seed states | Reconcile harvest, cleaning, grading and drying mass with moisture and rejects; flag unexplained residual. | Scale calibration and reconciliation sheet |
| `q_route` | Irrigation and drying | Preserve actual water and drying route, metered energy, sequential run links and reject destination. | Meter and equipment logs |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_identity` | Reference output | Reject missing class, measured moisture, grade or actual hand-off, and reject sowing seed bound to `a62436d6-249c-4ac3-b5f4-653d0f277519`. | ndsu-sunflower-guide-2020 |
| `v_boundary` | Inventory | Verify cultivation, harvest and each actual on-farm cleaning, grading, drying and storage step up to hand-off; do not infer farm-gate grade from the platform label. | ndsu-sunflower-guide-2020; ndsu-sunflower-drying-2022 |
| `v_route` | Alternative routes | Require metered irrigation and pump records for irrigated fields and metered fan/fuel records for drying; link sequential technologies. | ndsu-sunflower-guide-2020; ndsu-sunflower-drying-2022 |
| `v_balance` | Lots and rejects | Reconcile accepted, downgraded, rejected, returned and lost mass with moisture; a reject becomes accepted only after a linked successful run. | ndsu-sunflower-guide-2020 |
| `v_emissions` | Field elementary flows | Do not accept an anonymous field-emission row or unverified generic factor; require each calculated exchange to name species, method and factor source. | ndsu-sunflower-guide-2020 |
| `v_once` | Shared runs | Check field and period attribution, cleaning changeovers and returned lots to prevent double counting. | ndsu-sunflower-guide-2020 |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground whole-sunflower-seed production at an identified in-farm hand-off |
| downstream_use | `secondary_dataset` or `background_dataset` for agricultural whole-seed inputs |
| allowed_use | Oil crushing, confection/food or bird-food seed input when class, grade and moisture match |
| excluded_use | Sowing-seed production, oil, kernels, meal, roasted foods or unrecorded farm-gate grade |
| required_metadata | Farm/region, crop year, class, field/lot, variety if known, hand-off, moisture, grade, conditioning/drying scope, irrigation route |
| required_quality_disclosure | Record coverage, scale/moisture evidence, upstream datasets, missing emission estimates, mass-balance residual and allocation choice |
| update_trigger | Material change in market class, hand-off, water/drying technology, input mix, grade standard or region |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | official_guidance | UN Statistics Division, CPC Ver. 3.0 explanatory notes (2025), https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope |
| `ndsu-sunflower-guide-2020` | extension_guidance | North Dakota State University Extension, Sunflower Production Guide A1995, https://www.ndsu.edu/agriculture/sites/default/files/2023-12/a1995.pdf | Market types, field, harvest, grading and conditioning routes |
| `ndsu-sunflower-drying-2022` | extension_guidance | North Dakota State University Extension, “NDSU offers advice on harvesting and drying sunflower in North Dakota” (2022), https://www.ag.ndsu.edu/news/newsreleases/2022/september/ndsu-offers-advice-on-harvesting-and-drying-sunflower-in-north-dakota/ | Conditional drying and moisture evidence |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | This PCR, Sections 3, 6 and 8: measured net mass at the same state and gate is its own normalization denominator, giving a mass ratio of 1; handoff measurement adds no physical processing. | Same-stage and handoff measurement identities; a definition, not an observed yield, empirical default or external publication. |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct/indirect N2O and lime/urea CO2 method context; factors require actual applicability and site activity, not a product default. |
