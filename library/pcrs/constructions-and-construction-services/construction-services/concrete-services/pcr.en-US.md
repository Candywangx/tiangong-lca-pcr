---
pcr_id: pcr.constructions-and-construction-services.construction-services.concrete-services
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
content_maturity: authored_methodology
---

# Placement, finishing and curing of cast-in-place building concrete

## 1. Scope and Applicability

This PCR covers a narrowly declared building concrete placement package from receipt of fresh concrete at a prepared workface to accepted in-place work. It includes actual placing, compaction, ordinary finishing, curing, testing, routine rework and on-site cleanup. Formwork and reinforcement are inspected starting conditions owned by separate parent packages, whose burdens must remain in a whole-project model. It does not prescribe a concrete mixture, strength, cure duration, loss rate or building lifetime. The actual contract and acceptance specification determine these qualifiers.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.concrete-services |
| classification_refs | CPC 3.0 54540; narrower placement-package scope, not the complete concrete-services leaf. |
| covered_products | Contractor placement, compaction, ordinary surface finishing, curing and acceptance of cast-in-place building elements. |
| excluded_products | Ready-mix manufacture; precast manufacture/erection; formwork fabrication/installation and reinforcement works; foundations engineering; roads, bridges, marine concrete; specialist coating systems; whole buildings. |
| representative_product | One declared building slab or wall pour, with specified mixture, geometry, finish and acceptance criteria. |
| production_route | Receive fresh concrete → place and compact → finish → protect and cure → inspect and accept. |
| market_state | Accepted installed construction service at contractor handover; no assumed lifetime service equivalence. |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Accepted cast-in-place building concrete placement service |
| How much | 1 m3 accepted net in-place volume |
| How well | Declared element, mixture/strength/exposure specification, geometry, finish, curing and acceptance evidence. |
| How long or cycle | One identified pour and its actual curing and acceptance period; no future repair cycles. |
| reference_flow_link | `accepted_concrete_placement_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted cast-in-place building concrete placement service |
| Reference flow property | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` |
| Reference unit group | Units of volume `93a60a57-a3c8-12da-a746-0800200c9a66` |
| Reference unit | m3 |
| Required qualifiers | Building element; site/date; mixture and strength at specified age; exposure class; accepted net geometry; finishing specification; pumping method; cure regime and duration; acceptance gate; formwork/rebar responsibilities; supplier and delivery boundary; return/waste destinations; shared assets and study capital policy. |

Declare every required qualifier in the data package. An accepted service volume does not make fresh-concrete input or an internal transfer equal to one cubic metre.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| accepted_volume | reference product | Volume | m3 | Use accepted net geometric volume; exclude voids and unaccepted/rejected work. Link acceptance record to cp_curing. Never substitute delivered fresh volume. |
| fresh_density | fresh_concrete; returned_fresh_concrete | Volume | m3 | When only mass is recorded, divide mass by measured density of the same fresh batch; preserve sampling and moisture/air-content state, without a universal density. |
| wet_waste | placement_wash_slurry; placement_concrete_waste; `finishing_residues_captured_sanding`; `finishing_residues_rejected_mortar`; `finishing_residues_spent_abrasive`; rejected_hardened_concrete_waste | Mass | kg | Retain wet/dry basis and density or solids fraction for conversions; wet slurry and its separated solids must not overlap. |
| fuel_mass | placement_diesel | Mass | kg | Retain measured diesel mass; volume conversion requires supplier density at declared temperature and energy conversion requires the documented lower heating value. |
| energy_units | placement_electricity; finishing_electricity; curing_electricity | Energy | kWh | Retain fuel mass and electricity separately; convert kWh to MJ using 3.6 only when required, and fuel mass with documented lower heating value. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accessible building workface; surveyed geometry and inspected, installed formwork/reinforcement/embedded items accepted by the responsible upstream package; delivered fresh concrete at site receipt. |
| starting_condition_role | Declared supplied state, not burden-free production; this PCR owns only placement, finishing and curing responsibilities. |
| product_classification_scope | Narrower than CPC 3.0 54540; construction service, not concrete product or construction asset. |
| recursive_input_rule | If a subcontractor supplies the same service category, choose either its upstream service dataset or disaggregated activity once; do not recurse indefinitely or count both. |
| upstream_dataset_requirement | Link fresh-concrete supplier manufacture and delivery datasets and responsible formwork/rebar parent packages. Link actual fuel, power, water, material, equipment and downstream waste services using matching gates. |
| disclosure | Disclose truncated tasks, ownership of delivery/washout, excluded formwork/rebar and capital policy. A whole-project model must include those packages elsewhere; this service is not a whole building result. |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers a narrowly declared building concrete placement package from receipt of fresh concrete at a prepared workface to accepted in-place work. It includes actual placing, compaction, ordinary finishing, curing, testing, routine rework and on-site cleanup. Formwork and reinforcement are inspected starting conditions owned by separate parent packages, whose burdens must remain in a whole-project model. It does not prescribe a concrete mixture, strength, cure duration, loss rate or building lifetime. The actual contract and acceptance specification determine these qualifiers. |  |
| service_gate | all processes | Include actual placement, compaction, finish, cure protection, inspection, routine corrections and cleanup until specified acceptance; later structural remediation requires separate scope. | ufgs-cast-in-place-2019 |
| reaction_boundary | curing | Hydration changes binder/water composition within finished concrete. Distinguish retained hardened material, unreacted constituents, evaporation, removed specimens and rejects; no assumed stoichiometric pathway, reaction yield or carbonation credit. | epa-concrete-washout-2012 |
| washout_gate | placement | Include on-site chute/pump/tool washing when contractually owned; segregate supplier off-site drum cleaning. Contain washwater; identify actual recycler/treatment handoff and any verified direct release. | epa-concrete-washout-2012 |
| shared_assets | all processes | Enumerate each pump, generator, meter, curing facility and washout container, all consuming nodes/runs and service dates; record equipment capital and mobilization policy separately from operating energy. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| placement | Place and compact fresh concrete | required | Declared normal route | Fresh flowable mixture to compacted design geometry; transfer to finishing; own pump cleanup and placement rejects. | per reference flow |
| finishing | Finish formed concrete surface | required | Declared normal route | Compacted parent material to specified surface; transfer to curing; link finishing corrections/residues. | per reference flow |
| curing | Hydrate, cure, test and accept | required | Declared normal route | Binder and water hydration within finished feed to hardened accepted state; preserve retained/unreacted constituents and loss exits. | per reference flow |

