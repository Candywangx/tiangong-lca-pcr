---
pcr_id: pcr.constructions-and-construction-services.construction-services.interior-waterborne-wall-painting-services
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Interior waterborne wall painting services

## 1. Scope and Applicability

This PCR covers brush or roller application of waterborne architectural coatings to installed gypsum-board or plaster interior walls handed over ready for normal minor preparation. It includes minor cleaning and patching, the specified primer if used, all actual finish coats, drying, touch-up, tool cleanup and acceptance in one contractor campaign. Substrate manufacture and installation, extensive replastering, hazardous coating removal, exterior work, spray application, solvent industrial coatings, waterproofing, road markings and future maintenance repainting are excluded. This service boundary is an authored modelling choice; UFGS supports the preparation/application distinction rather than a universal coat count.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.constructions-and-construction-services.construction-services.interior-waterborne-wall-painting-services |
| classification_refs | cpc:3.0:54730 |
| covered_products | Accepted interior brush/roller waterborne wall painting contractor service |
| excluded_products | Paint manufacture; wall manufacture or installation; excluded routes in section 1 |
| representative_product | One m2 accepted waterborne-coated gypsum-board interior wall |
| production_route | Campaign-indexed minor preparation then brush/roller coating, drying, cleanup and acceptance |
| market_state | Completed contractor service at client acceptance, with coating system and substrate declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Completed interior waterborne wall painting service |
| How much | 1 m2 |
| How well | Accepted to the declared project coating specification: substrate condition, colour, finish, hiding and specified film/build requirements; defects closed |
| How long or cycle | One campaign through specified drying and client acceptance; no assumed service life or future repaint cycle |
| reference_flow_link | `accepted_painting_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Accepted interior waterborne wall painting service |
| Reference flow property | Area `93a60a56-a3c8-19da-a746-0800200c9a66` |
| Reference unit group | Units of area `93a60a57-a3c8-18da-a746-0800200c9a66` |
| Reference unit | m2 |
| Required qualifiers | country and site; campaign dates; gypsum/plaster substrate and starting state; coating and primer product identities; actual layer count and area by coat; brush/roller method; finish and acceptance specification; drying regime; net area survey and deductions; cleanup destination |

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `net_area` | reference product | Area `93a60a56-a3c8-19da-a746-0800200c9a66` | m2 | Measure accepted net wall surface area from verified dimensions or survey; deduct unpainted openings and record reveals separately. Coat area and rework-pass area do not enlarge accepted net area. |
| `wet_supply_mass` | refine_waterborne_finish; waterborne_primer; refine_repair_compounds | Mass | kg | Keep wet supplied product mass distinct from dry film solids and VOC mass. Convert volume using product-specific measured or supplier density on the same formulation and temperature basis. |
| `emission_identity` | actual exchanges required by `refine_finish_air_species`; actual exchanges required by `refine_prepare_air_particles` | Mass | kg | Keep substance or particle-size identity and receiving medium with each emission; total VOC content and captured dust are supporting records, not automatically elementary emissions. |
| `transport_work` | refine_contractor_transport | Goods transport (mass*distance) `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | Use Units of mass*length `838aaa21-0117-11db-92e3-0800200c9a66`, reference t*km factor 1. Calculate from attributable tonnes and kilometres; kg*km converts to t*km by dividing by 1000. Retain actual vehicle/load/route and avoid duplicate mobilization. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Installed gypsum/plaster interior wall accepted for minor preparation; substrate ownership and prior works remain outside the service inventory |
| starting_condition_role | Existing parent surface condition, not a free wall-material input or output |
| product_classification_scope | A narrower service subset of CPC 54730 Painting services |
| recursive_input_rule | Subcontracted same-category painting must be represented once as a purchased verified service or decomposed foreground work, never both; retain subcontract boundaries and area |
| upstream_dataset_requirement | Link coating, primer, repair, water, electricity, consumables and transport inputs to compatible upstream datasets; missing links remain explicit. Do not import wall production into the service reference |
| disclosure | Report starting wall condition, excluded prior works, supplier-dataset transport coverage, shared asset attribution, hazards and excluded future maintenance |

