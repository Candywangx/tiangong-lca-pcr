---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-services-for-road-transport
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Other supporting services for road transport: noncarrier pilot/escort tasks

## 1. Scope and Applicability

This PCR covers the defined subset of commercial, noncarrier pilot/escort assistance to an oversize road vehicle/convoy: assignment-specific planning, actual lead/rear/height-pole warning and communication duties, task mobilization and documented completion. Declare the exact role/team and route segment. It does not claim methodology for every unidentified residual road-support activity in CPC 67490. Other service families cannot adopt its reference quantity or inventory by relabelling an invoice.

CPC 67490 supplies a residual nonintermediation scope and explicit exclusions, not an official list naming pilot escorts. This specific function is a narrowly bounded subset of the residual category; FHWA evidence establishes how escort work is performed, not CPC equivalence or a current legal permission. Each actual data package needs positive function/contract evidence and a reasoned competing-classification assessment. [Source: `un-cpc-67490`; `fhwa-escort-planning`; `fhwa-escort-movement`]

Exclude 67410 bus-terminal operation, 67420 road/bridge/tunnel operation, 67430 parking, 67440 towing, 85340 vehicle cleaning and 85610/85630 transport intermediation. Also exclude actual freight/passenger carriage, paid passenger rides, armed/anti-theft/property-protection guarding, public policing or permit administration, standalone engineering/surveying consultancy and standalone route-report sales. Route review and authorised warning duties integrated with the actual escort task are not a claim to provide public enforcement or infrastructure operation. [Source: `un-cpc-counterclasses`]

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.other-supporting-services-for-road-transport |
| classification_refs | CPC3.0 67490; narrower semantic subset |
| covered_products | Noncarrier commercial oversize-road-movement pilot/escort tasks with explicit role/team and completed route segment |
| excluded_products | All unspecified residual families; terminals/road operation/parking/towing/cleaning/intermediation; carriage; security guarding; public policing; standalone engineering |
| representative_product | One completed qualified noncarrier pilot/escort task |
| production_route | Review assignment/route → prepare equipment and mobilize → actual escort warning/communication → acceptance/log/return |
| market_state | Delivered physical road-movement assistance with signed task/role completion; no freight carriage output |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Perform the identified noncarrier lead/rear/height-pole escort scope for the specified road move |
| How much | One accepted task with declared role/team, route endpoints/length, escorted vehicles, load envelope and actual activity |
| How well | Actual task acceptance and communication/warning scope, completion location/time and incident/handoff record; no universal safety outcome assumed |
| How long or cycle | Full assignment cycle including attributable planning, survey travel, mobilization, escort, delays, return and closeout |
| reference_flow_link | `escort_service` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed qualified noncarrier road pilot/escort task |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | item |
| Required qualifiers | task/order ID; positive function/classification rationale; commercial noncarrier status; exact role/team scope; lead/rear/height-pole duties; route endpoints and distance; escorted vehicle/convoy count; dimensions/mass and constraints; dates and weather; actual assignment/escort/idle/return time and distances; powertrain and vehicles; warning/communication equipment; completion/handoff; supplier versus owned coverage |

