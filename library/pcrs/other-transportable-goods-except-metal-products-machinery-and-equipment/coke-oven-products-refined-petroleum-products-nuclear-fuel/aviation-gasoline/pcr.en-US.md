---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.aviation-gasoline
language: en-US
status: candidate
sync_with: pcr.zh-CN.md
---

# Aviation gasoline

## 1. Scope and Applicability

This PCR covers the foreground production of finished aviation gasoline formulated for spark-ignition reciprocating aircraft engines and released at a refinery or fuel-terminal plant gate. It applies to leaded or unleaded grades only when the data package declares the applicable aviation-fuel specification, grade, formulation route, lead status, oxygenate status, production location, reporting period, and batch-release basis.

The foreground boundary begins with aviation-gasoline blend components, grade-specific additives, utilities, and other materials received by the blending and release operation. It includes blending, additive injection, batch quality release, on-site storage, and loading at the plant gate. Production of crude oil, refinery blend components, additives, and purchased utilities is represented by linked upstream datasets unless those operations are explicitly brought into the foreground. Aircraft fuelling, downstream distribution beyond the declared plant gate, fuel use and combustion, maintenance, and aircraft operation are outside this PCR.

Jet A, Jet A-1, other kerosene-type turbine fuels, gasoline-type jet fuel, automotive gasoline, and unspecified generic aviation fuel are excluded. The PCR does not assert that one aviation-gasoline grade is interchangeable with another.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.coke-oven-products-refined-petroleum-products-nuclear-fuel.aviation-gasoline |
| classification_refs | CPC 3.0:33312, Aviation gasoline, exact semantic context; mapping acceptance is governed outside this PCR |
| covered_products | Finished aviation gasoline for spark-ignition reciprocating aircraft engines, including declared leaded and unleaded grades that conform to the stated applicable specification |
| excluded_products | Aviation turbine fuel, gasoline-type jet fuel, automotive gasoline, unfinished refinery blendstocks sold as such, and generic aviation fuel without a declared fuel specification and grade |
| representative_product | One kilogram of specification-conforming finished aviation gasoline released at the blending facility gate |
| production_route | Receipt of specification-relevant blend components and additives; controlled blending and additive injection; batch testing and release; on-site storage and loading |
| market_state | Finished liquid fuel, production mix at plant gate, with specification, grade, lead status, oxygenate status, and location declared |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Finished aviation gasoline released for spark-ignition reciprocating aircraft-engine use |
| How much | 1 kg |
| How well | Conforms to the declared applicable aviation-gasoline specification and grade, with batch-release evidence retained |
| How long or cycle | One representative reporting period, normalized from released production batches |
| reference_flow_link | aviation_gasoline_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 kg |
| Reference product flow | Aviation gasoline `60324705-7a75-4213-82e6-30e7b9a24bc9` |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | applicable fuel specification and edition; grade; lead status and measured or declared lead content; oxygenate status; formulation route; production location; reporting period; batch-release status; product temperature and measured density when volume records are converted to mass |

