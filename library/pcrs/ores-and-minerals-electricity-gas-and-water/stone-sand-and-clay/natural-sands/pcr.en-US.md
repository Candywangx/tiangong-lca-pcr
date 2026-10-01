---
pcr_id: pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.natural-sands
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Natural sands

## 1. Scope and Applicability

Natural mineral sand supplied at one declared extraction, washing/classification or industrial-beneficiation loading gate. Cover naturally occurring siliceous, calcareous and other mineral sands from land deposits and permitted river/lake/marine dredging, including raw, washed, classified or actually dried grades. Distinguish extraction-only, integrated mining/processing and standalone processing of supplied burden-bearing sand. Liberation of naturally cemented sand is included only with documented natural-grain origin; deliberate manufacture of sand from nonsand rock belongs to the crushed-stone category. Declare all actual screening, scrubbing, desliming, separation, dewatering, purification and drying operations, rather than requiring all routes. Include site development/rehabilitation, loading, water, dust and waste management. Downstream concrete, glass, foundry use and service performance are separate datasets. `epa-sand-gravel-1995`, `ifc-construction-2007`

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ores-and-minerals-electricity-gas-and-water.stone-sand-and-clay.natural-sands |
| classification_refs | CPC 3.0:15310 |
| covered_products | Natural raw, washed/classified or dried construction/industrial mineral sands; each dataset fixes mineralogy, origin and gate state |
| excluded_products | Manufactured sand from nonsand rock; recycled concrete aggregate; gravel as reference product; coated/resin-bonded foundry sand; synthetic silica; sand-containing mortar/concrete/glass and extraction services |
| representative_product | Natural sand at the declared supply gate |
| production_route | Deposit development and restoration; Natural-sand excavation and dredging; Screening, washing and classification; Industrial purification and drying; Water, fines and dust controls; Net accepted sand loading |
| market_state | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Supply 1 kg of qualified natural sand at declared moisture and grading; no equal-strength or end-use performance equivalence across grades |
| How much | 1 kg |
| How well | site/year; terrestrial/river/lake/marine origin and permitted extraction reach; actual mineralogy and quartz/carbonate fractions; natural-grain provenance; extraction/processing route; sieve distribution and fines; purity and impurities; salinity/chloride; market grade; moisture and dry-solids basis; net loading gate; water source/return/basin; sediment and waste fate; allocation and lifetime-output basis |
| How long or cycle | One gate supply within a declared production period |
| reference_flow_link | `final_product` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Natural sand at the declared supply gate |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | site/year; terrestrial/river/lake/marine origin and permitted extraction reach; actual mineralogy and quartz/carbonate fractions; natural-grain provenance; extraction/processing route; sieve distribution and fines; purity and impurities; salinity/chloride; market grade; moisture and dry-solids basis; net loading gate; water source/return/basin; sediment and waste fate; allocation and lifetime-output basis |

