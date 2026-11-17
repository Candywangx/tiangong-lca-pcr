---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-cargo-and-baggage-handling-services
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Other cargo and baggage handling services

## 1. Scope and Applicability

Apply to a specified completed transfer of non-containerized freight or passenger baggage at a freight terminal, port, airport, bus or railway terminal. Include loading, unloading and terminal movement needed for that transfer. The CPC note includes freight-terminal stevedoring and baggage handling; it does not make the handled goods an output of production. [Source: `un-cpc3-67190`]

Each dataset models ONE declared cargo/baggage class, terminal, direction, transfer route and acceptance endpoint. Breakbulk, dry bulk, liquid bulk and passenger baggage are distinct scenarios; no common impact average or default count-to-mass conversion is permitted. For baggage, record both accepted bag count and actual total net handled mass. A change of handling route or product state requires another scenario with its own records.

Exclude container handling (67110), standalone storage (672), transport beyond the terminal transfer, ship navigation/berthing, terminal infrastructure operation sold separately, passenger carriage, security screening sold separately and goods manufacture/use. Temporary staging essential to the specified transfer is included with actual duration; contracted warehousing is separate.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-cargo-and-baggage-handling-services |
| classification_refs | CPC 3.0 67190 |
| covered_products | Non-container freight and baggage handling transfer, including terminal loading/unloading; segregated service scenarios |
| excluded_products | Container handling; standalone warehousing; line-haul freight; goods manufacture; passenger transport |
| representative_product | One terminal handling transfer of 1,000 kg measured net non-container cargo or baggage |
| production_route | Receipt and identify → actual handling and incidental staging → completed custody handoff |
| market_state | Contracted handling service with identified cargo class and accepted handoff |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete one specified terminal transfer of a homogeneous non-container freight or baggage scenario |
| How much | 1,000 kg net handled mass completing one declared receipt-to-handoff transfer |
| How well | Actual contract acceptance, cargo integrity and documented start/end interfaces; no invented damage tolerance |
| How long or cycle | One completed transfer, including attributed queuing, idle operation and actual staging duration |
| reference_flow_link | `handled_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1000 |
| Reference product flow | Non-containerized terminal transfer service |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | terminal/site and period; cargo/baggage class; package state and net-mass definition; source and destination interfaces; loading/unloading direction; transfer route/distance; equipment; temperature control; actual staging time; gross/tare weighing or traceable baggage mass records; contract acceptance; damage and rejected-load treatment; subcontract split; electricity region and voltage |

kg denotes handled net mass of the SERVICE activity. It is not a cargo material output, ownership transfer, tonne-kilometre, storage mass-time or baggage count. A 1,000 kg reference equals one tonne by unit definition only. Baggage counts and freight lifts cannot be converted to mass without actual weighing evidence; output is not counted once at receipt and again at delivery.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `handling_mass` | reference product | Mass | kg | Use cp_activity to measure accepted net mass once per completed boundary transfer. Exclude tare and rehandling double counts; retain failed work in attributable inputs. |
| `service_separation` | reference product | Mass | kg | Separate baggage, breakbulk and bulk scenarios. kg does not establish equivalent function or equal impact; retain handling route and equipment qualifiers. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Identified goods or baggage received at declared terminal interface; prior freight and goods production remain upstream context |
| starting_condition_role | foreground_start |
| product_classification_scope | Non-container handling service only, not production of cargo mass |
| recursive_input_rule | Subcontract handling is an upstream service with a separate evidenced boundary; do not also count its fuel, electricity and assets locally |
| upstream_dataset_requirement | Supply datasets for utilities, consumables, equipment manufacturing, infrastructure and waste treatment; direct emissions added once |
| disclosure | Cargo/baggage scenario, custody endpoints, staging duration, subcontract split, asset lifetime/activity denominator, upstream omissions |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_transfer` | Include actual receipt checking, terminal handling, indispensable staging, retries, idle energy, cleaning and maintenance attributable to accepted transfer. Exclude separately contracted transport and storage. | un-cpc3-67190 |
| `boundary_assets` | Include supported production and end-of-life shares of actually used equipment and facilities. Missing lifetime records require disclosure and sensitivity, never an assumed zero burden. |  |
| `boundary_extra` | Screen and add each actual fuel, refrigerant, chemical, cargo-specific dust species, maintenance part and waste stream as its own atomic exchange; route conditions do not excuse missing relevant exchanges. No goods-embodied burden is assigned as new service output. |  |

