---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pigeon-peas-dry
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Pigeon peas, dry

## 1. Scope and Applicability

This PCR covers mature dry whole pigeonpea grain (*Cajanus cajan*) from managed cultivation through farm-gate hand-off. It includes maturity, whole-plant cutting or mature-pod picking, field or floor drying, threshing, cleaning, grading, conditional final drying, repeated pod flushes, stems and pod walls, loss, downgrade, rejects and rework. It excludes green vegetable pigeonpea, planting seed sold as seed, split dhal, flour, cooked or canned product, and off-farm processing.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.pigeon-peas-dry |
| classification_refs | CPC 3.0:01707 Pigeon peas, dry; mapping relation: narrower |
| covered_products | Mature, cleaned and graded dry whole pigeonpea grain at farm gate |
| excluded_products | Green vegetable pigeonpea; planting seed sold as seed; split dhal; flour; cooked or canned product; downstream milling |
| representative_product | Mature dry whole grain of *Cajanus cajan* |
| production_route | Managed cultivation; whole-plant cutting or mature-pod picking; drying; threshing; cleaning; grading; conditional final drying |
| market_state | Harvested grain, unprocessed; production mix, at farm gate |

Managed cultivation is the biological-production parent. Whole-plant cutting and mature-pod picking are alternative production routes because they change topology, repeated-flush records and residue accounting. Manual or mechanized threshing and sun or heated drying are technology alternatives under their parent activities. Coexisting routes are kept separate through lot or batch records before aggregation.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Mature dry whole pigeonpea grain, cleaned and graded, at farm gate |
| How much | 1,000 kg as delivered |
| How well | Declared commercial grade, measured moisture, damage and foreign-matter basis, with unresolved rejects excluded |
| How long or cycle | One declared crop cycle including every contributing harvest flush and conditioning lot |
| reference_flow_link | reference_product_at_declared_handoff |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Pigeon peas, dry |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Mass units `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | species *Cajanus cajan*; mature dry whole grain; harvest route; crop cycle and flush count; geography; cultivation system; moisture; grade; damage and foreign matter; farm-gate hand-off |

Each foreground dataset must explicitly select one actual route, declared gate, product state and output row. Reconcile the selected terminal route with `reference_product_at_declared_handoff`; normalize that handoff output to the reference quantity and retain preceding-stage outputs as measured transfers. Raw weighing, mass reconciliation and lot traceability requirements continue to apply.

The sole reference output is `reference_product_at_declared_handoff`, receiving the selected actual route product at the declared gate. Existing route-output ids identify the source and physical state; they are no longer individually fixed to the reference quantity.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | Grain-state mass | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Report as-delivered mass with wet-basis moisture; convert dry matter as `wet mass × (1 - moisture fraction)`. |
| `area_to_reference` | Field inputs, emissions and output | Stated activity property | source unit and kg reference product | Retain area and crop-cycle records, then normalize by accepted farm-gate grain from the same cycle. |
| `nutrient_composition` | each nutrient input | Product mass and nutrient-element mass | kg product and kg element | Preserve every actual product, mass, nutrient composition and application date in its own exchange; product mass is not nutrient mass. |
| `lot_reconciliation` | Harvest and conditioning | Mass | kg | Reconcile input with products, co-products, rework transfers, rejects, moisture removal and physical loss without counting returned material twice. |

## 5. System Boundary

The boundary starts with the declared field condition before establishment and ends at farm-gate hand-off of accepted grain. Cultivation hands a standing mature crop to an independent harvest node. Harvest creates whole-plant, branch or mature-pod lots. Drying, threshing, cleaning and grading create prepared grain. Conditional final drying stabilizes grain that has not reached the declared hand-off moisture.

The crop-cycle model uses single-period attribution: later harvest flushes are batches within the same crop cycle.

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Field area, prior crop and residue state, soil management condition, establishment material and opening date before the crop cycle |
| starting_condition_role | Foreground cultivation starting condition |
| product_classification_scope | Mature dry whole pigeonpea grain within CPC 3.0:01707 |
| recursive_input_rule | Returned grain rework remains linked to its originating lot and retains prior burdens; purchased pigeonpea used for sowing or blending is a separate upstream input. |
| upstream_dataset_requirement | Use supplier-specific datasets for purchased seed, nutrient products, crop-protection products, water, fuels, electricity and services when available; disclose representative substitutes. |
| disclosure | Geography; period; variety or maturity class; sole/intercrop status; crop duration; harvest route and flushes; drying and threshing technology; moisture and grade; residue destinations; allocation; rework; farm-gate hand-off |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_crop_cycle` | Cultivation | Include all attributable operations and inputs from the declared starting condition through maturity, including failed establishment and field loss. | `icrisat-pigeonpea-production-1992` |
| `boundary_harvest_routes` | Harvest | Model whole-plant cutting and mature-pod picking separately; index each repeated flush and do not treat standing crop retained for a later flush as harvested output. | `icrisat-pigeonpea-production-1992` |
| `boundary_conditioning` | Conditioning | Include field or floor drying, threshing, cleaning, grading and conditional final drying before farm gate; link every loss, reject and rework path to its producing node. | `icrisat-pigeonpea-production-1992` |
| `boundary_downstream` | Product transformation | Exclude dehulling, splitting, milling, cooking, canning, retail packing and distribution beyond farm gate. |  |
| `boundary_soil_emissions` | Managed soil | When N inputs or returned residues occur, include direct and relevant indirect managed-soil N2O pathways under the declared applicable method. | `ipcc-managed-soils-2019` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `managed_cultivation` | Managed pigeonpea cultivation | required | Always | Managed biological production with an alternative production route delta | one field crop cycle |
| `harvest_capture` | Whole-plant cutting or mature-pod picking | required | Declare route and flush | Harvest/capture using alternative technology routes | one harvest lot |
| `field_floor_drying` | Field or floor drying | required | Always before threshing | Primary conditioning by lot | one drying lot |
| `thresh_clean_grade` | Threshing, cleaning and grading | required | Always | Batch production for primary conditioning and grading | one conditioning batch |
| `final_drying_rework` | Final drying and rework | conditional | Grain requires further drying or re-cleaning | Batch production for stabilization and rework | one drying/rework batch |
| declared_reference_handoff | Product Measurement at Declared Handoff | required |  | foreground | reference_product_at_declared_handoff |