Declare all qualifiers in dataset metadata or reference-flow comments. The representative identity is usable only for its confirmed product state, geography and property; resolve a distinct flow for incompatible variants. It does not impose a default product composition.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_basis | final_product | Mass | kg | D is the positive accepted net gate-output total in kg. Exclude packaging and cancelled internal transfers. cp_output records D; every card uses per 1 kg reference flow. |
| conversion | utility and material rows | Declared row property | kg; m3; MJ | Retain raw readings. Electricity: 1 kWh = 3.6 MJ. Mass/volume conversion requires measured density, temperature and applicable pressure; retain water content and active chemical fraction. |
| category_balance | production | Mass | kg | D is independently measured positive accepted net as-received sand mass in kg at the gate, excluding packaging and rejects. Record moisture fraction w on an explicitly stated wet basis, with 0 <= w < 1; dry solids = D*(1-w), not a second denominator. Convert dry-record quantity to as-received only using matched measured moisture; volumetric sales require measured loose/compacted bulk density and moisture, not a universal sand density. Reconcile raw mineral dry solids, accepted grades, separately sold gravel, fines/slimes, stocks and releases; separately reconcile new water, inherent moisture, internal recycled water, evaporation and discharge. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Actual natural sediment/mineral deposit for extraction, or supplied raw natural sand carrying upstream burden for standalone processing |
| starting_condition_role | Resource or supplied feed; declare which |
| product_classification_scope | Natural raw, washed/classified or dried construction/industrial mineral sands; each dataset fixes mineralogy, origin and gate state |
| recursive_input_rule | Purchased same-category material carries a distinct supplier dataset; internal recycling is a balance observation, not a new external input or credit. |
| upstream_dataset_requirement | Link feed, electricity, fuels, chemicals, infrastructure and waste-management burdens; disclose any missing coverage. |
| disclosure | site/year; terrestrial/river/lake/marine origin and permitted extraction reach; actual mineralogy and quartz/carbonate fractions; natural-grain provenance; extraction/processing route; sieve distribution and fines; purity and impurities; salinity/chloride; market grade; moisture and dry-solids basis; net loading gate; water source/return/basin; sediment and waste fate; allocation and lifetime-output basis |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_operations | site | Natural mineral sand supplied at one declared extraction, washing/classification or industrial-beneficiation loading gate. Cover naturally occurring siliceous, calcareous and other mineral sands from land deposits and permitted river/lake/marine dredging, including raw, washed, classified or actually dried grades. Distinguish extraction-only, integrated mining/processing and standalone processing of supplied burden-bearing sand. Liberation of naturally cemented sand is included only with documented natural-grain origin; deliberate manufacture of sand from nonsand rock belongs to the crushed-stone category. Declare all actual screening, scrubbing, desliming, separation, dewatering, purification and drying operations, rather than requiring all routes. Include site development/rehabilitation, loading, water, dust and waste management. Downstream concrete, glass, foundry use and service performance are separate datasets. | `epa-sand-gravel-1995`, `ifc-construction-2007` |
| boundary_partition | all exchanges | Include actual conditioning, storage, handling and pollution controls through the declared gate. Account for attributable construction and closure with a disclosed lifetime-output basis or justified exclusion and sensitivity. Separate purchased fuel supply from foreground combustion and purchased treatment from site releases. |  |
| boundary_completeness | inventory | Cards define individual likely exchanges and route conditions, not an exhaustive site audit. Add each actual absent chemical, waste, resource, land transformation and pollutant as its own row. Absence, measured zero and unknown must be distinguished. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| development | Deposit development and restoration | conditional | Actual integrated extraction with attributable land/aquatic restoration | Foreground production | per 1 kg reference flow |
| extraction | Natural-sand excavation and dredging | conditional | Actual primary natural deposit extraction | Foreground production | per 1 kg reference flow |
| washing | Screening, washing and classification | conditional | Actual natural-grain processing; raw unwashed supply can bypass | Foreground production | per 1 kg reference flow |
| purification | Industrial purification and drying | conditional | Only the actual industrial sand route; no default reagents or drying | Foreground production | per 1 kg reference flow |
| controls | Water, fines and dust controls | conditional | Actual source-specific control and management | Foreground production | per 1 kg reference flow |
| dispatch | Net accepted sand loading | required | Every declared gate | Foreground production | per 1 kg reference flow |

### Process: Deposit development and restoration (`development`)

#### Inputs

##### Product flows

###### Deposit-development diesel (`development_diesel`)

Actual stripping/restoration equipment with disclosed lifetime output, no repeated full annual charge.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_development_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_development_diesel`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

#### Outputs

##### Waste flows

###### Sand-deposit overburden (`overburden`)

Actual removed covering material; separately record retained/replaced topsoil and habitat-specific land/aquatic transformations.

- Selected flow: Sand-deposit overburden
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_overburden; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_overburden`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

### Process: Natural-sand excavation and dredging (`extraction`)

#### Inputs

##### Product flows

###### Excavation and dredging diesel (`extraction_diesel`)

Actual excavator/dredger/boat fuel; distinguish pumping, haul and loading metering boundaries.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_extraction_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction_diesel`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Extraction-pump electricity (`extraction_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Only actual electrically powered extraction/suction equipment; do not invent electric dredging for diesel equipment.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_extraction_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_extraction_power`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

##### Elementary flows

###### Quartz sand in deposit (`quartz_resource`)

Only actual quartz-sand deposit extraction, mass as natural resource; other mineral sands need their own resource identities. Do not duplicate resource under purchased feed.

- Selected flow: quartz sand `0d7a3ad3-6556-11dd-ad8b-0800200c9a66`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_quartz_resource; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_quartz_resource`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

### Process: Screening, washing and classification (`washing`)

#### Inputs

##### Product flows

###### Supplied raw natural sand (`supplied_raw_sand`)

Standalone washing/classification receives supplier burdens and documented natural origin; cancel integrated internal feed.

