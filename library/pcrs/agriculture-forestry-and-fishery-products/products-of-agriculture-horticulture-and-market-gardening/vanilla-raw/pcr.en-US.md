---
pcr_id: pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vanilla-raw
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Vanilla, raw

## 1. Scope and Applicability

This PCR covers mature green uncured vanilla pods from managed perennial vines through repeated selective harvest, minimal on-farm primary conditioning, grading and farm-gate hand-off. Species, maturity, grade, support and pollination route, harvest rounds and perennial attribution are mandatory. FAO states that mature green beans are mostly odourless and that curing is a separate downstream operation that develops aroma (`fao-vanilla-postharvest-compendium`). Cured or dried pods, cleaned or sorted plant-gate alternatives, extract, powder and other post-curing products are excluded.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.agriculture-forestry-and-fishery-products.products-of-agriculture-horticulture-and-market-gardening.vanilla-raw |
| classification_refs | CPC 3.0: 01658 Vanilla, raw; mapping relation: narrower |
| covered_products | Mature green uncured vanilla pods of declared species and grade at farm gate before curing |
| excluded_products | Cured or dried pods; cleaned or sorted plant-gate alternatives; extract, powder and planting material |
| representative_product | Mature green uncured Vanilla planifolia pods, declared grade, at farm gate |
| production_route | Perennial vine management, declared support and pollination route, repeated selective hand harvest, minimal conditioning and green-pod grading |
| market_state | Fresh green uncured and undried pods on an as-received mass basis before aroma-development processing |

The managed-biological-production parent is perennial vanilla-vine cultivation. Production or technology routes differing in support system, shade, pollination method, inputs, yield or asset use must be recorded separately; weighted aggregation is allowed only when each route inventory and yield contribution remain traceable.

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Mature green uncured vanilla pods of declared species and grade at farm gate before curing |
| How much | 1 kg as-received mass |
| How well | Meets declared maturity and grade; green, uncured, undried and excluding rejected pods |
| How long or cycle | Declared reporting period covering attributed perennial phases and every selective harvest round forming the reference amount |
| reference_flow_link | vanilla_raw_reference |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Vanilla, raw `51e085e4-b15c-4933-b7eb-45eee9bd8958` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | botanical species; mature-green criterion; uncured and undried state; producer grade; as-received moisture basis; farm-gate hand-off before curing; support system; pollination route; harvest rounds; geography and reporting period |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize all inventory amounts to 1 kg accepted mature green uncured pods on the declared as-received moisture basis. |
| `grade_mass_reconciliation` | harvest, conditioning and grading hand-offs | Mass | kg | Reconcile input to accepted grade, rejected or downgraded pods, incidental matter and mass loss; rejected material never enters reference output. |
| `harvest_round_aggregation` | repeated selective harvest | Mass | kg | Aggregate harvested and rejected mass by round before reporting-period aggregation, retaining dates and maturity criteria. |
| `perennial_normalization` | establishment, replacement and shared infrastructure | Mass | kg | Attribute multi-period burdens once over accepted output of the same productive period; prohibit downstream re-annualization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Established or newly planted managed vanilla vines with propagation source, species, support system, vine age or phase and prior-period carry-in declared |
| starting_condition_role | Starting stock for perennial managed production; establishment burdens are included or linked and attributed over the declared productive period |
| product_classification_scope | Mature green uncured pods at farm gate before curing; excludes cured, dried, plant-gate cleaned or sorted goods and extract |
| recursive_input_rule | Farm-retained vines, cuttings and green pods remain visible burden-carrying internal flows; purchased same-category material requires an upstream dataset and cannot be zero burden |
| upstream_dataset_requirement | Purchased propagation, nutrients, water and energy require compatible upstream datasets; concrete flow identity verification|
| disclosure | Declare species, support and shade, pollination route, vine phase and productive years, replacements, harvest rounds, maturity and grade, moisture basis, reject destinations and pre-curing hand-off |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_managed_vine_route` | `perennial_vine_management` | Include propagation or vine carry-in, support and shade, training and pruning, pollination, nutrients, water, energy, shared infrastructure and pod development. | `fao-vanilla-postharvest-compendium` |
| `boundary_selective_harvest` | `selective_pod_harvest` | Model repeated maturity-selective harvest independently and record collected pods, retained immature pods, incidental matter and losses by round. | `fao-vanilla-postharvest-compendium` |
| `boundary_primary_conditioning` | `on_farm_primary_conditioning` | Include only minimal pre-curing handling; exclude killing, sweating, fermentation, aroma development, deliberate drying and plant-gate cleaning. | `fao-vanilla-postharvest-compendium` |
| `boundary_grading_handoff` | `green_pod_grading_handoff` | Declare accepted grade and every downgraded or rejected destination, with hand-off before curing. | `fao-vanilla-postharvest-compendium` |
| `boundary_route_deltas` | alternative support, pollination and handling routes | Keep topology, inputs, energy, yield and asset-use differences separate unless route records support reproducible weighting. | `fao-vanilla-postharvest-compendium` |
| `boundary_excluded_processing` | downstream operations | Exclude curing, drying, aroma-development conditioning, plant-gate cleaning or sorting, grinding and extract manufacture. | `fao-vanilla-postharvest-compendium` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `perennial_vine_management` | Perennial vanilla-vine management and pod development | `required` | Always; declare the alternative technology route delta for support and pollination, period, state and hand-off | Managed biological production parent | kg harvest-ready mature green pods |
| `selective_pod_harvest` | Repeated selective harvest of mature green pods | `required` | Always; use batch mode records for each round and declare route, period, state and hand-off | Harvest and capture | kg harvested green pods by round |
| `on_farm_primary_conditioning` | Minimal on-farm pre-curing handling | `required` | Always; declare route, period, state and hand-off | Primary conditioning | kg handled green uncured pods |
| `green_pod_grading_handoff` | Green-pod grading and farm-gate hand-off | `required` | Always; declare route, period, state and hand-off | Grading and sorting | 1 kg accepted mature green uncured pods |

### Process: Perennial vanilla-vine management and pod development (`perennial_vine_management`)

This perennial, period-indexed process links establishment, vine replacement, support or shade infrastructure, pollination and pod development to the periods and routes producing harvested pods.

#### Inputs

##### Product flows

###### Fertilizer, urea input (`nutrient_inputs`)

Include this conditional card only when Fertilizer, urea is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, urea
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, urea used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg accepted green uncured pods.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_management_inputs`

