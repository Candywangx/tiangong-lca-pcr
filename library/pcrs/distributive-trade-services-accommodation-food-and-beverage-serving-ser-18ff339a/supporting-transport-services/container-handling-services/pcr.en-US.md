---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.container-handling-services
language: en-US
sync_with: pcr.zh-CN.md
status: candidate
---

# Container handling services

## 1. Scope and Applicability

This PCR defines one contracted terminal handling stage for a container of a declared configuration: acceptance at a specified start interface, the actual lifting and internal positioning required, and handover at a specified end interface. A stage may be vessel-to-stack unloading, stack-to-vehicle loading, or a complete vehicle-to-vehicle transfer; identify the exact stage and do not pool these different functions. Declare both endpoints, actual modes, box length/type, empty or loaded state, refrigeration requirement, gross mass, lift count and terminal route. Include stevedoring only when it is within those endpoints. The category covers containerized cargo handling and terminal facilities across transport modes; each concrete dataset represents one specified service configuration. [Source: `un-cpc-container`]

Exclude non-containerized freight and baggage handling, sea/rail/road line-haul, external drayage, port navigation and berth provision, separately contracted warehousing, container manufacture/repair and the production/use of the contained goods. Dry, reefer, tank, different lengths, empty and loaded containers require distinct declared service scenarios. Never mix unlike scenarios into an unqualified average or extrapolate by a universal TEU multiplier. Meter reefer supply during the declared cycle separately; long-term refrigerated storage remains outside this cycle. Routine unavoidable intermediate dwell and rehandles remain in this cycle; explicitly separate prolonged paid storage. Containers and goods are custody objects, not newly produced reference outputs or consumed material inputs. No environmental superiority claim follows from one service count.

## 2. Product Category Identity

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.container-handling-services |
| classification_refs | CPC 3.0 67110; exact |
| covered_products | Containerized cargo terminal handling across transport modes; each dataset fixes box configuration, loaded state and conditioning requirement |
| excluded_products | Line-haul; non-containerized cargo; storage service outside the cycle; container/goods production |
| representative_product | One loaded 20-foot dry-container transfer from inbound road chassis through the terminal yard to an outbound rail wagon |
| production_route | Accept custody → actual lifts and internal positioning → verify and complete outbound handover |
| market_state | Completed terminal handling service, with identifiable container custody and activity records |

## 3. Reference Flow

| Field | Value |
| --- | --- |
| What | Transfer one identified container of a specified type, length, loaded state and conditioning requirement across a declared terminal handling cycle |
| How much | One completed container cycle; record actual gross mass and every internal move |
| How well | Meet the actual contracted custody, safety, damage and delivery requirements, with recorded completion; no invented performance grade |
| How long or cycle | From acceptance at the declared start interface to completed handover at the declared end interface, including retries, intermediate dwell and rehandles within that stage |
| reference_flow_link | `accepted_cycle` |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | Completed handling cycle of one specified freight container |
| Reference flow property | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | terminal and period; container ID; exact type and length; empty/loaded state; refrigeration requirement and temperature/connection duration if applicable; actual cargo/gross mass; stage type; start/end interfaces and modes where present; exact handover locations/times; completed cycle count; lift/rehandle count; internal distance; intermediate dwell; equipment route/powertrain; electricity region/voltage; actual contracted acceptance; operator/provider split; storage cutoff; asset scope |

Item(s) counts one completed declared handling stage, not automatically a TEU, crane lift, tonne, tonne-kilometre, invoice or container manufactured. A lift is the service count only when it completes the entire declared stage; intermediate lifts remain activity. A round trip or repeated dispatch is a separate cycle only when its own endpoints and service actually occur. Declare every qualifier in the data package; unlike routes and scopes are reported separately. Report TEU and freight tonnes as supplementary activity only; no generic conversion factor substitutes for observations.

## 4. Measurement and Unit Rules

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| cycle_count | reference product | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Count completed matched start/end handovers using cp_activity; internal moves and retries within that same contracted stage do not increase output. |
| activity_separation | accepted_cycle | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Keep cycle count distinct from lifts and TEU; gross cargo/container mass and distance are qualifiers, not normalization denominators. |
| fuel_identity | diesel | Mass | kg | If receipts are in litres, use traceable batch density at the recorded temperature; retain original quantity and conversion evidence. |