- Selected flow: Supplied raw natural sand
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_supplied_raw_sand; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_supplied_raw_sand`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Sand-washing and classification electricity (`washing_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual screens, scrubbers, classifiers and dewatering pumps; record bypassed operations and shared meters.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_washing_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_washing_power`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Purchased sand-washing make-up water (`wash_water`)

Only purchased new water; direct abstraction and saline source water need separate resource identities and basin records; internal recirculation excluded.

- Selected flow: Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_wash_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wash_water`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

#### Outputs

##### Product flows

###### Saleable separated natural gravel (`gravel_coproduct`)

Only qualified simultaneously produced natural gravel with actual sale/state and allocation; not part of sand D.

- Selected flow: Saleable separated natural gravel
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_gravel_coproduct; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_gravel_coproduct`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

##### Waste flows

###### Sand-washing mineral slime (`sand_slime`)

Actual fines/clay/organic solids transferred to management; record wet mass and measured solids without generic composition.

- Selected flow: Sand-washing mineral slime
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sand_slime; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sand_slime`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

### Process: Industrial purification and drying (`purification`)

#### Inputs

##### Product flows

###### Sand-purification electricity (`purification_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual attrition, magnetic/flotation separation or drying auxiliaries; each actually used reagent needs its own row.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_purification_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_purification_power`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Sodium silicate reagent (`sodium_silicate`)

Only a confirmed sodium-silicate-assisted beneficiation route; collect solution mass and actual active fraction, not a generic dose.

- Selected flow: Sodium silicate reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sodium_silicate; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sodium_silicate`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Sulfuric acid reagent (`sulfuric_acid`)

Only actual sulfuric-acid beneficiation; retain concentration and residual fate; unrelated sand routes exclude.

- Selected flow: Sulfuric acid reagent
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_sulfuric_acid; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_sulfuric_acid`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Dryer natural gas (`dryer_natural_gas`)

Only actual natural-gas-fired sand dryer, with metered gas, actual composition and calorific basis. Add each other actual fuel/heat separately.

- Selected flow: Dryer natural gas
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_dryer_natural_gas; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_dryer_natural_gas`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

#### Outputs

##### Waste flows

###### Sand-beneficiation impurity reject (`beneficiation_reject`)

Only actual separated impurity residue; characterize mineralogy, reagent residue and actual treatment, no assumed hazardous status.

- Selected flow: Sand-beneficiation impurity reject
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_beneficiation_reject; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_beneficiation_reject`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

### Process: Water, fines and dust controls (`controls`)

#### Inputs

##### Product flows

###### Water and dust-control electricity (`controls_power`)

This purchased electricity exchange requires independently confirmed actual supplier, consumption or production interface, geography, voltage, generation attributes and energy property/unit; its UUID remains unresolved until a compatible direct-read identity is confirmed. A waste-incineration generation flow must not represent arbitrary site power.

Actual settling/dewatering/recycle pumps or collector fans; no duplicated washing meter.

- Selected flow: Electricity
- Flow property / unit: Net calorific value / MJ
- Amount rule: Collect the attributable reporting-period quantity under cp_controls_power; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_controls_power`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

#### Outputs

##### Waste flows

###### Sand-process wastewater transferred for treatment (`wastewater`)

Only actual purge/treatment transfer, with water volume and solids/salt/reagent assays. Environmental discharge requires its own destination volume and named chemical releases.

- Selected flow: Sand-process wastewater transferred for treatment
- Flow property / unit: Volume / m3
- Amount rule: Collect the attributable reporting-period quantity under cp_wastewater; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastewater`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

##### Elementary flows

###### Mineral PM10 to outdoor air (`pm10_air`)

Actual controlled extraction/haul/screen/dryer releases; moist material does not justify assumed zero; retain size and silica composition.

- Selected flow: Mineral PM10 to outdoor air
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_pm10_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_pm10_air`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Fossil carbon dioxide to outdoor air (`co2_air`)

Actual foreground combustion only, measured fuel/carbon and compatible factor; exclude duplicated upstream combustion and carbonate calcination absent that process.

- Selected flow: carbon dioxide (fossil) `08a91e70-3ddc-11dd-923d-0050c2490048`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_co2_air; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_co2_air`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

###### Chloride released to receiving water (`chloride_water`)

Only actual saline wash/discharge route; identify receiving water and measure dissolved chloride concentration and net discharge volume, separating natural background.