### Process: Managed pigeonpea cultivation (`managed_cultivation`)

Production is crop-cycle based. Shared field burdens occur once per crop cycle and every harvest flush remains linked to that period.

#### Inputs

##### Product flows

###### Sowing material (`sowing_material`)

Record seed actually sown, including resowing.

- Selected flow: Pigeonpea sowing material
- Flow property / unit: Mass / kg
- Amount rule: measured mass sown by field and crop cycle
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Sowing-rate QA range
  - Range role: Typical range (`typical_range`)
  - Lower: 4.2
  - Upper: 70
  - Unit: kg/ha per crop cycle
  - Basis: planted hectare in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: External source (`external_source`)
  - Sources: `icrisat-pigeonpea-production-1992`

###### Fertilizer, urea input (`agricultural_nutrient_supply`)

Include this conditional card only when Fertilizer, urea is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, urea
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, urea used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`

###### Fertilizer, monoammonium phosphate input (`agricultural_nutrient_supply_monoammonium_phosphate`)

Include this conditional card only when Fertilizer, monoammonium phosphate is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, monoammonium phosphate
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, monoammonium phosphate used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`

###### Fertilizer, potassium chloride input (`agricultural_nutrient_supply_potassium_chloride`)

Include this conditional card only when Fertilizer, potassium chloride is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, potassium chloride
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, potassium chloride used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`

###### Cattle manure, as applied input (`agricultural_nutrient_supply_cattle_manure`)

Include this conditional card only when Cattle manure, as applied is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Cattle manure, as applied
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Cattle manure, as applied used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`

###### Agricultural limestone input (`agricultural_nutrient_supply_agricultural_limestone`)

Include this conditional card only when Agricultural limestone is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Agricultural limestone
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Agricultural limestone used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`

###### Irrigation water (`irrigation_water`)

Record delivered irrigation only when it occurs; rainfall is not a product input.

- Selected flow: Irrigation water
- Flow property / unit: Volume / m3
- Amount rule: metered or calculated delivered water by event
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_cultivation`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Provisional irrigation screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 15000
  - Unit: m3/ha per crop cycle
  - Basis: delivered irrigation for one hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

Required crop-protection records: before completing the foreground package, enumerate every actually applied formulated product separately, retaining trade name, active ingredient, salt or chemical form, concentration, density where needed, application quantity, date and treated area. Select one physically specific product identity per exchange. Derive active-substance releases separately by substance and receiving compartment. Missing formulation identity is a completeness gap; do not replace it with a generic pesticide, invented example, or assumed zero.

Required treatment-material records: enumerate each actually used field-treatment product or retting aid by concrete composition, product identity, quantity and application event before the package is complete; do not publish a generic treatment-material exchange or assume zero when identity is missing.

###### Electricity, medium voltage input (`field_energy`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation`

###### Diesel fuel input (`field_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation`

Required operating-service records: identify each actually purchased non-energy operation by its task, supplier, scope, native quantity and included burdens before completing the package. Do not create a generic services exchange. Keep any fuel, electricity or equipment already included in a supplier service inside that supplier boundary and count the activity once.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Standing mature crop (`standing_mature_crop`)