## 6. Process Inventory Structure

Use the actual route: crane/forklift handling for breakbulk, dedicated transfer equipment for bulk, or belts and manual loading for baggage. Add a specific equipment row when the actual type differs. A manual route may have no fuel but still requires support and asset screening. Temperature-controlled handling requires the actual cooling electricity and each leaked refrigerant separately; purchased cooling must not duplicate onsite generation.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| handling | Receive, handle and hand off non-container cargo or baggage | required | Actual scenario and row applicability | foreground_production | per reference flow |

### Process: Receive, handle and hand off (`handling`)

#### Inputs

##### Product flows

###### Electricity, low-voltage alternating current (`electricity`)

Electric drives, conveyor belts, lighting and attributable control equipment; record supply region, voltage and supplier.

- Selected flow: Electricity, low-voltage alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Diesel fuel (`diesel`)

Conditional on diesel handling equipment or emergency generation actually used. Weigh fuel or use measured volume and contemporaneous density; never copy a generic density.

- Selected flow: Diesel fuel
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Liquefied petroleum gas (`lpg`)

Conditional on an LPG-powered forklift; weigh cylinders before and after use and exclude unrelated tasks.

- Selected flow: Liquefied petroleum gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Hydraulic lubricating oil (`hydraulic_oil`)

Actual make-up and replacement oil for the identified handling equipment; distinguish additions, stored stock, waste oil and losses.

- Selected flow: Hydraulic lubricating oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Tap water (`water`)

Conditional on attributable washing or dust suppression. Collect metered water and separate stormwater and unrelated sanitary use.

- Selected flow: Tap water
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Polyester lifting sling (`sling`)

Conditional on this actual lifting consumable; record sling composition and issued/returned mass with its documented reuse allocation.

- Selected flow: Polyester lifting sling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Counterbalanced forklift (`forklift`)

Conditional on actual forklift use; manufacturing share only, with identified powertrain, model and lifetime utilization denominator.

- Selected flow: Counterbalanced forklift
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Mobile cargo crane (`crane`)

Conditional on actual mobile-crane use for non-container freight; fixed cranes use their own separate identity in the dataset.

- Selected flow: Mobile cargo crane
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Baggage belt conveyor (`conveyor`)

Conditional on actual baggage handling by conveyor; allocate manufacture over documented operating life, without assuming belt length or power.

- Selected flow: Baggage belt conveyor
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Ready-mixed concrete (`concrete`)

Conditional on attributable terminal pavement or building asset; identify grade and actual construction quantity, allocated over supported service-life activity.

- Selected flow: Ready-mixed concrete
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

#### Outputs

##### Product flows

###### Non-containerized terminal transfer service (`handled_output`)

Accepted completed transfer of the declared net handled mass; failed work and internal rehandling do not create additional output.

- Selected flow: Non-containerized terminal transfer service
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: 1000 kg
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_activity`
- Sources: `un-cpc3-67190`

##### Waste flows

###### Waste hydraulic oil (`waste_oil`)

Conditional on segregated drained oil; identify contamination and actual permitted treatment route; no automatic recovery credit.

- Selected flow: Waste hydraulic oil
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_wastes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources:

###### Discarded polyester lifting sling (`waste_sling`)

Conditional on actual discarded sling; keep this solid stream separate from oil and damaged customer goods.

- Selected flow: Discarded polyester lifting sling
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_wastes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources:

###### Equipment washing wastewater (`wastewater`)

Conditional on wastewater collected and sent to treatment; record quantity, contaminants and destination; water evaporated is not wastewater.

- Selected flow: Equipment washing wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_wastes.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_wastes`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air (`fossil_co2`)