## 5. System Boundary

### Boundary Abstraction

| Field | Value |
| --- | --- |
| declared_starting_condition | Container is accepted at the defined start interface (vessel, vehicle or identified stack position) with existing goods, container and installed terminal; upstream resources and assets are not assumed burden-free |
| starting_condition_role | foreground_start |
| product_classification_scope | The specified container handling cycle only; no automatic extension to freight transport or storage |
| recursive_input_rule | Subcontracted handling within the same cycle enters once as its defined service share with upstream inventory; remove the overlapping owned energy/equipment operations |
| upstream_dataset_requirement | Geographically and technically matched utilities, fuels, maintenance, specific equipment manufacturing, pavement construction and treatment inventories |
| disclosure | Exact custody endpoints and dwell cutoff; all operators/sites/periods; lifts, fuels, utilities, assets, waste and emission screen; upstream gaps and explicit exclusions |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| boundary_operations | Include actual lifting, internal tractor moves, retries, standby, relevant yard lighting/control and attributable maintenance through the recorded end-interface handover. Select the real equipment route rather than assuming that every terminal uses diesel cranes. | epa-che |
| boundary_custody | Carry the identities and actual gross mass of goods/container through the activity ledger; do not import their full manufacture into a handling service or create duplicate goods outputs. Separate external haulage and contracted storage. | un-cpc-container |
| boundary_assets | Screen equipment manufacture, yard pavement construction/renewal and terminal support; add one specific exchange for each other actual asset or utility. Disclose upstream exclusions; absent evidence is not a zero burden. |  |
| boundary_releases | Screen each actual fuel, pollutant species, oil leak, maintenance waste and washwater; keep emissions to air, waste sent to treatment and upstream electricity emissions separate. A NOx total requires a reviewed species treatment and cannot populate both NO and NO2 rows. |  |

## 6. Process Inventory Structure

Cards are individual exchanges and are conditional where stated. Add separate specific rows for any actual exchange absent here, including another fuel, a lubricant, cleaning chemical, refrigerant or equipment type. An electrically powered cycle does not imply onsite combustion or refrigerant leakage. Reefer electricity is separately metered; any actual refrigerant loss inside the declared boundary needs its own named substance row and release compartment, with ownership and fuel/provider overlap reconciled. Record a physical oil leak as a separate elementary species/compartment flow after composition and identity review; used oil sent to treatment is not that release.

### Process Map

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| handling | Operate and support the defined container handover cycle | required | Actual terminal route with each card condition applied | foreground_production | per reference flow |

### Process: Operate and support the defined container handover cycle (`handling`)

#### Inputs

##### Product flows

###### Electricity, alternating current, terminal user supply (`electricity`)

Meter actual cranes, terminal vehicles, lighting and control equipment; exclude separately metered reefer supply from this row; state region, voltage and supply mix. Include attributable standby and charging losses.

- Selected flow: Electricity, alternating current, terminal user supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Electricity supplied to a connected reefer container (`reefer_electricity`)

Conditional on an actually connected temperature-controlled container during the defined handling cycle. Meter this electricity separately from handling equipment and record connection time, setpoint, ambient conditions and grid supply. Exclude the same supply from electricity, providers and separately modelled storage; no energy-per-hour default.

- Selected flow: Electricity, alternating current, reefer-container user supply
- Flow property / unit: Energy / kWh
- Amount rule: Attributable measured exchange amount per reference flow; cp_energy.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_energy`
- Sources:

###### Diesel fuel, unblended (`diesel`)

Conditional on equipment actually burning unblended diesel. Fuel blends or other fuels require their own atomic row and verified composition; do not reuse this row.

- Selected flow: Diesel fuel, unblended
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_fuel.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_fuel`
- Sources:

###### Mineral hydraulic oil (`hydraulic_oil`)

Conditional on actual replacement or replenishment during attributable maintenance; reconcile delivered oil, stock change, recovered oil and leaks.

