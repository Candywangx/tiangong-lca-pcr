---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.bus-station-services
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Bus station services

## 1. Scope and Applicability

Cover urban, suburban and interurban bus passenger terminal services, including actual terminal facility access, ticket sales, reservations, luggage-office administration and left-luggage custody. The official CPC note excludes baggage and freight handling classified in 67190. Physical loading/unloading of baggage onto transport is therefore outside this service. [Source: `un-cpc3-67410`]

Each dataset represents ONE qualified completed terminal-service event type and functional extent: for example, one passenger terminal visit, one independently sold booking transaction, or one identified left-luggage consignment over its recorded custody period. These are separate scenarios with distinct records, not interchangeable units. A full visit includes only its stated functions; its subsidiary ticket/office actions are not counted again as additional full outputs.

Exclude bus transport, vehicle manufacture and maintenance, bus fuel/charging and vehicle exhaust (including bus idling), road infrastructure operation sold separately, retail/restaurant tenants and freight handling. Carrier emissions remain in the carrier transport dataset even when physically inside the terminal; geographic presence alone does not transfer them. Reconcile operator contracts and show any separately modelled idling/transfer interface once.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.bus-station-services |
| classification_refs | CPC 3.0 67410 |
| covered_products | Urban/suburban/interurban bus-terminal facility, ticket/reservation and luggage-office/left-luggage services; separately qualified scenarios |
| excluded_products | Bus carriage and vehicle operation; baggage/freight loading; unrelated retail and catering |
| representative_product | One completed passenger terminal visit with declared included functions |
| production_route | Receive service request/admit passenger → actual facility/office/custody operations → complete specified service and close record |
| market_state | Terminal service provided under stated operator/carrier/customer contract boundaries |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Complete one identified bus passenger terminal-service event at the stated functional extent |
| How much | One event with passenger count, station functions, transaction count and any custody extent explicitly declared |
| How well | Actual declared passenger-access, opening-hours, safety/accessibility, transaction acceptance and custody-release requirements; no invented universal quality threshold |
| How long or cycle | Actual event from request/admission to completion/release, including its attributable waiting and support period |
| reference_flow_link | `terminal_output` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Bus passenger terminal service event |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | station/site and period; urban/suburban/interurban context; event subtype; exact start/end and included functions; passenger count and throughput; station hall/platform extent and opening hours; dwell time; ticket/reservation success criteria; any luggage consignment count/mass/custody duration; accessibility and safety requirements; operator/carrier/contractor split; tenant separation; asset scope/life denominator; electricity region/voltage |

item is the singular count alias of verified Item(s). It counts a completed specified service, not a passenger-kilometre, bus movement, ticket revenue, generic booking click or luggage kilogram. For a terminal visit, count one passenger admission-to-completion once; for a separately contracted office event, specify its actual customer/transaction/consignment extent. Retain different event types separately and never infer equal burdens or default conversion between them.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `event_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Count the cp_events completed event definition once with its declared extent and start/end. Failed work remains attributable input, not extra successful output. |
| `event_separation` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Keep terminal visits, independently contracted transactions and custody events separate. No generic count-to-time, passenger-to-bus or luggage-mass equivalence is assumed. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Declared terminal configuration and service request/passenger admission; installed facilities are not burden-free |
| starting_condition_role | foreground_start |
| product_classification_scope | Bus-terminal passenger support and office/custody service, excluding vehicle carriage and baggage loading |
| recursive_input_rule | Subcontracted same-category terminal support enters as one evidenced upstream service scope; do not also duplicate its energy or assets locally |
| upstream_dataset_requirement | Actual utilities, consumables, IT/facility manufacture/retirement and waste treatment; reconcile contractor inventories |
| disclosure | Service subtype and extent; passenger/station interface; opening/dwell time; carrier/contractor/tenant split; asset life/utilization; missing upstream scope |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_services` | Include actual passenger facilities, ticketing/reservations, luggage-office administration and custody only for the chosen event. Physical baggage/freight loading remains outside 67410. | un-cpc3-67410 |
| `boundary_support` | Include attributable lighting, heating, cooling, ventilation, IT, security, sanitation, cleaning and real maintenance. Track operating/control schedules and meter use; no standard building energy share is assumed. | energystar-om |
| `boundary_assets` | Include supported manufacture/retirement shares of actual terminal building, ticket IT, cooling and custody equipment; prevent overlap with complete upstream building or contractor datasets. |  |
| `boundary_atomic` | Screen each additional actual fuel, purchased heat/cooling, refrigerant, cleaning formulation, maintenance component, waste and emission separately; add exact atomic rows. Absence must be evidenced, not inferred from a short template. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| terminal | Provide and complete declared terminal service | required | Actual event subtype and each row condition | foreground_production | per reference flow |