When constructing a foreground data package, the items listed in `Required qualifiers` must be declared in dataset metadata, process notes, reference flow comment, product description, or an equivalent data package field. Missing required qualifiers make the reference flow definition incomplete for that data package.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product and all mass-normalized inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | Normalize every reported inventory amount to 1 kg of released aviation gasoline. Preserve source measurements and conversion records. |
| `volume_to_mass` | liquid throughput or loss recorded by volume | Measured batch density and measured volume | kg after conversion | Convert volume to mass only with density measured or documented for the relevant product, temperature, and batch. Do not use an undeclared generic density. |
| `batch_mass_balance` | blending, storage, and loading | Mass | kg | Reconcile component receipts, internal transfers, released product, rework, off-spec material, wastewater-borne product, spills, and evaporative or fugitive losses over the same reporting period. |
| `quality_identity` | reference product | Declared specification-grade properties | specification units | Retain the batch certificate or equivalent release record proving the declared aviation-gasoline specification and grade. Grade-specific limits are taken from the declared specification rather than embedded as a universal PCR value. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Aviation-gasoline blend components, grade-specific additives, utilities, and other materials are received at the foreground blending operation; any on-site production of a component is separately identified |
| starting_condition_role | Foreground gate-to-gate production starting point for finished aviation-gasoline blending and release |
| product_classification_scope | Finished aviation gasoline for spark-ignition reciprocating aircraft engines; classification references provide context but do not define canonical PCR identity |
| recursive_input_rule | Finished aviation gasoline returned for reblending or rework is recorded once as a separate input with its prior dataset reference and mass; do not recursively expand the same PCR inside the same foreground system |
| upstream_dataset_requirement | Link representative upstream datasets for each purchased blend component, additive, energy carrier, water supply, and inbound transport included by the study goal |
| disclosure | Declare facility and location, reporting period, specification and grade, lead and oxygenate status, formulation route, whether blend components are produced on site, storage and loading configuration, vapor-control status, and all boundary exclusions |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_required_operations` | foreground production | Include component receipt, blending, additive injection, batch quality release, on-site storage, and loading through the declared plant gate, together with associated utilities, wastes, spills, and direct emissions. | `faa-ac-20-24d`; `epa-ap42-5-1`; `epa-ap42-5-2` |
| `boundary_upstream_links` | purchased inputs | Represent blend components, additives, purchased utilities, water, and included inbound transport with linked upstream datasets; do not treat their upstream burdens as zero. | `eu-pef-2021-2279` |
| `boundary_direct_emissions` | blending, storage, and loading | Collect or calculate site-specific direct releases, including equipment leaks, tank losses, loading losses, spills, and wastewater transfers. Use facility conditions and control performance when applying an engineering method. | `epa-ap42-5-1`; `epa-ap42-5-2` |
| `boundary_excluded_use` | downstream system | Exclude downstream distribution beyond the declared gate, aircraft fuelling, fuel combustion, aircraft operation, and maintenance unless a broader study adds them as separately reported processes. | `eu-pef-2021-2279` |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `blending_release` | Aviation-gasoline blending, additive injection, testing, and release; Tiangong process `64853250-d002-406b-9226-77f1e17fd630` | required | Always | Foreground production and batch release | 1 kg released aviation gasoline |
| `storage_loading` | Released-product storage and plant-gate loading | required | Always | Foreground storage and dispatch | 1 kg aviation gasoline delivered at the declared plant gate |

### Process: Aviation-gasoline blending, additive injection, testing, and release (`blending_release`)

#### Inputs

##### Product flows

###### Aviation-gasoline base blend components (`base_blend_components`)

Record each blend component separately where records permit, including the component identity, supplier or on-site source, mass, batch, and upstream dataset. Aggregation into one blending-pool input is allowed only with the component composition disclosed.

- Selected flow: Site-selected product flows for the actual aviation-gasoline blend components
- Flow property / unit: Mass / kg
- Amount rule: measured component mass charged to released batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released aviation gasoline
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_components`
- Sources: `faa-ac-20-24d`; `astm-d910`
- Range: Provisional blend-component mass screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.8
  - Upper: 1.2
  - Unit: kg/kg released aviation gasoline
  - Basis: total blend-component mass charged per kg released product before separate accounting of rework and losses
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Grade-specific additive package (`grade_specific_additives`)

Record each additive actually used and preserve its function, grade applicability, lead or metal content where relevant, supplier, batch, and mass. Do not assume that all aviation-gasoline grades use the same additive package.

- Selected flow: Site-selected product flows for the actual grade-specific additives
- Flow property / unit: Mass / kg
- Amount rule: measured additive mass injected into released batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: per 1 kg released aviation gasoline
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_batch_components`
- Sources: `faa-ac-20-24d`; `astm-d910`; `faa-pafi-fuel-best-practices`
- Range: Provisional additive-package screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg released aviation gasoline
  - Basis: broad initial screen for all separately metered grade-specific additives
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Purchased electricity (`blending_electricity`)

Record metered electricity used for component receipt, blending, pumping, additive injection, testing, and release. Apply the electricity mix appropriate to the facility and reporting period.

- Selected flow: Site-selected electricity supply product flow
- Flow property / unit: Energy / kWh
- Amount rule: metered or invoice-reconciled electricity attributable to the blending and release process
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released aviation gasoline
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_utilities`
- Sources: `eu-pef-2021-2279`
- Range: Provisional electricity screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 2
  - Unit: kWh/kg released aviation gasoline
  - Basis: broad first-pass screen for blending, pumping, testing, and release electricity
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process and cleaning water (`blending_water`)