- Selected flow: Mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_material.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_material`
- Sources:

###### Tap water (`water`)

Conditional on actual equipment cleaning and service support; meter supply and separate cargo cleaning outside this service.

- Selected flow: Tap water
- Flow property / unit: Volume / m3
- Amount rule: Attributable measured exchange amount per reference flow; cp_water.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_water`
- Sources:

###### Configured container gantry crane (`crane_share`)

Conditional on this owned equipment type. Attribute its manufacturing inventory from recorded service utilization and supported whole-life denominator; other equipment types need distinct rows.

- Selected flow: Configured container gantry crane
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Configured container terminal tractor (`tractor_share`)

Conditional on actual owned tractor use inside the terminal; identify model and manufacturing boundary, excluding external road haulage.

- Selected flow: Configured container terminal tractor
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: Attributable measured exchange amount per reference flow; cp_assets.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_assets`
- Sources:

###### Container terminal asphalt pavement section (`pavement_share`)

Conditional on use of an identified asphalt yard section. Attribute construction and actual renewal once using area, supported life and service use; do not mix the whole port infrastructure into this flow.

- Selected flow: Container terminal asphalt pavement section
- Flow property / unit: Area / m2
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

###### Completed handling cycle of one specified freight container (`accepted_cycle`)

One declared stage fixes one box type, length, loaded state and refrigeration requirement. It begins at the recorded start-interface acceptance and ends at the recorded end-interface handover within one terminal; internal moves and failed attempts within that stage belong to its inventory.

- Selected flow: Completed handling cycle of one specified freight container
- Flow property / unit: Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- Amount rule: 1 Item(s)
- Value mode: `fixed_value`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_activity`
- Sources:

##### Waste flows

###### Used mineral hydraulic oil (`used_oil`)

Conditional on segregated oil actually removed; weigh and identify recipient and treatment. The oil input and waste output are distinct exchanges.

- Selected flow: Used mineral hydraulic oil
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Discarded steel crane wire rope (`wire_rope`)

Conditional on actual rope replacement; weigh this steel stream separately from other maintenance wastes; no automatic recycling credit.