###### Fertilizer, monoammonium phosphate input (`nutrient_inputs_monoammonium_phosphate`)

Include this conditional card only when Fertilizer, monoammonium phosphate is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, monoammonium phosphate
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, monoammonium phosphate used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg accepted green uncured pods.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_management_inputs`

###### Fertilizer, potassium chloride input (`nutrient_inputs_potassium_chloride`)

Include this conditional card only when Fertilizer, potassium chloride is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Fertilizer, potassium chloride
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Fertilizer, potassium chloride used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg accepted green uncured pods.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_management_inputs`

###### Cattle manure, as applied input (`nutrient_inputs_cattle_manure`)

Include this conditional card only when Cattle manure, as applied is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Cattle manure, as applied
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Cattle manure, as applied used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg accepted green uncured pods.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_management_inputs`

###### Agricultural limestone input (`nutrient_inputs_agricultural_limestone`)

Include this conditional card only when Agricultural limestone is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Agricultural limestone
- Flow property / unit: Mass / kg product
- Amount rule: Measured quantity of Agricultural limestone used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg accepted green uncured pods.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_management_inputs`

###### Irrigation water supplied to vines (`irrigation_water`)

Identity and quantity rule: Metered volume or delivered volume calculated from pump hours and verified flow rate; rainfall is disclosed but not exchanged.

- Selected flow: Irrigation water from foreground source records
- Flow property / unit: Volume / m3
- Amount rule: Metered volume or delivered volume calculated from pump hours and verified flow rate; rainfall is disclosed but not exchanged.
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg accepted green uncured pods.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_management_inputs`
- Range: Quantity QA range
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 20
  - Unit: m3/kg reference product
  - Basis: delivered irrigation per kg accepted output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Electricity, medium voltage input (`management_energy`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `calculated_value`
- Specificity: `technology_specific`
Raw activity or stage basis: per 1 kg accepted green uncured pods.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_management_inputs`