Conditional on onsite fossil fuel combustion; use measured emission or a cited composition-specific carbon balance with oxidation evidence; exclude upstream combustion already in fuel supply.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### Nitrogen dioxide, to air (`nitrogen_dioxide`)

Conditional on measured or specifically modelled NO2; do not relabel total NOx as this species without a supported speciation method.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

###### Particulate matter below 2.5 micrometres, to air (`pm25`)

Conditional on measured or supported PM2.5 from equipment or cargo dust; specify source and avoid overlap with a larger particle-size total.

- Selected flow: Particulate matter below 2.5 micrometres, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emissions.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emissions`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_meter` | Use task submetering and job records first. Where shared equipment is unavoidable, use measured task energy or fuel; a documented operating-time/load proxy requires calibration and uncertainty. Allocate support lighting by evidenced occupied area-time only where a causal relationship exists. |  |
| `allocation_mass` | Only within the same declared cargo class and route may a justified throughput-mass allocation be used. Preserve loading/unloading counts, idle work, failures and rejected consignments; never average baggage with bulk cargo or infer mass from fees. |  |
| `allocation_assets` | Allocate each asset manufacturing and retirement burden by recorded service utilization divided by a documented lifetime utilization denominator. Record period shares and cap cumulative attribution at one asset life; no full crane is consumed per reference transfer. Avoid double counting supplier-included asset burdens. |  |
| `allocation_custody` | Cargo remains customer goods; it is not a co-product. Record damage, spills and their attributable treatment without adding the full manufacture of all handled goods to the service reference. Any incremental replacement scenario is separately declared. No default substitution or recycling credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_activity | handling | handled_output | weighing_record | job_id; cargo_class; gross_mass; tare_mass; accepted_net_mass; start; end; bag_count; rejection; rehandling | Use calibrated scale and custody tickets; for baggage retain actual batch mass and bag count. Reconcile receipt and handoff IDs. | kg | each transfer | same declared observation period | declared terminal route and cargo scenario | per reference flow | calibration; tickets; mass reconciliation |
| cp_utilities | handling | electricity; diesel; lpg; water | meter_record | row_id; meter_start; meter_end; task; timestamp; unit; load; stock_change | Task meter, weigh issue/return fuel and reconcile stock; segregate each utility and idle operation. | row unit | each job and reconciled period | same period as cp_activity | owned handling equipment and support | per reference flow | meter calibration; bills; stock balance |
| cp_materials | handling | hydraulic_oil; sling | issue_return_record | specific material; composition; issued; returned; stock; reuse cycles; task | Weigh specific issued and returned materials; document reuse attribution and maintenance work. | kg | each maintenance/job | same period as cp_activity | declared equipment only | per reference flow | issue tickets; maintenance records |
| cp_assets | handling | forklift; crane; conveyor; concrete | asset_record | asset_id; configuration; manufacturing quantity; lifetime use; actual use; prior shares; end_of_life | Asset register, construction bills and hour meters; validate lifetime denominator and supplier burden coverage. | row unit | asset update and reporting period | lifetime and same-period task use | actually used facilities and equipment | per reference flow | asset register; utilization ledger; denominator evidence |
| cp_wastes | handling | waste_oil; waste_sling; wastewater | waste_transfer_record | row_id; mass; composition; contamination; treatment; destination; date; task_share | Weigh segregated streams and reconcile waste manifests and actual treatment; retain rejected/damaged-goods streams separately. | kg | each transfer and period | same period as cp_activity | attributable handling wastes | per reference flow | weighing tickets; treatment manifests |
| cp_emissions | handling | fossil_co2; nitrogen_dioxide; pm25 | emission_record | species; source; compartment; engine_id; fuel; operating_hours; test; method; factor_source; capture | Measure emissions or use an explicitly cited equipment-specific model with measured activity. Record actual hours and load; no default factors adopted here. | kg | test and matched activity period | same period as cp_activity | onsite sources only | per reference flow | test report; model version; activity records |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_activity` | handled_output | Net accepted mass is gross minus the evidenced tare, counted once per completed transfer. Divide period attributable exchanges by the number of 1,000 kg accepted-mass reference flows; all cards use that same reference. | cp_activity; task records | per reference flow |  |
| `calc_assets` | forklift; crane; conveyor; concrete | Apply allocation_assets to documented manufacturing quantity and the actual-use/lifetime-use share; distribute the resulting period share on the same reference basis. Unsupported life or utilization remains an uncertainty requiring review. | cp_assets; cp_activity | asset share per reference flow |  |
| `calc_emissions` | fossil_co2; nitrogen_dioxide; pm25 | Use measured species masses or a traceable cited model with matched activity and control efficiency; preserve each species and compartment. Factor choice, units and conversion must be recorded; no NOx-to-NO2 or mass-to-impact shortcut. | cp_emissions; cp_activity | species mass per reference flow | epa-che |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_mass | handled_output | Reconcile net mass, accepted jobs and duplicated handling; no default baggage mass. A service label or price alone is insufficient. | cp_activity |
| dq_routes | all inventory rows | Same terminal, period and scenario basis across meters, task records, waste and emission data. Include idle and failed attributable work. | cp_activity; cp_utilities |
| dq_assets | forklift; crane; conveyor; concrete | Document lifetime denominator, period boundary, previous shares and sensitivity; no invented service life, equipment mass or automatic zero. | cp_assets |
| dq_identity | all inventory rows | Verify exact flow, property, unit and language against Tiangong direct reads before use; unresolved identity does not justify pooled exchanges or a claim of complete validation. | Direct records and gap disclosure |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_reference` | Require 1000 kg accepted net handling activity and one unique handled_output product row. Reject containerized freight, tonne-kilometres, generic service counts and warehouse mass-time as substitutes. | un-cpc3-67190 |
| `validate_separation` | Do not combine passenger baggage, bulk and breakbulk into one average. Verify route qualifiers, measured baggage mass, source/destination interfaces and one-count handoff reconciliation. |  |
| `validate_completeness` | Check each present utility, material, equipment, maintenance item, emission species and waste individually; verify upstream and subcontract coverage without double counting. Disclose all missing UUIDs, factors and asset denominators; no complete lifecycle or methodology approval claim from a check alone. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | handling_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Identified non-container handling input to a declared freight or baggage chain with matched route and mass basis |
| excluded_use | Universal cargo/baggage average; complete freight transport or goods footprint; carbon-neutrality or classification approval |
| required_metadata | All reference qualifiers; actual period; scenario; custody boundaries; upstream datasets; allocation; subcontract coverage |
| required_quality_disclosure | Identity gaps; activity uncertainty; engine method/factors; asset denominator; missing upstream burdens; rejected/damaged goods and scenario limits |
| update_trigger | Changed cargo scenario, terminal route, equipment, energy supply, contract handoff, emission method or supported asset lifetime |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-67190 | official_guidance | UNSD, Explanatory Notes of the Central Product Classification, Version 3, 10 February 2025, subclass 67190. https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf | Classification scope of non-container freight and passenger baggage; no inventory factors or functional equivalence |
| epa-che | official_guidance | US EPA, Cargo Handling Equipment (CHE) Best Practices to Improve Air Quality, CHE at Ports; Tips on Performance Targets and Data Collection. https://www.epa.gov/ports-initiative/cargo-handling-equipment-che-best-practices-improve-air-quality | Equipment diversity and actual equipment operating-hour records; U.S. port context, not a numerical default or global full-LCA standard |