### Boundary Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `scope_eligibility` | foreground_system_boundary | This PCR covers brush or roller application of waterborne architectural coatings to installed gypsum-board or plaster interior walls handed over ready for normal minor preparation. It includes minor cleaning and patching, the specified primer if used, all actual finish coats, drying, touch-up, tool cleanup and acceptance in one contractor campaign. Substrate manufacture and installation, extensive replastering, hazardous coating removal, exterior work, spray application, solvent industrial coatings, waterproofing, road markings and future maintenance repainting are excluded. This service boundary is an authored modelling choice; UFGS supports the preparation/application distinction rather than a universal coat count. |  |
| `service_gate` | all processes | Include campaign minor preparation through accepted coating, cleanup and defect closure. Installed substrate manufacture/installation stays outside; document deviations before reuse. | `ufgs-architectural-coatings-2026` |
| `actual_system` | finish | Record actual primer decision, layer count, coating identities, drying and application conditions; no fixed two-coat assumption. | `ufgs-architectural-coatings-2026` |
| `shared_assets` | prepare; finish | Identify shared task lighting, ventilation, electrical supply and reusable tools, list prepare and finish consumers and campaign periods, and record one owner for each shared event. Retain operating and replacement burdens where attributable; disclose capital-equipment treatment. |  |
| `waste_gate` | prepare; finish | Track residue and wash-water handover and treatment destinations separately from direct releases; cleaning and residual paint storage follow the declared site management plan. | `ufgs-architectural-coatings-2026` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `prepare` | Minor preparation and campaign mobilization | required | Every accepted campaign | Prepare installed parent surface; retain room/lot and shared-event ids | accepted_painting_service |
| `finish` | Brush/roller coating, drying, cleanup and acceptance | required | Every accepted campaign | Deliver accepted service; retain actual coats, rework loop and cleanup-event links | accepted_painting_service |

Production is a room/colour/coating-system campaign, not a continuous factory line. Each input, accepted area, waste, emission, cleanup and colour change carries a campaign and node id. Off-spec coating remains a finish-node rework loop until accepted; all repeated preparation and recoating burdens stay with that campaign. Cancelled or unaccepted areas are separately reported and never become accepted service output. Discarded material exits through the producing node waste card.

### Process: Minor preparation and mobilization (`prepare`)

#### Inputs

##### Product flows


###### Separately supplied painting protective sheeting (`protection_consumables_protective_sheet`)

Record only this independently identified separately supplied painting protective sheeting at its actual state and supply or receiving gate. Actual consumed sheet product or evidenced attributable replacement consumption; do not buy a full reusable sheet for every lot. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Separately supplied painting protective sheeting
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Preparation water (`prepare_water`)

Meter or reconcile water delivered to preparation; retain supply source and any water already contained in repair products.

- Selected flow: Water supplied for minor cleaning
- Flow property / unit: Volume / m3
- Amount rule: Calculate actual attributable m3 from cp_prepare records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Preparation electricity (`prepare_electricity`)

Record vacuum or other preparation equipment metering or power and operating time; identify voltage and grid geography.

- Selected flow: Electricity supply actually consumed by preparation equipment
- Flow property / unit: Energy / kWh
- Amount rule: Calculate actual attributable kWh from cp_prepare records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

##### Waste flows

###### Collected minor-sanding residue waste (`prepare_residue_sanding_residue`)

Record only this independently identified collected minor-sanding residue waste at its actual state and supply or receiving gate. Actual whole collected sanding residue at real material/state/receiver; captured fraction not also airborne. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Collected minor-sanding residue waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Collected minor-repair debris waste (`prepare_residue_repair_debris`)