###### Diesel fuel input (`management_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `calculated_value`
- Specificity: `technology_specific`
Raw activity or stage basis: per 1 kg accepted green uncured pods.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_management_inputs`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvest-ready green vanilla pods (`standing_vines_mature_pods`)

Identity and quantity rule: Internal intermediate calculated from round-level harvest and loss reconciliation; no external UUID.

- Selected flow: Harvest-ready green vanilla pods
- Flow property / unit: Mass / kg harvest-ready pods
- Amount rule: Internal intermediate calculated from round-level harvest and loss reconciliation; no external UUID.
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg accepted green uncured pods.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_perennial_vine_records`
- Range: Quantity QA range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: harvest-ready pods per kg accepted output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Removed vanilla plant biomass sent to treatment (`removed_vanilla_biomass_waste`)

Conditional only on this specific waste material actually being separately collected for documented treatment inside the existing process boundary. This card does not prove site segregation. A real mixed stream keeps one composition-defined identity and its actual handover; do not extract hypothetical component exchanges or duplicate mixture and component exports. Retained stock, an in-situ residue or direct environmental return is not this waste export.

Collection and handover scope: Identity and quantity rule: Measure residues by retained, recovered, treated or discarded destination; in-situ material is not also exported as waste. Raw activity or stage basis: per 1 kg accepted green uncured pods.

- Selected flow: Removed vanilla plant biomass sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Measure the mass of this specific waste material at its actual collection/treatment handover; retain the original process/lot/period basis and use the existing throughput-linkage and normalization rules exactly once. Keep the unallocated physical quantity ledger separate from Section 7 shared-burden allocation.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_residue_and_emission_records`

No numerical range is transferred from the retired collection card. Use compatible measured quantities and identity-specific evidence; missing evidence remains a completeness gap, not zero. The UUID remains unresolved until a compatible exact identity is confirmed.

##### Elementary flows

###### Nitrous oxide to air (`reported_field_emissions`)

Conditional one-material exchange: include Nitrous oxide to air only when the actual route and records establish its use or release. Other products, fuels, waste materials, or emitted species require separate atomic rows with independent quantity, state and identity. No use is inferred from this example.

- Selected flow: Nitrous oxide to air
- Flow property / unit: Mass / kg N2O
- Amount rule: Measure or calculate only Nitrous oxide to air for this process and period using route-specific records; do not combine other species or carriers.
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg accepted green uncured pods.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_residue_and_emission_records`

### Process: Repeated selective harvest of mature green pods (`selective_pod_harvest`)

Mature pods are selectively removed from standing perennial vines in repeated rounds while immature pods remain for later rounds.

#### Inputs

##### Product flows

###### Harvest-ready green vanilla pods (`harvest_ready_vines_input`)

Identity and quantity rule: Internal transfer equal to reconciled harvest-ready pod mass across all rounds; no external UUID.

- Selected flow: Harvest-ready green vanilla pods
- Flow property / unit: Mass / kg harvest-ready pods
- Amount rule: Internal transfer equal to reconciled harvest-ready pod mass across all rounds; no external UUID.
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg accepted green uncured pods.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_selective_harvest_rounds`
- Range: Quantity QA range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 5
  - Unit: kg/kg reference product
  - Basis: harvest-ready input per kg accepted output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

###### Electricity, medium voltage input (`harvest_energy`)

Include this conditional card only when Electricity, medium voltage is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Electricity, medium voltage
- Flow property / unit: Energy / kWh
- Amount rule: Measured quantity of Electricity, medium voltage used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `technology_specific`
Raw activity or stage basis: per 1 kg harvested green pods.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_selective_harvest_rounds`

###### Diesel fuel input (`harvest_energy_diesel`)

Include this conditional card only when Diesel fuel is actually used in the declared process. For every other actual product or carrier, create a separate atomic exchange with its own identity and measured amount; do not infer its use from this example.

- Selected flow: Diesel fuel
- Flow property / unit: Mass / kg
- Amount rule: Measured quantity of Diesel fuel used by this process and period; report zero or not applicable only when the route records establish absence.
- Value mode: `foreground_record`
- Specificity: `technology_specific`
Raw activity or stage basis: per 1 kg harvested green pods.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_selective_harvest_rounds`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Harvested mature green uncured pods (`harvested_green_pods`)

Identity and quantity rule: Sum measured harvest-round mass while retaining species, maturity, round and lot identifiers.

- Selected flow: Internal harvested mature green uncured pods
- Flow property / unit: Mass / kg
- Amount rule: Sum measured harvest-round mass while retaining species, maturity, round and lot identifiers.
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg accepted green uncured pods.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_selective_harvest_rounds`
- Range: Quantity QA range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 4
  - Unit: kg/kg reference product
  - Basis: harvested pods per kg accepted output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Pods lost or rejected during harvest (`harvest_rejects`)