Production mode is identified site pours (batches) with linked finishing/curing periods. Record pour_id, delivery_id, event_id, transfer_id and asset_id. Startup, pumping, vibration, surface work, cure protection, testing and cleanup use the same lot ledger. In-place material handoffs are state accounts, not separately traded products; final output is the accepted service. Unaccepted or replaced geometry is never accepted output.

### Process: Place and compact fresh concrete (`placement`)

#### Inputs

##### Product flows

###### Delivered fresh concrete for placement (`fresh_concrete`)

Fresh mixture is the purchased upstream product; cementitious binder and mix water are already embodied. Never fix its quantity to 1 m3 of accepted service.

- Selected flow: Delivered fresh concrete for placement
- Flow property / unit: Volume / m3
- Amount rule: Measure fresh volume received from delivery tickets and density-supported yield; retain returns and losses separately.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 2
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Diesel fuel for placement plant (`placement_diesel`)

Record actual attributable diesel supply under placement ownership, including its nonreturned unused waste/loss. Fuel supply and burned activity are separate quantities under placement_fuel_balance. Hired pumping or another provider's included fuel and combustion burdens are not recorded a second time; retain the actual scope-partition evidence.

- Selected flow: Diesel fuel for placement plant `9d258d75-6792-4f1c-9856-81602ed8f816`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Use attributable fuel_supply_kg = fuel_opening_kg + fuel_external_receipts_net_kg - fuel_closing_intact_carried_kg before actual positive usable returns/transfers, including nonreturned waste/loss. Final quantity = fuel_supply_kg / V, where V is the original positive accepted net in-place volume from cp_curing; this is one final normalization only. Keep raw totals in kg, retain the corresponding cohort upstream ownership without another stock adjustment, and determine burned activity separately for combustion factors; supplied kg is not burned kg.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_placement`

Range evidence need: Independently record attributable stock-adjusted supply, burned activity, actual unused fates and conversion/measurement uncertainty by the same owner, event and accepted-volume basis. No category-wide numerical interval for supply is established; any future screening interval must use independent comparable supply observations and cannot substitute a burned-fuel consumption interval.

###### Electricity supplied to placement equipment (`placement_electricity`)

Link electricity and fuel to equipment id and pour run.

- Selected flow: Electricity supplied to placement equipment
- Flow property / unit: Energy / kWh
- Amount rule: Meter grid electricity for pumps and vibrators; report generator electricity internally without a second upstream electricity purchase.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 50
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied water for placement equipment washing (`placement_wash_water`)

Water supplied as a technosphere input is distinct from direct environmental abstraction.

- Selected flow: Supplied water for placement equipment washing
- Flow property / unit: Volume / m3
- Amount rule: Meter new water supplied for equipment and chute washing; segregate recycled washwater and rainfall.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Complete placement-pump plant service excluding separate operation (`placement_plant_service_pump`)

Record only this independently identified complete placement-pump plant service excluding separate operation at its actual state and supply or receiving gate. Only an actual single complete provider function with a real h reference and matching lifecycle/resource scope activates this card; no price/event conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete placement-pump plant service excluding separate operation
- Flow property / unit: Duration / h
- Amount rule: Final service h per reference flow = independently measured actual attributable service hours for this exact pump/vibrator/washout-facility function / actual accepted net in-place concrete volume m3. The provider/owned compatible h-referenced lifecycle boundary excludes separately inventoried operating energy; any capital burden per h must use evidenced complete-life activity across all consumers once. No equipment time as transport or Count, no accepted-installation-count denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_placement`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete concrete-vibrator plant service excluding separate operation (`placement_plant_service_vibrator`)