item is the singular alias of formal Item(s); export Item(s). One provider role and a complete multi-vehicle escort team are distinct qualified scopes, not automatically equal tasks. Do not count one contracted task and its lead/rear constituents as additional complete outputs. Cargo tonnes and tonne-kilometres characterize the carrier, not escort output. Other residual services require separate reviewed applicability, task definitions, physical activity and inventories; no universal service-hour, price or task conversion is allowed.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `task_count` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | cp_task counts completed identified scope; supporting photos, radios or kilometres are not extra complete tasks. Failed/cancelled work remains allocated burden. |
| `physical_extent` | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | item | Record each escort vehicle actual distances, elapsed/idle time and lead/rear role; no inferred average crew, vehicle count or load size. |
| `energy_route` | gasoline; diesel; electricity | Mass; Energy | kg; kWh | Use measured escort consumption and actual charging loss; exclude carrier traction and supplier-covered energy. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Accepted noncarrier escort assignment with specified role/team and available vehicle/equipment; prior manufacture not burden-free |
| starting_condition_role | foreground_start |
| product_classification_scope | Only the explicitly bounded pilot/escort subset under reviewed residual applicability; no automatic scope for unknown 67490 tasks |
| recursive_input_rule | Bought escort contribution enters once with exact role/route/time scope; exclude the same vehicle fuel/assets already included by its supplier |
| upstream_dataset_requirement | Actual fuel/electricity, vehicle/equipment/tyre production, road facility use, maintenance and waste treatment |
| disclosure | Role/team completeness; mobilization and return; carrier separation; road/asset coverage; classification limitations; upstream gaps |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `boundary_cycle` | Include attributable assignment planning, actual route-review travel, preparation, mobilization, escort warning/communication, waiting/retries, closeout and return; respect separately purchased stages without duplicating the full task. | fhwa-escort-planning; fhwa-escort-movement; fhwa-escort-posttrip |
| `boundary_carrier` | Exclude the load truck, cargo production, carrier fuel and payload transport inventory. Include the escort vehicles actual service travel only; same commercial invoice does not merge carrier and escort functions. |  |
| `boundary_assets` | Screen vehicle fit-out, radios, warning lights, height pole, tyre replacement, infrastructure use and maintenance; record actual assets and physical lifetime shares, avoiding duplicate fitted equipment. | fhwa-escort-planning |
| `boundary_extension` | The cards are conditional examples within this one service family. Add actual fuels, equipment, consumables, emissions and wastes individually; different residual families need their own reviewed methodology, not these cards by default. |  |

## 6. Process Inventory Structure

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| escort | Prepare, perform and close specified noncarrier escort task | required | Actual contracted role/team and route; row conditions apply | foreground_production | per reference flow |

### Process: Prepare, perform and close specified noncarrier escort task (`escort`)

#### Inputs

##### Product flows

###### Petrol, petroleum-derived (`gasoline`)

Conditional on actual petrol escort vehicle operation; include assigned approach, route checks, escort, detours, idle and return, excluding load carrier fuel.

- Selected flow: Petrol, petroleum-derived
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Diesel fuel, petroleum-derived (`diesel`)

Conditional on actual diesel escort/support vehicle; identify fuel grade and bio-content; separate other fuel formulations as actual rows.

- Selected flow: Diesel fuel, petroleum-derived
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Electricity, alternating current (`electricity`)

Measure actual EV/radio charging and task-attributable planning/support electricity, retaining charging loss; do not count internally generated alternator power again as purchased electricity.

- Selected flow: Electricity, alternating current
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Mineral lubricating oil (`oil`)

Conditional on actual attributable vehicle maintenance; record net oil consumption and prevent duplication inside purchased maintenance.

- Selected flow: Mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Passenger-car radial tyre (`tyre`)

Conditional on this actual replacement tyre; record actual design and measured lifetime mileage; pickup or other tyre designs require separate rows.

- Selected flow: Passenger-car radial tyre
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Polyester warning flag (`flag`)

Conditional on actual issue/replacement; distinguish durable flag lifetime allocation from one-use consumption.

- Selected flow: Polyester warning flag
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Petrol passenger vehicle configured for pilot escort (`petrol_car`)

Only actual owned configuration; attribute manufacture, equipment fit-out and retirement by documented task/lifetime utilization; no load carrying.

- Selected flow: Petrol passenger vehicle configured for pilot escort
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Diesel pickup configured for pilot escort (`diesel_pickup`)

Conditional on actual diesel pickup; preserve manufacturing boundary and service use; exclude cargo carrier truck.

- Selected flow: Diesel pickup configured for pilot escort
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Battery-electric passenger vehicle configured for pilot escort (`electric_car`)

Conditional on actual EV, with initial/replacement battery boundary disclosed; no default battery lifetime or duplicate initial battery.