Identity and quantity rule: Measure damaged, immaturely detached or diseased pods by round; pods retained on vines are neither output nor waste.

- Selected flow: Internal/deferred rejected pod waste by condition and destination
- Flow property / unit: Mass / kg
- Amount rule: Measure damaged, immaturely detached or diseased pods by round; pods retained on vines are neither output nor waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg harvested green pods.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_selective_harvest_rounds`
- Range: Quantity QA range
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg harvested green pods
  - Basis: rejected or lost pods per kg harvested pods
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

### Process: Minimal on-farm pre-curing handling (`on_farm_primary_conditioning`)

Only shade holding and removal of loose field matter are included; killing, sweating, fermentation, aroma development, deliberate drying and plant-gate cleaning are prohibited.

#### Inputs

##### Product flows

###### Harvested green uncured pods entering handling (`harvested_pods_input`)

Identity and quantity rule: Internal transfer equal to measured harvested-pod output, retaining lot and round identity.

- Selected flow: Internal harvested mature green uncured pods
- Flow property / unit: Mass / kg
- Amount rule: Internal transfer equal to measured harvested-pod output, retaining lot and round identity.
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg handled green pods.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_primary_conditioning`
- Range: Quantity QA range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg handled green pods
  - Basis: harvested input per kg handled pods
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Minimally handled green uncured pods (`conditioned_green_pods`)

Identity and quantity rule: Measure after shade holding or loose field-matter removal; product remains green, uncured, undried and mostly odourless.

- Selected flow: Internal minimally handled green uncured pods
- Flow property / unit: Mass / kg
- Amount rule: Measure after shade holding or loose field-matter removal; product remains green, uncured, undried and mostly odourless.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg handled green pods.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_primary_conditioning`
- Range: Quantity QA range
  - Range role: `qa_guardrail`
  - Lower: 0.5
  - Upper: 1
  - Unit: kg/kg harvested input
  - Basis: handled green pods per kg harvested input
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

###### Loose field matter and handling rejects (`conditioning_rejects`)

Identity and quantity rule: Measure removed soil, plant fragments and damaged pods by destination.

- Selected flow: Internal/deferred handling waste by material and destination
- Flow property / unit: Mass / kg
- Amount rule: Measure removed soil, plant fragments and damaged pods by destination.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg harvested input.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_primary_conditioning`
- Range: Quantity QA range
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 0.5
  - Unit: kg/kg harvested input
  - Basis: removed matter and rejects per kg harvested input
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

### Process: Green-pod grading and farm-gate hand-off (`green_pod_grading_handoff`)

The input is classified into the accepted declared grade and downgraded, rejected or waste destinations, with hand-off strictly before curing.

#### Inputs

##### Product flows

###### Minimally handled green pods entering grading (`conditioned_pods_input`)

Identity and quantity rule: Internal transfer equal to measured handled-pod output.