Record water that crosses the process boundary for equipment cleaning, laboratory work, spill response, or other production uses; exclude unrelated site water by subdivision.

- Selected flow: Site-selected water supply product flow
- Flow property / unit: Mass / kg
- Amount rule: measured or allocated water use attributable to released aviation-gasoline batches
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released aviation gasoline
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_blending_utilities`
- Sources: `eu-pef-2021-2279`
- Range: Provisional water-use screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg released aviation gasoline
  - Basis: broad first-pass screen for process, laboratory, and cleaning water
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Released aviation gasoline (`aviation_gasoline_output`)

The reference product is released only after the declared batch specification and grade have been verified. The normalized amount is derived from released batch mass, not from nominal vessel capacity.

- Selected flow: Aviation gasoline `60324705-7a75-4213-82e6-30e7b9a24bc9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: released aviation-gasoline mass divided by the released aviation-gasoline mass for the reporting period
- Value mode: Calculated value (`calculated_value`)
- Specificity: Product-specific (`product_specific`)
- Normalization basis: 1 kg released aviation gasoline
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_finished_product_release`
- Sources: `faa-ac-20-24d`; `astm-d910`

##### Waste flows

###### Off-specification material and unrecovered spill (`off_spec_and_spill_waste`)

Record off-specification material, contaminated product, laboratory discard, and unrecovered spill as separate waste flows when their treatment routes differ. Material returned to the blend is recorded as rework rather than waste.

- Selected flow: Site-selected waste flows matching the actual material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to each waste treatment route
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released aviation gasoline
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rework`
- Sources: `eu-pef-2021-2279`
- Range: Provisional off-specification and spill-waste screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.2
  - Unit: kg/kg released aviation gasoline
  - Basis: broad first-pass screen for material leaving the foreground system as waste
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Process wastewater (`blending_wastewater`)

Record wastewater crossing the foreground boundary, including measured volume or mass and treatment destination. Account separately for recovered hydrocarbon returned to production.