### Process: Provide and complete declared terminal service (`terminal`)

#### Inputs

##### Product flows

###### Low-voltage alternating current electricity (`electricity`)

Meter hall/platform lighting, ventilation, cooling, escalators, security and ticketing equipment actually within operator scope. Record region and voltage; meter bus charging separately as vehicle energy.

- Selected flow: Low-voltage alternating current electricity
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Natural gas (`natural_gas`)

Conditional on actual station heating or hot-water production. Preserve metered unit and composition; volume-to-mass conversion needs measured conditions and evidenced density.

- Selected flow: Natural gas
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_utilities.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_utilities`
- Sources:

###### Diesel fuel (`diesel`)

Conditional on actual station-owned standby generation; separate fuel stock changes and test operation. Bus fuel, including bus idling, is outside this row.

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

###### Tap water (`water`)

Meter station sanitation, cleaning and other actual passenger-service water; distinguish tenants, vehicle washing and stormwater.

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

###### Thermal ticket paper (`ticket_paper`)

Conditional on printed tickets or reservation receipts; weigh issued/returned stock including failed printing. Electronic-only events do not invent paper consumption.

- Selected flow: Thermal ticket paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Sanitary tissue paper (`tissue`)

Actual passenger-facility sanitary paper consumption; separate retail goods sold by tenants.

- Selected flow: Sanitary tissue paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### Sodium-hypochlorite cleaning solution (`cleaner`)

Only when this actual formulated cleaner is used; record solution concentration and whole-solution mass, not pure active chemical mass. Other cleaners require their own specific rows.

- Selected flow: Sodium-hypochlorite cleaning solution
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_materials.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_materials`
- Sources:

###### 1,1,1,2-Tetrafluoroethane refrigerant (`r134a_supply`)

Conditional on actual R134a station air-conditioning equipment; record supplier and service-cylinder mass, stocks, installed charge and recovery. Purchased supply is not assumed equal to release.

- Selected flow: 1,1,1,2-Tetrafluoroethane refrigerant
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Sources: `epa-refrigerant-balance`

###### Bus passenger terminal building (`building`)

Allocate production and retirement of the actual terminal building using construction scope and supported lifetime utilization; keep station hall, bus platform, tenant and unrelated spaces distinct.

- Selected flow: Bus passenger terminal building
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Electronic ticketing terminal (`ticket_terminal`)

Conditional on actual ticket/reservation terminal; record model, use and documented life. Do not count one whole computer per ticket.

- Selected flow: Electronic ticketing terminal
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Passenger-hall air-conditioning unit (`hvac`)

Actual equipment manufacturing/retirement share, with installed configuration and supported operation-life denominator. Separate electricity and onsite refrigerant servicing from embodied inventory.

- Selected flow: Passenger-hall air-conditioning unit
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Steel left-luggage locker (`locker`)

Conditional on actual left-luggage service; record locker configuration, storage extent, real occupancy and supported lifetime use.

- Selected flow: Steel left-luggage locker
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
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

###### Bus passenger terminal service event (`terminal_output`)

One completed event of the declared subtype and functional extent; subsidiary actions within a full visit do not generate additional complete outputs.