- Selected flow: Internal minimally handled green uncured pods
- Flow property / unit: Mass / kg
- Amount rule: Internal transfer equal to measured handled-pod output.
- Value mode: `calculated_value`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg accepted green uncured pods.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_green_pod_grading`
- Range: Quantity QA range
  - Range role: `qa_guardrail`
  - Lower: 1
  - Upper: 2
  - Unit: kg/kg reference product
  - Basis: grading input per kg accepted output
  - Basis kind: `reference_flow`
  - Evidence kind: `reasoned_estimate`

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted mature green uncured vanilla pods at farm gate (`vanilla_raw_reference`)

Identity and quantity rule: Exactly 1 kg after grade reconciliation; fixed identity is detail-confirmed CPC 01658 Product flow at farm gate and narrowed by required qualifiers.

- Selected flow: Vanilla, raw `51e085e4-b15c-4933-b7eb-45eee9bd8958`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
Raw output measurement and reconciliation: Exactly 1 kg after grade reconciliation; fixed identity is detail-confirmed CPC 01658 Product flow at farm gate and narrowed by required qualifiers.

- Amount rule: 1 kg
- Value mode: `fixed_value`
- Specificity: `generic`
Raw activity or stage basis: 1 kg accepted mature green uncured pods.

- Normalization basis: per declared reference flow
- Basis kind: `reference_flow`
- Evidence kind: `method_formula`
- Sources: `reference-normalization-definition`
- Range: Quantity QA range
  - Range role: `allowed_range`
  - Lower: 1
  - Upper: 1
  - Unit: kg/kg reference product
  - Basis: reference product divided by the 1 kg reference amount
  - Basis kind: `reference_flow`
  - Evidence kind: `method_formula`
  - Sources: `reference-normalization-definition`

##### Waste flows

###### Off-grade, damaged or rejected green pods (`off_grade_pods`)

Identity and quantity rule: Measure each off-grade, damage, rework, recovery or discard route; rework may return once with a linked lot and may not enter accepted output twice.

- Selected flow: Internal/deferred off-grade pod waste by state and destination
- Flow property / unit: Mass / kg
- Amount rule: Measure each off-grade, damage, rework, recovery or discard route; rework may return once with a linked lot and may not enter accepted output twice.
- Value mode: `foreground_record`
- Specificity: `site_specific`
Raw activity or stage basis: per 1 kg grading input.

- Normalization basis: per declared reference flow
- Basis kind: `process_output`
- Evidence kind: `collected_record`
- Collection protocol: `cp_green_pod_grading`
- Range: Quantity QA range
  - Range role: `default_estimate`
  - Lower: 0
  - Upper: 1
  - Unit: kg/kg grading input
  - Basis: off-grade or rejected pods per kg grading input
  - Basis kind: `process_output`
  - Evidence kind: `reasoned_estimate`

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_perennial_periods` | establishment, replacement and productive years | Attribute once across the declared productive period using accepted green-pod mass from that period; retain phase/year links and disclose unproductive years. |  |
| `allocation_repeated_harvest` | selective harvest rounds | Assign round-specific inputs, energy, rejects and output directly; allocate truly shared burdens by harvested mass across relevant rounds without period-level duplication. |  |
| `allocation_shared_infrastructure` | supports, shade, irrigation, tools and other shared assets | Enumerate consuming nodes and service periods, choose one documented use-time, area or productive-output basis and prevent duplication. |  |
| `allocation_rejects` | residues and rejected or off-grade pods | Discard receives no avoided-burden credit; a recovered product leaving the boundary is separate and requires disclosed allocation or substitution and sensitivity. |  |
| `allocation_single_reference_product` | accepted green uncured pods | The baseline has one intended reference product; rejects, incidental matter, retained immature pods and residues cannot become co-products merely to reduce burden. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

Retain raw site, lot, cycle and stage quantities and denominators in each collection protocol. Reconcile stocks, losses, moisture and co-product attribution first, then normalize: normalized exchange = attributable raw exchange × declared reference quantity / accepted hand-off product quantity on the same boundary and measurement basis. Apply perennial-establishment and shared-operation attribution before this normalization. Never set an internal-transfer quantity equal to the final reference quantity. Per declared reference flow means the amount, unit and product state in section 3; the data package must declare its actual route and gate.


### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_perennial_vine_records` | `perennial_vine_management` | propagation, vine phases, support, pollination, standing crop | field register | species; source; mass; vine count/age; establishment/replacement; support/shade; pollination; dates; harvest-ready mass | Reconcile plot, propagation and observation records by route and period; Raw aggregation and attribution: stratify before attribution and aggregation | kg; count; date | each event and season | all burden-bearing years | farm and plot | per declared reference flow | dated records, invoices, species record and sign-off |
| `cp_management_inputs` | `perennial_vine_management` | nutrients, irrigation, energy | invoice, log, meter | product; composition; mass; water source/volume; pump hours/rate; carrier/quantity; node; date | record each event and calculate only with verified factors; Raw aggregation and attribution: sum by actual product/carrier before normalization | kg; m3; kWh; L; MJ | each application or meter interval | complete reporting period | farm, plot and equipment route | per declared reference flow | invoice, calibration, log and factor record |
| `cp_residue_and_emission_records` | `perennial_vine_management` | residues and emissions | weighing log and calculation sheet | material; mass; destination; substance; basis; compartment; activity; factor; method |weigh exported residues and calculate identified emissions only; Raw aggregation and attribution: reconcile destinations; aggregate after resolution cultivation_residues_specific_output: Mandatory material, quantity and boundary-role identification, not a selected exchange. Preserved collection scope: Identity and quantity rule: Measure residues by retained, recovered, treated or discarded destination; in-situ material is not also exported as waste. Raw activity or stage basis: per 1 kg accepted green uncured pods. Retain every actual material and fate, including materials not represented by the conditional card. Record actual composition/state, native property/unit, measured quantity, cohort/period, recipient, treatment responsibility and unique handover; keep original throughput, normalization and allocation duties. Before completeness, instantiate only actual distinct physical exchanges with compatible UUIDs or exact unresolved identities. A real mixed stream remains one measured composition-defined identity; do not invent segregation or duplicate mixture/component exports. Retained/deferred stock, in-situ residues and soil returned directly to the environment keep their actual balance/stock/return roles, not assumed technosphere waste exports; establish method and boundary responsibility before any elementary exchange. Independently sold recovery needs its actual Product handover and must not also be this waste. Missing records are not zero and the retired class-level numerical screen is not a component limit. | kg | each removal and calculation period | complete reporting period | plot and destination | per declared reference flow | scale, receipt, method citation and review |
| `cp_selective_harvest_rounds` | `selective_pod_harvest` | harvest, rejects, losses, energy | lot sheet | round/date; plot; species; maturity; masses; retained status; carrier; labour mode | weigh each round and link equipment records; Raw aggregation and attribution: sum linked rounds and keep rejects separate | kg; MJ; date | every round | all contributing rounds | plot, round and lot | per declared reference flow | calibrated scale, signed lot sheet and energy log |
| `cp_primary_conditioning` | `on_farm_primary_conditioning` | input, handled pods, removed matter | handling sheet | lot; input/output mass; holding time; operations; rejects/destination; no-curing declaration | weigh before/after and document no curing or deliberate drying; Raw aggregation and attribution: reconcile input, output, rejects and loss | kg; hour | every lot | all contributing lots | handling area and lot | per declared reference flow | calibrated scale, time log, checklist and photos/equivalent |
| `cp_green_pod_grading` | `green_pod_grading_handoff` | accepted grade, off-grade, rework, hand-off | grading/dispatch record | lot; species; maturity; grade; input; accepted; off-grade; rework; destination; date; uncured state | weigh each state and link accepted lots to pre-curing dispatch; Raw aggregation and attribution: reconcile all states and remove rework duplication | kg; date | every lot | all contributing lots | grading site and lot | per declared reference flow | calibrated scale, grade specification, dispatch and no-curing declaration |
| `cp_phase1_environment_coverage` | perennial_vine_management | managed environmental coverage by actual node | site/activity/method ledger | actual production nodes; soil/substrate route; climate/soil; nutrient product mass and composition; residue fate/N; relevant mineralisation/organic-soil/excreta activity; method/tier/equation/version; pathway factors and units; lime/urea; actual fuels; substance/compartment; supplier coverage; site and actual managed nodes; area; dated occupation intervals; co-users; establishment/immature history; actual prior/current land classes and transformation dates/areas; carbon-method coverage; upstream land coverage | Collect original records by the actual responsible production node and matched lot/period; retain provenance, method applicability and uncertainty. Reconcile with existing protocols and provider coverage, do not add duplicate events. Explicitly document inapplicability; absent evidence is a gap. | native activity units; kg N or substance; area/time as applicable | event and annual/lot reconciliation | matched production/cohort period | all actual managed-production nodes | apply applicable coverage calculations then final normalization once | original records, method worksheets and applicability evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | all inventory rows | normalized amount = attributed amount / accepted reference mass | attributed amount; accepted mass | amount per kg reference product | `reference-normalization-definition` |
| `calc_period_attribution` | establishment, replacement, shared infrastructure | attributed burden = recorded burden × documented service share | burden; nodes; period; share basis | period-attributed burden |  |
| `calc_harvest_round_sum` | repeated selective harvest | period mass = sum of linked round masses; rejects and retained pods separate | round; harvested; reject; retained status | period harvested/rejected mass |  |
| `calc_mass_reconciliation` | handling and grading | difference = input - accepted - rejects - retained/transferred outputs | input and all state masses | difference and completeness flag | `reference-normalization-definition` |
| `propagation_material_identity_and_fate` | `perennial_vine_management` | For the original propagation_material collection role at this operation, identify the actual physical form, species/material, composition, state and supply/treatment boundary before creating exchanges. Each seed lot, transplant, crown, cutting, larval stage, formulation, coating, preservative or separated residue actually used/generated requires its own concrete card where relevant to this role; these examples are alternatives, not a required recipe. Retain existing collection records and route-specific source evidence. Count-based planting records require measured or supplier-supported mass-per-unit when matched to a mass-based provider; retain count and mass as linked attributes rather than two purchases. Do not merge separate husk/shell or separate agents. A real mixed stream requires composition and recipient evidence and is counted once. Before completeness, record every applicable amount and native unit, link a compatible verified UUID or explicitly unresolved identity, preserve stock/return attribution, and normalize the attributable raw quantity once to the accepted reference output. Missing records are not zero; aggregate ranges are not individual-input defaults. | `cp_perennial_vine_records` | Identity-specific exchanges and reconciled activity records |  |
| `chemical_species_mass_accounting` | `elementary_nutrient_emissions` | Final elementary exchanges use the mass of the identified substance and one actual receiving compartment. Keep nutrient/activity ledgers separate: species-specific N2O-N × 44/28 gives N2O, NH3-N × 17/14 gives NH3, nitrate-N × 62/14 gives nitrate, and phosphate-P × 95/31 gives phosphate. If the selected flow is elemental phosphorus instead, report kg P and convert phosphate mass by 31/95 only when that species basis is evidenced. Apply a conversion exactly once only when the method output is on the elemental basis; measured compound mass is not reconverted. Total nutrient losses cannot be assigned to a single species without a supported split, and residual/retained soil nutrient is not an emission. Keep direct/indirect pathway ledgers and avoid repeating a pathway already included in the chosen method or upstream inventory. Factor uncertainty ranges screen factors on their stated basis, not final compound amounts or admissible site emissions. Normalize the attributable compound mass once using the accepted reference quantity and the matched measured output. Unknown activity, identity or compartment remains an evidence gap and blocks a completeness claim. | `cp_residue_and_emission_records`; species-specific activity ledger, method pathway and factor basis, matched accepted output | Identity-specific exchanges and reconciled activity records |  |