- Selected flow: Chloride released to receiving water
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_chloride_water; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_chloride_water`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

### Process: Net accepted sand loading (`dispatch`)

#### Inputs

##### Product flows

###### Sand-loading diesel (`loading_diesel`)

Actual accepted-product loader excluding separately metered dredging/hauling and downstream delivery outside gate.

- Selected flow: Diesel fuel `9d258d75-6792-4f1c-9856-81602ed8f816`
- Flow property / unit: Mass / kg
- Amount rule: Collect the attributable reporting-period quantity under cp_loading_diesel; divide by D after stock, transfer and allocation reconciliation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_loading_diesel`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

#### Outputs

##### Product flows

###### Natural sand at the declared supply gate (`final_product`)

One natural-origin mineralogy and grade at specified actual moisture and processing state; exclude gravel/rejects/packaging.

- Selected flow: Natural sand at the declared supply gate
- Flow property / unit: Mass / kg
- Amount rule: 1 kg
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per 1 kg reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_output`
- Sources: `epa-sand-gravel-1995`, `ifc-construction-2007`

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_hierarchy | joint production | Prefer process subdivision or defensible system expansion; otherwise use demonstrated physical causality. Use economic allocation only with consistent period, price, currency and sensitivity when physical causality is unavailable. Retain the unallocated inventory. | `ef-allocation-2021` |
| allocation_product | reference and co-products | Subdivide extraction, washing and industrial beneficiation where practical. Joint natural sand/gravel and grade outputs retain unallocated inventory and measured physical causality or justified alternative; dry-solid and economic sensitivities must use consistent grade/moisture periods. Charge development/rehabilitation once over measured lifetime accepted output. Slime or overburden destination does not automatically create a co-product or avoided-fill credit. No automatic zero burden for raw sand or internal recirculation. |  |
| allocation_waste | waste and recycling | Classify each output by physical state and actual fate. A sale does not automatically make a residue a co-product; internal recycling receives no avoided-product credit. Apply treatment burdens once. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_development_diesel | development | `development_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_overburden | development | `overburden` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Weigh matched-period transferred material and sample moisture/solids and actual mineral/chemical composition. Surveyed volumes require measured bulk density; reconcile recycling, stocks and final management fate without counting returned solids twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_quartz_resource | extraction | `quartz_resource` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_extraction_diesel | extraction | `extraction_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_extraction_power | extraction | `extraction_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_supplied_raw_sand | washing | `supplied_raw_sand` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_washing_power | washing | `washing_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wash_water | washing | `wash_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_gravel_coproduct | washing | `gravel_coproduct` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sand_slime | washing | `sand_slime` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Weigh matched-period transferred material and sample moisture/solids and actual mineral/chemical composition. Surveyed volumes require measured bulk density; reconcile recycling, stocks and final management fate without counting returned solids twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_purification_power | purification | `purification_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sodium_silicate | purification | `sodium_silicate` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_sulfuric_acid | purification | `sulfuric_acid` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_dryer_natural_gas | purification | `dryer_natural_gas` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_beneficiation_reject | purification | `beneficiation_reject` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Weigh matched-period transferred material and sample moisture/solids and actual mineral/chemical composition. Surveyed volumes require measured bulk density; reconcile recycling, stocks and final management fate without counting returned solids twice. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_controls_power | controls | `controls_power` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | MJ | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_wastewater | controls | `wastewater` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | m3 | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_pm10_air | controls | `pm10_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_co2_air | controls | `co2_air` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_chloride_water | controls | `chloride_water` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Pair calibrated net discharge volume with representative dissolved-chloride samples for the same interval and receiving compartment. Chloride kg = concentration mg/L * discharged m3 / 1000; retain background sampling and report its subtraction separately with uncertainty. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_loading_diesel | dispatch | `loading_diesel` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Calibrated weighing, metering or traceable transfer records; reconcile period, opening/closing stock, actual grade and boundary. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |
| cp_output | dispatch | `final_product` | measurement_record | period; site; amount; original unit; uncertainty; stock changes; route condition; allocation; D; product qualifiers | Independently weigh accepted net loaded sand D with calibrated scale/weighbridge and reconcile dispatch, returns and stocks. Sample matched moisture on wet basis and sieve/mineral/chemical quality. Volume records require measured bulk density, compaction and moisture for that lot. Dry-mass records convert using the same matched w; do not substitute dry kg for as-received kg. | kg | Each meter interval or shipment; monthly reconciliation | Complete year or justified representative production campaign | One declared natural sand grade, raw/washed/classified/dried and measured moisture, at net loaded supply gate | per 1 kg reference flow | Calibration; original records; assay; balance residuals; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | all cards | Exchange = attributable period quantity / D. Reconcile inventories and cancel internal transfers before aggregation. | cp_output; row-specific cp records | per 1 kg reference flow |  |
| physical_balance | production | D is independently measured positive accepted net as-received sand mass in kg at the gate, excluding packaging and rejects. Record moisture fraction w on an explicitly stated wet basis, with 0 <= w < 1; dry solids = D*(1-w), not a second denominator. Convert dry-record quantity to as-received only using matched measured moisture; volumetric sales require measured loose/compacted bulk density and moisture, not a universal sand density. Reconcile raw mineral dry solids, accepted grades, separately sold gravel, fines/slimes, stocks and releases; separately reconcile new water, inherent moisture, internal recycled water, evaporation and discharge. | Matched mass, volume, composition and stock measurements | Balance residual and uncertainty |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| representativeness | dataset | Use matching production and exchange periods, actual technology, geography and supplier state. Record startup, shutdown, seasonal variation and substitutions. | collection records |
| identity_and_ranges | all cards | Unresolved identities and missing independent range evidence remain explicit. Do not replace measurement by a guessed industry range or by missing-as-zero. | manifest review metadata |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | final_product | Verify 1 kg, positive D, product state, property/unit and every required qualifier. Each dataset fixes one product and route. |  |
| validate_balance | site | D is independently measured positive accepted net as-received sand mass in kg at the gate, excluding packaging and rejects. Record moisture fraction w on an explicitly stated wet basis, with 0 <= w < 1; dry solids = D*(1-w), not a second denominator. Convert dry-record quantity to as-received only using matched measured moisture; volumetric sales require measured loose/compacted bulk density and moisture, not a universal sand density. Reconcile raw mineral dry solids, accepted grades, separately sold gravel, fines/slimes, stocks and releases; separately reconcile new water, inherent moisture, internal recycled water, evaporation and discharge. |  |
| validate_coverage | handoff | Verify each applicable exchange, its provider or environmental compartment and final waste fate; identify skipped checks, unresolved identities, missing measurements and upstream gaps. Errors or unassessed mandatory coverage cannot be labelled complete. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Supply 1 kg of qualified natural sand at declared moisture and grading; no equal-strength or end-use performance equivalence across grades |
| excluded_use | Manufactured sand from nonsand rock; recycled concrete aggregate; gravel as reference product; coated/resin-bonded foundry sand; synthetic silica; sand-containing mortar/concrete/glass and extraction services |
| required_metadata | site/year; terrestrial/river/lake/marine origin and permitted extraction reach; actual mineralogy and quartz/carbonate fractions; natural-grain provenance; extraction/processing route; sieve distribution and fines; purity and impurities; salinity/chloride; market grade; moisture and dry-solids basis; net loading gate; water source/return/basin; sediment and waste fate; allocation and lifetime-output basis |
| required_quality_disclosure | Identity and measurement gaps; boundary coverage; uncertainty; allocation; temporal and geographical representativeness |
| update_trigger | Changed product, route, yield, supply, waste fate, site or representative period |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| epa-sand-gravel-1995 | official_guidance | US EPA, AP-42 section 11.19.1 Sand and Gravel Processing, November 1995, original PDF pp.1–3, process description and construction-sand diagram. https://www.epa.gov/sites/default/files/2020-10/documents/c11s19-1.pdf | Natural construction and industrial sand extraction, washing, classification, dewatering and optional purification/drying; qualitative routes only, no historical size, moisture, solids or emission values adopted. |
| ifc-construction-2007 | official_guidance | IFC, Environmental Health and Safety Guidelines for Construction Materials Extraction, 30 April 2007, sections 1.1 and Annex A. https://www.ifc.org/content/dam/ifc/doc/2000/2007-construction-materials-extraction-ehs-guidelines-en.pdf | Quarry route, dust, water, waste and land scope; no universal consumption range. |
| cpc3-notes-2025 | official_guidance | UNSD, CPC Version 3.0 Explanatory Notes, 30 June 2025. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | Classification scope only; no process quantities. |
| ef-allocation-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, consolidated 30 December 2021. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:02021H2279-20211230 | Multifunctionality hierarchy; not a claim of complete PEF conformity. |