Record the mature crop handed to harvest, identified by field, crop cycle and maturity evidence.

- Selected flow: Standing mature pigeonpea crop
- Flow property / unit: Mass / kg grain equivalent
- Amount rule: harvest receipts plus measured field loss and retained mature material
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Provisional mature-grain-equivalent yield screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 100
  - Upper: 5000
  - Unit: kg/ha per crop cycle
  - Basis: standing mature grain equivalent for one hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Pre-harvest loss (`preharvest_loss`)

Record mature pods or grain lost before collection; standing crop retained for another flush is not loss.

- Selected flow: Pre-harvest pigeonpea loss
- Flow property / unit: Mass / kg grain equivalent
- Amount rule: field sampling and crop-cycle reconciliation
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation`
- Sources:
- Range: Pre-harvest loss fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.8
  - Unit: kg loss/kg standing mature grain equivalent
  - Basis: mature grain equivalent in one crop cycle
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

#### Outputs

##### Elementary flows

###### Managed-soil nitrous oxide (`managed_soil_n2o`)

Calculate direct and relevant indirect N2O from recorded synthetic N, organic N, returned residue N and other applicable sources.

- Selected flow: Nitrous oxide to air from managed soil
- Flow property / unit: Mass / kg N2O
- Amount rule: calculated from foreground N activity and declared factors
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per hectare and crop cycle.

- Normalization basis: per declared reference flow
- Basis kind: Crop cycle (`crop_cycle`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_cultivation`
- Sources: `ipcc-managed-soils-2019`
- Range: Provisional managed-soil N2O screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg N2O/ha per crop cycle
  - Basis: included direct and indirect pathways for one hectare
  - Basis kind: Crop cycle (`crop_cycle`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Whole-plant cutting or mature-pod picking (`harvest_capture`)

Declare whole-plant/branch cutting or mature-pod picking for each lot. Repeated picking requires flush identifiers and records of crop retained in the field.

#### Inputs

##### Product flows

###### Standing mature crop input (`harvest_inputs`)

Record the mature crop by originating field, harvest lot and flush.

- Selected flow: Standing mature pigeonpea crop
- Flow property / unit: Mass / kg
- Amount rule: lot-linked crop input
- Value mode: Foreground record (`foreground_record`)
- Specificity: Route-specific (`route_specific`)
Raw activity or stage basis: per harvest lot and flush.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Harvest-input mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg standing crop/kg collected dry-grain equivalent
  - Basis: one harvest lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage input (`harvest_energy`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
Raw activity or stage basis: per harvest lot and flush.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`

###### Diesel fuel input (`harvest_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Route-specific (`route_specific`)
Raw activity or stage basis: per harvest lot and flush.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Collected plants, branches or mature pods (`collected_harvest_material`)

Record the physical state handed to drying and keep whole-plant, branch and pod-picked lots separate.

- Selected flow: Collected pigeonpea harvest material
- Flow property / unit: Mass / kg
- Amount rule: weighed collected mass by field, route and flush
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per harvest lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_harvest`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Collected fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg collected material/kg harvest input
  - Basis: harvest-lot mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Harvest loss and incidental material (`harvest_loss`)

Record shattered pods, spilled grain and cut material without intended use; exclude living crop retained for a later flush.

- Selected flow: Harvest loss and incidental material
- Flow property / unit: Mass / kg
- Amount rule: Measure or use representative sampling for the actual identified rejected/spilled/otherwise lost material and its evidenced destination. A component mass balance may estimate that stream only when all other product, residue, water, stock and transfer terms are supported, compatible and mutually exclusive, with uncertainty disclosed. Keep unexplained balance residual as an investigation/evidence gap, never automatically a waste output, dry-matter loss, vapour or emission. Separate every actual material/state/destination and preserve retained/reworked material as paired transfer or stock; normalize supported exported quantities once to accepted final output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per harvest lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_harvest`
- Sources:
- Range: Harvest-loss fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg loss/kg harvest input
  - Basis: harvest-lot mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Field or floor drying (`field_floor_drying`)

The incoming collected state is dried to a state suitable for threshing. Record location, duration, turning, weather exposure, moisture and damage by lot.

#### Inputs

##### Product flows

###### Collected harvest material received (`predrying_input`)

Record the weighed harvested material handed from the identified harvest lot into this drying lot.

- Selected flow: Collected pigeonpea harvest material
- Flow property / unit: Mass / kg
- Amount rule: weighed material entering the drying lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per drying lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_predrying`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Pre-threshing drying-input screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg wet material/kg dry-grain equivalent
  - Basis: one drying lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Dried plants or pods for threshing (`dried_harvest_material`)

Record the prepared dry lot handed to threshing with its measured output moisture.

- Selected flow: Dried pigeonpea plants or pods
- Flow property / unit: Mass / kg
- Amount rule: weighed dry material with output moisture by lot
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per drying lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_predrying`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Field or floor drying duration
  - Range role: Typical range (`typical_range`)
  - Lower: 1
  - Upper: 14
  - Unit: day
  - Basis: elapsed exposure for one drying lot
  - Basis kind: Process output (`process_output`)
  - Evidence kind: External source (`external_source`)
  - Sources: `icrisat-pigeonpea-production-1992`

##### Waste flows

###### Weather damage and spillage (`predrying_loss`)

Record damaged, contaminated or spilled material separately from calculated water removal.

- Selected flow: Pre-threshing drying loss
- Flow property / unit: Mass / kg
- Amount rule: Measure or use representative sampling for the actual identified rejected/spilled/otherwise lost material and its evidenced destination. A component mass balance may estimate that stream only when all other product, residue, water, stock and transfer terms are supported, compatible and mutually exclusive, with uncertainty disclosed. Keep unexplained balance residual as an investigation/evidence gap, never automatically a waste output, dry-matter loss, vapour or emission. Separate every actual material/state/destination and preserve retained/reworked material as paired transfer or stock; normalize supported exported quantities once to accepted final output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per drying lot.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_predrying`
- Sources:
- Range: Physical-loss fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.5
  - Unit: kg physical loss/kg drying input
  - Basis: drying-lot mass balance excluding removed water
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Threshing, cleaning and grading (`thresh_clean_grade`)

Each batch records manual or mechanized technology, cleaning/changeover, inputs and all grade or destination outputs. Incoming dried material is separated into accepted grain, downgrade, intended stem/pod outputs and rejects.

#### Inputs

##### Product flows

###### Dried harvested material input (`conditioning_inputs`)

Record dried harvested material by originating drying lot.

- Selected flow: Dried pigeonpea plants or pods
- Flow property / unit: Mass / kg
- Amount rule: weighed material by conditioning batch
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per conditioning batch.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Conditioning-input mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 20
  - Unit: kg dried material/kg accepted and downgraded grain
  - Basis: one conditioning batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage input (`conditioning_energy`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per conditioning batch.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`

###### Diesel fuel input (`conditioning_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per conditioning batch.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted cleaned grain (`accepted_clean_grain`)

The hand-off is to final drying when moisture exceeds the declared condition, or to farm-gate release otherwise.

This intended output is declared together with any intended stem or pod-wall co-product before attribution.

- Selected flow: Accepted cleaned pigeonpea grain
- Flow property / unit: Mass / kg
Raw output measurement and reconciliation: weighed grain by grade, moisture and batch

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per conditioning batch.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Accepted-grain fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg accepted grain/kg conditioning input
  - Basis: conditioning-batch mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Downgraded grain (`downgraded_grain`)

Record usable grain outside the reference grade with its grade, reason, destination and hand-off.

- Selected flow: Downgraded pigeonpea grain
- Flow property / unit: Mass / kg
- Amount rule: weighed downgrade by reason and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per conditioning batch.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_conditioning`
- Sources:
- Range: Downgraded-grain fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg downgraded grain/kg conditioning input
  - Basis: conditioning-batch mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Stems and pod walls with intended use (`stem_pod_coproduct`)

Record stems, branches or pod walls as co-products only with documented production intent, recipient and use; otherwise classify them as residue or waste.

- Selected flow: Pigeonpea stems and pod walls with intended use
- Flow property / unit: Mass / kg dry matter
- Amount rule: weighed or moisture-corrected transfer to recipient
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per conditioning batch.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Sources:
- Range: Intended residue-output fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg dry output/kg dry conditioning input
  - Basis: conditioning-batch dry-matter balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Rejects and cleaning loss (`conditioning_rejects`)

Record damaged or contaminated grain, foreign matter, dust and physical loss. Assign disposal, recovery or rework; unresolved rejects cannot enter accepted output.

- Selected flow: Conditioning rejects and cleaning loss
- Flow property / unit: Mass / kg
- Amount rule: Measure or use representative sampling for the actual identified rejected/spilled/otherwise lost material and its evidenced destination. A component mass balance may estimate that stream only when all other product, residue, water, stock and transfer terms are supported, compatible and mutually exclusive, with uncertainty disclosed. Keep unexplained balance residual as an investigation/evidence gap, never automatically a waste output, dry-matter loss, vapour or emission. Separate every actual material/state/destination and preserve retained/reworked material as paired transfer or stock; normalize supported exported quantities once to accepted final output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per conditioning batch.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_conditioning`
- Sources:
- Range: Reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg reject/kg conditioning input
  - Basis: conditioning-batch mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows

### Process: Final drying and rework (`final_drying_rework`)

The usable input is cleaned grain. The stabilized output is dry grain at declared moisture and grade. Re-drying or re-cleaning retains the originating batch and prior burdens; only incremental burdens are added.

#### Inputs

##### Product flows

###### Grain entering final drying or rework (`final_drying_inputs`)

Record accepted or off-spec grain separately by reason, originating batch and technology.

- Selected flow: Cleaned pigeonpea grain requiring final drying or rework
- Flow property / unit: Mass / kg
- Amount rule: measured batch input with incoming moisture and grade
- Value mode: Foreground record (`foreground_record`)
- Specificity: Technology-specific (`technology_specific`)
Raw activity or stage basis: per final-drying or rework batch.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_drying`
- Sources: `icrisat-pigeonpea-production-1992`
- Range: Final-drying input mass screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1.5
  - Unit: kg incoming grain/kg stabilized grain
  - Basis: one final-drying or rework batch
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity, medium voltage (`final_drying_energy`)

Include this exchange only when Electricity, medium voltage is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per final-drying or rework batch.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured Electricity, medium voltage supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_final_drying`
- Sources: `icrisat-pigeonpea-production-1992`

###### Diesel fuel (`final_drying_energy_diesel`)

Include this exchange only when Diesel fuel is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per final-drying or rework batch.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured Diesel fuel supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_final_drying`
- Sources: `icrisat-pigeonpea-production-1992`

###### Purchased steam (`final_drying_energy_steam`)

Include this exchange only when Purchased steam is actually supplied to this process. Record every other actual carrier separately. For purchased operating services, retain the supplier boundary and do not also count fuel or electricity already included in that service.
Raw activity or stage basis: per final-drying or rework batch.

- Selected flow: Purchased steam
- Flow property / unit: Energy / MJ
- Amount rule: Measured Purchased steam supplied to this process and period, normalized once to the declared reference output; convert carrier-native units only with documented density, calorific value or meter conventions where needed.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_final_drying`
- Sources: `icrisat-pigeonpea-production-1992`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Farm-gate mature dry pigeonpea grain (`pigeonpea_farm_gate_grain`)

This accepted reference output excludes every unresolved reject and downgrade.

- Selected flow: Pigeon peas, dry `6cac6f0d-9d09-4685-86f5-e1cc1ac94511`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Raw output measurement and reconciliation: exactly the accepted as-delivered reference mass with measured moisture

- Amount rule: measured net transfer mass, retaining lot, actual product state and moisture basis; reconcile to the final reference output at the declared handoff
- Value mode: Fixed value (`fixed_value`)
- Specificity: Product-specific (`product_specific`)
Raw activity or stage basis: per 1,000 kg reference product.

- Normalization basis: per declared reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Identity reference (`identity_reference`)
- Sources:
- Range: Reference-output identity
  - Range role: Allowed range (`allowed_range`)
  - Lower: 1000
  - Upper: 1000
  - Unit: kg
  - Basis: one PCR reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

###### Recovered downgraded grain (`recovered_downgraded_grain`)

Record grain still outside the reference grade after rework only when it leaves for a documented lower-grade use.

- Selected flow: Recovered downgraded pigeonpea grain
- Flow property / unit: Mass / kg
- Amount rule: weighed outgoing mass by origin and destination
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per rework batch.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_final_drying`
- Sources:
- Range: Recovered downgrade fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg downgraded output/kg rework input
  - Basis: rework-batch mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Waste flows

###### Final drying damage and reject (`final_drying_reject`)

Record heat or mould damage, contamination and physical loss; calculated water removal is not waste.

- Selected flow: Final-drying damage and unrecovered reject
- Flow property / unit: Mass / kg
- Amount rule: Measure or use representative sampling for the actual identified rejected/spilled/otherwise lost material and its evidenced destination. A component mass balance may estimate that stream only when all other product, residue, water, stock and transfer terms are supported, compatible and mutually exclusive, with uncertainty disclosed. Keep unexplained balance residual as an investigation/evidence gap, never automatically a waste output, dry-matter loss, vapour or emission. Separate every actual material/state/destination and preserve retained/reworked material as paired transfer or stock; normalize supported exported quantities once to accepted final output.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
Raw activity or stage basis: per final-drying or rework batch.

- Normalization basis: per declared reference flow
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_final_drying`
- Sources:
- Range: Final-drying reject fraction
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg reject/kg batch input
  - Basis: final-drying or rework-batch mass balance
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Method formula (`method_formula`)
  - Sources: `mass-balance-identity`

##### Elementary flows


### Process: Product Measurement at the Declared Handoff (`declared_reference_handoff`)
This node records the actual product handoff at the existing system boundary for reconciliation and reference-quantity normalization. It adds no physical processing and does not presume drying, cooling, storage, packaging or transport. Each data package declares one actual route, one terminal product state, moisture or dry-matter basis, and gate. Feed only the accepted product delivered by that route at that gate into this node; do not add other routes as extra inputs. Record co-products separately and apply Section 7. Count preceding inputs, losses and emissions once. Normalize using the measured accepted net mass at the handoff; this measurement node changes neither mass, yield nor allocation.
#### Inputs
##### Product flows
###### Actual route product at handoff (`actual_route_product_for_handoff`)
Record the accepted product delivered by the actual terminal route and reconcile it with handoff weighing and lot records.
- Selected flow: Pigeon peas, dry
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
- Selected flow: Pigeon peas, dry
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
| `allocation_subdivision_first` | All nodes | Subdivide field, flush, lot, batch, technology and rework records before allocation when independent measurements exist. |  |
| `allocation_crop_cycle` | Shared cultivation | Attribute shared cultivation burdens once across all flushes in proportion to dry accepted and downgraded grain mass unless a reviewed causal method is used; never reapply them per flush. |  |
| `allocation_intended_outputs` | Grain, stems and pods | Treat outputs as co-products only with production intent, quality state, recipient and hand-off. Apply one declared economic, physical or reviewed causal method to the complete intended-output set and disclose sensitivity. |  |
| `allocation_rework` | Re-drying and re-cleaning | Returned material retains prior burdens; add incremental burdens once and do not count returned mass as new input or accepted output before release. |  |
| `allocation_reject_exit` | Downgrade and waste | Downgraded outputs follow the complete-output attribution rule; treatment of waste remains with the producing node unless a disclosed downstream waste convention applies. |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_residual_precedence` | remaining common burden with no specified primary branch | Resolve any study-specific joint-product instruction in this PCR that has no specified primary branch using this precedence; retain an already explicitly prescribed category-specific primary method. First directly assign separable output-specific activities. For the remaining common burden B, use a physical driver d_i only when measured operation or biological-service records demonstrate the causal consumption represented by that driver. A product being weighable, valuable or lower grade alone is insufficient; do not switch arbitrarily between area, time, mass and revenue. For comparable grades receiving the same common handling, measured processed mass is applicable only with the same service demand, state and moisture basis demonstrated. Share a_i=d_i/sum(d_j); B_i=B*a_i. If no defensible causal physical driver exists for that common operation, use gate- and period-matched economic shares a_i=(q_i*p_i)/sum(q_j*p_j), with the complete independently intended output set, compatible quantity/price units, currency, representative prices and values before output-specific downstream processing. Missing price or denominator evidence makes the allocated result incomplete, not a zero-priced product or a single-output system. Report shares summing to one and sensitivity to a material alternative; an alternative is not an interchangeable primary result. Waste, retained residues and internal transfers receive no co-product share, while their attributable production/handling burdens remain with the producing saleable route. Retain unallocated physical quantities and mass balances separately. This branch gives no automatic substitution credit; any separately scoped substitution analysis retains the gross inventory and its actual displaced-function evidence. | `ghg-protocol-product-standard-2011` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Inventory completeness: conditional named cards are examples of individual exchanges, not an exhaustive recipe or a requirement to use those products. Before completing a foreground package, enumerate every actual planting stock, nutrient, crop-protection formulation, asset material, operating service, carrier, packaging material, waste stream and applicable elementary substance separately, using its physical identity, state, native property/unit, origin or receiving compartment, and measured or method-calculated quantity. Missing identity or quantity remains a completeness gap, never an assumed zero. Preserve the actual lot and phase basis; do not sum intermediate transfers as additional final output or duplicate burdens included in purchased services.

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cultivation` | `managed_cultivation` | inputs, mature crop, loss, soil-emission activity | field-cycle record | field; area; dates; variety; crop system; seed; actual nutrient products/composition; irrigation; protection; energy; residue management; yield/loss | invoices, logs, meters, sampling and reconciliation; Raw aggregation and attribution: aggregate by field/cycle then normalize by accepted grain | native units, ha, kg | each event; crop-cycle summary | full crop cycle | every field | per declared reference flow | dates, calibration, labels, reconciliation |
| `cp_harvest` | `harvest_capture` | crop input, services, collected state, loss | harvest-lot/flush record | field; cycle; route; flush; maturity; date; crop estimate; service; collected mass; retained crop; loss ; actual material/state/destination; representative stream measurement; all other component/stock terms; unexplained residual and uncertainty| scale, sampling and operation log; Raw aggregation and attribution: keep routes/flushes separate and reconcile states | kg and service units | every lot/flush | all contributing flushes | every field/route | per declared reference flow | lot id, scale check, maturity evidence |
| `cp_predrying` | `field_floor_drying` | wet input, dry output, moisture and loss | drying-lot record | lot; location; time; protection; input/output mass and moisture; damage; spill ; actual material/state/destination; representative stream measurement; all other component/stock terms; unexplained residual and uncertainty| scale, moisture meter and lot log; Raw aggregation and attribution: report water removal separately from physical loss | kg, %, day | every lot | full interval | every drying place | per declared reference flow | calibration, traceability, inspection |
| `cp_conditioning` | `thresh_clean_grade` | batch input, services, grades, co-product and reject | batch record | batch; source lot; technology; input; moisture; energy; cleaning/changeover; outputs; grade; damage; destination ; actual material/state/destination; representative stream measurement; all other component/stock terms; unexplained residual and uncertainty| scale, meter, service and grade records; Raw aggregation and attribution: reconcile before grade/destination aggregation | kg, %, energy/service | each batch/changeover | all contributing batches | every route/site | per declared reference flow | calibration, lineage, destination receipt |
| `cp_final_drying` | `final_drying_rework` | input, energy, moisture, release, downgrade and reject | drying/rework batch | batch; origin; reason; input/output mass/moisture; route; temperature; duration; energy; grade; destination ; actual material/state/destination; representative stream measurement; all other component/stock terms; unexplained residual and uncertainty| scale, moisture/temperature/time/energy records; Raw aggregation and attribution: retain prior burdens, add incremental burdens once, reconcile outputs | kg, %, °C, hour, energy | every pass | full intervention | every route/site | per declared reference flow | calibration, lineage, release record |
| `cp_declared_reference_handoff` | declared_reference_handoff | reference_product_at_declared_handoff | handoff weighing and acceptance records | route, terminal_output_row_id, product_state, gate, lot, net_mass_kg, moisture_basis, acceptance, tare | Use calibrated scales or traceable weighing records; reconcile the actual terminal-operation handoff lot, accepted net mass, product state and moisture; exclude packaging tare and do not sum preceding-stage quantities. | kg | each handoff lot | declared reporting period | declared handoff gate | per declared reference flow | calibration or weighing tickets, acceptance and lot traceability |
| `cp_phase1_environment_coverage` | managed_cultivation | managed environmental coverage by actual node | site/activity/method ledger | site and actual managed nodes; area; dated occupation intervals; co-users; establishment/immature history; actual prior/current land classes and transformation dates/areas; carbon-method coverage; upstream land coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_moisture` | Wet/dry mass | Water removed to air = incoming material water + actual external water addition + opening water stock - water in every outgoing accepted/downgraded/reject/residue stream - separately exported liquid water - closing water stock, using matched measured wet masses and moisture fractions or compatible densities. Internal recirculation cancels. Include actual rain uptake/rewetting; separate dry-matter and non-water losses. Establish actual evaporation and receiving air boundary from measurement or a supported closed balance; missing components or unexplained difference do not prove vapour or zero. Normalize once to matched accepted final output. | mass and moisture | dry matter and water removed | `mass-balance-identity` |
| `calc_normalization` | All activities | Sum only linked records, divide by accepted as-delivered grain and multiply by 1,000 kg. | linked quantities and accepted grain | quantity per reference flow | `mass-balance-identity` |
| `calc_soil_n2o` | N additions and residues | Apply the declared applicable IPCC or reviewed national Tier method, including relevant direct, volatilization/deposition and leaching/runoff pathways. | N composition, residue N, factors | kg N2O by pathway | `ipcc-managed-soils-2019` |
| `calc_reconciliation` | Every lot/batch | Input dry mass equals accepted, intended co-product, downgrade, reject and physical-loss dry mass; rework return is a transfer. | linked input/output mass and moisture | variance and completeness flag | `mass-balance-identity` |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_cultivation`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_land_coverage` | actual managed-production nodes | For each actual owned managed-production site, collect the occupied area and dated occupation intervals, including attributable establishment/immature and production periods. Occupation is area multiplied by actual duration, converted explicitly to the selected area-time unit (1 ha = 10,000 m2; time in years); hectares per crop-cycle alone are not an area-time result without duration. Partition or take the union of overlapping establishment/management intervals so the same area-time is counted once, with shares across actual co-users summing to one. Record evidenced land transformation separately by actual from/to land class, event area and date under the declared land-use method; transformation has area units and is not added to occupation. Planting, continued occupation or missing prior-land data do not establish a transformation or zero transformation. Preserve actual historical-event attribution and carbon-stock/emission method coverage where applicable; no invented land conversion or generic carbon credit. Instantiate separate compatible elementary identities with verified UUIDs or explicit unresolved identities; attribute once and normalize to the matched final reference. Purchased completed biological inputs inherit compatible upstream land coverage once instead of duplicating it locally. Missing applicable land identity, area, duration or prior-state evidence remains a completeness gap; documented no transformation is a valid absence. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | Reference output | Confirm species, whole-grain state, farm-gate status, grade, moisture, damage and foreign matter. | release and specification |
| `dq_temporal` | Route lineage | Cover every input event, flush, drying lot, batch and rework pass. | field-to-gate lineage |
| `dq_completeness` | Output states | Classify every output as accepted, downgrade, intended co-product, rework, residue, waste or loss. | reconciled balance |
| `dq_measurement` | Quantities | Use calibrated or verified equipment and state estimation methods and uncertainty. | calibration and records |
| `dq_representativeness` | Production mix | Weight fields/routes by accepted output and disclose exclusions, substitutions and shares. | contribution table |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | Reference product | Reject green, planting-seed-market or processed product and grain without species, moisture, grade and farm-gate qualifiers. |  |
| `validate_lineage` | Process map | Require continuous field–cycle–flush–drying-lot–conditioning-batch–rework–farm-gate lineage and one parent for every alternative route. | `icrisat-pigeonpea-production-1992` |
| `validate_flushes` | Pod picking | Require flush ids, retained standing crop and one-time attribution of shared cultivation burdens. | `icrisat-pigeonpea-production-1992` |
| `validate_grades` | Grading | Require accepted and non-accepted states, a hand-off for every state, and separation of downgrade, reject, waste and rework. |  |
| `validate_rework` | Rework | Reject double counting of returned mass or prior burdens and exclude unresolved off-spec grain from accepted output. |  |
| `validate_multi_output` | Intended outputs | Require complete output enumeration and an explicit attribution decision; one output cannot occur at two hand-offs. |  |
| `validate_mode_indexing` | Periods/lots/batches | Link inputs, outputs, cleaning/changeover and yield to the relevant period, flush, lot or batch; reject duplicated shared burdens. |  |
| `validate_nutrient_cardinality` | Cultivation Product inputs | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |
| `validate_ranges` | cards with ranges | For each supplied Range, verify complete bounds and EN/ZH/structured equivalence. Report missing important-flow ranges as candidate evidence gaps; do not invent numeric bounds. |  |
| `validate_final_condition` | Farm-gate grain | Require measured final moisture. ICRISAT's 6–8% observation is source-specific QA guidance, not a universal grade unless adopted by the declared specification. | `icrisat-pigeonpea-production-1992` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground farm-gate production dataset for mature dry pigeonpea grain |
| downstream_use | `secondary_dataset`; `background_dataset` after representativeness and quality review |
| allowed_use | Processes and lifecycle models requiring mature dry whole pigeonpea grain within the declared geography, period, route mix, grade and moisture basis |
| excluded_use | Green pigeonpea, planting seed, split dhal, flour, cooked/canned product, unreviewed generic pulse substitution, downstream transport or processing |
| required_metadata | PCR id/version; geography; period; fields/cycles; variety; crop system; harvest routes/flushes; technologies; grade; moisture; damage/foreign matter; residue destinations; allocation; rework; coverage and uncertainty |
| required_quality_disclosure | measured/estimated shares; missing records; substitutions; route coverage; balance variance; moisture conversion; emission method/factors; allocation sensitivity; concrete flow identity verification status |
| update_trigger | Material change in boundary, UUID, grade/moisture basis, topology, technology mix, co-product use, attribution, emission method, geography or QA evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `icrisat-pigeonpea-production-1992` | handbook | Singh, F. and Oswalt, D. L. (1992), *Pigeonpea Botany and Production Practices*, ICRISAT. https://oar.icrisat.org/2422/1/Pigeonpea-Botany-Production-Practices.pdf | Identity, cultivation, sowing rate, maturity, whole-plant/repeated-picking routes, drying, threshing, cleaning and moisture guidance |
| `ipcc-managed-soils-2019` | method_factor | IPCC (2019), *2019 Refinement to the 2006 IPCC Guidelines*, Volume 4, Chapter 11. https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct and indirect N2O method |
| `mass-balance-identity` | method_factor | Conservation of dry matter and physical mass across a declared process node | Moisture conversion, reconciliation and fraction bounds |

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `declared-handoff-measurement-definition` | `method_factor` | This PCR, Sections 3, 6 and 8: measured net mass at the same state and gate is its own normalization denominator, giving a mass ratio of 1; handoff measurement adds no physical processing. | Same-stage and handoff measurement identities; a definition, not an observed yield, empirical default or external publication. |
| `ghg-protocol-product-standard-2011` | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter 9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | General allocation hierarchy and comparable-gate economic basis. Applicability conditions and the explicit residual branch are this PCR's method convention; no product-specific causal coefficient, price or output quantity is prescribed by this source. |