- Selected flow: Site-selected wastewater flow matching the actual treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured wastewater sent to treatment
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released aviation gasoline
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_waste_and_rework`
- Sources: `epa-ap42-5-1`
- Range: Provisional wastewater screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 5
  - Unit: kg/kg released aviation gasoline
  - Basis: broad first-pass screen for wastewater sent to treatment
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Direct releases to air from blending equipment (`blending_air_emissions`)

Record measured or engineering-calculated releases from vents, equipment leaks, displaced vapors, and spills. Report named elementary substances where the monitoring or calculation method supports disaggregation; do not report one generic VOC total as if it were a complete speciated inventory.

- Selected flow: Site-selected elementary flows for the substances released to air
- Flow property / unit: Mass / kg
- Amount rule: monitored release or site-specific engineering calculation using actual throughput, material properties, equipment, controls, and operating conditions
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg released aviation gasoline
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_direct_air_emissions`
- Sources: `epa-ap42-5-1`; `epa-ap42-5-2`
- Range: Provisional direct-air-release screening range
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg released aviation gasoline
  - Basis: broad first-pass screen for total mass of direct air releases before substance-level review
  - Basis kind: Reference flow (`reference_flow`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

### Process: Released-product storage and plant-gate loading (`storage_loading`)

#### Inputs

##### Product flows

###### Released aviation gasoline transferred into storage (`released_product_to_storage`)

Record the internal transfer of specification-released aviation gasoline into the storage and loading stage. This is an internal foreground link and is not recursively expanded as another product system.

- Selected flow: Aviation gasoline `60324705-7a75-4213-82e6-30e7b9a24bc9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: measured mass transferred into released-product storage
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg aviation gasoline loaded at the plant gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_loading_throughput`
- Sources: `epa-ap42-5-2`
- Range: Provisional storage-input mass-balance screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0.9
  - Upper: 1.1
  - Unit: kg/kg product loaded at the plant gate
  - Basis: storage input mass reconciled with loaded product, inventory change, rework, spill, and evaporation
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

###### Storage and loading electricity (`storage_loading_electricity`)

Record metered electricity for tank circulation, pumping, instrumentation, vapor control, and loading attributable to released aviation gasoline.

- Selected flow: Site-selected electricity supply product flow
- Flow property / unit: Energy / kWh
- Amount rule: metered or invoice-reconciled electricity attributable to storage and loading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg aviation gasoline loaded at the plant gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_loading_utilities`
- Sources: `eu-pef-2021-2279`
- Range: Provisional storage and loading electricity screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 1
  - Unit: kWh/kg product loaded at the plant gate
  - Basis: broad first-pass screen for storage circulation, vapor control, and loading electricity
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Waste flows

##### Elementary flows

#### Outputs

##### Product flows

###### Aviation gasoline delivered at the plant gate (`plant_gate_aviation_gasoline`)

Record the measured mass loaded into the custody-transfer container or conveyance at the declared plant gate. The product retains the same declared specification, grade, and batch-release identity.

- Selected flow: Aviation gasoline `60324705-7a75-4213-82e6-30e7b9a24bc9`
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: loaded custody-transfer mass normalized to 1 kg at the plant gate
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: 1 kg aviation gasoline loaded at the plant gate
- Basis kind: Reference flow (`reference_flow`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_loading_throughput`
- Sources: `faa-ac-20-24d`; `astm-d910`

##### Waste flows

###### Storage slop and loading spill waste (`storage_loading_waste`)

Record slop, contaminated drainage, and unrecovered loading spill sent to treatment. Separately record material recovered to rework.

- Selected flow: Site-selected waste flows matching actual material and treatment route
- Flow property / unit: Mass / kg
- Amount rule: measured mass sent to treatment from storage and loading
- Value mode: Foreground record (`foreground_record`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg aviation gasoline loaded at the plant gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Collected record (`collected_record`)
- Collection protocol: `cp_storage_loading_losses`
- Sources: `epa-ap42-5-2`
- Range: Provisional storage and loading waste screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg product loaded at the plant gate
  - Basis: broad first-pass screen for material leaving storage and loading as waste
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

##### Elementary flows

###### Storage and loading releases to air (`storage_loading_air_emissions`)

Record breathing, working, standing, loading, and fugitive losses using monitoring or a site-specific engineering method. Preserve throughput, temperature, vapor pressure, loading method, vapor-control collection efficiency, control efficiency, and downtime inputs when they are used.

- Selected flow: Site-selected elementary flows for the substances released to air
- Flow property / unit: Mass / kg
- Amount rule: monitored release or site-specific engineering calculation for storage and loading
- Value mode: Calculated value (`calculated_value`)
- Specificity: Site-specific (`site_specific`)
- Normalization basis: per 1 kg aviation gasoline loaded at the plant gate
- Basis kind: Process output (`process_output`)
- Evidence kind: Calculated from collection (`calculated_from_collection`)
- Collection protocol: `cp_storage_loading_losses`
- Sources: `epa-ap42-5-2`
- Range: Provisional storage and loading air-release screen
  - Range role: QA guardrail (`qa_guardrail`)
  - Lower: 0
  - Upper: 0.1
  - Unit: kg/kg product loaded at the plant gate
  - Basis: broad first-pass screen for total direct air releases before substance-level review
  - Basis kind: Process output (`process_output`)
  - Evidence kind: Reasoned estimate (`reasoned_estimate`)

## 7. Allocation and Co-product Handling

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | shared refinery or terminal operations | Avoid allocation by separately metering or otherwise subdividing aviation-gasoline blending, testing, storage, loading, and emission-control activities whenever technically possible. | `eu-pef-2021-2279` |
| `allocation_physical_driver` | non-subdividable shared utilities and operations | When subdivision is not possible, allocate using a documented causal physical driver such as metered energy, equipment operating time, batch mass throughput, tank occupancy, or loading throughput. Apply the same driver consistently to inputs and direct emissions. | `eu-pef-2021-2279` |
| `allocation_other_relationship` | remaining multifunctional burdens | Use another relationship, including economic allocation, only when subdivision and a relevant physical relationship are not feasible. Disclose values, period, formula, affected flows, and a sensitivity result. | `eu-pef-2021-2279` |
| `allocation_rework_and_waste` | rework, off-spec product, recovered vapor, and waste | Return-to-blend material remains within the mass balance without an avoided-product credit. Assign waste treatment according to the declared treatment route and do not credit recovered material unless a separately justified downstream substitution model is included. | `eu-pef-2021-2279` |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_batch_components` | `blending_release` | `base_blend_components`; `grade_specific_additives` | batch tickets, tank gauges, mass meters, formulation sheets, supplier records | batch_id; component_id; supplier_or_on_site_source; mass; unit; additive_function; specification; grade; lead_content; oxygenate_status; timestamp | reconcile charged masses to formulation and batch records | kg | each batch | complete reporting period | all blending trains in scope | sum accepted charges and normalize by released product mass | calibrated meter or gauge records; signed formulation; supplier lot traceability |
| `cp_blending_utilities` | `blending_release` | `blending_electricity`; `blending_water` | submeter, invoice, laboratory and cleaning logs | meter_id; opening; closing; unit; timestamp; process_scope; allocation_driver | direct submetering preferred; otherwise documented subdivision or causal allocation | kWh; kg | continuous or each billing period | complete reporting period | all blending, testing, and cleaning operations in scope | subtract unrelated loads, aggregate, then normalize by released product mass | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_finished_product_release` | `blending_release` | `aviation_gasoline_output` | batch release certificate and custody or tank mass records | batch_id; released_mass; unit; specification; edition; grade; lead_status; lead_content; oxygenate_status; test_results; release_decision; timestamp | verify specification-grade identity and sum only released product | kg | each released batch | complete reporting period | all released batches in scope | sum released mass; retain rejected and reworked batches separately | signed certificate; laboratory accreditation or QA record; calibrated mass or density-volume measurement |
| `cp_waste_and_rework` | `blending_release` | `off_spec_and_spill_waste`; `blending_wastewater` | waste manifests, spill logs, wastewater meters, rework tickets | event_or_batch_id; material_identity; mass_or_volume; density; destination; treatment_route; rework_status; timestamp | measure each exit and reconcile with batch mass balance | kg | each event and monthly reconciliation | complete reporting period | all blending-related waste and wastewater | aggregate by material and route; convert volume with measured density | manifest or meter; incident record; treatment receipt; mass-balance reconciliation |
| `cp_direct_air_emissions` | `blending_release` | `blending_air_emissions` | monitoring results, leak surveys, throughput and engineering-calculation inputs | source_id; substance; measured_concentration_or_factor; throughput; vapor_pressure; temperature; control_status; collection_efficiency; control_efficiency; downtime; result_mass; method | direct monitoring preferred; otherwise site-specific documented engineering calculation | kg | monitoring schedule plus each material event | complete reporting period | all vents, leaks, displaced vapors, and spills in scope | aggregate by named substance and normalize by released product mass | method reference; instrument QA; input records; calculation workbook |
| `cp_storage_loading_throughput` | `storage_loading` | `released_product_to_storage`; `plant_gate_aviation_gasoline` | tank inventory, transfer meter, custody-transfer and batch records | tank_id; batch_id; opening_mass; receipts; loaded_mass; closing_mass; density; temperature; timestamp | reconcile storage inventory change and custody transfers | kg | each transfer with monthly reconciliation | complete reporting period | all released-product tanks and loading racks in scope | mass balance by tank and batch; normalize to loaded plant-gate mass | calibrated transfer meter; gauge record; custody document; reconciliation sign-off |
| `cp_storage_loading_utilities` | `storage_loading` | `storage_loading_electricity` | submeter and invoice records | meter_id; opening; closing; unit; timestamp; equipment_scope; allocation_driver | direct submetering preferred; otherwise documented causal allocation | kWh | continuous or each billing period | complete reporting period | tanks, pumps, vapor control, and loading equipment in scope | aggregate attributable use and normalize by loaded mass | meter calibration; invoice reconciliation; allocation worksheet |
| `cp_storage_loading_losses` | `storage_loading` | `storage_loading_waste`; `storage_loading_air_emissions` | tank and loading logs, spill records, vapor-control logs, monitoring and calculation inputs | tank_or_rack_id; substance_or_material; throughput; temperature; vapor_pressure; loading_method; control_status; collection_efficiency; control_efficiency; downtime; waste_mass; emission_mass; timestamp | monitoring or site-specific storage and loading calculation plus material reconciliation | kg | each loading event where available and monthly reconciliation | complete reporting period | all tanks and loading racks in scope | aggregate by substance or waste route and normalize by loaded mass | control-device record; inspection log; incident record; method and calculation workbook |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | every inventory row | normalized amount = reporting-period amount / reporting-period plant-gate loaded aviation-gasoline mass | collected flow amount; loaded reference-product mass | amount per 1 kg reference product | `eu-pef-2021-2279` |
| `calc_volume_to_mass` | liquid records measured by volume | mass = measured volume × density measured or documented for the relevant batch and temperature | volume; density; temperature; batch identity | kg | `astm-d910` |
| `calc_batch_mass_balance` | blending and storage stages | opening inventory + receipts + transfers in = closing inventory + released or loaded product + transfers out + rework + waste + wastewater-borne product + direct losses; investigate and disclose residual imbalance | inventory, throughput, rework, waste, wastewater, spill, and emission records | reconciled mass balance and residual | `eu-pef-2021-2279` |
| `calc_direct_air_release` | blending, storage, and loading emissions | use measured mass where available; otherwise apply a documented engineering method with the actual liquid properties, throughput, equipment, loading method, control collection efficiency, control efficiency, and downtime | monitoring or facility-specific method inputs | kg of each named substance released | `epa-ap42-5-1`; `epa-ap42-5-2` |
| `calc_shared_operation_allocation` | shared utilities and direct emissions | subdivide first; if impossible, allocated amount = shared amount × documented causal physical driver share; use another relationship only with justification and sensitivity | shared amount; driver totals; product driver; allocation justification | amount assigned to aviation gasoline | `eu-pef-2021-2279` |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | reference product | Every released batch must retain its applicable specification and edition, grade, lead status, oxygenate status, test results, and release decision. | batch certificate and laboratory QA records; `faa-ac-20-24d`; `astm-d910` |
| `dq_primary_data` | foreground activity data | Use facility- and reporting-period-specific batch, meter, inventory, waste, and emission records. Identify any secondary or modelled substitution and its affected rows. | source records and substitution register; `eu-pef-2021-2279` |
| `dq_completeness` | foreground inventory | Cover all environmentally relevant material, energy, waste, and elementary flows within the declared boundary, including fugitive, storage, loading, spill, and wastewater routes. | completeness reconciliation and mass balance; `eu-pef-2021-2279`; `epa-ap42-5-1`; `epa-ap42-5-2` |
| `dq_representativeness` | dataset profile | Report technological, geographical, and time representativeness and precision for the foreground data; identify differences between the dataset and the declared product route. | data-quality assessment; `eu-pef-2021-2279` |
| `dq_traceability` | calculations and allocation | Retain raw fields, units, conversions, calculation versions, allocation drivers, control performance, and reviewer sign-off sufficient to reproduce every normalized amount. | calculation workbook, meter records, method references, and review record |

## 9. Validation Rules

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_identity` | reference flow and dataset metadata | Fail if the Tiangong reference product flow UUID, Mass flow-property UUID, Units-of-mass UUID, specification, grade, lead status, oxygenate status, production location, or reporting period is missing or inconsistent. | `faa-ac-20-24d`; `astm-d910` |
| `validation_reference_amount` | quantitative reference | Confirm that the plant-gate product output is exactly 1 kg after normalization and that all volume-to-mass conversions retain batch density and temperature evidence. | `astm-d910` |
| `validation_process_coverage` | process inventory | Confirm that blending and release plus storage and loading are represented, or explicitly document why a separately linked process replaces one of them without creating a gap. | `epa-ap42-5-1`; `epa-ap42-5-2` |
| `validation_mass_balance` | blending and storage | Reconcile component, product, inventory-change, rework, waste, wastewater, spill, and direct-loss masses over one consistent period; report the residual and investigation rather than forcing closure. | `eu-pef-2021-2279` |
| `validation_direct_emissions` | air, water, and waste releases | Confirm that site-specific releases and control performance are collected or calculated and that a generic factor is not used without the required facility inputs and applicability statement. | `epa-ap42-5-1`; `epa-ap42-5-2` |
| `validation_allocation` | shared operations | Confirm subdivision was attempted first and every remaining allocation has a stated driver, formula, period, affected flows, and sensitivity where another relationship is used. | `eu-pef-2021-2279` |
| `validation_reasoned_estimates` | provisional ranges | Treat every `reasoned_estimate` range as a screening flag only. It must not replace foreground values, define a conformance limit, or support a public comparative assertion. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Foreground data package for finished aviation-gasoline production, publishable as a `secondary_dataset` or `background_dataset` after review |
| downstream_use | Process and lifecyclemodel construction for specification-declared aviation gasoline at a refinery or terminal plant gate |
| allowed_use | Attributional modelling of the declared production route, grade, facility geography, technology, and reporting period; upstream linkage to actual blend components and utilities |
| excluded_use | Aircraft combustion or operation; downstream distribution beyond the declared gate; substitution for turbine fuel, automotive gasoline, another aviation-gasoline grade, or an unspecified geography or technology without review; public comparative assertions based on provisional ranges |
| required_metadata | canonical PCR id; reference flow UUID; specification and edition; grade; lead and oxygenate status; formulation route; facility and geography; reporting period; batch coverage; component origin; storage and loading configuration; vapor-control status; allocation method; upstream dataset references |
| required_quality_disclosure | primary-data share; technological, geographical, and time representativeness; precision; mass-balance residual; missing or modelled flows; provisional ranges used only for screening; source and control-method limitations |
| update_trigger | Change in product specification or grade, formulation or additive package, lead or oxygenate status, component origin, facility technology, storage or vapor control, allocation method, reporting period representativeness, or any material data gap |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `faa-ac-20-24d` | official_guidance | U.S. Federal Aviation Administration, AC 20-24D, Approval of Propulsion Fuels, Additives, and Lubricating Oils, https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_20-24D.pdf, retrieved 2026-08-09 | Aviation-gasoline scope, reciprocating spark-ignition use, D910 primacy, grade and fuel-specification disclosure |
| `astm-d910` | standard | ASTM International, D910, Standard Specification for Leaded Aviation Gasolines, https://store.astm.org/standards/d910, retrieved 2026-08-09 | Declared grade identity and grade-specific physical, chemical, performance, and test requirements only when D910 is the declared applicable specification |
| `faa-pafi-fuel-best-practices` | official_guidance | U.S. Federal Aviation Administration, PAFI Fuel Development and Testing Best Practices, https://www.faa.gov/sites/faa.gov/files/PAFI_Fuel_Development_Best%20Practices.pdf, retrieved 2026-08-09 | Grade-specific formulation and batch-property evidence; values apply only when the corresponding declared grade and test context match |
| `epa-ap42-5-1` | official_guidance | U.S. Environmental Protection Agency, AP-42 Section 5.1 Petroleum Refining, https://gaftp.epa.gov/ap42/ch05/s01/final/c05s01_jan1995.pdf, retrieved 2026-08-09 | Refinery process boundary, equipment leaks, spills, drains, wastewater-related releases, monitoring and control context |
| `epa-ap42-5-2` | official_guidance | U.S. Environmental Protection Agency, AP-42 Section 5.2 Transportation and Marketing of Petroleum Liquids, https://www.epa.gov/sites/default/files/2020-09/documents/5.2_transportation_and_marketing_of_petroleum_liquids.pdf, retrieved 2026-08-09 | Storage and loading loss mechanisms, facility-specific calculation inputs, vapor collection and control records |
| `eu-pef-2021-2279` | official_guidance | European Commission, Recommendation (EU) 2021/2279, Product Environmental Footprint Method, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30, retrieved 2026-08-09 | Functional-unit structure, completeness, primary data, allocation hierarchy, representativeness, precision, and transparent data-gap disclosure |