Record only this independently identified complete concrete-vibrator plant service excluding separate operation at its actual state and supply or receiving gate. Only an actual single complete provider function with a real h reference and matching lifecycle/resource scope activates this card; no price/event conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete concrete-vibrator plant service excluding separate operation
- Flow property / unit: Duration / h
- Amount rule: Final service h per reference flow = independently measured actual attributable service hours for this exact pump/vibrator/washout-facility function / actual accepted net in-place concrete volume m3. The provider/owned compatible h-referenced lifecycle boundary excludes separately inventoried operating energy; any capital burden per h must use evidenced complete-life activity across all consumers once. No equipment time as transport or Count, no accepted-installation-count denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_placement`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Complete washout-facility provision service (`placement_plant_service_washout_facility`)

Record only this independently identified complete washout-facility provision service at its actual state and supply or receiving gate. Only an actual single complete provider function with a real h reference and matching lifecycle/resource scope activates this card; no price/event conversion. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Complete washout-facility provision service
- Flow property / unit: Duration / h
- Amount rule: Final service h per reference flow = independently measured actual attributable service hours for this exact pump/vibrator/washout-facility function / actual accepted net in-place concrete volume m3. The provider/owned compatible h-referenced lifecycle boundary excludes separately inventoried operating energy; any capital burden per h must use evidenced complete-life activity across all consumers once. No equipment time as transport or Count, no accepted-installation-count denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_placement`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Attributable equipment mobilization freight service (`placement_mobilization_transport`)

Conditional freight exchange for actual off-site pump/tool/curing-equipment mobilization owned by this package; equipment hours are not tonne-kilometres.

- Selected flow: Attributable equipment mobilization freight service
- Flow property / unit: mass*distance / t*km
- Amount rule: Calculate actual payload tonnes multiplied by route kilometres for each dispatch; attribute empty return and shared trips using carrier evidence, or use a fully documented vehicle-service model. Do not duplicate direct fuel or inclusive hire.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: t*km
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Compacted in-place concrete before finishing (`placed_concrete_transfer`)

This is an internal material-state handoff, not the reference service or another purchased product.

- Selected flow: Compacted in-place concrete before finishing
- Flow property / unit: Volume / m3
- Amount rule: Measure physical in-place volume transferred to finishing; pair transfer_id with finishing feed and retain unaccepted volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 2
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Unused fresh concrete returned to supplier (`returned_fresh_concrete`)

Never record the same returned load again as waste concrete; record purchaser credits without inventing an avoided-production credit.

- Selected flow: Unused fresh concrete returned to supplier
- Flow property / unit: Volume / m3
- Amount rule: Record actual returned volume and supplier acceptance or waste designation; product return applies only while usable and accepted by recipient.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Discarded concrete from placement (`placement_concrete_waste`)

Waste route starts at transfer to the declared waste custodian; transport and treatment burdens require linked downstream datasets.

- Selected flow: Discarded concrete from placement
- Flow property / unit: Mass / kg
- Amount rule: Weigh discarded spills, pump residuals and rejected loads by actual wet or hardened state and destination.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Contained concrete washwater and slurry (`placement_wash_slurry`)

Washout is a waste transfer unless verified direct discharge occurs; include containment and do not label wastewater as an elementary emission by default.

- Selected flow: Contained concrete washwater and slurry
- Flow property / unit: Mass / kg
- Amount rule: Weigh or measure volume and measured density of removed slurry; identify liquid/solid separation and exclude separately weighed solids.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1500
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Carbon dioxide, fossil, to air from placement fuel combustion (`placement_fossil_co2`)

Direct combustion air release is distinct from upstream fuel-production emissions.

- Selected flow: Carbon dioxide, fossil, to air from placement fuel combustion `08a91e70-3ddc-11dd-923d-0050c2490048`
- Binding: `fixed`
- Flow property / unit: Mass / kg
- Amount rule: Determine fossil CO2 from attributable fuel carbon records or an identified reviewed combustion factor; do not assume complete oxidation without the selected method.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_placement`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actual placement-combustion carbon monoxide to air (`placement_other_air_emissions_carbon_monoxide`)

Record only this independently identified actual placement-combustion carbon monoxide to air at its actual state and supply or receiving gate. Only actual CO substance/air-compartment measurement or valid matched fuel/engine/duty/control CO-specific factor; no share of other pollutant total. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actual placement-combustion carbon monoxide to air
- Flow property / unit: Mass / kg
- Amount rule: Independently establish actual CO species kg using measured CO or applicable actual CO-specific factor/activity units and source, then normalize once by actual accepted net in-place concrete volume.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_placement`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

### Process: Finish formed concrete surface (`finishing`)

#### Inputs

##### Product flows

###### Compacted in-place concrete before finishing (`finishing_concrete_feed`)

Parent material already has the required shape; finishing changes the surface condition.

- Selected flow: Compacted in-place concrete before finishing
- Flow property / unit: Volume / m3
- Amount rule: Receive measured placed_concrete_transfer with identical transfer_id, state and volume; no independent upstream burden.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 2
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied to finishing equipment (`finishing_electricity`)

Manual finishing can have measured zero equipment electricity; absence of records does not prove zero.

- Selected flow: Electricity supplied to finishing equipment
- Flow property / unit: Energy / kWh
- Amount rule: Meter attributable trowel and finishing-tool electricity; include shared generator fuel only in its owning node.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 30
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Actually supplied finishing abrasive product (`finishing_consumables_abrasive`)

Record only this independently identified actually supplied finishing abrasive product at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actually supplied finishing abrasive product
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actually supplied finishing or repair mortar formulation (`finishing_consumables_mortar`)

Record only this independently identified actually supplied finishing or repair mortar formulation at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actually supplied finishing or repair mortar formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Actually supplied finishing hardener formulation (`finishing_consumables_hardener`)