- Selected flow: Discarded steel crane wire rope
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_waste.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_waste`
- Sources:

###### Oily equipment washwater (`oily_washwater`)

Conditional on actual collected oily washwater; measure volume and relevant composition and identify treatment. Do not classify transfer to sewer as a direct river release.

- Selected flow: Oily equipment washwater
- Flow property / unit: Volume / m3
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

Conditional on actual onsite fossil fuel combustion; obtain measured release or calculate from verified fuel-specific carbon data and oxidation basis. Supplier electricity emissions remain upstream.

- Selected flow: Carbon dioxide, fossil, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Nitrogen monoxide, to air (`nitrogen_monoxide`)

Conditional on actual release; require species-resolved measured or equipment-specific supported evidence. An aggregate NOx record cannot be silently treated as NO.

- Selected flow: Nitrogen monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Nitrogen dioxide, to air (`nitrogen_dioxide`)

Conditional on actual release; record NO2 separately from NO and verify any conversion basis rather than copying a combined NOx quantity.

- Selected flow: Nitrogen dioxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

###### Carbon monoxide, to air (`carbon_monoxide`)

Conditional on actual combustion release; use pollutant-specific supported observations, operating load and exhaust-control configuration.

- Selected flow: Carbon monoxide, to air
- Flow property / unit: Mass / kg
- Amount rule: Attributable measured exchange amount per reference flow; cp_release.
- Value mode: `foreground_record`
- Specificity: `site_specific`
- Normalization basis: per reference flow
- Basis kind: `reference_flow`
- Evidence kind: `collected_record`
- Collection protocol: `cp_release`
- Sources:

## 7. Allocation and Co-product Handling

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_meter | Submeter the specific route first. Where shared, allocate reconciled actual energy/support totals using measured equipment load-time and documented cycle activity; retain standby and failed attempts. Split unlike routes before division by accepted cycles; neither TEU nor revenue alone proves equal work. |  |
| allocate_assets | Maintain a persistent asset ledger. Attribute equipment and the identified pavement section by supported lifetime service utilization and actual cycle use; observed-period accounting distributes only the already attributed period share. Cumulative allocated manufacturing/construction shares across all cycles and periods must not exceed one. Do not reset at each reporting year; unknown lifetime or denominator remains explicit review. |  |
| allocate_overlap | A service provider inventory replaces its covered operating/asset burdens once. Reconcile port support, paid storage and other services before allocation; service price and custody goods are not co-products. Segregated maintenance waste receives no automatic avoided-production credit. |  |

## 8. Foreground Data Collection, Calculation, and Quality Rules

### Data Collection Protocols

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_activity | handling | accepted_cycle | Custody activity ledger | container ID; type; loaded state; gross mass; endpoints/times; modes; lifts; rehandles; internal distance; dwell; acceptance | Match start/end records for the same box and completed declared stage; retain unsuccessful operations in its inventory | Item(s) | each cycle | full cycle including retry and intermediate dwell | all included terminal operators | per reference flow | custody receipts; terminal operating system events; accepted totals reconciliation |
| cp_energy | handling | electricity; reefer_electricity | Meter and equipment log | meter; interval; kWh; voltage; grid; equipment hours; standby; charging loss; shared support; reefer connection times and temperature; separate reefer meter; allocations | Submeter or reconcile interval meters with measured load-time; do not use rated power without actual duty evidence | kWh | each meter interval/cycle | full cycle plus attributable standby/support | included terminal and subcontractors | per reference flow | calibrated meters; activity logs; supplier boundary reconciliation |
| cp_fuel | handling | diesel | Fuel balance | fuel grade; receipts; stock; measured kg; actual litres/density/temperature; equipment; route share | Reconcile issues and stock changes; preserve measured fuel identity and any density conversion | kg | each issue and reporting interval | full attributable operation | actual fuel-burning equipment | per reference flow | fuel invoices; tank readings; density records; consumption reconciliation |
| cp_material | handling | hydraulic_oil | Maintenance material balance | grade; issued/returned oil kg; stock; maintenance event; asset; recovered oil; leak | Weigh or use traceable actual product density; assign actual maintenance to supported service use | kg | each maintenance event | maintenance supporting the declared service period | included terminal assets | per reference flow | maintenance and stock ledger; supplier specifications |
| cp_water | handling | water | Water meter | meter; m3; cleaning event; support allocation; wastewater destination | Meter attributable supply, separating cargo cleaning outside scope | m3 | each cleaning/meter interval | all actual cleaning/support | included terminal | per reference flow | meter records; cleaning log; water balance |
| cp_assets | handling | crane_share; tractor_share; pavement_share | Persistent asset utilization ledger | asset ID/type/configuration; manufacturing or construction inventory; item count or pavement area m2; actual service utilization; supported lifetime service denominator; prior cumulative share; period share; renewal events | Link real equipment/section to its upstream inventory and use ledger. Assign only the actual cycle fraction; conserve cumulative shares across periods; no default lifespan or asset mass | Item(s); m2 | each cycle allocation and asset update | full supported asset life with declared observation period | actual owned crane/tractor and identified asphalt yard section | per reference flow | asset records; construction plans; operating logs; denominator support; sensitivity; cumulative fraction reconciliation |
| cp_waste | handling | used_oil; wire_rope; oily_washwater | Segregated waste ledger | individual stream; measured kg or m3; composition; maintenance event; recipient; treatment; attributable share | Weigh each solid/oil stream and meter washwater separately; reconcile actual treatment and overlap | kg; m3 | each waste transfer | full attributable maintenance/cleaning | actual terminal and treatment handover | per reference flow | weigh tickets; transfer notes; waste composition; treatment inventory |
| cp_release | handling | fossil_co2; nitrogen_monoxide; nitrogen_dioxide; carbon_monoxide | Species-specific release record | pollutant species; kg; air compartment; fossil origin; equipment/load; sampling; actual fuel; supported factor and basis if calculated | Use actual species measurements or reviewed fuel/equipment-specific calculation evidence; maintain NO and NO2 distinction and uncertainty; no default emission factor | kg | each monitored operation or representative supported interval | all actual onsite emitting operations | included terminal equipment | per reference flow | measurement reports; documented factors; fuel/load reconciliation; uncertainty |

### Calculation Rules

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cycle_attribution | all inventory rows | Assign directly measured cycle exchanges first; for a homogeneous declared route divide reconciled attributable period totals by actual completed cycle count. Failed operations remain in numerator. Reference output is exactly 1 Item(s). | cp_activity; actual attributable totals | exchange amount per reference flow |  |
| asset_attribution | crane_share; tractor_share; pavement_share | Multiply the specific upstream asset inventory by the supported cycle fraction of whole-life service. Reconcile prior and current fractions; do not allocate a whole asset in every observation period. | cp_assets; supported lifetime denominator; cycle use | asset amount per reference flow |  |
| pollutant_accounting | fossil_co2; nitrogen_monoxide; nitrogen_dioxide; carbon_monoxide | Calculate each species only from its verified equipment/fuel/activity basis when direct measurement is absent; record actual factor, units and uncertainty in the dataset. Do not copy NOx to individual species or upstream electricity CO2 to onsite release. | cp_release; cp_fuel; reviewed species evidence | individual release amount per reference flow |  |

### Data Quality Requirements

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_cycle | accepted_cycle | Demonstrate matched stage handovers and all reference qualifiers; when loading and unloading are separate stages, prevent counting their sum again as an additional full transfer. Distinguish boxes, TEU, lifts and cycles; report incomparable routes separately. | cp_activity |
| quality_coverage | all inventory rows | Reconcile complete fuel/energy/material/waste activity and operator boundaries, conditional absence and actual upstream datasets; unresolved evidence is disclosed, never zero. | cp_energy; cp_fuel; cp_material; cp_water; cp_waste; cp_release |
| quality_assets | crane_share; tractor_share; pavement_share | Verify supported life/service denominator and conserved cumulative share. Unknown denominator prevents a complete lifecycle claim; report sensitivity and future reconciliation. | cp_assets |
| quality_identity | all inventory rows | Verify each semantic flow, property, unit group and compartment against direct identity evidence before adopting a UUID; keep unsupported identities separate from verified records. | actual identity evidence |

## 9. Validation Rules

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_reference | Require one unique accepted_cycle product output equal to 1 Item(s) and matched start/end handovers of one declared handling stage for a container with the declared type, length, loaded state and conditioning requirement. Reject TEU, lifts, tonnes, tkm and goods outputs as substitute reference counts. | un-cpc-container |
| validate_boundary | Check all operations between declared handovers and asset/support coverage. Reject double-counted external transport, storage, subcontracted operations, goods burdens and provider-covered resources. |  |
| validate_atomic | Require one specific exchange per row and explicit conditional applicability. Keep individual fuel grades, waste streams and pollutant species separate; unresolved UUIDs do not permit collection labels. |  |
| validate_data | Reconcile measurements, original units, conserved asset shares and emission species. Flag missing identities, factors, upstream inventories and lifetime denominators; do not claim publication readiness or complete lifecycle coverage from this methodology draft. |  |

## 10. Published Dataset Profile

| Field | Value |
| --- | --- |
| dataset_role | container_handling_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | The defined container handling component of a traced logistics chain with compatible configuration and custody endpoints |
| excluded_use | Complete freight transport/storage footprint; unqualified transfer to other box configurations; unqualified cross-terminal comparison; goods/container manufacture; automatic TEU-to-cycle conversion |
| required_metadata | All reference qualifiers; route and period; actual resource and asset scope; provider split; upstream dataset versions; allocation and source applicability |
| required_quality_disclosure | Identity/measurement gaps; onsite versus upstream emissions; asset denominator uncertainty; omitted operations; unsupported factors and comparison limitations |
| update_trigger | Changed container configuration, endpoints, route, equipment/powertrain, supply mix, storage scope, allocation or asset lifetime evidence |

## 11. Data Sources

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-container | official_guidance | UNSD CPC 3.0 code 67110 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67110 | Containerized cargo/terminal handling across modes; classification only, no factors or default service denominator |
| epa-che | official_guidance | US EPA, Cargo Handling Equipment Best Practices to Improve Air Quality, CHE at Ports section, web snapshot 2026-10-23. https://www.epa.gov/ports-initiative/cargo-handling-equipment-che-best-practices-improve-air-quality | Screen container-handling equipment and diesel/electric route differences; US port examples do not establish a universal fleet, factor or full LCA boundary |