- Selected flow: Battery-electric passenger vehicle configured for pilot escort
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### VHF two-way radio transceiver (`radio`)

Conditional on this actual communication device; allocate its production/service life and actual charging once.

- Selected flow: VHF two-way radio transceiver
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Amber LED vehicle warning beacon (`beacon`)

Conditional on actual separately acquired beacon; not an extra asset if already included in fitted vehicle.

- Selected flow: Amber LED vehicle warning beacon
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Fibreglass vehicle-mounted clearance height pole (`height_pole`)

Conditional on a height-pole escort role; record actual calibrated configuration and supported useful service life.

- Selected flow: Fibreglass vehicle-mounted clearance height pole
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_asset.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_asset`
- Sources:

###### Specified road facility-operation passage service (`road_service`)

Actual escort vehicle road use only, segmented by road/bridge/tunnel extent and compatible upstream infrastructure boundary. Do not duplicate infrastructure already in the vehicle-use dataset.

- Selected flow: Specified road facility-operation passage service
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_road.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_road`
- Sources:

#### Outputs

##### Product flows

###### Completed noncarrier road pilot/escort task (`escort_service`)

One accepted exact role/team scope completed at the declared handoff; the actual task log and completion evidence are retained.

- Selected flow: Completed qualified noncarrier road pilot/escort task
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / item
- Amount rule: 1 item
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_task`
- Sources:

##### Waste flows

###### Spent mineral lubricating oil (`waste_oil`)

Conditional on actual captured oil; reconcile with maintenance service coverage and receiving treatment.

- Selected flow: Spent mineral lubricating oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Discarded passenger-car radial tyre (`waste_tyre`)

Conditional on actual tyre replacement, with actual receiver and recycling/treatment boundary; no automatic credit.

- Selected flow: Discarded passenger-car radial tyre
- Flow property / unit: Number of items / item
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Discarded polyester warning flag (`waste_flag`)

Record actual discarded flag by material and receiver, distinct from a durable flag share.

- Selected flow: Discarded polyester warning flag
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

##### Elementary flows

###### Carbon dioxide, fossil, to air (`co2_air`)

Only escort/operator direct fuel combustion; use measured carbon/oxidation evidence or exhaust. Do not import carrier truck CO2 here.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

###### Carbon monoxide, to air (`co_air`)

Actual escort-engine emission measured or supported by an explicit engine/fuel/duty-specific factor; no default legal-limit proxy.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen monoxide, to air (`no_air`)

Species-resolved release; aggregate NOx-as-NO2 requires supported speciation and is not automatically this mass.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

###### Nitrogen dioxide, to air (`no2_air`)

Separate NO2 from NO and retain actual receiving compartment and duty basis.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

###### Particulate matter, aerodynamic diameter below 2.5 micrometres, to air (`pm25_air`)

Actual size-resolved escort combustion release; total PM and overlapping fractions cannot be counted twice. Wear and resuspended dust require separate source evidence.

- Selected flow: Particulate matter, aerodynamic diameter below 2.5 micrometres, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_emission.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_emission`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `allocate_task` | Prefer task-specific fuel, charging and equipment records. Shared preparation, dispatch and standby require measured role/time/activity drivers and reconciliation to the same company period. |  |
| `allocate_team` | Separate independently delivered lead/rear/team scopes; do not allocate by cargo value or call each escort car another complete team task. Multiple escorted loads need explicitly documented shared-task boundaries. |  |
| `allocate_assets` | Allocate actual vehicles, tyres and equipment by supported lifetime utilization and task use; identify included fit-out/battery and maintenance. Do not assume lifetime or recovery credit. |  |
| `allocate_return` | Retain empty approach, return, standby and failed-task burden; justify sharing across successive assignments and avoid inventing a successful task for cancelled work. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_task | escort | escort_service | foreground record | order; positive classification rationale; exact role/team; route; load envelope; vehicle IDs; start/end; duties; acceptance; exceptions | Verify signed function-specific work order and completion/handoff with actual trip/communication logs; assess competing carriage/security/public functions. | item | each task | same declared operating period | actual assigned escort role/team | per reference flow | signed task and completion; route/duty log |
| cp_energy | escort | gasoline; diesel; electricity | foreground record | vehicle/fuel; tank opening/closing; deliveries; charging; loss; route-review/escort/idle/return; attribution | Use actual fuel/charging measurements reconciled to escort vehicle trip logs and support meters; exclude carrier truck consumption. | kg; kWh | trip and meter interval | same declared operating period | actual assigned escort role/team | per reference flow | meter calibration; fuel/charging records; odometer logs |
| cp_material | escort | oil; flag | foreground record | specific material; issue/return; actual use; maintenance coverage; task share | Reconcile material stock and service issues with actual task/maintenance allocation, retaining each material identity. | kg | issue and period balance | same declared operating period | actual assigned escort role/team | per reference flow | stock cards; formulation; supplier service boundary |
| cp_asset | escort | tyre; petrol_car; diesel_pickup; electric_car; radio; beacon; height_pole | foreground record | specific asset; fit-out boundary; installation/replacement; actual distance/time/task use; lifetime evidence | Bind assets to upstream production and retirement; observe actual utilization and document supported physical life; avoid included-component duplication. | item | asset event and period | same declared operating period | actual assigned escort role/team | per reference flow | asset register; maintenance records; lifetime evidence |
| cp_road | escort | road_service | foreground record | escort vehicle; actual road segments; lengths; class; passage count; upstream transport/infrastructure boundary | Reconcile actual escort approach/task/return routes with compatible road-operation datasets; preserve segment extent and avoid duplicate road shares. | item | each route segment | same declared operating period | actual assigned escort role/team | per reference flow | trip record; upstream boundary verification |
| cp_waste | escort | waste_oil; waste_tyre; waste_flag | foreground record | specific waste; amount; receiver; treatment; event; task share | Measure actual separate wastes, reconcile maintenance coverage and receiver documents; no automatic substitution credit. | kg; item | each transfer | same declared operating period | actual assigned escort role/team | per reference flow | waste manifests; receiver evidence |
| cp_emission | escort | co2_air; co_air; no_air; no2_air; pm25_air | foreground record | escort engine; fuel; duty; measured exhaust or justified factor/version/unit; species/fraction; task share | Use actual escort duty and exhaust or explicitly justified engine/fuel factors; resolve species and avoid overlapping PM; disclose unquantified tyre/brake wear. | kg | duty interval and task | same declared operating period | actual assigned escort role/team | per reference flow | exhaust/fuel tests; factor applicability; load/units evidence |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| task_denominator | escort_service | N = completed accepted tasks of the exact declared role/team and extent; require N positive. Constituent warning/communication events are not extra outputs. | cp_task | N |  |
| exchange_allocation | all inventory rows | Attribute each measured numerator to the complete assigned cycle using explicit physical drivers, then divide by N; preserve actual escort miles/hours and shared return rules. | cp_task; cp_energy; cp_material; cp_road; cp_waste | exchange per reference flow |  |
| asset_allocation | tyre; petrol_car; diesel_pickup; electric_car; radio; beacon; height_pole | Assign production/maintenance/retirement by supported lifetime utilization and actual task use, excluding components already embedded in a supplier inventory; divide attributable share by N. | cp_asset; cp_task | asset share per reference flow |  |
| emission_allocation | co2_air; co_air; no_air; no2_air; pm25_air | Resolve measured or explicitly justified species/fraction mass for actual escort duty, sum non-overlapping intervals and divide allocated mass by N; missing factors/speciation remain gaps. | cp_emission; cp_energy; cp_task | species per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_function | escort_service | Positive physical role/task evidence plus documented residual classification and exclusions; an invoice or unrelated NAICS code is insufficient. | cp_task; un-cpc-67490 |
| dq_scope | all inventory rows | Same exact role/team, route/extent and period; all actual vehicle travel, standby, equipment and provider coverage reconciled. | cp_task; cp_energy; cp_asset |
| dq_species | co2_air; co_air; no_air; no2_air; pm25_air | Real escort source, factor/duty units and atomic species; no generic NOx mass as each nitrogen species or duplicated PM fractions. | cp_emission |
| dq_identity | all inventory rows | Resolve actual flow identities before database-linked use; historical count support does not verify product flows. | direct identity verification |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| `validate_applicability` | Require documented noncarrier road-movement assistance and reviewed residual classification, including the competing-classification checks. Reject unexamined other service families and the explicit CPC exclusions. | un-cpc-67490 |
| `validate_task` | Require unique escort_service output, 1 item and positive N with role/team, route, vehicle/load conditions and completion handoff. Do not equate single lead-car duty and whole escort team. |  |
| `validate_inventory` | Require individual energy, materials, equipment, wastes and emissions, with complete assigned cycle and no carrier/infrastructure/supplier double count. Office electricity alone cannot represent a physical escort task. |  |
| `validate_limits` | Report unresolved identities, wear/exhaust gaps, classification limitation and lifetime uncertainty. A candidate check pass neither approves all residual activities nor establishes permits or legal compliance. |  |
| `validate_unit_export` | Treat item only as the singular local alias of the formal Number of items unit Item(s). Export Item(s) with the same numerical count and the fully qualified service definition; changing the display token does not change the flow property, service extent or normalization denominator. Do not convert a service item to time, mass, distance or a different family by relabelling its unit, or normalize an already per-reference quantity again. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | Unit-process noncarrier pilot/escort support task; narrower residual methodology |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | Same reviewed physical service family, exact role/team and comparable route/vehicle/load conditions with explicit coverage |
| excluded_use | Generic other-road-service factor; carriage, security/public policing, excluded CPC functions or unrelated residual families |
| required_metadata | All task qualifiers; positive classification rationale; role/team N; actual vehicle activity; equipment/road/lifetime boundaries; supplier coverage |
| required_quality_disclosure | Narrower-than-leaf scope; classification inference not UN named example; flow UUID gaps; wear/emission data; return allocation; lifetime uncertainty |
| update_trigger | Task family/function, role/team, route extent, traction, equipment, competing-classification interpretation or material data-quality change |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-67490 | official_guidance | UNSD CPC3.0 67490. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67490 | Residual exclusions and counterclassification screening; does not explicitly name escort; narrower applicability is independent reasoning. |
| fhwa-escort-planning | official_guidance | FHWA-HOP-16-051, Pilot/Escort Best Practices, chapter I. https://ops.fhwa.dot.gov/publications/fhwahop16051/ch1.htm | Assignment, route and actual equipment preparation logic; qualitative technical evidence, not CPC mapping or current legal specification. |
| fhwa-escort-movement | official_guidance | FHWA-HOP-16-051, Pilot/Escort Best Practices, chapter III. https://ops.fhwa.dot.gov/publications/fhwahop16051/ch3.htm | Distinct lead/rear warning/communication role and actual load-movement conditions; no numerical safety factor adopted. |
| fhwa-escort-posttrip | official_guidance | FHWA-HOP-16-050, Pilot/Escort Training Manual, module6. https://ops.fhwa.dot.gov/publications/fhwahop16050/m6.htm | Task closeout, actual mileage/time and condition logs; no default consumption or lifetime. |
| un-cpc-counterclasses | official_guidance | UNSD CPC3 explanatory notes, 6511 road freight, 85240 armoured car, 85250 guarding, 91260 police. https://unstats.un.org/UNSDWebsite/statcom/session_56/documents/BG-3o-Explanatory_Notes_of_the_Central_Product_Classification_Version3-E.pdf | Competing-function exclusions; no automatic crosswalk between escort and residual class. |