### Environmental Coverage Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_managed_environment_coverage` | actual managed-production nodes | For the actual owned managed-production node(s), require an applicability ledger for direct soil N2O, volatilisation/deposition-derived indirect N2O, leaching/runoff-derived indirect N2O, NH3/NOx and nutrient losses, plus actual liming/urea-use CO2. Primary calculation precedence is a representative pathway measurement, then a validated site/national method applicable to the crop, soil and management; otherwise use the compatible 2006 IPCC/2019-refined managed-soil equations and climate/input-specific factor selection for N2O and lime/urea CO2. Retain the exact edition, equation, tier, activity and factor units, climate and management applicability; no universal dose or emission factor is prescribed. Non-soil/protected routes need a method valid for their actual medium; do not force soil factors onto an inapplicable route. Use the same period/field N ledger for synthetic and organic additions, residues, actual relevant mineralisation/organic-soil and excreta pathways; demonstrate absent pathways rather than infer zero. Calculate direct and each indirect component separately, then assign each once to matching existing or new concrete cards; never add a total to its components. Convert N2O-N to molecular N2O by 44/28 once. NH3, NOx and nutrient/pesticide loss require an applicable measured or documented substance/fate model; total N/P or an unexplained balance residual is not a compound release. Keep actual receiving compartments and molecular versus elemental/reporting bases explicit; indirect formation does not remove the same N from the source ledger twice. Include actual local combustion releases separately using fuel-specific combustion-only methods; purchased electricity/heat/services retain upstream coverage once. Add one identity-specific exchange only for a supported release and reuse an existing matching card, with verified UUID or explicit unresolved identity. Missing applicable method/activity/factor/identity blocks completeness; it is not a justified zero. Attribute raw activity/release totals and normalize once to the matched accepted reference output. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference | `review-ipcc-soils-2019` |
| `calc_managed_land_coverage` | actual managed-production nodes | For each actual owned managed-production site, collect the occupied area and dated occupation intervals, including attributable establishment/immature and production periods. Occupation is area multiplied by actual duration, converted explicitly to the selected area-time unit (1 ha = 10,000 m2; time in years); hectares per crop-cycle alone are not an area-time result without duration. Partition or take the union of overlapping establishment/management intervals so the same area-time is counted once, with shares across actual co-users summing to one. Record evidenced land transformation separately by actual from/to land class, event area and date under the declared land-use method; transformation has area units and is not added to occupation. Planting, continued occupation or missing prior-land data do not establish a transformation or zero transformation. Preserve actual historical-event attribution and carbon-stock/emission method coverage where applicable; no invented land conversion or generic carbon credit. Instantiate separate compatible elementary identities with verified UUIDs or explicit unresolved identities; attribute once and normalize to the matched final reference. Purchased completed biological inputs inherit compatible upstream land coverage once instead of duplicating it locally. Missing applicable land identity, area, duration or prior-state evidence remains a completeness gap; documented no transformation is a valid absence. | cp_phase1_environment_coverage | attributed native environmental quantities per matched final reference |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_state` | reference product and lots | Species, maturity, grade, uncured/undried state, moisture basis and farm-gate hand-off are complete. | species, grade, lot, no-curing and dispatch records |
| `dq_temporal_completeness` | perennial route and harvest | Cover all burden-bearing phases and contributing rounds and disclose exclusions. | plot history, phase, round and replacement records |
| `dq_route_separation` | alternative routes | Preserve route differences until weighting is reproducible. | route-coded records and aggregation sheet |
| `dq_mass_balance` | harvest, handling, grading | Reconcile each round/lot and investigate differences beyond site tolerance. | signed balance and calibration record |
| `dq_flow_resolution` | concrete flow identity evidence | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. | exchange-resolution and detail evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | reference product | Require fixed UUID, Mass property/unit group and all qualifiers; reject cured, dried, aroma-developed, plant-gate cleaned/sorted goods and extract. | `fao-vanilla-postharvest-compendium` |
| `validate_process_topology` | process map | Require all four nodes and hand-offs; harvest links to standing vines and conditioning/grading remain before curing. | `fao-vanilla-postharvest-compendium` |
| `validate_maturity_grade_species` | every accepted lot | Require species, maturity criterion, grade, green uncured state and farm-gate hand-off. | `fao-vanilla-postharvest-compendium` |
| `validate_period_attribution` | perennial and shared burdens | Require phase, service-period, consuming-node and attribution evidence; fail omission or duplication. |  |
| `validate_round_completeness` | repeated selective harvest | Require complete ordered rounds and reconcile harvested, rejected, retained and lost states. |  |
| `validate_reject_routing` | rejected and off-grade states | Each state links to one rework, downgraded/recovered exit or discard destination and is excluded from accepted output. |  |
| `validate_flow_bindings` | all cards | Verify each actual exchange against its concrete flow UUID, physical state, property and unit; preserve explicit unresolved identities when confirmation is unavailable. |  |
| `validate_mass_balance` | harvest, handling and grading | Reconcile inputs and outputs by round/lot and explain mass loss. | `reference-normalization-definition` |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground production package for mature green uncured vanilla pods at farm gate |
| downstream_use | `secondary_dataset`; `background_dataset` after independent review and geography, time and technology matching |
| allowed_use | Farm-gate LCA of green raw pods and upstream input to a separately modelled curing system |
| excluded_use | Cured/dried pods, plant-gate cleaned/sorted goods, extract, powder or unspecified aromatic vanilla product |
| required_metadata | species; plot/geography; support/shade; pollination; vine phase/productive period; replacements; rounds; maturity/grade; moisture; uncured state; reject destinations; hand-off |
| required_quality_disclosure | phase/round coverage; route separation; flow resolution; meter/scale quality; mass balance; shared infrastructure attribution; exclusions; provisional-range status |
| update_trigger | Change in species, route, period attribution, maturity/grade, hand-off state, topology, reference UUID, concrete flow identity verification|

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `fao-vanilla-postharvest-compendium` | `official_guidance` | Food and Agriculture Organization of the United Nations, *Vanilla: Post-harvest Operations*, Post-harvest Compendium | Production/harvest sequence; green mature pods mostly odourless; curing as separate aroma-development operation; pre-curing boundary and exclusions |
| `reference-normalization-definition` | `method_factor` | This PCR 1 kg as-received reference normalization and node mass-balance identity | Exact reference output, normalization and mass reconciliation |
| `review-ipcc-soils-2019` | official_guidance | IPCC 2019 Refinement, Volume 4, Chapter 11, https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch11_Soils_N2O_CO2.pdf | Managed-soil direct/indirect N2O and lime/urea CO2 method context; factors require actual applicability and site activity, not a product default. |