- Selected flow: Bus passenger terminal service event
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_events`
- Sources:

##### Waste flows

###### Discarded thermal ticket paper (`waste_paper`)

Actual station-held failed/expired tickets and printing offcuts; distinguish tickets handed to passengers and retain actual treatment.

- Selected flow: Discarded thermal ticket paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Passenger-terminal sanitary wastewater (`wastewater`)

Actual collected sanitary effluent sent to treatment; distinguish rain runoff and vehicle-washing effluent. Record destination and treatment coverage.

- Selected flow: Passenger-terminal sanitary wastewater
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Discarded sanitary tissue paper (`waste_tissue`)

Only segregated discarded sanitary paper sent as solid waste; do not also count the same paper in the sanitary wastewater stream.

- Selected flow: Discarded sanitary tissue paper
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air (`fossil_co2`)

Actual station boiler or generator fossil combustion, from measurement or a documented fuel-specific carbon balance. Exclude bus exhaust and upstream electricity-supply emissions from this direct row.

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

###### 1,1,1,2-Tetrafluoroethane, to air (`r134a_air`)

Conditional on actual R134a losses from station equipment; derive from documented refrigerant balance, including equipment charge changes and recovery, not a default leak rate.

- Selected flow: 1,1,1,2-Tetrafluoroethane, to air
- Flow property / unit: Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_refrigerant.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_refrigerant`
- Sources: `epa-refrigerant-balance`

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocation_direct` | Use direct submetering and actual event/task records first. Ticket IT follows measured terminal/session activity; custody equipment follows actual consignment duration/occupancy; station space support uses evidenced occupied area-time and passenger use where causal. |  |
| `allocation_complete` | Distribute matched-period support including attributable standby, low-use hours and failures over completed comparable events. Do not erase idle facility burdens, equate tickets sold with all station visitors, or count passengers once at each internal checkpoint. |  |
| `allocation_assets` | For each real asset use actual utilization divided by supported lifetime utilization, reconcile period/previous shares and cap cumulative attribution at one full life. No arbitrary building life or equipment mass; supplier-covered manufacture is not counted twice. |  |
| `allocation_interfaces` | Keep bus operation, carrier idling, independent baggage loading, tenants and contractor scopes reconciled. A separately reported carrier-idling scenario stays linked to carriage and must not also be embedded in station service. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_events | terminal | terminal_output | event_record | event_id; subtype; included functions; passenger count; start/end; success; transaction/consignment; dwell; opening hours; operator split | Reconcile access counts and completed office/custody logs by unique event; keep failed actions and internal checkpoints distinct. For custody retain actual bag count, mass and period without equating it to loading service. | item | each event and reconciled period | whole matched operating period | one declared service scenario | per reference flow | event ledger; access counts; completed records |
| cp_utilities | terminal | electricity; natural_gas; diesel; water | meter_record | row; readings; unit; stock; region; voltage; operating schedule; hall/platform; tenant/carrier share | Read calibrated meters and fuel/water bills with task/zone allocation; retain standby and separate vehicle energy and tenant loads. | row unit | meter interval and billing period | same period as events | operator service scope | per reference flow | calibration; bills; zone diagrams |
| cp_materials | terminal | ticket_paper; tissue; cleaner | material_record | specific material; issued/returned mass; formulation; concentration; stock; task | Weigh actual material use and reconcile stock; preserve cleaning-solution versus active-ingredient basis and issued paper versus sold goods. | kg | each issue and period | same period as events | actual station consumables | per reference flow | stock ledger; weighing; supplier composition |
| cp_assets | terminal | building; ticket_terminal; hvac; locker | asset_record | asset_id; configuration; manufacture scope; construction inventory; actual use; lifetime utilization; previous shares; retirement | Use actual asset/construction records and equipment/space utilization; independently justify life denominator and supplier component coverage. | item | asset changes and period | asset life and current events | actually used station assets | per reference flow | register; life evidence; utilization ledger |
| cp_waste | terminal | waste_paper; wastewater; waste_tissue | waste_record | stream; mass; contamination; source; destination; treatment; date; allocation | Measure segregated streams and reconcile treatment manifests, including paper already in sewage to prevent double counting. | kg | each disposal and period | same period as events | station scope excluding tenant/vehicle wastes | per reference flow | weighing; manifests; sewage records |
| cp_emissions | terminal | fossil_co2 | emission_record | species; source; fuel; carbon content; test/model; activity; compartment | Use measured station-source emissions or a cited fuel-specific method and measured activity; vehicle emissions remain in carrier inventories. | kg | test and activity period | same period as events | actual station boiler/generator | per reference flow | test; fuel record; method source |
| cp_refrigerant | terminal | r134a_supply; r134a_air | refrigerant_balance | species; beginning/end stock; acquisitions; disbursements; beginning/end equipment charge; servicing; recovery; contractor coverage | Apply individual-species material balance with documented stock and installed-charge changes; distinguish supply, recovery and emissions. Supplier/manufacturer-filled charge is reconciled to avoid double counts. | kg | each service and reporting period | same period as events | actual station refrigerant equipment | per reference flow | service invoices; cylinder weighing; stock/charge ledger |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_completed_events` | terminal_output | Count unique completed comparable events with stated extent, excluding internal duplicate records and failed/cancelled events; their attributable work remains in inputs. Divide matched-period allocated exchanges by completed event count. | cp_events; cp_utilities; cp_materials | per reference flow |  |
| `calc_asset_share` | building; ticket_terminal; hvac; locker | Apply allocation_assets to supported manufacture/retirement inventory and measured service utilization; normalize period share over cp_events without counting the whole asset per event. | cp_assets; cp_events | per reference flow |  |
| `calc_refrigerant` | r134a_air | Use the species balance: beginning stored stock plus acquisitions plus beginning equipment charge, minus ending stored stock, disbursements and ending equipment charge. Reconcile actual recovery and equipment changes; investigate negative or unexplained balances before attributing release. No leakage percentage or GWP is prescribed. | cp_refrigerant; cp_events | species mass per reference flow | epa-refrigerant-balance |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_event | terminal_output | Functional extent and accepted completion are mandatory; one ticket is not automatically one visitor and one booking group is not automatically one passenger. | cp_events |
| dq_period | all inventory rows | Same station/period/scenario and operating/tenant/carrier boundaries for event counts, utilities and waste. Retain standby and low occupancy. | cp_events; cp_utilities |
| dq_assets | building; ticket_terminal; hvac; locker | Use actual life/utilization records with sensitivity and component overlap checks; no assumed asset mass or life. | cp_assets |
| dq_identity | all inventory rows | Flow identity, reference properties, units and localized displays must be verified before use; empty flow UUIDs remain individually disclosed, not fictional resolved services. | Direct-read support and unresolved register |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_event` | Require unique terminal_output of 1 item with complete event subtype, functional extent, service quality and start/end; reject passenger-km, bus trips, prices or unexplained transaction averages as substitutes. |  |
| `validate_boundary` | Verify all terminal-office functions in scope, distinct luggage custody versus 67190 loading, and carrier/contractor/tenant interfaces. A full visit and its included office actions cannot both count as full terminal outputs. | un-cpc3-67410 |
| `validate_atomicity` | Check each actual utility, material, asset, waste and emitted species independently; reconcile refrigerant supply/recovery/charge changes. Disclose identity and upstream gaps; parser pass alone does not establish full lifecycle completeness or methodology approval. |  |
| `validate_unit_export` | Treat item only as the singular local alias of the formal Number of items unit Item(s). Export Item(s) with the same numerical count and the fully qualified service definition; changing the display token does not change the flow property, service extent or normalization denominator. Do not convert a service item to time, mass, distance or a different family by relabelling its unit, or normalize an already per-reference quantity again. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | passenger_terminal_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Qualified bus-terminal support component in declared passenger travel or office/custody scenario |
| excluded_use | Complete passenger travel footprint, vehicle operation, baggage loading or interchangeable generic station event factor |
| required_metadata | All reference qualifiers; passenger/functions/period; site interfaces; tenant/carrier/contractor split; actual allocations; assets and upstream identities |
| required_quality_disclosure | Event comparability; dwell/traffic uncertainty; support/standby coverage; asset denominator; refrigerant balance; unresolved UUIDs and upstream omissions |
| update_trigger | Changed station function, passenger profile, terminal configuration, contract boundary, energy, refrigerant or lifetime-utilization evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-67410 | official_guidance | UNSD CPC Version 3.0, subclass 67410 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67410 | Full passenger terminal and office/custody scope; 67190 loading exclusion |
| energystar-om | official_guidance | ENERGY STAR, Operation and Maintenance Best Practices, Tune It Up / Turn It Off / Check It Out. https://www.energystar.gov/buildings/save-energy-commercial-buildings/ways-save/om-best-practices | Actual building schedules, controls and measurement of HVAC, lighting and office systems; not bus-station energy default |
| epa-refrigerant-balance | official_guidance | US EPA, Direct Fugitive Emissions from Refrigeration, Air Conditioning, Fire Suppression, and Industrial Gases, December 2023, section 2.3 material balance. https://www.epa.gov/sites/default/files/2020-12/documents/fugitiveemissions.pdf | Individual refrigerant stock, acquisitions/disbursements and equipment-charge balance; no default leak factor or GWP adopted; not full-LCA guidance |