Record only this independently identified collected minor-repair debris waste at its actual state and supply or receiving gate. Actual whole collected repair debris independently dispatched, not same portion already in sanding residue or wet waste. Preserve actual SKU/formulation or dispatched composite, ownership, receiver/provider and every original/rework event. Evidence for nonoccurrence is required; missing identity, quantity or condition remains a completion gap. No amount or occurrence is inferred from the other child flows. Complete supplied products and contaminated carriers include their contained parts/material once.

- Selected flow: Collected minor-repair debris waste
- Flow property / unit: Mass / kg
- Amount rule: Independently weigh the actual SKU/stream net mass after tare for this child; retain its own issue, return, stock and fate records; normalize the attributable numerator once by the original accepted-output denominator.
- Value mode: `calculated_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `calculated_from_collection`
- Collection protocol: `cp_prepare`

Range evidence need: Establish independent, matching-identity quantity evidence and uncertainty for this actual exchange. A family total or former family interval is not a child quantity, allocation share or automatically valid child QA range.

###### Collected preparation wastewater (`prepare_wastewater`)

Conditional on wet cleaning: record collected volume, composition and treatment destination at the prepare node; direct releases require separately identified substances and medium.

- Selected flow: Actual minor-cleaning wastewater handed to treatment
- Flow property / unit: Volume / m3
- Amount rule: Calculate actual attributable m3 from cp_prepare records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_prepare`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.02
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

### Process: Coating, drying, cleanup and acceptance (`finish`)

#### Inputs

##### Product flows


###### Specified waterborne primers (`waterborne_primer`)

Conditional umbrella: record the specified primer and treated area separately; absence requires a documented coating-system decision, not an assumed universal zero.

- Selected flow: Actual compatible waterborne wall primer where specified
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual attributable kg from cp_finish records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Application and cleanup water (`finish_water`)

Separate approved thinning water from washing water; meter or reconcile purchased supply and avoid counting water contained in coating twice.

- Selected flow: Water supplied for approved thinning and tool cleanup
- Flow property / unit: Volume / m3
- Amount rule: Calculate actual attributable m3 from cp_finish records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Application drying and cleanup electricity (`finish_electricity`)

Record mixing, task lighting, ventilation or assisted drying only when actually used and attributable; natural drying has no invented energy exchange.

- Selected flow: Electricity actually consumed by attributable finishing equipment
- Flow property / unit: Energy / kWh
- Amount rule: Calculate actual attributable kWh from cp_finish records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 10
  - Unit: kWh
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Accepted interior waterborne wall painting service (`accepted_painting_service`)

Accepted net coated wall area after specified drying, cleanup and defect resolution. Output is contractor service, not paint mass or a newly manufactured wall. Count each physical area once regardless of coats or rework.

- Selected flow: Accepted interior waterborne wall painting service
- Flow property / unit: Area / m2
- Amount rule: 1 m2
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Range: Collected area normalization identity
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 1
  - Upper: 1
  - Unit: m2
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Calculated from collection (`calculated_from_collection`)

##### Waste flows

###### Unusable wet waterborne paint sent to treatment (`unusable_wet_paint_waste`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Only actual unusable wet formulation dispatched to a receiver. Usable sealed paint returned or retained as stock is not this waste.