Record only this independently identified actually supplied finishing hardener formulation at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Actually supplied finishing hardener formulation
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Finished in-place concrete before curing acceptance (`finished_concrete_transfer`)

Finished surface is intermediate; the accepted service is declared only after curing and inspection.

- Selected flow: Finished in-place concrete before curing acceptance
- Flow property / unit: Volume / m3
- Amount rule: Measure finished volume handed to curing with transfer_id; retain rework and removed material before final acceptance.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_finishing`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 2
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

###### Separately collected finishing sanding-residue waste (`finishing_residues_captured_sanding`)

Record only this independently identified separately collected finishing sanding-residue waste at its actual state and supply or receiving gate. Actual independently captured residue, not same material still in a complete spent abrasive or wastewater. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately collected finishing sanding-residue waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately collected rejected finishing-mortar waste (`finishing_residues_rejected_mortar`)

Record only this independently identified separately collected rejected finishing-mortar waste at its actual state and supply or receiving gate. Only an independently supplied or independently dispatched actual identified product/stream activates this card, outside other complete-product/provider coverage. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately collected rejected finishing-mortar waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Separately dispatched spent finishing abrasive product (`finishing_residues_spent_abrasive`)

Record only this independently identified separately dispatched spent finishing abrasive product at its actual state and supply or receiving gate. Actual whole spent abrasive article/formulation at receiver, includes retained dust once; no duplicate contained substrate dust. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately dispatched spent finishing abrasive product
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_finishing`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

##### Elementary flows

### Process: Hydrate, cure, test and accept (`curing`)

#### Inputs

##### Product flows

###### Finished in-place concrete before curing acceptance (`curing_concrete_feed`)

Binder and mixing water within this feed continue hydration; aggregates are physical inclusions, not invented reactants.

- Selected flow: Finished in-place concrete before curing acceptance
- Flow property / unit: Volume / m3
- Amount rule: Receive measured finished_concrete_transfer with the same transfer_id and measured volume.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 2
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Supplied water for concrete curing (`curing_water`)

Record actual wet-curing regime and duration; water contributes moisture conditions and may participate in continuing hydration without an assumed yield.

- Selected flow: Supplied water for concrete curing
- Flow property / unit: Volume / m3
- Amount rule: Meter additional external curing water separately from embedded mix water, returned water and captured rainfall.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Electricity supplied for curing and acceptance (`curing_electricity`)

Shared site supply is attributed using metered consumption or documented equipment-time with power and utilization evidence.

- Selected flow: Electricity supplied for curing and acceptance
- Flow property / unit: Energy / kWh
- Amount rule: Meter attributable heating, cooling and testing electricity over the declared cure period; record other actual fuels as additional concrete exchanges.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 100
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted cast-in-place building concrete placement service (`accepted_concrete_placement_service`)

Service comprises placing, compaction, finishing, curing and acceptance of the declared element. Its denominator is accepted net in-place geometry; it is not a concrete manufacturing or building-asset product.

- Selected flow: Accepted cast-in-place building concrete placement service
- Flow property / unit: Volume / m3
- Amount rule: 1 m3
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_curing`

- Range: Reference normalization identity from accepted volume divided by the same accepted volume; not a yield factor
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Rejected hardened concrete sent to treatment (`rejected_hardened_concrete_waste`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Include actual rejected hardened concrete and discarded concrete test specimens at their actual cure/state and receiver. Retain failed-test and replacement burdens; neither specimen nor rejected work enters accepted service volume.

- Selected flow: Rejected hardened concrete sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Measure each removed covering, test specimen and rejected concrete separately by material and destination; retain rework attribution and do not count rejects as accepted service.
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_curing`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence, never a default or allowed limit
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1000
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| retain_rework | all processes | Retain burdens from failed tests, rejected pours and routine rework in the originating accepted service lot; track placement→finishing or finishing→curing rework and return to placement for replacement with event ids. Count final accepted geometry once. |  |
| run_attribution | all processes | Use identified pours and curing periods as production batches; assign startup, changeover and cleanup by event-linked measured activity. Shared events have one owner and documented shares summing to one across all consumers. |  |
| shared_energy | all processes | Prefer submetering. If absent, estimate node shares from recorded operating time, rated/observed power and utilization, disclosing uncertainty; never charge grid electricity and generator fuel for the same generation twice. |  |
| no_automatic_credit | returned_fresh_concrete; waste outputs | Record product returns or waste exits by recipient acceptance and legal status. No automatic avoided concrete or recycling credit; any consequential credit requires a separate declared study method. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules


The curing collection protocol must separately identify and weigh every actually removed curing sheet, wet cover, compound residue and packaging by its real material, reuse status and destination, as well as discarded concrete/specimens. Reusable retained covers remain stock or asset-service records; actual outward returns and waste exits remain distinct. Water-only or retained-form curing creates no assumed cover or compound. This collection duty is not one selected waste flow; actual distinct materials require distinct concrete exchanges and no automatic recycling credit.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_placement | placement | all inventory rows in this node | event ledger, measurements and acceptance | pour_id; delivery_id; event_id; transfer_id; asset_id; operating time; metered or rated power; utilization; consumer share; fuel carbon fraction/method; fossil carbon mass fraction and denominator; carbon oxidized-to-CO2 fraction; chosen combustion factor value/unit/source and applicability; factor uncertainty; fuel density/temperature/lower heating value; received fresh volume; measured density; diesel; electricity; water; equipment hours; dispatch_id; carrier; payload tonnes; route kilometres; empty-return activity; mobilization ownership/share; return volume; waste/slurry mass; emissions species and medium; direct washout release event and destination compartment; released liquid volume or mass; measured substance concentration, sampling time and unit; containment/treatment split; inventory changes; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty; fuel_grade_id; fuel_cohort_id; fuel_asset_id; fuel_period_id; fuel_scope_owner; fuel_provider_inclusion_evidence; fuel_opening_kg; fuel_external_receipts_net_kg; fuel_closing_intact_carried_kg; fuel_usable_return_kg; fuel_usable_transfer_kg; fuel_waste_constituent_kg; fuel_uncontained_constituent_kg; fuel_burned_metered_kg; fuel_burn_method; fuel_fate_roster_complete_evidence; fuel_uncertainty_kg; fuel_raw_event_ids; fuel_stock_cohort_upstream_refs; fuel_carrier_row_event_crosswalk; fuel_sampling_or_factor_basis; fuel_stock_adjustment_applied; fuel_volume_native; fuel_volume_unit; fuel_density_value; fuel_density_unit; fuel_density_temperature_state; fuel_mass_conversion_evidence; fuel_lower_heating_value_value_unit_source | Reconcile signed event records, calibrated meters, supplier tickets, measured geometry/density, testing and recipient receipts; distinguish measurements from estimates and absence evidence. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. For placement-owned diesel execute placement_fuel_balance: separately measure stock-adjusted supply, burned activity, positive actual usable exits and exclusive actual nonburned fates, with grade/asset/cohort/period ownership, calibrated records and provider coverage. Measure each waste carrier and its fuel constituent separately as nonadditive views, and link any actual release to exact substance/medium. Absence needs occurrence evidence; unknown is not zero or burn. Use fuel_burned_kg and the factor's actual matching mass/energy basis for combustion, and fuel_supply_kg for upstream diesel supply; no second stock or reference normalization. Convert actual liquid volume to fuel mass only with the same cohort's measured/supported density at the recorded temperature/state and explicit compatible units; fuel_mass_kg = measured_volume_m3 * density_kg_per_m3. If native volume is L, measured_volume_m3 = measured_volume_L / 1000. No default density, heating value or unsupported fuel-state conversion. | m3; kg; kWh; h; t; km; t*km | each event/shift; continuous curing log | complete pour through cure acceptance | declared single site and node | per reference flow | signed tickets; calibration; geometry/test and balance evidence |
| cp_finishing | finishing | all inventory rows in this node | event ledger, measurements and acceptance | pour_id; event_id; transfer_id; asset_id; operating time; metered or rated power; utilization; consumer share; feed and finished volumes; surface specification; electricity; consumables; residues; actual emission substance/air compartment/particle size; rework events; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Reconcile signed event records, calibrated meters, supplier tickets, measured geometry/density, testing and recipient receipts; distinguish measurements from estimates and absence evidence. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | m3; kg; kWh; h; t; km; t*km | each event/shift; continuous curing log | complete pour through cure acceptance | declared single site and node | per reference flow | signed tickets; calibration; geometry/test and balance evidence |
| cp_curing | curing | all inventory rows in this node | event ledger, measurements and acceptance | pour_id; event_id; transfer_id; asset_id; operating time; metered or rated power; utilization; consumer share; feed volume; accepted net volume; dimensions; voids; cure start/end; water; materials; electricity; tests; acceptance; rejects; actual substance/medium releases; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Reconcile signed event records, calibrated meters, supplier tickets, measured geometry/density, testing and recipient receipts; distinguish measurements from estimates and absence evidence. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | m3; kg; kWh; h; t; km; t*km | each event/shift; continuous curing log | complete pour through cure acceptance | declared single site and node | per reference flow | signed tickets; calibration; geometry/test and balance evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_service | all inventory rows | Divide each attributable event amount by accepted net in-place volume for the same pour set; report per reference flow. Preserve physical internal transfers before normalization. | attributable event amount; accepted net volume; cp_placement; cp_finishing; cp_curing | amount per reference flow |  |
| receipt_reconcile | fresh_concrete; returned_fresh_concrete; placement_concrete_waste | Reconcile received fresh volume with placed volume, supplier return, sampled volume, spills/pump residuals and stock change on compatible fresh-state bases; do not equate fresh volume with cured volume without evidence. | delivery tickets; measured density; transfer ledger; return/waste receipts; cp_placement | reconciliation and residual explanation |  |
| placement_fuel_balance | placement_diesel; placement_fossil_co2; actual placement-owned fuel fates | For each actual same-grade/cohort, asset, event/period and attributable owner scope, fuel_supply_kg = fuel_opening_kg + fuel_external_receipts_net_kg - fuel_closing_intact_carried_kg. Opening and closing cover every actual custody location on the same basis; receipts exclude tare. This is supply before positive usable return U and transfer X, not burned fuel. Retain source-cohort quantities/upstream references: fuel_stock_adjustment_applied = true, so the stock-burden bridge reconciles this same assignment without another opening charge or closing deduction. Determine fuel_burned_kg from calibrated burned-fuel records, or from the closed balance fuel_burned_kg = fuel_supply_kg - fuel_usable_return_kg - fuel_usable_transfer_kg - fuel_waste_constituent_kg - fuel_uncontained_constituent_kg only when operation evidence and a complete, evidenced exclusive fate roster justify that balance method. If burn is independently metered, compare the same balance residual to actual recorded measurement uncertainty; never silently overwrite burn with the residual. U/X are actual unchanged usable exits accepted by named custodians, not closing stock. Nonreturned fuel in actual waste or an uncontained exit remains in supply burden and retains its own treatment or substance/medium duty. Waste fuel kg is its measured constituent portion of the actual waste carrier, bounded by that carrier mass; the carrier's own exchange quantity includes its real other contents once. Recovered spill fuel belongs to waste, and only the remaining actual uncontained portion belongs to release; an initial spill total is a nonadditive incident diagnostic. No waste carrier, its contained fuel and an initial spill total are counted as separate additive exits. Actual positive U/X carry only matched original fuel upstream burden once; placement work, cleanup and rework stay with the pour set. Provider-included supply/combustion and each shared asset/event have one recorded owner and the original all-consumer attribution once. Unknown fate, upstream coverage, negative balance or unexplained difference blocks completion rather than becoming burn or zero. Outputs are raw kg; normalize each exchange once by the original V. For independently metered burn define fuel_fate_residual_kg = fuel_supply_kg - fuel_usable_return_kg - fuel_usable_transfer_kg - fuel_waste_constituent_kg - fuel_uncontained_constituent_kg - fuel_burned_kg. A zero residual obtained by defining burn as the balance remainder is an algebraic identity, not an independent burn measurement or validation; that branch still requires complete supported nonburned fates and operation coverage. | cp_placement; fuel_grade_id; fuel_cohort_id; fuel_asset_id; fuel_period_id; fuel_scope_owner; fuel_provider_inclusion_evidence; fuel_opening_kg; fuel_external_receipts_net_kg; fuel_closing_intact_carried_kg; fuel_usable_return_kg; fuel_usable_transfer_kg; fuel_waste_constituent_kg; fuel_uncontained_constituent_kg; fuel_burned_metered_kg; fuel_burn_method; fuel_fate_roster_complete_evidence; fuel_uncertainty_kg; fuel_raw_event_ids; fuel_stock_cohort_upstream_refs; fuel_carrier_row_event_crosswalk; fuel_sampling_or_factor_basis; fuel_stock_adjustment_applied | fuel_supply_kg; fuel_burned_kg; fuel_fate_residual_kg before normalization |  |
| mobilization_activity | placement_mobilization_transport | For each loaded leg calculate payload tonnes × actual kilometres, apply its documented consumer share, and sum legs before normalize_service. Retain carrier evidence for empty-return coverage; never multiply an empty load by zero to erase its burden. If using a vehicle-service model, document its compatible t*km conversion and parameters; do not add return/fuel already included in the carrier or hire dataset. | cp_placement; dispatch_id; payload tonnes; route kilometres; consumer share; carrier empty-return coverage; model and unit-conversion evidence | attributable transport t*km per pour set before normalization |  |
| fossil_carbon_emission | placement_fossil_co2 | Choose one documented combustion method using fuel_burned_kg from placement_fuel_balance, not the supply or stock draw: m_CO2 = fuel_burned_kg × w_fossil_C × f_oxidized_to_CO2 × 44/12. w_fossil_C is kg fossil C per kg of the actual burned fuel, and f is the fraction of that burned fossil carbon emitted as CO2; neither defaults to 1. Alternatively multiply that same actual burned mass, or its energy derived with the matching actual fuel lower heating value, by a reviewed compatible combustion CO2 factor. Retain blend/composition, factor units/source, combustion scope, applicability and uncertainty; do not sum the methods or multiply a complete factor by carbon/oxidation fractions again. Returned, waste or uncontained unburned fuel is not combustion CO2; actual other substances/fates remain separate obligations. Calculate raw pour-set CO2 kg first, then perform normalize_service once. | cp_placement; placement_fuel_balance; fuel_burned_kg; actual burned-fuel fossil-carbon fraction and basis; oxidation-to-CO2 fraction; compatible combustion factor value/unit/source; actual lower heating value if energy conversion is used; uncertainty | fossil CO2 kg per pour set before normalization |  |
| washout_release_mass | actual exchanges required by `refine_placement_washout_releases` | For each verified direct-release event and substance, calculate released volume × concentration after converting both to compatible units (for example m3 × kg/m3), or released liquid mass × measured kg-substance/kg-liquid fraction. Preserve actual receiving compartment, sampling and dissolved/total basis. pH alone cannot determine substance mass. Reconcile captured/treatment/direct-release portions once, then apply normalize_service; missing composition is an explicit gap, not zero. | cp_placement; release event; volume or liquid mass; concentration and unit; substance and receiving compartment; sampling evidence; containment/treatment split | substance kg to actual water or soil compartment per pour set before normalization |  |
| shared_share | all inventory rows | For a measured shared event, attribute its quantity using the documented consumer share; shares across all consumers sum to 1 and event ownership is unique. | event_id; asset_id; consumer nodes/runs; measured activity; cp_placement; cp_finishing; cp_curing | attributed event quantities |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_actual_material_exits` | curing | The curing collection protocol must separately identify and weigh every actually removed curing sheet, wet cover, compound residue and packaging by its real material, reuse status and destination, as well as discarded concrete/specimens. Reusable retained covers remain stock or asset-service records; actual outward returns and waste exits remain distinct. Water-only or retained-form curing creates no assumed cover or compound. This collection duty is not one selected waste flow; actual distinct materials require distinct concrete exchanges and no automatic recycling credit. | cp_curing |
| gate_traceability | reference product | Acceptance evidence must match element, pour, specification, cure regime and net volume; unaccepted quantity stays outside denominator. | signed acceptance; surveyed dimensions; test records |
| inventory_completeness | all inventory rows | Record conditional presence, absence evidence and missing-data flags separately. Expand umbrella cards into concrete exchanges and species before publishing a dataset. | purchase records; equipment logs; SDS; waste records |
| quality_fuel_supply_and_fates | placement; cp_placement; placement_diesel; placement_fossil_co2 | Apply placement_fuel_balance to the actual diesel supply and its fates. Every actual positive usable return/transfer requires its own same-state product exchange; every actual waste carrier requires its own waste exchange, receiver and treatment responsibility; actual uncontained fuel requires independently identified substance/medium exchanges. These are placement-owned conditional refinement duties, not an assumed roster, a pooled flow, diesel-product-as-elementary UUID or zero-default. Each actual exchange has one native property/unit and independently evidenced quantity; fuel kg within a mixed carrier is a nonadditive constituent diagnostic, not its whole carrier quantity. Missing actual identity/quantity/coverage or the necessary concrete cards blocks foreground completion; upstream fuel supply and actual waste handling are retained even when fuel never burns. Supply screening has no established category-wide numerical interval. Independently collect comparable stock-adjusted supply, burned activity, actual unused fates and conversion/measurement uncertainty on the same owner/event/accepted-volume basis. Any future supply interval requires those independent comparable observations; a burned-fuel interval or this batch maximum cannot validate supply. | Grade/cohort stock and burn records; actual custody/fate tickets; native identity and carrier/constituent crosswalk; provider coverage |
| time_coverage | all processes | Cover full pours plus associated curing, testing, cleanup and rework, including idle or weather-protection burdens; document exclusions and meter calibration. | run ledger; cure diary; calibration certificates |
| provisional_ranges | all inventory rows | Provisional reasoned-estimate ranges are broad review prompts, never defaults or compliance limits. Replace with independent reviewed evidence; do not validate a batch with its own maximum. | independent reference data; uncertainty disclosure |
| `refine_placement_plant_service` | `placement_plant_service_pump`; `placement_plant_service_vibrator`; `placement_plant_service_washout_facility` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella for pump, vibrator and washout infrastructure capital or hired services under the declared study policy, excluding separately recorded operating energy. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Other actual capital/provider study-policy/native references require exact function/property/unit and full-life scope; independently record actual h and time basis, no equipment hours as freight or repeated complete-life burden. Denominator is actual accepted net in-place volume m3. | `cp_placement`; actual independent records and identity/unit evidence |
| `refine_placement_other_air_emissions` | `placement_other_air_emissions_carbon_monoxide` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella includes actual CO, nitrogen oxide species, sulfur species or particles only when supported; never select a generic pollutant UUID as all species. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual nitrogen-oxide species/reporting basis, sulfur species, disjoint particles and other actual pollutants/media require independent exact identity/method/quantity; do not guess NO/NO2/SO2 roster or use equivalent reporting as a physical species. | `cp_placement`; actual independent records and identity/unit evidence |
| `refine_placement_washout_releases` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella for verified direct releases from placement-owned chute, pump or tool washout. Establish each actual substance, dissolved/particulate reporting basis and receiving water or soil compartment from event evidence before selecting a concrete elementary flow. Collected slurry sent to a custodian remains placement_wash_slurry; total slurry, pH and a treatment transfer are not pollutant mass. No universal release or absence is assumed. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_placement`; actual independent records and identity/unit evidence |
| `refine_finishing_consumables` | `finishing_consumables_abrasive`; `finishing_consumables_mortar`; `finishing_consumables_hardener` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella covers actual abrasives, mortar and hardener only when in the declared package; no assumed recipe or mandatory chemical hardener. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual further product forms/SKUs/chemistries and native references require independent identity/quantity; whole formulation includes constituents once, no assumed recipe or compulsory chemical hardener. | `cp_finishing`; actual independent records and identity/unit evidence |
| `refine_finishing_residues` | `finishing_residues_captured_sanding`; `finishing_residues_rejected_mortar`; `finishing_residues_spent_abrasive` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Any uncontained sanding dust needs substance and size-specific elementary air records rather than being hidden in waste mass. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual other correction materials, combined-mixture/hazard/receiver states need independent exact records; uncontained sanding particles require actual species/size air release, not hidden waste. | `cp_finishing`; actual independent records and identity/unit evidence |
| `refine_finishing_actual_air_releases` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella expands species from actual finishing consumables and operations. Sanding requires dust substance and size; evaporation requires actual chemical composition rather than a generic VOC identity. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_finishing`; actual independent records and identity/unit evidence |
| `refine_curing_materials` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella is not a fixed material: water-only or retained-form curing must not be assigned a fictitious compound. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual independent curing protection formulation/sheet/other SKU/native unit/quantity and instruction activation. Any actual removed curing-material usable return or waste needs correct state/direction/type/receiver/native-unit exchange, not rejected concrete or air by default; unknown occurrence not zero. | `cp_curing`; actual independent records and identity/unit evidence |
| `refine_curing_actual_releases` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella must be expanded by substance and air/water/soil medium. Washwater sent to treatment remains waste, not an automatic direct discharge. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_curing`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator retains original configuration strata, accepted state/gate and actual causal attribution; no unlike jobs/branches/routes treated as equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| final_acceptance | accepted_concrete_placement_service | Require 1 m3 reference definition, exact reference row link, actual accepted geometry and specified acceptance evidence; output remains a service. |  |
| transfer_pair | placed_concrete_transfer; finishing_concrete_feed; finished_concrete_transfer; curing_concrete_feed | Pair each internal handoff by transfer_id, state and measured amount; prohibit duplicate upstream products and fixed 1 m3 internal feeds. |  |
| loss_and_waste | all processes | Explain delivery/placement differences, retained water and stock changes; reconcile each return, residue, slurry and reject once with recipient/state and rework path. | epa-concrete-washout-2012 |
| validate_placement_fuel_basis | placement-owned supply, combustion and actual nonburned exits | Reconcile raw supply, burn, stocks and all evidenced fates under placement_fuel_balance. Confirm fuel_supply_kg for upstream input, fuel_burned_kg for the combustion method, one stock adjustment and one V normalization. Positive usable exits, waste/treatment and actual substance/medium releases must be independently represented and paired to their real carriers; reject unknown-as-burn, missing-fate-as-zero or carrier/constituent duplication. Provider-included burdens remain exclusive. |  |
| shared_and_runs | all processes | Check pour/run/event ids, changeover ownership, all shared asset consumers and shares; totals must avoid duplicate energy, capital, mobilization and cleanup. |  |
| washout_release_route | actual exchanges required by `refine_placement_washout_releases`; placement_wash_slurry | Require event-specific substance, receiving water/soil compartment and concentration/quantity evidence for each verified direct release. Keep it on placement and cp_placement, separate from custodian-bound slurry and curing releases. Reconcile pathways without double counting; unresolved composition or occurrence remains incomplete coverage rather than zero. | epa-concrete-washout-2012 |
| actual_identity | all inventory rows | Require verified concrete flow/property/unit identities for final dataset exchanges; unresolved semantic cards and generic species are not publishable exchanges. |  |
| `atomization_placement_plant_service_complete` | `placement_plant_service_pump`; `placement_plant_service_vibrator`; `placement_plant_service_washout_facility` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_placement_plant_service` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_placement_other_air_emissions_complete` | `placement_other_air_emissions_carbon_monoxide` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_placement_other_air_emissions` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_placement_washout_releases_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_placement_washout_releases` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_finishing_consumables_complete` | `finishing_consumables_abrasive`; `finishing_consumables_mortar`; `finishing_consumables_hardener` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_finishing_consumables` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_finishing_residues_complete` | `finishing_residues_captured_sanding`; `finishing_residues_rejected_mortar`; `finishing_residues_spent_abrasive` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_finishing_residues` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_finishing_actual_air_releases_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_finishing_actual_air_releases` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_curing_materials_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_curing_materials` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_curing_actual_releases_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_curing_actual_releases` with actual records; unresolved required expansion blocks the dataset. |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground construction-service data package with flow/process/lifecyclemodel projections. |
| downstream_use | secondary_dataset; background_dataset for declared building work-package models. |
| allowed_use | Matching element, specification, placement route and acceptance gate with linked upstream/downstream packages. |
| excluded_use | Ready-mix manufacture, complete building footprint, lifetime functional comparison, roads/bridges/marine concrete or wider concrete-services coverage without review. |
| required_metadata | Site/geography; dates and pours; accepted element geometry; mix/strength/age/exposure; finish; cure period; equipment; supplier gates; exclusion ownership; capital/transport/waste policy. |
| required_quality_disclosure | Measurement coverage, missing events, estimated shares, range provenance, identity gaps, wet/dry conversions and balance residuals. |
| update_trigger | Material change in mixture, equipment, cure/finish specification, acceptance criteria, supplier boundary, measurement evidence or identity verification. |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| ufgs-cast-in-place-2019 | standard | USACE/NAVFAC/AFCEC UFGS 03 30 00, February 2019, Change 10 August 2025; https://www.wbdg.org/FFC/DOD/UFGS/UFGS%2003%2030%2000.pdf | Placement, finishing, curing and field acceptance responsibilities; actual project specification controls, not universal consumption factors. |
| epa-concrete-washout-2012 | official_guidance | US EPA, EPA 833-F-11-006, February 2012; https://www.epa.gov/sites/default/files/2015-11/documents/concretewashout_0.pdf | Hydration description and washout separation/containment and destination responsibility; no presumed recovery rate. |
| unsd-cpc21-concrete-services | official_guidance | UNSD CPC 2.1 54540 explanatory note; https://unstats.un.org/unsd/classifications/Econ/Detail/EN/1074/54540 | Supporting classification interpretation only; not a CPC 3.0 explanatory text or quantitative source. |