- Selected flow: Unusable wet waterborne paint sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual attributable kg from cp_finish records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Dry waterborne coating residue sent to treatment (`dry_coating_residue_waste`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Use the actually dispatched dry/cured residue and hazard state; do not include the same constituent again in a wet mixture or contaminated article.

- Selected flow: Dry waterborne coating residue sent to treatment
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual attributable kg from cp_finish records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded paint-contaminated paintbrush (`spent_paintbrush_waste`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Only when an actual brush is discarded; a reusable retained brush remains the applicable resource/stock record. Keep its actual substrate, contained residue and treatment state.

- Selected flow: Discarded paint-contaminated paintbrush
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual attributable kg from cp_finish records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Discarded paint-contaminated roller sleeve (`spent_roller_sleeve_waste`)

Apply only when this specific exchange actually occurs within the existing work boundary. Record its exact material or device identity, supplied/current state, native quantity and actual recipient or upstream coverage. Do not infer occurrence, quantity, a new process or a UUID. A complete supplied assembly and its already included components are mutually exclusive purchase views. Only an actual discarded sleeve, excluding the retained handle/frame and any residue already separately dispatched.

- Selected flow: Discarded paint-contaminated roller sleeve
- Flow property / unit: Mass / kg
- Amount rule: Calculate actual attributable kg from cp_finish records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kg
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)


###### Collected coating cleanup wastewater (`finish_wastewater`)

Record volume and contamination basis at treatment handover; distinguish sewer treatment input from direct environmental release and never assume disposal to a drain.

- Selected flow: Actual paint-contaminated wash water sent to treatment
- Flow property / unit: Volume / m3
- Amount rule: Calculate actual attributable m3 from cp_finish records per accepted net area; retain all rework consumption.
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per reference flow
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finish`

- Range: Provisional broad screening estimate; replace with independent reviewed evidence
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.05
  - Unit: m3
  - Basis: per reference flow
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

## 7. Allocation and Co-product Handling

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `campaign_attribution` | prepare; finish | Subdivide records by campaign, room and node first. Attribute shared electricity by metering or documented power-time; shared transport by measured load-distance and reusable consumables by documented usage and replacement. Reconcile consumer shares to one total per period; use area allocation only for homogeneous same-system campaigns with justified evidence. |  |
| `rework_retention` | finish | Retain failed-coat removal, extra coating, energy and cleanup with the producing campaign; count final accepted area once. Downgrade, recovery or discard requires an actual destination and no automatic avoided-product credit. |  |
| `no_coproduct` | all processes | The defined route has one service output. Returned usable paint is a stock correction. No paint-leftover, waste or existing-wall coproduct allocation is allowed. If a real independently marketed coproduct arises, document a separately reviewed method before reuse. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules


The finishing protocol retains mandatory collection of all actual packaging, containers, used tools and cleanup articles by material, contamination/hazard state and receiver, including actual articles not named by the conditional waste cards. Each real distinct waste must have its own concrete exchange before completion; no common packaging/tool identity or compulsory disposal is inferred. Reusable sealed paint and retained tools remain returns/stock or resource records. Record wet residue, dry residue, carrier articles and contained coating on exclusive physical dispatch bases to prevent duplicate constituent exits.

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_prepare` | `prepare` | Preparation cards; reference signed finish-node accepted area | Campaign ledger and acceptance survey | campaign; room; event; timestamp; preparation product and batch; stock issued returned opening closing; wet mass; water volume; energy meter or power-time; transport load and distance; cp_finish accepted net area survey reference; preparation/rework tasks; waste and wastewater quantity and destination; particle size/composition medium method and uncertainty; shared asset consumer shares; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Reconcile preparation material, transport, electricity, cleaning-water, collected residue and particle records with invoices, stock and meters. Reference the signed cp_finish accepted-area survey as denominator without creating an accepted output at prepare. Assign each preparation or shared event once. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; m3; kWh; t*km; m2 | Each issue, coat, cleanup, shared event and acceptance | Full campaign including rework and final cleanup | Declared site and contractor; prepare node only | per reference flow | Calibrations; signed area survey; supplier densities; traceable stock/waste records; approved attribution; species evidence and uncertainty |
| `cp_finish` | `finish` | Finishing cards and accepted service output | Campaign ledger and acceptance survey | campaign; room; event; timestamp; coating and primer product/batch; stock issued returned opening closing; wet mass; volume and density; actual coat count and layer areas; thinning and cleanup water; energy meter or power-time; net area and deductions; accepted rejected reworked area; drying regime; acceptance and defect closure; waste quantity and destination; emission species medium composition method and uncertainty; shared asset consumer shares; concrete_exchange_id; physical_event_id; actual_identity_id; actual_state; receiver_or_provider_gate; native_quantity; native_unit; unique_property; measurement_method_id; uncertainty | Reconcile each primer/finish-coat issue and stock return with wet mass or traceable density, layer areas, thinning, cleanup, electricity and species evidence. Survey accepted net area after drying and defect closure and sign the acceptance record. Assign each finish or shared event once. Record each actual child/refined exchange independently by identity, physical event, state, gate and period. Retain all original obligations even where a corresponding exchange identity is not yet known. Do not allocate a family total or copy its numerical Range to children, count a carrier and its contained material twice, or turn missing occurrence/quantity/native reference into zero. Each concrete exchange has one property and one unit; other CP readings are auxiliary and require evidenced conversion. Missing required refinement blocks dataset completion. | kg; m3; kWh; t*km; m2 | Each issue, coat, cleanup, shared event and acceptance | Full campaign including rework and final cleanup | Declared site and contractor; finish node only | per reference flow | Calibrations; signed area survey; supplier densities; traceable stock/waste records; approved attribution; species evidence and uncertainty |

Apply area_normalization and stock_reconciliation below to each lot; retain original quantities, units and the signed accepted-area record.

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `area_normalization` | all inventory rows | For accepted net area A_accepted > 0, calculate Q_i = Q_lot_i / A_accepted × 1 m2 for each actual node-attributable lot total, preserving the original numerator unit, original totals and node ownership. Zero accepted area cannot form an accepted-service dataset. The reference output uses its own cp_finish accepted-area record and normalizes to 1 m2. | cp_prepare; cp_finish; actual node lot totals; accepted net area | Amounts per reference flow |  |
| `stock_reconciliation` | refine_waterborne_finish; waterborne_primer; refine_repair_compounds; `protection_consumables_protective_sheet` | Accounted use = opening stock + receipts - closing stock - usable returns transferred outside this lot accounting boundary and not already included in closing stock. A usable return already counted in closing stock must not be subtracted again. Reconcile accounted use to separately traced applied/consumed material, waste and other documented exits; invoices alone do not determine applied paint. Retain the ledger boundary, original units and return ownership before area_normalization. | cp_prepare; cp_finish; opening stock; receipts; closing stock; exclusive usable returns; applied/consumed and waste records | Reconciled actual lot use before normalization |  |
| `wet_mass_conversion` | refine_waterborne_finish; waterborne_primer; refine_repair_compounds | Multiply recorded supplied volume by product-specific density on a compatible basis; retain both original volume and converted wet mass. No generic paint density is permitted. | supplier density; recorded volume | Wet product kg |  |
| `species_emissions` | actual exchanges required by `refine_finish_air_species` | Use measured species release or a documented species-specific material balance of actually applied products, retained coating, captured waste and emitted fractions. Record indoor release and any outdoor transfer consistently, avoiding duplicate releases. EPA describes activity/content-based estimation but provides no universal species split for this PCR. | cp_finish; product composition; release evidence | Species kg to declared air medium | `epa-eiip-architectural-coating-1995` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_actual_material_exits` | finish | The finishing protocol retains mandatory collection of all actual packaging, containers, used tools and cleanup articles by material, contamination/hazard state and receiver, including actual articles not named by the conditional waste cards. Each real distinct waste must have its own concrete exchange before completion; no common packaging/tool identity or compulsory disposal is inferred. Reusable sealed paint and retained tools remain returns/stock or resource records. Record wet residue, dry residue, carrier articles and contained coating on exclusive physical dispatch bases to prevent duplicate constituent exits. | cp_finish |
| `coverage` | all processes | Cover all campaign inputs, stock corrections, rework, waste, shared burdens and area; disclose missing records and cut-offs without silent zeros. | Reconciled node ledgers and acceptance records |
| `representativeness` | all inventory rows | Report site, country, dates, coating formulation, wall starting state and application/drying technology; geographic electricity and transport choices must match actual supply. | Project and supplier records |
| `identity_resolution` | all inventory rows | Resolve each actual exchange of umbrella cards to a verified concrete UUID, property and unit before TIDAS exchange publication; retain gaps rather than selecting a broad convenient match. | Independent identity verification and support rows |
| `range_evidence` | all ranges | Provisional estimates are screens only, including zeros for conditional absence, and never substitute for measured totals. Investigate outliers against independent evidence; do not derive a guardrail from the same batch it validates. | Independent reviewed comparison and uncertainty disclosure |
| `refine_protection_consumables` | `protection_consumables_protective_sheet` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella: instantiate each actual material; reusable items use measured attributable replacement consumption, not full purchase per lot. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual masking products and consumed preparation-tool functions/SKUs require exact identities/property/unit and independently measured replacement consumption; reusable full purchase not per lot. | `cp_prepare`; actual independent records and identity/unit evidence |
| `refine_prepare_residue` | `prepare_residue_sanding_residue`; `prepare_residue_repair_debris` | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Split collected residues by composition and destination; distinguish dry solid wastes from air releases and wastewater. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual used masking/protection products and different substrate/composition/receiver streams require independent actual identities/quantities; no dry/wet/air mixture or default proportions. | `cp_prepare`; actual independent records and identity/unit evidence |
| `refine_prepare_air_particles` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella: establish particle size, composition and indoor or outdoor air destination from measurements or justified release modelling before selecting concrete elementary exchanges; collected dust is not an air emission. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_prepare`; actual independent records and identity/unit evidence |
| `refine_finish_air_species` | actual independently refined exchanges | Preserve this actual collection and closure scope as a mandatory dataset-production requirement: Conditional umbrella: require substance or species identity, as-applied content basis, emitted fraction and receiving air compartment. A regulatory total VOC content is not a species flow or an automatic complete-release factor; retain unspeciated gaps explicitly in the dataset. Independently establish every actual identity, state, real provider/receiver and exactly one exchange property/unit before constructing its flow card. Each actual exchange requires its own recorded quantity and applicable method, uncertainty and custody/fate coverage. Auxiliary CP units do not authorize extra exchange views. Actual occurrence unknown is not zero; never invent a material/species/provider list or split a parent total. Quantitative screening evidence must fit each actual exchange; a former family interval cannot be copied or divided into child ranges. Further actual identities not fully specified by the conditional children require mandatory refinement and prevent dataset completion; this requirement is not itself a flow exchange. Actual substance, disjoint particle-size fraction and air/water/soil receiving compartment; matched measurement or species/activity factor, whole-fluid composition/fate audit, capture and uncertainty; unknown is not zero. | `cp_finish`; actual independent records and identity/unit evidence |
| `atomic_exchange_identity_unit` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. Any pooled denominator must retain the original accepted configuration strata, state/gate and causal attribution; do not divide unlike circuits, routes, products or jobs as if they were equivalent. | actual identity, unit, custody and independent quantity evidence |
| `asset_final_normalization_once` | all inventory rows | An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. | actual identity, unit, custody and independent quantity evidence |
| refine_waterborne_finish | finish | Independently identify every actual waterborne interior architectural wall finish formulation/SKU, supplied wet state and provider gate used by brush/roller. Distinct products or colour formulations that have different flow identities need separate independent records, never a summed coating identity. Collect wet mass, opening and closing intact stock, receipts, actual usable returns, spills, all coats, changes and rework by identity; record actual state density when litres are converted to kg. Each actual coating child uses Mass/kg, the original stock_reconciliation and wet_mass_conversion methods and the original unique accepted net area once. Preserve source-specific constituent and release-fate evidence, residual/waste custody and actual drying acceptance; no default coat count, emission fraction or finish formulation. This is a mandatory collection/refinement requirement, not a quantity-bearing exchange. Before dataset completion create one card per actual independent identity/state/gate, with its own quantity, one property/unit and verifiable identity evidence. Unknown occurrence is not zero. No former family total or Range may be copied or divided into child quantities/ranges; derive any child screen only from independently applicable evidence. Missing actual identity, quantity, method or conversion blocks completion; record evidenced nonoccurrence separately. | cp_finish; independent identity, stock/activity, custody and conversion evidence |
| refine_contractor_transport | prepare | Identify every actual vehicle/load-specific material or equipment freight service by mode, vehicle/load scope, provider, route and gate. Independently determine its compatible t*km from measured payload_t times actual loaded distance_km and the evidenced causal campaign share, or an equivalent verified carrier activity record; reconcile all consumers. Keep each actual service as one separate Goods transport (mass*distance)/t*km exchange normalized once by accepted area. Own all campaign mobilization here once, including attributable return scope; never invent empty-leg payload. A service whose real native reference differs requires a separate matching-property/unit exchange and evidenced compatible calculation, not a numerical relabelling to t*km. Exclude upstream supplier transport already included in the purchased dataset and reconcile provider/direct-vehicle coverage. This is a mandatory collection/refinement requirement, not a quantity-bearing exchange. Before dataset completion create one card per actual independent identity/state/gate, with its own quantity, one property/unit and verifiable identity evidence. Unknown occurrence is not zero. No former family total or Range may be copied or divided into child quantities/ranges; derive any child screen only from independently applicable evidence. Missing actual identity, quantity, method or conversion blocks completion; record evidenced nonoccurrence separately. | cp_prepare; independent identity, stock/activity, custody and conversion evidence |
| refine_repair_compounds | prepare | For each actually used gypsum-based or other compatible minor-repair formulation, determine its exact supplied identity/SKU, wet state and supplier gate independently. The alternative formulations are not one flow. Collect opening stock, net receipts, intact closing, actual usable returns, installed use, all rework and nonreturned loss/waste by formulation. Fix each actual child to Mass/kg; actual wet supplied mass attributable to this campaign is normalized once by the signed cp_finish accepted net area under stock_reconciliation. Keep plasterboard manufacture and major plastering excluded. Actual other formulations remain mandatory even if not listed in an example; no invented default formulation or ingredient repurchase. This is a mandatory collection/refinement requirement, not a quantity-bearing exchange. Before dataset completion create one card per actual independent identity/state/gate, with its own quantity, one property/unit and verifiable identity evidence. Unknown occurrence is not zero. No former family total or Range may be copied or divided into child quantities/ranges; derive any child screen only from independently applicable evidence. Missing actual identity, quantity, method or conversion blocks completion; record evidenced nonoccurrence separately. | cp_prepare; independent identity, stock/activity, custody and conversion evidence |

## 9. Validation Rules

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_conformance` | accepted_painting_service | Require positive measured net area, matching service output/property/unit and a signed acceptance record; count no unresolved rejected area or duplicate coat area. |  |
| `campaign_completeness` | prepare; finish | Every material, cleaning, changeover, rework, residue and emission event links to one campaign and producing node. Confirm shared asset consumers and period shares sum to one owned event total. |  |
| `coating_quality` | finish | Verify declared project requirements, actual layer count, drying and closed defects against acceptance evidence; do not substitute a generic prescribed coat count. | `ufgs-architectural-coatings-2026` |
| `release_and_waste` | actual exchanges required by `refine_prepare_air_particles`; actual exchanges required by `refine_finish_air_species`; finish_wastewater | Require emission species/size and air medium and separate captured waste/wastewater destination; missing speciation is incomplete evidence, not zero VOC. Check material and water reconciliations and avoid emission/treatment double counting. | `epa-eiip-architectural-coating-1995` |
| `atomization_protection_consumables_complete` | `protection_consumables_protective_sheet` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_protection_consumables` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_prepare_residue_complete` | `prepare_residue_sanding_residue`; `prepare_residue_repair_debris` | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_prepare_residue` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_prepare_air_particles_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_prepare_air_particles` with actual records; unresolved required expansion blocks the dataset. |  |
| `atomization_finish_air_species_complete` | actual independently refined exchanges | Require independent actual quantity, identity/state/gate and one property/unit for each applicable exchange in this scope; preserve full original protocol, normalization, stock, returns, waste/releases and shared-resource ownership. Reject completion on an unknown required child, unsupported native reference or missing quantity; evidenced nonoccurrence is separate from missing data. No family-total allocation, copied family Range or duplicate carrier/constituent/bundled-part exchange. Completion requires satisfying `refine_finish_air_species` with actual records; unresolved required expansion blocks the dataset. |  |
| `validate_atomic_exchange_unit_and_normalization` | all inventory rows | Each concrete flow card identifies exactly one actual independently supplied product/SKU/formulation, complete assembly, complete single-function or genuine complete bounded provider service, actual waste composite/state/receiver, or substance/size/receiving medium, with exactly one property and unit. Different actual identities require independent quantities and records, not a summed family exchange. A complete product/carrier includes its contents once. Same unchanged SKU/state usable supply/return pairs and matched physical internal send/receive pairs use the same selected property/unit; kg and count or MJ and kWh auxiliaries are nonadditive measurements, never duplicate exchanges. Missing identity/occurrence/quantity/native reference is a gap, not zero. An asset-equivalent formula already ending in division by N, D or A is the final quantity per reference flow. Its complete-life fraction and accepted-output normalization constitute the same normalization operation as the general normalization rule; never divide it by that denominator again. Apply the complete-life upstream burden exactly once. Actual complete provider event counts remain event quantities, not owned-asset fractions. |  |
| atomization_waterborne_finish_complete | finish | Require completion of refine_waterborne_finish using independent actual records and one atomic flow per identity/state/gate. No family card, copied total or inherited family Range is permitted; missing required child, quantity, property/unit or scope evidence blocks completion. Preserve original inventory/normalization/return/waste and provider ownership rules. |  |
| atomization_contractor_transport_complete | prepare | Require completion of refine_contractor_transport using independent actual records and one atomic flow per identity/state/gate. No family card, copied total or inherited family Range is permitted; missing required child, quantity, property/unit or scope evidence blocks completion. Preserve original inventory/normalization/return/waste and provider ownership rules. |  |
| atomization_repair_compounds_complete | prepare | Require completion of refine_repair_compounds using independent actual records and one atomic flow per identity/state/gate. No family card, copied total or inherited family Range is permitted; missing required child, quantity, property/unit or scope evidence blocks completion. Preserve original inventory/normalization/return/waste and provider ownership rules. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground contractor painting-service data package |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Compatible installed-wall interior brush/roller waterborne painting at the declared service gate |
| excluded_use | Paint product kg, wall production, full building life cycle, exterior/spray/specialty routes and future repainting without separate modelling |
| required_metadata | All reference qualifiers; campaign/node/event ids; accepted net area; material, energy, transport, shared-asset and waste boundaries |
| required_quality_disclosure | Measured versus modelled quantities; unresolved identities or species; provisional ranges; attribution; upstream gaps; capital-equipment treatment; excluded works and uncertainty |
| update_trigger | Coating formulation, wall starting state, specification, application route, grid, waste route or measured inventory changes materially |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `ufgs-architectural-coatings-2026` | official_guidance | USACE/NAVFAC/AFCEC UFGS 09 90 00 Architectural Paints and Coatings, August 2026; sections 3.6.2, 3.8, 3.10 and 3.11. https://www.wbdg.org/FFC/DOD/UFGS/UFGS%2009%2090%2000.pdf | Preparation/application/acceptance/waste-management evidence; no quantitative consumption range or fixed service normalization |
| `epa-eiip-architectural-coating-1995` | method_factor | US EPA EIIP Volume III Chapter 3, Architectural Surface Coating, 11/08/1995, sections 2 and 4. https://www.epa.gov/sites/default/files/2015-08/documents/archsfc.pdf | Application/drying release pathways and activity/content estimation approach; no universal species fractions |
